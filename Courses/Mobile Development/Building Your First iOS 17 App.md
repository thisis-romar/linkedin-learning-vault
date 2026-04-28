---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: building-your-first-ios-17-app
url: "https://www.linkedin.com/learning/building-your-first-ios-17-app"
duration_minutes: 46
duration: 46m
level: Beginner
updated: 10/5/2023
learners: 2889
skills:
  - iOS Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHzDn7mXPkf8A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696272691927?e=2147483647&amp;v=beta&amp;t=59PTaYG43-7-gzNEAM5VGpAkuDZrUwz0n1nz6YSVt04"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Get Started with iOS App Development]]'
prev_courses:
  - '[[iOS 17 Development Essential Training]]'
path_nav: '[{"path":"Get Started with iOS App Development","position":4,"total":4,"prev":"iOS 17 Development Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/ios-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Building%20Your%20First%20iOS%2017%20App.md)

![Building Your First iOS 17 App](https://media.licdn.com/dms/image/v2/D560DAQHzDn7mXPkf8A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696272691927?e=2147483647&amp;v=beta&amp;t=59PTaYG43-7-gzNEAM5VGpAkuDZrUwz0n1nz6YSVt04)

# Building Your First iOS 17 App

> Interested in building native iOS applications? Join instructor Todd Perkins in this course as he details the code, tools, frameworks, and practices for building, debugging, and deploying iOS applications. Todd covers the latest techniques and practices available, along with the most recent releases of iOS and Swift–the popular programming language used for developing iOS apps.

> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app) | 46m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (4 videos)
- **2. 1. Setup** (3 videos)
- **3. 2. SwiftUI Fundamentals** (6 videos)
- **4. 3. Finishing the App** (4 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### How to build an app in an afternoon
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/how-to-build-an-app-in-an-afternoon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/how-to-build-an-app-in-an-afternoon?u=76281980&t=0)** - [Instructor] iOS devices number in the billions worldwide and over 100 billion apps were downloaded last year alone.
>
> **[0:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/how-to-build-an-app-in-an-afternoon?u=76281980&t=8)** And the great news is reaching this massive user base by creating your own iOS apps has never been easier.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/how-to-build-an-app-in-an-afternoon?u=76281980&t=15)** The purpose of this course is to help you learn how to create your first iOS app starting from scratch, even if you've never developed any kind of software before, so let's jump right in.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (3)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### What you should know before watching this course
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Narrator] Coming into this course, you should be familiar with a couple of things.
>
> **[0:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=5)** The great thing is the list is really small.
>
> **[0:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=8)** You need to have a Mac and be somewhat familiar with working in macOS.
>
> **[0:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=11)** That is opening files and folders, and working with text.
>
> **[0:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=16)** If you don't have any programming experience, that's fine.
>
> **[0:19](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=19)** If you do, of course it will help.
>
> **[0:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/what-you-should-know-before-watching-this-course?u=76281980&t=22)** But if you have a Mac and you can use it, you're ready to proceed with the course.

> [!info]- Semantic Content
>
> **Code Identifiers:** macos (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [narrator] (1)

#### Using the exercise files effectively
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/using-the-exercise-files-effectively?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/using-the-exercise-files-effectively?u=76281980&t=1)** - [Narrator] The intended path through this course as we're building a project is for you to create the project on your own along with me and code everything in that project as we go.
>
> **[0:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/using-the-exercise-files-effectively?u=76281980&t=10)** Exercise files are provided with this course in the event that there is a problem with your code and you need to view the exact files I used in the course to diagnose and fix it, or if you want to go through the movies in a self-contained way.
>
> **[0:23](https://www.linkedin.com/learning/building-your-first-ios-17-app/using-the-exercise-files-effectively?u=76281980&t=23)** When exercise files apply to a given movie, you'll see which file to open on the screen toward the beginning of the movie.
>
> **[0:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/using-the-exercise-files-effectively?u=76281980&t=29)** Should you get lost at any point, remember that the exercise files are there to help you get back on track.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (3)
> **Code Keywords:** self (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Viewing the finished app and code
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=0)** - [Narrator] Let's take a look at what we're building in this course.
>
> **[0:04](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=4)** It's a tip calculator app with a custom icon.
>
> **[0:09](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=9)** I'll open it up.
>
> **[0:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=11)** You could see the title of the app, an icon within the app.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=15)** You can put in an amount of money here for your bill and then you slide the tip amount slider, and you'll see the tip amount for that total amount of money.
>
> **[0:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=25)** If you put an invalid value in the text field, for example, something containing letters, then you're told to please add a numeric value instead.
>
> **[0:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=35)** You can fix that and then the text changes back to show your tip amount.
>
> **[0:38](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=38)** Throughout this course, we're going to build this app completely from scratch.
>
> **[0:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=43)** So we'll look at how to lay out UI elements and how they work together in the code, and how you can use different values in different areas.
>
> **[0:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=51)** And we'll also look at applying your own custom icon.
>
> **[0:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/viewing-the-finished-app-and-code?u=76281980&t=55)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 2. 1. Setup

#### Downloading and installing Xcode
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=0)** - [Narrator] The official tool for developing iOS apps is called Xcode and can be downloaded for free from the Mac App store.
>
> **[0:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=8)** In order to develop iOS 17 apps, you'll need Xcode 15, which at the time of this recording is in beta.
>
> **[0:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=16)** If for any reason you need a version of the Xcode Beta to follow this course, it can be downloaded for free from developer.[apple.com/xcode](https://apple.com/xcode).
>
> **[0:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=27)** Just note that in order to download it, you're going to need to log into a developer account, which can be either a paid or free developer account.
>
> **[0:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=35)** Once you've done that, you can download the Xcode Beta from there.
>
> **[0:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=39)** After you've downloaded and installed Xcode, open it up and you'll be prompted to install additional required components.
>
> **[0:46](https://www.linkedin.com/learning/building-your-first-ios-17-app/downloading-and-installing-xcode?u=76281980&t=46)** Once you've installed those, including the iOS SDK or software development kit, you're ready to proceed with the course.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (3)
> **Prerequisites:** you'll need (1), install (1)
> **URLs:** [apple.com](https://apple.com) (1)
> **Env Vars:** sdk (1)
> **Exercise Files:** download the (1)
> **Definitions:** is called (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### Creating your first iOS app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=0)** - [Instructor] Once Xcode is installed, along with the required components, opening Xcode will take you to the welcome screen which enables you to quickly create a new project or open an existing project, whether locally or from a repository.
>
> **[0:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=14)** To create your first iOS app, create an Xcode project by clicking the Create New Project button here or through the file menu by going to File, New, Project.
>
> **[0:26](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=26)** When creating a new project you're asked to choose a template for the project.
>
> **[0:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=31)** These templates are organized by platform so you'll see multi-platform, iOS, macOS, et cetera.
>
> **[0:38](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=38)** Selecting a platform gives you options for the type of application or framework you want to create.
>
> **[0:44](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=44)** For this course, we're going to create an iOS app so in the iOS category, click App, and then hit Next.
>
> **[0:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=51)** Here, you're given several options to create your project many of which don't apply to creating a simple app as we're doing here.
>
> **[0:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=59)** The important ones are product name and interface.
>
> **[1:02](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=62)** For product name, type First App, and then for interface, make sure to choose Swift UI.
>
> **[1:09](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=69)** For team, choose none.
>
> **[1:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=71)** For Organization Identifier, it's not relevant until you need to send your app to the App Store, but you can't leave it blank and you get a hint if you try to.
>
> **[1:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=81)** This is meant to be a reverse domain name as in com.example if your domain is [example.com](https://example.com), which is used along with your product name to generate a unique ID for your app.
>
> **[1:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=93)** You can type com.yournamehere to satisfy the requirements to create our project for now.
>
> **[1:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=99)** Make sure you have none selected for storage as we're not going to use persistent storage for this app.
>
> **[1:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=105)** Leave the other options unchecked and hit Next.
>
> **[1:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=109)** You're then asked where to save the project and whether to create a Git repository.
>
> **[1:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=115)** For what we're doing here, we don't need to create a Git repository so leave that unchecked and then I'm saving this in my Exercise files folder, in Chapter one, First project, Final.
>
> **[2:06](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=126)** If you're following along with the exercise files just save right outside of this folder so as to not create a conflict.
>
> **[2:12](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=132)** So with that selected, I'll hit Create to create the new project.
>
> **[2:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=136)** After a few seconds, it loads into the Xcode interface.
>
> **[2:20](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-your-first-ios-app?u=76281980&t=140)** This simple project will end up being your first iOS app.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (5), macos (1)
> **CLI Commands:** make (2), git (2)
> **Code Keywords:** interface (3), new, (1)
> **Exercise Files:** exercise files (2), template (1)
> **URLs:** [example.com](https://example.com) (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Key parts of the Xcode interface
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=1)** - [Instructor] The Xcode interface is somewhat complicated and can be overwhelming.
>
> **[0:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=5)** To make it easier to learn Xcode, I'm going to go over the three parts of the interface and talk about how the interface is generally used.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=15)** As we go throughout the course and we use specific parts of the interface, we'll talk about those parts in more detail.
>
> **[0:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=22)** So, I'm going to start by going into full screen mode and I want to point out the main interface pieces first.
>
> **[0:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=31)** At the top of the screen, we have the toolbar, and on the left and the right of the toolbar are options to hide the left and right views.
>
> **[0:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=43)** The view on the left is called the navigator and the view on the right is called the inspector.
>
> **[0:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=50)** The navigator view allows you to navigate various things: your project, source control, bookmarks, searching items in your code, debugging, etc.
>
> **[1:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=65)** The main button that we're going to use in this course is the Project Navigator, which is the folder icon all the way on the left.
>
> **[1:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=74)** The item that you have selected in the project navigator controls what you see in the editor.
>
> **[1:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=81)** So, the editor is this main working area in Xcode.
>
> **[1:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=85)** So right now, I am seeing the code in the ContentView swift file and you could see that up here in the comment in the editor.
>
> **[1:34](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=94)** If I single click on First App, then I'll see the code for that file.
>
> **[1:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=100)** I'll go back to the ContentView.
>
> **[1:42](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=102)** Note that because this is a swift UI view, it also has the canvas on the right side.
>
> **[1:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=109)** So as we edit code here on the left side of the editor, the canvas will instantly update, giving us visual feedback as we work.
>
> **[1:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=119)** The inspector area on the right is controlled by what's in the editor.
>
> **[2:04](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=124)** So for example, if I have this rightmost button selected in the inspector bar, which is the attributes inspector, that's the one with the sliders on it, and then I click on this image text inside of my code right here on line 13, then I'll see attributes for the selected code inside of the attributes inspector.
>
> **[2:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=150)** If I click on VStack, then I'll see settings for the vertical stack.
>
> **[2:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=155)** Same with text.
>
> **[2:36](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=156)** If I click on that, I'll see its settings.
>
> **[2:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=159)** So, while the navigator controls the editor, the editor controls the inspector and the inspector modifies the thing that you have selected in the editor.
>
> **[2:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/key-parts-of-the-xcode-interface?u=76281980&t=169)** So to review, we have the toolbar at the top, we have the navigators on the left, inspectors on the right, and the main working area called the editor in the center of the screen.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5)
> **UI Navigation:** click on (4)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. 2. SwiftUI Fundamentals

#### SwiftUI stacks
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=1)** - [Instructor] Now we're going to start creating our tip calculator app.
>
> **[0:04](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=4)** So you may notice on the left side of the editor, due to my font size, it's a little bit hard to read the code due to some wrapping issues in this area over here.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=15)** So let's get a little bit more screen real estate.
>
> **[0:19](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=19)** Remember that we can hide some of the views by clicking the buttons in the toolbar.
>
> **[0:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=24)** So the top left button in the toolbar will hide the navigators.
>
> **[0:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=28)** And then the top right button in the toolbar will hide the inspectors.
>
> **[0:32](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=32)** I can also click and drag this center area so that I can resize how much space I allocate to my canvas versus my code editor.
>
> **[0:41](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=41)** So what I'm going to do is hover over the right edge, to the right of that scroll bar, and then I'm going to click and drag to the right to resize my canvas just as big as I need it.
>
> **[0:52](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=52)** That way I get a little bit more space for writing code.
>
> **[0:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=55)** Now let's talk about the code.
>
> **[0:57](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=57)** So inside of this block, I have is something called struct that is a content view.
>
> **[1:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=65)** And inside of there is something called body.
>
> **[1:07](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=67)** And inside of the body is the stuff we really care about.
>
> **[1:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=71)** And that's what's defining what we see in our application.
>
> **[1:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=76)** So in other words, the image of the globe and the "Hello, world!" text.
>
> **[1:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=81)** If I make changes inside of the code, then they're instantly updated in the canvas.
>
> **[1:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=88)** So if I change the "Hello, world!" text to something else, that gets updated in the canvas instantly.
>
> **[1:34](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=94)** Remember how we talked about in the previous movie, you can make these changes in the attributes inspector as well?
>
> **[1:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=100)** Well, if I show the attributes inspector, which I can do by clicking that area at the top or by hovering my mouse over the right side of the screen, I can see that the text is in the text area at the top.
>
> **[1:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=115)** I can modify it there if I want like so.
>
> **[1:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=119)** Once I press return, the change is committed and the code is updated here and the canvas is updated as well.
>
> **[2:07](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=127)** So as you're working in next code, you can choose which ways you want to modify your views.
>
> **[2:13](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=133)** Now let's modify this image.
>
> **[2:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=135)** So right now we have a globe image and if I change the text inside of there, so inside of the quotes, to be dollar sign, all one word, dot circle dot fill, and you'll see it update as I type it.
>
> **[2:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=151)** So we had a few different ones there.
>
> **[2:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=153)** So dollar sign is one and then dollar sign dot circle is another.
>
> **[2:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=157)** And dollar sign dot circle dot fill is a third one.
>
> **[2:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=159)** These values, by the way, are not just random.
>
> **[2:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=163)** You can't just type any text you want in here and expect something to appear.
>
> **[2:47](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=167)** This actually comes from the symbols library.
>
> **[2:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=170)** If you look up in the app store SF symbols, you'll find an app that will have all kinds of different symbols that you can use in your iOS applications.
>
> **[3:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=181)** So that's a great place to look if you're interested in using different icons.
>
> **[3:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=185)** For image scale, we're going to leave large.
>
> **[3:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=188)** And for foreground style we have tint.
>
> **[3:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=191)** If you want to change it to a specific color, you can do that as well.
>
> **[3:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=195)** So I can change that to black for example.
>
> **[3:17](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=197)** But I'm going to put tint.
>
> **[3:20](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=200)** And this is a style that reflects, as it says here in the hints, the current tint color.
>
> **[3:26](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=206)** So the default tint of the application.
>
> **[3:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=209)** I'm just going to use that for this app.
>
> **[3:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=211)** And finally what I want to talk about is this VStack.
>
> **[3:36](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=216)** Stacks are the primary way of laying out content in Swift UI.
>
> **[3:41](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=221)** V of course stands for vertical and we looked at the vertical stack in a previous movie, but there's also a horizontal stack.
>
> **[3:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=229)** So if I change the V to an H, then the layout is horizontal instead of vertical.
>
> **[3:57](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=237)** I'll go back to a VStack.
>
> **[3:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=239)** And you can see that if I add different items, they'll be laid out in the order that they are in the code.
>
> **[4:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=245)** So if I copy and paste the tip calculator text view, then I get a second tip calculator text view at the bottom.
>
> **[4:12](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=252)** And you can see which one's at the bottom by modifying the bottom one and seeing the update in the canvas.
>
> **[4:19](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=259)** So to review, we talked about a few different Swift UI views.
>
> **[4:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=264)** We talked about stacks, which can lay out your content horizontally or vertically.
>
> **[4:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=269)** We looked at modifying an image graphic by changing the text inside of the quotes.
>
> **[4:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/swiftui-stacks?u=76281980&t=275)** And we looked at modifying text inside of the code and through the attributes inspector, which you can access by hovering over the right edge of the screen.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), struct (1), else, (1), return, (1)
> **Definitions:** is a  (3), in other words (1), stands for (1)
> **Cross-References:** we talked about (3), go back to (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** in the toolbar (3)
> **Code Identifiers:** ios (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### HStacks in SwiftUI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=0)** - [Instructor] Now we're going to continue to build out our user interface by putting stacks within stacks.
>
> **[0:07](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=7)** So our outer element is a VStack.
>
> **[0:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=10)** We can actually embed these objects inside of an HStack that lives within a VStack.
>
> **[0:18](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=18)** Let's take a look at how that works and why you might want to do it.
>
> **[0:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=21)** One way to embed it other than writing the code manually, is to right click the block of code and then choose embed an HStack.
>
> **[0:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=30)** Now what that did is it just embedded the image, but I can simply cut and paste this tip calculator text with command X and command V respectively, and then I'll tab in that foreground style to make it look a little prettier.
>
> **[0:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=45)** And now we have this tip calculator and it's horizontal and it looks pretty much the same as if I were to change the outer VStack to an HStack.
>
> **[0:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=55)** But what I can do now is just copy and paste this block.
>
> **[0:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=59)** That's command C, command V, and then I'm going to delete this image.
>
> **[1:04](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=64)** And now we have another text view underneath that one.
>
> **[1:07](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=67)** So in this one I'm going to put a dollar sign and then I'm going to copy and paste that one just below it.
>
> **[1:13](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=73)** And then here I'll put a placeholder for an amount of money.
>
> **[1:17](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=77)** Now of course, if you're outside the U.S.
>
> **[1:18](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=78)** and you have a different currency system, you could put that symbol here as well.
>
> **[1:23](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=83)** So what we've done here is inside of our VStack we've put two HStacks that align items horizontally.
>
> **[1:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=91)** You can see in the canvas that they're aligned horizontally inside of HStacks, and that those HStacks are stacked on top of each other.
>
> **[1:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=99)** So the tip calculator and the dollar sign icon are aligned horizontally and below that or vertical with that is a dollar sign, and then our amount placeholder, which is also aligned horizontally.
>
> **[1:54](https://www.linkedin.com/learning/building-your-first-ios-17-app/hstacks-in-swiftui?u=76281980&t=114)** The main point to get across here is that we can embed stacks within stacks.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), interface (1), let (1), delete (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Modifying SwiftUI objects
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=1)** - [Instructor] We'll now continue developing our user interface by customizing the top H stack, which contains the dollar sign icon of our application and the title of our app, which is Tip Calculator.
>
> **[0:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=14)** We already talked about modifying UI attributes in brief in a previous movie.
>
> **[0:19](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=19)** Remember, we talked about how you could select a Swift UI view object, like this image here, and then, head over to the attributes inspector.
>
> **[0:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=28)** Remember, you can open the inspector by hovering over the right edge of the screen or by clicking the button in the toolbar, and then, you can get to the attributes inspector by clicking the rightmost button in the inspector bar.
>
> **[0:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=40)** So, in here, we have a list of attributes that we can modify that are connected to an image.
>
> **[0:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=45)** We can modify them here or directly in the code.
>
> **[0:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=49)** For now, let's modify them directly in the code.
>
> **[0:52](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=52)** I'm going to click at the end of foreground style.
>
> **[0:54](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=54)** I'm going to make this icon a little bit bigger.
>
> **[0:56](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=56)** Note that it's close to the same size as the Tip Calculator text.
>
> **[1:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=61)** If I go to the next line and then I type dot font.
>
> **[1:04](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=64)** Now, I know this is an image, but because it's using a system icon we use the font attribute to change its size.
>
> **[1:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=71)** Once it's highlighted, you don't have to type the whole thing out.
>
> **[1:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=74)** You can just press return on your keyboard and X code will auto complete the text for you.
>
> **[1:18](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=78)** Then, press return again with title highlighted, and you can see the various options that you can choose.
>
> **[1:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=85)** Let's choose title and then press return.
>
> **[1:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=87)** Notice the size of the icon now.
>
> **[1:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=89)** It's a little bit bigger.
>
> **[1:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=90)** Now, let's modify the text view below it.
>
> **[1:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=93)** We're going to change the text of Tip Calculator to be a little bit bigger as well.
>
> **[1:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=97)** We'll do the same thing by modifying the font attribute.
>
> **[1:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=100)** Go to the next line.
>
> **[1:42](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=102)** I'm going to tab in, so it's formatted a little bit better, though, your code will still compile if it is not tabbed in.
>
> **[1:48](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=108)** Type dot and then we're going to type font again.
>
> **[1:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=110)** X code remember what I chose last time, so I can see that right here.
>
> **[1:54](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=114)** So, I'll just press return on that.
>
> **[1:56](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=116)** Remember, that you can always start typing out font and then press return as soon as you see it in the code hinting window.
>
> **[2:02](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=122)** It's a good habit to get because it can save you a lot of time.
>
> **[2:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=125)** So, with title selected, I'll press return, and this time I'm going to choose large title.
>
> **[2:09](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=129)** You'll notice that tip calculator gets even bigger and if we want to make it bold, we can do that by going to the next line.
>
> **[2:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=136)** I'll tab in, type dot and then type font weight.
>
> **[2:19](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=139)** Once I see font weight highlighted, I'll press return, and then, bold is highlighted by default, but I could press return and complete that.
>
> **[2:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=147)** So, when it's highlighted in blue, you have the option to press return to commit that, or in some cases, you can choose from different options, like we could with the font title.
>
> **[2:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/modifying-swiftui-objects?u=76281980&t=157)** So, now, what we've done is we've increased the size of our icon by modifying the font to the title size, and we've made the Tip Calculator font bigger and bold by changing its font size and font weight.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), return, (2), continue (1), interface (1), return. (1)
> **UI Navigation:** go to (2), open the (1), in the toolbar (1)
> **CLI Commands:** make (2)
> **Cross-References:** we talked about (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Understanding variables
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=1)** - [Instructor] Our next step with our Tip Calculator is to have the amount be user editable.
>
> **[0:07](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=7)** And to do that, we have really two steps.
>
> **[0:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=10)** The first one is to create something called a variable which is a value that can change at runtime and put that value inside of our text view.
>
> **[0:20](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=20)** And the second is to make that text view into an editable text field.
>
> **[0:26](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=26)** So let's start by creating this variable and I'm going to do that in between lines 10 and 11.
>
> **[0:34](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=34)** So after line 10, I'll create a new line and then I'm going to type var which is the key word for creating a variable.
>
> **[0:41](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=41)** It says, I'm going to create a variable after that var type a space, and then you're going to put the name of the variable, which in this case is total, and then we're going to set the value of the variable equal to something and that's going to be an empty string.
>
> **[0:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=59)** If you're unfamiliar with programming a string is basically a text value, and we have a few of those here in red that you could see in the code.
>
> **[1:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=68)** After total type a space, and an equal sign, and another space, and then two double quotes.
>
> **[1:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=74)** So now what we want to do is put that value from the variable inside of our text view.
>
> **[1:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=82)** To do that, I'm going to modify this value in the text view right here.
>
> **[1:26](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=86)** So instead of amount, I'm going to replace the brackets and amount with total.
>
> **[1:32](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=92)** Watch what happens on the screen.
>
> **[1:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=95)** So we get the word total here even though I'm using the same name as the variable.
>
> **[1:42](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=102)** And the reason for that is these quotes surrounding it reading it as the literal value total rather than the value of the variable called total.
>
> **[1:52](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=112)** So if I delete these quotes you'll notice that the color of total changes to a teal color and there's no text on the screen, and that's okay.
>
> **[2:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=123)** If you change the value inside of the string here on line 11 to 100, for example, then you're going to see that value instantly reflected here.
>
> **[2:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=134)** So what's happening is this text view is reading the value of the total variable.
>
> **[2:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=142)** So to review, you can create a variable using the var keyword, the variable name, and then you could set the value with an equal sign.
>
> **[2:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/understanding-variables?u=76281980&t=153)** You could then use that value in your code by typing the name of the variable without quotes.

> [!info]- Semantic Content
>
> **Code Keywords:** var (3), let (1), delete (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating a TextField in SwiftUI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=1)** - [Instructor] With our variable in place, we're ready to create an editable text field.
>
> **[0:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=8)** I'm actually going to create that above the total value here.
>
> **[0:13](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=13)** So between lines 24 and 25, I'm making a new line and I'm going to type out text and then field with a capital F.
>
> **[0:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=21)** And when that gets highlighted in the coding thing, choose the one that says titleKey text.
>
> **[0:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=28)** Just press Return on your keyboard.
>
> **[0:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=30)** And then we're asked for two values in order to create a user editable text field.
>
> **[0:36](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=36)** The first one is the text that goes inside of the text field when there's nothing in the text field and this will be the word amount.
>
> **[0:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=45)** So I'm going to open up some quotes.
>
> **[0:48](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=48)** So by typing one open quote Xcode writes the second closed quote for me.
>
> **[0:53](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=53)** And in here, I'm just going to type amount like that.
>
> **[0:56](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=56)** Next, we need to pass in a value for text.
>
> **[1:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=60)** Now this is something interesting because it's a different kind of a value.
>
> **[1:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=65)** It's not just what we've looked at before which is the string values or these values in quotes.
>
> **[1:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=71)** It actually wants a particular type of variable in there.
>
> **[1:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=76)** So if I put total in here like this and then I click away, you're going to get an error.
>
> **[1:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=84)** So if I click on this X inside of the red octagon here, it says cannot convert value of type string to expected argument type binding string.
>
> **[1:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=93)** Even if you're a seasoned programmer, this line can be a little bit confusing.
>
> **[1:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=97)** Basically it's saying you're putting the wrong type of data in this area in the code so you need to change that to the right kind of data.
>
> **[1:46](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=106)** The difference between a text field and a text view that we've used earlier is that a text field can modify a variable so we need to pass in a certain modifiable variable with an attribute that says it's modifiable at runtime.
>
> **[2:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=125)** To do that, we need to modify our variable on line 11 to make it something called a state variable which is something that can be modified at runtime.
>
> **[2:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=136)** You can do that by putting your cursor before the var keyword and then typing @State with a capital S.
>
> **[2:23](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=143)** Now we've changed the variable to the right type and if you look down here, this error icon has actually changed.
>
> **[2:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=151)** It used to be an X inside of a stop sign shape or a red octagon and now it's a white circle inside of that octagon.
>
> **[2:41](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=161)** If you click on that icon, then you're given a certain type of suggestion.
>
> **[2:47](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=167)** When you see that white dot inside of a red octagon, it means that Xcode's going to suggest a fix for you.
>
> **[2:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=175)** So it says you need to insert a dollar sign so I'm going to click Fix and have Xcode insert that dollar sign for me.
>
> **[3:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=183)** And what that does is it says this is a variable that can be modified at runtime.
>
> **[3:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=190)** So the dollar sign only works with a state variable and it should only be used in certain cases where the variable is going to be modified at runtime like inside of a text field.
>
> **[3:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=201)** Notice that we don't have any errors for not using the dollar sign here below.
>
> **[3:26](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=206)** Now our HStack here has a dollar sign, an editable text field that goes from here all the way over to here to the right.
>
> **[3:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=215)** And then at the right, we have this total value.
>
> **[3:38](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=218)** Now let's take a look at how this works and why I left this text view here for now.
>
> **[3:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=225)** I'm going to change the value of my variable that's 100 right now to an empty string so that's just two sets of quotes.
>
> **[3:53](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=233)** So now we see amount here and there's actually nothing over here.
>
> **[3:57](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=237)** In the Canvas, click in amount and then type in a value.
>
> **[4:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=243)** I'll type in 100.
>
> **[4:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=245)** Notice as I type, that the value on the right actually updates.
>
> **[4:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=250)** I'm writing to the total here in the text field and in the text view, I'm reading that value.
>
> **[4:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=256)** So anytime it changes in the text field, it's automatically updated in the text view on the right.
>
> **[4:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=262)** For what we're doing right now, we don't need to read that value in the UI but we're going to look at using this total value later on to calculate the total amount after the tip.
>
> **[4:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-textfield-in-swiftui?u=76281980&t=277)** So what I'm going to do is delete this line and now we've successfully created a text field that is able to modify a variable at runtime.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), var (1), let (1), type, (1), delete (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** titlekey (1)
> **Speakers:** - [instructor] (1)

#### Creating a slider in SwiftUI
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=0)** - [Instructor] One of the key parts missing from our tip calculator right now is a slider bar to adjust the tip percent.
>
> **[0:09](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=9)** What we're going to do now is create that slider and have it go from values from one to 30.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=15)** So let's take a look at how you'd create a slider in Swift UI.
>
> **[0:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=21)** I'm going to go below the existing HStack here, so right after this curly brace on line 26, and I'm going to create a new HStack.
>
> **[0:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=30)** So once I type a capital H, HStack is highlighted in the hinting, and I'll just press return, and then a space, an open curly brace, and then another return.
>
> **[0:42](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=42)** Inside of this HStack, I'm going to create a slider.
>
> **[0:47](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=47)** So I'm going to type the word slider and the one that we want here is value in and then we want one that says step after that.
>
> **[0:57](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=57)** So I'm going to do value in step on editing changed.
>
> **[1:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=61)** The reason, by the way, there are so many different values here, is because a slider can have various settings and you want to create the slider with the settings that you need.
>
> **[1:12](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=72)** And these are the ones that we need for what we're doing here.
>
> **[1:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=76)** So I'm going to choose that and it's asking for a value.
>
> **[1:20](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=80)** And again, we see this binding and then some brackets and binary floating point.
>
> **[1:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=88)** Remember, we saw binding when we had to put this value instead of the text field.
>
> **[1:34](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=94)** Remember, the binding value means a variable that can be edited at runtime, or in other words, a state variable.
>
> **[1:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=103)** So we need to create a state variable and put it there with a dollar sign.
>
> **[1:48](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=108)** So here's what we'll do for that.
>
> **[1:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=110)** Just below our total declaration on line 11, we'll create a new line and create another state variable.
>
> **[1:58](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=118)** So at state with the capital S, space var space, and then we'll call this tip percent.
>
> **[2:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=125)** Remember, this is going to be modified at runtime by the slider and we're going to set it equal to the default of 15.0.
>
> **[2:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=134)** So with that, let's go back to the value.
>
> **[2:17](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=137)** I'm just going to click on the binding binary floating point text here and then type a dollar sign.
>
> **[2:23](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=143)** Remember, because this is editable at runtime.
>
> **[2:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=145)** And then tip percent.
>
> **[2:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=147)** Once it's highlighted in the code hinting, return to complete it, and then press tab to go over to the next parameter value.
>
> **[2:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=155)** This is asking for some kind of range of numbers and we can actually express this without a variable.
>
> **[2:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=163)** We can express one to 30 by typing a one, three dots, and then a 30.
>
> **[2:52](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=172)** So that slider will go from one to 30.
>
> **[2:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=175)** Once I type that in, I actually see the slider appear in the UI.
>
> **[3:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=180)** The reason why it wasn't appearing before in the UI is because our code was incomplete and had some errors in it.
>
> **[3:07](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=187)** So once we fixed all of that, now we have the slider.
>
> **[3:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=190)** We can drag it, but we don't see the value of the slider yet.
>
> **[3:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=196)** Let's take a look at how to add that.
>
> **[3:18](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=198)** I'm going to go to the next line after slider and then I'm going to create a text view.
>
> **[3:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=204)** So just text.
>
> **[3:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=205)** And then in parentheses, I'm going to put the value of the tip percent variable.
>
> **[3:32](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=212)** This presents a little bit of a challenge because if I just type tip percent as I did before without quotes, then I'm going to get an error.
>
> **[3:41](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=221)** And the reason for that is because I'm putting in a numeric value.
>
> **[3:46](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=226)** So if you look at the value of tip percent here, it's a number and it doesn't have the quotes.
>
> **[3:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=230)** And what the text view wants is a string value, which should be in quotes.
>
> **[3:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=235)** So how do we put the value of a variable within a string so we can render it inside of a text view?
>
> **[4:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=243)** The first part is to wrap it in quotes.
>
> **[4:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=245)** Now of course, as you may expect, then we then see the literal value of tip percent.
>
> **[4:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=250)** But we can render a variable within a string by typing just before the variable back slash and then an open parenthesis.
>
> **[4:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=261)** And then after the variable's name, we type a closed parenthesis.
>
> **[4:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=265)** So that's a special character in Swift UI that allows you to put variable values within strings.
>
> **[4:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=273)** So it's backslash and then you wrap the variable code inside of parentheses.
>
> **[4:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=279)** So now we have this 15 and there's a ton of zeros after, but I can click and drag and see them edit.
>
> **[4:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=285)** This would be nice if it snapped to whole numbers instead.
>
> **[4:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=289)** Let's take a look at how to do that.
>
> **[4:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=291)** After the end value, just before the close parenthesis in the slider line of code, type a comma and a space.
>
> **[4:59](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=299)** And we're going to say we're going to use one more setting for the slider and that setting is called step.
>
> **[5:06](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=306)** And this snaps at certain intervals.
>
> **[5:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=310)** So if we put 1.0 right here and then click and drag the slider, you'll notice that each number is a whole number.
>
> **[5:20](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=320)** Now we have all these trailing zeros.
>
> **[5:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=322)** We'll fix that later.
>
> **[5:23](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=323)** But for now, you can see we're getting only whole numbers in our slider.
>
> **[5:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=327)** Great.
>
> **[5:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=328)** The last thing we're going to do here is add a percent symbol after that.
>
> **[5:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=333)** And I'm just going to do that by adding another text view.
>
> **[5:36](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=336)** So below our existing text view.
>
> **[5:39](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=339)** So I'm creating a new line after line 30, we'll make a new text view.
>
> **[5:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=343)** I'll just use the code hinting for that.
>
> **[5:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=345)** And inside of the parentheses, I'm going to open up the quotes and put a percent symbol there.
>
> **[5:52](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=352)** And there we go.
>
> **[5:53](https://www.linkedin.com/learning/building-your-first-ios-17-app/creating-a-slider-in-swiftui?u=76281980&t=353)** Now we've created a slider with a specific range and have it snap to certain numbers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), return, (1), return. (1), var (1)
> **Definitions:** is a  (3), in other words (1), is called (1)
> **CLI Commands:** make (1), snap (1)
> **Versions:** 15.0 (1), 1.0 (1)
> **UI Navigation:** click on (1), go to (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Finishing the App

#### Converting between data types
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=1)** - [Instructor] Our calculator is nearing completion, but there is one obstacle that we have before we can actually calculate the total, and that is the text that the user puts in the amount field can be numbers or letters, and there's not a way to calculate a tip on a series of letters.
>
> **[0:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=22)** So we need to make sure that the user inputs numeric values, or in other words, values that we can legitimately convert into numbers.
>
> **[0:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=33)** To do that, we're going to use something called casting.
>
> **[0:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=37)** A simple example of casting is treating this decimal number that we're seeing right here, this 15 with all the zeros, as a whole number or integer.
>
> **[0:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=49)** To cast that value as an integer, I'm going to go to line 30 in my code and put my cursor just before tipPercent in the text view and I'm going to use Swift to say that this value should be treated as an integer.
>
> **[1:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=65)** To do that, type Int, short for integer, with a capital I, and then wrap tipPercent in an additional set of parentheses.
>
> **[1:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=74)** Now you can see the whole number there.
>
> **[1:16](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=76)** We're going to do something similar for treating this text amount or string amount as a numeric or decimal value, called a double.
>
> **[1:28](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=88)** Let's go below our HStack, so at the end of line 32, create a new line, and we're going to do a test to see if we can cast the amount value as a double or numeric floating point value.
>
> **[1:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=105)** If so, then we'll put some text below the slider.
>
> **[1:49](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=109)** To do that, type if and then a space and then the word let.
>
> **[1:56](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=116)** Let is kind of like a variable except for, it doesn't allow for changing the value, it creates something called constants.
>
> **[2:06](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=126)** So if let, and now we need to create a name for our constant.
>
> **[2:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=131)** We'll call this totalNum with capital N, short for total number, and we're going to set the value equal to Double with a capital D, and in parentheses, put total.
>
> **[2:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=147)** So what this is saying is, if we can create a constant value by casting the total string to a double value, so if there are no letters inside of that string, and we can convert it to a number, then we're going to execute the code inside of curly braces.
>
> **[2:47](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=167)** So after double total, put an open curly brace and press return.
>
> **[2:53](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=173)** So anything that we put in here, including the creation of user interface elements, will only happen if we have a number in the amount field.
>
> **[3:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=183)** So I'm going to create a text view, and inside of the string of the text view, I'm going to type value is a number, just as a placeholder for now.
>
> **[3:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=195)** So we don't see that rendering here in the canvas, and if I type in any letters inside of amount, I don't see it either, but watch what happens if I type a numeric value I now see that the value is a number.
>
> **[3:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=209)** So what we've looked at here is how to cast values to other values in two different ways.
>
> **[3:35](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=215)** One is simply casting them in the code like we're doing with the integer.
>
> **[3:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=220)** We don't need the if statement for the integer, because every floating point number can be treated as a whole number by removing the decimal in the values after.
>
> **[3:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=231)** We need to use this statement because the casting to a numeric value might fail in the event that we have any kind of text inside of that text field.
>
> **[4:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/converting-between-data-types?u=76281980&t=243)** So we're using this way to do it, and then inside of the if block, we're able to perform the calculations that we need to get the tip amount.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for, (1), return. (1), interface (1)
> **Definitions:** short for (2), is a  (2), in other words (1)
> **Code Identifiers:** tippercent (2), totalnum (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Calculating the tip total
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=0)** - [Instructor] Now it's time to calculate the tip amount and put it in the text view if indeed we have a numeric value to work with.
>
> **[0:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=8)** So find the if statement that we created in a previous movie.
>
> **[0:12](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=12)** And then in the text area, let's change that placeholder text to be tip amount.
>
> **[0:20](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=20)** And then we'll put a colon and then our currency symbol.
>
> **[0:22](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=22)** Mine is a dollar sign.
>
> **[0:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=24)** And then remember, if we want to put any variables inside of a string, we use that backslash and parentheses operator.
>
> **[0:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=30)** And let's just start by putting total num in here.
>
> **[0:34](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=34)** Notice that I'm not using total.
>
> **[0:36](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=36)** Total still a string, but total num is a double value or a decimal value.
>
> **[0:42](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=42)** And we're going to put that right there.
>
> **[0:45](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=45)** Now watch what happens when I put an amount in there.
>
> **[0:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=50)** So I put a number in there and then I'm seeing the double version of that number.
>
> **[0:55](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=55)** It would be better if it was formatted to our appropriate currency, but for now, this will suffice.
>
> **[1:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=61)** To calculate a tip amount, we need to multiply the bill amount by the percent.
>
> **[1:10](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=70)** So in this case, we need to multiply 30 by 15 or rather 30 by 0.15 because remember, percent is a fraction of 100.
>
> **[1:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=85)** So it's actually not 15, it's 15 hundredths.
>
> **[1:30](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=90)** So we need to do a little bit of math here to perform the conversion.
>
> **[1:34](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=94)** So after total num, type of space, and then we're going to use the multiplication character in code, which is an asterisk, and we're going to multiply that by tip percent.
>
> **[1:47](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=107)** And now if I put that value in here, I'll put 100 to make it easy.
>
> **[1:52](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=112)** Now it's saying the tip amount is $1,500, which is not correct.
>
> **[1:58](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=118)** What we need to do is have this be a fraction of 100 by dividing tip percent by 100.
>
> **[2:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=125)** To do that, all we need to do is type a space after tip percent and put a forward slash, which is the division operator in our code, and then 100.
>
> **[2:17](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=137)** So for the amount, I'll put a value and I can see the correct tip amount there.
>
> **[2:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=144)** Note, as you may guess, you can also multiply this by 0.01 to get the same result.
>
> **[2:33](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=153)** And let's test that.
>
> **[2:38](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=158)** So whichever value is easier for you to read, you can leave inside of your code.
>
> **[2:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=163)** Now what we're going to do is format this so that it only has two decimal points.
>
> **[2:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=171)** To do that, all we have to do is go to the end of this line and type a comma and then type the word specifier and that asks for a string.
>
> **[3:02](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=182)** So we're going to open up the quotes right there.
>
> **[3:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=185)** And this is how many decimals we want or how we want to format the number.
>
> **[3:12](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=192)** So for this type percent, 0.2F, and that just says format this as two decimal points.
>
> **[3:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=204)** So now type in your tip amount and then click the slider.
>
> **[3:31](https://www.linkedin.com/learning/building-your-first-ios-17-app/calculating-the-tip-total?u=76281980&t=211)** And now we see the formatted number and the total is calculating successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 0.15 (1), 0.01 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Handling invalid values
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=0)** - [Instructor] So the way our application works is we show the tip amount if we can convert this amount to a number, but if we can't convert it to a number, we instead show nothing, which causes the user interface to shift.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=15)** What if we had a way to show information to the user about what's wrong and why it's not working?
>
> **[0:21](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=21)** Let's take a look at how to handle that using something called an else statement.
>
> **[0:25](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=25)** In the same way that an if statement runs if a condition is true or successful, an else statement can run if a statement is evaluated as false or if it is unsuccessful, in our case, of converting a string to a double value.
>
> **[0:43](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=43)** To do that, go after the closed curly brace on line 35.
>
> **[0:47](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=47)** After the if statement, type a space and type the word else, and then an open curly brace and a return to have Xcode write the close curly brace for you.
>
> **[0:58](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=58)** And on line 36, I'm going to create a text view with a message inside of it.
>
> **[1:04](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=64)** This message is simply going to say, "Please add a numeric value," and this can be a placeholder or you can change it to whatever you want to represent that the user needs to put in a valid value in the amount field.
>
> **[1:19](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=79)** And now when it's empty, I see this, or if I put in any text, I see that, but if I type in a number, then I see the tip amount.
>
> **[1:27](https://www.linkedin.com/learning/building-your-first-ios-17-app/handling-invalid-values?u=76281980&t=87)** So using these else statements, you can render different views if a condition is not true or if some kind of casting like this one fails.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), let (1), case, (1), else, (1), this, (1)
> **Speakers:** - [instructor] (1)

#### Adding an app icon
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=1)** - [Instructor] Our app is now functionally complete, but it doesn't have an icon, and what app is complete without a nice icon?
>
> **[0:09](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=9)** To apply an icon in Xcode, all you need to do is head over to the navigator.
>
> **[0:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=15)** Remember, you can click this button in the toolbar at the top left, or you can hover over the left edge of the screen, and from there, find the assets package.
>
> **[0:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=24)** That should be right underneath your content view, and single click on that.
>
> **[0:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=29)** You'll notice that that opens up an assets tab up here in the tab bar, and inside of there, I can click on app icon to apply my icon.
>
> **[0:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=40)** So once you have that selected, you're going to see your missing icon image with information about the pixel dimensions that the icon image should be, that is, 1024 pixels squared.
>
> **[0:54](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=54)** You can create this icon using any graphic creation software, such as Adobe Photoshop or Illustrator.
>
> **[1:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=63)** The main thing to keep in mind when creating an icon is that it needs to be square and not contain any transparency, because that's unsupported on iOS at this time.
>
> **[1:15](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=75)** To apply the icon image, simply double click this empty space in the middle of the screen and navigate to your icon image.
>
> **[1:24](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=84)** If you're following along with the exercise files, there is a folder called assets in the root of the exercise files that contains this image, so simply select that and hit open, and there it is.
>
> **[1:37](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=97)** That's all there is to applying an icon image in iOS.
>
> **[1:41](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=101)** I'm now just going to close out the assets tab and return to my content view, though you can run the application with the assets tab showing if you want.
>
> **[1:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=111)** So once this is set up, just simply hit the run button, or command R on your keyboard, to run the iOS application, and that will launch the simulator app, because we can't preview it in the canvas because we don't have access to the home screen.
>
> **[2:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=128)** And if I take a minute to launch, so give it some time.
>
> **[2:11](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=131)** Usually it takes about one minute for me.
>
> **[2:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=134)** Once the app launches, you'll notice that it functions just like it does in the canvas, and to see the icon, simply hit the home button, and that's at the top of the simulator right there, and now I'm seeing the icon.
>
> **[2:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=149)** I've seen in many cases where the icon will not be rendered, or maybe you'll see it render for a second, then switch back to the default icon.
>
> **[2:38](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=158)** If you see that, don't worry.
>
> **[2:40](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=160)** It doesn't mean you did anything wrong.
>
> **[2:42](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=162)** All you need to do is head back over to Xcode and stop the running application, and then we're going to to go back to the simulator and restart it.
>
> **[2:51](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=171)** You can restart the simulator by going into the menu and then choosing device, restart.
>
> **[2:57](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=177)** It only takes a second, and once it's restarted, you should see your app icon inside of the home screen.
>
> **[3:05](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=185)** So if I go inside of my operating system and I swipe over, I can then see the icon, so that should fix the icon not showing issue.
>
> **[3:14](https://www.linkedin.com/learning/building-your-first-ios-17-app/adding-an-app-icon?u=76281980&t=194)** And let me be the first to say, congratulations for creating your first iOS app.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), in the toolbar (1), in the tab (1), navigate to (1)
> **Code Identifiers:** ios (4)
> **Code Keywords:** switch (1), let (1)
> **Exercise Files:** exercise files (2)
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)


### 5. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=0)** - [Instructor] So you've created your first app, and you may be wondering where to go from here.
>
> **[0:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=8)** Since iOS 17 is very new at the time of this recording, in fact, it's only in beta right now and a while away from full release, there's not a lot of information defined except for straight from Apple at their Worldwide Developers Conference from 2023.
>
> **[0:26](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=26)** If you're looking for information, this is a great place to go.
>
> **[0:29](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=29)** You can find that at developer.[apple.com/wwdc23](https://apple.com/wwdc23).
>
> **[0:36](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=36)** And there, you can search for topics or sessions and find a variety of useful videos and training sessions to help you learn more about developing applications with iOS.
>
> **[0:50](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=50)** You may be interested in looking at coding and design essentials.
>
> **[0:54](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=54)** There's several different courses that you can go through.
>
> **[0:57](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=57)** You may be interested in developer tools.
>
> **[1:00](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=60)** You may want to go into creating games.
>
> **[1:03](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=63)** There are tons of resources here at the WWDC website.
>
> **[1:08](https://www.linkedin.com/learning/building-your-first-ios-17-app/next-steps?u=76281980&t=68)** So have fun learning, and I'll see you next time.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Identifiers:** ios (2)
> **URLs:** [apple.com](https://apple.com) (1)
> **Env Vars:** wwdc (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Todd Perkins]]

## Resources

- Exercise files available

## Skills Covered

- iOS Development

## Path Context

### In [[Get Started with iOS App Development]]
← [[iOS 17 Development Essential Training]] | **4 of 4**

## Appears In

- [[Get Started with iOS App Development]]

## Related Courses

_Courses sharing skills:_

- [[Programming For Non Programmers Ios 17 And Swift 5]] — iOS Development
- [[iOS 17 Development Essential Training]] — iOS Development
- [[Xcode 15 Essential Training]] — iOS Development

---

[↑ Back to top](#)