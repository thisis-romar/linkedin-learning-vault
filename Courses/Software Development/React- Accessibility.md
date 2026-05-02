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
  - '[[Explore React.js Development]]'
prev_courses:
  - '[[React Hooks]]'
next_courses:
  - '[[Building Modern Projects with React]]'
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
created: 2026-05-02
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
> **[0:00](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=0)** - [Instructor] [[React.js|React]] is one of the most popular [[JavaScript]] front-end frameworks.
>
> **[0:04](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=4)** It has almost 3 million users and a massive developer community.
>
> **[0:09](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=9)** - [Announcer] Two Trees Olive Oils, web content, Sign Up button.
>
> **[0:12](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=12)** Thank you, you've been subscribed to our news group
>
> **[0:16](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=16)** - [Instructor] As developers, with the knowledge that so many people use React, we should keep in mind the diversity of our users when building websites.
>
> **[0:24](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=24)** Creating an accessible website allows for a better experience for more people.
>
> **[0:29](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=29)** My name is Kiara Contreras, and I'm a front-end developer with experience in React.
>
> **[0:34](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=34)** I've been fascinated by creating the best [[User Experience (UX)|user experience]] possible.
>
> **[0:37](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=37)** And that curiosity has led me down a path of building more accessible experiences so that all users can interact with websites.
>
> **[0:45](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react?u=76281980&t=45)** Join me in this course, as we create a large impact on our users experiences by learning how to make React projects more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[JavaScript]] (1), [[User Experience (UX)|User experience]] (1)
> **Speakers:** - [instructor] (2), - [announcer] (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)


### 1. Accessibility on the Web

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for accessibility](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=0)** - [Narrator] Have you ever tried to navigate a website that is difficult to use, hard to read, or frustrating to navigate?
>
> **[0:06](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=6)** It's infuriating, right?
>
> **[0:08](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=8)** For those with disabilities, this is what life is like when trying to use a shockingly high number of websites.
>
> **[0:14](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=14)** The internet is a staple in our lives, and is a primary source for information.
>
> **[0:18](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=18)** We use it to pay bills, catch up on news, watch TV, do our [[Banking]], apply for loans, shop for groceries, and more.
>
> **[0:27](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=27)** Just like a business' physical location being required to comply with physical accessibility laws, so too must our websites.
>
> **[0:35](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=35)** In 2015, there were nearly 56.7 million Americans with a disability, that's 19% of the population, or nearly one in five people.
>
> **[0:45](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=45)** We don't want anyone leaving a website because a disability prevents them from having the best [[User Experience (UX)|user experience]] possible.
>
> **[0:51](https://www.linkedin.com/learning/react-accessibility/the-need-for-accessibility?u=76281980&t=51)** In this course, we will learn how to implement accessibility features, specifically into a [[React.js|React]] application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[User Experience (UX)|User experience]] (1), [[React.js|React]] (1)
> **Definitions:** is a  (2)
> **Versions:** 56.7 (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Semantic HTML: The foundation of web accessibility](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=0)** - [Instructor] We'll learn about Semantic [[HTML]] and how it can be used to provide accessibility features from the moment we start coding our websites.
>
> **[0:08](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=8)** What is a semantic element?
>
> **[0:10](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=10)** A semantic element clearly describes meaning to both the browser and the developer.
>
> **[0:16](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=16)** Using semantic tags are helpful for both you and the user.
>
> **[0:19](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=19)** When reading code, the semantic tags define different parts of a webpage and make HTML easier to read.
>
> **[0:26](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=26)** An example of this would be using a form tag instead of a div tag with an ID of form.
>
> **[0:32](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=32)** When a screen reader scans web page, it gets information about the DOM or the HTML structure of the page.
>
> **[0:39](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=39)** No styles or [[JavaScript]] will be read by the screen reader.
>
> **[0:42](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=42)** While div with an ID of navbar may be an option, the more semantic option would be to use the nav tag.
>
> **[0:50](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=50)** This way, the screen reader will be able to identify the navigation you've set for the webpage.
>
> **[0:56](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=56)** HTML5 introduced several new semantic elements that represent sections of a web app.
>
> **[1:02](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=62)** None of the new elements actually do anything by themselves but they provide a nice way for the developer to define various parts of a page.
>
> **[1:10](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=70)** These tags open the door for assistive technologies like screen readers and keyboard navigation to enable alternative ways of viewing and navigating a page.
>
> **[1:20](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=80)** When we write semantically correct HTML, we're letting the browser know that type of content is dealing with and how that context relates to other content.
>
> **[1:29](https://www.linkedin.com/learning/react-accessibility/semantic-html-the-foundation-of-web-accessibility?u=76281980&t=89)** By doing this, assisted technology is more easily available to do its job because it has structure that it can work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[JavaScript]] (1)
> **Env Vars:** html (4), dom (1), html5 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Semantic React tags](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=0)** - [Instructor] We'll learn about semantic tags used in [[React.js|React]] and how they can be used to provide accessibility features.
>
> **[0:07](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=7)** In the previous video, we reviewed that semantic [[HTML]] tags are an element that clearly describes this meaning to both the browser and the developer.
>
> **[0:16](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=16)** A common way of wrapping code in HTML would be to use a div tag.
>
> **[0:20](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=20)** The issue with this is that when wrapping divs within divs, it becomes harder for screen meters to find valuable information on the webpage.
>
> **[0:27](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=27)** This is because adding wrapper divs to React's virtual Dom would eventually be rendered in the main Dom as non semantic HTML.
>
> **[0:35](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=35)** React has its own semantic tags.
>
> **[0:37](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=37)** The most prominent semantic tag being fragments.
>
> **[0:40](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=40)** Fragments let you group of lists of children without adding extra nodes in the Dom.
>
> **[0:45](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=45)** The way React fragments help improve semantic JSX is by eliminating unnecessary div tags on the Dom tree.
>
> **[0:52](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=52)** It allows us to write more semantic HTML which is the basis of accessible code.
>
> **[0:59](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=59)** I've navigated to the company website that I'm running locally on my computer, and opens the Chrome dev tools.
>
> **[1:06](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=66)** I opened the Chrome dev tools by right clicking on the page and clicking the inspect option.
>
> **[1:13](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=73)** In the dev tools under the elements tab, we can see if we look through the elements I have a div with the ID of home container.
>
> **[1:22](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=82)** I would like to use a fragment here instead of the stiff.
>
> **[1:25](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=85)** So let's navigate to our code.
>
> **[1:28](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=88)** Now that we're in our example files, I've navigated to the home index.js component.
>
> **[1:35](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=95)** And we can see that on a line 11 and 17, we have a div wrapping other components.
>
> **[1:43](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=103)** Let's change this div to a fragment.
>
> **[1:45](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=105)** There are three main ways of doing this.
>
> **[1:48](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=108)** The first being, we'll remove the ID and replace the div with a React.fragment notation.
>
> **[1:56](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=116)** This React is referring to the React that we imported on line one.
>
> **[2:01](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=121)** I'm going to return to my code to see if the div is still there.
>
> **[2:06](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=126)** Let's navigate back to the elements tab in the dev tools.
>
> **[2:10](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=130)** I'll open some of these elements.
>
> **[2:12](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=132)** And we can see that there's no longer a div with the ID of home container wrapping these components.
>
> **[2:18](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=138)** The second way to do this is to import fragments.
>
> **[2:24](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=144)** And we can remove the React dot notation, so that only the [[Microsoft Word|word]] fragment is within a tag.
>
> **[2:31](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=151)** I'll return to my homepage just to be sure that the div is still not there, and to be sure that there isn't an obvious fragment tag.
>
> **[2:40](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=160)** Finally, the most shorthand option is to remove this import at the top of the page and remove the word fragment from within the brackets.
>
> **[2:50](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=170)** React knows that if you have no content within opening and closing brackets, that you are referring to a fragment.
>
> **[2:57](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=177)** I'll once more return to my homepage.
>
> **[2:59](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=179)** Take a look at the elements on the page.
>
> **[3:02](https://www.linkedin.com/learning/react-accessibility/semantic-react-tags?u=76281980&t=182)** We can see that there is not an extra tag that is unneeded in our elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (9), [[HTML]] (4), [[Microsoft Word|Word]] (2)
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
> **[0:00](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=0)** - [Instructor] I'd like you to try something.
>
> **[0:02](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=2)** Visit your bank's website and log in to your account without using a mouse or a touch screen.
>
> **[0:08](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=8)** What is your experience like with navigating the website?
>
> **[0:11](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=11)** Do you have to tab through lots of links, or are the input fields easy to get to?
>
> **[0:16](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=16)** Now imagine navigating all of your favorite websites without using a mouse.
>
> **[0:20](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=20)** This is just a small example of how accessibility users navigate the internet.
>
> **[0:24](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=24)** Keyboard focus is important, because many people are unable to navigate the web using a mouse, so all functionalities should be made available through the standard keyboard.
>
> **[0:35](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=35)** For people navigating a website using the tab key only, focus states or how they know their location on the page.
>
> **[0:41](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=41)** Here's the company website that I am running locally on my machine, and you can see that I'm tapping through the navigation bar at the top of the page.
>
> **[0:49](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=49)** Each of the links is highlighted with a blue border.
>
> **[0:53](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=53)** Why is adding keyboard focus important in a [[React.js|React]] app?
>
> **[0:57](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=57)** When a new element or component renders in a single page application, screen readers are silent to the page changes.
>
> **[1:04](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=64)** It is important that users know when a new element renders in order for them to have access to all information available on the page.
>
> **[1:11](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=71)** Let's look at an example of screen readers staying silent on page changes.
>
> **[1:17](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=77)** I've returned to the company website that I'm running locally on my machine and I'm tabbing through the page.
>
> **[1:24](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=84)** When reaching the footer, there's a section for users to enter their email address.
>
> **[1:29](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=89)** I'm going to turn on my screen reader.
>
> **[1:31](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=91)** - [Text-To-Speech] Voiceover on system preferences.
>
> **[1:33](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=93)** Exit Chrome. Two Trees Olive Oil.
>
> **[1:35](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=95)** [[Google]] Chrome window.
>
> **[1:37](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=97)** Enter your email. Edit text has keyboard focus.
>
> **[1:40](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=100)** Sign up button.
>
> **[1:41](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=101)** - [Instructor] You can see that I hit the sign up button, and there's a success message on the page, but the screen reader hasn't read it aloud.
>
> **[1:48](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=108)** If I hit tab again...
>
> **[1:50](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=110)** - [Text-To-Speech] Visited link. Image logo.
>
> **[1:51](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=111)** Chrome has new window.
>
> **[1:53](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=113)** - [Instructor] You can see that we've returned to the top of the page and see the logo.
>
> **[1:58](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=118)** What do we need in order to use keyboard focus in React?
>
> **[2:01](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=121)** Using a ref or reference, which provides a way to access DOM nodes, we can create and attach the ref to the element we want to focus on.
>
> **[2:10](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=130)** Once the ref is created and added to the element, we can set the focus to trigger on a lifecycle method.
>
> **[2:16](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=136)** Now that we understand the importance of keyword focus in React, let's explore how to add this feature in an application.
>
> **[2:24](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=144)** Here in the example files provided, under source components, in the footer component, we have set state from line nine through 11.
>
> **[2:35](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=155)** And if you scroll further down on this page, on line 28, you can see that, based on the state, we will be rendering the success message.
>
> **[2:45](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=165)** Let's go ahead into this P tag and add a ref.
>
> **[2:51](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=171)** I've called a successMessage.
>
> **[2:53](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=173)** Be sure to also include a tab index that will be equal to zero.
>
> **[2:58](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=178)** This will make it so that the element can be tabbed to.
>
> **[3:01](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=181)** Now that the ref is assigned to the P tag, let's return to our constructor, and outside of the state, let's create that ref.
>
> **[3:12](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=192)** We'll do that by calling React.createRef method.
>
> **[3:16](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=196)** And finally, we'll need to create a lifecycle method in this class-based component.
>
> **[3:21](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=201)** We're using componentDidUpdate, since a piece of the page is updating and not the entire page.
>
> **[3:29](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=209)** We'll call on the ref created, and use the current.focus method.
>
> **[3:35](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=215)** This way, when a component updates, the element with the ref will be focused on.
>
> **[3:41](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=221)** Let's save our work and return to the site.
>
> **[3:45](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=225)** I'm going to scroll down on this page to get to the footer, click on the footer so that I can tab easily to the input and the sign up button, and hit enter.
>
> **[3:56](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=236)** Now you can see that the success message is highlighted with a blue border.
>
> **[4:01](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=241)** Let's make sure this works by turning on our screen reader.
>
> **[4:04](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=244)** - [Text-To-Speech] Space with applications.
>
> **[4:05](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=245)** I turn to Chrome.
>
> **[4:06](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=246)** Two Trees Olive Oils, web content.
>
> **[4:09](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=249)** Enter your email, edit text main.
>
> **[4:12](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=252)** Sign up button.
>
> **[4:14](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=254)** Thank you, you've been subscribed to our news group.
>
> **[4:17](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=257)** - [Instructor] Now, if a user is navigating via keyboard and has a screen reader, this message will be read to them because of the keyboard focus.
>
> **[4:25](https://www.linkedin.com/learning/react-accessibility/managing-keyboard-focus-in-react-components?u=76281980&t=265)** And we're done!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[Google]] (1)
> **Speakers:** - [instructor] (4), - [text (3)
> **Code Identifiers:** successmessage (1), createref (1), componentdidupdate (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Env Vars:** dom (1)
> **Analogies:** imagine (1)

#### [Skipping page content](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=0)** - [Instructor] Most website content is made available at the very top of the page.
>
> **[0:05](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=5)** But what if you need to get further down on the page without using a mouse?
>
> **[0:09](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=9)** There's always the option to use a keyboard and hit tab to get through everything.
>
> **[0:13](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=13)** As you can imagine, this would be a frustrating experience.
>
> **[0:17](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=17)** The best way to avoid having the user do too much work would be to add the option to skip page content.
>
> **[0:24](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=24)** Skip links or skip navigation links are links that can be added to the interface in order to skip content.
>
> **[0:32](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=32)** They can be implemented with internal page anchors and some styling.
>
> **[0:36](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=36)** Let's implement skip links in our project.
>
> **[0:40](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=40)** Together, we will be adding a visible link at the top of the page as it's the most accessible.
>
> **[0:45](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=45)** We want to be sure that the skip link is one of the first items that the screen readers would hear when tabbed to.
>
> **[0:51](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=51)** In your example files, under source, components, let's work in the navigation component.
>
> **[0:58](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=58)** We can see that on line 12, the first link available to us is home.
>
> **[1:02](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=62)** Let's add another anchor tag here, with the content of skip navigation.
>
> **[1:08](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=68)** We'll be sure to add an href and this href will look for an ID available on the page that we will add to a different component.
>
> **[1:16](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=76)** For now, add a pound sign or hashtag, and the [[Microsoft Word|word]] [[Microsoft Products|products]].
>
> **[1:23](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=83)** This signifies that when this anchor tag is clicked, it will look for an item that has the ID of products attached to it.
>
> **[1:31](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=91)** Now, in our components home directory let's work in the products component.
>
> **[1:37](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=97)** On line seven, we'll add an ID that'll be equal to products.
>
> **[1:42](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=102)** All right, let's give it a test.
>
> **[1:46](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=106)** Starting at the top left-hand corner of the page, the first item tabbed to is the logo, and you can see that the second is now the skip navigation anchor tag.
>
> **[1:55](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=115)** It is highlighted in blue.
>
> **[1:57](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=117)** If we hit enter, the screen jumps down to the products component.
>
> **[2:03](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=123)** This technique does leave some room for improvement, as the UI now permanently includes a skip navigation item on the page.
>
> **[2:10](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=130)** This can be distracting or may not fit into the intended design of the page.
>
> **[2:15](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=135)** A great way of getting around this would be to hide the skip link until it's tabbed to.
>
> **[2:19](https://www.linkedin.com/learning/react-accessibility/skipping-page-content?u=76281980&t=139)** In our first challenge, let's implement a hidden skip link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Microsoft Word|Word]] (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Implementing focus and skipping content](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=0)** - [Instructor] Now that we've learned about keyboard focus and skipping page content, let's implement those features on our side.
>
> **[0:12](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=12)** For this challenge, let's take a look at our website.
>
> **[0:15](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=15)** When starting at the top of the page we have the ability to tap through the navigation links.
>
> **[0:20](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=20)** Let's give the user the ability to go directly to the learn more section of this page.
>
> **[0:27](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=27)** What I'd like you to do is create an invisible skip link in order to get to the learn more section of the webpage.
>
> **[0:33](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=33)** You can create an invisible skip link by using CSS to either hide the skip link off screen or keep a hidden onscreen until it's interacted with.
>
> **[0:42](https://www.linkedin.com/learning/react-accessibility/challenge-implementing-focus-and-skipping-content?u=76281980&t=42)** This challenge should take about 10 to 15 minutes to complete.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implementing focus and skipping content](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=0)** - [Instructor] Here's just one sample solution for this challenge.
>
> **[0:09](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=9)** In my navigation component on line 12 I added another anchor tag, gave it the href of learn more and a class name of skip link.
>
> **[0:20](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=20)** In the learn more component, I was sure to add an ID of learn more also so that that anchor can target this section.
>
> **[0:30](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=30)** In the CSS file for the navigation I added the skip link class and a key value pair of transform with translate to hide it off screen and a transition for the transform also.
>
> **[0:42](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=42)** Once the skip link is focused on, the transform we'll bring the link on screen.
>
> **[0:47](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=47)** Let's take a look at this implemented.
>
> **[0:50](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=50)** As I start to tap through the page you can see that the skip navigation link comes on screen.
>
> **[0:56](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=56)** If I continue to tab through the page, it disappears.
>
> **[0:59](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=59)** Let's return to that skip navigation link and hit Enter.
>
> **[1:03](https://www.linkedin.com/learning/react-accessibility/solution-implementing-focus-and-skipping-content?u=76281980&t=63)** You can see that it brought me down to the learn more section, and that's it.

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
> **[0:00](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=0)** - [Instructor] In this lesson, we'll learn about why mouse and pointer events can cause issues for users navigating your webpage with the keyboard.
>
> **[0:08](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=8)** Why worry about adding accessibility features to mouse and pointer events?
>
> **[0:12](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=12)** For people navigating a website using the keyboard, mouse pointer events can block elements on a page or provide a limited [[User Experience (UX)|user experience]].
>
> **[0:20](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=20)** Our goal is to ensure that all interactive elements can be accessed.
>
> **[0:24](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=24)** It is important that users have access to all elements and functionality, no matter their methods of navigation.
>
> **[0:30](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=30)** Let's look at some examples of mouse and pointer events that might be included on a website.
>
> **[0:35](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=35)** Here's an example of broken accessibility caused by a click event.
>
> **[0:40](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=40)** This is the outside click pattern, where a user can disable an open pop over by clicking outside the element.
>
> **[0:47](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=47)** This may work fine for users with pointer devices such as a mouse, but operating this with keyboard alone leads to broken functionality when tabbing to the next element as the window object never receives a click event.
>
> **[1:00](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=60)** This can lead to obscurity functionality, which blocks users from using your application.
>
> **[1:05](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=65)** The same functionality can be achieved by using appropriate event handlers instead, such as on blur and on focus.
>
> **[1:14](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=74)** This is one example of many cases where depending on only pointer and mouse events will break functionality for keyboard users.
>
> **[1:22](https://www.linkedin.com/learning/react-accessibility/accessibility-issues-with-mouse-and-pointer-events?u=76281980&t=82)** In the next video, we'll learn how to update an event in order to make it more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [How to ensure events are accessible by keyboard](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=0)** - [Instructor] In this lesson, let's implement some features to make mouse and pointer events accessible via keyboard.
>
> **[0:06](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=6)** I currently have the company homepage running locally on my computer.
>
> **[0:10](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=10)** On this homepage, I've added a browse link in the nav bar, that triggers a dropdown menu.
>
> **[0:16](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=16)** I can click browse, to show the dropdown, and click away to close it.
>
> **[0:21](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=21)** But what happens if I try to access this open-close feature via keyboard?
>
> **[0:26](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=26)** Let's give it a try.
>
> **[0:27](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=27)** Now, if I click the navigation bar, and tab to the browse link, I can click enter to trigger the dropdown menu.
>
> **[0:36](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=36)** But if I continue to tab, we can see that once I get through all of the dropdown options, and onto the next elements in the page, the dropdown menu remains open.
>
> **[0:48](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=48)** This feature causes an issue.
>
> **[0:50](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=50)** For keyboard users, it blocks elements on the website.
>
> **[0:54](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=54)** Ideally, we would want to be able to tab through all of the dropdown options.
>
> **[0:58](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=58)** And when we move to the next element, in the nav bar, the dropdown will close.
>
> **[1:04](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=64)** Let's take a look at how to implement this, in our code.
>
> **[1:08](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=68)** In the example of file, under source, components, let's open the navigation component in the navigation component, we have state set to indicate whether the dropdown is open.
>
> **[1:22](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=82)** Online's nine to 11.
>
> **[1:24](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=84)** We have a reference created online 13.
>
> **[1:27](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=87)** Two lifecycle methods, that add event listeners to click events, and on click handler, that will set the state up is open to true or false, and an enclave outside handler.
>
> **[1:42](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=102)** That tests the state of is open to false, if the dropdown is open and the element currently selected is not the dropdown element.
>
> **[1:51](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=111)** In the render method, online 43, we have a div, with the reference set, to toggle container.
>
> **[1:59](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=119)** This is the reference that was created, in the constructor.
>
> **[2:02](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=122)** And within that div, there's a button, with an on click event handler, set to on click handler, rather than having a reference for the div, and sets specific event listeners for click events, let's use on focus and on blur events.
>
> **[2:21](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=141)** The on focus event, is called when the element, or an elements inside of it, receives focus.
>
> **[2:27](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=147)** An example of this is when we tab to the dropdown menu, and hit enter, triggering it's opening.
>
> **[2:34](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=154)** I'm setting on focus equal to a method that we haven't created yet, that I'm naming on focus handler.
>
> **[2:42](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=162)** The on blur event is called when focus has left the element, and we can implement this in order to close the dropdown, once we tab away from the dropdown options.
>
> **[2:51](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=171)** I'll also set this, to an element that does not exist just yet.
>
> **[2:57](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=177)** So we've replaced the ref that once assigned to this div, with on focus and on blur event handlers.
>
> **[3:05](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=185)** We'll be sure to leave the on click event handler, on the button for browse.
>
> **[3:11](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=191)** Now let's return further up in this component.
>
> **[3:15](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=195)** I'm going to remove some unneeded code.
>
> **[3:17](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=197)** Because I'm not targeting only on click events, I'm going to remove the lifecycle methods.
>
> **[3:25](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=205)** I'm also going to remove the on click outside handler since it's specific to click events.
>
> **[3:32](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=212)** And, we'll remove the ref that is no longer attached to any element on this component.
>
> **[3:38](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=218)** For the new methods that we're creating, I will need a variable, and I'm going to call it timeout ID.
>
> **[3:45](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=225)** It'll be set to null initially, and I'm setting this inside of the constructor, for this class based component.
>
> **[3:54](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=234)** Now I'll go ahead and start with the on blur handler.
>
> **[3:58](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=238)** This method takes no parameters.
>
> **[4:01](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=241)** It will be setting the timeout ID variable that we set earlier in the constructor, and it will be using set timeout.
>
> **[4:11](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=251)** Within the set timeout method, we'll be using this .setState, to set the state that is open, equal to false.
>
> **[4:21](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=261)** Notice that we're not passing any time, to this set timeout method.
>
> **[4:27](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=267)** This is so that the state will be set immediately, when on blur is triggered.
>
> **[4:31](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=271)** This handler will now close the dropdown when we click away or tab away from the dropdown elements.
>
> **[4:37](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=277)** Because we use the set timeout method, we need to be sure to clear it so that there aren't any adverse side effects.
>
> **[4:43](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=283)** We'll do this in the on focus handler, that takes no parameters.
>
> **[4:49](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=289)** And we'll clear time out of the variable, timeout ID.
>
> **[4:55](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=295)** Let's test out our new feature.
>
> **[4:57](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=297)** I'll return to the website and be sure to refresh the page.
>
> **[5:01](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=301)** First, let's see if it still works with a mouse.
>
> **[5:05](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=305)** I'll click on browse, and click away, and it closes.
>
> **[5:10](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=310)** Now I'll test tabbing through the options.
>
> **[5:13](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=313)** I'm going to click on the nav bar, tab to browse, click enter to trigger the dropdown, and tab through the dropdown options.
>
> **[5:25](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=325)** As I continue tabbing, and move away from the element, it closes.
>
> **[5:30](https://www.linkedin.com/learning/react-accessibility/how-to-ensure-events-are-accessible-by-keyboard?u=76281980&t=330)** And that's it.

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
> **[0:00](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=0)** - [Instructor] Let's talk about testing our work, both broadly and specifically, to accessibility features.
>
> **[0:06](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=6)** You may have heard the phrase, "Test early, test often."
>
> **[0:10](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=10)** I believe that we should live by it.
>
> **[0:12](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=12)** Testing at the end of the development process has two main risks.
>
> **[0:17](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=17)** The first, testing is often rushed, omitted, or ignored, thanks to pressures like projects running over time and over budget.
>
> **[0:25](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=25)** The second, it is more work to fix problems discovered late in a process than to do things right from the start, because code will have to be refactored and can break other features.
>
> **[0:37](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=37)** To ensure quality and save time and money, accessibility testing should start right at the beginning of [[Product Design]], all iterations of the project through to delivery.
>
> **[0:47](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=47)** There are some things we should know about before starting a project.
>
> **[0:51](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=51)** To be an accessibly-supported website, the site must have been demonstrated to work with users' assistive technology and have technologies like browsers and plugins that are available to users with disabilities at no cost above what it would cost for a user without a disability.
>
> **[1:11](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=71)** Determining requirements should only be the beginning of the process.
>
> **[1:14](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=74)** They should be treated as a minimum set of requirements.
>
> **[1:17](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=77)** We can then build on these requirements to maximize accessibility.
>
> **[1:21](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=81)** As the person implementing accessibility features, it is our role to raise additional concerns.
>
> **[1:27](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=87)** By taking the time to test our work, we can provide better features and improve people's lives as they interact with our websites.
>
> **[1:34](https://www.linkedin.com/learning/react-accessibility/why-test-your-work?u=76281980&t=94)** In this chapter, we'll walk through testing technologies and resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Product Design]] (1)
> **Speakers:** - [instructor] (1)

#### [Testing accessibility with your keyboard](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=0)** - [Instructor] In this lesson, we'll talk about how to test websites with your keyboard.
>
> **[0:05](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=5)** Keyboard accessibility allows for users to access and move between links, buttons, [[Forms]], and other controls using keystrokes.
>
> **[0:13](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=13)** Because so many different kinds of people use the internet, having a site that requires mouse use, would leave out users and create a negative experience.
>
> **[0:23](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=23)** So we'll have to step out of our own experiences, think about who is using websites.
>
> **[0:30](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=30)** First we should know who depends on keyboard accessibility.
>
> **[0:34](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=34)** People who depend on keyboard accessibility include, users with physical disabilities, who cannot use the mouse, users who are blind and cannot see the mouse pointer on the screen, or users with chronic conditions such as repetitive stress injuries, who should limit or avoid use of a mouse.
>
> **[0:52](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=52)** Then we can think about people who don't necessarily depend on the features, but do benefit from them, such as users with a broken mouse, users who prefer using a keyboard to navigate, or users who need to interact with a keyboard because of an injury.
>
> **[1:09](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=69)** Testing with a keyboard is an essential part of evaluating the accessibility of your website.
>
> **[1:14](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=74)** The basics of keyboard testing are simple.
>
> **[1:16](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=76)** The tab key can be used to navigate through links and form controls, the enter key selection element, and the arrow keys are used for other navigation.
>
> **[1:26](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=86)** However, when testing with the keyboard, you are not just trying to interact with the page successfully.
>
> **[1:32](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=92)** You also want to ensure all interactions are predictable.
>
> **[1:36](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=96)** This requires an understanding of common keyboard interactions.
>
> **[1:40](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=100)** Common actions include navigating to elements, opening links, and selecting different input elements.
>
> **[1:48](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=108)** I've included links for reference that include many of the most common online interactions.
>
> **[1:54](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=114)** Standard keystrokes and additional information on things to consider during testing.
>
> **[1:59](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=119)** Before moving on to the next video, I challenge you to take some time to look over the provided link from [webaim.org](https://webaim.org), and interact with your favorite website using only keystrokes.
>
> **[2:11](https://www.linkedin.com/learning/react-accessibility/testing-accessibility-with-your-keyboard?u=76281980&t=131)** When you're ready, dive into the next video, where we'll learn about browser testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Cross-References:** next video (2)
> **Analogies:** such as (2)
> **URLs:** [webaim.org](https://webaim.org) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using browser features for testing](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=0)** - [Instructor] In this lesson, we'll talk about how to test accessibility with browser tools.
>
> **[0:05](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=5)** I'll be using the browser [[Google]] Chrome in order to use one of my favorite tools made for developers: Lighthouse.
>
> **[0:12](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=12)** Lighthouse is an open source automated tool for improving the quality of web pages.
>
> **[0:17](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=17)** You can run it against any webpage.
>
> **[0:19](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=19)** It has audits for performance, accessibility, progressive web apps, SEO, and more.
>
> **[0:25](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=25)** Today we'll only be using the accessibility testing, but I'd recommend tinkering with the other tests outside of this lesson.
>
> **[0:32](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=32)** We're going to run Lighthouse in Chrome DevTools.
>
> **[0:35](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=35)** But it can also be accessed from the commands line or as a Node module.
>
> **[0:40](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=40)** Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.
>
> **[0:45](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=45)** DevTools can help you edit pages on the fly and diagnose problems quickly, which ultimately helps you build better web pages faster.
>
> **[0:54](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=54)** In order to access Chrome DevTools, we can either use keyboard shortcuts or visit the page, right click on it, and choose Inspect.
>
> **[1:02](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=62)** Let's visit the company page that I'm running locally and open Chrome DevTools.
>
> **[1:08](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=68)** I can either open Chrome DevTools by right clicking on the page and choosing the Inspect option, or on my Mac, hitting command option J.
>
> **[1:18](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=78)** Here is where we'll run an audit against our page and then generate a report on how well the page did.
>
> **[1:23](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=83)** I'm going to navigate to the right-hand side, where the Chrome DevTools have opened, and hit the button for more options.
>
> **[1:30](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=90)** This button looks like two arrows.
>
> **[1:33](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=93)** Once clicked on, I'll choose Lighthouse.
>
> **[1:37](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=97)** Since I'm only testing accessibility, I'm going to de-select performance, progressive web app, best practices, and SEO.
>
> **[1:47](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=107)** Once ready, I can click Generate Report.
>
> **[1:49](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=109)** Here's the score given to the accessibility of this specific webpage.
>
> **[1:53](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=113)** You may be able to see that, although I'm running the homepage that we've been working on throughout the course, I did change a few small things.
>
> **[2:01](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=121)** In the top navigation, I made the font lighter in order to trigger an accessibility issue.
>
> **[2:08](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=128)** The first one stated here is contrast.
>
> **[2:10](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=130)** So if I click on this dropdown, there's some information for me saying, "Low contrast text is difficult or impossible "for many users to read."
>
> **[2:19](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=139)** And when looking at the failing elements, if I hover over them, it shows me which specific elements on the page are failing this test.
>
> **[2:30](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=150)** With Lighthouse and most of the opportunities that it points out, there is a Learn More option.
>
> **[2:37](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=157)** When clicking on the Learn More option, I get information specifically about the issue that it pointed out to me.
>
> **[2:43](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=163)** These documents have great information on accessibility features.
>
> **[2:48](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=168)** Besides the contrast opportunity, there are a few opportunities on this page with name and labels.
>
> **[2:54](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=174)** The image element doesn't have an alt attribute, and some of the form elements do not have associated labels.
>
> **[2:59](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=179)** Again, if I hover over the failing elements, it'll show me which one has failed, and it looks like it is the subscribe option in the footer.
>
> **[3:09](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=189)** Let's go ahead to our code, update the issues pointed out by Lighthouse, and run the accessibility audit once more.
>
> **[3:18](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=198)** Okay, now that we're in our code base, I'm going to go to the navigation styling first, since the contrast level for the colors was not high enough.
>
> **[3:30](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=210)** In the navigation.CSS, on line 25, the color that I have currently is light gray.
>
> **[3:36](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=216)** I'm going to change it to black.
>
> **[3:40](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=220)** The next thing that I'll do is go to the [[Microsoft Products|products]].js component.
>
> **[3:44](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=224)** And in this component, we have the image that does not have an alternate tag.
>
> **[3:49](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=229)** So I'll add an alternate tag on line 22, and finally I'll go to the footer component, and on lines 12 and 13, I have a label and input, but there's nothing indicating that the label belongs to this input.
>
> **[4:04](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=244)** So on line 12, I'll add a four and I'll call this email and on line 13, I'll add an ID that will be equal to email.
>
> **[4:16](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=256)** I can call this whatever I'd like, but I need to make sure that the ID placed on the input matches the four that's placed on the label.
>
> **[4:25](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=265)** I'll save my work, and let's return to our webpage.
>
> **[4:30](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=270)** Now we should be able to see that the navigation text has gotten darker.
>
> **[4:35](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=275)** The other things that we changed aren't obvious on the page, but let's run the accessibility audit again.
>
> **[4:41](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=281)** I'm going to click the Clear All option that looks like a circle with a line through it, and hit Generate Report.
>
> **[4:48](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=288)** And our accessibility improved.
>
> **[4:52](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=292)** It looks like the contrast issue is no longer there, nor is the label issue.
>
> **[4:58](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=298)** Let's see what opportunity it's showing for us.
>
> **[5:03](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=303)** Ah, we have an image in the footer.
>
> **[5:05](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=305)** I'm going to scroll down.
>
> **[5:07](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=307)** This image in the footer, which is a logo, does not have an alt tag.
>
> **[5:12](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=312)** Let's return and add that alt tag.
>
> **[5:15](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=315)** I've returned to the footer component.
>
> **[5:17](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=317)** And on line nine, I forgot to add an alternate for it.
>
> **[5:21](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=321)** I'll call this footer logo.
>
> **[5:24](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=324)** I'll run the audit once more.
>
> **[5:26](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=326)** Click the Clear All button first.
>
> **[5:29](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=329)** Click Generate Report.
>
> **[5:31](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=331)** And our accessibility is at 100, which is incredible.
>
> **[5:36](https://www.linkedin.com/learning/react-accessibility/using-browser-features-for-testing?u=76281980&t=336)** Lighthouse is just one of the browser testing tools that you can use, but it makes a huge difference in building websites for all users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Microsoft Products|Products]] (1)
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
> **[0:00](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=0)** - [Instructor] Screen readers are an important tool for visually impaired users.
>
> **[0:04](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=4)** In this lesson, we'll learn about screen reader options and how to test websites with a screen reader.
>
> **[0:10](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=10)** There are two main options when using a screen reader, using the built-in technology or installing software onto your device.
>
> **[0:17](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=17)** When on my Mac, I use VoiceOver.
>
> **[0:20](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=20)** It's a built-in option for Mac users that can be activated in the system preferences.
>
> **[0:25](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=25)** For [[Windows]] users, you can install a free screen reader called NVDA.
>
> **[0:30](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=30)** It can be downloaded from [nvaccess.org/download](https://nvaccess.org/download).
>
> **[0:37](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=37)** If you'd like step-by-step instructions on setting up NVDA, I'd recommend searching for installing a screen reader on your browser.
>
> **[0:45](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=45)** The first results, which is from the American Foundation for the Blind has a great video series on setting up NVDA.
>
> **[0:53](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=53)** Now I'll demonstrate how to use VoiceOver on the Mac.
>
> **[0:56](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=56)** I'll go ahead and turn off VoiceOver in my System Preferences by navigating to System Preferences, clicking Accessibility, and clicking VoiceOver in the left-hand menu.
>
> **[1:07](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=67)** A great feature of this is that when it's activated you can listen to a quick start tutorial in order to learn more about using VoiceOver.
>
> **[1:14](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=74)** I've used this feature before, and didn't like the rate at which the voice was speaking.
>
> **[1:18](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=78)** So I clicked Open VoiceOver Utility, click Speech from the left-hand menu, and change the rate to 40.
>
> **[1:27](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=87)** Let's turn on VoiceOver.
>
> **[1:30](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=90)** Now that VoiceOver is turned on, let's visit the company website that I'm running locally on my computer.
>
> **[1:36](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=96)** - [Instructor 2] Link image logo, main crop browse collapsed button navigation.
>
> **[1:41](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=101)** Link home, blank about Chrome has new window link, tours and events.
>
> **[1:48](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=108)** - [Instructor] As I tap through the page, we can hear what kind of element we're currently on and its content.
>
> **[1:53](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=113)** The contents that is read aloud can be configured in your preferences in VoiceOver settings.
>
> **[1:58](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=118)** We can then disable VoiceOver by returning to System Preferences.
>
> **[2:02](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=122)** - [Instructor 2] System preferences, accessibility window accessible space with applications, Chrome system preferences.
>
> **[2:09](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=129)** - [Instructor] And de-select enable VoiceOver.
>
> **[2:11](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=131)** Using a screen reader on your favorite websites Will let you have the experience that you just may have when navigating around the internet.
>
> **[2:17](https://www.linkedin.com/learning/react-accessibility/testing-with-a-screen-reader?u=76281980&t=137)** I challenge you to use a screen reader on another site you visit often in order to get used to its features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Speakers:** - [instructor] (3), - [instructor (2)
> **Env Vars:** nvda (3)
> **URLs:** [nvaccess.org](https://nvaccess.org) (1)
> **Prerequisites:** install (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Resources for web accessibility guidelines](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=0)** - [Kiara] And we did it.
>
> **[0:01](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=1)** Together, in this series, we learned how accessibility can be implemented in websites built in [[React.js|React]].
>
> **[0:07](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=7)** We've covered semantic tags, keyboard focus, mouse and pointer events, testing, and more.
>
> **[0:13](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=13)** You should be able to implement these features in your projects moving forward.
>
> **[0:17](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=17)** I've created a document that provides resources for you to continue learning.
>
> **[0:21](https://www.linkedin.com/learning/react-accessibility/resources-for-web-accessibility-guidelines?u=76281980&t=21)** I'd recommend visiting these resources in order to delve into deeper accessibility topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Speakers:** - [kiara] (1)


## Instructor

- [[Kiara Contreras]]

## Resources

- Exercise files available

## Skills Covered

- Accessibility
- React.js
- Accessible Design

## Path Context

### In [[Explore React.js Development]]
← [[React Hooks]] | **5 of 8** | [[Building Modern Projects with React]] →

## Appears In

- [[Explore React.js Development]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)