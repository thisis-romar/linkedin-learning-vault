---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: building-modern-uis-with-react-router-v6
url: "https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6"
level: Beginner
updated: 8/16/2022
learners: 22230
skills:
  - React.js
  - User Interface Design
exercise_files: true
github: "https://github.com/LinkedInLearning/building-modern-uis-with-react-router-v6-2495079"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG395sowEYfug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660328061370?e=2147483647&amp;v=beta&amp;t=b5V8z7yZ8KJieecrl7pgnX8gaVHjXg8pX3d07ij63co"
linkedin_topic: Web Development
learning_paths:
  - Improve Your React Skills
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/react-js
  - skill/user-interface-design
status: not-started
created: 2026-04-19
---

![Building Modern Uis With React Router V6](https://media.licdn.com/dms/image/v2/C560DAQG395sowEYfug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660328061370?e=2147483647&amp;v=beta&amp;t=b5V8z7yZ8KJieecrl7pgnX8gaVHjXg8pX3d07ij63co)

# Building Modern Uis With React Router V6

> Are you already familiar with React and ready to level up your skills and build modern user interfaces? In this course, learn how to extend your React applications by adding routing capabilities with React Router, the standard routing library for React. Instructor Guil Hernandez starts by going over routing basics and single page apps. He then illustrates some of the useful React Router components

> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6) | Beginner | 22K learners
> [Jump to Path Context ↓](#path-context)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-modern-uis-with-react-router-v6-2495079)

## Skills Covered

- React.js
- User Interface Design

## Table of Contents

### Introduction

#### Building modern UIs
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=0)** - [Guil] React is one of the most widely used libraries for building modern user interfaces and single page applications.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=8)** Out of the box, React itself does not provide routing solutions or features that navigate users between the various URLs and views that make up a web application.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=18)** But that doesn't mean we have to implement all the routing manually in every app we build.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=22)** React after all has a vibrant developer community that has built common utilities like routing as add-on libraries to React.
>
> **[0:31](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=31)** In this course, I'll teach you how to extend your React applications by adding routing capabilities with React Router, the standard routing library for React.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=40)** I'll start by going over routing basics in single page apps, then dive into some of the useful React Router components, hooks and other robust features that navigate users to all the different views and links of an app and overall help create dynamic user interfaces that automatically update whenever the URL changes.
>
> **[1:01](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=61)** I'll also provide several challenges along the way to help you practice and make what your learning stick.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=68)** I'm Guil Hernandez, a software development instructor and developer for over 15 years.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=73)** If you're familiar with the basics of React and ready to level up your skills and build modern user interfaces with React Router, I invite you to follow along in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** url (1)
> **Speakers:** - [guil] (1)

#### What you should know about React
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980&t=0)** - [Instructor] Before we get started, I want to quickly go over what would be helpful for you to know to get the most out of this course.
>
> **[0:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980&t=7)** This course is intended for those who have a basic understanding of React and are ready to take the next step.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980&t=13)** So during this course, I'm going to assume that you understand core concepts in React, such as JSX, components, state, props, and hooks, and worked with a tool like Create React App to set up your React projects.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980&t=28)** If none of this sounds familiar, I suggest taking our React courses first then meet me right back here to dive into React Router.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980&t=36)** I'm also going to use React Router version six throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** jsx (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Set up the project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=0)** - [Instructor] In this course, you're going to set up the frontend routing, and handle the rendering of views for a site about a fictitious conference named Red30 Tech.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=9)** You can access the project files for this course by following the link below the video.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=14)** We organized the files by chapter and video, and the files for each video contain a beginning and end state you can use as a reference, and to follow along with me.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=23)** Make sure that you have Node installed on your machine so that you're able to install all the project dependencies and run the React App.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=30)** Once you open the project in a text editor like VS Code, open your terminal and run npm install to install the project dependencies.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=40)** Then npm start to run the app and launch it in the browser.
>
> **[0:46](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=46)** Before getting started, I want to review a few details related to the project files.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=51)** Many of the assets and React components you'll use in the course are already set up for you in the project source folder, and all of the CSS to style the project is in the file index.css.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=63)** There will be times in the course when you'll add a class to a React element to apply styles from the CSS, but you won't need to update anything in this file.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=72)** Finally, all of the data for the site is located in the file. api.js.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=79)** This file exports three essential functions at the bottom, you'll use to access specific information that you'll render to the page, like a conference session, a category, or a list of categories.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=92)** And you'll notice that the site doesn't display any content or navigation links when you first launch it in the browser.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=98)** You are going to set all of that up with React Router as you progress through the course.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3), set up (2), getting started (1)
> **CLI Commands:** npm (2), make (1), node (1)
> **File Paths:** index.css (1), api.js (1)
> **Env Vars:** css (2)
> **Tools:** vs code (1), terminal (1)
> **Code Keywords:** finally, (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 1. Routing Basics

#### The fundamentals of routing
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=0)** - [Instructor] So what is routing?
>
> **[0:02](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=2)** To better grasp the fundamental concepts behind routing, let's first talk about single-page applications, or SPAs.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=10)** A single-page application, as its name implies, is a single webpage that runs in the browser and looks and functions like a multipage application.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=20)** It's built using various views that render like separate pages, but all interactions occur on one page.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=27)** When users navigate the application, the browser renders content for each specific view based on the URL without loading an entire new page from the server.
>
> **[0:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=37)** Think of popular web apps like Twitter, Airbnb, and Netflix.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=42)** These are all single-page applications that dynamically rewrite certain sections of the page and load new content as users interact with them without having to make an entirely new request to the server.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=56)** One of the most common and performant ways of building websites and applications as single-page apps is with React.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=64)** Most React applications need navigation to transition from one view to another.
>
> **[1:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=69)** So because of that, one of the fundamental parts of single-page apps React developers need to manage is routing.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=76)** So routing is the process of moving or navigating users between different parts of the application when they visit a specific URL.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=85)** In React, you navigate through a single-page app by swapping out the components displayed on screen as the URL changes.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=93)** For example, a user on a recipe search app clicks a dessert recipes link in the navigation menu to navigate from the homepage to a page displaying dessert recipes.
>
> **[1:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=103)** In this case, a home component might get replaced by a categories component that displays all the dessert recipe details.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=112)** An efficient routing solution should also keep track of browser history so users can navigate the app using the browser's back and forward buttons and even refresh the app while keeping the UI in sync with the URL.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=125)** And routing should link users to specific sections of an app.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=129)** For example, if a user bookmarks or shares a URL in your app, the URL should always direct the user to the correct location.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=139)** Similarly, the router should handle redirecting appropriately when performing other actions within the app, like submitting a form or common user events involving creating, updating and deleting content.
>
> **[2:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=152)** Now React does not come with a built-in routing system or any features for routing specifically.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=158)** React focuses only on building user interfaces and state management.
>
> **[2:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=162)** So React applications usually require a routing library and React Router is the standard routing library for React.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=170)** It provides a component-based approach to routing with a collection of navigational components.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=176)** All right, so you've learned some of the ways routing works in single-page apps and how React developers implement a tool like React Router to manage the switching of the view or what gets shown on screen when the URL changes.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=190)** So from here, you can learn how to use React Router in your React apps to navigate between different components or views, change the browser URL, modify browser history and keep your UI in sync with those changes.

> [!info]- Semantic Content
>
> **Env Vars:** url (8)
> **Code Keywords:** let (1), case, (1), require (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Install React Router DOM and connect to the browser's URL
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=0)** - [Instructor] React Router is quite versatile in that it can run anywhere React runs.
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=5)** For example, on the web, on the server with node, and on mobile devices with React Native.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=12)** This course will focus on React web applications using the React Router DOM package.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=18)** It includes all of the core functionality of React Router and DOM-specific APIs, components, and hooks you can use to implement dynamic routing in a web application.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=30)** So let's dive into using React Router to connect our conference site to the browser's URL and begin adding some navigation.
>
> **[0:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=37)** First, you'll need to install React Router as a project dependency with the tool of your choice.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=43)** I'm going to use NPM for my project.
>
> **[0:46](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=46)** So in my VS Code terminal, I'll stop running the app, then type npm install react-router-dom.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=54)** Now at the time of this recording, the latest version of React Router is version six.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=60)** So to add in work with version six in your project like me, you can optionally add @6 when running the installation.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=68)** And once it's installed, restart the app.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=73)** You enable React Router in your app via a component called BrowserRouter and using BrowserRouter in your app is fairly straightforward.
>
> **[1:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=82)** You import it into the highest component level of your app, then wrap your entire app inside of the BrowserRouter component.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=89)** So for example, index.js is the entry point into this React application rendering the top level app component to the DOM.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=99)** So in this file, I'll import BrowserRouter from React Router DOM.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=107)** Then in root.render, I'll wrap the root app component within a browser router like so.
>
> **[2:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=120)** So in short, BrowserRouter is the primary router that effectively keeps your UI in sync with the URL.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=129)** It's also aware of and controls your app's current location, browsing history and lots more.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=135)** So declaring a BrowserRouter around your entire app makes React Router available anywhere in the app.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=142)** Then you can start setting up routes that map your app's location to specific React components and change the browser URL to navigate between them.

> [!info]- Semantic Content
>
> **Env Vars:** dom (4), url (3), npm (1)
> **CLI Commands:** npm (2), node (1)
> **Prerequisites:** install (2), you'll need (1)
> **Tools:** vs code (1), terminal (1)
> **Analogies:** for example (2)
> **File Paths:** index.js (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Configure your first route
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=0)** - [Instructor] Two of React Router's core components for rendering content are routes and route.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=6)** The route component is what tells React Router to create a new route.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=10)** Its jobs is to render specific elements, like a component, to the page whenever the current URL matches a given path.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=18)** And the routes component manages all of the routes declared in the app.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=24)** In our project, app is the top-level component, and where we will declare and manage all routes.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=32)** So at the top of App.js, I'll first import the Routes and Route components from react-router-dom.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=42)** The app component is also going to return our main route configuration.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=47)** So within the app function's return statement, I'll set that up just below the header element with the Routes component.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=59)** And within these Routes tags, let's declare the app's first route with the Route component.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=66)** The Route component is key in that it maps the app's URL or current location to the different React components you've set up via two props: path and element.
>
> **[1:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=82)** The path prop indicates the URL to match and the element prop specifies what to render when path matches the URL.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=92)** So for example, to render some content at the route path or when the app loads, set the path prop to a forward slash.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=101)** Then as the value for element, pass an h1 with the text Hello, from my router!
>
> **[1:51](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=111)** I'll give that a save and over in the browser, notice that our headline immediately renders to the page.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=118)** And now let's, for example, set the path prop to something like Hello and now nothing renders at the root path because no route matches this location.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=130)** However, changing the URL to /hello displays the headline.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=137)** So now let's instruct React Router to render the home page or home component set up here in the components folder at the root path.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=147)** So back in the route component, I'll set path back to a forward slash.
>
> **[2:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=154)** Then pass the element prop, the Home tag.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=159)** Now, since we're referencing the Home component, here in App.js, we'll need to import it at the top of the file with import Home from ./Home.
>
> **[2:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=172)** And now the app renders the home component and all of its contents to the page by default.
>
> **[2:57](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=177)** Good.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=178)** You're also able to pass props down to components rendered by a route, like you would with any React component.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=186)** So for example, I'll give Home a title prop and pass it the string Welcome to Red30 Tech.
>
> **[3:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=196)** And over in the Home component, I'll first destructure the title prop here in the function definition.
>
> **[3:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=205)** Then replace the h1's text with the title variable within curly braces.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=215)** And now over in the page, good, there's the new heading text being set with props.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=221)** All right, next, I'll declare another route to render the site's category's view.
>
> **[3:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=227)** So within my routes tags, I'll add a new route component where I'll set the path prop to the string categories and the element prop to the categories component in the components directory.
>
> **[4:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=250)** Again, we'll need to import this categories component at the top with import Categories from ./Categories.
>
> **[4:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=261)** So now over in the browser, I'll test my changes by changing the URL to /categories.
>
> **[4:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=269)** And it works as expected.
>
> **[4:31](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=271)** The page displays the session categories heading.
>
> **[4:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=274)** This view needs to display all session categories from the data in api.js.
>
> **[4:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=281)** So I'll open the file Categories.js and the first thing I'll do is import the getCategories function from the API file with import getCategories from ../api.
>
> **[4:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=298)** Then inside the function, I'll assign the return value of getCategories to the constant categories.
>
> **[5:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=310)** And the value will be an array holding each category object with information we can use like a category name and ID, which you can view here in the api.js file.
>
> **[5:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=323)** So let's display the categories in an unordered list just below the heading and to apply styles from the CSS, I'll give the ul, the className categories.
>
> **[5:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=338)** And then we can iterate over the categories using the map method with categories.map.
>
> **[5:45](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=345)** So for every category object, let's render a list item displaying the category name, which we can access with cat.name.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=356)** And let's not forget to add a key prop to the li so that we don't get that unique key prop warning from React, and as a value, I'll pass it the category ID.
>
> **[6:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=366)** That's also in the data with cat.id.
>
> **[6:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=371)** And now on the categories page, we see all of the conference categories listed below the headline all neatly laid out with CSS.
>
> **[6:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=380)** Great, and notice that React Router renders the home and categories components exactly where we're declaring the routes in the app component.
>
> **[6:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=390)** So if we, for example, move the routes declaration above the header, that's where the components will be rendered.
>
> **[6:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=399)** Now, we don't want that, so let's move it back below the header.
>
> **[6:44](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=404)** And remember, you can have as many routes as you'd like in your web app but they all need to be nested inside a routes component.
>
> **[6:54](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=414)** The routes component is quite savvy in that it pays close attention to all of its child route components, and selects the proper route to render based on the URL.
>
> **[7:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=425)** Once you've set up routing in your app, you're ready to work with other components that let you manipulate the URL and navigate or link between pages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (5), function (4), from . (3), default. (1)
> **Env Vars:** url (8), css (2), api (1)
> **File Paths:** app.js (2), api.js (2), categories.js (1)
> **Code Identifiers:** getcategories (3), classname (1)
> **Analogies:** for example (4)
> **Prerequisites:** set up (3)
> **CLI Commands:** cat (2)
> **UI Navigation:** open the (1)

#### Use Link to navigate between pages
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=0)** - [Instructor] No single page app is complete without links to navigate users between pages or views.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=6)** So what might be the best approach for adding links to move around our React application?
>
> **[0:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=12)** Many websites and web apps use anchor elements to navigate between pages.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=16)** Although, you're technically able to use anchor elements to link to other pages with React, this approach causes a full page refresh.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=24)** Clicking on a link to visit another page sends a new request to the server, then the browser reloads and redirects the current page to the new page.
>
> **[0:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=34)** React Router is all about client side routing for web apps.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=38)** So it provides a special link component to change the URL and navigate to another view when users click on it without reloading the page.
>
> **[0:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=48)** We'll use the link component in App.js by first importing link from react-router-dom.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=56)** And let's have the app component return a nav element inside the header just below the image.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=64)** And this nav is going to contain the navigation for the site.
>
> **[1:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=69)** Within the nav tags, I'll add a link to the Categories route with the Link component, like so.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=77)** The Link component accepts a prop named to, which specifies the path to navigate the user to when clicked.
>
> **[1:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=86)** In this case, it's /categories to match the path we've specified for this route.
>
> **[1:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=94)** Over in the browser, you should see a new Categories link at the top of the page, and clicking on it renders the Categories component or view.
>
> **[1:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=103)** And as you would expect on any website or app, clicking the browser's back button takes you back to the previous page.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=112)** And if you inspect the link using a tool like Chrome DevTools, notice that what link renders is a fully accessible anchor element with an href attribute pointing to a URL path.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=125)** So it looks and works just how you would expect a regular link to work on a webpage.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=130)** So in a nutshell, when a user clicks on a link, React Router performs some clever checks under the hood to find the matching route and load the requested component, all without reloading the entire page in the browser.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=145)** And there are other ways to declare and display link components, that, for example, apply unique styling for selected or active links, which you'll learn about the more you explore and work with React Router.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1)
> **Env Vars:** url (2)
> **UI Navigation:** navigate to (1), click on (1)
> **File Paths:** app.js (1)
> **CLI Commands:** find (1)
> **Tools:** chrome devtools (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Challenge: Create a navigation with Link and Route
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=5)** - [Instructor] You've learned some of the basics of React Router and its declarative routing approach with components like routes, route. and link.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=14)** Now it's time to practice using what you've learned and strengthen your skills with a React Router challenge.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=19)** So let's go over the steps for this challenge which consists of creating a small navigation.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=24)** Currently, the conference site has one link in the top navigation for categories.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=29)** So I want you to create two new links, a home link that navigates to the root route and displays the home component when clicked and an about link that when clicked, renders the about component located here in the project source folder.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=47)** Remember to render this about component, you'll need to declare a new route specifying the path and the corresponding component like we did here for the categories route.
>
> **[0:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=58)** Finally, since you can import and use the link component from just about anywhere in your app, I want you to move this entire header including the site logo and nav into a separate new component named header which you'll need to create in the components folder.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=76)** So these are the four tasks you'll need to complete.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=79)** Give it a go and when you're done, join me in the following video where I'll go over my solution for the challenge.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=85)** Good luck.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (3)
> **Code Keywords:** let (1), finally, (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a navigation with Link and Route
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=5)** - [Instructor] All right, let's take a look at one solution for creating the new route, links, and header navigation component.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=12)** To create the Home and About links, I'll follow the same approach I used when creating the link to Categories.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=19)** First, add Link component displaying the text Home, which navigates to the root path.
>
> **[0:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=26)** Then I'll do the same for the About link, setting the to prop to the path /about.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=39)** There's our new links.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=40)** And since we've already declared a route for Home, clicking the Home link in the browser correctly navigates to the homepage.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=50)** And I'm thinking that the site logo should also link to the Home route.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=55)** So I'll place the image within a Link component and set the to prop to the root path, like so.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=70)** Good. Now, the logo links to the Home route.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=77)** To create the route for About, I'll add a new Route component inside of Routes and set the path prop to about.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=93)** And to let React Router know that I want to render the About view at this path, I'll set the element prop to the About component.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=107)** And now I'll need to import the About component at the top of the file with import About from ./About.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=119)** So now clicking the About link in the navigation should display the about view, and it does, great.
>
> **[2:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=128)** Next, I want to move my main header and navigation into a separate component.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=135)** So inside the project's component directory, I'll create a new file named Header.js.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=145)** Then, create my new component in this file by first defining a Header function.
>
> **[2:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=155)** And I'll set this function as the default export with export default.
>
> **[2:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=162)** So then I'll move the entire header element containing the site logo and navigational component defined here in App.js into this new function component.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=176)** Now, in order to reference the site logo from inside this header file or module, I'll need to move the import statement for it to my new header file.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=191)** And to use the Link component, I also need to import Link from react-route-dom.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=201)** And I can remove the Link import from the app component since it's no longer necessary.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=209)** Finally, to render the new Header component, I'll import it at the top of App.js with import Header from /Header.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=220)** Then, add the Header tag inside the app function just above my Routes.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=230)** With the Header navigation in a separate component, the app feels more organized, which makes maintenance easier over time.
>
> **[3:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=239)** So now, over in the browser, clicking About navigates to the about page, then Categories, and back to Home.
>
> **[4:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=247)** And I can click the browsers back and forward buttons and see that React Route keeps track of location history, like you'd expect when navigating any website or web app.
>
> **[4:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=258)** Good. All right.
>
> **[4:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=260)** So I hope that you were able to complete this challenge successfully.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=263)** If, so well done.
>
> **[4:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=264)** And if your solution looks different than mine, that's okay.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=268)** Just keep in mind that this is the code I will use moving forward in my project.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), from . (1), default. (1), module (1)
> **File Paths:** app.js (2), header.js (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)


### 2. Nested Routes and URL Parameters

#### How nested routing works
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=0)** - [Instructor] React router provides ways to swap specific sections within a page with other components in response to changes in the URL with Nested Routes.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=9)** It's a powerful feature, so let's dive into how it works.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=13)** We have a page displaying a list of categories on the conference site.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=17)** I'd also like to display a list of sessions for each category.
>
> **[0:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=21)** For example, clicking on 3D printing and design should list all sessions related to 3D printing and design.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=28)** Clicking AI and robotics should display all corresponding AI and robotic sessions, and so on.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=35)** The URL for a specific category of the conference site might look like this, categories/category-name.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=42)** So for example, categories/3d-printing-and-design or categories/ai-and-robotics and each URL or route would display all sessions related to their respective category.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=55)** Now, by looking at the URL, you might gather that each is a child category that's nested under a parent set of categories or at least that's how react router views it.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=67)** Back in App.js, to set this up we might start by creating another route.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=73)** We want to match a path like categories/category then render the category component provided here in the source components directory, so I'll add a element prop and pass it the tag for the category component, now to declare and use the category component in our route we need to import it at the top of this file with import Category from ./Category.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=109)** We haven't set up a navigation link for a category yet, so first I'll manually change the URL path to categories/category to confirm that it renders the category view and it does, good, but notice how our list of categories no longer displays on the page.
>
> **[2:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=128)** You have to click categories or the browser's back button to view them again.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=133)** It would be helpful to have the categories persist on this page to view them all at a glance.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=139)** Now, we could add the logic to redisplay the list of categories on this page, but we want to avoid repeating code or any shared layouts.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=147)** Well, react router is quite efficient at setting up and handling automatic persistent layouts like these with Nested Routes, since category is related to or you could say that it's a child of categories, you can take advantage of nested routing by placing the category route inside of the categories route like so, and now notice the Nested Routes path specifying categories again for the path seems quite redundant, doesn't it?
>
> **[3:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=180)** Well, this category route only gets rendered when the URL path is that /categories.
>
> **[3:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=188)** So in other words, it's relative to that path.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=191)** So instead of using an absolute path like categories/category, we can use a relative path here like category without the forward slash in front of it.
>
> **[3:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=202)** When you omit the forward slash, react router assumes that the path should be relative to the parent routes path.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=209)** All right, so the parent categories route now controls the rendering of its child, category route.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=216)** So visiting the URL path categories/category now displays the categories list as expected but we're still missing some content, at this path we're only viewing the content rendered by the parent categories route and we're missing the content rendered by its nested category route, like the heading for all the sessions, for example.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=240)** So there's one more step to displaying our nested layout correctly.
>
> **[4:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=244)** We need to let react router know where it should render the category content inside the parent categories component.
>
> **[4:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=252)** Since we do just about everything in react router declaratively, it provides a handy component called Outlet to let us do that quite easily.
>
> **[4:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=260)** Outlet is probably the most important component you'll use when working with Nested Routes.
>
> **[4:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=266)** So I'll head over to the categories component in the file categories.js and to render a category via an Outlet I'll first need to import Outlet from react-router-dom at the top then add the Outlet component below the categories list.
>
> **[4:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=287)** So now when the URL matches this Nested Routes path for example, categories/category, the Outlet component is going to do its nesting magic by rendering the category component exactly where we told it to.
>
> **[5:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=305)** So back on the conference site, I'll again change the path to categories/category and great, it's now displaying the category sessions heading and placeholder content below the list like we wanted.
>
> **[5:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=319)** And once we set up the category links, we'll be able to quickly and easily navigate to each category and its sessions.
>
> **[5:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=327)** All right, so you learned that routes can contain child or Nested Routes that update specific parts of the page based on the URL and that you should use Outlet in parent route elements to render their child route content.
>
> **[5:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=343)** It's what allows any nested content to display when rendering child routes.
>
> **[5:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=348)** Viewing all of your parent and child routes in one place helps with code maintenance and readability, and it comes in really handy when creating dynamic Nested Routes and links with URL parameters, which you'll learn in an upcoming video.

> [!info]- Semantic Content
>
> **Env Vars:** url (10)
> **Code Keywords:** let (3), this, (1), pass (1), from . (1)
> **Analogies:** for example (4)
> **File Paths:** app.js (1), categories.js (1)
> **Definitions:** is a  (1), in other words (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### Create a 404 or No Match Route
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=0)** - [Instructor] When you navigate to a URL like categories/sessions in the conference site, nothing renders beneath the navigation.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=8)** And notice, in the browser's console, we get a warning that says, "No routes matched location 'category/sessions'".
>
> **[0:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=15)** Well, this happens because the URL does not match any of the routes defined here in the route configuration.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=23)** And this isn't the best experience for users, is it?
>
> **[0:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=26)** It's good practice to give users immediate visual feedback when something goes wrong on a site or app, like visiting a broken URL or a route that doesn't exist.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=36)** In fact, most websites and apps usually display a 404 error page anytime a user tries to reach a URL that cannot be found on the server.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=47)** So React Router provides a quick and simple way to create a no match, or 404-like error route that renders when a URL path does not match any of the paths defined in your routes.
>
> **[0:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=58)** So we're going to set that up now on the conference site.
>
> **[1:02](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=62)** Here in the app component, I'll declare a new route, as usual, with path and element props.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=70)** This time, I'll set the value of path to an asterisk.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=75)** And the asterisk has a distinct meaning here.
>
> **[1:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=78)** It lets React Router know that it needs to handle a non-existent route.
>
> **[1:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=82)** So when none of the routes here match the URL, this special no match route gets called, and renders whatever we set for the element prop.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=92)** This time, I'll pass the element prop an H1, displaying the text, "Page Not Found".
>
> **[1:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=99)** I'll also give the H1 a class name of not found to apply some styles from the CSS.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=105)** And if you'd like to create a unique not found component to display to the user, feel free to do that as well.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=112)** For this site, I think the heading text successfully communicates to the user that they visited a non-existent link.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=119)** So let's try it out.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=121)** Over in the browser, clicking Home, About, in Categories still renders the expected content, But if I visit a URL like categories/red30, or any URL that doesn't match a route, the site displays the Page Not Found heading.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=138)** Good.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=139)** And that's really all there is to creating a no match route with React Router.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=144)** So remember, to provide a user friendly experience, your site or app should provide a fallback route, like this, to inform users that something's not quite right, and that the URL they're trying to access does not exist.

> [!info]- Semantic Content
>
> **Env Vars:** url (9), css (1)
> **Code Keywords:** match, (1), pass (1), let (1), this, (1)
> **UI Navigation:** navigate to (1)
> **Best Practices:** good practice (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Define placeholders to create dynamic routes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=0)** - [Instructor] Now you'll learn how to set placeholders to create dynamic routes that match specific URL parameters.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=8)** First let's set up links for each of the categories in the list.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=13)** Open the file categories.js and import the link component from react-router-dom at the top.
>
> **[0:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=21)** Then inside the list item, place the category name within link tags.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=27)** Each link should navigate the user to content about the category they clicked on.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=32)** So we'll set the URL path using the category ID which looks like this, for example, the category name separated by dashes.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=42)** So add a to prop to link and set it to cat.id within curly braces.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=49)** Back on the categories page, you can confirm that each is now a link by hovering over a category.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=56)** Now, when we click on a specific category in the list, like AI and robotics, we get the page not found view even though the URL path is category slash AI and robotics.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=68)** Currently, the only way to view the category content is by visiting the URL category slash category which makes sense, because we defined a nested route for that path here, but haven't yet declared a route to match the path slash AI and robotics or any categories path.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=89)** So you may be wondering, well, does this mean that I have to define a route for every single category on the conference site?
>
> **[1:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=96)** And the answer to that is, you don't.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=99)** Not all routes are fixed and determined.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=101)** In fact, declaring a route to render the sessions for each category would be tedious and excessive work.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=108)** So React Router lets you create dynamic routes using URL parameters.
>
> **[1:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=113)** Each parameter acts as a placeholder to match a specific portion of a URL.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=119)** Let's first have a look at how URL parameters might be used on a site like LinkedIn Learning, for example.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=125)** On the topics page, notice the URL pattern when navigating to the topics offered, for example, topic slash business software and tools, topic slash business analysis and strategy, or topics slash finance and accounting.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=142)** Creating individual routes for each topic and course would be excruciating to manage.
>
> **[2:28](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=148)** So instead like most sites and apps, there's likely one route defined with a placeholder that matches any given topic name or the portion of the URL following slash topics like business software and tools, for example.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=164)** So let's use a placeholder to declare a dynamic route that matches any child category of our categories route, like AI and robotics for instance.
>
> **[2:57](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=177)** You define a placeholder or URL parameter in a routes path prop using a colon.
>
> **[3:03](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=183)** So for example, I'll replace the value category with a colon followed by the name I want to give this parameter and it could be any name I want.
>
> **[3:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=193)** I'll name it category ID or catID for short.
>
> **[3:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=198)** CatID is now a dynamic segment of the category path, meaning it can match any values or pattern in the category portion of the URL.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=209)** So for example, category slash catID will match a URL like category slash entertainment or category slash education and training.
>
> **[3:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=219)** So let's test these changes in the browser.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=222)** I'll click on the first category 3D printing and design and good we no longer get the page not found view.
>
> **[3:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=228)** The page now displays the category sessions heading and placeholder content below and clicking any of the other category links also works as expected.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=240)** All right, so you've learned how to set up dynamic routes with URL parameters and this unlocks other functionality and features that let you access route parameters and display information using the current URL like a category's name and associated sessions.
>
> **[4:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=256)** A common way to do that is with a special React Router hook called use params which you'll learn more about the deeper you get into React Router.

> [!info]- Semantic Content
>
> **Env Vars:** url (14)
> **Analogies:** for example (6), for instance (1)
> **Code Keywords:** let (5), this, (1)
> **UI Navigation:** click on (2), open the (1)
> **Code Identifiers:** catid (2)
> **Prerequisites:** set up (2)
> **File Paths:** categories.js (1)
> **CLI Commands:** cat (1)

#### Read and display URL parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=0)** - [Instructor] On the conference site, each category view displays this general category session text as a heading and some placeholder text below.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=9)** It would be more helpful if the heading showed the selected category name, like 3D printing and design, AI and robotics, and so on, and most importantly, we also want to display each related session below using data from our api.js file.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=27)** So we created a route to match URLs, like category/education and training and category/keynote, using this catId URL parameter, which, as you learned, dynamically matches the category portion of the URL and renders the appropriate category component.
>
> **[0:46](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=46)** Because we've set a URL parameter here as the route path, the rendered category component can access the dynamic portion of the URL or any information being passed via the URL parameter.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=59)** For example, here it's keynote.
>
> **[1:02](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=62)** And you can use that information to perform various actions within this category component.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=68)** For example, find and display the category name and sessions.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=72)** So how do we access this dynamic portion of the URL from inside the category component?
>
> **[1:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=78)** Well, just like react provides several hooks to work with that let you perform different functions, like useState and useEffect, reactRouter has its own hooks to help with routing.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=90)** You access URL parameters within a component with reactRouters useParams hook.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=96)** Back in the project, open the file category.js and import the useParams hook from react-router-dom.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=105)** The useParams hook returns an object containing properties that map to the current URL parameters and their value.
>
> **[1:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=113)** So for instance, inside the category function component, if I console.log what useParams returns, notice in the console an object with a property name that matches the URL parameter we set for the route, catId, and its value is the dynamic portion of the current URL.
>
> **[2:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=134)** In this case, it's keynote.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=137)** Now, clicking AI and robotics, for example, changes the URL, and now the object's catId value is AI and robotics.
>
> **[2:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=146)** So next, to bring this data into the category component, I'll destructure the catId property from the object returned by useParams.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=158)** Now, it's important to make sure that the variable name here matches the URL parameter you've set.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=164)** So I'll assign it to the variable catId.
>
> **[2:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=168)** And now you can use the information stored in the catId variable to look up the category name and all related sessions and display them on the page.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=180)** Notice the getCategory function exported at the bottom of api.js.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=186)** The function finds and returns the category object in our data whose ID property matches the ID passed to the function.
>
> **[3:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=195)** Each category ID property holds a value, like virtual and augmented reality and AI and robotics, and it's what react router is using to generate paths to category links, for example.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=207)** So the object returned by the getCategory function is what's going to hold the name and session data we need to display on the page.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=217)** So let's import the getCategory function at the top of category.js with import getCategory from ../api.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=230)** Then, inside the category component, assign the object returned by the function to a variable I'll name category.
>
> **[4:02](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=242)** The function takes a category ID as an argument which we now have access to via the catId parameter.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=253)** If you log the value of category to the console, you'll notice that it's an object containing an ID name and sessions property, and the value of sessions is an array holding information about all the sessions for a category.
>
> **[4:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=274)** So let's first use the name property to display each category heading.
>
> **[4:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=280)** Back in category.js, I'll remove the console.log statement and I'll replace the word category here in the H2 with a set of curly braces, and within that, access the category name with category.name, and now clicking on a category displays the category name for each view. Great!
>
> **[5:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=306)** All right, now onto the sessions, which we'll display in an unordered list below the heading.
>
> **[5:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=312)** So I'll replace the placeholder paragraph here with a UL element to apply styles from our CSS.
>
> **[5:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=320)** I'll give it the class name session-list, and we know that the category object holds a sessions array, so we can iterate over that array here with the map method with category.sessions.map, and I'll display each session inside a list item with the class name session to apply CSS to it.
>
> **[5:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=350)** And within each list item, let's display the session name, the speaker name, and the speaker org, or where they work.
>
> **[5:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=358)** So first I'll display the session name inside a paragraph with a class name of session-name, then between the paragraph tags, I'll access the session name with session.name, and right below, I'll display the speaker name and speaker org in a paragraph.
>
> **[6:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=381)** So first, to access the speaker name, I'll type session.speaker.name, and I'll add a pipe character to separate the name and the org.
>
> **[6:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=393)** So next, I'll render the speaker org with session.[speaker.org](https://speaker.org).
>
> **[6:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=402)** And let's not forget to add a key prop to the list item.
>
> **[6:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=407)** As the value, I'll pass it the session ID with session.id.
>
> **[6:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=413)** Finally, let's test the latest updates.
>
> **[6:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=416)** On the page, clicking a category link, like 3D printing and design, displays the proper heading and the session information below, and it seems to be working that way for all the categories. Good!
>
> **[7:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=429)** Overall, the useParams hook gives you a helpful and cleaner way to access URL parameters of the current route and ensure that the rendered components are getting and displaying the correct information.

> [!info]- Semantic Content
>
> **Code Identifiers:** catid (7), useparams (6), getcategory (4), usestate (1), useeffect (1)
> **Code Keywords:** function (8), let (6), case, (1), from . (1), pass (1)
> **Env Vars:** url (13), css (2)
> **Analogies:** for example (4), just like (1), for instance (1)
> **File Paths:** category.js (3), api.js (2)
> **CLI Commands:** find (1), make (1)
> **URLs:** [speaker.org](https://speaker.org) (1)
> **UI Navigation:** open the (1)

#### Display active links
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=0)** - [Instructor] An accessible user-friendly site or app gives users visual feedback about the page they're currently visiting.
>
> **[0:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=7)** One common approach is to display an active link in a top navigation menu or sidebar, for example.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=14)** React Router provides a component called NavLink, which you can use to change the appearance of a link when it's active.
>
> **[0:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=21)** So let's use NavLink in our site to set active links for the main navigation and the category links.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=30)** NavLink is a special version of the link component that gives you a few options to style the rendered element when its path matches the current URL.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=40)** So first open the file Categories digest and import NavLink from React Router.
>
> **[0:46](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=46)** In this case, I can replace Link here in the import statement with NavLink, then below in the map method, replace the opening and closing Link tags with NavLink.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=59)** In the browser, if I inspect a category link, like 3D Printing and Design, in the Chrome DevTools' Elements panel, you'll notice that NavLink works like Link, and that it renders an anchor element that points to the path you set for it.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=75)** It also adds a class attributes with the value active only when it's the active link.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=81)** And there's built-in accessibility, too.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=83)** The aria current attribute, set to page, lets assistive technology users know that this element represents the link to the page the user is visiting.
>
> **[1:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=94)** And from here, you could select the active class in your CSS and write certain styles to indicate an active link, for example.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=102)** Or you might write the styles directly in the component.
>
> **[1:46](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=106)** I'll paste an example of what that might look like here in the categories component.
>
> **[1:51](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=111)** And notice how the NavLink component provides an isActive property which holds a Boolean value you can use to set a style on the element, like a color, when it's active or inactive.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=124)** So for example, here, it's adding a style attribute to the link and setting its color property to red if it's active, otherwise, blue when it's not active.
>
> **[2:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=134)** And we can see what that looks like on the page.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=139)** I prefer adding a custom class to the element with the className attribute and passing in a similar function that sets the class on the element.
>
> **[2:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=150)** So I'll do that here by saying, if the link isActive, set the value of the class attribute to category dash active.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=164)** Otherwise, you can give it a different className, like category inactive, or even set it to an empty string.
>
> **[2:49](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=169)** In this case, I don't want to class attribute on inactive links, so I'll set this part of the conditional to null.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=176)** And keep in mind that this approach also supports multiple classes.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=180)** So you also have the option to include a space-separated list of classNames here.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=186)** Now I've already included styles for the category active class in the CSS.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=190)** So on the site, we can view the new styles applied to any active category link.
>
> **[3:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=196)** Good.
>
> **[3:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=199)** Finally, let's implement active links in the main header navigation using a similar approach.
>
> **[3:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=206)** Open the file Header digest and import NavLink from react router dom.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=213)** Then in the header component, select all the Link tags inside the nav and replace them with NavLink.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=222)** Now this time, instead of passing each NavLink component the same function to add a className, I'll first define the function above the return.
>
> **[3:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=233)** I'll name it getClass.
>
> **[3:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=236)** And we'll check the value of the isActive property.
>
> **[4:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=244)** So we'll say if isActive is true, set a value of nav dash active, otherwise, set it to null.
>
> **[4:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=256)** And like the category active class, I have also included styles for the nav active class in the CSS.
>
> **[4:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=264)** So next, I'll give each NavLink component a className prop and pass it a reference to the getClass function.
>
> **[4:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=277)** Back on the site, navigating to Home, About and Categories displays the page's active link.
>
> **[4:44](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=284)** And notice on the Categories view that the top navigation link remains active when viewing the content for a category.
>
> **[4:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=292)** Great.
>
> **[4:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=292)** And that's how you set active links with React Router.
>
> **[4:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=296)** NavLink is a clever component that knows whether or not it's active.
>
> **[5:01](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=301)** And you can use it when building navigation, breadcrumbs, tabs, and anywhere you'd like to display to users which page or section they're visiting.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), case, (2), finally, (1), return. (1)
> **Code Identifiers:** isactive (4), classname (4), getclass (2), classnames (1)
> **Env Vars:** css (3), url (1)
> **UI Navigation:** open the (2), select the (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Tools:** chrome devtools (1)
> **Warnings:** keep in mind (1)

#### Challenge: Render a nested UI from route matches
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=0)** - [Instructor] Now that you've learned about working with nested routes, creating no match routes, and dynamic routes with URL parameters, it's time to use those skills with another React Router Cchallenge to help make what you're learning stick.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=18)** So let's go over the steps for this challenge, which mainly consists of creating a new route to display the sessions for each conference category.
>
> **[0:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=26)** For example, each session should link to a nested view displaying more information about the session, as shown in the final example.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=36)** You'll work with the session component in the source components folder.
>
> **[0:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=41)** So first, you'll define a route that renders the session component when the URL path is categories/:catId/:sessionId.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=51)** An example of that path would be /categories/ai-and-robotics/automating-user-testing, which is this path here for example.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=60)** So think about how you might use a nested route and URL parameter to set that up.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=66)** After defining the route, you'll need to set up a link to the route.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=71)** So next, you'll turn each session into a link that displays as the active link.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=77)** In the category component, you'll wrap all the content within this list item inside the component that lets users navigate to a session view or route and displays as the active link when clicked.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=90)** To navigate to a particular session, you'll set the URL path using the session ID, which you can access with session.id.
>
> **[1:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=100)** Then you'll need to let React Router know where it should render the session's content inside the category component.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=107)** It might be below the session's list, for example.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=112)** The session component is mostly all set up for you.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=116)** It imports and calls the get session function from the project's API file, and renders information for each session like the session name, description, and speaker information.
>
> **[2:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=128)** But there's one key piece missing.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=130)** Currently it's passing static, placeholder, catId, and sessionId values to the get session function, which is what finds and returns a session based on a given category and session ID.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=144)** I added the placeholders so that the component renders content for the 3D printing metal session, which will give you a way to quickly confirm and test that you configured your route correctly.
>
> **[2:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=156)** But instead, you'll need to access this information dynamically from the catId and SessionId URL parameters.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=164)** Otherwise all the session routes will display the content for 3D printing metal, and we don't want that.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=170)** So as the final step for this challenge, you'll need to replace these two variables with the React Router Hook that returns the dynamic catId and sessionId parameters from the current URL.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=184)** The goal is to get your site to look and work similar to my solution.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=189)** So give it a go and when you're done, you can review how I did it in the following video, good luck.

> [!info]- Semantic Content
>
> **Code Identifiers:** catid (4), sessionid (3)
> **Env Vars:** url (6), api (1)
> **Prerequisites:** you'll need (4), set up (2)
> **Code Keywords:** let (2), function (2), static (1)
> **Analogies:** for example (3), similar to (1)
> **UI Navigation:** navigate to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Solution: Render a nested UI from route matches
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=5)** - [Instructor] Hopefully the challenge went well, and you were able to successfully create the new session route that dynamically renders each session using URL parameters.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=16)** Now, let's go over how I would solve this challenge.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=20)** First, in App.js, I'll declare a new nested Route within the catId Route.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=29)** I'll set the path prop to a URL parameter I'll name sessionId.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=35)** And this will dynamically match any session name or portion of the URL following the catId.
>
> **[0:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=41)** And it's going to render the Session component, which we'll need to import up top with import Session from "./Session".
>
> **[0:57](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=57)** Next, in the Category component, I'll use the NavLink component to navigate to a session route, because as we did earlier for the categories, I also want to display an active link.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=68)** So first, I'll import NavLink from react-router-dom, then wrap all the content inside this list item within NavLink tags.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=85)** To navigate to a particular session, I'll add a to prop and set the URL path using the sessionId with session.id.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=98)** To style the active link, I'll set a custom class name.
>
> **[1:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=103)** So I'll add a className prop, and I'll pass it a function that checks for the value of the isActive property.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=116)** So here we'll say if isActive is true, set the value of the class to session-active, otherwise set it to null.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=135)** So now, over in our site, when you click on a session, you could see it take on the active state.
>
> **[2:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=143)** Next, I need to let React router know where it should render the session's content inside this Category component.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=151)** And I'll use the Outlet component for that, so I'll import Outlet from react-router-dom.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=157)** And I want to render a Session component via an outlet just below the ul.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=163)** So that's where I'll include the Outlet.
>
> **[2:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=168)** In the browser, I see that the 3D Printing with Metal placeholder session renders as the nested view.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=176)** Good, that means that the nested route and outlet are working.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=180)** Finally, in Session.js, to access the catId and sessionId values from the current URL, I'll use the handy useParams hook, which I'll import from react-router-dom.
>
> **[3:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=195)** And now, I can replace these two variables with useParams and destructure the catId and sessionId parameters it returns from the current URL.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=211)** And these values get supplied to the getSession function.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=215)** And that should be it.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=217)** So let's have a look at the latest updates in the browser.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=220)** I'll click on a category to view all of the related sessions then click on a session, and I see that it takes on the active state CSS styles and renders all of the nested session content below, good.
>
> **[3:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=236)** So if you completed this challenge using a similar solution, well done.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=240)** And, again, if your solution looks a little different than mine, that's okay.
>
> **[4:03](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=243)** Like the previous challenge, I will use this solution moving forward.

> [!info]- Semantic Content
>
> **Code Identifiers:** catid (4), sessionid (4), isactive (2), useparams (2), classname (1)
> **Code Keywords:** let (3), function (2), pass (1), finally, (1)
> **Env Vars:** url (6), css (1)
> **UI Navigation:** click on (3), navigate to (2)
> **File Paths:** app.js (1), session.js (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 3. Take Routing Further

#### Index routes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=0)** - [Instructor] In React Router, index routes are helpful whenever you're rendering routes dynamically, like the catID route displaying the categories, or when a parent route, like Categories, has multiple children and you want to render some default content when URL parameters are not yet provided.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=20)** For example, on the Conference site, navigating to Categories displays a blank section below the category links.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=28)** You have to click on a category to view the heading and sessions below.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=32)** You can nest an index route to add content to fill the space or even display some default sessions from a category like 3D Printing and Design.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=43)** So I'll teach you how index routes work by adding default content for this category's route.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=50)** In App.js, I'll nest a new route component within the parent categories route.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=57)** An index route shares the path of its parent.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=60)** So because of that, index routes do not have a path.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=64)** Instead, you add an index prop, as so, then like any route you add an element prop to set the element or component you want to render at the parent URL.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=76)** I'll pass element in h3 with the text, "Select a category from above."
>
> **[1:26](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=86)** So now this index route will render in the parent category's routes outlet when the URL path is /Categories.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=96)** So over in the browser, navigating to Categories renders the nested heading via the outlet.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=102)** And notice how the heading only renders until we navigate to a child path or when the user hasn't clicked one of the items in the navigation list.
>
> **[1:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=113)** So you learned that an index route is a child route with no path that renders by default at the parent route's URL.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=121)** Think of it as a default child route.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=124)** And you can nest an index route at any level of your route hierarchy to render elements when the parent matches the URL but none of its child routes match.

> [!info]- Semantic Content
>
> **Env Vars:** url (5)
> **Code Keywords:** pass (1), match. (1)
> **UI Navigation:** click on (1), navigate to (1)
> **Analogies:** for example (1), think of it as (1)
> **File Paths:** app.js (1)
> **Code Identifiers:** catid (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Navigate programmatically
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=0)** - [Instructor] Most navigation and URL changes with React Router happen in response to clicking a link.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=6)** It's a declarative form of navigation that occurs via a link or NavLink component, for example, but there are other ways to change the URL imperatively.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=16)** For example, you may sometimes need to navigate users or change the URL programmatically, after a user submits a form or updates specific data in your app, like creating or deleting a user profile or some other record, like a blog post, for instance.
>
> **[0:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=33)** React Router's useNavigate hook let's you programmatically navigate, usually, in an event handler.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=40)** So let's see the useNavigate hook in action on our conference site by adding a simple registration form that navigates users to a confirmation page, after submitting the form.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=52)** I've set up the form in the file, Register.js.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=56)** It's a function component named Register that includes some code to get us started, like a form element, containing an input field, and a handleSubmit function that gets called on form submit, and it's using React's useRef hook so that we're able to access the value of the name in input field.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=79)** In App.js, I'll set up a new route for the registration form by first importing the Register component with import Register from ./Register, then add a new Route component below the categories' routes.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=97)** I'll set the path prop to register, and I'll pass the element prop the tag for the Register component.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=109)** Next, in Header.js, I'll add a new link for the register page to the main navigation using the NavLink component.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=118)** I will just copy the link for Categories, paste it below and update the text to Register and the to prop to /Register.
>
> **[2:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=132)** All right, let's test the latest changes on the site and good, the registration route is all set up.
>
> **[2:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=140)** To begin navigating programmatically, we'll need to import the useNavigate hook from React Router at the top of Register.js.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=151)** The useNavigate hook returns a function that you call to navigate programmatically from one URL to another.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=159)** So inside the function call useNavigate and assign the return value, or function, to the const navigate.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=170)** Next, inside the handleSubmit event handler, let's call navigate, and you pass navigate the path to navigate the user to when this handleSubmit function gets called.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=184)** In this case, I'll pass at it the value /confirmed, and that's all we need for now to navigate programmatically.
>
> **[3:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=193)** Finally, we do need to declare a new route for this confirmed path.
>
> **[3:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=198)** I've also included a simple confirmation component in the project, which we'll render for this path.
>
> **[3:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=205)** So back in App.js, I'll import the Confirmation component, then add a route for it just below the register route.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=217)** I'll set the path prop to confirmed, and I'll pass the element prop the Confirmation component's tag.
>
> **[3:51](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=231)** All right, let's try it out.
>
> **[3:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=233)** Over in the browser, I'll bring up the registration page.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=238)** I'll add an email, like gil@[gilh.com](https://gilh.com) and click Submit, and the router immediately directs me over to the confirmation page, good.
>
> **[4:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=251)** The useNavigate hook is quite useful and provides a straightforward way to navigate programmatically or change the URL when a user performs some action in your app, like a button click, or as you just learned, a form submission.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (5), pass (4), from . (1), const (1)
> **Code Identifiers:** usenavigate (6), handlesubmit (3), useref (1)
> **File Paths:** register.js (2), app.js (2), header.js (1)
> **Env Vars:** url (5)
> **Analogies:** for example (2), for instance (1)
> **Prerequisites:** set up (3)
> **URLs:** [gilh.com](https://gilh.com) (1)
> **Speakers:** - [instructor] (1)

#### Pass data when navigating programmatically
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=0)** - [Instructor] When you use the useNavigate hook to navigate programmatically from one URL to another in response to a button click or form submit, for example, you're also able to pass data from one route to another.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=15)** useNavigate's return function optionally accepts an object as a second argument which you can use to pass specific data or state from the current route to the one you're navigating to.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=27)** So I'll teach you how to pass data from the register component and then use React Router's useLocation hook to access that data in the confirmation component.
>
> **[0:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=37)** It would be beneficial to the user if the confirmation page were more personalized, displaying the user's email or other information you might collect from the registration, like a name, and you can do just that by including a state object with the data you want to pass from the register route to the confirmed route or the confirmation component.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=59)** So here in the register component, I'll pass navigate an object including a state object within it.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=68)** And now we've set up a state that will always be associated with this location.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=76)** I want to pass the user's email as the state, so I'll add a property to the state called email.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=83)** And since the component is accessing the current value of the email input with useRef, we can pass it into the state with emailRef.current.value
>
> **[1:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=98)** and that's all we need to do in our register component to set the data we want to pass to the confirmed route.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=105)** Now, we need a way to access this incoming data from inside the confirmation component and display it on the page.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=114)** As I mentioned earlier, we can access the location state data via React Router's useLocation hook.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=121)** The useLocation hook is a function that returns a location object containing information about the current URL.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=129)** In confirmation.js, let's import the useLocation hook from React Router DOM.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=138)** Inside the function, if I console.log what useLocation returns, you'll notice that it's an object with properties like path name, search, hash, state, and key.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=151)** Now, in this case, the only property we need to pay attention to is state because it holds the state set in the register route.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=158)** So for instance, if I submit the registration form with an email, notice that the state property is now set to an object with an email property and the value is the email I submitted.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=174)** So let's destructure the state property from the location object returned by the useLocation hook.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=186)** And now we can access data in the location state like the email submitted by the user with state.email, for example.
>
> **[3:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=194)** So in the return statement, I'll add a new paragraph that says we've sent more details to, then open up a set of curly braces and within that display the email with state.email.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=210)** I'll also wrap the email within strong tags to make it stand out on the page.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=221)** All right, and now the user's email displays on the page.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=225)** So now, if for any reason, a user happens to visit this confirmed route without submitting the form, the application will throw a type error and break because there isn't an email property in state.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=238)** State would be null.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=240)** So as a precautionary measure, I'll use conditional rendering to access and display the email only if there's a location state.
>
> **[4:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=250)** Within curly braces, I'll use JavaScript's logical and operator as so.
>
> **[4:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=260)** This technique is also referred to as short circuit evaluation.
>
> **[4:24](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=264)** Any elements to the right of the double ampersand will render only when there's state in the location object.
>
> **[4:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=273)** All right, so you've learned that the useNavigate and useLocation hooks work hand in hand.
>
> **[4:40](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=280)** You can pass and store specific information associated with a location, then return and use that location-specific data in your components.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), function (3), let (2), case, (1), throw (1)
> **Code Identifiers:** uselocation (7), usenavigate (3), useref (1), emailref (1)
> **Env Vars:** url (2), dom (1)
> **Analogies:** for example (2), for instance (1)
> **File Paths:** confirmation.js (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Challenge: Pass location state
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=0)** (fun music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=5)** - [Instructor] Now you're going to get an opportunity to practice what you've learned about passing location state from one route to another with a quick challenge.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=14)** Let's further personalize the confirmation page by displaying the name submitted by the user in the confirmation message.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=22)** And these are the steps you'll need to complete for this challenge.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=25)** First, you'll collect the user's name in the registration form.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=29)** You can use the email input as a reference for that.
>
> **[0:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=33)** Then you'll pass the value of the name input field to the confirmation component via location state.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=39)** Finally, you'll display the user's name in the confirmation message.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=43)** You can collect the user's name however you'd like.
>
> **[0:46](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=46)** For example, first name and last name as separate fields or one input field for the full name.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=53)** Okay, I'll leave you to it now, and when you're done, you can review how I did it in the following video.
>
> **[0:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=58)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), pass (1), finally, (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (fun music) (1)

#### Solution: Pass location state
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=5)** - [Instructor] Now let's go over one solution to the location state challenge.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=10)** First I'll add a new label and input element to the registration form to collect a user's full name.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=18)** I'll copy the label and input for email, paste the new one above, change the text to name, and the value of the name attribute to name.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=29)** Like the email input, I'll access the value of this name input field using Reacts useRef Hook.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=36)** So I'll name the reference to this input nameRef, then add the useRef Hook up top by copying the emailRef Hook and naming this one nameRef.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=51)** Next I'll pass the user's name from the register route to the confirmed route, as location state via the navigate function.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=60)** So I'll add a property to our state called name, and like email, pass it into the state with nameRef.current.value.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=76)** Finally, I'll display the user's name on the confirmation page inside the first paragraph by accessing state.name.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=89)** And to prevent any errors that might break the site, if state is null, I'll move this paragraph inside the logical && expression and I'll need to place the sibling paragraphs inside a React fragment, like so.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=108)** All right, now I'll test my changes by typing a name and email into the registration form, then clicking submit, and I see the updated confirmation message showing my name and email, good!
>
> **[2:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=127)** Again, your solution may have looked a little different than mine and that's totally okay.
>
> **[2:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=131)** If you came up with something similar, well done.

> [!info]- Semantic Content
>
> **Code Identifiers:** nameref (3), useref (2), emailref (1)
> **Code Keywords:** pass (2), let (1), function (1), finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=0)** - [Guil] We covered a lot in this course, from the basics of routing and single page apps, to React Router's useful collection of navigational components and hooks.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=10)** We also explored concepts like nested routes, navigating programmatically and more, all while adding routing and navigation capabilities to a simple site.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=20)** And nice work completing the routing challenges too.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=23)** So I hope that you got a lot out of this course and that you gained a valuable new skill that you can use moving forward in React application development.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=32)** React and its tools like React Router are constantly evolving, so I encourage you to visit the React Router docs for up-to-date information frequently.
>
> **[0:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=41)** You'll also get to review more examples of what you learned in this course and even learn other concepts, helpful components and hooks to use in your projects.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=50)** And if you'd like to get in touch, be sure to visit my LinkedIn page to connect or reach out on Twitter.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=55)** My handle is at @guilh.
>
> **[0:58](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=58)** Thanks for watching and happy coding.

> [!info]- Semantic Content
>
> **Cross-References:** we covered (1)
> **Speakers:** - [guil] (1)


## Path Context

### In [[Improve Your React Skills]]
**1 of 9** | [[React- Building Styles with CSS Modules]] →

## Appears In

- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)