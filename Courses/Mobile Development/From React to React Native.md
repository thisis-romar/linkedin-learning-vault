---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: from-react-to-react-native-14332800
url: "https://www.linkedin.com/learning/from-react-to-react-native-14332800"
duration_minutes: 68
duration: 1h 8m
level: Advanced
updated: 10/22/2021
learners: 18638
skills:
  - React Native
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFuSEBMUgjwdw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634757501924?e=2147483647&amp;v=beta&amp;t=wChNOvCsQCDw26aL5UkSmL_JaSxt1yJr_YWeSWHZ4E8"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Become a React Native Developer]]'
prev_courses:
  - '[[React Native Essential Training]]'
next_courses:
  - '[[Create a CRM Mobile Application with React Native]]'
path_nav: '[{"path":"Become a React Native Developer","position":2,"total":5,"prev":"React Native Essential Training","next":"Create a CRM Mobile Application with React Native"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/react-native
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/From%20React%20to%20React%20Native.md)

![From React to React Native](https://media.licdn.com/dms/image/v2/C560DAQFuSEBMUgjwdw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634757501924?e=2147483647&amp;v=beta&amp;t=wChNOvCsQCDw26aL5UkSmL_JaSxt1yJr_YWeSWHZ4E8)

# From React to React Native

> You've created an application for the web in React, and it works great! But now your boss wants a native app. How do you make the switch? In this course, Emmanuel Henri, an executive with 20+ years of experience in programming and design, shows you how to convert web views into the React Native views and leverage state management, then covers logic and certain styles, backend considerations, and n

> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800) | 1h 8m | Advanced | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [From React to React Native](#from-react-to-react-native)
  - [Course prerequisites](#course-prerequisites)
- [**1. Overview of This Course**](#1-overview-of-this-course) (4 videos)
  - [Introduction to the React project](#introduction-to-the-react-project)
  - [Initiate a React Native project](#initiate-a-react-native-project)
  - [Overview of the React web code](#overview-of-the-react-web-code)
  - [Overview of the React Native structure](#overview-of-the-react-native-structure)
- [**2. Conversion of Views**](#2-conversion-of-views) (5 videos)
  - [Initial setup of extra libraries](#initial-setup-of-extra-libraries)
  - [Create a FlatList component](#create-a-flatlist-component)
  - [Create the action and button link](#create-the-action-and-button-link)
  - [Challenge: Add new element in the listing](#challenge-add-new-element-in-the-listing)
  - [Solution: Add new element in the listing](#solution-add-new-element-in-the-listing)
- [**3. Conversion of Styles**](#3-conversion-of-styles) (3 videos)
  - [Options for styling](#options-for-styling)
  - [Add a bar and update card listing](#add-a-bar-and-update-card-listing)
  - [Finalize the styles](#finalize-the-styles)
- [**4. Debugging in React Native**](#4-debugging-in-react-native) (1 videos)
  - [Debug options](#debug-options)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [From React to React Native](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=0)** - [Instructor] If you've spent any time with [[React.js|React]], you've probably heard about its little brother [[React Native]]. This amazing framework is a great way to start building Native iOS and [[Android]] apps with your React knowledge. Hi, I'm Manny. I'm a React and React Native developer and been focusing on these great frameworks for a while. And I'm here to support you on this journey towards [[Learning React Native]]. In this course, we'll take what you know about React along with a web application and convert this knowledge into building a React Native application. At the end of this course, you should have a good understanding of what makes a basic React Native application and be on your way to build bold projects. We'll first breeze through setting you up to build a project. Then we'll go over the folder structures to understand the nuances in between a React and React Native project. Then we'll build our components, add styles, and a material base library, and finally write some functions to filter our data for each views. So if you're ready to get started on your React Native journey, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[React Native]] (6), [[Android]] (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is the creation of a [[React Native]] application from a [[React.js|React]] project, experience developing with React is a must. If creating React components using props and importing modules are concepts that aren't familiar to you, I'd suggest you take a basic React course. Also, experience with [[JavaScript]] is a must for this course, as this is the basis of a React programmer. And in this course, I use the Essex Syntax and above. Finally, but not least, being familiar with terminal commands and [[npm]] isn't a must, but definitely will help you when we use these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[React Native]] (1), [[JavaScript]] (1), [[npm]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Overview of This Course

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the React project](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=0)** - [Instructor] In this video, we'll introduce you to the [[React.js|React]] base project that will convert into a [[React Native]] application. If you haven't done so already download the exercise files and extract them, then let's get to it. The first thing that I would assume that you have installed in your system is [[Node.js]] and therefore [[npm]] as well. If you don't, please go to [nodejs.org/English](https://nodejs.org/English) or whatever is the language you speak and then download the LTS version. I always recommend the LTS version because that's the one version that is actually supported versus the current has all the latest and greatest, but hasn't been supported yet. So download this one, install it inside of your system, and then you should be good to go. Just a note to yourself, you don't have to install, Create React App because if you are going to create a React application from scratch and then add the source folders and the components that I've created inside of my own project, you don't have to install, Create React App because now with MPX, which is available from this version, or I believe it was available in version seven or nine in between those versions, I can't remember exactly which one, I think it's six, anyways. Since NPX is available, you don't have to install the actual libraries inside of your system by leveraging NPX. So how it works, let me show you in a terminal, you would use something like NPX
>
> **[1:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=93)** and then do the command from the framework. In this case, create-react-app, and then the name of the application. So you wouldn't have to install create-react-app first and then create a new app from it. MPX will basically install temporarily inside of your system, create-react-app, leverage its commands, create your application in this case, and then remove it from the temporary cache inside of your system. So it's a really cool feature from node and I've been using it since its introduction. So let me just close my terminal and then close this browser. So let's go ahead and create a brand new project here and then insert all the files inside of our application. So the first thing I'm going to do is go ahead and open up Visual Studio Code, which is the application that I am using because it has a terminal as well inside of the applications. I have everything that I need as a developer to actually develop with it. So I'm going to open a terminal like so, and you can use the shortcut control gravity, and then inside a terminal, I'm going to make sure that I am on the desktop. So right now I am not, so cd desktop, and now I am. And now what I'm going to do is use the command that I just explained npx create-react-app, and then call this one news. So first it's going to [[Fetch]] the actual framework and then leverage the command that I just used
>
> **[3:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=186)** from create-react-app. And if we minimize that window, we're going to see that the application is now being installed inside of our system. So now that we have the application completely done for us, let's open that folder. So right now I have a base React obligation. So if I run it by doing npm-start, you're going to see your base React application. So what I want to do now is actually leveraged some of the files or a project that I already created inside of the resources folder. So what I'm going to do is simply copy these files here, copy, and then delete the ones that I have, or has been created for me here. And I'm going to delete the read me file as well cause I feel that's just extra files that I don't need, delete that and copy and paste. So note to yourself, you could have just copied and pasted directly from my project here and then just do an npm install and have the project ready for you. But what I've done here is just to show you how NPX is actually working. So what I'm going to do now is actually close this, close, this, maximize this, and then make sure that I have that project open inside of Visual Studio Code. So I'm going to go to my desktop and grab news, like so, and then the next thing I'm going to open a terminal.
>
> **[4:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=281)** So again, terminal new terminal and do a quick npm install because I know that there's a library that doesn't come directly with a base project for React that is actually part of that application here. And then I'm going to do an npm start.
>
> **[5:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=302)** And this is the application that comes inside of that project. So basically a list of courses with a header and basically create with a grid list of components here. So if we take a look at the application directly inside of Visual Studio Code here in the source folder, you have basically the index that links to the components here, basically to the app.js, and then the app.js links into the actual listings. So let's go there. And then you have a grid which has a component, which is the single item here. And it repeats that single item, which is basically this [[HTML]]. And if we look back, this is what this application is. And now the data is actually directly from here. So if we look into the data itself, the grid is calling onto, I believe the grid, it comes from the app.js actually. So we're loading the data on side of the app.js, building our state with it and then feeding it directly inside of our components that needs it. So we're passing it to the grid and then our grid actually returns how many grid items that we have, or the single component here, how many times we have that data inside of the [[JSON]] file here. So I believe we have nine elements that are repeated from the data. So the data is basically picked up from here,
>
> **[6:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=396)** building our state with it and then feeding it inside of our components. So the project is basically a list of courses from [[LinkedIn]] learning, built using React and materialize, which is a CSS framework. A basic application that will turn into a React native application. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (13), [[npm]] (5), [[React Native]] (2), [[Node.js]] (1), [[Fetch]] (1)
> **CLI Commands:** npm (5), npx (5), node (2), make (2), cd (1)
> **Tools:** terminal (8), visual studio (3)
> **Env Vars:** npx (4), lts (2), mpx (2), html (1), css (1)
> **Prerequisites:** install (8)
> **File Paths:** app.js (4), node.js (1)
> **Exercise Files:** download the (2), exercise files (1)
> **UI Navigation:** go to (2)

#### [Initiate a React Native project](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=0)** - [Instructor] In this video, we'll get a [[React Native]] project started and get a mobile application running on iOS. We'll also probably set up hot reloads so the app automatically updates as we make changes. So let's go to the documentation page on [reactnative.dev/docs/environmentsetup](https://reactnative.dev/docs/environmentsetup). So when you get to the main React Native page, all you have to do is go to get started and then click into their own section here. So basically this is the setup part. And then what you need to do is scroll down and select React Native [[CLI]] Quickstart. The reason why we're using this one is because this allows for the most customizable experience. So you can add libraries and things like that very easily without ejecting. If you want a very simple start or you simply want to learn without leveraging any other libraries, you can use the Expo by Quickstart, which is actually a little bit faster than the React Native Quickstart here. But for our case, we're going to use this one. And basically what you want to do at this point, and I'm not going to go through every single stages because I'm not an expert on every single systems here. So I'm a heavy user of Mac OS and I've done a little bit of [[Windows]] with [[Android]], but basically, in this course, we're going to do Mac OS with iOS. So once you selected the operating system
>
> **[1:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=95)** that you're on, then select the target OS, then go through all the installations here. I've actually installed Homebrew, and then I've installed Node here and then Watchman. So follow the instructions based on your operating system and what is the target OS for the mobile application. Once you've went through this, there are a few things that I want to mention for [[Xcode]] and iOS. So what you need to do once you've installed everything above here, what you need to do is open Xcode and go into the preferences. And first, you need to have a simulator. So make sure you go into components and select a simulator, download it, and then install it. Also, what you need to do is go to locations, click here, command line tools and select something. So if there's nothing selected, please make sure you select it. You may also have to install a few things when you first open Xcode, if you've never opened it before. So once you're done with all this, you've installed all this, you've installed CocoaPods, now it's time to start our first [[React.js|React]] application. So let's go ahead and minimize that. What I'm going to do is actually open VScode, which is going to be the tool that I'm going to use to edit the application.
>
> **[3:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=188)** So I'm going to go ahead and open VScode. So what I have right now is the actual web project. And what we're going to do is leverage a lot of the codes from the web project into the React Native application. So let's go ahead and open a second window
>
> **[3:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=210)** and I'm going to bring up the terminal. So click on your terminal and let's take a look at where we're at. And let's make sure we are on the desktop, at least from my part, because basically what I want to do is create the React Native application on my desktop. So basically go to the directory where you want to create your application. Once you're in there, what we're going to do is leverage the NPX command. If you're not familiar with NPX, it's basically MPM, but instead of having to install the framework or the tools that you are going to use locally first, and then create your new application, what it's going to do with NPX, it's going to download in a folder, a temporary folder, what we need to create our new project. And once we're done creating our project, it's going to empty that folder. So it's very useful when you want to create projects and not have to have all that extra stuff on your local system. So let's go ahead and do NPX React Native init,
>
> **[4:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=285)** which basically inits a brand new application, and the name of the application. So in this case, I'm going to call this newsNative. So we already have our news folder here. What I want to do is create a news native, which is going to be our native app. And let's go ahead and do that. So now that we have our application done, what we're going to do now is run it. But before we do that, I want to make sure that we have it open into our editor. So I'm going to click on Explorer, open folder, and select the right project, use native, open that up. Perfect. And this is the application. So we have iOS, Android, local stuff, and then we have our application, which is the app.JS file here. So if you click here, you're going to have basically the code for the first component that we're going to see on screen. So if you take a look at what are the components that we've imported, these are all the components that we've imported and that we're leveraging styles and creating all these different sections here. So let's go ahead and load that application. So what I'm going to do is bring up the terminal again. And what I'm going to do now is actually run the command
>
> **[6:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=381)** to start the application. But this is where you have several options. So if you are running this application for Android, you need to run a different command than if you were actually running an iOS application. So what you need to do is NPX react native for the actual command and then run the name of the actual application you want to run. In this case, I'm going to run iOS. So make sure you have all this stuff installed from the instructions on the documentation. And then when you're ready, you have the application running here. You can go ahead and run this. And by running this, the simulator is going to bring the simulator that you've installed inside of Xcode and run your application. So let's go ahead and do that. So this is what the application looks like. So if you make any changes into the editor here, what you could do after that is do Command + R or basically load the debug section and click reload. And what it's going to do is make the changes directly into the application, based on what you've just done here. So let's go ahead and basically edit this area here. What I'm going to do is go to this section. So read the docs to discover what to do next. So let's change this to something else. So I'm going to do. "Welcome to your application".
>
> **[7:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=478)** And then what we're going to do is save this and then bring up the simulator and do Command + R, and you can see right here, Welcome to your application. So we got our project ready to go and we can start. So let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (8), [[Xcode]] (4), [[Android]] (3), [[CLI]] (1), [[Windows]] (1)
> **CLI Commands:** make (8), npx (5), node (1)
> **UI Navigation:** go to (5), select the (2), click on (2), scroll down (1)
> **Code Identifiers:** ios (6), newsnative (1)
> **Env Vars:** npx (5), cli (1), mpm (1)
> **Prerequisites:** install (3), set up (1), setup (1), you need to have (1), make sure you have (1)
> **Tools:** terminal (3), command line (1)
> **Documentation:** the documentation (2), the docs (1)

#### [Overview of the React web code](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=0)** - [Instructor] In this video, we'll explore or current web project. Its structure and its code to understand what we have to convert to [[React Native]]. This way we'll be better suited to understand how to structure our React Native project. Also keep in mind, if you don't have access to our exercise files and use your own project, understanding where we come from we'll give you a better understanding of how this applies to your own project. So the [[React.js|React]] web project was built from a create-react-app. Therefore, the folder structure is minimal and we don't see most of the webpack settings and dependencies involved. However, ejecting the React project, in this case, won't add any information we would need for the conversion. So if we take a look at the file structure, we have the public folder where we have our index.[[HTML]]. We have our components. So let me just make that a little bit bigger. So we have our components. We have listings, which has the Grid and the Single item for the Grid. We have our app and we have our test. And finally, we have our data in a separate folder inside of the source folder, along with your typical index.js and CSS. So what we're going to do is restructure this a bit, make sure the application still works as we make those changes. So you want to make sure you have the project running. So let's go ahead and go into the terminal and make sure that that project is running. So do an [[npm]] start.
>
> **[1:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=97)** And then make sure the application is running. So right now it's running properly, so let's go ahead and make the changes. So the first thing I'm going to do, inside of the source folder, I'm going to create the task folder because we have that inside of a React Native project. I want to do something similar inside of our web project. So let's go ahead and on the source folder, create a new folder. This is going to be called tests. And then we're going to move our tests file here. Yup. And in theory, when you make moves like that Visual Studio Code should make the updates for you. If it doesn't, then we'll do it manually. So I'm going to save that. And then do the same for our tests. Right here. And that's pretty much it for the tests. Now, the next one I want to create is the styles. So inside of the source folder, I want to create a new folder that I'm going to call styles. And then I'm going to move my App.css and also my index.css. Right here. So now I have an issue. Fail to compile. So we want to make sure that the App.css is actually called properly in the proper element.
>
> **[3:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=191)** 'Cause right now it's being called by somebody and it's not basically loading properly. So let's make sure we do that. So right now this import is calling App.css, but it's not in the right folders. So what I'm going to do is simply delete all this. Like so. And go out of the components. Go into styles and then call App.css.
>
> **[3:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=226)** Now the second one that is an issue is the index. So let's go into the index and make sure that we are properly blinking. So let's go into, I believe is styles again, and then index.css. Save that. And we should be back to normal. So now that we've created our CSS and our test files and everything is in its proper folder. So we have our tests, we have our styles, we have our data and we have our components right here. We're mostly ready to upload this. The next thing I want to do is to make sure that my prop types are properly done inside of my App.js component. So if we scroll down into the grid actually, not the app. We just have this. So what I want to do is make sure that my prop types are probably done here. So where I want to make sure that the prop types are properly done is in the Single. So what I'm going to do here, as opposed to just do item and then have proper object required. So basically this is telling React that for the item, I have an object that will pass, but let's do this properly. So what I'm going to do now is do PropTypes.shape. And let's make sure we shape what we want
>
> **[5:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=318)** inside of that object. So we want a title. And this should be PropTypes.string. Now the second one, I want a release_date. And this should be a PropTypes.string again. And what I'm going to do is simply copy that one and paste it a couple of times. 'Cause it's all strings for the [[Representational State Transfer (REST)|rest]] of the prop types. So views. This one is description. And finally we have a link.
>
> **[6:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=372)** So basically I shaped the prop types properly to match what we have in our data right here. So if we look at what we have here, we have title, description, link, released_date, and so on, so forth. Okay. After you've properly corrected the imports and index, App.js, and everything, you want to make sure that the app is running. And we want to go back to a web browser and making sure that everything is working. And it's working fine. So now that we have everything that we need on the web, and we're ready to take that to the next level with React Native. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[React.js|React]] (4), [[HTML]] (1), [[npm]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (17), npm (1)
> **File Paths:** app.css (4), index.css (2), app.js (2), index.html (1), index.js (1)
> **Code Identifiers:** release_date (1), released_date (1)
> **Env Vars:** css (2)
> **Tools:** terminal (1), visual studio (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)

#### [Overview of the React Native structure](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=0)** - [Instructor] In this video, we'll explore our [[React Native]] folder structure and add our source folder and the first component. So let's get to it. So let's go ahead and create the folders that we need. So inside of the main directory, you want to create the source folder where we're going to put the components, the styles, et cetera. So let's go ahead and create a new folder. And I'm going to call this src. And then inside of src, we're going to create components, styles, and data. Pretty much like our web project. So let's go ahead and right click, or you can click here. New Folder. And the first one is components. And if you see this, it's okay, that means that we have a sub folder inside of src. But because we don't have any other folders inside of src, it basically creates the structure like that. So that's okay. All you have to do is click on src here. Right click, New Folder, create styles, and now you're going to have two folders inside of src. It's just a way to minimize the amount of stuff that we see on screen. And basically is something that Visual Studio Code does. All right. So let's create a third folder. And I'm going to call this one data. So let's go ahead and move at least the data and the styles inside of that project. And because we're not using it with a component yet, it's fine. So we're not going to get any errors yet.
>
> **[1:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=94)** But let's just move them in here so that at least we can use them. So let's go ahead and do that. So what I'm going to do is minimize this. And use the folder structure here. And grab from news here, from the src folder, I'm going to grab the data. So I'm going to copy that and I'm going to put it inside of my src folder inside of data. Like so. And then let's go ahead and copy the styles as well. So App.css and index.css. Let's do that. Copy. And let's just put them temporarily here. Okay, perfect. So the next thing I want to do, and I'm going to break the application by doing that, is to move the App.js inside of our components here. So by doing that, you're going to basically break the link in between App and the index. Well, let's do that inside of VSCode. So I'm going to close all this. Bring back VSCode. Maximize it. And while we're on it, let's make sure we can see the simulator. Like so. Perfect. And now let's move App.js inside of our components. As you can see, now we just broke the application. So all we have to do to fix this is to go into the index and make sure we load from the right folder.
>
> **[3:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=188)** So what I'm going to do, basically like we've done for the web app, is to go and fix this. So from. And let's go into src. And let's go into components. And load App. Save. And now our application is back and running properly. So basically now we've restructured the React Native application to match a little bit of the web app. And we can move on now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (2)
> **File Paths:** app.js (2), app.css (1), index.css (1)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 2. Conversion of Views

[↑ Back to Table of Contents](#table-of-contents)

#### [Initial setup of extra libraries](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=0)** - [Instructor] To bring a similar style to our native application, we'll install a few elements and set up our main application component. So let's get to it. So if you don't have the application running right now, make sure that you go into the terminal and I'm going to bring it by doing control gravity, or you can bring it by clicking on terminal, new terminal. And once you have it, as you can see our already have my application running, but if you don't, what you could do is do MPX [[React Native]], run iOS or run [[Android]]. Once this is running, this is what you should see and welcome to your application is the last thing that we've done with the application. So let's go ahead and install a few things. I'm going to bring back my terminal. And what I'm going to do is install a few libraries inside of the application. And you can do npmi, or install, it works both ways. So the first thing or library that you need to install is called paper. So it's called React Native Paper, and that's going to be something that we'll leverage in the next chapter to do styling and do our cards inside of our application. So basically apply material design, liked the web application inside of React Native. And this library requires another one, which is called vector icons. So this one is called, the official name is React Native Vector Icons, which basically allows you to use a lot of icons
>
> **[1:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=95)** inside of React Native. So basically the library React Native Vector Icons is from this guy here, and he has been maintaining that one for a while. And it's a very cool library that allows you to have a whole lot of icons that you can leverage inside of your application. So, I highly recommend that you use that library because it has a lot of stuff that you can use. So font awesome, and a whole bunch of others. So let's go ahead and install that. Once these are installed, you need to do one thing to make sure that this works inside of React Native is link vector icons. And that's very important in order to see them here. So the way to do this is do NPX React Native, which basically allows us to do the React Native command link, and then to name React Native Vector Icons like so.
>
> **[2:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=161)** So this will actually link inside of the projects, the vector icons, and we'll be able to leverage them inside of our library. And you can see that this process as successfully done here. Okay, so now that we've done this, we're set up with the libraries that we need and all you have to do at this point is close this, and we're going to get back to this later on in this course. So if you wonder if you have them inside of the package.Jason, you just take a look and these are in there. The next thing I want to explore and make sure that you understand is the app.[[JSON]] file here. So this file is basically what is the name of your application? So if we click on our assimilator on the house icon here, we're going to see that news native is the name of our application, but that's really not the name that you would want for your specific application. And this is where you change that name. So this is the [[Metadata]], where you can actually change the internal name of the application, but the display name is the display name here. So if you change this to something else, you're going to see something else in here. So if you want to go ahead and change this to news native, but separated as opposed to one. So let's go ahead and do that, like, so, and then save this. It's going to change it inside of the application the next time you rebuild it. So right now, it's not going to show out till you rebuild. And if you want to rebuild,
>
> **[4:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=254)** you basically do the start application again from the terminal, like we've done before, but I'm going to do this later on. So for now let's keep it as is. So I'm just going to open the application again, close this file. And now we're going to go inside of our index and set up this file to accept the paper library that we just set up with our install here. Let's go ahead and do that. So basically what I'm going to do is first import a few things here. So I'm going to import provider as paper provider, from React Native paper like so.
>
> **[5:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=307)** And now I'm able to leverage this inside of my application. And what I'm going to do now is create a component very quickly. So let's go ahead and do that. So I'm going to create a functional component.
>
> **[5:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=327)** And I'm going to return. And I'm going to leverage paper provider and then inside of it, I'm going to insert the app component like so. And right now, if you're seeing errors like this, this is basically [[ESLint]] telling me that I don't have enough space or I'm not using the proper space. I'm not going to pay attention to my space that I'm using tabs or spaces inside of the application. As long as it works, that's all that matters. If I make major mistakes or if I do anything, the application is going to tell me anyways. So I'm going to save this, but now it's not going to work. And the reason being is because I haven't passed this here. So right now, it's still passing app. So basically if I have app, that's imported, that's what's being passed here. So I basically don't have anything that I've just coded passed to the actual application. So what I need to do now is change this to main because I've created a new main component, which leverages app, and basically encapsulates with the theme or paper with the application. So I'm going to basically change this to main, like so, and save. So now that I've changed this to main, the obligation hasn't changed, but it's basically the application, but now I have access to paper.
>
> **[7:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=421)** And we'll see this once we start applying paper components, if it's working or not. Okay, so now that I have all the libraries that I need, that I set up my main application, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (11), [[Android]] (1), [[JSON]] (1), [[Metadata]] (1), [[ESLint]] (1)
> **Prerequisites:** install (7), set up (5)
> **CLI Commands:** make (4), npx (1)
> **Tools:** terminal (5)
> **Definitions:** is called (3)
> **Env Vars:** mpx (1), npx (1)
> **UI Navigation:** click on (1), open the (1)
> **File Paths:** app.json (1)

#### [Create a FlatList component](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=0)** - [Instructor] Now let's get started on working on our main view and a list component. So if you remember how the application works or how it looked like for the website of things, so let's go ahead and grab our news project here and open a new studio project. And if we look inside of the application, we add the app, which basically passed the grid items. And then the grid items had the single that was repeated how many times we had data inside of our data file. So let's go ahead and do something similar here. So what we're going to do is go into the source folder and then go into our components and then into the app. And I'm just going to put that back here. And what I'm going to do is kind of erase a lot of the stuff that we have on that application. And what I'm going to do is even remove the styles because we're going to add our own styles later on, after we've done the actual application or added all the components inside of our view. So I'm going to go ahead and literally remove everything all the way up to the imports right here and just leave [[React.js|React]]. And what I'm going to do is start creating our main application here. And as I create what I need, I'm going to add or import what I need as well. So let's go ahead and do that. So I'm going to basically create the app again, which is a functional component,
>
> **[1:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=93)** so basically just a function like so. And I don't even need to do a return on this one because it's a functional component. So I'm going to start with a view. So the first thing you need inside of a React application, a [[React Native]] application actually, is a view. So if you're going to have multiple elements inside of the application, you need a top level component. And in this case, the view is the best candidate for that. So I'm going to have a menu and I'm going to have cards that are going to be repeated through a FlatList, so might as well start with a view. And inside of our view, we're going to have a FlatList. It used to be called list view, and now it's called FlatList because they changed basically the component that was behind it. And it's better. It has a better performance. And now it has a better structure, how you actually [[Jetpack Compose|compose]] it. So let's go ahead and do that. So I'm going to import a few things from React Native. So I'm going to first import the FlatList. I'm going to import a view and might as well import the style sheet right away, which we'll need later on. And lo and behold VS code actually completes that for me because it knows that I have that imported. That's a very neat feature of that application. So let me just minimize this for now so we can only see the code and we'll get back if we need anything else. So basically I just click on the explore and minimize that
>
> **[3:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=190)** so I have more screen estate for coding. So now let's go ahead and create our FlatList. So basically the FlatList is a component that you can leverage to repeat a list of elements. So basically this is what we need because we need a list of all the courses that we have inside of our data. So if we look back at our data here and courses.[[JSON]], we have multiple elements that we need to repeat inside of a list, and this is what the FlatList is for. So let's go ahead and start creating our FlatList and we need a few things, or it takes a few props. The first one is the data. So it needs to be passed some data in order to repeat something. So it's called data, obviously, and let's go ahead and pass our data from our data. So let's go and import data from, and let's go and grab data, of course it's .JSON. So now we're able to pass that here. If you want to basically have something that is more specific to the data that you're passing, you can do that instead. And also as a component inside of FlatList, we need a function that will repeat the elements that are inside of the data. So what we're going to do is basically
>
> **[4:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=283)** create a function right here. So render item,
>
> **[4:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=297)** and then inside of that render function, we need to basically pass item and how many items we have, we can render it as text, and so on, so forth. So in this case, we're going to render it as text. So let's go ahead and import the text element from the library. And we're going to leverage here, right here. So the tax component allows us to actually list the text inside of React Native. So in this case, let's go ahead and render item.title. So we're going to leverage a title inside of our data here. So this element. So once we repeat that, it's going to repeat that inside of our view. So once you have that, you have everything that you need to actually render this. So let's save that. And as you can see, we have all the titles of the courses listed inside of our view. So we built the basic functions of an application here. So we have our view. We have an element that repeats our data inside of our application here. It looks ugly, but we're going to be working on this in the next few videos and the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (3), [[React.js|React]] (2), [[JSON]] (2), [[Jetpack Compose|Compose]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** json (2)
> **Cross-References:** in the next (1), next chapter (1)
> **File Paths:** courses.json (1)
> **Tools:** vs code (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Create the action and button link](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=0)** - [Instructor] Now in the original web application, if we click on the link of the course, it brings us to the actual page of the course. But how we would go about creating such a link in a native application? So let's explore that. So we'll continue working on the app.js file right here. So the first thing we need is a function. So that function will allow us to actually click on something and then get to a page. So let's go ahead and create the function. So I'm going to create that first and I'm going to call that application handleClick. So that needs a link and then we need something from [[React Native]] in order to actually use a linking function inside of React Native, we need to import the actual Linking from React Native, this guy. So let's go ahead and do that. So once we have that, we can actually create a linking function. So this method allow us to create a link inside of iOS and [[Android]] with a simple function. So let's go ahead and do this. So if we can open the URL, then pass the link, and then... So basically what we're doing here is if the link is supported,
>
> **[1:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=94)** then allow us to cap and open something. Otherwise, a console is going to tell us that we cannot open the link. So this is basically what we're doing here. And then pass the link else console.log "Don't know how to open URL" and you can even put the URL link so somebody knows what it can open. Now let me just close again, the explorer. So we have more screen estate. So I'm just going to put my, perfect. So now that we have the function, let's go ahead and actually leverage it. So what we're going to do inside of our view here inside of the flat list. So here, where we render our text, what we're going to do is create, instead of a text, we're going to pass the link or the function, and we're going to change the txt to a button. And we're going to leverage that later on. Let's go ahead and change that to a button. And obviously we're going to have a non press function
>
> **[3:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=190)** and then this handleClick, and then we're going to pass the item.link, Tap to view course. So once I save this, all we're going to see is 'Tap to view course' multiple times here. But if you tap on any of them, it's going to open something inside of a browser window inside of our application, because we created a button that will open inside of another page. What I want to do is create that button now, which we'll leverage later on inside of a card that will add to the application. But let's save this. So now the one thing that we need is actually import the button, cause we don't have a button in here. So let's go ahead and do that and this is from React Native Paper, in this case. So we're going to start doing some paper stuff, but we're not going to go too deep inside of those things. So let's import a button here and you can do the same thing from React Native, but we're going to import it from React Native Paper, so we can leverage this one later on. And as you can see now, we see 'Tap to view course,' 'Tap to view course.' If we tap on any of those, it's going to open the actual link inside of a webpage, which is what we want. But right now it looks ugly because we haven't added any styles to this application,
>
> **[4:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=286)** which will come later on. But this is basically what we needed to create for this particular video. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (6), [[Android]] (1)
> **UI Navigation:** open the (3), click on (2)
> **Code Identifiers:** handleclick (2), ios (1)
> **Env Vars:** url (3)
> **File Paths:** app.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add new element in the listing](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=0)** - [Instructor] Okay, so I have a challenge for you. Now that we have one element rendering, how would you go about rendering a second element from the list of items from our data in [[React Native]]? So if we go into Explore and then go into our data, we have multiple elements here. We have a category, we have a title, we have a description and so on and so forth. Pick any of these categories and render them inside of a text. So we should see tap to view course and then a text that you will render from your selected element here. So I challenge you to create a simple text with one of the elements here and render it inside of our view, and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add new element in the listing](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=0)** - [Instructor] Okay, so let's take a look at the solution to our challenge. So as you can see, and you can grab the code from the exercise files, what I basically done is add the title back into our view here. And what I've done is basically add a text and then the item dot title, which we had before. But in order to do two elements inside of this render function here inside of the flatlist, you need to have something that encapsulates the other components. So you have to have a view component at the top. So if you add something here, you need to have the view above that little text here. So basically this is what I've done. I added a view, and then I added the text back with item dot title, and that's how I did it. So now I have the title plus tap to view course inside of our view. So if you've done anything differently and it works, well basically you've succeeded in rendering a second element, but all you have to do is to add this element here or another and render it inside of the flatlist.

> [!info]- Semantic Content
>
> **Prerequisites:** you need to have (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Conversion of Styles

[↑ Back to Table of Contents](#table-of-contents)

#### [Options for styling](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=0)** - [Instructor] In this chapter, we're going to start working on styling our application to look more like the original web app, leveraging paper, and also changing some steps. But what are the options available for styling in [[React Native]]? Let's explore that a little bit. The first method is directly in file, and this is what we had before. So we had the actual styles here inside of our application, and the way to do this, it's basically to create a variable. So you would create a variable called styles and then leveraging the style sheet from React Native, you would create a new style sheet inside of [[React.js|React]] directly, here. And then insert your style in here. And that's basically how it works. But the second way to do this, and if your projects become really big and the files are way above a hundred, two hundred lines of code, you are going to want to have your style separate. And this is where that folder comes into play. So instead of having app.CSS and index.CSS files, and actually we could delete the index.CSS if we wanted to, we'd have something that would be a JSS file. So you would have something like appstyles.JS file in here. And instead of having the styles written that way, you would basically copy this thing here.
>
> **[1:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=95)** So you would have this code inside of app.JS here. Make sure you import style sheets, so you would have to go back here and import from React Native style sheet, here. So let's go ahead and copy this line fairly quickly, like so. Go back here and just import style sheet
>
> **[2:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=131)** and then create your styles, export them at the end, so export styles. And you want to make sure to give it something that is unique because once you start creating your style sheets separate in the styles folder, you're going to want to have specific name here. So basically two app styles. And then let's say, for example, you want to create a style for component one, then you would create your style here. So let's say something like color, have something like white. So you would have your first style right here, export your style sheet, and then go into app, and then import your style sheet here, and then apply it. So do something like that, import styles from styles and then app styles.
>
> **[3:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=198)** And there you go. So now you can actually apply your styles directly inside of that spreadsheet. And that's the two methods to do it. If the project is fairly small, like the one we're doing here, you would do it directly inside of the same file to keep things modular and together. So I'm going to remove this. I just wanted to show it to you, what's possible. And save that and then go back to app style and just basically comment that out. I still have it in my project as an example for you to leverage down the road in the styles folder here, but I'm not going to use it inside of that project, but this is something you can do down the road. And let me just delete that line to clean up, because what we're going to do is do our styles directly inside of our spreadsheet right here. So now that we've explored the methods of doing style sheets inside of React Native, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), [[React.js|React]] (1)
> **File Paths:** index.css (2), app.css (1), appstyles.js (1), app.js (1)
> **Env Vars:** css (3), jss (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Add a bar and update card listing](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=1)** - [Instructor] We'll start leveraging the components available from the paper library. And if you're wondering, what is this library, this is where you can actually reach it. Callstack.[github.IO/react-native-paper](https://github.IO/react-native-paper). And on that page, you're going to see some examples and code snippets. So if you click on the app bar that we'll leverage later on, you can see code snippets and so on, so forth. So feel free to explore that library. And this is basically what we're going to use. So I'm going to close that window and start working on this ugly application. So the first thing we're going to do is basically add the app bar. So let's go ahead and do that. So the first thing we need to do is import it, and while we're here, let's import everything that we need. So I'm going to basically need the card, going to need the title, paragraph, may what these are, but we're going to need them. And then finally the app bar. Awesome. So now that we have that, let's go ahead and start adding some stuff in here. So I'm going to go right below the view online 25. And again, I'm going to close Explorer to get a little bit more screen estate, and I'm going to add the app bar. So this is going to be a bar that will be at the top, basically listing courses like our web app. So let's go ahead and do that app bar.
>
> **[1:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=97)** An app bar is going to have styles later on. Actually let's not add the styles as of yet.
>
> **[1:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=109)** And let's close the app bar. And then inside of the app bar, we're going to have our title. So the title for courses. So let's go and add app bar dot, and that's how this specific library works. You add specific things inside of those components and you're basically adding new content. So in this case, we're going to add a title or new components. Perfect. So now we have our title and we have our app bar. Now the next thing we need to do inside of our flat list, because it looks flat, we need to have a card. So we're going to leverage a card as opposed to view. So let's go ahead and eliminate view. I'm going to basically click option, click on view, and change this to card, like so. So now we have the card here. And instead of text, and let's remove it, we're basically going to code this manually. So we have a few things. The first thing that we need is the card cover. So let's go ahead and do that. So card cover and the source is going to be our URL,
>
> **[3:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=194)** so URI, in this case. And basically coming from our data, which is a URL of the image of the course. And close it. Not inside of that, though. There you go. Then we're going to need card content. So let's go ahead and do card.content. Close that out. And the card content will have a title. And again, we imported all of this already. And the title will be what we already use here, so item.title, like so. And then we'll have a paragraph. And the paragraph will be the item description, like so.
>
> **[4:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=261)** And this is where we get out of card content. Then we're going to have our card action. And this is the button we already created. So basically we're going to open up this tag element and I'm going to indent it just to show that this is inside of that card action. And then we're going to close the card action after. So we have our button, we have our content here, we have the image and we have the card. So now that we have all this, if we save this, we should see the cards. So let's debug and that's a good exercise to figure out what's happening here. So the best way to do this is to go into the components stack, to see where the issue could be. So we scroll down and we're trying to find the component we're working on. So in this case, we're working on the flat list. So from the app, we're working on the flat lists. So obviously this is something in the flat list. The issue is here, and this is basically the code that we just added. So something in here is wrong. And I just figured that out. Action is actions, plural. So let's go ahead and add actions like so, and save it.
>
> **[5:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=355)** And now the application is back. Yay! And we have our listings. So now we have everything in a much better way. And it looks exactly the same as our web application. We have our listing here in the materialize or material design style, and we have the tab to view course like we have before. Now the problem here is the top bar, here. So we can't see courses. We added courses here but we can't see it. So we're going to be working on that in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[React.js|React]] (1)
> **Env Vars:** url (2), uri (1)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** find (1)
> **URLs:** [github.io](https://github.io) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Finalize the styles](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=0)** - [Instructor] So let's finalize our styles for this application here. As we explored styles previously, we can do either a file separate to the actual main file, or the main component, or we can do basically inside of the same file. And that's exactly what we're going to do. Now, how does tiles work inside of [[React Native]]? Basically by leveraging the stylesheet.create function inside of React Native, you basically have access to CSS styles that you're familiar with as a web developer. The only difference is it's written differently. So let me show you. So let's go ahead and fix our bar here, 'cause that's fairly annoying, especially from this simulator, as we can see, we have the nudge for the speaker right here. So let's basically fix that. So what am I going to do now is create styles for that top bar. So we have the app bar right here and we're going to create styles for that. So I'm going to basically create a bar style and I'm going to add a margin to the top. So this bar goes a little bit lower or basically right here. And if you're familiar with CSS styles, that would be margin top. And the way to write that in React Native is by doing marginTop, like that. So basically in CSS styles, you would do something different.
>
> **[1:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=94)** So if we were to create a style sheet right here, let's do app.CSS and then do .bar. And then we would do margin-top. This is how you would write the margin top and then add 50 pixels. So that's how you would do it inside of a CSS style. So basically the only difference in between the styles, NCSS and the styles with the stylesheet.create function inside of React Native is basically removing that dash and then do top like that. And then you would be able to do that right here. So marginTop, like so, and then do 50. You don't have to write the 50 pixels. It's basically a given. So let's go and save that. And if the application doesn't show your styles, well it's because it hasn't been applied to the element. So let's go ahead and do that. So I'm going to go into bar.content right here and do style and then do styles.bar.
>
> **[2:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=172)** Actually, it's not in the content, it's in the app bar. Sorry about that. My bad. There you go. And then save that. And now you can see the styles applied to your application. If something doesn't show after that, my recommendation to you is to go back into the terminal and do NPX React Native run iOS or run [[Android]] to rebuild the application and basically make it anew. That command fixes a lot of issues. When you have issues that you basically fix and know that you fix the code, if you do a rebuild of the application, that's going to fix most of these things. So let's go and don't save. Don't create that app.CSS or delete it because we don't really need it. And let it rebuild. And now that's the other thing that this particular command does. It brings up the issues that you may have not seen before. Because the main index has been rendered already, we didn't see any of the issues that are basically coming from this guy here. So let's go ahead and fix that. We need to basically import [[React.js|React]] inside of index to be able to create a component. So let's go ahead and do that. So I'm going to go ahead and import React
>
> **[4:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=271)** from React, and then just save it. And it's going to fix that. So now that we've done the application, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (5), [[React.js|React]] (3), [[Android]] (1)
> **Env Vars:** css (6), ncss (1), npx (1)
> **Code Identifiers:** margintop (2), ios (1)
> **File Paths:** app.css (2)
> **CLI Commands:** npx (1), make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 4. Debugging in React Native

[↑ Back to Table of Contents](#table-of-contents)

#### [Debug options](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=0)** - [Instructor] In this video, we'll explore the tools we have at our disposal to debug, and view the performance of our application. Let's get to it. So like we've done before, if you want to see the Debug tool, you can do that by doing Command + D in the iOS app, and for the [[Android]] app, it's Control + M. Once you're here, you have several items that you can use. The first one is Reload. So basically that does the exact same thing as if you would do Command + R, or change anything in your application, it would reload automatically. So if you click here, it reloads the application. Let's bring it again. Now, debug with Chrome, what it does for you, it allows to debug in [[JavaScript]] inside of the browser, pretty much like when you're debugging a web application. So it gives you access to [[React Native]] tools, such as the state, or tools that will allow you to see components from the web browser perspective. Show Inspector basically shows you the actual inspectors. If you click on this and then click on any elements, it would show you basically the styles directly related to that element, and so on and so forth. If you want to get out of there, just bring the debug tool, and Hide Inspector. Disable Fast Refresh basically stops doing the reloading automatically when you make changes to the code.
>
> **[1:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=92)** So you would have to manually reload by clicking here. So I always leave that on. For most cases, that's going to work. And when you make changes to the code, you're going to see them live on the application. I also told you that sometimes the changes are not applied, or something big needs to be rebuilt automatically, then sometimes something needs to be rebuilt to show up on the application. Well, this is when this doesn't actually apply, and you need to reupload the application, but this is very useful for small changes in your application when you add components, when you tune styles, and so on and so forth. Configure Bundler is basically IP address stuff. So if you click on that, you're going to see IP address and ports that you can actually change to be able to see this directly inside of a web browser, or any other tools that you want to leverage. And finally, Show Performance Monitor basically gives you performance of your application as you make changes to it. And this is very useful if you're building a big application, and you need to see the performance while you actually make changes to the application, and then so on and so forth. So these are the tools that are available with the debugging tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[JavaScript]] (1), [[React Native]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (3)
> **Code Identifiers:** ios (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=0)** - [Instructor] This course was a quick demonstration of how you could convert a [[React.js|React]] by project, into our [[React Native]] project. However, we've just scratched the surface with React Native. For example, for practice purposes on this course, we had you build a second component that was only different by the category that it showed. If you're familiar with React you know there's an opportunity to extrapolate pieces of this listing into its own components. And reuse the stateless components to build the list without redoing the same code. This kind of approach isn't specific to React Native, but if you're familiar with React, then you'll be able to push this project further. Next, you could also add Redux to this project to further improve state management. If you think this project will scale with many other functions and types of data. Also, we've used iOS as our simulator. You could also do more testing in [[Android]] and take a look at the nuances in between the two. React Native has great resources when you need some help, you can find answers to your problems on Stack Overflow. You can also reach out and chat with the community on the Reactiflux channel on Discord. Finally, if you find bugs on the library, always report it to the [[GitHub]] repo. If you felt lost at any point during this course, there are a few [[LinkedIn]] learning courses on React Native and React that can help you push your skills further. And of course, the [[Facebook]] docs on these two amazing libraries. Feel free to click on any of the links in the app
>
> **[1:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=94)** we just built. Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (5), [[React.js|React]] (4), [[Android]] (1), [[GitHub]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (2)
> **Tools:** discord (1), github (1)
> **Code Identifiers:** ios (1)
> **Documentation:** stack overflow (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- React Native

## Path Context

### In [[Become a React Native Developer]]
← [[React Native Essential Training]] | **2 of 5** | [[Create a CRM Mobile Application with React Native]] →

## Appears In

- [[Become a React Native Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning React Native]] — React Native
- [[React Native Ecosystem and Workflow]] — React Native
- [[Create a CRM Mobile Application with React Native]] — React Native
- [[React Native Essential Training]] — React Native

---

[↑ Back to top](#)