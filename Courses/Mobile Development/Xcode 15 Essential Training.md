---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: xcode-15-essential-training-23823075
url: "https://www.linkedin.com/learning/xcode-15-essential-training-23823075"
duration_minutes: 89
duration: 1h 29m
level: Beginner
updated: 3/26/2024
learners: 10844
skills:
  - Apple Developer
  - Xcode
  - iOS Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGYik8ZFXnpIQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711149305087?e=2147483647&amp;v=beta&amp;t=3E-HNHG1MtzPh9Djjvq4OlC2WYTf6amA4kqydT1VHxo"
linkedin_topic: Mobile Development
learning_paths:
  - '[Get Started with iOS App Development](../../Paths/Mobile%20Development/Learning%20Paths/Get%20Started%20with%20iOS%20App%20Development.md)'
prev_courses:
  - '[Swift 5 Essential Training](Swift%205%20Essential%20Training.md)'
next_courses:
  - '[iOS 17 Development Essential Training](iOS%2017%20Development%20Essential%20Training.md)'
path_nav: '[{"path":"Get Started with iOS App Development","position":2,"total":4,"prev":"Swift 5 Essential Training","next":"iOS 17 Development Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/apple-developer
  - skill/xcode
  - skill/ios-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Xcode%2015%20Essential%20Training.md)

![Xcode 15 Essential Training](https://media.licdn.com/dms/image/v2/D560DAQGYik8ZFXnpIQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711149305087?e=2147483647&amp;v=beta&amp;t=3E-HNHG1MtzPh9Djjvq4OlC2WYTf6amA4kqydT1VHxo)

# Xcode 15 Essential Training

> Looking to write better iOS-native apps for multiple delivery platforms? You should check out the latest version of Xcode, the integrated development environment for macOS, iOS, watchOS, and tvOS apps. In this course, instructor Todd Perkins shows new iOS and macOS developers how to install and start writing and editing Xcode 15 like a pro. Discover the essential features of coding with SwiftUI, p

> [LinkedIn Learning](https://www.linkedin.com/learning/xcode-15-essential-training-23823075) | 1h 29m | Beginner | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Becoming an Xcode expert](#becoming-an-xcode-expert)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started**](#1-getting-started) (10 videos)
  - [Installing Xcode](#installing-xcode)
  - [Creating your first Xcode project](#creating-your-first-xcode-project)
  - [Exploring the user interface](#exploring-the-user-interface)
  - [Xcode settings](#xcode-settings)
  - [Working with files](#working-with-files)
  - [Using Quick Help and documentation](#using-quick-help-and-documentation)
  - [Groups](#groups)
  - [Localization using .xcstrings](#localization-using-xcstrings)
  - [Working with color sets](#working-with-color-sets)
  - [Adding app icons](#adding-app-icons)
- [**2. Efficient Coding with SwiftUI and Prototyping**](#2-efficient-coding-with-swiftui-and-prototyping) (5 videos)
  - [Using the canvas with SwiftUI](#using-the-canvas-with-swiftui)
  - [The SwiftUI library](#the-swiftui-library)
  - [Creating snippets](#creating-snippets)
  - [Prototyping in a playground](#prototyping-in-a-playground)
  - [Regular expressions in playgrounds](#regular-expressions-in-playgrounds)
- [**3. Source Control**](#3-source-control) (7 videos)
  - [Creating a local repository](#creating-a-local-repository)
  - [Connecting source control accounts](#connecting-source-control-accounts)
  - [Creating a remote repository](#creating-a-remote-repository)
  - [Committing and pushing changes](#committing-and-pushing-changes)
  - [Branches](#branches)
  - [Merging branches](#merging-branches)
  - [Resolving conflicts](#resolving-conflicts)
- [**4. Storyboard Design Basics**](#4-storyboard-design-basics) (6 videos)
  - [Exploring Interface Builder](#exploring-interface-builder)
  - [Creating a user interface](#creating-a-user-interface)
  - [Connecting a label](#connecting-a-label)
  - [Connecting a button](#connecting-a-button)
  - [Troubleshoot broken connections](#troubleshoot-broken-connections)
  - [Understanding pinning](#understanding-pinning)
- [**5. Debugging and Testing**](#5-debugging-and-testing) (4 videos)
  - [Using the debugger](#using-the-debugger)
  - [Correcting errors with Fix-It](#correcting-errors-with-fix-it)
  - [Refactoring code](#refactoring-code)
  - [Creating unit tests](#creating-unit-tests)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Becoming an Xcode expert](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/becoming-an-xcode-expert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/becoming-an-xcode-expert?u=76281980&t=0)** - [Todd] Have you ever wanted to get into development for one of Apple's many platforms like iOS, Mac OS, or tvOS, but didn't know where to start? I've spent the last 12 years developing Mac OS and iOS applications, and I want to share with you what I wish I knew from the beginning based on my personal experience. With my course, you'll be able to go from being completely new to [Xcode](../../Skills/Mobile%20Development/Xcode.md) to understanding the most important concepts in just a few hours. I'm Todd Perkins, a senior iOS developer, and I want to teach you what it takes to become an expert in Xcode. Check out my course on the Xcode Essentials and get started on the path to mastering development for any and all Apple platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3)
> **Code Identifiers:** ios (3), tvos (1)
> **Speakers:** - [todd] (1)

#### [What you should know](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/what-you-should-know?u=76281980&t=0)** - [Presenter] Let's talk about what you should know coming into this course. As this is a basic course, there really are no hard prerequisites. You should be familiar with working with macOS, however, in that you should be able to navigate the file system, and you should also be familiar with working with text, including copying and pasting text. If you feel comfortable with that, you're ready to proceed with the course.

> [!info]- Semantic Content
>
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Xcode](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/installing-xcode?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/installing-xcode?u=76281980&t=1)** - [Instructor] The official tool for building iOS apps is called [Xcode](../../Skills/Mobile%20Development/Xcode.md), which could be downloaded for free at the Mac App Store. Once you've downloaded and installed Xcode, open up the application and after reading through and agreeing to the licensing agreement, you'll be asked to install additional required components. Make sure you check the box to install the iOS platform from this screen, and then click the button to download and install those components. After getting past the "What's New in Xcode" screen, you should see the welcome screen, which looks like this. Once you see the welcome screen, you're ready to proceed with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3)
> **Prerequisites:** install (3)
> **Code Identifiers:** ios (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Creating your first Xcode project](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-your-first-xcode-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-your-first-xcode-project?u=76281980&t=0)** - [Instructor] Once [Xcode](../../Skills/Mobile%20Development/Xcode.md) is installed, along with the required components, opening Xcode will take you to the welcome screen, which enables you to quickly create a new project or open an existing project, whether locally or from a repository. To create your first iOS app, create an Xcode project by clicking the Create New Project button here or through the File menu by going to File, New, Project. When creating a new project, you're asked to choose a template for the project. These templates are organized by platform, so you'll see multi-platform, iOS, macOS, et cetera. Selecting a platform gives you options for the type of application or framework you want to create. For this course, we're going to create an iOS app, so in the iOS category, click App, and then hit Next. Here, you're given several options to create your project, many of which don't apply to creating a simple app as we're doing here. The important ones are Product Name and Interface. For Product Name, type First App, and then for Interface, make sure to choose SwiftUI. For Team, choose None. For Organization Identifier, it's not relevant until you need to send your app to the App Store, but you can't leave it blank and you get a hint if you try to. This is meant to be a reverse domain name as in com.example if your domain is [example.com](https://example.com), which is used along with your product name to generate a unique ID for your app. You can type com dot your name here
>
> **[1:36](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-your-first-xcode-project?u=76281980&t=96)** to satisfy the requirements to create our project for now. Make sure you have None selected for Storage, as we're not going to use persistent storage for this app. Leave the other options unchecked and hit Next. You're then asked where to save the project and whether to create a [Git](../../Skills/Software%20Development/Git.md) repository. For what we're doing here, we don't need to create a Git repository, so leave that unchecked. And then, I'm saving this in my Exercise Files folder in Chapter 01, first_project, final. If you're following along with the exercise files, just save right outside of this folder so as to not create a conflict. So with that selected, I'll hit Create to create the new project. After a few seconds, it loads into the Xcode interface. This simple project will end up being your first iOS app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (4), [Git](../../Skills/Software%20Development/Git.md) (2)
> **Code Identifiers:** ios (5), macos (1), first_project (1)
> **CLI Commands:** make (2), git (2)
> **Exercise Files:** exercise files (2), template (1)
> **URLs:** [example.com](https://example.com) (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the user interface](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-the-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-the-user-interface?u=76281980&t=1)** - [Instructor] The [Xcode](../../Skills/Mobile%20Development/Xcode.md) interface is somewhat complicated and can be overwhelming. To make it easier to learn Xcode, I'm going to go over the three parts of the interface and talk about how the interface is generally used. As we go throughout the course and we use specific parts of the interface, we'll talk about those parts in more detail. So I'm going to start by going into full screen mode, and I want to point out the main interface pieces first. At the top of the screen, we have the toolbar, and on the left and the right of the toolbar are options to hide the left and right views. The view on the left is called the navigator, and the view on the right is called the inspector. The navigator view allows you to navigate various things, your project, source control, bookmarks, searching items in your code, debugging, et cetera. The main button that we're going to use in this course is the project navigator which is the folder icon all the way on the left. The item that you have selected in the project navigator controls what you see in the editor. So the editor is this main working area in Xcode. So right now I am seeing the code in the content view [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) file, and you could see that up here in the comment in the editor. If I single click on First app,
>
> **[1:37](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-the-user-interface?u=76281980&t=97)** then I'll see the code for that file. I'll go back to the content view. Note that because this is a Swift UI view, it also has the canvas on the right side. So as we edit code here on the left side of the editor, the canvas will instantly update, giving us visual feedback as we work. The inspector area on the right is controlled by what's in the editor. So for example, if I have this rightmost button selected in the inspector bar, which is the attributes inspector, that's the one with the sliders on it. And then I click on this image text inside of my code right here on line 13, then I'll see attributes for the selected code inside of the attributes inspector. If I click on V stack, then I'll see settings for the vertical stack. Same with text. If I click on that, I'll see its settings. So while the navigator controls the editor, the editor controls the inspector, and the inspector modifies the thing that you have selected in the editor. So to review, we have the toolbar at the top, we have the navigators on the left, inspectors on the right, and the main working area called the editor in the center of the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (2)
> **UI Navigation:** click on (4)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Xcode settings](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/xcode-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/xcode-settings?u=76281980&t=1)** - [Instructor] You can modify [Xcode](../../Skills/Mobile%20Development/Xcode.md) settings under Xcode settings. In the general tab, you'll see general options for Xcode that you can modify, like the appearance. You can modify the navigator size and change the font size for your files and folders. Under accounts, you can add your Apple IDs or source control accounts. Your Apple IDs are needed when publishing apps to the app store or for using certain features in your apps where development is locked behind having a paid developer account. The source control accounts allow you to work with [Git](../../Skills/Software%20Development/Git.md) repositories, which we'll talk about in detail later in the course. Under behaviors, you can set up actions that are triggered when certain Xcode events happen. For example, when an app you built starts running. You can click on starts under running, and you can choose to do something like play a sound or speak an announcement, et cetera. This can be really helpful if you tend to do other things during long processes, like a build that takes a few minutes to complete. Using behaviors, you can get right back to work when your build is ready to go. The navigation settings deal with how you navigate through files and folders in the Xcode interface, which I recommend leaving at the default, unless you want Xcode's navigation to match another app you're familiar with, or if you find yourself getting slowed down due to how Xcode navigation works. Themes control how your code looks in your application. Here's what I have set, which is basically the default light,
>
> **[1:34](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/xcode-settings?u=76281980&t=94)** which a larger font size. If you want to change which theme you're using, you can simply click on them and preview them. If you want to modify an existing theme like this dust theme, for example, you can select it and hit the plus button. So rather than choosing the template down here, you have the selected one at the top so you can duplicate it and then you can be safe in modifying anything in here however you want. For example, I can make strings be huge just to make an obvious difference. Now, if you want to use that, simply just have that selected and you can close preferences and Xcode will use that preference. If you want to remove any preferences for themes, simply select the theme and hit the minus button, so everything works here pretty much how you'd expect. Now, I'll just go back to my custom theme. In text editing, we can do things like toggle the visibility of line numbers and other options in the code. Under editing, you can choose more options like those for code completion and how your line endings work. You can control indentation, whether you want to use spaces or tabs. Just like navigation, these are settings that you'll want to visit if you want Xcode text editing to behave more like a another app, or if you find it getting in the way of effective code writing. You can modify key bindings to your liking, which works how you'd expect. For now, I recommend making a mental note that this option exists and coming back to it if you find that you're constantly using a command from the menu or a button and would like to be more efficient. Source control preferences are here
>
> **[3:09](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/xcode-settings?u=76281980&t=189)** where you may change your author name and email, along with default ignored files. This is another place to make a note to come back later if you need it in the future. Platforms is the place where you'd install any additional platforms you want to support, but didn't install when you launched Xcode for the first time. You can also delete installed platforms here by right-clicking, which I've had to do on occasion when errors have happened when upgrading Xcode. Locations allows you to change where certain pieces of Xcode build artifact data is stored. This is not the most common place to make modifications unless you have a unique need, but one use for this screen to average users is to note where this data is stored in the event that you ever need to clean it out, which I've had to do a couple of times when encountering errors, installing Xcode beta builds. So using Xcode preferences, you have a lot of power over your experience in developing an Xcode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (15), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** make (4), find (3), git (1)
> **UI Navigation:** click on (2), select the (1), toggle (1)
> **Analogies:** for example (3), just like (1)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** later in (1), go back to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Working with files](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-files?u=76281980&t=0)** - [Instructor] Working with files efficiently can greatly increase your productivity in [Xcode](../../Skills/Mobile%20Development/Xcode.md), whether that's memorizing useful keyboard shortcuts or working with files in the Project Navigator. When it comes to keyboard shortcuts, one I found useful is the "open quickly" keyboard shortcut, which is accessed using Shift+Command+O. From the menu there, you can start to type the name of the file, for example, "First, and then press Return when it's selected. So I've used my keyboard to go down here, and then you can get to that file immediately. If ya need to, you can also customize that keyboard shortcut as we've talked about previously, in Xcode Settings. Outside of opening files using that keyboard shortcut, we've been opening all files in tabs in the Project Navigator. You can see "First_AppApp" is open right here. Tabs in Xcode work like tabs in a lot of other coding applications, in that single-clicking on a file will show a preview of the file with italicized text in the tab name. So you can see the text is italicized right here. If I click on another file, for example "Assets," that italicized tab will get replaced. If I want to keep a tab open, I can double-click the tab, and you'll notice that the text is no longer italicized. And if I click on another file, that will spawn in a new tab. All of this functionality, as we've talked about in a previous movie, is customizable in Xcode Settings under Navigation.
>
> **[1:36](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-files?u=76281980&t=96)** So if you don't want to use tabs, you can actually change the Navigation Style to Open in Place. Navigation also uses something called Editors. As we talked about previously, the Editor is the main working area in Xcode. This allows you to choose how to open up new files when you do things like Option-click. So down here it says, "Option-click shows preview in next editor." The next Editor spawns an Editor within the Editor window. So let's close this and take a look at how that works. If I Option-click ContentView now with that setting selected, it opens up ContentView, but it spawned in a new Editor on the right. I can close that Editor by clicking the "X" button up here, and I can actually change the size of the Editor by clicking and dragging. Going back into Xcode Settings, you'll see that Navigation uses the Focus Editor. That's the current Editor that you're working in. So if I click in this Editor, you'll notice that the fonts here are highlighted. In the other Editor, the fonts are grayed out until I click in a file in that Editor, and then these fonts are in color and the other ones are grayed out. So the Focused Editor is the current one you're working in, and the next Editor is the Editor to the right of that, or a new Editor if one doesn't exist. I'm going to close this extra Editor here, and then I'll close out my extra tabs
>
> **[3:10](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-files?u=76281980&t=190)** and return to ContentView. So by using tabs and customizing them to your liking, you can improve your efficiency while working in Xcode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (7)
> **UI Navigation:** click on (2), in the tab (1), double-click (1)
> **Analogies:** for example (2)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Using Quick Help and documentation](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-quick-help-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-quick-help-and-documentation?u=76281980&t=1)** - [Instructor] The Quick Help inspector can be very helpful when you're developing in [Xcode](../../Skills/Mobile%20Development/Xcode.md), all you have to do to access it is click on some kind of code object that has documentation for it. Usually, this is anything that's not one of your custom objects in your project. You can access the Quick Help inspector in the inspector's area, and then you'll find the Quick Help inspector in the middle, it's the icon with the question mark on it. So right now, you can see that it's empty. But if I go in my code, for example, in ContentView, and I click on some kind of code object that's part of SwiftUI, like VStack, you'll notice that it automatically updates with information about what a VStack is and how it's used, including code examples. Some of the text in Quick Help is in links. So if I see LazyVStack right here, I can hover over that and see that it's a link. If I click on that, it actually opens up the full documentation for LazyVStack. So I can see code examples in here, and then its availability across Apple platforms. To exit Quick Help, if you're in full screen, you'll need to use the menu and then hit the X button. And then I'm returned back to Xcode. So, if you're ever wondering how a code element that's part of an existing framework is meant to be used, you can access Quick Help by simply clicking on an item in your code and heading over to the Quick Help inspector. From there, you have access to detailed documentation if necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2)
> **UI Navigation:** click on (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Groups](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/groups?u=76281980&t=1)** - [Instructor] Groups enable you to organize your files into folders or organize them independently of folders on the file system, which becomes increasingly useful as your project scales in size. So I have content view selected right here, and if I want to put it inside of a group, I can right click it, and then in the group options down here, I have these three different options. I have new group, new group without folder, and then new group from selection. So new group creates a folder both in the project navigator and in the file system. A group without a folder allows you to organize your folders in the project navigator without creating a folder on the file system. And then new group from selection takes everything you have selected and then automatically puts it in a folder, both in the project navigator and in the file system. So I'm going to choose new group from selection. I can give my group a name, I'll just call this my group, I'll press Return to commit the change, and then you're going to see that I have my folder icon and I can expand and collapse that. If I tab over to finder, you're going to see that I have that same structure in the file system. Back in [Xcode](../../Skills/Mobile%20Development/Xcode.md), I can actually click and drag other files into that group if I want, such as first app. So if I click and drag that below, watching where that line is going, so I can see that it indents a little bit. So I'll put it right underneath my group, release the mouse button, I could see it's now in there in the project navigator.
>
> **[1:34](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/groups?u=76281980&t=94)** Back in the file system, the file has moved. I'll tab back over and then I'll take both of these files out by shift clicking them. So I'll select the top one and then shift click the bottom one, and then just click and drag up above my group, and that takes them out of the group. I can delete the group by right clicking and then choosing delete. And if I want to create a group without a folder on the file system, I can right click a file and then choose new group without folder. So I'll name this my group as well, and you'll see that it has a little notch on the bottom left, and that indicates that this is detached from the file system. If I tab over to finder, you will not see my group there anymore. Again, it only exists in Xcode. I'll delete that with the delete key. And then finally, another way to create groups is using the plus button in the navigator. So right now I have nothing selected, so it asks me if I want to create a new file, but if I'm inside of some folder here like inside of first app and I hit the plus button, then I'll have those group options right here. So that's always available to you if you'd like to use it. So by using groups, you can more efficiently organize the files in your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Localization using .xcstrings](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/localization-using-xcstrings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/localization-using-xcstrings?u=76281980&t=1)** - [Instructor] The localization features in [Xcode](../../Skills/Mobile%20Development/Xcode.md) allow you to easily support other languages in your apps. You can add translations to your app by using a string catalog, which you can create from the new File Template menu by pressing Command + N. In here, you can either scroll down and find the string catalog or simply filter by typing the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) string and selecting String Catalog. I'll press Return to advance through the menu. I'm then asked to give my file a name and location. I'll just leave the default and then hit Return again. Then, I'm taken inside of my Localizable file and my default language is selected, which, in this case, is English. In here, what I'm going to do is create translated strings by using the Plus button. In here, I'm asked to provide a key and then a translation for the selected language, in this case, English. For key, you can use the literal string that is the same as your default language translation, but I recommend using unique keys so that when there's a problem and something is not localized, it's very obvious and you can fix it. So let's say we want to use for hello, world, hello, underscore, world. And then for my translation, I'm going to type the text Hello, with a capital H, comma, world, and then an exclamation point. So I'll click away to commit the change, and then I'm going to head over to ContentView. Here I have that translated text string, or at least what matches the translated text string,
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/localization-using-xcstrings?u=76281980&t=95)** showing in my ContentView. If I replace this with hello_world, you'll see that as I'm typing it, it's showing the literal string that I'm typing, and as soon as I finish the D on hello_world, it automatically finds that translated text and replaces hello_world with Hello, world! Let's look at adding a second string. So I'm going to select text and then copy with Command + C, and on the next line, paste with Command + V, and then I'll change hello_world to goodbye, just like that. So you'll see the literal string is showing right there, and we'll add a translation under Localizable. Here, we hit the Plus button and then type goodbye. And under English, en, I'm going to type Goodbye with a capital G and then an exclamation point, and I'll just click away. Back in ContentView, I can see the translation, and there it is. So what if I wanted to support other languages? Back in Localizable, I'm going to hit the Plus button down here at the bottom on the left side in the editor, and then I'm going to choose a language I want to support. In this case, I'm going to choose Japanese. When Japanese is created, you're going to see that the percent translated is 0%. If I click on Japanese, I can see the default localization, which is English, and then I could see what I have for Japanese. I'll paste in some strings for the Japanese translations. Once the strings are pasted in, you'll see on the right that the state updates to show a green check marks. You'll also see that there's a green circle
>
> **[3:09](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/localization-using-xcstrings?u=76281980&t=189)** with the check mark in it next to Japanese, showing that all strings have been translated to the target language. Now, let's go back over to ContentView and take a look at how to preview another language right here in the canvas. To do so, we're going to edit our scheme, so where it says the First App inside of the toolbar, click on that and then choose Edit Scheme. On the left, choose Run, and then you'll have to scroll down a little bit to find the localization settings. You'll see Localization Debugging here that says Show non-localized strings. What this does is it changes localized strings to show in all caps. Personally, I don't use this feature because I like using unique keys that are already obvious and not translated. But if you do want your strings to render in all caps if they're not localized, then you could check this box. For App Language, it defaults to system language, but when you click that, you're going to see your supported languages at the top. So I'll choose Japanese here and then hit Close. When I do that, the strings automatically update in the canvas. So to review, you can localize your apps by adding a string catalog, and in there add any supported languages and translations you'd like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** hello_world (4)
> **UI Navigation:** scroll down (2), click on (2)
> **CLI Commands:** find (2)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Working with color sets](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-color-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-color-sets?u=76281980&t=1)** - [Instructor] If you look in the content view of a default SwiftUI app, you'll see a blue globe, but nothing specifically defining a blue color. The color comes from this line right here that says foregroundStyle and then .tint. The tint comes from the operating system if you didn't define a specific tint for your application. To define your own custom colors to use inside of your apps, you can do that inside of the asset catalog. So click on Assets and then you're going to see AssetColor on the left side. If you select that, you'll see an empty dotted box right here, right above Universal. And this allows us to set an accent color for the application. So, if I click on this, I need to head over into the attributes inspector. So, I'll show the inspector area, and then what I'm going to do is set the color content to Extended Range sRGB, and then I can choose a color here. So, let's say I take out all the blue and then I change the green to 0.5. So, now I have this orange color. If I head back over to ContentView, then I should see that the tint is then replaced with my orange color. So you can control that default tint by modifying your accent color inside of the asset catalog. What if we want to support dark mode, and maybe a color is different in light mode versus dark mode? To support dark mode, go over to Appearances in the attributes inspector
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-color-sets?u=76281980&t=95)** and where it says None, choose Any and Dark, and this creates a variation for dark mode. So, you'll see Any Appearance on the left, so that's the default color, and then Dark, which is just a copy of Any Appearance on the right. So if you select Dark, you can make any changes to your color that you want to have it be supported in dark mode. In this case, what I'm going to do is make a totally different color than orange. In normal cases, like in the iOS operating system, it's just a different tint of the same color, usually, in dark mode. But let's make it obvious so we can tell that it's working. So I'm going to change green to zero and then blue to 0.5 to get a pink color. Back in ContentView, let's take a look at what that looks like in dark mode. So here, I'm in light mode. I can see that it's orange. And to preview in dark mode, I'm going to click this button right here at the bottom of the canvas, which is the device settings button. To preview in dark mode, you need to enable the Color Scheme option, so click that switch and then choose Dark Appearance. When I click away, I should see that it's then pink. If I go back to Light Appearance here, I can see that it's orange again. Now, let's take a look at creating your own custom colors. So go back over to Assets, and we are going to create a whole new color. You can use the plus button right here and then choose new Color Set, or you can right click in the empty space and choose the same option.
>
> **[3:07](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/working-with-color-sets?u=76281980&t=187)** You can give the color a name. I'll just call it todd, right here, all lowercase, and the reason for that is to make it obvious that the code is reading my color. For Any Appearance, I'm just going to drag the green slider all the way down to zero so I get this pink or magenta type color. For Dark, I'm going to click and drag red and bring it down to zero, so I have this cyan color right here, so it should be nice and obvious. Let's go back over to ContentView. And to use my custom color, I can actually replace .tint with .todd. Notice that when I type the T, not only do I see my custom todd color, but I actually see teal and other colors that are built into the operating system. So if I choose todd, you'll see that it updates to pink, and then I should be able to go into dark mode and see that cyan color. So, I'll go to Dark Appearance, click away, and sure enough, there it is. So to review, you can customize the accent color for your app, as well as add custom colors with color scheme support by modifying color sets in your asset catalog.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Identifiers:** foregroundstyle (1), srgb (1), ios (1)
> **UI Navigation:** click on (2), go to (1)
> **Versions:** 0.5 (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Adding app icons](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/adding-app-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/adding-app-icons?u=76281980&t=1)** - [Instructor] Similarly to working with color sets, icons and images are added and managed in the asset catalog. Before we go over there, I want to point out that I'm now working in a multi-platform project, which you can create from the new project template screen by choosing app under multi-platform instead of iOS, MacOS, et cetera. When you're previewing a multi-platform application, you'll see a preview of one of your platforms over here in the content view if you're inside of a SwiftUI view. If you want to change the previewing app in the canvas, simply click the drop down here, and then you can choose any device that you'd like. So I can change mine to iPhone 15 Pro, and there it is, and I can click this device button and then go back to Mac if I want, or choose automatic, which is based on your scheme up here at the top. So let's look at applying an icon by going over to the asset catalog. In here, click on Appicon, and you're going to see all of these dotted lined squares with different pixel dimensions inside of them. And as you might guess, this is how you apply your icons. You can either click and drag icons of the right pixel dimensions in here, or you can double click and select them manually from the file system. You'll notice that iOS has only one image that you supply, and MacOS has many for many different sizes. If you want to supply specific sizes for more detailed, larger apps, or specifically design smaller icons, like for notifications in iOS, you can select iOS,
>
> **[1:37](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/adding-app-icons?u=76281980&t=97)** show the inspector area, and then under iOS, from single size, click the drop down and choose all sizes. I'm just going to leave it at the default and then close the inspector area. I'll supply an iOS icon by double clicking right here. And then inside of my Assets folder, I'm going to choose icon.png, which is the right pixel dimensions here, 1,024 pixels wide by 1,024 pixels high. I'll hit open, and there's the icon. You'll notice that it doesn't have any rounded corners. In iOS, the corner rounding is done automatically, so you should not provide a rounded corner image for your image icon. Also in iOS, icons do not support transparency. If you want to preview the icon, you can simply click on your scheme here, so I have My Mac selected, and then I'm going to choose a device to run on in the simulator, so I'll choose iPhone 15, and then I'm going to hit the run button. In the simulator, I'll go into full screen mode, and then I'm going to click the home button, and then you can see the icon applied right there. Notice that the corners are rounded, even though I provided a square icon. Back to [Xcode](../../Skills/Mobile%20Development/Xcode.md). Let's look at applying the MacOS icons. Earlier I said you could double click the squares or you can click and drag into Xcode. I'm going to click and drag the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of these in here, and then we're going to look at what it looks like when running on MacOS. To run on MacOS, I'll click that deployment dropdown again, and I'm going to choose My Mac under Recent,
>
> **[3:12](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/adding-app-icons?u=76281980&t=192)** and then I'm going to stop the running application, which stops the iOS simulator, and then hit the run button to run the app on MacOS. When the app tries to launch, I'm asked if I should open the app because it's from an unidentified developer, which is me. I trust myself, so I'm going to hit Open Anyway right here. And then the app is going to open up and you should see that the icon exists in the dock. I'll take Xcode out of full screen mode and then minimize it. Here's my application, and then I should be able to see my icon in the dock. And there it is. Note that unlike iOS, MacOS icons do support transparency. So if you want to do a transparent PNG image, you can do that here. So, if you want to customize your app icons, you can do so by adding them to the app icon in asset catalog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** ios (10), iphone (2)
> **UI Navigation:** click on (2), dropdown (1), open the (1)
> **Env Vars:** png (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Efficient Coding with SwiftUI and Prototyping

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the canvas with SwiftUI](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-the-canvas-with-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-the-canvas-with-swiftui?u=76281980&t=1)** - [Presenter] SwiftUI is one of two user interface frameworks available for projects in [Xcode](../../Skills/Mobile%20Development/Xcode.md) and is currently the primary UI development framework for all Apple platforms. The other legacy framework is called Storyboards, which we'll talk about later. Multi-platform applications require the SwiftUI framework. This project was created using the same method we used earlier in the course, under file new project or the keyboard shortcut shift command N, create a new project under multi-platform and choose app. The SwiftUI canvas, as we touched on briefly earlier in the course, is extremely useful for developing SwiftUI applications and can be found on the right side of the editor when working in a SwiftUI file. In the canvas, you see a preview of your application. In this case, I am seeing a Mac version of my application, and that comes from the current active scheme and the target platform is now my Mac. Remember, you can modify the preview in the canvas by clicking this dropdown. So, I'll change to iPhone 15 Pro and the canvas will automatically update. You can [Zoom](../../Skills/Software%20Development/Zoom.md) in and out using the buttons here. You can fit to your view, or you can do the actual pixel dimensions or 100% by clicking the one. I'll choose fit to view. On the bottom-left of the canvas, you have the live selectable and variance buttons. Live allows for interactivity, including clicking on buttons and entering text and text fields. We don't have any buttons or text fields now,
>
> **[1:33](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-the-canvas-with-swiftui?u=76281980&t=93)** so you won't be able to see that, but this is the default and when you have a button, you can simply click on it and watch its reaction. Selectable allows you to select elements while you're working on them if you need to find or modify them quickly at development time. So for example, I can click on this globe, and then the image that controls it is highlighted there. A single click highlights the element in the code file while a double click highlights attributes within those elements. So if I double click the globe, then I'm actually selecting the globe text right here inside of the string. So that's convenient if you need to modify that and change it to something else. The variance button allows you to view different variations of your app, which are customizable by users at the operating system level. So for example, let's choose color scheme variance here, so I can see what my app looks like in light appearance and dark appearance at the same time right next to each other. I'll go back to live. This is the device settings button that we've looked at briefly earlier in the course. This enables you to be able to look at those different types of settings, but just on the same device. So for example, if I wanted to preview you my app and dynamic type settings, I can click and drag these around and then close that menu by clicking away. And that's what it looks like. You'll notice that the image is bigger and the text, so that's something important to keep in mind when you're developing apps. I'll disable that and click away. So to review, the SwiftUI canvas enables you to get instant feedback from your code changes and allows you to quickly preview your app based on a variety of user-setting variants.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Cross-References:** earlier in (3), go back to (1)
> **UI Navigation:** click on (2), dropdown (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1)
> **Code Identifiers:** iphone (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)

#### [The SwiftUI library](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/the-swiftui-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/the-swiftui-library?u=76281980&t=1)** - [Instructor] Using the [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) UI library, you can quickly add assets to your Swift UI projects. To do so, open up the Swift UI library using the plus button in the toolbar. Here, we have all kinds of things that we can modify. So all the way on the left, we have a whole bunch of different views. These are organized by controls at the top, and if you scroll down, you'll see different types of views, like layout, views, et cetera. You can also filter by typing text. So if I type button right here, I'll see all the buttons that I have available, including Sign in with Apple button. If I remove that text, I'll see a list of items I can scroll through. So I'll choose the color picker, and I'm just going to click and drag that into my app. With a live option selected here in the canvas, I can actually click on that color picker and it will pop up and I can interact with it. So that's all done directly in the canvas. I can dismiss this with the X button here as well. Another interesting thing you can use in the library is the Symbols library. What I'm going to do here is choose Selectable in the canvas, so that's at the bottom left, and then I'm going to double-click the globe. You'll notice that the globe text is then selected; when I open up the library, I can go over to the symbols library all the way on the right, and then I can find a symbol that I want to change to. Let's say I want to change to this graduation cap one. When I double click, the selected text will be replaced and the image will be replaced in the canvas. So using the library with Swift UI in your projects, you can quickly get user interface items into your code with minimal effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (4)
> **UI Navigation:** in the toolbar (1), scroll down (1), click on (1), double-click (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Creating snippets](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-snippets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-snippets?u=76281980&t=0)** - [Instructor] In my code right here, I have code to create a custom button that is a rounded rectangle button. In order to do this, I need to create a specific type of button that is one with a label and has a text view with very specific settings. The exact type of button is not something that's built into iOS or Mac Os for that matter. So if I want to have a button like this that I can use in multiple places and multiple applications that I create, it would make sense to have this block of code be reusable in some way. One way to do that leveraging X Code's power is by creating a code snippet. To create a code snippet, select a block of code like I've done here with my button, and then right click and choose create code snippet. In here you'll need to give your code snippet a name, all call mine rounded rectangle button. Here you can choose a language, platform, completion shortcut, and availability. Availability just says where in your code this shortcut should be available to use. For completion I'm going to type the shortcut RR button. So when I type that X code will give me code hinting to create the rounded rectangle button. I'm going to leave everything else as is and then hit done. And now I have my rounded rectangle button here. You'll notice that this menu that's showing up is the library. So if I close the library and then open it back up, you'll see that the snippets library is toward the middle, so it has the curly braces inside of it.
>
> **[1:33](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-snippets?u=76281980&t=93)** In there you have basic [swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) ones that ship with X code, and then you have a section for your user ones at the top. So I can see my rounded rectangle button in here. I can also edit it if I want to, and of course delete it. I'll click away and then right underneath my button, so right below line 21, I'm going to type RR button and you'll see the code hinting shortcut show up. I'll just press return, and then X code will create one for me. Note that you can also just drag it out from the library if I hit the plus button in the library. So if I just click and drag from there, I can drop it anywhere I want in my code, and boom, there's another button. So by using code snippets, you can take any blocks of code that you may find yourself repeatedly using and turn them into a reusable component that you can put anywhere you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Prototyping in a playground](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/prototyping-in-a-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/prototyping-in-a-playground?u=76281980&t=1)** - [Todd] Sometimes when you're creating software, you want to be able to quickly create a proof of concept, often for something like an algorithm, you can do this in [Xcode](../../Skills/Mobile%20Development/Xcode.md) by using Playgrounds. The quickest way to create a playground is through the File menu. In Xcode, go to File, New, and then choose Playground, and note that there's a keyboard shortcut if you want to memorize it. Here I'm asked to choose a template for the playground. I'm going to choose Mac OS Blank, and then hit Next. Then I'm asked for a name of my playground and a location to save it, I'll press Command + D to shortcut to the desktop, and then press return with a default name to create the playground. Now I'm going to go into full screen mode. Next, I'm going to hit this Run button right here on the left. That replaces line number three, and then my playground launches. When your playground's running, you could see feedback about the values of variables right in line. So right here on line three, I could see the value of the greeting variable. It's "Hello, playground." On line four, I'll change the value of greeting to something else. With it changed, I'll hit the Run button again, and then I could see the value there, so I can see it's "Hello, playground" on line three, and then "New greeting" on line four. Now let's create a function called addNumbers, and this will receive two parameters, num1 and num2. Both will be integers, and it will return an int. Inside the curly braces, I'm just going to return num1 + num2. A few lines below the closed curly brace. I'll call the function.
>
> **[1:34](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/prototyping-in-a-playground?u=76281980&t=94)** So addNumbers, and then I'll pass in two different numbers. When I hit that Tun button, I'm going to see the value of add numbers there. I can go to the next line, call it again with different values. I'll have to hit the Run button to see the value as a value weighted by that line. And there we go. So I can quickly see return values of functions and tweak [Algorithms](../../Skills/Software%20Development/Algorithms.md) in a playground. And by using Playgrounds, you can quickly create prototypes for your applications and develop algorithms quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **Code Identifiers:** addnumbers (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** template (1)
> **Warnings:** note that (1)
> **Speakers:** - [todd] (1)

#### [Regular expressions in playgrounds](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/regular-expressions-in-playgrounds?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/regular-expressions-in-playgrounds?u=76281980&t=1)** - [Instructor] One of the most useful things you can prototype in a playground is regular expressions, and you can do that using something called RegexBuilder. The first thing I'm going to do in here is import RegexBuilder. So I'm just going to put that right underneath the Cocoa line of code. And then in here, I have my greeting, and I'm going to create a regular expression that finds words. So a few lines below greeting, I'm going to let pattern = Regex and then some curly braces. And inside of the curly braces, OneOrMore, and then I'll open up the parentheses and then type in .[word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). So this is a pattern that looks for a word. Below the pattern line, I'm going to check if I have a match. So if let match = greeting.firstMatchof: and then pass in your pattern. And then, of course, we'll need some curly braces after that. And then we're going to check the output. So let output = match.output. So let's hit that Run button, and then we should see the output here that we've matched the first word inside of our greeting. And there's our first word: Hello. So if you want to prototype regular expressions, a playground is an excellent place to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** firstmatchof (1)
> **Speakers:** - [instructor] (1)


### 3. Source Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a local repository](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-local-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-local-repository?u=76281980&t=1)** - [Instructor] If you're going to be serious about coding, you need to understand how source control works, that is controlling versions of your code. This is typically done using [Git](../../Skills/Software%20Development/Git.md), which is available on platforms like [GitHub](../../Skills/Software%20Development/GitHub.md) or [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), both of which are supported by [Xcode](../../Skills/Mobile%20Development/Xcode.md). There are two ways to put an Xcode project under source control. The first is at the time of project creation. So if from the welcome screen I choose create new project, I'll create a multi-platform app, and then I'm going to call it XC15-source-control, just like that, and then I'll hit next. And then when I'm choosing to create my project, I'm going to check the box to create a Git repository on my Mac. That creates a local repository only. We'll look at connecting it to a remote repository later on. I'm just going to create this on my desktop. So if you're following along, you can just create the project wherever you'd like. In the source control navigator, which is in the navigator bar immediately to the right of the project navigator, I can click on repositories and then see that my project is now under source control. So I can see that there are branches, tags, et cetera. If I expand branches, you'll see that I'm working in the main branch currently. In the event that you already have a project and want to place it under source control, within that project, just go to integrate in the file menu and then choose new Git repository. Because all of my projects are currently under source control, then I'm notified that that is the case, so I can't add them right here,
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-local-repository?u=76281980&t=95)** but this is the menu where you'd add them if you wanted to take a regular project and put it under source control. So I'll cancel out of that menu. So to review, there are two ways to put an Xcode project under source control. First is, at the time of creation of the project, simply check the box to put it under source control. If you want to add it later, you can use the menu and go to integrate new Git repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** git (4)
> **UI Navigation:** go to (2), click on (1)
> **Tools:** github (1), bitbucket (1)
> **Env Vars:** xc15 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Connecting source control accounts](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-source-control-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-source-control-accounts?u=76281980&t=1)** - [Presenter] While using source control in a local way for our project that we have here is better than not using source control. We want to eventually be able to get these file changes and versions up in the cloud so we can access them through other computers or using other people on our development team. To connect your cloud accounts to [Xcode](../../Skills/Mobile%20Development/Xcode.md). As we talked about previously in the course, go into Xcode settings, under accounts. Here, you can connect your source control accounts as needed. Remember, you can do that using the plus button, so choose [GitHub](../../Skills/Software%20Development/GitHub.md) or [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) and then hit continue, and then enter your credentials and proceed to connect your account. You'll notice buttons here, like create a token on GitHub. When you click that link, your web browser opens up and you're given the directions to create your token that you put in here to connect your GitHub account. Since that's outside of Xcode and made change over time, I'm not going to demonstrate it here. Just know that you can click this button and then follow the GitHub steps in your browser to create your personal access token. So, I'll cancel out of that. The process for other source control platforms is the same. You'll click the button, your browser will open up, and then you log in. You create your personal access token and you paste it in here. Once you've done that, you're going to see your source control account under this menu, and it's connected to Xcode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Tools:** github (4), bitbucket (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [presenter] (1)

#### [Creating a remote repository](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-remote-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-remote-repository?u=76281980&t=1)** - [Instructor] Now that we've created our source control account and connected it with [Xcode](../../Skills/Mobile%20Development/Xcode.md), what we can do is take our local repository and send it to our remote repository. So here, I'm in the source control navigator, which again is to the right of the project navigator in the navigator bar, and I've selected repositories. Down here, you'll see Remotes. You'll notice that if you expand it, nothing will be in there because we only have a local repository at this point. Right-click Remotes and then choose New, and then your project name and Remote to create the remote repository. I'm going to choose my [GitHub](../../Skills/Software%20Development/GitHub.md) account with a default owner. I'm going to leave the repository name at what it is now, which is just my project name. I'm going to leave everything else and then just hit Create and there we go. Under Remotes, I have origin and there's my branch. And that's all you need to do to connect your project to a remote repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** github (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### [Committing and pushing changes](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/committing-and-pushing-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/committing-and-pushing-changes?u=76281980&t=1)** - [Instructor] With our local repository now connected to a remote repository, let's take a look at committing and pushing changes. I'm going to head over to the Project Navigator and make sure I'm working in my ContentView file. Now, I'll make a simple change to the text inside of my text view on line 16, just like that. When I make the change, you're going to see this blue line over here, indicating that this line has been modified since the last commit. You'll also notice the M for Modified to the right of ContentView inside of the Project Navigator. If you want to undo any commits on a particular line, you could simply click that blue pill right there and then choose Discard Change, then it reverts back to the original state. You'll also notice the M is gone. I'll press Command + Z to have that change back in. Also, notice that if you right-click ContentView, you can go to Source Control and then choose Discard Changes so you can discard all the changes in a given file. So I'll click away from that. And now what we're going to do is commit this change and push it to our remote repository. To do so, go on the menu and then choose Integrate, Commit, and this takes us to the Commit menu, showing us what's been changed since our last commit. So you'll see that blue pill on the left again, and then you can see "Hello, world!" has been replaced with "Hello, commit!" So the changed code is highlighted, even just a part of the line that changed is highlighted. So what I need to do is add a commit message.
>
> **[1:37](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/committing-and-pushing-changes?u=76281980&t=97)** You'll see that it's required here, so click in that field, and then just type My first commit or whatever you'd like. Once you've typed that out, then you need to stage your commit before you can fully commit it and push it. So with that text in there, I'm going to hit Stage All to stage all my changes. With my changes saved and staged, I'm going to commit and push them. You'll see the Commit button right here, but if I hit the dropdown next to it, I can choose Commit and Push, so I'm going to click on that right now. Then, [Xcode](../../Skills/Mobile%20Development/Xcode.md) asks: Where do you want to push the local changes to? And I have my main branch selected. So origin/main, and I'll just hit Push. And after a few seconds, the commit is pushed. So to review, you can make changes in your code, which will show highlights next to your code numbers and an M next to modified files. And then using the Integrate menu, you can create commits, stage them, and then push them to your remote repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **CLI Commands:** make (4)
> **UI Navigation:** right-click (1), go to (1), dropdown (1), click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Branches](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/branches?u=76281980&t=0)** - [Instructor] When working in a team environment, it's often useful to create branches of your code base, so that different developers can work on the same code at the same time, and create different versions of the code. Then, merge their changes back into the main branch. To create branches in [Xcode](../../Skills/Mobile%20Development/Xcode.md), head over to the source control navigator, and then make sure you're in the repository section. From there, expand Branches, and you should see main, which should be your current branch. From there, right click main, and then choose New Branch from "main." So, I'm going to create a new branch, and we'll just call this feature forward slash todd. Then I'll press return or hit the Create button. Now, you don't see the new branch in the exact same spot as the main branch. Because I added feature and a slash, you actually see a feature folder under Branches. So if you expand that, then you'll see the branch there. So now, I'm working in the feature todd branch. Any changes that I make here will only be in the todd branch! So, I'm going to make a simple and obvious change inside of our ContentView class. I'll just change that Hello message again. Again, I see the indicator that this file was modified, and again, I'm going to Commit and push that change. So, Integrate, Commit. You may want to memorize the keyboard shortcut for that. Here, you have a chance to overlook your changes, make sure that they are what you want to commit. Add a commit message, you can stage them, and then use the dropdown to Commit and Push.
>
> **[1:33](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/branches?u=76281980&t=93)** Right here, when it says Push local changes to, you'll notice Create in parentheses after my branch name. That's because the branch doesn't yet exist on the remote repository. So, this is going to create that remote branch. Hit Push, and then a few seconds later, your changes should be pushed to the remote repository. Now if I go back to the source control navigator, under Repositories, in Remotes, I can see my branch there under the feature folder. If I click on my branch, I can see the Commit history, including all Commit messages. So to review, if you want to create a branch in Xcode, simply right click Branches, and choose New Branch From and in your selected branch. Then, you can make any changes you want and any commits or pushes you make will be connected to your current branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2)
> **CLI Commands:** make (6)
> **UI Navigation:** dropdown (1), click on (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Merging branches](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/merging-branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/merging-branches?u=76281980&t=1)** - [Instructor] Now let's say you've made changes in your feature branch and you're ready to merge that branch into your main source code branch. To do that, the first step is to switch to your destination branch. You can do that by right clicking the branch and then choosing Switch. So I'm right clicking main and then choosing Switch from this menu. Then I'm asked a confirmation message. I'm going to hit Switch. You can now see that at the top, my working branch is main. You'll notice that there is a little caret there. And if you click that, you can use this to switch your branch as well. Now that we're back in the main branch, I'm going to right click my feature branch right here, and then I'm going to choose Merge "feature/todd" into "main", and then I'm asked if I'm sure I want to do that, I'm going to hit Merge. Once I've done that, the merge process is complete and then you can see that I have one change to push. If I go into content view, you'll see that the changes from the todd branch are inside of my code. The changes are committed locally, but this indicator right here with the up arrow on the one shows that I have local changes that have not been pushed to my remote repository. To push them, go to Integrate, and then Push. I'm going to push them to my main branch, and then I'll hit Push. Now that we've merged in our feature branch into the main branch, we'll need to clean up our repository by deleting those feature branches. All you need to do there is just right click the branch you want to delete and then choose Delete.
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/merging-branches?u=76281980&t=95)** Then I'm asked if I want to do that for sure, I'm going to click Delete. But I still have the feature branch inside of the remote repository. If I right click the branch here, I can delete the remote branch as well. So I'm deleting feature branch from my remote repository. So I'll hit Delete and now it's gone, and now I can see that the code exists just as I want it.

> [!info]- Semantic Content
>
> **UI Navigation:** switch to (1), go to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Resolving conflicts](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/resolving-conflicts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/resolving-conflicts?u=76281980&t=1)** - [Instructor] A common challenge when working with [Git](../../Skills/Software%20Development/Git.md) is how to resolve conflicts when merges happen. These often happen when two branches are working on the same lines of code and one gets merged before another. For example, if I'm on my main branch here, I'm actually going to double click main inside of Repositories in the Source Control navigator. So I'll double click it right here in my local repository, and I can see that I've added another commit. If I double click this commit, I can see what was changed. I simply added an exclamation point. At the same time, another developer on my team, let's call him Suresh, made changes to the same file. So what I'm going to do is switch to that branch and see what's different there. I'm going to click this caret underneath xc15-source-control at the top left in the toolbar, and then I'm going to switch to the suresh branch. So I'll close this commit, and then I'm going to look at my Content View. So now in the suresh branch, I can see that that same line of code was edited. So, before merging back into the main branch, Suresh made changes to a file that was changed on the main branch. So what he needs to do is pull the main branch changes into his code and resolve the conflicts before he's able to merge back into the main branch. So now, what I'm going to do is in Repositories, I'm going to right click the main remote branch and then choose Merge main into feature/suresh. I'm asked to confirm, I'll hit Merge,
>
> **[1:36](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/resolving-conflicts?u=76281980&t=96)** and this time, when pulling it in, I'm seeing a C next to ContentView.[swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md). The C is for conflict. Click on ContentView.swift, and then you're asked how you want to resolve the conflict. The affected lines are highlighted, so I could see what was changed at either or. And then there's a question mark right here in the middle. If I click that dropdown, I can choose either left, right or choose left, and then right. So maybe in this case I'll choose left. So now we have that dot saying I've looked at the conflict, and then I can hit the Merge button. Now I have successfully pulled in the changes. You can also see that Suresh has a couple of changes that haven't been pushed yet. So let's go to Integrate, Push, and then push the changes. Now that that's done, I can go back to the main branch and then merge the feature/suresh branch in. So I'll go back to the main branch by clicking the drop down here. I'll confirm the switch, right click the branch I want to merge in, choose Merge, confirm, and then the main branch has some changes that need to be pushed. So I'll go to Integrate, Push again, and after that, the conflicts have been resolved and all my branches are at where I want them to be. Whenever you need to resolve merge conflicts, you can do so in [Xcode](../../Skills/Mobile%20Development/Xcode.md) using the Resolve Conflicts window. When you select which changes you want to accept, you can hit the Merge button
>
> **[3:08](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/resolving-conflicts?u=76281980&t=188)** and the conflicts will be resolved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (2), [Git](../../Skills/Software%20Development/Git.md) (1), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **UI Navigation:** switch to (2), go to (2), in the toolbar (1), click on (1), dropdown (1)
> **File Paths:** contentview.swift (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** git (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Storyboard Design Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring Interface Builder](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-interface-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-interface-builder?u=76281980&t=1)** - [Instructor] Earlier in this course, we talked about a UI framework called SwiftUI. That's the framework at this point in time that Apple is pushing developers to use for new applications and gets most new features with each [Xcode](../../Skills/Mobile%20Development/Xcode.md) release. However, many mature applications use a different UI framework like storyboards. These apps may stay in their created frameworks or need to be migrated to a new SwiftUI app. For that reason, it's important at this point in time to understand both frameworks well. This chapter is focused on how storyboards work in Xcode. Let's start by creating a project that uses storyboards. From the welcome screen, I'm going to click to Create a New Project button, and I'm not going to be able to choose multi-platform for a storyboard project, so I need to either choose iOS or macOS. For this one, I'm going to choose macOS App and then hit Next. For product name, I'm going to put Storyboards. For interface, make sure to choose Storyboard. And note that when you do that, you also have the option to choose Objective C for your language. We're not going to talk about that in this course, but just know that it's an option. We'll leave [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) for the language and then hit Next. I'm going to uncheck Create a [Git](../../Skills/Software%20Development/Git.md) Repository and then save this in Exercise Files Chapter 04 Exploring and then Final. If you're creating your own files here, just save in the Start folder. So I'll hit Create and there's my Storyboard project. I'll go into full screen now.
>
> **[1:34](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-interface-builder?u=76281980&t=94)** Your storyboard is in a file called Main, so click on that and then you're going to see what the storyboard looks like. This takes you to Interface Builder in the editor. Interface Builder is the name of the mini app within Xcode that's designed for building user interfaces that use storyboards. Storyboards use the Model-View-Controller design pattern where data, the model, UI, the view, and logic, the controller, are all separated. To get to the working area in your storyboard, go down below the main window and find your view controller. You can find it by clicking in the window and then clicking on this yellow circle with the white square inside. If you're working in iOS, this whole layout looks a little bit different, but you still have a view controller and that's still the main working area in your storyboard. Note that when you're in Interface Builder, you also have the document outline to navigate through your app. The document outline is accessible through the button at the bottom left corner of the editor. So here I have my application scene, window controller scene, and the main working area, which is my view controller scene. If I need to select any of these components, I can select them here as well. Selecting view controller here is the same as clicking this view controller button inside of the editor. Also, when you're working in storyboards, selected items are modifiable using the Attributes Inspector. So if I open up the Inspector area
>
> **[3:08](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/exploring-interface-builder?u=76281980&t=188)** and then go to the Attributes Inspector, you'll see settings that I can modify for my view controller. If I click on my view, for example, in the document outline, you'll see settings that you can modify for a view there. So to review, it's important to understand how legacy UI frameworks work, even if there's a different UI framework recommended for new projects. If you want to create a new project that uses a storyboard, you can't choose multi-platform because multi-platform is only supported by the SwiftUI framework, so you'll have to choose macOS or iOS. From there, just choose storyboard when you're creating your project. And then inside the Project Navigator, you can get to your storyboard by going to Main.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Code Identifiers:** ios (3), macos (3)
> **CLI Commands:** find (2), make (1), git (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** earlier in (1), we talked about (1)
> **Best Practices:** make sure to (1), recommended (1)
> **Warnings:** note that (2)
> **Exercise Files:** exercise files (1)

#### [Creating a user interface](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-user-interface?u=76281980&t=1)** - [Instructor] Creating user interfaces in a storyboard is generally a drag and drop experience. So if you look inside of your main storyboard, and you have the document outline open, you'll see under a View Controller Scene, there's View Controller, and then there's View inside of there. And that's what I have selected here, and that's where we're going to build our user interface To add UI elements, simply open up the library, which again is accessible through the plus button in the toolbar. So click on that, and then you'll see all the kinds of user interface elements you can add into your application in the Objects library, which is the button all the way on the left. Let's click and drag a Push Button into our application. Now let's drag a label out by opening the library up again, finding Label in the library, and then clicking and dragging it here. When I drag the label in, you'll see the bounding box around it with eight squares. Those are draggable, allowing you to change the bounding box of the label or any UI object you have selected, like this button. So I can change its size by clicking and dragging the handles there. You'll notice when I drag the label out that the label's font size didn't change. I simply modified the bounding box of the label. To modify the font size, You actually do that in the Attributes Inspector. So with the label selected, I can make sure the Inspector area is showing and then go to the Attributes Inspector, which is the button with the sliders on it. And then I have all kinds of properties that I can modify for my label.
>
> **[1:33](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-user-interface?u=76281980&t=93)** You'll notice that the specific label properties are more toward the top, and more properties, like whether or not it's hidden, are found at the bottom. So let's go up to the top, and notice that we can change the title of the label if we change the value here. I'll change it to My Title and then press Return to commit the change. And you could see it update right here. If you want to update the title directly inside of the label, you can actually just double-click it, again press Return to commit the change, and it's updated again there. You'll also notice you can update things like alignment, border, et cetera. Generally, these settings work how you'd expect. As I mentioned previously, you'll also find the Font Settings, which you can open up with that T button. And then you have this Font menu. So you can choose the system fonts and all kinds of different preset styles based on the operating system. So you can choose a Large Title, Title 1, 2, or 3, Headline, et cetera. For the button, if you select it, you'll see all kinds of options, again, more specific at the top and more general toward the bottom. One of the settings you might want to change is the Style or the Type. If you click Style, you'll see all kinds of different styles, and at the bottom, a section called Discouraged Styles. These are deprecated styles from previous OSs. Apple recommends sticking with the ones at the top. I'll click away without changing that. You'll also notice that you can modify the button title here, and that works the same as the label, where you can change it right in here in the Attributes Inspector, or you can just double-click the button and then make the change there if you want.
>
> **[3:06](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-a-user-interface?u=76281980&t=186)** I'll just change it back to button by double-clicking and then typing Button, again, pressing Return to commit the change. So if you want to create a user interface using Storyboards, all you need to do is open up the library, find the elements you want to use, and then click and drag them into your views.

> [!info]- Semantic Content
>
> **UI Navigation:** double-click (2), drag and drop (1), in the toolbar (1), click on (1), go to (1)
> **CLI Commands:** make (2), find (2)
> **Speakers:** - [instructor] (1)

#### [Connecting a label](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-label?u=76281980&t=1)** - [Instructor] Now that we have a basic UI, let's take a look at connecting these UI elements to our code. If you'll remember when we worked with SwiftUI, the UI elements and code were in the same files, but in Storyboards you actually have to make connections between UI elements and code manually. You may have noticed that I switched from macOS to iOS here and I've created the user interface in the same way as we did for macOS. Simply open up the library, and then click and drag elements from the library onto the screen. One way to make the code connections is by Option clicking ViewController. So I'm in Main right now in my storyboard and I'm going to Option click ViewController. You may remember that Option clicking files in the project navigator is a setting that's controlled in [Xcode](../../Skills/Mobile%20Development/Xcode.md), Settings, under Navigation. So if Option clicking doesn't open the file in the next editor, you can modify your settings here. I'm now going to hide the navigator area and the inspector area, also the document outline to get a little bit more room on the screen. Remember you can click and drag at the divider in order to move the interface over, so that you can have more space either in your storyboard or in your code. With that set up, let's make this connection from the label to our code. You can do that by right clicking the label and dragging it into your code. I'm going to drag just below my class declaration
>
> **[1:36](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-label?u=76281980&t=96)** to create a variable in this way. So now I'll release my right mouse button, and then you should see Connection, Outlet, and then an empty field for Name, and then the Type should be UILabel. If you see something else for the Type, just cancel out and then right click and drag again. For the Name, let's call this label. This will be the name of the variable in our code and then hit Connect or press Return to have Xcode write some code for you. This @IBOutlet callout is used before anything that you connect a storyboard to inside of your code. And it says it's an outlet to an Interface Builder item. And then we have our variable name, which is label, and the data type, which is UILabel. You'll also notice that on the left, the line number is replaced with a circle with another filled in circle inside of it. If you hover over that, you'll see the label is highlighted inside of your storyboard indicating a successful connection to a UI element. Of course, if you want to, rather than right clicking and dragging, you can just write out this code manually. Having the @IBOutlet call out will allow you to connect those variables to your storyboard items. You just have to click and drag from the circle onto the UI item. So with that, what we're going to do is modify the label at runtime. And the place to that is inside of this viewDidLoad method. This is a method that is executed as part of the view controller lifecycle when all of your views are loaded and ready to work with.
>
> **[3:11](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-label?u=76281980&t=191)** So anything that you've connected an IBOutlet to is ready to use in here underneath the call to the super method. So go to the bottom of this method, and then just type label.text and then set it equal to some string. I'll type Changed with code. We can't actually preview inside of Xcode like we can with SwiftUI in the canvas. So we have to run the app in a simulator. So hit the Run button and you may have to wait a minute for the simulator to boot up and load your app, but once it does, you should see that as soon as the app loads, we see the text, Changed with code, or whatever you put inside of your code. And sure enough, there's the label saying Changed with code. So to review, if you want to connect a UI element to code as a variable, and usually you're going to do this, because it's something that you're going to manipulate or modify at runtime, right click and drag from that element into your code. You can do this using the assistant editor. And remember, you can get to the assistant editor by Option clicking a file inside of the project navigator. Once you have the IBOutlet connection created, you can reference that variable to modify the UI object at runtime at or after the viewDidLoad method is called.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (3)
> **Code Identifiers:** macos (2), viewdidload (2), ios (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** open the (1), go to (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Connecting a button](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-button?u=76281980&t=1)** - [Instructor] In addition to IBOutlets for variable connections to UI elements, storyboards allow you to use IBActions to trigger methods in your code when UI events occur. These events include button presses, the value of a slider changing, and all kinds of other changes and triggers associated with interactive views. Let's take a look at using an IBAction with this button right here. To create the connection, you do a right-click and drag just like we did with the label, so a right-click and drag from the button into my code. Remember here, I'm creating a method instead of a variable, so I'm going to drag below viewDidLoad. Here, I'm asked to give my method a name. I'll just call this buttonWasPressed, capital W, capital P, all one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), and then hit Return. And there's my method. Notice one big difference between the IBOutlet we created earlier is that connecting a button created an IBAction. Remember, an IBOutlet is a variable that you can modify at runtime or read the values of, while an IBAction is a method that's called when an event occurs. In this case, the event is the button being pressed. So let's go inside of the curly braces here, and what we're going to do is simply move the code that changes the label into this method. So I'll highlight that label.text line of code, Command + X to cut, click on line 20, and Command + V to paste. Now let's run the app. When it launches, we should see that the text changes only when we press the button.
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/connecting-a-button?u=76281980&t=95)** So here's our app, and we have our label and our button. The label just says Label, but when I click on the button, it says Changed with code! So if you want to respond to when a button is pressed or to any other kind of event in the storyboard, simply right-click and drag from the event-triggering object like a button or a slider, et cetera, into your code, and you can handle what you want to do when that event is triggered by putting any code you want in the created method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** right-click (3), click on (2)
> **Code Identifiers:** viewdidload (1), buttonwaspressed (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshoot broken connections](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/troubleshoot-broken-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/troubleshoot-broken-connections?u=76281980&t=1)** - [Instructor] Sometimes when you're working with storyboards, the code that you write doesn't work. In other words, if you remember in a previous movie, we had it so that when you click on this button, the label text changes. In this particular version of the application that's not working. Clicking on the button does nothing. But if we return to [Xcode](../../Skills/Mobile%20Development/Xcode.md), you'll see that there appears to be no problem with the code. The code is written correctly and the circles are filled in on the left side in both cases. How do we debug these situations? One way to do so is in the Connections Inspector. So what I'm going to do is hide the navigator. I'm going to hide the debug area using this button right here at the bottom of the screen below the editor, and then I'm going to show the Connections Inspector by opening up the inspector area. And what I want to do is click on my View Controller. It's a little bit hard to find when I have that preview in the way, but if I scroll down a little bit, you'll see the View Controller is that yellow circle with the white square inside. I can click on that. And so what I'm doing is I'm looking at View Controller properties from the perspective of my storyboard. So that's important. I need to not be selecting anything inside of my code, but I need to be in my storyboard with the View Controller selected. In the Connections Inspector, you can see all the connections between UI elements and code. So I can see that I have my view right here. I can see my label. And then at the bottom I see button was pressed.
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/troubleshoot-broken-connections?u=76281980&t=95)** But unlike the label and the view that have connections on the right and filled in circles, button was pressed has an empty circle. I mentioned previously in the course that the filled in circle right here, where the line number goes indicates a successful connection. Well, sometimes Xcode does not give you the appropriate feedback in your code files. That's how it's supposed to work. It's just not how it's working in this particular build of Xcode that I'm using for this recording. So that's something to keep in mind. You can't just rely on what you see inside of your code file. The Connections Inspector will give you an accurate portrayal of what's going on with the connections of your UI elements and your code. So how do we restore the connection? One way to do that is to just click and drag from this circle all the way to our button. So if I do that and release my mouse button, I can then choose which event I want to handle. I'll choose Touch Up Inside, which is the default method to handle button events inside of iOS. Then you can see that the connection is made there in the Connections Inspector. I'm going to remove the connection by clicking the X button. And again, that circle still filled in when it shouldn't be, but I can actually click and drag from the circle onto the button as well, and then do the same thing. If I look at my received actions, I can see that the connection is made. Now let's run the app again and confirm that it's fixed. Click on the button and it should update. So if you have a problem with your connections
>
> **[3:09](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/troubleshoot-broken-connections?u=76281980&t=189)** to UI objects when you're working with storyboards, the first thing to check is your View Controller class. Though it might not always be accurate, make sure all the circles are filled in and if not, you can click and drag to the appropriate objects. It's always possible that you're getting incorrect feedback from Xcode. So then make sure to double check in the Connections Inspector. Using the Connections Inspector, you can also resolve those connections between UI elements and code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (4)
> **UI Navigation:** click on (4), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** ios (1)
> **Definitions:** in other words (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Understanding pinning](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/understanding-pinning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/understanding-pinning?u=76281980&t=1)** - [Instructor] One challenge developers often run into when developing user interfaces is responsive layouts, and working in a Storyboard application is no different. Consider this button right here at the bottom right of our user interface. It shows on the screen here, but if I were to change orientations, for example, by clicking this orientation at the bottom left of Interface Builder, you'll see that the button is gone. Now, the button was actually not deleted, and you can confirm that by going in the document outline and expanding View Controller Scene, View Controller, View, and then clicking on Button. You'll see that it's way down here off of the screen. The reason for that is that all of the coordinates of items that you place in your UI are based on the top left of the device. So in portrait, it looks fine. But when we go into landscape mode, that many pixels down from the top left of the screen gives the button the appearance of being offscreen. So how do we pin the button to the bottom right of a screen? Let's go back into portrait mode by clicking that orientation button. And then I'm going to create Auto Layout pins by using this button at the bottom right of Interface Builder. It's the one with the box and some pins around it. If you hover over it, it says Add New Constraints. Let's click that button. What we want to do is pin to the bottom right. So I'm going to click this dotted red line here next to 16 and then the one next to zero.
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/understanding-pinning?u=76281980&t=95)** So just like that. So you'll notice that the line gets filled in when I click on it. I'm also going to pin the width and the height. So it's going to say stay the same width and height, and then stay so many points away from the right edge and so many points away from the bottom edge. If you want to change these numbers, you can enter in text values right here. But I'm going to leave that as is, and I'm not going to click away, because that's not going to save the constraints. I need to click this Add 4 Constraints button. So I'll click that, and you'll see these blue constraints added over here and here and here. And that means that the button has information about where it should be rendered. This whole framework for creating these pins is called Auto Layout when you're working with Storyboards. And if you're going to provide any Auto Layout information for a UI item, it needs to have position and size information. So that's something to keep in mind. And if you don't provide all the necessary information, you're going to see errors. So with that, let's go over into landscape, and we'll notice that the button is now at the bottom right. So by using Auto Layout pins in your Storyboards, you can control how your app reacts to different window sizes, screen sizes, and aspect ratios.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is called (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** click on (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 5. Debugging and Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the debugger](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-the-debugger?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-the-debugger?u=76281980&t=1)** - [Instructor] One of the most helpful tools in any IDE is the debugger, which enables you to jump through code line by line as the code is running in order to resolve problems. In X code, you can use the debugger even in [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) UI. Consider my content view right here I have a text view that's getting its text from the response in a method called get text, which is defined right here. I'm going to put a break point right there on line 16 by single clicking to the left of the line number. And now I'm going to run the application and watch the debugger open up. After going to the simulator for a second when the app loads up, the focus comes back to X code and the application is paused on that method. The first thing I want you to notice here is that the code has stopped on this line. You'll see a very light green background behind this line. From there, you can go inside and step through the method that's being called get text line by line, by clicking the step into button, which is at the top of the debug area. So I'm going to click that button and now I'm on line 22. I'm going to click away. So this method isn't highlighted anymore and now you can see the background behind line 22. So we can see the value of the variable is highlighted, so it's hello. And then I can go to the next line by clicking this step over button that's at the top of the debug area as well. And the bar next to the step in two button.
>
> **[1:34](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/using-the-debugger?u=76281980&t=94)** And now I can see the value of world in there. And if you look down here in the debug area, you'll see [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) one is equal to hello, and I can go down one more line by hitting step over and then I can see the value of word two is defined as world. I can continue my running application by hitting this button to continue program execution. And there's my app. Let's tap back over to [Xcode](../../Skills/Mobile%20Development/Xcode.md) and stop the running application. And then I'm going to hide the navigator and hide the debug area using the button at the top right of the debug area. So you can add break points by single clicking to the left of line numbers. If you want to disable them, you can single click the break point. Notice that the color is faded a little bit. I can re-enable it by single clicking again. If you want to edit a break point, you can double click. This opens up a venue where you can enable or disable the break point, give the break breakpoint a name, provide a condition by which this breakpoint is triggered, et cetera. So by using break points and the debugger in Xcode, you're able to efficiently solve problems in your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Correcting errors with Fix-It](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/correcting-errors-with-fix-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/correcting-errors-with-fix-it?u=76281980&t=1)** - [Instructor] The fix-it feature in [Xcode](../../Skills/Mobile%20Development/Xcode.md) can help you solve bugs and other issues in your code very easily. Sometimes when you're working in your code, you'll see a yellow or red error message that pops up. Something like this right here. If you click on the icon, you're given a description of the problem and then either one or more options to be able to fix it. I'm going to click the first option right here. Keep in mind what we have on the screen in the canvas. So we have optional hello world when we just want to see hello world. So if I hit this button, the error goes away, but I see the same thing over here on the right. Maybe that's not the best solution. I'm going to press command Z to back up. So I'll just click in my code and then press command Z. The warning message comes back. So I'll click on the icon and then I'm going to click the second fix option. So here I'm asked to provide a default value. So I'm going to change the string in here to high, and now I see what I want over here on the right in the canvas. So in the event that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) one doesn't have a value, or in other words is nil, when it comes in, the word high will replace it. You can test it by deleting the string on line 16 and replacing it with nil. And there we go, there's hi world. So we don't see that optional text anymore in the canvas. So by using this fix-it feature Xcode makes suggestions that can improve your code. Sometimes the suggestions are better than others, but you can often save some code writing time
>
> **[1:35](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/correcting-errors-with-fix-it?u=76281980&t=95)** by clicking on them and using the provided solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **UI Navigation:** click on (2)
> **Warnings:** keep in mind (1), warning (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Refactoring code](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/refactoring-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/refactoring-code?u=76281980&t=0)** - [Instructor] Another way in which [Xcode](../../Skills/Mobile%20Development/Xcode.md) helps you to be efficient in writing your code is by allowing you to refactor using a small number of clicks. For example, let's say we wanted to change the name of this method, getText. This feature works the same whether your method is used in one file or in multiple files. To change the method name, select the method either here on line 21 where it's defined, or on line 16 where I'm calling it, and then go into the editor menu. Choose Refactor, and then Rename. Or you can right-click the method and then do the same thing, Refactor, Rename. In here, you're asked to give the method a new name. Let's call it getTheText, and then I'm going to press return on my keyboard to commit the change. And you'll notice it's instantly updated in the editor. So if you want to do refactoring in your code, whether it be renaming or one of the other available options, simply right-click the affected code or go to the editor menu, choose Refactor, and then choose the option that suits your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **UI Navigation:** right-click (2), select the (1), go to (1)
> **Code Identifiers:** gettext (1), getthetext (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Creating unit tests](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-unit-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-unit-tests?u=76281980&t=1)** - [Instructor] One important part of [Software Development](../../Topics/Software%20Development.md) is [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md), which allows you to confirm that your code does what you think it does. Let's take a look at creating unit tests in an [Xcode](../../Skills/Mobile%20Development/Xcode.md) project. To do that, the first step is to select your project in the project navigator. When you do that you'll see your project settings so you'll see info. You could also click on build settings or package dependencies to see more information about your project. What we're interested in here is targets. Under there you'll see debugging, and this has a whole bunch of information about your deployment of your application. To create a unit testing bundle, click the plus button in this section. In here, if you watch, you can scroll down and look for a unit testing bundle, or you can just type unit and filter for it. With unit testing bundle selected under test, I'll hit next. I'll leave the default name and then hit finish. What that does is it creates a group with the same name as your bundle and it also creates a [swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) file for writing tests. This gives you a whole bunch of different testing methods that you can use, and I'm going to delete them all. And we'll just write one of our own tests. We'll call this test get text. This will test the get text method inside of our content view. Before we can reference our content view, we actually need to go to the content view and do a very special step that's required for doing any unit tests in Xcode.
>
> **[1:37](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-unit-tests?u=76281980&t=97)** And that is, add this file to the testing target. Without that, we can't test the file. So select content view, show the inspectors, go to the file inspector, which in the inspector bar is all the way on the left and looks like a paper with a fold in it, and then under target membership, check the box that says debugging tests. Once you've done that, go back to debugging tests, that's our test file, and then we're going to create a reference to our content view. So let content view equal, and then we'll create a new content view. So content view is in parentheses. In there, we'll create a constant called result and set it equal to contentview.gettext, then we'll pass in the string, Hello, just like that. Now go to the next line and we're going to create an X-C-T assert statement. This allows us to test that a certain value is equal to another value. This is what enables us to make sure that our code is doing what we think it's doing. So type X-C-T assert equal, and then we need to pass in two expressions. The goal is that if the test is successful, these expressions will be equal. We want to compare the value that we expect, and then the actual value. So first, we'll start with the value that we expect,
>
> **[3:11](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-unit-tests?u=76281980&t=191)** which is Hello comma World with an exclamation point. Capital H, capital W. Tab over to expression two and we'll pass in the actual value, which is result. Now you can run the test to make sure that it works. But before you do that, you're going to see a fix-it message. Click on it and you'll see that there's a mismatch in data types. We can fix that very easily by typecasting it, so let's just hit the fix button and accept Xcode's fix. Now we can run the test by clicking the diamond icon to run one test next to our method declaration, or the diamond icon next to the class declaration to run all tests in a class. So I'll click this one and then wait a second for Xcode to build and then run the tests. After a little bit of time has passed, I can see these green check marks within the diamonds, indicating that my tests have passed. Great, the code does what I think it does. Notice that if you make any alteration to the strings in your code, and you run the tests again, the tests will fail, so that's great. Everything's working as expected. Now let's make one more test. I'm going to copy and paste this whole test right here, and then I'm going to add on to the method name with nil value, just like that. And then I'm going to change the value to nil inside of the call to get text, so the result will be get text with a nil value, and then change the text
>
> **[4:48](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/creating-unit-tests?u=76281980&t=288)** to Hi, World, which is what we expect. Now we'll run all of the tests again and they should all work. And sure enough, they all pass. So if you want to test that your code does what you want it to do, you can create unit tests in your Xcode projects. Remember the steps to create unit tests. First, go to your project and create a unit test target under targets. Remember, hit the plus button right there and then you can create a unit test bundle. Once you've done that, for any files you want to test, select the file and then go over to the file inspector and make sure to add it to your unit testing target. After that, simply create your tests, write your assertion statements, then you can run them using the diamond buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (5), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (5), [Software Development](../../Topics/Software%20Development.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1)
> **UI Navigation:** go to (4), click on (2), scroll down (1), select the (1)
> **CLI Commands:** make (5)
> **Analogies:** just like (2)
> **Cross-References:** go back to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/xcode-15-essential-training-23823075/next-steps?u=76281980&t=0)** - [Instructor] Well, you've reached the end of this course, and you may be wondering where to go from here. If you're interested in learning more about what's new in [Xcode](../../Skills/Mobile%20Development/Xcode.md) 15, you can check out the WWDC Session from 2023. You can find it here. This is a great resource straight from Apple with what's new in Xcode. If you're interested in going into more details about what's in Xcode, you can look at the Xcode documentation here. Here you can find information about the IDE, working in code, and working in the interface. Whatever you decide to study going forward in Xcode, I hope you end up building something great. I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (5)
> **CLI Commands:** find (2)
> **Env Vars:** wwdc (1), ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Todd Perkins](../../Instructors/Mobile%20Development/Todd%20Perkins.md)

## Resources

- Exercise files available

## Skills Covered

- Apple Developer
- Xcode
- iOS Development

## Path Context

### In [Get Started with iOS App Development](../../Paths/Mobile%20Development/Learning%20Paths/Get%20Started%20with%20iOS%20App%20Development.md)
← [Swift 5 Essential Training](Swift%205%20Essential%20Training.md) | **2 of 4** | [iOS 17 Development Essential Training](iOS%2017%20Development%20Essential%20Training.md) →

## Appears In

- [Get Started with iOS App Development](../../Paths/Mobile%20Development/Learning%20Paths/Get%20Started%20with%20iOS%20App%20Development.md)

## Related Courses

_Courses sharing skills:_

- [Programming For Non Programmers Ios 17 And Swift 5](Programming%20For%20Non%20Programmers%20Ios%2017%20And%20Swift%205.md) — iOS Development
- [Building Your First iOS 17 App](Building%20Your%20First%20iOS%2017%20App.md) — iOS Development
- [iOS 17 Development Essential Training](iOS%2017%20Development%20Essential%20Training.md) — iOS Development

---

[↑ Back to top](#)