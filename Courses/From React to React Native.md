---
type: course
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
tags:
  - course
  - topic/mobile-development
  - skill/react-native
status: not-started
created: 2026-04-17
---

# From React to React Native

> You've created an application for the web in React, and it works great! But now your boss wants a native app. How do you make the switch? In this course, Emmanuel Henri, an executive with 20+ years of experience in programming and design, shows you how to convert web views into the React Native views and leverage state management, then covers logic and certain styles, backend considerations, and n

> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800) | 1h 8m | Advanced | 19K learners

## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- React Native

## Table of Contents

### Introduction

#### From React to React Native
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=0)** - [Instructor] If you've spent any time with React, you've probably heard about its little brother React Native.
>
> **[0:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=6)** This amazing framework is a great way to start building Native iOS and Android apps with your React knowledge.
>
> **[0:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=12)** Hi, I'm Manny.
>
> **[0:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=14)** I'm a React and React Native developer and been focusing on these great frameworks for a while.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=19)** And I'm here to support you on this journey towards learning React Native.
>
> **[0:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=23)** In this course, we'll take what you know about React along with a web application and convert this knowledge into building a React Native application.
>
> **[0:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=33)** At the end of this course, you should have a good understanding of what makes a basic React Native application and be on your way to build bold projects.
>
> **[0:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=42)** We'll first breeze through setting you up to build a project.
>
> **[0:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=46)** Then we'll go over the folder structures to understand the nuances in between a React and React Native project.
>
> **[0:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=53)** Then we'll build our components, add styles, and a material base library, and finally write some functions to filter our data for each views.
>
> **[1:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/from-react-to-react-native?u=76281980&t=63)** So if you're ready to get started on your React Native journey, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** while. (1), let (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is the creation of a React Native application from a React project, experience developing with React is a must.
>
> **[0:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980&t=9)** If creating React components using props and importing modules are concepts that aren't familiar to you, I'd suggest you take a basic React course.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980&t=19)** Also, experience with JavaScript is a must for this course, as this is the basis of a React programmer.
>
> **[0:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980&t=27)** And in this course, I use the Essex Syntax and above.
>
> **[0:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/course-prerequisites?u=76281980&t=31)** Finally, but not least, being familiar with terminal commands and npm isn't a must, but definitely will help you when we use these tools.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Code Keywords:** finally, (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Overview of This Course

#### Introduction to the React project
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=0)** - [Instructor] In this video, we'll introduce you to the React base project that will convert into a React native application.
>
> **[0:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=7)** If you haven't done so already download the exercise files and extract them, then let's get to it.
>
> **[0:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=13)** The first thing that I would assume that you have installed in your system is node.js and therefore npm as well.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=19)** If you don't, please go to [nodejs.org/English](https://nodejs.org/English) or whatever is the language you speak and then download the LTS version.
>
> **[0:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=29)** I always recommend the LTS version because that's the one version that is actually supported versus the current has all the latest and greatest, but hasn't been supported yet.
>
> **[0:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=40)** So download this one, install it inside of your system, and then you should be good to go.
>
> **[0:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=46)** Just a note to yourself, you don't have to install, Create React App because if you are going to create a React application from scratch and then add the source folders and the components that I've created inside of my own project, you don't have to install, Create React App because now with MPX, which is available from this version, or I believe it was available in version seven or nine in between those versions, I can't remember exactly which one, I think it's six, anyways.
>
> **[1:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=79)** Since NPX is available, you don't have to install the actual libraries inside of your system by leveraging NPX.
>
> **[1:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=87)** So how it works, let me show you in a terminal, you would use something like NPX and then do the command from the framework.
>
> **[1:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=96)** In this case, create-react-app, and then the name of the application.
>
> **[1:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=102)** So you wouldn't have to install create-react-app first and then create a new app from it.
>
> **[1:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=107)** MPX will basically install temporarily inside of your system, create-react-app, leverage its commands, create your application in this case, and then remove it from the temporary cache inside of your system.
>
> **[2:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=120)** So it's a really cool feature from node and I've been using it since its introduction.
>
> **[2:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=126)** So let me just close my terminal and then close this browser.
>
> **[2:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=129)** So let's go ahead and create a brand new project here and then insert all the files inside of our application.
>
> **[2:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=136)** So the first thing I'm going to do is go ahead and open up Visual Studio Code, which is the application that I am using because it has a terminal as well inside of the applications.
>
> **[2:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=146)** I have everything that I need as a developer to actually develop with it.
>
> **[2:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=150)** So I'm going to open a terminal like so, and you can use the shortcut control gravity, and then inside a terminal, I'm going to make sure that I am on the desktop.
>
> **[2:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=159)** So right now I am not, so cd desktop, and now I am.
>
> **[2:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=168)** And now what I'm going to do is use the command that I just explained npx create-react-app, and then call this one news.
>
> **[3:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=181)** So first it's going to fetch the actual framework and then leverage the command that I just used from create-react-app.
>
> **[3:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=190)** And if we minimize that window, we're going to see that the application is now being installed inside of our system.
>
> **[3:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=200)** So now that we have the application completely done for us, let's open that folder.
>
> **[3:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=206)** So right now I have a base React obligation.
>
> **[3:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=208)** So if I run it by doing npm-start, you're going to see your base React application.
>
> **[3:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=214)** So what I want to do now is actually leveraged some of the files or a project that I already created inside of the resources folder.
>
> **[3:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=223)** So what I'm going to do is simply copy these files here, copy, and then delete the ones that I have, or has been created for me here.
>
> **[3:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=235)** And I'm going to delete the read me file as well cause I feel that's just extra files that I don't need, delete that and copy and paste.
>
> **[4:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=245)** So note to yourself, you could have just copied and pasted directly from my project here and then just do an npm install and have the project ready for you.
>
> **[4:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=257)** But what I've done here is just to show you how NPX is actually working.
>
> **[4:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=262)** So what I'm going to do now is actually close this, close, this, maximize this, and then make sure that I have that project open inside of Visual Studio Code.
>
> **[4:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=274)** So I'm going to go to my desktop and grab news, like so, and then the next thing I'm going to open a terminal.
>
> **[4:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=281)** So again, terminal new terminal and do a quick npm install because I know that there's a library that doesn't come directly with a base project for React that is actually part of that application here.
>
> **[4:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=294)** And then I'm going to do an npm start.
>
> **[5:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=302)** And this is the application that comes inside of that project.
>
> **[5:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=306)** So basically a list of courses with a header and basically create with a grid list of components here.
>
> **[5:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=314)** So if we take a look at the application directly inside of Visual Studio Code here in the source folder, you have basically the index that links to the components here, basically to the app.js, and then the app.js links into the actual listings.
>
> **[5:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=333)** So let's go there.
>
> **[5:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=335)** And then you have a grid which has a component, which is the single item here.
>
> **[5:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=341)** And it repeats that single item, which is basically this HTML.
>
> **[5:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=346)** And if we look back, this is what this application is.
>
> **[5:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=350)** And now the data is actually directly from here.
>
> **[5:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=354)** So if we look into the data itself, the grid is calling onto, I believe the grid, it comes from the app.js actually.
>
> **[6:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=362)** So we're loading the data on side of the app.js, building our state with it and then feeding it directly inside of our components that needs it.
>
> **[6:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=372)** So we're passing it to the grid and then our grid actually returns how many grid items that we have, or the single component here, how many times we have that data inside of the json file here.
>
> **[6:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=386)** So I believe we have nine elements that are repeated from the data.
>
> **[6:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=393)** So the data is basically picked up from here, building our state with it and then feeding it inside of our components.
>
> **[6:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=401)** So the project is basically a list of courses from LinkedIn learning, built using React and materialize, which is a CSS framework.
>
> **[6:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=410)** A basic application that will turn into a React native application.
>
> **[6:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/introduction-to-the-react-project?u=76281980&t=414)** So let's move on.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (5), npx (5), node (2), make (2), cd (1)
> **Code Keywords:** let (7), delete (3), this, (3), case, (2)
> **Tools:** terminal (8), visual studio (3)
> **Env Vars:** npx (4), lts (2), mpx (2), html (1), css (1)
> **Prerequisites:** install (8)
> **File Paths:** app.js (4), node.js (1)
> **Exercise Files:** download the (2), exercise files (1)
> **UI Navigation:** go to (2)

#### Initiate a React Native project
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=0)** - [Instructor] In this video, we'll get a React Native project started and get a mobile application running on iOS.
>
> **[0:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=6)** We'll also probably set up hot reloads so the app automatically updates as we make changes.
>
> **[0:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=13)** So let's go to the documentation page on [reactnative.dev/docs/environmentsetup](https://reactnative.dev/docs/environmentsetup).
>
> **[0:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=22)** So when you get to the main React Native page, all you have to do is go to get started and then click into their own section here.
>
> **[0:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=34)** So basically this is the setup part.
>
> **[0:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=37)** And then what you need to do is scroll down and select React Native CLI Quickstart.
>
> **[0:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=43)** The reason why we're using this one is because this allows for the most customizable experience.
>
> **[0:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=49)** So you can add libraries and things like that very easily without ejecting.
>
> **[0:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=53)** If you want a very simple start or you simply want to learn without leveraging any other libraries, you can use the Expo by Quickstart, which is actually a little bit faster than the React Native Quickstart here.
>
> **[1:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=69)** But for our case, we're going to use this one.
>
> **[1:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=72)** And basically what you want to do at this point, and I'm not going to go through every single stages because I'm not an expert on every single systems here.
>
> **[1:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=82)** So I'm a heavy user of Mac OS and I've done a little bit of Windows with Android, but basically, in this course, we're going to do Mac OS with iOS.
>
> **[1:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=92)** So once you selected the operating system that you're on, then select the target OS, then go through all the installations here.
>
> **[1:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=102)** I've actually installed Homebrew, and then I've installed Node here and then Watchman.
>
> **[1:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=108)** So follow the instructions based on your operating system and what is the target OS for the mobile application.
>
> **[1:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=115)** Once you've went through this, there are a few things that I want to mention for Xcode and iOS.
>
> **[2:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=123)** So what you need to do once you've installed everything above here, what you need to do is open Xcode and go into the preferences.
>
> **[2:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=137)** And first, you need to have a simulator.
>
> **[2:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=141)** So make sure you go into components and select a simulator, download it, and then install it.
>
> **[2:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=148)** Also, what you need to do is go to locations, click here, command line tools and select something.
>
> **[2:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=155)** So if there's nothing selected, please make sure you select it.
>
> **[2:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=159)** You may also have to install a few things when you first open Xcode, if you've never opened it before.
>
> **[2:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=167)** So once you're done with all this, you've installed all this, you've installed CocoaPods, now it's time to start our first React application.
>
> **[2:56](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=176)** So let's go ahead and minimize that.
>
> **[3:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=180)** What I'm going to do is actually open VScode, which is going to be the tool that I'm going to use to edit the application.
>
> **[3:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=188)** So I'm going to go ahead and open VScode.
>
> **[3:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=193)** So what I have right now is the actual web project.
>
> **[3:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=196)** And what we're going to do is leverage a lot of the codes from the web project into the React Native application.
>
> **[3:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=202)** So let's go ahead and open a second window
>
> **[3:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=210)** and I'm going to bring up the terminal.
>
> **[3:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=213)** So click on your terminal and let's take a look at where we're at.
>
> **[3:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=218)** And let's make sure we are on the desktop, at least from my part, because basically what I want to do is create the React Native application on my desktop.
>
> **[3:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=230)** So basically go to the directory where you want to create your application.
>
> **[3:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=234)** Once you're in there, what we're going to do is leverage the NPX command.
>
> **[4:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=241)** If you're not familiar with NPX, it's basically MPM, but instead of having to install the framework or the tools that you are going to use locally first, and then create your new application, what it's going to do with NPX, it's going to download in a folder, a temporary folder, what we need to create our new project.
>
> **[4:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=265)** And once we're done creating our project, it's going to empty that folder.
>
> **[4:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=269)** So it's very useful when you want to create projects and not have to have all that extra stuff on your local system.
>
> **[4:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=277)** So let's go ahead and do NPX React Native init,
>
> **[4:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=285)** which basically inits a brand new application, and the name of the application.
>
> **[4:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=290)** So in this case, I'm going to call this newsNative.
>
> **[4:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=294)** So we already have our news folder here.
>
> **[4:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=298)** What I want to do is create a news native, which is going to be our native app.
>
> **[5:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=306)** And let's go ahead and do that.
>
> **[5:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=311)** So now that we have our application done, what we're going to do now is run it.
>
> **[5:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=316)** But before we do that, I want to make sure that we have it open into our editor.
>
> **[5:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=321)** So I'm going to click on Explorer, open folder, and select the right project, use native, open that up.
>
> **[5:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=334)** Perfect.
>
> **[5:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=335)** And this is the application.
>
> **[5:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=337)** So we have iOS, Android, local stuff, and then we have our application, which is the app.JS file here.
>
> **[5:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=344)** So if you click here, you're going to have basically the code for the first component that we're going to see on screen.
>
> **[5:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=354)** So if you take a look at what are the components that we've imported, these are all the components that we've imported and that we're leveraging styles and creating all these different sections here.
>
> **[6:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=371)** So let's go ahead and load that application.
>
> **[6:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=373)** So what I'm going to do is bring up the terminal again.
>
> **[6:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=378)** And what I'm going to do now is actually run the command to start the application.
>
> **[6:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=383)** But this is where you have several options.
>
> **[6:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=386)** So if you are running this application for Android, you need to run a different command than if you were actually running an iOS application.
>
> **[6:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=396)** So what you need to do is NPX react native for the actual command and then run the name of the actual application you want to run.
>
> **[6:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=410)** In this case, I'm going to run iOS.
>
> **[6:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=413)** So make sure you have all this stuff installed from the instructions on the documentation.
>
> **[6:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=419)** And then when you're ready, you have the application running here.
>
> **[7:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=422)** You can go ahead and run this.
>
> **[7:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=424)** And by running this, the simulator is going to bring the simulator that you've installed inside of Xcode and run your application.
>
> **[7:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=433)** So let's go ahead and do that.
>
> **[7:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=436)** So this is what the application looks like.
>
> **[7:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=439)** So if you make any changes into the editor here, what you could do after that is do Command + R or basically load the debug section and click reload.
>
> **[7:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=450)** And what it's going to do is make the changes directly into the application, based on what you've just done here.
>
> **[7:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=455)** So let's go ahead and basically edit this area here.
>
> **[7:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=460)** What I'm going to do is go to this section.
>
> **[7:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=465)** So read the docs to discover what to do next.
>
> **[7:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=468)** So let's change this to something else.
>
> **[7:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=469)** So I'm going to do. "Welcome to your application".
>
> **[7:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=478)** And then what we're going to do is save this and then bring up the simulator and do Command + R, and you can see right here, Welcome to your application.
>
> **[8:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=494)** So we got our project ready to go and we can start.
>
> **[8:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initiate-a-react-native-project?u=76281980&t=498)** So let's move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this, (4), case, (3), this. (1), else. (1)
> **CLI Commands:** make (8), npx (5), node (1)
> **UI Navigation:** go to (5), select the (2), click on (2), scroll down (1)
> **Code Identifiers:** ios (6), newsnative (1)
> **Env Vars:** npx (5), cli (1), mpm (1)
> **Prerequisites:** install (3), set up (1), setup (1), you need to have (1), make sure you have (1)
> **Tools:** terminal (3), command line (1)
> **Documentation:** the documentation (2), the docs (1)

#### Overview of the React web code
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=0)** - [Instructor] In this video, we'll explore or current web project.
>
> **[0:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=3)** Its structure and its code to understand what we have to convert to React Native.
>
> **[0:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=8)** This way we'll be better suited to understand how to structure our React Native project.
>
> **[0:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=13)** Also keep in mind, if you don't have access to our exercise files and use your own project, understanding where we come from we'll give you a better understanding of how this applies to your own project.
>
> **[0:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=25)** So the React web project was built from a create-react-app.
>
> **[0:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=29)** Therefore, the folder structure is minimal and we don't see most of the webpack settings and dependencies involved.
>
> **[0:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=36)** However, ejecting the React project, in this case, won't add any information we would need for the conversion.
>
> **[0:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=44)** So if we take a look at the file structure, we have the public folder where we have our index.html.
>
> **[0:51](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=51)** We have our components.
>
> **[0:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=53)** So let me just make that a little bit bigger.
>
> **[0:56](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=56)** So we have our components.
>
> **[0:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=58)** We have listings, which has the Grid and the Single item for the Grid.
>
> **[1:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=63)** We have our app and we have our test.
>
> **[1:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=66)** And finally, we have our data in a separate folder inside of the source folder, along with your typical index.js and CSS.
>
> **[1:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=76)** So what we're going to do is restructure this a bit, make sure the application still works as we make those changes.
>
> **[1:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=84)** So you want to make sure you have the project running.
>
> **[1:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=86)** So let's go ahead and go into the terminal and make sure that that project is running.
>
> **[1:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=91)** So do an npm start.
>
> **[1:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=97)** And then make sure the application is running.
>
> **[1:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=99)** So right now it's running properly, so let's go ahead and make the changes.
>
> **[1:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=104)** So the first thing I'm going to do, inside of the source folder, I'm going to create the task folder because we have that inside of a React Native project.
>
> **[1:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=114)** I want to do something similar inside of our web project.
>
> **[1:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=117)** So let's go ahead and on the source folder, create a new folder.
>
> **[2:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=122)** This is going to be called tests.
>
> **[2:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=124)** And then we're going to move our tests file here.
>
> **[2:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=129)** Yup.
>
> **[2:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=131)** And in theory, when you make moves like that Visual Studio Code should make the updates for you.
>
> **[2:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=136)** If it doesn't, then we'll do it manually.
>
> **[2:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=138)** So I'm going to save that.
>
> **[2:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=140)** And then do the same for our tests.
>
> **[2:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=146)** Right here.
>
> **[2:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=149)** And that's pretty much it for the tests.
>
> **[2:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=152)** Now, the next one I want to create is the styles.
>
> **[2:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=155)** So inside of the source folder, I want to create a new folder that I'm going to call styles.
>
> **[2:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=169)** And then I'm going to move my App.css and also my index.css.
>
> **[2:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=179)** Right here.
>
> **[3:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=181)** So now I have an issue.
>
> **[3:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=183)** Fail to compile.
>
> **[3:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=185)** So we want to make sure that the App.css is actually called properly in the proper element.
>
> **[3:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=191)** 'Cause right now it's being called by somebody and it's not basically loading properly.
>
> **[3:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=198)** So let's make sure we do that.
>
> **[3:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=201)** So right now this import is calling App.css, but it's not in the right folders.
>
> **[3:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=205)** So what I'm going to do is simply delete all this.
>
> **[3:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=209)** Like so.
>
> **[3:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=211)** And go out of the components.
>
> **[3:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=216)** Go into styles and then call App.css.
>
> **[3:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=226)** Now the second one that is an issue is the index.
>
> **[3:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=229)** So let's go into the index and make sure that we are properly blinking.
>
> **[3:56](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=236)** So let's go into, I believe is styles again, and then index.css.
>
> **[4:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=245)** Save that.
>
> **[4:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=246)** And we should be back to normal.
>
> **[4:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=248)** So now that we've created our CSS and our test files and everything is in its proper folder.
>
> **[4:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=256)** So we have our tests, we have our styles, we have our data and we have our components right here.
>
> **[4:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=261)** We're mostly ready to upload this.
>
> **[4:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=265)** The next thing I want to do is to make sure that my prop types are properly done inside of my App.js component.
>
> **[4:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=272)** So if we scroll down into the grid actually, not the app.
>
> **[4:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=279)** We just have this.
>
> **[4:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=281)** So what I want to do is make sure that my prop types are probably done here.
>
> **[4:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=286)** So where I want to make sure that the prop types are properly done is in the Single.
>
> **[4:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=292)** So what I'm going to do here, as opposed to just do item and then have proper object required.
>
> **[4:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=299)** So basically this is telling React that for the item, I have an object that will pass, but let's do this properly.
>
> **[5:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=308)** So what I'm going to do now is do PropTypes.shape.
>
> **[5:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=316)** And let's make sure we shape what we want inside of that object.
>
> **[5:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=320)** So we want a title.
>
> **[5:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=323)** And this should be PropTypes.string.
>
> **[5:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=329)** Now the second one, I want a release_date.
>
> **[5:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=334)** And this should be a PropTypes.string again.
>
> **[5:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=339)** And what I'm going to do is simply copy that one and paste it a couple of times.
>
> **[5:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=350)** 'Cause it's all strings for the rest of the prop types.
>
> **[5:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=355)** So views.
>
> **[5:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=357)** This one is description.
>
> **[6:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=363)** And finally we have a link.
>
> **[6:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=372)** So basically I shaped the prop types properly to match what we have in our data right here.
>
> **[6:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=378)** So if we look at what we have here, we have title, description, link, released_date, and so on, so forth.
>
> **[6:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=387)** Okay.
>
> **[6:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=389)** After you've properly corrected the imports and index, App.js, and everything, you want to make sure that the app is running.
>
> **[6:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=397)** And we want to go back to a web browser and making sure that everything is working.
>
> **[6:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=403)** And it's working fine.
>
> **[6:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=406)** So now that we have everything that we need on the web, and we're ready to take that to the next level with React Native.
>
> **[6:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-web-code?u=76281980&t=414)** Let's move on.

> [!info]- Semantic Content
>
> **CLI Commands:** make (17), npm (1)
> **Code Keywords:** let (10), this. (3), case, (1), public (1), finally, (1)
> **File Paths:** app.css (4), index.css (2), app.js (2), index.html (1), index.js (1)
> **Code Identifiers:** release_date (1), released_date (1)
> **Env Vars:** css (2)
> **Tools:** terminal (1), visual studio (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)

#### Overview of the React Native structure
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=0)** - [Instructor] In this video, we'll explore our React Native folder structure and add our source folder and the first component.
>
> **[0:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=7)** So let's get to it.
>
> **[0:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=8)** So let's go ahead and create the folders that we need.
>
> **[0:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=11)** So inside of the main directory, you want to create the source folder where we're going to put the components, the styles, et cetera.
>
> **[0:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=20)** So let's go ahead and create a new folder.
>
> **[0:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=23)** And I'm going to call this src.
>
> **[0:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=26)** And then inside of src, we're going to create components, styles, and data.
>
> **[0:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=31)** Pretty much like our web project.
>
> **[0:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=34)** So let's go ahead and right click, or you can click here.
>
> **[0:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=38)** New Folder.
>
> **[0:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=40)** And the first one is components.
>
> **[0:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=43)** And if you see this, it's okay, that means that we have a sub folder inside of src.
>
> **[0:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=48)** But because we don't have any other folders inside of src, it basically creates the structure like that.
>
> **[0:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=54)** So that's okay.
>
> **[0:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=55)** All you have to do is click on src here.
>
> **[0:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=58)** Right click, New Folder, create styles, and now you're going to have two folders inside of src.
>
> **[1:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=66)** It's just a way to minimize the amount of stuff that we see on screen.
>
> **[1:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=70)** And basically is something that Visual Studio Code does.
>
> **[1:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=74)** All right.
>
> **[1:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=75)** So let's create a third folder.
>
> **[1:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=78)** And I'm going to call this one data.
>
> **[1:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=81)** So let's go ahead and move at least the data and the styles inside of that project.
>
> **[1:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=87)** And because we're not using it with a component yet, it's fine.
>
> **[1:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=92)** So we're not going to get any errors yet.
>
> **[1:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=94)** But let's just move them in here so that at least we can use them.
>
> **[1:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=98)** So let's go ahead and do that.
>
> **[1:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=99)** So what I'm going to do is minimize this.
>
> **[1:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=105)** And use the folder structure here.
>
> **[1:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=109)** And grab from news here, from the src folder, I'm going to grab the data.
>
> **[1:56](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=116)** So I'm going to copy that and I'm going to put it inside of my src folder inside of data.
>
> **[2:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=122)** Like so.
>
> **[2:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=123)** And then let's go ahead and copy the styles as well.
>
> **[2:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=126)** So App.css and index.css.
>
> **[2:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=130)** Let's do that.
>
> **[2:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=132)** Copy.
>
> **[2:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=133)** And let's just put them temporarily here.
>
> **[2:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=136)** Okay, perfect.
>
> **[2:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=138)** So the next thing I want to do, and I'm going to break the application by doing that, is to move the App.js inside of our components here.
>
> **[2:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=147)** So by doing that, you're going to basically break the link in between App and the index.
>
> **[2:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=153)** Well, let's do that inside of VSCode.
>
> **[2:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=155)** So I'm going to close all this.
>
> **[2:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=158)** Bring back VSCode.
>
> **[2:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=161)** Maximize it.
>
> **[2:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=162)** And while we're on it, let's make sure we can see the simulator.
>
> **[2:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=169)** Like so.
>
> **[2:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=172)** Perfect.
>
> **[2:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=173)** And now let's move App.js inside of our components.
>
> **[2:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=178)** As you can see, now we just broke the application.
>
> **[3:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=182)** So all we have to do to fix this is to go into the index and make sure we load from the right folder.
>
> **[3:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=188)** So what I'm going to do, basically like we've done for the web app, is to go and fix this.
>
> **[3:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=195)** So from.
>
> **[3:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=197)** And let's go into src.
>
> **[3:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=202)** And let's go into components.
>
> **[3:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=205)** And load App.
>
> **[3:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=207)** Save.
>
> **[3:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=209)** And now our application is back and running properly.
>
> **[3:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=214)** So basically now we've restructured the React Native application to match a little bit of the web app.
>
> **[3:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/overview-of-the-react-native-structure?u=76281980&t=221)** And we can move on now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this. (3), this, (1), from. (1)
> **File Paths:** app.js (2), app.css (1), index.css (1)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 2. Conversion of Views

#### Initial setup of extra libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=0)** - [Instructor] To bring a similar style to our native application, we'll install a few elements and set up our main application component.
>
> **[0:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=7)** So let's get to it.
>
> **[0:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=9)** So if you don't have the application running right now, make sure that you go into the terminal and I'm going to bring it by doing control gravity, or you can bring it by clicking on terminal, new terminal.
>
> **[0:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=22)** And once you have it, as you can see our already have my application running, but if you don't, what you could do is do MPX React Native, run iOS or run Android.
>
> **[0:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=36)** Once this is running, this is what you should see and welcome to your application is the last thing that we've done with the application.
>
> **[0:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=43)** So let's go ahead and install a few things.
>
> **[0:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=45)** I'm going to bring back my terminal.
>
> **[0:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=47)** And what I'm going to do is install a few libraries inside of the application.
>
> **[0:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=55)** And you can do npmi, or install, it works both ways.
>
> **[0:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=59)** So the first thing or library that you need to install is called paper.
>
> **[1:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=64)** So it's called React Native Paper, and that's going to be something that we'll leverage in the next chapter to do styling and do our cards inside of our application.
>
> **[1:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=75)** So basically apply material design, liked the web application inside of React Native.
>
> **[1:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=81)** And this library requires another one, which is called vector icons.
>
> **[1:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=86)** So this one is called, the official name is React Native Vector Icons, which basically allows you to use a lot of icons inside of React Native.
>
> **[1:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=97)** So basically the library React Native Vector Icons is from this guy here, and he has been maintaining that one for a while.
>
> **[1:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=107)** And it's a very cool library that allows you to have a whole lot of icons that you can leverage inside of your application.
>
> **[1:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=113)** So, I highly recommend that you use that library because it has a lot of stuff that you can use.
>
> **[1:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=119)** So font awesome, and a whole bunch of others.
>
> **[2:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=124)** So let's go ahead and install that.
>
> **[2:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=128)** Once these are installed, you need to do one thing to make sure that this works inside of React Native is link vector icons.
>
> **[2:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=137)** And that's very important in order to see them here.
>
> **[2:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=141)** So the way to do this is do NPX React Native, which basically allows us to do the React Native command link, and then to name React Native Vector Icons like so.
>
> **[2:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=161)** So this will actually link inside of the projects, the vector icons, and we'll be able to leverage them inside of our library.
>
> **[2:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=170)** And you can see that this process as successfully done here.
>
> **[2:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=174)** Okay, so now that we've done this, we're set up with the libraries that we need and all you have to do at this point is close this, and we're going to get back to this later on in this course.
>
> **[3:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=185)** So if you wonder if you have them inside of the package.Jason, you just take a look and these are in there.
>
> **[3:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=192)** The next thing I want to explore and make sure that you understand is the app.json file here.
>
> **[3:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=198)** So this file is basically what is the name of your application?
>
> **[3:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=202)** So if we click on our assimilator on the house icon here, we're going to see that news native is the name of our application, but that's really not the name that you would want for your specific application.
>
> **[3:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=216)** And this is where you change that name.
>
> **[3:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=219)** So this is the metadata, where you can actually change the internal name of the application, but the display name is the display name here.
>
> **[3:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=229)** So if you change this to something else, you're going to see something else in here.
>
> **[3:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=233)** So if you want to go ahead and change this to news native, but separated as opposed to one.
>
> **[3:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=239)** So let's go ahead and do that, like, so, and then save this.
>
> **[4:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=245)** It's going to change it inside of the application the next time you rebuild it.
>
> **[4:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=249)** So right now, it's not going to show out till you rebuild.
>
> **[4:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=253)** And if you want to rebuild, you basically do the start application again from the terminal, like we've done before, but I'm going to do this later on.
>
> **[4:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=262)** So for now let's keep it as is.
>
> **[4:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=264)** So I'm just going to open the application again, close this file.
>
> **[4:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=269)** And now we're going to go inside of our index and set up this file to accept the paper library that we just set up with our install here.
>
> **[4:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=280)** Let's go ahead and do that.
>
> **[4:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=281)** So basically what I'm going to do is first import a few things here.
>
> **[4:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=288)** So I'm going to import provider as paper provider, from React Native paper like so.
>
> **[5:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=307)** And now I'm able to leverage this inside of my application.
>
> **[5:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=310)** And what I'm going to do now is create a component very quickly.
>
> **[5:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=315)** So let's go ahead and do that.
>
> **[5:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=316)** So I'm going to create a functional component.
>
> **[5:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=327)** And I'm going to return.
>
> **[5:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=330)** And I'm going to leverage paper provider and then inside of it, I'm going to insert the app component like so.
>
> **[5:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=346)** And right now, if you're seeing errors like this, this is basically ESLint telling me that I don't have enough space or I'm not using the proper space.
>
> **[5:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=355)** I'm not going to pay attention to my space that I'm using tabs or spaces inside of the application.
>
> **[6:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=362)** As long as it works, that's all that matters.
>
> **[6:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=364)** If I make major mistakes or if I do anything, the application is going to tell me anyways.
>
> **[6:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=370)** So I'm going to save this, but now it's not going to work.
>
> **[6:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=373)** And the reason being is because I haven't passed this here.
>
> **[6:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=377)** So right now, it's still passing app.
>
> **[6:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=379)** So basically if I have app, that's imported, that's what's being passed here.
>
> **[6:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=384)** So I basically don't have anything that I've just coded passed to the actual application.
>
> **[6:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=390)** So what I need to do now is change this to main because I've created a new main component, which leverages app, and basically encapsulates with the theme or paper with the application.
>
> **[6:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=404)** So I'm going to basically change this to main, like so, and save.
>
> **[6:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=413)** So now that I've changed this to main, the obligation hasn't changed, but it's basically the application, but now I have access to paper.
>
> **[7:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=421)** And we'll see this once we start applying paper components, if it's working or not.
>
> **[7:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/initial-setup-of-extra-libraries?u=76281980&t=426)** Okay, so now that I have all the libraries that I need, that I set up my main application, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (4), while. (1), else, (1), this. (1)
> **Prerequisites:** install (7), set up (5)
> **CLI Commands:** make (4), npx (1)
> **Tools:** terminal (5)
> **Definitions:** is called (3)
> **Env Vars:** mpx (1), npx (1)
> **UI Navigation:** click on (1), open the (1)
> **File Paths:** app.json (1)

#### Create a FlatList component
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=0)** - [Instructor] Now let's get started on working on our main view and a list component.
>
> **[0:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=5)** So if you remember how the application works or how it looked like for the website of things, so let's go ahead and grab our news project here and open a new studio project.
>
> **[0:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=18)** And if we look inside of the application, we add the app, which basically passed the grid items.
>
> **[0:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=26)** And then the grid items had the single that was repeated how many times we had data inside of our data file.
>
> **[0:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=33)** So let's go ahead and do something similar here.
>
> **[0:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=36)** So what we're going to do is go into the source folder and then go into our components and then into the app.
>
> **[0:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=44)** And I'm just going to put that back here.
>
> **[0:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=47)** And what I'm going to do is kind of erase a lot of the stuff that we have on that application.
>
> **[0:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=53)** And what I'm going to do is even remove the styles because we're going to add our own styles later on, after we've done the actual application or added all the components inside of our view.
>
> **[1:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=67)** So I'm going to go ahead and literally remove everything all the way up to the imports right here and just leave React.
>
> **[1:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=76)** And what I'm going to do is start creating our main application here.
>
> **[1:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=81)** And as I create what I need, I'm going to add or import what I need as well.
>
> **[1:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=87)** So let's go ahead and do that.
>
> **[1:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=88)** So I'm going to basically create the app again, which is a functional component, so basically just a function like so.
>
> **[1:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=98)** And I don't even need to do a return on this one because it's a functional component.
>
> **[1:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=102)** So I'm going to start with a view.
>
> **[1:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=105)** So the first thing you need inside of a React application, a React Native application actually, is a view.
>
> **[1:51](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=111)** So if you're going to have multiple elements inside of the application, you need a top level component.
>
> **[1:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=118)** And in this case, the view is the best candidate for that.
>
> **[2:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=121)** So I'm going to have a menu and I'm going to have cards that are going to be repeated through a FlatList, so might as well start with a view.
>
> **[2:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=130)** And inside of our view, we're going to have a FlatList.
>
> **[2:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=134)** It used to be called list view, and now it's called FlatList because they changed basically the component that was behind it.
>
> **[2:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=142)** And it's better. It has a better performance.
>
> **[2:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=145)** And now it has a better structure, how you actually compose it.
>
> **[2:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=149)** So let's go ahead and do that.
>
> **[2:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=150)** So I'm going to import a few things from React Native.
>
> **[2:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=156)** So I'm going to first import the FlatList.
>
> **[2:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=161)** I'm going to import a view and might as well import the style sheet right away, which we'll need later on.
>
> **[2:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=170)** And lo and behold VS code actually completes that for me because it knows that I have that imported.
>
> **[2:56](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=176)** That's a very neat feature of that application.
>
> **[3:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=180)** So let me just minimize this for now so we can only see the code and we'll get back if we need anything else.
>
> **[3:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=186)** So basically I just click on the explore and minimize that so I have more screen estate for coding.
>
> **[3:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=193)** So now let's go ahead and create our FlatList.
>
> **[3:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=197)** So basically the FlatList is a component that you can leverage to repeat a list of elements.
>
> **[3:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=204)** So basically this is what we need because we need a list of all the courses that we have inside of our data.
>
> **[3:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=210)** So if we look back at our data here and courses.JSON, we have multiple elements that we need to repeat inside of a list, and this is what the FlatList is for.
>
> **[3:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=221)** So let's go ahead and start creating our FlatList and we need a few things, or it takes a few props.
>
> **[3:51](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=231)** The first one is the data.
>
> **[3:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=232)** So it needs to be passed some data in order to repeat something.
>
> **[3:56](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=236)** So it's called data, obviously, and let's go ahead and pass our data from our data.
>
> **[4:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=244)** So let's go and import data from, and let's go and grab data, of course it's .JSON.
>
> **[4:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=256)** So now we're able to pass that here.
>
> **[4:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=260)** If you want to basically have something that is more specific to the data that you're passing, you can do that instead.
>
> **[4:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=271)** And also as a component inside of FlatList, we need a function that will repeat the elements that are inside of the data.
>
> **[4:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=280)** So what we're going to do is basically create a function right here.
>
> **[4:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=288)** So render item,
>
> **[4:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=297)** and then inside of that render function, we need to basically pass item and how many items we have, we can render it as text, and so on, so forth.
>
> **[5:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=310)** So in this case, we're going to render it as text.
>
> **[5:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=314)** So let's go ahead and import the text element from the library.
>
> **[5:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=324)** And we're going to leverage here, right here.
>
> **[5:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=328)** So the tax component allows us to actually list the text inside of React Native.
>
> **[5:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=334)** So in this case, let's go ahead and render item.title.
>
> **[5:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=338)** So we're going to leverage a title inside of our data here.
>
> **[5:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=342)** So this element.
>
> **[5:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=344)** So once we repeat that, it's going to repeat that inside of our view.
>
> **[5:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=350)** So once you have that, you have everything that you need to actually render this.
>
> **[5:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=353)** So let's save that.
>
> **[5:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=355)** And as you can see, we have all the titles of the courses listed inside of our view.
>
> **[6:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=361)** So we built the basic functions of an application here.
>
> **[6:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=366)** So we have our view.
>
> **[6:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=368)** We have an element that repeats our data inside of our application here.
>
> **[6:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-a-flatlist-component?u=76281980&t=374)** It looks ugly, but we're going to be working on this in the next few videos and the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (4), case, (3), pass (3), else. (1)
> **Definitions:** is a  (3)
> **Env Vars:** json (2)
> **Cross-References:** in the next (1), next chapter (1)
> **File Paths:** courses.json (1)
> **Tools:** vs code (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Create the action and button link
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=0)** - [Instructor] Now in the original web application, if we click on the link of the course, it brings us to the actual page of the course.
>
> **[0:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=8)** But how we would go about creating such a link in a native application?
>
> **[0:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=13)** So let's explore that.
>
> **[0:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=15)** So we'll continue working on the app.js file right here.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=19)** So the first thing we need is a function.
>
> **[0:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=22)** So that function will allow us to actually click on something and then get to a page.
>
> **[0:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=29)** So let's go ahead and create the function.
>
> **[0:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=31)** So I'm going to create that first and I'm going to call that application handleClick.
>
> **[0:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=39)** So that needs a link and then we need something from React Native in order to actually use a linking function inside of React Native, we need to import the actual Linking from React Native, this guy.
>
> **[0:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=59)** So let's go ahead and do that.
>
> **[1:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=61)** So once we have that, we can actually create a linking function.
>
> **[1:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=65)** So this method allow us to create a link inside of iOS and Android with a simple function.
>
> **[1:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=74)** So let's go ahead and do this.
>
> **[1:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=76)** So if we can open the URL, then pass the link, and then... So basically what we're doing here is if the link is supported, then allow us to cap and open something.
>
> **[1:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=98)** Otherwise, a console is going to tell us that we cannot open the link.
>
> **[1:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=102)** So this is basically what we're doing here.
>
> **[1:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=107)** And then pass the link else console.log "Don't know how to open URL" and you can even put the URL link so somebody knows what it can open.
>
> **[2:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=135)** Now let me just close again, the explorer.
>
> **[2:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=137)** So we have more screen estate.
>
> **[2:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=141)** So I'm just going to put my, perfect.
>
> **[2:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=144)** So now that we have the function, let's go ahead and actually leverage it.
>
> **[2:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=151)** So what we're going to do inside of our view here inside of the flat list.
>
> **[2:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=156)** So here, where we render our text, what we're going to do is create, instead of a text, we're going to pass the link or the function, and we're going to change the txt to a button.
>
> **[2:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=172)** And we're going to leverage that later on.
>
> **[2:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=175)** Let's go ahead and change that to a button.
>
> **[3:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=182)** And obviously we're going to have a non press function
>
> **[3:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=190)** and then this handleClick, and then we're going to pass the item.link, Tap to view course.
>
> **[3:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=204)** So once I save this, all we're going to see is 'Tap to view course' multiple times here.
>
> **[3:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=209)** But if you tap on any of them, it's going to open something inside of a browser window inside of our application, because we created a button that will open inside of another page.
>
> **[3:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=222)** What I want to do is create that button now, which we'll leverage later on inside of a card that will add to the application.
>
> **[3:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=232)** But let's save this.
>
> **[3:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=234)** So now the one thing that we need is actually import the button, cause we don't have a button in here.
>
> **[3:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=239)** So let's go ahead and do that and this is from React Native Paper, in this case.
>
> **[4:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=246)** So we're going to start doing some paper stuff, but we're not going to go too deep inside of those things.
>
> **[4:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=254)** So let's import a button here and you can do the same thing from React Native, but we're going to import it from React Native Paper, so we can leverage this one later on.
>
> **[4:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=269)** And as you can see now, we see 'Tap to view course,' 'Tap to view course.'
>
> **[4:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=273)** If we tap on any of those, it's going to open the actual link inside of a webpage, which is what we want.
>
> **[4:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=280)** But right now it looks ugly because we haven't added any styles to this application, which will come later on.
>
> **[4:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=287)** But this is basically what we needed to create for this particular video.
>
> **[4:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/create-the-action-and-button-link?u=76281980&t=292)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (9), pass (4), this. (2), continue (1)
> **UI Navigation:** open the (3), click on (2)
> **Code Identifiers:** handleclick (2), ios (1)
> **Env Vars:** url (3)
> **File Paths:** app.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add new element in the listing
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=0)** - [Instructor] Okay, so I have a challenge for you.
>
> **[0:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=9)** Now that we have one element rendering, how would you go about rendering a second element from the list of items from our data in React Native?
>
> **[0:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=18)** So if we go into Explore and then go into our data, we have multiple elements here.
>
> **[0:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=25)** We have a category, we have a title, we have a description and so on and so forth.
>
> **[0:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=30)** Pick any of these categories and render them inside of a text.
>
> **[0:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=36)** So we should see tap to view course and then a text that you will render from your selected element here.
>
> **[0:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/challenge-add-new-element-in-the-listing?u=76281980&t=44)** So I challenge you to create a simple text with one of the elements here and render it inside of our view, and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add new element in the listing
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=0)** - [Instructor] Okay, so let's take a look at the solution to our challenge.
>
> **[0:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=10)** So as you can see, and you can grab the code from the exercise files, what I basically done is add the title back into our view here.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=19)** And what I've done is basically add a text and then the item dot title, which we had before.
>
> **[0:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=25)** But in order to do two elements inside of this render function here inside of the flatlist, you need to have something that encapsulates the other components.
>
> **[0:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=39)** So you have to have a view component at the top.
>
> **[0:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=42)** So if you add something here, you need to have the view above that little text here.
>
> **[0:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=50)** So basically this is what I've done.
>
> **[0:51](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=51)** I added a view, and then I added the text back with item dot title, and that's how I did it.
>
> **[0:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=58)** So now I have the title plus tap to view course inside of our view.
>
> **[1:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/solution-add-new-element-in-the-listing?u=76281980&t=64)** So if you've done anything differently and it works, well basically you've succeeded in rendering a second element, but all you have to do is to add this element here or another and render it inside of the flatlist.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Prerequisites:** you need to have (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Conversion of Styles

#### Options for styling
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=0)** - [Instructor] In this chapter, we're going to start working on styling our application to look more like the original web app, leveraging paper, and also changing some steps.
>
> **[0:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=9)** But what are the options available for styling in React Native?
>
> **[0:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=13)** Let's explore that a little bit.
>
> **[0:15](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=15)** The first method is directly in file, and this is what we had before.
>
> **[0:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=20)** So we had the actual styles here inside of our application, and the way to do this, it's basically to create a variable.
>
> **[0:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=28)** So you would create a variable called styles and then leveraging the style sheet from React Native, you would create a new style sheet inside of React directly, here.
>
> **[0:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=43)** And then insert your style in here.
>
> **[0:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=45)** And that's basically how it works.
>
> **[0:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=49)** But the second way to do this, and if your projects become really big and the files are way above a hundred, two hundred lines of code, you are going to want to have your style separate.
>
> **[1:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=61)** And this is where that folder comes into play.
>
> **[1:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=65)** So instead of having app.CSS and index.CSS files, and actually we could delete the index.CSS if we wanted to, we'd have something that would be a JSS file.
>
> **[1:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=77)** So you would have something like appstyles.JS file in here.
>
> **[1:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=87)** And instead of having the styles written that way, you would basically copy this thing here.
>
> **[1:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=95)** So you would have this code inside of app.JS here.
>
> **[1:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=99)** Make sure you import style sheets, so you would have to go back here and import from React Native style sheet, here.
>
> **[1:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=109)** So let's go ahead and copy this line fairly quickly, like so.
>
> **[1:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=117)** Go back here and just import style sheet
>
> **[2:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=131)** and then create your styles, export them at the end, so export styles.
>
> **[2:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=138)** And you want to make sure to give it something that is unique because once you start creating your style sheets separate in the styles folder, you're going to want to have specific name here.
>
> **[2:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=151)** So basically two app styles.
>
> **[2:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=156)** And then let's say, for example, you want to create a style for component one, then you would create your style here.
>
> **[2:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=167)** So let's say something like color, have something like white.
>
> **[2:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=172)** So you would have your first style right here, export your style sheet, and then go into app, and then import your style sheet here, and then apply it.
>
> **[3:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=186)** So do something like that, import styles from styles and then app styles.
>
> **[3:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=198)** And there you go.
>
> **[3:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=199)** So now you can actually apply your styles directly inside of that spreadsheet.
>
> **[3:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=203)** And that's the two methods to do it.
>
> **[3:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=206)** If the project is fairly small, like the one we're doing here, you would do it directly inside of the same file to keep things modular and together.
>
> **[3:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=219)** So I'm going to remove this.
>
> **[3:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=221)** I just wanted to show it to you, what's possible.
>
> **[3:46](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=226)** And save that and then go back to app style and just basically comment that out.
>
> **[3:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=234)** I still have it in my project as an example for you to leverage down the road in the styles folder here, but I'm not going to use it inside of that project, but this is something you can do down the road.
>
> **[4:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=246)** And let me just delete that line to clean up, because what we're going to do is do our styles directly inside of our spreadsheet right here.
>
> **[4:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/options-for-styling?u=76281980&t=258)** So now that we've explored the methods of doing style sheets inside of React Native, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), delete (2), this. (1)
> **File Paths:** index.css (2), app.css (1), appstyles.js (1), app.js (1)
> **Env Vars:** css (3), jss (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Add a bar and update card listing
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=1)** - [Instructor] We'll start leveraging the components available from the paper library.
>
> **[0:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=5)** And if you're wondering, what is this library, this is where you can actually reach it.
>
> **[0:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=10)** Callstack.[github.IO/react-native-paper](https://github.IO/react-native-paper).
>
> **[0:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=16)** And on that page, you're going to see some examples and code snippets.
>
> **[0:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=21)** So if you click on the app bar that we'll leverage later on, you can see code snippets and so on, so forth.
>
> **[0:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=26)** So feel free to explore that library.
>
> **[0:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=29)** And this is basically what we're going to use.
>
> **[0:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=31)** So I'm going to close that window and start working on this ugly application.
>
> **[0:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=38)** So the first thing we're going to do is basically add the app bar.
>
> **[0:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=43)** So let's go ahead and do that.
>
> **[0:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=44)** So the first thing we need to do is import it, and while we're here, let's import everything that we need.
>
> **[0:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=50)** So I'm going to basically need the card, going to need the title, paragraph, may what these are, but we're going to need them.
>
> **[1:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=65)** And then finally the app bar.
>
> **[1:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=69)** Awesome.
>
> **[1:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=70)** So now that we have that, let's go ahead and start adding some stuff in here.
>
> **[1:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=74)** So I'm going to go right below the view online 25.
>
> **[1:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=78)** And again, I'm going to close Explorer to get a little bit more screen estate, and I'm going to add the app bar.
>
> **[1:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=86)** So this is going to be a bar that will be at the top, basically listing courses like our web app.
>
> **[1:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=93)** So let's go ahead and do that app bar.
>
> **[1:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=97)** An app bar is going to have styles later on.
>
> **[1:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=101)** Actually let's not add the styles as of yet.
>
> **[1:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=109)** And let's close the app bar.
>
> **[1:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=113)** And then inside of the app bar, we're going to have our title.
>
> **[1:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=117)** So the title for courses.
>
> **[1:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=119)** So let's go and add app bar dot, and that's how this specific library works.
>
> **[2:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=128)** You add specific things inside of those components and you're basically adding new content.
>
> **[2:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=137)** So in this case, we're going to add a title or new components.
>
> **[2:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=143)** Perfect.
>
> **[2:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=144)** So now we have our title and we have our app bar.
>
> **[2:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=148)** Now the next thing we need to do inside of our flat list, because it looks flat, we need to have a card.
>
> **[2:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=155)** So we're going to leverage a card as opposed to view.
>
> **[2:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=158)** So let's go ahead and eliminate view.
>
> **[2:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=161)** I'm going to basically click option, click on view, and change this to card, like so.
>
> **[2:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=170)** So now we have the card here.
>
> **[2:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=172)** And instead of text, and let's remove it, we're basically going to code this manually.
>
> **[2:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=178)** So we have a few things.
>
> **[3:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=180)** The first thing that we need is the card cover.
>
> **[3:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=183)** So let's go ahead and do that.
>
> **[3:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=184)** So card cover and the source is going to be our URL,
>
> **[3:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=194)** so URI, in this case.
>
> **[3:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=199)** And basically coming from our data, which is a URL of the image of the course.
>
> **[3:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=207)** And close it.
>
> **[3:29](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=209)** Not inside of that, though.
>
> **[3:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=214)** There you go.
>
> **[3:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=215)** Then we're going to need card content.
>
> **[3:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=218)** So let's go ahead and do card.content.
>
> **[3:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=225)** Close that out.
>
> **[3:49](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=229)** And the card content will have a title.
>
> **[3:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=233)** And again, we imported all of this already.
>
> **[3:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=237)** And the title will be what we already use here, so item.title, like so.
>
> **[4:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=248)** And then we'll have a paragraph.
>
> **[4:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=253)** And the paragraph will be the item description, like so.
>
> **[4:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=261)** And this is where we get out of card content.
>
> **[4:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=265)** Then we're going to have our card action.
>
> **[4:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=268)** And this is the button we already created.
>
> **[4:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=272)** So basically we're going to open up this tag element and I'm going to indent it just to show that this is inside of that card action.
>
> **[4:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=285)** And then we're going to close the card action after.
>
> **[4:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=292)** So we have our button, we have our content here, we have the image and we have the card.
>
> **[5:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=300)** So now that we have all this, if we save this, we should see the cards.
>
> **[5:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=307)** So let's debug and that's a good exercise to figure out what's happening here.
>
> **[5:13](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=313)** So the best way to do this is to go into the components stack, to see where the issue could be.
>
> **[5:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=319)** So we scroll down and we're trying to find the component we're working on.
>
> **[5:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=325)** So in this case, we're working on the flat list.
>
> **[5:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=328)** So from the app, we're working on the flat lists.
>
> **[5:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=333)** So obviously this is something in the flat list.
>
> **[5:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=335)** The issue is here, and this is basically the code that we just added.
>
> **[5:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=340)** So something in here is wrong.
>
> **[5:42](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=342)** And I just figured that out.
>
> **[5:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=345)** Action is actions, plural.
>
> **[5:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=348)** So let's go ahead and add actions like so, and save it.
>
> **[5:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=355)** And now the application is back.
>
> **[5:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=358)** Yay!
>
> **[6:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=360)** And we have our listings.
>
> **[6:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=361)** So now we have everything in a much better way.
>
> **[6:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=365)** And it looks exactly the same as our web application.
>
> **[6:09](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=369)** We have our listing here in the materialize or material design style, and we have the tab to view course like we have before.
>
> **[6:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=379)** Now the problem here is the top bar, here.
>
> **[6:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=382)** So we can't see courses.
>
> **[6:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=384)** We added courses here but we can't see it.
>
> **[6:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/add-a-bar-and-update-card-listing?u=76281980&t=387)** So we're going to be working on that in the following video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), case, (2), this, (2), case. (1)
> **Env Vars:** url (2), uri (1)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** find (1)
> **URLs:** [github.io](https://github.io) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Finalize the styles
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=0)** - [Instructor] So let's finalize our styles for this application here.
>
> **[0:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=4)** As we explored styles previously, we can do either a file separate to the actual main file, or the main component, or we can do basically inside of the same file.
>
> **[0:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=17)** And that's exactly what we're going to do.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=19)** Now, how does tiles work inside of React Native?
>
> **[0:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=24)** Basically by leveraging the stylesheet.create function inside of React Native, you basically have access to CSS styles that you're familiar with as a web developer.
>
> **[0:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=36)** The only difference is it's written differently.
>
> **[0:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=39)** So let me show you.
>
> **[0:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=41)** So let's go ahead and fix our bar here, 'cause that's fairly annoying, especially from this simulator, as we can see, we have the nudge for the speaker right here.
>
> **[0:51](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=51)** So let's basically fix that.
>
> **[0:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=54)** So what am I going to do now is create styles for that top bar.
>
> **[0:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=58)** So we have the app bar right here and we're going to create styles for that.
>
> **[1:04](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=64)** So I'm going to basically create a bar style and I'm going to add a margin to the top.
>
> **[1:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=72)** So this bar goes a little bit lower or basically right here.
>
> **[1:17](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=77)** And if you're familiar with CSS styles, that would be margin top.
>
> **[1:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=82)** And the way to write that in React Native is by doing marginTop, like that.
>
> **[1:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=90)** So basically in CSS styles, you would do something different.
>
> **[1:34](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=94)** So if we were to create a style sheet right here, let's do app.CSS and then do .bar.
>
> **[1:44](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=104)** And then we would do margin-top.
>
> **[1:47](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=107)** This is how you would write the margin top and then add 50 pixels.
>
> **[1:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=112)** So that's how you would do it inside of a CSS style.
>
> **[1:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=115)** So basically the only difference in between the styles, NCSS and the styles with the stylesheet.create function inside of React Native is basically removing that dash and then do top like that.
>
> **[2:10](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=130)** And then you would be able to do that right here.
>
> **[2:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=134)** So marginTop, like so, and then do 50.
>
> **[2:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=139)** You don't have to write the 50 pixels.
>
> **[2:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=141)** It's basically a given.
>
> **[2:26](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=146)** So let's go and save that.
>
> **[2:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=150)** And if the application doesn't show your styles, well it's because it hasn't been applied to the element.
>
> **[2:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=157)** So let's go ahead and do that.
>
> **[2:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=159)** So I'm going to go into bar.content right here and do style and then do styles.bar.
>
> **[2:52](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=172)** Actually, it's not in the content, it's in the app bar.
>
> **[2:55](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=175)** Sorry about that.
>
> **[2:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=177)** My bad.
>
> **[3:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=180)** There you go.
>
> **[3:01](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=181)** And then save that.
>
> **[3:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=182)** And now you can see the styles applied to your application.
>
> **[3:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=187)** If something doesn't show after that, my recommendation to you is to go back into the terminal and do NPX React Native run iOS or run Android to rebuild the application and basically make it anew.
>
> **[3:27](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=207)** That command fixes a lot of issues.
>
> **[3:30](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=210)** When you have issues that you basically fix and know that you fix the code, if you do a rebuild of the application, that's going to fix most of these things.
>
> **[3:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=220)** So let's go and don't save.
>
> **[3:43](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=223)** Don't create that app.CSS or delete it because we don't really need it.
>
> **[3:48](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=228)** And let it rebuild.
>
> **[3:54](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=234)** And now that's the other thing that this particular command does.
>
> **[3:58](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=238)** It brings up the issues that you may have not seen before.
>
> **[4:03](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=243)** Because the main index has been rendered already, we didn't see any of the issues that are basically coming from this guy here.
>
> **[4:12](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=252)** So let's go ahead and fix that.
>
> **[4:14](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=254)** We need to basically import React inside of index to be able to create a component.
>
> **[4:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=259)** So let's go ahead and do that.
>
> **[4:21](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=261)** So I'm going to go ahead and import React
>
> **[4:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=271)** from React, and then just save it.
>
> **[4:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=277)** And it's going to fix that.
>
> **[4:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/finalize-the-styles?u=76281980&t=281)** So now that we've done the application, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (2), delete (1)
> **Env Vars:** css (6), ncss (1), npx (1)
> **Code Identifiers:** margintop (2), ios (1)
> **File Paths:** app.css (2)
> **CLI Commands:** npx (1), make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 4. Debugging in React Native

#### Debug options
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=0)** - [Instructor] In this video, we'll explore the tools we have at our disposal to debug, and view the performance of our application.
>
> **[0:07](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=7)** Let's get to it.
>
> **[0:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=8)** So like we've done before, if you want to see the Debug tool, you can do that by doing Command + D in the iOS app, and for the Android app, it's Control + M.
>
> **[0:19](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=19)** Once you're here, you have several items that you can use.
>
> **[0:22](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=22)** The first one is Reload.
>
> **[0:23](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=23)** So basically that does the exact same thing as if you would do Command + R, or change anything in your application, it would reload automatically.
>
> **[0:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=32)** So if you click here, it reloads the application.
>
> **[0:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=36)** Let's bring it again.
>
> **[0:38](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=38)** Now, debug with Chrome, what it does for you, it allows to debug in JavaScript inside of the browser, pretty much like when you're debugging a web application.
>
> **[0:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=50)** So it gives you access to react native tools, such as the state, or tools that will allow you to see components from the web browser perspective.
>
> **[1:02](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=62)** Show Inspector basically shows you the actual inspectors.
>
> **[1:06](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=66)** If you click on this and then click on any elements, it would show you basically the styles directly related to that element, and so on and so forth.
>
> **[1:16](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=76)** If you want to get out of there, just bring the debug tool, and Hide Inspector.
>
> **[1:25](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=85)** Disable Fast Refresh basically stops doing the reloading automatically when you make changes to the code.
>
> **[1:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=92)** So you would have to manually reload by clicking here.
>
> **[1:35](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=95)** So I always leave that on.
>
> **[1:37](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=97)** For most cases, that's going to work.
>
> **[1:39](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=99)** And when you make changes to the code, you're going to see them live on the application.
>
> **[1:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=105)** I also told you that sometimes the changes are not applied, or something big needs to be rebuilt automatically, then sometimes something needs to be rebuilt to show up on the application.
>
> **[1:57](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=117)** Well, this is when this doesn't actually apply, and you need to reupload the application, but this is very useful for small changes in your application when you add components, when you tune styles, and so on and so forth.
>
> **[2:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=128)** Configure Bundler is basically IP address stuff.
>
> **[2:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=131)** So if you click on that, you're going to see IP address and ports that you can actually change to be able to see this directly inside of a web browser, or any other tools that you want to leverage.
>
> **[2:24](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=144)** And finally, Show Performance Monitor basically gives you performance of your application as you make changes to it.
>
> **[2:31](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=151)** And this is very useful if you're building a big application, and you need to see the performance while you actually make changes to the application, and then so on and so forth.
>
> **[2:41](https://www.linkedin.com/learning/from-react-to-react-native-14332800/debug-options?u=76281980&t=161)** So these are the tools that are available with the debugging tool.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (2), finally, (1)
> **UI Navigation:** click on (3)
> **Code Identifiers:** ios (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=0)** - [Instructor] This course was a quick demonstration of how you could convert a React by project, into our React Native project.
>
> **[0:08](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=8)** However, we've just scratched the surface with React Native.
>
> **[0:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=11)** For example, for practice purposes on this course, we had you build a second component that was only different by the category that it showed.
>
> **[0:20](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=20)** If you're familiar with React you know there's an opportunity to extrapolate pieces of this listing into its own components.
>
> **[0:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=28)** And reuse the stateless components to build the list without redoing the same code.
>
> **[0:33](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=33)** This kind of approach isn't specific to React Native, but if you're familiar with React, then you'll be able to push this project further.
>
> **[0:40](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=40)** Next, you could also add Redux to this project to further improve state management.
>
> **[0:45](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=45)** If you think this project will scale with many other functions and types of data.
>
> **[0:50](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=50)** Also, we've used iOS as our simulator.
>
> **[0:53](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=53)** You could also do more testing in Android and take a look at the nuances in between the two.
>
> **[0:59](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=59)** React Native has great resources when you need some help, you can find answers to your problems on Stack Overflow.
>
> **[1:05](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=65)** You can also reach out and chat with the community on the Reactiflux channel on Discord.
>
> **[1:11](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=71)** Finally, if you find bugs on the library, always report it to the GitHub repo.
>
> **[1:18](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=78)** If you felt lost at any point during this course, there are a few LinkedIn learning courses on React Native and React that can help you push your skills further.
>
> **[1:28](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=88)** And of course, the Facebook docs on these two amazing libraries.
>
> **[1:32](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=92)** Feel free to click on any of the links in the app we just built.
>
> **[1:36](https://www.linkedin.com/learning/from-react-to-react-native-14332800/next-steps?u=76281980&t=96)** Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Tools:** discord (1), github (1)
> **Code Keywords:** finally, (1)
> **Code Identifiers:** ios (1)
> **Documentation:** stack overflow (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)


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
