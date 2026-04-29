---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: vue-js-creating-and-hosting-a-full-stack-site-21646902
url: "https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902"
duration_minutes: 271
duration: 4h 31m
level: Intermediate
updated: 3/7/2023
learners: 400716
skills:
  - Vue.js
  - Full-Stack Development
exercise_files: true
github: "https://github.com/LinkedInLearning/vuejs-creating-and-hosting-a-full-stack-site-4359014/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEY1EY7FIhYaA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678465685731?e=2147483647&amp;v=beta&amp;t=DP77FbMuyQDvHdf6nets4fN6RWiOTAP25LQ02f6Dc9k"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Vue.js]]'
prev_courses:
  - '[[Vue.js- Testing and Debugging]]'
path_nav: '[{"path":"Explore Web Development with Vue.js","position":3,"total":3,"prev":"Vue.js- Testing and Debugging","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/vue-js
  - skill/full-stack-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Vue.js-%20Creating%20and%20Hosting%20a%20Full-Stack%20Site.md)

![Vue.js: Creating and Hosting a Full-Stack Site](https://media.licdn.com/dms/image/v2/C560DAQEY1EY7FIhYaA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678465685731?e=2147483647&amp;v=beta&amp;t=DP77FbMuyQDvHdf6nets4fN6RWiOTAP25LQ02f6Dc9k)

# Vue.js: Creating and Hosting a Full-Stack Site

> Do you have Vue.js front-end capabilities, but lack familiarity with the server side? Would you like to develop the skills needed to build full-stack applications? In this course, instructor Shaun Wassell helps you enhance your development tool kit by showing how to leverage your existing Vue.js skills to build a full-stack ecommerce site. Shaun guides you through the process, showing how to use V

> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902) | 4h 31m | Intermediate | 401K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (5 videos)
- **[[#2. 1. Creating a Vue.js Front End]]** (15 videos)
- **[[#3. 2. Creating a Node Back End]]** (8 videos)
- **[[#4. 3. Adding MongoDB to Your Back-end]]** (8 videos)
- **[[#5. 4. Connecting the Front- and Back-end]]** (7 videos)
- **[[#6. 5. Adding Authentication with Firebase Authentication]]** (7 videos)
- **[[#7. 6. Hosting Your Site]]** (3 videos)
- **[[#8. Conclusion]]** (1 videos)

### 1. Introduction

#### Vue.js
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980&t=0)** .- Picture yourself in a full-stack interview, and instead of showing up empty-handed, you showed up with plenty of experience.
>
> **[0:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980&t=7)** And not only that, but you have a working full-stack site that your interviewer can visit now.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980&t=13)** That is going to make a great first impression.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980&t=16)** Hi, I'm Shaun Wassell, a senior full-stack developer with a passion for education.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980&t=21)** If you've ever wondered about the easiest way to get into full-stack development, I invite you to join me in this LinkedIn learning course, where you'll learn the ins and outs of full-stack development, and in the process, you'll create and then deploy a full-stack view powered e-commerce website from scratch.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-js?u=76281980&t=38)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Analogies:** picture (1)

#### Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=0)** - [Instructor] For this course, we're going to be using Codespaces to build our full stack application, and I definitely recommend that you follow along in Codespaces as well.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=8)** Now, in order to open up Codespaces for this project, there are two ways to get there.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=12)** The first way is simply to navigate to the GitHub repo for this course and add /codespaces at the end of the URL.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=20)** And that'll take you to this screen.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=22)** And the other way to get to this screen is just by clicking on the link for GitHub Codespaces below.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=29)** But anyway, once you're there, you're just going to click on this green button that says Create Codespace on Main, and that will open up an editor for you.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=37)** And that takes a minute or two, so just wait for that to come up.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=40)** And once the editor finishes loading, you should see all of the files for the project over here on the left hand side.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=46)** Now if you want to navigate to the specific state that our app is in at any given point in the course, you can simply check out the corresponding branch with the chapter number and the video number.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=57)** So for example, if we wanted to check out the exact code state at the beginning of, let's say chapter four, video two, we could simply run the command git checkout 04_02.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=72)** And then, in order to check out the beginning, we would say _B.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=76)** Now if you want to check out the code at the end of a given video, you can always just add _E for end instead.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=85)** But anyway, once you've navigated to that branch, another thing that you're going to need to do is install the corresponding NPM packages into both the frontend and backend directories.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=96)** And the way you do that is simply by saying cd front-end.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=100)** That'll take you to the frontend folder where you can run npm install, which will install all of the corresponding NPM packages into the frontend.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=110)** And once that's done, you're going to do the same thing for the backend by changing directories back into the surrounding directory with cd .., and then you're going to change into the backend directory and run the same command, npm install, which will install all of the backend NPM packages for you.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=130)** And that should be all you need to do.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/codespaces?u=76281980&t=131)** So now that you know how to work with Codespaces, you can follow along with me as we write this full-stack app.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (5), cd (2), git (1)
> **Prerequisites:** install (5)
> **Env Vars:** npm (3), url (1)
> **Tools:** github (2)
> **Code Keywords:** let (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=0)** - [Narrator] In order to get the most out of this course, there are a few things that it would be helpful for you to know already.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=6)** First of all, it would definitely be very helpful for you to have a basic knowledge of JavaScript and ideally a knowledge of how front-end frameworks work as well.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=15)** Now, if you haven't already worked with these a little, I'd recommend you take a look at one of the JavaScript basics courses in the library first and then come back to this one since we won't be covering any of the very basics of JavaScript in this course.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=28)** Now, it would also be helpful for you to have some experience with basic command line operations.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=34)** All we're really going to be using in this course is basic commands like Make Directory to make directories, CD to change directories, and LS to see the contents of a directory, as well as a few commands specific to no-js and view.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=47)** And that's really all you need to know going into this course.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-you-should-know?u=76281980&t=50)** So if you're already familiar with those things, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cd (1), ls (1)
> **Code Keywords:** let (1)
> **Tools:** command line (1)
> **Speakers:** - [narrator] (1)

#### Installing Node.js and NPM
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=0)** - [Instructor] All right, so as we've seen, I'm going to be using Codespaces to write all of the code for this course.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=4)** And I highly recommend you do the same thing.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=6)** But if you want to develop on your computer, you're going to want to make sure that you have an up-to-date version of Node.js and npm installed.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=14)** Now, you can tell if you don't have them installed if you open up a terminal and run the command node, and you see something that looks like this, where it says "Command not found: node."
>
> **[0:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=24)** And the same thing for npm.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=26)** If you see that it says "Command Not Found: npm."
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=30)** Now, in this case, all you need to do is install Node.js and that will install both of those commands automatically for you.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=37)** So you're just going to want to navigate to Node.js's website and download the LTS version, whatever version that happens to be for you.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=45)** And once you open that up and install it, you should be able to run those commands.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=54)** And sure enough, you'll see that instead of "Command not found: node," you'll see something like, "Welcome to Node.js version blah, blah, blah."
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=61)** Now, if you want to see what exact version of Node.js and npm you have, you can run the command "node -v."
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=68)** That will show you the current version of Node.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=71)** And if you want to see the current version of npm, you can run "npm -v," and that will show you the current version of npm.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/installing-node-js-and-npm?u=76281980&t=77)** So again, if you want to follow along with this course on your local computer, instead of in Codespaces, just make sure that you have these two installed.

> [!info]- Semantic Content
>
> **CLI Commands:** node (10), npm (7), make (2)
> **File Paths:** node.js (5)
> **Prerequisites:** install (3)
> **Code Keywords:** this, (1), case, (1)
> **Env Vars:** lts (1)
> **Tools:** terminal (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### What to expect from this course
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=0)** - [Narrator] As I mentioned earlier, in this course, we're going to be using a number of different technologies to build and host a full stack web application.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=8)** Now, the application that we're going to be building here is an e-commerce site and just for the sake of example, I've chosen to go with building a site called Two Trees Olive Oil, an e-commerce application that sells, as you can see, different olive oils.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=22)** And the exciting part here is that the site we're building is going to include things for listing products, viewing individual products, and also, viewing the users shopping cart and since those piece of functionality are common across pretty much any e-commerce site, you'll be able to use the site that we're building here to create any other type of e-commerce site that you want.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=44)** Now, the front end of this site, which is what you're looking at here will be built using View, which is a very popular and easy to use front end framework and the front end site is served by a back end written for a node JS environment.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=57)** For this, we're going to be using a very popular server framework called Express and we're also going to be storing all of the data for this application in a MongoDB.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=68)** Finally, at the end of the course, we'll be hosting our entire full stack application on a hosting platform so that it can be accessed from anywhere.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=76)** Well, that's about it.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/what-to-expect-from-this-course?u=76281980&t=77)** Let's get started building this thing.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1), let (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** node (1)
> **Speakers:** - [narrator] (1)


### 2. 1. Creating a Vue.js Front End

#### Why Vue?
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=0)** - Okay, so we're going to be building the front-end of our e-commerce site using Vue, but before we get started you may be wondering why we choose to use Vue in the first place.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=11)** So to get a little bit more specific with this question, the first question is why we'd want to use a front-end library at all, instead of just creating our site using basic HTML, CSS and JavaScript, or instead of using some other low-code solutions such as WordPress or Wix?
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=29)** Well, compared to Hand coding a site, full featured front-end libraries such as Vue have a lot of advantages.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=35)** The main advantage, though, is that they make the task of creating a performant website much simpler and faster without taking away any of the fine grained control from the programmer.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=47)** They allow us to create modular, reusable components that can then be rearranged into a fully functional website, instead of having to hand code each individual page in our site one by one.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=58)** So to give you an example of this, imagine that we want to create a simple blog site with let's say 100 articles, each with pretty much the same structure.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=68)** Well, what if we then wanted to add a signup form, or something like that, to all of our pages?
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=75)** Well, if our site was just a collection of HTML documents, we'd have to actually make this same change to 100 separate files, and that's definitely not a pleasant task by any stretch of the imagination.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=88)** However, with front-end libraries such as Vue, all of our pages would be based on a single reusable page component, so we'd only have to make this change once to see it across all of our pages automatically.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=102)** Okay, so that's why we might use a library like Vue instead of just hand coding our site using HTML, CSS, and possibly JavaScript.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=111)** The next question is why we'd use a front-end library like Vue over low or no code platforms such as WordPress or Wix, or Squarespace, like you see here.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=122)** Well, first of all, since this course is aimed primarily at developers, if you want to create a full-Stack website and aren't already a fairly strong developer, I actually would recommend that you use one of these platforms instead of Vue, right?
>
> **[2:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=135)** Honestly, it'll probably end up being much more difficult for you in the long run if you try and create a code-based site with Vue if you still struggle with basic coding concepts.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=145)** All right, now another question, and this is probably the most common question I get asked, is why you would choose Vue over some of the other front-end libraries like React or Angular.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=155)** Now, this may come as a bit of a shock to those of you who are looking to learn "the best front-end library", but in my opinion there is no single best front-end library, and here's why.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=170)** Like most other pointless debates inside and outside the programming world, finding the "best front-end library" is extremely subjective, so one developer may say that Vue is hands down the best front-end library, another developer may say, "No, React is the best front-end library."
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=188)** And a third developer might say that Angular or Svelte, or Ember, or any of the many other front-end libraries is the best one out there.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=198)** And what they actually mean, in most of these cases, is that they've found the best library for their own needs, or, more commonly, their favorite front-end library is the only one that they've ever worked with, and therefore they think it's the greatest.
>
> **[3:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=213)** That's a pretty common thing to happen in the front-end development world.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=217)** All right, so all that being said, a better question might be something like, what is Vue's unique value proposition compared to some of the other libraries out there?
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=227)** In other words, what advantage does it provide over libraries like Angular and React?
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=231)** Well, Vue's main advantage is that it's designed to be added incrementally to existing sites.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=238)** And, in fact, it even says this on Vue's website, it's nicknamed itself "The Progressive JavaScript Framework," meaning that if you already have a website written using HTML and CSS, it's pretty easy to add Vue into that, whereas with React and Angular it might be a little bit more difficult.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-vue?u=76281980&t=255)** So, anyway, with all of that knowledge here, let's move on and see how we can quickly set up a Vue powered front-end for our web application.

> [!info]- Semantic Content
>
> **Env Vars:** html (4), css (3)
> **Analogies:** such as (4), imagine (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (2), this, (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - okay (1)

#### Setting up and running a Vue project
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=0)** - [Instructor] Now that we're a little more familiar with the Vue Library and some of the benefits it provides us with, let's get started creating the view front-end for our full stack project.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=10)** All right, now the first thing we'll need to do here is install something called the Vue CLI.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=15)** And what you're going to want to do there is open up a terminal, and you can do that by pressing Control J or Command J, depending on your operating system.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=24)** And inside that terminal, what we're going to want to do is globally install the Vue CLI package by saying npm install dash g and then the package name is @vue/cli.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=38)** Now if you hit Enter, that's going to install that globally for us.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=41)** And what this is going to allow us to do is create new Vue projects just by running a simple command.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=48)** So let's wait for this to finish.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=51)** And once it's done, what we're going to do is create a new Vue project.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=56)** This is where all of our front end code is going to be, by simply running Vue.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=60)** Create, and then the name of our project.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=63)** And since we're going to have both the front-end and back-end here, we'll call this front-end project front dash end.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=70)** So if we hit Enter, that's going to bring us through a series of prompts asking us what features of Vue we want.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=75)** The first question here is which version of Vue we want to use.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=78)** We're going to select Vue three here.
>
> **[1:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=80)** And then it's going to ask us which package manager we want to use.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=83)** And I'm going to select NPM here, but Yarn is perfectly fine to use as well if you want to use that instead.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=89)** So I'm going to use NPM and hit Enter.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=92)** And that will generate a new Vue project for us.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=95)** So this is going to take a minute or two but once it finishes, we should see that we now have this front-end folder over here in our file tree.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=105)** And if you open that up, you can see that it has a lot of files in here, as well as some other directories.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=110)** And we'll be discussing the actual structure of this and what all these files are very shortly.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=116)** But for now, just know that that is our front-end project.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=119)** So, the first thing that we're going to want to do now that we have this new project is run it, just to make sure everything is working on our end.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=126)** And the way that we're going to do that is we're going to start off by changing directories into that new front-end directory.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=134)** And you can do that in your terminal by typing CD front dash end.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=138)** That'll bring us into the front-end folder here.
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=141)** And you can see all the contents of this folder just by typing ls by the way.
>
> **[2:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=144)** And you can see everything that we see inside of here, printed out in our console.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=149)** And in order to run a Vue project, what we're going to want to do is reuse the command npm run serve and hit Enter.
>
> **[2:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=158)** And what that's going to do is it's going to build our project, and it's going to serve it on a development server so that we can see it in a browser.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=168)** All right?
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=169)** Now what you'll see printed out here is that it says that our app is running on http local host 80 80.
>
> **[2:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=174)** However, this is only if you are running it locally on your own computer.
>
> **[2:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=178)** If you're using Code Spaces, what you're going to need to do is go to the Ports tab, right?
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=184)** This basically maps all of the ports that are running in Code Spaces to an actual URL you can visit.
>
> **[3:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=190)** And you're going to want to take a look at this local address property of Port 80 80.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=194)** And if you go over to this little world icon next to that and click on it, what that's going to do is it's going to open that up in a browser.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=202)** And sure enough, we see the Vue app we just created running in our browser.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=206)** And here, let me just take that out of full screen so you can see this is in fact running in our browser.
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=211)** And now if we go back to our project what we should be able to do is make changes to our code.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=220)** And you can do this just by going to front-end.
>
> **[3:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=222)** And if we go to say the source folder and open up app dot vue, we'll talk in more detail about what all of these are by the way, shortly.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=230)** What you should be able to do is make a few changes, right?
>
> **[3:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=233)** So for example we have this Image alt Vue logo thing, that is the logo that we were seeing on our site.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=238)** What we can actually do is just delete everything inside these template tags and replace them with whatever we want.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=245)** I'm just going to use an h1 heading and we'll say something like, hello from Vue!
>
> **[4:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=253)** And if we close out the tag, you'll notice that this actually doesn't work, right?
>
> **[4:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=258)** If you save this and try and reload the page chances are you'll see an error and you will see an error in the console here as well.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=266)** And that's just because there are two more changes that we need to make in order for this to work.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-and-running-a-vue-project?u=76281980&t=271)** And we'll take a look at that next.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), make (4), yarn (1), cd (1), ls (1)
> **Env Vars:** cli (2), npm (2), url (1)
> **Code Keywords:** let (3), delete (1)
> **Prerequisites:** install (4)
> **Tools:** terminal (3)
> **UI Navigation:** go to (2), click on (1)
> **Ports:** port 80 (1)
> **Cross-References:** go back to (1)

#### Vue project structure
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=0)** - [Instructor] Okay, so we've got our Vue project set up now.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=3)** But before we get started building our app, I wanted to give you a brief walkthrough of all the files that the Vue CLI created for us, right?
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=12)** We created this new frontend folder with a bunch of stuff in it.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=15)** So this'll hopefully help orient you a little bit in navigating the project.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=20)** But before we do that actually, there are two things I wanted to mention.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=23)** The first thing that you may have noticed is that in our terminal, we're getting this error related to the Hello World component that we removed from our template previously.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=33)** So in order to get rid of that error, what you're going to want to do is remove this import statement from the script tag in our component.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=41)** And you're also going to want to remove Hello World from the component's object.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=45)** And that's just because Vue is very tidy about this sort of thing.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=49)** It doesn't like extra code hanging around, so that's why we were getting the error.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=53)** And you should see now that we've done that and saved our file that the error has gone away, and that should mean that our frontend project over in our other tab here will update automatically now.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=65)** Okay, so that's the first thing.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=66)** The second thing I wanted to mention is that more than likely you're currently missing syntax highlighting for your Vue project, right?
>
> **[1:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=73)** So all of your text is probably just in black and white.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=76)** If you want to, you should be able to open up this extensions tab and search for Vue.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=82)** And there are lots of different Vue extensions that you can install.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=86)** The one that I installed here is the most popular one called Vue Language Features Volar.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=91)** All right, so feel free to install that if you want to, and you may have to refresh this project by clicking the refresh button for that to actually take effect.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=100)** Cool.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=101)** So now that we've added those two things, the next thing that we're going to do is talk about all of the files inside our frontend directory.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=107)** So the first folder that's in here is the public directory, and inside there we have this index.html file.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=116)** Now this index.html file is what the user will be sent directly when they open up our Vue site, right?
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=123)** Similar to what we did by opening up this frontend tab over here.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=128)** And if we take a look at the contents of this index.html file, the Vue app that we end up creating is going to be rendered directly into this div with the ID of app.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=139)** So in other words, when the user receives this empty HTML file, that's going to load our Vue code, right?
>
> **[2:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=146)** The actual JavaScript code we're writing as part of our Vue application, it's going to run that and render our app inside this div.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=155)** And by the way, don't worry too much about the actual mechanics of this.
>
> **[2:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=158)** This is all something that the Vue CLI takes care of behind the scenes for us when we run the app with npm run serve.
>
> **[2:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=166)** So let's see.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=167)** Besides the public and the source directory which we'll talk about in more detail shortly, the rest of the files inside this frontend directory are pretty much just configuration files.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=177)** So you have configuration for Babel, if you want to play around with the JavaScript settings.
>
> **[3:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=183)** We have configuration for Vue itself, and we also have the package.json and package-lock.json files, which just contain extra information about our projects such as what dependencies we've installed.
>
> **[3:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=197)** Cool.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=198)** So now that we've talked about those, let's go into our source directory, because generally as a Vue developer this is where you're going to be spending most of your time.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=206)** Now this contains all of the components for our Vue project, and the components are just sort of the building blocks of our application.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=216)** So we already saw that we have the app component, right, which is called app.vue, and Vue components generally have the dot Vue extension as you'll see, Now the app component is the top-level component in our application.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=230)** So in other words, whatever other components we create, they're going to be rendered either directly or indirectly by this app component.
>
> **[4:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=240)** Now in addition to the app component, you'll also see this main.js file, and this is what's referred to as the entry point for our application.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=249)** So this right here is the code that actually renders our Vue app into that div that we saw earlier in the index.html file.
>
> **[4:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=260)** So those are two very important files, obviously.
>
> **[4:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=262)** We'll be working with them a lot.
>
> **[4:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=265)** But besides those, we have this assets folder which just contains static assets for our project, right?
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=271)** So we see that we have logo.png inside there.
>
> **[4:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=274)** We generally won't need to work too much with those assets, but we will see them at one point in the future.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=281)** And inside this components directory, we'll see that we have this Hello World component.
>
> **[4:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=286)** This is just something that the Vue CLI created for us to show us how Vue components work, right?
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=292)** That's what was being rendered inside our app component beforehand.
>
> **[4:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=296)** So what we're actually going to do is just remove this Hello World component altogether, because we don't need it.
>
> **[5:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=302)** And you can do that just by right-clicking on it and clicking delete permanently.
>
> **[5:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=308)** Okay, so once we've clicked that, we're going to say delete, and that will get rid of that file for us.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=313)** You are going to want to leave the components folder around, because that's where we're going to be adding a lot of other components.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=319)** Cool.
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=320)** So anyway, that's really the main directories we're going to be working with here.
>
> **[5:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/vue-project-structure?u=76281980&t=325)** Any of the other details that you may be wondering about, chances are we're going to see those later on in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (2), delete (2), this. (1), static (1)
> **File Paths:** index.html (4), package.json (1), package-lock.json (1), main.js (1)
> **Env Vars:** cli (3), html (1)
> **Definitions:** in other words (2), is called (1)
> **Prerequisites:** install (2), set up (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)

#### Creating application pages
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=0)** - [Instructor] Now that we're a little bit more familiar with the basic project structure in vue, the next thing that we're going to do is start creating our Full Stack site, right, the front end for our Full Stack site, that is, by creating the pages and adding routing to our vue project.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=17)** All right, so in order to add routing to our project and by the way, routing in vue is basically just the logic that handles displaying different pages on different paths, right?
>
> **[0:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=27)** For different URLs.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=28)** All right?
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=29)** So in order to add routing to a vue project, what we're going to need to do is install a package called Vue Router.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=35)** So let's open up a new terminal here, which you can do by clicking this plus button in Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=42)** And then what you're going to do is you're going to first of all need to switch into the front end directory.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=48)** Make sure you do this.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=49)** Otherwise, you'll be installing this package into the surrounding directory.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=55)** So we're going to say CD front end.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=57)** And once you're inside that front end directory, you're going to say NPM install.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=63)** And then the package we're installing is going to be called vue-router.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=67)** And specifically we're going to be installing version four.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=70)** So say vue-router@4.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=73)** And this just makes sure you're using the same version of Vue Router as I am.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=78)** So your code will work the same way as mine does.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=81)** So let's install that package.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=83)** And once we've done that, we're going to now create all of the pages for our application.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=89)** So our application for the time being, is going to have three main pages.
>
> **[1:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=93)** That's going to be the shopping cart page, the products page, and the product detail page.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=98)** So what we're going to want to do is create a new directory inside this source directory, right?
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=105)** We're going to say new folder, and we're going to call that folder pages.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=108)** Now, you don't have to call it pages.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=110)** The name here isn't really important.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=112)** Really all that we're doing here is giving ourselves a specific directory to keep all of our applications pages inside of.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=119)** So now that we have that pages directory, we're going to create three new files inside there.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=124)** The first one is going to be called ProductsPage.vue.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=129)** That's going to be the page that will display the list of all of the products on our website.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=134)** Then we're going to create the shopping cart page.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=138)** So we'll say ShoppingCartPage.vue.
>
> **[2:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=142)** This is going to be the page that displays all of the items a user currently has in their shopping cart.
>
> **[2:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=148)** And finally, the third page is going to be the product detail page.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=154)** So ProductDetailPage.vue will be the file name.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=157)** And this is going to be the page that will display more details about a specific product as well as allow the user to add that product to their shopping cart.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=168)** So now that we have those three files created, what we're going to want to do is just add some very simple vue code to each of these.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=176)** So what we're going to do is just add a template and a script to each of these components.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=182)** All right, so we're just going to add template and script.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=186)** And all that we're going to do for the time being is add a simple heading inside each of the templates that tells us which page we're currently looking at, right?
>
> **[3:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=195)** This will make it much easier for us to make sure we have the vue routing working correctly.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=201)** So let's add an h1 heading here.
>
> **[3:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=203)** And inside of that we're going to say Products Page.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=208)** All right, so that will let us know that this is the products page we're looking at.
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=211)** And then down here in the script what we're going to need to do is export our component.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=216)** And this has a pretty consistent syntax.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=219)** If you take a look at the app component down here, we'll see that it says export default, and then we need to specify the name of the component as well as any components that this component itself is going to display up in its template.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=233)** So in our app component, that's blank and it's going to be blank for the time being in our products page, shopping cart page and product detail page as well.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=242)** So all we're going to need to do is specify the name.
>
> **[4:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=244)** So here's what that's going to look like for our products page.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=247)** We're going to say export default and then we're going to say name: "Products page" and what I like to do is just put a little comma at the end of this line just to make sure that when we go and add new things to this component, we don't forget that comma and end up with an error, that happens to me all the time.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=266)** So I like to just add that extra comma at the end.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=269)** So now that we've done that for the products page, we're going to want to do something very similar for our other pages.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=275)** So I'm just going to copy all of the code that we've written inside this dot vue file, and paste that inside the shopping cart page, dot vue file as well.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=285)** And then we'll do that same thing in the product detail page.
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=289)** We'll just paste that.
>
> **[4:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=290)** And then of course, we're going to need to change these.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=292)** Instead of products page, we'll want this to say Shopping Cart Page.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=297)** And then we'll change the name of this as well to ShoppingCartPage.
>
> **[5:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=302)** Make sure you save those as well.
>
> **[5:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=304)** And then for the product detail page, we're going to change the heading to say Product Detail Page.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-application-pages?u=76281980&t=313)** And for the name we're going to say ProductDetailPage as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (1), this. (1), finally, (1), default, (1)
> **CLI Commands:** make (5), cd (1), npm (1)
> **Exercise Files:** template (3)
> **Prerequisites:** install (3)
> **Env Vars:** npm (1)
> **Tools:** terminal (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Routing in Vue
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=0)** - [Instructor] All right, so now that we have those three pages the next thing that we're going to want to do is set up our view applications so that each of those pages is displayed on a specific route, right?
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=10)** So when we go to local host 80 80 slash products for example, we'll want to show the products page.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=16)** And if we go to slash cart, we'll want to show the cart page.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=20)** You get the idea.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=21)** So the way that we set this up in view is by opening up the main dot JS file, and we're going to need to import and use that view router package that we installed earlier.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=32)** So what that's going to look like is we're going to say import star as view router from the View Router package.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=41)** So we'll say view dash router.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=44)** And once we've done that, we're going to change this create app dot mount thing, right?
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=49)** So that instead of just saying create app dot mount app in between create app and mount, we're going to say dot use.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=60)** And inside here, what we're going to do is pass a router which will basically contain the configuration for the different routes in our app.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=68)** So what that's going to look like is we're going to say view router dot create router and then this is going to take a few options.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=77)** The first option here is going to be something called history.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=81)** And for that we just need to say view router dot create web history.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=87)** Okay?
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=88)** And as an argument to that we need to pass process dot ENV dot base URL.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=96)** And don't worry too much about what that means just know that we need to do this in order to be able to correctly go back in our application.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=103)** All right.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=104)** And now that we have the history we're going to need to specify the routes for our application.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=108)** And this is where we tell our app which page should be displayed on which URL.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=114)** So this is just going to be an array of JavaScript objects.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=118)** And each of those objects is going to have two properties.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=121)** The first one's going to be a path property that specifies the URL for the page.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=126)** And the second property is a component property that tells view which component we want to display for that path.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=133)** So for our shopping cart page, for example, we'll just start off with that one.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=138)** We're going to say path.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=140)** And for that one we'll say slash cart, which will mean that this page will be displayed on local host 80 80 slash cart or whatever your URL is for code spaces slash cart.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=151)** And for the component, what we're going to do is we're going to import the shopping cart page.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=156)** And depending on your IDE settings, you may or may not just be able to start typing shopping cart page and have it import for you.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=162)** That didn't happen for me.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=163)** So what I'm going to have to do is go up and say import shopping cart page from its file.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=170)** And in order to get the correct path there we can just say dot slash pages slash shopping cart page.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=179)** And we're going to need to add dot view at the end as well.
>
> **[3:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=183)** Cool.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=184)** So just to make this easier, let's actually just copy and paste that line for our other pages.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=188)** So we have our shopping cart page and we'll also want to import our products page that is so products page from pages slash products page dot view.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=199)** And then our product detail page will say import product detail page from pages slash product detail page.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=209)** Okay.
>
> **[3:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=210)** And now that we have our products imported what we're going to do is add routes for those as well.
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=215)** So for our products page, so the path is just going to be slash products, and the component of course is going to be the products page.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=225)** And then for the product detail page it's going to look a little bit different.
>
> **[3:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=228)** This is something that we'll talk about in more detail shortly, but the path here is actually going to be slash products slash.
>
> **[3:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=236)** And then we're going to say colon product id.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=239)** Now this is something called a URL parameter.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=242)** Again, we'll discuss that in more detail later on.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=246)** But the component for this is going to be the product detail page.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=250)** So now that we have all three of those routes set up what we should be able to do is run our application.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=256)** All right?
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=257)** And you should just be able to go back to the terminal from before and see if everything is running correctly by scrolling all the way to the bottom.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=264)** And sure enough, we see that it is.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=266)** And one more thing that we actually have to do before this will work is open up our app dot view component.
>
> **[4:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=272)** And inside here, underneath our H one tag we're going to say router dash view.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=279)** All right, so that's a special tag that tells our view application where we want to display the matching page for a given route.
>
> **[4:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=288)** So now if we save this file and go back to our tab what we're going to see is if we go to this URL slash cart and you may have to hit refresh here.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=297)** Sure enough, you'll see hello from Vue.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=300)** And under that you'll see the shopping cart page.
>
> **[5:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=303)** And the same thing will happen if you go to slash products.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=306)** You'll see that that will bring up the products page.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=309)** And likewise, if you go to slash products slash, and here's that funny URL parameter thing that we haven't talked about yet, you're just going to want to put anything after that.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=319)** So I'm just typing in some random numbers.
>
> **[5:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=321)** And if you hit enter that'll bring up the product detail page.
>
> **[5:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=325)** So at this point, we have all three of our pages created and displayed on a specific route.
>
> **[5:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/routing-in-vue?u=76281980&t=330)** So with that groundwork taken care of we can move on to actually implementing some of these pages.

> [!info]- Semantic Content
>
> **Env Vars:** url (7), env (1), ide (1)
> **UI Navigation:** go to (5)
> **Code Keywords:** pass (2), let (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### Adding data, styles, and images
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=0)** - [Instructor] At this point we have, all of the pages for our application.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=3)** But before we just go into implementing, each individual page there are a few small things, we're going to need to add to our app, that will make our development go more smoothly and ultimately it's going to make it more realistic and fun as well.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=16)** So what we're going to want to do here is add some images, to our application, and this will be the products, that are going to be listed on our site.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=24)** Now, in order to do this, what you're going to want to do is download the images, from the GitHub folder for this project, right?
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=32)** You should see those inside the source assets folder, in that project.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=37)** And what you're going to want to do, once you've downloaded those if you're using Code Spaces, is you're going to want to upload those files to here, by right clicking on assets, going to upload and then the files, I have them inside downloads.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=51)** You're going to need to find them inside the project.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=53)** You're going to want all of these bottle images, right?
>
> **[0:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=56)** These are all of the olive oils, that we're going to be selling on our site.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=59)** And you're also going to want the logo, hexagon.svg and logo wordmark white.svg.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=65)** So I'm going to upload all of these to the assets folder.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=69)** And by the way, if you're just working, with Visual Studio Code, you should be able to easily drag and drop these images in there, or copy and paste them.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=77)** So now that we have those images, we'll be able to use those later on, when we implement our product and product detail pages.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=85)** So the next thing that we're going to do, is copy and paste some data for each of our products.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=90)** Now, you're going to want to copy and paste this, from the GitHub repo as well.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=95)** It's basically just going to be an array of JavaScript data, containing the prices, names and images, for each of our products.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=103)** So what you're going to want to do, is create a new file inside the source directory, and we're going to call this file temp data.js.
>
> **[1:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=113)** This will just be the temporary front end data, that we're going to use for our development, right, while we build out all of our components, on the front end.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=122)** And what you're going to want to do here is copy and paste, all of the code from inside this same file, on the final GitHub repo, right?
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=131)** So just go into the GitHub repo, go to source and temp data and then you're just going to paste it, inside this file here.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=139)** So this is what the data looks like.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=140)** We have a bunch of imports up at the top, and then we have our product data, which is just a simple JavaScript array, full of objects representing each of our products.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=151)** All right and the last thing that we're going to do, is copy and paste some styles, from the GitHub repo so that as we go and build out, all of our components for our application, we'll be able to actually see them styled, instead of just seeing the default HTML styling.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=168)** So what we're going to do here, is create another file inside the source directory and we're going to call this file main.css, right?
>
> **[2:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=178)** So this will just contain all of the styles, for our application and that's not necessarily, what you want to do with your styles, in a View application, right?
>
> **[3:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=185)** Keeping them all in the same file.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=187)** But that's what we're going to be doing here, just to make it easier for you.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=191)** So what you're going to want to do is just copy and paste, all of the files from the main.CSS file on the GitHub repo and I'm doing that right now.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=201)** And once you paste them in this file, it should look something like this, right?
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=205)** So you should have all of those styles, inside that main.CSS file.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=209)** And the last thing that we're going to do, is in order to make those styles, automatically get added to our app, we're going to open up main.js and underneath where we import our app component, we're going to say import, and then we're just going to put the path, to our main.CSS file.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=227)** So we're going to say ./main.CSS and that will automatically apply those styles, to our entire application.
>
> **[3:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-data-styles-and-images?u=76281980&t=236)** Cool, so with our fake data in place and the styles and images added to our project, let's move on to implementing, the first page in our application.

> [!info]- Semantic Content
>
> **File Paths:** main.css (5), data.js (1), main.js (1)
> **Tools:** github (6), visual studio (1)
> **Exercise Files:** github repo (5), download the (1)
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** this, (3), import, (1), let (1)
> **Env Vars:** css (4), html (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Creating a products page
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=0)** - [Instructor] Okay, the first page we're going to implement here is going to be the products page.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=5)** And the main purpose of this page, as I specified before, is going to be to display all of the products that are available on our site.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=13)** So let's open up the products page here.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=16)** And what we're going to need to do is we're going to need to add HTML elements to this page in order to obviously display all of our products.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=25)** So the first thing that we're going to want to do here is remove this H1 products page heading, or rather just remove the text inside of it.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=33)** And we're going to change that so that it just says products, right?
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=37)** We no longer care what page it is.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=39)** We'll be able to see that just by the HTML structure inside of it.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=43)** And now that we've done that we're going to add a div underneath that.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=47)** And this div is going to have the class of grid-wrap.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=52)** That's just for styling purposes, as are most of the classes we're going to add to our components here.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=57)** So we'll add the class grid-wrap.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=59)** And inside here is where we're going to have the list of all of our products.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=64)** Now, in order to display a list in Vue based on a JavaScript array, what we're going to need to do is use something called the v-for directive.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=75)** And what that looks like, I guess I'll just show you here, we just need to add that to an HTML element.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=81)** So if we want each of our products to be surrounded by a div, we would just say div.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=87)** And then as one of the attributes for this div, we're going to add the v-for, directive, which looks like this.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=94)** It's v-for.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=96)** And then as the value for that, we're going to say product in products.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=103)** So basically what this is going to do is for each product inside the products array, which we'll need to add to our export default object down at the bottom here, we're going to repeat this div as well as anything that's inside of it.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=118)** All right, so this allows us to take a simple array of JavaScript data and display some sort of HTML structure for each element it contains.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=127)** So inside this div, now what we're going to do is we're going to display the product image.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=132)** So we'll say image.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=134)** And then what we're going to need to do is add the source attribute, which is going to be the image name property for each product.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=139)** And by the way, before we do this, let's actually add our images to this page.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=145)** So what we're going to need to do is import the temp-data file, right?
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=150)** Import this products array that's exported from the temp-data file, and add that as a property to our products page.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=157)** So what that's going to look like, we're going to say import products from, and then we're going to reference the temp-data file by saying ../temp-data.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=170)** And now that we have the products, we're just going to add a data method to our component.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=175)** This is where we can specify data that our component is able to to access and modify.
>
> **[3:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=181)** And we're going to return an object containing the products array.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=186)** And this will allow us to reference products up here inside our template.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=191)** Cool, so now that we have our products added, we're going to loop through each of those products.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=195)** And as I said, we're going to need to add the image attribute and we're going to need to put a colon in front of that since we're going to be referencing the value of a JavaScript variable instead of specifying a concrete string value here.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=208)** So we're going to say product.imageName.
>
> **[3:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=213)** All right, so that's each of our images, and we can actually just close off the tag with a slash and a greater than sign like so.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=220)** And then under that we're going to add an H3 heading that will contain the product's name, and we'll actually have to give this a class as well for styling purposes, we'll say class equals product-name.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=231)** And inside that we're going to say double curly braces, product.name.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=235)** That's how we insert the value of this name property from the product into this part of the HTML.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=241)** And then for the paragraph tag we're going to have the product's price.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=246)** So we'll say paragraph class equals product-price.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=252)** And then we're going to insert the product price into there with double curly braces and we'll say product.price.
>
> **[4:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=259)** And let me remove that extra little double quote that I added by accident.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=264)** And that should be all we need for our product.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=266)** Now one last thing we're going to do is add a button here that will allow us to go to the product detail page for a given product.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=273)** So what that's going to look like is we'll just say button, and then we'll have that button say View Details.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=281)** Cool, so that's all we need to add for the internals of this product div.
>
> **[4:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=287)** One more thing that we're going to need to do though is add a few more attributes to this div.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=292)** Again, this is going to be mostly for styling purposes but also we're going to need to add a key that will make it easier for Vue to re-render our products whenever they change.
>
> **[5:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=302)** So don't worry about that little detail right now.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=305)** For now, just know that we need to add a class attribute, which is for styling of product-item.
>
> **[5:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=312)** And then underneath this v-for directive, we're going to add a key.
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=317)** And for that we're going to use the product's ID property, right?
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=320)** So we're going to say :key, product.id.
>
> **[5:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=324)** And that is just a unique identifier that Vue uses behind the scenes to keep track of the divs.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=331)** Cool, so that just about completes our products page, but one more thing that we're going to want to do is open up our App.vue file and remove some of the default styles that the Vue CLI gave us from before.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=344)** So we can actually just remove this entire style tag.
>
> **[5:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=348)** And then instead of having this H1 tag inside our template, we're instead going to just add a heading for our site.
>
> **[5:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=355)** And we're going to call our site Two Trees Olive Oil, right?
>
> **[5:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=359)** That's our brand name here.
>
> **[6:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=361)** You can feel free to use whatever brand name you want to use for your own site.
>
> **[6:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=365)** And then around the router view, what we're going to want to do is have a div with the class of page-wrap.
>
> **[6:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=373)** There we go.
>
> **[6:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=375)** And that, again, is just for styling purposes.
>
> **[6:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=377)** And we'll put the router view inside of there.
>
> **[6:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=380)** And one thing to notice is that this allows us to apply this same page wrap styling to all of the pages in our site without us having to add this same div to each of our page components.
>
> **[6:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=393)** Cool, so now that we've done all of that we should be able to take a look at our products page and see if there's any other tweaks we need to make.
>
> **[6:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=400)** So what we're going to want to do is go to the products page by adding just /products after our URL.
>
> **[6:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=408)** And sure enough, we see all of the products displayed on our site.
>
> **[6:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=412)** So anyway, that is how to create a basic products page for our site.
>
> **[6:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-products-page?u=76281980&t=418)** The next thing that we're going to take a look at is how to create a product detail page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for, (1), this. (1), for. (1), this, (1)
> **Env Vars:** html (5), cli (1), url (1)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **Code Identifiers:** imagename (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Creating a product detail page
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=0)** - [Instructor] Now that we have the products page for displaying all of the products on our site, the next page we're going to implement here will be the product detail page.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=9)** So this page is going to be for displaying more in-depth details about a specific product, and it's going to come up whenever the user clicks on this view details button for a specific product.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=21)** Now, instead of having to create a specific page for each product on our site, what we're going to do is use this single ProductDetailPage component.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=32)** And we're just going to insert different data into this page based on which product we want to look at.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=40)** Now, all of this is done by using this URL parameter thing that we added to our product detail page path inside our main.js file.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=50)** So if you've ever found yourself wanting to be able to use a single component to display multiple pages, right?
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=58)** So if you have a blog site, let's say, and you want to use a single article component to display all of the articles for your site, this would be how you would do that, right?
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=67)** You would use a URL parameter like we're doing here and then we're going to use the value of that part of the URL to select a product that we want to display on the page.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=78)** So that might sound a little bit confusing.
>
> **[1:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=80)** Let me just show you what that's going to look like.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=82)** The first thing that we're going to want to do on our product detail page component is import all of the products from our temp-data file.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=90)** So we'll say import products from ../temp-data.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=98)** And then down inside here we're going to say data.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=102)** And this is going to be the data method.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=104)** And what we're going to want to do is return the product that we want to display.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=109)** So unlike in the products page where we just made all of the products available to the template up above because we wanted to loop through, display all of them, in the product detail page we only want to display a single product.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=124)** So we're going to need to use a little bit of JavaScript logic to find the correct product from our products array up here and display that in our template.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=135)** So here's what this is going to look like.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=136)** We're going to say product, and then products.find.
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=141)** Now the find method in JavaScript, in case you haven't worked with it before, is just a method that allows us to find a certain item in an array that matches given criteria.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=151)** So what we want to do here is find the product whose ID matches the ID value in the URL parameter.
>
> **[2:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=159)** So what that's going to look like is we're going to say we want to find the product whose id, so product, product.id equals, and the way that we access the current value of this URL parameter, right, the way that we access if the user puts in /products/123, for example, is by saying this.$route.params, dot,
>
> **[3:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=189)** and then the name of the URL parameter, which in our case is productId.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=193)** So again, if the user went to /product/123 the value of this thing here would be the string 123.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=202)** And that's how we can find the matching product.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=205)** So now that we have that product, what we're going to want to do is go up to our template and add some HTML here.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=212)** So first of all, instead of having this product detail page H1 heading up at the top, we're just going to want to remove that and display the name of the product.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=221)** So what we're going to do is we're going to say div, class equals image-wrap.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=227)** This is just for styling purposes again so don't worry too much about that.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=232)** And inside this div we're going to put the image of our product.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=235)** So we'll say image.
>
> **[3:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=237)** Again, we're going to say :source equals product.imageName, right?
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=243)** That's the property name that we want to pass there.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=246)** And underneath that image, so outside this image-wrap div we're going to display the product details by saying div, we'll give this div a class name of product-details like so.
>
> **[4:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=262)** And inside here is where we're going to put the product's name and price.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=266)** So we'll just say H1, and then in double curly braces, product.name.
>
> **[4:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=272)** And then underneath that we're going to say H3.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=276)** And the class here is going to be price for styling.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=280)** Oops, let's add that there.
>
> **[4:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=282)** Price.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=283)** And inside here we're just going to say, double curly braces, product.price.
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=289)** Oh, and one more thing that we're going to add, and this is also going to be inside this product details div, we're going to add a button here that will allow the user to add this item to their cart.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=299)** So we'll come back and implement that later on once we've added that functionality to our backend.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=305)** But for now, this button, which is going to have a class name of add-to-cart, there we go.
>
> **[5:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=312)** And the text inside this button is just going to say, Add to cart.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=319)** All right, so that's all we need to add for this page.
>
> **[5:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=322)** Let's save our file and then head over to our other tab.
>
> **[5:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=326)** And what we should be able to do now is go to /products and then add in one of the product IDs.
>
> **[5:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=332)** And in case you don't know what those IDs look like you should be able to just open up temp-data.js and look for the ID property on one of these.
>
> **[5:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=340)** So 123, 234, et cetera.
>
> **[5:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=343)** And we're going to add that to the end of this URL.
>
> **[5:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=346)** So we'll take a look at /products/123.
>
> **[5:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=350)** And sure enough, what we'll see is that our basil olive oil comes up with its larger image, its larger title, and its larger price as well as this add to cart button.
>
> **[6:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=362)** And you can also play around with this by putting in other IDs.
>
> **[6:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=365)** So we could go to product 345, for example, and we'll see another olive oil come up.
>
> **[6:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-product-detail-page?u=76281980&t=372)** So it's a really nice way that we just saw here to allow ourselves to use a single component in Vue to represent multiple pages.

> [!info]- Semantic Content
>
> **Env Vars:** url (7), html (1)
> **CLI Commands:** find (7)
> **Code Keywords:** let (4), from . (1), this. (1), pass (1)
> **Exercise Files:** template (3)
> **File Paths:** main.js (1), temp-data.js (1)
> **Code Identifiers:** productid (1), imagename (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)

#### Creating a shopping cart page
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=0)** - [Instructor] All right, so far we've done our products page and our products detail page.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=4)** The last page we need to do here is the shopping cart page which will display a list of all of the items the user has added to their cart.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=12)** Now, there's not really going to be anything too different about this page, but the main difference is that instead of displaying products from the products array that we had in our temp data, we're going to be displaying products from the user's carts.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=26)** So the first thing that we're going to want to do is actually add another fake array, right?
>
> **[0:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=31)** Well, it's a real array but fake development data that is in this temp data file.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=37)** And what that's going to look like is we're going to say export const and we'll call this cart items.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=45)** And then what we're going to do is just make this a simple array.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=48)** And inside that we can just take some of the items from our products array and copy those.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=55)** And then we're going to paste them in this cart items array like so and we can adjust the spacing a little bit to make it look better.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=63)** And there we go.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=64)** We now have some items that will be in the user's shopping cart.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=69)** Alright, so now that we've added that data, let's go back to our shopping cart page and import that array.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=75)** This will be what we end up displaying up here in our template.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=78)** So we're going to say import cart items from our temp data file.
>
> **[1:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=84)** so ../temp data.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=86)** And now for our data method in our shopping cart page component, we're going to say return and we're going to add the cart items like so.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=97)** Okay, so now inside our template we're going to want to use the same v-for directive that we used in our products page to display all of the products on our site to display these cart items.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=110)** Now we're going to be obviously using a slightly different HTML structure for this, but the same view concepts are going to apply.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=118)** So what we're going to do is we're going to change the heading to just say shopping cart.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=123)** You could make it say my cart if you want to, of course.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=126)** And then under that we're going to say div.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=130)** And here's where we're going to use that v-for directive.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=132)** We're going to say v-for and we'll want to display this for each product in our cart items data array, right?
>
> **[2:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=144)** So this will repeat this div and everything inside of it for each item in there.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=149)** And we can insert the data just by referring to this product now.
>
> **[2:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=153)** Cool. So in addition to the v-for directive, we're also going to add a class to this div for styling purposes.
>
> **[2:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=159)** So we'll say class equals product container.
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=164)** All right?
>
> **[2:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=165)** And we'll also need a key.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=167)** So after the v-for directive, we're going to say colon key.
>
> **[2:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=171)** And just like we did in our products page we're going to use the product id, right, the ID of the individual product as the unique identifier that view can use behind the scenes.
>
> **[3:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=183)** And now that we have that div completed inside this div we can display the different details for each product.
>
> **[3:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=190)** So we're going to display a small image for that product as well as the name and price and a button for removing that item from the user's cart that will implement later on.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=200)** So what that's going to look like, we're going to have our image the class here is going to be product image.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=206)** Oops. Let's put that inside those double quotes.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=209)** Product image.
>
> **[3:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=210)** And then for the source we're going to say colon source equals product.imagename.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=219)** Okay, so that's the image.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=221)** After that, we're going to display the product details and we're going to put those inside a div with the class name of details wrap.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=230)** All right, details wrap.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=232)** And inside that div is going to be an h3 heading with the products name.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=238)** So we'll say product.name.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=241)** And then underneath that we're going to say paragraph product.price.
>
> **[4:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=248)** And one last thing outside of this details wrap div we're going to add that button for removing items from the user's cart.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=257)** And that's going to just be a button with the class name of remove button.
>
> **[4:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=263)** And inside that button we're going to put the text remove from cart.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=269)** Cool. So now that we've added all of that we should be able to see all of the items in the user's cart.
>
> **[4:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=274)** But one more thing that we'll want to add and this is going to be outside of the product container by the way, 'cause we're only going to want to display it once on our site.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=283)** We're going to add a button at the bottom that will allow the user to go to checkout, right?
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=289)** That will allow the user to actually pay for all of the items.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=292)** Now, this is the part of our site where we're not actually going to implement it, so this button isn't actually going to do anything.
>
> **[4:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=298)** But nevertheless, this is something you could add in using something like Stripe or some other payment processing provider.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=306)** So for now, we'll just add a button.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=309)** The class for this button is going to be checkout button.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=313)** And then inside this button we'll just say proceed to checkout.
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=320)** Cool. So at this point, we should be able to take a look at our application, right?
>
> **[5:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=325)** We're going to go to our cart by changing the path at the end of our URL here to /cart.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=331)** And sure enough, we'll see all of the items in our cart along with the name, the image, and the price.
>
> **[5:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=338)** And then over to the right hand side here, this remove from cart button.
>
> **[5:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=343)** All right.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=344)** Now one more thing that we might want to add to this page is when the user doesn't have any items in their cart, which we can simulate by going back to here and just replacing cart items with an empty array, right?
>
> **[5:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=357)** If we do that and go back to our page and hit refresh.
>
> **[6:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=361)** Now you may see an error in the console here because of the import statement that we left behind but you can ignore that for now because we aren't going to leave it this way anyway.
>
> **[6:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=372)** So what we might want to do is display a message letting the user know that they haven't added anything to their cart yet.
>
> **[6:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=379)** So that's actually pretty simple to do.
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=381)** And in order to make that happen we're going to use something called the v-if directive in view, right?
>
> **[6:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=387)** So we used the v-for directive already to repeat some sort of HTML structure.
>
> **[6:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=392)** We can use something called the v-if directive to only display some piece of HTML if some condition is true.
>
> **[6:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=401)** All right, so here's what that's going to look like.
>
> **[6:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=403)** Up here above our product container div, we're actually going to add another div that surrounds everything we want be able to show and hide and put the rest of our page content inside of there including the proceed to checkout button, right?
>
> **[6:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=416)** Because obviously we don't want to show that if the user doesn't have any items to buy.
>
> **[7:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=422)** Cool. So now that we've done that what we're going to do is use the v-if directive and we're going to say that we only want to show all of this if the length of the products, right?
>
> **[7:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=431)** So in other words, if the length of our cart items array is greater than zero and that's what that would look like.
>
> **[7:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=438)** So now all of this is only going to be displayed if this is true.
>
> **[7:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=444)** And what we can do is display a message if that's not true, which will look like this, we'll say div v-if cartitems.length, and oops that should be inside some double quotes there.
>
> **[7:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=458)** All right, so if cartitems.length is equal to zero, then what we're going to want to do is display the message saying you know, your cart is empty, or something like that.
>
> **[7:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=471)** So we'll just say you currently have no items in your cart.
>
> **[7:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=479)** And now if we go back and take a look at our site, well first let's actually change this cart items to an empty array like so.
>
> **[8:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=487)** If we go back to our site now and hit refresh, we should see that sure enough it says you have no items in your cart and if we go back and just remove that array and save that again, go back and hit refresh, we'll see that all of that is once again displayed.
>
> **[8:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-shopping-cart-page?u=76281980&t=503)** So that's how to implement a basic shopping cart for our site.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), const (1)
> **CLI Commands:** make (4)
> **Env Vars:** html (3), url (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** template (2)
> **Definitions:** in other words (1)
> **Analogies:** just like (1)

#### Creating a navigation bar
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=0)** - [Instructor] Okay, so at this point, we have all three of our site's pages created.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=4)** But the only problem is that in order to navigate between the pages, we're still sort of forced to type in the URLs manually up here at the top of the browser, right?
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=14)** So to go to the Cart, we got to type in cart.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=17)** To go to the Products, we have to go to /products.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=20)** And to go to an individual product, we actually have to type in the ID of the product we want to view.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=26)** Now, obviously none of that is considered good UI, so what we're going to do here is link together all of the pages in our application.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=35)** And one of the main ways we're going to do this is by creating a navigation bar.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=41)** So up at the top of our page, we have this Two Trees Olive Oil nav bar.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=45)** And right now, it's just a basic H1 heading that doesn't really do anything.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=50)** So what we want to be able to do is click on this and have it take us to the Products Page.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=56)** And we also want to have a button over here on the other side that will allow the user to view their Cart.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=63)** And one more thing that we're also going to see how to do here is link up our products in our list here so that we can just click on this button and go to the corresponding product detail page.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=74)** But first things first, let's implement the nav bar.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=77)** So what we're going to do is open up our IDE here and, inside our components directory, right, currently our components directory has just been sitting empty while we've implemented our pages.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=89)** Inside here, we're going to create a new file called NavBar.vue.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=95)** Now since our nav bar is going to be a component, and it's going to have the same main parts as the rest of our components, it's just going to have a template, and it's also going to have a script tag.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=107)** And inside that script tag, we're just going to say export default.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=111)** And that's going to be an object with the name property set to NavBar.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=117)** All right, so now that we've added that, inside the template is where we get to define the basic structure for our NavBar.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=124)** So first things first, we're going to want to add the logo for our site.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=128)** And by the way, that's one of the images that we added to our assets folder.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=132)** So if you take a look at the logo-hexagon file, well, it's not going to look like much here, but that's going to be the logo for our site, and you should be able to see that displayed in the browser.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=143)** So what we're going to need to do in Vue in order to display an image is we're going to import that image the same way that we import any other kind of component or data.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=154)** So we're going to say import logo from, and then we're going to say @/assets/logo-hexagon.svg.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=167)** Now, you might be wondering what this @ thing is.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=170)** Well, basically that just refers to the source directory of our project, and that makes it a little bit easier than having to type in the exact path using ../ especially once you start getting into deeper directory structures.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=185)** So you can do that, by the way with some of the other components.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=188)** So for our shopping cart page, for example, instead of having to say ../temp-data, since that's in our source directory, we could have just said @/temp-data.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=199)** But we'll just leave that the way it is for now.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=201)** And now that we have this logo, what we're going to need to do is make that data available to our template by adding a data method.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=209)** All right, so we'll say return, and then put logo as one of the properties that we're providing there.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=216)** And then up in our template, we can now say for our NavBar div.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=221)** This is going to have the class of nav-bar.
>
> **[3:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=226)** All right, that's again, just for styling purposes.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=230)** And once we've done that, we're going to add our logo.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=232)** So inside a div here, we're going to say class="logo-wrap".
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=239)** And then inside that div is where we're going to put the image with the src property, remember to put that colon in front of it, because this is JavaScript data that we're referring to.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=249)** We're going to say :src="logo".
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=252)** Okay, so that should display the logo for us.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=256)** And after that, we're going to add a shopping cart button that will be displayed over on the right-hand side.
>
> **[4:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=262)** So for that, we're just going to say <button>Shopping Cart.
>
> **[4:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=267)** And that's all we need to do for that.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=269)** So first of all, in order to display this nav bar on all of the pages, we're going to need to open up our app component and import that component.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=279)** This is actually the first time we've seen how to display components inside other components, but it's pretty straightforward.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=285)** We're just going to need to say import NavBar from its file, so @components or @/components, rather, /NavBar.vue.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=297)** And then we need to pass that as a property of this component's object.
>
> **[5:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=302)** So this will make it available up here in our template.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=306)** So now all we need to do is replace this Two Trees Olive Oil h1 heading with our NavBar element, which looks like that.
>
> **[5:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=315)** So all you need to do to display a component inside another component is import it, add it to this components object, and then use that same string that you used for the property name inside an HTML tag like we did up here, cool.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=331)** So now that we added that to our app, let's take a look, and we should be able to refresh our app.
>
> **[5:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=337)** And sure enough, we see that the logo and the button are both displayed, but the styling is a little bit off.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=342)** And that's just because the styling is relying on these two things having links around them.
>
> **[5:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=348)** So currently, these two buttons, right, the logo and the button don't do anything.
>
> **[5:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=354)** And in order to make that happen, we're going to have to surround them with something called a router link, right?
>
> **[6:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=360)** Router links in Vue, basically just allow us to link two pages together.
>
> **[6:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=366)** So what this is going to look like is inside our NavBar component, we're going to wrap our logo-wrap div with a router link.
>
> **[6:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=377)** And that's what a router link looks like.
>
> **[6:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=379)** It's just all lowercase with a dash, router-link.
>
> **[6:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=382)** And the router-link takes a to attribute that allows us to specify what we want the path to change to when we click this router-link element.
>
> **[6:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=391)** So if we say to="/products", clicking on this router-link thing will take us to the Products Page.
>
> **[6:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=399)** And that means, if we put this logo-wrap div and image inside of that, clicking on the logo will now take us to the Products Page.
>
> **[6:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=409)** And we can test that by going back to our front end and hitting Refresh.
>
> **[6:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=413)** And now if we click on this Two Trees Olive Oil logo, well, here, let's go to another page first.
>
> **[6:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=419)** We'll go to our cart page, because currently we're already on our Products page.
>
> **[7:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=423)** So now if we click on our logo, sure enough, it'll take us back to our Products page.
>
> **[7:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=428)** So let's do the same thing now for our Shopping Cart button.
>
> **[7:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=431)** We're just going to surround that with a router-link and put the button inside of that.
>
> **[7:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=438)** And now if we add the to attribute, we're going to want that to take us to /cart.
>
> **[7:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=444)** Sure enough, we should be able to go back to the front end now and click on Shopping Cart.
>
> **[7:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=450)** And that'll take us to the Shopping Cart page.
>
> **[7:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=452)** So let's fix the styling here as well before we move on.
>
> **[7:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=455)** We're just going to need to add the class of cart-link to this router-link element.
>
> **[7:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=460)** And we're going to add the class of products-link to our products router-link.
>
> **[7:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=467)** So we'll say class="products-link" and that should be inside the double quotes there.
>
> **[7:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-navigation-bar?u=76281980&t=477)** So now if we go back to our front end and hit refresh again, we'll see that those two things are in the correct place so we can navigate between our Two Trees Olive Oil Products Page and our Shopping Cart just by clicking on these two parts of the NavBar.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7), click on (5)
> **Code Keywords:** let (5), class= (2), default. (1), from, (1), return, (1)
> **Exercise Files:** template (5)
> **CLI Commands:** make (3)
> **Env Vars:** ide (1), html (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Linking to the product detail page
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=0)** - [Instructor] All right, so we've created our nav bar and that has allowed us to navigate between our shopping cart page and products page but we still have yet to be able to link our products page to the product detail page.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=12)** So here's what that's going to look like.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=14)** We're going to open up the products page.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=17)** All right, so let's just close these here to clean up a little, and we'll open up the products page.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=22)** And what we're going to do here is for this button, we're going to need to wrap that in a router link element.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=29)** But the to attribute, right, the attribute that tells the router link where we want the user to go when they click on this thing, is going to have to have a dynamic value based on which product we're displaying.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=42)** So that might sound a little bit complicated, but it's actually quite straightforward.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=47)** So what we're going to do, first of all, is, as I said, we're going to wrap this link details element in a router link.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=54)** And let's just put the button inside of there because we want the button to trigger this functionality when it's clicked.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=61)** And then for the to property here, what we're going to do is set that to /products.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=68)** And then here's where you're going to need to remember what we did earlier with the URL parameter, right, remember that what comes after this is the ID of the product we want to view.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=79)** So in other words, if we want to be able to click on an individual product and have it send us to /products/ with the product ID after it, what we're going to need to do is insert the product ID.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=92)** Now, for whatever reason, this kind of trips people up as to how to do this.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=97)** When you want to insert a product ID into a to attribute like this, all you need to do is add a colon to this and then use basic JavaScript logic to get what you want.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=108)** So what we're going to do is inside these double quotes, we're going to add the string product, which we're going to express in single quotes, as you can see to the product ID.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=118)** So for that, we'll just say product.id and that is all we need to do.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=123)** So if we save this and go back to our front end, what we're going to do is go to our products page, and oops, let's just hit refresh here.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=131)** For some reason, that didn't show up.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=133)** So now if we click on view details for any one of these, it should take us to the corresponding product detail page for that product.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/linking-to-the-product-detail-page?u=76281980&t=140)** So that's how we link all of the products on our products page to their corresponding detail page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), this, (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Creating a 404 page in Vue
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=0)** - [Instructor] Now that we've got all of our pages and the navigation bar working like we want them to, there's another thing that we probably want our application to have, and that's a so-called 404 page, right?
>
> **[0:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=11)** Currently, if the user tries to go to a page that doesn't exist on our site, right?
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=16)** So if they try and go to slash blah, blah, blah, like so, well, they're not going to see anything.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=22)** And this is also true if they try and look up a product with an ID that we don't actually have a product for, right?
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=29)** So if we do /products/ and then some nonsense id, well, we get the same result.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=36)** So in both of these cases, what we're going to want to do is come up with a default page that will get displayed telling the user that yes, the site is working, they just went to an incorrect route.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=47)** So what we're going to do here is open up our IDE.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=51)** And inside this pages directory, we're going to create a new file called NotFoundPage.vue.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=59)** And this is going to have the same parts as the rest of our components.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=62)** It'll have a template section, and actually that section's going to be pretty simple.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=66)** We're just going to say h1 and we'll say 404: Page Not Found as the text inside of there.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=74)** So now that we've done that, we're going to add a script section.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=78)** And all we have to do this is about as simple as scripts get is say export default.
>
> **[1:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=84)** And then we're going to say name, and give this the name of NotFoundPage.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=91)** All right, cool.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=92)** So now that we have our NotFoundPage the way that we're going to make sure this is displayed on all of the routes that we don't have a current page for is going to look like this.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=103)** We're going to open up our main.js file where we define all of our routes, and we're going to add another route to the bottom.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=112)** And actually this is a little bit tricky because we need to make sure that this path matches everything except for these paths up above.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=119)** And Vue actually makes us a little bit easier for us because it will only check this path if one of these routes hasn't already matched.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=127)** But the path itself is going to look a little bit convoluted.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=130)** Here's what it's going to look like.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=132)** We're going to say /, and then :pathMatch, and then in parenthesis .* closing parenthesis *.
>
> **[2:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=144)** So don't worry too much about that.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=146)** That's just a regular expression that will make sure Vue matches this on all other routes.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=152)** And then for the component here, we're going to need to use our NotFoundPage, which of course we'll have to import up at the top by copying this and pasting it.
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=164)** And then we'll change it to NotFoundPage.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=168)** All right, and then we'll have to change the path as well to NotFoundPage.vue.
>
> **[2:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=173)** And hopefully now if we've done everything correctly, this will work.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=177)** So let's make sure we've saved this file.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=179)** And if we go back now to our frontend, what we're going to want to do is go to a nonsense route other than the products route.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=186)** We'll see how to implement that one in just a minute here.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=188)** But if we just type in some nonsense like so and hit Enter, sure enough we'll see that it says 404: Page Not Found which is exactly what we want.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=199)** Cool, so now what we're going to need to do is make sure that that page shows up on the products page when we don't have a matching product.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=206)** So what that's going to look like is this.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=208)** We're going to open up our ProductDetailPage.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=212)** And inside the template here, the first thing we're going to want to do is make sure that we only display all of this content if we have a matching product, right?
>
> **[3:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=222)** Currently, if we don't have a matching product, then product is going to be undefined and that causes an error up here when we try and access those properties such as product.name, product.price, product.imageName, you get the idea.
>
> **[3:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=237)** So here's what that's going to look like.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=238)** We're going to start off by saying div and we're going to use the v-if directive.
>
> **[4:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=244)** And we're going to say that we only want to display this if we have a matching product.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=249)** So we can just say div v-if product.
>
> **[4:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=251)** And that's really all we need to do.
>
> **[4:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=253)** So let's put all of this inside there.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=256)** And what we're going to do after that is add another div that will display the NotFoundPage if we don't have a matching product.
>
> **[4:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=265)** So what that'll look like is we're going to say div v-if, we're going to use that again, and then we'll say !product.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=273)** So we only want to display this part if the product does not exist.
>
> **[4:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=278)** And inside here, we're going to need to display the NotFoundPage, which means that, first of all, we'll need to import the NotFoundPage by saying import NotFoundPage from ./NotFoundPage.vue.
>
> **[4:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=294)** And now we'll need to add a components property to our component object down here that will tell it that we're going to want to display the NotFoundPage component inside of there.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=305)** So let's add NotFoundPage like so.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=309)** And oops, it looks like we lost the other closing curly brace, so let's add that back in.
>
> **[5:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=315)** And now we can use the NotFoundPage as a tag up in our template.
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=320)** So let's just add NotFoundPage like so.
>
> **[5:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=323)** And that should be all we need to do.
>
> **[5:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=326)** So let's test this thing out.
>
> **[5:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=327)** If we go to our frontend and go to /products/123, right?
>
> **[5:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=333)** So in other words, if we have a valid ID that matches a product, we should still see our product displayed otherwise, right?
>
> **[5:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=342)** If we go to /product/, and then just sort of type random numbers there, we should see 404: Page Not Found.
>
> **[5:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=351)** So that's how to add the NotFoundPage.
>
> **[5:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=353)** And one more thing I wanted to mention is that when we use v-if like we've used up here, if we have something that's directly opposite this condition, right?
>
> **[6:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=364)** Such as for v-if !product, we can use the v-else directive instead, right?
>
> **[6:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=370)** So v-else just looks like this.
>
> **[6:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=372)** We can say v-else with no value, and that will display this div down here if the previous v-if directive is false, right?
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=381)** So that's just an easy way to make sure that one of these two and only one of these two is getting displayed at any given moment.
>
> **[6:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=388)** So let's just try that again, test it out, make sure it's still works.
>
> **[6:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=391)** Sure enough, we see 404: Page Not Found.
>
> **[6:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-404-page-in-vue?u=76281980&t=394)** And if we add in an ID that we actually have a product for, we'll still see the product.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (3), for, (2), default. (1), if, (1)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (6)
> **Exercise Files:** template (3)
> **Definitions:** is a  (1), means that (1), in other words (1)
> **Code Identifiers:** pathmatch (1), imagename (1)
> **Analogies:** such as (2)
> **File Paths:** main.js (1)

#### Using modular components
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=0)** - [Instructor] Okay, now that we've got our entire app set up, there are still a few more things that we should do in order to have our front end in the best possible shape.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=9)** You may have noticed that when we were building our products page and shopping cart page, that the templates for both of those components were a little bit complex.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=17)** And let me just open those up so I can show you what I'm talking about in a little bit more detail.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=22)** We have our products page and our shopping cart page and sure enough, if you look at the structure here there's quite a bit of complexity going on.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=32)** Now, generally, what we want instead is for our components templates to be dead simple and especially for our page components.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=41)** And besides that, we also want each of our components to be reusable.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=45)** All right, now in our case the way that we can improve both the products page and the shopping cart page components is by splitting out the lists that they can contain as well as the items in those lists into their own components.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=58)** So in other words what we're going to do is take this list, right, our product container with the v-for directive down and we're going to split that out into a separate reusable component.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=70)** All right, so this can be done for both our shopping cart page and our products page.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=74)** And in this video, we're just going to do the products page.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=77)** The shopping cart page will be a challenge for you later on.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=81)** So the first thing that we're going to do is we're going to create a new file to hold this new component that we're going to be using and we'll call this component something like ProductsList.vue.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=94)** Okay.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=95)** Now this component is going to be pretty similar to the other page components that we've created except obviously it's not going to be a page, it's going to be just a simple reusable piece that we can add to our pages.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=107)** So let's add a template section and a script section.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=111)** And the script section is going to look much like the script section for our pages.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=117)** It's going to have a name property, of course, which will be ProductsList.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=123)** All right, so that's the script section for our products list.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=126)** So up in our template, our products list is actually going to be very simple.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=130)** We're just going to go over to our products page and copy the product item div, right, the div with the v-for directive.
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=141)** We're going to copy that whole thing and we're going to put that into our ProductsList like so.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=145)** And actually we'll want the grid-wrap div as well.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=150)** So we'll just copy that and paste that around our v-for directive div like so.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=156)** And then we'll close off that div by saying /div.
>
> **[2:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=160)** There we go.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=162)** And let's just adjust the indentation here real quick.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=165)** And there we have it.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=167)** Cool, so at this point we have the same structure that we used to have in our products page.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=172)** And actually what we can do now is remove this entire grid-wrap div from our products page.
>
> **[2:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=178)** And if we take a look at our products list, we're still referencing this products array.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=184)** So what you might be wondering at this point is where are we actually going to get this products array from, right.
>
> **[3:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=189)** Where is all of this data going to come from?
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=192)** Well, what we're going to do here is use something called props in view.
>
> **[3:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=197)** And basically props are sort of openings in our view components that we can pass data into from parent components.
>
> **[3:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=207)** So, you know, just like HTML elements are able to have attributes that we can change, right, the href attribute on an anchor tag, for example, right.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=216)** Components have props that we can pass data through.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=219)** So here's how props work in Vue.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=221)** The first thing we're going to have to do is add a props property to our ProductsList component.
>
> **[3:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=226)** And that's going to be an array with a string called products as an element, right.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=231)** So what this defines is the kind of props, right, The exact prop names that this ProductsList component will accept from a parent component.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=241)** And now that we've done that, all we need to do is go back to our products page.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=245)** And since we have our products list in its own separate component now, we should be able to just import that.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=252)** So we'll say import products list from then it's going to be ../components/ProductsList.vue.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=264)** And now we're going to need to add a components property to our products page component with ProductsList as one of the properties.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=276)** Cool, so now that we have that, we should be able to just add the ProductsList underneath the h1 heading in our template.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=283)** So we'll say ProductsList.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=285)** And here's where we're able to pass this products prop down to our products list, right.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=292)** This one that we define here.
>
> **[4:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=294)** What we're going to do is simply say products equals products.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=299)** And since we want to pass the specific product array here down as the value of this product's prop, we need to add the little colon before that, right.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=310)** Because we're accessing the value of a variable from our component in the script section.
>
> **[5:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=316)** And that is how we define and pass props in Vue.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=319)** So now that we have that added, what we should be able to do is go back to our front end and let's hit refresh just to make sure we have an up to date site running.
>
> **[5:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=328)** And if we go back to our products page now, uh-oh, it looks like that doesn't work.
>
> **[5:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=332)** And that's just because inside the ProductsList component we accidentally added this extra div tag.
>
> **[5:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=340)** So I can delete that and we should be able to go back and hit refresh.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=344)** And there we go.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=344)** We have all of our products displayed, but they're now displayed using a reusable component.
>
> **[5:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=350)** So what this means is that if we wanted to display the same ProductsList on another page, for example, our shopping cart page, or if we wanted to add a homepage to our site with for example, the most popular products on our site, we would be able to just reuse this same list and pass down whatever products we wanted it to display.
>
> **[6:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-modular-components?u=76281980&t=370)** So anyway, that's how to create a reusable component in Vue and display it inside a page.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), let (4), from, (1), delete (1)
> **Analogies:** for example (3), just like (1)
> **Cross-References:** go back to (3)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)

#### Challenge: Modular components
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=0)** (keys clacking)
>
> **[0:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=3)** - [Instructor] Okay, we just saw how to break out the template code for our products page into a separate reusable component.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=9)** So the next step is going to be for you to do the same thing for the shopping cart page component, and that's going to be your challenge here.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=18)** So the only hint that I'm going to give you here, besides everything that we went over in the previous video, is that you're probably going to want to create a new file in the components folder, and call it something like Shopping Cart List.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=32)** And then what you're going to want to do, of course, is take the relevant parts of our shopping cart page and make them reusable by adding that to that component.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=42)** All right, now, the actual implementation of these components is going to be completely up to you, but you're going to want to use the concepts that we've learned throughout this chapter in order to do so.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-modular-components?u=76281980&t=52)** So this challenge should take you probably about 10 to 15 minutes, and once you've given it a try, feel free to move on to the next video, where I'll show you how I solved this challenge.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1), next video (1)
> **CLI Commands:** make (1)
> **Code Keywords:** try, (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Solution: Modular components
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=3)** - [Instructor] Okay.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=4)** Now that you've had a chance to try this for yourself let's take a look at how I solved this challenge.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=9)** So the first thing that I did was I created a new component in the components directory.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=14)** And I called it something like shopping cart list dot view.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=20)** Okay, and after I did that, I added the template section and the script section to this component.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=26)** And I just left the template section blank initially because what I was going to do is copy and paste most of that code from the shopping cart page.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=35)** And then for the script, it was just a simple straightforward component with a single prop, which we'll see in just a minute.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=42)** So I added name, shopping cart list, and props for that one I made the prop name products just like in our products list.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=56)** Cool.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=57)** So once I had those the next thing that I did was in the template section I went over to the shopping cart page and starting at this product container div, which has the V4 directive on it.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=70)** I went down and copied everything down to the closing div tag.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=75)** So I'm going to cut that now.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=78)** And then inside the shopping cart list I'm going to paste that and that is the template I ended up with there.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=86)** All right, now, one thing that I had to change is because I ended up using the name products for this prop just to make it a little bit more intuitive because the products list also uses that prop name as well, I needed to change this V4 product in cart items to V4 product in products to make it match the name of that prop, okay?
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=110)** And once I did that, that's pretty much all I had to do.
>
> **[1:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=113)** So in order to use this shopping cart list what I then did was I headed over to the shopping cart page and since I already removed all of that HTML content from the template, all I had to do was import the new component that I created, so import shopping cart list from components, blah, blah, blah.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=135)** It looks like my IDE got that for me this time.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=137)** So thank you IDE.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=139)** And then down here in the export default object I said components and I had to add the shopping cart list.
>
> **[2:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=148)** And actually, I don't want view added onto the end of that.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=152)** I just want shopping cart list like so.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=154)** Not sure why that automatically happened and that allowed me to use that shopping cart list component up here in the template by saying shopping cart list.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=163)** And of course, in order to pass the products as a prop I had to say products equals and then I had to pass the cart items from the temporary data as the value for this.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=177)** So I said, products equals cart items like so and then we could close off the tag and that should complete the shopping cart list.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=187)** So let's save this now.
>
> **[3:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=189)** And if we go into our front end and hit refresh while looking at the shopping cart page we should see that everything is still the same despite the fact that this is now a reusable component.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=201)** All right, now one thing that I wanted to mention here is you may have had trouble telling where to stop when you were moving content from the shopping cart page template over to the shopping cart list template, right?
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=215)** In other words, maybe you thought that it was a good idea to take this div with the if directive and move that over to the shopping cart list as well.
>
> **[3:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=223)** All right, now that's completely possible to do, but the reason that I personally chose not to is because this functionality is very specific to our shopping cart page.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=233)** In other words, if we wanted to reuse this shopping cart list somewhere else in our app, there's a good chance that we might not want to hide it if the items length is zero.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=243)** So anyway, I chose to leave that in the shopping cart page because I thought that that functionality would be specific to this page and that it would not be something we'd want to use in our shopping cart list when we add it to other pages.
>
> **[4:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=258)** So anyway, that's how I solved this challenge.
>
> **[4:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=261)** You may have done something slightly different, but as long as you ended up with the same result, which is a shopping cart that looks more or less the same as before, that is good enough.
>
> **[4:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=272)** All right, so congratulations for completing this challenge if you figured it out.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=275)** And congratulations also on completing the front end for our application.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-modular-components?u=76281980&t=280)** Now, we are going to be making a few more changes to this later on, but first we're going to take a look at the back end.

> [!info]- Semantic Content
>
> **Exercise Files:** template (8)
> **Code Keywords:** let (2), pass (2), this. (1)
> **Env Vars:** ide (2), html (1)
> **Definitions:** in other words (2), is a  (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Creating a Node Back End

#### Why Node.js?
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980&t=0)** - [Instructor] Now that we've got our client side working nicely with Vue, it's time to start building the backend of our blog, and to do this, we're going to be using Node.js.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980&t=9)** Now, you've probably already heard about Node.js by now, and it's very important, because it allows us to write our backend in JavaScript instead of in PHP or Python or Java.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980&t=22)** Now, this is great news for JavaScript developers, because it means that with a single language, we can develop both the front end and backend of our site.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980&t=29)** Now, there are many different libraries that can be used to write basic servers on Node.js, and the one that we're going to be using in these videos is called Express.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980&t=38)** Now, Express is a great choice for us, because it's unopinionated, it's very easy to get started with, and it's also very well documented, and as an added bonus, there are also a ton of third-party add-ons that can be used to extend its functionality.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-node-js?u=76281980&t=54)** So without further ado, let's get started building our backend with Node.js and Express.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), php (1), python (1)
> **File Paths:** node.js (4)
> **Definitions:** means that (1), is called (1), is a  (1)
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### Setting up an express server
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=0)** - [Instructor] To get started creating a backend for our app with node.JS in Express, what we're going to do first is create a new directory outside of our frontend directory, right?
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=10)** So, earlier we created this Vue project called frontend in our directory.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=14)** And next to it we're going to create a new folder now called backend.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=19)** All right, now, unlike with our frontend code where we had to use the Vue CLI to generate a new project for ourselves.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=26)** With the backend code, setting up an Express app is actually pretty easy where we can just do it ourselves.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=32)** So, that's what we're going to do here.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=34)** And what you're going to want to do is open up a new terminal and what we're going to do actually is just stop our frontend application which you can do with Control + C.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=45)** And once you've done that, we're going to want to change directories into the backend directory.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=49)** So assuming that you're already in the frontend directory you should be able to say cd../back-end, right?
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=57)** That takes us up one level and goes into the backend directory.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=61)** Cool.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=62)** So, now that we're in the backend directory, the next thing that we're going to do is we're going to create a new NPM package by running the command npm init -y and you're going to want to hit enter.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=73)** Now, what that's going to do for us is it's going to create a new package.json file inside our folder.
>
> **[1:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=80)** And you can take a look at the contents of that if you want.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=83)** But anyway, once you've created that new package.json file, what you're going to want to do is run the command npm install express, and this will install the Express Library into our backend project for us.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=96)** And definitely make sure that you're running this command inside the backend folder since that will make a difference later on when we go to actually use the express package.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=105)** So you should see this node modules folder up here under backend, as well as this package-lock.json file.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=114)** Cool.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=114)** So now that we've done that, the next thing that we're going to do is create a new folder inside backend called source.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=120)** And this will just be the folder that we put all of our source code inside of.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=124)** So inside there now, we're going to create a new file and we'll call that file server.js.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=131)** And this file is going to be the entry point for the backend of our app where we set up our server code and run it.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=138)** However, before we actually jump in and start writing code in this file, there's something we need to do first, right?
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=145)** Because when we're creating a node JS server, we want to have access to the most up-to-date syntax of JavaScript available.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=152)** And the easiest way for us to do that is to use a library called Babel.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=157)** And Babel is used in Vue as well, right?
>
> **[2:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=159)** That's why we have this Babel config file.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=162)** So, what we're going to want to do is in our backend, we're going to install a number of different packages.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=169)** So, just bear with me here.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=170)** We're going to say npm install and then we're going to say --save-dev.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=177)** And after that we're going to say @babel/core @babel/node @babel/preset-end @babel/cli and @babel/plugin-transform-runtime.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=200)** Okay, and then we're going to hit enter and all of those packages will be installed.
>
> **[3:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=204)** You're going to want to make sure you have those typed exactly right before hitting enter too, by the way.
>
> **[3:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=210)** And once we've done that, there's one more package that we're going to install.
>
> **[3:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=214)** We're going to say npm install @babel/runtime.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=220)** Cool.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=221)** So, now that we've done all of that, the next thing that we're going to do is inside our backend directory, we're going to create a new file which we'll call .babelrc.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=230)** And the name of this is very important as well, so make sure you name it that.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=234)** And then inside of here, we're going to put a configuration object.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=239)** So, we're going to start with curly braces.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=241)** This is going to have a property called presets and the value for that is going to be an array with the string @babel/preset-env inside of it.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=255)** And once we've added that, we're also going to say plugins.
>
> **[4:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=260)** And the value for this is going to be an array with another array inside of it.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=264)** And this might be a little bit confusing.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=266)** Don't worry too much about why we're doing all of this.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=269)** Just know that it will allow us to have access to the most up-to-date version of JavaScript available here.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=275)** So inside there, we're going to say as a string @babel/plugin-transform-runtime.
>
> **[4:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=284)** And then as the second element in this array, we're going to say regenerator, and the value for that is going to be true.
>
> **[4:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=293)** So again, lots of stuff that we had to type there.
>
> **[4:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=296)** Don't worry what this all does.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=297)** Just know that we need this configuration for later.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=300)** Cool.
>
> **[5:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=301)** So, now that we have that, we're free to start writing our server file.
>
> **[5:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=304)** So, we're going to close this babelrc file and open up server.js inside our source directory.
>
> **[5:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=311)** And here's what's setting up an Express server is going to look like.
>
> **[5:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=315)** It's actually very simple.
>
> **[5:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=316)** We're going to say import express from express and then we're going to say const app = express.
>
> **[5:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=326)** And that's going to be followed by where we tell our app to listen.
>
> **[5:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=330)** And that's going to look like this.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=331)** We're going to say app.listen.
>
> **[5:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=334)** And the first argument to this function is the port that we want our server to listen on.
>
> **[5:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=339)** We're just going to use 8,000 here.
>
> **[5:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=341)** And the second argument is a callback that will get called when our server is up and running.
>
> **[5:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=347)** So what we're going to do is inside there, we're just going to say console.log and log out the message.
>
> **[5:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=353)** Server is listening on port 8,000.
>
> **[5:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=358)** Cool.
>
> **[5:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=359)** So at this point, if we were to run our server, our server would start listening, but it wouldn't actually respond to any of our requests.
>
> **[6:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=366)** So, what we're going to need to do next is add something called an endpoint.
>
> **[6:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=370)** Now, an endpoint is basically just logic that we want our server to execute when it receives a specific type of request.
>
> **[6:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=377)** So, here's what our first server endpoint is going to look like.
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=381)** It's just going to be a simplistic example to demonstrate how express endpoints work.
>
> **[6:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=386)** What we're going to do is say app.get.
>
> **[6:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=389)** The first argument here is going to be /hello.
>
> **[6:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=392)** And then the second argument is going to be a callback function with two arguments called request and response.
>
> **[6:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=400)** We'll talk about those in more detail later.
>
> **[6:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=403)** And then, inside the body of this callback function, we're just going to say response.send.
>
> **[6:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=411)** And we're going to send back the string, Hello.
>
> **[6:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=414)** Okay?
>
> **[6:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=415)** So, that's a very simple Express server.
>
> **[6:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=418)** And what we're going to do next is run this server.
>
> **[7:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=420)** And the way that we're going to do that is we're going to type the command npx babel-node, and then the path to our file, which is going to be source/server.js.
>
> **[7:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=433)** And if we hit enter now, what we should see is the message, "Server is listening on port 8,000", is going to be logged out to the console.
>
> **[7:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=443)** Okay, so if we go now to our ports tab and this is only relevant if you're using code spaces by the way.
>
> **[7:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=449)** If you're using VS code, you're going to want to send your requests to local host 8,000.
>
> **[7:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=454)** But since we're using code spaces here, we're going to go to ports, and you'll see that we now have a new port here, and that is 8,000.
>
> **[7:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=462)** That's where our backend is now listening on.
>
> **[7:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=465)** So, if you want to send a request to the backend, what you're going to want to do is click on this little world icon.
>
> **[7:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=471)** And the first thing you're going to see come up is this message that says cannot get /.
>
> **[7:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=476)** What you're going to want to do after that is add /hello onto the end of it.
>
> **[8:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=482)** And if you hit enter, sure enough, you'll see that it says, hello.
>
> **[8:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=486)** And this is the response that our server sent back.
>
> **[8:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=489)** So, what we did here is we created a server, we started it up and when you start up a server, it's basically just going to sit there listening for requests.
>
> **[8:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=498)** And then what we did is we sent a request to our server.
>
> **[8:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=502)** And again, since we're in code spaces we had to let code spaces do the forwarding for us.
>
> **[8:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=507)** And this sent a request to our server.
>
> **[8:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=510)** Our server triggered this logic here in response to that request, and it's sent back the string, hello, to the client side which was displayed here.
>
> **[8:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=519)** So anyway, that's how to set up a basic Express server and send requests to it.
>
> **[8:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-an-express-server?u=76281980&t=525)** And what we've seen here is going to form the basis for all of our real server endpoints we'll create for our app.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), npm (5), make (4), cd (1), npx (1)
> **Prerequisites:** install (6), set up (2), make sure you have (1)
> **File Paths:** package.json (2), server.js (2), node.js (1), package-lock.json (1), source/server.js (1)
> **Code Keywords:** function (3), this. (2), const (1), let (1)
> **UI Navigation:** go to (2), click on (1)
> **Ports:** port 8 (2)
> **Env Vars:** cli (1), npm (1)
> **Tools:** terminal (1), vs code (1)

#### Testing servers with Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=0)** - [Narrator] All right, so we've seen how to set up and run an express server, and as we move forward with our server development from now on it's going to be very important for us to have an easy and reliable way to test it.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=12)** So far we've tested our server just by sending a request to the right endpoint using our browser.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=18)** And that works, but for some of the more complicated operations, we're going to want to implement here... This won't be quite enough.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=26)** Testing using the browser isn't going to work quite as well as we need it to.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=30)** So what a lot of people do to test their backend is they use a tool called Postman, which is what we're going to be using here.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=36)** And Postman is basically just a nice program that allows you to custom create different requests and see what happens when you send these requests to the server.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=47)** So what you're going to want to do if you don't already have Postman is go to [postman.com/downloads](https://postman.com/downloads).
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=53)** And the URL may change, so you can always just Google "download Postman," if you're not sure where to find it.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=60)** And you're going to want to download this for whatever your current operating system is.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=65)** And in case you're on a Mac and don't know whether your Intel chip or Apple chip, you can always just go up to the top here and click on About This Mac, and you should be able to see that in the description.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=76)** Now, in my case, I have Mac Intel Chip, so I'm going to download that here.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=81)** And once that finishes downloading, we're going to run the installer.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=86)** And actually, as a matter of fact it's not an installer at all, but a program.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=90)** So I'm going to run that program and we should see that come up here in just a minute.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=96)** And there we go.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=97)** Your Postman application should look something like what you see here.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=101)** They're always changing it nowadays, so you might see something a little bit different.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=105)** But anyway, what we're going to do is we're going to send a request.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=109)** So you're going to want to find wherever on the interface there's an option to do something like send a request.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=116)** You're going to want to just click on that, so that that brings up a tab that looks like this.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=121)** And just as another side note, Postman seems to be making you sign in from now on, so you're just going to need to sign in using something like a Gmail account, if you want to use it, unfortunately.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=132)** Cool, so anyway, now that we have Postman downloaded and running, let's take a look at how to use Postman to send requests to our server.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=139)** So sending requests using Postman is pretty straightforward, but if you're using Codespaces, there's going to be an extra step that you're going to have to do in order to make sure it works correctly.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=150)** Now, if you're developing locally, first of all, and you have your server running on, let's say, localhost port 8,000, then sending a request to your server is pretty simple.
>
> **[2:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=159)** You just say [http://localhost:8000](http://localhost:8000).
>
> **[2:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=166)** And then you can add whatever the endpoint path is after that.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=170)** So, if we wanted to send this to /hello, you could add "/hello."
>
> **[2:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=174)** However, in our case, since we're developing this on Codespaces, not only are we going to have to get the URL that our Codespaces server is running on, so that's this URL that you see here, but we're also going to have to make sure that our server's port is made public.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=191)** Because right now, if we just try and copy this URL and paste it in Postman, if we click Send, we're going to see that we get back a response that basically is just an error telling us that we can't access that port.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=206)** So in order to make this port public, what we're going to need to do is go back to Codespaces, open this ports tab, and then we're going to need to go over to the visibility column here.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=219)** And then, if we right click and click on Port Visibility, we can change that to public by selecting Public from the dropdown.
>
> **[3:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=228)** Cool, so that's going to take a moment to restart there.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=231)** Once it turns public and shows back up with that little visibility public underneath it, we should be able to now send that same request from Postman again.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=242)** And after a second or two, we should see the response, "Hello," which is the same response that we got earlier.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=249)** So anyway, that's how to download and run Postman, and send requests to a Codespaces server.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/testing-servers-with-postman?u=76281980&t=256)** The next thing that we're going to take a look at is how to start creating endpoints for our full-stack application.

> [!info]- Semantic Content
>
> **Tools:** postman (13)
> **Code Keywords:** public (6), case, (2), let (2), interface (1), this. (1)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** click on (3), go to (1), dropdown (1)
> **Env Vars:** url (4)
> **URLs:** [postman.com](https://postman.com) (1), [http://localhost:8000](http://localhost:8000) (1)
> **Ports:** port 8 (1), :8000 (1)
> **Cross-References:** go back to (1)

#### Creating routes in Express
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=0)** - [Instructor] All right, so at this point we have a basic server setup and we have Postman, which is really going to help us test our different server endpoints.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=8)** So what we're going to do next is we're going to take a look at how to start creating some endpoints on our server that will be useful to our fullstack application, right?
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=18)** So what we're going to start off with are three important endpoints that will allow our front end eventually to load data from our server.
>
> **[0:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=27)** Now, these three endpoints are going to look like this.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=29)** The first endpoint is going to be an endpoint for loading all of the products.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=34)** So for that we're going to say app.get lkv and the endpoint for that is going to be /products and we'll see how to implement this in just a second.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=42)** But the callback is going to look the same for all of these.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=45)** We're going to have request and response, which again we'll talk about in more detail shortly.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=50)** The next endpoint that we're going to create will be an endpoint for loading the user's current shopping cart.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=57)** So that's going to look like this.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=58)** We're going to say app.get/cart.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=62)** And last but not least, we're going to say app.get.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=66)** And this is going to be an endpoint for loading individual products by their ID.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=71)** So this is going to look an awful lot like the basic page setup that we had on our front end where we had the cart route for our shopping cart page, the products route for our products page, and the individual product route with that little URL parameter for the product detail page.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=90)** So this is going to be the endpoint for the product detail and the path for that is going to be /products/ and then we're going to say :productid.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=100)** And this right here is going to do pretty much the same thing as what we saw on the front end.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=105)** It's going to allow us to pass different values for this and then access those values to determine which product we're going to respond with.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=114)** Cool, so now that we have those three endpoints, we should be able to start implementing these.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=119)** The first endpoint is going to be for sending back all of the products.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=122)** And in order to get all of the products that we'll want to send back to the client side, what we're going to need to do is go into the front end, open up that temp data file and we're going to copy this export const products thing.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=137)** So I'm just going to copy this and in fact, we can even just use the entire temp data file, if we say copy and then paste that inside our backend source directory.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=147)** We're going to say paste and there are a few things that we'll have to change, right?
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=152)** We're going to want to remove these imports for now, we'll just comment those out.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=156)** And we'll also want to temporarily comment out the image name on each of these cart items, okay.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=162)** So the backend deals with images in a slightly different way than view applications do.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=167)** So we'll just remove the image name from all of these just by commenting it out temporarily.
>
> **[2:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=173)** And once we've done that, we should be able to use this data in our server.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=176)** So let's close that and head back to our server.js file.
>
> **[3:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=180)** And now what we're going to do is we're going to say import and we're going to import the cartitems as well as the products from our temp data file, cool.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=192)** So now all we have to do, if we want to send back the products or cart items or whatever to the user is just like earlier when we said response.send hello.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=202)** And we were able to just send back a simple string that was received by the front end with our products endpoint, card endpoint and so on.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=212)** We can just send back basic JavaScript data by saying response.send.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=217)** And then, if we want to send back the products here, we say products.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=220)** Now, one minor difference here is that generally it's considered a good idea, if you're sending back json data specifically, to say response.json instead of response.send.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=233)** So that's what we're going to use in this case.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=234)** And for the cart. all we have to do now is say response.json cartitems and that will send that back to the client.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=243)** And for the individual product, here's where we're going to have to add a little bit of logic, but nothing we haven't seen before.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=250)** We're going to need to find the product corresponding to this productId URL parameter and that's going to look like this.
>
> **[4:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=258)** We're going to say const product = products.find, all right, so we're using that same find method that we used earlier on our front end when we wanted to find the matching product for an ID.
>
> **[4:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=272)** And in order to obviously find the product that matches this ID, we first have to get the value of that ID in this endpoint.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=279)** Now the way that you do that in Express is going to look like this.
>
> **[4:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=284)** We're going to say const productId = request.params, all right, so this params property is automatically included on this request argument, which by the way includes a lot of other information about the request that was just received, such as any extra information that was included with the request, and even things like the exact path that the request was sent to.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=309)** So we're going to say request.params.productId, and what that'll do is it'll take the value that's at this part of the path and it will allow us to get that as a variable.
>
> **[5:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=322)** So if we had called this something like myURLParameter, we would need to say my URL parameter as the property name down here.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=331)** But anyway, we'll just leave that as productId.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=335)** And now that we have the product ID, of course, we're going to want to say products.find lkv and we'll want to find the product whose ID, right, product.id is equal to the product ID URL parameter that we got up above.
>
> **[5:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=351)** Okay, and now that we have the product, we're just going to say response.json lkv and send that product back to the client side.
>
> **[5:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=358)** And that looks like what we just typed out there response.json product.
>
> **[6:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=363)** So now, if we want to test out these endpoints, what we're going to need to do is restart our server.
>
> **[6:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=369)** And you will have to do this even if the server is already running because Express servers don't update by default when we make changes to the server file.
>
> **[6:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=378)** We will see shortly how to make that happen, but it won't right now.
>
> **[6:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=382)** So we're just going to need to rerun our server with npx babel node and then source/server.js and hit enter.
>
> **[6:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=391)** And we should see that our server starts up and says server is listening on port 8000.
>
> **[6:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=397)** So let's do the same thing that we did before.
>
> **[6:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=399)** We're going to need to go into ports and make sure that port is public.
>
> **[6:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=404)** All right, and this is another reason why we're definitely going to want to make sure our server automatically restarts so that we don't have to do this each and every time.
>
> **[6:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=412)** So let's right-click on this and we're going to say Port visibility Public, and now we should be able to send requests to these three endpoints from Postman.
>
> **[7:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=421)** So let's try sending a request first of all to /products.
>
> **[7:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=426)** And if we click send, sure enough, we'll see all of our products get sent back as part of the response, which is exactly what we wanted.
>
> **[7:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=434)** If we try cart now and click send, then sure enough we'll see all of the products that are in our cart.
>
> **[7:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=441)** And for the last endpoint, we're going to say Products/123.
>
> **[7:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=446)** And if we click send, we should see only the product with ID 123 gets sent back to us.
>
> **[7:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=452)** So those three endpoints are working just like we want them to right now.
>
> **[7:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-routes-in-express?u=76281980&t=456)** And again, these three endpoints are going to be used by our front end to load products, to load the shopping cart and to load individual product data.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (4), const (3), public (2), pass (1)
> **CLI Commands:** find (7), make (4), npx (1), node (1)
> **File Paths:** response.json (4), server.js (1), source/server.js (1)
> **Code Identifiers:** productid (4), myurlparameter (1)
> **Env Vars:** url (4)
> **Analogies:** just like (2), such as (1)
> **Tools:** postman (2)
> **Prerequisites:** setup (2)

#### Using nodemon to restart a server
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=0)** - [Instructor] Okay, so now that we have all of these routes for loading data from our server, you may have noticed that until now, we've had to manually restart our server every time we made a change to our code in order for those changes to take effect, right?
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=13)** So if we have our server listening and we make a change up here, well, that change isn't going to take effect until we manually stop our server and restart it.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=23)** And of course, in Codespace, that requires us to open up this ports thing and set the port to public each and every time.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=30)** And that's obviously a little bit annoying to have to do, so what we're going to take a look at is how to use a package called nodemon in order to help us automatically restart our server in response to changes.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=41)** So what we're going to do here is stop our server and inside our backend directory, we're going to say npm install -- save-dev.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=54)** And we're going to install, as I said, a package called nodemon, which is spelled like that, and there are different pronunciations for this.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=60)** So that's just the way I say it.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=62)** So let's hit enter and that's going to install that package for us.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=66)** And now that we've done that, what we should be able to do is run our server continuously, right, and see it automatically updated.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=75)** And the way we do that is by saying npx no demon -- exec.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=82)** And then after that we're going to say the original command that we used to run our server.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=87)** So that's going to be npx babel-node and then the path to our file, source/server.js.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=95)** And yes, that is a slightly long command there.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=99)** I'll show you in just a minute here how we can make that shorter.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=102)** So let's hit enter though, and what we should see is that, sure enough, we have all of this new output, that's just all from nodemon.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=109)** And after that, we see that it says server is listening on Port 8,000.
>
> **[1:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=113)** So now what we should be able to do is go over to our ports and we're going to have to set this port to public again.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=120)** So we'll just say Port Visibility, Public.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=124)** And there we go.
>
> **[2:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=125)** We should now be able to send a request to this from Postman, so let's open up Postman and we'll just send the same request that we were sending earlier by clicking Send.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=134)** And sure enough, we see that we get the same result.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=136)** And if you want to test out this automatic restart, what you can do, first of all, let's just open up the terminal so that we can see that automatically refresh.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=145)** What we can do is just have our product ID endpoint, which we were just sending that request to.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=151)** We'll just comment out all of the code that that contains.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=154)** And for now, just for testing purposes, we'll say response.json, and we'll say hello again.
>
> **[2:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=161)** Okay, so let's save that and what you're going to see is that as we save that file, which I've done automatically several times just in Codespaces here, the server automatically restarts and again, we see server is listening on Port 8,000.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=176)** And one thing that we are going to have to fix here is you'll see that even though nodemon has automatically restarted for us, it's set the visibility back to private.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=186)** And that's because it very briefly stopped the service and restarted it.
>
> **[3:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=190)** So what we have to do is just add a port manually, all right, and that's going to be 8,000 here.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=195)** And here, we can actually delete this port above it.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=199)** All right, so we're going to manually add Port 8,000.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=202)** And now if we set the visibility to public, okay, it should stay that way.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=209)** So let's just try this one more time.
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=211)** We'll add something simple like a semicolon and hit Save and what we should see is that the server will automatically restart.
>
> **[3:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=218)** And then back in ports we'll see that the visibility is still public, which is exactly what we wanted.
>
> **[3:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=224)** So now we can go back to Postman, click Send, and we'll see that updated response that says hello again.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=231)** And now if we go back and change it back to what we had before by deleting that hello again response and uncommenting this code and clicking Save, then we'll still see that the port stays public.
>
> **[4:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=244)** And again, we'll see that the server has restarted.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=247)** And now if we go back and send that same request, we'll see that we get back the same product as before.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=252)** Now, one last thing that I wanted to mention here is that since this command is pretty long to have to run each and every time we want to start up our server, even if we only have to do it, let's say, once a day while we're developing, there's a way that Node.js provides us with for creating shortcuts.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=269)** And all we have to do in order to make that happen is open up our backend folder and then package.json.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=275)** And do make sure you're opening up package.json in the backend folder, not in the frontend folder.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=280)** And then what we're going to do is find this scripts section and you'll see that there's already one script in there called test.
>
> **[4:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=287)** That's just a basic script that is automatically provided for us by Node.js.
>
> **[4:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=293)** And what we're going to do is underneath that, well, first of all, make sure to add a comma to the end of that test line because otherwise it won't work.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=299)** Underneath that, we're going to say dev.
>
> **[5:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=303)** And then as a string, we're just going to copy this command, right, npx nodemon exec, blah, blah, blah, and we're going to paste that in the string there so that this dev script is now this longer script here, right?
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=317)** So basically what this has done is it's created a shortcut for us so that instead of having to remember and run that long command every time, we can now just say npm run, and then the name of the script we just created, which is dev here, and that will be a shortcut for that command, right?
>
> **[5:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=334)** So you can see that just by running that now, it says server is listening on Port 8,000, and sure enough, if we go back to ports, we see that it's even still visible now that we've stopped our server and restarted it.
>
> **[5:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/using-nodemon-to-restart-a-server?u=76281980&t=346)** So anyway, that's how to use nodemon to automatically restart our server in response to updates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (6), this. (1), private (1), delete (1)
> **CLI Commands:** make (5), npx (3), node (3), npm (2), find (1)
> **File Paths:** node.js (2), package.json (2), source/server.js (1), response.json (1)
> **Ports:** port 8 (4)
> **Tools:** postman (3), terminal (1)
> **Prerequisites:** install (3)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)

#### Creating server data
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=0)** - All right, so now that nodemon is automatically restarting our server for us, the next thing that we're going to do is create some more endpoints on our server and these are going to be the end points for managing the user's shopping cart.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=12)** So we're going to create two endpoints here.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=14)** One for adding an item to the user's cart and one for removing an item from the user's cart.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=20)** So, here's what that's going to look like.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=21)** We're going to say app.post.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=25)** So this is the endpoint for adding an item to the user's cart.
>
> **[0:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=27)** And we're using a post request just because that's a very common convention that's used when creating server side resources.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=34)** And for the URL here, we're going to say, /cart.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=39)** And just as another side note, it is possible to have two different end points with different types of requests, such as post or get with the same url.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=49)** So, we have this one up here for loading the cart this one down here for adding an item to the cart and that's perfectly fine.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=55)** All right, so let's now add the callback function, which takes the request and response objects as arguments.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=61)** And those objects, by the way, both contain information about the request and the response respectively.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=68)** And as we've already seen, this response object contains a lot of tools and methods that we can use to send back a response to the client's side.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=77)** Such as, when we say response.json product, that tells our server to send back a response with that data inside of it.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=85)** So, what we're going to do here is we're going to need to add an item to the cart but what we're going to have the user include.
>
> **[1:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=93)** What we're going to have the client side include in this request is the id of the product that they want to add to their cart.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=101)** So if we go back and take a look at our products on our backend.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=104)** If we take a look at this temp data.js file, what we're going to see is that remember that each of these items has an id.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=112)** So what we're going to have the client side do is include that id with this request and that id is going to be included as part of the request body.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=122)** So, this is something we haven't talked about yet but if you take a look at Postman and go to this body tab, well, with any request that we send, it's possible to send along extra data with the request.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=134)** And this can be used for a variety of purposes.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=137)** In our case here, we're going to use that to include the idea of the product we want to add to the cart.
>
> **[2:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=142)** So, what you're going to want to do is select body, select the body tab up here, then select raw from the radio buttons.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=150)** And over here on the side, you're going to select JSON from the dropdown.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=155)** So, what we can do now is specify a JSON payload or request body inside of this text editor here.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=162)** And what we're going to do is just give it the property id and the value for that.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=168)** We'll try doing 123.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=170)** So in other words, this request here would tell the server that we want to add the item with id 123 to our cart.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=175)** So that's what the request is going to going to look like.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=179)** So back on our server, what we're going to want to do is get that id and here's how we do that.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=184)** Remember that with our URL parameters, we were able to just say, request.params.productid.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=191)** Well, we can do something very similar with a request body.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=193)** We can just say const product id equals request.body.id.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=200)** All right, so we gave it the key id.
>
> **[3:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=203)** So that's what we use to access it here.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=206)** All right?
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=206)** And once we've gotten the product id, we're going to find the product with that id.
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=211)** So here's what that's going to look like.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=212)** We're just going to say const product equals and then just like we did up here, we're going to copy this products.fine thing and paste it there because we're doing the exact same thing.
>
> **[3:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=222)** And once we've found the corresponding product, we're going to add that to the user's cart.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=227)** Now, currently, since we have this data in another file, in our temp data file, we're not going to be able to directly modify it.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=234)** So, an easy way around that is to simply rename these up here.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=239)** So we're going to say cart items as cart items and then we'll just call it raw.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=245)** And then we'll do the same thing with products.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=246)** We'll say products as products raw.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=250)** And now what we can do is underneath there, we can just create two local variables here that we'll be able to manipulate by saying let cart items equals cart items raw and let products equals products raw.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=269)** So now that we have those, we should be able to modify these just the way we want to.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=273)** So, let's go back down to our new endpoint.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=276)** And what we're going to do is just say cartitems.push.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=280)** And we're going to add that new product to the cart.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=283)** So, as a response now, all that we're going to do is send back the updated cart items to the client.
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=289)** And we can do that just by saying response.json cart items and that should be all we need to do for this endpoint for now.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=299)** So, let's test this thing out.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=300)** What we're going to want to do is make sure, first of all that our server is running and yep, sure enough it is, we don't see any errors.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=306)** So let's go back to Postman now and send a post request, which you can select from this dropdown here and we're going to send that to /products with this request body specified.
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=320)** So what that should do is add the product with id 123 to the user's cart and we should see that added to the array that we get back in the response.
>
> **[5:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=328)** So, let's click send and oops, we get back an error saying cannot post products.
>
> **[5:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=333)** That is because we didn't send it to /cart.
>
> **[5:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=336)** So that was just a mistake on my part.
>
> **[5:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=338)** Let's try that again.
>
> **[5:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=340)** And. Uh oh, we see that we got another error.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=342)** Now this error is actually one that I expected and it's a very common one to get when you start working with request bodies.
>
> **[5:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=350)** You see that the error says cannot read properties of undefined.
>
> **[5:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=353)** And the place where that's happening is when we try and access request.body.id.
>
> **[5:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=358)** In this case, body is actually undefined.
>
> **[6:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=361)** And the reason for that is that express by default will not parse the request body for you unless you tell it to.
>
> **[6:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=368)** So, the way that we can tell it to is by saying app.use and then we're going to say express.json with parentheses after it.
>
> **[6:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=378)** And that should fix the error that we were getting.
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=381)** So let's try this again.
>
> **[6:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=382)** We're going to go back and hit send.
>
> **[6:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=383)** And sure enough, we see that we get an updated cart back from the client side.
>
> **[6:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-server-data?u=76281980&t=388)** So, we see that this now has product with id 123 added to the bottom of the array.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), const (2), function (1), include. (1), case, (1)
> **File Paths:** response.json (2), data.js (1), express.json (1)
> **Env Vars:** url (2), json (2)
> **UI Navigation:** dropdown (2), go to (1), select the (1)
> **Analogies:** such as (2), just like (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** postman (2)
> **Cross-References:** go back to (1)

#### Deleting server data
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=0)** - [Narrator] All right, so now that we have this new endpoint for adding items to the user's cart, the next thing that we're going to do is add the endpoint for removing items from the user's cart.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=9)** So what this is going to look like is we're going to add another endpoint and this is actually going to be a delete endpoint.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=17)** So we had a get endpoint for loading the cart up here, we had a post endpoint for adding items to the cart, and we're going to have a delete endpoint which is just another request type for removing items from the cart.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=30)** All right, and the actual path for this endpoint is going to be /cart and then it's going to include a request parameter, which will include the ID of the product we want to remove from the cart.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=42)** So that's what the path is going to look like.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=44)** It's going to be /cart/productid.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=47)** And now for the callback, which again is going to have request and response object arguments, what we're going to do inside of here is basically just filter our products array so that it only contains items that do not match this product ID URL parameter.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=65)** So let's get the value of that parameter here.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=68)** We're going to say const product ID equals request.params.productid.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=75)** And this is just like what we did up here for loading an individual product, by the way.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=79)** And then underneath that what we're going to do is say products equals products and then we're going to use JavaScript's built-in filter function, which allows us to get all of the items in an array that fit a certain criteria.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=92)** So sort of like products.find, but instead of allowing us to get a single product, it allows us to get all of the products that match that criteria.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=99)** So what we're going to do here is say that we only want the products whose ID does not match this product ID URL parameter.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=109)** So what that's going to look like is we're going to say product product.id does not equal product id.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=118)** Okay, and that will remove all of the products with this ID from our products array.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=124)** And actually, instead of products here, this should be cart items.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=129)** Okay, so I got a little bit mixed up there, but that should be cartItems equals cartItems.filter because the cart items are what we want to filter here, not the products.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=138)** So the next thing that we want to do is send back the updated cart items just like we did in the create endpoint up above.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=146)** So we'll say response.json(cartItems), like so.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=151)** And now, if we go back and test this out, we should be able to open up Postman and we don't need the request body here, so we can just change that to none.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=162)** We're going to change the request type to delete from the dropdown up at the top, and we're going to send this to /cart123 and this should have the effect of removing all of the items from our cart with the ID 123.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=177)** So let's click Send and what we see in the response is that, sure enough, we only have items without that ID left in our cart.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-server-data?u=76281980&t=185)** So that's how we create an endpoint for removing items from our cart.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2), const (1), function (1)
> **Code Identifiers:** cartitems (3)
> **Env Vars:** url (2)
> **Analogies:** just like (2)
> **File Paths:** response.json (1)
> **CLI Commands:** find (1)
> **Tools:** postman (1)
> **UI Navigation:** dropdown (1)

#### Rewriting the shopping cart
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=0)** - [Instructor] At this point, we have all the major endpoints for our server created.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=3)** So the last thing that we're going to do before we move on to seeing how to add a database to our application is we're going to see how to rethink the shopping cart to make it less repetitive.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=14)** So let me explain what I mean by that, first of all.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=17)** If we take a look at the current structure of our cart items array and our products array, notice that there's a lot of repeated data, right?
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=25)** We have the same data for all of the products in here, the ID, the name, the price, and so on.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=32)** And then in products, we have the same exact thing.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=35)** So in order to avoid this kind of repetition, what we're going to want to do is simplify the way we store the user's shopping carts, so that we only have one single source of truth for our data.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=48)** So essentially, what we're going to do is instead of storing the entire objects, right, instead of storing all of the product data in our cart items, we're going to change our cart items array so that it only stores the IDs of the items that are in the user's cart.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=64)** And then what we'll do is when the user wants to see their cart, we'll just populate those IDs, right?
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=70)** That is find the corresponding products for each of those IDs and send that populated array back to the user.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=78)** So here's what that's going to look like.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=79)** In our cart items array, we're just going to add the IDs of a few of our items, and we can just add two for the time being.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=86)** 123 and 345, which correspond to these two products as you can see in our products array.
>
> **[1:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=93)** And this is going to mean, of course, that we're going to have to rewrite some of our endpoints.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=98)** So let's go over to our server.js file.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=101)** And all of the endpoints basically that have to do with the cart, so this loading endpoint as well as the add item endpoint and the remove item endpoint are going to need to be slightly reworked to take into account this new format.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=115)** So what we're going to want to do here is we'll start off with our load cart endpoint.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=121)** And since our cart, remember, is now just IDs, we're going to have to actually populate each of those IDs with the product that it represents.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=129)** So here's what that's going to look like.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=131)** We're going to use JavaScript's built-in map function to map each ID to its corresponding product.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=139)** And what that's going to look like is we're going to say const, we'll just call this something like populated cart.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=146)** And then we're going to say equals cartItems.map, here's where we use JavaScripts built-in map function.
>
> **[2:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=153)** And as I said, we're going to map each ID to the product it represents, and we can do that by saying products.find.
>
> **[2:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=161)** And it's really just the same thing that we did down here.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=163)** So I'm just going to copy that and paste that inside find, and we're going to find the corresponding product like so.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=169)** The only difference is that instead of saying product ID, we're just going to change that to ID to match the name of the argument we specified right there.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=177)** So now that we have the populated cart, we just need to send that back to the user instead of cart items.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=184)** So let's remove that and replace that with populated cart.
>
> **[3:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=189)** And now, that we've done that, our cart endpoint should work once again.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=193)** So let's test this in Postman by sending a get request to /cart.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=199)** And instead of the cart IDs, what we should see if we click send is the populated cart items.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=206)** And you can test this, by the way, just by changing those IDs and seeing if the corresponding products show up for those.
>
> **[3:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=213)** But I'll leave that up to you.
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=215)** So let's now go down to our add item to cart and remove item from cart endpoints.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=220)** These ones are actually going to be a little bit easier than what we saw beforehand.
>
> **[3:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=224)** So what we're going to do is once we've got the product ID from the body, we don't even need to worry about finding the corresponding product here.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=232)** We can just push that product ID directly onto the cart items array since again it's now just an array of IDs.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=241)** Now the one thing that's going to be a little bit different is we are going to have to populate the cart items once again, just like we did up in the load endpoint.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=250)** But instead of just adding that repetitive code to each of these endpoints, we're just going to create a helper function here.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=256)** So we'll say function, and we'll call this function populateCartIds.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=264)** And what that's going to do is it's just going to take IDs as an argument, right?
>
> **[4:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=268)** IDs of products, and it's going to populate those.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=271)** So we can just take this populated cart line that we had down here in our load cart endpoint and copy and paste that into our populate cart IDs function.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=281)** And we're just going to say return, and we'll change this to ids.map.
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=289)** And then we're going to map each ID to its corresponding product.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=292)** So now instead of having to repeat that logic in all of our endpoints, we can just say something like const populatedCart equals populateCartIds.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=305)** And we'll pass those IDs as an argument here by saying cartItems.
>
> **[5:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=312)** Okay, and now we can just do that down here in our add item to cart endpoint.
>
> **[5:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=316)** So we have the product ID, we've added it to our cart items array.
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=320)** So we can now just say const populatedCartIds, or populatedCart rather equals populateCartIds, and we'll pass the cartItems as an argument there as well.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=335)** And oops, it looks like I mistyped that.
>
> **[5:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=337)** That should be populatedCart.
>
> **[5:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=339)** And then we'll send that back to the client side.
>
> **[5:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=341)** So populatedCart.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=344)** And last but not least, we're going to do the same kind of thing for our remove item from cart endpoint.
>
> **[5:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=349)** All that we're going to need to do is remove the corresponding ID that was specified as part of the URL parameter.
>
> **[5:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=356)** So now what we'll do is say, cartItems equals cartItems.filter.
>
> **[6:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=360)** And now, we just need to say ID does not equal productId.
>
> **[6:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=367)** And then once again, we'll populate it.
>
> **[6:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=369)** So I'm just going to copy and paste this line down here.
>
> **[6:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=373)** And then we'll send back the populated cart from this endpoint as well.
>
> **[6:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=378)** So now if we save this, we should be able to do those two endpoints just like before.
>
> **[6:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=382)** So let's try adding an item to our cart by sending a post request with a request body.
>
> **[6:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=389)** And let's try adding product 234 to our cart since that's not already there.
>
> **[6:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=394)** So if we send a post request to that endpoint, sure enough, we should see that that adds that item successfully and we see it populated in the response.
>
> **[6:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=403)** And now if we want to remove an item from our cart, we're just going to send a delete request with no body to /cart/.
>
> **[6:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=412)** And let's remove item 345.
>
> **[6:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=415)** If we click send now, what we'll see is that sure enough, item 345 is gone.
>
> **[7:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/rewriting-the-shopping-cart?u=76281980&t=420)** So that's how to refactor the shopping cart to make it so that our data is less repetitive.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (6), const (3), this, (2), pass (2)
> **Code Identifiers:** cartitems (5), populatedcart (4), populatecartids (3), populatedcartids (1), productid (1)
> **CLI Commands:** find (4), make (2)
> **Analogies:** just like (2)
> **File Paths:** server.js (1)
> **Env Vars:** url (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Adding MongoDB to Your Back-end

#### Why MongoDB?
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=0)** - [Instructor] At this point, we have a working front end and a working back end for our full stack application.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=6)** Now, since both the front and the back end are written in JavaScript, it makes sense to persist our data in a database that plays very nicely with JavaScript.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=14)** And for that, we need to look no further than MongoDB.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=18)** Now, MongoDB is what we call a non-relational database, which means that we can basically just push data into it without worrying too much about how that data is formatted.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=28)** And this is in contrast to MySQL and other SQL-based databases that have pretty strict requirements for the format of the data they store.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=39)** So in the case of MongoDB, MongoDB plays particularly well with JavaScript because we're able to just store JavaScript objects in MongoDB and retrieve them later.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=49)** Whereas with MySQL, that's usually not so much the case.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=53)** So anyway, that's why we're going to be using MongoDB with our project just because it works so well with JavaScript.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-mongodb?u=76281980&t=60)** So let's get started and see how we can add this to our project.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (2)
> **Code Keywords:** case. (1), let (1)
> **Env Vars:** sql (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Setting up MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=0)** - [Instructor] Now that we know what MongoDB is and what we're going to use it for, let's get an instance up and running.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=6)** And in order to do this, first of all it is possible to have a local MongoDB instance running on your computer.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=13)** But since we're currently developing in Codespaces we're going to jump straight to using MongoDB on the cloud.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=21)** Now, if you want to download the MongoDB shell and use it locally on your own computer, you can download and install it at the URL shown on the screen.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=32)** Now, setting up MongoDB in the cloud is pretty straightforward.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=35)** So what you're going to want to do is search for MongoDB Atlas, and you may need to create an account in order to access it.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=42)** It's currently free at the time of recording.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=45)** And once you get to a page that looks like this where it has all of your current projects listed out, and you probably won't have any yet, what you're going to want to do is create a new project.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=55)** So find the button that says New Project and click Create.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=59)** And what we're going to do is give our project a name.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=62)** So we'll call this something like Full Stack Vue.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=67)** And then we're going to click next.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=68)** And then it's going to ask us to add members to our database.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=72)** And we're actually just going to skip that for now and click Create Project.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=78)** All right, so now that we've created that new project, what we're going to have to do is add a database to our project.
>
> **[1:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=84)** This is just going to be a running instance of MongoDB that we'll be able to communicate with from our server and do things like store our data inside of it, manipulate our data, et cetera.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=95)** So what you're going to want to do next is click on this build a database button, and then you're going to want to select the free option all the way over to the right hand side here and make sure they haven't switched that around on you.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=108)** You're just going to want to look for the word that says free, obviously.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=111)** And let's click the create button here and that will create a new shared cluster for us.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=117)** So it's going to give us a few options.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=120)** What I'm going to do is just leave AWS selected here.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=124)** And then for the region you're going to want to select the geographic region that's closest to you.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=129)** So for me, that's going to be North Virginia.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=133)** I'm going to leave that selected and click Create Cluster.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=138)** All right, so that might take a little while.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=140)** And you're going to see this M0 cluster provisioning thing down in the corner.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=145)** That just means that MongoDB is currently configuring your cluster and it's about to run it.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=152)** All right, and once you see the message that says your cluster has finished provisioning, we can now start working with our database.
>
> **[2:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=158)** So what we're going to want to do is connect to our database that we just created from inside Codespaces.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=165)** And specifically, we're going to want to open up a terminal and connect to it from there.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=169)** So you might just want to create a new terminal by clicking this plus sign.
>
> **[2:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=174)** And in order to connect to MongoDB from inside a terminal, we're going to have to install the Mongo shell command line interface.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=182)** And in order to do that, there are different ways you can do this, of course, but the easiest way is going to be to use a tool called Homebrew.
>
> **[3:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=189)** So you're going to want to search for this tool.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=191)** Currently the URL is brew.sh.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=194)** And what it does is it just gives you this command that you can copy and paste into your terminal.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=200)** So I'm going to do that here and run it.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=202)** And that will install Homebrew in your Codespaces instance.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=205)** So you're just going to want to hit return or enter.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=208)** And it might take a little while to complete.
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=211)** So while that's downloading and installing for us, what we're going to want to do is make a few changes to the data that we'll be adding to our database.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=220)** So remember that earlier when we added data to our backend in the form of this temp-data.js file, we commented out all of the image name properties for our products.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=231)** Now, the reason that we did this is because the images are going to work a little bit differently on the backend than they are when you just store the images on the front end.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=241)** All right, so what we're going to need to do here is change the image name properties for all of our products so that instead of imageName, it's going to be imageUrl.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=250)** And the value for this is going to be a pretty consistent thing for all of our images.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=255)** What it's going to be is /images/ and then the name of the file.
>
> **[4:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=261)** So for our basil bottle olive oil here, it's going to be /images/basil-bottle.webp.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=271)** And then we'll do the same thing for the rest of our products.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=276)** And once we've done that we're going to remove all of the imports up at the top since we no longer need to do that.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=283)** And now that we've done that, hopefully Homebrew is done installing, and it looks like it is.
>
> **[4:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=287)** So one thing that you're going to need to make sure you do in order to be able to run the correct commands here is, in all of this stuff that Homebrew printed out while it was installing, you'll see this comment that says, run these three commands in your terminal to add Homebrew to your path.
>
> **[5:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=303)** You're just going to want to copy all of those and run them in your terminal.
>
> **[5:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=307)** And there we go, we're going to paste them and hit enter.
>
> **[5:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=311)** And now we should be able to run the command brew.
>
> **[5:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=314)** And you should see basically all of the options printed out.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=319)** Okay, if you see output saying something like brew command not found, then something didn't go quite right during the installation process and you should try it again.
>
> **[5:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=328)** Cool, so now that we have Homebrew we're going to use Homebrew to install the Mongo shell tool in our terminal.
>
> **[5:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=334)** And we can do that by saying brew install mongosh, and we're going to hit enter.
>
> **[5:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=341)** And that will take another minute or two to install that tool.
>
> **[5:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=345)** Now, if you don't already have a MongoDB Atlas account, you're going to want to follow the URL on the screen to MongoDB Atlas and create one.
>
> **[5:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=357)** And once that finishes, you should be able to run the command mongosh, and you'll see some sort of output there, even if it's an error.
>
> **[6:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/setting-up-mongodb?u=76281980&t=365)** So what we're going to do next is use this tool to connect to the Mongo instance that we created in Mongo Atlas.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (4), brew (4), make (3), find (1), aws (1)
> **Tools:** terminal (7), command line (1)
> **Code Keywords:** let (2), this, (2), for, (1), while. (1), interface (1)
> **Prerequisites:** install (6)
> **Env Vars:** url (3), aws (1)
> **File Paths:** brew.sh (1), temp-data.js (1)
> **Code Identifiers:** imagename (1), imageurl (1)
> **UI Navigation:** select the (2)

#### Connecting and adding data to MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=0)** - [Instructor] All right, so now that we've installed the Mongo SH tool and set up a MongoDB instance on MongoDB Atlas the next thing that we're going to do is connect to MongoDB Atlas and insert some data into it that our application will be able to use.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=14)** So the first thing that we're going to have to do is open up the MongoDB Atlas tab that we had open.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=21)** And inside the project that we created called Full Stack View, you're going to want to create a new username and password for your database, right?
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=30)** So this is going to be the username and password that our server is going to end up using to connect to MongoDB.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=37)** So what you're going to want to do is just enter in a username of some sort.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=40)** It doesn't really matter what it is, as long as you can use it on your server.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=45)** So I'm just going to call this something like, Full Stack View Server.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=50)** And for the password, you're going to want to enter in something there.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=53)** And in fact, I'd recommend using Auto Generate Secure password.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=57)** But for now, just to make things easier for me, since I'm going to be sharing my screen this whole time, I'm just going to put in a very simple password that I will make sure to go back and change later.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=68)** So once you've entered that, you're going to want to click Create User.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=73)** And once we've created that user, we're going to use that user to connect with the Mongo Shell tool.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=79)** But before that will actually work, we're going to need to go into the Network Access tab here, over on the left-hand side.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=87)** And in order to allow ourselves to connect from Codespaces, we're going to need to allow ourselves to connect from anywhere, so let's click Add IP Address.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=95)** And what you're going to want to do is click on this option Allow Access from Anywhere, and then we're going to click Confirm.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=103)** And that should make it possible to connect from Codespaces.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=106)** So now that we've done that, let's go up to our Database tab at the top.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=111)** All right, and inside this database that we just created here, you're going to want to click on the Connect button, which will provide us with some very handy copy and paste instructions for connecting to the database from our Codespaces shell.
>
> **[2:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=125)** So you're going to select Connect with the MongoDB Shell.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=129)** That's the first option here.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=131)** And that's going to give you some instructions.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=134)** First of all, obviously it says Brew Install Mongo SH.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=138)** We did that already.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=139)** So down here, you're going to want to copy this command that starts with Mongo SH, and then it has a big url.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=145)** We're just going to copy that.
>
> **[2:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=148)** And now, we're going to go back over to our Codespaces terminal, and paste that command we just copied.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=155)** So notice here that it has the username specified that we just created.
>
> **[2:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=160)** And once we hit Enter, it's going to ask us for our password.
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=164)** So that's just going to be the password that you entered beforehand, whatever you had there.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=169)** And if you forgot it already, then you're going to have to go back and create another user with another password.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=175)** So let's hit Enter now.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=176)** And what you should see is that that will successfully connect to MongoDB.
>
> **[3:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=181)** And you'll now see that there's this different Shell prefix here that says, Atlas, blah, blah, blah, My First Database.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=186)** All right, so we are now inside the database that we created on MongoDB Atlas.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=191)** So the next thing that we're going to do, as I said, is we're going to insert data into this database.
>
> **[3:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=197)** And in order to do that, the first thing that we're going to want to do is switch to the database we want to use.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=202)** So all we have to do in order to make that happen is say Use.
>
> **[3:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=207)** And then we're going to type in a database name, right?
>
> **[3:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=210)** This is really just for organizational purposes.
>
> **[3:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=213)** So what we're going to do is just call it something like Full Stack View-DB, and hit Enter.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=219)** And you should see that it says Switched to DB FSV DB.
>
> **[3:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=223)** So the Use command in the Mongo DB Shell is how you switch from one database to another.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=229)** And now that we're inside our specific project database that we just created, we're going to insert some data.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=235)** So what we're going to want to do is take all of the data that we've had hard coded in our backend, and store it in our database.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=243)** And as we've already mentioned, this will allow us to persist our data in a more permanent way.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=249)** So we're going to copy all of the products data.
>
> **[4:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=251)** And you're just going to want to copy the square brackets and everything inside of them.
>
> **[4:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=254)** So let's go and get those.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=256)** We're going to copy that.
>
> **[4:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=258)** And then in our shell, what we're going to do is say DB.products.insertmany.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=266)** And in parentheses there, we're going to paste everything that we just copied.
>
> **[4:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=270)** And we're going to select Paste here.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=273)** And then we're going to make sure to close the parentheses and hit Enter.
>
> **[4:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=278)** And what we should see is that it outputs this object that says Acknowledged True, which means that everything went well with the command we just ran in the shell.
>
> **[4:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=287)** And then underneath that we see inserted IDs.
>
> **[4:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=290)** These are the random IDs that MongoDB has automatically assigned to each of the products that we just inserted.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=297)** So that command that we just ran, right, db.products.insertmany, that's going to have the effect of inserting many documents.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=305)** And these are called documents, by the way, when they're inside MongoDB.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=310)** That's going to have the effect of inserting many documents into a new collection called Products, okay?
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=317)** All right, so now that we've inserted all of our products into MongoDB, the next thing that we're going to want to do is insert our shopping cart data into MongoDB.
>
> **[5:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=326)** And the way that we're going to do this is a little bit different than the way that we've been doing it in our temporary data.
>
> **[5:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=332)** And what we're going to do is instead of inserting this data into a collection called Cart, we're going to create a new collection called Users, which will just contain some random user IDs.
>
> **[5:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=343)** And as part of the data in that collection, we'll have an array of product IDs that that user has added to their carts.
>
> **[5:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=351)** So don't worry if that sounds a little bit confusing.
>
> **[5:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=353)** All that that's going to look like for now is we're going to say DB.users.insertone.
>
> **[6:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=360)** Okay, so this is like insert many, but when we only want to insert a single record.
>
> **[6:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=366)** And the user that we're going to insert is going to have an ID of something like 12345.
>
> **[6:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=372)** And it's also going to have a property called Cart Items, which will be the value that we had up here.
>
> **[6:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=380)** So that can just be an array with 123 and 345 inside of it.
>
> **[6:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=385)** And that's going to be the user we'll insert.
>
> **[6:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=387)** So let's close the curly braces and the parentheses and hit enter.
>
> **[6:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=391)** And we should see a similar output there that says Acknowledged True and Inserted ID.
>
> **[6:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=395)** So now that we have our user inserted and our products inserted, we should be able to move on to working with our database in our node server, instead of just working with this fake temporary data that we've been working with before.
>
> **[6:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=410)** So before we move on, I just wanted to mention a few more commands that you can use in the MongoDB Shell to help you navigate.
>
> **[6:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=416)** If you want to see all of the items that are currently in a given collection, well, that's pretty easy to do.
>
> **[7:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=423)** All you have to do is say DB. and then the collection name, so products, for example, and then .find.
>
> **[7:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=431)** All right, and you're going to pass an empty object to that as an argument.
>
> **[7:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=435)** And if you hit enter, that's going to show you all of the items that are currently in that collection.
>
> **[7:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=441)** All right, so that's just an easy way to see what data your database contains.
>
> **[7:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=444)** And we can also say DB.users.find.
>
> **[7:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=450)** And what we'll see is that that will show us all of the users in our users collection.
>
> **[7:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/connecting-and-adding-data-to-mongodb?u=76281980&t=455)** So anyway, now that we have our Mongo database set up, we should be able to link up our Express app to it.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (6), make (5), find (2), brew (1), node (1)
> **Code Keywords:** let (5), switch (2), pass (1)
> **UI Navigation:** click on (2), switch to (1)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** fsv (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)

#### Adding MongoDB to a Node.js server
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=0)** - [Instructor] Now that we've inserted all of our data into our Mongo database instance on Mongo Atlas, the next thing that we're going to do is see how to connect to MongoDB and load data on our Express server.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=13)** So let's open up our server file, right?
>
> **[0:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=15)** That's going to be inside backend in source.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=18)** And what we're going to need to do first is install what's called the MongoDB driver, right?
>
> **[0:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=24)** This is just an NPM package that allows us to connect to MongoDB and provide some helpful methods and functions for doing so.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=32)** So what we're going to do is inside our backend, and again, you're going to want to make sure that you're in your backend directory when you run this command.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=39)** You're going to want to run npm install, there we go.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=44)** And the name of this package is called mongodb.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=48)** So let's hit enter and that will install that package for us.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=51)** And once it's done installing, we're going to import something from that package up at the top of our server file.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=58)** Now, the way that this works in MongoDB is we're going to import something called MongoClient, which is just a class that we can create new instances of, as you'll see.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=70)** And that's going to be imported from mongodb like so.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=74)** And what we're going to do now is toward the top of our server file, before we define our Express app and any of the endpoints, we're going to create a new instance of that MongoClient class we just imported by saying, const client equals new MongoClient.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=94)** And the way that this works now is we have to pass the URL to this MongoClient constructor of the Mongo database we want to connect to.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=102)** So this is actually pretty similar to what we did in the Mongo shell.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=106)** And what you can do in order to find this URL again is go over to database deployments, and we're going to click on connect for our full stack view cluster again.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=116)** So let's click connect there.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=118)** And now instead of clicking connect with the MongoDB shell, we're going to say, connect your application.
>
> **[2:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=125)** And now you should see that it says driver, Node.js, and the version says 4.1 or later.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=130)** And down here you'll see the URL that you want.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=133)** So let's copy that, and we're going to go back to our server and in back ticks, right?
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=139)** That's a little bit different from single quotes because it allows you to insert values into strings in JavaScript.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=145)** What we're going to do is paste that URL.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=147)** And yes, it is a rather lengthy URL.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=149)** So what some people actually like to do is define the URL separately by saying const url equals, and let's just do that here to make it more readable.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=157)** We're going to cut that URL out and paste it there next to the variable name.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=163)** And notice that this includes the username that we defined before as well as the password.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=169)** All right, now the first thing you should know about this password is what you don't want to do is just type your password into here and then publish this to GitHub.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=179)** If you do want to use GitHub for this project, you'll definitely want to make sure that it's a private GitHub repo and not a public GitHub repo.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=188)** This is just an option that you can select while creating a new repo on GitHub.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=193)** Now, this is my password here.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=195)** Again, I'm going to be very careful to shut down my MongoDB instance after I'm done recording.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=201)** Now, if for whatever reason you need to use a public GitHub repo and you can't use a private GitHub repo, what you want to do instead is assign this password to an environment variable and reference only the environment variable from inside this string.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=217)** So I'll show you how to do that later on when we see how to publish our application.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=221)** But for now, I'm just going to put the password into there.
>
> **[3:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=224)** So if you do the same thing and you're following along, just make sure that you don't commit your code and then publish that to GitHub.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=231)** Cool, so now that we have our URL and client defined, we're going to insert our URL and pass that as an argument to our MongoClient constructor.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=239)** All right, and now that we have this client thing here what we're going to want to do is allow ourselves to connect to it each time we need it.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=247)** So basically, inside each of our server endpoints we're going to need to use that client object to create a connection and then we can use that open connection to make requests to MongoDB.
>
> **[4:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=258)** So what we're going to need to do, and I'll just show this inside the hello endpoint here for the time being, what we're going to need to do is say await client.connect.
>
> **[4:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=270)** Okay, and we're going to use the async and await keywords here.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=273)** Don't worry if you haven't worked with those.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=275)** It's pretty straightforward.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=276)** And once we've connected to the client, we can get a reference to the database that we want by saying const db equals client.db and then the name of the database we want to work with.
>
> **[4:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=288)** In that case, remember, that's going to be fsv-db.
>
> **[4:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=293)** And this DB object is very similar to the DB object that we were able to use in the Mongo shell.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=299)** We can now use it by saying something like db.collection.
>
> **[5:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=304)** And if we wanted to access, let's say the products collection, we could say products, and then we can use .findOne or .find in order to find documents in that collection that match a certain piece of criteria.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=319)** So if we wanted to find all of the products in the products collection, we could just say db.collection products.find.
>
> **[5:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=326)** And the way that we could get the result of that would be by saying const products equals await.
>
> **[5:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=333)** And since this is asynchronous as well, then db.collection.find.
>
> **[5:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=337)** And as a matter of fact, the result of this find operation in Node.js doesn't give us an array, which we actually want an array.
>
> **[5:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=345)** So what you can do to convert it automatically is you can add .toArray on the end.
>
> **[5:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=350)** And that is important for us in this case.
>
> **[5:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=353)** So at this point, we have all of our products.
>
> **[5:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=356)** So what we're going to do is send those back to the client as response.
>
> **[5:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=359)** So we'll say response.send products.
>
> **[6:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=362)** And you might have noticed that the await keywords have this little red underline, and that's just because whenever we use the await keyword, it has to be inside a function marked with the async keyword.
>
> **[6:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=373)** That's just how those keywords work in JavaScript.
>
> **[6:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=376)** So if we add that to the callback function, you'll see that those go away.
>
> **[6:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=380)** And we should now be able to send a request to this hello endpoint by going back to Postman, changing the request type to get, and sending our request to /hello.
>
> **[6:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=391)** So let's click send now.
>
> **[6:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=394)** And oops, it looks like it's not working because we need to start our server.
>
> **[6:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=397)** So let's start our server here by saying npm run dev.
>
> **[6:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=401)** All right, that's the script we defined earlier.
>
> **[6:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=404)** And oops, it looks like we got an error of some kind.
>
> **[6:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=407)** I believe that's just because I left this extra greater than sign in there.
>
> **[6:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=410)** So let's remove that.
>
> **[6:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=412)** And now we should see that it says server is listening on port 8000.
>
> **[6:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=415)** So let's try this one more time.
>
> **[6:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=418)** We're going to go back to our Postman, click send, and sure enough, we should see all of our products from our products collection displayed as part of the response.
>
> **[7:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-a-node-js-server?u=76281980&t=427)** So that's how to connect to MongoDB from inside an Express application and make simple queries to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), await (5), const (4), pass (2), private (2)
> **CLI Commands:** find (7), make (6), mongo (5), npm (3), node (2)
> **Env Vars:** url (9), npm (1)
> **Tools:** github (8), postman (2)
> **Exercise Files:** github repo (4)
> **Prerequisites:** install (3)
> **File Paths:** node.js (2)
> **Code Identifiers:** findone (1), toarray (1)

#### Adding MongoDB to GET endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=0)** - [Instructor] Now that we've seen how to connect to MongoDB from inside an Express application, the next thing that we're going to do is convert all of our get end points so that they load their data from MongoDB instead of using the in-memory data, right?
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=14)** The temp-data file that we've been using so far.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=18)** All right, now the good news is that what we just saw in this hello endpoint as a demonstration is actually the exact way that you load all of the products from our database.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=28)** So what we can do is replace the logic inside our products callback with what we had inside of our hello endpoint.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=37)** And as a matter of fact, we can just delete our hello endpoint for now to save space since we are not using it anymore, right?
>
> **[0:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=43)** That was just for demonstration purposes.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=45)** So let's paste all of its contents inside our app.get products callback.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=51)** And one thing to notice is that you're going to have to add the async keyword to that callback, just like we did for our hello endpoint, because we're using the await keyword inside of here.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=61)** And now, as I said, we can delete the hello endpoint all together just to keep our code clean.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=68)** So now that we've converted our get products endpoint over to use MongoDB, we should be able to do pretty much the same thing for our cart endpoint, right?
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=77)** Our load cart endpoint and our get individual product endpoint, although the exact implementation here is going to look a little bit different.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=85)** So for our load cart endpoint, what we're going to want to do first is make a slight change to the path here to reflect the data change that we made in our database, right?
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=95)** Remember that instead of inserting our cart into a cart collection of some sort, we added a user's collection, where the users themselves had a cart property that contained the productIds they had in their cart.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=109)** So what this is going to look like is we're going to change this from just /cart to /users/, and then we're going to use a URL parameter here called :userId/cart.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=124)** So in other words, what this path is reflecting now is that we're loading a user by ID and getting the items in their cart, all right?
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=132)** And you'll see why this is so beneficial when we move on to connecting our front end and back end.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=137)** All right, so anyway, now that we have this userId, we can use that to load the corresponding user from the database and get the items in their cart.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=146)** So what this is going to look like is we're going to say const user =, and we're going to use that client thing again.
>
> **[2:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=153)** And actually, we'll need to connect to it just like we did up above by saying await client.connect.
>
> **[2:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=160)** And then down here, we'll say const user = await client.connect, et cetera.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=165)** And, oops, actually, we'll remove this const user thing and move that down to beneath where we have our database.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=172)** So now, we can just say const user = db.collection, users, all right?
>
> **[2:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=178)** And one thing that I don't think I've pointed out yet is that unlike in the mongo shell, where we can just say db.users, right?
>
> **[3:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=185)** The name of the collection.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=187)** In the MongoDB driver in an Express app, we have to actually say db.collection, and pass the name of the collection as an argument.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=195)** All right, so anyway, we're going to say db.collection, users, .findOne, and we're going to want to find the user whose ID matches this userId URL parameter.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=206)** So what that's going to look like is we're going to say id:, and then, of course, we'll need to get the value of that userId by saying request.params.userId, and that will give us the corresponding user.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=219)** And one thing that we're also going to have to add is the await keyword before this since it's asynchronous.
>
> **[3:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=224)** Make sure you don't forget that or you'll run into some strange errors.
>
> **[3:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=228)** And we're also going to add the async keyword to this callback.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=232)** Cool, so now that we have the user from our database, we're going to need to populate the user's shopping cart from the products collection in our database, all right?
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=241)** And that's going to be a little bit more difficult than what we were doing originally because what we're going to have to do is actually convert this populateCartIds function from above into an asynchronous function.
>
> **[4:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=254)** So let's find that function up here.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=256)** We're going to say async function populateCartIds.
>
> **[4:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=260)** And what we're going to have to do here is change this to reflect that we're no longer working with just a basic in-memory array called products, we're going to have to actually find the corresponding product for each id.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=271)** Now, this is going to get a little bit confusing because we're going to be working with promises directly.
>
> **[4:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=277)** So don't worry too much about the details, just know that this will work.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=281)** So what we're going to do, first of all, is we're going to wrap this ids.map thing in a call to Promise.all, right?
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=289)** So, basically, this is going to wait for all of these operations to complete.
>
> **[4:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=294)** And what that's going to look like is we're going to say ids.map, and we're going to map each ID to a call to MongoDB.
>
> **[5:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=301)** All right, so we're going to get that client in just the same way inside this function.
>
> **[5:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=307)** All right, so we say await client.connect, and then we get the db.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=310)** And then inside here, we're going to say ids.map.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=313)** And for each id, we're going to say db.collection, products, .find One, and we're going to find the product by that id property, all right?
>
> **[5:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=324)** And notice that we don't have to use await here because of this Promise.all.
>
> **[5:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=328)** Again, don't worry about the details here.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=331)** This is a slightly confusing piece of code even for people who really know what they're doing.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=335)** So what we're going to do is just leave it the way it is and use this populateCartIds helper function from now on.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=342)** So now that we have that, all that we're going to need to do to populate our user's cart IDs is add await.
>
> **[5:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=348)** And then instead of passing cartItems, we're going to say user.cartItems, all right?
>
> **[5:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=356)** Remember, that's where we stored the itemIds in our database.
>
> **[6:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=360)** And now that we have the populatedCart, we should be able to send that back to the user.
>
> **[6:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=364)** So let's test this endpoint out now.
>
> **[6:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=367)** We're going to want to send a get request to /users/12345.
>
> **[6:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=373)** Remember that that's the ID we gave to the user we inserted into the database, and then we're going to say/cart.
>
> **[6:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=380)** And if we hit Send now, what we should see, if everything goes well, is that the response will contain the two products that were in the user's cart.
>
> **[6:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=390)** And another thing to notice is there's also this _id property in addition to the regular id property we added ourselves.
>
> **[6:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=399)** That's just the random ID that MongoDB automatically assigns to things that we insert into it.
>
> **[6:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-mongodb-to-get-endpoints?u=76281980&t=405)** So anyway, that's how to load data from MongoDB, as well as populate the cart IDs using MongoDB.

> [!info]- Semantic Content
>
> **Code Keywords:** await (7), function (6), const (4), let (3), async (3)
> **Code Identifiers:** userid (5), populatecartids (3), cartitems (2), productids (1), findone (1)
> **CLI Commands:** find (5), make (2), mongo (1)
> **Env Vars:** url (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** just like (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Loading individual products from MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=0)** - Alright, so we've added MongoDB to two of our three load endpoints.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=5)** So the last thing that we're going to do here is see how to add MongoDB to our endpoint for loading individual product data.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=12)** So what this is going to look like it's going to be very similar to what we've seen elsewhere.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=17)** We're going to start off by connecting to MongoDB and selecting the database.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=21)** So I'm just going to copy those lines from our cart endpoint and paste them inside here.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=26)** And then of course, we're also going to need to add the async keyword to our callback function.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=32)** And now that we've done that, what we're going to do is after we get the product ID from the URL parameter instead of finding the product in our array which was the old way of doing things when we were still storing our database in a file, we're going to say const product equals and then we'll say await db.collections.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=54)** And that's going to be product and actually it's not db.collections that's db.collection singular.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=60)** And then what we're going to do is say .findone and we're going to find the product whose ID matches the product ID URL parameter.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=71)** And once we've done that, we should be able to send back our product to the client by just saying, response.json product.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=78)** So let's test this endpoint out now by sending a get request to /products/123.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=86)** And if we click send here, we should see, oops, so looks like we got null.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=91)** And I believe that is because I put product instead of products, right?
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=96)** The name of our collection is products.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=98)** So let's try that again.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=100)** We're going to click send, and sure enough we see that the product with ID 123 is sent back as part of the response.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=109)** Alright, so now that we've converted all three of our load endpoints over to use MongoDB, you're probably wondering if there's a slightly less repetitive way of connecting to MongoDB and getting a reference to our database.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=121)** And the answer to that is yes.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=123)** So what we can do is instead of having to add these same two lines to each of our callbacks that we want to use MongoDB inside of, we can actually just connect to MongoDB when we set up our server.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=136)** So what that's going to look like is we're going to surround all of our server side code, right?
>
> **[2:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=142)** All of the endpoints that we define, the app that we create, et cetera, with an asynchronous function that will call something like start, right?
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=151)** Or you could say execute, you could say serve, whatever you want to call it.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=156)** And we're going to put all of our code inside of that right?
>
> **[2:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=161)** So that'll include, again, all of our endpoints as well as the app.listen call, and we're going to paste those inside this function and then we can adjust the indentation by selecting all of these and hitting tab.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=175)** And actually this MongoDB stuff should be in there as well so I'm going to copy that and put that up at the top of our function.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=184)** And there we go.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=185)** So now that all of this code is inside an asynchronous function what we can do is just move these two lines outside of our endpoints so that we only connect to MongoDB once and get the reference to our database once and for all.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=201)** So that allows us to remove these two lines from all of our endpoints down below.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=206)** And what we can do is just take a look at all of those, right?
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=209)** Including this populate cart IDs async function which we can just remove those two lines from.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=216)** And we can also remove them from our load cart endpoint as well as our individual product endpoint.
>
> **[3:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=224)** So let's try this again.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=225)** What we're going to want to do is just make sure our server is running, first of all.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=229)** And actually we see that it's not, right, we don't see the server is listening on port 8,000.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=234)** And that's because, well, we forgot to call this start function.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=239)** So what we're going to want to do is scroll down to the bottom and say, start with parentheses after it.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=245)** And that will make sure that our start function is actually called, our server is created and set up and our app starts running.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=252)** So sure enough, we see that once again, it says server is listening on port 8,000.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=257)** So let's go back to Postman and try sending a request to our, well, really any of those endpoints again, right?
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=264)** We should be able to send one to product/123.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=266)** And sure enough, we see that we get the same result.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=269)** And if we try and load all of our products as another example we see that we get all of our products again, too.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=275)** So anyway, that's how to make our MongoDB connection code less repetitive is by connecting to it once inside this async function that we created.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-individual-products-from-mongodb?u=76281980&t=285)** And then just using that connection in our endpoints instead of having to establish a new connection on each and every request.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (4), async (3), const (1), await (1)
> **CLI Commands:** make (3), find (1)
> **Ports:** port 8 (2)
> **Env Vars:** url (2)
> **Prerequisites:** set up (2)
> **File Paths:** response.json (1)
> **Cross-References:** go back to (1)
> **Tools:** postman (1)

#### Creating data in MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=0)** - [Instructor] All right, so now that we've converted our get endpoints over to use MongoDB and done a little bit of cleanup, we can now move on to converting some of our create endpoints over to MongoDB.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=11)** And as a matter of fact, we only have one create endpoint, and that is the endpoint for adding items to a user's cart.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=20)** So what we're going to want to do here is make the same sort of change where we add the new item ID to the user's cart.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=28)** But obviously, this is going to be a little bit different because once again, we're changing the structure of the data we're working with, right?
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=35)** So just like up here, when we loaded the user's cart, we had to actually load the user and take a look at their cart items and use this populateCartIds function.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=46)** We're going to have to do a similar kind of thing down here.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=48)** And the first thing that we're going to do actually is change the path to /users/userID.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=57)** That's going to be another UR? parameter there /cart.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=62)** Okay, and that will make it easier to find the user when we know their ID from the parameter there.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=67)** So at the top here, we're going to get the user ID parameter value by saying const userID = request.params.userID.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=77)** And now that we have that, we're going to use the user ID to load the corresponding user and update their cart items property.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=85)** So the way that we're going to update the user is by using a MongoDB method called updateOne.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=92)** So very similar to how we were able to say find one, we're going to use updateOne to update a single document in MongoDB.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=101)** So what that's going to look like is we're going to say await DB.collection users.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=108)** And by the way, in order to use await, we have to add async to this callback as well.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=114)** And then we're going to say .updateOne.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=117)** Now, the updateOne method in MongoDB is a little bit different from some of the other methods because the other methods only take one argument, which is what's referred to as a filter object.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=128)** And as we've seen, this filter object allows us to load only a product whose ID matches a given value, for example.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=137)** So with updateOne, we have that same filter object as the first argument, right?
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=141)** We can say ID userID, and that will find the user with that ID, but then it also takes a second argument which is an object that specifies how we want to update the record that matches this filter.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=157)** All right, so what this second object looks like is it's going to have a property called $push and the value for that is going to be cartItems.
>
> **[2:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=171)** Well, an object that is with a property called cartItems.
>
> **[2:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=174)** And the value for that is going to be the new product ID we want to add to the user's cart.
>
> **[3:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=180)** And what this is saying is that we want to push the product ID onto the user's cartItems property.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=187)** So this little dollar sign push thing just tells MongoDB what type of update we want to perform.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=193)** In this case, we're adding the product ID onto an array called cartItems.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=198)** And there are other ones, by the way, as well.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=200)** In fact, one that would be very useful for us if we want to avoid having duplicates in the shopping cart, we could change this push operator to $addToSet.
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=215)** And what that does is something very similar to push except it doesn't add duplicates.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=219)** So if a user tries to add an item to their cart that was already in there, it's going to remain the same, right?
>
> **[3:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=226)** It's not going to change.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=227)** All right, so that's just one example out of the many things you can do with MongoDB update queries.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=234)** But this will add the product ID to the user's cart items without duplicates.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=238)** So now that we've done that, right, the user should be updated in our database.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=243)** So what we're going to do is load the user and send the users updated cart items back to the client side.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=250)** So what that's going to look like is we're going to, first of all, remove this cartItems.push thing since we're no longer doing things that way.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=257)** And we're going to load the corresponding user and populate the user's cart IDs.
>
> **[4:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=263)** And actually, this is the same logic as what we have up here where we load the cart in the first place.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=269)** So if you want to, we can just copy this logic and paste it down here in our post endpoint instead of what we had before.
>
> **[4:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=278)** So sure enough, we get the user, we populate the user's cart, we send that back to the client.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=283)** So now that we have this endpoint updated, let's go back over to Postman and test this out.
>
> **[4:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=290)** We're going to try and add an item to the user's cart by sending a post request to /users/12345, right?
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=299)** The fake user ID we came up with and put into our database.
>
> **[5:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=303)** And then /cart.
>
> **[5:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=304)** And we're going to add a body here with ID 234, and that should add the ID 234 to the user's shopping cart.
>
> **[5:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=311)** So let's try this out.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=313)** We're going to click Send, and sure enough, what we'll see is that this new item will be at the bottom of our cart.
>
> **[5:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=325)** And another thing to notice is that if we try and click Send again, well, that's not going to add a duplicate because of the add to set operator that we were using in our code.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=335)** So, all right, so if you want to test this out with other IDs, right, maybe we want to add item 456 to our cart, if you click Send, you should see that that item will be added to our cart as well.
>
> **[5:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=347)** And sure enough, there it is.
>
> **[5:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-data-in-mongodb?u=76281980&t=348)** So that's the basics of adding items to our cart using MongoDB.

> [!info]- Semantic Content
>
> **Code Identifiers:** updateone (5), cartitems (5), userid (4), populatecartids (1), addtoset (1)
> **Code Keywords:** await (2), let (2), function (1), const (1), async (1)
> **CLI Commands:** find (3), make (2)
> **Analogies:** similar to (2), just like (1), for example (1)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### Deleting data in MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=0)** - [Instructor] All right, so the last endpoint that we're going to convert over to use MongoDB is going to be the endpoint for removing products from a user's cart.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=8)** Now, this one's going to be pretty straightforward, and it's actually going to be very similar to the endpoint for adding items to the user's cart.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=16)** So the first thing that we're going to want to do is change the path so that it reflects the updated data structure, very similar to what we did with our app.post endpoint and our app.get cart endpoint.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=30)** We're going to say /users/, and then the userID whose cart we want to remove the item from.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=38)** So, basically, what this path means is if we send, let's say, a request to /users/12345/cart/123, that would mean we want to remove product 123 from user 12345's account.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=55)** All right, so what this is going to look like is we're going to start off by getting the value of both the URL parameters from the path.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=61)** And we're already getting the productId, so let's also get the userId by saying const userId = request.params.userId.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=72)** And then we're going to use MongoDB's updateOne method again, just like we did in the add to cart endpoint, except what we're going to do is we're going to remove that productId from the user's cart instead of adding the ID to the user's cart, like we did up in our add to cart endpoint.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=88)** So, here's what this is going to look like.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=90)** We're going to say await db.collection, users, .updateOne, and you're probably seeing this little underline for await.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=101)** We're going to add async to our callback function here, and that should get rid of it.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=106)** And what we're going to want to do is update the user whose ID matches the userId request parameter.
>
> **[1:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=113)** And for the actual update object, what we're going to do is instead of saying add to set, we're going to say $pull.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=122)** And what that's going to do is it's going to tell MongoDB that we want to remove an item from an array property.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=129)** So what we're going to do is say $pull, and the property we're working on is cartItems here, and we want to remove the productId from that cartItems array.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=140)** So that should update the user accordingly.
>
> **[2:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=144)** And once we've done that, we're going to want to do pretty much the same thing that we did up in our add to cart endpoint.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=150)** We're going to load the updated user, populate the cart IDs, and send that populated cart back to the client side.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=157)** So let's just replace the code at the bottom of our remove from cart endpoint with the bottom three lines of our add to cart endpoint.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=165)** And now that we've done that, we should be able to test this out.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=168)** So let's go back to Postman.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=170)** And, well, let's start off by getting the cart first, just so we can see what our cart looks like.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=176)** So we're going to send a GET request with no body to /users/12345/cart, click Send.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=185)** And we should see all of the products currently in our cart.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=188)** So let's try just removing one of these by sending the correct request.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=192)** Let's try removing product 345.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=195)** So the correct request for that is going to be a DELETE request, sent to /users/12345/cart/345.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=206)** Okay, and if we hit Enter, sure enough, what we'll see is that 345 is no longer in there, and we're left with only three items in our cart.
>
> **[3:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=214)** So that's how to convert the remove from cart endpoint over to use MongoDB.
>
> **[3:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=218)** And at this point, we have all of our major endpoints converted to use MongoDB instead of an in-memory JavaScript array.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=225)** So what we can actually do is just remove these cartItems and products.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=230)** And we can also remove this import since that's no longer used.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=234)** And in fact, we can even go in and remove the temp-data.js file.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=239)** So I'm just going to say Delete Permanently for that one and then Delete.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=243)** And that's all we need to do.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/deleting-data-in-mongodb?u=76281980&t=245)** So, at this point, our server is fully converted to use MongoDB.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (3), await (2), from. (1), const (1)
> **Code Identifiers:** userid (5), productid (3), cartitems (3), updateone (2)
> **API Endpoints:** get  (1), delete  (1)
> **Env Vars:** url (1), delete (1)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** temp-data.js (1)
> **Cross-References:** go back to (1)
> **Tools:** postman (1)


### 5. 4. Connecting the Front- and Back-end

#### Introduction to the Axios library
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=0)** - So far in this course, we've used Vue, Node.js, Express, and MongoDB to build a full stack e-commerce site.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=8)** However, even though our site has a working front end and backend, those two sides aren't communicating with each other yet.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=15)** So now it's time to bring them together into a single full stack application.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=20)** You see, so far we've been using Postman to test our backend as we developed it, right?
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=25)** We were able to craft different requests, send them, and see if our server's response matched our expectations.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=32)** Now, in order to bring our front and backends together, our main task is going to be to make it so that our front end, right, this Vue app that we've created, is the one that makes the requests instead of Postman.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=44)** So for example, when we visit the product detail page that you see here, our front end is going to need to automatically make a request to load the data for this product.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=54)** And the same thing is going to be true of course for our products page here.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=58)** It's going to need to automatically load all of the products for our site as soon as we open the page and display them in the page's template.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=68)** Now there are many different libraries that we can use to make requests from our front end, but in this course we're going to be using a very popular library called Axios.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=77)** Now, Axios provides a number of different methods for making requests from our front end.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=81)** And what we're going to do in this video is just talk briefly about how these methods work and then we'll move on to seeing how to use Axios to connect the front and backend of our application.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=92)** The first method That We're Going to Look At Is axios.get.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=95)** Now, as you might already be able to guess, axios.get is used to make get requests to the backend from the frontend.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=104)** And the way that we do that is pretty simple.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=106)** We just call axios.get with the URL that we want to send the request to.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=111)** Now this is very similar to what we've been doing in the last few chapters with Postman, except now we're doing it programmatically.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=118)** Now get as well as the rest of Axios's methods that we're going to be working with throughout the rest of this course, returns promises.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=126)** And in our case, basically what this means is that we'll be able to use the async and await keywords with them.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=133)** So for example if we wanted to call axios.get with some URL, we can use await to get the result of that network request, which is an object containing information about the response.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=145)** Now, generally, the part of this object that we're going to care most about is the data property that you see below.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=152)** This is generally where the response body is contained.
>
> **[2:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=158)** And just to give you an idea of how this relates to what we're sending back from the backend, generally whatever we pass to response.json inside our server endpoint is going to show up on that data property on the frontend.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=172)** So in this case, if we had an object with the property message equal to "Hello", if we were to send that using the backend, Then on the frontend response.data would be that same object with message equal to "Hello" pretty straightforward right?
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=187)** Now in addition to the get methods that Axios provides, there are also other methods such as post put and delete.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=194)** And we're going to be using some of these to make different types of requests to the backend.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=200)** Now, all of these other methods are pretty straightforward.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=202)** The main thing that you're going to need to know is that with the post method, we'll be wanting to pass extra data along with our request, which we can do simply by passing a JavaScript object as the second argument to the function.
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/introduction-to-the-axios-library?u=76281980&t=215)** And that's pretty much all we need to know about Axios, So let's move on to seeing how we can incorporate this into our full stack application.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), await (2), pass (2), async (1), delete (1)
> **CLI Commands:** make (5), node (1)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Tools:** postman (3)
> **File Paths:** node.js (1), response.json (1)
> **Env Vars:** url (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** open the (1)

#### Loading data from the server: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=0)** - [Instructor] Now that we know the basics of how axios works and the methods it provides us with for making requests to the backend, the next thing we're going to take a look at is how to actually install and use this library on our view front end.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=13)** Now, the first thing that you're going to want to do in Codespaces here is open up two terminals.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=19)** So you're going to want to see both those terminals over here on the right hand side.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=23)** And the first one you're going to want to make sure you navigate to the front end directory by saying cd front-end and hitting enter.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=33)** And you should see the name of that folder show up over here on the right hand side.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=37)** And then in the other terminal you're going to want to say cd back-end and hit enter.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=43)** And again, you should see the backend name show up over here on the right hand side.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=48)** So at this point we have two different terminals one for the backend, one for the front end.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=52)** It's going to be very important that you keep those straight when we do things like install packages into our project.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=59)** So inside our front end directory what we're going to do here is install the axios library.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=64)** And the way we're going to do that is by running npm install axios and hitting enter.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=70)** Okay, so that'll take a minute or two to install.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=74)** And there we go.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=74)** axios has been added to our front end project.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=78)** So the next thing that we're going to do now is switch over a few parts of our app to use axios.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=83)** Now the first part that we're going to take a look at is the parts of our application that need to load data from the server when the page is opened.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=91)** So to get a little bit more specific here that's going to refer to pages such as our products page.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=98)** So let's open that up here in our front end directory, source, pages and products page.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=105)** And this is also true for our product detail page and shopping cart page as well, right?
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=110)** So for each of these pages, what we're going to have to do is instead of just having this data automatically available to our page, because we're importing it from this temp data file, we're going to need to load that from the server using the axios package that we just installed.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=129)** So this is a pretty straightforward process and hopefully by the end of the video you'll have picked up on it.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=134)** So we're going to start off with our products page.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=136)** And our products page is going to need to load the products from the get products endpoint.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=143)** So the first thing that we're going to have to do here is import the axios library, and that's going to look like this.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=149)** We're just going to say import axios from, and then it's going to be axios as a string.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=156)** Okay, so now we have the axios library, and the next thing that we're going to want to do is inside our component's definition here, underneath methods such as data we're going to add a method called created.
>
> **[2:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=171)** And since there's going to be some asynchronous stuff going on here, we're going to have to use the async keyword there as well so that we can use a wait inside of that method.
>
> **[3:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=180)** Now, the beauty of this created method is that it's automatically going to be called by view as soon as this page component is created.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=188)** So essentially this is the perfect place to load data that our page might need.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=194)** So what this is going to look like is we're going to make our request to the backend by saying axios.get.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=201)** And then for the URL well, that's a little bit tricky actually.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=205)** We'll come back to that in just a minute.
>
> **[3:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=207)** But basically this axios.get thing is going to return a response object that will be able to get all of the products from, right?
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=217)** So the products array will be included in whatever this returns.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=221)** So what we're going to do is say const response equals axios.get.
>
> **[3:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=226)** And actually we need to add the await keyword there because axios.get is asynchronous.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=232)** And once we've done that we're going to get the data from the response, right?
>
> **[3:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=237)** So the response body by saying const products equals response.data All right?
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=245)** So that's just how things work in axios.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=247)** It adds a data property to the response that we get back that will automatically include the body of the response.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=255)** So now that we have our products back from the server we're just going to need to set this products data in our component to the result that we got back.
>
> **[4:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=263)** And the way that we do that in a view component is by saying this.products, right?
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=269)** So this refers to the component itself and then we're going to say equals products.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=276)** So what this is doing is it's setting this components products data to the data that we got back from the server.
>
> **[4:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=284)** All right?
>
> **[4:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=284)** Now there's a few more changes that we're going to need to make before this will actually work.
>
> **[4:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=288)** First of all, we're going to need to set the default value, right?
>
> **[4:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=290)** That is the starting value of our products pages products data to an empty array, right?
>
> **[4:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=298)** That will make sure that our v-for directive inside our products list will still work.
>
> **[5:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=303)** It just won't display anything at first.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=306)** Now, the other thing that we have to do is define a URL here.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=310)** And there are a few things to go about this but one thing that won't actually work, which is probably the first thing that you thought to try, would be to simply copy this URL that we had in Postman and use that as the URL to make the request to, right?
>
> **[5:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=324)** The problem with that is that that would run up against something called a CORS error, right?
>
> **[5:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=329)** So CORS, which basically blocks requests that are going between two different origins.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=335)** Don't worry too much about the details there, just know that we would run into some tricky stuff there.
>
> **[5:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=339)** So what we're going to do instead is set up something called a proxy.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=344)** And what this will allow us to do is make requests from our front end by just specifying the end of the URL and then we'll be able to specify our server's URL elsewhere.
>
> **[5:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=355)** So don't worry too much about the details there.
>
> **[5:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=357)** Again, all you need to worry about for now is in order to load our products we're going to say axios.get and then we're going to say /api/products.
>
> **[6:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=367)** Now, that /API thing at the beginning might confuse you a little bit.
>
> **[6:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=371)** What we're going to have to actually do is open up our server file and add /API to the beginning of all of these paths and that will have some effects down the line.
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=381)** Don't worry about what it's used for right now.
>
> **[6:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=384)** Just know that this will make it much easier to have both our front end and back end communicating with each other without the requests colliding.
>
> **[6:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=392)** So let's paste that /API thing at the beginning of all these paths.
>
> **[6:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=396)** And once we've done that, we're just going to hit save.
>
> **[6:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=399)** Cool. So going back to our products page now, we should be able to just say axios.get/api/products and that should load our products for us when our page is first opened.
>
> **[6:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=410)** So let's give this thing a try.
>
> **[6:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=412)** What we're going to need to actually do is run both the front end and the back end at the same time here.
>
> **[6:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=418)** So what we're going to do is we're going to say npm run serve on the front end, right?
>
> **[7:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=424)** That's how we run our view application.
>
> **[7:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=426)** And on the backend we're going to say npm run dev which will run our server.
>
> **[7:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=432)** And actually there's one more thing that we need to do first, and that is set up the proxy that I mentioned earlier.
>
> **[7:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=438)** In order to do that, we just need to open up the view.config.js file inside our front end project and inside this defined config object underneath where it says transpileDependencies, what we're going to do is we're going to add a property called devServer, and the value for that is going to be an object with the property of proxy.
>
> **[7:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=462)** All right?
>
> **[7:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=463)** And the value for this now is actually just going to be [http://localhost](http://localhost) 8,000.
>
> **[7:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=471)** So that might be a little bit confusing, but since both our front and the back end are running on the same machine, right, they're running basically on Codespaces, we can refer to our server as local host port 8,000.
>
> **[8:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=485)** So anyway, that's how we set up the proxy.
>
> **[8:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=487)** So what we're going to want to do is restart our server now rather, we want to restart our front end and have our server running as well.
>
> **[8:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=494)** So let's go back to our front end and restart it.
>
> **[8:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=498)** And oops, it looks like we also have an error there complaining about how the products import is never used.
>
> **[8:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=504)** So we're just going to remove that up here at the top.
>
> **[8:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=508)** Okay? Cool.
>
> **[8:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=510)** So let's try this out now.
>
> **[8:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=512)** What we're going to do is open up our front end.
>
> **[8:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=514)** And in order to do that, we just need to click on this little world icon next to port 8080 which is our front end.
>
> **[8:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=523)** And once that opens up, we're going to need to type in /products to take us to the products page.
>
> **[8:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=529)** And sure enough, you'll see that all of our products are loaded, but actually the pictures aren't working.
>
> **[8:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=534)** So we'll see how to fix that in a minute.
>
> **[8:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=536)** But if you open up the inspector window and go to the network tab which is how you can see what requests are being made by the front end, if you hit refresh now, what you're going to see is this little products request.
>
> **[9:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=550)** And if you go to the response tab under that you'll see all of the products that our front end received.
>
> **[9:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=558)** So this is the request that our front end made and this is the response that the backend sent back to us.
>
> **[9:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-1?u=76281980&t=563)** So that's the basics of loading data on a view front end from an express server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), from, (2), const (2), switch (1)
> **CLI Commands:** make (7), npm (3), cd (2)
> **Env Vars:** url (6), api (3), cors (2)
> **Prerequisites:** install (5), set up (3)
> **UI Navigation:** go to (2), click on (1)
> **Code Identifiers:** transpiledependencies (1), devserver (1)
> **Ports:** port 8 (1), port 8080 (1)
> **API Endpoints:** /api/products (2)

#### Loading data from the server: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=0)** - [Instructor] All right, so now that we've seen how to convert our products page so that it loads its data from the server instead of using file data, we're going to do the same thing with our other two pages here, but before we do that, let's fix the problem we're currently having with displaying our photos.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=16)** What we're going to have to do is change our front end so that it tries to load its photos from the back end.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=22)** And we're going to have to enable our back end as well to serve photos.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=26)** So the first thing that we're going to have to do here is take the Assets folder from our front end.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=32)** All right, so we're going to copy that and we're going to go into our back end now and paste the Assets folder.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=38)** So once you've done that, you should see that Assets is right next to the source folder on the back end.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=45)** Cool, so now that you've done that, we're going to open up our server now and configure our server so that it will serve static files from the Assets folder.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=55)** And all that we need to do to make that happen is say app.use.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=59)** The first argument here is going to be /images which will be the URL we'll try and load the images from on our server.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=67)** And then the second argument is going to be the actual path of the folder we want to serve the files from.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=73)** So in order to do this, we're going to import Node.js' built-in path package by saying import path from path.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=81)** And then for the second argument here we're going to say express.static and then path.join _ _ directory name and then ../assets.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=95)** So all that we're doing here is telling our express app that we want to serve files from this Assets folder.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=101)** And actually I put too many S's there, so make sure you didn't do the same typo as I did.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=107)** And this should enable our express server to serve those images for our front end.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=112)** All right, now the second thing that we're going to have to do is since our products have the property specifying where their image is stored under the property name image URL instead of image name, we're going to have to go through our application and change any references to that to the correct string.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=129)** So what you can do if you want to, just because it's less error-prone, is search for image name in our project.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=136)** And sure enough, we're going to want to correct these few instances.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=140)** We're going to leave the temp data as it is, by the way, because we don't need that anymore actually.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=145)** So we're going to change image name here to product.imageURL.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=150)** And the same thing we're going to do in our shopping cart list.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=152)** Change that to product.imageURL and in our product detail page, last but not least we're going to say image, product that is, .imageURL.
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=164)** Okay, so that should be all we need to do to fix those images.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=167)** Let's go back to our front end and hit refresh.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=172)** And sure enough, we should see the images for our products show up on the products page.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=176)** If we go to the product detail page, well we're not going to see that yet because we haven't loaded the data from our backend.
>
> **[3:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=183)** So for now, we'll just be happy with the small victory on the products page.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=187)** And let's now go into our other pages and change them so that they load their data from the back end.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=194)** And this is going to be pretty straightforward.
>
> **[3:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=196)** What we're going to want to do is in the product detail page, so here I'll just close all of these to clean up a little bit.
>
> **[3:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=204)** We're going to open up pages, product detail page.
>
> **[3:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=207)** Inside the component definition here we're going to add the same async created function that we added to our products page.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=216)** And we're also going to import Axios up at the top by saying import Axios from Axios.
>
> **[3:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=223)** And now we're going to make that request to load the individual product by saying const response equals await axios.get.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=233)** And the URL here is going to be a little bit different because we're going to need to include the ID of the product that we want to load the data for from our server.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=242)** So we're going to say /api/products.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=246)** And then for the product id, we just need to insert this .$route, right?
>
> **[4:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=253)** So remember, this is how we got the current value of our product ID URL parameter earlier and then we're going to say .params.productId.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=264)** Okay, so now that we have that, we're just going to get the product from our response by saying const product equals response.data.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=273)** And now we can set that as the value for our product up here by saying this.product equals product.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=283)** Okay, and now that we're loading that data from the server, we no longer need this product.find thing from before.
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=289)** So we'll just set the initial value of our product data on our product detail page to an empty JavaScript object.
>
> **[4:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=296)** And this also means we can remove this products' import up at the top.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=300)** So let's save our project now and we should be able to open up our front end.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=305)** And let's just hit refresh to make sure we have an up-to-date version.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=309)** We're going to click view details for one of our products and sure enough, we'll see that our product is loaded and the image is displayed.
>
> **[5:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=316)** So that's how to convert the product detail page.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=319)** Let's do the shopping cart page now.
>
> **[5:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=321)** This one should be pretty straightforward as well.
>
> **[5:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=324)** What we're going to do is add the created, well async created that is, method to our component definition.
>
> **[5:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=332)** And inside there we're going to do something very similar.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=335)** We're going to, first of all, import Axios from Axios and then we'll make our request to the correct endpoint.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=342)** We're going to say const cartItems equals await axios.get.
>
> **[5:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=350)** And then for the URL, we're just going to hard code the user's Id.
>
> **[5:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=354)** We'll see later on how to change that if we want to, and what that's used for in the first place, but for now, we'll just say /api/users/12345/cart.
>
> **[6:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=367)** Okay, and that should get us the user's cart items already pre-populated.
>
> **[6:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=372)** So now we can just say, actually that's just going to be the response.
>
> **[6:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=376)** That's not going to be the cart items yet.
>
> **[6:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=377)** So we'll say const response equals await and then we can say const cartItems equals response data.
>
> **[6:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=387)** And finally, we can assign those cart items to our shopping cart page's data by saying this.cart Items equals cart items.
>
> **[6:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=398)** Okay, and for the initial value for cart items now we're going to use an empty array and that will allow us to remove this cart items temp data import.
>
> **[6:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=407)** Cool, so let's test this one out now, and if it works then we will have successfully converted all of our data loading in our application to happen from the server.
>
> **[6:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=416)** So let's go to our front end and we'll hit refresh once more just to make sure we have the most up to date version.
>
> **[7:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=422)** And now if we go to the shopping cart, there we go.
>
> **[7:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=425)** We see that all of our products are displayed in the list.
>
> **[7:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/loading-data-from-the-server-part-2?u=76281980&t=428)** So that's how to convert our pages so that they load their data from our Node.js server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), const (5), await (3), static (2), async (2)
> **CLI Commands:** make (6), node (2), find (1)
> **Code Identifiers:** imageurl (3), cartitems (2), productid (1)
> **Env Vars:** url (5)
> **UI Navigation:** go to (3)
> **File Paths:** node.js (2)
> **API Endpoints:** /api/products (1), /api/users/12345/cart (1)
> **Cross-References:** go back to (1)

#### Adding items to the shopping cart
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=0)** - [Instructor] At this point, our frontend is loading all of its data from the backend.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=4)** So the next thing that we're going to take a look at is how to add items to cart by making a request to the backend.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=12)** So if we take a look at the current functionality for adding an item to the cart, which you can access by going to the ProductDetailPage and taking a look at this Add to cart button, currently we don't have that button hooked up to anything.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=25)** So what we're going to want to do is go back to our frontend and specifically we'll want to open up the ProductDetailPage which is where our button is defined.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=34)** And what we're going to want to have happen is when a user clicks this button, it's going to need to make a request, right?
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=41)** The right kind of request with the correct payload to our server.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=44)** So the first thing we'll want to do is add a directive to our button, which we'll link it up to a method.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=52)** And we can do that, by the way, by saying @click equals, and then let's just assume that we're going to name our method addToCart, okay?
>
> **[1:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=63)** All right, so what this will do is if we define an addToCart method down here in our component, and by the way, you can do that by underneath our data adding a property called methods.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=75)** And this is where we can define the different callable methods based on events that happen in our components HTML, right?
>
> **[1:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=82)** Such as when a user clicks a button.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=85)** So we're going to add that addToCart method down here by saying addToCart.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=91)** And this is actually going to be an asynchronous method as well.
>
> **[1:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=93)** So we'll add the async keyword to it just like we did with our other methods so far.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=99)** And inside this method, now what we're going to do is we're going to say await axios.post and then we're going to send a request to /api/users/12345, all right?
>
> **[1:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=115)** So we're just going to hard code that ID again and then we're going to say /cart.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=120)** And in this case, we'll need to include a request body along with our request, right?
>
> **[2:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=126)** We need to specify what the product ID is that we want to add to the user's cart.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=131)** And the way that we do that with axios is just by adding an object as the second argument.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=136)** And if we wanted to, let's say add a product ID property there, we could say productId and then the value for that would be this.$route.params.productId, okay?
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=150)** So that's all we need to do to send that request.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=152)** And once that request has been completed, we don't even really need to see the result, right?
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=157)** We're having our endpoints send back the updated cart.
>
> **[2:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=160)** But in this case, that's not something we need to see or deal with.
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=164)** All we want to do here is once we've successfully added the item to a user's cart, we'll want to display some sort of message.
>
> **[2:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=171)** And the easiest way to do that in Vue is just going to be to display an alert saying something like Successfully added item to cart, okay?
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=182)** That's all we need to do there.
>
> **[3:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=183)** And once that's completed, we should be done.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=186)** So let's try this out.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=188)** What we're going to want to do is go to our frontend and hit refresh, and let's try going to our products and adding a product to our cart that isn't already there.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=198)** So actually, let's check out our shopping cart.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=201)** Looks like we have Basil, Lemon, and Rosemary.
>
> **[3:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=203)** So anyone besides those we can add to our cart as a test.
>
> **[3:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=207)** So let's try adding the Bold olive oil to our cart.
>
> **[3:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=210)** We're going to do view details and then say add to cart.
>
> **[3:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=214)** And if everything goes right, sure enough we should see that it says Successfully added item to cart.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=220)** So let's click OK.
>
> **[3:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=222)** And if we head over to our Shopping Cart now what we're going to hope to see is that this item will be in the cart.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=227)** However, it looks like something went wrong because it's currently telling us we have no items in our cart.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=232)** And if we open up the Inspector window and go to the console, we'll see that there's some sort of error there.
>
> **[3:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=237)** Now, investigating this error a little bit further, if you take a look at the Network tab and hit refresh on this page, you're going to see that the problem is that we are getting a response back from the server with all of the items in the user's cart, but one of those items is unfortunately null.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=255)** So apparently something went wrong with our adding an item to our cart.
>
> **[4:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=259)** And I believe that the problem here, if we go back and take a look at our code, is that the property we used here doesn't match up with the one on the server.
>
> **[4:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=268)** So let's open up our server here and go down to the add to cart endpoint.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=273)** And sure enough, remember that what we wanted to be defined in the request body was just the property ID not product ID.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=281)** So what we're going to have to do is go back to our ProductDetailPage, change this to Id, and now the unfortunate part is that we've inserted some incorrect data into MongoDB, so we have to actually remove that manually.
>
> **[4:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=294)** And you can do that by opening up a new terminal.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=297)** And we're going to have to connect to MongoDB and we're going to use the same command from before.
>
> **[5:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=302)** You can always get this command back in MongoDB Atlas if you need it.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=306)** All right, so I'm going to hit Enter and that will ask me for the password, which I will enter as well.
>
> **[5:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=312)** And now I'm connected to MongoDB.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=313)** So let's go into our database by saying use fsv-db.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=319)** And now we're just going to have to take a look at our users collection by saying db.users that is .find with empty criteria which will give us all of our users.
>
> **[5:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=330)** And sure enough, we see that this one user has null in the cart items.
>
> **[5:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=334)** So what we're going to want to do is say db.users.updateOne, and we're going to say that we want to update the user with ID 12345.
>
> **[5:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=345)** All right, so we'll say ID and then 12345.
>
> **[5:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=349)** And as the update, what we're going to want to do is say $pull.
>
> **[5:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=356)** And we're going to want want to pull the value null off of the cart items array.
>
> **[6:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=360)** So we're going to say cartItems null.
>
> **[6:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=363)** And now if we close off those curly braces and parentheses and hit Enter, we should see that it says acknowledged true.
>
> **[6:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=370)** And this matched count and modified count tells us how many items match the criteria and how many were updated.
>
> **[6:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=377)** So that's exactly what we wanted was one and one.
>
> **[6:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=380)** And now if we take another look at our users, we should see that null is gone.
>
> **[6:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=384)** So let's try this again.
>
> **[6:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=386)** That is definitely an inconvenient error to have, but I wanted to show you how to solve that just in case you run into the same thing.
>
> **[6:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=392)** So let's now try this again.
>
> **[6:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=394)** We're going to go back to the product from before.
>
> **[6:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=397)** All right, there we go.
>
> **[6:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=399)** And let's click on Add to cart.
>
> **[6:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=402)** We should see that alert pop up.
>
> **[6:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=403)** And now hopefully, if we did everything right, we can go back to our shopping cart.
>
> **[6:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=407)** And sure enough, the Bold olive oil is now in there.
>
> **[6:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=411)** So we fixed that little error.
>
> **[6:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/adding-items-to-the-shopping-cart?u=76281980&t=413)** And that is how to use axios to add items to our shopping cart.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (2), async (1), await (1), this. (1)
> **Code Identifiers:** addtocart (4), productid (2), updateone (1), cartitems (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** such as (1), just like (1)
> **API Endpoints:** /api/users/12345 (1)
> **Env Vars:** html (1)

#### Removing items from the shopping cart
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=0)** - [Speaker] Okay, so now that we're allowing our users to add items to their cart, it's going to be equally important that we allow them to remove items from their cart.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=9)** Now, this process is actually going to be a little bit different than what we saw previously with adding items to the cart and here is why.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=16)** The button that's going to be triggering the removal of an item from the user's cart, right?
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=20)** If we take a look at the shopping cart page, this button here, this button is contained inside its own component, right?
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=28)** The shopping cart list component, I believe we called it.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=31)** Let's just check and take a look here and yep, sure enough the shopping cart list.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=36)** Alright, now this shopping cart list component is displayed by the shopping cart page component.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=42)** And the shopping cart page component is where the actual data exists, right?
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=47)** So if we open these up side by side I'm going to open up the shopping cart page as well.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=52)** There we go.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=53)** The cart items that we actually want to display in the shopping cart list are down here.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=58)** Now, what this means is that when we make a request to the server and remove an item from our cart the server's going to send back an updated array with that item removed.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=69)** Now what we're going to need to do is replace the current value of our shopping cart pages cart items data with the data we get back from the server.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=78)** And what that means is that we're going to need to make the original request from inside this page as well.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=85)** Now, what all of this means is that our shopping cart list is going to have to emit an event, right?
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=90)** In other words, it's going to have to do something like what a button does when it's clicked and our shopping cart page is going to have to listen for that event and respond to it by sending that request and then updating its data accordingly.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=104)** Now, this might all sound pretty complicated, so let me just show you what it's going to look like.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=109)** The first thing that we're going to do is inside our shopping cart list, whenever the remove from cart button is clicked on one of our items we're going to want to emit an event.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=119)** So what that's going to look like is we're going to say on click right, so @click and the value for this directive is going to look like this.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=129)** We're going to say $emit.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=132)** And then the first argument that we're going to pass to this thing will be the name of the event that we want to listen for.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=138)** So in our case here, we're just going to create an event called remove from cart.
>
> **[2:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=144)** And the second argument that we can pass to this is going to be any extra data we want to include with this event.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=152)** So in our case, we're going to want to include the ID of the product that was just clicked.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=157)** So we can say product ID, and that will refer to the current product that we're looking at from this v for directive up above.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=165)** Okay, so that will emit this event when this button is clicked for a given item.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=169)** So what this means is that up in our shopping cart page we can now listen for that specific event that we just defined by going to our shopping cart list component that we're displaying and saying @ and then the name of the event that we just defined.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=186)** So that's going to be removed from cart and we're going to say equals.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=192)** And here's where we get to determine what gets called down here in our method.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=198)** And actually we don't have methods yet on this component.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=200)** So let's add one.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=201)** We're going to say methods, and we'll just add a method here which will be called something like remove from cart.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=209)** Okay, remove from cart.
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=211)** And that's the method that we're going to want to call when this event occurs.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=217)** So now we can just say @remove from cart equals then the name of our method, remove from cart and in order to make sure the extra data gets included, right?
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=227)** The product ID that we want to remove we're going to just say $event that just makes sure that the extra data gets passed through.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=235)** Don't worry too much about the details with that one.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=238)** Cool, so now that we have that, let's go back down to our remove from cart method.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=243)** And we can now access the product ID that was emitted from our shopping cart list right when we said emit remove from cart product ID.
>
> **[4:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=253)** We can access that by saying product ID in the arguments here.
>
> **[4:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=258)** And now we can use that to make the correct request.
>
> **[4:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=261)** So what the request is going to look like, we're going to say const response equals await axios.delete.
>
> **[4:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=270)** Okay, so that's how we send a delete request using axios.
>
> **[4:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=273)** And we're going to use back ticks here because we're going to want to insert the product ID into the URL and we're going to say /api/users/12345/cart
>
> **[4:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=288)** and then slash with the product ID that we want to remove.
>
> **[4:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=293)** Okay, and you'll see this little red underline under await.
>
> **[4:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=296)** That just means that we need to add async to this remove from cart method.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=300)** And now that we have the response, what we're going to want to do is get the updated cart items from the response data by saying const updated cart equals response.data.
>
> **[5:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=312)** And now we're going to set the cart items data to that updated cart by saying this.cartitems equals updatedcart.
>
> **[5:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=322)** And that is all we have to do.
>
> **[5:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=324)** So let's try this thing out.
>
> **[5:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=325)** What we're going to do is go back to our front end and hit refresh just to make sure we have the up-to-date version.
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=331)** And now we should be able to click remove from cart on any one of these products and see it disappear.
>
> **[5:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=336)** So let's try this.
>
> **[5:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=337)** We're going to click remove from cart for rosemary and sure enough, we should see that the rosemary disappears and won't come back even if we hit refresh.
>
> **[5:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=347)** So that is out of the user's cart until the user goes back and adds it again.
>
> **[5:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/removing-items-from-the-shopping-cart?u=76281980&t=351)** So that's how we can remove items from our cart by making a request to our backend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (3), pass (2), const (2), await (2)
> **CLI Commands:** make (5)
> **Definitions:** in other words (1), means that (1)
> **API Endpoints:** /api/users/12345/cart (1)
> **Env Vars:** url (1)
> **Speakers:** - [speaker] (1)

#### Challenge: Item already in cart
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=1)** (keyboard taps)
>
> **[0:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=2)** - [Instructor] All right, at this point we've got a pretty full featured full stack application, which is really exciting.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=8)** However, the last big change that we're going to make to our front end is actually going to be given to you as a challenge.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=14)** Now, in order to understand this challenge let's take a look at a current problem in our application, and that problem is that even when an item is currently in our shopping cart, there's no visual indication of whether or not that's true, right?
>
> **[0:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=27)** So regardless of whether an item is currently in our cart, the user is still going to see this ad to cart button.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=33)** And in fact, the way that we've implemented our server, if you take a look at our server.js file our server won't even complain if the user tries to add a new item to their cart that they already have in their cart because we're using this ad to set operator.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=50)** So your challenge here is instead of just displaying this button as add to cart regardless of whether or not the user has the item in their cart, you're going to need to implement a feature on this page that will automatically determine whether an item is in the user's cart and if it already is, it'll display some sort of grayed out version of this button that will say something like item already in cart.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=77)** All right, so that's your challenge here.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=79)** Now, there are a few hints to help you get started.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=82)** The first hint is that just like we loaded our cart items into our shopping cart page, you're also going to want to load those items into the product detail page, all right?
>
> **[1:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=92)** So you're going to want to load those probably inside this created method.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=96)** Now, the second hint is that you're probably also going to want to use a view computed property that returns whether or not the cart items that we've loaded from our server include the current product that we're looking at on the page.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=110)** And you can then use this computed property, of course, to modify the button accordingly so that it changes the text and possibly the class of the button.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=120)** Well, that's your challenge.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/challenge-item-already-in-cart?u=76281980&t=121)** This challenge should probably take you between 10 and 15 minutes to complete, and after you've given it a try, feel free to move on to the next video where I'll show you how I solve this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), try, (1)
> **File Paths:** server.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Item already in cart
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=1)** (keyboard taps)
>
> **[0:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=2)** - [Instructor] Okay, now that you've hopefully given this challenge a try, here's how I chose to go about solving it.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=8)** The first thing that I did is just like we loaded an individual product on the product detail page, I chose to also load the cart items from the cart end point.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=19)** So what that would look like is this.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=20)** We would say const.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=21)** And since the name response is already taken for our variables, I just called this something like const cartResponse.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=30)** And then I said equals await axios.get.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=34)** And the URL here was pretty straightforward.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=36)** We just said /api/users that is /12345/cart.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=44)** Okay, so that would load the user's cart just like we did on the cart page.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=48)** And now that I had the response there, what I did was I said const cartItems equals cartResponse.data.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=58)** All right, so that's how we got the populated items that were in the response.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=62)** And once I did that, I actually added another piece of data to our component called cartItems.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=67)** Again, very similar to what we did on our shopping cart page.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=72)** And then I simply set that data to the response we got by saying this.cartItems equals cartItems.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=81)** Cool, so at this point I had the cart items that I needed as well as the current product that the user was looking at.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=88)** So all I had to do now was compare those two things to find out whether this product was in the user's cart or not.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=94)** So the way that I did that was by adding a computed property, which by the way, in case you didn't know how to do that in view, you can do by just adding a computed property to the component itself, and then inside of here I added a computed property called itemIsInCart, right?
>
> **[1:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=113)** I tried to make it as descriptive as possible.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=115)** And then in order to compute this value, all I did was check to see whether the current id, right the ID of the current product we were looking at was contained in these cart items.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=128)** So what that looks like is I said return this.cartItems.some.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=135)** And I checked to see whether any of those cart items had this ID down here.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=140)** So I did that by saying item item.id is equal to this.$route.params.productId.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=155)** And that's pretty much it for the logic down here.
>
> **[2:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=158)** So now that I had this item is in cart computed property, I could use that up here in the components user interface to change the button accordingly.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=167)** So now what I could do is instead of just having this say add to cart automatically, I said that I only wanted to display this button if, and here's where I used the v-if directive, if the item is not in our cart.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=182)** So I said not item is in cart.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=187)** Okay, now, I also provided a backup option for this button, right?
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=191)** I just created another button and the class of this button for styling purposes by the way, was gray-button.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=200)** All right and I said that I only wanted to display this button if the item is already in our cart.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=206)** So I said v-if item is in cart and then for the text of this button I said item is already in cart.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=220)** And notice that I didn't add a click handler to this button because we don't want anything to happen when this button is clicked, right?
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=227)** It's really just a placeholder.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=229)** Cool, so that's really all I needed to do.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=231)** So let's go back to our front end now and check to see if this solution worked.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=235)** What we're going to do is just take a look at what's in our shopping cart, first of all.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=239)** All right, so we see that we have basil in our shopping cart.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=242)** So let's now go back and take a look at our basil olive oil.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=246)** And sure enough, we see that the button changes and says item is already in cart.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=250)** Now the styling is a little bit off here and I have a feeling that's just because I didn't give it the right class name.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=257)** I believe I said grey button with an E.
>
> **[4:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=260)** So let's see if that changes things.
>
> **[4:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=261)** We're going to go back and hit refresh.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=264)** Sure enough, we see that adding that, or rather changing that class changed the button to look correct.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=271)** So anyway, that's how I went about solving that challenge.
>
> **[4:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=274)** Congratulations if you figured out something similar.
>
> **[4:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=277)** And don't worry if you didn't get exactly the same thing as me.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=280)** All right, so anyway, I hope you had fun on that challenge.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/solution-item-already-in-cart?u=76281980&t=283)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (4), const (3), try, (1), await (1)
> **Code Identifiers:** cartitems (5), cartresponse (2), itemisincart (1), productid (1)
> **Analogies:** just like (2), similar to (1)
> **CLI Commands:** find (1), make (1)
> **API Endpoints:** /api/users (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 6. 5. Adding Authentication with Firebase Authentication

#### Why Firebase Authentication?
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=0)** - All right, so at this point in the course, we have a working front end, a working backend, and we've seen how to connect the two by making network requests with the Axios Library.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=10)** So the next thing that we're going to take a look at here is how to add some simple user authentication to our app using Firebase Authentication.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=18)** Now, what this is ultimately going to allow us to do is replace this dummy user ID that we've been using, right, 12345, with a real user ID generated for us by Firebase.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=32)** And this will also allow us to have multiple users' carts being tracked on our site.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=37)** All right, now normally adding user authentication to a site is actually pretty complicated, because we have to learn how to do things like store users' passwords safely, make sure our authentication flow is secure, et cetera.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=51)** But this can be made a lot easier by using an authentication provider, and for that we're going to be using Firebase Authentication.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=59)** Now, Firebase, first of all, is a very user-friendly platform for adding things like databases, hosting, and of course user authentication which is all that we're going to be using here.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=71)** So basically what Firebase Authentication allows us to do is quickly set up a specific sign-in method, and we'll see how to do this in just a minute here, and from then on all we have to do is install Firebase off into our project.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=87)** And it provides some very simple methods that we can use to log the user in, log the user out, and get user data.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=95)** So we'll be seeing how to do all of that, but just know that we're using Firebase Auth because it saves us a lot of work setting up our project.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/why-firebase-authentication?u=76281980&t=103)** All right, so anyway, now that we know a little bit more about Firebase and why we're going to be using it, let's see how we can start to add it to our full Stack project.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1), install (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - all (1)

#### Creating a Firebase project
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=0)** - [Instructor] The first thing that we're going to have to do in order to add Firebase authentication to our project is set up a Firebase project and app in the Firebase console.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=10)** So you're going to want to navigate to console.firebase.[google.com](https://google.com), which is the current URL of the Firebase console.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=18)** And what you're going to want to do is, of course, log in with your Gmail account or some sort of account like that and you should see a screen that looks something like this.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=28)** So what we're going to want to do here is click the Add Project button and the first thing that's going to ask us is for a project name.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=37)** So I'm just going to call this project Vue Site, something like that, it doesn't really matter too much.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=43)** The only thing that we can't change later is the ID of the app, which is this down here.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=48)** So make sure that that's to your liking.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=50)** I'm just going to leave the default one that they suggested for me.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=53)** And once we've entered in the name we're going to click continue.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=57)** The next thing Firebase is going to ask us now is if we want to add Google Analytics to our project.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=62)** Now in general, Google Analytics is a very helpful tool but since we don't need it for this project I'm just going to turn this Enable Google Analytics for this project switch off, and then we can click Create Project.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=75)** And it might take a few seconds while it creates our project in the background.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=82)** But once we see it spin and the message your new project is ready, we can click the continue button and that will take us to the dashboard for our new project.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=91)** All right, so the next thing that we're going to have to do is link up our Vue application to this project we just created.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=98)** And in order to do that, you're going to want to click on this little web button underneath where it says Get started by adding Firebase to your app.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=106)** So let's click on that and we're going to have to enter in a name for this new app.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=112)** Now this is the specific application that we want to link it to, so I'm just going to call this Vue Front-end, and we can always change this later, by the way, so don't worry too much about that either.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=124)** And then what we're going to do is click Register app, and you can leave this Firebase hosting thing off for now as well.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=131)** Okay, so now that we've created this new app and added it to our project, what you're going to see is that Firebase will spit out all of this code that it wants us to copy and paste into our project.
>
> **[2:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=142)** So you'll notice that the first one of these is telling us to install the Firebase package into our Vue project.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=151)** And instead of just copying this command directly what I'm going to recommend you do because Firebase's API has a nasty habit of changing, what I'm going to recommend you do is actually install this package with a specific version.
>
> **[2:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=166)** So what we're going to do here is we're going to stop our Vue app temporarily if you have it running.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=172)** And by the way, make sure you're in the front end for this.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=175)** You should see front-end on the tab name over here on the right hand side.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=179)** And what we're going to do is say npm install firebase, and then we're going to say @ with the current version that I'm going to be using for this project, and that's going to be 9.15.0, so if you add this, this will make sure that you have the exact same version of Firebase on your computer as I do here.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=201)** It'll just make sure that everything works the same way.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=205)** Cool, so now that we've installed Firebase, the next thing that we're going to do is go back to the Firebase console here and copy all of the code that it gave us.
>
> **[3:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=214)** Now we're going to want to put this inside our main .js file.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=217)** So let's open that up.
>
> **[3:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=218)** And before we call this createApp.use at the top, we're going to paste all of that Firebase code.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=225)** And I'm going to remove all of the comments here just to clean up a little bit because we don't need those.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=232)** And one last thing that you're going to need to do as well in order to avoid getting a warning from Vue is remove this const app = part right there because Vue doesn't like it when we have unused variables.
>
> **[4:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=244)** So cool.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=245)** Basically what's going on here is this Firebase config just contains all of the information our Vue app needs to connect to the Firebase project we created in the console here.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=255)** So what we can do now that we've copied and pasted all of that code is we're going to click Continue to console and that'll take us back to the console of our project.
>
> **[4:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=265)** And the next thing that we're going to do is enable authentication for our project.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=269)** Now, the way that this is going to work is you're going to want to click on Authentication, and you can also access Authentication, by the way, by going over here to the left-hand side.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=279)** And under Build you'll find Authentication.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=281)** You can click on that and that'll take you to the same place.
>
> **[4:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=284)** So once you're there you're going to click on this Get Started button, and that will change the screen here and ask you to select your first sign-in method.
>
> **[4:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=295)** All right, now for this project we're going to be using a very simple and intuitive form of user authentication called Email Link Authentication.
>
> **[5:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=304)** So what you're going to want to do, in case you didn't catch that, is click on Email and Password under Native providers, and then you're going to click Enable next to Email link, and that will also enable email password authentication up at the top.
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=317)** So what you're going to want to do next is just click Save, and we've enabled our first sign-in provider for our project.
>
> **[5:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=325)** So what we're going to do next is make sure that the current domain that our front end and back end are running on is listed as a trusted domain for our Firebase project.
>
> **[5:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=337)** And in order to do that, you just need to go to Settings, select Authorized domains, and what you're going to want to do is click Add domain, and then you can find the domain here by going back to your front end and just copying everything except for the final path, right?
>
> **[5:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=354)** So for me, that's going to be everything after https up until /products, we're just going to copy that and now we can paste that inside the domain and click Add, and that will tell our Firebase project that we should trust that domain.
>
> **[6:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=369)** This just allows us to reroute the user back to that domain after the user has signed in.
>
> **[6:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=375)** You'll see what that looks like shortly.
>
> **[6:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=376)** So anyway, that's all the setup that we have to do for now in the Firebase console.
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/creating-a-firebase-project?u=76281980&t=381)** The next thing that we're going to do is see how we can start rewriting the front end and back end of our full stack application to incorporate a new authentication flow.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (3), this. (2), let (2), switch (1), this, (1)
> **CLI Commands:** make (5), find (2), npm (1)
> **UI Navigation:** click on (5), go to (1)
> **Prerequisites:** install (3), set up (1), setup (1)
> **Env Vars:** url (1), api (1)
> **Definitions:** is a  (1), we call this (1)
> **Code Identifiers:** createapp (1)
> **URLs:** [google.com](https://google.com) (1)

#### Sending Firebase Auth email links
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=0)** - [Instructor] All right, so now that we've set up a basic Firebase project for our app here, the next thing that we're going to do is start adding the email link authentication flow to our app.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=10)** Now, here's how authentication in this app is going to work.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=14)** And this is obviously just one possible way you could go about it, but for our purposes here, it's going to be the easiest.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=19)** What we're going to do is we're only going to allow users to add an item to their cart if they're logged in.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=25)** So what this means is that if a user isn't logged in, instead of this Add to cart button, we're going to display a button that says Sign in to add this item to your cart, something like that.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=36)** And then, when the user clicks on that button, what we're going to do is we're going to get the user's email just using a simple prompt.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=44)** Obviously, that's just one way we could do that as well.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=47)** You could create a new view component to get the user's email as well.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=51)** But we're going to use a prompt because it's straightforward.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=53)** And then once the user enters their email, what's going to happen is Firebase is going to send what's referred to sometimes as a magic link to the user's email.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=64)** All right, so the user is going to see an email show up in their inbox with a link that they can click that will take them back to the app and log them in automatically.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=74)** All right, so again, this is called email link verification and it's a really straightforward way to add authentication to a View app.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=81)** So let's get started with that.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=83)** What we're going to do is inside our View application, we're going to open up the Product Detail page.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=89)** And for now, what we'll do is underneath the Item is already in cart button, we're going to add another button here, and this button is going to have the class of sign-in.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=102)** All right, just for styling purposes.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=104)** And what this will say is it'll say Sign in to add to cart.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=111)** Okay?
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=112)** And, of course, we're going to want to hide this button when the user actually is logged in, as well as hide the Add to cart or Item is already in cart buttons when the user is not logged in, but we'll get to that a little bit later.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=123)** So now that we have this Sign in to add to cart button, what we're going to want to do is create a method that will get called when this button is clicked.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=131)** So what we're going to do is say @click, and then we're going to link this to a method which we'll call signIn.
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=141)** And then let's scroll down to our component definition.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=143)** And what we're going to do here is underneath this Add to cart method, we're going to add another method called signIn.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=149)** And the first thing we're going to do, as I said, is get the user's email, which we can do by saying const email = prompt.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=157)** Please enter your email to sign in.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=163)** Okay?
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=164)** And basically, what this will do is once the user enters their email into that prompt, we're going to have access to that value in this variable.
>
> **[2:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=171)** All right, so we can now use that to tell Firebase to send an email to the user.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=175)** So what this is going to look like is we're, first of all, going to have to import a few things from the Firebase Auth package.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=182)** So let's say import.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=184)** And the first thing we're going to want to import from Firebase is a function called getAuth, and then we'll also import a few more functions.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=192)** The first one's going to be sendSignInLinkToEmail.
>
> **[3:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=197)** And the nice thing about Firebase Auth functions is that they're usually pretty descriptive, so this actually sends the initial email to the user with that magic link.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=205)** And then after this, we're going to say isSignInWithEmailLink.
>
> **[3:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=213)** And what this does is it checks to see if the URL indicates that the user has just opened up a link from their email.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=221)** All right, and then last but not least, we're going to say signInWithEmailLink, and this is the function that actually does the signing in.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=229)** So we'll see how all of those work, and we're going to import those from firebase/auth.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=235)** And oops, it looks like that auto-corrected.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=238)** that should be signInWithEmailLink, not isSignInWithEmailLink, because we've already imported isSignInWithEmailLink over here.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=245)** Cool, so here's what we're going to do now.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=247)** We're going to use some of those functions that we just imported.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=250)** The first of which is going to be the getAuth.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=252)** That just gives us a reference to the Firebase Auth object.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=257)** And the next thing we're going to want to do is define something called actionCodeSettings.
>
> **[4:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=262)** Okay, so this is just going to be a settings object, and it's basically going to tell Firebase Auth how to redirect the user.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=269)** So here's what this is going to look like.
>
> **[4:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=270)** It's going to have a URL property, and this is going to be the URL that we want to redirect the user back to after they log in.
>
> **[4:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=278)** So that's actually going to be the same as what we currently have for our Product Detail page.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=283)** So let's just copy that and paste it, and we're going to need to replace the product ID with the actual product ID URL parameters.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=292)** So we'll just say this.$route.params.productId.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=300)** Okay, and besides that, the only other thing we need to add to this object is a property called handleCodeInApp.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=309)** And we're going to set that to True, right?
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=310)** That just tells Firebase that we want to handle the code, well, in the app, as the property name says.
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=317)** And now that we have those actionCodeSettings, we can actually send the email by saying sendSignInLinkToEmail, and we're going to pass the auth object from above into there.
>
> **[5:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=329)** We're going to pass the email that we got from the user and we're also going to pass the actionCodeSettings that we just set up to that function.
>
> **[5:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/sending-firebase-auth-email-links?u=76281980&t=338)** And that is how we're going to send an email to the user using Firebase Auth.

> [!info]- Semantic Content
>
> **Code Identifiers:** issigninwithemaillink (3), actioncodesettings (3), signin (2), getauth (2), sendsigninlinktoemail (2)
> **Code Keywords:** let (4), function (3), pass (3), const (1), import. (1)
> **Env Vars:** url (4)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Logging in with an email link
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=0)** - [Instructor] Cool, so now that we're sending this authentication link to the user using Firebase's sendSignInLinkToEmail function, the next thing that we're going to have to do is listen for this function to complete, right?
>
> **[0:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=12)** We want to know that everything went well and that Firebase Auth was able to send that email.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=17)** All right, so what we're going to do is say .then, and actually, since this returns a promise, we can use async and await instead.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=24)** So let's just add the async keyword onto our signIn method and then we're going to say await sendSignInLinkToEmail.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=33)** So we're going to wait for that to finish.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=35)** And once it finishes, what we're going to want to do, there's two things.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=39)** The first thing is we're going to display an alert, telling the user to check their email.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=43)** And again, you could do this in any other number of ways.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=47)** You could display some sort of heading that tells the user to check their email, but an alert for right now is just the most straightforward way to do this.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=54)** So we'll say alert, and we'll say, "A login link was sent to the email you provided."
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=64)** Cool, so now that we've displayed that alert, the other thing we're going to want to do is store the user's email that they gave us for later so that we can use it to sign in when the user clicks the link.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=76)** And don't worry too much if you don't understand the mechanics of this yet, you'll see what it looks like shortly.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=81)** We're going to say window.localStorage.setItem, and we'll call that item something like emailForSignIn, and we'll set the value there to email.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=94)** Okay, so this is just storing it for later in the browser's local storage so that we can get the user's email when the user clicks that link, as I said so.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=103)** Now that we've done that, right?
>
> **[1:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=104)** That's all of the logic that we need to write for sending the initial email link to the user.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=110)** So now, we need to write some code for handling when the user actually clicks that link.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=114)** Now, what this is going to look like is down here in our components created method, we're going to need to add a little bit of logic.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=122)** And the first thing that we're going to need to do is check to see whether the URL indicates that the user got to this page using an email link.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=133)** So here's how we do that.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=134)** We're just going to use another one of Firebase Auths functions that we imported.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=139)** All right, we're going to say, well, first of all, we'll need to get the auth object again by saying const auth = getAuth.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=146)** And then after that, we're going to say, if isSignInWithEmailLink, and we're going to pass the auth object to it, as well as the current location of the window.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=156)** So we're going to say window.location.href, and that will tell us, as I said, if the user just clicked the email link and got back to our app in that way.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=167)** Now, if that happened, what we're going to want to do is log the user in with another function that we imported, which is this signInWithEmailLink function.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=177)** So what that's going to look like is we're going to say signInWithEmailLink.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=184)** And for the arguments here, we're going to pass the auth object as well as the user's email, which we can get from localStorage.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=191)** So let's do that here.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=192)** We're going to say const email = window.localStorage.getItem,
>
> **[3:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=200)** and we're going to get the item called emailForSignIn.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=205)** And once we've done that, we can pass the email to this signInWithEmailLink function.
>
> **[3:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=210)** So we'll say email.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=212)** And the last argument here is going to be the location of the window again, so window.location.href.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=219)** Cool, so that should correctly sign the user in, but what we're going to want to do is wait for that by saying await signInWithEmailLink.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=227)** And after the user has signed in, we're going to want to display an alert by saying alert, and we'll tell the user that they were successfully signed in like so.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=239)** And the last thing that we're going to want to do is remove the user's email from localStorage by saying window.localStorage.removeItem, emailForSignIn.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=255)** Cool, so that should be all we need to do there.
>
> **[4:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=259)** So now that we've written all of that logic, let's test this thing out.
>
> **[4:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=263)** What you're going to want to do is open up your front end and back end.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=266)** And first of all, make sure that both of those are running without any errors.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=269)** All right, so let's scroll down here on the front end.
>
> **[4:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=274)** And oops, it looks like I have an error here just because I forgot a comma apparently.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=279)** So let's go and find that.
>
> **[4:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=282)** And there it is, I just put a semicolon where there should have been a comma.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=285)** So let's save that and see if that fixed everything.
>
> **[4:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=288)** And sure enough, the front end is running, and I also have my back end running, which you're going to want to make sure to have as well.
>
> **[4:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=293)** So let's go back to our front end now and what we're going to want to do is hit Refresh.
>
> **[4:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=298)** And we should see now that in addition to our Add to cart button, there's this Sign in to add to cart button, kind of a mouthful there, but let's try clicking on this thing.
>
> **[5:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=307)** And what we're going to want to do is enter in the email we want to log in with.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=310)** So I'm going to enter mine in here.
>
> **[5:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=312)** I'm going to say shaun.view.test@[gmail.com](https://gmail.com) and click OK.
>
> **[5:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=322)** And sure enough, we see an alert displayed saying, "A login link was sent to the email you provided."
>
> **[5:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=327)** So let's open up our email now.
>
> **[5:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=329)** And sure enough, we see the email shows up now.
>
> **[5:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=332)** And as you can see, it says, "We received a request to sign in to project, blah blah, blah."
>
> **[5:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=337)** That's the project we created in the Firebase Console.
>
> **[5:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=340)** And all we have to do now is click this Sign in to project thing.
>
> **[5:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=344)** And actually, since I'm testing this using Incognito mode just because I needed to use a different email account than what I was using for Firebase, I'm just going to copy this link and paste it in a new browser tab here, but you should be able to just click that link yourself.
>
> **[6:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=361)** And sure enough, we'll see that it says, "Successfully signed in."
>
> **[6:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=364)** And when we click OK, it will display everything like it did before.
>
> **[6:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=369)** So our user is currently logged in, and the next thing we're going to want to do is see how we can actually tell when a user is logged in and change our user interface accordingly.
>
> **[6:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/logging-in-with-an-email-link?u=76281980&t=381)** So that's what we have coming up next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (5), await (3), pass (3), async (2)
> **Code Identifiers:** localstorage (5), signinwithemaillink (4), emailforsignin (3), sendsigninlinktoemail (2), signin (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (1), coming up (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** url (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** make sure to (1)

#### Listening for auth state changes
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=1)** So at this point, the user is able to log into our app, but what we're going to need to do next is allow ourselves to access data about the user such as the user's id.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=11)** So what we're going to do here is open up the app component.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=15)** All right?
>
> **[0:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=16)** So the app component is what we're looking for here.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=18)** There we go.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=19)** And what we're going to have the app component do is actually subscribe to changes in the user's logged in state.
>
> **[0:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=27)** Now, if that sounds complicated don't worry too much because Firebase Auth provides us with a function that does exactly that.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=34)** So what we're going to do is import two things from Firebase Auth.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=38)** The first thing is going to be get auth, right?
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=41)** We've seen that function already.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=42)** And the second thing is going to be a function called on auth state changed, okay?
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=48)** And we're going to import both of those from Firebase slash auth.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=53)** So what we're going to do now is inside our app components created method which we actually have to add first.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=61)** So we'll say created, we're going to use this on auth state changed function to subscribe to changes in the user's authenticated state.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=70)** So in other words, we're going to have a callback function that will get called whenever the user logs in or logs out.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=76)** Okay?
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=77)** So what this is going to look like is we're going to say, first of all const get auth or const auth rather equals get auth.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=87)** And then we're going to call on auth state changed with that auth object as the first argument.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=94)** And as the second argument we're going to have a callback function that will take a user as an argument, right?
>
> **[1:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=100)** So this user is going to be either null if the user is currently logged out or it's going to be the user data from Firebase if the user is currently logged in.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=112)** And we can use this information in our other components to change the way our interface is displayed.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=117)** So what we're going to do here actually is we're going to have some data to our app.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=124)** And the main thing that we're going to have here is a property called user, right?
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=130)** So it's going to start auth as null because the user will start auth as logged out, but then whenever the on auth state changed, callback is triggered, we're going to set this user data to whatever Firebase just gave us, right?
>
> **[2:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=144)** So either null again, if the user's logged out or user data, if the user is logged in.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=149)** So what that's going to look like is we're going to say this dot user equals user.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=155)** And now what we can do is we can pass this user data down to all of our pages as a prop.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=163)** Now, since we're using router view here, what this is going to look like is we're just going to pass the prop to router view.
>
> **[2:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=169)** So we'll say user equals user.
>
> **[2:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=174)** And now what we should be able to do is inside our product detail page, for example, we can just just add a prop called user.
>
> **[3:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=181)** So we'll say props and then an array with the string user inside of it.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=186)** And we can now access the value of the user and use that to hide and show some of these buttons up at the top.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=192)** So what that's going to look like is we're going to say V if not item is in cart, and right so we'll say user to check if the user exists and add that as another condition for V if, right?
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=206)** So we only want to show add to cart or item is already in cart if the user is logged in, right?
>
> **[3:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=211)** Otherwise we want to show this sign-in to add to cart button.
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=215)** Same thing for our item is already in cart button.
>
> **[3:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=218)** We're going to say user and item is in Cart.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=221)** And for our sign in to add to cart we're going to say V if equals not user, right?
>
> **[3:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=227)** So we only want to show that if the user doesn't exist.
>
> **[3:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=231)** Cool.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=232)** So now that we have our app component that's taking care of managing the user the next thing that we're going to need to do is listen for changes to this user prop.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=241)** And if a user, let's say, logs in on our sign in page we're going to want to load the user's cart data then because currently what we're doing is just loading the user's cart down here in our created method.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=255)** And that's not necessarily what we want to do.
>
> **[4:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=256)** So first of all, what we're going to do is wrap this up inside an IF statement that checks to see if the user is already logged in and only loads the user's cart if they are.
>
> **[4:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=266)** So we're also going to want to change this ID from the placeholder, one, two, three, four, five to the actual ID of the user, which we can now access by saying this dot user dot UID, right?
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=280)** So that's just Firebase's property that it uses to store the randomly generated user id.
>
> **[4:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=286)** And we're also going to want to do the same thing, as I said up in a watch method.
>
> **[4:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=291)** So what we're going to do here is we'll do it underneath computed.
>
> **[4:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=295)** We're going to add a watch for when the user changes, right?
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=299)** When that user prop changes.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=300)** And what that's going to look like is we're going to say async user, and then this will give us the new user value as an argument.
>
> **[5:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=308)** That's just how watch works in view.
>
> **[5:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=311)** And then inside here we're just going to paste what we copied from down below.
>
> **[5:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=314)** So now what we can do is if the new user value exists right?
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=319)** In other words if the user just logged in, then we're going to use that user's user ID to load their cart.
>
> **[5:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=326)** So this just makes sure that the user's cart gets logged in no matter what.
>
> **[5:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=330)** All right?
>
> **[5:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=331)** So if we add new user value dot UID there and save it what we should be able to do now is go back to our front end and let's just close that.
>
> **[5:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=340)** We're going to hit refresh now, and sure enough we'll only see add to cart.
>
> **[5:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/listening-for-auth-state-changes?u=76281980&t=346)** Now, in order to test this we're actually going to have to log the user out and that's the next thing that we're going to see how to do.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), const (2), pass (2), let (2), interface (1)
> **Definitions:** in other words (2), is a  (1)
> **Env Vars:** uid (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Signing the user out
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=0)** - [Instructor] All right, so now that we've allowed our user to log in and we've subscribed to authentication state changes, the next thing that we're going to have to do in order to make testing easier from now on is make it possible for our users to log out.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=13)** So what we're going to do here is add a simple sign out button to the top of our nav bar, and what that's going to involve is just opening up our nav bar component.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=24)** And then what we're going to do is we're going to start off by importing the "getAuth" function from Firebase Auth, as well as the "signOut" function.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=35)** So we'll import those from "firebase/auth" And then down here in our nav bar, what we're going to want to do is create a method for signing out.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=46)** So we'll say "methods:", then we'll create a "signOut" method, like so.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=51)** And inside here all we're going to have to do is say "const auth = getAuth()" and then we'll say "signOut(auth)".
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=60)** So that's going to call Firebase's sign out method there and log the user out.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=66)** And all that does is it deletes some data that's stored on the user's browser behind the scenes.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=71)** So anyway, now that we've done that, let's just add a button to our nav bar that will allow the user to sign out.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=77)** What this is going to look like is we're going to start off by wrapping our shopping cart button in a div with the class name of "nav-buttons-wrap".
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=88)** That's just for styling purposes there.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=91)** And once we've done that, we're going to put our router link and shopping cart button inside of that.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=98)** And we're going to add a button next to the router link, so above it in our case, and that button is going to say "Sign Out".
>
> **[1:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=108)** And for that button's attributes, we're going to say "@click=signOut".
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=114)** And we also need to remove this class from our router link.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=117)** So let's save that and go back to our front end and hit refresh and, sure enough, we should see that our two buttons are next to each other in the nav bar, but it looks like something happened while loading our data.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=129)** Now, what happened here, you can actually see this in the server that's running.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=134)** We got some kind of error when we tried to access user.cartItems.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=138)** Now, the reason this happened is because in our case here, the user doesn't yet have a shopping cart.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=145)** The user has a new ID that was generated for us by Firebase, so what we need to do is just open up server.js and anywhere where we say "user.cartItems", we just need to add a default value for that and back it up with this question mark thing in case the user doesn't exist there.
>
> **[2:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=164)** So you can just do a global find and replace like I'm doing here, and I'm just going to replace all three of those things like so.
>
> **[2:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=171)** And now we should be able to restart our server and see that that error won't happen anymore.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=176)** So let's go back to the front end and hit refresh.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=179)** And, sure enough, we'll see that everything is back to normal.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=182)** So let's try signing out now and see if that changes the button like we want it to.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=186)** We're going to say sign out and, sure enough, that changes this button to say "sign in to add to cart".
>
> **[3:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=192)** And if you want to test that out by clicking that and reentering your email, so I'm going to enter my shaun.vue.test fake email into there and click okay.
>
> **[3:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=204)** And again, we'll see this alert that says a login link was sent to the email you provided.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=209)** And if we go back to our email now, we should see that we have another link, which we can click.
>
> **[3:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=214)** Well, you can click.
>
> **[3:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=215)** Since I'm testing this in incognito mode, just for account reasons, I'm going to just copy the link address here and go back and paste that here and hit enter.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=229)** And what we should see is that it says "successfully signed in!"
>
> **[3:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=232)** and once we click OK, that will load the data for us and we'll see that it says add to cart.
>
> **[3:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=238)** Now, one last thing that I want to do with our nav bar here is make it so that the sign out button up here is hidden when the user is logged out.
>
> **[4:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=246)** There's no reason to show that if the user isn't already logged in in the first place.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=250)** So this is actually pretty straightforward.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=252)** What we're going to do is add another prop to our nav bar, and actually this will be the first prop that we add to our nav bar.
>
> **[4:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=259)** So we're going to say "props:" and then we'll allow the app component to pass down the same user prop to our nav bar as it passed down to our product detail page.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=269)** So let's open up app.vue now and what we're going to do is have it pass down ":user='user'" to our nav bar and now we can use that prop to show and hide the sign out button.
>
> **[4:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=282)** So all we need to do is say "v-if=" and we're going to say "user".
>
> **[4:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=287)** So we only want to show this if the user exists because they're signed in.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=292)** And now what we should be able to do is go back to our front end and we'll hit refresh here.
>
> **[4:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=298)** There we go.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=299)** And now if we click sign out, what we should see is that that sign out button disappears, as the user is signed out, as well as the text changing on this button down here.
>
> **[5:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/signing-the-user-out?u=76281980&t=309)** So anyway, that's how to sign a user out and hide the button accordingly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), pass (2), const (1), case, (1)
> **Code Identifiers:** signout (4), getauth (2), cartitems (2)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** go back to (4)
> **File Paths:** server.js (1)
> **Speakers:** - [instructor] (1)

#### Managing cart items with authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=0)** - [Instructor] All right, so the last thing that we're going to see how to do here is add items to the user's cart with our new authentication setup, as well as remove items from the user's cart.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=9)** Now, the first thing that we're going to have to do here in order to make sure everything works properly is we're going to have to make one important change to our server, right?
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=18)** Because currently, we only have one user in our database, and that's the user with the ID, 12345, that we put there earlier.
>
> **[0:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=27)** So what we're going to need to do is when our server receives a request to add an item to the cart and we don't already have a user with that ID in the database, we're going to need to add a new user with that ID.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=41)** So if you scroll down to the post endpoint for adding a new item to a user's cart, what we're going to want to do here is before we call db.collection, users, .updateOne, right?
>
> **[0:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=52)** Which you'll notice if we don't already have a user with this ID, it just isn't going to do anything because there's no matching user to update.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=60)** What we're going to want to do before that is check to see if there's an existingUser, and if there isn't, we're going to create a new one.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=68)** So here's what this is going to look like.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=71)** We're going to start off by saying const existingUser = await, and then we'll say db.collection, users, and we're going to want to find one user whose ID matches the user ID URL parameter.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=89)** All right, so now that we have this existingUser loaded from the database, we're going to need to check and see if the user exists.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=94)** Now, if existingUser is undefined, as it will be if we didn't find any matching users, then what we're going to want to do, as I said, is insert a new user with an empty shopping cart, and then just let the rest of this logic run from before.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=111)** So here's what that's going to look like.
>
> **[1:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=113)** We're going to say, if there is no existingUser, right?
>
> **[1:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=117)** If the existingUser doesn't actually exist, in other words, if it's undefined, we're going to say await db.collection, users, .insertOne,
>
> **[2:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=130)** and we're going to insert a new user whose ID matches that userId URL parameter.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=135)** And we're also going to add a cart items property, that's going to be an empty array.
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=141)** All right, so that will create a new user that we can then add item IDs to their cart for.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=147)** So now that we've added that to the server, we should be able to go back to our ProductDetailPage and let's open up the method for adding to cart, right?
>
> **[2:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=157)** This add to cart method here.
>
> **[2:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=159)** What we're going to need to do is instead of sending a request to 12345, we're going to need to actually insert the user's ID there.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=167)** So here's what that's going to look like.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=170)** We're just going to change these single quotes to back ticks, like so.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=175)** And then instead of just having hard coded 12345, we will use the user's ID by saying this.user.uid, okay?
>
> **[3:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=186)** And that should be really the only change we need to make there.
>
> **[3:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=190)** So now, let's head over to the ShoppingCartPage, where we're going to have to add logic not only for loading a user's shopping cart, right?
>
> **[3:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=198)** We're going to need to change that ID for this one as well, but we're also going to have to change this when we're removing an item from the user's cart.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=206)** So let's start off here by adding similar logic to what we had in our ProductDetailPage to our ShoppingCartPage, what we're going to do is find the watch that we added for the user prop and add that to our ShoppingCartPage.
>
> **[3:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=222)** We'll put that right underneath our data here, I suppose.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=225)** And as a matter of fact, we're also going to want to add that user prop in the first place.
>
> **[3:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=230)** So again, because our app is passing down this user prop to the router-view, all of the pages that that router-view displays can access it automatically.
>
> **[3:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=239)** So let's add a user prop to our ShoppingCartPage.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=242)** And now that we have this watch, that's automatically going to try and load the user's cart if the user logs in, let's say, right?
>
> **[4:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=251)** And since we copy this from the ProductDetailPage, we already have all of the correct logic.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=257)** The next thing that we can do now is change this removeFromCart method so that it actually incorporates the user's correct ID.
>
> **[4:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=265)** So let's just change this here.
>
> **[4:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=267)** What we're going to do is instead of having 12345, we're going to insert the user's ID by saying this.user.uid, and that should be all we need to do there.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=280)** And last but not least, down here in the created method, we're going to want to load the user's cart items only if the user is logged in, all right?
>
> **[4:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=289)** So, otherwise, we're just going to display that message saying that the user doesn't have any items in their cart, which if they're not logged in, is going to be absolutely true.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=297)** So let's say if this.user, and then, of course, we're going to put all of this logic inside of there, so we'll just paste that here.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=306)** So, now, it's only going to load the user's cart if the user is logged in.
>
> **[5:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=311)** And, all right, and this also needs us to change the user's ID here.
>
> **[5:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=315)** So let's just change these to back ticks and say this.user.uid/cart.
>
> **[5:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=322)** All right, so that should be all we need to do to make our add to cart and remove from cart functionality work with our new authentication logic.
>
> **[5:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=330)** So let's open up our front end.
>
> **[5:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=332)** Well, first of all, let's make sure there's no errors.
>
> **[5:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=334)** So let's take a look at the back end and the front end.
>
> **[5:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=336)** And it looks like both the front end and back end are running correctly.
>
> **[5:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=339)** So let's hit Refresh here.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=342)** And let's try now to sign in and add some items to our cart.
>
> **[5:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=346)** So I'm going to sign in again with my test email.
>
> **[5:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=350)** And there we go.
>
> **[5:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=351)** I'll click OK.
>
> **[5:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=352)** And now I should be able to head over to my email and find the new email that I received.
>
> **[5:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=357)** So, once again, I'm going to copy this link, but you should be able to click it and open it up in the new tab.
>
> **[6:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=362)** So I'm going to say Copy link address and I'm going to come back here and replace this and log in, like so.
>
> **[6:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=371)** Okay, so it should say, "Successfully signed in!" once again.
>
> **[6:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=374)** And now, we see that Sign Out button show up, so that shows us that we're logged in.
>
> **[6:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=379)** So now, what we should be able to do is add items to our cart, and also view our cart and remove them.
>
> **[6:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=386)** So let's try adding the basil olive oil to our cart.
>
> **[6:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=389)** We're just going to click Add to cart here.
>
> **[6:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=391)** And sure enough, it says, "Successfully added item to cart!"
>
> **[6:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=394)** So let's do the same thing now for the garlic olive oil, I suppose.
>
> **[6:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=397)** We'll try this again, click Add to cart.
>
> **[6:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=400)** That one was successfully added as well.
>
> **[6:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=402)** So now, if we go over to our shopping cart, and nope, it looks like something went wrong.
>
> **[6:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=407)** And actually, this is because I mistyped the name of the props here, right?
>
> **[6:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=413)** That should be props instead of prop.
>
> **[6:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=415)** So let's try this again.
>
> **[6:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=416)** We're going to save it.
>
> **[6:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=417)** And if we go back and hit Refresh, we should see that it'll successfully load all of our products for us.
>
> **[7:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=427)** And let's now try removing these items from our cart.
>
> **[7:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=430)** We should be able to click on one of these.
>
> **[7:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=432)** And sure enough, that removes the item.
>
> **[7:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/managing-cart-items-with-authentication?u=76281980&t=435)** So, anyway, at this point, we've fully integrated our app with Firebase Authentication, so the next step for us is going to be releasing this app.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), this. (4), await (2), const (1), for. (1)
> **Code Identifiers:** existinguser (6), updateone (1), insertone (1), userid (1), removefromcart (1)
> **CLI Commands:** make (5), find (4)
> **Env Vars:** url (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Prerequisites:** setup (1)


### 7. 6. Hosting Your Site

#### The release process
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=0)** - [Instructor] Alright, so at this point we have a working full-stack application with user authentication.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=6)** So the last thing that we're going to do in this course is see how to release our app so that anybody in the world can access it, right?
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=13)** At the end of this section, you're going to be able to send your friends an actual URL that they can use to visit your website on their own computer.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=21)** All right, now in order to release our application, there are a few steps we're going to need to follow.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=25)** The first thing we're going to need to do is build and serve our front end.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=29)** Now we'll go over this in more detail shortly, but for now, just know that we're going to need to convert our front end and back end so that instead of being two separate applications that are running and communicating, they're both being served by a single server.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=45)** You'll see what this looks like in just a minute, so don't worry if that sounds complicated.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=49)** So once we've built and served our front end, we're going to set up a Render account.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=53)** And Render is the hosting platform we're going to be using to host our application.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=58)** And it's great because it has a free tier.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=61)** So once we've done that, we're going to be able to make a few small changes to our server.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=67)** And finally, once we've got all of that out of the way, we'll be able to publish our app and see it running on the internet.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=74)** So that's what we have coming up here.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/the-release-process?u=76281980&t=76)** Let's jump in.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Cross-References:** coming up (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Preparing the front-end for release
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=0)** - [Instructor] All right, so the first step in getting our app ready to release is going to be to build our front-end and have our front-end files served by the backend.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=10)** So, what this is going to enable us to do, essentially, is have both the backend and front-end served on the same server, all right?
>
> **[0:18](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=18)** And the main benefit of this is that it helps us simplify our architecture a little bit.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=22)** So anyway, what this is going to look like is we're going to start off by opening up our terminal into the front-end, and we're going to run the command npm run build.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=33)** All right, so this is going to build our Vue project.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=36)** And what we're going to see if we take a look at the front end directory now is that there's this dist directory that contains all of the compiled view code for our project.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=47)** All right, so once that script is finished running what we can do is copy this dist folder over to the backend, and as you'll see shortly, we can add a little bit of code to our backend to make it serve all of those files automatically.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=60)** But before we do that, there's actually a few changes we want to make to our front end.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=64)** So the first of those changes is going to be to open up our main.js file and we're going to add a redirect to our routes down here.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=73)** So basically what we're going to do is when the user goes to the / route, right, the regular home route, we're going to automatically redirect them to the products.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=83)** So what we're going to do is say path and we're just going to say the / route here.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=88)** And then what we're going to do is add a property called redirect, and that's going to send the user back to /products.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=96)** So let's just save that and there we go.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=99)** And you can always feel free to test this as well just by trying to go to the home route of our application now.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=105)** But I'm going to keep moving.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=107)** Now, the next thing we have to do is change the redirect URL that we specified in our product detail page, right?
>
> **[1:54](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=114)** Because currently the redirect URL is going to take us to our development application running in Codespaces, and that's not what we want.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=124)** Now, before we can actually know what this URL is going to be, we need to know what URL our application is going to be running on in production.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=131)** So what you're going to want to do is go to dashboard.[render.com](https://render.com), and this is going to require you to perhaps log in and create an account.
>
> **[2:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=141)** But once you've done that, you should be able to go to the dashboard and we're going to create a new service on Render.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=147)** And you can do that by clicking the new button and looking for web service.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=152)** So we're going to select web service here.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=154)** Now, the next step in this process is going to be to link this web service with a GitHub repo that we own.
>
> **[2:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=161)** So what I'm going to do is link this with the GitHub repo that I've been developing on with Codespaces.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=167)** And that happens to be this one right here.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=170)** I'm just going to click connect.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=172)** And you may need to manually connect this to GitHub yourself.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=176)** It's a pretty easy process.
>
> **[2:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=178)** All right, so once you've done that, that should take you to a setup form.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=182)** And the first thing it's going to ask you is what you want to name your web service.
>
> **[3:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=187)** All right, now I'm going to name my web service full-stack-vue-deployment, but you're probably going to have to name yours something else to make sure it doesn't collide.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=199)** All right, so once you've specified the name, what we're going to do is select the region.
>
> **[3:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=203)** I'm just going to leave the default selection there.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=206)** And then you're going to select the branch that you want to deploy.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=208)** Now, in my case, this is going to be this branch here but yours might be something else and you can even just create a new branch for this deployment if you want to.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=219)** Next up, what we're going to do is specify the root directory and that's going to be back-end, right?
>
> **[3:44](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=224)** The back-end is going to be the directory we'll want to run as a web service here.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=229)** And finally, for the environment, we're going to select Node.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=233)** And then for the build command we're going to say npm install, double ampersand, npx babel src, right?
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=241)** And you're just going to want to type out what you see here.
>
> **[4:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=243)** So what that will do is it will install all of our NPM packages and it will build our backend into something that can be run by this platform.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=252)** Okay?
>
> **[4:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=254)** And last but not least, the start command is going to be the command that we'll use to start our server.
>
> **[4:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=259)** So in our case that's going to be Node and then build/server.js.
>
> **[4:25](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=265)** Just make sure you type out exactly what's here because this should work for our current project setup.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=271)** So anyway, now that we've done that we're going to click create web service down at the bottom.
>
> **[4:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=275)** And by the way, you can always change all of those options later on.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=279)** And it's going to take a minute or two to create our web service, but once it's done it's going to try and build our project and run it.
>
> **[4:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=287)** Now, it's probably going to fail right now because we haven't actually prepared our project properly, but the thing we're interested in is going to be this URL up here at the top, right?
>
> **[4:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=298)** This is what we're going to want to use as our redirect URL instead of what we had before.
>
> **[5:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=302)** So let's copy that address.
>
> **[5:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=305)** And if we go back to our IDE, what we're going to do is just replace our previous Codespaces URL, right?
>
> **[5:11](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=311)** All the way up to where we say /products/ blah blah blah, with that new URL.
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=317)** And this is why we had to set up our project first to make sure that we had access to that name and to make sure that we had the URL.
>
> **[5:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=323)** So now that we've done that, we should be able to build our front end and move it over to our backend.
>
> **[5:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=329)** And then we'll commit this and deploy it with Render.
>
> **[5:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=333)** All right, so that should be all we need to do on the front end.
>
> **[5:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/preparing-the-front-end-for-release?u=76281980&t=335)** The next thing we're going to do is build our front end and see how we can host those files with our backend.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), npm (3), node (2), npx (1)
> **Env Vars:** url (9), npm (1), ide (1)
> **Code Keywords:** let (2), require (1), case, (1), finally, (1)
> **Prerequisites:** setup (2), install (2), set up (1)
> **Tools:** github (3), terminal (1)
> **UI Navigation:** go to (2), select the (2)
> **File Paths:** main.js (1), build/server.js (1)
> **Exercise Files:** github repo (2)

#### Releasing the app
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=0)** - [Instructor] Alright, so in order to have our front end files served by our backend, we're again going to have to run the build script inside our view front end.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=8)** So you're going to want to open up a terminal in the front end directory and run npm, run build.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=13)** And this will replace any old disk directory that you may have had.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=19)** All right, so once that script completes, what we're going to do next is we're going to copy that disk directory over into the route directory of the backend.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=29)** And I already happen to have a disk directory there.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=32)** I'm going to delete that.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=33)** That was just from before.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=34)** So let's paste the new one inside of there.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=37)** And now we're going to open up the server file and add a few lines that will enable our server to statically serve those front end files.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=47)** So here's what this is going to look like.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=49)** Underneath where we said app dot use for our images path, we're going to say app dot use, express dot static.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=57)** All right, and inside there the arguments we're going to pass will be path dot resolve and then we'll say underscore, underscore, directory name and then as a string dot dot slash disk.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=70)** So this is just helping express to locate those front end files.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=74)** And then after this we're going to say as an object, max age one Y and etag false.
>
> **[1:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=84)** And this is just making sure that the front end serving works correctly.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=88)** So don't worry too much about the details there.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=90)** Alright, so now that we've added that app dot use, the last thing we're going to do is go down to the bottom of our server, right before we call app dot listen and we're going to say app dot get.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=102)** And the path here is going to be a star, which basically will catch all of the other routes that weren't caught by the above handlers.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=110)** Okay, and for the callback function here what we're going to do is just say response dot send file and then we're going to say path dot join, underscore, underscore, directory name again and then dot dot slash, dist slash index dot html.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=127)** So what this is doing is it's going to send back the index html file, which is the main file that the client wants to load from our view app for each and every request that isn't handled by an API endpoint.
>
> **[2:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=142)** All right, so now that we've added that, one more thing that we're going to have to do is allow ourselves to pass in the server port as an environment variable, right?
>
> **[2:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=150)** This will allow the hosting platform to change the server port as well if it needs to.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=155)** So what we're going to do is say, const port equals process dot env dot port or we're going to say 8,000 and provide that as a backup.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=167)** So now, instead of hard coding 8,000 here, we can just say port and then we'll replace it here as well and say plus port.
>
> **[2:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=176)** And that should be all we need to do here.
>
> **[2:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=178)** So if you want to try this out, what you can do, is run only the backend directory by saying NPM run dev.
>
> **[3:09](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=189)** And what you should be able to do after that is open up the backend in the browser, just like we were able to open up the front end in the browser earlier.
>
> **[3:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=197)** So let's take a look at ports after our app is up and running.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=201)** And what we're going to do is just click this world icon, like so, and that'll take us to the front end.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=209)** And again, this is being served by the server now, instead of having a separate front end and back end running at the same time.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=217)** All right, so now that everything looks like it's in order on our server, we should be able to publish our app to render, by committing all of the changes we just made and I'm going to do that in another terminal here, just by saying get add all and then get commit dash m and I'll say prepared app for deploy.
>
> **[4:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=240)** Okay. All right.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=241)** So now we should be able to push these files and by the way, I'm pushing to that same branch that I selected when we set up our render project.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=250)** So if there's a specific branch that your render project is watching, you're going to want to push to that one instead.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=257)** Cool, so now that we've done that, we should be able to go back to our render dashboard and if you look under this events tab here, you should see that a deploy has been started, right?
>
> **[4:28](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=268)** That's this one right here.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=269)** And you can see the little loading bar and you can take a look at what's going on in the terminal just by clicking on the deploy link here.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=276)** And sure enough, it'll look an awful lot like what we used to see in our terminal.
>
> **[4:41](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=281)** So, let's just give that a minute or two to run and hopefully we should see a success message.
>
> **[4:46](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=286)** If you see some sort of error, then that means we didn't do something quite right.
>
> **[4:51](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=291)** And finally, if all went well, we should see server is listening on port 8,000 printed out to this console.
>
> **[4:58](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=298)** So what we should be able to do now is click on this fullstack view deployment dot on [render.com](https://render.com) thing up at the top and yours might have a different name, assuming that you used a different project name there.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=310)** So I'm going to click on that and sure enough, we'll see our products page rendered.
>
> **[5:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=313)** So let's just take a look at some of the other pages to make sure things work.
>
> **[5:17](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=317)** And you can even try signing in if you want.
>
> **[5:19](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=319)** Let's give that a try.
>
> **[5:20](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=320)** We're going to click sign in to add to cart and let's enter in my test email again.
>
> **[5:27](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=327)** There we go.
>
> **[5:29](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=329)** And as a matter of fact, that's not going to work because if you take a look at the console, you'll see that we're getting an unauthorized continue URI error from Firebase.
>
> **[5:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=339)** So basically all that means is we need to add the new URL for our deployed project to authorize domains, right alongside our code spaces URL.
>
> **[5:49](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=349)** So let's click add domain, and we're just going to copy the URL for our site here.
>
> **[5:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=355)** All right, we'll say full stack view deployment on [render.com](https://render.com).
>
> **[5:59](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=359)** And now if we go back to our firebase, we're just going to paste that as the domain, click add.
>
> **[6:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=365)** So we should be able to try this one more time.
>
> **[6:08](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=368)** I'm just going to click sign in to add to cart.
>
> **[6:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=370)** I'm going to enter in my email.
>
> **[6:13](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=373)** There we go.
>
> **[6:15](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=375)** And when I click okay, and sure enough we see that it says a login link was sent to the email you provided.
>
> **[6:22](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=382)** So feel free to continue in that flow.
>
> **[6:24](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=384)** But that's about all we should need to do.
>
> **[6:26](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=386)** So congratulations on building and deploying this fullstack app with me.
>
> **[6:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/releasing-the-app?u=76281980&t=390)** That is how you deploy a fullstack view application on render.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), continue (2), delete (1), static (1)
> **Env Vars:** url (3), api (1), npm (1), uri (1)
> **Tools:** terminal (4)
> **CLI Commands:** npm (2), make (1)
> **URLs:** [render.com](https://render.com) (2)
> **Cross-References:** go back to (2)
> **Ports:** port 8 (1)
> **UI Navigation:** click on (1)


### 8. Conclusion

#### Recommended next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=0)** - [Shaun] Well, that's about it for the course, and we have covered quite a few topics.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=5)** So just to review what we've learned in this course, we started off by seeing how to build a basic front end for our application with Vue, and then we saw how to build a corresponding back end for our application using Node.js and Express, and we also added MongoDB to that stack a little bit later.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=23)** After that, we saw how to connect the front end and back end using the Axios library to make network requests between the two.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=30)** And then we added simple user authentication to our app and closed out by hosting the entire full-stack application.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=39)** Now, I want to reiterate that all of this work that we've just completed is a pretty impressive undertaking, and it's something that most web developers wouldn't know how to do.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=48)** So, you should definitely feel very proud of yourself if you've followed along with all the steps and understand all of the concepts we've covered here.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=56)** So now that you've got all of this great full-stack development knowledge, you might be wondering where to go next.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=62)** And there are several things that I would recommend.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=65)** First and foremost, I'd recommend that you use everything you've learned here to build your own site.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=70)** Now, not only will this allow you to apply your knowledge to solve real world problems, but whatever you end up building will be a great portfolio piece for potential employers if you're looking for a full stack development job.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=83)** And again, as a side note, never underestimate the power of being able to walk into a job interview with a real full-stack site that you've built that your interviewers can visit.
>
> **[1:33](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=93)** All right, so besides building your own applications, there are also several other courses in the library that would complement this one nicely.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=100)** And in particular, if you're interested in seeing how to build a similar full-stack web application but using a different tech stack, be sure to check out my courses on building a full-stack application with React and building a full-stack application with Angular.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=115)** And now that I think about it, those are actually fantastic next steps for you to expand your full-stack development skills.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=121)** Well, thank you so much for watching.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=123)** If you want to get in touch with me, please don't hesitate to connect with me on LinkedIn.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=127)** I'm on LinkedIn pretty often and would love to hear any questions or comments from you, or if you just want to say "Hi," that's okay too.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-creating-and-hosting-a-full-stack-site-21646902/recommended-next-steps?u=76281980&t=134)** Well, thanks again, and I hope you enjoyed the course.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), make (1)
> **File Paths:** node.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [shaun] (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/vuejs-creating-and-hosting-a-full-stack-site-4359014/codespaces)

## Skills Covered

- Vue.js
- Full-Stack Development

## Path Context

### In [[Explore Web Development with Vue.js]]
← [[Vue.js- Testing and Debugging]] | **3 of 3**

## Appears In

- [[Explore Web Development with Vue.js]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Full-Stack Development
- [[Learning Vue Js]] — Vue.js
- [[Building Full-Stack Apps with React and Spring]] — Full-Stack Development
- [[Capstone- Building Production Features with Copilot]] — Full-Stack Development
- [[Succeeding in Web Development- Full Stack and Front End]] — Full-Stack Development

---

[↑ Back to top](#)