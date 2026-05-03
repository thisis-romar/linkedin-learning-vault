---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: react-hooks
url: "https://www.linkedin.com/learning/react-hooks"
duration_minutes: 97
duration: 1h 37m
level: Beginner
updated: 4/16/2025
learners: 36779
skills:
  - React Hooks
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQED93Y_n4EFGg/learning-public-crop_675_1200/B4DZW6GmJ6G4AY-/0/1742584046483?e=2147483647&amp;v=beta&amp;t=zk4ez_mB2zcz3ZaD6NYH5gHRXalf7TbzJXXH_indJvs"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore React.js Development]]'
prev_courses:
  - '[[React- Creating and Hosting a Full-Stack Site]]'
next_courses:
  - '[[React- Accessibility]]'
path_nav: '[{"path":"Explore React.js Development","position":4,"total":8,"prev":"React- Creating and Hosting a Full-Stack Site","next":"React- Accessibility"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/react-hooks
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/React%20Hooks.md)

![React Hooks](https://media.licdn.com/dms/image/v2/D4D0DAQED93Y_n4EFGg/learning-public-crop_675_1200/B4DZW6GmJ6G4AY-/0/1742584046483?e=2147483647&amp;v=beta&amp;t=zk4ez_mB2zcz3ZaD6NYH5gHRXalf7TbzJXXH_indJvs)

# React Hooks

> React Hooks embed logic into functions in new React applications. In this course, instructor Eve Porcello covers various styles of Hooks usage and ways to integrate them into your programming workflow. Find out how Hooks came to be part of the library and learn to install the Create React App. Explore ways to use the useState Hook to handle different types of state variables and work with componen

> [LinkedIn Learning](https://www.linkedin.com/learning/react-hooks) | 1h 37m | Beginner | 37K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Understanding modern React](#understanding-modern-react)
- [**1. Intro to React Hooks**](#1-intro-to-react-hooks) (2 videos)
  - [Installing Create React App](#installing-create-react-app)
  - [Reviewing the project](#reviewing-the-project)
- [**2. The useState Hook**](#2-the-usestate-hook) (7 videos)
  - [Reviewing Array and Object destructuring](#reviewing-array-and-object-destructuring)
  - [Incorporating the useState Hook](#incorporating-the-usestate-hook)
  - [Building a checkbox with useState](#building-a-checkbox-with-usestate)
  - [Working with component trees](#working-with-component-trees)
  - [Sending interactions up component trees](#sending-interactions-up-component-trees)
  - [How to use CoderPad](#how-to-use-coderpad)
  - [Solution: Building an interactive to-do list](#solution-building-an-interactive-to-do-list)
- [**3. The useEffect Hook**](#3-the-useeffect-hook) (4 videos)
  - [Introducing useEffect](#introducing-useeffect)
  - [Working with the dependency array](#working-with-the-dependency-array)
  - [Fetching data with useEffect](#fetching-data-with-useeffect)
  - [Solution: Working with timers](#solution-working-with-timers)
- [**4. Additional Hooks**](#4-additional-hooks) (6 videos)
  - [Handling complex state with useReducer](#handling-complex-state-with-usereducer)
  - [Refactoring useState to useReducer](#refactoring-usestate-to-usereducer)
  - [Dispatching actions with useReducer](#dispatching-actions-with-usereducer)
  - [Managing form inputs with useRef](#managing-form-inputs-with-useref)
  - [Creating controlled components with useState](#creating-controlled-components-with-usestate)
  - [Solution: Building a counter](#solution-building-a-counter)
- [**5. Creating Custom Hooks**](#5-creating-custom-hooks) (7 videos)
  - [Reusing form logic with custom Hooks](#reusing-form-logic-with-custom-hooks)
  - [Placing data in context](#placing-data-in-context)
  - [Retrieving data with useContext](#retrieving-data-with-usecontext)
  - [Creating a custom Hook with context](#creating-a-custom-hook-with-context)
  - [Data fetching with a Fetch Hook](#data-fetching-with-a-fetch-hook)
  - [Building a fetch component](#building-a-fetch-component)
  - [Solution: Creating a user settings hook](#solution-creating-a-user-settings-hook)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)
- [**Appendix**](#appendix) (1 videos)
  - [React Hooks history](#react-hooks-history)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding modern React](https://www.linkedin.com/learning/react-hooks/understanding-modern-react-25372915?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/understanding-modern-react-25372915?u=76281980&t=0)** - [Eve] [[React Hooks]] are functions that we can use to manage state, [[Fetch]] data, and interact with browser APIs. In this course we'll explore why you might use hooks and how they can make development more scalable. I'm Eve Porcello and I'm a developer and an educator. Let's explore some more ways we can modernize our [[React.js|React]] code with hooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Hooks]] (1), [[Fetch]] (1), [[React.js|React]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [eve] (1)


### 1. Intro to React Hooks

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Create React App](https://www.linkedin.com/learning/react-hooks/installing-create-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/installing-create-react-app?u=76281980&t=0)** - [Instructor] One of the most common tools for creating a new [[React.js|React]] application is Create React App. Create React App will give us a React project structure, the ability to use the latest [[JavaScript]] features, and tools for optimizing your app for production. To get started with Create React App, you need to do a couple of things. So first we need to open our terminal. So we're going to type node -v. This will let us know what version it is. As long as you see something higher than 8.10 then you can use Create React App. The next thing I'll check is [[npm]]. NPM is the Node Package Manager and we want to make sure that this is version five, six, or higher. If you don't see those versions, you can always go to [nodejs.org](https://nodejs.org) and download the latest. Now that we know that we have the correct versions, what I need to do is I want to get into a folder where I want to run my project. So I'm just going to CD, change directory to the desktop, and then I'm going to run Create React App using this command called NPX. So NPX is a package runner that comes with NPM that we can use to run something like Create React App without having to install it globally on our computer. So this is really nice. So we'll use NPX create-react-app and then whatever the name of the project is going to be. So I'm going to just call it react-hooks. This might take a little while to install.
>
> **[1:46](https://www.linkedin.com/learning/react-hooks/installing-create-react-app?u=76281980&t=106)** Now that that's installed, we can change directory into the react-hooks directory and then run NPM start. NPM start is going to start our project on local host 3000. So this should pop this open in a new browser window. We can see the starter project running right here. Now if this went really badly for you and maybe it didn't fully install, or your screen doesn't look like this, or you got a bunch of errors, something that you can do is you can go to a new window and type react.new. So react.new is going to open up a code sandbox, which is an in-browser IDE that you can use for React development. So if you'd rather follow along in something like this, you can. You will sign in either using your [[GitHub]] or your [[Google]] account. So I'll sign in with GitHub here. And it's going to make me do everything to sign in.
>
> **[2:51](https://www.linkedin.com/learning/react-hooks/installing-create-react-app?u=76281980&t=171)** So now that I'm logged in, I can start to make some changes, hello world. And as soon as I do that, we're going to see that render in the output. So this is a really cool way to get started with a React project quickly. If you don't want to work with the files locally, you can always work with them here. As soon as you save it too, it's going to fork the sandbox so that you have your own URL to always refer back to. Whether you're working with the code sandbox here in the browser or if you're working with the project locally, you're ready to go. With this set up, in the next lesson, we're going to look at how to create a component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (15), [[npm]] (5), [[GitHub]] (2), [[JavaScript]] (1), [[Google]] (1)
> **CLI Commands:** npm (5), make (3), npx (3), node (2), cd (1)
> **Env Vars:** npm (5), npx (3), ide (1), url (1)
> **Prerequisites:** install (3), set up (1)
> **Tools:** github (2), terminal (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** download the (1), starter project (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### [Reviewing the project](https://www.linkedin.com/learning/react-hooks/reviewing-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/reviewing-the-project?u=76281980&t=0)** - [Instructor] In the previous video, we looked at how we can use Create [[React.js|React]] App to generate a React project for us. So let's take a little look at what's going on here. So inside of our package.[[JSON]] file, we have react, and then we have some testing dependencies. In our index.js file, we have this serviceWorker that I'm actually going to delete, 'cause we don't need it. I'm going to delete kind of any evidence of a serviceWorker. I also wanted to point this out. So in recent versions of React, react.StrictMode has been a wrapper that you can use on components. The benefit of wrapping your component with react.StrictMode is it's going to give you warnings. It's going to give you opportunities to fix possible bugs before they happen. So if you're in violation of any React rules, you're going to find out about it. So the next thing I want to do here is let's open up our app.js file. So this is our app component, kind of the main component that has been generated. Let's go ahead and get rid of everything inside of it. And then let's just add in each one here, and we'll say, "Hello World". And now as soon as we do that, it should immediately render to the browser. So that's really all we need in the way of setup. Again, our app component here is being rendered by the reactDOM.render. So here, we really have everything we need to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (7), [[JSON]] (1)
> **File Paths:** package.json (1), index.js (1), app.js (1)
> **Code Identifiers:** serviceworker (2), reactdom (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 2. The useState Hook

[↑ Back to Table of Contents](#table-of-contents)

#### [Reviewing Array and Object destructuring](https://www.linkedin.com/learning/react-hooks/reviewing-array-and-object-destructuring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/reviewing-array-and-object-destructuring?u=76281980&t=0)** - [Instructor] The most common place that object destructuring is used in [[React.js|React]] is inside of the component. So here we have a component that's rendering Hello World but we also can pass in to any one of these components an object called props. So that means that I can replace World with props.name.
>
> **[0:22](https://www.linkedin.com/learning/react-hooks/reviewing-array-and-object-destructuring?u=76281980&t=22)** Then I can go back to our index file. I can pass in a name property. Let's say Alex. And then our component will render with the dynamic data. One way that we can shorten up our syntax here is we can destructure the props object. So because this is just literally an object, let's console.log it to check it out. Here's the object, here's the name. Let me get rid of the console message. And I can use destructuring to pop out just the name. So now if we hit Save, no changes but everything is working as expected. Destructuring is also used with arrays and it's used quite a bit with [[React Hooks]]. So let's consider in our index file an array of people. So we'll create an array of people. Let's say Alex, Ali, and Anna. Now, typically, if we wanted to access the first item in this array, we'd use its position. So for example, we could console.log people and then grab the first item. Now, if we open up our console, we'll see there's Alex there. Similarly, if we wanted to grab say Anna, we would access them by their position in the array. So here's where destructuring can help. Instead of accessing by position,
>
> **[1:54](https://www.linkedin.com/learning/react-hooks/reviewing-array-and-object-destructuring?u=76281980&t=114)** what I can do is I can use array destructuring here on line six. So I'm going to replace people with an array and then I'm going to create a variable name that I want to use to access the first time. So the first item that I add here will correspond to the first item in the array. So let's try logging this again and we'll get rid of that second console log. And we see there's Alex. Similarly, I could add a second one and we'll say console.log second Alex, Ali and then another really cool thing you can do is let's say you only want the third item in the array, you don't care about naming any of the other ones. You can do something kind of cool where you can add two commas and those will stand in for Alex and Ali and then you can name the third. Then I can console.log third. There we go. This syntax is really useful to be able to assign actual names to positions in an array. Destructuring assignment can be used with objects and arrays and having an understanding of both are going to help you work more effectively with modern React.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[React Hooks]] (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Incorporating the useState Hook](https://www.linkedin.com/learning/react-hooks/incorporating-the-usestate-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/incorporating-the-usestate-hook?u=76281980&t=0)** - [Instructor] Now that we understand array destructuring a little bit more, let's go ahead and get rid of this array. We're also going to get rid of this name in our app. And just to keep everything on the same screen, I'm also going to not import my app from that app file. I'm just going to create it right here in the index. So what we want to do in this video is we want to add state to our App component. And the way that we do this with [[React Hooks]] is we're going to use a function. Let's first go ahead and return a div. Inside of the div, let's say the package is and I'll give that a save. And the next thing I want to do is I want to create a constant here on line six and I'll going to call this results and I'm going to call the function useState. If I want to use useState, I also need to import it from the [[React.js|React]] library and this is a function, so we're going to import it inside of these curly braces. So what I'm really looking to do here is I'm looking to figure out what this result is. So let me open up our console and I also am going to dock this to the bottom here just so that we can read it a little better. And it looks like our useState call is returning an array. And it has two items in it. One, zero position is undefined
>
> **[1:33](https://www.linkedin.com/learning/react-hooks/incorporating-the-usestate-hook?u=76281980&t=93)** and the second is a function. So I can use array destructuring here to make use of these values. So the way I want to make use of them is the first thing I want to add to this array is the name of the state variable that I want to keep track of. So in this case, it's just going to be called status. And then I'm going to pass in initial status to the useState function, so I'll say Not Delivered. Then on line 10, we're going to say the package is status. So now, I've been able to display the current status, the initial status of this application. So this is our state variable that we're going to be be to keep track of. Now, the other thing that the useState call returned was a function. The function is going to be used for changing the state. So let's call this setStatus. Now, setStatus is going to be the function we can use to set the status of the application. We will create a button and it's going to be called Delivered. Actually, let's called it Deliver and then we're going to create an onClick handler. Inside of this onClick method, we're going to call setStatus and we'll pass in Delivered. So that is the new status. So onClick, every time I click on this button, we're going to call this function and this function is going to change the status from the initial status, Not Delivered to a new status, which is delivered. So let's check it out.
>
> **[3:07](https://www.linkedin.com/learning/react-hooks/incorporating-the-usestate-hook?u=76281980&t=187)** I'm going to click the button and it'll say it's delivered. So this is this kind of simplest example of how useState works. useState, every time it's called, it returns a pair inside of an array. The first item in the array is the state variable. The second item is the function that we use to change the state. And typically this is just called set and whatever the value of the state variable is. That's not a requirement but you'll often see that pattern used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Hooks]] (1), [[React.js|React]] (1)
> **Code Identifiers:** usestate (7), setstatus (3), onclick (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Building a checkbox with useState](https://www.linkedin.com/learning/react-hooks/building-a-checkbox-with-usestate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/building-a-checkbox-with-usestate?u=76281980&t=0)** - [Instructor] Another way that we can take advantage of useState, is to use it in combination with inputs. Here, we're going to make the status of a checkbox, checked or unchecked, a state variable. So the first thing we want to do is let's get rid of our old code here. We'll get rid of that useState call. Then inside of this div, we're going to add an input. And the input is going to have a type and that type is checkbox. And then we also want create a state variable. So this time it's going to be checked and setChecked. We'll call useState, and then the initial state is going to be false. So now I can use the value of checked inside of this input. So I'll say that the value is checked. Let's also add a paragraph tag next to this, and we'll say, "If it's checked, then say checked, "otherwise display not checked." Okay. So at this point, it shows our initial state that's working as we expect it to, but we're still not seeing the actual click work. So what we can do is let's add an onChange event to our input. And the onchange is going to, as we saw before, it's going to call setChecked. And what we can pass in here is whatever the opposite of checked is. There we go.
>
> **[1:33](https://www.linkedin.com/learning/react-hooks/building-a-checkbox-with-usestate?u=76281980&t=93)** It's usually a good idea to look at whatever the value of this variable is, to check the checked variable, if you will, and then return the opposite. So this is just a little enhancement that we can make, not much of a change, but checked and unchecked are going to work as we click. So there we go. We've created a checkbox component and we're using the useState hook to help us keep track of the value of checked.

> [!info]- Semantic Content
>
> **Code Identifiers:** usestate (4), setchecked (2), onchange (1)
> **UI Navigation:** checkbox (3)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### [Working with component trees](https://www.linkedin.com/learning/react-hooks/working-with-component-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/working-with-component-trees?u=76281980&t=0)** - [Instructor] More often than not, our [[React.js|react]] applications are not a single component. So working with state in a component tree is really an important concept to know about. So what we're going to build in this lesson is a star rating component, so that we can rate anything: books, movies, restaurants. We can use it all over, all different types of applications. Now the app component is going to be responsible for just rendering another component. So the app component here, let's go ahead and say, return &lt;StarRating /&gt;; We actually want to create it using a smaller component called a Star. So the Star component is going to be what makes up all of these StarRating components. And the star that we want to use is actually from a separate library called react icons. So let me go ahead and import it first, and then we're going to install it using [[npm]]. So over here in my terminal window, I need to run npm install react-icons. And we'll just let that install over here, kind of in the background. Let's go back to our component. And now the Star is going to return FaStar. So FaStar is just one of the many icons that react-icon supplies,
>
> **[1:33](https://www.linkedin.com/learning/react-hooks/working-with-component-trees?u=76281980&t=93)** so you can use it for all sorts of different things. The StarRating component is going to return a certain number of stars. Also, Ijust noticed that I need to add an S here to react-icons. So in order to create an array of stars that can be displayed on the page, we need to create a little helper function here called createArray. Now createArray is going to take in the length, so that's just how many stars we want to create. And it's going to return an array with that number of items. So it's going to create an array of whatever length that is. So now what I can do is I can create our function called StarRating. StarRating is going to use that createArray function, and then we're going to map over this. So we'll supply n and i, the i is going help us with the key. All right, so now we have these stars rendering on the page. That's fairly cool! (giggles) But we can make this one step better by changing the properties a little bit. So let's take a look at the first place to change those properties. First, I'm going to pass totalStars into the StarRating component. And I'm going to say that this is a 10 star component. Now, instead of just hard coding this, I'm going to say that totalStars should be the value that's passed to createArray. And there we go, we have 10 stars!
>
> **[3:08](https://www.linkedin.com/learning/react-hooks/working-with-component-trees?u=76281980&t=188)** Let's also add a default property here. So I'll say totalStars = 5, so that if totalStars aren't passed, we're going to use 5 as the default. But if we pass 10, it's going to use whatever the user passes. Now, the final thing I want to add here is I want to add a property for color. So eventually we're going to be able to click on these stars and change their color. So we're going to say selected = false. And then inside of our Star component, we'll add a property called color. And then we'll say if selected, we want to make this red, otherwise let's make it gray. So now all of these stars are gray, aqnd when I select them eventually, they're going to turn red. Now in the next lesson, we'll make that happen. And just as a spoiler, we're going to use useState.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[npm]] (2)
> **Code Identifiers:** createarray (4), totalstars (4), usestate (1)
> **CLI Commands:** make (4), npm (2)
> **Prerequisites:** install (3)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)

#### [Sending interactions up component trees](https://www.linkedin.com/learning/react-hooks/sending-interactions-up-component-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/sending-interactions-up-component-trees?u=76281980&t=0)** - [Instructor] We've used [[React.js|React]] properties to get us this far, we've created a few different stars. Now, what we need to do is we need to handle clicking on them. In order to do this, we're going to create a state variable using useState. So we're still importing useState from React. And then if I scroll down a little bit to our star rating component, this is where I'm going to manage the state. So first we're going to create a constant here. We'll call this selectedStars and setSelectedStars. Those are long variable names, but they're descriptive so we'll stick with that. Or as an initial state we want to provide zero. So we'll say that when our component renders we don't want to have any of these be selected. Now we need to supply these properties to each one of the stars 'cause the star is actually the component that's being clicked. We want to make sure it has access to this state variable. So I can pass to the star here on line 22 a property called selected. This looks familiar from here. So selected here is going to set selectedStars is greater than i. So this is going to keep track based on the index of how many stars are selected. Then we're going to add this function called onSelect. So similar to our functions from before that changed state, we're going to need to use that setSelectedStars function. So let me scroll down a little bit.
>
> **[1:34](https://www.linkedin.com/learning/react-hooks/sending-interactions-up-component-trees?u=76281980&t=94)** And inside of this function, let's go ahead and call setSelectedStars. And then how we want to select the star is by using its index plus one, because we're using a zero-based index in [[JavaScript]], we need to make sure that we're capturing that correctly. Now, the final thing I need to do is I need to pass this function to each star, 'cause like I said that's where the clicking is actually going to happen. So first we'll pass the property. Then here on line 13 let's add the onClick, which'll just be set equal to onSelect. So that will call this setSelectedStars function. So now if we click on any one of these stars, it's going to capture that correctly. And then if I wanted to change the total stars to something a little more realistic, we can do so. And we see, let's [[Zoom]] way in on that. And we see that every time I click one of those stars, the state changes, and we can make this even more clear if we want to by adding a fragment here around our createArray function. So let's first wrap it in a JSX expression. Then we're going to wrap this in a fragment. And now we can add, underneath the createArray function, a paragraph that says selectedStars of totalStars.
>
> **[3:16](https://www.linkedin.com/learning/react-hooks/sending-interactions-up-component-trees?u=76281980&t=196)** Zero out of four, three out of four, four out of four. Pretty cool. So just to recap, we are managing our state with this function called useState, setSelectedStars is the function we use to change the state, and we've attached this to every single one of these stars so that as I click them it will change the application state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[JavaScript]] (1), [[Zoom]] (1)
> **Code Identifiers:** setselectedstars (5), usestate (3), selectedstars (3), onselect (2), createarray (2)
> **UI Navigation:** scroll down (2), select the (1), click on (1)
> **CLI Commands:** make (3)
> **Env Vars:** jsx (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/react-hooks/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that will appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors that you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with these code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four areas. Instructions up here on the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used down here in this test code panel, and then a console for output, as well as the render, because this challenge is using [[React.js|React]]. You can use these drag handles to allocate space as you'd like. And to get even more horizontal space for the code editors, you can always collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's parameters, and desired results. So what we can do here is we can create our answer. We're trying to find the largest number in an array, so we can say return math.max, and then push in all of these numbers. That looks good. Now we'll drag this handle here for a moment.
>
> **[1:36](https://www.linkedin.com/learning/react-hooks/how-to-use-coderpad?u=76281980&t=96)** We'll see that the largest number is 19. This is the React component that's being rendered. But if I want to test the code like that, the console is going to open in a moment and we'll see those test results. So all we need to do to run that again, we just click Test My Code. And here you'll see a message indicating whether your code returned a correct result. Now the code editor down here in the lower right is how our code is going to be used. So we can change this code to experiment with various different test cases. We also can compare that to what we're writing up here. And if we were to write something incorrect, like maybe I remove the spread operator there on line six, we'll see that those tests when I click Test My Code will start to fail. So regardless of whether your answer is successful, you'll see messages in the console output on the lower left, and then if any of those messages are too long to fit in that area, you can always scroll sideways to see the whole thing. When you finish each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Building an interactive to-do list](https://www.linkedin.com/learning/react-hooks/solution-building-an-interactive-todo-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/solution-building-an-interactive-todo-list?u=76281980&t=0)** - [Instructor] We have the skeleton here for our task list. So we have our initialTasks array and we have our UI that's being rendered already, but we need to make some adjustments to this to include some hooks so that we can start to manage this array of tasks and we can update them. So what we want to do here is we're going to create the TaskItem component first. So here inside of the div, we're going to add an input. It will have a type of checkbox, and then we'll have a closing input here. Then we're going to add a few other properties. First, we'll add checked, which will be task.completed, and then we'll have onChange. So the onChange event is going to have some sort of function set to it. We'll write that in a second. Then we'll add an id this time with the backticks. We'll pre-append task dash and then plug in the task.id. Then next to this input, we will add a label and then another label. What this should read inside of the label is task.name, and then we'll say [[HTML]]\for
>
> **[1:37](https://www.linkedin.com/learning/react-hooks/solution-building-an-interactive-todo-list?u=76281980&t=97)** and then we will plug in task-task.id.
>
> **[1:46](https://www.linkedin.com/learning/react-hooks/solution-building-an-interactive-todo-list?u=76281980&t=106)** Okay, so, so far so good. It's not liking this empty expression that we're using over here. That's okay, we'll write that in a moment, but we need to see kind of the context of that. Now what we want to do here is we want to create a list of tasks in state. We'll say tasks, and then setTasks. We'll set that equal to useState initialTasks. So we'll just plug these in as the initial state here, and we'll make sure to spell initial correctly. Then we're going to make adjustments to this toggleTask function. So this says that this should toggle the completed status of a task. Okay, we can do that. We'll say setTasks, and then inside of this, we'll map over the tasks. And for each task, we want to check to see that the taskId is equal to taskId. So this is checking the data. If that's true, going to push in all of the values from the task and then add on this other one called completed, which will be set to not task.completed. So the default will be not completed, otherwise we'll just return a task. Okay, so here,
>
> **[3:21](https://www.linkedin.com/learning/react-hooks/solution-building-an-interactive-todo-list?u=76281980&t=201)** instead of just returning zero here, we're going to say tasks.filter. And then for each task, we want to check to see if completed, and then we'll say .length. Okay. Finally, we need to start to make the UI happen down here. And this will help us to clear out this onChange error as well. So this is telling us how many tasks we have remaining. Within our task list down here, we can say tasks.map. So for each task, we want to return a task item. The task item is going to have a few different properties, specifically a key, task.id, and task, all of these task values need to be sent, as well as the on toggle, which will be set to the function that we just created, toggleTask, and we need to wrap that in some curly braces. Nice. So now that we have this function wired up, we can pass it down to our taskItem component. So the taskItem component needs to take in onToggle, and it also needs to take in the details about the task. So we can just destructure those task and onToggle, then we're going to say onChange equals,
>
> **[4:57](https://www.linkedin.com/learning/react-hooks/solution-building-an-interactive-todo-list?u=76281980&t=297)** and then we'll call onToggle with the task.id. All right, so now we see this appearing. This is counting down how many more tasks that we have to do. If we test our code, we should see that all of our tests are passing. Nice. So our task item is the smaller component. It receives information about the state from the parent component, which is the task list, and we're using useState, and specifically the tasks and setTasks variables to manage state throughout our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Code Identifiers:** onchange (4), settasks (3), ontoggle (3), initialtasks (2), usestate (2)
> **CLI Commands:** make (4)
> **UI Navigation:** toggle (2), checkbox (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. The useEffect Hook

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing useEffect](https://www.linkedin.com/learning/react-hooks/introducing-useeffect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/introducing-useeffect?u=76281980&t=0)** - [Instructor] Another hook that is exported by the [[React.js|React]] library is useEffect. useEffect allows you to perform side effects in function components. So a side effect could be something like a console log, or it could interact with some kind of DOM API like history or window. So first we want to adjust our component here. So I'm going to get rid of everything related to our star. We had fun with our star rating, but it's time to move on. And then we're going to replace our star rating with a section. And the section will have a paragraph that says congratulations. And now we want to see that printed out. Perfect. So then we can use useEffect, but in order to use useEffect, we really need to set up a state variable. So first we'll set up a name and a function to change the state called setName. Then we'll call useState with some sort of an initial value. So the initial value we'll use here is Jan. Now, when we create that variable, we can then display the name inside of this string. Congratulations Jan. Then let's create a button. So the button is going to say change winner. So whoever is the winner will be reflected in the UI. Then we're going to add an onClick handler here and we'll pass in a function that's going to set the name. So it'll set the name to Will.
>
> **[1:36](https://www.linkedin.com/learning/react-hooks/introducing-useeffect?u=76281980&t=96)** So now when I changed the winner, it'll say congratulations Will. Now, this is all stuff we're familiar with because we've already used useState, but here's where useEffect comes in. So we're going to use this function called useEffect, and useEffect takes in a function. So it's going to look like this to get us started. Then we also need to be sure to import useEffect from React. Okay, so what we want useEffect to do is we want to have it change the document title. This is the default document title, React App, right here. So what I can do is I can just say document title equals celebrate name. So when I refresh, it says celebrate Jan, and then if I click change winner, it says congratulations Will. And also it's called this useEffect because it's changed the document title to reflect that. Now, by default, this runs after each render and every update, and this may not always be what you want. So in the next video, we'll learn how to customize when these useEffect functions fire.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3)
> **Code Identifiers:** useeffect (11), usestate (2), setname (1), onclick (1)
> **Env Vars:** dom (1), api (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Working with the dependency array](https://www.linkedin.com/learning/react-hooks/working-with-the-dependency-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/working-with-the-dependency-array?u=76281980&t=0)** - [Instructor] As we saw, every time we change the state, this useEffect call fires, but there's something that can help us out with this. So let's go ahead and pass another argument to this useEffect function, and the argument is just going to be an empty array. Notice how the name changes in the dom, but the effect is not called. So when we pass an empty array, it means that the effect will only fire once, on first render. You also can pass the name of the variable in here. So I could say name, and then when I change the winner, it will follow up by changing the document title. So this is particularly useful if you're dealing with more than one state variable. I'm going to change the document title to a console log message, and then I'll say celebrate name. We'll add another useEffect here. This will take in another function. And this time we'll say console.log, the user is, and we need to create another state variable, too. We'll call these admin and setAdmin, and then the initial state will be false. So this console log message is going to say the user is. We'll use a template here and we'll check the value of admin. If it's admin, we'll say admin. And then if not, we'll say not admin.
>
> **[1:34](https://www.linkedin.com/learning/react-hooks/working-with-the-dependency-array?u=76281980&t=94)** Okay, so let's go back. And now we have two different state variables. Let's also add another paragraph and another button. So here on line 30, if it's an administrator, then return logged in. Otherwise, return not logged in. And then this button will say login. And then onClick should call that setAdmin function to change the state to true. Okay. So we have a lot of stuff going on here, and what we're noticing right away is that these have fired, these useEffect calls have fired on first render, but let's go ahead and remove this dependency array from our first useEffect. So I'll give that a save, celebrate Jan, user is not admin. So let's click the first one. We see the new state, celebrate Will, but we're still getting this message, too. So my desired effect here, no pun intended, is that if I change the winner, I only want to call this useEffect. So that's where the dependency array comes into play. We'll say, call this one any time the name changes. And then the second one here, we'll say call this one any time the admin changes. So now I change the winner,
>
> **[3:09](https://www.linkedin.com/learning/react-hooks/working-with-the-dependency-array?u=76281980&t=189)** and we just logged celebrate Will. I changed login, and it just logs the second useEffect. So this dependency array is really useful. We don't want to be running code that we don't have to be. We want to be really specific about which effects should be called when, and we can help do so with this dependency array.

> [!info]- Semantic Content
>
> **Code Identifiers:** useeffect (7), setadmin (2), onclick (1)
> **Cross-References:** as we saw (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Fetching data with useEffect](https://www.linkedin.com/learning/react-hooks/fetching-data-with-useeffect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/fetching-data-with-useeffect?u=76281980&t=0)** - [Instructor] Another use case for useEffect is for data fetching. So let's say we had an API like api.[github.com/users](https://github.com/users) so this is just a straight up [[Representational State Transfer (REST)|rest]] API. It returned some [[JSON]] data and we want to make a request for this data and then load it into our page. So the way I can do that is by using a combination of useState and useEffect. The first thing we'll do is we will update our component quite a bit and let's just start literally from scratch with this thing. So we'll still import useState and useEffect but inside of this app component now we want to create a state variable for data and setData. And then on first render we want useState the initial state just to be an empty array. So then we're going to say return a paragraph that says No Users. So now if we look at our app, it says No Users. It's going to be up to us to get the data from that API using a useEffect call, useEffect always takes in a function we're going to use [[Fetch]] which takes in the URL of the API. So api.[github.com/users](https://github.com/users), literally the same thing as this. once we've fetched, we need to call then
>
> **[1:38](https://www.linkedin.com/learning/react-hooks/fetching-data-with-useeffect?u=76281980&t=98)** and we'll take that response and we'll pass it as json so response.json the function should return that then, and here's what's real cool we can say .then, and we're going to call setData. So we could say response, setData with the response
>
> **[2:07](https://www.linkedin.com/learning/react-hooks/fetching-data-with-useeffect?u=76281980&t=127)** or we can just literally pass in setData. So that's kind of a shortcut that we can use if we'd like to. So if there's some data we want to return an unordered list we want to map over all these users and display their username. So we'll say data.map and then for each user, we want to add a list item and for each one of these list items we want to say user.username And it's not called username it's called login. Alright so let's try that again login and there we go. We also because we have the ids for all of these people we probably getting that dreaded error yap, so what we can do is we can say key equals user.id and that should be cleared, nice we're also getting this warning coming from [[React Hooks]] telling us that we need to add a list of dependencies so that we don't have this infinite chain of updates. So there's a possibility every time we're using useEffects that if we don't handle the dependency array correctly then we're going to continuously make this useEffect call to that API we're going to add an empty array here to useEffect so that it's only called once on page load. Now what happens if we want to make
>
> **[3:43](https://www.linkedin.com/learning/react-hooks/fetching-data-with-useeffect?u=76281980&t=223)** this a little bit more interesting? Let's wrap our ul with a div so that we can add a button, and this button which will say Removed Data Let's add an on click to it and the on click is going to call setData and remember all these functions take in a new state. So our new state is going to be an empty array. I scroll to the bottom I say Remove Data and all the data is gone but what happens if I remove that dependency array? I'll scroll to the bottom again I'll say Remove Data. And it's constantly flickering it's constantly trying to load it again. So there's a bunch of extra HTTP requests going on here that are being caused by us not supplying this empty array. So that's how you use useEffect to load data and always remember that dependency array so you don't take down your APIs with too many HTTP requests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[GitHub]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1), [[React.js|React]] (1)
> **Code Identifiers:** useeffect (8), setdata (5), usestate (3), useeffects (1)
> **Env Vars:** api (5), http (2), url (1)
> **CLI Commands:** make (3)
> **URLs:** [github.com](https://github.com) (2)
> **Tools:** github (2)
> **File Paths:** response.json (1)
> **Warnings:** warning (1)

#### [Solution: Working with timers](https://www.linkedin.com/learning/react-hooks/solution-working-with-timers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/solution-working-with-timers?u=76281980&t=0)** - [Instructor] UseEffect hooks are really helpful when we're dealing with asynchronous data. Now, that could be something like a [[Fetch]] for an external API or that could be working with a timer. So we're going to go ahead and work with a timer today. And we're going to borrow from this function that was already here, the loadTimerData. And this is going to set a time out and that'll happen after two seconds. Now, within our function, this App function, we need to create a bunch of different useState variables. So those are going to look like this. We'll create one called seconds and that'll be a function to update the state called setSeconds. And we'll set that equal to useState with an initial state of zero. We'll also use loading and setLoading. useState, this time, will take in true and then we'll say timerData and setTimerData also should be set to useState and the initial state should be null. So from here, I can actually use this within our little return here and within the div, we're going to have a JSX expression where we'll check to see if this is loading. If so, we're going return a paragraph and the paragraph
>
> **[1:36](https://www.linkedin.com/learning/react-hooks/solution-working-with-timers?u=76281980&t=96)** should read Loading timer data. The other option, if that's not true, is we can say H2 and then H2 again. And then we'll say timerData.timerTitle. Okay. Let's also make sure that this is wrapped correctly. There we go. So once we have that loader handled, we can then add another div. This other div here is going to display a certain number of seconds, and then we'll say className timer-display. All right, so that should be displayed here. Now, this is a challenge to have us flex our useEffect muscles. So let's put them into play. We're going to come up here to the top and beneath our first useState call, we're going to call useEffect. Now, useEffect takes in a function. It also takes in a dependency list. So this is where I can specify how many times or when I want this to run. So if we leave this as an empty dependency array, it means the effect will run once on mount.
>
> **[3:10](https://www.linkedin.com/learning/react-hooks/solution-working-with-timers?u=76281980&t=190)** All right, so useEffect here will say const intervalId equals setInterval. Here we'll pass in another callback function, setSeconds, which takes in the prevSeconds, and then adds one. And then let's also make sure to add one second as the second parameter for that setInterval. Now from here, what we can do, still inside of the useEffect, is we can return a cleanup function to clear the interval. So all we need to do here is called clearInterval and pass in the intervalId.
>
> **[4:07](https://www.linkedin.com/learning/react-hooks/solution-working-with-timers?u=76281980&t=247)** Okay, so this is our effect for the timer. The second one that we need to add, we'll say useEffect and useEffect should have this asynchronous function that's going to model fetching some data. So this function is going to try, we'll say const data = await loadTimerData. Nice. Then we'll setTimerData with whatever the data is. And finally, we'll call setLoading to false. Then we'll say catch. And this will handle any of our errors. So we'll take in an error and we'll say console.error. So here we'll say Error loading timer data. We'll concatenate that with the error. And then once that's complete, we'll set the loading state back to false. So once we've created this function, we need to call it. It's going to be a function that calls itself here. And then finally, we don't need any cleanup inside of this effect and we need to pass in the empty array, meaning that the effect runs once on mount. Now, it also is asking us to implement
>
> **[5:39](https://www.linkedin.com/learning/react-hooks/solution-working-with-timers?u=76281980&t=339)** the reset functionality. So we'll say setSeconds to zero. Okay, so let's see how we're doing. Our button is wired up correctly. We should see our Reset Timer working correctly, If I click on that. I feel pretty good about this. So let's go ahead and test the code. This will go over to our Console output. So this is looking good. All of our tests are passing. So we've used a combination of useState and useEffect to manage some asynchronous data, asynchronous state within our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Code Identifiers:** useeffect (8), usestate (6), setseconds (3), loadtimerdata (2), setloading (2)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), jsx (1)
> **Definitions:** is a  (1), is called (1)
> **UI Navigation:** click on (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 4. Additional Hooks

[↑ Back to Table of Contents](#table-of-contents)

#### [Handling complex state with useReducer](https://www.linkedin.com/learning/react-hooks/handling-complex-state-with-usereducer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/handling-complex-state-with-usereducer?u=76281980&t=0)** - [Instructor] In addition to useState, there's another way to manage state variables, and that is another one of these hooks called useReducer. So first, let's import useReducer, and we're going to do a little bit of cleanup here as usual. Instead of returning all that data, we're going to return just an h1, and the h1 should say a number. So the number that we want to display is going to relate to useReducer here. So let's say const number, and then setNumber. This is the function that's going to change the state. This is the state variable. But useReducer is going to look slightly different. Instead of taking in just an initial state, it's going to take in two arguments. So the first argument is actually a function, and the second argument is the initial state. So the initial state for this number is going to be zero. The function that we're going to send as the first argument to useReducer is going to be what we want to have happen when setNumber is called. So what we want to do is we want to take the number and the new number in as arguments, and then we want to return the number plus the new number. So that looks really bad until I save it, but there we go. We have our number and our newNumber. Zero is the initial state. So how do we know that this is going to work?
>
> **[1:33](https://www.linkedin.com/learning/react-hooks/handling-complex-state-with-usereducer?u=76281980&t=93)** Well, we're going to use that setNumber function in the onClick. So we'll say setNumber, and then we'll pass in one. And then every time I click on this h1, it's going to increment the number. It just takes in this number, it combines it with the old number, and it returns a new number. So this is how we're adding this together. So useReducer, again, it takes in two different things. First is a function that is going to return some sort of new state, and then an initial state is the second value. So in the next video, we'll take a look at a component that should look familiar, and we're going to refactor it using useReducer, so we can understand more of what's going on here.

> [!info]- Semantic Content
>
> **Code Identifiers:** usereducer (7), setnumber (4), usestate (1), newnumber (1), onclick (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Refactoring useState to useReducer](https://www.linkedin.com/learning/react-hooks/refactoring-usestate-to-usereducer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/refactoring-usestate-to-usereducer?u=76281980&t=0)** - [Instructor] Earlier in the course, we created a checkbox, and we handled the checked state by using useState. So every time I click on this checkbox, we call the setChecked function, and then we look at whatever the value of checked is, and we return the opposite. We can refactor this a little bit using useReducer, which may help with potential bugs that could pop up just by kind of working on a team with other people. So if we build all the functionality into useReducer, we can minimize the amount that can go wrong. Instead of importing useState, let's import useReducer, and we'll replace it here. Now, the second thing I want to do is I want to call this function toggle, and then inside of the useReducer function, again, it takes in two things. It's going to take in that function that's going to change the state. So literally, I want to just pull this nice little function here. This is going to be my reducer. So let's paste that. Then, I'm going to say that false is the initial state. So instead of using setChecked in this onChange, we're going to replace this function with toggle. So now, it's going to work the exact same way. Now what's really nice about this is instead of having to embed this logic into all of these onChange events, we can sort of abstract this away into its own function. We know that every time we call toggle, we should do this. As your state gets more complex, it can be nice to consolidate your functionality into a useReducer call.
>
> **[1:34](https://www.linkedin.com/learning/react-hooks/refactoring-usestate-to-usereducer?u=76281980&t=94)** This makes it a little easier to understand and a little easier to work with.

> [!info]- Semantic Content
>
> **Code Identifiers:** usereducer (5), usestate (2), setchecked (2), onchange (2)
> **UI Navigation:** toggle (3), checkbox (2), click on (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Dispatching actions with useReducer](https://www.linkedin.com/learning/react-hooks/dispatching-actions-with-usereducer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/dispatching-actions-with-usereducer?u=76281980&t=0)** - [Instructor] Another pattern you can use with useReducer is to define a list of actions and then dispatch them in the component. So this will look a little different. We'll first start by adjusting our component. So inside of this component, we want to return a Message and we want this Message to display whatever the state of this message value is. Inside of the useReducer function, we're going to scaffold this to say a couple different things. So it's first going to take in the state. And then it's going to take in this method called dispatch. Then useReducer will take in a reducer and an initialState. So we'll define these outside of these parentheses. Now, the easier part of this to define the initialState. So let's go ahead and do that. The initialState here will be a message that says hi. So once we've created an initialState, that'll be passed into this function. Then we're going to go ahead and create a reducer. A reducer takes in state and an action and then it returns a new state. So the way that I can define which state it should return is with this switch statement. So the switch statement is going to take a look at whatever the type of the action is. This means that we can define the list of the possible actions that we could dispatch. So just think of an action as being like some sort
>
> **[1:34](https://www.linkedin.com/learning/react-hooks/dispatching-actions-with-usereducer?u=76281980&t=94)** of an event. We're going to send a yell action. And the yell action should return a message that says HEY! And we're yelling so all caps. Then we can specify a case for whispering. This time we'll return another object. Our message is excuse me. Very polite, very quiet. Now that we have our reducer defined, our message is displaying here, using our initialState. But what I'm really here to do is to try to dispatch some actions. So let's scroll down. We will add some UI elements that we can use to trigger these changes. So we'll say YELL. And here we're going to say onClick equals and again, we're going to dispatch an action of a specific type. And the type of action we want to dispatch is YELL. So this is what that'll look like. Type yell. There we go. And let's create another one of these buttons. It'll look pretty much identical, except it should say whisper. Let's make it all lowercase 'cause it very quiet. Then we'll say whisper. Inside of the action, and now I can say whisper
>
> **[3:05](https://www.linkedin.com/learning/react-hooks/dispatching-actions-with-usereducer?u=76281980&t=185)** and it'll say excuse me. Now, the reducer function takes in the state and an action and returns a new state. And while this is working okay, the real benefit of having access to that previous state is so that we can use it. So if our new state relies on the old state, this is a really good pattern to use. So I'm going to change this message to a template string and I'm going to say HEY! I JUST SAID state.message.
>
> **[3:41](https://www.linkedin.com/learning/react-hooks/dispatching-actions-with-usereducer?u=76281980&t=221)** So this is going to display whatever the previous state of message is. So now if I click on YELL again, it'll say HEY! I JUST SAID hi. So similarly, I could do the same here. So we could say excuse me, I just said state.message. So now if I click whisper, it should show me what the previous state was. So this can be really useful in calculations or checking in with the previous value to make sure that you're returning the new thing that's correct but this is what a reducer is for. It takes in the state and an action and it returns a new state and any time our state starts to become a little more complex, we can reach for useReducer to help us out.

> [!info]- Semantic Content
>
> **Code Identifiers:** initialstate (5), usereducer (4), onclick (1)
> **Env Vars:** hey (3), yell (3), said (2)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** means that (1), is a  (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Managing form inputs with useRef](https://www.linkedin.com/learning/react-hooks/managing-form-inputs-with-useref?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/managing-form-inputs-with-useref?u=76281980&t=0)** - [Instructor] As we move our way through all of these different hooks that the [[React.js|React]] library provides us with, one that we can't overlook is useRef. So useRef is going to allow us to reach out to a component and determine its value. And this can be extremely useful, particularly with [[Forms]]. So the first thing I want to do with our form is I want to import useRef. I'll get rid of all of our reducer stuff from before. Then inside of the component, instead of returning this here, we're going to say form and we'll close the form.
>
> **[0:40](https://www.linkedin.com/learning/react-hooks/managing-form-inputs-with-useref?u=76281980&t=40)** Inside the form, I want to add an input with a type of text
>
> **[0:51](https://www.linkedin.com/learning/react-hooks/managing-form-inputs-with-useref?u=76281980&t=51)** and then we'll add another one of these with a type color. Then I need to get rid of useReducer because we're getting those errors. Let's just make sure that this is rendering okay. Yeah, so we have our little input fields and then we have a little color picker. Let's also create a button, and the button should have text that says add. So this is going to allow us to add a color. Now, what we really want to track in this case is we want to track whatever the user inputs into this field. So the thing that they'll input here, I'll add a placeholder, just for good measure. We want to catalog a sound and whatever we think the closest color to that sound might be. Now, if we want to be able to reach out to this form element and grab whatever the user types in, so screech or something like this, I need to be able to access this and capture it somewhere. So we're going to call useRef to find that. So we'll say const sound equals useRef and then const color equals useRef also. Now the way that we attach these to the form elements is we just add another attribute called ref and we attach that to whatever the name of the ref is. So ref equals color. Next, I need to handle submitting this form. I'm going to create a function called submit and this takes in the event, so the submission of the form.
>
> **[2:28](https://www.linkedin.com/learning/react-hooks/managing-form-inputs-with-useref?u=76281980&t=148)** The reason I need this is because I want to prevent the default behavior of the page. In other words, I want to prevent the page from reloading as soon as I click that form. Now, in order to grab this value, like screech, what I need to do is I need to create another variable called sound value. This is going to be set equal to sound.current.value. And the .current.value is what's provided to us by this useRef function. So once we create one of these for the sound, we'll do one for color and then we'll say color.current.value. Now we want to not really do much with this but I just want to make sure that I can capture this value. So let's just alert it. So I'll say sound value sounds like color value.
>
> **[3:27](https://www.linkedin.com/learning/react-hooks/managing-form-inputs-with-useref?u=76281980&t=207)** Okay, then I'm going to use this in the form. So I'll say on submit equals submit. Okay, so let's see if our alert is working. So our sound will be harp, and harp kind of sounds like maybe a yellowish color. I have to give that a lot of thought. So now the harp sounds like that color. So what's really cool about this is we're going to be able to check in with the values of these form elements. And at this point, all I'm doing is alerting them but you can think about how you might pass these off to your database or some other sort of external process that's running. You can capture user input. So now that I've alerted this, as soon as I saw that alert I still see the name and the color. So let's reset this. We can say sound.current.value equals empty string, color.current.value equals empty string also. So now if I try that again and I say screech and that's more of a red, I think, so we'll add that screech sounds like whatever, click okay. And all that's cleared out. So useRef is going to be particularly helpful when we're working with forms and you can use these to capture values from any input.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[React.js|React]] (1)
> **Code Identifiers:** useref (8), usereducer (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Creating controlled components with useState](https://www.linkedin.com/learning/react-hooks/creating-controlled-components-with-usestate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/creating-controlled-components-with-usestate?u=76281980&t=0)** - [Instructor] Another way to handle inputs in a form is to use a controlled component. A controlled component means that you handle form inputs using state variables. So let's refactor our form component to make this work. Now here, instead of useRef, I want to use state. So it'll look like this sound and setSound equals useState and then this'll just be an empty string as its initial state. And then we'll say const color and setColor equals useState. And our initial state here will just be black. So it was zero zero, zero, zero, zero, zero. Now we can get rid of both uses of useRef and instead replace it with useState here. The next thing I need to do is let's adjust our component a little bit. So instead of ref sound it's going to be value sound. Instead of ref color, value color. Then we're going to add an on change event. This will take in E for the event and then we'll say setSound(e.target.value) Then we can use this same thing, but instead of setSound it's going to be setColor. So now our inputs are going to be in charge of changing the state. Now, the final thing we need to do here
>
> **[1:33](https://www.linkedin.com/learning/react-hooks/creating-controlled-components-with-usestate?u=76281980&t=93)** is let's remove any evidence of our refs here. And again, just to make sure that this is working, we want to check the sound and the color, and then upon submitting the form, we can reset the state. So I can say setSound is empty string. SetColor is zero, zero, zero, zero, zero, zero. Okay, so let's see how we're doing here. We have created these state variables for sound and color. We have adjusted our submit function to just alert whatever the sound and color in state are and then reset the sound in color when the form is submitted. And then each one of these inputs have their own onChange properties that change the state. So now what we can do is we can say screech and this time it'll be a green color. And now when I add it it should alert this and then clear it out. So there you have it. We're handling our form input values by assigning them to state values. In the next video, we'll take this one step further and abstract this functionality into a separate function.

> [!info]- Semantic Content
>
> **Code Identifiers:** setsound (4), usestate (3), useref (2), setcolor (2), onchange (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Building a counter](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980&t=0)** (dramatic music)
>
> **[0:05](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980&t=5)** - [Instructor] We have our actions here, increment and decrement, and now we need to make use of them within a reducer function. So a reducer function takes in a state and an action, like increment or decrement, and it returns a new state. So what I need to do here is define these different cases for each of those actions. So if the actions.increment happens, then we want to return a new state where we push in the old state and increment the count. So state account plus one, and I want to make sure to set the count to state.count there. We do it again slightly differently. When we decrement this time, we return... state count is state.count minus one.
>
> **[1:08](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980&t=68)** All right, so from here, we need these changes to be reflected inside of the component. So we'll use our useReducer hook. That will look like this. We create an array here for dispatch and state, and then useReducer takes in two things. So it takes in the function and it takes in the initializer, so the initial state. From here we can return.
>
> **[1:46](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980&t=106)** So here, we'll add a paragraph tag inside of the paragraph. We'll say count is state.count. Then here, we'll display our buttons. So the first button is going to say decrement,
>
> **[2:09](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980&t=129)** and then this button is going to have an on click that dispatches one of those actions. (keyboard clacking)
>
> **[2:29](https://www.linkedin.com/learning/react-hooks/solution-building-a-counter?u=76281980&t=149)** Okay, so from here, we need another button. So the other button right next to it will say increment. Change this here to increments, and now, this should be everything we need for our tests to be able to pass, hopefully, let's see how we do. So we can increment it physically, decrement it physically, and if I test the code, everything should be passing. Nice. So this is a nice little reusable way to manage state in our application. Later, if we want to add additional cases for additional states, we can, just update the actions and update the reducer.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** usereducer (2)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (dramatic music) (1)


### 5. Creating Custom Hooks

[↑ Back to Table of Contents](#table-of-contents)

#### [Reusing form logic with custom Hooks](https://www.linkedin.com/learning/react-hooks/reusing-form-logic-with-custom-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/reusing-form-logic-with-custom-hooks?u=76281980&t=0)** - [Instructor] In addition to the pre-built hooks that are supplied by the [[React.js|React]] library, you can also create your own custom hooks. If there's ever a place where you're writing a lot of the same code in your components, it might be possible to extract the logic into a hook. For example, for these input elements, we're kind of doing the same thing. We're just getting and resetting the value. The field takes something in, then we grab it and send it somewhere and then reset the field's value. So we're going to do all of this, instead of in this component, in a custom hook called useInput. So the first thing we need to do is create a file called useInput. So it'll be called useInput.js, and we'll put it right here in the source folder. Now, the next thing that we'll do is we'll import useState from React. Now, we're allowed to use hooks inside of other hooks or in components, so this is a great place to use one. Now, we need to think about what we want our input to do. So the first thing is, it's a function that's going to take in an initial value. Let's [[Zoom]] that out a little bit. Then we're going to use value and setValue as the state variable and the function to change the state. And then the initial value is what we'll send to the useState function.
>
> **[1:34](https://www.linkedin.com/learning/react-hooks/reusing-form-logic-with-custom-hooks?u=76281980&t=94)** Now, our useInput has to return something. So, like when we call useState, we know that it returns a pair, it returns an array of a value and a function to change the value. Now, what we want this one to return is we want it to return, first, an object that has the value and an onChange, and the onChange here is going to set the value, it's going to call the setValue function. That's going to change the state. So, e.target.value. Now, the other thing I need to add here is a function that's going to do the cleanup. So, remember our function that reset the value of the input? This is what's going to make that happen here. So we'll say setValue is whatever the initial value was. So set it back to zero, or an empty string, or that black color, whatever you want to do. Now that we've created this hook, we can use this hook anywhere. So we'll use it first, of course, in our app. So let's open up the index file again. We want to import in our index.js file the useInput hook. Fro useInput. Now, instead of using useState here, we're going to use useInput. So here, we're going to create a value called titleProps, then we're going to create a value called resetTitle. And we're going to say useInput,
>
> **[3:08](https://www.linkedin.com/learning/react-hooks/reusing-form-logic-with-custom-hooks?u=76281980&t=188)** and then we'll pass it an initial value, which is an empty string. So remember, useInput returns an array. The first item in the array is an object with the value and onChange, so these are the properties for that input. And then the second value is how we're going to reset the title or reset the value of the field. Same goes for this one. We'll say colorProps and resetColor. And then we'll say useInput, but we'll still pass that hex value. So now we need to adjust all of these values that are part of our submit and are part of our form so that it can now work nicely with useInput. So we still want to call that submit function when we submit the form. Instead of value, though, we're going to replace this with a JSX expression and we'll push in all of the props from title. So because our function to change the state comes from titleProps, we can also remove the onChange. Next, we're going to remove the onChange from input, and then we'll replace the value with another one of these sets of curly braces, colorProps, and we'll click save. Let's say titleProps.value sounds like colorProps.value,
>
> **[4:34](https://www.linkedin.com/learning/react-hooks/reusing-form-logic-with-custom-hooks?u=76281980&t=274)** and we want to call resetTitle and resetColor. Okay, so let's give that a shot. The sound will be piano, and that kind of sounds bluesy. Piano sounds like that. We'll click OK and that'll reset everything. So we've abstracted a bunch of logic into a custom hook. and what this means is that, if we ever have an input anywhere in our app, we can just import this useInput function and it'll work. Then, inside of our index file, inside of our app component, we can push in all of the titleProps, which just means that each of these inputs have access to the state value, as well as the function to change the state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[Zoom]] (1)
> **Code Identifiers:** useinput (12), onchange (5), usestate (4), titleprops (4), setvalue (3)
> **Definitions:** is a  (2), is an  (2), means that (1)
> **File Paths:** useinput.js (1), index.js (1)
> **CLI Commands:** make (1)
> **Env Vars:** jsx (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Placing data in context](https://www.linkedin.com/learning/react-hooks/placing-data-in-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-hooks/placing-data-in-context?u=76281980&t=1)** - [Instructor] There are times when we want values to be available to the entire component tree. Instead of passing data up and down the tree, we can put the data in context so that all of the child components will know the values that are being passed down. So if you've worked with context in [[React.js|React]] before, this is kind of the new way to do it using [[React Hooks]]. So let's go ahead and create a component that's going to consume some data from context. This is going to involve getting rid of our use input stuff. That served us well but we're ready to move on. And we also want to import createContext from react. Now, createContext is what we're going to use here. We're going to say export const TreesContext, so we're going to create this context. It's just like this little container where we're going to be able to store some data that can be consumed by any of the components that are part of the component tree. The data that we want to create here is going to be an array of objects and this is going to be super simple but we'll have an id for each one and a type: Maple. And I'll copy and paste a few of these, so I have four of them. The ids will be one, two, three, four, and then Oak, what are some other trees? Family tree. And Component tree. Cool.
>
> **[1:33](https://www.linkedin.com/learning/react-hooks/placing-data-in-context?u=76281980&t=93)** So now what we can do is we want to make all of this data accessible to our our entire app. I'm actually going to replace React.StrictMode. And I'm going to wrap my entire App component in the TreesContext.Provider. So this part, the name of the context, you create. You can call it whatever you want to. But then we use the Provider and Provider sounds like it is. It's just going to provide the data to the App component and anything nested below it. So now we need to supply a property called value and we're going to pass in the trees so that our component has access to that data. So once we supply that data via the value property, we can use the data inside of the component. So how do we access this data. Well, let's go ahead and adjust our app a little bit and we just want to say div h1. Eventually I want to display these trees that I've heard of and this will give me an array of these trees but if I moved this to a different file, it wouldn't know what those values were. In the next video, we're going to take a look at how we can use the data from this array that has been passed down via the provider inside of a nested component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[React Hooks]] (1)
> **Code Identifiers:** createcontext (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Retrieving data with useContext](https://www.linkedin.com/learning/react-hooks/retrieving-data-with-usecontext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/retrieving-data-with-usecontext?u=76281980&t=0)** - [Instructor] In the previous video, we looked at how to pass data down to child components via the provider. In this video, we're going to learn to read from context using a hook. So, to make this work even nicer, let's move this app component out of the index, and we're going to move it to its own file. So here we're going to replace this function. We're going to then import it. So we'll say import app from app. And hopefully this will mimic what it's really like to work on a project with context a little bit more. So if we go back over to our app component, we need to take that data from context and make it accessible in this component. So, the way that we're going to do this, is we're going to import the trees context from .slash. So just that index file. Now, what we can do is we can pull in the use context hook from [[React.js|react]]. You might guess where this is going. We're going to call const, I'll say result equals use context. And then we'll pass in the name of the context that we're interested in. Let's then console log the result. I'm just curious about what this looks like. So this is returning an object that has trees as one of the keys. So now what I can do is I can
>
> **[1:35](https://www.linkedin.com/learning/react-hooks/retrieving-data-with-usecontext?u=76281980&t=95)** destructure trees from that result. Then inside of the component, I can add an unordered list. I can map over trees. And then for each one of these trees, I want to return a list item. Each list item will have a type and maps is not a function, that's true, map is a function though, so let's fix that. That's working. We know that we have that key prop error, so let's fix that. So we'll say key equals tree.id, nice. So we've cleared out that warning, that's all good. We have displayed some data and we've pulled it in, using the use complex hook. So keep in mind that in any component, if we have a thousand components in our component tree, that's a lot of components, but you know what I mean? Any component that is part of the app, because it's been wrapped in the provider, we're going to be able to read the value of trees simply by calling use context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **CLI Commands:** make (2)
> **Warnings:** warning (1), keep in mind (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a custom Hook with context](https://www.linkedin.com/learning/react-hooks/creating-a-custom-hook-with-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/creating-a-custom-hook-with-context?u=76281980&t=0)** - [Instructor] It's also possible to create a custom hook to make this even more reusable. So what I want to do here on line one is import useContext into the index.js file. So we're here in index.js, and we're importing useContext. The second thing is we still will want to create the context, but we don't need to export it 'cause we won't be using it in a different file. What we will want to export is a constant called useTrees. Now, this is our custom hook. That's going to return useContext with the TreesContext. So this is going to make all of this data accessible to the component, but when we use it in the component, we're not going to call useContext with TreesContexts 'cause that's a lot of typing. All we really want to do is we want to say import useTrees from ./,
>
> **[1:04](https://www.linkedin.com/learning/react-hooks/creating-a-custom-hook-with-context?u=76281980&t=64)** and then we're going to call useTrees. So now the output is the same. All of the data is the same. I can get rid of useContext here. useTrees is simply going to allow us to reuse this functionality inside of components all over our app.

> [!info]- Semantic Content
>
> **Code Identifiers:** usecontext (5), usetrees (4)
> **File Paths:** index.js (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data fetching with a Fetch Hook](https://www.linkedin.com/learning/react-hooks/data-fetching-with-a-fetch-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/data-fetching-with-a-fetch-hook?u=76281980&t=0)** - [Instructor] So far we've fetched data with useEffect, and we've also loaded some state data with useContext. In this video, we're going to take a look at how to [[Fetch]] data with a custom hook. So let's kind of think about the process of fetching data. If we go back to our index file and we get rid of some of this context stuff, what we're really trying to do is handle one of three states. So if the data isn't available yet, but is loading. We have a state for if we get the data, and we have a state for if there's an error. So since all of these states exist with the request, we can wrap this inside of a hook. Let's create a new file called useFetch. So useFetch is going to handle all of these different states. We first need to import useState and useEffect from [[React.js|React]]. And then this function is going to be exported. useFetch will take in a URI of some sort of API that we want to fetch from. And then again, we need to handle these different states, data and setData, and the initial state will just be null. We also want to handle loading and setLoading, and then we want to handle error and setError.
>
> **[1:39](https://www.linkedin.com/learning/react-hooks/data-fetching-with-a-fetch-hook?u=76281980&t=99)** Now, once we have created these state variables, what we want to do is call useEffect. Remember this is going to help us fetch that data. So now we can say, if there's not a URI, then we want to just return, so jump out of the function. If we do have one let's fetch from that URI. We'll call then and we'll take the data and we'll parse it as [[JSON]]. And then we'll call setData. We also want to call setLoading and then send it false. So actually the initial state for loading should really be true. When our component first renders, the data is loading. Then when we fetch the data, it's going to be false. Now I need to make sure that semi-colon is not there. Every time I hit save, it adds one, so make sure that those don't mess us up. And then finally, we'll add a catch here. So if something goes wrong, we want to set the error. So we only want our useEffect to be called when there's a new URI or on the first page load. So finally, we want to return loading data and error. So with this function scaffolded, we can now use it in any component, and we're going to do just that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (5), [[React.js|React]] (1), [[JSON]] (1)
> **Code Identifiers:** useeffect (4), usefetch (3), setdata (2), setloading (2), usecontext (1)
> **Env Vars:** uri (4), api (1), json (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Building a fetch component](https://www.linkedin.com/learning/react-hooks/building-a-fetch-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/building-a-fetch-component?u=76281980&t=0)** - [Instructor] Now that I have the useFetch hook created, it's time to use it. So let's create an app component again in our, index file. Let's also get rid of the provider and instead just render the app. So inside of this app component, we want to display some data from that API. So, we'll use the same one from before, and we're also going to pass in the login, as a property. So, a couple things we need to do here. Remember our useFetch hook takes in the URI for our API. So it's at api.[github.com/users](https://github.com/users). And then we can chain on this little template here, and say login. So that's whatever the username for the [[GitHub]] user is. So you can use your own or whatever you feel like using. Now useFetch returns, an object with loading, data and error. So this is going to handle all of these different states. We also can get rid of create context and use context here on line one. Let's just grab that and get it out of the way. Now, we need to import useFetch, from, ./useFetch. There we go. And our app component still isn't rendering anything. So let's handle that. So we'll say if loading is true, then we want to return h1 that says loading.
>
> **[1:37](https://www.linkedin.com/learning/react-hooks/building-a-fetch-component?u=76281980&t=97)** So, if you saw that really quickly, it says loading, and then it explodes, because there's nothing else to display, if loading isn't true. So, we need to say, if there's an error, we want to return. Let's just return a pre tag, and it'll say [[JSON]].stringify, we'll pass the error, null and two for a little formatting. So, we'll take a look at what that looks like in just a second, but, the real deal is we want to do something with this data. So we'll return, a div, inside of the div. We'll add another pre tag, JSON.stringify, we'll pass the data, null and two again. So now, this is returning a big object to me. It's saying that the login though is undefined. So, what we need to do is we need to pass the login, as a property. So this is a string. So I'll just say, eveporcello. You can use your own GitHub username if you'd like to. And then this will return all of my data. So, now that we have data coming back, this is often the first step I like to take just to make sure we're getting something before I try to map over it. Especially if I don't know what the shape of the data is. We want to,
>
> **[3:12](https://www.linkedin.com/learning/react-hooks/building-a-fetch-component?u=76281980&t=192)** display an image. So that'll use the, data.avatar_url. Let's also add an all attribute to this image tag, we'll say, data.login. So that gives us the image thumbnail. What we can do next is display some personal details. So we'll say H1, data.login. Then we could say data.name, use two (indistinct), and then we'll return a P, with data.name. So what I'm doing here is I'm just checking to make sure that that name exists. And the reason I do that is because I've used the GitHub API a lot. And I know that a lot of people don't put their name on GitHub or their location, so we can do a check first before it breaks our UI. All right. So, we did it. We have used our useFetch hook. UseFetch returns, loading data, and error to handle all of these potential states, when we're making an HTTP request. And this has really simplified the data in the component. And then I can use this useFetch hook any time I need to [[Fetch]], in my entire application or even across projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[JSON]] (2), [[Fetch]] (1)
> **Code Identifiers:** usefetch (7), avatar_url (1)
> **Env Vars:** api (3), json (2), uri (1), http (1)
> **Tools:** github (5)
> **CLI Commands:** make (2)
> **URLs:** [github.com](https://github.com) (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Solution: Creating a user settings hook](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980&t=0)** - [Instructor] With context, we can make sure that all of our components have access to the data that they need. We're going to create our settings context here. So we'll say settings context, and we'll set that equal to the create context function. That's basically creating a container for a couple different values, specifically our default settings, the toggle notifications, which is going to be a function. And this is just an undefined function right now. Same goes for toggling dark mode over here. This creates the function so that I can reuse it later on. I'll also be able to rewrite it. So from here, I can create my custom hook. The custom hook is going to be a function that starts with use. And use settings is going to call use context with the settings context. Then we're going to say, if the context is undefined, we want to throw a new error, and it should say, use settings must be used within a settings provider. And then outside of that if statement, we want to use return context.
>
> **[1:38](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980&t=98)** All right. So from here, our settings provider, we want it to create the state for the settings, we want to create functions for toggling notifications and dark mode, and then we want to return the settings context provider. So that'll look like this. We first use use state, and we'll initialize this with the default settings as our default state. Then we're going to create a value called toggle notifications. We're going to set that equal to a function that calls set settings. And here, we'll return our new state, which is just the previous state and the notifications.
>
> **[2:36](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980&t=156)** Then we're going to, next door to this, add toggle dark mode. This time we'll say, dark mode, and this will just be the opposite of whatever the previous was. All right. So let's add our semicolons. And still within the context here, we're going to say, value is settings, toggle notifications, and toggle dark mode. So we're creating this entire object here. And we create the object so that we can replace the div. We'll say settings context.provider, we'll reuse that value as the closing tag, and here we'll say, value equals value. So this will give us access to all of these values inside of the component. So now we can use the use settings hook to make use of all of this. So we'll say, const settings, toggle notifications and toggle dark mode. We'll set that equal to use settings. That is our custom hook.
>
> **[4:09](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980&t=249)** And then the settings controls here, we need to make them accessible inside of these inputs. So we'll say that checked, settings notifications, and then on change should be set to toggle notifications. And if you want, you can grab, you can borrow and place those here as well for dark mode because those are going to look very similar. Toggle dark mode. And now the final steps here, we have to use use settings again.
>
> **[5:01](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980&t=301)** And then within our component, specifically inside of this unordered list, we want this list to display what the current state is. So we'll say notifications, and we'll say settings notifications, if that's true, have it say enabled, if it's false, have it say disabled. And we'll use the same here.
>
> **[5:36](https://www.linkedin.com/learning/react-hooks/solution-creating-a-user-settings-hook?u=76281980&t=336)** All right. So one more thing. We have to wrap this div inside of the settings provider, settings provider. We'll make sure that all of this data, all of these settings, all of these values are being passed down correctly to the component tree. Okay. So let's see how we did. So we're seeing that I spelled change wrong. You probably saw that before, but I couldn't hear you yelling at me. So now we see that fix. Now if I say, test my code, I should see, in the console output, that all of our tests have passed. So we're using context, we are passing that context down the component tree with a provider, and we're able to access those values anywhere that the provider has provided all of this data.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (9)
> **CLI Commands:** make (4)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/react-hooks/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-hooks/next-steps?u=76281980&t=1)** - [Instructor] Thank you for joining me on this journey through [[React Hooks]] and learning about how they can be applied in various situations. Libraries like [[React.js|React]] Router, Relay, Apollo and many, many more use Hooks as part of their API. So this course will hopefully set you up for success as you explore other areas of React's ecosystem. If you're looking for more on how to develop your own custom Hooks, I'd definitely check out this really cool website called [usehooks.com](https://usehooks.com). There you can learn more about how others develop Hooks and how you can pick up some tips and tricks to apply to your own projects. Thanks so much for joining me on this course on React Hooks. I wish you all the best as you continue your journey with React well into the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[React Hooks]] (2)
> **URLs:** [usehooks.com](https://usehooks.com) (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)


### Appendix

[↑ Back to Table of Contents](#table-of-contents)

#### [React Hooks history](https://www.linkedin.com/learning/react-hooks/react-hooks-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-hooks/react-hooks-history?u=76281980&t=1)** - [Instructor] If you're familiar with [[React.js|React]]'s history, you might be aware that there have been a few different ways to create components throughout time. If we hop in a time machine to between 2013 and 2017, not that long ago I realize, that meant that we would use a function called createClass to create a component. Then the createClass function would have this render method that we could use to return some UI. Then around 2017, createClass started to fall out of favor because [[JavaScript]] implemented the class syntax which lent itself really well to component creation. So that meant our components transformed to kind of look like this. We had a class, it would extend a base class called React component, and it would look pretty much the same. It was also possible around this time though to create components using a function. But anytime you added state variables, you had to refactor your function component into a class. And it was a whole thing. It took a lot of time. Then came [[React Hooks]]. So Hooks allow you to add state to function components and it also allows you to abstract logic into separate function, they're just functions. So anytime you're using a Hook from React or another library, they have to start with use. Use state, use reducer, use query, use context, whatever, they always start with use. Moving forward, it's probably a good idea to use functions instead of classes as class syntax may be removed from the React library at some point in the future.
>
> **[1:34](https://www.linkedin.com/learning/react-hooks/react-hooks-history?u=76281980&t=94)** In the next video, we're going to generate a React project so that we can actually give these Hooks a test drive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[JavaScript]] (1), [[React Hooks]] (1)
> **Code Identifiers:** createclass (3)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Eve Porcello]]

## Skills Covered

- React Hooks

## Path Context

### In [[Explore React.js Development]]
← [[React- Creating and Hosting a Full-Stack Site]] | **4 of 8** | [[React- Accessibility]] →

## Appears In

- [[Explore React.js Development]]

---

[↑ Back to top](#)