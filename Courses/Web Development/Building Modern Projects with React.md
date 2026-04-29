---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-modern-projects-with-react-24955170
url: "https://www.linkedin.com/learning/building-modern-projects-with-react-24955170"
duration_minutes: 230
duration: 3h 50m
level: Intermediate
updated: 11/22/2024
learners: 56445
skills:
  - Web Development
  - Front-End Development
  - JavaScript
  - React.js
exercise_files: true
github: "https://github.com/LinkedInLearning/building-modern-projects-with-react-4254233/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGOgABK85NgGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730769070369?e=2147483647&amp;v=beta&amp;t=i6A0EJqAi0ZU1REHNfJU7kiqyFlg70mYNUGbXpb9stg"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore React.js Development]]'
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[React- Accessibility]]'
  - '[[React- Securing Applications]]'
next_courses:
  - '[[React- Authentication]]'
  - '[[React- Testing and Debugging]]'
path_nav: '[{"path":"Explore React.js Development","position":6,"total":8,"prev":"React- Accessibility","next":"React- Authentication"},{"path":"Improve Your React Skills","position":4,"total":9,"prev":"React- Securing Applications","next":"React- Testing and Debugging"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/web-development
  - skill/front-end-development
  - skill/javascript
  - skill/react-js
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20Modern%20Projects%20with%20React.md)

![Building Modern Projects with React](https://media.licdn.com/dms/image/v2/D560DAQGOgABK85NgGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730769070369?e=2147483647&amp;v=beta&amp;t=i6A0EJqAi0ZU1REHNfJU7kiqyFlg70mYNUGbXpb9stg)

# Building Modern Projects with React

> Learn about some of the most important tools in the React ecosystem that help you simplify development and manage the complexities of state, side effects, structure, and styling. Instructor Shaun Wassell shows how to create a basic React project, and then explains how to add Redux, create thunks, use selectors, work with styled-components, perform testing, and more.

> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170) | 3h 50m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Project Setup]]** (1 videos)
- **[[#2. Project Overview]]** (2 videos)
- **[[#3. Creating React Projects from Scratch]]** (5 videos)
- **[[#4. Creating Projects with Vite, Next.js, Remix, and More]]** (4 videos)
- **[[#5. Creating a Basic Project]]** (5 videos)
- **[[#6. Adding Redux]]** (11 videos)
- **[[#7. Alternatives to Redux]]** (2 videos)
- **[[#8. Dealing with Side Effects]]** (10 videos)
- **[[#9. Selectors]]** (4 videos)
- **[[#10. Styled-Components]]** (3 videos)
- **[[#11. Testing]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Let's build modern projects with React
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980&t=0)** - After learning the basics of React, most people are surprised to discover one very important fact, the most important fact in the React universe, and that is that just knowing React alone isn't enough to be an effective React developer.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980&t=14)** There are so many other important technologies that are used with React so frequently that you just can't develop most React applications without them.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980&t=22)** And I'm talking of course about technologies like Redux, Recoil, MobX, thunk, and really too many others to list.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980&t=29)** And you can bet that employers are going to be asking you about many of these in your interviews.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980&t=35)** I'm Sean Wassell, and in this course you'll learn some of the most important technologies in the React ecosystem, and how to use them correctly in your applications.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/let-s-build-modern-projects-with-react?u=76281980&t=43)** So let's jump right in and start learning the most important technologies in the React ecosystem.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - after (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, there are a few concepts that would be very helpful for you to know, because I won't be mentioning them explicitly in this course, so let's just go over what those are real quick.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=12)** The first thing is a basic knowledge of JavaScript syntax.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=16)** Obviously, since in order to use React, you have to use a lot of JavaScript, it's going to be very helpful for you if you're already familiar with JavaScript's syntax, and if you're not, you're more than welcome to try and follow along anyway, mostly just because JavaScript syntax is fairly straightforward, but I would highly recommend that at some point you brush up on your JavaScript syntax by taking a basics course.
>
> **[0:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=41)** Now, besides this, it would also be helpful for you to know a lot of the basics of React, or at least be familiar with basic React syntax since we'll obviously be using React pretty heavily in this course.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=53)** Again, you're more than welcome to just follow along and learn as you go, but if you want to be more prepared, you can always go back and take a look at a basics course of React.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=64)** And finally, since we'll be making some network requests in this course, it would also be helpful for you to have a basic knowledge of fundamental networking concepts.
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=74)** Things like making network requests, and basic terminology such as clients and servers.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=81)** If you don't have this, once again, you're more than welcome to just continue on with the course.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=85)** Just know that there may be certain things I'll say or do that you won't understand completely.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/what-you-should-know?u=76281980&t=90)** So, now that we've discussed this, let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), finally, (1), continue (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Project Setup

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Basic setup and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=0)** - [Instructor] All right, so before we discuss what this course is going to cover in more detail, I just want to show you the basic setup that's going to be involved, and how to work with the exercise files.
>
> **[0:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=11)** So the basic setup, if you're going to follow along using code spaces, which I would highly-recommend, there's not really much you need to do.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=18)** You simply need to go to GitHub and create a code space from the repo for this course.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=24)** Once you're there, you can switch to the state for any video in this course.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=30)** Any video where I write code, of course, by checking out the corresponding branch.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=36)** So for example, if you want to get the starting state of the code that you'll need for, let's say, the fourth video in section three, you can simple say, "git checkout," and then you're going to check out the branch 03_04_start, all right?
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=54)** And if you want the ending state for that video, the ending state of the code for that video, that is.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=60)** You're going to say, "03_04_end."
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/basic-setup-exercise-files?u=76281980&t=63)** All right? And that will check out that branch, and your code should be in sync with what I write in that video.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), for, (1), let (1)
> **Prerequisites:** setup (2), you'll need (1)
> **UI Navigation:** go to (1), switch to (1)
> **CLI Commands:** git (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Project Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why use the React ecosystem?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=0)** - [Instructor] All right, so the first thing that I want to talk about here is the importance of the React ecosystem tools, right?
>
> **[0:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=7)** In other words, why should we use these tools in the first place?
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=10)** What's wrong with just regular React?
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=13)** Well, let's talk about some of the main problems with what I'm going to call vanilla React.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=19)** Vanilla React just meaning React without any additional libraries.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=24)** Really, the thing to know about React is that the library itself was really designed to be unopinionated, right?
>
> **[0:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=33)** In other words, it wanted to kind of leave things like state management or styling up to the developer or the development team so that you could make the decision that's best for you.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=44)** Now that sounds great on the surface, but the problem with this is that these are actually surprisingly difficult things to figure out.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=54)** It takes a lot of programming know-how to really make the right decisions with regards to designing how state management or styling or networking is going to work in a full stack React application, right?
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=68)** It's just a very complicated thing to figure out.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=71)** Normally the result of this is that React developers don't put quite as much thought into it as they should, or they just don't have the skills or the experience necessary to make these decisions correctly.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=87)** And usually they end up with this very large and very hard-to-maintain React application full of large, hard-to-maintain React components.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=98)** So that's really the main problem with vanilla React, and that's where all of these React ecosystem tools come in.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=108)** Now really the name of the game when working with these React ecosystem tools, which we'll meet in future sections, the main idea here with these tools is separation of concerns, right?
>
> **[2:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=123)** So essentially when we think about managing our React application's state, let's say, or maybe doing something like managing our React application's styles, we want to make sure that those concerns are kept separate from other concerns like the main concern of React components in the first place, which is translating data into a user interface and keeping the two in sync.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-use-the-react-ecosystem?u=76281980&t=147)** So this is just something to keep in mind as we go through these React ecosystem tools is that this separation of concerns is the main idea behind all of these, and really the main benefit that you get from all of these tools.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (2), interface (1)
> **Definitions:** in other words (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Meet the React ecosystem tools
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=0)** - [Narrator] All right, so now that we're a little bit more familiar with the main benefits that we can hope to gain from these React Ecosystem Tools, let's actually take a look at the tools that we're going to be talking about and just get a brief introduction to how these tools are going to work and what they add to a React project.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=18)** So here are some of the tools that we'll be covering.
>
> **[0:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=21)** The first set of tools that we'll be covering are going to be tools for creating and managing React applications.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=29)** Now the, probably the most well known of these is Create React app, but in recent years this has actually been somewhat replaced with a host of other React app creation tools, such as Vite, Next.js and Remix.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=44)** And we're going to meet these a little bit later, in another section.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=49)** Now the next set of tools that we're going to be taking a look at are tools for state management.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=54)** And this includes things like Redux, which is a very popular tool, as well as some other lesser known, but in some cases even more effective tools, such as Recoil and MobX.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=68)** We'll be taking a look at those shortly as well.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=71)** After that, we'll be taking a look at really the main tool for data loading, or for orchestrating data loading anyway, in React applications, and that is something called Redux Thunk.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=83)** This is a tool that fits right in with a Redux application.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=87)** It really makes it very easy to add things like data loading and side effects into a basic Redux application.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=96)** After that, we're going to take a look at a library for data selection.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=101)** Basically, this helps the components access the data that is going to be stored in the Redux store.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=108)** We'll take a much closer look at that shortly and how that works.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=112)** And this library is called Reselect.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=114)** Now the interesting thing about this Reselect library is it was so useful, and used alongside Redux so often, that it actually became part of that library.
>
> **[2:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=123)** Certain key parts of it did.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=125)** After that, we're going to take a look at really the most important tool for styling in React apps, which is Styled components.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=133)** We'll see how these enable us to make very high quality styled components that are not only easy to manage, but also easy to read when they're in a React component.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=145)** And finally, we're going to be taking a look at some tools for testing as well as how to test the rest of these tools or code that we've written with the rest of these tools in our React apps.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=157)** So these are the tools that we're going to be covering.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-react-ecosystem-tools?u=76281980&t=160)** Let's jump right in and start seeing how these tools can help us.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (2)
> **File Paths:** next.js (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 3. Creating React Projects from Scratch

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Building a React project from scratch
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=0)** - [Instructor] All right, so now that we're familiar with the different tools that we're going to be taking a look at here, the first thing that we're going to do here actually, is we're going to see how to build a React project from scratch.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=12)** Now, this might seem like a strange way to start a course on React ecosystem tools is by specifically building a React app that doesn't use any tools.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=23)** Well, it will use Webpack as we'll see, but the reason that we're going to do this is because I've found that this really gives you a lot of insight into how React works, and really learn to sort of respect its boundaries as you start adding these other tools in.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=38)** So, let's talk about the basic process here of creating a React app from scratch.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=43)** The first thing to understand is the basics of how React works.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=49)** I'm often surprised when I hear that more advanced React developers still don't quite understand the basic process of how a React app renders, so the first thing to know is that when we load a React app, right, when we open up a browser and put in a URL and the thing that we're loading, the site that we're loading is a React app, the first thing that arrives at our browser is actually just a single empty HTML file.
>
> **[1:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=78)** It's mostly empty anyway, it doesn't usually have any kind of visual elements on it, and Reacts job is to actually programmatically fill this HTML file with our application, right?
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=93)** This process is called rendering, and it basically just involves creating elements and inserting them into this HTML file that's being displayed in our browser.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=104)** All right, and finally, in order to make all of this process work for us, I'll explain why this is very shortly, we're going to need a tool called Webpack, which will basically convert the JSX syntax, right?
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=117)** That HTML-like syntax that we see in React files, into plain JavaScript that browsers can execute.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=125)** Browsers aren't able to execute JSX by default.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/building-a-react-project-from-scratch?u=76281980&t=129)** So, anyway, that is the basic process that we're going to be following here, so let's jump right in and see how to create a React app from scratch before we add these ecosystem tools to it.

> [!info]- Semantic Content
>
> **Env Vars:** html (4), jsx (2), url (1)
> **Code Keywords:** let (2), finally, (1), default. (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### The React entry point
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=0)** - [Instructor] All right, so now that we've learned a little bit more about how we're going to build a React project from scratch and what we have to gain from this, let's get started here by creating the React entry point.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=12)** So again, this is just going to be an index.html file that will take charge of loading a script that will actually render our React app.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=22)** So I'm going to start off here by creating a new folder, and I'm going to call this folder something like react-from-scratch.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=30)** And then inside this folder, I'm going to create a new file, and I'll call that index.html.
>
> **[0:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=37)** And for now, we'll also create a new file called index.js, and that's going to be the main script, right?
>
> **[0:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=46)** Sort of the JavaScript entry point that will kick off the rendering process.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=52)** So now that we have those things, let's start off by creating a simple HTML file that will load our app.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=60)** So this is going to be a very simple HTML file.
>
> **[1:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=62)** It's just going to have DOCTYPE html, it's going to have the basic HTML tag with language equal to English there, unless of course you're making this in a different language.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=72)** And then we're going to have the basic head tags and the basic body tags.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=77)** Now, the head tags are going to serve the same purpose in a React app as in just a basic static site.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=84)** They're going to have things like the meta tags, right?
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=88)** Just informing the browser what the character set is, for example.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=92)** So we'll just use UTF-8 for that.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=96)** And then after that, we're going to say meta, and this is just going to be for basic styling, we're going to say name equals viewport.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=104)** And then we're going to say content=width=device-width.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=112)** And initial scale equals 1.0, all right?
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=118)** So again, that's just basic styling stuff.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=119)** And the reason that I'm leaving these things in here is just to show you that, again, this is the same kind of thing, these serve the same kind of purpose as they would on a regular static site.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=129)** And last but not least, we'll add a title here, which is, again, just going to be what shows up in the tab.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=135)** And we'll just say something like My React App in there.
>
> **[2:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=140)** Cool, so now that we've got the head tag filled out, let's move on to the body tag.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=145)** This is where we're going to have our very important div that we're going to render our app inside of.
>
> **[2:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=153)** So here's what this is going to look like.
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=154)** We're going to say div, and we're going to give this an ID because we want to make sure we can uniquely identify this thing, and we'll just call that root.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=163)** And then underneath that, here's where we're going to actually load the script by saying script, oops, let me try that again there, script srce=, and for now what we're going to do is we're just going to say something like index.js.
>
> **[2:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=179)** So that'll load the index.js file that we just had right next to it.
>
> **[3:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=183)** And then we're going to have script right there.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=185)** So what we're going to do now, right, now that we've set up this very simple HTML file, and again, this is kind of the point, right?
>
> **[3:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=193)** Right now we only have this empty div, but the React scripts that we're going to write, which is really the entire point of React, are going to take care of rendering and filling this div with all of the content that our app needs to contain.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=210)** So here's what this is going to look like.
>
> **[3:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=212)** Let's actually just go over to index.js.
>
> **[3:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=214)** And for now, just to show that everything's working, we'll say console.log, and we'll say, "This is the React rendering script."
>
> **[3:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=224)** And now that we've done that, let's just save that.
>
> **[3:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=228)** All right, so now that we have the html and script files created, we're just going to open up this HTML file in a browser.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=235)** Now, if you're developing locally, that is, on your machine instead of in Codespaces, I'm using Codespaces, all you need to do is right-click on the index.html file, do Copy Path, and then paste that into a browser, and that will open up this file.
>
> **[4:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=252)** Now, just to make sure that you actually see it, let's actually just add an h1 heading here that says something like, "My React App," and you should see that rendered.
>
> **[4:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=262)** In a Codespaces environment, what you're going to need to actually do is you're going to have to right-click on this file and go to Open with Live Server.
>
> **[4:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=270)** And what that's actually going to do, that's  going to make it possible for you to actually view those files in your browser, as you can see.
>
> **[4:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=277)** And you're just going to want to click on react-from-scratch.
>
> **[4:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=280)** And what you'll see is that, sure enough, that renders the index.html file.
>
> **[4:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=285)** This is just the h1 heading that we added there.
>
> **[4:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=287)** And if you open up the inspector window and go to Console, sure enough you can see that it says, "This is the React rendering script."
>
> **[4:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=296)** All right, so in other words, what we've done here is we've just created a simple HTML file that loads a JavaScript file and runs it.
>
> **[5:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-react-entry-point?u=76281980&t=304)** So the next thing that we're going to need to do is make it so that that JavaScript file will actually render our React app inside this HTML file instead of having this h1 heading thing just define there statically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), static (2), this, (1)
> **Env Vars:** html (7), doctype (1), utf (1)
> **File Paths:** index.html (4), index.js (4)
> **UI Navigation:** right-click (2), go to (2), in the tab (1), click on (1)
> **CLI Commands:** make (4)
> **Versions:** 1.0 (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)

#### Creating a React script
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=0)** - [Instructor] Alright, so now that we've created this HTML file that loads this JS file, the next thing that we're going to need to do is have this JS file actually start doing things like rendering React components.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=14)** So here's what this is going to look like.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=15)** First of all, we're obviously going to need to install React into our project because, well, so far we haven't done that.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=23)** So, let's open up a terminal here, which you can do in code spaces just by going to terminal and then new terminal right there.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=32)** And inside here you're going to need to first of all navigate to the React from scratch directory, with index.js and index.html inside of it, right?
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=43)** I have all of these other files that are just from the GitHub repo, just different settings files for the appearance of this IDE, things like that.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=53)** So you can just ignore those, but we're going to need to say cd react-from-scratch and change directories into there.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=59)** And you should be able to type pwd, which shows you the current directory you are in and see that you are in fact in React from scratch.
>
> **[1:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=69)** And now the first thing you're going to want to do is create a new package.json file, which will keep track of things like the dependencies for our project, by saying npm.init -y That will just set up a new package.json file with all of the defaults.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=87)** And now we can install the React libraries that we need by saying npm install react And we're also going to install a library called react-dom, and let's just hit enter, and that should install all of those for us.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=105)** And now that we've done that, let's go back to our index.js file here.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=110)** And here's what this is going to look like.
>
> **[1:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=113)** We're going to start off by saying import React from 'react'; and then we're going to say import ReactDOM from 'react-dom'; These are the two packages that we just installed there.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=127)** And now what we're going to do is we're going to say const app = Right, we're just going to create a component here.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=135)** So let's add a capital A there, and then what we're going to do is we're going to return a simple H1 element that says something pretty similar to what we had in our index do HTML file.
>
> **[2:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=148)** What we'll do here is we'll say something like H1, and we'll say something like "This is a React script."
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=157)** All right? Something like that.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=159)** And then down below that, what we're going to do is we're going to say const container.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=165)** This is the container element that we want to render our React app inside of.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=170)** So that's going to be this div id of root that we've created.
>
> **[2:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=175)** So here's what that's going to look like.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=176)** We're going to say document.getElementById, and we're going to use the ID of root, as I said.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=184)** And now that we have that container, we're going to say const root = createRoot and we're going to pass that container as an argument, right?
>
> **[3:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=193)** We're basically saying that we want to create the root of our React application inside that container we just got a reference to.
>
> **[3:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=202)** And now in order to render our React app, we just need to say root.render And if we want to render our app component, we can just say App, like so, and that should render our app component.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=215)** All right, now, one big problem with this right now is that by default React syntax, right?
>
> **[3:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=221)** This JSX syntax isn't actually supported by most browsers.
>
> **[3:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=227)** So if we try and run this script in our browser now, what we'll see is that we'll get an error, because basically this JSX syntax, the idea of writing HTML elements in JavaScript code isn't something that's supported by most browsers.
>
> **[4:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=245)** And what this means is that we actually will need to use a library that will convert this for us automatically to something that the browser can handle.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=253)** Now, behind the scenes, what this is going to look like, and by the way, let's actually just change this.
>
> **[4:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=258)** I had the wrong import here.
>
> **[4:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=260)** This should be import { createRoot } from 'React-dom/client'; There we go.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=268)** But what's actually going on behind the scenes, if we didn't want to use JSX, we could actually just say return React.createElement And to recreate this H1 element with the string inside of it, we could say H1 as the first argument to create element.
>
> **[4:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=288)** The second argument would be the props that are getting passed to that.
>
> **[4:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=291)** So we could just say null for that since this doesn't have any props.
>
> **[4:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=294)** And then the third argument is the children that we're passing to that.
>
> **[4:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=298)** So in other words, what you see here, most React developers actually go their entire careers without knowing this.
>
> **[5:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=306)** But this is actually what's going on behind the scenes.
>
> **[5:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=309)** This is what JSX, this syntax here gets converted to behind the scenes.
>
> **[5:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=316)** So, if we wanted to rewrite this root.render thing, we could say React, oops, let's try that again.
>
> **[5:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=321)** React.createElement and then pass our app component as the first argument.
>
> **[5:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=328)** That's what happens when we want to render actual components.
>
> **[5:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=331)** The second argument would be, again, the props.
>
> **[5:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=333)** So we'd say null.
>
> **[5:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=335)** The props actually would be an object like this, if we wanted to pass props like a: 1, b: 2, but since obviously we don't want to do that, we'll leave that as null.
>
> **[5:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=344)** And then since there's no children here, we can just leave that empty.
>
> **[5:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=347)** So actually we don't even need to pass the props at all.
>
> **[5:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=350)** We can just say React.createElement(App) So, again, if we didn't want to use JSX in our React projects, this is what this would look like.
>
> **[6:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=360)** But obviously we do want to use that.
>
> **[6:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-react-script?u=76281980&t=362)** So let's actually just change this back to the JSX syntax, and in the next video we'll see how we can actually convert this automatically into that syntax using a tool called webpack.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (4), const (3), this. (2), import { (1)
> **Env Vars:** jsx (6), html (3), ide (1)
> **Code Identifiers:** createelement (3), createroot (2), getelementbyid (1)
> **Prerequisites:** install (5), set up (1)
> **File Paths:** index.js (2), package.json (2), index.html (1)
> **Tools:** terminal (3), github (1)
> **CLI Commands:** npm (2), cd (1)
> **Cross-References:** go back to (1), in the next (1)

#### Using webpack to build a React app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=0)** - [Instructor] All right, so at this point, we have our index.html file, which is what our React app is going to render into, right?
>
> **[0:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=7)** This div id root and our index.js file, which represents the actual React logic that will be used to render our app.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=19)** So far, as you may have noticed, if you try and load this script, we'll just go over to my React app here and hit refresh.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=27)** You'll see a few errors.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=29)** Well, the first one that you'll see is just this cannot use import statement outside a module thing.
>
> **[0:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=34)** But even if you were to fix that, you would see that it would complain about your usage of these tags, this jsx inside the JavaScript file.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=43)** So the tool for fixing both of those problems is a tool called webpack.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=50)** And what we're going to do here is we're going to install it, set it up, and run it.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=54)** And that should solve all of our problems and actually allow us to have a React application running in our browser.
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=61)** So here's what this is going to look like.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=63)** The first thing we're going to do is install a series of packages here.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=68)** So we'll start off here with installing the webpack tools.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=71)** We're going to say npm install webpack and then webpack-cli and then we're going to install those as dev dependencies because we're only going to be using these for development, right?
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=86)** We don't want to have these in production because that will actually bloat the size of our app.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=92)** So let's run that and that's going to install those tools for us into our project.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=97)** And do make sure that you're running this from inside the React from scratch directory instead of the surrounding directory here, since we're going to be creating several directories here for different demonstrations.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=109)** And once that's finished, we're going to need to install a few other packages from a tool called Babel.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=116)** Because what this is actually going to do is it's going to convert our import syntax into something that the browser can handle as well.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=124)** A lot of browsers still don't support regular modules, JavaScript modules in our JavaScript codes so we're going to need to use Babel to fix that.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=133)** So we'll say npm install @babel/core and then we're going to install something called babel-loader and then @babel/preset-env and then @babel/preset-react.
>
> **[2:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=152)** All right, and we're going to install those as dev dependencies as well, since these are also only for development.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=159)** For production, we're just going to use tools like this to build our app permanently, and we're just going to serve those built files.
>
> **[2:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=167)** Really, these just allow developers to write nice code like this without having to say things like react.create element.
>
> **[2:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=175)** All right, cool.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=176)** So now that we've done all of that, the next thing we're going to need to do is create a file that will tell this webpack tool that we just installed, how to convert our files from a developer-friendly syntax like what we have here into a browser-friendly or production-friendly syntax.
>
> **[3:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=195)** You'll see what that looks like shortly.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=197)** So here's what this is going to look like.
>
> **[3:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=199)** We're going to create a new file in this react from scratch directory, and we're going to call this file webpac.config.js.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=209)** This is basically just going to be a JavaScript file that tells webpack how to convert our files.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=217)** All right, so here's what this is going to look like.
>
> **[3:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=218)** We're going to say const path = require ('path'); and then we're going to say module.exports = and inside here, we're going to start off by saying entry.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=230)** This is where we define the entry point for where webpack is going to start converting things.
>
> **[3:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=234)** That's going to be index.js, and then we're going to say output.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=240)** And this is where we tell webpack where to put the files that it's converted into a browser-friendly or production-friendly syntax.
>
> **[4:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=249)** So we're just going to say output.
>
> **[4:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=251)** We're going to say path: path.resolve(__dirname. 'dist')
>
> **[4:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=260)** Now you can choose a different name for this, if you want to call it something like build or prod or something like that, but we'll just use dist for now.
>
> **[4:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=267)** And then underneath that, we're going to say filename: 'bundle.js.'
>
> **[4:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=274)** This is the ultimate name that webpack will give to all of the compiled or trans compiled, the converted JavaScript files.
>
> **[4:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=284)** So now that we've done that, the last thing we're going to need to do is add mode development here.
>
> **[4:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=290)** And underneath that, we'll have to say module.
>
> **[4:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=294)** And here's where things get a little bit tricky, because this is where we need to specify what are known as rules, which are basically just configuration objects that tell webpack what conversions to use for which files.
>
> **[5:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=308)** So here's what this is going to look like inside an object.
>
> **[5:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=311)** We're going to say test, and this is going to be a regular expression that will denote all JavaScript or jsx files.
>
> **[5:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=318)** So we're going to say /\.(js|jsx)$/,
>
> **[5:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=331)** so this basically just tells webpack that for all files that end in .js or .jsx excluding node modules, right?
>
> **[5:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=342)** So we're going to say /node_modules like so, that will mean that webpack will exclude all of the dependencies that we've installed, like webpack itself or like the Babel-related packages we installed.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=356)** And then we're going to say use, here's where we tell it what conversions or what libraries to use to actually convert these things.
>
> **[6:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=363)** We're going to say loader: 'babel-loader', under that, we're going to say options and then presets.
>
> **[6:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=372)** And here's where we're going to tell it to use @babel/preset-env which will take care of the import and export syntax that we'll want to use.
>
> **[6:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=384)** And then @babel/preset-react, which will take care of the jsx syntax for us.
>
> **[6:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=394)** So that should be all that we need to do there.
>
> **[6:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=396)** Make sure to save this file.
>
> **[6:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=398)** And once you've done that, let's run webpack.
>
> **[6:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=402)** And we can do that actually by going into our package.json file.
>
> **[6:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=406)** We're going to add a script here called build, and this is just going to run the command webpack.
>
> **[6:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=413)** All right, so that's just a simple script that will build our app for us.
>
> **[6:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=418)** So now, all we need to do is we just need to open up a terminal and run npm run build, and that's going to build our files for us.
>
> **[7:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=428)** And what you'll see, you should see output that's all in green and white and maybe yellow here.
>
> **[7:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=434)** You don't want to see any red.
>
> **[7:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=436)** That means something went wrong.
>
> **[7:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=437)** You probably typed something wrong in the webpack config, but now we see that we have this nice dist folder with bundle.js inside of it.
>
> **[7:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=445)** And if you open that up, what you'll see here is that it might be hard to tell, but this is actually our React application, as well as all of its dependencies bundled together so that we can load it nice and easily into our index.html file.
>
> **[7:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=463)** So the only change that we're going to make now is instead of directly loading index.js inside our index.html file, we're going to say that we want to load dist/bundle.js, and that should be all we need to do.
>
> **[7:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=478)** So let's open this index.html file in our browser again.
>
> **[8:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=482)** Sure enough, we see that we have, "This is a React Script!"
>
> **[8:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=487)** And that was actually rendered for us by the index.js file that we created.
>
> **[8:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=493)** Well, a built version of that file.
>
> **[8:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=496)** And furthermore, if you take a look at the network tab now and take a look at this React from scratch thing, what you'll see is that the initial thing that was sent to us here, right?
>
> **[8:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=508)** The initial HTML that was sent to us didn't include this.
>
> **[8:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=512)** This is a React script element.
>
> **[8:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=514)** That was added programmatically by our React script that we wrote, which again, is the main purpose or the main function of React in the first place.
>
> **[8:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-webpack-to-build-a-react-app?u=76281980&t=525)** So anyway, that is how to create and build a simple React project from scratch.

> [!info]- Semantic Content
>
> **File Paths:** index.html (4), index.js (4), bundle.js (2), webpac.config.js (1), package.json (1)
> **Code Keywords:** module (3), let (3), const (1), require (1), this, (1)
> **Prerequisites:** install (9)
> **CLI Commands:** npm (3), make (3), node (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** node_modules (1)
> **Env Vars:** html (1)
> **Tools:** terminal (1)

#### Adding more components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=0)** - [Instructor] All right, so now that we've figured out how to set up a React app from scratch, the last thing that I'd like to show you here before we move on and take a look at some other strategies that we can use in order to get started with our React apps is I'd like to show you how we can add other components into this app.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=19)** It's actually pretty straightforward and probably what you're used to in regular React applications.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=25)** So, what we're going to do here is we're just going to create a new file, and we'll call this one something like, you know what, we'll call this App.js.
>
> **[0:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=33)** And by the way, you may have noticed that I haven't been naming these files that have React code in them as .jsx.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=42)** That's really just a personal choice.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=44)** You can always name them .jsx if you want to, but at the end of the day, it doesn't really matter because webpack is going to convert those for us into files that don't contain any JSX anyway.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=56)** So it doesn't really matter whether you use index.jsx, or App.jsx, or App.js.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=63)** We're just going to say App.js here.
>
> **[1:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=65)** And inside here, we'll just start off by exporting a component.
>
> **[1:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=69)** We'll just say export default function App.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=73)** You can always just use an arrow function too if you want.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=75)** But let's actually add some props to this.
>
> **[1:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=78)** So we'll say something like message.
>
> **[1:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=80)** And then we'll just have this App component say something like return.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=85)** And we'll say that we just want to display maybe an H1 heading that says, Here is a message for you.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=92)** And then we'll display the message inside of there.
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=95)** All right, so this is a pretty simple component, but since it is in a different file, I wanted to show you what'll happen when we build our app.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=105)** So first of all, let's go back to index.js.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=108)** And instead of defining our App component here, we're actually going to import it by saying, import App from './App'.
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=117)** All right, we should be able to do things like this, and we'll just pass message here, equals, and we'll just say something like, "Hey there!
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=127)** You're now using a component from another file."
>
> **[2:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=134)** All right, so in other words, our React app is now a multi-file app.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=138)** So let's see what happens now when we run npm run build again, which by the way, you do need to do every time you make a change to your app in order for changes to take effect.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=149)** There are other ways around this, but they're a little bit complicated to get set up.
>
> **[2:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=153)** So what I'm going to do is just run npm run build.
>
> **[2:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=156)** That should build our app again.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=158)** And what you'll see inside this dist directory is that we still only have a single bundle.js file in there, right?
>
> **[2:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=168)** So basically, what webpack is doing is no matter how many files we have based on our webpack configuration, it's going to put all of those files together into a single bundle.js file that's formatted correctly so that it will run in our browser.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=186)** So let's just go back to our app.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=189)** We're going to hit Refresh.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=191)** And, oops, it looks like I did something wrong there.
>
> **[3:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=192)** Let's go back to this, and I just need to change the App component here.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=197)** I did the wrong thing here.
>
> **[3:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=198)** We should say const App.
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=200)** And then we'll say, export default App.
>
> **[3:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=203)** All right, so that's all we need to do to fix that.
>
> **[3:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=205)** I just got confused with starting off typing function and then just going back and doing an arrow function.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=210)** So let's build our app again, npm run build.
>
> **[3:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=214)** And once that finishes, let's go back to our HTML file in the browser, hit Refresh, and it looks like we have one more error.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=222)** And if you open up the Inspector window, what you'll see in the Console is that it says, React is not defined.
>
> **[3:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=228)** Now, what we have to do in this case, you may have noticed this in other React projects that you've worked on, is whenever we use JSX in a file, when we're using a setup like the one that we currently have with this preset React thing, we actually have to import React up at the top by saying, import React from 'react', right?
>
> **[4:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=249)** Because again, as I said in a previous video, whenever we use JSX, this gets translated to a call to React.createElement.
>
> **[4:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=259)** And if React isn't in the scope there, if we haven't imported it, that's going to give us that error.
>
> **[4:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=264)** So let's try that one more time now that we've imported React like so.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=268)** And notice that in index.js, we've had import React from 'react' as well even though we don't explicitly use that, right?
>
> **[4:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=275)** Notice that it's still highlighted as if we are, because again, this JSX really is using it.
>
> **[4:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=281)** Let's try building our app one last time here.
>
> **[4:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=284)** And once it finishes, we're going to go back to our browser, hit Refresh, and there we go.
>
> **[4:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=290)** It says, "Here is a message for you: Hey there! You're now using a component from another file!"
>
> **[4:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=295)** So that's just something I wanted to show you there.
>
> **[4:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=297)** And actually, one last thing is let's go into our index.html and remove this H1 heading, so that our entire app, everything that you see in the browser is now being rendered by React.
>
> **[5:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=311)** So we can actually just go back to index.js here, and we'll see that that's automatically refreshed that because we just modified the index.html file instead of the index.js or our other React files.
>
> **[5:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=324)** All right, so again, the important thing to remember here is no matter what library or boilerplate generator or framework you're using, really, what we've done here is what's going on behind the scenes.
>
> **[5:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-more-components?u=76281980&t=336)** Obviously, it gets much more complex in things like Next.js, but this forms the foundation for all of that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (4), this, (3), this. (1), return. (1)
> **File Paths:** index.js (4), app.js (3), bundle.js (2), index.html (2), index.jsx (1)
> **Cross-References:** go back to (5), previous video (1)
> **Env Vars:** jsx (4), html (1)
> **CLI Commands:** npm (3), make (1)
> **Definitions:** is a  (3), in other words (1)
> **Prerequisites:** set up (2), setup (1)
> **Code Identifiers:** createelement (1)


### 4. Creating Projects with Vite, Next.js, Remix, and More

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a project with Create React App
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=0)** - [Instructor] All right, so previously we saw the basics of setting up a React app from scratch, but there were a few problems with that, right?
>
> **[0:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=7)** Really the main problem with this was that it was a little bit difficult to set up as well as a little bit difficult to make changes to, right?
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=15)** If we wanted to make changes to the App component, for example, or really any part of our React JavaScript files, we had to actually rebuild the entire application before we would see those changes.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=28)** And there's a lot of other things as well that can cause problems once you try and build complex React applications with this setup.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=35)** So really this was just an exercise to show you what React apps are actually like behind the scenes.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=43)** They're actually fairly straightforward, if a little bit cumbersome to work with.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=47)** So the next thing that we're going to take a look at is a variety of tools that will make this process easier for us.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=54)** So the first tool that we're going to take a look at is something called Create React app.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=59)** And this is what's known as a boilerplate generator, which basically means that it'll write all of this code for us as well as include some scripts behind the scenes to make the development process much easier.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=72)** So let's get started here.
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=74)** What we're going to do is you're going to want to open up a terminal and change directories out of whatever directory was that we created, the React app from scratch inside of.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=85)** So you're going to want to go back into the surrounding directory here, and you should be able to see that by typing pwd, and whatever your surrounding directory is, that should be the last segment there in the path.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=97)** And what we're going to do here is we're going to use the Create React App script in order to make this happen.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=104)** So here's what this is going to look like.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=107)** The first thing that you might want to check on here, just to make sure that everything works for you in the same way that it works for me is, if you've previously used Create React App, which if you've worked with React before, you probably have, you might want to make sure that you have the latest version by uninstalling Create React App globally by saying npm uninstall -g create-react-app, all right?
>
> **[2:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=134)** So if you installed it globally at some point in the past, that will uninstall it for you and it will make sure that the next command that you run uses the latest version.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=144)** So what we're going to do here is we're going to say npx, yes, npx.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=149)** This is used for running scripts like this, create-react-app.
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=154)** And then what we're going to do is we're going to define the name of the directory that we wanted to put this inside of.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=159)** So I'm just going to call this something like cra-react-app.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=164)** All right?
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=165)** So create react app react-app.
>
> **[2:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=166)** You'll see Create React App abbreviated like that sometimes.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=170)** All right, so that's going to run the script and create a new React app with a specific setup inside that directory.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=178)** So it's going to ask us if it's okay to proceed.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=180)** I'm going to say yes.
>
> **[3:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=182)** And notice here too that that's installing the latest version of Create React App.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=186)** You might see a slightly different version of that here, but anyway, this is going to take a minute or two, so I'll just skip ahead.
>
> **[3:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=193)** All right, so once it finishes, what you should see is that you now have this little cra-react-app directory that has a bunch of files inside of it.
>
> **[3:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=203)** In particular, you're going to want to look in the src directory.
>
> **[3:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=206)** And as you'll see, that has index.js, which looks a little bit like what we had before.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=211)** It's doing the same basic thing, rendering the React app inside the root element.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=217)** And if you take a look at some of these other files around here, such as App.js, this includes some new code for another component.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=225)** So this is very similar to what we did before.
>
> **[3:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=228)** And if you want to run this app, what you can do is just open up your terminal, you're going to need to navigate into that cra-react-app directory, and then you're going to say npm run start.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=240)** And that will actually run your application and open it up in a new browser tab.
>
> **[4:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=247)** Okay, and sure enough, we see that is the boilerplate app, right?
>
> **[4:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=252)** The basic application that we can start with for Create React App.
>
> **[4:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=256)** Now, Create React App, as with most of these other tools that we're going to see, includes a lot of very helpful tools.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=263)** Really the most helpful thing in here is the fact that if we make a change to some of this code, if we say something like, Hi Shaun!
>
> **[4:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=271)** Right?
>
> **[4:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=272)** And you can obviously use your own name here.
>
> **[4:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=274)** Well, what we'll see is that without having to rebuild or refresh the app, if we just go back and open this up, sure enough, we'll see that that says Hi Shaun!
>
> **[4:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=283)** Right?
>
> **[4:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=284)** In other words, the changes have taken effect without us having to explicitly rebuild our application.
>
> **[4:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=289)** Cool!
>
> **[4:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=290)** So anyway, now that we've done that, the next thing that we're going to do is, I just want to show you a few other things you can do with these React apps created with the Create React App script.
>
> **[5:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=301)** If you go into package.json, you'll see that there are a few scripts that you can run.
>
> **[5:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=306)** The first one is npm run start, which basically just runs the application.
>
> **[5:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=312)** That's what we just ran there.
>
> **[5:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=313)** But you'll also see npm run build, you would use this for production.
>
> **[5:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=318)** npm run tests, you would use this if you wanted to run tests on the different components in your application, such as if you're doing test-driven development.
>
> **[5:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=326)** And finally, npm run eject.
>
> **[5:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=329)** Now, this last one is pretty interesting, because what it does is it actually will reveal a lot of the complexity that it's hiding behind the scenes, right?
>
> **[5:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=339)** So right now, if you look through all the directories here, you'll notice that while it's maybe a little bit complex, there's certainly a lot that's hidden from view.
>
> **[5:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=347)** For example, there's nothing to do with Webpack here, even though I believe that that's being used behind the scenes.
>
> **[5:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=353)** And that's just because these React scripts things that are being run with these commands are hiding those behind the scenes.
>
> **[6:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=361)** So if you run this eject script, first of all, you can't go back once you do that, so exercise caution with doing that.
>
> **[6:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=368)** But if you run those, that'll actually reveal all of those hidden files and you can make those changes yourself, right?
>
> **[6:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=376)** So from then on, you are the one that has to manage those files, which in some cases you may need to do.
>
> **[6:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-create-react-app?u=76281980&t=382)** So anyway, that is the basics of working with Create React App and using it to create new React applications.

> [!info]- Semantic Content
>
> **CLI Commands:** make (10), npm (6), npx (2)
> **Analogies:** for example (2), such as (2), similar to (1)
> **Definitions:** is a  (1), known as (1), basically means (1), in other words (1)
> **File Paths:** index.js (1), app.js (1), package.json (1)
> **Code Keywords:** let (1), this, (1), finally, (1)
> **Prerequisites:** setup (2), set up (1)
> **Tools:** terminal (2)
> **Exercise Files:** boilerplate (2)

#### Create a project with Vite
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=0)** - [Instructor] Alright, so now that we've seen how to create a React app with the Create React App script, the next thing we're going to do is take a look at how to use another tool called Vite, V-I-T-E.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=12)** You'll hear this pronounced Vite sometimes, but according to the website, it is pronounced Vite, which is the French word for "fast."
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=20)** So really, Vite is a somewhat improved version of Create React App that works for many other types of projects besides just React projects.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=30)** So for example, it works for View, Angular, and so on.
>
> **[0:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=34)** So in order to get started with this, all ya need to do is run the command npm.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=40)** Oh, and by the way, make sure you change directories out of your Create React App directory because we're going to create another separate directory, another separate project, in the root directory here.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=52)** Let's just check that with pwd.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=54)** Yep, sure enough, we're in the root directory.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=57)** So now, we're going to say npm create vite@latest.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=63)** This will run the latest version of this script.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=66)** And the way that this works is it's going to, first of all, install the create-vite library, if you don't already have it.
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=74)** And once it's done that, it's going to ask you a series of questions about the project that you want to create, right?
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=81)** This is a much more in-depth sort of survey than you saw with Create React App.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=87)** So first of all, it's going to ask you for the project name.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=89)** We'll call this something like vite-react-app, alright, to go along with cra-react-app.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=97)** Next thing it's going to ask you is what framework or library you want to use.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=102)** So you can do a Vanilla JavaScript project here, or a View project, or a React project, or Preact, or Lit, or Svelte, or any of those other ones there.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=110)** But I'm just going to select React, okay, and hit Enter.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=114)** And then it's going to ask what variant we want for this project.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=119)** So in other words, do we want to use TypeScript, do we want to use SWC?
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=124)** I'm just going to select regular old JavaScript for this.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=127)** You can select whatever you want though, and feel free to play around with these other options.
>
> **[2:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=132)** Alright, and then, that's just going to create that new project for us.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=136)** Now, notice that this was much faster than creating the Create React App project.
>
> **[2:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=143)** However, part of that's because it didn't actually install those dependencies for us automatically, right?
>
> **[2:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=148)** It basically just copied an entire project with a package.json, containing all of the dependencies for our project.
>
> **[2:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=156)** So what we're going to need to do here is we're going to need to change directories into our Vite app.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=163)** So just say cd vite-react-app.
>
> **[2:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=166)** And then we're going to run npm install, which will install all of those dependencies.
>
> **[2:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=171)** Now, again, this might take a little while because there's quite a few dependencies in there.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=176)** And once it's done, we can run our project saying npm run dev, okay?
>
> **[3:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=182)** So that's going to run the dev script.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=184)** And as you can see, that's going to run this on local host 5173.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=189)** If ya have trouble opening this up in code spaces, what you're going to need to do is go over to Ports.
>
> **[3:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=195)** And you can see our old project, right, the from-scratch project running right here, on port 5500.
>
> **[3:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=202)** Let's actually close that, we'll say Stop Forwarding Port.
>
> **[3:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=205)** And for 5173, all ya need to do is find this forwarded address and click on the little globe icon next to that, alright?
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=213)** That's going to open it up in the browser.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=216)** And sure enough, this is the boilerplate Vite and React application.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=221)** And it's even got this nice little counter button thing to demonstrate how it works.
>
> **[3:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=226)** Now, one of the nice things about Vite, and this React setup that comes along with it, is that things really will update almost instantaneously whenever we make a change.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=238)** So if we go into source here and go into App.jsx, notice that Vite has chosen to use that .jsx extension for all of these files.
>
> **[4:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=248)** If we make a change to one of these things... So let's just find something to change in here.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=253)** This says Edit src/App.jsx, and save to test HMR.
>
> **[4:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=258)** That's something called Hot Module Replacement, which basically is how it automatically takes our changes into account without refreshing the browser.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=268)** We're going to add something like, "Just did!"
>
> **[4:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=272)** Alright, and if we save that file and go back to our Vite app, sure enough, we'll see that that change was automatically incorporated and rendered without us having to do anything, right, without having to rebuild or even refresh the screen.
>
> **[4:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=287)** So anyway, that is how to create a project with Vite.
>
> **[4:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=290)** Feel free to investigate this in much more detail by just going through some of the files that it created, as well as you can take a look at the Vite documentation by going to [vitejs.dev](https://vitejs.dev).
>
> **[5:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-vite?u=76281980&t=302)** So anyway, that is how to create a React project using Vite.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), make (3), find (2), cd (1)
> **Code Keywords:** let (3), this, (1), this. (1), module (1)
> **Prerequisites:** install (4), setup (1)
> **File Paths:** package.json (1), app.jsx (1), src/app.jsx (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** swc (1), hmr (1)
> **URLs:** [vitejs.dev](https://vitejs.dev) (1)
> **Ports:** port 5500 (1)

#### Create a project with Next.js
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=0)** - [Instructor] Alright, so now that we've seen how to use Create React app and Vite to Create React apps, the next library that we're going to look at for this is called Next JS.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=10)** Now Next JS is really a very in-depth and powerful piece of technology, and we'll talk about why that is in more detail shortly.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=20)** But first, let's see how to create a new React app using Next JS.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=25)** So the first thing we're going to do, of course, is change directories back out of our Vite React app directory.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=32)** And now we're going to run Next JS' script to create a new React app.
>
> **[0:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=37)** And that is NPX create dash next dash app at latest, right?
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=44)** At latest, we'll use the latest version of this.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=47)** So, you might have slightly different results than what I have here.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=51)** Let's just hit enter there.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=52)** And that's going to ask us a series of questions as well.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=55)** First of all, it's going to ask us if it's okay to proceed and install the latest version of that.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=59)** I'm going to say yes and then it's going to ask us a series of questions.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=64)** It's going to look pretty similar to what we just did with Vite, right?
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=68)** First of all, it's going to ask what our project's name is.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=71)** We'll just say Next React app, and then it's going to ask us if we want to use TypeScript.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=77)** Now, depending on whether you like using TypeScript as part of React Apps or not, you can say yes or no here just to keep things consistent.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=84)** I'll say no, it's going to ask if we want yes lint, right?
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=88)** That just enforces style in React applications.
>
> **[1:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=91)** So, make sure that all lines end with semicolons, things like that.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=96)** I'm going to say no for that as well, again, just to keep the technologies consistent.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=99)** Then it's going to ask about using Tailwind CSS.
>
> **[1:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=103)** If you haven't heard about this yet, feel free to check it out.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=105)** It's pretty interesting.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=108)** It basically uses much more specific style names or class names to apply styles to elements instead of using Semantic class names.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=116)** But for now I'll say no.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=118)** Then it's going to ask if we want to use a source directory, I'll say no for that as well.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=121)** And then it's going to ask if we want to use App Router since this is recommended, we will say yes.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=127)** And by the way, feel free to read about what all of these are on Next JS's website or feel free to search for Next JS courses in the library.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=135)** Specifically, I have a full stack Next JS course on there, so feel free to check that out if that sounds interesting to you.
>
> **[2:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=141)** And you want to learn more about these.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=142)** But then it's going to ask if we want to customize the default import alias, we're just going to select no for that one.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=149)** And this is going to do something pretty similar to what Create React app did.
>
> **[2:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=153)** It's just going to set up a project for us and install all of the dependencies.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=157)** And once that's finished, we should be able to change directories into that new directory.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=163)** So cd Next React app.
>
> **[2:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=166)** And then we're going to run this by saying, in fact, if you're wondering how you can run any of these, you can just take a look at the package.json file.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=174)** This one in particular, we're going to want to run NPM Run Dev.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=178)** So, we'll say NPM Run Dev, and that will build and run our next application for us.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=185)** So, let's just open that up.
>
> **[3:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=187)** We're going to need to go over to ports and for some reason my code spaces didn't pick up on that.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=191)** So I'm going to say forward a port, we're going to have to forward Port 3000 since that's what that was running on.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=197)** All right, so yep, sure enough, local Host 3000.
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=200)** So there we go.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=201)** It should be forwarded now.
>
> **[3:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=203)** And if we click on the little globe icon, that'll open that up in another tab, and you might have to give it a second for it to get started and render.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=213)** Sure enough, we see the boilerplate code that Next JS has given us, right?
>
> **[3:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=218)** So, we can go in and change this as well.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=220)** So, we see these two list items here.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=223)** Let's go into Next JS.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=225)** We're going to go into app, we're going to go into page.js.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=230)** Next JS, by the way, has a very opinionated format for naming your files that really affects when things are displayed and it affects routing in your app.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=240)** Again, feel free to check out another course if you're interested in learning more about that.
>
> **[4:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=243)** But what we're going to do is we're just going to go down here to these list items.
>
> **[4:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=247)** We will add another list item here, and we'll say profit, all right?
>
> **[4:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=252)** So if we save that file and go back to the tab, we'll see that instantly that has been incorporated into our Next JS application.
>
> **[4:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=264)** All right now, as I said earlier, Next JS includes a variety of differences from some of the other scripts that we've used, such as Create React app and Vite.
>
> **[4:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=274)** In particular, one thing that makes it pretty unique is that it includes a variety of things like server side rendering by default.
>
> **[4:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=283)** That's something that I discuss in much more detail in another course.
>
> **[4:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=286)** The basic idea there is instead of rendering these pages in the client's browser, Next JS will actually pre-render them and send the rendered HTML back to the client.
>
> **[4:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=296)** This is very good for performance as well as for SEO.
>
> **[5:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=300)** So, I'm not going to go too much in depth with that, feel free to check out Next JS' documentation.
>
> **[5:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-next-js?u=76281980&t=305)** If you want to read more or as I already said, feel free to check out some of the courses on Next JS in the library.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), default. (1)
> **Env Vars:** npm (2), npx (1), css (1), html (1), seo (1)
> **CLI Commands:** npm (2), npx (1), make (1), cd (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** package.json (1), page.js (1)
> **Analogies:** similar to (1), such as (1)
> **Ports:** port 3000 (1)
> **Cross-References:** go back to (1)

#### Create a project with Remix
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=0)** - [Instructor] Alright, so the final tool that we're going to take a look at here for creating new React apps is something called Remix.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=8)** Now, Remix is, I would say it's a little bit more similar to Vite or Create React App than it is to Next.JS.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=16)** Next.JS is really more of a batteries included framework, whereas things like Vite and Remix are just meant to help you get a regular React app up and running as quickly as possible.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=29)** So here's how this is going to work in the same way that we've done with the previous tools, we're going to start off by changing directories into our route directory here.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=39)** And now that we've done that, the next thing that we're going to do is we're going to say NPX create-remix@latest.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=49)** Does this look familiar to you?
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=50)** It's pretty much the same thing as what we just used for Next.JS, except obviously it's Create Remix.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=56)** So we're going to hit enter there.
>
> **[0:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=58)** It's going to ask us if we can install the Create remix library.
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=61)** We're going to say yes, and that's going to run for a little while, while it installs the library.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=66)** And then it's going to ask where we want our project to go.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=68)** We're going to call this .slash, that's the path indicating this directory that we're currently in.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=75)** And then we're going to say something like Remix React app.
>
> **[1:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=80)** Then you'll see that it says using Basic Template, there are other templates that you can use here if you want to create a React app that starts off with say, Redux, we'll learn about this in much more detail later on.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=93)** Then it's going to ask if we want to initialize a new Git repository.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=96)** I'm going to say no here just because I already have this Outer directory set up with a Git repo, but you can obviously say yes there.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=104)** If you wanted the project to be saved and managed on Git, we're going to say, install dependencies with NPM.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=110)** I'll say yes, and then it's going to install those dependencies for us.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=116)** And there we go.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=118)** So now we're going to change directories into Remix React app.
>
> **[2:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=122)** Oops, let's try that again. Remix React app.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=124)** And let's just take a look at this thing.
>
> **[2:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=126)** First of all, as with most of the other generators that we've worked with, if we take a look at this Read Me, that'll include much more information about Remix for you.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=136)** So for example, if we want to run the app in development mode, we can just say NPM Run Dev.
>
> **[2:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=141)** So let's give that a try.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=142)** We're going to say NPM Run Dev.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=145)** And as you can see, that'll open up a new React app for us.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=149)** And notice something that this is actually using Vite behind the scenes, right?
>
> **[2:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=155)** So Remix is actually built on top of Vite, or it uses Vite behind the scenes, along with several other tools.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=165)** So what we can do is just go to ports.
>
> **[2:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=167)** We're going to open up this app running here on Port 5 1 7 3, same Port as Vite.
>
> **[2:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=172)** And sure enough, we see that this has a different sort of boilerplate app than what Vite gave us.
>
> **[2:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=179)** And furthermore, if we make the same changes, if we go back here and take a look at the project structure, if we go into maybe Root.TSX notice also that it's automatically added type script here, which is something that Remix does automatically.
>
> **[3:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=195)** It's also added Tailwind CSS automatically for us.
>
> **[3:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=199)** Well, if we take a look at this root.TSX thing, we'll see that this contains the overall layout for the app, which looks very similar to what we created when we created the app from scratch.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=210)** All right, so pretty cool.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=211)** And if we go into routes and then go to Index.TSX, we see that this is the boilerplate code that it gave us.
>
> **[3:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=218)** So let's just make a simple change to one of these things here.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=222)** We'll just go in and say something like, hello, I just made a change.
>
> **[3:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=229)** All right, something like that.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=230)** And if we save this, we should see that change takes effect automatically, and sure enough, it does.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=235)** Hello, I just made a change and let's just go back and change that back there.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=240)** But as you can see, Remix does pretty much the same thing as Vite in that respect, but it also includes a more opinionated file structure for doing things like creating new pages.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/create-a-project-with-remix?u=76281980&t=253)** So again, I'll leave it up to you to read through the remix documentation or look for other remix related content in the library, but that's the basics of creating and running a Remix project here.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3), npm (3), make (2), npx (1)
> **Code Keywords:** let (5), while, (1), this . (1), try. (1), this, (1)
> **Env Vars:** npm (3), tsx (3), npx (1), css (1)
> **File Paths:** next.js (3), root.tsx (2), index.tsx (1)
> **Prerequisites:** install (3), set up (1)
> **Exercise Files:** boilerplate (2), template (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1), similar to (1)


### 5. Creating a Basic Project

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Meet the sample app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=0)** At this point, we've seen how to create React applications from scratch, as well as a number of different tools that can help us set up a React app.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=9)** So the next few things that we're going to take a look at are things that we're going to need a full scale React project in order to demonstrate them on.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=19)** So what we're going to be doing over the course of the next few videos is, we're going to be creating this very simple to-do list application, which even though it is going to be pretty simple, will show us some of the ways that these other tools such as Redux, selectors, Redux, Thunk and so on can be useful.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=39)** So again, this is going to be a pretty straightforward app.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=42)** It's going to allow us to keep track of to-dos.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=44)** So maybe we'll just enter in a new to-do that says something like "Create the Project."
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=52)** Okay.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=53)** And we'll click Create to-do.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=54)** Sure enough, that adds a new to-do to our incomplete section.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=57)** And additionally, we can mark to-dos as completed, and delete them.
>
> **[1:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=62)** So this is the project that we're going to be creating over the course of the next few videos.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/meet-the-sample-app?u=76281980&t=66)** Let's jump right in, and see how to create the project as well as some of the problems that pop up in this project that tools like Redux can help us out with.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1), let (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating the TodoList component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=0)** - [Instructor] So now that we've met the project that we're going to be using in order to demonstrate a lot of these tools that we'll be talking about in this course, let's actually get started and create this application.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=12)** All right, now we could use any of the tools that we saw previously, Create React app, Next.js, Remix, or Vite, or you could actually even use this project that we created from scratch.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=25)** But I'm going to use Vite frankly just because it's the easiest and least opinionated and it's also the one that's recommended currently on React's websites.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=35)** So what I'm going to do here is I'm going to use Vite to create a new React app.
>
> **[0:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=41)** So here's what this is going to look like.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=43)** I'm just going to say "npm create vite@latest" and let's hit Enter here, and that's going to ask us the same few questions.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=53)** The only thing that we're really going to do differently here is for the project name, we'll call this something like todo-list-app, all right?
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=61)** Then, we're going to select React for this.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=63)** We're going to opt out of TypeScript and SWC just by selecting JavaScript.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=68)** All right, and we'll see that that creates this app for us.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=71)** So let's change directories into that todo-list-app.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=75)** And we're going to need to install all of the dependencies with npm install, and that should install all of those for us.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=83)** And once that's finished, we should be able to run our application by saying "npm run dev," all right?
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=90)** So let's just open that up on port 5173, we'll click that little globe icon, and that should show us the Vite + React boilerplate project.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=101)** Cool.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=102)** So what we're going to be doing in this project, as we've already seen, is creating a simple todo list application.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=108)** So the first thing we're going to do in the first few videos is create the three main components for our application, which is going to be a todo list, a todo list item, and a new todo form, right, a form for adding new todos to the list.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=124)** So let's get started here by creating the list itself.
>
> **[2:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=128)** Here's what this is going to look like.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=129)** We're going to say New File, we'll call this TodoList.jsx, right?
>
> **[2:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=135)** In Vite projects, as we've seen, the JSX extension is used versus just plain old JS.
>
> **[2:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=141)** And now what we're going to do is we're going to create our new app by saying "export default," and we'll just create a new function called TodoList.
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=154)** And this is going to take the completed todos, as well as the incomplete todos as props, all right?
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=164)** So essentially, our TodoList is going to be separating the todos into completed and incomplete todos and displaying them in different lists.
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=173)** So here's what that's going to look like.
>
> **[2:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=175)** We're going to, first of all, add an H1 heading up at the top.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=178)** So we'll just say "h1 My Todos."
>
> **[3:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=182)** And then underneath that is where we're going to have our new todo form.
>
> **[3:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=187)** We'll just have a paragraph placeholder there for now.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=190)** We can do that by saying something like "New todo form will go here," all right?
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=197)** And let's actually wrap this whole thing in a div.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=201)** We'll come back to this a little bit later and add some styling to this div, as you'll see, using styled components.
>
> **[3:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=208)** So let's just paste that in there and indent it.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=211)** And now underneath where that new todo form is going to go, we're going to have an H3 heading that says Completed.
>
> **[3:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=218)** This is where the completed todos will go.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=221)** And then under there, we'll have an H3 heading that says Incomplete, and that will have our incomplete todos.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=230)** So basically all we have to do at this point is display our completed todos and incomplete todos and basically pass them onto a new todo list item component.
>
> **[4:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=241)** And that's the next thing that we're going to be creating here.
>
> **[4:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=245)** So we'll come back and actually add the lists themselves.
>
> **[4:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=250)** But for now, let's actually go into the app component.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=253)** And instead of all this boilerplate, which we're just going to delete, we're just going to display the todo list item itself.
>
> **[4:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=261)** So we'll say "TodoList," and that was just automatically imported for me by the IDE.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=268)** We see that that was just imported up above.
>
> **[4:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=270)** We can delete these other things that weren't used.
>
> **[4:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=272)** We'll delete this count and setCount thing, we don't need those anymore, as well as useState.
>
> **[4:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=279)** And really all we're going to do for now is we're just going to say "completedTodos," and we'll actually come up with some fake todos for that shortly.
>
> **[4:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=288)** And then for incompleteTodos, we'll start off by just passing an empty array for both of those.
>
> **[4:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=295)** Cool.
>
> **[4:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=295)** So that's how to create the basic todo list that we're going to be using to demonstrate some of these other tools.
>
> **[5:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolist-component?u=76281980&t=300)** The next thing that we're going to be doing is creating the list item and creating some todos that we can actually display.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (3), this. (1), default, (1), function (1)
> **Code Identifiers:** setcount (1), usestate (1), completedtodos (1), incompletetodos (1)
> **CLI Commands:** npm (3)
> **Env Vars:** swc (1), jsx (1), ide (1)
> **Prerequisites:** install (3)
> **File Paths:** next.js (1), todolist.jsx (1)
> **Exercise Files:** boilerplate (2)
> **Ports:** port 5173 (1)

#### Creating the TodoListItem component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=0)** - [Instructor] All right, so now that we've created our TodoList component, let's create the component that's going to be used for each of the todo items.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=8)** So this is going to be called TodoListItem.jsx.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=14)** And here's what it's going to look like.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=15)** We'll start off by saying export default function and we'll call this TodoListItem.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=22)** And this is going to take a few props.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=24)** The first is going to be the todo, right?
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=26)** The specific todo item that we're displaying.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=30)** And then we're going to have two function props for when the complete button is clicked, right?
>
> **[0:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=37)** There's going to be a button that allows you to mark it as completed and there's going to be another one that allows you to delete the todo so we're going to have two functions for when either of those buttons are clicked, we'll say onCompletedClicked, and onDeleteClicked.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=54)** Cool.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=55)** So now that we have that, here's what this component's going to look like.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=57)** We'll start off by just saying return.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=60)** And this is all going to be inside a div, which we'll style a little bit later in the course.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=66)** So now at the top of this, we're going to have an h3 heading that has the text of the todo.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=70)** So we'll say todo.text.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=73)** And then underneath that, what we're going to do is we're going to say todo.isCompleted.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=81)** And if our todo has already been marked as completed, we're going to display a little paragraph tag that will say complete.
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=88)** Otherwise, we don't want to display anything there.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=90)** So we'll just say todo.isCompleted && complete.
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=95)** And last but not least, what we're going to do is we're going to say todo.isCompleted and we're going to display a delete button if the todo is already complete and a mark is completed button if it isn't.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=110)** So here's what that's going to look like.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=112)** We'll say todo.isCompleted.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=114)** And then we're going to say if it is completed, we'll display a delete button.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=119)** So we'll just say button Delete Item.
>
> **[2:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=122)** And we're going to need to add an onClick method for that button, which we'll call this onDeleteClicked prop.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=130)** So here's what that's going to look like.
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=131)** We'll say onDeleteClicked, and we're going to call this with the text of the todo item, oops, sorry, that should be onClick={onDeleteClicked} and we're going to call that with the todo.text.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=147)** As I said, that'll kind of serve as the unique identifier for this.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=151)** You could add a unique idea if you wanted to, but this is a little bit easier for now.
>
> **[2:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=155)** Here, let me just adjust the indentation there just to make it a little bit more compact.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=160)** Now that we've done that, let's have our mark as completed button.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=164)** So that's going to look like this.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=165)** We're going to say button onClick={onCompletedClicked} and we're going to call that with todo.text as well.
>
> **[2:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=175)** And this button, last but not least, will say Mark as Completed.
>
> **[3:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=182)** Cool.
>
> **[3:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=183)** So that should be all we need to do for each of these TodoListItems, again, it's just going to display the text and depending on whether the todo is completed or not, it's going to display this complete message and one of two buttons.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=197)** And that should be all that we really need to do for this TodoListItem.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=201)** So let's go back to our app.jsx component.
>
> **[3:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=206)** Actually, let's do TodoList first.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=207)** We're going to need to map through all of the completed and incomplete todos and display them in their respective lists.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=215)** So here's what this is going to look like.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=217)** We're going to start off by saying completedTodos.map.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=223)** We're going to map each todo as well as its index like this.
>
> **[3:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=227)** We'll say TodoListItem and that's going to be imported for me automatically up at the top, as you can see, we'll pass the todo like so.
>
> **[3:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=237)** And then we're going to say key={index}.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=240)** We're just going to use the index as the key because we don't really have a unique ID that will do that for us.
>
> **[4:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=247)** Okay, so now that we've done that, the next thing that we're going to do is map the incomplete todos.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=253)** So here's what that's going to look like.
>
> **[4:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=255)** We'll say incompleteTodos.map.
>
> **[4:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=258)** Then we're going to have the todo and the index just like we did for the completed todos.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=263)** And for each of these, oops, here, I need to change these two parentheses so that it'll actually get displayed there.
>
> **[4:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=270)** There we go.
>
> **[4:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=271)** We'll change that one as well.
>
> **[4:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=273)** So now, we're going to say that we want to display a TodoListItem here.
>
> **[4:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=277)** And then we're going to say todo={todo} key={index} just like we did in the completed side of the list.
>
> **[4:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=286)** And that should be all we need to do here besides going into the app.jsx component and creating some of those items.
>
> **[4:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=293)** So we're just going to use the React useState hook to keep track of the completed and incomplete todos.
>
> **[5:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=301)** So let's just import that up at the top by saying import { useState } from 'react'; And now, we're just going to say const {completedTodos, setCompletedTodos} = useState.
>
> **[5:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=316)** We'll fill those in in just a minute here.
>
> **[5:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=318)** And then we'll do the same thing with the incompleteTodos.
>
> **[5:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=321)** const incompleteTodos, setIncompleteTodos = useState and we'll fill that one in as well.
>
> **[5:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=328)** So here's what these are going to look like.
>
> **[5:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=330)** These are just going to be arrays of JavaScript objects.
>
> **[5:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=333)** So each one of these is just going to be text and isCompleted.
>
> **[5:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=338)** So we'll say text.
>
> **[5:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=339)** This one will be take out the garbage and isCompleted.
>
> **[5:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=345)** We'll do true for that one.
>
> **[5:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=348)** The next one here, which is also going to be complete, we'll say text.
>
> **[5:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=353)** Oops, sorry, that should be in an JavaScript object.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=356)** We'll text: 'Make Dinner', we'll say that that one isCompleted true as well.
>
> **[6:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=365)** And then for the incompleteTodos, we're just going to have one of those.
>
> **[6:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=369)** We'll say something like text, this one will be something like 'Paint the House.'
>
> **[6:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=374)** And that one's isCompleted is going to be false.
>
> **[6:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=378)** Now the reason that we're storing these in separate state variables is just to make it much easier to pass them as arguments, but you could store them all in a single state and just filter them if you wanted to.
>
> **[6:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=389)** And later on when we see how to add things like Redux, we'll see a better way of doing this.
>
> **[6:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=394)** But for now, we'll just say completedTodos={completedTodos} and then incompleteTodos={incompleteTodos} And that should be all we have to do.
>
> **[6:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=404)** So let's go back to our browser where we're running our app and oops, it looks like something went wrong there.
>
> **[6:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=410)** Let's just inspect and see what's up.
>
> **[6:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=412)** Oops, it looks like onCompleteClicked is not a function.
>
> **[6:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=416)** And that's because I just made a typo there.
>
> **[7:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=420)** Let's go back to TodoListItem.
>
> **[7:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=422)** This needs to actually be an anonymous function.
>
> **[7:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=424)** So I just forgot to add the little parentheses and arrows there.
>
> **[7:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=428)** So let's try that again.
>
> **[7:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=430)** We're going to go back to Vite plus React and sure enough, we see that we have all of the completed items in our Completed list along with this Delete Item button.
>
> **[7:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=439)** We can't really click that yet because nothing's getting passed to it.
>
> **[7:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=442)** And then we have Incomplete, which has Paint the House and that says Mark as Completed without the little complete message.
>
> **[7:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=450)** What we've done here is we've added a TodoListItem component, and we've incorporated that into the rest of our app as well as adding some todos.
>
> **[7:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=458)** So the last thing we're going to do in the next video is we're going to create a form that will allow us to add new todos.
>
> **[7:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-todolistitem-component?u=76281980&t=466)** So that's what we have coming up next.

> [!info]- Semantic Content
>
> **Code Identifiers:** iscompleted (8), incompletetodos (6), ondeleteclicked (4), completedtodos (4), usestate (4)
> **Code Keywords:** let (10), delete (5), function (4), this. (4), pass (2)
> **Cross-References:** go back to (4), later in (1), in the next (1), coming up (1)
> **File Paths:** app.jsx (2), todolistitem.jsx (1)
> **CLI Commands:** make (3)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating the NewTodoForm component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=0)** - [Instructor] Alright, so now that we have our to-do list and to-do list item components created, let's create the last component that we'll need for our demonstrations, and that's going to be a new to-do form component, which we'll call new to-do form dot JSX.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=17)** Inside here, we're just going to say, export, default, new, and here we'll need to have that be a function.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=23)** New to-do form.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=25)** And this is going to take a prop here called On Create Clicked, which will be called when the user clicks the button saying that they want to create a new to-do list item.
>
> **[0:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=37)** So the way that this is going to be set up is like this.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=40)** We're going to have a div, and inside that div, we'll have an input where the user can enter in the name of the new to-do, or the text for the to-do.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=50)** So for this, we'll have to come back a little bit later and actually add a state variable.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=54)** We'll just say type equals text for now.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=56)** Underneath that, we're just going to have a button that says "Create Todo", and as you may have guessed, this button is going to call this On Create Clicked function up at the top.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=67)** So we'll say button, and then on click, we're going to call.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=72)** Here we go, we're just going to have an anonymous function there.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=75)** We're going to call On Create Clicked with the text inside that input.
>
> **[1:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=80)** We'll have to get that in just a minute, and then we're going to set that text to just an empty string, which we'll also have to come back to shortly.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=90)** Cool.
>
> **[1:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=91)** So that's pretty much all we have to do for our new to-do form, except of course add a use state hook to this.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=98)** So we'll just say import, use state, from react.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=102)** And then down here inside our component, we're going to say const, input text, and set input text equals use state.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=112)** That's going to be an empty string.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=114)** And now, we can set the value of this input here.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=118)** We're going to bind that to the value of this state variable.
>
> **[2:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=122)** And here we're going to put that right after type equals text.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=125)** We're going to say, value equals input text.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=129)** And when this thing is changed, we're going to say on change equals, and we're going to take that event that occurred, and call set input text with the new value inside that input by saying E dot target dot value, and that should be all we need to do there.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=147)** Cool, so now we just need to call On Create Clicked with that input text, and then say, set input text to just an empty string again.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=159)** So we'll reset it to an empty string.
>
> **[2:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=162)** Alright, so now that we've created this new to-do form, and by the way, you'll notice that all of these files have lint errors, which I'm not planning on fixing here, because that's not really relevant to what we're talking about.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=174)** So in order to make these stop showing up, all you need to do is press Command Shift P, and say Settings, JSON.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=186)** Just type that, and you're going to want to open the remote settings.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=190)** And inside here, right up at the top, you can just type ES lint dot enable, and we're going to set that to "false".
>
> **[3:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=198)** And immediately, once you save that, you should see the lint errors go away in all of those things there, right?
>
> **[3:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=204)** They were just complaining that we weren't specifying the prop types, which is a good idea.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=209)** But again, I want to just get going here on this project so I'm not going to spend too much time adding those prop types.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=215)** Cool.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=216)** So anyway, the last thing that we're going to do here now is add the new to-do form to our to-do list.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=222)** So we're going to replace this paragraph tag here with the new to-do form, which was just automatically imported for me by my IDE.
>
> **[3:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=231)** So now we should be able to go back and take a look at our app running in the browser.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=235)** And yep, we have this nice little Create Todo form right there that will allow us to add a new to-do list item.
>
> **[4:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=242)** Alright, now we haven't hooked all of this stuff up yet.
>
> **[4:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=245)** What we're going to need to do is actually put the app together so that when these buttons are clicked, the items are deleted, or marked as complete.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-the-newtodoform-component?u=76281980&t=253)** And when this create to do button is clicked, it actually creates a new to do, and that's what we're going to do next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this. (2), let (1), export, (1), default, (1)
> **Env Vars:** jsx (1), json (1), ide (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Putting the app together
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=0)** - [Instructor] All right, so now that we've created these three main components for our test application, let's just hook them all up.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=6)** And the reason why I wanted to do all of this and demonstrate all of this for you is so A, that you'd have a better idea of how this app is put together.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=15)** It's a pretty simple app but still it helps, and B, so that you could appreciate how much easier the Redux Library, which we're going to talk about next, makes this for us.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=27)** So here's what this is going to look like.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=29)** First of all, we're going to need to make it so that clicking the buttons on the to-do list items actually marks these to-do list items as complete.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=38)** And in order to make this work, what we're actually going to have to do is allow those events to sort of bubble up through our to-do list and into our app component.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=50)** Now this is pretty inconvenient and again, that's the point, right?
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=54)** I wanted to show you how inconvenient this is, and it really only gets more inconvenient this kind of thing as you get into more complex applications.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=63)** But here's what this is going to look like because our to-do list items have these two props onCompletedClicked and onDeleteClicked, we're going to have to go into our to-do list component and add those.
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=74)** So we'll say onCompletedClicked and then we're going to have to say onDeleteClicked.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=81)** And same thing down here for the incomplete to-dos, we're going to have to say onCompletedClicked and onDeleteClicked.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=89)** And as a matter of fact, since we know that these are going to be incomplete, we don't need the onDeleteClicked here.
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=95)** So we can actually delete that here, and we don't need the onCompletedClicked for the completed to-dos because we know that that button isn't going to be visible.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=105)** But still we're going to have to add those same two props to this to-do list component by saying onCompletedClicked and onDeleteClicked.
>
> **[1:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=115)** And then we're going to have to basically pass those through and say onDeleteClicked for onDeleteClicked for the to-do list item and onCompletedClicked for onCompletedClicked.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=127)** So this is something known as props drilling, right?
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=131)** Where we have the same prop that's basically just getting passed straight through a component like this one from its parent.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=138)** So let's go into our app component now and what we're going to do is we're going to have to subscribe to those events here and make them affect the corresponding states here.
>
> **[2:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=150)** So here's what this is going to look like.
>
> **[2:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=152)** We're going to have to say onCompletedClicked, and we're going to have to do something there, and then we're going to have to have onDeleteClicked, and we're going to have to have a function for that as well.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=163)** So here's what this is going to look like.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=165)** We're going to say function, and we'll have to say something like markAsComplete, and this is going to take the to do text.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=174)** So we'll implement that in just a minute and then we're going to say function and this one's going to be delete, and that's going to, well here, we'll have to call this delete to do there and that'll take the text of the to do.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=186)** And here let's just call this Mark to do as complete and now we're going to have to actually pass these things through.
>
> **[3:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=192)** So onCompletedClicked, we want to mark it to do as complete onDeleteClicked, we're going to want to delete a to-do.
>
> **[3:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=199)** And now what we're going to have to do is implement those things and modify the state accordingly.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=207)** So here's what this is going to look like for Mark to do is complete.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=209)** We're going to have to find the to-do with that text.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=215)** So here's what this is going to look like.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=216)** We'll say set incomplete to-dos, and we're actually going to filter the to-dos out, we're going to say to-dos or rather incomplete to-dos.filter.
>
> **[3:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=226)** And we're going to want to keep only to-dos whose text does not match the text argument.
>
> **[3:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=234)** And then to move it into complete to-dos, we're going to say set completed to-dos to completed to-dos.
>
> **[4:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=242)** In fact we'll just use a spread operator there completed to-dos and the new to-do that we just removed from there.
>
> **[4:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=248)** So actually let's just say incomplete to-dos and then we'll say .find, and we're going to find the todo whose text is equal to the text argument.
>
> **[4:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=261)** So that's how that's going to work there.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=263)** So for deleting the to-do, we're going to have to just remove that from Incomplete to-dos, or from completed to-dos rather since those are the only ones that we'll be able to delete.
>
> **[4:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=273)** So here's what that's going to look like.
>
> **[4:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=275)** We're going to say, in fact here we can just copy this set, incomplete to-dos and we'll change that to set completed to-dos.
>
> **[4:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=284)** And now this is going to be completed to-dos.filter and we're going to remove that with that text from the state variable.
>
> **[4:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=294)** Cool.
>
> **[4:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=295)** So now that we've done that, let's go in, and we're going to need to make our new to-do form actually do something when we create a new to-Do.
>
> **[5:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=304)** So again, we're going to need to do a little bit of prop drilling here.
>
> **[5:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=307)** We're going to need to add this to our to-do list component.
>
> **[5:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=309)** So we'll say on, and what do we call that onCreateClicked.
>
> **[5:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=315)** So we'll say onCreateClicked, and then that's just going to be passed to new to-do form, we'll say onCreateClicked equals onCreateClicked.
>
> **[5:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=323)** And now back up in our app component, we're going to have to do something with that.
>
> **[5:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=329)** We're going to have to say after onDeleteClicked, we'll say onCreateClicked.
>
> **[5:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=334)** And we're going to need to add a new function that will actually do that by saying function create to do.
>
> **[5:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=340)** That's going to take the text that the user entered into that input and we're going to say set incomplete to-dos and we'll add that new to-do onto there by saying dot dot dot incomplete to-dos, and we'll just create a new to-do here whose text is equal to that text argument and whose is complete property is equal to false.
>
> **[6:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=363)** All right, so that's how we're going to do that.
>
> **[6:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=366)** Let's just pass this now to onCreateClicked.
>
> **[6:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=367)** We'll say create to do, and that should be all that we need to do there.
>
> **[6:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=372)** All right, so let's test this out.
>
> **[6:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=374)** Let's just make sure our app is running.
>
> **[6:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=375)** It looks like mine stopped running for some reason.
>
> **[6:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=377)** So there we go, we'll visit that port.
>
> **[6:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=379)** We're just going to open that back up again in another tab.
>
> **[6:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=382)** And what we should see here is that sure enough, we have all of our to-dos.
>
> **[6:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=387)** So let's try creating a to-do, we'll just say something and click create to do.
>
> **[6:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=391)** Sure enough that adds that to the list here.
>
> **[6:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=394)** Let's say Mark is complete, it looks like that works and let's try deleting an item.
>
> **[6:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=399)** Nope, it looks like that one doesn't work for some reason.
>
> **[6:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=401)** And also it looks like Mark is completed.
>
> **[6:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=404)** That should be changed to delete items.
>
> **[6:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=406)** So we're actually going to have to go back into here and make a few changes.
>
> **[6:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=410)** So let's just, oh here, what we actually need to do is when we mark it to do is complete, we need to make sure that we add is completed true to that to do.
>
> **[7:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=420)** So here's what that's going to look like.
>
> **[7:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=422)** We'll just say we'll have an object here, and we'll use a spread operator there.
>
> **[7:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=426)** It's a little bit messy, but it'll work.
>
> **[7:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=428)** And then we'll say is completed, set that to true like so, and deleting the to-do we just need to change this completed to completed to-dos?
>
> **[7:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=436)** I'm not sure why I just said completed there, but let's give this a try again.
>
> **[7:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=441)** We're going to go back to our app, we'll try clicking delete item now and sure enough that works and let's just refresh it and try marking something as completed.
>
> **[7:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=449)** It looks like sure enough, that changes the is completed status of that to do.
>
> **[7:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=454)** Cool.
>
> **[7:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=454)** So anyway, that is how to create this app.
>
> **[7:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=457)** And the last thing I want to do is just really highlight how complicated this props drilling can make our applications, right?
>
> **[7:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=465)** If we have a fairly deeply nested react application where we have components inside components inside components, having a lot of props drilling like this where you know the same prop or the same function is passed through four or five or six levels can really make our app very difficult to work with.
>
> **[8:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=485)** Since inside any component, you won't actually know where that prop begins and ends or who needs that prop.
>
> **[8:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=492)** So as you'll see in the next section, Redux can really help us mitigate this problem by making it so that each component can have direct access and make changes to the state.
>
> **[8:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=506)** So just keep an eye out for that in the next section.
>
> **[8:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/putting-the-app-together?u=76281980&t=509)** But that is our completed app that we'll be using for our demonstrations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), delete (7), function (6), pass (3)
> **Code Identifiers:** ondeleteclicked (10), oncompletedclicked (9), oncreateclicked (6), markascomplete (1)
> **CLI Commands:** make (10), find (3)
> **Cross-References:** in the next (2), go back to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 6. Adding Redux

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why do we need Redux?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=0)** - [Instructor] All right, so now that we've put together a fairly straightforward React application that's already starting to show signs of needing some of these ecosystem tools in order to help it work a little bit more smoothly and make it more maintainable, let's take a look at the first tool for state management in React applications, which is called Redux.
>
> **[0:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=21)** Now, we're going to talk specifically about why we need this tool in this video.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=27)** So really, the main reason why Redux can be so helpful in React applications is frankly just because state management for our React applications as they get larger and more complex is very difficult, right?
>
> **[0:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=41)** Mainly this becomes difficult as we've seen when we need to start sharing data between our components.
>
> **[0:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=48)** And usually what this leads to is something known as props drilling, which again, we've already seen.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=55)** Props drilling basically just refers to when you have multiple components, right?
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=61)** Component A displays component B, displays component C.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=64)** And component B is stuck passing props back and forth between those two components, right?
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=70)** And this is something that happens very frequently as our React apps get more complex.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=76)** Now, one way that many people try and solve this.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=79)** This is a question that I get very frequently about Redux, is they use React context to basically just hold and provide their entire application state to any component that needs it.
>
> **[1:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=94)** This leads more often than not to chaos since having this large unrestricted global state, right?
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=101)** In other words, a global state that any component can make any change it wants to, that really makes your React application very difficult to maintain, and it really can cause a lot of bugs in your React application.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=116)** So, what we need here is a solution.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=118)** And that solution is basically a global state plus some strict rules governing how components can make changes to that state.
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=131)** And that is where Redux comes in.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=133)** What you see here is kind of the high level conceptual equation of what Redux is.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=139)** Redux combines a global state with strict rules for interacting with that state.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux?u=76281980&t=144)** And as you'll see, this can really make the state management in our larger, more complex React applications much easier.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1), known as (1), in other words (1)
> **CLI Commands:** make (4)
> **Code Keywords:** let (1), this. (1)
> **Speakers:** - [instructor] (1)

#### How does Redux work?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=0)** - [Instructor] All right, so now that we're a little bit more familiar with what Redux does and why it's helpful in a React application, let's discuss the basics of how Redux works.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=10)** Now we're going to see this in code shortly, but I just want to get the basic concepts down before we move on because I think it'll make it a lot easier to understand how everything fits together.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=20)** Now, the first thing to understand is that Redux provides us with several different tools that can be combined in order to manage the state of our React applications.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=32)** The first of these is really the central concept here, and that is something called the Redux store.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=39)** This is the centralized global state for our application.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=44)** And because it's global, what this means is that any component can access any value in this store.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=54)** However, if a component wants to make a change to the Redux store, it can't do that directly, right?
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=60)** So the Redux store cannot be modified directly, which makes the difference between a global state being just total chaos and a global state actually being a very useful and maintainable way of managing our application state.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=76)** Now, the way that components can actually make changes to this Redux store is by dispatching something called Redux actions.
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=86)** These actions basically just define all of the things that can occur in our application, right, that just give names to all of those possible changes.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=97)** And as we'll see, this makes it much easier to keep track of what's going on in our application.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=104)** Now, the key part here that brings these actions, which just define what can happen in our application, together with the Redux store, which is our application's data, are something called reducers.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=118)** And what these do is they give us a place to define how the state in the Redux store should change when a specific action happens, right?
>
> **[2:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=130)** So just to give you a simple example, if we're building an e-commerce application, we might say that when an add to cart action happens, we want the Redux store to have that new item inside the user's cart, right?
>
> **[2:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=146)** That's sort of what that logic and reducers looks like.
>
> **[2:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=150)** All right, now there's one thing when working with Redux that is especially important to remember, and I've already mentioned it here, but I'll say it again because it's that important.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=160)** That is that components can only change the state by triggering actions.
>
> **[2:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=167)** So components can't just take the Redux store and modify it in whatever ways they want.
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=173)** They can only change the state by triggering or dispatching redux actions.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=180)** Now, what this all leads to is something called a unidirectional data flow.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=186)** Basically what this flow looks like is this, when something happens in our application, right, a user clicks a button, let's say, a component will trigger an action, letting Redux know that something important has happened, right?
>
> **[3:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=202)** Something has happened that should change the global state of our application.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=207)** Now, when that action is triggered, the next thing that happens is that the reducers that we define determine what changes should be made to the Redux store based on the action that just occurred.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=221)** All right, now once our reducers have determined what changes should be made, the next thing that happens is the store is updated, and finally our components receive that updated state and they will re-render to display the updated application data.
>
> **[3:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=239)** And from then on, it's just sort of a repeat of this process, right?
>
> **[4:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=243)** The user will interact with our application in other ways, which will cause other actions to be triggered.
>
> **[4:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=249)** The reducers will again determine what should happen to the store.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=253)** The store is updated and the components receive those updates.
>
> **[4:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=256)** All right, so that's the basic flow of how state management works in a React application with Redux.
>
> **[4:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-work?u=76281980&t=262)** So the next thing that we're going to see here is how to actually add Redux to our React application and how to use it to manage our to-do list application's state.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (2), this, (1)
> **Speakers:** - [instructor] (1)

#### Adding Redux to a React app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=0)** - [Instructor] All right, so now that we've learned a little bit more about Redux and the basics of how it works, let's jump in and see how to add Redux to a React app.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=9)** So, we're going to be adding this thing to our todo-list application that we set up previously.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=16)** And here's what this is going to look like.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=17)** We're going to start off by installing some things into our todo-list application.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=22)** So make sure you change directories into there if you're not already there.
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=26)** You can check this again with pwd.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=30)** And once we're in there, what we're going to do is we're going to start off by installing a few necessary packages.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=38)** So the first one here, we're going to say npm install, is called @reduxjs/toolkit.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=47)** This provides just the basic tools, functions, things like that for working with Redux specifically.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=54)** And in addition to that, we have to install another library called react-redux, which makes Redux play a little bit more nicely with React.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=63)** You'll see how these two things interact very shortly, but let's just install both of those packages, and once that's done, what we're going to do is we're going to start off by opening up our main.jsx file.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=77)** This is the main entry point for our React application here.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=81)** And the first thing that we're going to do is start off by creating something called a Redux store.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=87)** We already talked about this.
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=88)** This basically serves as sort of the in-memory database or single source of truth for our application.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=96)** So here's what this is going to look like.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=98)** We're going to start off by just creating a very simple store.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=102)** In fact, this isn't really going to have anything in it yet.
>
> **[1:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=106)** So here's what this is going to look like.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=107)** We'll start off right underneath React, the React imports there.
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=111)** We're going to say import configureStore from, and we're going to import that from the reduxjs/toolkit package.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=121)** And that should be pretty much all we have to do right now.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=124)** Let's just create a store here by saying const store = and then we're going to call configureStore.
>
> **[2:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=132)** And for now we're just going to pass an empty object to it, right?
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=136)** Basically what we're going to be able to do here is when we have different parts of our application that we want to store the state for, we're going to put them inside of that object or add them to that object as properties.
>
> **[2:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=150)** And that's going to basically define the arrangement of our store behind the scenes.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=157)** So now that we have that, the next thing that we're going to do is we have to make sure that our React components can easily access and, well, dispatch actions to this store.
>
> **[2:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=169)** So this is where the react-redux package comes in.
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=173)** We're going to say import, and we're going to import something called Provider from react-redux.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=180)** And basically all we have to do here is wrap our application in this Provider thing and pass a store prop, which is going to be the store that we created there.
>
> **[3:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=192)** And then we need to wrap our application in that Provider thing, okay?
>
> **[3:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=196)** So again, what this is going to do is it's going to allow any components that are inside this Provider thing, and therefore inside this app thing as well, it's going to allow them to very quickly and easily access and modify the store by dispatching actions, right?
>
> **[3:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=214)** We'll see a little bit later on what special hooks we can use for this.
>
> **[3:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=218)** Well, that's pretty much all we have to do for now.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=220)** So let's just give this thing a try.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=223)** We're going to run our application here by saying npm run dev.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=230)** And let's just check by opening this thing up in a browser, if you don't already have it open.
>
> **[3:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=234)** We're going to check to make sure that we don't have any errors from this setup.
>
> **[3:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=239)** And if that's true, right, if we don't have any errors, then that means we can move on and start implementing things.
>
> **[4:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=245)** And oops, it looks like something didn't work.
>
> **[4:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=247)** And if we open up the console here, we'll see that that says that we need a reducer argument.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=253)** So that is just because if we go back here, instead of just having an empty object, what we actually need to do is say reducer:, and that can be an empty object there.
>
> **[4:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=265)** So let's just save this and we're going to go back to this and we should see, if we hit refresh, that our todo list application shows up and we no longer have any of those errors there.
>
> **[4:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=277)** All right, we'll see that we still have one error here saying Store does not have a valid reducer, and that's because we have yet to actually create a reducer for our application, which is what we're going to do in the next few videos.
>
> **[4:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-redux-to-a-react-app?u=76281980&t=290)** So anyway, that is the basics of setting up a React application with Redux.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), pass (2), from, (1), const (1)
> **CLI Commands:** make (3), npm (2)
> **Prerequisites:** install (3), set up (1), setup (1)
> **Code Identifiers:** configurestore (2)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** main.jsx (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Creating Redux actions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=0)** - [Instructor] All right, well, now that we've added Redux to our React application, the next thing that we have to ask ourselves is, what specific actions do we want to be in our application that will cause our application's data to change in some way, right?
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=17)** Well, as a matter of fact, we already know this.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=19)** If we go take a look at our app here, we know that it's possible for users to create to-dos.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=25)** So that would be a good action there.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=27)** We know that it's possible for users to delete to-dos by clicking this Delete Item thing.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=32)** And we also know that it's possible for users to mark to-dos as completed by clicking this button.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=38)** So really, those three actions form the entire range of possibilities in our to-do list application.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=47)** Obviously, in more complex applications, there are many more actions, but as I said a little bit earlier, this is one of the most important features of Redux is that it allows us to define specifically what can possibly happen in our application and how our applications data should change accordingly when each thing happens, right?
>
> **[1:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=69)** We're not leaving this up to chance anymore.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=72)** So here's what this is going to look like.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=73)** We're going to get started by creating a few actions in here and really with more recent versions of Redux, you don't need to do this quite as explicitly as we used to.
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=86)** So here's what this is going to look like.
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=88)** Let's actually start off by creating a separate file.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=92)** We'll call this todosSlice, you'll see why we're calling it that shortly, and then we're going to say .jsx.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=99)** And actually, we can just call this .js, because it's not going to have any real React JSX inside of it.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=107)** So now that we've done this, what we're going to do is we're going to start off by importing a few things from the Redux JS toolkit.
>
> **[1:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=113)** We're going to say import { createSlice } from '@reduxjs/toolkit'.
>
> **[2:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=120)** Actually, it looks like we only have to import one thing.
>
> **[2:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=123)** So now that we have that, here's what this is going to look like.
>
> **[2:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=125)** We're going to say const todosSlice =, and then we're going to use that createSlice function to create something called a slice of a Redux resource.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=138)** Basically, a slice just represents the entire range of different pieces that are associated with a resource in Redux.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=147)** So reducers, actions, things like that.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=149)** You'll see exactly how this works shortly.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=151)** But here's what this is going to look like.
>
> **[2:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=153)** We're going to, first of all have to give this a name, which we'll just call todos.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=157)** And then we're going to say initialState, and here's where we get to define the initial state of the to-dos in our application.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=165)** Anyway, what we're going to do is we're just going to say value, and that's going to be just an empty array for now.
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=173)** All right, so now that we have that, the next thing that we have to do is decide how this todos resource can be affected by the rest of our application, right?
>
> **[3:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=184)** This is where we define our actions, and somewhat confusingly, we're going to call this reducers here.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=191)** What this is going to be is an object with a few functions inside of it that represent the different actions that can occur that will change this piece of the state.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=201)** So here's what this is going to look like.
>
> **[3:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=203)** We're going to say createTodo, all right?
>
> **[3:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=206)** And for now we're going to do something a little bit strange.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=209)** We're just going to say state => state as an arrow function.
>
> **[3:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=212)** Basically, this just means that we're not changing this state at all.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=216)** And then we're going to say, markAsCompleted, and then we're just going to say state => state for that as well.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=223)** And finally, the last action that's possible in our application is going to be to delete a to-do.
>
> **[3:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=229)** So we'll just say deleteTodo.
>
> **[3:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=233)** And actually we'll rename markAsCompleted to markTodoAsCompleted, just to have a more consistent naming scheme.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=238)** And then we're going to say state => state again.
>
> **[4:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=241)** Cool, so now that we have those three actions, the next thing that we're going to have to ask ourselves is how we want each of these actions to actually affect the state of the to-dos in our application.
>
> **[4:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-redux-actions?u=76281980&t=254)** And that's what we're going to take a look at next.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), function (2), this. (1), let (1), this . (1)
> **Code Identifiers:** todosslice (2), createslice (2), markascompleted (2), initialstate (1), createtodo (1)
> **Env Vars:** jsx (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Creating reducers
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=0)** - [Instructor] All right, so now that we know exactly what can happen in our application with these three actions that we've created, the next thing that we're going to need to do is define how we want each of those actions to affect the todos data in our application.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=17)** So here's what this is going to look like.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=18)** For each of these actions, we're going to have to expand this function a little bit more, so that we actually make the changes that are necessary to the current state.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=29)** Now, one thing that's important to know about Redux is that this state is actually immutable, but because it uses a library behind the scenes called Immer, I-M-M-E-R, it actually won't modify the state behind the scenes.
>
> **[0:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=48)** It'll create a copy and Redux will take care of the rest.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=51)** That's just a little detail to know.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=53)** So the first thing that we're going to do here is define what we want to happen when we add a new todo, right?
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=61)** When we create a todo.
>
> **[1:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=62)** Well, in this case, what we're going to want to do is add a new todo to this state's value property with things like the text property and the isCompleted property.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=75)** So the easiest way to do this, for now, let's just ignore the fact that we're going to want to get the text from the input that the user enters text into.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=83)** For now, we're just going to say state.value =, and then what we're going to want to do is basically just take the current state value.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=93)** We're going to say ...state.value.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=96)** And then we'll add a new todo onto there by saying, text: 'New Todo'.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=102)** And then we'll say something like isCompleted, and that'll be false.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=107)** All right.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=108)** So that's the basic idea of how we want to define these things.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=112)** Basically, we just need to say how we want the todo state to change for each of these occurrences, right?
>
> **[1:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=119)** Each of these actions.
>
> **[2:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=120)** So that's how we would create a todo.
>
> **[2:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=122)** We'll see again a little bit later on how to actually pass arguments to this and be able to specify the text for the todo list.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=130)** Let's talk about marking a todo as completed, right?
>
> **[2:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=132)** What this is going to look like is we're just going to want to find a todo in the state, and we're going to want to modify it.
>
> **[2:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=141)** So here's what this is going to look like.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=142)** We're going to say state, well here, in fact, let's start off by finding the todo.
>
> **[2:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=146)** We'll say something like todo = state.value.find.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=151)** And we're going to want to find the todo by an ID property.
>
> **[2:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=156)** For now, I'll just define that as just a simple constant here.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=160)** But just like with our createTodo action, we're going to want to be able to pass this as an argument later on, which I'll show you how to do, but for now, we'll just do something like text, and we'll just have this say 'New Todo' there just so that it matches the one above.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=176)** And now we just need to find the corresponding todo from state.value and mark it as completed.
>
> **[3:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=183)** So here's what that's going to look like.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=184)** We'll just call it t.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=185)** We'll say t.text is equal to that text variable there that we're going to convert to an argument later.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=191)** And now what we're going to do is we're just going to say todo.isCompleted, and set that to true.
>
> **[3:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=198)** Now again, we're modifying this here, apparently, but what's actually going on behind the scenes is Redux is taking that modified version and it's basically replacing the old state with it.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=211)** So now that we've done that, let's just implement deleteTodo real quick.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=215)** Again with this one, we're going to need the text in order to make this work.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=220)** We'll learn to pass that as an argument a little bit later with our actions as we trigger them.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=225)** But for now, what this is going to look like, we'll just say const text = 'New Todo'.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=230)** And then we'll say state.value = state.value.filter.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=235)** And we're just going to filter out all of the todos whose text matches that text by saying t.text !== text.
>
> **[4:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=245)** That will remove those todos from the state and reassign them to state.value.
>
> **[4:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=251)** So that should be all we need to do there.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=253)** Let's make sure to add another comma.
>
> **[4:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=254)** And those are going to be the reducers, right?
>
> **[4:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-reducers?u=76281980&t=258)** The logic that tells Redux how we want the todos data to change when each of these actions is triggered.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (3), function (1), case, (1), this, (1)
> **CLI Commands:** find (4), make (3)
> **Code Identifiers:** iscompleted (3), createtodo (1), deletetodo (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Loading data from the store
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=0)** - [Instructor] All right, so at this point, we have the basic actions and reducers set up for our to-dos.
>
> **[0:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=7)** So let's see how we can actually add these, right?
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=10)** Incorporate redux into the components that we created previously.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=14)** So the first thing that we're going to do is now that we've already added this provider thing to main.jsx, we're going to go back to some of the components that we've created, such as new to-do form, to-do list, and to-do list item.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=29)** And see how we can incorporate Redux into these.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=32)** So the first thing that we're going to do here is if we go into our to-do list.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=38)** Remember that what we had to do previously was keep track of all of the completed and incomplete to-dos up in our app component here.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=47)** And basically pass those down to our to-do list component.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=51)** However, because we have Redux now, what we can do is we can actually make those to-dos accessible from anywhere.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=59)** Now, the actual decision behind this is going to depend on some architectural decisions that are beyond the scope of this course.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=66)** But what we're going to do here, just for the sake of demonstration, is we're going to add those to-dos, right in our to-do list.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=76)** All right, so here's what this is going to look like.
>
> **[1:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=78)** What we're going to do is we're going to remove the completed and incomplete to-dos from the props list for our to-do list component.
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=86)** And we're actually going to get these from Redux instead.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=90)** So here's what this is going to look like.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=92)** First of all, we're going to need to take that reducer that we set up, or that slice rather.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=97)** So let's take a look at to-dos slice here.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=101)** We're going to need to export that by saying export const todosSlice.
>
> **[1:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=106)** And then we're going to need to make sure that our store that we're configuring here and passing to this provider actually gets a hold of that.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=114)** So here's what that's going to look like.
>
> **[1:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=116)** Inside this reducer object, we're going to say to-dos, and then we're going to need to import that slice that we just created there by saying import to-dos slice from to-do slice.js.
>
> **[2:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=132)** All right, now you actually don't need that JS on the end there.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=135)** Now that we have that, we're going to say to-dos to-dos slice.reducer.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=142)** Alright, so what that's going to do is that's basically going to take the logic that we just defined in that file and use it to configure this store.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=151)** Now what that means is if we go to to-do list now, we should be able to access the value of the to-dos in the store by saying, and here we're going to actually use a custom React hook provided for us by the React Redux Library.
>
> **[2:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=169)** So we're going to say import use selector from React Redux.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=176)** All right, so now that we have that, here's what this going to look like.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=180)** We're going to say const to-dos equals, and then we're going to get all of the to-dos out of the Redux store by saying use selector.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=191)** And here's how this works.
>
> **[3:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=192)** We basically get to refer to the entire state here, and say state.todos.value, right?
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=200)** So in other words, we're referring to the exact part of the Redux store that we want to access there.
>
> **[3:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=206)** And we'll talk about these selectors in much more detail a little bit later in the course.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=210)** But that's going to give us our to-dos.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=213)** And now if we want to split those into completed to-dos and incomplete to-dos, we would simply have to filter those ourselves.
>
> **[3:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=219)** There are other ways that we'll see how to do this a little bit later on.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=223)** But for now, I'm actually just going to pass all of the to-dos to both of these.
>
> **[3:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=227)** It's a little bit of a clumsy solution for now.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=230)** We will come back and fix this later, but we'll just say todos.map and then todos.map.
>
> **[3:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=237)** Cool, so at this point, our to-do list is loading its to-dos from the Redux store instead of just storing them in a regular temporary state hook.
>
> **[4:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=250)** So if we go back to our application, we should see that we don't actually have any to-dos displayed because the Redux store was empty.
>
> **[4:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=258)** So what I'm actually going to do for now, just to make this a little bit simpler, is I'm going to go into to-do Slice, and for the initial state I'm just going to put in a just sort of a dummy to-do list item by saying text, will say something like, go to the store, no pun intended there.
>
> **[4:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=278)** And then we'll say is completed.
>
> **[4:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=281)** True, cool.
>
> **[4:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=282)** So if we go back now and take a look at our application, we'll see that sure enough, our to-do list is loading those to-dos from the store.
>
> **[4:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=293)** So the next thing that we're going to have to do is make it so that when we click on buttons, like create to-do, or delete item, or mark as complete, that will actually change the value in the store.
>
> **[5:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-from-the-store?u=76281980&t=305)** That's what we're going to take a look at next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), const (2), delete (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2), later in (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** set up (2), configure (1)
> **File Paths:** main.jsx (1), slice.js (1)
> **Code Identifiers:** todosslice (1)
> **Definitions:** in other words (1)

#### Dispatching Redux actions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=0)** - [Instructor] Alright, so at this point, our to-do list is loading its data from Redux, but we still need to make it so that whenever something happens in the application, right, whenever a button is clicked, for example, the Redux store is updated and we see those changes updated in the interface.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=20)** Now, Redux takes care of most of this for us.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=23)** All we really have to do is dispatch actions from inside our components.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=28)** So here's what this is going to look like, and just as a reminder, in the previous chapter, I talked about how this kind of props drilling, right, having the same prop that's passed down through multiple components, right?
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=42)** We have onCompleteClicked passed down from app.jsx, right?
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=47)** If you take a look here, we see that that's getting passed down here and then it's getting passed all the way down to the TodoList item, which is the one that actually calls it, right?
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=57)** This is really a very difficult thing to manage over time and it can really make a mess of your React applications if you're not careful.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=66)** So Redux, here's how Redux is going to allow us to get rid of this.
>
> **[1:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=69)** What we're going to do is go all the way down to our leaf component, right?
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=74)** The lowest level component our TodoList item, and we're going to say import (useDispatch) from react-redux.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=84)** Now what this useDispatch thing is, is it's a custom hook provided by the React Redux package that allows us to let Redux know that some event is occurring, right?
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=98)** That some action is occurring.
>
> **[1:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=100)** And here's how we're going to do that.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=102)** First of all, we're going to say const dispatch = useDispatch.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=108)** This gives our component basically a function that it can call in order to trigger actions in the Redux store, and now we're going to need to tell it what actions we want it to actually dispatch by taking a look at our Todo slice again, and we're basically going to need to reference these actions which are created for us automatically by this createSlice function.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=136)** Now the createSlice function, we haven't really talked too much about what this does.
>
> **[2:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=141)** We saw that in main.jsx right here, it allows us to reference specific parts of Redux that have been created for us based on our specifications.
>
> **[2:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=153)** So we are able to say todoSlice.reducer, and as a matter of fact, we're able to say todoSlice.actions if we actually want the actions that were created for us by this slice.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=165)** So things like createTodo, markTodoAsCompleted, and so on.
>
> **[2:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=169)** Well, here's what this is going to look like.
>
> **[2:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=171)** In order to make this easier to import into other files, what we're going to do is we're going to say export const and we're actually going to those actions by name.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=180)** This syntax might look a little bit strange to you, but we're going to say createTodo, we'll say markTodoAsCompleted, and we'll say deleteTodo = and then we're going to say todosSlice.actions, right?
>
> **[3:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=196)** Basically this toDosSlice.actions contains all of the actions that were automatically created for us by that create Slice function, and we're just exporting those as named exports so that we can import them easily into whatever component needs them.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=210)** So here's what this is going to look like.
>
> **[3:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=212)** Let's go back to TodoListItem, and we're now going to import those actions by saying import markTodoAsCompleted and deleteTodo from our todosSlice file, right?
>
> **[3:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=226)** Basically these two actions that we were previously triggering from our TodoList item component.
>
> **[3:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=233)** Alright, so now all we need to do is change this onDeleteClicked call to a call to dispatch with the action that we want to dispatch here as an argument.
>
> **[4:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=244)** So in this case, we want to dispatch deleteTodo and we're going to put parentheses after that.
>
> **[4:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=250)** That's how actions work.
>
> **[4:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=251)** We'll talk about why that is in a little bit more detail shortly.
>
> **[4:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=255)** And then for marking a todo as complete, we're just going to say dispatch and we're going to dispatch the markTodoAsCompleted action.
>
> **[4:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=264)** Cool, so now that we've done this, what's going to happen is what we click on one of these buttons, the logic that we define inside this createSlice function is going to be executed, and the Redux store will be updated accordingly.
>
> **[4:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=282)** Now so far, this isn't actually going to do anything, because we don't have any todos called New Todo, but we can test this out by adding that manually to our store, right?
>
> **[4:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=293)** We haven't actually added the functionality to dispatch this createToDo action yet, which we'll do shortly, but here's what that's going to look like.
>
> **[5:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=300)** We're going to say text: 'New ToDo," so that it'll actually match and we can test these actions, and then we're going to say isCompleted and we'll say false, so that we can test the markAsCompleted functionality as well.
>
> **[5:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=313)** So let's save this and go back to our app running here, and sure enough, we see that New Todo is in there, so what we should be able to do is click on markAsCompleted for that, and sure enough, we'll see that it will be registered as complete here.
>
> **[5:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=328)** The order does change a little bit, which is something that we can modify later on if we want to.
>
> **[5:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=333)** But now if we click Delete Item for our New Todo, sure enough, we'll see that that will work as well, right?
>
> **[5:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=341)** It works in exactly the same way as what we had before, but look at how much simpler our applications props are and how much less props drilling we have.
>
> **[5:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=350)** We can actually completely remove the onCompletedClicked and onDeletedClicked props.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=356)** I'm going to save that there.
>
> **[5:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=358)** We can go up into our TodoList component and we can remove those as well, right?
>
> **[6:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=363)** We don't need those anymore.
>
> **[6:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=364)** So we'll remove those being passed to our TodoList items, and we can now remove those from our TodoList props as well, and then we can go all the way up into our app component and remove those, too.
>
> **[6:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=377)** So let's just remove onDeleteClicked and onCompletedClicked.
>
> **[6:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=381)** We're going to remove those.
>
> **[6:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=382)** We can remove these deleteToDo and markTodoAsComplete functions.
>
> **[6:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=385)** We don't need those anymore, and then we can even remove both of these state hooks.
>
> **[6:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=390)** We don't need those anymore, because remember our Todo list component is now getting its todos from the store.
>
> **[6:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=397)** So we can even remove these two props, right?
>
> **[6:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=399)** We don't need those anymore, and right now, the only prop that we have left is onCreateClicked, which we're going to see how to get rid of that one shortly as well.
>
> **[6:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=410)** So let's actually remove useState from our app component.
>
> **[6:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=413)** We don't need that anymore.
>
> **[6:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=415)** We can also go down into our TodoList component again, and we already removed those Todos props here, and we should be good to go.
>
> **[7:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/dispatching-redux-actions?u=76281980&t=423)** The next thing that we're going to do is see how we can actually add arguments to the actions that we trigger.

> [!info]- Semantic Content
>
> **Code Identifiers:** marktodoascompleted (4), deletetodo (4), usedispatch (3), createslice (3), createtodo (3)
> **Code Keywords:** let (5), function (5), const (2), interface (1), this. (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2), previous chapter (1)
> **File Paths:** app.jsx (1), main.jsx (1)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Adding action payloads
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=0)** - [Instructor] All right. So now that we've seen how to dispatch actions as well as get data out of the Redux Store into our React components, let's take a look at how we can add the missing piece here by adding payloads to our actions.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=14)** So, essentially what we want to be able to do is when something happens, right, when we click delete on a todo, for example, we want to be able to see inside our todo slice reducers, which todo is actually clicked, right?
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=30)** So in other words, we need another argument that will take the place of this text thing and allow us to see which todo is being marked as completed or deleted.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=40)** Now, the way that we do this is actually pretty straightforward.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=44)** The reason that these actions are triggered by putting parentheses after them is because, in many cases, in fact, I would venture to say in most cases, we will want to have extra data here.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=57)** So here's how this is going to work.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=59)** We're simply going to pass whatever extra data we want to these actions as we dispatch them.
>
> **[1:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=65)** So for deleteTodo, we're going to just say todo.text as the argument there.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=70)** And then for markTodoAsCompleted, we're going to do the same thing, right?
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=74)** That will allow us to see which todo is actually being deleted or marked as completed if we go back to our reducers.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=81)** So now, in order to access the text that was included when that action was dispatched, all we need to do is add another argument here.
>
> **[1:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=91)** Here's what this looks like.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=92)** Instead of having just state, we're actually going to have state and a reference to the action.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=99)** So we'll have state and action here for pretty much all of these, actually, we'll just say state and action.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=107)** And we will need that for createTodo, but we'll leave that for a little bit later.
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=111)** So now, in order to get that text, we're going to say const text =.
>
> **[1:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=115)** And the way that we access the arguments that were included when we called that action and said dispatch is we can just say action.payload, all right?
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=127)** So the payload is whatever arguments were included there, and we can do that down here as well.
>
> **[2:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=132)** We're going to say const text = action.payload.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=136)** And now, if we go back to our app, you may need to refresh it in order to get the todos to show up again, what we'll see is if we click on Mark as Completed for New Todo, it's actually only going to affect New Todo.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=151)** And if we do the same thing for Go to the Store, right?
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=154)** If we try and delete that, that will delete that todo for us, right?
>
> **[2:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/adding-action-payloads?u=76281980&t=158)** So in other words, we're now taking the todo's text into account using an action payload.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), const (2), let (1), pass (1)
> **Code Identifiers:** deletetodo (1), marktodoascompleted (1), createtodo (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** in other words (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Adding a Redux flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=0)** (bright rhythmic music) (bright rhythmic music fading)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=5)** - [Instructor] Alright, so at this point, we've seen the basics of writing logic for marking to-dos as completed and deleting to-dos, as well as incorporating those into the corresponding components.
>
> **[0:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=16)** So it's time for you to do a challenge that will help you apply this to another component, right?
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=23)** You probably have noticed by now that we still don't yet have a way to create to-dos in our application, at least it's not hooked up to the Redux store, so that's going to be your challenge.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=36)** Specifically, what you're going to need to do is go into the NewToDoForm component, and use the useDispatch hook in order to allow users to create new to-dos by dispatching the correct action.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=50)** So that is your challenge, this should take you maybe five to 10 minutes to complete.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-adding-a-redux-flow?u=76281980&t=54)** And once you've given it a try, feel free to move on to the next video where I'll walk you through the solution.

> [!info]- Semantic Content
>
> **Non-Speech:** (bright rhythmic music) (1), (bright rhythmic music fading) (1)
> **Code Keywords:** try, (1)
> **Code Identifiers:** usedispatch (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Solution: Adding a Redux flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=0)** - [Instructor] All right. Well, hopefully, you've given this challenge a try.
>
> **[0:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=7)** Let's take a look at the solution.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=10)** So the first thing that you wanted to do here was add the useDispatch hook so that you're NewTodoForm component would be able to trigger the right action.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=20)** So what I did is I said import useDispatch from react-redux.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=27)** Cool. And besides that, we're also going to want to import the correct action that we want to trigger, which is going to be the createTodo action from todosSlice.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=39)** And now, we just need to get a reference to dispatch by saying const dispatch = useDispatch, like so.
>
> **[0:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=48)** And the next thing that we're going to do is instead of calling this onCreateClicked thing, which we won't even need anymore.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=55)** All right, so we can just remove that here, as well as go up into our App component, or rather our TodoList component, and remove it from there.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=64)** All right. So we can just say NewTodoForm without any props at all.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=67)** And we also don't need this in our TodoList, so we can remove that.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=71)** And go up into our App component and remove onCreateClicked there.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=75)** See how much code this allows us to save here?
>
> **[1:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=77)** So now, we're going to go back to our NewTodoForm.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=81)** And when this thing is clicked, instead of calling onCreateClicked, we're going to dispatch a createTodo action with the text that was in the input, so we're going to say inputText.
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=95)** And that should be all we need to do besides going back to our todosSlice and making sure that we get that text from the New Todo.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=104)** So here's what that's going to look like, we're going to need to say state and action.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=110)** All right. And now, instead of text, we're just going to say action.payload for the text, and we can leave isCompleted as false.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=119)** And that should be pretty much all we need to do.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=121)** So let's go test this thing now.
>
> **[2:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=123)** Let's just refresh it to make sure that we have the latest version of our code.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=127)** And now, we should be able to say something like, "Test the Implementation Code."
>
> **[2:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=134)** All right, so let's try clicking Todo now.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=137)** And sure enough, we see that that has appeared here, Test the Implementation Code.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=142)** And we'll see how to divide this into completed and incomplete, just as a reminder, a little bit later.
>
> **[2:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=148)** But let's try clicking Mark as Completed on that one.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=151)** Sure enough, that marks it as complete, and we now see that we can delete it.
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=154)** So let's click Delete, and that'll get rid of the items.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=157)** So at this point, we've fully implemented our application using Redux.
>
> **[2:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=162)** So congratulations if you figured out that challenge.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-adding-a-redux-flow?u=76281980&t=165)** And the next thing that we're going to take a look at to wrap up Redux, is we're going to take a look at Redux dev tools, which can really help you when you're adding Redux to an application.

> [!info]- Semantic Content
>
> **Code Identifiers:** usedispatch (3), oncreateclicked (3), createtodo (2), todosslice (2), inputtext (1)
> **Code Keywords:** let (6), delete (2), try. (1), const (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Redux DevTools
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=0)** - [Instructor] All right, so now that we've seen how to add Redux to a simple React application, the last thing that I want to show you here before we move on is the Redux Extension for your browser.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=12)** So, I'm using Chrome here.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=15)** And what you're going to want to do, if you want to use this extension, which I'd highly recommend that you do, is search under Extensions for Redux DevTools and install it.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=25)** You can see that I've already installed it into my browser.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=28)** Now once you've done this, what you should be able to do is on any app that uses Redux behind the scenes, you should be able to open up an Inspector window and find Redux as one of the options for the Devtools here.
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=44)** And sure enough, what you'll see is that this will actually give you a large amount of insight into what's going on behind the scenes when you interact with the app.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=55)** So as you can see, as we were just testing out the different actions in the previous video, the Redux DevTools actually registered each of those actions and we can actually see what the effect was of each of those actions here.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=70)** So, first of all, we see todos/createTodo.
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=74)** If we take a look at this action, this will actually show us the difference, if you select Diff here, I'll show you some of the other ones in a minute.
>
> **[1:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=82)** This will actually show us how the state changed when that action was triggered, right?
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=88)** So sure enough, we can see that a new to-do was added to the value here under 2 with the following text and the following isCompleted values.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=99)** It's collapsed there for readability.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=101)** But anyway, that's really useful to know.
>
> **[1:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=103)** Now, in addition to this, we can also see what the action look like in more detail.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=107)** So, we can take a look at the type, as well as the payload, right?
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=111)** So, we can see the payload that was triggered there.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=114)** And you can also take a look at the State tab, which will show you what the state looks like after that action was triggered, right?
>
> **[2:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=122)** So in other words, this shows us the current state after that action was triggered and modified the store.
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=131)** So sure enough, you can see that we have all of our to-dos inside of here like so.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=136)** And there's also other things as well.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=138)** Those aren't really as relevant for what we're doing right now.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=142)** But just take a look at some of the other ones too, such as markToDoAsCompleted.
>
> **[2:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=146)** We can see the payload for that one as well.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=149)** And we can see the payload for deleting the to-do, as well as how the state changed after each of those, right?
>
> **[2:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=155)** After deleting the to-do, we can see we're now back down to 2 to-dos instead of three.
>
> **[2:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=162)** So anyway, those are the Redux DevTools.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=164)** One last thing that I'll show you that you can do with this, which is really very helpful when you're just building out your Redux logic and haven't yet incorporated it into React is you can actually dispatch your own actions by clicking on this Show Dispatcher button down at the bottom, right?
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=181)** What you're going to want to do here is we can simulate creating a to-do by saying type, and then you're going to use that same name up here, all right?
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=191)** That's just an automatically created name for us by Redux.
>
> **[3:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=194)** We're going to say todos/createTodo.
>
> **[3:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=198)** And then for the payload here, we're going to say payload, and we'll just say something like, Test Redux Devtools.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=207)** So, let's just type that in and we're going to click Dispatch and that will actually dispatch that action in our app.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=215)** And if we close this a little bit, sure enough, we'll see that we have this Test Redux Devtools there.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=221)** And we can also test other things out.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=222)** So, if we wanted to maybe mark that as complete, we could say todo/markTodoAsComplete.
>
> **[3:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=231)** And if we click Dispatch here, oops, it looks like it didn't work there.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=235)** And that's because that should be markTodoAsCompleted.
>
> **[3:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=237)** So let's try that again.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=238)** And sure enough, we see that that automatically makes this Test Redux Devtools thing complete.
>
> **[4:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=244)** And finally, if we say deleteTodo as the action type, all right, we're going to save Dispatch, and that will delete that to-do.
>
> **[4:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=252)** So, in other words, this allows us to actually test our application and our Redux logic without incorporating it into our React app, or rather before we've actually incorporated it into our React app.
>
> **[4:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=266)** So anyway, that's a very useful tool.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=268)** You may want to use that down the road.
>
> **[4:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/redux-dev-tools?u=76281980&t=270)** So, just remember that that's there for you if you need it.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), type, (3), let (2), finally, (1), delete (1)
> **Code Identifiers:** createtodo (2), marktodoascompleted (2), iscompleted (1), marktodoascomplete (1), deletetodo (1)
> **Definitions:** in other words (2)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 7. Alternatives to Redux

> [[#Table of Contents|↑ Back to Table of Contents]]

#### State management with Recoil
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=0)** - [Instructor] All right, so now that we've taken a pretty deep look at Redux, before we go on and take a look at things like selectors, I wanted to show you a few simple alternatives to Redux.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=13)** Just in case you're looking for something else to suit your needs.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=17)** I would highly recommend that you at least play around with these things a little bit.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=20)** The first thing that we're going to talk about is a tool called Recoil.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=24)** Now, the interesting thing about Recoil, and again, feel free to check out this website and watch their video explanations of this, but the interesting thing about Recoil is it allows you to add state management to your application in a similar way to how you do it with Redux, but with less so-called ceremony, right?
>
> **[0:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=46)** Some people can be bothered by the fact that Redux has so many nouns in it, right?
>
> **[0:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=51)** Things like reducers, actions, and so on.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=53)** Sometimes they're looking for a slightly simpler solution, and Recoil can sometimes be that.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=59)** So what I'd like to do here is just give you a brief idea of how Recoil works.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=63)** The first thing that you're going to want to do here is install Recoil into your project.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=68)** Which you can do by saying NPM install Recoil.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=72)** And by the way, you usually won't have Recoil and Redux and MobX, which we're going to talk about next in the same project.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=79)** But really you would probably want to choose one of these and stick to that in your entire application.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=85)** So here's what this is going to look like.
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=86)** We're going to start our application back up here with NPM Run Dev, and if you wanted to add Recoil to an application, you would do a pretty similar thing to what we did with the Redux provider, except you would use something called a Recoil root.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=104)** And just as a side note here, the changes that I'm going to make in this video are not going to be persisted in the rest of the course.
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=111)** They're really just for demonstration and to show you how these things work.
>
> **[1:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=115)** But we're not going to be using them from this point on.
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=117)** So if you notice that the changes I make here are missing, that's why.
>
> **[2:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=120)** So what we would do is we would say import Recoil root, and then we would say from Recoil, and then instead of wrapping app in a provider, we would wrap it in a Recoil root element, all right?
>
> **[2:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=138)** So again, that kind of allows all of the components that are inside of this to have access to the Recoil states.
>
> **[2:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=146)** Now that we've done that, the next thing to know about Recoil is that its state management is slightly decentralized, right?
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=154)** So in other words, when we want to add some sort of state to a Recoil application, we create it by saying const.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=163)** And then in our case, we might say something like to-dos equals, and then we use this function called atom, which we can import from Recoil as well.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=174)** And what this does is it basically creates a single value or a single accessible piece of state that any of the components that are inside this Recoil route can access.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=186)** So in our case, we might want to say, atom will say key.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=189)** You just give each atom a key so that you can reference it better.
>
> **[3:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=192)** We'll call this to-dos.
>
> **[3:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=194)** And then you get to specify the default or starting value, which in our case might be an empty array.
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=200)** And I'm actually going to add something to it.
>
> **[3:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=202)** We'll say text, we'll say talk about Recoil for our to do here, and then we'll say is completed.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=211)** And we'll say false there for now because we haven't yet finished talking about Recoil.
>
> **[3:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=217)** So now that we have this atom, here's how this is going to work.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=220)** Whenever a component wants to either access this state or make a change to the state, it simply imports this atom and uses that along with a hook.
>
> **[3:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=233)** So what we're actually going to do here is I'm going to create a new file for this.
>
> **[3:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=237)** We'll just call this something like atoms.js, and I'm going to move this to-dos thing over to there.
>
> **[4:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=244)** All right, so we'll just paste that like so.
>
> **[4:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=246)** I'm also going to have to say import atom from Recoil.
>
> **[4:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=250)** Oops, let's try that again, there we go.
>
> **[4:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=252)** Now we're just going to say export const to-dos.
>
> **[4:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=255)** Cool, so now that we've done that, and we can remove the atom import from here because we just removed it.
>
> **[4:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=261)** As I said, if any of our components want to access this to-dos state, they just have to import it and use it along with a hook.
>
> **[4:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=269)** So I'm going to go into to-dos list.
>
> **[4:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=271)** And instead of using this used selector thing, which is going to connect us to Redux, we're going to import something called use Recoil value from, and then we're going to import that from Recoil, of course.
>
> **[4:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=285)** And then we're just going to replace this used selector thing, which uses Redux, with const to-dos equals use Recoil value.
>
> **[4:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=293)** And then we just have to pass the atom that we want the value from as an argument to that hook.
>
> **[4:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=299)** So we're going to say import to-dos from, and then we're going to say from atoms.
>
> **[5:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=306)** There we go, and that should be all we need to do there.
>
> **[5:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=308)** Let's just pass that as an argument to use Recoil value to-dos.
>
> **[5:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=312)** And then what we're going to need to do, oops, it looks like it's not quite recognizing what that means.
>
> **[5:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=317)** So let's actually rename this.
>
> **[5:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=319)** We'll say to-dos as to-dos atom, there we go.
>
> **[5:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=323)** Just to make a distinction between those, we'll say to-dos atom.
>
> **[5:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=327)** And now if we open up our application, what we're going to see is that sure enough, it's displaying the to-dos from the Recoil state instead.
>
> **[5:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=334)** Now, if you want to change Recoil, it's even easier than dispatching in Redux, which could be a plus or minus because in this case, easier means easier to abuse as well.
>
> **[5:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=345)** But if you want to be able to change that state, all you need to do is use 'use Recoil state' instead of use Recoil value.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=356)** In that case, it's going to work in exactly the same way as a sort of a shared version of reacts own use state hook.
>
> **[6:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=364)** You can have to-dos and set to-dos there like so.
>
> **[6:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=368)** And that will modify that atom behind the scenes, which will affect any components that are looking at its value.
>
> **[6:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=376)** So anyway, that is the basics of Recoil.
>
> **[6:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-recoil?u=76281980&t=379)** Again, I'm going to put this code in the finished state of the exercise files, but in the next video it will be reset to the way that it was before this.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), const (3), this. (3), let (3), from, (2)
> **Tools:** atom (11)
> **CLI Commands:** make (4), npm (2)
> **Env Vars:** npm (2)
> **Definitions:** is a  (1), in other words (1)
> **Prerequisites:** install (2)
> **File Paths:** atoms.js (1)
> **Cross-References:** in the next (1)

#### State management with MobX
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=0)** - [Instructor] All right, so now that we've taken a look at one alternative to Redux, which was Recoil, and just as a reminder, I've reset the code from the demonstration that I did with Recoil so that I could demonstrate something else, and that's something else is going to be a tool called MobX.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=18)** Now, MobX is a very popular tool.
>
> **[0:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=21)** It's a somewhat more object-oriented alternative to Redux, so if you're comfortable with object-oriented programming and like working with classes, things like that, MobX might be a good choice, and it's also supposed to be very fast as well, although, personally, I've never tried it in larger React applications.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=40)** So to give you an idea of what it's like to work with MobX, I'm just going to do a very similar, simple demonstration of MobX.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=49)** What I'm going to do here is I'm just going to create a new file inside source.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=53)** We'll call this something like MobX todos-mobx.js.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=59)** And then, inside here, what we're going to do is we're going to start off by importing something from the MobX package, and by the way, let's install that by opening up our project terminal.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=71)** We're going to stop it and run npm install mobx, as well as mobx-react-lite.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=81)** Those are the bindings for adding MobX to a React project.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=84)** And then we're just going to rerun our project here.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=87)** So we'll say npm run dev.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=90)** And now what we're going to do is we're going to import something called makeAutoObservable, and we're going to import that from 'mobx'.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=101)** Now, this makeAutoObservable thing, what it does is it takes JavaScript classes, right, regular JavaScript classes, and it integrates them into React's reactive programming kind of flow, right?
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=117)** So, if we define a simple class here, called something like TodosStore, which is how these are usually named here, well, if we add some member variables to this, for example, todos, and set the default value for that member variable as an empty array, and then maybe we have, you know, some, just a few methods here that allow us to modify that todos array, so maybe we have createTodo, which allows us to create a new Todo with new text.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=149)** And then maybe we have something that allows us to mark a Todo as completed, and that allows us to specify the text that we want to use for that.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=158)** And then we could have another method here that allows us to delete a Todo by its text, and, oops, we don't need to import that there.
>
> **[2:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=167)** That was just my IDE trying to be helpful.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=170)** Well, the problem here is that if we were to go through and implement each of these, and then use an instance of this class to keep track of our Todo state, it's not really going to work, right?
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=181)** You've probably noticed this before in a React component, if instead of using, let's say, the useState hook, right?
>
> **[3:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=188)** If instead of using the useState hook to keep track of a given piece of state, you just try and say, you know, let inputText = empty string, and then you modify that, well, those changes aren't going to automatically cause the component to re-render, and it's just not going to work, right?
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=207)** So, that's the problem that we generally run into with, you know, working with object-oriented programming in a React application, is that any updates to these member variables aren't going to cause the app to re-render, or the component that depends on them to re-render.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=223)** So, what MobX allows us to do, and I'll leave it up to you to implement these methods yourself, but what MobX allows us to do is by calling this makeAutoObservable thing inside the constructor, right, so we'll say makeAutoObservable(this), that will actually integrate this object-oriented behavior, right, any changes to member variables, for example, into React's reactive flow.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=253)** So, what we would have to do now is export a new instance of this TodosStore.
>
> **[4:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=258)** We'll just say something like export default new TodosStore, all right, and now what we can do is, if we have a component that has need of the data in this store, such as our TodoList, again, I'm just going to make changes here that won't be reflected in the exercise files later on, we can just import that store that we just exported, so this is going to be TodosStore from ./todos-mobx, and now what we'll need to do is actually rewrite this a little bit.
>
> **[4:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=292)** So we'll say const TodoList =, and we need to use a function called observer to make sure that this component re-renders whenever the MobX state changes.
>
> **[5:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=306)** So, here's what that would look like.
>
> **[5:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=308)** We would need to import the MobX observer function from mobx-react-lite, all right?
>
> **[5:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=318)** We're importing this from the React bindings package, not just MobX.
>
> **[5:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=323)** Now, what this is going to do is it's going to automatically cause this component to be re-rendered when the application state changes.
>
> **[5:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=333)** So what we could do now is we could say todosStore.todos.map, and then todosStore.todos.map.
>
> **[5:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=343)** Yeah, let's make sure that we export this thing.
>
> **[5:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=345)** We'll say export default TodosList like so, or just plain old TodoList, there we go.
>
> **[5:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=352)** And that would be all we need to do in order to make our TodoList work with MobX.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=356)** Now, if we want to trigger an action or make some sort of change to MobX, well, all you need to do is, of course, implement these methods and then call them, right?
>
> **[6:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=368)** So if we wanted to create a new Todo in our new Todo form, we would just have to do the same thing as what we did with our TodoList, and call todosStore.create.todo, right?
>
> **[6:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=379)** So it's pretty straightforward to use this thing.
>
> **[6:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=382)** The last thing that you would need to do is, just like how we add a provider for Redux, we have to add the same kind of thing for MobX.
>
> **[6:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=390)** And the way that that works is we actually have to import createContext from React, all right?
>
> **[6:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=397)** So we'll say createContext.
>
> **[6:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=399)** This is the main way that it makes MobX work with React.
>
> **[6:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=402)** And then we would also have to import that store that we created, so we'll say import, and then we'll say todosStore from, and then we'll say ./todos-mobx.js, and then we just have to use this to create a new context.
>
> **[7:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=420)** And don't worry if this is going a little bit over your head.
>
> **[7:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=422)** You can feel free to skip ahead to the exercise files if you want to see what this looks like finished, but we're going to say const, and then we'll say TodosStoreContext =, oops, that should be Context = createContext, and then we're going to say todosStore as the value for that.
>
> **[7:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=443)** And now, all we need to do is surround our app by saying TodosStoreContext.Provider, and then we'll say value=, and that's going to be todosStore, and that is all we need to do there in order to allow our components to access it.
>
> **[7:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/state-management-with-mobx?u=76281980&t=459)** All right, now I'll leave it up to you to implement all of the methods that are in this TodosStore class, but that's the basic way that you set up MobX, and the basic way that MobX interacts with a React app.

> [!info]- Semantic Content
>
> **Code Identifiers:** todosstore (6), makeautoobservable (4), createcontext (3), usestate (2), createtodo (1)
> **Code Keywords:** let (4), const (2), function (2), else, (1), this, (1)
> **CLI Commands:** make (5), npm (2)
> **Analogies:** for example (2), it's like (1), such as (1), just like (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** todos-mobx.js (2)
> **Exercise Files:** exercise files (2)
> **Env Vars:** ide (1)


### 8. Dealing with Side Effects

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why do we need Redux-Thunk?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=0)** - [Instructor] All right, well we've spent quite a bit of time talking about state management tools for React and seeing how to incorporate those into our React applications, so the next thing that we're going to do is we're going to move on to another tool with a somewhat strange name, and that name is called Redux Thunk.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=17)** So, as you probably have guessed by the name, it is related to Redux, but it has a different responsibility, right?
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=26)** So, let's think about the current state of our application.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=30)** Right now, Redux is managing our application's state, which is perfect.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=35)** That's exactly what we want it to do.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=38)** Our components are managing our application's UI, however, if we wanted to incorporate, let's say, a server into our application, right, if we want to make our application full stack, so to speak, the way we would have to do that right now is by adding that data-fetching logic to our components.
>
> **[0:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=59)** All right, now this goes back to something that I said earlier in the course where the main purpose of a lot of these tools in the React ecosystem is to separate our concerns.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=70)** So, essentially, we need another tool to keep these things separate, right?
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=76)** We need another tool that will allow us to define our data fetching separately from our components.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=84)** So, that's what Redux Thunk is, that's the purpose of this tool.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=89)** Basically, thunks, we'll talk about what those are very shortly, these thunks give us a place to define our React application's side effects, right?
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=98)** So again, this includes things like data fetching, but can also include other things as well, as we'll see.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-redux-thunk?u=76281980&t=105)** So, that is the basic idea of Redux Thunk.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### How does Redux-Thunk work?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=0)** - [Instructor] All right, so now that we're familiar with what Thunks allow us to do, let's talk about the basics of how Redux Thunks work in more detail.
>
> **[0:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=11)** All right, so the first thing to notice here is that Thunks are really just an addition to the basic unidirectional data flow that we talked about with Redux, right?
>
> **[0:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=21)** So the difference here is that instead of dispatching an action, which as we've seen is really just a simple object, a component can choose to dispatch something called a Thunk instead.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=36)** Now this Thunk, as we've already discussed, is going to contain any side effects that our application might have, right?
>
> **[0:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=44)** So an example of this would be if our application wants to load data, or maybe if it wants to tell the server that we want to add an item to the user's cart, something like that.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=55)** Well, whatever that logic might be, when a component dispatches that Thunk, the logic that that Thunk contains is going to be executed.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=64)** All right, now besides making network requests, this can also include things like dispatching actions and even dispatching other Thunks, right?
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=76)** So Thunks, in other words, are able to do pretty much the same things as components are able to do, dispatching actions, dispatching Thunks, and having read-only access to the store, but they give us a separate place to put that logic, which again, is the most important purpose for most of these React tools.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=98)** So that's the basics of how Redux Thunk works on a higher level.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/how-does-redux-thunk-work?u=76281980&t=102)** Let's jump in and see how this thing works in more detail.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** we talked about (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### The Todos API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=0)** - [Instructor] Alright, so now that we've talked a lot about Redux Thunk and how it works, we're going to be incorporating Redux Thunk into our React and Redux application.
>
> **[0:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=11)** But in order to really do this and have a good demonstration, we're going to need a backend that is a server, as you see here, to send requests to and load data from.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=23)** So basically, what you see here... And by the way, you can get this in the starting state of the exercise files.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=30)** What you see here is a simple express server that has a few endpoints, basically just places that we can load data from or make changes to.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=42)** We see this one here, which allows us to load todos.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=47)** We see this one here, which allows us to create a new todo.
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=50)** We have one here, which allows us to delete a todo.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=55)** And finally, we have one down here that allows us to update a todo, as in mark it as complete.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=63)** So in order to run this server, which we're going to need to do in order to actually make requests to it from our front end.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=70)** And by the way, if you want to learn more about this full-stack development stuff, feel free to check out one of my other courses on full-stack development.
>
> **[1:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=78)** But, you'll probably be able to follow along just fine.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=81)** But in order to run this, you're going to want to change directories into your todo-list-app directory, in case you haven't already.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=89)** That's where I've put the server.js file.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=92)** We'll say cd todo-list-app.
>
> **[1:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=94)** And then, you're just going to run that by saying node server.js.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=99)** And you're going to want to leave that open in a separate terminal.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=102)** And you should see, "Server listening on port 3000."
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=104)** In case you see some sort of error about not having Express or missing some sort of package, you might need to install Express or just run npm install with the exercise files.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=118)** You can do either one, you can just run npm install, if you just checked out the starting state of the exercise files; or you can say npm install express, if you're following along and copying the code that's in server.js manually.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=133)** But anyway, once you run that, you should be able to test this out by going over to Ports.
>
> **[2:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=138)** And if you're running this in code spaces, you're going to need to make the port that your node server is running on Public.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=145)** So you can see visibility here is Private, you're going to need to right-click on that and say Port Visibility, Public.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=151)** That'll just make it possible to send requests to it from your front end.
>
> **[2:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=156)** And finally, once you've done that, you can test this out using something like Postman, which you can download for free just by googling "Download Postman."
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=164)** And you're going to need to copy this URL by clicking this little clipboard icon next to the local address.
>
> **[2:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=172)** And we're just going to create a new request here and paste that address.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=176)** And then we're going to say /todos, and that will allow you to load your todos.
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=180)** Basically, you'll just see an empty array here because we don't have any todos there.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=185)** And let's actually add at least one todo.
>
> **[3:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=188)** We'll just say text, and then we'll say something like Add a server, and then we'll say isCompleted, and we'll set that to true.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=197)** And finally, the last thing to know about the server-side code is that todos are going to have this ID property, which will make it much easier for us to delete them and mark them as completed, as you'll see a little bit later.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=209)** So let's just add an ID to this now, we'll say id, and we'll just do 123 there.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=216)** And in order for that change to take effect, you're just going to need to restart your server by pressing CTRL+C in the terminal and running node server.js again.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=225)** And you should see that that port is still Public here, under Ports.
>
> **[3:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=228)** So let's just go back here and click Send, and we should see the new todo that we just added returned to us.
>
> **[3:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/the-todos-api?u=76281980&t=234)** So the next thing that we're going to do here is see how to use Thunks in order to actually load these todos from the server, as well as do other things like delete them, mark them as complete, and so on.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), finally, (3), public (3), let (3), from. (1)
> **CLI Commands:** make (5), node (3), npm (3), cd (1)
> **File Paths:** server.js (4)
> **Tools:** terminal (2), postman (2)
> **Prerequisites:** install (4)
> **Exercise Files:** exercise files (3)
> **Env Vars:** url (1), ctrl (1)
> **Definitions:** is a  (2)

#### Keeping track of the loading state
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=0)** - [Instructor] All right, so now that we have this server that our front end is going to be loading data from, the next thing that we're going to need to do here is we're going to need to actually create another reducer, right?
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=13)** Another slice, like what we see here, in order to keep track of the loading state of our application, right?
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=20)** When we send a request, as we just did with Postman here, there's a small amount of time where we're still waiting for those todos.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=30)** And so during that time, we'll probably want to display some sort of loading message so that the user knows why they're not seeing anything in the application.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=39)** So in order to make this work, we're going to have to create something sort of like this todos slice.
>
> **[0:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=45)** But what we're going to do, we'll create a new file and we'll call it something like loadingSlice.js.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=52)** And this is just going to be sort of a separate slice that keeps track of the current loading state of the todos.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=60)** So I'm actually going to copy most of this stuff here because the structure will be pretty similar inside loadingSlice.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=66)** Let's just paste it there.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=68)** And first of all, we're going to rename this from todos to loading.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=73)** And then for the initial state, we're just going to say value and we're going to set that to true, right?
>
> **[1:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=79)** The initial state here is going to be that, yes, the todos are being loaded.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=85)** So we'll want to display that message because this will be true to begin with.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=90)** Now, for the reducers, there's a few things that can happen here, but they're  going to be much easier than what we've done earlier with the todos to actually implement.
>
> **[1:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=100)** So what this is going to look like is we're actually going to say something like loadingStarted, all right?
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=107)** For this, we're just going to have this be a function that will return the new value for this.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=114)** So we're actually, here, we'll say state and then we're going to say state.value = true, okay?
>
> **[2:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=123)** So we'll dispatch that action when loading starts.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=127)** After that, what we're going to do is we're going to say loadingCompleted, and then this is where we're going to set loading, or sorry, the state.value rather.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=137)** Let's try that again, state.value.
>
> **[2:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=140)** We're going to set that to false because we're done loading.
>
> **[2:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=143)** And finally we're going to add one more here called loadingFailed.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=147)** And for this, we're going to say state, and we're going to set state.value here to false as well, all right?
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=154)** Now, we might want other things here to keep track of whether it was successful or not.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=159)** In fact, what we could do here is we could say something like completed true, and then we could say successful full, and we'll set that to false initially.
>
> **[2:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=171)** And then we can use that to provide a little bit more information about what happened, right?
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=176)** So we could say, state, here for all of these, let's actually change this to state.value.completed.
>
> **[3:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=182)** And that would actually be false here because it's not completed.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=185)** Then we'll say state.value.completed here.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=189)** That would be true in this case.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=191)** And we would say, state.value.successful = true.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=197)** And then for the failed case, right, the case where loading fails, we would say that it's done loading, but successful is equal to false.
>
> **[3:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=206)** And in this case, we'd probably want to display an error message of some sort.
>
> **[3:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=210)** All right, so anyway, that is the basics of creating our new loading slice.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=213)** So let's just rename this thing here.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=215)** Oops, let's try that again.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=216)** We're going to rename that to loadingSlice.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=220)** And then we're going to need to export these actions here by saying export loadingStarted, loadingCompleted and loadingFailed from loadingSlice.actions.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=235)** So let's change that there as well, loadingSlice.actions.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=238)** And that should be all we need to do for that new slice.
>
> **[4:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/keeping-track-of-the-loading-state?u=76281980&t=242)** So we'll be using this thing a little bit later when we actually load our data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), case, (2), from, (1), function (1)
> **Code Identifiers:** loadingslice (5), loadingstarted (2), loadingcompleted (2), loadingfailed (2)
> **File Paths:** loadingslice.js (1)
> **CLI Commands:** make (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### Loading data with Thunks
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=0)** - [Instructor] All right, so now that we've created our loading slice, the next thing that we're going to do is we're going to see how to actually start using thunks to load data from our server.
>
> **[0:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=11)** Now, there are actually two things that we're going to need to do to make this work.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=15)** The first thing we're going to need to do is add /api to the start of all of our server routes.
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=22)** Now the reason we have to do this is so that when we make a /api request from our front end, it will know that it's supposed to proxy that to the server.
>
> **[0:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=34)** Don't worry too much about that.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=35)** Basically, this just makes it easier to run these things together in development and send requests between them.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=42)** So now that we've done that, make sure you add that in four places here.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=47)** The next thing we're going to need to do is go into this vite.config.js file and we're just going to need to tell our React Vite application that we want it to proxy requests to the server, right?
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=61)** This will save us from having to specify the entire URL, right?
>
> **[1:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=65)** The entire URL that we had here in Postman each and every time we want to make a request.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=70)** So here's what this is going to look like.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=72)** We're going to say server and then we'll say proxy and the value for that's going to be an object with the value /api.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=81)** And then that's going to be another object that says target.
>
> **[1:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=85)** And here's where you're going to need to copy and paste this URL here, which you can also get in ports down here just by clicking the clipboard icon.
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=95)** So we're going to paste that there without the forward slash after it.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=101)** And then we're going to say changeOrigin: true.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=104)** Okay?
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=105)** So that should be all we need to do.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=107)** You may need to restart your front end app after making those changes in order to make those take effect.
>
> **[1:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=113)** But this should allow us to make requests to our server now.
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=117)** So now that we have that, let's close that file and our server file and we're going to make a request here to our server.
>
> **[2:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=128)** Here's how this is going to work.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=129)** We're actually going to create a new file here, which we'll call Thunks.js.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=136)** You can create an entire directory for thunks if you want to keep them all together and have many more, but we're just going to be putting them into the same file to keep things a little bit more simple and together.
>
> **[2:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=146)** So now that we have that, here's what this is going to look like.
>
> **[2:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=150)** First of all, as I said in a previous video, thunks are really just functions that return functions.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=157)** So what we're going to do here is we're just going to say export const and we'll call this something like loadTodos and we're going to say equals and then this is just going to be a function that returns an async function.
>
> **[2:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=172)** All right?
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=173)** We'll just say async like so.
>
> **[2:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=175)** And inside here is where we're going to load our todos.
>
> **[2:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=179)** So we're going to need to make a request.
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=181)** So we're just going to open up a new terminal here and make sure that you change directories into your todo list app again, and you're going to want to run npm install axios here.
>
> **[3:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=192)** There we go.
>
> **[3:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=193)** And once that's installed, what we're going to do is import it.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=197)** We're going to say import axios from 'axios'; And the way that this works is we can make a network request to our server just by saying const response = await axios.get and then we're going to use the path to our loadTodos endpoint on our server, which is /api/todos.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=223)** All right, if we open up our server here, that's going to send a request to this endpoint here, which is just going to send back whatever todos we currently have on our server.
>
> **[3:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=234)** All right, so let's go back here.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=235)** And now that we have the response, we're going to have those todos, which is going to be in response data.
>
> **[4:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=242)** That's just the way the axios library works and does that.
>
> **[4:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=246)** So now what we're going to have to do is we're going to have to actually let the rest of the application know that those todos were loaded successfully.
>
> **[4:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=259)** Now, we already created this loading slice, which we can use those actions in order to indicate what's going on.
>
> **[4:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=266)** But what we're also going to need to do, and we'll come back to this following video, is we're actually going to need to rewrite our todos slice a little bit so that it will actually update this state in response to those todos being loaded, right?
>
> **[4:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=284)** The initial state for our todo slice now is just going to be an empty array until those todos are loaded.
>
> **[4:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=291)** So again, we'll come back to that a little bit later, but what we're going to want to do inside our loadTodos thunk here is we're actually going to need to dispatch some actions.
>
> **[5:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=303)** Now, the way that this works with thunks is this function that we're returning, this async function that we're returning actually gets a reference to the dispatch function in the same way as how our components could, here, let me just open up one of these things here.
>
> **[5:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=320)** If we open up our todo list item for example, in the same way that our components we're able to say, const dispatch = useDispatch.
>
> **[5:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=327)** Right?
>
> **[5:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=328)** So in other words, we can use this function inside our thunk in order to let the rest of the app know what's going on.
>
> **[5:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=334)** So the first thing we're going to do is we're going to want to dispatch an action letting the application know that the loading has started.
>
> **[5:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=342)** So we're going to need to import the loading started as well as these other actions completed and failed from our loading slice, which is going to look like this.
>
> **[5:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=351)** We're going to say import loadingStarted as well as loadingCompleted and loadingFailed.
>
> **[6:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=363)** We don't have a case for that yet, but we'll add that shortly.
>
> **[6:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=367)** And then we're going to import that from our loadingSlice file.
>
> **[6:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=372)** Cool.
>
> **[6:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=373)** So again, first thing we're going to do, we're going to say loadingStarted and we're going to dispatch that like so.
>
> **[6:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=379)** We don't need to add any arguments to that because there's not really much information to include with that.
>
> **[6:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=385)** And then we're going to say dispatch(loadingCompleted) and we're actually going to include the todos that were just loaded as an argument there.
>
> **[6:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=397)** So you'll see what we do with this inside the todo slice shortly, but we'll come back to that.
>
> **[6:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=405)** All right, now, we'll also probably want to add a try catch block around this network request that we're making here.
>
> **[6:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=412)** So let's just move that inside the tri block, right?
>
> **[6:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=416)** Making network requests is pretty error prone operations, so we're going to want to make sure we handle that if something goes wrong.
>
> **[7:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=423)** So inside here we're just going to say loading failed, and we can include the error that it failed with so that we can use that if we want to, right?
>
> **[7:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=433)** We could add maybe an error message as part of our loadingSlice state if we wanted to, but I'll just leave it the way it is right now.
>
> **[7:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=442)** And that should be all we need to do for our loadTodos thunk.
>
> **[7:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=446)** Now one last thing here.
>
> **[7:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=448)** For now, I'm actually just going to log this out to the console just to make sure we have everything hooked up correctly before we move on.
>
> **[7:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=455)** So we should see if all goes well, our todos logged out to the console in the same way that we saw them here in Postman.
>
> **[7:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=463)** So let's give this a try.
>
> **[7:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=466)** Again, you're going to need to restart your front end application if you have left it running this whole time after making changes to the config file.
>
> **[7:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=475)** You're going to want to have your server running here on port 3000.
>
> **[7:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=478)** So you might just want to restart that just to make sure if we made any changes, oh, in fact, we did make changes to these /api/todos.
>
> **[8:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=486)** So make sure to restart your server there.
>
> **[8:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=488)** And now we're going to go back, we're going to start our frontend application by saying npm run dev, and let's just open this up in our browser here.
>
> **[8:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=499)** All right, so we still see that our app looks the same way as it did before, but one thing that we still need to do here is actually execute this loadTodos thunk.
>
> **[8:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=510)** And the right place for that, there's a few options here, but the right place for that is going to be probably inside our app component, right?
>
> **[8:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=519)** This is the first component that's going to get rendered.
>
> **[8:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=522)** So what we're going to do is we're actually going to, oh, and here we can remove this createTodo function that was in there from before.
>
> **[8:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=529)** We don't need that anymore.
>
> **[8:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=531)** But what we're going to do is inside this app component when it's first rendered.
>
> **[8:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=535)** So we'll add our useEffect hook to this, we'll say import { useEffect } from 'react'; like so.
>
> **[9:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=542)** So we're going to want to say useEffect here, and then inside this useEffect hook, which we're only going to want to execute when our component is first rendered.
>
> **[9:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=553)** So we'll add just an empty array as the second argument there.
>
> **[9:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=557)** We're going to want to dispatch this thunk, right?
>
> **[9:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=560)** So the way that we execute thunks is just by dispatching them, right?
>
> **[9:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=564)** Redux will actually automatically pick up on the fact that this is a thunk and it'll execute the logic that it contains.
>
> **[9:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=571)** So here's what this is going to look like.
>
> **[9:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=572)** Let's go back into app.jsx.
>
> **[9:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=574)** We're going to need to import the useDispatch hook from React Redux, all right?
>
> **[9:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=581)** We'll also need to import that thunk from our thunks file.
>
> **[9:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=584)** So we're going to say import { loadTodos } from './thunks'; And now inside use Effect, we're just going to say dispatch(loadTodos) like so all we have to do here now is actually say const dispatch = useDispatch.
>
> **[10:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=600)** All right?
>
> **[10:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=601)** So there we go.
>
> **[10:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=602)** So let's give this a try now.
>
> **[10:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=603)** We're going to go back to our application and let's open up the inspector window.
>
> **[10:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/loading-data-with-thunks?u=76281980&t=607)** And if we go to console, sure enough, we see that that has returned an array with that todo from our server inside of it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (7), const (4), async (3), import { (2)
> **Code Identifiers:** loadtodos (7), useeffect (4), usedispatch (3), loadingstarted (2), loadingcompleted (2)
> **CLI Commands:** make (15), npm (2)
> **File Paths:** vite.config.js (1), thunks.js (1), app.jsx (1)
> **Env Vars:** url (3)
> **Tools:** postman (2), terminal (1)
> **API Endpoints:** /api/todos (2)
> **Cross-References:** previous video (1), go back to (1)

#### Refactoring the to-dos reducer
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=0)** - [Josh Olenslager] Alright, so now that we're loading our to-dos from the server, the next thing that we're going to want to do is actually modify our to-dos slice so that it takes that into account.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=13)** Now what we're going to need to do here is have our to-dos slice, listen for that same event, right?
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=22)** This same loading completed event that we're defining in our loading slice.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=29)** And when it gets that, it's going to need to take the to-dos that were loaded and actually set those as the value for our to-dos state.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=38)** So, here's what this is going to look like.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=40)** All right?
>
> **[0:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=41)** So, here's what we're going to have to do here.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=42)** First of all, you might be wondering if we can just add another reducer called something like loadingCompleted to our to-DO slice.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=52)** Well unfortunately while that would allow us to add another action and another reducer to our to-do slice, that wouldn't actually be the same event as what we had over here.
>
> **[1:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=65)** The same action rather, right?
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=67)** So, if we define loading completed inside our to-do slice, that's going to create another separate action called loadingCompleted under to-dos.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=76)** What we have to do instead is we actually have to add another property to this object that we're passing to create slice called extraReducers.
>
> **[1:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=89)** All right?
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=90)** Now what this does is it allows us to listen for actions from other slices and that's exactly what we need here.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=96)** So, the way that this works, it's a little bit interesting.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=99)** We just have to get this thing called builder as an argument and we need to call builder.addCase on that thing.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=110)** All right?
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=111)** So, this allows us to listen for other actions from other slices.
>
> **[1:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=115)** So, let's import some of the actions from our loading slice.
>
> **[1:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=119)** We're going to say import, and then we'll say really we just care about this loadingCompleted thing.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=124)** So, we'll just say to do slice and we'll say import loadingCompleted from loading slice.
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=131)** And then we're going to say builder.addCase loadingCompleted.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=136)** And when that happens, what we're going to want to do is get the current state and the action that occurred, right?
>
> **[2:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=143)** In the same way as what we define for these reducers up here and inside here, we're just going to need to modify our to-dos by saying state.value equals action.payload, right?
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=159)** Because remember that in our app component we're dispatching load to-dos.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=165)** And if we go take a look at our thunk, we're actually passing those to-dos that were loaded as an argument to load and completed, which means that those will be the action payload inside this callback function here.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=176)** So, now that we've done that, what we should be able to do is set this initial state value to just an empty array.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=185)** So, now that we've done that, let's go back to our application running in our browser.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=189)** And sure enough we see that we have this add a server to do in there, which as the name would suggest, comes from the server.
>
> **[3:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=199)** So, you can actually see this if you hit refresh, there's going to be a moment where that's not there, right?
>
> **[3:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=205)** That's the time where those to-dos are actually loading and then we see them displayed here.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=211)** So, now that we're successfully loading data and putting that into our Redux store using thunk, the next thing that we're going to do is actually add a loading state while this thing is loading.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=222)** So, let's go back here and what we're going to do is inside our to-do list, all right?
>
> **[3:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=229)** Let's just open that up here.
>
> **[3:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=230)** Our to-do list component, right?
>
> **[3:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=232)** This is the one that's actually getting the to-dos out of the store.
>
> **[3:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=236)** What we're going to do is we're going to actually use a separate selector here.
>
> **[4:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=241)** We'll say const todos are loading and we're going to say equals useSelector.
>
> **[4:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=248)** And we're going to say state, state.loading.value.
>
> **[4:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=254)** I believe that that's what we had in here.
>
> **[4:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=255)** Oh, state.loading.value.completed is what we want there.
>
> **[4:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=261)** So, we'll just add dot completed there.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=263)** And for todos are loading, we're going to want to check whether that thing was not completed.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=268)** So, in other words, while it hasn't yet been completed, the to-dos will be considered loading.
>
> **[4:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=273)** And now what we're going to do is underneath our new to-do form, if there are no to-dos yet, we're going to say to-dos are loading.
>
> **[4:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=282)** And if they're loading, we're going to display just a simple loading message, right?
>
> **[4:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=286)** So, we'll just do a paragraph tag there that says loading dot, dot, dot.
>
> **[4:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=291)** Otherwise we're going to want to display everything else that we were originally displaying.
>
> **[4:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=296)** So, let's just take these things here.
>
> **[4:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=298)** We're going to cut those, we're going to paste them there and we're going to adjust the indentation.
>
> **[5:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=303)** Cool.
>
> **[5:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=304)** So, that should be all we need to do there.
>
> **[5:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=305)** Oh, and here we need to put a react fragment around this here.
>
> **[5:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=309)** There we go.
>
> **[5:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=310)** So, that we have more than one top level element there inside that ternary operator, all right?
>
> **[5:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=316)** And one last thing we need to do here is go into main.jsx and actually add our loading state to the configure store function.
>
> **[5:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=326)** So, we're going to say loading and that's going to be loading slice.
>
> **[5:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=329)** Let's import that like so dot reducer, and that should be all we need to do.
>
> **[5:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=334)** So, let's go back to our application now and what we're going to do is hit refresh.
>
> **[5:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=339)** And if you look really closely, sure enough, we see that that has a little very brief loading message.
>
> **[5:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=344)** You can always add a delay in there if you want to.
>
> **[5:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=347)** You set timeout or something like that.
>
> **[5:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=349)** But I'll leave that up to you.
>
> **[5:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=350)** For now, we know that that's there, because we just saw it flash very briefly.
>
> **[5:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=354)** So that is how to refactor our to-dos reducer in order to take everything into account.
>
> **[6:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=360)** But still, whenever we do things like create a to-do or delete a to-do, or things like that, it's not actually making those changes on the server, right?
>
> **[6:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=368)** They'll come right back when we reload our application.
>
> **[6:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/refactoring-the-todos-reducer?u=76281980&t=372)** So, that's the next thing that we're going to do, is make it so that our application actually has some thunks that will interact with the server when we want to do things like delete or mark to-dos as completed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), delete (2), import, (1), const (1)
> **Code Identifiers:** loadingcompleted (5), addcase (2), extrareducers (1), useselector (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), in other words (1)
> **File Paths:** main.jsx (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [josh (1)

#### Using Thunks to create server resources
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=0)** - [Instructor] All right, so now that we've incorporated loading data into our reducer, the next thing that we're going to do is we're going to need to make it work, as I said, with some of the other actions that we can perform.
>
> **[0:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=12)** So if we go to our todosSlice, basically what we're going to need to do is turn each of these actions, createTodo, markTodoAsCompleted, and deleteTodo into a thunk.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=24)** So in other words, our todosSlice is going to end up looking pretty different.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=29)** It's actually going to end up looking something like this where instead of createTodo, markTodoAsCompleted, and so on, we just have a single action here called something like todosUpdated, which will update the value of this state with whatever the todos are now, right?
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=47)** We'll see that in a little bit more detail shortly, but for now we'll just leave it the way it is.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=52)** And we're going to go into our thunks.js file that we created, and underneath loadTodos, what we're going to do is we'll start off by creating a thunk that will create new todos on the server, right?
>
> **[1:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=65)** It's going to send the appropriate request to the server and update our todos accordingly.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=70)** So here's what this is going to look like.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=72)** We're going to say export const createTodo, and this is going to be a thunk, but the first function here, the one that returns the async function is actually going to take its own argument, which is going to be the newTodoData that we want to send to the server.
>
> **[1:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=92)** So here's what this is going to look like.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=93)** We're going to say async and we're going to need that dispatch function there, of course.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=98)** And what we're going to do here is we're going to say inside a try block, just like we did for loadTodos, const response =, and if we take a look at our server here again, right?
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=110)** Let's just take a look at this thing.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=112)** The endpoint for creating todos is a post endpoint and it wants us to send along the text in the request body for the newTodo, and it'll take care of the rest and send us back that newTodo so that we can update it accordingly.
>
> **[2:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=128)** So here's what this is going to look like.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=129)** We're going to say const response = await axios.post because again, it's a post endpoint, it's going to be the same path, /api/todos, as for loading those todos.
>
> **[2:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=143)** And we're also going to need to include that todo text.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=147)** In fact, let's just change that from newTodoData to newTodoText.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=151)** And here's what that's going to look like.
>
> **[2:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=152)** We're just going to say text, and that's going to be newTodoText.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=158)** And let's just make sure that that matches up.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=160)** Yep, req.body.text.
>
> **[2:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=162)** And now what we're going to do is when we get back that response that's going to have the newTodo that was completed in there.
>
> **[2:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=170)** So we're going to want to add that onto the current todo state and let our todosSlice know that the todos have been updated.
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=181)** Right, we're going to have to obviously implement that in the todosSlice itself.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=185)** But for now we're going to say const newTodo = response.data.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=190)** And the next thing that we're going to need to do here is we're going to need to figure out what the state of the new todos is.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=197)** So we'll say updatedTodos, and that's going to include all of the current todos plus whatever this newTodo is here.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=207)** All right, now in order to do this, we're going to have to get access to the state, and the way that we do that is by simply saying after dispatch here, we're going to have another argument that's provided for us by Redux called getState.
>
> **[3:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=224)** Now this is basically just a function that we can call in order to get access to the Redux store, and here's how it works.
>
> **[3:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=232)** We're going to say const updatedTodos = getState, and then we're going to say .todos.value, all right?
>
> **[4:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=242)** So this is doing the same kind of thing as what using useSelector inside our TodoList was doing, right?
>
> **[4:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=250)** It's giving us access to the state in that same exact way.
>
> **[4:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=254)** So here's how this is going to work, now we have our updatedTodos, so we're just going to add our newTodo onto the end of that.
>
> **[4:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=261)** So we'll say getState().todos.value.concat, and we're going to add that newTodo onto the end.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=268)** And now we're going to need to dispatch a new action which we haven't created yet, but we're going to go over to the todosSlice and do so now called something like todosUpdated.
>
> **[4:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=281)** And this is going to take the current state and the action that occurred.
>
> **[4:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=286)** We're going to say const updatedTodos = action.payload, and then we're just going to say state.value =, and then we're going to say updatedTodos.
>
> **[4:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=299)** So we're just replacing the todos in the state with whatever is on that payload for that action.
>
> **[5:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=306)** So let's give this thing a try.
>
> **[5:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=309)** Oh here, we're actually going to need to export that from our todosSlice, of course.
>
> **[5:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=313)** So we'll say in addition to all of these other things, we're going to have todosUpdated as an available action.
>
> **[5:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=320)** We're going to go back into thunks and import that from our todosSlice.
>
> **[5:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=324)** So we'll say import todosUpdated from our todosSlice, and that should be all we need to do there.
>
> **[5:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=333)** So let's go back down to dispatch.
>
> **[5:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=335)** We're going to say todosUpdated, and we're going to pass those updatedTodos as an argument.
>
> **[5:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=343)** Cool, so that should be all we need to do there.
>
> **[5:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=345)** If something happens, you could have an action that you trigger or dispatch that would indicate an error state.
>
> **[5:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=352)** But for now we're just going to log something out to the console.
>
> **[5:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=355)** We'll just say console.log(e), and that'll be all that we'll do there.
>
> **[5:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=359)** It's not really a great solution, but you can feel free to go in and add that yourself.
>
> **[6:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=364)** All right, so the last piece of this puzzle now is we're going to need to go into the NewTodoForm, and instead of dispatching this createTodo action from our todosSlice, we're going to import createTodo from our thunks file.
>
> **[6:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=382)** All right, so we're going to dispatch that createTodo thunk instead of the createTodo action.
>
> **[6:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=390)** All right, so let's give this a try.
>
> **[6:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=391)** And if you're using Codespaces, one final thing you're going to have to do is actually make the visibility of this other port public, right?
>
> **[6:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=400)** You're just going to say Port Visibility, Public so that both your ports are public.
>
> **[6:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=405)** That just prevents you from getting an error when you make that post request.
>
> **[6:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=409)** So let's go back to our application and let's give this a try.
>
> **[6:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=412)** What we should be able to do now is say something like, "Implement the Create Todo Thunk."
>
> **[6:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=419)** And if we click Create Todo, sure enough, we'll see that that will appear.
>
> **[7:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=424)** Now yes, it's appearing in both these places where we still have to learn about selectors and how to use those effectively, but for now that is exactly what we wanted there.
>
> **[7:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=434)** Now just as a side note here, if you do restart your server, you'll see any of these new todos disappear.
>
> **[7:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=440)** That's just because they're stored in an in-memory database.
>
> **[7:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=443)** So if you refresh this app, you should see that we still will get that Implement Create Todo Thunk, but if you restart your server, you'll see that disappear and that's why.
>
> **[7:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=452)** So anyway, that is how to create todos using thunks.
>
> **[7:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=456)** And the last thing that we'll do here is go into our todosSlice and completely remove that reducer as well as remove this export here from createTodo.
>
> **[7:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=467)** And let's just make sure that didn't break anything here by going into our app and hitting Refresh.
>
> **[7:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-create-server-resources?u=76281980&t=473)** All right, and it looks like everything is still working.

> [!info]- Semantic Content
>
> **Code Identifiers:** todosslice (10), createtodo (8), newtodo (7), updatedtodos (6), todosupdated (5)
> **Code Keywords:** let (10), const (6), function (4), try. (3), public (3)
> **CLI Commands:** make (5)
> **Definitions:** in other words (1), is a  (1)
> **File Paths:** thunks.js (1)
> **API Endpoints:** /api/todos (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Using Thunks to delete server resources
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=0)** - [Instructor] Alright, so now that we've created a thunk for creating todos, the next thing we're going to do is create a thunk for deleting todos.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=8)** So this should be pretty straightforward.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=10)** What we're going to do is go back into our thunks file and just as a side note here, we're going to be making delete requests to this endpoint here, which is going to include the id of the todo, right?
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=23)** That's why we added this id property to make it easier to do that.
>
> **[0:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=27)** So let's give this a try.
>
> **[0:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=28)** What we're going to do is go into thunks.js We're going to export a new function called deleteTodo And this is going to take the id of the, todo that we want to delete, which we'll call todoId and return an asynchronous function that takes dispatch and get state as arguments.
>
> **[0:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=48)** And now this is going to look pretty similar, to what we had in our createTodo thunk.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=53)** So I'm just actually going to copy a lot of the code from there and paste it in here and adjust the indentation of course.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=60)** And there's just a few changes that we'll need to make.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=63)** The first is we're going to need to say await axios.delete.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=67)** And the second is we're going to need to add the todoId onto the end of this path here.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=73)** So we'll say + todoId.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=75)** And we no longer need the request body because the server doesn't require that.
>
> **[1:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=81)** Cool! So at this point we should be sending the correct request, but we need to make a slight change to the logic that comes after it.
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=88)** Because if you look at our server endpoint, it's actually not sending anything back, right?
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=93)** It's just deleting that todo and sending a response to us to tell us that everything worked the way we wanted it to.
>
> **[1:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=101)** So if we get a response, we know that the todo was deleted, but we need to actually manually delete this from our store, which is kind of interesting, right?
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=111)** If you wanted to, you could have implemented this a little bit differently where this actually sends back the updated todos, but in many cases you won't have that option on the server.
>
> **[2:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=120)** So in this case, we just kind of have to duplicate our efforts.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=124)** So here's what this is going to look like.
>
> **[2:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=126)** We're going to say const updatedTodos and just delete that line beforehand.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=130)** And in fact, we don't even need that response.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=133)** We can just say await axios.delete. All right?
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=136)** And wait for that to finish.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=137)** So we're going to say updatedTodos = getState.todos.value And then we're going to filter out that todo by saying t.id is not equal to todoId.
>
> **[2:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=151)** So again, we're just manually filtering it out of the state, in the same way that we did this, inside our reducers for deleteTodo.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=159)** And in fact, we probably could have just copied this and made a few modifications if we wanted to do that.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=164)** Now that we have our updatedTodos, which have the todo that we deleted on the server removed from them, we can just call dispatch with todosUpdated again.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=174)** Notice that we're using the same exact action here as we did in createTodo.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=178)** And that should be all we need to do there.
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=181)** So anyway, let's just give this thing a try.
>
> **[3:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=183)** We're going to go into our todo list item component.
>
> **[3:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=187)** And instead of dispatching this deleteTodo action from the todo slice, we're going to import deleteTodo, from our thunks file.
>
> **[3:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=197)** All right? So let's just import that like so and that should be all we really need to do.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=201)** Oh, besides of course changing this to deleteTodo, todo.id, right?
>
> **[3:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=208)** Now that our todos have an id, we're going to need to delete it by id instead of by the text.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=213)** And that actually also gives us something, you know, a better way to uniquely identify our todos inside our todo list, now that I think about it.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=222)** For the key, instead of using the index, we're just going to use todo.id and for key here, we'll do the same thing that just makes this a little bit more robust for re rendering if two todos have the same text or something like that.
>
> **[3:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=236)** So let's just remove that index, now that we no longer need it.
>
> **[3:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=239)** And let's give this a try.
>
> **[4:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=241)** What we're going to do is open up our app again and what we should be able to do is delete one of these todos.
>
> **[4:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=247)** We won't be able to mark them as complete.
>
> **[4:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=249)** So we're going to need to delete this ad a server thing by saying delete item.
>
> **[4:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=253)** And sure enough, after a very brief pause during which our front end is making that request, our todo will disappear and it should stay gone.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=263)** And oops, it looks like that actually came back.
>
> **[4:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=265)** And that is because of an error on the server.
>
> **[4:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=269)** What you're going to need to change here in order to make this work is just you're going to need to remove this parseInt function that was in there from before.
>
> **[4:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=276)** So that should make it work.
>
> **[4:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=277)** And you'll need to also restart the server.
>
> **[4:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=279)** So just restart that and you might want to double check and make sure that that port is still, public after doing that.
>
> **[4:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=285)** So let's try this again, hit refresh and we'll see that we only have this add a server item now, and that's because we restarted our server, right?
>
> **[4:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=293)** That reset the data, so that it just had this one hard-coded todo in there.
>
> **[4:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=297)** So let's just click delete item and if all goes well, it should disappear and it should stay gone when we hit refresh.
>
> **[5:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=305)** So let's maybe try creating another todo, we'll say something like implement delete functionality and if we click create todo, that gives us a todo in our list now.
>
> **[5:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=317)** Cool! So that is how to add a delete todo thunk.
>
> **[5:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-thunks-to-delete-server-resources?u=76281980&t=321)** So at this point we have thunks for creating todos and deleting todos, and there's one missing, which is what we're going to take a look at next.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (13), let (8), try. (3), function (3), await (2)
> **Code Identifiers:** deletetodo (5), todoid (4), updatedtodos (3), createtodo (2), getstate (1)
> **CLI Commands:** make (6)
> **File Paths:** thunks.js (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Using Thunks to update server resources
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-using-thunks-to-update-server-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-using-thunks-to-update-server-resources?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-using-thunks-to-update-server-resources?u=76281980&t=5)** - [Instructor] All right, well, at this point we've created thunks for creating to-dos, deleting to-dos, and loading to-dos, so the last one that you're going to have to do here is this markTodoAsCompleted action, which you're going to turn into a thunk, and that is going to be your challenge here.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/challenge-using-thunks-to-update-server-resources?u=76281980&t=23)** So, this challenge should take maybe about five to 10 minutes to complete, and once you've given it a try, you can feel free to move on to the next video where I'll walk you through how I solve the challenge, so best of luck and I'll see you in the Solution Video.

> [!info]- Semantic Content
>
> **Code Keywords:** try, (1)
> **Code Identifiers:** marktodoascompleted (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### Solution: Using Thunks to update server resources
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=0)** - [Instructor] All right, well hopefully you gave this challenge a try.
>
> **[0:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=8)** Let's take a look at the solution.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=9)** So what I did is I started off by adding a mark to do as completed thunk to the thunks file.
>
> **[0:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=18)** So here's what that's going to look like.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=19)** I'm just going to say export const mark to do as completed.
>
> **[0:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=23)** And this one, just like our delete to do thunk had to take the ID of the to do that we wanted to mark as completed as an argument and incorporate that into the asynchronous function that it returned.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=36)** So here's what this is going to look like.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=38)** We're going to say async dispatch and let's make sure to spell that correctly there.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=43)** Dispatch and get state.
>
> **[0:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=45)** And now it's going to look pretty similar to what we had here in our delete to do thunk so let's just copy and paste that for a start.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=54)** And we're going to need this to be a put request.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=57)** So we'll say axios.put, hopefully you figured that one out.
>
> **[1:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=61)** You should have been able to just from the fact that we used get post and delete for the previous endpoints.
>
> **[1:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=66)** And something interesting about this one here is that it did in fact return the updated to do so it returned the updated to do that had as completed marked as true.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=79)** So what you had to do here was basically figure out a way to express those updated to dos and calculate those from the current redux state.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=90)** What I did is I simply said to dos.value.map and for each to do, I checked to see whether the to do's ID was equal to the to do ID that we wanted to update.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=104)** And if it is, then I returned the new to do that we got back from the server.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=109)** So let's actually change this here to const response equals await axios.put, and then we'll get the updated to do from that response by saying equals response.data.
>
> **[2:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=122)** And now we can return updated to do, which is just going to have the effect of replacing that to do, the old to do with the updated one that is, otherwise we're just going to return the to do itself, right?
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=133)** We're going to leave the rest of the to doS alone that don't match the ID.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=139)** And then of course we just had to dispatch to doS updated with those updated to dos.
>
> **[2:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=143)** And that should have been all we really needed to do.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=145)** Oh, except for this right here, we actually need to, just because of the way that the server endpoint works, we actually needed to add is completed and set that to true there.
>
> **[2:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=156)** All right, so let's give this a try.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=158)** We're going to go into our application and just as a side note here, I restarted my server, so I lost the one that we had there previously.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=165)** So we are going to need to create a new to do in order to test this functionality, we'll say something like, implement update Thunk and let's click create to do.
>
> **[2:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=176)** That one should be added there.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=178)** Oops, it looks like something didn't work there for some reason.
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=181)** Let's just see what happened by opening the inspector window and going into console.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=185)** Oh, and it looks like it did work for some reason that was just a little bit slower to complete.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=190)** So let's click mark as completed here on this and it should be marked as completed.
>
> **[3:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=196)** And sure enough, that will mark it as complete.
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=200)** So we see that it now says delete item and we can delete it as well.
>
> **[3:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=204)** So anyway, that was the solution to the challenge.
>
> **[3:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=208)** So congratulations if you figured that out.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=211)** If not, that's all right too.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=213)** As long as you understand the basic flow of how to use thunks alongside redux, that's just fine.
>
> **[3:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/solution-using-thunks-to-update-server-resources?u=76281980&t=219)** So at this point we've used redux thunk to fully integrate our front-end React application with a server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (5), try. (2), const (2), function (1)
> **Code Identifiers:** dos (2)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 9. Selectors

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why do we need selectors?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=0)** - [Instructor] All right. So the next React tool that we're going to take a look at here is something called selectors.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=6)** Now, we've already used selectors before in our React applications, but when we've used them with the used selector hook, we've just sort of hard-coded them.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=17)** So the idea of selectors is when we actually give these things a name and treat them as something separate from the components that use them.
>
> **[0:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=25)** So, here's the idea of why we need selectors in the first place and what they do for us.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=32)** The first thing that it's important to realize is that the overall structure of our Redux Store can and will change as our React applications get larger and more complex or as the needs of our application change.
>
> **[0:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=47)** So just as an example here, right now we're storing our todos under state.todos.value, state being the Redux Store.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=56)** But we might move that at some point to state.resources.todos.value, just as an example.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=63)** Or we might decide that the structure of our Redux Store should incorporate the idea of completed or incomplete todos.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=71)** So we might have state.todos.value become two pieces of the state, such as state.todos.completed or state.todos.incomplete.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=83)** Now, in cases like this, one big problem is that currently our components are intimately aware of the structure of our Redux Store, right?
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=93)** Inside our components, we're actually saying state.todos.value, for example.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=99)** And what that means is, if the structure of our Redux Store changes, we would've to go through all of those components and make that change as well.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=108)** So that is really the main idea of selectors here, is that they give us a way to isolate that knowledge and keep it out of our components, right?
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=118)** They give us a way to define where in our Redux Store a given piece of information is.
>
> **[2:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=126)** So that's the basics of selectors.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-selectors?u=76281980&t=127)** Let's take a look at how these things work.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Creating selectors
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=0)** - [Instructor] All right, so now that we're a little bit more familiar with selectors and what they allow us to do, let's take a look at how we can modify the existing selectors that we're using in our application to be a little bit more reusable.
>
> **[0:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=15)** So if we open up our to-do list component, what we'll see is that we're using this useSelector hook twice to get different things out of the state.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=24)** Now, right now, this is the only time we're actually using this exact selector, but it very well might be the case that later on we might want to select all to-dos from the state in many different components, right?
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=40)** Now, the problem with that is if we were to repeatedly say state.todos.value in multiple components, and we wanted to change the structure of our redux store, we would have to come in and actually make that change everywhere here.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=56)** So if we wanted to say state.todos.completed.value or something like that, we would actually have to make that change across all components that we're selecting from the state.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=68)** So that's obviously not ideal there, and let's just change that back to state.todos.value.
>
> **[1:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=73)** So what we're going to do is we're just going to create a new file here called selectors.js, and this is going to contain the main selectors for our application.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=84)** Basically all we need to do here is express the location of each valuable part of our redux store as a function.
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=95)** So we're just going to take this one here.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=97)** I'm going to cut that out of the to-do list component, and I'm going to paste it here.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=102)** And we'll say export const, and we'll say something like getTodos equals, and then that's just going to take state and return that part of the state, all right?
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=114)** So now that we have that, let's do the same thing with whether or not the to-dos are loading.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=121)** We're just going to take this thing here, and we're going to create a selector for that.
>
> **[2:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=126)** So we'll just say export const todos are loading, or here we'll say getTodos loading as the name for that.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=137)** And we're just going to paste that function here like so.
>
> **[2:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=141)** Cool, so we have two very simple selector functions now.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=145)** So let's go back into our to-do list and import those.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=149)** We're just going to say import, getTodos from selectors, as well as getTodosLoading from selectors.
>
> **[2:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=158)** Let's just pass those now to our useSelector hook.
>
> **[2:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=161)** We're going to say to-dos are loading, getTodosLoading, without parentheses after it too, by the way.
>
> **[2:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=167)** And then for the to-dos, we're going to say useSelector, getTodos, and that should be all we need to do.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=174)** So let's just make sure that this is working here and make sure that your front end and back end are both running still in case you stopped one of those.
>
> **[3:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=183)** So let's go back over to our application.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-selectors?u=76281980&t=185)** And if we hit refresh, we should see that everything is still working in our to-do list just like we wanted it to before, except now it's using selectors, which means that if we wanted to reconfigure our redux store, we would only have to make that change in one place for either of these things, which is much easier and much more sustainable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), const (2), import, (1), pass (1)
> **Code Identifiers:** gettodos (4), useselector (3), gettodosloading (2)
> **CLI Commands:** make (5)
> **File Paths:** selectors.js (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Combining selectors
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=0)** - [Instructor] Alright, so now that we've created simple selectors for getting the todos and getting whether or not the todos are loading, let's see how we can create some somewhat more complex selectors that will be useful to our application.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=14)** In particular, it would be great if we could go back to having separate lists for completed and incomplete todos and that's something that selectors can really help us out with.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=24)** So here's what this is going to look like.
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=26)** We're going to go back into our selectors file and what we're going to do, I'm just going to keep sort of a visual separation between what I'm going to refer to as atomic selectors, right?
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=38)** Selectors that refer directly to the state, and selectors that modify the return value of an atomic selector in some way.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=49)** That might sound a little bit confusing, so let me just show you what I mean here.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=53)** What if we define a new selector here called something like getCompletedTodos, and this selector, what it could do is actually use the existing getTodos selector to implement part of its functionality, right?
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=71)** So we could say const todos = getTodos, and just as a side note, it's way better to do this getTodos state thing than to actually reference this again, since once again, the point of these selectors is to have a single source of truth for where a given value can be found in the Redux store.
>
> **[1:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=91)** So now that we have the todos from our getTodos atomic selector, we can perform other logic on them.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=99)** So we could say return todos.filter and we could filter so that we only have todos that are completed.
>
> **[1:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=106)** So we could say t.isCompleted and that would give us the completed todos, and we could do the same thing now with our incomplete todos.
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=117)** We'll say export const getIncompleteTodos = state and this would say const todos as well = getTodos (state) and then we would say return todos.filter, and we would get the todos that are not completed.
>
> **[2:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=135)** So we could say not t.isCompleted.
>
> **[2:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=140)** Cool, so now that we have both of these more complex todos, we could actually use these by going back to our TodoList and saying instead of just const todos, we could say const completeTodos or completedTodos = useSelector and then we would have getCompletedTodos, alright, which is just imported for me automatically from our selectors file there.
>
> **[2:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=169)** And then while we're at it, let's also import getIncompleteTodos, and then we could say const incompleteTodos = useSelector and that would be getIncompleteTodos.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=184)** Cool, and now we could just use both of these things here by changing todos here to completedTodos under Completed, and incompleteTodos under Incomplete.
>
> **[3:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=199)** And that should be all we need to do there.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=201)** So let's give this thing a try and we should be back in business as far as completed and incomplete.
>
> **[3:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=206)** We're going to open up our application here, and we should see that, sure enough, the only todo under Completed is add a server, which is complete.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=215)** Let's try adding another todo to make sure that that works for Incomplete.
>
> **[3:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=219)** So we'll say something like, ooh, here's something that's not complete yet.
>
> **[3:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=222)** We're going to take a look at the createSelector function next, so let's create a todo item for that, and sure enough, we see that that one's only going to show up under the Incomplete heading.
>
> **[3:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=234)** Now notice here that we really didn't have to make any changes in this case to the Redux store or how our todos are stored behind the scenes.
>
> **[4:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/combining-selectors?u=76281980&t=243)** All we had to do was implement those selectors that got us at different parts of the state and operated on those in some way, which is really, again, the value of selectors when working with Redux.

> [!info]- Semantic Content
>
> **Code Identifiers:** gettodos (5), getincompletetodos (3), getcompletedtodos (2), iscompleted (2), completedtodos (2)
> **Code Keywords:** let (6), const (6), function (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Using the createSelector function
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=0)** - [Instructor] All right, so at this point, we've seen how to create simple selectors as well as more complex selectors.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=6)** But the fact is that the Redux toolkit actually provides us with a function that makes it so that more complex selectors like these ones work more efficiently, right?
>
> **[0:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=16)** Because right now, every time one of these selectors needs to get a value from the store, it has to recompute the answer which, depending on how complex that logic is, might take a long time.
>
> **[0:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=30)** However, and I'm just going to import this thing up here, if we use a function called 'createSelector,' which we're going to import from the Redux toolkit, this will actually add something known as 'memoization' to the selectors, right?
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=49)** The more complex selectors that we create.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=51)** So here's how this is going to work.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=54)** We're actually going to change how we're defining these things.
>
> **[0:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=57)** I'm just going to move this down to the bottom there for now to get it out of the way.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=60)** We are going to need that logic a little bit later.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=63)** But what we're going to do is we're going to say createSelector.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=68)** And the first argument that we pass to this createSelector function is an array containing all of the selectors that are more complex selector needs in order to compute its return value.
>
> **[1:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=83)** So in our case, that's going to be this getTodos selector.
>
> **[1:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=87)** So we're going to pass getTodos as the only element in that array, right?
>
> **[1:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=94)** If we had more, we could always add more, right?
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=96)** If we needed, for example, to get the getTodos loading as well, we could add that to the array too.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=104)** Now, the way that this works is once we've specified what the needs of our complex selector are, the next argument is simply a function that will take all of the return values of each of these selectors as arguments.
>
> **[2:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=120)** So we'll have the to-dos here, for example, and we can simply say, 'return todos.filter.'
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=127)** In fact, we don't even need to say return.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=129)** This is simple enough to just have it be a one-liner and say, here, we'll just copy todos.filter(t).isCompleted like so, and that is all we need to do there for this more complex getCompletedTodos selector.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=144)** So let's do the same thing with getIncompleteTodos.
>
> **[2:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=148)** Here's what this is going to look like.
>
> **[2:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=149)** We're just going to modify this a little bit, all right?
>
> **[2:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=152)** So we'll change this so that it says equals createSelector, and then we're going to say getTodos, which we need there as well.
>
> **[2:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=161)** And we can now access those todos as an argument like this.
>
> **[2:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=167)** And let's just make sure to close all of the parentheses, and we now have getCompletedTodos and getIncompleteTodos as selectors that were created with this createSelector function.
>
> **[2:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=178)** And again, what this means is that the return values of these things are memoized.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=185)** Meaning that if things like getTodos don't change, Redux will know that the return value of these more complex selectors won't change either.
>
> **[3:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=198)** So it doesn't have to recompute the value each time.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=201)** This can significantly impact performance if we're using more complex logic.
>
> **[3:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=207)** So anyway, let's just make sure our app still works like it should.
>
> **[3:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=211)** We're going to hit Refresh, and it looks like everything is still working as expected.
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=216)** If we mark as Complete or Delete, everything is still working there.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=220)** So that's the basics of selectors.
>
> **[3:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=223)** The last thing I wanted to show you here is if you have multiple selectors here, so if we needed getTodos loading as another selector, that would simply be available as the second argument here.
>
> **[3:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=235)** So we could say isLoading and use that however we want.
>
> **[3:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=238)** We don't need to use that here so I'm going to remove it.
>
> **[4:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=241)** But that's how you would do it if you needed more than one selector.
>
> **[4:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/using-the-createselector-function?u=76281980&t=245)** For example, if you wanted to combine the values of more than one selector.

> [!info]- Semantic Content
>
> **Code Identifiers:** gettodos (6), createselector (5), getcompletedtodos (2), getincompletetodos (2), iscompleted (1)
> **Code Keywords:** function (5), let (3), pass (2), case, (1), return. (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is an  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 10. Styled-Components

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why do we need styled-components?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=0)** - [Instructor] All right, so moving on to the next ecosystem tool.
>
> **[0:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=4)** Now that we've taken a look at selectors, we're going to take a look at a tool that makes it easier to manage styles in our React applications.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=13)** And this is something called styled components.
>
> **[0:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=17)** Now the question here is why would we need styled components in the first place, and what do they actually allow us to do?
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=24)** We'll see what these styled components look like exactly very shortly, but just like what we did back when we were talking about Redux Thunk, let's take a moment to think about the current state of our application.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=36)** Right now, Redux is managing our application's state, Thunk is managing the side effects and interactions with the server, selectors are abstracting away the structure of the state so that our components can just worry about what data they want and not where to find it, and our components are managing the UI.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=56)** And they will also need to manage the styles if we want to add those styles to them, right?
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=63)** So what styled components allow us to do is they give us a way to separate the styles and related style logic.
>
> **[1:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=72)** For example, if we want to highlight a div based on some value in our React application, they give us a place to put all of that logic and styling outside of our regular React components.
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/why-do-we-need-styled-components?u=76281980&t=86)** And they do this as you'll see in a pretty intuitive and easy-to-use way.

> [!info]- Semantic Content
>
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Creating a styled-component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=0)** - [Instructor] Alright, so now that we've discussed what styled-components are in a React application, let's get started with them.
>
> **[0:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=7)** And the first thing we're going to need to do here, of course, is install the styled-components package.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=13)** Alright, so you're going to want to open up a terminal and make sure you're inside the todo-list-app.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=20)** And then you're going to say npm install styled-components, and hit Enter.
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=26)** And that should take only a second or two to install, and once it's installed, we should be able to use them.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=32)** So let's create a styled-component here.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=36)** And what we're going to do specifically is go into our ToDoListItem, and we're going to add a little bit of styling to this thing by creating a styled-component that'll make it look like a floating card with a drop shadow.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=53)** So this should be pretty straightforward.
>
> **[0:55](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=55)** What we're going to do is we're just going to say... First of all, we need to import the styled-components package by just saying import styled from styled-components.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=67)** And now that we've done that, we're going to say const, and we'll call this something like CardContainer.
>
> **[1:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=74)** And now we just need to say styled.
>
> **[1:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=77)** And the way that this works is we can say styled., and follow that with whatever element, right, whatever normal HTML tag we want this thing to extend.
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=88)** So if we want this to be a div, we can just say styled.div.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=93)** And this is going to be followed by backticks, which might look a little bit strange.
>
> **[1:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=98)** This is actually one of the lesser known pieces of JavaScript syntax that you'll find.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=102)** But anyway, inside of that backtick string is where we can actually define our style.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=109)** So here's what this is going to look like.
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=111)** We're just going to add a few styles that, again, is going to make these ToDoListItems look like floating cards.
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=117)** So we'll just say something like border-radius, and we'll set that to something like 10px.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=124)** And then what we're going to do is we're going to say box-shadow, and I'm just going to add a value for that.
>
> **[2:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=129)** You can feel free to copy this if you want or come up with your own.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=133)** And finally, we're going to say something like padding, and we'll set that to maybe 16 pixels.
>
> **[2:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=139)** And that should be all we really need to do there.
>
> **[2:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=142)** So now that we've created our CardContainer styled-component, we can use this thing in exactly the same way as how we're able to use regular React components, just by changing the div here to CardContainer.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=160)** And we'll change the closing tag there to CardContainer as well.
>
> **[2:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=164)** So let's just add that there, CardContainer.
>
> **[2:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=168)** There's one thing we need to change there, that should be a semicolon instead of a comma.
>
> **[2:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=172)** So now, if we go and take a look at our app, and make sure your app is running both the front end and the server, we should see that, sure enough, it has those styles that we defined.
>
> **[3:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=181)** And let's actually change those to make that a little bit darker.
>
> **[3:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=185)** Alright, so we'll change this to maybe 0.5 instead.
>
> **[3:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=189)** Let's take another look at that, and yup, sure enough, we have these nice floating cards.
>
> **[3:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=193)** Now, feel free to go through your application and add styled-components like this to any part of it.
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=200)** For example, you might want to add that to the new to-do form or something like that.
>
> **[3:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/creating-a-styled-component?u=76281980&t=204)** But anyway, that's the basics of how to create and use a styled-component.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), npm (1), find (1)
> **Code Keywords:** let (5), const (1), finally, (1)
> **Prerequisites:** install (3)
> **Env Vars:** html (1)
> **Versions:** 0.5 (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Passing props to styled-components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=0)** So now that we've seen the basics of creating, and using styled components, let's take a look at how we can pass props to styled components, right.
>
> **[0:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=10)** First of all, the reason why we might want to do this is if we wanted to be able to specify something about the appearance of our styled components in the regular react props way.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=20)** So maybe we want our card container to be highlighted as important, we could say important equals true, or the equivalent in React would just be saying important.
>
> **[0:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=32)** And maybe that would highlight the background of that card container as, I don't know?
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=38)** Bright yellow or something like that.
>
> **[0:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=39)** Well, in order to do this, all we really need to do is take a look at the props, and we can do that in a styled component by inserting a simple inline function into our styled components string here.
>
> **[0:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=58)** So we're going to say dollar sign, followed by curly braces, and then we're going to say props, and we basically get to return whatever we want to go in this part of the string.
>
> **[1:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=70)** All right.
>
> **[1:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=71)** So if we want to check if something is important, and highlight it as such, we could say props, props.important.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=79)** Right.
>
> **[1:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=80)** And maybe we'll say double ampersand.
>
> **[1:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=84)** And if our card container has the prop important, we're going to say background color, and then we'll put the value of something like yellow for that, and that should be all that we need to do there.
>
> **[1:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=99)** So let's give that a try.
>
> **[1:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=102)** We should see that this important thing applies.
>
> **[1:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=104)** Now we'll leave that on our cart container as a prop.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=107)** So if we open up our application, sure enough, we'll see that the background there is yellow.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=112)** That looks a little bit ugly, but we'll leave it.
>
> **[1:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=114)** And if we were to take this important thing off, we'll see that that goes back to the way that it was before.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=121)** So again, you could use whatever logic you want to decide if that important prop should actually be there.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=127)** Maybe you want to say that something should be marked as important if the text ends in an exclamation point.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=136)** So here's what that would look like.
>
> **[2:17](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=137)** We could say important=todo.text.endsWith.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=144)** and we could check and see if it ends with an exclamation point.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=147)** And let's just go back to here, and what we'll do is we'll try, and add a new to do that has an exclamation point at the end.
>
> **[2:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=153)** We'll say something like learn styled components with an exclamation point.
>
> **[2:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=159)** And if we click create to do, sure enough, we see that that's going to apply that style accordingly.
>
> **[2:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/passing-props-to-styled-components?u=76281980&t=165)** So anyway, that is the basics of passing props to styled components.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1), this, (1), function (1), try. (1)
> **Code Identifiers:** endswith (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 11. Testing

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Testing React ecosystems
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=0)** - [Instructor] All right, so at last we come to the final section.
>
> **[0:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=4)** Now that we've seen all of these different ecosystem tools that help us do different things, we're going to take a look at how to test some of these ecosystem tools.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=14)** And the first thing to keep in mind here is: let's just think back to what each of these tools allowed us to do in the first place, right?
>
> **[0:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=22)** In general, each of these tools, Redux, Redux Thunk, Styled Components and so on, gave us ways to isolate different types of code, right?
>
> **[0:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=33)** So reducers, for example, allowed us to isolate logic for changing our application's state, for example.
>
> **[0:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=41)** Well, fortunately this fact, the fact that these tools help us isolate different types of code and split it up into chunks that make a little bit more sense, this almost always makes it easier to test our applications than if we had all of this logic lumped together into very large components.
>
> **[1:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=64)** So really the main strategy with testing all of these things, as you'll see over the next few videos, is given a specific input, all we want to do is test the output.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=76)** So for reducers, for example, we'll just want to test that given, you know, a certain state and a certain action, we get a specific updated state, right?
>
> **[1:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=86)** Our updated state matches what we would expect.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=90)** This is going to go for pretty much everything else, as you'll see shortly, but that is going to be the basic idea.
>
> **[1:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-react-ecosystems?u=76281980&t=96)** So let's jump right in and see how we can test our ecosystem tools.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), else, (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Testing reducers
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=0)** - Alright, so the first type of thing that we're going to talk about testing here is reducers.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=6)** And specifically, if we open up the slices that we created.
>
> **[0:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=11)** Such as the to-do slice.
>
> **[0:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=14)** The main thing that we want to be able to test here is the functionality of each of these things here.
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=19)** So the same thing would be true for the other slice as well, that we created.
>
> **[0:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=24)** The loading slice.
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=26)** Basically, we just want to have a way to test that each of these things is going to modify the state in the way that we want it to.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=35)** Alright, now at first glance, this might seem a little bit more complicated than it really is.
>
> **[0:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=40)** It's actually very simple.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=43)** So if we wanted to test, for example, one of these, let's say one of these loading slices.
>
> **[0:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=49)** All right?
>
> **[0:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=50)** For example, the loading started slice.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=53)** All we really need to do here is check to make sure that when this function here is called, it operates on the state in the way that we want it to.
>
> **[1:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=63)** So let's just create a simple function here.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=67)** We'll create a file of course, to put that inside of, and we'll just call this something like loading slice dot test dot js.
>
> **[1:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=76)** Now you can obviously use any testing library that you're comfortable with here, and there are plenty of other good courses on this in the library if you want to check those out in more depth.
>
> **[1:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=88)** Such as Jest or React Testing Library.
>
> **[1:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=91)** But all that we're going to do here in order to test this loading slice, the loading slice reducers that we're looking at here, is create a simple function that asserts that something should be a given value.
>
> **[1:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=103)** So here's what this is going to look like.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=105)** We're going to start off by importing that slice.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=108)** So we'll say import.
>
> **[1:50](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=110)** And this is going to be loading slice from the loading slice file.
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=117)** And the next thing that we're going to do here is we're going to create a function and we're just going to call it test loading slice.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=124)** Again, if you were using Mocha and Chai for example, you would actually create a series of tests like this, right?
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=131)** You would say test, and then you would say something like loading slice, et cetera.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=136)** But just to keep things simple, I'm going to avoid those.
>
> **[2:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=140)** All right, so as far as the test goes, it's not quite as straightforward as just saying loading slice, dot loading started, for example.
>
> **[2:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=148)** What we actually have to do here is define these separately so that we can access them.
>
> **[2:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=154)** And honestly, the easiest way to do this is going to be to simply say export const.
>
> **[2:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=161)** And we'll call this something like loading slice definition.
>
> **[2:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=166)** I'm just going to abbreviate that as DEF.
>
> **[2:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=168)** And now we're just going to pass the loading slice.
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=173)** We'll change the name of that there.
>
> **[2:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=174)** Loading slice definition.
>
> **[2:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=177)** To create slice, right?
>
> **[3:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=180)** This will allow us to actually access this loading slice definition here and actually call those functions inside of it.
>
> **[3:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=186)** Now, I should mention that this is probably the only time when directly calling these things is not actively discouraged, right?
>
> **[3:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=196)** You're not supposed to actually call these things directly outside of your tests.
>
> **[3:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=201)** But this just makes these things very easy to test.
>
> **[3:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=204)** And in fact, that's one of the most powerful aspects of the Redux library.
>
> **[3:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=208)** So here's what this is going to look like.
>
> **[3:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=209)** Now we're actually going to import loading slice definition from loading slice.
>
> **[3:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=215)** And now we're just going to say loading slice definition dot reducers.
>
> **[3:41](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=221)** I believe that's what we do there.
>
> **[3:44](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=224)** Yep. Dot reducers.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=225)** And then we're going to say dot loading completed.
>
> **[3:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=229)** And in order to test this thing, we really just have to come up with a fake state and check to make sure that completed is set to false.
>
> **[3:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=239)** So here's what that's going to look like.
>
> **[4:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=240)** We're just going to say something like, const fake state equals, and we'll just say loading true in there.
>
> **[4:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=249)** And now we're going to pass that fake state to this loading completed the reducer here.
>
> **[4:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=256)** And now we're going to check and see.
>
> **[4:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=259)** We're going to say if fake state dot loading.
>
> **[4:23](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=263)** And oops, let me just make sure that that's the right thing there.
>
> **[4:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=266)** Oh, in fact, that's not even the right thing.
>
> **[4:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=268)** We need to say dot value dot completed.
>
> **[4:31](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=271)** All right, so we're going to say fake state dot value dot completed.
>
> **[4:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=275)** And we'll do the same thing here.
>
> **[4:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=277)** We're going to say value and then completed and set that to true.
>
> **[4:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=283)** And now we're going to say, if that's true, then we're just going to throw an error here saying that that failed.
>
> **[4:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=289)** We'll say, throw new error, it failed.
>
> **[4:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=293)** You'd obviously want to have this be a little bit more in-depth or use some sort of test runner, but otherwise what we'll do is we'll just say something like console dot log.
>
> **[5:02](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=302)** The loading completed reducer works.
>
> **[5:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=309)** All right.
>
> **[5:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=310)** So in order to run this thing, it's pretty straightforward.
>
> **[5:12](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=312)** All we need to do is just make sure to change directories into your, to-dos to-do list app directory if you aren't already there.
>
> **[5:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=321)** And you can run this just by saying node source slash loading slice dot test dot js.
>
> **[5:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=328)** And oops, it looks like we got an error there.
>
> **[5:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=329)** That's just because when we're running things like this in modules, we need to add dot js onto the end of there.
>
> **[5:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=336)** So let's just try that again.
>
> **[5:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=338)** Oops, one more time.
>
> **[5:39](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=339)** There we go.
>
> **[5:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=340)** And oh, I forgot one last thing.
>
> **[5:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=342)** And that is to actually call test loading slice like so.
>
> **[5:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=347)** So let's just give that another try.
>
> **[5:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=349)** And ah, it looks like it failed.
>
> **[5:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=352)** And that's just because this should have been loading started.
>
> **[5:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=356)** I was getting mixed up with the wrong thing there.
>
> **[5:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=358)** So we'll say loading started Reducer Works.
>
> **[6:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=360)** Let's just try that one more time there.
>
> **[6:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=363)** And sure enough, we see the loading started Reducer works.
>
> **[6:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=367)** And you know, if we were to change this so that it no longer did what it was supposed to do, we would see that that test would fail, right?
>
> **[6:14](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=374)** It would say it failed and we would have to go in and fix it.
>
> **[6:18](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=378)** So let's just make sure we change that back, of course.
>
> **[6:21](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-reducers?u=76281980&t=381)** And that is the basics of testing reducers when working with Redux.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4), const (2), pass (2), throw (2)
> **CLI Commands:** make (5), node (1)
> **Analogies:** for example (4), such as (2)
> **Env Vars:** def (1)
> **Definitions:** is called (1)
> **Speakers:** - alright (1)

#### Testing selectors
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=0)** - [Instructor] All right, so now that we've seen how to test reducers, let's take a look at how to test selectors.
>
> **[0:06](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=6)** The good news here is that testing selectors is probably one of the easiest things to test.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=13)** It's in fact so easy that this could probably be used to teach test-driven development in the  first place, right?
>
> **[0:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=19)** So with selectors, all you really have to do is come up with a realistic starting value for the state and make sure that the value returned by the selector is what you would expect it to be, right?
>
> **[0:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=33)** So again, this is very straightforward.
>
> **[0:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=35)** All we're going to do is create a new file inside Source.
>
> **[0:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=38)** We'll call this selectors.test.js.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=42)** And now I'll just demonstrate this, you know what?
>
> **[0:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=45)** I'll demonstrate this on getCompletedTodos, just to give you something a little bit more complicated here, we'll say import getCompletedTodos.
>
> **[0:54](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=54)** And then, and here, this is going to need to be ,js here, just so that we can run it with the node script.
>
> **[1:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=60)** Then we're just going to start off by creating the same kind of function as what we did before.
>
> **[1:05](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=65)** We'll say something like testSelectors.
>
> **[1:08](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=68)** And you could use MOCA here, once again, just like for the reducers, but just to keep things simple and straightforward, I'm going to just use  a simple function here and check the value manually.
>
> **[1:19](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=79)** So now what we're going to do is we're going to say something like const fakeState =, and we just need to sort of create a fake redux store state that we can pass to this getCompletedTodos selector, right?
>
> **[1:35](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=95)** So what we're going to do here is we're going to take a look at, well, here, we'll say todos inside that fake state, and then we'll say value.
>
> **[1:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=105)** And this is just going to be an array here.
>
> **[1:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=107)** We'll just say something like text.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=109)** And I'm just going to do things like numbers  here basically.
>
> **[1:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=112)** But you could obviously use this as an opportunity to insert a little bit of humor into your code base.
>
> **[1:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=118)** That's what a lot of people do from what I've seen.
>
> **[2:01](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=121)** We'll just say isCompleted, that'll be false.
>
> **[2:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=124)** And then what we'll do here is we'll say text, 2, and then we'll say isCompleted, true?
>
> **[2:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=131)** And you could obviously keep going with this, but just in the interest of time, we'll leave it there.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=136)** So now that we have that fake state, we're just going to call getCompletedTodos with that fake state by saying const result = getCompletedTodos.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=147)** And we're going to pass that fake state to it.
>
> **[2:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=152)** All right, so now all we have to do is check to make sure that that result is what we would expect it to be.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=157)** So we'll just say something like, if result.length is equal to 1, and you'd probably also want to check that it's actually text 2 here, that's the one that you're seeing.
>
> **[2:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=171)** So we'll add double ampersand, result index 0.text is equal to 2.
>
> **[2:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=179)** All right, well, in that case, we'll just say console.log.
>
> **[3:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=184)** And we'll just print out the fact that this thing is working, we'll say getCompletedTodos works.
>
> **[3:11](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=191)** Otherwise, what we're going to do is we're going to say else, and we'll throw an error here, throw new error, and we'll say getCompletedTodos does not work.
>
> **[3:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=204)** And you'd probably want to print out things like the expected and actual values, but I'll leave that up to you or to whatever test runner you choose to actually use this.
>
> **[3:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=213)** All right, so let's just call test selectors now, and that should be all we need to do.
>
> **[3:38](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=218)** So let's run this code.
>
> **[3:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=220)** We're just going to say node srce/selectors.test.js.
>
> **[3:46](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=226)** And sure enough, we see that it works.
>
> **[3:47](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=227)** If we were to go in here and change something about it, for example, if we were to say not t.isCompleted in the filter, we would see that, sure enough, that would give us an error saying that it doesn't work.
>
> **[3:59](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=239)** So let's just change that back, run our test once again to make sure it works.
>
> **[4:04](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-selectors?u=76281980&t=244)** And there we go, that is how to test selectors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), function (2), const (2), pass (2)
> **Code Identifiers:** getcompletedtodos (7), iscompleted (3), testselectors (1), fakestate (1)
> **CLI Commands:** make (3), node (2)
> **File Paths:** selectors.test.js (1), srce/selectors.test.js (1)
> **Analogies:** just like (1), for example (1)
> **Env Vars:** moca (1)
> **Speakers:** - [instructor] (1)

#### Testing styled-components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=0)** - [Instructor] Alright, so now we've seen how to test reducers, as well as how to test selectors in our React ecosystem applications.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=9)** So the last thing we're going to take a look at here is how to test styled components.
>
> **[0:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=13)** Now, in general, the only thing that you'll really want to test code wise with styled components is anywhere where you have specific logic that will change the styles, right?
>
> **[0:26](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=26)** So in our case, in the case of our ToDoListItem here, we're setting the background color to yellow if the props are set to important.
>
> **[0:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=36)** So the way to test this is very similar to what I recommended with testing reducers.
>
> **[0:42](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=42)** All ya really should have to do is define a separate function that encapsulates this functionality, and then test that function.
>
> **[0:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=51)** So here's what that's going to look like.
>
> **[0:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=53)** We're just going to say const getBackgroundColor, alright?
>
> **[0:58](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=58)** And what this is going to do is it's just going to take those props, which we can even destructure if we want to, so we'll say important, like so.
>
> **[1:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=67)** And now we can just say... Oops, I meant to make that an arrow function, so let's just say =, and then add an arrow at the end there, like so.
>
> **[1:15](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=75)** What we're going to do now is we're just going to take this logic here and we'll change it a little bit.
>
> **[1:22](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=82)** In fact, we'll just say if important, we'll want to return background-color: yellow, like so.
>
> **[1:30](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=90)** And you might even just want to return that color.
>
> **[1:33](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=93)** I'll show ya how to do that in a minute, but for now, we'll just say return background-color: yellow.
>
> **[1:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=97)** Otherwise what we'll do, oops, let's just add else there, is we're just going to return background-color, and we'll give that a default background color of white.
>
> **[1:48](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=108)** Cool.
>
> **[1:49](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=109)** So that's all we would need to do there.
>
> **[1:51](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=111)** And now, we just need to replace all of this with the getBackgroundColor function, right?
>
> **[1:57](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=117)** We don't even need to call it explicitly, or ya know, add that little anonymous function because this function will be called automatically.
>
> **[2:07](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=127)** And we can test this in fact by just running our application.
>
> **[2:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=130)** So let's just say npm run dev.
>
> **[2:13](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=133)** And here, we'll also need to run the server here.
>
> **[2:16](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=136)** So let's just change directories into the to-do list application once more, and we'll just say node server.js.
>
> **[2:24](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=144)** There we go.
>
> **[2:25](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=145)** And we'll need to make those ports Public.
>
> **[2:27](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=147)** I had just closed this code space recently and reopened it, so that's why I need to do this.
>
> **[2:32](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=152)** You may find that you need to do the same thing if you close or restart a code space.
>
> **[2:37](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=157)** So now, let's just open this thing up.
>
> **[2:40](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=160)** We're going to open up the front end in a browser tab.
>
> **[2:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=163)** And what you should see here is your application will show up, and if we add an important to-do, we'll just say something like that with an exclamation point, sure enough, we'll see that that will show up like so.
>
> **[2:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=173)** And in fact, in this case, something that I want to point out is that really the logic that we would want to test, or another piece of logic that we would want to test here I suppose, would be this to-do.text.endsWith, exclamation point thing, for telling whether a to-do is important or not.
>
> **[3:10](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=190)** But anyway, that is the basics of how you would separate that logic out, and testing this would look exactly like what we saw for the other pieces of our application.
>
> **[3:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=200)** So I guess really the takeaway from seeing how to test these different pieces is that modularity is the name of the game.
>
> **[3:28](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=208)** So really, all you're going to want to do in most of these cases is separate that logic somehow, right?
>
> **[3:36](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=216)** Get it as a function, and preferably a pure function which doesn't rely on any internal or external state, and write a simple piece of code that will test it.
>
> **[3:45](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=225)** I'll leave that up to you with this ToDoListItem thing, because now that we've separated this function, it should be pretty straightforward.
>
> **[3:53](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/testing-styled-components?u=76281980&t=233)** And that's how it goes, so you should know enough now to test the basics of a React application with these different ecosystem pieces.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (5), case, (2), const (1), public (1)
> **CLI Commands:** make (2), npm (1), node (1), find (1)
> **Code Identifiers:** getbackgroundcolor (2), endswith (1)
> **File Paths:** server.js (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps for building with React
> [LinkedIn Learning](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=0)** - Well, congratulations, you've reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=3)** We have covered a lot of ground in this course, and the first thing I want to do is thank you for joining me on this journey.
>
> **[0:09](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=9)** By now, you've gained some incredibly valuable skills and the most important technologies in the React ecosystem, including tools for state management, side effects, styling, and testing.
>
> **[0:20](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=20)** Well, you're probably wondering where to go next, and the absolute best next step is to take what you've learned and apply it to projects of your own.
>
> **[0:29](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=29)** And if you have any questions or want to share your progress, feel free to post in the course's Q & A section.
>
> **[0:34](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=34)** You can also connect with me on LinkedIn or follow me on X, formerly Twitter, where I regularly post software development-related tips and tutorials.
>
> **[0:43](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=43)** And finally, if you're looking for other courses, I'd highly recommend checking out some of my other React-related courses in the LinkedIn Learning library.
>
> **[0:52](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=52)** So keep coding, keep learning, and I can't wait to see what you build with React.
>
> **[0:56](https://www.linkedin.com/learning/building-modern-projects-with-react-24955170/next-steps-for-building-with-react?u=76281980&t=56)** Best of luck with your projects, and I hope to see you in another course.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - well (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-modern-projects-with-react-4254233/codespaces)

## Skills Covered

- Web Development
- Front-End Development
- JavaScript
- React.js

## Path Context

### In [[Explore React.js Development]]
← [[React- Accessibility]] | **6 of 8** | [[React- Authentication]] →

### In [[Improve Your React Skills]]
← [[React- Securing Applications]] | **4 of 9** | [[React- Testing and Debugging]] →

## Appears In

- [[Explore React.js Development]]
- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — Web Development, Front-End Development, JavaScript
- [[Learning Functional Programming with JavaScript ES6+]] — Web Development, Front-End Development, JavaScript
- [[React Essential Training]] — Web Development, Front-End Development, React.js
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — React.js, JavaScript
- [[React- Creating and Hosting a Full-Stack Site]] — Web Development, React.js

---

[↑ Back to top](#)