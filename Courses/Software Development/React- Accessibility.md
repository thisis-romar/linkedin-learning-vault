---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-accessibility
url: "https://www.linkedin.com/learning/react-accessibility"
duration_minutes: 34
duration: 34m
level: Intermediate
updated: 1/5/2021
learners: 39736
skills:
  - Accessibility
  - React.js
  - Accessible Design
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGvZdsTgi_Srg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608665304497?e=2147483647&amp;v=beta&amp;t=TiWXpu9PMDzy_JO8gRLrc3dEymnfPzXqIAwSfFYZ5ns"
linkedin_topic: Software Development
learning_paths:
  - '[Explore React.js Development](../../Paths/Software%20Development/Learning%20Paths/Explore%20React.js%20Development.md)'
prev_courses:
  - '[React Hooks](../../Skills/Web%20Development/React%20Hooks.md)'
next_courses:
  - '[Building Modern Projects with React](../Web%20Development/Building%20Modern%20Projects%20with%20React.md)'
path_nav: '[{"path":"Explore React.js Development","position":5,"total":8,"prev":"React Hooks","next":"Building Modern Projects with React"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/accessibility
  - skill/react-js
  - skill/accessible-design
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/React-%20Accessibility.md)

![React: Accessibility](https://media.licdn.com/dms/image/v2/C4E0DAQGvZdsTgi_Srg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608665304497?e=2147483647&amp;v=beta&amp;t=TiWXpu9PMDzy_JO8gRLrc3dEymnfPzXqIAwSfFYZ5ns)

# React: Accessibility

> Perhaps the greatest thing about the world wide web is that it makes so much information available to so many people. However, is this available information accessible to everyone? In this course, Kiara Contreras illustrates why accessibility is important and why it’s necessary to focus on it when you build single-page applications with React, one of the most popular JavaScript front-end framework

> [LinkedIn Learning](https://www.linkedin.com/learning/react-accessibility) | 34m | Intermediate | 40K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Accessibility in React](#accessibility-in-react)
- [**1. Accessibility on the Web**](#1-accessibility-on-the-web) (3 videos)
  - [The need for accessibility](#the-need-for-accessibility)
  - [Semantic HTML: The foundation of web accessibility](#semantic-html-the-foundation-of-web-accessibility)
  - [Semantic React tags](#semantic-react-tags)
- [**2. Keyboard Focus**](#2-keyboard-focus) (4 videos)
  - [Managing keyboard focus in React components](#managing-keyboard-focus-in-react-components)
  - [Skipping page content](#skipping-page-content)
  - [Challenge: Implementing focus and skipping content](#challenge-implementing-focus-and-skipping-content)
  - [Solution: Implementing focus and skipping content](#solution-implementing-focus-and-skipping-content)
- [**3. Mouse and Pointer Events**](#3-mouse-and-pointer-events) (2 videos)
  - [Accessibility issues with mouse and pointer events](#accessibility-issues-with-mouse-and-pointer-events)
  - [How to ensure events are accessible by keyboard](#how-to-ensure-events-are-accessible-by-keyboard)
- [**4. Testing Your Application**](#4-testing-your-application) (4 videos)
  - [Why test your work](#why-test-your-work)
  - [Testing accessibility with your keyboard](#testing-accessibility-with-your-keyboard)
  - [Using browser features for testing](#using-browser-features-for-testing)
  - [Testing with a screen reader](#testing-with-a-screen-reader)
- [**Conclusion**](#conclusion) (1 videos)
  - [Resources for web accessibility guidelines](#resources-for-web-accessibility-guidelines)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessibility in React](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=0)** - [Instructor] [React](../../Skills/Web%20Development/React.js.md) is one of the most popular [JavaScript](../../Skills/Software%20Development/JavaScript.md) front-end frameworks. It has almost 3 million users and a massive developer community.
>
> **[0:09](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=9)** - [Announcer] Two Trees Olive Oils, web content, Sign Up button. Thank you, you've been subscribed to our news group
>
> **[0:16](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=16)** - [Instructor] As developers, with the knowledge that so many people use React, we should keep in mind the diversity of our users when building websites. Creating an accessible website allows for a better experience for more people. My name is Kiara Contreras, and I'm a front-end developer with experience in React. I've been fascinated by creating the best [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) possible. And that curiosity has led me down a path of building more accessible experiences so that all users can interact with websites. Join me in this course, as we create a large impact on our users experiences by learning how to make React projects more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Speakers:** - [instructor] (2), - [announcer] (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)


### 1. Accessibility on the Web

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for accessibility](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=0)** - [Narrator] Have you ever tried to navigate a website that is difficult to use, hard to read, or frustrating to navigate? It's infuriating, right? For those with disabilities, this is what life is like when trying to use a shockingly high number of websites. The internet is a staple in our lives, and is a primary source for information. We use it to pay bills, catch up on news, watch TV, do our [Banking](../../Skills/Software%20Development/Banking.md), apply for loans, shop for groceries, and more. Just like a business' physical location being required to comply with physical accessibility laws, so too must our websites. In 2015, there were nearly 56.7 million Americans with a disability, that's 19% of the population, or nearly one in five people. We don't want anyone leaving a website because a disability prevents them from having the best [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) possible. In this course, we will learn how to implement accessibility features, specifically into a [React](../../Skills/Web%20Development/React.js.md) application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Definitions:** is a  (2)
> **Versions:** 56.7 (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Semantic HTML: The foundation of web accessibility](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=0)** - [Instructor] We'll learn about Semantic [HTML](../../Skills/Web%20Development/HTML.md) and how it can be used to provide accessibility features from the moment we start coding our websites. What is a semantic element? A semantic element clearly describes meaning to both the browser and the developer. Using semantic tags are helpful for both you and the user. When reading code, the semantic tags define different parts of a webpage and make HTML easier to read. An example of this would be using a form tag instead of a div tag with an ID of form. When a screen reader scans web page, it gets information about the DOM or the HTML structure of the page. No styles or [JavaScript](../../Skills/Software%20Development/JavaScript.md) will be read by the screen reader. While div with an ID of navbar may be an option, the more semantic option would be to use the nav tag. This way, the screen reader will be able to identify the navigation you've set for the webpage. HTML5 introduced several new semantic elements that represent sections of a web app. None of the new elements actually do anything by themselves but they provide a nice way for the developer to define various parts of a page. These tags open the door for assistive technologies like screen readers and keyboard navigation to enable alternative ways of viewing and navigating a page. When we write semantically correct HTML, we're letting the browser know that type of content is dealing with and how that context relates to other content. By doing this, assisted technology is more easily available to do its job
>
> **[1:34](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=94)** because it has structure that it can work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** html (4), dom (1), html5 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Semantic React tags](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=0)** - [Instructor] We'll learn about semantic tags used in [React](../../Skills/Web%20Development/React.js.md) and how they can be used to provide accessibility features. In the previous video, we reviewed that semantic [HTML](../../Skills/Web%20Development/HTML.md) tags are an element that clearly describes this meaning to both the browser and the developer. A common way of wrapping code in HTML would be to use a div tag. The issue with this is that when wrapping divs within divs, it becomes harder for screen meters to find valuable information on the webpage. This is because adding wrapper divs to React's virtual Dom would eventually be rendered in the main Dom as non semantic HTML. React has its own semantic tags. The most prominent semantic tag being fragments. Fragments let you group of lists of children without adding extra nodes in the Dom. The way React fragments help improve semantic JSX is by eliminating unnecessary div tags on the Dom tree. It allows us to write more semantic HTML which is the basis of accessible code. I've navigated to the company website that I'm running locally on my computer, and opens the Chrome dev tools. I opened the Chrome dev tools by right clicking on the page and clicking the inspect option. In the dev tools under the elements tab, we can see if we look through the elements I have a div with the ID of home container. I would like to use a fragment here instead of the stiff. So let's navigate to our code. Now that we're in our example files, I've navigated to the home index.js component.
>
> **[1:35](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=95)** And we can see that on a line 11 and 17, we have a div wrapping other components. Let's change this div to a fragment. There are three main ways of doing this. The first being, we'll remove the ID and replace the div with a React.fragment notation. This React is referring to the React that we imported on line one. I'm going to return to my code to see if the div is still there. Let's navigate back to the elements tab in the dev tools. I'll open some of these elements. And we can see that there's no longer a div with the ID of home container wrapping these components. The second way to do this is to import fragments. And we can remove the React dot notation, so that only the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) fragment is within a tag. I'll return to my homepage just to be sure that the div is still not there, and to be sure that there isn't an obvious fragment tag. Finally, the most shorthand option is to remove this import at the top of the page and remove the word fragment from within the brackets. React knows that if you have no content within opening and closing brackets, that you are referring to a fragment. I'll once more return to my homepage. Take a look at the elements on the page. We can see that there is not an extra tag that is unneeded in our elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (9), [HTML](../../Skills/Web%20Development/HTML.md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Env Vars:** html (4), jsx (1)
> **File Paths:** index.js (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 2. Keyboard Focus

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing keyboard focus in React components](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=0)** - [Instructor] I'd like you to try something. Visit your bank's website and log in to your account without using a mouse or a touch screen. What is your experience like with navigating the website? Do you have to tab through lots of links, or are the input fields easy to get to? Now imagine navigating all of your favorite websites without using a mouse. This is just a small example of how accessibility users navigate the internet. Keyboard focus is important, because many people are unable to navigate the web using a mouse, so all functionalities should be made available through the standard keyboard. For people navigating a website using the tab key only, focus states or how they know their location on the page. Here's the company website that I am running locally on my machine, and you can see that I'm tapping through the navigation bar at the top of the page. Each of the links is highlighted with a blue border. Why is adding keyboard focus important in a [React](../../Skills/Web%20Development/React.js.md) app? When a new element or component renders in a single page application, screen readers are silent to the page changes. It is important that users know when a new element renders in order for them to have access to all information available on the page. Let's look at an example of screen readers staying silent on page changes. I've returned to the company website that I'm running locally on my machine and I'm tabbing through the page. When reaching the footer, there's a section for users to enter their email address. I'm going to turn on my screen reader.
>
> **[1:31](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=91)** - [Text-To-Speech] Voiceover on system preferences. Exit Chrome. Two Trees Olive Oil. [Google](../../Glossary/Service/Google.md) Chrome window. Enter your email. Edit text has keyboard focus. Sign up button.
>
> **[1:41](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=101)** - [Instructor] You can see that I hit the sign up button, and there's a success message on the page, but the screen reader hasn't read it aloud. If I hit tab again...
>
> **[1:50](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=110)** - [Text-To-Speech] Visited link. Image logo. Chrome has new window.
>
> **[1:53](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=113)** - [Instructor] You can see that we've returned to the top of the page and see the logo. What do we need in order to use keyboard focus in React? Using a ref or reference, which provides a way to access DOM nodes, we can create and attach the ref to the element we want to focus on. Once the ref is created and added to the element, we can set the focus to trigger on a lifecycle method. Now that we understand the importance of keyword focus in React, let's explore how to add this feature in an application. Here in the example files provided, under source components, in the footer component, we have set state from line nine through 11. And if you scroll further down on this page, on line 28, you can see that, based on the state, we will be rendering the success message. Let's go ahead into this P tag and add a ref. I've called a successMessage. Be sure to also include a tab index that will be equal to zero. This will make it so that the element can be tabbed to. Now that the ref is assigned to the P tag, let's return to our constructor, and outside of the state, let's create that ref. We'll do that by calling React.createRef method. And finally, we'll need to create a lifecycle method in this class-based component. We're using componentDidUpdate, since a piece of the page is updating and not the entire page.
>
> **[3:29](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=209)** We'll call on the ref created, and use the current.focus method. This way, when a component updates, the element with the ref will be focused on. Let's save our work and return to the site. I'm going to scroll down on this page to get to the footer, click on the footer so that I can tab easily to the input and the sign up button, and hit enter. Now you can see that the success message is highlighted with a blue border. Let's make sure this works by turning on our screen reader.
>
> **[4:04](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=244)** - [Text-To-Speech] Space with applications. I turn to Chrome. Two Trees Olive Oils, web content. Enter your email, edit text main. Sign up button. Thank you, you've been subscribed to our news group.
>
> **[4:17](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=257)** - [Instructor] Now, if a user is navigating via keyboard and has a screen reader, this message will be read to them because of the keyboard focus. And we're done!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [Google](../../Glossary/Service/Google.md) (1)
> **Speakers:** - [instructor] (4), - [text (3)
> **Code Identifiers:** successmessage (1), createref (1), componentdidupdate (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Env Vars:** dom (1)
> **Analogies:** imagine (1)

#### [Skipping page content](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=0)** - [Instructor] Most website content is made available at the very top of the page. But what if you need to get further down on the page without using a mouse? There's always the option to use a keyboard and hit tab to get through everything. As you can imagine, this would be a frustrating experience. The best way to avoid having the user do too much work would be to add the option to skip page content. Skip links or skip navigation links are links that can be added to the interface in order to skip content. They can be implemented with internal page anchors and some styling. Let's implement skip links in our project. Together, we will be adding a visible link at the top of the page as it's the most accessible. We want to be sure that the skip link is one of the first items that the screen readers would hear when tabbed to. In your example files, under source, components, let's work in the navigation component. We can see that on line 12, the first link available to us is home. Let's add another anchor tag here, with the content of skip navigation. We'll be sure to add an href and this href will look for an ID available on the page that we will add to a different component. For now, add a pound sign or hashtag, and the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) [products](../../Skills/Software%20Development/Microsoft%20Products.md). This signifies that when this anchor tag is clicked, it will look for an item that has the ID of products attached to it. Now, in our components home directory
>
> **[1:34](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=94)** let's work in the products component. On line seven, we'll add an ID that'll be equal to products. All right, let's give it a test. Starting at the top left-hand corner of the page, the first item tabbed to is the logo, and you can see that the second is now the skip navigation anchor tag. It is highlighted in blue. If we hit enter, the screen jumps down to the products component. This technique does leave some room for improvement, as the UI now permanently includes a skip navigation item on the page. This can be distracting or may not fit into the intended design of the page. A great way of getting around this would be to hide the skip link until it's tabbed to. In our first challenge, let's implement a hidden skip link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Implementing focus and skipping content](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=0)** - [Instructor] Now that we've learned about keyboard focus and skipping page content, let's implement those features on our side. For this challenge, let's take a look at our website. When starting at the top of the page we have the ability to tap through the navigation links. Let's give the user the ability to go directly to the learn more section of this page. What I'd like you to do is create an invisible skip link in order to get to the learn more section of the webpage. You can create an invisible skip link by using CSS to either hide the skip link off screen or keep a hidden onscreen until it's interacted with. This challenge should take about 10 to 15 minutes to complete.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implementing focus and skipping content](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=0)** - [Instructor] Here's just one sample solution for this challenge. In my navigation component on line 12 I added another anchor tag, gave it the href of learn more and a class name of skip link. In the learn more component, I was sure to add an ID of learn more also so that that anchor can target this section. In the CSS file for the navigation I added the skip link class and a key value pair of transform with translate to hide it off screen and a transition for the transform also. Once the skip link is focused on, the transform we'll bring the link on screen. Let's take a look at this implemented. As I start to tap through the page you can see that the skip navigation link comes on screen. If I continue to tab through the page, it disappears. Let's return to that skip navigation link and hit Enter. You can see that it brought me down to the learn more section, and that's it.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Mouse and Pointer Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessibility issues with mouse and pointer events](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=0)** - [Instructor] In this lesson, we'll learn about why mouse and pointer events can cause issues for users navigating your webpage with the keyboard. Why worry about adding accessibility features to mouse and pointer events? For people navigating a website using the keyboard, mouse pointer events can block elements on a page or provide a limited [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Our goal is to ensure that all interactive elements can be accessed. It is important that users have access to all elements and functionality, no matter their methods of navigation. Let's look at some examples of mouse and pointer events that might be included on a website. Here's an example of broken accessibility caused by a click event. This is the outside click pattern, where a user can disable an open pop over by clicking outside the element. This may work fine for users with pointer devices such as a mouse, but operating this with keyboard alone leads to broken functionality when tabbing to the next element as the window object never receives a click event. This can lead to obscurity functionality, which blocks users from using your application. The same functionality can be achieved by using appropriate event handlers instead, such as on blur and on focus. This is one example of many cases where depending on only pointer and mouse events will break functionality for keyboard users. In the next video, we'll learn how to update an event in order to make it more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [How to ensure events are accessible by keyboard](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=0)** - [Instructor] In this lesson, let's implement some features to make mouse and pointer events accessible via keyboard. I currently have the company homepage running locally on my computer. On this homepage, I've added a browse link in the nav bar, that triggers a dropdown menu. I can click browse, to show the dropdown, and click away to close it. But what happens if I try to access this open-close feature via keyboard? Let's give it a try. Now, if I click the navigation bar, and tab to the browse link, I can click enter to trigger the dropdown menu. But if I continue to tab, we can see that once I get through all of the dropdown options, and onto the next elements in the page, the dropdown menu remains open. This feature causes an issue. For keyboard users, it blocks elements on the website. Ideally, we would want to be able to tab through all of the dropdown options. And when we move to the next element, in the nav bar, the dropdown will close. Let's take a look at how to implement this, in our code. In the example of file, under source, components, let's open the navigation component in the navigation component, we have state set to indicate whether the dropdown is open. Online's nine to 11. We have a reference created online 13. Two lifecycle methods, that add event listeners to click events, and on click handler,
>
> **[1:36](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=96)** that will set the state up is open to true or false, and an enclave outside handler. That tests the state of is open to false, if the dropdown is open and the element currently selected is not the dropdown element. In the render method, online 43, we have a div, with the reference set, to toggle container. This is the reference that was created, in the constructor. And within that div, there's a button, with an on click event handler, set to on click handler, rather than having a reference for the div, and sets specific event listeners for click events, let's use on focus and on blur events. The on focus event, is called when the element, or an elements inside of it, receives focus. An example of this is when we tab to the dropdown menu, and hit enter, triggering it's opening. I'm setting on focus equal to a method that we haven't created yet, that I'm naming on focus handler. The on blur event is called when focus has left the element, and we can implement this in order to close the dropdown, once we tab away from the dropdown options. I'll also set this, to an element that does not exist just yet. So we've replaced the ref that once assigned to this div, with on focus and on blur event handlers. We'll be sure to leave the on click event handler, on the button for browse.
>
> **[3:11](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=191)** Now let's return further up in this component. I'm going to remove some unneeded code. Because I'm not targeting only on click events, I'm going to remove the lifecycle methods. I'm also going to remove the on click outside handler since it's specific to click events. And, we'll remove the ref that is no longer attached to any element on this component. For the new methods that we're creating, I will need a variable, and I'm going to call it timeout ID. It'll be set to null initially, and I'm setting this inside of the constructor, for this class based component. Now I'll go ahead and start with the on blur handler. This method takes no parameters. It will be setting the timeout ID variable that we set earlier in the constructor, and it will be using set timeout. Within the set timeout method, we'll be using this .setState, to set the state that is open, equal to false. Notice that we're not passing any time, to this set timeout method. This is so that the state will be set immediately, when on blur is triggered. This handler will now close the dropdown when we click away or tab away from the dropdown elements. Because we use the set timeout method, we need to be sure to clear it so that there aren't any adverse side effects. We'll do this in the on focus handler,
>
> **[4:46](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=286)** that takes no parameters. And we'll clear time out of the variable, timeout ID. Let's test out our new feature. I'll return to the website and be sure to refresh the page. First, let's see if it still works with a mouse. I'll click on browse, and click away, and it closes. Now I'll test tabbing through the options. I'm going to click on the nav bar, tab to browse, click enter to trigger the dropdown, and tab through the dropdown options. As I continue tabbing, and move away from the element, it closes. And that's it.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (17), click on (2), open the (1), toggle (1)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** setstate (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)


### 4. Testing Your Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Why test your work](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=0)** - [Instructor] Let's talk about testing our work, both broadly and specifically, to accessibility features. You may have heard the phrase, "Test early, test often." I believe that we should live by it. Testing at the end of the development process has two main risks. The first, testing is often rushed, omitted, or ignored, thanks to pressures like projects running over time and over budget. The second, it is more work to fix problems discovered late in a process than to do things right from the start, because code will have to be refactored and can break other features. To ensure quality and save time and money, accessibility testing should start right at the beginning of [Product Design](../../Skills/Software%20Development/Product%20Design.md), all iterations of the project through to delivery. There are some things we should know about before starting a project. To be an accessibly-supported website, the site must have been demonstrated to work with users' assistive technology and have technologies like browsers and plugins that are available to users with disabilities at no cost above what it would cost for a user without a disability. Determining requirements should only be the beginning of the process. They should be treated as a minimum set of requirements. We can then build on these requirements to maximize accessibility. As the person implementing accessibility features, it is our role to raise additional concerns. By taking the time to test our work, we can provide better features and improve people's lives as they interact with our websites.
>
> **[1:34](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=94)** In this chapter, we'll walk through testing technologies and resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Product Design](../../Skills/Software%20Development/Product%20Design.md) (1)
> **Speakers:** - [instructor] (1)

#### [Testing accessibility with your keyboard](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=0)** - [Instructor] In this lesson, we'll talk about how to test websites with your keyboard. Keyboard accessibility allows for users to access and move between links, buttons, [Forms](../../Skills/Web%20Development/Forms.md), and other controls using keystrokes. Because so many different kinds of people use the internet, having a site that requires mouse use, would leave out users and create a negative experience. So we'll have to step out of our own experiences, think about who is using websites. First we should know who depends on keyboard accessibility. People who depend on keyboard accessibility include, users with physical disabilities, who cannot use the mouse, users who are blind and cannot see the mouse pointer on the screen, or users with chronic conditions such as repetitive stress injuries, who should limit or avoid use of a mouse. Then we can think about people who don't necessarily depend on the features, but do benefit from them, such as users with a broken mouse, users who prefer using a keyboard to navigate, or users who need to interact with a keyboard because of an injury. Testing with a keyboard is an essential part of evaluating the accessibility of your website. The basics of keyboard testing are simple. The tab key can be used to navigate through links and form controls, the enter key selection element, and the arrow keys are used for other navigation. However, when testing with the keyboard, you are not just trying to interact with the page successfully.
>
> **[1:32](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=92)** You also want to ensure all interactions are predictable. This requires an understanding of common keyboard interactions. Common actions include navigating to elements, opening links, and selecting different input elements. I've included links for reference that include many of the most common online interactions. Standard keystrokes and additional information on things to consider during testing. Before moving on to the next video, I challenge you to take some time to look over the provided link from [webaim.org](https://webaim.org), and interact with your favorite website using only keystrokes. When you're ready, dive into the next video, where we'll learn about browser testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Cross-References:** next video (2)
> **Analogies:** such as (2)
> **URLs:** [webaim.org](https://webaim.org) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using browser features for testing](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=0)** - [Instructor] In this lesson, we'll talk about how to test accessibility with browser tools. I'll be using the browser [Google](../../Glossary/Service/Google.md) Chrome in order to use one of my favorite tools made for developers: Lighthouse. Lighthouse is an open source automated tool for improving the quality of web pages. You can run it against any webpage. It has audits for performance, accessibility, progressive web apps, SEO, and more. Today we'll only be using the accessibility testing, but I'd recommend tinkering with the other tests outside of this lesson. We're going to run Lighthouse in Chrome DevTools. But it can also be accessed from the commands line or as a Node module. Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on the fly and diagnose problems quickly, which ultimately helps you build better web pages faster. In order to access Chrome DevTools, we can either use keyboard shortcuts or visit the page, right click on it, and choose Inspect. Let's visit the company page that I'm running locally and open Chrome DevTools. I can either open Chrome DevTools by right clicking on the page and choosing the Inspect option, or on my Mac, hitting command option J. Here is where we'll run an audit against our page and then generate a report on how well the page did. I'm going to navigate to the right-hand side, where the Chrome DevTools have opened, and hit the button for more options. This button looks like two arrows.
>
> **[1:33](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=93)** Once clicked on, I'll choose Lighthouse. Since I'm only testing accessibility, I'm going to de-select performance, progressive web app, best practices, and SEO. Once ready, I can click Generate Report. Here's the score given to the accessibility of this specific webpage. You may be able to see that, although I'm running the homepage that we've been working on throughout the course, I did change a few small things. In the top navigation, I made the font lighter in order to trigger an accessibility issue. The first one stated here is contrast. So if I click on this dropdown, there's some information for me saying, "Low contrast text is difficult or impossible "for many users to read." And when looking at the failing elements, if I hover over them, it shows me which specific elements on the page are failing this test. With Lighthouse and most of the opportunities that it points out, there is a Learn More option. When clicking on the Learn More option, I get information specifically about the issue that it pointed out to me. These documents have great information on accessibility features. Besides the contrast opportunity, there are a few opportunities on this page with name and labels. The image element doesn't have an alt attribute, and some of the form elements do not have associated labels. Again, if I hover over the failing elements, it'll show me which one has failed, and it looks like
>
> **[3:05](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=185)** it is the subscribe option in the footer. Let's go ahead to our code, update the issues pointed out by Lighthouse, and run the accessibility audit once more. Okay, now that we're in our code base, I'm going to go to the navigation styling first, since the contrast level for the colors was not high enough. In the navigation.CSS, on line 25, the color that I have currently is light gray. I'm going to change it to black. The next thing that I'll do is go to the [products](../../Skills/Software%20Development/Microsoft%20Products.md).js component. And in this component, we have the image that does not have an alternate tag. So I'll add an alternate tag on line 22, and finally I'll go to the footer component, and on lines 12 and 13, I have a label and input, but there's nothing indicating that the label belongs to this input. So on line 12, I'll add a four and I'll call this email and on line 13, I'll add an ID that will be equal to email. I can call this whatever I'd like, but I need to make sure that the ID placed on the input matches the four that's placed on the label. I'll save my work, and let's return to our webpage. Now we should be able to see that the navigation text has gotten darker. The other things that we changed aren't obvious on the page, but let's run the accessibility audit again.
>
> **[4:41](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=281)** I'm going to click the Clear All option that looks like a circle with a line through it, and hit Generate Report. And our accessibility improved. It looks like the contrast issue is no longer there, nor is the label issue. Let's see what opportunity it's showing for us. Ah, we have an image in the footer. I'm going to scroll down. This image in the footer, which is a logo, does not have an alt tag. Let's return and add that alt tag. I've returned to the footer component. And on line nine, I forgot to add an alternate for it. I'll call this footer logo. I'll run the audit once more. Click the Clear All button first. Click Generate Report. And our accessibility is at 100, which is incredible. Lighthouse is just one of the browser testing tools that you can use, but it makes a huge difference in building websites for all users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **UI Navigation:** go to (3), click on (2), navigate to (1), dropdown (1), scroll down (1)
> **Tools:** chrome devtools (6)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** seo (2), css (1)
> **File Paths:** navigation.css (1), products.js (1)
> **CLI Commands:** node (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Testing with a screen reader](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=0)** - [Instructor] Screen readers are an important tool for visually impaired users. In this lesson, we'll learn about screen reader options and how to test websites with a screen reader. There are two main options when using a screen reader, using the built-in technology or installing software onto your device. When on my Mac, I use VoiceOver. It's a built-in option for Mac users that can be activated in the system preferences. For [Windows](../../Glossary/Service/Windows.md) users, you can install a free screen reader called NVDA. It can be downloaded from [nvaccess.org/download](https://nvaccess.org/download). If you'd like step-by-step instructions on setting up NVDA, I'd recommend searching for installing a screen reader on your browser. The first results, which is from the American Foundation for the Blind has a great video series on setting up NVDA. Now I'll demonstrate how to use VoiceOver on the Mac. I'll go ahead and turn off VoiceOver in my System Preferences by navigating to System Preferences, clicking Accessibility, and clicking VoiceOver in the left-hand menu. A great feature of this is that when it's activated you can listen to a quick start tutorial in order to learn more about using VoiceOver. I've used this feature before, and didn't like the rate at which the voice was speaking. So I clicked Open VoiceOver Utility, click Speech from the left-hand menu, and change the rate to 40. Let's turn on VoiceOver. Now that VoiceOver is turned on, let's visit the company website
>
> **[1:33](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=93)** that I'm running locally on my computer.
>
> **[1:36](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=96)** - [Instructor 2] Link image logo, main crop browse collapsed button navigation. Link home, blank about Chrome has new window link, tours and events.
>
> **[1:48](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=108)** - [Instructor] As I tap through the page, we can hear what kind of element we're currently on and its content. The contents that is read aloud can be configured in your preferences in VoiceOver settings. We can then disable VoiceOver by returning to System Preferences.
>
> **[2:02](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=122)** - [Instructor 2] System preferences, accessibility window accessible space with applications, Chrome system preferences.
>
> **[2:09](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=129)** - [Instructor] And de-select enable VoiceOver. Using a screen reader on your favorite websites Will let you have the experience that you just may have when navigating around the internet. I challenge you to use a screen reader on another site you visit often in order to get used to its features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **Speakers:** - [instructor] (3), - [instructor (2)
> **Env Vars:** nvda (3)
> **URLs:** [nvaccess.org](https://nvaccess.org) (1)
> **Prerequisites:** install (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Resources for web accessibility guidelines](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=0)** - [Kiara] And we did it. Together, in this series, we learned how accessibility can be implemented in websites built in [React](../../Skills/Web%20Development/React.js.md). We've covered semantic tags, keyboard focus, mouse and pointer events, testing, and more. You should be able to implement these features in your projects moving forward. I've created a document that provides resources for you to continue learning. I'd recommend visiting these resources in order to delve into deeper accessibility topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Speakers:** - [kiara] (1)


## Instructor

- [Kiara Contreras](../../Instructors/Software%20Development/Kiara%20Contreras.md)

## Resources

- Exercise files available

## Skills Covered

- Accessibility
- React.js
- Accessible Design

## Path Context

### In [Explore React.js Development](../../Paths/Software%20Development/Learning%20Paths/Explore%20React.js%20Development.md)
← [React Hooks](../../Skills/Web%20Development/React%20Hooks.md) | **5 of 8** | [Building Modern Projects with React](../Web%20Development/Building%20Modern%20Projects%20with%20React.md) →

## Appears In

- [Explore React.js Development](../../Paths/Software%20Development/Learning%20Paths/Explore%20React.js%20Development.md)

## Related Courses

_Courses sharing skills:_

- [React- Cloud-Powered Apps with Firebase](../Web%20Development/React-%20Cloud-Powered%20Apps%20with%20Firebase.md) — React.js
- [Building a GraphQL Project with React.js](../Web%20Development/Building%20a%20GraphQL%20Project%20with%20React.js.md) — React.js
- [React- Software Architecture](../Web%20Development/React-%20Software%20Architecture.md) — React.js
- [React- Testing and Debugging](../Web%20Development/React-%20Testing%20and%20Debugging.md) — React.js
- [React- Building Styles with CSS Modules](../Web%20Development/React-%20Building%20Styles%20with%20CSS%20Modules.md) — React.js

---

[↑ Back to top](#)