---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-ecmascript-6-plus-es6-plus
url: "https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus"
duration_minutes: 87
duration: 1h 27m
level: Intermediate
updated: 4/11/2025
learners: 400716
skills:
  - JavaScript
  - ECMAScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEbJyxmzaY-ZA/learning-public-crop_675_1200/B4EZX4YHdPGYAk-/0/1743628826778?e=2147483647&amp;v=beta&amp;t=OrblxegD5XwDLlT3IMkO1ieZ6soW0C0J3gFtb_r5mtE"
linkedin_topic: Web Development
learning_paths:
  - '[[Become a Full-Stack Web Developer]]'
  - '[[Become a JavaScript Developer]]'
prev_courses:
  - '[[Search Techniques for Web Developers]]'
  - '[[Learning The Javascript Language]]'
next_courses:
  - '[[Git Essential Training]]'
  - '[[JavaScript- Scope]]'
path_nav: '[{"path":"Become a Full-Stack Web Developer","position":5,"total":12,"prev":"Search Techniques for Web Developers","next":"Git Essential Training"},{"path":"Become a JavaScript Developer","position":3,"total":13,"prev":"Learning The Javascript Language","next":"JavaScript- Scope"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/network-and-system-administration
  - topic/software-development
  - skill/javascript
  - skill/ecmascript
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Learning%20ECMAScript%206%2B%20(ES6%2B).md)

![Learning ECMAScript 6+ (ES6+)](https://media.licdn.com/dms/image/v2/D4E0DAQEbJyxmzaY-ZA/learning-public-crop_675_1200/B4EZX4YHdPGYAk-/0/1743628826778?e=2147483647&amp;v=beta&amp;t=OrblxegD5XwDLlT3IMkO1ieZ6soW0C0J3gFtb_r5mtE)

# Learning ECMAScript 6+ (ES6+)

> ECMAScript—the standardized version of JavaScript—keeps getting more powerful. ES6 was a large leap forward, introducing features that changed how developers structure programs. But every year since there have been updates and additional improvements. This course helps you create modern JavaScript applications leveraging the most interesting and useful features in ES6+. Eve Porcello introduces the

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus) | 1h 27m | Intermediate | 401K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Using modern JavaScript today](#using-modern-javascript-today)
  - [What you should know before watching this course](#what-you-should-know-before-watching-this-course)
  - [How to use CoderPad](#how-to-use-coderpad)
- [**1. What Is ECMAScript?**](#1-what-is-ecmascript) (3 videos)
  - [What is ECMAScript?](#what-is-ecmascript)
  - [Staying up to date with new releases](#staying-up-to-date-with-new-releases)
  - [Understanding browser support](#understanding-browser-support)
- [**2. ECMAScript Variables and Data Structures**](#2-ecmascript-variables-and-data-structures) (8 videos)
  - [Using the let keyword](#using-the-let-keyword)
  - [Working with the const keyword](#working-with-the-const-keyword)
  - [Writing template strings](#writing-template-strings)
  - [Searching strings](#searching-strings)
  - [Using symbols](#using-symbols)
  - [Writing maps](#writing-maps)
  - [Working with sets](#working-with-sets)
  - [Solution: Building a user processor function](#solution-building-a-user-processor-function)
- [**3. Arrays and Array Methods**](#3-arrays-and-array-methods) (4 videos)
  - [Using the array spread operator](#using-the-array-spread-operator)
  - [Destructuring arrays](#destructuring-arrays)
  - [Searching arrays with the .includes function](#searching-arrays-with-the-includes-function)
  - [Solution: Implementing a Smart Array processor](#solution-implementing-a-smart-array-processor)
- [**4. ECMAScript Objects**](#4-ecmascript-objects) (8 videos)
  - [Enhancing object literals](#enhancing-object-literals)
  - [Creating objects with the spread operator](#creating-objects-with-the-spread-operator)
  - [Destructuring objects](#destructuring-objects)
  - [Iterating with the for/of loop](#iterating-with-the-forof-loop)
  - [Introducing classes](#introducing-classes)
  - [Inheritance with JavaScript classes](#inheritance-with-javascript-classes)
  - [Getting and setting class values](#getting-and-setting-class-values)
  - [Solution: Building a product object](#solution-building-a-product-object)
- [**5. ECMAScript Functions**](#5-ecmascript-functions) (6 videos)
  - [Using the string.repeat function](#using-the-stringrepeat-function)
  - [Setting default function parameters](#setting-default-function-parameters)
  - [Writing arrow functions](#writing-arrow-functions)
  - [Understanding this in arrow functions](#understanding-this-in-arrow-functions)
  - [Working with generators](#working-with-generators)
  - [Solution: Implementing advanced function patterns](#solution-implementing-advanced-function-patterns)
- [**6. Asynchronous JavaScript**](#6-asynchronous-javascript) (6 videos)
  - [Building promises](#building-promises)
  - [Loading remote data with promises](#loading-remote-data-with-promises)
  - [Returning promises with fetch](#returning-promises-with-fetch)
  - [Using async/await syntax](#using-asyncawait-syntax)
  - [Incorporating fetch with async/await](#incorporating-fetch-with-asyncawait)
  - [Solution: Building an async data handler](#solution-building-an-async-data-handler)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using modern JavaScript today](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=5)** - [Eve] [[JavaScript]] is more popular than ever and it's usually the go to for building web applications.
>
> **[0:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=12)** As the web changes though, JavaScript is changing too.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=16)** That doesn't mean we have to get rid of our old knowledge and start over again.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=20)** But on the contrary, it means that new features are being added all the time to make our jobs as developers easier and more efficient.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=29)** My name is Eve Porcello.
>
> **[0:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=31)** I'm a software developer and a teacher.
>
> **[0:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=33)** When I started to program years ago, JavaScript was really one of the first languages that I reached for.
>
> **[0:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=39)** I use it for almost everything and I love to check out the new features that can help save me time and write better code.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=47)** In this course we'll get into [[ECMAScript]].
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=49)** What it is, how to use it, and we'll cover a ton of features to help you work more effectively with objects, arrays, functions, and classes as you build your own apps.
>
> **[1:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=60)** There's a lot of fun stuff here that will work in almost every browser today.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=65)** So let's take a look.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[ECMAScript]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [eve] (1)
> **Non-Speech:** (electronic music) (1)

#### [What you should know before watching this course](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Narrator] Before we begin this course, there are a few things you might want to have in place before we get started.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=5)** So a few things to know, this course does assume a little bit of knowledge of [[HTML]], a tiny bit of knowledge about CSS, and then some information about [[JavaScript]].
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=16)** So if you know basics like strings, numbers, arrays, objects or functions or at least you've seen these things, you should have everything you need to get started.
>
> **[0:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=25)** We're also going to be using a code editor of some sort in this class, you can pick whatever you want.
>
> **[0:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=31)** I'll be using VS Code and then you'll just need a browser.
>
> **[0:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=34)** So I'm going to use Chrome throughout the course.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=37)** That's really it.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=38)** That's all you should need to get started with these new features of JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[HTML]] (1)
> **Env Vars:** html (1), css (1)
> **Tools:** vs code (1)
> **Speakers:** - [narrator] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=8)** Each challenge includes instructions, and a couple of code editors that you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=16)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=24)** We recommend using a desktop browser for the best experience with the code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=33)** The code challenge has four areas.
>
> **[0:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=35)** We have instructions here on the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=46)** And a console for output in the bottom left.
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=49)** You can use these drag handles to allocate space as you'd like.
>
> **[0:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=54)** And to get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=62)** Each challenge has instructions that include a description, as well as the parameters and the expected results.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=72)** So once I've read through the code challenge, I can go ahead and start to write my answer.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=77)** We create our answer in the top right code editor.
>
> **[1:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=82)** And there are comments in the starting code showing where to put our solution.
>
> **[1:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=87)** So here, I can take in this pets array and I can create a new function called byCategory.
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=94)** byCategory is going to take in a category and then we're going to check to see, does the pet exist?
>
> **[1:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=104)** If so, let's compare the pet category with the category.
>
> **[1:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=111)** Then we're going to return pets.filter, and we'll call byCategory, cat.length.
>
> **[2:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=121)** So this is a function that's just going to count all of our cats.
>
> **[2:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=127)** And it's going to take a look at all of this data to just grab the cats.
>
> **[2:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=131)** No dogs, no rabbits, no anything else.
>
> **[2:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=135)** When you click test my code, you'll see a message indicating whether your code returned a correct result.
>
> **[2:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=141)** If your code isn't successful, you can ask for help.
>
> **[2:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=144)** So we can set show expected result to true.
>
> **[2:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=151)** So that's going to show us the expected result.
>
> **[2:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=154)** We can also turn on hints by setting that to true.
>
> **[2:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=157)** And that's going to return some various hints, so that my path to finding the right answer is a little easier.
>
> **[2:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=165)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=171)** If any messages are too long to fit in that area, you can always scroll sideways to see all of the text.
>
> **[2:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=178)** When you've finished each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** bycategory (3)
> **Definitions:** is a  (2)
> **CLI Commands:** cat (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. What Is ECMAScript?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is ECMAScript?](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=0)** - [Instructor] A discussion of what [[ECMAScript]] is should start with a quick recap of the history of ECMAScript in general.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=5)** In 1995, [[JavaScript]] was created by Brendon Eich at Netscape, and then was adopted by [[Microsoft]] as JScript.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=13)** With different versions of a language for different browsers, there was soon a need to standardize the language.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=20)** Enter the ECMA, E-C-M-A, or the European Computer Manufacturers Association is the governing body that provides the ECMAScript specifications for JavaScript browser implementations, and many other computer governance projects.
>
> **[0:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=35)** The people who are on the ECMAScript committee work at companies that make browsers, companies that use a lot of JavaScript, or are JavaScript community members.
>
> **[0:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=45)** Shortly after its foundation, the ECMAScript 1 spec was released in 1997.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=50)** Following this, ECMAScript 2 and ECMAScript 3 came out really quickly.
>
> **[0:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=55)** ECMAScript 4 was a hotly contested one.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=59)** It was argued about, and then really never came out.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=62)** So this was eclipsed by ECMAScript 5 in 2009.
>
> **[1:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=66)** This one gave us array methods that we rely on like for each, map, and filter.
>
> **[1:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=73)** The last kind of huge release of features was an official spec for ECMAScript 6, sometimes known as ECMAScript 2015.
>
> **[1:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=81)** Since then, it's been a little different.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=83)** Instead of numbered versions, features come out by year.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=86)** So every single year we'll see new features being released, and those are attached to the year.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=93)** It's all just JavaScript though, and every time new things come out, it doesn't change what's already part of JavaScript, it just gives us as developers more tools to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ECMAScript]] (11), [[JavaScript]] (6), [[Microsoft]] (1)
> **Documentation:** spec (2)
> **CLI Commands:** make (1)
> **Env Vars:** ecma (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Staying up to date with new releases](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=1)** - [Instructor] In the previous video, we talked about the [[ECMAScript]] Committee as kind of this shadowy, vague concept.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=7)** It's this nebulous group of people that does something related to [[JavaScript]].
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=13)** But it's not a secret what they're up to.
>
> **[0:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=15)** So you can stay on top of what this committee is up to by going to the repo.
>
> **[0:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=22)** So you can use this repo [github.com/tc39](https://github.com/tc39).
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=27)** In it, you're going to see all of the different proposals that are part of the ECMAScript process.
>
> **[0:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=33)** So you can see what stage they're in and you can actually click on them to access all the code.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=38)** So if you're wondering how a certain feature is put together, you can take a look.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=44)** You also can click on ecma262 and that will give you information about contributing and all the different proposals and their stages as well.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=53)** So do you have to monitor this repo very closely and memorize all this stuff?
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=58)** Absolutely not.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=59)** But if you do want to look at what's coming to the language, you can do so here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ECMAScript]] (2), [[JavaScript]] (1), [[GitHub]] (1)
> **Cross-References:** previous video (1), we talked about (1)
> **UI Navigation:** click on (2)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Understanding browser support](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-browser-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-browser-support?u=76281980&t=0)** - [Instructor] When the [[ECMAScript]] Committee approves new features, companies that make web browsers have new guidelines for how to use [[JavaScript]], but that doesn't necessarily mean that a magic wand is waved, and all these browsers automatically support that feature.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-browser-support?u=76281980&t=14)** Something that can help you if you're trying to explore some of the newer corners of the ECMAScript ecosystem is this compatibility table right here.
>
> **[0:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-browser-support?u=76281980&t=24)** So this on the sixth tab will show us a lot of the things that we're using today.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-browser-support?u=76281980&t=30)** This will show that most of these things are already natively supported by the browser, but as you click into ESNext, you'll see that these new-new features are in various stages of support, and you may need to polyfill or use compilers to make this work appropriately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ECMAScript]] (2), [[JavaScript]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)


### 2. ECMAScript Variables and Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the let keyword](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=0)** - [Instructor] In earlier versions of [[JavaScript]], there was only one way to create a variable, and that was to use the var keyword.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=7)** So I have an [[HTML]] document set up here.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=10)** I have added a script tag, and I'm just going to place some JavaScript code directly there in the script tag.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=16)** So I'm going to create a variable called topic, set it equal to JavaScript, and log it.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=21)** Now, inside of the script tag, using this topic variable, I'm going to go ahead and create a loop.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=27)** So if the topic exists, we're going to reset the value of this topic to [[ECMAScript]].
>
> **[0:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=35)** And then we're going to try to look at the value of this topic inside of the block.
>
> **[0:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=40)** And then outside of the block, it's called the global, so we'll try to log that value too.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=46)** So you might think that because we're inside of a loop, because we're inside of a block scope, we haven't changed the global, and the truth is we have.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=58)** We have reset the value of topic here on line 12, and we've overwritten the value.
>
> **[1:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=63)** So instead of var topic, we're going to say let topic and set that equal to ECMAScript.
>
> **[1:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=68)** Notice now that the topic has block scope.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=70)** In other words, inside of this if statement, the value of topic is ECMAScript.
>
> **[1:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=75)** Outside of the block in the global scope, it's JavaScript.
>
> **[1:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=79)** Let's extend this a little bit, and we're going to create some elements on the page.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=83)** So we're going to create some dom elements using JavaScript.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=86)** So we'll create a variable called div, and then we'll create one called box that will be equal to document.getElementById box, so we're going to select that element.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=96)** Now, inside of our HTML, we want to create a div with an ID of box, so that that can be selected.
>
> **[1:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=103)** Now we're going to create a loop.
>
> **[1:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=105)** And this for loop, we're going to use to create a bunch of divs.
>
> **[1:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=110)** So we're going to create five different div elements, and we're going to add them to the dom.
>
> **[1:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=116)** So for var, i equals zero, i is less than five, so whenever i is less than five, we want to keep iterating through the array.
>
> **[2:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=124)** And then i plus plus, meaning we want to increment the value of i every time we iterate through this loop.
>
> **[2:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=132)** All right, so here on line 14, we're going to set the div equal to document.createElement div.
>
> **[2:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=138)** We also want to add an on click handler to our div, so we'll set this equal to a function.
>
> **[2:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=145)** Every time we click on one of these div elements, we want to capture the value of i, so we want to take a look at whatever the value of i is for this particular box.
>
> **[2:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=156)** And then finally, we want to make sure that the divs are appended to our box element.
>
> **[2:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=162)** So there we go.
>
> **[2:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=164)** So the next thing I want to do is let me close the console really quick.
>
> **[2:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=167)** I want to add some style, because we aren't seeing these elements appear yet.
>
> **[2:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=172)** So we can go ahead and add a selector for box.
>
> **[2:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=176)** Just for the sake of looking halfway decent, we're going to add some flex box, and we're going to justify the content with space around.
>
> **[3:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=186)** So there's a little bit of space around each of these elements.
>
> **[3:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=189)** We then are going to create a selector for the box divs, giving them a height, a width, and a background color.
>
> **[3:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=198)** Okay, so now if we refresh this, we should see those purple boxes appearing, and remember, I have that on click handler and I want to see what the value of i is every time I click one of these boxes.
>
> **[3:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=212)** So if I click on the third one here, it says five, five.
>
> **[3:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=216)** All of them are saying five, which is not what we want.
>
> **[3:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=219)** We want to know the right index for each of these elements.
>
> **[3:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=223)** So the way that I can fix this is fairly straightforward.
>
> **[3:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=226)** I can just replace var with let inside of the loop.
>
> **[3:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=231)** And now we're capturing the correct elements when we click on each one of these boxes.
>
> **[3:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=236)** So this is pretty cool.
>
> **[3:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=237)** Let is helping us enforce block scoping in JavaScript, which isn't something that existed before this keyword existed without having to do a lot of workarounds and scoping protection to make that possible.
>
> **[4:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=252)** Let will make that possible right out of the box.
>
> **[4:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=255)** No pun intended.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (6), [[ECMAScript]] (3), [[HTML]] (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (3)
> **Code Identifiers:** getelementbyid (1), createelement (1)
> **Env Vars:** html (2)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Working with the const keyword](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=0)** - [Instructor] In addition to let, there's another way to create a variable with [[JavaScript]], and that's to create a constant.
>
> **[0:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=6)** So we can use the const keyword, just like we use the var keyword to create a variable that cannot be reset.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=13)** But before we get to it, let's look at how we might reset the value of a variable using var.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=21)** On line nine, we'll create a variable called pizza, and we'll set it equal to true.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=27)** On the next line, we'll reset the value of pizza to false, and then we'll console log it.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=32)** Not surprisingly, when we try to log this, it's going to reset the value of pizza to false.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=37)** So by the time we hit the console message, pizza is false.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=42)** Now, this makes sense in this context, but it's really a little scary.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=46)** Consider this file was 100 lines long, and I didn't see that pizza's value was reset later in the file.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=53)** I would just reset the value without seeing any sort of warning.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=58)** This is where the const keyword comes into play.
>
> **[1:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=61)** Let's see what happens when I change the var keyword to const.
>
> **[1:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=66)** So here on line nine, I'm going to replace it, and as soon as I try to run this again, we're going to see an error.
>
> **[1:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=74)** It says there's an uncaught TypeError where there's an assignment to a constant variable.
>
> **[1:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=79)** We are not allowed to do this.
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=80)** We can't reset the value, and it's automatically going to throw an error.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=86)** So this can be a nice little safeguard, a bit of peace of mind when you're dealing with variables.
>
> **[1:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=92)** Sometimes our files are very long, sometimes different JavaScript files rely on each other in different places.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=100)** So this can help you deal with making sure that your variables are not being reset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Writing template strings](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=0)** - [Instructor] Another powerful feature of [[JavaScript]] that you can use are template strings.
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=4)** Template strings or template literals allow you to tap into the functionality of template languages to format your JavaScript code with variables.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=13)** So the first thing I want to do here to get us started is I want to clean up our file a little bit.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=20)** I'm kind of tired of writing our JavaScript here in the script tag, so I want to link to a file called script.js.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=28)** And this is just an empty JavaScript file that is in the same directory as our index file.
>
> **[0:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=35)** And this will just allow us to contain all of our JavaScript code in one place, making it a little easier to read.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=42)** So here on line one, I'm going to create a function called print.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=46)** The print function is going to take in an argument called first name.
>
> **[0:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=51)** Then it's going to return a string of hello, which will be concatenated with the value of first name.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=58)** So we'll use a comma as our concatenation operator here, then we can call the print function, and we'll just send it a string, or send it a first name Isabelle.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=70)** Now, if I take a look at this in our console, we're going to see that this is being logged appropriately, pretty cool.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=77)** You may also have seen a plus sign used as a concatenation operator.
>
> **[1:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=82)** So the only thing to know about that is it doesn't automatically add the space, so you have to do so in the string.
>
> **[1:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=90)** But here's where template strings come into play.
>
> **[1:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=92)** What I'm going to do is I'm going to, instead of using these double quotes, I'm going to use back ticks around the entire string.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=100)** So these back ticks, they're little ticks that you can see in the upper left hand corner of your keyboard.
>
> **[1:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=107)** We're going to use that to wrap around the entire string, and then any variables we're going to surround with a dollar sign and two curly braces.
>
> **[1:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=115)** So let me see if this runs, it does, and then I can swap out the name to make sure that it's working correctly, and it looks like it is.
>
> **[2:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=124)** So let's extend this a little bit, and I'm going to create another function called create email.
>
> **[2:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=129)** So create email is going to create for us this kind of confirmation email for a purchase, create email takes in first name and price.
>
> **[2:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=140)** We also will establish a price for shipping, which will be 5.95, and then we're going to have a slightly longer console message here.
>
> **[2:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=149)** So we're going to create a template string again, we'll use those back ticks.
>
> **[2:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=153)** We'll surround our first name with the template.
>
> **[2:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=157)** The template string is also going to recognize any spacing, so we can add line breaks like we've done here for our total.
>
> **[2:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=165)** We can add another line break for shipping.
>
> **[2:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=168)** And when we call the creating malfunction and we send it a name and a price, we're going to see that added to the template.
>
> **[2:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=179)** Now, another kind of cool thing we can do is we could add a line called grand total.
>
> **[3:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=183)** Grand total will be the total of the price, and the shipping price to create this grand total.
>
> **[3:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=189)** So inside of the template, it's going to recognize any addition operators, so we're going to add together the price and the shipping, and we'll see that added to the template.
>
> **[3:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=200)** Finally, let's add some dollar signs here.
>
> **[3:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=202)** So we see the dollar signs as part of the template, but we also want dollar signs to be printed right before that template begins just to make it look like we're using some currency here.
>
> **[3:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=213)** So there we go, we've added those to the template.
>
> **[3:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=218)** Awesome, so our variables are appearing in the correct spots.
>
> **[3:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=221)** We're doing some simple calculations, and our templates string recognizes all of the spacing without any special formatting characters for new lines.
>
> **[3:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=230)** So there we go, we've created our first template string.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5)
> **Exercise Files:** template (15)
> **CLI Commands:** make (2)
> **File Paths:** script.js (1)
> **Versions:** 5.95 (1)
> **Speakers:** - [instructor] (1)

#### [Searching strings](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=1)** - [Instructor] There are a few built in utilities that are part of [[JavaScript]] that can help us complete common tasks like searching strings.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=8)** Let's take a look at how a few of these might work.
>
> **[0:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=11)** All right so we're going to create a variable here called planet, which will be set to earth.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=16)** And then we'll use one of these methods called startsWith.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=20)** So console log planet.startsWith Ear.
>
> **[0:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=23)** We're going to make sure that planet, this variable starts with those letters, E-A-R.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=30)** If that's true, it's going to return true.
>
> **[0:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=33)** If false, it'll return false.
>
> **[0:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=35)** So do note that this is case sensitive.
>
> **[0:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=39)** So if you say lowercase E, you're going to see that it's false.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=44)** We can also use endsWith to search a string.
>
> **[0:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=48)** So we can use endsWith, and it looks like that's true.
>
> **[0:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=52)** If I replace this with an S, it will be non-true.
>
> **[0:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=57)** If you're ever in a situation where you want to search within a string, you can use .includes.
>
> **[1:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=63)** So we can say planet.includes h.
>
> **[1:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=66)** And this will evaluate to true because there's an H in this string.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=72)** Let's try it again but this time we're going to say Earth1.
>
> **[1:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=75)** It's going to search for the first Earth.
>
> **[1:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=79)** When I click refresh on that we see false because even though it is a partial match, there is something that's incorrect there.
>
> **[1:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=87)** Finally we can add the planet .includes art.
>
> **[1:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=91)** Art is in the middle of earth there, so we can go ahead and click refresh.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=95)** And we see that that's true.
>
> **[1:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=97)** All right finally, we have a method called search.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=100)** When we use search, we'll identify the index or the location in the string of the phrase I'm searching for.
>
> **[1:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=109)** So for example, if I search for art like I did with includes, this is going to tell me where in the string art shows up.
>
> **[1:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=117)** So it starts at position one.
>
> **[2:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=120)** Keep in mind that this will find the first instance of the search string art, even if it's present more than one.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=128)** So there you go, four different array methods.
>
> **[2:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=130)** StartsWith, endsWith, includes and search.
>
> **[2:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=134)** All of which will help us evaluate the contents of strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** endswith (3), startswith (2)
> **CLI Commands:** make (1), find (1)
> **Warnings:** note that (1), keep in mind (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using symbols](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=1)** - [Instructor] At the core of all of our [[JavaScript]] applications are primitives.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=5)** Primitives in JavaScript are types like numbers, strings, arrays, objects, and more.
>
> **[0:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=12)** Symbols are a new primitive type in JavaScript that were given to us with ES6.
>
> **[0:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=18)** Symbols are primarily used as unique IDs.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=21)** What's nice about them is that they're not going to conflict with object string keys.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=26)** So we create a symbol by using a factory function.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=30)** In other words, we're going to call a function to create this symbol.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=37)** So we're going to create an ID equal to symbol.
>
> **[0:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=41)** Then I'm going to create an object with a couple different keys.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=44)** So we'll have one for title and then inside of the topics array, we'll just have some topics related to JavaScript.
>
> **[0:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=55)** Strings, arrays, objects.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=62)** The next thing I want to do is let's just console log our course info.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=67)** We'll take a look at that in our console and we should see the title and the topics are there.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=72)** Now right before that course info console log, what I want to do is I want to set the ID of course info to this number.
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=80)** I want to give it a unique identifier.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=83)** This is going to be saved here as a symbol.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=86)** So if I console log that I should see it.
>
> **[1:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=90)** What happens if another developer comes through and adds in an ID field to the course info object?
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=96)** The ID will be JavaScript course.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=99)** Now if I try to log course info again, we're going to see that ID has been added.
>
> **[1:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=107)** But even though I've added an ID as a symbol, there's no naming conflict.
>
> **[1:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=112)** So this is one possible reason to use a symbol if you want to capture a unique identifier and associate that with an object, make it a symbol and you'll never get into naming conflicts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Writing maps](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=0)** - [Instructor] The map object holds key value pairs.
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=4)** So what's the difference between a map and an object?
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=7)** In a map, any value, both objects and primitive values may be used either as a key or a value.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=14)** So let's take a look at what these maps look like.
>
> **[0:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=18)** Here on line one, I'm going to say, let course equals new map and we'll call that map constructor.
>
> **[0:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=25)** Maps then have these methods on them called set so we can set values.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=30)** So the key would be [[React.js|react]] and the value would be description ui, so that object.
>
> **[0:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=36)** So then we can say course.set jest, and we'll give that one an object description as well.
>
> **[0:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=43)** Jest is all about testing.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=47)** So once I hit save on that, I want to console log it.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=53)** Let's console log first, the course, then we'll console log course.react.
>
> **[1:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=64)** Now, if I try to run this in the browser, we'll see the map being logged, but course.react, we're not seeing anything there.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=72)** And that's because a map is different than an object, so we can't access the keys with dot notation.
>
> **[1:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=79)** Instead what we'll do is we'll use this method called get.
>
> **[1:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=84)** So I can say course.get react, and then I should be able to see the value, so description ui.
>
> **[1:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=91)** An important thing about maps is that keys can be any type.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=95)** So let's go ahead and create another one of these maps.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=99)** This time we're just going to send the values directly into the constructor versus using those set functions.
>
> **[1:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=108)** So the first entry in this map, the key is going to be new date.
>
> **[1:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=113)** Why not?
>
> **[1:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=114)** The key will be a dynamic new date and then the value will be a string called today.
>
> **[2:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=121)** The second one here, we'll use two.
>
> **[2:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=123)** We'll use a [[JavaScript]] number as our key.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=128)** Then we can set the value to this object that has a nested array inside of it.
>
> **[2:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=137)** We'll just use a traditional string here for this key.
>
> **[2:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=140)** And we should see that all of that is being logged appropriately.
>
> **[2:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=146)** Another little utility we can use with maps is if you ever want to see how many entries are in this map, you can use dot size.
>
> **[2:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=154)** So details.size will give you three, which is the number of items that are in that map.
>
> **[2:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=160)** There are also some useful methods that you can use on map objects.
>
> **[2:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=164)** So let's say you wanted to iterate through a map object, you could do so easily using the for each function.
>
> **[2:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=172)** For each works as you would expect.
>
> **[2:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=174)** It's going to take in that callback function and then for every item in the map, we're going to console log the item.
>
> **[3:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=182)** So just to recap, why would you want to use a map?
>
> **[3:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=185)** Well, you might want to use something other than a string as a key.
>
> **[3:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=189)** Unlike objects, maps iterate its elements in their insertion order.
>
> **[3:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=193)** So unlike objects that can come back in any order, the key value pairs can come back in any order, map objects are always going to deliver those back to us in the order in which they were added.
>
> **[3:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=206)** So maps are a useful data type in JavaScript that are fairly new to the language, but you can use them for all sorts of interesting things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[JavaScript]] (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Working with sets](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=1)** - [Presenter] Sets are collections of values that can be of any type, but the rule with Sets is that each value must be unique.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=10)** The API of this is a little similar to Map, but a little bit different as well.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=14)** So when we create a new set, we're going to use the constructor and then we can make use of some functions on the Sets prototype.
>
> **[0:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=23)** So the first thing we'll do here is we will add a book to our set, "Pride and Prejudice."
>
> **[0:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=31)** And then let's go ahead and add "War and Peace" as well.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=38)** Once we've done this, we can log books to our console.
>
> **[0:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=43)** And you'll see that this is not quite like a regular object.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=46)** It looks a little bit more like a map.
>
> **[0:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=48)** We see a couple different entries here and both of these are on an index.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=53)** So zero and one.
>
> **[0:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=55)** We also have access to that dot size utility and dot size is going to say that there are two books in this set.
>
> **[1:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=64)** Another method that we can use is dot has.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=67)** So let's on line eight here, check to see if our set has "Oliver Twist" in it.
>
> **[1:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=73)** So we can say books dot has, and then we'll pass in the string for "Oliver Twist."
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=80)** Once we try to run this, we see that this is false.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=83)** There's no book of that name, but we can always add it.
>
> **[1:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=87)** We could add our own line for this, but just know that these can be chained on to each other as well.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=93)** And then books.has, will evaluate to true.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=96)** Another method that we can use with a set is dot delete.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=100)** So if we want to delete "Oliver Twist" from our set, we can.
>
> **[1:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=112)** Like I mentioned too, every one of these values must be unique.
>
> **[1:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=115)** So if I try to add "War and Peace" again, we're not going to see it in our set.
>
> **[2:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=121)** It's just going to contain one instance of that.
>
> **[2:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=126)** So with a set, it feels a little bit like an array.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=128)** So I might think, hey, I might want to map over this array.
>
> **[2:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=133)** I might want to map over a set too.
>
> **[2:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=135)** So let's give it a shot.
>
> **[2:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=137)** We're going to map over our books and for each item, for each book in our set, we want to console log each item.
>
> **[2:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=147)** Now, as soon as I try to do this, I see that books.map is not a function.
>
> **[2:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=151)** So I do need to use for each for this because dot map isn't available for a set.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [presenter] (1)

#### [Solution: Building a user processor function](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=0)** - [Instructor] Let's create a solution for this user processor function.
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=4)** The first thing that I need to do is manage the username and age here.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=10)** So on line 12, I'll create a new value called User Data and we'll set that equal to an object that has username and age as keys.
>
> **[0:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=23)** Then we're going to create our welcome message.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=27)** So the welcome message, we're going to use a template string for this, so that we can easily inject dynamic values in here.
>
> **[0:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=34)** We're going to use these back ticks and we'll say Welcome comma, we'll use the expression here with the dollar sign and the curly braces to plug that username right in there.
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=49)** And then we'll say, You are dollar sign, another variable, age years old.
>
> **[0:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=57)** All right, so that's our string.
>
> **[1:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=60)** The next thing that we'll do is create a value for isAdmin.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=65)** So this is going to make sure that that check occurs.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=70)** So we'll say username.toLowerCase includes admin, all right?
>
> **[1:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=81)** Now with the power of object literal enhancement, we can now make this even better.
>
> **[1:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=88)** Down here where we return our object, we could say user data is set to user data, welcome message is set to welcome message, and isAdmin is set to isAdmin.
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=101)** But that seems a little redundant to me and probably to you.
>
> **[1:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=104)** So let's go ahead and remove that there.
>
> **[1:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=108)** You can remove everything that's after the colon and this object should be complete.
>
> **[1:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=116)** So let's cross our fingers and test our code.
>
> **[1:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=119)** I'm going to click Test My Code down here, and then this shows us that everything is coming back as we expect.
>
> **[2:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=127)** Nice.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=128)** So a couple of different ES6 concepts here.
>
> **[2:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=131)** We're using the template string, we're using dot includes.
>
> **[2:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=134)** We're using object literal enhancement, and all of this is working together to create this awesome user processor function.

> [!info]- Semantic Content
>
> **Code Identifiers:** isadmin (3), tolowercase (1)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)


### 3. Arrays and Array Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the array spread operator](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=0)** - [Instructor] The spread operator does a lot of powerful things with three small dots.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=5)** The spread operator turns the elements of an array into arguments of a function call or into elements of an array literal.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=13)** Let's take a look at this.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=14)** I'm going to create an array of strings.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=17)** So we have some cats here.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=20)** And then I'll create another array of dogs.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=27)** Then I'm going to create an array of animals.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=29)** Smoky.
>
> **[0:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=33)** We have Miro the fish, and then we have Swimmy, a shark.
>
> **[0:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=40)** So if I wanted to add the cats and dogs to our animals list, I might want to just add them here.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=46)** So I'll just comma-separate them, and then I'll console.log the animals to see what we get.
>
> **[0:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=54)** But then immediately, we notice that we have our three items from the original array, but then we have two nested arrays in here, which is really not what I was going for.
>
> **[1:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=64)** I want everything to be at the same level with no nesting.
>
> **[1:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=68)** Here's where the spread operator comes into play.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=70)** I can add three dots right in front of cats, and three dots right in front of dogs.
>
> **[1:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=75)** That's called the spread operator.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=77)** That's just going to take all of the elements from the cats array and the dogs array, and it's going to spread them.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=83)** It's going to push them into the animals array, so that each of those individual values are available.
>
> **[1:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=90)** So the spread operator is really powerful when it comes to array transformation.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=95)** Notice too that the values do not have to be unique.
>
> **[1:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=97)** So if I changed Biscuit to Swimmy, and I tried to log that again, we still see both of them being added to the array.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Destructuring arrays](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=0)** - [Instructor] Destructuring assignment gives us an easy way to extract data from arrays and objects and assign them to variables.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=7)** Let's take a look at how destructuring works with arrays.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=10)** Here I have an array of cities.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=13)** Now if I just wanted to grab a couple of these cities, I could access them by their index.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=17)** So I could say city zero, that'll give me Spokane.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=21)** But a new way to handle this type of access is to handle it with destructuring.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=26)** Let's update cities and instead I'm going to use the array brackets here and I'm going to create a variable name.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=32)** I'll call it first.
>
> **[0:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=34)** Now I can console log first.
>
> **[0:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=36)** Then that's going to give me the first item that's in the array.
>
> **[0:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=39)** If I wanted to grab the second item in the array, I could.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=42)** I can console log second and that'll give me Boston.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=46)** Now these variable names are whatever you want to name them, so I could call this fifth, but that wouldn't mean it's the fifth one.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=53)** It just means that I've called it fifth.
>
> **[0:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=55)** All of these are going to be by position.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=58)** A nice little shortcut that we can use too is that if we did indeed want to see the fifth item in this array, if I didn't want to create variable names for all of these elements, I could just add commas.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=70)** So I'll just add enough commas to take the place of two, three, and four, and then I will be able to access that fifth variable and get Portland.
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=80)** Now this is rendering correctly with the elements in the array being represented by variable names.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=86)** So to recap, array destructuring is a popular syntax that you can use to assign a variable name to a position in an array.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Searching arrays with the .includes function](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=0)** - [Instructor] We looked at the .includes function earlier when searching strings, but you can also use this utility to help you search arrays.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=8)** Consider our array of cities.
>
> **[0:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=9)** We have Spokane, Boston, Los Angeles, Seattle, and Portland.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=13)** So I can console.log(cities.includes("Boston")), and this should be true 'cause the array contains that value.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=21)** Then, if I search for a city that doesn't exist in the array like Santa Barbara, we're going to get false.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=28)** You used to have to incorporate a third-party library to handle functionality like this, but not anymore with the includes function baked directly into the language.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing a Smart Array processor](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=0)** - [Instructor] Our task is to search for elements in an array using some ES6 features.
>
> **[0:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=6)** There are, as we would expect, many different ways to approach this, but I'm going to show you one.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=13)** We have this function here called contains value.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=16)** Contains value takes in an array and a search value.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=20)** And so I need to replace everything that's in this function.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=28)** Now we want to return array dot includes search value.
>
> **[0:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=36)** Alright, so let's give it a test.
>
> **[0:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=39)** We'll test our code and we'll get true.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=42)** Nice.
>
> **[0:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=43)** So this is correctly used the Includes Method.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=47)** What's really awesome about working with ES6 is that we can use some of these methods like this.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=53)** This helps us to avoid having to write complicated loops and handle all sorts of values that are kind of difficult to track down.
>
> **[1:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=61)** We can do everything in one line of code with array dot includes.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (2)
> **Speakers:** - [instructor] (1)


### 4. ECMAScript Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Enhancing object literals](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=3)** - [Instructor] Think about an object, any object.
>
> **[0:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=6)** Mine is going to be a skier.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=7)** What I want to do is I want to build a function that is going to return an object that's going to return this skier.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=13)** So the skier will take in a name and a sound.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=16)** Something that they yell when they're excited about skiing.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=20)** And the skier will then return an object that builds together the name and the sound and a powder yell.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=27)** So powder yell just means if it's really snowy, you're going to get excited and you have to yell.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=32)** So we're going to go ahead and use let yell and I'll set that equal to this.sound.touppercase so it'll take that sound string and make it uppercase.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=44)** And then we'll console log the message using a template string.
>
> **[0:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=51)** Now when I call this function here on line 12, I'm going to send it a name and then I'll send it some sort of yell.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=58)** Now we see that skier is a function that we've created.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=62)** Let's go ahead and console log the skier name.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=65)** We have that and then we also can call that powder yell method to make sure that that's working correctly as well.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=72)** We see that it is.
>
> **[1:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=73)** Everything is capitalized.
>
> **[1:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=76)** This is looking pretty good, but a newer object syntax called object literal enhancement can make this even better.
>
> **[1:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=84)** So notice here on line three and four, there's a lot of repetition here.
>
> **[1:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=88)** We're saying name equals name.
>
> **[1:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=90)** It feels like we could be able to shorten this a little bit and with object literal enhancement, we can.
>
> **[1:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=97)** You don't even need to include the colon and name again.
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=101)** We can get rid of that.
>
> **[1:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=103)** Same goes for sound.
>
> **[1:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=106)** Now if we try to call that powder yell function again, we should see that this is still working and we can test it out by swapping out woo for yeah and everything works.
>
> **[1:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=117)** So this syntax in [[ECMAScript]] is called object literal enhancement.
>
> **[2:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=122)** We're creating an object literal and making it cleaner and more readable with less repetition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ECMAScript]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is called (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Creating objects with the spread operator](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=0)** - [Instructor] In an earlier video, we looked at how you can use the spread operator with arrays.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=5)** in this video, we'll take a closer look at how to use the spread operator with objects.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=10)** So I'm going to create an object here called daytime.
>
> **[0:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=15)** Inside of the daytime object, it's going to have keys for breakfast.
>
> **[0:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=18)** We'll have some oatmeal.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=20)** And then for lunch, we'll have peanut butter and jelly.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=28)** Then we're going to go ahead and create a variable called nighttime.
>
> **[0:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=31)** This is going to be equal to mac and cheese.
>
> **[0:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=34)** So now what we want to do is we want to create sort of a menu.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=38)** We want to create an object that contains both our breakfast, lunch, and nighttime items.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=44)** So we could try this just by adding daytime and nighttime to our backpackingMeals.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=50)** But if we console.log this, we see the same situation as with the array.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=53)** We see some nesting going on where we don't want it to be.
>
> **[0:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=57)** We want to take both the breakfast and the lunch items and put them at the same level as the nighttime.
>
> **[1:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=64)** So we're just going to use that spread operator, those three dots.
>
> **[1:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=68)** And now we've built an object that has breakfast, lunch, and nighttime meals, all with their own keys.
>
> **[1:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=76)** So that's the spread operator.
>
> **[1:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=78)** It's a syntax we can use, those three dots, to push the items from one object into another.

> [!info]- Semantic Content
>
> **Code Identifiers:** backpackingmeals (1)
> **Speakers:** - [instructor] (1)

#### [Destructuring objects](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=1)** - [Instructor] A handy feature that you'll see used widely in [[JavaScript]] applications is destructuring.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=8)** So let's use a simple example to get us started.
>
> **[0:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=11)** We're going to create a sandwich object, and the sandwich object will have title, it'll have a price, a description, and some ingredients.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=27)** Now, if I wanted to console.log some of the values from the sandwich, I could.
>
> **[0:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=31)** I could say... let's just log the whole sandwich first.... and then I could say sandwich.title... that'll give us the Reuben... and we could access anything using that dot notation.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=46)** Now let's update this a bit to include the variables with destructuring.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=53)** So instead of sandwich, we're going to use the curly braces.
>
> **[0:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=56)** So this is different than a ray destructuring.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=59)** Objects always have the curly braces.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=62)** And then we're going to select what we want from that object, so title and price.
>
> **[1:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=68)** Now, when I run this, we're going to see that sandwich is no longer defined, but once I remove this, so I just console.log title and I console.log price, we're going to be able to access those values.
>
> **[1:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=82)** And if I wanted to grab any other information from the object, I'd just need to add that to the literal.
>
> **[1:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=89)** Let's make this a little bit more complex.
>
> **[1:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=92)** Here we're going to create an object called vacation.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=96)** The vacation has a destination, it has a number of travelers, it has some sort of activity to do, and then the cost.
>
> **[1:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=108)** So we'll just say so much.
>
> **[1:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=110)** It's expensive.
>
> **[1:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=112)** So what we want to be able to do now is we want to be able to access the keys of this object, and we want to do so with a function.
>
> **[2:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=120)** So I'm going to create this marketing function that's going to encourage me to come on this vacation.
>
> **[2:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=126)** So I don't need everything from this object.
>
> **[2:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=130)** I just need the destination and the activity.
>
> **[2:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=134)** I can use the curly braces inside of our function arguments.
>
> **[2:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=138)** Then I can return a string that I'll use a template string for, and I'll plug in the destination and the activity.
>
> **[2:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=147)** Finally, we'll call the function.
>
> **[2:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=149)** So we'll console.log marketing, and then we'll pass in what?
>
> **[2:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=153)** Well, we'll pass in the entire object.
>
> **[2:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=156)** So the entire vacation object will be passed in, and we're just going to use the destination and the activity here.
>
> **[2:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=164)** So what we've done here is pretty interesting.
>
> **[2:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=166)** We've passed in our vacation object into the marketing function, the marketing function parses the variables or keys that we're interested in, and then returns that as a template string.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Iterating with the for/of loop](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=0)** - [Instructor] For/of is a new iteration syntax that we can use to replace for in and for each.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=7)** Now, we can use this to loop over iterable objects, like arrays, strings, maps and sets.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=14)** So let's go ahead and loop over a string.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=16)** So we're going to say for and we'll say let letter of [[JavaScript]] and then for each letter in JavaScript, we'll log it to the console.
>
> **[0:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=25)** So we see all of these different letters being added to the console on their own line.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=32)** An array is also iterable.
>
> **[0:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=34)** So we can create a variable called topics and set that equal to an array of JavaScript, Node and CSS.
>
> **[0:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=43)** Now when we iterate over the topics, we can log each topic to the console.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=50)** And we see all of them being added here at the bottom.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=53)** So instead of using the array for topics, we're going to go ahead and create a new map and then we'll use the set function to define a key, which will be [[HTML]].
>
> **[1:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=63)** And a route where we can find more information about it.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=67)** So /topic/html.
>
> **[1:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=71)** We'll do the same for CSS and we'll do the same for JavaScript.
>
> **[1:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=79)** So now I'm going to use this for/of loop and I'll say for let topic of topics and we want to console.log the topic.
>
> **[1:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=91)** So let's run this and see what we get.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=93)** We'll see that those values are being returned.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=96)** So we have HTML and the route, we have CSS and the route and JavaScript and the route.
>
> **[1:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=102)** So let me clear this out and I want to take a look at this function called topics.keys.
>
> **[1:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=108)** So the .keys method is going to return, as it sounds like, the key from that map.
>
> **[1:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=114)** So we'll see HTML, CSS and JavaScript.
>
> **[1:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=119)** Also, if we wanted to take a look at the values, let's adjust this to use a template string here.
>
> **[2:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=125)** We'll say the course description can be found at route.
>
> **[2:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=129)** We will change the name of the variable and then instead of using .keys, we'll use .values.
>
> **[2:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=137)** .values is going to give us that route.
>
> **[2:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=140)** And finally, another method we should know about is .entries.
>
> **[2:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=144)** It will give us the key-value pairs that are part of this map.
>
> **[2:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=151)** So because we have these new [[Data Structures]] available in the latest versions of [[ECMAScript]], it's really nice to have something like for/of to help us iterate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (6), [[HTML]] (4), [[Data Structures]] (1), [[ECMAScript]] (1)
> **Env Vars:** css (4), html (3)
> **CLI Commands:** node (1), find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Introducing classes](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=1)** - [Instructor] Classes have long been used in [[Object-Oriented Programming (OOP)|object-oriented programming]] languages to encourage reusability.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=8)** For example, if we created some sort of a class called chair, a chair would have certain characteristics and then we could create instances of that chair in our projects.
>
> **[0:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=18)** As of around 2015, we now have a way to create and use classes with [[JavaScript]] and the syntax is pretty fun to use.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=26)** So first, let's go ahead and create a class called Vehicle.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=30)** In it, there's a constructor function and the constructor is basically just going to set up any properties that this class is going to use.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=38)** So what types of things are common about a vehicle?
>
> **[0:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=41)** Well, we're going to have a description of some sort and then a number of wheels.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=46)** So inside of the constructor, we want to set the value of description to this.description and this.wheels to associate it with the class.
>
> **[0:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=57)** Next, I'm going to create a custom method called describeYourself.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=62)** Now, describeYourself is just going to be a simple console.log message but we're going to take advantage of the description and the wheels that are part of this vehicle and just return it in the template string.
>
> **[1:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=75)** So I will say I am a this.description with a certain number of wheels.
>
> **[1:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=81)** Great, so now I have the vehicle class.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=83)** It's sort of like a blueprint for a reusable object that I can use again and again.
>
> **[1:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=89)** Any time I want to create a vehicle, I can use this constructor.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=93)** Now's the time where I'm going to create a new instance of the vehicle class.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=99)** So here on line 14, I'm going to create a variable called coolSkiVan.
>
> **[1:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=104)** And this is a new type of vehicle that takes in its description, cool ski van, and a number of wheels, which will be four.
>
> **[1:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=114)** Once we've created our coolSkiVan, let's go ahead and log it.
>
> **[1:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=117)** So we see that this is a vehicle with a description and a number of wheels.
>
> **[2:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=123)** And when I call the describeYourself function, we're going to, actually, let's get it out of the console message because we already have that in the function itself.
>
> **[2:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=132)** This should log all of the information.
>
> **[2:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=135)** It's just going to print it directly to the console.
>
> **[2:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=139)** So this is very cool.
>
> **[2:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=140)** We've created a class using JavaScript, the Vehicle, and I can use this to create as many vehicles as I want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Code Identifiers:** describeyourself (3), coolskivan (2)
> **Definitions:** is a  (2)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Inheritance with JavaScript classes](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=1)** - [Tutor] In the previous video, we created a Vehicle class, and now I'm going to create a new class that will inherit from the Vehicle class.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=10)** And this is a process called extending the class, which means that I can take a vehicle which could be any kind of vehicle, a car, a truck, a bicycle, and extend it to customize it for a specific type of vehicle.
>
> **[0:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=25)** So the type I'm going to create is a SemiTruck.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=29)** Now inside of the constructor, we're going to pass in a couple of values for description and wheels, and we're going to pass these via a function called super.
>
> **[0:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=41)** So super is going to go up to the Vehicle and it's going to plug in SemiTruck for the descriptor and 18 for the number of wheels.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=50)** When I want to create a new instance of the SemiTruck, I'll do it here on line 20, I'll just create a variable and I'll set it equal to a new SemiTruck.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=59)** And now I can use the describeYourself function to actually log that message.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=70)** So this is class inheritance.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=72)** We create one superclass the Vehicle, and then we can extend it for reuse.
>
> **[1:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=78)** Developers who have come to [[JavaScript]] from [[Python (Programming Language)|Python]] or [[Java]] are usually pretty excited to hear this because there wasn't a way to create a class in the past, and this sort of mirrors what goes on in other languages.
>
> **[1:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=91)** So this is a syntax that you can take advantage of if you like it, and you can use it to create all sorts of reusable objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1), [[Java]] (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** describeyourself (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [tutor] (1)

#### [Getting and setting class values](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=2)** - [Instructor] In objects and in classes, [[JavaScript]] has a get method and a set method.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=8)** A getter or a get method gets the value of a specific property.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=13)** So if you're wondering, what is this property for this object?
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=17)** The getter is going to go get it for you.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=20)** The setter does what it sounds like.
>
> **[0:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=22)** It sets the value of a specific property.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=26)** So we can use getters and setters in objects and in classes.
>
> **[0:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=31)** Let's take a look at how this looks in an object by creating an object called attendance.
>
> **[0:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=36)** The first key of attendance we'll use is _list, which will be an empty array.
>
> **[0:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=43)** And then we're going to add this set property here and set will be a function called addName.
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=49)** Which will just push an item into the list.
>
> **[0:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=54)** Then finally we'll create a getter, a get property.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=58)** And this is going to return the elements of the list array joined together with a comma.
>
> **[1:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=64)** Once we have our object created, let's go ahead and use it.
>
> **[1:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=69)** On line 11, we're going to say attendance.addName.
>
> **[1:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=73)** This is going to be set equal to a new name to be added to the attendance list.
>
> **[1:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=78)** So if I console log attendance.list, this should give us the full list.
>
> **[1:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=84)** Let's add a few more names just to see that this is working.
>
> **[1:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=89)** And I'll copy and paste it for the sake of time.
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=94)** Let's go ahead and add a couple more names here.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=99)** So we got our friend Bill Benkelman And then we have Charlie Charlson.
>
> **[1:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=110)** Now if we console log the list, we're going to see that comma separated list of names for anyone who has been added.
>
> **[2:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=122)** So this is that get and set stuff.
>
> **[2:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=124)** We set some names and now we can get them using that list method.
>
> **[2:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=129)** As I mentioned, we can also use getters and setters in classes.
>
> **[2:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=133)** So let's go ahead and use class Hike.
>
> **[2:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=136)** We will use a constructor to create a couple properties for this class.
>
> **[2:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=141)** So the hike has a distance and it has a pace.
>
> **[2:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=145)** Now we'll use getters and setters in the class.
>
> **[2:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=148)** So the thing we want to get is the length of the hike in hours.
>
> **[2:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=153)** So to do this, we're going to use a template string.
>
> **[2:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=155)** And we'll say this.calcLength, which is a setter function that we'll create in a second.
>
> **[2:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=161)** Hours.
>
> **[2:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=163)** Now the calculate length function is going to return whatever the distance is divided by the pace.
>
> **[2:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=170)** So you can see how fast you're hiking.
>
> **[2:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=173)** So we can just return this.distance divided by this.pace.
>
> **[3:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=180)** I'll create a new instance of a hike by calling new Hike with the properties.
>
> **[3:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=185)** So we'll say it's 10 and two.
>
> **[3:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=187)** The distance is 10 miles, the pace is two miles an hour.
>
> **[3:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=191)** And then when we console log mtTallac.length in hours, we should see how long this hike takes.
>
> **[3:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=200)** Cool, so if you're used to object oriented programming or class-based syntax in other languages, this type of programming probably looks pretty familiar to you.
>
> **[3:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=209)** We can use getters and setters in classes as well as regular objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** addname (2), calclength (1), mttallac (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Building a product object](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=0)** - [Instructor] We need to create a product object and we'll do so with a function.
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=4)** The function already takes in a name and a price, and we're going to simply return this object here like we saw before.
>
> **[0:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=15)** We can use this shorthand syntax to remove name and price.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=21)** And now we need to add a display.
>
> **[0:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=24)** So we want to display the information about the product.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=29)** We want to make sure that it matches this exactly over here.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=32)** So we're going to replace the return with product and then inject the name of the product, a comma, and then we'll add the price.
>
> **[0:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=46)** And just to be tricky, we're going to add an additional dollar sign here so that we can print the dollar sign.
>
> **[0:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=55)** The second dollar sign is just referring to the variable.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=59)** We can shorten up our syntax even further using our ES6 syntax.
>
> **[1:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=64)** We don't need this function keyword.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=67)** By just adding these parentheses here, we will infer that this is a function, so I feel good about this, but there's only one way to find out.
>
> **[1:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=78)** Let's go ahead and test my code.
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=80)** And we see, okay, we have mastered our ES6 object literals, we're using this shorthand function syntax, and we're creating a function that can be used to create various instances of these [[Microsoft Products|products]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** es6 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. ECMAScript Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the string.repeat function](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=1)** - [Instructor] We've looked at array and string methods like startsWith, endsWith, and includes.
>
> **[0:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=6)** Well, I got another one for you, .repeat.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=10)** The repeat method builds and returns a new string which contains a certain number of copies of the string.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=17)** Let's take a look.
>
> **[0:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=19)** First, we're going to create a variable, and our variable will be called yell.
>
> **[0:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=23)** So, another woo yell for our class today.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=27)** We're also going to add party.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=30)** And party, we'll set equal to yell.repeat, and we'll pass in the number of times that we want this to repeat, which is 20.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=38)** Now if we console.log party, we'll see woo, woo, woo, woo, woo, woo, woo 20 times.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=44)** So the repeat function, again, is just going to make a copy of that string.
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=49)** You could also use the repeat function inside of an object that has a few methods.
>
> **[0:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=55)** We're going to create an object called cat that has a meow method inside of it.
>
> **[1:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=61)** Now this function is going to take in a certain number of times that a meow happens and then repeat it in the console.
>
> **[1:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=68)** Same goes for purring.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=70)** We'll console.log that and the number of times that we want that purring to occur.
>
> **[1:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=76)** And then finally, we'll create a custom method called snore, which will log a certain number of snores depending on what we pass in.
>
> **[1:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=89)** Once that has been added, we can call those functions.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=93)** So we can say cat.meow, we'll pass in three for the number of times we want that to occur.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=99)** We'll do the same thing for purr, and it looks like that's working.
>
> **[1:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=103)** We also can do the same for snore, and let's pass in six for that.
>
> **[1:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=110)** Nice. So repeat is a pretty useful utility.
>
> **[1:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=114)** If you're ever in need of a function that can make some copies of a string, you now have .repeat in your tool chest.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cat (2)
> **Code Identifiers:** startswith (1), endswith (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Setting default function parameters](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=0)** - [Instructor] There might be situations where you want to provide default values for your functions parameters.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=5)** And with modern [[JavaScript]], you can.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=8)** So let's create a really basic function that adds a couple of numbers together.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=13)** The function add will take in X and Y and then just console log the addition of X and Y to our console.
>
> **[0:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=22)** Now, if I call the add function without passing in any values, it's going to return not a number.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=28)** So you could fix this by adding numbers to your parameters, or you could also add defaults in case they were not supplied.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=38)** So I'm going to say X equals five, Y equals six, and this will log 11 to the console.
>
> **[0:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=45)** Now, what happens if I do add numbers?
>
> **[0:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=48)** If I do pass values to a function that already has default parameters defined.
>
> **[0:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=54)** Well, not surprisingly, whatever we pass in is going to override whatever is the default.
>
> **[1:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=61)** Let's take a look at another type of function called haveFun.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=65)** So haveFun takes in an activity name and a time that this activity takes.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=70)** So inside this function, I'm going to just console log a little message to myself, just so that I can see these defaults are working when I eventually create them.
>
> **[1:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=81)** All right, so today I will go activity name for a certain number of hours.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=86)** Now, when I called the haveFun function, let's go ahead and pass in biking and 2.5.
>
> **[1:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=92)** So that's how long it will take.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=95)** Then let's call it again without any values.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=99)** So, the first one, I see biking for 2.5 hours the second is undefined undefined.
>
> **[1:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=107)** Now, if I set up these defaults so hiking, and let's say three hours, hiking and three hours are going to be plugged into that second function call that happens on line 16 here.
>
> **[2:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=122)** Now what happens though if I only pass in one?
>
> **[2:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=125)** Let's say biking.
>
> **[2:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=127)** What's cool is that the function is going to use the value that I pass, biking.
>
> **[2:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=133)** And then it's going to take advantage of the default because no value has been supplied for a time.
>
> **[2:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=139)** So there we go.
>
> **[2:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=140)** Default parameters can be very useful when you want to use a default value if another is not provided.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** havefun (3)
> **Versions:** 2.5 (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Writing arrow functions](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=0)** - [Instructor] Arrow functions have an abbreviated syntax for working with functions.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=5)** We're dealing with a brand new token here.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=7)** An equals sign and a greater than sign.
>
> **[0:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=10)** And together that makes an arrow.
>
> **[0:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=12)** So don't get that confused with comparison operators because it does something quite different.
>
> **[0:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=18)** Let's create a function here called studentList.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=21)** StudentList takes in some students and then it logs those students to the console.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=26)** Now if I call studentList with an array, it's going to log those values.
>
> **[0:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=36)** But arrow functions will allow me to use a slightly shorter syntax.
>
> **[0:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=40)** So let's take a look at how I would refactor this function to use an arrow function.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=44)** First I'd remove the function keyword.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=47)** Then students is our arguments, right?
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=49)** So right after the arguments, I'm going to place that arrow.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=53)** The way I think about it is it just points to whatever this function returns.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=58)** Now this'll work as is with these curly braces.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=62)** But since there's only one statement, since there's only one thing that this function is doing.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=67)** Console logging some students, we can actually remove these curly braces.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=72)** So that's up to you.
>
> **[1:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=73)** You can decide how terse you want your syntax to be.
>
> **[1:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=78)** Let's try it again with another list.
>
> **[1:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=81)** We'll use apple, banana and cherry.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=86)** And then we want to map over this array.
>
> **[1:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=88)** So we're going to send in a callback function that's going to console log each item from that list.
>
> **[1:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=98)** So apple, banana, cherry.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=99)** So let's give it a run.
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=101)** We see apple, banana, and cherry.
>
> **[1:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=104)** Now using what we know of arrow functions, we can remove the function keyword.
>
> **[1:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=111)** We can point to whatever we want to return.
>
> **[1:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=114)** And if there's only one statement, we can remove those curly braces.
>
> **[1:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=118)** So check it out.
>
> **[1:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=119)** We're getting the same result but we're also seeing how much cleaner this looks.
>
> **[2:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=123)** So arrow functions just give us another option.
>
> **[2:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=126)** We can use this instead of a full function declaration to do the exact same thing.
>
> **[2:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=131)** Arrow functions are a great way to make your [[JavaScript]] code more readable and more compact.
>
> **[2:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=136)** And you'll see them used a lot as we've done here with functions like map and filter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** studentlist (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Understanding this in arrow functions](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=1)** - In the previous lesson we reviewed how Arrow Functions can make our code more readable.
>
> **[0:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=6)** In addition to this, though, arrow functions help us to deal with the scope of this in our [[JavaScript]] code.
>
> **[0:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=13)** Let's take a look at an example of the old way and then we'll update this to the new syntax.
>
> **[0:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=19)** First, I'll create a person object.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=21)** The person object is going to have a first name and then it'll have an array of hobbies.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=27)** So we'll add a few hobbies for this person to do.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=32)** Then we're going to add print hobbies as a method for this object.
>
> **[0:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=39)** Print hobbies is going to iterate over these hobbies and it's going to add a little string to our console.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=50)** So the string will just pass back the values and then we'll be able to see what this person likes to do.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=59)** Once I call person.print hobbies, we see sort of a weird output here.
>
> **[1:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=63)** It says undefined likes to bike, hike, and ski.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=67)** Now I thought if we use this, we will be able to access properties that are part of this object.
>
> **[1:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=74)** It's looking like I can't really do that.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=77)** So a little workaround that you often see in JavaScript code is we'll use some sort of other variable to scope this to the function.
>
> **[1:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=87)** I can use underscore this instead and this should be able to plug in the first name from the object property.
>
> **[1:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=97)** I feel like there might be a better approach.
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=101)** What we can do instead is we can use an arrow function.
>
> **[1:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=104)** Let's go ahead and remove that function keyword.
>
> **[1:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=107)** We're going to place an arrow before the things that we want to return.
>
> **[1:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=113)** And now if we try running this again, we should see Angie likes to hike, bike, and ski.
>
> **[1:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=119)** The arrow is helping us keep this in scope so that we don't have to create underscore this or some sort of workaround to make this work.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=128)** Instead, the arrow will make this happen for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **CLI Commands:** make (3)
> **Speakers:** - in (1)

#### [Working with generators](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=0)** - [Instructor] Generators are a new type of function that allow us to pause functions in the middle of execution to be resumed later.
>
> **[0:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=9)** You know you're looking at a generator when you see an asterisk immediately following the function keyword.
>
> **[0:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=15)** So let's go ahead and create a generator here.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=17)** We're going to create a generator called director.
>
> **[0:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=21)** So the director generator function is going to do a countdown for us, basically.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=29)** Within a generator, we can hit pause by using the yield keyword, and this can be used numerous times within the same function.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=38)** Now, inside of the director function, we're going to use four yield statements for a director counting down until the camera is rolling.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=47)** Now, let's set a variable that calls the director function.
>
> **[0:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=52)** And what we'll do here is we'll console.log to retrieve the values from the director generator.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=59)** So if I call this method called .next, the next function is going to return an object that contains the value and done.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=67)** So the value here is three, which makes sense.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=70)** That's the value that we've set up on line two.
>
> **[1:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=74)** Done is either true or false.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=77)** So when a function is done, meaning there are no more yield statements, the done value will be true.
>
> **[1:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=84)** So let's go ahead and log a few of these.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=86)** So countdown.next, countdown.next.
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=94)** This is going to count us down three, two, one, and action.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=100)** In all of these cases, done is set to false.
>
> **[1:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=103)** However, if I call one more of these... so after three, two, one, and action have been completed... the value is undefined and done is true.
>
> **[1:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=115)** Another nice thing we can do is we can chain on .value.
>
> **[2:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=120)** .value will give us just the value instead of the entire object.
>
> **[2:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=124)** So this is sort of a simple example of how we use generator functions, but the important thing to understand is that the yield keyword is going to be used anytime we want to hit pause inside the execution of a function, and then in order to skip to the next yield, we just call the next function.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing advanced function patterns](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=0)** - [Instructor] Our task is to create a function that formats text with a specific indentation level.
>
> **[0:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=6)** So our format text function over here takes in text and an indent level, and it's going to be our job to figure out how this works.
>
> **[0:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=18)** So what we'll do is we'll say "return," then we'll add a string that's just one space, and we'll say ".repeat."
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=28)** So .repeat takes in a number or it takes in some sort of calculation for the number of copies that we should make of something.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=37)** So let's say indentLevel times 2.
>
> **[0:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=43)** So what this will do is with our indentLevel, if we were to set a default value, say one, it's going to add two spaces.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=53)** With an indent level of two, it'll add four spaces.
>
> **[0:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=56)** With an indent level of three, six spaces, and so on and so forth.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=59)** So we're using the default function parameter for this, and then we're going to concatenate this with the text that is sent into this function.
>
> **[1:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=68)** Now, as a possibility, if you'd like to as well, you can convert this to an arrow function.
>
> **[1:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=75)** So formatText=, and then we'll just copy everything from here.
>
> **[1:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=82)** Copy and paste.
>
> **[1:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=84)** And then the only change I really need to make here is we'll point our arrow at the return.
>
> **[1:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=91)** Since this is a single line, you could even remove that return if you really wanted to.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=96)** Let's keep this cons format text option here.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=100)** We want to run this to see how we're doing.
>
> **[1:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=102)** We'll test the code, and we'll see that this is working well.
>
> **[1:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=107)** So we're able to add that indent level.
>
> **[1:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=110)** We're able to use the repeat function for repeating a string, and we're also using this default function parameter within our arrow function.

> [!info]- Semantic Content
>
> **Code Identifiers:** indentlevel (2), formattext (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Asynchronous JavaScript

[↑ Back to Table of Contents](#table-of-contents)

#### [Building promises](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=0)** - [Instructor] Promises help us deal with asynchronous behavior in [[JavaScript]].
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=4)** When something is asynchronous, it just means that some sort of weighting is going on.
>
> **[0:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=9)** There's a delay between when we ask for something and when we receive it.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=14)** Kind of the prime example of this is fetching data.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=17)** I ask for some data from an external API, I wait for a couple seconds and then it comes back to me.
>
> **[0:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=24)** So to create our first promise, we will create a delay function.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=29)** So the delay function here is going to take in a certain number of seconds and then it's going to return a new Promise.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=38)** New Promise will take in a callback function.
>
> **[0:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=41)** So resolve just means if everything goes as expected with the promise, it will resolve and then we can use this setTimeout to wait for a certain number of seconds.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=53)** The setTimeout function takes in resolve, which stands in for the callback function to fire after the timeout.
>
> **[1:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=60)** It also is going to take in a certain number of milliseconds before the timeout.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=65)** So let's go ahead and console.log just a quick message called Zero seconds to make sure it's working.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=70)** It is.
>
> **[1:12](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=72)** Then we can call the delay function and we'll pass in one.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=77)** We want to console.log one second.
>
> **[1:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=82)** So the delay function is going to use this timeout function and then as soon as the timeout is over, as soon as the one second has passed, we're going to log one second to the console.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=96)** Let's do it again but this time with five seconds.
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=101)** And we'll replace the console message five seconds.
>
> **[1:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=105)** These are looking a little long.
>
> **[1:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=106)** Let me shorten them up a little bit.
>
> **[1:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=109)** So one second, two, three, four, five seconds.
>
> **[1:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=115)** So anything that we're passing into the .then function is resolve.
>
> **[1:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=119)** It's the function that's going to be called.
>
> **[2:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=121)** So that here on line seven is this whole console.log message.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=128)** Everything so far has been going really well.
>
> **[2:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=131)** All of our promises are resolving.
>
> **[2:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=133)** But what happens if there's some sort of error?
>
> **[2:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=135)** If our data doesn't load or something else goes wrong?
>
> **[2:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=139)** Promise are either pass or fail when the resolved arguments are passed to them or when rejected arguments are passed to the error.
>
> **[2:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=148)** So let's take a look at what this looks like.
>
> **[2:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=150)** We just passed in reject.
>
> **[2:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=152)** And then we're going to place the setTimeout inside of this function return.
>
> **[2:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=158)** Right above this, we're going to say that if there's some sort of an error, so like there's a type mismatch where seconds is not a number, we want to throw a new error.
>
> **[2:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=169)** Okay, so we're handling a possible error case here.
>
> **[2:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=174)** So let's go ahead and call this function again.
>
> **[2:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=177)** We see one second is running.
>
> **[2:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=178)** That's to be expected.
>
> **[3:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=180)** But if we replace this with a string, immediately we see an error.
>
> **[3:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=185)** Seconds must be a number.
>
> **[3:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=187)** So that is a quick first look at promises.
>
> **[3:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=191)** Promises help us to make asynchronous code more manageable and more reusable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** settimeout (3)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Loading remote data with promises](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=1)** - [Instructor] We often use promises to load data.
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=4)** Let's create a function called spacePeople that returns a promise and we'll call it spacePeople because it's going to [[Fetch]] some data from an API of astronauts who are currently in space.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=16)** So spacePeople again will return a new Promise.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=20)** It's going to have resolve and rejects as the arguments here.
>
> **[0:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=24)** We also are going to create a link to an API.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=26)** So we'll use this open-notify astronaut API.
>
> **[0:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=33)** And then we need to build a request.
>
> **[0:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=36)** So we're going to create another variable called request.
>
> **[0:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=41)** This is going to be equal to a new XML HTTP request.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=47)** Now, when we open this request, we're going to send it as a GET request.
>
> **[0:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=52)** In other words, we're going to ask for some data from this API.
>
> **[0:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=58)** When the request loads, we're going to set it to this function.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=62)** So if the status is 200, meaning everything is going well, so we'll just parse the response here on line nine.
>
> **[1:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=71)** Otherwise, in other words, if the status is something else, like 400, 404 or whatever status that isn't 200, we want to reject it and we want to return the status text.
>
> **[1:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=85)** The final thing we need to do here is we need to say request.onerror equals error rejects.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=95)** And then we'll send the request using the send method.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=99)** So this is just kind of a standard format for how you would send an HTTP request with [[JavaScript]].
>
> **[1:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=105)** It's kind of a boilerplate thing at this point.
>
> **[1:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=108)** You can use it for pretty much any type of request.
>
> **[1:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=112)** All right, so on line 19, we're going to recall spacePeople.
>
> **[1:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=118)** We're going to then console.log the data to our console.
>
> **[2:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=122)** So we see that the message is a success.
>
> **[2:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=125)** We have a certain number of people and then all of their data is part of that array.
>
> **[2:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=133)** Let's also add an error message to this so that if anything goes wrong, we can capture it.
>
> **[2:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=142)** And we can have our own little custom error that says can't load people.
>
> **[2:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=146)** So let me break this API really quick or at least break the link to it.
>
> **[2:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=152)** First of all, it says can't load people.
>
> **[2:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=153)** That's the custom error that I created.
>
> **[2:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=156)** And then we see some other errors that are being added to our console.
>
> **[2:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=161)** So like I said, kind of boilerplate stuff to send an HTTP request but to me, this is stressing me out a little bit.
>
> **[2:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=170)** This looks like a lot of code.
>
> **[2:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=172)** And the good news about that is that this API call could be simplified tremendously by using this function called fetch.
>
> **[3:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=181)** In the next video, we're going to look at how to use fetch to load data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[JavaScript]] (1)
> **Env Vars:** api (6), http (3), xml (1)
> **Code Identifiers:** spacepeople (4)
> **Definitions:** in other words (2), is a  (1)
> **Exercise Files:** boilerplate (2)
> **API Endpoints:** get  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Returning promises with fetch](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=0)** - [Instructor] Remember our spacePeople function from the previous video that went and got some data from an API?
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=7)** It works pretty well but we're going to reformat this request and instead, use something called [[Fetch]].
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=14)** Fetch is a function that works natively in the browser.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=17)** There are also packages that work with Node like node-fetch and isomorphic-fetch so you can use something similar in that environment as well.
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=26)** Fetch is just going to take in the URL of our API.
>
> **[0:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=30)** So that api.[open-notify.org/astros/json](https://open-notify.org/astros/json), that's where all of our data is.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=37)** So we're going to pass that directly into this fetch function.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=42)** Then we're going to chain on .then and we're going to console.log whatever the response is.
>
> **[0:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=48)** Now, fetch returns the entire response object.
>
> **[0:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=51)** And the object has a [[JSON]] function that parses the body as JSON.
>
> **[0:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=56)** So let's go ahead and take the response and we'll call it response.json.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=62)** Then we're going to console.log everything.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=65)** So this is going to log the same exact thing that that spacePeople function from before did.
>
> **[1:10](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=70)** We got our success message, we have the number of people and then we have the array of those people's data.
>
> **[1:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=77)** So now I can take this and turn it into a reusable function.
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=80)** So we'll call it .getSpacePeople and this should return fetch.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=86)** So now that we have this repeatable function that we can use to get some data, we can always chain .then onto that function.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=99)** Just a quick note about the shorthand that we're using here.
>
> **[1:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=102)** Notice that we're passing in data and then we're console.logging the data.
>
> **[1:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=107)** So because the arguments and whatever we're passing in to the console.log are the same, we don't have to really use it.
>
> **[1:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=115)** So you can use the shorthand here and just pass console.log directly into the .then.
>
> **[2:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=121)** So I kind of like this.
>
> **[2:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=122)** It's a little cleaner to my eyes.
>
> **[2:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=124)** But just know that it's doing the same thing.
>
> **[2:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=127)** So because we have this repeatable getSpacePeople function, I'm going to create another function that is going to help us format the names that are coming back from this response.
>
> **[2:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=139)** So basically, I just want to see all of the names of all of the people who are in space.
>
> **[2:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=155)** So once I give that a save, and I call the spaceNames function, I should be able to see those names.
>
> **[2:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=164)** Nice.
>
> **[2:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=165)** So this is going to return an array because I've used the .map function to make that happen.
>
> **[2:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=171)** And if I want to format this a little more, I can use .join to comma separate them in the console so that I can read them a little more clearly.
>
> **[3:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=181)** So there's a lot going on here.
>
> **[3:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=183)** We've used the fetch function.
>
> **[3:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=185)** The fetch function again is built into every single browser, so you can use this instead of writing those long XML, HTTP requests.
>
> **[3:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=194)** And then we can use reusable functions to format the data once we have it returned.
>
> **[3:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=201)** But just know that fetch returns a promise.
>
> **[3:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=204)** We're still using promises under the hoods.
>
> **[3:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=206)** But fetch is just kind of a cleaner wrapper around them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (12), [[JSON]] (4)
> **Env Vars:** api (2), json (2), url (1), xml (1), http (1)
> **Code Identifiers:** spacepeople (2), getspacepeople (2), spacenames (1)
> **CLI Commands:** node (2), make (1)
> **File Paths:** response.json (1)
> **URLs:** [open-notify.org](https://open-notify.org) (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)

#### [Using async/await syntax](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=1)** - [Instructor] The next asynchronous feature of the [[JavaScript]] language that I want to talk about is a syntax called async/await.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=8)** Async functions return a promise, and the resolved value of the promise will be whatever you return from the function.
>
> **[0:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=15)** So let's take a look at this.
>
> **[0:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=16)** We had our delay function from before.
>
> **[0:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=19)** Which returned this new promise that set a timeout.
>
> **[0:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=23)** So this looks pretty familiar.
>
> **[0:25](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=25)** But I'm going to create here on line six, async function.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=29)** So we know it's an async function because we use the async keyword right before the function arguments.
>
> **[0:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=35)** And then what we're going to return from this is a console log message that's called zero seconds.
>
> **[0:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=41)** Just for now.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=42)** So let's call it and make sure that it's working.
>
> **[0:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=45)** And now inside of this, we can say await delay one.
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=49)** So we're going to wait for one second.
>
> **[0:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=52)** And then we'll console log another message.
>
> **[0:59](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=59)** So remember our generator functions from before?
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=62)** We had that yield keyword and we would kind of hit pause?
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=67)** Basically we're doing something similar with the await keyword.
>
> **[1:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=71)** The only difference here is we're going to wait for this function to execute, wait for the delay function to execute for a second.
>
> **[1:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=80)** And then we're going to do whatever comes next.
>
> **[1:23](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=83)** So we'll wait on line eight for delay one to happen, and then we can move on.
>
> **[1:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=90)** We can use as many await statements that we'd like to in our functions.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=95)** So we can wait for the results of this promise for two seconds, three seconds, whatever.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=100)** And remember that the async keyword is really important here.
>
> **[1:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=103)** So if I remove it and I try to run it again, we'll immediately see this error that says await is only valid in an asynchronous function.
>
> **[1:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=112)** So you can't get away with using await statements in just regular functions that don't use that async keyword.
>
> **[1:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=118)** Cool so this is a quick look at how async/await works.
>
> **[2:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=123)** Why would you want to use it?
>
> **[2:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=124)** Well, it's mostly a syntactical choice.
>
> **[2:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=127)** Async/await allows you to write functions that are a little cleaner and more readable.
>
> **[2:13](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=133)** And it's basically asynchronous code with a synchronous code structure.
>
> **[2:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=138)** Because we have these await statements, it looks a little bit more clear about what's going on potentially.
>
> **[2:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=147)** And it also helps with things like debugging and error handling.
>
> **[2:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=151)** So this is an optional syntax that you can use if you find it useful.
>
> **[2:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=156)** Async/await is part of the language now.
>
> **[2:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=158)** So you can use it for any sorts of asynchronous behavior in your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Incorporating fetch with async/await](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=0)** - [Instructor] We've talked about async, await and we've talked about [[Fetch]].
>
> **[0:04](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=4)** Let's take a minute to look at how we can use all of these things together.
>
> **[0:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=8)** So fetch by definition is asynchronous.
>
> **[0:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=11)** We're waiting to get some data back.
>
> **[0:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=14)** So let's go ahead and create a function called githubRequest.
>
> **[0:20](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=20)** And this is going to be an async function that takes in the login name of a user of [[GitHub]].
>
> **[0:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=26)** And we're going to use await here.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=29)** So we're going to await the results of a fetch.
>
> **[0:32](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=32)** So the API that we're going to look at here is the GitHub API.
>
> **[0:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=38)** So it's api.[github.com/users](https://github.com/users), and then some sort of name.
>
> **[0:42](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=42)** So I'm just going to use my own.
>
> **[0:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=44)** You can use your own GitHub name if you'd like to.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=47)** And we're going to make a request to this API.
>
> **[0:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=49)** So now that I know that this is working, I'm just going to copy and paste this into our function.
>
> **[0:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=56)** And instead of hard coding this for a specific user, we're going to take this in as an argument.
>
> **[1:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=62)** So that login will be concatenated onto the end of the string.
>
> **[1:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=67)** Now on line five here, we're going to create a variable called let [[JSON]].
>
> **[1:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=71)** So remember with fetch, we need to convert the response to JSON so that we can parse the results.
>
> **[1:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=79)** Now I need to decide what data I want to get from this API.
>
> **[1:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=84)** So let's just create a variable called summary.
>
> **[1:26](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=86)** Summary is going to be this string.
>
> **[1:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=90)** We'll take the name, we'll take the company
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=101)** from those results and we just want to be able to print that.
>
> **[1:46](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=106)** So when we console log the summary, we should be able to see the name and the information for that user, whoever we pass in.
>
> **[1:55](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=115)** I'm going to pass in eveporcello and we want to make sure that this is in quotes, 'cause this is a string.
>
> **[2:06](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=126)** So let's go ahead and try it again and we see Eve Porcello and the company.
>
> **[2:11](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=131)** And if I added a different user, we would be able to see that as well.
>
> **[2:18](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=138)** So this is async await with fetch.
>
> **[2:21](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=141)** We create an async function using the async keyword, and then we wait for all sorts of things to occur in the body of this function.
>
> **[2:30](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=150)** First, we're waiting for a fetch from an API, and then we're going to convert that response to JSON.
>
> **[2:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=157)** Once we have it, we can then log it to the console or use it anywhere in our app.
>
> **[2:43](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=163)** So this sort of syntax is going to be super useful to you as you work on [[JavaScript]] projects.
>
> **[2:49](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=169)** I use async, await, and fetch literally everyday of my life.
>
> **[2:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=174)** So hopefully you can use this to grab some data from these external APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (7), [[GitHub]] (4), [[JSON]] (3), [[JavaScript]] (1)
> **Env Vars:** api (5), json (2)
> **Tools:** github (4)
> **CLI Commands:** make (2)
> **Code Identifiers:** githubrequest (1)
> **URLs:** [github.com](https://github.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Building an async data handler](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=0)** - [Instructor] ES6 gives us a ton of new features for working with asynchronous data.
>
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=5)** So what we want to do here in our answer is we want to model a data [[Fetch]] from an API, and we'll also add some timing functions into the mix.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=17)** So the first thing we'll do is we'll replace this little code comment with some actual code.
>
> **[0:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=24)** Let's make use of this return at some point.
>
> **[0:29](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=29)** But for now, just to keep our syntax straight, we want to return a new promise.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=37)** And this new promise is going to take in resolve, and then resolve will be this parameter for a function.
>
> **[0:47](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=47)** We'll use an arrow function here.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=50)** Now within the context of this function, we'll set a timeout.
>
> **[0:54](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=54)** Set timeout takes in two things.
>
> **[0:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=56)** It takes in a callback function, and it takes in a certain number of milliseconds.
>
> **[1:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=61)** So we'll say 1000 here.
>
> **[1:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=65)** From here, we can resolve, and we're going to use this return here.
>
> **[1:16](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=76)** So we'll say ID, timestamp and data, and for good measure let's go ahead and take out the ID here.
>
> **[1:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=88)** Okay, let's see how we did.
>
> **[1:31](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=91)** We are waiting one second to call this function.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=96)** We're going to return some data, and this is a lot like an API request to some sort of a [[Representational State Transfer (REST)|rest]] API.
>
> **[1:44](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=104)** So if we click test our code, we're going to get that error, and that's because I should delete that.
>
> **[1:51](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=111)** All right, let's try that one more time.
>
> **[1:56](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=116)** So this is telling me that something isn't right.
>
> **[1:58](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=118)** We're not using an asynchronous function.
>
> **[2:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=120)** Oh my goodness.
>
> **[2:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=121)** So that's really important.
>
> **[2:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=123)** Let's use async as the keyword at the front of this function.
>
> **[2:08](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=128)** So now if we click test my code again, we should get the data back.
>
> **[2:14](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=134)** And our asynchronous function is working well.
>
> **[2:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=137)** So again, we use the async pattern.
>
> **[2:19](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=139)** We can use this in combination with the promises, we can use a wait as well.
>
> **[2:24](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=144)** And all of this is just modeling the behavior of trying to load data into our application when that data might take a second or two to load.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (3), es6 (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=0)** - [Instructor] Thank you so much for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=3)** I hope you'll start to incorporate these features into your own projects.
>
> **[0:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=7)** The next steps I would recommend are to check out some of the libraries that exist to help you build modern web applications, things like [[React.js|React]] and [[Vue.js|Vue]] and [[Angular]] and even Svelte.
>
> **[0:17](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=17)** These are libraries and frameworks that you can use to build your own applications.
>
> **[0:22](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=22)** You're going to see a lot of the features used for this course used in combination with those libraries and frameworks.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=28)** From here, I'd encourage you to stay on top of the latest developments in browser compatibility, as well as future plans from the TC39 committee.
>
> **[0:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=37)** New features, they're not just trendy.
>
> **[0:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=40)** They're intended to help save you time and to solve problems for [[JavaScript]] developers.
>
> **[0:45](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=45)** They help us deal with asynchronous behavior.
>
> **[0:48](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=48)** They help us write code faster.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=50)** And they help other developers read our code more easily.
>
> **[0:53](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=53)** JavaScript is evolving to handle the challenges of the modern web.
>
> **[0:57](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=57)** I hope you have fun continuing to chase the wave.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[React.js|React]] (1), [[Vue.js|Vue]] (1), [[Angular]] (1)
> **Env Vars:** tc39 (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Eve Porcello]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript
- ECMAScript

## Path Context

### In [[Become a Full-Stack Web Developer]]
← [[Search Techniques for Web Developers]] | **5 of 12** | [[Git Essential Training]] →

### In [[Become a JavaScript Developer]]
← [[Learning The Javascript Language]] | **3 of 13** | [[JavaScript- Scope]] →

## Appears In

- [[Become a Full-Stack Web Developer]]
- [[Become a JavaScript Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning Functional Programming with JavaScript ES6+]] — JavaScript, ECMAScript
- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript

---

[↑ Back to top](#)