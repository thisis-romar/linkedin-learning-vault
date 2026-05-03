---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-react-native
url: "https://www.linkedin.com/learning/learning-react-native"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 6/11/2020
learners: 18638
skills:
  - React Native
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF4ot_Ik9jR6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1591718128064?e=2147483647&amp;v=beta&amp;t=h3rvWEty4vJraskkvuctgJH3B6l7TzfK3vNJd8j0b-8"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Become a React Native Developer]]'
prev_courses:
  - '[[React Native Ecosystem and Workflow]]'
path_nav: '[{"path":"Become a React Native Developer","position":5,"total":5,"prev":"React Native Ecosystem and Workflow","next":null}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/react-native
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Learning%20React%20Native.md)

![Learning React Native](https://media.licdn.com/dms/image/v2/C4E0DAQF4ot_Ik9jR6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1591718128064?e=2147483647&amp;v=beta&amp;t=h3rvWEty4vJraskkvuctgJH3B6l7TzfK3vNJd8j0b-8)

# Learning React Native

> Get up and running with React Native, the popular framework for building native applications that run on both iOS and Android using React. Instructor Alex Banks introduces you to the framework and steps through how to use it to build applications in JavaScript. Using practical examples, Alex helps you get started with components, views, and platform APIs. He takes you through setting up your first

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native) | 1h 42m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Framework of learning React](#framework-of-learning-react)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. What Is React Native?**](#1-what-is-react-native) (4 videos)
  - [What is React?](#what-is-react)
  - [What is React Native?](#what-is-react-native)
  - [How React Native works?](#how-react-native-works)
  - [What is Expo?](#what-is-expo)
- [**2. Working with Expo**](#2-working-with-expo) (4 videos)
  - [Installing the Expo client](#installing-the-expo-client)
  - [Creating a Snack](#creating-a-snack)
  - [Creating a new project](#creating-a-new-project)
  - [Running a project on a device](#running-a-project-on-a-device)
- [**3. Components and APIs**](#3-components-and-apis) (5 videos)
  - [Native components](#native-components)
  - [Native APIs](#native-apis)
  - [Creating style sheets](#creating-style-sheets)
  - [Flexbox layouts](#flexbox-layouts)
  - [The Image component](#the-image-component)
- [**4. Working with Views**](#4-working-with-views) (8 videos)
  - [Responding to touches](#responding-to-touches)
  - [Using a touchable highlight](#using-a-touchable-highlight)
  - [Extracting a custom component](#extracting-a-custom-component)
  - [Importing a custom component](#importing-a-custom-component)
  - [Using a flat list](#using-a-flat-list)
  - [Creating a form](#creating-a-form)
  - [Collecting input](#collecting-input)
  - [Creating a custom hook](#creating-a-custom-hook)
- [**5. Platform APIs**](#5-platform-apis) (6 videos)
  - [Using AsyncStorage](#using-asyncstorage)
  - [React Navigation](#react-navigation)
  - [Navigating between screens](#navigating-between-screens)
  - [Completing the Color Details page](#completing-the-color-details-page)
  - [Fetching data](#fetching-data)
  - [Using RefreshControl](#using-refreshcontrol)
- [**6. Building Your Project**](#6-building-your-project) (7 videos)
  - [Installing an iOS simulator](#installing-an-ios-simulator)
  - [Installing an Android AVD for Mac](#installing-an-android-avd-for-mac)
  - [Installing an Android AVD for Windows](#installing-an-android-avd-for-windows)
  - [Publishing your Expo project](#publishing-your-expo-project)
  - [Building for iOS devices](#building-for-ios-devices)
  - [Building for Android devices](#building-for-android-devices)
  - [Ejecting from Expo](#ejecting-from-expo)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Framework of learning React](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=0)** (offbeat uplifting music)
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=5)** - Hello, I'm Alex Banks. Welcome to Learning [[React Native]]. In this class, we're going to build native applications that run on iOS and [[Android]] devices with [[React.js|React]]. React Native is a popular framework for building native applications. You built these applications using [[JavaScript]]. That's right, JavaScript. And these applications are fast, render smoothly, and truly feel like native applications. Now you might have heard that hybrid JavaScript is not the best approach for building native applications. And in the past, this was true. But React Native is different. React Native uses the multi-threaded native components and APIs that ship with your device. Look, I want to make sure that you leave this class ready to build your own applications. And the best way to do that is to build something. So in this class, we're going to build a small application called the Color Organizer. You can get it here, just scan this QR code. Open the link, and then you'll be directed to the app in the App Store or the Play Store. In this course, we're going to get you working with React Native and Expo. First, we're going to make sure your development process is dialed, then we're going to move on to the important stuff, like how to collect data from the user, how to add data points to a list. How to incorporate navigation that allows your users to navigate from screen to screen. We're even going to build a bonus app that allows you to [[Fetch]] and render data from the internet. I'm pretty excited to introduce you to React Native. Hope you're ready to have some fun, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (6), [[JavaScript]] (3), [[Android]] (1), [[React.js|React]] (1), [[Fetch]] (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - hello (1)
> **Non-Speech:** (offbeat uplifting music) (1)

#### [What you should know](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=0)** - This course will introduce you to [[React Native]], but React Native isn't exactly a beginner topic. It assumes you know something about [[JavaScript]] and [[React.js|React]]. Now you don't have to be a JavaScript or a React expert to take this course, but you do want to understand some of the fundamentals of both. For instance, if you don't know what a function or a component is, you might want to brush up on your JavaScript and React before taking this course. If you've never heard of JavaScript, if you've never heard of React, you probably shouldn't start off here. We've got some great courses where you can learn these subjects. I'd recommend taking "Introducing the JavaScript Language" with Joe Chellman or "JavaScript for Web Designers" also with Joe Chellman. You're also going to need to know React. So if you've never heard of React, you may want to consider taking "Learning React" or "React JS Essential Training" with Eve Porcello. All React Native layout is based on Flexbox. If you're good with Flexbox, you're going to soar with React. Now I don't expect you to know Flexbox. I'm going to introduce it in this course, but at some point, you might want to learn Flexbox end to end. I recommend taking a course like "[[Advanced Responsive Layouts with CSS Flexbox]]" by Morten Rand-Hendriksen. Now if you're comfortable with JavaScript and you understand the basics of React, then you're ready for this course. If you consider yourself a pretty seasoned developer, you could probably pick up most of this stuff as you go along. If you find the syntax or code challenging at any point, take a step back and study some JavaScript and React and then come back to this course. I'm not going anywhere. Neither is React Native.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (11), [[JavaScript]] (8), [[React Native]] (4), [[CSS Flexbox]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** css (1)
> **Analogies:** for instance (1)
> **Speakers:** - this (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has a set of exercise files that you can download and follow along with. This will give you everything that you need to work alongside of me with the exact same files that I'm working on. In the exercise files folder, you'll find folders for each chapter and a corresponding subfolder for each of the videos that we'll be working on code. In each video's folder, you'll find a start folder and a finished folder. When the video begins, I'll start working with the files in the start folder. Sometimes the start folder may be blank. In these cases we've started with a blank folder and created all of the files necessary. The finished solution for each lesson can be found in the finished folder. You're also going to need [[Node.js]] and [[npm]] set up and ready to go. Sometimes if you jump to a start or a finished folder, you may need to install the dependencies to make your code work. In our cases, running npm install will install the required dependencies for that folder and npm start should start the application. Use whatever favorite text editor or IDE you want to use. I'm going to be using VS Code. All of the files are text so you can use whatever you want. In the next chapter I'm going to demonstrate an in-browser IDE called Expo Snack. You can even use that one for the entire course if you don't want to set up a local environment at all. Well, that's all we need to know for set up. Let's go ahead and begin learning [[React Native]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Node.js]] (1), [[React Native]] (1)
> **CLI Commands:** npm (3), find (2), node (1), make (1)
> **Prerequisites:** set up (3), install (3)
> **Env Vars:** ide (2)
> **Exercise Files:** exercise files (2)
> **File Paths:** node.js (1)
> **Cross-References:** in the next (1)
> **Tools:** vs code (1)


### 1. What Is React Native?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is React?](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=1)** - [Instructor] [[React.js|React]] is an open-source [[JavaScript]] library that is used to create user interfaces, or UI. It was started at [[Facebook]]. React was designed to solve some of the challenges and complexity that Facebook engineers faced when dealing with large-scale data-driven websites. React was originally released in 2013, and it rapidly grew in popularity, as it was adopted by tech giants like Netflix and Twitter. The main reason for React's success is that it simplified the developer experience. React allows developers to build small, reusable components, and then [[Jetpack Compose|compose]] those components into larger components, and then compose those larger components into applications. React is declarative. That means the code itself describes what should happen. For example, React's syntax describes what a UI should look like, and in RunTime, this code, these descriptions, they're used to construct the user interface in the browser, or a mobile device. When a user interacts with your applications, things change. They may fill out a form or press a button, or swipe the screen. When these changes occur, React finds the most efficient way to update the user interface to instantly reflect these changes. In the browser, the React-dom library is used to construct user interface using the browser's dom. In a mobile application, react-native issues to construct the user interface using native components that are unique to iOS or [[Android]]. React-blessed allows you to create complicated terminal or console UI with React. There are also projects like react-360 that allow you to create render VR experiences using React. It's possible to use React to describe any type of UI. This includes OSX or PC Desktop applications. There are a number of tools from electron to react-reason
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=94)** that will help you build native applications. React is a declarative JavaScript library for designing user interfaces in the browser, on the phone, or potentially on any device that interfaces with the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (17), [[JavaScript]] (2), [[Facebook]] (2), [[Jetpack Compose|Compose]] (2), [[Android]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** ios (1)
> **Env Vars:** osx (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [What is React Native?](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=1)** - [Instructor] [[React Native]] allows you to use [[React.js|React]] to build native applications for iOS or [[Android]] devices. If you're familiar with using React in the browser, then you know that your React components contain elements that are specific to the browser. For example, if you were to create a Friend component to display the name and avatar image of one friend, that syntax might look something like this. This code defines a React component called Friend. React components are [[JavaScript]] functions. The component returns a description for what the DOM should look like using JSX elements. Div, heading one, and image are JSX elements that represent tags that are specific to the browser. In React Native we don't have a browser. We have a native iOS or Android application. Your iPhone doesn't know what a div or heading one is. An iOS device has its own native elements that are used to construct the user interface. Instead of using a div, or a heading one, or an image, you'll use a View element, or a Text element, or an Image element. These components are native to the device. We're still using JSX to help us render this React component. The only difference is the UI components that are used. React Native has a ton of UI components that are specific to mobile devices. Other than that, the syntax pretty much looks the same. They're both JavaScript. This is possible because of something called the bridge. The bridge enables asynchronous communication between our React and JavaScript code and the native code environments, Objective C for iOS or [[Java]] for Android. For instance, the iOS bridge will use iOS components, like UI View, UI Text View, and UI Image. The Android bridge will use Java classes,
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=94)** like View, Text View, or Bitmap. This is the real power of React Native. Because it only uses native components, your applications run more smoothly because these components are not limited to a single thread like typical JavaScript code. JavaScript runs on its own thread and asynchronously communicates with native elements via the bridge. Many of the applications on your phone may have already been created with React Native. Here is a showcase that shows which companies are using React Native along with specific details and project descriptions. These companies can attest that React Native is ready, it's fast, and it's a joy to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (7), [[React.js|React]] (7), [[JavaScript]] (5), [[Android]] (4), [[Java]] (2)
> **Code Identifiers:** ios (6), iphone (1)
> **Env Vars:** jsx (3), dom (1)
> **Analogies:** for example (1), for instance (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How React Native works?](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=0)** - [Instructor] I mentioned earlier that [[React Native]] doesn't work like other hybrid [[JavaScript]] frameworks that you may have used in the past. Let's take a look at why. In the past, Web apps were built using 100% JavaScript and WebViews. A WebView is a component that works like a mini web browser right within your application. This means in order to get JavaScript to work within your application, you had to have the entirety of WebKit installed, along with your codebase. And then your [[HTML]], CSS, and JavaScript would all run in a single thread from that view. More often than not, the JavaScript and HTML could not keep up with the user interaction, and it would cause jumpy rendering, buggy components, and sometimes even crash the app. So even though you could program native applications using JavaScript, their quality would suffer to a point that it was better to simply use the native languages. React Native, on the other hand, uses the native components and APIs from the device's native language. These components are typically written in Objective-C or sometimes [[Swift (Programming Language)|Swift]] for iOS and [[Java]] for [[Android]]. JavaScript runs on its own thread and is powered by the JavaScriptCore. These components run independently of JavaScript; they're not single threaded. They communicate asynchronously with JavaScript. The result is smooth rendering, and the [[User Experience (UX)|user experience]] feels like a native application because it uses the same components. Another advantage to the approach that React Native takes is the ability to dynamically update applications. Let's take a look. So you release your applications to the App Store or the Play Store. The only way to get updates to the user was to submit the update to the stores and then wait for the approval process,
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=93)** and then the user would have to physically update the application on their phone. With React Native, you still distribute your applications from the store. The users initially download and install your application. That initial install comes with the React Native and JavaScript bundle that contains all of the logic and UI for your application. When it's time to update a React Native application, all you have to do is replace your JavaScript bundle. React Native applications can update themselves when a user loads or reloads them. The application can check for the existence of an update and load a new bundle dynamically, if necessary. This means you can fix bugs, add features, and respond to user feedback rapidly. So, React Native uses native components from the iOS or Android SDK. JavaScript runs on its own thread. Native components run on their own threads. The bridge enables asynchronous communication between the two. The JavaScript is combined in a file that we typically call the bundle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (13), [[React Native]] (8), [[HTML]] (2), [[Android]] (2), [[Swift (Programming Language)|Swift]] (1)
> **Env Vars:** html (2), css (1), sdk (1)
> **Code Identifiers:** ios (2)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What is Expo?](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=1)** - [Instructor] Expo is a framework and a platform that helps developers create, develop, and publish robust [[React Native]] applications. Remember, React Native applications are Native applications. They are written in their own native languages and they implement a bridge pattern that allows [[JavaScript]] to run in its own thread and communicate with the components that are native to the device. The code base for these applications are hybrids of JavaScript, Objective-C, [[Swift (Programming Language)|SWIFT]], and [[Java]]. If you want to build an iOS app, you need an [[Apple Developer]] account and [[Xcode]]. If you want to build an [[Android]] app, you're going to need the Android SDK, Android Studio, and you're going to need to know Java. Essentially, when working with React Native, you're still building a native app, so you're going to need to have a lot of computer books on your shelf. Learning all of this can be pretty tedious and time consuming. What you really need is an expert who can take your code and build your apps for you. This is where Expo comes in. Using Expo is like adding an iOS and Android expert directly to your team. With Expo, you simply write React Native and JavaScript code, and Expo handles all the nitty-gritty details for building iOS and Android applications. The Expo platform runs online and it has worker servers that are ready to build apps for you. You don't need Xcode or Android Studio or to know anything about Objective-C or Java in order to build apps with Expo. Expo will handle the details for you. The Expo platform consists of a suite of four primary developer tools. This is a client application that you install directly on your device that allows you to debug your applications that you're working on. The Expo [[CLI]] is a command line tool that will help you create React Native projects, create project code, develop and test the code on devices,
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=96)** publish projects, and send builds for iOS and Android to the Expo servers. Expo Snack is an in-browser IDE for [[Prototyping]], testing, and sharing React Native code, and finally, the Expo SDK is an entire kit of components and APIs for use with React Native. So, Expo is the perfect tool for getting started. You can start working with React Native code right away, without having to worry about setting up complex development environments. You don't even need an IDE to get started. You can use Expo Snack. Finally, Expo provides flexibility. You can eject your Expo app and get direct access to the Android and iOS source files. We're going to be using Expo to help us develop our React Native applications in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (9), [[Android]] (8), [[JavaScript]] (3), [[Java]] (3), [[Xcode]] (2)
> **Env Vars:** sdk (2), ide (2), swift (1), cli (1)
> **Definitions:** is a  (3), is an  (3)
> **Code Identifiers:** ios (5)
> **Prerequisites:** install (1), getting started (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 2. Working with Expo

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing the Expo client](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=0)** - The best way to develop mobile applications is to test those apps directly on your phone. Now, in the past getting a [[React Native]] app on your phone was a bit of a painful process. Not anymore, thanks to Expo. What we're going to do in this lesson is install the Expo client on our phone. And this will allow us to test our application code directly on our device. From [expo.io](https://expo.io), under the Tools, the tool that we're going to be looking at is the Client. And the Client is a native app. So it's either an iOS app or an [[Android]] app. So in order to install the Client on my phone what I'm going to go ahead and do is go the App Store. And I'll do a search for Expo. If it doesn't come up under Expo, you can always do a search for [Expo.io](https://Expo.io). So there it is, the Expo Client. I'm going to go ahead and install that. And once we have the Expo Client installed, you will have this app on your phone, so you can go ahead and open it. Now, the first time that you sign into Expo you're going to need to create an account if you don't already have one. You can go ahead and create an account by clicking the Sign Up for Expo link and filling out this form. I already have an account so I'm going to go ahead and sign into it. There we go. And now that I'm signed into Expo I can see details about my account, like some of my current projects or some of my saved snacks. In the next lesson we're going to create our first React native app using Expo Snack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2), [[Android]] (1)
> **Prerequisites:** install (3)
> **URLs:** [expo.io](https://expo.io) (2)
> **Code Identifiers:** ios (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [Creating a Snack](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=1)** - [Narrator] In this lesson, we're going to write our first [[React Native]] application using Expo Snack. So from this menu, I'm going to select Expo Snack. And then I'll go ahead and open up Expo Snack. Or you can go directly to the URL at snack.[expo.io](https://expo.io). When you create a new Snack, by default, you get some boilerplate code. You can actually see that code rendered over here in the right menu. So this message, change code in the editor and watch it change on your phone, this is actually being rendered in this text element right here. In our preview menu, we're currently rendering this component using React Native Web. I can also test this code in [[Android]] or IOS devices by selecting one of these tabs here. And when I click tap to play, this code is loaded into a device emulator. Sometimes, you might have to wait for an emulator to become available. So here, we can see our default Snack code rendered in an IOS device. Since we're new to React Native, I'd like to start with a blank file and type all of the code ourselves. So first, we're going to import [[React.js|React]] from react. Next, we're going to import two components from React Native, the text and the view component. Now we're going to create our main app component. So we're going to export a default function called app. If you take a look on the left hand side of the screen, you'll notice our project files. We are currently within the app js. This is the entry point for all of our React Native apps that we're going to build using Expo. So next, we're going to return a view component, and as I do, you can actually see a blank application rendered within our IOS device. So let's go ahead and put some text out there.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=94)** With the text component, I'm going to go ahead and write hello world. And as I do this, what you'll notice is Snack is automatically saving your changes for you, as well as re-rendering them in the test IOS device. So this is working, the problem is is our hello world is jammed way up here in the left hand corner right behind our status menu. If I had a few more text elements, one with red, one with green, one with blue, we will start to see that text list build below the status bar. So I could actually move all of this text by adding a style to our view. And we'll give our view a padding of 50 pixels. That causes all of our text elements to be displayed 50 pixels from the top of the screen, and 50 pixels from the left of the screen. I could even test this code out on an Android device. And even though we're using the same [[JavaScript]] code, both devices have different native elements. So sometimes they might look a little bit different. Finally, with React Native Web, we can even run the same code in a web browser. Well there you have it. We created our first Snack, and we're able to test it directly within the Expo Snack interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (6), [[Android]] (2), [[React.js|React]] (2), [[JavaScript]] (1)
> **Env Vars:** ios (4), url (1)
> **URLs:** [expo.io](https://expo.io) (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [narrator] (1)

#### [Creating a new project](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=0)** - [Instructor] In the last lesson, we created our first [[React Native]] application using Expo Snack. But typically, we want to build applications in our own environment. In this lesson, we're going to learn how to set up a React Native project locally, using the Expo [[CLI]]. So let's start by opening up our terminal, and navigating to the documents folder, And then I'm going to create a new React Native app using Expo by running the command npx Expo init color catalog. This is running the Expo command line tool using npx. Expo init is going to create a brand new React Native app for us. That app is going to be called the Color Catalog. The first thing Expo is going to ask me is to choose a template. For our first app, we're going to go ahead and start out with a blank template. Once our application has been created for us, we can see that we have a folder called color catalog. I'm going to go ahead and open up this file folder, and you can see that Expo has created a few files. So this is our base application. What I'm going to do is open up this whole folder in VS Code, simply by dragging and dropping it over the VS Code icon. So this opens up my project in VS Code, I can see the files locally here within the Explorer. And I'm going to go ahead and open up our entry file, app.js. And as you can see, the Expo CLI also provided us some default code just like the Expo Snack does. I'm going to go back over to my Expo Snack and copy all of the code that I created in the last lesson, and then I'm going to overwrite all of the code within the AppJS with my code. Running [[npm]] start within this folder, starts our Expo development server. So when we run npm start,
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=93)** we're actually starting a server that's running locally on port 19002. This is your Expo development server, and is ready to serve your bundle to native devices to be tested. So starting this server runs a development server locally on your network. Expo also creates a DNS that points to the server. This makes it possible to test your development code directly on your device, no matter how it's connected to the network. We'll talk about this a little bit more within the next lesson. For now I'm going to run my app locally on an iOS simulator, by clicking on run on iOS simulator. Now, you're not going to be able to run your code on an iOS simulator, unless you have [[Xcode]] installed, and an iOS simulator set up. If you don't have these things, don't worry, we'd actually prefer to test our applications directly on our device, and I'm going to show you how to do that in the next lesson. If you really want to use an iOS simulator locally, you're going to need to install Xcode. In chapter six, there's some bonus lessons, on how to set up and install simulators. Specifically, chapter six lesson one, is how to set up Xcode and install the iOS simulator, and six two, is how to set up an [[Android]] simulator. You can take that step if you want to. So the Expo development server, is creating our [[JavaScript]] bundle, and then it sends it to the Expo app on the simulator. And that's what allows us to test our code locally. When I build applications, I actually test them directly on the device. I'm going to show you how to do that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[Xcode]] (3), [[CLI]] (2), [[npm]] (2), [[Android]] (1)
> **Prerequisites:** set up (5), install (3)
> **Code Identifiers:** ios (6)
> **Tools:** vs code (3), terminal (1), command line (1)
> **CLI Commands:** npx (2), npm (2)
> **Cross-References:** in the last (2), in the next (2)
> **Env Vars:** cli (2), dns (1)
> **Exercise Files:** template (2)

#### [Running a project on a device](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=1)** - In the last lesson, we created our first project using the Expo [[CLI]], we actually have the development environment for our project running locally on our computer. With Expo, we can still test this project directly on our device. Which is the preferred way to test a [[React Native]] app. And what we'll notice is that we have an Expo Development Server running on localhost 19002. You'll notice that there's a little QR code down here in the corner. So what we can do is we can actually load this app directly on our phone using this QR code. Now, all you need is a QR code reader. Your camera is actually a QR code reader. So if I come up here, and take a look at this, I can open it in Explore. And here we go. We see our project building our [[JavaScript]] bundle. Once the JavaScript bundle is complete, we actually get to see our application running right here. So, this is working because Expo is running this development server on your local network. If we look down here at the connection, we can see a server running at my IP address. So that's all in our [[Local Area Network (LAN)|local area network]]. But check this out. There's something called the tunnel. And actually what's happening with the tunnel is Expo gives your server a DNS lookup. So what we actually have is a domain name, that the Expo client can use to load your application. This feature is going to make sure that you can test your code on your device no matter what network you're on. Now, something else that's going on is this is actually a full fledged development environment. What that means is, if I came over here, and I changed our code, like let's say I wanted to add some style to this text. (keyboard clicking) And give it a font size of 50.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=94)** Well, what you're going to notice is as soon as I save this change, we're going to see that update happen on our phone. And that's because the Expo client is communicating with this development server that it has set up on your local environment. Anytime you make changes to your code base, you're going to see that code update automatically. Now sometimes we might make changes that cause our phone to crash. Or we might make a change that requires us to reload the app before we can see it. You can do that with the Expo client simply by shaking your phone. You'll also notice that when you shake the phone, there's some other debugging options available to you as well. We can also add anywhere within our code a console.log. And as I added that console.log the app on my phone refreshed. We can actually see these logs using the development server. So if I come over here to the expo development server, every device that I have connected will appear here in this window. So this device is called, "This is not a phone". That's the name of my phone. When I click on this device, we can see all of the console.logs for this device here. And we can also clear those logs by clicking on this trash can, if we wish. So if I were to go ahead and shake this phone, and then reload our application, we see the message again. Alright, so I'm going to come back in here to the code, and I'm going to get rid of my font size, and get rid of the console.log. Now we're ready to develop, debug, and test our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[CLI]] (1), [[React Native]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** cli (1), dns (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)


### 3. Components and APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Native components](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=1)** - [Instructor] All right, we're picking up right where we left off. So, I currently have an Expo project created, and we're looking at the App.js file in that project. I also have everything running. We can see that I have Expo running, so, here, within the browser, we're taking a look at our Expo Metro Bundler, and our tunnel is currently working. I also have a terminal window dedicated to this, so this is the terminal window where I originally ran [[npm]]-start. All right, so now we're ready to take a look at some [[React Native]] components. React Native comes with a set of UI components that we can use out of the box to start building applications. We've already been using the View and Text component. Let's go ahead and remove the Text component, and take a look at the ActivityIndicator. First, I'll import the ActivityIndicator from React Native. And this is a component, so now we can go down here and use it. I'll display it within my view. It has a size attribute, so I'll set the size to large, and a color attribute, so this is the color hex for the [[React.js|React]] logo. When I click save, we notice that our application has refreshed over here in the iOS simulator, and this little spinning wheel here, that's an ActivityIndicator. Let's import a ProgressView. Now, the ProgressViewIOS means that this ProgressView only works on the iOS. So, I'll go ahead and add it, and give it a progress of 0.3, or 30%. Let's go ahead and up the progress to 50%. We see the result here in the iOS simulator, and it looks like our progress bar has highlit about 50% of the bar.
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=95)** We also have a Button component that comes with React Native, and the title is the text that is displayed on the button. So, when we click save here, we're going to see an error. And our error is specifically telling us that we cannot find the variable Button, and that's just because we forgot to import it. So, I'll come up here and import the button, and now when I click save, you can see we have a button. The little blue text that says, click me, is our button. And you'll also notice that there's a little warning about route error boundaries. And this warning is just telling us that we're not handling our errors with the ErrorBoundary component like we would in production. We'll take a look at that later, but just know that you'll see that warning every time you get an error, so it's okay to dismiss it. So far, we've taken a look at the View, the ActivityIndicator, the ProgressViewIOS, and the Button. Let's go ahead and add an action to the button. So, in order to do that, I'm going to go ahead and create a function, and we'll call this function onButtonPress, and when the user presses a button, we're just going to go ahead and log, button press, to the console. We'll also go ahead and add a timestamp to that, so you'll notice I created this string with back ticks. That means it's a template string, so I can insert some [[JavaScript]] in here. And what we'll go ahead and do is create a new date, which will give us a timestamp, and then we will convert that date to the local time string. We'll expand a little here, so we can see the full line. So, now, we have a function that will go ahead and log that the button has been pressed with a timestamp. Let's add it to the Button component. And we do that by adding an onPress property, and simply adding the function,
>
> **[3:10](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=190)** so when our user presses the button, we'll invoke this function. So, this is a console.log that's happening in JavaScript, and we can see it by taking a look at our Metro Bundler, and then selecting the test device. So, we're using the iPhone 11, that's where we had the button click, and there we can see our message. I can go ahead and click the button a few more times, and we can go ahead and see our log with different timestamps, right here inside of our Metro Bundler. I'm going to open a new browser tab and do a quick [[Google]] search for React Native docs. Here, under the API tab, we have a complete list of all of the components that are available to us with React Native.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (6), [[JavaScript]] (2), [[npm]] (1), [[React.js|React]] (1), [[Google]] (1)
> **Code Identifiers:** ios (3), onbuttonpress (1), onpress (1), iphone (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** warning (3)
> **CLI Commands:** npm (1), find (1)
> **Tools:** terminal (2)
> **File Paths:** app.js (1)
> **Env Vars:** api (1)

#### [Native APIs](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=1)** - [Narrator] An API is a set of classes or functions that gives developers access to an underlying operating system, service, or application. It's an acronym. It stands for Application Programmable Interface. In this case, the [[React Native]] API gives us access to underlying features of the phone. Currently, when the user presses a button, we are logging the button press string along with a timestamp to the console. Both iOS and [[Android]] have native UI for alerting the user. All I need to do is import the alert API, and instead of console logging this message, we can use the Alert.alert function. Now when we click our button, the message is displayed in a native iOS alert. There is also an API for dimensions. We can use this API to get the height and width of the current device. So I can destructure the height and the width from dimensions.get, and we want to get the dimensions of the current window. Notice that I have placed this code outside of the app component. That's because the dimensions aren't going to change. So I only need to get that information once; as opposed to every single time the [[React.js|React]] component is rendered. Now I can import a text component. And we can use that text component to display the dimensions, the height, and the width. Over here in our simulator, we can see the height and the width by pixels for this device. There's also a platform API. This API can be used to tell us the operating system for the current device. So by displaying Platform.OS, we can inspect our operating system.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=96)** Here on the simulator, we see that this is an iOS device. We can use this information when deciding which components to render. For instance, if the Platform.OS is an iOS, then we will render the ProgressViewIOS because this particular component only works on iOS devices. If we want to display the progress bar on an Android, we'll need to use a different component. So we can check the Platform.OS, and if it's Android, we can use the ProgressBarAndroid. Let's not forget to import the ProgressBarAndroid, and the ProgressBarAndroid has some different properties.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=141)** So we'll need a style attribute of horizontal. Indeterminate properties set to false. And I'm going to go ahead and pick a color for this progress bar. That'll be blue. Now we could test this code in a local Android simulator. But what I'm going to do is I'm going to copy all of this code and then I can come over here to snack.[expo.io](https://expo.io). And I'll go ahead and paste this code into snack, just to give it a quick test. I'm running my code on an Android emulated device using expo snack. And it looks like I have an error. So we cannot find the variable blue, that's because the color should be a string. So I go ahead and change that. And we can see our application running here on Android. Notice that the look and feel of the native components is different on the Android device. That's because React Native is using the underlying native components and they are naturally different. So let me go ahead and also make this blue change inside of my code base. If you want to learn about other API's that are available to you. You can find them under the API tab in the React Native documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (7), [[React Native]] (3), [[React.js|React]] (1)
> **Env Vars:** api (9)
> **Code Identifiers:** ios (5)
> **Definitions:** is an  (2), is a  (1), stands for (1)
> **CLI Commands:** find (2), make (1)
> **URLs:** [expo.io](https://expo.io) (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Creating style sheets](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=1)** - [Instructor] [[React Native]] handles styling UI components with an abstraction that's based on CSS. Let's take a look. Currently we have a view and three text elements, and if we look in our simulator, we can see that the text is really small and everything's jammed way up here in the left corner, behind the clock. Let's add some styles to make this text readable and visible. First, I'm going to go ahead and import the style sheet object from React Native. And then I like to add my styles below the component. So down here, on line 14, I'm going to go ahead and create a new constant called styles and we'll use StyleSheet.create to create a new style sheet where we can add various styles. Let's create a style object for page that we'll add to the view and we'll add a margin top of 40 pixels. Doing this adds 40 pixels to the top of the view, which pushes our content down below the status bar on the clock. Notice that margin top is CSS like, but it's not exact CSS. In React Native all of the CSS style attributes are camelCase. That means instead of margin hyphen top, marginTop is one [[Microsoft Word|word]] with a capital T. The same is true for backgroundColor, which is also one word where the C is capitalized. This gives our view element a background color of light gray. Let's create some styles for text. I'll add a font size of 22, and we need to make sure that we add a style attribute to each of our text elements that points to this text class. There we go.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=93)** We made the text a little bit larger. We can also add a color attribute to the text, which makes all the text red. And we can add a background color attribute, which makes the background color for each of these texts, elements yellow. We can also add some space between the elements by adding a margin of 10. The margin refers to the area around each text element. By adding padding, we're adding some space to the inside of each text element before the text. These style attributes are based off of the CSS box model, which allows us to accurately space things on a screen. We can add as many objects as we want to our style sheet. I'll add another object here for selected texts, in our selected text object, I'm just going to go ahead and inverse the colors. So the background color will be red and the text color will be yellow. Each style object needs to be added to the style attribute of every element that we want to display those styles. And we can add multiple style objects to a single element using an array. And we can see here that the green element is displaying both of these style classes. First it displays the text class and then the color and background color are overwritten with the selected text class, making this element look selected, the React Native documentation contains more information about how to style your user interface using react native.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (5), [[Microsoft Word|Word]] (2)
> **Env Vars:** css (5)
> **Code Identifiers:** camelcase (1), margintop (1), backgroundcolor (1)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Flexbox layouts](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=1)** - [Instructor] Layout and [[React Native]] is based upon Flexbox, a popular layout module for CSS. Flexbox gives us the ability to [[Jetpack Compose|compose]] styles that can position elements anywhere on a screen. In Flexbox, there are flex containers and flex elements. In this case, the view will be our flex container, and it contains three flex elements, each one of these text elements. Flex containers either display their child elements in a row or in a column. Now by default, the containers display these elements in a column, but if I want to change that, I can just add a flex direction attribute and set that to row. Now the text elements are lined up in a row. You can also add a justify content attribute to flex containers that tell the container how to space and position the child elements. Those elements can be positioned to the center or flex start which is the left which is the default, or flex end which is the right which is the end. You can even add space between which evenly adds space between each element or space around, which evenly adds space between each element, including some space to the beginning and end of all of the elements. The flex attribute can tell a flex element how it should fill up the space. Adding a flex of one to the text elements evenly distributes their width across the row. Because each of these elements are distributing their width to expand the full column, justify content on the parent no longer matters.
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=95)** And I want to make sure the text within each element is centered. So our view is a flex container, but it's also a flex element. Its parent at this stage is the root, so adding a flex of one to the page element is going to cause it to fill up the whole screen because it's expanding to fill the full column, which is the default flex direction. When the flex direction is row, justify content positions the content horizontally along the X axis. To position content along the Y axis, you use align items. So setting align items to the center aligns our items vertically on the page along the Y axis. Using justify content and align items in conjunction with one another allows you to position content anywhere within a box. In order to see this, we need to stop our text elements from taking up the entire row, so I'll go ahead and clear this flex one property. Setting both justify content and align items to flex start aligns our content in the upper left-hand corner of the container. Setting both of these values to flex end will align our content in the lower right-hand corner of the container. Setting justify content to space around and align items to flex start will evenly position all of our items horizontally and align them vertically at the beginning. Each individual flex element also has the ability to align itself using these values. So if I take our selected text and I align that to flex end, we see the green text at the bottom, but the red and blue values are still at the top of our container. Justify content and align items work
>
> **[3:08](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=188)** based upon the flex direction, so when the flex direction is column, justify content will now position elements vertically and align items will align elements horizontally. Flexbox can be a little tricky to get the hang of at first, but there are tons of resources online for it because this is also a layout module for CSS. [CSS-tricks.com](https://CSS-tricks.com) has a really neat guide to Flexbox that really does a good job of explaining all of the relationships between flex containers and flex elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1), [[Jetpack Compose|Compose]] (1)
> **Env Vars:** css (3)
> **CLI Commands:** make (1)
> **URLs:** [css-tricks.com](https://css-tricks.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The Image component](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=1)** - [Instructor] Let's take a look at how we can add some images to our UI. In our local files, under the assets folder, you will find a couple of pictures of cats. There's a biscuit.jpg and a jungle.jpg. Let's go ahead and load and display these images. You can import a local image file just like you can import a component. So we'll go ahead and import our picture of Biscuit into a variable called picBiscuit. Now, instead of using this text component to display our to do message, I'm going to go ahead and replace it with an image component that we'll use to display the image. I'm also going to change this style class from text to image and remove all of the properties since these will eventually hold all of the styles for an image. Now all we need to do to display the image is use the image tag, change our style to reference styles.image and we can add our picture to the source attribute of the image tag. The image element has its own set of style properties. For instance I can set the resize mode to center and that will resize the image and position it to the center of the screen. Let's also go ahead and import that picture of Jungle. And I'll copy this image tag and paste it in here and then change the source to picJungle. Now these pictures aren't the same size so I'm getting some funny output with this resize mode, I'm going to go ahead and clear that out. And I'll go ahead and add a flex of one and we'll let flexbox dynamically resize these images. borderRadius will allow us to round the corners
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=94)** of these images, giving them a margin of 10, we'll give them some space. Now I can also set the width for these images but different phones have different screen widths, so I won't be able to guess the exact width. That's where the Dimensions API will come in handy. So let me go ahead and import the Dimensions API and then we can use it to set the width of the image to the width of the screen. Because these images have a margin of 10, I'm just going to go ahead and subtract 10 from the width so we can see a little bit of white around each image.

> [!info]- Semantic Content
>
> **Analogies:** picture (3), just like (1), for instance (1)
> **Code Identifiers:** picbiscuit (1), picjungle (1), borderradius (1)
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 4. Working with Views

[↑ Back to Table of Contents](#table-of-contents)

#### [Responding to touches](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=1)** - Thus far, we've learned how to create and layout user interfaces. It's time to learn how to interact with them. We already have a user interface laid out. So we have a container view, and it contains two text elements. Each of these text elements are styled like buttons, and they're being displayed in a column, which means that each of these text buttons are listed vertically on the screen. We want to make this user interface interactive. So, when a user presses either of these buttons, we want to see the background color change. And for that, we're going to need to useState. useState is a special kind of function that ships with [[React.js|React]]. It's called a Hook. And we use it to hook functionality up to our components. In this case, we want to save the value for the background color and state, and we also want to be able to change that color. So both the background color and a function to change the background color can be destructured from the array that's returned by the useState Hook. Take a look at this useState Hook. The syntax seems funny, but the reason it returns an array is because array destructuring allows us to name these values whatever we want. The first value is always the state value. In this case, it's the background color, so we'll name that variable backgroundColor. The second value is a function that we use to change the state value. So we want to call it setBackgroundColor. This syntax provides us flexibility when naming our state variables. Let's go ahead and add this background color to the styles for our view. The reason this background color is a state value in the first place is because we want to change it. So I'll add an onPress property to the green text element. Now, when the user presses the green text element
>
> **[1:37](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=97)** will set the background color to green. And we can see this interaction working in the simulator over here. So I'm going to go ahead and copy this onPress property and paste it into the red text element. Only when the user presses the red text element will change the background color to red. So to recap, we've made our application interactive by adding an onPress property to each of these buttons. When the user presses a button, we change the state value for the background color. The useState Hook comes with everything we need to do this. It provides us with a state value, the background color, and a function to change that state value, the setBackgroundColor function. Additionally, whenever we call the setBackgroundColor function and change the background color, this useState Hook causes the app component to be rerendered with the new state value. Pretty cool, huh?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Code Identifiers:** usestate (6), setbackgroundcolor (3), onpress (3), backgroundcolor (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - thus (1)

#### [Using a touchable highlight](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=1)** - [Instructor] The touchable highlight is a component that we can use to make an entire group of elements respond to a touch. Currently when the user presses either of these text elements we're changing the background color of the containing view. Instead of adding the onPress property to the text handler, let's use a touchable highlight. The touchable highlight will allow us to add press events to an entire group of components. So I'm going to go ahead and remove both of these text elements and I'm going to add a touchable highlight. Under this touchable highlight I'll also add a view. Within the view we'll display the [[Microsoft Word|word]] yellow inside of a text component. We already have some styles in our stylesheet here for a button so I'm going to go ahead and add the button styles to our TouchableHighlight. When I save this you'll see that we have a little warning over here. So this warning here says that we have a failed prop type. Font size was supplied to TouchableHighlight. So [[React Native]] doesn't use actual CSS. It's not a web browser. Instead React Native styles are based upon CSS. This means that only certain styles can apply to certain elements. So this warning here is telling us that a touchable highlight cannot have a font size. It also will not display the textAlign property. We'll create a new style class for buttonText and we'll add this font size and this textAlign property to the buttonText. And we'll add this new buttonText style class to the text element. In addition to adding the text for Yellow, I would also like to add a small color swatch to show what yellow looks like. We'll do that by adding a view
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=93)** and creating a new style class called sample. These will be the styles for our color swatch. So we'll give our little swatch elements a height of 20, a width of 20, and a placeholder background color for white. Whenever you add a border radius that's greater than half of the width and height, you get a circle. Now I'll go ahead and make this watch yellow by adding an addition style where I hard-code the background color as yellow. Later on we're going to change this yellow value into a property and that's why we're adding the background color here. By default our swatch and the text yellow are being displayed in the column so I'm going to go ahead and add a style class for row.
>
> **[2:20](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=140)** And we'll make the flexDirection row. We'll also align the items to the center and we'll go ahead and give these elements a little space by upping the margin. I'm also going to add a background color. And I could make the background color white, but what I want to do is make a transparent background. I can do that by setting the color with rgba, which stands for red, green, blue, and alpha. So the first value is 255 for red, 255 for blue, 255 for green, and .8 alpha. This makes the background color white with a little bit of transparency. Now we can add the on press property to the TouchableHighlight making the whole group of elements clickable. So when we press the TouchableHighlight we'll set the background color to yellow, and we can also add an underlayColor property to the TouchableHighlight which will go ahead and highlight the button that we pressed. When we press the button we can see that this whole group of elements has been selected. Everything has a nice orange highlight and we're still able to change the background color to yellow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** buttontext (3), textalign (2), onpress (1), flexdirection (1), underlaycolor (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1), means that (1), stands for (1)
> **Warnings:** warning (3)
> **Env Vars:** css (2)
> **Speakers:** - [instructor] (1)

#### [Extracting a custom component](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=1)** - [[React.js|React]] allows us to isolate our code into reusable components. In the last lesson, we composed several components to created a single color button. So some button that displays the name and swatch of a color and is also clickable. Clicking on the color button actually changes the background color. Let's move this code into a reusable component called the color button. I'll create a function for the color button and we will copy and paste the entire touchable highlight and we'll return it from the color button function. Every color button can't be yellow, so we're going to need to take in the color from the color button as a property. I'm going to add a property called background color. I'm not going to hard code the background color of the swatch to be yellow. We'll get that from the prop. Additionally I'm not going to display the [[Microsoft Word|word]] yellow. I'll display the value of the incoming background color property. Now we have a color button component that's ready to take in a background color property and display that property as the color name and swatch. Let me come down here and use it. I'll create a color button with the background color red. And when I save this, we can see our red color button with red swatch. We're going to go ahead and copy and paste this red color button and create several color buttons. So we'll have a green, a blue, a yellow, and a purple. We only need to define the color button component once and then we can reuse it to create several color buttons. We still need to make these color buttons clickable. Right now clicking on a color button won't change
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=95)** the background color. Within the color button, within the on press property of the touchable highlight, we're calling set background color. But the color button doesn't have a set background color function so instead, we're going to add a function property to the color button called on press. When we press the touchable highlight, we'll go ahead and invoke the on press property and pass the current background color back as an argument. You may have noticed that I've defaulted this function property to a silly function. F arrow F. This is just a dummy function value. It can be invoked, but it does nothing. This makes the on press property optional so if the parent doesn't define an on press, our application won't break if somebody presses the touchable highlight. Now I'll go ahead and add an on press property to our red color button and when the user presses this color button, we'll invoke set background color. I'm going to go ahead and copy this property and add them to the [[Representational State Transfer (REST)|rest]] of the buttons to make them work as well. Now we can see that all of our color buttons are pressable. Pressing each of these color buttons actually changes the background color. You may be wondering why all of the on press properties equal set background color. I could've added a function here and then invoked set background color from within that function, and then passed the appropriate color, but I don't need to do this because the on press property is already passing the current background color so for the red color button, the on press property is passing red as an argument. There's no need for this extra wrapper function. The on press property is expected to function.
>
> **[3:09](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=189)** I'll send it set background color and when I press any of these buttons, the background color property will be passed in the set background color function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - react (1)

#### [Importing a custom component](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=0)** - [Instructor] It's absolutely fine to work with components in the same file. However, once you've finished a component, it's usually a good idea to move that code base to its own file. Let's do that with the Color Button. I'm going to go ahead and copy the entire Color Button function and I'll come over here to my Source files. I'm going to click this little plus folder icon to add a new folder. I'm going to call that folder, Components, and then within the Components confolder, I'm going to create a new ColorButton.js file. This is where we'll put the Color Button. So I can collapse the current file folder and we'll paste our Color Button directly into this file. Now that the Color Button's off on its own in a file, we need to make sure that we export it. So I'll type export default in front of my Color Button function. Our Color Button has some dependencies, so I'm going to go to the App.js file and just copy all of the import statements and then paste them inside of the ColorButton.js file. Visual Studio Code has great output dependencies that we are not using. So I'll go ahead and delete the useState function. The StyleSheet is grayed out, but we need to use that. So let me go into my App.js file and I'm just going to go ahead and copy all of the styles, and then I will paste them inside of the ColorButton.js file. So it looks like we have style classes for button, row, sample, button text, pretty much everything except for container. So I'll delete the container style class and that's about it. We have isolated a reusable Color Button component in its own file. Let's go ahead and close that file
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=92)** and go back to App.js. We're not longer using the Text or TouchableHighlight components, so we'll remove them from our import statement. Now we can import the Color Button from components/ColorButton. We don't need to use curly brackets or destructure anything from this import because the Color Button is the default export from that file. One last little bit of cleanup. The only styles that are currently used by the App.js file are the container styles, so I'm going to go ahead and remove the [[Representational State Transfer (REST)|rest]]. Now the Color Button has been isolated into its own file. It's reusable across our application and our App.js file is now focused on the app component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **File Paths:** app.js (5), colorbutton.js (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** usestate (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Using a flat list](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=1)** - [Instructor] The flat list is special type of view that you can use to handle this content. Currently, in our application, we have a small list of colors that's being rendered into color buttons. If we take a look at our files, we'll notice that there's a data folder. And inside the data folder, we have a [[JSON]] document for default colors. So here we have an array of colors. Each one of these objects has the name of a color and a unique identifier. So let's use this array of colors to create our list of buttons. Back in the app js file, we will import this JSON data into a variable called default colors. And now to render this list of colors using [[React.js|React]] components, I'm going to use a special type of view, a flat list. The flat list is a scrollable view that you can use to render a list of content. We'll render it from the app component. So to do this, I'm going to to go ahead and self close this view. I'm going to grab one of these color buttons and copy them. I'm going to need that when it's time to render each list item and I'm going to go ahead and change the name of this view component from view to flat list. Now we do want this file list to flex. We want it to expand the full length of the screen. However, we don't need to have justifyContent and alignItems in our container anymore. So, a flat list expects an array of data. So, using the data property we can pass the default colors to this flat list and we also have to provide a renderItem property. The renderItem property has a function that will be invoked once for each item in our list. So the flat list is going to iterate through all of the data in our array and then invoke this renderItem property once
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=94)** for each of these items. For each color in our array, we go ahead and render a color button. All we have to do is supply a value for the background color. Now remember the defaultColors array contains a list of color objects. Each object has unique ID and a color. So I can use the item.color to set the background color. I also need to provide a unique key property for each of these color buttons. We'll go ahead and use the items' unique ID for each of these keys. This key property is always required by React when we're working with list. When we save our file, we see that we have a whole list of color buttons. This list is scrollable and all of the color buttons still work. We can still change the background. Whenever we want to render a listed data, it's a good idea to use the flat list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[React.js|React]] (2)
> **Code Identifiers:** renderitem (3), justifycontent (1), alignitems (1), defaultcolors (1)
> **Env Vars:** json (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a form](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=1)** - [Instructor] Let's create a small form that users can use to add their own colors to this list. Within our files, under the components folder I'm going to add a new file, called ColorForm.js. Within this file, we'll go ahead and import [[React.js|react]] from react. We'll also import a style sheet and the view and text components from [[React Native]]. Next, we'll create the colorform component, so we'll export default function colorform. This is our component, and I'm going to go ahead and return a view and just some placeholder text that says ready. We'll also need a style sheet so down here on line 12 I'll create one using stylesheet.create. We'll add a container style object to our style sheet and actually, before we start adding styles, I want to see this component so I'm going to come over to the app.js file and I'm going to import our colorform component. Next we want to use it so I'll come down here to my app component and I'll add the colorform to the list of objects that we're going to render. So here we have an error. This error is occurring because a react component can only return a single child. So it's asking me, do we want to use a JSX fragment? All we have to do to make this work is use a fragment, which is essentially a component that doesn't have a name, and we can add both of these objects to the fragment which meets react's requirement to have a single child returned by the component. You can barely see our form up here at the top of the screen. So let's go back to the colorform.js file and start adding some styles. First, we'll add a margin top of 40 and I need to make sure that I add
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=94)** the styles container to our view. Now we can see our form pushing our content down and out of the way. Let's go ahead and swap out this text component for a text input component. The text input component will allow us to collect text input from our users. I'll also add a button component. So I need to be sure to import the button and I'll give the button a title of add. And we can see the add button on our form, but we can't see the text component. That's because we need to add some styles to tell the text input element how to fill the space. So we'll give it a flex one, a border width of two and a font size of 20. When I save this it's still kind of hard to see the text input component. We can see the border width as a line but the text input component doesn't actually have any space. It does have a flex of one which is telling it to grow into any available space, but the flex direction right now is column so there's no place for it to grow. I'm going to change the flex direction to row and when I do this, you'll notice that the text input element and the add button are now aligned in a row, and the text input is growing for any remaining space that the add button doesn't need. We'll add a margin five to cushion the text input, a border radius of five to smooth the outer edges and we'll also add some padding to get some space between the input and the border. You'll notice that when I type anything into the text input, the value is automatically capitalized. The text input component has a ton
>
> **[3:08](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=188)** of various options that you can use to configure it. So I'll set auto capitalize to none and now it doesn't automatically capitalize on my input. And one last little tweak that I want to add is I want to make sure that these items are aligned to the center. Now we have a form. In the next lesson, we'll make it work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[React Native]] (1)
> **CLI Commands:** make (4)
> **File Paths:** colorform.js (2), app.js (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** before we start (1), configure (1)
> **Env Vars:** jsx (1)
> **Speakers:** - [instructor] (1)

#### [Collecting input](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=0)** - [Instructor] In the last lesson, we constructed the user interface for our form. In this lesson, we're going to make the form work by collecting the user input and adding it to our list of colors. We're going to create a controlled form component. And what that means is [[React.js|React]] is going to control the state of our form. So we'll need the useState hook. We'll save the current input value in state. So the useState hook is going to give me the input value and a function to change that value. At first, the input value will be an empty stream. So I'm going to come down here to the text input and add the input value to the value property. Now when the user changes the value, we're going to go ahead and capture that change using the onChange text property. This property is a function, and it will pass the current value of the text input to the function as an argument. We'll send this text to the setValue function which will cause our input value to change, and the color form will be rerendered with a new input value. All this function is doing is capturing the text argument, and then passing that argument to the setValue function. So we don't need it. We can just send the setValue function to the on change text property. Whenever the input text changes, that new text will be sent directly to the setValue function. Let's demonstrate this by adding a console.log to our component on line six. And we'll just log the input value. I'll come over to the simulator, and we'll select the text input. And we'll type in salmon. Believe it or not, this is a color. It's kind of a pinkish color. And if we come over here and we look at our expo tools, you'll notice seven log messages here. And that's because the component
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=93)** has been rendered seven times. Initially, the input value was an empty string. And then every time we typed a letter, that value changed and caused the component to rerender. We're saving the value of the input in state. So this is called a controlled input component. Now I'm just going to give this text input a placeholder property. And this let's the user know that this is where they enter colors. So now when the text input is empty, it will display the message, "enter a color". So the next thing we need to do is capture that value when the user presses the add button. So I'll add an on press property to the add button. And when the user presses the button, we'll go ahead and add a console.log telling us to add the value. And we'll go ahead and display that input value in the console log. So here we go in the simulator. We'll try to add salmon. We can see our message here, "add value salmon" was added to the console log. After the user adds a color, we want to clear the input value, and we also want to deselect the text input. The text input didn't put itself as an object with methods that we can call, but we need some way to refer to the text input instance in order to call those functions. To do this, I'll need to import the useRef hook from React. And then I'll create a new reference called input using the useRef hook. Now that I've created this input ref, I need to refer to this text input. So I'll add the ref attribute, and make sure that we're pointing to our reference. Now we can use input.current to refer to this text input. Input.current.blur is going to deselect the text input and cause the keyboard to disappear. Calling setValue and sending it an empty string
>
> **[3:07](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=187)** replaces the current value with an empty string. Now to test this functionality, I'll go ahead and enter a color like salmon and click add. And we can see our text input has been deselected, and the input value has been reset to an empty string, making it easy for our user to enter another color. Let's head over to the app.js file and take a look at how we're going to use our component. Here on line 11 is we're adding our instance of the color form. And when there's a new color, I'd like to handle that through a property. So we can say, onNewColor. And that's a function that actually passes up the new color. And now, we'll just leave a little alert here with a to-do message that's passing up the color that we receive in this function. Don't forget to import alert from react-native. So this is how we want to pass new colors from the color form to the app. It's time to go back to the ColorForm.js and implement this function property. So we will destructure the onNewColor property from our arguments. We'll also set this default dummy function, F, arrow, F. And this makes sure that the onNewColor property defaults to a function, so it won't throw errors if we call it. Down here on line 21, I'm going to replace this console.log by actually calling the onNewColor function property, and then passing the input value to it. Now, I'll come over to the simulator, and I'll try to use the form to add red. And when I click add, we see a little alert popup with a to-do message telling us that we need to add the color red to our list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3)
> **Code Identifiers:** setvalue (5), onnewcolor (4), usestate (2), useref (2), onchange (1)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** app.js (1), colorform.js (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** select the (1)
> **Best Practices:** don't forget (1)

#### [Creating a custom hook](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=0)** - [Instructor] [[React Hooks]] give us a way to isolate and separate presentation from functionality. In the last lesson, we created the colorForm, which will collect a new color from the user and then pass it to the app js component via the on new color property. At present, we are simply displaying an alert, letting us know that we have to add this color. So I'm going to get rid of the alert and I'm going to get rid of the defaultColors. We need to capture new colors from our users and then add them to this list of colors. So using the useState hook, we're going to create a state variable for colors. And we also get a function for changing that state variable, set colors. Don't forget to change the default colors to colors. And now when the app initially renders, we see an empty list of colors. Now on line nine, I'm going to create a new function for adding colors. All we have to do is send the color that we want to add to our list to this function and the function will do the [[Representational State Transfer (REST)|rest]]. So I'm going to go ahead and create a new color instance. And this is going to be an object that contains a unique ID and the color that was passed to this function. So we're going to need a package to help us create unique identifiers. I'm going to use a package called short ID So let's open up the terminal. And [[npm]] install shortid. Short ID is used to generate unique identifiers. And these identifiers are short, they're not too long. So now that we have shortid installed, I'm going to import the generate function from the shortid package. And we'll use the generate function when it's time to generate a new ID. So when a user adds a new color, we'll generate a unique identifier. And now what we want to do is take the new color and add it to the list of colors. So to do this on line 12, I'm going to invoke the setColors function,
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=94)** and I'm going to pass it a new array. That new array is going to contain our newColor and the rest of the colors. So that's what these three dots are for. This is the array spread operator, what it's going to do is take all of the colors that are in the current array, and then add them to the end of this new array. Calling set colors will cause the app component to rerender. So now down here, I'm going to get rid of the alert call. And I'm going to invoke our addColor function and pass it the newColor. Now again, creating a function that simply takes the argument and then passes that argument to the next function isn't needed. The new color will be passed to the addColor function. All right, so let's test it out. So I will come over here and use our form to add red. And now we can see red has been added to our list of colors. So adding green also displays our green button. So the code found here on line nine through 13 contains all of the functionality to create a new list of colors as well as the functionality to add colors to that list. We can isolate this functionality into a custom hook. Custom hooks are great because they separate the functionality from the presentation. And they give us a way to reuse that functionality and other components. So I'm going to create a new variable called use colors. This is our custom hook. And now what I'm going to do is, I'm going to copy line 13 through line 17. And I'm going to paste it inside of my useColors function. Now I've isolated this functionality into its own hook. So the last thing that we need to do is we need to expose the list of colors in the addColor function to the consumer of this hook. I'll do so by returning an object with the list of colors in a function for adding colors. So on line 18, I can capture our colors
>
> **[3:07](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=187)** in the addColor function from my useColors hook. And if we come over here to the simulator, we can see that we're still able to add colors. So we've now isolated all of the functionality for working with colors. The color functionality is no longer hard coded into the app component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[React Hooks]] (1), [[npm]] (1)
> **Code Identifiers:** addcolor (4), newcolor (2), usecolors (2), colorform (1), defaultcolors (1)
> **CLI Commands:** npm (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Platform APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Using AsyncStorage](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=1)** - [Instructor] Thus far, we've created a small app that allows us to add and visualize colors. It seems to be working just fine for us, but when we reload the application, we lose all the colors that we've added. So we need to save these colors in some sort of persistent storage. And that's exactly what AsyncStorage allows us to do. This means it allows us to save data locally on our phone. Let's go ahead and implement AsyncStorage. Now I'm in the hooks.js file because the values that I want to save are our colors. And we already have a useColors hook, that manages all of the functionality that has to do with colors. So, first, let's go ahead and import AsyncStorage from [[React.js|react]]-native. Next, we're going to need a function that we can use to load colors asynchronously, so we'll create an async function. We'll create a constant called colorData, this is where we will save any data that we load from AsyncStorage. We can load data from AsyncStorage using the getItem function. Notice that I used the await keyword. Don't forget to do that because AsyncStorage getItem returns a promise and we need to wait for it to resolve before we actually have any color data. Then we'll need to provide the key for the data we want to load. In this case, we'll create a key called ColorListStore:Colors. Now maybe this is the very first time that you've loaded the app, and you don't actually have any color data, so we're going to to check for that using an if statement. So if you do have color data, colorData is going to come back as a string, so I'm going to use [[JSON]].parse to convert that string into an array of colors. Then we'll go ahead and replace our colors and state
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=94)** using setColors. Now we have a function that we can use at any point to load colors from AsyncStorage. The next thing that we're going to add is some functionality for saving colors. I want this useEffect hooked to fire any time our colors array changes. If there's a change to the color array, I'm going to go ahead and save that change by calling AsyncStorage setItem. I'll use the same key that we've added to the getItem call within our loadColors function, the ColorListStore:Colors key. And we're going to save this data as a string, so I'm going to JSON.stringify our array of colors. So this useEffect hook is going to be invoked any time the colors array changes, and it will save the new data from that array to AsyncStorage. The other thing I need to do is initially load our color data. This useEffect hook will have an empty dependency array, meaning that it will only get invoked once, after the initial render. Now if we already have colors, meaning that there are already some items in this colors array, we're going to go ahead and break out of this hook by invoking a return. Next, we're going to go ahead and invoke loadColors, which calls our colors to initially load. So now we'll go ahead and test this out. It looks like I have an error, so I need to make sure that I also import useEffect. There we go, so let's try adding a color. Every time we added a color, the colors array changed, so this useEffect hook should have fired and saved our colors. When we reload our application, we still see blue, green, and red. This is because the first time any component invokes this hook, this useEffect hook will fire and load our initial colors.
>
> **[3:09](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=189)** There you have it, asynchronous storage. We're now saving and loading colors locally on the device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[React.js|React]] (1)
> **Code Identifiers:** useeffect (6), getitem (3), colordata (2), loadcolors (2), usecolors (1)
> **Env Vars:** json (2)
> **File Paths:** hooks.js (1)
> **CLI Commands:** make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [React Navigation](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=0)** - [Instructor] [[React.js|React]] Navigation is a library that we can use to add functionality that allows our users to navigate from screen to screen. In our case, we want to add a details screen for each color. So if the user selects a color, we can go to a screen and see details about that color. In this lesson, we're going to have to move some code around, and we're going to have to create some files. So the first thing I'm going to do is open up the App.js file, and I'm going to copy all of the contents of this file to the clipboard. Now with all of our app code on the clipboard, I'm going to go over to the components folder, and I'll click this icon, which will allow me to add a new file. Let's create a file called ColorList.js. And inside of our color list, I will paste the contents of the App.js file. We'll make a couple small changes, like naming this component the ColorList instead of the App, and also, we are on the same folder as the ColorButton and the ColorForm, so I'll remove this reference to the components folder. So that gives us a ColorList component. Let's come over to our files and also add a new file for ColorDetails. Now, inside of our ColorDetails file, just to prevent us from having to type a whole bunch of code, I'm also going to paste all of the code from our app. And then we'll come into our code and prune out all of the stuff we don't want. So first, that's any reference to other components or hooks. We also want to use the View and the Text component, so we don't need the FlatList or the StyleSheet. We're also not going to have states, so let's get rid of the useState import. And I'll name the component ColorDetails, remove any state functionality, and then essentially remove all of the children that are being rendered. So I'm going to go ahead and create a view where I will use the same container styles that we previously had.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=94)** And within that view, I'm just going to go ahead and add some text to let us know that we're on the Color Details screen. I also want to make sure we see that text in the center of the screen, so we're going to make sure that we align the items to the center, and we justify the content to the center. So now we have a ColorList component and a ColorDetails component. And we need to switch between these components when the user selects to color. So let's go into our now empty App.js file and start to write the new app component. Now, if we go take a look at the documentation at [reactnavigation.org](https://reactnavigation.org), we can get to the docs by clicking on Read docs. And if we take a look at Getting started, we see that we need to install React Navigation using [[npm]], but we also additionally have to install all of these other dependencies. Here's a little Expo install coming in for all of the other dependencies that we're going to need to make [[React Native]] work. I'll go ahead and click this copy button and copy those dependencies to the clipboard. And then I'm going to come over to the terminal window. This is where our application is actually running. And I'm going to go ahead and stop it. So I'm going to go ahead and install @react-navigation/native and @react-navigation/stack. Those are the two main npms that we're going to be using. I also have to install all of those related dependencies. I have that command saved to my clipboard, so I'll go ahead and paste it in here and run it. And now we're installing all of the related dependencies as well. Now that we have React Navigation, let's go ahead and use it. So let's go over to the App.js file. And we're going to import React. We're going to import the ColorList component. We're going to import the ColorDetails component.
>
> **[3:11](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=191)** We're also going to import something called the Navigation Container from React Navigation. And finally, the specific navigator that we're going to create is called the Stack Navigator. So we need to import the Stack Navigator function from react-navigation/stack. Down here on line seven, I'm going to declare two components, the Navigator and the Stack. And we obtain those components by destructuring our call to createStackNavigator. And whenever we use React Navigation, the first thing that we need to do is wrap everything within the NavigationContainer. Within the NavigationContainer, I can add the Stack Navigator. So this is going to be the actual thing that flips between screen. I didn't catch myself, and I accidentally imported the Navigator and the Stack. What I needed to import is a Screen. I'm going to use the Screen component to create the Details screen. And we'll give this screen a name of Details, and we'll tell it to use the ColorDetails component. So right now, we've added a stack navigator, and it only has one screen. It also looks like I spelled ColorDetails wrong. Let me go ahead and fix that in my import statement. So let's go ahead and save this code and run our application. And when we run our app, it looks like we have an error. Okay, so the module hooks isn't available within the ColorList. So the ColorList component is now within the components folder, so I need to make sure that I am importing the hooks from the correct place, which is actually one folder up from the components folder. And I also deleted the style sheet when I shouldn't have. So let me go over to the ColorDetails component
>
> **[4:45](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=285)** and also import the style sheet because, yep, we did leave a style sheet there. So our stack navigator is currently working, but we only see one screen, the Color Details screen that we created. Within the stack navigator, all we need to do is render a screen for every screen that we want to use. So I'm going to go ahead and render a home screen. Now, the order matters here. Because the home screen is listed first, we're going to see it first. There we go. So saving this code, we can see that our home screen is now our ColorList.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (9), [[npm]] (1), [[React Native]] (1)
> **CLI Commands:** make (5), npm (1)
> **Prerequisites:** install (5), getting started (1)
> **File Paths:** app.js (4), colorlist.js (1)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** usestate (1), createstacknavigator (1)
> **Documentation:** the documentation (1), the docs (1)
> **URLs:** [reactnavigation.org](https://reactnavigation.org) (1)

#### [Navigating between screens](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=0)** - [Instructor] In the last lesson we created our stack of screens using [[React.js|react]] navigation, specifically, the stack navigator. And we have a home screen that renders the color list and a detailed screen that renders the color details. What we want to do is navigate between these screens when the user clicks on any other color buttons. But before we get started, I want to do a little bit of cleanup. First, you'll notice that the title for the first screen is home. That's because it defaults back to our name property, but we can change that. We can add options to our screen component and rename the title, colorless. This form looks a little funky now that we have a react navigation header rendered above it. So let me come into the color form and we're going to do some CSS cleanup. Let's get rid of the margin, and then let's also make sure that the background color for the form is white. Here we go. And now let's come back over to the color list. So within the color list component, I'm actually going to get rid of the background color. When we click the button, we're going to navigate to the details page, not change the background. So I'll get rid of the on press functionality within the color button as well. So the initial screen that's rendered is the home screen. So that's where our navigation is going to begin. Now, when this screen component is rendered, it actually passes more properties to our color list component. So because the color list component is rendered by the screen component, it also has some additional prompts available. So there's a navigation object that's passed to props, and I'm going to go ahead and grab it within my color list component. And I could use this navigation object to navigate between screens. So down here in our flat list component, when we render each of these color buttons,
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=93)** I'm going to go ahead and add an on press property to each color button. And when the user presses the color button, I'm going to call navigation.navigate, and I want to go to the details screen. So I'm going to go ahead and reference that screen by name. So now if we go try it out. So what you'll see is when I click on green, I'm over on the color detail screen and react navigation has already added the functionality to get back to the previous color lists, but I don't just want to navigate to the color detail screen, I want to pass some information, specifically the color that the user just clicked on. Then the second argument of the navigate function, we can add a parameters object. And within this object, we can add any data that we want to pass along with the navigation request. In this case, I want to pass the name of the color, and that name is available to us within this render item function as item.color. So now I'll come into the color details component. This component is also rendered by a screen component. So some react navigation properties are also passed to this component. The one that I want to use is called the route, route.params points to the parameters object that we sent along with the request. So I can grab route.params.color and that should be the name of the color button that was clicked on. When I come in here and click on green, we see that we need to render color details for the green color. So to recap, our stack navigator renders a list of screens and then passes properties to each of those screens that we can use to control navigation. From our color list component, we navigate to the color details component using navigation.navigate. And we also pass the color and the parameters object.
>
> **[3:08](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=188)** The color details page can capture that color using the route property, specifically, route.params.color.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4)
> **UI Navigation:** navigate to (2), click on (2), go to (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Completing the Color Details page](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=0)** - [Instructor] So far we're successfully navigating between the list and details screens. In this next lesson, we're actually going to render some pretty specific details about each color to the user. So the first thing we want to do is display that color as the background of the screen. So on line five, I'm going to go ahead and destructure the color from route params and then on line seven, I'm going to ahead and add a style array where I overwrite the background color with the color that was passed along with the route params. Alright, so we can see the color in the background. But the other thing that we want to do, is we want to display all sorts of information about this color. To do that, I'm going to use an [[npm]] package called Color. So let me open up the terminal and we'll install the color package. Next let's import a variable called color from our color package. I'm going to rename this color parameter name 'cause that's what it is, the color name, and then I can use this name to get an instance of the color object. So all we have to do is send it the color name, and then we're going to get this object that we can do all sorts of stuff with. For instance, we can display information about our colors. Now we'll use color.rgb to return an object that gives us the red, green, and blue values for our color. I'll convert that object to a string so we can render it in this text element. We can also get the HSL values for our color, and I will convert those to a string. There's all sorts of information about the color that can be obtained using this color package. In this last text component, we'll use color.luminosity to give us the lightness value of the color. Luminosity is a number that tells us
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=94)** how light or dark our colors are. Colors that are darker, have a luminosity value that's closer to zero, and colors that are light or bright will have a luminosity value that's closer to one. So let me create a variable up here called text color so that we can display the text using the inverse of the color that was sent. color.negate will return the inverse color, and then we will convert it to a string, and then use it in each of these text elements. Whoops, I forgot to define my variable was a constant.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=125)** So I'll go ahead and add the same text color to all the other text elements, and I'm also going to take my little text color style and add a font size of 30 so that we can see this information. We can come in and test our app, and we can also see specific information about our red or blue colors. So to recap, the color details component receives the color as a route param, we're using that color to create an instance of a powerful color object using a special npm package called Color, and we can use this color object to give us all sorts of information about the color. Thus far we've created a pretty cool application. We can add colors to our application, and then we can click on those colors to see specific details about each color. This is going to be the last iteration that we take on this application for this course. But I challenge you to continue to make iterations on this application, by adding features that you might find useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2)
> **CLI Commands:** npm (2), make (1), find (1)
> **Env Vars:** hsl (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)

#### [Fetching data](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=1)** - [Instructor] Whenever you're building [[React Native]] applications you're going to need to be able to get information from the internet and send information to it. To demonstrate this we're going to build a new application that gets some information from the internet. And I'm going to build this application using the Expo Snack tool. So remember Expo Snack is a pretty powerful InBrowser IDE that we can use to get started building React Native applications. So whenever you create a new Snack, Expo gives you some default code. You might notice some fun things in this code. Like you can get constants from Expo Constants and then we can use that value within our CSS to get the exact status bar height for each device. So I'm going to come in here to the center of this code and I'm going to delete our default app component. We're going to go ahead and create our own component and our component is going to be a function. So as you can see as I make changes Expo Snack is already giving us a preview which is an error because our app isn't returning anything. So I'm going to use a special type of view called the safe area view. And our safe area view is just like a regular view, it just makes sure that it renders the view in the main area of our screen. Now within the safe area view I'm going to add a scroll view. This view also works like a regular view but it can hold a lot of content which you can scroll to by dragging the screen. I'm going to go ahead and add a text component that renders a to-do message to load a pet and this'll probably be a good time to tell you about the application that we're building. This is going to be a random pet generator. We're going to load the name and image of a pet randomly from the internet and display it on the screen. So in order to do that we're going to need a state variable where we can save the pet. So using the useState hook I can create our pet variable as well as our function for setting the pet variable.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=96)** Now if we don't have a pet I'm just going to return null. Returning null doesn't cause an error it just doesn't render anything. Remember the useEffect hook takes in a function and a dependency array. If I leave this dependency array empty this useEffect hook will be invoked once after my component is initially rendered. So I'll just go ahead and make a call to a function called loadPet. Because loading data from the internet requires an asynchronous request it's just easiest to make the loadPet function an async function. So where can I [[Fetch]] information from? We're going to use a little API called the pet library. So at pet-library.[moonhighway.com/api/randompet](https://moonhighway.com/api/randompet) and when you make a request of this route you're going to get a [[JSON]] object that contains details about a pet at random. So that's what we want to do, we want to load this object within our application. So I'm going to go ahead and copy the URL and that's the route that we're going to use for our fetch request. Once we receive a response we can parse the data in that response as JSON simply by awaiting a res.json request. Let's test it out. I'm going to go ahead and just log the data to the console. Then I'm going to test this on an iOS device using Expo Snack. Expo Snack gives us the ability to see our console logs by clicking on this little Editor menu and then turning the Panel on. So within the Panel we get to see errors and logs. And if I scroll down here you can actually see our application has rendered and we've logged a pet to the console. So we don't want to log this pet to the console, we actually want to use it. I'm going to go ahead and call set pet with the data that was returned from our fetch request. So for right now I'm just going to go ahead
>
> **[3:08](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=188)** and render the pet name and the pet category. And I can also render a picture of the pet into an image component. So to do this I'm going to send the image source, a URI of pet.photo.full to use the full size image. Let me create some styles for this image and also I need to import the image component. Doing so we see our application refresh and we see a picture of Luna the dog. So in this application we made a fetch request to an API which gave us some random information about a pet. We then rendered that information on the screen including that pet's name, their category as well as the full sized image of that pet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[JSON]] (3), [[React Native]] (2)
> **Env Vars:** api (2), json (2), ide (1), css (1), url (1)
> **Code Identifiers:** useeffect (2), loadpet (2), usestate (1), ios (1)
> **CLI Commands:** make (4)
> **Analogies:** picture (2), just like (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** res.json (1)
> **URLs:** [moonhighway.com](https://moonhighway.com) (1)

#### [Using RefreshControl](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=1)** - So far, we broke ground on a new application using Expo Snack. This application loads information about a pet at random from the internet, and then renders that information on the screen. Right now our application is loading and displaying only one pet. In this lesson, we want to give our users the ability to refetch another pet. So let's get started. The first thing I'm going to do, is import an activity indicator to handle our latency a little bit better. So in the initial render, instead of rendering just no, I'm going to go ahead and render an activity indicator. So our users see a loading animation, which lets them know that we're requesting the initial data. Instead of using a button, we want users to be able to load another pet, simply by dragging the screen down. So I'm also going to include a component called refresh control. This component will indicate when we drag the screen down, and it will also display a loading animation while we are making our requests. So because we're dealing with latency and requests, I need to create a state variable for loading. And whenever we start to load a pet, I'm going to set the loading variable to true, and then once we have successfully loaded a pet, I will set the loading variable to false. So now we have a variable that lets us know the loading state of our request. So I'm going to use that variable in my refresh control, the refresh control is rendered as a property of our scroll view. And this property will point to a refresh control component. The refreshing property of this component, is whether or not we're loading or making the data requests. And when the user triggers a refresh by dragging down on the screen, we want to invoke the load pet function. So now every time I drag down on the scroll view, I'm loading a new pet, we see a little spinner which lets us know
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=93)** that we're making an asynchronous request for each of these pets. Now, for users on a slow 3G network, I want to make sure that I load not only the request, but the full pet image file, before rendering the new pet within our component. And I can do that, by going to our load pet function and on line 21, awaiting an image prefetch. So this line tells [[JavaScript]] to pause, once the full image has completely loaded, we'll set the pet data, and we'll set the loading value to false. So now, when we refetch each pet, we'll make sure the full image is loaded before rendering a new pet component. We built this random pet generator pretty quickly using Expo Snack. It shows us that we can load data into our applications by making [[Fetch]] requests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Fetch]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - so (1)


### 6. Building Your Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing an iOS simulator](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=1)** - The best way to tests Native applications is on the device itself. If you don't have access to the device itself you can install simulators. The IOS simulator comes with [[Xcode]]. So in order to install it we need it install Xcode. So I can come in here and go to the app store and search for Xcode. Once we find it we will simply click install and Xcode we'll be downloaded and installed on our MAC. So with Xcode installed I'm going to come into our ColorCatalog application and run [[npm]] start. Doing so will start our Expo Bundler project and get our tunnel up and running and once our tunnel is ready you'll notice a button over here that says run on IOS simulator. When I click this button, Xcode will find your default IOS simulator and then run the current project within that simulator. Sometimes Expo gets hung up and doesn't complete this progress successfully. When this happens, or if it feels like something went wrong go ahead and come over into the window and click on run in simulator again and it will complete the process. When we use the IOS simulator with Expo, the Expo is installed locally on the simulator and you preview your application through the Expo application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (6), [[npm]] (1)
> **Env Vars:** ios (4), mac (1)
> **Prerequisites:** install (4)
> **CLI Commands:** find (2), npm (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - the (1)

#### [Installing an Android AVD for Mac](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=1)** - [Instructor] The best way to test out a [[React Native]] application is to use an [[Android]] device. But if you don't have access to the device, you can use something called an AVD, an Android Virtual Device. In this lesson, we'll show you how to set up Android Studio on a Mac and configure an Android virtual device. The Android Studio is an IDE for developing [[Java]] applications that run on the Android platform. First, we need to download it. So I can do a quick [[Google]] search for Android Studio. And the first link we see is, download Android Studio and SDK tools. And the page itself has checked my operating system. It knows that I'm on a Mac and has selected the appropriate download. So I'll just click on the Download button. I'll agree to the terms and conditions and our download begins. Once we have our DMG downloaded, I go ahead and open it up. And I'll just drag Android Studio into the Applications folder to install it. So once installed, you'll find Android Studio within your applications. I can simply come over here and run it. And since we installed this application from the internet, I have to okay, it's used before opening it. When we initially open Android Studio, there's some configuration that needs to be done. So I don't have any configuration settings, so I'm not going to import them. And I'll go ahead and send [[Statistics]] to Google so they can improve this product. Choose the standard setup for Android Studio, as well as set my default theme to light and Android Studio will run through its initial configuration. When we come to the Android Studio home screen,
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=94)** we can come down here to this configure menu and select a AVD manager. This is where we manage our Android virtual devices. So the first thing I need to do is, create a new virtual device. We can create all sorts of devices from TVs to wearables, even automotive devices. I'm going to create a phone and the phone that I'm going to create will emulate the Pixel XL. Next I need to choose the system image for my phone or the version of Android that is currently running. We have a lot of options which allow you to test your applications on all sorts of Android devices, running previous versions of Android. I'm simply going to select the Q version. And on this last screen, I can give this device a custom name, my phone. And when I click finish, we will create the virtual device. You can create as many virtual devices as you want. You'll see them show up in this list here. Clicking on the Play button next to each device, will start that virtual device. And I already have my color catalog project running. So I can come over here to our Expo Bundler window, and then click run on Android device or emulator. Expo knows to find whatever Android emulator I have running, install Expo on that emulator and then run my projects using Expo. This might take a few seconds. And if anything gets hung up, clicking on run on Android device again, might solve the problem.
>
> **[2:59](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=179)** Here we can see our color catalog running within an Android virtual device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (22), [[Google]] (2), [[React Native]] (1), [[Java]] (1), [[Statistics]] (1)
> **Prerequisites:** configure (2), install (2), set up (1), setup (1)
> **Env Vars:** avd (2), ide (1), sdk (1), dmg (1)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Installing an Android AVD for Windows](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=1)** - [Instructor] The best way to test out your application is to always use it directly on a device. However, when you don't have access to a specific device, you can set up an [[Android]] Virtual Device in a [[Windows]] environment. In this lesson, I'm going to show you how to install Android Studio and set up an Android Virtual Device on Windows. So let's go ahead and open the browser and do a [[Google]] search for Android Studio. The first link that you see is the link to download the Android Studio and SDK tools. When you navigate to this page, it'll check your current operating system and provide a download link for that operating system. I'm going to go ahead and click download Android Studio and I will agree to the terms and conditions. So here, our download is complete. I'm going to go ahead and open our installer and then I will just follow the instructions. So I'm going to go ahead and set up Android Studio, make sure the Android Virtual Device box is checked. The default directory is fine. We'll add Android Studio to the start menu file. And we'll go ahead and let that install. When I click finish, we'll go ahead and start Android Studio for the first time. And once Android Studio boots up, we'll see this welcome screen. What I want to do is configure an Android Virtual Device. So I can click on the configure menu down here in the bottom right hand corner and select the AVD manager. This is where I can create virtual devices and you can create all types of Android virtual devices. Over here in the category menu, you can select from TV to wearables, to even automotive devices. I'm going to go ahead and create a phone. And the phone that I would like to emulate is the Pixel XL. On the next screen, I get to select the system image for the phone, which is the version of Android that it's currently running.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=93)** You have the option to create Android virtual devices that use different system images. So you can test your application on different versions of Android. I'm simply going to to select the Q version. On this last screen, we can name the device. I'll go ahead and call it My Phone and click finish. And now here's our menu of Android Virtual Devices. In order to get this device started, I'm just going to click play next to this first one, which is My Phone. And we start up the Android emulator for the Pixel XL. We'll go ahead and let Google load on that emulator. And now I can open up my command prompt and from the ColorCatalog folder, I'll go ahead and run an [[npm]] start. This will run an expo start and we will start up our expo host in our Metro Bundler. And then I can click Run on Android device emulator, and it will go ahead and open up my application within the emulator. So we can see here's our emulator. And we can see the [[JavaScript]] bundle is building. And finally, we have our ColorCatalog running in an Android Virtual Device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (20), [[Windows]] (2), [[Google]] (2), [[npm]] (1), [[JavaScript]] (1)
> **Prerequisites:** set up (3), install (2), configure (2)
> **UI Navigation:** select the (3), open the (1), navigate to (1), click on (1)
> **Env Vars:** sdk (1), avd (1), npm (1)
> **CLI Commands:** make (1), npm (1)
> **Tools:** command prompt (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Publishing your Expo project](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=0)** - [Instructor] Most of the functionality for a [[React Native]] map is found within the [[JavaScript]] bundle which is great because if you can update the JavaScript bundle, that means you can push application updates directly to your user's phone. Expo already provides the infrastructure and the environment to do this. In order to take advantage of it, we need to publish our project to Expo. So I currently have the color catalog up and running. Here we can see it in the iOS simulator. We also have our Expo Metro Bundler running and our tunnel up and our application appears to be working. There are a couple things that I want to do before publishing this application to Expo. If I come to the assets folder we can see the icon and splash that we've been using for our development application. But we also have our production icon and our production splash image here so we want to make sure that Expo knows where to find those when creating our application. The app.[[JSON]] is a file that Expo uses when it builds your application. It contains important configuration details about the application. So within this file we can see that we have an icon key down here. We also have a key for the splash. So instead of using the splash PNG, I'm going to go ahead and change this to cc-splash for color catalog splash and I'm going to do the same for the color catalog icon. So there, I just changed the splash and the icon file. Additionally I can add an application description here. So we'll add a description. Catalog your colors. Save your favorite web colors and view the details.
>
> **[1:29](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=89)** We also need to make sure to manage our application version within this file as well. And for this particular app, I only want to build iOS or [[Android]] applications so I'm going to go ahead and remove the web from our Platforms array. All right. So in order to publish text though, all I need to do is come over here to the terminal. This is where the application is running. I'm going to go ahead and stop the application by clicking control + C. That will stop our process. Now whenever we make structural application changes like adding an icon and a splash image, we need to restart our application. And when I do so we can see that our expo metro bundler has refreshed. So I'll go ahead and run this in the iOS simulator. And when I do that we can see our splash screen and our application has an icon. So now we're ready to publish our application. I'm going to go ahead and open up a terminal window right within VS Code. And in order to publish our application I can use the Expo [[CLI]]. All I need to do is run Expo Publish and Expo will build your iOS JavaScript bundle, your Android JavaScript bundle, as well as place all of your assets online. Expo also provided a URL. Let's check that out. And it brings us to our project page hosted on Expo. And we can even test out the application from this page using Android devices. iOS doesn't support this feature. So there we go. We've published our bundle and it's being hosted online. In the future all we need to do is republish our bundle and those changes will automatically be pushed to everyone's device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Android]] (3), [[React Native]] (1), [[JSON]] (1), [[CLI]] (1)
> **Code Identifiers:** ios (5)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** png (1), cli (1), url (1)
> **Tools:** terminal (2), vs code (1)
> **File Paths:** app.json (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)

#### [Building for iOS devices](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=1)** - [Instructor} When you're ready to distribute your iOS application to the App store, you can use Expo to manage the build process. So at present, I have the application running. We can see that we can test the application here within the iOS simulator. But the problem is we are not testing the standalone application by itself. We're still running this application in the simulator through Expo. So we're actually looking at the Expo app, when we're running our app. So let's say we wanted to build an iOS app and add it to the simulator. The first thing that we need to do is come into the app.[[JSON]] and add some specific build details to our iOS configuration. Specifically, we need a key called bundle identifier. This is the unique identifier for your iOS application. We typically name these comm.user or organisation.application name. So in my case, the application is going to be called, com.moonhighway, my organization, .color-organizer. I then want to add my iOS build number here. With those changes made to the app.json, we can go ahead and open up the terminal, and use the Expo [[CLI]] to run expo build:iOS. And then this will kick off our iOS build. What's happening is Expo is actually using [[Xcode]] in the iOS SDKs to build your application on their servers so that you don't have to. In order to submit an app to the App Store, you're going to need an account. During the build process, Expo can link your developer account to this build. So I'll go ahead and say yes, and I can put in my Apple ID. Now Expo can talk to the [[Apple Developer]] portal on my behalf. We can also let Expo manage
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=92)** the process of building service keys for push notifications. We don't have any within our app, but I'll still go ahead and let Expo manage that process in case you want to add them in the future. You can set up your Apple provisioning on your own, but it's just easier to let Expo manage that process too. So if all that information Expo's ready to queue a build for iOS bundle. And that's the first thing that we see down here is that our build is queued. So it's waiting in line for an Expo server to open up to actually build your iOS application. And once the build does open up, we can see that that build is in progress. Now you can monitor this build using the Expo Dashboard. So I can click on this link and we actually open up a website that will give us specific details about the current build, including the logs associated with that build. So this build is in progress, we'll go ahead and wait for it to finish. Now if for some reason you killed the terminal that you started the build in it really doesn't matter because the build is happening on Expo servers. I can find out the build status using the CLI simply by typing Expo build:status, and it looks like our build has finished. So now I can download my zip application using this link. And I'll go ahead and check my downloads folder and we can see that a zip file has been created with my application. So I'm going to go ahead and copy this file name. And then I'm going to unzip it by running tar -xvzf and this will unzip our application. So the next time we take a look at the files within the download folder, we can see that we have the [ColorCatalog.app](https://ColorCatalog.app). So now I can install this iOS app onto my simulator with the command xcrun
>
> **[3:07](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=187)** or Xcode run sim control install booted [ColorCatalog.app](https://ColorCatalog.app). Booted it tells Xcode to install the application on the simulator that's currently running. And once this is complete, we should be able to come over here to the other screen. And there we can see our Color Catalog application running independently. So this is the application that we can distribute to the App Store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (3), [[JSON]] (2), [[CLI]] (2), [[Apple Developer]] (1)
> **Code Identifiers:** ios (12)
> **CLI Commands:** unzip (2), find (1), tar (1)
> **Prerequisites:** install (3), set up (1)
> **File Paths:** app.json (2)
> **URLs:** [colorcatalog.app](https://colorcatalog.app) (2)
> **Env Vars:** cli (2)
> **Tools:** terminal (2)

#### [Building for Android devices](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=1)** - [Instructor] We can use Expo to help us build our application for [[Android]] devices. This means that you don't have to install Android Studio, or the Android STK to build an application that you're ready to distribute to the [[Google]] Play Store. So here we can see the color organizer is up and running within an Android simulator. The application appears to be working, but when we test this application we're actually testing it through the Expo app. Let's go ahead and build an Android application that we can install directly on this simulator. The first thing I need to do is go into the app.[[JSON]] file and provide Android with some configuration information that it can use during the build process. Specifically I have to name the package. So in this case, we're going to do com.moonhighway.colorcatalog for the name of our Android application. Once I have that saved, I can open up the terminal and use the Expo [[CLI]] to run Expo build:Android. So doing this, we'll get asked if we want to manage our own KeyStore. We'll let Expo handle that process. And what you'll notice is that our Android build is queued. What this means is we are waiting for an available Expo server to run our build. We can actually use the Expo Dashboard to take a look at the build progress. So you can monitor the build at this link here. So if I go over to the web browser and place that link in, we can see that our status has changed to In Progress and we can also see all of the information about our Android build, including our build logs.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=92)** So there we go. Our build has finished. We have a standalone Android app. So here is the link to our application. We can go ahead and click on this Expo artifacts link and download our application. That will automatically download the APK to the Downloads directory for me. So I'll go ahead and go to the Downloads directory. So in here we can see that we have our APK file. I can go ahead and run the open dot command, which is going to go ahead and open up this folder within the finder, so we can see that file directly, because all I need to do install this file in an Android virtual device is simply drag it over the device. So by dragging and dropping this APK into our Android virtual device, it is installing our standalone application. Once installed, I can view my application. So here's our standalone color organizer. There is the icon. I can click on it and it will open up and run our Color Catalog on this Android virtual device. So Expo can manage your build for you and deliver an APK file, so that you can upload it to the Google Play Store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (14), [[Google]] (2), [[JSON]] (1), [[CLI]] (1)
> **Env Vars:** apk (4), stk (1), cli (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (3)
> **File Paths:** app.json (1)
> **Tools:** terminal (1)
> **Exercise Files:** download the (1)
> **Definitions:** means that (1)

#### [Ejecting from Expo](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=0)** - [Instructor] You could easily eject your application from Expo which would give you access to both the iOS and [[Android]] source files. In this lesson, we're going to go ahead and take a look at how we can eject the color catalog from Expo. So you'll notice, we don't have any iOS files specifically or Android files specifically within our file folder. So I'm going to go ahead and open up the Terminal, and using the Expo [[CLI]], I can run expo eject. Now be careful. This is going to eject your application from Expo which means that you now have to manage building this application on your own. You have a couple options when it's time to eject. I'm just going to select the first one. And eject to bare applications. You can also name the application for your user's home screen. I'm just going to go ahead and keep the ColorCatalog name. You can also name the Android studio project. Again, I'll keep the ColorCatalog name. And now we have ejected our application. The first thing that you can see is the application that we're trying to test has completely broken because we ejected the application and have completely changed our local file structure. Once we have successfully ejected the application, we can go ahead and take a look at the files. So you will notice that we now have an iOS folder. This is where our iOS project is based, So I could open up this project directly in [[Xcode]]. I also have access to the Android source files, so I can also take this folder and drag it over the Android Studio, and this opens up our application within the Android Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (6), [[CLI]] (1), [[Xcode]] (1)
> **Code Identifiers:** ios (4)
> **Env Vars:** cli (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=0)** - Thank you for joining me for Learning [[React Native]]. I hope you enjoyed this course. If you're curious as to where to go from here, I can offer a few suggestions. The best way to solidify your knowledge is to build your own app. So start working on your app idea. Go for a series of small goals. Lay out working screens and navigation to each screen. Build some successful [[Forms]]. Visually display your data points. If you don't have an app idea, continue working on this app. Right now, you've built an app that allows users to add colors and then look at the details for each color. But users should also be able to remove colors. Can you add that feature? What other features can you add to this app? If you don't want to work with colors, change this to a to-do app. Can you add to-dos, mark them complete and delete them? Challenge yourself. Most of [[Software Development]] is research. If there's a specific feature that you'd like to add to your app, you could probably find a component for that or an API for that already within the React Native docs. If you can't find something there, there's probably something available within the Expo SDK. Finally, there's a lot of cool stuff that you can find just by searching [[npm]]. A lot of common interactive elements have already been created, so don't reinvent the wheel. Well, that wraps up this course. Thanks for attending and I want to wish you the best of luck on your programming journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2), [[Forms]] (1), [[Software Development]] (1), [[npm]] (1)
> **CLI Commands:** find (3), npm (1)
> **Env Vars:** api (1), sdk (1)
> **Speakers:** - thank (1)


## Instructor

- [[Alex Banks]]

## Resources

- Exercise files available

## Skills Covered

- React Native

## Path Context

### In [[Become a React Native Developer]]
← [[React Native Ecosystem and Workflow]] | **5 of 5**

## Appears In

- [[Become a React Native Developer]]

## Related Courses

_Courses sharing skills:_

- [[React Native Ecosystem and Workflow]] — React Native
- [[Create a CRM Mobile Application with React Native]] — React Native
- [[From React to React Native]] — React Native
- [[React Native Essential Training]] — React Native

---

[↑ Back to top](#)