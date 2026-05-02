---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-scope
url: "https://www.linkedin.com/learning/javascript-scope"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 12/3/2025
learners: 31352
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGZbTfGk5Crsw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711387718548?e=2147483647&amp;v=beta&amp;t=oBAlaEyekf198M3OTXjIjPmF6lur_jQUzcxIZPDzU_g"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Become a JavaScript Developer]]'
prev_courses:
  - '[[Learning ECMAScript 6+ (ES6+)]]'
next_courses:
  - '[[JavaScript- Prototypes]]'
path_nav: '[{"path":"Become a JavaScript Developer","position":4,"total":13,"prev":"Learning ECMAScript 6+ (ES6+)","next":"JavaScript- Prototypes"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/JavaScript-%20Scope.md)

![JavaScript: Scope](https://media.licdn.com/dms/image/v2/D4E0DAQGZbTfGk5Crsw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711387718548?e=2147483647&amp;v=beta&amp;t=oBAlaEyekf198M3OTXjIjPmF6lur_jQUzcxIZPDzU_g)

# JavaScript: Scope

> JavaScript scope determines how variables can be accessed throughout your code. There are two scopes: global and local. Global variables are accessible from anywhere; local variables are accessible only from within the function or block the variables are declared. Scope can be confusing, especially when factors such as hoisting and closures enter the mix. This course provides a thorough introducti

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope) | 1h 15m | Intermediate | 31K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn how to properly scope your variables](#learn-how-to-properly-scope-your-variables)
  - [Course prerequisites](#course-prerequisites)
- [**1. Introduction to Variable Scope**](#1-introduction-to-variable-scope) (6 videos)
  - [Course setup](#course-setup)
  - [What is scope in JavaScript?](#what-is-scope-in-javascript)
  - [What are closures?](#what-are-closures)
  - [The different types of scope](#the-different-types-of-scope)
  - [Hoisting explained](#hoisting-explained)
  - [CoderPad introduction](#coderpad-introduction)
- [**2. Global Variables**](#2-global-variables) (1 videos)
  - [What are global variables?](#what-are-global-variables)
- [**3. Local Variables**](#3-local-variables) (1 videos)
  - [What are local variables?](#what-are-local-variables)
- [**4. Block-Scoped Variables**](#4-block-scoped-variables) (2 videos)
  - [What are block-scoped variables?](#what-are-block-scoped-variables)
  - [Explore block-scoped variables with code](#explore-block-scoped-variables-with-code)
- [**Conclusion**](#conclusion) (2 videos)
  - [JavaScript strict mode](#javascript-strict-mode)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Learn how to properly scope your variables
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=0)** - [Emmanuel] Have you heard about local, global, and block scope variables, and don't know how they work or what they mean?
>
> **[0:07](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=7)** Are you coming from another language, and are trying to understand how variable scopes are used in JavaScript?
>
> **[0:13](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=13)** If you've answered yes to any of these questions, you've come to the right place.
>
> **[0:18](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=18)** In this course, we'll introduce JavaScript variable scopes, and how they work, how to define them, all their related terminology, and more.
>
> **[0:26](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=26)** Hi, I'm Manny Henri, and I've been using JavaScript for a long time.
>
> **[0:31](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=31)** And it is my pleasure to introduce you to this often overlooked subject that is variable scope.
>
> **[0:37](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=37)** We'll first go through an overview of what are variable scopes, the different types, and hoisting.
>
> **[0:42](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=42)** Then, we'll explore in depth what are global variables, and put it in practice.
>
> **[0:48](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=48)** Next, we'll do the same for local, and finally, for block scope variables.
>
> **[0:53](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=53)** So if you're ready to deepen your knowledge of JavaScript by exploring variable scopes, open up your favorite editor, and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), next (1)
> **Speakers:** - [emmanuel] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/course-prerequisites?u=76281980&t=0)** - [Instructor] This course is considered an intermediate to advanced course.
>
> **[0:04](https://www.linkedin.com/learning/javascript-scope/course-prerequisites?u=76281980&t=4)** We won't go over any basics of the language or syntax use, therefore, prior JavaScript knowledge, or at least a good understanding of functions, variables, types, object literals, and most of the basic syntax use is important to be able to follow along.
>
> **[0:19](https://www.linkedin.com/learning/javascript-scope/course-prerequisites?u=76281980&t=19)** If you've never done any JavaScript or would like to learn more on the subject, take a look at our library for the Essentials course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Variable Scope

[↑ Back to Table of Contents](#table-of-contents)

#### Course setup
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=0)** - [Instructor] As we work through our examples, we'll need to test our code on the browser and see it in action.
>
> **[0:06](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=6)** If you're using VS Code, and would like to have the same tools I'm using, follow along.
>
> **[0:11](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=11)** Otherwise, feel free to skip this video or install similar tools in your editor of choice.
>
> **[0:17](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=17)** Open up Visual Studio Code and go to the extensions tab.
>
> **[0:23](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=23)** Find the extension Live Server.
>
> **[0:26](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=26)** This is the one we need to install.
>
> **[0:29](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=29)** When you have the extension Live Server all you have to do is click on the little button at the bottom of your screen here to start a Live Server right away, without doing anything like NPM servers and stuff like that.
>
> **[0:41](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=41)** It will start your server directly from VS Code.
>
> **[0:44](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=44)** Let's go ahead and install this and then reload.
>
> **[0:48](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=48)** That's going to create a new folder on our desktop so let's get out of VS Code, create a new folder and we'll call this scope.
>
> **[0:58](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=58)** We'll open that inside VS Code, so let's go back to VS Code go to Explorer, click on Open Folder, go to Desktop and open scope.
>
> **[1:08](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=68)** Inside of that directory we'll create two new files.
>
> **[1:12](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=72)** One will be the index.html and the second one will be a JavaScript file, so let's call this the index.js.
>
> **[1:23](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=83)** Let's call this welcome.
>
> **[1:24](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=84)** What we'll do inside of the index we'll create a new HTML document and we can use the Emmet shortcut doing doc, and then do a tab, and we'll get our HTML template completely done for us.
>
> **[1:37](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=97)** What we could do after that is at a script tag, right here, inside of the body, you can add a script tag like that and leverage Emmet one more time.
>
> **[1:49](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=109)** What we'll do is put the source as the index.js
>
> **[1:58](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=118)** and let's put a little title here so Javascript scope.
>
> **[2:03](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=123)** And save all this and then let's do a console.log to validate that everything is working fine.
>
> **[2:10](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=130)** Inside of our index, we'll do, Hello.
>
> **[2:15](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=135)** Let's save that.
>
> **[2:17](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=137)** Let's go to the index and do Shift + Command + p and type live, and click on Open Live Server.
>
> **[2:29](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=149)** To bring up the developer tools in Chrome for Mac it's Command + Shift + i, and for Windows it's it's Control + Shift + i.
>
> **[2:40](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=160)** Once you have that, let's take a look at the console, that's okay.
>
> **[2:44](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=164)** Them we have our Hello, so this means that our server is working.
>
> **[2:48](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=168)** If you wanna close the server all we have to do is click on the port below, here.
>
> **[2:52](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=172)** If you wanna start it, usually you should have something to start it here.
>
> **[2:56](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=176)** So let's stop it, now you have the go live.
>
> **[3:00](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=180)** The first time you install the Live Server, it's a possibility that you're not going to see this here if you don't, simply do Shift + Command + p to bring up the commands inside of VS Code and then look for live and then open with Live Server and it's going to start your server again.
>
> **[3:17](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=197)** Awesome, so now we're fully set up with Live Server and ready to learn how JavaScript scoping works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (3), [[npm]] (1), [[Windows]] (1)
> **UI Navigation:** go to (4), click on (4)
> **Tools:** vs code (6), visual studio (1)
> **Prerequisites:** install (4), set up (1)
> **File Paths:** index.js (2), index.html (1)
> **Env Vars:** html (2), npm (1)
> **CLI Commands:** find (1), npm (1)
> **Cross-References:** go back to (1)

#### What is scope in JavaScript?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=0)** - [Instructor] For some, JavaScript's code can be a bit intimidating but it's very simple.
>
> **[0:05](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=5)** Put in its simplest terms, scope determines accessibility or visibility of the variable.
>
> **[0:11](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=11)** Depending where and what type of scope we are using it will determine if your variable is available when you call it.
>
> **[0:18](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=18)** Let's type some code to visualize what scope is.
>
> **[0:21](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=21)** Let's remove the console log here and let's add a warrior, so var warrior = Ninja.
>
> **[0:32](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=32)** Then let's create a function.
>
> **[0:34](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=34)** We'll create a function with a const this time, and we'll call this one screamWarrior and we won't take any parameters.
>
> **[0:45](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=45)** Inside of that function, we'll define another variable, warrior2 = Samurai.
>
> **[0:55](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=55)** Then inside of the function, we'll console.log warrior and warrior2 and outside of the function definition we'll run the function and then we'll console.log the warrior1 or the warrior and warrior2 and you can save this.
>
> **[1:18](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=78)** When you look into this code here, you have the warrior and the warrior2 variables defined, but because they are defined with different types, but also in different places, their scope or accessibility is different.
>
> **[1:31](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=91)** I'm also using var in this example and we'll explore the differences between var, let and const in this course.
>
> **[1:38](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=98)** But if you've been following most of my courses, and also using the latest JS syntax you've been using let and const and var is rarely used.
>
> **[1:47](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=107)** Let and const are part of the block scope variables and we're introducing ES6, it is what most JS developers use nowadays.
>
> **[1:55](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=115)** But it's important to get a glimpse in the past as well, as there is still lots of legacy code using var, and you need to understand their nuances.
>
> **[2:04](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=124)** Related to scope, we'll also explore what closures are and what is all these things, so you understand what happens when variables are hoisted to the top of your code.
>
> **[2:13](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=133)** So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** screamwarrior (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### What are closures?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=0)** - [Instructor] Closures are an inner function that has access to external variables.
>
> **[0:04](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=4)** By creating a function inside of a function, we create a closure.
>
> **[0:09](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=9)** So let's do some code to understand and visualize this.
>
> **[0:12](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=12)** So we'll leverage some of the code that we did on the last video, and the first thing we'll do is simply remove the console.log here, and then do a function inside of that function.
>
> **[0:22](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=22)** We'll return an object, and inside of that object we'll have a function called shootWarrior, which will return a console.log.
>
> **[0:35](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=35)** And this console.log will have warrior, and then warrior2.
>
> **[0:41](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=41)** So if I comment the console.log on line 15, and I save this, and I go back to Chrome here, I shouldn't have anything here, so what we need to do is create another variable from the function here, which is const, and let's call this one newWarrior, and then pass the function screamWarrior, and then use newWarrior, and then run that function.
>
> **[1:11](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=71)** Because that function is part of an object here, so we need to create a new variable which holds that function, and then be able to use the shootWarrior.
>
> **[1:20](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=80)** Now if I run this, and I go back here, I should have Ninja Ninja.
>
> **[1:26](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=86)** And let's change this to warrior2 actually.
>
> **[1:31](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=91)** So I should have actually Ninja and Samurai.
>
> **[1:34](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=94)** So let's go back here.
>
> **[1:35](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=95)** So this is the expected behavior, and here's why.
>
> **[1:40](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=100)** Inside of that function here, we have access to a global variable called warrior, and inside of that function we also have access to warrior2, because it's part of that function.
>
> **[1:51](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=111)** But if we run this console.log here, we don't have access to warrior2.
>
> **[1:57](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=117)** So if I save that, I'm gonna have an error.
>
> **[2:00](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=120)** And this is normal.
>
> **[2:03](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=123)** So as you can see, we can access warrior2 outside of that function, which allows us to make this variable private in some ways.
>
> **[2:10](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=130)** So in summary, closures are great ways to use variables without making them global, or accessible everywhere.
>
> **[2:18](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=138)** As a side note, you'll see closures used everywhere in popular libraries for the same reasons we've explained here.

> [!info]- Semantic Content
>
> **Code Identifiers:** shootwarrior (2), newwarrior (2), screamwarrior (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### The different types of scope
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=0)** - [Instructor] In JavaScript there are a few different types of scope, local, global and block scope.
>
> **[0:06](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=6)** We'll explore each one in depth with code examples but, in short, local scope is when a variable object or function is only available locally to a function, like the warrior2 variable.
>
> **[0:18](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=18)** Like here.
>
> **[0:20](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=20)** Then you have global scope.
>
> **[0:21](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=21)** When variables, objects or functions are available to all.
>
> **[0:25](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=25)** For example, our variable warrior1 or the function screamWarrior is defined and available in the global scope.
>
> **[0:33](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=33)** Like this one here and the actual function here.
>
> **[0:38](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=38)** Then you have blocks scope variables.
>
> **[0:40](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=40)** Declare with let and const which are available within the innermost block they are surrounded by.
>
> **[0:47](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=47)** So if we look at our current code, the warrior2 and newWarrior are block scope variables and are accessible in the block they are surrounded by.
>
> **[0:55](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=55)** Like this one here.
>
> **[0:58](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=58)** This one here and also this one here.
>
> **[1:01](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=61)** This one is available in this block.
>
> **[1:05](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=65)** This one is available in this block, so, in the whole file and the same for this one here.
>
> **[1:10](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=70)** We'll cover later on what is the difference between the let and the const variable.
>
> **[1:15](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=75)** We'll also explore all the types in depth over the course of the following chapters.
>
> **[1:20](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=80)** We drive the point home and make sure you are absolutely comfortable with all these types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** screamwarrior (1), newwarrior (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Hoisting explained
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=0)** - [Instructor] Hoisting is often misunderstood so let's focus some time on this mysterious word and what does it mean.
>
> **[0:06](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=6)** In short, hoisting is JavaScript's behavior of moving all declarations to the top of its scope.
>
> **[0:13](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=13)** When you declare a variable at the bottom of your file it will be hosted or moved to the top of its scope when the code is compiled.
>
> **[0:21](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=21)** Let me demonstrate with some code.
>
> **[0:23](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=23)** I'm gonna put some notes here so you understand what's happening.
>
> **[0:26](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=26)** Let's remove the declaration here and simply define what warrior is here.
>
> **[0:32](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=32)** We need to declare it somewhere.
>
> **[0:34](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=34)** Warrior is defined here.
>
> **[0:39](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=39)** Then, let's put a note here.
>
> **[0:44](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=44)** And this is for closure, so I'm gonna write a note here for you guys.
>
> **[0:48](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=48)** Wrap in a function now is a closure, there you go.
>
> **[0:56](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=56)** Let's declare our warrior way below, down here.
>
> **[0:59](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=59)** What I'm gonna do is leave those two here and then do a console.log for warrior and warrior3.
>
> **[1:11](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=71)** But the third warrior hasn't been declared yet, so let's go ahead and first declare this warrior.
>
> **[1:17](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=77)** Let's do a var warrior.
>
> **[1:20](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=80)** So, warrior is declared here.
>
> **[1:25](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=85)** In theory, if you understand the theory of JavaScript, everything runs in order.
>
> **[1:30](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=90)** If I'm declaring warrior here and it's defined up there, it shouldn't work, but that's what hoisting is.
>
> **[1:38](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=98)** Hosting, actually because you're declaring something, without initializing it right away, it's moved to the top and then its value is assigned here and then it would work.
>
> **[1:49](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=109)** This is what hosting is.
>
> **[1:52](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=112)** If I did something like, if I'm doing var warrior3 = Viking here, it will show undefined.
>
> **[2:04](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=124)** The reason being, is because I am initializing the value as well as declaring.
>
> **[2:09](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=129)** So, if I'm declaring first and then it's assigned here, the value's assigned here, then it's gonna work.
>
> **[2:18](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=138)** This is what hoisting is.
>
> **[2:19](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=139)** Hoisting, if you declare anything at the bottom, if you declare a function way below and then actually run it at the top, it's going to work.
>
> **[2:28](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=148)** This is what hoisting is.
>
> **[2:30](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=150)** Let's go ahead and actually remove that one here.
>
> **[2:34](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=154)** And save this and see this in action.
>
> **[2:37](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=157)** Let's go to our browser and I'm showing Ninja Samurai, as expected, so this is the first function here.
>
> **[2:44](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=164)** The console.log that we're seeing here, so Ninja Samurai.
>
> **[2:48](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=168)** Then we have another console.log, which is supposed to show me Ninja and the warrior3, Viking.
>
> **[2:56](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=176)** If we go here we see Ninja and then undefined.
>
> **[3:00](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=180)** That isn't working.
>
> **[3:02](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=182)** So, if I went back to my code and instead of initializing my variable here, I would simply assign it at the top, but actually declare it at the bottom.
>
> **[3:12](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=192)** So, let's change this, let me just do a copy and paste of this at the top.
>
> **[3:22](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=202)** And then remove the assignment, since we're doing it here and save this.
>
> **[3:30](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=210)** Then go back to our browser, now I'm seeing Viking.
>
> **[3:33](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=213)** This is all due because of hoisting.
>
> **[3:36](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=216)** Hosting actually grabs that declaration and looks for an assignment and because it's done at the top it's gonna work because this has been already pushed to the top, because of hoisting.
>
> **[3:48](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=228)** All right, so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Microsoft Word|Word]] (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### CoderPad introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/coderpad-introduction?u=76281980)


### 2. Global Variables

[↑ Back to Table of Contents](#table-of-contents)

#### What are global variables?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=0)** - [Narrator] Global variables are any functions, objects, variables that are declared outside of functions.
>
> **[0:06](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=6)** And when we say global, we mean they are accessible throughout your file.
>
> **[0:10](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=10)** And this is a good time to introduce the variable, lifetime.
>
> **[0:14](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=14)** A term you may hear from time to time.
>
> **[0:16](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=16)** The variable lifetime is when the variable is deleted after it has been declared.
>
> **[0:21](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=21)** In the case of global variables, it is available when declared and deleted when the application is closed, in most case when the browser is closed.
>
> **[0:30](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=30)** And for that reason, it is often not recommended to use global variables.
>
> **[0:35](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=35)** Let's say for example you initialize a global variable with user data.
>
> **[0:38](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=38)** This can be a privacy or security issue.
>
> **[0:41](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=41)** As someone could literally pull data from this variable in the browser.
>
> **[0:45](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=45)** Two nuances to global variables.
>
> **[0:47](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=47)** If you don't declare a variable and you assign a value to a variable inside of a function, it automatically becomes globally available.
>
> **[0:56](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=56)** Another danger, it is always better to declare your variables.
>
> **[1:00](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=60)** But if you use strict mode in JavaScript, they won't be automatically global.
>
> **[1:04](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=64)** Let's take a look at all this in code.
>
> **[1:08](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=68)** Let's create a new variable that we'll call a warrior.
>
> **[1:12](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=72)** And this one we'll use a const, and we'll create an object, that will hold properties for this warrior.
>
> **[1:20](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=80)** So a name, Jujin Take.
>
> **[1:28](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=88)** Let's give him a type.
>
> **[1:30](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=90)** He's a ninja.
>
> **[1:31](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=91)** Let's give him a weapon.
>
> **[1:36](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=96)** And let's give him a shuriken.
>
> **[1:40](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=100)** And finally let's give him some agility.
>
> **[1:43](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=103)** And let's do 79.
>
> **[1:46](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=106)** And let's correct a little typo we have here on the weapon.
>
> **[1:51](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=111)** Awesome.
>
> **[1:53](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=113)** Right now if we look at this guy here, well this guy is globally scoped.
>
> **[1:59](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=119)** So it means that it is available all throughout this file, or the global scope.
>
> **[2:06](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=126)** Now if we actually go to the function, this function is also global in scope.
>
> **[2:12](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=132)** Because it is declared in the global scope here.
>
> **[2:15](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=135)** It's not declared inside of a function, so this is global as well.
>
> **[2:21](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=141)** Now let's remove that comment here.
>
> **[2:25](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=145)** Let's define a variable without declaring it.
>
> **[2:28](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=148)** We'll do warrior three, and put viking to it.
>
> **[2:36](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=156)** If you look at this, this is the nuance of global scope.
>
> **[2:40](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=160)** If we declare a variable here, if we do const, let, or var warrior two.
>
> **[2:47](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=167)** This is locally scoped.
>
> **[2:50](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=170)** But this is the nuance of global scope.
>
> **[2:53](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=173)** If we actually do not use let, or const or var, when we're declaring this variable inside, it will automatically be globally scoped.
>
> **[3:06](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=186)** So be very very careful with that and always declare your variables.
>
> **[3:11](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=191)** In this case, this one will be globally available.
>
> **[3:14](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=194)** And I'll show you in a second.
>
> **[3:16](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=196)** If we go to our console logs in here, and let's remove that code for now.
>
> **[3:23](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=203)** If you wanna take a look at that code, and if you wanna keep it, go back to the exercise files, we have copies of that code.
>
> **[3:30](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=210)** If we remove this, we can actually console log warrior, and also warrior three.
>
> **[3:36](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=216)** Because warrior three is in here, but it hasn't been declared and therefore is automatically declared as a global variable.
>
> **[3:43](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=223)** Let's save that, and let's go back here.
>
> **[3:46](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=226)** And as you can see, we have not only our object here with all the properties, but we also have at the end a samuri which is the local variable here.
>
> **[3:55](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=235)** And that's this function here.
>
> **[3:56](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=236)** But if we go back to the second one, we shouldn't see viking.
>
> **[4:01](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=241)** Why is viking here?
>
> **[4:02](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=242)** Like I said, because this variable hasn't been declared before it is initialized.
>
> **[4:09](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=249)** Then this is automatically declared as a global variable.
>
> **[4:14](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=254)** Now you could do something that would change this automatically.
>
> **[4:19](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=259)** If you use strict in your JavaScript, if you do this syntax, use strict, and you save.
>
> **[4:28](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=268)** Now this variable here will not be available globally.
>
> **[4:32](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=272)** If we save this, we're gonna get an error into our code.
>
> **[4:36](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=276)** Warrior three is not defined.
>
> **[4:39](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=279)** Whatever you do, declare your variables.
>
> **[4:43](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=283)** Always use let, const, or var.
>
> **[4:45](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=285)** And I would recommend to use let or const, since this is the latest syntax with the S6.
>
> **[4:51](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=291)** But if you are starting to use or declare your variables without let inside of a function, then make sure you use strict so you catch these errors.
>
> **[5:01](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=301)** But I would always suggest to declare your variables correctly with the little syntax const, let, or var first.
>
> **[5:09](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=309)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[JavaScript]] (2), application (1), [[Privacy]] (1), [[Security]] (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)


### 3. Local Variables

[↑ Back to Table of Contents](#table-of-contents)

#### What are local variables?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of global variables, what are local variables?
>
> **[0:05](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=5)** They are variables declared inside of a function.
>
> **[0:08](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=8)** I did mention that a couple times already, but we'll drive the point home in this video.
>
> **[0:13](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=13)** In other words, anything you declare inside of a function is a local variable.
>
> **[0:19](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=19)** Local variable's lifetime is from when the function is declared to when the function is completed.
>
> **[0:26](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=26)** Therefore, when you have a variable inside of a function, when that function has completed its code, then that variable is no longer available.
>
> **[0:34](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=34)** Also, since the local variable is deleted when the function is completed, many functions can have the same variable name.
>
> **[0:42](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=42)** Let's explore how the syntax looks when dealing with local variables.
>
> **[0:47](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=47)** Let's remove all this code here and let's start from scratch.
>
> **[0:51](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=51)** Let's create a new variable called screamwarrior, which is a function, and then let's declare two variables inside of that function.
>
> **[1:01](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=61)** The first one is called warrior1 and this one is a Ninja.
>
> **[1:07](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=67)** Again, we're hard on the warriors here and then let's declare a second one, which is called warrior2.
>
> **[1:16](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=76)** This one is Samurai.
>
> **[1:20](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=80)** Then, what we'll do is return at the end of that function with template strings, our warriors are warrior1
>
> **[1:34](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=94)** and warrior2.
>
> **[1:41](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=101)** And then we could log this.
>
> **[1:44](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=104)** Let's log and run our function all at once.
>
> **[1:49](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=109)** These functions, when you actually run this, and let's go to the browser to take a look.
>
> **[1:54](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=114)** Everything works perfectly.
>
> **[1:55](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=115)** So, all warriors are a Ninja and Samurai because these variables are actually available here and we're returning this with the variables inside of that function.
>
> **[2:05](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=125)** When we run the function, these variables are actually printing in the console.log because they're available when we actually return it.
>
> **[2:13](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=133)** If we did something like this, console.log, and try to get warrior1 or warrior2 on the console.log without leveraging the actual function, let's go back to the browser, we're gonna get an error because warrior1 is not defined.
>
> **[2:31](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=151)** If we add warrior1 define at the top or the global scope, then it would say warrior2 not defined.
>
> **[2:38](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=158)** Let's type a note here, so you can keep this into your notes.
>
> **[2:42](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=162)** If you wanna go back to the exercise files, you'll see this.
>
> **[2:45](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=165)** Warrior1 and warrior2 aren't available globally
>
> **[2:55](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=175)** and that's why we're running into issues here.
>
> **[2:57](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=177)** Let me come and tab that lower guy here.
>
> **[3:02](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=182)** The second thing I wanna show you in the local variables.
>
> **[3:05](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=185)** Because these variables are inside or locally scoped, we could use or if we could do a second function and do the exact same thing with the exact same variable.
>
> **[3:16](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=196)** We could do screamwarrior2 and then inside of this function, use the same variables again and change those variables to something else.
>
> **[3:25](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=205)** Let's say Viking for this guy and then for this guy let's do a Soldier, and then we could do screamwarrior2 and then screamwarrior1 or screamwarrior, the first function.
>
> **[3:42](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=222)** Those two functions are gonna run fine because these are locally scoped, so they're available for this function, but they're not available outside.
>
> **[3:51](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=231)** There's no impact from one to the other.
>
> **[3:55](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=235)** If we save this, we should see the two sentences.
>
> **[3:57](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=237)** Warriors are Viking and Soldier, warriors are Ninja and Samurai.
>
> **[4:03](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=243)** This is a look at local variables.
>
> **[4:06](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=246)** Let's move on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is called (2), in other words (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1), exercise files (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Block-Scoped Variables

[↑ Back to Table of Contents](#table-of-contents)

#### What are block-scoped variables?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=0)** - [Instructor] The last item we need to cover is block scope variables.
>
> **[0:03](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=3)** They were introduced with ES6 and uses the let and const keywords.
>
> **[0:08](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=8)** If we go back to local variables they are available within the function they are declared in.
>
> **[0:13](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=13)** But with block scope variables they are only available inside of the block they are declared.
>
> **[0:19](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=19)** For example, if we take a look at this code and this code, they are only available within this block of code.
>
> **[0:27](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=27)** So, if we declare a variable inside of an if statement in a function, this variable won't be available in the function outside of the if statement because it is block scoped, inside of the if statement and so on, so forth if you have multiple, nested functions.
>
> **[0:45](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=45)** When we want to declare a variable, which one do we use, let or const?
>
> **[0:51](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=51)** What is the different in between them?
>
> **[0:53](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=53)** In short, let allows to mutate or update the variable as you please.
>
> **[0:58](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=58)** While const is immutable, or you can't change the value once it is initialized.
>
> **[1:05](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=65)** If we took a look at this variable here, the warriorsPerPlatoon, because it is a let we could reassign a number to this variable.
>
> **[1:13](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=73)** We could say something like, warriorsPerPlatoon and do 70 instead of 60.
>
> **[1:19](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=79)** If this was a const, we couldn't do this and, in fact it would actually return an error if we did this.
>
> **[1:28](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=88)** This might be a bit confusing, so let's explore this further, in code, in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Code Identifiers:** warriorsperplatoon (2)
> **Cross-References:** go back to (1), in the next (1)
> **Env Vars:** es6 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Explore block-scoped variables with code
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=0)** - [Instructor] All right so let's explore the block scope variables a little bit further in this video.
>
> **[0:05](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=5)** So let's remove all this code and let's start from scratch.
>
> **[0:09](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=9)** The first thing I'm gonna do is declare a let variable, so let's do a warrior one and let's assign again the ninja and let's do a const right after that and let's do a warrior two.
>
> **[0:27](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=27)** Let's call this guy viking.
>
> **[0:31](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=31)** So if I console log these two right now and because they are in my scope I shouldn't have any issues, so let's start with that.
>
> **[0:39](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=39)** So let's save, let's go back here, and we have ninja and viking, so we're good.
>
> **[0:46](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=46)** Then if we want, and I'm going to be proactive and this will return an error.
>
> **[0:55](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=55)** If we were to reassign a warrior two, so let's do warrior two and reassign it to, let's say samurai, and then console log warrior two we'll have an issue, because this is a variable that can not be mutated.
>
> **[1:17](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=77)** So let's go here and we got assignment to constant variable error.
>
> **[1:21](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=81)** So we can't do this.
>
> **[1:23](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=83)** This is a const, but if we did this to let's say warrior one and then console logged warrior one again because it's a mutable variable we have no issue here.
>
> **[1:36](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=96)** So let's save this, let's go back here, and we are good.
>
> **[1:40](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=100)** So let me give you another example.
>
> **[1:42](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=102)** So let's create a function called screen warrior, the same function we've been using since the beginning and then inside let's do an if statement.
>
> **[1:54](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=114)** So let's do if warrior two, I think there's a little typo here, equals viking then return this or do whatever is in there.
>
> **[2:13](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=133)** So what we're gonna do is also create a new variable.
>
> **[2:17](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=137)** We're gonna do a let warrior three equals infantry solider.
>
> **[2:27](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=147)** Let's do a console log and let's do template strings, our army or consists of warrior one.
>
> **[2:41](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=161)** Let's copy and paste that little portion of the code comma paste and then do two and then let's do the same and warrior three exclamation mark.
>
> **[2:59](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=179)** Okay, so now if warrior two is a viking, so that will be met with a true then it is going to create this variable that is block scope again, because we're using a let and we're doing this inside of the if statement here.
>
> **[3:18](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=198)** It's not going to be available either here or outside, because it's block scope.
>
> **[3:25](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=205)** So this is only available within that block here.
>
> **[3:31](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=211)** I can show you by doing a console log right after of and we'll comment that for now, because we want to make sure that our function works first but then what you could do is do a warrior three and this is not going to be available either here or if we copy and paste that outside there either once we run our function.
>
> **[3:56](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=236)** So let's go and run the function and save and let me comment that for now, because I want to show you while it works and then we'll show you that this variable here that is blocks scope, so only available inside of that block cannot be used here or there.
>
> **[4:18](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=258)** So let's first start with this and save and let's go back to our browser.
>
> **[4:25](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=265)** Now our army consists of samurai, viking, and infantry solider.
>
> **[4:29](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=269)** So as you can see in here we have access to warrior one, warrior two, and warrior three, which has been declared inside of the block, but if we were to comment out the console log here and save and go back here we would have an issue because warrior three is not defined or not accessible there.
>
> **[4:51](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=291)** So let's comment this line and then let's comment out in here in the global scope, save that and we get the same result.
>
> **[5:02](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=302)** So as you can see when we use let or const it's only available within the block scope it is part of.
>
> **[5:09](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=309)** So right now these two are available across here, because they are declared at the top level.
>
> **[5:15](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=315)** This guy here is only available within the if statement, because it is declared here.
>
> **[5:20](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=320)** If I was to declare something like let warrior four equals, let's call this guy just cannon shooter and here use warrior four, save that, and let's comment this guy here so we don't get any errors.
>
> **[5:51](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=351)** Let's go back to our browser then we have access to this guy because it is within that block scope here, so it's within the scope of the function screen warrior and it's used inside there.
>
> **[6:03](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=363)** If I use warrior four here we'd have an issue.
>
> **[6:09](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=369)** So let's save and then go back here and we have a reference error.
>
> **[6:15](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=375)** So this is how block scope works.
>
> **[6:17](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=377)** So when you actually use let and const make sure that you're using it or referencing it inside of the same block.
>
> **[6:26](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=386)** Let's move on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### JavaScript strict mode
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=0)** - [Instructor] Let's delve into JavaScript strict mode.
>
> **[0:03](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=3)** This feature allows you to place your entire script or individual functions in a strict operating context.
>
> **[0:10](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=10)** Let's find out what that means.
>
> **[0:12](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=12)** Strict mode is a way to catch common coding issues and enforce stricter parsing and error handling in your JavaScript.
>
> **[0:21](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=21)** By opting into strict mode, you can avoid silent errors and ensure you coded the errors to best practices.
>
> **[0:27](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=27)** Using strict mode helps in multiple ways.
>
> **[0:31](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=31)** It catches common coding mistakes and unsafe actions, such as assigning to undeclared variables.
>
> **[0:38](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=38)** It prevents the use of keywords reserved for future JavaScript versions, and stop you from doing things that are generally considered bad practices.
>
> **[0:47](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=47)** To enable strict mode, simply add use strict.
>
> **[0:51](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=51)** So for example, in this function here, what will you need to do is add use strict like so.
>
> **[1:00](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=60)** And then all these errors here would essentially be bad and would actually be notified.
>
> **[1:08](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=68)** So if you create an unintendedGlobal, you would actually get an error here.
>
> **[1:14](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=74)** If you console this, which basically refers to the window, it would get you an error.
>
> **[1:19](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=79)** Or if you are deleting a variable, not allowed in strict mode, you would get an error here.
>
> **[1:26](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=86)** Or if you're duplicating a parameter name, you would actually get these errors.
>
> **[1:31](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=91)** So here, so param, param, and then you're using it, it would return something else.
>
> **[1:38](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=98)** So in just a few minutes, you've learned how strict mode can make your JavaScript cleaner, more reliable, and more secure.
>
> **[1:46](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=106)** Start using it today to avoid common pitfalls and enhance your coding standards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), feature (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** such as (1), for example (1)
> **Code Identifiers:** unintendedglobal (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980&t=0)** - [Emmanuel] Hopefully you've gained a bit more knowledge on what are JavaScript globals, local, and lexical variables and how to define and use them.
>
> **[0:08](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980&t=8)** Considering this subject has been an advanced one, the next step could be any JavaScript knowledge you may not have at this point.
>
> **[0:15](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980&t=15)** If you need more knowledge on any advanced JavaScript subjects, look for those subjects in our library.
>
> **[0:22](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980&t=22)** Thanks for taking my course, and I'll see you in a bit!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), next (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Become a JavaScript Developer]]
← [[Learning ECMAScript 6+ (ES6+)]] | **4 of 13** | [[JavaScript- Prototypes]] →

## Appears In

- [[Become a JavaScript Developer]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)