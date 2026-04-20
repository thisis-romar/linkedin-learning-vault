---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-javascript-debugging-2
url: "https://www.linkedin.com/learning/learning-javascript-debugging-2"
duration_minutes: 167
duration: 2h 47m
level: Intermediate
updated: 4/10/2023
learners: 2834
skills:
  - Debugging Code
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEvTPISgiHW0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601068625848?e=2147483647&amp;v=beta&amp;t=ehvmL_kf8fz0SnlMc2EOMyrvvKRLuldeLVYu40svwTU"
linkedin_topic: Software Development
learning_paths:
  - Advance Your JavaScript Skills
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/debugging-code
  - skill/javascript
status: not-started
created: 2026-04-20
---

![Learning JavaScript Debugging](https://media.licdn.com/dms/image/v2/C4E0DAQEvTPISgiHW0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601068625848?e=2147483647&amp;v=beta&amp;t=ehvmL_kf8fz0SnlMc2EOMyrvvKRLuldeLVYu40svwTU)

# Learning JavaScript Debugging

> Whether you're new to coding or an experienced developer, bugs are an inevitable part of web development. Debuggers can make the task of finding and fixing those bugs much easier. In this course, learn how to work with a debugger to efficiently locate and resolve issues in your JavaScript projects. Instructor Joe Chellman provides a language-centered guide to dealing with the complexities involved

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2) | 2h 47m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Joe Chellman]]

## Resources

- Exercise files available

## Skills Covered

- Debugging Code
- JavaScript

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=0)** - [Joe] Hi, I'm Joe Chellman, and welcome to Learning JavaScript Debugging.
>
> **[0:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=4)** As developers, our main job is to find ways to turn ideas into working products, apps, websites, art pieces, whatever.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=12)** Knowing how to write code is a beautiful thing, with a computer doing exactly what we tell them to, or so we hope.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=18)** But trouble can arise when the things we've written don't produce the results we're looking for.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=22)** As cool a job description as we have, the actual work is often just trying to track down and fix problems in the code we've written or heaven forbid what someone else wrote.
>
> **[0:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=31)** It can be really frustrating tracking down bugs, so every tool we can bring to bear is good for our physical and mental well-being, causing fewer face-shaped dents in our desks.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=41)** In this course, we're going to go in depth on how to use a debugger to better understand your code, so you can find and fix issues more easily.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=48)** Fortunately, these tools are pretty easy to use once you understand how they work, so it won't take long.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=52)** We'll start by going over the basics, what software you need, what terminology you need to understand, and how each main feature of a debugger works.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=60)** Next, we'll work through a series of examples.
>
> **[1:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=62)** Like all software on the web, debuggers are constantly being refined to work better with the sites and projects all of us are building everyday.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=69)** So, we'll look at how JavaScript debugging works in the context of jQuery, a React project, mobile websites, Node.js, and a WordPress theme.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=78)** We'll also take a look at using an integrated development environment, an IDE, in a JavaScript project and what a difference that can make in terms of your productivity.
>
> **[1:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=87)** Using a debugger is not the only way to better understand how your JavaScript works, but it is essential.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/welcome?u=76281980&t=92)** So, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), node (1), make (1)
> **Code Keywords:** for. (1), let (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** jquery (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - [joe] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's talk about what you should know to get the most out of this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=3)** You should understand HTML and CSS at an intermediate level or so.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=7)** Almost every example we're looking at here will be based in HTML, but we won't be talking through any of the specifics.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=14)** For JavaScript, beginning to intermediate is good.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=16)** You should be familiar with ES5, the version of JavaScript that runs in every environment out of the box.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=22)** ES6 wasn't required to illustrate how debugging works, so I've left it out.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=26)** Along with Vanilla JavaScript, other JavaScript libraries and frameworks will appear, especially jQuery, React and Node.
>
> **[0:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=34)** We'll talk through the parts of these that we need to in order to understand the examples, but you don't need to be an expert in any of them to understand what we're doing.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-you-should-know?u=76281980&t=41)** These examples could point you in some other directions you'll want to explore in a little more depth later.

> [!info]- Semantic Content
>
> **Env Vars:** html (2), css (1), es5 (1), es6 (1)
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** jquery (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=0)** - [Instructor] The exercise files for this course are broken down by chapter and video.
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=6)** Some of the examples look similar when loaded in a browser but have some differences for the purpose of illustrating some debugging concept.
>
> **[0:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=13)** A few of the examples will be best run through a local web server, which will involve copying files into the web root of your local server.
>
> **[0:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=19)** When the time comes, we'll talk through those.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=22)** One example targets Node.js.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=23)** So if you don't have that installed and want to follow along, you'll need to download it from [nodejs.org](https://nodejs.org).
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=29)** Otherwise you should be able to open the folder for a particular video and open the index.html file in your browser of choice and proceed with the examples.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=39)** I have a special note for Windows users.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=41)** Please make sure to decompress or extract the exercise file's zip archive before you try to run any of the examples in a browser.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=48)** Windows makes it possible if you just open this to browse a zip archive without extracting the files first, which is really nifty when you're working with say one file at a time.
>
> **[0:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=59)** But the examples in this course load lots of related files.
>
> **[1:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=62)** So if you try to use the examples that way, you'll have very unhappy pages with broken links all over the place and very little working as it should.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=68)** So please extract the files first.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=71)** The way you do that is by clicking the button that says extract up here in the toolbar if you need to and then clicking extract all.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=79)** You can also do it by right clicking that zip archive right here on your desktop and choosing extract all.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=85)** You'll get to choose a location where the files should be saved once they're extracted.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=88)** And when that's finished, you'll end up with an exercise files folder which you can open and browse through normally.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/exercise-files-2?u=76281980&t=95)** From there, you'll be able to open any of the files in your browser or editor as appropriate and expect them to work just as they should.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (2), in the toolbar (1)
> **Exercise Files:** exercise files (2), exercise file (1)
> **File Paths:** node.js (1), index.html (1)
> **CLI Commands:** node (1), make (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### What's new in this update
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980&t=0)** - [Instructor] This course has been updated since its original release.
>
> **[0:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980&t=3)** There are now several challenges in chapters two and three, the project chapters, to help reinforce what we're covering.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980&t=8)** These will all involve using the debuggers built into the browser and code editor in some fashion, helping us reason about our code to solve problems better.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980&t=16)** I hope you'll find them interesting and engaging.
>
> **[0:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980&t=19)** There are also a couple of updates to videos dealing with JavaScript framework, React, and the editor visual studio code to account for updates in each that can impact working through the examples.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/what-s-new-in-this-update?u=76281980&t=29)** As you proceed through the course, you may note that Chrome and its debugger look a little different in the original videos, but the locations of everything we're using are pretty much the same, and following along in the current version should not be an issue.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=0)** - [Instructor] This course includes several videos called challenges.
>
> **[0:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=3)** Challenges are quick activities that give you a hands-on opportunity to practice and master what you're learning.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=8)** I'll start each challenge by describing your core objectives for the activity.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=12)** Every challenge involves sample files, so I'll tell you where to find them, and we'll go over anything you need to know about them before you start.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=18)** I'll also give you a rough estimate of how much time it took me to complete the challenge.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=22)** When you've completed a challenge, make sure to watch the matching solution video.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=26)** In each solution, I'll show you how I solved the challenge and give you some of my thinking along the way.
>
> **[0:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=30)** These challenges are a great opportunity for you to master what you've been learning.
>
> **[0:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/using-challenges?u=76281980&t=34)** I hope you enjoy working through them.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding the Need for a Debugger

#### Introducing our friend, the debugger
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=0)** - [Instructor] The tool we'll be using in this course is called a debugger, or sometimes a stepwise debugger.
>
> **[0:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=5)** Almost every programming language has one of these, so once you get a feel for using one in JavaScript, you'll be able to take that knowledge and apply it directly to PHP, C, Python, whatever.
>
> **[0:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=15)** My intention in this course is to teach you not how to write code, but how to use the debugger to better understand your code, so you can finish projects more quickly.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=23)** A debugger is software that lets you closely inspect what's happening in other software in real-time.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=28)** It's one of the most effective tools we have for finding and squashing bugs, and fortunately, in JavaScript, debuggers are quite easy to use.
>
> **[0:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=35)** With many other languages, you have to install extra software to use a debugger.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=39)** But the main engines we all use for JavaScript, web browsers, all have debuggers built in and ready to go.
>
> **[0:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=44)** These aren't the only option for JavaScript, but for web work, they're just the ticket.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=48)** As we'll see, you don't always have to use a debugger.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=51)** If you've ever written any code, you've no doubt popped up alerts or logged console messages to help figure out what's happening in your code at a certain point.
>
> **[0:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=57)** I'm not gonna tell you to stop doing that.
>
> **[0:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=59)** For some kinds of problems, it's totally sufficient.
>
> **[1:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=62)** But with a debugger, you can do all that basic stuff and other more advanced inspections too.
>
> **[1:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=66)** You can pause the execution of your code and step through it line by line, function by function.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=71)** And while it's stopped, you can look through every variable currently known to see what it contains.
>
> **[1:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=75)** You can track particular variables over time, watch their values change or not change as you step through.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=81)** You can even step back in time to see how variables changed at every step on the way to where you are.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=86)** The first time you use a debugger, it can almost feel like magic.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=89)** Overall, you end up spending much less time guessing, so you can spend more time thinking and solving problems faster.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/introducing-our-friend-the-debugger?u=76281980&t=95)** And that's really what we're here for, right?

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), for, (1)
> **CLI Commands:** php (1), python (1)
> **Env Vars:** php (1)
> **Definitions:** is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Important jargon and concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=0)** - [Instructor] When you start using a debugger, there are some important concepts and some important jargon that we need to go over to help you understand things better.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=8)** The first is breakpoint.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=10)** Now if you've had some exposure to responsive web design, this term may already have some meaning for you, but in the context of a debugger, a breakpoint is a place where you tell the debugger to stop execution of your code and do something.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=22)** Usually for our purposes, that's just going to be stopping execution, suspending it so it doesn't go any further so you can look around at what's happening.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=29)** Once you've stopped, you can start stepping through your code, and there are several ways that you can step.
>
> **[0:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=36)** The first is to step over.
>
> **[0:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=38)** This means to execute the line that you're on and step to the next one in the file that you're browsing, regardless of how complicated that line you're looking at might be.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=47)** If it has a ton of function calls all on one single line, you'll just execute it and step to the next one.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=51)** Next, there is step into, and just like it says, this will take you into the next function call on the line you're executing.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=60)** Likewise, there is step out, which will take you from wherever you are and step you out of the function that you're currently executing, and this will all make sense when we're looking at an actual debugger.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=71)** Next up is a watch.
>
> **[1:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=73)** Now this does not refer to a timepiece, but rather to taking a look at a particular variable or an expression so you can watch it over time and have it in a specific place that you can always look at.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=85)** Next up is the call stack.
>
> **[1:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=87)** This is the series of functions that were called to get to the place where we have stopped and are actually looking around, and a call stack is made up of frames.
>
> **[1:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=97)** That's just an entry in a call stack.
>
> **[1:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=98)** It's usually a function call.
>
> **[1:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=101)** Finally, there is IDE.
>
> **[1:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=103)** That stands for integrated development environment, which is a piece of software that collects important things that you need when working as a programmer.
>
> **[1:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=111)** This usually includes a powerful text editor and a debugger, among other features.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=115)** We'll be looking at one example of a good IDE later in this course.
>
> **[1:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/important-jargon-and-concepts?u=76281980&t=119)** That's a look at some of the important jargon and concepts that we'll be looking at later just so you have some idea of what we're going to see coming up next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), finally, (1)
> **Definitions:** is a  (3), stands for (1)
> **Env Vars:** ide (2)
> **Cross-References:** later in (1), coming up (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Debuggers in web browsers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=0)** - [Narrator] In order to do some in browser debugging, we're actually going to need some browsers.
>
> **[0:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=4)** So let's talk over the options that are available.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=7)** No doubt, you're familiar with all of these on some level.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=10)** But there are maybe some pieces that you don't know as well.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=12)** So first of all, we'll talk about Chrome.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=14)** It's pretty much the most popular browser in the world right now.
>
> **[0:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=17)** You may not know that there's also a developer built called Chrome Canary.
>
> **[0:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=21)** These are both provided by Google and of course, they're free.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=24)** The debugger that's built into chrome is called the developer tools.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=28)** And that's what you'll be using on the desktop.
>
> **[0:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=30)** If you're debugging a mobile device, there is a version of Chrome for Android and you can connect the browser from your Android device to Chrome on your desktop using the remote debugging tools for Android.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=41)** You can even connect iOS devices using a little more convoluted process called the RemoteDebug iOS WebKit Adapter, if that's of interest to you.
>
> **[0:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=50)** Next up is Firefox.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=51)** Firefox is from Mozilla, of course.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=53)** And just like there's a developer version of Chrome, there's one for Firefox also called the Firefox Developer Edition.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=60)** The debugger in Firefox is also called the developer tools.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=63)** And there's also a Firefox for Android, mobile version which can be connected to the desktop version of Firefox.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=69)** A lot of these browsers tend to follow similar processes for debugging.
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=74)** Next up, we'll look at Safari which of course is Apple's browser.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=78)** Along with the shipping version of Safari, there's the Safari Technology Preview.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=81)** Which you can download on the web and then it will be automatically updated through your App Store account.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=88)** The debugger in Safari is called the Web Inspector.
>
> **[1:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=90)** And if you're going to debug java script that's running in iOS, you have two options.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=96)** One is the simulator which comes with Xcode, used to be called the iOS simulator but now includes WatchOS as well.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=102)** So it's just simulator.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=104)** And then you can connect an actual iOS device to your Mac over USB.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=109)** You'll be able to make a connection into Safari and use the Safari Web Inspector to debug the java script that's actually running on your device.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=116)** And then finally, we'll look at Microsoft's browsers, Edge and Internet Explorer.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=122)** Of course these are both free and available on all Windows machines.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=126)** The debugger that's built into these browsers is called the F12 developer tools.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=130)** So named because you invoke it by hitting the F12 key on your keyboard.
>
> **[2:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=134)** Debugging mobile java script is done through Visual Studio.
>
> **[2:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=137)** I have to admit, I'm not the biggest Windows user in the world, so this is not my area of tremendous expertise.
>
> **[2:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=142)** But that seems to be best way to go about it.
>
> **[2:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=144)** There are also the modern.ie project and [browserstack.com](https://browserstack.com) which give Mac users like me access to virtual machines and other instances of Microsoft Edge that we can run right in a browser to debug our projects.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=160)** Both java script and just general websites.
>
> **[2:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=164)** Microsoft has been offering the modern.ie project for quite a number of years now.
>
> **[2:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=168)** Their partnership with BrowserStack is a little more recent and gives us access with a free trial account to those current versions of Edge.
>
> **[2:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=176)** It's really nice.
>
> **[2:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=177)** So those are the browser options that are available.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=180)** Which one you use on a daily basis is a personal choice as with almost anything in development.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=186)** But you're going to probably wanna touch all of these at some point when you're checking your projects across browsers.
>
> **[3:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debuggers-in-web-browsers?u=76281980&t=192)** So it's a good idea to get familiar with all of them.

> [!info]- Semantic Content
>
> **Tools:** firefox (7), safari (6), visual studio (1)
> **Definitions:** is called (3), is a  (3)
> **Code Identifiers:** ios (5)
> **Env Vars:** f12 (2), usb (1)
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** make (1)
> **URLs:** [browserstack.com](https://browserstack.com) (1)
> **Analogies:** just like (1)

#### The importance of a good editor and IDE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=0)** - [Instructor] The debugging tools we're talking about here are mainly in web browsers, but debugging code also means being able to understand it better and having a text editor or IDE that you like will give you a huge boost.
>
> **[0:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=11)** Like all software, this is an area that changes a lot, but let's run through why a good editor is so important.
>
> **[0:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=17)** Syntax highlighting is definitely top of my list.
>
> **[0:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=20)** Code is instructions for a machine but it's also read by humans, ourselves and our collaborators, and being able to tell what the language keywords are at a glance is really helpful.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=29)** All editors recommended here let you switch themes so you can get the colors just how you like them too.
>
> **[0:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=34)** Looking at this, this is the editor that's just built into macOS.
>
> **[0:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=37)** I have this really small JavaScript file here.
>
> **[0:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=40)** You can see I've got stuff like spell checking that I don't really care about and I can't really tell what anything is.
>
> **[0:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=46)** Contrast that with the same file in Visual Studio Code.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=49)** I can tell just at a glance what everything is here.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=52)** All of my language keywords are highlighted in blue, the comments are green, strings are red.
>
> **[0:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=59)** Much, much better.
>
> **[1:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=61)** Most editors also include specific kinds of enhancements that go beyond reproducing exactly what we type.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=67)** We type lots of punctuation in JavaScript, of course, as you can see here.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=71)** Having an editor that manages quotation marks, parentheses, brackets, and all that kind of stuff saves keystrokes.
>
> **[1:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=76)** For example, if I were to type a new function here.
>
> **[1:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=80)** I type one paren and I get both of them there.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=83)** They're automatically matched.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=85)** If I delete that first one, they both go away.
>
> **[1:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=90)** Likewise, my braces, if I start typing a string.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=95)** That kind of enhancement might seem rather small, but as you're typing lots and lots of code, it gets to be really, really helpful.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=102)** Some editors also include tools like Emmet that can make writing blocks of HTML and CSS a lot easier.
>
> **[1:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=107)** For example, if I create a new file here, I'll switch it using the mode selector to HTML.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=116)** I can type CSS-type syntax and you can see that I have this pop-up that says it recognizes this as an Emmet Abbreviation, so if I hit the Tab key, I get a whole bunch of nested divs just like that.
>
> **[2:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=128)** There are abbreviations for CSS and HTML built-in right out-of-the-box, so that can make building a website a lot faster.
>
> **[2:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=136)** Another thing that most editors do is opening a folder of files and treating them as a project.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=143)** Visual Studio Code can do this.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=145)** There's a giant file explorer, so I can see everything.
>
> **[2:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=149)** The other nice thing about this is that once opened as a project, there's often a command to open any file in the project by name.
>
> **[2:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=157)** In Visual Studio Code out-of-the-box on a Mac, that's Command + P and now I can start typing anything that I happen to know is in the project and it will show up.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=167)** Really useful.
>
> **[2:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=168)** Another big one is search and replace, especially across many files.
>
> **[2:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=172)** Writing code or markup, we want not to repeat ourselves as much as possible.
>
> **[2:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=175)** When it's time to change something in a bunch of different places, it's crucial to have search and replace that's easy to use and powerful.
>
> **[3:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=182)** One specific thing that's usually important to me is regular expression support which is a way to describe what you're searching for in a more abstract way.
>
> **[3:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=188)** It's a big topic.
>
> **[3:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=189)** There's a course and at least one really good book on the subject, but if you've never tried regular expression-based search before, I encourage you to look into it.
>
> **[3:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=197)** I've been using BBEdit on the Mac for a long, long time and as much as I enjoy other editors, whenever I have to do multi-file, regular expression-based searches, I always go back to BBEdit.
>
> **[3:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=207)** It's manual has an overview of learning regular expressions that I found to be really helpful in days of yore when I was first getting started with this stuff.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=214)** This is an example of a really simple regular expression-type search.
>
> **[3:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=218)** I turn it on by enabling Grep here, this checkbox, and then I get syntax highlighting for the special parts that are regular expressions.
>
> **[3:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=226)** In this case, I'm looking for every script tag that starts with HTTP and I'm changing them to HTTPS.
>
> **[3:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=234)** The scripts are gonna stay the same, but I'm just changing the path so they're reloaded over a secure protocol instead.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=240)** This little bit of garbage here that you may not recognize is a regular expression that I can then substitute in the replacement, like this.
>
> **[4:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=251)** What that means is that if I start back at the top of the file.
>
> **[4:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=256)** Now, I can do a cleaver search and replace.
>
> **[4:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=260)** I can do a Replace and Find all the way down and it switches all of these out.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=264)** Now, of course, with only these five script tags, I could have done this in a much more simple way, but if you had some resources that you wanted loaded over HTTP and some that you wanted loaded over HTTPS for some reason, being able to restrict it in this way using regular expressions is really helpful.
>
> **[4:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=280)** That's just a very, very tiny example of something that could be worth looking into later.
>
> **[4:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=285)** Let's talk about some of the available options for editors.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=288)** Sublime Text is one that is wildly popular.
>
> **[4:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=291)** It is technically paid, but it has a very generous free trial, very worth exploring.
>
> **[4:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=296)** There are several open-source options that are also completely free.
>
> **[5:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=300)** Visual Studio Code is the one we'll be using for the most part in this course, but there's also Brackets from Adobe and Atom from GitHub.
>
> **[5:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=307)** Finally, there's my old friend BBEdit, which I just love and always have to mention, but it is available on the Mac only.
>
> **[5:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=314)** As with Sublime, it's a commercial product, but there is a very generous free trial that is basically unlimited.
>
> **[5:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=320)** If you're a web designer or developer with a bit of experience, you probably already have an editor that you like, but you might not have tried an IDE.
>
> **[5:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=327)** Editors like Sublime, Visual Studio Code, and other recent editors are closing the gap with more traditional IDEs with plugins and so forth, but with a purpose-filled IDE, you get a lot of extra smarts out of the proverbial box, both about JavaScript and about your own site or project.
>
> **[5:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=341)** You open a folder in the IDE and it does a bunch of analysis on your code building a knowledgebase that it uses to help you.
>
> **[5:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=347)** Some examples of the things that make an IDE great are debugging JavaScript everywhere.
>
> **[5:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=352)** This means not just in the browser, but also on the command line or any place else that you might run into JavaScript somehow.
>
> **[5:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=358)** Usually an IDE is going to be able to handle that.
>
> **[6:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=361)** I should mention that IDEs are not the only place where you'll see at least some non-browser based debugging.
>
> **[6:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=368)** Visual Studio Code, for example, has some quite robust tools built-in for debugging command line JavaScript.
>
> **[6:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=373)** Code completion is a feature that you'll see in many regular editors, but it's much better in IDEs most of the time.
>
> **[6:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=380)** Because of the static analysis that an integrated development environment does on your code, not only will it be aware of JavaScript's language keywords and that sort of thing, but it will also know about all the code that you have written yourself.
>
> **[6:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=392)** All the function names, all the classes, all that sort of thing and it'll be able to complete those names as you start to type them.
>
> **[6:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=398)** Save lots and lots of keystrokes.
>
> **[6:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=400)** It'll also know about any frameworks you've imported, jQuery, React, all that sort of thing.
>
> **[6:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=405)** Mistake avoidance is another feature of IDEs that's particularly helpful.
>
> **[6:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=409)** This can range from things like parameter hints which help you figure out what order the parameters might go in and what those values are for a given function, warnings for violations of strict mode or other things that you might only see when you load your JavaScript in a browser.
>
> **[7:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=425)** An IDE can usually tell you those beforehand, and then other inspections and linting.
>
> **[7:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=430)** Linting meaning error checks, checks against coding standards, that sort of thing.
>
> **[7:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=434)** Full project navigation and search.
>
> **[7:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=437)** Again, this is something that you'll often see to a certain degree in editors as well, but I'm talking about things that go beyond go to line or go to a certain file.
>
> **[7:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=447)** There's also symbol inspection so you can go to a particular file where a certain function is defined, for example.
>
> **[7:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=454)** Finally, refactoring assistance.
>
> **[7:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=456)** This is like search and replace, but it's more context-aware and smart.
>
> **[7:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=460)** It's one thing to rename a string, but it's another thing when your IDE can tell you, do you wanna do a search and replace for this particular string in, say, just your code comments?
>
> **[7:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=470)** Or just where it's used as a function name?
>
> **[7:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=473)** That sort of thing.
>
> **[7:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=475)** Here are some options for IDEs that you might want to explore.
>
> **[7:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=479)** WebStorm and PhpStorm from JetBrains are commercial products with very generous free trials.
>
> **[8:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=484)** I happen to use PhpStorm in most of my work because I do JavaScript and PHP development.
>
> **[8:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=489)** PhpStorm basically wraps WebStorm with PHP as well.
>
> **[8:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=495)** Komodo IDE from ActiveState is another very popular commercial product, very polished.
>
> **[8:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=500)** NetBeans from Apache is totally free and then the Eclipse project from the Eclipse Foundation is also free.
>
> **[8:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=506)** They're all worth checking out.
>
> **[8:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=508)** If you've never used one before, checking out WebStorm or PhpStorm is what I would recommend first.
>
> **[8:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=514)** Even if you can't afford to pay for them, the free trials will let you explore what the options are and then maybe help guide you into things that you will find useful with some of the other free options.
>
> **[8:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=525)** That's an overview of some of the things that are great about editors and IDEs.
>
> **[8:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/the-importance-of-a-good-editor-and-ide?u=76281980&t=529)** It's a very personal choice and I recommend you check out all the options that are available and see what fits with you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4), switch (2), this. (2), finally, (2)
> **Env Vars:** ide (9), html (3), css (3), http (2), https (2)
> **Tools:** visual studio (6), sublime (3), command line (2), atom (1), github (1)
> **CLI Commands:** make (3), find (2), php (2), grep (1), apache (1)
> **Definitions:** is a  (4), is an  (2)
> **Analogies:** for example (4), just like (1)
> **UI Navigation:** go to (2), checkbox (1)
> **Code Identifiers:** macos (1), jquery (1)

#### Why debugging AJAX can be tricky
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=0)** - [Instructor] When you're getting started debugging projects involving AJAX, where your code is loading data dynamically, you might start to run into some trouble.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=7)** Let's talk a little bit about what kinds of issues you might see and how to deal with them.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=12)** There are a couple of main families of security issues you can expect to see at first.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=16)** We're not gonna get super specific about what these are right now.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=18)** I just want to make you aware of what you might you see.
>
> **[0:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=21)** First is the same-origin policy.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=23)** In a nutshell, this means that all of your assets and data need to come from the same place, the same place being sort of like the same server.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=32)** Then there's CORS which is access control for sharing data across domains basically.
>
> **[0:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=38)** If you just take an example HTML file from the exercise files in this course, for example, and drop it into your browser, it'll be loaded with a file URL that looks like this.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=47)** If you try to load data from another file or from the web from the scripts in that file, you'll almost certainly run afoul of one or both of these policies which can result in data not loading and errors filing up your JavaScript console.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=60)** So how, aside from frantic internet searches, do we deal with this?
>
> **[1:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=64)** For basic debugging, the best way is to use a local web server.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=69)** Once you're loading over HTTP from localhost or some other custom host name, you're safe from issues related to file URLs and, at least for a while, you won't have to deal with any same-origin or CORS issues.
>
> **[1:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=80)** If you get to the point that you need to know more, you can refer to other videos in the library on those topics.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=85)** If you don't already have a local web server, MAMP or XAMPP are easy to install options, and, as with everything in web development, there are countless other free options available as well.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=96)** It's also possible to tweak settings in the browsers to get around some of these issues.
>
> **[1:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=100)** I still recommend a local web server over any of these, but here are some of the things to look for in a few browsers.
>
> **[1:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=106)** In Chrome, there is the disable-web-security flag.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=109)** In Firefox, there is an advance preference called security.fileuri.strict_origin_policy.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=116)** And then in Safari, you can look at Disable Local File Restrictions in the Develop menu.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=121)** So to recap, when you're working with projects that involve AJAX, you're almost certainly going to want to load those using a local web server.
>
> **[2:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=129)** It doesn't really matter what kind you use, but that is the best way to work around lots of problems.
>
> **[2:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/why-debugging-ajax-can-be-tricky?u=76281980&t=135)** And if it turns out you need more help, there's lots of help available.

> [!info]- Semantic Content
>
> **Env Vars:** ajax (2), cors (2), html (1), url (1), http (1)
> **Code Keywords:** let (1), super (1), this. (1), while, (1)
> **Tools:** firefox (1), safari (1)
> **Definitions:** means that (1), is an  (1)
> **Prerequisites:** getting started (1), install (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** strict_origin_policy (1)
> **Exercise Files:** exercise files (1)


### 2. Debugger Basics

#### Debugging without a debugger
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=0)** - [Instructor] In this video, we're going to look at basic debugging without a debugger using in-browser developer tools and the basics of the console API.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=8)** So I'm looking here at an example file.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=10)** This is from a fictitious business called hansel and petal.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=14)** Just an example business we have for courses here, and I have this page with some available bouquets.
>
> **[0:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=20)** The expected behavior is that if I click any of these flower images, it's gonna load in a little lightbox.
>
> **[0:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=27)** If I click the images though, it loads the image directly, no JavaScript happening here.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=33)** So something is clearly broken and we need to find out why.
>
> **[0:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=38)** To do that, we're going to open the developer tools.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=41)** In Chrome, I can go to the view menu, developer, and open the developer tools.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=48)** I can also use Command + Option + I on a Mac.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=53)** And right now, it's loaded up over here on the right side.
>
> **[0:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=57)** In this little dot menu, I have some various options for where I can place it.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=60)** I can put it down here at the bottom, and I'm also going to make it a little bigger by clicking in those tools and hitting Command + Plus.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=69)** Here we go.
>
> **[1:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=70)** It's got a little bigger there.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=72)** So the first thing I'm going to do is switch to the console, and we can see I have an uncaught reference error.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=78)** The nice thing about this is that not only do I know what kind of error it is, and I can see a little call stack here, not that we know what a call stack is at this point, but we have some information, and most importantly, we can see the file where this error happens and the line number where it happens.
>
> **[1:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=94)** Now, if I click this, it opens up in the Chrome debugger, and I can see that here's my accidentally declared global.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=102)** This is happening because I did not use the var keyword in front of this variable assignment, and I'm in strict mode.
>
> **[1:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=108)** So the error isn't very nicely highlighted.
>
> **[1:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=110)** So the error is very nicely highlighted, but let me show you something else.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=116)** Over here in Firefox, I can turn on its developer tools by going into the tools menu, web developer, and toggle tools.
>
> **[2:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=124)** It actually has the same key command as in Chrome, Command + Option + I here on the Mac.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=130)** And I can see that I have a reference error again with a disclosable call stack that starts out collapsed.
>
> **[2:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=137)** I have the file name and the line number, but then I also have this learn more link.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=143)** This is pretty cool, it loads up documentation that refers directly to the error that I've triggered, and gives me some more information about it and how to solve it.
>
> **[2:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=152)** That's a very nice bit of help that the Chrome console gives you that I haven't seen elsewhere.
>
> **[2:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=159)** So switching back to Chrome, we're going to fix this error and reload the page to see that everything works.
>
> **[2:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=165)** Now I could edit this directly in Chrome using local workspaces, but instead I'm going to switch to my editor.
>
> **[2:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=171)** In this case, Visual Studio Code.
>
> **[2:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=174)** So I'm going to use the go to line command up here, which is Control + G by default, and I'll go to line 309, just like it showed in the console.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=186)** I'll add var before this variable assignment.
>
> **[3:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=189)** Now I can switch back to the browser and reload, and we should be in much better shape.
>
> **[3:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=195)** Yes, so I can click those flowers and I have, and I have a slideshow that I can click through with the mouse or with arrow keys, loaded up in a nice lightbox.
>
> **[3:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=207)** Okay, so we've gotten this to the point where there are enough problems fixed that the JavaScript can execute.
>
> **[3:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=212)** Now let's go back to the file.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=214)** We're going to add a couple of pieces of old school debugging that you might have used before, if you've never used a debugger before.
>
> **[3:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=221)** Here in my colorbox method, this is jQuery, if you've never seen it before.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=225)** And here, I've set up some swipe events.
>
> **[3:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=228)** So basically this code loads up my lightbox, which is the Colorbox library for jQuery.
>
> **[3:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=234)** And then I'm also tying into a TouchSwipe library because Colorbox doesn't support it by default, to enable swipe left and swipe right, so this colorbox will be usable on a mobile device.
>
> **[4:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=246)** To make sure this works, I'm going to add an alert here in the swipeLeft method, and a console.log here in the swipeRight method.
>
> **[4:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=254)** Now if you've done any debugging at all, you've probably used at least one of these methods before.
>
> **[4:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=259)** So let's try them out.
>
> **[4:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=262)** Alert will be swipe left, and the console.log will just be swipe right.
>
> **[4:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=266)** Nothing too crazy here.
>
> **[4:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=267)** I'll save the file, and we'll switch back to the browser and reload it.
>
> **[4:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=275)** I'm gonna load the colorbox, and this TouchSwipe plug-in that I'm using can simulate touch events even if I'm using a desktop machine.
>
> **[4:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=282)** So I can click and drag, and here I got a swipe right logged to the console.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=288)** If I swipe the other way, I get an alert or swipe left.
>
> **[4:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=292)** So this kind of very very basic debugging let's you put things into your code that let you know, okay, I just tried something, I expected something to happen, did it actually happen?
>
> **[5:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=301)** And those are different ways to see that yes, that thing actually did happen.
>
> **[5:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=305)** As I say, if you've been playing with JavaScript for very long at all, you've probably used those before.
>
> **[5:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-without-a-debugger?u=76281980&t=310)** But there are some other features of the console API that you might not have used, and we're going to look at those next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (4), var (2), default, (2), this, (1)
> **UI Navigation:** go to (3), open the (2), switch to (2), toggle (1)
> **Code Identifiers:** jquery (2), swipeleft (1), swiperight (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2)
> **Tools:** firefox (1), visual studio (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### Leverage more of the Console API
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=0)** - [Narrator] In this video, we're going to take a look at some other features of the console API that you might not be quite as familiar with.
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=6)** Here in my JavaScript console, I can type console and as soon as I type dot, I get a list of all these methods that are available.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=14)** There's a whole bunch of 'em.
>
> **[0:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=17)** And of course, default JavaScript stuff as well.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=23)** So you might not have used very many of these, and that's what we're gonna take a look at.
>
> **[0:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=27)** Over here in Visual Studio Code, I'm going to jump down to the bottom of the file, one of the first things is that console.log doesn't just take a string as an argument.
>
> **[0:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=38)** You can pass multiple arguments to it.
>
> **[0:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=40)** So let's change this swipe left to console.log.
>
> **[0:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=44)** We'll keep swipe left here but then we'll pass in a few other of these parameters so we can see what they are.
>
> **[0:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=50)** Let's take direction and event.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=58)** Okay, I'm gonna save this and switch back, I'll reload.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=63)** Here's my light box, I'm going to swipe left and you can see that first I get my message, then I get the value of the first parameter and the value of the second parameter which in this case, is a JavaScript object that I can disclose to see all its contents.
>
> **[1:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=80)** That's pretty cool.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=81)** Now going back to the editor, I'm going to change this to console.error.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=88)** I'll save and switch back, reload.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=92)** Now if I swipe left again, you can see that this is now formatted as an error which of course, means it's red.
>
> **[1:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=98)** But also, I have this reference that I can click to open my debugger and I have a call stack.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=104)** It's nice to be able to insert messages like this into your code in spots where execution should never actually reach that point.
>
> **[1:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=112)** And then you can find out what the conditions were under which that happened.
>
> **[1:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=117)** Let's look at something else.
>
> **[1:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=118)** I'm going to keep this console.log message.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=121)** I'm just going to copy and paste it and this time I'm gonna change it to console.count.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=126)** I'll save again and switch back, refresh.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=130)** And now if I swipe right, you can see that I'm getting an automatic count next to the message.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=140)** Normally, if I were just using console.log, I'm going to save and switch back and refresh.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=148)** If the same thing happens more than once, I just get a little increment encounter here.
>
> **[2:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=154)** So console.count is just another way of presenting how many times something has happened and this can be especially useful if you have lots and lots of console messages.
>
> **[2:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=163)** But that particular one might be appearing at different places throughout a sea of other ones.
>
> **[2:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=170)** Makes it much easier to track how often something has happened in a particular block of execution.
>
> **[2:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=174)** Another feature of the console.log method is that instead of just passing a string as the first argument, that's just a simple string.
>
> **[3:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=183)** I can pass this string with some special formatting tokens.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=186)** And that will insert my other parameters into this original message.
>
> **[3:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=191)** So if instead of saying, just swipe left and then having the other stuff barfed out afterwards, I can sort of put it together in a nicely formatted message if I'd like to.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=201)** So the way that works is by using the percent sign in various tokens that you can look up in the console API for your browser of interest.
>
> **[3:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=208)** %s means insert the next parameter as a string.
>
> **[3:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=212)** And then, another one we'll look at is %O which we'll format that parameter as an object.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=220)** So let's rephrase this message as swipe, this will be the direction, we'll say using this event formatted as an object, event.
>
> **[3:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=233)** Like this.
>
> **[3:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=235)** So I'll save and switch back to the browser, reload.
>
> **[4:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=241)** And if I swipe left, here everything is grouped very nicely.
>
> **[4:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=244)** So swipe left using this MouseEvent which is still disclosable and event at the end there.
>
> **[4:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=252)** There are lots of features available through the console API.
>
> **[4:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=255)** And aside from just looking through the Autocomplete that comes up in your browser's JavaScript console, you can also refer to the documentation that's available.
>
> **[4:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=263)** These are available for Chrome, for Firefox, and for Microsoft Edge.
>
> **[4:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=273)** A notable absence here is Safari.
>
> **[4:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=276)** Apple used to have a console API page for Safari, but as of this recording, they don't have it.
>
> **[4:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=282)** It's been quite a while since they've had it.
>
> **[4:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=284)** I hope they bring it back at some point but for now, this is what you have.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=288)** Fortunately, all the browsers tend to have pretty close feature parity as far as these API's go.
>
> **[4:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=294)** Now let's look at one more thing related to formatting.
>
> **[4:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=297)** I have a variable up here above my executing JavaScript which is called bigErrorStyle.
>
> **[5:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=303)** And you may recognize this as a whole bunch of CSS.
>
> **[5:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=306)** I'm gonna change this console message down here and I'm going to insert a special formatting token, %c at the beginning of this.
>
> **[5:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=316)** So I'm gonna leave my message just as swipe right but a formatting token like this is supposed to be used with inline CSS like this.
>
> **[5:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=323)** So I'm going to pass in bigErrorStyle.
>
> **[5:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=326)** So basically what's going to happen is this message is going to be formatted using this CSS.
>
> **[5:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=331)** This will be very entertaining, I promise.
>
> **[5:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=333)** So I switch back to the browser, refresh.
>
> **[5:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=337)** And I'll open up my color blocks and swipe right, and there we go, we get a giant message here in the console, way bigger than any error message you've ever seen before.
>
> **[5:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=346)** The only time I've ever seen this in use in the wild is on Facebook's website where they tell you not to put anything into the JavaScript console.
>
> **[5:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=354)** But you may enjoy using this in some of your own projects and I wanted to show it to you.
>
> **[5:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=359)** So as we've seen, the console API has lots of features that you might not have touched and could be useful.
>
> **[6:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=365)** There are a couple of places where it starts to come up short.
>
> **[6:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=368)** If you're working with a lot of third party libraries, you really don't wanna be editing them unless it's an opensource library and you're a contributor.
>
> **[6:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=376)** So adding console messages to those is really not practical.
>
> **[6:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=378)** Nevermind that those files tend to be minified.
>
> **[6:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=383)** So for example, we're loading jQuery here.
>
> **[6:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=386)** This is a minified version of the file and it's a mess to try and read.
>
> **[6:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=390)** This is good for performance but bad for readability.
>
> **[6:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=393)** And very bad if you're going to try and insert a console message in there somewhere.
>
> **[6:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=397)** Who knows where to put that?
>
> **[6:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=399)** And that's the other main point.
>
> **[6:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=400)** You have to edit the files and know where your messages would go or you'll just kinda end up putting them all over the place and guessing.
>
> **[6:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=407)** Hoping you'll stumble on to the right location where that particular behavior that you're trying to fix might be happening.
>
> **[6:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=412)** There are many kinds of problems that are just too hard to solve or at least too labor intensive to solve that way.
>
> **[6:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/leverage-more-of-the-console-api?u=76281980&t=418)** So we're gonna leave the console API behind and step into debuggers next.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (6), let (5), pass (4), this. (3), case, (1)
> **Env Vars:** api (7), css (3)
> **Tools:** safari (2), visual studio (1), firefox (1)
> **Code Identifiers:** bigerrorstyle (2), jquery (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)

#### Stop and look around: Simple breakpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=0)** - [Narrator] In this video we're going to start using the debugger for real using breakpoints.
>
> **[0:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=5)** So, first let's open up our developer tools with Command + Option + I here on the Mac.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=10)** And I'm going to change the sources panel if I need to and open my index.html file, which is where all the JavaScript for this page lives.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=18)** Let's scroll all the way to the bottom where my JavaScript is.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=25)** Here we are.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=26)** Now what I want to do is pause execution when I execute a swipe on this color box.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=32)** So I'm gonna set a breakpoint right here inside swipe left, inside the callback function, right there.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=39)** To set a breakpoint you just click in the gutter on the line number.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=43)** Now, I can reload and we'll open up the color box.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=49)** And I'll do a swipe left.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=52)** Once I do that execution pauses.
>
> **[0:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=55)** I can see a little message up top with a resume button and another message over here with another resume button that would let me resume execution, in other words, I've stopped now I can start again.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=67)** And you'll notice that we have some new stuff highlighted over here in this right side panel.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=72)** The main thing I wanna call your attention to right now is the scope area.
>
> **[1:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=76)** This is where I can see all the variables that are currently defined and what their values are.
>
> **[1:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=80)** This is called scope because there are various scopes available.
>
> **[1:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=84)** In JavaScript in ES5 a function is what creates scope.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=89)** So, every time you have a function call you have another layer of scope where there's another set of local variables.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=96)** In this case we just have one local scope for this callback function, and then the global scope which is the window object and everything that's defined there.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=104)** But if you're just using ES5 as we're using here you'll see scope anywhere there's functions.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=109)** Okay, let's set another break point down here in the swipe right area.
>
> **[1:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=113)** I'll let execution resume, and then let's swipe right.
>
> **[1:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=118)** There we go I can see that I've stopped down here.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=122)** And again, I can see the variables that are defined.
>
> **[2:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=125)** So, now that we've stopped at either of these points I can see what's happening at that point in execution.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=130)** Like right now I can see that the swipe direction was right and then if I resume and swipe left I can see here that the direction is set to left.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=139)** Let's resume and refresh the page.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=143)** Now you can see that the breakpoints are preserved across page refreshes, which is great.
>
> **[2:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=147)** So, this will only work inside Chrome obviously.
>
> **[2:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=150)** If I were to switch to another browser I'd have to set fresh breakpoints over there.
>
> **[2:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=154)** But inside Chrome any breakpoints that I've set will stay the same even when I refresh the page.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=160)** Now if I were to go and make an edit to the html file so that these script tags moved around or changed, they might shift around a little bit.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=167)** The browsers do try to keep track of what you've done.
>
> **[2:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=169)** And you might get lucky and have them stay in the right spot, but it's something you'll need to watch out for if you start making edits and then go back and check your breakpoints.
>
> **[2:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=178)** Now these are breakpoints that don't execute immediately.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=180)** They only execute when I do whatever this callback function is expecting.
>
> **[3:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=184)** We can also set them on things that will execute every time, like say this variable assignment.
>
> **[3:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=188)** So, I'll reload, and instantly we're stopped, we see here's my message here.
>
> **[3:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=196)** And I can check out what is defined so far.
>
> **[3:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=198)** Now you'll notice accidental global is currently undefined because I've stopped the line before the variable assignment actually happens.
>
> **[3:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=205)** One thing that's worth noting with setting break points.
>
> **[3:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=207)** I'll just resume here.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=209)** Is that they can be set on executing lines.
>
> **[3:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=213)** So, if I remove this breakpoint and then try to set one here on this comment.
>
> **[3:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=217)** I clicked on line 301 but the breakpoint was set on line 309 which is the next executable piece of JavaScript.
>
> **[3:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=224)** The way that different debuggers handle this sort of breakpoint movement will kind of vary.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=229)** But it's something to watch out for.
>
> **[3:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=230)** You won't always get the breakpoint exactly where you think if it's a place that is non-executing.
>
> **[3:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=236)** One more thing about setting basic breakpoints.
>
> **[3:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=239)** Now, as I said, any breakpoints that I set here in Chrome are not going to be carried over to the debuggers in other browsers or in other debugging environments like my IDE for example.
>
> **[4:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=248)** But there is another way to do this.
>
> **[4:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=250)** Gonna clear all these breakpoints out.
>
> **[4:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=253)** And let's switch over to my editor.
>
> **[4:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=255)** Here I am in the index.html file and if I click over here in the gutter it just selects lines but I can add debugger right here and save this.
>
> **[4:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=268)** This is a special keyword that will trigger the debugger in any environment that supports JavaScript debugging.
>
> **[4:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=275)** So, let's switch back to Chrome and refresh the page.
>
> **[4:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=279)** You can see I have this debugger set here.
>
> **[4:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=281)** So, if I open the color box and swipe left, there you go.
>
> **[4:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=286)** I'm paused right there on debugger.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=288)** Now this is nice because it lets me set a breakpoint that will be triggered anywhere.
>
> **[4:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=292)** I'll resume this, and if I close the developer tools note that if I swipe left nothing happens.
>
> **[5:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=300)** Breakpoints will only be triggered when the debugger is actually open like that.
>
> **[5:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=307)** So when you're done with debugging statements like this, make sure to take them out before you ship your code.
>
> **[5:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=311)** So, now we've seen how to set breakpoints in different environments and how you can look at the contents of variables at the time that you've paused.
>
> **[5:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=318)** But this is not everything that you can do just with breakpoints by themselves.
>
> **[5:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/stop-and-look-around-simple-breakpoints?u=76281980&t=321)** We'll be taking a look at some more features next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (5), switch (3), this. (2), this, (2)
> **Env Vars:** es5 (2), ide (1)
> **Definitions:** in other words (1), is called (1), is a  (1)
> **Warnings:** watch out (2), note that (1)
> **File Paths:** index.html (2)
> **CLI Commands:** make (2)
> **UI Navigation:** switch to (1), open the (1)
> **Analogies:** for example (1)

#### Explore other breakpoint options
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=0)** - [Instructor] breakpoints that pause execution are really useful by themselves, but we do have some other options for how we can stop and look around under different conditions.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=8)** Let's take a look at some of those.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=9)** Here's a fresh example that looks just like the ones we've seen before, but it's a little different, and has a small bug.
>
> **[0:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=15)** Let's take a look at what that bug is.
>
> **[0:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=17)** I'm going to open this colorbox, and now take a look at what's happening when I swipe in either direction with this image counter.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=24)** So if I swipe left, I'm moving forward through the images, which is what I would expect, but then if I swipe right, I'm still moving forward through the images.
>
> **[0:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=34)** So, we're not quite doing the right thing here, and we're gonna fix it.
>
> **[0:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=40)** So I'm gonna open up my developer tools with command + option + I.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=43)** And here in the sources pane, I'm going to open the index.html file where my JavaScript is, and scroll all the way down.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=53)** So here's our new implementation.
>
> **[0:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=55)** Instead of using swipe left and swipe right, like we've done before, we have a generic swipe callback, and we're using a switch statement inside this.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=63)** Now eagle-eyed viewers might see a bug without any assistance, but bear with me.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=67)** Also, we should never underestimate our own abilities to miss simple bugs from time to time.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=72)** So, the problem is when we swipe right.
>
> **[1:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=75)** Now in this very simple example, we could just set a breakpoint here under the right case, but we're gonna do things a little differently.
>
> **[1:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=82)** I'm gonna set a breakpoint right inside the swipe method, and I'm going to right click my breakpoint, and I can see it's editable.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=91)** So, this is kinda neat.
>
> **[1:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=94)** This is called a conditional breakpoint, and just like it says here, the breakpoint I've set here will stop only if the following expression is true, and so now it's up to me to determine what the condition should be under which this breakpoint should pause.
>
> **[1:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=107)** So in this case, I know that the problem is when I swipe right, so let's check the direction.
>
> **[1:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=114)** Here's the direction parameter which will be available in scope when we stop, and we only wanna stop when we're swiping right, because that's where the problem was.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=122)** So it looks like this.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=126)** Okay, now let's trigger the colorbox, and see what happens.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=130)** If I swipe right, there we go.
>
> **[2:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=133)** We stopped.
>
> **[2:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=134)** I'll let this resume, and swipe left, and everything works just as we'd expect.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=139)** No pausing.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=140)** So there we go.
>
> **[2:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=141)** We'll trigger this again, and you can see that the color has changed also.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=145)** So now, if this were a more complicated bug, I could look around and see what else is going on, that might help me figure out what I'm doing.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=155)** Now you can see, I just have the same colorbox method.
>
> **[2:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=158)** It's always going next instead of previous, no matter what I do.
>
> **[2:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=162)** So a pretty easy bug to fix, but if this were something a little more complicated, where you had a bunch of lines of code that you needed to look through, being able to use a conditional breakpoint for a situation like this could be really helpful.
>
> **[2:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=172)** Now along with setting conditional breakpoints, you can also turn breakpoints on and off without just removing them.
>
> **[2:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=179)** So once again if I right click, I can disable this breakpoint and now it fades out.
>
> **[3:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=187)** Down here in the breakpoints inspector, turning this check box on and off will do the same thing.
>
> **[3:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=193)** So now if I resume and do some more swipes, you can see I never stop, because the breakpoint's disabled.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=201)** This button up here is the deactivate breakpoint setting.
>
> **[3:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=205)** Almost every debugger is gonna have something like this.
>
> **[3:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=207)** If you have a whole bunch of breakpoints set, it might be a little bit tedious to go through and toggle them all on or off, or remove all of them.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=214)** So if you turn this setting on, your breakpoints will be disabled and your code will execute no matter what.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=220)** So let's set another couple of breakpoints just to test this.
>
> **[3:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=224)** Turn this on.
>
> **[3:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=226)** Now I can swipe, and swipe, and swipe and nothing happens.
>
> **[3:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=233)** Let's remove these breakpoints, which I can do by right clicking and removing, or over here in the breakpoints inspector I can remove all my breakpoints.
>
> **[4:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=242)** Here we go.
>
> **[4:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=244)** And now let's try some other ways.
>
> **[4:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=246)** I have two pause buttons here.
>
> **[4:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=249)** The first one, if I just click this, it will pause at the first execution of any kind of JavaScript whatsoever.
>
> **[4:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=258)** So if I click the close button, it opens up the jQuery colorbox plugin, which is minified, and it's paused wherever this click was handled.
>
> **[4:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=267)** Now I can resume.
>
> **[4:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=269)** That's just a one time thing, so if I wanted to do that again, I would need to hit pause once more and do something else, like click the right button.
>
> **[4:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=279)** This other button sets up pause on exceptions, so if I click this, now any time an exception is triggered and not caught, my code will pause.
>
> **[4:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=289)** That's really useful if you're trying to track down all the exceptions in your code, and make sure that you handle all of them properly.
>
> **[4:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=296)** You also have the option to pause even when exceptions are caught and handled, presumably properly, so let's turn that on and reload the page.
>
> **[5:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=304)** I can see immediately, I'm paused.
>
> **[5:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=307)** We have some exceptions that are fired inside jQuery itself, as the page loads.
>
> **[5:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=313)** We can resume and there's another one.
>
> **[5:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=315)** Just a couple of those.
>
> **[5:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=317)** But if I turn this off and reload, no pause.
>
> **[5:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=321)** So those exceptions were handled, and if we were writing jQuery ourselves, we wouldn't necessarily have to worry about that.
>
> **[5:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=326)** There's a few other types of breakpoints that you can also set.
>
> **[5:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=329)** These will vary widely across browsers.
>
> **[5:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=332)** It seems like as of this recording, Chrome has the widest variety of breakpoints that you can set.
>
> **[5:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=338)** It's probably one of the reasons that it's very popular among developers.
>
> **[5:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=342)** If we look over here in the right pane, we have a couple of different kinds of breakpoints, aside from the regular ones.
>
> **[5:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=348)** We have these XHR slash fetch breakpoints, which are breakpoints that you can set, depending on Ajax type activity.
>
> **[5:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=358)** Then there's DOM breakpoints.
>
> **[5:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=359)** For these, I can use the elements inspector, which lets me see the state of the DOM as currently rendered.
>
> **[6:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=367)** And I can say break on subtree modifications, attribute modifications, or node removal.
>
> **[6:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=373)** So these are different conditions where something inside this DOM element changes, the attributes are modified, or if this element is removed entirely.
>
> **[6:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=382)** So if I set a breakpoint that way, it will now appear over here in my DOM breakpoints, and can be enabled and disabled just like a regular one.
>
> **[6:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=391)** There's one more type of breakpoint I wanna show you, which is event listener breakpoints.
>
> **[6:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=397)** That's down here at the bottom of the right panel, and you could see there's lots of different kinds here.
>
> **[6:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=403)** These are breakpoints that will be triggered whenever JavaScript handles an event of a particular type.
>
> **[6:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=408)** So for example, here under the mouse events.
>
> **[6:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=412)** If I turn on the click breakpoint, anytime, any JavaScript anywhere on this page, handles a click event, I'll be paused by this click breakpoint.
>
> **[7:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=423)** Notice that there are no other breakpoints set right now, but if I click, I'm paused.
>
> **[7:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=429)** JQuery is handling this right now, and there it goes.
>
> **[7:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=436)** So you can use this for any type of event.
>
> **[7:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=439)** The list is huge.
>
> **[7:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=441)** I find that in my own work, and I'm setting my own breakpoints most of the time, but it's nice to know that there are lots of other options available for different kinds of actions that you can take, if you're not necessarily sure where something is happening.
>
> **[7:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=453)** You just know that it's happening in response to a particular event, or a particular type of action.
>
> **[7:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/explore-other-breakpoint-options?u=76281980&t=458)** So that's a look at some of the extended options that you have with breakpoints, and next, we'll be looking at some of the ways that you can move around after you've paused.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (4), case, (2), this, (2), switch (1)
> **Env Vars:** dom (4), xhr (1)
> **Analogies:** just like (3), for example (1)
> **CLI Commands:** make (1), node (1), find (1)
> **Code Identifiers:** jquery (3)
> **UI Navigation:** open the (1), toggle (1)
> **File Paths:** index.html (1)
> **Definitions:** is called (1)

#### Challenge: Knowing when to stop
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=6)** - [Instructor] Here is our first challenge on using breakpoints.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=9)** We're going to look at a page that has a couple of problems and use what we know about breakpoints to help diagnose what's wrong.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=14)** Let's start by looking at the page and how to trigger those problems.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=18)** This is a slightly enhanced version of the Hansel and Petal page that we've been looking at previously, but it has a couple of problems.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=25)** First, we have a checkout panel over here that slides out when you click the checkout button.
>
> **[0:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=31)** If I click that close button, it closes.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=33)** That all works as we expect, but if I open it again and click this close this panel button, nothing happens.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=39)** I'm expecting that both of them will work and they should both work using a single handler function.
>
> **[0:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=46)** If I open up the developer tools, the code for that is down here at the bottom of the file in one of these script tags.
>
> **[0:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=54)** Now, here we go.
>
> **[0:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=56)** Here's my checkout panel and the event handlers that deal with it.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=63)** The other problem that we see will come when we start opening our color box to look at these flowers.
>
> **[1:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=70)** This all looks fine but if I close this, one of my flowers has disappeared.
>
> **[1:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=77)** How mysterious.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=78)** If I click again and close the color rocks, another one has disappeared.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=83)** I could keep doing this all day.
>
> **[1:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=87)** The point is that flowers are disappearing and we don't know why.
>
> **[1:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=90)** If we open the developer tools again and scroll down to the script tags at the bottom of the file, we have the code that we've seen before and the code that deals with the checkout panel.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=102)** So there's nothing here that seems to deal with that.
>
> **[1:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=105)** What we need to do is set a breakpoint that will catch the code that does that wherever it lives.
>
> **[1:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=111)** So again, here are the objectives for this breakpoint challenge.
>
> **[1:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=114)** First we'll fix the checkout panel.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=116)** There's a single event handler that is a single function that should work when either close button is clicked.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=122)** So we want to find that handler, set a breakpoint there, and then diagnose what's wrong.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=126)** For extra credit, you can open the file in your editor and fix it.
>
> **[2:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=129)** Then we want to find the code that's causing the flowers to vanish.
>
> **[2:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=133)** We need to set a breakpoint that will catch the code that modifies the DOM in that area, because it can be tricky to dig through a bunch of code to find out who's responsible for changes like that.
>
> **[2:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=142)** So that's the brief.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=143)** This challenge shouldn't take too terribly long.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=145)** Five minutes or less.
>
> **[2:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-knowing-when-to-stop?u=76281980&t=146)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), this, (1)
> **CLI Commands:** find (3)
> **UI Navigation:** open the (2), scroll down (1)
> **Definitions:** is a  (2)
> **Env Vars:** dom (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Knowing when to stop
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=6)** - [Instructor] Here's one possible solution to this breakpoint challenge.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=9)** Let's look at the checkout first.
>
> **[0:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=11)** I'm going to open up my developer tools and here in the sources panel, this is conveniently opened up to the script block at the bottom of the file because I was already looking at it.
>
> **[0:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=21)** And here is my event handler that's dealing with these close buttons.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=24)** I'm using the element query selector here to grab the button close class, which if we inspect this element, I can right click and inspect that.
>
> **[0:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=37)** I can see that both close button up in the corner and the close button down in the panel both have that same class.
>
> **[0:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=45)** So the intention here was to grab either one of them and have them both use this same event handler.
>
> **[0:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=50)** If I set a break point in here, this close button is caught by that handler.
>
> **[0:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=56)** So that one definitely works as we can see.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=58)** But if I open this again, I can click this as much as I want and this never gets caught.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=63)** The problem here is that we're using query selector where we really would want something that selects any of them.
>
> **[1:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=70)** So we could try using query selector all to grab both of them but we can't add event listeners to both of them at once using that method.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=78)** So let's look at the solution for this.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=81)** I'm going to open up the developer tools over here on the solution page.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=86)** If I open this file and scroll all the way down, here's the way that we can deal with this.
>
> **[1:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=94)** Instead of adding the event listener on the buttons themselves, we can do what's called event delegation and add the listener to the panel.
>
> **[1:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=105)** And then inside that function, I can check the event to see if its target matches the class that's assigned to both of those items.
>
> **[1:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=112)** Everything else can be the same.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=115)** What I'm doing here is I'm checking that if the event target doesn't match one of those close buttons, we just return out of the function, we don't do anything.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=122)** That way clicks will still work on other elements in the checkout pane the way we expect them to.
>
> **[2:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=127)** But now I can close this panel either way.
>
> **[2:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=132)** I can send another breakpoint to watch it work.
>
> **[2:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=137)** There we go.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=139)** I paused when we do that and paused when we do this.
>
> **[2:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=142)** So we can confirm they are definitely both being handled by the same handler function.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=148)** Okay, so that's dealing with the checkout panel.
>
> **[2:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=151)** Let's see what we need to do about these flowers.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=155)** I'm going to inspect these as well and I'm going to set a special break point, one of those DOM breakpoints over here.
>
> **[2:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=162)** There's different ways that we could do this.
>
> **[2:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=165)** I could choose this last element because I've seen that it's the last one that disappears every time they go.
>
> **[2:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=173)** So if I right click this and break on node removal, and then I click this, I can see that it's the improved .js file that has this mysterious set up breakpoint challenge function.
>
> **[3:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=188)** This is what actually does the removal.
>
> **[3:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=194)** So that kind of breakpoint catches it.
>
> **[3:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=197)** But the second time I do this, nothing's caught.
>
> **[3:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=200)** Another way I could do this is by selecting the parent of all the flowers.
>
> **[3:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=203)** Right clicking and then breaking on sub tree modifications.
>
> **[3:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=208)** So now anytime the sub tree of this node is changed and removal would certainly count as a change, I should stop as well.
>
> **[3:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=217)** It takes me to the same place.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=220)** So if I wanted to change that code or remove it, I now know where to do that.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-knowing-when-to-stop?u=76281980&t=225)** In this challenge, we looked at using regular breakpoints for code that we're already working with and know where it is, and DOM breakpoints that can direct us to code we'll need to edit when we don't necessarily know where to look.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), function (4), let (3), this, (2), class, (1)
> **CLI Commands:** node (2)
> **Env Vars:** dom (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Step into, over, and out of functions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=0)** - [Instructor] In this video, we're going to try the various stepping functions that we can use to navigate our JavaScript in the debugger once we're stopped.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=7)** So I have my index.html file open in my Chrome debugger, and I'm down here where my custom JavaScript exists, so I'm gonna set a break point right here at the very beginning of my custom JavaScript, so in this case, on line 311.
>
> **[0:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=20)** Now I'll reload the page.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=23)** Okay, I've stopped, and I'm right here on the first variable assignment for flowers here.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=28)** Now I'm executing a little bit of jQuery.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=32)** So the first stepping function that you'll probably use the most at first, is the step over, and this will step over particular functions to the next executable piece.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=43)** The way the stepping functions will behave in different debuggers is gonna vary a little bit, but the general idea is the same.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=49)** If there's a function that's executing on the line where you're stopped, step over will take you to whatever the next one is, so let's try it.
>
> **[0:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=56)** First, we're going to step over the assignment of the flowers variable, and I can see now, instead of being undefined, it is now a jQuery object.
>
> **[1:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=64)** So I can step over and flowerLinks will get assigned next, and then flowerOpacity.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=72)** And I can just keep stepping like this, let's watch what happens.
>
> **[1:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=75)** First, we're executing this fadeTo function, and then Chrome is jumping right down to the instantiation of the colorbox plugin.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=83)** Let's switch over to Firefox and see how it behaves there.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=86)** In Firefox, I have my developer tools open, and I'm in the Debugger pane.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=91)** Let's open up the index.html file and scroll down to line 311, where we were before.
>
> **[1:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=97)** And I'll set a break point.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=99)** Now let's refresh, and there we are, we're paused.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=104)** So let's start stepping over things.
>
> **[1:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=107)** Okay, we're going through the variable assignments.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=109)** This is looking very much like the way Chrome worked.
>
> **[1:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=112)** We get down to flowerLinks, and you can see that we stopped here on this line first, and then we hit the fadeTo method.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=122)** Now unlike in Chrome, when I stepped over fadeTo, Firefox is processing the way that jQuery returns and goes back to the original flowerLinks object, and if I hit this again, now it goes down into the call backs inside the hover method, so this is a little different.
>
> **[2:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=138)** It goes to one and then the other.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=140)** Then we return back to flowerLinks, hit step over one more time, and then we get down to colorbox.
>
> **[2:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=146)** So you can see the behaviors are a little different, and you may find that the way one debugger behaves is more suited to the way you think about how your code executes.
>
> **[2:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=154)** Back here in Chrome, we're going to resume, and then start over by reloading.
>
> **[2:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=161)** This time, instead of stepping over, we're going to use step into.
>
> **[2:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=166)** This is going to step inside this executing piece of jQuery.
>
> **[2:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=171)** So that's opened up the jQuery library for me automatically.
>
> **[2:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=175)** And if I use the step out function, I can get out of whatever I've stepped into.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=180)** There we go, so I went inside jQuery's dollar sign function, and then with step out, I got back out to where I originally started.
>
> **[3:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=187)** Let's go down a couple more levels.
>
> **[3:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=189)** So I'm gonna step over to this fadeTo method here.
>
> **[3:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=194)** Let's step into that.
>
> **[3:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=196)** Here we are inside fadeTo, and here's my next executable function here, which is filter, let's step into that.
>
> **[3:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=204)** All right, now we're down a couple of levels, and to keep track of where we are, we can use the Call Stack.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=209)** We'll look at the Call Stack in a little more detail later, but you can see, here we are inside filter, and then here's fadeTo.
>
> **[3:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=216)** So let's start stepping out again, and watch what happens to the Call Stack.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=220)** Filter's gonna go away, and then fadeTo is gonna go away, as we step out.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=225)** And now we're back where we started.
>
> **[3:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=227)** Getting used to how the step in and step out functions work is really a matter of using a debugger for a little while.
>
> **[3:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=233)** But if you ever get lost, and wonder what these buttons are going to do, the Call Stack can be a nice way to figure it out.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=240)** Okay, let's look at one more way to step around.
>
> **[4:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=242)** It doesn't involve any buttons at all.
>
> **[4:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=248)** If I right click in the gutter, there's a Continue to here function, which will let me skip everything that happens between wherever I'm paused and this line, and the debugger will just jump right to that point.
>
> **[4:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=263)** This covers all the major ways we can step through our code's execution that you'll see in any debugger.
>
> **[4:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=268)** Step over, step into, and step out.
>
> **[4:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=272)** Now you may notice, Chrome has one more button here which is simply called Step.
>
> **[4:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=277)** This is a button that was recently added as of the time I recorded this video, as a way to help developers who are used to older versions of Chrome.
>
> **[4:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=285)** It modified the way that the step into function works.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=288)** So if you've used these debuggers before, and step into doesn't work exactly the way you expect it to, this button is an alias to the old step into method.
>
> **[4:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=298)** There's one more thing I wanna mention about navigating through all of this code base.
>
> **[5:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=301)** In this example, I'm using the developer build which has everything non minified, it's much more readable.
>
> **[5:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=307)** It's also much larger, and you wouldn't wanna ship this in a production website.
>
> **[5:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=312)** For colorbox, we have the minified version here.
>
> **[5:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=318)** Same thing with touchSwipe, and when you're in Chrome, you can use the Pretty print function to get another look at a minified version that becomes a little bit more readable.
>
> **[5:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=329)** I still recommend going with the non minified developer versions of JavaScript libraries when you're in development, because it helps with your debugging a lot more.
>
> **[5:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=337)** It makes those step into and step out functions work a lot better.
>
> **[5:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/step-into-over-and-out-of-functions?u=76281980&t=342)** So that covers the major points of navigating around once your execution has stopped.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (9), case, (1), this, (1), switch (1)
> **Code Identifiers:** fadeto (7), jquery (6), flowerlinks (4), floweropacity (1), touchswipe (1)
> **Tools:** firefox (3)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** index.html (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Find out where you are using the call stack
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=0)** - [Instructor] In this video we're going to look at the Call Stack in a little more detail.
>
> **[0:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=3)** And see how it's a little bit like a time machine.
>
> **[0:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=5)** This example looks just the same but I've added a little be it a new JavaScript for the purpose of illustrating the Call Stack.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=12)** Let's scroll down a little bit.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=14)** To this line.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=16)** Where I have a function called goGetSomeData.
>
> **[0:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=19)** Let's set a break point there and reload.
>
> **[0:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=21)** Okay.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=22)** So we've stopped right before this function is going to execute.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=26)** Here's the Call Stack.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=28)** I'm going to step into this function.
>
> **[0:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=30)** We could see here we are inside goGetSomeData now.
>
> **[0:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=34)** And as I'm stepping through this-- I scroll down to Scope.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=39)** You could see my variables are starting to update.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=43)** Returnables is now an empty array.
>
> **[0:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=45)** And I have another function here called getMyReturnables.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=48)** But before we get into that let's watch what happens when we click around in this Call Stack.
>
> **[0:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=54)** I go back up, inside my anonymous ready function, here.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=60)** To goGetSomeData.
>
> **[1:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=62)** And then before that I'm into jQuery itself.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=65)** Having functions look anonymous inside a Call Stack is not super helpful for debugging purposes.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=71)** So let's resume this.
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=74)** And we're going to go into the Editor and rename that ready function.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=78)** So, here in my Editor, this is what jQuery uses to fire a function as soon as a page is fully loaded and ready to go.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=85)** Right now it's an anonymous function.
>
> **[1:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=87)** So it appears in the Call Stack as Anonymous.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=89)** Let's call it something else.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=91)** Let's call it myReadyFunction.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=96)** I'll save this, switch back and reload.
>
> **[1:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=101)** Everything looks the same.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=102)** I still have my breakpoint in the same place but now instead of Anonymous I have myReadyFunction.
>
> **[1:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=106)** This helps me orient myself when I'm stepping into an auto functions in the Call Stack.
>
> **[1:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=111)** So, let's step into go get my data and try things again.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=115)** So, I added goGetSomeData to the top of a Call Stack.
>
> **[1:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=119)** Let's step down to this next function, called getMyReturnables.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=122)** We'll step into that as well.
>
> **[2:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=124)** You could see, here we go.
>
> **[2:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=125)** We have getMyReturnables here at the top of the stack.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=130)** And clicking through these I can see where I jumped into that next function in the stack.
>
> **[2:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=136)** And also, my local Scope is updating every time.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=140)** So, this is the local scope as of this piece of the Call Stack which is called a frame.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=145)** So at this point in the execution when I was inside my ready function.
>
> **[2:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=150)** These are all the variables that are defined in a local scope.
>
> **[2:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=154)** Likewise, here in goGetSomeData I have a local scope for local variable and my returnables and then a closure which is another function scope for my ready function.
>
> **[2:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=166)** And I can see what's defined.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=167)** And I have access to inside this function from my original closure.
>
> **[2:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=174)** And this works all the way down the Call Stack.
>
> **[2:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=178)** So, I'm still operating inside my ready function and down inside a new local function with some new variables that are as yet undefined.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=186)** So let's step through this a few times using Step Over.
>
> **[3:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=193)** You can see down here in my local scope that all these variables are updating.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=201)** But still, the version of returnables that's here at this point is still an empty array.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=209)** Which is just what we'd expect.
>
> **[3:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=211)** But then.
>
> **[3:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=215)** If I go back to get my returnables and step out.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=220)** Now I'm back inside goGetSomeData and returnables is no longer and empty array.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=225)** It's now these 10 items that I got from that for loop.
>
> **[3:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=231)** So you can se that using the Call Stack I can go back in time to where a function was executed to see what the state of my data was at that point.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=240)** And then return to where I am in the execution right now as I'm building up up that data that might be returned.
>
> **[4:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=247)** Using the Call Stack can get a lot more complicated than this when you're dealing with a synchronous JavaScript.
>
> **[4:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=252)** Your Call Stack can get much, much more complicated than this especially when you're dealing with Ajax and you have a synchronous pieces that are firing at different times.
>
> **[4:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=261)** But this is the basics at how this works.
>
> **[4:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=263)** And having seen this I hope you'll have a little bit better idea of how the Step Into and Step Out functions work.
>
> **[4:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/find-out-where-you-are-using-the-call-stack?u=76281980&t=270)** And how the scope tools can show you the state of your data at different times.

> [!info]- Semantic Content
>
> **Code Keywords:** function (17), let (9), super (1), this. (1), else. (1)
> **Code Identifiers:** gogetsomedata (6), getmyreturnables (3), jquery (2), myreadyfunction (2)
> **UI Navigation:** scroll down (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Monitor variables with watches
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=0)** - [Narrator] In this video, we're going to talk about watches which are a way to monitor variable values and expression values over time.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=8)** So here in this example file, here's my custom JavaScript at the bottom of the index.html.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=14)** And I have some new functions here, some new data.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=18)** So let's set a breakpoint here on line 325 for actionTime.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=23)** And I'll refresh the page.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=28)** So I've stopped at this point where this variable is going to be assigned.
>
> **[0:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=31)** Now of course, when you wanna find what any particular variable is assigned to, you can look through the call stack.
>
> **[0:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=37)** But depending on how deeply you have to go in here to find a particular piece, how many closures you have to go through, which part of the scope you wanna get into.
>
> **[0:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=46)** Or how deep the data structure of your objects might go.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=49)** It can be a little bit of a pain to have to hit all these triangles and go find the right thing.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=53)** That's where watch expressions come in.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=58)** So here in the watch expressions inspector, I can hit the plus sign to add a new expression to keep track of.
>
> **[1:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=64)** Let's set one for this actionTime variable.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=69)** So what this does is allow me to watch what's happening to this particular variable without having to look in the scope inspector.
>
> **[1:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=77)** So if I step over that assignment, here it is, set to the current date and time.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=83)** And now if I step down a little further, let's get a preview of where we're going here.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=89)** actionTime is reset a little later on.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=92)** So I'm going to need to swipe to see anything change and I'm also going to need to be paused for my watch expressions to work.
>
> **[1:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=100)** So let's pause on each of these with a breakpoint.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=104)** I'll call up my color blocks, and do some swipes.
>
> **[1:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=108)** Here we go.
>
> **[1:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=108)** actionTime is currently set to whatever it was set to up here.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=115)** And now when I step over, it's going to be reassigned.
>
> **[2:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=120)** And you can see it changed a little bit.
>
> **[2:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=123)** And resume, swipe right.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=126)** And I'm stopping here and it's going to be reset again when I step over.
>
> **[2:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=132)** That was such a small change, you didn't even see it.
>
> **[2:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=135)** Now the nice thing about watch expressions is that they don't just work for simple variables.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=139)** You can put in entire expressions here.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=143)** The way I usually find myself using this is digging into parts of objects.
>
> **[2:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=147)** So object.property.value for example.
>
> **[2:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=154)** Or you can call a method that's part of a variable like this.
>
> **[2:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=157)** So for example, this is a data object so I can use toLocaleTimeString like this.
>
> **[2:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=168)** I'll have to expand this a little more so we can see it.
>
> **[2:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=172)** But this expression is evaluated against the current value of actionTime.
>
> **[2:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=177)** So let's resume this and I'll do another swipe.
>
> **[3:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=181)** And so, instead of having to look through this whole thing just to pick out just the time, I can use this to see it much more easily.
>
> **[3:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=189)** Let's try this in another context.
>
> **[3:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=192)** I'm gonna scroll down to my goGetSomeData function down here.
>
> **[3:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=197)** Now set a breakpoint where returnables is assigned.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=201)** Let's reload and here we are.
>
> **[3:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=205)** I'm going to add a watch expression for returnables.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=209)** Which currently is an empty array.
>
> **[3:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=213)** Now let's step into this getMyReturnables function.
>
> **[3:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=217)** This establishes a new scope and I'm defining a local variable for the getMyReturnables function which is also called returnables.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=225)** Let's step through this a little bit.
>
> **[3:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=226)** Of course it starts out as an empty array just like it did up here.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=229)** I'm gonna step through this a few times, add some things onto the array and you can see my watch is updating.
>
> **[3:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=235)** If I bring up my call stack and go back to goGetSomeData, you can see, returnables updated to the value as of this point in the call stack.
>
> **[4:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=244)** So the watch expression stay updated based on my current frame in the call stack.
>
> **[4:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=250)** If I step out again, I'm back up to goGetSomeData.
>
> **[4:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=256)** getMyReturnables has returned and assigned returnables to that full set of data in the array.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=264)** And of course, if I wanted to just look at a little piece of this, I could use the slice method which is available on any array, and I'll pass in zero and one to pull the first item off the front of the array.
>
> **[4:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=281)** So if I were in a situation where an array was being modified over and over again and I wanted to monitor what the first item was or some other item somewhere in the array, anything that I can write as a JavaScript expression can be evaluated as a watch expression.
>
> **[4:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=296)** This can be really useful if you don't need a variable in your code to track something.
>
> **[5:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=301)** But you wanna track it just for the purposes of debugging.
>
> **[5:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=304)** So that's a look at watch expressions.
>
> **[5:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/monitor-variables-with-watches?u=76281980&t=306)** If can be much handier than having to dig through the scope inspector to find particular pieces of data that you're gonna watch over time as your code is executing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3), this. (2), this, (1), pass (1)
> **Code Identifiers:** actiontime (5), gogetsomedata (3), getmyreturnables (3), tolocaletimestring (1)
> **CLI Commands:** find (5)
> **Analogies:** for example (2), just like (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** index.html (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### Source maps to debug minified files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=0)** - [Instructor] In this video we're going to look at source maps, which are tool you can use to map the minified production ready versions of JavaScript files, to their corresponding, more readable development versions.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=10)** This is a feature that is likely enabled out of the box in your debugger of choice, but just to make sure, we're going to look at the settings here in Chrome.
>
> **[0:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=19)** So here in the contextual menu we're gonna open up the settings.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=24)** If I scroll down a little bit, here under sources.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=29)** Enable JavaScript source maps is checked.
>
> **[0:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=31)** That is what I need.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=33)** So depending on the browser that you're using, and the particular settings that you have in that browser, this example might need a little bit of tweaking before it's ready to use.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=41)** What we're going to look at here is the source map that's associated with jQuery itself.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=47)** It used to be that the online version of jQuery had a source map built into it.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=51)** They're not doing that anymore.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=52)** I guess people were getting a little bit confused by it.
>
> **[0:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=55)** So, instead of calling the online version and then using the local version as fall back, we're just using the local version here.
>
> **[1:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=62)** Which I've updated to include its source map.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=65)** So now let's set a break point.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=68)** We'll just set it on the first line and we'll reload to get started.
>
> **[1:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=73)** And one more note is that most JavaScript compilation and minification tools like Webpack or Rollup and so forth, will provide a way to generate source maps.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=83)** So for testing production builds of your own code where you control everything.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=86)** You won't have to do this juggling of jQuery that I did here.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=89)** Over something like jQuery that we didn't build ourselves, this is the way it goes.
>
> **[1:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=94)** So I'm going to step over, and I think I'll step into find here.
>
> **[1:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=100)** And you can see here's jQuery, it does not say that it's minified.
>
> **[1:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=105)** But down here it says that it's source mapped from the minified version.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=109)** We'll just confirm here.
>
> **[1:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=113)** We are loading the minified version of jQuery, but it has a reference inside to a source map which tells it where every function is defined and where you can find it in the non-minified version.
>
> **[2:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=124)** So we can see this here, and you can also see, if we look in the source panel, which we could do by hand, I happen to know where to find it, it's down here in the petal folder and then under js.
>
> **[2:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=137)** But we could also find this by right clicking and choosing reveal in navigator.
>
> **[2:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=141)** This is a great way to find a file that you're working on if you just get lost, if you're opening a lot of files in your debugger.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=148)** And you can see that this file name is italicized here.
>
> **[2:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=151)** This is the version that's actually referenced in the file, and then this italicized version is called up because we're using a source map.
>
> **[2:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=159)** So this allows me to step through my code, using this method which I know is called find.
>
> **[2:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=168)** But in the minified version it's called something crazy because everything is minified and obfuscated.
>
> **[2:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=174)** But this makes it much more obvious what's going on.
>
> **[2:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=176)** Now there's a tricky thing about using source maps related to watch expressions.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=180)** So let's step down a little bit.
>
> **[3:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=182)** And at this point, I have some variables called i, ret, self, len, and I can see from these little hints, and from the scope pane down here that the values for these are all known in some way, except for i which is currently undefined.
>
> **[3:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=197)** But if I set watch expressions for these, I'll get different behavior.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=201)** So let's try len, not available, how bout self?
>
> **[3:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=206)** That's window.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=209)** Right down here it's a jQuery object.
>
> **[3:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=212)** So things are acting a little bit differently up here and the reason for that is because the watch expressions are evaluated against the currently executing code.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=220)** Without respect to the source map.
>
> **[3:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=222)** So in the minified version.
>
> **[3:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=223)** There doesn't happen to be a variable which is actually called len, it's probably called something really short like x or I don't know, something else.
>
> **[3:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=233)** So we can't really use watch expressions when we're working with source maps, or at least we can't expect them to be reliable most of the time.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=240)** Now this is something that debuggers may become a little more clever about at some point.
>
> **[4:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=245)** But for now it's something to watch out for.
>
> **[4:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=247)** I would still recommend in general that when you're working in development that you just reference the non-minified versions of any libraries or code that you wanna be able to step through easily and have the full compliment of debugging tools and knowledge available to you.
>
> **[4:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=261)** And then when you're ready to ship switch to the minified versions.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=264)** But if that's too burdensome for some reason, or if you just only happen to have the minified versions available, you can look and see if there's a source map available as well that can help you keep your debugger in sync.
>
> **[4:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/source-maps-to-debug-minified-files?u=76281980&t=275)** So, source map support is available in almost any debugger, and if you do have it available it's quite useful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), self (2), function (1), else. (1), for. (1)
> **CLI Commands:** find (6), make (1)
> **Code Identifiers:** jquery (7)
> **Definitions:** is a  (2), is called (2)
> **UI Navigation:** scroll down (1), switch to (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Putting it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=6)** - [Instructor] In this challenge, we're going to look for and solve a few problems with another version of the Hansel and Petal page using the techniques we've covered so far.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=14)** On this page, we have a little modal pop-up that appears to ask customers to join the mailing list.
>
> **[0:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=19)** I'm going to reload this to make sure we can see it.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=23)** After a couple of seconds, there it goes.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=25)** We want it to fade in and out nicely and be dismissible via its Close button here or the Escape key.
>
> **[0:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=31)** And once it's been displayed to the user, we want to make sure that they don't see it over and over again.
>
> **[0:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=36)** So that's what we expect, but there are a few strange behaviors happening here.
>
> **[0:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=40)** First of all, when I close the modal, it disappears way less gracefully than it appears.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=47)** The modal is made with a couple of simple elements for its overlay and content with the animation coming from CSS transitions.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=53)** You can look at the challenge.CSS file in the exercise files to see the active styles.
>
> **[0:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=57)** But while you'll probably want to look at them, you should not change them for this challenge.
>
> **[1:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=61)** Second, every time I load the page, the modal keeps appearing.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=65)** So I just refreshed it.
>
> **[1:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=66)** There it is again.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=68)** Refresh again, and there it is.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=72)** On a real site, we'd probably set a cookie to stop this, but cookies don't work on local files.
>
> **[1:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=77)** Your page has to be served from a domain, even local host on a local web server for those to work.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=81)** So to make sure this works without having to involve a server, we're using the sessionStorage API, which is another way to store data in the user's browser.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=89)** The data are deleted when you quit the browser or close the window or tab.
>
> **[1:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=93)** It works similarly enough for our purposes here.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=96)** If I open up the developer tools here in Chrome, I can switch over to the Application Inspector to see the sessionStorage here or cookies, if I were using them.
>
> **[1:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=106)** Of course, file URLs do not store cookies.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=109)** So here we are, we're using the sessionStorage API, and we can see a key called modalViewed set to true.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=116)** Finally, close the developer tools again, if I try to fill out this form, the modal disappears.
>
> **[2:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=124)** We currently have a model that asks for the user's email address, but it doesn't stick around long enough to actually receive it.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=130)** On a related note, yes, this is a hint, clicking regular links doesn't do anything either.
>
> **[2:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=136)** There's only one file that needs to be changed for this challenge, challenge.JS in the exercise files.
>
> **[2:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=142)** So I'll open up the developer tools and here in the sources pane I can see it over here in the sidebar, but if yours isn't open like this, you could hit Command or Control + P and open the file this way.
>
> **[2:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=156)** And you can also open it in your editor of choice.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=160)** I have it open here in Visual Studio Code.
>
> **[2:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=163)** This is code that we're picking up for the first time and when this happens in a professional setting, ideally you'd see some comments and maybe get a walkthrough from whoever originally wrote it.
>
> **[2:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=171)** Because this is an exercise in finding problem areas, the comments are brief and we're not going to go into too much detail.
>
> **[2:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=176)** Don't want to give away everything yet.
>
> **[2:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=177)** But let's take a quick tour.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=180)** At the beginning of the file, we have this check for the modal viewed key in the sessionStorage.
>
> **[3:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=184)** It's still labeled cookie because that is ideally what we'd really be doing.
>
> **[3:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=188)** And if we see this key, we're supposed to return and not execute anything else.
>
> **[3:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=193)** After that, we have a timeout that will make the modal display.
>
> **[3:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=199)** We have an event listener for the key up event that will close the modal when we hit the Escape key, another one for clicking the Close button, and finally, the helper function, which is called from both of these that will actually hide the modal.
>
> **[3:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=212)** Now let's recap the objectives for this challenge.
>
> **[3:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=215)** First, we're going to fix the timing on the animation or transition when the modal closes.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=220)** Remember you aren't editing CSS for this challenge, only JavaScript.
>
> **[3:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=223)** Also, as a little hint, the transition stops when the element is hidden by the display property.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=229)** Next, we need to stop this modal from appearing every time the page loads.
>
> **[3:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=232)** This will involve checking how our sessionStorage is being used and subsequently checked.
>
> **[3:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=238)** And finally, the modal disappears when we click the email field.
>
> **[4:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=241)** In fact, clicking just about anything makes the modal disappear.
>
> **[4:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=245)** This challenge should take roughly 10 minutes to complete.
>
> **[4:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-putting-it-all-together?u=76281980&t=247)** See you back here when you're finished for a solution.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), this, (2), let (2), switch (1), else. (1)
> **Code Identifiers:** sessionstorage (5), modalviewed (1)
> **Env Vars:** css (3), api (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **File Paths:** challenge.css (1), challenge.js (1)
> **UI Navigation:** in the sidebar (1), open the (1)
> **Exercise Files:** exercise files (2)

#### Solution: Putting it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=0)** - [Narrator] Okay, let's take a look at a solution to this challenge.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=9)** We're trying to solve three issues.
>
> **[0:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=11)** Let's take them one by one.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=12)** First, we'll deal with the timing of the closing of the modal.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=16)** So if I refresh this page to make it appear again, here it goes and close and it disappears super fast.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=23)** So let's open the developer tools and here in the sources pane I'm going to open my challenge.JS file and my challenge.CSS file.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=33)** In these styles, I can see that we have a transition set for the modal container, that's the overlay where its opacity changes over the course of one second, and then the inner portion with the actual form changes over two seconds.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=51)** And we have a couple of classes here that will toggle the opacity.
>
> **[0:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=55)** And we also have this display block, which defaults to none, so the overlay doesn't block anything on the page.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=65)** All right, what we're dealing with is how the modal closes.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=68)** So I'm going to go down to the helper function called hide modal, and we'll set a break point here to see what happens.
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=74)** I'll refresh and the modal is going to appear here.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=79)** And now when I close this, we're stopped.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=83)** So the first thing that's going to happen is we're going to remove the visible class from that container.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=88)** If we step over this, it fades pretty smoothly, I can see in the background there.
>
> **[1:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=93)** It didn't do that when we were not paused.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=96)** And then here's our set timeout function that's going to remove that open class, which is what toggles between display block and display none.
>
> **[1:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=110)** Okay.
>
> **[1:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=112)** So having set that break point and paused, we can see that the behavior is different.
>
> **[1:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=117)** In other words, if we're waiting longer, we get the fade that we're expecting.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=122)** So what that tells me is that this timeout function is firing too quickly.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=126)** And in fact, it is firing after only 100 milliseconds.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=130)** We're toggling the display from block to none, just 100 milliseconds after we start this transition, and it's set to take quite a bit longer than that.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=140)** So what we need to do is wait longer, make this larger.
>
> **[2:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=144)** So back here in my editor, and I'll scroll down to that same helper function.
>
> **[2:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=150)** Let's change this to 2100 milliseconds, 2.1 seconds.
>
> **[2:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=156)** That'll make sure that all those transitions are taken care of before we remove that class and take the overlay off the page entirely.
>
> **[2:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=166)** Okay, so I'll remove that break point and refresh.
>
> **[2:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=170)** We can see that the code has updated here.
>
> **[2:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=172)** And now if I close this, there we go.
>
> **[2:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=175)** Smooth, just like when it opens.
>
> **[2:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=177)** Let's look at the gate that should stop this thing from appearing every time the page loads now.
>
> **[3:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=183)** That's going to involve the session storage up here at the top.
>
> **[3:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=187)** So first we're going to check the application inspector.
>
> **[3:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=190)** Down here, under session storage we can see that we have this modal viewed, which is set to true, okay.
>
> **[3:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=197)** And over here we are checking when the page first loads for that value, it certainly looks like this should be working, but it's not.
>
> **[3:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=204)** So let's set a break point and we'll add a watch expression to help us see this.
>
> **[3:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=212)** So I've copied that line, I'll paste it here.
>
> **[3:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=216)** Let's hide this sidebar over here that we don't need so we can make our sidebar over here a little larger.
>
> **[3:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=224)** All right, load again.
>
> **[3:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=228)** Now back in the application inspector, let's delete this so we can start over again totally clean.
>
> **[3:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=238)** Okay, reload the page.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=240)** Here we are, we're stopped.
>
> **[4:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=241)** And just like I expect this first time I've loaded this, our modal viewed key is no.
>
> **[4:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=249)** So if I let this play, there we go, we've displayed this.
>
> **[4:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=255)** Now we can close it and let's refresh.
>
> **[4:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=260)** Now we have a value here.
>
> **[4:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=263)** But even though this looked correct over in the application inspector, says the value is true, I can see here in my debugger, looking at my watch expression that this is not true, the bullying, this is true, the string.
>
> **[4:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=280)** This is a little trap that you might fall into when you're using session storage or local storage.
>
> **[4:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=285)** These values are stored as strings.
>
> **[4:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=287)** And if you pass it in a different kind of data, it's going to be cast to a string automatically.
>
> **[4:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=292)** So using a strict equality check like this is going to fail.
>
> **[4:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=295)** We need to change this so we're setting values that we actually want and we're checking them correctly.
>
> **[5:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=302)** So back here in my editor, I will scroll up to the top.
>
> **[5:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=305)** And what we want to do is check whether this is a string.
>
> **[5:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=310)** And so we're being very clear about our intentions.
>
> **[5:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=313)** Even though this does get converted to a string automatically, we'll still set this to a string and then save.
>
> **[5:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=323)** Okay, let this run out.
>
> **[5:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=324)** Probably don't need the break point anymore.
>
> **[5:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=327)** We've displayed, now let's refresh the page and no modal appears, okay.
>
> **[5:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=336)** We can clear it one more time and refresh just to make sure it really worked.
>
> **[5:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=343)** There it goes, here's our key.
>
> **[5:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=346)** Close it again, refresh, very good.
>
> **[5:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=350)** We know that's working now.
>
> **[5:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=352)** Okay, the final thing that we need to deal with.
>
> **[5:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=356)** I want to make sure this appears again.
>
> **[5:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=358)** So I'll delete that and refresh.
>
> **[6:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=362)** The next thing that we need to sort out is how this disappears when we click that field like that.
>
> **[6:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=369)** I'm going to have to keep deleting this now, I guess.
>
> **[6:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=373)** So there's a couple of ways we could look at this.
>
> **[6:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=377)** We could set a break point inside our click event listener to see why things are going wrong here.
>
> **[6:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=382)** Refresh the page to bring that model back.
>
> **[6:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=386)** Click here, and I can see that my click event handler is firing even when I click here.
>
> **[6:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=392)** Okay, that doesn't seem good, that disappears.
>
> **[6:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=396)** Let's click somewhere else.
>
> **[6:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=399)** Still being handled by that same function.
>
> **[6:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=402)** This thing is a little overeager.
>
> **[6:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=405)** I'm looking at this, we can see that it's because indeed we've added this to the document.
>
> **[6:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=410)** So the entire page is listening for click events and responding to them, trying to hide this modal.
>
> **[6:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=416)** We have nothing inside to check what was clicked.
>
> **[6:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=419)** Really, we don't need this to be added to the document, we need this to be added to the close button.
>
> **[7:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=424)** So we'll delete this key one more time, refresh the page.
>
> **[7:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=432)** Let's right click and inspect this item so we can see, okay, what we really want is for this to be attached to the modal close button.
>
> **[7:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=442)** So back here in the editor, I'm going to scroll down to my click event handler here.
>
> **[7:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=450)** I'm going to change this from just document.add event listener to document, and we'll use query selector to get that modal close button and add the click event listener to that.
>
> **[7:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=467)** In fact, because we have this model container available in a variable, instead of using document, we could restrict this to the modal container.
>
> **[7:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=475)** Get a little auto-complete love there from visual studio code.
>
> **[7:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=479)** Now I can save this.
>
> **[8:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=481)** This is going to add that event listener only to the element that I actually want to fire it.
>
> **[8:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=487)** Very good.
>
> **[8:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=488)** Let's switch back and we can refresh this.
>
> **[8:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=492)** Of course, I have to clear out my key here.
>
> **[8:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=494)** Refresh.
>
> **[8:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=498)** There we go.
>
> **[8:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=500)** And now, if I click the field, that works fine.
>
> **[8:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=503)** Click anywhere else in the modal, click out here, all good.
>
> **[8:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=507)** But if I click the close button, away, it goes.
>
> **[8:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=510)** Very good.
>
> **[8:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=512)** Now we've taken care of all three points.
>
> **[8:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=514)** In this challenge, we used different techniques that we've covered so far, break points in different areas, stepping through our code, watch expressions to help us make clearer things like what the application inspector couldn't tell us.
>
> **[8:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-putting-it-all-together?u=76281980&t=526)** And generally did some debugging and reasoning about this page to solve several problems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (5), this, (5), this. (5), delete (3)
> **CLI Commands:** make (7)
> **UI Navigation:** scroll down (2), open the (1), toggle (1), scroll up (1)
> **Definitions:** is a  (3), in other words (1)
> **File Paths:** challenge.js (1), challenge.css (1)
> **Analogies:** just like (2)
> **Env Vars:** css (1)
> **Versions:** 2.1 (1)


### 3. Debugging in Practice

#### Debugging the use of a jQuery plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=0)** - [Instructor] In this video, we're going to start putting together everything we've seen so far about debuggers and fix a bug in the usage of a jQuery plugin.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=7)** Here's the page that we'll be troubleshooting.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=9)** It's called Lettering.js Test, and it looks a lot like a very, very simple blog.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=14)** Most CMSs don't let you insert markup into the titles of posts, so if you want to sort of art direct your titles and make parts of them look different, you have to come up with another option.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=24)** There's a jQuery plugin called Lettering.js that can help with this.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=28)** The goal is to make certain words look different from the rest of the title.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=32)** Also included in the exercise files is the Lettering.js example page that I've enhanced a little bit to include a very fancy treatment of the plug-in name here using the plugin.
>
> **[0:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=42)** This will let us see the expected behavior and kind of check out how it works.
>
> **[0:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=46)** So, if I use command option U, or control alt U on non-MacOS platforms, we open the source.
>
> **[0:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=54)** We can scroll down to the name of the plugin here, Lettering.js.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=58)** You can see here that there's nothing other than these letters that spell out the logo's name in the source, and yet on the page, each of them is styled differently.
>
> **[1:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=66)** So if I inspect this by right clicking and choosing inspect, I can see that what's happening is the plugin inserts a span tag around each letter in this case, and then there's CSS for each one that will style them however you want.
>
> **[1:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=80)** That's the sort of behavior that we're expecting here on our test page, but it's not working.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=85)** So let's see if we can figure out why.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=88)** We'll open up the developer tools.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=91)** And here on the sources pane, we can start to look things over.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=95)** First, I'll open the index.html file.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=99)** We'll scroll down to where the script tags are.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=102)** Here's jQuery, and then the Lettering.js plugin, with its jQuery prefix that helps us know that it's a plugin for jQuery, and then here's our main.js file, which should have the custom JavaScript.
>
> **[1:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=114)** So I could open that over here in the sidebar by clicking this.
>
> **[1:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=117)** But also in the sources pane, I could use command P, or control P on Windows or Linux, to open any file that Chrome is aware of.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=126)** I start typing main.js, and here it is.
>
> **[2:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=129)** It's not such a hardship to find something that's in just a couple of folders deep, but when you're looking for something where you might have a very complicated folder and document structure, that shortcut can be really helpful.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=139)** So let's set a break point here on line two, where the plugin is invoked, and we'll reload the page.
>
> **[2:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=146)** And there we go, we're paused here on the invocation of the plugin.
>
> **[2:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=150)** So I'm going to step into this function, and we can see what's going wrong.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=155)** Okay, so we've jumped here into jQuery.
>
> **[2:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=158)** This is the minified version of jQuery.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=160)** It's pretty unreadable, even if we were to use the pretty print function.
>
> **[2:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=165)** And I really don't actually care about what's going on in jQuery itself, so what I need to do at this point is ignore this script from debugging, also called blackboxing the script.
>
> **[2:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=175)** That is, I'm going to force my debugger to ignore anything that takes place inside that jQuery file.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=180)** You can do this to as many files as you need to make sure that you're only looking at the stuff that's important to you when you're trying to debug.
>
> **[3:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=187)** The way you do this in Chrome is right clicking anywhere in the sources pane, and then I can choose add script to ignore list.
>
> **[3:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=196)** There are other ways to do that as well, even from the call stack.
>
> **[3:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=200)** And as you can see, the call stack has just removed everything that was related to jQuery.
>
> **[3:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=205)** By check show ignore listed frames, you can see there's a lot more here that's just from jQuery itself, so I'll uncheck that again, and now we just see what's in the main.js file.
>
> **[3:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=218)** Now, anytime something cyclists into jQuery, I'll be taken out without having to look at it.
>
> **[3:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=224)** Having scripts in an ignore list or a blackbox is really handy when you're working with a lot of third party libraries, and the way you can do it varies in different browsers.
>
> **[3:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=235)** Over here in Firefox, I have the same example loaded, and here in the source pane, I can choose ignore source.
>
> **[4:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=244)** Sometimes you'll see a little eyeball icon that you could click that will also give you an option to hide the script.
>
> **[4:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=252)** Okay, back here in Chrome, I'm going to refresh, and we'll try stepping into this function again.
>
> **[4:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=261)** Okay, now we've skipped jQuery, and we've just gone over to the lettering plugin, and because I'm in the developer build of jQuery lettering, it's not minified and I can really see what's going on here.
>
> **[4:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=274)** And it's showing me that the method I've passed in to the lettering function is word.
>
> **[4:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=280)** Which sounds right, but it's not working.
>
> **[4:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=282)** And then I can see that it's trying to look it up in this methods variable.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=288)** It's not in the local scope, but if I open up the parent closure, I can see the methods here, and the ones that are available are init, lines, and words, and I'm passing in word.
>
> **[5:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=301)** So now I know what the problem is and we can fix it.
>
> **[5:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=305)** If I didn't want to go digging through the scopes pane, I could also have added methods here, in my watch expressions, and inspected it that way.
>
> **[5:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=317)** In any case, now we can go fix this.
>
> **[5:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=321)** So switching over here to my code editor, I have the index.html file, and I'm going to jump down to the bottom of the file with command down arrow, and then I can hold command and click this file to open it.
>
> **[5:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=334)** And now I can change word to words and save.
>
> **[5:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=343)** I'll let the execution resume here in Chrome, close the developer tools, and refresh.
>
> **[5:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=349)** And I can see that now my titles are starting to look partially different.
>
> **[5:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=353)** That means that the CSS that was supposed to be loading and restyling those words is working again.
>
> **[5:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-the-use-of-a-jquery-plugin-22149299?u=76281980&t=358)** Of course, there's more than one way to do this, but we've just applied some of what we've learned about using a debugger to fix this very simple bug.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), this. (3), case, (2), this, (1)
> **Code Identifiers:** jquery (14)
> **File Paths:** lettering.js (5), main.js (3), index.html (2)
> **UI Navigation:** open the (2), scroll down (2), in the sidebar (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** css (2)
> **Tools:** firefox (1)
> **Exercise Files:** exercise files (1)

#### Debugging a React application in Chrome
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=0)** - [Instructor] In this video, we're going to look at an example using React with both the built-in debugger and React's own custom developer tools.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=7)** If you've never seen React before, it's a very popular JavaScript user interface framework based on components.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=12)** So you break up your project into logical pieces with their own bits of data all built in JavaScript and assemble your UI from those components.
>
> **[0:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=19)** As we'll see, the syntax used in building those components is different than you might have seen before.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=24)** But ultimately, it's all JavaScript.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=26)** This example involves some Ajax, so to run it successfully, you'll need a local web server.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=32)** I'm using MAMP, which is available for macOS or Windows, but there are tons of options available.
>
> **[0:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=37)** If you don't have a local web server like this and you want to learn more, you can search the library for Apache or local web server and find lots of videos with more detail.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=48)** I've copied the exercise files into MAMP's htdocs folder, where it serves from by default.
>
> **[0:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=54)** The current location, whatever that is configured to, is displayed on MAMP's home screen, and you can change it in the preferences under Server.
>
> **[1:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=64)** As you can see here on my desktop, I've copied the files from the desktop folder into the htdocs folder for MAMP.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=72)** One other thing I want to mention is that MAMP has a port setting in MAMP's preferences under Ports.
>
> **[1:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=80)** Normally, a web server on the Internet would be serving a website from port 80, but MAMP ships with port 8888 by default for various reasons.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=88)** And I've just decided to leave it at that default for now.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=92)** And the button to start or stop the web server is up here in the right-hand corner.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=99)** All of that means that once I have loaded my files and turned on the web server, I can now access the exercise files at local host port 8888 here, separated by a colon, and then following the path down to where the files live.
>
> **[1:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=113)** So this is our example.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=115)** It's a page that's built in React, and this is supposed to be a company directory showing all the people that work at this company.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=121)** But as we can see here, there's just a loading message and nothing else.
>
> **[2:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=124)** So clearly, something's going wrong.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=126)** Let's open up the developer tools.
>
> **[2:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=129)** Use Command + Option + I here.
>
> **[2:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=132)** And already, I'm prompted to install React's dev tools.
>
> **[2:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=135)** And there's a link that'll take me there, so let's do that.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=139)** These tools are available for Chrome, Firefox, or Microsoft Edge.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=143)** I'm using Chrome here, so we'll go to the Chrome Web Store, following that link.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=148)** And I can add them to Chrome right here.
>
> **[2:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=152)** So I'll add the extension, and there we go.
>
> **[2:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=156)** I can see that I have the dev tools available now.
>
> **[2:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=158)** So I can close all this and go back to my page and refresh it.
>
> **[2:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=164)** Now, what I expect to see here is a couple more panels.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=167)** I'm going to close the dev tools, copy my URL, and I'm going to close the window, reload it totally from scratch, see if we have better luck this time.
>
> **[3:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=182)** So we'll reopen the developer tools, and here are my new tabs.
>
> **[3:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=185)** Great.
>
> **[3:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=187)** This is a bug in Chrome that I hope will be fixed by the time you see this video.
>
> **[3:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=190)** But if it's not, you can try doing this to get these tabs back.
>
> **[3:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=195)** Lots of frameworks offer tools like this, purpose-built developer extensions to give you knowledge that's harder to find with a general-purpose debugger.
>
> **[3:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=202)** In this case, I can browse and inspect the components on the page using this Components tab and check for performance issues in the profiler.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=209)** We're just going to use the Components tab for now.
>
> **[3:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=211)** But first, let's take a look at the code.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=214)** So over here in my editor, I've opened the directory.js file and the index.html file.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=220)** In React, components are either ES6 classes or functions.
>
> **[3:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=224)** In this case, I'm using functions.
>
> **[3:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=227)** And we have a Directory component down here at the bottom, which is the biggest one that contains everything else, a Filters component, which is used to filter the results that are displayed in the directory, a People component, which contains all of the Person components, which are supposed to list all the people who work here.
>
> **[4:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=242)** But of course, we don't have any of these people on the page right now.
>
> **[4:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=246)** One more thing I want to do, here in the sources tab in my debugger, I'm going to type Command+P to open that directory.js file.
>
> **[4:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=256)** And we're going to find that Axios callback.
>
> **[4:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=258)** Here it is.
>
> **[4:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=260)** Going to set a breakpoint inside this callback function.
>
> **[4:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=263)** This is called after Axios goes and gets that directorydata.json file, which contains all the people that should be displayed on the page.
>
> **[4:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=271)** I'm going to reload so we can trigger this, except it doesn't get triggered because Babel has transpiled this page.
>
> **[4:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=279)** So sometimes the breakpoints don't exactly end up where we think they should, and something that we expect to stop the page doesn't stop it.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=288)** This is one of those cases where adding debugger to the actual file can be helpful, so let's go do that.
>
> **[4:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=293)** Going to search for Axios here in this file.
>
> **[4:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=297)** And inside its callback, I will just add debugger here.
>
> **[5:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=301)** I'll switch back to Chrome, remove this breakpoint, and reload the page.
>
> **[5:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=309)** You might need to hard reload the page to make sure that you get this.
>
> **[5:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=312)** There we go. Now we've paused.
>
> **[5:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=315)** And the reason I wanted to stop here is because, here inside this asynchronous request that changes my call stack quite a bit, I can see that I have a promise.then here, which corresponds with this Axios callback.
>
> **[5:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=327)** And it's got a little divider line here telling me that this is a whole call stack across asynchronous requests.
>
> **[5:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=333)** And if I scroll down even further, here's a postMessage.
>
> **[5:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=337)** And if I scroll down even a little further, here's another XML HTTP request, which was initiated by Babel because it uses an Ajax request to grab the original file, directory.js in this case, and transpile it into the version that's injected into the browser.
>
> **[5:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=354)** And that's why setting a break point in here, in the original code, won't necessarily work the way you expect it to.
>
> **[6:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=361)** Okay, I can let this run out.
>
> **[6:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=363)** And I will switch back to my editor and remove that debugger statement 'cause we don't need it for now.
>
> **[6:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=370)** Returning to Chrome, I'm going to open up the Components tab and reload the page.
>
> **[6:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=378)** I can see I have a Directory component and a Filters component, which correspond to the functions I saw in my code.
>
> **[6:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=385)** And if I click the Directory component, I can use this inspector over here to see the data that this component is managing.
>
> **[6:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=392)** Depending on the kind of React components you're dealing with, you might see hooks, or you might see state, and you also see props.
>
> **[6:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=399)** We're interested in these hooks right now.
>
> **[6:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=402)** Normally, when you're using what are called hooks that manage the state of a component, it'll look like this one here, where there's no label showing you what these data correspond to.
>
> **[6:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=413)** So I can see that I have something that looks like person data.
>
> **[6:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=417)** But I don't know, just by looking here, which variable that's stored in.
>
> **[7:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=422)** I've added a state with the label Custom React Hook that let's us get some more useful information about these other variables.
>
> **[7:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=430)** So I can see I have one called isLoaded, which looks very promising.
>
> **[7:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=433)** And there's also one called visiblePeople, which also has data inside.
>
> **[7:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=437)** So it certainly looks like this page should have displayed these people, only it's telling me that it's still loading, right here.
>
> **[7:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=448)** My isLoaded variable is still set to false.
>
> **[7:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=452)** So I think what I need to do is deal with the fact that this is still set to false, even though we appear to have data.
>
> **[7:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=461)** Switching back to the code, so it should be happening here is, after my request completes, I should've marked the page as having loaded the data.
>
> **[7:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=469)** I have these functions that set all people, set the visible people, set the job titles.
>
> **[7:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=473)** This is obviously setting data based on what was returned.
>
> **[8:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=480)** And if I scroll down the page, I could see here's that loading message that's displayed.
>
> **[8:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=485)** I could've searched for that as well, since I know that that's something that's displayed on the page related to the bug I'm trying to fix.
>
> **[8:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=494)** And so I'm checking the isLoaded flag, which I saw over there in the dev tools.
>
> **[8:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=501)** And I can see that I have a function here called setIsLoaded, which Visual Studio Code has helpfully grayed out for me because I've never used it.
>
> **[8:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=511)** So it looks like what we need to do is, after we complete our request, I need to set isLoaded to true instead of false.
>
> **[8:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=520)** So I'll add that here and switch back to Chrome, close down my developer tools, and I will reload to see what we get.
>
> **[8:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=528)** Aha, there we go.
>
> **[8:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=529)** Now I have a directory of people, just like I expect.
>
> **[8:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=534)** In the end, this was a pretty simple bug.
>
> **[8:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-react-application-in-chrome-22151337?u=76281980&t=536)** But getting here, we get to see some more power in the debugger with a framework-specific developer extension, how the call stack can track asynchronous operations, and how we can apply what we know in a little more complex context, like React.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (3), switch (3), this, (2), function (2)
> **Env Vars:** mamp (7), url (1), es6 (1), xml (1), http (1)
> **Code Identifiers:** isloaded (4), macos (1), postmessage (1), visiblepeople (1), setisloaded (1)
> **File Paths:** directory.js (3), index.html (1), directorydata.json (1)
> **CLI Commands:** find (3), apache (1), make (1)
> **Definitions:** is a  (3), means that (1), is called (1)
> **UI Navigation:** scroll down (3), go to (1)
> **Ports:** port 8888 (2), port 80 (1)

#### Debugging on iOS using Simulator
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=0)** - [Instructor] In this video we're going to look at how to debug JavaScript running on an iOS device using Safari's developer tools and the simulator built into x code.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=8)** Most of what we see here applies when debugging on actual devices plugged in over USB as well.
>
> **[0:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=13)** Here's my example loaded in Safari.
>
> **[0:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=15)** All these items are draggable as you can see.
>
> **[0:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=20)** And I want to respond to swipes as well, removing items when I swipe left.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=25)** This is built using jQuery UI.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=29)** And we're gonna look at it on an iOS device through a simulator.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=33)** I need to do a little bit of setup for this all to work.
>
> **[0:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=36)** First I'm gonna turn on the developer tools in Safari.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=39)** To do that I'm going to open the preferences and then here under advanced, show develop menu in the menu bar.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=49)** Once that's available I've all kinds of goodies including the Web Inspector which is right here.
>
> **[0:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=56)** Once again the key command to open this is command option i, the same way we see with pretty much all the other developer tools.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=65)** All right.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=67)** This is good, now let's get the simulator running.
>
> **[1:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=70)** Here in the simulator I'll show you where to turn on the Web Inspector on your iOS device.
>
> **[1:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=75)** This is, I believe, enabled by default in the simulator.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=78)** But you'll need to find the same thing in your mobile device when you connect it over USB.
>
> **[1:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=82)** So you'll look under settings, and then Safari, and scroll down to advanced and here's the Web Inspector.
>
> **[1:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=93)** So if this is not enabled, you'll just turn it on here and then you're good to go.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=99)** So let's load up Safari, and then let's make a connection between Safari and the device.
>
> **[1:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=105)** Here I am back in Safari, and now if I open the develop menu I can see the simulator here.
>
> **[1:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=112)** And if I choose about blank, which is what's currently loaded over here in my simulator, I can see a Web Inspector for what is actively loaded in Safari on the mobile device.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=122)** And I can hover over dom elements and they highlight over there.
>
> **[2:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=125)** This will work exactly the same with your connected device.
>
> **[2:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=128)** It's pretty neat.
>
> **[2:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=129)** Now let's load the actual example file in this simulator.
>
> **[2:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=131)** You could click over here and type it in, but it's easier to select the URL and copy it.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=140)** Then switch over to the simulator and paste.
>
> **[2:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=144)** Now it doesn't go anywhere yet, but this puts it in the device's clipboard.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=148)** So now I can tap here, clear this out, and double tap to bring up the contextual menu.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=155)** I could paste it in or I can use the shortcut paste and go, and there we have it.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=160)** My example is loaded and I can start dragging these items around.
>
> **[2:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=165)** Looks good.
>
> **[2:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=166)** Now let's load up the debugger and do some actual work.
>
> **[2:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=168)** Here in Safari's Web Inspector the debugger is called debugger, very helpful.
>
> **[2:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=173)** The script file that I'm interested in is main.js.
>
> **[2:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=177)** This has my custom JavaScript.
>
> **[2:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=179)** So there's an inline library pasted in here that helps hook up jQuery UI to touch events, and then there's my code underneath.
>
> **[3:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=187)** Now what we wanna do is take action and remove items when we're swiping left.
>
> **[3:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=193)** So let's try it here, swipe left, yeah, nothing happens.
>
> **[3:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=198)** Just responding to drags.
>
> **[3:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=200)** So let's set a breakpoint here inside the swipe left method and see what our options are.
>
> **[3:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=206)** Right now all I have is nonexecuting code.
>
> **[3:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=208)** It does seem like I can set a breakpoint here.
>
> **[3:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=210)** Let's make sure that it actually works.
>
> **[3:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=213)** Nope, swiping left and nothing happens.
>
> **[3:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=215)** So because this line can't execute we never stop.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=220)** I can swipe all I want and nothing happens.
>
> **[3:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=222)** So let's delete this breakpoint and I'll switch over here to my editor.
>
> **[3:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=226)** And I'll scroll down and use debugger.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=229)** I don't know what I wanna write yet, so this is a fine way to pause.
>
> **[3:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=232)** I'll save that, switch back to Safari, and now I can use command r while I have Safari highlighted with the Web Inspector highlighted.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=240)** Now watch over here, the page reloads.
>
> **[4:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=244)** And now I have debugger set here.
>
> **[4:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=246)** So if I swipe left, there we go, we're paused.
>
> **[4:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=250)** And now we can see what our options are.
>
> **[4:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=253)** So what I want to do is figure out what I know about this event and how I'm going to target the item that I want to get rid of.
>
> **[4:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=260)** Usually you'll find this sort of thing in the target property of an event object.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=264)** So let's open this and look around.
>
> **[4:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=267)** We have current target and then we have target right here.
>
> **[4:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=270)** So we're going to have to expand this a little bit to see better what's going on.
>
> **[4:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=275)** So I can see this is a list item with a class of item.
>
> **[4:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=279)** All right, that should be good enough.
>
> **[4:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=281)** So I'll just resume this so it completes.
>
> **[4:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=284)** Now I'll switch to my editor and I can write a little code.
>
> **[4:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=287)** Okay, let's replace everything here with some new code.
>
> **[4:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=292)** So I'm going to use a little bit of jQuery here.
>
> **[4:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=296)** The item that I was looking for was in event.target.
>
> **[4:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=299)** So I'm going to save that as a little variable.
>
> **[5:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=301)** When I'm working with jQuery I like to prefix any variables that I save with a dollar sign to denote that they're jQuery objects, or at least I expect them to be.
>
> **[5:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=312)** So I've saved that and now I'm going to inspect the item using item.is.
>
> **[5:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=320)** This is a method that's built into jQuery that can tell me whether the item I'm looking at has certain classes or is otherwise a certain type of dom element.
>
> **[5:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=331)** So I'm going to look and see if I have that item class.
>
> **[5:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=334)** Because I'm executing the swipe using event delegation on the entire items list, I'm doing this to make sure that the event that I'm targeting is targeting just one of the individual items and not the list as a whole.
>
> **[5:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=347)** So assuming I've gotten to this point, I now should be able to do something with this item.
>
> **[5:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=354)** So there's various options for what we could do here.
>
> **[5:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=356)** I'm gonna use jQuery's fadeout method.
>
> **[5:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=359)** Make it fade out nice and fast like this.
>
> **[6:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=362)** This is just a built-in method to jQuery that does a simple fadeout animation on the item to which you chain that method.
>
> **[6:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=370)** So let's save this and go back and try it out.
>
> **[6:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=373)** I'm going to hide the sidebar again and now let's reload.
>
> **[6:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=380)** And I'll try swiping left and there we go.
>
> **[6:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=383)** The items start to fade out and disappear.
>
> **[6:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=386)** I was able to use the debugger to find out what I should know at that point in execution, and that helped me write the code that I wanted.
>
> **[6:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=392)** Of course, when testing your JavaScript on mobile devices you'll want to use actual devices as well.
>
> **[6:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=397)** But to get you started this way works great.
>
> **[6:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-on-ios-using-simulator?u=76281980&t=399)** Now you know how to connect Safari's developer tools, including the debugger, to the simulator or actual devices.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), switch (4), delete (1), class. (1), this. (1)
> **Tools:** safari (12)
> **Code Identifiers:** jquery (8), ios (3)
> **CLI Commands:** make (4), find (3)
> **UI Navigation:** open the (2), scroll down (2), in the menu (1), select the (1), switch to (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** usb (2), url (1)
> **Prerequisites:** setup (1), you'll need (1)

#### Remote debugging on an Android device
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=0)** - [Instructor] In this video, we're going to look at how to do remote debugging on an Android device.
>
> **[0:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=4)** This is possible in Chrome or Firefox.
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=6)** And does involve a little bit of setup.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=9)** We're going to use the same example as for iOS.
>
> **[0:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=11)** Where the list items are drag-able.
>
> **[0:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=15)** And you can swipe left to make things disappear.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=18)** I've loaded this example on my computer's web server.
>
> **[0:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=21)** And connected the Android device to the same network so they can see each other by IP address.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=26)** And remember, I'm using Mac in it's default configuration which is why we have this 88 88 port here.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=32)** My Android device is connected by USB.
>
> **[0:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=35)** But I need to enable USB debugging.
>
> **[0:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=37)** There are instructions on the Android Studio website for how to do this, but in particular, here's the funny part.
>
> **[0:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=42)** You need to visit your device settings.
>
> **[0:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=45)** And just like it says here, tap the build number seven times for the developer options to even show up.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=51)** It's just kind of a little quirk that's funny about Android.
>
> **[0:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=54)** Once that's done and your device is connected by USB, there will be a prompt on the device asking you if you want to allow your computer to debug the device, and of course, you want to say yes.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=63)** With all that done, load up Chrome on your Android device.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=67)** Incidentally, if this stuff doesn't work, make sure that it's fully updated.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=71)** Chrome should be able to see your device now.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=72)** But how can we tell?
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=74)** Back here on the example.
>
> **[1:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=75)** I'm gonna load up the Chrome developer tools.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=79)** Command option I.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=81)** Now I don't see anything different here that indicates where I should be looking.
>
> **[1:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=84)** What I want is here under more tools.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=88)** Remote devices.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=91)** This is all getting a little squished.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=92)** So let me undock this.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=95)** Much better.
>
> **[1:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=97)** Okay, now I can see what's going on here.
>
> **[1:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=100)** What's going to show up here will vary depending on the device you have connected.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=104)** But I can see that, here's Chrome.
>
> **[1:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=106)** And I've loaded up the example from my local web server.
>
> **[1:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=110)** Using the same URL but just on the IP address.
>
> **[1:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=113)** And now all I need to do is click inspect.
>
> **[1:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=119)** And at this point, I have a debugger running on the device.
>
> **[2:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=123)** So, let's take a look at the screen of my Android device right now.
>
> **[2:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=127)** Here in the elements inspector, I can hover over items and they highlight on the screen.
>
> **[2:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=132)** So I know for sure that things are connected.
>
> **[2:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=135)** Now in my sources panel, I can set a breakpoint in the debugger.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=140)** Let's set it here inside swipe left.
>
> **[2:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=142)** And now I'll try swiping left on the device.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=145)** On that first item.
>
> **[2:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=147)** And there we go.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=148)** Execution has paused.
>
> **[2:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=151)** And I can proceed through the debugger the same way as I would with the desktop instance.
>
> **[2:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=159)** This is pretty sweet.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=160)** And opens up great possibilities for compatibility testing.
>
> **[2:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=163)** One other thing that's kind of nifty about the Chrome developer tools.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=167)** Is that there's a screencast, as well.
>
> **[2:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=170)** This looks like the button that you use to toggle the response design mode in the styles and elements inspectors.
>
> **[2:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=176)** But this is an actual screencast of your device.
>
> **[2:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=179)** So everything that I do on the device is going to happen over here.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=186)** Pretty neat.
>
> **[3:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=188)** Many of these features are available for Firefox, as well.
>
> **[3:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=190)** Especially the JavaScript debugging.
>
> **[3:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=192)** Look for the web IDE tool in Firefox to find your device there.
>
> **[3:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=196)** And that's how to connect an Android device for remote debugging.
>
> **[3:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/remote-debugging-on-an-android-device?u=76281980&t=199)** It does involve a little bit of setup, but once your up and running, it's pretty excellent.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), this. (1)
> **Env Vars:** usb (3), url (1), ide (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** firefox (3)
> **Prerequisites:** setup (2)
> **Code Identifiers:** ios (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is an  (1)

#### Challenge: Other people's code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=0)** - [Instructor] In this challenge, we're dipping into something that can be a source of consternation for many developers.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=10)** Other People's Code.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=12)** We will be debugging some code we've never seen before at all, using a framework that we might not be overly familiar with, that we're pretending someone else has given up on, and handed to us.
>
> **[0:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=21)** I hope that doesn't sound too terrifying.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=23)** It's not a ton of code, don't worry.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=25)** But if you're asking, why are we doing this?
>
> **[0:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=27)** Let me explain, and hopefully assuage any major concerns.
>
> **[0:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=31)** First, if you're a professional, or enthusiastic web developer, you won't always be starting everything from scratch.
>
> **[0:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=38)** You will almost certainly be handed other people's code to work on at some point.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=41)** And there will be times when that code appears, and maybe sometimes is terrible.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=47)** I also think it's true that dealing with the unfamiliar is intrinsically a good thing in code, and if you'll indulge me a little in life.
>
> **[0:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=54)** All this means that along with merely increasing our skill with a debugger, which is mainly why we're here, exercising our skills in less familiar settings is a good mental exercise.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=63)** Now let's take a look at this unfamiliar project.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=67)** Here it is, a little card table that will deal out the number of cards you ask for.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=71)** You want to have this running from your local web server, as we saw with our previous react example.
>
> **[1:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=76)** I've tried to keep the amount of very idiomatically react syntax moderate so those who have never used it before don't want to just throw their computers at the nearest window.
>
> **[1:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=84)** This is supposed to be a challenge, not something that feels impossible.
>
> **[1:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=87)** There's plenty of Vanilla JavaScript here.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=89)** Okay, let's try it.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=91)** Click shuffle and deal.
>
> **[1:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=97)** I asked for six cards, and I got, well, I'm no mathematician, but that's a lot more than six.
>
> **[1:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=103)** Let's open the developer tools, and see what we have here under the hood.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=109)** This is the root element, there's a mock up here where, this was originally mocked up without react.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=116)** But here in the root is all the stuff that's been rendered.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=121)** We can look over here in the components tab to see our components table, and a whole bunch of cards, mainly.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=130)** And we can see over here, the data that react is tracking for us in the form of a couple items of state.
>
> **[2:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=138)** Let's scroll down here, we can see that here are how many is represented by this state variable, and then all this other stuff is the cards.
>
> **[2:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=149)** Okay, so there are actually 45 of them.
>
> **[2:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=151)** That is just a few more than six.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=155)** If we change six to seven, you can observe down here that, that has changed as well.
>
> **[2:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=161)** This is react in a nutshell, we're keeping some data in sync with what we are rendering visually.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=167)** In react, we store things in state if they're going to be used in our UI, or otherwise impact what we see.
>
> **[2:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=173)** In this case, the hand that we're dealt is used, and represented in state, and the number of cards we need is also in state.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=180)** So that's all we have there, and therefore that's all that's browsable in this section of the React Dev Tools.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=186)** The deck that we're drawing from is also important, but it doesn't impact the rendering of the UI so it's not stored in state, and therefore, you can't see it in these developer tools.
>
> **[3:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=194)** Let's click one of these card components, we can't actually see it it's way up on the page, but that doesn't matter right now.
>
> **[3:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=200)** The thing I want to show you is that this card component has a couple of things called props.
>
> **[3:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=205)** If you've never seen these before, props are like arguments, or parameters passed into a component.
>
> **[3:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=210)** Changing props is one reason that react components will get rerendered.
>
> **[3:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=213)** So when the cards are shuffled and redealt, like if we just click this button again, the cards get new props for the rank and suit and rerender.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=225)** Alright, so we've seen the behavior, the rather strange behavior, let's go take a look at the actual code.
>
> **[3:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=231)** We'll take a quick tour through the code here.
>
> **[3:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=235)** Right at the top we have cribbage hand size.
>
> **[3:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=237)** Cribbage is my favorite card game so I decided to have our initial number of cards dealt be the number of cards you get in the hand of cribbage.
>
> **[4:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=245)** And then we have our components defined here as a couple of functions card and table.
>
> **[4:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=250)** Here we can see those props, suit and rank.
>
> **[4:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=254)** Here's the other one, which are used to render what actually appears on the cards.
>
> **[4:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=261)** Of course, we can see that the color is determined by whether the suit is H, which stands for hearts, or D, which stands for diamonds.
>
> **[4:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=270)** Down here in the table component is where most of the work happens.
>
> **[4:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=273)** We start out with an empty hand, that is an empty array, and then we have our state defined here.
>
> **[4:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=280)** We have our hand, and our hand size, that is the number of cards that should be dealt.
>
> **[4:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=284)** And then we have our set of functions that will change those values that react stores for us, and then also triggers rerendering of the whole thing.
>
> **[4:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=293)** We have a couple of event handler functions here redeal is the one that's wired up.
>
> **[4:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=297)** If we scroll down a little further that's the one that's wired up to this button here for shuffling the cards.
>
> **[5:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=305)** And then we have the change hand size, which responds to the change event on this select box.
>
> **[5:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=315)** Right here is a variable called cards, which will determine what's shown on the table.
>
> **[5:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=320)** It's either going to be a bunch of cards, or a little div that just shows a message for when there's nothing dealt yet.
>
> **[5:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=326)** Just so we know that nothing is there, that we did that on purpose.
>
> **[5:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=332)** Here's the line that actually renders that react component onto the page.
>
> **[5:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=337)** And then we have some helper functions down below.
>
> **[5:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=340)** We have one that builds a deck of cards as an array of objects, with all our ranks, and all our suits represented as just simple data.
>
> **[5:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=351)** This is not going to win you any computer science awards, but it makes very clear what we're doing here.
>
> **[5:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=359)** We have a helper function called get-pip, which will return Heart, Diamond, Club or Spade.
>
> **[6:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=367)** The original author did it this way, so these can be swapped out for icons, or images, whatever you might want.
>
> **[6:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=374)** And then we have a helper function called shuffle and deal, which as we can see gets the deck, shuffles it, and then returns the portion that we want.
>
> **[6:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=382)** And then we have a couple of helper functions at the bottom here, which are borrowed from the very popular Lodash Library, which just help us support the things that we want to do.
>
> **[6:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=391)** You don't have to worry about those functions at all for the purpose of this challenge.
>
> **[6:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=395)** Here are our objectives for this challenge, once again.
>
> **[6:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=399)** First, of course, is fixing however many bugs exist that are preventing the page from working correctly.
>
> **[6:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=404)** We don't know currently how many bugs there are.
>
> **[6:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=407)** We want to make sure we get a different hand with the number of cards we want every time we click the button.
>
> **[6:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=412)** The second objective is exercising a softer skill, if you will, but one that's no less important.
>
> **[6:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=417)** Successfully navigating this challenge despite the parts that might be unfamiliar.
>
> **[7:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=421)** React is pretty popular, so you might have worked with it before, or if you have maybe not in the way we have here.
>
> **[7:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=427)** Either way, dealing with the unfamiliar is specifically a goal here.
>
> **[7:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=432)** Before I turn you loose, here are a couple of little hints.
>
> **[7:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=435)** As with the previous react exercise, we're running our code through Babel to allow the use of JSX for the components.
>
> **[7:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=440)** Because there are no source maps when we work this way, breakpoints can behave a little strangely sometimes.
>
> **[7:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=446)** So don't forget that you can use debugger to set an encode breakpoint.
>
> **[7:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=450)** I'm not saying you will, or won't have to do this, I'm just saying don't forget.
>
> **[7:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=454)** Also remember that the two helper functions at the bottom of the file borrowed from the Lodash Library are not the source of any bugs in this challenge.
>
> **[7:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=461)** If you have worked with react before so all the syntax is pretty familiar this challenge might not take too long.
>
> **[7:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=467)** For everyone, I think you'll probably be finished in 15 minutes or less.
>
> **[7:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-other-people-s-code?u=76281980&t=471)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), for. (1), throw (1), case, (1)
> **Definitions:** is a  (2), stands for (2), means that (1), is an  (1)
> **UI Navigation:** scroll down (2), open the (1)
> **CLI Commands:** pip (1), make (1)
> **Best Practices:** don't forget (2)
> **Env Vars:** jsx (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### Solution: Other people's code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=6)** - [Instructor] Let's work through a solution to this other people's code challenge.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=10)** First we're going to try shuffling and dealing a few times just to confirm that even though there's way too many cards, it does look like we're getting a variety here.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=23)** So it's at least partially working.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=25)** I don't see any duplicate cards.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=28)** Some of them are getting hidden up here but it seems safe to say that we are not getting duplicates.
>
> **[0:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=36)** And even though this is not working, giving us the right number of cards, there's at least some good in here.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=43)** So we'll open up the developer tools and go to our debugger.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=47)** Here's the cards.js file here.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=51)** We know that we have a handler that takes care of shuffling and dealing.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=58)** So let's go visit that and set a breakpoint.
>
> **[1:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=66)** I'll click this and here we go.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=68)** We're paused.
>
> **[1:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=71)** The first thing that I want to do is confirm that the size of the deck that we're getting back is actually correct.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=79)** So I've stepped over onto this line where I go and get the deck.
>
> **[1:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=83)** Let's just step over that so we can get a value to look at.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=86)** I can see here that I have the right number of cards.
>
> **[1:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=90)** If I scroll down through here, I can see I have four aces, four twos, four threes, and so forth.
>
> **[1:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=97)** So I think I can trust that part is working the way I want it to.
>
> **[1:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=103)** Here is where the dealing part happens, where I take a chunk off of this whole deck and return it.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=109)** I can't actually see this yet because it's just directly returned, so let me step over again.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=115)** Who will return.
>
> **[1:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=117)** Now that value is being set over here in new hand.
>
> **[2:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=120)** And there it is.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=121)** I have 46 items where I really wanted, what was it?
>
> **[2:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=125)** Four.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=126)** That's sort of weird.
>
> **[2:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=128)** 52 minus 46 is six, not four.
>
> **[2:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=132)** So I might have a couple of things that I'm dealing with here.
>
> **[2:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=136)** Let's go back.
>
> **[2:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=138)** I'll let this play out again.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=140)** Click that button again so we hit the same breakpoint.
>
> **[2:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=148)** Everything seems to be fine up until the point that we slice off a chunk of that deck.
>
> **[2:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=153)** So I'm wondering if I just forgot how to use the slice method on an array.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=160)** Usually what I'll do is go and look up the syntax for a function.
>
> **[2:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=164)** So I'm working with array.slice here.
>
> **[2:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=169)** Here it is, array.prototype.slice.
>
> **[2:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=175)** So I can see looking at this array that passing in just one parameter will give me the rest of the array after the first two.
>
> **[3:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=184)** That is our problem.
>
> **[3:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=185)** We should be starting at the beginning and just slicing off however many it is we want.
>
> **[3:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=189)** Instead we're slicing those off and then returning everything else.
>
> **[3:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=195)** So back here in Visual Studio Code, let's revisit that same function here, the shuffle and deal.
>
> **[3:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=205)** What we need to be doing here is starting at the beginning.
>
> **[3:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=207)** We can see that Visual Studio Code, if I hover over slice will also give me some useful information.
>
> **[3:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=212)** So I want to start at the beginning of the array.
>
> **[3:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=215)** Take the first item off there and only go up to hand size.
>
> **[3:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=220)** So we'll save that.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=225)** Let this play out and reload.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=229)** Close the developer tools so we can see a little better.
>
> **[3:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=233)** Shuffle and deal.
>
> **[3:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=233)** Oh, look at that.
>
> **[3:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=235)** Six cards, wonderful.
>
> **[3:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=237)** So we're done, right?
>
> **[3:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=238)** Let's see.
>
> **[3:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=239)** We'll get seven cards.
>
> **[4:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=240)** Oh, nope. Not done.
>
> **[4:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=243)** This part isn't working either.
>
> **[4:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=247)** Referring back to the react developer tools, I do know if I look at the table that the number of cards that I want is actually being tracked correctly by the component.
>
> **[4:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=256)** I'm just not using it properly.
>
> **[4:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=259)** So let's revisit the debugger.
>
> **[4:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=262)** I don't think I need this breakpoint.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=264)** Let's go up to the redeal handler.
>
> **[4:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=268)** Here we go.
>
> **[4:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=270)** This is where we get our new hand.
>
> **[4:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=273)** Now I can shuffle and redeal.
>
> **[4:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=276)** So getting my new hand by shuffling and redealing, and I'm using cribbage hand size, which was up here at the top.
>
> **[4:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=288)** Well, that is obviously our bug.
>
> **[4:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=290)** If I happen not to notice that and I decided that I was going to step in here, I get some other hints as I go through.
>
> **[4:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=296)** Hand size is set to six here.
>
> **[4:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=299)** So another way that we might have noticed this was by observing that we had four selected up here.
>
> **[5:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=304)** We know we had four in the react state and yet the parameter was passed in as a six.
>
> **[5:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=311)** If I didn't notice it at first, I could step back through the call stack, look back here to see, oh yeah, look at that.
>
> **[5:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=318)** Cribbage hand size.
>
> **[5:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=319)** So I'm hard coding this as if we're playing cribbage, which as much as I enjoy cribbage, is not really what I want to do.
>
> **[5:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=329)** So we can scroll up to that redeal function.
>
> **[5:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=333)** What we actually want is hand size.
>
> **[5:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=338)** This is the variable that gets updated every time we change that select box.
>
> **[5:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=343)** We'll save again, can disable that breakpoint, close the dev tools and reload.
>
> **[5:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=353)** This time we're going to ask for just four cards and it looks like it works.
>
> **[5:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=357)** If keep doing this I get different cards every time.
>
> **[6:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=361)** Let's go up to nine.
>
> **[6:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=364)** There we go.
>
> **[6:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=368)** Try this with any number and they all seem to behave as we want them to.
>
> **[6:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=372)** It appears that we are done.
>
> **[6:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-other-people-s-code?u=76281980&t=374)** We were able to employ our debugging tools, the regular debugger, and the react dev tools to learn more about how this little web app works and why it wasn't behaving as it should, and we did it all in a setting that was a bit less familiar than the others we've seen so far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (3), return. (1), else. (1)
> **UI Navigation:** go to (1), scroll down (1), scroll up (1)
> **Tools:** visual studio (2)
> **File Paths:** cards.js (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Debugging a Node.js application in WebStorm
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=0)** - [Instructor] In this video we're going to debug a simple node script in WebStorm, a very nice IDE.
>
> **[0:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=5)** It was PhpStorm, WebStorms sibling, that turned me into an IDE believer.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=10)** Our example is a little node script that will collect Lorem Ipsum placeholder text from this website, [lipsum.com](https://lipsum.com).
>
> **[0:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=17)** We want to return the text in a form suitable for pasting into a page or wherever we might need some placeholder text.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=23)** One of the nice things about [lipsum.com](https://lipsum.com) is that they offer an API that makes custom scripting possible.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=29)** First, I'm going to show you how this script works in its current state.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=33)** I'm here in a terminal where I've changed directories to the exercise files for this video, and you can see that I have the gitlipsum.js file here.
>
> **[0:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=44)** so let's execute that through node.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=48)** It prompts me for how many paragraphs I want.
>
> **[0:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=50)** I'm going to choose two.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=52)** It retrieves the data and then gives it back to me, but it's in the form of this massive JSON blob.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=58)** I want this as plain text that I can copy and paste.
>
> **[1:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=62)** So successfully retrieving the data is good, but it's not in the form we want.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=69)** Now over here in WebStorm, I'm going to open the project.
>
> **[1:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=73)** If you're setting this up for the first time it will take you through the setup process where you might need to create an account with [jetbrains.com](https://jetbrains.com) and start a trial.
>
> **[1:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=82)** But I'm going to open the exercise files, which are on the desktop, and I'm going to open the folder for this video.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=92)** In most projects with an IDE there will be an indexing process where the IDE will read through all the files that are available and start to figure out what all the available functions are to give you code completion and other things.
>
> **[1:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=104)** Because there's only one file in this project, it goes really fast.
>
> **[1:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=108)** Let's open that file.
>
> **[1:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=110)** And there's a bunch of squiggly lines under a bunch of pieces here.
>
> **[1:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=114)** This suggests that WebStorm is not completely set up yet, so let's open the preferences and turn on node support.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=121)** There's a search field here in the preferences which is good because there's a lot of options.
>
> **[2:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=126)** And when I search for node, what I get selected here is under languages and frameworks, Node.js.
>
> **[2:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=133)** And what I want to turn on is this coding assistance for Node.js.
>
> **[2:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=138)** Once I've done that, I can click Okay.
>
> **[2:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=140)** There's a little bit more indexing, and now all these bits that had squiggly underlines are now highlighted because they are recognized keywords.
>
> **[2:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=150)** That plugin enables code completion, parameter hints, nodes module system, and more.
>
> **[2:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=156)** So make sure you turn that on if you're working with node scripts.
>
> **[2:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=159)** There's another squiggly line down here, but that's just the built-in spell checker, which you can turn off in the preferences if you want to.
>
> **[2:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=165)** Let's take a quick walk through this script to see what it's doing.
>
> **[2:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=170)** First, I'm including a couple of nodes modules.
>
> **[2:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=172)** The readline module for interfacing with data on the command line.
>
> **[2:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=178)** And the HTTPS module for making web requests from secure web services.
>
> **[3:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=185)** Then we're creating an interface for readline, just calling it RL, and I have the input and output options set to standard in and standard out.
>
> **[3:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=195)** Then we're using the question method from readline and prompting for how many paragraphs we want.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=201)** To that we pass this git paragraphs callback function.
>
> **[3:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=204)** The answer that the user gave is the parameter that's passed in, which we're calling numb paragraphs.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=209)** And then just sanitizing this and making sure that the input is in a form we want.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=214)** Basically, we want to make sure that there's more than zero but less than five.
>
> **[3:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=219)** That's just what we've chosen kind of arbitrarily for this example.
>
> **[3:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=222)** We post a little message to standard out using that write method, saying how many paragraphs we're going to get.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=229)** And then we're executing an HTTP GET through the HTTPS module, and this is the URL that the [lipsum.com](https://lipsum.com) service provides.
>
> **[3:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=239)** We're asking for the data in JSON format, asking for paragraphs, and how many we want.
>
> **[4:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=245)** Then we have a process response callback function here which takes response as its argument.
>
> **[4:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=252)** We're setting up our feed data, which is what will eventually get written out to standard out in the terminal.
>
> **[4:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=259)** The HTTPS module is returning the data as a buffer.
>
> **[4:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=262)** So first I need to collect all the data out of the buffer using its data event.
>
> **[4:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=267)** And so basically this just keeps firing over and over again until we've collected all the data that's coming back.
>
> **[4:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=273)** Then once we've collected all that data, the end event fires, and that's where we're doing the rest of the work.
>
> **[4:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=280)** Note that when that end event fires, currently we're just basically barfing that JSON blob out to standard out, and then adding a new line.
>
> **[4:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=289)** But we really need to transform that into copy and pasteable text.
>
> **[4:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=293)** And to do all this, we need to know what format that data looks like from inside the script.
>
> **[4:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=299)** And to do that, we'll hook up the debugger using a run configuration.
>
> **[5:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=305)** So we're going to click edit configurations up here.
>
> **[5:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=308)** It's also available through the run menu, edit configurations.
>
> **[5:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=314)** I'm going to click the plus button and we can see all kinds of different configurations that can be run for debugging or run purposes.
>
> **[5:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=322)** We're using a Node.js script, so we'll choose that one.
>
> **[5:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=327)** These configurations allow you to run a file in your project using any version of node that happens to be installed.
>
> **[5:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=334)** And as a quick sidebar, I currently have the latest version of Node installed globally, but it can be a good idea to use a Node Version Manager.
>
> **[5:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=344)** These tools allow you to use different versions of Node with different projects on the same machine, which ensures that all the modules that you've installed will be exactly the same as any others, other people you're working with, are using.
>
> **[5:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=357)** I use fnm myself, but nvm is probably the most popular one.
>
> **[6:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=362)** Whatever you use, WebStorm does a good job of detecting any versions of node that you've installed, and then you can set those in your run configurations.
>
> **[6:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=371)** In this case, because we're using the global one, we don't have to make any changes.
>
> **[6:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=374)** I'm just going to give this a name, we'll call it lipsum.
>
> **[6:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=378)** And then the JavaScript file that we're going to run is all I need in terms of configuration.
>
> **[6:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=383)** So I'll just set this to gitlipsum.js.
>
> **[6:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=385)** You could also select it from the standard file dialogue using this folder icon, and we'll click Okay.
>
> **[6:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=393)** And now this is available up here as the selected configuration.
>
> **[6:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=396)** I'm going to set a couple of break points in the file.
>
> **[6:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=399)** We'll set one on the outer block, and then one more down here after the git has completed in that callback function.
>
> **[6:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=409)** Then I can click Debug to get this started, which is also available here in the run menu.
>
> **[6:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=415)** And here we go.
>
> **[6:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=416)** Now we have our stepwise debugger right here in the IDE, and it's got all the controls that we expect.
>
> **[7:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=423)** There's a call stack here.
>
> **[7:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=425)** There are controls for stepping over, in and out.
>
> **[7:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=429)** This one is quite handy.
>
> **[7:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=430)** This will show you the line at which the execution has stopped.
>
> **[7:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=435)** So if it doesn't happen to be a breakpoint, you can click this and it will open the file that's currently executing and take you right to that line.
>
> **[7:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=441)** There's also a global resume button here, a stop if you want to just stop execution completely.
>
> **[7:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=448)** There's a breakpoint list which will show you all break points in all files.
>
> **[7:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=454)** You can enable or disable them here and delete them.
>
> **[7:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=457)** And there's also a button to mute break points.
>
> **[7:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=460)** So that will just disable all of them while leaving them in place.
>
> **[7:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=464)** So now that we're in here we can just start stepping through.
>
> **[7:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=468)** And I'll note that here in the process console this is your terminal.
>
> **[7:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=474)** And if I let execution resume it's asking me how many paragraphs I need, and I can type two and hit return.
>
> **[8:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=481)** And now it's dropped me into that second break point inside the process response callback.
>
> **[8:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=488)** So now I can start stepping through again.
>
> **[8:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=492)** Here's that data event that's going to fire over and over again.
>
> **[8:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=495)** So let me set one more break point down here inside the end callback, and we'll let execution resume again.
>
> **[8:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=503)** Now I can get over to the debugger pane and start inspecting the variables that are active right now.
>
> **[8:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=509)** Here's the feed data, which is coming through just as a JSON string.
>
> **[8:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=515)** So the first thing that we want to do is instead of just writing that out, let's change this.
>
> **[8:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=521)** And we'll get the feed JSON into a constant.
>
> **[8:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=525)** We will parse that feed data.
>
> **[8:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=532)** And then we can see that inside that JSON object we should expect a feed key and then a lipsum key which seems to map on to the text we're interested in.
>
> **[9:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=545)** So we'll write out the feed.lipsum here.
>
> **[9:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=550)** We can save this, let execution resume.
>
> **[9:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=554)** And here in the process console you can see what was happening before.
>
> **[9:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=557)** And now we can run this again.
>
> **[9:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=560)** the same debugger control is down here in the debugger pane.
>
> **[9:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=563)** So we do that one more time.
>
> **[9:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=567)** I can remove this break point and let this run again.
>
> **[9:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=571)** The process console is waiting for me to enter the number of paragraphs, which I will do again.
>
> **[9:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=577)** We can remove this break point.
>
> **[9:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=579)** Resume one more time into our end callback.
>
> **[9:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=583)** We'll make sure that this feed.json has been parsed as we expect it to be.
>
> **[9:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=589)** That's good.
>
> **[9:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=590)** Let it run to completion.
>
> **[9:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=592)** And now in the console, I can see that both the original JSON is being outputted.
>
> **[10:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=600)** So let's remove that.
>
> **[10:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=601)** And then down below, here's the raw text.
>
> **[10:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=605)** The line breaks, there aren't enough, rephrase.
>
> **[10:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=609)** But there aren't enough line breaks between the paragraphs.
>
> **[10:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=612)** So instead of just writing out the lipsum directly, we'll add some line breaks with the string replace method.
>
> **[10:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=619)** And we're going to replace a regular new line with two of them.
>
> **[10:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=626)** We'll save that and execute one more time.
>
> **[10:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=629)** We could do this with or without the debugger.
>
> **[10:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=632)** We have the debugger running right here, so we might as well use it.
>
> **[10:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=635)** And here in the process console, I will ask for two paragraphs.
>
> **[10:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=639)** And with no break points left it just runs right through to the end.
>
> **[10:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=644)** And this is looking pretty good.
>
> **[10:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=647)** So I'll make sure this file is saved and we'll switch back to the terminal and check it there as well.
>
> **[10:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=653)** I will clear this output.
>
> **[10:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=656)** Click the up arrow a couple of times to get my previous command.
>
> **[11:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=661)** And that looks good.
>
> **[11:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=663)** So now we've finished this exercise.
>
> **[11:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=665)** As you can see, being able to debug a project in the same place that you're editing is very useful.
>
> **[11:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=670)** WebStorm can do so much more than this, but hopefully this gives you an enjoyable taste of using an IDE for JavaScript development and debugging.
>
> **[11:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=677)** One of my favorite things about WebStorm in particular is that it provides a lot of sensible defaults without my having to install additional plug-ins manually.
>
> **[11:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=685)** If I do want to make changes, it's highly configurable, and generally a delight to use.
>
> **[11:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/debugging-a-node-js-application-in-webstorm?u=76281980&t=690)** But as long as you find something that's comfortable for you, that's what matters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), module (5), function (3), this, (3), interface (1)
> **CLI Commands:** node (14), make (6), git (2), find (1)
> **Env Vars:** json (7), ide (6), https (3), api (1), http (1)
> **File Paths:** node.js (3), gitlipsum.js (2), feed.json (1)
> **Tools:** terminal (4), command line (1)
> **UI Navigation:** open the (5)
> **URLs:** [lipsum.com](https://lipsum.com) (3), [jetbrains.com](https://jetbrains.com) (1)
> **Prerequisites:** setup (1), set up (1), install (1)

#### Setting up the WordPress example
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=0)** - [Instructor] The next example is going to involve working on a WordPress theme in Visual Studio Code.
>
> **[0:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=5)** In this video, we're going to do some setup for that WordPress portion.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=9)** This will require a local web server, just as our React example did.
>
> **[0:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=13)** We're still using MAMP, but I'm going to make a configuration change this time.
>
> **[0:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=17)** Previously, we didn't care about what port the web server was running on because perfect parody between your setup and mine wasn't important.
>
> **[0:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=24)** But WordPress hard codes links to images and pages, so to try and save some headaches, we're going to get as close as possible to give you the best chance to follow along easily.
>
> **[0:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=35)** First, we're going to copy or move this DBGWP folder from the exercise files on the desktop into MAMP's HT docs folder.
>
> **[0:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=46)** I'm going to copy them.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=52)** Next, we need to make our MAMP configuration change.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=60)** We can stop the server if it's running.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=65)** And now we can open the MAMP preferences and make the change.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=69)** We're going to set the ports to the default ones, 80 and 3306 for sequel.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=79)** And now we can restart the servers.
>
> **[1:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=82)** All right, let's ignore this error.
>
> **[1:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=84)** I'm going to secretly start the server again.
>
> **[1:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=96)** And this will open the MAMP start page most likely.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=99)** If it doesn't open immediately, you can open it yourself.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=102)** And the reason we're interested in this is is because we are going to need to import the database.
>
> **[1:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=107)** And we can do that here under the tools menu and go to PHP My Admin.
>
> **[1:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=113)** If it doesn't open it for you or you don't want to go to that start page, you can just go to localhost/phpmyadmin5.
>
> **[2:02](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=122)** And now we're going to go to the import tab and choose the file that we want to import.
>
> **[2:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=132)** I'm going to browse to the exercise files and this can be either on the desktop or in the ones you've copied into MAMP's folder and grab the _database.sql file.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=145)** Scroll down and import.
>
> **[2:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=149)** This will create the database for us, DBGJS_WP.
>
> **[2:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=156)** And we can open this up to see that there are tables here in the database to make sure it worked.
>
> **[2:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=163)** Most local development servers include PHP admin like this, but you can use any database management tool you like, even the command line, if that's what your server of choice supports.
>
> **[2:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=174)** As long as you're using the root user, this should all work.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=180)** Now that we've done this, we can go to localhost/dbg-wp
>
> **[3:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=190)** and if you see this sample WordPress site, you know you've got it working.
>
> **[3:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=194)** If you've gotten to this point and you have this WordPress site, you're ready to go for this WordPress example.
>
> **[3:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=200)** If something seems broken, you can check the wpconfig.php file and open that in your editor.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=209)** Depending on the configuration for your local web server, you might need to change the database user or password and sometimes, the host.
>
> **[3:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=217)** If you're using MAMP, all of this configuration should work right out of the box.
>
> **[3:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/setting-up-the-wordpress-example-22153322?u=76281980&t=222)** With this setup complete, we can proceed with debugging this WordPress sites theme in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** mamp (7), php (2), dbgwp (1), dbgjs_wp (1)
> **UI Navigation:** go to (5), open the (2), scroll down (1)
> **CLI Commands:** make (4), php (3)
> **Code Keywords:** import. (2), this, (2), require (1), let (1)
> **Prerequisites:** setup (3)
> **File Paths:** _database.sql (1), wpconfig.php (1)
> **Tools:** visual studio (1), command line (1)
> **Exercise Files:** exercise files (2)

#### Challenge: Debugging with an IDE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=6)** - [Instructor] In our final challenge, we're going to look one more time at debugging from a code editor.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=10)** Reinforcing this way of working is important.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=12)** While having debuggers in the browser is absolutely invaluable and where you'll spend a lot of time, being able to debug and fix your code in the editor you enjoy is efficient and maybe delightful.
>
> **[0:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=23)** As with every challenge so far, let's take a look at the patient we'll be diagnosing and helping.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=28)** The files for this challenge are based on the first video from this chapter but with a twist.
>
> **[0:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=32)** I have the solution loaded here in one tab and the challenge here in the other so we can see the expected behavior and then what we actually have.
>
> **[0:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=40)** The expected behavior is that when we roll over these words, in every title on the page, they change color every time we do it.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=48)** Works on all of these.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=52)** Here in our starting point, that is not the case.
>
> **[0:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=56)** Fixing that bug is part of this challenge but the main thing to practice is connecting our editor to the browser's debugger.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=63)** I'll be using Visual Studio Code for this challenge so I'm going to start with the folder loaded up here and take it from there.
>
> **[1:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=69)** So once again, here are the objectives for this editor based debugging challenge.
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=74)** Code wise this challenge is probably a little easier than the last one, but don't worry if it takes a little while to track down that issue.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=79)** First we'll configure our editor or IDE of choice to debug the page.
>
> **[1:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=84)** I'm going to use Visual Studio Code here, but if you've been working with WebStorm or others, by all means keep using that one.
>
> **[1:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=90)** Basically you should be able to separate points in the editor and have the connected browser stop when they're reached.
>
> **[1:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=94)** And one other note, you'll probably be able to work on this challenge with or without a web server.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=99)** In my experience and certainly in the editor I'll be using, local file URLs work just fine with these debugging configurations.
>
> **[1:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=105)** But if you hit a snag, you might try putting the exercise files on your local web server and seeing if that helps.
>
> **[1:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=111)** Once we're connected, we'll track down the bug or the words don't change when we hover the mouse over them.
>
> **[1:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=116)** Depending on how easy the editor is to configure for debugging, this challenge could vary quite a bit, but I'm guessing it will take you 10 minutes or less.
>
> **[2:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/challenge-debugging-with-an-ide?u=76281980&t=123)** Now off we go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1)
> **Tools:** visual studio (2)
> **Prerequisites:** configure (2)
> **Env Vars:** ide (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Debugging with an IDE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=6)** - [Instructor] Let's take a look at a solution for this editor-based debugger challenge.
>
> **[0:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=10)** We need to set up a debugging configuration in the editor and then fix that bug with the headers not changing color when we mouse over them.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=16)** So while I'm here, I'm going to copy the URL of this page that we're debugging, and then over here in Visual Studio Code, I'm going to create a debugging configuration.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=25)** That's going to be here in the run or debug panel, and I'll create my launch.json file against Chrome.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=33)** I can leave everything just like it is except for the URL.
>
> **[0:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=36)** I'm going to change that so we start in the right place.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=39)** There we go, and incidentally, you don't have to debug in Chrome.
>
> **[0:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=44)** There are other extensions if you search for debugger, there's one for Firefox, down here, you can see there's another one for Microsoft Edge.
>
> **[0:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=51)** So we have some options.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=53)** Chrome is probably the most popular one for this sort of thing, but you do have other options if you'd like to try them.
>
> **[1:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=60)** Now in the run pane, I can launch my new debugging instance of Chrome.
>
> **[1:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=65)** There it goes, helpfully offers to translate all of my placeholder faux Latin text there.
>
> **[1:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=72)** Let's open our developer tools, and the first thing that we want to confirm by inspecting one of these words is that we actually have the span tags that we want surrounding all the words, and we do.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=86)** So that part works.
>
> **[1:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=88)** Each of these can be treated individually.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=95)** Okay, so let's go to the JavaScript folder, and we'll open main.js.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=102)** Before we just had maybe one line here, but now we have some more code to look at.
>
> **[1:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=108)** And I know that we have these event listeners on each word, we're getting a random color and then we're setting the style.
>
> **[1:55](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=115)** Everything looks okay, so I guess we need to add a breakpoint inside this callback function that should colorize the words and see what is wrong.
>
> **[2:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=125)** So let's mouse over one of these words and get into this function.
>
> **[2:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=130)** Open up my debug pane so I can see what I'm doing here.
>
> **[2:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=135)** Here's my variable for the new color, which is set to get random color.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=139)** If I step over that, I get something that looks pretty plausible.
>
> **[2:23](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=143)** Then I'm setting the style there.
>
> **[2:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=146)** So I let this run out, open up my debugger again.
>
> **[2:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=151)** I'm going to be careful not to mouse over any of those, so as not to launch myself back into the debugger again, and let's look and see what's going on here.
>
> **[2:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=160)** Inside the header, yeah, that span tag does not have a color assigned.
>
> **[2:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=165)** So let's take a closer look here.
>
> **[2:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=167)** So we'll try it again.
>
> **[2:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=169)** This time I will mouse over the word on purpose, and I'll step into the function this time, get random color, and I'll step down.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=180)** Actually, let's set a breakpoint here where we return the color.
>
> **[3:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=184)** I'll just play it again.
>
> **[3:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=186)** So here's my color, and when we set the style.color to that new color, aha, the problem is we have the hex code here, but there's no pound sign in front of it that we need.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=201)** So we can let this run out, and we need to change this so that color is going to start with the pound sign.
>
> **[3:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=210)** We could also do it up here if we wanted to.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=214)** For some reason, we felt like this was cleaner, we could do it like that.
>
> **[3:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=217)** But I think I want this helper function to return the complete color that we can use directly when setting the style.
>
> **[3:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=225)** Okay, so let's save that and try it again.
>
> **[3:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=230)** Close these developer tools, mouse over that word.
>
> **[4:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=241)** Looks like we haven't actually refreshed the copy of the script here, so let's relaunch.
>
> **[4:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=249)** After saving this, we'll relaunch Chrome.
>
> **[4:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=257)** If I step over this, there we go.
>
> **[4:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=259)** Now we're starting to get the color with the pound sign attached.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=264)** Now the colors are starting to change.
>
> **[4:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=267)** So let me get rid of these breakpoints.
>
> **[4:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=271)** Yes, there we go.
>
> **[4:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=274)** Now it's behaving just the way we want it to.
>
> **[4:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/solution-debugging-with-an-ide?u=76281980&t=277)** So in this challenge, we configured Visual Studio Code to debug this page that we were working on so we could solve a pretty small bug, but we got to do it all in one place.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (4), this, (2)
> **Tools:** visual studio (2), firefox (1)
> **File Paths:** launch.json (1), main.js (1)
> **Env Vars:** url (2)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)
> **Prerequisites:** set up (1)

#### Debug a WordPress theme in Visual Studio Code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=0)** - [Instructor] In this video we're going to explore setting up web debugging in Visual Studio Code with Chrome.
>
> **[0:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=5)** We'll be using this example WordPress site where the site's theme has a JavaScript issue that needs to be resolved.
>
> **[0:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=11)** First, we'll take a look at what the page is doing and what we're expecting it to do.
>
> **[0:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=15)** So, we'll open up this debugging example page.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=18)** And there are links up here that let you page through the images in this gallery.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=22)** Clicking the links with the mouse works fine, but here, the keyboard can also be used.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=29)** So if I hit the right arrow key I page through the images, and if I hit the left arrow key, nothing happens.
>
> **[0:36](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=36)** So that's what we need to fix.
>
> **[0:37](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=37)** Let's get debugging configured in Visual Studio Code.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=41)** So, I'm going to open the extensions panel, and I'm going to confirm that the JavaScript debugger extension is installed and enabled.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=49)** With recent versions of Visual Studio Code it should be here already, but if you've been a user of this application for a while you might have the Chrome debugger extension, or some older version of it.
>
> **[0:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=59)** So this one is the production version, which is enabled globally as it says.
>
> **[1:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=64)** There's also a nightly version if you're using an insider build of Visual Studio Code.
>
> **[1:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=70)** But we have what we need here. I can close this.
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=74)** So, next we need to open the run and debug pane.
>
> **[1:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=78)** I'm going to click run and debug, and choose web app Chrome.
>
> **[1:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=84)** This creates a hidden.visual studio code folder in my project folder, and then creates a launch.json file with this configuration.
>
> **[1:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=94)** So, I can see that this is going to launch Chrome, and it's going to use this URL.
>
> **[1:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=99)** This is not actually the URL where our project is running.
>
> **[1:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=103)** So, I'll go back to Chrome and just copy the actual URL for this project.
>
> **[1:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=108)** And we'll paste that in like this.
>
> **[1:51](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=111)** Now I can save this.
>
> **[1:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=113)** And when I click this it's going to launch a new instance of Chrome with the debugger attached to it.
>
> **[1:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=119)** To avoid confusion, I'm going to minimize my other copy of Chrome here.
>
> **[2:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=125)** And now we have this new copy with a debugger connected to Visual Studio Code.
>
> **[2:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=131)** So, we'll load the debugging example page.
>
> **[2:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=134)** So we have our correct start point.
>
> **[2:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=136)** And now back in the project files.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=139)** First of all, I can see that I have my debugger transport up here with step over, in and out, all that kind of stuff.
>
> **[2:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=146)** And also a call stack, watch expressions, variables, all the stuff I expect with a stepwise debugger.
>
> **[2:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=154)** However, I do need a break point in a file in order to see what's going on.
>
> **[2:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=159)** So, let me open up the project files in the Explorer tab.
>
> **[2:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=164)** And in WP Content themes 2016 child and js.
>
> **[2:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=169)** Here is the keyboard image navigation file.
>
> **[2:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=173)** So, we can open this, and I can see that there's a key down event listener here.
>
> **[2:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=179)** And then I have left arrow key code and right arrow key code.
>
> **[3:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=183)** And what these are doing is directly setting the URL to whatever is in those previous and next links.
>
> **[3:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=192)** And then setting the window location directly to that URL.
>
> **[3:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=198)** So, obviously, something here is wrong.
>
> **[3:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=200)** Let's set a break point and give it a try in the browser.
>
> **[3:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=204)** And again, we want to make sure that it's the copy of Chrome that has the debugger attached.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=209)** So, if I hit a right arrow, that's the one that works.
>
> **[3:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=215)** And now these panels have started to populate.
>
> **[3:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=221)** So, I can inspect, here's the E object, which is the event.
>
> **[3:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=226)** And this is really everything that we're looking for.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=229)** I can step down and start to check these properties.
>
> **[3:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=236)** So, I can look down at the e. witch property, or I can copy this into the watch expressions.
>
> **[4:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=241)** So, I'll copy this and add a new expression.
>
> **[4:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=245)** So, the key code is 39 for the right arrow, and this is the one that works.
>
> **[4:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=249)** So as we expect everything matches, and if I step down, I should be getting the behavior that I want.
>
> **[4:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=258)** So I can step over and resume.
>
> **[4:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=262)** And back here in Chrome, I have indeed advanced to the next image.
>
> **[4:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=267)** Let's try the left arrow.
>
> **[4:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=269)** I'm hitting it and nothing's happening.
>
> **[4:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=271)** So I think the connection to the debugger must have gotten broken.
>
> **[4:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=274)** Back here in Visual Studio Code I can see that my breakpoint is an open circle.
>
> **[4:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=279)** The S code calls this an unbound breakpoint.
>
> **[4:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=281)** Usually if I just unset that and reset it that should get me back in business.
>
> **[4:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=286)** So back in Chrome, I'll hit the left arrow again, and now we can see what we're trying to see.
>
> **[4:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=293)** I have stopped on that line and as I start to step through it I can see here in my watch expression for E.Witch that the actual left arrow key code is 37 and I have 32 here.
>
> **[5:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=307)** So it's the wrong code and that must be the problem.
>
> **[5:11](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=311)** So let's change this to seven, and now I'll remove the breakpoint, cause I don't think I'll need it anymore.
>
> **[5:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=317)** And back in Chrome, we'll refresh the page.
>
> **[5:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=320)** And now when I hit left arrow I go back and right arrow goes forward.
>
> **[5:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=325)** Keyboard navigation is working again.
>
> **[5:27](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=327)** And back here in Visual Studio Code, if I hit the stop button, that will close that newly spawned instance of Chrome and I'm totally done.
>
> **[5:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=335)** So now you've seen how to configure Visual Studio Code for debugging a web application.
>
> **[5:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=340)** The JavaScript debugger extension can handle both web apps and node js.
>
> **[5:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=344)** And gives you an IDE quality experience right here, in this free open source editor.
>
> **[5:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/debug-a-wordpress-theme-in-visual-studio-code-22151336?u=76281980&t=349)** It's quite powerful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (3), this, (1), for. (1)
> **Tools:** visual studio (9)
> **Env Vars:** url (5), ide (1)
> **CLI Commands:** make (1), node (1)
> **UI Navigation:** open the (2)
> **File Paths:** launch.json (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)

#### Use a debugger as a learning tool on a live site
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=0)** - [Instructor] Up to this point, we've been using a JavaScript debugger to look for problems in code we're editing, but there's another way to employ a debugger that's also quite useful.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=8)** You can bring all the same tools to bear on a live website to learn about how it works.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=14)** Let's give that a try with this one, hansel and petal.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=16)** It's very similar to some examples that we've been using previously offline but this is the online version of it.
>
> **[0:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=22)** This is a fictitious business that we use for demonstration purposes, and this is the cart page where we can choose some flowers to buy.
>
> **[0:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=29)** So looking over the behaviors here of course we have some hover interactivity.
>
> **[0:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=33)** And as we click these, they start to populate the cart.
>
> **[0:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=38)** And for some of them we have a color selector that will change the image here.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=43)** We've got some prices.
>
> **[0:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=43)** And if we change the quantity, the totals update.
>
> **[0:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=48)** So first, let's see how this color changing is taking place.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=52)** We'll open up the developer tools.
>
> **[0:56](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=56)** Give ourselves a little more room on the page.
>
> **[1:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=61)** We'll scroll to the area of interest.
>
> **[1:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=63)** And now I'm going to use the event listener breakpoints.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=68)** And we're going to listen to the change event.
>
> **[1:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=73)** So now anytime a change event is executed anywhere on the page, we're going to break immediately.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=79)** So let's change to purple here.
>
> **[1:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=81)** And the first thing that happens is we get stuck into jQuery, which we don't actually have any interest in.
>
> **[1:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=90)** So up in the call stack, we can add that to the ignore list.
>
> **[1:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=95)** So we'll resume execution and try this again.
>
> **[1:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=100)** And now we're in improved.js.
>
> **[1:43](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=103)** If I right click this and choose reveal in sidebar, it brings me to the location of that script.
>
> **[1:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=109)** So that's handy.
>
> **[1:50](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=110)** I know exactly where that is.
>
> **[1:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=112)** And I have jQuery in the ignore list so now I won't get dropped in there.
>
> **[1:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=118)** So let's take a look at this image item.
>
> **[2:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=121)** I'm going to add a watch expression for this to make it easier to see what's happening with it.
>
> **[2:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=128)** So now we'll step down and we can see that the value that we're collecting is this, looks like it's probably a file name.
>
> **[2:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=137)** And if I mouse over this item, I can see the current value for the source of this image, is that purple calla lily.
>
> **[2:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=145)** I've just chosen pink, so my expectation is that we're going to swap it out for the pink version.
>
> **[2:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=151)** And looking at that file name it's 70 underscore purple and so forth.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=155)** And that looks a lot like the value that's being passed in here.
>
> **[2:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=159)** And so now if I step over this and resume, indeed, that gets swapped out.
>
> **[2:48](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=168)** So now I know exactly where this is happening and what it's doing.
>
> **[2:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=173)** Let's check out the quantity updater.
>
> **[2:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=177)** This time I'm going to disable the change event.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=180)** And because this is changed via keyboard, we'll use a keyboard key up event and we'll change this to let's just order tons of them.
>
> **[3:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=190)** Let's order a hundred flowers.
>
> **[3:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=193)** And that takes me into the same JavaScript file, but now the correct key up listener that handles all of these quantity updaters.
>
> **[3:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=202)** And so anytime we have a key up event that isn't for return or enter, that's what key code 13 is, I looked it up.
>
> **[3:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=210)** We're going to run this calc totals function.
>
> **[3:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=214)** So let's step down to that and step in to look at it.
>
> **[3:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=219)** And as we start to step down through this, I can see that for each of these quantity fields that are enabled on the page, we're going to take some actions.
>
> **[3:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=229)** I don't see this BAB cost variable.
>
> **[3:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=232)** It must be in the scope above local.
>
> **[3:57](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=237)** There it is.
>
> **[3:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=239)** So now we've set a formatted price for this.
>
> **[4:03](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=243)** The totals will get updated with what we have so far.
>
> **[4:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=250)** And if I mouse over these, some of these are elements selected on the page, and in the little popup I can mouse over the item to see its equivalent element highlighted on the page.
>
> **[4:24](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=264)** That's pretty slick.
>
> **[4:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=269)** So now we understand how that quantity updater works.
>
> **[4:33](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=273)** Let's check out one more little thing.
>
> **[4:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=278)** Usually styling is handled by css, but a lot of times there are classes added and the addition or removal of classes is typically handled by JavaScript.
>
> **[4:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=289)** So now I can right click this and choose inspect to open the elements inspector, and I can watch these items as I click, and I can see that this selected element is added by JavaScript.
>
> **[5:05](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=305)** And also there's an after pseudo selector here, that adds the check mark from this sprite image.
>
> **[5:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=315)** So this is all quite informative.
>
> **[5:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=317)** If you want to take apart a website and see how it's built visually and functionally, the combination of that debugger, the sources inspector, and the elements inspector can get you pretty much everything you need to know.
>
> **[5:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=330)** In more complicated web applications, JavaScript files will often be midified and even obfuscated making them challenging and sometimes almost impossible to read.
>
> **[5:38](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=338)** So you won't always be able to reveal all the inner workings using these tools.
>
> **[5:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=342)** But the debugger is a really good starting place.
>
> **[5:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/use-a-debugger-as-a-learning-tool-on-a-live-site-22149297?u=76281980&t=345)** Being able to use a debugger in this way for self-education is very handy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (2), function (1), this. (1), self (1)
> **Code Identifiers:** jquery (2)
> **Definitions:** is a  (2)
> **File Paths:** improved.js (1)
> **CLI Commands:** make (1)
> **Env Vars:** bab (1)
> **UI Navigation:** open the (1)
> **Analogies:** similar to (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=0)** - [Instructor] Now that you have a richer understanding of how to debug JavaScript, you might want to explore some other related parts of the library.
>
> **[0:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=7)** The selection of courses is ever expanding.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=9)** And of course, nearly anything you're interested in is likely just a search away.
>
> **[0:12](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=12)** But I do have a few recommendations.
>
> **[0:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=14)** Both for courses and for books.
>
> **[0:16](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=16)** First up, a few courses.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=18)** Learning chrome web developer tools.
>
> **[0:20](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=20)** Is a course that will tell you much more about the huge variety of tools that are available in Chrome's web developer tools.
>
> **[0:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=26)** We mostly looked at the debugger and a little bit at the element inspector.
>
> **[0:30](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=30)** But there's a whole bunch of tools in there that are worth learning.
>
> **[0:34](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=34)** [[JavaScript Essential Training]] and Node dot JS essential training are comprehensive courses that will take you through JavaScript, in general.
>
> **[0:41](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=41)** And then Node dot JS development.
>
> **[0:44](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=44)** And then finally, there's my own course, React for web designers.
>
> **[0:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=47)** If you're interested in getting started with React, it's a great way to start to dip your toes in the water and see how it works.
>
> **[0:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=53)** For books, you could start with the You Don't Know JavaScript series by Kyle Simpson.
>
> **[0:58](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=58)** He also has some videos in the library that you can check out.
>
> **[1:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=61)** He's one of my favorite authors on JavaScript.
>
> **[1:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=64)** His writing is very technical but also very approachable.
>
> **[1:07](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=67)** Eloquent JavaScript by Marijn Haverbeke is a great introduction to JavaScript as a whole.
>
> **[1:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=73)** It's not quite as technical.
>
> **[1:14](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=74)** But it is an excellent book for learning JavaScript.
>
> **[1:17](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=77)** And then finally, there's a whole series of books in the Exploring JavaScript series, including Exploring ES6 and many more by Dr. Axel Rauschmeyer.
>
> **[1:26](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=86)** His books are, kind of like, a specification, but written in a more readable fashion.
>
> **[1:31](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=91)** So they're very technical.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=92)** But if you're looking to find out, let's say, the spread operator means and how to use it, in all the different ways you can use it in ES6.
>
> **[1:40](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=100)** Our other pieces of more advanced in newer JavaScript, I couldn't recommend these books more.
>
> **[1:45](https://www.linkedin.com/learning/learning-javascript-debugging-2/next-steps?u=76281980&t=105)** So there are a few options for courses and books to check out to learn more about JavaScript and debugging, in general.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), find (1)
> **Code Keywords:** finally, (2), let (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** es6 (2)
> **Documentation:** specification (1)
> **Analogies:** kind of like (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Extra JavaScript resources
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=0)** - [Joe] Having explored JavaScript debugging, you may be wondering what a possible next step would be in your learning journey.
>
> **[0:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=6)** Let's look at a couple possibilities.
>
> **[0:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=8)** First up is version control.
>
> **[0:09](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=9)** Version control software lets developers keep track of our work over time.
>
> **[0:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=15)** The way I like to think of this is it lets you experiment fearlessly.
>
> **[0:18](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=18)** If you have version control backing you up, you always know that you can try new things and not have to worry about breaking something because you can always go back.
>
> **[0:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=25)** It's kind of like undo and redo on a larger scale.
>
> **[0:28](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=28)** Some examples of version control software are Git, which is definitely the most popular right now, but also Mercurial, which is abbreviated as Hg, and Subversion, which has been around for a long time.
>
> **[0:39](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=39)** These tools keep getting easier to use, both the command line tools themselves and a whole bunch of graphical UIs that are built on top of them.
>
> **[0:46](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=46)** We have a lot of courses on version control in the library.
>
> **[0:49](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=49)** Here are a few examples you might look into.
>
> **[0:52](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=52)** First is Version Control for Everyone, which is a course of mine that explores version control as applied to things that are not strictly just programming.
>
> **[1:01](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=61)** GitHub for Web Designers is a great introduction to GitHub for web designers.
>
> **[1:06](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=66)** [[Learning Git and GitHub]] is more general.
>
> **[1:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=68)** GitHub is the most popular service for working with version control pretty much all over the world, so between GitHub for Web Designers and [[Learning Git and GitHub]], you should be covered in terms of how to use it.
>
> **[1:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=79)** And then Learning Software Version Control is a more general course that helps you apply these concepts more generally.
>
> **[1:25](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=85)** Next up, I'd recommend you look at test-driven development.
>
> **[1:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=89)** This is a different way of working than you might be used to.
>
> **[1:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=92)** With TDD, you describe how a feature should work in simple code, usually something very small, and you do that before you've written any of the code implementing that feature.
>
> **[1:42](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=102)** A typical project will have lots and lots of tests for all the things that a site or an application is supposed to do.
>
> **[1:47](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=107)** So for example, a test might be when I click the Add to Cart button, one instance of a selected item should be added to the cart.
>
> **[1:54](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=114)** And then after I've written the test, then I write the code that implements the feature.
>
> **[1:59](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=119)** Tests either pass or fail, and the goal is to get all of your tests to pass and to keep them that way.
>
> **[2:04](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=124)** Tests should be rerun automatically whenever new code is added.
>
> **[2:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=128)** Approaching a project this way really helps avoid regressions, meaning parts of the site or code base breaking without anybody noticing.
>
> **[2:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=135)** TDD can be applied just to code or to the appearance of a website.
>
> **[2:19](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=139)** Here are some of the tools available for working in this fashion.
>
> **[2:22](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=142)** For writing tests, when we're working with JavaScript, we have Jasmine, Jest, Mocha, QUnit, and many others.
>
> **[2:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=149)** Once you've described the tests, you need a tool to run them.
>
> **[2:32](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=152)** Most people are using Karma these days.
>
> **[2:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=155)** For end to end testing, which is more feature-based, where you might be interacting with a website, not just the JavaScript, there are many, many tools available here as well, including Headless Chrome, Puppeteer, and Nightmare, which all basically work with the Chrome web engine, only there's no user interface applied.
>
> **[2:53](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=173)** This makes it much faster to run and execute your tests, and it basically gives you a programmable web browser.
>
> **[3:00](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=180)** Some other tools that don't necessarily work with Chrome but work with other browsers as well are PhantomJS and Selenium and WebDriver.
>
> **[3:08](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=188)** All of these tools are worth exploring.
>
> **[3:10](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=190)** There are many courses on test-driven development in the library as well.
>
> **[3:13](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=193)** Here are a couple of examples.
>
> **[3:15](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=195)** Test-Driven Development with Node.js will show you how to work with all these tools in a JavaScript context for writing Node apps.
>
> **[3:21](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=201)** And then [[Programming Foundations- Test-Driven Development]] will explore all of these concepts in a more general fashion that you can apply to any programming language.
>
> **[3:29](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=209)** So those are a couple of options for where you can look next, version control and test-driven development.
>
> **[3:35](https://www.linkedin.com/learning/learning-javascript-debugging-2/extra-javascript-resources?u=76281980&t=215)** Go check them out.

> [!info]- Semantic Content
>
> **Tools:** github (6), command line (1)
> **CLI Commands:** git (3), node (2)
> **Code Keywords:** pass (2), let (1), implements (1), interface (1)
> **Definitions:** is a  (4)
> **Env Vars:** tdd (2)
> **Analogies:** kind of like (1), for example (1)
> **File Paths:** node.js (1)
> **Speakers:** - [joe] (1)


## Path Context

### In [[Advance Your JavaScript Skills]]
← [[Foundational JavaScript Security]] | **8 of 10** | [[End-to-End JavaScript Testing with Cypress.io]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript
- [[Javascript Best Practices For Code Formatting]] — JavaScript

---

[↑ Back to top](#)