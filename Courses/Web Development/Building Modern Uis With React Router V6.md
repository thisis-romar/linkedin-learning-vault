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
  - '[Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)'
next_courses:
  - '[React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md)'
path_nav: '[{"path":"Improve Your React Skills","position":1,"total":9,"prev":null,"next":"React- Building Styles with CSS Modules"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/react-js
  - skill/user-interface-design
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20Modern%20Uis%20With%20React%20Router%20V6.md)

![Building Modern Uis With React Router V6](https://media.licdn.com/dms/image/v2/C560DAQG395sowEYfug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660328061370?e=2147483647&amp;v=beta&amp;t=b5V8z7yZ8KJieecrl7pgnX8gaVHjXg8pX3d07ij63co)

# Building Modern Uis With React Router V6

> Are you already familiar with React and ready to level up your skills and build modern user interfaces? In this course, learn how to extend your React applications by adding routing capabilities with React Router, the standard routing library for React. Instructor Guil Hernandez starts by going over routing basics and single page apps. He then illustrates some of the useful React Router components

> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6) | Beginner | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Building modern UIs](#building-modern-uis)
  - [What you should know about React](#what-you-should-know-about-react)
  - [Set up the project](#set-up-the-project)
- [**1. Routing Basics**](#1-routing-basics) (6 videos)
  - [The fundamentals of routing](#the-fundamentals-of-routing)
  - [Install React Router DOM and connect to the browser's URL](#install-react-router-dom-and-connect-to-the-browsers-url)
  - [Configure your first route](#configure-your-first-route)
  - [Use Link to navigate between pages](#use-link-to-navigate-between-pages)
  - [Challenge: Create a navigation with Link and Route](#challenge-create-a-navigation-with-link-and-route)
  - [Solution: Create a navigation with Link and Route](#solution-create-a-navigation-with-link-and-route)
- [**2. Nested Routes and URL Parameters**](#2-nested-routes-and-url-parameters) (7 videos)
  - [How nested routing works](#how-nested-routing-works)
  - [Create a 404 or No Match Route](#create-a-404-or-no-match-route)
  - [Define placeholders to create dynamic routes](#define-placeholders-to-create-dynamic-routes)
  - [Read and display URL parameters](#read-and-display-url-parameters)
  - [Display active links](#display-active-links)
  - [Challenge: Render a nested UI from route matches](#challenge-render-a-nested-ui-from-route-matches)
  - [Solution: Render a nested UI from route matches](#solution-render-a-nested-ui-from-route-matches)
- [**3. Take Routing Further**](#3-take-routing-further) (5 videos)
  - [Index routes](#index-routes)
  - [Navigate programmatically](#navigate-programmatically)
  - [Pass data when navigating programmatically](#pass-data-when-navigating-programmatically)
  - [Challenge: Pass location state](#challenge-pass-location-state)
  - [Solution: Pass location state](#solution-pass-location-state)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building modern UIs](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/building-modern-uis?u=76281980&t=0)** - [Guil] [React](../../Skills/Web%20Development/React.js.md) is one of the most widely used libraries for building modern user interfaces and single page applications. Out of the box, React itself does not provide [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) solutions or features that navigate users between the various URLs and views that make up a web application. But that doesn't mean we have to implement all the routing manually in every app we build. React after all has a vibrant developer community that has built common utilities like routing as add-on libraries to React. In this course, I'll teach you how to extend your React applications by adding routing capabilities with React Router, the standard routing library for React. I'll start by going over routing basics in single page apps, then dive into some of the useful React Router components, hooks and other robust features that navigate users to all the different views and links of an app and overall help create dynamic user interfaces that automatically update whenever the URL changes. I'll also provide several challenges along the way to help you practice and make what your learning stick. I'm Guil Hernandez, a [Software Development](../../Topics/Software%20Development.md) instructor and developer for over 15 years. If you're familiar with the basics of React and ready to level up your skills and build modern user interfaces with React Router, I invite you to follow along in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (10), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (6), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (1)
> **Speakers:** - [guil] (1)

#### [What you should know about React](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/what-you-should-know-about-react?u=76281980&t=0)** - [Instructor] Before we get started, I want to quickly go over what would be helpful for you to know to get the most out of this course. This course is intended for those who have a basic understanding of [React](../../Skills/Web%20Development/React.js.md) and are ready to take the next step. So during this course, I'm going to assume that you understand core concepts in React, such as JSX, components, state, props, and hooks, and worked with a tool like Create React App to set up your React projects. If none of this sounds familiar, I suggest taking our React courses first then meet me right back here to dive into React Router. I'm also going to use React Router version six throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (7)
> **Env Vars:** jsx (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Set up the project](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=0)** - [Instructor] In this course, you're going to set up the frontend [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), and handle the rendering of views for a site about a fictitious conference named Red30 Tech. You can access the project files for this course by following the link below the video. We organized the files by chapter and video, and the files for each video contain a beginning and end state you can use as a reference, and to follow along with me. Make sure that you have Node installed on your machine so that you're able to install all the project dependencies and run the [React](../../Skills/Web%20Development/React.js.md) App. Once you open the project in a text editor like VS Code, open your terminal and run [npm](../../Skills/Web%20Development/npm.md) install to install the project dependencies. Then npm start to run the app and launch it in the browser. Before getting started, I want to review a few details related to the project files. Many of the assets and React components you'll use in the course are already set up for you in the project source folder, and all of the CSS to style the project is in the file index.css. There will be times in the course when you'll add a class to a React element to apply styles from the CSS, but you won't need to update anything in this file. Finally, all of the data for the site is located in the file. api.js. This file exports three essential functions at the bottom, you'll use to access specific information that you'll render to the page, like a conference session, a category, or a list of categories. And you'll notice that the site
>
> **[1:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/set-up-the-project?u=76281980&t=93)** doesn't display any content or navigation links when you first launch it in the browser. You are going to set all of that up with React Router as you progress through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [npm](../../Skills/Web%20Development/npm.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Prerequisites:** install (3), set up (2), getting started (1)
> **CLI Commands:** npm (2), make (1), node (1)
> **File Paths:** index.css (1), api.js (1)
> **Env Vars:** css (2)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 1. Routing Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [The fundamentals of routing](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=0)** - [Instructor] So what is [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md)? To better grasp the fundamental concepts behind routing, let's first talk about single-page applications, or SPAs. A single-page application, as its name implies, is a single webpage that runs in the browser and looks and functions like a multipage application. It's built using various views that render like separate pages, but all interactions occur on one page. When users navigate the application, the browser renders content for each specific view based on the URL without loading an entire new page from the server. Think of popular web apps like Twitter, Airbnb, and Netflix. These are all single-page applications that dynamically rewrite certain sections of the page and load new content as users interact with them without having to make an entirely new request to the server. One of the most common and performant ways of building websites and applications as single-page apps is with [React](../../Skills/Web%20Development/React.js.md). Most React applications need navigation to transition from one view to another. So because of that, one of the fundamental parts of single-page apps React developers need to manage is routing. So routing is the process of moving or navigating users between different parts of the application when they visit a specific URL. In React, you navigate through a single-page app by swapping out the components displayed on screen as the URL changes.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=93)** For example, a user on a recipe search app clicks a dessert recipes link in the navigation menu to navigate from the homepage to a page displaying dessert recipes. In this case, a home component might get replaced by a categories component that displays all the dessert recipe details. An efficient routing solution should also keep track of browser history so users can navigate the app using the browser's back and forward buttons and even refresh the app while keeping the UI in sync with the URL. And routing should link users to specific sections of an app. For example, if a user bookmarks or shares a URL in your app, the URL should always direct the user to the correct location. Similarly, the router should handle redirecting appropriately when performing other actions within the app, like submitting a form or common user events involving creating, updating and deleting content. Now React does not come with a built-in routing system or any features for routing specifically. React focuses only on building user interfaces and state management. So React applications usually require a routing library and React Router is the standard routing library for React. It provides a component-based approach to routing with a collection of navigational components. All right, so you've learned some of the ways routing works in single-page apps and how React developers implement a tool like React Router to manage the switching of the view or what gets shown on screen
>
> **[3:08](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/the-fundamentals-of-routing?u=76281980&t=188)** when the URL changes. So from here, you can learn how to use React Router in your React apps to navigate between different components or views, change the browser URL, modify browser history and keep your UI in sync with those changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (13), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (12)
> **Env Vars:** url (8)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Install React Router DOM and connect to the browser's URL](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=0)** - [Instructor] [React](../../Skills/Web%20Development/React.js.md) Router is quite versatile in that it can run anywhere React runs. For example, on the web, on the server with node, and on mobile devices with [React Native](../../Skills/Mobile%20Development/React%20Native.md). This course will focus on React web applications using the React Router DOM package. It includes all of the core functionality of React Router and DOM-specific APIs, components, and hooks you can use to implement dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) in a web application. So let's dive into using React Router to connect our conference site to the browser's URL and begin adding some navigation. First, you'll need to install React Router as a project dependency with the tool of your choice. I'm going to use [npm](../../Skills/Web%20Development/npm.md) for my project. So in my VS Code terminal, I'll stop running the app, then type npm install react-router-dom. Now at the time of this recording, the latest version of React Router is version six. So to add in work with version six in your project like me, you can optionally add @6 when running the installation. And once it's installed, restart the app. You enable React Router in your app via a component called BrowserRouter and using BrowserRouter in your app is fairly straightforward. You import it into the highest component level of your app, then wrap your entire app inside of the BrowserRouter component. So for example, index.js is the entry point into this React application
>
> **[1:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/install-react-router-dom-and-connect-to-the-browser-s-url?u=76281980&t=95)** rendering the top level app component to the DOM. So in this file, I'll import BrowserRouter from React Router DOM. Then in root.render, I'll wrap the root app component within a browser router like so. So in short, BrowserRouter is the primary router that effectively keeps your UI in sync with the URL. It's also aware of and controls your app's current location, browsing history and lots more. So declaring a BrowserRouter around your entire app makes React Router available anywhere in the app. Then you can start setting up routes that map your app's location to specific React components and change the browser URL to navigate between them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (14), [npm](../../Skills/Web%20Development/npm.md) (2), [React Native](../../Skills/Mobile%20Development/React%20Native.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** dom (4), url (3), npm (1)
> **CLI Commands:** npm (2), node (1)
> **Prerequisites:** install (2), you'll need (1)
> **Tools:** vs code (1), terminal (1)
> **Analogies:** for example (2)
> **File Paths:** index.js (1)
> **Speakers:** - [instructor] (1)

#### [Configure your first route](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=0)** - [Instructor] Two of [React](../../Skills/Web%20Development/React.js.md) Router's core components for rendering content are routes and route. The route component is what tells React Router to create a new route. Its jobs is to render specific elements, like a component, to the page whenever the current URL matches a given path. And the routes component manages all of the routes declared in the app. In our project, app is the top-level component, and where we will declare and manage all routes. So at the top of App.js, I'll first import the Routes and Route components from react-router-dom. The app component is also going to return our main route configuration. So within the app function's return statement, I'll set that up just below the header element with the Routes component. And within these Routes tags, let's declare the app's first route with the Route component. The Route component is key in that it maps the app's URL or current location to the different React components you've set up via two props: path and element. The path prop indicates the URL to match and the element prop specifies what to render when path matches the URL. So for example, to render some content
>
> **[1:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=95)** at the route path or when the app loads, set the path prop to a forward slash. Then as the value for element, pass an h1 with the text Hello, from my router! I'll give that a save and over in the browser, notice that our headline immediately renders to the page. And now let's, for example, set the path prop to something like Hello and now nothing renders at the root path because no route matches this location. However, changing the URL to /hello displays the headline. So now let's instruct React Router to render the home page or home component set up here in the components folder at the root path. So back in the route component, I'll set path back to a forward slash. Then pass the element prop, the Home tag. Now, since we're referencing the Home component, here in App.js, we'll need to import it at the top of the file with import Home from ./Home. And now the app renders the home component and all of its contents to the page by default. Good. You're also able to pass props down to components rendered by a route, like you would with any React component. So for example, I'll give Home a title prop
>
> **[3:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=190)** and pass it the string Welcome to Red30 Tech. And over in the Home component, I'll first destructure the title prop here in the function definition. Then replace the h1's text with the title variable within curly braces. And now over in the page, good, there's the new heading text being set with props. All right, next, I'll declare another route to render the site's category's view. So within my routes tags, I'll add a new route component where I'll set the path prop to the string categories and the element prop to the categories component in the components directory. Again, we'll need to import this categories component at the top with import Categories from ./Categories. So now over in the browser, I'll test my changes by changing the URL to /categories. And it works as expected. The page displays the session categories heading. This view needs to display all session categories from the data in api.js. So I'll open the file Categories.js
>
> **[4:45](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=285)** and the first thing I'll do is import the getCategories function from the API file with import getCategories from ../api. Then inside the function, I'll assign the return value of getCategories to the constant categories. And the value will be an array holding each category object with information we can use like a category name and ID, which you can view here in the api.js file. So let's display the categories in an unordered list just below the heading and to apply styles from the CSS, I'll give the ul, the className categories. And then we can iterate over the categories using the map method with categories.map. So for every category object, let's render a list item displaying the category name, which we can access with cat.name. And let's not forget to add a key prop to the li so that we don't get that unique key prop warning from React, and as a value, I'll pass it the category ID. That's also in the data with cat.id. And now on the categories page, we see all of the conference categories listed below the headline all neatly laid out with CSS.
>
> **[6:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/configure-your-first-route?u=76281980&t=380)** Great, and notice that React Router renders the home and categories components exactly where we're declaring the routes in the app component. So if we, for example, move the routes declaration above the header, that's where the components will be rendered. Now, we don't want that, so let's move it back below the header. And remember, you can have as many routes as you'd like in your web app but they all need to be nested inside a routes component. The routes component is quite savvy in that it pays close attention to all of its child route components, and selects the proper route to render based on the URL. Once you've set up [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) in your app, you're ready to work with other components that let you manipulate the URL and navigate or link between pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (8), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** url (8), css (2), api (1)
> **File Paths:** app.js (2), api.js (2), categories.js (1)
> **Code Identifiers:** getcategories (3), classname (1)
> **Analogies:** for example (4)
> **Prerequisites:** set up (3)
> **CLI Commands:** cat (2)
> **UI Navigation:** open the (1)

#### [Use Link to navigate between pages](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=0)** - [Instructor] No single page app is complete without links to navigate users between pages or views. So what might be the best approach for adding links to move around our [React](../../Skills/Web%20Development/React.js.md) application? Many websites and web apps use anchor elements to navigate between pages. Although, you're technically able to use anchor elements to link to other pages with React, this approach causes a full page refresh. Clicking on a link to visit another page sends a new request to the server, then the browser reloads and redirects the current page to the new page. React Router is all about client side [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) for web apps. So it provides a special link component to change the URL and navigate to another view when users click on it without reloading the page. We'll use the link component in App.js by first importing link from react-router-dom. And let's have the app component return a nav element inside the header just below the image. And this nav is going to contain the navigation for the site. Within the nav tags, I'll add a link to the Categories route with the Link component, like so. The Link component accepts a prop named to, which specifies the path to navigate the user to when clicked. In this case, it's /categories to match the path we've specified for this route. Over in the browser, you should see a new Categories link
>
> **[1:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/use-link-to-navigate-between-pages?u=76281980&t=98)** at the top of the page, and clicking on it renders the Categories component or view. And as you would expect on any website or app, clicking the browser's back button takes you back to the previous page. And if you inspect the link using a tool like Chrome DevTools, notice that what link renders is a fully accessible anchor element with an href attribute pointing to a URL path. So it looks and works just how you would expect a regular link to work on a webpage. So in a nutshell, when a user clicks on a link, React Router performs some clever checks under the hood to find the matching route and load the requested component, all without reloading the entire page in the browser. And there are other ways to declare and display link components, that, for example, apply unique styling for selected or active links, which you'll learn about the more you explore and work with React Router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** url (2)
> **UI Navigation:** navigate to (1), click on (1)
> **File Paths:** app.js (1)
> **CLI Commands:** find (1)
> **Tools:** chrome devtools (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Challenge: Create a navigation with Link and Route](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-create-a-navigation-with-link-and-route?u=76281980&t=5)** - [Instructor] You've learned some of the basics of [React](../../Skills/Web%20Development/React.js.md) Router and its declarative [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) approach with components like routes, route. and link. Now it's time to practice using what you've learned and strengthen your skills with a React Router challenge. So let's go over the steps for this challenge which consists of creating a small navigation. Currently, the conference site has one link in the top navigation for categories. So I want you to create two new links, a home link that navigates to the root route and displays the home component when clicked and an about link that when clicked, renders the about component located here in the project source folder. Remember to render this about component, you'll need to declare a new route specifying the path and the corresponding component like we did here for the categories route. Finally, since you can import and use the link component from just about anywhere in your app, I want you to move this entire header including the site logo and nav into a separate new component named header which you'll need to create in the components folder. So these are the four tasks you'll need to complete. Give it a go and when you're done, join me in the following video where I'll go over my solution for the challenge. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Prerequisites:** you'll need (3)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a navigation with Link and Route](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=5)** - [Instructor] All right, let's take a look at one solution for creating the new route, links, and header navigation component. To create the Home and About links, I'll follow the same approach I used when creating the link to Categories. First, add Link component displaying the text Home, which navigates to the root path. Then I'll do the same for the About link, setting the to prop to the path /about.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=39)** There's our new links. And since we've already declared a route for Home, clicking the Home link in the browser correctly navigates to the homepage. And I'm thinking that the site logo should also link to the Home route. So I'll place the image within a Link component and set the to prop to the root path, like so.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=70)** Good. Now, the logo links to the Home route. To create the route for About, I'll add a new Route component inside of Routes and set the path prop to about. And to let [React](../../Skills/Web%20Development/React.js.md) Router know that I want to render the About view at this path, I'll set the element prop to the About component.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=107)** And now I'll need to import the About component at the top of the file with import About from ./About.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=119)** So now clicking the About link in the navigation should display the about view, and it does, great. Next, I want to move my main header and navigation into a separate component. So inside the project's component directory, I'll create a new file named Header.js. Then, create my new component in this file by first defining a Header function. And I'll set this function as the default export with export default. So then I'll move the entire header element containing the site logo and navigational component defined here in App.js into this new function component. Now, in order to reference the site logo from inside this header file or module, I'll need to move the import statement for it to my new header file. And to use the Link component, I also need to import Link from react-route-dom. And I can remove the Link import from the app component since it's no longer necessary. Finally, to render the new Header component,
>
> **[3:32](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-create-a-navigation-with-link-and-route?u=76281980&t=212)** I'll import it at the top of App.js with import Header from /Header. Then, add the Header tag inside the app function just above my Routes. With the Header navigation in a separate component, the app feels more organized, which makes maintenance easier over time. So now, over in the browser, clicking About navigates to the about page, then Categories, and back to Home. And I can click the browsers back and forward buttons and see that React Route keeps track of location history, like you'd expect when navigating any website or web app. Good. All right. So I hope that you were able to complete this challenge successfully. If, so well done. And if your solution looks different than mine, that's okay. Just keep in mind that this is the code I will use moving forward in my project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3)
> **File Paths:** app.js (2), header.js (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)


### 2. Nested Routes and URL Parameters

[↑ Back to Table of Contents](#table-of-contents)

#### [How nested routing works](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=0)** - [Instructor] [React](../../Skills/Web%20Development/React.js.md) router provides ways to swap specific sections within a page with other components in response to changes in the URL with Nested Routes. It's a powerful feature, so let's dive into how it works. We have a page displaying a list of categories on the conference site. I'd also like to display a list of sessions for each category. For example, clicking on 3D printing and design should list all sessions related to 3D printing and design. Clicking AI and robotics should display all corresponding AI and robotic sessions, and so on. The URL for a specific category of the conference site might look like this, categories/category-name. So for example, categories/3d-printing-and-design or categories/ai-and-robotics and each URL or route would display all sessions related to their respective category. Now, by looking at the URL, you might gather that each is a child category that's nested under a parent set of categories or at least that's how react router views it. Back in App.js, to set this up we might start by creating another route. We want to match a path like categories/category then render the category component provided here in the source components directory, so I'll add a element prop and pass it the tag for the category component,
>
> **[1:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=94)** now to declare and use the category component in our route we need to import it at the top of this file with import Category from ./Category. We haven't set up a navigation link for a category yet, so first I'll manually change the URL path to categories/category to confirm that it renders the category view and it does, good, but notice how our list of categories no longer displays on the page. You have to click categories or the browser's back button to view them again. It would be helpful to have the categories persist on this page to view them all at a glance. Now, we could add the logic to redisplay the list of categories on this page, but we want to avoid repeating code or any shared layouts. Well, react router is quite efficient at setting up and handling automatic persistent layouts like these with Nested Routes, since category is related to or you could say that it's a child of categories, you can take advantage of nested [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) by placing the category route inside of the categories route like so, and now notice the Nested Routes path specifying categories again for the path seems quite redundant, doesn't it? Well, this category route only gets rendered when the URL path is that /categories. So in other words, it's relative to that path.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=191)** So instead of using an absolute path like categories/category, we can use a relative path here like category without the forward slash in front of it. When you omit the forward slash, react router assumes that the path should be relative to the parent routes path. All right, so the parent categories route now controls the rendering of its child, category route. So visiting the URL path categories/category now displays the categories list as expected but we're still missing some content, at this path we're only viewing the content rendered by the parent categories route and we're missing the content rendered by its nested category route, like the heading for all the sessions, for example. So there's one more step to displaying our nested layout correctly. We need to let react router know where it should render the category content inside the parent categories component. Since we do just about everything in react router declaratively, it provides a handy component called Outlet to let us do that quite easily. Outlet is probably the most important component you'll use when working with Nested Routes. So I'll head over to the categories component in the file categories.js and to render a category via an Outlet I'll first need to import Outlet from react-router-dom at the top then add the Outlet component below the categories list. So now when the URL matches this Nested Routes path
>
> **[4:52](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/how-nested-routing-works?u=76281980&t=292)** for example, categories/category, the Outlet component is going to do its nesting magic by rendering the category component exactly where we told it to. So back on the conference site, I'll again change the path to categories/category and great, it's now displaying the category sessions heading and placeholder content below the list like we wanted. And once we set up the category links, we'll be able to quickly and easily navigate to each category and its sessions. All right, so you learned that routes can contain child or Nested Routes that update specific parts of the page based on the URL and that you should use Outlet in parent route elements to render their child route content. It's what allows any nested content to display when rendering child routes. Viewing all of your parent and child routes in one place helps with code maintenance and readability, and it comes in really handy when creating dynamic Nested Routes and links with URL parameters, which you'll learn in an upcoming video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (7), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** url (10)
> **Analogies:** for example (4)
> **File Paths:** app.js (1), categories.js (1)
> **Definitions:** is a  (1), in other words (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Create a 404 or No Match Route](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=0)** - [Instructor] When you navigate to a URL like categories/sessions in the conference site, nothing renders beneath the navigation. And notice, in the browser's console, we get a warning that says, "No routes matched location 'category/sessions'". Well, this happens because the URL does not match any of the routes defined here in the route configuration. And this isn't the best experience for users, is it? It's good practice to give users immediate visual feedback when something goes wrong on a site or app, like visiting a broken URL or a route that doesn't exist. In fact, most websites and apps usually display a 404 error page anytime a user tries to reach a URL that cannot be found on the server. So [React](../../Skills/Web%20Development/React.js.md) Router provides a quick and simple way to create a no match, or 404-like error route that renders when a URL path does not match any of the paths defined in your routes. So we're going to set that up now on the conference site. Here in the app component, I'll declare a new route, as usual, with path and element props. This time, I'll set the value of path to an asterisk. And the asterisk has a distinct meaning here. It lets React Router know that it needs to handle a non-existent route. So when none of the routes here match the URL, this special no match route gets called, and renders whatever we set for the element prop. This time, I'll pass the element prop an H1,
>
> **[1:35](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/create-a-404-or-no-match-route?u=76281980&t=95)** displaying the text, "Page Not Found". I'll also give the H1 a class name of not found to apply some styles from the CSS. And if you'd like to create a unique not found component to display to the user, feel free to do that as well. For this site, I think the heading text successfully communicates to the user that they visited a non-existent link. So let's try it out. Over in the browser, clicking Home, About, in Categories still renders the expected content, But if I visit a URL like categories/red30, or any URL that doesn't match a route, the site displays the Page Not Found heading. Good. And that's really all there is to creating a no match route with React Router. So remember, to provide a user friendly experience, your site or app should provide a fallback route, like this, to inform users that something's not quite right, and that the URL they're trying to access does not exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3)
> **Env Vars:** url (9), css (1)
> **UI Navigation:** navigate to (1)
> **Best Practices:** good practice (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Define placeholders to create dynamic routes](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=0)** - [Instructor] Now you'll learn how to set placeholders to create dynamic routes that match specific URL parameters. First let's set up links for each of the categories in the list. Open the file categories.js and import the link component from [react](../../Skills/Web%20Development/React.js.md)-router-dom at the top. Then inside the list item, place the category name within link tags. Each link should navigate the user to content about the category they clicked on. So we'll set the URL path using the category ID which looks like this, for example, the category name separated by dashes. So add a to prop to link and set it to cat.id within curly braces. Back on the categories page, you can confirm that each is now a link by hovering over a category. Now, when we click on a specific category in the list, like AI and robotics, we get the page not found view even though the URL path is category slash AI and robotics. Currently, the only way to view the category content is by visiting the URL category slash category which makes sense, because we defined a nested route for that path here, but haven't yet declared a route to match the path slash AI and robotics or any categories path. So you may be wondering, well, does this mean that I have to define a route for every single category
>
> **[1:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=94)** on the conference site? And the answer to that is, you don't. Not all routes are fixed and determined. In fact, declaring a route to render the sessions for each category would be tedious and excessive work. So React Router lets you create dynamic routes using URL parameters. Each parameter acts as a placeholder to match a specific portion of a URL. Let's first have a look at how URL parameters might be used on a site like [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, for example. On the topics page, notice the URL pattern when navigating to the topics offered, for example, topic slash business software and tools, topic slash business analysis and strategy, or topics slash finance and accounting. Creating individual routes for each topic and course would be excruciating to manage. So instead like most sites and apps, there's likely one route defined with a placeholder that matches any given topic name or the portion of the URL following slash topics like business software and tools, for example. So let's use a placeholder to declare a dynamic route that matches any child category of our categories route, like AI and robotics for instance. You define a placeholder or URL parameter in a routes path prop using a colon. So for example, I'll replace the value category with a colon followed by the name I want to give this parameter
>
> **[3:11](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/define-placeholders-to-create-dynamic-routes?u=76281980&t=191)** and it could be any name I want. I'll name it category ID or catID for short. CatID is now a dynamic segment of the category path, meaning it can match any values or pattern in the category portion of the URL. So for example, category slash catID will match a URL like category slash entertainment or category slash education and training. So let's test these changes in the browser. I'll click on the first category 3D printing and design and good we no longer get the page not found view. The page now displays the category sessions heading and placeholder content below and clicking any of the other category links also works as expected. All right, so you've learned how to set up dynamic routes with URL parameters and this unlocks other functionality and features that let you access route parameters and display information using the current URL like a category's name and associated sessions. A common way to do that is with a special React Router hook called use params which you'll learn more about the deeper you get into React Router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** url (14)
> **Analogies:** for example (6), for instance (1)
> **UI Navigation:** click on (2), open the (1)
> **Code Identifiers:** catid (2)
> **Prerequisites:** set up (2)
> **File Paths:** categories.js (1)
> **CLI Commands:** cat (1)

#### [Read and display URL parameters](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=0)** - [Instructor] On the conference site, each category view displays this general category session text as a heading and some placeholder text below. It would be more helpful if the heading showed the selected category name, like 3D printing and design, AI and robotics, and so on, and most importantly, we also want to display each related session below using data from our api.js file. So we created a route to match URLs, like category/education and training and category/keynote, using this catId URL parameter, which, as you learned, dynamically matches the category portion of the URL and renders the appropriate category component. Because we've set a URL parameter here as the route path, the rendered category component can access the dynamic portion of the URL or any information being passed via the URL parameter. For example, here it's keynote. And you can use that information to perform various actions within this category component. For example, find and display the category name and sessions. So how do we access this dynamic portion of the URL from inside the category component? Well, just like [react](../../Skills/Web%20Development/React.js.md) provides several hooks to work with that let you perform different functions, like useState and useEffect, reactRouter has its own hooks to help with [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). You access URL parameters within a component with reactRouters useParams hook.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=96)** Back in the project, open the file category.js and import the useParams hook from react-router-dom. The useParams hook returns an object containing properties that map to the current URL parameters and their value. So for instance, inside the category function component, if I console.log what useParams returns, notice in the console an object with a property name that matches the URL parameter we set for the route, catId, and its value is the dynamic portion of the current URL. In this case, it's keynote. Now, clicking AI and robotics, for example, changes the URL, and now the object's catId value is AI and robotics. So next, to bring this data into the category component, I'll destructure the catId property from the object returned by useParams. Now, it's important to make sure that the variable name here matches the URL parameter you've set. So I'll assign it to the variable catId. And now you can use the information stored in the catId variable to look up the category name and all related sessions and display them on the page. Notice the getCategory function exported at the bottom of api.js. The function finds and returns the category object in our data whose ID property matches
>
> **[3:12](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=192)** the ID passed to the function. Each category ID property holds a value, like virtual and augmented reality and AI and robotics, and it's what react router is using to generate paths to category links, for example. So the object returned by the getCategory function is what's going to hold the name and session data we need to display on the page. So let's import the getCategory function at the top of category.js with import getCategory from ../api.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=230)** Then, inside the category component, assign the object returned by the function to a variable I'll name category. The function takes a category ID as an argument which we now have access to via the catId parameter.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=253)** If you log the value of category to the console, you'll notice that it's an object containing an ID name and sessions property, and the value of sessions is an array holding information about all the sessions for a category. So let's first use the name property to display each category heading. Back in category.js, I'll remove the console.log statement and I'll replace the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) category here in the H2 with a set of curly braces, and within that, access the category name with category.name, and now clicking on a category displays the category name for each view. Great! All right, now onto the sessions, which we'll display in an unordered list below the heading. So I'll replace the placeholder paragraph here with a UL element to apply styles from our CSS. I'll give it the class name session-list, and we know that the category object holds a sessions array, so we can iterate over that array here with the map method with category.sessions.map, and I'll display each session inside a list item with the class name session to apply CSS to it.
>
> **[5:50](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/read-and-display-url-parameters?u=76281980&t=350)** And within each list item, let's display the session name, the speaker name, and the speaker org, or where they work. So first I'll display the session name inside a paragraph with a class name of session-name, then between the paragraph tags, I'll access the session name with session.name, and right below, I'll display the speaker name and speaker org in a paragraph. So first, to access the speaker name, I'll type session.speaker.name, and I'll add a pipe character to separate the name and the org. So next, I'll render the speaker org with session.[speaker.org](https://speaker.org). And let's not forget to add a key prop to the list item. As the value, I'll pass it the session ID with session.id. Finally, let's test the latest updates. On the page, clicking a category link, like 3D printing and design, displays the proper heading and the session information below, and it seems to be working that way for all the categories. Good! Overall, the useParams hook gives you a helpful and cleaner way to access URL parameters of the current route and ensure that the rendered components are getting and displaying the correct information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** catid (7), useparams (6), getcategory (4), usestate (1), useeffect (1)
> **Env Vars:** url (13), css (2)
> **Analogies:** for example (4), just like (1), for instance (1)
> **File Paths:** category.js (3), api.js (2)
> **CLI Commands:** find (1), make (1)
> **URLs:** [speaker.org](https://speaker.org) (1)
> **UI Navigation:** open the (1)

#### [Display active links](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=0)** - [Instructor] An accessible user-friendly site or app gives users visual feedback about the page they're currently visiting. One common approach is to display an active link in a top navigation menu or sidebar, for example. [React](../../Skills/Web%20Development/React.js.md) Router provides a component called NavLink, which you can use to change the appearance of a link when it's active. So let's use NavLink in our site to set active links for the main navigation and the category links. NavLink is a special version of the link component that gives you a few options to style the rendered element when its path matches the current URL. So first open the file Categories digest and import NavLink from React Router. In this case, I can replace Link here in the import statement with NavLink, then below in the map method, replace the opening and closing Link tags with NavLink. In the browser, if I inspect a category link, like 3D Printing and Design, in the Chrome DevTools' Elements panel, you'll notice that NavLink works like Link, and that it renders an anchor element that points to the path you set for it. It also adds a class attributes with the value active only when it's the active link. And there's built-in accessibility, too. The aria current attribute, set to page, lets assistive technology users know that this element represents the link to the page the user is visiting.
>
> **[1:34](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=94)** And from here, you could select the active class in your CSS and write certain styles to indicate an active link, for example. Or you might write the styles directly in the component. I'll paste an example of what that might look like here in the categories component. And notice how the NavLink component provides an isActive property which holds a Boolean value you can use to set a style on the element, like a color, when it's active or inactive. So for example, here, it's adding a style attribute to the link and setting its color property to red if it's active, otherwise, blue when it's not active. And we can see what that looks like on the page. I prefer adding a custom class to the element with the className attribute and passing in a similar function that sets the class on the element. So I'll do that here by saying, if the link isActive, set the value of the class attribute to category dash active. Otherwise, you can give it a different className, like category inactive, or even set it to an empty string. In this case, I don't want to class attribute on inactive links, so I'll set this part of the conditional to null. And keep in mind that this approach also supports multiple classes. So you also have the option to include a space-separated list of classNames here. Now I've already included styles
>
> **[3:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=187)** for the category active class in the CSS. So on the site, we can view the new styles applied to any active category link. Good. Finally, let's implement active links in the main header navigation using a similar approach. Open the file Header digest and import NavLink from react router dom. Then in the header component, select all the Link tags inside the nav and replace them with NavLink. Now this time, instead of passing each NavLink component the same function to add a className, I'll first define the function above the return. I'll name it getClass. And we'll check the value of the isActive property. So we'll say if isActive is true, set a value of nav dash active, otherwise, set it to null. And like the category active class, I have also included styles for the nav active class in the CSS. So next, I'll give each NavLink component a className prop and pass it a reference to the getClass function. Back on the site, navigating to Home, About and Categories
>
> **[4:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/display-active-links?u=76281980&t=281)** displays the page's active link. And notice on the Categories view that the top navigation link remains active when viewing the content for a category. Great. And that's how you set active links with React Router. NavLink is a clever component that knows whether or not it's active. And you can use it when building navigation, breadcrumbs, tabs, and anywhere you'd like to display to users which page or section they're visiting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **Code Identifiers:** isactive (4), classname (4), getclass (2), classnames (1)
> **Env Vars:** css (3), url (1)
> **UI Navigation:** open the (2), select the (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Tools:** chrome devtools (1)
> **Warnings:** keep in mind (1)

#### [Challenge: Render a nested UI from route matches](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=0)** - [Instructor] Now that you've learned about working with nested routes, creating no match routes, and dynamic routes with URL parameters, it's time to use those skills with another [React](../../Skills/Web%20Development/React.js.md) Router Cchallenge to help make what you're learning stick. So let's go over the steps for this challenge, which mainly consists of creating a new route to display the sessions for each conference category. For example, each session should link to a nested view displaying more information about the session, as shown in the final example. You'll work with the session component in the source components folder. So first, you'll define a route that renders the session component when the URL path is categories/:catId/:sessionId. An example of that path would be /categories/ai-and-robotics/automating-user-testing, which is this path here for example. So think about how you might use a nested route and URL parameter to set that up. After defining the route, you'll need to set up a link to the route. So next, you'll turn each session into a link that displays as the active link. In the category component, you'll wrap all the content within this list item inside the component that lets users navigate to a session view or route and displays as the active link when clicked. To navigate to a particular session, you'll set the URL path
>
> **[1:33](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=93)** using the session ID, which you can access with session.id. Then you'll need to let React Router know where it should render the session's content inside the category component. It might be below the session's list, for example. The session component is mostly all set up for you. It imports and calls the get session function from the project's API file, and renders information for each session like the session name, description, and speaker information. But there's one key piece missing. Currently it's passing static, placeholder, catId, and sessionId values to the get session function, which is what finds and returns a session based on a given category and session ID. I added the placeholders so that the component renders content for the 3D printing metal session, which will give you a way to quickly confirm and test that you configured your route correctly. But instead, you'll need to access this information dynamically from the catId and SessionId URL parameters. Otherwise all the session routes will display the content for 3D printing metal, and we don't want that. So as the final step for this challenge, you'll need to replace these two variables with the React Router Hook that returns the dynamic catId and sessionId parameters from the current URL. The goal is to get your site to look
>
> **[3:07](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-render-a-nested-ui-from-route-matches?u=76281980&t=187)** and work similar to my solution. So give it a go and when you're done, you can review how I did it in the following video, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3)
> **Code Identifiers:** catid (4), sessionid (3)
> **Env Vars:** url (6), api (1)
> **Prerequisites:** you'll need (4), set up (2)
> **Analogies:** for example (3), similar to (1)
> **UI Navigation:** navigate to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Render a nested UI from route matches](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=5)** - [Instructor] Hopefully the challenge went well, and you were able to successfully create the new session route that dynamically renders each session using URL parameters. Now, let's go over how I would solve this challenge. First, in App.js, I'll declare a new nested Route within the catId Route. I'll set the path prop to a URL parameter I'll name sessionId. And this will dynamically match any session name or portion of the URL following the catId. And it's going to render the Session component, which we'll need to import up top with import Session from "./Session". Next, in the Category component, I'll use the NavLink component to navigate to a session route, because as we did earlier for the categories, I also want to display an active link. So first, I'll import NavLink from [react](../../Skills/Web%20Development/React.js.md)-router-dom, then wrap all the content inside this list item within NavLink tags. To navigate to a particular session, I'll add a to prop and set the URL path using the sessionId with session.id. To style the active link,
>
> **[1:41](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=101)** I'll set a custom class name. So I'll add a className prop, and I'll pass it a function that checks for the value of the isActive property. So here we'll say if isActive is true, set the value of the class to session-active, otherwise set it to null. So now, over in our site, when you click on a session, you could see it take on the active state. Next, I need to let React router know where it should render the session's content inside this Category component. And I'll use the Outlet component for that, so I'll import Outlet from react-router-dom. And I want to render a Session component via an outlet just below the ul. So that's where I'll include the Outlet. In the browser, I see that the 3D Printing with Metal placeholder session renders as the nested view. Good, that means that the nested route and outlet are working. Finally, in Session.js, to access the catId and sessionId values from the current URL, I'll use the handy useParams hook, which I'll import from react-router-dom.
>
> **[3:15](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-render-a-nested-ui-from-route-matches?u=76281980&t=195)** And now, I can replace these two variables with useParams and destructure the catId and sessionId parameters it returns from the current URL. And these values get supplied to the getSession function. And that should be it. So let's have a look at the latest updates in the browser. I'll click on a category to view all of the related sessions then click on a session, and I see that it takes on the active state CSS styles and renders all of the nested session content below, good. So if you completed this challenge using a similar solution, well done. And, again, if your solution looks a little different than mine, that's okay. Like the previous challenge, I will use this solution moving forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **Code Identifiers:** catid (4), sessionid (4), isactive (2), useparams (2), classname (1)
> **Env Vars:** url (6), css (1)
> **UI Navigation:** click on (3), navigate to (2)
> **File Paths:** app.js (1), session.js (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 3. Take Routing Further

[↑ Back to Table of Contents](#table-of-contents)

#### [Index routes](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=0)** - [Instructor] In [React](../../Skills/Web%20Development/React.js.md) Router, index routes are helpful whenever you're rendering routes dynamically, like the catID route displaying the categories, or when a parent route, like Categories, has multiple children and you want to render some default content when URL parameters are not yet provided. For example, on the Conference site, navigating to Categories displays a blank section below the category links. You have to click on a category to view the heading and sessions below. You can nest an index route to add content to fill the space or even display some default sessions from a category like 3D Printing and Design. So I'll teach you how index routes work by adding default content for this category's route. In App.js, I'll nest a new route component within the parent categories route. An index route shares the path of its parent. So because of that, index routes do not have a path. Instead, you add an index prop, as so, then like any route you add an element prop to set the element or component you want to render at the parent URL. I'll pass element in h3 with the text, "Select a category from above." So now this index route will render in the parent category's routes outlet when the URL path is /Categories.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/index-routes?u=76281980&t=96)** So over in the browser, navigating to Categories renders the nested heading via the outlet. And notice how the heading only renders until we navigate to a child path or when the user hasn't clicked one of the items in the navigation list. So you learned that an index route is a child route with no path that renders by default at the parent route's URL. Think of it as a default child route. And you can nest an index route at any level of your route hierarchy to render elements when the parent matches the URL but none of its child routes match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** url (5)
> **UI Navigation:** click on (1), navigate to (1)
> **Analogies:** for example (1), think of it as (1)
> **File Paths:** app.js (1)
> **Code Identifiers:** catid (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Navigate programmatically](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=0)** - [Instructor] Most navigation and URL changes with [React](../../Skills/Web%20Development/React.js.md) Router happen in response to clicking a link. It's a declarative form of navigation that occurs via a link or NavLink component, for example, but there are other ways to change the URL imperatively. For example, you may sometimes need to navigate users or change the URL programmatically, after a user submits a form or updates specific data in your app, like creating or deleting a user profile or some other record, like a blog post, for instance. React Router's useNavigate hook let's you programmatically navigate, usually, in an event handler. So let's see the useNavigate hook in action on our conference site by adding a simple registration form that navigates users to a confirmation page, after submitting the form. I've set up the form in the file, Register.js. It's a function component named Register that includes some code to get us started, like a form element, containing an input field, and a handleSubmit function that gets called on form submit, and it's using React's useRef hook so that we're able to access the value of the name in input field. In App.js, I'll set up a new route for the registration form by first importing the Register component with import Register from ./Register, then add a new Route component below the categories' routes.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=97)** I'll set the path prop to register, and I'll pass the element prop the tag for the Register component. Next, in Header.js, I'll add a new link for the register page to the main navigation using the NavLink component. I will just copy the link for Categories, paste it below and update the text to Register and the to prop to /Register. All right, let's test the latest changes on the site and good, the registration route is all set up. To begin navigating programmatically, we'll need to import the useNavigate hook from React Router at the top of Register.js. The useNavigate hook returns a function that you call to navigate programmatically from one URL to another. So inside the function call useNavigate and assign the return value, or function, to the const navigate. Next, inside the handleSubmit event handler, let's call navigate, and you pass navigate the path to navigate the user to when this handleSubmit function gets called. In this case, I'll pass at it the value /confirmed, and that's all we need for now to navigate programmatically.
>
> **[3:13](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/navigate-programmatically?u=76281980&t=193)** Finally, we do need to declare a new route for this confirmed path. I've also included a simple confirmation component in the project, which we'll render for this path. So back in App.js, I'll import the Confirmation component, then add a route for it just below the register route. I'll set the path prop to confirmed, and I'll pass the element prop the Confirmation component's tag. All right, let's try it out. Over in the browser, I'll bring up the registration page. I'll add an email, like gil@[gilh.com](https://gilh.com) and click Submit, and the router immediately directs me over to the confirmation page, good. The useNavigate hook is quite useful and provides a straightforward way to navigate programmatically or change the URL when a user performs some action in your app, like a button click, or as you just learned, a form submission.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **Code Identifiers:** usenavigate (6), handlesubmit (3), useref (1)
> **File Paths:** register.js (2), app.js (2), header.js (1)
> **Env Vars:** url (5)
> **Analogies:** for example (2), for instance (1)
> **Prerequisites:** set up (3)
> **URLs:** [gilh.com](https://gilh.com) (1)
> **Speakers:** - [instructor] (1)

#### [Pass data when navigating programmatically](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=0)** - [Instructor] When you use the useNavigate hook to navigate programmatically from one URL to another in response to a button click or form submit, for example, you're also able to pass data from one route to another. useNavigate's return function optionally accepts an object as a second argument which you can use to pass specific data or state from the current route to the one you're navigating to. So I'll teach you how to pass data from the register component and then use [React](../../Skills/Web%20Development/React.js.md) Router's useLocation hook to access that data in the confirmation component. It would be beneficial to the user if the confirmation page were more personalized, displaying the user's email or other information you might collect from the registration, like a name, and you can do just that by including a state object with the data you want to pass from the register route to the confirmed route or the confirmation component. So here in the register component, I'll pass navigate an object including a state object within it. And now we've set up a state that will always be associated with this location. I want to pass the user's email as the state, so I'll add a property to the state called email. And since the component is accessing the current value of the email input with useRef, we can pass it into the state with emailRef.current.value
>
> **[1:38](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=98)** and that's all we need to do in our register component to set the data we want to pass to the confirmed route. Now, we need a way to access this incoming data from inside the confirmation component and display it on the page. As I mentioned earlier, we can access the location state data via React Router's useLocation hook. The useLocation hook is a function that returns a location object containing information about the current URL. In confirmation.js, let's import the useLocation hook from React Router DOM. Inside the function, if I console.log what useLocation returns, you'll notice that it's an object with properties like path name, search, hash, state, and key. Now, in this case, the only property we need to pay attention to is state because it holds the state set in the register route. So for instance, if I submit the registration form with an email, notice that the state property is now set to an object with an email property and the value is the email I submitted. So let's destructure the state property from the location object returned by the useLocation hook.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=186)** And now we can access data in the location state like the email submitted by the user with state.email, for example. So in the return statement, I'll add a new paragraph that says we've sent more details to, then open up a set of curly braces and within that display the email with state.email. I'll also wrap the email within strong tags to make it stand out on the page. All right, and now the user's email displays on the page. So now, if for any reason, a user happens to visit this confirmed route without submitting the form, the application will throw a type error and break because there isn't an email property in state. State would be null. So as a precautionary measure, I'll use conditional rendering to access and display the email only if there's a location state. Within curly braces, I'll use [JavaScript](../../Skills/Software%20Development/JavaScript.md)'s logical and operator as so.
>
> **[4:20](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/pass-data-when-navigating-programmatically?u=76281980&t=260)** This technique is also referred to as short circuit evaluation. Any elements to the right of the double ampersand will render only when there's state in the location object. All right, so you've learned that the useNavigate and useLocation hooks work hand in hand. You can pass and store specific information associated with a location, then return and use that location-specific data in your components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** uselocation (7), usenavigate (3), useref (1), emailref (1)
> **Env Vars:** url (2), dom (1)
> **Analogies:** for example (2), for instance (1)
> **File Paths:** confirmation.js (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Challenge: Pass location state](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=0)** (fun music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/challenge-pass-location-state?u=76281980&t=5)** - [Instructor] Now you're going to get an opportunity to practice what you've learned about passing location state from one route to another with a quick challenge. Let's further personalize the confirmation page by displaying the name submitted by the user in the confirmation message. And these are the steps you'll need to complete for this challenge. First, you'll collect the user's name in the registration form. You can use the email input as a reference for that. Then you'll pass the value of the name input field to the confirmation component via location state. Finally, you'll display the user's name in the confirmation message. You can collect the user's name however you'd like. For example, first name and last name as separate fields or one input field for the full name. Okay, I'll leave you to it now, and when you're done, you can review how I did it in the following video. Good luck.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (fun music) (1)

#### [Solution: Pass location state](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=5)** - [Instructor] Now let's go over one solution to the location state challenge. First I'll add a new label and input element to the registration form to collect a user's full name. I'll copy the label and input for email, paste the new one above, change the text to name, and the value of the name attribute to name. Like the email input, I'll access the value of this name input field using Reacts useRef Hook. So I'll name the reference to this input nameRef, then add the useRef Hook up top by copying the emailRef Hook and naming this one nameRef. Next I'll pass the user's name from the register route to the confirmed route, as location state via the navigate function. So I'll add a property to our state called name, and like email, pass it into the state with nameRef.current.value.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/solution-pass-location-state?u=76281980&t=76)** Finally, I'll display the user's name on the confirmation page inside the first paragraph by accessing state.name. And to prevent any errors that might break the site, if state is null, I'll move this paragraph inside the logical && expression and I'll need to place the sibling paragraphs inside a [React](../../Skills/Web%20Development/React.js.md) fragment, like so. All right, now I'll test my changes by typing a name and email into the registration form, then clicking submit, and I see the updated confirmation message showing my name and email, good! Again, your solution may have looked a little different than mine and that's totally okay. If you came up with something similar, well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Code Identifiers:** nameref (3), useref (2), emailref (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6/next-steps?u=76281980&t=0)** - [Guil] We covered a lot in this course, from the basics of [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and single page apps, to [React](../../Skills/Web%20Development/React.js.md) Router's useful collection of navigational components and hooks. We also explored concepts like nested routes, navigating programmatically and more, all while adding routing and navigation capabilities to a simple site. And nice work completing the routing challenges too. So I hope that you got a lot out of this course and that you gained a valuable new skill that you can use moving forward in React [Application Development](../../Skills/Software%20Development/Application%20Development.md). React and its tools like React Router are constantly evolving, so I encourage you to visit the React Router docs for up-to-date information frequently. You'll also get to review more examples of what you learned in this course and even learn other concepts, helpful components and hooks to use in your projects. And if you'd like to get in touch, be sure to visit my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) page to connect or reach out on Twitter. My handle is at @guilh. Thanks for watching and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (5), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [guil] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-modern-uis-with-react-router-v6-2495079)

## Skills Covered

- React.js
- User Interface Design

## Path Context

### In [Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)
**1 of 9** | [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) →

## Appears In

- [Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [React- Cloud-Powered Apps with Firebase](React-%20Cloud-Powered%20Apps%20with%20Firebase.md) — React.js
- [Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md) — React.js
- [React- Software Architecture](React-%20Software%20Architecture.md) — React.js
- [React- Testing and Debugging](React-%20Testing%20and%20Debugging.md) — React.js
- [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) — React.js

---

[↑ Back to top](#)