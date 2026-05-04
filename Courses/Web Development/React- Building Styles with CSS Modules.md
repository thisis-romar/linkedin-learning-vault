---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-building-styles-with-css-modules-9222678
url: "https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678"
duration_minutes: 94
duration: 1h 34m
level: Intermediate
updated: 10/6/2021
learners: 27435
skills:
  - Cascading Style Sheets (CSS)
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHt6E-zUzRRcA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633369796940?e=2147483647&amp;v=beta&amp;t=jV1RKFz3tBJRYWTJ6K7FEf6CWTzk322ZFVViK2rYxmc"
linkedin_topic: Web Development
learning_paths:
  - '[Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)'
prev_courses:
  - '[Building Modern Uis With React Router V6](Building%20Modern%20Uis%20With%20React%20Router%20V6.md)'
next_courses:
  - '[React- Securing Applications](React-%20Securing%20Applications.md)'
path_nav: '[{"path":"Improve Your React Skills","position":2,"total":9,"prev":"Building Modern Uis With React Router V6","next":"React- Securing Applications"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
  - skill/react-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Building%20Styles%20with%20CSS%20Modules.md)

![React: Building Styles with CSS Modules](https://media.licdn.com/dms/image/v2/C4E0DAQHt6E-zUzRRcA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633369796940?e=2147483647&amp;v=beta&amp;t=jV1RKFz3tBJRYWTJ6K7FEf6CWTzk322ZFVViK2rYxmc)

# React: Building Styles with CSS Modules

> React styles and CSS styles haven't always agreed in the use of inline styling. As React development has grown, developers have figured out more and more ways of smoothly integrating and maintaining a style with their code. But with so many options, it may be confusing on where to get started, especially if you’ve worked with CSS on non-React-based projects. In this course, Emmanuel Henri brings s

> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678) | 1h 34m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Building a React site with CSS Modules](#building-a-react-site-with-css-modules)
  - [Course prerequisites](#course-prerequisites)
- [**1. Setting Up**](#1-setting-up) (2 videos)
  - [React with CSS Modules without ejecting](#react-with-css-modules-without-ejecting)
  - [Clean up of your created file](#clean-up-of-your-created-file)
- [**2. Basics of CSS Modules**](#2-basics-of-css-modules) (7 videos)
  - [Introduction to CSS Modules](#introduction-to-css-modules)
  - [Initial directory structure](#initial-directory-structure)
  - [Add components to the app](#add-components-to-the-app)
  - [CSS syntax with the components](#css-syntax-with-the-components)
  - [Use composes to leverage other styles](#use-composes-to-leverage-other-styles)
  - [Set up your state and grid component](#set-up-your-state-and-grid-component)
  - [Complete your grid item](#complete-your-grid-item)
- [**3. Interactions and Responsive Design**](#3-interactions-and-responsive-design) (4 videos)
  - [Basic animation with CSS keyframes](#basic-animation-with-css-keyframes)
  - [SVG loading with state](#svg-loading-with-state)
  - [Add final elements](#add-final-elements)
  - [Media queries and combining styles](#media-queries-and-combining-styles)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a React site with CSS Modules](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=0)** - [Manny] Doing CSS with [React](../../Skills/Web%20Development/React.js.md) is always a subject with so many options, it can be confusing to get started. In this course, I'm going to clarify your options and introduce the concepts and syntax for CSS modules with React. Hi, I'm Manny Henri and I've been working with React since it was introduced. And I'm here to help you in your quest for proper styling while working on a cool space project. We'll first set up our initial project. Then we'll go over the basic syntax and introduce the concepts of CSS files with React components, [compose](../../Glossary/Framework/Jetpack%20Compose.md), and use the state to change our components. And finally, we'll create some animation and add our final touches. So if you're ready to create a space project with CSS modules, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Env Vars:** css (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [manny] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is focused on the exploration of CSS modules with [React](../../Skills/Web%20Development/React.js.md), some experience with React is a must. If you aren't familiar with creating React components, using props and importing modules, I suggest that you take a basic React course such as the one we have in our library. Also experience with [JavaScript](../../Skills/Software%20Development/JavaScript.md), especially the ES6 syntax or above is a must for this course as this is the basis of a React programmer. Next, being familiar with terminal commands and [npm](../../Skills/Web%20Development/npm.md) isn't a must, but definitely will help you when we use these tools. As you'll see, I'm running on a Mac, but you can follow along on a PC as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** css (1), es6 (1), npm (1)
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [React with CSS Modules without ejecting](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=0)** - [Instructor] When first creating a [React](../../Skills/Web%20Development/React.js.md) project, many old tutorials, including the previous version of this course, recommended to create a new application with special scripts or reject the application. Well, I've got good news for you. You don't have to anymore, because since React script 2.0 and above, CSS modules are actually supported. So let's go ahead and create our new React application inside of Visual Studio Code. Feel free to use any editor you want, or use a terminal to create the application, and then come back into your editor of choice. But because there is a terminal included with Visual Studio Code, I'm going to do it everything internally. So what I'm going to do is have Visual Studio Code open, and then I'm going to open up a new terminal. So you can do this by clicking here, New Terminal, or use the shortcut that you have in here. So what am I going to do to create a new React application is use npx. So, if you're not familiar with npx, it's basically [npm](../../Skills/Web%20Development/npm.md) on steroids. So basically what happened, after a while npm realized that not every single thing that you want to use needs to be installed locally inside of your system. So what they did is created npx, which is a command, which basically will use the library that you need to create a new React application in this case, but then is going to clear up the local install of create React app.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=94)** So it uses a temporary folder, installs all the files that you need to create a new React application, creates the new React application and then clears up that temporary folder. So it frees up space inside of your system. It also prevents a whole bunch of libraries being installed locally. So basically how it works, you need to do npx and then do the command that you would do if you were using the library in question. So to create a new React application, you would do something like create-react app and then name the application or the folder the way you want to have it name. And then it will work with npx as opposed to have to whoops that I have create-react-app like so. Perfect. So now what is going to do is leverage, create react app, install it internally, temporarily, create a new application and then clear up that folder. So let's see what happens. Okay. So once the application is created and, by the way, make sure that you are in the directory where you want the application to be created. In this case, I created it on my desktop. So once you have it created, all you have to do is basically load it inside of Visual Studio Code and I'm going to do that right now. Okay, so what you have to do is, if you're familiar with Visual Studio Code,
>
> **[3:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=187)** is open Explorer and then open the folder where your application is created. In this case it's on my desktop, so let's go ahead on my desktop. I've got cssmodules right here and open up the application, like so. Okay. So this is primarily, if you're familiar with React, this is primarily the typical application that React will create for you, depending on the version that you're watching, this might be a little bit different, but since React scripts version 2 and above, CSS modules are supported, so you don't have to worry if this is above version 2. In this case, I'm on 4. So you should be on a version above 4 and be fine. Okay. So this is the application and we're going to work a little bit on it in the next video. We're going to change a few things here to basically prepare it for the project that we're going to be working on. So, if you have that actually installed, let's run the application so you can see what it looks like. Again, if you're familiar with React, you can skip to the next video. This is basically typical React application. So what I'm going to do is make sure first that I am in the right directory by doing ls, like so, and I am, and then I'm going to do npm start. And this is what the application should look like. So, once you have this loaded and the application created, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (17), [npm](../../Skills/Web%20Development/npm.md) (3)
> **CLI Commands:** npx (5), npm (3), make (2), ls (1)
> **Tools:** visual studio (5), terminal (4)
> **Versions:** version 2 (2), 2.0 (1)
> **Env Vars:** css (2)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)

#### [Clean up of your created file](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=0)** - [Instructor] Before we move on to introducing CSS modules. I want to prep our current project, so we can remove a few things and prep the code for the next stage. So let's get to it. So I'm back into Visual Studio Code right here, and the first thing I want to do, is remove the logo. So if you remember, and again, let's go ahead and turn on the application. So you bring up the terminal, [npm](../../Skills/Web%20Development/npm.md) start, and then we can close the terminal, and bring up the application here. So as you can see right now, we have a turning star or basically their [react](../../Skills/Web%20Development/React.js.md) logo. So I want to remove all this and start from a clean slate. So I'm going to go back to Visual Studio Code, and I'm going to remove everything, but the div, class name app. So let's go ahead and do that, like so, and then also remove the logo right here, 'cause we're not using it. And then while we're at it, we're going to remove the logo into our files. So you can either do this, inside of the actual folder on your desktop or where you have those files, or you can right click inside of Visual Studio Code and delete the file, like so. Perfect. So the next thing I want to do, and we're not going to talk about CSS modules yet, but I still want to prep the files for that. So what I'm going to do first,
>
> **[1:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=93)** is change the name of App here. So what we're going to do instead of doing App.css, we're going to do App.module.css. So let's go ahead and right click, rename and do App... .module... .css... like so... and then, because we've renamed the file, we're not importing it properly here. So we want to basically import it properly here. So what I'm going to do, as opposed to just import the CSS files. So this is not doing module CSS, this is just importing the CSS files and then basically inserting it through class names. So we're going to change this now. So instead of doing it this way, what we're going to do is import, styles
>
> **[2:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=152)** from, and then we're going to rename the file here, to app... .module... .css, like so. Well now that we're doing this, we need to change how we're importing inside of the class name. So what are you going to do instead is doing inside of curly braces, Styles... .app... like so... and now you're importing the styles for the app right here, so these styles... by importing them through [Styles.App](https://Styles.App). So we're going to cover, how does that work? Why are we doing it this way? In the next video. But I just wanted to prep the files properly on this one. And then we'll just continue on that conversation in the next chapter. So let's save that file, okay? So now that we have that done, let's make sure that our application is running properly. So let's bring up the terminal and let's make sure that it's running, if it isn't.
>
> **[3:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=226)** And it was running, alrighty, right here. So let's delete that. And right now there seems to be a problem, cannot find that at all, okay. I just did capital M for this one though, so let's save that and then we're back and refresh that. And the application is running properly, but there's nothing right now and that's completely normal because our main component right here is completely empty. Perfect. So now that everything is ready, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Tools:** visual studio (3), terminal (3)
> **Env Vars:** css (5)
> **CLI Commands:** make (2), npm (1), find (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** app.css (1), app.module.css (1)
> **URLs:** [styles.app](https://styles.app) (1)
> **Speakers:** - [instructor] (1)


### 2. Basics of CSS Modules

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to CSS Modules](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=0)** - [Instructor] What exactly are CSS modules? Before I explain what they are, let's take a look at plain old CSS. When you work with CSS, you have one or many style sheets and they live pretty much on their own, and that's fine for simple apps or websites. But when your application or website grows, most likely you'll need to start splitting your components into smaller chunks to make it more manageable. Yet your CSS, even with leveraging imports, can become harder to manage, especially if you add scripts into your CSS. CSS modules comes to the rescue and facilitates this growth by first doing a one-to-one relationship where each component has its own CSS, but also integrates tightly into [React](../../Skills/Web%20Development/React.js.md)'s component approach with the possibility of using [JavaScript](../../Skills/Software%20Development/JavaScript.md) or any methods available to React. This allows you to do really dynamic CSS and easily manage the component styles when needed. And all of this will be demonstrated as we add the modules into our application. So let me demonstrate an overview of how our website will be built and how CSS modules will impact this. We'll first have a background with its own background CSS, so component to CSS, one-to-one relationship. Then we'll have a title, same way, and then we'll have a big grid which will also have its own module or modular CSS. And then each grid item because it's its own component
>
> **[1:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=98)** will have its own CSS. Remember like in React, because we're repeating the same component across, we only need to create a component and therefore its modular CSS once. And finally, we'll have the rocket and the smoke component and therefore its own CSS. Okay, so now that we have a good understanding of the benefits and how we are going to build a website, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (15)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Initial directory structure](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=0)** - [Instructor] Now that we understand how we're going to build our website, let's go ahead and structure a project and add the proper files. Also, in the exercise files, there are two files that are called [React](../../Skills/Web%20Development/React.js.md)-stateful and React-stateless. So if you look into the resources, you have those two files. And these are templates that you can use to add the proper code inside of our initial components. So if you want to use the stateless one, you can use this one, which is basically a functional component, and this one is a full stateful component. So if you want to use one or the other, you can leverage those to make your initial components as we create the new components inside of our application. So what I'm going to do is basically open those two inside of its own Visual Studio code. So what I'm going to do is right click Visual Studio Code, create a new window, and then inside of that window, I'm going to basically add those two files, like so. So if I need anything, let me just close this. So if I need any code here, I have these two that I can leverage for the components that we're going to create. So let me get back to our project right here. And the first thing I'm going to do is create, inside of our source file, a few files here and a few folders. So let's go ahead and,
>
> **[1:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=92)** inside of the source folder, create a new folder, and I'm going to call this one Background. And then let's go again in the source folder and I'm going to create the Grid. And by the way, if you want to insert them inside of a component folder, so you can basically have less stuff inside of the source folder, feel free to do so. Either way works, as long as you have your imports named properly. Otherwise, just follow along what I'm doing. Next one is called Rocket, and the final one is called Title. Okay, so now we have all of our files here, plus the three folders that we need for future stuff. So inside of Background, I'm going to start creating new files. So, the first one is going to be the module for the CSS. So we're going to call this Background.module.css,
>
> **[2:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=164)** like so. Then again, inside of that folder, I'm going to create the component, so background.js. And again, if you want to copy from our own Visual Studio files that I just loaded, you can simply copy and paste from these two samples or templates. So for this one, I'm going to use the Stateful. So I'll copy, paste and then save, and then we have the Background done. So in the grid, let's go ahead and create new files as well. So I'm just going to maximize this. I'm going to create four files for the grid. As you remember, we had our main grid, and then inside of that grid, we had the single components that are repeated so on and so forth, so that needs also a component. So, we need to create four files. So the first one is going to be, again, Grid.module.css, and then we're going to create a second file, which is going to be the Grid.js. And then another file, which will be the GridItem, so GridItem.module.css, and then finally, GridItem.js for the actual file. Perfect. And, let me just close a few of those. I need to keep the grid.js
>
> **[4:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=259)** and the GridItem.js, so I can copy and paste. I already copied it. So I'm assuming I can paste again. Yep. So I'm going to do all of these as Stateful for now. Just save them and then change as we need it stateless. Again, those files are already at my disposal whenever I need them. So, just going to minimize this, maximize this, and then paste again, save. And as I complete them, I'm just going to close them. Okay, so now we can close this folder, and now we're going to create the title. And actually, those two shouldn't be together like that, so let me delete that. And now, I have just Rocket. Perfect. And now in the source file, I need to create a new folder called Title. Perfect. So, you need to have those four separate. I didn't want to have indented folders inside of folders, so that's perfect. Okay, so now let's go back to Rocket, and we're going to create four files inside of Rocket. The Smoke, so the module for Smoke, the component and the same thing for Rocket, so let's go ahead and create those. I'm going to start with the Rocket.module.css, then create the actual components, so Rocket.js. Then, let's go and do the same for the Smoke, so Smoke.module.css.
>
> **[5:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=353)** And now, let's create also the component, so Smoke.js. And, before we move on to the title, let's make sure we have some code inside of our two components. I'm going to close the CSS ones, and let's make sure that I have something copied, Stateful again, and then let's just paste our Smoke.js component. Save that, and then do it again, save that. And now we're done with the Rocket stuff, and the Smoke. Now, in the title, we need two things. So we need the Title.module.css and finally, we need the Module component. Sorry, we need the Title component. Perfect. So, now what we need to do is paste also the Stateful component right here, and now we have all of our files ready for the next step. So if we want to take a look at what we've created, we have our Background, which has the modules, so the CSS module and the component. We have the Grid, which we have the overall Grid with its own module and the component, and the GridItem, which will be repeated inside of the grid
>
> **[7:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=447)** with its own modules, CSS. Same thing for the Rocket and the Smoke, so the module and the component for both. And then, finally, the Title, which has its own components and also the CSS module. So now, we have our full structure for a project completed and ready to go for us to work on it, so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2)
> **File Paths:** grid.js (2), griditem.js (2), smoke.js (2), background.module.css (1), background.js (1)
> **Env Vars:** css (5)
> **CLI Commands:** make (3)
> **Tools:** visual studio (3)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### [Add components to the app](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=0)** - So now let's continue setting up our application. So what we're going to do in this particular video, we're going to add a title for each of our components with an <h1> and then we're going to add all of these components inside of our main App.js component. Let's go ahead and do that. So I'm going to open first the Background, like so. And, basically, all I'm going to do instead of Stateful component, I'm going to change this to the actual component. In this case, it's the Background so let's go ahead and do that. And make sure that this is typed properly. And then save this and then repeat the same process for each of our components. So if you want to go ahead and pause the video and practice on your own, feel free to go ahead and do that. I'm just going to basically go through each of the components and change the <h1> title. And that's how simple this is going to get. So this one is the Grid, this one is the GridItem, then I'm going to continue with Rocket, like so. Rocket. Save it. Do Smoke. And basically the reason why I'm doing this is because when we load them inside of our application, we're going to know what is what. So, basically, once we attach all of these components inside of the main App.js component, we're going to see Smoke, we're going to see GridItem,
>
> **[1:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=93)** and so on and so forth. So we're going to be able to position them properly inside of the main component. And I typically do that when I build an application and just to structure the application properly, I add all these titles and then when I connect them inside of the main component, I know where each component sits. Alright, so we're going to do the same for Title and then save. And then we're going to go inside of the main component, so the App.js, and we're going to import each of these components first. So we're going to import Title from and then Title and then forward slash Title, like so. And just a little tip, if you want to have the proper component suggested to you, what you can do is do from first, so where you want to load from, and in this case we're going to load Background next.
>
> **[2:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=164)** And then based on what you've imported, it's going to suggest to you what components are available, like so. But I typically do everything in order. So it's a little trick from visuals to do code if you want to try it whenever you have large libraries and you're not so sure what's available, you can load the from first, load the library first, and then import and then it's going to suggest as you type things. Now, I prefer doing the from after because it's actually suggesting what's available to me when I start typing in. So Grid, so let's go ahead and do that and then Grid, import Rocket. And the reason why I'm not importing GridItem is because it's going to be inside of the Grid.
>
> **[3:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=225)** And then, finally, Smoke
>
> **[3:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=233)** from the Rocket folder, like so. Okay, so now we have all our imports and now what we can do is start putting them inside of our component. So I'm going to start with Title because that's the first one I want. Then I'm going to do Background, then I'm going to do Grid, Rocket, and you can probably guess what's going to happen for the next two, and finally Smoke, like so. And just to be structurally sound, you want to indent them inside of the main div, like so. Awesome! So now, all you have to do is save this and we have our first structure in place so we can start working with CSS functions. Let's move on.

> [!info]- Semantic Content
>
> **File Paths:** app.js (3)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Speakers:** - so (1)

#### [CSS syntax with the components](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=0)** - [Male Narrator] CSS modules allows us to scope our CSS inside of a specific component, like we demonstrated earlier and also make it reusable across different projects. So for example, if you create a component and it's corresponding styles with CSS modules, you can literally copy the folder of that specific component into another project. And you'll maintain all of its styles without having to go through several CSS files to find them. So let's go ahead and work on our first CSS module, and then I'll show you how you could copy these styles or this module into another project and reuse it. So the first thing we're going to do, I'm going to clean up my work area and just leave title- And clean the other one, like so- and then open up the title module CSS, this file. So the first thing we're going to do is actually create the styles inside of our CSS module here. So what I'm going to do is create a class called title, and then inside of that class, I'm going to start with font family, use Roboto or sans-serif if Roboto is not available on the browser or is not supported on the browser. And then we'll do a font size of four EM. Now you can save this, and now let's load this module inside of our component right here.
>
> **[1:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=95)** So the first thing we're going to do, like we've done before- and this is good practice- is start to import module. So we're going to import styles from our module. So the file is title, dot, module, dot, CSS, like so. And then what we can do is apply those styles to that specific component. And while we're at it, let's change that component to a functional component because right now it's a class component and it's not really required because we're simply loading a title, we're not passing anything from the state, from a state that's loaded here. So we don't need the class. So as you remember, I had a couple of examples here. So I have the state list and the state full component already for you, if you want it to leverage it, and we're going to do that. So what I'm going to do is simply copy this particular area, like so, quickly paste it here, like so, and we're going to change this to title. We're not importing any props, so that's not required. And then here, we're going to change it to title. So we can copy that line if we want to simply type it here, like so, and then we're going to pass the styles to the title. So let's go ahead and do that.
>
> **[3:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=189)** So class name and by the way if you don't know why we're using class name as opposed to class in pure [HTML](../../Skills/Web%20Development/HTML.md) is because the work class is already used in [react](../../Skills/Web%20Development/React.js.md). And pass styles dot, title, like so. Because we're loading styles here from the title module, and we want to make sure we have the same name here, so we should be fine. And then we need to correct this by simply doing this, like so, and obviously remove our class or stateful component. All right, so now we're good. Let's save this and let's start our application. So I'm going to click on terminal, new terminal, Do [npm](../../Skills/Web%20Development/npm.md) start just to see if there's any issues that we need to take care of and something is wrong here. Title- title does not contain a default export, import it as title, and that's definitely something we need to work on. So let's go ahead and do export default title. And that's my bad. I forgot to do the export, which is something that I typically do directly in the class component here, and I forgot to add it here. So let's save that. And now we have our application running, and let's check the application, and as structured in the previous video,
>
> **[4:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=283)** we have all of our other components inside of our main app component, like so. Awesome! So what if you want it to basically copy all this into a new application? All you would have to do is create a brand new react application and copy the folders right here inside of the source folder, directly into your application, and then make sure that there's no errors from loading the app here. So index dot JS is importing app from the right directory and then do the same from app to the others. And that's basically what you would need to check and make sure that you're importing properly inside of your application. And automatically the styles from the module would be applied to your component here and show up on the page. So as you can see, CSS modules allow complete flexibility and reusability of the CSS for your components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** css (10), html (1), npm (1)
> **CLI Commands:** make (4), find (1), npm (1)
> **Tools:** terminal (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)

#### [Use composes to leverage other styles](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=0)** - [Instructor] There might be cases where you need to leverage styles from other style sheets or classes, and this is where [compose](../../Glossary/Framework/Jetpack%20Compose.md) comes into play. So let me demonstrate. So the first thing we're going to do is actually grab some pictures from the exercise files. So let me minimize all this, and I'm going to open my project right here and open the exercise files and go into the resources and the files that you want is the alpha, nebula, and then stars. I'm going to select this, this, and this, and then copy. And then I'm going to go into the source folder. We used to put the images in the public folder, but recent development with [react](../../Skills/Web%20Development/React.js.md). Basically this allows us to put this into the public folder and then actually tag them or use them inside of our code here. So you need to create the images folder inside of the source folder, like so. So new folder, let's call this one images and then I'm going to paste the three images that I just copied. So now we're all set and let's go ahead and open up visual studio code. So the two files that I want to work on is the background dot JS. So we're going to be working on the background and the background modules CSS. So those are the two files. So the first thing I'm going to do is add some styles
>
> **[1:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=93)** to the background. So let's go ahead and do that. So the first thing I'm going to create a new class called background items, and this is going to be a class that we'll leverage across other classes. And I'll use composed after that, to leverage that class. So let's go ahead and start typing some stuff. So position, we're going to have it fixed. And then top, we're going to have zero, left, zero. We're going to do right, zero, bottom, the same thing. Width, we're going to be at a hundred percent. Height, the exact same thing. And then finally, we want to display this as a block, like so. So now that we have our main class, we'll start generating the class for the stars, the alpha and the nebula, and we'll use composed to leverage the class background items. So I'm going to show you how that works. So let's go ahead and start with stars and we're going to use composes and then type background items, like so. So what happens here, because we've actually defined all of these styles for background items, when we use composes and actually add background items as the class that we're leveraging, we don't have to redo all that code again for stars.
>
> **[3:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=189)** We're basically combining the class background items with the actual styles that we'll define for stars. So what we're going to do now, we're going to do a background which will be black and we'll have a URL which will include the image that we just imported inside of our project. So let's go ahead and grab that image. So you're going to have to do twice getting out of there and then go into, actually not twice, but just once, sorry about that. And then go into images and then select stars. And then we want to repeat, top center. So now we've defined the background for that specific class. Now we'll use the Z index to position it front to back inside of our composition that we're doing for this particular application. So this is going to be the further out image that we're going to leverage. Cause the other two are going to be front to the stars class. So let's go ahead and create the alpha class now. Let's go and create that. So for the alpha class, we're going to do compose again, background and Z index. So let's copy those styles here and paste them here, like so. So we're still composing background items. So we're leveraging some of that. The background is not going to be black.
>
> **[4:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=283)** It's going to be transparent. The URL this time is going to leverage the alpha image. And again, we're doing repeat top center. Now for the alpha, the Z index is going to be minus two. So this one's going to be on top of the stars. So the minus determines where it is positioned in the Z coordinates. So basically the way to determine where it sits in the Z index is the higher the number, the better it is or in front of everything else. So if you want to have something in front of the alpha, you would put zero, one or above. And finally for this one, we're going to add animation, which we'll actually write momentarily. And basically the animation that we'll leverage is called star gazing. And we're going to do 500 seconds linear animation and infinite. So basically will always play. Then we're going to paste again, what we just did and actually create the class first. So this is going to be nebula again for the last image, paste what we've already written and for the background's going to be transparent as well. Transparent. The URL this time is going to be nebula repeat top center as well. And the Z index going to be minus one, because this is going to be on top of the alpha and the stars. And finally, I want to add some opacity for that one.
>
> **[6:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=376)** So let's go ahead and do that. And the opacity will be at 0.15. So although nebulas are going to be there, it's going to be very, very opaque or not as apparent as the other images. And finally let's do the animations. So let's do key frames and let's make sure we use the name properly, star gazing. That's the one we have here. Perfect. And the animation is going to be from backgrounds. So basically what we're doing here is doing an animation from 0.0 to, and again, we're leveraging background position, like so. Minus 10,000 pixels, 5,000 pixels. So basically what we've done here is an animation of that particular image, which is the alpha. So this alpha image is going to be moving from these positions every 500 seconds in a linear animation, and it's going to be infinite. Okay. So now that we've defined all of our styles here, let's go into our [JavaScript](../../Skills/Software%20Development/JavaScript.md) file and make sure first we import it. So import styles from background dot module.
>
> **[7:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=469)** And you want to make sure again, that you're naming it the same way. So module dot CSS, like so. And then inside of our component, we're going to start leveraging those styles. So we'll have the first div with a class name and the styles, stars, like so. And then let's copy that line. We're going to paste it twice after that, to do the other two images. So basically we're going to do alpha next and then finally nebula, like so. Okay, perfect. So now that we have the component done, we have all of our styles. Let's take a look at what it looks like. So we have something in there here. So I made a little typo, let's go and correct that. Small error. Let me bring up the terminal. And the terminal says that we have no errors now. So we're all good. Let's go back to our browser and we have our stars. So basically the animation, I don't know if you can see it, but right now there's something that's moving that makes all these dots go out or in. And that's the animation that makes some type of star gazing or sky with stars that are coming in and out. And this is my opinion,
>
> **[9:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=565)** very beautiful and ready to move on for the next stage of our project. So like I said, compose is another tool that allows you to leverage styles from other files or within the same file. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (3), [React](../../Skills/Web%20Development/React.js.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** url (3), css (2)
> **CLI Commands:** make (3)
> **Tools:** terminal (2), visual studio (1)
> **Versions:** 0.15 (1), 0.0 (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is called (1), is an  (1)
> **Cross-References:** go back to (1)

#### [Set up your state and grid component](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=0)** - [Instructor] Okay, so let's move on to code our grid component. We'll also set up our state so we can start using it for data, UI, and animations, so let's get to it. So the first thing I'm going to do is actually leverage some data that I created for you in the resources. So if you click on the exercise files, resources, you have a [JSON](../../Skills/Web%20Development/JSON.md) file right here that's called NASA dot or underscore facts. And what I want to do is copy that and close it. And then inside of our CSS modules in the source folder, I'm going to create a data folder and I'm going to paste that file inside of that folder, like so. Perfect. Now we're ready to get back to our code and I'm going to remove my terminal for now. And I'm using basically a shortcut, which is Control grave, and then let's close the backgrounds. And what I want to do is open first the app.js file. So that's the first one I want to do. So what we're going to do first is import the data inside of that file, so let's go ahead and do that. So I'm just going to write a little comment here, data. And then import facts from go into the data folder right here. And that's what I want. Perfect.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=94)** So now that we have that, we have a little problem inside of our app.js file. We have a functional component and not a class or stateful component. So what we're going to do is basically redo that component above right here. So I'm going to do a class app extends component. And then the first thing I'm going to do inside of that class is add the constructor So I can pass props to it. Super props, and this is the template for most of your stateful components. So if you're familiar with [react](../../Skills/Web%20Development/React.js.md), you're familiar with this. So I'm going to create a state and I'm going to pass facts to it. And that's pretty much it. I don't need that much more. I don't want to spend too much time on this state. It's just typical code so I can actually render a component with data inside of it. So let's go ahead and create the render function.
>
> **[2:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=162)** And inside of the render function, all I need is the return. So what I could do is copy my return right here, cut it and paste it inside of my render right here, like so, and then I can remove this thing here. So now that I have all this in here, what I need to do next, and if you want to test that your code is working fine, you can save it, bring it back to terminal, making sure that something is working properly. If it's not, then make the proper change. In this case, component is not defined, so we really need to go to here and make sure that we also import react,
>
> **[3:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=218)** component, like so, from react, and we should be fine with the air. So now we're back. I'm going to remove my terminal by doing Control grave or just clicking the X. But now what I need to do is pass the state to our grid. So we need to pass it to the grid so we can actually create the grid item and repeat the grid item how many times we have elements inside of our data. So let's go ahead and do that. So I'm going to pass the facts and do this.state.facts.
>
> **[4:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=267)** Okay, so now this is done. Let's save that. And now, let's go into our grid right here. In our grid, we're going to start leveraging some of the stuff that we've actually passed to it. So the first thing I'm going to do is first make sure that I can import grid item in here. So let's go ahead and import grid item from grid item, like so. So now we have that component. Let's also import the styles, which we'll actually change later on. So let's import the styles from our grid.module.css, and you want to make sure that you don't make any typos 'cause react is going to tell you. And then in here, before my actual render, I'm going to create a function that will basically repeat the grid item with the number of elements that I have in my data. So let's go ahead and do that. So I'm going to create this render facts function in here, and it's going to return this.props.facts, so the props that I passed to this component. And then, we'll map it and for how many items I have inside of the data, please render what follows.
>
> **[6:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=361)** And this is where we're going to render our grid item. So the grid item is going to have inside of it a key, which will be the ID of the items. Let's take a look at the data just to make sure you understand what's happening here. So let's go back to our source, take a look at the data very quickly. And for each elements, and I believe we have 12 elements, yeah, we have 12 items inside of that JSON file. So for each element, we have an ID which will be the key for our grid item in here, so the key that I was just about to write. And then, for each of these elements, we'll have a title, fact, and clicked. And this will be passed to that grid item. And then, we'll define how that component displays those items in a future video. So let's go ahead and pass the key as item.id so we have an ID for each item in here. So zero, one, two, and whatever follows. And then, we're going to pass for each element in our database the item. So whatever is in the item here, we'll have access to all that data and leverage it inside of the component. So then, we need to make sure we close that component, that, and then that completes what we need to do in here. And we'll actually leverage the styles later on, but I'm not going to do that on that video. So what we've done now is actually pass data to our application and then leverage that data
>
> **[7:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=456)** inside of our grid where each of the item in the database will create a new grid item. So let's save that and make sure we don't have any problems. Yeah, so we have a warning, which is fine because we've defined styles, but we haven't used it, so that's fine. If we ended up not using the styles, I would remove it. So let's take a look also at our application, and we're still running fine. Good. So now we're done with this, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** make (8)
> **Env Vars:** json (2), nasa (1), css (1)
> **File Paths:** app.js (2), grid.module.css (1)
> **Tools:** terminal (3)
> **Exercise Files:** exercise files (1), template (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### [Complete your grid item](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=0)** - [Instructor] Okay, so let's finish our grid items and make sure that we have styles applied to the grid and the grid items as well. So we have a lot of code to write in this video. So let's get ready. So the first thing I'm going to do is actually go to the grid and add some styles that we can apply to the grid. So let's go ahead and create a class called grid, and we're going to call or use columns gap or column gap. And we're going to do 10 pixels column count.
>
> **[0:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=38)** We're going to do three. And then padding. We're going to do 175px to 20px or pixels, 10 pixels and 20 pixels. And by the way, all these values are stuff that or values that I actually tested before I did the course. So if you wonder what these are, or if you want to play with them, go ahead and actually change those. And you'll see the results directly on the page. But these are the things that I actually worked with, and basically set for my own project here. All right, so let's save that. We can close the file and then let's go in the actual grid and load that CSS in here. So we already did the import. So we're good there. What we need to do at this point is actually use the render facts function inside of our render here. Because it's not rendering it anyways right now, and actually leverage the styles as well. So let's finish that code here will be very simple. So the first thing we're going to do is do a section with a class name, and then we'll apply the styles.grid, what we just written. And then close that. And then inside of that section, we're going to render this, that render facts. Boom. And we're done. So let's say save, let's check with our terminal, everything is working fine.
>
> **[2:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=130)** So we're still good. And now let's move on to the actual grid item. And what am I going to do for this one is do the actual CSS first and then apply to CSS to the actual component. So let's go ahead and do that. So I'm going to open the grid items CSS and the grid item component, the [JavaScript](../../Skills/Software%20Development/JavaScript.md). So grid item.js. So let's go into our module CSS and let's start writing some CSS. So the first thing we're going to create is a card class and inside of it, we're going to do display in line block, and then we're going to do a width of 90%. And again, these values are all stuff that I've defined before. So if you want to play with these, go ahead and change them and you'll see how it looks versus what I've done. So for that, we're going to do space mono. And again, if it's not available or not supported, we are going to leverage mono space, border default. Sorry, border radius. I don't know why I said default, 3px our pixels border, and we're going to do one pixel solid. And the rgba value is going to be 168, by 168, by 168.
>
> **[3:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=218)** And the alpha is going to be 0.2. Like so. Background color. I don't like when it's not suggesting something, that means that I'm not typing something properly, but let's see what happens. Rgba. Zero. Zero. Zero. 0.3. Something's off here. Oh, I didn't put the, there you go. That's why. When something's weird, there's a reason. That means you've forgotten something, you've written a typo somewhere, something's off. Just take a look at your code and figure it out, or take a look at the suggestions from the console. There you go. And then finally margin bottom 10 pixel. Okay. So this class is done. Now, what we're going to do is a hover for that class. So card that hover. So when we hover over that card, the styles are going to change. So we're going to do animation name, flash. And we're going to create that animation shortly. Animation duration. One second. Border. And one of the things that I recommend when people
>
> **[5:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=311)** don't want to take a look at me, typing all these values. What you could do is basically take a look at the exercise files and reproduce that. Because this is basically all code that I've preset before the course, because I know these values are going to work. But if you want to play with them, you can play with them. But just to write them, you can actually use the exercise files, if you want to. Rgba. And basically we're reusing a lot of the same values as we've used before, which is good. Now we're going to do a title with a margin top of five pixels, and then a margin bottom of 10 pixels. Like so. And then finally, we're going to do fact. A fact class with a text line of justify. Okay, so that's a lot of CSS, but we're done. It return, save. And now let's move on to the actual component. And this is going to be the shorter part. So instead of doing a class component or a stateful component here, let's do a functional component instead. And I'm going to basically do this very quickly. So grid item. And don't forget to export after that, because I'm basically exporting right here. So let's make sure we export after that. So we're passing props on this one from the grid component,
>
> **[6:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=407)** and now let's return, and start doing our divs. And what I'm going to do is, well, actually I don't have to. So let's go and create a div with a class name of styles. And we haven't imported our style yet. So let's go ahead and do that just to make sure that, we can leverage the auto-complete because we've already defined it prior. And it's going to be grid item.module.css. Like we've done throughout this course, this guy here. Or basically this guy. Perfect, so now we can leverage it right here, styles dot, and this one is the card. Boom. And then we can start working on our h2 or title with a class name. And again, we defined already a style for our title and for this guy, the title was going to be passing props, dot fact, the title. And again, if you wonder what I'm doing, let's go to the data and we're passing this guy. So we have the id title fact clicked that we have available for each item inside of that component. So let's leverage the title first. Like so. Then the second one is going to be an article tag and we're going to pass the styles dot,
>
> **[8:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=505)** and you probably imagine what I'm going to do next, fact. And now let's close the tag and then pass from the props the fact, dot fact. 'Cause we have the fact here that we need to pass inside of the article here. Perfect. So now that we're done, all we need to do is make sure we export our little functional component that we created. And I'm basically just going to leverage what I have in here and just finish it up. Like so. Boom. Now let's save. I'm going to check my terminology just to make sure that everything is going fine and everything is good there. And then I'm going to switch to the browser just to take a look. Okay, so now we're back in the browser and obviously there's an issue. Because right now, if I look at this, I have the texts, but because it's black, we can't see it. So we're going to make a minor correction. So let's go back to VS code and hide the terminal. And then I'm going to go into the CSS module. And the only thing I'm going to add is color for the font. So I'm just going to do that below the font family, and I'm going to do color, and then simply do white. Like so. So I'm going to save and then go back to the browser, and everything is showing up now.
>
> **[9:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=599)** Okay, perfect. So basically what we've built here are the CSS for these cards here. And as you can see, we see the cards, we see all the animations of the stars in the back. This is really cool. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (9)
> **CLI Commands:** make (6)
> **UI Navigation:** go to (2), open the (1), switch to (1)
> **Tools:** terminal (2), vs code (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** item.js (1), item.module.css (1)
> **Versions:** 0.2 (1), 0.3 (1)


### 3. Interactions and Responsive Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic animation with CSS keyframes](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=0)** - [Trainer] Animations are the basis of great interactions. And we'll start adding them directly inside of our CSS modules. So where I want you to go is to this website, animate.style. And once you get to that, you can actually browse and take a look at what, the animations are here. So if you want to see what the flash animation is, you can see it directly here. So bounce, pulse, rubberBand and so on, so forth. So if you want to explore, go ahead and explore, what animations you'd like to add to the cards that we'll have into our application. So once you're ready. Let's go ahead and click on the [GitHub](../../Skills/Software%20Development/GitHub.md) logo right here. So this is going to bring us to the actual source of the repo and the source of the actual animation, so the CSS code that is used to do the animation. So once you're there, all you have to do is go into Source and then click on what type of animation you'd like to leverage. So in this case, we want to do an attention seeker. And then you can look directly into the CSS of what the animation you want to do. So if you wanted to do rubberBand, you can click on rubberBand CSS and take a look at rubberBand, like so. But in this case, I want to do flash. So, let's go ahead and take a look at flash. So this is the styles or the code for CSS that we have to add to our code to actually do this animation.
>
> **[1:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=92)** So let's go ahead and copy that code like, so, and then let's go back to VS Code. And what we're going to do is paste that code directly inside of the grid item .module.css, right here. Because what we're doing in the card hover, we're actually calling on to the flash animation. So if you were to do something else, you would need to change the name of the animation here. So let's say you would do something like the rubberBand. The name of the key frame is what you want to grab here. So rubberBand would be the actual name that you will need to put in here. But in this case, we already put flash because I was planning ahead of time to do this and now I'm going to paste the code. And now I have everything I need to do the flash animation. So I'm going to save this and then go back to the website and reload. And now whenever I hover over any of the cards, it's going to do a flash animation. So if you were to do a rubberBand, they would do rubberBand and so on and so forth. So this is a quick way to add really cool automations to any of your applications inside of [React](../../Skills/Web%20Development/React.js.md), by leveraging animate.css. So we've done a base animation. Now we're ready to add some interactivity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Code Identifiers:** rubberband (8)
> **Env Vars:** css (5)
> **File Paths:** module.css (1), animate.css (1)
> **Cross-References:** go back to (2)
> **Tools:** github (1), vs code (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)

#### [SVG loading with state](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=0)** - Sometimes you need to have visuals changed based on events like a mouse click, or UI change, et cetera. This is exactly what we'll add to our website here. So let's get to it. So the first thing I want to do is minimize VScode for a second. And what I want to do is grab two files from the exercise files. So if you click on the exercise files and you click on resources, you'll have two [JavaScript](../../Skills/Software%20Development/JavaScript.md) files called Badge and Explorer. So these are basically components that I've created with an SVG file inside of it. So basically code that creates an image. Didn't want to code this live on the screen for you, because it's not a course about that. So what we're going to do is copy those two files and then put them in the grid folder right here, like so. Perfect. So once we have that, let's go ahead and code our interactions. And the next thing we're going to do is first create the function inside the app dot JS, right here that will allow us to click and change the state. So what I'm going to do, just below the constructor right here. I'm going to create a method or function. That's going to be called update clicked, and we're going to pass an ID. And that function will basically take the state and create a copy. So we're going to create a brand new copy
>
> **[1:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=96)** of the state with the object assign method, which is basically pure JavaScript. And then leverage that state copy and fax that ID. We're going to change the click to true, like so, so if you wonder what we're doing, if we take a look at the data again, each element has a clicked element and now it's false, but what we're going to do once we click on that particular element or card inside of our application, the click true the function here is going to change, picking up the ID, and I'm going to change click to true, like so. So in our state, this is going to change to true, if we were to click on the NASA acronym.
>
> **[2:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=156)** And then we're going to make sure that we update our state inside of our application. So basically we're doing all of this through the copy of the state and not the actual state. And then we're setting the state with whatever we changed in the copy of our state. Okay, so once you have the method or function done, what you need to do at this point is to add it to our actual, or pass it down to the component that needs it. So let's go ahead and do that. So I'm going to pass it down to here. I'm going to call this updated click, and pass down the actual function that I created. So this, that update clicked, and we're going to bind this just to make sure, like so. Perfect. So now that we've passed it down to our grid, we're going to open the grid. And let's go ahead and open the main grid here, not the Explorer, the grid. Awesome. And then what we're going to do is in the grid, we're going to first create the method here. So update clicked, pass the ID and then basically leverage this dot props, because now we have the update click as a prop and pass the ID. Boom, we got it here. And now we need to add it to our grid item because
>
> **[4:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=248)** we're clicking the item and not the grid itself. So basically we passed the function from the top level, all the way down to the actual component that needs it. So we're going to pass it down to the grid item now, the same way we did it on the app. So if you want to copy the code right here, so this code all the way to here, like so, this is exactly what you need to add right here, like so. Updated clicked this, updated clicked, bind this. And that's pretty much what we need to do on the grid. So you save this and now what we need to do is leverage that inside of the grid item. So change the styles as we click. So what am I going to do also is to add some styles to grid item. Not this one, but grid item dot module dot CSS. I'm going to add a badge. Little margin bottom, just to make sure when we have the badge,
>
> **[5:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=323)** we have that style. Perfect. So that's something that I added when I actually tested the badge that we just added. So this badge here, just to make sure that it fits properly. So just add that it's going to look better. And again, all the styles are pretty much stuff that you can play on your own and make it your own, basically explore whatever you want. All right, so now we need to actually make the code or create the code. So when we click on this grid item, something's going to happen. So what we're going to do is add a few things here. So now we have access to the on click. That is the function that we can leverage in [react](../../Skills/Web%20Development/React.js.md). So when we click on something, do something and that's the function that's going to happen. So in this case, what we're going to do is leverage the updated click past the props, fact that ID, which basically means that we're passing the ID to the function and it's going to change at that point, what's going to happen. And when that happens, what you want to do is either add the Explorer or the badge. So basically when we click on the actual card, either add the badge or the Explorer SVG. So what we're going to do is do this, so props fact dot click question marks. So basically this is a NIF statement.
>
> **[6:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=416)** So this is the ES6 and above version of an if statement. So if you clicked and it's true, add the Explorer component in here, otherwise add the badge. So the two SVGs that I created will basically show one or the other based on the actual state of that particular component here. So if it's true, it's going to show Explorer. If it's false, it's going to show the badge. But now what we need to do, because right now we've actually imported this. So we're going to have an error if I save this because I didn't import the badge and the Explorer. So we need to import those. So let's go ahead and do that and then import Explorer, from Explorer. So we have all of our elements for the click event. So let's go and test it. So I'm going to turn this or save this, and I'm going to check if everything is running okay, from a terminal perspective. And now I'm going to go to the browser. And as you can see, I have this SVG that shows up at the top if I click on it. Okay. So there seems to be a typo in the actual function that I created. It's not updated, but update clicked.
>
> **[8:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=510)** So let's go and change the typo on that one, because I've actually pass, if you want to actually debug this yourself, you're going to see I've actually pass, update clicked, and not updated click. So that's my mistake. So let's go and make that change. Now it should be running. Okay. So everything's fine on the console. Let's go back to the browser and now everything's good. If I click on it now I've got this brand new SVG that shows up. So whenever I click on an element here, it's going to turn the actual state of that specific card to true, as opposed to false. And it's going to change the SVG. So good job. And let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1)
> **UI Navigation:** click on (9), open the (2), go to (1)
> **Env Vars:** svg (5), nasa (1), css (1), nif (1), es6 (1)
> **CLI Commands:** make (7)
> **Exercise Files:** exercise files (2)
> **Definitions:** basically means (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### [Add final elements](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=0)** - [Instructor] Now that we have completed a good portion of our project while learning how to use CSS modules, let's add a few items that will truly make our project pop. So the first thing we're going to do is go inside of the Exercise Files in the resources folder. And we have three files that I want you to bring into our project. First one being NASA MP3 which is basically a sound file that is a rocket launch. If you want to listen to it, you can actually open it, (audio plays) and you'll hear what it is. The second and the third are the shuttle and the smoke.mov. Now here's something that's going to be different than what we've done before. I don't know if you remember, before we actually copied and pasted the files, and they had to be inside of the source folder. Otherwise, [React](../../Skills/Web%20Development/React.js.md) wouldn't recognize that. Well, that was when we actually were loading these files from a CSS file. So if we go back to our code, just to bring back some context into this. If we go into, they were in the rocket, I believe. Background, there you go. So we were loading these files from a CSS module. When they are in a CSS module, you need to have them inside of the source folder. If you need to load them anywhere else in the project, you can have them in the public folder
>
> **[1:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=95)** and do basically what we were doing before, is actually do forward slash and the name of the file. So this is what we're going to do. So let me just close those two files here. Let's go back to that. Copy those files and then put them in the public folder. Like so. Close those folders. All right. So let's start by working on the rocket. So the first thing I want to show is the rocket. So I'm going to bring the [JavaScript](../../Skills/Software%20Development/JavaScript.md) file and the CSS module. So the first thing I'm going to do is actually load the rocket right here. So I'm going to actually import also the CSS styles right away before I forget about it and do Rocket.module.css.
>
> **[2:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=148)** So now that's loaded. Now let's load an image here inside of the rocket title. Let's do image. The source is basically the main folder, so shuttle.png. And you're always need to have alt when you do an image inside of React. Otherwise, it's going to give you an error. And then we're going to bring the modules CSS styles. And close the tag. Okay. So let's save that. Let's go and make sure that our image is loaded. So let's go into our project here. Let's scroll down, and we see the show. It's a bit big right now, so what we'll do is go back here and go inside of our CSS file. We're going to do some adjustments on the image. So let's do a class of image, do a position, relative. I don't know why I removed that. Bottom. Let's do minus 25 pixels with- And again, these are all values that I tested before, so I know these are going to look great. If you want to do your own, do your own. It's entirely fine to do that. Margin bottom. And you can actually do my own values and then play with them just to make sure that, you know, you can play with it, to do your own thing.
>
> **[4:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=241)** So z index, I'm going to do 99 just to be sure that it sits on the very top of everything, okay? So now that's save. Let's continue working on our stuff. The next thing we're going to work on is the actual smoke. So let's go into the smoke JavaScript first. And we're going to do the same. So let's go and import our styles from Smoke.module.css.
>
> **[4:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=272)** That's exactly what I've done here. Let's open it just to make sure it's Smoke.module.css. Yep. Because again, if you have a typo, React is going to react on you. (chuckles) All right. So the first thing I'm going to first add a className to the top div, which will be the smoke. And then inside of that div, I'm going to add a video, and that's the video we just loaded inside of our public folder here. So this one, smoke video. We're going to have some smoke, just going to be below the actual rocket. ClassName. And then we'll apply styles.video. Autoplay. Loop. Source, smoke.mov, And then close the tag. Whoops. That's not what I want. I want to actually do a closing tag like this. Okay. So now we have our video inside of our JavaScript file, now we need to apply some styles to this, just to make sure that we have proper styling for the smoke and also for the video. So let's go position, relative, bottom, zero pixel. Then we'll do a margin top of minus 500 pixels and then z index of 99 as well.
>
> **[6:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=371)** So the rocket and the actual smoke is going be at the same level, as supposed to be one on top of each other. And now let's do the class for a video. We're going to do a width of 100%. Height, auto. And then opacity 0.5. Okay. So now that we've done all this, let's take a look at what it looks like. So let's go back. And first, I always check the console first, because if there's a major error, it's going to show in the console first. And then if it's really a style error or something that is minimal, mostly style, it's going to a actually show us the error on the browser. And we don't have any error. I'm just going to refresh just out of- And then scroll all the way down. And I have smoke with a rocket.
>
> **[7:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=436)** Awesome. Now the last thing I want to do is actually add the audio file to this page. So when we load the page, it's going to play the launch, the rocket launch. So where you actually load that is in the [HTML](../../Skills/Web%20Development/HTML.md) file. Let's go into the HTML file, like so. And what I'm going to do is basically go inside of the body, so line 29 and below, and remove all that commenting from React. Thank you very much for telling us all this. And then what I'm going to do is load that sound file. So it's fairly easy to load audio inside of an HTML file. If you don't want to do that, you can actually not do that code, because audio files is something that is kind of, some people like it, some people don't like it. But if you don't want to add it, that's completely fine. So now the way to do this is to do audio. And I'm going to do an autoplay on this on loop. So it's going to be annoying. And then inside of that audio, I actually determine what the source is. So the source of that audio is the NASA file. This guy here. So you want to make sure you also make high caps for all letters to match the name of the file. Otherwise, it's not going to load. Type audio, mpeg. And then close that tag. Okay.
>
> **[8:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=529)** And now that we saved this, most likely React will start the audio file, so check the controller. If it doesn't, we will just refresh the page. Okay. So now let's check the browser. And I'm going to refresh just to be sure. And I'm going to scroll down, and I can see that the actual movie is not playing here. This is most likely a protection from your browser. So if you want to make sure that it's actually working, what you could do is change browsers. So for example, I have Safari, let's go to Safari and enter localhost 3000.
>
> **[9:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=572)** Refresh. And the actual animation is working here. So the movie's working. So we have that part, but we don't have the sound or the actual NASA launch. And again, it's probably a protection from your browser, because most browsers, as of late, they protect from playing sounds from websites automatically. But there are settings that you can change inside of the browser. But I know for a fact that Firefox allows you to actually check this from the get go. So I'm going to open Firefox. And I'm going to enter localhost. (audio plays) And this is the setting question. So if I block audio video, it's going to stop if I refresh. I'm no longer going to have the audio playing. And the video is not playing as well. But if I want that to play, I can go to the settings, go here and allow audio and video and simply refresh. So this is basically a security setting from your browser that prevents from playing video or audio files automatically, because this is something that's annoying for a lot of users. And that's okay. But I just wanted to show you that there's a way to hear it. But FYI, if you truly want your MP3 file or sound files to play, there is a little trick on the web that I've seen on Stack Overflow, where if you changed the bit rate to 128 kilobytes per second,
>
> **[11:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=667)** it's going to work. I'm not sure, I haven't tested it. But I like to have that security feature from the browser, because, personally, when I go to a website, if it plays something automatically, it's a little bit annoying for me. But in all cases, if you want to test your files, you can always do it here. So you can refresh (audio plays) and get that, and you're going to have the animation here as well. So. So now if you're like me, and you love space, this is one project to cherish and watch and hear several times over with the actual sound over. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** css (8), nasa (3), html (3), mp3 (2), fyi (1)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (3), scroll down (2)
> **Tools:** safari (2), firefox (2)
> **File Paths:** smoke.module.css (2), rocket.module.css (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)

#### [Media queries and combining styles](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=0)** - [Narrator] In CSS modules, you can do media queries the same way you've done it before with [HTML](../../Skills/Web%20Development/HTML.md). It'll work too. However, I want to show you an example of doing them externally of the component and then leveraging CX composition to add multiple styles to one element. So, let me demonstrate. So, the actual library that we're going to leverage to do that is this library, classnames. So, the way to install it, basically you do, [npm](../../Skills/Web%20Development/npm.md) install classnames, and I'm going to do that inside of the application. And I'm going to bring my terminal, stop the application with control + C, npm install class name. Like so. once you have that, let's go ahead and do npm start again, So we have our project running in the background. Everything is running fine, let's close the terminal. And then what I'm going to do is create inside of our grid a brand new module. So, right here, brand new file. And I'm going to call this Media .module .CSS. Like so. And basically what I'm going to do is start adding some media CSS styles right here. So, let's go ahead and do that. Again, these are my values. Feel free to do your own. For the grid, we're going to do something different at this width
>
> **[1:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=92)** of a 1,024 pixels. We're going to do a column-gap of 10 pixels, column-count of two, and then padding, we're going to do 175 pixels by 10 pixels, 10 pixels, 10 pixels. Okay, so we got the first one. Now, we're going to do another media query for 768 pixels. Like so. And then for that one, we're going to basically replicate a lot of that code here so we can copy that. So, the column gap is going to remain. The column count is going to be one. And then here for the second value, we're going to do five pixels. And then for the last value, five pixels as well. We're also going to add something for the title and we're going to work on our styles for the title fairly shortly. And we're going to do a font-size of 3em, as opposed to 4em, which is the value that it has right now. Okay, so we got our module. Now let's [compose](../../Glossary/Framework/Jetpack%20Compose.md) these styles along with the styles that we already have for our grid. So, what I'm going to do is actually open the Grid.js file here. And I'm going to make one very simple change here.
>
> **[3:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=188)** But the first thing we're going to do is make sure that we have all of our styles imported here. So, we have our grill module and we're going to import also mediastyles from our module, that we have right here. So, Media .module .css, Like so. And then we're going to use the brand new library we just installed, which is the classnames to compose those two styles or those two stylesheets into our section here. So, how do you go about that is fairly simple inside of [react](../../Skills/Web%20Development/React.js.md). So, here, as opposed to do just styles, we're going to do something else. So, I'm just going to hit return and actually remove all this, just to show you from scratch what it would look like, actually not hit return. So, you wouldn't use something in... Actually you need to import it first. So, we need to actually go here and import classnames. So, I'm going to use the letter CX from classnames, like so. Now we have access to it. And now in the actual styles here, I'm going to use CX, which is basically a function that allows to add multiple stylesheets into this particular function. So, basically what we're going to do is go ahead and add our styles.
>
> **[4:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=280)** grid, comma and also media styles .grid. So, we're basically combining the two into the one. And all of our styles are going to be applied, like so. And save that. If you take a look at the terminal, everything is fine. And then also inside of the browser, everything is fine. So, the only way to see how it looks and I actually have... Right now, we don't see the title, but the grid will change if we actually shrink this. So, now we're at two. So, the media styles have been applied automatically. The title, we don't see it yet. So, that's why we're not seeing anything here. So, let's go ahead and make those changes for the title. So, I'm going to close the terminal, bring up the title, right here. The styles for title and also Title.js. And the first thing I'm going to do for title, is make a lot of changes here. So, the font size we're going to keep. Then what I'm going to do is add color, white. So, we can actually see the font. Position fixed, left 50%, transform translate, and we're going to do minus 50 percent. So, we're adding a little bit of an animation here, with
>
> **[6:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=372)** 100% margin-bottom. And again, I'm just basically typing what you would see if you look into the exercise files. So, feel free to copy and paste or just type along with me. So, this is zero, zero, zero, 0.5. Margin- top zero, margin-bottom zero and padding top 0.67 em. And again, these are values that I actually played with for a little bit and figured out that these look great. Okay, well now we have that. And I'd like to add a media query for this one. So, I'm going to go for media query max-width. So, you can basically do that directly inside of the CSS module. So, you could basically add all your media queries directly here, as opposed to do in a separate file like I did. But I wanted to show you a way where you can combine multiple stylesheets into one classname, inside of a component. So, that's very useful when you want to start decomposing your code and make sure that it's very clean and you can easily find some styles that you apply to something by the name of the file. So... And again, it adds to the modularity of your project, 768 pixels, and I'm going to
>
> **[7:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=465)** title, font-size 3em. And I believe I'm just repeating what I've done here. Yeah so, basically I wanted to show you, you can do it here, but you can also do it here. So, if you don't want to have it repeated in the code, and that's a good idea. Let's clean it here, and then let's add it directly into the file itself. Like so. Okay! So now we have our styles. The last thing we need to do is change our title and make sure that it says something that's related to NASA. So let's go and do, NASA facts. Perfect. So, we're done. So, let's go and make sure to test this. Bring up the terminal. Everything is good.
>
> **[8:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=524)** as we scroll, The movie is working here, which is good. We don't hear the sound. That's probably a protection from react. You can click here, it changes everything. And then also media query wise, the title changes, the number of element changes, and I can basically see that my media queries are also working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (2), [React](../../Skills/Web%20Development/React.js.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (7), npm (3), find (1)
> **Env Vars:** css (4), nasa (2), html (1)
> **Tools:** terminal (5)
> **Prerequisites:** install (3)
> **File Paths:** grid.js (1), title.js (1)
> **Versions:** 0.5 (1), 0.67 (1)
> **UI Navigation:** open the (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=0)** - [Emmanuel] This course was an introduction to CSS modules in [React](../../Skills/Web%20Development/React.js.md) applications. With the tools and syntax we've explored here, you should be able to use CSS modules in your next React Project. Using CSS with React is always an evolving subject, so always go back to the community on [Facebook](../../Glossary/Service/Facebook.md) or follow them on Twitter. And finally, always read the docs for any updates. Feel free to integrate any of your pre-processors and use Sass, Stylus, or Less with React CSS modules. However, I found that this approach adds extra steps to get the same result while you have the same benefits that these bring with CSS modules. Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Env Vars:** css (5)
> **Cross-References:** go back to (1)
> **Documentation:** the docs (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)
- React.js

## Path Context

### In [Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)
← [Building Modern Uis With React Router V6](Building%20Modern%20Uis%20With%20React%20Router%20V6.md) | **2 of 9** | [React- Securing Applications](React-%20Securing%20Applications.md) →

## Appears In

- [Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Making Sense of the CSS Box Model](Making%20Sense%20of%20the%20CSS%20Box%20Model.md) — Cascading Style Sheets (CSS)
- [React- Cloud-Powered Apps with Firebase](React-%20Cloud-Powered%20Apps%20with%20Firebase.md) — React.js
- [Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md) — React.js
- [React- Software Architecture](React-%20Software%20Architecture.md) — React.js
- [React- Testing and Debugging](React-%20Testing%20and%20Debugging.md) — React.js

---

[↑ Back to top](#)