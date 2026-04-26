---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-best-practices-for-data
url: "https://www.linkedin.com/learning/javascript-best-practices-for-data"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 5/12/2025
learners: 4087
skills:
  - Data Management
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHevwWci54yAw/learning-public-crop_675_1200/B56ZbF5V1qH4AY-/0/1747076866057?e=2147483647&amp;v=beta&amp;t=ZXfyW_-0w50tAR6BrrmqTh2d6HNbqrORNP93V8N4Uqo"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[Javascript Best Practices For Code Formatting]]'
next_courses:
  - '[[JavaScript- Test-Driven Development (ES6)]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":2,"total":10,"prev":"Javascript Best Practices For Code Formatting","next":"JavaScript- Test-Driven Development (ES6)"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/data-management
  - skill/javascript
status: not-started
created: 2026-04-21
---

![JavaScript: Best Practices for Data](https://media.licdn.com/dms/image/v2/D560DAQHevwWci54yAw/learning-public-crop_675_1200/B56ZbF5V1qH4AY-/0/1747076866057?e=2147483647&amp;v=beta&amp;t=ZXfyW_-0w50tAR6BrrmqTh2d6HNbqrORNP93V8N4Uqo)

# JavaScript: Best Practices for Data

> You know you want to write JavaScript code for maximal consistency, maintainability, and comprehensibility. Logic is one thing—data is another. This course explores the tools and approaches for keeping your data and data structures clean, uncluttered, and efficient. Instructor Sasha Vodnik introduces best practices from industry-standard style guides and introduces tools that will help you flag de

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data) | 1h 24m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available

## Skills Covered

- Data Management
- JavaScript

## Table of Contents

### Introduction

#### Working effectively with JavaScript data
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=0)** - When you write JavaScript code that works with data, you have so many formatting choices.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=5)** Some decisions you make may be habits you picked up when you started coding or even carried with you from another programming language.
>
> **[0:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=12)** I built this course to share some best practices for working with data in JavaScript that have solid reasons behind them and others that are just industry standards.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=21)** We'll look at declaring variables and assigning values.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=24)** We'll also explore approaches for typecasting and for value comparisons, and we'll set up ESLint rules that help you keep your code consistent.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=33)** After we're done, you'll be able to write polished code and explain why your code style choices make sense.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - when (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have some experience coding in front-end JavaScript including modern ES6 syntax.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/what-you-should-know?u=76281980&t=7)** If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/what-you-should-know?u=76281980&t=13)** To familiarize yourself with modern JavaScript syntax, explore a course on ES6.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (2)
> **Speakers:** - [instructor] (1)

#### Setting up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=0)** - To work along with me on the files for this course, you need a few applications: ESLint, a code editor, and optionally, a web browser.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=10)** ESLint is a command-line utility that you install using the node package manager, or NPM.
>
> **[0:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=16)** NPM is part of the Node.js runtime.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=20)** If you don't have Node installed, start by visiting Node.[js.org](https://js.org) and installing the LTS version.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=27)** With that installed, open your terminal application and navigate to the exercise files folder that contains the files for this course.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=35)** We're going to start by initializing this directory for our use with NPM.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=40)** So we're going to type NPM + Space + init, and press Enter.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=45)** It's going to ask you a series of questions and you're just going to press enter for all of them.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=50)** For right now, we're not concerned about the configuration here at all.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=53)** So I'm just going to keep pressing Enter.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=63)** And then when I get a new command prompt, I'm all good.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=66)** So now I have this directory initialized for NPM and now I can install ESLint, so that next command is going to be NPM + install + ESLint.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=78)** And this is going to install the files that will enable you to use ESLint on the command line.
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=84)** Now I have a warning here, and that's not a problem.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=86)** It's just telling me that if I'm really serious about this later on, I can go configure a file with some more information.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=93)** But for my use in this course, this is just fine as is.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=96)** A number of great code editors are available, both free and paid apps.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=101)** Any editor that lets you edit and save plaintext is fine for this course.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=106)** So if you have a code editor you like, like Sublime Text or Atom, it's fine to use it.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=111)** I use Visual Studio Code in these videos, which is a version of Microsoft's Visual Studio, created specifically for web development.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=119)** Visual Studio Code is free and has Windows, Mac, and Linux releases.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=124)** The code is available on GitHub and users can submit issues there as well.
>
> **[2:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=128)** I've turned on word wrap in my editor.
>
> **[2:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=131)** Word wrap ensures that long lines of code don't run off the screen.
>
> **[2:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=134)** If you're using Visual Studio Code and you want to do the same, open settings by pressing Command + , on a Mac, or Control + , on Windows, and that opens up the settings.
>
> **[2:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=145)** Now up here in the "search settings" box, type, "word wrap," and in the filtered list, the first thing that should show up is "Editor: Word Wrap."
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=155)** Mine's already on, but if you need to change it, just click the arrow over here and select "on" from the list.
>
> **[2:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=161)** Then when you're done, go up and click the "X" to close the settings tab.
>
> **[2:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=166)** I've also installed a couple extensions to Visual Studio Code.
>
> **[2:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=170)** The ESLint extension by Dirk Baeumer enables Visual Studio Code to highlight code that violates rules specified in a project's ESLint configuration file.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=180)** I'm going to lean heavily on this in my videos so that I don't actually have to build a project after each change.
>
> **[3:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=186)** I'll instead have that formatting right in the editor that's going to show me whether ESLint has found an issue.
>
> **[3:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=195)** Live Server by Ritwick Dey is an HTTP Server you can launch with a single click that automatically opens the current document in your default browser.
>
> **[3:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=204)** This makes testing code in the browser quick and easy to do.
>
> **[3:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=208)** I'll be using the console in a web browser in this course.
>
> **[3:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=212)** But a modern editor like Visual Studio Code has a built-in console that you can use to test your JavaScript code without ever switching to a browser.
>
> **[3:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=220)** If you're comfortable using those built-in tools in your editor, that's a fine alternative.
>
> **[3:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=224)** And either way, you undoubtedly already have a web browser installed in your machine and any major modern browser, Chrome, Firefox, or Microsoft Edge, is fine for this course.
>
> **[3:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=235)** I'll be using Chrome is these videos, which includes a powerful suite of developer tools.
>
> **[3:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=239)** If you want to learn more about anything I use or talk about in this course, I encourage you to explore the library for a deeper dive on that topic.
>
> **[4:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=246)** Now let's get started.

> [!info]- Semantic Content
>
> **Tools:** visual studio (7), terminal (1), command prompt (1), command line (1), sublime (1)
> **CLI Commands:** npm (6), node (4)
> **Env Vars:** npm (6), lts (1), http (1)
> **Prerequisites:** install (4), configure (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** node.js (2)
> **Code Keywords:** type, (1), let (1)
> **URLs:** [js.org](https://js.org) (1)


### 1. Why Best Practices?

#### Understanding style guides
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=0)** - [Instructor] If you've already watched one of my other courses on JavaScript best practices, you may already have the background under your belt.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=6)** If so, feel free to skip ahead to chapter two.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=9)** If this is your first time exploring best practices, it's useful to understand where they come from.
>
> **[0:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=15)** And that's style guides.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=17)** A style guide is a set of agreements on how to write code for everyone working on a common code base.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=23)** Whether that's on an organizational level, a project level, or even a specific repo, a style guide often combines approaches that developers have found useful in working with that code base with choices that developers have made about how to build and organize that code.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=38)** Although guidelines can be project specific, they may also be drawn from broader industry wide understandings about the best approach to certain aspects of building code known as best practices.
>
> **[0:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=49)** Some best practices may be nearly universal.
>
> **[0:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=52)** For instance, most every developer agrees that using consistent indents is helpful both in building and reading code.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=59)** However, many best practices come with trade offs.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=62)** As a result, managers, project leaders, or groups of developers may need to choose which approach is best for a specific code base.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=70)** For instance, modern JavaScript provides an almost overwhelming range of options for creating functions.
>
> **[1:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=76)** When working on code collaboratively, does it make more sense to use a function declaration or an expression with let or with const?
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=84)** Maybe an arrow function but with let or const?
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=88)** And if you're using a function expression, should it include a lexical function name to help with debugging?
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=93)** A style guide based on best practices does a couple things.
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=97)** First, it keeps you coding rather than needing to break your flow while you try to balance the options and choose a syntax.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=104)** It also ensures that the code you write interacts with the rest of the code base in a particular way.
>
> **[1:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=110)** For instance, defining a function using const ensures that it can't be erroneously redefined.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=115)** As you build your knowledge of best practices, keep in mind that there's often no right answer.
>
> **[2:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=120)** So it can be useful to understand the trade offs.
>
> **[2:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=123)** Different projects may make different choices that work best for a specific team, architecture, or goal.
>
> **[2:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=130)** The Airbnb Guide is one of the most widely referenced style guides among JavaScript developers.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=136)** Another is the Google Style Guide.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=141)** Many best practices can and do change over time.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=144)** This is especially true in the modern JavaScript landscape where new features are regularly introduced as optimized replacements for previous practices.
>
> **[2:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=153)** So staying on top of changes in these style guides as well as keeping up with other style guides that colleagues or developers you respect may be referencing can be helpful in ensuring that your code reflects up-to-date formatting practices.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), const (3), let (2), from. (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Using modern deployment tools
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=0)** - [Instructor] In the early days of JavaScript, the code a developer wrote was the code that was executed in every browser or other user agent.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=7)** Over time, JavaScript evolved and added new features.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=11)** However, because not every user was using the newest version of a browser, developers had to write code targeted at the lowest common denominator.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=19)** That is, the browser with the fewest modern features that still maintained a critical mass of users.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=25)** This meant that developers were constrained from using the newest features or had to write and maintain multiple versions of the same code.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=33)** The modern JavaScript workflow has resolved this issue using transpilers.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=38)** A transpiler is a utility that accepts JavaScript code written using modern features, and returns code that does the same job as the original but is written without modern features.
>
> **[0:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=49)** Babel is an example of a popular transpiler for JavaScript.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=53)** Including a transpiler in your deployment process means that you can take advantage of modern and even cutting edge JavaScript features without worrying that your code won't perform as expected for users of older browsers.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=65)** Not every modern JavaScript feature can be transpiled however.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=70)** But for those that can't, developers use another tool, the polyfill.
>
> **[1:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=74)** A polyfill is a library that you include with your code at deployment.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=78)** Because a transpiler can't rebuild some code for older browsers, the job of a polyfill is to instead add the functionality of the new feature to older browsers.
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=88)** Promises and Fetch are a widely used example or a feature that requires a polyfill for backward compatibility.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=95)** With transpiling and polyfills in the developer toolbox for JavaScript developers, the group that maintains JavaScript standards has been free to innovate without worrying about proposed changes never being widely available.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=108)** As a result, many new features of JavaScript serve to help developers write cleaner, more manageable code, rather than to add new capabilities to the language.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=118)** It's due to the widespread use of Babel and polyfills, that many modern JavaScript best practices involve use of these developer focused features.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Understanding ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=0)** - [Instructor] ESLint is a utility that flags deviations from selected best practices right in your editor as you code.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=7)** ESLint is widely used by Java script developers to catch and correct issues before testing and deploying.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=14)** Although ESLint allows you to load a default set of rules, one of it's strengths is it's configurability.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=20)** It's unlikely that you'll want to enforce every one of the rules in your code.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=25)** Or that you'll make precisely the same choices as the defaults.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=29)** For this reason, it's important to understand how to configure ESLint, otherwise using it can be an exercise in frustration as you have to ignore its warnings when they're not relevant to your preferences.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=40)** With ESLint installed I could run a configuration utility, however, this builds out a package that JSON file and associated modules that I don't need here.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=50)** So instead, ESLint supports rules written using Java script itself, as well as YAML or JSON.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=57)** I'm going with Java script.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=59)** So the file is .eslintrc.js.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=62)** The file contains a module dot export statement.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=65)** And within that, a couple keys.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=68)** One is the ENV, or env key, which specifies the environment I'm using it in.
>
> **[1:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=74)** Because I'll be using ES6 syntax in my code, I specify the ES6 key with a value of true within the ENV object.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=82)** The other key is named "rules" and has another object, literal, as its value.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=87)** Within that object, I can simply add rule names and values as properties.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=93)** Those rule names are specified in the documentation at [eslint.org](https://eslint.org).
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=97)** In each video in this course, I'll add the corresponding ESLint rule or rules if they exist.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=103)** In general, you can conficure a single .eslintrc.js file at the root directory of the files you want it to apply to.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=111)** For this course, I'll have a different version in each folder because I'll be adding rules as I go along.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=118)** You'll notice that .eslintrc.js starts with a dot, and that's significant.
>
> **[2:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=123)** The dot marks it as a configuration file to your operating system.
>
> **[2:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=127)** These are commonly referred to as "dot files."
>
> **[2:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=130)** You may find that this file is not visible in your file manager even though you can see it in your editor.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=136)** The default configuration for both Mac and Windows is to hide dot files.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=141)** As long as you can see the file in your editor, though, you can open it and save changes.
>
> **[2:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=146)** If you want to display hidden files in your operating system, like I have here, I recommend going to [stackoverflow.com](https://stackoverflow.com) and searching for recommended steps.

> [!info]- Semantic Content
>
> **Env Vars:** json (2), env (2), es6 (2), yaml (1)
> **File Paths:** eslintrc.js (3)
> **CLI Commands:** make (1), find (1)
> **URLs:** [eslint.org](https://eslint.org) (1), [stackoverflow.com](https://stackoverflow.com) (1)
> **Code Keywords:** module (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)

#### Foundational practice: Always use strict mode
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=0)** - [Instructor] No matter which other practices are in your style guide or what modern JavaScript features you may be using, your first step when writing code should be to ensure that you're working in strict mode.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=10)** Indicating that code should be interpreted in strict mode specifies to user agents like browsers that they should treat code literally as written and throw an error if the code doesn't make sense.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=22)** Without strict mode turned on.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=24)** user agents often go through a series of modifications to problematic code in an attempt to get it to make sense.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=31)** In the start files for this video, I'm going to create and then log a variable.
>
> **[0:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=36)** My idea is to build an app to get a user's location and identify nearby events.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=41)** And I'll use const for my variable just for a placeholder location, and then I'll console that log it.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=46)** So const city equals Chicago and console.log city.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=55)** And I'll save that, I'll switch to my HTML file, and I'll run Live Server.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=61)** And I'll open up my console here.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=64)** And I can see that the value of my variable is logged, just like I expect.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=68)** Now, going back to the editor, what if I accidentally failed to declare my variable, but just set a value?
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=75)** So I'll delete const.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=80)** And save that.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=82)** And then back in the browser, I can see that the value is logged once again.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=87)** That's because my browser is trying to tease out meaning from my malformed code.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=91)** It figures that even though I didn't declare this variable, I'm setting a value for it, so I must have just meant to declare it.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=98)** Now, on the surface, that can seem like a fine thing.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=101)** And indeed, working outside of strict mode makes it possible for people to get their feet wet with JavaScript code without having quite all the details nailed down.
>
> **[1:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=110)** But as a developer, I don't want to leave a bug in my code, because I know it could come back and bite me later on.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=116)** And I also just want to write good code, and that's where strict mode helps out.
>
> **[2:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=121)** So back in my editor, I'm going to add a new first line in my file, and that's the string use strict.
>
> **[2:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=131)** Now, this is technically just a string, and that's the magic that prevents it from throwing an error in older browsers.
>
> **[2:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=137)** They'll just see a string here and move on in the code.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=140)** But modern browsers recognize this string as a statement to switch into strict mode.
>
> **[2:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=145)** So saving and checking back in the browser, now I have a reference error, which is what I want when I'm trying to work with a variable that I haven't defined.
>
> **[2:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=153)** So going back to my code one more time, the console points me to the error on line two, and I'll just add const at the start of the statement.
>
> **[2:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=163)** I'll save, and then back in the browser, I'm all good again, and my name is logged.
>
> **[2:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=169)** Although strict mode may seem like it creates more work on the front end, it actually is a really good trade-off because it saves more headaches later on as you weed out bugs in the code as you're writing it.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=180)** So make sure the first line in any JavaScript file you create is use strict.
>
> **[3:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=185)** I can enforce this using ESLint.
>
> **[3:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=190)** Opening my .eslintrc.js file, and within the rules object, I'll add the strict key.
>
> **[3:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=199)** This rule takes an array of two values.
>
> **[3:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=201)** The first is the severity of the issue if it arises, which can be off, warn, or error.
>
> **[3:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=207)** And the second is when strict mode is required, which can be only in functions or globally.
>
> **[3:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=213)** I want this to trigger an error and I want to require a single global strict mode declaration in my code.
>
> **[3:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=219)** So strict and then an array, which is error and global.
>
> **[3:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=230)** And then saving that.
>
> **[3:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=232)** I'll go back to my app.js file and I'll just comment out my use strict statement.
>
> **[3:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=239)** And now my remaining code is underlined in red and my file name in the explorer sidebar is displayed in red with a circle next to the file name containing a one, which is the count of errors in my file.
>
> **[4:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=251)** These are both a result of the error setting.
>
> **[4:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=253)** And if I hover over the underlined code, I see the error message, which indicates that I've chosen to enforce the global form of use strict.
>
> **[4:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=262)** So I'll uncomment my use strict statement and the issues go away.
>
> **[4:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=268)** And I'll save and I'm all good.
>
> **[4:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=271)** Including this use strict statement will work in concert with ESLint to ensure that both the editor and the parser prompt me about any lazy coding practices, which will increase the overall quality of my code.

> [!info]- Semantic Content
>
> **Code Keywords:** const (4), switch (2), throw (1), delete (1), require (1)
> **CLI Commands:** make (3)
> **File Paths:** eslintrc.js (1), app.js (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)


### 2. Declaring Variables

#### Prefer const, then let
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=0)** - [Instructor] I've written some code using the old school var statement for my variables.
>
> **[0:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=4)** But var has drawbacks, and I want to take advantage of let and const instead.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=9)** I can enforce this across my code base with the eslint no var rule.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=14)** With a simple string value, I can get eslint to throw errors for any var declaration.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=20)** Now it's important to be thoughtful about implementing this in a large code base, because weeding out var statements can have ripple effects in some circumstances.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=28)** But especially as you're starting a new project, or with a small code base, this rule can be helpful in getting off on the right foot.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=35)** So in my .eslint.rc.js file, I'll add a new line in the rules section.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=41)** And I'll add no-var with a value of error.
>
> **[0:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=47)** I'll save that, and then over here in my js file, I suddenly have a lot of issues showing up because it's full of vars.
>
> **[0:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=56)** I have few enough statements here I can do a search and replace to switch to let statements.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=61)** So I'll do a command F, which is control F on Windows.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=66)** And I'm going to click this arrow here, that lets me switch to replace mode in VS code.
>
> **[1:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=72)** I'm going to look for var and a space, just to make sure if I have a word that starts with var or includes the letters var, that it's not also going to hit that.
>
> **[1:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=81)** And I want to replace with let space.
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=84)** And I'll just use the Replace All button.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=89)** And I'll close up that replace box.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=92)** Now I'll save those changes.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=93)** And I'm left with just one error.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=98)** And this is flagging a re-declaration.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=101)** And that's because one of the superpowers of let is that I can't re-declare a variable.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=106)** And that's sloppy coding, which might make me think the variable is being instantiated here.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=111)** So this error from the parser is one reason why I wanted to get away from var in the first place.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=116)** I could add another eslint rule, no re-declare, if I was using var in my code.
>
> **[2:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=122)** But using only let and const already ensures that I can't re-declare.
>
> **[2:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=126)** Instead, I'll delete that let so this is simply a reassignment.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=132)** And then I need to repeat that for the next statement.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=136)** Now I'm all good, my code is error free.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=140)** So I'll save that.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=141)** I'll switch to my html file and go live.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=144)** And in my console I get no errors.
>
> **[2:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=148)** I even get a value log.
>
> **[2:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=149)** Modern js also makes the const keyword available.
>
> **[2:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=153)** And so far, I'm not using it.
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=155)** But in general, it's best to use const for any variable that I don't intend to reassign.
>
> **[2:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=160)** Eslint has a rule for this as well: preferred const.
>
> **[2:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=164)** With a simple string value for the rule, any variable I do reassign in my code is good to use let.
>
> **[2:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=171)** But the rule catches any variable that never gets reassigned, because that's exactly what I should be declaring with const.
>
> **[2:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=177)** Identifiers like functions are an obvious choice.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=180)** In my eslint RC file, I'll add another line to the rules section, and add prefer-const with a value of error.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=191)** I'll save that, switch back to my JavaScript.
>
> **[3:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=193)** And I have one error up here, and when I hover over that, my eslint extension points out that this variable was never reassigned.
>
> **[3:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=201)** So I'll change that to a const to get rid of that error.
>
> **[3:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=205)** I can also see I have three functions here.
>
> **[3:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=208)** I don't want those reassigned, so I'll change those all to const.
>
> **[3:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=218)** And now I want to run my code again, so switching back to the browser.
>
> **[3:42](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=222)** And now I've got an error.
>
> **[3:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=224)** So this is flagging for me that I've reassigned functions to values later in my code, which is an error.
>
> **[3:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=230)** That error's on line 28.
>
> **[3:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=232)** So I'll scroll down, and there we down.
>
> **[3:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=235)** My functions are square, double, and triple, and down here I've reassigned all of those.
>
> **[3:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=239)** So I'll just go ahead and comment out these lines.
>
> **[4:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=242)** Because clearly I didn't need to do that.
>
> **[4:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=245)** Then I'll switch back to the browser and I'm good in that console.
>
> **[4:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=248)** Everything ran and I got my value again.
>
> **[4:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=251)** So scrolling back up, I'll take one more look at my declarations.
>
> **[4:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=254)** Now CD ratio and EF ratio I do reassign later.
>
> **[4:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=258)** But I have AB ratio up here that I don't reassign.
>
> **[4:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=262)** So I'll change that to const.
>
> **[4:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=265)** And then I'll run my code and I get an error on line 19 and that is telling me that I have assigned to a constant.
>
> **[4:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=273)** So checking my code on line 19.
>
> **[4:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=277)** This is a subtle error, but here I've used an assignment operator when I meant to compare.
>
> **[4:42](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=282)** So this is another place where using const when you mean it can be really helpful, because that helps me realize that I made an error here.
>
> **[4:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=289)** So changing that to a triple equality for comparison, change that and save it.
>
> **[4:54](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=294)** And then back in my browser my code works.
>
> **[4:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=297)** I have no errors, and I have no eslint errors in the editor, and I'm using let and const in the appropriate places which makes my code a little more bulletproof.

> [!info]- Semantic Content
>
> **Code Keywords:** const (12), var (11), let (8), switch (5), throw (1)
> **UI Navigation:** switch to (3), scroll down (1)
> **CLI Commands:** make (2), cd (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** eslint.rc.js (1)
> **Cross-References:** later in (1)
> **Tools:** vs code (1)
> **Best Practices:** it's best to (1)

#### Use individual statements to create variables
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=0)** - [Instructor] JavaScript allows the declaration of multiple variables using a single keyword, like in my code here.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=5)** It can make code more concise, but it has some drawbacks.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=9)** One issue is that it's a little too easy to put in a semicolon instead of a comma, or vice versa, and that kind of error is subtle and can be difficult to identify.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=18)** Also, when you're using a debugging tool, you can step through separate statements individually, rather than all at once when they're declared like this.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=27)** So I prefer to use separate statements when I create variables.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=30)** ESLint has a rule for this, which is one bar.
>
> **[0:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=34)** This rule supports a lot of configuration options for different keywords.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=38)** But I want to do a more broad-based rule.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=41)** I need to specify an issue level and a rule as an array.
>
> **[0:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=44)** So that's one dash var colon, and then my array with an issue level of error, and a rule of never.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=58)** So I'll save that, and over in my app.js file, I have errors.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=63)** Now, fixing this isn't hard.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=64)** I just have to replace the commas with semis and add keywords where they're missing in my new statements.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=70)** So let color, let background, let size.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=78)** And I'll save that, and likewise for const, and we'll make that a const as well.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=87)** And now, my errors are gone.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=89)** I have the code open in my browser, so we'll check there, and there's no errors.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=94)** And so, now I have easier to maintain code with a separate statement for each variable declaration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), const (2), this. (1), this, (1), var (1)
> **CLI Commands:** make (2)
> **File Paths:** app.js (1)
> **Speakers:** - [instructor] (1)

#### Create descriptive variable names
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=0)** - [Instructor] Brevity may be the soul of wit.
>
> **[0:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=2)** But as my variable names here illustrate, writing code requires striking just the right balance between brevity and clarity.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=10)** I have four variables here named A, B, X and Y.
>
> **[0:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=15)** Looking at the first two, which are arrays, I can make a guess about what each contains, but I can't be sure.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=21)** Inventory in a store's produce section, a couple shopping lists, ingredients for recipes.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=27)** The final two are pretty much a complete mystery.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=30)** Just numbers with no context.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=32)** Now, when a parser is processing my JavaScript statements, it doesn't care about variable names at all.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=38)** But for me and other humans working with the code, it's really helpful to understand what a variable is meant to contain.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=45)** This lets me verify that the data matches the intent and also helps me understand the flow of my program as the variable's referenced in other statements.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=55)** My first two variables are intended simply as lists.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=58)** The first are fruits and the second are vegetables.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=61)** So I'll rename the first, fruits.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=65)** And I'll rename the second, veggies.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=68)** That's a compromise from the full word, which is long, but this still gives me enough information to understand what the content is.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=75)** The third and fourth variables are a little more involved.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=78)** The first represents an inventory ratio and the second is the previous year ratio.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=83)** Picking a single word like ratio or previous, is still not going to be enough information.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=89)** In a situation like this, another option is to put multiple words together.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=94)** There are a couple main approaches.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=96)** One is to use an underscore between words.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=98)** This is sometimes known as snakecase.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=100)** Perhaps due to its popularity in the Python programming language.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=103)** So I can replace these variable names with something like, inventory and underscore ratio and maybe the second one previous, underscore year, underscore ratio.
>
> **[1:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=117)** And now they're pretty readable.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=119)** In JavaScript though, camelcase is pretty standard.
>
> **[2:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=122)** Where the first word is all lowercase and each subsequent word gets an initial cap, so I can still easily identify the separate words.
>
> **[2:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=130)** And that's what I prefer to use.
>
> **[2:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=131)** If for no other reason, then it's shorter and easier to type.
>
> **[2:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=135)** ESLint supports the camelcase rule, all lowercase.
>
> **[2:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=139)** So I'll add that, back in my ESLint RC file, camelcase, with a value of error.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=151)** I'll save that and now back in my code, I have a couple errors flag, because the camelcase rule is specifically watching for the use of snakecase in variable names.
>
> **[2:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=161)** So I'll replace inventory ratio, with inventory capital R ratio.
>
> **[2:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=166)** And previous year ratio, can become previous capital Y year, capital R ratio.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=173)** Now my variables all have descriptive names using camelcase and my code is easier to understand.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), python (1)
> **Code Keywords:** this, (1), type. (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Standardize acronym case
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=0)** - [Instructor] I'm working with three variables here whose names all include acronyms.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=6)** COGS is used in business as a shorthand for cost of goods sold.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=10)** YTD is a financial abbreviation for year to date, and I'm using NOP to stand for net operating profit.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=17)** No matter how faithful I am with my camel case, it can all get really confusing really fast when I throw an acronym into the mix.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=25)** In some places, acronyms are all caps, while in others, an acronym is denoted by an initial cap.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=31)** Either standard can require its own approach in variable naming.
>
> **[0:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=34)** My first variable name uses all lowercase, which is standard for a single word variable name.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=40)** My second uses an initial cap for the acronym, then camel cases the next word.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=45)** And my final variable uses the all caps format for an acronym.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=50)** Add into the mix the fact that an initial cap to variable name has specific meanings in JavaScript, and picking a name can make your head spin.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=58)** And this isn't just a problem for developers.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=61)** There's inconsistency built into the language itself.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=64)** There's perhaps no better example than XMLHttpRequest, which uses all caps for the first acronym, then camel case for the second.
>
> **[1:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=72)** Now, there many be solid logic behind this capitalization scheme, but teasing out a regular rule from this is a pretty tall order.
>
> **[1:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=79)** I prefer to capitalize all acronyms in my code.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=82)** Other developers go for treating acronyms as standard words, which are all lowercase unless affected by camel case.
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=88)** Whichever approach you choose, using it consistently means reading variable names isn't a constant process of teasing out which words they're composed of.
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=97)** In my code, I want to change COGS to all caps, and since I have a reference to it on line five, I'll use a little trick that's built into editors.
>
> **[1:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=105)** I've selected an occurrence.
>
> **[1:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=107)** I'm going to press command F2 on my Mac, which would be control F2 on Windows.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=112)** And now, both occurrences are selected, and any edit I make affects both of them.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=118)** So I'll just type C-O-G-S to replace the selected text, and it changes in both places.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=125)** And the same thing to change YTD.
>
> **[2:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=130)** And I'm going to make that all caps.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=132)** And NOP, I already entered as all caps, so that's good.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=136)** Now, all my variable names use acronyms consistently, and the code is easier to read.

> [!info]- Semantic Content
>
> **Env Vars:** cogs (2), ytd (2), nop (2)
> **Code Keywords:** case, (1), throw (1), require (1), case. (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Remove unused variables
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=0)** - [Instructor] I have code with some variables, a few functions, and some placeholder console.log statements for output.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=6)** After some iteration my needs have changed, and I no longer need to run analysis using the cdRatio or efRatio.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=14)** So I can take out the second and third functions, and I can take out the second and third console.log statements.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=22)** At this point, I've cut a lot of my code.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=25)** And especially if I was working in a big codebase, it can be easy to overlook orphaned variables, that is, variables that are declared but no longer used.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=35)** ESLint can help me watch for this with the no-unused-vars rule.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=39)** If I prune or restructure my code, such that a variable is no longer used anywhere in my code, ESLint will catch that for me.
>
> **[0:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=47)** In my eslintrc file I'll add a new rule, no-unused-vars, and a simple string for the value of error.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=59)** Now switching back to app.js, I have errors on line four and five that reference unused variables.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=67)** Great reminder.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=68)** So I'll delete those, and save.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=73)** And now I'm not wasting memory on unused resources, and my code is leaner.

> [!info]- Semantic Content
>
> **Code Identifiers:** cdratio (1), efratio (1)
> **File Paths:** app.js (1)
> **Code Keywords:** delete (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Declare variables
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=6)** - [Instructor] Ready to test and implement best practices in declaring variables?
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=9)** It's time for a challenge.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=11)** My start code takes a step-by-step approach to building out a user friendly version of the current date, including the day of the week.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=18)** There's no need to worry about functionality here or optimizing the code.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=22)** Instead, focus on implementing strategies for declaring variables that make for better organized and predictable code.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=30)** Add rules as appropriate to the eslintrc file to check for issues as well as fixing those issues in the app.js file.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=37)** This exercise should take you about 10 minutes.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=40)** When you're done join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Declare variables
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=0)** - [Instructor] I hope you had fun working with that code.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=8)** So let's give this a go.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=11)** I have my code already running using Live Server and over in the browser I can see I have that day logged, like I'd expect.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=19)** Now depending on where you are, you might see a different local format here.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=23)** So for instance I'm in the U.S.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=25)** and I have my month first and then the day, but you might see those two flipped.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=28)** Or you might see another format depending on what is prevalent where you are.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=33)** So back in my code, first thing I notice, is that I have a var down here and I don't want vars.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=40)** So I'm going to go over to my eslintrc and I'll start by adding that no var rule, with a value of error.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=51)** And that var got flagged, this is a function, so it makes sense to make that a constant and so I'll use const.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=61)** Change that and now there's no longer an error thrown.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=67)** Now I'm not using constants throughout but I'd like to be using constants wherever it makes sense.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=73)** So I'll go over and add the prefer const rule with a value of error.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=82)** And then in my app I have a few issues here.
>
> **[1:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=85)** So these are all values that don't need to get changed, and so I can simply change my let to a const, got that single statement that's defining all three of those and so that's all fixed too.
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=99)** Now I have a single statement that is declaring all three of those variables.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=104)** And I want to avoid doing that as well.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=106)** So I'm going to add a one var rule and that takes an array, so I want it to be an error and I want to never use a single variable statement.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=124)** And then I've got that whole mess flagged, so I will add in replacing my comma with a semicolon, add another const here, replace that comma with a semicolon and add in one more const.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=140)** And now I have three separate statements and my errors are gone.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=144)** So I also want to enforce the use of camelcase here, using that kind of inconsistently right now.
>
> **[2:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=149)** So we'll do a camelcase, the value of error.
>
> **[2:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=156)** And I've got a few variable names that are flagged, so I'm going to select times of day, looks like that's not used anywhere else, so I'm just going to do times of day using camelcase.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=173)** Down here we've got local underscore date and that is in there twice.
>
> **[2:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=178)** So I'm going to use my keyboard shortcut, on a Mac that's command F2 and I'm going to make that local, capital d, date.
>
> **[3:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=188)** Same thing with the Dow value, it's going to be DowValue, going to keep that innitial cap for now and Dow, capital n, name.
>
> **[3:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=204)** And finally report date doesn't have another usage, so that's going to be report, capital d, date.
>
> **[3:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=212)** So now all of those camelcase, snake case usage errors are gone, whoops nope, I had another usage for report date, so report, capital d, date, to match that definition above.
>
> **[3:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=225)** Okay, so I also have a couple acronyms in here.
>
> **[3:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=227)** And I like to do acronyms as all caps, so Dow here is standing for day of week.
>
> **[3:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=233)** And so I'm going to select that acronym, select all occurrences, and I'm going to change that to DOW, all caps.
>
> **[4:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=244)** And same thing here for DowName.
>
> **[4:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=252)** And now it's clear where my acronyms are and I can differentiate those from other words in my variable names.
>
> **[4:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=260)** Next I want to make sure I'm not using any unused variables.
>
> **[4:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=264)** So I'm going to add an eslint rule for this, no unused vars, the value of error.
>
> **[4:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=275)** And over here it looks like I have a couple of those.
>
> **[4:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=279)** So times of day never actually gets used, so I'll go ahead and take that out.
>
> **[4:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=286)** And it looks like when I was renaming things, that I got these wrong, it says reportDate isn't used but I just typed it wrong down here, when I was actually using that function.
>
> **[4:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=297)** So that's another good reason to use the select all and change 'em all at once.
>
> **[5:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=301)** This was the one where I changed each one manually.
>
> **[5:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=304)** And so now I'm going to go back to my browser, to my console, and just double check and yes, my code is still working.
>
> **[5:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=310)** I've got the day logged just the way I did before, but now my code is making that consistent use of variable definitions using best practices.
>
> **[5:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=320)** So again this is one of those things where the more you practice, the better you get at it.
>
> **[5:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=325)** And also, the more you use these rules in eslint, you'll understand you can dig a little bit deeper into what the options are and how exactly you want to specify the way that your usage is for each rule

> [!info]- Semantic Content
>
> **Code Keywords:** const (5), var (4), let (2), function (2), else, (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** reportdate (1)
> **Env Vars:** dow (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** avoid doing (1)


### 3. Assigning Values

#### Don't assign variables in chains
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=0)** - [Instructor] The code for this video does some basic calculations on a set of items in a shopping cart.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=5)** It starts off declaring variables, and then in line nine, ensures that the subtotal, shipping, and net total variables are all numbers and have a value of zero, by using a chained assignment.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=17)** This single statement is certainly concise.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=19)** But like other statements that perform multiple actions, it can be hard to read it and understand exactly what's going on.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=26)** For this reason, I prefer to always assign my values with individual statements.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=30)** This makes each line of code more easily digestible when I read it, and does away with corner cases where chained assignment can create uncertainty.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=38)** ESLint has a rule that can flag this for me, which is no-multi-assign.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=46)** I'll start by adding that to my ESLint RC file.
>
> **[0:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=49)** So it's no dash multi dash assign, the value of error.
>
> **[0:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=56)** And then, saving and switching back, and that error is underlined.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=61)** And I can pretty straightforwardly break this up into three separate assignment statements.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=65)** So, subtotal equals zero, then shipping equals zero, and then net total equals zero.
>
> **[1:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=76)** Now, if my code supported it, I could also do the assignment as part of the variable declarations up on lines three to five.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=83)** But either way, now my code is both easier to read and less ambiguous.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Standardize quotes
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=0)** - [Instructor] JavaScript offers a few different options for enclosing items in quotes.
>
> **[0:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=4)** As long as your quote characters are paired, you can use single quotes, double quotes, or even backticks if you're working with Modern JS.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=11)** For the sake of efficiency and consistency, a lot of developers choose to standardize on just one quote style.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=18)** Before JavaScript, I worked with HTML, which required double quotes.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=22)** So I initially wrote my JavaScript with double quotes.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=25)** But over time I noticed that single quotes had the advantage of not requiring me to hit the Shift key to type them.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=30)** So I made the switch.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=32)** And in general, single quotes are pretty popular in JavaScript.
>
> **[0:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=36)** Whichever style you choose to standardize on, you can commit to it using ESLint quotes rule.
>
> **[0:42](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=42)** It takes an array in which you specify the alert level and which quote style you use.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=48)** In my code, my use strict statement uses double quotes.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=51)** I have a couple of rays that use single quotes.
>
> **[0:54](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=54)** I have a couple of ray.join statements that use double quotes, and finally I have a couple of console.logs that use template literals, enclosed in backticks.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=65)** I'll switch to my ESLint file and I'll add my preferred style, so quotes, and an array which is error and single.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=78)** And I'll save that.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=80)** Then in my editor I can just follow the flags and convert my double quotes to single quotes.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=87)** So I need to change that one and that one.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=91)** And there's flags down here too, but I got to make sure that I'm just doing one at a time.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=98)** Sometimes the autoCompletion is working against me here.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=106)** Now notice that my backticks in lines 26 and 27 are not flagged.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=111)** This is because the ESLint rule includes the caveat where possible.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=115)** Obviously if I want to use a template literal, I have to use backticks.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=119)** And there's no reason to exclude template literals from my code, just to standardize my quote style.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=125)** So ESLint lets them coexist, which is exactly what I want.
>
> **[2:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=129)** I have the code running in my Browser and the test looks good.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=132)** Everything is running exactly the way I want it to.
>
> **[2:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=135)** And now when I edit or add to my code, I don't have to stop and think about which quote to use.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=140)** And things just look neater, which I like.

> [!info]- Semantic Content
>
> **Exercise Files:** template (3)
> **Code Keywords:** switch (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** autocompletion (1)
> **Env Vars:** html (1)
> **UI Navigation:** switch to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Create arrays and objects using literals
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=0)** - [Instructor] My code creates a new array using the array constructor, and passing in the array values as arguments.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=6)** Likewise, it creates a new empty object using the object constructor.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=11)** This is perfectly valid JavaScript, but stylistically, these constructors are often not the best choice.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=18)** Because the array constructor accepts either a numeric argument for the number of elements or a comma separated list of values, there's a pitfall.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=26)** If I want to create an empty array, I can use new array and pass the value zero.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=31)** Or, if I want to create an array with some numbers in it, I can pass those as comma separated values.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=38)** But if I want to create an array with a single element whose value is a number, then relying on the array constructor can have an unexpected outcome.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=46)** For this reason, and for conciseness, most developers prefer to rely on the array literal, saving the constructor only for creating sparse arrays that need to include empty elements.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=57)** ESLint can flag this issue with the no-array-constructor rule.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=63)** So in my ESLint file, I'll add that.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=66)** No dash array dash constructor.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=70)** And that takes a single value, which in here is going to be error.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=75)** And then in my app.js file, I have an error flagged, and I can just convert this to an array literal using square bracket notation.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=89)** And replacing that closing paren with a closing square bracket.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=93)** Likewise for objects, you can generally do what you need with a literal instead of a constructor.
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=99)** ESLint supports the no-new-object rule to enforce this.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=103)** So in my ESLint RC file, I'll add no new object, with a value of error.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=112)** Then in my JS file, I can replace all those characters with an opening and closing curly brace.
>
> **[2:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=120)** And now, my code is more concise and just a little bit more bulletproof, to boot.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), this. (1)
> **File Paths:** app.js (1)
> **Definitions:** is a  (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [instructor] (1)

#### Quote object property names consistently
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=0)** - [Instructor] My sessions object contains session labels and names for the first few sessions at a conference.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=6)** The first key, plenary, is a single word and doesn't strictly need quoting in JavaScript, but the other two use hyphens in their names, which aren't valid property names unless you pass them as strings, so they're quoted here.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=19)** I prefer to use quotes around property names only where needed.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=23)** The lack of quotes around the key that doesn't need them actually provides a bit of a performance edge in the parser, and it does keep the code less cluttered, especially when most keys don't need the quotes.
>
> **[0:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=34)** ESLint supports LinkedIn property names style with the quote-props rule, to support quotes only where needed, you use the as-needed value.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=43)** So I'll update my ESLint RC file with quote props, and an array value with error and as dash needed.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=59)** And I'll save that, and then back in my JavaScript file, that first one's flagged 'cause it doesn't need the quotes.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=65)** So, I'll take those quotes off of plenary.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=70)** And ESLint is happy again.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=73)** This is a small point, but as with many other best practices, making a choice and enforcing it consistently across my code base keeps me from having to stop and reconsider the choice every time I'm entering code that's affected.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Assign values
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=0)** (upbeat bouncy music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=5)** - [Narrator] Ready to assign values using best practices?
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=9)** It's time for a challenge.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=11)** My start code make some random selections from an array, an assigns them as first, second and third choices, which are saved in an object with a user name.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=20)** There's no need to worry about functionality here, or optimizing the code.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=24)** Instead, focus on implementing strategies for assigning values to variables, that make better organized and predictable code.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=32)** Add rules as appropriate to .ESLint RC, to check for issues, as well as fixing those issues in the app.js file.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=40)** This exercise should take you about 10 minutes.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=43)** When you're done, join me in the next video and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **File Paths:** app.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat bouncy music) (1)

#### Solution: Assign values
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=6)** - [Instructor] So first off, we can customize this a little bit.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=8)** So we have the user variable, and I put in your name as a placeholder, but if you want, go ahead and fill in your name there.
>
> **[0:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=16)** I'll put in mine.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=18)** Now, first off, I noticed that I have a variety of quotes in this file.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=23)** I switch back and forth between single and double quotes.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=26)** I've even got some backticks at the bottom.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=30)** So over in my eslint file, I'm going to add a quotes rule, and the value there is error and single, which is what I'm standardizing on.
>
> **[0:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=44)** And then that's going to guide me to what I need to replace here.
>
> **[0:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=47)** So use strict is using doubles.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=51)** Now it's got singles.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=53)** Down here, I've got an empty string.
>
> **[0:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=56)** And now that's singles.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=58)** And again, it's going to leave my backticks alone, because it's okay for me to use template literals while still using another choice for the rest of my quotes.
>
> **[1:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=69)** So I also want to make sure that I am using array literals and object literals.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=75)** So I'll go ahead and stick both of those in my eslint file at once.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=80)** So I'll do no array constructor with a value of error, and no new object with a value of error.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=91)** I'll save those.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=93)** And now in my JavaScript file, I've got an error for my new array statement and for my new object statement, so I'll convert those to literals.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=103)** Deleting, this is an array.
>
> **[1:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=105)** Needs to be a square bracket.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=109)** There we go.
>
> **[1:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=110)** And then for my new object, I'm going to delete that and replace that with an empty pair of curly braces.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=119)** So now I have that array literal and that object literal in place.
>
> **[2:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=122)** And finally, I want to make sure I'm not doing any multiple assignment, which I'm doing on line 19.
>
> **[2:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=128)** So let's get a rule in place for that first.
>
> **[2:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=131)** That's going to be no multi assign.
>
> **[2:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=137)** And that'll be an error.
>
> **[2:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=142)** And putting that rule in place first just means that I let ESLint find all the occurrences and make sure that I don't overlook anything by just trying to do it myself.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=151)** So I'm assigning things to an empty string here.
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=155)** So I'll just give that a value of an empty string.
>
> **[2:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=159)** New line, and give second choice a value of an empty string.
>
> **[2:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=164)** And then let third choice be on its own.
>
> **[2:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=167)** Now my errors are gone and I've taken care of that multi-assignment issue.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=173)** Now I'm going to open up my HTML file and run that in my browser.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=180)** Open up my console.
>
> **[3:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=184)** And there are my values logged just the way I expect.
>
> **[3:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=188)** Tells me my username, each of my three choices, and the code is written in such a way that none of the choices are going to duplicate each other.
>
> **[3:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=196)** So I made all those stylistic changes to my code and my code still works the way I expect it to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1), delete (1), finally, (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### 4. Type Casting

#### Type cast strings with the String wrapper
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=0)** - [Instructor] I'm modeling working with data whose data type I can't be certain of.
>
> **[0:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=4)** My array has a single element right now with the numeric value 55.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=9)** If I want to work with that data as a string, there are a few approaches I can take.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=14)** I have a forEach statement here that loops through my array, just that one element for now, and tries out three of those approaches.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=21)** new String using the new keyword and the string wrapper, then the toString method, and then the string wrapper on its own.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=29)** I'm using the console.table method here which can take complex data, like this set of nested objects, and display in the console in the table format which can make it easier to understand.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=41)** I'm running my code using Live Server so in the browser console, there's that table, and it shows a label for each of the three approaches followed by the value and the resulting data type.
>
> **[0:54](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=54)** With the new String statement, I get a data type of object instead of string, and that's not what I want, because I want to end up with a string that has all the string methods that I want to work with.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=66)** Now the other two approaches here look good.
>
> **[1:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=69)** So back in my code, I'll comment out lines eight through 11 because I know that approach isn't going to work.
>
> **[1:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=77)** To look a little deeper into the other two approaches, I'll try one more test.
>
> **[1:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=81)** Up here in my formData array, I'm going to add a second element with a value of undefined.
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=88)** And returning to the console, the two remaining statements are logged for the value 55 and then I get an error, and it specifically says there's no toString method for an undefined value.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=100)** So that's not going to be a reliable method.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=103)** And I'll go back and I'll comment out lines 12 through 15 which is the toString method here.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=109)** And now returning to the browser, I get strings for both elements in the array.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=115)** And this is just proof of a widely used best practice.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=118)** If you need to typecast something to a string, just use the string wrapper, and not toString, and not the new keyword with the string wrapper.
>
> **[2:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=128)** ESLint can check for the first issue I ran into which is the use of new with the wrapper and this rule applies not just to string, but to other primitive wrappers as well.
>
> **[2:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=139)** In my eslintrc file, I'll add no-new-wrappers, with a value of error.
>
> **[2:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=149)** And just to double check that in my js file, I'm going to grab lines eight through 11 where I used that new String construction, I'm going to un-comment those, and immediately, I get errors flagged because I'm using string as a constructor here.
>
> **[2:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=164)** So that just proves that that ESLint rule is going to help me catch errant uses of new with constructors like string.
>
> **[2:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=171)** And I'll go ahead and comment that back out.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=173)** And now I'm using a best practice and I have ESLint watching out for it too.

> [!info]- Semantic Content
>
> **Code Identifiers:** tostring (4), foreach (1), formdata (1)
> **Best Practices:** best practice (2)
> **CLI Commands:** make (1)
> **Code Keywords:** type. (1)
> **Speakers:** - [instructor] (1)

#### Type cast numbers with the Number wrapper
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=0)** - [Instructor] When you're working with data that needs to be a number, JavaScript offers a couple approaches to typecast to a number.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=6)** But these approaches aren't equal.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=9)** I have an array with three elements whose values are different data types and I have a forEach statement that loops through the array and uses two different methods to typecast.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=18)** First, I'm using the new keyword and the Number wrapper, and then I'm using the Number wrapper all on its own.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=25)** Now I have some error squiggles on lines nine and 10 and that's because my ESLint already contains the no new wrappers rule.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=32)** So I can start off looking at that part with suspicion.
>
> **[0:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=36)** I have the code open in my browser and so I'll check out the console.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=41)** Scrolling to the top of that output my for Each statement is logging a table with the label followed by the value and the resulting data type.
>
> **[0:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=52)** For the first array element, a string containing digits, new with the Number wrapper gets the value correct but the data type is object, which isn't going to work.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=62)** But the other option gets both right.
>
> **[1:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=65)** The second element, the Boolean value true, results in the value one which is it's numeric equivalent.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=70)** And the final value, undefined, results in not a number.
>
> **[1:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=74)** In all three of these, the new operator results in an incorrect data type of object.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=80)** And this illustrates why the best practice is to use the Number wrapper alone for typecasting numbers.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=86)** I'll comment out lines eight through 11 to get rid of that error.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=89)** And then when I retest in my browser, I have correct output for all three array elements because I'm now using just the Number wrapper.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1)
> **Code Identifiers:** foreach (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Type cast Booleans using double negation
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=0)** - [Instructor] When you're working with data that needs to be a Boolean, you can typecast it a few different ways.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=6)** As with typecasting in general in JavaScript, not all approaches are equal.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=10)** I have an array with three elements whose values are different data types, and I have a for each statement that loops through the array and uses three different methods to typecast.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=21)** New Boolean uses the new keyword and the Boolean wrapper, then the Boolean wrapper on its own, and finally, double negation, which determines whether a value is truthy or falsy, gets its opposite, and then gets the opposite of that, which is the Boolean equivalent of the original value.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=37)** Now, I have some error squiggles on lines nine and 10, and that's because my .eslintrc file already contains the no new wrappers rule.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=46)** There's probably a reason that's suspect, but it pays to check, so I'll test it.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=50)** I have the code running in Live Server.
>
> **[0:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=52)** So over in my browser in the console, I can see the results.
>
> **[0:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=56)** Now, my for each statement is logging a table for each value in the array, and that table contains a label, followed by the value, and then the resulting data type.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=66)** For the first element, a string, I get the correct Boolean equivalent true for all three statements.
>
> **[1:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=72)** But as with other wrappers I've used, using new with Boolean gives me an object rather than Boolean data, which isn't going to work.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=80)** So that's out.
>
> **[1:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=81)** But the other two options get both right.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=83)** And for my other two values, zero and undefined, I get the correct results of false, and only the new operator again gives me an object instead of a Boolean value.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=94)** It turns out that using the Boolean wrapper on its own, or double negation, both produce correct results.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=100)** And indeed, both are acceptable.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=103)** The common best practice is to use double negation because it's so much briefer.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=108)** Because it's such an unusual construction, it's hard to mistake what's going on.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=112)** So it's the generally accepted approach here.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=115)** So back in my code, I'll comment out lines eight through 11, and I'll also comment out 12 through 15, just leaving the section that does the double negation.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=124)** And saving that and returning to the console, I have correct output only for all three array elements, because now I'm using double negation.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), type. (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Rely on implicit Boolean values in conditionals
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=0)** - [Instructor] When you're working with a variable whose value is a Boolean in a conditional expression, it can be tempting to explicitly typecast the variable like you might with a value of a different data type to get its Boolean equivalent.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=13)** My code for this video is the very beginning outline of a user interface.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=17)** I'm setting a loggedIn variable to store whether the user is logged in, and then checking the value of this to determine my next step, which I'm simply logging into the console to start.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=26)** Now in my condition I'm typecasting loggedIn to check whether loggedIn is equal to true.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=32)** But my condition just needs a true or false value, and my loggedIn variable is definitely going to give it one or the other.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=39)** So this extra step of typecasting isn't necessary.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=43)** ESLint has a rule to test for this, no-extra-boolean-cast.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=48)** It's enabled in the ESLint recommended rules, and by default it's flexible, watching only for Boolean typecasting when it's not necessary, but allowing it otherwise.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=58)** I'll go to my eslintrc file and I'll add no-extra-boolean-cast with a value of error.
>
> **[1:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=69)** Saving that and moving back to my JavaScript file, and I have an error, the screen tip that mentions redundant double negation and the rule I just added.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=80)** I'll take out the double exclamation, and the error is gone.
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=84)** And I'll save that fix.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=86)** This approach removes an unnecessary step from my code, and takes advantage of the way JavaScript works rather than trying to overengineer a solved problem.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=96)** So a Boolean wrapper alone is good, double negation is best when you need it, and going without anything is best in conditionals.

> [!info]- Semantic Content
>
> **Code Identifiers:** loggedin (4)
> **Code Keywords:** interface (1), this, (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Type cast
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=0)** - [Instructor] Ready to type cast some values using best practices?
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=10)** It's time for a challenge.
>
> **[0:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=12)** My code starts with some string data from a weather service, converts a Celsius temperature to Fahrenheit, and then takes a first step in putting that data in the view by console.logging it.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=23)** Your task is to type cast data when necessary and then update existing type casting as necessary to use best practices.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=32)** I've highlighted here on lines 11 and 16 where type casting needs to happen in the statements that follow those comments.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=40)** You'll have to decide on the best approach to doing that.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=43)** In addition, the code works with Booleans a few times, and you should make sure that best practices are being implemented in all of these statements.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=51)** Add rules as appropriate to dot ESLint RC to check for issues, as well as fixing those issues in the app.js file.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=59)** This exercise should take you about 10 minutes.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=62)** When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Type cast
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=0)** - I'm going to start out with the typecasts that I need to do, based on those comments.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=10)** So first off, line 11 says I need to typecast on line 12.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=14)** And line 12 is working with data.tempC which is string, but I need to typecast that to a number.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=21)** And so to do that, I want to use the number wrapper and just passing tempC to that wrapper.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=30)** Then down line 16, I need to cast tempF to a string.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=35)** And that tempF value here I just got, that is going to be a number and so I need to make sure that that number is a string for actually logging as part of the string.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=45)** So I'm going to use the string wrapper and pass it tempF.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=50)** Now you may notice, on line 13, we are grabbing the third value from the data object which has a value of false.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=58)** And it's a string we want to work with that as a Boolean.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=61)** So you may have found if you made changes to line 13, that the app stopped working.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=67)** And that's because if you're tryin' to typecast the string of false, the logical value of that string is truthy.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=75)** That's one of these weird corners of truthiness and falsiness.
>
> **[1:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=79)** And so to check the truth value of that string, we use this equivalence here just checking whether the string itself is equal to the string, true.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=87)** So we don't need to make any changes to line 13 here.
>
> **[1:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=90)** But this is just a corner case to keep in mind.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=92)** Now I want to go to my es/rc file and add a couple rules.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=96)** So I'm going to add that no new wrappers rule just to keep me honest in the future.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=103)** And same thing for no extra Boolean cast with the value of error.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=112)** So that just double checks first off, that I didn't use new in my typecasting, and I didn't.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=118)** And it brings up this error on line 18.
>
> **[2:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=121)** And that is about redundant double negation because this is a situation where I'm checking the value of the alert variable which was turned into a Boolean on line 13.
>
> **[2:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=131)** And so here, I can just take out that double negation and just check that Boolean value.
>
> **[2:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=137)** Then I'm going to go live with that code in my browser and in the console, there's the output I expect.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=144)** And so I've made changes to my code to implement those best practices for typecasting and my code still works the way I intend.
>
> **[2:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=154)** It's just a little bit neater and doing things in a more reliable way.

> [!info]- Semantic Content
>
> **Code Identifiers:** tempf (3), tempc (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Keywords:** pass (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - i (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Comparing Values

#### Use triple-character equality operators
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=0)** - I have an array of some falsy values in JavaScript and I've written code to log the results of comparing each one to the string zero and to the value undefined.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=10)** My code uses the double equal sign to check for equality which is one of two ways to check for equality in JavaScript Running my code, I get statements logged for the comparisons that are equivalent.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=23)** And it turns out that the parser sees the string zero as equivalent to both the value zero, and false.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=30)** And it sees the values null and undefined as equivalent.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=35)** What?
>
> **[0:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=36)** JavaScript has two different ways to compare equality, the algorithms in the parser for the double equal equality sign result in some unexpected equivalences.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=46)** For instance, false is equivalent to zero, zero as a string, an empty string, and an empty array, but not an empty object, as well as an array containing only the value zero.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=59)** Now typecasting my values can be helpful here.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=62)** And double equal results are often predictable, but not always.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=66)** And having an unexpected result from double equal derail your code can result in a really tough problem to identify.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=73)** To make equality checks more predictable, JavaScript also includes the triple equal operator, or the strict equality operator.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=82)** This operator does no coercion.
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=84)** So the only time something is equal is when it's actually the same thing.
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=88)** False triple equals false, but not zero or empty string or any other falsy value.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=95)** Although you can get by using double equal, and coming from another language with only a double equal operator, you may already be doing so.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=103)** Using triple equal is a best practice for avoiding unexpected corner cases in your equality checks.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=111)** Now, of course ESLint can help us out, as with so many other things, with the entertainingly named eqeqeq rule.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=119)** Notice that it also covers the bang equal equal rule, which is the preferred three character version of not equals The eqeqeq rule also flags use of a two character bang equal expression.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=132)** Back in my code, I'll go to my .eslintrc file and I'll add eqeqeq with a value of error.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=144)** Then, in my JavaScript file, I've got a couple errors flagged.
>
> **[2:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=148)** And I'll simply update those to triple equals.
>
> **[2:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=152)** And I'll save that and go back to the console and now I get nothing logged to the console, which is to say that none of the different values I'm comparing are treated as equal by the strict equality operator.
>
> **[2:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=165)** And that's what I want.
>
> **[2:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=166)** If I want to coerce things I need to take steps to do that.
>
> **[2:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=170)** Which means it will be in my code, staring me in the face if it needs de-bugging.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** best practice (1)
> **Speakers:** - i (1)

#### Don't use Yoda conditions
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=0)** - [Instructor] Check for alert levels, my code does.
>
> **[0:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=3)** My code checks for alert levels, and it uses a conditional structure to map numeric values to descriptive text.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=10)** In each of those comparisons, after each if operator, I've written the literal numeric value first and the variable name I'm comparing to second.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=19)** If I run my code, it works.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=22)** But if the code looks funny to you, you're not alone.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=24)** It's pretty standard in JavaScript to write the variable first, and then the literal value second in comparisons.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=31)** Flipping them around like I've done here is sometimes called a Yoda condition, in reference to the Star Wars character Yoda, who often reverses the order of his sentences.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=40)** Just like Yoda's dialogue, all the information is here, and the comparison can be parsed.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=46)** But for a human, it can take a moment to piece it together and recognize the comparison, because the opposite pattern is so common.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=53)** I prefer not to use Yoda conditions, and ESLint can flag those for me with the Yoda rule.
>
> **[1:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=60)** So, in my dot ESLint RC file, I'll add that in, and that's going to be Yoda and error.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=71)** And then back in my JavaScript file, all my comparisons are flagged.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=75)** So, I'm going to cut data alert, stick that at the beginning, triple equals, and then, take out the other one.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=87)** Likewise, I need to do that on the other lines.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=91)** So moving these things around takes a little bit of doing.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=94)** And now, I've saved my code, those flag bearers are gone.
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=97)** And back in my console, the code still works.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=101)** But now, my code reads like most JavaScript code I've ever encountered, and that removes a hurdle to quickly scanning and understanding it whenever I need to come back to it.

> [!info]- Semantic Content
>
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Compare appropriately for the data type
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=0)** - [Instructor] My code contains a set of if statements that check for values in the data and they only log the relevant values if the check succeeds.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=8)** Each one of these checks a different data type and for each one, I've simply checked for truthiness.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=14)** But that's not always going to give me the most reliable code.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=17)** My first if statement on line 10 checks the truth value of data.warning.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=22)** In this case the value is a Boolean so simply checking the value makes sense.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=27)** I could add double-negation before the value to insure I'm getting a Boolean, but when I know I'm working with a Boolean, that's redundant and I already have the no-extra-Boolean-cast rule set up in ESLint to flag that.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=40)** So I'll take those back out and leave line 10 as is.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=45)** On line 13 data.notes is a string and I want to check if I have a non-empty string before logging it's value.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=53)** An empty string is falsy, so here I'm checking if the string is anything other than empty.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=58)** But with strings, it makes my code clearer if I specify exactly what I'm looking for.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=64)** So I'm going to update this to check if data.notes is not equal to an empty string.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=71)** Finally, data.alert on line 16 is a number.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=75)** And I want to make sure it's greater than zero, which indicates I have a value that maps to a message.
>
> **[1:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=81)** Again, right now I'm using a shortcut just to check if it's truthy which for a number is the same thing as non-zero.
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=88)** But it's useful to be clear here about what I'm trying to do.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=92)** Especially because I'm not working with Boolean data here.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=95)** So, I'm going to update this to check if data.alert is greater than zero.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=101)** And that lets me be really clear about it.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=104)** So saving that code, I'll go back to my console, and test again.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=108)** And my code still works the way it did before, but by specifying explicitly what string and number values I'm checking for my code is easier to read and it will be easier to debug if I run into issues down the road.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** for. (1), finally, (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Warnings:** warning (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Use ternary statements judiciously
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=0)** - My code for this video using a couple ternary statements to choose between values based on the truth value of a condition.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=7)** On line seven, I'm setting a Boolean value for a variable based on the value of a property of my object.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=14)** On line nine, I'm choosing the text to be logged based on whether I have custom text to display.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=21)** Turnery statements are meant to serve as a quick substitute for larger logic patterns when you only need to make a quick comparison.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=28)** They're more compact, which means you have the classic trade off of fewer characters at the cost of denser code that can be harder for a human to parse.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=37)** Because of the potential draw backs of ternary statements, it's important to use them only when necessary.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=43)** ESLint has a rule that flags ternaries that could easily be replaced.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=48)** It also has a rule that lets you flag nested ternaries for elimination.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=53)** Nested ternaries make that short, hard-to-parse code even more complex and to my eye, harder to parse.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=59)** So, I prefer to avoid nesting.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=62)** I'm going to add both of those rules to my dotESLintrc.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=66)** So no unneeded ternary error and no nested ternary error.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=83)** Back in my JS code, I now have an issue flagged on line seven, and this says, unnecessary use of a Boolean literal, and indeed I'm checking the value here of a Boolean and using that to assign true or false.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=103)** Instead, I can simply assign the property value to the new variable, so I can take out this entire Boolean structure and just use the existing Boolean value of data.warning as the value of the warning variable.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=118)** I don't have any nested ternaries, but my code on line nine uses a ternary that runs pretty long.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=124)** Ideally, I like to keep my ternaries to a single line.
>
> **[2:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=127)** Here, my ternary is within a template literal, but even if I broke it out, it would be a long statement.
>
> **[2:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=133)** The biggest portion of my statement is the property reference and the string.
>
> **[2:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=138)** I can assign both of those to variables to reduce the character count.
>
> **[2:22](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=142)** So, I'll make a const called null warning (mouse clicks) and it's going to have a value of no warning message at this time.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=157)** And then I'll create one more variable called text, and I'm just going to assign that the value of data.warningText, so I don't have to have quite such a long variable reference in my ternary.
>
> **[2:51](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=171)** And now my ternary become checking the value of warning and either using text or null warning as the value to be logged.
>
> **[3:04](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=184)** This gets my ternary down to a single line and makes it easier to read the logical structure.
>
> **[3:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=189)** And then I can look at the other lines for the specific values of those variables.
>
> **[3:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=194)** Some developers avoid ternaries all together, but I think by using them judiciously, I can benefit from them without overly complicating my code.

> [!info]- Semantic Content
>
> **Warnings:** warning (6)
> **CLI Commands:** make (3)
> **Code Identifiers:** doteslintrc (1), warningtext (1)
> **Code Keywords:** const (1)
> **Exercise Files:** template (1)
> **Speakers:** - my (1)

#### Add parentheses to clarify logic
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=0)** - [Instructor] The start code for this video generates three choices randomly from an array, then it has the logic to ensure all three are different.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=7)** Line 21 is pretty straightforward, but in line 24, I'm checking to make sure the third choice variable is different from first choice and from second choice.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=17)** If my screen was a little smaller, that statement would even run over a couple lines, and it uses a total of three operators.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=24)** That can make it hard to read, and every time I come to this line while debugging, I have to stop for a minute to remember just what it's doing.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=31)** Both mathematical and logical operations in JavaScript have a specific order that the parser follows.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=37)** For instance, this is the order of operations for a few common logical operators.
>
> **[0:42](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=42)** As long as I'm writing code with this order in mind, it'll work correctly.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=46)** But there's a difference between a parser understanding the code and me or another developer being able to read it.
>
> **[0:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=52)** To clarify the order of operations and make it clearer what I expect the code to do, it's helpful to add extra parentheses to group sub operations that happen first.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=63)** Operations within parentheses always happen first, and parens are sometimes used to change the order of operations, so operations happen in whatever order you want.
>
> **[1:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=72)** But even without changing the order, parens create a visual cue to group parts of your expression and make it easier to read.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=80)** On line 24, those strict equality checks are going to happen before the or is evaluated.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=86)** I can start by breaking those up into separate lines and indenting.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=92)** But I can make things even clearer by adding parens.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=96)** So I'll put another set of parens around that first equality check, and then a second set of parens around the second equality check.
>
> **[1:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=105)** And now, it's pretty easy to read this as an or statement comparing the results of two equality checks.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=112)** So I'm going to save this, and check it in my console.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=116)** And it still works, just the way it did before.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=119)** But now, my code is easier for humans to read.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** this, (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Compare values
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=0)** (upbeat bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=6)** - [Narrator] Ready to try your hand at writing better comparisons?
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=9)** It's time for a challenge.
>
> **[0:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=12)** I've written some code that simulates a shopping cart and performs a few actions based on values in the cart object.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=20)** Your task is to update the code to make it easier to read and to follow best practices for comparisons.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=27)** Add rules as appropriate to .ESLint RC, to check for issues, as well as fixing those issues in the app.js file.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=35)** Note that the code I've written is intentionally convoluted here and there.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=39)** So if you're not sure what a statement is doing, take a moment, step back, and break it down.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=45)** This exercise should take you about 15 minutes.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=48)** When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat bouncy music) (1)

#### Solution: Compare values
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=0)** - [Instructor] So, at the top of my code, I have a cart object, and then I have all of this logical code with all of these comparisons starting on line 11.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=17)** And looking at this line by line, basically this section is checking the number of items in the cart using some other factors to calculate the shipping, or whether shipping needs to be determined later, and then down here there's this contact property we're setting a value for, and that I just thought of as if there's some complications going on with this order, then we'll flag it to have someone actually reach out, contact the customer, and resolve some issues, or iron some logistics out.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=46)** So, I'm going to start with the flow control up here.
>
> **[0:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=49)** Save that nice, gnarly ternary for a little bit later, and this is one of those places where I think putting the ESLint rules in place first can be really helpful, 'cause they can point out some of those errors, and I can just chip away error by error, issue by issue, and make things little by little better.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=68)** So, switching over to my eslintrc, I'm going to start by adding that triple equality rule, eqeqeq with a value of error, and that will flag for me if I've got that going on anywhere, and I do, I have one.
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=84)** So, we'll take that out, and that also looks like a Yoda to me.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=89)** So, let's go ahead and just flag Yodas in here.
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=97)** And indeed I've got a couple Yoda expressions.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=100)** Now, this one's pretty straightforward.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=104)** It's triple equality, so I'm just going to stick this at the end, take out that redundant sign.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=112)** Now, up here is a Yoda expression with a less than sign.
>
> **[1:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=117)** When I flip this around, that becomes a greater than sign.
>
> **[2:02](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=122)** So, it's really important when you're flipping signs to make sure that you're keeping the comparison the way it was before.
>
> **[2:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=131)** So, now my errors are gone there.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=132)** So, I've got Yoda expressions taken care of.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=136)** And another aspect of comparisons is that extra boolean cast.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=141)** So, let's just check for those.
>
> **[2:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=143)** So, no-extra-boolean-cast.
>
> **[2:29](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=149)** That, flag as an error, and it looks like I don't have any of those in here, great.
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=155)** Now, before I get down to those ternaries, I also just want to look in general at a couple things, because I want to make sure that I'm comparing appropriately for the data type on all of these.
>
> **[2:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=166)** For instance, right here I have a comparison where I'm just checking if it's false, and specialShip is a boolean.
>
> **[2:54](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=174)** So, there's no need to specify false here.
>
> **[2:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=177)** I can simply check the value to see if the value is true or false.
>
> **[3:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=181)** So, I'll just go ahead and take that off all together.
>
> **[3:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=186)** And now I'm just checking that boolean value as my comparison, so, that's great.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=191)** So, I also notice up here on line 12 that I have this really gnarly comparison, and it seems to work.
>
> **[3:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=198)** It works fine when I run the code, but I'd like to be able to read it and understand it a little better.
>
> **[3:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=203)** So, I'm going to break it down.
>
> **[3:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=206)** So, I've got a comparison over here, and a comparison over here.
>
> **[3:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=211)** And so, I'm going to go ahead and add some parentheses to group things up, and make it easier to read.
>
> **[3:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=216)** So, that's my left side of the and, then my right side of the and is over here, and even within that I've got a couple things going on.
>
> **[3:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=226)** So, I'm checking if cart.subTotal times .1 is less than 12.
>
> **[3:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=230)** That's my logical operator.
>
> **[3:52](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=232)** So, I'm going to group the stuff to the left of that as well with another set of parentheses.
>
> **[3:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=237)** And if I wanted to, I could even break this up on multiple lines, like that.
>
> **[4:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=243)** And so, now I have that logical expression that's a little bit easier to read.
>
> **[4:08](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=248)** Now, I realized one thing here that I just did wrong.
>
> **[4:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=252)** So, I will be totally transparent here.
>
> **[4:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=254)** This was originally triple equal zero, and you may have noticed when I fixed that I just took away that comparison, but that's not what I'm looking for here.
>
> **[4:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=263)** I want to see essentially if it's false, and by taking away that equal to zero I'm now checking if it's true.
>
> **[4:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=270)** So, I want to check if that is not cart.specialShip, and so, there I'm just using a negation of that boolean value.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=283)** You may sometimes see a triple negation where the first two are meant to convert to a boolean, the third one's meant to negate, and that's going to pull up that redundant double negation, which we obviously don't need.
>
> **[4:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=295)** So, one exclamation is going to be totally sufficient here for my use.
>
> **[5:01](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=301)** Now, one other place I noticed something going on here is cart.items.
>
> **[5:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=306)** So, cart.items is a number.
>
> **[5:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=309)** And here, I'm treating it as a boolean.
>
> **[5:12](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=312)** So, I'm using coercion, but ideally what I want to do here is actually make the comparison that I'm looking for.
>
> **[5:18](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=318)** What I'm trying to check here is if there's nothing in the cart, then I'm going to do something with the UI to let the user know that the cart's empty, and that checking out doesn't make sense.
>
> **[5:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=328)** So, rather than coercing that number to a logical value, I'm actually going to check instead if that value is zero, because that's what I'm looking for here.
>
> **[5:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=339)** Okay, so, that is my if else construction, and now down here I have a super long ternary.
>
> **[5:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=350)** So, the first thing I'm going to do is add a couple rules to my eslintrc file to just give me some feedback about a couple common ternary issues.
>
> **[5:59](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=359)** So, one's going to be no-unneeded-ternary, and that's where I'm just casting a ternary to true or false.
>
> **[6:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=367)** So, that's going to be an error, and then no-nested-ternary, which can be a world of hurt.
>
> **[6:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=379)** And now, I have a big red squiggle, and let's try and get this feedback, there we go.
>
> **[6:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=386)** So, it's telling me first off I have a nested ternary here.
>
> **[6:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=390)** So, I have my question mark, my comparison's here.
>
> **[6:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=393)** Here's my question mark, and then on the other side I have a comparison that includes another question mark, another ternary.
>
> **[6:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=399)** So, one way to approach this is to pull out the second ternary expression, and break it out into its own statement.
>
> **[6:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=408)** So, here I have that comparison right after the question mark and the true and false values, which are false and true here.
>
> **[6:57](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=417)** So, I'm going to Cut that.
>
> **[7:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=420)** I'm just going to create a new variable here, const shipException.
>
> **[7:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=426)** Just treat this as there's some issue with the order.
>
> **[7:09](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=429)** And then I'll Paste that ternary here, and then whatever value I get out of that, either true or false, is going to be the value here.
>
> **[7:19](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=439)** So, just boiling this whole section down into a true or false value, into a boolean, and then just swapping that in, so I no longer have a nested ternary.
>
> **[7:30](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=450)** Now, I still have an error up here, and that error is, hey, you just did a ternary expression to simply give you a false or true value.
>
> **[7:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=459)** So, in that case I don't need this to be a ternary.
>
> **[7:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=461)** Now, I've swapped.
>
> **[7:43](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=463)** This first option is what happens if my expression's true.
>
> **[7:47](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=467)** This one is if my expression's false, and so, I want the opposite of whatever this statement is, but I can do that really easily.
>
> **[7:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=475)** So, I can take all this out.
>
> **[8:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=480)** I can put my expression in parens.
>
> **[8:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=486)** And then, I can negate it.
>
> **[8:10](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=490)** And this is a place that would also benefit from some more parens.
>
> **[8:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=494)** So, here is my expression to the left of the double and.
>
> **[8:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=501)** Here is my expression to the right of the double and, and again, I have another operation going on here to the left of the less than sign.
>
> **[8:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=515)** I could break this up over multiple lines if I wanted to, but for now, that seems a lot more readable to me.
>
> **[8:41](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=521)** And then, finally, down here I like to put parens around my expressions in ternaries.
>
> **[8:48](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=528)** So, there's the expression I'm evaluating, and then here we're either getting the result there or the result here.
>
> **[8:56](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=536)** That looks great to me, and so, now that ternary code is not nested.
>
> **[9:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=540)** I don't have a ternary that is just assigning true and false.
>
> **[9:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=543)** It' a whole lot easier to read, and there's definitely optimization I can do in all of this control flow here.
>
> **[9:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=551)** This may not even need to be two separate sections, and it could probably be boiled down a whole lot.
>
> **[9:16](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=556)** But for now, I've got my syntax in place, so that it's more readable.
>
> **[9:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=561)** My code is more self-documenting.
>
> **[9:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=563)** It's clearer what I'm trying to do, and that prepares me for that next step of refactoring.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for, (1), for. (1), super (1), const (1)
> **CLI Commands:** make (6)
> **Code Identifiers:** specialship (2), subtotal (1), shipexception (1)
> **Definitions:** is a  (4)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=3)** You now have experience implementing best practices for working with data in JavaScript.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=7)** To dig deeper into automating code linting for JavaScript, check here in our library for a course on ESLint.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=14)** If you want to write better formatted JavaScript code, try a course on [[Javascript Best Practices For Code Formatting]].
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=21)** If you want to learn more about fixing logic errors in your JavaScript code, check out a course on debugging.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=26)** Feel free to follow me online.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=28)** Now take your new skills and build something amazing.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=31)** Good luck!

> [!info]- Semantic Content
>
> **Speakers:** - [sasha] (1)


## Path Context

### In [[Advance Your JavaScript Skills]]
← [[Javascript Best Practices For Code Formatting]] | **2 of 10** | [[JavaScript- Test-Driven Development (ES6)]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — Data Management
- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript

---

[↑ Back to top](#)