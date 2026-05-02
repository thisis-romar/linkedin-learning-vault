---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-native-essential-training
url: "https://www.linkedin.com/learning/react-native-essential-training"
level: Intermediate
updated: 11/10/2020
learners: 18638
skills:
  - React Native
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGKXGNugAV8Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1605024546102?e=2147483647&amp;v=beta&amp;t=sT7pQrM4VbNoMCmTrtyurh_WoGeP76aHq06n5A-S4Vk"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Become a React Native Developer]]'
next_courses:
  - '[[From React to React Native]]'
path_nav: '[{"path":"Become a React Native Developer","position":1,"total":5,"prev":null,"next":"From React to React Native"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/react-native
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/React%20Native%20Essential%20Training.md)

![React Native Essential Training](https://media.licdn.com/dms/image/v2/C560DAQGKXGNugAV8Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1605024546102?e=2147483647&amp;v=beta&amp;t=sT7pQrM4VbNoMCmTrtyurh_WoGeP76aHq06n5A-S4Vk)

# React Native Essential Training

> React Native allows you to build native mobile apps using JavaScript and React. In this project-based course, learn how to use React Native to build production-ready, native mobile apps on both iOS and Android. To help acquaint you with the fundamentals of React Native, instructor Samer Buna takes a hands-on approach, showing how to build applications from scratch. He first walks through how to bu

> [LinkedIn Learning](https://www.linkedin.com/learning/react-native-essential-training) | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Working with React Native](#working-with-react-native)
  - [Is this course for you?](#is-this-course-for-you)
  - [Course overview](#course-overview)
- [**1. Getting Started**](#1-getting-started) (2 videos)
  - [Why React Native?](#why-react-native)
  - [Requirements and setup](#requirements-and-setup)
- [**2. React Native Fundamentals**](#2-react-native-fundamentals) (5 videos)
  - [Hello React Native with Expo](#hello-react-native-with-expo)
  - [Hello React Native on iOS](#hello-react-native-on-ios)
  - [Hello React Native on Android](#hello-react-native-on-android)
  - [Styling React Native components](#styling-react-native-components)
  - [Exploring components and APIs](#exploring-components-and-apis)
- [**3. Building a Simple Game App**](#3-building-a-simple-game-app) (15 videos)
  - [Introduction and preview](#introduction-and-preview)
  - [Initializing the TargetSum app](#initializing-the-targetsum-app)
  - [Configuring ESLint](#configuring-eslint)
  - [The game component with a random target](#the-game-component-with-a-random-target)
  - [Generating the random play numbers](#generating-the-random-play-numbers)
  - [Styling the random play numbers](#styling-the-random-play-numbers)
  - [Using TouchableOpacity for press events](#using-touchableopacity-for-press-events)
  - [Changing UI based on selected numbers](#changing-ui-based-on-selected-numbers)
  - [Adding shared behavior to numbers](#adding-shared-behavior-to-numbers)
  - [Using React DevTools with React Native](#using-react-devtools-with-react-native)
  - [Computing dynamic values where needed](#computing-dynamic-values-where-needed)
  - [Changing UI based on game status](#changing-ui-based-on-game-status)
  - [Working with timers](#working-with-timers)
  - [Caching to optimize computable values](#caching-to-optimize-computable-values)
  - [Remounting a component to reset it](#remounting-a-component-to-reset-it)
- [**4. Building a Data-Driven App**](#4-building-a-data-driven-app) (9 videos)
  - [Introduction and preview](#introduction-and-preview)
  - [Initializing the Bakesale app](#initializing-the-bakesale-app)
  - [Using the Fetch API](#using-the-fetch-api)
  - [Using FlatList with API data](#using-flatlist-with-api-data)
  - [Working with images](#working-with-images)
  - [Navigating to different views with state](#navigating-to-different-views-with-state)
  - [Fetching more API data for a view](#fetching-more-api-data-for-a-view)
  - [Implementing a back link](#implementing-a-back-link)
  - [Using TextInput to implement search](#using-textinput-to-implement-search)
- [**5. Animation and Gesture Control**](#5-animation-and-gesture-control) (9 videos)
  - [Preparing for swiping](#preparing-for-swiping)
  - [The Animated and Easing APIs](#the-animated-and-easing-apis)
  - [Creating an animation loop](#creating-an-animation-loop)
  - [Considering the device dimensions](#considering-the-device-dimensions)
  - [The PanResponder API](#the-panresponder-api)
  - [Preparing the PanHandlers](#preparing-the-panhandlers)
  - [Swiping left and right](#swiping-left-and-right)
  - [Handling swipe gestures](#handling-swipe-gestures)
  - [Opening URLs](#opening-urls)
- [**6. Deploying**](#6-deploying) (5 videos)
  - [Test first](#test-first)
  - [Testing on Android](#testing-on-android)
  - [Changing app logo and splash screen](#changing-app-logo-and-splash-screen)
  - [Using TestFlight with internal testers](#using-testflight-with-internal-testers)
  - [Generating signed APK for Android](#generating-signed-apk-for-android)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with React Native](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=0)** - [Samer] Hello, welcome to the [[React Native]] Essential Training course.
>
> **[0:03](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=3)** My name is Samer Buna.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=5)** I work at [[Agile Development|Agile]] Labs where we're creating educational content for web and mobile developers with a focus on an interactive and adaptive approach.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=13)** You can check some of the work I do over at [jscomplete.com](https://jscomplete.com).
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=17)** In this relatively short course, we will build two practical mobile applications with the React Native framework and its supporting tools.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=25)** The first application will be a simple math game and the other application will be a more featured application that works with an API and we'll make use of more advanced features of the React Native framework.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=36)** React Native enables software developers to build rich native mobile applications on both iOS and [[Android]] using just [[JavaScript]].
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=45)** It's a very popular framework and the list of who uses it out there is impressive and has big names like Facebook, Instagram, Uber, and jsComplete.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=53)** Okay, the last one is not big but the signal here is that the knowledge I'll be sharing in this course is practical and real.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=60)** I am not a fan of abstract teaching examples that are removed from practical realities.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=65)** And this is why the applications we're going to build in this course will be real and practical.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=70)** We'll start with an easy application, which is a simple game I created for my kids.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=74)** This is just to get our feet wet and get some confidence in React Native.
>
> **[1:18](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=78)** Then we'll do the deep dive and build a more featured data-driven application that has navigation, asynchronous calls, animation, touch gestures, and many more features.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=88)** We will test our apps on the iOS simulator, the Android emulator, and with TestFlight, which is basically an iOS beta testing medium the apps creator can use to publish new applications for beta testing through an invite-only system.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=103)** I'll also show you how to use the Expo tools to build and test your React Native apps.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=108)** If you're on a [[Windows]] machine, you're going to love this Expo framework as it will enable you to build tests and even publish iOS apps without needing [[Xcode]].
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=118)** It's also the fastest way to get started with React Native anyway and that's why we'll start with it.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=123)** This course is mostly live coding and not scripted.
>
> **[2:07](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=127)** I explain concepts when we first need them and I run into problems while coding and I show you how to debug and solve these problems.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=134)** Solving problems is how I personally learn.
>
> **[2:17](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=137)** To get the most value out of this course, you should build the apps with me on your own and don't just watch me.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=143)** In fact, you should try to build slightly different apps so that you run into other problems and learn from those.
>
> **[2:29](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=149)** I'll be happy answer any questions that you might have on the jsComplete Help [[Slack]] channel, which you can invite yourself to at [jscomplete.com/help](https://jscomplete.com/help).
>
> **[2:39](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=159)** I'm also active on Twitter so if you have a tweet-sized question, you can certainly mention me on it.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=164)** I try to be not too slow and not too fast but you can always control the play speed if you want.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=170)** We will be doing a lot of things in this course.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=173)** Some will be easy and others will be hard.
>
> **[2:55](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=175)** Remember that you can pause, skip, and replay when needed.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=179)** To focus on the important concepts of the course, in a few videos I do the styling needed off-camera.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?u=76281980&t=186)** I encourage you to do your own styling but if you want it to sync with the styles that I do off-camera, the course has a [[GitHub]] repository with [[Git]] tags for every video which you can use to sync your progress with mine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (7), [[Android]] (2), [[Agile Development|Agile]] (1), [[JavaScript]] (1), [[Windows]] (1)
> **Code Identifiers:** ios (4), jscomplete (2)
> **CLI Commands:** make (1), git (1)
> **URLs:** [jscomplete.com](https://jscomplete.com) (2)
> **Tools:** slack (1), github (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [samer] (1)

#### [Is this course for you?](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=0)** - [Teacher] Before we begin, let's talk a little bit about the level of this course and what it covers.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=5)** This course will have a pure focus on the [[React Native]] framework.
>
> **[0:10](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=10)** It will not teach you [[React.js|React]] itself.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=12)** You need a good knowledge of React and [[JavaScript]] first.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=15)** If you have not learned React yet, you should probably do that first.
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=19)** I don't mean to be a gatekeeper here, but I don't want you to waste your time on this course if you're not ready for it.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=26)** When it comes to learning JavaScript and React, you have a lot of options.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=30)** There are many courses on [[LinkedIn]] Learning that you can start with.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=33)** You can also check out the many books and video courses I have over at [jscomplete.com](https://jscomplete.com).
>
> **[0:39](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=39)** If you're new to React, to start with this complete introduction to React lesson.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=43)** This one does not assume any prior knowledge of the library.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=47)** Taking this course without a fair understanding of the React Library itself will only confuse you, and you will probably get a bad first experience with React Native.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=56)** Let me give you a specific example here.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=58)** In this course, I use [[React Hooks]] like useState and useEffect and many other methods in the React API.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=65)** I will not be explaining these concepts before using them.
>
> **[1:08](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=68)** I simply expect you to know them.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=71)** Similarly, I'll often use modern JavaScript syntax, like async/await, for example.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=75)** And I do not explain these either.
>
> **[1:18](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=78)** If you're not familiar with things like import/export, [[Representational State Transfer (REST)|rest]]/spread syntax, timers, promises, and async/await, I recommend that you go through this article first where I explain all these concepts and much more.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=91)** However, prior knowledge in React Native itself is not required.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=95)** When I use something from the React Native API, I'll certainly explain that first.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/is-this-course-for-you?u=76281980&t=100)** In the next video, I'll do an overview of all the course chapters and what will be covered in each.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (8), [[React Native]] (4), [[JavaScript]] (3), [[LinkedIn]] (1), [[React Hooks]] (1)
> **Code Identifiers:** usestate (1), useeffect (1)
> **Env Vars:** api (2)
> **URLs:** [jscomplete.com](https://jscomplete.com) (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [teacher] (1)

#### [Course overview](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=0)** - [Instructor] The first part of this course will be an introduction to [[React Native]].
>
> **[0:03](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=3)** We'll start with the advantages and disadvantages of the framework and then I'll show you what you need to do to set up a React Native development environment for both iOS and [[Android]].
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=13)** The second part is going to be the Hello World example of React Native.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=17)** We'll cover the basics of the platform and the environment that it creates for us.
>
> **[0:22](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=22)** We'll do an example on iOS and another on Android.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=25)** In that part, we'll also talk a little bit about styling in React Native and I'll show you the RN tester project that you can use to practically explore and experiment with all the components and APIs of React Native.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=37)** Then we'll get real and build the simple math game app.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=40)** We'll take it one step at a time and make small increments as we go.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=45)** We'll learn how to work with the React Native UI elements like view and text and how to interact with the app and communicate through components.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=52)** We'll also work with random numbers and timers.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=55)** In addition, we'll optimize a few things with caching, I'll show you a trick to reset the component by remounting it instead of resetting its data.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=63)** By the end of that part, we'll have a complete game that a user can play, win, lose, and play again.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=70)** In the fourth part, we'll start on the data-driven app.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=74)** We'll start the whole thing with raw data coming from the API and design our app around it.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=79)** We'll learn how to use the [[Fetch]] API and more React Native UI elements like FlatList, image, text inputs, how to navigate between views, and how to fetch more data on demand.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=90)** We'll also see how to do some animation and gestures.
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=93)** We'll learn about the animated and easing APIs, how to create an animation loop, like this, and how to make the animation work on any device size.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=102)** We'll learn about the PanResponder API and how to use it to create a swipe left and right gestures.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=108)** And we'll also learn how to open external links for the React Native app.
>
> **[1:52](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=112)** In the final part, we'll test our data-driven application on Android and I'll show you how to deploy it on TestFlight.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/course-overview?u=76281980&t=118)** I'll show you how to change the app logo and splash screens and I'll walk you through the process of generating a signed API for the [[Google]] Play Store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (8), [[Android]] (3), [[Fetch]] (2), [[Google]] (1)
> **Env Vars:** api (4)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Why React Native?](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=0)** - [Instructor] [[React Native]] is a [[JavaScript]] framework that allows us to develop native mobile applications for both iOS and [[Android]] without having to write code in either [[Swift (Programming Language)|Swift]] or [[Java]].
>
> **[0:11](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=11)** React Native is powered by [[React.js|React]], so in React Native applications, we write code using JavaScript with JSX and React Native will bridge our code into native land for both iOS and Android.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=24)** We can use the same APIs, we use for regular React applications in a React Native application.
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=29)** But there are a few differences that you should be aware of, and we're going to cover these differences in this course.
>
> **[0:35](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=35)** A React Native application will render using real native mobile UI components not Webviews, and it can access native platform features like the camera, address book, contacts and the user's location, all with the JavaScript interface that React Native provides.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=53)** There are many reasons to consider a React Native over its alternatives, but I'm going to briefly mention the most important ones.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=59)** If you're already sold on the advantages of React Native feel free to skip this video.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=64)** Rendering mobile applications using cross-platform frameworks like Cordova or Ionic, which uses a combination of JavaScript, [[HTML]] and CSS, typically render using webviews.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=75)** The performance of these webview based applications is usually not very good when compared with native applications.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=81)** Additionally, not all the platforms features and APIs can be accessed using webview based application.
>
> **[1:29](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=89)** The [[User Experience (UX)|user experience]] overall on a webview based mobile application feels a little off.
>
> **[1:34](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=94)** Facebook actually started their mobile apps using webviews up until 2012 or so.
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=99)** The webview based Facebook application was famous for its slowness and bad overall user experience.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=106)** React Native on the other hand, does not use webview at all, it acts like a bridge between the code that we write in JavaScript and the native platform it works with.
>
> **[1:56](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=116)** It translates the UI components that we write in React into real native mobile UI elements.
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=124)** We also get all the benefits of the React Library itself, when we develop React Native applications, from the simple but powerful concept of components to the nature of reactive updates that happen automatically when the states of those components change.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=138)** A coder who can develop React applications can be easily trained to develop iOS apps and Android apps using React Native, removing the need to hire specialized developers on target platforms.
>
> **[2:29](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=149)** Rotating coders among projects becomes more feasible and that inturns improves the knowledge sharing among the team.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=157)** React Native provides an excellent developer experience over normal mobile applications, this is mostly because of the great set of developer tools that comes built in with the framework.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=167)** Since it's just JavaScript, all those tools will feel familiar to the web developer, for example, we can debug React Native applications using Chrome Dev tools, we can use any text editor to see the changes we do, all we need is a refresh exactly like in a web application, the build step is not needed as it is when writing normal mobile applications.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=189)** Additionally, pushing updates to our already published applications can be easier, updates can actually be pushed directly without the App Store review cycle.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=198)** The code written for iOS applications in React Native can be mostly shared with an Android application, we'll see an example of that as we build an application that gets compiled to both target platforms and most of the code will be shared on those platforms, in fact, the code will be shared by default and when we need to write code for a single platform, we branch off into a special file to do that.
>
> **[3:40](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=220)** Of course, React Native is not perfect, it comes with many disadvantages as well, let me mention a few important ones.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=227)** React Native is still a bit slower than purely native, there is a communication overhead between the JavaScript thread and the Native UI thread which happens over the React Native bridge.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=239)** Optimizing React Native applications is essentially optimizing this bridge communication.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=244)** React Native does not provide complete solutions in JavaScript land, you would still need developers on your team that can work with Swift and Java and fill the gap where needed.
>
> **[4:14](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=254)** React Native is also a fast paced project with frequent breaking changes, so if you're developing a React Native project, you'll need to follow the changes and probably update your project as frequently as you can to deal with smaller changes.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=269)** In the next video, I'll go over what's needed to develop applications with React Native for both iOS and Android.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/why-react-native?u=76281980&t=275)** If you've already built your first React Native app, you can probably skip this next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (24), [[JavaScript]] (8), [[Android]] (5), [[React.js|React]] (5), [[Swift (Programming Language)|Swift]] (2)
> **Code Identifiers:** ios (5)
> **Env Vars:** jsx (1), html (1), css (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1), next video (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)

#### [Requirements and setup](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=1)** - [Instructor] The fastest way to get started with [[React Native]] is with Expo.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=4)** Expo is a framework and platform with many tools and services built around React Native.
>
> **[0:10](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=10)** We'll go over an example of how to use Expo in the next video, but you don't really need any tools besides the Expo [[CLI]] to use it.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=18)** However, in this video, I'm going to go over the instructions to fully set up a Mac machine for React Native development with [[Xcode]] and [[Android]] Studio.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=27)** If you're not on a Mac, you can skip all these instructions and just use Expo to follow this course.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=33)** You can develop Android applications natively on [[Windows]] or [[Linux]], but I strongly recommend using Expo as that'll enable you to develop and test your React Native applications for both Android and iOS.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=45)** In any case, the instructions to set up a React Native environment change frequently.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=50)** And the best way to get them done is to follow this environment setup section in the official documentation, and that's what I'm about to do.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=58)** I am using the current latest version of Mac OS and chances are you'll be using a different version.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=65)** But I recommend that you update to the latest Mac OS version available, before starting with this course.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=70)** Things change fast in the React Native ecosystem and being on the latest software helps minimize the issues you might run into.
>
> **[1:18](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=78)** This includes the OS itself, and all the tools we'll go through right now starting with Xcode, which you need to install if you don't have.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=87)** Here we go download is complete.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=88)** Let's open up Xcode, accept the license agreement, and it will take some time at first install some components, so let that finish.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=97)** And you should see this Welcome to Xcode screen.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=101)** Another thing that you need from Xcode is the command line developer tools.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=106)** So usually this should be installed already, but to make sure you can use Xcode dash, select dash dash install, and you'll either get a prompt to install the command line tools, or you'll get this message that they are already installed.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=122)** Let's go back to the environment setup section in the React Native documentation and follow the instructions here.
>
> **[2:09](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=129)** So I'll follow the instructions to install the iOS target on Mac OS, you need node and Watchman.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=136)** And the easiest way to install these on Mac is using Homebrew.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=140)** So if you don't have Homebrew, get that first, it's just one command that you copy into your terminal and install it here.
>
> **[2:28](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=148)** If you already have Homebrew, make sure it's up to date with the command brew update.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=154)** And then you need to install both node and Watchman.
>
> **[2:38](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=158)** Watchman is a recommended tool to have when working with React Native, it's not required, but React Native uses it to watch changes in the file system.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=168)** So this is done, you should now have node, let's check the version.
>
> **[2:52](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=172)** So the node I'm using is 1218, which is the latest as of this recording.
>
> **[2:56](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=176)** So make sure your version of node is recent as well.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=179)** And also [[npm]], let me check NPM.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=183)** So NPM is at 6.14.6, I usually like to NPM install dash GNPM to get the latest NPM version, which is now 6.14.8, as you can see, so this did upgrade MPM.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=195)** Okay, we have node, we have NPM, we have Watchman, so let's proceed, we did Xcode in the Mac store.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=203)** And the command line tools were installed with that, you can confirm that running Xcode again.
>
> **[3:28](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=208)** And bringing up the Xcode preferences menu and in locations, check the command line tools location here.
>
> **[3:36](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=216)** Also check on components here.
>
> **[3:39](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=219)** And let's install the latest simulator as well.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=223)** So you can download the 13.5 simulator and this will take some time as you can see, it's big as well.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=230)** So while this is installing, let's continue with the documentation, we need CocoaPods which is a Ruby program, and Ruby comes by default with Mac OS.
>
> **[4:00](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=240)** So we can use the Ruby gem command which is similar to NPM and node, it installs packages from the internet.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=247)** So we'll go ahead and sudo gem install CocoaPods.
>
> **[4:12](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=252)** Very good, so this German all of its dependencies are installed, and this is all for the environment setup for the iOS requirement on Mac OS.
>
> **[4:23](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=263)** Let's now go over setting up a development environment for Mac OS, but for the Android target.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=269)** So same thing you need node and Watchman, we have those and we need the [[Java]] Development Kit, which we can install using the brew cask install command in here, paste that in the terminal, brew cask install the open JDK.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=287)** And there we go successfully installed.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=290)** And furthermore, for Android development, you need Android Studio.
>
> **[4:55](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=295)** So download and install the latest Android Studio and this is just a Mac package, so let's download.
>
> **[5:03](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=303)** And as you can see, the current version of Android Studio is 4.0.1.
>
> **[5:07](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=307)** But any version after that should be okay.
>
> **[5:10](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=310)** Yes to that, we don't need to import any settings.
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=313)** And let me go through the setup wizard real quick.
>
> **[5:16](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=316)** Let's do custom in here.
>
> **[5:18](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=318)** Next, I like dark theme.
>
> **[5:21](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=321)** Make sure this performance checkbox is checked.
>
> **[5:24](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=324)** And we also need the Android virtual device, click Next, click next a few times, and click Finish.
>
> **[5:31](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=331)** And this will download and install the Android emulator.
>
> **[5:35](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=335)** So let that finish.
>
> **[5:37](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=337)** And if you get this system extension blocked by Intel Corporation abs, make sure to unblock it.
>
> **[5:44](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=344)** So you have to unlock this and click Allow on the Intel Corporation apps.
>
> **[5:50](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=350)** There you go, the download is done.
>
> **[5:53](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=353)** And you'll get to this screen.
>
> **[5:54](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=354)** Go ahead and click on configure and pick the SDK Manager.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=360)** And the latest right now is 10R API level 30, but I think what we need is API level 29.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=367)** And you can double check in the documentation.
>
> **[6:10](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=370)** It should mention here somewhere what Android version is required, as of the React Native version that you're using.
>
> **[6:17](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=377)** So we need Android 10 Q and we need the SDK platform 29, and we need Intel x86 and [[Google]] API's.
>
> **[6:26](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=386)** So you can do show package details.
>
> **[6:29](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=389)** And we need Android SDK platform 29, Intel x86 Atom 64 Image and Google API's Intel system image as well.
>
> **[6:41](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=401)** Click Apply confirming, you'll need to accept the licenses and next to download.
>
> **[6:50](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=410)** Another thing we need to do in Android Studio is to create a device emulator and to get to the emulator manager start a new Android Studio project.
>
> **[7:01](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=421)** And it can just be an empty project.
>
> **[7:04](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=424)** And as you can see, we don't have any devices here.
>
> **[7:07](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=427)** And to create new device, click on this AVD Manager icon.
>
> **[7:12](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=432)** And the default configured device here is the Android 10 plus, and that's not the target that we're using for React Native.
>
> **[7:21](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=441)** So I'm going to go ahead and remove this device.
>
> **[7:24](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=444)** And we'll create a new virtual device.
>
> **[7:26](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=446)** And this time, we'll pick the right target.
>
> **[7:29](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=449)** You can choose any device definition here, I'm just going to keep it on the default pixel two.
>
> **[7:35](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=455)** And right here is the release name.
>
> **[7:37](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=457)** So download the release associated with the target that we configured in the Android Studio.
>
> **[7:44](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=464)** And that right now is Android 10 API level 29.
>
> **[7:48](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=468)** And again, check the documentation to make sure which current Android release is required for the current version of the React Native that you're using.
>
> **[7:57](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=477)** When this is done, click Next.
>
> **[8:01](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=481)** And then this next screen, you can customize a few things about the device, I'm just going to keep everything as is and click Finish.
>
> **[8:09](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=489)** And now we see the device with the right target in here.
>
> **[8:12](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=492)** I'll go ahead and test that.
>
> **[8:15](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=495)** And you should see the Android emulator in here with its menu of things to do.
>
> **[8:21](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=501)** And the final thing we need for Android is to configure the Android home environment variable in one of these files, which depends on what shell you're using and how its configured.
>
> **[8:32](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=512)** In my case, I need the bash profile.
>
> **[8:35](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=515)** So we can just edit this bash profile file.
>
> **[8:38](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=518)** And if it doesn't exist, you can just create it and copy these commands here and paste them in here.
>
> **[8:43](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=523)** And these set the Android home variable first and then it appends to the path, the directories where the Android binaries exist.
>
> **[8:55](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=535)** So if we save and quit this file, and open up a new terminal, you should see tools like ADB, for example, which is the Android debug bridge.
>
> **[9:05](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=545)** That's handy when you need to connect an actual Android device to your Mac.
>
> **[9:10](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=550)** And that set for the Android requirements.
>
> **[9:13](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=553)** And after that you can use the React Native CLI command to create Android applications.
>
> **[9:18](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=558)** You also need an iOS developer account and you need to enroll in the [[Apple Developer]] program if you want to push your apps to the App Store.
>
> **[9:28](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=568)** You can enroll as an individual or as an organization, and membership is currently priced at 99 US dollars.
>
> **[9:37](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=577)** But again, you only need this if you plan to push your apps to the App Store.
>
> **[9:42](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=582)** You'll also need Google's Play Store account which requires a one time registration fee.
>
> **[9:47](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=587)** And with your developer account, you can push your applications to the Google Play Store.
>
> **[9:52](https://www.linkedin.com/learning/react-native-essential-training/requirements-and-setup?u=76281980&t=592)** And that's it, we're ready to start the Hello React Native project now and test it on both iOS and Android.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (29), [[React Native]] (14), [[Xcode]] (9), [[npm]] (7), [[Google]] (4)
> **CLI Commands:** node (8), npm (7), make (6), brew (3), ruby (3)
> **Prerequisites:** install (16), setup (4), set up (2), configure (2), you'll need (1)
> **Env Vars:** npm (7), api (5), sdk (3), cli (2), gnpm (1)
> **Tools:** command line (4), terminal (3), bash (2), atom (1)
> **Code Identifiers:** ios (5)
> **Versions:** 6.14.6 (1), 6.14.8 (1), 13.5 (1), 4.0.1 (1)
> **Documentation:** the documentation (3)


### 2. React Native Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Hello React Native with Expo](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=0)** - [Instructor] We are ready to create our first [[React Native]] app.
>
> **[0:03](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=3)** And I'll show you how to do that using the ExpoPlatform, which will allow you to follow this course on any operating system including [[Windows]], if that's what you're using.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=12)** You can actually build simple React Native apps right in your browser using the Expo Snack tool, which gives you an in-browser editor, complete with a file tree and syntax highlighting.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=23)** And the tool is integrated with other Expo tools like the iOS and [[Android]] preview.
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=29)** So, here is how this example is going to look on iOS.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=34)** Tap to play.
>
> **[0:35](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=35)** And you get the preview right here.
>
> **[0:38](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=38)** This iOS preview is the code that's here.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=41)** You can test things out by changing the text here, for example, "Hello, Expo Snack."
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=47)** And there you go.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=48)** You change something, the preview will auto-refresh.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=51)** And you can even install [[JavaScript]] modules from [[npm]] and use them here as well.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=56)** Also, you can develop your React Native applications here and test them on your own devices.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=62)** All you need to do is download the Expo Client mobile app on your phone, which is available on both iOS and Android.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=70)** And then you just scan this QR code to launch this example app on your phone.
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=76)** How cool is that?
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=77)** If you're on a Windows machine, this is probably the easiest option for you to follow this course.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=83)** If you want to take things one level up, you can run an Expo project locally using the Expo [[CLI]] node package.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=91)** And this is something you can npm install, -g for global, expo-cli.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=100)** So this is same command you would use on your Windows-based node installation as well.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=105)** And then to create an export React Native project, you use the command, "Expo init," and then give it the name of the project, which will also be the name of the folder created in the working directory.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=118)** Let's name this project, "Hello Expo."
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=122)** So the command will ask you, "What kind of workflow would you like for your project," and you have some options here.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=128)** This is mostly to pick either regular or TypeScript flows, and whether you need a managed workflow or not.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=134)** So let's pick the managed blank workflow.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=138)** And it's currently installing all the dependencies for this project.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=143)** So this will take some time.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=144)** When it's done, as you see in instructions here, we can just cd into the newly-created directory.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=151)** And to run things we do npm start.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=155)** And once the project is started, it will open up this screen, which has useful shortcuts to run the applications either directly in simulators or on your own device as well.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=167)** So I'm going to go ahead and run on an iOS simulator.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=173)** So as you can see, this open up an iPhone simulator.
>
> **[2:56](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=176)** And it will take some time to load up.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=180)** And you should get the Open in "Expo" dialog here.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=183)** And you'll see in the logs here how it's bundling.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=186)** And when it's done, you'll get the application with this Command D menu.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=192)** And this here is the default screen for the Expo app.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=196)** So let me go back to the terminal here.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=198)** And I'm going to open up a new tab on this.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=201)** And then launch your code editor here.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=203)** I use VS Code, So I'll open up VS code in here.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=207)** And the entry point here is app.js and this one will have the text that you see on the screen.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=214)** So we can change that and save, and it should be auto refreshed in your simulator.
>
> **[3:40](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=220)** You can also test this application in a web browser.
>
> **[3:45](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=225)** And this will open up the same application.
>
> **[3:48](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=228)** And it's also connected to the VS code that we have here.
>
> **[3:52](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-with-expo?u=76281980&t=232)** We save and it will auto-reload.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[Windows]] (3), [[npm]] (3), [[Android]] (2), [[CLI]] (2)
> **CLI Commands:** npm (3), node (2), cd (1)
> **Code Identifiers:** ios (5), iphone (1)
> **Tools:** vs code (3), terminal (1)
> **Env Vars:** npm (1), cli (1)
> **Prerequisites:** install (2)
> **File Paths:** app.js (1)
> **Cross-References:** go back to (1)

#### [Hello React Native on iOS](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=1)** - [Instructor] To use [[React Native]] for iOS without expo, you can use this command.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=5)** npx [[React.js|React]]-native init, and then the name of your applications.
>
> **[0:11](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=11)** And I'm not running this command yet.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=13)** This command will download the temporary copy of the React Native [[CLI]] and then use it to initialize a React Native project.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=20)** However, since we're going to be using the React Native command many times, let's just install it permanently with [[npm]] installed-global React-native.
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=31)** The only downside to this method is that when React Native releases a new version, you need to update this local of the CLI if you want to use the new version.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=41)** While the NPX way will always use the latest available released version, but download it every time.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=47)** When this package is installed, it will make the React Native command available globally like this.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=53)** So let's go ahead and use it.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=54)** We do React-native init, the name of the project.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=60)** So we'll do HelloRN here.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=62)** And this command is going to take some time.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=64)** It does a few things.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=65)** Just like expo, it'll create a directory on this level with the same name that we pass through it, and it will then install the packages required for React Native to work.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=73)** When the command is done, it will give you some instructions on how to run the application for both iOS and [[Android]].
>
> **[1:20](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=80)** We'll test it for iOS first and then we'll do Android.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=83)** So you can run it for iOS, either directly using the React Native command run iOS, or you can open it up in X code and run it from X code as well.
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=93)** So let me go to HelloRN and run the React Native run iOS command.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=100)** So this will launch up the iPhone simulator.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=103)** And once it building, it will run the React Native application directly on the simulator without an expo client.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=111)** At some point, while this project is building, it will open up another terminal for the Metro bundler, and then it will launch the application on the simulator.
>
> **[2:01](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=121)** And this is the screen that you get.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=123)** Which you can edit in the project.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=126)** So in here, let's open up a code editor on this directory and the entry point again, is App.js.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=135)** And as you can see, the default application comes fully configured with things like [[ESLint]], Prettier, Babbel, Metro bundler, and Flow as well, which is a static type checker, just like TypeScript.
>
> **[2:30](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=150)** This part here is the type of the app function.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=154)** And let me just remove it in here.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=155)** We won't be covering flow or TypeScript in this course, but they add great value to any project.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=162)** Once you get comfortable with React Native's components and APIs, take a look at either flow or TypeScript and learn about what they bring to the table.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=170)** And this is all the code that you see on the screen here.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=173)** So you can change anything in here and just like expo, things will auto refresh.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=179)** So here's step one that you see on the screen so we can change things and save, and it should be auto refreshed in here.
>
> **[3:07](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=187)** And there is also a command + D screens.
>
> **[3:10](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=190)** D is for debug.
>
> **[3:11](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=191)** This is the debug menu in React Native.
>
> **[3:13](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=193)** Or if you're testing on an actual device, you can just shake the device to open it up.
>
> **[3:17](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=197)** So this is the debug menu, which has a few handy things here.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=201)** You can, for example, disabled, the fast refresh that happens on save.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=205)** And if you do that, then you'll need to reload every time you save.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=209)** You can change the configuration for the bundler and the inspector is handy as well.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=213)** This allows you to inspect a few things.
>
> **[3:36](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=216)** For example, here, you can inspect elements.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=217)** You can just tap on an element to see what is going on with that element.
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=222)** You can see its box model, you can see some of the styles.
>
> **[3:45](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=225)** And this inspector display is permanent.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=227)** So when you're done with it, you can hide it again.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=230)** But the more important line here is really the debug line.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=233)** If you click it, React Native will open up your browser dev tools, and you can do a few things here.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=239)** You can, for example, reload the app from here if you need to.
>
> **[4:02](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=242)** And of course you can do everything the developer tools allow you to do.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=246)** For example, we can just come in here and console log a message and save, and this message will show up in the open developer tools.
>
> **[4:14](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=254)** So it's probably a very good idea to always be in this mode and always keep your eye on the developer tools as you're building your application.
>
> **[4:23](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=263)** And you can use Command + R to reload this application, and this is a regular iPhone application.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=269)** You can, for example, kill it with a swipe up just like you kill any other application and you see it on the screen right now.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=275)** You can click it to run it again.
>
> **[4:37](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=277)** And down here, there are some cool links to learn the basics of React Native.
>
> **[4:42](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=282)** These are links to the official React Native documentations.
>
> **[4:45](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=285)** For example, if you click on styles, it will open up the style section of the React Native documentation in here.
>
> **[4:53](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=293)** Let's explore the direct restructure here a little bit further.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=296)** Starting with package.[[JSON]].
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=298)** And you can see right here what dependencies this project needs.
>
> **[5:02](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=302)** And it's just React and React Native.
>
> **[5:04](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=304)** The notice that there is no React Dom in here, we're not building for the Dom, we're building for React Native.
>
> **[5:10](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=310)** React Native also comes packaged with Jest.
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=313)** So you can use just to write your tests and things are configured with Babbel and the Metro React Native bundler.
>
> **[5:22](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=322)** The entry point for the whole project is actually this index.js file.
>
> **[5:27](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=327)** Which here imports the app component that we saw, the main component in this example, and it registered this component with the app registry package from React Native.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=340)** So this is equivalent to the ReactDom.render method that renders a component into the Dom.
>
> **[5:46](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=346)** This app registry registered the component into the React Native flow and make it show up in the simulator.
>
> **[5:54](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=354)** And there's also app.json where you can organize any variables that you need in your application.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=360)** Then app.js is the main component and this component has a few cool examples of things you can do with React Native.
>
> **[6:10](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=370)** So right out of the box, we get so much value.
>
> **[6:13](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=373)** We're simply writing [[JavaScript]] and React, and we're seeing our application in a simulator on an iPhone.
>
> **[6:20](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=380)** And most importantly, we didn't need to do a build step for the application between changes.
>
> **[6:24](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=384)** Things just work.
>
> **[6:25](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=385)** And you have options to control how they work.
>
> **[6:28](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=388)** We also get to debug this application as if it was a web application with the powerful Chrome dev tools.
>
> **[6:34](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=394)** All of these are huge ones for working with React Native.
>
> **[6:38](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-ios?u=76281980&t=398)** In the next video, we'll test the same React application on Android.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (24), [[React.js|React]] (7), [[Android]] (3), [[CLI]] (2), [[JSON]] (2)
> **Analogies:** for example (6), just like (4)
> **Code Identifiers:** ios (6), iphone (3)
> **File Paths:** app.js (2), package.json (1), index.js (1), app.json (1)
> **CLI Commands:** npx (2), make (2), npm (1)
> **Env Vars:** cli (2), npx (1)
> **Prerequisites:** install (2), you'll need (1)
> **UI Navigation:** go to (1), click on (1)

#### [Hello React Native on Android](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=1)** - [Instructor] To run the project for [[Android]], the command is [[React.js|react]]-native run-android.
>
> **[0:08](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=8)** And this will launch up the Android emulator and run the Metro Bundler again for Android.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=15)** And when Metro is done bundling, the emulator will load the same application that we're working with.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=20)** So, again, we can come in here and change anything we want.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=25)** We change this back to One spelled out, and it will auto-reload in Android as well.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=32)** And I want you to notice one thing.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=34)** The Debug instructions here are different.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=37)** So in here, you press Cmd or Ctrl + M to get to the Debug menu.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=42)** And you can open up the debugger, and you'll see the same console.log message as well.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=47)** The interesting thing is that, if you remember, the instructions on iOS were to press Command + D.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=54)** And the same application rendered a different message for the Android application, and I want to point your attention to that.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=64)** So this would be in the DebugInstruction component, which is coming from react-native/Libraries.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=71)** Now, what I'm going to do is I'll go to this place under node_modules and find this DebugInstructions component.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=79)** So here is the react-native package, and we need Libraries, and we need the NewAppScreen, and under components, we'll find the DebugInstructions component.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=92)** And here is the part that I'd like you to notice.
>
> **[1:36](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=96)** This component is written using the Platform.select method.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=102)** So Platform is something that you also import from react-native.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=106)** And its select method, you give it an object with ios, and you can also use android, or you can use default, which will work for Android in this case.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=115)** So what this does is it will detect the platform and use the properties here to decide which value to use for that platform.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=126)** So on ios, it will use this component, and on android and all the other platforms, it will use this different component that has different instructions.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=135)** So this is one way to do something differently for iOS and Android.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=140)** Another platform customization that we can do is using the filename itself.
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=145)** So if we rename App.js to App.ios.js, and if we duplicate this file and make another copy, App.android.js, then what [[React Native]] is going to do is that it will use App.android.js for the Android platform and use the App.ios.js for the iOS platform.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=168)** So, for example, let's remove the header here in App.android.js and save, and you'll notice that the header is gone in here.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=177)** But if we run the same application on iOS, the header will still be there because it's in App.ios.js.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=183)** Let's actually test that, react-native run-ios.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=189)** The simulator is running.
>
> **[3:10](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=190)** And as you can see, the header is still there, while it is not there in the Android build because it's using a different file here.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=198)** So this is one other strategy to have different components for different platforms, but the code usually can be mostly shared between platforms.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=207)** And you would something like Platform.select to just customize a small part of the code.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=212)** And you can also use the Platform.select to customize the styling of your component, which is often necessary because the layout of Android and iOS are different.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=223)** So I'm going to delete the Android file and go back to a regular, just one file in here.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=230)** So you can actually keep both simulators open and test your changes in both simulator at once.
>
> **[3:55](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=235)** And this is especially easy on the Expo platform as well.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=239)** But in this course, I'm going to test everything on iOS and test things on Android after we're done with major milestones.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/hello-react-native-on-android?u=76281980&t=247)** In the next video, we'll get a basic introduction on using styles with React Native.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (18), [[React.js|React]] (5), [[React Native]] (2)
> **File Paths:** app.ios.js (3), app.android.js (3), app.js (1)
> **Code Identifiers:** ios (6), node_modules (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Styling React Native components](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=0)** - [Instructor] Let's talk briefly about using CSS with [[React Native]], which is a bit different than what we're used to on the web.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=7)** While [[React.js|React]] itself does not have any restrictions on how to use CSS, React Native enforces a standardized approach for styling.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=15)** You can't use all CSS properties in React Native projects.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=18)** You can only use the subset that is supported by React Native, which relies mostly on Flexbox for layout and focus on simplicity overall.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=28)** When we write CSS for a web project, we have to deal with how CSS support varies among different browsers.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=36)** This is not an issue with React Native CSS subset, although sometimes, you'll need to conditionally use or not use a CSS property based on the platform or give that property different values based on the platform.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=48)** Since React Native is just a [[JavaScript]] framework without a browser that can parse CSS, React Natives way to use CSS properties is using the JavaScript API.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=58)** This means using JavaScript objects instead of CSS strings and just like using JavaScript to represent [[HTML]], using JavaScript to represent CSS allows for a much richer experience and greater control.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=72)** This CSS in JavaScript thing is supported in React itself but React Native requires it and enhances it.
>
> **[1:20](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=80)** So let's work through some examples.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=83)** But before we do that, let me simplify this example here.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=87)** So let me clean up the component and let's just keep one view component and one text component and let's remove everything else.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=100)** And we can save to format.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=103)** This is Prettier that just auto formatted this component for me.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=108)** And to have it integrated in your editor, you would install an extension.
>
> **[1:52](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=112)** So I have the Prettier code extension here for VS code.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=115)** And then you would configure your editor to auto format when you save.
>
> **[2:00](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=120)** And you can also see how [[ESLint]] is working and given us warnings that we now have unused variables.
>
> **[2:07](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=127)** So we can clean these variables as well and auto format.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=133)** I'm going to actually delete all of these new screen components and not use them.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=138)** For the styles properties here, we only need the section container and the section title, everything else is gone.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=146)** And in here, we don't have colors anymore.
>
> **[2:30](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=150)** So let's just remove this and keep it default.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=156)** So a few things to notice right away, there is a margin top.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=160)** If we don't have this margin top, then the text would overlap with the controls that the iPhone here is using.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=168)** So this is something that you would need to take care of.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=171)** First, give it some margin.
>
> **[2:52](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=172)** I usually do 40 in here, and there's also some horizontal padding in here.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=179)** Now notice how padding horizontal is not something standard in CSS properties.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=185)** This is an example of a CSS property that's part of React Native enhancements to this styling.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=192)** And there are other enhancements that are React related.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=195)** For example, you can give this styles property an array of values.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=201)** We can, for example, add an object here and say something like make the color red.
>
> **[3:28](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=208)** This means, first apply the section title style object then apply this other object to set the color to red.
>
> **[3:35](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=215)** And because the color red style came last, it will override any color styling that may come before it.
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=222)** So if section title here had a color blue property, the color red object will override that because it was included after the section title object.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=233)** You'll notice how ESLint is immediately complaining that this is an inline style and it is recommended that you don't use inline styles and that you would use a styles object created through the stylesheet.create method.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=246)** So let me tell you why.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=248)** If you make a typo in here, and you save, you get a clear exception in here that you are trying to use an invalid style property.
>
> **[4:19](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=259)** So that's a good signal.
>
> **[4:20](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=260)** While if you make a typo in this object, the application will render correctly was just a warning that you're using an invalid style key.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=269)** So that's one of the differences how using a stylesheet.create based object is a little bit more strict and more clear in its dealing with CSS properties.
>
> **[4:38](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=278)** All right, so let me get rid of this extra object here and just keep step one as a blue text and just keep one item in this array.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=287)** You can get rid of the area but I'm going to keep it here for the next example.
>
> **[4:51](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=291)** And in fact, let's go back to having step two and step three so that we learn about the Flex layout.
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=298)** And let me rename this to just container and rename section title to just title just for simplicity.
>
> **[5:06](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=306)** And also to add some visibility into what we're going to do next, ;et me give the container a different background color.
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=313)** So background color, and let's go with orange.
>
> **[5:16](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=316)** So that's our container and it's not taking the whole screen.
>
> **[5:20](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=320)** It's just sizing itself to the content that's in it.
>
> **[5:24](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=324)** If we add the magic Flex one property, that tells the container to expand and use all the available space in the layout in the default direction, which is vertical.
>
> **[5:38](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=338)** And not only we can control the container itself, we can control the items.
>
> **[5:42](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=342)** So for example, we can say justify content to be center which means align all the items in the container to be centered in the Flex direction, which again is vertical.
>
> **[5:55](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=355)** We can also align the items to be centered as well but this align items property, we'll align them in the opposite direction for the Flex direction, which is vertical.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=367)** So this will align them horizontally.
>
> **[6:10](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=370)** So that means this padding horizontal here is no longer needed.
>
> **[6:14](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=374)** So there are a few values here for justify.
>
> **[6:17](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=377)** For example the default is Flex start and this will put the content at the beginning of the Flex direction.
>
> **[6:24](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=384)** There is also a Flex end.
>
> **[6:26](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=386)** If you need to put it at the end of the Flex direction.
>
> **[6:29](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=389)** You can also use space between which puts as much space between the content as possible.
>
> **[6:36](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=396)** There's also a space around which justifies the content by putting equal spaces around them.
>
> **[6:44](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=404)** There is a lot of Flexibility in positioning things around using this Flex layout.
>
> **[6:49](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=409)** And it's a lot more Flexible than that.
>
> **[6:51](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=411)** You can, for example, change the Flex direction itself to be row instead of the default column.
>
> **[6:58](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=418)** And that would align the content horizontally just like that.
>
> **[7:03](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=423)** And in this case, the justify content and align items values are flipped in terms of the direction that they work on.
>
> **[7:11](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=431)** So the justify content will now work in the row direction and the align items will now work in the inverse direction.
>
> **[7:18](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=438)** So if we want to put the content at the end, we can align items to Flex and in here or Flex start to put it up top.
>
> **[7:29](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=449)** So notice how align items is now working vertically while justify content will work horizontally.
>
> **[7:36](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=456)** So if we put Flex start in here, there will be no more spaces around them horizontally and they will all be justified on the start of the Flex direction, which is row in this case.
>
> **[7:48](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=468)** So let me go back to the default direction and with spaces around and centered as well.
>
> **[7:57](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=477)** Now, these text elements are not really Flexed.
>
> **[8:00](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=480)** We can inspect that by giving them background color.
>
> **[8:03](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=483)** So let's go with gray and let me show you how we can use Flex values on these texts children's as well.
>
> **[8:13](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=493)** I'm going to add it here.
>
> **[8:14](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=494)** So I'll just add another object directly here and do Flex one in here.
>
> **[8:20](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=500)** And don't worry about the warning just for the sake of the example.
>
> **[8:23](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=503)** So check it out.
>
> **[8:25](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=505)** The children used their Flex to take all the available space within the container space.
>
> **[8:33](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=513)** To make this a little bit more clear, let me get rid of align items and have the default which is going to take the whole screen as well.
>
> **[8:39](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=519)** And let me give the titles a little bit of margin.
>
> **[8:43](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=523)** So just 10 here as a margin.
>
> **[8:46](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=526)** And here we go.
>
> **[8:47](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=527)** The text elements are taking 1/3 of the screen each and this is happening through the Flex layout.
>
> **[8:56](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=536)** And the reason they're taking one third of the screen is because all of their Flex values are the same.
>
> **[9:03](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=543)** So the container divide their layout equally.
>
> **[9:06](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=546)** If the first Flex child here has a value of two instead of one, while the other ones are going to take one and one, that means the first element is going to be as high as both the second one and third one.
>
> **[9:21](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=561)** So basically the first one is going to take half the screen.
>
> **[9:24](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=564)** And the second and third ones will take one quarter of the screen each.
>
> **[9:28](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=568)** So you can control these Flex values to give any height that you want to any element on the screen.
>
> **[9:33](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=573)** And there is no limit to that.
>
> **[9:35](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=575)** I can say that this element has five.
>
> **[9:38](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=578)** This element has four, and this element has three and check out how these elements took that space on the screen.
>
> **[9:45](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=585)** The Flex layout basically sums up all these Flex numbers and then give every child element the portion that it requested.
>
> **[9:54](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=594)** There is a lot more to the Flex model than that.
>
> **[9:57](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=597)** And I encourage you to learn more about it on your own.
>
> **[10:01](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=601)** Check out this Yoga layout site which has many examples and an integrated playground for you to play around with everything about Flex.
>
> **[10:09](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=609)** There's also this fun little game called Flex Froggy which I remember helping me a lot when I was learning about Flex myself.
>
> **[10:16](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=616)** This one is teaching the web model which is slightly different than the React Native model but it covers the basics that are shared between all of them.
>
> **[10:25](https://www.linkedin.com/learning/react-native-essential-training/styling-react-native-components?u=76281980&t=625)** It's a fun little game to play and I think you're going to like it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (9), [[JavaScript]] (6), [[React.js|React]] (4), [[ESLint]] (2), [[HTML]] (1)
> **Env Vars:** css (15), api (1), html (1)
> **Definitions:** is a  (5), is an  (2)
> **Analogies:** for example (5), just like (2)
> **CLI Commands:** make (4)
> **Prerequisites:** you'll need (1), install (1), configure (1)
> **Cross-References:** go back to (2)
> **Warnings:** warning (2)

#### [Exploring components and APIs](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=0)** - [Instructor] The [[React Native]] repository on [[GitHub]] under the Facebook organization here has a few really good reference examples and packages that you should explore.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=9)** But let me point your attention to one particular package that is very helpful.
>
> **[0:14](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=14)** And you can find that under packages here, and I'm talking about this rn-tester package.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=20)** This package is basically a demo of all the available React Native views and modules.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=26)** Let me show you.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=27)** There are some instructions here that you can do.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=30)** Basically we clone the React Native repo, all of it.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=34)** So we just paste the same command to clone the React Native repo.
>
> **[0:38](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=38)** Then we go into the new created directory and run [[npm]] install in here, and then we need to run npm start here.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=50)** And keep this running in a terminal.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=52)** And from another terminal, let's go into packages, and then rn-tester.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=59)** And in here, we run npm install as well.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=63)** And we can follow the directions here to install the bundler gem, and then we use the bundler gem to install the dependencies of this project.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=73)** So we need to gem install bundler, and I need to sudo this command.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=79)** And then once bundler is installed, we run the bundle install and pod install commands.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=87)** When the pod installation is complete, take a look at what's in this directory, and there is an xcworkspace file.
>
> **[1:36](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=96)** This is the file that we need to open in [[Xcode]].
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=99)** So we can just do open and that file and to run the RN Tester project, we can just click the run button here.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=108)** And it will launch this RN Tester project in the simulator.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=113)** And let me go ahead and open up my code editor on this directory.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=118)** You are going to love this RN Tester project.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=122)** It has many examples of a lot of things that you can do with React Native.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=126)** You can explore how these examples look in iPhone, and you can also run the same project in [[Android]] and see how things are different in Android.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=134)** You can also explore the source code of all these components and APIs.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=138)** So let's explore some of the UI components that are presented here in the RN Tester project.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=143)** Let's take a look at Button.
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=145)** And in here, you'll see multiple examples of how to use the button component in React Native and how to customize its color and layout and how to make it disabled.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=154)** And you can press those to see the action that they do, which is calling the React Native alert API.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=160)** And all of these examples are available right here in the source code.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=164)** So you can do a file search here and look for button, and you'll see this button example right here.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=170)** And in here, you'll see the four examples that are presented in the RN Tester UI app.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=177)** So here is the unbutton press function that just uses the alert API, which we are importing from React Native.
>
> **[3:04](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=184)** And you'll see the four examples here in an exported array.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=188)** And every one of them has a render function returning the component example here.
>
> **[3:13](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=193)** So this is the simple button example that we see in here.
>
> **[3:17](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=197)** If you need to adjust the color of a button, you can just pass the color property here.
>
> **[3:22](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=202)** If you want to disable the button, we can just pass the disabled attribute.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=207)** So these are very simple to follow examples, and there are so many of them.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=212)** So let's explore some more.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=213)** The one UI element that probably exists in every React Native application is the view element.
>
> **[3:40](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=220)** So search for view and you'll see a few examples here.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=224)** And what I'm looking for is this one, the basic building block of all UI.
>
> **[3:49](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=229)** So this screen here gives you a lot of examples on how to use the view element.
>
> **[3:54](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=234)** This view element is often compared to the div element in [[HTML]].
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=238)** Let's take a look at its source code.
>
> **[4:00](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=240)** So look for view example.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=244)** And the source code of this example is mostly about styling view elements.
>
> **[4:09](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=249)** You'll see a lot of examples on how to style the view element differently.
>
> **[4:14](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=254)** Another important UI element here is the text element.
>
> **[4:18](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=258)** So unlike HTML on the web, you can't actually have free form of text with the React Native application.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=265)** You have to wrap any text with a text React Native element.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=269)** And another element example is the image element.
>
> **[4:34](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=274)** And in here, you'll see examples of how to use the image element and all the attributes that you can use with it and how to style it.
>
> **[4:42](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=282)** So take a look at all these examples and explore their source code and get yourself familiar with the way they are used in React Native.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=290)** One thing you'll notice is that there are some components that are platform specific, like for example, Date Picker iOS in here.
>
> **[4:57](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=297)** If you search for iOS, you'll see all the iOS elements.
>
> **[5:01](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=301)** And of course on Android, those will have the Android suffix as well.
>
> **[5:05](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=305)** These components can be only used in their platform, but there are usually better third-party components that provide solutions that can be rendered on all platforms.
>
> **[5:15](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=315)** Right under the components section, you can explore the APIs available to you in React Native.
>
> **[5:22](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=322)** For example, here is the alert platform API, and how to use all of its different options.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/exploring-components-and-apis?u=76281980&t=328)** And you can see the source code for these API examples as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (13), [[Android]] (4), [[npm]] (3), [[HTML]] (2), [[GitHub]] (1)
> **Prerequisites:** install (7)
> **CLI Commands:** npm (3), find (1), sudo (1), make (1)
> **Env Vars:** api (4), html (2)
> **Exercise Files:** source code (6)
> **Code Identifiers:** ios (3), iphone (1)
> **Tools:** terminal (2), github (1)
> **Analogies:** for example (2)


### 3. Building a Simple Game App

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction and preview](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=0)** - [Presenter] In this chapter, we're going to build this Target Sum Game.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=4)** So let me quickly explain it to you.
>
> **[0:06](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=6)** You'll get a random number here, 26.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=9)** And you'll get six random numbers here.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=12)** And some of these six random numbers, some to the 26 value.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=16)** The user is challenged to pick the numbers that sum to the target sum.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=21)** For every game, you get 10 seconds to solve the game.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=25)** If you don't solve it within 10 seconds, you automatically lose.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=30)** So let's try to win this game.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=33)** If you pick the right numbers, you win.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview-2?u=76281980&t=36)** You can play again and if you pick the wrong numbers, you lose.

> [!info]- Semantic Content
>
> **Speakers:** - [presenter] (1)

#### [Initializing the TargetSum app](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=0)** - [Instructor] Let's create a brand new [[React Native]] project for our target sum game.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=5)** We'll start with [[React.js|React]] init TargetSum.
>
> **[0:11](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=11)** CD TargetSum.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=13)** And react-native run-ios.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=17)** When the command is done, we should see the package we're running.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=20)** We should see the React Native template application running in the simulator.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=25)** Let me now run Atom here and start changing things.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=30)** The first thing I want to do is create a new folder under TargetSum.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=34)** We call this source folder.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=36)** And inside this source folder we'll build our complete application and put all the React Native components in there.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=41)** And let's create a new folder under source.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=43)** Call this folder components.
>
> **[0:46](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=46)** And inside components, I'll create a new file and call this file App.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=51)** So this is my top level app component.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=55)** And this is going to be a regular React class component.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=58)** I'll name this component App, and import it as default.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=62)** Let's make a very simple app component.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=64)** We'll need to import a few things from a React Native.
>
> **[1:08](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=68)** Anything you do in the React Native application is part of the React Native library.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=73)** So let's go ahead and bring in the View component and the Text component.
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=77)** And use those.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=79)** So here's my view, and inside the view, we'll put a text.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=83)** And put a placeholder text in there.
>
> **[1:26](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=86)** Okay so this is looking good, I'm exporting this.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=88)** So in index.ios.js, instead of all this.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=92)** In fact, except the last line, I'm going to delete everything.
>
> **[1:36](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=96)** And I'm going to import App from the same level here.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=101)** Source components/App.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=105)** And I'll just use App here.
>
> **[1:47](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=107)** So I only need the app registry from React Native.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=111)** So let's import that.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=113)** Import AppRegistry from react-native.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=117)** And I'll do the exact same thing in index.[[Android]].js.
>
> **[2:01](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=121)** 'Cause this is the entry level for Android applications as well.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=125)** Okay so if everything work, the template should go away and I should see the my TargetSum text in there.
>
> **[2:11](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=131)** So Command + R.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=133)** And it's not working.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=136)** So could not resolve TargetSum source components App.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=140)** Did I misspell that?
>
> **[2:21](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=141)** Yes I did.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=142)** So its components.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=144)** Missing an N in here.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=146)** Reload.
>
> **[2:28](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=148)** And you should see the TargetSum container text right here in the corner.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=153)** But we know that things are working.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=155)** In fact, let's not have a text at all.
>
> **[2:38](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=158)** Let's just give our container a background color so that we know that we have an empty container to work with.
>
> **[2:45](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=165)** So we'll do a style in here.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=167)** And although you can use backgroundColor in here directly, it's usually better to do all the styling through the React Native style sheet create function.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=177)** So instead of that, we'll have styles. say container variable.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=183)** And this container variable is going to be defined on the style sheet that comes with React Native.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=189)** So we'll do const styles, equal StyleSheet.create.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=195)** And then in here we'll give it an object.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=198)** It's just one argument.
>
> **[3:19](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=199)** An object of all the properties of the styles that we want.
>
> **[3:22](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=202)** So we want a container property.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=205)** And in here we define the styles.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=207)** For example, background color.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=209)** And let's just go with a simple gray color.
>
> **[3:31](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=211)** And give the whole view a flex of one so that it stretches across the whole screen.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=217)** And let's go ahead and test that.
>
> **[3:38](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=218)** Now we have a gray background color for an empty container in this simple React application.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=224)** Now the advantage to using StyleSheet.create versus doing this directly with [[JavaScript]] object.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=230)** Is that if you come here and you do a wrong CSS property.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=233)** Let's for example say that you did FLX instead of flex.
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=238)** Just an honest mistake.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=239)** But if you do this through regular JavaScript object, this will probably be ignored.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=244)** While in React Native, you will actually get a very clear error that FLX is not a valid style sheet property.
>
> **[4:11](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=251)** And it gives you the list of all the valid style sheet properties at that point.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=255)** So if we don't use StyleSheet.create, say that we do that directly through an object.
>
> **[4:21](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=261)** Let's see the difference.
>
> **[4:23](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=263)** We don't really get a very clear error that we used an invalid style sheet property.
>
> **[4:28](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=268)** Although React Native still gives you a warning here.
>
> **[4:31](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-targetsum-app?u=76281980&t=271)** But I like to see an error if I use something wrong in the styles that I'm doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (11), [[React.js|React]] (5), [[Android]] (2), [[JavaScript]] (2)
> **Env Vars:** flx (2), css (1)
> **File Paths:** index.ios.js (1), index.android.js (1)
> **CLI Commands:** cd (1), make (1)
> **Exercise Files:** template (2)
> **Analogies:** for example (2)
> **Code Identifiers:** backgroundcolor (1)
> **Tools:** atom (1)

#### [Configuring ESLint](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=0)** - [Instructor] The first order of business is to bring in some [[ESLint]] configuration.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=5)** If I forget a comma here or actually leave something that is not used, I'd like ESLint to be configured to tell me about these problems when I save this file.
>
> **[0:14](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=14)** Right now, there is no ESLint configured.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=16)** So you can install ESLint and bring in any configuration you like.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=20)** I like to use my own, slightly modified recommended configuration for ESLint, it's part of my DOT files repo as well.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=27)** So it's .eslintrc.js in here.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=30)** And this configuration uses the Babel ESLint and the main recommended ESLint rules, plus the recommended [[React.js|react]] plugin rules and a few customizations.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=40)** So we'll add this file under TargetSum as .eslintrc.js.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=47)** And to get this file to work, we need to install a few dependencies.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=51)** So [[npm]] install, these are development dependencies, so dash D.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=56)** We need ESLint itself.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=58)** I also need Babel-ESLint because my configuration uses that as a parser.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=63)** And I need ESLint plugin react.
>
> **[1:08](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=68)** So you need all three of these packages if you're using my exact same customized configuration.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=74)** Otherwise, you might need to install something like ESLint Airbnb configuration file.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=79)** Let's test, you might need to restart your editor to get ESLint configuration to work, but now, if I go to App.js and save, I should see the problems and ESLint gives me exactly what is wrong.
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=93)** You'll see the error messages right here in your editor and the linter says, "Text is undefined," so remove that.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/configuring-eslint?u=76281980&t=102)** And it says you forgot a semicolon here, so fix that and make ESLint happy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (14), [[React.js|React]] (2), [[npm]] (1)
> **Prerequisites:** install (4)
> **File Paths:** eslintrc.js (2), app.js (1)
> **Best Practices:** recommended (3)
> **CLI Commands:** npm (1), make (1)
> **Env Vars:** dot (1), npm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [The game component with a random target](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=0)** - [Instructor] Let's start on the game logic.
>
> **[0:03](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=3)** First of all, it might be a good idea to have a game component and make the app component, render that game component and put all the logic related to a single game inside the game component.
>
> **[0:14](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=14)** This way we can have the app component reset the game component at any point by just remounting another game component.
>
> **[0:22](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=22)** Which will be handy when we need to replay the game.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=25)** So I'm going to copy the content of this file, this will be our game component and in the app component, I'll just render this game component.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=34)** I don't need any children here so I'm going to make it self-closing and we'll import game from the same level here, game digests.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=44)** It's been a longer need the view or actually the style sheet.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=47)** I don't need anything from [[React Native]].
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=50)** So, this is just rendering the game component.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=54)** Again, we'll come back to this app component when we need to and you'll see why this decision is a good one to start with every time you have a case like this.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=62)** Also, in here, we can have some default.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=65)** Any properties that we want to pass to the game component can be controlled from within the app component itself.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=71)** So far if we don't know these properties, we'll come back here once we do.
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=76)** Alright, let's create the game component, Game.JS, this is the exact app component that we started with, but we'll name it game.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=87)** And what I want to do first in this game component is to specify the target summits of.
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=93)** The initial number that we want to challenge the players to find a sum for.
>
> **[1:38](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=98)** So let's create a text component in here and inside the text component, I'll just have a placeholder of 42.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=105)** We need to import text from react native, let's test.
>
> **[1:49](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=109)** So you'll see the 42 appearing here in the corner.
>
> **[1:52](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=112)** Let's actually give it some styles.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=114)** We'll do style equal styles.target.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=118)** This is a [[Microsoft Word|word]] target dev.
>
> **[2:01](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=121)** I am not a CSS expert, but I'll do some minimal styling in this app just to get things to look decent for now.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=128)** I'll fast forward to the styles that I came up with here and explain them real quick.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=133)** I've given the container a padding top of 30, so that we keep out of the way of the phone controls here.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=140)** I gave the target a bigger font and a different background color, and a little bit of horizontal margin using this margin horizontal property, which is an example of a layout property that is introduced just in react native and it's equivalent to setting both margin left and margin right.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=156)** So you notice how I get the styling out of the way before I actually start thinking about the logic of this target value.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=164)** Which is by the way, right now.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=166)** So instead of 42, we need a dynamic value that is generated for every game.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=173)** So when I initialize a game, I need a private property for this game with a randomly selected target.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=179)** So when I need something private to the game instance itself, that's the sign that it should go on the instance of the property directly.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=188)** For example, we'll call it target, so this.target.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=192)** First I don't have a target, so let's go ahead and just generate the random target.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=196)** So target equal, we'll do math.random and this gives me from zero to 0.999, so let's do a target between 10 and say 50.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=207)** You don't want to target under 10 because that would be easy to solve.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=212)** So we'll do 10 plus 40 times math.random and we'll floor this so that we don't have any fractions.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=221)** And this should actually work.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=223)** Let's test it.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=224)** 46 32, 25, excellent.
>
> **[3:49](https://www.linkedin.com/learning/react-native-essential-training/the-game-component-with-a-random-target?u=76281980&t=229)** In the next this movie, we'll generate the random numbers that will potentially sum to this target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** game.js (1)
> **Env Vars:** css (1)
> **Versions:** 0.999 (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Generating the random play numbers](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=0)** - [Instructor] We have a target sum it's now time to generate the actual numbers that the player is going to use to sum up to the target.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=9)** So before we do that, let me talk about my decision to keep this target div in this top level game component and not create a child component just to represent this target div.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=20)** This is definitely a style preference.
>
> **[0:22](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=22)** If you want this target device to be contained and you want the style of this target div to be contained, then a child component to represent this target div might be worth it.
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=31)** However, a child component to represent this target, div also introduce some complexities.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=36)** So it's just something that you need to decide on.
>
> **[0:39](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=39)** I decided to keep this target text in this game component for many reasons.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=44)** But one of them is that it's the only text of this type, the target text.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=49)** And the other reason is that a lot of the calculations in this game component are going to depend on the value of this target.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=55)** So introducing the child component here is going to introduce some data flow complexities in the game, and I'm trying to keep things simple.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=63)** So now we need to create a text element for every random number that the player is going to use to play.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=70)** But before we do that, let's think about it.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=73)** First of all, this number of random numbers, I'll call it random numbers count is something that we probably should control in every game.
>
> **[1:22](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=82)** So for example, I might render a game with six random numbers, and then I might render another game with seven random numbers to make the game a little bit more difficult.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=92)** So it's definitely something that we should pass to the game from the top level component that controls the game.
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=99)** So let's call this random number count.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=102)** Let's render our first game with six random numbers.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=106)** This is the first prop that I am designing for the game component.
>
> **[1:50](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=110)** This means inside the game component, when I use this prop, anywhere in here, I'll use this.props.randomNumberCount, it's going to be six by default, but I can absolutely render a game with a different random number of count.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=125)** So I'm going to actually go ahead and render this inside the text just for testing this random number count to make sure that I'm seeing the value here.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=135)** However, since I introduced a new prop for this game component, I should define the type of this prop using prop types.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=142)** In fact, the recommended [[ESLint]] configuration should warn you if you're using a prop.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=146)** without defining its type, but I actually turn off this recommended setting.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=151)** But for this example, let's turn it back on by removing this line.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=155)** And if you do that and you use any prop type, you should now get this message that random number count is missing in prop type validation.
>
> **[2:43](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=163)** Yes, it is.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=164)** Let's fix that.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=164)** Import from prop types.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=167)** This is the package that we need now, it's now a separate package.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=170)** We import it from prop-types.
>
> **[2:52](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=172)** This used to be part of [[React.js|react]], but now it's on separate package.
>
> **[2:56](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=176)** And the prop type definition is a property on the game component, propTypes.
>
> **[3:02](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=182)** This is camel case.
>
> **[3:04](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=184)** And inside the object that represent the prop types, we put a property for every prop that we design in this component.
>
> **[3:10](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=190)** So we have random numbers count, which is prop types.string.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=196)** And it is absolutely required.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=198)** We cannot render a game component without random number count.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=203)** So now we want to take this random number count, which starts at six, and we want to have an array of random numbers so we can render that array inside our game component.
>
> **[3:35](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=215)** And just like we placed the target number on the instance of the component, we can also place this array on the instance of the component.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=223)** Let's call this array random numbers.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=226)** So this array is somehow driven by the random numbers count property.
>
> **[3:51](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=231)** To create an array from a number, there is a [[JavaScript]] trick we can use, array.from and you give this from an object and inside the object, we define the length of the array that you want.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=244)** So I want the length to be the this.props.randomNumberCount, just like that.
>
> **[4:11](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=251)** This gives me in the rate of six undefined elements.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=255)** And then I can map this array into actual random numbers here.
>
> **[4:20](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=260)** So for example, this is going to give me a function for every element in the array.
>
> **[4:26](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=266)** And I can use an expression similar to what I did for the target here to create random numbers here.
>
> **[4:33](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=273)** Maybe we'll have these random numbers start from two up to say, maybe 10, let me fix the indentation here.
>
> **[4:41](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=281)** So this will actually work.
>
> **[4:42](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=282)** This will give us an array of random numbers, but we have a logical problem here.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=287)** We can't just generate any set of random numbers.
>
> **[4:51](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=291)** We need random numbers with the possibility of summing up to target, which is another random number here.
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=298)** So to do that, you might be tempted to start thinking about factoring this target number and somehow figure out some factors that will sum up to that target number and then fill the [[Representational State Transfer (REST)|rest]] of the random numbers count array with random numbers.
>
> **[5:12](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=312)** But that's actually a lot harder than it needs to be.
>
> **[5:15](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=315)** In fact, if we just change the order of this operation, if we start with the random numbers and then do the target after that, we could derive the value of the target from the random numbers themselves.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=328)** Maybe we'll sum three or four or five out of these random numbers and say, this is our target.
>
> **[5:33](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=333)** And this way we would be sure that the random numbers have a possible solution to sum up to the target.
>
> **[5:41](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=341)** So I'm going to do exactly that.
>
> **[5:42](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=342)** I'm going to start with this.random numbers and I'll slice this array 'cause I don't want the whole random numbers.
>
> **[5:50](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=350)** So let's take the first four numbers and sum those.
>
> **[5:54](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=354)** Now, of course the random numbers count is dynamic.
>
> **[5:58](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=358)** So I can't just say, give me four to get the first four numbers.
>
> **[6:01](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=361)** Let's do this.props.randomnumbercount minus two.
>
> **[6:08](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=368)** And I just figured out there is a typo here, so it's props.
>
> **[6:12](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=372)** This.props.randomNumberCount minus two.
>
> **[6:15](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=375)** This would give me an array of the first four numbers.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=379)** And I can sum that array.
>
> **[6:21](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=381)** So I'll put this on its own line.
>
> **[6:23](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=383)** The easiest way to summon array without introducing any new libraries is just to use a reduced call.
>
> **[6:29](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=389)** And the reduce gives you access to an accumulator in the current element, and you can return the accumulator plus the current element.
>
> **[6:40](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=400)** And you can start from zero, fail safe.
>
> **[6:42](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=402)** You actually don't need it in some case, but in case the array that you sum is empty.
>
> **[6:46](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=406)** For some reason, you need this fail safe so just use it.
>
> **[6:50](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=410)** And now we can test.
>
> **[6:51](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=411)** Instead of putting the random number count, let's output the random numbers themself.
>
> **[6:57](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=417)** Let's actually see if that works.
>
> **[7:00](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=420)** And it did.
>
> **[7:02](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=422)** I am seeing the warning here, invalid prop of time numbers applied to game expected string.
>
> **[7:08](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=428)** Totally.
>
> **[7:09](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=429)** Random number count is not a string.
>
> **[7:10](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=430)** It's a number.
>
> **[7:12](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=432)** That was a very helpful React warning.
>
> **[7:14](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=434)** Don't cover something wrong that we did here in the prop types.
>
> **[7:17](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=437)** Okay, so instead of rendering the random numbers directly here, let's render them each in their own text container.
>
> **[7:24](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=444)** So I'll go ahead and map this array.
>
> **[7:26](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=446)** This will give me a single random number and I'll map that random number into a text by itself.
>
> **[7:32](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=452)** So the map is going to give me the value of each random number, a single number, and I can render it here.
>
> **[7:40](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=460)** Random number.
>
> **[7:41](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=461)** Now, the very helpful, ESLint is telling me that I'm missing a key prop.
>
> **[7:45](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=465)** Remember that every time you have a dynamic list of children that you're rendering in here, you need a unique key to represent each child.
>
> **[7:54](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=474)** Now, I can't use the random number itself because it's not unique.
>
> **[7:57](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=477)** I might pick two same random numbers.
>
> **[8:00](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=480)** But I can use the index of that.
>
> **[8:02](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=482)** The position of that random number in the array.
>
> **[8:04](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=484)** Now in general, using the index is not actually a very good idea.
>
> **[8:09](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=489)** If you are reordering the items or if you're deleting or updating the items, because React is going to be confused when you delete an item and it will reposition the array and bad things will happen.
>
> **[8:21](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=501)** But for our particular case, we are not going to rearrange or delete any items.
>
> **[8:27](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=507)** We are just clicking on those items and we just need to identify them when we click on them.
>
> **[8:31](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=511)** So that is probably okay for this particular case.
>
> **[8:36](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=516)** If you need to delete or reorder things, the solution is to give every number a unique ID.
>
> **[8:41](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=521)** Instead of just the value, you can represent every random number with an object and give that object its unique ID.
>
> **[8:47](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=527)** But I think it would be a case of over-engineering if we did this for this particular app.
>
> **[8:52](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=532)** Okay, so let's test that.
>
> **[8:55](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=535)** And now we can tell if 22 is actually the sum of the first four elements and it is totally the sum of the first four elements.
>
> **[9:02](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=542)** By the way, this four elements here can also be customized.
>
> **[9:06](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=546)** So instead of doing random number count minus two, we can pass a property for example, that is sum number count, but I'll keep it simple.
>
> **[9:16](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=556)** Once we're done with the MVB of this game, there will be a lot of room for improvements, and I'm going to actually challenge you with some of those improvements at the end of the game.
>
> **[9:26](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=566)** So let's go ahead and style these numbers now.
>
> **[9:28](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=568)** I'll do my styling off-camera.
>
> **[9:30](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=570)** If you want to be creative, do your own styling and test your knowledge in the subset of the [[React Native]] styles that you can use.
>
> **[9:37](https://www.linkedin.com/learning/react-native-essential-training/generating-the-random-play-numbers?u=76281980&t=577)** I'll show you the styles that I'm going to come up with in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[ESLint]] (2), [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[React Native]] (1)
> **Analogies:** for example (3), just like (2)
> **Code Identifiers:** randomnumbercount (3), proptypes (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Best Practices:** recommended (2)
> **Warnings:** warning (2)
> **Env Vars:** mvb (1)

#### [Styling the random play numbers](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=0)** - [Instructor] Here are the styles that I ended up with, you can check them out from [[Git]] tag 3.6.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=7)** It's not very good, I know, but it will do for now.
>
> **[0:10](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=10)** Hopefully you made a much better looking game, but here's what I did.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=13)** I had to wrap all these random numbers in their own containers so that I can control its flex property and I named it randomContainer and these guys get just random.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=25)** And I made some changes here to give the target margin from both sides.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=32)** And then the randomContainer gets its own flex property but the direction, this time, is row and the flex wrap property is wrapped because I want the numbers to wrap.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=42)** Justify content is spaces around.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=44)** For every random number, I just give it a background with some margin, a font size, and a textAlign center.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=50)** But the key for layout-ing these numbers is here.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=53)** The flexDirection is row.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=55)** By default, the flexDirection is column.
>
> **[0:57](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=57)** The flexWrap is wrap, by default, it's not.
>
> **[1:01](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=61)** In fact, you can actually see what would happen if we don't have, for example, wrap.
>
> **[1:06](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=66)** Bad things happen.
>
> **[1:07](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=67)** What would happen if the direction is column?
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=71)** They will stack vertically and since I have a wrap, it will wrap, right?
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=76)** So you need all these three to get to the same layout that I reached in here.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=81)** Okay, so this will do for now.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=83)** Now, before we continue, here's one observation to the design so far.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=88)** If we analyze what we did here, you might be thinking, "Isn't the target always going to be the first four numbers summed?"
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=95)** So the solution to this game will be really easy, just click the first four numbers and you are absolutely correct.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=101)** It's always going to be the first four numbers.
>
> **[1:44](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=104)** Now, I'm not going to change it now because this problem, if we want to label it problem for now, is actually helpful in testing 'cause I want to start testing and make sure when I click the actual sum the game is won.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=117)** So once I code all this logic, I can come back and fix this problem and maybe just shuffle the random numbers.
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=124)** The fix is actually really easy.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=126)** But let's keep it just like that for now and put a to-do here so that we don't forget to do shuffle the random numbers.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/styling-the-random-play-numbers?u=76281980&t=135)** All right, so in the next video we'll start clicking on these numbers and figure out what needs to happen when we do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (1)
> **Code Identifiers:** randomcontainer (2), flexdirection (2), textalign (1), flexwrap (1)
> **CLI Commands:** git (1), make (1)
> **Analogies:** for example (1), just like (1)
> **Versions:** 3.6 (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Using TouchableOpacity for press events](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=0)** - [Instructor] Our next step is to click these numbers and start to think about what should happen when we do.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=7)** Now, these numbers are so far presented here with just a text element.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=13)** And since we're going to click on that text element and that click is potentially going to need the random number value.
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=19)** Since it's going to trigger a computation of the (mumbles) that's our sign that we need a component to represent every clickable number.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=27)** Whenever you have something that you need to click on and you need the value related to that thing that you click on, it's your sign that you need a component.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=37)** The other sign that we actually needed a component here is that we are rendering six similar things, they're all random numbers.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=45)** They share markup, they share style and they're also now going to share behavior.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=49)** Whenever we click on each of these six, the behavior is basically the same.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=54)** These are our signs that we need a component here.
>
> **[0:57](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=57)** So let's go ahead and create a component.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=60)** The new component markup is going to be basically this exact same text without the key, because the key is going to be here.
>
> **[1:06](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=66)** So instead of this text here, what we want to do is we want to render a component let's name this component, random number.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=75)** And I still need to do the key in here because the dynamics children is here.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=79)** So the key is the index and this random number of component is going to need it's number, which we can pass through it from the map here as random number.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=90)** And it probably also needs to use the unique ID that identifies this number, but I'll actually leave it until we need it.
>
> **[1:38](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=98)** So I'll just simply do that and then I'll take this markup and go create this new random number component.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=105)** Let's place this random number component here, so import random number from the same level random number and we'll create random number under the components folder and call this randomnumber.js and this random number can be a simple [[React.js|react]] class component, call it random number and it returns the exact same markup that we had before except that we don't need the key.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=138)** And instead of random number here it is this.props.number.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=144)** And I need to bring a few things including the style.
>
> **[2:27](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=147)** So the styles for the game had the random numbers style which is now part of the random number component.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=153)** So we'll take that and put it in here.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=157)** And I'll paste this line as well to create the style sheet and get things to work here.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=164)** So I got the style and I also need to import text from [[React Native]] and also need the prop types because I just defined the prop on this random number component.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=174)** I don't need the view so far, I just need prop types and my prop types let's define that, prop types are, we have number which is prototypes.number.isrequired.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=192)** Okay.
>
> **[3:13](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=193)** So what I did so far should be exactly equivalent, right?
>
> **[3:17](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=197)** I didn't change anything, I'm just rendering this random number now through a component instead of directly which made the code for this game component shorter and that's always a good thing.
>
> **[3:28](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=208)** Test and make sure things are working exactly as they did before.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=212)** And now we can actually test the clicking event or as the terminology in react native, the pressing event.
>
> **[3:39](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=219)** When we press on an element here, what's going to happen?
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=222)** When we tap an element on the phone what's going to happen?
>
> **[3:45](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=225)** So our elements currently is just a text.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=227)** If I want to handle the pressing event, I need to bring in one of two elements either touchable opacity or a touchable highlight.
>
> **[3:57](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=237)** So touchable opacity and touchable highlights are both wrappers for making views respond to touches on press down.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=244)** The opacity of the wrapped view is decreased.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=248)** So these two are the recommended ones.
>
> **[4:11](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=251)** And the difference between them is mostly layout as the touchable highlight component will wrap its child in a new view, which can affect the layout.
>
> **[4:21](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=261)** And also the visible difference is that the touchable capacity component uses animation to decrease the pacity of its child.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=269)** while the touchable highlight will actually highlight the child.
>
> **[4:33](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=273)** So I'm going to go ahead and try the touchable opacity and see how that works.
>
> **[4:37](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=277)** So we need to import it from the react native.
>
> **[4:40](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=280)** and in here, we need to surround this text with touchable opacity.
>
> **[4:44](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=284)** So we'll do a touchable opacity and inside the touchable opacity, we'll do all our texts and then the touchable opacity has an on-press property like that and I can assign this property to be a function that is on the instance of the random number component, I'll call this function handle press.
>
> **[5:03](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=303)** So the on-press here in react native is equivalent to the unclick event in web-based react applications.
>
> **[5:09](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=309)** So we can now define handle press or use class field Centex here and inside the handle press let's just console log this.props.number, make sure that we are seeing every number when we click on it.
>
> **[5:26](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=326)** So to see this console log statement, we need to have the remote JS debugger open.
>
> **[5:32](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=332)** So make sure that you are debugging JS remotely.
>
> **[5:36](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=336)** And if you do, the remote native debugger, [[Windows]] could be open and running like that.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=340)** And now when we press on any number, we should see its value here.
>
> **[5:45](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=345)** Just to make sure that works.
>
> **[5:48](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=348)** So let me actually show you the difference between touchable opacity and touchable highlights.
>
> **[5:52](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=352)** So when we touch an element now, you'll see how the animation changes its opacity.
>
> **[5:57](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=357)** If we used touchable highlight instead of touchable opacity and take a look at the difference, you'll see that the element is actually highlighted when we touch it now.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=367)** And of course we can style the highlight, but this is just the difference between touchable opacity and touchable highlight.
>
> **[6:13](https://www.linkedin.com/learning/react-native-essential-training/using-touchableopacity-for-press-events?u=76281980&t=373)** So for our case, touchable opacity would be better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[React.js|React]] (2), [[Windows]] (1)
> **UI Navigation:** click on (5)
> **CLI Commands:** make (4)
> **Best Practices:** the key is (2), recommended (1)
> **File Paths:** randomnumber.js (1)
> **Speakers:** - [instructor] (1)

#### [Changing UI based on selected numbers](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=0)** - [Instructor] Now that we know that we have a way to handle the press of a number, let's think about the logic behind this press.
>
> **[0:08](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=8)** Every time we press a number, we would like to keep a running sum.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=13)** And once this running sum is equal or greater than 28, we have two cases to handle.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=20)** But before we actually handle that logic, let's handle the UI logic.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=25)** So every time I press a number, what should the UI do?
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=29)** And for this particular game, the UI should show that this number is pressed because I can't actually press it again.
>
> **[0:35](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=35)** Once I press it once, the UI should change to the state of that number, and I can't press it again.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=42)** Since the UI has to change, that means every time I press the number something has to change on the state somewhere because I need [[React.js|React]] to re-render the view.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=52)** So your next question becomes, what should we place on the state?
>
> **[0:57](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=57)** And where should we place that on the state?
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=60)** For example, can I place the value of the number on the state?
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=63)** Can I place this six here on the state?
>
> **[1:06](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=66)** While it might work for this case, it won't work for this case because I have randomly selected numbers that are equal.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=72)** So I can't place the nine or the six.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=75)** I need to place the unique identifier for that number.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=79)** And currently we are using the position of that number as the unique identifier of that number.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=83)** If you remember, in the game component, we used the key index as the unique identifier for every random number.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=91)** So when I click on this first nine, I should place the number zero somewhere on the state that says, the number with positional index zero is now selected.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=100)** Similarly, when I click on 10, I should say the number with positional index five is now selected.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=106)** And since every time I am pressing on a number I am adding this selected status to a structure, I need to maintain a collection of selected numbers.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=115)** So I can do that with either an object or an array.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=118)** Let's just simply use an array for selected numbers.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=122)** Now, since the game components render all the numbers, it makes sense to place this array of selected numbers here on the state of the game component.
>
> **[2:11](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=131)** So that's exactly what I'm going to do.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=133)** I'm going to initiate the state object here, and inside that state object, I'll plan on having a selectedNumbers array, which starts as empty array, just like that.
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=145)** And every time I press a number, I'd like to push this pressed number to the selectedNumbers state property.
>
> **[2:32](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=152)** Now I have two distinct tasks to do for this feature.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=156)** The first task is to push a number to that selected numbers array every time I press the number.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=162)** And the second task is to make the UI respect the values of selected numbers and change its content based on their values.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=170)** For example, if those selected numbers array had the number zero in it, that means the first random number has to be styled as selected.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=179)** And also we can not press it anymore.
>
> **[3:02](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=182)** These two unique tasks, pushing to selectNumbers and making the UI respect the values in selectedNumbers can actually be implemented separately.
>
> **[3:11](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=191)** And I always like to start with the second task.
>
> **[3:13](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=193)** I always like to start with the data related part of the change.
>
> **[3:17](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=197)** So if I have data here in the selectedNumbers array, I'd like the UI to respect that data.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=203)** The other task is behavior related.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=205)** Once I have the UI respect the data, I'll figure out how to make it insert new data to this structure.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=213)** A way to test that is to start with fake values.
>
> **[3:36](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=216)** So let's start with the first one and the fifth element selected, and we'll make the UI respect that.
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=222)** Once we're done changing the UI to do so, we'll reinitialize this selected numbers as an empty array, and figure out how to do the behavior.
>
> **[3:52](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=232)** Okay, so how should the UI look differently when the number with indexes zero and four are selected.
>
> **[4:00](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=240)** Let's just change the opacity a little bit when we press the number.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=244)** Sounds good.
>
> **[4:05](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=245)** This means that inside this random number of component, we want to change the opacity of the text here.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=253)** So let's test that, opacity is, let's go with 0.3, and see how that looks.
>
> **[4:22](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=262)** So this actually look good, let's just do that.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=265)** So I'm going to take this opacity part, and make it into its own style.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=269)** So let's call that selected style, and just put the opacity in here.
>
> **[4:36](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=276)** We'll add this selected style, only if the random number is selected.
>
> **[4:41](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=281)** This means in here, we would like to conditionally add another style.
>
> **[4:45](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=285)** So I'll change this into an array so that I have the option of adding another style.
>
> **[4:49](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=289)** And the other style is only when the number is selected.
>
> **[4:53](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=293)** So I need to figure out if the number is selected.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=296)** Now to figure out if the number is selected, I need access to the selectedNumbers array that I just placed on the game state.
>
> **[5:05](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=305)** So let's think about that just a little bit.
>
> **[5:07](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=307)** To figure out if the number is selected, we need access to the selectedNumbers array.
>
> **[5:12](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=312)** So the suitable place to actually figure out if the number is selected is right here in the game component.
>
> **[5:18](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=318)** So let's create a new function.
>
> **[5:19](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=319)** Call this function isNumberSelected.
>
> **[5:22](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=322)** And this is a function, and it will basically receive the index to be checked.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=328)** So let's call this numberIndex, and it will return true or false based on that.
>
> **[5:35](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=335)** So the number is selected if this dot state dot selectedNumbers dot index of the numberIndex, if this is greater than or equal to zero, then the number is selected, right?
>
> **[5:49](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=349)** 'Cause if it's not selected, it's not part of the selectedNumbers array, this will be minus one.
>
> **[5:54](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=354)** So now we can actually compute the isNumberSelected for every number using this function.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=360)** So I'll go ahead and do exactly that.
>
> **[6:03](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=363)** On a new line, we'll do something like isSelected equal, this dot isNumberSelected, the function that I just wrote, and calling that using the index for the current random number which is here, just index.
>
> **[6:17](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=377)** And let me format that.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=379)** So now I have, for every random number I pass a property, which is just a Boolean isSelected.
>
> **[6:26](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=386)** So let's go ahead and define that property.
>
> **[6:28](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=388)** In here, we'll need to define the property isSelected.
>
> **[6:32](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=392)** This is PropTypes dot Boolean dot isRequired.
>
> **[6:37](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=397)** It's always either true or false.
>
> **[6:39](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=399)** And in here, you only include the selected style when the number is selected.
>
> **[6:45](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=405)** We can do something like this dot props dot isSelected, and and styles dot selected.
>
> **[6:53](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=413)** Let me format all that multiple lines.
>
> **[6:56](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=416)** So only include styles dot selected if the isSelected Boolean property is true.
>
> **[7:03](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=423)** If it's false, [[React Native]] is going to just ignore that false.
>
> **[7:06](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=426)** All right, let's try it, and there you go.
>
> **[7:09](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=429)** The number with index zero, and the number with index four are both selected and the other numbers are not.
>
> **[7:15](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=435)** So this is part one of the task, making the UI respect data element that we fake on the state.
>
> **[7:22](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=442)** Now it's time to make the UI behave to add these data elements on the selected numbers.
>
> **[7:29](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-selected-numbers?u=76281980&t=449)** Let's do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[React Native]] (1)
> **Code Identifiers:** selectednumbers (8), isselected (5), isnumberselected (3), numberindex (2), selectnumbers (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1), is a  (1)
> **Versions:** 0.3 (1)
> **Cross-References:** in the next (1)

#### [Adding shared behavior to numbers](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=0)** - [Instructor] Now we need to actually select the number when we press on it.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=4)** To select a number, we just need to add its index right here in the selected numbers array that belongs to the state of the game component, which means the game component should have a function that does exactly that.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=16)** So let's call this function select number, and is an arrow function that will modify the state.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=24)** And to select the number just like is number selected, I need access to the number index to be selected.
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=29)** Again, I can't just select based on the number value, I need the number index.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=33)** So this function is basically going to set the state.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=37)** So it will return an object that has the new state.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=41)** And inside this object, we are going to change the selected numbers array and basically push a new element to that selected numbers array.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=50)** So I have options here, I can, for example, do something like selected numbers, and do the previous selected numbers and then concat the new number to it, however, I prefer to use the object to spread property.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=63)** So basically, I'd like to copy the original previous state.selected numbers.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=70)** So this will copy the original array, and then we just add the number index.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=75)** Of course, the order doesn't really matter, as long as the number index is inside the selected numbers.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=81)** So every time we select a number, we want to copy the existing selected numbers, and then append this new number index to the same array and return that.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=91)** And of course, we do this to state immutable, right?
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=93)** We don't want to mutate the state directly, we want to return a new object to be merged with the state.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=100)** So we can simplify this set state and use parentheses instead of the other syntax.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=106)** Let me format that, so this way, it is returning the object directly using the arrow function, shorthand notation, and I don't need the return keyword.
>
> **[1:56](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=116)** And of course, since we are depending on the previous state, it's much safer to use the contract that receives the function rather than the contract that receives an object.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=125)** Okay, so now that we have a select number function, we need the random number component to invoke this function when we press on it, right?
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=135)** So I need to flow this new behavior to the random number component, just like I flow data to the random number component.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=142)** Now, you might be tempted to use the same name, say something like select number, equal this dot select number.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=151)** This will work, however, from the perspective of the random number component, it shouldn't really know that the press event is selecting a number in the game component, because I might actually use the same random number component in a different game that does not select a number, it does something else when you press on it.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=170)** So from the perspective of the random number component, we should just name this onPress.
>
> **[2:56](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=176)** What should you do when I press on you?
>
> **[2:58](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=178)** As the random number component, it's a lot safer to not know what is going on.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=183)** This is a little bit more about isolating the responsibilities of every component.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=188)** In fact, this is selected property is also revealing the logic of the game that a number is selected.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=195)** So maybe instead of is selected, we do something like is disabled, right?
>
> **[3:20](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=200)** Because if it is selected, in here, if this function is returning true and the number is selected, the random number should just be disabled, it should look disabled, and it should behave disabled.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=212)** So let's actually change that instead of is selected everywhere here, I'm going to use is disabled.
>
> **[3:40](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=220)** And instead of selected style, we'll name that as disabled.
>
> **[3:45](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=225)** I like this much better than the first version.
>
> **[3:48](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=228)** Naming is actually hard and it does matter.
>
> **[3:51](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=231)** You might think that it doesn't matter here, but it does, because now this component doesn't have any logic, even in names about the state of being selected, or that number is going to be selected when it's pressed.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=244)** So it's totally generic, even in names.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=247)** And I might actually make it more generic.
>
> **[4:09](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=249)** So instead of naming it random number, it will be something like principle number or something like this.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=255)** But I think the name random number is okay in our case, just to have things related to the randomness of the game in general.
>
> **[4:21](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=261)** Okay, so now that we have an onPress function that we pass down to the random number component, we can now use it.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=269)** So first we define a prop type for this onPress, onPress is PropTypes.function, which is the property funk for prop type.
>
> **[4:39](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=279)** And it's also required, what should I do when I press the component.
>
> **[4:44](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=284)** So when I press on this component, I need to call this new props which is onPress.
>
> **[4:49](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=289)** So basically, instead of console log here, we need to call this.props.onPress and we want to pass the index of the component here.
>
> **[5:00](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=300)** Remember how onPress expect the index of the number that we are executing.
>
> **[5:06](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=306)** However, we are not passing the index of the number to the random number component, we're only doing it as a key.
>
> **[5:12](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=312)** And we can't actually access the key as a prop inside the random number component.
>
> **[5:17](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=317)** So let's also pass the index.
>
> **[5:19](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=319)** And instead of calling it index, I'm going to call it ID.
>
> **[5:22](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=322)** So the ID of this random number is its positional index.
>
> **[5:26](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=326)** So same thing as key but now I have this props, the ID inside the random number that would represent this index.
>
> **[5:34](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=334)** So we need to define this ID.
>
> **[5:36](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=336)** So ID is PropTypes.number.isRequired.
>
> **[5:42](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=342)** And now I am going to pass in here, this props, the ID, which is the unique identifier for this number, and it's basically the position.
>
> **[5:52](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=352)** Now the reason I named that ID instead of just using index is because I might later change the design and actually have an actual ID for every numbers that have this positional index.
>
> **[6:04](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=364)** So from the perspective of the random number component, it receives an ID, an identifier, it doesn't receive an index.
>
> **[6:11](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=371)** So I think this will work.
>
> **[6:13](https://www.linkedin.com/learning/react-native-essential-training/adding-shared-behavior-to-numbers?u=76281980&t=373)** Let's actually test, let's select this one, selected, selected, selected, selected, selected, perfect.

> [!info]- Semantic Content
>
> **Code Identifiers:** onpress (7), isrequired (1)
> **Analogies:** just like (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Using React DevTools with React Native](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=0)** - [Tutor] So far in our simple application, we can select a number and that number is going to be presented as selected.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=7)** However, as we are adding these features, we are also introducing problems.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=12)** For example, we did nothing to say that a number that is selected can't be re selected, right?
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=19)** But we don't have any visibility into these problems.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=23)** One tool that really helps in adding some visibility to the problems that you have in code is [[React.js|react]]-devtools.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=30)** This react-devtools that is hosted on this, [[GitHub]] reveal, give us this visual screen that we can use to interact with the application and see what is going on when we do.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=40)** In a web based react project, we can just install a browser extension and get this react-devtool to work, but with [[React Native]], we need to use the stand alone version of react-devtools.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=52)** We can do that by simply installing, globally react-devtools, and as you can tell, react-devtools is actually an electron app.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=64)** So once the react-devtools package is installed, we fire it up with the command react-devtools, which is now available globally.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=74)** And you can see immediately how the react-devtools recognized our application, and now we have our application right here with all the random numbers and the state of our game component is in here.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=87)** So let me show you why we have a problem.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=91)** We click on the first element, now we can see the selected element rate.
>
> **[1:36](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=96)** We click on the last element, and it gets added to the selected numbers array, let me click back on the first element, and it is added back.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=108)** And now we have a duplicate value in the selected numbers array.
>
> **[1:52](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=112)** We basically selected the first element twice.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=114)** So this should not happen.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=115)** We need to fix this.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=117)** Because otherwise the logic of that game is going to be flawed.
>
> **[2:00](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=120)** So as you can see, this tool is really helpful in having the visibility into these problems, and I would go as far as saying that really developing any react applications without this devtool, is counterproductive.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=134)** This is one of the tools that you have to absolutely, take advantage of.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=138)** Because otherwise you will simply be moving at a much, much slower pace.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=144)** So how do we fix this problem?
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=145)** How do we prevent a number from being selected multiple times?
>
> **[2:30](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=150)** You might say that since I have the select number behavior here, and I can compute the is number selected, I can drop in here and have an F statement, that says if the number is already selected, do not select it.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=166)** However, this feels like the wrong place for this obstruction.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=171)** Because select number, as I named it, is a function that will just select the number.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=177)** It's not a function that says select number, if the number is not selected, right?
>
> **[3:02](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=182)** If the name was so, if the name was select the number, if the number was not selected, then maybe that if logic statement belongs here.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=189)** The place where I think this logic belongs is inside the random number component.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=195)** And the random number of component, can absolutely decide on this logic.
>
> **[3:19](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=199)** And the reason is, it's basically part of handling the press for this random number, if this random number is disabled.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=207)** Note, not is selected, because we named it is disabled.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=210)** If it's disabled, I should not be invoking the behavior for on press.
>
> **[3:35](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=215)** So, the if statement belongs right here, if this, the props that is disabled, then do nothing.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=224)** Otherwise, call the actual on press behavior for this number.
>
> **[3:49](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=229)** Let's verify that this solved the problem.
>
> **[3:52](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=232)** Here's my game component, here's the selected numbers array, click the three, click the three again, nothing.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=239)** Click the five, yes.
>
> **[4:01](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=241)** Index number two was selected, click it again, nothing.
>
> **[4:05](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=245)** The other thing about having this visual confirmation is that, you should not really be testing the code without any visual confirmation.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/using-react-devtools-with-react-native?u=76281980&t=253)** You can definitely do that visual confirmation through console logs, but this tool will make the visual confirmation a lot easier with fast feedback loop and you don't need to add console log statements anywhere in the group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (11), [[GitHub]] (1), [[React Native]] (1)
> **UI Navigation:** click on (2), select the (2)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [tutor] (1)

#### [Computing dynamic values where needed](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=0)** - [Instructor] It's time for us to write code to determine if the game is won or lost.
>
> **[0:06](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=6)** This means that while we're tapping on numbers we want to calculate the sum of the selected numbers.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=13)** This sum is going to affect the game status.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=17)** The game status can be one of three values.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=20)** It can be the currently playing game status or it could be won, or it could be lost.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=28)** The thing is this game status can be computed so we don't really need to put it on the state.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=36)** So what I'm going to do is I'm going to create a new function here and call it game status.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=42)** And the goal of this function is to compute the game status at any point.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=47)** So the first thing that we need is the sum of selected number.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=50)** Let's put that in a variable, call that sum selected.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=54)** We can compute the sum of selected numbers from the selected IDs that we put on the state.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=62)** Cause every time we select a number here we place its index ID on the state.
>
> **[1:07](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=67)** In fact this selected numbers name might be a bit misleading.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=73)** We're not placing the actual numbers on the state.
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=76)** We're placing the positional order of each number, which we're using as the ID of that number.
>
> **[1:22](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=82)** So I'm going to actually rename this selected numbers state everywhere into selected IDs instead.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=90)** I think that makes it a little bit more clear that we are selecting the IDs of these numbers so that when we want to compute the sum of selected numbers we start from this dot state dot selected IDs.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=102)** And then we want to reduce this ray into a sum of the selected numbers that maps to these selected IDs.
>
> **[1:50](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=110)** So let's do that.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=111)** We reduce, reduce is going to give us an accumulator and the current ID.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=117)** And we want to start this from zero and every time we want to return the accumulator plus the number that maps to the current index.
>
> **[2:09](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=129)** And we can read that from this dot random numbers for the current index, and that should do the trick.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=140)** In fact, that's something we should test right away.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=143)** So let me console log sum selected.
>
> **[2:27](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=147)** And for testing of this, let me just invoke game status every time we render.
>
> **[2:32](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=152)** 'Cause every time we select a number we are going to render that view.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=157)** Now by the way, console.log is not going to show up here, right?
>
> **[2:41](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=161)** Every time we select something the console.log is not going to show up here.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=166)** You have to look at it here.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=168)** So we start with zero two, then I'm going to select 10.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=171)** And now my sum is 12, three, 15.
>
> **[2:55](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=175)** So this seems to be working great.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=177)** If you want feedback right here in the simulator, you can actually use console.warned.
>
> **[3:04](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=184)** And if you do that, you would get the warning right here.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=188)** So we start with zero.
>
> **[3:11](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=191)** Now it's eight, 18, 26.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=195)** So with console.warned, you get immediate feedback here.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=198)** You don't have to look at the debugger, but I do prefer using log instead and always looking at the debugger.
>
> **[3:24](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=204)** Okay, we have the selected sum which means we can use this value to actually determine the game status because it's one of simple three cases.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=214)** When the sum selected is less than the target, which is Vista target, you can still play.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=223)** So I'm going to return playing.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=226)** When the selected sum is exactly equal to the target then the game has been won, so I'm going to return one.
>
> **[3:57](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=237)** Otherwise, if we hit this point, the game is lost.
>
> **[4:01](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=241)** We can actually document this with an if statement as well.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=244)** So if sum selected is greater than this.target, again, this if statement is completely optional because that is the case, then we need to return lost.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=255)** And I don't need to use else statements here because I'm just returning from the function.
>
> **[4:20](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=260)** So every successful if statement is going to short circuit everything else.
>
> **[4:24](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=264)** So now I can capture this game status.
>
> **[4:27](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=267)** Let's do that.
>
> **[4:30](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=270)** And we can simply display it in a text here just for testing.
>
> **[4:34](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=274)** So I'm going to do exactly that, text and render the game status and test that.
>
> **[4:42](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=282)** So the game status is playing.
>
> **[4:44](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=284)** If I click 17, 10, two plus five, I'm still playing.
>
> **[4:48](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=288)** When I hit five, I won the game.
>
> **[4:51](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=291)** And if you lose the game, you get lost the game.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=296)** Okay? So the game status is working okay, for now.
>
> **[5:00](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=300)** Of course, I still have a lot of edge cases to fix.
>
> **[5:02](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=302)** For example, if I win the game, I can also lose the game.
>
> **[5:07](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=307)** So I need to fix that edge case.
>
> **[5:09](https://www.linkedin.com/learning/react-native-essential-training/computing-dynamic-values-where-needed?u=76281980&t=309)** But before we do that let's make the UI respect the computed game status.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Changing UI based on game status](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=0)** - [Instructor] Let's simply make the target green or red based on the gameStatus.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=7)** So I can add another style here for the target to set maybe the background color to either green or red based on the gameStatus.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=17)** So I'll make this into an array so that we can add another style.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=21)** And in here I'm going to actually use another function to compute the style of this target panel based on the gameStatus.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=30)** So let's do exactly that.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=32)** Let's call this function, targetPanelStyle.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=36)** We can just pass the gameStatus here directly to this targetPanelStyle so that we don't compute it again.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=43)** Let me format this a little bit.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=45)** And now we can write targetPanelStyle.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=48)** So targetPanelStyle is a function and this function is going to receive the gameStatus here.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=58)** So this is the gameStatus.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=62)** And based on the gameStatus, it's going to return a style sheet.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=65)** Well, you know what?
>
> **[1:07](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=67)** I think we can do this with an easier way.
>
> **[1:09](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=69)** Instead of introducing a new function here.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=71)** Undo, undo, undo.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=73)** Okay, so instead of all that function logic we can simply add dynamic style here.
>
> **[1:20](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=80)** You can say something like styles and dynamically pick a style based on the gameStatus that we are working with.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=88)** So let's do something like dynamic STATUS_ the actual gameStatus that we have.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=97)** So gameStatus here, this would be either status playing, status won or status lost.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=102)** And we can just could add style for each one of those.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=105)** So in here, we'll code these styles.
>
> **[1:49](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=109)** So STATUS PLAYING, this is the default.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=115)** So we can do backgroundColor, which is basically this guy.
>
> **[1:59](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=119)** So I'm going to move it here.
>
> **[2:01](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=121)** So the target is always the same style except for the status.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=125)** And just like this status, let's do one status for the won case and another status for the lost case.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=135)** So when the status is won, let's make this green when the status is lost, let's make it red.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=144)** Very simple basically, instead of if statements in functions we're using object lookup here, let's test that.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=153)** So this starts as gray.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=156)** And when I win the game it's green and when I lose the game, it's red, perfect.
>
> **[2:43](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=163)** Let's now figure out how to stop selecting once the game is over because right now we can continue selecting numbers.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=171)** So I think we can simply add another condition here.
>
> **[2:55](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=175)** The number is disabled if it's selected or if the gameStatus is over, if the gameStatus basically is not playing.
>
> **[3:04](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=184)** So let's simply do that.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=186)** If the gameStatus here is not playing we cannot play this right.
>
> **[3:14](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=194)** Let me just format everything here a little quick and let's test.
>
> **[3:19](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=199)** We can play green.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=201)** All the numbers are disabled and we can't play, very good.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=205)** Let's try it the other way.
>
> **[3:28](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=208)** Perfect.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=209)** So we can only play if the gameStatus is playing.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=213)** So with this we are actually wrapping up an MVP of this game before move on to another example.
>
> **[3:39](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=219)** This app has plenty of room for enhancements and optimization and I'd like to show you some of those optimizations but to highlight an optimization problem before we solve it, let's introduce one more feature to this game.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=233)** Let's make the game limited in time.
>
> **[3:56](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=236)** The player has only 10 seconds to solve the challenge.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=239)** After that, the game should be over automatically.
>
> **[4:03](https://www.linkedin.com/learning/react-native-essential-training/changing-ui-based-on-game-status?u=76281980&t=243)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** gamestatus (14), targetpanelstyle (4), backgroundcolor (1)
> **CLI Commands:** make (5)
> **Env Vars:** status_ (1), status (1), playing (1), mvp (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Working with timers](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=0)** - [Instructor] Implementing a countdown to track the seconds spent playing this game is easy.
>
> **[0:06](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=6)** We can just use a regular interval.
>
> **[0:08](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=8)** The question is do we need to put this information on the state or not?
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=13)** And to answer that, we need to answer another question, which is do we need to display anything in the UI while the timer is ticking?
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=21)** We should probably do that.
>
> **[0:22](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=22)** We should probably display these remaining seconds.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=25)** Like you start with 10 seconds and then the counter ticks that down every second and we should display the number of remaining seconds in the UI, which means we need to put this number on the state of the game.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=37)** Let's do that.
>
> **[0:38](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=38)** We'll start with remainingSeconds.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=41)** I think that's a good name.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=43)** And we start with 10.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=45)** Of course, we can make this configurable if we need to, if you want to make the game harder.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=50)** Just like randomNumberCount, we can make this game receive another property and maybe a good name for this property would be something like initialSeconds.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=60)** This is a number and it's required.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=64)** And here instead of hard coding this, we use this.props.initialSeconds and we can pass the initialSeconds down from the App component in here.
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=76)** So initialSeconds are 10.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=79)** Okay, great.
>
> **[1:20](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=80)** So now we have initialSeconds.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=81)** What we need to do is when the component mounts, that's where we're supposed to start intervals.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=87)** We can't start the intervals before the component mounts because the user can only interact with the component when it's completely mounted.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=95)** So let's do componentDidMount and inside componentDidMount, we'll define this interval.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=100)** We can use setInterval.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=102)** And we'll do a function.
>
> **[1:44](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=104)** And we'll do that function every second.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=108)** Inside that function, we want to basically decrement the remaining sections.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=113)** So we'll setState inside this function and we'll return remainingSeconds.
>
> **[1:59](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=119)** The previousState.remainingSeconds minus one.
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=124)** And we can display the remainingSeconds somewhere here.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=128)** For testing, I'm just going to replace this gameStatus Text with the remainingSeconds.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=133)** So this.state.remainingSeconds.
>
> **[2:17](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=137)** Of course, this will work, however, it has a big problem.
>
> **[2:21](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=141)** So I do have remainingSeconds and they're ticking but I did not stop this timer anywhere, so this timer is going to continue to go down into the minus.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=151)** So let's go ahead and stop this timer.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=154)** The best way to stop this timer is to actually clear it using clearInterval, which means we need to capture the ID that this setInterval method gives us.
>
> **[2:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=165)** We can place this ID on the component instance itself.
>
> **[2:49](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=169)** So this dot, call it intervalId.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=174)** And the reason I placed that on the component instance is we need to also clear this timer when the component unmount.
>
> **[3:01](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=181)** So on componentWillUnmount, I also need to clear this timer.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=186)** I'm not supposed to leave timers behind.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=189)** So I'll do clearInterval here using this .setIntervalId.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=195)** And we'll do the exact same condition right here after we set the state.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=201)** So the best place for this new condition is inside the second argument callback for setState 'cause this callback will be invoked after the setState operation and in here, we can place a condition, a condition that says if this.state.remainingSeconds is exactly zero, I need to stop the timer, which is the exact same statement that we used in componentWillMount.
>
> **[3:51](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=231)** Again, the reason we're placing this here in the second callback of setState is because setState is asynchronous and I want to do this statement exactly after the setState operation is performed.
>
> **[4:02](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=242)** Testing that now.
>
> **[4:05](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=245)** The timer starts from 10 and it continues ticking all the way to zero and when it hits zero, it should be stopped.
>
> **[4:14](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=254)** This seems to be working.
>
> **[4:16](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=256)** So now, when that timer hits zero, if I'm still playing, the game should automatically be over, which means our gameStatus computation has to be a little bit different.
>
> **[4:28](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=268)** There is a condition that is superior to all the other conditions.
>
> **[4:33](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=273)** Basically if this.state.remainingSeconds is zero, I need to return LOST.
>
> **[4:42](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=282)** This conditions happens before all the other conditions.
>
> **[4:46](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=286)** Let's test that.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=287)** So the gameStatus is playing 'cause I'm not seeing any colors and when the remainingSeconds hits zero, the game will be over automatically.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=296)** While this code seems to be working okay, we actually have many problems.
>
> **[5:01](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=301)** One problem that you probably identified already, I also need to clear the timer when I win or lose the game manually.
>
> **[5:09](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=309)** So let's say I won the game, right?
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=313)** I need to stop the timer because otherwise it will go down to zero and it will make me lose the game after winning the game.
>
> **[5:20](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=320)** So that's an edge case that we need to handle.
>
> **[5:22](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=322)** But the other bigger problem is now this line 'cause this line is going to be computed every second and the truth is I don't really need to compute it every second.
>
> **[5:34](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=334)** I need to compute the gameStatus on every click or when the remainingSeconds hits zero.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=340)** So there are fewer conditions to compute the gameStatus.
>
> **[5:43](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=343)** So that's something we could optimize because the computation of gameStatus involves actually computing the sum of an array.
>
> **[5:52](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=352)** Now, it's probably not really a big deal for this particular case but I'd like to show you how to optimize such cases.
>
> **[5:59](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=359)** If you want to optimize the rendering of the gameStatus only when needed, how would you do that?
>
> **[6:06](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=366)** And the answer is you would cache this gameStatus computation and invalidate that cache when needed.
>
> **[6:13](https://www.linkedin.com/learning/react-native-essential-training/working-with-timers?u=76281980&t=373)** Let's do that in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** remainingseconds (11), gamestatus (8), setstate (6), initialseconds (5), componentdidmount (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Env Vars:** lost (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Caching to optimize computable values](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=0)** - [Instructor] In the previous video, we implemented an interval timer to limit the time a user has to play the game.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=7)** And we identified that the computation of the gameStatus is now not needed every second, but rather when a number is clicked or when the timer hits zero.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=17)** To optimize this computation, we need to cache it.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=20)** Let's do that.
>
> **[0:22](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=22)** Instead of this.gameStatus as a function, I'm going to assume the gameStatus is a fixed number that I have cached on the instance.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=30)** This gameStatus start with playing.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=33)** So in here I'll introduce a gameStatus instance property.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=37)** And this one starts with playing.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=41)** And now I need to change this gameStatus, the cached copy of the computed value.
>
> **[0:46](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=46)** I need to change that when needed.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=49)** And I can do so in componentWillUpdate.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=54)** This life cycle method happens right before the render method.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=58)** When the component is about to be updated.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=62)** When the state of the component is different, or when the props of the component is different.
>
> **[1:08](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=68)** So I actually conditionally here, I can compute the new gameStatus if there is a need to.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=74)** For example, I'll have an if statement here that says, if the nextState .selectedIds array does not equal the current state selected IDs.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=88)** Let's console log this value to test that we need to disable the timer for now.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=97)** Because the timer will also trigger the componentWillUpdate.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=102)** And let's test.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=105)** Numbers are actually disabled.
>
> **[1:46](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=106)** We did something wrong.
>
> **[1:47](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=107)** Let's figure out what we did wrong.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=111)** Game status.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=114)** I'm not actually sure.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=115)** Let's debug that.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=117)** What is gameStatus here?
>
> **[2:01](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=121)** Oh the reason we are seeing this problem is that we define gameStatus on the instance twice.
>
> **[2:07](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=127)** Once it was the initial value.
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=130)** And also we still have the function here, gameStatus.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=133)** So let's call this function instead of gameStatus let's call it calcGameStatus 'cause that's exactly what it's going to do.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=143)** Let me test now.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=146)** Seems to be working.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=146)** Let me clear that.
>
> **[2:28](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=148)** And now remember what we did.
>
> **[2:30](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=150)** In componentWillUpdate I am console logging if the selected IDs for the next state does not equal the selected IDs for the current state.
>
> **[2:39](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=159)** So when we click on the number, we will see true.
>
> **[2:43](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=163)** The previous selected IDs does not equal the next selected IDs when I click the numbers because I am appending an item to the original array.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=171)** And I am doing that without mutating the original array.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=174)** So this condition will actually work for our case.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=177)** If the next state selected IDs does not equal the current state selected IDs.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=183)** Or the next state, the remaining seconds equals zero.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=189)** This is the only case where I need to recompute the game status.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=192)** For these two cases, we need to compute the gameStatus.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=195)** Basically this.gameStatus equal this dot calculate the game status one more time.
>
> **[3:22](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=202)** Let me format this code.
>
> **[3:24](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=204)** So this is the cache in play.
>
> **[3:27](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=207)** I have a gameStatus where I cache the value of the game status.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=210)** And I have a calcGameStatus where I calculate the new game status only when I need to.
>
> **[3:36](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=216)** Only when the selected IDs are different, or when the remaining seconds hit zero.
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=222)** However for this to work, gameStatus has to read from the new state.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=227)** 'Cause we're no longer computing the game state on render.
>
> **[3:51](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=231)** In here we would still be computing on the previous state.
>
> **[3:55](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=235)** So let's pass the new state here, the next state to calculate gameStatus.
>
> **[4:00](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=240)** And make this gameStatus depend on next state instead of the current state.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=246)** So we're reading the state in gameStatus twice.
>
> **[4:10](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=250)** Replace that with nextState.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=253)** And I think that should work.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=255)** So basically, when there is a condition for us to consider recomputing the gameStatus, compute the gameStatus based on the next state that is coming to this component.
>
> **[4:28](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=268)** Let's test.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=269)** The timers is on.
>
> **[4:30](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=270)** And it's rendering.
>
> **[4:31](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=271)** And I can go here and win the game.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=275)** That's normal.
>
> **[4:36](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=276)** And remember at the timer will still hit the last case, but it's working.
>
> **[4:40](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=280)** Every time I actually need the gameStatus to change, the condition will be invoked and it will change.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=287)** And you can validate that with a console log statement here in calculate game status.
>
> **[4:52](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=292)** So calcGameStatus.
>
> **[4:54](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=294)** So let's make sure that this calcGameStatus only happen when needs to.
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=298)** So while the timer is ticking here, calculate game status is not actually being invoked.
>
> **[5:04](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=304)** And when the timer hits zero, one calculate gameStatus happens.
>
> **[5:08](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=308)** Alternatively, only when I click that calculate game status happen.
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=313)** So this is a much better way for caching the expensive computation.
>
> **[5:17](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=317)** Of course in our case, it wasn't really that expensive.
>
> **[5:20](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=320)** But it's the thing that you can do to optimize expensive computations in your app.
>
> **[5:25](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=325)** cache them and only invalidate the cache when you need to.
>
> **[5:29](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=329)** This also will allow us to fix the other problem.
>
> **[5:33](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=333)** Basically right here.
>
> **[5:35](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=335)** When I re-invalidate the cache.
>
> **[5:37](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=337)** If this gameStatus is not playing, that's another case where I need to clear the interval.
>
> **[5:46](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=346)** Clear the interval for this.intervalId, right?
>
> **[5:51](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=351)** The minute the gameStatus turns into either won or lost, I want to clear the timer.
>
> **[5:57](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=357)** I don't need the timer to keep running so that when I win the game, the timer stops.
>
> **[6:05](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=365)** One last thing we need to do.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=367)** Remember that we placed a TODO here somewhere.
>
> **[6:10](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=370)** TODO shuffle the random numbers.
>
> **[6:12](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=372)** 'Cause right now, winning the game's really easy.
>
> **[6:15](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=375)** You just pick the first four numbers.
>
> **[6:17](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=377)** So we need to shuffle those numbers.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=379)** So in here, after computing a target, I need to shuffle the random numbers.
>
> **[6:24](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=384)** And the easiest way to shuffle the array is really to use a library like Lodash, which has the shuffle function.
>
> **[6:32](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=392)** But of course I don't need to import the whole Lodash library just to use the shuffle function out of Lodash.
>
> **[6:38](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=398)** I can use Lodash micro modules to import just the shuffle function.
>
> **[6:43](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=403)** So basically we import shuffle from lodash.shuffle.
>
> **[6:51](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=411)** So this will import only the shuffle function out of the Lodash library, which is what I'm interested in.
>
> **[6:56](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=416)** And to use it in here, we can do something like shuffledRandomNumbers.
>
> **[7:05](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=425)** Equal shuffle, the function from Lodash, performed on this.randomNumbers.
>
> **[7:13](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=433)** Just like that.
>
> **[7:14](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=434)** And instead of using randomNumbers, let me look where we're using randomNumbers.
>
> **[7:21](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=441)** So we actually need to change randomNumbers in these two places into shuffledRandomNumbers.
>
> **[7:27](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=447)** So in here, and in here.
>
> **[7:31](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=451)** And let's test.
>
> **[7:34](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=454)** I don't have shuffle.
>
> **[7:35](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=455)** This is what you get when you have an error like that.
>
> **[7:37](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=457)** I need to [[npm]] install shuffle.
>
> **[7:39](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=459)** So npm install, lodash.shuffle.
>
> **[7:44](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=464)** Try now.
>
> **[7:46](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=466)** All right so 15 does not equal to three plus seven plus 10 plus one.
>
> **[7:50](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=470)** We'll probably need this, this and that.
>
> **[7:54](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=474)** And I barely hit the time target.
>
> **[7:56](https://www.linkedin.com/learning/react-native-essential-training/caching-to-optimize-computable-values?u=76281980&t=476)** But seems like the shuffle is actually working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2)
> **Code Identifiers:** gamestatus (24), calcgamestatus (4), randomnumbers (4), componentwillupdate (3), nextstate (2)
> **CLI Commands:** make (2), npm (2)
> **Definitions:** is a  (4)
> **Env Vars:** todo (2)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** install (2)
> **Cross-References:** previous video (1)

#### [Remounting a component to reset it](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=0)** - [Instructor] Let's do one last feature for this game.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=4)** Let's create a Play Again button once the game is won or lost.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=9)** We'll start with the markup for that button.
>
> **[0:11](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=11)** Let's place it in this area under the numbers.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=15)** We can use the Button component from [[React Native]].
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=20)** Here is the documentation for the Button component.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=23)** We give it an onPress event and a title for that button.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=27)** Let's do that.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=28)** We'll place it right here under the View, Button with a title of Play Again.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=37)** And we'll figure out the onPress next.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=40)** But let's see how that looks.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=44)** Well, you can see actually how the onPress is a required property.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=47)** So let's provide an empty onPress function.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=53)** Here's the button, it looks decent.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=56)** So what should this button do?
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=58)** This button should completely reset the game, which means it has to reset the state of the game but also, it means that we have to generate a new target number.
>
> **[1:09](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=69)** We have to generate a new set of random numbers and we also have to reset any timers that we did in the game.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=75)** So a simple reset for the state is not going to do.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=79)** We could think about moving all the initialization of the game into its own function and then calling this function once we want to [[Representational State Transfer (REST)|rest]] the game.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=88)** But that's not going to be enough because we have to clear any interval timers that we have.
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=93)** We also have to refire this code that initializes a new interval for the new game.
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=99)** So it is a bit of a complicated logic here.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=103)** If we start thinking about creating the reset right here on the game level, we'll have to reset the state.
>
> **[1:49](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=109)** We'll have to reinitialize everything that we did before the game mounts and we also have to refire the timers.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=117)** So instead of going down that path, there is an easier way and the easier way is to just unmount the Game component and remount it.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=126)** If we do that, then everything is going to fire normally.
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=130)** The state is going to be reinitialized.
>
> **[2:12](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=132)** The generations of all the random numbers is going to be fired again and the timers are going to reset normally as well.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=140)** So how do we do that?
>
> **[2:21](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=141)** It's really simply.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=142)** We'll make the App component unmount this Game component and remount it.
>
> **[2:28](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=148)** And there is a simple trick to do that in [[React.js|React]].
>
> **[2:32](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=152)** If we pass this Game component a key property, any key property, React is going to identify that particular game with that key property.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=162)** If we later change that key property, React is going to think that this is a brand new game and it will actually unmount the previous game and mount a new one.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=173)** So all we need to do is have some kind of gameId here and just change that gameId every time we want a new game.
>
> **[3:01](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=181)** And the easiest way to do that is to place this gameId on the state of the App component.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=186)** So we can do something like this.state.gameId.
>
> **[3:10](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=190)** And we'll initialize this gameId right here on the state of the App component.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=195)** So state equal an object and that object has a gameId.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=201)** We can start the gameId with one.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=203)** Now, to reset the game, all we need to do is change this gameId into something else.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=210)** So let's write a resetGame function in here.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=214)** No arguments for this function.
>
> **[3:36](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=216)** And it will simply set the state.
>
> **[3:39](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=219)** It will change the gameId to be the previosuState.gameId plus one.
>
> **[3:48](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=228)** Very simple.
>
> **[3:49](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=229)** So if we call this resetGame function, React is going to unmount the previous gameId with one and remount a new on with two.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=239)** So now we need to task this resetGame function reference to the Game component so that it can call it when we hit play again.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=247)** So from the perspective of the Game component, we can name this feature onPlayAgain.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=255)** This will be the App component resetGame function.
>
> **[4:21](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=261)** Let me format that a little bit.
>
> **[4:24](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=264)** And here we go.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=265)** The game has a key, we can increment that key from the App component.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=269)** The game also has a behavior that it can invoke to reset the game and we named it onPlayAgain.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=275)** So we'll go to the Game component and inside the Game component, we'll define this onPlayAgain function, which is a PropTypes function and it's also required.
>
> **[4:52](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=292)** Now, the rest button, the onPress here can just be this.props.onPlayAgain, just like that.
>
> **[5:03](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=303)** And this should actually work.
>
> **[5:05](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=305)** Let's actually test it real quick.
>
> **[5:07](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=307)** So we've got a game.
>
> **[5:08](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=308)** The timer is decrementing and we can play again.
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=313)** Did you see that?
>
> **[5:14](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=314)** Everything reset right away because React has a new game, a game with a different ID than the previous one.
>
> **[5:21](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=321)** So even if the game is lost like that, Play Again will just reset it.
>
> **[5:26](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=326)** So this is great but we want to show the Play Again only when the game is lost.
>
> **[5:31](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=331)** Not when the status is still playing, so we can do that simply with a conditional here.
>
> **[5:36](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=336)** So I'll put the whole Play Again button in a conditional and we can do something like this.gameStatus is not playing.
>
> **[5:50](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=350)** Show this Play Again button.
>
> **[5:52](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=352)** Format this.
>
> **[5:54](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=354)** And here's the condition.
>
> **[5:55](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=355)** If the game status is not playing, we'll go ahead and show this play button.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=360)** Let's test that.
>
> **[6:02](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=362)** The game starts and there is no Play Again button.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=367)** And once the game hit a condition where it's won or lost, the Pay Again button is going to show up and we can play the game again.
>
> **[6:17](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=377)** Testing the won condition.
>
> **[6:18](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=378)** Same thing.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=379)** If the game is won, we can play again.
>
> **[6:24](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=384)** So I think is a good set of features to call this game done and move on to a different example.
>
> **[6:29](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=389)** However, before we do that, I'd like you to think about more features to add to this game.
>
> **[6:34](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=394)** And maybe you can focus on two features.
>
> **[6:37](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=397)** The first feature is when you play again, make the game harder.
>
> **[6:42](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=402)** And you can do that by controlling the parameters that we send to the game.
>
> **[6:47](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=407)** The randomNumberCount, the initialSeconds, all of these are controllable as well.
>
> **[6:53](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=413)** So that's one feature.
>
> **[6:54](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=414)** Make the game harder as it progress.
>
> **[6:56](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=416)** The other feature, keep a score.
>
> **[6:59](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=419)** Whenever the game is won, give the player some kind of score and that score persists between games.
>
> **[7:06](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=426)** So the more games the user win, the higher the score.
>
> **[7:10](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=430)** So you want to think about where to place this score and how to control it.
>
> **[7:15](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=435)** I hope you liked this example.
>
> **[7:16](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=436)** Let me know if you have any questions about what we did or about the challenges.
>
> **[7:21](https://www.linkedin.com/learning/react-native-essential-training/remounting-a-component-to-reset-it?u=76281980&t=441)** In the next chapter, we'll build a different example and this time, we'll work with data and actually remote data so that we know how to do things asynchronously.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[Representational State Transfer (REST)|Rest]] (2), [[React Native]] (1)
> **Code Identifiers:** gameid (11), onpress (5), resetgame (4), onplayagain (4), previosustate (1)
> **Definitions:** is a  (6), means that (1), is an  (1), we call this (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)


### 4. Building a Data-Driven App

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction and preview](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=0)** - [Narrator] Over the next few chapters, we're going to build the bake sale app.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=4)** It's a very simple app that lists what we're going to call deals.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=9)** Every deal has an image, a title, and a price.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=12)** We can click on a deal to get more information about this deal.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=16)** We can swipe left and right here to navigate the images.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=20)** We can click on this button to go to the deal page on [bakesaleforgood.com](https://bakesaleforgood.com).
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=26)** The app also support searching for deals.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=30)** So let me quickly show you the APIs that we're going to be working with.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=34)** So they're all hosted a [bakesaleforgood.com/api](https://bakesaleforgood.com/api).
>
> **[0:38](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=38)** We have /deals.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=40)** This is list of all the deals in the system.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=43)** We have /deals slash the ID of the deal.
>
> **[0:46](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=46)** This will give us details about a single deal.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/introduction-and-preview?u=76281980&t=49)** We have /deals with a search term, and this will perform the server side search and return the list of deals that match the search term.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **URLs:** [bakesaleforgood.com](https://bakesaleforgood.com) (2)
> **Speakers:** - [narrator] (1)

#### [Initializing the Bakesale app](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=0)** - [Instructor] Let's start the Bakesale app.
>
> **[0:03](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=3)** We'll initialize a new project for that, so we'll start with [[React Native]] init Bakesale.
>
> **[0:11](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=11)** And then we'll CD into Bakesale and run React Native run iOS.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=20)** Excellent, we have a brand new React Native project, let's open up the editor on this directory.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=27)** Let's also run the [[React.js|React]] dev tools.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=32)** Perfect.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=33)** We'll start the usual by creating a source folder under the root and under source we'll create a component folder and, in components, we'll create our App.js.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=49)** App.js is a regular react class component and let's bring in some components from React Native, so I'm going to import view and text from React Native.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=65)** I'll make the app component render a view and inside the view, we'll render a placeholder text.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=74)** Now we can go to our index.ios.js, delete everything except the last line and we'll import our app component from dot slash source, components, slash App.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=92)** We also need app registry from React Native so we'll import that as well.
>
> **[1:38](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=98)** And the component that we want to register is App.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=102)** Let's make sure this worked and we have big failing here from the App component, excellent.
>
> **[1:49](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=109)** We'll do the exact same thing for index.[[Android]].js so that later we can test our application for Android as well.
>
> **[1:59](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=119)** Let's center Bakesale on the screen.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=122)** We need to import StyleSheet from React Native and we need to create a styles object for this component, so const styles equal StyleSheet.create and in here we'll define our different styles.
>
> **[2:21](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=141)** We'll need a style for the container, so I'm going to call this container.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=146)** The container is going to have a flex of one and we need to justify content to center.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=156)** Let's also alignItems to center as well.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=160)** For the header, let me just give it a font size of, say, 40.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=167)** Let's test those out, I'll give the view a style of styles.container and we'll give the text a style of styles.header.
>
> **[2:58](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=178)** Let's test that out, looking good.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=183)** I'm going to start this app with the remote data itself.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/initializing-the-bakesale-app?u=76281980&t=186)** In the next video, we'll [[Fetch]] the data from the Bakesale API and start thinking about what to do with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (7), [[React.js|React]] (2), [[Android]] (2), [[Fetch]] (1)
> **File Paths:** app.js (2), index.ios.js (1), index.android.js (1)
> **CLI Commands:** make (2), cd (1)
> **Code Identifiers:** ios (1), alignitems (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Using the Fetch API](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=0)** - [Instructor] We're ready to [[Fetch]] the data and see what we're working with.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=4)** I'll create a new file under source and call this file [[AJAX]].JS.
>
> **[0:11](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=11)** And this is the file where we're going to do all the Ajax requests that are to be used by the app.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=18)** So we'll export a default object here.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=21)** That is our API.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=23)** And in this default object, we'll define functions responsible for fetching different types of data.
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=31)** So let's define the first function.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=33)** We're interested in fetching the initial deals.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=37)** So I'm going to call this function fetch initial deals.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=41)** In this function we want to do an Ajax request to the big sale API.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=45)** We can use the fetch library to do that.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=48)** The fetch library comes built in [[React Native]] so we don't need to import anything.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=54)** And you can see the documentation for the fetch API under the react native website.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=59)** So you do fetch, the default method is get but you can change it if you need to.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=64)** Once you have the initial response you can convert the initial response to [[JSON]], and then you can use that JSON object returned from the server.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=72)** So I'm going to copy this example and use it in here exactly as is except our API is going to be different and I'll just return the response JSON itself in here.
>
> **[1:25](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=85)** So our API is from bake sale.
>
> **[1:29](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=89)** So I'm going to define a constant here, call this constant API host.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=95)** This will be HTTPS:[BakeSaleForGood.com](https://BakeSaleForGood.com).
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=101)** And in here I'll use this variable.
>
> **[1:44](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=104)** So I'll go with like API host plus /API/deals.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=111)** This is the end point that we're interested in.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=114)** Let's go ahead and test that.
>
> **[1:56](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=116)** In APTA JS, we can use a component did mount call.
>
> **[2:01](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=121)** And in here we can use the fetch initial deals function right away, just like that.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=128)** Remember that this is an async function.
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=130)** So we have to await on that in here.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=133)** And this will give me back the list of deals.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=136)** So I'll put it in a constant, just like that.
>
> **[2:19](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=139)** Since we used await that means we have to make component did mount itself async and for now let's just console log the list of deals.
>
> **[2:28](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=148)** Of course, I need the fetch initial deals function.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=153)** So I'll import that from up on level Ajax.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=157)** Let's go ahead and test that.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=160)** I forgot to make this fetch initial deal async as well so that's required.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=167)** I also did not make these named exports.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=170)** So we need to import Ajax itself and call Ajax.fetch initialdeals.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=180)** Seems like that worked.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=183)** Let's check the debugger, debug JS remotely.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=188)** And if you notice here I have in the rate of nine items those are objects that represent the deals.
>
> **[3:17](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=197)** Every deal has a title, a price, which is in cents, a list of media files, a key and a cause.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=205)** So we can now use this data to render a list of deals.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=210)** To do that we'll place the deals on the state of the app component.
>
> **[3:35](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=215)** So let's introduce a state here.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=217)** This state will hold the deals array and it will start as an empty array.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=223)** And when we have the deals we'll just set the state to account for those deals that just came from the API.
>
> **[3:51](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=231)** So deals just like that.
>
> **[3:54](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=234)** And now we can use the list of deals in here.
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=238)** So let's introduce a new component to represent the list of deals.
>
> **[4:01](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=241)** We'll call it deal list.
>
> **[4:04](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=244)** So create new file under component, call that deallist.js.
>
> **[4:09](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=249)** This is a regular class component.
>
> **[4:11](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=251)** So deal list and I'll bring in view and text and style sheet.
>
> **[4:16](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=256)** This probably should be in my snippet and I'll create a view in here and I'll use a placeholder text as well for now and do something like that deals.
>
> **[4:28](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=268)** Now in app.js I'd like to render this deals list component.
>
> **[4:33](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=273)** So I'll have to import that.
>
> **[4:34](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=274)** So import deal list from same level deal list.
>
> **[4:41](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=281)** So to render the deal list, it's as simple as deal list and we'll give it the list of deals from here because they are hosted on the state of the app component.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=290)** So this.state.deals, however, I only want to render the deal list when I have a list of deals.
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=298)** I'd like to keep this text while I'm loading the deals.
>
> **[5:01](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=301)** So let's have a conditional here and do something like if I have deals, so if this.state.deals.length is greater than zero,
>
> **[5:14](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=314)** we'll go ahead and render the deal list.
>
> **[5:19](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=319)** Otherwise we'll just render the text, just like that.
>
> **[5:23](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=323)** Let me format and let's test.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=328)** So the bake sale header should flash and then I should have the deals right here.
>
> **[5:33](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=333)** Of course we're not rendering the deals yet.
>
> **[5:35](https://www.linkedin.com/learning/react-native-essential-training/using-the-fetch-api?u=76281980&t=335)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (10), [[AJAX]] (6), [[JSON]] (3), [[React Native]] (2)
> **Env Vars:** api (9), json (3), https (1), apta (1)
> **Analogies:** just like (4)
> **File Paths:** ajax.js (1), deallist.js (1), app.js (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **URLs:** [bakesaleforgood.com](https://bakesaleforgood.com) (1)
> **Cross-References:** in the next (1)

#### [Using FlatList with API data](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=0)** - [Instructor] When we started this project, I forgot to add [[ESLint]].
>
> **[0:03](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=3)** So I just did that off-camera and I'm going to go ahead and fix the ESLint problems that we have.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=9)** So we're not using previous state in here.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=12)** so I can actually simplify this since we're not using the previous state to just that.
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=19)** Looking good.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=21)** And deal list, we're not using style sheet, but we will.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=24)** So I'm just going to keep it.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=25)** I'll create a styles object here from stylesheet.create.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=32)** And in here, I'll introduce a list property.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=36)** So this is the main list.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=37)** I'll just give it a background color for now.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=41)** Very light gray, just to make sure things are working and I'll give this list to the view.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=50)** So styles.list, make sure this is working.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=56)** Perfect.
>
> **[0:57](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=57)** So this is our view right here.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=59)** So we want to definitely make this view take the full screen.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=62)** So let's do flex one and maybe we'll give it a width of 100%.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=71)** And to make this text not overlap with the controls of the iPhone, we'll just give it padding top of say, 50.
>
> **[1:22](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=82)** Excellent.
>
> **[1:24](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=84)** So we have introduced a new property for this component called deals.
>
> **[1:29](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=89)** So we need to define the type for that property.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=92)** So we'll do static propTypes equal we have deals.
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=99)** And this deal is propTypes.array and it's required.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=105)** We'll need the prop size package.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=108)** So we'll import that from prop types and that's a dependency.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=113)** So [[npm]] install prop-types.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=118)** You can work with this deals array right away.
>
> **[2:00](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=120)** We can actually just simply map it to whatever we want to do to render a single deal.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=126)** So in here, we can do this.props.deals.map.
>
> **[2:11](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=131)** The map is going to give me a single deal.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=134)** Let's just render a text item for every deal just for testing.
>
> **[2:19](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=139)** So in here we'll do deal.title just like that.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=144)** And we'll give every text a key just to make [[React.js|React]] happy.
>
> **[2:27](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=147)** So deal.key.
>
> **[2:30](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=150)** Okay, so this should work.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=153)** And I can see the titles of the deals right here.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=156)** The big sale project is just starting.
>
> **[2:39](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=159)** So we only have nine deals, but you can imagine that this list of deals is going to be in the hundreds which means that we need to start scrolling this list.
>
> **[2:49](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=169)** So we need to introduce a new [[React Native]] component to handle that.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=174)** This component used to be list view but React Native deprecated that in favor of FlaList or SectionList.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=183)** For this particular case, we need FlatList.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=188)** So using this FlatList component is easy.
>
> **[3:11](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=191)** You just give it a data property, which is an array.
>
> **[3:14](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=194)** So we can give it our deals array and you give it a render item function which is the function that this FlatList component is going to use to render every item in that array.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=205)** So let's use this FlatList array just like that.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=209)** And instead of all this here, we'll just use FlatList.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=214)** The data that we want to give this FlatList is our deals array which is on the props of this component.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=221)** And to render every item, we can just render the title for now.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=226)** We'll need to import FlatList from React Native.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=230)** And I think we can test that right away.
>
> **[3:52](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=232)** And now I am rendering the list exactly as I did before.
>
> **[3:56](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=236)** But now this list is scrollable.
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=238)** You can test that and see how you can actually now scroll the list.
>
> **[4:03](https://www.linkedin.com/learning/react-native-essential-training/using-flatlist-with-api-data?u=76281980&t=243)** In the next video, we'll take this part and make it into its own component to render a single deal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (3), [[ESLint]] (2), [[npm]] (1), [[React.js|React]] (1)
> **CLI Commands:** make (6), npm (1)
> **Code Identifiers:** proptypes (2), iphone (1)
> **Analogies:** just like (2), imagine (1)
> **Definitions:** means that (1), is an  (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Working with images](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=0)** - [Instructor] For every item in this flat list, we want to render a new component to represent a single deal.
>
> **[0:06](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=6)** So we'll call this component DealItem and we'll pass it the deal, which is just the item.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=15)** And we'll go ahead and place this component deal item on at the same level.
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=19)** So DealItem.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=21)** No longer using texts in here.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=25)** And we'll now create new item.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=27)** So dealitem.js.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=30)** [[React.js|React]] class component which we named DealItem.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=36)** So we need to work with the same prop types and [[React Native]] components.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=42)** So I'll bring those in.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=43)** DealItem.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=45)** I probably don't need a flat list in deal items.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=48)** So it's just view text.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=51)** We're also going to render an image for every deal item.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=54)** So we'll go ahead and bring in image just like that.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=58)** So deal item receives single property so far.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=62)** So we'll define a static prop types equal the property that this deal item receives is the deal items.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=71)** So this is prop types dot, let's go with object for now and this as required as well.
>
> **[1:18](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=78)** I can actually make this little bit more specific by using the prop types shape property.
>
> **[1:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=85)** But I'm going to simplify this example so that we can go over many other concepts.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=91)** So every deal is going to be its own view.
>
> **[1:34](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=94)** And inside the view, we'll render the title of the deal, the price of the deal and the image that represents the deal.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=102)** Let's actually start with the image.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=105)** So the image component in React Native expects a source property and this source property is an actual object.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=114)** And I can specify many attributes for that object, but the most important one is the URI if you're rendering an image from the internet.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=122)** What is the URI of that image?
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=124)** And for us, the URI is this.props.deal.media.
>
> **[2:12](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=132)** And let's render the first media item as the image for that deal.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=138)** Close this image component.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=140)** And we can actually test that right away.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=143)** So we have a deal item that renders a deal.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=146)** Let's test.
>
> **[2:28](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=148)** It doesn't look like it worked.
>
> **[2:30](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=150)** So let's take a look at what we're working with here.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=153)** So we've got deal list.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=154)** Every deal has a media, it has an array.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=160)** So every deal item is a view, has a source.
>
> **[2:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=165)** This all looks good to me.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=167)** So I think this might be a style problem.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=170)** So let me go ahead and define a style property for this image.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=174)** So we'll go with style equal styles.image.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=179)** I will create the styles object.
>
> **[3:01](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=181)** Styles equal stylesheet.create.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=186)** And we'll go with image.
>
> **[3:07](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=187)** So let's give this image a width of 100% and let's give it its height which is coming from the API as 150.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=198)** So let me format things out, let's test.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=205)** And there you go.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=205)** We have images and they are scrollable.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=210)** Very good.
>
> **[3:31](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=211)** So let's now we're render the other information for every deal.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=213)** So under the image, we'll render another view and for that view, we'll render multiple texts.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=221)** So let's render one text for the title of the deal.
>
> **[3:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=225)** So this would be deal.title.
>
> **[3:48](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=228)** And I'm going to go ahead and define the deal out of the props for the render so that I don't do this.props.deal every time.
>
> **[3:56](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=236)** So the deal here is destructured out of this.props.
>
> **[4:03](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=243)** And we'll render another text for the price and another text for the name of the cause for this deal.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=253)** So we have deal.price and we have deal.cause.name.
>
> **[4:20](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=260)** That's the shape of the API.
>
> **[4:23](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=263)** Let's see how that all looks.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=265)** Perfect.
>
> **[4:26](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=266)** So we have the deal.
>
> **[4:27](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=267)** We have its title, you have its price in cents, and we have its cause.
>
> **[4:33](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=273)** So we need the price to be in dollars.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=275)** And we'll probably do that in a few screens because right after we're done with this task, we're going to tap on every deal to see more information for every deal.
>
> **[4:45](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=285)** So let's create a function.
>
> **[4:48](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=288)** Call this function price display, and pass this deals price to that function.
>
> **[4:55](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=295)** And this function is going to be responsible for displaying the price.
>
> **[5:00](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=300)** So I'll place this function in a different file.
>
> **[5:03](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=303)** So I'll import price display from let's put it up on level.
>
> **[5:09](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=309)** Let's call this file util.
>
> **[5:11](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=311)** So this is all the utility functions that we need in our system.
>
> **[5:14](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=314)** So we'll create this new file util.js right under source.
>
> **[5:20](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=320)** We'll use named exports.
>
> **[5:21](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=321)** So export const price display equal a function.
>
> **[5:27](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=327)** This function is going to receive the price as an argument.
>
> **[5:32](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=332)** So price here.
>
> **[5:34](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=334)** Remember this price is in cents.
>
> **[5:35](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=335)** In fact, let's just name it priceInCents.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=340)** And this function will return a string that represents the price in dollars.
>
> **[5:46](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=346)** I'm going to actually make it return the dollar symbol as well.
>
> **[5:49](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=349)** So what we need is the price in dollars, which is price in cents divided by 100.
>
> **[5:58](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=358)** So I think this will work.
>
> **[5:59](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=359)** Let's test that out.
>
> **[6:01](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=361)** We already use the price display in the deal item and looks like it's working.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=367)** Perfect.
>
> **[6:08](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=368)** In the next video, we'll start thinking about what should happen when we press on a deal to get more information about that deal.
>
> **[6:14](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=374)** But before we do that, we should probably do some style work to make this list look a little bit better.
>
> **[6:20](https://www.linkedin.com/learning/react-native-essential-training/working-with-images?u=76281980&t=380)** I'll do that off-camera, try to come up with your own styles and I'll explain the styles that I'll come up with in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2), [[React.js|React]] (1)
> **Env Vars:** uri (3), api (2)
> **CLI Commands:** make (3)
> **File Paths:** dealitem.js (1), util.js (1)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** priceincents (1)
> **Analogies:** just like (1)

#### [Navigating to different views with state](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=0)** - [Instructor] I've made my styles.
>
> **[0:02](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=2)** Here's how my list of deals looks like right now.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=5)** So I've just added some margins around every deal and make it into a box, made the title of every deal a little bit bigger and bolder and align the cost and the price under the title in one row.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=18)** You can check the [[GitHub]] repository for this movie to see the list of styles that I've used to do all that.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=26)** Let's do the important part now and the challenging part.
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=31)** When we tap on a deal, we want to go to a different view that displays more details about every deal.
>
> **[0:38](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=38)** This means we want to define a press event on very deal.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=42)** And that's going to be for the whole deal.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=44)** So if I press anywhere inside this box of the deal, it takes me to that deal detail view.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=51)** So I'm going to start the deal detail view by duplicating this DealItem component.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=56)** So duplicate DealItem as DealDetail.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=62)** And the DealDetail will keep it exactly as is at first.
>
> **[1:07](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=67)** We'll just rename the component into DealDetail.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=71)** And I'll just put a placeholder text item in here to identify this as the details of a single deal.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=79)** Inside the DealItem component, which is what's displaying this box in here, I want to make this whole thing a touchable component.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=88)** So instead of View here, I'll use TouchableOpacity and I'll include TouchableOpacity from [[React Native]], just like that and now, I can define an onPress event on this TouchableOpacity.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=103)** So what's going to happen when I press on this deal box?
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=108)** Let's go ahead and put that inside a function in here.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=111)** We'll call it handlePress.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=114)** Format.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=115)** And we'll define handlePress right here.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=118)** handlePress is going to be a function that is going to do something.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=123)** What is it going to do?
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=125)** We basically want React Native to rerender the view when we touch on a deal and render the DealDetail view, instead of the DealList.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=134)** So rendering the DealList happen here in the top-level App component.
>
> **[2:19](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=139)** If we have a list of deals, we are rendering the list of deals.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=143)** Now we have another condition.
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=145)** We're going to have to put something on the state to make [[React.js|React]] rerender itself and display a different view.
>
> **[2:32](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=152)** So I'll call this currentDealId.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=156)** And this starts with null.
>
> **[2:38](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=158)** So basically, when I don't have a currentDealId, the view is going to just render the list.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=164)** If I have a currentDealId, I'll make React render the DealDetail component for that dealId.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=171)** So we can create a function right here.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=174)** Call this function setCurrentDeal.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=177)** This function will receive a dealId and it will change this state to make that dealId as the currentDealId.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=185)** So we'll do a setState call and we'll just make the currentDealId the dealId that we are receiving as an argument to this function.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=195)** You can simplify setState here as well to make it just an object.
>
> **[3:20](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=200)** And now I need to task this setCurrentDeal down and flow it to the DealList component to define it as the behavior for every item press.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=209)** So I'll call this onItemPress and we'll pass it as this.setCurrentDeal.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=217)** So now the DealList component receive a nil property.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=221)** We name that property onItemPress.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=224)** This is a PropTypes.function.isRequired and we want to flow this behavior down to the DealItem component as well.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=233)** So we'll call it onPress here and this would be this.props.onItemPress and we format.
>
> **[4:02](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=242)** Perfect.
>
> **[4:03](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=243)** Inside the DealItem component, this receives an onPress function.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=248)** So it's a PropTypes.function also required and the handlePress is going to invoke this .props.onPress and call it with the ID of the deal, which is available from the API as this.props.deal.key.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=269)** The ID of every deal is named as key in the API.
>
> **[4:32](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=272)** So now to complete this feature in the App component, we need to add another conditional.
>
> **[4:37](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=277)** And I'll refactor this turnary here to make it more clear.
>
> **[4:41](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=281)** Basically, let's do multiple if statements here.
>
> **[4:43](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=283)** If we have the current deal, so if this.state.currentDealId, if that exists, we're going to return the DealDetail view for that deal.
>
> **[4:57](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=297)** And we'll need to figure out what to pass this component.
>
> **[5:00](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=300)** But let me continue on these if statements.
>
> **[5:03](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=303)** If I have a list of deals on this state, so if this.state.deals.length is greater than zero, then we'll go ahead and return what we're returning here, which is the DealList.
>
> **[5:17](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=317)** And otherwise, we'll just return the text just like that.
>
> **[5:21](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=321)** I don't need else statements here because I'm returning early from the render component.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=328)** Okay, so what does this DealDetail component need to render itself?
>
> **[5:32](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=332)** It needs a DealItem, so we'll need to figure out what deal to pass to the DealDetail in this case.
>
> **[5:39](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=339)** So I'll go ahead and define that in a function as well.
>
> **[5:41](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=341)** I'll call this function currentDeal.
>
> **[5:45](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=345)** So currentDeal is going to figure out what deal to pass to the DealDetail component.
>
> **[5:51](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=351)** currentDeal is a function.
>
> **[5:53](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=353)** It doesn't receive anything.
>
> **[5:55](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=355)** It will return the currentDeal that needs to be rendered in the DealDetail component.
>
> **[6:01](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=361)** And it can do that by finding the deal from the list of deals that we have on this state.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=367)** So it will return.
>
> **[6:08](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=368)** We'll start from this.state.deals and we'll do a find call here.
>
> **[6:14](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=374)** And basically, this find call is going to give me a deal every time and I would like to return if this deal.key equal to the current deal that we have on the state.
>
> **[6:29](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=389)** So this.state.currentDealId.
>
> **[6:33](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=393)** And if that condition is true, it will return that deal to be rendered in the DealDetail component.
>
> **[6:39](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=399)** I think we can test.
>
> **[6:41](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=401)** Let me just format everything and we need DealDetail.
>
> **[6:45](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=405)** So let's import that.
>
> **[6:47](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=407)** We're importing DealDetail from DealDetail.
>
> **[6:52](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=412)** And let's test.
>
> **[6:54](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=414)** Refresh.
>
> **[6:56](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=416)** So the deals are still rendering, so this if statement is now the active one and when I press on a deal, I'm going to press on this website package deal.
>
> **[7:06](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=426)** This if statement is going to take over and it will render that deal on its own using the new DealDetail component that we're going to modify now.
>
> **[7:14](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=434)** Let me fix the styling a little bit here in DealDetail.
>
> **[7:18](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=438)** We'll go with marginTop.
>
> **[7:20](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=440)** Instead of 12, We'll do 50.
>
> **[7:25](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=445)** This looks okay.
>
> **[7:26](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=446)** So now, we need to make this DealDetail component render more information about this deal.
>
> **[7:35](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=455)** And we'll need an [[AJAX]] request to go [[Fetch]] more information about that deal because the initial list of deals that we fetch doesn't have that information per deal.
>
> **[7:45](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=465)** When we ask the API for information about a single deal, it will give us back the images and the title and the cost and the price, so all this information is going to come back from the API.
>
> **[7:56](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=476)** But I don't want React to rerender this information.
>
> **[7:59](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=479)** I already have that information.
>
> **[8:01](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=481)** I'd like React to rerender the extra information that we fetch from the server.
>
> **[8:06](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=486)** So to make that clear, in the App component, I'll call this property initialDealData because this is just part of the data that I'd like this component to render.
>
> **[8:18](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=498)** And in the DealDetail, instead of rendering the deal from the props directly, I'll put the initial DealDetail on the state and then I'll make an Ajax call to change that state.
>
> **[8:29](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=509)** So let's introduce a state object.
>
> **[8:31](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=511)** And in here, we'll define the deal.
>
> **[8:34](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=514)** This deal starts out as this.props.initialDealData.
>
> **[8:41](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=521)** initialDealData is now the prop that I receive as the DealDetail component and instead of reading the deal from the props here, we want to read it out of the state, just like that.
>
> **[8:53](https://www.linkedin.com/learning/react-native-essential-training/navigating-to-different-views-with-state?u=76281980&t=533)** So now, this DealDetail component is ready to fetch more information for every deal, place that information right on the state and use that to rerender this extra information under the initial information that we have for every deal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[Fetch]] (4), [[React Native]] (2), [[AJAX]] (2), [[GitHub]] (1)
> **Code Identifiers:** currentdealid (7), onpress (4), handlepress (4), dealid (4), currentdeal (4)
> **CLI Commands:** make (11), find (2)
> **Env Vars:** api (4)
> **Analogies:** just like (3)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **UI Navigation:** go to (1)

#### [Fetching more API data for a view](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=0)** - [Narrator] We wired the on press event for every deal, and now we can go to a deal detail view.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=7)** It's now time to [[Fetch]] the extra details from the server.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=12)** We're going to need another [[AJAX]] function.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=15)** In Ajax.js, just like the fetch initial deals function, we now need another function.
>
> **[0:22](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=22)** We'll call this function fetch deal detail.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=28)** And this function is going to need the deal ID 'cause that's how we're going to use the API.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=34)** We need a deal ID to ask the API server for information on one deal.
>
> **[0:39](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=39)** So the code here is exactly the same, except that we want to do slash here and add the deal ID.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=47)** And this should work to give us information on a single deal.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=52)** By the way, I don't need these to be let variables, I'm going to change them all to just const.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=58)** Whenever you can use const, you should.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=60)** There's actually an [[ESLint]] rule for that.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=63)** So if I undo this to let and go to my Eslint file, the rule is to prefer const and we'll do that as an error.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=74)** So with this rule in this Ajax file, it's going to tell you use const instead of let.
>
> **[1:20](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=80)** This is simply perfect, thank you, excellent.
>
> **[1:24](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=84)** Okay, cool.
>
> **[1:26](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=86)** Now we can test this function, fetch deal detail.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=90)** So in the deal detailed component, we want to bring in the Ajax actions.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=95)** So import Ajax from up one level Ajax, and we can fire this new fetch deal detail function when the component mounts, because eventually we want to place the information coming back from the fetch deal detail function on the state of the component.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=115)** So we need component did mount, and we need to call Ajax.fetch deal detail.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=122)** And in here pass the ID for the deal, which is on every deal is stored as the key, remember?
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=130)** So in here, we can do this.state.deal.key.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=136)** This is an Ajax action, so we want to await on it, which means we want to make this into async and this will give me deal detail, so let's name this constant full deal.
>
> **[2:29](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=149)** And we can const a log full deal to see what we're working with, but eventually we want to set the state and change the state deal to be full deal.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=160)** Previous state is not used, so this can be simplified to the object syntax.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=166)** Remember that the shared information between the initial deal data and the full deal data is going to stay the same with this set state call.
>
> **[2:55](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=175)** So [[React.js|react]] is only going to render the new information in here.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=179)** So let's go ahead and test all that.
>
> **[3:01](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=181)** Refresh, go in here.
>
> **[3:04](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=184)** And now I have the full deal information in here.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=189)** So we have a cause and charity, we have a description, we have a geo-location in case the deal is only offered in a particular place.
>
> **[3:17](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=197)** And we also have user information, and the user information has an avatar for the user and the name of the user.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=205)** So let's display at least the description and the user information.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=210)** So I'll go ahead and do that.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=212)** Get rid of this console log.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=214)** And in here, we can now display the user information.
>
> **[3:38](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=218)** So I'll place that in its own view.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=221)** And in here, we need two things.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=223)** We need an image component for the avatar of the user, so the source of this image component is URI is deal.user.avatar.
>
> **[3:55](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=235)** Or we're going to need some special style for this image component.
>
> **[3:59](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=239)** And we also need to display the user name.
>
> **[4:03](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=243)** So we'll do something like deal.user.name.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=247)** We need an equal sign in here, and let's figure out the style for the avatar.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=253)** So styles.avatar.
>
> **[4:17](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=257)** And if we test this URL that's coming from the avatar right here, just to see what we're working with.
>
> **[4:24](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=264)** So it looks like we have an image that is 60 pixels by 60 pixels.
>
> **[4:31](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=271)** So we'll make that the height and width for the avatar.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=275)** So in here we'll do avatar is width, 60, height, 60.
>
> **[4:44](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=284)** So I think this should do for the user.
>
> **[4:46](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=286)** Let's also have another view for the description.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=290)** So in here, we'll do a text and we'll do deal.description.
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=298)** Let's test, click on the deal and cannot read avatar of undefined.
>
> **[5:04](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=304)** So this is happening because the initial data did not have a user property, and we're trying to read the user property on the initial data as well.
>
> **[5:14](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=314)** By the way, this is the type of problem that a type checker tool like flow or TypeScript would detect for you.
>
> **[5:22](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=322)** So you don't have to go actually see the error, the tool is going to tell you you're using.user.avatar, what about the case when.user is null.
>
> **[5:32](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=332)** But I don't want to overwhelm the example, I want to try and keep things simple.
>
> **[5:37](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=337)** The solution here is really simple.
>
> **[5:39](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=339)** We can make this whole view conditional on the existence of the user property on the deal.
>
> **[5:46](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=346)** So I'll just do that.
>
> **[5:47](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=347)** I'll have a conditional here, then do something like deal.user and end this view.
>
> **[5:54](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=354)** Format everything, there you go.
>
> **[5:56](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=356)** So only show this view if there is a deal.user.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=360)** Let's test, click on a deal and there you go, we've got the author or you've got the description.
>
> **[6:08](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=368)** Before we move on and add another feature to this application, let's style this view a little bit and make it look decent.
>
> **[6:16](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=376)** I'll do that off-camera.
>
> **[6:20](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=380)** Here are the styles that I came up with, you can find them in the [[GitHub]] repository.
>
> **[6:26](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=386)** By the way, if you want to inspect the styles, you can do so using the inspector here.
>
> **[6:33](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=393)** Now, this inspector works in two mode.
>
> **[6:36](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=396)** If the react dev tools is not running, it will show an overlay here and you can click on things to see their styles.
>
> **[6:44](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=404)** For example, click on the description and you'll see what we have here, styles for the description.
>
> **[6:52](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=412)** If the react dev tools is running, then clicking on any element with the inspector is going to highlight that element in the dev tools.
>
> **[7:02](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=422)** And it will also show any styles that element has, right here.
>
> **[7:06](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=426)** So you can see the styles that I added, for example, for this row, I made the flex direction row justify content spaces around a line item center, and then inside this view, I have the view for the information right here and the view for the user right here.
>
> **[7:24](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=444)** And you can see every style applied to that element right here in the react dev tools, and this is really handy.
>
> **[7:31](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=451)** The other feature that I used while coming up with these styles is the hot reloading.
>
> **[7:37](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=457)** Let me show you what that means.
>
> **[7:39](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=459)** So let's say you're in this view and you want to do some changes to the style.
>
> **[7:45](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=465)** So if you only have the live reload, that means when you change something here, [[React Native]] is going to reload the app.
>
> **[7:54](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=474)** So for example, if I want to make the margin horizontal 15 instead of 12, and I save, react native is going to reload the app, but I lost my state, I am back to the main page, not the page where I was on.
>
> **[8:10](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=490)** So that's not ideal.
>
> **[8:11](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=491)** Instead, you can enable hot reloading, and hot reloading is going to reload the app without losing your state.
>
> **[8:20](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=500)** So if I want to set this back to 12 and I save, react native is going to hot reload the app without losing the state, and this is very helpful.
>
> **[8:31](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=511)** However, it doesn't work all the times, so sometimes you have to manually reload the app.
>
> **[8:37](https://www.linkedin.com/learning/react-native-essential-training/fetching-more-api-data-for-a-view?u=76281980&t=517)** But for most cases, it's really helpful when you want, for example, to test things without losing the state of the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (8), [[Fetch]] (7), [[React.js|React]] (4), [[React Native]] (3), [[ESLint]] (2)
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** click on (4), go to (2)
> **Analogies:** for example (4), just like (1)
> **Env Vars:** api (2), uri (1), url (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** ajax.js (1)
> **Cross-References:** coming up (1)

#### [Implementing a back link](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=0)** - [Instructor] We have a few major features to add to this application before we can call it done.
>
> **[0:06](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=6)** The first thing I'd like to add is a search capability.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=9)** So basically right now, the app just lists all the available deals, but I'd like to be able to search all the deals in the system.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=18)** Now, this search is going to be server-side, not client-side.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=23)** So I'm not just filtering the list that I have on the screen.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=27)** So let's for example say I have 20 deals displayed on this list view.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=32)** If I search, I'd like the server to search all the deals available in the system, and give me back a new list to display to the user.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=41)** So let's start that task.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=43)** We'll start with the markup.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=44)** But before we wire this search, there's one thing we should do.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=48)** When we press on a deal, we go to a new view that represents this deal.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=53)** There's no way for the user to go back.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=55)** So let's put a link here, to take the user back to the old deals list.
>
> **[1:01](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=61)** So this link would be in the deal detail component, and I'll put it right here above the image, and I'll make this a custom link.
>
> **[1:09](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=69)** Instead of using a button, I'll just use a TouchableOpacity component, and inside the TouchableOpacity component, I'll use a text, this text would be just "Back".
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=79)** So we need this TouchableOpacity component from [[React.js|react]]-native, and this TouchableOpacity component needs an on-Press property.
>
> **[1:29](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=89)** So what is going to happen when we press this TouchableOpacity component?
>
> **[1:34](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=94)** Let's think about that.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=95)** I'll use an empty function here just to render that and I have the Back in here.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=101)** I need to fix the styles a little bit, but I do see this Back link.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=105)** When I click on this Back link, what I want to do, is set the currentDealId to null 'cause when I'm on a deal view in here, the currentDealId is not null.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=117)** If I set the currentDealId to null, then act is going to re-render, and take me back to the full list.
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=124)** So I can use setCurrentDeal, the exact same function here, and just use null in the dealId.
>
> **[2:11](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=131)** But I like to have a more readable method.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=133)** So I'm going to copy setCurrentDeal.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=136)** Then I'm going to go with unsetCurrentDeal.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=140)** This is a function that doesn't take any dealId, and it will just do null here.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=146)** So this unsetCurrentDeal, is going to be needed by the DealDetail view.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=151)** So let's pass it there.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=153)** From the perspective of the DealDetail, we can call this onBack and we'll pass it here as this, the unsetCurrentDeal, as a function reference.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=164)** Let me format this, perfect.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=166)** So DealDetail has an InitialDealData and an onBack function.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=171)** So let's go to the DealDetail now, and we'll define the type for this onBack function, it is a PropTypes that function, and it's required.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=180)** And now, under the onPress for the TouchableOpacity for the back button, we can use, this.props.onBack, let's test that.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=192)** Click on here, click back, and that took me back to the main list.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=196)** Click on here, click back, that took me back to the main list.
>
> **[3:22](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=202)** So let me fix the style for this back link real quick.
>
> **[3:26](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=206)** So instead of having the border here, on the deal itself, I'll just have it on the detail view in here, and let's give the back button some style.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=217)** So style is, styles.backlink.
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=222)** And as you can see, I have hot reloading, so anything that I do here is going to be reloaded.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=227)** So, backlink, let's give it a marginBottom of five, take a look at that.
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=238)** And I'll also, I'll change the color into something blue.
>
> **[4:02](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=242)** So we'll go with 22f.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/implementing-a-back-link?u=76281980&t=246)** Perfect. This looks good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Code Identifiers:** onback (4), currentdealid (3), unsetcurrentdeal (3), setcurrentdeal (2), dealid (2)
> **UI Navigation:** click on (3), go to (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using TextInput to implement search](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=1)** - [Instructor] So let's now think about the search feature.
>
> **[0:02](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=2)** We'll start with the market.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=4)** Let's add a search text input in here above all the deals.
>
> **[0:08](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=8)** So that would be in the app component in here.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=12)** So if I am rendering a deal list, I'd like the system to be able to give me a search feature on that.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=18)** I don't need the search feature if I'm on a deal detaile view, I just need it when I'm on a deal list view.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=24)** So I'm going to put this inside view, and I'll add a text input.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=30)** Now we can add the text input right here directly and start working with that.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=36)** But this search bar is going to be a controlled component.
>
> **[0:39](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=39)** And in fact, we should debounce the search so that the search fires immediately when we type, but not on every character, and this way we don't have to have a submit search button.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=51)** So to isolate all this features, we'll put them in their own components.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=55)** I'm going to call this component search bar and go implement it.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=59)** So we'll add search bar under components here.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=62)** This is a search bar dot JS, and this is a [[React.js|React]] class component search bar.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=70)** And in here we'll do the text input.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=72)** In the app component, I need to import this search bar.
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=77)** So import search bar from dot slash search bar, perfect.
>
> **[1:24](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=84)** So in this search bar, we can have the text input from [[React Native]].
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=90)** So I'll go with that.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=92)** I need to import that from React Native.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=95)** So import text input, React Native.
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=99)** So in the text input, let's do a few things.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=103)** Let's first give it a style, so I'll call this styles dot input, and we'll import style sheet from React Native, and we'll create a styles object from that.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=117)** So styleSheet.create, and let's give some styles for the input text.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=122)** So let's go with height 40 and test all that.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=128)** Let me format, and let me refresh.
>
> **[2:12](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=132)** So we have the text input.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=135)** However, it seems like I lost the deals.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=138)** So let's figure out what is going on.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=142)** This looks like a styling problem.
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=145)** Let me try to fix it real quick.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=146)** This deal list has a padding top in here, and it has a flex one.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=153)** I'm going to kill that for now.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=155)** So I see the deal list in here, and the search bar is right here.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=160)** So let me actually put a placeholder text in here to see what's going on with the search bar.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=166)** So let's go with place holder.
>
> **[2:49](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=169)** Let's go with something like search all deals, format.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=174)** So now if you can see, I see the search bar right here, but I need to avoid the phone controls.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=180)** So let's do that, let's give this style.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=183)** I'll just go with styles.main in here.
>
> **[3:07](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=187)** And actually I will do the same for the deal detail so that we always have consistent margins from above.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=196)** So in here we'll have a main, and this main we'll only have margin top of 50, so let's make sure that works, perfect.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=209)** 50 sounds too much, so we'll go with 30, perfect.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=214)** Now when I click on a deal, the margin top now is too much, so we'll just get rid of this margin top in here, because now it's coming from the main app.
>
> **[3:45](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=225)** Very good.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=226)** So now I have a margin top in here, and I have this search all deals text button.
>
> **[3:52](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=232)** Very good.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=233)** Let's actually give this one too some margin horizontal here, let's go with 12, and this is looking decent.
>
> **[4:03](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=243)** So let's go ahead and capture the search term.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=246)** And we can do that by making this search bar a controlled component.
>
> **[4:10](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=250)** Basically we place something on the state.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=253)** Let's call that search term.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=255)** This search term begins as an empty string and we'll wire this text input with an unchange text event.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=265)** We'll call this handler this.handleChange.
>
> **[4:30](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=270)** And handle change is simple.
>
> **[4:33](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=273)** Basically it is a function that is going to receive the actual text that the user types.
>
> **[4:41](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=281)** So we'll call that search term, and it will set the state with that search term.
>
> **[4:48](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=288)** So it puts the search term right on the state.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=290)** So let's test all that, and we can do so with React Dev Tools.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=296)** So now I have a search bar component right here, and this one has a state.
>
> **[5:02](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=302)** And when I start typing, I see the information right on the state of the search bar component, very good.
>
> **[5:10](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=310)** So let's now think about the actual search operation.
>
> **[5:14](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=314)** We're going to need an [[AJAX]] call.
>
> **[5:15](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=315)** So let's get that out of the way.
>
> **[5:18](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=318)** So let's call this new function fetchDealsSearchResults.
>
> **[5:25](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=325)** And this function is going to depend on a search term.
>
> **[5:29](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=329)** And the API is simple, it is basically slash deals and we specify a search term just like that equal, and then we'll have the search term in here.
>
> **[5:43](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=343)** Everything else is the same.
>
> **[5:45](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=345)** So we'll go to slash API slash deals, give it a search term, and it will give us back some listings from the database that match that search term, very good.
>
> **[5:55](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=355)** So we can now fire this [[Fetch]] search results anywhere we want, so let's think about that.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=360)** The app component will have a list of the initial deals, and if we have initial deals, it will display those deals.
>
> **[6:07](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=367)** However, if we have search results, we want to display the search results rather than displaying the list of deals.
>
> **[6:16](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=376)** So we'll have to introduce a new array here for the search results of the deals.
>
> **[6:22](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=382)** And the reason we want to display a new array rather than replacing the deals that we depend on, is that if we undo the search, we want to go back to the same view, and we don't need to go back to the server to fetch more deals.
>
> **[6:36](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=396)** So instead of replacing the deals on the state, when we do this search, we'll just introduce a new array, call this array deals from search.
>
> **[6:45](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=405)** This will start as an empty array, and we'll create a function here to do the search basically.
>
> **[6:51](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=411)** So we'll call this function searchDeals.
>
> **[6:55](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=415)** This function is going to call the fetchDealsSearchResults, which is an AJAX operation.
>
> **[7:02](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=422)** So you want to do AJAX dot that will fetch that with a search term.
>
> **[7:08](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=428)** This means the search deals here is going to need to receive the search term as well.
>
> **[7:13](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=433)** And this is an async operation.
>
> **[7:15](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=435)** So we want to await on that, and make search deals itself an async function.
>
> **[7:22](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=442)** And the result of calling this function is going to be the deals from search.
>
> **[7:27](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=447)** So let's put that in a constant deals from search, just like that.
>
> **[7:32](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=452)** And once we have it, we want to just set the state to save the deals from search.
>
> **[7:38](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=458)** So when I call this search deals function, it will go and fetch from the database and then come back and set the results on the state of this component.
>
> **[7:50](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=470)** We also need another function to clear the search.
>
> **[7:54](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=474)** So let's think about that as well.
>
> **[7:56](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=476)** This is a very simple function that would set the state.
>
> **[8:01](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=481)** Basically it will set deals from search back to an empty array.
>
> **[8:06](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=486)** We can actually combine these two functions for simplicity.
>
> **[8:10](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=490)** So I'm going to go ahead and do that.
>
> **[8:12](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=492)** Let's make this deals from search into a variable like that, to start in an empty array, and then we'll do an if statement.
>
> **[8:22](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=502)** If there is a search term, then we want to change the deals from search, deals from search to be that, and then do set state.
>
> **[8:34](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=514)** This way to clear the search, I can just call search deals with an empty search term.
>
> **[8:41](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=521)** Very good.
>
> **[8:42](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=522)** So let's go ahead and pass this search deals into the component that it needs that, which is the search bar.
>
> **[8:48](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=528)** So I'll pass it here with the same name.
>
> **[8:50](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=530)** So search deals is this dot search deals.
>
> **[8:57](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=537)** And inside search bar, we need to define this new property that we just passed to it.
>
> **[9:01](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=541)** So static prop types equal, we've got search deals, which is a propTypes.function.isRequired, and I need prop types.
>
> **[9:19](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=559)** And now what I want to do is, after setting the state for that search term, I'd like to perform the search operation.
>
> **[9:28](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=568)** But remember, I don't want to perform the search operation on every single character I type, so we should debounce this action.
>
> **[9:35](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=575)** To do an operation right after a set state operation, we can use the second argument for set state, which is a callback that React is going to invoke after the set state operation is done.
>
> **[9:47](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=587)** So in here we can debounce the operation for searching.
>
> **[9:52](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=592)** Debounce is something that we can use from Lodash.
>
> **[9:56](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=596)** So I'll go ahead and import from Lodash, we'll import debounce from lodash.debounce.
>
> **[10:05](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=605)** This way, I'm only importing the debounce function and not the whole Lodash library.
>
> **[10:10](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=610)** And I'll create a new function here, call this function debouncedSearchDeals.
>
> **[10:17](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=617)** And this is basically a debounce call for this.props.searchDeals.
>
> **[10:24](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=624)** And we'll debounce it with 300 millisecond delay, just like that.
>
> **[10:29](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=629)** Now in here, I can just call the debounced search deal.
>
> **[10:32](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=632)** So this dot search deals and pass this dot state dot search term, so that the search happens in the main component.
>
> **[10:43](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=643)** So I think we can test all that.
>
> **[10:46](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=646)** However, we need [[npm]] install lodash dot debounce.
>
> **[10:54](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=654)** And I'll test with the React Dev Tools open.
>
> **[10:57](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=657)** I'm going to highlight the app component to see the deals right now.
>
> **[11:02](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=662)** The deals from search is an empty here.
>
> **[11:05](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=665)** And now let's search.
>
> **[11:07](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=667)** We'll search for yoga, and look at that.
>
> **[11:11](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=671)** I have deals from search has two listing only that matches the yoga search.
>
> **[11:17](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=677)** Very good.
>
> **[11:19](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=679)** Now, all I need to do is, if I have deals from search, display those instead of displaying the original deals array.
>
> **[11:28](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=688)** This is easy, in the app component, we'll create a new variable called this deals to display, and it will basically be this.state.deals from search.
>
> **[11:42](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=702)** If the length of this array is greater than zero, then we'll just place deals from search as the deals to display, otherwise we'll do just deals.
>
> **[11:56](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=716)** So let me format all that.
>
> **[11:58](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=718)** So if we have deals from search on the array, then the deals to display are those deals from search, otherwise we're just displaying the deals.
>
> **[12:06](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=726)** And any here, we'll replace this.state.deals with just deals to display.
>
> **[12:14](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=734)** And check it out, reloading work, now I have deals to display.
>
> **[12:18](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=738)** What happens if I delete this?
>
> **[12:20](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=740)** I see all the deals.
>
> **[12:23](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=743)** Let me test all that one more time.
>
> **[12:25](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=745)** Yoga, two deals, delete all the deals.
>
> **[12:29](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=749)** Website, there you go.
>
> **[12:33](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=753)** And this search is actually case insensitive because the API that we use supports that.
>
> **[12:39](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=759)** One thing that we should also test is the debounce feature.
>
> **[12:44](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=764)** So the expectation is that when I type a [[Microsoft Word|word]], only one network call should be made through the API.
>
> **[12:50](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=770)** And we can validate that using the inspector here, this inspector has a network tab.
>
> **[12:58](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=778)** So go ahead and click that.
>
> **[12:59](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=779)** React Dev Tools has to be closed for this network tab to work.
>
> **[13:04](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=784)** But once it's working, you'll start seeing the network calls.
>
> **[13:08](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=788)** These are [[WebSocket]] calls, don't worry about those.
>
> **[13:10](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=790)** However, when we type something here in the search, you should see a single hit through the API right here.
>
> **[13:19](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=799)** And when I deleted that search, known work calls were made over the wire, looking good.
>
> **[13:25](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=805)** So I believe we reached the MVP status for this app.
>
> **[13:30](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=810)** However, there are still a lot of improvements that we can do, especially with animation and gesture recognition.
>
> **[13:37](https://www.linkedin.com/learning/react-native-essential-training/using-textinput-to-implement-search?u=76281980&t=817)** So in the next chapter, we will explore those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[React Native]] (4), [[Fetch]] (4), [[AJAX]] (3), [[npm]] (1)
> **Env Vars:** api (5), ajax (3), npm (1), mvp (1)
> **Definitions:** is a  (7), is an  (3)
> **Code Identifiers:** fetchdealssearchresults (2), searchdeals (2), stylesheet (1), handlechange (1), proptypes (1)
> **CLI Commands:** make (3), npm (1)
> **Cross-References:** go back to (2), in the next (1)
> **Analogies:** just like (3)
> **UI Navigation:** click on (1), go to (1)


### 5. Animation and Gesture Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing for swiping](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=0)** - [Tutor] Over the next few videos we're going to implement a few improvements to our app using animation and gesture control.
>
> **[0:08](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=8)** The most important feature is to allow the user to browse through the multiple images that are available on some deals.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=16)** The bake sale API already exposes an array of images for us.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=21)** We have so far only used the first image.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=24)** So let's give users the ability to swipe left and right while they are on the deal detail view to see the different images attached to a deal.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=34)** We can use [[React Native]] built-in gestures and animations to do that.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=40)** To prepare for this swiping animation, I'm going to make the deal detail view full screen here, get rid of these borders.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=47)** So in here, let's get rid of the marginHorizontal and let's get rid of the borders everywhere.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=54)** See how that looks.
>
> **[0:57](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=57)** This is looking better, but let's give the backLink some marginLeft.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=63)** Maybe 10? Perfect.
>
> **[1:06](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=66)** So this way when I start swiping the images it is edge-to-edge, which I think is going to look better.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/preparing-for-swiping?u=76281980&t=73)** In the next video, we'll explore the animated API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1)
> **Code Identifiers:** marginhorizontal (1), backlink (1), marginleft (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [tutor] (1)

#### [The Animated and Easing APIs](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=0)** - Let's first understand how to do simple animations without any gestures.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=5)** Animations give some nice visual polish for your app.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=9)** It's not a required thing, but it does make the app feel truly Native.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=13)** Let's think about a simple thing that we can animate in our app.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=18)** There're many things that could use some animation.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=20)** For example, we do the transitions between screens without any animations so far.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=26)** Usually, Native apps use animated transitions.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=30)** That's one thing we can do here.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=32)** But I'll go with the simpler example and animate the initial Bakesale header [[Microsoft Word|word]] that we displayed while waiting on the initial deals to arrive from the server.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=41)** Let me actually comment out the [[AJAX]] call right here, refresh, so this is the initial view, so maybe the server gets loaded and that Ajax call to [[Fetch]] the initial fields takes a few seconds.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=53)** It would be cool to show some kind of animation on the screen here.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=56)** Let's just bounce the Bakesale word back and forth horizontally between the edges of the screen.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=62)** I think that would look cool.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=64)** The Animated library that comes with [[React Native]] has an excellent API to declaratively define powerful on-screen animations.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=72)** The word declaratively in the previous sentence is important. And it means basically that we don't have to worry about how the animation is carried out under the hood.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=81)** Which is not an easy thing, especially in React Native because the animation has to happen natively and not not through any state within the [[JavaScript]] thread.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=90)** Thankfully, the Animated API will take care of the how, and all we need to specify is the What.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=97)** What to animate and What motion effects and durations to use The important thing to remember here is that when we animate something with the Animated library, we will not be causing [[React.js|React]] Render method to be called repeatedly to perform that animation.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=113)** The animation will happen on the UI thread behind the React Native bridge.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=118)** Only defining the animation happens in the JavaScript thread.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=123)** There are a lot of things to learn about the Animated API.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=125)** We can spend the full course on just that, but let me go over the basics.
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=130)** First, we need a value to animate.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=133)** For example, in the Bouncing Animation that we are planning to do, the value to animate, would be the X position for the Bakesale word.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=142)** But the value to animate can be anything, you can animate a color, a size or an angle for example.
>
> **[2:29](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=149)** We also need the value to transition to, so we will be going from one value to another value over some period of time.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=157)** If for example, the X position starts with 0, we can animate the transition to say, 100, over a period of 1 second, and that would move the word 100 pixels on the screen during that one second.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=171)** We can also control the speed and acceleration of the animation. This is known as the Easing of the motion and React Native has built in functions to use for many Easing types.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=185)** To create an animated value, we can use Animated.value() for a single value, or Animated.valueXY(), if we want to animate 2 values together.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=196)** For our example, we just need to animate a single value.
>
> **[3:20](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=200)** There're 3 main animation types that we can use with Animated.
>
> **[3:24](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=204)** Timing, is the popular one, probably because it's very configurable with the Easing functions.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=210)** We can only animate these special components here.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=213)** So if we need to animate an image for example, we would need to replace the regular image component with this Animated.Image component.
>
> **[3:42](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=222)** The Animated API is one of those APIs that you can only understand by example.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=227)** There are a few very good resources out there about it.
>
> **[3:51](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=231)** On top of that list is an article by my friend, Nader here who is a very experienced React Native developer.
>
> **[3:57](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=237)** This is one of his many articles on Medium that explains React Native concepts pretty well.
>
> **[4:02](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=242)** Check the Animated examples he presented here to get some more confidence about the API.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=248)** Are you ready to do our own example and see how to use the Animated API to implement the Bouncing Effect for the app loading screen?
>
> **[4:16](https://www.linkedin.com/learning/react-native-essential-training/the-animated-and-easing-apis?u=76281980&t=256)** We are going to do that, in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (6), [[Microsoft Word|Word]] (5), [[AJAX]] (2), [[JavaScript]] (2), [[Fetch]] (1)
> **Env Vars:** api (6)
> **Analogies:** for example (5)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** valuexy (1)
> **Cross-References:** in the next (1)
> **Speakers:** - let (1)

#### [Creating an animation loop](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=1)** - [Instructor] To accomplish the bouncing animation effect that we're planning, we need to control the exposition of this bakesale [[Microsoft Word|word]].
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=9)** So right now we are rendering this word with a simple text inside of you.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=15)** You can actually animate both of these components.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=17)** Usually we animate the containing view.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=20)** So to animate this view, we need to change the regular component into animated.view, just like that.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=28)** And of course, I need to import animated from [[React Native]].
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=31)** So this is the very first step, animated from react native.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=36)** And you would change your component to an animated version of that.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=41)** Next, you need the value that is to be animated which is the exposition of this word.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=47)** The value to be animated has to be passed to the style of the animated component, but we need to define it first.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=55)** Since this is related to the component in here, we can define it on the instance of this component.
>
> **[1:01](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=61)** So let's call it title X position.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=64)** And since it's just a single value, we can use new Animated.Value, just like that, and we'll make it start from zero.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=74)** When working with positions, animated.value zero once given to an animated component would represent the position where the component is located currently.
>
> **[1:24](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=84)** And then any value that we transitioned this position to is going to be an offset from that zero initial value.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=91)** Remember that this position will not represent an absolute value, but rather a relative one.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=97)** So let's give this position to the animated component.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=101)** So in here, we already have the style containers.
>
> **[1:44](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=104)** I'll convert this into an array so that we can add more styles.
>
> **[1:49](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=109)** And the new style that I want to add is basically the exposition.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=113)** I will use it as the left property for this view.
>
> **[1:58](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=118)** So the left would be this.title X position, just like that.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=125)** So when we define the animation and the animation starts happening, the animated view component is going to control its left position.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=134)** And that can happen in any of the two directions.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=136)** Remember, this current left position is the zero mark which is where the left of the bakesale word is currently at.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=144)** So when we do the animation, if we reset the left to zero, that would center the bakesale word on the screen, because that is the left where it started.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=153)** That's the zero marker.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=156)** Very good.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=156)** So now we can animate.
>
> **[2:38](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=158)** So let's first test an animation of left from zero to say 100, and I would expect the word to move 100 pixels on the screen.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=166)** We can do that in component did Mount.
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=170)** We need the word to exist in the UI first.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=173)** I'm going to first use the spring animation type to show you how that works.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=177)** So basically we do animated.spring.
>
> **[3:02](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=182)** This method takes two arguments.
>
> **[3:04](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=184)** The first argument is what to animate.
>
> **[3:06](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=186)** So we want to animate this.title X position.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=189)** That's the value we're interested in animating.
>
> **[3:13](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=193)** And in the second argument, you give a configuration object.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=196)** There are plenty of things in the API that you can configure but the important property here is the to value.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=203)** Where do you want the position to be animated?
>
> **[3:26](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=206)** So let's animate it from zero to 100.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=210)** So this call defines the animation but it doesn't really start the animation.
>
> **[3:34](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=214)** To start the animation, you can chain a call for start, just like that.
>
> **[3:40](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=220)** So define the animation and start the animation.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=223)** So we can test this out, refresh and did you notice how the bakesale word springs to 100 of the screen just like that.
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=233)** To make for a balancing effect back and forth we can start a new animation after this one is done and basically animate the position to minus 100, for example.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=246)** However, the animation calls are all asynchronous, so we can't start the new animation right here after the first animation.
>
> **[4:13](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=253)** We'll have to do it through a callback.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=255)** The start method exposes this callback and this callback is going to be invoked once the animation is done, once the value reaches 100.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=265)** So we can basically do another call here to animated.spring and we also need the .start here as well.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=275)** And we'll animate the value to minus 100 and let's test that out.
>
> **[4:40](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=280)** Refresh.
>
> **[4:43](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=283)** Did you see that?
>
> **[4:44](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=284)** One more time.
>
> **[4:46](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=286)** Excellent.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=287)** So to accomplish our balancing operation, we can just put that in a loop.
>
> **[4:52](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=292)** We'll put this call here in its own function, call this function animate title.
>
> **[4:59](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=299)** So this is a function and this function will do the animated.spring call.
>
> **[5:06](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=306)** And now since we have a function, we can just make the function call itself.
>
> **[5:10](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=310)** So basically in the callback here, once the first animation is done we can call this dot animate title again and to flip the direction of the animation we can have the animate title except a direction here and this direction would be default to one.
>
> **[5:30](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=330)** So in our case, the first direction would be to the right.
>
> **[5:33](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=333)** And in here, we can flip this direction by saying minus one times the current direction that we have.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=340)** So this way, every time we flip the direction and we just use the direction here instead of minus one, we can do direction times 100.
>
> **[5:49](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=349)** So the first time we animate, it will animate to 100.
>
> **[5:52](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=352)** When that's done, it will animate to minus 100 and it will go into a loop of doing that.
>
> **[5:58](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=358)** So now on component did mount, we need to start the animation.
>
> **[6:02](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=362)** So this.animate title, and by default, it will start to the right Let's test.
>
> **[6:10](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=370)** Back and forth, we have animation.
>
> **[6:14](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=374)** So I hope this wasn't too hard.
>
> **[6:16](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=376)** It will get a little bit harder when we combine animation with gesture recognition.
>
> **[6:21](https://www.linkedin.com/learning/react-native-essential-training/creating-an-animation-loop?u=76281980&t=381)** In the next video we are going to talk about the screen dimensions and the different easing functions that we can use with timed animation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[React Native]] (2)
> **Analogies:** just like (5), for example (1)
> **CLI Commands:** make (3)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Considering the device dimensions](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=0)** - [Instructor] We accomplished the desired bouncing animation that we wanted using the spring animation type.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=7)** But I like it to be faster than that.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=9)** If you notice the spring animation takes some time to be done and the [[Microsoft Word|word]] sits on the edge for a while.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=15)** So if we need more control over that, we can use a different type of animation.
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=19)** We can use the timing animation.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=21)** Let's check what the default for the timing animation look like just without any configuration.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=26)** So now it's actually going too fast, but there is no weight on the edge, which is excellent.
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=31)** So we can control this a little bit further.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=33)** We can change the duration.
>
> **[0:35](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=35)** So instead of making it go really fast, let's make the duration one second.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=40)** So this means don't move too fast.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=41)** Take one full second to go from zero to 100.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=45)** So let's test that out.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=48)** So now, this is much better.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=49)** It takes one full second to go to the edge.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=53)** You see that?
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=54)** Now between zero and 100 [[React Native]] would use some kind of easing function to define how to transition from zero to 100.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=63)** For example, there is a linear transition.
>
> **[1:06](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=66)** There are some transitions where you can start fast, go slow and fast or start slow, go fast and slow.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=74)** These are the different easing functions that we have.
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=77)** So let me show you some of those.
>
> **[1:18](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=78)** We'll need to import easing from React Native, and we need to specify an easing here in the animated configuration.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=88)** Let me format that.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=90)** And then here we can specify easing as easing dot one of the functions.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=97)** For example, I think the default is just ease.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=100)** This is what we're using right now.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=102)** Let's check that out.
>
> **[1:47](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=107)** You can do something like bounce, for example.
>
> **[1:50](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=110)** So this would define a different motion.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=113)** So now, it is bouncing on the edge as you can see.
>
> **[1:56](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=116)** The simplest easing is linear.
>
> **[1:59](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=119)** So just go from zero to one in a linear fashion, without any movement up and down.
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=124)** And you can actually combine easings if you want to make for complicated motions.
>
> **[2:09](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=129)** I kind of like the default motion, 'cause as you can notice, it goes slow, fast, and then slow.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=135)** Which I think is appropriate for this particular animation.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=138)** We hard-coded this hundred pixels on the screen and it's working for us in this particular device.
>
> **[2:24](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=144)** But if we get a bigger device or a smaller device, that hundred might not be appropriate.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=151)** We can actually see this problem if we rotate the device.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=154)** We can go to [[Hardware]] here and change the orientation to landscape right.
>
> **[2:41](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=161)** And now you can see the problem.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=162)** The word is not really bouncing between the edges, but rather just 100 pixels on the screen.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=168)** So how do we fix this problem?
>
> **[2:50](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=170)** How do we make this animation appropriate for any screen size?
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=174)** We can use the dimensions library.
>
> **[2:57](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=177)** React Native has a dimensions library.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=180)** We can import that, dimensions, just like that.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=185)** And this dimensions library can be used to read the width of the screen.
>
> **[3:11](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=191)** This is how we do it.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=192)** You do dimensions.get window.width.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=198)** This will give me the width of the screen.
>
> **[3:20](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=200)** And of course you can read the height of the screen if you need to.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=203)** So every time we animate the title, we're going to read the width of the screen.
>
> **[3:28](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=208)** Let's store that in a constant.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=210)** Call this width, just like that.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=212)** And instead of 100, we can make this number relevant to the width.
>
> **[3:38](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=218)** For example, we can try the width value itself and see how that looks.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=224)** It's now going beyond the edges of the screen.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=227)** We actually need half the width.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=230)** So let's see how that looks.
>
> **[3:54](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=234)** So this is a little bit better but it is still going a little bit beyond the edge of the screen.
>
> **[4:00](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=240)** And this is because we're not accounting for the width of the word itself.
>
> **[4:05](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=245)** So let's try to subtract the value from the words to account for that.
>
> **[4:11](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=251)** Test that, better.
>
> **[4:14](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=254)** But still maybe 150, let's test that.
>
> **[4:20](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=260)** So now it is perfectly going from one edge to the other.
>
> **[4:23](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=263)** And now if we change the orientation even while this animation is happening, the two value is going to adjust itself to the appropriate edges of this particular screen.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=275)** So this could, will now work on any screen size.
>
> **[4:39](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=279)** So now we can put back the [[AJAX]] fetching and that would make this animation only happening while we're loading the initial deets.
>
> **[4:51](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=291)** We have a small problem in this code that we need to solve before moving on.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=296)** Basically, this is an infinite loop.
>
> **[4:59](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=299)** We did not stop this loop anywhere.
>
> **[5:02](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=302)** So we need an exit condition for this loop.
>
> **[5:05](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=305)** We can see the problem by maybe console logging something here and checking how this is going to be fired indefinitely.
>
> **[5:16](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=316)** So in the developer here, you'll notice that there is a constant log line that is going on and on and on and on.
>
> **[5:23](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=323)** So how do we solve this problem?
>
> **[5:25](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=325)** The animated view was actually unmounted but our code does not account for that because it is animating just a value.
>
> **[5:33](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=333)** However, this [[Stark (Accessibility Software)|stark]] callback here receives an object and this object has a property named finished.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=340)** So I'm going to destructure this finished property from this object.
>
> **[5:44](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=344)** And basically, if the animation was successful, the finished property is going to be true.
>
> **[5:49](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=349)** But if the animation was interrupted for any reason, this finished will be false.
>
> **[5:55](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=355)** So I'm mounting the animated component will cause the animation to be interrupted.
>
> **[6:00](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=360)** So all we need to do to stop the infinite loop is an if statement here that basically checks on the finished attribute.
>
> **[6:08](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=368)** If the previous animation was finished successfully, go ahead and start new animation.
>
> **[6:14](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=374)** But if the previous animation did not finish successfully, it will not start a new animation.
>
> **[6:20](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=380)** So let me go ahead and format everything.
>
> **[6:22](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=382)** And now we can test.
>
> **[6:26](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=386)** You will not see the console log going on and on because the animation was stopped.
>
> **[6:31](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=391)** So let me clear this console log line.
>
> **[6:34](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=394)** What we need to understand next to implement the swiping feature is how to work with gestures.
>
> **[6:41](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=401)** React Native has a built-in API for recognizing touch gestures.
>
> **[6:45](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=405)** It's called PanResponder.
>
> **[6:47](https://www.linkedin.com/learning/react-native-essential-training/considering-the-device-dimensions?u=76281980&t=407)** We'll explore that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[Microsoft Word|Word]] (3), [[Hardware]] (1), [[AJAX]] (1), [[Stark (Accessibility Software)|Stark]] (1)
> **Analogies:** for example (4), just like (2), kind of like (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (3), is an  (2)
> **Env Vars:** ajax (1), api (1)
> **UI Navigation:** go to (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [The PanResponder API](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=0)** - [Instructor] [[React Native]] has a built in gesture recognizing system called the PanResponder.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=7)** We can use it to detect when the screen is being touched and released, and we can read the accumulated distance between the first touch and the release.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=17)** So it's not just when the screen is touched, but also where the touch gesture is going and where it ended.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=23)** So we can easily implement features like drag and drop or swipe left and right with this API.
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=29)** We can also recognize multitouch features like pinch, [[Zoom]], or shrink.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=34)** Our example will be a simple one.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=36)** We want to recognize these swipe left and right gesture and do something when they are detected.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=43)** One thing to understand is that the PanResponder itself does not make any changes to the UI.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=49)** It is used to only detect fingers on screen movements.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=54)** This is why the PanResponder is usually used with the Animated API so that we can do actual changes to the UI in response to detected touch gestures.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=64)** In our example, if we detect a swipe gesture, we want to animate one image out of the screen and animate another image into the screen.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=74)** We define handlers for a PanResponder object.
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=77)** They are called panhandlers.
>
> **[1:19](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=79)** These are things like onResponderMove, onResponderRelease.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=83)** These handlers need to be passed to the UI element that need to respond to touch gestures, which is the deal image in our case.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=91)** The handlers expose two objects.
>
> **[1:33](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=93)** Event is the Native touch event, which can give us absolute locations on the screen of where the touching finger is.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=101)** This is often not very useful.
>
> **[1:44](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=104)** The more useful object is the gesture state, which exposes many properties like move X and Y, and more importantly, DX and Y.
>
> **[1:52](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=112)** The DXY properties hold the accumulated distance of the gesture since the touch started.
>
> **[1:59](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=119)** This is going to be useful in our example to detect this swipe gesture.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=123)** Let's take a quick look at the PanResponder API.
>
> **[2:07](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=127)** You can create a PanResponder object with the create method, which takes that configuration object that defines the methods.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=134)** I think these methods are unnecessarily verbose, but that's what we have to work with.
>
> **[2:19](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=139)** You can override any of these methods if you need to.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=142)** For example, the onPanResponderGrant method can be used to show a visual feedback that a touch gesture has started, so we can, for example, highlight the area that was touched.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=153)** OnPanResponderTerminate can be used to detect if a gesture was canceled.
>
> **[2:38](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=158)** However, for our example, we'll keep things simple.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=162)** We need the onStartShouldSetPanResponder to be a function that returns true.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=167)** This basically activates the responder.
>
> **[2:49](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=169)** We need the onPanResponderMove, which is the core detector of the swipe gesture.
>
> **[2:55](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=175)** When the touching fingers starts moving on the screen, the user basically is swiping in one direction.
>
> **[3:01](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=181)** This handler will give us the distance traveled in that direction.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=185)** So in our example, when this handler is called, we want to move the image that is being swiped with animation.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=192)** And finally, we need the onPanResponderRelease to decide if the swipe was far enough to actually animate the image out of the screen.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=201)** I usually go with 40% of the width of the device.
>
> **[3:24](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=204)** If the image is wiped 40% or more in one direction, we will need to continue the animation all the way when the swiping finger is released.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=213)** We'll use this handler to accomplish that.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=217)** The RN tester project has an example for the PanResponder API if you want to see it in action.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=224)** But we're going to do our own example next step by step.
>
> **[3:48](https://www.linkedin.com/learning/react-native-essential-training/the-panresponder-api?u=76281980&t=228)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1), [[Zoom]] (1)
> **Code Identifiers:** onrespondermove (1), onresponderrelease (1), onpanrespondergrant (1), onstartshouldsetpanresponder (1), onpanrespondermove (1)
> **Env Vars:** api (4), dxy (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is called (1)

#### [Preparing the PanHandlers](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=0)** - [Instructor] The first thing we need to do to implement the swiping of the deal images feature is to make the active image index part of the component state because we want to change the image index and have the image changes.
>
> **[0:14](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=14)** So let's do that first.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=16)** I'll name it image index.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=18)** And this starts from zero and in here, instead of hard coding the first element here we'll read the image from this.state.image index.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=30)** Let me format everything.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=32)** So this should not really change anything, except now we have the ability of changing the image index and that would change the image.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=40)** In fact, we could test that from the developer tool.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=44)** So I'll look for the detail view, go in here, change the image index to one and see the image changes.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=53)** The next thing we can do is to define the PanResponder.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=56)** So from [[React Native]] we'll import PanResponder.
>
> **[1:01](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=61)** We'll also import Animated 'cause we know we need to use Animated as well.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=65)** So we have PanResponder and Animated and we'll create a PanResponder object.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=71)** I'm going to name it ImagePanResponder.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=75)** This is a PanResponder.create call and it receives a configuration object.
>
> **[1:22](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=82)** So we place this ImagePanResponder on the component instance itself.
>
> **[1:26](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=86)** This is just a preparation step.
>
> **[1:28](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=88)** We still have to pass the handlers to the image itself but let's include these handlers that we are interested in.
>
> **[1:36](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=96)** The first one is the onStartShouldSetPanResponder.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=100)** So we'll include that in here.
>
> **[1:42](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=102)** This is a function and I just want to make it return true and make this PanResponder active.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=108)** We also need the onPanResponderMove.
>
> **[1:52](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=112)** The onPanResponderMove is a function that receives the event and the gesture state.
>
> **[1:59](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=119)** And for now let's just console log moving just like that.
>
> **[2:04](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=124)** We also need the onPanResponderRelease.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=128)** It's also a function that receives the event and the gesture state and let's console log released.
>
> **[2:16](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=136)** Very good.
>
> **[2:17](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=137)** So this PanResponder is now usable.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=140)** I'll go ahead and pass it to our image in here.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=146)** What we need to pass is this.imagePanResponder.panhandlers.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=153)** And this is an object that has all the panhandlers.
>
> **[2:36](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=156)** So we're going to spread this object into this image component.
>
> **[2:41](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=161)** So here's, what's going to happen.
>
> **[2:43](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=163)** I'm going to try and swipe this image.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=166)** Now we did not do any animation yet.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=168)** So nothing is going to change on the screen, but we will see the console log lines when I move my cursor on this image and when I release my cursor from that image.
>
> **[2:58](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=178)** So check it moving, moving, moving released.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=183)** And it will also work on the other direction, moving, moving, moving, released.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=189)** So while the user's finger is moving we get this onPanResponderMove.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=195)** And this actually gives us the DX in this particular case, that is super important.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=201)** So let's check that out.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=203)** Now, when I touch and move my finger to the left, I get the measurement in pixels, as you can see.
>
> **[3:31](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=211)** And it's in the negative when we go left.
>
> **[3:33](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=213)** It will be in the positive when we go right, just like that.
>
> **[3:38](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=218)** So we're ready to start animating this image as we detect this swipe left or right gesture.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/preparing-the-panhandlers?u=76281980&t=223)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1)
> **Code Identifiers:** onpanrespondermove (3), onstartshouldsetpanresponder (1), onpanresponderrelease (1), imagepanresponder (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (3)
> **Analogies:** just like (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Swiping left and right](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=0)** - [Instructor] While the user is swiping an image, the usual behavior of swiping is that the X position of the image is going to change in the same direction that we are swiping to.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=12)** To make that happen, we can use the animated library.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=16)** So I'll basically change the image component here to be an animated image, animated.image and we need to create an animated value.
>
> **[0:27](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=27)** So let's do that right here before the image responder, we'll call this value image X position just like the title X position.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=37)** So this is going to be a new animated value.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=40)** It's a single value.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=41)** We don't need an X and Y and it starts from zero.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=45)** Now that we have an animated value, we can use it as the left property on the animated image component.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=52)** So we already have a style for the image.
>
> **[0:55](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=55)** I'll change that into an array, and we'll add a new object here.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=59)** This object will have the left property to be this .image X position, just like that.
>
> **[1:07](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=67)** So we now have an animated value and it controls the left style property for an animated image.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=74)** So now all we need to do to make the image actually move is inside the on pan responder move, we need to set the value for this animated value.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=87)** So we can do something like this.image X position.set value, we can directly use the DX value that is coming from the move gesture.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=100)** So now, while the finger is moving on this green this image X position animated value is being set to the distance that's measured from the start of the touch.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=111)** So I think we can test that.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=114)** Now when I touch and move the image it's position is going to change and I can touch and move it back in here, just like that.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=123)** So now when we release the gesture on a state like that we should just continue animating the image off the screen and we can do that using the animated library as well.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=134)** So in here on pan responder release we're going to need some kind of condition.
>
> **[2:19](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=139)** This condition is going to decide whether to animate the image completely off the screen, or to reset the image back to its zero position in case the swipe wasn't long enough.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=151)** So this condition will definitely depend on the width of the screen.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=155)** And as you remember, we used the dimensions library to get to the width of the screen.
>
> **[2:41](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=161)** So I'll copy that.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=162)** We'll probably need the actual width of the screen.
>
> **[2:45](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=165)** So I'm not going to do minus 150 here.
>
> **[2:48](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=168)** And the condition is if the GS.DX, which is the distance, if that is less than, say, minus one times the width times 0.4.
>
> **[3:03](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=183)** So it is all in the negative when we swipe left and this is the first thing that we were going to do.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=188)** So if the DX is less than 40% of the width in the minus, then that means swipe left which means I have to complete the animation to swipe the image completely out of the screen.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=203)** And we can do that using the animated library as well.
>
> **[3:26](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=206)** So animated dot I'll go with timing here.
>
> **[3:30](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=210)** We are animating this .image.X position, and we're animating this to a value of minus one times the width of the screen.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=221)** And this has to be in the negative again, because we are doing swipe left.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=226)** Let's give this a duration of say 250 milliseconds.
>
> **[3:50](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=230)** We need to import dimensions from [[React Native]].
>
> **[3:55](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=235)** And I think we can test that.
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=238)** So let's go ahead and try, swipe, release.
>
> **[4:05](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=245)** That did not work because I forgot to start the animation.
>
> **[4:09](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=249)** So we need to start the animation, retesting, swipe left and it went off the screen completely.
>
> **[4:18](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=258)** Of course, I don't have an image now so we'll need to do something after the swipe gesture is complete.
>
> **[4:23](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=263)** But before we do that, let's implement the swipe right gesture.
>
> **[4:27](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=267)** The swipe right would be another simple if statement here that will be basically exactly the same as this one, but without the negative sign.
>
> **[4:36](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=276)** If the X is greater than positive width times 0.4 then we want to animate this to a value of width.
>
> **[4:43](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=283)** So let's do this in the same if statement with some math.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=287)** So let's go with math.absolute value for the DX.
>
> **[4:51](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=291)** If that is greater than the positive width then it's going to be either swipe left or right.
>
> **[4:59](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=299)** We need to decide if the swipe is left or right.
>
> **[5:01](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=301)** And we can use the sign of the X to do that.
>
> **[5:05](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=305)** So I'll put this in a constant named direction and that direction is the sign using math.sign for GS.DX.
>
> **[5:14](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=314)** So if this is minus one that would be a swipe left and plus one for swipe right.
>
> **[5:23](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=323)** This would allow me to do the timing in either direction using direction times width.
>
> **[5:29](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=329)** So for swiping left we want to animate the position all the way to the left.
>
> **[5:33](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=333)** And if we're swiping right, we want to animate it all the way to the right.
>
> **[5:37](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=337)** We can test that.
>
> **[5:40](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=340)** Swipe left still works.
>
> **[5:44](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=344)** And now swipe right is going to work as well.
>
> **[5:48](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=348)** Very good.
>
> **[5:49](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=349)** The swipe detection and animation is working now but once a single swipe is successful we need to update this component to show the next image.
>
> **[5:58](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=358)** And we need to animate the entrance of the next image from the opposite side of where we swiped the previous one.
>
> **[6:06](https://www.linkedin.com/learning/react-native-essential-training/swiping-left-and-right?u=76281980&t=366)** We'll figure that out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1)
> **Analogies:** just like (3)
> **CLI Commands:** make (2)
> **Versions:** 0.4 (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Handling swipe gestures](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=0)** - [Instructor] We are swiping left and right, but we now need to handle the swipe.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=4)** What is going to happen when a swipe is complete?
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=7)** And if you remember, we can do operations after an animation is complete using the callback argument for the start method.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=15)** So in here, this is the function we're going to handle the swipe.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=20)** So I'll go ahead and write a new function for handling swipe.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=23)** We'll call this function handleSwipe, and I'll just call it here.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=28)** And eventually the handleSwipe is going to be different if we're swiping left and right, but let's start with a simple handle swipe left.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=36)** We'll define handleSwipe.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=37)** This is a function, in this function, we want to do two things.
>
> **[0:43](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=43)** First, we want to update the state and change the image index that makes the view change its content, and then we want to animate the same view that is holding the image that we swiped completely to the left, we want to animate it from the right.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=58)** So let's start with setState, setState is simple.
>
> **[1:01](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=61)** We want to change the image index to be the previous state image index plus one, very simple.
>
> **[1:11](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=71)** This is if we're swiping left, if we're swiping right, we're going to decrement the image index.
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=77)** But let's first implement the swipe left case.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=81)** After this setState is complete, which we can do inside the callback here, after the setState is complete, we want to animate the next image.
>
> **[1:31](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=91)** So next image animation is going to happen here.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=95)** So at this point, the current animated image holds the next image, right?
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=101)** But it was completely swiped to the left.
>
> **[1:43](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=103)** It's left position here is minus the width of the screen.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=108)** So we want to reset it's position to the right side.
>
> **[1:53](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=113)** We want to reset the left position to the width of the screen so that it goes to the other side of the swipe and then animate it's entrance to the screen.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=122)** So two things, first, we want to do something like this dot image X position dot set value to the width of the screen.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=134)** I don't have the width of the screen here, so I'll go ahead and just put this width on the component instance so that we can access it in multiple functions.
>
> **[2:27](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=147)** So it is this dot width now, and in here I can set the value to this dot width, just like that.
>
> **[2:35](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=155)** Once I set the value to this dot width, I'll be ready to animate this image back to the screen from the other direction.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=164)** So we can use animated here and I'll go with spring action here.
>
> **[2:49](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=169)** So we are animating this image X position, and we want to animate it to a value of zero, which is the center where the image started.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=179)** So I think this will do.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=180)** We'll go ahead and start that and we can test.
>
> **[3:07](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=187)** So swipe one image, there you go.
>
> **[3:10](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=190)** The next image showed up from the other direction of the swipe.
>
> **[3:14](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=194)** Let's see that one more time.
>
> **[3:16](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=196)** There you go.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=198)** So now we want to make this handle swipe work on both directions.
>
> **[3:21](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=201)** Cause right now it is not going to work on the other direction.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=205)** In fact, if you get this gray, that means I incremented the image index out of bounds of the actual data that I have.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=212)** So one more time, if I swipe once I get the new image, I swipe again, I get the third image, and three images are all that I have in this deal.
>
> **[3:41](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=221)** So if I swipe again, I'm going to go to the fourth image which does not exist.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=226)** So we should actually guard this state with an if statement.
>
> **[3:49](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=229)** We can do an if statement here, and the if statement is going to return early, if I don't need to handle the swipe.
>
> **[3:58](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=238)** This if can be a simple array lookup.
>
> **[4:01](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=241)** So basically if this.state.deal.media, this is the array of images that we have.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=248)** If the image index here, plus one does not exist, if we're trying to swipe left and we want to increment the image index, and I don't have that data, that means I don't need to handle the swipe.
>
> **[4:22](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=262)** That means I need to return early.
>
> **[4:24](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=264)** So it's this.state.imageIndex, we need to read that from the state.
>
> **[4:29](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=269)** Not only do I need to return, I also need to reset the partial swipe.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=275)** We can actually use the exact same function here to do that.
>
> **[4:39](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=279)** So reset partial swipe, but this time it will be resetting from the same position.
>
> **[4:46](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=286)** So let's test all that.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=290)** Swipe once, good.
>
> **[4:51](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=291)** Swipe twice, good.
>
> **[4:53](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=293)** Now swipe, and you'll see how it got reset and the image index was not incremented.
>
> **[5:00](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=300)** Very good.
>
> **[5:01](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=301)** So now let's handle swipe right.
>
> **[5:04](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=304)** And swipe right is basically going to flip the increment here and here, and it will flip the side of the width.
>
> **[5:12](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=312)** When we go right, we want to animate the next image from left.
>
> **[5:17](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=317)** So let's make handleSwipe receive a variable.
>
> **[5:20](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=320)** I'm going to call it indexDirection, and I'll assume this to be either plus one or minus one.
>
> **[5:26](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=326)** And in here, I'll just add indexDirection instead of plus one, same thing here, add indexDirection, so this could be plus one or minus one, And in here, we want to multiply the width with the indexDirection.
>
> **[5:41](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=341)** So if it's minus one, I'm actually swiping right, and I want the next image to animate from the left.
>
> **[5:48](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=348)** So now this indexDirection should be specified in here.
>
> **[5:51](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=351)** It should be plus one for left swipe, and minus one for right swipe.
>
> **[5:58](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=358)** Because when we swipe left we increment, when we swipe right, we decrement.
>
> **[6:02](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=362)** So it's actually the inverse of this direction.
>
> **[6:06](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=366)** So we'll do that.
>
> **[6:06](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=366)** We'll do minus one times this direction here.
>
> **[6:11](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=371)** I think that should work, let's test.
>
> **[6:15](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=375)** So we can swipe left and we can swipe right.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=379)** Very good.
>
> **[6:20](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=380)** I think it's working.
>
> **[6:23](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=383)** But look at that, we have a case that was not handled.
>
> **[6:26](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=386)** So that case is if I swipe less than 40%, what's going to happen? I'm stuck like that.
>
> **[6:33](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=393)** So if I swipe less than 40%, I need to reset the image as well.
>
> **[6:38](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=398)** So we can do that here, basically with the same spring call.
>
> **[6:43](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=403)** And it is the else statement here.
>
> **[6:47](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=407)** If it's not greater than .4, just reset the image back to its zero position.
>
> **[6:53](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=413)** Let's test that.
>
> **[6:56](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=416)** Less than 40%, there you go.
>
> **[6:59](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=419)** Reset.
>
> **[7:01](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=421)** More than 40% swipe out, less than 40%, reset.
>
> **[7:06](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=426)** More than 40%, swipe.
>
> **[7:10](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=430)** Very good.
>
> **[7:11](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=431)** We successfully implemented swipe left and right on the image.
>
> **[7:15](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=435)** Now, how about I challenge you with another swipe?
>
> **[7:19](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=439)** How about implement swipe for the [[Representational State Transfer (REST)|rest]] of this detailed view?
>
> **[7:23](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=443)** So not the image.
>
> **[7:24](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=444)** If, for example, you swipe on a title, or the description of this deal, show that user the next deal that is in the list.
>
> **[7:33](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=453)** It's the exact same code, but instead of incrementing the image, you are picking the next deal in the array of deals.
>
> **[7:41](https://www.linkedin.com/learning/react-native-essential-training/handling-swipe-gestures?u=76281980&t=461)** Try to do that on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** indexdirection (5), handleswipe (4), setstate (4), imageindex (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for example (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Opening URLs](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=0)** - [Instructor] The last feature we should add to this app is probably the most important feature: a call to action.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=7)** A button to purchase a deal.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=9)** We can do that either through the App Store itself, or with a simple web check-out.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=15)** Payments made through the App Stores have some significant fees.
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=19)** And since this is a pay for good system, we'll just simply take the user to the web check-out screen.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=26)** The API for every deal actually has a URL that we can use.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=30)** This is the same deal page, but on the main website, and that page has a check-out button.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=36)** So all we need to do is just include a button that takes the user to this URL.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=42)** We can use the linking library that comes with [[React Native]] to do so.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=47)** This library can actually be used for both incoming and outgoing app links.
>
> **[0:51](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=51)** But we need it for just an outgoing link.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=54)** The syntax is simple.
>
> **[0:56](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=56)** We just need to call the open URL API method.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=60)** Let's do that.
>
> **[1:01](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=61)** I'll include the button to buy a deal right here under the description.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=65)** So we need the button component from React Native.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=70)** And in the render method of this component, right under the description, let's include the button.
>
> **[1:17](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=77)** So button, we'll go with title, is buy this deal.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=83)** And this button needs an on press event.
>
> **[1:26](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=86)** Let's create a new function here to buy the deal.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=90)** I'll call it open deal URL.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=95)** Open deal URL is a function, doesn't receive any arguments.
>
> **[1:40](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=100)** And it will simply call the Linking Library, which we need to import from React Native as well, so let's do that.
>
> **[1:49](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=109)** And what we need to do on linking is to just open URL, just like that.
>
> **[1:55](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=115)** And the URL that I am interested in opening is the URL attribute that we have on the deal that we have on this date.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=123)** So basically, this.state.deal.URL, just like that.
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=130)** And I think we can test all this.
>
> **[2:14](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=134)** We have a buy this deal button, and when we click on this button, the user will be taken to the main bake sale for good website, and they can check out this deal from here.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=146)** So I think we have added enough features for this app.
>
> **[2:29](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=149)** I think it's in a good shape to be deployed to the App Store.
>
> **[2:33](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=153)** So in the next chapter, we are going to do exactly that.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=157)** But before we do that, we should double-check on our [[Android]] application.
>
> **[2:41](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=161)** And see if any styles need any modification, and see if all the features are working for Android as well.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/opening-urls?u=76281980&t=167)** So in the next chapter, we'll check the Android version of this application, and then we'll go ahead and deploy this application on both the App Store and the Play Store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (3), [[Android]] (3)
> **Env Vars:** url (9), api (2)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 6. Deploying

[↑ Back to Table of Contents](#table-of-contents)

#### [Test first](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=1)** - [Instructor] Before we start the process of publishing our app to the App Store and Play Store, we need to test it as much as we can.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=9)** We've so far been testing the app only on an iPhone 6 Simulator.
>
> **[0:13](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=13)** That is not enough.
>
> **[0:15](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=15)** It's very important that we test the app on actual devices before publishing it.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=20)** Some problems will only appear on actual devices.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=23)** The [[React Native]] site has documentation on how to test with an actual device.
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=28)** I'd recommend that you follow this now and test your app on your iPhone if you have one.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=34)** But testing the app yourself is not enough either.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=37)** You should also find early testers among family and friends and get their feedback about the UI.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=44)** You can use Apple's test flight for that.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=47)** It allows you to beta test with many people by inviting them to your pre-published app.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=52)** This is a great tool.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=54)** I'll show you how it works, but first we need to test the app on [[Android]] and the same deal goes there.
>
> **[1:00](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=60)** If you have an Android device, connect it and do your tests there.
>
> **[1:05](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=65)** I keep a few old Android devices just to test things with, but let's just test our app on an Android emulator.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/test-first?u=76281980&t=72)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (4), [[React Native]] (1)
> **Code Identifiers:** iphone (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Testing on Android](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=0)** - [Instructor] To test on [[Android]], we need to have an emulator up and running.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=4)** So let's do that.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=7)** The Pixel Emulator here is the one that we used.
>
> **[0:10](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=10)** So let's start that.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=16)** And once the emulator is up and running, we can go ahead and do, [[React.js|react]]-native, run-android.
>
> **[0:26](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=26)** The application is loading.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=30)** And things are working.
>
> **[0:33](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=33)** Let's have the remote debugger open.
>
> **[0:35](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=35)** So Command + M, and debug JS remotely.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=42)** Very good, I don't see any problems.
>
> **[0:44](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=44)** Let's test going to a single deal.
>
> **[0:48](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=48)** How about the swipe feature.
>
> **[0:53](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=53)** Swiping seems to work, although it is a little bit slow here on the emulator.
>
> **[0:57](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=57)** This could be an emulator problem.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=59)** So I'll try and test this on an actual device.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=62)** However, there is an important problem that we did not see on a bigger device when we were testing with iOS is that, this whole view is not scrollable.
>
> **[1:12](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=72)** So I can't actually reach the button here on this smaller device.
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=76)** This is not an Android only problem, but it's more obvious here.
>
> **[1:20](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=80)** So this one is scrollable, and you can see the button here, but the other ones, since the description of the deal is bigger, we are not seeing the button.
>
> **[1:30](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=90)** So let's make this scrollable.
>
> **[1:32](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=92)** All we need to do in the detail detail component is, this top level view here, that hosts the deal detail component, has to be a scroll view instead of just a view.
>
> **[1:45](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=105)** So scroll view, and slash scroll view, which means I need scroll view from react-native as well.
>
> **[1:56](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=116)** Let's test that, hit the R key twice.
>
> **[2:03](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=123)** Now this is scrollable.
>
> **[2:07](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=127)** Very good.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=128)** Let's also give it some margin down below here so that, the button is not right on the edge.
>
> **[2:13](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=133)** So I'll go ahead and do that.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=135)** So styles.deal, which we do not have, so let's create deal, and I'll just give it a margin, bottom, of say, 20.
>
> **[2:27](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=147)** Let me test that real quick.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=151)** Very good.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=151)** So now we have a scrollable view, and we can buy this deal.
>
> **[2:37](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=157)** Let me go ahead and test that out.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=160)** So it is going to [http://bakesaleforgood.com](http://bakesaleforgood.com), on this deal, and, a user can buy it.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=166)** Let's test the search feature.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=171)** Looks like it's working.
>
> **[2:54](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=174)** However, I don't like that, the keyboard here stayed when the search was performed.
>
> **[3:00](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=180)** So when the search is performed, we should probably get rid of the keyboard.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=185)** So we can probably do that by just blurring out of the search.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=189)** So let's try that, in the search bar component, we have the text input here.
>
> **[3:15](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=195)** We'll go ahead and give it a ref attribute.
>
> **[3:18](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=198)** The ref attribute is a function, and this function is going to expose the input element here.
>
> **[3:25](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=205)** And I'll go ahead and put it on the, instance of this component.
>
> **[3:29](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=209)** So this.inputelement equal the input element exposed from this function.
>
> **[3:37](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=217)** So now we can access the text input instance with, this.inputelement.
>
> **[3:43](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=223)** So what I want to do now is, create a new function here.
>
> **[3:47](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=227)** I'll call this function, search deals.
>
> **[3:49](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=229)** So this is the local function that is going to, perform this.props.searchdeals.
>
> **[3:57](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=237)** And after that, it will, blur the text input.
>
> **[4:01](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=241)** So this is going to receive the search term, and pass it along in here.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=247)** And instead of debouncing this.prompts.searchdeals, we're going to debounce this.searchdeals.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=255)** And to blur the text input, all we need to do is call this.inputelement.
>
> **[4:21](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=261)** This is the actual UI input element, and we can do .blur on it.
>
> **[4:26](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=266)** So let's go ahead and test all that.
>
> **[4:28](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=268)** (indistinct) Now we can search.
>
> **[4:32](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=272)** When we search, the search is now blurred and I see, the listing.
>
> **[4:37](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=277)** Very good.
>
> **[4:38](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=278)** Here is another problem.
>
> **[4:40](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=280)** So let me show that.
>
> **[4:43](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=283)** So, I typed in a search, the search worked, it blurred out and the keyboard was dismissed.
>
> **[4:50](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=290)** And now I pressed into one of the deals from the search.
>
> **[4:54](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=294)** Perfect.
>
> **[4:55](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=295)** Everything is working.
>
> **[4:56](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=296)** When I go back, the search is still active, and the search term here was cleared out.
>
> **[5:02](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=302)** So we can either not clear out the search term, or reset the search when we click back.
>
> **[5:09](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=309)** I think we should persist the search term, 'cause it would be interesting to keep the state of the search here so that, I browse through multiple deals from the same search.
>
> **[5:21](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=321)** However, this requires that we put the search term on the state of the app component here.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=328)** So I'm going to call it activesearchterm here.
>
> **[5:31](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=331)** And the reason I named it active is that it is different from the search term that we have on the state of the search bar.
>
> **[5:38](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=338)** This one is the local search term.
>
> **[5:41](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=341)** And in fact, we need to pass the active search term, to the search bar component in here.
>
> **[5:48](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=348)** So in here we'll name it, initialsearchterm, and we'll pass that as this.state.activesearchterm.
>
> **[5:59](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=359)** Let me format.
>
> **[6:01](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=361)** So this way if there is an active search term, and I remount this search bar component, it will have the initial search term property.
>
> **[6:10](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=370)** So we'll go ahead and define that initial search term is, propTypes.string, and it is required.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=379)** I'm going to use it all the time.
>
> **[6:22](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=382)** So the search term here, doesn't start from an empty string, it starts from this.props.initialsearcterm.
>
> **[6:31](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=391)** Very good.
>
> **[6:32](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=392)** Now to finish this simple feature, when I actually perform the search.
>
> **[6:37](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=397)** So in here, when I perform the search and bring back deals from search, I should also, set the active search term, to be the search term that was passed to this method.
>
> **[6:50](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=410)** So not only I have deals from search, I also have an active search term, that is going to (indistinct) through navigation.
>
> **[6:57](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=417)** The other thing that we need to do here is to specify the value of the text input.
>
> **[7:01](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=421)** So the value of the text input, is going to be connected to this.state.searchterm, just like that, all the time, 'cause this is a controlled component.
>
> **[7:11](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=431)** So, let's test that out now, search for yoga, search is working, click on this list, click back.
>
> **[7:21](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=441)** The search is still there.
>
> **[7:23](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=443)** Now we can change the search to something else.
>
> **[7:28](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=448)** Click here, click back.
>
> **[7:30](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=450)** And if I don't have any search, click here, click back, all is good.
>
> **[7:38](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=458)** So as you can see, I had bugs in the app and I had no idea that they existed.
>
> **[7:43](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=463)** And the only way to find these bugs is to test every possible thing you can think about, and get some other perspective.
>
> **[7:51](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=471)** Usually the person who writes the code is biased, toward the happy cases.
>
> **[7:57](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=477)** You want to get someone else to test your code.
>
> **[8:00](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=480)** And it's much more likely that they are going to find some problems.
>
> **[8:05](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=485)** This is why in the next video, we're going to prepare a production release of our app, push it through an [[Apple Developer]] account, and use test flight to give it to others, to test it.
>
> **[8:18](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=498)** So while testing things out, after changing the main view in the deal detailed view, into a scroll view, I got into this state.
>
> **[8:27](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=507)** Now that we have a scrolling gesture, it seems that it's easy to conflict, the swiping gesture with the scrolling gesture.
>
> **[8:36](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=516)** If you just swipe horizontally it works, but if you swipe and scroll, it doesn't.
>
> **[8:43](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=523)** So there are a few ways to solve this, but the easiest is probably to not have the animated image within the scroll view.
>
> **[8:50](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=530)** So I'm going to change the scroll view, back to just view, and I'll make the detail view right here, into a scrollable view.
>
> **[9:02](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=542)** So this is a scroll view, view/viewinhere.
>
> **[9:08](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=548)** Let me test that out.
>
> **[9:10](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=550)** So now the image is swipeable, but it's not scrollable.
>
> **[9:13](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=553)** You cannot scroll up and down, you can just swipe through.
>
> **[9:17](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=557)** So you can't have the case that we had before, because this is not scrollable now.
>
> **[9:22](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=562)** This is still scrollable.
>
> **[9:25](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=565)** I think I even rather have the title, not within the scrollable area.
>
> **[9:30](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=570)** So I'm going to actually do that as well.
>
> **[9:32](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=572)** I'll have the title in here.
>
> **[9:34](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=574)** Let's see if that is going to affect any of the styling.
>
> **[9:38](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=578)** So now the title is not scrollable.
>
> **[9:40](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=580)** This area is scrollable, just like that.
>
> **[9:43](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=583)** And this wipe is working perfectly.
>
> **[9:47](https://www.linkedin.com/learning/react-native-essential-training/testing-on-android?u=76281980&t=587)** I definitely need to give this app to more people, to test it on real devices because I am pretty sure we have more problems that I am not aware of, because of my biased testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (3), [[React.js|React]] (2), [[Apple Developer]] (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** make (2), find (2)
> **Code Identifiers:** ios (1), proptypes (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Analogies:** just like (2)
> **URLs:** [http://bakesaleforgood.com](http://bakesaleforgood.com) (1)
> **Cross-References:** in the next (1)

#### [Changing app logo and splash screen](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=0)** - [Instructor] Before publishing an app there are two things that you'll probably want to do.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=5)** Give the app a good icon instead of this default one and do something about the splash screen which currently just shows the name of the app and a Powered by [[React Native]] message.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=18)** You can close the app to reload it with the splash screen.
>
> **[0:21](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=21)** I just double clicked on the home button.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=24)** And when I double click on the app, the splash screen will splash.
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=29)** So you'll first need to prepare images to use as icons and splash screen if you want to change that as well.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=36)** Those images should be big.
>
> **[0:38](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=38)** The icon should be a square of at least 1,024 pixels.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=42)** And this splash screen should be a square of at least 2,500 pixels.
>
> **[0:47](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=47)** The reason you need to start with these big sizes is that you need to provide different sizes of these assets for different screens.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=54)** So on a big iPad for example, the assets will need to be much bigger.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=58)** So the Bakesale project has those assets ready for us.
>
> **[1:02](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=62)** We can download them from [bakesaleforgood.com/images/logo.png](https://bakesaleforgood.com/images/logo.png).
>
> **[1:08](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=68)** Go ahead and save that somewhere.
>
> **[1:10](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=70)** I'll save it right here on the desktop, bakesale-logo.
>
> **[1:15](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=75)** There's also /splash.png.
>
> **[1:21](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=81)** We'll save that as well.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=83)** Bakesale splash.
>
> **[1:26](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=86)** Now the problem is you'll need to use these starting assets to generate many assets with different sizes for the different devices.
>
> **[1:34](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=94)** If you do that manually you are going to be super frustrated with this process.
>
> **[1:39](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=99)** Luckily you don't have to.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=101)** You can use online services to generate all the images needed and just add them to your [[Xcode]] project.
>
> **[1:47](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=107)** For example, you can use the MakeAppIcon service to do that.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=111)** But there is an even easier way.
>
> **[1:54](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=114)** You can locally generate all the needed icons and do the Xcode needed modifications in one step using this great library, generator-rn-toolbox.
>
> **[2:05](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=125)** So we'll go ahead and do that.
>
> **[2:06](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=126)** You can use this tool to generate many things related to your React Native project, but what we're interested in right now is the icons and splash screen generation.
>
> **[2:17](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=137)** So go ahead and follow the instructions there.
>
> **[2:20](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=140)** You'll need Node and you'll need to [[npm]] install yo and generator-rn-toolbox.
>
> **[2:27](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=147)** So that's our first step.
>
> **[2:29](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=149)** Make sure that you have a recent version of Node and npm install -g you and generator-rn-toolbox.
>
> **[2:38](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=158)** You also need ImageMagick.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=160)** ImageMagick is the tool that will be used to generate all these different sizes images.
>
> **[2:46](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=166)** So if you don't have it on Mac, it's as easy as brew install imagemagick.
>
> **[2:51](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=171)** So let's do that as well.
>
> **[2:56](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=176)** And once we have ImageMagick we can use the tool to generate those assets.
>
> **[3:02](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=182)** The commands that you need are documented here.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=185)** So this is the first one that we can use to generate the icon.
>
> **[3:09](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=189)** So I'm going to copy that part and use it with the icon that I just downloaded from [bakesaleforgood.com](https://bakesaleforgood.com), which I placed under the desktop.
>
> **[3:20](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=200)** So we'll go with bakesale-logo.png.
>
> **[3:24](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=204)** So this command is going to ask you a few questions.
>
> **[3:28](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=208)** The name of the project is Bakesale and you might get this conflict for contents.[[JSON]], just hit yes there to overwrite it.
>
> **[3:38](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=218)** And you can see how this application generated all the needed sizes for all the different devices.
>
> **[3:46](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=226)** So this is probably the easiest way to create the app icon set that is needed for Xcode and [[Android]].
>
> **[3:53](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=233)** So now we just react native run ios to test the new icon.
>
> **[4:01](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=241)** And check it out.
>
> **[4:02](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=242)** The app icon is now the Bakesale logo.
>
> **[4:06](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=246)** Very good.
>
> **[4:07](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=247)** Now for the splash screen.
>
> **[4:10](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=250)** If you just want to get rid of the Powered by React Native and keep the default splash screen you can do so by opening Xcode.
>
> **[4:19](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=259)** So just run open ios/bakesale.xcode.
>
> **[4:24](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=264)** This is the Xcode project.
>
> **[4:25](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=265)** If we open up that under the Bakesale folder here, there will be a Launchscreen.xib file.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=275)** If you click on that, you can see the default launch screen right here.
>
> **[4:40](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=280)** So you can actually just click on Powered by React Native and hit delete to delete it and rebuild your application.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=287)** And you would have this default splash screen without the Powered by React Native part.
>
> **[4:53](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=293)** But if you want to change the splash screen completely into something different, then you can use this same rn-toolbox tool to generate the splash screens.
>
> **[5:03](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=303)** So let's do that.
>
> **[5:04](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=304)** I'm going to copy this part --splash.
>
> **[5:08](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=308)** And in here, I'll use the splash screen that I downloaded under desktop as well.
>
> **[5:13](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=313)** So bakesale splash.png.
>
> **[5:17](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=317)** The name of the project is Bakesale.
>
> **[5:20](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=320)** And we can override that and that as well.
>
> **[5:24](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=324)** So three files actually were in conflict.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=328)** Just override them all with a yes.
>
> **[5:31](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=331)** And for the splash screen to take effect you actually need to uninstall the app.
>
> **[5:36](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=336)** So this is important.
>
> **[5:37](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=337)** Long press the app and uninstall it first and then run the react native run ios command to re-install the app with the new splash screen.
>
> **[5:50](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=350)** So the app installing, and I paused the video here on the splash screen so that you can see it.
>
> **[5:55](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=355)** We have a splash screen.
>
> **[5:57](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=357)** If you're using the latest Xcode, I'm currently using Xcode 9, you do need to check on the image assets.
>
> **[6:05](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=365)** There might be one missing icon.
>
> **[6:08](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=368)** If you go to Bakesale here, and go to this images folder and click on the Appicon, you should see all the app icons here filled out.
>
> **[6:19](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=379)** These were all generated by the rn-toolbox tool.
>
> **[6:24](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=384)** However, this last one was not generated.
>
> **[6:27](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=387)** And it's probably because this is a new requirement in Xcode 9.
>
> **[6:31](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=391)** So if you see this one not filled out like that, just drag the logo file that we downloaded into this box, just like that.
>
> **[6:41](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=401)** All the icons here need to be set before we can publish our app, which is what we're going to do in the next video.
>
> **[6:48](https://www.linkedin.com/learning/react-native-essential-training/changing-app-logo-and-splash-screen?u=76281980&t=408)** We're going to build this app, upload it to the app store and test it with a test flight first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (9), [[React Native]] (7), [[npm]] (2), [[JSON]] (1), [[Android]] (1)
> **Prerequisites:** install (4), you'll need (3)
> **CLI Commands:** node (2), npm (2), make (1), brew (1)
> **UI Navigation:** click on (4), go to (2)
> **Analogies:** for example (2), just like (1)
> **URLs:** [bakesaleforgood.com](https://bakesaleforgood.com) (2)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** contents.json (1)

#### [Using TestFlight with internal testers](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=0)** - [Narrator] So to put up an app on the test flight, you need an [[Apple Developer]] account.
>
> **[0:05](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=5)** And this does cost money.
>
> **[0:07](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=7)** Once you have the Developer account approved, you will see this screen where you can control the membership certificate, iTunes Connect and other stuff in here.
>
> **[0:17](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=17)** To put an app on testflight, we need to register a bundle identifier.
>
> **[0:23](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=23)** Now we can do this either through the web developer console here, or through [[Xcode]].
>
> **[0:28](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=28)** So I'm going to do it through Xcode.
>
> **[0:30](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=30)** I'll go ahead and open iOS/Bakesale.Xcodeproject.
>
> **[0:37](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=37)** And if you go to the main screen, you'll see the General tab here.
>
> **[0:41](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=41)** And what we're trying to register, is this identifier.
>
> **[0:45](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=45)** And it's by default generated like that, you don't have to use the exact same thing.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=49)** Usually, it's the domain in reverse.
>
> **[0:52](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=52)** So I'm going to actually do that, I'm going to go with comm.bakesaleforgood.bakesale.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=59)** So this is now my bundle identifier, and I can go to the console and register it.
>
> **[1:04](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=64)** But we can also register it here in the capabilities tab.
>
> **[1:08](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=68)** If you enable features here, Xcode is going to register the app ID immediately.
>
> **[1:13](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=73)** So let me enable the push notification feature.
>
> **[1:16](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=76)** You need to choose a team here, so we can go ahead and do that, it will ask you to log in with your Apple ID.
>
> **[1:23](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=83)** And once you do, you should see the default team here.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=87)** So I'll go ahead and select that, so just by enabling this push notification, now the app ID is registered.
>
> **[1:35](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=95)** And you can go to certificates, IDs and profiles to make sure the app ID was registered successfully.
>
> **[1:41](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=101)** So now that we have an app ID, we need to create the app on the iTunes Connect.
>
> **[1:48](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=108)** Go to iTunes Connect right here, and go to my apps, click on this plus sign, select new app, it's an iOS app, and the name is bakesale, languages English, and here is the bundle ID, the one that I just registered through Xcode.
>
> **[2:07](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=127)** And give the app also some kind of unique identifier here.
>
> **[2:10](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=130)** So I'll go with 00042, create.
>
> **[2:15](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=135)** So it looks like the name bakesale is already used, so we'll pick another one, and you'll need to pick a different unique name as well.
>
> **[2:22](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=142)** So I'm going to go with BakesaleForGood.
>
> **[2:26](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=146)** And you'll get to this screen which has app store information, features, test flight and activity.
>
> **[2:32](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=152)** And what we need is test flight.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=154)** So if you go to test flight, it will give you an empty screen because we don't have any builds yet.
>
> **[2:40](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=160)** So the next step, is to create a build our app and submit it to the App Store.
>
> **[2:45](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=165)** And we can do both through Xcode.
>
> **[2:47](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=167)** So going back to Xcode, every time you want to do a build, you want to increment the version here.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=173)** Either increment, the major version minor version number, or the build number.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=179)** Now this is our first built, so we don't need to increment.
>
> **[3:02](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=182)** We do need to change this target into generic iOS device.
>
> **[3:08](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=188)** And after doing so, we go to product and pick archive.
>
> **[3:12](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=192)** And the archive option means build release that we can upload to the App Store.
>
> **[3:19](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=199)** This step is probably going to take some time.
>
> **[3:22](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=202)** If you get this screen, just choose always allow, and you'll end up on this screen that lists all the archives that you have on the system.
>
> **[3:31](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=211)** So what you need to do next is to upload to the App Store.
>
> **[3:35](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=215)** Now this is going to ask you a few questions, just stick with the defaults.
>
> **[3:39](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=219)** So click next, automatically manage signing next.
>
> **[3:44](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=224)** And you should end up with a screen like this.
>
> **[3:48](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=228)** Click Upload, and if everything works, you'll get the upload successful screen.
>
> **[3:55](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=235)** If you go back to the iTunes Connect console and refresh, click on iOS, you'll see the bill that we just uploaded and it will be in the processing stage.
>
> **[4:05](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=245)** So this is going to take a few minutes, just give it some time.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=248)** And you should get an email when it's done.
>
> **[4:11](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=251)** Once you get that email that the app has completed processing, you might see a screen like this.
>
> **[4:17](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=257)** I have a build, but it's missing compliance.
>
> **[4:20](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=260)** This is related to encryption.
>
> **[4:22](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=262)** So just go ahead and click on this and click on provide expert compliance information and just pick No, the app does not use any encryption.
>
> **[4:31](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=271)** And start internal testing.
>
> **[4:35](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=275)** Once you see this ready to test, you are ready to send this application for internal users.
>
> **[4:41](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=281)** And the cool thing is, you don't have to go through the app review process to test it with internal users.
>
> **[4:47](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=287)** If you want to test it with external users, you have to submit the app for review.
>
> **[4:52](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=292)** So to add internal testers, you want to click here, add iTunes Connect users.
>
> **[4:58](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=298)** And in here you should see the list of your internal testers.
>
> **[5:01](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=301)** I don't have any, so let's go ahead and add a few.
>
> **[5:04](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=304)** So click on this plus and provide the tester information, click Next, and there you go.
>
> **[5:10](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=310)** Kyle is now in the system.
>
> **[5:11](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=311)** And he has been sent a confirmation email as part of this testing team.
>
> **[5:16](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=316)** And after Kyle accept the invitation, we can go to add testers, we can select the testers that we want on this project.
>
> **[5:24](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=324)** We'll go ahead and select myself as well, and click Add.
>
> **[5:28](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=328)** And this will send an invitation for Kyle and myself to test this app using the test flight app on our iPhones.
>
> **[5:36](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=336)** Once you're done testing with the app, and you're ready to publish the app, you want to submit it to the App Store.
>
> **[5:42](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=342)** Go to the App Store tab in here, make sure all the information that is required here is filled out.
>
> **[5:47](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=347)** Go to the prepare for submission.
>
> **[5:51](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=351)** And then here you need to do a few things, you need to add some actual screenshots from the app in here.
>
> **[5:56](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=356)** You need to fill some of this information and select the build before you submit the app, so you can select the build that we just did.
>
> **[6:05](https://www.linkedin.com/learning/react-native-essential-training/using-testflight-with-internal-testers?u=76281980&t=365)** And once everything is ready here, you can submit for review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (6), [[Apple Developer]] (1)
> **UI Navigation:** go to (10), click on (5), select the (3)
> **Code Identifiers:** itunes (5), ios (4), iphones (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Generating signed APK for Android](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=0)** - [Instructor] To build and release for [[Android]], we need to generate a signing key, and we can use key tool to do that.
>
> **[0:08](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=8)** The [[React Native]] site has a guide article about that.
>
> **[0:12](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=12)** Before we go through this article, let me explain some of the terms you're going to see here.
>
> **[0:16](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=16)** So an APK is basically the Android binary format.
>
> **[0:20](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=20)** This is comparable to IOS's IPA or [[Windows]]' exe files.
>
> **[0:25](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=25)** We're going to use the key tool to generate a key store file.
>
> **[0:29](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=29)** This key store file is like your certificate.
>
> **[0:32](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=32)** This file is really important.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=34)** It identifies that you or anyone you share this file with is authorized to publish a new version of your app.
>
> **[0:42](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=42)** And if you lose your file, you will not be able to publish any new versions of your app.
>
> **[0:46](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=46)** So make sure that you keep this file secure and backed up.
>
> **[0:50](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=50)** We're going to have to work with some [[Gradle]] variables here, and Gradle is basically the build tool that Android uses.
>
> **[0:58](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=58)** So you'll have to edit some files to basically add the certificate to the build.
>
> **[1:03](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=63)** So let's go ahead and go through these steps one by one.
>
> **[1:07](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=67)** So the first thing, I'm going to copy this key tool command, paste it here, and I'll change a few things.
>
> **[1:14](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=74)** I'm going to call this bake sale key, and they'll give it an alias of bake sale.
>
> **[1:22](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=82)** So bakesale-key.keystore.
>
> **[1:25](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=85)** That would be the name of the generated file.
>
> **[1:27](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=87)** And this command is basically saying, generate this keystore file with this alias and make it valid for 10,000 days.
>
> **[1:37](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=97)** the command is going to prompt for a password, and this password is super important because again, without it, you cannot publish any new versions to your app.
>
> **[1:47](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=107)** So answer the other questions here.
>
> **[1:51](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=111)** Once you're done, you should see the bakesale-key.keystore file in this directory.
>
> **[1:57](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=117)** Now this file does not belong to your search control.
>
> **[2:00](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=120)** So make sure you don't commit that.
>
> **[2:02](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=122)** Next you want to edit this file, and if it doesn't exist, just create it.
>
> **[2:08](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=128)** So I'll atom this file and copy these properties in here into the file and use the names that you used for the file.
>
> **[2:18](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=138)** So we used bakesale-key and just bake sale.
>
> **[2:23](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=143)** And you want to also put the password in here.
>
> **[2:25](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=145)** There is a way to store these passwords in your key chain instead of having them in plain text here.
>
> **[2:31](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=151)** The guide has a link to do that.
>
> **[2:34](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=154)** The next step, you want to go under Android under app and edit the build.gradle file.
>
> **[2:42](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=162)** This is a big file.
>
> **[2:44](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=164)** So what you want to add is you want to add this signing config section.
>
> **[2:49](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=169)** So add it here under the default config.
>
> **[2:53](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=173)** And also you want to add this line under the build types release section.
>
> **[2:59](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=179)** So look for build types, and you'll see a release section in here.
>
> **[3:05](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=185)** So add the signing config, signingconfig.release line under here.
>
> **[3:10](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=190)** Once you're done with these steps, you want to run this command in your app directory, but before you run that command, move the keystore file to under Android app so that it can find it.
>
> **[3:23](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=203)** Now we can run this command, basically CD into Android and run the gradle assemble release command.
>
> **[3:32](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=212)** So you should see a build successful message.
>
> **[3:36](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=216)** And now we have under Android app build outputs/apk, if you list the file under that folder, you'll see the app-release.apk which is the file that you need to use to submit this app to the [[Google]] play store, to submit that apk to the Google play store.
>
> **[3:56](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=236)** You want to go to Google Play Console, log in with your developer account, click on create application, and we'll give it a title, Bake Sale.
>
> **[4:08](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=248)** And you'll need to fill the information.
>
> **[4:10](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=250)** You need to fill up the description, and you need to upload screenshots and logo.
>
> **[4:15](https://www.linkedin.com/learning/react-native-essential-training/generating-signed-apk-for-android?u=76281980&t=255)** And once you're done doing that, you'll have a screen to upload the signed release apk file that we just generated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (7), [[Gradle]] (4), [[Google]] (3), [[React Native]] (1), [[Windows]] (1)
> **CLI Commands:** make (3), find (1), cd (1)
> **Env Vars:** apk (1), ios (1), ipa (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **File Paths:** build.gradle (1)
> **Tools:** atom (1)
> **Prerequisites:** you'll need (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=0)** - [Instructor] Thank you for taking this course, and I hope that you enjoyed it.
>
> **[0:04](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=4)** I know it might have been a little bit challenging in parts, but trust me, it gets easier.
>
> **[0:09](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=9)** You've made a great investment [[Learning [[React Native]]]], because its popularity is unmatched and there is a big demand for React Native developers.
>
> **[0:18](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=18)** So what's next?
>
> **[0:19](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=19)** Focus on building as many apps as you can, get yourself in trouble.
>
> **[0:24](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=24)** Get used to see and appreciate the big red screen because the more problems you face, the better is your knowledge.
>
> **[0:31](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=31)** This course did not cover all the React Native APIs.
>
> **[0:34](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=34)** There is a lot more to explore.
>
> **[0:36](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=36)** Get comfortable reading the documentation and using the examples.
>
> **[0:40](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=40)** And finally, working with React Native is no doubt a lot more pleasant than having to deal with [[Swift (Programming Language)|Swift]] and [[Java]], but do not dismiss the idea of learning Swift and Java.
>
> **[0:49](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=49)** To become a better React Native developer, you need to be comfortable going native when needed.
>
> **[0:54](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=54)** I encourage you to learn the basics of native iOS and [[Android]] development next.
>
> **[0:59](https://www.linkedin.com/learning/react-native-essential-training/next-steps?u=76281980&t=59)** That's what I'm doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (5), [[Swift (Programming Language)|Swift]] (2), [[Java]] (2), [[Android]] (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** ios (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- React Native

## Path Context

### In [[Become a React Native Developer]]
**1 of 5** | [[From React to React Native]] →

## Appears In

- [[Become a React Native Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning React Native]] — React Native
- [[React Native Ecosystem and Workflow]] — React Native
- [[Create a CRM Mobile Application with React Native]] — React Native
- [[From React to React Native]] — React Native

---

[↑ Back to top](#)