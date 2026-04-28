---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-patterns-2
url: "https://www.linkedin.com/learning/javascript-patterns-2"
duration_minutes: 117
duration: 1h 57m
level: Intermediate
updated: 10/28/2025
learners: 31352
skills:
  - Software Design Patterns
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQHK-x5Xftt6NQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1587058479192?e=2147483647&amp;v=beta&amp;t=U0Gt3GbuVOnDnX2qplT7EQa2yol6gme3ou1amwg-D4A"
linkedin_topic: Software Development
learning_paths:
  - '[[Improve Your JavaScript Language Skills]]'
prev_courses:
  - '[[JavaScript- Maps and Sets]]'
next_courses:
  - '[[JavaScript Patterns- Modern Solutions to Common Challenges]]'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":7,"total":8,"prev":"JavaScript- Maps and Sets","next":"JavaScript Patterns- Modern Solutions to Common Challenges"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-design-patterns
  - skill/javascript
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Patterns.md)

![JavaScript: Patterns](https://media.licdn.com/dms/image/v2/C4D0DAQHK-x5Xftt6NQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1587058479192?e=2147483647&amp;v=beta&amp;t=U0Gt3GbuVOnDnX2qplT7EQa2yol6gme3ou1amwg-D4A)

# JavaScript: Patterns

> For the past two decades, programmers have structured both their code and their conversations about code around the patterns first described in Design Patterns, the classic Gang of Four book. JavaScript programmers have participated in these conversations, but the patterns discussed mostly fit in the world of orthodox object-oriented programming. In this course, Emmanuel Henri explains how these p

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2) | 1h 57m | Intermediate | 31K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Introduction** (5 videos)
- **3. 2. Creational Patterns** (6 videos)
- **4. 3. Structural Patterns** (9 videos)
- **5. 4. Behavioral Patterns** (9 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### JavaScript design patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=0)** - Have you been looking for a place to understand this mystical term that is JavaScript design patterns?
>
> **[0:06](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=6)** Have you been looking for a way to better understand how to have industry standard best practices in your code?
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=12)** If you answered yes to any of these questions, you've come to the right place.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=16)** In this course, we'll take a look at the most common patterns in JavaScript and demystify their purpose and some code examples for practice.
>
> **[0:25](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=25)** Hi, I'm Emmanuel Henri, and understanding design patterns is always something we should all aspire to, and it'll be my pleasure to share my knowledge around this often misunderstood subject.
>
> **[0:36](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=36)** We'll first get started with some basic terminology to get you off the ground.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=41)** Then we'll move onto the creational patterns such as singleton and more.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=46)** Next, we'll explore the structural patterns such as mixins and decorator.
>
> **[0:51](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=51)** And finally, we'll take a look at the behavioral patterns like the state observer pattern and more.
>
> **[0:59](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=59)** So if you're ready to master all kinds of design patterns in your JavaScript code, grab your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Analogies:** such as (2)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-you-should-know?u=76281980&t=0)** - For this course, you should have a good foundation with JavaScript syntax, especially around ES6 and above, as many of the patterns explored will be written in this version.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/what-you-should-know?u=76281980&t=10)** If you're not familiar with scoping, classes, and many of the initial programming foundations of the language, stop this video, and take a few JavaScript courses.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/what-you-should-know?u=76281980&t=20)** Besides this, you can use any type of editor you wish, but if you want to follow along in the same editor I use, get VS Code.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Env Vars:** es6 (1)
> **Tools:** vs code (1)
> **Speakers:** - for (1)


### 2. 1. Introduction

#### What is a pattern?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=0)** - Before we get started on our design patterns journey, what is it exactly?
>
> **[0:05](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=5)** The academic definition is a general, reusable solution to a commonly occurring problem within a given context in software design.
>
> **[0:14](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=14)** Oof, in simple words, it's a way that has been defined as a proper approach to resolve common problems in code.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=21)** If that still doesn't make sense, think of you you've learned how to divide two numbers in math.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=28)** You need to follow a specific pattern to be able to properly get the solution, right?
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=32)** And the way I divide numbers or learn it when I was young might even be different to how you learned based on where you learned it, from or when.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=41)** This is exactly what a pattern is, a way to resolve a problem.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=46)** In this course, we'll focus on patterns that relates to JavaScript.
>
> **[0:50](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=50)** We'll look at many different patterns and they are split into three categories.
>
> **[0:55](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=55)** Creational, where these patterns create new things.
>
> **[1:00](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=60)** Structural, where we use these patterns to structure our code.
>
> **[1:04](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=64)** And finally, behavioral, where these patterns are used for behavior purposes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### Setting up your base project
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=0)** - [Instructor] So let's go ahead and set up our base project and install an extension to turn on live server inside of VS code.
>
> **[0:06](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=6)** So the first thing we're going to do is go inside of VS code, so if you don't have it installed, you can install it directly from the site and search for it on Google.
>
> **[0:14](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=14)** And then once you have it installed, you can open Visual Studio code, like so.
>
> **[0:19](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=19)** And what we're going to do first is install the extension.
>
> **[0:22](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=22)** So you go into the extension here, and then we're going to look for live server, like so.
>
> **[0:30](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=30)** And once you find the first one here, it's called live server, you can click on it, and then install live server.
>
> **[0:36](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=36)** So what is this going to do is basically have a live server and run our HTML automatically.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=41)** So we won't have to install a server to actually run our page that we're going to use for doing our code.
>
> **[0:47](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=47)** So let's go ahead and install it.
>
> **[0:50](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=50)** And once this is actually good to go, we can actually go and start coding.
>
> **[0:55](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=55)** So let's go and minimize this for a second, I'm going to go into my desktop and then create a base server.
>
> **[1:02](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=62)** So right click on new folder if you're on a Mac, and then create a new folder if you're on a Windows, and then let's just call this base.
>
> **[1:11](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=71)** And then we're going to drag and drop this into Visual Studio code.
>
> **[1:14](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=74)** And if you're on a Windows, you can right click on the folder and open with Visual Studio code.
>
> **[1:21](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=81)** So we're going to create two files here, the first one is going to be an index.HTML, so let's go and create a new file like so called this index.HTML.
>
> **[1:32](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=92)** And then we're going to create the JavaScript file that we're going to run our code.
>
> **[1:36](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=96)** So we're going to name this index.js.
>
> **[1:39](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=99)** So create a new file index.js, like so.
>
> **[1:46](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=106)** In the index dot.js just to test our base server, we're going to do a console.log so you can use the shortcut log, and then inside of it, we're going to do "Hello".
>
> **[1:59](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=119)** Once you have this, you can save this code, and then go into the index.HTML, and I'm going to use Emmet, to actually create the document here.
>
> **[2:08](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=128)** So if you don't know what Emmet is, you can go into edit here, you can have a whole bunch of shortcuts to create code in CSS, in JavaScript, and also in HTML.
>
> **[2:19](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=139)** so let's go ahead and create a document, so I'm going to do doc for document and then hit tab, and it's going to create a document for me.
>
> **[2:28](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=148)** And what I'm going to do is simply change the title.
>
> **[2:30](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=150)** So you can name this anything you want.
>
> **[2:32](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=152)** I'm going to call this design patterns, like so.
>
> **[2:37](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=157)** And then in the body, we're going to load the script.
>
> **[2:40](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=160)** So basically load this index.js file that we're going to use as we write code for our patterns.
>
> **[2:46](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=166)** So let's go back to our index and then load this script.
>
> **[2:50](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=170)** So I'm going to use script like so, source and the source file is the index.js, and you can actually use auto completion here and scroll down to what you need.
>
> **[3:03](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=183)** And then simply close that tag, and it's going to close it automatically.
>
> **[3:07](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=187)** And then save this file.
>
> **[3:09](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=189)** Okay, so now let's go ahead and turn on our live server.
>
> **[3:12](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=192)** So you can bring up the menu to turn live server on by doing cmd + shift + p on a Mac, or Ctrl + Shift + p, on Windows.
>
> **[3:21](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=201)** So cmd + shift + p, and then type live server, or live, and then what we want to do is open with live server.
>
> **[3:30](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=210)** So I'm going to go ahead and click on that.
>
> **[3:33](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=213)** And now what's going to happen is live server has actually open our HTML page, which has loaded automatically the JavaScript file that we have.
>
> **[3:42](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=222)** So if we look into the console.log for this guy, and you can do that by clicking on the three dots, go to more tools, go to developer tools, or use the shortcut and go to the console, you're going to see that we have our console.log Hello.
>
> **[3:58](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=238)** Don't worry about that because we don't have a favicon for this HTML page, you're going to see that message but no worries.
>
> **[4:04](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=244)** So we have our console.log here and we're good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1)
> **File Paths:** index.js (4), index.html (3), dot.js (1)
> **Env Vars:** html (7), css (1)
> **UI Navigation:** click on (4), go to (3), scroll down (1)
> **Prerequisites:** install (6), set up (1)
> **Tools:** visual studio (3), vs code (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)

#### Functions as first-class citizens
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=0)** - [Instructor] You may have heard of this term functions as first-class citizens from time to time and wonder what does that mean?
>
> **[0:07](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=7)** It means that functions can be treated like a variable.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=10)** Meaning, they can be passed as arguments to other functions.
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=13)** It can be assigned as a value to a variable or even return in a function.
>
> **[0:18](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=18)** It means that function is a first-class citizen.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=21)** Let me demonstrate.
>
> **[0:23](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=23)** So, let's go back to our index.js and we're going to write some code.
>
> **[0:26](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=26)** So, feel free to keep this if you want to but I'm going to remove this and then start by creating a function.
>
> **[0:33](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=33)** So, we're going to do const calc equals and we're not going to pass any arguments, and then returns a function here.
>
> **[0:43](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=43)** So, this function will return four times three, like so.
>
> **[0:49](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=49)** And then, what we're going to do is use this function and then use it as a variable.
>
> **[0:54](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=54)** So, let's go ahead and create a new variable aNumber and then pass that function inside of that variable.
>
> **[1:03](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=63)** And then, what we could do is console log aNumber.
>
> **[1:07](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=67)** So, what happens here is we're creating a function first and then we're creating a variable that holds that function.
>
> **[1:14](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=74)** And then inside of the console log, we're returning what this function is.
>
> **[1:19](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=79)** So basically, we should see 12 as the result in the console log.
>
> **[1:23](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=83)** Sp basically, the function is here and passing to that variable and then run into this console log.
>
> **[1:30](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=90)** So, let's go ahead and save this.
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=93)** And then, what we're going to do is go back to our browser and if you wonder if live server is on, you can take a look at here.
>
> **[1:39](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=99)** If port 5500 is on, that means that live server is on.
>
> **[1:43](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=103)** So, let's go back to our browser and then you should see the number 12.
>
> **[1:47](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=107)** This is mainly what we've done.
>
> **[1:49](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=109)** We used functions as first-class citizen.
>
> **[1:53](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=113)** So, if you've ever wondered what someone means when they were saying functions as first-class citizens, this is exactly what they mean.
>
> **[1:59](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=119)** So, we could use functions everywhere as variable or as something that we're returning inside of a console log or whatever.
>
> **[2:08](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=128)** So, this is what is means when we're saying first-class citizen for functions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (5), pass (2), const (1), this. (1)
> **Definitions:** means that (3), is a  (1)
> **Cross-References:** go back to (3)
> **Code Identifiers:** anumber (2)
> **File Paths:** index.js (1)
> **Ports:** port 5500 (1)
> **Speakers:** - [instructor] (1)

#### What is a callback and its role?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=0)** - [Instructor] Another term that you may have heard many times and not quite sure what it means is the callback.
>
> **[0:06](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=6)** What is a callback and its role?
>
> **[0:09](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=9)** In its simplest terms, a callback function is a function that is called inside of another function.
>
> **[0:15](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=15)** In other words, whenever you pass a function in the arguments and run it inside the function, you're doing the callback pattern.
>
> **[0:22](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=22)** Let me demonstrate.
>
> **[0:24](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=24)** So we're back into Visual Studio Code in the index.js and what we're going to do is keep the calc function.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=32)** And I'm simply going to change the return to four times four so we have a different number.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=37)** And then what we're going to do is remove these two here and I'm going to create another function, like I said, we need to create a new function that we're going to call printCalc.
>
> **[0:53](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=53)** And we're going to pass as the callback the argument callback.
>
> **[0:58](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=58)** And it's going to make sense to you in a couple of seconds, so let's continue.
>
> **[1:01](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=61)** And then let's open our function and inside of that function we're going to do a console log.
>
> **[1:07](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=67)** So I'm going to use the shortcut log.
>
> **[1:11](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=71)** And inside of the log I'm going to pass the callback that I'm actually have as an argument here.
>
> **[1:18](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=78)** And this is the function so I'm going to return the function and execute it.
>
> **[1:24](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=84)** So what we're going to do next is execute that function printCalc.
>
> **[1:29](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=89)** So let's go and do that.
>
> **[1:31](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=91)** And then inside of it we're going to pass this function calc here.
>
> **[1:37](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=97)** So let me summarize this in a second.
>
> **[1:40](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=100)** So what's happening here?
>
> **[1:41](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=101)** We've created a function here and then we created a second function that uses a callback.
>
> **[1:48](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=108)** Again, this is a function inside of a function.
>
> **[1:51](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=111)** So the callback is the argument and then we're going to execute the callback function inside of the console.log.
>
> **[1:58](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=118)** So when we execute this function here, we're passing our initial function.
>
> **[2:04](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=124)** So this function is what we're using inside of the argument here and passing it down to the console.log.
>
> **[2:10](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=130)** So in theory, once this is actually executed, we should return four times four in the console.log.
>
> **[2:18](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=138)** So it's a complicated way to actually return a number here, but this is what a callback is.
>
> **[2:24](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=144)** So let's go ahead and save this and make sure Live Server is on so if you see port 5500 here, that means it's running and then let's go back to our browser.
>
> **[2:35](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=155)** And then I have the number 16.
>
> **[2:38](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=158)** So basically this is what we're expecting as the behavior of this callback function.
>
> **[2:43](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=163)** So if you ever hear again somebody talking about callback, this is what it is.
>
> **[2:48](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=168)** We're basically using a function inside of a function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), let (7), pass (4), continue (1)
> **Definitions:** is a  (3), is called (1), in other words (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** printcalc (2)
> **File Paths:** index.js (1)
> **Ports:** port 5500 (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)

#### CoderPad introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=0)** - [Instructor] In this course, you'll have an opportunity to be tested on the knowledge you'll gain throughout, and we're doing this through a series of coding challenges.
>
> **[0:09](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=9)** When you first open a coding challenge, you'll be presented with four areas.
>
> **[0:14](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=14)** The top left gives you the specific instructions on what is the goal of the challenge and what you need to accomplish.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=21)** The screen on the top right is where, in most cases, you'll have to add or change the code to make the test a success or render the component properly, which you see in the bottom-left screen.
>
> **[0:38](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=38)** Finally, in the bottom right you see the test code, which you might have to change or add new code in some exercises.
>
> **[0:45](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=45)** Just follow the comments and instructions to see where you need to change or add new code.
>
> **[0:52](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=52)** Once you're done updating, you can either test or submit your code to finalize your test.
>
> **[0:58](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=58)** Know that once it is submitted, you won't be able to edit the test anymore, so if you're not sure, test your code first.
>
> **[1:05](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=65)** Finally, know that there's a time limit to this test, which you can see in the top right.
>
> **[1:11](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=71)** Right now I don't have it because I am basically in preview mode.
>
> **[1:15](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=75)** You should have ample time to finish the challenge, and good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Creational Patterns

#### What are creational patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980&t=0)** - With all these terms you'll hear throughout the course, you might be wondering about what is a creational pattern in JavaScript?
>
> **[0:08](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980&t=8)** Simply put, they are patterns that control the creation process of an object.
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980&t=13)** Although, in this course, we focus on JavaScript patterns, it is also true for any languages that use this pattern.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980&t=21)** In this chapter, we'll explore patterns that involve the creation of classes, the constructor pattern, the singleton, the factory, and the abstract factory patterns and how they allow us to efficiently create new objects in JavaScript.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### Class design pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=0)** - [Instructor] In this chapter, we'll start covering all the patterns that are useful to create new items in your code, and we'll start with the prototype in class pattern.
>
> **[0:08](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=8)** So in my course, JavaScript classes, we've explored this pattern with many examples, but in short, the prototype class pattern allows us to define a blueprint for a specific type of item, and then reuse it by creating a new object from that class.
>
> **[0:23](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=23)** So let me demonstrate with some code.
>
> **[0:25](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=25)** So let's go ahead and remove all that code.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=28)** So if you want to keep it, save it into a different file. I'm going to go back to index.js and then create a class.
>
> **[0:35](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=35)** So we'll create a car.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=37)** So let's go ahead and create a class called car.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=41)** And then in that class we'll use a constructor to define the blueprint of that class.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=46)** So let's go in, create the constructor, and that car takes doors, an engine and it takes a color.
>
> **[0:58](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=58)** So whenever we create a new car from that class we'll have to pass these different elements.
>
> **[1:04](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=64)** And then in that class we need to pass this doors equals to doors and then do the same for engines, so if you want to copy this code here, like so, and paste it below, and then all we have to do is change to engine, so let's copy doors, and then I'm going to option click to the second door so I can do a change on both.
>
> **[1:27](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=87)** And that's a little trick for Visual Studio code.
>
> **[1:30](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=90)** So I'm going to do engine and then what we'll do is paste that code again and then change it to color.
>
> **[1:37](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=97)** So I'm going to click here, and then option click on the second door and then change this to color, like so.
>
> **[1:45](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=105)** So now we have our constructor, so we can build a new car from our class that we just created.
>
> **[1:51](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=111)** So the purpose of the class is basically to set the blueprint for new objects that we're going to create. So now let's go ahead and create a Civic.
>
> **[2:00](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=120)** So this Civic takes what? It takes a number of doors, an engine and a color.
>
> **[2:06](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=126)** So let's go ahead and pass a new car, so we're using the class that we've just written and pass the argument, so it needs doors, so we'll pass four doors, and as an engine, we'll pass a V6, I don't believe that's correct for a Civic, but I'm not a car expert, so I'm just going to pass that for now, and then pass the color gray.
>
> **[2:29](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=149)** And now we have created a brand new object from the constructor here, so from this class car, we created a new object called Civic with the new class car and pass these options.
>
> **[2:42](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=162)** So now if you want to see it inside of our live server, we can do a console log, so let's do console log and then we'll pass the Civic.
>
> **[2:51](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=171)** And let's save this to make sure, and make sure that live server is running by checking the port 5500 here and then let's switch back to our browser.
>
> **[3:02](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=182)** So when you get back to your browser, you'll see that now we've passed an object or a class called car with a new Civic which has four doors, an engine, V6, and then color gray.
>
> **[3:15](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=195)** So this is how you use a class to create a new object.
>
> **[3:18](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=198)** And basically the class is the prototype or the blueprint for that new object.
>
> **[3:24](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=204)** So this is how you can use classes to create a new object inside of JavaScript.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (10), class. (3), switch (1)
> **CLI Commands:** make (2)
> **File Paths:** index.js (1)
> **Ports:** port 5500 (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Constructor pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=0)** - [Instructor] Similar to the class prototype pattern, the constructor pattern is one step further from the class pattern, where we leverage a class created to create an extended class from it.
>
> **[0:11](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=11)** Let me demonstrate.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=12)** So we'll leverage our car class here, and as you can see we already have a constructor, but the actual pattern itself is something else.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=20)** So the constructor allows us to create a new object from the class.
>
> **[0:24](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=24)** But what if we would like to create an SUV class and extend this class from it?
>
> **[0:30](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=30)** And that's what the constructor pattern is and why you would use it.
>
> **[0:34](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=34)** So let's go ahead and do that.
>
> **[0:35](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=35)** So the first thing I'm going to do is create a new class called SUV.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=41)** And we're going to extend the car class.
>
> **[0:45](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=45)** So basically we're leveraging the constructor we already have in this class, and then we'll extend it with other items.
>
> **[0:52](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=52)** So let's go ahead and do that by creating the class and then the constructor will still have doors because we're passing the constructor here.
>
> **[1:04](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=64)** Still have an engine and still have color.
>
> **[1:10](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=70)** So what we'll do in order to be able to use what is inside of that constructor for that class is do a super.
>
> **[1:17](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=77)** So if you've done any react code, you're familiar with this.
>
> **[1:19](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=79)** So basically what we're doing is creating a new class and extended react.
>
> **[1:24](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=84)** And then in the constructor we're doing super props.
>
> **[1:27](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=87)** So that's exactly what we're doing here.
>
> **[1:29](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=89)** So we're basically passing the doors, the engine, and the color in the super function here and then what we'll do is add what we would like to have as extra stuff for the SUV.
>
> **[1:45](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=105)** Or extra element or argument we can pass to that class.
>
> **[1:49](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=109)** In this case we'll do this wheels and add a default of four.
>
> **[1:55](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=115)** So what is the default is basically if we don't pass any value to this wheels, it'll have a value of four.
>
> **[2:04](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=124)** So let's go ahead and create a new car.
>
> **[2:06](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=126)** So we have a civic car, so now we're going to create a cx5.
>
> **[2:11](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=131)** So this is the car that I have.
>
> **[2:13](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=133)** And let's go ahead and create this SUV with the class SUV like so.
>
> **[2:21](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=141)** And then we have four doors, it's a V8 engine.
>
> **[2:25](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=145)** Again I don't know anything about cars, even my own.
>
> **[2:28](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=148)** So I'm not sure if V8 is the right one.
>
> **[2:32](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=152)** And then the color red, which is the color that we have.
>
> **[2:35](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=155)** So now we can go ahead and console log this cx5 as well.
>
> **[2:42](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=162)** So let me just summarize what I just done.
>
> **[2:45](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=165)** So I created initial class in the previous video, then I'm extending that class as an SUV class by passing the doors, engine, and color, and then also setting this wheels as an extra element or argument that this class can take.
>
> **[3:02](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=182)** And then creating a new SUV with this constructor pattern or this extended car class with the SUV class.
>
> **[3:12](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=192)** And then I'm console logging these guys.
>
> **[3:14](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=194)** Okay so let's go ahead and save this.
>
> **[3:17](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=197)** And let's go back to our browser.
>
> **[3:19](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=199)** And now you're going to see that we have both classes or both cars and the SUV mentioned and printed out.
>
> **[3:28](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=208)** So we have the values that we're expecting.
>
> **[3:30](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=210)** So the initial car, the civic, has four doors, V6 engine, and then color grape.
>
> **[3:36](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=216)** And then we have our SUV, which is basically the cx5, which has four doors, an engine of V8, color red, and then you see a new value which is called wheels and has four wheels.
>
> **[3:49](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=229)** Which we extended with the constructor pattern.
>
> **[3:53](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=233)** So this is how you could use many constructors to extend one class to the other.
>
> **[3:58](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=238)** And you could go even further, so if we go back to the code, you can create a brand new class of car extending the SUV.
>
> **[4:06](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=246)** So you could go one layer on top of each other and then extend, extend, extend, multiple classes to create different categories of cars.
>
> **[4:17](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=257)** So when you want to create multiple sub-categories of a class, the constructor pattern is a great way to do it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), class. (4), super (3), class, (2), this. (2)
> **Env Vars:** suv (11)
> **Cross-References:** go back to (2), previous video (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=0)** - [Instructor] The singleton pattern can be intimidating when you first hear about it.
>
> **[0:04](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=4)** But you'll see how simple it is, once you understand, that it's simply preventing our class from creating more than one instance of the blue print we've defined.
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=13)** In other words, we use the same principles we've used since the beginning of this chapter, except, we allow only one instance of the class to be created.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=21)** So, let me demonstrate with some code.
>
> **[0:24](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=24)** So, let's go back to our index.js and what we're going to do first is create a variable, where we'll pass a null variable.
>
> **[0:33](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=33)** So let's go ahead and let instance first null.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=37)** So basically, when we first start our creation of the instance, it's null.
>
> **[0:42](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=42)** So, that means it's going to allow the class to create a new object.
>
> **[0:47](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=47)** So we're going to make a few changes in a class car.
>
> **[0:50](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=50)** This is all the same, except what we're going to do is insert some if and then else.
>
> **[0:57](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=57)** So, first, we're going to do a if, so if the instance is null, so right now it is, we're going to go ahead and create a new object.
>
> **[1:06](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=66)** So, what we're going to do, is basically, cut this and put it inside of our if statement, like so.
>
> **[1:15](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=75)** And then what we're going to do in the instance, we're going to make it equal this.
>
> **[1:22](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=82)** So, if this is true, it's going to create a new object, else, then just return instance.
>
> **[1:32](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=92)** And then what I'm going to do is just clean that up.
>
> **[1:35](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=95)** So, let's go ahead and comment this extension of the car class with the class SUV and then what we're going to do is create two instances of our object, which are those two.
>
> **[1:47](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=107)** We're just going to change the CX5 for a Honda, and then instead of doing new SUV, we're going to do a new car.
>
> **[1:56](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=116)** And you can keep these values here, so let's just change the number of doors to two.
>
> **[2:01](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=121)** And then we're going to first console log the Civic and then console log the Honda.
>
> **[2:08](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=128)** So, if we go back to our code and take a look at what we've done, is inside of this pattern we've actually introduce some if statement.
>
> **[2:16](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=136)** So, if there's already an instance of that class car, as an object, though, we have two instances here, then return the instance.
>
> **[2:26](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=146)** So, let's save this and let's go back to our browser.
>
> **[2:31](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=151)** And as you can see, we've already created an instance of that car, therefore, it's going to return the same instance.
>
> **[2:38](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=158)** So, if we go back to our code, we were trying to create a new car call Honda, with two doors, V8, and then color red, but it hasn't create that instance because, there's already one.
>
> **[2:53](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=173)** So, that's what the singleton pattern is.
>
> **[2:55](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=175)** So, basically what it does, it checks for instance of that class car and if there's already one, then just return the instance that we have.
>
> **[3:04](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=184)** Otherwise, you can go ahead and create a new one.
>
> **[3:07](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=187)** So, that's basically what a singleton pattern is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), except, (1), pass (1), else. (1), if, (1)
> **Cross-References:** go back to (4)
> **Env Vars:** suv (2), cx5 (1)
> **CLI Commands:** make (2)
> **File Paths:** index.js (1)
> **Definitions:** in other words (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=0)** - [Instructor] The factory pattern is great when you want to create, say, a mechanism to create other objects.
>
> **[0:05](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=5)** Good example would be a factory for creating cars.
>
> **[0:08](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=8)** This can be useful when you want a factory to handle most of your classes and then simply use this factory method to create your new objects.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=16)** Again, this is best demonstrated in a code example.
>
> **[0:19](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=19)** So let's go back to our index.js and what I'm going to do is refactor some of that code to resemble what we had before for the class car.
>
> **[0:29](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=29)** So I'm going to basically remove the if and else, like so.
>
> **[0:36](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=36)** And remove the return instance.
>
> **[0:39](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=39)** And now we should be good to go.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=41)** I'm just going to re-indent this properly and remove the space in here.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=46)** So basically your class car should resemble something like this.
>
> **[0:50](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=50)** So basically what we had before.
>
> **[0:52](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=52)** Constructor passing the doors, engine, color, and then boom, boom, boom.
>
> **[0:56](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=56)** And, of course, let's remove the instance here, like so.
>
> **[1:01](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=61)** And remove it at the top right here.
>
> **[1:05](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=65)** All right, so now we're back.
>
> **[1:06](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=66)** And I'm going to remove line nine through 14, just for cleanliness.
>
> **[1:11](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=71)** So if you want to keep this, feel free to keep it.
>
> **[1:14](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=74)** I'm going to remove it.
>
> **[1:16](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=76)** All right, so now what we need to do is create the factory, so in this case the car factory.
>
> **[1:21](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=81)** So let's go ahead and do class, and we're going to call this carFactory.
>
> **[1:27](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=87)** And this carFactory will basically be the function that will create new cars for us automatically.
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=94)** So inside of it we'll have a createCar function, which basically takes a type, so what type of car we want to create.
>
> **[1:44](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=104)** And then inside of this, we'll have a switch statement, and basically the switch statement will take the argument of type.
>
> **[1:53](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=113)** And then basically we'll have two cases in this case, but you could add as many cases as you want in your carFactory.
>
> **[2:00](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=120)** So I'm going to have one case where I'm passing the type of civic.
>
> **[2:05](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=125)** For the cases you can basically do whatever you want, so if you want to have more general cars, like SUVs, sedans, or stuff like that, but I'm going to be specific just for demonstration purposes.
>
> **[2:17](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=137)** And for this case, we'll return a new car, which is the class above here, which takes a few things.
>
> **[2:27](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=147)** So what we could do is basically grab this civic here.
>
> **[2:31](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=151)** So I'm going to basically grab all the stuff I have inside of the new civic that I created below.
>
> **[2:39](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=159)** And, as you probably guessed it, we'll remove that.
>
> **[2:43](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=163)** And then we'll have a second case where we'll create a Honda.
>
> **[2:47](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=167)** So let's go ahead and create a new case, case where the type is honda.
>
> **[2:55](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=175)** We'll return a new car, and let's go ahead and select this here.
>
> **[3:02](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=182)** Now that, and I'm going to paste it right here like so.
>
> **[3:06](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=186)** So I've created a car factory that will basically, based on type, create either this car or this car.
>
> **[3:14](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=194)** So now all we need to do is initialize this factory, so we're going to go ahead and initialize the factory, or you can name this anything you want, with a new carFactory.
>
> **[3:26](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=206)** And this is a function, so we need to basically execute it once we have it.
>
> **[3:32](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=212)** So now we don't have a car, we have a car factory that's ready to create cars for us, but we don't have a car.
>
> **[3:39](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=219)** So let's go ahead and create a Honda, and let's do something more specific, so myHonda.
>
> **[3:48](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=228)** And then use the factory that we just initialized, so basically we initialized this factory here, which is based of the carFactory here.
>
> **[3:58](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=238)** And then what does this factory has as a function?
>
> **[4:02](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=242)** It has a createCar function.
>
> **[4:03](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=243)** So basically you use the first function that's inside of that carFactory.
>
> **[4:10](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=250)** And then we're passing a type, so we need to pass a type to this function.
>
> **[4:14](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=254)** So the type that I'm going to pass is a honda because I want to create a Honda.
>
> **[4:20](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=260)** And now let's make sure that we console log this one.
>
> **[4:24](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=264)** And we simply have to console log the myHonda, so I'm going to change this to myHonda.
>
> **[4:30](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=270)** All right, so let me just quickly summarize what we've just done.
>
> **[4:33](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=273)** So we have our class car that we've used since the beginning of this chapter.
>
> **[4:38](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=278)** Now we're using this class car inside of the class factory.
>
> **[4:42](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=282)** So this is a factory.
>
> **[4:43](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=283)** So basically creating multiple classes for us automatically based on the type that we're passing to that factory.
>
> **[4:51](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=291)** So this is what a factory is.
>
> **[4:52](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=292)** It creates anything we want based on the type that we're passing.
>
> **[4:56](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=296)** So this is very efficient in big, large applications where you want to quickly create new objects through a factory or one function where you're passing a type and then it create the objects for you.
>
> **[5:09](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=309)** So this could be, for example, used for users, the types of users that you want to create in an application.
>
> **[5:16](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=316)** Or if you're building out a game, what type of characters are in the game based on the type that you're passing inside of the factory.
>
> **[5:24](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=324)** So right now, we've actually created the factory, initialized it here, then use this factory to create a new honda in here.
>
> **[5:34](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=334)** And now we actually are console logging the honda.
>
> **[5:37](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=337)** So let's save all this and now make sure that Live Server is on.
>
> **[5:42](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=342)** If you don't see it, you should see basically a button you can actually initialize your Live Server.
>
> **[5:49](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=349)** Once this is actually live, you can go back to your browser and, as you can see, we have a new car with doors two, V8 engine, and color red.
>
> **[5:58](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=358)** And that is matching what we have in our code because we created a Honda with two doors, a V8 engine, and a color red.
>
> **[6:06](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=366)** So this is how you would use a factory to create multiple classes inside of an application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (8), type, (3), case, (3), this, (2)
> **Code Identifiers:** carfactory (6), myhonda (3), createcar (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **File Paths:** index.js (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Abstract factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=0)** - [Instructor] If you were to take the concept of factories further.
>
> **[0:03](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=3)** The next step would be the abstract factory pattern.
>
> **[0:06](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=6)** Where you abstract the factories and are able to create multiple factories, classes et cetera.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=12)** So in our car example this would be a car company overseeing multiple factories.
>
> **[0:17](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=17)** So lets take a look at what it would like in code.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=20)** So lets go and copy what we have for our class car and our car factory and simply create new ones for SUV's.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=28)** So what I'm going to do, is first copy all this.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=32)** Like so and then paste it below.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=37)** And this is going to be the SUV.
>
> **[0:40](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=40)** So lets go and name this class SUV and then what we're going to do, is create an SUV factory.
>
> **[0:47](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=47)** Pretty much the same way that we have our car factories.
>
> **[0:50](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=50)** So right now what we have is ... Cars or a factory that creates cars and then we have a factory that creates SUV's.
>
> **[0:59](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=59)** So if you want to visualize this.
>
> **[1:01](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=61)** It's as if you had a car factory that creates simple cars and then another SUV factory somewhere in the East Coast where it's creating SUV's.
>
> **[1:12](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=72)** So now how are we over seeing the whole process of creating cars?
>
> **[1:17](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=77)** Well lets go ahead and initialize the SUV factory as well.
>
> **[1:21](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=81)** And lets basically copy this.
>
> **[1:24](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=84)** And then paste it below and then this one, we'll just call this SUV and lets make sure we call both ... by their proper names So car factory, like so.
>
> **[1:39](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=99)** So we have a car factory and we have an SUV factory.
>
> **[1:43](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=103)** So basically the factory abstract pattern would be the next step.
>
> **[1:48](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=108)** So what we're going to do now, is create basically this big car or overseeing manufacturer.
>
> **[1:56](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=116)** So lets go ahead and create the auto manufacturer, which is your abstract factory.
>
> **[2:05](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=125)** And now what we need to pass is a type and then we'll pass also a model.
>
> **[2:12](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=132)** And this is a function which basically again we'll use the same principles that we've used here, a switch.
>
> **[2:19](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=139)** So the switch will have a type, that it will take and then inside we'll have a case where we have ... a car and then this car will return from the car factory.
>
> **[2:37](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=157)** Create car and then we'll pass a model.
>
> **[2:41](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=161)** So I don't know if you're seeing where I'm going with this, but it's basically taking this abstraction as a factory and taking it one step further.
>
> **[2:51](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=171)** So once we have our manufacturer of cars, we'll pass first the type.
>
> **[2:56](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=176)** So it'll select the type.
>
> **[2:58](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=178)** So if we pass a type of car, then we're going to use our car factory to create a new model based on what we're passing as the model here.
>
> **[3:09](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=189)** And then we'll do this exact same thing for our SUV's.
>
> **[3:15](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=195)** So this one we're going to do ... SUV.
>
> **[3:20](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=200)** So if we have a SUV, now we're going to use the SUV factory.
>
> **[3:27](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=207)** And we have the create car and now we're going to pass the model as well for that one.
>
> **[3:35](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=215)** So this manufacturer will be able to create a car based on first the type of car, or the type of factory that we're using and then based on that factory create the model that we want.
>
> **[3:48](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=228)** So lets just change the models for the SUV Factory here.
>
> **[3:52](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=232)** So we're going to change it to CX5 and Santa Fe, which I know are two complete manufacturers, but again I'm not the car expert.
>
> **[4:03](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=243)** What I'm trying to do here is just to show you through an example that's visual.
>
> **[4:08](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=248)** All right so now that we have our abstract factory here.
>
> **[4:11](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=251)** What we need to do is basically initialize a new car.
>
> **[4:15](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=255)** So what I'm going to do is, lets go create a new CX5 and lets just remove all this.
>
> **[4:23](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=263)** And were going to use the auto manufacturer and then pass inside of it, first the type.
>
> **[4:31](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=271)** So SUV and then ... the actual model, like so.
>
> **[4:36](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=276)** Now we've been able to create a brand new car with this manufacturer here.
>
> **[4:41](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=281)** We're basically the abstract factory, like so.
>
> **[4:44](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=284)** And then we could just console log this guy here, CX5.
>
> **[4:49](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=289)** Okay, so.
>
> **[4:49](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=289)** Whoops, I just saw something.
>
> **[4:51](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=291)** So I need to change this here.
>
> **[4:53](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=293)** So I need to change car factory to ... SUV and while I'm thinking about it.
>
> **[4:59](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=299)** I think I- yeah, I need to capitalize my classes.
>
> **[5:04](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=304)** We need to do this first.
>
> **[5:06](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=306)** All right so, this is going to help a little bit.
>
> **[5:09](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=309)** Okay, so now we have all this.
>
> **[5:11](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=311)** Lets make sure we capitalize this as well, and this as well.
>
> **[5:17](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=317)** All right so we have car factory, SUV Factory.
>
> **[5:20](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=320)** Now we are good to go.
>
> **[5:23](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=323)** All right, so lets save this.
>
> **[5:25](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=325)** Lets make sure Lifesaver is running.
>
> **[5:27](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=327)** And then lets go back to our browser and now we have our car that has been created for us.
>
> **[5:35](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=335)** So if we check what we have here.
>
> **[5:37](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=337)** We have four doors, engine, V6 and color gray.
>
> **[5:41](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=341)** So lets see if that matches.
>
> **[5:42](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=342)** We've created a SUV which was CX5.
>
> **[5:45](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=345)** So lets go to our SUV Factory.
>
> **[5:49](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=349)** We create a CX5, which has four doors, V6 in gray.
>
> **[5:53](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=353)** And this is basically how you would use an abstract factory to create a whole bunch of cars.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (7), pass (7), this. (6), type. (3), switch (2)
> **Env Vars:** suv (20), cx5 (5)
> **CLI Commands:** make (3)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Structural Patterns

#### What are structural patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=0)** - Have you ever worked on a project where the code felt a bit disorganized and unstructured, where you could barely make heads and tails in between each files, and what was their purpose to the larger scheme of the application?
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=13)** We've all been there, and it can be a big mess to find a specific function when the code lacks organization.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=20)** Well, this is where structural pattern come into play.
>
> **[0:23](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=23)** If the creational patterns are focused on the creation of new code, the structural pattern are focused on how to properly organize your code.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=32)** And this is what we'll spend this chapter on.
>
> **[0:35](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=35)** We'll explore the module pattern, mixins, the facade, flyweight, and decorator patterns.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=41)** Then we'll spend some time on the MVC, MVP, and MVVM patterns.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=46)** These are about how you organize the structure of the larger application.
>
> **[0:51](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=51)** So without further ado, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), module (1), let (1)
> **Env Vars:** mvc (1), mvp (1), mvvm (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - have (1)

#### Module pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=0)** The module pattern is probably the one pattern where if you are not aware you are using it; You'll be like, oh yes I know this one.
>
> **[0:07](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=7)** The module pattern is used everywhere in our code.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=10)** Especially if you use any frameworks.
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=13)** Whenever you're encapsulating a block of code into a singular function or a pure function, as it is sometimes referred to, you're creating a module.
>
> **[0:22](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=22)** The idea behind using modules is to organize your code in pure functions.
>
> **[0:27](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=27)** So if you have your code to debug, it is much easier to find where the error is.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=32)** We often use modules too, with the key word import or export.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=37)** So when we compile our code, we only use the code we need.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=41)** In the exercise files there is a folder called node.
>
> **[0:44](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=44)** So if you look into the exercise files, you'll find in the resources, this folder here.
>
> **[0:49](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=49)** So copy the content of that folder into a new folder; or simply use it.
>
> **[0:53](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=53)** So I'm going to create a brand new folder on my desktop.
>
> **[0:57](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=57)** And I'm going to call it node.
>
> **[1:00](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=60)** And I'm going to copy all the content.
>
> **[1:02](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=62)** So make sure when you're actually copying the content from this folder to this folder.
>
> **[1:08](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=68)** That you're seeing the hidden files.
>
> **[1:10](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=70)** On windows you should be able to select an option where you can see the hidden files and on mac is shift command dot.
>
> **[1:21](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=81)** And you're going to see that if I had copied all these files into this folder I would be missing a very important file.
>
> **[1:27](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=87)** The dot babelrc.
>
> **[1:29](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=89)** So lets go ahead and copy all this, into the node folder.
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=94)** Paste it.
>
> **[1:35](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=95)** And now lets open visual studio code with this folder.
>
> **[1:38](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=98)** So I'm going to drag and drop this folder into visual studio code.
>
> **[1:43](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=103)** Or on windows you can right click and open in visual studio code.
>
> **[1:48](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=108)** So right now, we have an index file, we have the babelrc file that allows us to use the latest and greatest from JavaScript.
>
> **[1:55](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=115)** So what I want to do is create a function inside of a file and then import this module into the main index.
>
> **[2:03](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=123)** So let's go ahead and do that.
>
> **[2:04](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=124)** So the first thing we're going to do is create a calc dot js file here.
>
> **[2:09](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=129)** So I'm going to click on add file, calc dot js.
>
> **[2:14](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=134)** Like so.
>
> **[2:14](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=134)** And we're basically going to create the same function we did in the previous chapter.
>
> **[2:19](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=139)** So, lets go ahead and create the calc function.
>
> **[2:25](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=145)** And it takes no arguments.
>
> **[2:28](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=148)** And we're going to return.
>
> **[2:31](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=151)** Four times three.
>
> **[2:33](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=153)** Which equals 12.
>
> **[2:35](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=155)** And that's basically it.
>
> **[2:36](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=156)** But before this becomes a module, we need to export it.
>
> **[2:40](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=160)** So what we're going to do is use export.
>
> **[2:43](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=163)** Default.
>
> **[2:45](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=165)** And what we're exporting is calc.
>
> **[2:48](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=168)** So basically we're exporting this function, so its going to be available in other files in this project, as a module.
>
> **[2:55](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=175)** So lets go ahead and save this.
>
> **[2:57](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=177)** And lets close this and lets go back to our index.
>
> **[3:01](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=181)** And now what I'm going to do is update this code, so we can actually see the number 12 in the actual response of the server.
>
> **[3:09](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=189)** So this is a server.
>
> **[3:10](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=190)** A node server.
>
> **[3:12](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=192)** So the first thing we're going to do is import the module that we created in here.
>
> **[3:17](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=197)** So lets go ahead and do that.
>
> **[3:19](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=199)** Import calc.
>
> **[3:21](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=201)** From.
>
> **[3:23](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=203)** calc, like so.
>
> **[3:26](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=206)** And then what we're going to do is create a variable that will hold the function and therefore execute it.
>
> **[3:32](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=212)** And render the number 12.
>
> **[3:35](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=215)** So lets go anumber.
>
> **[3:38](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=218)** Equals and then use calc.
>
> **[3:41](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=221)** And because its a function let's go ahead and execute it.
>
> **[3:45](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=225)** So, this variable will basically hold the number 12.
>
> **[3:49](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=229)** Because we are doing this calculation there.
>
> **[3:53](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=233)** Let's make sure that this is, like so.
>
> **[3:57](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=237)** Oh, I forgot to do this.
>
> **[4:00](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=240)** All right so now its going to work.
>
> **[4:01](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=241)** Now the next thing I need to do, is basically insert the number in my message here.
>
> **[4:06](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=246)** So I was supposed to do node and express server's running on port 3000.
>
> **[4:10](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=250)** What I'm going to do is change that template string to something else.
>
> **[4:14](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=254)** So lets do something like, showing number and then lets pass, the value anumber on my template string and save this.
>
> **[4:29](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=269)** So now as you may know we need to actually install the dependencies for a node server to work.
>
> **[4:35](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=275)** So let's go and bring up our terminal first.
>
> **[4:38](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=278)** And lets do npm, install.
>
> **[4:42](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=282)** Or I.
>
> **[4:44](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=284)** Perfect.
>
> **[4:45](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=285)** And now as the npm start; we have this function that will start a nodemon server.
>
> **[4:49](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=289)** So lets go ahead and do npm start.
>
> **[4:52](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=292)** And our server is running on port 3000.
>
> **[4:54](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=294)** So I can go to the browser now and actually make a call for local host port 3000.
>
> **[5:01](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=301)** And this is basically what I'm going to call.
>
> **[5:03](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=303)** And I should get this message, showing number 12 on port 3000.
>
> **[5:07](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=307)** So lets go ahead and do that.
>
> **[5:09](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=309)** So let me switch back to my browser.
>
> **[5:12](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=312)** And this server shouldn't be running anymore, so lets go ahead and close it.
>
> **[5:16](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=316)** And do local host 3000.
>
> **[5:19](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=319)** Like so.
>
> **[5:20](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=320)** Okay so now its showing number 48.
>
> **[5:22](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=322)** So something's off here.
>
> **[5:24](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=324)** So let's go back to my code very quickly.
>
> **[5:27](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=327)** And let's take a look at the calculation.
>
> **[5:29](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=329)** And that's probably why.
>
> **[5:31](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=331)** So I did four times 12, as oppose to four times three.
>
> **[5:34](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=334)** So when I said the word 12 in my head I probably written it, as oppose to do four times three.
>
> **[5:39](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=339)** So you could either change this to four times three.
>
> **[5:44](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=344)** And lets test this.
>
> **[5:46](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=346)** Or keep whatever number you have in there.
>
> **[5:47](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=347)** So if we go back to our server and make a call again now number 12 is showing as it should.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), module (7), let (7), this. (4), export. (2)
> **CLI Commands:** node (6), make (4), npm (3), find (2)
> **Ports:** port 3000 (4)
> **Cross-References:** go back to (3), previous chapter (1)
> **Tools:** visual studio (3), terminal (1)
> **Exercise Files:** exercise files (2), template (2)
> **UI Navigation:** drag and drop (1), click on (1), go to (1)
> **Definitions:** is a  (2)

#### Mixins pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=0)** - [Instructor] Mixins are a great way to mix functions and instances of classes after they have been created.
>
> **[0:07](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=7)** In other words you could use mixins to add interesting functions to the car class we created earlier.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=12)** So let me demonstrate.
>
> **[0:14](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=14)** So I'm back into the index.js file right here from the base, so if you don't have it open you can grab it from the exercise files in the resources, and let's go ahead and add some code to this file here.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=28)** So right now we have the car class, we have the car factory, we have the SUV class and the SUV factory.
>
> **[0:35](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=35)** So what we're going to do is create a mixin that will have a console log with a rev engine, a message, so let's go ahead and do that.
>
> **[0:44](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=44)** So the first thing I'm going to do is add a mixin right after my SUV factory, so line 39.
>
> **[0:51](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=51)** So what I'm going to do is create a mixin by doing let car mixin equals and then this is going to be a function, and this function will basically be a console log so let's go ahead and use the console log and the console log will use template strings, so we're going to do something like this, the and then let's insert this.engine so we're going to pass the engine of which car inside of this particular function is doing vroom vroom, all right, so now we have our mixin created so what we're going to do now is leverage some of the code that we already have in here, so we have a car factory or a manufacturer right here
>
> **[1:41](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=101)** and what we'll do now is create an object, so let's go and remove this, and we'll create an object.
>
> **[1:49](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=109)** So object assign, so we're using and leveraging some functions from JavaScript, car.prototype, we'll add the car mixin, so let me explain what's happening here.
>
> **[2:05](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=125)** So what we'll do is create with the object.assign a mixin by matching the car prototype with the car mixin.
>
> **[2:13](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=133)** So basically what we'll do is add this function to whatever car we'll create afterward.
>
> **[2:19](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=139)** So let's go ahead and create a car.
>
> **[2:21](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=141)** So this time I'm feeling like I want to create a Honda, so let's go and create a Honda, and use the manufacturer, so the auto manufacturer, and inside of it if you remember we're passing a type and a model, so we'll pass a car type, so this will create a car with my car factory, and I'll pass a Honda, so this car factory can create a Honda, so let's go all the way back to our car factory right here, if I'm passing a Honda this is what it's going to create.
>
> **[2:53](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=173)** So I'm going to have an object that holds two doors, a V8 engine, and then a red car.
>
> **[2:59](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=179)** But because I have a mixin here it's going to add the function rev engine to that car that we'll create because of what we've done here.
>
> **[3:10](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=190)** So let's go ahead and create this and then what we'll do is use the Honda object that we just created and then execute the rev engine function.
>
> **[3:24](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=204)** So in theory if we didn't have this or the car mixin here this would run an error, but because we actually assign to every object that we create inside of our car manufacturer this particular car mixin that we've created here, so if you look at the car class we're adding the car mixin, this is going to be available for us to use.
>
> **[3:46](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=226)** So let's save this, and now make sure that Light-Server is running, so if you basically turned it off after the last lesson, let's turn it back on again, and let's go back to our browser and as we can see the V8 is doing vroom vroom, so let's add a little bit of text to this so we could add the V8 engine is doing vroom vroom, let's save this, let's go back to our browser, and now we have the message the V8 engine is doing vroom vroom.
>
> **[4:18](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=258)** So now we have this mixin or basically the function that we mixed with our class available to us and we can execute it whenever we want.
>
> **[4:27](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=267)** So this is how mixin are working and you can use this in your code as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (7), this, (4), pass (3), class, (1)
> **Env Vars:** suv (3)
> **Cross-References:** go back to (2)
> **Exercise Files:** exercise files (1), template (1)
> **File Paths:** index.js (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Facade pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=0)** - [Instructor] What is a facade?
>
> **[0:02](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=2)** It is basically the pattern of hiding complexity away by creating a facade for the complex code.
>
> **[0:07](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=7)** So if you are thinking, wait, what?
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=10)** That's absolutely normal.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=12)** If you're a React developer, or building components, you've been using facades every day.
>
> **[0:17](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=17)** When you're building your component in any framework, you code the complexity of this component into a module, or file, and then leverage a simple line to render this component into your code.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=28)** Well, this is what the facade pattern is.
>
> **[0:31](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=31)** Grab the code from the React folder into the exercise files, and let's go through the components quickly so the facade pattern you have been using all this time makes a lot more sense.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=41)** So let's open this folder, and in the resources you have a React application.
>
> **[0:47](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=47)** Simply drag and drop it inside of Visual Studio Code, and I'm going to maximize this, and you have facades everywhere in React code, or Anguler, or any frameworks.
>
> **[0:58](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=58)** Basically, right now I'm using a lot of modules here to hide complexity from this particular file.
>
> **[1:07](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=67)** So right now I'm importing an app, which is a module, and then I'm actually using this app component in here to render it through the React render function.
>
> **[1:17](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=77)** And this is exactly what a facade is.
>
> **[1:20](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=80)** So basically, if I'm looking at that app.js file here, this is all the code that I'm actually loading inside of that facade.
>
> **[1:28](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=88)** So whenever you're looking at code that is imported from another module, and then insert it into that specific file, like we just explored here, this is basically what a facade is, and that's as simple as it gets.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (2), this, (1), function (1)
> **Definitions:** is a  (2)
> **File Paths:** app.js (1)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Flyweight pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=0)** - [Emmanuel] The flyweight pattern is a method to minimize recreating the same items twice, and therefore minimize the memory impact in our systems.
>
> **[0:09](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=9)** You have to understand, whenever we create new items with our applications, we stack these items into memory.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=16)** Your browsers uses the flyweight pattern to save images in memory so they don't load twice.
>
> **[0:22](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=22)** And guess what?
>
> **[0:23](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=23)** The flyweight pattern uses a similar approach to the singleton.
>
> **[0:27](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=27)** So if we look at the code we've done with the singleton, it is similar.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=32)** So if you go into the Exercise Files, and then open chapter two, and then video 02_04, and then look at the end folder, you can drag and drop that folder into Visual Studio Code, and then open up index.js, and this is basically the flyweight pattern in action.
>
> **[0:53](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=53)** So what we're doing here, we're preventing the creation of another instance of the Car class.
>
> **[1:00](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=60)** So if there is an instance then we're not creating another one, and so on and so forth.
>
> **[1:05](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=65)** So this is exactly what the flyweight pattern is.
>
> **[1:09](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=69)** We're preventing the creation of more items into the memory of our browsers, or wherever this application is actually running.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** index.js (1)
> **Code Keywords:** class. (1)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [emmanuel] (1)

#### Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=0)** - The decorator pattern is very similar to mixins, where we decorate code with classes or code that came from another area.
>
> **[0:08](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=8)** There is actual syntax in the most recent versions of JavaScript and has been used for a while in TypeScript and is heavily used in Angular code.
>
> **[0:17](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=17)** So the purpose of a decorator pattern, like a mixin, is to to take, for example, a class and extended it with other code.
>
> **[0:24](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=24)** Because we've already done extends and mixin's let's see an example code on TypeScripts website how it would be implemented.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=32)** The syntax will be similar in JavaScript once it is officially approved for use in a recent version of JavaScript.
>
> **[0:39](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=39)** So go to [typescripeline.org/docs](https://typescripeline.org/docs) look for handbook and then scroll down until you see decorators.
>
> **[0:49](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=49)** And then on that page scroll down until you see this example here.
>
> **[0:56](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=56)** So this is a great example of decorator.
>
> **[0:58](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=58)** So it looks very similar to mixin.
>
> **[1:00](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=60)** So you're basically creating a function which is called F.
>
> **[1:04](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=64)** And then you're creating a function which is called G.
>
> **[1:08](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=68)** And then you're creating your class and decorating or adding or mixing these functions with the class.
>
> **[1:16](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=76)** So if we look at back at our code.
>
> **[1:18](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=78)** So if I'm opening Visual Code again with, let's say, our base here.
>
> **[1:23](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=83)** So let's go back and bring Visual Studio Code.
>
> **[1:28](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=88)** It would be very, very similar to what we've done here.
>
> **[1:31](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=91)** So what I would do is use that particular carMixin as the function.
>
> **[1:37](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=97)** And what I would do as opposed to add it an object.assign let's just scroll down here in an object.assign here, what I would do is add it to the actual class.
>
> **[1:48](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=108)** So I would do something like @ and then the actual name of the function.
>
> **[1:55](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=115)** So in this case, it's carMixin.
>
> **[1:58](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=118)** So it doesn't work here because it's not official in JavaScript but this is how it would work inside of TypeScript.
>
> **[2:04](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=124)** So I would have this carMixin now available in my class.
>
> **[2:09](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=129)** So this is how you could use decorators to add or mixin other function with your classes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4), class. (3), extends (1), case, (1)
> **UI Navigation:** scroll down (3), go to (1)
> **Analogies:** similar to (3), for example (1)
> **Code Identifiers:** carmixin (3)
> **Definitions:** is called (2), is a  (1)
> **URLs:** [typescripeline.org](https://typescripeline.org) (1)
> **Tools:** visual studio (1)
> **Speakers:** - the (1)

#### Model-View-Controller (MVC) pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=0)** - If you've been programming for a few years, you may or may not have heard of the Model-View-Controller pattern.
>
> **[0:06](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=6)** But it is often the first thing you learn as you grow more experience as a developer.
>
> **[0:11](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=11)** This pattern basically defines how an application should be split, and often reflects how your modules are organized within three simple categories, models, views, and controllers.
>
> **[0:24](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=24)** The model is where your data resides, where you define your schemas and the models for your data.
>
> **[0:30](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=30)** The views is where you have your views, or in most cases, the pure HTML of you application, where the visuals are.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=37)** And finally, the controllers are where you have your logic of your application, the functions that makes your application run.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=46)** Following this pattern, most developers split all the files and structure of their application following this pattern.
>
> **[0:53](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=53)** And even sometimes name the folders with these labels.
>
> **[0:57](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=57)** Nowadays, this approach to splitting your application has evolved especially with applications like React.
>
> **[1:04](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=64)** Which is more MVVM?
>
> **[1:06](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=66)** I will explore this shortly, but it remains the basis of how most frameworks and applications are structured.
>
> **[1:13](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=73)** Having a good understanding of what this pattern is will go a long way to understand how most applications are organized.

> [!info]- Semantic Content
>
> **Env Vars:** html (1), mvvm (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - if (1)

#### Model-View-Presenter (MVP) pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=0)** - Now the next pattern is the Model-View-Presenter pattern, which is loosely based on MVC, and almost the same.
>
> **[0:07](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=7)** Looking at both will help define the major differences in between the two, but they offer similar approaches, but architectured differently.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=16)** In an MVC, or Model-View-Controller pattern, we have our application organized in models, views, and controllers.
>
> **[0:25](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=25)** Typically the organization will have views, pull data from controllers or models directly, and if there are any other logic or functions needed for the view, the controllers will supply them.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=37)** So in other words, their views have access to both the models and controllers.
>
> **[0:43](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=43)** Where MVP differs is the view doesn't have to access the model.
>
> **[0:48](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=48)** It has to get it from the presenter and the presenter serves as the logic, and supplier of data.
>
> **[0:55](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=55)** In this pattern, the view passes through the presenter to get the data through functions, and the presenter pulls from the model.
>
> **[1:02](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=62)** It is the major difference.
>
> **[1:05](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=65)** The MVP pattern is seen in several frameworks, such as backbone, but it is quite popular in Android development.
>
> **[1:12](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=72)** So if you plan on developing with Android, understanding this pattern will help you tremendously.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (2), mvp (2)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - now (1)

#### Model-View-ViewModel (MVVM) pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=0)** - The model view view model pattern is similar than the other two we just explored, and is different only in implementation again.
>
> **[0:09](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=9)** It is also sometimes referred to as MVVC, or model view view controller.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=16)** But in both cases, it serves the same purpose.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=20)** The first view is your view which doesn't have any data or logic.
>
> **[0:25](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=25)** It is simply a dumb component, or component without any logic or data.
>
> **[0:30](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=30)** Then you have the second view, model, which holds the logic in a state of the data, and this view model connects to a model.
>
> **[0:40](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=40)** If you would like to see examples of this MVVM pattern, simply develop an architecture applications with React and Angler, and you will see this MVVM approach in action.
>
> **[0:52](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=52)** For example, in React, your application is architectured in stateless components, which are views.
>
> **[0:58](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=58)** Stateful components which hold data and logic, therefore the view model, and then finally the model, is where React typically connects to a back end to process data, where your models are defined.
>
> **[1:11](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=71)** There are many more patterns and opinions about patterns out there in the wild, but all of the application development we see in our daily lives as developers often fit one of the three patterns we've explored in this chapter.

> [!info]- Semantic Content
>
> **Env Vars:** mvvm (2), mvvc (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### 5. 4. Behavioral Patterns

#### What are behavioral patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=0)** - In this chapter, we'll explore all kinds of patterns related to behaviors in our applications.
>
> **[0:05](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=5)** And when we talk about behavioral patterns, it is the most difficult to understand at the base of what it is.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=12)** And if you want to simplify what these patterns are, they are focused on improving communications between objects in a system.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=20)** A good example of this is how we humans continuously add tools to better communicate in between each other.
>
> **[0:26](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=26)** First we had the letter that was first delivered with horse carriers.
>
> **[0:30](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=30)** Then it was improved with the telephone, followed by emails and chat, and so on so forth.
>
> **[0:36](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=36)** These tools helped us communicate faster and more efficiently.
>
> **[0:40](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=40)** You get the idea.
>
> **[0:41](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=41)** Well, behavioral patterns follow a similar approach in code.
>
> **[0:45](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=45)** It offers patterns that help standardize and implement communications in between pieces of code.
>
> **[0:53](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=53)** Please be aware that in some cases, the patterns explored are complex to implement, and therefore, we'll demonstrate through visuals or code already built, so you understand what they are.

> [!info]- Semantic Content
>
> **Warnings:** be aware (1)
> **Speakers:** - in (1)

#### Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=0)** - [Instructor] The Observer pattern is one where we maintain a list of objects based on events, and is typically done with updating data based on these events.
>
> **[0:09](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=9)** It is implemented for example, with the subscribe methods in MeteorJS.
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=13)** Let's take a look at code to see how it looks like.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=16)** So if you go into the exercise files, and then in chapter 4, and then video 04_02, you can drag and drop this folder directly into visuals to do code.
>
> **[0:30](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=30)** And that's a good example of the observer pattern.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=32)** So right now we created a class, so with a constructor we created that class for car.
>
> **[0:39](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=39)** And inside of it we have a gas element, and we have a setter and then we have an observer.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=46)** So basically we're able to set what is the gas level for that car, and then we can observe what is the level of that gas.
>
> **[0:54](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=54)** There's a couple of functions here that allows us to register and then un-register an observer and then notify what is the gas level for that car.
>
> **[1:03](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=63)** So this is a good example of the observer pattern.
>
> **[1:05](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=65)** It can also be shown inside of MeteorJS.
>
> **[1:09](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=69)** So if you go to a browser, and go to "www.[meteor.com](https://meteor.com)" and then in the developers section you go to the Docs, and then search for "publish".
>
> **[1:21](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=81)** And then click on "Publish and subscribe".
>
> **[1:24](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=84)** And then scroll down until you see this example here.
>
> **[1:27](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=87)** So this is a very good example of the observer pattern.
>
> **[1:30](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=90)** So basically Meteor publishes the number of rooms, and then through a subscription, we can actually listen to changes to that specific object.
>
> **[1:41](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=101)** So for this example, it's creating rooms, we're publishing it so we have access and we can read the information for the rooms.
>
> **[1:50](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=110)** The same thing with the subscribe.
>
> **[1:52](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=112)** So we are subscribing so let me just find a subscribe section.
>
> **[1:56](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=116)** So if you can click here, and then scroll down to the subscribe, you can subscribe to the rooms.
>
> **[2:02](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=122)** So now with this code here you can subscribe to, well, this is a different example but it could be subscribing to the rooms, and then understand how many rooms that we have and all the data that's available with the room object we get access to it.
>
> **[2:16](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=136)** So basically this observer pattern is a way to publish information or objects or collections that we have access to, and then we can subscribe to it, or get that information from the observer, and then have access to all the information available for rooms or players or whatever is the data that you're working with.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), scroll down (2), drag and drop (1), click on (1)
> **Definitions:** is a  (4)
> **Code Keywords:** let (2), class, (1)
> **CLI Commands:** find (1)
> **URLs:** [meteor.com](https://meteor.com) (1)
> **Documentation:** the docs (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=0)** - [Instructor] The state pattern has become very popular with React's usage, and now most web development frameworks use it, basically the state pattern is one where we hold the state of the application with all the data and properties needed and when it changes it updates a rendering of the application, and again needless to say, React and Angular, and every state management library are great examples of its use, let's take a look at the React application we have in our exercise files.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=28)** So if you look into the exercise files, under chapter four and then video04_03, you have a React application with several components and state management in here, so let's open that in Visual Studio Code, so I'm going to drag and drop that folder inside of Visual Studio Code, and let's take a look at the application.
>
> **[0:50](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=50)** So basically if we look at the app.js file here, you have a state right here, in your constructor, we are setting our props and then we're declaring a state for React and inside of that state we have news one, news two, and news three, with the type, and then the query.
>
> **[1:08](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=68)** So this is basically a front end that will make queries to an external API and with this information we'll be able to get data.
>
> **[1:17](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=77)** Once we get the data back from the API, we're actually passing down that information, therefore the state of this application to our components here.
>
> **[1:27](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=87)** So we have state news and we're passing to state with news one and news two here.
>
> **[1:32](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=92)** So what are we doing with that?
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=93)** Next, we're going into the news folder, so news folder and then news file here, and then we're declaring a new state with news, so basically we're creating an array of information and the state holds that information and then passes it down to the components to be rendered.
>
> **[1:53](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=113)** So this is the fetch function that actually grabs the data from the API and we're passing down the information that we had in the original file here, and therefore this information calls onto the API and then returns the data which we pass down to the components news here, and then that is the new state with the data, so basically a state, just to summarize, holds the information, or the data that the application needs to render all that data, or even states of the application.
>
> **[2:25](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=145)** So for example, if whenever we have a true information, we are returning or rendering a specific component inside of React, or doing something on the application, so for example if you were to use a chat application, where whenever a true statement turns the color of the fonts of your chat red because somebody is talking to you or typing something well that's a state of the application, and we need data to actually make that happen with the application, and this is how it works, so you have the state, which holds all of the information that you need and then the application reacts based on that, or get the data from the state.
>
> **[3:04](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=184)** So this is what the state pattern is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (1), function (1), pass (1)
> **Env Vars:** api (4)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** for example (2)
> **File Paths:** app.js (1)
> **UI Navigation:** drag and drop (1)

#### Chain of responsibility
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=0)** - [Instructor] The Chain of Responsibility is a pattern to help solve common practical issues of having a request from a client and needing this request to pass through multiple functions or logic to get the result.
>
> **[0:13](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=13)** This is where chain of responsibility comes into play.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=16)** So let's illustrate this with an example.
>
> **[0:19](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=19)** When you hit the Buy button, this particular request goes through a series of functions to finalize the order, and they can quickly grow in complexity.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=28)** So we hit the Buy button, then the application needs to check if you're logged in, then needs to check if it has your address.
>
> **[0:36](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=36)** If not, add an address.
>
> **[0:38](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=38)** Then it needs to calculate the taxes, shipping, process payment, and finally process the order, and display success message.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=46)** Needles to say, this simple action of clicking by has several functions related to it, and if we are to build this application with a modular approach and pure functions, we're talking close to a dozen or more functions being written here.
>
> **[1:01](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=61)** So this is where the chain of responsibility comes into play and where we need to create a proper chain so these events occur in a linear way.
>
> **[1:09](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=69)** What we end up with is a request going through an abstract handler which calls one function or handler after another until the chain is completed.
>
> **[1:19](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=79)** When one handler is completed, we can go to the next one.
>
> **[1:22](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=82)** If there are errors, the abstract handler can provide error information to the back end end client, and so on and so forth.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (2), pass (1), let (1), function (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=0)** - [Instructor] The iterator pattern is another method of iterating through list of items, whereas the chain of responsibility will use more of a handler type and go through a chain.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=10)** The iterator is best used with a for loop and is perfect when you want to iterate through rays of objects.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=16)** Let me demonstrate.
>
> **[0:17](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=17)** So we'll get back to code by using the base.
>
> **[0:18](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=18)** So the first thing I'm going to do is drag and drop this particular folder into Visual Studio Code or on the Windows, you can right click to the folder and then open in Visual Studio Code.
>
> **[0:31](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=31)** And the first thing I'm going to do is remove all the code that we have here.
>
> **[0:35](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=35)** I'll refer back to the code in the exercise files if you need to.
>
> **[0:38](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=38)** So let me just delete that and then what we're going to do is also open the react application.
>
> **[0:43](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=43)** So let's go back to our desktop and then open the exercise files and I believe the react application is right here on 04_03.
>
> **[0:54](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=54)** Let's copy that into a brand new windows of Visual Studio Code like so.
>
> **[0:59](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=59)** And what we're going to do is grab the state from the app.js file right here.
>
> **[1:05](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=65)** So let's go and grab this one here like so.
>
> **[1:09](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=69)** Copy that and now we can close this window and then maximize this one.
>
> **[1:14](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=74)** And what I'm going to do now is paste what I just copied.
>
> **[1:19](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=79)** So the first thing I'm going to change this is call this newsfeeds like so, and then we'll just remove the news like so because this is an array of objects.
>
> **[1:29](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=89)** And make sure that we change this to an array because it's not right now.
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=94)** Perfect, like so.
>
> **[1:37](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=97)** And then let's remove the news2, and the same with news3 and then we can keep everything else.
>
> **[1:44](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=104)** So right now we have an array of objects which is basically newsfeeds.
>
> **[1:48](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=108)** And what we're going to do now is use a for loop to iterate through the items that we have inside of that array.
>
> **[1:55](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=115)** So let's go ahead and create our for loop.
>
> **[1:57](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=117)** So I'm going to do for and then let feed of newsfeeds like so.
>
> **[2:07](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=127)** So we're iterating through the newsfeeds.
>
> **[2:09](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=129)** So for each of the elements we have in our array, so this is one, this is two and this is three, we're going to create a feed object in this for loop.
>
> **[2:22](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=142)** And now we'll have access to do something with that.
>
> **[2:25](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=145)** And then we'll simply console log what we have.
>
> **[2:27](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=147)** So we have a feed that we can actually put something in here, and then we have access to type and query.
>
> **[2:34](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=154)** So what we're going to do is use type like so.
>
> **[2:38](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=158)** So this for loop will iterate through the array and then print out each type of this array inside of our live server.
>
> **[2:46](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=166)** So let's go ahead and save that.
>
> **[2:48](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=168)** Make sure that live server is running so I'm going to go live like so.
>
> **[2:54](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=174)** And then the shortcut to actually open up the developer tools is on Windows, control + shift + I and on Mac, command + option + I.
>
> **[3:03](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=183)** So let's go ahead and do that.
>
> **[3:05](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=185)** So for my case, it's command + option + I.
>
> **[3:08](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=188)** And as you can see right now, we're iterating through our arrays, so the first one or the first type is top-headlines.
>
> **[3:16](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=196)** And then we have everything twice.
>
> **[3:18](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=198)** So if we go back to our array that we actually created, we have top-headlines which is once and then we have everything twice.
>
> **[3:26](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=206)** So if we want to see something different, we could write something like technology news or something like that.
>
> **[3:33](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=213)** Technology, and then save, and then go back to our server.
>
> **[3:37](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=217)** And now you'll see that we have top-headlines, everything, and then technology.
>
> **[3:41](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=221)** So this is how the iterator pattern works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), delete (1), else. (1), case, (1)
> **Cross-References:** go back to (3)
> **Tools:** visual studio (3)
> **UI Navigation:** open the (2), drag and drop (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (2)
> **File Paths:** app.js (1)
> **Definitions:** is an  (1)

#### Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=0)** - [Instructor] The strategy pattern is basically a way to encapsulate different algorithms or functions and then at runtime practically use the same code to run different scenarios.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=10)** And we've used this approach in some of the code we've written thus far.
>
> **[0:14](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=14)** So let me show you.
>
> **[0:15](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=15)** So basically if you go into the Exercise Files, and either you use 02_03 or the actual files for this video, so 04_06, it's the same thing.
>
> **[0:26](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=26)** So let's go ahead and use that.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=28)** So I'm going to drag and drop this inside of Visual Studio Code.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=32)** And you probably recognize this pattern that we've done in video 02_03.
>
> **[0:37](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=37)** So we created a class car with a constructor with doors, engine, and color as arguments, which we prepped with the constructor here.
>
> **[0:46](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=46)** And then we've extended that with the SUV.
>
> **[0:48](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=48)** And then, again, we added the doors, engine, color and then add this wheels of the number of wheels for a SUV.
>
> **[0:56](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=56)** But the strategy pattern is happening right here.
>
> **[0:59](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=59)** So because we've created something before, a class car or class SUV, we're actually using the strategy pattern here because we're using or reusing the classes to create new cars.
>
> **[1:12](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=72)** So with this one line here, we're creating a Civic.
>
> **[1:14](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=74)** And then we're creating a CX-5.
>
> **[1:17](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=77)** And then we could continue by creating more cars with the same command.
>
> **[1:21](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=81)** So that's basically what the strategy pattern is.
>
> **[1:24](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=84)** We're encapsulating code by creating a class, or it could be a function, or it could be anything.
>
> **[1:30](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=90)** And then we're reusing that code multiple times to create new cars or new objects of these cars.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), class, (1), function (1)
> **Env Vars:** suv (3)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Memento pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980&t=0)** - [Instructor] The memento pattern is basically providing temporary state of an object and restoration of that object from a conversion into a different format or whatnot.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980&t=10)** It is often used into serialization and deserialization of data.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980&t=16)** In this use case, an object is typically in a JavaScript object, where we need to transmit the data to some type of back-end, where we serialize this object into JSON for streaming it through HTTP protocols.
>
> **[0:29](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980&t=29)** Then, when this object hits the back-end server, or when we get a response back from the server through HTTP, we might need to deserialize the JSON object back into a JavaScript object for consumption into our application.
>
> **[0:43](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980&t=43)** Well, this is basically the memento pattern in action, where the data never loses its accuracy, despite several conversions in between formats.

> [!info]- Semantic Content
>
> **Env Vars:** json (2), http (2)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### Mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=0)** - [Emmanuel] The mediator pattern provides a set of objects which interact with each other, mostly by having a central authority dictating the terms in between objects.
>
> **[0:10](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=10)** It is best demonstrated with example code.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=12)** Take a look at the exercise files, and pull the files from this video.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=16)** You'll see here an example that is often used to demonstrate the mediator pattern.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=21)** So basically what we have here is first a class called TrafficTower, so we're creating a tower, and inside of that tower we have a list of all the airplanes.
>
> **[0:31](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=31)** And then we can actually request all the positions of the airplanes from that TrafficTower.
>
> **[0:38](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=38)** And then we have a class called Airplane, and we're basically building a constructor with the position and trafficTower, and so on and so forth.
>
> **[0:47](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=47)** And then we have a function that requests positions from the traffic tower.
>
> **[0:51](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=51)** So basically the airplane can actually track itself from the traffic tower and then the traffic tower can actually request the positions of each airplane.
>
> **[1:00](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=60)** So this is a great example of the mediator pattern.
>
> **[1:03](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=63)** So basically again, it's the interaction with each of the classes that are important in this pattern.
>
> **[1:10](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=70)** So again, we're basically interacting from the traffic tower to the airplane, requesting the positions of the airplane, and then the airplane actually can go ahead and provide its position to the traffic tower by having that requestPositions here.
>
> **[1:25](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=85)** So this is how we actually interact in between each classes, and a great example of the mediator pattern.

> [!info]- Semantic Content
>
> **Code Identifiers:** traffictower (1), requestpositions (1)
> **Code Keywords:** function (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [emmanuel] (1)

#### Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=0)** - [Instructor] The command pattern is one that encapsulates actions or operations as objects.
>
> **[0:05](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=5)** So in other words, in this pattern you abstract the actual function or execution of the action from the action itself.
>
> **[0:12](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=12)** And if this sounds a bit weird, it is best represented through code.
>
> **[0:16](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=16)** But if you have been using Redux for any amount of time you've used the command pattern.
>
> **[0:21](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=21)** Which is where we use it by extracting the actions, which are called from the execution of the actions, which are reducers.
>
> **[0:28](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=28)** It is also often used in functional programing.
>
> **[0:32](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=32)** So let me show you through code on the Redux website.
>
> **[0:36](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=36)** So go to Redux.[js.org](https://js.org) and go in the Getting Started section.
>
> **[0:42](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=42)** And then scroll to the Basic Tutorial, click on it, and then find the Example Todo List.
>
> **[0:48](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=48)** So this is a good example of a program or todo list, where we can actually see reducers, actions, and the container components in action, or the command pattern.
>
> **[0:59](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=59)** So basically, you have the action creators, which basically creates all the actions that you need.
>
> **[1:04](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=64)** So the ones that we're going to take a look at are the visibility filters.
>
> **[1:08](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=68)** Then you have the reducers, which executes the actions.
>
> **[1:12](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=72)** And if we want to take a look at the reducers related to visibility filters, this is where they are.
>
> **[1:18](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=78)** And then they contained a components which basically executes or calls onto the reducers and the actions.
>
> **[1:25](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=85)** Your presentational component calls on into the container component here and goes through the list of switch cases here.
>
> **[1:35](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=95)** So the if statements, so if we have a case where we show all or a case where we show completed, these called the action creators.
>
> **[1:44](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=104)** So we go back here and these called one of those three.
>
> **[1:48](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=108)** So once we have one co those three called, what it does, it goes through the reducers where they're executed.
>
> **[1:54](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=114)** And let's just scroll down to the actual reducer in question.
>
> **[1:58](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=118)** And then it goes through the switch case here, where it says, "Well, if we have selected this specific action, do this, or otherwise, do that."
>
> **[2:06](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=126)** So we're returning a state.
>
> **[2:08](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=128)** So something that we've seen earlier in the course.
>
> **[2:12](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=132)** So this is a good example of the command pattern where each function is abstracted from each other.
>
> **[2:18](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=138)** But still used through the execution of the code inside of the application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), switch (2), abstract (1), this, (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **Definitions:** is a  (2), in other words (1)
> **File Paths:** redux.js (1)
> **CLI Commands:** find (1)
> **URLs:** [js.org](https://js.org) (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** getting started (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980&t=0)** - [Emmanuel] Learning about JavaScript design patterns is a great step in your developer evolution, and often is taken when you've got some experience with JavaScript.
>
> **[0:08](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980&t=8)** If you got lost at any point from your lack of JavaScript knowledge, I'd suggest you go back to the drawing board and take a look at some of our basic JavaScript courses: essentials, scoping, classes, and more.
>
> **[0:20](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980&t=20)** The next step is really about pushing your knowledge further so if you got some experience and are ready to tackle more complex subjects, go and take courses on the latest ES7 syntax or beyond in what are the latest additions to the language.
>
> **[0:35](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980&t=35)** And, finally, if you want to apply any of this knowledge with libraries, take a look at courses related to React, Angular, and backend libraries like Express and Node.
>
> **[0:45](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980&t=45)** Thanks very much for taking my course and I'll see you in a bit!

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** es7 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Software Design Patterns
- JavaScript

## Path Context

### In [[Improve Your JavaScript Language Skills]]
← [[JavaScript- Maps and Sets]] | **7 of 8** | [[JavaScript Patterns- Modern Solutions to Common Challenges]] →

## Appears In

- [[Improve Your JavaScript Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)