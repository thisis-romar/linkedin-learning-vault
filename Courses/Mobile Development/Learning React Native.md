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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Learning%20React%20Native.md)

![Learning React Native](https://media.licdn.com/dms/image/v2/C4E0DAQF4ot_Ik9jR6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1591718128064?e=2147483647&amp;v=beta&amp;t=h3rvWEty4vJraskkvuctgJH3B6l7TzfK3vNJd8j0b-8)

# Learning React Native

> Get up and running with React Native, the popular framework for building native applications that run on both iOS and Android using React. Instructor Alex Banks introduces you to the framework and steps through how to use it to build applications in JavaScript. Using practical examples, Alex helps you get started with components, views, and platform APIs. He takes you through setting up your first

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native) | 1h 42m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. What Is React Native?** (4 videos)
- **3. 2. Working with Expo** (4 videos)
- **4. 3. Components and APIs** (5 videos)
- **5. 4. Working with Views** (8 videos)
- **6. 5. Platform APIs** (6 videos)
- **7. 6. Building Your Project** (7 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Framework of learning React
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=0)** (offbeat uplifting music)
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=5)** - Hello, I'm Alex Banks.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=7)** Welcome to Learning React Native.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=9)** In this class, we're going to build native applications that run on iOS and Android devices with React.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=14)** React Native is a popular framework for building native applications.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=18)** You built these applications using JavaScript.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=20)** That's right, JavaScript.
>
> **[0:23](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=23)** And these applications are fast, render smoothly, and truly feel like native applications.
>
> **[0:28](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=28)** Now you might have heard that hybrid JavaScript is not the best approach for building native applications.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=33)** And in the past, this was true.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=35)** But React Native is different.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=36)** React Native uses the multi-threaded native components and APIs that ship with your device.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=41)** Look, I want to make sure that you leave this class ready to build your own applications.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=45)** And the best way to do that is to build something.
>
> **[0:47](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=47)** So in this class, we're going to build a small application called the Color Organizer.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=51)** You can get it here, just scan this QR code.
>
> **[0:59](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=59)** Open the link, and then you'll be directed to the app in the App Store or the Play Store.
>
> **[1:04](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=64)** In this course, we're going to get you working with React Native and Expo.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=68)** First, we're going to make sure your development process is dialed, then we're going to move on to the important stuff, like how to collect data from the user, how to add data points to a list.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=77)** How to incorporate navigation that allows your users to navigate from screen to screen.
>
> **[1:21](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=81)** We're even going to build a bonus app that allows you to fetch and render data from the internet.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=85)** I'm pretty excited to introduce you to React Native.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/framework-of-learning-react?u=76281980&t=88)** Hope you're ready to have some fun, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), let (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - hello (1)
> **Non-Speech:** (offbeat uplifting music) (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=0)** - This course will introduce you to React Native, but React Native isn't exactly a beginner topic.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=5)** It assumes you know something about JavaScript and React.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=8)** Now you don't have to be a JavaScript or a React expert to take this course, but you do want to understand some of the fundamentals of both.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=14)** For instance, if you don't know what a function or a component is, you might want to brush up on your JavaScript and React before taking this course.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=21)** If you've never heard of JavaScript, if you've never heard of React, you probably shouldn't start off here.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=25)** We've got some great courses where you can learn these subjects.
>
> **[0:28](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=28)** I'd recommend taking "Introducing the JavaScript Language" with Joe Chellman or "JavaScript for Web Designers" also with Joe Chellman.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=35)** You're also going to need to know React.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=36)** So if you've never heard of React, you may want to consider taking "Learning React" or "React JS Essential Training" with Eve Porcello.
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=43)** All React Native layout is based on Flexbox.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=46)** If you're good with Flexbox, you're going to soar with React.
>
> **[0:49](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=49)** Now I don't expect you to know Flexbox.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=50)** I'm going to introduce it in this course, but at some point, you might want to learn Flexbox end to end.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=55)** I recommend taking a course like "[[Advanced Responsive Layouts with CSS Flexbox]]" by Morten Rand-Hendriksen.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=62)** Now if you're comfortable with JavaScript and you understand the basics of React, then you're ready for this course.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=67)** If you consider yourself a pretty seasoned developer, you could probably pick up most of this stuff as you go along.
>
> **[1:13](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=73)** If you find the syntax or code challenging at any point, take a step back and study some JavaScript and React and then come back to this course.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=79)** I'm not going anywhere.
>
> **[1:20](https://www.linkedin.com/learning/learning-react-native/what-you-should-know?u=76281980&t=80)** Neither is React Native.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Env Vars:** css (1)
> **Analogies:** for instance (1)
> **Speakers:** - this (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has a set of exercise files that you can download and follow along with.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=4)** This will give you everything that you need to work alongside of me with the exact same files that I'm working on.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=9)** In the exercise files folder, you'll find folders for each chapter and a corresponding subfolder for each of the videos that we'll be working on code.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=16)** In each video's folder, you'll find a start folder and a finished folder.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=20)** When the video begins, I'll start working with the files in the start folder.
>
> **[0:23](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=23)** Sometimes the start folder may be blank.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=25)** In these cases we've started with a blank folder and created all of the files necessary.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=30)** The finished solution for each lesson can be found in the finished folder.
>
> **[0:34](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=34)** You're also going to need Node.js and npm set up and ready to go.
>
> **[0:37](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=37)** Sometimes if you jump to a start or a finished folder, you may need to install the dependencies to make your code work.
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=43)** In our cases, running npm install will install the required dependencies for that folder and npm start should start the application.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=51)** Use whatever favorite text editor or IDE you want to use.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=54)** I'm going to be using VS Code.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=56)** All of the files are text so you can use whatever you want.
>
> **[0:59](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=59)** In the next chapter I'm going to demonstrate an in-browser IDE called Expo Snack.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=63)** You can even use that one for the entire course if you don't want to set up a local environment at all.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=68)** Well, that's all we need to know for set up.
>
> **[1:10](https://www.linkedin.com/learning/learning-react-native/using-the-exercise-files?u=76281980&t=70)** Let's go ahead and begin learning React Native.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (3), find (2), node (1), make (1)
> **Prerequisites:** set up (3), install (3)
> **Env Vars:** ide (2)
> **Exercise Files:** exercise files (2)
> **File Paths:** node.js (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Tools:** vs code (1)


### 2. 1. What Is React Native?

#### What is React?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=1)** - [Instructor] React is an open-source JavaScript library that is used to create user interfaces, or UI.
>
> **[0:06](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=6)** It was started at Facebook.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=7)** React was designed to solve some of the challenges and complexity that Facebook engineers faced when dealing with large-scale data-driven websites.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=14)** React was originally released in 2013, and it rapidly grew in popularity, as it was adopted by tech giants like Netflix and Twitter.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=22)** The main reason for React's success is that it simplified the developer experience.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=26)** React allows developers to build small, reusable components, and then compose those components into larger components, and then compose those larger components into applications.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=35)** React is declarative.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=36)** That means the code itself describes what should happen.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=39)** For example, React's syntax describes what a UI should look like, and in RunTime, this code, these descriptions, they're used to construct the user interface in the browser, or a mobile device.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=50)** When a user interacts with your applications, things change.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=53)** They may fill out a form or press a button, or swipe the screen.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=57)** When these changes occur, React finds the most efficient way to update the user interface to instantly reflect these changes.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=63)** In the browser, the React-dom library is used to construct user interface using the browser's dom.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=68)** In a mobile application, react-native issues to construct the user interface using native components that are unique to iOS or Android.
>
> **[1:15](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=75)** React-blessed allows you to create complicated terminal or console UI with React.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=79)** There are also projects like react-360 that allow you to create render VR experiences using React.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=85)** It's possible to use React to describe any type of UI.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=88)** This includes OSX or PC Desktop applications.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=91)** There are a number of tools from electron to react-reason that will help you build native applications.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/what-is-react?u=76281980&t=96)** React is a declarative JavaScript library for designing user interfaces in the browser, on the phone, or potentially on any device that interfaces with the user.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** ios (1)
> **Env Vars:** osx (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### What is React Native?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=1)** - [Instructor] React Native allows you to use React to build native applications for iOS or Android devices.
>
> **[0:06](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=6)** If you're familiar with using React in the browser, then you know that your React components contain elements that are specific to the browser.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=12)** For example, if you were to create a Friend component to display the name and avatar image of one friend, that syntax might look something like this.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=20)** This code defines a React component called Friend.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=22)** React components are JavaScript functions.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=24)** The component returns a description for what the DOM should look like using JSX elements.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=29)** Div, heading one, and image are JSX elements that represent tags that are specific to the browser.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=36)** In React Native we don't have a browser.
>
> **[0:38](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=38)** We have a native iOS or Android application.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=41)** Your iPhone doesn't know what a div or heading one is.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=44)** An iOS device has its own native elements that are used to construct the user interface.
>
> **[0:48](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=48)** Instead of using a div, or a heading one, or an image, you'll use a View element, or a Text element, or an Image element.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=55)** These components are native to the device.
>
> **[0:58](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=58)** We're still using JSX to help us render this React component.
>
> **[1:01](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=61)** The only difference is the UI components that are used.
>
> **[1:04](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=64)** React Native has a ton of UI components that are specific to mobile devices.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=68)** Other than that, the syntax pretty much looks the same.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=71)** They're both JavaScript.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=72)** This is possible because of something called the bridge.
>
> **[1:15](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=75)** The bridge enables asynchronous communication between our React and JavaScript code and the native code environments, Objective C for iOS or Java for Android.
>
> **[1:24](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=84)** For instance, the iOS bridge will use iOS components, like UI View, UI Text View, and UI Image.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=92)** The Android bridge will use Java classes, like View, Text View, or Bitmap.
>
> **[1:37](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=97)** This is the real power of React Native.
>
> **[1:39](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=99)** Because it only uses native components, your applications run more smoothly because these components are not limited to a single thread like typical JavaScript code.
>
> **[1:48](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=108)** JavaScript runs on its own thread and asynchronously communicates with native elements via the bridge.
>
> **[1:54](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=114)** Many of the applications on your phone may have already been created with React Native.
>
> **[1:58](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=118)** Here is a showcase that shows which companies are using React Native along with specific details and project descriptions.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/what-is-react-native?u=76281980&t=124)** These companies can attest that React Native is ready, it's fast, and it's a joy to work with.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (6), iphone (1)
> **Env Vars:** jsx (3), dom (1)
> **Code Keywords:** this. (1), interface (1)
> **Analogies:** for example (1), for instance (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How React Native works?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=0)** - [Instructor] I mentioned earlier that React Native doesn't work like other hybrid JavaScript frameworks that you may have used in the past.
>
> **[0:06](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=6)** Let's take a look at why.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=8)** In the past, Web apps were built using 100% JavaScript and WebViews.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=12)** A WebView is a component that works like a mini web browser right within your application.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=17)** This means in order to get JavaScript to work within your application, you had to have the entirety of WebKit installed, along with your codebase.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=24)** And then your HTML, CSS, and JavaScript would all run in a single thread from that view.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=30)** More often than not, the JavaScript and HTML could not keep up with the user interaction, and it would cause jumpy rendering, buggy components, and sometimes even crash the app.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=39)** So even though you could program native applications using JavaScript, their quality would suffer to a point that it was better to simply use the native languages.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=46)** React Native, on the other hand, uses the native components and APIs from the device's native language.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=52)** These components are typically written in Objective-C or sometimes Swift for iOS and Java for Android.
>
> **[0:58](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=58)** JavaScript runs on its own thread and is powered by the JavaScriptCore.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=62)** These components run independently of JavaScript; they're not single threaded.
>
> **[1:06](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=66)** They communicate asynchronously with JavaScript.
>
> **[1:10](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=70)** The result is smooth rendering, and the user experience feels like a native application because it uses the same components.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=77)** Another advantage to the approach that React Native takes is the ability to dynamically update applications.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=83)** Let's take a look.
>
> **[1:24](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=84)** So you release your applications to the App Store or the Play Store.
>
> **[1:27](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=87)** The only way to get updates to the user was to submit the update to the stores and then wait for the approval process, and then the user would have to physically update the application on their phone.
>
> **[1:37](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=97)** With React Native, you still distribute your applications from the store.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=100)** The users initially download and install your application.
>
> **[1:44](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=104)** That initial install comes with the React Native and JavaScript bundle that contains all of the logic and UI for your application.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=110)** When it's time to update a React Native application, all you have to do is replace your JavaScript bundle.
>
> **[1:54](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=114)** React Native applications can update themselves when a user loads or reloads them.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=119)** The application can check for the existence of an update and load a new bundle dynamically, if necessary.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=124)** This means you can fix bugs, add features, and respond to user feedback rapidly.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=129)** So, React Native uses native components from the iOS or Android SDK.
>
> **[2:13](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=133)** JavaScript runs on its own thread.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=136)** Native components run on their own threads.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=138)** The bridge enables asynchronous communication between the two.
>
> **[2:22](https://www.linkedin.com/learning/learning-react-native/how-react-native-works?u=76281980&t=142)** The JavaScript is combined in a file that we typically call the bundle.

> [!info]- Semantic Content
>
> **Env Vars:** html (2), css (1), sdk (1)
> **Code Keywords:** let (2)
> **Code Identifiers:** ios (2)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### What is Expo?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=1)** - [Instructor] Expo is a framework and a platform that helps developers create, develop, and publish robust React Native applications.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=7)** Remember, React Native applications are Native applications.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=11)** They are written in their own native languages and they implement a bridge pattern that allows JavaScript to run in its own thread and communicate with the components that are native to the device.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=20)** The code base for these applications are hybrids of JavaScript, Objective-C, SWIFT, and Java.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=25)** If you want to build an iOS app, you need an Apple Developer account and Xcode.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=30)** If you want to build an Android app, you're going to need the Android SDK, Android Studio, and you're going to need to know Java.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=36)** Essentially, when working with React Native, you're still building a native app, so you're going to need to have a lot of computer books on your shelf.
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=43)** Learning all of this can be pretty tedious and time consuming.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=46)** What you really need is an expert who can take your code and build your apps for you.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=50)** This is where Expo comes in.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=52)** Using Expo is like adding an iOS and Android expert directly to your team.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=56)** With Expo, you simply write React Native and JavaScript code, and Expo handles all the nitty-gritty details for building iOS and Android applications.
>
> **[1:04](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=64)** The Expo platform runs online and it has worker servers that are ready to build apps for you.
>
> **[1:09](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=69)** You don't need Xcode or Android Studio or to know anything about Objective-C or Java in order to build apps with Expo.
>
> **[1:16](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=76)** Expo will handle the details for you.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=78)** The Expo platform consists of a suite of four primary developer tools.
>
> **[1:22](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=82)** This is a client application that you install directly on your device that allows you to debug your applications that you're working on.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=88)** The Expo CLI is a command line tool that will help you create React Native projects, create project code, develop and test the code on devices, publish projects, and send builds for iOS and Android to the Expo servers.
>
> **[1:41](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=101)** Expo Snack is an in-browser IDE for prototyping, testing, and sharing React Native code, and finally, the Expo SDK is an entire kit of components and APIs for use with React Native.
>
> **[1:52](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=112)** So, Expo is the perfect tool for getting started.
>
> **[1:54](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=114)** You can start working with React Native code right away, without having to worry about setting up complex development environments.
>
> **[2:00](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=120)** You don't even need an IDE to get started.
>
> **[2:03](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=123)** You can use Expo Snack.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=125)** Finally, Expo provides flexibility.
>
> **[2:07](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=127)** You can eject your Expo app and get direct access to the Android and iOS source files.
>
> **[2:12](https://www.linkedin.com/learning/learning-react-native/what-is-expo?u=76281980&t=132)** We're going to be using Expo to help us develop our React Native applications in this course.

> [!info]- Semantic Content
>
> **Env Vars:** sdk (2), ide (2), swift (1), cli (1)
> **Definitions:** is a  (3), is an  (3)
> **Code Identifiers:** ios (5)
> **Code Keywords:** finally, (2)
> **Prerequisites:** install (1), getting started (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Working with Expo

#### Installing the Expo client
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=0)** - The best way to develop mobile applications is to test those apps directly on your phone.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=5)** Now, in the past getting a React native app on your phone was a bit of a painful process.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=9)** Not anymore, thanks to Expo.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=12)** What we're going to do in this lesson is install the Expo client on our phone.
>
> **[0:15](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=15)** And this will allow us to test our application code directly on our device.
>
> **[0:19](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=19)** From [expo.io](https://expo.io), under the Tools, the tool that we're going to be looking at is the Client.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=24)** And the Client is a native app.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=26)** So it's either an iOS app or an Android app.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=29)** So in order to install the Client on my phone what I'm going to go ahead and do is go the App Store.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=36)** And I'll do a search for Expo.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=39)** If it doesn't come up under Expo, you can always do a search for [Expo.io](https://Expo.io).
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=43)** So there it is, the Expo Client.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=44)** I'm going to go ahead and install that.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=46)** And once we have the Expo Client installed, you will have this app on your phone, so you can go ahead and open it.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=53)** Now, the first time that you sign into Expo you're going to need to create an account if you don't already have one.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=57)** You can go ahead and create an account by clicking the Sign Up for Expo link and filling out this form.
>
> **[1:04](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=64)** I already have an account so I'm going to go ahead and sign into it.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=67)** There we go.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=68)** And now that I'm signed into Expo I can see details about my account, like some of my current projects or some of my saved snacks.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/installing-the-expo-client?u=76281980&t=74)** In the next lesson we're going to create our first React native app using Expo Snack.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3)
> **URLs:** [expo.io](https://expo.io) (2)
> **Code Identifiers:** ios (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Creating a Snack
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=1)** - [Narrator] In this lesson, we're going to write our first React Native application using Expo Snack.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=5)** So from this menu, I'm going to select Expo Snack.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=10)** And then I'll go ahead and open up Expo Snack.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=12)** Or you can go directly to the URL at snack.[expo.io](https://expo.io).
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=17)** When you create a new Snack, by default, you get some boilerplate code.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=21)** You can actually see that code rendered over here in the right menu.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=24)** So this message, change code in the editor and watch it change on your phone, this is actually being rendered in this text element right here.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=31)** In our preview menu, we're currently rendering this component using React Native Web.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=35)** I can also test this code in Android or IOS devices by selecting one of these tabs here.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=40)** And when I click tap to play, this code is loaded into a device emulator.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=44)** Sometimes, you might have to wait for an emulator to become available.
>
> **[0:48](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=48)** So here, we can see our default Snack code rendered in an IOS device.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=52)** Since we're new to React Native, I'd like to start with a blank file and type all of the code ourselves.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=57)** So first, we're going to import React from react.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=60)** Next, we're going to import two components from React Native, the text and the view component.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=65)** Now we're going to create our main app component.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=68)** So we're going to export a default function called app.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=71)** If you take a look on the left hand side of the screen, you'll notice our project files.
>
> **[1:15](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=75)** We are currently within the app js.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=78)** This is the entry point for all of our React Native apps that we're going to build using Expo.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=85)** So next, we're going to return a view component, and as I do, you can actually see a blank application rendered within our IOS device.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=92)** So let's go ahead and put some text out there.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=94)** With the text component, I'm going to go ahead and write hello world.
>
> **[1:37](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=97)** And as I do this, what you'll notice is Snack is automatically saving your changes for you, as well as re-rendering them in the test IOS device.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=105)** So this is working, the problem is is our hello world is jammed way up here in the left hand corner right behind our status menu.
>
> **[1:55](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=115)** If I had a few more text elements, one with red, one with green, one with blue, we will start to see that text list build below the status bar.
>
> **[2:03](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=123)** So I could actually move all of this text by adding a style to our view.
>
> **[2:07](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=127)** And we'll give our view a padding of 50 pixels.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=129)** That causes all of our text elements to be displayed 50 pixels from the top of the screen, and 50 pixels from the left of the screen.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=136)** I could even test this code out on an Android device.
>
> **[2:19](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=139)** And even though we're using the same JavaScript code, both devices have different native elements.
>
> **[2:25](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=145)** So sometimes they might look a little bit different.
>
> **[2:27](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=147)** Finally, with React Native Web, we can even run the same code in a web browser.
>
> **[2:31](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=151)** Well there you have it.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/creating-a-snack?u=76281980&t=152)** We created our first Snack, and we're able to test it directly within the Expo Snack interface.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (1), function (1), let (1), this, (1), finally, (1)
> **Env Vars:** ios (4), url (1)
> **URLs:** [expo.io](https://expo.io) (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [narrator] (1)

#### Creating a new project
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=0)** - [Instructor] In the last lesson, we created our first React Native application using Expo Snack.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=5)** But typically, we want to build applications in our own environment.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=9)** In this lesson, we're going to learn how to set up a React Native project locally, using the Expo CLI.
>
> **[0:15](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=15)** So let's start by opening up our terminal, and navigating to the documents folder, And then I'm going to create a new React Native app using Expo by running the command npx Expo init color catalog.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=26)** This is running the Expo command line tool using npx.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=29)** Expo init is going to create a brand new React Native app for us.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=33)** That app is going to be called the Color Catalog.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=35)** The first thing Expo is going to ask me is to choose a template.
>
> **[0:38](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=38)** For our first app, we're going to go ahead and start out with a blank template.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=41)** Once our application has been created for us, we can see that we have a folder called color catalog.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=46)** I'm going to go ahead and open up this file folder, and you can see that Expo has created a few files.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=52)** So this is our base application.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=55)** What I'm going to do is open up this whole folder in VS Code, simply by dragging and dropping it over the VS Code icon.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=60)** So this opens up my project in VS Code, I can see the files locally here within the Explorer.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=65)** And I'm going to go ahead and open up our entry file, app.js.
>
> **[1:09](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=69)** And as you can see, the Expo CLI also provided us some default code just like the Expo Snack does.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=77)** I'm going to go back over to my Expo Snack and copy all of the code that I created in the last lesson, and then I'm going to overwrite all of the code within the AppJS with my code.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=86)** Running npm start within this folder, starts our Expo development server.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=91)** So when we run npm start, we're actually starting a server that's running locally on port 19002.
>
> **[1:38](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=98)** This is your Expo development server, and is ready to serve your bundle to native devices to be tested.
>
> **[1:44](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=104)** So starting this server runs a development server locally on your network.
>
> **[1:48](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=108)** Expo also creates a DNS that points to the server.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=111)** This makes it possible to test your development code directly on your device, no matter how it's connected to the network.
>
> **[1:58](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=118)** We'll talk about this a little bit more within the next lesson.
>
> **[2:00](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=120)** For now I'm going to run my app locally on an iOS simulator, by clicking on run on iOS simulator.
>
> **[2:06](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=126)** Now, you're not going to be able to run your code on an iOS simulator, unless you have Xcode installed, and an iOS simulator set up.
>
> **[2:13](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=133)** If you don't have these things, don't worry, we'd actually prefer to test our applications directly on our device, and I'm going to show you how to do that in the next lesson.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=141)** If you really want to use an iOS simulator locally, you're going to need to install Xcode.
>
> **[2:26](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=146)** In chapter six, there's some bonus lessons, on how to set up and install simulators.
>
> **[2:30](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=150)** Specifically, chapter six lesson one, is how to set up Xcode and install the iOS simulator, and six two, is how to set up an Android simulator.
>
> **[2:39](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=159)** You can take that step if you want to.
>
> **[2:41](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=161)** So the Expo development server, is creating our JavaScript bundle, and then it sends it to the Expo app on the simulator.
>
> **[2:49](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=169)** And that's what allows us to test our code locally.
>
> **[2:53](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=173)** When I build applications, I actually test them directly on the device.
>
> **[2:56](https://www.linkedin.com/learning/learning-react-native/creating-a-new-project?u=76281980&t=176)** I'm going to show you how to do that in the next lesson.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (5), install (3)
> **Code Identifiers:** ios (6)
> **Tools:** vs code (3), terminal (1), command line (1)
> **CLI Commands:** npx (2), npm (2)
> **Cross-References:** in the last (2), in the next (2)
> **Env Vars:** cli (2), dns (1)
> **Exercise Files:** template (2)
> **File Paths:** app.js (1)

#### Running a project on a device
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=1)** - In the last lesson, we created our first project using the Expo CLI, we actually have the development environment for our project running locally on our computer.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=9)** With Expo, we can still test this project directly on our device.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=13)** Which is the preferred way to test a React Native app.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=16)** And what we'll notice is that we have an Expo Development Server running on localhost 19002.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=22)** You'll notice that there's a little QR code down here in the corner.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=25)** So what we can do is we can actually load this app directly on our phone using this QR code.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=30)** Now, all you need is a QR code reader.
>
> **[0:32](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=32)** Your camera is actually a QR code reader.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=35)** So if I come up here, and take a look at this, I can open it in Explore.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=41)** And here we go.
>
> **[0:42](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=42)** We see our project building our JavaScript bundle.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=46)** Once the JavaScript bundle is complete, we actually get to see our application running right here.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=51)** So, this is working because Expo is running this development server on your local network.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=56)** If we look down here at the connection, we can see a server running at my IP address.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=60)** So that's all in our local area network.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=62)** But check this out.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=63)** There's something called the tunnel.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=65)** And actually what's happening with the tunnel is Expo gives your server a DNS lookup.
>
> **[1:09](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=69)** So what we actually have is a domain name, that the Expo client can use to load your application.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=74)** This feature is going to make sure that you can test your code on your device no matter what network you're on.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=79)** Now, something else that's going on is this is actually a full fledged development environment.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=83)** What that means is, if I came over here, and I changed our code, like let's say I wanted to add some style to this text.
>
> **[1:30](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=90)** (keyboard clicking) And give it a font size of 50.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=94)** Well, what you're going to notice is as soon as I save this change, we're going to see that update happen on our phone.
>
> **[1:41](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=101)** And that's because the Expo client is communicating with this development server that it has set up on your local environment.
>
> **[1:47](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=107)** Anytime you make changes to your code base, you're going to see that code update automatically.
>
> **[1:52](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=112)** Now sometimes we might make changes that cause our phone to crash.
>
> **[1:56](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=116)** Or we might make a change that requires us to reload the app before we can see it.
>
> **[2:00](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=120)** You can do that with the Expo client simply by shaking your phone.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=124)** You'll also notice that when you shake the phone, there's some other debugging options available to you as well.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=129)** We can also add anywhere within our code a console.log.
>
> **[2:12](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=132)** And as I added that console.log the app on my phone refreshed.
>
> **[2:15](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=135)** We can actually see these logs using the development server.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=138)** So if I come over here to the expo development server, every device that I have connected will appear here in this window.
>
> **[2:24](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=144)** So this device is called, "This is not a phone".
>
> **[2:27](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=147)** That's the name of my phone.
>
> **[2:29](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=149)** When I click on this device, we can see all of the console.logs for this device here.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=152)** And we can also clear those logs by clicking on this trash can, if we wish.
>
> **[2:37](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=157)** So if I were to go ahead and shake this phone, and then reload our application, we see the message again.
>
> **[2:43](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=163)** Alright, so I'm going to come back in here to the code, and I'm going to get rid of my font size, and get rid of the console.log.
>
> **[2:50](https://www.linkedin.com/learning/learning-react-native/running-a-project-on-a-device?u=76281980&t=170)** Now we're ready to develop, debug, and test our application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), is called (1)
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** cli (1), dns (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)


### 4. 3. Components and APIs

#### Native components
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=1)** - [Instructor] All right, we're picking up right where we left off.
>
> **[0:03](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=3)** So, I currently have an Expo project created, and we're looking at the App.js file in that project.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=9)** I also have everything running.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=11)** We can see that I have Expo running, so, here, within the browser, we're taking a look at our Expo Metro Bundler, and our tunnel is currently working.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=20)** I also have a terminal window dedicated to this, so this is the terminal window where I originally ran npm-start.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=26)** All right, so now we're ready to take a look at some React Native components.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=30)** React Native comes with a set of UI components that we can use out of the box to start building applications.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=36)** We've already been using the View and Text component.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=39)** Let's go ahead and remove the Text component, and take a look at the ActivityIndicator.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=44)** First, I'll import the ActivityIndicator from React Native.
>
> **[0:49](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=49)** And this is a component, so now we can go down here and use it.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=52)** I'll display it within my view.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=55)** It has a size attribute, so I'll set the size to large, and a color attribute, so this is the color hex for the React logo.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=63)** When I click save, we notice that our application has refreshed over here in the iOS simulator, and this little spinning wheel here, that's an ActivityIndicator.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=72)** Let's import a ProgressView.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=74)** Now, the ProgressViewIOS means that this ProgressView only works on the iOS.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=79)** So, I'll go ahead and add it, and give it a progress of 0.3, or 30%.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=85)** Let's go ahead and up the progress to 50%.
>
> **[1:27](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=87)** We see the result here in the iOS simulator, and it looks like our progress bar has highlit about 50% of the bar.
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=95)** We also have a Button component that comes with React Native, and the title is the text that is displayed on the button.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=102)** So, when we click save here, we're going to see an error.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=105)** And our error is specifically telling us that we cannot find the variable Button, and that's just because we forgot to import it.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=111)** So, I'll come up here and import the button, and now when I click save, you can see we have a button.
>
> **[1:57](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=117)** The little blue text that says, click me, is our button.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=119)** And you'll also notice that there's a little warning about route error boundaries.
>
> **[2:03](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=123)** And this warning is just telling us that we're not handling our errors with the ErrorBoundary component like we would in production.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=129)** We'll take a look at that later, but just know that you'll see that warning every time you get an error, so it's okay to dismiss it.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=136)** So far, we've taken a look at the View, the ActivityIndicator, the ProgressViewIOS, and the Button.
>
> **[2:22](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=142)** Let's go ahead and add an action to the button.
>
> **[2:24](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=144)** So, in order to do that, I'm going to go ahead and create a function, and we'll call this function onButtonPress, and when the user presses a button, we're just going to go ahead and log, button press, to the console.
>
> **[2:36](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=156)** We'll also go ahead and add a timestamp to that, so you'll notice I created this string with back ticks.
>
> **[2:41](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=161)** That means it's a template string, so I can insert some JavaScript in here.
>
> **[2:46](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=166)** And what we'll go ahead and do is create a new date, which will give us a timestamp, and then we will convert that date to the local time string.
>
> **[2:54](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=174)** We'll expand a little here, so we can see the full line.
>
> **[2:57](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=177)** So, now, we have a function that will go ahead and log that the button has been pressed with a timestamp.
>
> **[3:02](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=182)** Let's add it to the Button component.
>
> **[3:05](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=185)** And we do that by adding an onPress property, and simply adding the function, so when our user presses the button, we'll invoke this function.
>
> **[3:15](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=195)** So, this is a console.log that's happening in JavaScript, and we can see it by taking a look at our Metro Bundler, and then selecting the test device.
>
> **[3:23](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=203)** So, we're using the iPhone 11, that's where we had the button click, and there we can see our message.
>
> **[3:30](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=210)** I can go ahead and click the button a few more times, and we can go ahead and see our log with different timestamps, right here inside of our Metro Bundler.
>
> **[3:38](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=218)** I'm going to open a new browser tab and do a quick Google search for React Native docs.
>
> **[3:45](https://www.linkedin.com/learning/learning-react-native/native-components?u=76281980&t=225)** Here, under the API tab, we have a complete list of all of the components that are available to us with React Native.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), this, (1)
> **Code Identifiers:** ios (3), onbuttonpress (1), onpress (1), iphone (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** warning (3)
> **CLI Commands:** npm (1), find (1)
> **Tools:** terminal (2)
> **File Paths:** app.js (1)
> **Env Vars:** api (1)

#### Native APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=1)** - [Narrator] An API is a set of classes or functions that gives developers access to an underlying operating system, service, or application.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=9)** It's an acronym.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=10)** It stands for Application Programmable Interface.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=13)** In this case, the React Native API gives us access to underlying features of the phone.
>
> **[0:19](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=19)** Currently, when the user presses a button, we are logging the button press string along with a timestamp to the console.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=25)** Both iOS and Android have native UI for alerting the user.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=29)** All I need to do is import the alert API, and instead of console logging this message, we can use the Alert.alert function.
>
> **[0:38](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=38)** Now when we click our button, the message is displayed in a native iOS alert.
>
> **[0:42](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=42)** There is also an API for dimensions.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=45)** We can use this API to get the height and width of the current device.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=50)** So I can destructure the height and the width from dimensions.get, and we want to get the dimensions of the current window.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=57)** Notice that I have placed this code outside of the app component.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=60)** That's because the dimensions aren't going to change.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=62)** So I only need to get that information once; as opposed to every single time the React component is rendered.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=67)** Now I can import a text component.
>
> **[1:10](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=70)** And we can use that text component to display the dimensions, the height, and the width.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=77)** Over here in our simulator, we can see the height and the width by pixels for this device.
>
> **[1:24](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=84)** There's also a platform API.
>
> **[1:27](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=87)** This API can be used to tell us the operating system for the current device.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=91)** So by displaying Platform.OS, we can inspect our operating system.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=96)** Here on the simulator, we see that this is an iOS device.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=100)** We can use this information when deciding which components to render.
>
> **[1:44](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=104)** For instance, if the Platform.OS is an iOS, then we will render the ProgressViewIOS because this particular component only works on iOS devices.
>
> **[1:57](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=117)** If we want to display the progress bar on an Android, we'll need to use a different component.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=122)** So we can check the Platform.OS, and if it's Android, we can use the ProgressBarAndroid.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=129)** Let's not forget to import the ProgressBarAndroid, and the ProgressBarAndroid has some different properties.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=141)** So we'll need a style attribute of horizontal.
>
> **[2:25](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=145)** Indeterminate properties set to false.
>
> **[2:28](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=148)** And I'm going to go ahead and pick a color for this progress bar.
>
> **[2:31](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=151)** That'll be blue.
>
> **[2:33](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=153)** Now we could test this code in a local Android simulator.
>
> **[2:37](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=157)** But what I'm going to do is I'm going to copy all of this code and then I can come over here to snack.[expo.io](https://expo.io).
>
> **[2:43](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=163)** And I'll go ahead and paste this code into snack, just to give it a quick test.
>
> **[2:47](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=167)** I'm running my code on an Android emulated device using expo snack.
>
> **[2:53](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=173)** And it looks like I have an error.
>
> **[2:54](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=174)** So we cannot find the variable blue, that's because the color should be a string.
>
> **[2:59](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=179)** So I go ahead and change that.
>
> **[3:00](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=180)** And we can see our application running here on Android.
>
> **[3:04](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=184)** Notice that the look and feel of the native components is different on the Android device.
>
> **[3:09](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=189)** That's because React Native is using the underlying native components and they are naturally different.
>
> **[3:18](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=198)** So let me go ahead and also make this blue change inside of my code base.
>
> **[3:25](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=205)** If you want to learn about other API's that are available to you.
>
> **[3:29](https://www.linkedin.com/learning/learning-react-native/native-apis?u=76281980&t=209)** You can find them under the API tab in the React Native documentation.

> [!info]- Semantic Content
>
> **Env Vars:** api (9)
> **Code Keywords:** let (2), interface (1), case, (1), function (1)
> **Code Identifiers:** ios (5)
> **Definitions:** is an  (2), is a  (1), stands for (1)
> **CLI Commands:** find (2), make (1)
> **URLs:** [expo.io](https://expo.io) (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Creating style sheets
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=1)** - [Instructor] React Native handles styling UI components with an abstraction that's based on CSS.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=7)** Let's take a look.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=8)** Currently we have a view and three text elements, and if we look in our simulator, we can see that the text is really small and everything's jammed way up here in the left corner, behind the clock.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=22)** Let's add some styles to make this text readable and visible.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=25)** First, I'm going to go ahead and import the style sheet object from React Native.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=29)** And then I like to add my styles below the component.
>
> **[0:32](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=32)** So down here, on line 14, I'm going to go ahead and create a new constant called styles and we'll use StyleSheet.create to create a new style sheet where we can add various styles.
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=43)** Let's create a style object for page that we'll add to the view and we'll add a margin top of 40 pixels.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=50)** Doing this adds 40 pixels to the top of the view, which pushes our content down below the status bar on the clock.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=55)** Notice that margin top is CSS like, but it's not exact CSS.
>
> **[1:01](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=61)** In React Native all of the CSS style attributes are camelCase.
>
> **[1:06](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=66)** That means instead of margin hyphen top, marginTop is one word with a capital T.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=71)** The same is true for backgroundColor, which is also one word where the C is capitalized.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=77)** This gives our view element a background color of light gray.
>
> **[1:21](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=81)** Let's create some styles for text.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=83)** I'll add a font size of 22, and we need to make sure that we add a style attribute to each of our text elements that points to this text class.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=92)** There we go.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=93)** We made the text a little bit larger.
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=95)** We can also add a color attribute to the text, which makes all the text red.
>
> **[1:39](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=99)** And we can add a background color attribute, which makes the background color for each of these texts, elements yellow.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=105)** We can also add some space between the elements by adding a margin of 10.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=110)** The margin refers to the area around each text element.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=113)** By adding padding, we're adding some space to the inside of each text element before the text.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=119)** These style attributes are based off of the CSS box model, which allows us to accurately space things on a screen.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=125)** We can add as many objects as we want to our style sheet.
>
> **[2:08](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=128)** I'll add another object here for selected texts, in our selected text object, I'm just going to go ahead and inverse the colors.
>
> **[2:15](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=135)** So the background color will be red and the text color will be yellow.
>
> **[2:19](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=139)** Each style object needs to be added to the style attribute of every element that we want to display those styles.
>
> **[2:25](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=145)** And we can add multiple style objects to a single element using an array.
>
> **[2:30](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=150)** And we can see here that the green element is displaying both of these style classes.
>
> **[2:35](https://www.linkedin.com/learning/learning-react-native/creating-style-sheets?u=76281980&t=155)** First it displays the text class and then the color and background color are overwritten with the selected text class, making this element look selected, the React Native documentation contains more information about how to style your user interface using react native.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (1), class, (1), interface (1)
> **Env Vars:** css (5)
> **Code Identifiers:** camelcase (1), margintop (1), backgroundcolor (1)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Flexbox layouts
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=1)** - [Instructor] Layout and React Native is based upon Flexbox, a popular layout module for CSS.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=7)** Flexbox gives us the ability to compose styles that can position elements anywhere on a screen.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=13)** In Flexbox, there are flex containers and flex elements.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=17)** In this case, the view will be our flex container, and it contains three flex elements, each one of these text elements.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=25)** Flex containers either display their child elements in a row or in a column.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=30)** Now by default, the containers display these elements in a column, but if I want to change that, I can just add a flex direction attribute and set that to row.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=39)** Now the text elements are lined up in a row.
>
> **[0:42](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=42)** You can also add a justify content attribute to flex containers that tell the container how to space and position the child elements.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=50)** Those elements can be positioned to the center or flex start which is the left which is the default, or flex end which is the right which is the end.
>
> **[1:04](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=64)** You can even add space between which evenly adds space between each element or space around, which evenly adds space between each element, including some space to the beginning and end of all of the elements.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=78)** The flex attribute can tell a flex element how it should fill up the space.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=83)** Adding a flex of one to the text elements evenly distributes their width across the row.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=88)** Because each of these elements are distributing their width to expand the full column, justify content on the parent no longer matters.
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=95)** And I want to make sure the text within each element is centered.
>
> **[1:39](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=99)** So our view is a flex container, but it's also a flex element.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=102)** Its parent at this stage is the root, so adding a flex of one to the page element is going to cause it to fill up the whole screen because it's expanding to fill the full column, which is the default flex direction.
>
> **[1:54](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=114)** When the flex direction is row, justify content positions the content horizontally along the X axis.
>
> **[2:01](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=121)** To position content along the Y axis, you use align items.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=125)** So setting align items to the center aligns our items vertically on the page along the Y axis.
>
> **[2:11](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=131)** Using justify content and align items in conjunction with one another allows you to position content anywhere within a box.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=138)** In order to see this, we need to stop our text elements from taking up the entire row, so I'll go ahead and clear this flex one property.
>
> **[2:25](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=145)** Setting both justify content and align items to flex start aligns our content in the upper left-hand corner of the container.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=152)** Setting both of these values to flex end will align our content in the lower right-hand corner of the container.
>
> **[2:40](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=160)** Setting justify content to space around and align items to flex start will evenly position all of our items horizontally and align them vertically at the beginning.
>
> **[2:50](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=170)** Each individual flex element also has the ability to align itself using these values.
>
> **[2:56](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=176)** So if I take our selected text and I align that to flex end, we see the green text at the bottom, but the red and blue values are still at the top of our container.
>
> **[3:05](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=185)** Justify content and align items work based upon the flex direction, so when the flex direction is column, justify content will now position elements vertically and align items will align elements horizontally.
>
> **[3:19](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=199)** Flexbox can be a little tricky to get the hang of at first, but there are tons of resources online for it because this is also a layout module for CSS.
>
> **[3:27](https://www.linkedin.com/learning/learning-react-native/flexbox-layouts?u=76281980&t=207)** [CSS-tricks.com](https://CSS-tricks.com) has a really neat guide to Flexbox that really does a good job of explaining all of the relationships between flex containers and flex elements.

> [!info]- Semantic Content
>
> **Code Keywords:** module (2), default, (2), case, (1), this, (1)
> **Env Vars:** css (3)
> **CLI Commands:** make (1)
> **URLs:** [css-tricks.com](https://css-tricks.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The Image component
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=1)** - [Instructor] Let's take a look at how we can add some images to our UI.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=4)** In our local files, under the assets folder, you will find a couple of pictures of cats.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=8)** There's a biscuit.jpg and a jungle.jpg.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=13)** Let's go ahead and load and display these images.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=16)** You can import a local image file just like you can import a component.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=20)** So we'll go ahead and import our picture of Biscuit into a variable called picBiscuit.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=26)** Now, instead of using this text component to display our to do message, I'm going to go ahead and replace it with an image component that we'll use to display the image.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=35)** I'm also going to change this style class from text to image and remove all of the properties since these will eventually hold all of the styles for an image.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=44)** Now all we need to do to display the image is use the image tag, change our style to reference styles.image and we can add our picture to the source attribute of the image tag.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=55)** The image element has its own set of style properties.
>
> **[0:59](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=59)** For instance I can set the resize mode to center and that will resize the image and position it to the center of the screen.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=67)** Let's also go ahead and import that picture of Jungle.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=72)** And I'll copy this image tag and paste it in here and then change the source to picJungle.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=77)** Now these pictures aren't the same size so I'm getting some funny output with this resize mode, I'm going to go ahead and clear that out.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=86)** And I'll go ahead and add a flex of one and we'll let flexbox dynamically resize these images.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=92)** borderRadius will allow us to round the corners of these images, giving them a margin of 10, we'll give them some space.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=102)** Now I can also set the width for these images but different phones have different screen widths, so I won't be able to guess the exact width.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=110)** That's where the Dimensions API will come in handy.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=113)** So let me go ahead and import the Dimensions API and then we can use it to set the width of the image to the width of the screen.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/the-image-component?u=76281980&t=124)** Because these images have a margin of 10, I'm just going to go ahead and subtract 10 from the width so we can see a little bit of white around each image.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Analogies:** picture (3), just like (1), for instance (1)
> **Code Identifiers:** picbiscuit (1), picjungle (1), borderradius (1)
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Working with Views

#### Responding to touches
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=1)** - Thus far, we've learned how to create and layout user interfaces.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=5)** It's time to learn how to interact with them.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=8)** We already have a user interface laid out.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=10)** So we have a container view, and it contains two text elements.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=14)** Each of these text elements are styled like buttons, and they're being displayed in a column, which means that each of these text buttons are listed vertically on the screen.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=22)** We want to make this user interface interactive.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=24)** So, when a user presses either of these buttons, we want to see the background color change.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=29)** And for that, we're going to need to useState.
>
> **[0:32](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=32)** useState is a special kind of function that ships with React.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=35)** It's called a Hook.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=36)** And we use it to hook functionality up to our components.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=39)** In this case, we want to save the value for the background color and state, and we also want to be able to change that color.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=45)** So both the background color and a function to change the background color can be destructured from the array that's returned by the useState Hook.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=53)** Take a look at this useState Hook.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=55)** The syntax seems funny, but the reason it returns an array is because array destructuring allows us to name these values whatever we want.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=63)** The first value is always the state value.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=65)** In this case, it's the background color, so we'll name that variable backgroundColor.
>
> **[1:09](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=69)** The second value is a function that we use to change the state value.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=74)** So we want to call it setBackgroundColor.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=77)** This syntax provides us flexibility when naming our state variables.
>
> **[1:21](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=81)** Let's go ahead and add this background color to the styles for our view.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=86)** The reason this background color is a state value in the first place is because we want to change it.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=91)** So I'll add an onPress property to the green text element.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=94)** Now, when the user presses the green text element will set the background color to green.
>
> **[1:41](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=101)** And we can see this interaction working in the simulator over here.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=105)** So I'm going to go ahead and copy this onPress property and paste it into the red text element.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=113)** Only when the user presses the red text element will change the background color to red.
>
> **[1:58](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=118)** So to recap, we've made our application interactive by adding an onPress property to each of these buttons.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=124)** When the user presses a button, we change the state value for the background color.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=129)** The useState Hook comes with everything we need to do this.
>
> **[2:11](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=131)** It provides us with a state value, the background color, and a function to change that state value, the setBackgroundColor function.
>
> **[2:19](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=139)** Additionally, whenever we call the setBackgroundColor function and change the background color, this useState Hook causes the app component to be rerendered with the new state value.
>
> **[2:29](https://www.linkedin.com/learning/learning-react-native/responding-to-touches?u=76281980&t=149)** Pretty cool, huh?

> [!info]- Semantic Content
>
> **Code Identifiers:** usestate (6), setbackgroundcolor (3), onpress (3), backgroundcolor (1)
> **Code Keywords:** function (6), interface (2), case, (2), let (1), this. (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - thus (1)

#### Using a touchable highlight
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=1)** - [Instructor] The touchable highlight is a component that we can use to make an entire group of elements respond to a touch.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=7)** Currently when the user presses either of these text elements we're changing the background color of the containing view.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=13)** Instead of adding the onPress property to the text handler, let's use a touchable highlight.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=18)** The touchable highlight will allow us to add press events to an entire group of components.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=24)** So I'm going to go ahead and remove both of these text elements and I'm going to add a touchable highlight.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=30)** Under this touchable highlight I'll also add a view.
>
> **[0:32](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=32)** Within the view we'll display the word yellow inside of a text component.
>
> **[0:37](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=37)** We already have some styles in our stylesheet here for a button so I'm going to go ahead and add the button styles to our TouchableHighlight.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=44)** When I save this you'll see that we have a little warning over here.
>
> **[0:49](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=49)** So this warning here says that we have a failed prop type.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=52)** Font size was supplied to TouchableHighlight.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=54)** So React Native doesn't use actual CSS.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=57)** It's not a web browser.
>
> **[0:58](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=58)** Instead React Native styles are based upon CSS.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=62)** This means that only certain styles can apply to certain elements.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=65)** So this warning here is telling us that a touchable highlight cannot have a font size.
>
> **[1:10](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=70)** It also will not display the textAlign property.
>
> **[1:13](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=73)** We'll create a new style class for buttonText and we'll add this font size and this textAlign property to the buttonText.
>
> **[1:21](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=81)** And we'll add this new buttonText style class to the text element.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=86)** In addition to adding the text for Yellow, I would also like to add a small color swatch to show what yellow looks like.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=91)** We'll do that by adding a view and creating a new style class called sample.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=100)** These will be the styles for our color swatch.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=103)** So we'll give our little swatch elements a height of 20, a width of 20, and a placeholder background color for white.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=110)** Whenever you add a border radius that's greater than half of the width and height, you get a circle.
>
> **[1:55](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=115)** Now I'll go ahead and make this watch yellow by adding an addition style where I hard-code the background color as yellow.
>
> **[2:01](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=121)** Later on we're going to change this yellow value into a property and that's why we're adding the background color here.
>
> **[2:08](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=128)** By default our swatch and the text yellow are being displayed in the column so I'm going to go ahead and add a style class for row.
>
> **[2:20](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=140)** And we'll make the flexDirection row.
>
> **[2:25](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=145)** We'll also align the items to the center and we'll go ahead and give these elements a little space by upping the margin.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=152)** I'm also going to add a background color.
>
> **[2:34](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=154)** And I could make the background color white, but what I want to do is make a transparent background.
>
> **[2:39](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=159)** I can do that by setting the color with rgba, which stands for red, green, blue, and alpha.
>
> **[2:45](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=165)** So the first value is 255 for red, 255 for blue, 255 for green, and .8 alpha.
>
> **[2:51](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=171)** This makes the background color white with a little bit of transparency.
>
> **[2:57](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=177)** Now we can add the on press property to the TouchableHighlight making the whole group of elements clickable.
>
> **[3:02](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=182)** So when we press the TouchableHighlight we'll set the background color to yellow, and we can also add an underlayColor property to the TouchableHighlight which will go ahead and highlight the button that we pressed.
>
> **[3:15](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=195)** When we press the button we can see that this whole group of elements has been selected.
>
> **[3:19](https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=76281980&t=199)** Everything has a nice orange highlight and we're still able to change the background color to yellow.

> [!info]- Semantic Content
>
> **Code Identifiers:** buttontext (3), textalign (2), onpress (1), flexdirection (1), underlaycolor (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1), means that (1), stands for (1)
> **Warnings:** warning (3)
> **Code Keywords:** let (1), type. (1)
> **Env Vars:** css (2)
> **Speakers:** - [instructor] (1)

#### Extracting a custom component
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=1)** - React allows us to isolate our code into reusable components.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=4)** In the last lesson, we composed several components to created a single color button.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=9)** So some button that displays the name and swatch of a color and is also clickable.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=14)** Clicking on the color button actually changes the background color.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=17)** Let's move this code into a reusable component called the color button.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=21)** I'll create a function for the color button and we will copy and paste the entire touchable highlight and we'll return it from the color button function.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=31)** Every color button can't be yellow, so we're going to need to take in the color from the color button as a property.
>
> **[0:38](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=38)** I'm going to add a property called background color.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=41)** I'm not going to hard code the background color of the swatch to be yellow.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=44)** We'll get that from the prop.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=46)** Additionally I'm not going to display the word yellow.
>
> **[0:49](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=49)** I'll display the value of the incoming background color property.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=53)** Now we have a color button component that's ready to take in a background color property and display that property as the color name and swatch.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=62)** Let me come down here and use it.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=63)** I'll create a color button with the background color red.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=68)** And when I save this, we can see our red color button with red swatch.
>
> **[1:13](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=73)** We're going to go ahead and copy and paste this red color button and create several color buttons.
>
> **[1:20](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=80)** So we'll have a green, a blue, a yellow, and a purple.
>
> **[1:24](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=84)** We only need to define the color button component once and then we can reuse it to create several color buttons.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=91)** We still need to make these color buttons clickable.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=93)** Right now clicking on a color button won't change the background color.
>
> **[1:37](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=97)** Within the color button, within the on press property of the touchable highlight, we're calling set background color.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=103)** But the color button doesn't have a set background color function so instead, we're going to add a function property to the color button called on press.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=111)** When we press the touchable highlight, we'll go ahead and invoke the on press property and pass the current background color back as an argument.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=119)** You may have noticed that I've defaulted this function property to a silly function.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=122)** F arrow F.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=124)** This is just a dummy function value.
>
> **[2:06](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=126)** It can be invoked, but it does nothing.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=129)** This makes the on press property optional so if the parent doesn't define an on press, our application won't break if somebody presses the touchable highlight.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=138)** Now I'll go ahead and add an on press property to our red color button and when the user presses this color button, we'll invoke set background color.
>
> **[2:26](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=146)** I'm going to go ahead and copy this property and add them to the rest of the buttons to make them work as well.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=152)** Now we can see that all of our color buttons are pressable.
>
> **[2:35](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=155)** Pressing each of these color buttons actually changes the background color.
>
> **[2:40](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=160)** You may be wondering why all of the on press properties equal set background color.
>
> **[2:45](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=165)** I could've added a function here and then invoked set background color from within that function, and then passed the appropriate color, but I don't need to do this because the on press property is already passing the current background color so for the red color button, the on press property is passing red as an argument.
>
> **[3:04](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=184)** There's no need for this extra wrapper function.
>
> **[3:06](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=186)** The on press property is expected to function.
>
> **[3:09](https://www.linkedin.com/learning/learning-react-native/extracting-a-custom-component?u=76281980&t=189)** I'll send it set background color and when I press any of these buttons, the background color property will be passed in the set background color function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (2), this, (1), pass (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - react (1)

#### Importing a custom component
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=0)** - [Instructor] It's absolutely fine to work with components in the same file.
>
> **[0:03](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=3)** However, once you've finished a component, it's usually a good idea to move that code base to its own file.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=9)** Let's do that with the Color Button.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=11)** I'm going to go ahead and copy the entire Color Button function and I'll come over here to my Source files.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=18)** I'm going to click this little plus folder icon to add a new folder.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=21)** I'm going to call that folder, Components, and then within the Components confolder, I'm going to create a new ColorButton.js file.
>
> **[0:28](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=28)** This is where we'll put the Color Button.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=30)** So I can collapse the current file folder and we'll paste our Color Button directly into this file.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=35)** Now that the Color Button's off on its own in a file, we need to make sure that we export it.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=39)** So I'll type export default in front of my Color Button function.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=44)** Our Color Button has some dependencies, so I'm going to go to the App.js file and just copy all of the import statements and then paste them inside of the ColorButton.js file.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=54)** Visual Studio Code has great output dependencies that we are not using.
>
> **[0:58](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=58)** So I'll go ahead and delete the useState function.
>
> **[1:01](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=61)** The StyleSheet is grayed out, but we need to use that.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=63)** So let me go into my App.js file and I'm just going to go ahead and copy all of the styles, and then I will paste them inside of the ColorButton.js file.
>
> **[1:15](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=75)** So it looks like we have style classes for button, row, sample, button text, pretty much everything except for container.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=83)** So I'll delete the container style class and that's about it.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=86)** We have isolated a reusable Color Button component in its own file.
>
> **[1:30](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=90)** Let's go ahead and close that file and go back to App.js.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=94)** We're not longer using the Text or TouchableHighlight components, so we'll remove them from our import statement.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=102)** Now we can import the Color Button from components/ColorButton.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=105)** We don't need to use curly brackets or destructure anything from this import because the Color Button is the default export from that file.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=113)** One last little bit of cleanup.
>
> **[1:55](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=115)** The only styles that are currently used by the App.js file are the container styles, so I'm going to go ahead and remove the rest.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=122)** Now the Color Button has been isolated into its own file.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/importing-a-custom-component?u=76281980&t=125)** It's reusable across our application and our App.js file is now focused on the app component.

> [!info]- Semantic Content
>
> **File Paths:** app.js (5), colorbutton.js (3)
> **Code Keywords:** let (3), function (3), delete (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** usestate (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Using a flat list
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=1)** - [Instructor] The flat list is special type of view that you can use to handle this content.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=5)** Currently, in our application, we have a small list of colors that's being rendered into color buttons.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=10)** If we take a look at our files, we'll notice that there's a data folder.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=14)** And inside the data folder, we have a JSON document for default colors.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=18)** So here we have an array of colors.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=21)** Each one of these objects has the name of a color and a unique identifier.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=26)** So let's use this array of colors to create our list of buttons.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=30)** Back in the app js file, we will import this JSON data into a variable called default colors.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=36)** And now to render this list of colors using React components, I'm going to use a special type of view, a flat list.
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=43)** The flat list is a scrollable view that you can use to render a list of content.
>
> **[0:47](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=47)** We'll render it from the app component.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=50)** So to do this, I'm going to to go ahead and self close this view.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=53)** I'm going to grab one of these color buttons and copy them.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=55)** I'm going to need that when it's time to render each list item and I'm going to go ahead and change the name of this view component from view to flat list.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=63)** Now we do want this file list to flex.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=65)** We want it to expand the full length of the screen.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=68)** However, we don't need to have justifyContent and alignItems in our container anymore.
>
> **[1:13](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=73)** So, a flat list expects an array of data.
>
> **[1:15](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=75)** So, using the data property we can pass the default colors to this flat list and we also have to provide a renderItem property.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=83)** The renderItem property has a function that will be invoked once for each item in our list.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=88)** So the flat list is going to iterate through all of the data in our array and then invoke this renderItem property once for each of these items.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=96)** For each color in our array, we go ahead and render a color button.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=100)** All we have to do is supply a value for the background color.
>
> **[1:44](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=104)** Now remember the defaultColors array contains a list of color objects.
>
> **[1:48](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=108)** Each object has unique ID and a color.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=111)** So I can use the item.color to set the background color.
>
> **[1:54](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=114)** I also need to provide a unique key property for each of these color buttons.
>
> **[1:58](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=118)** We'll go ahead and use the items' unique ID for each of these keys.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=122)** This key property is always required by React when we're working with list.
>
> **[2:06](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=126)** When we save our file, we see that we have a whole list of color buttons.
>
> **[2:11](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=131)** This list is scrollable and all of the color buttons still work.
>
> **[2:14](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=134)** We can still change the background.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/using-a-flat-list?u=76281980&t=136)** Whenever we want to render a listed data, it's a good idea to use the flat list.

> [!info]- Semantic Content
>
> **Code Identifiers:** renderitem (3), justifycontent (1), alignitems (1), defaultcolors (1)
> **Code Keywords:** let (1), this, (1), self (1), pass (1), function (1)
> **Env Vars:** json (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating a form
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=1)** - [Instructor] Let's create a small form that users can use to add their own colors to this list.
>
> **[0:06](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=6)** Within our files, under the components folder I'm going to add a new file, called ColorForm.js.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=12)** Within this file, we'll go ahead and import react from react.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=16)** We'll also import a style sheet and the view and text components from react native.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=21)** Next, we'll create the colorform component, so we'll export default function colorform.
>
> **[0:27](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=27)** This is our component, and I'm going to go ahead and return a view and just some placeholder text that says ready.
>
> **[0:34](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=34)** We'll also need a style sheet so down here on line 12 I'll create one using stylesheet.create.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=40)** We'll add a container style object to our style sheet and actually, before we start adding styles, I want to see this component so I'm going to come over to the app.js file and I'm going to import our colorform component.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=53)** Next we want to use it so I'll come down here to my app component and I'll add the colorform to the list of objects that we're going to render.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=60)** So here we have an error.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=62)** This error is occurring because a react component can only return a single child.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=67)** So it's asking me, do we want to use a JSX fragment?
>
> **[1:10](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=70)** All we have to do to make this work is use a fragment, which is essentially a component that doesn't have a name, and we can add both of these objects to the fragment which meets react's requirement to have a single child returned by the component.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=83)** You can barely see our form up here at the top of the screen.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=85)** So let's go back to the colorform.js file and start adding some styles.
>
> **[1:30](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=90)** First, we'll add a margin top of 40 and I need to make sure that I add the styles container to our view.
>
> **[1:37](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=97)** Now we can see our form pushing our content down and out of the way.
>
> **[1:41](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=101)** Let's go ahead and swap out this text component for a text input component.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=105)** The text input component will allow us to collect text input from our users.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=110)** I'll also add a button component.
>
> **[1:52](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=112)** So I need to be sure to import the button and I'll give the button a title of add.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=119)** And we can see the add button on our form, but we can't see the text component.
>
> **[2:03](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=123)** That's because we need to add some styles to tell the text input element how to fill the space.
>
> **[2:08](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=128)** So we'll give it a flex one, a border width of two and a font size of 20.
>
> **[2:13](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=133)** When I save this it's still kind of hard to see the text input component.
>
> **[2:17](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=137)** We can see the border width as a line but the text input component doesn't actually have any space.
>
> **[2:23](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=143)** It does have a flex of one which is telling it to grow into any available space, but the flex direction right now is column so there's no place for it to grow.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=152)** I'm going to change the flex direction to row and when I do this, you'll notice that the text input element and the add button are now aligned in a row, and the text input is growing for any remaining space that the add button doesn't need.
>
> **[2:46](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=166)** We'll add a margin five to cushion the text input, a border radius of five to smooth the outer edges and we'll also add some padding to get some space between the input and the border.
>
> **[3:02](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=182)** You'll notice that when I type anything into the text input, the value is automatically capitalized.
>
> **[3:06](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=186)** The text input component has a ton of various options that you can use to configure it.
>
> **[3:11](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=191)** So I'll set auto capitalize to none and now it doesn't automatically capitalize on my input.
>
> **[3:19](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=199)** And one last little tweak that I want to add is I want to make sure that these items are aligned to the center.
>
> **[3:25](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=205)** Now we have a form.
>
> **[3:26](https://www.linkedin.com/learning/learning-react-native/creating-a-form?u=76281980&t=206)** In the next lesson, we'll make it work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), this, (1)
> **CLI Commands:** make (4)
> **File Paths:** colorform.js (2), app.js (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** before we start (1), configure (1)
> **Env Vars:** jsx (1)
> **Speakers:** - [instructor] (1)

#### Collecting input
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=0)** - [Instructor] In the last lesson, we constructed the user interface for our form.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=4)** In this lesson, we're going to make the form work by collecting the user input and adding it to our list of colors.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=9)** We're going to create a controlled form component.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=12)** And what that means is React is going to control the state of our form.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=16)** So we'll need the useState hook.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=20)** We'll save the current input value in state.
>
> **[0:23](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=23)** So the useState hook is going to give me the input value and a function to change that value.
>
> **[0:28](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=28)** At first, the input value will be an empty stream.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=31)** So I'm going to come down here to the text input and add the input value to the value property.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=35)** Now when the user changes the value, we're going to go ahead and capture that change using the onChange text property.
>
> **[0:42](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=42)** This property is a function, and it will pass the current value of the text input to the function as an argument.
>
> **[0:48](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=48)** We'll send this text to the setValue function which will cause our input value to change, and the color form will be rerendered with a new input value.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=56)** All this function is doing is capturing the text argument, and then passing that argument to the setValue function.
>
> **[1:01](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=61)** So we don't need it.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=62)** We can just send the setValue function to the on change text property.
>
> **[1:06](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=66)** Whenever the input text changes, that new text will be sent directly to the setValue function.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=71)** Let's demonstrate this by adding a console.log to our component on line six.
>
> **[1:16](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=76)** And we'll just log the input value.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=78)** I'll come over to the simulator, and we'll select the text input.
>
> **[1:21](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=81)** And we'll type in salmon.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=83)** Believe it or not, this is a color.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=85)** It's kind of a pinkish color.
>
> **[1:27](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=87)** And if we come over here and we look at our expo tools, you'll notice seven log messages here.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=92)** And that's because the component has been rendered seven times.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=96)** Initially, the input value was an empty string.
>
> **[1:38](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=98)** And then every time we typed a letter, that value changed and caused the component to rerender.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=103)** We're saving the value of the input in state.
>
> **[1:46](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=106)** So this is called a controlled input component.
>
> **[1:49](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=109)** Now I'm just going to give this text input a placeholder property.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=113)** And this let's the user know that this is where they enter colors.
>
> **[1:56](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=116)** So now when the text input is empty, it will display the message, "enter a color".
>
> **[2:01](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=121)** So the next thing we need to do is capture that value when the user presses the add button.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=125)** So I'll add an on press property to the add button.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=129)** And when the user presses the button, we'll go ahead and add a console.log telling us to add the value.
>
> **[2:14](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=134)** And we'll go ahead and display that input value in the console log.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=138)** So here we go in the simulator.
>
> **[2:19](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=139)** We'll try to add salmon.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=141)** We can see our message here, "add value salmon" was added to the console log.
>
> **[2:26](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=146)** After the user adds a color, we want to clear the input value, and we also want to deselect the text input.
>
> **[2:31](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=151)** The text input didn't put itself as an object with methods that we can call, but we need some way to refer to the text input instance in order to call those functions.
>
> **[2:39](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=159)** To do this, I'll need to import the useRef hook from React.
>
> **[2:43](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=163)** And then I'll create a new reference called input using the useRef hook.
>
> **[2:47](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=167)** Now that I've created this input ref, I need to refer to this text input.
>
> **[2:51](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=171)** So I'll add the ref attribute, and make sure that we're pointing to our reference.
>
> **[2:56](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=176)** Now we can use input.current to refer to this text input.
>
> **[3:00](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=180)** Input.current.blur is going to deselect the text input and cause the keyboard to disappear.
>
> **[3:05](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=185)** Calling setValue and sending it an empty string replaces the current value with an empty string.
>
> **[3:10](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=190)** Now to test this functionality, I'll go ahead and enter a color like salmon and click add.
>
> **[3:14](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=194)** And we can see our text input has been deselected, and the input value has been reset to an empty string, making it easy for our user to enter another color.
>
> **[3:22](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=202)** Let's head over to the app.js file and take a look at how we're going to use our component.
>
> **[3:28](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=208)** Here on line 11 is we're adding our instance of the color form.
>
> **[3:31](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=211)** And when there's a new color, I'd like to handle that through a property.
>
> **[3:34](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=214)** So we can say, onNewColor.
>
> **[3:36](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=216)** And that's a function that actually passes up the new color.
>
> **[3:39](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=219)** And now, we'll just leave a little alert here with a to-do message that's passing up the color that we receive in this function.
>
> **[3:45](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=225)** Don't forget to import alert from react-native.
>
> **[3:48](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=228)** So this is how we want to pass new colors from the color form to the app.
>
> **[3:52](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=232)** It's time to go back to the ColorForm.js and implement this function property.
>
> **[3:56](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=236)** So we will destructure the onNewColor property from our arguments.
>
> **[3:59](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=239)** We'll also set this default dummy function, F, arrow, F.
>
> **[4:03](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=243)** And this makes sure that the onNewColor property defaults to a function, so it won't throw errors if we call it.
>
> **[4:08](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=248)** Down here on line 21, I'm going to replace this console.log by actually calling the onNewColor function property, and then passing the input value to it.
>
> **[4:16](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=256)** Now, I'll come over to the simulator, and I'll try to use the form to add red.
>
> **[4:20](https://www.linkedin.com/learning/learning-react-native/collecting-input?u=76281980&t=260)** And when I click add, we see a little alert popup with a to-do message telling us that we need to add the color red to our list.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (3), pass (2), interface (1), this, (1)
> **Code Identifiers:** setvalue (5), onnewcolor (4), usestate (2), useref (2), onchange (1)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** app.js (1), colorform.js (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** select the (1)
> **Best Practices:** don't forget (1)

#### Creating a custom hook
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=0)** - [Instructor] React hooks give us a way to isolate and separate presentation from functionality.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=5)** In the last lesson, we created the colorForm, which will collect a new color from the user and then pass it to the app js component via the on new color property.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=13)** At present, we are simply displaying an alert, letting us know that we have to add this color.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=18)** So I'm going to get rid of the alert and I'm going to get rid of the defaultColors.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=21)** We need to capture new colors from our users and then add them to this list of colors.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=26)** So using the useState hook, we're going to create a state variable for colors.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=29)** And we also get a function for changing that state variable, set colors.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=33)** Don't forget to change the default colors to colors.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=36)** And now when the app initially renders, we see an empty list of colors.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=39)** Now on line nine, I'm going to create a new function for adding colors.
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=43)** All we have to do is send the color that we want to add to our list to this function and the function will do the rest.
>
> **[0:48](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=48)** So I'm going to go ahead and create a new color instance.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=51)** And this is going to be an object that contains a unique ID and the color that was passed to this function.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=56)** So we're going to need a package to help us create unique identifiers.
>
> **[0:59](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=59)** I'm going to use a package called short ID So let's open up the terminal.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=63)** And npm install shortid.
>
> **[1:06](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=66)** Short ID is used to generate unique identifiers.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=68)** And these identifiers are short, they're not too long.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=72)** So now that we have shortid installed, I'm going to import the generate function from the shortid package.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=78)** And we'll use the generate function when it's time to generate a new ID.
>
> **[1:22](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=82)** So when a user adds a new color, we'll generate a unique identifier.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=86)** And now what we want to do is take the new color and add it to the list of colors.
>
> **[1:30](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=90)** So to do this on line 12, I'm going to invoke the setColors function, and I'm going to pass it a new array.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=96)** That new array is going to contain our newColor and the rest of the colors.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=100)** So that's what these three dots are for.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=102)** This is the array spread operator, what it's going to do is take all of the colors that are in the current array, and then add them to the end of this new array.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=110)** Calling set colors will cause the app component to rerender.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=113)** So now down here, I'm going to get rid of the alert call.
>
> **[1:55](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=115)** And I'm going to invoke our addColor function and pass it the newColor.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=119)** Now again, creating a function that simply takes the argument and then passes that argument to the next function isn't needed.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=125)** The new color will be passed to the addColor function.
>
> **[2:08](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=128)** All right, so let's test it out.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=129)** So I will come over here and use our form to add red.
>
> **[2:12](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=132)** And now we can see red has been added to our list of colors.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=136)** So adding green also displays our green button.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=138)** So the code found here on line nine through 13 contains all of the functionality to create a new list of colors as well as the functionality to add colors to that list.
>
> **[2:28](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=148)** We can isolate this functionality into a custom hook.
>
> **[2:31](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=151)** Custom hooks are great because they separate the functionality from the presentation.
>
> **[2:35](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=155)** And they give us a way to reuse that functionality and other components.
>
> **[2:38](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=158)** So I'm going to create a new variable called use colors.
>
> **[2:41](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=161)** This is our custom hook.
>
> **[2:43](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=163)** And now what I'm going to do is, I'm going to copy line 13 through line 17.
>
> **[2:46](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=166)** And I'm going to paste it inside of my useColors function.
>
> **[2:49](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=169)** Now I've isolated this functionality into its own hook.
>
> **[2:53](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=173)** So the last thing that we need to do is we need to expose the list of colors in the addColor function to the consumer of this hook.
>
> **[2:59](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=179)** I'll do so by returning an object with the list of colors in a function for adding colors.
>
> **[3:04](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=184)** So on line 18, I can capture our colors in the addColor function from my useColors hook.
>
> **[3:10](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=190)** And if we come over here to the simulator, we can see that we're still able to add colors.
>
> **[3:14](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=194)** So we've now isolated all of the functionality for working with colors.
>
> **[3:17](https://www.linkedin.com/learning/learning-react-native/creating-a-custom-hook?u=76281980&t=197)** The color functionality is no longer hard coded into the app component.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), pass (3), let (2), for. (1)
> **Code Identifiers:** addcolor (4), newcolor (2), usecolors (2), colorform (1), defaultcolors (1)
> **CLI Commands:** npm (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Platform APIs

#### Using AsyncStorage
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=1)** - [Instructor] Thus far, we've created a small app that allows us to add and visualize colors.
>
> **[0:06](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=6)** It seems to be working just fine for us, but when we reload the application, we lose all the colors that we've added.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=12)** So we need to save these colors in some sort of persistent storage.
>
> **[0:15](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=15)** And that's exactly what AsyncStorage allows us to do.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=18)** This means it allows us to save data locally on our phone.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=22)** Let's go ahead and implement AsyncStorage.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=24)** Now I'm in the hooks.js file because the values that I want to save are our colors.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=29)** And we already have a useColors hook, that manages all of the functionality that has to do with colors.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=35)** So, first, let's go ahead and import AsyncStorage from react-native.
>
> **[0:42](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=42)** Next, we're going to need a function that we can use to load colors asynchronously, so we'll create an async function.
>
> **[0:49](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=49)** We'll create a constant called colorData, this is where we will save any data that we load from AsyncStorage.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=56)** We can load data from AsyncStorage using the getItem function.
>
> **[0:59](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=59)** Notice that I used the await keyword.
>
> **[1:01](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=61)** Don't forget to do that because AsyncStorage getItem returns a promise and we need to wait for it to resolve before we actually have any color data.
>
> **[1:09](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=69)** Then we'll need to provide the key for the data we want to load.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=72)** In this case, we'll create a key called ColorListStore:Colors.
>
> **[1:16](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=76)** Now maybe this is the very first time that you've loaded the app, and you don't actually have any color data, so we're going to to check for that using an if statement.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=83)** So if you do have color data, colorData is going to come back as a string, so I'm going to use JSON.parse to convert that string into an array of colors.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=91)** Then we'll go ahead and replace our colors and state using setColors.
>
> **[1:35](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=95)** Now we have a function that we can use at any point to load colors from AsyncStorage.
>
> **[1:39](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=99)** The next thing that we're going to add is some functionality for saving colors.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=103)** I want this useEffect hooked to fire any time our colors array changes.
>
> **[1:47](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=107)** If there's a change to the color array, I'm going to go ahead and save that change by calling AsyncStorage setItem.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=113)** I'll use the same key that we've added to the getItem call within our loadColors function, the ColorListStore:Colors key.
>
> **[2:00](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=120)** And we're going to save this data as a string, so I'm going to JSON.stringify our array of colors.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=124)** So this useEffect hook is going to be invoked any time the colors array changes, and it will save the new data from that array to AsyncStorage.
>
> **[2:12](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=132)** The other thing I need to do is initially load our color data.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=136)** This useEffect hook will have an empty dependency array, meaning that it will only get invoked once, after the initial render.
>
> **[2:23](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=143)** Now if we already have colors, meaning that there are already some items in this colors array, we're going to go ahead and break out of this hook by invoking a return.
>
> **[2:30](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=150)** Next, we're going to go ahead and invoke loadColors, which calls our colors to initially load.
>
> **[2:37](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=157)** So now we'll go ahead and test this out.
>
> **[2:41](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=161)** It looks like I have an error, so I need to make sure that I also import useEffect.
>
> **[2:46](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=166)** There we go, so let's try adding a color.
>
> **[2:50](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=170)** Every time we added a color, the colors array changed, so this useEffect hook should have fired and saved our colors.
>
> **[2:58](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=178)** When we reload our application, we still see blue, green, and red.
>
> **[3:02](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=182)** This is because the first time any component invokes this hook, this useEffect hook will fire and load our initial colors.
>
> **[3:09](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=189)** There you have it, asynchronous storage.
>
> **[3:11](https://www.linkedin.com/learning/learning-react-native/using-asyncstorage?u=76281980&t=191)** We're now saving and loading colors locally on the device.

> [!info]- Semantic Content
>
> **Code Identifiers:** useeffect (6), getitem (3), colordata (2), loadcolors (2), usecolors (1)
> **Code Keywords:** function (5), let (3), async (1), await (1), case, (1)
> **Env Vars:** json (2)
> **File Paths:** hooks.js (1)
> **CLI Commands:** make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### React Navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=0)** - [Instructor] React Navigation is a library that we can use to add functionality that allows our users to navigate from screen to screen.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=7)** In our case, we want to add a details screen for each color.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=10)** So if the user selects a color, we can go to a screen and see details about that color.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=14)** In this lesson, we're going to have to move some code around, and we're going to have to create some files.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=18)** So the first thing I'm going to do is open up the App.js file, and I'm going to copy all of the contents of this file to the clipboard.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=24)** Now with all of our app code on the clipboard, I'm going to go over to the components folder, and I'll click this icon, which will allow me to add a new file.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=31)** Let's create a file called ColorList.js.
>
> **[0:34](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=34)** And inside of our color list, I will paste the contents of the App.js file.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=39)** We'll make a couple small changes, like naming this component the ColorList instead of the App, and also, we are on the same folder as the ColorButton and the ColorForm, so I'll remove this reference to the components folder.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=50)** So that gives us a ColorList component.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=53)** Let's come over to our files and also add a new file for ColorDetails.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=57)** Now, inside of our ColorDetails file, just to prevent us from having to type a whole bunch of code, I'm also going to paste all of the code from our app.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=65)** And then we'll come into our code and prune out all of the stuff we don't want.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=68)** So first, that's any reference to other components or hooks.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=71)** We also want to use the View and the Text component, so we don't need the FlatList or the StyleSheet.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=77)** We're also not going to have states, so let's get rid of the useState import.
>
> **[1:20](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=80)** And I'll name the component ColorDetails, remove any state functionality, and then essentially remove all of the children that are being rendered.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=88)** So I'm going to go ahead and create a view where I will use the same container styles that we previously had.
>
> **[1:34](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=94)** And within that view, I'm just going to go ahead and add some text to let us know that we're on the Color Details screen.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=100)** I also want to make sure we see that text in the center of the screen, so we're going to make sure that we align the items to the center, and we justify the content to the center.
>
> **[1:47](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=107)** So now we have a ColorList component and a ColorDetails component.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=111)** And we need to switch between these components when the user selects to color.
>
> **[1:56](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=116)** So let's go into our now empty App.js file and start to write the new app component.
>
> **[2:01](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=121)** Now, if we go take a look at the documentation at [reactnavigation.org](https://reactnavigation.org), we can get to the docs by clicking on Read docs.
>
> **[2:08](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=128)** And if we take a look at Getting started, we see that we need to install React Navigation using npm, but we also additionally have to install all of these other dependencies.
>
> **[2:17](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=137)** Here's a little Expo install coming in for all of the other dependencies that we're going to need to make React Native work.
>
> **[2:23](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=143)** I'll go ahead and click this copy button and copy those dependencies to the clipboard.
>
> **[2:27](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=147)** And then I'm going to come over to the terminal window.
>
> **[2:29](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=149)** This is where our application is actually running.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=152)** And I'm going to go ahead and stop it.
>
> **[2:34](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=154)** So I'm going to go ahead and install @react-navigation/native and @react-navigation/stack.
>
> **[2:40](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=160)** Those are the two main npms that we're going to be using.
>
> **[2:42](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=162)** I also have to install all of those related dependencies.
>
> **[2:46](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=166)** I have that command saved to my clipboard, so I'll go ahead and paste it in here and run it.
>
> **[2:51](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=171)** And now we're installing all of the related dependencies as well.
>
> **[2:55](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=175)** Now that we have React Navigation, let's go ahead and use it.
>
> **[2:58](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=178)** So let's go over to the App.js file.
>
> **[3:01](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=181)** And we're going to import React.
>
> **[3:02](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=182)** We're going to import the ColorList component.
>
> **[3:05](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=185)** We're going to import the ColorDetails component.
>
> **[3:11](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=191)** We're also going to import something called the Navigation Container from React Navigation.
>
> **[3:18](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=198)** And finally, the specific navigator that we're going to create is called the Stack Navigator.
>
> **[3:22](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=202)** So we need to import the Stack Navigator function from react-navigation/stack.
>
> **[3:27](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=207)** Down here on line seven, I'm going to declare two components, the Navigator and the Stack.
>
> **[3:31](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=211)** And we obtain those components by destructuring our call to createStackNavigator.
>
> **[3:39](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=219)** And whenever we use React Navigation, the first thing that we need to do is wrap everything within the NavigationContainer.
>
> **[3:46](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=226)** Within the NavigationContainer, I can add the Stack Navigator.
>
> **[3:49](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=229)** So this is going to be the actual thing that flips between screen.
>
> **[3:53](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=233)** I didn't catch myself, and I accidentally imported the Navigator and the Stack.
>
> **[3:56](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=236)** What I needed to import is a Screen.
>
> **[3:58](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=238)** I'm going to use the Screen component to create the Details screen.
>
> **[4:01](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=241)** And we'll give this screen a name of Details, and we'll tell it to use the ColorDetails component.
>
> **[4:06](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=246)** So right now, we've added a stack navigator, and it only has one screen.
>
> **[4:10](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=250)** It also looks like I spelled ColorDetails wrong.
>
> **[4:13](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=253)** Let me go ahead and fix that in my import statement.
>
> **[4:16](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=256)** So let's go ahead and save this code and run our application.
>
> **[4:24](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=264)** And when we run our app, it looks like we have an error.
>
> **[4:26](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=266)** Okay, so the module hooks isn't available within the ColorList.
>
> **[4:30](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=270)** So the ColorList component is now within the components folder, so I need to make sure that I am importing the hooks from the correct place, which is actually one folder up from the components folder.
>
> **[4:39](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=279)** And I also deleted the style sheet when I shouldn't have.
>
> **[4:42](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=282)** So let me go over to the ColorDetails component and also import the style sheet because, yep, we did leave a style sheet there.
>
> **[4:50](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=290)** So our stack navigator is currently working, but we only see one screen, the Color Details screen that we created.
>
> **[4:56](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=296)** Within the stack navigator, all we need to do is render a screen for every screen that we want to use.
>
> **[5:01](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=301)** So I'm going to go ahead and render a home screen.
>
> **[5:03](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=303)** Now, the order matters here.
>
> **[5:04](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=304)** Because the home screen is listed first, we're going to see it first.
>
> **[5:08](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=308)** There we go.
>
> **[5:09](https://www.linkedin.com/learning/learning-react-native/react-navigation?u=76281980&t=309)** So saving this code, we can see that our home screen is now our ColorList.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), case, (1), import. (1), switch (1), finally, (1)
> **CLI Commands:** make (5), npm (1)
> **Prerequisites:** install (5), getting started (1)
> **File Paths:** app.js (4), colorlist.js (1)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** usestate (1), createstacknavigator (1)
> **Documentation:** the documentation (1), the docs (1)
> **URLs:** [reactnavigation.org](https://reactnavigation.org) (1)

#### Navigating between screens
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=0)** - [Instructor] In the last lesson we created our stack of screens using react navigation, specifically, the stack navigator.
>
> **[0:06](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=6)** And we have a home screen that renders the color list and a detailed screen that renders the color details.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=11)** What we want to do is navigate between these screens when the user clicks on any other color buttons.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=16)** But before we get started, I want to do a little bit of cleanup.
>
> **[0:19](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=19)** First, you'll notice that the title for the first screen is home.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=21)** That's because it defaults back to our name property, but we can change that.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=25)** We can add options to our screen component and rename the title, colorless.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=30)** This form looks a little funky now that we have a react navigation header rendered above it.
>
> **[0:34](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=34)** So let me come into the color form and we're going to do some CSS cleanup.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=39)** Let's get rid of the margin, and then let's also make sure that the background color for the form is white.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=45)** Here we go.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=46)** And now let's come back over to the color list.
>
> **[0:48](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=48)** So within the color list component, I'm actually going to get rid of the background color.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=53)** When we click the button, we're going to navigate to the details page, not change the background.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=57)** So I'll get rid of the on press functionality within the color button as well.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=62)** So the initial screen that's rendered is the home screen.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=65)** So that's where our navigation is going to begin.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=67)** Now, when this screen component is rendered, it actually passes more properties to our color list component.
>
> **[1:13](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=73)** So because the color list component is rendered by the screen component, it also has some additional prompts available.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=79)** So there's a navigation object that's passed to props, and I'm going to go ahead and grab it within my color list component.
>
> **[1:24](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=84)** And I could use this navigation object to navigate between screens.
>
> **[1:29](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=89)** So down here in our flat list component, when we render each of these color buttons, I'm going to go ahead and add an on press property to each color button.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=96)** And when the user presses the color button, I'm going to call navigation.navigate, and I want to go to the details screen.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=102)** So I'm going to go ahead and reference that screen by name.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=105)** So now if we go try it out.
>
> **[1:47](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=107)** So what you'll see is when I click on green, I'm over on the color detail screen and react navigation has already added the functionality to get back to the previous color lists, but I don't just want to navigate to the color detail screen, I want to pass some information, specifically the color that the user just clicked on.
>
> **[2:03](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=123)** Then the second argument of the navigate function, we can add a parameters object.
>
> **[2:07](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=127)** And within this object, we can add any data that we want to pass along with the navigation request.
>
> **[2:12](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=132)** In this case, I want to pass the name of the color, and that name is available to us within this render item function as item.color.
>
> **[2:19](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=139)** So now I'll come into the color details component.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=141)** This component is also rendered by a screen component.
>
> **[2:24](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=144)** So some react navigation properties are also passed to this component.
>
> **[2:28](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=148)** The one that I want to use is called the route, route.params points to the parameters object that we sent along with the request.
>
> **[2:35](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=155)** So I can grab route.params.color and that should be the name of the color button that was clicked on.
>
> **[2:40](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=160)** When I come in here and click on green, we see that we need to render color details for the green color.
>
> **[2:48](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=168)** So to recap, our stack navigator renders a list of screens and then passes properties to each of those screens that we can use to control navigation.
>
> **[2:57](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=177)** From our color list component, we navigate to the color details component using navigation.navigate.
>
> **[3:03](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=183)** And we also pass the color and the parameters object.
>
> **[3:08](https://www.linkedin.com/learning/learning-react-native/navigating-between-screens?u=76281980&t=188)** The color details page can capture that color using the route property, specifically, route.params.color.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (4), function (2), case, (1)
> **UI Navigation:** navigate to (2), click on (2), go to (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Completing the Color Details page
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=0)** - [Instructor] So far we're successfully navigating between the list and details screens.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=4)** In this next lesson, we're actually going to render some pretty specific details about each color to the user.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=9)** So the first thing we want to do is display that color as the background of the screen.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=13)** So on line five, I'm going to go ahead and destructure the color from route params and then on line seven, I'm going to ahead and add a style array where I overwrite the background color with the color that was passed along with the route params.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=25)** Alright, so we can see the color in the background.
>
> **[0:27](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=27)** But the other thing that we want to do, is we want to display all sorts of information about this color.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=31)** To do that, I'm going to use an npm package called Color.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=35)** So let me open up the terminal and we'll install the color package.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=40)** Next let's import a variable called color from our color package.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=44)** I'm going to rename this color parameter name 'cause that's what it is, the color name, and then I can use this name to get an instance of the color object.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=54)** So all we have to do is send it the color name, and then we're going to get this object that we can do all sorts of stuff with.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=60)** For instance, we can display information about our colors.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=63)** Now we'll use color.rgb to return an object that gives us the red, green, and blue values for our color.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=68)** I'll convert that object to a string so we can render it in this text element.
>
> **[1:16](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=76)** We can also get the HSL values for our color, and I will convert those to a string.
>
> **[1:22](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=82)** There's all sorts of information about the color that can be obtained using this color package.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=86)** In this last text component, we'll use color.luminosity to give us the lightness value of the color.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=92)** Luminosity is a number that tells us how light or dark our colors are.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=96)** Colors that are darker, have a luminosity value that's closer to zero, and colors that are light or bright will have a luminosity value that's closer to one.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=103)** So let me create a variable up here called text color so that we can display the text using the inverse of the color that was sent.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=110)** color.negate will return the inverse color, and then we will convert it to a string, and then use it in each of these text elements.
>
> **[1:57](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=117)** Whoops, I forgot to define my variable was a constant.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=125)** So I'll go ahead and add the same text color to all the other text elements, and I'm also going to take my little text color style and add a font size of 30 so that we can see this information.
>
> **[2:17](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=137)** We can come in and test our app, and we can also see specific information about our red or blue colors.
>
> **[2:23](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=143)** So to recap, the color details component receives the color as a route param, we're using that color to create an instance of a powerful color object using a special npm package called Color, and we can use this color object to give us all sorts of information about the color.
>
> **[2:41](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=161)** Thus far we've created a pretty cool application.
>
> **[2:43](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=163)** We can add colors to our application, and then we can click on those colors to see specific details about each color.
>
> **[2:49](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=169)** This is going to be the last iteration that we take on this application for this course.
>
> **[2:53](https://www.linkedin.com/learning/learning-react-native/completing-the-color-details-page?u=76281980&t=173)** But I challenge you to continue to make iterations on this application, by adding features that you might find useful.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2), make (1), find (1)
> **Code Keywords:** let (3), continue (1)
> **Env Vars:** hsl (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)

#### Fetching data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=1)** - [Instructor] Whenever you're building React Native applications you're going to need to be able to get information from the internet and send information to it.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=8)** To demonstrate this we're going to build a new application that gets some information from the internet.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=13)** And I'm going to build this application using the Expo Snack tool.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=17)** So remember Expo Snack is a pretty powerful InBrowser IDE that we can use to get started building React Native applications.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=24)** So whenever you create a new Snack, Expo gives you some default code.
>
> **[0:27](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=27)** You might notice some fun things in this code.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=29)** Like you can get constants from Expo Constants and then we can use that value within our CSS to get the exact status bar height for each device.
>
> **[0:37](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=37)** So I'm going to come in here to the center of this code and I'm going to delete our default app component.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=41)** We're going to go ahead and create our own component and our component is going to be a function.
>
> **[0:44](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=44)** So as you can see as I make changes Expo Snack is already giving us a preview which is an error because our app isn't returning anything.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=51)** So I'm going to use a special type of view called the safe area view.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=54)** And our safe area view is just like a regular view, it just makes sure that it renders the view in the main area of our screen.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=62)** Now within the safe area view I'm going to add a scroll view.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=65)** This view also works like a regular view but it can hold a lot of content which you can scroll to by dragging the screen.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=71)** I'm going to go ahead and add a text component that renders a to-do message to load a pet and this'll probably be a good time to tell you about the application that we're building.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=78)** This is going to be a random pet generator.
>
> **[1:21](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=81)** We're going to load the name and image of a pet randomly from the internet and display it on the screen.
>
> **[1:26](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=86)** So in order to do that we're going to need a state variable where we can save the pet.
>
> **[1:30](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=90)** So using the useState hook I can create our pet variable as well as our function for setting the pet variable.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=96)** Now if we don't have a pet I'm just going to return null.
>
> **[1:39](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=99)** Returning null doesn't cause an error it just doesn't render anything.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=103)** Remember the useEffect hook takes in a function and a dependency array.
>
> **[1:46](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=106)** If I leave this dependency array empty this useEffect hook will be invoked once after my component is initially rendered.
>
> **[1:52](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=112)** So I'll just go ahead and make a call to a function called loadPet.
>
> **[1:55](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=115)** Because loading data from the internet requires an asynchronous request it's just easiest to make the loadPet function an async function.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=122)** So where can I fetch information from?
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=124)** We're going to use a little API called the pet library.
>
> **[2:07](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=127)** So at pet-library.[moonhighway.com/api/randompet](https://moonhighway.com/api/randompet) and when you make a request of this route you're going to get a JSON object that contains details about a pet at random.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=138)** So that's what we want to do, we want to load this object within our application.
>
> **[2:22](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=142)** So I'm going to go ahead and copy the URL and that's the route that we're going to use for our fetch request.
>
> **[2:27](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=147)** Once we receive a response we can parse the data in that response as JSON simply by awaiting a res.json request.
>
> **[2:35](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=155)** Let's test it out.
>
> **[2:36](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=156)** I'm going to go ahead and just log the data to the console.
>
> **[2:39](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=159)** Then I'm going to test this on an iOS device using Expo Snack.
>
> **[2:42](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=162)** Expo Snack gives us the ability to see our console logs by clicking on this little Editor menu and then turning the Panel on.
>
> **[2:49](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=169)** So within the Panel we get to see errors and logs.
>
> **[2:52](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=172)** And if I scroll down here you can actually see our application has rendered and we've logged a pet to the console.
>
> **[2:57](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=177)** So we don't want to log this pet to the console, we actually want to use it.
>
> **[3:01](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=181)** I'm going to go ahead and call set pet with the data that was returned from our fetch request.
>
> **[3:06](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=186)** So for right now I'm just going to go ahead and render the pet name and the pet category.
>
> **[3:12](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=192)** And I can also render a picture of the pet into an image component.
>
> **[3:15](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=195)** So to do this I'm going to send the image source, a URI of pet.photo.full to use the full size image.
>
> **[3:23](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=203)** Let me create some styles for this image and also I need to import the image component.
>
> **[3:33](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=213)** Doing so we see our application refresh and we see a picture of Luna the dog.
>
> **[3:38](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=218)** So in this application we made a fetch request to an API which gave us some random information about a pet.
>
> **[3:44](https://www.linkedin.com/learning/learning-react-native/fetching-data?u=76281980&t=224)** We then rendered that information on the screen including that pet's name, their category as well as the full sized image of that pet.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (2), delete (1), async (1)
> **Env Vars:** api (2), json (2), ide (1), css (1), url (1)
> **Code Identifiers:** useeffect (2), loadpet (2), usestate (1), ios (1)
> **CLI Commands:** make (4)
> **Analogies:** picture (2), just like (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** res.json (1)
> **URLs:** [moonhighway.com](https://moonhighway.com) (1)

#### Using RefreshControl
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=1)** - So far, we broke ground on a new application using Expo Snack.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=4)** This application loads information about a pet at random from the internet, and then renders that information on the screen.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=10)** Right now our application is loading and displaying only one pet.
>
> **[0:13](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=13)** In this lesson, we want to give our users the ability to refetch another pet.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=17)** So let's get started.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=18)** The first thing I'm going to do, is import an activity indicator to handle our latency a little bit better.
>
> **[0:23](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=23)** So in the initial render, instead of rendering just no, I'm going to go ahead and render an activity indicator.
>
> **[0:28](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=28)** So our users see a loading animation, which lets them know that we're requesting the initial data.
>
> **[0:32](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=32)** Instead of using a button, we want users to be able to load another pet, simply by dragging the screen down.
>
> **[0:38](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=38)** So I'm also going to include a component called refresh control.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=41)** This component will indicate when we drag the screen down, and it will also display a loading animation while we are making our requests.
>
> **[0:47](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=47)** So because we're dealing with latency and requests, I need to create a state variable for loading.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=54)** And whenever we start to load a pet, I'm going to set the loading variable to true, and then once we have successfully loaded a pet, I will set the loading variable to false.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=62)** So now we have a variable that lets us know the loading state of our request.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=65)** So I'm going to use that variable in my refresh control, the refresh control is rendered as a property of our scroll view.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=71)** And this property will point to a refresh control component.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=74)** The refreshing property of this component, is whether or not we're loading or making the data requests.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=79)** And when the user triggers a refresh by dragging down on the screen, we want to invoke the load pet function.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=88)** So now every time I drag down on the scroll view, I'm loading a new pet, we see a little spinner which lets us know that we're making an asynchronous request for each of these pets.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=96)** Now, for users on a slow 3G network, I want to make sure that I load not only the request, but the full pet image file, before rendering the new pet within our component.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=105)** And I can do that, by going to our load pet function and on line 21, awaiting an image prefetch.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=111)** So this line tells JavaScript to pause, once the full image has completely loaded, we'll set the pet data, and we'll set the loading value to false.
>
> **[1:59](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=119)** So now, when we refetch each pet, we'll make sure the full image is loaded before rendering a new pet component.
>
> **[2:06](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=126)** We built this random pet generator pretty quickly using Expo Snack.
>
> **[2:10](https://www.linkedin.com/learning/learning-react-native/using-refreshcontrol?u=76281980&t=130)** It shows us that we can load data into our applications by making fetch requests.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **CLI Commands:** make (2)
> **Speakers:** - so (1)


### 7. 6. Building Your Project

#### Installing an iOS simulator
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=1)** - The best way to tests Native applications is on the device itself.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=4)** If you don't have access to the device itself you can install simulators.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=8)** The IOS simulator comes with Xcode.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=10)** So in order to install it we need it install Xcode.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=12)** So I can come in here and go to the app store and search for Xcode.
>
> **[0:19](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=19)** Once we find it we will simply click install and Xcode we'll be downloaded and installed on our MAC.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=25)** So with Xcode installed I'm going to come into our ColorCatalog application and run npm start.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=30)** Doing so will start our Expo Bundler project and get our tunnel up and running and once our tunnel is ready you'll notice a button over here that says run on IOS simulator.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=39)** When I click this button, Xcode will find your default IOS simulator and then run the current project within that simulator.
>
> **[0:50](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=50)** Sometimes Expo gets hung up and doesn't complete this progress successfully.
>
> **[0:54](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=54)** When this happens, or if it feels like something went wrong go ahead and come over into the window and click on run in simulator again and it will complete the process.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/installing-an-ios-simulator?u=76281980&t=63)** When we use the IOS simulator with Expo, the Expo is installed locally on the simulator and you preview your application through the Expo application.

> [!info]- Semantic Content
>
> **Env Vars:** ios (4), mac (1)
> **Prerequisites:** install (4)
> **CLI Commands:** find (2), npm (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - the (1)

#### Installing an Android AVD for Mac
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=1)** - [Instructor] The best way to test out a React Native application is to use an Android device.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=5)** But if you don't have access to the device, you can use something called an AVD, an Android Virtual Device.
>
> **[0:10](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=10)** In this lesson, we'll show you how to set up Android Studio on a Mac and configure an Android virtual device.
>
> **[0:16](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=16)** The Android Studio is an IDE for developing Java applications that run on the Android platform.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=21)** First, we need to download it.
>
> **[0:22](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=22)** So I can do a quick Google search for Android Studio.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=25)** And the first link we see is, download Android Studio and SDK tools.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=29)** And the page itself has checked my operating system.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=31)** It knows that I'm on a Mac and has selected the appropriate download.
>
> **[0:35](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=35)** So I'll just click on the Download button.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=36)** I'll agree to the terms and conditions and our download begins.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=40)** Once we have our DMG downloaded, I go ahead and open it up.
>
> **[0:47](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=47)** And I'll just drag Android Studio into the Applications folder to install it.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=55)** So once installed, you'll find Android Studio within your applications.
>
> **[0:59](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=59)** I can simply come over here and run it.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=63)** And since we installed this application from the internet, I have to okay, it's used before opening it.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=68)** When we initially open Android Studio, there's some configuration that needs to be done.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=72)** So I don't have any configuration settings, so I'm not going to import them.
>
> **[1:16](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=76)** And I'll go ahead and send statistics to Google so they can improve this product.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=83)** Choose the standard setup for Android Studio, as well as set my default theme to light and Android Studio will run through its initial configuration.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=92)** When we come to the Android Studio home screen, we can come down here to this configure menu and select a AVD manager.
>
> **[1:38](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=98)** This is where we manage our Android virtual devices.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=100)** So the first thing I need to do is, create a new virtual device.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=103)** We can create all sorts of devices from TVs to wearables, even automotive devices.
>
> **[1:48](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=108)** I'm going to create a phone and the phone that I'm going to create will emulate the Pixel XL.
>
> **[1:53](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=113)** Next I need to choose the system image for my phone or the version of Android that is currently running.
>
> **[1:57](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=117)** We have a lot of options which allow you to test your applications on all sorts of Android devices, running previous versions of Android.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=124)** I'm simply going to select the Q version.
>
> **[2:06](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=126)** And on this last screen, I can give this device a custom name, my phone.
>
> **[2:10](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=130)** And when I click finish, we will create the virtual device.
>
> **[2:13](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=133)** You can create as many virtual devices as you want.
>
> **[2:15](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=135)** You'll see them show up in this list here.
>
> **[2:17](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=137)** Clicking on the Play button next to each device, will start that virtual device.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=141)** And I already have my color catalog project running.
>
> **[2:24](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=144)** So I can come over here to our Expo Bundler window, and then click run on Android device or emulator.
>
> **[2:30](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=150)** Expo knows to find whatever Android emulator I have running, install Expo on that emulator and then run my projects using Expo.
>
> **[2:38](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=158)** This might take a few seconds.
>
> **[2:41](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=161)** And if anything gets hung up, clicking on run on Android device again, might solve the problem.
>
> **[2:59](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-mac?u=76281980&t=179)** Here we can see our color catalog running within an Android virtual device.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (2), install (2), set up (1), setup (1)
> **Env Vars:** avd (2), ide (1), sdk (1), dmg (1)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Installing an Android AVD for Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=1)** - [Instructor] The best way to test out your application is to always use it directly on a device.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=5)** However, when you don't have access to a specific device, you can set up an Android Virtual Device in a Windows environment.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=11)** In this lesson, I'm going to show you how to install Android Studio and set up an Android Virtual Device on Windows.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=17)** So let's go ahead and open the browser and do a Google search for Android Studio.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=21)** The first link that you see is the link to download the Android Studio and SDK tools.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=25)** When you navigate to this page, it'll check your current operating system and provide a download link for that operating system.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=31)** I'm going to go ahead and click download Android Studio and I will agree to the terms and conditions.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=39)** So here, our download is complete.
>
> **[0:41](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=41)** I'm going to go ahead and open our installer and then I will just follow the instructions.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=45)** So I'm going to go ahead and set up Android Studio, make sure the Android Virtual Device box is checked.
>
> **[0:49](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=49)** The default directory is fine.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=51)** We'll add Android Studio to the start menu file.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=53)** And we'll go ahead and let that install.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=57)** When I click finish, we'll go ahead and start Android Studio for the first time.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=60)** And once Android Studio boots up, we'll see this welcome screen.
>
> **[1:03](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=63)** What I want to do is configure an Android Virtual Device.
>
> **[1:06](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=66)** So I can click on the configure menu down here in the bottom right hand corner and select the AVD manager.
>
> **[1:12](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=72)** This is where I can create virtual devices and you can create all types of Android virtual devices.
>
> **[1:17](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=77)** Over here in the category menu, you can select from TV to wearables, to even automotive devices.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=83)** I'm going to go ahead and create a phone.
>
> **[1:25](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=85)** And the phone that I would like to emulate is the Pixel XL.
>
> **[1:28](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=88)** On the next screen, I get to select the system image for the phone, which is the version of Android that it's currently running.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=93)** You have the option to create Android virtual devices that use different system images.
>
> **[1:38](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=98)** So you can test your application on different versions of Android.
>
> **[1:41](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=101)** I'm simply going to to select the Q version.
>
> **[1:43](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=103)** On this last screen, we can name the device.
>
> **[1:45](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=105)** I'll go ahead and call it My Phone and click finish.
>
> **[1:47](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=107)** And now here's our menu of Android Virtual Devices.
>
> **[1:50](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=110)** In order to get this device started, I'm just going to click play next to this first one, which is My Phone.
>
> **[1:55](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=115)** And we start up the Android emulator for the Pixel XL.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=122)** We'll go ahead and let Google load on that emulator.
>
> **[2:09](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=129)** And now I can open up my command prompt and from the ColorCatalog folder, I'll go ahead and run an NPM start.
>
> **[2:15](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=135)** This will run an expo start and we will start up our expo host in our Metro Bundler.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=141)** And then I can click Run on Android device emulator, and it will go ahead and open up my application within the emulator.
>
> **[2:27](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=147)** So we can see here's our emulator.
>
> **[2:31](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=151)** And we can see the JavaScript bundle is building.
>
> **[2:36](https://www.linkedin.com/learning/learning-react-native/installing-an-android-avd-for-windows?u=76281980&t=156)** And finally, we have our ColorCatalog running in an Android Virtual Device.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3), install (2), configure (2)
> **UI Navigation:** select the (3), open the (1), navigate to (1), click on (1)
> **Code Keywords:** let (3), finally, (1)
> **Env Vars:** sdk (1), avd (1), npm (1)
> **CLI Commands:** make (1), npm (1)
> **Tools:** command prompt (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Publishing your Expo project
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=0)** - [Instructor] Most of the functionality for a React Native map is found within the Javascript bundle which is great because if you can update the JavaScript bundle, that means you can push application updates directly to your user's phone.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=12)** Expo already provides the infrastructure and the environment to do this.
>
> **[0:15](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=15)** In order to take advantage of it, we need to publish our project to Expo.
>
> **[0:19](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=19)** So I currently have the color catalog up and running.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=21)** Here we can see it in the iOS simulator.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=24)** We also have our Expo Metro Bundler running and our tunnel up and our application appears to be working.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=30)** There are a couple things that I want to do before publishing this application to Expo.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=33)** If I come to the assets folder we can see the icon and splash that we've been using for our development application.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=39)** But we also have our production icon and our production splash image here so we want to make sure that Expo knows where to find those when creating our application.
>
> **[0:47](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=47)** The app.json is a file that Expo uses when it builds your application.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=51)** It contains important configuration details about the application.
>
> **[0:55](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=55)** So within this file we can see that we have an icon key down here.
>
> **[0:58](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=58)** We also have a key for the splash.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=60)** So instead of using the splash PNG, I'm going to go ahead and change this to cc-splash for color catalog splash and I'm going to do the same for the color catalog icon.
>
> **[1:09](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=69)** So there, I just changed the splash and the icon file.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=71)** Additionally I can add an application description here.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=74)** So we'll add a description.
>
> **[1:18](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=78)** Catalog your colors.
>
> **[1:20](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=80)** Save your favorite web colors and view the details.
>
> **[1:29](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=89)** We also need to make sure to manage our application version within this file as well.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=93)** And for this particular app, I only want to build iOS or Android applications so I'm going to go ahead and remove the web from our Platforms array.
>
> **[1:40](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=100)** All right.
>
> **[1:41](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=101)** So in order to publish text though, all I need to do is come over here to the terminal.
>
> **[1:44](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=104)** This is where the application is running.
>
> **[1:46](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=106)** I'm going to go ahead and stop the application by clicking control + C.
>
> **[1:49](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=109)** That will stop our process.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=111)** Now whenever we make structural application changes like adding an icon and a splash image, we need to restart our application.
>
> **[1:57](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=117)** And when I do so we can see that our expo metro bundler has refreshed.
>
> **[2:02](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=122)** So I'll go ahead and run this in the iOS simulator.
>
> **[2:05](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=125)** And when I do that we can see our splash screen and our application has an icon.
>
> **[2:11](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=131)** So now we're ready to publish our application.
>
> **[2:13](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=133)** I'm going to go ahead and open up a terminal window right within VS Code.
>
> **[2:17](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=137)** And in order to publish our application I can use the Expo CLI.
>
> **[2:21](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=141)** All I need to do is run Expo Publish and Expo will build your iOS JavaScript bundle, your Android JavaScript bundle, as well as place all of your assets online.
>
> **[2:30](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=150)** Expo also provided a URL.
>
> **[2:32](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=152)** Let's check that out.
>
> **[2:33](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=153)** And it brings us to our project page hosted on Expo.
>
> **[2:37](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=157)** And we can even test out the application from this page using Android devices.
>
> **[2:42](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=162)** iOS doesn't support this feature.
>
> **[2:44](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=164)** So there we go.
>
> **[2:45](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=165)** We've published our bundle and it's being hosted online.
>
> **[2:47](https://www.linkedin.com/learning/learning-react-native/publishing-your-expo-project?u=76281980&t=167)** In the future all we need to do is republish our bundle and those changes will automatically be pushed to everyone's device.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (5)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** png (1), cli (1), url (1)
> **Tools:** terminal (2), vs code (1)
> **Code Keywords:** this. (1), let (1)
> **File Paths:** app.json (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)

#### Building for iOS devices
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=1)** - [Instructor} When you're ready to distribute your iOS application to the App store, you can use Expo to manage the build process.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=7)** So at present, I have the application running.
>
> **[0:09](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=9)** We can see that we can test the application here within the iOS simulator.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=12)** But the problem is we are not testing the standalone application by itself.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=17)** We're still running this application in the simulator through Expo.
>
> **[0:20](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=20)** So we're actually looking at the Expo app, when we're running our app.
>
> **[0:23](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=23)** So let's say we wanted to build an iOS app and add it to the simulator.
>
> **[0:27](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=27)** The first thing that we need to do is come into the app.json and add some specific build details to our iOS configuration.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=33)** Specifically, we need a key called bundle identifier.
>
> **[0:37](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=37)** This is the unique identifier for your iOS application.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=40)** We typically name these comm.user or organisation.application name.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=45)** So in my case, the application is going to be called, com.moonhighway, my organization, .color-organizer.
>
> **[0:52](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=52)** I then want to add my iOS build number here.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=57)** With those changes made to the app.json, we can go ahead and open up the terminal, and use the Expo CLI to run expo build:iOS.
>
> **[1:05](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=65)** And then this will kick off our iOS build.
>
> **[1:08](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=68)** What's happening is Expo is actually using Xcode in the iOS SDKs to build your application on their servers so that you don't have to.
>
> **[1:16](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=76)** In order to submit an app to the App Store, you're going to need an account.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=79)** During the build process, Expo can link your developer account to this build.
>
> **[1:23](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=83)** So I'll go ahead and say yes, and I can put in my Apple ID.
>
> **[1:27](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=87)** Now Expo can talk to the Apple developer portal on my behalf.
>
> **[1:31](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=91)** We can also let Expo manage the process of building service keys for push notifications.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=96)** We don't have any within our app, but I'll still go ahead and let Expo manage that process in case you want to add them in the future.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=102)** You can set up your Apple provisioning on your own, but it's just easier to let Expo manage that process too.
>
> **[1:47](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=107)** So if all that information Expo's ready to queue a build for iOS bundle.
>
> **[1:56](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=116)** And that's the first thing that we see down here is that our build is queued.
>
> **[1:58](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=118)** So it's waiting in line for an Expo server to open up to actually build your iOS application.
>
> **[2:04](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=124)** And once the build does open up, we can see that that build is in progress.
>
> **[2:07](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=127)** Now you can monitor this build using the Expo Dashboard.
>
> **[2:10](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=130)** So I can click on this link and we actually open up a website that will give us specific details about the current build, including the logs associated with that build.
>
> **[2:18](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=138)** So this build is in progress, we'll go ahead and wait for it to finish.
>
> **[2:23](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=143)** Now if for some reason you killed the terminal that you started the build in it really doesn't matter because the build is happening on Expo servers.
>
> **[2:29](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=149)** I can find out the build status using the CLI simply by typing Expo build:status, and it looks like our build has finished.
>
> **[2:37](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=157)** So now I can download my zip application using this link.
>
> **[2:43](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=163)** And I'll go ahead and check my downloads folder and we can see that a zip file has been created with my application.
>
> **[2:48](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=168)** So I'm going to go ahead and copy this file name.
>
> **[2:50](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=170)** And then I'm going to unzip it by running tar -xvzf and this will unzip our application.
>
> **[2:57](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=177)** So the next time we take a look at the files within the download folder, we can see that we have the [ColorCatalog.app](https://ColorCatalog.app).
>
> **[3:02](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=182)** So now I can install this iOS app onto my simulator with the command xcrun or Xcode run sim control install booted [ColorCatalog.app](https://ColorCatalog.app).
>
> **[3:11](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=191)** Booted it tells Xcode to install the application on the simulator that's currently running.
>
> **[3:15](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=195)** And once this is complete, we should be able to come over here to the other screen.
>
> **[3:19](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=199)** And there we can see our Color Catalog application running independently.
>
> **[3:23](https://www.linkedin.com/learning/learning-react-native/building-for-ios-devices?u=76281980&t=203)** So this is the application that we can distribute to the App Store.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (12)
> **Code Keywords:** let (4), case, (1)
> **CLI Commands:** unzip (2), find (1), tar (1)
> **Prerequisites:** install (3), set up (1)
> **File Paths:** app.json (2)
> **URLs:** [colorcatalog.app](https://colorcatalog.app) (2)
> **Env Vars:** cli (2)
> **Tools:** terminal (2)

#### Building for Android devices
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=1)** - [Instructor] We can use Expo to help us build our application for Android devices.
>
> **[0:05](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=5)** This means that you don't have to install Android Studio, or the Android STK to build an application that you're ready to distribute to the Google Play Store.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=14)** So here we can see the color organizer is up and running within an Android simulator.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=18)** The application appears to be working, but when we test this application we're actually testing it through the Expo app.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=24)** Let's go ahead and build an Android application that we can install directly on this simulator.
>
> **[0:29](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=29)** The first thing I need to do is go into the app.json file and provide Android with some configuration information that it can use during the build process.
>
> **[0:36](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=36)** Specifically I have to name the package.
>
> **[0:39](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=39)** So in this case, we're going to do com.moonhighway.colorcatalog for the name of our Android application.
>
> **[0:46](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=46)** Once I have that saved, I can open up the terminal and use the Expo CLI to run Expo build:Android.
>
> **[0:53](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=53)** So doing this, we'll get asked if we want to manage our own KeyStore.
>
> **[0:57](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=57)** We'll let Expo handle that process.
>
> **[1:00](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=60)** And what you'll notice is that our Android build is queued.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=62)** What this means is we are waiting for an available Expo server to run our build.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=67)** We can actually use the Expo Dashboard to take a look at the build progress.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=71)** So you can monitor the build at this link here.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=74)** So if I go over to the web browser and place that link in, we can see that our status has changed to In Progress and we can also see all of the information about our Android build, including our build logs.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=92)** So there we go.
>
> **[1:32](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=92)** Our build has finished.
>
> **[1:33](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=93)** We have a standalone Android app.
>
> **[1:36](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=96)** So here is the link to our application.
>
> **[1:38](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=98)** We can go ahead and click on this Expo artifacts link and download our application.
>
> **[1:42](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=102)** That will automatically download the APK to the Downloads directory for me.
>
> **[1:46](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=106)** So I'll go ahead and go to the Downloads directory.
>
> **[1:48](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=108)** So in here we can see that we have our APK file.
>
> **[1:51](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=111)** I can go ahead and run the open dot command, which is going to go ahead and open up this folder within the finder, so we can see that file directly, because all I need to do install this file in an Android virtual device is simply drag it over the device.
>
> **[2:03](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=123)** So by dragging and dropping this APK into our Android virtual device, it is installing our standalone application.
>
> **[2:12](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=132)** Once installed, I can view my application.
>
> **[2:14](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=134)** So here's our standalone color organizer.
>
> **[2:16](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=136)** There is the icon.
>
> **[2:17](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=137)** I can click on it and it will open up and run our Color Catalog on this Android virtual device.
>
> **[2:23](https://www.linkedin.com/learning/learning-react-native/building-for-android-devices?u=76281980&t=143)** So Expo can manage your build for you and deliver an APK file, so that you can upload it to the Google Play Store.

> [!info]- Semantic Content
>
> **Env Vars:** apk (4), stk (1), cli (1)
> **Code Keywords:** let (2), case, (1), this, (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (3)
> **File Paths:** app.json (1)
> **Tools:** terminal (1)
> **Exercise Files:** download the (1)
> **Definitions:** means that (1)

#### Ejecting from Expo
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=0)** - [Instructor] You could easily eject your application from Expo which would give you access to both the iOS and Android source files.
>
> **[0:07](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=7)** In this lesson, we're going to go ahead and take a look at how we can eject the color catalog from Expo.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=11)** So you'll notice, we don't have any iOS files specifically or Android files specifically within our file folder.
>
> **[0:18](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=18)** So I'm going to go ahead and open up the Terminal, and using the Expo CLI, I can run expo eject.
>
> **[0:25](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=25)** Now be careful.
>
> **[0:26](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=26)** This is going to eject your application from Expo which means that you now have to manage building this application on your own.
>
> **[0:31](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=31)** You have a couple options when it's time to eject.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=33)** I'm just going to select the first one.
>
> **[0:34](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=34)** And eject to bare applications.
>
> **[0:37](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=37)** You can also name the application for your user's home screen.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=40)** I'm just going to go ahead and keep the ColorCatalog name.
>
> **[0:42](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=42)** You can also name the Android studio project.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=45)** Again, I'll keep the ColorCatalog name.
>
> **[0:48](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=48)** And now we have ejected our application.
>
> **[0:51](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=51)** The first thing that you can see is the application that we're trying to test has completely broken because we ejected the application and have completely changed our local file structure.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=62)** Once we have successfully ejected the application, we can go ahead and take a look at the files.
>
> **[1:07](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=67)** So you will notice that we now have an iOS folder.
>
> **[1:10](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=70)** This is where our iOS project is based, So I could open up this project directly in Xcode.
>
> **[1:19](https://www.linkedin.com/learning/learning-react-native/ejecting-from-expo?u=76281980&t=79)** I also have access to the Android source files, so I can also take this folder and drag it over the Android Studio, and this opens up our application within the Android Studio.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (4)
> **Env Vars:** cli (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 8. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=0)** - Thank you for joining me for Learning React Native.
>
> **[0:02](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=2)** I hope you enjoyed this course.
>
> **[0:04](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=4)** If you're curious as to where to go from here, I can offer a few suggestions.
>
> **[0:08](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=8)** The best way to solidify your knowledge is to build your own app.
>
> **[0:11](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=11)** So start working on your app idea.
>
> **[0:12](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=12)** Go for a series of small goals.
>
> **[0:14](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=14)** Lay out working screens and navigation to each screen.
>
> **[0:17](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=17)** Build some successful forms.
>
> **[0:19](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=19)** Visually display your data points.
>
> **[0:21](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=21)** If you don't have an app idea, continue working on this app.
>
> **[0:24](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=24)** Right now, you've built an app that allows users to add colors and then look at the details for each color.
>
> **[0:30](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=30)** But users should also be able to remove colors.
>
> **[0:33](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=33)** Can you add that feature?
>
> **[0:34](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=34)** What other features can you add to this app?
>
> **[0:37](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=37)** If you don't want to work with colors, change this to a to-do app.
>
> **[0:40](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=40)** Can you add to-dos, mark them complete and delete them?
>
> **[0:43](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=43)** Challenge yourself.
>
> **[0:45](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=45)** Most of software development is research.
>
> **[0:47](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=47)** If there's a specific feature that you'd like to add to your app, you could probably find a component for that or an API for that already within the React Native docs.
>
> **[0:56](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=56)** If you can't find something there, there's probably something available within the Expo SDK.
>
> **[1:02](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=62)** Finally, there's a lot of cool stuff that you can find just by searching npm.
>
> **[1:06](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=66)** A lot of common interactive elements have already been created, so don't reinvent the wheel.
>
> **[1:11](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=71)** Well, that wraps up this course.
>
> **[1:14](https://www.linkedin.com/learning/learning-react-native/next-steps?u=76281980&t=74)** Thanks for attending and I want to wish you the best of luck on your programming journey.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), npm (1)
> **Code Keywords:** continue (1), delete (1), finally, (1)
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