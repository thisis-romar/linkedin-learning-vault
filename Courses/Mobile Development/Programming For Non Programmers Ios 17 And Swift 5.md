---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: programming-for-non-programmers-ios-17-and-swift-5-21049778
url: "https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778"
level: Beginner
updated: 5/1/2024
learners: 2889
skills:
  - Swift (Programming Language)
  - iOS Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEDp8zu12cDKw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1714428048520?e=2147483647&amp;v=beta&amp;t=XsNFy4-eflffYe8USFN7kpKcYvbwNmKzWt4u7uRADss"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Master Swift]]'
next_courses:
  - '[[Swift 5 Essential Training]]'
path_nav: '[{"path":"Master Swift","position":1,"total":4,"prev":null,"next":"Swift 5 Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/swift-programming-language
  - skill/ios-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Programming%20For%20Non%20Programmers%20Ios%2017%20And%20Swift%205.md)

![Programming For Non Programmers Ios 17 And Swift 5](https://media.licdn.com/dms/image/v2/D560DAQEDp8zu12cDKw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1714428048520?e=2147483647&amp;v=beta&amp;t=XsNFy4-eflffYe8USFN7kpKcYvbwNmKzWt4u7uRADss)

# Programming For Non Programmers Ios 17 And Swift 5

> This course offers an approachable, easily digestible entry point to native iOS app development for those unfamiliar with basic programming constructs. Todd Perkins, a developer who specializes in iOS, uses concepts you already understand to make analogies that help you learn programming concepts with ease. Learn how to set up your coding environment and use variables to build a UI. Familiarize yo

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778) | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know before watching this course](#what-you-should-know-before-watching-this-course)
  - [The finished app](#the-finished-app)
- [**1. Setting Up Your Coding Environment**](#1-setting-up-your-coding-environment) (3 videos)
  - [Creating an Xcode project](#creating-an-xcode-project)
  - [Understanding the Xcode interface](#understanding-the-xcode-interface)
  - [Adjusting Xcode preferences and settings](#adjusting-xcode-preferences-and-settings)
- [**2. Programming Building Blocks: Variables**](#2-programming-building-blocks-variables) (4 videos)
  - [Understanding how programming works](#understanding-how-programming-works)
  - [Understanding variables and constants](#understanding-variables-and-constants)
  - [Working with variables in a playground](#working-with-variables-in-a-playground)
  - [Using variables in SwiftUI](#using-variables-in-swiftui)
- [**3. Using Variables to Build a UI**](#3-using-variables-to-build-a-ui) (8 videos)
  - [SwiftUI layout basics](#swiftui-layout-basics)
  - [Creating custom SwiftUI components](#creating-custom-swiftui-components)
  - [Creating calculator buttons](#creating-calculator-buttons)
  - [Setting button text](#setting-button-text)
  - [Setting button width](#setting-button-width)
  - [Setting button colors](#setting-button-colors)
  - [Challenge: Create the value text view](#challenge-create-the-value-text-view)
  - [Solution: Create the value text view](#solution-create-the-value-text-view)
- [**4. Programming Building Blocks: Methods**](#4-programming-building-blocks-methods) (9 videos)
  - [Understanding methods](#understanding-methods)
  - [Using methods](#using-methods)
  - [Running code when a button is pressed](#running-code-when-a-button-is-pressed)
  - [Using a method as a variable](#using-a-method-as-a-variable)
  - [Passing parameters to method variables](#passing-parameters-to-method-variables)
  - [SwiftUI binding](#swiftui-binding)
  - [Using different methods to handle different events](#using-different-methods-to-handle-different-events)
  - [Challenge: Create methods for the equal button](#challenge-create-methods-for-the-equal-button)
  - [Solution: Create methods for the equal button](#solution-create-methods-for-the-equal-button)
- [**5. Programming Building Blocks: Control Flow**](#5-programming-building-blocks-control-flow) (7 videos)
  - [Understanding conditional statements](#understanding-conditional-statements)
  - [Using conditional statements and Booleans](#using-conditional-statements-and-booleans)
  - [Handling the numeric button presses](#handling-the-numeric-button-presses)
  - [Optionals and If Let statements](#optionals-and-if-let-statements)
  - [Enums](#enums)
  - [Challenge: Conditionals](#challenge-conditionals)
  - [Solution: Conditionals](#solution-conditionals)
- [**6. Finishing the Application**](#6-finishing-the-application) (7 videos)
  - [Storing the saved number](#storing-the-saved-number)
  - [Showing the total when the equals button is tapped](#showing-the-total-when-the-equals-button-is-tapped)
  - [Formatting the total number](#formatting-the-total-number)
  - [Replacing the mode buttons with symbols](#replacing-the-mode-buttons-with-symbols)
  - [Adding an app icon](#adding-an-app-icon)
  - [Challenge: Clear button](#challenge-clear-button)
  - [Solution: Clear button](#solution-clear-button)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=1)** - [Narrator] Are you ready for a career change?
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=3)** Do you have a brand or product that could use its own app?
>
> **[0:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=6)** Have you had a brilliant app idea that you just might be able to create yourself with a little training?
>
> **[0:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=13)** My course is just for you.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=15)** I've spent the last 15 years developing iOS applications and I want to share with you what I wish I knew from the beginning based on my personal experience.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=25)** With my course, you'll be able to go from knowing nothing about iOS or even programming in general, to building a simple iOS app in a single afternoon.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=35)** All you need is a computer running macOS.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=38)** I'm Todd Perkins, a senior iOS developer, and I absolutely love programming.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=44)** I want to teach you what it takes to become a programmer yourself.
>
> **[0:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=48)** In this course, we'll build a calculator app from scratch, 100% in code using [[Swift (Programming Language)|Swift]] UI with no prerequisite knowledge required, and we'll do it in just a couple hours.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/welcome?u=76281980&t=60)** Check out my course on programming for non-programmers and get started on a rewarding path to achieve your career goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1)
> **Code Identifiers:** ios (4), macos (1)
> **Definitions:** is a  (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [narrator] (1)

#### [What you should know before watching this course](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/what-you-should-know-before-watching-this-course?u=76281980&t=1)** - [Instructor] Let's talk about what you should know coming into this course.
>
> **[0:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/what-you-should-know-before-watching-this-course?u=76281980&t=4)** This is a basic course, targeted at beginners, so all you need is a computer running macOS, a little bit of familiarity with the operating system, and the ability to work with text in a text editor, because we're going to be writing a good amount of code throughout the course.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/what-you-should-know-before-watching-this-course?u=76281980&t=21)** So if you see this list and feel comfortable, you're ready to proceed with the course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### [The finished app](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=1)** - [Instructor] Here's the final version of the app we're going to build in the course.
>
> **[0:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=5)** It's a calculator app with a custom icon.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=8)** If I open it up, you'll see that it renders in light mode with a light background and dark text.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=14)** It works how you'd expect.
>
> **[0:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=16)** You could enter numbers in the calculator, hit a mathematical operator, enter more numbers, hit the equal sign, and then see the result.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=25)** The clear button clears the value in the calculator.
>
> **[0:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=28)** The app also supports dark mode.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=31)** When you go to dark mode, you're going to see a dark background with light-colored fonts right here.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=37)** The app also supports dynamic fonts.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=40)** The way this course is structured is for brand new programmers.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=44)** So the way we're going to build the app is learn one basic programming concept, and then look at how that concept applies to building our calculator app.
>
> **[0:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=54)** It will repeat that process until the app is complete.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/the-finished-app?u=76281980&t=58)** So let's get started.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up Your Coding Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating an Xcode project](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-an-xcode-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-an-xcode-project?u=76281980&t=1)** - [Instructor] The official tool for building iOS apps is called [[Xcode]], which could be downloaded for free at the Mac App Store.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-an-xcode-project?u=76281980&t=8)** Once you've downloaded and installed Xcode, open up the application and after reading through and agreeing to the licensing agreement, you'll be asked to install additional required components.
>
> **[0:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-an-xcode-project?u=76281980&t=19)** Make sure you check the box to install the iOS platform from this screen, and then click the button to download and install those components.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-an-xcode-project?u=76281980&t=27)** After getting past the What's New in Xcode screen, you should see the welcome screen, which looks like this.
>
> **[0:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-an-xcode-project?u=76281980&t=33)** Once you see the welcome screen, you're ready to proceed with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (3)
> **Prerequisites:** install (3)
> **Code Identifiers:** ios (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the Xcode interface](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=0)** - [Instructor] Once [[Xcode]] is installed, along with the required components, opening Xcode will take you to the Welcome screen, which enables you to quickly create a new project or open an existing project, whether locally or from a repository.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=14)** To create your first iOS app, create an Xcode project by clicking the Create New Project button here or through the File menu by going to File, New project.
>
> **[0:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=26)** When creating a new project, you're asked to choose a template for the project.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=31)** These templates are organized by platform, so you'll see multi-platform, IOS, macOS, et cetera.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=38)** Selecting a platform gives you options for the type of application or framework you want to create.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=44)** For this course, we're going to create an iOS app, so in the iOS category, click App, and then hit Next.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=51)** Here, you're given several options to create your project, many of which don't apply to creating a simple app, as we're doing here.
>
> **[0:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=59)** The important ones are Product Name and Interface.
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=62)** For Product Name, type First App, and then for Interface, make sure to choose SwiftUI.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=69)** For team, choose None.
>
> **[1:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=71)** For Organization Identifier, it's not relevant until you need to send your app to the App Store, but you can't leave it blank, and you get a hint if you try to.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=81)** This is meant to be a reverse domain name as in com.example if your domain is [example.com](https://example.com), which is used along with your Product Name to generate a unique ID for your app.
>
> **[1:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=93)** You can type com.yourname here to satisfy the requirements to create our project for now.
>
> **[1:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=99)** Make sure you have None selected for Storage, as we're not going to use persistent storage for this app.
>
> **[1:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=105)** Leave the other options unchecked, and hit Next.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=109)** You're then asked where to save the project and whether to create a [[Git]] repository.
>
> **[1:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=115)** For what we're doing here, we don't need to create a Git repository, so leave that unchecked, and then I'm saving this in my Exercise Files folder in Chapter 01, First_project, Final.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=126)** If you're following along with the Exercise Files, just save right outside of this folder so as to not create a conflict.
>
> **[2:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=132)** So with that selected, I'll hit Create to create the new project.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-the-xcode-interface?u=76281980&t=136)** After a few seconds, it loads into the Xcode interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (4), [[Git]] (2)
> **CLI Commands:** make (2), git (2)
> **Code Identifiers:** ios (3), macos (1)
> **Exercise Files:** exercise files (2), template (1)
> **URLs:** [example.com](https://example.com) (1)
> **Env Vars:** ios (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** make sure you have (1)

#### [Adjusting Xcode preferences and settings](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=1)** - [Instructor] The [[Xcode]] interface is somewhat complicated and can be overwhelming.
>
> **[0:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=5)** To make it easier to learn Xcode, I'm going to go over the three parts of the interface and talk about how the interface is generally used.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=15)** As we go throughout the course and we use specific parts of the interface, we'll talk about those parts in more detail.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=22)** So I'm going to start by going into full screen mode, and I want to point out the main interface pieces first.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=31)** At the top of the screen, we have the toolbar.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=34)** And on the left and the right of the toolbar are options to hide the left and right views.
>
> **[0:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=43)** The view on the left is called the navigator, and the view on the right is called the inspector.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=50)** The navigator view allows you to navigate various things, your project, source control, bookmarks, searching items in your code, debugging, et cetera.
>
> **[1:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=65)** The main button that we're going to use in this course is the Project Navigator, which is the folder icon all the way on the left.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=74)** The item that you have selected in the Project Navigator controls what you see in the editor.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=81)** So the editor is this main working area in Xcode.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=85)** So right now, I am seeing the code in the ContentView.[[Swift (Programming Language)|swift]] file, and you could see that up here in the comment in the editor.
>
> **[1:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=94)** If I single click on First_App, then I'll see the code for that file.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=100)** I'll go back to the ContentView.
>
> **[1:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=102)** Note that because this is a Swift UI view, it also has the canvas on the right side.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=109)** So as we edit code here on the left side of the editor, the canvas will instantly update giving us visual feedback as we work.
>
> **[1:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=119)** The inspector area on the right is controlled by what's in the editor.
>
> **[2:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=124)** So for example, if I have this rightmost button selected in the inspector bar, which is the attributes inspector, that's the one with the sliders on it, and then I click on this image text inside of my code right here on line 13, then I'll see attributes for the selected code inside of the attributes inspector.
>
> **[2:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=150)** If I click on VStack, then I'll see settings for the vertical stack.
>
> **[2:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=155)** Same with text.
>
> **[2:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=156)** If I click on that, I'll see its settings.
>
> **[2:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=159)** So while the navigator controls the editor, the editor controls the inspector, and the inspector modifies the thing that you have selected in the editor.
>
> **[2:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=169)** So to review, we have the toolbar at the top.
>
> **[2:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adjusting-xcode-preferences-settings?u=76281980&t=174)** We have the navigators on the left, inspectors on the right, and the main working area called the editor in the center of the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (3), [[Swift (Programming Language)|Swift]] (2)
> **UI Navigation:** click on (4)
> **Definitions:** is called (2), is a  (1)
> **File Paths:** contentview.swift (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)


### 2. Programming Building Blocks: Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding how programming works](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=0)** - [Instructor] Learning programming can seem very overwhelming, but on a basic level, it's pretty easy to understand how it works.
>
> **[0:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=9)** When you're programming, the first thing that you do is you write code in a human readable language.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=17)** Now, you may be thinking, I've seen code before, it doesn't look human readable at all, but consider this simple example.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=24)** I have some code on the left and then an example of what that code is doing on the right.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=30)** If I click on the globe, the code that controls the globe is highlighted.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=35)** So you see the English [[Microsoft Word|word]] image, which creates the image, A systemName, which has the name of the image, which is rendering a globe here, et cetera.
>
> **[0:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=46)** If I click on the text, you'll see below that, so text is created by using the word text, and then inside of the double quotes, you see Hello world, which is what's rendered inside of the view on the right.
>
> **[0:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=59)** So this is what I'm referring to when I say that code is written in a human readable language.
>
> **[1:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=65)** To get that code to run on some kind of a device, it needs to be translated into a machine readable language.
>
> **[1:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=73)** And then when the code is compiled into that readable language, it's built into an executable file that the device can run.
>
> **[1:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=82)** After that, we run the executable as an application, and then we see the code being executed.
>
> **[1:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=89)** The last three steps may sound kind of complicated, but they're actually done using the press of a button, and that button is this Run button at the top left inside of [[Xcode]].
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=100)** So if I click this, the application is compiled into a machine readable language, it's turned into an app, it's installed in the simulator, and the simulator app opens up and runs our application.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-how-programming-works?u=76281980&t=114)** So to get started with programming on a basic level, all you need to do is write some code and then hit this button and it will run on a simulator or on your device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Xcode]] (1)
> **UI Navigation:** click on (2)
> **Code Identifiers:** systemname (1)
> **Speakers:** - [instructor] (1)

#### [Understanding variables and constants](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=1)** - [Instructor] Programming is made up of multiple foundational building blocks, and the first of those are called variables, and constants, which are sort of a type of variable.
>
> **[0:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=12)** Let's talk about what variables are.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=14)** Variables are similar to nouns in a spoken language.
>
> **[0:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=18)** So if you think of any noun, any person, place, or thing, that's what variables are.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=24)** There are the things of code.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=27)** They are named containers that hold data, and they're used all over in every application.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=35)** So here's a basic example of a variable.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=38)** This is called score, and it's set equal to the value of 10.
>
> **[0:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=43)** A place where you might use a variable like this is in a game, so you have some way to keep track of the player's score.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=50)** It's a value that represents a number, and then the variableness of it is that it can change over time.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=58)** So to create it, we use the var keyword, then the name of the variable, and then we give it a value with the equal sign, and we set the value on the right side of the equal sign.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=68)** In [[Swift (Programming Language)|Swift]], declaring the data type of a variable is optional.
>
> **[1:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=73)** So score is a whole number, which is 10, and we can optionally declare it as an integer, which is the data type for a whole number, by typing a colon after the variable name and then the data type of that variable, in this case int, again, short for integer, just like this.
>
> **[1:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=93)** If you want to modify a variable after you've declared the variable already, you type the name of the variable, and then you use an equal sign and then you set the new value of the variable.
>
> **[1:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=106)** You'll notice that we're not using the var keyword here.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=109)** Var says to create a new variable.
>
> **[1:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=113)** This code is modifying an existing variable.
>
> **[1:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=117)** So what it's setting it equal to is the current value of score plus 10.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=123)** So if score was 1 before, then we're setting it equal to score, which is 1, plus 10, which is equal to 11.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=134)** So setting values of variables allows us to put the variable itself on the right side of the equal sign.
>
> **[2:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=141)** There's also a shorthand way to do the same operation, and it looks like this, score plus equals 10.
>
> **[2:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=149)** That means increment score by 10.
>
> **[2:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=153)** We've looked at using numeric variables, but there are actually all kinds of different types of variables.
>
> **[2:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=159)** One of those types is called a String, and a String is used to hold values like text.
>
> **[2:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=166)** Those values, as you'll see on the right, are wrapped in double quotes in Swift.
>
> **[2:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=171)** So here's a variable, it's called address, and the data type is String.
>
> **[2:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=176)** So it has colon and then String with a capital S, and it's set equal to the value on the right.
>
> **[3:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=183)** Constants are similar to variables except they can't change after you create them.
>
> **[3:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=189)** So here's an example of a constant.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=192)** It looks just like the variable that we set before with the one difference that we're using the let keyword instead of the var keyword.
>
> **[3:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=201)** If you try to modify a constant after it's created, you're going to get an error in your code.
>
> **[3:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=208)** When you create variables, there are some important naming conventions to follow.
>
> **[3:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=213)** You want to start with a lowercase letter, don't have any spaces, so you can separate words by using camelCase.
>
> **[3:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=221)** That is each new [[Microsoft Word|word]] should start with a capital letter.
>
> **[3:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=225)** Only use letters and numbers.
>
> **[3:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=227)** Swift allows you to use other types of characters, like even emojis, in your variable names, but I don't recommend that because that's not going to translate over if you decide to learn other languages.
>
> **[3:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=238)** And it's generally considered not necessarily a good practice.
>
> **[4:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=243)** So let's review what we've talked about in this movie about variables.
>
> **[4:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=246)** Variables and constants are containers that hold data and they have names.
>
> **[4:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=252)** Use the keyword var or let to declare or create a variable or a constant respectively.
>
> **[4:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=260)** The colon operator allows you to declare a data type.
>
> **[4:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=265)** In Swift, declaring this data type is optional.
>
> **[4:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=268)** You can set values and modify them in the case of variables by using an equal sign.
>
> **[4:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-variables-and-constants?u=76281980&t=275)** Finally, make sure to follow proper naming conventions when creating variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (4), [[Microsoft Word|Word]] (1)
> **Definitions:** is called (2), is a  (1), short for (1)
> **Analogies:** similar to (2), just like (2)
> **Best Practices:** good practice (1), make sure to (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** camelcase (1)
> **Speakers:** - [instructor] (1)

#### [Working with variables in a playground](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=1)** - [Instructor] When you're working in X code, creating a playground allows you to prototype code so you can have very little code on the screen and just focus on one little piece.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=10)** And that's what we're going to do to get a little bit of practice in working with variables.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=15)** So in X code, go to file, new, and then choose playground or use the keyboard shortcut.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=21)** So I'll click that, and then what I'm going to do is choose iOS, blank, and then hit next.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=27)** And I'm going to give this just the default name and save it on my desktop.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=31)** So there's my playground and I'll go into full screen mode, and it has this greeting that says "Hello, playground".
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=38)** And if you hit this play button right here to the left of the code, so that's right over the line number, then the app will build for a second and launch, and it will show you the values of variables on the right side of the screen.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=51)** So that's really helpful when you're learning and when you're trying to develop things like [[Algorithms]].
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=56)** The first time you hit that button, it may take a minute or two before you see the result on the right.
>
> **[1:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=61)** After that, you'll see "Hello, playground" over here.
>
> **[1:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=65)** So that's the value of this string right here.
>
> **[1:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=67)** Let's click at the end of that line and go to the next line and modify the value of greeting.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=72)** So greeting space equals space.
>
> **[1:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=75)** And then remember, in double quotes we set the value of strengths.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=78)** So we'll change it to something else.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=81)** I'll just type new value right here.
>
> **[1:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=83)** And then I'm going to hit the play button again.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=85)** And then I can see at the end of line three the value of the variable is "Hello, playground", and at the end of line four, it's "new value".
>
> **[1:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=94)** Let's see what happens if I change var to let.
>
> **[1:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=98)** Remember, var creates variables and let creates constants, which cannot be changed.
>
> **[1:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=105)** So what happens if I type let right here?
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=107)** So I'll type let then click away, and then I see this error message, cannot assign to value, greeting is a let constant.
>
> **[1:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=115)** And if I click on this, then it tells me to change let to var to make it mutable or changeable.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=123)** So I'll hit fix, and then it reverts back to var.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=126)** So remember when you use the let keyword, it's for things that cannot change.
>
> **[2:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=130)** Let's go down a few lines, and we're going to create another variable.
>
> **[2:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=135)** Let's create it just like we did in the previous movie, and we're going to call this one "score".
>
> **[2:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=141)** And I'm going to set it equal to an integer by using a colon and a space, int with a capital I, and then a space and equals and a space, and then some kind of numeric value, for example, 10.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=154)** If I click this button right here, you can see the value.
>
> **[2:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=157)** Again, note that the number value is not in quotes, but the string value is in quotes.
>
> **[2:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=165)** So some values that you create will use quotes, and others won't.
>
> **[2:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=169)** To modify the value of score, go to the next line and then use the shorthand operator score += 10, and then hit that play button again, and then you see 20 right there.
>
> **[3:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=181)** Let's go down to the next line.
>
> **[3:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=182)** We'll set score equal to five, and then what do you expect to get there, just five.
>
> **[3:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=187)** What if we wanted to subtract?
>
> **[3:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=190)** Score -= 1, just like that.
>
> **[3:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=193)** Hit the run button and then you could see 5 - 1.
>
> **[3:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=196)** What if we want to multiply?
>
> **[3:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=198)** We use the asterisk operator to multiply, so score asterisk equals, and then some kind of number there, and then hit the run button, and there we go.
>
> **[3:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/working-with-variables-in-a-playground?u=76281980&t=208)** So to review, you can create a playground to quickly prototype your ideas and write some code with little other code in the way, and you can see values of variables line by line in playgrounds by using the run button on the left.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **UI Navigation:** go to (3), click on (1)
> **Analogies:** just like (2), for example (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using variables in SwiftUI](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=1)** - [Instructor] You can create variables in [[Swift (Programming Language)|Swift]] UI just like we did inside of our playground.
>
> **[0:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=6)** You just need to add them in the right place.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=10)** To create a variable inside of our Swift UI project, I'm going to go at the end of line 10 and then create a new line and using the var keyword, I'm going to type the variable name, which will be my and then capital T for text.
>
> **[0:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=26)** What we're going to do with our variable is replace the value of Hello world with a variable value.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=34)** So I'm going to set my text equal to a string.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=38)** So put a set of double quotes and inside there type your string.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=42)** I'm typing mine right now and then what I'm going to do is go inside of the text views parentheses right here and replace that with the name of my variable.
>
> **[0:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=54)** Note that I'm not wrapping it in quotes.
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=56)** When I type the variable name, you'll see it highlighted and you'll even see the data type right here, colon string, even though I didn't declare it on my line 11 code.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=68)** So I'll double click my text or press return on the keyboard, and then you'll see the text update on the right.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=74)** If I put quotes around my text, I will see the literal text of my text inside of my canvas, so you can see that right here.
>
> **[1:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=83)** So I'll undo that real quick with command Z.
>
> **[1:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=86)** And that's all you need to do to put variables inside of your text views.
>
> **[1:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-variables-in-swiftui?u=76281980&t=91)** So to review, simply create a variable inside of the base struct, so below the open curly brace, give it a value and then wherever you want to use that value, you put the name of the variable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Using Variables to Build a UI

[↑ Back to Table of Contents](#table-of-contents)

#### [SwiftUI layout basics](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=1)** - [Instructor] Now, we're at the point where we've discussed enough foundational [[Programming Concepts]] to start building our calculator.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=8)** We're going to start with creating the calculator layout of the buttons.
>
> **[0:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=13)** To do that, we're going to use something called a grid, and we're going to talk about the various layout options that you have in SwiftUI.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=21)** So here we have a VStack on line 13, which you may guess is short for vertical stack.
>
> **[0:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=28)** If you look over at the UI on the right in the canvas, you'll see two items stacked vertically.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=34)** If you change the V to an H, then you have a horizontal stack, and the items are now stacked next to each other.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=42)** The Z stack allows you to organize items in front of or behind each other.
>
> **[0:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=48)** So, I'll go back to VStack.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=50)** For our calculator, we're going to lay out the buttons in a grid.
>
> **[0:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=54)** So, one way to do that is by using the grid component.
>
> **[0:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=59)** So, what I'm going to do is just below my text, so right here, line 17, I went down one new line.
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=66)** I'm going to create a grid.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=68)** So, these layout items we've talked about, like a VStack or an HStack can be embedded within each other.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=74)** So inside of here, I'm going to create my grid, and this is going to represent my buttons.
>
> **[1:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=79)** We're going to start out with just text, and then we'll look at styling the buttons later on.
>
> **[1:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=83)** So, I'm going to open up some curly braces, so open curly brace, and then a return.
>
> **[1:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=88)** And inside of here, I'm going to create a grid row.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=92)** So, I'll call it GridRow, just like that, and then some more curly braces.
>
> **[1:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=97)** And now, what I'm going to do is create the first numbers inside of my grid.
>
> **[1:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=102)** I'm going to do that by creating text views, so capital T for Text.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=107)** And then in some parentheses, put a string, so remember, that's in double quotes.
>
> **[1:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=111)** And then, we'll do a 1.
>
> **[1:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=113)** And we're going to have one row be 1, 2, 3.
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=116)** The next row, 4, 5, 6.
>
> **[1:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=119)** And then another row, 7, 8, 9.
>
> **[2:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=122)** So, I'm just going to copy and paste Text twice.
>
> **[2:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=125)** So, I'll highlight it with Command + C, paste with Command + V on the next line.
>
> **[2:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=130)** We'll do that twice, and then we'll have 1, 2, 3.
>
> **[2:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=133)** So we have, "Hi, everybody!" and then 1, 2, 3.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=136)** Now I'm going to select my GridRow, so that whole area from GridRow down to its closed curly brace, copy that, paste it on the next line, and then change the values to 4, 5, 6.
>
> **[2:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=150)** I'll do the same for 7, 8, and 9.
>
> **[2:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=153)** So, now I have a very simple grid and it doesn't look much like a calculator yet.
>
> **[2:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=158)** We actually aren't going to need this image for the calculator, so let's delete that.
>
> **[2:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=163)** And even though the text on the top says, "Hi, everybody!"
>
> **[2:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-layout-basics?u=76281980&t=166)** which will change later, our calculator now has a simple layout for a button grid that we're going to improve upon in future movies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming Concepts]] (1)
> **Cross-References:** go back to (1)
> **Definitions:** short for (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom SwiftUI components](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=0)** - [Instructor] So while we have our ButtonGrid here, it's actually starting to get a little bit crowded inside of our content view.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=8)** So what I want to do is take this whole grid and put it in its own custom view that we call ButtonGrid, and then that file can have only ButtonGrid related things in it.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=22)** So let's look at how to do that.
>
> **[0:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=23)** The first step is to press command N on the keyboard or create a new file through the file menu.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=30)** And what we want to do is create under iOS and user interface a SwiftUI View.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=37)** So choose that and hit next.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=38)** I'm going to save it in the default location and just as I said a second ago, let's name it ButtonGrid, capital B, capital G, and then I'll hit return to create it.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=49)** I'm instantly taken to my ButtonGrid, so it's a new tab over here.
>
> **[0:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=53)** If you aren't taken there automatically, just open up the project navigator and click on it.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=58)** So I'll close the project navigator.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=60)** And what we want to do is replace this text, Hello, World, with our ButtonGrid.
>
> **[1:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=65)** So let's go over to content view and then select your whole ButtonGrid, and then press command X on the keyboard to cut it, and then paste it inside of ButtonGrid just right over that text view, so I'm pasting it there, and then once the canvas updates, it should look like this.
>
> **[1:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=82)** So with that, go back over to ContentView and then right where you cut all of that code, type out ButtonGrid, which is the name of the file we just created, and then some parentheses, and there's our ButtonGrid right there.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=95)** So if you ever want to create your own custom SwiftUI Views, it's as simple as creating a new SwiftUI View from the new file menu and then putting in whatever content you want inside of that view.
>
> **[1:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-custom-swiftui-components?u=76281980&t=108)** And then you can use that view wherever you want in your code by calling the name of the view, and then some parentheses.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Creating calculator buttons](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=1)** - [Instructor] Now, let's make our calculator buttons look a little bit more like buttons.
>
> **[0:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=5)** To do that, I'm going to go over to the ButtonGrid, and instead of using text views here, we're going to create a custom component, just like we did for our ButtonGrid.
>
> **[0:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=16)** Remember, you can push Command + N, choose SwiftUI View, hit Next.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=22)** I'll call this CalculatorButton, capital C and capital B, just like that.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=27)** And then hit Return to create it.
>
> **[0:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=29)** I'll change the Hello World text in here to a one inside of a string, just like that.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=35)** Now what we want to do is make this look like a button, put some kind of shape around it, change the color, change the font size, et cetera.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=44)** To do that in SwiftUI, we just go below the view declaration, so go to the next line and then type a dot, and then the attribute that you want to modify and any parameters for that attribute go inside of parentheses.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=60)** So if we want to make the font bigger, we can choose .font.
>
> **[1:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=64)** So I'll just press Return on that, and then I'm going to change it to a large title font.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=69)** So .largeTitle.
>
> **[1:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=71)** Once it's selected in the code hinting, just press Return.
>
> **[1:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=75)** And now, the number number's a little bit bigger.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=78)** Now what I'm going to do is set a frame around the button.
>
> **[1:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=82)** So it's going to be a certain size, but I'm going to specify exactly what size that is.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=87)** So go to the next line and type .frame.
>
> **[1:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=90)** And the one that you want is the one that says with, height, alignment.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=95)** So this is allowing us to set a rectangular area for the size of this button.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=100)** Notice that some of these fonts are italicized and light and others are darker and not italicized.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=109)** For ones that are italicized, that represents optional parameters.
>
> **[1:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=113)** If you use the keyboard shortcut at the top, Option + Return, [[Xcode]] will automatically add all of those option parameters.
>
> **[2:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=121)** So I'm going to press that right now.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=123)** Option + Return, I'm going to put 70 for the width and 70 for the height.
>
> **[2:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=128)** I'm going to tab over with the Tab key, over to alignment, and then it's going to be .center.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=134)** So adding that line doesn't automatically update anything in the canvas.
>
> **[2:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=139)** So we'll have to add a background to see it.
>
> **[2:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=141)** Go to the next line and then type .background.
>
> **[2:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=145)** And inside of the parentheses there, type .gray.
>
> **[2:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=150)** So now, we're starting to see a button forming.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=154)** So we have this gray box with a black one inside.
>
> **[2:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=158)** If we want to change the color of the one, we just have to change the foreground style.
>
> **[2:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=163)** So go to the next line, type .foregroundStyle.
>
> **[2:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=168)** And inside of the parentheses, I have this SecondaryContentStyle selected.
>
> **[2:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=173)** Let's just replace that with .white.
>
> **[2:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=176)** And then the text updates to a white color.
>
> **[2:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=179)** Well, what if we wanted the button to have a rounded rectangle shape instead of a square?
>
> **[3:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=185)** Go to the next line and then type .clipShape.
>
> **[3:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=189)** And then we need to pass in a shape.
>
> **[3:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=191)** So the default is circle.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=192)** So you can see my circle shape right here, but if I wanted to give it a rounded rectangle shape, I just type RoundedRectangle right here.
>
> **[3:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=200)** I'm going to choose the one with a corner radius, and that's going to default to 25.
>
> **[3:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=205)** So you'll see the rounded corners over here, and I'm going to change that to 15.
>
> **[3:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=210)** So I'm just going to type 15 right there.
>
> **[3:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=212)** So now I've created this button with a rounded corner, a background, I've changed the color, I've changed the size of the font, and we can do all of that using these dots that we add on the lines after creating a view.
>
> **[3:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=226)** So now, as a little bit of a quiz in the middle of the chapter, I want you to think about how you might put this CalculatorButton inside of our ButtonGrid.
>
> **[3:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=236)** So you can pause the movie and try it out if you'd like.
>
> **[3:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=239)** Here's how I decided to do it.
>
> **[4:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=241)** Go into ButtonGrid, highlight one of the text objects, and then replace it with CalculatorButton.
>
> **[4:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=248)** Make sure to add the parentheses as well.
>
> **[4:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=250)** So there's my one button, and I'm going to paste this over all nine of my buttons.
>
> **[4:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=255)** So now, instead of nine text views, we have nine buttons.
>
> **[4:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=260)** The numbers are all the same now, but we're going to update that soon.
>
> **[4:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=264)** And I just want to review that we've created a custom SwiftUI view again.
>
> **[4:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=269)** Then we've customized it using these dot attributes that we've added below the view, so you can modify the font, frame, et cetera by using this kind of syntax.
>
> **[4:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/creating-calculator-buttons?u=76281980&t=280)** And again, when you want to use it somewhere else in your application, you just call the name of the view and then parentheses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** make (4)
> **Code Identifiers:** largetitle (1), foregroundstyle (1), clipshape (1)
> **Analogies:** just like (3)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Setting button text](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=1)** - [Presenter] Now that we've swapped out our text views for custom SwiftUI views, we have all 1s in our grid.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=7)** So let's look at how to make each one of these buttons customizable so we'll have 1 through 9 in our grid.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=15)** Go back to CalculatorButton.
>
> **[0:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=18)** And we're going to create a variable right underneath where we define CalculatorButton.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=22)** So after line 10, create a new line and create a new variable with the "var" keyword, and we're going to call this "buttonText" with a capital T, and then we're going to set it equal to a default value of "1'.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=37)** Now, before moving on, it's really important to use that buttonText variable inside of our text view here, because if we don't, the text will still always read as a "1".
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=49)** So replace that "1" string with "buttonText".
>
> **[0:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=52)** Remember, we don't want quotes around it, or else it will say "buttonText".
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=56)** And then go back to the button grid.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=58)** Now for each of these buttons, we can put our [[Cursor]] in the parentheses, type "buttonText", and then pass in a string value.
>
> **[1:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=67)** For the 1, it doesn't change anything because that's the default value, but if we wanted to do 2 or 3, I could copy that and paste that in these other views.
>
> **[1:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=77)** So let's change that to 2 and then 3 and notice that they update in the canvas.
>
> **[1:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=82)** So let's do 4, 5, 6, and 7, 8, and 9.
>
> **[1:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=86)** And now our grid has the numbers inside of it.
>
> **[1:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=89)** Now, you may be thinking when you create a calculator, that there's actually more buttons than this.
>
> **[1:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=93)** We need some buttons like performing mathematical operations with addition, subtraction, and multiplication.
>
> **[1:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=101)** We might want a clear button.
>
> **[1:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=103)** We of course need a zero because all numbers aren't represented yet and we need an equals button as well.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=109)** Let's add those really quick.
>
> **[1:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=110)** So if I just copy and paste the 3 button and I want to add a plus button at the end of that line, I can just change that pasted code to have a plus button.
>
> **[2:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=120)** We're using text for the button now, but we'll look at replacing that with an icon in the future.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=126)** I'll paste it again below the 6, we'll put the subtraction button here below the 9, we'll put the multiplication button, so I'll just put in "x".
>
> **[2:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=135)** And then let's make another grid row.
>
> **[2:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=137)** So I'll copy and paste this here.
>
> **[2:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=139)** I'm going to adjust the formatting of this curly brace because it got misaligned.
>
> **[2:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=144)** And in the fourth row we're going to have a 0, a clear button with a "c", and then the equals button.
>
> **[2:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=152)** So we only need three buttons here.
>
> **[2:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=153)** So I'm just going to delete the fourth button.
>
> **[2:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-text?u=76281980&t=156)** So now we've created all of our calculator buttons.

> [!info]- Semantic Content
>
> **Code Identifiers:** buttontext (5)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [presenter] (1)

#### [Setting button width](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=1)** - [Instructor] In most calculators, the items are arranged in a rectangular pattern, so it looks a little bit weird to have a missing space here, so we'll just make this zero take twice the width.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=10)** To do that, find the zero button in your code, go to the next line, and then type a dot, and then type grid cell columns, and then pass in a two into the parentheses.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=21)** So if you look at the zero, now it's taking up two cell columns, but it's aligned in the middle.
>
> **[0:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=26)** So what we need to do is be able to make the button wider to fill up that space.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=32)** Go to Calculator button by clicking on the tab, and then just like we created a parameter with button text, we'll create one for width, go to the next line, and then type var and then width, and then set it equal to 70.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=45)** In the code below where we're setting the width of the frame, change the width to use the variable.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=51)** So just type in width.
>
> **[0:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=53)** When you do that, you're going to see an error message.
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=56)** What this is saying is, [[Xcode]] interprets this 70 value as an integer, but it's expecting a different type of value to be passed in here.
>
> **[1:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=67)** All we need to do to fix that is type in the data type that Xcode wants for the width.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=72)** So let's go after the width declaration type of colon in a space, and then type CGFloat.
>
> **[1:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=80)** This is a numeric data type that's used in user interfaces in [[Swift (Programming Language)|Swift]] UI.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=85)** So sometimes neglecting to use a specific data type can cause problems, and this is one of those examples.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=92)** So by specifying it here, then we remove that error.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=95)** Let's go back over to button grid, and now we're going to specify the width.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=100)** Just to quiz yourself for a second, how do you think you might specify the width for this button?
>
> **[1:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=106)** One way to do that is after the close quote for the zero, type a comma, and then type width, just press Return once it's selected, and then pass in a value.
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=116)** I'm going to type in 147 here, and that's pretty close to accurate with alignment of the other buttons.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=123)** So we've added a second parameter just like we added the first parameter.
>
> **[2:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=127)** For the second one, when we're passing in the value, we need to separate it with a comma, and then inside of your view, you need to create another variable for that.
>
> **[2:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=138)** Sometimes if it's a UI value used for sizes of things, you'll need to specify that it is a CG float.
>
> **[2:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-width?u=76281980&t=145)** Once you've done that, you've simply pass in the value and you can modify your UI elements as you please.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (2), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Setting button colors](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=1)** - [Instructor] Now let's do another custom attribute for modifying the color of each button.
>
> **[0:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=6)** So what we want is orange buttons on the right, and the numeric buttons to be one shade of gray, and then the clearer button will be a different shade of gray.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=14)** So let's go inside of our calculator button, and we're going to create another variable below "width," and we'll call this "color."
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=22)** I'm going to set this equal to "Color" with a capital C.
>
> **[0:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=26)** And then the one that I want is hue, saturation, brightness.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=30)** And we're going to specify a default shade of gray for numbers here, and that's going to be 1.0.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=38)** You can just hit the tab key to go to the next value.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=40)** We'll pass in zero for saturation.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=42)** Tab over to brightness, and then 0.283.
>
> **[0:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=47)** Now, again, we need to make sure that we're actually using this color.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=51)** So for the background, I'm going to replace .gray with color, and that gives us a little bit darker gray color.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=58)** Now let's go back to the button grid and look at using that.
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=62)** So our buttons now all have a darker gray color.
>
> **[1:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=64)** If I go over to the calculator button for C, after I pass in the button text, type a comma.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=72)** And then what we're going to do is pass in a gray color.
>
> **[1:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=76)** So type "color" and then .gray.
>
> **[1:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=79)** Now you'll notice that that button gets a lighter color.
>
> **[1:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=82)** Let's do the same thing for the plus and minus and other operator buttons.
>
> **[1:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=86)** So we'll start with the equal sign and then pass in a color of .orange.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=92)** We can actually copy and paste everything from the comma onward into the few other buttons, so after the X for multiplication, and the hyphen, and the plus sign.
>
> **[1:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=103)** And there we go, we've modified our buttons.
>
> **[1:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=106)** So just like we did before, to create a new attribute, just define it in the view as a variable.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=114)** You can give it a default value if you want.
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/setting-button-colors?u=76281980&t=116)** And then in the parent view, just pass in the new value after a comma.

> [!info]- Semantic Content
>
> **Versions:** 1.0 (1), 0.283 (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create the value text view](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=0)** - [Instructor] And now for this chapter's challenge.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=3)** In this chapter, we discussed working with variables in SwiftUI.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=8)** As we discussed previously, variables and constants are named containers that hold some type of data.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=15)** They can be used in SwiftUI as well.
>
> **[0:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=18)** We discussed SwiftUI stacks, grids, attributes, and working with custom components.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=25)** The challenge for this chapter is to finish the UI by creating the total text field.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=32)** So right now we have dummy text on the screen, and we want to create a custom component called TotalText.
>
> **[0:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=39)** You'll need to style the component, changing the font size, and any other attributes you choose.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=45)** I also want you to create an attribute called Value and have that value be passed from the main content view into the TotalText view.
>
> **[0:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=55)** This challenge should take about 10 minutes to complete.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-the-value-text-view?u=76281980&t=58)** Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (3)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create the value text view](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=0)** - [Instructor] Here is my solution to the chapter's challenge.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=3)** And I want to point out that the goal for the challenge is not to match my code, it's to satisfy the requirements of the challenge.
>
> **[0:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=11)** So if you got there in any way, that means you passed.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=14)** With that said, let's go over to the content view.
>
> **[0:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=16)** And here we have some text that says, hi everybody, above the button grid.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=21)** So the content view represents what your whole app is going to look like.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=25)** So what we want here is to have some text that displays the total in the calculator.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=30)** Usually, that text is right aligned.
>
> **[0:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=33)** So to do that, I'm going to create a custom SwiftUI view with Command + N.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=37)** I'll choose iOS, SwiftUI View, and hit Next or return.
>
> **[0:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=41)** We'll name this TotalText and then hit Return or Create.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=45)** So now I have my TotalText view open, and what I'm going to do here is create a variable just at the end of line 10.
>
> **[0:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=52)** I'll just make a new line and we're going to call this value and set it equal to the string zero.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=60)** Now, inside of our text view, we're going to use that variable.
>
> **[1:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=64)** So click on Hello world and it should alter in blue, and you can just write value over that.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=69)** On the next line, we'll start by writing some attributes.
>
> **[1:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=73)** I'll start by defining the frame, so type .frame.
>
> **[1:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=76)** And then I'm going to choose width, height, and alignment.
>
> **[1:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=79)** And it's just going to give me parentheses again, like we saw earlier.
>
> **[1:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=83)** So we'll need to pass in width manually, and we'll set it at 340.
>
> **[1:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=88)** So I want it to pretty much be the width of the screen in portrait mode.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=92)** Then a comma and the space, and we'll specify the alignment.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=95)** And this is going to be to the right, which is also known as trailing.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=100)** So type dot.
>
> **[1:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=101)** And then we're going to choose bottomTrailing here.
>
> **[1:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=104)** And that's going to align the view all the way on the right.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=107)** So you'll see that text go to the right, right there.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=109)** And now, we'll add a font weight.
>
> **[1:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=111)** So go to the next line and type dot fontWeight.
>
> **[1:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=113)** And then we'll pass in .light.
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=116)** The next line, we'll set the font, and we're going to do it a little bit different than we did before.
>
> **[2:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=121)** So the default is title and it is a little bit bigger, but I want it to be much bigger than that.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=126)** So to specify the size of a font, we're going to type .system and you want the one with size inside of it.
>
> **[2:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=133)** And then once you've used the code hinting to write that out, replace CGFloat with 80.
>
> **[2:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=139)** That's going to give you a nice, big font.
>
> **[2:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=142)** On the next line, I'm going to add some padding.
>
> **[2:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=144)** So just type .padding and we'll use the default values in there.
>
> **[2:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=147)** And on the next line, lineLimit.
>
> **[2:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=150)** This will limit the text field to only having one line.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=154)** And that's really good for a calculator.
>
> **[2:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=156)** So we'll set that to one inside the lineLimit attribute.
>
> **[2:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=160)** And with that, we are done here.
>
> **[2:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=162)** So let's go back to the content view and actually use TotalText.
>
> **[2:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=165)** I'll replace the text view that exists now with my TotalText.
>
> **[2:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=170)** And you can choose the one with value or without it, but I'm going to use the value one.
>
> **[2:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=175)** And for the string, I'll set myText.
>
> **[2:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=178)** You'll notice that because the font's so big, it gets cut off.
>
> **[3:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=181)** So we'll make some modifications there.
>
> **[3:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=182)** I'm going to change the value to a one, and you'll see that in the calculator.
>
> **[3:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=187)** And then let's change the name of the myText variable to something a little bit more meaningful.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=192)** How about total?
>
> **[3:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=193)** To change it, we can manually change myText here and here, or we can do something called refactoring and change it in one place.
>
> **[3:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=201)** And that will change everywhere where the variable's referenced.
>
> **[3:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=205)** To do that, right click myText, choose Refactor, and then Rename.
>
> **[3:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=209)** Once it's highlighted, type total, all lowercase.
>
> **[3:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=213)** And then press Return on your keyboard, and you'll see that it's updated everywhere where it's used.
>
> **[3:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=218)** Looking at my layout, I'm noticing that the one is a little bit too far to the right.
>
> **[3:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=224)** Let's go back to TotalText and then reduce the width of the frame.
>
> **[3:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=227)** Maybe 320 is a better value.
>
> **[3:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=229)** Yeah, that looks much better.
>
> **[3:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=230)** So we've solved this problem, we've added some attributes, and we've looked at some new attributes that we haven't done previously in the course, including the bottomTrailing value for alignment, modifying fontWeight, fontSize to a specific value, and modifying the lineLimit to prevent creating additional lines.
>
> **[4:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-the-value-text-view?u=76281980&t=252)** And that solves this chapter's challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** mytext (4), linelimit (3), bottomtrailing (2), fontweight (2), ios (1)
> **Definitions:** is a  (3), known as (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)


### 4. Programming Building Blocks: Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding methods](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=1)** - [Instructor] In order to move forward in our app, we need to talk about methods and functions.
>
> **[0:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=6)** These are code blocks that are executed at certain times, including when a button is pressed, and that's what we're going to be focusing on in this chapter.
>
> **[0:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=16)** Also, methods and functions mean slightly different things, kind of like rectangles and squares.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=22)** But for the purpose of this course, it's not really important how to differentiate them.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=27)** So I may use them interchangeably.
>
> **[0:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=29)** So let's talk about what methods are.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=32)** Methods are the actions of programming, and they're similar to verbs in spoken language.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=37)** They do things.
>
> **[0:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=39)** In other words, they are named, logically grouped commands.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=44)** Think of jumping.
>
> **[0:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=46)** If you wanted to jump, you have to bend your knees, push down on the ground, and propel yourself up into the air.
>
> **[0:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=52)** If you were to write a method called jump, then you would have all of that logic about bending your knees and pushing down and everything in there inside of the method.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=60)** It's also important to note that the definition and execution are different.
>
> **[1:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=65)** So we define what it means to jump, and then we can jump whenever we want and we call that group of commands there.
>
> **[1:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=73)** So let's take a simple example of a method.
>
> **[1:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=77)** You'll notice that it starts with the keyword func, which is short for function.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=81)** just like a variable, func says, "I'm going to create a method or function."
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=87)** Then we have a Space and the name of the method.
>
> **[1:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=90)** In this case, it's jump.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=92)** And then there are parentheses and then an open curly brace.
>
> **[1:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=96)** Then the body of the method is written inside of curly braces, ending with a closed curly brace.
>
> **[1:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=103)** So maybe if we were to actually write code for a jump method, it would confirm that a player in a game is on the ground.
>
> **[1:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=110)** And then if the player on the ground, it would push the player upward.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=114)** So this would define what a jump is.
>
> **[1:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=118)** When we want to use a jump or do a jump, then we use the name of the method and parentheses.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=126)** So we don't use the func keyword again because that's the keyword for declaring a value.
>
> **[2:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=131)** Just like a variable declares a variable.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=134)** And when you're using the variable, you don't use the var keyword.
>
> **[2:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=138)** Again, there are different types of methods, so they can do different things beyond that.
>
> **[2:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=143)** Some methods return values.
>
> **[2:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=145)** So they can either receive an input or no input, but return some kind of output.
>
> **[2:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=151)** Here's an example of a method that returns some kind of output.
>
> **[2:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=156)** Let's say this method is going to add a couple of numbers together, and we've called it getSum.
>
> **[2:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=162)** If you see that arrow operator, which is a hyphen and a greater than sign, after that is the type of data that's returned from the method.
>
> **[2:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=170)** In this case, int, which is short for integer, a whole number.
>
> **[2:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=175)** Inside of there we have the return keyword, which, in code, means give this as output, and then the output is two plus three.
>
> **[3:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=186)** So that would define the get sum method.
>
> **[3:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=189)** It would return two plus three.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=192)** You call the method in the same way as we looked at with the jump method where you use the name and then parentheses.
>
> **[3:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=198)** So we see that right here, getSum, but in the case of something that returns a value, you can actually use that elsewhere in your code.
>
> **[3:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=206)** For example, as the value of a variable.
>
> **[3:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=210)** So if we created a variable called sum and we set it equal to getSum, the value of some would be five.
>
> **[3:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=217)** I mentioned a second ago that methods can also receive input.
>
> **[3:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=222)** Here's an example of a method that receives input.
>
> **[3:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=225)** So I've updated the getSum method to receive two parameters num1 which is an int, and they're separated by comma, so then there's num2 which is also an int.
>
> **[3:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=237)** So here we're using the colon to denote the data type.
>
> **[4:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=242)** Again, we're returning an int as well.
>
> **[4:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=244)** So here, instead of returning hardcoded numbers, we're returning whatever num1 one plus whatever num2 is.
>
> **[4:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=253)** And again, closing that out with a closed curly brace.
>
> **[4:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=256)** So if we had this code right here, passing in the parameters of four for num1 and five for num2, the value of sum would then be nine.
>
> **[4:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=269)** The power of this is that we can call getSum with all kinds of different values.
>
> **[4:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=274)** It doesn't just add two static numbers, it adds two dynamic numbers, whatever numbers you want.
>
> **[4:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=281)** So it improves the usability of methods if you're going to receive different inputs.
>
> **[4:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=287)** When you're creating methods, you generally want to follow the same rules as you do when creating variables.
>
> **[4:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=292)** Namely, start with a lowercase letter, use camelCase, and stick to letters and numbers.
>
> **[4:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=298)** So to review, methods are named, logically grouped commands that are the actions of code.
>
> **[5:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=305)** They can return data and take parameters.
>
> **[5:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=308)** In other words, they can receive input and they can give output.
>
> **[5:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=312)** And as we looked at in this video, they don't have to receive input and they don't have to give any output either.
>
> **[5:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=319)** Also, definition and execution are different.
>
> **[5:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-methods?u=76281980&t=323)** And finally, when creating methods, make sure to follow proper naming conventions.

> [!info]- Semantic Content
>
> **Code Identifiers:** getsum (5), camelcase (1)
> **Definitions:** in other words (2), short for (2), is a  (1), is an  (1)
> **Analogies:** just like (2), kind of like (1), similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using methods](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=1)** - [Instructor] Now let's get some practice writing methods in a playground.
>
> **[0:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=4)** If you didn't see how to create a playground before, you can do it from file, new and then playground.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=10)** So I've hit the run button here and there's the output of my greeting.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=14)** And let's create a method.
>
> **[0:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=16)** Go down a few lines, and we'll create a method with the keyword func, and then we'll call this get new greeting.
>
> **[0:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=23)** So we're using camel case there, so capital N and capital G, and then some parentheses and the data type it's going to return, so hyphen, then a greater than sign, it's going to be string, so capital S on that, and then put some curly braces.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=40)** In here, we're going to return some kind of a string.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=44)** Remember, a string should be in a set of double quotes.
>
> **[0:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=47)** Now remember, we need to call the method at some point.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=51)** So we've defined the definition and now we need to execute it.
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=56)** I'm going to execute it by setting the value of greeting equal to get new greeting.
>
> **[1:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=63)** And I'll just use the code hinting there by pressing return once the method is highlighted in the list.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=68)** Hit the run button down here again, and you'll see that the value of greeting is updated to the string that was returned by get new greeting.
>
> **[1:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=77)** Now let's make, "get new greeting" receive a parameter.
>
> **[1:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=80)** So I'm going to click inside of the parentheses of my method definition here, and I'm going to type [[Microsoft Word|word]] one, colon, specifying the data type and then a space, and then string with a capital S.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=92)** So this get new greeting method receives a string.
>
> **[1:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=97)** So what I need to do here is click inside and type word one, or click this message right here, and [[Xcode]] will put a suggestion in.
>
> **[1:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=106)** I'll hit fix, and then I can just replace the string with my string.
>
> **[1:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=112)** So let's pass in a word. I'm going to put in new right here.
>
> **[1:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=115)** And then what I'm going to do is I'm going to replace the word "updated" with the word "new", whatever word is passed in as word one.
>
> **[2:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=124)** To put the value of a variable inside of a string, all you need to do is use the back slash and parentheses operator.
>
> **[2:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=132)** Then you put variable values inside of there.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=136)** So I'll put in word one.
>
> **[2:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=138)** Before it was updated string, if I hit the run button again, it will now say new string.
>
> **[2:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=144)** If I want to put a second parameter in, remember that I need to separate it with a comma.
>
> **[2:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=149)** So I'll put a comma type word two, that's going to be a string as well.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=154)** So colon string, capital S, and then we'll of course need to update the method call on line nine.
>
> **[2:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=160)** I'm going to do the same thing where I let Xcode write it out for me, click the error message, and then hit fix.
>
> **[2:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=166)** Sometimes this is very helpful.
>
> **[2:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=168)** Sometimes those error messages aren't incredibly helpful.
>
> **[2:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=171)** You'll just have to learn as you use Xcode to see when to choose it and when to not choose it.
>
> **[2:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=176)** So I'll open up the string for word two, and then I'm going to type word.
>
> **[3:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=180)** Now let's replace string with word two.
>
> **[3:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=183)** If you want, you can pause the movie and do it on your own, or you can just go ahead and do the back slash and parentheses operator again, and then pass in your variable value.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=192)** Hit the run button and then new string changes to new word.
>
> **[3:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=196)** Of course, you can use methods to do mathematical operations as well and all kinds of other things.
>
> **[3:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=201)** So now you have some practice working with creating methods inside of a playground.
>
> **[3:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=205)** We've used all strings here, but what if you wanted to use integers?
>
> **[3:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=209)** If you want, you can continue working in the playground now and create a method that returns integers and receives integer arguments and does some kind of mathematical operation with them to get a little bit more practice.
>
> **[3:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-methods?u=76281980&t=221)** And once you feel comfortable, you can move on to building the calculator app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (13), [[Xcode]] (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Running code when a button is pressed](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=1)** - [Instructor] And now back to building our calculator.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=3)** Our next goal is to respond when a button is pressed.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=7)** So I'm going to go to the CalculatorButton tab, and if that's not open, you can always use the project navigator by clicking this button or hovering over the left edge of the screen, clicking on the folder icon and then single clicking on CalculatorButton.
>
> **[0:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=20)** Inside of here, we're going to declare a method that will handle a button press.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=25)** So below our body declaration, so at the end of line 21 on my code, I'm going to go down a few more lines and I'm going to create the method using the func keyword.
>
> **[0:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=36)** Let's call this buttonWasPressed, some parentheses, curly braces.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=42)** And then we're going to use something called a print statement.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=45)** And what that's going to do is put some kind of a message in the output window when the app is running.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=51)** So in there, we need to pass in a string.
>
> **[0:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=53)** So in the parentheses, pass in buttonText.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=57)** The app is clickable now and I can click on the one and nothing seems to happen.
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=62)** That's because even though what we see on the screen looks like a button, it is not interactable until we make it a button.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=69)** Above our text view, so at the end of the body line of code, create a new line and type out Button with a capital B.
>
> **[1:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=77)** And the one that you want is action label.
>
> **[1:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=80)** So choose that, then hit Return, and then in action, some curly braces are highlighted.
>
> **[1:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=84)** So what I'm going to do is press Return on the keyboard and then go down to have an empty area right here and then we'll call our new method, so that's buttonWasPressed, so type out buttonWasPressed with the parentheses, just like that.
>
> **[1:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=97)** Remember to use the code hinting whenever you can to save time.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=100)** And then for the label inside of the curly braces, we have to have a view.
>
> **[1:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=104)** So the default value is Text with the [[Microsoft Word|word]] Button.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=107)** So if you look over at button over here, you see our button.
>
> **[1:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=111)** So if I click on that a whole bunch of times and then open up the debug area, that's the bottom view down here, you're going to see a bunch of ones inside of there because every time I click on that, a new one is printed to the console.
>
> **[2:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=125)** So let's hide that.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=126)** And now what we need to do is replace the label that has this Button text with R text.
>
> **[2:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=132)** So just highlight our text view, cut it with Command + X, and then paste it over the default text view with Command + V.
>
> **[2:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=140)** And there you go.
>
> **[2:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=141)** Now you can open up the debug area again, and then find that trash can at the bottom right that says clear console, click that and then click your button and you'll see that the ones appear down there.
>
> **[2:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=151)** What about the other numerical buttons? Well, you know what?
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=154)** It already works. Go over to ButtonGrid.
>
> **[2:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=157)** Let's clear the console again and then start clicking on the buttons.
>
> **[2:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=160)** And you're going to see that they all display the right value.
>
> **[2:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=164)** Well, why is that?
>
> **[2:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=165)** That's because in the calculator button, the value that we're printing out is whatever the value of buttonText is.
>
> **[2:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=172)** So in the same way that we're using buttonText to put inside of the text view, we're actually printing out that same value in buttonWasPressed.
>
> **[3:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=181)** So to review, in order to connect a button to a method, you need to create a button view.
>
> **[3:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=188)** So use the keyword button and then you can use the action and label parameters to control what happens when the button is pressed in the action parameters case, and to control what the button looks like for the label value.
>
> **[3:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=202)** In the button's action, you can call a method there or write the code in line.
>
> **[3:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=207)** Most of the time what I do is simply call a method, and that way I have less code inside of my UI area.
>
> **[3:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=214)** And that just makes it easier to read when I need to come back to it later.
>
> **[3:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/running-code-when-a-button-is-pressed?u=76281980&t=217)** And once you've done that, your button is connected to the code that it executes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** buttonwaspressed (4), buttontext (3)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Using a method as a variable](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=1)** - [Instructor] [[Swift (Programming Language)|Swift]] actually allows you to pass in methods as parameters and that's what we're going to look at here.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=8)** Now, why might you want to do that?
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=10)** Let's go over to our button grid and take a look at our layout.
>
> **[0:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=13)** So we have all of these different buttons that do different things.
>
> **[0:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=18)** The clear button should clear the value at the top of the calculator.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=21)** The numeric buttons are used for capturing input.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=24)** Then we have the mathematical operator buttons, like the plus and the minus and the multiply button.
>
> **[0:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=29)** And then we have the equals button.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=31)** So each one of these has something different that it does.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=35)** The numeric buttons are generally the same.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=38)** So we need some way of being able to say that for this particular button, run this method when it's clicked, and for this other button, run this method.
>
> **[0:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=48)** And the one way to handle that is to pass in the method that we want to run as a parameter when creating our buttons.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=57)** That's how we're going to handle it in this case.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=60)** So let's go over to CalculatorButton and I am going to go right beneath color and I'm going to create a variable called action.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=69)** It doesn't have to be called action in order to work, but that's what I've chosen to call it here.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=74)** And what it is, is it's going to be a method data type.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=78)** So when you specify a method data type, you got to do it in a special way.
>
> **[1:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=82)** So type a colon to specify the data type.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=85)** And this is not going to be the [[Microsoft Word|word]] method or really any other word.
>
> **[1:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=89)** What it is is parentheses.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=92)** So that says that the type is some kind of a function or method.
>
> **[1:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=96)** Then the arrow operator, so hyphen, greater than sign, and then the return data type, which is going to be void in this case.
>
> **[1:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=103)** That means nothing.
>
> **[1:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=104)** So what this code is saying is it's saying create a parameter called action that is a function or method that receives no parameters.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=114)** That's why there's nothing inside of the parentheses, and returns nothing, which is why we have the void keyword.
>
> **[2:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=120)** Now we can set a value with the equal sign, so type a space and a equals and a space, and we can give this a default value of an empty method by just typing some curly braces.
>
> **[2:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=131)** So type an open and a closed curly brace.
>
> **[2:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=133)** Let's select the buttonWasPressed method, cut it with Command + X.
>
> **[2:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=137)** I'll just remove those extra empty lines there and then I'm going to replace the call to buttonWasPressed with a call to action.
>
> **[2:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=145)** So just type the word action and that's how we run our variable that's also a method.
>
> **[2:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=152)** So we just do the same thing for any other method.
>
> **[2:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=155)** We use the name and then parentheses.
>
> **[2:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=157)** Let's go back over to button grid.
>
> **[2:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=159)** Below our grid and all the way below the body, so I can actually just double click this curly brace to go all the way down to the bottom, go down a few lines below that and then paste the method that you copied.
>
> **[2:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=171)** I'm going to replace buttonWasPressed with numberWasPressed, and then I'm going to print the literal string one.
>
> **[2:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=179)** In order to get the number that was on the buttonWasPressed, we're going to need an extra step so we're going to look at doing that in a later movie.
>
> **[3:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=186)** For now, let's just always print one.
>
> **[3:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=188)** Now this method's not called anywhere, but we can call it somewhere by passing it in as a parameter.
>
> **[3:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=194)** So let's go to the one button and after the buttonText parameter, type a comma and then type the name of the parameter we just created, which is action.
>
> **[3:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=204)** You can see that the data type is a function that has no arguments and returns void.
>
> **[3:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=209)** Press Return to do the code hinting and then type the name of our method, which is numberWasPressed.
>
> **[3:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=215)** This time, we're not running the parentheses.
>
> **[3:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=219)** The reason for that is that it's going to be called when the button is pressed and we're not calling it immediately.
>
> **[3:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=225)** So think of this as passing in a reference to a function that the button will eventually execute, but we're not executing it right away.
>
> **[3:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=234)** Now you should be able to press the one button if you open up the console, so open up the debug area and then click the one button and you'll see that one.
>
> **[4:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=242)** No other buttons will work at this point 'cause we refactored it to only be inside of the button grid.
>
> **[4:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=248)** And again, the reason for that is all of the buttons are the button grid.
>
> **[4:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=252)** So we want to have all the methods that run when any button is pressed in the same area.
>
> **[4:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=257)** So to review, if you want to create a method as a parameter, you need to define it as the function type or method type.
>
> **[4:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=266)** And if it has no parameters and returns nothing, it looks just like this.
>
> **[4:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=271)** If you wanted to give it a default value that doesn't do anything, just use open and closed curly braces.
>
> **[4:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-a-method-as-a-variable?u=76281980&t=277)** And then you can pass the value in to the action parameter, but in this case, you're not going to use the parentheses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Swift (Programming Language)|Swift]] (1)
> **Code Identifiers:** buttonwaspressed (4), numberwaspressed (2), buttontext (1)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Passing parameters to method variables](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=1)** - [Narrator] Our next step is to handle this numberWasPressed method using every numeric button.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=7)** In order to do that, inside of numberWasPressed, we need some way of receiving the button that was pressed as a parameter.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=17)** Inside of the parentheses, I'm going to create a parameter called button that is of the type CalculatorButton.
>
> **[0:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=23)** And then instead of printing the literal string one, I'm going to print button.buttontext, just like that.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=30)** Now we'll see some error messages, and if you click on them, you'll see that there's some kind of mismatch within the type.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=37)** So let's fix that by going over to calculator button.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=40)** Inside of here, what we want to say is that the action is a method that receives a calculator button as a parameter.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=49)** So that lines up with the method that we've defined in here.
>
> **[0:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=54)** In order to do that, click inside of the parentheses, and we actually don't need to put an argument name here.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=60)** We just put a data type.
>
> **[1:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=63)** So put CalculatorButton right here, just like that in the parentheses, and then the default value needs to be different, because the default value needs to receive some kind of parameter.
>
> **[1:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=77)** So we can do that by typing an underscore, that's an unnamed parameter, a space, and then the [[Microsoft Word|word]] in.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=85)** So that solves the error right here.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=87)** And this exact syntax is not extremely important for what we're doing now, but just so you understand a little bit of it, an underscore is for a parameter that doesn't have a name and is used to say that a method body follows.
>
> **[1:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=102)** So we just need that keyword in there if we're going to receive any type of parameters.
>
> **[1:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=106)** So now we have an error here.
>
> **[1:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=108)** If I click on that, it says I'm missing an argument.
>
> **[1:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=112)** So if I hit Fix, then it says I can pass it a calculator button.
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=116)** And actually, the data structure or view that I'm inside of right now is a calculator button.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=123)** And I can reference that view by using the keyword self.
>
> **[2:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=127)** So what self means is this current button.
>
> **[2:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=130)** So when I'm looking at the one button, self refers to the one button.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=134)** When I'm referring to the two button over here in the button grid, then self refers to the button with the two on it, et cetera.
>
> **[2:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=142)** And now what we want to do is show the proper number that was pressed for each number.
>
> **[2:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=148)** To do that, we'll need to copy and paste what we have for the one button where we have the action parameter.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=154)** So just copy from the comma all the way up to before the close parenthesis command, see to copy, and then paste it for all the numeric buttons.
>
> **[2:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=163)** Once you've done that, open up the debug area and click all the buttons.
>
> **[2:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=168)** And you should see that they all work properly.
>
> **[2:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=170)** So to review, you can create methods that receive parameters inside of your views if you follow a few steps.
>
> **[2:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=178)** Make sure the called method receives a certain value as a parameter, in this case, a calculator button.
>
> **[3:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=185)** And then put the data type of that value in the parentheses when declaring the variable in your view.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=192)** You'll also need the underscore an in if you're going to provide a default value.
>
> **[3:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/passing-parameters-to-method-variables?u=76281980&t=197)** You can also use the self keyword if you ever need it to refer to the containing view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), refers to (2)
> **Code Identifiers:** numberwaspressed (2)
> **UI Navigation:** click on (2)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [SwiftUI binding](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=0)** - [Instructor] So right now when you click on a button, the number of the button is printed inside of the console.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=8)** So remember in the debug area, we set that up here on this line of code.
>
> **[0:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=12)** So what if we wanted the button that we pressed to appear in the ContentView in that TotalText view at the top?
>
> **[0:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=20)** In order to do that, we have to use something called binding in SwiftUI, and binding can be a pretty scary topic, because it's a little bit complicated, but I want you to think of it in terms of solving this problem.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=34)** So at the very top level of our app, in the ContentView, we have a variable.
>
> **[0:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=41)** What we need to do is modify that variable within the ButtonGrid and have it update the TotalText view.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=49)** To make a variable editable at runtime, you need to flag it as a state variable.
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=56)** So I'm going to click before the var keyword on line 11, and I'm going to type @State with a capital S to add the @State annotation.
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=66)** Again, this says this variable is editable at runtime, and that when it's edited, any views that are using the variable will also automatically update.
>
> **[1:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=79)** So that's one part of this.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=81)** The second part is having some kind of way for the ButtonGrid to modify that variable.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=87)** Head over to the ButtonGrid, go to the top, and we're going to create a new variable called total.
>
> **[1:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=93)** It's going to have the same name as the other variable, and it's going to be a string.
>
> **[1:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=97)** This variable is going to edit the parent variable total as well.
>
> **[1:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=103)** And unlike the parent, we don't want to use the @State variable.
>
> **[1:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=108)** The reason for that is that we are going to modify a variable that is received.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=114)** So we need a special kind of annotation to denote that, and that annotation is called binding.
>
> **[2:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=120)** So type @Binding with a capital B.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=123)** So again, state is for variables that are changeable at runtime.
>
> **[2:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=128)** Binding is for variables that are received by a parent view.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=134)** So they are state variables that are received by a parent view, and that when modified modify the parent state variable.
>
> **[2:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=142)** So in other words, this total when we modify it will be modifying this total.
>
> **[2:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=148)** In ContentView, this missing argument error, if I click on it, it will say insert total and then Binding<String>.
>
> **[2:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=156)** So it's asking for some kind of binding value.
>
> **[2:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=159)** The data type says binding, because we specified it as binding in ButtonGrid.
>
> **[2:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=165)** So we're going to use the total variable, but with one difference, we're going to put a dollar sign before it.
>
> **[2:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=171)** So total is that state variable.
>
> **[2:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=174)** And then the dollar sign before it says that this can be modified inside of the ButtonGrid view.
>
> **[3:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=182)** So ButtonGrid has access to modify the total state variable.
>
> **[3:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=186)** So that's what the dollar sign says.
>
> **[3:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=189)** Let's go back over to ButtonGrid.
>
> **[3:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=190)** And then in our code, we're going to make a couple more changes.
>
> **[3:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=194)** Right here it says missing argument for parameter total in call.
>
> **[3:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=199)** And you'll see that it has this hash and then Preview.
>
> **[3:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=202)** And what this controls is this view on the right, our preview of our application.
>
> **[3:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=207)** So if I click this error message, I can have [[Xcode]] help me out by clicking the fix button, and then I need to pass in a binding string.
>
> **[3:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=215)** In some cases in SwiftUI, we can have, instead of a binding variable, we use a constant using the .constant keyword.
>
> **[3:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=224)** And this allows us to put some kind of value in a view with a preview without having to create a binding variable in here or anything.
>
> **[3:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=234)** So I'm just going to open up the quotes and then put a 1 in there.
>
> **[3:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=238)** So what that does is gives it a default value and then the errors go away and it re renders.
>
> **[4:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=242)** So let's go up and we're going to find that print statement that we created on line 43.
>
> **[4:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=247)** So instead of printing it out, we're going to set the total equal to that.
>
> **[4:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=252)** So delete the parentheses and the [[Microsoft Word|word]] print.
>
> **[4:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=254)** So we just have button.buttonText.
>
> **[4:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=257)** And then before that, type total and then equals in between some spaces, and that's it.
>
> **[4:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=263)** So go back to ContentView, and then click some buttons and you should see them update.
>
> **[4:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=267)** So to review, what we're doing here is we're creating a state variable.
>
> **[4:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=272)** Remember, a state variable is something that's modifiable at runtime.
>
> **[4:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=277)** We're sending it to the ButtonGrid with the dollar sign, and the dollar sign, unlike the value without the dollar sign that we're sending to TotalText says that this variable is editable within the child view.
>
> **[4:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=291)** That is ButtonGrid.
>
> **[4:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=293)** Then inside of ButtonGrid, we have the binding annotation for the variable, saying that this receives a state variable that is modified within a child component, that is ButtonGrid.
>
> **[5:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/swiftui-binding?u=76281980&t=307)** And then all we have to do once we do that is we modify the value of the variable when a certain event happens, and then the parent variable automatically gets updated and then updates TotalText.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is called (1), in other words (1)
> **Code Identifiers:** buttontext (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Using different methods to handle different events](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=1)** - [Instructor] Our next step is to create methods for these other buttons.
>
> **[0:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=5)** So we're going to look at the plus, minus, and multiplication buttons here, and also the clear button.
>
> **[0:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=12)** So what we want to do is create a method that handles all three of these buttons.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=17)** We'll call that modeWasPressed for the reason that clicking on one of these changes the mode of the calculator to addition mode, subtraction mode, et cetera.
>
> **[0:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=26)** And then we'll create a clearWasPressed method for when you hit the clear button.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=30)** And all we're going to do now is put print statements in those methods.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=34)** So let's go over to ButtonGrid.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=35)** And below numberWasPressed, I'm going to create a new method using the func keyword called modeWasPressed.
>
> **[0:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=43)** And just like the other one, it's going to receive a button that is of the type CalculatorButton.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=49)** So just like that method numberWasPressed right above in the code.
>
> **[0:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=52)** So we have modeWasPressed, and in there, I'm going to print the string, mode was pressed, and then I'm going to copy and paste this method.
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=62)** Remember, Command + C and Command + V, and then change the pasted method to clearWasPressed.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=69)** And of course, we'll want to update the print statement as well.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=72)** So now, if we were to try to test this out, nothing would happen because we first need to connect these methods to the appropriate buttons.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=81)** Now, if you want to challenge yourself, you can always pause the movie and try doing that yourself.
>
> **[1:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=86)** So what I'm going to do to implement that is scroll up to the plus button code and then we'll add the action there.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=92)** So comma, action, I'm inside of the parentheses toward the end, and then we're going to call this modeWasPressed.
>
> **[1:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=99)** And if I use the code hinting, it's actually going to have the parentheses and then the button inside.
>
> **[1:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=104)** That's another way for saying the same thing.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=107)** I'm just going to delete that, just so there's less code on that line.
>
> **[1:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=111)** And then I'm going to just select the comma and the action, copy that, and then paste that for the minus and the multiplication button.
>
> **[2:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=120)** And then for the clear button, I'm going to paste that as well.
>
> **[2:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=124)** And I'm going to change modeWasPressed to clearWasPressed, and while we're editing this line of code, I think that C might look better if it were a capital letter, so I'll make that change really quick.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=136)** So let's show the debug area and then click on all the buttons.
>
> **[2:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=140)** So the plus button, it says mode was pressed.
>
> **[2:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=142)** So I have three times mode was pressed there, and the clear button should say clear was pressed, and the number button should still work.
>
> **[2:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=150)** We're not seeing anything right now because we need to go back to the content view in order to see them work.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=154)** So if you go back there and then you click on the buttons, you should see everything is updated and the print statements for these buttons that we just added in this movie are showing up as well.
>
> **[2:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-different-methods-to-handle-different-events?u=76281980&t=165)** So with how our app is set up right now, we can support any button presses we want for one button or multiple buttons by creating a new method and then adding it as an action as the last parameter inside of a CalculatorButton.

> [!info]- Semantic Content
>
> **Code Identifiers:** modewaspressed (5), clearwaspressed (3), numberwaspressed (2)
> **UI Navigation:** click on (2), scroll up (1), select the (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create methods for the equal button](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=0)** - [narrator] And now for this chapter's challenge.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=3)** To review what we talked about in this chapter, methods also known as functions are named actions.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=10)** Methods and functions can receive parameters, and can return data.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=14)** Variables can accept a method as the data type, and the @State and @Binding can be used when changing variables at runtime.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=24)** We're going to add a method to handle the equal button and we'll call the name EqualWasPressed.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=31)** So those are the only two requirements for the challenge.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=34)** It should take about five minutes to complete.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=37)** If you want to stick around for some hints, here you go.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=40)** Number one, follow the same pattern used for the other three button methods.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=45)** And number two, make sure the methods receive a calculator button as a parameter.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-create-methods-for-the-equal-button?u=76281980&t=50)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Create methods for the equal button](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980&t=1)** - [Narrator] Here's a solution to this chapter's challenge.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980&t=3)** I'm just going to copy and paste the clearWasPressed method, just like that, I'll change clear to equal, both in the name of the method and in the print statement.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980&t=14)** And then I'm just going to copy and paste the action clear was pressed, and the comma on the line above the calculator button constructor, and I'll paste it into the calculator button constructor for the equals button just like that, just before the close parenthesis there.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980&t=32)** And then I'm going to change the method name to equalWasPressed, and that should be it.
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980&t=38)** So I can show the debug area to view the print statement.
>
> **[0:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-create-methods-for-the-equal-button?u=76281980&t=41)** And there it is, and the other buttons continue to work, and that solves this chapter's challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** clearwaspressed (1), equalwaspressed (1)
> **Analogies:** just like (2)
> **Speakers:** - [narrator] (1)


### 5. Programming Building Blocks: Control Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding conditional statements](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=0)** - [Instructor] Now we're going to continue building our calculator app.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=3)** And to do that, we need to talk about something called conditional statements.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=8)** So what are conditional statements?
>
> **[0:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=12)** Conditional statements allow you to execute blocks of code based on certain conditions.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=17)** Those are evaluated as true or false.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=22)** It can run one code path if the value is true, and optionally, a different code path if the value is false.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=30)** This is also referred to as [[Control Flow]], so you may hear that term as you're learning [[Programming Concepts]].
>
> **[0:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=38)** So let's take a look at a simple example of a conditional statement.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=42)** You have the if key [[Microsoft Word|word]] and then a condition that is evaluated as either true or false.
>
> **[0:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=48)** And then you wrap the code that is executed if the condition is evaluated as true within curly braces.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=57)** So that comment there says, "This code will only run if condition is true."
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=62)** So let's take a look at a comparison example.
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=66)** One of the ways we can evaluate true or false is by using comparison operators with numbers like a greater than, less than, or equal sign.
>
> **[1:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=76)** So if we want to compare two integer like this, we can check to see for example, if three is greater than one, and because it is, any code placed within these curly braces will be executed.
>
> **[1:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=89)** You can also do comparisons with two equal signs and strings.
>
> **[1:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=94)** So we can see if two strings are equal to one another.
>
> **[1:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=98)** In this case, they are.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=100)** So again, any code within these curly braces will be executed because the statement is true.
>
> **[1:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=108)** Now let's see how it looks if you want to run some code if a condition is evaluated as false.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=114)** So let's say we have this variable isLoggedIn and it's set to false.
>
> **[1:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=119)** If the user is logged in, we want to show the dashboard.
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=123)** If the user is not logged in, we want to show the login screen.
>
> **[2:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=128)** Now since we're working in SwiftUI, you can think of that dashboard as showing a view.
>
> **[2:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=133)** And same with the login screen, and this is the exact syntax you'd use if you want to show one view or another view in SwiftUI.
>
> **[2:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=142)** because isLoggedIn is set equal to false, we would show the login screen in this code block.
>
> **[2:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=149)** So you'll notice here that the variable type is false with no quotes.
>
> **[2:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=155)** A true or false value in [[Swift (Programming Language)|Swift]] is called a Boolean and it does not have quotes around it.
>
> **[2:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=161)** You can use a variable value that is of the Boolean type in an if statement like we're doing here.
>
> **[2:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=167)** So let's take a look at another example that uses multiple expressions in a condition.
>
> **[2:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=174)** So there are certain operators like the and operator that we see here.
>
> **[2:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=178)** And there's also the or operator, which we'll look at in a minute.
>
> **[3:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=182)** The and operator is done by creating two ampersands.
>
> **[3:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=187)** So both Boolean values on the left and the right of the ampersands must be evaluated as true for the if block to be executed.
>
> **[3:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=198)** So the user must be logged in and an administrator in order to see the admin dashboard.
>
> **[3:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=204)** Another example is the or operator, which is two vertical pipes.
>
> **[3:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=210)** That's done by pressing Shift and then a backslash.
>
> **[3:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=214)** So this one says if the name is Todd or Norman, then execute the code.
>
> **[3:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=221)** So this might do something like we see here in our code.
>
> **[3:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=225)** So we have one whole condition which can be made up of multiple expressions.
>
> **[3:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=230)** So an expression is an individual Boolean value and the condition is the collective Boolean value.
>
> **[3:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=236)** So that can have one expression or more as we see here in our code.
>
> **[4:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=241)** So to review, conditional statements allow you to execute blocks of code based on certain conditions that are evaluated as true or false.
>
> **[4:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/understanding-conditional-statements?u=76281980&t=250)** They can run one code path if the value is true, and another if it's false, and one condition can contain multiple expressions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1), [[Programming Concepts]] (1), [[Microsoft Word|Word]] (1), [[Swift (Programming Language)|Swift]] (1)
> **Code Identifiers:** isloggedin (2)
> **Definitions:** is called (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using conditional statements and Booleans](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=1)** - [Instructor] Now let's get some practice writing a conditional statement inside of a playground.
>
> **[0:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=5)** Remember, you can create the playground by going to file new and choosing playground.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=10)** Once you've done that, hit the run button and then you should see the output over on the right.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=14)** Let's go down a few lines and type the [[Microsoft Word|word]] "if".
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=17)** Remember, this is what we do to create a conditional statement and then we need something that is evaluated as true or false called a condition.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=27)** So let's see if greeting is equal to something else.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=30)** So type greeting, as you start typing it, just use the code hinting and press return and then space and two equal signs.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=37)** Remember two equal signs is the comparison operator.
>
> **[0:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=41)** We're checking to see if one value is equal to another value.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=45)** That's different from the assignment operator, which is one equal sign that we see here on line three.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=50)** So let's just copy and paste this string on line three including the double quotes, and then I'm going to paste it after the double equal sign, just like that and then write some curly braces.
>
> **[1:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=63)** On line six here I'm going to print out the string "same".
>
> **[1:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=67)** Hit the run button and you should see "same" over here in your output.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=72)** Ignore the backslash end character for now.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=74)** It's an additional hidden character that's included in this print statement.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=78)** So it's not something that's very important to what we're talking about here.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=81)** So now we have this running because the statement is true.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=85)** Well, what if the statement were false?
>
> **[1:28](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=88)** Make any change to the string.
>
> **[1:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=90)** I'm just going to delete one letter and then I'm going to hit the run button again.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=95)** And then we don't see same printed out right here.
>
> **[1:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=98)** After the closed curly brace, let's put an else statement.
>
> **[1:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=101)** Remember, an else statement is what runs if the if statement is evaluated as false, so else, and then some curly braces.
>
> **[1:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=110)** And then we'll print "not same" in quotes.
>
> **[1:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=113)** Hit the run button and then we see "not same".
>
> **[1:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=117)** What if we make this statement have multiple expressions?
>
> **[1:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=119)** Remember we can use the "and" or "or" operators to be able to combine expressions to make one condition.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=126)** So after the closed quote on line five, let's type an or statement by typing shift and then backspace twice just like that.
>
> **[2:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=135)** So two pipes and then a space, and then greeting, two equal signs, and then we'll paste "Hello playground" as we copied earlier and then run it.
>
> **[2:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=145)** And now we're seeing same because we're checking to see if greeting is equal to the incorrect string or the correct string.
>
> **[2:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=152)** We have to include the greeting check both times.
>
> **[2:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=156)** So greeting is equal to "Hello playgroun" or greeting is equal to "Hello playground", the correct string.
>
> **[2:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=163)** If I change this operator to an and operator by typing two ampersands instead of two pipes, then run the statement, we'll see that it's evaluated as false and we see "not same" written there.
>
> **[2:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=177)** Let's go below and compare some numbers.
>
> **[3:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=180)** So if three is greater than one, some curly braces, print true, after the close curly brace, type else, some more curly braces and we'll print false in the quotes.
>
> **[3:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=193)** Hit the run button and then you see true.
>
> **[3:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=196)** And then a warning that this code will never be executed because this is always going to be true.
>
> **[3:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=201)** We could swap that from a greater than sign to a less than sign and run it again.
>
> **[3:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=207)** And we can see that the value is false.
>
> **[3:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=209)** We can put three and then two equal signs, see that it's evaluated as true, and then we can also do greater than or equals or less than or equals by doing that.
>
> **[3:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=222)** So we put the greater than or less than sign before the equal sign, and that means greater than or less than respectively.
>
> **[3:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=229)** Hit the run button again. And there we go.
>
> **[3:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=232)** That's still true.
>
> **[3:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=233)** One more thing I want to test out before we wrap up, and that's creating a Boolean variable.
>
> **[3:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=239)** I'll create a variable, a few lines above my if statement, and I'm going to call it condition.
>
> **[4:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=244)** And then I'm going to set it equal to my condition right here.
>
> **[4:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=248)** So I'm going to cut that and then I'm going to paste it after the equal sign.
>
> **[4:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=252)** And then I'm going to replace what I just cut with the word condition.
>
> **[4:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=257)** So now the data type of condition is a Boolean, meaning a true or false value.
>
> **[4:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=263)** So we can do if statements like that, we can put a variable in there, that's a Boolean data type.
>
> **[4:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=269)** And if it's true, then we see the true value.
>
> **[4:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=272)** If not, we see the false value if we're running an else statement.
>
> **[4:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=276)** So that's some practice creating some conditional statements in a playground.
>
> **[4:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/using-conditional-statements-and-booleans?u=76281980&t=280)** If you'd like more practice, you can stay in here and run some tests before we move on with the course and start adding these conditional statements to our calculator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (3)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Handling the numeric button presses](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=1)** - [Instructor] In my content view, anytime I press a button, that button shows up in the total text view.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=7)** However, in a real calculator, pressing a four, for example, if we have a three right here would result in seeing 34.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=15)** And our calculator shows a four.
>
> **[0:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=18)** So let's look at how to append those numbers onto the previous number.
>
> **[0:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=23)** Go over to button grid and then you want to find the number was pressed method and that's where we're going to be working.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=30)** So what we need to do is take the existing total value and append to it button.buttonText.
>
> **[0:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=39)** Fortunately that's a pretty simple operation.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=42)** I'm going to create an extra space before button.buttonText, and then I'm going to type total, a space, and a plus sign.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=51)** So this plus is not used for a mathematical operation, rather it's used for string concatenation.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=57)** It takes this string total and then appends to it whatever button text is.
>
> **[1:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=63)** So let's take a look at how that works over in content view.
>
> **[1:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=67)** So start pressing numbers, and it pretty much works as you would expect.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=72)** Because we have a large number here, we see an ellipsis at the end, and that's just how SwiftUI handles adding too much text in a text view when it can't auto shrink the size of the text view.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=85)** We're just going to leave it like that for now.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=87)** But let's go back over to button grid and then come back to content view to reset the view.
>
> **[1:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=93)** And it may appear that everything's working fine, but what happens if I change my total to a zero and then I start typing zeros?
>
> **[1:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=101)** Well, I don't get the number zero, I just get strings with 0, 0, 0, 0.
>
> **[1:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=106)** So what happens there is because we're doing string concatenation and never converting this to a number, we don't have a way of eliminating those zeros.
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=116)** We could say if it's zero and you press zero, then ignore it.
>
> **[2:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=120)** So that's one way of solving it.
>
> **[2:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=121)** Another way is to take this value, convert it to a number, and then back to a string.
>
> **[2:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=128)** So this many zeros as a number would just be zero, and when we convert it back to a string, it will display one zero.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=136)** So let's look at how that might work.
>
> **[2:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=138)** Go back over to button grid and create a new line above what we already have.
>
> **[2:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=144)** Let's create a constant, we'll call it totalInt with a capital I, and then set it equal to Int with a capital I and then some parentheses.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=154)** So this is how we can take a string and convert it to an integer.
>
> **[2:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=158)** Select total plus button.buttonText and cut it with command X and put it inside the parentheses.
>
> **[2:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=166)** And then what we want to do is convert it back into a string.
>
> **[2:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=169)** To convert a number to a string, we'll use the back/ and parentheses operator like we did previously in the course.
>
> **[2:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=177)** So open up a string, type a backslash and some parentheses, and then pass in totalInt.
>
> **[3:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=184)** So that will render totalInt as a string.
>
> **[3:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=186)** We're seeing a warning here, but rather than read that, I want to show you what's going to happen.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=192)** Go in the content view and start typing numbers out.
>
> **[3:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=196)** Then we get this [[Microsoft Word|word]] right here, which is going to be optional.
>
> **[3:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=199)** It's just cut off a little bit because the word's too long.
>
> **[3:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=202)** The problem that we're seeing back in button grid is that line 43 where we convert the string to an integer could possibly fail.
>
> **[3:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=211)** So what that does is it puts it inside of this wrapper in [[Swift (Programming Language)|Swift]] called an optional value.
>
> **[3:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=219)** Unless we unwrap that value, then we're going to see the word optional when we try to put it back into a string.
>
> **[3:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=227)** Fortunately, we can unwrap the value very easily by just adding an exclamation point to the end of this line.
>
> **[3:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=235)** We'll talk more about what that means later on in the course.
>
> **[3:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=239)** For now, let's just focus on it solving our current problem.
>
> **[4:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=242)** Go back to content view and we'll have that zero at the beginning and then tab zero a bunch of times, and you shouldn't see any additional zeros.
>
> **[4:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=250)** Everything else should work as before.
>
> **[4:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=253)** So to review, you can concatenate strings in Swift by using the plus operator.
>
> **[4:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=259)** You can convert a string to an integer by typing the int keyword and wrapping the string in parentheses.
>
> **[4:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=266)** That creates an optional value because the conversion could possibly fail and have no value.
>
> **[4:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=272)** So you can unwrap that and force it to have a non-optional value with an exclamation point.
>
> **[4:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/handling-the-numeric-button-presses?u=76281980&t=278)** Then if you want to put it in a string, simply use the backslash and parentheses operator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Swift (Programming Language)|Swift]] (2)
> **Code Identifiers:** buttontext (3), totalint (3)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Optionals and If Let statements](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=1)** - [Instructor] In the testing we've done so far, the conversion of our string to an integer and then back to a string works fine.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=10)** However, using this exclamation point operator is generally considered a bad practice.
>
> **[0:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=16)** That's because if the conversion ever fails, the app will crash.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=21)** We may never run into a problem with our app where this conversion will fail.
>
> **[0:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=26)** That said, it's very important to understand how to gracefully and properly handle that case.
>
> **[0:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=33)** So what we're going to do is, as a good practice in writing [[Swift (Programming Language)|Swift]] code, handle this the proper way.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=40)** To do that, we're actually going to use the if keyword just before let, and this is a slightly different usage of if than we've seen before.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=49)** So I'm going to delete that exclamation point, open up a curly brace, and then put a close curly brace below total.
>
> **[0:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=56)** Now let's talk about what this does.
>
> **[0:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=59)** So this right here would be our condition.
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=62)** However, it's not something that's evaluated as just true or false.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=68)** What happens when you create this type of if statement with the let keyword and setting a value to a constant and having something that creates an optional value that can possibly not have a value or be what Swift calls nil, is that inside of the curly braces, the code in here will only be executed if this is evaluated as a real value and doesn't fail.
>
> **[1:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=93)** So if we can successfully convert that string to an integer, then we'll set the total value to the totalInt, and then we can put an else statement to specify what happens if that fails.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=107)** So here, we'll put total equal to Error just like that.
>
> **[1:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=112)** Now we can force its failure by going over to content view and then setting the initial value of total to a letter.
>
> **[2:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=122)** So now it's rendering an "a".
>
> **[2:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=123)** It's not showing the [[Microsoft Word|word]] error because the method that happens when we press a button hasn't happened yet.
>
> **[2:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=129)** So now press a button and then we get Error right there.
>
> **[2:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=133)** So if there's any problem trying to make the conversion, then we see error.
>
> **[2:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=137)** Let's go back to the happy path by changing A to a zero and then type the values, so everything works as it did before.
>
> **[2:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=146)** And if there's a problem, then you're going to see the word Error rather than having the app crash because we're using the exclamation point operator.
>
> **[2:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=155)** So to review, using the exclamation point operator to unwrap optionals is generally considered a bad practice.
>
> **[2:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/optionals-and-if-let-statements?u=76281980&t=163)** And one way to get around that is to use an if let statement that runs the condition if the optional conversion passes, and then you can use an else statement to handle what happens when the conversion fails.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2), [[Microsoft Word|Word]] (2)
> **Best Practices:** bad practice (2), good practice (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** totalint (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Enums](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=1)** - Our number was pressed method now generally does what we want it to do, and then it displays the proper number up at the top.
>
> **[0:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=9)** Now let's shift focus to these mode buttons over here, specifically the addition, subtraction and multiplication buttons.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=17)** If we want to see which button was pressed, right now we can have the button text be the source of truth on that.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=24)** So the equal sign or the multiplication sign, and we could do an if, for example like this.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=32)** You don't have to write this code, you can just look at my screen.
>
> **[0:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=35)** If button dot button text is equal to x and then we can write our code right there.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=42)** The problem with that is that we're using letters and characters for that comparison.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=49)** And while it would work, what if we wanted to change these buttons to icons instead?
>
> **[0:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=54)** Well, then we lose that button text because there's no text inside of the label.
>
> **[0:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=59)** So how can we make a good way of knowing exactly which button was pressed, even if we change the UI a little bit?
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=66)** Which we are planning to do.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=68)** I'm going to erase this line of code and we're going to create something called an enum.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=74)** An enum is short for an enumerated value.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=78)** It allows us to create some kind of our own data type, like our own type of variable, and we can create it and have it have a limited set of pieces of data.
>
> **[1:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=90)** So we can have addition, subtraction, multiplication and equals.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=95)** So let's scroll up to the top, and then I'm going to create this above the struct line of code and below the import [[Swift (Programming Language)|swift]] UI line of code.
>
> **[1:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=105)** So here I'm going to create a few new lines and then I'm going to type the keyword enum.
>
> **[1:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=110)** You can see below it's short for enumerated type declaration.
>
> **[1:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=114)** Then a space and then Calculator Mode, capital C and capital M, and some curly braces.
>
> **[2:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=121)** And then we're going to specify four different modes.
>
> **[2:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=125)** So case, this sets a certain value for the enum.
>
> **[2:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=130)** So one value's going to be not Set, capital S.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=134)** One value's going to be addition.
>
> **[2:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=137)** Just make sure you're putting the [[Microsoft Word|word]] case before each one.
>
> **[2:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=140)** Another value's going to be subtraction.
>
> **[2:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=143)** And then finally we'll have multiplication.
>
> **[2:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=146)** Next we're going to go over to calculator button and give this a mode parameter.
>
> **[2:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=153)** So right underneath action, create a variable called mode.
>
> **[2:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=157)** Set the data type to our new data type we just created, which is Calculator Mode.
>
> **[2:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=163)** And then we'll give it a default value of not set.
>
> **[2:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=167)** To specify the value, start it with a dot and then you can pick from the list right here.
>
> **[2:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=174)** I'll choose not set, and that gives it a default value.
>
> **[2:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=177)** Go back into button grid, and now for our mode buttons we can add the mode parameter wherever we want.
>
> **[3:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=184)** So you can find the plus button and just before the close parenthesis, type "comma".
>
> **[3:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=189)** And then set the mode by typing "mode" and then a dot, and then choose the appropriate mode.
>
> **[3:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=194)** In this case it's addition.
>
> **[3:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=196)** Now we'll do the same thing for subtraction and multiplication.
>
> **[3:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=201)** So find the subtraction button code, comma, mode, colon, and then dot subtraction.
>
> **[3:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=207)** And then for multiplication, the same thing.
>
> **[3:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=210)** Just before the close parenthesis, comma mode dot multiplication.
>
> **[3:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=216)** And now if we go down into the mode was pressed method, we can print out the mode by going right before the close quote and then creating a space and using the back slash and parentheses operator, type "button dot mode".
>
> **[3:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=231)** Open up the debug area and then click on the mode button.
>
> **[3:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=235)** And now we see the different modes, addition, subtraction, and multiplication, down here in the debug area.
>
> **[4:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=241)** We also need to create a state variable that's going to change whenever we change the mode.
>
> **[4:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=248)** So let's do that before we wrap up.
>
> **[4:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=250)** Go below where we declare the binding total, and then we're going to create a state variable.
>
> **[4:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=256)** The reason it needs to be a state variable is because we're going to be changing the mode at runtime.
>
> **[4:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=261)** So type "at State", with a capital S, "var", and then a space.
>
> **[4:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=266)** We'll call this "current Mode" with a capital M.
>
> **[4:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=270)** And the data type will be calculator mode.
>
> **[4:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=273)** And we'll initialize this to dot not set.
>
> **[4:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=277)** Now scroll down to the method we were just editing.
>
> **[4:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=281)** Mode was pressed.
>
> **[4:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=282)** And then we're going to set the current mode at the top equal to button dot mode.
>
> **[4:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/enums?u=76281980&t=290)** So to review, you can create something called an enum, which acts as a custom data type and allows you to add any possible values you want and it makes your code nice and readable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** scroll up (1), click on (1), scroll down (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Speakers:** - our (1)

#### [Challenge: Conditionals](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=0)** - [Narrator] And now for this chapter's challenge, let's review what we talked about so far.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=7)** Conditionals manage [[Control Flow]] by using if/else statements to execute certain blocks of code and a single condition can have multiple expressions.
>
> **[0:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=18)** We got a little bit of practice throughout the chapter writing these kinds of statements.
>
> **[0:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=23)** And now for the challenge.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=24)** But first, a little bit of background.
>
> **[0:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=27)** When working with a calculator and you press some numeric buttons, let's say you push a 1 and then you push the plus button.
>
> **[0:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=37)** The next thing that happens is that when you press another button, that that number is going to replace the 1.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=45)** So remember, you have two sets of numbers that you're performing operations on when you're creating a calculator.
>
> **[0:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=52)** The 1 that was entered in before hitting the multiplication, subtraction, or addition button, and the 1 that was pressed after.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=60)** In order to add that functionality, we need to check to see if the last button was pressed was a mode button.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=68)** In other words, a mathematical operation button.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=72)** So to do that, we're going to create a state variable called the lastButtonWasMode because it's going to change at runtime.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=81)** When the mode button is pressed, we're going to set that value to true.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=87)** Make sure you do that at the top of the method.
>
> **[1:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=90)** When a number is pressed, if last button was mode, set last button was mode to false.
>
> **[1:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=98)** So in other words, if the value was true, we're going to set it to false.
>
> **[1:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=102)** If it wasn't true, we're not going to do anything.
>
> **[1:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=105)** Do that at the top of that method as well.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=107)** Finally, when the equals button is pressed, stop processing the method using the return command if the mode is not set or the last button was mode.
>
> **[2:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=121)** Think about how a calculator works here.
>
> **[2:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=124)** When you press the equals button, the mathematical operation is performed.
>
> **[2:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=129)** Well, what if the user never pressed a mathematical operation button like the plus button?
>
> **[2:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=135)** Then we can't perform any logic.
>
> **[2:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=137)** So what we need to do is stop processing that method.
>
> **[2:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=141)** You do that just using the return keyword, which is return all lower case on its own line.
>
> **[2:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=147)** This challenge is a little bit more difficult, so it may take 10 to 15 minutes to complete.
>
> **[2:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=152)** If you want some hints, here they are.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=154)** Remember that the or operator is two pipes, that's shift/.
>
> **[2:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=160)** You can use equals equals for comparisons with enums.
>
> **[2:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=164)** And you can use print statements if you need to check your work.
>
> **[2:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-conditionals?u=76281980&t=167)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1)
> **Definitions:** in other words (2), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** lastbuttonwasmode (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Conditionals](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=1)** - [Instructor] Here is a solution to the challenge.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=3)** Since the criteria for the challenge were pretty specific, your code might look pretty similar to mine this time around, but that's okay if it's not.
>
> **[0:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=12)** Let's go up to the top inside of button grid and I'm going to create a new state variable.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=17)** Remember, we're creating a state variable because it's a value we're changing at runtime.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=22)** So state var, and we'll call this last button was mode and I'm just going to set that equal to false.
>
> **[0:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=31)** So that was the first step that we needed to do.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=34)** Now what we need to do is go down to the mode was pressed method, and then I'm going to replace the print statement with last button was mode equals true.
>
> **[0:44](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=44)** I mentioned to put this at the top, but it's okay if it's at the bottom, as well.
>
> **[0:48](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=48)** For what we're doing, it doesn't make a difference.
>
> **[0:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=51)** In the number was pressed method, let's use an if statement to see if the last button was mode.
>
> **[0:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=58)** If last button was mode, then some curly braces, we set last button was mode equal to false.
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=66)** And then inside of the equal was pressed method, let's delete the print statement and then check to see what the current mode is.
>
> **[1:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=75)** So if current mode is equal to, so that's two equal signs .not set.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=81)** So we want to see if it's either not set or if last button was mode.
>
> **[1:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=86)** So or that's two pipes, that's shift back slash.
>
> **[1:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=90)** And then after that last button was mode.
>
> **[1:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=94)** Remember the purpose of this is that we can't perform a mathematical operation without knowing which kind of operation it is.
>
> **[1:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=102)** So some curly braces and in there type return.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-conditionals?u=76281980&t=107)** So with that, we've completed the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Finishing the Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Storing the saved number](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=1)** - [Instructor] In this chapter we're going to finish our calculator.
>
> **[0:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=4)** What we need to do to do that is to be able to perform mathematical operations on two sets of numbers.
>
> **[0:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=13)** The number that you press before you press the mathematical operator button, and the number that you press after.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=21)** To do that, we need to have two new variables.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=25)** One representing the value before the operator button was pressed, and then one representing the current value that's showing in the calculator.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=34)** So let's scroll all the way up to the top of ButtonGrid, and then below our state variables, we're going to create two more state variables.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=42)** Remember, state variables need the state flag to say that they're able to be changed at runtime.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=49)** So @State, capital S.
>
> **[0:52](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=52)** var savedInt.
>
> **[0:54](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=54)** This will represent the number before pressing the mode or mathematical operator button.
>
> **[1:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=61)** We'll initialize that to zero.
>
> **[1:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=63)** Go to the next line, create another State var, and we're going to call this currentInt.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=68)** So this is going to be the integer value that is currently displaying in the calculator.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=74)** We'll also initialize this to zero.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=78)** Now we're going to make a new method.
>
> **[1:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=79)** So scroll down to the bottom of all the methods that we created and we're going to create one that's going to be called from different places anytime we want to update the text in the calculator.
>
> **[1:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=92)** So go down a few lines below the last method, and then create a method called updateText with a capital T.
>
> **[1:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=99)** Add the curly braces.
>
> **[1:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=101)** And then what we're going to do is check to see if the mode is not set.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=107)** Remember, the mode is held in the currentMode variable, so if that is equal to not set, in other words, if it's the starting state of the calculator, then we want to set the savedInt to whatever number is currently in the calculator.
>
> **[2:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=125)** So let's go inside of updateText and then check to see if currentMode is equal to... So two equal signs, and then .notSet.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=136)** Then some curly braces.
>
> **[2:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=138)** And in there we'll put savedInt = currentInt.
>
> **[2:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=145)** Now we haven't defined what currentInt is, but it's going to be the current value displaying in the calculator.
>
> **[2:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=151)** We'll define that in just a minute.
>
> **[2:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=154)** Below the if statement put total.
>
> **[2:38](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=158)** And then we're going to render the total inside of a string.
>
> **[2:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=161)** We'll set it equal to the string, and then the backslash and parentheses operator, and in there currentInt.
>
> **[2:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=169)** So, as we call this updateText method, we're making sure to save that first value that's entered in the calculator.
>
> **[2:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=176)** If this condition is not true... In other words, if the user pressed the plus button and changed the current mode to addition, then this code will not be called.
>
> **[3:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=188)** So, savedInt will successfully save the number that was entered into the calculator before pressing the mathematical operator button.
>
> **[3:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=197)** Now scroll up to the numberWasPressed method.
>
> **[3:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=200)** In here, when we set lastButtonWasMode = false, we're also going to set currentInt equal to zero.
>
> **[3:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=209)** So think about how this works.
>
> **[3:31](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=211)** If I press a mode or mathematical operator button, that sets lastButtonWasMode equal to true, then when I press a number button, it sets the currentInt equal to zero.
>
> **[3:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=225)** So the calculator resets to zero, and then we'll display whatever number button that I pressed.
>
> **[3:51](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=231)** Then on line 59, where I'm setting the total to the totalInt, I'm going to set the currentInt equal to totalInt.
>
> **[4:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=241)** Remember the totalInt comes from the value that should be rendered in the calculator when converted to an integer.
>
> **[4:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=249)** In the case that we have an error, I'm going to set currentInt equal to zero, so go below total = "Error" and then set currentInt equal to zero.
>
> **[4:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=259)** So if we have an error, we reset the state of the calculator.
>
> **[4:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=263)** And then right here where we're setting the total equal to the string, what we instead need to do is run the updateText method.
>
> **[4:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=272)** And then what we're going to do is take this total value, and then instead of using that string, we're going to take currentInt as a string.
>
> **[4:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=282)** So add some double quotes, and then the backslash and parentheses operator to put a variable value in there, and then currentInt.
>
> **[4:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=290)** The reason why we want to do this is because total is what's currently inside of the calculator as a string, but we actually want to use the numbers.
>
> **[5:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=300)** So we're getting the current value as a number.
>
> **[5:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=302)** When we switch modes, then we set currentInt = 0, and that is what is going to reset the value so that we can have a value before the operator was pressed and then a value after.
>
> **[5:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=317)** Let's go back over to ContentView and test this out.
>
> **[5:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=320)** In content view, you're going to hit 1, 2, 3, or any combination of numbers that you like, and then hit a mathematical operator button, and then some more numbers.
>
> **[5:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/storing-the-saved-number?u=76281980&t=332)** So now we have two sets of numbers saved in the calculator.

> [!info]- Semantic Content
>
> **Code Identifiers:** currentint (12), savedint (4), updatetext (4), totalint (3), currentmode (2)
> **UI Navigation:** go to (1), scroll down (1), scroll up (1)
> **Definitions:** in other words (2), we call this (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Showing the total when the equals button is tapped](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=1)** - [Instructor] Now we're going to do what happens when the equals button is pressed.
>
> **[0:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=5)** Remember we have a number entered before the operation button was pressed and a number that was entered after.
>
> **[0:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=13)** The before number was savedInt while the after number, or current number in the calculator, is currentInt.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=21)** So with that in mind, let's go down a few lines below the if statement in the equalWasPressed method, and then we're going to create a conditional statement that checks if the current mode is equal to addition.
>
> **[0:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=33)** So if currentMode is equal to, so two equal signs and then .addition and then some curly braces.
>
> **[0:42](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=42)** If that's the case, we're going to add our two numbers together.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=45)** So savedInt, that's the first number, +=, in other words, increment by the amount of, and then a space, and then currentInt, the current value that is in the calculator.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=57)** So if we have one, two, three as the integer that we entered before pressing the plus button and four, five, six currently in the calculator, this would add four, five, six to one, two, three.
>
> **[1:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=71)** Now let's check to see if the current mode was subtraction.
>
> **[1:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=76)** If you want, you can write your own statement for that by pausing the movie.
>
> **[1:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=81)** One way to handle that is after the closed curly brace of the if statement, type a space and type the [[Microsoft Word|word]] else.
>
> **[1:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=89)** Remember this runs if the if statement is evaluated as false.
>
> **[1:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=94)** There is also a kind of statement called else if, which is written else if.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=100)** That runs if the if statement is false and if the else if statement is true.
>
> **[1:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=107)** So that's the statement that we want right here.
>
> **[1:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=109)** Note that if you actually wrote another if statement, that's fine and it will work just fine.
>
> **[1:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=115)** So else if and then currentMode is equal to, so two equal signs, and then .subtraction and then some curly braces.
>
> **[2:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=124)** Now in here we're going to subtract whatever's currently in the calculator from the first number the user entered.
>
> **[2:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=131)** So savedInt -= currentInt.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=134)** Now we'll do the same thing for multiplication.
>
> **[2:16](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=136)** Another else if statement.
>
> **[2:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=139)** Check to see if currentMode is equal to multiplication.
>
> **[2:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=142)** So .multiplication, some curly braces, and in there type savedInt *= so that's an asterisk and an equal sign, and then currentInt.
>
> **[2:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=155)** And then below all of these if and else if statements we're going to set currentInt, this is the value that we want to show in the calculator, equal to savedInt because we're performing changes to savedInt these three lines.
>
> **[2:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=170)** Then below that, we're going to update the text, and then finally we're going to set lastButtonWasMode equal to true.
>
> **[2:59](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=179)** So if the user types another value in the calculator, it will use the previously saved value and the user can add, subtract, or multiply that value if the user wants to.
>
> **[3:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=192)** So now our calculator should work.
>
> **[3:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=195)** Go back over to content view to test it.
>
> **[3:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=197)** Type in some numbers, hit a mathematical operator, some more numbers, and then hit the equal sign.
>
> **[3:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=204)** And there's our total.
>
> **[3:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=206)** I'll subtract four, five, six from that and hit the equal sign, and I get one, two, three.
>
> **[3:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=212)** I'll multiply that by two, and then I get 246.
>
> **[3:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/showing-the-total-when-the-equals-button-is-tapped?u=76281980&t=216)** So now our app is a working calculator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** savedint (6), currentint (5), currentmode (3), equalwaspressed (1), lastbuttonwasmode (1)
> **Definitions:** in other words (1), is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Formatting the total number](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=0)** - [Instructor] In our calculator, even though the math works, there's one thing that might stand out to you.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=7)** If I type 1000 in the calculator, there's no separator between the one and the first zero.
>
> **[0:13](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=13)** We can actually do that using some built-in code in [[Swift (Programming Language)|Swift]].
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=17)** Let's go over to ButtonGrid and implement that.
>
> **[0:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=20)** Find the updateText method toward the bottom of your code, and then above where we set the total and below our if statement, we're going to create something called a number formatter.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=32)** So type let to create a constant.
>
> **[0:34](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=34)** We'll call this formatter and set it equal to NumberFormatter with a capital N and a capital F.
>
> **[0:41](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=41)** I'm going to choose the one with the parentheses after, just like that.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=45)** This is a tool that allows you to format a number as a string.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=50)** On the next line, we're going to set a setting for the formatter called its number style, so type formatter.numberStyle, and set it equal to .decimal.
>
> **[1:02](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=62)** Then we're going to use our formatter to render the total, so replace what's there currently.
>
> **[1:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=69)** In other words, the string with currentInt inside, with formatter.string, and the one that we want is four, so press return on that, pass in currentInt, so this formats the string, and then we see this error right here, so click on that.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=87)** What this says is the data type returned by formatter.string has a question mark in it, which means it's an optional value, which means it could possibly be nil, having no value.
>
> **[1:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=100)** We looked at working with that earlier when we wrote an if let statement.
>
> **[1:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=105)** We can handle this by adding an exclamation point, which is listed right here as one of the options, or we can handle that by using the coalesce operator, which is two question marks.
>
> **[1:58](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=118)** This allows us to provide a default value when the optional contains nil.
>
> **[2:05](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=125)** So that's what we want right here.
>
> **[2:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=127)** Click Fix, and then provide the default value.
>
> **[2:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=131)** You can do that in quotes, and then we'll just put Error right there.
>
> **[2:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=135)** So if we can format the integer, then total is going to be that formatted value.
>
> **[2:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=141)** If there's a problem doing that, then the value in the calculator will say Error instead.
>
> **[2:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=147)** Let's test it out.
>
> **[2:29](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=149)** Go into ContentView, type out a number, perform some mathematical operation, and there we go.
>
> **[2:37](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=157)** It's separated with a comma.
>
> **[2:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=159)** I'll perform another one and it still separates it with a comma, though we had this ellipsis at the end because the number is too big to fit in the available space.
>
> **[2:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=170)** For now, we're going to leave that as is, but if you wanted to, you could of course shrink the text in the calculator.
>
> **[2:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/formatting-the-total-number?u=76281980&t=177)** And now with that, the main logic of our calculator is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1)
> **Code Identifiers:** currentint (2), updatetext (1), numberstyle (1)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Replacing the mode buttons with symbols](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=1)** - [Presenter] Now let's take a look at taking these buttons over on the right and swapping them out for symbols so we can use images inside of our buttons.
>
> **[0:10](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=10)** What we're basically going to do is copy our CalculatorButton and we'll call it CalculatorImageButton, and in there, we're just going to accept an image instead of text.
>
> **[0:22](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=22)** So let's press command+N on the keyboard, I'll create a new [[Swift (Programming Language)|Swift]] UI view by pressing return because it's already selected, and we'll call this CalculatorImageButton just like that.
>
> **[0:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=33)** Hit return or create and there it is.
>
> **[0:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=36)** I'm going to go over to CalculatorButton and I'm going to copy everything inside of the view.
>
> **[0:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=43)** So line 11 through 27, I'm going to copy that.
>
> **[0:47](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=47)** Go over to CalculatorImageButton, and then I'm going to paste it in.
>
> **[0:50](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=50)** For the action on line 14, I'll need to change that to "CalculatorImageButton".
>
> **[0:55](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=55)** And then I'm going to replace "text" with "image", and just before buttonText, I'm going to type "systemName", and then a colon just like that, and then change the "1" on line 11 to "plus".
>
> **[1:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=71)** And there's our plus button symbol.
>
> **[1:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=72)** If you're curious about where these names come from, you can actually open up the library in the toolbar by hitting the plus button, go over to the symbols library all the way on the right, and then you have this big list of symbols that you can use in your applications.
>
> **[1:27](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=87)** So if we were to put any of these in the place of the plus on line 11, that's the symbol that would render in the canvas on the right.
>
> **[1:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=95)** I'll click away from that and then we'll look at using this CalculatorImageButton.
>
> **[1:39](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=99)** So let's go over to ButtonGrid and then I'm going to scroll all the way up to the top and I'm going to change on line 29 the plus button, change "CalculatorButton" to "CalculatorImageButton" with a capital "I", and then change the plus to the [[Microsoft Word|word]] "plus".
>
> **[1:56](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=116)** You're also going to see a problem with modeWasPressed because it accepts a calculator button, and now we've changed that to a CalculatorImageButton.
>
> **[2:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=126)** So find the modeWasPressed method, and then just change that to "CalculatorImageButton".
>
> **[2:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=131)** And while we're at it, we'll have to do it for the equal button too.
>
> **[2:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=134)** So scroll up, we're going to need to do the same thing for each of those symbols, so I'll need to change the minus button to a "CalculatorImageButton".
>
> **[2:23](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=143)** The text should be "minus".
>
> **[2:26](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=146)** Scroll down to the multiply button, and that's going to be a "CalculatorImageButton" as well with the buttonText of "multiply".
>
> **[2:35](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=155)** And then scroll down to the equal button, change that to a "CalculatorImageButton" with the buttonText "equal", and then the symbols on the right should all update.
>
> **[2:46](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/replacing-the-mode-buttons-with-symbols?u=76281980&t=166)** And now we can put images inside of our buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** buttontext (3), modewaspressed (2), systemname (1)
> **UI Navigation:** scroll down (2), in the toolbar (1), scroll up (1)
> **Analogies:** just like (2)
> **CLI Commands:** find (1)
> **Speakers:** - [presenter] (1)

#### [Adding an app icon](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=0)** - [Narrator] Now let's look at putting an icon on our application.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=3)** Head over to the Project Navigator, so that's the folder icon all the way on the left.
>
> **[0:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=8)** And open up the Asset Catalog, which is called Assets.
>
> **[0:12](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=12)** From there, click on app icon.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=14)** Then you're asked to supply an image icon.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=17)** [[Xcode]] actually tells you the requirements for the image.
>
> **[0:21](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=21)** It's a 1024-by-1024 pixel square image.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=25)** When creating iOS icons, the graphic should not have rounded corners.
>
> **[0:32](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=32)** The operating system actually handles the rounded corners, so you should have the full bleed graphic supplied all the way to the edges.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=40)** So with that, I'm going to double-click on the square.
>
> **[0:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=43)** I'm then taken to my desktop, I'll go to Assets and then icon.png, and hit Open, and there's my icon.
>
> **[0:53](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=53)** So you'll see it applied over here, and then up here.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=57)** And what you can do to test it out is run the app in the simulator.
>
> **[1:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=61)** So hit this Run button, making sure that you have an iOS device selected here.
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=66)** So I have iPhone 15 Pro.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=68)** I'm going to hit Run, and there's my app, and I can actually hit the home button.
>
> **[1:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/adding-an-app-icon?u=76281980&t=74)** And there's the Calculator icon, and that's how to supply an icon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1)
> **Code Identifiers:** ios (2), iphone (1)
> **UI Navigation:** click on (1), double-click (1), go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Clear button](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=1)** - [Narrator] And now for the final challenge of the course.
>
> **[0:03](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=3)** To write the functionality for the clear button.
>
> **[0:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=6)** In order to finish the clear button, all we need to do is use the method that already exists to reset the app to its initial state.
>
> **[0:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=15)** This challenge should just take a few minutes to complete.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=17)** If you'd like some tips, stick around.
>
> **[0:20](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=20)** First, we need to look at the starting values of all the variables, and then set those variables to their default values inside of the clear button method.
>
> **[0:30](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/challenge-clear-button?u=76281980&t=30)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Solution: Clear button](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=1)** - [Instructor] Here is a solution to this challenge.
>
> **[0:04](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=4)** So I'm at the top of button grid and I have all my variables and what we want to do when we press the clear button is put all these variables in their initial states.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=14)** So we have the initial states from line 19 to 22, but what about line 18?
>
> **[0:19](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=19)** Remember, total actually comes from the content view, which is initialized to zero.
>
> **[0:24](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=24)** So if we go to the button grid, and I just select all of these from lines 18 to 22, and then I hit copy, I'm going to go down into my clear method that is clear was pressed, and then I'll paste over my print statement.
>
> **[0:40](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=40)** Now, of course, I'm going to need to remove the binding annotation along with the state annotation, so I'm going to delete all of those and then once they're deleted, I'm going to remove all of my type declarations, so colon, and then anything following the colon, just like that.
>
> **[0:57](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=57)** I'm also going to need to remove the var keyword because we don't want to create new variables, we want to change the values of existing ones.
>
> **[1:06](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=66)** Once I've done that, total doesn't have a value, it just shows the variable name.
>
> **[1:11](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=71)** So we'll need to set it equal to the string zero.
>
> **[1:15](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=75)** And that puts all the variables at their initial states.
>
> **[1:18](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=78)** Of course, if you prefer, you could have just written out each one of these variables rather than copying and pasting.
>
> **[1:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=85)** But once you've done that, go over to content view and then hit some numbers in your calculator and then confirm that the clear button resets the calculator, and sure enough it does.
>
> **[1:36](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/solution-clear-button?u=76281980&t=96)** And that completes our calculator application.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=0)** - [Instructor] Well, you've reached the end of this course and I hope you've learned something about programming in iOS.
>
> **[0:07](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=7)** You may be wondering where you can go from here.
>
> **[0:09](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=9)** Here are a few recommendations from me from the [[LinkedIn]] Learning library.
>
> **[0:14](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=14)** One of them is [[Programming Foundations]]: Fundamentals.
>
> **[0:17](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=17)** This is a great course for learning the basics of programming, possibly filling in any gaps that we talked about in this course.
>
> **[0:25](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=25)** As this course was focused on building a particular app, there are other aspects of programming that you can learn.
>
> **[0:33](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=33)** I like to recommend building upon the basics and having a very strong foundation before proceeding so that you can understand advanced concepts easier.
>
> **[0:43](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=43)** So this is the first course I recommend.
>
> **[0:45](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=45)** The next one is SwiftUI Essential Training with Steve Lipton.
>
> **[0:49](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=49)** This will get you some more practice in working with SwiftUI, learn the ins and outs, and again, fill in the gaps that we didn't talk about in this course because we were focused on building a particular app.
>
> **[1:00](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=60)** And finally, there are my other courses in the library that are related to iOS 17, so feel free to check those out as well.
>
> **[1:08](https://www.linkedin.com/learning/programming-for-non-programmers-ios-17-and-swift-5-21049778/next-steps?u=76281980&t=68)** I wish you great success in learning how to program, and thank you for watching the course, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Programming Foundations]] (1)
> **Code Identifiers:** ios (2)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- Swift (Programming Language)
- iOS Development

## Path Context

### In [[Master Swift]]
**1 of 4** | [[Swift 5 Essential Training]] →

## Appears In

- [[Master Swift]]

## Related Courses

_Courses sharing skills:_

- [[Swift 5- Protocol-Oriented Programming]] — Swift (Programming Language)
- [[Swift- Delegations and Data Sources]] — Swift (Programming Language)
- [[Building Your First iOS 17 App]] — iOS Development
- [[iOS 17 Development Essential Training]] — iOS Development
- [[Xcode 15 Essential Training]] — iOS Development

---

[↑ Back to top](#)