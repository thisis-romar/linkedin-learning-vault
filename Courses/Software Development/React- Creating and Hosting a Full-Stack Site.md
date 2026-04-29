---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-creating-and-hosting-a-full-stack-site-24928483
url: "https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483"
duration_minutes: 249
duration: 4h 9m
level: Intermediate
updated: 11/12/2024
learners: 2795
skills:
  - Web Development
  - Full-Stack Development
  - React.js
exercise_files: true
github: "https://github.com/LinkedInLearning/react-creating-and-hosting-a-full-stack-site-5948186/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF0BLWJuFKYYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731708035316?e=2147483647&amp;v=beta&amp;t=cergr_ZvFSb-MogqOrOpAr9xN1xpI5kjb5Av4uDTk1w"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore React.js Development]]'
prev_courses:
  - '[[React.js- Building an Interface]]'
next_courses:
  - '[[React Hooks]]'
path_nav: '[{"path":"Explore React.js Development","position":3,"total":8,"prev":"React.js- Building an Interface","next":"React Hooks"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/web-development
  - skill/full-stack-development
  - skill/react-js
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/React-%20Creating%20and%20Hosting%20a%20Full-Stack%20Site.md)

![React: Creating and Hosting a Full-Stack Site](https://media.licdn.com/dms/image/v2/D4E0DAQF0BLWJuFKYYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731708035316?e=2147483647&amp;v=beta&amp;t=cergr_ZvFSb-MogqOrOpAr9xN1xpI5kjb5Av4uDTk1w)

# React: Creating and Hosting a Full-Stack Site

> You've learned React and can create amazing front-end interfaces. But deploying them requires more. You need logic—and a place to put it. By combining your front-end UI with a back-end solution and cloud hosting, you can build powerful and interactive full-stack applications. In this project-based course, Shaun Wassell shows how to combine React, Node.js, and Amazon Web Services (AWS) in a full-st

> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483) | 4h 9m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Creating a React Front-End]]** (9 videos)
- **[[#2. Creating a Node.js Back-End]]** (7 videos)
- **[[#3. Adding MongoDB to Node.js]]** (5 videos)
- **[[#4. Connecting the Front-End and Back-End]]** (7 videos)
- **[[#5. Adding User Authentication with Firebase Auth]]** (11 videos)
- **[[#6. Hosting a Full-Stack React Application]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Build your own full-stack website using React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=0)** - Imagine building and deploying your own full stack website using React.
>
> **[0:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=5)** Imagine walking into a web development interview and instead of having to face a series of contrived technical interview questions, you come prepared with your very own full stack React application that you can show off to your interviewers.
>
> **[0:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=18)** Now, that is going to make a great impression, and could be the advantage you're looking for in landing the job of your dreams.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=26)** So the question is are you up for the challenge?
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=29)** I'm Saun Wassell, and in this course, I'll be guiding you step by step through creating a full stack application with React, Node.js, Express and MongoDB, a setup commonly referred to as the MERN stack.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=42)** By the end of the course, you'll have a fully functional hosted website, which is something that you can show off to your friends and yes, even potential employers.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-your-own-full-stack-website-using-react?u=76281980&t=50)** So let's jump in and start building a full Stack React application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), node (1)
> **Analogies:** imagine (2)
> **File Paths:** node.js (1)
> **Code Keywords:** let (1)
> **Env Vars:** mern (1)
> **Prerequisites:** setup (1)
> **Speakers:** - imagine (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, there are a few concepts that would be very helpful for you to know, because I won't be mentioning them explicitly in this course.
>
> **[0:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=9)** So let's just go over what those are real quick.
>
> **[0:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=12)** The first thing is a basic knowledge of JavaScript syntax.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=16)** Obviously, since in order to use React you have to use a lot of JavaScript, it's going to be very helpful for you if you're already familiar with JavaScript's syntax.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=26)** And if you're not, you're more than welcome to try and follow along anyway, mostly just because JavaScript syntax is fairly straightforward.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=33)** But I would highly recommend that at some point you brush up on your JavaScript syntax by taking a basics course.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=41)** Now, besides this, it would also be helpful for you to know a lot of the basics of React or at least be familiar with basic React syntax since we'll obviously be using React pretty heavily in this course.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=54)** Again, you're more than welcome to just follow along and learn as you go, but if you want to be more prepared, you can always go back and take a look at a basics course of React.
>
> **[1:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=66)** And finally, since we'll be making some network requests in this course, it would also be helpful for you to have a basic knowledge of fundamental networking concepts, things like making network requests and basic terminology such as clients and servers.
>
> **[1:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=82)** If you don't have this, once again, you're more than welcome to just continue on with the course.
>
> **[1:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=87)** Just know that there may be certain things I'll say or do that you won't understand completely.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=91)** So anyway, that's really all that you need to know in order to get started with this course.
>
> **[1:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/what-you-should-know?u=76281980&t=96)** Now that we've discussed this, let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), finally, (1), continue (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Creating a React Front-End

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why React?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=0)** - [Instructor] All right, so to get started here, we're going to be building the front end of our blog site using React.
>
> **[0:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=7)** Now, you may be wondering why we choose to use React instead of just creating our site using basic HTML, CSS, and JavaScript.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=16)** Well, React has a lot of advantages over hand coding a site.
>
> **[0:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=20)** The main advantage is that it makes creating a website much simpler and faster without taking away any of the fine-grained control from the programmer.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=30)** So as you'll see, it allows us to create modular, reusable components that can then be arranged into a fully functional website.
>
> **[0:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=39)** Now, you may be wondering why you choose to use React over a platform like WordPress or Wix or Squarespace, which allow you to create a website in many cases without writing any code.
>
> **[0:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=51)** Well, first of all, since this course is aimed primarily at developers, if you want to create a blog and you're not already a fairly strong developer, I actually would recommend that you use one of these platforms instead of React.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=64)** It'll ultimately end up being much more difficult for you in the long run if you try and create a Code-based site with React and still struggle with basic coding.
>
> **[1:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=76)** So all that being said, if you do choose to use React, and if you're watching this course, I'm going to assume that you are very interested in using React, React is a fantastic tool for programmers who want to create basically any type of web application.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-react?u=76281980&t=94)** So with that knowledge, let's move on and see how we can quickly set up a React-powered front end for our site.

> [!info]- Semantic Content
>
> **Env Vars:** html (1), css (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Setting up a React project
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=0)** - [Instructor] All right, so now that we're a little bit more familiar with React and why it's going to be so helpful in creating a front end for our full-stack application, the next thing that we're going to do is see how to create a new React app.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=13)** Now, the fastest way to set up a React app from scratch is by using a generator, and the one that we're going to use here is going to be called Vite, or Vite, as the site suggests you pronounce it.
>
> **[0:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=25)** It's apparently French for fast, so what we're going to do here, I'm going to start off with this directory here, and if you don't have the same files as I have here, don't worry too much about it.
>
> **[0:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=36)** These are just basic files from the GitHub repo that I'm going to be using.
>
> **[0:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=40)** You can start with an empty directory if you want, and inside that empty directory, what you're going to want to do is open up a terminal, which you can do in Visual Studio Code or Codespaces by going to Terminal, New Terminal, and inside this terminal, you're going to run the following command.
>
> **[0:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=59)** You're going to say npm create, and then you're going to say vite@, and the recommended way of doing this for production purposes is to say @latest 'cause that will use the latest stable version to do this, but in order to make sure that you can actually use the exact same version, and in order to make sure all of the commands that I'm going to show you from here on out work for you, I'm going to suggest that you use the same version as I'm using here, which is 5.5.2, so you're going to run this command, npm create vite@5.5.2, and this is going to ask you some questions here.
>
> **[1:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=99)** It's going to ask, first of all, is it okay to proceed?
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=102)** And I'm going to say yes, and then it's going to ask us what we want to name our project.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=108)** I'll just expand this here a little bit.
>
> **[1:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=110)** We can name this whatever we want, but in order to really emphasize the differentiation between the front end and back end, I'm going to call this front-end for the project name.
>
> **[2:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=122)** The next thing it's going to ask us is to select a framework, and I'm going to select React here.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=129)** You can actually create apps of plenty of other types, such as a Vue application, a Svelte application, just a vanilla JavaScript application if you want to, but obviously, since this is a course about full-stack React, we're going to choose React.
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=143)** Next thing it's going to ask us is if we want to use TypeScript or JavaScript.
>
> **[2:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=148)** Just to keep things simple here, I'm going to use JavaScript, but if you're a fan of TypeScript, feel free to use that here instead, and now that we've done that, what Vite has done for us is created this whole front-end directory with lots of useful files inside of it that make up our React project, so if you take a look inside of here, and specifically, inside the src directory, you're going to see that we have a React component all ready to go called App.jsx, and if you run this application, you'll actually see what this is.
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=183)** It's just a basic boilerplate page that you can use to test and make sure your setup is working, so in order to do this, right?
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=191)** Now that we've created our React app, let's actually run this thing and take a look at it in a browser.
>
> **[3:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=197)** What you're going to need to do for that is, first of all, install all of the dependencies.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=202)** Vite does not do that for you, so we're going to change directories into the new front-end directory we just created, and then we're going to say npm install inside of there, and again, that's going to install all of the npm packages that this project needs in order to run, among them, of course, things like React, all right?
>
> **[3:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=224)** And that's going to run for a little bit, but once it finishes, we should be able to run our project now, and the way that we do that in a project created using Vite is by saying npm run dev, and once again, make sure that you're running this inside this front-end directory, not in the surrounding directory, so I'm going to hit Enter, and sure enough, that will start up our app, and as you can see here, it's running on localhost:5173.
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=254)** Now, if you're using Codespaces here as I am, the process is going to be a little bit different than if you're running it locally.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=261)** If you're running it locally, you can just open that right up by opening a browser and typing in HTTP whatever this URL is here, right?
>
> **[4:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=270)** However, in Codespaces, because this isn't actually running on localhost on our own computer, you're going to need to go to PORTS in your bottom pane here, and if you take a look at Forwarded Address, you're just going to want to click on the little globe icon next to that, and that's going to open up your application in another tab, and sure enough, we see the new React application that the Vite script generated.
>
> **[4:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=297)** It's got Vite + React.
>
> **[4:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=299)** It's got the two icons, and they have this neat little hover effect, and if you click on this button, it keeps track of how many times it's been clicked, so the last thing that we're going to do here is I'd like to demonstrate something for you that Vite does for us that is going to make this application much easier to build, so if we go back into our editor here, all right?
>
> **[5:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=324)** We're going to open up App.jsx, which is the component that we're seeing there, and let's just make a change to some part of this.
>
> **[5:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=332)** You can really change any of the texts that you want on the page.
>
> **[5:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=335)** I'm going to add, after this message that says Edit App.jsx and save to test HMR.
>
> **[5:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=343)** I'm just going to say Just did!
>
> **[5:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=345)** And if we save this file and go back to our app running in the browser, sure enough, we see that that's automatically updated.
>
> **[5:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=353)** This is known as HMR, or Hot Module Reloading, which basically just means that our app can update to incorporate changes without restarting.
>
> **[6:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-a-react-project?u=76281980&t=363)** It's, as I said, going to make this much easier to build our front end.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), npm (5)
> **Code Keywords:** this, (2), let (2), this. (1), module (1)
> **Tools:** terminal (4), github (1), visual studio (1)
> **Env Vars:** hmr (2), http (1), url (1), ports (1)
> **Prerequisites:** install (3), set up (1), setup (1)
> **File Paths:** app.jsx (3)
> **Definitions:** is a  (1), known as (1), means that (1)
> **Versions:** 5.5.2 (2)

#### Creating the home page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=0)** - [Instructor] All right, so now that we've got a very basic React app up and running, let's start creating the pages for our blog site.
>
> **[0:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=8)** Now, the first thing that we're going to do here, because it's going to make it easier for us, is we're going to create a new folder in our src directory for our front end, and we're going to call that folder pages.
>
> **[0:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=19)** Now, there's no requirement that we have to put our page components inside a directory called pages in a React app.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=26)** But ultimately it's just going to make it easier for us, in this case, to keep track of where everything is.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=33)** So let's create a new file in there.
>
> **[0:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=35)** And we're going to call this file HomePage.jsx.
>
> **[0:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=40)** And this is obviously going to represent the homepage of our application.
>
> **[0:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=44)** So let's just create a very simple page component here that's going to look like this.
>
> **[0:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=49)** We're going to say export default function HomePage().
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=55)** And then inside the component, all we're going to do is return a simple h1 heading that says, "This is the Home Page!"
>
> **[1:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=65)** All right, and once again, this JSX that we're returning is what's going to be displayed wherever our page component needs to be rendered in our app.
>
> **[1:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=76)** So at this point though, our homepage component isn't going to be displayed at all because what our app is doing, if you take a look at this main.jsx file, this is what's known as the entry point for our application.
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=93)** In other words, this is the first file that will get executed when our React app is rendered in a browser.
>
> **[1:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=100)** So in other words, when we navigate to local host 5173, our browser is going to run this code right here in order to start rendering our app.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=111)** So as we see, we have the app component being rendered, but that's about it.
>
> **[1:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=116)** So what we're going to do next is we're going to go into our app component into App.jsx.
>
> **[2:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=122)** We're going to remove all of the boilerplate code that it gave us here.
>
> **[2:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=128)** And, instead, we're just going to have our app component display our single homepage component, which we can do by just starting to type HomePage.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=138)** And depending on your IDE, it may just complete that for you.
>
> **[2:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=142)** And also add the import statement up at the top, which is really nice.
>
> **[2:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=146)** And sure enough, we see import HomePage from pages/HomePage was already added.
>
> **[2:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=151)** And this now will display our homepage.
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=155)** Now, you'll see that we also get some red underlines for a lot of these things.
>
> **[2:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=159)** And that's just because our viteProject is pretty strict about not having things around that aren't being used.
>
> **[2:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=167)** So you may see, depending on your settings, that that will actually cause your app to crash.
>
> **[2:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=172)** But in this case, that's not the case.
>
> **[2:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=174)** We can actually just leave those there if we wanted to.
>
> **[2:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=178)** I'm going to remove them just because we won't be needing those for the rest of the app.
>
> **[3:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=182)** We'll just remove all of those like so and import them again if we need them.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=186)** Cool. So at this point, our homepage should be showing up.
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=191)** So let's go take a look at this in our browser again.
>
> **[3:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=194)** Sure enough, what we see is that we have this big text saying, "This is the Home Page!"
>
> **[3:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=199)** right in the middle of our app, which is displayed really no matter what route we're on.
>
> **[3:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=205)** So the next thing that we're going to need to do here is because we want our blog application to have multiple pages, right?
>
> **[3:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=213)** For example, we want to have a list of articles on the route/articles, and we want to be able to have maybe an about page on /about, we need to actually add routing to our app.
>
> **[3:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-the-home-page?u=76281980&t=227)** And that's what we're going to be taking a look at next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), this. (1), function (1), case. (1)
> **File Paths:** homepage.jsx (1), main.jsx (1), app.jsx (1)
> **Definitions:** in other words (2), known as (1)
> **CLI Commands:** make (2)
> **Env Vars:** jsx (1), ide (1)
> **Code Identifiers:** viteproject (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** boilerplate (1)

#### Adding React Router to an application
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=0)** - [Instructor] Alright, so now that we've created our homepage and rendered that from our app component, as I said, the next thing we're going to need to do is create the other pages for our app and display those on different routes.
>
> **[0:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=14)** Alright, so in other words, we're going to need some sort of logic here that will look at the current path that's in the URL in our browser before deciding what to render.
>
> **[0:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=27)** Now there's actually a package that does this for us already and that is a package called React Router Dom.
>
> **[0:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=36)** Now we do need to install this into our application.
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=38)** So what you're going to want to do is open up your app, you can stop it too with Ctrl + C, and we're going to say, "npm install react-router-dom."
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=50)** And in order to make sure that this is the same version as the one that I'm using, you're going to want to add a version on the end here.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=58)** And the current version is 6.4.
>
> **[1:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=63)** So if you just say, "react-router-dom@6.4," everything should work in pretty much the same way as what I'm going to do here.
>
> **[1:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=71)** So let's just install that and make sure that you install that in the front end directory here instead of in the surrounding folder, of course.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=79)** And now that we have that, the next thing we're going to do is open up the App.jsx file again, right?
>
> **[1:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=87)** The app component, sort of the top level component in our application.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=91)** And we're going to add a little bit of logic to this using that React Router Dom library that we just installed.
>
> **[1:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=99)** So here's what this is going to look like.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=102)** We're going to start off up at the top.
>
> **[1:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=105)** I recommend doing this above the local imports, just to keep everything organized.
>
> **[1:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=109)** We're going to say, "import," and we're going to import something called, "createBrowserRouter," and we're also going to import something called, "RouterProvider" from that library that we just installed, which is "react-router-dom."
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=129)** Cool, so now that we have those two things imported, here's what this is going to look like.
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=133)** The first thing that we're going to need to do is define an array of JavaScript objects that will tell React Router Dom what page should be displayed for each path in our application, right?
>
> **[2:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=148)** So in other words, when we're at, let's say local host 5173/articles, what page component should we use there?
>
> **[2:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=157)** If we're just at local host 5173/, right, the home route, what page should we display there and so on.
>
> **[2:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=164)** So here's what this looks like.
>
> **[2:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=165)** We're just going to say, "const routes =," and then as I said, this is going to be an array of JavaScript objects with specific properties, and those properties are going to be, "path," which tells React Router Dom what path we're talking about.
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=183)** We'll start off with just the home route here, and then we're going to say, "element," and this, as I said, tells React router dom what to display when we're at that path.
>
> **[3:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=194)** So in our case for the home route, we're going to want to display the homepage.
>
> **[3:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=198)** So we can just say, "element," and we're going to use JSX here.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=202)** And actually instead of h1, we could just say, "This is the home page," if we want it to, but it's generally recommended to have separate components like what we've done here in order to keep things more manageable.
>
> **[3:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=215)** So we'll just remove that and say, "HomePage," like so.
>
> **[3:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=219)** And now what we're going to do is we're going to take those routes and we're going to create something called a browser router with it by saying, "const router =," and we're going to use that "createBrowserRouter" function that we imported and pass our routes to it.
>
> **[3:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=239)** And the last thing we need to do is replace our homepage element here with something called a "RouterProvider."
>
> **[4:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=248)** And this is going to take a prop called "router," and we're just going to pass that router that we created to that.
>
> **[4:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=256)** Cool, so that is how we set up our application to display different pages at different routes.
>
> **[4:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=263)** Let's just verify that this works with our homepage.
>
> **[4:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=265)** So let's rerun our application with "npm run dev."
>
> **[4:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=270)** And now we're going to go back to here, and we should be able to just refresh this page, and it will open that up.
>
> **[4:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=275)** And sure enough, we see that the homepage shows up.
>
> **[4:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=278)** But if we go to some other path here, right?
>
> **[4:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=281)** If we just type stuff after this, we'll see that that throws a "Not Found" error, basically just indicating that we didn't have a specified action for that path in our routes, right?
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=294)** We didn't have a specified element that is for that path in our routes array.
>
> **[5:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=300)** So let's just go back to the home route here by deleting that, and we'll see the homepage again.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=305)** So let's now create our other pages that our application is going to need.
>
> **[5:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=312)** So here's what this is going to look like inside the pages directory.
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=317)** Oops, let's just close this here.
>
> **[5:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=319)** There we go.
>
> **[5:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=320)** So over here in the pages directory, we're going to create a few more pages.
>
> **[5:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=325)** The first one is going to be an about page.
>
> **[5:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=328)** So we'll just say, "AboutPage.jsx."
>
> **[5:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=332)** Oops, I forgot the X on the end there.
>
> **[5:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=334)** So let's just add that.
>
> **[5:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=336)** Then we're going to create our articles list page.
>
> **[5:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=339)** This is the page that's going to display all of the articles that are on our site.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=344)** And finally we're going to have another file, which will be the individual article page.
>
> **[5:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=349)** We'll just call it "ArticlePage.jsx."
>
> **[5:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=352)** And this is going to be the component, as you'll see a little bit later, that we'll use to display not just a single article, but actually each individual article when we navigate to it.
>
> **[6:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=364)** I'll show you how to do that a little bit later.
>
> **[6:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=366)** But for now what we're going to do is we're just going to copy the basic setup for our homepage component here and paste it inside these files.
>
> **[6:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=376)** And then, of course, we'll go back through and edit these.
>
> **[6:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=379)** So this is going to become our article page.
>
> **[6:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=382)** We'll change the text here to say, "This is the Article Page."
>
> **[6:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=385)** For articles list, we're going to change the name of that component to "ArticlesListPage."
>
> **[6:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=391)** And then, "This is the Articles List Page."
>
> **[6:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=395)** And finally, we're going to go back to the about page and change this to, "This is the About Page."
>
> **[6:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=400)** And we're going to change the name of this function to "AboutPage."
>
> **[6:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=404)** So now that we have all four of those pages, let's go back to our app component and add new routes for each of those.
>
> **[6:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=412)** What that's going to look like is we're just going to say, "path," we'll do "/about" for the about page, and then we'll say, "element," and we'll say, "AboutPage," for that.
>
> **[7:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=421)** Again, that was automatically imported for me.
>
> **[7:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=424)** That's what I'll be doing for the rest of these pages as well.
>
> **[7:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=428)** Then for the articles list page, we're going to say, "path," that's going to be, "/articles."
>
> **[7:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=433)** And then we're going to say, "element," "ArticlesListPage," that was just automatically imported for me.
>
> **[7:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=440)** And finally, we're going to do the individual article page.
>
> **[7:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=443)** As I said, this one's going to be a little bit different than the rest of the pages, but for now, we'll just say, "articles/individual," all right?
>
> **[7:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=454)** And then we'll say, "element," and we'll say, "ArticlePage."
>
> **[7:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=459)** Cool, so now we have four routes in our application instead of just one.
>
> **[7:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=464)** So let's test this thing out by going back over to our browser.
>
> **[7:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=468)** And up here in the URL, we're just going to add "/about" on the end of that URL.
>
> **[7:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=475)** And sure enough, we see that that displays the about page.
>
> **[7:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=478)** If we go to "/articles," we see, sure enough, this is the articles list page, and if we go to "/articles/individual," we see, that sure enough, that displays the individual article page.
>
> **[8:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=495)** Cool, so at this point, we have all of the routing set up for our pages.
>
> **[8:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-react-router-to-an-application?u=76281980&t=500)** So the next thing that we're going to do is actually start going through and implementing each of these pages in a little bit more of an exciting way than just showing what page it is using an h1 heading.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), const (2), this, (2), function (2), pass (2)
> **Prerequisites:** install (4), set up (2), setup (1)
> **CLI Commands:** npm (2), make (2)
> **Env Vars:** url (3), jsx (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** go to (3), navigate to (1)
> **File Paths:** app.jsx (1), aboutpage.jsx (1), articlepage.jsx (1)
> **Definitions:** in other words (2), is a  (1)

#### Using React Router links
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=0)** - [Instructor] All right, so at this point we have four separate pages in our blog site, but it would be nice if we could navigate between these things without having to actually type in the URLs up at the top of the browser.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=13)** So what we're going to do in this video is we're going to create a NavBar component that will be displayed on all of the pages.
>
> **[0:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=20)** So the first thing that we're going to do is we're going to say New file, and we'll create a new file called NavBar.jsx.
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=29)** And inside here, we're going to say export default function NavBar.
>
> **[0:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=36)** And we'll just cut right to the chase and start implementing this thing.
>
> **[0:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=39)** Here's what our NavBar is going to look like.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=42)** We're going to say <nav> and use that semantic nav element there.
>
> **[0:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=46)** And then inside this, we're just going to use an unordered list with list items for each of the links that we want to add up here.
>
> **[0:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=53)** Now for now, we're only going to have links for the homepage, the about page and the articles list page.
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=62)** The article detail page, as I said, is going to be a little bit different because we'll want to make it accessible by clicking links to specific articles in the articles list.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=73)** So for now, though, let's just say that we want to have a Home route here.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=79)** All right, we'll come back and actually add the linking capabilities to this shortly.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=83)** We'll have an About page.
>
> **[1:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=86)** And last but not least, we'll have an Articles page.
>
> **[1:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=89)** All right, and those are all just going to be list items inside of there, and that should be all we need to do, except now we want to link each of these things to the other pages.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=102)** So the way that we do this using react-router-dom, at least the V6, which is significantly different than versions 4 and 5, is we're going to say import and we're going to import a component called Link from react-router-dom.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=119)** Now, there is an important reason why we have to use this link component instead of just using a regular anchor tag in a React application, but I'll explain that in more detail once we've added this link.
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=133)** So what we're going to do here is inside each of these LI elements, we're just going to add a link around the text, and we're going to add a prop to it called to that will determine where clicking this link will take you.
>
> **[2:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=149)** So this is just a relative path here.
>
> **[2:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=152)** So for the Home route, we're just going to say to='/', and we'll want to put the home text inside that link, all right?
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=160)** And then we'll do the same thing for about.
>
> **[2:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=162)** What we're going to do is just say link to='/about'.
>
> **[2:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=168)** There we go.
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=169)** And we'll put the about text inside of there by cutting and pasting it like so, there we go.
>
> **[2:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=176)** And now for the Articles list page, we're going to say that we want to link that to /articles, and that's all we need to do there.
>
> **[3:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=187)** Let's just put the articles text inside of there as well.
>
> **[3:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=190)** So we'll just paste that right there.
>
> **[3:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=193)** And that should be all we need to do for our NavBar.
>
> **[3:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=196)** Now the tricky part here is getting our NavBar to show up regardless of what page is currently being displayed.
>
> **[3:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=204)** Because well, we could obviously just import the NavBar and add it to all of our pages, that would certainly work.
>
> **[3:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=211)** But that would be duplicating quite a bit of code.
>
> **[3:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=214)** And what happens if we want to change the layout significantly is we would have to go through each of our pages and make the same change in all of them.
>
> **[3:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=222)** So we don't want to do that, but if we go back to our app component and just try and add our NavBar above our router provider, and we will have to use a React fragment in order to make this work.
>
> **[3:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=236)** Oops, let's just say NavBar/ and React fragments look like this.
>
> **[3:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=239)** We can just put opening and closing triangle brackets and we need to put these things inside of it, right?
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=246)** React just doesn't like it when there's more than one top level element.
>
> **[4:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=251)** All right, so we could try and do this, but it's not going to work.
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=254)** And if you take a look at the app in your browser, you'll see that nothing's getting displayed.
>
> **[4:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=259)** And if you open up the Inspect window and go to Console, you'll see that we're getting quite a few errors that say things like usehref may only be used in the context of a router component.
>
> **[4:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=271)** Now, the reason that we're seeing this is because we're not allowed to use a link component like we did in our NavBar outside of a router provider here, right?
>
> **[4:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=284)** So in other words, we can only use this thing inside elements that are being displayed by this router provider component.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=294)** So what we're going to need to do here, it's actually a pretty straightforward fix.
>
> **[4:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=299)** We're going to need to actually create a layout component that will take care of displaying the things that are in common between all of the pages.
>
> **[5:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=306)** So inside the Source Directory, we'll just create a component called Layout.jsx.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=313)** And what we're going to do inside of there is we're just going to display that NavBar here.
>
> **[5:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=319)** In fact, I'm just going to copy the app component and say export default, and then we'll paste that like so.
>
> **[5:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=327)** All right? And we'll call this layout instead, all right?
>
> **[5:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=331)** And now what we're going to do is we're going to add the NavBar there, which we do need to import.
>
> **[5:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=336)** So let's just go back and copy that import as well, copy that and paste it up at the top of our layout component.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=344)** And instead of this RouterProvider thing, what we're going to do is we're going to add a component from the react-router-dom library again, called Outlet.
>
> **[5:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=356)** Now, what this Outlet stands for is it basically leaves a space in the JSX of this layout component that the matching page for the current route will be rendered into, right?
>
> **[6:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=370)** So this outlet basically represents whatever page is currently being displayed.
>
> **[6:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=375)** And now that we have this layout, here's how we're going to modify our app component and our routes.
>
> **[6:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=382)** All that we're going to do here is take all of the routes that we just created for our pages, right?
>
> **[6:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=388)** This entire array here, we're going to assign that to a property called children inside a single top level route.
>
> **[6:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=397)** So here's what that's going to look like.
>
> **[6:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=399)** We'll indent this thing like so, and then inside here, we're going to create an object and we're just going to say path: home route.
>
> **[6:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=408)** This'll cause it to apply to all of the routes in our application.
>
> **[6:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=413)** Then we're going to say element, and we're going to display the Layout component.
>
> **[6:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=418)** Remember that that Layout component has the outlet inside of it, and let's just make sure that that's imported there.
>
> **[7:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=425)** And now we're going to take this children property and put it inside that route definition.
>
> **[7:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=433)** So we'll just paste that right there.
>
> **[7:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=436)** And what this is going to do now is it's going to display this layout on all the routes, and also it's going to render whatever page matches these routes inside its outlet, right?
>
> **[7:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=449)** That's what the outlet component does.
>
> **[7:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=451)** So we should be good to go here, except we need to remove this NavBar from the app component, right?
>
> **[7:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=458)** We no longer need it there because the NavBar is going to be rendered as part of our layout component.
>
> **[7:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=463)** So let's remove that NavBar import from App.jsx, and we should be able to go back to our browser.
>
> **[7:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=469)** And sure enough, we see that we have these links.
>
> **[7:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=471)** And furthermore, if you click on these, it'll take you to the correct page.
>
> **[7:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=476)** This isn't the best looking NavBar in the world, but we'll fix that shortly.
>
> **[8:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=480)** Now, going back to the question of why we had to use this link thing in the first place instead of just an anchor tag.
>
> **[8:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=489)** Well, since React applications are generally going to be single page applications, meaning that even though it looks like our application has multiple pages, it's really just JavaScript logic behind the scenes swapping out the pages as the route changes.
>
> **[8:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=505)** Now, because of this, there's no reason to reload the page fully as the anchor tag is designed to do, right?
>
> **[8:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=514)** The anchor tag is actually designed to send a request to a server when it's clicked on to load another page, which we don't need to do in React apps.
>
> **[8:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=524)** So feel free to test and see what happens if you use an anchor tag instead of a link.
>
> **[8:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=529)** And what you'll see is that whenever you click on a link, the entire page will refresh, which doesn't happen here.
>
> **[8:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=535)** Let me just get out of full screen.
>
> **[8:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=537)** That doesn't happen when we use that link component.
>
> **[9:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=540)** So anyway, that is how to use React router links, as well as create a NavBar.
>
> **[9:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=547)** So the next thing that we're going to do here is figure out how to actually link to our final page, which is going to be the article detail page.
>
> **[9:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-react-router-links?u=76281980&t=559)** So that's what we're going to see next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (3), function (1), this. (1), default, (1)
> **CLI Commands:** make (4)
> **File Paths:** navbar.jsx (1), layout.jsx (1), app.jsx (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is an  (1), in other words (1), stands for (1)
> **Cross-References:** go back to (2)
> **Env Vars:** jsx (1)
> **Speakers:** - [instructor] (1)

#### URL parameters with React Router
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=0)** - [Instructor] All right, so at this point, we have a NavBar that allows us to go to three of the pages in our application, but we still need to be able to access the individual ArticlePage and display multiple articles using that page.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=16)** So here's how this is going to work.
>
> **[0:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=19)** First of all, we're going to need to go back to our app component, and the routes that we defined, and make a slight change to the path that we defined for our ArticlePage.
>
> **[0:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=31)** Instead of saying /articles/individual, we're going to say /articles/, and then we're going to use a colon followed by name, all right?
>
> **[0:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=44)** Now, this is what's referred to as a URL parameter, or a route parameter, and basically, what this colon name thing allows us to do is catch all routes that start with articles and have something else after them, so, in our case, this could be /articles/123, or if it's the article's name, as you'll often see on blog sites, such as /articles/learn-node, for example, or /learn-react, then this page is going to be rendered on all of those routes.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=79)** Now, the beauty of this, right, the really useful part about these route parameters is that we can actually see the value of this part of the path, right?
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=93)** We've called it name here, and you can call it anything you want.
>
> **[1:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=95)** You could call it id if you wanted to, or you could call it blah if you really wanted to.
>
> **[1:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=101)** We're just calling it name because that makes the most sense.
>
> **[1:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=103)** You can actually see the value of that and use it to load the appropriate article and display it in that component.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=112)** So here's what this is going to look like.
>
> **[1:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=114)** First of all, we're going to need a little bit of article content that we can display in our application.
>
> **[2:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=120)** And for this, what I'm going to recommend you do is just copy the code from the end state of the exercise files here, or from the GitHub repo.
>
> **[2:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=130)** So I'm going to say New File, and I'm going to call this article-content.js.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=138)** Now, inside of here, what I'm going to do is just copy and paste from the GitHub repo, as I said.
>
> **[2:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=144)** It's just a big array of article content with mostly lorem ipsum and some creative titles, such as "The Fastest Way to Learn React," things like "How to Build a Node Server in 10 Minutes," "Learn MongoDB," you get the idea.
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=160)** Cool, and notice that each one of these articles has a name property, which is basically just a shortened version, this is sometimes called a slug.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=171)** It's just a shortened version of the title so that we get a nice, readable URL.
>
> **[2:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=177)** Cool, so here's what we're going to do.
>
> **[2:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=178)** Now that we have this article content, which, again, I recommend you just copy and paste into your project here.
>
> **[3:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=185)** Now that we have the article content, let's open up our ArticlePage.
>
> **[3:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=190)** And we're going to need to, first of all, take a look at the value of that name segment that we defined in our routes here.
>
> **[3:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=199)** So we're going to need to get that value, and then we're just going to need to use simple JavaScript logic to load the corresponding article for that name.
>
> **[3:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=209)** So here's what this is going to look like.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=210)** We're going to go back to our ArticlePage, and the way that we access the value at that point in the URL is like this.
>
> **[3:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=220)** We're going to, first of all, import a React hook called useParams, so we'll say import { useParams } from 'react-router-dom', all right?
>
> **[3:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=234)** And the way that this works is we can simply call this inside a React component, and it'll give us a JavaScript object containing the names and values of any segments that were in that path.
>
> **[4:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=248)** So, in our case, we're going to get a JavaScript object with a property called name, and the value will be whatever is at this point.
>
> **[4:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=256)** So this would be name learn-react, for example.
>
> **[4:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=260)** So let's do that.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=261)** We're just going to say const name = useParams.
>
> **[4:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=266)** And, actually, here, we'll say const params = useParams, and then we can say const name = params.name, or if you want to shorten this up considerably, you can use object destructuring and just say const, and then in curly braces, { name } - useParams.
>
> **[4:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=285)** Cool, so at this point, we have the name of the article.
>
> **[4:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=287)** So let's just prove this by displaying that as part of the h1 heading here.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=294)** We're going to say This is the, and then we'll insert {name} article, and that's all we should need to do there.
>
> **[5:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=301)** So let's just take a look and see how this worked.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=304)** We're going to go back to our application, and then we're just going to type in, we will add a link that will allow us to get to individual articles shortly, but for now, we're just going to type in /articles/learn-react, for example, and what we should see is that, sure enough, it says This is the learn-react article, and if we change that to pretty much anything, right, we can just say /blah if we wanted to, it'll say This is the blah article.
>
> **[5:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=332)** So at this point, all we really need to do is, instead of just displaying the name segment from that path, we're going to use that name segment to find the corresponding article for it.
>
> **[5:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=346)** And to do that, we're just going to start off by importing our articles from our article-content file that we just created.
>
> **[5:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=353)** So, we're just exporting that as the default export.
>
> **[5:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=357)** So we'll just say import articles from '../article-content', and now, we're just going to need to find that article by saying const article = articles.find.
>
> **[6:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=373)** We're just using JavaScript's built-in find function here and we're going to find the article whose name property is equal to the name parameter that we just got from useParams.
>
> **[6:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=388)** Cool, so at this point, we have that article.
>
> **[6:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=390)** So instead of displaying just a hard-coded title, we can actually display the title of the article itself by saying article.title, and then for the content, if we take a look at the article content here, you'll see the content is just a list of paragraphs.
>
> **[6:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=408)** We're just going to loop through those and put each one inside a paragraph tag.
>
> **[6:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=413)** So here's what that's going to look like, and we will need the React fragments here, since we'll want to have more than one top-level element.
>
> **[7:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=421)** So let's just paste that there.
>
> **[7:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=423)** And now, underneath the h1 heading, we're going to say article.content.map, and for each paragraph we're going to display, and here we can actually make this even shorter, just by saying we're going to display a paragraph tag with that paragraph content inside of it.
>
> **[7:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=442)** And another thing that we'll want to do here is whenever you use the map function to display a list like we're doing here, you need to add a key prop to the top-level element that you're displaying.
>
> **[7:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=455)** This makes it much easier for React to re-render the list.
>
> **[7:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=459)** And if you forget this, you might notice some very strange behavior later on.
>
> **[7:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=463)** So it's a best practice to just use this key.
>
> **[7:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=466)** And for the key, all we really have to use here is the paragraph text itself.
>
> **[7:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=471)** So we'll just say key= paragraph, and that should be all we need to do.
>
> **[7:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=476)** Cool, so let's just test this out.
>
> **[7:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=478)** If we go back to our app in the browser, uh-oh, it looks like we have an error of some sort.
>
> **[8:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=483)** And the reason for this is just because we've still got that blah segment.
>
> **[8:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=488)** So if you actually type in a segment here that belongs to an article, such as learn-react, sure enough, you'll see that this displays the text for the article as well as the title, right?
>
> **[8:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=501)** The text is mostly just lorem ipsum.
>
> **[8:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=502)** If you want to write an article yourself, feel free to go ahead and do so.
>
> **[8:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=506)** But, anyway, let's try this with something else.
>
> **[8:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=509)** Let's try learn-node, and sure enough, that loads a new article here and uses the same component to display it.
>
> **[8:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=518)** And, finally, if we do learn-mongodb, oops, it looks like that didn't work.
>
> **[8:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=524)** Let me just take a look and see what that name actually was for "Learn MongoDB."
>
> **[8:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=529)** Oh, it was just called mongodb.
>
> **[8:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=530)** So let's go back and change that.
>
> **[8:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=533)** We should just be able to say mongodb, and sure enough, that'll display the MongoDB article.
>
> **[8:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/url-parameters-with-react-router?u=76281980&t=539)** So that is how to use route parameters to customize the content of a React page based on the value of one of the segments in the path.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), const (5), this, (3), case, (2), function (2)
> **CLI Commands:** find (5), node (3), make (2)
> **Code Identifiers:** useparams (6)
> **Analogies:** such as (3), for example (3)
> **Env Vars:** url (3)
> **Cross-References:** go back to (3)
> **Exercise Files:** github repo (2), exercise files (1)
> **Tools:** github (2)

#### Creating and linking the articles list
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=0)** - [Instructor] Alright, well at this point, our individual article page is working and it's displaying the corresponding article for the URL, but we still need a way to get to our individual article pages from the articles list page.
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=15)** So what we're going to do here is we're going to create a list that will display all of the available articles on our site.
>
> **[0:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=22)** And whenever we click on one of those, it'll take us to the corresponding URL for that article.
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=29)** So here's what this is going to look like.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=30)** We're going to start off here by going to our articles list page, and let's start off here by replacing this H1 heading with just the word articles.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=41)** And then underneath that, and we'll need to add a react fragment here in order to separate that, or in order to surround the two top level elements that we're going to be creating.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=54)** Underneath our H1 heading, we're going to simply load all of the articles from our article content file.
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=61)** So we'll just say import articles from article content.
>
> **[1:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=66)** And now we're just going to say articles.map.
>
> **[1:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=70)** And for each article here, what we're going to do is display an H3 heading that has the article's title.
>
> **[1:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=78)** So we'll just say a.title.
>
> **[1:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=81)** Underneath that we're going to have just a text sample for the article.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=85)** So maybe we'll do the first 150 characters.
>
> **[1:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=89)** So here's what that's going to look like.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=91)** We're just going to say P, and then we'll say a.content.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=94)** And since content is an array of paragraphs, we're going to just select the first one, and then we're going to say .substring.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=102)** And we'll get the first 150 characters by saying zero and 150.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=108)** Now, around this, in order to link each of these articles to the corresponding individual article page, we're just going to use the link component provided again by react-router-dom to do so.
>
> **[2:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=123)** So here's what that's going to look like.
>
> **[2:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=125)** We're going to say import link from react-router-dom, and down here now, we're going to surround our H3 and paragraph elements with a link that says two.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=138)** And for this, what we're going to do is we're going to say /articles/, and then we're going to add the articles name onto the end there by saying plus a, plus name that is, and let's just put this inside curly brackets like so, and that will link to the corresponding articles page.
>
> **[2:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=158)** So let's just put the H3 and paragraph elements inside that link element now.
>
> **[2:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=164)** so that clicking on those gives that effect.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=166)** We're just going to paste those in there and indent them.
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=169)** And we also need a key here. So we're going to say key.
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=173)** And for that we're going to use the article's name, which is just a unique string that will help react keep of this during re-rendering.
>
> **[3:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=181)** And that should be all we need to do there.
>
> **[3:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=184)** So let's take a look at our articles list, and sure enough, we see, even though it's got this sort of annoying blue color, I'll give you some styles a little bit later on that you can just copy and paste to make your application look better.
>
> **[3:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=196)** But what you'll see is if you click on any one of these, sure enough, it takes you right to the corresponding article.
>
> **[3:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=203)** So let's click on how to build a node server in 10 minutes.
>
> **[3:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=206)** And sure enough, it takes us to that article.
>
> **[3:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=208)** And up here you can see that that is /articles/learn-node.
>
> **[3:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=212)** And let's test the learn MongoDB one.
>
> **[3:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=214)** And yep, it takes us to the corresponding MongoDB article.
>
> **[3:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=219)** So the last thing that we're going to do here is now that we've created this articles list, this would actually be a really helpful thing to reuse on several pages of our site.
>
> **[3:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=229)** For example, if we wanted to display, you know, a list of all of the available articles on our articles list page, but a list containing only the most popular articles on say our homepage.
>
> **[4:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=241)** Now, in order to do this, we're just going to create a separate article list component by saying new file, and we'll call this article list.JSX.
>
> **[4:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=253)** And here's what this is going to look like.
>
> **[4:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=256)** We're going to say export default function article list.
>
> **[4:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=262)** And this is actually going to take some props and it's going to allow the parent component to pass whatever articles it wants to it.
>
> **[4:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=271)** So we're just going to say articles there.
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=273)** And now that we've done that, we can just go into our articles list page.
>
> **[4:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=278)** And actually maybe we should rename that articles list page instead of just plain old articles list.
>
> **[4:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=285)** So I'm going to rename this to articles list page.jsx, and it's going to ask us if we want to update imports now that we change the name of that file.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=294)** And I'm going to say yes.
>
> **[4:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=296)** So that'll automatically go through my files and update that, such as in our nav bar presumably.
>
> **[5:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=303)** And now we'll go down here and I'm actually going to rename this to articles list just to make it consistent with the page itself.
>
> **[5:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=310)** So let's go back into our articles list page.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=313)** And now I'm just going to copy this entire articles.map thing, and I'm going to paste that and actually return that inside a React fragment from our article list component.
>
> **[5:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=326)** And let's actually change the name of this to articles list just to match the name of the file.
>
> **[5:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=330)** So let's just paste that inside of here.
>
> **[5:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=332)** And that should be all we need to do besides of course, wrap this with a React fragment.
>
> **[5:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=337)** So let's cut that and paste it inside of there.
>
> **[5:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=341)** And that should be all we need to do, besides of course, adjusting the indentation a little bit.
>
> **[5:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=347)** And let's make sure that we import the link component here just like we were doing.
>
> **[5:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=353)** So we're going to say import link from react-router-dom, and that should be all we need to do.
>
> **[5:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=359)** Now as a side note, you'll probably notice that it has a little red underline under articles.map, and that's because it wants us to add prop types.
>
> **[6:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=367)** That's something that I'm actually going to skip now just in the interest of time.
>
> **[6:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=373)** But you can feel free to add a prop types validation for this articles prop if you want to.
>
> **[6:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=376)** So now, right now that we've put all of this logic inside our articles list component, we can just go back into our articles list page, and instead of having the link here, we can just remove that, we're going to import our articles list component.
>
> **[6:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=394)** All right, there we go.
>
> **[6:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=395)** And we're going to display that here by saying articles list.
>
> **[6:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=399)** And we're going to pass our articles that we imported from article content as the articles prop here.
>
> **[6:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=406)** So we'll say articles equals articles, and that should be all we need to do.
>
> **[6:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=410)** So let's just make sure that didn't change anything by going back to our browser, and we should be able to go to articles, and we should see the exact same thing as what we had before.
>
> **[7:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-and-linking-the-articles-list?u=76281980&t=420)** So anyway, that is how to implement the articles list page and link to each of the individual article pages from it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this, (3), pass (2), function (1)
> **CLI Commands:** make (4), node (2)
> **UI Navigation:** click on (3), select the (1), go to (1)
> **Env Vars:** url (2), jsx (1)
> **Analogies:** for example (1), such as (1), just like (1)
> **File Paths:** list.jsx (1), page.jsx (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Creating a 404 page in React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=0)** - [Instructor] Alright, so at this point, we have four working pages and one page, right, our individual article page that serves the purpose of multiple pages just because of how it uses route parameters.
>
> **[0:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=12)** So the last thing that we're going to do here is we're going to figure out how we can handle when the user goes to a route that we don't have a page for.
>
> **[0:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=23)** So right now you'll notice that if you just go to a route that we don't have a path defined for in our routes array, it will give us this rather ugly Unhandled Thrown Error message.
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=37)** Now what we would like to do here is something a little bit more graceful, at least display something like, "404 page not found," or "That link is broken," something like that.
>
> **[0:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=48)** So here's how you do that.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=50)** It's actually pretty straightforward using React Router.
>
> **[0:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=53)** So we're going to go back to app.jsx and all we really need to do here is in this routes object or this layout route, we're going to add another property called errorElement.
>
> **[1:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=68)** And this is just like the regular element property, except this will only get displayed if there is an error actually finding or displaying that page for that route.
>
> **[1:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=81)** So in our case, let's just start off here by displaying a very simple h1 heading that says Oh no!
>
> **[1:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=87)** All right, that's all we're going to do.
>
> **[1:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=90)** And if we go back to here now, sure enough, we'll see that whenever we go to a path that we don't have a corresponding page for, it'll display this page.
>
> **[1:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=100)** So all we need to do now is just make this page a little bit more in depth.
>
> **[1:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=105)** And we're going to do that by adding a new file to our pages directory called NotFoundPage.jsx, and we'll say export default function NotFoundPage.
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=121)** And inside here all we're going to do is we're going to display an h1 heading that says Page Not Found.
>
> **[2:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=130)** And then what we're going to do is we're just going to display a little message underneath this saying something like The link you followed to get here must be broken.
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=143)** Something like that, you can obviously change the exact wording of this if you want to.
>
> **[2:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=148)** It's your blog after all.
>
> **[2:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=150)** So now that we have this Not found page, we're just going to display that instead of this Oh no! element.
>
> **[2:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=156)** So let's just change errorElement here to NotFoundPage like so, and that should be all we need to do.
>
> **[2:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=165)** So let's give this another try.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=166)** And sure enough, if we go back here, it says, "Page Not Found, "The link you followed to get here must be broken."
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=171)** And we can set this right if we go back to one of our routes, and sure enough, we're all good now.
>
> **[3:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=181)** So that's how to add a Not Found Page when we go to a route that we don't have something for.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=186)** But what happens if the user follows /articles/ and then a name that we don't have an article for, such as blah?
>
> **[3:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=196)** Well, as you'll see, that works as well, right?
>
> **[3:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=200)** The nice part about that errorElement property that we just saw is that it will render this element whenever some sort of error occurs.
>
> **[3:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=208)** So in this case, the error that occurred in our article page was we tried to find an article that didn't exist and accessing the title caused our application to produce an error, which was caught by React Router and we simply displayed the Not Found Page.
>
> **[3:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=226)** Now, we're not necessarily always going to want to display the Not Found Page when there's an error in our application, but for now, that works pretty well.
>
> **[3:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=235)** So I'm going to leave it this way.
>
> **[3:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-404-page-in-react?u=76281980&t=237)** And the last thing that we're going to do next is we're going to see how to add some simple styles to our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for. (2), case, (2), for, (2), function (1)
> **Code Identifiers:** errorelement (3)
> **UI Navigation:** go to (3)
> **File Paths:** app.jsx (1), notfoundpage.jsx (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (2)
> **Analogies:** just like (1), such as (1)
> **Definitions:** is an  (1)

#### Adding styles
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=0)** - [Instructor] All right, at this point, we have a pretty fully functional front end except that our app doesn't really look very good, right?
>
> **[0:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=7)** The default styles provided for us by Vite don't really match up with our blog site's needs, so what I'm going to recommend you do is if you want your app to look like this, please feel free to copy and paste the styles.
>
> **[0:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=22)** They're very simple styles from the starting state of the exercise files for this video, or you can simply take a look at the index.css file and the App.css file, and you'll want to just replace whatever is currently in both of those with the code that I have here.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=42)** Again, you can just get that from the GitHub repo or from the starting state of the exercise files for this video, so that's going to change these styles pretty significantly.
>
> **[0:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=53)** It's going to make it look maybe a little bit more appropriate to a blog site, but I also want to show you how these styles work in a React project set up with Vite.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=64)** Well, first of all, we have this index.css file, and this is where you're going to put all of your global styles, right?
>
> **[1:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=71)** So any styles that you want to apply to your entire application can go in here.
>
> **[1:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=77)** Inside App.css, we have anything that's specific to the app component itself, and the way that this works is if you open up App.jsx, you'll see that we're importing App.css just by saying import './App.css', right?
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-styles?u=76281980&t=97)** Now, what that does is it'll take the styles that are in that file and apply it to this component, so having a specific CSS file for component is a great way to add unique styles for a given component, but in order to make it much easier for you, I just put all of the styles into index.css and App.css, so that's all you'll need to do in order to get your app to look like mine going forward, and with that, we have pretty much completed our front end for now, at least until we need to load data from our back end, but first, we're going to need to create a back end, which is what we're going to be doing next.

> [!info]- Semantic Content
>
> **File Paths:** app.css (5), index.css (3), app.jsx (1)
> **Exercise Files:** exercise files (2), github repo (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Code Keywords:** this, (1)
> **Env Vars:** css (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### 2. Creating a Node.js Back-End

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why Node.js?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=0)** - [Instructor] So now that we've got our client side working nicely, it's time to start building the backend of our blog site.
>
> **[0:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=6)** And to do this, we're going to use Node.js.
>
> **[0:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=9)** Now, you've probably already heard about Node.js by now, and it's very important to us here because it allows us to write our backend in JavaScript instead of using PHP or Python or Java or some other language besides JavaScript.
>
> **[0:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=25)** Right, it used to be that in order to be a full stack developer, you had to be fairly fluent in more than one programming language, but with Node.js, as you'll see, which has become an incredibly popular runtime since it was released, our entire web application can be written in JavaScript, which is great news for us JavaScript developers.
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=45)** Now, there are many different NPM libraries that can be used to write Node.js servers, and the one that we're going to use here in these videos is called Express.
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=55)** Now, Express is a great choice for us here because it's unopinionated, as you can see on this website.
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=61)** That's one of the first words that it mentions there, besides fast.
>
> **[1:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=65)** But besides that, it's also very easy to get started with.
>
> **[1:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=68)** It's well documented, and there's a ton of third party add-ons that can be used to extend its functionality.
>
> **[1:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-node-js?u=76281980&t=74)** So without further ado, let's use these technologies and get started creating the backend for our application.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), php (1), python (1), npm (1)
> **File Paths:** node.js (4)
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** php (1), npm (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Setting up an Express server
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=0)** - [Instructor] All right!
>
> **[0:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=1)** So, to get started creating a back-end for our app with Node.js and express, let's start off here by creating a new directory outside our front-end directory, right?
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=13)** Since our front-end code is in a directory called front-end, we're just going to create a new folder here, and we'll call it back-end.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=21)** Again, this is really meant to emphasize the difference between these two things and help you see how they fit together.
>
> **[0:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=28)** In practice, you can always figure out ways to put these files together in the same directory, but that usually requires a little bit of setup, so we're not going to do that here.
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=38)** So, inside our new directory, let's get started here by creating a new NPM package, right?
>
> **[0:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=47)** Basically telling NPM that we want this to be its own thing, and we're going to do that by changing directories into our back-end directory.
>
> **[0:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=56)** So, depending on what directory you're currently in, I'm just in the surrounding directory here in my terminal.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=64)** What you can do is just say cd back-end, or if you're already in the front-end directory, you just need to say cd../back-end, right?
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=73)** That will take you to the parent directory and then to the back-end directory, or in my case, just to the back-end directory.
>
> **[1:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=80)** Cool!
>
> **[1:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=81)** So, what we need to do now, as I said, in order to tell NPM that we want this to be its own sort of self-contained project, is we're going to say npm init-y.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=91)** And what that's going to do is create this package.json file for us, right?
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=97)** This thing has a variety of purposes as we'll see, but one of those purposes is to keep track of basic information about this project, including things like its name, its dependencies, and very shortly, we'll see how to use these scripts here in order to automate some of the tasks.
>
> **[1:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=115)** So, now that we've done that, the next thing we're going to need to do is because express is not built into our Node.js runtime automatically, right?
>
> **[2:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=124)** It's a separate library.
>
> **[2:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=126)** We're going to install it by saying npm install express, and we're going to hit Enter, and that will install that library for us.
>
> **[2:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=136)** So now, right?
>
> **[2:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=137)** We have pretty much everything we need to get started.
>
> **[2:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=140)** So, let's get started writing some code.
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=143)** We're going to create a new folder here called source, just src.
>
> **[2:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=149)** And inside this directory, we're going to create a new file called server.js.
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=155)** Now, again, it's not required to create this source directory, but in practice, it really helps to keep the actual business logic of our application separate from some of the setup files and other files, such as our package.json file.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=171)** So inside here, what we're going to do is we're going to set up a simple express application, and this is pretty straightforward to do.
>
> **[2:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=179)** What we're going to do is just say, import express from 'express,' and then we're going to create a new express app by calling this thing, which is in fact, a function like this.
>
> **[3:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=193)** We're going to say const app = express.
>
> **[3:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=197)** And now that we've done that, we're going to create a simple endpoint here, right?
>
> **[3:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=203)** I'll describe what an endpoint is in much more detail shortly, but for now, just know that an endpoint is a path that we can send a request to, and it will send some sort of data or message back.
>
> **[3:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=217)** So, here's what this is going to look like, we're going to say app.get, and we're just going to say /hello as the first argument to this.
>
> **[3:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=226)** I'll describe what that actually does very shortly as well.
>
> **[3:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=230)** And then, for the second argument, we're actually going to pass a function that takes two arguments called request and response.
>
> **[4:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=240)** We'll see those in action shortly as well.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=243)** And then, inside this function, what we're going to do is we're going to say response .send, and we're going to send back a message that says "Hello," all right, so this is probably one of the simplest endpoints that it's possible to create, and oops, I put an arrow there.
>
> **[4:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=260)** This is probably one of the simplest endpoints it's possible to create, think of it as the express version of a Hello World program.
>
> **[4:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=268)** And the last thing that we're going to do here is we're going to start our server up, which will enable it to actually respond to requests using the endpoints that we've defined.
>
> **[4:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=280)** Just follow along with me here if that doesn't quite make sense yet, we're going to say app.listen.
>
> **[4:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=286)** And the first argument that we can pass to this thing is the port number that we want our app to listen on, we're just going to say 8000 there.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=294)** And then, we're going to have a callback function here that will be called once our server is successfully listening.
>
> **[5:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=302)** And inside here, generally, what you'll want to do is just say, console.log, and print out something like Server is listening on Port 8000.
>
> **[5:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=311)** And that should be all that we need to do there in order to create an express application.
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=317)** So, let's try running this thing, and the way that this is going to work is you just need to open up a terminal inside your back-end directory, right?
>
> **[5:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=324)** Make sure you're inside this directory, or you'll get an error when you try and do this.
>
> **[5:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=329)** So, we're going to say node and then the path to our file, so src/server.js, and make sure you are running this from inside the back-end directory.
>
> **[5:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=339)** If you're not, it will give you an error.
>
> **[5:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=341)** And by the way, this node command, what that does is it simply executes the code inside any Node.js JavaScript file in a similar way to how opening up a JavaScript file in a browser will execute that file.
>
> **[5:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=355)** So, let's hit Enter.
>
> **[5:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=356)** And what you'll see here is that this will actually give us an error because of the import syntax that we've used up here.
>
> **[6:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=364)** Now, it used to be that you had to use another tool to actually convert this more modern version of JavaScript into an older version of JavaScript, but now, all we have to do is go into our package.json, and we have to add a property called type module, and that will allow that to work properly.
>
> **[6:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=386)** So, let's try running this again, and sure enough, we'll see that our server is listening on Port 8000, and not only that, we see that in Codespaces, it says that Port 8000 is available, so this is a little bit more complicated if you're running Codespaces.
>
> **[6:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=401)** What you'll see here is in addition to our front-end, which is running here, we also have this Port 8000, which is running.
>
> **[6:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=410)** What you're going to need to do in order to access this thing is right next to the URL for this, we're just going to click on that little globe icon, and that'll spin for a second saying Connecting to forwarded port.
>
> **[7:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=423)** And you'll see this error here, first of all, that says Cannot GET /, just ignore that for now, what we're going to do is add /hello to the end of this URL, and what we'll see is that sure enough, it sends back Hello! right?
>
> **[7:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=438)** This is the message that we sent back inside that endpoint.
>
> **[7:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=443)** So again, essentially what's going on here when we define an endpoint is we're saying that when our application receives a request, right?
>
> **[7:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=452)** When our server receives a request on a given path, such as /hello, the function that we define should be executed, and as part of that function, we can choose to send something back, such as this message here.
>
> **[7:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=465)** So that's the basic idea of creating endpoints in express, we'll be creating lots more here for different pieces of functionality that we want to add to our blog application.
>
> **[7:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-an-express-server?u=76281980&t=476)** But anyway, that's the basics of setting up an express server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (6), this. (3), pass (2), case, (1)
> **CLI Commands:** node (5), npm (5), make (3), cd (2)
> **File Paths:** node.js (3), package.json (3), server.js (1), src/server.js (1)
> **Prerequisites:** install (3), setup (2), set up (1)
> **Env Vars:** npm (3), url (2)
> **Ports:** port 8000 (4)
> **Analogies:** such as (3), think of it as (1)
> **Tools:** terminal (2)

#### Testing an Express server with Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=0)** - All right, so now that we've set up the basic backend for our application, as we move forward developing this backend, it's going to be really important for us to have an easy and reliable way to test it.
>
> **[0:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=11)** So, so far, we've just been typing the URL into our browser.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=17)** But for some of the more complicated operations that we're going to want to implement here, this isn't going to be quite good enough.
>
> **[0:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=24)** Now, what a lot of people do to test their backend is to develop a feature on their front end first and then use that to test the backend.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=33)** But in practice I've found that that's generally not quite as easy as developing the backend first, and then building the front end functionality.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=42)** So a tool that's used by many developers, as you see here, for this sort of backend first testing is a free piece of software called Postman.
>
> **[0:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=52)** And in case you don't have Postman, or have never worked with it before, you can download it by going to [postman.com/downloads](https://postman.com/downloads).
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=62)** It should just come right up with your operating system and it should be easy to set up.
>
> **[1:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=67)** So once you've downloaded it and set it up, you should see a screen that looks an awful lot like this.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=73)** And what you're going to want to do here is open up a new tab and you can start off here by sending a simple GET request to the Hello endpoint that we just defined.
>
> **[1:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=86)** In order to do that, what you're going to need to do is first of all go into ports and make this port 8000 public.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=94)** You can do that by right clicking on this private visibility thing, and then going down to port visibility and saying public.
>
> **[1:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=103)** And that will allow us to access that from anywhere, not just from a browser tab.
>
> **[1:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=109)** And now we're just going to need to copy this URL, which you can do by clicking on this little clipboard thing here.
>
> **[1:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=116)** And then we're going to go back to Postman, paste it and add /hello at the end.
>
> **[2:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=122)** So all we need to do here now is click the Send button.
>
> **[2:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=126)** And as we'll see, that gives us the hello response that we defined in that endpoint.
>
> **[2:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=132)** Now one of the biggest advantages of using Postman over testing in a browser is the fact that we have a lot more control over the requests that we're sending.
>
> **[2:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=142)** So instead of just sending a GET request, which is just a specific type of request, usually used for loading data, we can also send things like POST requests, which are usually used for creating data on the server, such as adding comments as we'll see a little bit later.
>
> **[2:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=159)** So in order to test this out, what we're going to do is we're just going to send a POST request to /hello.
>
> **[2:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=167)** And what we'll see is that we actually get back this HTML error from our express server, saying that we don't have an endpoint defined for that combination of method, right, POST, GET, those are HTTP methods and path.
>
> **[3:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=185)** So if we go back to our server, we can actually define another method by opening up server.js, and just like how we said app.get, which is defined a GET endpoint, right, an endpoint that will respond to GET requests, we can say app.post/hello.
>
> **[3:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=207)** And then we can add a callback function here with again request and response.
>
> **[3:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=212)** And then we'll say response.send, and we'll say something like, Hello from a POST endpoint.
>
> **[3:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=220)** And now what we'll see, oh, and here let's also say hello from a GET endpoint in our GET Hello endpoint.
>
> **[3:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=229)** And what we'll actually need to do first is restart our server in order for these changes to take effect.
>
> **[3:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=235)** We'll see a little bit later on how we can have this automatically restart in response to changes, but for now, we're just going to have to do it manually.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=243)** So you can do that by pressing control C.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=246)** That'll stop the server, and then we're going to restart it.
>
> **[4:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=250)** And you may need to reset that to public visibility, right?
>
> **[4:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=255)** You may see that the visibility was reset to private.
>
> **[4:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=258)** Mine wasn't this time, but I've seen that happen before.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=261)** So just in case that happens, you'll just need to right click and go to Port Visibility, Public, and that should be all you'll need to do there.
>
> **[4:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=269)** So let's go back to Postman now and test this.
>
> **[4:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=272)** We're going to send a POST request to /hello now.
>
> **[4:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=275)** And sure enough, we see hello from a POST endpoint.
>
> **[4:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=278)** And then if we change this to GET and click send, we'll see that that's activated the functionality for the other endpoint, and sent back the message, Hello from a GET endpoint.
>
> **[4:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=289)** All right, now one last thing that we're going to do here before we start creating real endpoints for our application is we're going to need to allow our endpoints to have access to something called a request body.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=305)** Essentially whenever a front end, such as a React application, or in this case, just a simple application like Postman, whenever one of these clients sends a request to our server, it's allowed to include extra data in the form of a request body.
>
> **[5:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=323)** And we can specify this by clicking on body here.
>
> **[5:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=328)** And then we can actually type out a JSON request body, essentially just by selecting raw and then the JSON dropdown.
>
> **[5:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=338)** And here's what this is going to look like.
>
> **[5:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=340)** We can just say something like name, and let's rewrite our endpoint here so that we can say hello with the name of the person who sent it.
>
> **[5:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=347)** So I'm going to use my name here. You can obviously use yours.
>
> **[5:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=351)** And the way that we can access this back on our server is by saying hello, and then we will have to insert that name, of course.
>
> **[6:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=362)** But the way that we have to do this is by saying request.body.name, all right?
>
> **[6:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=368)** So this request.body thing is going to be automatically populated with a little bit more setup, as you'll see, with whatever data we include in this JSON request body.
>
> **[6:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=380)** But in order to make this work, we're going to need to add one more line after creating our app and before defining our endpoints.
>
> **[6:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=387)** And that line's going to be app.use, and then we're going to say express.json with parentheses after it.
>
> **[6:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=397)** And that simply tells our request application that if it sees a request body, it should add it to this request.body object.
>
> **[6:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=407)** So that should be all we need to do.
>
> **[6:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=408)** Let's just test this one more time by restarting our server.
>
> **[6:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=412)** And now if we go back to Postman, and click Send with that request body, oops, let's send a POST request here.
>
> **[7:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=421)** All right, we see, sure enough, it says Hello Sean from a POST endpoint.
>
> **[7:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=425)** And if you change that to something else, right?
>
> **[7:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=427)** If we were to change this to, I don't know, Bob, for example, and click Send, we'll see that that will change the response that we get.
>
> **[7:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=437)** Now this is a very simple example, but as you'll see shortly, we're going to use this same method for allowing users to do things like create comments and upvote articles for our blog site.
>
> **[7:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=450)** So anyway, that is the basics of defining and testing endpoints with different methods using Express and Postman.
>
> **[7:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=459)** So the next thing that we're going to do here is we're going to start creating real endpoints for our applications.
>
> **[7:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/testing-an-express-server-with-postman?u=76281980&t=465)** So that's what we have coming up next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (4), this. (2), private (2), function (1)
> **API Endpoints:** get  (8), post  (7)
> **Env Vars:** post (8), json (3), url (2), html (1), http (1)
> **Tools:** postman (9)
> **Cross-References:** go back to (4), coming up (1)
> **Prerequisites:** set up (2), you'll need (1), before we start (1), setup (1)
> **Analogies:** such as (2), just like (1), for example (1)
> **File Paths:** server.js (1), express.json (1)

#### Route parameters in Express
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=0)** - [Instructor] All right, at this point, we've seen how to use post requests to carry extra information in the form of a JSON object, along with the requests that we send to our server.
>
> **[0:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=11)** Now, this is generally the best way to add more complex information to our requests, but there are actually several other ways to do so.
>
> **[0:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=20)** So, before we move on to implementing things like Upvoting or comments for our blog site, let's take a sort of backward look at a concept that we learned when implementing the article pages for our front end.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=33)** Right, you may recall that for each of our article pages, we simply used the same component and then by sending a request to /articles/ followed by the articles unique ID or name, right, such as learn-node or learn-react, we were able to populate that page component with different data.
>
> **[0:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=56)** And we did this using something called route parameters or URL parameters.
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=61)** Now, as a matter of fact, Express also allows us to use route parameters, and this is useful in many cases.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=69)** For example, if we want to, let's say, add a comment to an article, we might send a post request to slash articles slash, whatever the name of that article might be, slash comments.
>
> **[1:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=84)** I'll discuss the exact structure of this path a little bit later, and we might want to include the info for that comment, right?
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=93)** The name of the poster, the comment text, things like that, in the request body, right?
>
> **[1:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=99)** And in this case, the ID or the name that we're using here would be a route parameter, but as I said, it would be handled by Express in this case instead of by React, as we saw previously.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=113)** So, in order to get a little bit more comfortable with these route parameters in Express and how they work, let's do a pretty simple example before we jump into working with different article data.
>
> **[2:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=126)** Let's try and send a request to slash hello slash, someone's name here and let's see how we can actually get the value of this segment inside an Express endpoint.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=138)** And just to make this a little bit more obvious what's going on, let's delete the request body.
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=143)** We're just going to say, none here for the body tab, so that we're sure that it's actually coming from the route parameter here.
>
> **[2:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=151)** And what we're going to do, is we're going to make a get request endpoint that will respond when we say, slash hello slash something, and it'll actually use the value in the second segment as the person's name.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=166)** So in order to do this, here's what that syntax is going to look like.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=171)** First of all, we're going to add another get endpoint here.
>
> **[2:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=174)** We'll say app.get/hello and then slash, and the syntax here is actually identical to what we saw in React.
>
> **[3:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=184)** We're just going to say, /hello/:name.
>
> **[3:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=189)** And then for the function here with request and response as arguments, and by the way, we already saw two ways in which we could use these arguments.
>
> **[3:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=199)** The first was to access the request body where we said, req.body.name.
>
> **[3:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=205)** The second way, was by saying res.send, which sent back the response.
>
> **[3:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=212)** So in general, the request argument here will contain data about the requests such as the method that was used, as well as things like extra data in the form of request bodies or route parameters.
>
> **[3:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=229)** And the response here is generally used to customize the response that we send back to the client from this server.
>
> **[3:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=238)** So in our case here, all we have to do, we don't have to do anything special like what we did up here with app.use express.json in order to use route parameters, all we have to do is say res.send.
>
> **[4:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=252)** And then we'll say Hello and we will insert the name, which we can access by saying req.perams, right?
>
> **[4:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=260)** Instead of req.body, we say req.perams.
>
> **[4:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=263)** And then we use the name of the segment that we put here as the actual name for that property in req.perams.
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=273)** So, if we had called this, hello/:firstname for example, we would just have to say, req.params.firstname instead.
>
> **[4:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=283)** So, let's just keep it at name and req.perams.name.
>
> **[4:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=289)** And what we're going to do here is, we just need to send a get request to, slash hello slash something.
>
> **[4:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=295)** We can put whatever we want there, and that is going to give us a response where it sort of echoes back that value.
>
> **[5:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=303)** So, let's just click send here, and oops, we got an error, and that's because I forgot to restart this server.
>
> **[5:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=310)** So let's restart it manually, again, we'll take a look at another way that we can have this restart automatically shortly.
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=317)** And let's go back to Postman now and click send.
>
> **[5:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=320)** And sure enough, we see that that echoes back the value that we put in here.
>
> **[5:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=324)** So, let's change this to, /hello/Express.
>
> **[5:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=328)** And if we click send, sure enough, it says Hello, Express.
>
> **[5:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=333)** All right, so what we're going to do shortly is we're going to actually use the value that's here, such as if we say learn-node, to allow ourselves to do things like load data for a specific article, and also do things like add comments to a specific article.
>
> **[5:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/route-parameters-in-express?u=76281980&t=350)** But that's the basic mechanics behind doing that, is working with simple route parameters, like what we just learned here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), case, (1), delete (1), function (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** node (2), make (2)
> **Env Vars:** json (1), url (1)
> **Cross-References:** as we saw (1), go back to (1)
> **File Paths:** express.json (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### Upvoting articles
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=0)** - [Instructor] All right, well, now that we've seen some basic examples of how an Express server works, as well as the most important parts that we're going to need to use in our server here, such as route parameters and request bodies, let's make our server do something a little bit more relevant to our blog.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=16)** What we want here is for users to be able to upvote our articles so that we can help other users see which articles are the most popular or the most helpful.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=26)** Now, in order to do this, we're going to of course need to add some code to our backend, and the first thing that we're going to do for that is, we're going to create sort of a fake in-memory database for our server, which will keep track of the upvotes for our articles.
>
> **[0:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=43)** Now, later on, we're going to actually add a real database with MongoDB to our server, but for now, just to keep things simple, we're going to just use a JavaScript array to make this happen, and what that's going to look like is up here above where we create our Express server.
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=62)** We're going to say const articleInfo =.
>
> **[1:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=67)** And then what we're going to do is just create a simple array, and each one of these things is just going to be a JavaScript object that keeps track not only of the upvotes for each article but, also, we'll use it to keep track of comments for each article.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=85)** To start off, though, let's just say upvotes 0, and we'll do that for all three of our articles.
>
> **[1:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=92)** And in addition, we also need to keep track of which article each of these up vote counts belongs to.
>
> **[1:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=100)** So we're just going to say something like articleName, and then we'll put the article name, write that route parameter that we used in our React app as the value for that.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=111)** So articleName, learn-node, the next one's going to be articleName, and this is going to be learn-react.
>
> **[1:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=117)** And then I believe I had another one called articleName and that was mongodb.
>
> **[2:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=124)** Cool.
>
> **[2:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=125)** So at this point, we have just these three JavaScript objects that keep track of some important data for each article.
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=133)** And what we're going to do next is, we're going to create an endpoint that will allow users to actually up vote these articles, right?
>
> **[2:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=142)** Therefore, changing this upvotes count by sending a request to a specific endpoint.
>
> **[2:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=149)** So what I'm going to do here, you can feel free to just comment these hello endpoints out, or, you know, you can even leave them around for reference.
>
> **[2:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=157)** But in order to clean things up a little bit, I'm just going to remove these.
>
> **[2:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=162)** And for this upvote endpoint, what we're going to do is, we're going to say app.post, right?
>
> **[2:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=168)** This is a POST endpoint, because we're actually creating something new, we're creating a new upvote.
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=173)** You could, I suppose, use a PUT request instead, but if you dunno what that is, don't worry too much about it.
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=180)** We're going to say app.post, and for the URL here, we're going to say /api, we're going to start all of our API routes, all of our server routes here with /api for reasons that will become clear later in the course.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=195)** And then we're going to say /articles/:name, right?
>
> **[3:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=201)** That's going to be the name of the article that we want to up vote, and then /upvote.
>
> **[3:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=207)** All right.
>
> **[3:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=208)** So now, for the function, which you can do an arrow function for this as well, it doesn't have to be a function using the function keyword, we can just say request, response with an arrow after it.
>
> **[3:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=219)** Inside here, what we're going to do is, we're going to use the value of this route parameter to find the corresponding article and increment the number of up votes that it has.
>
> **[3:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=230)** So what this is going to look like is, we're going to say const article = articles, articleInfo rather, .find, and we're going to find the article whose name equals the name route parameter in the request.
>
> **[4:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=249)** So we're going to say request .params.name.
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=254)** All right, and that should give us an article.
>
> **[4:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=255)** We'll add a little bit of logic later on to handle what happens if there wasn't an article with that name.
>
> **[4:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=262)** But what we're going to do now is, we're just going to say article and we'll say .upvotes, and we're going to increment that by 1.
>
> **[4:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=272)** Cool, so, now all we have to do is send back a response.
>
> **[4:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=276)** And in order to just make this a little bit more interactive for us as we're testing it, what we're going to do right now is, we're just going to send back the new count of up votes for that article.
>
> **[4:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=286)** So, here's what this is going to look like.
>
> **[4:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=287)** We're going to say response .send, and for this string, we're going to say something like, "Success!"
>
> **[4:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=295)** And then we'll say, "The article" and we'll insert the article name there by saying request.params.name.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=304)** And then we'll say, "Now has" and then we'll say article.upvotes.
>
> **[5:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=311)** All right, there we go.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=313)** And we'll add upvotes to it.
>
> **[5:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=316)** Cool, so that should be all we need to do for that endpoint.
>
> **[5:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=319)** So, again, we're just getting the value of the route parameter, we're finding the article that corresponds to that, and we're incrementing its number of upvotes by 1.
>
> **[5:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=328)** So, let's test this thing out by restarting our server.
>
> **[5:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=332)** And if we go back to Postman and send a POST request to /api/articles, and we'll up vote learn-node here, because we're working on node here, and then we'll say /upvote.
>
> **[5:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=348)** And if we send that request, sure enough, and oops, it looks like we got an error because we called this property articleName up here, and I'm actually just going to change that to name to simplify that.
>
> **[6:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=361)** So we'll just say name, name, and name, and let's restart our server again to make that take effect.
>
> **[6:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=368)** So we'll say Control + C and restart it.
>
> **[6:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=372)** And let's go back here and click Send now, and sure enough, we should see that each time we click this it'll increment the number of up votes.
>
> **[6:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=380)** Now, something to be aware of here is that if you restart your server now, that will actually reset the count to 0, because of the fact that this is an in-memory database.
>
> **[6:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=391)** So that's why we're going to add MongoDB a little bit later, because it will allow us to actually persist the data for our application, but we'll get to that in another chapter.
>
> **[6:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/upvoting-articles?u=76281980&t=402)** For now, we have successfully completed an endpoint for upvoting articles using route parameters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), const (2), this, (1), new, (1)
> **CLI Commands:** make (4), node (3), find (3)
> **Code Identifiers:** articlename (5), articleinfo (2)
> **Env Vars:** post (2), put (1), url (1), api (1)
> **API Endpoints:** post  (2), put  (1), /api/articles (1)
> **Cross-References:** later in (1), go back to (1)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** postman (1)

#### Automatically updating with Nodemon
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=0)** - [Instructor] Alright, so now that we've created one useful endpoint for our blog backend, let's take some time to make our lives a little bit easier going forward and see how we can avoid having to manually restart our server every time we make a change to our code, right?
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=17)** Wouldn't it be nice if our server could sense when our files changed and automatically restart itself?
>
> **[0:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=23)** Well, as a matter of fact, there is an NPM package that does this for us, and it's called no-daemon.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=30)** Now, you might hear the name of this package pronounced a little bit differently depending on who's talking, but let's just install it, which we can do by stopping our server.
>
> **[0:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=40)** And we're going to say, npm install nodemon, right?
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=45)** So again, you'll hear this pronounced sometimes Node Man, you'll hear it pronounced No demon, or I usually say No demon because that makes the most sense to me.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=54)** But one last thing that we're going to do is we're going to add the save dev flag when we install this because this package is only going to be used in development.
>
> **[1:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=67)** We're not going to use this in production, as you'll see a little bit later on when we release our app.
>
> **[1:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=72)** So let's hit enter and that's going to install that package for us.
>
> **[1:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=77)** And once it installs, all we have to do is change the command that we use to run our server.
>
> **[1:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=84)** Instead of saying node src/server.js, we can say npx nodemon src/server.js.
>
> **[1:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=95)** NPX here is a command that you can use to run command line scripts such as nodemon that you've installed locally into your project instead of globally.
>
> **[1:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=105)** So let's hit enter here, and what we're going to see is that sure enough, it prints out some output here, and then we see our regular message of server is listening at port 8000.
>
> **[1:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=116)** All right, so if we go back and test this now, let's just send a POST request to /api/articles/learnnode/upvote.
>
> **[2:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=125)** If we click send, sure enough, we'll see that that still works.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=129)** And notice by the way, that every time our server restarts, as I said, it sets the upvotes back to zero.
>
> **[2:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=135)** We see that that still works.
>
> **[2:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=136)** But now if we go and make a change to our server.js file, all right, so let's go into our upvote endpoint and maybe let's say something like, instead of success, we'll say Hooray.
>
> **[2:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=150)** Alright, so you'll see that as soon as you save that file, it automatically detects that something has changed and restarts our server for us.
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=160)** And this is very, very helpful in server side development to have that kind of automatic reloading functionality.
>
> **[2:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=167)** And sure enough, if we go back to Postman and click send now, we'll see that that has automatically taken effect, those changes that we made.
>
> **[2:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=175)** So let's actually change this back to success because I like that better.
>
> **[2:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=178)** We'll be modifying this endpoint a little bit more later on anyway, but we'll see that sure enough, when we change that back, it restarts our server automatically once again.
>
> **[3:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=188)** And if we click send, it's going to change back to success.
>
> **[3:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=192)** So one last thing that's going to make our lives easier here is if we go into our package.json file, and in order to avoid having to remember that new command npx nodemon src/server.js, what we can actually do is define a custom script, which we can call something like dev.
>
> **[3:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=214)** I'm going to call it dev here, that will run that for us.
>
> **[3:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=218)** So what we're going to do is to this scripts property, we're going to add a property dev, and after that we're just going to say npx nodemon src/server.js.
>
> **[3:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=230)** And now what we can do if you save your file is we can simply run npm run and then the name of that script, which is dev, and that will run that command that we specified for that for us automatically.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=246)** So you won't need to remember the exact command here.
>
> **[4:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=249)** You'll just need to remember that you need to run npm run Dev in order to start up our application in development mode.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=257)** So let's just test that one last time.
>
> **[4:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=259)** We'll click send and sure enough, it's working just like it was before.
>
> **[4:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/automatically-updating-with-nodemon?u=76281980&t=263)** So that is how to use nodemon to automatically restart our server whenever we make changes to it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), npm (4), npx (4), node (2)
> **Code Keywords:** let (9)
> **File Paths:** src/server.js (4), server.js (1), package.json (1)
> **Prerequisites:** install (4)
> **Env Vars:** npm (1), npx (1), post (1)
> **API Endpoints:** post  (1), /api/articles/learnnode/upvote (1)
> **Tools:** command line (1), postman (1)
> **Definitions:** is an  (1), is a  (1)

#### Adding comments
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=0)** - [Instructor] All right, so now that we've got our server updating automatically and we've implemented upvote functionality for our articles, another common feature that we'll want to implement for our backend for a blog site is the ability to add comments.
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=15)** So what we're going to do here is just like how we had this upvotes property, we're going to add a comments property to all of our articles that will simply be an empty array, at least to start holding all of the comments that users have added.
>
> **[0:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=31)** So we're just going to say comments, comments, and comments for all of these.
>
> **[0:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=34)** And now that we've done that, the next thing that we're going to do is we're going to create another endpoint here.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=42)** And this endpoint will allow users to add comments to an article.
>
> **[0:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=47)** So first of all, this endpoint's going to be a post endpoint since we'll be creating something, namely comments.
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=55)** And the path here is going to start with slash API just like our upvote endpoint.
>
> **[1:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=60)** And then it's going to have slash articles slash colon name.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=64)** We have that route parameter in there.
>
> **[1:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=66)** And then we're going to say slash comments.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=69)** And that should be all we need to do for that path.
>
> **[1:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=72)** So now for the callback, this is sometimes referred to as a route handler, this function.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=79)** What we're going to do is pretty much the same thing as what we did in our upvote endpoint.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=85)** We're going to find the corresponding article for that name parameter and we're going to add a comment to it.
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=93)** Now, in order to implement this endpoint, we're going to need to use a request body to carry the data that we want for the comment.
>
> **[1:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=105)** So let's actually go back to Postman before we implement this endpoint and decide what we want that to look like.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=111)** So we're going to first of all, change the URL here to slash comments instead of slash upvote.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=119)** And then we're going to open the body tab and go to raw and select JSON from the dropdown.
>
> **[2:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=124)** And let's decide what we want this request body to look like.
>
> **[2:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=128)** Really all that we're going to want it to have is two properties.
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=133)** One, specifying the person who posted the article.
>
> **[2:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=137)** So we'll say posted by, and I'm going to just say Shaun here.
>
> **[2:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=141)** And then we'll say text and this will be the actual text of that comment.
>
> **[2:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=147)** So we'll say something like, awesome article, cool.
>
> **[2:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=151)** So now that we've done that, and by the way, you could always add extra properties to these comments here such as adding the ability to upvote or downvote comments if you want.
>
> **[2:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=162)** But I'll leave that up to you.
>
> **[2:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=164)** But now that we know what the request body is going to look like, we can go back to our IDE and implement this thing.
>
> **[2:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=170)** So the first thing we're going to do, of course, is we're going to get the request name from the route parameters saying const name equals request dor params dot name.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=186)** And if you wanted to shorten this up a little bit, you could always use object destructuring and say const name in curly braces equals request params.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=195)** And then for the request body, we're going to say const and get the posted by and the text properties from request dot body.
>
> **[3:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=208)** All right, so now that we have both of those, we're going to find the corresponding article just like we did up here in our upvote endpoint.
>
> **[3:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=216)** So in fact, I'm just going to copy this here and paste it.
>
> **[3:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=219)** And we can also, instead of saying request dot params dot name, we can just say name right there in order to shorten that up a little bit.
>
> **[3:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=227)** And now we can just say, article dot comments dot push, and we're going to push a new comment onto there with the posted by and text properties that we got from the request body inside of it.
>
> **[4:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=244)** And the last thing here is we have to decide how we want this endpoint to respond to the client.
>
> **[4:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=250)** The easiest path to take here going forward is going to be to just respond with the updated article info.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=257)** And in fact, we'll want to rewrite our upvote endpoint to do this as well.
>
> **[4:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=263)** So here's what this is going to look like.
>
> **[4:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=265)** We're going to say response dot, and instead of saying send, which is generally used just for any kind of text-based data, such as saying hello, we're going to actually say response dot JSON, which is used to send back a JSON object as part of the response.
>
> **[4:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=284)** So just like how requests can have request bodies, responses can have response bodies, and we're going to say response dot JSON, and we'll send back that updated article like so.
>
> **[4:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=296)** All right, and then we'll do the same thing for this upvote endpoint up here.
>
> **[5:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=301)** Instead of saying response send, blah, blah, blah, we're going to replace this line by saying response dot JSON with the updated article.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=313)** So let's test that out now, what we're going to do is go back to Postman, right?
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=317)** Our server restarted automatically using node demon, which we added previously.
>
> **[5:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=323)** And we're going to send this post request to slash API articles learn node comments, and if we click send, sure enough, what we'll see is our updated article, which now has this new comment added to it, and we can always add something else too, we'll just say Shaun2, and then we'll say something like, I agree.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=344)** And if we click send, we'll see that sure enough, that adds that extra comment as well.
>
> **[5:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=350)** And let's just test up voting now, we'll just send a post request now to slash upvote instead of slash comments.
>
> **[5:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=357)** We don't need a request body for this one, so let's just select none.
>
> **[6:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=361)** And if we click send here, sure enough, we'll see that that'll increment the number of upvotes there.
>
> **[6:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=367)** Cool, so that is how to implement a comments endpoint.
>
> **[6:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=371)** So at this point, our server's working pretty well, but once again, there's that problem of if our server restarts, we know that all of our data is going to be reset.
>
> **[6:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-comments?u=76281980&t=380)** So the next thing that we're going to see how to do is persist our data by using a database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), const (3), function (1)
> **Env Vars:** json (5), api (2), url (1), ide (1)
> **Analogies:** just like (4), such as (2)
> **CLI Commands:** find (2), node (2)
> **Cross-References:** go back to (3)
> **UI Navigation:** open the (1), go to (1), dropdown (1)
> **Tools:** postman (2)
> **Speakers:** - [instructor] (1)


### 3. Adding MongoDB to Node.js

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why MongoDB?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=0)** - [Instructor] All right, at this point, we have a pretty fully functional front-end and back-end for our blog site, so the next thing that we're going to need to do is persist our data.
>
> **[0:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=10)** And for our application, it makes sense to persist our data in a database that plays very nicely with JavaScript.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=16)** And for that, we need look no further than MongoDB.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=21)** Now, MongoDB is what we call a non-relational database, which means that we can basically just push data into it from our JavaScript code without worrying too much about how that data is formatted.
>
> **[0:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=34)** Now, in the case of MongoDB, we can basically just hand our database any kind of JSON object that we want it to store, and we can retrieve them later whenever we need them.
>
> **[0:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=44)** Now, this is in contrast to traditional relational databases where the structure of the data in the fields it contains have to generally be defined in advance and adhere to whenever we add new data.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=58)** Now, working with relational databases also generally requires some knowledge of SQL.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=64)** And so by using MongoDB, which is non-relational, there's no need to learn any other programming languages, and this allows us to keep our full-stack application using only JavaScript.
>
> **[1:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=77)** Now, one last bonus of using MongoDB is that it's open-source and relatively easy to use.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=85)** So as you'll see, it's going to be pretty easy to add to our server.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-mongodb?u=76281980&t=91)** So now that we know some of the benefits of MongoDB, let's jump right in and see how to add this to our express application.

> [!info]- Semantic Content
>
> **Env Vars:** json (1), sql (1)
> **Code Keywords:** let (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Downloading and installing MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=0)** - [Instructor] All right, so before we can get started adding MongoDB to our application, we're going to need to actually install it locally or in code spaces so that we can start it up and connect to an instance.
>
> **[0:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=14)** Now, the instructions for this are going to vary pretty widely depending on which exact operating system you happen to be using.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=21)** So what you're going to want to do is follow the link that I've provided, and that'll take you to the instructions on how to install MongoDB Community Edition.
>
> **[0:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=31)** And you're just going to want to find your operating system over here on the left hand side.
>
> **[0:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=36)** So if you're installing on Linux or installing on Mac or installing on Windows, you're just going to need to follow all of the instructions that it specifies.
>
> **[0:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=44)** Now, one last thing here to notice is that I'm using the 7.0 version.
>
> **[0:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=52)** So you know, if there's a more recent version available, you're free to try that, but I would recommend using the same version as what I'm using here just to make sure that everything works in the same way.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=64)** So once you've followed the setup process, what you're going to want to do, and what you should be able to do now, is run the command mongod and if you hit Enter, what that'll do is that'll actually start up something called the Mongo Daemon, right?
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=79)** Basically the Mongo Daemon is just a program that runs in the background and that we can actually connect to from our server.
>
> **[1:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=87)** So what I'm going to recommend you do is leave that running in one terminal tab, and you can open up another one by clicking this plus button in Visual Studio Code.
>
> **[1:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=96)** And you can actually connect to that now by saying mongo and the mongo command is going to open up a Mongo shell for you, which you can actually use to interact with Mongo databases.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=112)** And the first command that you're going to want to run is use and we'll call this something like full-stack-react-db okay?
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=121)** You can choose what name you want to use here, but just make sure that if you do change the name, you actually change that string that we type in later on when we're connecting to this database on our server.
>
> **[2:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=132)** So we're going to say use full-stack-react-db and that will select this database.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=138)** It's a new database here.
>
> **[2:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=140)** And now in order to add data to our database, which we'll be able to load in our endpoints, what we're going to do is we're going to say db.articles.insertMany Now, what this function allows us to do when we run it in the Mongo Shell is insert what are known as documents into this Mongo database.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=166)** And here's how that's going to work.
>
> **[2:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=168)** We're actually just going to open up our server file, server.js, and we're going to scroll up to where we had this article info defined.
>
> **[2:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=177)** We're going to copy that array, including the square brackets, and paste that in between the parentheses of insert many.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=186)** And then we just have to close the last parentheses and hit Enter.
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=191)** And what you should see here is this thing that says acknowledged true, and inserted IDs with three IDs inside of it.
>
> **[3:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=200)** What this means is that we successfully inserted these JavaScript objects into MongoDB.
>
> **[3:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=207)** So what you should be able to do now is say db.articles and by the way, this is a collection name.
>
> **[3:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=214)** Collections in MongoDB are sort of like what tables are in SQL based databases.
>
> **[3:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=221)** Just collections of related or similar items.
>
> **[3:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=225)** And then we're going to say .find with empty curly braces inside of it.
>
> **[3:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=230)** And what that'll do is it'll show us all of the documents inside that collection, and you can add .pretty on the end of that if you want to see them printed out in a more readable way.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=243)** So anyway, before we move on and see how to connect our server to this database, I just want to show you a few other MongoDB commands that you can run in the Shell.
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=254)** The first thing is, if you want to find a single item, you can just say findOne and this object that we had to pass to the parentheses is a filter object, which allows us to define criteria that we want to use to search for a given document.
>
> **[4:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=274)** So if we wanted to find a document by name, for example, we could just say findOne and then we'll say name, and if we want to find the learn-node article, we could just say name: "learn-node" and sure enough, that's going to return the document where name is equal to learn-node.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=294)** So we'll be using this in our server a little bit later.
>
> **[4:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=297)** And of course, if there are multiple items that match a given piece of criteria, you can use find.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=304)** And let's say that we wanted to find all of the articles here with zero upvotes, we could say db.articles.find upvotes and for the value here, we could say 0.
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=317)** And sure enough, that would give us all of the articles with no upvotes, which is all of our articles.
>
> **[5:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/downloading-and-installing-mongodb?u=76281980&t=322)** So anyway, now that we have our Mongo database set up, let's see how we can add it to our server.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (9), find (8), node (3), make (2)
> **Code Keywords:** let (2), function (1), pass (1)
> **Prerequisites:** install (2), setup (1), set up (1)
> **Code Identifiers:** findone (2), insertmany (1)
> **Definitions:** is a  (2), known as (1)
> **Tools:** terminal (1), visual studio (1)
> **File Paths:** server.js (1)
> **Env Vars:** sql (1)

#### Adding MongoDB to Express
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=0)** - [Instructor] Well, now that we've got MongoDB up and running locally, or in Codespaces as I have here, let's see how we can incorporate it into our Express server.
>
> **[0:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=11)** Now, the first thing that we're going to do is we're going to install the MongoDB package into our project, right?
>
> **[0:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=18)** And this is the library or driver that will allow us to connect to MongoDB from inside a Node.js server, and we're going to do this by opening up our terminal, and just leave MongoDB running in the other terminal here.
>
> **[0:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=35)** So we're going to open up our terminal and make sure that you're inside the backend directory.
>
> **[0:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=40)** You might not be if you just opened up a new terminal.
>
> **[0:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=43)** We're going to say cd back-end/ and now we're going to say npm install mongodb, right?
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=50)** So this is again the MongoDB driver, and once that's installed, we can use this package to connect to and modify our local database from inside our Express server code.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=64)** So in a previous video, we added the data here in our articles info array to a database called full-stack React DB.
>
> **[1:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=76)** So now that our data is saved there, we no longer need to define it here, and instead of deleting it, I'm just going to leave that around so that I don't break these endpoints, but once we get these endpoints switched over to use MongoDB instead of this in-memory database, you'll actually see that the syntax highlighting will make the name of this thing grayed out, meaning we no longer have need of it, so we'll be able to delete it then.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=102)** So in order to get started here, the first thing that we're going to do is we're actually going to create a new endpoint that will allow us to simply load the data for one of our articles without modifying it, right?
>
> **[1:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=117)** Currently, we have two other endpoints that allow us to add upvotes or add comments, but we're going to want the ability to just see what the comments and upvotes are for a given article, so here's what that's going to look like.
>
> **[2:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=131)** We're going to start off by saying app.get, and for the path here, we're just going to say '/api/articles/:name', and now we're going to say request and response, and inside here, we're going to connect to MongoDB and make the same kind of queries that we made in the Mongo Shell, right?
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=155)** So db.articles.find, for example.
>
> **[2:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=158)** So first of all, let's actually get the name of the article.
>
> **[2:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=161)** We'll say const { name } = req.params, right?
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=166)** We're getting it from that route parameter there, and then we're going to import something up at the top called { MongoClient }, all right, so import { MongoClient } from 'mongodb', right?
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=180)** That library that we just installed.
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=183)** And additionally, we're going to import something else called ServerAPIVersion that we'll use to create a new instance of this MongoClient thing.
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=191)** Cool, so next, down here in our load article endpoint that we just created, we're going to create a new instance of that MongoClient thing, which will enable us to connect to MongoDB in the same way that we were able to connect to it from the terminal by typing the command Mongo.
>
> **[3:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=209)** So we're doing the same kind of thing here, just from a node server instead of from the terminal.
>
> **[3:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=215)** So here's what this is going to look like.
>
> **[3:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=217)** We're going to start off by defining the URI of the database we want to connect to, sort of like the URL, and then we're going to say const client = '', oh, and by the way, I left that blank there because this value's going to be different depending on whether you're connecting to MongoDB locally or connecting to it from Codespaces.
>
> **[3:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=239)** So we'll just leave it blank for now, and then we're going to say const client = new MongoClient, that thing that we just imported up above.
>
> **[4:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=248)** We're going to pass the uri as the first argument, and as the second argument here, we're going to pass a sort of settings object with serverAPi: as the first argument, and then version: is going to be ServerAPIVersion.v1.
>
> **[4:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=264)** We're going to set strict: to true, and we're going to set deprecationErrors: to true.
>
> **[4:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=271)** These are just basic pieces of setup, so don't worry too much about what's going on there.
>
> **[4:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=275)** So next, now that we have this client thing created, we need to tell it to actually connect to that MongoDB instance, which we're going to do by saying await client.connect, and since that's an asynchronous function, we're going to need to add the async keyword to our route handler here.
>
> **[4:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=296)** And now that we've connected, the next thing we're going to do is we're going to say, we're going to get a reference to our full-stack React DB that we created in the terminal by saying const db = client.db, and then we're going to use the name there.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=313)** Make sure that this is the same one that you used previously, or it won't have any data in it, and that should be all we need there.
>
> **[5:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=320)** So next we're going to make a query to the database that we just connected to by saying const articles = await db.collection('articles').
>
> **[5:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=335)** All right, we need to say db.collection('articles') instead of just db.articles as we were able to do in the Shell.
>
> **[5:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=342)** And then what we're going to do is say .find, and actually, since we're only searching for a single article here by name, we're going to use findOne, and I suppose we should change the variable name here to article singular, and then we're going to say findOne, and this will be, we want to search for the product by name, and that should give us the article that we're looking for.
>
> **[6:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=368)** So let's just send this back to the client.
>
> **[6:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=370)** What we're going to do here is we're going to say res.json(article); and that should send it back.
>
> **[6:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=377)** So let's test this thing out now.
>
> **[6:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=379)** But of course we're going to need to specify this URI, and for us, that's going to be mongodb:// and then we're going to have the local host, but it is important that you specify the actual IP here, 127.0.0.1, and then we're going to say port 27017.
>
> **[6:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=399)** All right, now, you may also want to look at your ports and double check that this is actually a public visibility.
>
> **[6:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=407)** You can set that to Port Visibility Public.
>
> **[6:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=409)** That's not necessarily going to stop you, but it will make it easier here going forward, and that should be all that we need to do, so let's give this thing a try now.
>
> **[6:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=418)** What we're going to do is go back to Postman and send a get request to /api/articles/learn-node, and if we click send, we should see that sure enough, we have this "learn-node" article info loaded from the database, right?
>
> **[7:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=436)** And you can tell that it's from the database because it has this extra little "_id": property here that's added automatically by MongoDB.
>
> **[7:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=444)** So let's try loading some other ones.
>
> **[7:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=446)** We'll try loading learn-react, and if we click send, sure enough, it loads that one as well.
>
> **[7:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-mongodb-to-express?u=76281980&t=452)** Cool, so at this point, we have MongoDB incorporated into our server, at least in a single endpoint, so the next thing that we're going to do is go through the other endpoints and add it there as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (5), pass (2), await (2), public (2)
> **CLI Commands:** make (6), node (4), mongo (2), find (2), cd (1)
> **Tools:** terminal (7), postman (1)
> **Code Identifiers:** findone (2), serverapi (1), deprecationerrors (1)
> **Env Vars:** uri (2), url (1)
> **Prerequisites:** install (2), setup (1)
> **File Paths:** node.js (1), res.json (1)
> **API Endpoints:** /api/articles/ (1), /api/articles/learn-node (1)

#### Rewriting the upvote endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=0)** - [Instructor] All right, so now that we've connected our server to MongoDB, the next thing that we're going to do is rewrite our other two endpoints so that they use MongoDB instead of the in-memory articleInfo database, or array that we were using.
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=15)** So we'll start off here with the upvote endpoint.
>
> **[0:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=18)** And really the first thing that we need to do here is figure out a more efficient way of connecting to MongoDB, right?
>
> **[0:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=25)** We don't want to have to copy and paste all of these lines of code into each and every endpoint.
>
> **[0:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=31)** So essentially what we're going to do is we're just going to make our server connect to MongoDB outside of any individual endpoint like these, and we'll just refer to the connection whenever we need to interact with the database.
>
> **[0:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=47)** So here's what this is going to look like.
>
> **[0:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=49)** We're just going to take the uri all the way through await client.connect and db = client.db.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=58)** We're going to cut those and we're going to create a function here that'll be called something like connectToDB, right?
>
> **[1:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=68)** So here we'll say function connectToDB, and inside here is where we're going to paste those lines of code.
>
> **[1:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=75)** Let's just adjust the indentation there a little bit to make it fit.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=79)** And this will need to be an async function here, of course, because it has the await keyword inside of it.
>
> **[1:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=86)** And last but not least, what we're going to need to do is store this connection in an external variable.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=94)** So we'll just say, let db and that'll just be undefined at first, and then we're just going to say db = client.db.
>
> **[1:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=104)** Cool, so now in order to make this work, all we need to do is make sure that we call connectToDB before we start up our server.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=113)** So here's what this is going to look like.
>
> **[1:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=115)** We're just going to create an asynchronous function.
>
> **[1:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=118)** So here we'll say async function, and we'll call it something like start.
>
> **[2:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=124)** And then inside here we're just going to say await connectToDB.
>
> **[2:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=130)** And after that we'll say app.listen. All right?
>
> **[2:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=134)** So we'll just add that down here and we'll leave that the way that it was before.
>
> **[2:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=140)** And now, last thing, we just need to say start, and actually call that function in order to connect to the database and start up our server.
>
> **[2:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=150)** So now that we've done that, we should be able to just use the DB whenever we need to do something.
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=155)** So down here, for example, in our get article endpoint, we can just refer directly to the DB by saying await db.collection, right?
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=166)** And that's using the external variable that we created up here.
>
> **[2:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=170)** So let's do the same thing with upvote now, with upvote, this one's going to be a little bit trickier query wise because we're actually going to be modifying a document in the database.
>
> **[3:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=182)** So what we're going to need to do here is basically just remove everything.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=186)** We're going to start fresh inside this endpoint because even though the logic is going to follow a similar format, it's going to be different enough that we might as well just start with an empty function here.
>
> **[3:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=198)** And what this is going to look like is we're going to say await db.collection articles just like we did in the previous endpoint.
>
> **[3:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=208)** And then instead of saying .findOne, there's actually a function called updateOne, which will allow us to modify a document in the database.
>
> **[3:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=221)** And since we're also going to want to return the updated document, right, by saying res.json article, there's actually a special query function for that case called findOneAndUpdate.
>
> **[3:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=236)** All right?
>
> **[3:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=237)** And here, while I'm thinking of this, let's make that an async function since we're using the await keyword.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=243)** And here's what this is going to look like, for findOneAndUpdate, we have to start off by finding the article by its name, which we can do by looking at the name route parameter.
>
> **[4:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=256)** So we're just going to say const name = req.params.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=261)** And now that we have that, we're going to say findOneAndUpdate.
>
> **[4:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=264)** We're going to find the article whose name matches the name route parameter.
>
> **[4:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=270)** And then the second argument we're going to pass here is going to be an object specifying the changes we want to make to that document.
>
> **[4:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=280)** This one uses a special syntax that's unique to MongoDB.
>
> **[4:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=284)** What we're going to do is we're going to say $inc, that stands for increment, and we're going to increment the upvotes by one.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=294)** And we can say that by saying upvotes 1.
>
> **[4:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=297)** All right, so that's again MongoDB's unique syntax for incrementing a property.
>
> **[5:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=303)** We just use the $inc thing, we tell it what property we want to increment, and we tell it how much we want to increment it by.
>
> **[5:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=310)** Cool.
>
> **[5:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=311)** And the last thing that we need to pass here is a sort of settings object that will tell MongoDB when we want to return the document that we're finding, right?
>
> **[5:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=323)** Do we want to return it before we update it or do we want to return it after we update it?
>
> **[5:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=329)** In our case, we want to return it after.
>
> **[5:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=332)** And for that we just need to say returnDocument.
>
> **[5:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=335)** And the value for that is going to be after, right?
>
> **[5:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=338)** So in other words, we want to return that document so that we can assign it to a variable after the update.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=344)** So we're just going to say, const updatedArticle = await db.collection, et cetera.
>
> **[5:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=351)** And then we can send that back by saying res.json updatedArticle.
>
> **[5:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=357)** So let's give this thing a try.
>
> **[5:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=358)** What we're going to do is, first of all, make sure our server is still running.
>
> **[6:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=362)** Yep, it looks like it's still running there.
>
> **[6:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=364)** MongoDB is still running. So let's give this thing a try.
>
> **[6:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=367)** By going over to Postman, we're going to send a POST request to articles/learn-react/upvote.
>
> **[6:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=376)** And if we click send here, we should see that sure enough, we get this article sent back with its upvotes incremented by one.
>
> **[6:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-upvote-endpoint?u=76281980&t=384)** And the interesting part about this now is that even after our server restarts, the upvotes and the comments will be persisted since we're using a Mongo database, that's again one of the major benefits of using a database over just using an in-memory array as we were doing previously.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), await (7), let (6), async (3), const (2)
> **Code Identifiers:** connecttodb (4), findoneandupdate (3), updatedarticle (2), articleinfo (1), findone (1)
> **CLI Commands:** make (7), find (1), mongo (1)
> **Definitions:** stands for (1), is a  (1), in other words (1)
> **File Paths:** res.json (2)
> **Analogies:** for example (1), just like (1)
> **API Endpoints:** post  (1)
> **Env Vars:** post (1)

#### Rewriting the comments endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=0)** - [Instructor] Alright, so now that we've rewritten our upvote endpoint to use MongoDB, let's do the same thing with our comments endpoint.
>
> **[0:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=8)** So again, with our comments endpoint, we'll pretty much start over.
>
> **[0:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=12)** We're just going to remove the last few lines here.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=17)** We will keep the request params and request body things around because that'll be very helpful.
>
> **[0:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=22)** So now what we're going to do is we're going to say await db.collection articles just like we did before.
>
> **[0:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=32)** And then we're going to use that same find one and update function in order to make our change as well as return the updated article.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=42)** And we're going to find it by name again, just like we did up in our upvote endpoint, except instead of saying increment with the dollar sign like we did for upvotes, we're going to say dollar sign push, right?
>
> **[0:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=56)** Because what we want to do here is we want to actually add a new comment onto the comments array of our article.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=64)** So here's what that's going to look like.
>
> **[1:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=66)** We're going to say dollar sign push, and we're going to say that we want to push something onto the comments array, and that something is going to be the new comment.
>
> **[1:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=75)** And just to make this absolutely clear, let's say const newComment equals postedBy and text.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=83)** And now that we have that, we're just going to say comments, we want to push newComment.
>
> **[1:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=88)** The order there is a little bit strange, but that's the basics of how that works.
>
> **[1:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=92)** So the last thing we need to do is, just like with our upvote endpoint, we need to say return document after.
>
> **[1:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=100)** Oops, let's try that again.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=102)** Return document, that's going to be the string after.
>
> **[1:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=107)** And let's also add the async keyword to our handler and say const updated article equals await db.collection, et cetera.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=119)** Cool, so let's just send that thing back to the client by saying response.json updatedArticle.
>
> **[2:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=126)** And now that we've done that, let's test this thing out.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=129)** So we're going to go back to Postman here and send a post request to slash comments after the article that we want to edit.
>
> **[2:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=139)** And we need to add a request body here.
>
> **[2:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=141)** So let's just say posted by, and you can use your name and you can really write whatever you want for the text.
>
> **[2:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=147)** I'm just going to say great article.
>
> **[2:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=151)** And if we click send here, what we should see is that, sure enough, we get back the updated article, which now has a comment added to it.
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=160)** And again, just like with upvotes, even after our server restarts, this comments here and the upvotes will still be around.
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=169)** So our data is now successfully persisted in MongoDB, and since we've converted all of our endpoints, we should be able to see that up here, we're no longer using this article info array, so we can simply delete that.
>
> **[3:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/rewriting-our-comments-endpoint?u=76281980&t=184)** And that is how to convert an express server to use MongoDB.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), await (2), const (2), function (1), async (1)
> **CLI Commands:** find (2), make (2)
> **Code Identifiers:** newcomment (2), postedby (1), updatedarticle (1)
> **Analogies:** just like (4)
> **File Paths:** response.json (1)
> **Cross-References:** go back to (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)


### 4. Connecting the Front-End and Back-End

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The Axios library
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=0)** - [Instructor] Okay, so at this point we have a working front end and a working backend, which we just created with Express and MongoDB.
>
> **[0:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=9)** So now what we need to do is bring the front end and backend together using network requests.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=16)** Essentially what we want to do is have our front end make requests to our backend in a very similar way to how we've been making requests to the backend using Postman.
>
> **[0:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=28)** The main difference is that the front end will be allowing the user to do this automatically by doing things like clicking buttons, adding comments, things like that.
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=38)** Now, there are many libraries that we can use in order to load data from the backend in React, but the one that we're going to be using here is called Axios.
>
> **[0:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=48)** So what you're going to want to do is open up a terminal and we're going to install Axios into the front end.
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=55)** Make sure you're in the front end directory by changing directories into the front end.
>
> **[1:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=60)** And then we're going to say npm install axios.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=64)** So that will install that library for us, and that should be all that we need to do to get started.
>
> **[1:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/the-axios-library?u=76281980&t=70)** We'll see how to actually use this library to make network requests to different URLs in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), npm (1)
> **Prerequisites:** install (3)
> **Tools:** postman (1), terminal (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Loading data For React Router routes
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=0)** - [Instructor] All right, so now that we've installed Axios, let's see how we can actually load data for the different routes in our React application.
>
> **[0:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=9)** So, what I'm going to do is I'm going to open up the frontend application again.
>
> **[0:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=14)** We haven't been in here in a little while, but we're going to go into App.jsx and take a look at the routes array that we created inside of there.
>
> **[0:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=24)** Now, remember that what this Routes Array did is it defined what component, right, what page component should be displayed for each path.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=33)** So, we had this surrounding Layout component that basically was in charge of displaying the nav bar, and then we had the HomePage, AboutPage, ArticlesListPage, and ArticlePage.
>
> **[0:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=47)** So, what we're going to need to do here in order to load data for one of these pages is we actually just need to specify another property in one of these objects, and that is a property called loader.
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=62)** Now, the way that this works is we simply need to specify a function for this loader property that will load whatever data this component needs from the server.
>
> **[1:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=77)** So, here's what this is going to look like.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=79)** We're going to define this function, which by the way, needs to be an async function because we're going to be making a network request, which is an asynchronous operation.
>
> **[1:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=89)** And inside here, what we're going to do is, we're going to send a request by saying await axios.get.
>
> **[1:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=99)** Now, we just installed the Axios Library, so in order to be able to use axios.get, we're going to need to import it up at the top here by saying import axios from 'axios';.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=112)** So, now that we have that, let's go back down and we're going to say await axios.get, and we need to specify the URL that we want to make this request to.
>
> **[2:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=122)** Now, the URL here is a little bit tricky to get right, because the temptation is to just find out whatever port the backend is running on and try and send a request to that, right?
>
> **[2:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=134)** So, we might want to try just copying this URL and sending it there, however, we're going to run into some problems if we try things this way because of something called a CORS error, C, O, R, S, so we're going to avoid doing that, and instead, what we're going to do is make our frontend and backend think that they're running on the same origin, right?
>
> **[2:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=156)** The same port and URL.
>
> **[2:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=159)** All right, now this is actually going to be a reality when we publish our application.
>
> **[2:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=164)** We're just going to have a single server that serves both our frontend and our backend.
>
> **[2:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=170)** So, what we're going to do here for the URL is we're simply going to say axios.get, and we're going to say /api/articles and then slash, and for now, we're just going to say learn-node, all right,?
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=183)** We'll see how to actually get the name for the article that we want to load here shortly, but that's all we should need to do for now, and again, that's going to send this type of request, a get request to this path.
>
> **[3:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=199)** so let's just get the response here.
>
> **[3:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=201)** We're going to say const response = await axios.get, and now that we have that, we're going to get the response body, which as we know, is going to contain the data for that article, such as the upvotes in the comments by saying const articleData = response.data, okay?
>
> **[3:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=225)** And now we simply need to return that by saying return, and what we can actually do here is pass the upvotes and the comments separately, which will make it easier to get at those inside the page component as we'll see.
>
> **[4:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=241)** So, here's what this is going to look like.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=243)** Instead of saying const articleData, we're just going to say const, and then we're going to say that we want the upvotes as well as the comments, and then what we're going to do is say return upvotes and comments.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=257)** Now, you might wonder why it is that we're returning this as an object.
>
> **[4:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/loading-data-for-react-router-routes?u=76281980&t=262)** Well, basically what we can do now is we can go into our ArticlePage and access these things by using a special react hook, so that's what we're going to see how to do next is use a react hook called useLoaderData.

> [!info]- Semantic Content
>
> **Code Keywords:** const (4), let (3), function (3), await (3), while, (1)
> **Env Vars:** url (5), cors (1)
> **CLI Commands:** make (3), find (1), node (1)
> **Code Identifiers:** articledata (2), useloaderdata (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** app.jsx (1)
> **API Endpoints:** /api/articles (1)
> **Analogies:** such as (1)

#### Using the useLoaderData hook
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=0)** - [Instructor] Alright, so now that we've added this loader for our article page route, the next thing that we need to do is actually go into that page and use a React hook in order to access the data that we're returning, right, these upvotes and comments.
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=15)** So here's what this is going to look like.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=17)** We're going to go into our ArticlePage component, so let's just open that up here, Pages, ArticlePage.jsx.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=26)** And now, we're going to import another hook besides useParams, from react-router-dom, and that's going to be called useLoaderData.
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=37)** Alright?
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=38)** So here's how this works, it's actually pretty simple.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=41)** Whatever we returned from the loader function in our route definitions, we can access simply by saying const something, right, data = useLoaderData.
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=55)** Now, in our case, since that loader data was the comments and upvotes in an object, we can actually just use object destructuring here to say upvotes and comments = useLoaderData.
>
> **[1:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=70)** And let's just try displaying these.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=73)** We'll just display them right underneath our article title.
>
> **[1:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=76)** Actually, let's get started here just by displaying our upvotes.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=79)** We'll just say something like, this article has {upvotes} upvotes, and we'll just leave our comments for the time being.
>
> **[1:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=89)** We will come back for those, it's just that it takes a lot longer to create the basic structure to display them.
>
> **[1:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=95)** So let's give this a try.
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=97)** The first thing that we're going to have to do, of course, is run our front end, and make sure by the way that your MongoDB is still running as well as your backend.
>
> **[1:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=106)** Alright, so we're going to go into our front-end directory, and make sure that you're in front end over here on the right-hand side.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=113)** And we're going to run npm run dev, and that should start up our front end again.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=119)** So let's go over to Ports, and we're going to want to open that up in another tab.
>
> **[2:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=124)** So let's click Open in Browser here, and we should see that open up.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=129)** And if we go to Articles, and we can really just click on any of these article pages here, what we'll see is that uh-oh, it looks like that didn't work.
>
> **[2:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=139)** Now, if you right-click and go to Inspect, and then go to the Network tab here.
>
> **[2:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=145)** And you may need to hit Refresh in order to see this.
>
> **[2:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=148)** If you select Fetch/XHR, that'll show you the learn-node request that was made by our front-end application.
>
> **[2:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=158)** Now, one thing to notice here is that it's not going to the right URL, this is the URL for our front end.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=166)** Now, the reason it did this, let's just go back to our IDE here.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=171)** The reason it did this is because inside that loader, we didn't specify the full URL.
>
> **[2:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=178)** Now remember, what I said earlier is that in order to make our front end and back end think that they're on the same origin, we need to set up something called a proxy.
>
> **[3:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=188)** So the way that we do this when creating React apps with Vite is by going into this vite.config.js file in our front end.
>
> **[3:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=198)** And we're going to add something to this little defineConfig object that it has.
>
> **[3:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=204)** And here's what that's going to look like.
>
> **[3:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=205)** We're going to say server, alright, this is going to be an object of its own.
>
> **[3:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=211)** Then we're going to say proxy, which is also going to be an object.
>
> **[3:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=215)** And then we're going to have a property here called /api, whose value is also going to be another object.
>
> **[3:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=223)** So we've got a fairly nested object here, but just bear with me.
>
> **[3:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=227)** Inside this api object, we're going to say target.
>
> **[3:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=231)** And here's where we're going to need to get the URL for our server.
>
> **[3:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=237)** So let's actually just open up our Ports thing here, and then we're going to find our server which is running on port 8000.
>
> **[4:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=245)** We're going to copy that URL by clicking that little clipboard icon.
>
> **[4:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=250)** And let's go back now to vite.config, and we should be able to paste this as the value for that target.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=257)** And now, we just need to... By the way, make sure you remove the slash after that.
>
> **[4:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=262)** What we're going to do is add changeOrigin now, and say true, and that should be all we need to do there in order to make this work.
>
> **[4:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=270)** Now, you may have to restart your front end.
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=273)** It's usually just a good idea to do that to make sure that those changes take effect.
>
> **[4:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=278)** And one thing that you're going to want to do here is if you look at your front-end port and it says Private, right, so if it looks like that, you're going to want to convert that to Public, right?
>
> **[4:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=290)** The reason for this is that our site running in our browser is actually going to be making requests now to this URL instead of to our server.
>
> **[5:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=301)** And that proxy is going to be sort of forwarding it behind the scenes.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=305)** Don't worry too much about how that works or why we need to do it, if it doesn't make sense to you here, just know that this will make our app work.
>
> **[5:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=312)** So let's open up our front end again, and what we should see now is if we go to any of our article pages, it will display, "This article has," and then it'll actually have a number in there.
>
> **[5:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=326)** And if you open up the Inspect window again and go to Network, and let's just hit Refresh here, you'll see that it actually shows the request that our page is sending to our server, right?
>
> **[5:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=338)** So if we take a look at the response here, sure enough, we're getting the learn-node article with zero upvotes and no comments.
>
> **[5:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=347)** Now, this is just because we hardcoded /learn-node into our loader, as you may recall, right?
>
> **[5:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=354)** If we go back to our app.jsx and take a look at the loader here, we hardcoded learn-node.
>
> **[6:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-the-useloaderdata-hook?u=76281980&t=362)** So the next thing we're going to want to do is actually incorporate the article's ID or name into this request that we're sending.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (1), const (1), case, (1), try. (1)
> **CLI Commands:** make (8), node (4), npm (1), find (1)
> **Env Vars:** url (6), xhr (1), ide (1)
> **UI Navigation:** go to (5), click on (1), right-click (1)
> **Code Identifiers:** useloaderdata (3), useparams (1), defineconfig (1), changeorigin (1)
> **File Paths:** articlepage.jsx (1), vite.config.js (1), vite.config (1), app.jsx (1)
> **Cross-References:** go back to (2)
> **Ports:** port 8000 (1)

#### Using route parameters in loaders
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=0)** - [Instructor] All right, so now that our front end is successfully loading article data from our server, the last thing that we really need to do in order to make sure that it's the right data is replace this hard-coded name for the article with whatever the route parameter happens to be that we're currently visiting, right?
>
> **[0:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=19)** So essentially, we want to take this name parameter and insert it into this string.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=26)** Well, as it happens, this is actually incredibly easy to do.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=30)** We can just add a single prop here called params to our function, right, our loader function that we're defining, and React will automatically pass these params, right, such as name, to our function.
>
> **[0:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=46)** So all we have to do now is take away this learn-node thing, and onto the end of this we're going to say + params.name, and that should be all we really need to do there.
>
> **[0:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=57)** It's pretty straightforward, right?
>
> **[0:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=59)** So let's just check and make sure that this works, and first of all, we know that our learn-react article already has some up votes, so we'll test that one out just to make sure it's working there.
>
> **[1:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=71)** So let's open up our front end in a tab, and we'll try this again.
>
> **[1:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=77)** We're going to go back to our Articles page, and we'll go to our React article, and sure enough we see that it displays one up vote instead of zero.
>
> **[1:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=88)** So let's go back to our Node Server, that one should still be zero, and our MongoDB one should still be zero because we haven't touched those yet.
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=97)** But we can also make sure by taking a look at our Inspector window, going to Network, and refreshing our page, and we should see now that, sure enough, it's loading it from the correct path and we're getting the correct article back.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=113)** And if we go back to Articles and our Node article, we'll see that that loads learn-node, and for MongoDB, we see that that loads the mongoDB article data.
>
> **[2:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=125)** So the last thing that we're going to do here is in order to make our application a little bit more modular, it's usually a good idea for these loaders to actually export them as part of the page file.
>
> **[2:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=139)** So what this is going to look like is we're actually just going to take this async function, we're going to cut it, and we're going to go into our ArticlePage and export that by saying export function, and then we're going to call this something like loader, all right, and then we'll paste our function like so, and we'll just delete that up to there.
>
> **[2:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=161)** And this does need to be an async function, so let's add the async keyword.
>
> **[2:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=165)** And now what we can do is we can simply load this loader function, or import this loader function rather, into our app.jsx and pass it in a much easier way.
>
> **[2:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=177)** But let's actually import axios into this file, just to make sure we have that imported, so we'll say import axios from 'axios'; and now we can go back to our app.jsx.
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=191)** And along with our ArticlePage, we're also going to import the loader, and we can rename that by saying as articleLoader.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=202)** And now we can just go down here and pass articleLoader as the loader instead of having our function defined in place.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=210)** So in other words, what we're doing here is we're just putting all of the logic that belongs together in the same file, right?
>
> **[3:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=217)** If we want to know how the ArticlePage is getting its data, we can just look at the loader function.
>
> **[3:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=223)** So anyway, that is how to load all of the article data for our individual articles.
>
> **[3:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/using-route-parameters-in-loaders?u=76281980&t=229)** So the next thing that we're going to do is work on comments and up votes and integrate them a little bit more into our front end.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (5), pass (3), async (3), delete (1)
> **CLI Commands:** make (6), node (4)
> **Cross-References:** go back to (4)
> **Code Identifiers:** articleloader (2), mongodb (1)
> **File Paths:** app.jsx (2)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)

#### Displaying comments
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=0)** - [Instructor] All right, so now that our article page is correctly loading information about the articles that it displays, the next step for us is to build a new component to display the comments for our articles.
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=15)** So, what we're going to do is, we're going to go over here into our front-end directory and we're just going to create a new component here.
>
> **[0:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=23)** We'll say New File, and we'll call this CommentsList.jsx.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=30)** All right, so inside here, it's going to be pretty straightforward.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=33)** We just need to say export default function, and we're going to call this CommentsList, just like the name of the file, and this is going to take a single prop called comments.
>
> **[0:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=46)** Now, all that we're going to need to do here is have our article page display this component and pass the comments that it loaded from our server as a prop to this thing.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=58)** So, let's just create a simple interface here that displays those comments.
>
> **[1:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=63)** Here's what this is going to look like.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=64)** We're just going to say, in a React fragment, h3, that's going to be our heading, Comments.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=73)** And now, underneath this, we're going to loop through our comments and display the same structure for each of them.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=79)** So, here's what that's going to look like.
>
> **[1:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=80)** We're just going to say comments.map, and for each comment, there we go, we're going to display a div, and this is going to have to have a key.
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=93)** We can just use the comment text for this.
>
> **[1:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=96)** So we'll say comment.text.
>
> **[1:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=98)** And that does assume, of course, that the text is going to be unique.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=102)** So, if there are two comments that share the same text, that could cause problems, but you know, we could always add a unique ID to these comments in MongoDB if we wanted to.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=112)** We'll just skip over that part for now.
>
> **[1:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=114)** And inside here, for each of these comments, we're just going to have an h3 heading that displays the person that posted the comment.
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=121)** So we'll just say comment.postedBy.
>
> **[2:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=124)** And underneath this, we're going to say paragraph, and this is going to be comment.text.
>
> **[2:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=131)** So, that should be all we really need to do here.
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=133)** And once again, we're going to ignore the ESLint errors here saying that we need to do props validation.
>
> **[2:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=140)** Just in the interest of time, we're going to leave this the way it is.
>
> **[2:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=144)** And now that we have our comments list, let's go back to our article page and we're going to import the CommentsList component by saying import CommentsList from CommentsList.
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=155)** And now, down here underneath the article content, we're going to say CommentsList.
>
> **[2:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=163)** And what we're going to do here is we're just going to say comments = comments, right?
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=169)** We're going to display the comments that we loaded from our server.
>
> **[2:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=172)** So, let's give this thing a try.
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=173)** Now we're going to go back over to our application running in a browser and we actually don't have any comments for MongoDB.
>
> **[3:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=182)** The only one that we have comments for is our learn React article.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=186)** So let's click on that and sure enough, we see that underneath there it says, "Great article."
>
> **[3:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/displaying-comments?u=76281980&t=192)** Now, feel free to add any extra styling you want to this, if you want to have, like, divider lines, things like that, but I'm just going to leave it the way it is here for now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (3), function (1), pass (1), interface (1)
> **File Paths:** commentslist.jsx (1)
> **Code Identifiers:** postedby (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Creating an upvote button
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=0)** - [Instructor] All right, so now that our front end is loading its data from our server, the next thing that we're going to need to do is allow our front end to make other types of requests to our server, such as requests for upvoting an article.
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=15)** So what we're going to do here is we're going to add an upvote button to our article page, and we're going to need that button to make a request to our server when it's clicked, that will tell our server to upvote the article.
>
> **[0:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=28)** And we're also going to need to update the interface here to reflect the new upvote count.
>
> **[0:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=34)** So here's what this is going to look like.
>
> **[0:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=36)** We're going to start off by adding a button next to this message.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=42)** And let's actually just put a button right here above our message that says how many upvotes the article has.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=50)** And we're going to say something like "Upvote."
>
> **[0:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=53)** And we'll also give this button an onClick prop, which is just going to be a function that will be called when this button is clicked.
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=61)** And we'll call this something like onUpvoteClicked, all right?
>
> **[1:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=66)** So we're just going to define a function there called that.
>
> **[1:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=70)** This is going to be an async function too, of course.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=73)** So we'll say async function onUpvoteClicked.
>
> **[1:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=76)** And inside here now.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=79)** By the way, let's just pass this to the on-click prop.
>
> **[1:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=82)** So onUpvoteClicked.
>
> **[1:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=84)** Inside this function now we're going to use the Axios library to make a request, but instead of making a GET request by saying axios.get, we're going to say axios.post, which will make a post request to the URL of our choice.
>
> **[1:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=103)** And that URL should be something like /api/articles.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=108)** And then we're going to need the article parameter there.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=111)** The name parameter, which we have up here.
>
> **[1:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=114)** So we'll just say + name, and then we're going to say /upvote.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=119)** And that should make a request to that endpoint for us.
>
> **[2:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=123)** So let's just say const response = await axios.post.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=129)** And now we should be able to get the updated upvote count from this response by saying const updatedArticleData = response.data.
>
> **[2:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=140)** And in order to update the upvote's count, we're going to need to do something a little bit interesting here.
>
> **[2:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=146)** We're actually going to need to import the useState hook from React, which is used to keep track of component state.
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=155)** And here's what we're going to have to do.
>
> **[2:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=158)** After we have the upvotes and comments from our loader data, we're actually going to set the upvotes as the initial value for a state here.
>
> **[2:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=167)** So we'll actually rename upvotes here to something like initialUpvotes.
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=173)** And we'll rename comments as well, to initialComments.
>
> **[2:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=179)** And now what we're going to do is we're going to say const upvotes and setUp votes equals... And we'll use that useState hook that we just imported.
>
> **[3:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=190)** And as the initial state, we're just going to pass initialUpvotes.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=195)** All right, and oops, I spelled initial wrong there.
>
> **[3:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=197)** So let's add an extra I.
>
> **[3:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=199)** And that should be all we need to do there.
>
> **[3:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=201)** So, now that we have this state, all we need to do is, after we update the number of upvotes by making that request, we're just going to call setUpvotes and we're going to set that to the updated number of upvotes by saying updatedArticleData.upvotes.
>
> **[3:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=222)** And you know what?
>
> **[3:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=223)** Actually let's change this initialComments thing back to comments for now, just so that it doesn't break our interface down here where we say comments.
>
> **[3:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=231)** So let's head back to our browser and what we should see is that, sure enough, we have this upvote button now, so let's try clicking it.
>
> **[3:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=239)** And if all goes well, we should see that this thing increases to two upvotes.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=243)** So let's give it a try.
>
> **[4:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=244)** We're going to click it.
>
> **[4:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=245)** And sure enough, that increases to two upvotes.
>
> **[4:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=248)** And furthermore, if we refresh our page, we'll see that that is still there, right?
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=254)** That data is now persisted in MongoDB.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=257)** So that is how to implement a simple upvote button.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-upvote-button?u=76281980&t=261)** The next thing that we're going to do is see how to do that same kind of thing for adding comments to articles in our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (5), const (3), interface (2), async (2)
> **Code Identifiers:** onupvoteclicked (3), updatedarticledata (2), usestate (2), initialupvotes (2), initialcomments (2)
> **CLI Commands:** make (5)
> **API Endpoints:** get  (1), /api/articles (1)
> **Env Vars:** url (2)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Creating an add comment form
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=0)** - [Instructor] All right, so now that we've added the ability to upvote articles to our application, the last thing that we're going to do is add an add comment form that will let users comment on articles.
>
> **[0:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=11)** So here's what this is going to look like.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=13)** We're going to go into our front end directory and inside source, we're going to create a new file called AddCommentForm.jsx.
>
> **[0:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=24)** And inside here we're just going to create a simple component called Add Comment Form, so we'll say export default function, AddCommentForm and here's what this is going to look like.
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=38)** We're actually going to have a single prop passed to add comment form, called onAddComment.
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=45)** And that's going to basically be a function that our page can pass down to it in order to allow our page to be the one that handles that and makes the request.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=54)** That just makes things a little bit easier going forward, as you'll see.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=58)** So as far as the elements that this component is going to display, here's what this is going to look like.
>
> **[1:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=64)** We're going to just put all of this inside a div and then we're going to have an H3 heading at the top that says Add a comment.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=73)** And after that, what we're going to do is we're going to add two inputs, one for entering a name and one for entering the actual text of the comments.
>
> **[1:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=81)** So here's what this'll look like.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=83)** We're going to say Label and inside that label we'll say Name and then we'll say input type = text.
>
> **[1:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=92)** And then what we're going to do is copy and paste this for the text of the comment.
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=97)** So let's just adjust the indentation there and we'll just say Comment for this label.
>
> **[1:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=104)** And then we're going to add a button that will say something like add comment.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=108)** And when this button is clicked, we want it to call this on add comment function with the values in both of these text inputs.
>
> **[1:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=117)** So here's what that's going to look like.
>
> **[1:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=118)** We're just going to say onClick= and we're going to need a little bit more logic here before this will work, we'll just say onAddComment for now.
>
> **[2:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=128)** And, well, now in order to keep track of the values inside both of these text inputs, we're going to need to add some state to this component.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=138)** So let's start off by importing the useState hook from React, just like we did in our article page to keep track of the up votes and comments.
>
> **[2:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=149)** And now for the state we're going to say const and we'll have the name text, we'll just say nameText and setNameText = useState.
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=160)** And the initial value for that will be an empty string.
>
> **[2:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=163)** And then we'll do the same thing for the comment text.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=166)** We'll say commentText and setComment Text = useState.
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=173)** And the initial value for that is going to be an empty string, as well.
>
> **[2:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=177)** Cool. So now that we've got those two state variables, we just need to bind them to these inputs.
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=183)** So we're going to do that by saying value = nameText and then for onChange we're going to say that we want to call setNameText with the new value of the text inside of it, which we can get by saying e.target.value.
>
> **[3:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=204)** And we'll do the same thing now for our comment text, we're going to say value = commentText, then onChange=e setcommentText to e.target.value.
>
> **[3:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=221)** And that is all we need to do there except, of course, call on Add Comment with name text and comment text.
>
> **[3:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=227)** We can do that just by passing it like this.
>
> **[3:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=229)** We'll say nameText and commentText and that should be all we need to do there.
>
> **[3:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=235)** So let's go back to our article page and we're going to use that add comment form.
>
> **[4:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=241)** First of all, we'll need to import it by saying import AddCommentForm from its file.
>
> **[4:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=247)** And now we'll go down and underneath our comments list, or maybe above our comments list, to encourage users to add comments because that's what they'll see first.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=257)** We'll say AddCommentForm.
>
> **[4:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=260)** We're going to pass on add comment, and we can define our own function here, just like we did for this upvote button.
>
> **[4:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=268)** What we're going to do is we're going to say onAddComment, and we'll define our own version of that function up here underneath on upvote clicked, we're going to say async function onAddComment.
>
> **[4:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=283)** And we're going to do something pretty similar to what we did inside this on upvote clicked function in here, except we're going to be making that request to another endpoint and we're going to need to include the nameText and the commentText as part of that request body.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=304)** So here's how this is going to work.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=305)** First of all, we need to change this to /comments here.
>
> **[5:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=310)** And then, in order to pass a request body, all we need to do is add a second argument to this, which is going to be a JavaScript object.
>
> **[5:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=318)** And we're going to say that we want the postedBy, right, if we take a look at our server.js endpoint again, just to verify this, we see that sure enough we have postedBy and text, so we just need to change those properties a little bit in our requests that we're making.
>
> **[5:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=338)** So let's go back to our article page and now we can say postedBy, that's going to be nameText and for the text, that's going to be commentText, and that should be all we need to do there except of course update the comments.
>
> **[5:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=355)** So let's do the same thing with the comments as what we did with our upvotes.
>
> **[5:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=358)** We're going to rename comments here to initialComments.
>
> **[6:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=364)** We're going to add another state variable called comments and setComments, like so, then we'll say = useState initialComments.
>
> **[6:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=374)** And now we just need to call set comments with the updated comments inside our on add comment function, and we need to set that to updated Article Data.comments.
>
> **[6:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=387)** Cool. So that should be all we need to do there.
>
> **[6:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=390)** Let's give this thing a try.
>
> **[6:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=391)** We're just going to go back to our app running in a browser here.
>
> **[6:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=396)** Sure enough, we see our form, it's not the prettiest form in the world, but again, I'll leave it up to you to restyle that yourself.
>
> **[6:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=403)** So I'm going to say Shaun, we'll say Shaun2 for the name, and then for the comment we'll say something like, I agree, this is a wonderful article.
>
> **[6:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=415)** All right, so let's try clicking add comment now.
>
> **[6:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=418)** And what should happen if everything goes well is we should see another comment appear underneath this one here.
>
> **[7:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=425)** So let's click Add Comment, and sure enough, we see that comment appear.
>
> **[7:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=429)** One last thing we might want to do is clear out these two text boxes after we click on the Add Comment button.
>
> **[7:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=436)** So let's go back to our IDE.
>
> **[7:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=438)** And in order to do that, we can say inside add Comment form, we'll just adjust this anonymous function that we're using here so that after calling on addComment, we just say setNameText to an empty string.
>
> **[7:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=456)** And then we're going to set the comment text to an empty string as well.
>
> **[7:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=461)** So let's just try that one here.
>
> **[7:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=463)** We're going to need to go back to our app in the browser again.
>
> **[7:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=467)** And here, let's just refresh the page there.
>
> **[7:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=469)** And now let's just say something like Someone else.
>
> **[7:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=472)** And for the comment we'll say, I like it too.
>
> **[7:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=477)** And if we click Add comment, sure enough, we'll see that that clears those out and adds that comment onto the end of that comments list.
>
> **[8:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=484)** Cool. So at this point we have a fully functional full stack application, so give yourself a pat on the back.
>
> **[8:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-an-add-comment-form?u=76281980&t=491)** The next thing that we're going to be doing though is we're going to be adding a little bit of user authentication to our app so that in order to upvote our article and comment on our articles, users will have to be logged in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (9), pass (3), this, (2), type = (1)
> **Code Identifiers:** nametext (5), commenttext (5), onaddcomment (4), usestate (4), setnametext (3)
> **Cross-References:** go back to (4)
> **Analogies:** just like (2), similar to (1)
> **File Paths:** addcommentform.jsx (1), server.js (1)
> **Env Vars:** ide (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)


### 5. Adding User Authentication with Firebase Auth

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why Firebase Auth?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=0)** - [Instructor] All right, well, as you know, we now have a full stack application that has a front end and backend that are now talking to each other.
>
> **[0:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=8)** And this allows users to upvote articles as well as add comments to them.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=13)** But in order for this application to be truly ready for production, there's a big piece of it that we still have to add.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=21)** And that piece is user authentication, right?
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=26)** Currently, if we were to publish this site, any user could just go to any page and click the Upvote button as many times as they want, as well as add as many comments as they want.
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=37)** And that's probably something that we'll want to avoid.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=41)** And so what we're going to do is we're going to add a login and create account page to our application, as well as add some logic to all of these pages here that will take into account whether or not a user is logged into our application.
>
> **[0:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=57)** And in addition to this, there's also going to be some things on the backend that we'll have to make changes to.
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=62)** I'll explain that in more detail shortly.
>
> **[1:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=65)** But the problem here is that adding user authentication to a site is actually pretty difficult to do from scratch, right?
>
> **[1:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=72)** If you want to, you know, try and write your own logic for doing this, it's probably not going to be very secure unless you're an expert in this kind of thing.
>
> **[1:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=82)** And that's why we're going to be using an off provider called Firebase off in order to do this for us.
>
> **[1:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=89)** So what you see here is just kind of the homepage for Firebase Authentication.
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=93)** What you're going to want to do is create an account here, and once you've done that, you should be able to click on Go to console, and that should show you a page that looks kind of like this, all right?
>
> **[1:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=105)** Now, I already have some projects here, so you might not see exactly what I'm seeing, but this is the page that you'll want to get to after you create your account.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=113)** So just pause the video right now and create your account.
>
> **[1:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/why-firebase-auth?u=76281980&t=117)** And once you've done that, we can continue on and actually create a Firebase project that we can use to add user authentication to our full stack app.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), continue (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Creating a Firebase project
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=0)** - [Instructor] Alright, so at this point you should have a Firebase Auth account created, and you should see a page that looks something like this, at least with a button that allows you to create a project like this one does here.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=13)** So what you're going to want to do here is click on Create a project, and that's going to take us through a little walkthrough where we'll get to specify things like the name of our project, as well as a few other things.
>
> **[0:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=25)** So first things first, the name of our project.
>
> **[0:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=27)** What we're going to do is we're going to call this Full Stack React, and I'm going to click Continue here.
>
> **[0:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=34)** And notice underneath this that this is a unique identifier for your project.
>
> **[0:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=39)** This is actually something that you can't change after you create this project.
>
> **[0:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=43)** So while this isn't going to be user-facing, you probably want to think twice about what you put in here.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=50)** I'm just going to leave it with the pre-generated thing that they created for me.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=54)** And then I'm going to click Continue, and this will ask us if we want to enable Google Analytics for our Firebase project.
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=61)** Now this is a very useful tool, but since it's not really relevant to this course, I'm going to disable it, and I recommend that you do the same.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=69)** Just makes set up a little bit simpler.
>
> **[1:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=72)** And then we'll click Create project, and that'll take a little while to set everything up behind the scenes for us.
>
> **[1:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=78)** So let's just wait for that to complete.
>
> **[1:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=82)** And once it's done, we should see this Continue button.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=85)** So let's click on that, and that will take us to the dashboard for our Firebase Auth project.
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-firebase-project?u=76281980&t=93)** So now that we've created this project in the console, the next step is going to be to actually incorporate this into our React app as well as our Node server.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (3), let (2), this, (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Adding Firebase Auth to React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=0)** - [Instructor] Alright, well, now that we've created a Firebase project in the console, the next thing that we're going to have to do is actually connect this thing to our React application.
>
> **[0:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=10)** And as I said, we'll also need to add this into our backend.
>
> **[0:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=14)** But we'll get to that a little bit later.
>
> **[0:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=16)** First, you're going to want to click on this little web icon here.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=21)** And this is going to allow us to add an app to our project, right?
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=26)** So a project can serve multiple apps.
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=29)** Think about if you were to have an iPhone app, an Android app, and a web application, well, you could have a single fire base off project that would take care of authentication for all three of those.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=41)** Alright, so what we're doing here is just kind of defining a platform that our Firebase project is going to be used on.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=50)** So let's just come up with a name for our app.
>
> **[0:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=52)** We'll just call this something like React Web App.
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=55)** And there's this little checkbox for setting up Firebase hosting for the app.
>
> **[0:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=59)** While that is one possible option, that's not the option that we're going to be using to host our app a little bit later on, so we'll just leave that unchecked and we'll click register app.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=69)** And once we've done this, that might spin for a second or two, it's going to give us a lot of code that we're going to need to copy and paste into our project.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=79)** So the first thing it wants us to do is install the Firebase NPM package into our front end.
>
> **[1:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=86)** And for that, we're just going to click copy and copy that to our clipboard.
>
> **[1:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=90)** And I'm going to go back over to our IDE.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=94)** And if you have your front end app running still, you're going to want to stop that and run NPM install Firebase inside of that.
>
> **[1:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=103)** And that'll run for a second while that installs the package.
>
> **[1:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=109)** And once that's finished, the next thing we're going to do is, go back to the Firebase console and copy the other pieces of code that it gave us.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=119)** Now, there's a lot of comments here, so feel free to read those to see what this is all doing.
>
> **[2:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=123)** But basically, this is just a block of code that will be run when our React application is loaded in the browser that will connect it to Firebase off and enable us to do things like figure out whether or not a user is authenticated.
>
> **[2:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=139)** All right, so what we're going to do is, we're going to go into our main.jsx file, all right, where we render our React app.
>
> **[2:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=145)** And before we render the app, we're going to paste all of that code that we just copied, right?
>
> **[2:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=151)** So we're importing this initialized app function from the Firebase package we just installed.
>
> **[2:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=158)** We have this big firebase config object with just some unique identifiers that will let Firebase know which app this is actually supposed to be connected to and using for authentication.
>
> **[2:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=170)** And finally, we have this app thing that we're creating using initialize app.
>
> **[2:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=175)** Now, we don't actually have to do anything with this initialize app return value.
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=180)** But we'll just leave it around there in case we do at some point.
>
> **[3:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=184)** All right, so that's all the basic setup that we need to add to React in order to add Firebase off to it.
>
> **[3:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=190)** But the next thing that we're going to need is pages that will allow the user to either log into our app or create an account.
>
> **[3:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=198)** So here's what this is going to look like.
>
> **[3:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=200)** I'm just going to add two more page components, and I'm going to close all of these here.
>
> **[3:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=205)** There we go.
>
> **[3:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=206)** So inside pages, we're going to create two new pages.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=210)** The first one's going to be called loginpage.jsx, and I'm going to do the lowercase i for that.
>
> **[3:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=217)** And then we're going to say new file, and we'll create a create account page component, createaccountpage.jsx.
>
> **[3:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=226)** And inside both of these, we're just going to get started by doing a super simple page, much like what we did with our homepage.
>
> **[3:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=233)** And we're just going to name this create account page, and we'll start off here by displaying an h1 heading that says create account, just so we can get the basic routing set up for these pages.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=246)** And then we'll do the same thing for our login page.
>
> **[4:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=248)** We'll just change the name of this component to login page.
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=254)** And the h1 heading here is going to say Log In.
>
> **[4:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=258)** Cool, and we'll come back and actually add the functionality to both of these pages very shortly.
>
> **[4:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=264)** But first, let's actually make sure that they're getting displayed on the correct routes.
>
> **[4:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=268)** So what this is going to look like is, we're going to go into our app.jsx component.
>
> **[4:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=274)** And inside this routes array, specifically inside the children route here, we're going to add those two pages.
>
> **[4:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=281)** So we'll say path, and for our login page, we'll just say /login.
>
> **[4:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=286)** And then the element for that is going to be our login page.
>
> **[4:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=291)** There we go, and that was just automatically imported for me up at the top.
>
> **[4:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=295)** So make sure that that happens for you as well.
>
> **[4:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=297)** And then for the create account page, we're going to do path create account.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=304)** And then the element for that, which is going to be imported for me automatically as well, is going to be the create account page.
>
> **[5:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=310)** And oops, it looks like that wasn't imported automatically for some reason.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=313)** So let's just import it manually up here.
>
> **[5:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=316)** We're just going to say import create account page from pages/CreateAccountPage.
>
> **[5:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=326)** All right, not sure why that didn't work, but also, let's remove this import axios thing.
>
> **[5:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=330)** We don't need that anymore.
>
> **[5:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=331)** And that should be all we need to do.
>
> **[5:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=333)** So let's test this thing.
>
> **[5:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=334)** We're going to need to run our front end again, of course, by saying npm run dev.
>
> **[5:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=339)** And now, we should be able to go back to our ports and visit our front end.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=344)** Actually, I just have that up in another tab here.
>
> **[5:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=347)** Let's just hit refresh just to make sure that that works.
>
> **[5:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=349)** Alright, and if we manually replace the URL here with /login, sure enough, we see the login page.
>
> **[5:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=357)** And if we replace that with create-account, we should see the create account page.
>
> **[6:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-react?u=76281980&t=363)** So we'll come back and actually implement these things shortly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), function (1), finally, (1), super (1)
> **CLI Commands:** npm (3), make (3)
> **File Paths:** main.jsx (1), loginpage.jsx (1), createaccountpage.jsx (1), app.jsx (1)
> **Env Vars:** npm (2), ide (1), url (1)
> **Prerequisites:** install (2), setup (1), set up (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), checkbox (1)
> **Code Identifiers:** iphone (1)

#### Build a login form
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=0)** - [Instructor] Alright, so now that we've added Firebase auth to our React project, as well as added the login page and create account page, let's actually implement these pages.
>
> **[0:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=10)** And for that we'll start off with the login page.
>
> **[0:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=12)** So the first thing that we're going to need to do here is import a few things.
>
> **[0:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=18)** The first thing here is going to be the useState hook, which we're going to use just to keep track of the values in the username and password fields, alright, so you know, the login page is just going to have those two text inputs that we'll need to keep track of.
>
> **[0:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=35)** So we'll say import { useState } from 'react'; and then we're going to say import Link and we're going to import something else called useNavigate.
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=45)** I'll discuss what that is shortly from 'react-router-dom'; Alright and lastly, we're going to need to import a few things from the Firebase package that we just installed.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=58)** So here's what that's going to look like.
>
> **[1:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=60)** We're going to say import { getAuth, signInWithEmailAndPassword } Yes, that is a real function name from 'firebase /auth'; Alright, so here's how this is all going to work.
>
> **[1:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=78)** The first thing that we're going to need to do, of course, is actually implement the basic interface here.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=83)** So we'll leave that login heading and we'll just sort of wrap that in react fragments so that we can put other things after it.
>
> **[1:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=92)** So let's just put that right there.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=94)** And after that, now that we have that h1 heading, we're going to display two text inputs.
>
> **[1:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=101)** And those two text inputs are going to be the email and the password respectively.
>
> **[1:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=106)** So we're going to say input.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=108)** And for this we'll just say placeholder.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=111)** And that placeholder will just be 'Your email address' You can obviously just put a fake email address there if you want.
>
> **[1:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=118)** And then we're going to say value={} and we're going to keep this in sync with a state variable in just a minute.
>
> **[2:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=125)** I'll just leave that empty for now.
>
> **[2:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=127)** And then we'll say onChange={} And we'll do the same kind of thing as what we did on the add comment form with this input.
>
> **[2:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=135)** So let's actually create those two state variables that we're going to use to keep track of our email and password input values.
>
> **[2:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=144)** We're going to say const, and then this is going to be [email, setEmail] = useState(''); And the initial value for that's just going to be an empty string.
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=155)** And then we'll do the same thing for the password.
>
> **[2:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=157)** We'll say const [password, setPassword] = useState(''); And that's going to start off as an empty string as well.
>
> **[2:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=167)** So now for the input, we're just going to say that the value should be bound to email.
>
> **[2:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=172)** And whenever a change is made to the value in this input, it should affect the value of that state variable accordingly.
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=180)** So the way that we do that is just by saying e, right?
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=183)** This is the event that just occurred, and we're going to say {e => setEmail(e.target.value)} In other words, the new value inside that text input.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=195)** So let's do the same thing now for our password input, we're just going to copy and paste that down here.
>
> **[3:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=201)** And this one, in order to actually hide the characters that are being typed in, we're going to add type='password' to this.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=210)** And for the placeholder='Your password' And then of course for the state variable that we're going to bind to this, we're going to say value=password and setPassword(e.target.value) Cool, so now that we have both of those inputs, the next thing that we're going to want is to actually have a button that will try and log the user in with the email and password that were provided.
>
> **[3:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=238)** So what this is going to look like is we're just going to say button, and we're going to have to add an on click prompt to that shortly.
>
> **[4:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=245)** We're going to say log in there.
>
> **[4:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=248)** And then just in order to make it easy to go between the login and create account pages, what we're going to do is we're going to add a link here that will send the user to the create account page.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=261)** Alright, so we'll say link to and then it's going to be /create-account.
>
> **[4:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=267)** And the text here will be something like, Don't have an account?
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=273)** Create one here.
>
> **[4:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=275)** And again, that's going to link the user to the create account page and that should be all that we need to do.
>
> **[4:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=282)** Alright, so the last thing that we're going to do for the interface here is add a little error section just in case there's an error logging the user in, right?
>
> **[4:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=291)** If we don't have an account for their email address or if they entered the wrong password, we're going to want to tell them what went wrong.
>
> **[4:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=297)** So what we're going to do here is just add an error state variable.
>
> **[5:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=303)** Alright, we'll go up to here and just say const error.
>
> **[5:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=307)** There we go.
>
> **[5:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=308)** And setError = useState.
>
> **[5:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=312)** And that's going to just start off as an empty string there too.
>
> **[5:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=316)** Alright, so now underneath the login heading and above the two text inputs, we're going to check and see if there's an error.
>
> **[5:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=325)** And if there is, we're going to display that inside a little paragraph tag. So the way that we do this is just by using short circuit evaluation in JavaScript, which we can do with the double ampersand symbol.
>
> **[5:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=337)** And we're just going to say p, and then we're going to insert the error into that so that it'll display what went wrong.
>
> **[5:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=345)** Cool, so now that we have that all set up, the next thing that we're going to do is we're actually going to provide our own function that we can call when the user clicks this login button that will try and log the user in with Firebase auth.
>
> **[6:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=362)** Now you may have guessed that with this sign in with email and password function, that might have something to do with how this is carried out in Firebase auth in a React project.
>
> **[6:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=373)** So what we're going to do is we're going to say function logIn.
>
> **[6:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=380)** And this is going to need to be an asynchronous function here because the whole process is asynchronous and we don't need this function to take any arguments.
>
> **[6:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=389)** But inside here we're going to have a try catch block and we're going to try calling await signInWithEmailAndPassword.
>
> **[6:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=399)** And here's how this is going to work.
>
> **[6:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=401)** We need to call getAuth, right?
>
> **[6:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=403)** This other function that we imported from Firebase auth as the first argument.
>
> **[6:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=408)** And then we're going to pass the email and password values as arguments.
>
> **[6:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=414)** And that's going to just send a request to Firebase auth to try and authenticate the user with that email and password.
>
> **[7:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=422)** And if all goes well, then we'll get to the next line and we can simply send the user to the articles list page, which we're going to do by using this useNavigate hook.
>
> **[7:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=434)** Here's how that's going to work.
>
> **[7:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=435)** We're just going to say const navigate.
>
> **[7:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=438)** This is a function that we can call in order to navigate programmatically, and we're just going to say navigate and send the user to ('/articles'); Alright, now, if the email and password fail, right, if the user entered in the wrong password or the wrong email, then that's actually going to throw an error, which we'll want to catch here.
>
> **[7:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=461)** And in that case, we'll just want to set the error state to the error message, right?
>
> **[7:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=468)** That'll end up displaying the error that occurred in this little element down here.
>
> **[7:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=472)** So what that's going to look like is we're just going to say setError(e.message); And now we just need to make sure that we call this login function down here when this button is clicked by saying onClick={logIn} And that should be all that we need to do there.
>
> **[8:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=493)** So let's just take a look at our page.
>
> **[8:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=495)** It might not be the best looking page in the world because we haven't added any styles to it, but let's just take a look at it.
>
> **[8:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=501)** And if we go to /login, we are going to have to add a link to this in the nav bar.
>
> **[8:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=506)** If we go to login, sure enough, we see that we have this email address and password inputs and if we click on don't have an account, create one here, that's going to take us to the create account page.
>
> **[8:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=519)** Now as for actually testing this functionality out, that's something that we're going to have to wait to do until we implement the create account page, as you'll see.
>
> **[8:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-login-form?u=76281980&t=528)** So that's what we're going to do next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (6), const (4), import { (2), interface (2)
> **Code Identifiers:** usestate (5), usenavigate (2), getauth (2), signinwithemailandpassword (2), setemail (2)
> **Definitions:** is a  (2), in other words (1), we call this (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Build a create account page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=0)** - [Instructor] All right, so now that we have a Login page, let's create the counterpart of this page, the Create Account page, right?
>
> **[0:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=7)** This will allow users to actually create an account that they can later log in with.
>
> **[0:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=12)** So here's what this is going to look like.
>
> **[0:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=14)** Our Create Account page is actually going to be remarkably similar in terms of imports and structure to our Login page.
>
> **[0:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=23)** So if you want, you could actually just copy most of this and replace what we had in the Create Account page with it.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=30)** And obviously you're going to want to rename this function to CreateAccountPage instead of LoginPage.
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=37)** And really the only other things that we need to replace here are the name of this function, SignInWithEmailAndPassword.
>
> **[0:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=44)** Instead, we're going to use something called CreateUserWithEmailAndPassword.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=50)** Firebase is well known for its very long and descriptive function names as you can see.
>
> **[0:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=57)** But now that we've done that, let's just go down and make a few more changes.
>
> **[1:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=60)** Obviously we're going to need to change this login function a little bit, but for the most part, the rest of these things up here, the state variables and the navigate should be more or less the same.
>
> **[1:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=70)** So let's take a look at this return statement.
>
> **[1:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=74)** What we're going to do here is we're going to leave the email and password inputs the same, except we're going to need to actually add a confirm password input, right?
>
> **[1:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=86)** Most websites make you enter your password twice just to make sure you're typing what you think you're typing.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=91)** So let's just redo the placeholder here by saying "Confirm password".
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=97)** The value for this is going to need to be a new state variable, so we'll just copy and paste what we had there and rename this to confirmPassword and setConfirmPassword.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=112)** And now we can go down and change the bindings here.
>
> **[1:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=116)** Value's going to be ConfirmPassword and on change is going to be SetConfirmPassword.
>
> **[2:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=123)** Now we just need to change the name of this button or the text of this button, rather, to "Create Account" and we'll also change the name of this function to "createAccount".
>
> **[2:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=134)** That's going to give us a little red underline there for now.
>
> **[2:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=136)** And last but not least, we're going to change this link here from "/create-account" to "/login", right?
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=143)** That's going to take us to the Login page now, and we're going to change the text here to something like, "Already have an account? Log in." All right?
>
> **[2:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=153)** And that'll be a link that takes the user to the Login page.
>
> **[2:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=157)** So that's pretty much all we need to do for the interface here.
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=160)** Oh, besides of course, change this to "Create Account" again up at the top.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=166)** And now what we're going to need to do is rewrite this login function, which first of all, we'll rename to createAccount, so that instead of trying to sign the user in with the email and password, it will try and create an account with the email and password.
>
> **[3:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=182)** First of all though, we're going to want to make sure that the user's password and confirm password that they entered are the same, so here's what that's going to look like.
>
> **[3:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=192)** We're just going to say something like, "if (password !== confirmPassword)", well, in that case, we need to display that error to the user and we'll do that by saying "setError" and we're going to set that to something like "Password and Confirm Password do not match."
>
> **[3:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=216)** And then we we'll return to prevent any other code from executing, right?
>
> **[3:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=220)** We don't want to call anything down here if the user's password and confirm password don't match.
>
> **[3:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=226)** So now we're just going to change this signInWithEmailAndPassword to createUserWithEmailAndPassword.
>
> **[3:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=234)** Same arguments, right?
>
> **[3:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=235)** The getAuth which gives a reference to the firebaseAuth instance, and then email and password are the second and third arguments respectively.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=246)** And if all goes well, just like on the Login page, we're going to send the user to the Articles List page.
>
> **[4:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=253)** Cool. So this page, we can actually try out.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=257)** What we're going to do is open this up.
>
> **[4:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=259)** So let's open up our application.
>
> **[4:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=261)** We can get to our Create Account page by clicking on this link on the Login page.
>
> **[4:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=266)** And sure enough, we'll see that we can get back to Login by clicking the link on the Create Account page.
>
> **[4:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=271)** So that's working out all right.
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=273)** And for the email address, what I'm going to do is I'm just going to enter shaun@[gmail.com](https://gmail.com), obviously not my real email address.
>
> **[4:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=281)** And then for password, you can ignore this little popup thing there.
>
> **[4:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=285)** That's just from the browser that I'm using.
>
> **[4:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=287)** And then I'm just going to say something like "abc123" for the password, and then "abc123" for the confirm password.
>
> **[4:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=295)** Let's actually try mistyping that, though.
>
> **[4:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=297)** If I add an extra character and click Create Account, sure enough, it says, "Password and Confirm Password don't match."
>
> **[5:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=302)** So let's try removing that extra character.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=305)** And if we click create account, it should be successful.
>
> **[5:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=309)** Whoops, it looks like we got an error, and this actually has to do with another piece of setup in the Firebase console.
>
> **[5:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=318)** So let's actually go back to the Firebase console and we're going to click on Continue To Console here.
>
> **[5:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=323)** And now we're going to need to actually tell Firebase what methods of authentication we want to allow, right?
>
> **[5:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=331)** There's actually lots of different kinds of authentication, including things like OAuth, but what we're going to do is click Get Started here.
>
> **[5:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=339)** Here we go. We have a full list of all of the different kinds of authentication that Firebase Auth allows.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=344)** So you can do things like Google OAuth, Facebook OAuth, et cetera, but we're just going to select Email/Password, and we're going to need to enable this.
>
> **[5:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=352)** That's the cause of the error that we were seeing there.
>
> **[5:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=355)** And there's this other option email link, which basically just emails you a link that you can click in your email in order to log in, which is pretty cool, but we'll leave that disabled for now.
>
> **[6:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=366)** I'll leave that up to you to experiment around with.
>
> **[6:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=368)** And we're going to say Save.
>
> **[6:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=370)** And now we should be able to create that account.
>
> **[6:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=373)** So let's go back here and try again.
>
> **[6:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=375)** We're going to click Create Account.
>
> **[6:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=377)** And sure enough, we see that that takes us to the Articles List page.
>
> **[6:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=381)** Now, if you see something like this when you log in, this is just the browser telling me that abc123 is not a safe password.
>
> **[6:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=389)** We can safely ignore that, and we also don't want to save that in our browser.
>
> **[6:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=393)** So we'll just get rid of those.
>
> **[6:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=395)** And well, at this point, we are successfully logged in.
>
> **[6:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=399)** And furthermore, if we go back to our Firebase console, what we'll see is if we go to this Users tab, then sure enough, we see that we have this user that we just created inside of there, all right?
>
> **[6:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=412)** And we see that it also has the date when we last signed in.
>
> **[6:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=417)** So anyway, that is how to add a Create Account page, as well as how to actually create an account in Firebase programmatically from a React app.
>
> **[7:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=428)** So the next thing that we're going to need to do is actually integrate this a little bit more deeply with our React application.
>
> **[7:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=434)** For one, we need to be able to log out if that's what we want to do, all right?
>
> **[7:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/build-a-create-account-page?u=76281980&t=439)** So that's one of the things that we'll be taking a look at next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), match. (3), interface (1), if ( (1)
> **Code Identifiers:** confirmpassword (2), createaccount (2), setconfirmpassword (1), seterror (1), signinwithemailandpassword (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), go to (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Analogies:** just like (1)
> **Prerequisites:** setup (1)

#### Making interface adjustments for authenticated users
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=0)** - [Instructor] All right, so at this point we have the pages that will allow the user to either log in or create an account, but so far, not a whole lot happens in the interface besides navigating the user to the articles list page.
>
> **[0:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=14)** So what we're going to want to do here is, A, add some sort of link that allows the user to log in to our nav bar up here next to the other links that we have, and, B, if the user's already logged in, we're going to want to have a log out button that will actually sign the user out.
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=33)** And maybe we'll want to do something like display the user's email address as well just so that we can prove that we actually have a logged in user here visually.
>
> **[0:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=43)** So here's what this is going to look like.
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=45)** We're going to go back over to our IDE and let's open up the nav bar here real quick.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=50)** We're just going to find that here, NavBar.jsx.
>
> **[0:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=55)** And now next to our articles link, we're going to add another list item here with a button inside it that says Sign In, or Log In, or you can choose what terminology you want to use there.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=69)** Now, as I said, we're going to need to modify the text of this button depending on whether the user is logged in or not, and we'll also want to modify the behavior of this button as well.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=83)** Now, we'll take a look in the next video at how we can create a custom react hook that will make it much easier to tell whether the user is logged in or not.
>
> **[1:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=93)** But for now, what we're going to do is just create a simple, it's not even a state variable, we're just going to create a constant here that says const isLoggedIn, and we're going to set that to true, but we'll also be able to set that to false so that we can see the different functionality.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=112)** All right, and we'll also just say const email = and we'll just have the user's email there like so.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=119)** All right, and we'll come back and actually modify these in the next video, but for now we'll just use these as placeholders.
>
> **[2:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=126)** Cool, so now that we have both of those things, here's what this is going to look like.
>
> **[2:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=130)** We're going to check to see whether the user is logged in.
>
> **[2:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=135)** And if the user is logged in, we're going to want to display a button that allows them to log out.
>
> **[2:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=141)** So here's how this is going to work.
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=143)** This will actually be able to implement pretty easily here.
>
> **[2:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=147)** We're going to say, and I'm using a ternary operator here, so I'll put the sign in one in the next condition, we're going to say button, the onClick event for this button is going to call a function that will import from Firebase off.
>
> **[2:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=162)** So let's actually go up to the top and do that here.
>
> **[2:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=164)** That function is called signOut.
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=169)** All right, so we're going to import that as well as the getAuth function that we've used in our other components here.
>
> **[2:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=175)** So we'll say import getAuth and signOut from firebase/auth.
>
> **[3:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=182)** And now that we have that, let's scroll back down and here's how this is going to work.
>
> **[3:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=186)** We just need to call signOut with getAuth passed to it.
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=191)** There's nothing else that we need to do there in order to make that work.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=195)** Cool, so now that we have that, let's just add some text to this button that's going to be Sign Out or Log Out or whatever you want to call it there.
>
> **[3:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=204)** So now that we've done that, the Sign In button, what this is going to do is it's actually going to take the user to the log in page.
>
> **[3:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=213)** So here's what that's going to look like, it's pretty straightforward to do.
>
> **[3:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=216)** We just need to use that useNavigate hook.
>
> **[3:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=220)** So we'll say import useNavigate from react-router-dom, just like we did in some of our other components.
>
> **[3:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=228)** Then what we're going to do is we're just going to have clicking on the sign in button take the user to the log in page by saying navigate, and we actually need to use the useNavigate hook by saying const navigate = useNavigate.
>
> **[4:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=244)** There we go.
>
> **[4:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=245)** And now if we scroll down, we're going to say navigate and send the user to /login.
>
> **[4:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=252)** Cool, so now that we've done that, the last thing we're going to need to do is display the user's email if they're logged in.
>
> **[4:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=258)** So here's what this is going to look like.
>
> **[4:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=260)** If the user's logged in, we're going to add another condition here saying isLoggedIn, and if the user is logged in, we'll use that double ampersand to display another list item here with a simple message inside it that just says something like Logged in as, and then we'll display the user's email there.
>
> **[4:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=284)** Cool, so that should be all we need to do there.
>
> **[4:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=286)** Let's test out this nav bar the way it is, remember that we have isLoggedIn hardcoded here.
>
> **[4:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=291)** And oops, we don't need that navigate thing up there, that was automatically imported when I mistyped something a little bit earlier.
>
> **[4:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=298)** But let's open up our application and what we should see is that, sure enough, our button says Sign Out, and this text here is very hard to see, it says Logged in as shaun@[gmail.com](https://gmail.com).
>
> **[5:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=309)** Let's go back and actually change the styling for that a little bit, which I believe we can do just by removing this paragraph tag from around it.
>
> **[5:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=318)** So let's just remove that and see what that does.
>
> **[5:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=321)** All right, well, that at least puts it on the same line, which I kind of like, but now let's just add a simple inline style here saying something like color equals and we'll set that to white.
>
> **[5:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=333)** All right, so let's try that again.
>
> **[5:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=334)** We're going to go back to our app and sure enough, we see that it says Logged in as shaun@[gmail.com](https://gmail.com), and then we have that Sign Out button that we can click in order to sign the user out.
>
> **[5:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=344)** Let's test this out and see what happens if we set this to false.
>
> **[5:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=349)** And in this case, the email wouldn't be there.
>
> **[5:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=352)** So let's just give that a try.
>
> **[5:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=353)** And if we go back to our app and take a look at the nav bar, sure enough, it says Sign In, and clicking that takes us to the log in page.
>
> **[6:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-interface-adjustments-for-authenticated-users?u=76281980&t=361)** So anyway, that is the basics of adjusting the interface according to whether the user is logged in or not.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), const (3), function (3), interface (2), case, (1)
> **Code Identifiers:** usenavigate (4), isloggedin (3), signout (3), getauth (3), onclick (1)
> **Cross-References:** in the next (3), go back to (2)
> **CLI Commands:** make (2), find (1)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **Analogies:** just like (1), kind of like (1)
> **File Paths:** navbar.jsx (1)
> **Env Vars:** ide (1)

#### Creating a custom auth hook
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=0)** - [Instructor] Alright, so as I said, the next step here is going to be to create a custom React hook that we can use to very easily learn in any of our page components or other components such as a nav bar, whether the user is logged in or not, and if they are, what their email address is, as well as other information about the user.
>
> **[0:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=22)** So here's how this is going to work.
>
> **[0:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=24)** Creating custom hooks in React is actually pretty straightforward.
>
> **[0:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=27)** We're just going to create a new file inside our source directory called useUser.js.
>
> **[0:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=35)** This doesn't even need to be jsx because it's just going to be JavaScript code.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=41)** And the first thing we're going to do is import a few utilities that we're going to need from both React and Firebase Auth.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=50)** So here's what that's going to look like.
>
> **[0:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=51)** We'll start off by saying import { useState, useEffect } from 'react'; we're going to use both of those hooks, and then we're going to say import { getAuth, onAuthStateChanged } another rather lengthy function name there from 'firebase/auth';.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=73)** Alright, so essentially what we're going to do here is create a custom React hook that combines these four things that we just imported in order to make it very easy to access the user and find out whether they're logged in or not.
>
> **[1:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=89)** What we want to be able to do is inside pages like our article page for example, in order to determine whether a user should be able to comment on an article, we want to be able to just say something like const { user } equals useUser{}, that's what we want to be able to do and not have to worry about any of the details behind the scenes with Firebase Auth.
>
> **[1:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=115)** So in order to make that a reality, here's what that's going to look like.
>
> **[1:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=118)** We're going to start off by saying constant useUser, these custom hooks do have to start with the word use, that's just a very important convention that React uses in order to find these hooks.
>
> **[2:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=131)** And then the first thing that we're going to do is create two state variables.
>
> **[2:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=136)** The first one is going to be a state variable that tells us whether or not Firebase Auth is currently loading the user's authenticated state.
>
> **[2:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=145)** So we're going to say [isloading, setIsLoading] and we're going to say = useState, and that's going to start off as true here because it always takes a little bit of time for Firebase Auth to load whether the user is authed or not, it takes time to actually make that request to Firebase Auth and check it.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=166)** The second thing we're going to do is create a state variable that will actually keep track of the user data that we're getting from Firebase Auth.
>
> **[2:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=174)** This is how we're going to access the user's email.
>
> **[2:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=177)** Cool, so we're going to say = useState here, and the initial value for that while we're loading the user is going to be null.
>
> **[3:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=185)** So now that we've done that, the next thing that we're going to do is we're going to use the useEffect hook in order to subscribe to changes in the auth state.
>
> **[3:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=198)** We're going to use this onAuthStateChanged thing to make that work.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=202)** So here's what this is going to look like.
>
> **[3:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=204)** We're going to say onAuthStateChanged and inside here we're going to need to pass getAuth like we usually do with all of these Firebase Auth functions.
>
> **[3:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=215)** And then we're going to define a callback function that will be called whenever the user's authenticated state changes.
>
> **[3:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=223)** So when the user logs in or logs out or when Firebase Auth loads the user's current authenticated state.
>
> **[3:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=231)** So here's what this is going to look like.
>
> **[3:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=233)** This function takes a user as an argument and depending on whether the user is logged in or not, this is either going to be an object containing user data such as again, the email address or it's going to be null.
>
> **[4:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=249)** If this function gets called with null, we know that the user is logged out.
>
> **[4:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=253)** That's just the convention that Firebase Auth uses there.
>
> **[4:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=257)** So here's what this is going to look like when the user's auth state changes we're going to say setUser{user}; and we're going to say setIsLoading{false};.
>
> **[4:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=268)** Whether user is an object or null, we now know for sure whether the user's logged in or not, so it's no longer loading.
>
> **[4:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=278)** And the last thing that we need to make sure to do here is this onAuthStateChanged function creates a subscription which can be prone to causing memory leaks in our application if we don't specifically unsubscribe from it.
>
> **[4:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=293)** So what we're going to do here is we're going to say const unsubscribe, and the way that this is used is the onAuthStateChanged function returns a function that we can call in order to cancel that subscription and close that memory leak.
>
> **[5:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=309)** So here's what this is going to look like, we just need to return that from useEffect now, we're going to say return unsubscribe; and that will automatically call that when the component unmounts.
>
> **[5:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=323)** So the last thing here, we only want this subscription to be created once, so we're going to pass an empty array as a second argument to useEffect.
>
> **[5:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=333)** This is by the way, just an array of dependencies, and whenever anything in this array changes, useEffect will call the callback function that we passed again.
>
> **[5:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=342)** So since we only want it to be called once, that's why we're passing an empty array there.
>
> **[5:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=348)** So the last thing we need to do now for our custom hook is simply return the isLoading and user states, and let's just export this custom hook now by saying export default user or useUser rather.
>
> **[6:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=365)** There we go. And that should be all we need to do.
>
> **[6:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=370)** So in order to demonstrate this thing, let's go into our nav bar component and instead of having these things hard-coded like we had them, let's simply use our useUser hook.
>
> **[6:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=381)** So we're going to say import useUser from the file that we just created, for isLoggedIn = false; blah, blah, blah.
>
> **[6:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=389)** We're just going to change this to const { isLoading, and user } = useUser{};.
>
> **[6:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=397)** Now this isLoading part is the most difficult part to get right.
>
> **[6:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=401)** What we're going to need to actually do is modify this a little bit so that we'll just say something like loading while we're still deciding whether the user is logged in or not.
>
> **[6:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=410)** So here's what this is going to look like.
>
> **[6:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=412)** We're going to say around both of these li elements that we just added here, we're going to say, {isLoading} and if it is loading, then we're just going to display a loading message by saying, here, instead of paragraph, we'll just add an li there that says loading, like so, and you don't even have to add that there if you don't want to.
>
> **[7:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=434)** Otherwise though, we're going to want to display everything else that's inside of here.
>
> **[7:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=438)** So here's what that's going to look like.
>
> **[7:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=440)** We're just going to take these two li elements and put them inside of there.
>
> **[7:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=446)** And we'll also need to wrap those in a fragment like so.
>
> **[7:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=452)** Alright, so we'll just take those and put those inside there again and adjust the indentation a little bit.
>
> **[7:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=459)** And that should be all that we need to do, except for of course this isLoggedIn thing, what we're going to do for this is we're just going to check whether the user is there.
>
> **[7:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=469)** That'll tell us whether the user is logged in or not.
>
> **[7:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=472)** We're going to do the same thing down here for user.
>
> **[7:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=475)** And then for the email, we're going to just say {user.email}.
>
> **[8:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=482)** And that will give us the email address for the user.
>
> **[8:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=484)** So let's test this thing out now.
>
> **[8:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=486)** We're going to go back to our application running here and sure enough we see that that's still displaying logged in as shaun@[gmail.com](https://gmail.com).
>
> **[8:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=496)** And if I click sign out now this is actually going to sign the user out of the app and we see that sign in button.
>
> **[8:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=504)** So let's go to the login page. I'm going to try doing this now.
>
> **[8:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=508)** We're going to say shaun@[gmail.com](https://gmail.com).
>
> **[8:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=510)** I'm going to use that password that I used, ABC123, and we're going to click the login button and we're going to ignore (chuckling) Google Chrome's complaint about that password, and sure enough, we see that we are now logged in again.
>
> **[8:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=524)** So it looks like our nav bar is working quite well.
>
> **[8:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/creating-a-custom-auth-hook?u=76281980&t=527)** So the next thing that we're going to need to do is actually modify the functionality of both the front and back end of our article page so that we can make sure that only authenticated users can up vote articles and add comments.

> [!info]- Semantic Content
>
> **Code Identifiers:** useuser (7), useeffect (5), onauthstatechanged (5), isloading (4), usestate (3)
> **Code Keywords:** function (8), let (5), const (3), import { (2), pass (2)
> **CLI Commands:** make (6), find (2)
> **Analogies:** such as (2), for example (1)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **File Paths:** useuser.js (1)
> **Env Vars:** abc123 (1)
> **Cross-References:** go back to (1)

#### Adding Firebase Auth to Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=0)** - [Instructor] Alright, so as I mentioned, there's a few adjustments that we're going to have to make to our front end now that we have access to the user and whether or not they're logged in.
>
> **[0:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=9)** But before we do that, we're actually going to take a slight detour and go to the backend because we're going to need to add Firebase off there as well.
>
> **[0:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=20)** Now, the reason we need to do this is because even if we put certain protective measures in place on the front end, the endpoints on our server aren't safe unless we actually put logic in the server that will verify that a logged-in user is making that request, right?
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=37)** So in other words, if we didn't add any protection to our server endpoints, a user could just use something like Postman to get around any protective measures we put in place on the front end.
>
> **[0:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=49)** So what we're going to do here is we're going to open up our backend, and here we go, we'll just go into the backend directory.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=58)** And we're going to need to open up our server file here.
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=61)** And in order to make this work, we're going to need to install an NPM package into our backend called Firebase Admin.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=69)** This is actually a slightly different package than what we used for our front end because it's a more powerful and if you're not careful, dangerous package to use, since in theory it has full access to your Firebase projects.
>
> **[1:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=84)** So here's what this is going to look like.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=85)** We're going to go into the terminal for our backend.
>
> **[1:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=88)** We're going to stop our server for now, and we're going to say npm install firebase-admin, and we'll hit Enter there.
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=97)** And again, that's going to install the Firebase Admin package.
>
> **[1:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=102)** And now that we've installed that, we're going to go into our server file and import something called Admin from the Firebase Admin package.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=113)** Now, essentially what we need to do here is we need to call a function called admin.initializeapp and that will basically allow us to do things on our server, like verify that it's an authenticated user who's making the request from the front end instead of just someone with access to Postman who's trying to hack our app.
>
> **[2:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=136)** We'll see exactly how we add protection to our endpoints shortly.
>
> **[2:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=140)** But first, in order to prove to Firebase that this server should have admin-level privileges and be able to use this Firebase Admin package, we need to actually generate some credentials for our server, right?
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=155)** Think of this as like generating a username and password that our server can use to prove that it is who it says it is.
>
> **[2:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=163)** So what we're going to do is we're going to go into Firebase off here, and then you're going to go up here to the Settings.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=171)** You're going to say Project Settings, all right?
>
> **[2:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=174)** And over here, under Service Accounts, this is where we're going to create those credentials, right?
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=180)** So creating a service account is, as I said, basically how we give our server the ability to prove to Firebase that it is who it says it is.
>
> **[3:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=192)** So here's what this is going to look like.
>
> **[3:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=194)** We're going to select Node js and it's going to give us a little bit of a code telling us how to actually access these credentials.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=202)** We'll come back to that shortly, but we're going to want to click Generate new private key.
>
> **[3:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=208)** And it's going to warn you that this is a dangerous key here.
>
> **[3:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=212)** You definitely don't want anyone to have access to it.
>
> **[3:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=214)** So you're going to want to avoid committing this key to GitHub.
>
> **[3:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=218)** I'm going to click Generate key here.
>
> **[3:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=220)** And now that we've done that, that should download that as this JSON file.
>
> **[3:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=225)** All right, so what we're going to need to do now is move this JSON file into our IDE, which, if you're using Codespaces, should be pretty straightforward.
>
> **[3:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=234)** You should be able to just access those downloads, drop it into here.
>
> **[3:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=238)** And if you take a look at the contents here, you'll see that it has this private key and that's precisely what you don't want to commit.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=246)** So I'm going to close that here, and I'm actually going to rename this file something a little bit shorter.
>
> **[4:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=252)** We're just going to say credentials.json.
>
> **[4:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=255)** We'll actually put this inside the backend of our application and we're going to want to add a .gitignore, well, actually, we already have a .gitignore here, and we're going to want to add that credentials.json file to this by saying back-end, there we go, /credentials.json.
>
> **[4:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=274)** That'll make sure that it doesn't get committed to GitHub and compromised.
>
> **[4:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=278)** So you should see it turn gray over on the left-hand side as well.
>
> **[4:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=282)** Make sure that that happens or you didn't type in the right path.
>
> **[4:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=286)** So now that we've done that, we're going to go back to our server and we're going to use the code that Firebase off gave us.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=294)** We're just going to copy this, there we go.
>
> **[4:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=296)** We have our service account credentials like so.
>
> **[5:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=300)** So what we're going to do is we're just going to paste those here.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=304)** And as a matter of fact, because it's using require instead of import, as we've been using, we're going to need to just change this a little bit.
>
> **[5:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=312)** What we're going to do is we'll remove this and we're just going to say something like const credentials = and then we're going to say JSON.parse, and we're going to use the good old FS package in order to load this file synchronously.
>
> **[5:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=331)** We can do that here because we want this to happen before our server starts up.
>
> **[5:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=335)** So we'll say import fs from fs, and now we just need to say inside here, fs.readFileSync, and we're going to load our credentials.json file by saying ../credentials.json.
>
> **[5:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=351)** Cool, so now that we have those credentials, we should be able to call admin.credential.cert with those by saying credentials.
>
> **[6:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=360)** And well, let's run our backend to make sure that that works.
>
> **[6:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=364)** If it doesn't work, it'll show us an error.
>
> **[6:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=366)** So let's try this.
>
> **[6:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=367)** We're just going to run npm run dev here, and we should see it start up, and oops, it looks like I got the path wrong there.
>
> **[6:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=374)** We can remove one of those dots and that should fix it.
>
> **[6:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=377)** So sure enough, it looks like our app is running.
>
> **[6:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=380)** So that is how to set up our Node js server with Firebase Admin.
>
> **[6:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/adding-firebase-auth-to-node-js?u=76281980&t=385)** And this, as you'll see very shortly, will allow us to protect our endpoints and make sure that only logged-in users are able to use them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), npm (3), node (2)
> **Code Keywords:** private (2), this, (2), let (2), function (1), require (1)
> **File Paths:** credentials.json (5)
> **Env Vars:** json (3), npm (1), ide (1)
> **Tools:** postman (2), github (2), terminal (1)
> **Prerequisites:** install (3), set up (1)
> **Definitions:** in other words (1), is a  (1)
> **Code Identifiers:** readfilesync (1)

#### Protecting endpoints using auth tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=0)** - [Instructor] All right, so now that we've added firebase-admin to our express server, it's time to see how we can protect the upvote and comment endpoints so that only users who are logged in will be able to do those things.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=13)** And additionally, we'll also see how to make sure that users are only allowed to add one upvote to an article.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=21)** So what we're going to do here is use something called express middleware in order to check every request that comes in to see who's actually making that request, right?
>
> **[0:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=33)** What user is actually doing that?
>
> **[0:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=36)** So in order to do this, what we're going to do is after app.get, API article's name, right, we still want users who aren't authenticated to be able to access this so that they can see the comments and see the upvotes for the articles.
>
> **[0:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=52)** After this, we're going to say app.use.
>
> **[0:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=56)** And here's what this is going to look like.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=58)** We're going to have an async callback function, right?
>
> **[1:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=61)** We're going to say async function.
>
> **[1:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=63)** And much like how we were able to say request and response for the route handlers for just regular routes, in this one, we're going to say request, response, and we also have access to a function called next, which is just a function that we can call to tell express when our middleware is done.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=83)** So first of all though, the reason that we used this app.use function is because whatever function we pass to this will be called for every request that hasn't already been handled, right?
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=97)** So that's why we're putting it after this app.get thing and before our app.post upvote endpoint is because we don't want it to apply to app.get article and we want it to apply to everything else.
>
> **[1:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=112)** So here's what this is going to look like.
>
> **[1:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=113)** Inside this middleware, we're going to use something called an authtoken, which is basically just a long string that we're going to require the client side to send that will tell us what user actually sent that request.
>
> **[2:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=130)** We'll see what this looks like from the front-end a little bit later.
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=133)** But for now, we're just going to assume that the user has included that in the request headers, which we can access by looking at request.headers.
>
> **[2:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=143)** So what this is going to look like now is we're going to say const authtoken equals equals request.headers, right?
>
> **[2:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=152)** So we're getting that authtoken off of those headers, and now we're going to use the firebase-admin package to actually verify this authtoken and tell us what user that authtoken corresponds to.
>
> **[2:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=165)** So here's what we're going to do.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=166)** We're going to say if authtoken, first of all, if the user didn't include an authtoken, we're not going to want them to be able to access these endpoints at all.
>
> **[2:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=175)** So what we'll do is inside else, we'll just say response.sendStatus.
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=180)** And the rule of thumb here is just to send back a 400 status code, basically meaning that the response did not include all the information that it needed to.
>
> **[3:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=190)** On the other hand, if the user did include an authtoken, what we're going to do is we're going to say const user equals await admin, right, so we're using the admin package here, .auth.verifyIdToken, and we're going to pass that token as an argument to this.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=210)** So again, what Firebase Auth is going to do with this token is it's going to check and make sure that it's valid.
>
> **[3:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=217)** And if it is, it's going to return the user that created that token.
>
> **[3:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=223)** So if all went well, what we're going to do next is we're going to actually add this user to the request object so that it can be easily accessed in the following endpoints.
>
> **[3:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=236)** And we can just do that by saying request.user equals user.
>
> **[4:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=240)** And this is more or less what happens with things like the params, how we can just access request.params or the request body, how we can just say request.body.
>
> **[4:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=250)** Now what we'll be able to do is just say request.user and find out who's making that request.
>
> **[4:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-endpoints-using-auth-tokens?u=76281980&t=256)** So the last thing we need to do now is we need to call next and that will tell express that we're done with whatever it was we were doing inside this middleware callback, and it can continue on to whatever the appropriate route handler is.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), this, (2), async (2), pass (2), const (2)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** sendstatus (1), verifyidtoken (1)
> **Env Vars:** api (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Protecting the upvote and comment endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=0)** - [Instructor] All right, so now that we've added this middleware that allows us to load a user, the next thing that we're going to do is we're going to actually go into our upvote endpoint and make sure that users can only add a single upvote, all right?
>
> **[0:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=15)** Now, later on, you might want to take a look at the comments endpoint and put some sort of restriction on there, such as allowing users to only add one comment or maybe doing some sort of content moderation thing there.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=26)** But for now, the comments endpoint is at least protected from users who aren't logged in.
>
> **[0:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=32)** So what we're going to do here with the upvote endpoint in order to enforce one upvote per user is this, we're going to start off by figuring out what the user's ID is, and we can get that now by looking at req.user.uid.
>
> **[0:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=48)** That's the user's unique ID there.
>
> **[0:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=51)** So here's what this is going to look like.
>
> **[0:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=52)** We're going to start off by saying const uid equals req.user, which we know this exists now, because of what we did up here.
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=62)** This middleware is going to be run for every request that goes to these two endpoints.
>
> **[1:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=68)** And then what we're going to do is we're actually going to need to sort of reconfigure the way that we work with upvotes in the database, because instead of just storing upvotes as a single number as we've been doing, we're actually going to want to store upvotes in a slightly different way.
>
> **[1:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=85)** We're going to want to have each of our articles in our database have an upvoteIds property, and this is basically going to be an array containing all of the user's IDs who have upvoted this article already, right?
>
> **[1:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=101)** So if we have IDs, 123, 234, 345, so what we would be able to do with this is we would be able to look at these IDs and tell whether or not a user had already updated it by checking whether the user's ID was in the array, right?
>
> **[1:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=118)** It's as simple as that.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=119)** So here's what this is going to look like.
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=121)** We don't need to really go into the database and modify anything at this point, but we're just no longer going to use the upvotes number anymore.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=129)** So here's what this is going to look like.
>
> **[2:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=131)** Instead of saying increment upvotes by one when the user upvotes the article, or perhaps in addition to that, what we're going to do is we're going to say $push, and we're going to add the user's ID onto an upvoteIds array.
>
> **[2:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=149)** So this is going to look like this.
>
> **[2:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=150)** We're going to say upvoteIds, uid, all right?
>
> **[2:35](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=155)** And that will again add the user's ID onto that array for that article, all right?
>
> **[2:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=161)** Now, before we allow the user to do that though, we need to make sure that the user's actually allowed to upvote it in the first place.
>
> **[2:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=168)** So here's what this is going to look like.
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=169)** We're going to start off by loading the original article, right?
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=173)** We'll say const article equals await db.collection articles.
>
> **[2:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=179)** And we're just going to use the .findOne method, and we're going to find that article by name just like we're doing with findOneAndUpdate.
>
> **[3:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=188)** But this is the original article, meaning that we can check to see whether the user is able to upvote it.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=195)** So what that's going to look like is we're going to say const upvoteIds equals article.upvoteIds, and we're going to provide a backup value here of an empty array just in case that hasn't been added to the article yet.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=210)** Then we're just going to create a variable here called canUpvote, and we're going to check to see, first of all, whether we have an ID for the user and then we'll say ampersand.
>
> **[3:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=225)** We want to make sure that the upvoteIds of that article does not include the user id, all right?
>
> **[3:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=232)** So that is how we're going to make that work.
>
> **[3:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=236)** So now we know whether the user is allowed to upvote or not.
>
> **[3:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=239)** So we're just going to surround this updated article thing by saying if canUpvote.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=246)** All right, we'll put that all inside of here. Like so.
>
> **[4:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=250)** We'll just cut that and paste it into our if statement, and we'll adjust the indentation of course, all right?
>
> **[4:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=258)** And that's pretty much all we need to do.
>
> **[4:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=259)** Oh, we need to put this updated article thing in there as well.
>
> **[4:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=264)** Otherwise, right, if the user isn't able to upload the article, we might want to send back some sort of like, we'll say res.sendStatus, and we'll send back a status code of something like 401, and we'll send back a status code of 403, which means that the user is not authorized to do what they're trying to do.
>
> **[4:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=285)** And that should be all that we need to do in order to rewrite our upvote endpoint and make sure that users can only upvote things once.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=294)** So there's still one missing piece to this though, and that is we need to make sure that our front end actually includes this authtoken when it makes requests.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/protecting-the-upvote-and-comment-endpoints?u=76281980&t=304)** So that's what we'll see how to do next.

> [!info]- Semantic Content
>
> **Code Identifiers:** upvoteids (6), canupvote (2), findone (1), findoneandupdate (1), sendstatus (1)
> **CLI Commands:** make (6), find (1)
> **Code Keywords:** const (3), protected (1), this, (1), this. (1), await (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Making requests with auth tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=0)** - [Instructor] Well now that we've protected our endpoints and there are actually a few adjustments that we'll need to make to this code before it will work properly, but we'll get to those a little bit later.
>
> **[0:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=10)** The next thing that we're going to do is we need our front end to actually send along this authtoken when it makes a request to one of these endpoints.
>
> **[0:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=20)** So what we're going to do here is we're going to open up our ArticlePage, and this has functionality for both upvoting and adding a comment.
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=29)** So inside here, we just need to have access to the user that's currently logged in and send that user's authtoken along with whatever requests we make.
>
> **[0:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=39)** So here's what this is going to look like.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=41)** We're going to say import useUser from, and then we're going to say dot dot slash useUser.
>
> **[0:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=49)** And now that we have that, we're going to add that hook to this article page component by saying, const user.
>
> **[0:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=56)** Well here, we'll need isLoading first of all, and then user equals useUser.
>
> **[1:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=63)** So now we have access to whether the user is logged in through this user thing and whether the login process is still loading with this isLoading variable.
>
> **[1:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=73)** So we're going to go down to onUpvoteClicked here, and what we're going to do is we're going to first of all need to get an authtoken from the user.
>
> **[1:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=83)** So what this is going to look like is we're going to say const token equals user, and we want to make sure that the user actually exists there.
>
> **[1:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=92)** So we'll say user and await user.getIdToken.
>
> **[1:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=100)** That's just a function that Firebase Auth provides for us that we can call in order to generate an ID token for the user.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=108)** And now that we have that, we're going to specify the headers by saying const headers equals, and then we'll check to make sure if there's actually a token.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=119)** Otherwise we'll want to provide a backup value.
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=121)** So if there is a token, we're going to say authtoken, and then we will add the token as the value for that.
>
> **[2:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=128)** Otherwise, we're going to just have the headers be an empty object there.
>
> **[2:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=135)** Cool, so now all we have to do is add those headers to this request that we're sending.
>
> **[2:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=141)** And the way that we do that with a get request is we have to pass null as the second argument to indicate that we don't want a request body here, and then we're going to pass our headers as part of a JavaScript object like so.
>
> **[2:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=156)** Cool, so that should include the authtoken for the upvote endpoint, but we're going to want to also do this with the comment endpoint and what this is going to look like, we can actually just use pretty much the same two lines.
>
> **[2:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=168)** So I'll copy those and paste them in here.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=171)** There we go.
>
> **[2:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=173)** Now we just need to add the headers after the request body by saying headers in a JavaScript object.
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=180)** And that should be all we need to do in order to make this work when the user is logged in.
>
> **[3:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=185)** Now obviously we want to hide this process as best we can from the users.
>
> **[3:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=190)** So what we're going to want to do is if the user isn't logged in, we're going to make sure that we don't even let them click on the buttons for adding a comment or adding an upvote.
>
> **[3:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=203)** We're going to just hide those parts of the application from them if they're not logged in.
>
> **[3:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=207)** So what this is going to look like is in our article page, we're going to go down to the interface that we have here and we're going to hide the upvote button from the user unless the user is logged in.
>
> **[3:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=218)** So we'll just say user double ampersand button, like that.
>
> **[3:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=223)** That'll only show the button if there's a logged in user.
>
> **[3:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=227)** And for the AddCommentForm, we're going to hide that as well if there's no user, and if the user isn't logged in, we're going to want to display something else.
>
> **[3:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=236)** So we'll just say user, and then we will use a ternary operator there.
>
> **[4:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=240)** And if the user is there, we'll display the AddCommentForm.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=243)** Otherwise we'll just display maybe a paragraph tag that says something like, log in to add a comment.
>
> **[4:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=251)** And that should be all that we need to do there.
>
> **[4:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=253)** So let's actually go back to our server and make a few small changes there.
>
> **[4:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=258)** The first and most important thing that we need to make sure we do in this middleware is if we decide to send back a 400 status code to the user, if they haven't included an authtoken, we need to make sure that this next thing isn't called there.
>
> **[4:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=274)** So you can do this either by putting next inside here, or you could just say return response.sendStatus.
>
> **[4:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=283)** But under no circumstances will you want the route handlers here to be executed because those would still have the possibility of modifying the database.
>
> **[4:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=292)** So we almost introduced a bug into our program.
>
> **[4:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=296)** And another thing here is I noticed that this should be includes instead of include.
>
> **[5:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=304)** So anyway, let's test this thing out.
>
> **[5:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=306)** What we should be able to do now is open up our front end here, and if we're logged in, we'll see the upvote button and the add comment form.
>
> **[5:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=314)** We'll test those out in a minute, but first, let's check that signing out will hide those things from us.
>
> **[5:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=320)** So we're going to click Sign Out, and sure enough, the upvote button disappears, and down here we see that it says, log in to add a comment.
>
> **[5:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=329)** So let's try logging in again.
>
> **[5:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=331)** We're going to log in and say shaun@[gmail.com](https://gmail.com) and then ABC123 for the password.
>
> **[5:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=338)** And we'll log in.
>
> **[5:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=339)** And once again, ignore Google Chrome's warning.
>
> **[5:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=342)** And now let's just take a look at one of these articles here.
>
> **[5:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=345)** And sure enough, we see that the upvote button has come back as well as the add comment form.
>
> **[5:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=350)** So let's try upvoting.
>
> **[5:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=352)** The first thing we'll see is that, sure enough, we're able to add one upvote.
>
> **[5:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=356)** But now if we open up the inspector window and go to the Network tab, we should see that further clicks on this upvote button come back with a 403 status code, not allowing us to upvote that again.
>
> **[6:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=369)** Now, that's another thing that we could add to the upvote button, I suppose, is if the users already upvoted the article, we might want to just say, you've already upvoted the article and disabled the button.
>
> **[6:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=381)** But I'll leave that up to you as an exercise.
>
> **[6:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=383)** And for the comment, let's try and add a comment here.
>
> **[6:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=386)** We're going to say something like, Shaun, and this article is awesome, and we'll click Add Comment, and that should work just like we wanted it to.
>
> **[6:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=398)** Cool.
>
> **[6:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=398)** So anyway, that is the basics of adding user authentication to our full stack app.
>
> **[6:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=404)** We added it to both the front end in terms of allowing the user to log in and create an account, and to the backend where we protected certain endpoints so that only users who were logged in could do those things.
>
> **[6:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/making-requests-with-auth-tokens?u=76281980&t=417)** So anyway, the last thing that we're going to do here is we're going to see how we can release this entire application so that it can be accessed from anywhere.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), const (3), protected (2), pass (2), from, (1)
> **CLI Commands:** make (9)
> **Code Identifiers:** useuser (3), isloading (2), onupvoteclicked (1), getidtoken (1), sendstatus (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** abc123 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 6. Hosting a Full-Stack React Application

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Preparing an app for release
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=0)** - [Instructor] So at this point we have a full stack application with user auth added.
>
> **[0:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=6)** So let's actually build this thing and release it to Google Cloud.
>
> **[0:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=11)** Now, there are a few things that we're going to need to do here in order to prepare our app for release.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=17)** So let's just take a look at what that is.
>
> **[0:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=19)** The first thing we're going to need to do is we're going to need to make our backend, our Express server, actually serve the files for our front end.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=30)** In other words, we're going to kind of take our front end, build it, and then add those files to our server.
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=37)** That might sound a little bit confusing, so let me just show you what this is going to look like.
>
> **[0:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=41)** First of all, let's stop our front end application.
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=45)** We're going to stop our backend application, and we are going to leave Mongo running in the background.
>
> **[0:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=51)** But now if we go into our front end, what you're going to want to do is run npm run build inside of there.
>
> **[0:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=57)** And what that does is it takes our React application's files, which are relatively easy for developers to read, but not really optimized for production, and it builds them into a single bundle consisting of three files, which we can see here.
>
> **[1:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=74)** So let's go into our front end now, and what we're going to want to do is we're going to want to take this dist directory and add it to our backend.
>
> **[1:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=87)** So we can just take this thing and move it to our backend folder.
>
> **[1:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=91)** We're going to say Move, and we're also going to want to add that to gitignore.
>
> **[1:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=94)** There's really no reason to commit that to GitHub.
>
> **[1:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=98)** So what I'm going to do is go into the gitignore file here and add back-end, there we go, slash dist.
>
> **[1:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=107)** So you should see that turn gray there.
>
> **[1:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=110)** And now that we've done that, the next thing that we're going to need to do, as I've said, is make it so that our Express server will actually serve files from this dist directory.
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=121)** So here's what that's going to look like.
>
> **[2:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=122)** We're going to go into src and then server.js.
>
> **[2:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=127)** And now what we're going to do is for any requests that aren't going to an API route, in other words, for any request that doesn't start with slash api, we are going to have to use a regular expression here, which I'll show you how to do in a minute.
>
> **[2:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=141)** We're going to want to simply send back a file from that dist directory.
>
> **[2:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=146)** So here's what this is going to look like.
>
> **[2:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=148)** First of all, what we'll do is we'll say app.get, and then here comes the regular expression.
>
> **[2:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=154)** we're going to say forward slash caret symbol, and then in parentheses we're going to say question mark exclamation point, and then we're going to say backslash, forward slash api.
>
> **[2:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=167)** And then we're going to close the parentheses and say dot plus and then another forward slash, and that is our regular expression.
>
> **[2:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=175)** Again, this basically just means anything that doesn't start with API.
>
> **[3:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=180)** So now that we have that, we're going to add our request handler, which is going to be request and response.
>
> **[3:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=187)** And now in order to send back a static file from that dist directory, here's what that's going to look like.
>
> **[3:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=192)** We're going to say res.sendfile.
>
> **[3:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=195)** And here's where things get a little bit tricky.
>
> **[3:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=199)** Using path.join, or anything from that path module in Node.js, becomes a little bit more difficult when we're using the module type instead of CommonJS.
>
> **[3:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=210)** So what we're going to need to do up at the top here, just bear with me, or you can copy this from the finished state of the code if you want.
>
> **[3:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=218)** We're going to say import, and then we're going to call this fileURLToPath from the url module.
>
> **[3:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=226)** Then we're going to say const double underscore filename equals fileURLToPath.
>
> **[3:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=233)** And then we're going to say import.meta.url.
>
> **[3:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=237)** And finally we're going to say const dirname equals path.dirname.
>
> **[4:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=245)** And then we're going to say double underscore filename.
>
> **[4:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=247)** So now that we have that, we should be able to actually use the directory name.
>
> **[4:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=252)** So down inside our route handler that we just added, we're going to say res.sendFile.
>
> **[4:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=259)** And we're going to say path.join.
>
> **[4:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=263)** And we're going to say double underscore dirname, and then we're going to say dot dot slash build/index.html.
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=273)** And now that we've done that, we're also going to need to add a little bit of middleware here by saying app.use express.static path.join.
>
> **[4:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=284)** And then we're going to say dirname, comma, and then dot dot slash build.
>
> **[4:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=289)** Oh, and I've been using build here, that should be dist, D-I-S-T for distribution.
>
> **[4:56](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=296)** So we'll just say dist for that as well.
>
> **[4:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=299)** And that should be all that we need to do there in order to serve those front end files from the backend.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=305)** Oh, and we also need to import path, I think I forgot to do that up here.
>
> **[5:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=308)** So let's just say import path from path.
>
> **[5:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=313)** And that should be all we need to do for those static files.
>
> **[5:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=316)** So let's give this thing a try.
>
> **[5:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=318)** What we're going to do in this case is just run our backend.
>
> **[5:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=321)** So go into the backend terminal and we're going to say npm run dev.
>
> **[5:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=329)** And what we should be able to see now is if we go to local host 8000, and in Codespaces, we do need to actually open this up through the Ports tab.
>
> **[5:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=340)** So we're going to go to the 8000 port now and we're going to click on Open in Browser.
>
> **[5:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=346)** And if you see this page and you're working with Codespaces, just click Continue.
>
> **[5:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=350)** And sure enough, what we see is that on the server's URL with port 8000, we're seeing the front end.
>
> **[5:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=358)** And if we go to anything else, such as the articles list page or an individual article, we see that everything here works exactly the same even though our front and the backend are now joined together.
>
> **[6:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=372)** And by the way, our front end app isn't even running anymore.
>
> **[6:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=375)** So this is proof that we have all of this on one server, which as you'll see is going to make our release much easier.
>
> **[6:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=383)** So a few more things that we need to do in order to prep our application for release.
>
> **[6:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=388)** One thing is because most platforms like to be able to tell your app what port it should run on, instead of hard coding port 8000, we're going to want to allow that to be an environment variable.
>
> **[6:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=402)** So here's what that's going to look like.
>
> **[6:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=403)** We'll say const PORT equals process.env.PORT.
>
> **[6:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=411)** Or if that's not specified, we will have it be 8000 as a backup value.
>
> **[6:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=417)** So now let's just replace this with PORT, like so.
>
> **[7:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=420)** We're going to replace this message here with the actual port value.
>
> **[7:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=426)** And that's pretty much it for the changes to this server.js file for now.
>
> **[7:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=431)** So let's just make sure it's still working.
>
> **[7:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=433)** It looks like it is.
>
> **[7:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=434)** We'll just go back and hit Refresh to make sure it still works like we want it to and it looks like it does.
>
> **[7:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=440)** So as far as our React app and Express app are concerned, this app is ready for release.
>
> **[7:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=446)** But one other thing we're going to need to make sure of is that our app can still connect to MongoDB even when it's hosted.
>
> **[7:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/preparing-an-app-for-release?u=76281980&t=453)** So we're going to need to consider a hosted solution for MongoDB, which is what we're going to take a look at next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), static (3), module (3), const (3), import, (1)
> **CLI Commands:** make (6), npm (2), mongo (1), node (1)
> **Env Vars:** port (3), api (2), url (1)
> **File Paths:** server.js (2), node.js (1), build/index.html (1), process.env (1)
> **Code Identifiers:** fileurltopath (2), sendfile (1)
> **UI Navigation:** go to (2), click on (1)
> **Ports:** port 8000 (2)
> **Tools:** github (1), terminal (1)

#### Setting up hosting for MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=0)** - [Instructor] All right, so now that we have our front-end and back-end served from the same server, the next thing that we're going to need to do is figure out another alternative for MongoDB, right?
>
> **[0:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=11)** Currently we just have MongoDB running in our Codespaces or locally, and that's not going to work, obviously, when we release our application.
>
> **[0:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=21)** So, what I'm going to recommend you do is use a hosted solution for MongoDB.
>
> **[0:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=28)** And for that, I'm going to be using MongoDB Atlas.
>
> **[0:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=31)** It's a free MongoDB hosting platform provided by MongoDB itself.
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=38)** So what you're going to want to do is create an account on MongoDB Atlas, right, which is cloud.[mongodb.com](https://mongodb.com) currently.
>
> **[0:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=46)** Once you've done that, it should take you to a page that looks like this with all of the organizations that you've created.
>
> **[0:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=52)** Now, you probably haven't created any organizations yet, so what you're going to want to do is click Create New Organization, and you're just going to need to provide things like a name for the organization as well as make sure to select the free tier for the organization.
>
> **[1:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=69)** But over here, you see that I already have one for LinkedIn Learning so I'm going to click on that, and you'll see that I already have one project in here from another course.
>
> **[1:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=78)** But up here in the top right-hand corner, we're going to click on New Project and we're going to name this something like Full-stack React.
>
> **[1:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=87)** And I'm going to leave this tags thing blank and click Next.
>
> **[1:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=92)** And the next thing it's going to do is ask if we want to invite anyone else to this project.
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=97)** You're probably not going to want to do that unless you want to collaborate on this project with someone.
>
> **[1:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=101)** So let's just click Create Project, and that'll spin for a little while, and once it finishes, you should see that you have a new project here.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=111)** So now that we've created a new project, we're going to create a new cluster, which is basically going to be the database that will store our data.
>
> **[2:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=120)** So, you're going to want to make sure that you select the free cluster here, this M0 tier, and then for the name, you can name this whatever you want.
>
> **[2:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=129)** I'm just going to leave it at Cluster0, and I'm going to leave Automate security setup checked there.
>
> **[2:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=135)** We'll leave Preload sample dataset unchecked.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=138)** And as far as the provider, you can choose whichever provider you want.
>
> **[2:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=142)** In this case, there's not really any reason to pick one or the other, so we'll just leave the default selected.
>
> **[2:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=147)** And that should be all that we need, besides, of course, selecting the region that's closest to you geographically, so you might want to check some of these other platforms if they have closer regions to wherever you happen to be.
>
> **[2:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=160)** That does make a difference in performance.
>
> **[2:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=162)** So now, let's click Create Deployment.
>
> **[2:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=166)** And once you've clicked that, that's going to bring up this modal.
>
> **[2:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=170)** And this is going to describe to you how you can connect to that cluster.
>
> **[2:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=175)** It's a pretty helpful series of modals here.
>
> **[2:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=178)** But the first thing you're going to want to do is make sure that you copy this username and password and actually, I'm going to change this here.
>
> **[3:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=185)** We're going to change this to something like node-server, or maybe we'll call it something like full-stack-react-server.
>
> **[3:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=194)** And the password here, you're going to want to make sure that you copy these and put them into an environment file that we'll be using later on.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=202)** So I'm going to copy the password, and now we're going to go back over to our project.
>
> **[3:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=209)** And what I'm going to do is inside this back-end directory, I'm going to create a new file called .env, this is an environment file.
>
> **[3:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=218)** And inside here, I'm going to put two things.
>
> **[3:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=221)** The first is going to be MONGODB_USERNAME, and that's going to be the username string.
>
> **[3:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=226)** I'll come back and copy and paste that in a minute.
>
> **[3:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=229)** But then, we're going to say MONGODB_PASSWORD and I'm going to paste the password that I just copied.
>
> **[3:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=237)** So let's go back and get the username now.
>
> **[3:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=239)** It's rather long.
>
> **[4:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=240)** You might want to do something a little bit shorter there.
>
> **[4:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=243)** And we'll paste this as well next to username.
>
> **[4:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=246)** And you're going to want to make sure to add this to your .gitignore as well so that you don't accidentally commit your password.
>
> **[4:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=252)** So we'll just say back-end/.env, and you should see that get grayed out there, which means it won't be committed.
>
> **[4:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=262)** Cool, so now that we've done that, we're going to click Create Database User.
>
> **[4:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=265)** That's going to add that user to the project.
>
> **[4:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=269)** And then we're going to click Choose a connection method.
>
> **[4:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=273)** Now, the first thing that we're going to want to do is we're going to want to be able to connect to this thing and populate our database with data in the same way that we did in the MongoDB chapter by going to Shell.
>
> **[4:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=285)** And this is going to give us instructions on how to connect, all right?
>
> **[4:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=290)** So, you can copy those for whatever your operating system happens to be.
>
> **[4:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=292)** Currently, Codespaces, the one that I'm on, is running this operating system here, so I'm just going to select that and copy this connection string.
>
> **[5:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=303)** And let's go back now to our IDE.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=305)** And what I'm going to do here is I'm going to open up the shell, I'm going to paste that command.
>
> **[5:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=312)** All right, so that might take a second or two to connect.
>
> **[5:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=315)** And, oops, it looks like we ran into an error.
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=317)** If you're doing this from Codespaces, this is a pretty common error because what MongoDB automatically does here with MongoDB Atlas is it adds your local IP address, whatever IP address you're visiting this site from, to the IP addresses that it will accept connections from.
>
> **[5:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=333)** But if you're using Codespaces, that's going to be a different IP address that's making those requests.
>
> **[5:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=338)** So, what we're going to do here is we're just going to click Done for now.
>
> **[5:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=341)** Make sure you have that connection command copied.
>
> **[5:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=345)** You can always get back to it later on if you need to by clicking this Get connection string button down here.
>
> **[5:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=351)** But what we're going to do is we're going to go into Network Access and for now, we're just going to click ADD IP ADDRESS, and you can add the specific IP address of Codespaces if you want to or of your Google Cloud app.
>
> **[6:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=366)** But for now, just to make things much easier, I'm going to click ALLOW ACCESS FROM ANYWHERE.
>
> **[6:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=371)** And this isn't a recommended setting, so what I'm going to do is I'm going to say this entry is temporary and will be deleted in, we'll just say one week, all right?
>
> **[6:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=381)** So if you plan to come back to this later and actually set it up for a specific IP address, you can do the same thing.
>
> **[6:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=388)** Otherwise you can leave it the way it is.
>
> **[6:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=390)** And we'll click Confirm here.
>
> **[6:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=392)** And you're going to want to wait for this status to go from Pending to Active in order to try connecting again.
>
> **[6:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=400)** And there we go.
>
> **[6:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=401)** So, let's go back and try that command again in our shell.
>
> **[6:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=406)** We'll just start that once more.
>
> **[6:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=409)** And it should now be able to connect and open up the Mongo shell like we wanted it to.
>
> **[6:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=414)** So what we're going to do here is we're going to start off by saying use, and we'll make sure to use the same name that we used in our server file.
>
> **[7:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=424)** So let's just open up server.js here, and we're going to look for the connection string when we connected to MongoDB.
>
> **[7:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=433)** And the client database name that we used is full-stack-react-db, so let's say use full-stack-react-db down here in the terminal.
>
> **[7:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=444)** That's going to use that database, so now we just need to insert some starter data into this database.
>
> **[7:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=451)** So, here's what this is going to look like.
>
> **[7:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=452)** We're going to say db.articles.insertMany and now, we're just going to specify some starting points for our articles.
>
> **[7:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=463)** So we'll just say, here, the first one's going to be name, that's going to be learn-node.
>
> **[7:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=470)** And then what we'll do is we'll add the upvotes, so we'll say upvotes zero, and we'll even start off with an upvoteIds thing here that's just an empty array.
>
> **[7:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=479)** And then we'll say something like comments, and that's just going to be empty here as well.
>
> **[8:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=484)** And then, we'll close that and do a new one.
>
> **[8:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=486)** So let's just say name, and this is going to learn-react here.
>
> **[8:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=491)** And then, we're just going to do the same thing for this, so upvote, zero, upvoteIds, empty array, comments, empty array.
>
> **[8:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=498)** And the last one here is going to be name, this one's just plain old mongodb.
>
> **[8:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=505)** Then we have upvotes, zero, then we have upvoteIds is going to be empty array.
>
> **[8:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=511)** And finally, comments, empty array, and that should be all we need to do, so let's make sure to close off those things there.
>
> **[8:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=517)** And if we hit Enter, sure enough, we should see inserted IDs and there should be three of them from those new articles that we just inserted.
>
> **[8:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=526)** Cool, so the last thing we're going to do here is just close our connection by pressing Control + C twice, and our server should be set up on Mongo Atlas to support our hosted application.
>
> **[8:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/setting-up-hosting-for-mongodb?u=76281980&t=538)** There's a few more things that we need to do, such as modify the URL that we're using to connect to MongoDB, but we'll come back to that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), while, (1), case, (1), from, (1), from. (1)
> **CLI Commands:** make (10), node (2), mongo (2)
> **Env Vars:** mongodb_username (1), mongodb_password (1), ide (1), add (1), address (1)
> **Best Practices:** make sure to (4), recommended (1)
> **Code Identifiers:** upvoteids (3), insertmany (1)
> **UI Navigation:** select the (2), click on (2)
> **Prerequisites:** setup (1), make sure you have (1), set up (1)
> **File Paths:** back-end/.env (1), server.js (1)

#### Defining environment variables
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=0)** - [Instructor] All right, so at this point we've set up hosting for MongoDB, so we're almost ready to release.
>
> **[0:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=7)** The last thing we need to do here is we need to make sure that we specify the correct URL for connecting to MongoDB, depending on the environment.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=17)** Now, we set those environment variables a little while ago inside this .env file, and we're actually going to move those over to another file in this video.
>
> **[0:27](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=27)** We'll see how to do that shortly.
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=29)** But first, what we're going to do is we're going to change this URI, depending on whether or not there is an environment variable here called MONGODB, and then we'll say USERNAME, all right?
>
> **[0:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=43)** If there's not, then what we're going to do is we're just going to use the localhost version.
>
> **[0:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=49)** We'll assume that we're supposed to be trying to connect to a local instance of MongoDB.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=54)** Otherwise, we're going to use a very similar connection string to what we just used in the terminal to connect through the shell.
>
> **[1:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=62)** And in order to make sure that we get this right, let's actually go back to MongoDB Atlas.
>
> **[1:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=67)** And what you're going to want to do is go to Database here, and you should be able to find the connection string by clicking Connect.
>
> **[1:15](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=75)** And this will bring back that modal that we saw earlier.
>
> **[1:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=78)** So, let's click on Drivers.
>
> **[1:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=80)** We're going to want Node.js, MongoDB, and here we go.
>
> **[1:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=84)** We have this nice URL that it gives us, including the username and password, which we're going to be replacing.
>
> **[1:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=90)** So I'm going to copy this here, and we're going to go back to our IDE now, and I'm going to paste that inside a string.
>
> **[1:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=97)** It's a rather lengthy string here, as you can see.
>
> **[1:40](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=100)** And I'm actually going to change this to back ticks since that'll just make it much easier to insert values into this thing.
>
> **[1:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=108)** So the first thing we're going to want is the username.
>
> **[1:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=111)** We're going to just replace this full-stack-react-server thing with ${process.env.MONGOBD_USERNAME} and then for the password, we're going to replace that with same thing, process.env, but we're going to say MONGODB_PASSWORD, okay?
>
> **[2:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=133)** And finally, you might want to move some of the other things into environment variables, as well, such as the database name here.
>
> **[2:21](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=141)** So if you want to do that, you can, but I'm just going to leave that for now.
>
> **[2:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=145)** So now that we have that, we should be able to release our application, and it will automatically take this into account when deciding what URL to use to connect to MongoDB.
>
> **[2:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=156)** So if we run this locally, in other words, we'll have the local connection string.
>
> **[2:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=161)** If we run it in production right on Google Cloud, we're going to use this URL here.
>
> **[2:48](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=168)** Cool.
>
> **[2:49](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=169)** So now that we've done this, the next thing we're going to do is we need to go into our backend and specifically into package.json on the backend and add a start script.
>
> **[3:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=181)** This is just the default for most hosting platforms.
>
> **[3:04](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=184)** They want to know what command they need to run in order to start our app.
>
> **[3:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=189)** So in our case, it's going to be pretty easy.
>
> **[3:11](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=191)** We're just going to say node src/server.js, and note that we don't want to use this npx nodemon thing because that's just a development tool for restarting our server.
>
> **[3:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=202)** In production, we just want to use node src/server.js.
>
> **[3:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=206)** Next thing we're going to do is inside our backend directory, we're going to create a new file, and we're going to call this file app.yaml, Y-A-M-L.
>
> **[3:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=218)** Now, what this file allows us to do, this file means something special to Google Cloud.
>
> **[3:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=224)** It's actually going to tell Google Cloud things like what environment our app is meant to be run inside of.
>
> **[3:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=230)** So here's what we're going to do for this.
>
> **[3:52](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=232)** We're going to specify the runtime we want by just saying runtime: nodejs, and we're going to do nodejs20.
>
> **[4:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=242)** You're going to want to check and see what version of Node.js you're running here, but that's the one that I've been using.
>
> **[4:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=247)** You might have been running a later one such as Node.js 22 or beyond, but I'm just going to select nodejs20.
>
> **[4:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=254)** And the next thing we're going to need is to specify our environment variables.
>
> **[4:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=260)** So let's just create a new file here, and this is going to be called prod-env.yaml.
>
> **[4:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=268)** And inside here, what this is going to look like is we're going to add our Mongo username and Mongo password environment variables by saying env_variables: and then we're going to have MONGODB_USERNAME= and we'll come back and add that in a minute.
>
> **[4:47](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=287)** And then MONGODB_PASSWORD=, and now let's go over to our .env file and get those.
>
> **[4:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=294)** We'll just copy this username here and paste it, and then we'll copy this password and paste it.
>
> **[5:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=301)** And you're going to want to add this one, as well, to the .gitignore file, so let's just do that real quick.
>
> **[5:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=306)** We'll say back-end/prod-env.yaml just to make sure that you don't publish that sensitive information to GitHub.
>
> **[5:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=316)** And now, if we close prod-env.yaml and package.json, the last thing we need to do is actually tell app.yaml to include those environment variables by saying includes and then we're going to say prod-env.yaml.
>
> **[5:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/defining-environment-variables?u=76281980&t=337)** Oh, and one last thing we need to do, I actually realized that I made a mistake with this, is this should be not process.env.MONGODB_USERNAME or you could just reverse these two cases, but you're definitely going to want to make sure that you're not trying to connect to localhost once you deploy and have this username in your environment.

> [!info]- Semantic Content
>
> **File Paths:** node.js (3), process.env (3), prod-env.yaml (3), package.json (2), src/server.js (2)
> **CLI Commands:** make (5), node (5), mongo (2), find (1), npx (1)
> **Env Vars:** url (4), mongodb_password (2), mongodb_username (2), uri (1), mongodb (1)
> **Code Keywords:** let (5), this, (2), this . (1), finally, (1), case, (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (1), github (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** such as (2)

#### Deploying a full-stack application
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=0)** - [Instructor] Okay, well, at last, we should be able to release our application.
>
> **[0:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=5)** But one last thing you're going to need to do in order to make this work, is you're going to need to install the gcloud CLI.
>
> **[0:13](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=13)** So, you can find this usually just by searching for install the gcloud CLI.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=17)** That should take you right to this page.
>
> **[0:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=20)** On this page, you're just going to want to walk through these steps for installing it depending on your operating system.
>
> **[0:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=25)** So, as you can see, you can select the operating system that you're working on right now.
>
> **[0:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=29)** If you're working in Codespaces, that's usually going to be some sort of distribution of Ubuntu, so, feel free to use that.
>
> **[0:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=37)** But if you're on a Mac or Windows, you're going to obviously select a different tab.
>
> **[0:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=42)** Now, once you've installed the gcloud CLI, what you should be able to do, just to verify that everything is working, is you should be able to run the command gcloud --version.
>
> **[0:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=54)** And that should print out something that looks a little bit like what you see here.
>
> **[0:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=58)** Now, you may have a different version than what I have and that's just fine.
>
> **[1:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=63)** In general, these commands should work in the same way.
>
> **[1:06](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=66)** All right, so, now that that's working, one last thing that I wanted to show you here, is that when we created a Firebase project, behind the scenes, we also actually created a project on Google Cloud.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=79)** So, if you go to [console.cloud](https://console.cloud).[google.com](https://google.com), you should be able to find that project that we just created in Firebase in this drop-down here, right?
>
> **[1:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=90)** If you select that, you should be able to search by project name and find this one here.
>
> **[1:36](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=96)** All right, so, you're just going to want to select that one.
>
> **[1:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=99)** We'll be coming back to this later in case you want to shut down your application.
>
> **[1:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=104)** Let's go back to our IDE.
>
> **[1:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=106)** And what we're going to do here, is we're going to run gcloud auth login, right?
>
> **[1:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=110)** So, this will allow us to actually log into Google Cloud in our console here by opening up the browser.
>
> **[1:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=119)** So, I'm just going to take care of that here.
>
> **[2:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=121)** All right and what you're going to want to do is follow this link and open that up in another browser.
>
> **[2:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=127)** And you're just going to want to select the account that you want to log in with, which should be the same account that you created your Firebase project with.
>
> **[2:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=136)** And let's just click continue here.
>
> **[2:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=138)** Then, we're going to click allow.
>
> **[2:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=139)** And what we need to do next, is we need to copy this verification code that we had.
>
> **[2:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=146)** And let's go back now to our IDE and we're going to paste that and hit Enter.
>
> **[2:31](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=151)** And sure enough, it has logged us in.
>
> **[2:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=154)** All right, so now, that we've done that, we should be able to copy this command here, gcloud config set project.
>
> **[2:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=161)** And I'm going to copy that and paste it.
>
> **[2:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=163)** And then, we're going to need our project ID, which you should be able to find right here in the gcloud console.
>
> **[2:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=171)** We're going to copy that to the clipboard and paste it there and hit Enter.
>
> **[2:54](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=174)** And it should change to that project.
>
> **[2:58](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=178)** So now, that we've done that, we should be able to give this release a try.
>
> **[3:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=183)** So, here it goes, we're going to say gcloud app deploy and we're going to hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=189)** And oops, it looks like I made a mistake there.
>
> **[3:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=192)** So, we just need to go back to our prod-end.yaml file.
>
> **[3:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=197)** And I typed this in wrong.
>
> **[3:18](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=198)** We need to actually say colon after both of those and that should be all we need to do.
>
> **[3:23](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=203)** So, let's save that file and try this again.
>
> **[3:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=206)** We're just going to try running that same command again now.
>
> **[3:29](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=209)** So, we'll say gcloud app deploy and there we go.
>
> **[3:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=213)** So, the next thing that it's going to ask you, is what region you want to release this to.
>
> **[3:37](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=217)** I'm going to select number 18 here, which is us-east1.
>
> **[3:41](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=221)** But your choice might be different than mine and I'm going to hit Enter.
>
> **[3:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=225)** And what it might do now, as it just did for me, is say permission denied.
>
> **[3:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=230)** And this is because we need to actually add a billing account for the project.
>
> **[3:55](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=235)** Yes, unfortunately, Google Cloud does make you specify a billing account before it allows you to release things like this.
>
> **[4:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=242)** So, I'm just going to head over there and open up this billing tab.
>
> **[4:07](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=247)** And then, you're going to click link a billing account.
>
> **[4:10](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=250)** Then, if you get this pop-up that says, "No active billing accounts," you're going to click manage billing accounts.
>
> **[4:16](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=256)** And then, you're just going to have to create an account, which will require you to enter in a bunch of information here.
>
> **[4:22](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=262)** We'll click continue.
>
> **[4:25](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=265)** And then, you may need to put in some credit card information here unfortunately and click submit and enable billing.
>
> **[4:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=272)** And that should be pretty much all you need to do.
>
> **[4:34](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=274)** So now, that we've added billing to our application here, we should be able to go back to our application and try this again.
>
> **[4:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=282)** We're going to say gcloud app deploy.
>
> **[4:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=286)** And if all goes well, what this is going to do, here, it'll ask do we want to continue, what this is going to do, is it's going to upload all of the files from your project and try and run the application in Google Cloud.
>
> **[4:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=299)** Now, you might notice that mine says uploading zero files here.
>
> **[5:02](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=302)** Yours will probably say an actual number there.
>
> **[5:05](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=305)** The reason this says zero, is because it didn't work the first time for me, so, I had to troubleshoot it and try it again.
>
> **[5:12](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=312)** I just had something wrong with my setup here.
>
> **[5:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=314)** But that probably won't be a problem for you.
>
> **[5:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=317)** So, anyway, this is going to take a little while.
>
> **[5:20](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=320)** It does take a few minutes the first time you run this in order to actually deploy everything to the service and run it.
>
> **[5:28](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=328)** And once it finishes, you should see the URL for your application right here.
>
> **[5:33](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=333)** And if you open that up in a new tab, what you should see is your application deployed on Google Cloud.
>
> **[5:42](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=342)** Now, this URL, of course, is not necessarily something that you would want to be user-facing.
>
> **[5:46](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=346)** All you would need to do in this case, is set up a domain name to point to this URL.
>
> **[5:51](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=351)** So, anyway, let's just check this thing.
>
> **[5:53](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=353)** Sure enough, we see articles, we can take a look at all of those articles.
>
> **[5:57](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=357)** And if we sign in here, which you should be able to do with the same accounts that we were doing locally, there's nothing we need to change for Firebase off there, we should be able to log in here.
>
> **[6:08](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=368)** And ignoring, once again, those warnings, we should be able now to upvote these articles like so, as well as add comments.
>
> **[6:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=377)** So, anyway, congratulations on building and deploying this full-stack React application with me.
>
> **[6:24](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/deploying-a-full-stack-application?u=76281980&t=384)** The last thing that we're going to do in the next video, is see how we can shut this down to avoid any extra costs.

> [!info]- Semantic Content
>
> **CLI Commands:** gcloud (10), find (4), make (2)
> **Code Keywords:** let (5), continue (3), try. (1), this. (1), require (1)
> **Env Vars:** cli (3), url (3), ide (2)
> **Cross-References:** go back to (3), in the next (1)
> **Prerequisites:** install (2), setup (1), set up (1)
> **UI Navigation:** select the (2), go to (1)
> **URLs:** [console.cloud](https://console.cloud) (1), [google.com](https://google.com) (1)
> **File Paths:** prod-end.yaml (1)

#### Shutting down a Google Cloud project
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980&t=0)** - [Instructor] All right, so now that we've released a full stack React application on Google Cloud, the last thing that I wanted to show you here in order to avoid extra costs that you have to pay to Google Cloud for running your project is I'm going to show you how to shut down a project on Google Cloud.
>
> **[0:17](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980&t=17)** Really the most effective and straightforward way of doing this is to go to your project dashboard here, and then what you're going to do is go to Billing account management and select the billing account that you just created.
>
> **[0:32](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980&t=32)** And then for Actions, what we're going to do is we're going to say Disable billing.
>
> **[0:38](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980&t=38)** And we're going to say Disable billing, and that will shut down our project.
>
> **[0:43](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980&t=43)** Okay?
>
> **[0:45](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/shutting-down-a-google-cloud-project?u=76281980&t=45)** So anyway, that is how to shut down a Google Cloud project simply by disabling the billing that will stop your full stack app from running.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), select the (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps in your React journey
> [LinkedIn Learning](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=0)** - Well, congratulations.
>
> **[0:01](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=1)** You've reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=3)** We have covered a lot of ground in this course, and the first thing I want to do is thank you for joining me on this journey.
>
> **[0:09](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=9)** By now, you've gained some incredibly valuable skills in full-stack React development, including building front ends with React, building backends with no js and Express, and of course, adding database functionality with MongoDB as well as hosting this whole thing on the cloud.
>
> **[0:26](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=26)** So, now, that the course is over, you're probably wondering where to go next.
>
> **[0:30](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=30)** Well, what I would recommend is that you take this opportunity while everything is still fresh in your mind to solidify your knowledge by building your own full stack projects.
>
> **[0:39](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=39)** If there's some full stack project you've been dreaming of building, get started on it right now.
>
> **[0:44](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=44)** And also, if you have any questions or want to share your progress, feel free to post in the course's Q&A section.
>
> **[0:50](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=50)** And you can also connect with me on LinkedIn or follow me on X, formerly Twitter, where I regularly post software development related tips and tutorials.
>
> **[0:59](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=59)** And finally, if you're looking for other courses, I'd highly recommend checking out some of my other courses in the LinkedIn Learning Library, including courses on working in the React ecosystem, software architecture, and design patterns with React and so much more.
>
> **[1:14](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=74)** So, keep coding, keep learning, and I can't wait to see what you build with React.
>
> **[1:19](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-24928483/next-steps-in-your-react-journey?u=76281980&t=79)** Best of luck in your projects and I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - well (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/react-creating-and-hosting-a-full-stack-site-5948186/codespaces)

## Skills Covered

- Web Development
- Full-Stack Development
- React.js

## Path Context

### In [[Explore React.js Development]]
← [[React.js- Building an Interface]] | **3 of 8** | [[React Hooks]] →

## Appears In

- [[Explore React.js Development]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — React.js, Full-Stack Development
- [[Building Full-Stack Apps with React and Spring]] — React.js, Full-Stack Development
- [[Building Modern Projects with React]] — Web Development, React.js
- [[React Essential Training]] — Web Development, React.js
- [[End-to-End JavaScript Testing with Cypress.io]] — Web Development

---

[↑ Back to top](#)