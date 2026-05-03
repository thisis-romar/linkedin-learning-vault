---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-native-ecosystem-and-workflow-14359050
url: "https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050"
duration_minutes: 37
duration: 37m
level: Intermediate
updated: 5/1/2024
learners: 8405
skills:
  - React Native
  - Cross-platform Development
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGEEn--XFsCTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635785778554?e=2147483647&amp;v=beta&amp;t=fus2y0O4KAA_AtBGz9Tb1uPfGWcoizv_ujBLpQ4WMR8"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Become a React Native Developer]]'
prev_courses:
  - '[[Create a CRM Mobile Application with React Native]]'
next_courses:
  - '[[Learning React Native]]'
path_nav: '[{"path":"Become a React Native Developer","position":4,"total":5,"prev":"Create a CRM Mobile Application with React Native","next":"Learning React Native"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/react-native
  - skill/cross-platform-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/React%20Native%20Ecosystem%20and%20Workflow.md)

![React Native Ecosystem and Workflow](https://media.licdn.com/dms/image/v2/C560DAQGEEn--XFsCTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635785778554?e=2147483647&amp;v=beta&amp;t=fus2y0O4KAA_AtBGz9Tb1uPfGWcoizv_ujBLpQ4WMR8)

# React Native Ecosystem and Workflow

> React Native makes it easy to develop applications and deploy them natively to multiple mobile platforms. That said, building a complete app means looking beyond React Native to the different options that can help you customize your workflow. In this course, Emmanuel Henri takes you on a tour of some of the most commonly used React Native features. He highlights several different types of React Na

> [LinkedIn Learning](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050) | 37m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Explore React Native's ecosystem](#explore-react-natives-ecosystem)
  - [What you should know](#what-you-should-know)
- [**1. The React Native UI Libraries**](#1-the-react-native-ui-libraries) (5 videos)
  - [Overview of Facebook's own React starter](#overview-of-facebooks-own-react-starter)
  - [Exploring icons for React Native](#exploring-icons-for-react-native)
  - [Get a great foundation with NativeBase](#get-a-great-foundation-with-nativebase)
  - [Forms in React Native](#forms-in-react-native)
  - [React Native Elements](#react-native-elements)
- [**2. Development Resources**](#2-development-resources) (2 videos)
  - [Full-stack frameworks](#full-stack-frameworks)
  - [IDEs for React Native](#ides-for-react-native)
- [**3. Backend Options for a React Native Project**](#3-backend-options-for-a-react-native-project) (2 videos)
  - [Firebase: A best-of-class cloud backend](#firebase-a-best-of-class-cloud-backend)
  - [Other backend options](#other-backend-options)
- [**4. Testing Your App**](#4-testing-your-app) (1 videos)
  - [Jest: A React testing library](#jest-a-react-testing-library)
- [**5. Deploying to the Stores**](#5-deploying-to-the-stores) (1 videos)
  - [Apple and Android stores](#apple-and-android-stores)
- [**Conclusion**](#conclusion) (2 videos)
  - [Expo and React navigation libraries](#expo-and-react-navigation-libraries)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore React Native's ecosystem](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/explore-react-native-s-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/explore-react-native-s-ecosystem?u=76281980&t=0)** - [Emmanuel] If you spend any time trying to start a [[React Native]] project, or read on the subject recently, you've realized there are several options to get your project off the ground. In this course, we'll do an exploration of the React Native ecosystem, primarily looking at the options available to you as you get started in your mobile project with React Native. We'll first go through some of the UI libraries available to you. Then, we'll move through the Starter development kits. Next, take a look at your backend options. And finally, I'll give you an overview of the testing and deployment options. So if you're ready to take a tour of some of the most commonly used resources, fire up your browser and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (3)
> **Speakers:** - [emmanuel] (1)

#### [What you should know](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/what-you-should-know?u=76281980&t=0)** - [Emmanuel] For this course, there aren't any specific requirements, as we are taking a tour of the libraries and frameworks available to you as you start a [[React Native]] project. However, building a React Native project has some requirements and prior knowledge of the process is definitely helpful to understand how the assets are used, including the languages, tools, and libraries. For example, if you haven't worked with [[React.js|React]] before, I strongly recommend that you take a basic fundamental course on the subject in our library. Please keep in mind that this course isn't a step-by-step guide to building a React Native mobile app, but it is really about exploring the options related to building a foundation for your next project. This course is ideally taken before starting a project, and can be used as a guide. In any case, this course introduces the React Native ecosystem and you should be fine following along without any prior knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[React.js|React]] (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [emmanuel] (1)


### 1. The React Native UI Libraries

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of Facebook's own React starter](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/overview-of-facebook-s-own-react-starter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/overview-of-facebook-s-own-react-starter?u=76281980&t=0)** - [Emmanuel] [[Facebook]] created [[React Native]] to allow fast mobile app development. Facebook's own website for React Native is the best place to start your mobile project, and is a great resource for docs, code examples, and setup instructions. So let's take a look at what you have when you get to the website. So go to [reactnative.dev](https://reactnative.dev). And the first place I would go to is Get Started, so click on, Get Started. And this is where you're going to have instructions on how to start using React Native in your own projects. So what components are available to you, and how to set it up. So if you want to take a look at how you would set it up for your own system, you can click on the link right here and then scroll down. And there's really two ways to start with React Native. In one of my previous courses, I actually explore it with the React Native [[CLI]] Quickstart, but there's also a simpler way with Expo CLI Quickstart when you want to leverage a pre-build framework with React Native. So you would click here, and then follow the instructions to install everything that you need to get started with your first React Native application. And if you follow the instructions for the React Native CLI Quickstart, make sure to follow what system OS that you have first, and what target OS that you want to develop on. So if you want to develop first as an iOS application, you really need to be on a macOS anyways because you're going to have to have access to [[Xcode]],
>
> **[1:34](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/overview-of-facebook-s-own-react-starter?u=76281980&t=94)** and then follow the instructions once again. Once you have it installed inside of your system, I would literally go through the introduction and follow step-by-step, how you would go ahead and create your first application. Also, what you can do is take a look at the components. So these are the pre-build components that React Native has inside of its library. So you would have a couple of things like an ActivityIndicator, Button, FlatList, and so on and so forth. So these are all things that you can leverage right away without having to install any other libraries. So if you want to take a look at the ScrollView, you click on ScrollView, and then you can have code examples for what a ScrollView does, how to actually code it and what it looks like here. So basically, what you want to do as you start with React Native, this is where you actually get started with it. You install it, you set it up inside of your system, and then you can start building quickly, some examples through the examples, and the components and the APIs that you have on the React Native website before you actually look at the other resources that we'll explore inside of this course. So what I'd recommend is that you spend a little bit of time on this specific website to understand what and how, and actually the code that makes an application for React Native.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (12), [[CLI]] (3), [[Facebook]] (2), [[Xcode]] (1)
> **UI Navigation:** click on (3), go to (2), scroll down (1)
> **Prerequisites:** install (3), setup (1)
> **Env Vars:** cli (3)
> **Code Identifiers:** ios (1), macos (1)
> **CLI Commands:** make (1)
> **URLs:** [reactnative.dev](https://reactnative.dev) (1)
> **Definitions:** is a  (1)

#### [Exploring icons for React Native](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/exploring-icons-for-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/exploring-icons-for-react-native?u=76281980&t=0)** - [Emmanuel] Most mobile projects will contain icons of some sort. In this video, we'll explore one of the best libraries to get your project started with more than 3,000 icons, ready to use in your mobile project. So fire up your browser and let's get started. So what you need to do is go to this web address here, [github.com/oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). And as you scroll down, you'll see basically the information, how to install it, what is available and what are the font libraries that you have access to. And they're quite extensive. So this is all the icon that you have access to. So you have basically FontAwesome, Fontisto, Foundation, Ionicons, MaterialIcons, and so on, so forth. So there's quite a bit that you can use in here. And then it tells you how to install it, and how to leverage these icons inside of your project. Also, if you want to import your own SVG icons, you can do that with Fontello. So you could basically upload it here inside of Fontello, and then leverage that inside of your [[React Native]] project with React Native Vector Icons. And the instructions to do that are basically down here. So if you want to find the instructions, do a control + F, or command + F on Mac, and do Fontello. And it's going to give you the instructions on how to use and leverage these icons
>
> **[1:33](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/exploring-icons-for-react-native?u=76281980&t=93)** inside of your project. So there's a way to add these icons without installing the full library, and follow the instructions after the installation. And it's going to show you how to do that. So let me just scroll all the way back up here, and you can do this by doing the manually option here inside of iOS or [[Android]]. So follow these instructions to add them without having the full library inside of your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2), [[GitHub]] (1), [[React.js|React]] (1), [[Android]] (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** ios (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** svg (1)
> **Tools:** github (1)

#### [Get a great foundation with NativeBase](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/get-a-great-foundation-with-nativebase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/get-a-great-foundation-with-nativebase?u=76281980&t=0)** - [Instructor] When you get started on a [[React Native]] project, building out all the components required for your application may be a daunting task, and time consuming. NativeBase saves you a lot of this initial setup, and like Bootstrap and Foundation for Web, provides a solid library of components, ready to use across iOS and [[Android]]. So let's take a look at what this library provides. So go to [nativebase.io](https://nativebase.io), and once you get to this website, if you want to take a look at some examples here, you have some example of the actual code base here. But the best way to get started is to go into the docs or click on get started. And once you get to that, the installation is based on if you're using Expo or just using the [[CLI]] that I've mentioned earlier. So either way, you're going to have the instructions. So let's say, for example, we're using Expo, then you click there and then it's going to tell you what command that you need to do with MPM. Once you have it installed, you can go back to the main page here and take a look at some of the elements that you have included. So the theming, the components, and so on and so forth, so the layout as well. So if you want to do any specific layout, you have examples of these. You have examples of these layouts. So let's say, for example, you wanted to do flex, or a container. You can take a look at the code for importing them from NativeBase and then how to leverage it inside of your project. The really cool thing about all this is that if you want to
>
> **[1:34](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/get-a-great-foundation-with-nativebase?u=76281980&t=94)** test anything, even before you actually use a library, you can go into playground here and test it out directly inside of Expo here. So you can add the code and add, inside of the package.[[JSON]], the library in question, and then start using the components based on the library that you're leveraging and see the results right there, even before you actually create a new application inside of your own system. Even if creating a new application inside of your system is fairly easy and you can test it out directly inside of your own IDE, well, you have this playground that you can leverage for any tests down the road. And then look at the actual components here. So you can take a look at the form components, the data display and so on and so forth, then click on any of them to have an example of the code to leverage those. So what would you need to import from NativeBase, and then how to leverage that input inside of your application? So it's a good library to get started to build your application even further from the components that are already available from React Native directly. So again, if you're looking for something, or a library to get started quickly with [[React.js|React]] Naive, always leverage things like NativeBase or even Vector Icons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2), [[Android]] (1), [[CLI]] (1), [[JSON]] (1), [[React.js|React]] (1)
> **Env Vars:** cli (1), mpm (1), ide (1)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** for example (2)
> **File Paths:** package.json (1)
> **Code Identifiers:** ios (1)
> **URLs:** [nativebase.io](https://nativebase.io) (1)
> **Documentation:** the docs (1)

#### [Forms in React Native](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/forms-in-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/forms-in-react-native?u=76281980&t=0)** - [Instructor] [[Forms]] have become a crucial part of our apps. Because forms have so many pieces involved, including form submission, proper validation, et cetera, starting with a strong form library will help you eliminate a lot of the grunt work involved with coding them. And again, if you want to leverage the previous libraries that we have actually mentioned already, feel free to do so. And again, some of these libraries come and go as the years pass and as this course will be a little bit long in the tooth. So what I would recommend, if the library that I'm actually presenting to you is no longer available, do the search, for example, for [[React Native]] forms and you'll find the latest and the greatest. In the meantime, this is a good one, [formik.org](https://formik.org). One you get to this website, this is a form library for [[React.js|React]], not just for React Native. You can actually leverage it in React as well. But it has components specific to React Native. So let's take a look at the docs. So if you look into the docs and you scroll down up until you see React Native, you can click there and you're going to get some information on how to leverage Formik for React Native specifically. So all the components you can leverage, what are the validation tools and so on, so forth. So take a look at the information for the library first, even before you look into the React Native stuff, because form submissions and validations and stuff like that works across all these different libraries, so React and React Native.
>
> **[1:33](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/forms-in-react-native?u=76281980&t=93)** And then what you could do is leverage the specific components for React Native inside of your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (8), [[Forms]] (3), [[React.js|React]] (3)
> **Documentation:** the docs (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **URLs:** [formik.org](https://formik.org) (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [React Native Elements](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/react-native-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/react-native-elements?u=76281980&t=0)** - [Instructor] With the resources already covered in previous videos, you should be covered with all your UI needs, but there will be occasions where there is a specific item missing, or you'd like to see a different option for your UI elements. [[React Native]] elements is a solid option that offers everything you need and a big community supporting it. So go to this link, [reactnativeelements.com](https://reactnativeelements.com). And if you want to make sure that this particular library is still relevant, all you have to do is click on the [[GitHub]] link, and if it's well-maintained so 29 days, it's a good sign, 18 days and so on, so forth, that means they maintain this one fairly quickly and it's still relevant. So when you're ready to get started with this particular library, what you could do is scroll to the documentation, or even go to the example right here and do the MPM install inside of your project. And then take a look at the examples inside of the documentation. So if we click there, you're going to see all the components that are available. So avatar, badge, so on, so forth. If you want to leverage any of these components right here, all you have to do, like we've mentioned before, click on that specific component, take a look at the examples. Is this something that you'd like to use and then scroll down to the actual example or code example here. So this specific standard avatar, which is this one, this is the code that you would need to use to actually do it.
>
> **[1:32](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/react-native-elements?u=76281980&t=92)** So for example, avatar rounded sources and the image of that avatar here. So you would see the image here. So if you're doing anything inside of a project where you repeat the same information, then the URI would be something dynamic based on your code. This library, like any other, is well-documented. You have everything that you need in here. And if you want to leverage any of these components, all you have to do is copy the code, drop it inside of your system. Make sure you have the library installed inside of your application and off you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1), [[GitHub]] (1)
> **UI Navigation:** go to (2), click on (2), scroll down (1)
> **CLI Commands:** make (2)
> **Env Vars:** mpm (1), uri (1)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), make sure you have (1)
> **URLs:** [reactnativeelements.com](https://reactnativeelements.com) (1)


### 2. Development Resources

[↑ Back to Table of Contents](#table-of-contents)

#### [Full-stack frameworks](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/full-stack-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/full-stack-frameworks?u=76281980&t=0)** - [Instructor] Now it's time to introduce some full-stack frameworks that offer many other tools that you'll need to get started. Some of these libraries include login code, UI components, push notifications, tools to publish your app and so much more. Because the [[React Native]] community and base code of the React Native framework is constantly evolving, the full-stack frameworks often evolve too, and one that was the star of the show yesterday might be obsolete today. So what I'd recommend is to always do a search on [[Google]] first, like I've done here. So for example, here I've done a search for React Native boilerplate, and then I took a look at what are the most recent frameworks available to you or you could do something like React Native framework, and do the same. So what I do is a Google search first, then check that the [[GitHub]] repo for that library is well maintained or has been updated recently. And then leverage it if it meets those requirements. So for example, one of the libraries that meets those requirements is Ignite. So Ignite has been maintained well over the last year or so and it's something that is obviously a good library to get started with React Native. So again, what you do is make sure that it's well maintained. If it is, then you can actually go ahead and use it. Do a quick start and so on, so forth. Again, the base app with Expo inside of Reactive Native
>
> **[1:37](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/full-stack-frameworks?u=76281980&t=97)** is a good starting point. So if you take a look at the install that we've looked at earlier, and look at the Expo [[CLI]] Quickstart, that's the fastest way to get started with an application, and then leverage the main components from Reactive Native, and you'll be sure that you're using something that is well maintained and as recent as possible. So again, this is my own process when I start a new application. I want to make sure that I have something that has been maintained and has been maintained versus the latest code from React Native as well. That is a library that actually evolves a lot more than [[React.js|React]]. So I would make sure that I have the latest and greatest code by taking a look at the repos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (6), [[Google]] (2), [[GitHub]] (1), [[CLI]] (1), [[React.js|React]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Exercise Files:** boilerplate (1), github repo (1)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** cli (1)
> **Tools:** github (1)

#### [IDEs for React Native](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/ides-for-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/ides-for-react-native?u=76281980&t=0)** - [Instructor] There used to be several specialized IDE for [[React Native]], such as Deco IDE or Nuclide. But these came out of flavor very fast. And also the big players are becoming so well-rounded that with your regular IDE of choice, you will be well covered. If you're not sure what to use, let's explore the options available. So the first one that I always recommend and the one that I'm using personally, and that's why I recommend it, is VS Code, so Visual Studio Code. It is one, I believe, more solid IDE because it's constantly being develop and enhance with new tools and extensions. And the community is so strong around it that there's extensions built every day for that particular IDE. So if you're looking for anything that are related to React Native, there's going to be tons of extensions that you can add to your install of Visual Studio Code. And I'll give you an example. So I'm just going to open, very quickly, VS Code and go into the extensions and type react native. And you're going to see that there's a lot of extensions that you can use for that purpose. So to be honest, if there's any doubt as to what you should use, this is the one, specifically with React Native. If you want to build specific applications for iOS or iPhones then you would use something like [[Xcode]]. So let me just close that for a second. And Xcode is the main tool directly from Apple
>
> **[1:36](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/ides-for-react-native?u=76281980&t=96)** to build applications for iOS or any applications that are related to Mac. So for example, if you want to build something for an iMac, or if you want to build something for an Apple TV, this is the tool to use. If you want to build something that will be also for [[Android]], then you can't do that with Xcode 'cause Xcode is very specific to Mac and iOS and all the Mac-driven applications. Now, if you want to build with React Native and have applications for Android and also for iOS, then yeah, VS Code is one of the place that I would go to. The second one is WebStorm. WebStorm is similar to VS Code, but is a paid IDE, but has a lot more tools that are being updated by the people which are building WebStorm. So if you want to have support, if you want to have the latest and the greatest tools that are well supported, well tested, WebStorm is something that I would use for React Native development. And along the same line of VS Code is Atom. So if you ever use Atom is very similar to Visual Studio Code and has packages that you can install inside of that IDE, and it's also well supported. And the people that have built that IDE are working for [[GitHub]]. So, you'll have something that is well built and maintained over the years. But again, if I had to choose between Atom and VS Code, I would select VS Code.
>
> **[3:11](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/ides-for-react-native?u=76281980&t=191)** And last but not least, like I mentioned, Xcode for [[iOS Development]], and if you are building applications solely for Android, then go with Android Studio. So this is [[Mobile Development]] directly into Android using the Android Studio and environment, same way that you would use Xcode to build iOS stuff. So again, it depends on what you want to do. If you want to have all your application and on Android, then go directly to Android Studio. If you want to have something that's purely iOS driven, then go with Xcode. If you want to do something that covers both with React Native, then I would go for VS Code, WebStorm or Atom.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (8), [[React Native]] (7), [[Xcode]] (7), [[GitHub]] (1), [[iOS Development]] (1)
> **Tools:** vs code (8), atom (4), visual studio (3), github (1)
> **Code Identifiers:** ios (7), iphones (1), imac (1)
> **Env Vars:** ide (8)
> **Analogies:** similar to (2), such as (1), for example (1)
> **Prerequisites:** install (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 3. Backend Options for a React Native Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase: A best-of-class cloud backend](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/firebase-a-best-of-class-cloud-backend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/firebase-a-best-of-class-cloud-backend?u=76281980&t=0)** - [Instructor] In many cases, especially when first building a mobile application, you, as a developer, don't want to focus efforts into building and maintaining a backend for your app, or you may be a developer with a lack of backend experience. Fortunately, there are several options available to you, and these cases, with only a few lines of code, you can integrate a backend into your project. [[Amazon Web Services (AWS)|Amazon Web Services]] and Heroku are a couple of popular options. One other backend package that keeps improving its mobile options is [[Google]]'s [[Firebase]]. Let's explore some of these options. So go to firebase.[google.com](https://google.com), and when you get to the website you'll see that there's a whole bunch of [[Microsoft Products|products]]. So there are a database, there are a backend, where you can simply have a backend to drop your data into, and, for example, Firestore is a good one. So if we look into the products, and then click on Build, and then scroll down, you're going to see Firestore. And this is a great database that you can integrate with any of your [[Mobile Development]]. So, for example, if you want to do something with iOS you can click on View docs, and then scroll into these sections and take a look at what you can do. And, again, these are all searchable. So if you want to have specific [[React Native]] stuff, you can search for React Native and then click on the links related to the integration with React Native.
>
> **[1:36](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/firebase-a-best-of-class-cloud-backend?u=76281980&t=96)** So, for example, if you are on [[Angular]] you can take a look at the docs here, and for React Native this is where you would find the information. But, again, when you start building mobile applications you may actually lean towards going further with iOS or [[Android]], and that's where, when you start integrating a database or backend like Firebase, this is where you're going to look into specific documents related to the environment that you're going to develop in. So there's a whole lot of information here, and I've leveraged this a couple of times and I could tell you this is fairly easy to use. You can just enter a few lines of code, and boom, you have a backend, or you have something that you can leverage for APIs. So one of the things that I've used it quite a bit, outside of mobile development, is for web projects as well. So if you go to Overview, you're going to see that all of this can be actually used for web integration as well. And you have a whole bunch of tools here, pretty much like Amazon Web Services, but I feel that the integration of these tools with Firebase is a lot easier than Amazon Web Services. So, anyways, this is a great tool to integrate backend and [[Databases]] with your mobile project, and you don't have to create all that code. All those servers they are going to supply the backend by leveraging services like Firebase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (5), [[React Native]] (4), [[Amazon Web Services (AWS)|Amazon web services]] (3), [[Google]] (2), [[Microsoft Products|Products]] (2)
> **UI Navigation:** click on (3), go to (2), scroll down (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (3)
> **Code Identifiers:** ios (2)
> **CLI Commands:** find (1)
> **URLs:** [google.com](https://google.com) (1)
> **Documentation:** the docs (1)

#### [Other backend options](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/other-backend-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/other-backend-options?u=76281980&t=0)** - [Lecturer] In the last video we've explored [[Firebase]], but there are a lot of other options that you can use and a few that you can actually build yourself, if you want to do so. So, please keep in mind, this is simply an overview of some of the options and in no way a tutorial on how to build or use some of the backend options mentioned. As I go through the frameworks and libraries. And if you plan on building a backend, I'll show you where to get more information. Let's get started. So, the first and foremost, especially if you're a web developer, or if you want to build a backend, for example, [[React Native]], node js is the place to go. So, node js with Express is basically the backend that you would build. So, you would start with node development and then go to [[Express.js]] and build a backend with those two. And there are a few courses in our library about how to build a backend with Express and node. Now, if you want to have a database, so if you want to store your data inside of a backend and then connect with APIs, then [[MongoDB]] is a great place to start as well, because this is the common standard for [[JavaScript]] developers to build the database, along with node and Express. So, these are the places where you would start. So for example, if you want to build something with MongoDB, what I would do is go inside of the documentation and go into the resources and then go into the start with guides, install MongoDB,
>
> **[1:36](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/other-backend-options?u=76281980&t=96)** and then get started with MongoDB. Same thing with Express. If you want to look into the documentation, there's our getting started. So, how to create your own hello world or your own [[Routing]], and your APIs with Express. It'll give you some guides as to how to build that with the getting started section right here, and basically everything is built on top of node js. So, the Express guides and the MongoDB guides are going to dictate how you're going to build your backend. And then node js is building block behind all this, to actually build your backend. And now, again, we're going into cloud [[Microsoft Products|products]]. If you don't feel like building all these things yourself, there's also AWS, which has all a lot of stuff. So, if you want to go into AI, if you want to go into machine learning, do [[Blockchain]] stuff, there's a lot of products that AWS or [[Amazon Web Services (AWS)|Amazon Web Services]] has pre-built for you. So, your backend is AWS. And then your front end is your mobile application or your react native application. And everything else is served from these [[Cloud Services]]. It's not cheap, most of these things are going to cost you a lot of money over time, but if your applications actually justifies it, then definitely leverage those products because it's going to save you a lot of time in development. So, they have [[Databases]] as well.
>
> **[3:12](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/other-backend-options?u=76281980&t=192)** If you want to go into database products. And one that I've used quite a bit, which is a node [[SQL]] database like MongoDB is DynamoDB, and you can leverage this. And sometimes what they do, they give you a free tier for an amount of time, so sometimes for a year, you can leverage some of these services for free and therefore allow you to build your application, build your infrastructure behind, and also build your user base. So, allow you to grow a little bit before they start charging you for any of these services. So, what I would do is explore a lot of these options when you need to have a backend, when you need to have a database and more often than not, you need that from the get go. So, explore these options either cloud-base or build your own. If you want to build your own, like I said, there are a lot of courses inside of our library that will allow you to build your own with, for example, MongoDB. So, take a look at this and good luck with building your backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Microsoft Products|Products]] (4), [[React Native]] (2), [[Firebase]] (1), [[Express.js]] (1)
> **CLI Commands:** node (8), aws (3)
> **Prerequisites:** getting started (2), you need to have (2), install (1)
> **Env Vars:** aws (3), sql (1)
> **Analogies:** for example (3)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **File Paths:** express.js (1)


### 4. Testing Your App

[↑ Back to Table of Contents](#table-of-contents)

#### [Jest: A React testing library](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/jest-a-react-testing-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/jest-a-react-testing-library?u=76281980&t=0)** - [Instructor] As you build your app, it's important to test your code throughout the process to make sure it's doing what you intend. If you are new to testing, I suggest you start with Jest. Jest is a testing library built by [[Facebook]] and therefore, great to work alongside your [[React Native]] project. Application testing can get complex quickly. So if you're new to it, it's better to start with a simple library, then expand on the different types of testing you want to do. For example, Jest is a good example of [[Unit Testing]], where you can test small blocks or units of code. So go to [jestjs.io](https://jestjs.io), and then you can scroll down and take a look at the examples. Like I mentioned, this allows you to do unit testing and also get coverage and also do mocking for your components inside of [[React.js|React]], because it's built by a Facebook, then they built a really great tool to start mocking your own components. So if you want to take a look at the documentation and videos, it'll give you a good idea how to use it, but it's fairly simple. If you take a look at the docs, it's really easy to install and then start doing some mock testing with the examples here. So you can use matchers as well and start matching and expect something to be. So, for example, in this case here, you expect two plus two to equal to four, and therefore, you can pass that inside of a test. And if your code is replicating or resulting the same thing
>
> **[1:37](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/jest-a-react-testing-library?u=76281980&t=97)** as what you expect here, then you have a successful test. This is what I would use for most of my React project and React Native projects is Jest, because it's built by the same people. So therefore, has a lot of coverage and allows you to do a lot more stuff around React. If you are a [[JavaScript]] developer, you're also probably familiar with Mocha and Jasmine, which are also simple other testing tools that you can leverage and take a look at their documentation to do so. Same thing with Jasmine. You have a lot of examples, how to do the simple testing, and it's fairly similar from one library to the other. So you describe a test suite and then you do your matchers, your expects and so on and so forth. In between these different libraries, there's going to be some nuances based on the way they actually do their testing, but in the end, it's going to be very similar in the way it's testing. So, take a look at these testing libraries and I recommend you add one as soon as possible. And in most React projects, there already is some testing involved and more often than not, it's Jest, that's already included with React or React Native, but if you want to use any other libraries, you have Mocha and Jasmine, you can leverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[React Native]] (3), [[Facebook]] (2), [[Unit Testing]] (2), [[JavaScript]] (1)
> **Documentation:** the documentation (1), the docs (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **URLs:** [jestjs.io](https://jestjs.io) (1)
> **Prerequisites:** install (1)


### 5. Deploying to the Stores

[↑ Back to Table of Contents](#table-of-contents)

#### [Apple and Android stores](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/apple-and-android-stores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/apple-and-android-stores?u=76281980&t=0)** - [Instructor] Deploying your application isn't an easy task. In this video, we'll explore the resources available to help you in your app submission. But first, let's take a quick look at what you would need prior to publishing your application to both Apple and [[Google]]. The first thing, make sure that your Apple and Google developer accounts are in order, which means that all your tax [[Forms]] are filled, everything that you need to be able to deploy is completed because there's several steps depending on if you're using Apple or Google. The second step, and the obvious one, is code is flawless. So if you have any bugs, if you have any performance issues, or if you have conversion issues, what's going to happen is once you send your application for approval, they may come back with some notes, well, you have some performance issues and so on so forth. So make sure you have done all the testing prior to sending the application. Make sure that you have all the icons, the screenshots, and the descriptions of your app ready because that's what's needed when you send them to the store. So you're going to need the screenshots for the application. You're going to need the descriptions and the icons for putting on the stores. Also, make sure you decided which market you will reach. Because your application can be sold everywhere, it also can be sold only into specific countries. So for example, if you want to reach to only English spoken countries,
>
> **[1:34](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/apple-and-android-stores?u=76281980&t=94)** then make sure that you target these markets, so US, Australia, Britain, and so on so forth. If you are targeting specific countries because the application is aimed for those specific countries, well, decide which markets ahead of time. And obviously, you want to make sure that you tested your application on a physical device. And the reason why we're doing this and I'm recommending doing this is because while you're developing your application, you're going to leverage a lot of the simulators for [[Android]] and for iOS, but the problem with that is it doesn't replace a physical device in the end. So you want to make sure that you have the testing done on a physical device just to see the little issues that you may not see in a simulator. So once you have all of these covered, you're ready to submit to store, then what you need to do is go to the specific store deployment references. So for Apple, just do a quick Google search and you'll find deployment reference. And once you're here, take a look at the documentation for the latest and greatest information on that subject. If you click on table of content and then click on [[Deployment Planning]] and provisioning, you're going to get a lot of information related to Apple and specific to the models also that you want to deploy to. So for example, if you're deploying to iPads, there's certain things that you want to cross-check
>
> **[3:09](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/apple-and-android-stores?u=76281980&t=189)** before you deploy to iPad versus deploying for an iOS device like an iPhone. So take a look at the documentation from the Apple side and the same thing for Android. So Android, there is a section publish your app inside of the documentation. And again, just go to Google and search for deployment Android and you're going to get directly to this page where it gives you all the details of what you need to do before deploying. And again, some of the things that we already discussed, such as code, such as making sure that you have all the information of your application is going to be covered again here, but specific to Android, what their requirements are. So take a look at the documentation on both sides to make sure that you have all the information before you deploy and give you the best chance of not having your application returned to you with errors or things that were missing when you deployed and submitted your application for release.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[Android]] (5), [[Forms]] (1), [[Deployment Planning]] (1)
> **CLI Commands:** make (8), find (1)
> **Code Identifiers:** ios (2), ipads (1), ipad (1), iphone (1)
> **Documentation:** the documentation (4)
> **UI Navigation:** go to (2), click on (2)
> **Analogies:** for example (2), such as (2)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** make sure you have (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Expo and React navigation libraries](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/expo-and-react-navigation-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/expo-and-react-navigation-libraries?u=76281980&t=0)** - [Instructor] Let's talk about two crucial libraries that have become a part of the [[React Native]] landscape: Expo and [[React.js|React]] Navigation. Let's see how they can accelerate your app development. Expo is an open source platform for making universal native apps with React. It's like a Swiss army knife for React Native developers. With Expo, you get access to a range of APIs that extend the capabilities of React Native, and you can run your app on iOS, [[Android]], and the web using the same [[JavaScript]] code base. Why integrate Expo into your workflow? It simplifies your development process. You don't need to worry about native code compilation because Expo handles it for you. This means you can focus on writing your React components and leave the complex native build process to Expo. Plus, it has its own development client, which allows for easy testing on real devices. And when it comes to app navigation, React Navigation provides a way to transition between different screens and manage navigation history. It's fully customizable and works out of the box for both Android and iOS apps. React Navigation follows the same [[Design Patterns]] as React, so it feels like a natural extension of your React Native project. By using Expo and React Navigation together, you streamline the entire development and testing process from coding to navigation. This means faster iterations, quicker deployments, and a more unified developer experience.
>
> **[1:35](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/expo-and-react-navigation-libraries?u=76281980&t=95)** Get started with these tools and you'll see just how much more efficient your React Native workflow can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (7), [[React Native]] (5), [[Android]] (2), [[JavaScript]] (1), [[Design Patterns]] (1)
> **Code Identifiers:** ios (2)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-native-ecosystem-and-workflow-14359050/next-steps?u=76281980&t=0)** - [Emmanuel] This course was an introduction of some of the resources available to you as you get started with [[React Native]] project. If you're brand new to [[React.js|React]], I suggest you take a foundational course on the language to give you the basic concepts required to develop React Native applications. You could also get started right away, creating your first app with a React Native Starter or Expo. Follow the stats from the documentation. If you are an experienced developer, I'm sure you've identified several resources to get you started. But [[Firebase]] as a backend is a great tool to get you started on a solid project. If you need help with any of the subjects discussed today, feel free to look into [[LinkedIn]]'s library for React, or React Native courses, or reach out to the resources I've explored in this course. Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[React.js|React]] (2), [[Firebase]] (1), [[LinkedIn]] (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Skills Covered

- React Native
- Cross-platform Development

## Path Context

### In [[Become a React Native Developer]]
← [[Create a CRM Mobile Application with React Native]] | **4 of 5** | [[Learning React Native]] →

## Appears In

- [[Become a React Native Developer]]

## Related Courses

_Courses sharing skills:_

- [[Kotlin Multiplatform Development]] — Cross-platform Development
- [[Learning React Native]] — React Native
- [[Create a CRM Mobile Application with React Native]] — React Native
- [[From React to React Native]] — React Native
- [[React Native Essential Training]] — React Native

---

[↑ Back to top](#)