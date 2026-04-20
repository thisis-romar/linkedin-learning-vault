---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-software-architecture
url: "https://www.linkedin.com/learning/react-software-architecture"
duration_minutes: 163
duration: 2h 43m
level: Intermediate
updated: 8/12/2021
learners: 27435
skills:
  - Software Architecture
  - React.js
exercise_files: true
github: "https://github.com/LinkedInLearning/react-software-architecture-2884265"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEqEra1U0CNQw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628621782938?e=2147483647&amp;v=beta&amp;t=8O9rfJjLOmUPE4t6TqPra9hHba9t64PlqB9KvE8TNuk"
linkedin_topic: Web Development
learning_paths:
  - Improve Your React Skills
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/software-architecture
  - skill/react-js
status: not-started
created: 2026-04-19
---

![React: Software Architecture](https://media.licdn.com/dms/image/v2/C560DAQEqEra1U0CNQw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628621782938?e=2147483647&amp;v=beta&amp;t=8O9rfJjLOmUPE4t6TqPra9hHba9t64PlqB9KvE8TNuk)

# React: Software Architecture

> Many React developers have intimate knowledge of the React API itself, but little familiarity with how to create real-world apps on a larger scale while dealing with various stakeholders. The heavy demands on web apps both from a customer and managerial perspective require that developers arrange software in an optimal way to ensure performance and maintainability. And in order to do this effectiv

> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture) | 2h 43m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/react-software-architecture-2884265)

## Skills Covered

- Software Architecture
- React.js

## Table of Contents

### Introduction

#### Learn software architecture with React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980&t=0)** - [Shaun] Maybe you've mastered the technical details of React and are wondering where to go next.
>
> **[0:04](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980&t=4)** Or maybe you're just looking to start thinking about your applications at a higher level, whatever the case, learning the basics of software architecture may well be the next step in your software development career.
>
> **[0:15](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980&t=15)** A knowledge of software architecture enables you to not only make your applications work, it also allows you to keep your applications maintainable and performing for the foreseeable future, as well as make sure they fulfill all the necessary requirements and constraints.
>
> **[0:29](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980&t=29)** I'm Shaun Wassell and I'm a senior software developer.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980&t=32)** Ever since I realized that simply mastering the technical details of this or that technology just wasn't enough, I've had a strong interest in software architecture and the possibilities it provides.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?u=76281980&t=42)** Join me in my course to learn software architecture with React and see how to think about your React applications on a whole other level.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** case, (1)
> **Speakers:** - [shaun] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, there are a few things that it would be helpful for you to know.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=5)** The first skill that you should have is a basic knowledge of web development with React.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=9)** Now, please don't take this to mean that you have to be a React expert.
>
> **[0:12](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=12)** You don't, but at the very least, it would be great for you to have experience with creating and managing React components, routing in React, and React hooks.
>
> **[0:21](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=21)** If you don't have these skills yet, I highly recommend that you take my course on full-stack development with React where we see how each of these things works in the context of a full-stack React application.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=32)** And really, it would be helpful for you to have a basic knowledge of how full-stack development works in general.
>
> **[0:37](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=37)** It would be great if you already know the basic roles of the frontend and backend, as well as how these pieces fit together and communicate with each other via network requests.
>
> **[0:47](https://www.linkedin.com/learning/react-software-architecture/what-you-should-know?u=76281980&t=47)** If you already have these skills, feel free to move on to the course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Software Architecture Basics

#### What is software architecture?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=0)** - [Instructor] Okay, we're going to get started here by talking about what software architecture is in the first place.
>
> **[0:07](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=7)** So in order to define what software architecture is, let's think about architecture as the word is normally used, which is applied to buildings.
>
> **[0:15](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=15)** When we talk about the architecture of a building, we're generally referring to the overall structure and large scale design of that building, whereas interior design would be more of the details inside the building.
>
> **[0:29](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=29)** So in a similar way, when we talk about software architecture, we're talking about studying the larger structure and organization, as well as patterns of our development project.
>
> **[0:41](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=41)** And we're particularly concerned with these things with regards to how they impact developer productivity over time.
>
> **[0:48](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=48)** Now, this last part is where software architecture and regular architecture diverge a little bit.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=54)** I'll get to that in just a second.
>
> **[0:56](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=56)** First, let's take a look at the goals of both architecture and software architecture.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=62)** With architecture, the goal in a very general sense is to design a building that fits the constraints and required uses.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=71)** So right here, we have constraints on one hand, which are things that are challenging about the project, things like budgets and zoning restrictions, and we also have the required uses, that's what the people who are building the structure need it to do.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=85)** Now, on the same token, in software architecture, our goals are pretty much the same.
>
> **[1:30](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=90)** We want to design software that fits the constraints and required uses.
>
> **[1:34](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=94)** And just like with regular architecture, the constraints are usually things like budget and the required uses are what people are designing that software to do in the first place.
>
> **[1:46](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=106)** So here's where we get to the differences between architecture and software architecture.
>
> **[1:50](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=110)** With architecture, once we've built that building, once construction is completed, it's going to remain fairly static over time.
>
> **[1:58](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=118)** Yes, we'll have to renovate it every once in a while and there will be ongoing maintenance with the plumbing, the electricity, et cetera.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=126)** But for the most part, we're not going to make any drastic changes to it.
>
> **[2:10](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=130)** With software architecture, on the other hand, that thing that we design is going to be constantly changing throughout its lifetime.
>
> **[2:16](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=136)** In other words, you're never going to get to that point where everybody's happy with it, and no one wants to add any more features.
>
> **[2:23](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=143)** Trust me, managers and other stakeholders are always going to want to add other features.
>
> **[2:29](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=149)** So what this means is that we have to design our software in a way that it can be easily changed over time.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=155)** So you might be wondering where React fits into this, right?
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=159)** I haven't even mentioned React yet.
>
> **[2:41](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=161)** And that's because in theory, software architecture is meant to be independent of any of the given technologies that are used.
>
> **[2:50](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=170)** This allows us to design our programs without saying, okay, we're going to use MongoDB, or okay, we're going to use React.
>
> **[2:57](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=177)** It keeps it more flexible in case you want to change your technologies down the road.
>
> **[3:02](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=182)** However, since this really is more of a practical course, and I have very little interest in doing a theoretical course about this, what we're going to be doing is looking at a lot of concrete examples that involve React to demonstrate some of the larger architectural concerns that usually come up in React applications.
>
> **[3:20](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=200)** A little more specifically, we're going to be covering five main things with React applications.
>
> **[3:25](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=205)** We're going to start off by looking at server-side rendering.
>
> **[3:29](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=209)** Some of you may be familiar with what this is.
>
> **[3:31](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=211)** Some of you may not. We'll talk about that shortly.
>
> **[3:34](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=214)** The next thing we're going to talk about is state management.
>
> **[3:37](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=217)** That is how do we effectively manage the data that our application deals with.
>
> **[3:42](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=222)** After that, we're going to discuss data loading.
>
> **[3:45](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=225)** What is the proper relationship between our front-end and backend and how do they communicate most effectively?
>
> **[3:51](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=231)** Especially in the context of server-side rendering, which we'll talk about.
>
> **[3:54](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=234)** Next up, we're going to talk about code splitting, which is how do we effectively deliver the code that we've written to our clients.
>
> **[4:01](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=241)** And last but not least, we're going to talk about project organization.
>
> **[4:04](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=244)** How do we organize our code in such a way that it remains easy for developers to work with?
>
> **[4:11](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=251)** Well, those are the main topics we're going to be talking about here.
>
> **[4:13](https://www.linkedin.com/learning/react-software-architecture/what-is-software-architecture?u=76281980&t=253)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), static (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Server-Side Rendering (SSR)

#### Server-side rendering basics
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=0)** - [Instructor] Okay, so the first architectural topic that we're going to talk about in this course is server-side rendering.
>
> **[0:06](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=6)** Now, many of you may know what server-side rendering is already.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=9)** I'll define it in just a second for those of you who don't, but server-side rendering is an extremely important topic for many production grade applications.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=18)** And it can also considerably complicate the architecture of our application, which is why we're going to take a look at it here.
>
> **[0:24](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=24)** So, first of all, let's talk about what server-side rendering is.
>
> **[0:28](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=28)** In the normal flow of a React application, here's what happens.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=32)** The client's browser makes a request to the server and loads the index.html file, which doesn't really contain anything.
>
> **[0:40](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=40)** It's basically blank at that point.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=42)** That index.html file then tells the browser to load our React scripts, which are the ones that actually render all of the HTML elements into the page.
>
> **[0:53](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=53)** However, with server-side rendering, the server is the one that takes care of running our React scripts and rendering all of our elements.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=62)** We'll see what this looks like in code very shortly, but first let's talk about some of the comparisons between client-side rendering and server-side rendering.
>
> **[1:10](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=70)** So as we said, client-side rendering renders the app to HTML in the user's browser.
>
> **[1:16](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=76)** So the user's browser is essentially the one that's doing all the work there.
>
> **[1:20](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=80)** In server-side rendering, however, the server is the one that's doing most of the work and then it simply sends that finished HTML document to the client.
>
> **[1:29](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=89)** The client doesn't really have to do very much in that case.
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=92)** As far as the order in which things happen between client-side rendering and server-side rendering, with client-side rendering, the process is pretty complicated.
>
> **[1:43](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=103)** First, as I've said, we have to load the index.html file from the server.
>
> **[1:48](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=108)** Then that index.html file tells the browser to load the JS bundle from the server that contains all of our React code.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=116)** The browser will then run that bundle, rendering all of our elements.
>
> **[1:59](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=119)** It will display our app and then it will still have to load the data from the server.
>
> **[2:04](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=124)** So you can see, we've got quite a few round trips here.
>
> **[2:07](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=127)** We've got at least three for loading index.html, loading the JS bundle, and loading the data.
>
> **[2:14](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=134)** With server-side rendering, this process is quite a bit simpler actually.
>
> **[2:18](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=138)** We start off with the server rendering the app, basically running our React scripts, converting it to HTML.
>
> **[2:24](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=144)** It then loads the data, which is much easier since we're on the server.
>
> **[2:29](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=149)** And after that, it will create an HTML document, which it will send directly to the client side.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=155)** So as far as the pros and cons of each of these, with client-side rendering, there's generally less strain on the server.
>
> **[2:42](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=162)** The user's browser is the one that's doing all of the work of rendering.
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=166)** However, especially in cases where users have a slow internet connection or where your users are geographically very far away from you, for example, if your servers are in New York and your users are in Australia, having these multiple round trips just to load the index.html, the JS bundle, and the data can really lead to a very poor user experience.
>
> **[3:08](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=188)** However, with server-side rendering, since there's only one round trip, this can lead to a drastically improved user experience and it can also be better for SEO.
>
> **[3:17](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=197)** However, obviously there's going to be more strain on the server since the server is the one doing all the work.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-basics?u=76281980&t=202)** So if you have a lot of users during a big sale or something like that, you're going to want to make sure your server's powerful enough to handle that.

> [!info]- Semantic Content
>
> **File Paths:** index.html (6)
> **Env Vars:** html (5), seo (1)
> **Code Keywords:** let (2), case. (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setting up a simple React app
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=0)** - [Instructor] Okay. So now that we've learned a lot of the background behind server-side rendering and how it works, what we're going to do is see what it looks like in the context of a full stack React application.
>
> **[0:10](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=10)** So to get started here, you're going to want to copy the starting state of the exercise files, which contain basically just a stripped down version of the create React app starting app.
>
> **[0:21](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=21)** So once you've got that.
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=23)** You're going to want to run npn install in that folder, and that will install all of the dependencies for the project.
>
> **[0:30](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=30)** And once you've done that, what we're going to do next is set up a very simple blog application, which will give us a good starting point for adding server side rendering.
>
> **[0:41](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=41)** So to get started, let's create a new folder in here, which we'll call pages.
>
> **[0:46](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=46)** And we're going to create three different pages for our app.
>
> **[0:50](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=50)** None of them is going to be very complex.
>
> **[0:51](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=51)** We're just going to say Home.js, which will be the home page.
>
> **[0:55](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=55)** We'll have About.js, which will be the about page.
>
> **[0:58](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=58)** And we'll have Articles.js, which will be the articles page.
>
> **[1:05](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=65)** And now that we've done that, let's just implement some very, very simple JSX for each of these.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=71)** What we're going to do is say export const Home and the JSX for this.
>
> **[1:19](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=79)** We're just going to have an h1 one heading, that says home.
>
> **[1:23](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=83)** And for purposes that I'll explain, once we actually start rendering this thing on the server, we are going to need to say, import React from react at the top.
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=92)** This is something that create React app has made it possible for us not to do when we're running it locally, but when we're rendering it on the server, just because of how React works behind the scenes, we're going to need to have this import at the top of any file where we use JSX.
>
> **[1:49](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=109)** So that's our home component.
>
> **[1:50](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=110)** Let's just copy this and paste it into about an articles and these are going to be pretty much the same thing.
>
> **[1:55](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=115)** We just need to change the component name and the components heading here.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=123)** And we'll do the same for our articles page.
>
> **[2:05](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=125)** We'll say Articles and Articles.
>
> **[2:12](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=132)** Okay. So the next thing we're going to do is just add basic routes for each of these.
>
> **[2:17](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=137)** So here's what that's going to look like.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=139)** We're going to start off by installing the react router dom package.
>
> **[2:22](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=142)** Many of you are already familiar with react-router-dom.
>
> **[2:26](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=146)** We're just going to install that.
>
> **[2:27](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=147)** And while that's installing, let's head over to our app component and add routes for each of these.
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=153)** So first of all, we're going to also have to import React at the top of our App.js file.
>
> **[2:38](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=158)** We're going to say import React from react.
>
> **[2:41](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=161)** That'll allow us to render this thing on the server, once we have one.
>
> **[2:45](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=165)** And let's create some routes here, we're going to start off by importing some components from the react-router-dom package.
>
> **[2:52](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=172)** So we'll say import BrowserRouter, Switch and Route, as well as link from react-router-dom.
>
> **[3:07](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=187)** And then we're going to set that all up by wrapping everything inside a BrowserRouter, including the heading here.
>
> **[3:13](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=193)** We're going to have a switch, and inside that switch we're going to define all of our routes.
>
> **[3:18](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=198)** So first we're going to have to import our home about and article's components.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=202)** I'm just going to do that like this.
>
> **[3:28](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=208)** About import Articles, and these are all from the pages directory.
>
> **[3:38](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=218)** And now that we have those, let's define our routes.
>
> **[3:40](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=220)** We're going to have the first route B for our home component.
>
> **[3:47](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=227)** The path for this route is going to be just / and we're going to say that it's exact, since we only want this to show up when it really is the home route.
>
> **[3:55](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=235)** Under that, we're going to have Route with a path of /about that'll be for our about page, of course.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=243)** And then we'll have another route with the path of articles, which as you may have guessed is going to display our articles page.
>
> **[4:16](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=256)** So now that we have all of our pages, the last thing we're going to do is just add a basic navbar at the top here for each of our pages, so that we can get around a little easier.
>
> **[4:25](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=265)** So we're just going to have an unordered list here with several list items, each of which will contain a link to the respective pages.
>
> **[4:33](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=273)** So we'll have a link to our homepage here, which will say home.
>
> **[4:37](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=277)** We're going to have a link to our about page here which we'll say, About.
>
> **[4:44](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=284)** And we're going to have a link to our articles page, which will say Articles.
>
> **[4:54](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=294)** Okay. So let's run our application locally just to make sure everything works.
>
> **[4:57](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=297)** And this is not being server-side rendered right now.
>
> **[5:00](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=300)** That's what we'll add in just a minute here.
>
> **[5:05](https://www.linkedin.com/learning/react-software-architecture/setting-up-a-simple-react-app?u=76281980&t=305)** And let's just make sure our routes work and that's it we should be good to go to add server side rendering to our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (3), this. (2), const (1)
> **File Paths:** home.js (1), about.js (1), articles.js (1), app.js (1)
> **Prerequisites:** install (3), set up (1)
> **Env Vars:** jsx (3)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Basic React SSR
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=0)** - Okay, so now that we have our very simple blog application, what we're going to do, is start adding some server-side rendering to it.
>
> **[0:08](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=8)** So, the first step in all of this, is that we have to create a server file that will actually run, listen for requests and render and serve our app.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=18)** So, let's create a new file in the outermost directory of our project here, and we're going to call it server.js.
>
> **[0:26](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=26)** Now, this is going to be a basic express server, and we'll want to write it in the same JavaScript syntax that we write our front-end in, right?
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=33)** Since it's going to be essentially, running our front-end code.
>
> **[0:36](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=36)** So, in order to do both of those things, we need to install a few packages.
>
> **[0:41](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=41)** The first thing we're going to do is say, npm install --save-dev, and we're going to install some packages from babel that will basically take the modern code that we write, such as in react, as well as on the server itself.
>
> **[0:59](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=59)** And, basically, convert that into something that no js will be able to run.
>
> **[1:03](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=63)** So, we're going to say npm install save dev, we're going to install a few packages here, the first one's going to be @babel/core, then @babel/node, @babel/preset-env and @babel/preset-react.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=84)** And we're also going to install a nodemon to take care of running and restarting our server when we make changes.
>
> **[1:31](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=91)** So, let's hit enter and install all of those packages.
>
> **[1:35](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=95)** And once you've installed those, we're also going to want to install the express package, which we can use to build a basic server.
>
> **[1:46](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=106)** And there we go.
>
> **[1:47](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=107)** So let's get started creating our server.
>
> **[1:50](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=110)** We're going to start off of course, by importing express, which we'll be using to create our server end-points.
>
> **[1:57](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=117)** And we're also going to import react, since we'll be using JSX inside our server.
>
> **[2:04](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=124)** After that, we're also going to import something called, renderToString from react-dom/server, this will do the actual rendering of our app as you'll see.
>
> **[2:16](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=136)** And that's all we'll need for now.
>
> **[2:18](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=138)** So, let's create our server.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=139)** We're going to say const app = express.
>
> **[2:24](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=144)** And then we're going to say app.get, and the path that we're going to specify is going to be slash with an asterisk, basically, that means that this route will respond to any get requests on any path, which is exactly what we want, since basically, what we want to do, is no matter what path the user requests, we want to send them back this html file, which is going to be our rendered reactApp.
>
> **[2:49](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=169)** So, the callback here, is just going to be a standard express call back, And inside of here, what we're going to do, is say, const reactApp = renderToString, and this renderToString is a function that we can pass JSX to, and it will basically, take that, and render it into actual html.
>
> **[3:13](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=193)** Okay, so just to get started here, let's define a basic h1 heading, and we'll say something like, Hello from the server side! All right?
>
> **[3:27](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=207)** So what this line is going to do, is take this JSX, convert it into an actual html string, and we're going to send that html string back to the client.
>
> **[3:35](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=215)** Now, the way we do that, is by saying, return response.send, and we're just going to define a very basic html string in here, we're going to say html, we're going to define our body here, and inside there, we're going to say, div id = root, just like the usual div that we render our reactApp into.
>
> **[4:04](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=244)** And inside of there, we're going to insert the reactApp string.
>
> **[4:07](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=247)** So, we're going to say reactApp, just like that.
>
> **[4:16](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=256)** Okay, so that's our server-end point that will take care of rendering the JSX and sending it back to the client.
>
> **[4:22](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=262)** What we're going to do now, is just tell our server to listen on port 8080.
>
> **[4:26](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=266)** (computer keyboard clicking) And we'll say console.log Server is listening on port 8080.
>
> **[4:40](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=280)** And that's all for our server code for now.
>
> **[4:42](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=282)** One last thing that we're going to have to do before we'll actually be able to run this code, is define a babelrc file.
>
> **[4:48](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=288)** This will basically tell babel, which again, we're going to be using to run our server and transpile code, it's going to tell it what presets it will need to use, in order to make sense of our code.
>
> **[5:00](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=300)** So let's create a file in here called babelrc, this is just going to be a simple json object that we put in here, with the key presets and a value, which is going to be an array that contains two things.
>
> **[5:14](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=314)** The first is going to be babel/preset-env, that's just the standard preset for converting newer JavaScript syntax into older JavaScript syntax.
>
> **[5:25](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=325)** And then we're going to add another preset called, @babel/preset-react, basically, this preset will take care of transpiling the JSX into actual JavaScript code.
>
> **[5:40](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=340)** JSX isn't typically something that no js can parse without a little help.
>
> **[5:45](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=345)** So, now that we have our babelrc, what we're going to do, is run our application, and to do that, we're just going to open up a terminal and say, npx babel-node server.js, and we should see that it says, Server is listening on port 8080.
>
> **[6:03](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=363)** So now if we go up here and paste, local host 8080, we should see the message, Hello from the server-side!
>
> **[6:10](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=370)** And this was rendered from JSX on the server and sent back to the client side.
>
> **[6:16](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=376)** We can actually see this, if we open up our inspector window, go to the network tab, we might have to hit refresh, so that we can see the actual requests.
>
> **[6:25](https://www.linkedin.com/learning/react-software-architecture/basic-react-ssr?u=76281980&t=385)** And if you click on this local host request, what you're going to see is the html that our server actually sent back, You can see that it's sent back H1, and it says, Hello from the server side! Inside of there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), const (2), function (1), pass (1)
> **Code Identifiers:** reactapp (5), rendertostring (3)
> **Prerequisites:** install (8)
> **CLI Commands:** npm (2), node (2), make (2), npx (1)
> **Env Vars:** jsx (7)
> **Ports:** port 8080 (3)
> **Analogies:** just like (2), such as (1)
> **File Paths:** server.js (2)

#### Building and rendering an SSR React app
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=0)** - [Instructor] All right, so we've seen a very basic example of server-side rendering.
>
> **[0:04](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=4)** However, at this point, our server is still just rendering a basic HTML element in JSX instead of our actual React app.
>
> **[0:13](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=13)** Obviously, now that we've created this app and our page components, we're going to want to have our server render those.
>
> **[0:19](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=19)** So in order to get that working, there are a few steps that we have to take.
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=23)** The first thing we have to do is build our React app and we can do that by running the command npm run build.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=32)** And what that will do is generate a build directory that will contain all of our minified transpiled React code.
>
> **[0:40](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=40)** And now that we've done that, let's open up our server.js file again and we're going to add a few things.
>
> **[0:45](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=45)** The first thing we're going to add is a line that tells our server to statically serve the files inside that build folder.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=54)** So to do that, what we're going to do is say app.use and then express.static.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=62)** And the argument here is going to be ./build, so we're telling it to serve static files from that directory.
>
> **[1:10](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=70)** And we're going to add an argument here, which is an object that contains the property index and the value false.
>
> **[1:18](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=78)** Basically, if you take a look inside this build folder, you'll see that it contains an index.html.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=85)** Now, just by default, when Express is serving a static folder like we are here, when it sees that the folder has an index.html file and the user is trying to load data from it, it will immediately send back that file.
>
> **[1:38](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=98)** So we don't want that to happen for reasons that I'll show you in just a minute.
>
> **[1:42](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=102)** So that's why we specify this index false thing.
>
> **[1:46](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=106)** So now that we have that set up, we should be able to render basic components from our React application.
>
> **[1:51](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=111)** Let's start off by rendering our homepage.
>
> **[1:54](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=114)** What this is going to look like is we're going to import it.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=116)** We'll say import home from pages/home and then we're going to remove this h1 heading and put in our home component.
>
> **[2:07](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=127)** All right.
>
> **[2:09](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=129)** So now just to make sure our app is running again, let's say npx babel-node server.js.
>
> **[2:17](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=137)** And if you want this to automatically update for you, you can say npx nodemon --exec npx babel-node server.js.
>
> **[2:27](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=147)** Kind of a long command, but that basically just takes care of restarting our server for us as we make changes.
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=153)** Oops and it looks like I need to add source/pages/home there.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=159)** And we should see that our server is successfully listening.
>
> **[2:42](https://www.linkedin.com/learning/react-software-architecture/building-and-rendering-an-ssr-react-app?u=76281980&t=162)** So let's go back here and refresh our local host 8080 and we should see that the home component is now displayed in our browser.

> [!info]- Semantic Content
>
> **CLI Commands:** npx (3), make (2), node (2), npm (1)
> **Code Keywords:** let (4), static (3), default, (1)
> **File Paths:** server.js (3), index.html (2)
> **Env Vars:** html (1), jsx (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Routing with server-side rendering
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=0)** - [Instructor] So at this point, we're able to render basic components from our reactApp on our server.
>
> **[0:06](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=6)** So the next thing that we're going to do is render our app component.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=9)** You may have wondered why we didn't do that at first.
>
> **[0:11](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=11)** And that's because in order for it to work, we have to set up routing on our server for the frontend.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=18)** Now this is going to look a little strange.
>
> **[0:20](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=20)** What we're going to do is we're going to have to import something called static router from react-router-dom.
>
> **[0:29](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=29)** StaticRouter is basically the server side equivalent of BrowserRouter that we saw on the frontend.
>
> **[0:37](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=37)** So here's what it's going to look like.
>
> **[0:38](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=38)** We're going to say inside our renderTostring, we'll say StaticRouter, and I need to also pass a prop called location, which is going to be equal to request.url, that just lets the static router know what route the user is actually requesting, so it can render it accordingly.
>
> **[0:59](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=59)** And then inside of here, we're going to display our app component, which we'll need to import up at the top here.
>
> **[1:05](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=65)** We're going to say import app from './src/App' And then what we're going to need to do is go over to our App component and move this BrowserRouter out into the index.js file.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=84)** So we're going to remove those from here.
>
> **[1:28](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=88)** We're going to have to replace them with React fragments, like this.
>
> **[1:37](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=97)** And then up here, we'll remove that import and then let's go into index.js, and here's where we're going to add the browser router component.
>
> **[1:47](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=107)** So we're going to say import BrowserRouter from react-router-dom.
>
> **[1:58](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=118)** And we're going to wrap our app component here in a BrowserRouter.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=126)** So you might be wondering why we have to add this BrowserRouter thing to index.js after all, if our server is just taking care of rendering, React for us, why do we need this index.js file at all?
>
> **[2:20](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=140)** Right, isn't it just kind of redundant since we're just getting a pre rendered HTML document?
>
> **[2:26](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=146)** Well, the responsibilities of this index.js file are going to shift a little bit.
>
> **[2:30](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=150)** So first of all, what we're going to do is change this from ReactDom.render, to ReactDom.hydrate.
>
> **[2:37](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=157)** Now what ReactDom.hydrate does is it takes the pre-rendered HTML that we're going to get from our server and adds React to it so that it will update appropriately when data in our application changes, right?
>
> **[2:51](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=171)** So basically, even though we're getting an HTML document from the server, we still want it to behave and rerender like a reactApp, right?
>
> **[2:59](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=179)** That's what this hydrate function makes sure of.
>
> **[3:02](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=182)** So now that we have that, the last thing we need to do is inside our server.js file.
>
> **[3:08](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=188)** Instead of just sending back this basic HTML string that we coded out, we're going to actually load the index.html file from our build folder and manually replace this div id root with our reactApp.
>
> **[3:24](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=204)** Again, the reason that we have to do this is that if you look at index.html, it's kind of hard to see, but basically when we build our reactApp, it adds these script tags to the end, with a random hash that will basically point to the compiled React scripts.
>
> **[3:41](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=221)** Now, since we can't know what these are going to be on our server, we won't know what names they have.
>
> **[3:46](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=226)** We simply have to load this index.html file and manually replace this div with our app.
>
> **[3:54](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=234)** So don't worry if that didn't quite make sense, you're going to see what that looks like here.
>
> **[3:59](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=239)** The first thing we're going to do is load that index.html file, which will say const, and we'll call it template file equals path.resolve./build/index.html.
>
> **[4:15](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=255)** So we're loading that file and up at the top, we're going to have to import path and fs.
>
> **[4:21](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=261)** So we'll say import path from path import fs from fs.
>
> **[4:31](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=271)** All right, and now we've resolved the path we can load the data.
>
> **[4:36](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=276)** So we'll just say fs.read file template file.
>
> **[4:43](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=283)** We're going to say utf8 is the encoding.
>
> **[4:46](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=286)** And our callback here is going to have error and data.
>
> **[4:52](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=292)** Data of course here is going to be the actual contents of the index.html file.
>
> **[4:57](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=297)** So what we need to do is basically we'll want to check if there's an error, hopefully there won't be, but it's just good practice to do something in this case.
>
> **[5:07](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=307)** In that case, we'll just say return response.status(500) And we'll send the error back to the client.
>
> **[5:14](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=314)** We'll just say .send and send the error back to them.
>
> **[5:20](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=320)** Otherwise, what we're going to do is send them back the contents of this template file with the div that we would normally render our reactApp into replaced with our already rendered reactApp.
>
> **[5:32](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=332)** So here's what that's going to look like.
>
> **[5:33](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=333)** We're going to say return response.send.
>
> **[5:38](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=338)** And we're going to say data.replace, and we're going to replace the div with the id of route, right?
>
> **[5:49](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=349)** It just looks like that.
>
> **[5:50](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=350)** If you take a look in the index.html file, we're going to replace that.
>
> **[5:55](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=355)** And we're going to use back ticks here because it's a template string.
>
> **[5:58](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=358)** We're going to say div id equals route, insert our reactApp into there, right?
>
> **[6:05](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=365)** That's our rendered HTML.
>
> **[6:08](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=368)** And that's what that's going to look like.
>
> **[6:09](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=369)** So let's give this a try now, first of all, we need to rebuild our front end since we made changes to it.
>
> **[6:18](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=378)** And then we're just going to run our server again, by saying NPX nodemon --exec, that big long command that I showed you earlier.
>
> **[6:25](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=385)** It should be in your command history and let's head over and see if this is working.
>
> **[6:31](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=391)** So let's refresh our app and we should see that our homepage.
>
> **[6:35](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=395)** Comes up our about page, our articles page, everything.
>
> **[6:38](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=398)** And if we inspect this, what we're going to see if we go to network and take a look at the initial file that we got, we should be able to search for server-side rendering example.
>
> **[6:52](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=412)** And we'll see that that HTML is indeed server-side rendered in the first response that we get.
>
> **[6:58](https://www.linkedin.com/learning/react-software-architecture/routing-with-server-side-rendering?u=76281980&t=418)** In other words, the server took care of rendering, all of that for us.

> [!info]- Semantic Content
>
> **File Paths:** index.html (6), index.js (5), server.js (1), path.resolve./build/index.html (1)
> **Code Keywords:** let (4), static (2), pass (1), this. (1), function (1)
> **Code Identifiers:** reactapp (7), rendertostring (1)
> **Env Vars:** html (6), npx (1)
> **Exercise Files:** template (4)
> **CLI Commands:** make (1), npx (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)

#### Styling with server-side rendering
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=0)** - [Instructor] All right, so now that we have our app set up for basic server side rendering, our server is basically taking care of rendering all of our React components.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=9)** The next thing that we're going to take a look at is how to add styling.
>
> **[0:12](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=12)** Now, this is actually not as trivial as it sounds, since the normal way of adding style to React components in a create React app application is using CSS modules.
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=23)** Now in order for CSS modules to work on the server side, when we're rendering it, that would involve us setting up web pack ourselves.
>
> **[0:31](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=31)** And since I really would like to avoid that here, since it can be a little too in-depth and complicated for most people, I'm going to show you instead, two of my favorite ways for adding styles to server-side rendering.
>
> **[0:44](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=44)** So the first thing which is the rather obvious way of going about it would be to open up the index.CSS file and simply add all the styles for your application inside of there, right?
>
> **[0:56](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=56)** Basically what happens is that when you build this, here, let's first add just a basic style to it.
>
> **[1:01](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=61)** We'll say each one, we'll say color green and save it.
>
> **[1:08](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=68)** IF we build our front end application now, if we say npm run build, what we're going to see is that this style that we added is going to be incorporated into the CSS that our app actually uses.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=84)** So if we open up static CSS, we should be able to find this inside of here somewhere.
>
> **[1:33](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=93)** All right, so there's our color green inside of this minified CSS.
>
> **[1:38](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=98)** So that's one way to do it and this would work by the way, if we were to run our application again, just to show you.
>
> **[1:46](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=106)** If we refresh it now, we'll see that our H1s are indeed green.
>
> **[1:51](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=111)** However, there's another, what I would consider better way of doing this.
>
> **[1:55](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=115)** And that's using something called styled components.
>
> **[1:59](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=119)** So basically styled components are just an alternate syntax for adding styles to our components in React.
>
> **[2:05](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=125)** Here's how they work.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=126)** We're going to start off by installing the styled components package by saying npm install, styled components.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=139)** And then what we're going to do is first of all, we'll remove this color green from our styles here, and then side our app.JS file or wherever we want to add styling to a given element.
>
> **[2:32](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=152)** What we're going to do is import styled from styled components.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=159)** And I'm not going to go too much into detail on how styled components work here, but here's the basic syntax.
>
> **[2:45](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=165)** We're going to say const, and we'll say big green heading.
>
> **[2:51](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=171)** And then we'll say styled.H1, which will give us the H1 element as a base, for the extra styles we're going add here.
>
> **[3:00](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=180)** And then inside this string, what we're going to do is simply add the styles that we want to apply to this element, when we use it in JSX.
>
> **[3:08](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=188)** So what we're going to do is say color, green.
>
> **[3:13](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=193)** And we'll say font size, we'll do something like 96 pixels just to make it that much more apparent.
>
> **[3:21](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=201)** Now, the way we use this big green heading, is simply by replacing the tags of an element with it.
>
> **[3:28](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=208)** And what that will do is automatically apply the styles we specified here and the element we specified here to this element.
>
> **[3:36](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=216)** So in other words, this H1 tag, will be a big green H1 tag.
>
> **[3:41](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=221)** We're going to say big green heading.
>
> **[3:44](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=224)** And that's basically it.
>
> **[3:45](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=225)** The problem though, is that this won't yet work on the server side.
>
> **[3:50](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=230)** I'll show you why in just a minute, but first of all, I'll show you that it works on the client side, if we just run our app as a regular client site app, we'll see that server side rendering example is indeed big and green.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=243)** However, if we build our front end again by running npm run build, what we're going to see is that if we run our server and view that page form there, our server-side rendering example is not actually a big green heading.
>
> **[4:22](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=262)** So what's the problem here?
>
> **[4:23](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=263)** Well, the problem has to do with how styled components and styles in general work, basically when we're running it on the client side, styled components work by adding a special class name to each of our components and then generating the corresponding CSS for it.
>
> **[4:39](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=279)** However, when we're rendering our app server side, you have to actually do is scrape all of the generated styles out of our app and insert them into the index.HTML file that we send to the client.
>
> **[4:53](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=293)** Again, that might sound a little complicated, but it's actually fairly straight forward, here's what that's going to look like.
>
> **[4:59](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=299)** The first thing we're going to do is start off by importing something called server style sheet, from styled components.
>
> **[5:13](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=313)** And then down here, what we're going do is have our server style sheet thing that we just imported, scrape all of these styles out of our app, as it renders.
>
> **[5:22](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=322)** And basically give that to us inside a style tag that we can insert into our HTML.
>
> **[5:28](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=328)** So here's what this is going to look like.
>
> **[5:29](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=329)** We're going to say, const sheet equals new server style sheet.
>
> **[5:39](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=339)** And then inside our rendered string, we're going to say sheet.collectstyles, just like that.
>
> **[5:49](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=349)** And at this point, this sheet will have scraped all of the styles from our rendered application.
>
> **[5:55](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=355)** So what we have to do now is replace something in our index.HTML, just like we did with our root.
>
> **[6:02](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=362)** The only problem though, is that at this point, there is no reliable element that we can replace with our styles.
>
> **[6:07](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=367)** So what we're going to do is inside our index.HTML file, in our public directory, up here in the header, we're going to add two curly braces and say styles.
>
> **[6:22](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=382)** Now the purpose of this, is that we'll basically just be replacing this string in our HTML file, with our generated style.
>
> **[6:30](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=390)** So here's what that's going to look like.
>
> **[6:32](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=392)** We're going to add onto the end of our data.replace, we're going to add another .replace, and we're going to say replace, double curly braces with styles in the middle, with the scraped styles that our sheet object here has.
>
> **[6:51](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=411)** So what that looks like, is we just have to say sheet.getstyletags, and that's really all we have to do.
>
> **[7:01](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=421)** So let's let's rebuild our front end now that we made those changes to the index.HTML file.
>
> **[7:06](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=426)** We're going to say npm run build, and then we're going to run our server again.
>
> **[7:14](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=434)** And let's go take a look and see if that solved our problem.
>
> **[7:16](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=436)** So let's refresh our app and we'll see that indeed our server side rendering example is big and green and we can see if we inspect the file that we got back, if we open up network, we might need to refresh the page here and take a look at articles.
>
> **[7:35](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=455)** We see that it added this style tag with this randomly generated style name that styled components came up with for us to our HTML, right?
>
> **[7:44](https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=76281980&t=464)** So that's basically being applied automatically to all of the pre-rendered HTML inside our application.

> [!info]- Semantic Content
>
> **Env Vars:** html (8), css (7), jsx (1)
> **Code Keywords:** let (5), this, (2), const (2), static (1), this. (1)
> **File Paths:** index.html (4), index.css (1), app.js (1)
> **CLI Commands:** npm (4), find (1), make (1)
> **Analogies:** just like (2)
> **Prerequisites:** set up (1), install (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Server-side rendering caveats
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=0)** - [Instructor] All right, so at this point, we have a pretty fully functional server-side app.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=5)** Now obviously our app is not that complex.
>
> **[0:07](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=7)** It's only got three different pages and none of those pages displays much data besides a title, but the basic concepts that we've covered here apply in server-side rendered apps of all different sizes.
>
> **[0:19](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=19)** Now later on in the course, we're going to take a look at how data loading is incorporated with server-side rendering which is obviously a very important topic as well.
>
> **[0:28](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=28)** But before we move on from the basics, I want to point out a few caveats that have to do with server-side rendering.
>
> **[0:34](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=34)** Probably the biggest thing to keep in mind when you're working on the front-end of a server-side rendered application is that a lot of the time the code that you write is not going to actually be executing in the browser.
>
> **[0:47](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=47)** So here's what that means.
>
> **[0:48](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=48)** Let's say that inside your app component, you wanted to access the window global.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=54)** Let's say that you just wanted to do something like log out the location.
>
> **[0:58](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=58)** So we'll say window.location.href and let's build our front-end and serve it.
>
> **[1:12](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=72)** And what we're going to see is that if we try and load our application again, we'll get an error saying that window is not defined.
>
> **[1:20](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=80)** Now the reason we get this error is because even though we're used to thinking about our React apps executing in the browser, because we're rendering them on the server, when this code executes, there actually is no window.
>
> **[1:34](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=94)** Now this is something we'll take a look at in a lot more detail, again, later on when we look at data loading, but it's very important to be aware of.
>
> **[1:41](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=101)** And another thing to keep in mind too is that if you use document, that's going to suffer from the same thing, right?
>
> **[1:50](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=110)** You're going to get an error generally saying that document is not defined.
>
> **[1:55](https://www.linkedin.com/learning/react-software-architecture/server-side-rendering-caveats?u=76281980&t=115)** So that's probably the main caveat to keep in mind when you're working with server-side rendered apps in React is that when they're being rendered, the code that they're executing is not in the browser.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (3), be aware (1), caveat (1)
> **Code Keywords:** let (3)
> **Speakers:** - [instructor] (1)


### 3. State Management Architecture

#### What is state management?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=0)** - [Instructor] All right, so the next thing that we're going to talk about with regards to software architecture is something called state management.
>
> **[0:06](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=6)** Now, state management is a very important part of virtually any web application, and it can have pretty profound implications on how we actually organize our code.
>
> **[0:16](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=16)** So first of all, let's start off by talking about what state management is exactly.
>
> **[0:20](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=20)** The definition that I've come up with for state management is state management is basically how our application handles the data needs of its components with regards to loading, storing, persisting, and sharing this data.
>
> **[0:34](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=34)** Now that's a pretty broad definition and that's by design, because the concerns of state management tend to be quite broad themselves.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=42)** So moving on to different state management technologies, most of you have probably had at least some experience with some of these technologies before.
>
> **[0:50](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=50)** Maybe some of you have heard of all of these.
>
> **[0:53](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=53)** The main state management technologies that we're going to be looking at in this course are the useState Hook and Context, which are what I refer to as sort of the vanilla React state management tools, right?
>
> **[1:04](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=64)** You don't need to import any other libraries besides React for these.
>
> **[1:08](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=68)** And we're also going to be taking a look at Recoil, Redux, and MobX, which are three of the most popular state management technologies in the React world.
>
> **[1:18](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=78)** Now before we jump into that though, I want to point out something that I think of as different sizes of state.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=85)** Basically, the different state management tools that are available to us work on different scales in our application.
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=92)** So one question that I get quite a lot about these different technologies is, how do we choose between them?
>
> **[1:38](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=98)** Well, the main criteria that I look at when choosing a state management tool are the size and complexity of the application that I'm working on.
>
> **[1:46](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=106)** Is it going to be just a simple blog application, or is it going to be a full scale e-commerce site?
>
> **[1:52](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=112)** And related to this, I also look at how many components are going to need to share the data that our application contains.
>
> **[1:59](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=119)** So is the data that we're loading from the server just going to be used in a single component, or is it going to be used across our entire site?
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=126)** And last but not least, I take a look at the unique strengths and weaknesses of each.
>
> **[2:11](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=131)** This is something that we'll see when we actually implement each of these tools in React.
>
> **[2:16](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=136)** But before we move on to that, let's talk about something that I refer to as different sizes of state.
>
> **[2:22](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=142)** Basically, this idea is related to what I just mentioned, and it refers to the fact that our different state management tools work on different scales in our application.
>
> **[2:31](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=151)** So on one side of the spectrum, we have what I refer to as small state.
>
> **[2:36](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=156)** That is, state that really deals with just very small atomic pieces of data that we want to deal with.
>
> **[2:43](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=163)** And that's usually taken care of by the vanilla React state management tools useState and Context.
>
> **[2:50](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=170)** Moving up then, we have medium state.
>
> **[2:52](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=172)** This is generally state that applies to a smaller subset of the components in our application, but needs to be shared between them fairly regularly.
>
> **[3:02](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=182)** And on the larger end of the spectrum, we have Redux and MobX, which specialize in handling state that is required by a large number of components and is generally part of a large application.
>
> **[3:16](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=196)** And that's basically the spectrum of state sizes.
>
> **[3:19](https://www.linkedin.com/learning/react-software-architecture/what-is-state-management?u=76281980&t=199)** Again, we're going to see how this all applies when we take a look at each of these tools in turn.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Code Identifiers:** usestate (2)
> **Definitions:** is a  (1), refers to (1)
> **Speakers:** - [instructor] (1)

#### Small state with the useState Hook
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=1)** So the first state management tool that we're going to take a look at is the vanilla react useState hook.
>
> **[0:06](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=6)** Now, most of you are probably already familiar with this useState hook, but I'm just going to implement something here so that we have a good point of reference for the rest of the technologies that we're going to take a look at.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=18)** So the example that we're going to be implementing here is just a basic counter button that keeps track of how many times it's been clicked.
>
> **[0:24](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=24)** Now I understand that this is not the most exciting example, but again, it provides a fantastic point of reference for seeing how different state management libraries handle things.
>
> **[0:35](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=35)** So what we're going to do is create a new component inside our directory here.
>
> **[0:39](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=39)** And by the way, you can get this project from the exercise files.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=42)** It's just a stripped down version of the create react app app without any of the boiler plate code in the app component.
>
> **[0:52](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=52)** So let's create a new file inside our source directory here, which we'll call CounterButton.js.
>
> **[1:00](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=60)** And let's start implementing our component here.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=62)** So the first thing we're going to do is import the useState hook from react.
>
> **[1:08](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=68)** Remember that since this is just a so-called vanilla react state management tool, we don't need to import any other libraries.
>
> **[1:15](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=75)** And then we're going to define our counter button component by saying export const CounterButton.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=85)** And our component's going to be fairly simple.
>
> **[1:27](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=87)** It's just going to contain a paragraph tag that tells us how many times the button has been clicked.
>
> **[1:33](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=93)** So we'll say "You have clicked the button" and we'll insert a value there once we have it.
>
> **[1:40](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=100)** And we'll say "times".
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=104)** And then underneath that, we're going to have the button which will just say "Click".
>
> **[1:49](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=109)** Okay. So let's wrap both these elements in a fragment.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=116)** And let's define our state now. Okay.
>
> **[1:58](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=118)** So again, most of you are probably familiar with what this looks like.
>
> **[2:02](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=122)** We're going to say const and we'll call our state numberOfClicks.
>
> **[2:07](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=127)** And we'll say setNumberOfClicks equals useState and the initial value of this state is going to be 0.
>
> **[2:16](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=136)** So all we have to do now is pass this numberOfClicks state variable.
>
> **[2:21](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=141)** Inside of here, we're going to say number of clicks times and for our button, we'll make it actually increment the number of clicks by saying onClick equals and we'll say setNumberOfClicks to numberOfClicks + 1.
>
> **[2:42](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=162)** And that's pretty much all we need to do.
>
> **[2:43](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=163)** So let's display this counter button in our app component.
>
> **[2:47](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=167)** We're going to just import it up at the top.
>
> **[2:48](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=168)** We'll say import CounterButton from CounterButton and down here, we'll display it underneath our state management example heading.
>
> **[2:59](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=179)** So we'll just say CounterButton like that.
>
> **[3:02](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=182)** And of course we need to wrap both of these in a fragment as well.
>
> **[3:07](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=187)** Okay. So if we take a look at our application, and you're going to need to run that by saying, npm run start if you haven't already, we see that if we click on the button, now it keeps track of how many times we've clicked it.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=202)** Pretty straight forward, right?
>
> **[3:23](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=203)** Let's just add one more feature to our counter button component.
>
> **[3:27](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=207)** We're going to add an input that allows the user to change the number that we increment the count by every time the button is clicked.
>
> **[3:34](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=214)** So that's going to be pretty simple.
>
> **[3:35](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=215)** We just need to add another state variable.
>
> **[3:37](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=217)** And we'll say, const, we'll call this state variable incrementBy, and setIncrementBy.
>
> **[3:46](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=226)** And the default value for that is going to be 1.
>
> **[3:50](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=230)** Okay. And then above our button, we're going to add a label here.
>
> **[3:59](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=239)** Inside there we'll say something like "Increment By", and we'll have an input that keeps track of this incrementBy variable.
>
> **[4:06](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=246)** So this input will have the value equal to our incrementBy state.
>
> **[4:12](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=252)** It'll have an onChange function that basically sets the value of incrementBy to the value in the input.
>
> **[4:19](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=259)** So we'll say set increment by to e.target.value and we're going to need to convert that to a number as well in order for this to work properly.
>
> **[4:30](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=270)** So we'll say Number like that.
>
> **[4:36](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=276)** And last but not least, we just want to set this to a number input.
>
> **[4:41](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=281)** So we'll say type="number".
>
> **[4:45](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=285)** All right. And other than that, we just need to change our button's onClick method to say numberOfClicks + incrementBy.
>
> **[4:55](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=295)** And we should be good to go. So let's give this a try.
>
> **[4:58](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=298)** We're going to say click and we see that it increments it by 1, and if we change this to another number like 5, we'll see that it increments it by 5 instead.
>
> **[5:06](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=306)** So that's how to create a basic counter button component using vanilla react's useState hook.
>
> **[5:12](https://www.linkedin.com/learning/react-software-architecture/small-state-with-the-usestate-hook?u=76281980&t=312)** And again, this isn't the most exciting example, but it's going to give us a great jumping off point for the rest of the technologies we're going to be looking at.

> [!info]- Semantic Content
>
> **Code Identifiers:** usestate (5), incrementby (5), numberofclicks (4), setnumberofclicks (2), onclick (2)
> **Code Keywords:** let (7), const (3), pass (1), function (1), type= (1)
> **CLI Commands:** make (1), npm (1)
> **File Paths:** counterbutton.js (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Small state with context
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=0)** - [Instructor] Okay, so the next state management tool that we're going to take a look at is context.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=5)** Now, before we start looking at how context works, let's take a look at why it exists in the first place.
>
> **[0:11](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=11)** Context exists to solve one of the main problems with the useState hook, and that is, how do we let our components share state, without having to pass the data around as props all the time?
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=23)** So in other words, if we wanted our CounterButton to share state with some other component, let's say that we wanted to have two CounterButton components in our application and have them share their state, what we would have to do is actually lift this state up into the app component, or whatever the parent component of both our CounterButton components were.
>
> **[0:43](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=43)** And then we'd have to pass down the state as well as these set number of clicks functions as props to each of our CounterButton components.
>
> **[0:53](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=53)** Now, if that sounds like a little bit of a hustle, it often is, especially when you have to pass those props through several layers of components.
>
> **[1:01](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=61)** This is something that's become known as props drilling.
>
> **[1:04](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=64)** So basically the point of context and what we're going to take a look at here, is that it allows components to share state without having to basically pass that state as prompts.
>
> **[1:16](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=76)** So let's take a look at what context looks like, but first let's remove these useState hooks from our CounterButton component.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=84)** We're just going to get rid of them.
>
> **[1:26](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=86)** And get rid of this.
>
> **[1:28](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=88)** And there's going to be a few errors for now, but we'll come back and correct those once we implement our context.
>
> **[1:34](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=94)** So the first thing that we need in order to implement our state as context is, a context for the given piece of data that we want to implement.
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=104)** So what we're going to do is create a new file, which we'll call CounterContext.js.
>
> **[1:52](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=112)** And here's what this is going to look like.
>
> **[1:53](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=113)** We're going to say import.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=116)** And we're going to import something called createContext from react.
>
> **[2:02](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=122)** So context is another vanilla react tool.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=126)** And we're just going to say export const CounterContext equals createContext.
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=135)** Alright, so that's all this file has to look like.
>
> **[2:18](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=138)** Basically what our components are going to be able to do later on, is import this context and get its current value.
>
> **[2:25](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=145)** So now that we have the context, the next thing we're going to need is a provider.
>
> **[2:29](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=149)** A provider basically defines a section of the DOM, where the components inside of it, we'll be able to access a given value for the context.
>
> **[2:37](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=157)** So let's create a new file, which we'll call CounterProvider.js.
>
> **[2:45](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=165)** And our provider is going to be its own component.
>
> **[2:48](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=168)** So what we're going to do, is we're going to say import, useState from react, and we're going to say import CounterContext from CounterContext.
>
> **[3:05](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=185)** Now it might seem strange to you that we're importing useState into our CounterProvider, but this is actually necessary most of the time when we're dealing with providers and context, right?
>
> **[3:16](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=196)** Basically we're going to use useState, to keep track of the current value of our account.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=202)** And the provider basically just allows the components inside of it to access that value.
>
> **[3:29](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=209)** So, let's define our component.
>
> **[3:30](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=210)** Now we're going to say export const CounterProvider, and we're going to say children.
>
> **[3:37](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=217)** We're going to get access to the children prop here.
>
> **[3:40](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=220)** And what we're going to do is say const numberOfClicks and setNumberOfClicks equals useState.
>
> **[3:50](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=230)** And the initial value there of course is going to be zero.
>
> **[3:54](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=234)** So let's also define a function for incrementing this numberOfClicks.
>
> **[3:59](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=239)** We'll say const increment equals amount, and inside here, we'll say setNumberOfClicks to numberOfClicks plus one.
>
> **[4:12](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=252)** And then what we're going to do is just say return, and we're going to return the CounterContexts provider.
>
> **[4:21](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=261)** So the context that we created inside of here, automatically has its own provider component that we can access.
>
> **[4:28](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=268)** So here's what that means.
>
> **[4:29](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=269)** We're going to say, CounterContext.Provider, and we pass the value to this provider, which is just going to be our numberOfClicks.
>
> **[4:43](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=283)** Okay?
>
> **[4:44](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=284)** And then we display all of the children inside of it.
>
> **[4:47](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=287)** So what we did inside this CounterProvider, is basically just encapsulated the state of our numberOfClicks.
>
> **[4:55](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=295)** Oh, and one more thing we're going to want to do, is in order to give our components access to this increment function, we have to actually pass that as part of the value as well.
>
> **[5:03](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=303)** So what we're going to do, is actually pass object as the value here, with number of clicks and increment.
>
> **[5:14](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=314)** Okay?
>
> **[5:16](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=316)** And now that we have our CounterProvider defined, we're going to go into our app component and wrap all of our app components that we want to be able to access the value.
>
> **[5:25](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=325)** Generally, that will just be the entire DOM.
>
> **[5:29](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=329)** So instead of having this fragment here, we can just say CounterProvider, and you can see that it automatically imported that for me up at the top here.
>
> **[5:43](https://www.linkedin.com/learning/react-software-architecture/small-state-with-context?u=76281980&t=343)** And we'll close that tag down here and adjust the indentation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (7), const (4), function (2), this. (1)
> **Code Identifiers:** usestate (6), numberofclicks (5), createcontext (2), setnumberofclicks (2)
> **Definitions:** in other words (1), known as (1), is a  (1)
> **File Paths:** countercontext.js (1), counterprovider.js (1)
> **Env Vars:** dom (2)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Accessing context inside components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=0)** - [Instructor] So at this point, we're providing the context to any component inside of this provider that wants it.
>
> **[0:06](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=6)** So what we're going to do is open up our CounterButton component now and allow it to access the value of that context.
>
> **[0:15](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=15)** So here's what that's going to look like.
>
> **[0:16](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=16)** We're going to start off by saying import useContext from react, and we're going to import our CounterContext.
>
> **[0:27](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=27)** We'll say import CounterContext from CounterContext.
>
> **[0:34](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=34)** All right, and now we're going to use this useContext hook in conjunction with our CounterContext to get the current value of this useState hook inside our CounterProvider.
>
> **[0:46](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=46)** So here's what that'll look like.
>
> **[0:47](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=47)** We're going to say const, and we're going to use object destructing here to get both the numberOfClicks and the increment function.
>
> **[0:57](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=57)** And we'll say equals useContext and pass the CounterContext as an argument.
>
> **[1:05](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=65)** Okay, now we'll get to this incrementBy thing in a second.
>
> **[1:09](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=69)** Let's just comment that out for now.
>
> **[1:13](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=73)** And instead of calling setNumberOfClicks in our onClick method here, we're going to say increment.
>
> **[1:21](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=81)** All right, so we're just calling that function that our provider gives us.
>
> **[1:29](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=89)** So that should be all we need to do for now.
>
> **[1:30](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=90)** Let's give this a try.
>
> **[1:31](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=91)** Let's click on the button and we see that just like before, it's keeping track of how many times we've clicked the button.
>
> **[1:38](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=98)** So one last thing that you're probably wondering is how do we implement the incrementBy thing with our context?
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=104)** Well, basically, all we need to do there is go back into our CounterProvider, and add a state variable for it.
>
> **[1:52](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=112)** So we're going to say const incrementBy and setIncrementBy equals useState, and the initial value for this will be one.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=126)** And then we're going to set this, instead of numberOfClicks plus one to numberOfClicks plus incrementBy.
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=135)** And then we're going to pass both the incrementBy value and the setIncrementBy function to this value as part of the object.
>
> **[2:23](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=143)** So we'll say incrementBy and setIncrementBy.
>
> **[2:32](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=152)** And then inside our CounterButton component now, we just have to add incrementBy and setIncrementBy to our object destructing here.
>
> **[2:45](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=165)** And now we can uncomment this part of the DOM.
>
> **[2:51](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=171)** And we should be good to go.
>
> **[2:52](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=172)** Let's give it a test.
>
> **[2:53](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=173)** So if we change this to five and click here, we'll see that it now increments by five.
>
> **[3:00](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=180)** And if we change that to another number, of course, it will do the same thing.
>
> **[3:04](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=184)** So thing that I want to point out about the context here is that you generally want to avoid adding things to it that you don't need.
>
> **[3:12](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=192)** In the case of our CounterButton here, basically the incrementBy really should be something that it handles itself, since that's the value of one of the inputs that it contains.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=202)** In general, we want to make sure that we only put things into the context that need to be shared by multiple components.
>
> **[3:29](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=209)** So what we would probably want to do instead of this is have incrementBy and setIncrementBy use the useState hook, which we can do fairly simply.
>
> **[3:41](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=221)** We'll just say useState.
>
> **[3:44](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=224)** Change this to const incrementBy and setIncrementBy equals useState, default value one.
>
> **[3:57](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=237)** And then we just need to make this increment function take an argument that tells it how much to increment the count.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=243)** So what this is going to look like is we're going to say increment incrementBy, and then inside of our CounterProvider, we're going to remove incrementBy and make that the argument of this function.
>
> **[4:24](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=264)** So we'll say incrementBy, and there we go.
>
> **[4:35](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=275)** So now we just need to remove these other two properties from our value.
>
> **[4:44](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=284)** And we're done, let's give it a test.
>
> **[4:46](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=286)** So we're going to say incrementBy, change that to something like four.
>
> **[4:50](https://www.linkedin.com/learning/react-software-architecture/accessing-context-inside-components?u=76281980&t=290)** And click on this and we see that this works perfectly well.

> [!info]- Semantic Content
>
> **Code Identifiers:** incrementby (14), setincrementby (6), usestate (5), usecontext (3), numberofclicks (3)
> **Code Keywords:** function (5), let (5), const (3), pass (2), try. (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2)
> **Env Vars:** dom (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Medium state with Recoil
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=0)** - [Instructor] Okay, the next state management tool that we're going to take a look at is called Recoil.
>
> **[0:04](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=4)** Now, Recoil is a fairly new player in the state management world.
>
> **[0:08](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=8)** It was created as a way to help us manage the state of larger applications while still making things like code splitting fairly easy to do.
>
> **[0:16](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=16)** Now I'm not going to go into too much depth on things like code splitting, but what we are going to do is use Recoil to reimplement our Counter button example, and this will allow us to see some of its core concepts.
>
> **[0:27](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=27)** So let's head back to our Counter button example.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=32)** And what we're going to do is rewrite our Counter button so that it uses Recoil instead of Context, which is the last one that we looked at.
>
> **[0:40](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=40)** So the first step in integrating Recoil, since Recoil is not included by default with the React library, the first thing we have to do is install it.
>
> **[0:48](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=48)** So we're going to say npm install recoil, in our project.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=54)** And once we've installed it, we're going to go into our app component, and part of the way that Recoil works is very similar to how we worked with Providers earlier.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=62)** Basically, instead of having a Provider for a single state, we wrap our entire application in something called a RecoilRoot.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=71)** So let's start off by importing that up here at the top.
>
> **[1:14](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=74)** We're going to say import RecoilRoot from 'recoil'.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=84)** And then, instead of wrapping our entire application in a CounterProvider, we just have to wrap it in this RecoilRoot component.
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=92)** Okay, so what this RecoilRoot thing will do is it'll keep track of all of the Recoil states in our application, and allow our components inside of the RecoilRoot to access their values.
>
> **[1:43](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=103)** So we can also remove this CounterProvider thing for now.
>
> **[1:51](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=111)** So now that we have the RecoilRoot, the next thing we're going to do is create the states for Recoil.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=116)** Now, Recoil has two main concepts, and those are atoms and selectors.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=123)** Atoms are individual values that we want to store in our Recoil state.
>
> **[2:08](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=128)** So, we're going to create two atoms here.
>
> **[2:11](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=131)** One is going to be the state for the number of clicks.
>
> **[2:14](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=134)** So we'll say counterState here .js.
>
> **[2:20](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=140)** And we're going to create another one too, that will be the incrementByState.
>
> **[2:24](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=144)** So we'll say incrementByState.js.
>
> **[2:29](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=149)** And let's start off with our counterState.
>
> **[2:31](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=151)** What we're going to do is we're going to start off by importing something called { atom } from 'recoil'.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=159)** This atom is a function that we call to create new pieces of the Recoil state to define new values that we want to store there.
>
> **[2:47](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=167)** And then we're simply going to say export const counterState = atom.
>
> **[2:54](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=174)** And we pass a configuration object here that's going to contain the key of the counter state.
>
> **[3:00](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=180)** This is basically the string that Recoil uses to store this state behind the scenes.
>
> **[3:06](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=186)** We usually just call it the same thing as what we defined the constant as up here.
>
> **[3:11](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=191)** And then we're going to say default: 0.
>
> **[3:14](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=194)** And this is the default value for our counterState.
>
> **[3:19](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=199)** And that's what a basic atom looks like.
>
> **[3:21](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=201)** Let's do the same thing for our incrementByState.
>
> **[3:24](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=204)** We're basically just going to copy and paste this into there, and change the name of this to incrementByState.
>
> **[3:32](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=212)** And the key to incrementByState as well.
>
> **[3:37](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=217)** And then we're going to change the default value here to 1.
>
> **[3:40](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=220)** Okay?
>
> **[3:43](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=223)** All right, and now that we have those two states defined, basically what this is going to look like is we're going to open up our CounterButton component.
>
> **[3:54](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=234)** And instead of using the useContext and useState hook, we're going to use a special hook provided by Recoil, which is called useRecoilState, okay?
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=243)** So what this is going to look like, we're going to say import { use RecoilState } from 'recoil'.
>
> **[4:14](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=254)** And then what we're going to do is import those two atoms that we just defined.
>
> **[4:19](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=259)** So down here, we're going to say import { counterState } from './counterState'; and import { incrementByState } from './incrementByState'; Okay?
>
> **[4:37](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=277)** And the next thing we're going to do is rewrite this useContext thing.
>
> **[4:41](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=281)** We're just going to replace it with const [numberOfClicks, setNumbeOfClicks] = useRecoilState, and we're going to pass our counterState to this.
>
> **[4:56](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=296)** And what this will do, is it'll basically create a state that's very similar to our React useState hook, except it can be shared by multiple components without passing the state as props.
>
> **[5:06](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=306)** So in that way, it's very similar to Context.
>
> **[5:11](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=311)** And then we're going to change this setIncrementBy thing to useRecoilState as well.
>
> **[5:17](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=317)** And we're going to change that value to incrementByState.
>
> **[5:25](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=325)** And then we need to go back, and change this incrementBy thing back to say setNumberOfClicks to numberOfClicks + incrementBy.
>
> **[5:39](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=339)** All right? So if we go and check our application now.
>
> **[5:42](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=342)** See if it runs.
>
> **[5:46](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=346)** We should see that if we click the button, it increments it by the correct amount.
>
> **[5:50](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=350)** So Recoil is working behind the scenes now.
>
> **[5:53](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=353)** All right, and let's open up our application.
>
> **[5:55](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=355)** You may need to run it again after installing Recoil.
>
> **[6:00](https://www.linkedin.com/learning/react-software-architecture/medium-state-with-recoil?u=76281980&t=360)** And we should see that this works just like before, except now it's using Recoil behind the scenes.

> [!info]- Semantic Content
>
> **Code Identifiers:** incrementbystate (8), counterstate (7), userecoilstate (3), usecontext (2), usestate (2)
> **Code Keywords:** let (5), import { (3), const (2), pass (2), function (1)
> **Tools:** atom (4)
> **Definitions:** is called (2), is a  (2)
> **Analogies:** similar to (3), just like (1)
> **Prerequisites:** install (2)
> **File Paths:** incrementbystate.js (1)
> **CLI Commands:** npm (1)

#### Sharing Recoil state
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=0)** - [Narrator] Okay, before we move on from recoil, there are a few more things that I want to show you that are important to know before using it.
>
> **[0:07](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=7)** The first thing I want to show you is how recoil allows our components to share state.
>
> **[0:11](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=11)** So before we do that, let's start by deleting some of our unneeded imports here.
>
> **[0:16](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=16)** Just to clean up a little bit.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=18)** First of all, let's imagine that our application has two CounterButtons instead of one.
>
> **[0:24](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=24)** Well, with recoil, these will automatically share their state.
>
> **[0:28](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=28)** So let's take a look at this in our browser, and we can see that if we click on this, it will automatically increment both.
>
> **[0:35](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=35)** And if we change the incrementBy, since that's using recoil as well, that will automatically make the exact same change to both as well.
>
> **[0:43](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=43)** Now this may or may not be what you want, which is why it's important to know that this is a basic feature of recoil.
>
> **[0:49](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=49)** If we were using the useState hook like we saw before, this wouldn't happen.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=54)** Now this can be very useful sometimes, if you want to have different components that share the same state, for example.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=62)** What that might look like, is let's say we had another component called something like, DisplayCount, and all this did was simply display the value of the button count.
>
> **[1:16](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=76)** All right, so this is going to be a very simple component.
>
> **[1:18](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=78)** We're just going to say import, useRecoilState from recoil, and we'll say export const DisplayCount.
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=92)** And then we're going to do the same thing that we did before.
>
> **[1:34](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=94)** We're going to say const, numberOfClicks and setNumberOfClicks, equals useRecoilState.
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=104)** And for that, we need to import the counterStates.
>
> **[1:46](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=106)** So we'll say import counterState from counterState and pass that as an argument to useRecoilState.
>
> **[1:57](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=117)** All right, and then we just have to say, return and we'll return something very simple.
>
> **[2:02](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=122)** We'll just have a h2 heading that displays the number of clicks.
>
> **[2:07](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=127)** We'll say number of cicks, numberOfClicks.
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=135)** And let's actually display this component in our app component.
>
> **[2:18](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=138)** So we're going to import it into here and to say, import, DisplayCount from DisplayCount and display it.
>
> **[2:28](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=148)** We'll just display it somewhere else on our page, right?
>
> **[2:29](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=149)** We'll put it up at the top here maybe.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=155)** And if we go back and take a look now we'll see, that as the number of clicks changes in our CounterButton component, those changes are also mirrored up here at the top in our DisplayCount component.
>
> **[2:49](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=169)** Now, another thing to keep in mind with our DisplayCount component, is that we're not actually using this state to modify the value, right?
>
> **[2:57](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=177)** We're only concerned with knowing what the value of that state is at a given point in time.
>
> **[3:03](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=183)** Now, in cases like this, recoil actually provides us with a different hook called useRecoilValue, that only gives us the value of the state and doesn't allow components using that hook to modify the state.
>
> **[3:18](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=198)** So we're going to change this now to useRecoilValue, and we'll remove this set number of clicks as well as these square brackets.
>
> **[3:31](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=211)** And that will simply give us the value of the recoil state.
>
> **[3:34](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=214)** So let's check this and we see that those two are mirroring each other.
>
> **[3:42](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=222)** So that's the first other thing that I wanted to cover with recoil.
>
> **[3:46](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=226)** The other thing I mentioned earlier that recoil has two main concepts and that those are atoms and selectors.
>
> **[3:52](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=232)** And so far we've only used atoms.
>
> **[3:54](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=234)** So what's selectors do in recoil, is they take the fundamental values that are expressed as atoms, and they transform them in some way or combine them into another value.
>
> **[4:07](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=247)** So in order to demonstrate this, let's say that instead of our counterState simply storing an integer, let's say that stored the timestamps of when each of the clicks in our application occurred.
>
> **[4:19](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=259)** Right, so what that would look like, our default would just be an empty array.
>
> **[4:24](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=264)** And what this array is going to contain, is objects that contain both a timestamp, something like that, and they're also going to contain the amount that the counter was incrementedBy.
>
> **[4:38](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=278)** All right.
>
> **[4:39](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=279)** So they'll just be objects with those two values.
>
> **[4:41](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=281)** Here's what this is going to look like.
>
> **[4:45](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=285)** We're going to go into our CounterButton component, and instead of saying numberOfClicks and setNumberOfClicks, we're going to change the name of this to clickData and setClicksData.
>
> **[5:05](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=305)** And incrementBy and setIncrementBy can stay, just as we want them to.
>
> **[5:10](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=310)** So what we're going to be doing now, is when the user clicks on our button, we're going to call this setClicksData function in order to add a new timestamp to it.
>
> **[5:19](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=319)** So here's what that's going to look like.
>
> **[5:21](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=321)** We're going to say setClicksData, and we're going to use a spread operator here, to get all of the current clicksData and append a new clickData onto the end.
>
> **[5:36](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=336)** So what we're going to do is say, timestamp, and for that we'll just say date.now, and for the amount we're going to pass the incrementBy state.
>
> **[5:50](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=350)** All right?
>
> **[5:55](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=355)** The next question now is how do we actually calculate the number of clicks inside our CounterButton component?
>
> **[6:00](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=360)** Well, one way we can do this, is by simply saying clicksData.length, and let's see if that works now.
>
> **[6:09](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=369)** We're going to refresh this.
>
> **[6:12](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=372)** Oops, it looks like we need to change this DisplayCount component before it'll work.
>
> **[6:16](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=376)** We're going to say, I'm going to change this two clicksData and change this two clicksData.length.
>
> **[6:26](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=386)** The repetitiveness here of having to say clicksData.length, gives you a clue into what selectors actually do.
>
> **[6:32](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=392)** So now if we go back here, we're going to see that it works just like before, except that this length property doesn't actually work.
>
> **[6:41](https://www.linkedin.com/learning/react-software-architecture/sharing-recoil-state?u=76281980&t=401)** Because when we say incrementBy five, all we're doing is just adding one more clickData to our clicks array.

> [!info]- Semantic Content
>
> **Code Identifiers:** clicksdata (5), incrementby (4), userecoilstate (3), numberofclicks (3), counterstate (3)
> **Code Keywords:** let (9), this, (4), import, (2), const (2), pass (2)
> **Analogies:** imagine (1), for example (1), just like (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Using Recoil selectors
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=0)** - [Instructor] So here's what we have to do in order to actually calculate that, right?
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=5)** We could, if we wanted to, actually use reduce in each of these places to get the sum of the amounts in all of the clicks.
>
> **[0:13](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=13)** However, that would mean again, duplicating that data in multiple components.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=18)** So what selectors allow us to do is define that logic in a single spot.
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=23)** So here's what that's going to look like.
>
> **[0:24](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=24)** We're going to create a new file and we'll call this numberOfClicksSelector.js.
>
> **[0:34](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=34)** And then what we're going to do is say import selector from recoil, and create a new selector by saying export const numberOfClicksSelector equals, and we're going to call the selector function, just like we called Atom, and it's going to take a slightly different configuration object than what we saw with Atom.
>
> **[1:01](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=61)** It is going to have a key.
>
> **[1:03](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=63)** All right, so the key will usually just be whatever name we gave to the selector.
>
> **[1:06](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=66)** So we'll just say numberOfClicksSelector, but then we have a function called get.
>
> **[1:14](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=74)** Now what this function allows us to do is actually calculate a value based on existing values in Atoms.
>
> **[1:23](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=83)** So here's what it's going to look like.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=84)** First of all, this takes an object with a get property that we can use to get the values of other Atoms and selectors, and then we're going to have to import the counter state Atom by saying import counterState from counterState.
>
> **[1:41](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=101)** And what we can do now is get the current clicks data from that counter state by saying const clicksData equals get counterState.
>
> **[1:53](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=113)** All right, so that's what we use that get function for.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=116)** Once we have the clicks data now, we just need to sum up the amounts of all of the click objects.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=123)** So what we're going to do is say const totalClicks equals clicksData.reduce.
>
> **[2:12](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=132)** And don't worry too much about the technical details here if you don't work with reduce very often.
>
> **[2:17](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=137)** All we're going to use it for here is just to find the sum of all of the amounts.
>
> **[2:21](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=141)** We're going to say sum and click, and we're going to say return sum plus click.amount.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=155)** And then all we have to do is return this total clicks variable.
>
> **[2:40](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=160)** We're just going to say return totalClicks.
>
> **[2:44](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=164)** And what we can do now is, inside our counter button, instead of using our counter state and saying clicksData.length, we can use that selector we defined.
>
> **[2:52](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=172)** So instead of counter state, we're going to say import numberOfClicksSelector from numberOfClicksSelector, and pass that to useRecoilState.
>
> **[3:04](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=184)** We're going to say numberOfClicksSelector.
>
> **[3:07](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=187)** Okay, and then we need to change the length.
>
> **[3:12](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=192)** And we also have to remove this setClicksData.
>
> **[3:15](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=195)** In fact, what we're going to want to do instead is actually use recoil values, since we normally don't want to actually set the value of a selector.
>
> **[3:25](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=205)** So we're going to say clicksData and we're going to import useRecoilValue.
>
> **[3:33](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=213)** All right, so we'll say useRecoilValue, but then we also do need the use recoil state for our clicks data.
>
> **[3:42](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=222)** So what we're going to do is say const, and we're not actually going to need the value of that.
>
> **[3:47](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=227)** And we'll say setClicksData equals useRecoilState and pass our... Oops, I didn't mean to remove it.
>
> **[3:59](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=239)** Let's just say counterState and pass counter state to our use recoil state.
>
> **[4:15](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=255)** And that should be all we need to do.
>
> **[4:16](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=256)** So let's take a look at our application now and click on it.
>
> **[4:21](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=261)** Ah, and because of how we're calling setClicksData, we actually do need clicksData from up here.
>
> **[4:26](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=266)** And come to think of it, a better name for this one up here would just be numberOfClicks.
>
> **[4:34](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=274)** Okay, which we'll change this one, too, as well.
>
> **[4:37](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=277)** We'll say numberOfClicks times.
>
> **[4:40](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=280)** And before we take a look at it, we need to change our display count as well.
>
> **[4:44](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=284)** In fact, let's just remove it since we don't need it anymore.
>
> **[4:47](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=287)** We're just going to take display count out.
>
> **[4:54](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=294)** And now if we click on our button, we should see that it works like we wanted it to before.
>
> **[5:00](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=300)** So that's how selectors work in recoil.
>
> **[5:01](https://www.linkedin.com/learning/react-software-architecture/using-recoil-selectors?u=76281980&t=301)** And as you can imagine, they can be a very useful tool in making our application state management more robust.

> [!info]- Semantic Content
>
> **Code Identifiers:** numberofclicksselector (6), clicksdata (5), counterstate (4), setclicksdata (3), totalclicks (2)
> **Code Keywords:** const (4), function (4), pass (3), let (3), for. (1)
> **Tools:** atom (3)
> **UI Navigation:** click on (2)
> **Analogies:** just like (1), imagine (1)
> **File Paths:** numberofclicksselector.js (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Big state with Redux
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=0)** - [Presenter] Okay, the next state management tool that we're going to take a look at here is redux, which is probably one of the most popular state management tools, with the obvious exception of useState and context, which are included in the react library.
>
> **[0:13](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=13)** Now, first of all, in order to prevent things from getting too complicated with all the changes we made with recoil, what I've done is, I've reverted the code back to the point that we were at, when we first added the CounterButton with the useState hook.
>
> **[0:26](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=26)** You can find this in the starting state of the exercise files.
>
> **[0:29](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=29)** So, you don't need to worry about, actually doing this by hand.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=32)** So, before we move on, I do want to point out that, what we're going to be covering in this video, is just the very basics of how redux works, and how to implement a CounterButton using redux.
>
> **[0:43](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=43)** So, to begin with, let's install the redux packages, there are two of them, the first one is going to be called redux, and the second one is going to be called react-redux, which contains the react bindings for the redux library.
>
> **[0:56](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=56)** All right, so now that we have that installed, let's just run our applications, so that we can look at it as we make changes.
>
> **[1:03](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=63)** So, redux-state management has several key parts, and we're going to create a new file for each of those different parts.
>
> **[1:12](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=72)** The first part of a redux application are called actions.
>
> **[1:15](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=75)** Now, actions are basically, anything that can happen in our application, when a user clicks on a button, when data finishes loading, when data starts loading, any action that could potentially change the state of our entire application is considered an action.
>
> **[1:29](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=89)** So, we're going to create actions.js here, we'll come back to that in just a minute.
>
> **[1:35](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=95)** The next part of a redux application, is something called reducers.
>
> **[1:40](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=100)** Basically, reducers tell redux, how the state of our application should change whenever a given action occurs.
>
> **[1:47](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=107)** Again, we'll see what that looks like in just a minute.
>
> **[1:50](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=110)** And the other part of a redux application, is something called selectors, which are pretty similar to the selectors that we saw in recoil, they take care of allowing our components to accurately get data out of the state, as well as occasionally doing things like transforming it.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=126)** Okay, so let's go back to our actions.
>
> **[2:08](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=128)** Actions in redux are basically just json objects that contain the type of the action, as well as the payload.
>
> **[2:17](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=137)** So, here's what they'll generally look like.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=139)** Let's create an action for when our counter button is clicked.
>
> **[2:23](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=143)** We're going to say export const counterButtonClicked, and actions, as I said, are json objects with a type property, which is just the name of the action.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=155)** We usually put this in capital snake_case, so we'll say something like COUNTER_BUTTON_CLICKED, and the payload, which contains extra data about the action.
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=166)** So in our case, it might contain an amount of property, that says how much we should actually increment the counter by.
>
> **[2:56](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=176)** So, that's what actions look like.
>
> **[2:58](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=178)** Let's move on to reducers.
>
> **[3:00](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=180)** Reducers, as I said before, tell redux how the state of our application should change when a given action occurs.
>
> **[3:08](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=188)** Now, reducers almost always take the form of functions.
>
> **[3:12](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=192)** So, here's what our reducer is going to look like.
>
> **[3:14](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=194)** We're going to say, export const, and we're going to give our reducer the name, numberOfClicksReducer, and our reducer functions, usually take two arguments.
>
> **[3:28](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=208)** The first argument is the current state, so that would be the current number of clicks in our application.
>
> **[3:33](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=213)** And we're usually going to want to give that a default value in case this is the first time the reducer is called.
>
> **[3:40](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=220)** The second argument is the action that occurred.
>
> **[3:43](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=223)** So, essentially, all of the reducers in our redux application will be called when any action occurs.
>
> **[3:50](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=230)** So, here's how we tell redux how to change the state when a given action occurs.
>
> **[3:56](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=236)** Basically, what we have to do is return the new state that redux will care about.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=243)** So, if we just wanted to say, return state, in here, then that would mean that, no matter what action occurred in our application, the state wouldn't change, since whenever an action occurs, we're just returning that same state over again.
>
> **[4:18](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=258)** What we'll generally do is, we'll want to get the type of the action that just occurred, so we'll say something like const type = action, and then we'll want to use a switch case statement on that type.
>
> **[4:33](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=273)** So, we're going to say switch type, and then we'll have cases based on that type.
>
> **[4:40](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=280)** So, what we're going to want to do is, come up with a list of the different actions that this reducer actually cares about, right?
>
> **[4:47](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=287)** In other words, what actions will actually cause our number of clicks to change.
>
> **[4:52](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=292)** In our case, there's only one action to choose from, and that is in fact, going to change the number of clicks, we're going to add this COUNTER_BUTTON_CLICKED string as a case here.
>
> **[5:05](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=305)** And if that happens, what we're going to do is we're going to say, return state + action.payload.amount, and that will basically add the amount of that action to the state.
>
> **[5:20](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=320)** And of course, we usually need to have a default case here, which we'll simply return the state, since, as I said earlier, every reducer in our application is going to be called whenever any action is triggered.
>
> **[5:33](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=333)** So that's what a reducer looks like, it's pretty simple for now.
>
> **[5:36](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=336)** Obviously, these can get a lot more complex as your applications get more complex.
>
> **[5:42](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=342)** So, let's move on now to our selectors.
>
> **[5:45](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=345)** Selectors, basically, all these do is, they tell our components where in the state to find a given value that they're looking for.
>
> **[5:54](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=354)** So, we're just going to have one selector here now, and that's going to be the numberOfClicksselector, which we'll call, getNumberOfClicks, all right?
>
> **[6:05](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=365)** And what this does is, it takes the entire redux store as an argument, right?
>
> **[6:12](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=372)** So, the entire state of our application as an argument, and again, tells our components where to find that.
>
> **[6:18](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=378)** So, what we're going to do here is say, state.numberOfClicks.
>
> **[6:25](https://www.linkedin.com/learning/react-software-architecture/big-state-with-redux?u=76281980&t=385)** I'll show you how the numberOfClicks gets there in the state in just a second.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (3), case, (2), switch (2), type. (2)
> **Code Identifiers:** usestate (2), numberofclicks (2), counterbuttonclicked (1), snake_case (1), numberofclicksreducer (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** counter_button_clicked (2)
> **Definitions:** is called (1), in other words (1)
> **File Paths:** actions.js (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### Using Redux with components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=0)** - [Instructor] So at this point, we have our actions, we have our reducers and we have our selectors, so the next thing we're going to do is create our redux store.
>
> **[0:08](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=8)** So here's what that's going to look like.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=9)** We're going to create a new file here called store.js.
>
> **[0:15](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=15)** And we're going to import a few things up here at the top.
>
> **[0:17](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=17)** The first thing we're going to do is import something called createStore from redux.
>
> **[0:27](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=27)** And we're also going to import something called combineReducers.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=32)** All right.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=33)** Next up, we're going to import our reducers by saying import all as reducers from our reducers file.
>
> **[0:44](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=44)** So this imports all of the exports from that file as an object.
>
> **[0:48](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=48)** And next up, we're going to create what's called a rootReducer.
>
> **[0:51](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=51)** This is basically where we define how each of our individual reducers fits into the over state of our application.
>
> **[0:59](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=59)** So here's what it's going to good like in our case.
>
> **[1:00](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=60)** We're going to say const rootReducer equals combineReducers.
>
> **[1:09](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=69)** And then we pass an object to this reducer that basically maps the names of our data in the redux store to the reducers that we defined in our reducers file.
>
> **[1:18](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=78)** In fact, just to make this a little more clear, instead of importing all the reducers, let's specifically import our numberOfClicksReducer.
>
> **[1:26](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=86)** Then we're going to pass an object to combineReducers where we'll say numberOfClicks.
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=92)** So that's the key in the state that the value of our numberOfClicks will be stored at.
>
> **[1:37](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=97)** And then we tell redux that we want the numberOfClicksReducer to be the reducer that will manage that part of the state.
>
> **[1:47](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=107)** All right, and now that we have our rootReducer, the only thing we have left to do is say export const store equals createStore and pass our rootReducer to it as an argument.
>
> **[2:02](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=122)** And that's how we create our redux store.
>
> **[2:04](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=124)** So now that we have the store, which is going to contain and manage all of the data for our application, what we're going to do is open up our App file, and add the redux provider to our application.
>
> **[2:17](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=137)** This is very similar to what we did before with both context and recoil.
>
> **[2:22](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=142)** So here's what that's going to look like.
>
> **[2:23](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=143)** We're going to say import Provider from react-redux.
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=153)** And then down here, we're going to wrap basically our entire application, which isn't very big right now granted, in this provider.
>
> **[2:40](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=160)** So our entire application will have access to the redux store's state.
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=166)** And then the only other thing we have to do is import the store that we created in our store file.
>
> **[2:53](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=173)** We're going to say import store from store.
>
> **[2:58](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=178)** And pass that as a prop to this provider.
>
> **[3:01](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=181)** So we'll say store equals store.
>
> **[3:04](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=184)** Okay, and that's all we have to do now.
>
> **[3:06](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=186)** So let's add our CounterButton back to our app component here.
>
> **[3:09](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=189)** We'll say CounterButton.
>
> **[3:12](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=192)** We're going to have to import it up here as well.
>
> **[3:14](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=194)** We'll say import CounterButton from CounterButton.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=202)** So how do we actually access the values now inside our redux store, as well as dispatch actions from our components?
>
> **[3:31](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=211)** Well, we do those using two special hooks provided by redux, and those hooks are called useSelector, and useDispatch.
>
> **[3:44](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=224)** Let me show you how both of these work.
>
> **[3:46](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=226)** We're going to say import from react-redux.
>
> **[3:52](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=232)** And then instead of having this numberOfClicks, use the useState hook.
>
> **[3:57](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=237)** We're going to say const numberOfClicks equals useSelector, and then this useSelector hook expects a selector that is a function that takes the state and maps it to a value as an argument.
>
> **[4:16](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=256)** And as it happens, we created our selector earlier, so we just need to import this getNumberOfClicks selector, and add it to our CounterButton component.
>
> **[4:25](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=265)** So let's import it.
>
> **[4:26](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=266)** We're going to say import getNumberOfClicks from selectors.
>
> **[4:34](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=274)** And pass that as an argument to our useSelector hook.
>
> **[4:39](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=279)** So getNumberOfClicks.
>
> **[4:43](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=283)** So that's how we get the number of clicks from our store.
>
> **[4:47](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=287)** The question now is how do we actually dispatch this action, this counterButtonClicked action that we created in order to increment the state?
>
> **[4:56](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=296)** Well, the way that we do that is by importing that action.
>
> **[5:01](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=301)** We're going to say import counterButtonClicked from actions.
>
> **[5:10](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=310)** And then we need to use this userDispatch hook to basically get access to a function that will allow us to trigger this action in a way that redux will know about it.
>
> **[5:21](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=321)** That might sound a little confusing.
>
> **[5:23](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=323)** So let me just show you what it looks like.
>
> **[5:24](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=324)** We're going to say const dispatch equals useDispatch.
>
> **[5:29](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=329)** And then in order to trigger this counterButtonClicked action, what we have to do is down here in our button, instead of calling setNumberOfClicks, which no longer exists, we simply say dispatch counterButtonClicked.
>
> **[5:48](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=348)** And that will basically trigger that counterButtonClicked action in our application.
>
> **[5:53](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=353)** Redux will pick it up.
>
> **[5:54](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=354)** It will call the corresponding reducers, which will change the state.
>
> **[6:00](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=360)** And that's about it.
>
> **[6:01](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=361)** Let's head over to our application now and see if this works.
>
> **[6:05](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=365)** We're going to click on the click button here.
>
> **[6:07](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=367)** And sure enough, we see that our application is still working, except now it's using redux behind the scenes.
>
> **[6:13](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=373)** So how do we implement this incrementBy thing now?
>
> **[6:16](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=376)** Well, this actually gets a little bit more tricky because our action that we defined has the amount hard coded.
>
> **[6:24](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=384)** As it happens, what we can do with redux actions is we can convert them into functions.
>
> **[6:31](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=391)** We usually call these action creators when they're functions.
>
> **[6:34](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=394)** And basically, we can pass in any payload that we want to be included on the action as an argument.
>
> **[6:45](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=405)** And because of ESX syntax, we have to wrap these in parentheses now.
>
> **[6:50](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=410)** So now what we can do now that this is a function, we can pass in the amount from our CounterButton.
>
> **[6:55](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=415)** So instead of just saying dispatch counterButtonClicked, we say dispatch counterButtonClicked and pass the incrementBy as an argument.
>
> **[7:06](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=426)** All right, so it should work just like we want it to now.
>
> **[7:09](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=429)** Let's refresh our app.
>
> **[7:11](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=431)** Set this to something like, I'll do seven.
>
> **[7:14](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=434)** Click it and see that it increments just as we want it to.
>
> **[7:18](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=438)** Now, obviously, this is just a very brief introduction to what redux is capable of.
>
> **[7:22](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=442)** You could obviously add a lot more actions here and have a lot more reducers that kept track of different parts of the state.
>
> **[7:31](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=451)** One other thing to notice is that in our CounterButton, we're still using the useState hook to keep track of the incrementBy state variable.
>
> **[7:40](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=460)** Now, you could move this into redux but what I've found is that it's generally much better if you only put things in the redux store that you really need in many places in your application at once.
>
> **[7:52](https://www.linkedin.com/learning/react-software-architecture/using-redux-with-components?u=76281980&t=472)** In other words, this incrementBy would really just make things like your reducers, your actions, file and so on more complicated.

> [!info]- Semantic Content
>
> **Code Identifiers:** counterbuttonclicked (7), rootreducer (4), numberofclicks (4), useselector (4), incrementby (4)
> **Code Keywords:** pass (8), let (7), const (4), function (3), case. (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** store.js (1)
> **Env Vars:** esx (1)
> **UI Navigation:** click on (1)

#### Big state with MobX
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=0)** - [Instructor] All right, so let's move on to our final state management tool and that is Mobx.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=5)** So Mobx is another state management tool that I would say is just as good as Redux for managing larger application states.
>
> **[0:12](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=12)** So let's see how it works.
>
> **[0:14](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=14)** Now, as with Redux, we're going to start with our application at the point in time right after we created our CounterButton, just using the useState Hook.
>
> **[0:22](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=22)** So we've got our CounterButton, we've got our App, but there's nothing else to complicate adding Mobx to our application.
>
> **[0:29](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=29)** So let's start off here by installing the Mobx library.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=33)** And to do that, we're going to say npm install Mobx, and hit Enter.
>
> **[0:39](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=39)** And now that we have it installed, let's see how to add it.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=42)** So we're just going to run our application here so that we can see the changes as we make them.
>
> **[0:47](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=47)** Now, one of the things that people like about Mobx over Redux is that it's got far fewer moving parts, so to speak.
>
> **[0:55](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=55)** That is, where Redux has actions, reducers, selectors, et cetera, Mobx is much more straightforward.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=62)** To see what I mean by this, let's create a new file here, and we're going to call that counter.JS.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=71)** Now what this counter thing is going to be is a class that we're going to use to store our state.
>
> **[1:17](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=77)** This is just kind of how Mobx likes to do things.
>
> **[1:20](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=80)** It prefers to use more of an object-oriented approach than a functional approach like we did with Redux.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=85)** So the first thing we're going to do here is import something called make observable, something called observable and something else called action from the Mobx package.
>
> **[1:39](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=99)** You'll see how we use these in just a minute.
>
> **[1:42](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=102)** And the next thing we're going to do is create the counter class that's going to store the state of our counter.
>
> **[1:49](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=109)** So let's say export class counter.
>
> **[1:55](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=115)** And this counter class is going to have a member variable called number of clicks, which we're going to set equal to zero.
>
> **[2:02](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=122)** This is going to store the state of the number of clicks for our counter button.
>
> **[2:07](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=127)** The next thing we're going to do here is define a method and this method we're going to call increment.
>
> **[2:13](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=133)** Maybe you see where this is going.
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=135)** And it'll take an argument called amount.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=139)** And inside that method, we're going to say this.numberofclicks plus equals amount.
>
> **[2:26](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=146)** So this increment method then is what our components are going to be able to use to change the value of our number of clicks state.
>
> **[2:34](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=154)** Alright, and other than that, the only thing we have to do is add a constructor for our counter, which is going to look like this.
>
> **[2:41](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=161)** We're going to say constructor.
>
> **[2:44](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=164)** And inside this constructor, we're going to call this make observable function.
>
> **[2:49](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=169)** We're going to say, make observable.
>
> **[2:53](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=173)** And we're going to say this, and we'll tell it about the number of clicks member variable, which we're going to say is an observable property.
>
> **[3:05](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=185)** And we're going to say increment, which is an action.
>
> **[3:10](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=190)** So what we're doing inside this make observable function here is we're basically telling Mobx that first of all, our number of clicks state should be observable, which means that it will automatically re-render react components.
>
> **[3:24](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=204)** Now, this wouldn't happen if you were to just create a basic class and try and use that as a state.
>
> **[3:28](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=208)** So that's what this make observable thing does.
>
> **[3:32](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=212)** And the other thing is this increment method where we're saying that it's an action, Mobx also defines something called actions like Redux does except actions in the case of Mobx mean that we're actually calling a method of our state.
>
> **[3:49](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=229)** So that's all we have to do to set up our counter state.
>
> **[3:52](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=232)** Let's save this.
>
> **[3:54](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=234)** And the next thing we're going to do is go into our app component.
>
> **[4:00](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=240)** Import this counter that we just defined, we're going to say import counter from counter.
>
> **[4:11](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=251)** And then before we define our app component, we're going to actually create an instance of this counter class.
>
> **[4:17](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=257)** So what we'll say is const counter equals new counter.
>
> **[4:25](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=265)** All right.
>
> **[4:26](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=266)** And then what we're going to do is pass this counter as a prop to our counter button.
>
> **[4:32](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=272)** So what we'll do is say, counter equals counter, and then we're going to go into our counter button class and add that as a prop.
>
> **[4:43](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=283)** We'll say counter and we can delete this number of clicks state, and instead, we're just going to say counter.numberofclicks.
>
> **[4:54](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=294)** And when we set our number of clicks, what we're going to do instead is simply say counter.increment and pass the increment by state as an argument.
>
> **[5:08](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=308)** All right.
>
> **[5:09](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=309)** Okay, and now in order for this to work, we have to import something else called observer.
>
> **[5:15](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=315)** And this observer thing, which we'll see in a second, is actually imported from a package called Mobx react.
>
> **[5:21](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=321)** So just like Redux had both a basic Redux package as well as the react bindings for Redux, Mobx also has a Mobx package and a Mobx package which contains the react bindings.
>
> **[5:34](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=334)** So let's say NPM install.
>
> **[5:36](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=336)** And this package is going to be called Mobx react.
>
> **[5:38](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=338)** There's also one called Mobx react lite, which contains a much more slimmed down version of that package.
>
> **[5:45](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=345)** Why don't we just install that one?
>
> **[5:48](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=348)** Okay, and now that we've installed that, up at the top of our counter button, let's say import, observer from Mobx react light.
>
> **[6:05](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=365)** All right, and then what we have to do is we have to wrap our component in this observer thing when we define it.
>
> **[6:12](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=372)** And what that will do is it'll make sure that our component re renders at the right times when the state of this counter changes.
>
> **[6:19](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=379)** So one thing to keep in mind here is that if you forget either this observer thing on the component or this make observable thing in the constructor of our state, Mobx will look like it's not working and that can be kind of hard to figure out sometimes.
>
> **[6:33](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=393)** So make sure that you use both like that.
>
> **[6:43](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=403)** All right, so now that we've done that, let's start our app back up and check it.
>
> **[6:50](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=410)** All right, so what we're going to see is that if we click on this button now, we'll see that our application works just like it did before, except obviously now it's got Mobx doing the state.
>
> **[7:03](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=423)** One other thing that I want to point out is when we create this new instance of our counter class and pass it to our counter button, that might seem a little strange to you.
>
> **[7:12](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=432)** After all, if this counter state were needed somewhere way down in the component tree, we would basically have props drilling all over again, as one component, passed it to another to another to another.
>
> **[7:23](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=443)** So one thing that you can do with these instances is you can actually use context to make it so that components can access them without having to receive them as props.
>
> **[7:34](https://www.linkedin.com/learning/react-software-architecture/big-state-with-mobx?u=76281980&t=454)** Now, I'm going to leave that up to you as an exercise, but basically you just need to combine what we learned here with what we learned about context earlier and have a context that makes this counter instance available to any component that needs it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (3), pass (3), this, (2), function (2)
> **CLI Commands:** make (10), npm (2)
> **Definitions:** is an  (2), is a  (1), means that (1)
> **Prerequisites:** install (3), set up (1)
> **Analogies:** just like (2)
> **File Paths:** counter.js (1)
> **Code Identifiers:** usestate (1)
> **Env Vars:** npm (1)


### 4. Data Loading and WebSockets

#### When should we load data?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=0)** - [Presenter] Okay, so the next topic we're going to take a look at, is the topic of data loading.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=5)** And to make things interesting, we're going to look at how data loading works with regards to server-side rendered applications.
>
> **[0:14](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=14)** So, first of all, we're going to want to open up the code at the point that it was at, at the end of the chapter about server-side rendering, right?
>
> **[0:21](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=21)** After we added styled components and all that.
>
> **[0:24](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=24)** If you don't have this, feel free to open up the starting state of the exercise files, and make sure you run npm install to install the dependencies.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=32)** So, with server-side rendering when we talk about data loading, things can get pretty interesting, and to show you what I mean, let's add some articles to our server that our articles page here can load.
>
> **[0:44](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=44)** So, here's what we're going to do.
>
> **[0:45](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=45)** We're going to open up our server.js file, and we're going to add a special API route that our front-end will be able to use to load the articles data.
>
> **[0:57](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=57)** So, what we're going to do is say, app.get, we're going to have the route here be, /api/articles, (computer keyboard clicking) And basically, what we're going to do, is just send back some fake articles that will define here in an array.
>
> **[1:16](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=76)** Normally, you'd want to read these from a database, but just for simplicity sake, we'll define them right in our source code.
>
> **[1:23](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=83)** So we're going to say, const articles, and our articles are going to be an array of objects with a title property, for which we'll just put Article 1, Article 2, Article 3, et cetera, and they'll have an author property, which we'll just put some random names here for.
>
> **[1:42](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=102)** All right, so we'll define a few of these, we'll say Article 2, author, Betty, and we'll have Article 3 here, and the author for that will be Frank.
>
> **[2:00](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=120)** Feel free to pick whatever names and titles you want.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=123)** So, now that we have our articles, what we're going to do in our articles route here, is simply send that back to the client.
>
> **[2:10](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=130)** Now, normally, this would be where you'd read from the database.
>
> **[2:13](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=133)** So just to make this a little more realistic, I'm going to say const loadedArticles = articles, this would normally again be a database call.
>
> **[2:23](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=143)** And then we're going to send those loadedArticles back to the client.
>
> **[2:27](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=147)** We're going to say, res.json loadedArticles, okay?
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=153)** So our front-end now will be able to load the articles from this api route.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=159)** So let's open up our articles page, and here's what that's going to look like.
>
> **[2:44](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=164)** We're going to import the use effect and use state hooks, so we'll say, useState, useEffect, and we're going to say const articles, setArticles = useState, and the initial state for our articles, we'll just make that undefined.
>
> **[3:04](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=184)** And then what we're going to do is, we're going to load our data inside a useEffect hook, chances are, you've done this before in react, so I'm not going to explain it too much.
>
> **[3:13](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=193)** We're just going to say, fetch/api/articles, and since this is a promise, we can say .then, if you want to use a sync away instead, and you know how to convert that, go ahead and do it.
>
> **[3:28](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=208)** We have a response here now, we're going to return that and convert it to a json.
>
> **[3:32](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=212)** So we'll say, response.json, which itself is a promise.
>
> **[3:36](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=216)** And then we're going to say .then, and we'll set the articles to the data that we got back from the server.
>
> **[3:46](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=226)** SetArticles data.
>
> **[3:49](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=229)** And we only want this useEffect hook to be called, when our articles is first mounted, so, we'll just pass an empty array as the dependencies for this useEffect hook, okay?
>
> **[4:01](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=241)** And then to display our articles, we're just going to say, articles, and to make sure they exist before we display them, we're going to say, articles $ articles.map.
>
> **[4:13](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=253)** And for each article, we're going to display it like this.
>
> **[4:17](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=257)** We'll have a div with a key, which will be equal to the articles title.
>
> **[4:23](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=263)** Inside that, we're going to display the articles title in an h3 heading.
>
> **[4:27](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=267)** So we'll say, article.title, and underneath that we'll display the author of the article by saying paragraph by, and then we'll insert the articles author by saying, article.author.
>
> **[4:44](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=284)** And then we just need to wrap these in a react fragment.
>
> **[4:50](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=290)** So, let's build our front-end by saying npm run build, and then we're going to run our server with the same command that we've used before.
>
> **[5:01](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=301)** All right, so let's load our app again.
>
> **[5:06](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=306)** And what we're going to see is that, if we go to the articles page, our articles are all there.
>
> **[5:10](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=310)** However, if we inspect the HTML that we got back from the server, what we're going to see is that, it does not actually include the articles, okay?
>
> **[5:23](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=323)** So, if we search for the title of one of our articles, for example, such as Article 1, in here, we're going to see that that doesn't exist.
>
> **[5:34](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=334)** So, basically, what's happening is, the server is server-side rendering the front-end, except, for the parts where we need to load data.
>
> **[5:43](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=343)** Now, as I mentioned, when we first talked about server-side rendering, one of the main benefits of server-side rendering is that it shortens the number of round trips from the front-end to the back-end.
>
> **[5:53](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=353)** So, we're going to want to alter this in a way such that when our server renders our app, the server is the one that loads that data as well.
>
> **[6:03](https://www.linkedin.com/learning/react-software-architecture/when-should-we-load-data?u=76281980&t=363)** In other words, our front-end doesn't need to make those server requests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), const (3), this, (1), for. (1), pass (1)
> **Code Identifiers:** useeffect (4), loadedarticles (3), usestate (2), setarticles (1)
> **CLI Commands:** make (6), npm (2)
> **File Paths:** server.js (1), res.json (1), response.json (1)
> **Definitions:** is a  (2), in other words (1)
> **API Endpoints:** /api/articles (2)
> **Env Vars:** api (1), html (1)
> **Exercise Files:** exercise files (1), source code (1)

#### Data loading with SSR
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=0)** - [Instructor] So in order to have our server be the one that loads the data for our application, instead of our front end, there's a few changes we're going to need to make.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=9)** The first thing we're going to need to do, is go down to where we actually render our app and we're going to need to load the data here.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=18)** Now, loading the data in our case is going to be fairly simple.
>
> **[0:20](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=20)** Since we're on the server, we have access to the data that the server contains, right?
>
> **[0:25](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=25)** And if this were in a database, our server would be able to communicate directly with the database instead of having to make its own API request.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=33)** So here's what this is going to look like, inside where we say fs.read file, and insert the rendered app into the HTML, what we're going to do is load the data for the articles.
>
> **[0:45](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=45)** Again, just to make this a little more realistic, I'm going to say const loaded articles equals articles.
>
> **[0:51](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=51)** This would normally be where we'd connect to the database.
>
> **[0:56](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=56)** And the next thing we need is some way to pass these loaded articles to our rendered application.
>
> **[1:05](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=65)** Now, there are multiple ways to do this, but the way that I'm going to show you here, just kind of a very basic way, is by adding the loaded articles themselves as data to the HTML document, so that when it gets to the front end, our React app can actually take those directly from the HTML instead of having to make its own request.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=85)** So here's what that would look like, inside our data.replace here, right before we have our app, we're going to want to insert a script tag.
>
> **[1:36](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=96)** And inside that script tag, we're going to say window.preloaded articles equals, and then we're going to stringify our loaded articles as a JSON object, we're going to say JSON.stringify, loaded articles.
>
> **[2:00](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=120)** We don't need those, there we go.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=123)** It should just say dollar sign, curly braces, JSON.stringify loaded articles.
>
> **[2:09](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=129)** Okay, so what this is going to do, is once our HTML gets to the client, it's going to set the loaded articles on the window object under a property called preloaded articles and our React components are going to be able to access it through that window object.
>
> **[2:25](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=145)** Now, you might be wondering how this fits in with what I said earlier, about not using the window object when we're doing server-side rendering.
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=153)** Well, in fact, you can use the window object, but you just have to make sure that it's not going to be executing on the server side.
>
> **[2:41](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=161)** And in our case, since we're putting that inside a script tag here, that won't be a problem.
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=166)** It's not going to execute till it gets to the client.
>
> **[2:51](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=171)** So that should be all we need to do on the server side for now.
>
> **[2:55](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=175)** What we have to do now is go to our articles component and make it so that our articles component can load the data from the HTML document, instead of from the server, provided of course, that it is actually on the HTML document.
>
> **[3:13](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=193)** So here's what this is going to look like, first of all, with our use state hook here, we're going to set the initial state to window, and we're going to check, of course, if the window exists and if it does, we're going to check also if the preloaded articles exists on the window, all right?
>
> **[3:34](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=214)** So basically what this will do, is if there's preloaded articles, it will set that as the initial value for the state and we won't have to do anything.
>
> **[3:42](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=222)** So now in the use effect hook, what we're going to do, is we're going to say if window an not window.preloadedarticles, right?
>
> **[3:55](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=235)** In other words, if the window exists and there are no preloaded articles, then in that case, we want to load the articles from the server.
>
> **[4:06](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=246)** And just to make this a little more visible, let's add a console.log statement here, which will say something like no preloaded articles found, loading from server.
>
> **[4:17](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=257)** This will allow us to see where on our server or on our front end, our articles component is actually loading the data.
>
> **[4:27](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=267)** And that should we all we need to do on our front end.
>
> **[4:29](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=269)** One last thing that we need to change is that right now, even trying to see if this window thing exists, will throw an error on the backend.
>
> **[4:37](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=277)** So what we need to do here, is go into our server and add a fake window global to it.
>
> **[4:43](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=283)** We're going to say global.window.
>
> **[4:48](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=288)** And we're going to set that equal to just an empty object, that will stop us from getting the window does not exist error, all right?
>
> **[4:56](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=296)** And that should be about all we need to do.
>
> **[4:58](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=298)** So let's again, build our front end.
>
> **[5:04](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=304)** We're going to say npm run build, and you could create an automated script for this that would automatically watch and rebuild your app for you if you wanted.
>
> **[5:13](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=313)** But we're just going to keep building it manually for now.
>
> **[5:16](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=316)** And then we're going to run our server with the no demon command.
>
> **[5:21](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=321)** And let's now check our service side rendering example.
>
> **[5:28](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=328)** So what we're going to see if we refresh our page, is that the articles don't even flash and that's because our articles page, isn't actually loading them.
>
> **[5:37](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=337)** If we take a look inside our HTML that we got back and let's do a search for preloaded articles, we're going to see that our server added this as a script, before it rendered our React app.
>
> **[5:52](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=352)** So what our articles page is able to do, is just reach into this preloaded articles property on the window and get those articles instead of having to load them from the server.
>
> **[6:02](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=362)** So this cuts down drastically on having to actually load data from the server.
>
> **[6:08](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=368)** One thing to notice, however, is that the server is still not actually rendering our articles page with these articles info, right?
>
> **[6:18](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=378)** It's not until our app actually gets to the user's browser, that these things are re-rendered by the front end, React, when it calls react Dom to hydrate.
>
> **[6:27](https://www.linkedin.com/learning/react-software-architecture/data-loading-with-ssr?u=76281980&t=387)** In order to do that, we're going to have to make our code a little more complicated.

> [!info]- Semantic Content
>
> **Env Vars:** html (7), json (3), api (1)
> **Code Keywords:** let (4), case, (2), const (1), pass (1), this, (1)
> **CLI Commands:** make (8), npm (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Rendering server-side API data
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=0)** - [Narrator] So let's take a look at how to have our server actually take care of rendering the data that we've loaded here instead of just placing it in the HTML and having our react app render it after it gets to the client.
>
> **[0:15](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=15)** The solution that we're going to be using here involves using context, which we learned about previously.
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=23)** Essentially, what we're going to do is use context in order to communicate between our front end and our back end while on the server side.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=33)** Before we move on, though, I think I should probably point out that the reason we have to do this in the first place is that the use effect hook inside our components will not be called when our components are being rendered on the server side.
>
> **[0:46](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=46)** That's just how it works.
>
> **[0:47](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=47)** So basically we need to figure out a different way for our components to get their data when they're being rendered on the server, and as I mentioned, we're going to be using context for that.
>
> **[0:57](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=57)** So the first thing we're going to do here is create a new context, and that context is going to be called initial data context.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=71)** Okay.
>
> **[1:12](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=72)** And inside here, we're going to define our context by saying import, react from react, and then we'll say export const initial data context equals react.createContext, and we'll pass an empty object as the default value for that.
>
> **[1:37](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=97)** Okay, so that's our initial data context.
>
> **[1:40](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=100)** The next thing we're going to do is actually import and use this initial data context on our server.
>
> **[1:51](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=111)** So, let's open up our server.JS file and up at the top here, we're going to import initial data context from initial data context.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=126)** And then what we're going to do is we're going to provide this context to our application as it's rendering, all right?
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=135)** So what this is going to look like is around our static router we're going to say InitialDataContext.provider, and we'll put our app that we're rendering inside of there.
>
> **[2:29](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=149)** Now, in order for our server and our front end that we're rendering to communicate through this provider, what we're going to do is create an object here.
>
> **[2:38](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=158)** We're going to say const, we'll call it contextObj and we're going to give it a few properties.
>
> **[2:45](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=165)** You'll see what these actually do when we use them.
>
> **[2:49](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=169)** So, the first property is going to be isServerSide and we're going to set that to true here.
>
> **[2:56](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=176)** We're going to create another property that's _requests, which is going to be an empty array, and we're going to have another property that's _data, that's going to be an empty object.
>
> **[3:08](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=188)** So, here's our strategy here and it might sound a little strange at first, but it will work.
>
> **[3:13](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=193)** What we're going to do is render our app on the server side, twice.
>
> **[3:18](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=198)** The first time we render it, we're basically going to be finding out what components need to load their data on the server side.
>
> **[3:26](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=206)** And then what we're going to do is load that data on our server and pass that data back to our components through the context provider here.
>
> **[3:36](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=216)** That might sound really confusing, so just sit back and watch what it looks like.
>
> **[3:41](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=221)** What we're going to do first is, for our provider here, we're going to say value equals context object.
>
> **[3:48](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=228)** And as you'll see, we're going to create a custom hook that our components will use to actually add their data loading needs to this context object, more specifically to this requests property here.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=243)** Now we'll get to that in a second, but first, after we've rendered our app the first time, we're going to have all of the data loading needs inside this requests property and all of those data loading needs are going to be expressed as functions.
>
> **[4:16](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=256)** Again, that might sound confusing but you'll see what that looks like when we get there.
>
> **[4:21](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=261)** So what we're going to do is say await and we're going to say promise.all, this will execute all of the data needs functions, and we'll say ContextObject.requests.
>
> **[4:37](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=277)** And because we're using await here, we're going to have to go up here and add async to our callback, and under that what we're going to do is say contextObject.isServerSide, and set that to false.
>
> **[4:50](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=290)** So as you can imagine, our front end is going to use this is server side property to tell whether it's being rendered on the server or not.
>
> **[4:57](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=297)** Our components are going to use that to determine whether or not they should actually make a request to the server or whether they should look in the window object for that preloaded data, okay?
>
> **[5:09](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=309)** And the last thing we're going to do is delete the requests property.
>
> **[5:12](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=312)** This just gets rid of extra data.
>
> **[5:14](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=314)** We're going to say delete context object._requests, because we're going to be sending this context object to the client side in a similar way that we sent the preloaded articles.
>
> **[5:29](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=329)** Before we do that, though, we're going to have to render our app a second time.
>
> **[5:33](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=333)** And in fact, when we render it the first time, we don't need to do anything with that HTML.
>
> **[5:38](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=338)** We're just getting the styles and the data loading needs with our style sheet here and our context object, respectively.
>
> **[5:46](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=346)** So, let's render it again.
>
> **[5:48](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=348)** And to do that, we can actually just copy and paste this and say, const react app equals render to string.
>
> **[5:59](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=359)** We don't need to collect the styles again so we can remove that, and everything else is going to be the same there, we're still passing the context object to our provider.
>
> **[6:12](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=372)** And the next thing we have to do is instead of setting this preloaded articles thing on here, which we don't need anymore, we're going to say window.preloadeddata equals JSON.stringify and we're going to send that context object along with it instead.
>
> **[6:34](https://www.linkedin.com/learning/react-software-architecture/rendering-server-side-api-data?u=76281980&t=394)** We're going to say context object inside JSON.stringify.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), const (3), pass (2), await (2), delete (2)
> **Code Identifiers:** isserverside (2), createcontext (1), contextobj (1), contextobject (1)
> **Env Vars:** html (2), json (2)
> **File Paths:** server.js (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### Enhancing SSR with context
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=0)** - [Instructor] All right, the next thing that we're going to do now that we've got our context stuff set up on the server side is create a custom React hook for basically dealing with getting this data out of the context.
>
> **[0:13](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=13)** This will simplify things for our components since our components will no longer have to care whether they're on the server or on the client side.
>
> **[0:21](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=21)** You'll see what I mean in just a minute.
>
> **[0:23](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=23)** So first, let's create new file.
>
> **[0:25](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=25)** We'll call this file useDataSSR.js.
>
> **[0:30](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=30)** And here's what it's going to look like.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=33)** We're going to start off by importing the useState hook from react.
>
> **[0:40](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=40)** And under that we're going to import our InitialDataContext from InitialDataContext.
>
> **[0:51](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=51)** And then we're going to say export const useDataSSR equals, and this custom hook is going to take two arguments.
>
> **[1:01](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=61)** The first is going to be an argument called resourceName.
>
> **[1:04](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=64)** And the second one is going to be an argument called loadFunc.
>
> **[1:10](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=70)** Okay.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=71)** So the next thing we're going to do is get the current value of our InitialDataContext by saying const context equals useContext InitialDataContext.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=84)** And after that, we're going to create a new state variable for the data that the context contains by saying const data, and setData equals useState context._data resourceName.
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=104)** So what we're doing here is that context object that we defined inside our server route here with this _data property, basically what's going to happen is when our components load data, whether they're on the server side or on the client side, they're going to add the results of loading that data to this _data property.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=126)** And after that, they'll be able to access it by using this useDataSSR hook.
>
> **[2:13](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=133)** So the next thing we're going to do is we're going to have our hook check if this code is being executed on the server side or not.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=139)** Remember, that we determine that by using this _isServerSide property on our context.
>
> **[2:27](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=147)** Now, if we are on the server side, what we want to do is add our load function.
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=153)** This load function is basically going to contain logic for loading our data using fetch.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=159)** We're going to basically push this onto the requests array that we defined inside our context.
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=166)** Don't worry if you're a little confused here.
>
> **[2:47](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=167)** You might just have to walk through the code after we've written it to get a better idea of how it all fits together.
>
> **[2:53](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=173)** So inside this if statement, we're going to say context._requests.push, and then inside this push, we're going to push our load function onto the requests array, and we'll also say .then, and this is where we'll set the result of our data on the context's _data property.
>
> **[3:18](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=198)** We're going to say result context._data resourceName equals result.
>
> **[3:30](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=210)** So we're setting the result of loading our data on that context._data property under the name of our resource.
>
> **[3:38](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=218)** So our resource is going to be something like articles or people or it's just a string representing the resource's name.
>
> **[3:47](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=227)** Okay, the next thing that we're going to do is if we're not on the server side, then we're going to want to check if the data exists.
>
> **[3:55](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=235)** In other words, if we already have the data set in the context on the client side, we don't need to load it.
>
> **[4:01](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=241)** But if it isn't there, then we want our custom hook to actually load it.
>
> **[4:04](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=244)** So we'll say else if data doesn't exist, then we want to load our data and say .then result, and we'll say setData result.
>
> **[4:18](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=258)** And context._data resourceName equals result.
>
> **[4:28](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=268)** Okay, so we're just loading the data on our front end if that data hasn't already been loaded for us by the server side.
>
> **[4:35](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=275)** And finally, we're going to simply return that data so that our component can access it.
>
> **[4:40](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=280)** So here's what it's going to look like using this custom hook inside our Articles component.
>
> **[4:46](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=286)** We're going to basically delete all of this stuff here, except for where we say fetch.
>
> **[4:52](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=292)** And we're going to import that useDataSSR hook that we just created from useDataSSR.
>
> **[5:03](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=303)** And then we're going to say const articles equals useDataSSR.
>
> **[5:10](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=310)** We're going to pass for the resourceName a string that says articles.
>
> **[5:14](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=314)** And then for the load function, our load function is just going to contain this basic console.log and fetch.
>
> **[5:24](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=324)** And we can also delete this thing at the end since we're just going to get the articles straight from this useDataSSR hook.
>
> **[5:32](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=332)** We don't need to set them on a state variable or anything.
>
> **[5:37](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=337)** And we can remove these extra imports here.
>
> **[5:41](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=341)** Now, in order for this to work, we are almost there.
>
> **[5:44](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=344)** The last thing we need to do is make it so that this fetch thing will work when it's called on the server.
>
> **[5:52](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=352)** So basically on the server, our server code is going to be calling fetch, and obviously, fetch is something that only exists by default in the browser.
>
> **[6:02](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=362)** So in order to get around this little detail, we're going to install a package called isomorphic-fetch.
>
> **[6:08](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=368)** Basically, this is just an implementation of fetch on the backend.
>
> **[6:12](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=372)** So we're going to say npm install isomorphic, may sure you spell that right, isomorphic-fetch.
>
> **[6:22](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=382)** And then we can use that on our server side by simply importing it up at the top.
>
> **[6:27](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=387)** We're going to say import isomorphic-fetch.
>
> **[6:33](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=393)** And that will basically make it so that we can call fetch directly from the server side code.
>
> **[6:39](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=399)** Oh, and there are one or two more things that we need to do here in order for this to work I'm remembering.
>
> **[6:44](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=404)** First of all, what we need to do is go into our articles, and the way that the isomorphic-fetch package works is we have to actually specify the entire URL when we say fetch.
>
> **[6:57](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=417)** So we're going to have to specify the URL of the server by saying [http://localhost:8080/api/articles](http://localhost:8080/api/articles).
>
> **[7:05](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=425)** And we're also going to have to return this promise so that our server will know when everything is finished.
>
> **[7:14](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=434)** And the other thing we have to do is go into our index.js file and add the context provider there as well.
>
> **[7:23](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=443)** So what we're going to do is up at the top here, we're going to import our InitialDataContext from InitialDataContext.
>
> **[7:35](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=455)** We're going to put the provider inside here, so InitialDataContext.Provider.
>
> **[7:41](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=461)** The value here we'll get to in just a minute but let's wrap our BrowserRouter and App first.
>
> **[7:49](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=469)** Okay, so about this value here, basically what we're going to do is get the value from the window and set it on the context.
>
> **[8:00](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=480)** So we're going to say window and window.preloadedData.
>
> **[8:07](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=487)** Or if that doesn't exist, we're going to have the value of our context here just be an object with _data equal to an empty object.
>
> **[8:15](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=495)** Okay?
>
> **[8:16](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=496)** So just kind of a fake version of the normal thing that we're expecting to get from the server.
>
> **[8:22](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=502)** And that should be all we really need to do.
>
> **[8:23](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=503)** So let's try running our application now, and first, we're going to build our front end but running npm run build.
>
> **[8:32](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=512)** And then we'll run our server with the command from before.
>
> **[8:37](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=517)** And let's go check our app.
>
> **[8:39](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=519)** We're going to refresh it, and we'll see that everything is there.
>
> **[8:43](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=523)** All of our articles are there.
>
> **[8:45](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=525)** We can navigate around.
>
> **[8:47](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=527)** And if we inspect the HTML that we're actually getting from the server now, if we take a look at our network tab and refresh it so that we see our initial page load here, and take a look at Articles, we're going to see, if we search for Article 1 that yes, we have it as part of the JSON stringify portion when we set it on window.preloadedData but we also have it displayed in the DOM, which means that the first HTML that our browser's going to see contains these items.
>
> **[9:17](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=557)** So that's good for SEO and again, it's also much better for user experience.
>
> **[9:23](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=563)** Now again, the code that we wrote here was fairly complicated, so please feel free to look through it once or twice, trace it through with your finger.
>
> **[9:31](https://www.linkedin.com/learning/react-software-architecture/enhancing-ssr-with-context?u=76281980&t=571)** Whatever you have to do to understand how it works because it's very important to understand how the front end and backend are communicating with each other through context, and also how our custom hook that we created here allows our components not to care whether they're being executed or rendered on the front end or back end.

> [!info]- Semantic Content
>
> **Code Identifiers:** usedatassr (7), resourcename (5), usestate (2), setdata (2), preloadeddata (2)
> **Code Keywords:** function (5), let (4), const (4), delete (2), finally, (1)
> **Env Vars:** url (2), html (2), json (1), dom (1), seo (1)
> **CLI Commands:** make (2), npm (2)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** usedatassr.js (1), index.js (1)
> **Definitions:** in other words (1), means that (1)
> **URLs:** [http://localhost:8080/api/articles](http://localhost:8080/api/articles) (1)


### 5. Code Splitting

#### Code splitting basics
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=0)** - [Instructor] Okay, so the next topic that we're going to move on to here is code splitting.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=5)** Now, code splitting is another extremely important part of React applications when you want to maximize performance.
>
> **[0:11](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=11)** Essentially what code splitting means is that instead of delivering all of our React code to the client at once, we deliver it in pieces as needed.
>
> **[0:21](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=21)** What I mean by that is let's say again that we run an app that has let's say three pages.
>
> **[0:27](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=27)** A Home page, an About page and an Articles page.
>
> **[0:30](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=30)** When the client side actually receives and runs that code, that code contains the About and Articles page as well.
>
> **[0:37](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=37)** So essentially what we have is just a lot of this code sitting idle that's just taking up bandwidth when the user actually loads our site.
>
> **[0:45](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=45)** So code splitting again is a technique that we can use to relieve this problem a bit.
>
> **[0:50](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=50)** And I'm going to show you how it works.
>
> **[0:52](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=52)** So first of all, we're going to sort of rewind the application that we've been working with to back at the point that we were in one of the earlier chapters where we just have an About page, an Articles page and a Home page.
>
> **[1:04](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=64)** And those pages are just displayed on different routes via our app component.
>
> **[1:10](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=70)** You can find the starter code in the start folder of the exercise files.
>
> **[1:17](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=77)** Okay, so to get started, let's imagine that on our About page, we have three components.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=85)** We're going to create those components here inside our pages, and we'll just call them One.js, Two.js and we create one called Three.js.
>
> **[1:39](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=99)** Now, these aren't overly exciting names but the point here is that we're going to display these components on our About page, and use code splitting to make it so that these components won't actually be loaded until the user visits the About page.
>
> **[1:53](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=113)** So let's very quickly just define these components.
>
> **[1:56](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=116)** These components are simple enough where we can really just copy and paste code from one of our very simple pages and rename it.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=123)** So we'll make this One.
>
> **[2:07](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=127)** We'll change this to an h2 tag just so we can tell the difference here.
>
> **[2:13](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=133)** Then we're going to copy that.
>
> **[2:14](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=134)** Put it inside Two.
>
> **[2:17](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=137)** We'll change this to Two, and Two.
>
> **[2:23](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=143)** And for Three, we'll do the same thing.
>
> **[2:25](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=145)** We're just going to paste it and change this to Three.
>
> **[2:30](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=150)** And Three.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=155)** All right.
>
> **[2:36](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=156)** So now that we have these components, let's display them in the About page.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=159)** We're going to import them by saying import One from One.
>
> **[2:48](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=168)** Import Two from Two.
>
> **[2:51](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=171)** And import Three from Three.
>
> **[2:57](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=177)** And then we're going to display them inside our component here.
>
> **[2:59](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=179)** So we'll say One.
>
> **[3:03](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=183)** Two.
>
> **[3:04](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=184)** And Three.
>
> **[3:07](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=187)** And of course, we're going to have to surround these with a React fragment like that.
>
> **[3:12](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=192)** Okay, so if we run our application now and take a look at this, we can see that when we go to the About page, first of all, let's open up our Inspector window and go to the Network Tab just to see if anything new is happening.
>
> **[3:30](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=210)** So first of all, we see that our main JavaScript bundles, all the code for our React application is loaded at the very beginning and then when we go to the About page, even though we're displaying new components that we didn't need on the Home page, we see that there's no additional activity down here in the Network tab.
>
> **[3:51](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=231)** So let's change our About page around to use code splitting.
>
> **[3:55](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=235)** What we're going to do here is instead of importing these up at the top, we're going to use a combination of two functions.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=243)** One is a function that we're going to import from React here.
>
> **[4:07](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=247)** And that function is called lazy.
>
> **[4:11](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=251)** And the other is a function that we can simply use inside our JavaScript files called import.
>
> **[4:17](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=257)** So basically what we're going to do again is instead of importing these like this, we're going to comment them out, and say const One equals, and then we're going to call this lazy function and pass it a callback function that will say import, and then the path to the component that we want to import.
>
> **[4:39](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=279)** Now, one thing to note here is that unfortunately, this syntax only works with default exports.
>
> **[4:45](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=285)** So in other words, while we've said export const One, we've exported our component as a named export, we actually have to say export default One.
>
> **[4:55](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=295)** And you can leave the named export if you want, but the point here is that we just have to have this as the default export in order for the code splitting to work.
>
> **[5:04](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=304)** So here we're going to say export default Two.
>
> **[5:08](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=308)** And export default Three.
>
> **[5:14](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=314)** Okay, so let's save these files now, and we should be able to use this now.
>
> **[5:18](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=318)** So let's do the same thing now for Two and Three.
>
> **[5:21](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=321)** We're going to say const Two equals lazy.
>
> **[5:24](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=324)** Import ./Two.
>
> **[5:29](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=329)** And Three, we're going to say lazy.
>
> **[5:34](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=334)** Import ./Three.
>
> **[5:38](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=338)** And one more thing to note now that we're doing a little bit of code splitting with our application is that when we have components that are code split, like One, Two, and Three here, we have to wrap those components in something called a suspense inside our JSX.
>
> **[5:55](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=355)** So here's what this is going to look like.
>
> **[5:57](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=357)** We're going to say lazy and Suspense, and we're going to wrap the part of our application that contains these components.
>
> **[6:06](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=366)** So we're going to say Suspense, Suspense and put our One, Two and Three components inside of there.
>
> **[6:14](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=374)** So what happens is this Suspense thing will actually display a separate DOM element while these three components are loading.
>
> **[6:23](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=383)** Basically what's going to happen is when the user goes to the About page now, then our application is going to load the code for these three components, but it won't be able to display them until then, so we'll have to display a loading message before that.
>
> **[6:36](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=396)** So for Suspense, we can say fallback equals, and then we'll just have a message here that says Loading Components in a paragraph tag.
>
> **[6:48](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=408)** And again, this will display while our component code is loading.
>
> **[6:52](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=412)** So let's go back to our application.
>
> **[6:54](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=414)** And let's go to the Home page.
>
> **[6:57](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=417)** And open up our Inspector window with the Network tab.
>
> **[7:00](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=420)** And we're going to want to refresh this so that we can see exactly what's going on.
>
> **[7:05](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=425)** So we see that have some bundles being loaded.
>
> **[7:08](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=428)** Now, because we're on the Home page and because we're using code splitting, these bundles now won't actually include the code for our One, Two and Three components.
>
> **[7:18](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=438)** To show you this, let's clear our Network tab by clicking this clear button up here.
>
> **[7:26](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=446)** And then let's go to the About page.
>
> **[7:29](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=449)** What we're going to see is that our browser loaded three more chunks of JavaScript code now, which are going to be our One, Two, and Three components respectively, although not necessarily in that order.
>
> **[7:41](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=461)** So that's how basic code splitting works.
>
> **[7:43](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=463)** Basically, it allows us to reduce the amount of code that our client side has to load when the user first visits our site, and it allows us to have them load that code only when they need it.
>
> **[7:55](https://www.linkedin.com/learning/react-software-architecture/code-splitting-basics?u=76281980&t=475)** And just to show you also, if you refresh the page, you're going to see it flash briefly the loading components message that we had before.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (5), this, (3), const (3), import. (2)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (3), is called (1), in other words (1)
> **File Paths:** one.js (1), two.js (1), three.js (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** jsx (1), dom (1)
> **Exercise Files:** starter code (1), exercise files (1)
> **Cross-References:** go back to (1)

#### Route-based code splitting
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=0)** - Okay. So now that we've seen some very basic code splitting, what we're going to do is take a look at a somewhat more common usage of code splitting, which is to split our code based on routes.
>
> **[0:12](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=12)** So previously, we had these one, two, and three components that were displayed on our about page and we saw that when we navigated to the about page, only then did we actually load the code for those components.
>
> **[0:24](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=24)** Now, that's one way of doing code splitting.
>
> **[0:27](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=27)** But again, what we can do is actually split our code based on the different routes.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=33)** So in other words, we won't have to actually load the code for any of the pages, right?
>
> **[0:38](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=38)** Our homepage, our about page, or our articles page until the user actually goes to that page.
>
> **[0:44](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=44)** So let's take a look at how to do that.
>
> **[0:46](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=46)** The first thing we're going to do is go into our pages folder and open up our about, articles, and home pages.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=54)** And we're going to need to export these as the default export in order for this code splitting to work, same as we had to do with our one, two, and three components.
>
> **[1:03](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=63)** So we'll say export default home, do the same thing with articles, say export default articles.
>
> **[1:13](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=73)** And for our about page, we're going to do the same thing, say export default about.
>
> **[1:23](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=83)** Okay.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=84)** So the next thing we're going to do is go into our app component.
>
> **[1:30](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=90)** And instead of importing our home, about, and articles pages up at the top here, the normal way, what we're going to do is lazy load them using the lazy function and the import function.
>
> **[1:42](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=102)** So first let's import lazy, and along with that, as you may remember, we'll also need to import suspense.
>
> **[1:51](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=111)** And then what we're going to do is say, const home equals lazy and here we're going to import our home page.
>
> **[2:04](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=124)** We're going to do the same thing now for the about page.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=126)** We'll say const about equals lazy and say import pages slash about, and last but not least, our articles page will say const articles equals lazy, and we're going to say import pages slash articles.
>
> **[2:35](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=155)** And that's all we should have to do besides adding suspense to our application.
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=159)** So let's go in here.
>
> **[2:42](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=162)** and wrap the important parts in suspense.
>
> **[2:45](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=165)** Basically what we'll want to do is wrap our switch component in suspense.
>
> **[2:53](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=173)** This will at least allow our navbar to be displayed before we've loaded our home, about, and articles pages.
>
> **[2:58](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=178)** So we're going to say suspense and for the fallback prop, we're just going to do something very similar to what we did before and say loading like that.
>
> **[3:09](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=189)** And just as a side note, you could have a spinner or some kind of better looking element there, but for now we're just going to have a basic loading message like that.
>
> **[3:21](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=201)** Okay.
>
> **[3:22](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=202)** So that's pretty much all we should need to do.
>
> **[3:24](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=204)** Let's make sure our app is running and go take a look at it now.
>
> **[3:29](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=209)** So let's open up our network tab and we'll go to the homepage and hit refresh.
>
> **[3:38](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=218)** So what we're going to see here is that we have this main dot chunk dot JS file, which contains sort of the main react code of our application.
>
> **[3:46](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=226)** But we're also going to see this six dot chunk dot JS, which is presumably the homepage component up here that's being loaded as a separate chunk and what we're going to see now, again, if we clear our network and hit one of these.
>
> **[4:01](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=241)** We're going to see if we can go to our about page, especially that we have several chunks loaded.
>
> **[4:06](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=246)** One is the about page itself and then we also have the one, two, and three components from before loaded as separate chunks.
>
> **[4:14](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=254)** Finally, if we go to the articles page, we'll see that we get one more.
>
> **[4:17](https://www.linkedin.com/learning/react-software-architecture/route-based-code-splitting?u=76281980&t=257)** This is presumably five dot chunk dot JS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), const (3), function (2), switch (1), finally, (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)
> **Speakers:** - okay (1)

#### When to use code splitting
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=0)** - [Instructor] So this does call into question how much we should actually split up our applications.
>
> **[0:05](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=5)** And that's going to really depend on your individual use case.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=9)** Generally, what I recommend is splitting based on the pages that users generally view together and the components that users generally view together.
>
> **[0:18](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=18)** In other words, if we're always going to show the one, two and three components on our about page, there's really no point in lazy loading those components since we're just going to want that to be included with our about pages chunk anyway.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=32)** However, when there are things on your pages that a significant portion of users won't actually see, for example, if there's a hidden portion that they have to click a button to display, that would be another potential possibility for lazy loading components.
>
> **[0:48](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=48)** To show you what I mean, let's go back to our about page.
>
> **[0:53](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=53)** And instead of just displaying our one, two and three components directly, let's have a button that shows and hides those components.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=62)** So first of all, what we're going to do is import the useState hook up here from React, and then inside our about page, we're going to create a state variable, which we'll call showComponents and we'll have one that says setShowComponents.
>
> **[1:22](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=82)** And this state is basically going to be a Boolean.
>
> **[1:24](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=84)** The initial value will be false.
>
> **[1:27](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=87)** It will be a Boolean that determines whether or not our one, two and three components should be displayed.
>
> **[1:33](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=93)** So here's what this is going to look like.
>
> **[1:34](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=94)** We're basically just going to say showComponents.
>
> **[1:37](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=97)** And then if that's true, we'll render our one, two and three components as well as the suspense that surrounds them.
>
> **[1:47](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=107)** Okay.
>
> **[1:48](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=108)** The last thing is that we're going to add a button to our page that will actually change the showComponents state to true.
>
> **[1:54](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=114)** So we're going to say onClick equals setShowComponents to true.
>
> **[2:03](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=123)** And we'll say show, okay.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=126)** So now if we go back to our about page,
>
> **[2:14](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=134)** oops, and we need to set this to a function like that.
>
> **[2:19](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=139)** So now if we go back to our about page, what we're going to see if we refresh our page and go to our about page here, we'll see that we get our main chunk as well as our chunk four, which presumably is our about page itself, and if we clear it and click on this show button now, right?
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=159)** Notice we don't have our one, two and three components.
>
> **[2:42](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=162)** If we click on this, we're going to see that only then are the chunks for our one, two and three components actually loaded.
>
> **[2:50](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=170)** So that's again, one possible situation where you would want to do code splitting besides with routing is basically again, whenever there's a significant portion of code that users aren't going to be seeing.
>
> **[3:01](https://www.linkedin.com/learning/react-software-architecture/when-to-use-code-splitting?u=76281980&t=181)** Now, obviously we've been working with very small components here, but this could apply to components that are much larger and more unwieldy than the ones we've been working with.

> [!info]- Semantic Content
>
> **Code Identifiers:** showcomponents (3), setshowcomponents (2), usestate (1), onclick (1)
> **Code Keywords:** let (2), case. (1), function (1), this, (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Error boundaries
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=0)** - [Presenter] All right, so there's one more code splitting related thing that we're going to talk about, and that is something called ErrorBoundaries.
>
> **[0:07](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=7)** Now, before I talk about what ErrorBoundaries actually are, let's discuss one of the problems with lazy loading, and that is, that this introduces new possibilities for errors into our application, right?
>
> **[0:20](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=20)** So, before, when all of our code was just included in one big bundle, we knew that importing our components like we did up at the top here, wouldn't really cause any big problems, because, it's all included in the code.
>
> **[0:33](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=33)** So, if something went wrong, it was a problem with the code as opposed to a problem with a network.
>
> **[0:39](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=39)** However, now that we're doing this lazy loading thing, we're actually relying on the network to load our components, and what this means, is that we very well could end up in a situation where one of our components fails to load, and this causes an error.
>
> **[0:55](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=55)** Now, the way that we have it currently, an error in loading one of our components would cause our entire application to crash, right?
>
> **[1:04](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=64)** So, if we could load one and two, but three, for some reason failed the load, these things happen with network requests, then our application would basically crash.
>
> **[1:14](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=74)** So, this is where something called ErrorBoundaries comes in, in react.
>
> **[1:18](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=78)** ErrorBoundaries are basically components that block off sections of the user interface that we expect may cause some kind of error.
>
> **[1:29](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=89)** So, in the case of a lazy loading here, what we're going to want to do, is wrap these components in an ErrorBoundary, so that if one of them fails to load, we can still see, and continue to use the rest of our application.
>
> **[1:42](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=102)** So what do ErroeBoundaries look like?
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=104)** Well, inside our source directory, let's create a new file, and we're going to call this file, ErrorBoundary.jS.
>
> **[1:52](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=112)** Now, ErrorBoundaries are just components, and because of a detail that you're going to see in just a second, we have to define these components as class-based components, instead of as function-based components.
>
> **[2:05](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=125)** Now, I don't normally recommend using class-based components at all, because, primarily, you can't use hooks with them, but this is just one of those situations where we're going to have to at this time.
>
> **[2:16](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=136)** So, let's define our ErrorBoundary component.
>
> **[2:20](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=140)** We're going to first start off by importing react up here at the top, and then we're going to say, export default class ErrorBoundary extends React.Component, okay?
>
> **[2:39](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=159)** So, that's how we define our component.
>
> **[2:42](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=162)** And what we're going to want to do first, is define the constructor, all right?
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=166)** So, we're going to say constructor props, we're going to call it super props, and then we're going to say, this.state, and our state is going to be an object with error set to null.
>
> **[3:00](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=180)** Basically, what we're going to do, is use this error state, to tell whether an error has occurred.
>
> **[3:05](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=185)** You'll see how we actually catch errors inside of here in just a second.
>
> **[3:10](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=190)** So now that we have our constructor, we're going to want to define a method called, componentDidcatch.
>
> **[3:17](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=197)** Now, this is a special method that at the time of this recording, you can only use inside of class-based components.
>
> **[3:24](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=204)** And basically, it will be called when an error occurs inside our ErrorBoundaries limits.
>
> **[3:31](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=211)** So, this method is going to take two arguments.
>
> **[3:33](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=213)** The first is going to be the error, the second is going to be errorInfo.
>
> **[3:38](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=218)** And for now we'll just print these out.
>
> **[3:40](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=220)** We're going to say console.log error and errorInfo.
>
> **[3:50](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=230)** So that's our componentDidcatch.
>
> **[3:51](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=231)** You can do other things inside of here, if you want, you can implement retry behavior, whatever you might want to do inside of there.
>
> **[3:59](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=239)** The other method we're going to implement here, is a static method called getDerivedStateFromError.
>
> **[4:08](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=248)** And basically, what this is going to do, is allow us to set this error state when an error occurs.
>
> **[4:14](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=254)** So for now, we're just going to say, return error, as an object like that, and that will convert whatever error occurs, and set it as the state for our component.
>
> **[4:26](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=266)** Okay, so, other than that, the only other thing we're going to do, is implement the render method, and what we're going to do in the render method, is basically, check if the error state here exists, and if it does, we're going to render some sort of fallback, right?
>
> **[4:40](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=280)** Some sort of error message saying, something went wrong with our application.
>
> **[4:45](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=285)** Otherwise, we're just going to render all of the components that are inside of this ErrorBoundary.
>
> **[4:51](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=291)** So, here's what that's going to look like.
>
> **[4:52](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=292)** We're going to say, if this.state.error, we're going to say return, and for now, we'll just have some kind of error message, we'll say something like, uh, oh! Something went wrong, and you'll probably want to have a more sophisticated component that you display when this happens, but, for demonstration purposes, that'll be fine.
>
> **[5:17](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=317)** And then we're going to say, return this.props.children, if there is no error.
>
> **[5:25](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=325)** So in other words, unless an error occurred, our ErrorBoundary, it's going to be as if it didn't even exist.
>
> **[5:33](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=333)** All right, so that's all we have to do for our Errorboundary.
>
> **[5:37](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=337)** So, let's go into our about page, We'll use our about page to test this.
>
> **[5:42](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=342)** And we're going to wrap our suspense in this new ErrorBoundary component we created.
>
> **[5:49](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=349)** So, let's import it up here.
>
> **[5:53](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=353)** If we're going to say, import, and we exported it as a default export, so we'll say, ErrorBoundary from ../ErrorBoundary.
>
> **[6:06](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=366)** And we're going to wrap our suspense in that ErrorBoundary, like that, and we'll put all of this inside, okay?
>
> **[6:19](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=379)** So, let's just take a look at our application now, what we're going to see is if we click show, everything works.
>
> **[6:25](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=385)** But what if, for some reason, one of these didn't load?
>
> **[6:30](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=390)** Let's say that one of our components, for example, we'll use our one component.
>
> **[6:34](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=394)** Let's say that one of these components throws an error.
>
> **[6:36](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=396)** We're just going to put the throw directly in the body of the component, we're going to say, throw new Error, Help!
>
> **[6:45](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=405)** Something like that, right?
>
> **[6:48](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=408)** And it's going to complain that it'll never get there, but we're just doing this to test out the ErrorBoundary code.
>
> **[6:55](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=415)** So, now if we go back and try and show our components, we're going to see, right?
>
> **[7:01](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=421)** You saw that, that thing appeared, and then we see that we got an error.
>
> **[7:04](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=424)** Now, in production, you would not see this error show up.
>
> **[7:08](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=428)** So, what you can do if you really want to see what the application would look like with this error occurring, is we could create a production bill by running npm run build, and then in order to serve this in production, what we can do is say, npm install -g serve, that'll install the serve package globally, which we can use to serve our files in more of a production environment.
>
> **[7:37](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=457)** And then, we'll just say, serve -s build, right?
>
> **[7:41](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=461)** So we're going to be serving the build folder on localhost 5,000.
>
> **[7:45](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=465)** So, let's open that up.
>
> **[7:49](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=469)** And we'll see now, if we go to the about page and click show, that we'll see, uh, oh! Something went wrong instead of our application actually throwing an error and crashing.
>
> **[8:00](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=480)** So, another thing that we can do with this, in our about page, we currently are wrapping all three of our components in this ErrorBoundary, and what that means, is that basically, if an error occurs in one, it won't show any of the others.
>
> **[8:15](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=495)** So, what we can do instead, is if we want to make sure that the other two show up, if one of them fails, or one shows up if the other two fail, what we can do, is we can actually wrap each one of these individually, in its own ErrorBoundary.
>
> **[8:34](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=514)** All right, so let's see what that looks like here.
>
> **[8:41](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=521)** And now, right?
>
> **[8:42](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=522)** If something goes wrong in one, we should still be able to see two and three show up.
>
> **[8:48](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=528)** So let's see, let's go back to here.
>
> **[8:50](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=530)** We're going to refresh, and click show.
>
> **[8:57](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=537)** Oh, that's because we need to do another production build.
>
> **[9:00](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=540)** So, let's say npm run build again, and then we're going to serve it by saying, serve -s build.
>
> **[9:09](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=549)** All right, so let's open that up again.
>
> **[9:12](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=552)** Go to our about page, click show.
>
> **[9:15](https://www.linkedin.com/learning/react-software-architecture/error-boundaries?u=76281980&t=555)** And we'll see that even though one failed to load, we still have our two and three components.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (4), throw (2), interface (1), continue (1)
> **Code Identifiers:** componentdidcatch (2), errorinfo (2), js (1), getderivedstatefromerror (1)
> **CLI Commands:** npm (3), make (1)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (2)
> **File Paths:** errorboundary.js (1)
> **Cross-References:** go back to (1)


### 6. Folder Structure and Naming Conventions

#### Function vs. feature-based organization
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=0)** - [Instructor] All right, so we've covered quite a few architectural concepts in this course already.
>
> **[0:04](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=4)** And the final one we're going to talk about is how to organize the code in your projects in a way that best suits your overall developer and organizational structure.
>
> **[0:15](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=15)** So to demonstrate this, I'm going to just be using our code from the ending state of when we talked about code splitting and I'm not really going to be using any of the actual files in it.
>
> **[0:25](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=25)** I'm just going to be using the directory structure to demonstrate a few things.
>
> **[0:30](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=30)** So we're going to talk about function versus feature-based organization in a project.
>
> **[0:36](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=36)** And this is a very important distinction to make.
>
> **[0:39](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=39)** So let's talk about function-based organization first.
>
> **[0:43](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=43)** In function-based organization, let's just imagine that we're building a blog application or something like that.
>
> **[0:49](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=49)** In function-based organization, you have your highest level folders in your source directory based around the functions they provide.
>
> **[0:57](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=57)** So you'll probably have a pages directory as we have here.
>
> **[1:00](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=60)** You may also have a network directory.
>
> **[1:02](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=62)** You might have a util directory for utility functions.
>
> **[1:08](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=68)** And you might also have directories for things like hooks.
>
> **[1:11](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=71)** And if you're using Redux, you might have reducers.
>
> **[1:16](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=76)** So, anyway, the point here is that the top level folders in your source directory are based around the functions that those things provide.
>
> **[1:25](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=85)** Now, for some reason, this is the default way of organizing code in most developers' projects.
>
> **[1:31](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=91)** And while it works on a smaller scale, as we move into larger and larger apps, we generally want to move toward feature-based organization.
>
> **[1:40](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=100)** All right, so if this is function-based organization where we have hooks, network pages, reducers, util, organized around functions basically, let's delete all of these except for pages, of course, to get a clean start.
>
> **[1:53](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=113)** So if we're going to organize our code around features instead of functions, the top level items in our source directory would be things more like articles.
>
> **[2:04](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=124)** You might have sign-ups.
>
> **[2:09](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=129)** You might have subscriptions.
>
> **[2:12](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=132)** You might have, I don't know, competitions.
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=135)** Basically, you would be organizing the top level folders based on what your users would describe as features of your application and not what programmers would normally think of as functions.
>
> **[2:27](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=147)** So the reason that feature-based organization works better, and by the way, each of these folders would usually have all of the corresponding functions inside of it, so in articles, you'd have reducers, components, actions, network, util, et cetera, and the reason that this works better than function-based organization as you get to larger applications is when you have multiple programmers working on the same code base.
>
> **[2:55](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=175)** They're usually going to be working on it in terms of features instead of in terms of functions.
>
> **[3:02](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=182)** So, anyway, hopefully this has been helpful.
>
> **[3:05](https://www.linkedin.com/learning/react-software-architecture/function-vs-feature-based-organization?u=76281980&t=185)** It's definitely something for you to look into and experiment with.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), this, (1), delete (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Monoliths, multi-repos, and monorepos
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=1)** The other topic that we're going to talk about with regards to organizing your code in a project is monoliths, multi-repos and monorepos.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=9)** Now, some of you may have never heard of any of these terms.
>
> **[0:12](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=12)** Some of you may have heard of several of them.
>
> **[0:14](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=14)** Let's take a look at the definitions of each of these.
>
> **[0:17](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=17)** First of all, monoliths are projects where all of the source code for that project is in the same directory, the same code base, and these projects generally have to be modified and deployed all at once.
>
> **[0:31](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=31)** In other words, if you have a hundred developers making changes to it, you have to keep that in mind because you're going to need to incorporate all of those changes into the next release.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=42)** Now, if you've never heard of the other two possibilities here, you've probably been working with monoliths for most of your career.
>
> **[0:48](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=48)** So multi-repos are sort of the opposite of monoliths.
>
> **[0:52](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=52)** In a multi-repo, the projects source code is kept separate into multiple code bases and all of these code bases can be worked on and deployed independent of one another.
>
> **[1:05](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=65)** You may have heard this talked about in the context of microservices before.
>
> **[1:09](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=69)** Now monorepos are sort of a mix of monoliths and multi-repos.
>
> **[1:14](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=74)** They basically take the best attributes from either side and combine it.
>
> **[1:18](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=78)** In a monorepo, all of your code is in the same code base, but it's organized so that each piece is independent of the other pieces, right?
>
> **[1:29](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=89)** So in other words, you have the ease of use of monoliths, right?
>
> **[1:32](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=92)** You can just clone and run your project, but you also have the ease of deployment that multi-repos provide.
>
> **[1:39](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=99)** So those are the basic definitions of the three.
>
> **[1:41](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=101)** Let's take a look at the benefits and drawbacks of each.
>
> **[1:44](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=104)** So for monoliths, monoliths are simple at first.
>
> **[1:48](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=108)** That's why the majority of the time, developers will start off by creating a monolith.
>
> **[1:53](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=113)** It's just usually how it happens.
>
> **[1:55](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=115)** Now, the thing about monoliths, as many of us have found, is that they can become unmanageable if you're not careful.
>
> **[2:01](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=121)** And often even if you are careful, they still become unmanageable.
>
> **[2:06](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=126)** Now, the reason for this is that monoliths generally work very well with small teams working on projects that are shorter term.
>
> **[2:15](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=135)** So if you're working with two other people and you're trying to create a project that's only going to last about three to six months, or is just a fun prototype, you're probably going to want to stick with monoliths.
>
> **[2:26](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=146)** That's fine.
>
> **[2:28](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=148)** So multi-repos, on the other hand, they do add some overhead for basic setup.
>
> **[2:33](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=153)** You're not going to get your app up and running in a matter of an hour or two probably.
>
> **[2:38](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=158)** And multi-repos also contain the possibility that they'll make the deployment process more complex.
>
> **[2:44](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=164)** Now this may or may not be true.
>
> **[2:46](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=166)** In some cases, they can actually make the deployment process much easier since you don't have to deploy all of your new code at the same time.
>
> **[2:54](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=174)** You can just pick versions of each different feature of your application and deploy those together.
>
> **[3:00](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=180)** And this is what's referred to as independent versioning of different parts, right?
>
> **[3:05](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=185)** So you can have version one of the homepage.
>
> **[3:08](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=188)** You can have version three of the products page.
>
> **[3:12](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=192)** You can have version two of the checkout flow, et cetera.
>
> **[3:15](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=195)** Now multi-repos generally work better in companies that have a lot of fairly isolated teams, right?
>
> **[3:21](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=201)** Where the teams don't really talk to each other that much.
>
> **[3:25](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=205)** They talk a lot amongst themselves, but there's not a whole lot of communication.
>
> **[3:29](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=209)** In that case, multi-repos can be quite nice because the teams don't have to sync up their schedules in order to release at the exact same time every week or every two weeks or however long.
>
> **[3:42](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=222)** So let's talk about monorepos next.
>
> **[3:44](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=224)** Monorepos as I mentioned before, include many of the benefits from both of the extremes, monoliths and multi-repos.
>
> **[3:53](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=233)** Now, a key thing to know about monorepos too is that they're used by many large tech companies, including Google, Facebook, Microsoft, Twitter, and many others.
>
> **[4:03](https://www.linkedin.com/learning/react-software-architecture/monoliths-multi-repos-and-monorepos?u=76281980&t=243)** So it's pretty clear that monorepos have some pretty nice benefits.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **CLI Commands:** make (2)
> **Exercise Files:** source code (2)
> **Definitions:** in other words (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=0)** - [Narrator] Well, we've covered quite a few topics in this course, we learned server-side rendering in React as well as some techniques for loading data in a server-side rendered application.
>
> **[0:09](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=9)** We learned several of the state management solutions available for React applications, as well as how to add code splitting to our apps.
>
> **[0:16](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=16)** And finally, we saw some techniques for organizing code in our React applications.
>
> **[0:21](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=21)** Well, now that you've completed this course, you might be wondering where to go next.
>
> **[0:25](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=25)** And my main recommendation would be to try adding the concepts you've learned here to the React apps that you're currently working on.
>
> **[0:32](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=32)** Each of these concepts has the potential of being very beneficial to real-world applications.
>
> **[0:37](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=37)** And this would be a great exercise for you to get some more experience with these concepts.
>
> **[0:42](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=42)** Well, thanks for watching.
>
> **[0:43](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=43)** And if you want to get in touch with me, please don't hesitate to connect with me on LinkedIn.
>
> **[0:47](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=47)** I'm on LinkedIn quite often, and would love to hear any questions or comments from you, or if you just want to say hi, that's okay too.
>
> **[0:53](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=53)** Well, thanks again.
>
> **[0:54](https://www.linkedin.com/learning/react-software-architecture/next-steps?u=76281980&t=54)** And I hope you enjoyed the course.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [narrator] (1)


## Path Context

### In [[Improve Your React Skills]]
← [[React- Authentication]] | **7 of 9** | [[Building a GraphQL Project with React.js]] →

## Appears In

- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js
- [[Building Modern Uis With React Router V6]] — React.js

---

[↑ Back to top](#)