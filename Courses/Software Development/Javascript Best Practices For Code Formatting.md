---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-best-practices-for-code-formatting
url: "https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting"
level: Intermediate
updated: 5/12/2025
learners: 4087
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHdN0e3vJKDpQ/learning-public-crop_675_1200/B56ZbF5UuRGkAY-/0/1747076861533?e=2147483647&amp;v=beta&amp;t=19W5OcUTcULII8Qk1ApBLeqcmGZCyzh14SHA59mdMxs"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
next_courses:
  - '[[JavaScript- Best Practices for Data]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":1,"total":10,"prev":null,"next":"JavaScript- Best Practices for Data"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Javascript%20Best%20Practices%20For%20Code%20Formatting.md)

![Javascript Best Practices For Code Formatting](https://media.licdn.com/dms/image/v2/D560DAQHdN0e3vJKDpQ/learning-public-crop_675_1200/B56ZbF5UuRGkAY-/0/1747076861533?e=2147483647&amp;v=beta&amp;t=19W5OcUTcULII8Qk1ApBLeqcmGZCyzh14SHA59mdMxs)

# Javascript Best Practices For Code Formatting

> JavaScript offers developers tremendous power, but also a wide variety of code style choices. Its evolution over decades and shifts in audience and approach have left communities fragmented and impeded code sharing. In this course, longtime coder and teacher Sasha Vodnik provides a core set of practices for creating code that can be read by more people than its creators. Learn about formatting det

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting) | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Modern standards for your JavaScript
  - What you should know
  - Set up your environment
- [**1. Why Best Practices?**](#1-why-best-practices) (4 videos)
  - Style guides
  - Use modern deployment tools
  - ESLint
  - Foundational practice: Use strict mode
- [**2. Creating Comments**](#2-creating-comments) (5 videos)
  - Use single-line syntax for single lines
  - Multi-line syntax with leading asterisks
  - Include leading spaces in comments
  - Challenge: Create JavaScript comments
  - Solution: Create JavaScript comments
- [**3. Using Punctuation**](#3-using-punctuation) (7 videos)
  - End statements with a semicolon
  - Don't rely on auto semicolon insertion
  - Standardize line length
  - Use commas consistently
  - Include a comma in a list of values
  - Challenge: Optimize punctuation
  - Solution: Optimize punctuation
- [**4. Using Spacing**](#4-using-spacing) (11 videos)
  - Indent consistently
  - Space before and after operators
  - Use a consistent format for blocks
  - Include a space after keywords and arrows
  - Use consistent spacing before function signature parentheses
  - Break up and indent long-method chains
  - Space consistently within enclosing characters
  - Space after commas, but not before
  - Limit blank space to one line
  - Challenge: Optimize spacing
  - Solution: Optimize spacing
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Modern standards for your JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=0)** - Have you ever looked at someone else's code formatting and wondered why they do it that way?
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=5)** I created this course to show you some industry standards for writing JavaScript and some approaches that I find particularly useful.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=13)** We'll look at writing readable comments.
>
> **[0:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=15)** We'll also dig into how to approach punctuation and spaces in a variety of scenarios.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=21)** And, we'll configure ESLint to guide you toward using these approaches consistently.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=25)** This course won't settle any long running debates like commas versus tabs, but when you're done, you'll be able to bring a thoughtful approach to the format of your code and make a constructive contribution to style choices for your projects and teams.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have some experience coding in front-end JavaScript including modern ES6 syntax.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/what-you-should-know?u=76281980&t=8)** If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/what-you-should-know?u=76281980&t=14)** To familiarize yourself with modern JavaScript syntax, explore a course on ES6.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (2)
> **Speakers:** - [instructor] (1)

#### Set up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=0)** - To work along with me on the files for this course you need three applications.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=5)** ESLint, a web browser and a code editor.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=10)** ESLint is a command line utility that you install using the node package manager or npm.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=17)** Npm is part of the node JS run time.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=20)** If you don't have node installed, start by visiting [nodejs.org](https://nodejs.org) and installing the LTS version.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=28)** With that installed open your terminal application and navigate to the exercise files folder that contains the files for this course.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=39)** And we're going to start by initializing this directory for our use with npm.
>
> **[0:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=44)** So we're going to type npm space init and press enter.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=48)** It's going to ask you a series of questions and you're just going to press enter for all of them.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=51)** For right now we're not concerned about the configuration here at all.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=55)** So we're just accepting the default answers for all these.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=59)** And when we get a new command prompt then we're all good.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=62)** So now we have this directory initialized for npm and now we can install ESLint.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=68)** SO, that next command is going to be npm space install space ESLint.
>
> **[1:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=76)** And this will install the files that will enable you to use ESLint to the command line.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=82)** We've got a warning here, and that's not a problem it's just telling us that if we're really serious about this later on we can go configure a file with some more information but for our uses for this course, this is just fine as is.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=96)** You undoubtedly already have a web browser installed in your machine and any major modern browser, Chrome, Firefox or Microsoft edge is fine for this course.
>
> **[1:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=107)** I'll be using Firefox for these videos which includes a powerful sweet of developer tools.
>
> **[1:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=113)** A number of great code editors are available both free and paid apps.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=118)** Any editor that lets you edit and save plain text is fine for this course.
>
> **[2:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=123)** So if you have a code editor you like such as sublime text or Adam, it's fine to use that.
>
> **[2:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=129)** I use visual studio code in these videos.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=132)** Which is a version of Microsoft's visual studio code created specifically for web development.
>
> **[2:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=138)** Visual studio code is free and has Windows, Mac and Linux releases.
>
> **[2:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=143)** The code is available on GitHub and users can submit issues there as well.
>
> **[2:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=148)** I've turned on word wrap on my editor.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=151)** If you want to do the same, just click view and then toggle word wrap.
>
> **[2:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=156)** This ensures that long lines of code don't run off the screen.
>
> **[2:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=161)** I've also installed a couple extensions.
>
> **[2:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=165)** The ESLint extension by Dirk Baeumer enables visual studio code to highlight code that violates rules specified in a projects ESLint configuration file.
>
> **[2:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=177)** Live Server by Ritwick Dey is an http server you can launch with a single click that automatically opens the current html document in your default browser.
>
> **[3:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=187)** This makes testing code in the browser quick and easy to do.
>
> **[3:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=192)** If you want to learn more about anything I just used or talk about in this course, I encourage you to explore the library for a deeper dive on that topic.
>
> **[3:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=200)** Now, let's get started.

> [!info]- Semantic Content
>
> **Tools:** visual studio (3), command line (2), firefox (2), terminal (1), command prompt (1)
> **CLI Commands:** npm (6), node (3)
> **Prerequisites:** install (4), configure (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** navigate to (1), toggle (1)
> **Code Keywords:** let (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Env Vars:** lts (1)


### 1. Why Best Practices?

> [↑ Back to Table of Contents](#table-of-contents)

#### Style guides
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=0)** - [Instructor] If you've already watched one of my other courses on JavaScript best practices, you may already have the background under your belt.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=8)** If so, feel free to skip ahead to Chapter Two.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=11)** If this is your first time exploring best practices, it's useful to understand where they come from, and that's style guides.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=19)** A style guide is a set of agreements on how to write code for everyone working on a common code base, whether that's on an organizational level, a project level, or even a specific repo.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=32)** A style guide often combines approaches that developers have found useful in working with that code base, with choices that developers have made about how to build and organize that code.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=43)** Although guidelines can be project-specific, they may also be drawn from broader, industry-wide understandings about the best approach to certain aspects of building code, known as best practices.
>
> **[0:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=56)** Some best practices may be nearly universal.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=59)** For instance, most every developer agrees that using consistent indents is helpful, both in building and reading code.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=68)** However, many best practices come with trade offs.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=71)** As a result, managers, project leaders, or groups of developers may need to choose which approach is best for a specific code base.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=80)** For instance, modern JavaScript provides an almost overwhelming range of options for creating functions.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=87)** When working on code collaboratively, does it make more sense to use a function declaration, or an expression with let or with const?
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=95)** Maybe an arrow function, but with let or with const?
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=100)** And if you're using a function expression, should it include a lexical function name, to help with debugging?
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=106)** A style guide, based on best practices, does a couple things.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=111)** First, it keeps you coding, rather than needing to break your flow while you try to balance the options and choose a syntax.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=118)** It also ensures that the code you write interacts with the rest of the code base, in a particular way.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=125)** For instance, defining a function using const ensures that it can't be erroneously redefined.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=132)** As you build your knowledge of best practices, keep in mind there's often no right answer.
>
> **[2:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=137)** So it can be useful to understand the trade offs.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=140)** Different projects may make different choices that work best for a specific team, architecture, or goal.
>
> **[2:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=147)** The Airbnb Style Guide, is one of the most widely referenced style guides among JavaScript developers.
>
> **[2:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=156)** Another influential JavaScript style guide, is the Google Style Guide.
>
> **[2:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=162)** Many best practices can and do change over time.
>
> **[2:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=166)** This is especially true in the modern JavaScript landscape, where new features are regularly introduced as optimized replacements for previous practices.
>
> **[2:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=176)** So staying on top of changes in popular style guides, as well as keeping up with other style guides that colleagues or developers you respect may be referencing, can be helpful in ensuring that your code reflects up-to-date formatting practices.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), const (3), let (2), from, (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Use modern deployment tools
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=0)** - [Instructor] In the early days of JavaScript, the code a developer wrote was the code that was executed in every browser, or other user agent.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=9)** Over time, JavaScript evolved and added new features.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=14)** However, because not every user was using the newest version of a browser, developers had to write code targeted at the lowest common denominator.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=22)** That is, the browser with the fewest modern features that still maintained a critical mass of users.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=29)** This meant that developers were constrained from using the newest features, or had to write and maintain multiple versions of the same code.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=37)** The modern JavaScript workflow has resolved this issue by incorporating transpilers.
>
> **[0:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=42)** A transpiler is a utility that accepts Java Script code written using modern features, and returns code that does the same job as the original, but is written without modern features.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=55)** Babel is an example of a popular transpiler for JavaScript.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=59)** Including a transpiler in your deployment process means that you can take advantage of modern and even cutting edge JavaScript features without worrying that your code won't perform as expected for users of older browsers.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=73)** Not every modern JavaScript feature can be transpiled however.
>
> **[1:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=77)** But for those that can't, developers use another tool, the polyfill.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=83)** A polyfill is a library that you include with your code at deployment.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=87)** Because a transpiler can't rebuild some code for older browsers, the job of a polyfill is to instead add the functionality of the new feature to the older browsers at runtime.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=100)** Promises and Fetch are a widely used example of a feature that requires a polyfill for backward compatibility.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=109)** With transpiling and polyfills in the developer toolbox for JavaScript developers, the group that maintains JavaScript standards has been free to innovate without worrying about proposed changes never being widely available.
>
> **[2:02](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=122)** As a result, many new features of JavaScript serve to help developers write cleaner, more manageable code, rather than to add new features or capabilities to the language.
>
> **[2:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=133)** It's due to the widespread use of Babel and polyfills that many modern JavaScript best practices involve use of these developer-focused features.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=0)** - ESLint is a utility that flags deviations from selected best practices right in your editor as you code.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=7)** ESLint is widely used by JavaScript developers to catch and correct issues before testing and deploying.
>
> **[0:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=15)** Although ESLint allows you to load a default set of rules, one of it's strengths is it's configurability.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=22)** It's unlikely that you'll want to enforce every one of the default rules in your code or that you'll make precisely the same choices as the defaults.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=32)** For this reason it's important to understand how to configure ESLint.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=37)** Otherwise, using it can be an exercise in frustration, as you have to ignore it's warnings when they're not relevant to your preferences.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=46)** With ESLint installed I could run a configuration utility.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=50)** However, this builds out a package.json file in associated modules that I don't need here.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=57)** So instead, ESLint supports rules written using JavaScript itself, as well as yamo or Jason.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=64)** I'm going with JavaScript, so the file is .ESLintrc.js.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=70)** The file contains a module.export statement and within that, a couple keys.
>
> **[1:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=76)** One is the ENV or env key, which specifies the environment I'm using it in.
>
> **[1:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=82)** Because I'll be using es6 santacs in my code, I specify the es6 key with a value of true within the env object.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=91)** The other key is named rules and has an object literal as it's value.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=95)** Within that object I can simply add key value pairs that are rule names in the corresponding values I want for them.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=103)** Those rule names are specified in the documentation at [ESLint.org](https://ESLint.org).
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=109)** In each video in this course, I'll add the corresponding ESLint rule if one exists.
>
> **[1:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=114)** In general, you can configure a single .ESLintrc.js file at the root directory of the files you want it to apply to.
>
> **[2:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=123)** For this course, I'll have a different version in each folder, as I'll be adding rules to it as I go along.
>
> **[2:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=130)** Note that .ESLintrc.js starts with a dot.
>
> **[2:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=134)** This marks it as a configuration file to your operating system.
>
> **[2:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=138)** These are commonly referred to as dot files.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=141)** You may find that this file is not visible in your file manager even though you can see it in your editor.
>
> **[2:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=147)** This is the default configuration for both Mac and Windows.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=151)** As long as you can see the file in your editor, you can open it and save changes.
>
> **[2:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=156)** If you wanted to display hidden files in your operating system like I have here, I recommend going to [stackoverflow.com](https://stackoverflow.com) and searching for recommended steps.

> [!info]- Semantic Content
>
> **File Paths:** eslintrc.js (3), package.json (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [eslint.org](https://eslint.org) (1), [stackoverflow.com](https://stackoverflow.com) (1)
> **Prerequisites:** configure (2)
> **Code Keywords:** module (1)
> **Env Vars:** env (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### Foundational practice: Use strict mode
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=0)** - [Instructor] No matter which other practices are in your style guide, or what modern JavaScript features you may be using, your first step when writing code should be to ensure that you're working in strict mode.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=13)** Indicating that code should be interpreted in strict mode specifies to user agents like browsers that they should treat code literally as written, and throw an error if the code doesn't make sense.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=26)** Without strict mode turned on, user agents often go through a series of modifications to problematic code in an attempt to get it to make sense.
>
> **[0:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=36)** In the start file for this video, I'm going to create and then log a variable.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=40)** My idea is to build an app to get a user's location and identify nearby events.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=46)** And for a placeholder location, I'm going to create a const called city, and set that to Chicago.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=55)** And then I'm going to console.log that.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=61)** And I'm going to save that file, and then switching over to my HTML file for this video, I'm going to start my live server, but you can also just open the HTML file directly in your browser.
>
> **[1:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=74)** I'm going to open my browser console, and there we go, I've got Chicago logged to the console, which is the value of the variable that I console.logged.
>
> **[1:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=84)** Now going back to the editor and to my JS file, what if I accidentally failed to declare my variable but just set a value?
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=92)** So for instance, if I took the const out here, and just said city equals Chicago?
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=98)** If I save this and I go back to my browser, and I reload my page, I can see Chicago is still logged.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=106)** That's because the browser is attempting to tease out meaning from my malformed code.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=112)** So the browser figures that even though I didn't declare this variable, I'm setting a value for it, so I must have just meant to declare it.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=119)** On the surface, this can seem like a fine thing, and indeed, working outside of strict mode makes it possible for people to get their feet wet with JavaScript code without having all the details quite nailed down.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=132)** However, as a developer, I don't want to leave a bug in my code, because I know it could come back and bite me later on, and I also just want to write good code.
>
> **[2:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=142)** And that's where strict mode helps out.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=144)** So in my editor, I'm going to add a new first line to my file, and that's going to be the string use strict.
>
> **[2:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=154)** Now this is technically just a string, and that's the magic that prevents it from throwing an error in older browsers.
>
> **[2:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=161)** They'll just see a string here and move on in the code.
>
> **[2:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=163)** But modern browsers recognize the string as a statement to switch into strict mode.
>
> **[2:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=169)** And saving this and checking back in my browser, now I'm seeing a reference error.
>
> **[2:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=175)** And this is what I want when I'm trying to work with a variable that I haven't defined.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=180)** And so the console is pointing me to line three, so going back to my code, I'm just going to add const.
>
> **[3:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=190)** Save that.
>
> **[3:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=193)** Back in the browser.
>
> **[3:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=194)** Once again I have the value of my variable logged and I don't have an error.
>
> **[3:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=199)** Although strict mode may seem like it creates more work on the front end, it's actually a really good trade-off, because it saves more headaches later on as you weed out bugs in the code you write.
>
> **[3:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=210)** So make sure the first line in any JavaScript file you create is use strict.
>
> **[3:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=216)** Now I can also enforce this in my editor using eslint.
>
> **[3:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=221)** So opening .eslintrc.js, within the rules object, I'm going to add my first key, and that's going to be strict.
>
> **[3:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=231)** Now this rule takes an array of two values.
>
> **[3:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=235)** So I can look up the documentation on [eslint.org](https://eslint.org) to read more about this rule.
>
> **[4:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=241)** Now the rule takes an array of two values.
>
> **[4:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=243)** The first is the severity of the issue if it arises, which can be off, warn, or error.
>
> **[4:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=249)** And the second is when strict mode is required, which can be only in functions or globally.
>
> **[4:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=256)** Now I want this to trigger an error, and I want to require a single global strict mode declaration in my code.
>
> **[4:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=263)** So I'm going to specify an array.
>
> **[4:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=266)** The first value is going to be the string error.
>
> **[4:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=271)** The second value is going to be the string global.
>
> **[4:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=274)** And then saving that, I'm going to go back to my app.js file, and I'm going to comment out my use strict statement.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=283)** So this is just modeling what this file would be like if it didn't have a use strict statement in it.
>
> **[4:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=289)** And immediately I can see the file name in my explorer bar turns red, and I get these red squiggles underneath all of my code.
>
> **[5:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=300)** These are both a result of the error setting, and if I hover over that underlined code, I see the error message, which indicates that I've chosen to enforce the global form of use strict.
>
> **[5:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=312)** So if I go up here and uncomment my use strict statement, all those errors go away because now I'm conforming to that rule that I set in my eslint configuration file.
>
> **[5:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=322)** And I'll just save those changes.
>
> **[5:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=325)** Including this use strict statement will work in concert with eslint to ensure that both the editor and the parser will prompt me about any lazy coding practices, and the result is going to be an increase in the overall quality of my code.

> [!info]- Semantic Content
>
> **Code Keywords:** const (3), throw (1), switch (1), require (1)
> **CLI Commands:** make (3)
> **File Paths:** eslintrc.js (1), app.js (1)
> **Env Vars:** html (2)
> **Cross-References:** go back to (2)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)


### 2. Creating Comments

> [↑ Back to Table of Contents](#table-of-contents)

#### Use single-line syntax for single lines
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=0)** - [Instructor] JavaScript has two different syntaxes for creating comments.
>
> **[0:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=4)** To create a single line comment, you type two slashes.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=8)** Anything after those characters in that line is considered a comment and is ignored by a parser.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=14)** You can theoretically create a single line comment that's as long as you want and it's readable if you turn on word-wrap in your editor.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=22)** However, it's standard practice to limit line length in code to ensure that word-wrap isn't needed to view content.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=29)** For longer comments then, you need to use multiple lines.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=33)** Multiple line comments have their on syntax, starting with slash star and ending with star slash.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=39)** Anything enclosed by those sets of characters is ignored.
>
> **[0:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=44)** In theory, you could simply mark each line of a multi-line comment as a single line comment.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=50)** This would have the same practical effect as creating a multi-line comment.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=55)** However, there's a subtle distinction.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=57)** Using multiline comment syntax indicates clearly, from the start, that the following lines are part of a multiline comment.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=66)** Using the appropriate syntax also provides formatting that makes it easier for you and other developers to quickly see how long a multi-line comment is, where it starts, and where it ends.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=78)** By contrast, a set of single line comment markers can more easily blend into the surrounding code.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=86)** I'm going to create a multiline comment at the start of my app.js file.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=91)** Now, I want the use strict statement to come before any statements in my code.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=96)** But it's pretty common to include a comment at the start of the file, giving basic information about its contents.
>
> **[1:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=102)** And because a comment is ignored by parsers, putting it before the use strict statement isn't a problem.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=109)** So, I'll add my comment just above the use strict statement.
>
> **[1:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=113)** So, I'll add my name, and the name of the course, (keyboard typing) and "LinkedIN Learning".
>
> **[2:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=127)** To make this a multiline comment, I'll add a blank line before and add slash star, and then on the line after, I'll add star slash.
>
> **[2:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=137)** And then another blank line.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=140)** And I'll add one more touch.
>
> **[2:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=142)** I'll indent the text in that comment to make it stand out a little bit.
>
> **[2:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=147)** And now I can see really clear delineation between the start and the end of the comment.
>
> **[2:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=153)** I can enforce this style with eslint as well.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=157)** Using the multiline comment style rule.
>
> **[2:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=161)** In my eslintrc file, I'll add a new key value pair to the rules object.
>
> **[2:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=168)** The name is multiline, dash comment, dash style.
>
> **[2:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=175)** And notice after I've typed that, that I've got a different coloring going on here than I did for my other key.
>
> **[3:02](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=182)** I've also got and error here, 'cause it's expecting a comma, so, I have hyphens in my key name here and in order for that to work as a key name, I need to quote it so that it's parsed correctly.
>
> **[3:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=195)** So, that results in a key coloring in my editor that's different from the other key which isn't quoted, but they're both interpreted the same, as keys.
>
> **[3:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=205)** So then, for the value of this, I specify an array.
>
> **[3:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=211)** And first, I want severity level, which is error, because I want the editor to throw an error.
>
> **[3:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=217)** And then, I need to specify which of the styles I'm using.
>
> **[3:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=221)** So, there's a set of key words for different styles for multi-line comments and I've chosen bare-block, which I just using slash star at the beginning and star slash at the end and that's it.
>
> **[3:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=234)** So, put comma at the end and we'll save those changes.
>
> **[4:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=240)** And then, back in my app.js file, let's test this out.
>
> **[4:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=244)** So, I want to take out the multiline comment formatting.
>
> **[4:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=249)** In visual studio code, I can select all those lines and press Alt shift A, on a Mac to turn that back into plain text and then, if I select all those lines, I want to see what happens if I format this as a series of single line comments.
>
> **[4:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=266)** So, in visual studio code, I can say command slash on a Mac and it's a comment, I can see in green but I also have error underlining and when I hover over that, it very specifically mentions the multiline comment style rule.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=283)** So, I'm just going to go ahead and undo the last two things I did; get back to that multi-line comment style and now, I don't have that error anymore.
>
> **[4:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=292)** So, I'm enforcing a code style that ensures that my multi-line comments stand out more clearly from the codes that surrounds them.
>
> **[4:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=299)** And that helps me, whenever I work with my code, and it helps other developers that might need to read through it, as well.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), throw (1), let (1)
> **File Paths:** app.js (2)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard typing) (1)

#### Multi-line syntax with leading asterisks
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=0)** After the opening slash star of a multi-line comment, every character is treated as part of the comment.
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=8)** This means line breaks, spaces, and other characters can be used to format the appearance of the comment and are not treated as control characters by a parser.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=18)** When you create a multi-line comment with only the comment content between the opening and closing character sets, this is a style known as bare block.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=28)** Another comment format for creating a multi-line comment is known as starred block.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=33)** In this format, each line of comment is preceded by a space, an asterisk and another space.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=41)** This style effectively creates a line to the left of the comment content, underscoring visually the fact that this is a comment and making it stand out even more clearly from the surrounding code.
>
> **[0:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=54)** I can update my eslintrc file to specify that I want to use a starred block.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=59)** I already have a multi-line comment style rule, so I'm just going to update my style choice from bare block to starred block.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=67)** I'll save that and then switching back to my app.js file, my multi-line comment has an underscore and my editor is expecting a starred block.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=78)** So I want to add stars that line up with the existing star at the beginning, so one space to the left, star, got that one space to the right, I'm going to do the same thing on the next line, and there, and then my final line still needs to be a line, that asterisk has to be moved over one space, so that I have that consistent vertical line connecting all the asterisks.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=104)** Now my arrow formatting is gone, I have a valid starred block.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=109)** Editors also offer automatic starred block formatting.
>
> **[1:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=113)** So I want to add another starred block and in Visual Studio Code I can type slash star star, and it automatically get a space and the closing characters, so just like when I'm adding a block in my code, if I press Enter here, I get a new line between the starting and ending characters.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=132)** That new line is prefaced with a space star space, so the formatting of the block is already there, I can type whatever I need to type, (keyboard clacking) and when I enter a new line, that gets the formatting as well.
>
> **[2:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=147)** (keyboard clacking) And notice that the opening line in the starred block that's generated by my browser contains two asterisks, but remember, everything after that opening slash star is considered a comment, including that second star.
>
> **[2:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=165)** So there's really no difference here whether I have that star or not, it all works the same, and having that second star there just tells my editor I want to create a starred block.
>
> **[2:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=176)** By updating to starred block, I have made my multi-line comments even more legible for me and for any other developer who reviews my code.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (2)
> **File Paths:** app.js (1)
> **Code Keywords:** type, (1)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)

#### Include leading spaces in comments
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=0)** - [Instructor] Spaces are optional in comments, but you can include them to increase the legibility of your comments.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=7)** In particular, it's a common practice to include a space between the starting comment characters and the commented code.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=14)** I can already see that in the format for my start block.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=17)** I'm going to add a single line comment before my variable just to mark this as a section that contains variables.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=24)** So I'll add a blank line to keep some space from U strict, and then I can just do a single line, slash slash, and variables.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=33)** Now at a glance, it takes a little work to see where the slashes end and the word variables begins.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=39)** But if I click in here and stick a space after the second slash, it immediately becomes easier to recognize that as a comment containing the word variables.
>
> **[0:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=50)** ESLint contains a spaced comment rule that let's me specify whether comments should include spaces.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=57)** The documentation makes it clear that you can get fairly detailed for this rule.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=61)** It let's you specify exclusions and situations where spaces are and aren't needed.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=67)** I'm going to go with a more basic setting for my needs, which is to require a space after the opening comment characters.
>
> **[1:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=74)** In me ESLint RC file, I'm going to add a new line, and the rule name is spaced-comment, and for the value I'll specify an array, first containing how I want the issue treated, which is as an error, and then the style I want applied which is the string, always.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=98)** Save that and then switch back to my app.js file, and if I take out the space before variables in that comment I see the error indicator.
>
> **[1:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=110)** And when I hover, I can see a note that specifically references the rule that I just put in place, and if I put that space back in, it fixes it right up.
>
> **[2:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=120)** Note that the space comment rule also applies to multi-line comments.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=125)** Because I'm already enforcing the starred block style, I automatically have a space enforced after the star at the beginning of each line.
>
> **[2:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=135)** But if I didn't have starred block enforced, I'd also have to be sure to include a space before the content of each line of my comment.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=144)** Now I'm enforcing spaces in my comments which will keep my code even more legible for me and for other developers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1), switch (1)
> **Warnings:** note that (2)
> **File Paths:** app.js (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create JavaScript comments
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=5)** - [Instructor] Ready for a challenge?
>
> **[0:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=8)** The start files contain the first few lines of code to create a grocery shopping app.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=13)** Edit the files to implement and enforce best practices for JavaScript comments.
>
> **[0:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=19)** Your code should also use and enforce strict mode.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=22)** You'll need to make changes to both the script.js and eslintrc.js files.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=29)** This should take you about five minutes.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=31)** When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** script.js (1), eslintrc.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Create JavaScript comments
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=0)** - [Instructor] The challenge consists of enforcing appropriate single line and multiline syntax for comments, enforcing leading spaces and also Strict Mode.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=18)** So the first thing I want to do is start by building out some rules, because building out the rules first will help me then see in my editor what needs to be changed.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=27)** So, my ESLintrc File has no rules right now.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=31)** I know I want to enforce Strict Mode, so I'm going to start by adding Strict, and that value is an array which starts with Error and then Global.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=45)** Then I want to specify what my multiline comment style should look like.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=51)** So that's Multiline-Comment-Style and an array which is Error and we want to use Starred-Block to make this multiline comments really easy to read.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=67)** And finally, I want to enforce leading spaces in my comments.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=71)** So that's the Spaced-Comment rule with a value of an array which is Error and Always.
>
> **[1:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=85)** So save my ESLintrc, immediately I can see all of the red being indicated for my file, my Script.JS file.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=93)** Switching over there, everything is underlined as an error.
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=97)** And so, first off, I know I want to make sure I have Strict Mode going on.
>
> **[1:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=103)** So after this initial multiline comment, before the single line comment that seems to be connected with this code down here, I'm going to add Use Strict, as a string, on it's own line.
>
> **[1:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=117)** And that gets rid of the error that was down here, because I, my code was not being processed in Strict Mode.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=124)** Then I can look up here at the errors and there's two of them.
>
> **[2:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=129)** I have a multiline block comment using consecutive line comments and I'm also missing spaces in those single line comments.
>
> **[2:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=139)** So I'm going to select that all in my editor, Visual Studio Code, I can do on my Mac a Command Slash to remove those single-line comments and then I'm going to start by creating a bare-block-comment.
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=155)** To do that, I need to add a blank line before my comment and then I'm selecting everything from that blank line before to the blank line after.
>
> **[2:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=164)** And doing Alt + Shift + A on my Mac which gets me those opening and closing characters on the surrounding lines, rather than running into the beginning or ending lines of a content.
>
> **[2:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=175)** And then, if I check the error again, now we have the Expected A Star issue.
>
> **[3:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=183)** So creating a new Star-Block, when the editor supports that, is a lot easier than converting an existing one, but we can do it.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=191)** This one's not that long.
>
> **[3:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=193)** So, again I need to indent with a space so that the Star that I type lines up vertically with the Star in the first line and then one more Space before the content, and I'll just keep doing the same thing.
>
> **[3:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=206)** I can even copy that pattern, Space Star Space copy it to the clipboard, and just Paste it at the start of each line within my miltiline-comment.
>
> **[3:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=218)** And now I have a Starred-Block-Comment and I don't have any error underlining here.
>
> **[3:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=225)** I'm going to create a blank line just to separate visually that initial comment from the Use Strict statement.
>
> **[3:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=230)** Then I have one more issue and if I hover that, this comment is violating my Spaced-Comment rule because I need a Space after those opening characters in a single line comment.
>
> **[4:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=241)** So I can click after the second slash, press Space, and now that content is separate from the comment characters.
>
> **[4:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=251)** And, I have fulfilled all of the requirements of this challenge, and my code is a lot easier to read.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **File Paths:** script.js (1)
> **Code Keywords:** finally, (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Using Punctuation

> [↑ Back to Table of Contents](#table-of-contents)

#### End statements with a semicolon
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=0)** - [Instructor] You're probably used to seeing most lines in JavaScript code ended with semicolons.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=5)** Although not strictly necessary, it's a best practice to include a semicolon at the end of every expression, such as a variable declaration, or a return statement.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=14)** Some developers write JavaScript without semicolons.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=18)** In a lot of cases, it's obvious to the parser where one statement ends, and the next begins, but there are some corner cases that can trip up even experienced developers.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=28)** As a result, including semicolons is a simple way to make it clear where you intend your statements to end, and to illustrate the structure of your code for other developers who might need to work with it as well.
>
> **[0:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=41)** JavaScript statements that end with a code block, such as an if/else block, don't need semicolons at the end, because the closing curly brace terminates the statement.
>
> **[0:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=51)** But as a rule, you should terminate any statement that doesn't end with a curly brace with a semicolon.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=57)** And note that even though an object literal ends with a curly brace, it's not a block, it's data.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=64)** An expression with a function literal on the right needs to end with a semicolon as well.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=71)** My app.js file includes code for checking the user's geolocation, so my app can start with a nearby view.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=80)** But if geolocation isn't available, or if a user declines to share that data, we can use fallback data from the user's account when they set it up.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=89)** So I have user preferences, which would come from my back end, saved as an object.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=95)** And then conditional code for checking geolocation.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=98)** I've written this without semicolons.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=101)** You can still get the basic structure of the code from my indents and line breaks, but semicolons will ensure the parser understands exactly what I intend.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=109)** So switching over to my eslintrc file, I'm going to add three rules.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=116)** First is semi, and since it's a single word, I don't need quotes around it.
>
> **[2:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=123)** And semi specifies that semicolons can't be omitted where required.
>
> **[2:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=130)** And the value for this is an array, starting with error, and we're just going to say we want them always.
>
> **[2:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=138)** I also want to enforce readability by specifying no space before a semicolon.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=144)** That rule is semi-spacing, and I can simply say error, because I'm saying yes, I want semi-spacing.
>
> **[2:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=152)** And I need a comma there, not a semicolon.
>
> **[2:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=156)** And finally, I can set a flag for no extra semicolons, just to keep things clean.
>
> **[2:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=162)** So eslint has a no-extra-semi rule, and there again I can just say error, which means that if there's an extra semicolon, it will flag an error.
>
> **[2:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=176)** So I saved those changes.
>
> **[2:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=177)** I immediately see that my editor is flagging some issues with my app.js file.
>
> **[3:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=183)** And so switching over here, you can start with that use strict statement, I hover over that squiggle, I see the missing semicolon, referencing the semi rule, and I add that, and that fixes that one.
>
> **[3:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=200)** And notice that I have an error at the end of my const statement here, after the curly brace, but down after my if/else construction, there's no error flagged.
>
> **[3:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=211)** And if I add a semicolon after the else, I get a warning, because that's an unnecessary semicolon, which I specifically said I don't want.
>
> **[3:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=221)** So again, I don't use a semicolon after a code block.
>
> **[3:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=224)** I'm going to take that out.
>
> **[3:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=225)** But I do up here after an object literal, so I need to add a semicolon there.
>
> **[3:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=231)** And then I just need to add semicolons after each console.log statement, here and here.
>
> **[4:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=240)** And also here.
>
> **[4:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=244)** And just based on the sizing on my screen, that terminal semicolon is going onto the next line, but we can see that's word wrap, because there's no new line number here in my editor.
>
> **[4:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=254)** So this semicolon's just at the end of this console.log statement.
>
> **[4:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=258)** And then, finally, I have one more squiggle here, because this is the end of my getCurrentPosition method.
>
> **[4:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=266)** So I need a semicolon to terminate that statement as well.
>
> **[4:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=270)** And then I want to test out the other rules.
>
> **[4:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=272)** So if I add a space before a semicolon, I can see that I get a squiggle, and it says unexpected white space right there.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=283)** I can take that out, and I can also, what happens if I just put a second semicolon?
>
> **[4:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=286)** It shouldn't bother anything.
>
> **[4:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=289)** But again, I get an unnecessary semicolon message.
>
> **[4:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=293)** So I'll take that out, I have no more errors, I can save that.
>
> **[4:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=297)** And now my code uses semicolons consistently, but doesn't include them where they're not needed.
>
> **[5:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=303)** And that is going to help me write code that parses as I expect, and that's readable for other developers.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), function (1), const (1), else, (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **File Paths:** app.js (2)
> **Analogies:** such as (2)
> **Warnings:** note that (1), warning (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** getcurrentposition (1)
> **Tools:** terminal (1)

#### Don't rely on auto semicolon insertion
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=0)** - [Speaker] From a technical standpoint JavaScript doesn't absolutely require semicolons.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=6)** Indeed, some developers write JavaScript without semicolons, relying on automatic semicolon insertion which is exactly what it sounds like.
>
> **[0:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=15)** JavaScript's built in process for identifying a logical end of a statement and the beginning of a new one based on context.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=23)** However, it's best not to rely on this mechanism, because it can have some unintended consequences.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=30)** The classic example of where automatic semicolon insertion can behave differently than you want is when you use the return statement.
>
> **[0:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=38)** If a return statement is followed by a line break parsers will treat it as as if it's followed by a semicolon.
>
> **[0:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=44)** This means any continuation on the following line, such as a value to be returned will instead be treated as a separate statement.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=53)** In the app.js file for this video lines 10-11 are meant to be a single statement.
>
> **[1:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=60)** It's already clear from the editor here that line 11 is unreachable. I can tell that because my editor grazed the code out a little bit and when I hover over that I can see unreachable code detected.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=73)** And the return statement is also marked with an eslint(semi) error for a missing semicolon, because I have a semi rule set in eslintrc file.
>
> **[1:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=85)** But just to test things out what should happen here when I actually execute this code is that I enter a value, the makeLowerCase function converts my entry to lower case and it gets added to userPrefs with the key setting.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=100)** So, I can open up my index.html file.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=104)** I'm going to open that up in my browser and I get a prompt .
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=109)** I'm going to enter Urban with a capital U.
>
> **[1:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=113)** Click OK.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=115)** And then opening up my console I have an error about unreachable code and then on line 17 that setting value is logged and the value is undefined.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=125)** And that's because the function returned without a value, due to that premature line break.
>
> **[2:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=133)** If I go back to my code and I remove that extra line break.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=140)** I can save that, return to my browser.
>
> **[2:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=145)** Prompted again and type in Urban with a capital U.
>
> **[2:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=149)** And now I get urban logged to the console that has been run through the makLowerCase function and it's all lower case.
>
> **[2:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=159)** So, everything now works as expected by taking out that unexpected line break.
>
> **[2:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=165)** ESlint supports a no-unexpected-multiline rule.
>
> **[2:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=170)** This rule looks for omitted semicolons in situations where consecutive lines could be treated as single statement.
>
> **[2:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=176)** So, the reverse of the issue with the return statement.
>
> **[3:02](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=182)** In my eslintrc file I'll add that rule.
>
> **[3:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=187)** So, it's no-unexpected-multiline with a value of error.
>
> **[3:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=199)** ending with a comma.
>
> **[3:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=201)** So saving that, going back to app.js and I have a couple flags down here.
>
> **[3:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=208)** These are both situations where I included a line break in code that shouldn't have it.
>
> **[3:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=213)** So, both of these situations are parsed without automatic semicolon insertion, and to make that clear, I'm just going to remove those line breaks.
>
> **[3:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=224)** There Then here And that makes the error flags go away.
>
> **[3:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=232)** And I'm going to save this and I'll go back to my browser and retest that.
>
> **[3:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=239)** And again the code is still working, nothing has changed.
>
> **[4:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=246)** So, again it's possible to write JavaScript without semicolons, but it comes with some perils and to avoid that.
>
> **[4:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=253)** You can make sure to terminate every statement appropriately and we can use ESlint to help us out there.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), break. (3), require (1), case. (1)
> **File Paths:** app.js (2), index.html (1)
> **Code Identifiers:** makelowercase (1), userprefs (1), maklowercase (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Non-Speech:** (typing) (2)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)

#### Standardize line length
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=0)** - [Instructor] Aside from automatic semicolon insertion, white space is not significant in JavaScript.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=7)** As a result, you can theoretically write lines of code of any length.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=11)** And indeed one of the ways that Minification reduces character count is by reducing code to a single line.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=18)** However, when formatting code for human usability, limiting line length is a widely adopted practice.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=26)** Shorter lines enable you to fully view each line without wrapping or scrolling.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=31)** In addition, breaking up a long statement across multiple lines when combined with indentation, can help you parse what the entire statement is doing as well as any steps involved in the process.
>
> **[0:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=44)** Code is generally displayed in a fixed width font, meaning that each character takes up the same amount of space on the line.
>
> **[0:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=52)** For this reason it's common to measure line lengths in characters.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=57)** Common line lengths include 80 or 100 characters.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=61)** In my app.js file, a few lines look long, but it's hard to tell just how long they are.
>
> **[1:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=69)** There are a few tools that can help us manage this.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=73)** First, ESlint includes the max-len rule, which lets you set a maximum length and trigger an error when a line exceeds the number of characters you specify.
>
> **[1:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=85)** In my eslintrc file, I'm going to add a max-len key.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=93)** For the value, I specify an array, indicating I want to trigger an error message, and then for the condition I use an object with a single value, the string 'code', and the maximum number of characters, and I'm going to use 80.
>
> **[1:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=113)** There are a number of other configurations you can add here.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=116)** For instance, if your code includes long strings you may not want to break those up over multiple lines, so you can exclude those from the rule.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=125)** For now, I can save these changes and return to my app.js file, and I see an error indicator here, and when I hover over it, it tells me my line is too long.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=141)** Now by default I wouldn't even be able to see the entire line of code here because it's so long.
>
> **[2:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=147)** So if you haven't already, I recommend turning on word wrap, so code that's wider than the browser window will automatically wrap to fit.
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=155)** In Visual Studio Code, I access that by clicking view and then toggle word wrap.
>
> **[2:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=163)** And so notice if I turn that off I only seem to be getting this one very long line, and if I toggle it again, I've got it back.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=173)** Now notice that the line number doesn't increment until there's a line break.
>
> **[2:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=177)** So this is a way I can tell when something is really long and being wrapped, or whether it's actually code that's broken up over multiple lines in which case I would see multiple line numbers.
>
> **[3:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=188)** Now what would be useful at this point would be some help figuring out just where the line needs to end to help me think about how I might break it up, and here's where the editor itself can help.
>
> **[3:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=200)** Every modern editor, Visual Studio Code, Sublime, and Atom, every one supports adding rulers to the editor window to show the length of a line of a given number of characters.
>
> **[3:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=212)** In VSCode I'm going to open up my preferences, so that's, clicking on my Mac, I'm clicking code, preferences, and I'm going to go to settings.
>
> **[3:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=222)** And then I can search the settings, so I'm going to search for ruler, and then scrolling down, I'm looking specifically for Editor:Rulers.
>
> **[3:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=234)** And here instead of just entering values, I need to go to my settings.json file, so I'll click that link and open that up.
>
> **[4:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=243)** Now I already have a few configurations here, but you may only have one, or two, or none.
>
> **[4:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=250)** I need to specify a rule with the name editor.rulers, so... adding a comma after my previous last line, because this is json, and I have to use double quotes.
>
> **[4:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=263)** So editor .rulers.
>
> **[4:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=269)** And a colon.
>
> **[4:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=271)** And I include an array as the value, containing one or more line lengths in characters.
>
> **[4:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=277)** So for now I just want 80, so I'm going to do an array with a single value of 80.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=283)** Remember that this is a json file, so I cannot end my line with a comma.
>
> **[4:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=289)** I will save that change and then I'll go back to my JavaScript file, and I do not see the ruler on the screen.
>
> **[5:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=301)** I'll try reducing my font size.
>
> **[5:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=303)** Actually, the first thing I'll do is hide my explorer bar over here.
>
> **[5:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=307)** There we go.
>
> **[5:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=308)** And now I can see this ruler over here, at 80 characters, which gives me some idea of where the lines get too long.
>
> **[5:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=320)** And so now I can break up my code across multiple lines.
>
> **[5:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=324)** So with a fetch statement I can just go ahead and put those chain methods on their own lines.
>
> **[5:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=330)** So I will break it .then, and I've got an if statement here so that could use its own line.
>
> **[5:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=340)** Contents of the if statement... That closing curly brace, an else statement... Another closing curly brace, and I've got another chained .then, and a chained .catch.
>
> **[5:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=359)** And so I've gotten rid of that error, I can see visually because of my ruler in my editor, that all of my lines of code are beneath 80 characters in length.
>
> **[6:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=371)** And I have also gotten rid of those ESlint errors, so that's another way of verifying that.
>
> **[6:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=378)** And so, using that ruler along with those rules helps me to break up my code into manageable line lengths and helps me verify that I've done it when I've done it.

> [!info]- Semantic Content
>
> **Tools:** visual studio (2), sublime (1), atom (1)
> **UI Navigation:** toggle (2), go to (2)
> **File Paths:** app.js (2), settings.json (1)
> **Code Keywords:** this. (1), break. (1), catch. (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Use commas consistently
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=0)** - [Instructor] Several types of JavaScript statements uses commas to separate sequential items.
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=6)** For instance, elements in a array literals are separated by commas, as are key value pairs in object literals.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=13)** When a list of values is too long for a single line, it's common to break the list up by putting each item on it's own line.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=20)** This means that the commas are accompanied by line breaks.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=25)** Some developers use commas at the end of each line, while others place them at the start.
>
> **[0:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=31)** Whichever you choose, consistency is important.
>
> **[0:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=34)** Both to make your code more readable and to enable you to catch errors, more importantly, omitted commas.
>
> **[0:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=42)** In my location app, the fetch request can take a number of parameters using an object literal.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=48)** The values don't all fit in a single line so I already have an error here because I've specified a maximum line length of 80 characters.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=57)** So I want to break that object up, and one way to do this is to use the comma first style.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=64)** So I have my opening here for my object and I'm going to put the first key on it's own line.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=75)** And then, I'm going to start a new line with this comma, so that my second key is on it's own line.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=86)** Then I can put my ending for that object literal on it's own line.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=94)** And to make this all line up, I probably want to indent here just so that all the keys and the closing punctuation are all vertically aligned, meaning that if there's an issue with a missing character or a missing space, it's immediately obvious.
>
> **[1:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=114)** My preferred style though is comma last.
>
> **[1:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=117)** I like to see that values first and so I'm going to switch to that.
>
> **[2:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=121)** And so that's really just going to mean taking away that line break there and instead, adding a line break here and likewise, taking away my line break before that comma and just moving those closing character onto their own line.
>
> **[2:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=140)** So here, the key names are front and center.
>
> **[2:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=146)** ESLint lets me enforce a comma style using the comma style rule.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=151)** So in my ESLintrc file, I'm going to add a new line at the end of my rules object and I'm going to specify the comma-style key with a value that's in array, staring with error and then the key word last, meaning that I want to enforce a comma-last style.
>
> **[2:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=174)** And notice also that I've already been implementing this style in my ESLintrc file.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=180)** So, all of my key value pairs end with a comma rather than all of these lines starting with a comma.
>
> **[3:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=189)** And then switching back to app.js, if I take out this comma, add it to the beginning of this line instead, I get a squiggle here and it specifically says, "Comma should be placed last."
>
> **[3:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=203)** So I can undo that change and now I'm all good.
>
> **[3:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=207)** So again, the comma style you pick is a matter of preference but it's important to be consistent with you commas either starting or ending your lines of code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** app.js (1)
> **Code Keywords:** switch (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Include a comma in a list of values
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=0)** - [Instructor] Lists of values like array elements, key value pairs and object literals, and function arguments require comma's to separate values.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=10)** No comma is required at the end, but when you're using a multiline format for a series of values, and you're using a terminal comma format rather than putting commas at the beginning of the line, then it's a best practice to include a comma after the last item as well.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=29)** There are a couple of solid reasons for this.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=32)** First, it makes it harder to omit a comma between items when you add it to your list, because the comma that used to be at the end, automatically becomes the separator before the new item.
>
> **[0:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=45)** The terminal comma also makes diff's cleaner, as you don't see a separate deletion and insertion for the added comma.
>
> **[0:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=54)** Instead, the only change is the newly inserted line.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=59)** In the fetch code in my app.js file for my local events app, I'm specifying an object containing a couple of properties.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=68)** I need to add another one, which is the Api key.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=71)** Now, I can add a new line, and simply add that with a placeholder for now.
>
> **[1:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=77)** So, that's X-Api-Key, the value, and I'm just going to use INSERT-API-KEY-HERE as the value, but notice that I failed to include a comma after the previous line, so the editor is already flagging an error in my code here, and adding that comma after the url value, fixes things.
>
> **[1:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=105)** So, including a comma at the end of this line, is going to keep me from forgetting that connecting comma when I add future key value pairs here.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=115)** ESLint supports setting a rule for trailing commas in object literals.
>
> **[2:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=121)** The rule name is comma-dangle.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=124)** In my eslintrc file I'll add a new line, and I'm going to add comma-dangle, and the value is an array with a string error, and then the style name just chosen from a list of defined style names for this rule, the one I'm using is always-multiline.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=151)** I'm not so concerned about commas at the end of a set of values that all fit on a single line, it's when I need to add a line break that I'm most likely to forget the comma.
>
> **[2:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=162)** So, I've been including terminal commas in this rules list in eslintrc, and I'll add one here.
>
> **[2:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=171)** Then saving and returning to apa.js, and I can check things out here.
>
> **[2:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=176)** If I take out that terminal comma, I immediately get that squiggle, and it calls out the comma-dangle rule, saying that I'm missing a trailing comma, and so I'll add that back.
>
> **[3:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=190)** Now, I'm inoculated against forgetting a separator comma, if I need to add another key value pair after this one down the road, and my get diff's will be cleaner as well.

> [!info]- Semantic Content
>
> **Tools:** terminal (4)
> **Code Keywords:** function (1), require (1), this. (1)
> **Env Vars:** insert (1), api (1), key (1)
> **File Paths:** app.js (1), apa.js (1)
> **Definitions:** is an  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Optimize punctuation
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=5)** - [Instructor] Ready for a challenge?
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=7)** The start files contain code for a grocery shopping app.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=11)** Edit the script.js file to implement and enforce best practices for punctuation in JavaScript including semicolons, line length, and commas.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=23)** This should take you about five minutes.
>
> **[0:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=26)** When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** script.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Optimize punctuation
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=0)** (upbeat music0
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=5)** - [Instructor] This challenge was to enforce best practices around punctuation and line length in this java script code.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=14)** So the way I like to approach these is to start with my eslintrc file.
>
> **[0:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=20)** Get the rules in place that will highlight issues with my existing code and then I can work on it from there.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=30)** So I have several eslint rules that will help me identify issues with this code and enforce those best practices.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=37)** First off is just requiring semi-colons, and that's the semi rule.
>
> **[0:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=42)** Don't even need quotes on that.
>
> **[0:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=47)** And that is an error, and I want it always.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=53)** And then I also want to make sure that I don't have a space before my semi-colons So that's semi-spacing and that value is simply error.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=66)** And I want to disallow extra unneeded semi-colons, so that's no-extra-semi and error.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=78)** Then in terms of my lines, I want to make sure that I don't have unexpected multilines, so that's the no unexpected multiline key.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=93)** And it's value is simply error.
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=97)** Then I want to enforce a max length on my code.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=101)** And that is the max len rule.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=104)** And that value is an array.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=106)** First we're going to specify that it should be considered an error.
>
> **[1:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=109)** And then I need an object.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=111)** But I only need one key value pair here.
>
> **[1:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=114)** It's code with a value of 80.
>
> **[1:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=118)** And so that's 80 character lines.
>
> **[2:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=121)** And then finally, I just want to deal with my comma styles.
>
> **[2:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=127)** So first off, the comma style rule.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=132)** And that's an array, with error, and last to specify that I want my commas to terminate the lines rather than to start them.
>
> **[2:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=143)** And then comma dangle.
>
> **[2:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=149)** And that's an array, with error, and then always, multiline, specifying that whenever I have a multiline series of values, I want to make sure that the last one has a terminal comma even though it doesn't need it.
>
> **[2:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=166)** So I'm going to save those changes to eslintrc and then switch back to my java script file.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=173)** You can see here I've got seven errors flagged.
>
> **[2:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=178)** And so just starting from the top, I can see that my use strict statement is missing a semi-colon.
>
> **[3:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=184)** That's easy enough to fix.
>
> **[3:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=187)** I can see here that I'm missing a semi-colon at the end of my const.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=191)** And I fix that, but notice that the error doesn't go away here in the const because it also has an overly long line.
>
> **[3:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=201)** So since I'm fixing those semi-colons, let's just go and take care of those` 'cause I got a few more of those for sure.
>
> **[3:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=207)** So this is missing a semi-colon here in the cart variable.
>
> **[3:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=212)** We'll get back to the return statement, but here the for each statement is missing a semi-colon, so we'll add that.
>
> **[3:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=222)** And then this cosole.log statement, don't even have to look.
>
> **[3:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=225)** I know that's missing a semi-colon.
>
> **[3:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=227)** So now I'm down to two errors.
>
> **[3:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=229)** So first off, I've got an overly long line here.
>
> **[3:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=231)** So I'm going to break up my array onto multiple lines.
>
> **[3:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=234)** And I'm going to start that right after the opening punctuation.
>
> **[3:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=238)** So I'll just put in a line break after each comma at the beginning of each value.
>
> **[4:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=244)** Because that is the style that I specified.
>
> **[4:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=250)** And then, I'm going to break after that final value before the terminal punctuation.
>
> **[4:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=255)** And now notice I get an error.
>
> **[4:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=257)** And that error is pointing out that I'm missing my trailing comma.
>
> **[4:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=261)** So, great to notice that that's being called out.
>
> **[4:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=265)** Add my comma in, and now that line is no longer too long.
>
> **[4:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=269)** It fits within that 80 character limit.
>
> **[4:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=272)** I've got my list broken up on multiple lines using that terminal comma style.
>
> **[4:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=276)** And I have my trailing, dangling comma at the very end.
>
> **[4:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=281)** And then, I can see already I've got my unreachable code here after my return statement.
>
> **[4:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=286)** And if I hover over the return, it's missing a semi-colon.
>
> **[4:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=290)** So that's assuming that return is just a statement on it's own line.
>
> **[4:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=295)** But I know that I just need to take out that line break here.
>
> **[4:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=299)** So that now this code is reachable.
>
> **[5:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=301)** This is an entire statement, and I've gotten rid of all my errors.
>
> **[5:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=306)** And I've implemented all of these best practices that we've worked with for punctuation and line length.
>
> **[5:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=314)** So now my code is readable, and now it works the way that I intended.
>
> **[5:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=318)** And other developers should be able to read it and understand what' it's doing as well.

> [!info]- Semantic Content
>
> **Code Keywords:** const (2), finally, (1), switch (1), let (1), return, (1)
> **CLI Commands:** make (3)
> **Tools:** terminal (3)
> **Definitions:** is an  (3)
> **Speakers:** - [instructor] (1)


### 4. Using Spacing

> [↑ Back to Table of Contents](#table-of-contents)

#### Indent consistently
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=0)** - [Instructor] Although spaces don't change the meaning of your code in Javascript, appropriate use of spaces is important for creating code that's readable by humans.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=10)** And when it comes to making your code more readable, nothing makes a bigger impact than consistent indents.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=17)** Whenever the contents of braces, brackets, or parens don't fit in a single line, it's common to start a new line after the opening punctuation, and indent all nested statements.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=28)** As you build out code, you'll inevitably end up multiple levels deep, with indented statements nested within other indented statements.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=37)** For this reason, consistently applied indents are key in being able to read the code and understand the relationship between statements.
>
> **[0:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=47)** Some developers use spaces for indents while others prefer tabs but common style guides tend to favor spaces.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=55)** Different developers may also choose a different number of spaces for each level of indent but two spaces has become a widely adopted standard.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=63)** I can use the ESLint indent rule to set a preferred style for indents.
>
> **[1:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=70)** In my app that identifies points of interest based on a user's location, I'm starting with a set of user prefs using an object literal as sample data while I build out the app.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=83)** In my eslintrc file, I'll add an indent rule and in the array value, I'll specify that I want to flag an error.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=91)** I can specify tab for the second value if I want to use tabs or I can just use a number to indicate the number of spaces I want so I'll specify two.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=101)** I'll save that and then go back to my app.js file and I have a couple red underlines up here in my user prefs constant.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=108)** My user pref properties are right aligned instead of left aligned so they use varying indents.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=115)** So I'll add a space here before city and another space here before lon and now everything looks good.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=125)** When I'm typing new code, it's useful to have those indents implemented automatically and editors can help us out there.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=132)** I can use a few config settings to get my editor to do some of the work.
>
> **[2:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=137)** In VS Code, I'm going to hit code and then preferences and select settings on my Mac and in the search box, I'm going to type tabsize which is one of the settings and I get a few rules that match.
>
> **[2:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=153)** Now, these are settings that apply only to my editor.
>
> **[2:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=156)** If I open my project in another editor, my ESLint settings go with in my .eslintrc file but not any changes I make here in my editor settings but since this is the editor I use for all my coding, I want to customize it to help me out.
>
> **[2:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=173)** So first off, I can change tab size from the default of four to two.
>
> **[3:02](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=182)** This means that any time I press tab, the editor is going to insert two spaces.
>
> **[3:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=188)** I also have the Detect Indentations setting.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=191)** This is checked on by default and that means that the editor adjusts for whatever tab length is already used in a file, overwriting my tab size setting.
>
> **[3:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=200)** I don't want that so I'll uncheck that box and that means that the editor will enforce two spaces on every file I open.
>
> **[3:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=211)** Now, by default Visual Studio Code replaces tabs with spaces so that works well for my chosen style.
>
> **[3:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=219)** Editors can also offer a little automatic help when they detect what you're doing.
>
> **[3:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=224)** In Visual Studio Code, I have the Auto Indent setting and that's true by default.
>
> **[3:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=234)** This means that when I start a new line, it's automatically indented the appropriate amount which is really helpful.
>
> **[4:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=241)** Then I'm going to search for format on and I have a couple settings here.
>
> **[4:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=249)** The Format On Type setting automatically formats code after I complete a statement.
>
> **[4:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=255)** And there's also Format On Save, which can apply formatting to an entire document when you save it.
>
> **[4:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=263)** These are both really useful tools.
>
> **[4:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=265)** However, for the purposes of this course, I'm going to leave them off so I can illustrate both the wrong and right way to format code without premature corrections from my browser.
>
> **[4:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=276)** I encourage you to use one or both of these settings after you're done with this course.
>
> **[4:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=281)** You can also choose to turn them on now but be aware that if you do so, your code may not look like what you see on the screen as you enter or save it.
>
> **[4:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=292)** Going back to my app.js file, I want to add some conditional logic to my region function which the editor should now help me indent automatically.
>
> **[5:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=301)** So, if city is equal to, we'll say Buenos Aires, it can return South America.
>
> **[5:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=317)** Else if city is equal to Los Angeles, and I'm getting those nice auto indents, both for the closing brace and for the new line within the braces, so I'm going to return North America.
>
> **[5:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=337)** And we'll just finish up with an else, return lookup.
>
> **[5:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=342)** Now my code is consistently indented making it more readable and both my project and my browser are set up to make it easy to keep that up in all the code I work with going forward.

> [!info]- Semantic Content
>
> **Code Keywords:** match. (1), default. (1), function (1), else, (1)
> **Definitions:** means that (4)
> **Tools:** visual studio (2), vs code (1)
> **File Paths:** app.js (2)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### Space before and after operators
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=0)** - [Instructor] You've probably been using operators like plus, minus and equals since your earliest math courses.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=7)** And it's unlikely your teachers ever required a particular spacing regimen around them.
>
> **[0:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=11)** And like most of Javascript, white space isn't significant around operators.
>
> **[0:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=16)** So there's no requirement to write equations or concatenations in any specific way.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=21)** However, spaces help human readability in many parts of code, and operators are no exception.
>
> **[0:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=28)** To make your code more readable, you should include a space before and after every operator.
>
> **[0:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=34)** Including mathematical, logical, and assignment operators.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=40)** In the code for my app, I've coded up a function to calculate the distance between two sets of geo coordinates.
>
> **[0:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=47)** I didn't use any spaces around operators, and the statements are pretty dense.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=53)** ESLint supports flagging missing spaces with the space-infix-ops rule.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=58)** An infix operator is an operator that's used between two operands.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=63)** That includes mathematical, logical, and assignment operators, as well as some others.
>
> **[1:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=69)** I can add this rule to my eslintrc file, with a simple string to flag it as an error.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=75)** It doesn't need to take options.
>
> **[1:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=77)** So, that's going to be space-infix-ops with a value as a string of error.
>
> **[1:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=87)** And saving that, you can see I've got lots of errors over there being flagged in my app.js file.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=94)** So switching back, I can see I have underlines almost everywhere in my function.
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=99)** And when I hover over one of these the error message points out that I'm missing spaces.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=108)** So I can just follow all these underlines to figure out where I need to add spaces.
>
> **[1:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=114)** (keyboard clicks) Which is around all my operators.
>
> **[2:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=128)** And little by little ... (keyboard clicks) Type another one.
>
> **[2:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=133)** (keyboard clicks) One space at a time.
>
> **[2:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=139)** (keyboard clicks) Even around this logical operator here.
>
> **[2:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=148)** I want to have those spaces.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=151)** And another one.
>
> **[2:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=155)** And a mathematical operator.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=157)** And now I'm good, and now I can see I don't have any red underlines anymore.
>
> **[2:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=163)** Now I can also customize a format setting in Visual Studio code to do this for me automatically.
>
> **[2:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=169)** So in my Settings I'm going to search on binary, and we have both Javascript and Typescript settings that parallel each other.
>
> **[2:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=178)** In this case I'm looking for the Javascript setting which is insert space before and after binary operators.
>
> **[3:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=185)** So this rule is turned on by default, and this means that if I use the editor to format my code, it will automatically add these spaces in which can save me some time.
>
> **[3:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=195)** Enforcing these spacing rules around operators will make any code that uses operators easy for me and other developers to read.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), default, (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), means that (1)
> **File Paths:** app.js (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Use a consistent format for blocks
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=0)** - [Instructor] You've likely encountered a number of different layouts for blocks such as conditionals and functions in JavaScript code.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=7)** You've probably seen code written in the One True Brace style, with the opening brace on the same line as the keyword.
>
> **[0:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=15)** You may have also seen or used the Stroustrup variant, which pushes else statements onto separate lines, but keeps all other aspects of the One True Brace style.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=25)** And you may have also run into the Allman style, in which starting braces get their own dedicated lines.
>
> **[0:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=32)** As with all types of code formatting, each of these styles has its advantages and drawbacks.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=37)** And it's important to simply pick the one that works for you and use it consistently.
>
> **[0:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=42)** You can enforce this style in your code using the ESLint Brace-style rule.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=48)** One other variation in writing block code is the choice of spacing before the opening brace.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=53)** Including a space before a brace is a subtle, but useful best practice that makes your code easier to read.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=61)** You can enforce space before blocks with ESLint's space before blocks rule.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=68)** In my app.js file, the region function contains an if else structure.
>
> **[1:15](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=75)** Both the function and the conditional structure currently use Allman block format.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=80)** I'm going to start by adding rules to my eslintrc file.
>
> **[1:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=85)** So I'm going to use brace-style and error, and this chooses the default, which is the One True Brace style.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=94)** So I'm changing the style that I want to apply to my code.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=98)** And then space before blocks, the default is true and so I'm just going to say error, to say I want deviations from that standard to be flagged.
>
> **[1:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=111)** So I save that, now I see a bunch of errors in my app.js file.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=116)** So switching back there, each of my opening braces has a squiggly underscore.
>
> **[2:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=121)** And this one's flagging the brace style.
>
> **[2:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=127)** So I'm going to put that function brace back on the same line as the arrow.
>
> **[2:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=133)** And I'll do the same with all of the conditional braces, moving those up on to the appropriate line.
>
> **[2:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=143)** That's the opening braces.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=144)** I'm also going to move these else if statements and the final else statement up on the line with the closing brace that precedes them, and that's another piece of the One True Brace style.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=157)** As a side note, brace style does not affect object literals, because they're either part of assignments or they stand on their own as arguments.
>
> **[2:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=165)** So no changes are necessary to the user prefs variable here.
>
> **[2:50](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=170)** Now, One True Brace style is generally the default style used by editors that auto format.
>
> **[2:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=175)** But it's worth checking a couple settings.
>
> **[2:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=178)** In Visual Studio code, in the settings I'm going to search on JavaScript, and there's a whole bunch of settings that apply specifically to JavaScript code that are built into the editor.
>
> **[3:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=193)** And so we have a setting, place open brace on new line for control blocks.
>
> **[3:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=198)** And that's off by default.
>
> **[3:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=200)** And then there's also place open brace on new line for functions, that's off as well.
>
> **[3:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=205)** So if you're typing code in your editor and you're finding that that new code isn't implementing the One True Brace style, make sure that these options are unchecked.
>
> **[3:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=213)** Or if you want to use another style like Stroustrup or Allman, this is where you can go in your editor to make the auto formatter implement your style for you.
>
> **[3:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=225)** Now that I have block related styles set in my eslintrc file, I'm enforcing insistency in block formatting throughout my code, making it easier for me and other developers to read and understand.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), default, (1), default. (1)
> **File Paths:** app.js (2)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Include a space after keywords and arrows
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=0)** - Including spaces around keywords like function and if can make your JavaScript code more readable.
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=7)** The same is true for spaces around arrows in arrow functions.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=14)** ESLint includes a keyword spacing rule that lets your specify the format to check for keywords.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=22)** ESLint also includes an arrow spacing rule that's specific to the arrows in arrow functions.
>
> **[0:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=29)** My app.js file contains an arrow function, which includes if else logic.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=35)** And right now, that's written without spaces before or after the if, else if, or else keywords, as well as the arrow symbol.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=46)** I'll start by adding a couple rules to my ESLintrc file to flag the lack of spaces.
>
> **[0:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=52)** First off, I'm going to do keyword-spacing for the value of error.
>
> **[0:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=59)** And then arrow spacing, also with the value of error.
>
> **[1:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=64)** So accepting the defaults for both of those keywords, and just instructing ESLint to flag deviations from those defaults as errors.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=73)** And I save that, and I've got some errors flagged in my app.js file.
>
> **[1:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=78)** And I can see it's the arrow and all the keywords where I'm seeing those underscores.
>
> **[1:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=85)** So adding those spaces back, first off, this one is missing a space before the arrow, that one's going to be missing a space after.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=95)** So I will add those in.
>
> **[1:38](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=98)** Oops. There we go.
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=99)** Then we got the missing space after if, space before else, so all the way through here, just spacing around those keywords or key phrases.
>
> **[1:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=112)** And that takes care of all my errors.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=115)** And so resolving those errors also makes my code more readable.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=119)** Now, I can also check a couple configurations in my editor to make this style easier to write next time.
>
> **[2:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=125)** So in my Visual Studio Code settings, going to search on JavaScript.
>
> **[2:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=134)** And there's a lot of options in the JavaScript format settings for inserting spaces.
>
> **[2:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=146)** And so I have an option to insert a space after the function keyword in anonymous functions, and that's selected.
>
> **[2:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=154)** And then there's another option for inserting a space after keywords in control flow statements.
>
> **[2:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=159)** That's selected, as well.
>
> **[2:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=161)** Now, this doesn't cover all the cases that the ESLint rules apply to, but these are both a good start in getting my code formatted the right way from the get go.
>
> **[2:51](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=171)** All of these configurations will help make my functions and my control-flow logic easier to read by ensuring I consistently use spaces around keywords and around arrow symbols.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), if, (3), else, (1)
> **CLI Commands:** make (3)
> **File Paths:** app.js (2)
> **Tools:** visual studio (1)
> **Speakers:** - including (1)

#### Use consistent spacing before function signature parentheses
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=0)** - JavaScript has a number of syntaxes for creating a function signature, including function declarations, function expressions, anonymous functions, async functions and arrow functions.
>
> **[0:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=12)** As a result, standardizing the way you create functions in your code can be a challenge.
>
> **[0:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=18)** Different developers approach spacing in function signatures, differently.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=22)** One common approach, is to include a space before the parens in an anonymous function signature, but not in a named function signature.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=30)** This style makes it straightforward to add or remove a name, without needing to adjust spacing.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=37)** Other developers prefer to standardize on spaces before parens, in all function signatures.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=43)** The extra spaces added by the style can make the code easier to read.
>
> **[0:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=49)** Finally, some developers never include spaces before parens in function signatures, preferring to treat the combination of keyword, or name or arrow symbol, and parens as a single unit.
>
> **[1:02](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=62)** Whichever style you adopt, you can use ESLint to help you use it consistently.
>
> **[1:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=67)** For my code, I've chosen to implement a space in anonymous functions, but not in named functions, which is a popular choice.
>
> **[1:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=74)** The ESLint space-before-function-paren rule is customizable for the different types of function signatures.
>
> **[1:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=81)** I can use the anonymous, named and arrow function options to customize the rule.
>
> **[1:28](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=88)** Next, I'll add that rule to my eslintrc file.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=92)** So the rule name is space-before-function-paren.
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=99)** The value is an array, and I'm going to start by saying that I want to flag an error, with a string.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=106)** And then I'm going to specify an object literal that gives key value pairs, describing how I want each of the different types of function signatures, to be handled.
>
> **[1:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=117)** So first, anonymous, and that's going to be always.
>
> **[2:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=124)** Then named, that's going to be never.
>
> **[2:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=128)** And finally, asyncArrow, and that is always.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=136)** So I'll save that.
>
> **[2:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=139)** Switching back to my code, I have a couple issues flagged here.
>
> **[2:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=144)** So first off, I have an anonymous function signature here, and there should be a space before the parentheses, based on my rule, so I'll add that in.
>
> **[2:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=154)** And, the same thing down here.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=157)** So, I will add in that space.
>
> **[2:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=160)** Now, notice that down here, in my event listener, the function called does not take a space between the name of the functions and the parens.
>
> **[2:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=169)** And this is pretty standard for a function call.
>
> **[2:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=174)** There is one editor format setting that affects this.
>
> **[2:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=177)** So looking in the VS code settings, I'm going to look in the JavaScript settings, and there's an insert space before function parenthesis, right here.
>
> **[3:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=196)** And I want to make sure that that's unchecked, because I don't want spaces in all instances.
>
> **[3:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=203)** So now my ESLint settings and my editor settings support a specific set of choices around spaces in function signatures, that balance readability, with the ability to convert between function signature types.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), finally, (2), async (1), this. (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** asyncarrow (1)
> **Tools:** vs code (1)
> **Speakers:** - javascript (1)

#### Break up and indent long-method chains
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=0)** - [Instructor] Chaining methods together enables you to write compact code that accomplishes a task without unnecessary reassignment, however, the trade off for that compactness can be dense code that's hard to read.
>
> **[0:14](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=14)** To make long method chains more legible, it's useful to break them up onto multiple lines with a dot preceding a method name starting a new line, combined with indenting the methods below the first line of the statement.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=27)** This format makes it easy to understand the sequence of modifications being applied, as well as where the chain begins and ends.
>
> **[0:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=37)** ESLint includes the newline-per-chained-call rule which flags errors in your code if your methods aren't on their own lines.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=46)** In my app that identifies points of interest based on a user's location, I'm building a fetch request to the US Park's Service API to get information on national parks.
>
> **[0:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=57)** Notice that I already have one error here, and that's just because I have a really long line that includes a couple of chain methods.
>
> **[1:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=66)** In my ESLint RC file, I'm going to add a new rule, and that is newline-per-chained-call, and I'm simply going to give it a value of error which means I'm accepting the default, and asking for that to be flagged as an error.
>
> **[1:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=86)** So I can add options here if I wanted to, so I could say one or two chain methods are okay without line breaks, but for now I'm going to enforce all chained methods on new lines, and when I save that and go back to my app, that js file I have an error here.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=108)** So both of these catch statements are expecting line breaks, and so I'm just going to go ahead and break these up starting with the dot on both of these, and for good measure I'm going to break up the first one as well.
>
> **[2:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=128)** Now I want everything indented underneath that fetch statement, and notice here that indeed ESLint is expecting that two space indent that my file calls for.
>
> **[2:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=142)** So I'm just going to select all of the chained methods.
>
> **[2:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=145)** I'm going to use a tab to indent those two spaces, that whole if else construction is already indented under the then, so everything is indented correctly, and I have each of my chained methods starting a new line, and this makes for consistent and easy to read code.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (1), for. (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Space consistently within enclosing characters
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=0)** - [Instructor] There's a wide variety of approaches to spacing after an opening paren bracket or brace, and before the corresponding closing character.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=9)** Developers who pad some or all of these enclosing characters with spaces may feel that the spaces make the enclosed values easier to read.
>
> **[0:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=17)** On the other hand, the choice to omit the spaces has the advantage of creating a clear association between values and the enclosing characters which generally indicate what type of data is enclosed.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=30)** Many style guides specify an approach to spacing within enclosing characters.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=35)** So if your project or organization has a style guide, that's a great place to start.
>
> **[0:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=40)** If you're creating your own style, then you should pick a style for each type of character and use that style consistently.
>
> **[0:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=48)** Note that the style doesn't need to be the same among all types of enclosing characters.
>
> **[0:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=53)** In fact, popular style guides often set out one or more distinct styles for parens, brackets, and braces.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=61)** I want a standardized spacing in the enclosing characters in my app.js file, and also in my .eslintrc file which contains a lot of them as well.
>
> **[1:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=71)** ESLint supports a rule to let me specify the styles I'd like to enforce for parens.
>
> **[1:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=77)** That's the space-in-parens rule.
>
> **[1:20](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=80)** It also supports a rule that lets me specify spacing inside of brackets which is the array-bracket-spacing rule.
>
> **[1:29](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=89)** In addition, it supports a separate rule specifically for spacing inside braces, this is known as the object-curly-spacing rule.
>
> **[1:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=101)** In my .eslintrc file I'm going to go ahead and add those rules.
>
> **[1:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=105)** Now I generally don't use spaces within parens or brackets, but I do use them in braces, and this is the style that the Airbnb style guide uses.
>
> **[1:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=115)** So, I'm going to add, space in parens and the value there is going to be, error and never and then, array bracket spacing and again, error and never.
>
> **[2:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=136)** And finally, object curly spacing and that's going to be, error and always because that's where I do actually include spaces.
>
> **[2:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=151)** So I'm going to save this, and I can see that I have some errors popping up in the app.js file.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=157)** So I'll start there, and right here, should be no spaces inside this paren, so I can take that space out, same thing here, no spaces before the closing paren, and down here I have an errant space, and here as well.
>
> **[2:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=176)** And so that takes care of any issues in my app.js file.
>
> **[3:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=180)** Now I've chosen to do an .eslintrc file that is itself a JavaScript file.
>
> **[3:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=185)** But by default, ESLint ignores dot files which are hidden files.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=191)** And so even though I do have a few issues in my .eslint file for instance, I haven't been putting spaces inside my braces, my ESLintRC rules are not being applied to that file itself.
>
> **[3:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=207)** So in the start files for this video, I've included an .eslintignore file, and this is simply a configuration file that I can include in my project setup that specifies that ESLint should not ignore the .eslintrc.js file.
>
> **[3:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=227)** So I'm going to switch over to Finder, and in the folder for this project, and for this specific video in the Begin folder, here's my .eslintignore file.
>
> **[3:57](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=237)** Now on a Mac, this is a hidden file, and if you can't see it, you can press the keyboard combination, Command + Shift + Period to toggle whether or not those hidden files are visible.
>
> **[4:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=250)** So then I want to drag that .eslintignore file over to my Exercise Files folder.
>
> **[4:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=258)** SO now that .eslintignore file is at the base of this whole project where the package-lock.json file is in the node modules that configure ESLint for this project.
>
> **[4:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=270)** And now when I switch back to VSCode, I have a whole bunch of errors (laughs) so let's start at the beginning.
>
> **[4:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=282)** And so it says, Use the global form 'use strict' so I've overlooked a few rules that I've set globally here, so I'm going to make sure to add my use strict, 'cause this is after all a JavaScript file.
>
> **[4:55](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=295)** Here in my true value, I'm missing a trailing comma which is another standard that I specified in my ESLint rules.
>
> **[5:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=304)** And now I have a number of little underlines here and there on enclosing characters, so no space before that square bracket, so we'll take that out.
>
> **[5:17](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=317)** No space after that square bracket, we'll take that out, likewise over here.
>
> **[5:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=322)** Here, here, and then down here with my brace, space is required afterward, and a space is required before that one, take out that errant space in my brackets, and there, another set of curly braces where I need a space, and another set of brackets where I don't.
>
> **[5:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=346)** And all that remains is that I've got a really long line here that I never actually broke up, so I'm going to start that bracket on its own line, and I'm going to break up these values on their own lines.
>
> **[6:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=372)** And here I'm missing a trailing comma in my object literal, here also I'm missing a trailing comma, and there I go, now I've got ESLint rules applying to the .eslint file itself, and I've got everything ironed out so that my spacing within all of my enclosing characters is predictable and consistent.
>
> **[6:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=392)** Another tool that I can use here, is to actually set consistent approach to these spaces in the Settings in my Editor.
>
> **[6:42](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=402)** So I'll open up those Visual Studio Code Settings, I'm going to search for JavaScript insert space, and I get a list of several settings, these all control whether the Editor automatically adds a space after opening characters and before closing characters.
>
> **[6:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=419)** So I want spaces within braces, and so we've got one for JSX expression braces, I'll go ahead and check that.
>
> **[7:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=432)** Non-empty braces is already checked.
>
> **[7:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=436)** Non-empty brackets, I want to be sure to be unchecked, and then, close my sidebar just so I can read these, I do not want spaces in my parenthesis, so I'm going to keep that unchecked, and template string braces, we'll go ahead and check that there as well.
>
> **[7:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=455)** And now when I enter new code, the Editor will automatically format it according to my preferred spacing style within each type of enclosed character.
>
> **[7:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=465)** Spaces within enclosing characters are a relatively small detail in our code, but approaching these spaces consistently makes your code that much easier to read and understand for you and for other developers who work with it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (2), finally, (1), this, (1), default, (1)
> **File Paths:** app.js (3), eslintrc.js (1), package-lock.json (1)
> **CLI Commands:** make (2), node (1)
> **Exercise Files:** exercise files (1), template (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** setup (1), configure (1)
> **Env Vars:** jsx (1)
> **Tools:** visual studio (1)

#### Space after commas, but not before
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=0)** - [Instructor] Commas separate values in JavaScript in a number of situations.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=5)** It's common to write commas in code the same way you would use them in a sentence, with no space before and a space after.
>
> **[0:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=13)** However, other comma styles are used as well, including a space before but no space after or no spaces on either side.
>
> **[0:23](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=23)** I use a space only after commas, and so far, I've been writing my ESLintRC file using that format.
>
> **[0:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=30)** I want to add a rule to flag errors if my spacing deviates.
>
> **[0:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=35)** ESLint supports the comma spacing rule, which lets me specify which style I want to use and how I want it flagged.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=43)** So over in my ESLintRC file I'm going to add a new line, and that's going to be comma-spacing and in an array, I going to specify that I want it to be flagged as an error, and then I need an object literal.
>
> **[0:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=58)** I'm going to specify the value before with a value of false, and a value of after, and give that a value of true.
>
> **[1:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=68)** Got to make sure to put spaces to pad out my braces, terminal comma, and when I save that, I can see over here in my JavaScript file, I have an error throw, so here I've got a space before and a space after my comma, and the pop-up error here indicates a comma spacing issue, so I can simply take out that space, and I'm all good.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=96)** I can also check an editor setting that can help me use commas consistently.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=100)** So in my VS Code Settings, I'm going to do a search on JavaScript and search space, and right here we've got the Insert Space After Comma Delimiter Rule.
>
> **[1:56](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=116)** That is to say a comma that separates values.
>
> **[2:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=120)** I want this formatting rule to be applied when the auto-formatting feature is used, and it's already checked, so I'm good.
>
> **[2:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=127)** And now I have the tools in place to ensure that my comma spacing is uniform, which makes my code easier to read.

> [!info]- Semantic Content
>
> **Tools:** terminal (1), vs code (1)
> **CLI Commands:** make (1)
> **Code Keywords:** throw (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Limit blank space to one line
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=0)** - Like all white space blank lines don't effect the meaning of JavaScript code.
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=5)** As a result, you can make liberal use of them while writing code.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=10)** For instance, you may add several blank lines below a comment, leaving space for code you need to add.
>
> **[0:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=16)** You may also find that as you delete or remove sections of your code the blank lines padding a section are moved together into a larger blank area.
>
> **[0:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=25)** During a quick visual scan of your code, large blank sections may suggest section breaks or other meanings that you didn't intend.
>
> **[0:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=33)** To avoid this, it's best to limit your blank space to a single line and use comments to indicate sections of your code or content to add later.
>
> **[0:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=43)** This same rule applies to the end of your document.
>
> **[0:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=46)** Instead of ending with multiple blank lines or none best practice is to end your file with a single line break which provides a starting point to add new code without extending the length of the file unnecessarily.
>
> **[1:01](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=61)** ESLint can flag deviations from blank space preferences you specify using the no multiple empty lines rule.
>
> **[1:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=69)** In my eslintrc file I'm going to add that rule.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=73)** So I'll say no multiple empty lines and the value's going to be an array.
>
> **[1:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=81)** I want it to flag an error and I'm going to specify an object literal: the max keyword indicating the greatest number of blank lines that I'm allowing in a row and that's one and I can also specify the maxEOF keyword which specifies the greatest number of lines that I can include at the end of a document and that's also one.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=104)** So there EOF is short for end of form.
>
> **[1:48](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=108)** Saving that rule I can see a few issues flagged over in my app, that js file.
>
> **[1:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=113)** So here I left some space after 'use strict' but I'll take two of those out.
>
> **[1:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=119)** Likewise here I spaced a little extra between my two consts so I'll take one out and there's a little extra between the const and the distanceTo function and then down here an extra line below that function and above the console.log statement.
>
> **[2:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=141)** Now I can also see it's not flagged by ESLint but I don't have a terminating line break here.
>
> **[2:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=147)** And so just to implement that best practice myself, I'll go ahead and add that in.
>
> **[2:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=152)** So now automatically have an empty line here ready to go if I open this file up and want to add some code With these preferences specified in ESLint I can ensure my code strikes a balance between compactness and a judicious use of blank lines.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), delete (1), this, (1), const (1)
> **Best Practices:** best practice (2), it's best to (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** maxeof (1), distanceto (1)
> **Env Vars:** eof (1)
> **Definitions:** short for (1)
> **Analogies:** for instance (1)
> **Speakers:** - like (1)

#### Challenge: Optimize spacing
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=5)** - [Narrator] Ready for a challenge?
>
> **[0:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=7)** The start files contain code for a grocery shopping app.
>
> **[0:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=10)** Edit the script.js file to implement and enforce best practices for spacing in JavaScript, including indents, spacing around characters and blank lines.
>
> **[0:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=21)** This should take you about five minutes.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=24)** When you're done, join me in the next video and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** script.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Optimize spacing
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=0)** - [Instructor] In my Challenge file, I'm starting with my .eslint file, and now I notice already in my script.js file, I have an error, and that's due to a really long line down here, clearly this is a bunch of chained methods and we're going to get to that, so we'll just leave that be for the moment.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=24)** So I'm going to go one by one with my rules, adding the rules that deal with spacing, and then using the prompts from ESLint to identify and fix issues in my files.
>
> **[0:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=39)** So first off is the indent rule, and I want to flag an error when that's not two, so I'll save that, back in my script.js file, I can see up here, I have some right-aligned elements in an array, and I want those to be left-aligned, so I'm going to take out spaces until those all line up at two spaces, and now I'm back to one which is still that really long line, so I'm good with the indents.
>
> **[1:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=73)** Next up, I'm going to specify space around my infix operators, so that's space, infix, ops, and I'm just going to flag an error there and rely on the default value for that rule.
>
> **[1:31](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=91)** And so I can see down here, there's an equal sign that needs some spaces, a less than sign that needs them, a plus equals that needs it.
>
> **[1:44](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=104)** We've got an assignment operator here that needs that, and so I'm back to just that one long line again.
>
> **[1:54](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=114)** Next up is space before blocks, and we'll flag an error on that one.
>
> **[2:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=126)** That one doesn't actually seem to have any errors over here, so we'll keep on going.
>
> **[2:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=132)** We also have brace style, and that one we're taking the default on and just flagging an error.
>
> **[2:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=142)** And there we've got a number of issues.
>
> **[2:25](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=145)** So we can see here, that we've turned on the one true brace style and so we have this brace starting on its own line, which is not part of that style.
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=157)** And then we've got issues here again, now part of this is the chain statements, the chained methods, but some of this is also about line breaks, and so I'm going to go ahead and put this fetch on its own line, going to follow this prompt and put the if on its own line, here I need a return on its own line, here the closing curly brace should be on the line after the block, likewise here, the throw should be on its own line, and these curly braces need to be broken out to close things in the correct places, and there, a closing curly brace goes at the end.
>
> **[3:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=202)** Now here we have a long line, here we still have a long line so those we'll get to in a bit, but for now, we've ironed out the issues with those curly braces.
>
> **[3:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=213)** And then let's look at keyword spacing, so for keyword dash spacing, we'll trigger an error if we're not inline with the default settings, and looks like we have an error here, and that's the for statement, expecting a space after the word for, so a space there, and that's ironed out.
>
> **[3:59](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=239)** And likewise with arrow spacing, we'll call an error there.
>
> **[4:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=248)** And looks like we have a couple issues over in our script.js file.
>
> **[4:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=253)** So we have an arrow right here, that needs a space before and after, that gets us ironed out.
>
> **[4:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=262)** And then we want to look at the space before function paren rule, and the way I like to specify this is as an error and using, so this is going to be a long one, I'm going to put the values on separate lines so we're going to have an error and then I'm going to use an object literal, so for an anonymous function, I want to always have that space for a named function, I want to never have that space, and for an asyncArrow function, I want to always have that space.
>
> **[5:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=306)** And then I'm going to move my closing square bracket, I need a closing comma here, closing comma here, and right here we're looking for a trailing comma as well.
>
> **[5:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=322)** And it looks like that didn't actually catch any errors, so yeah, we don't actually have any code over here that violates that rule which is great, means we're doing something right.
>
> **[5:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=334)** So we'll go ahead to new line per chained call, and there we want an error if we violate the default.
>
> **[5:47](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=347)** And this is where we already have a set of chained calls, I'm going to go ahead and move this then onto its own line, I'm going to move this then onto its own line, and this catch, then I'm going to grab all of these and indent them under the fetch statement.
>
> **[6:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=373)** And I prefer to have that paren indented underneath the curly brace, and I'm actually going to indent this whole structure,
>
> **[6:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=390)** like that.
>
> **[6:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=392)** So now I have my then statement with each set of enclosing characters starting a new line, I have my then and my catch on separate lines, I've broken up my long lines and I've got my chained methods broken up on new lines.
>
> **[6:53](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=413)** Then we're going to look at space in parens, and again, this is one of those three, we've got parens, brackets, and braces where we can talk about the spacing.
>
> **[7:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=424)** So in the parens, I'm going to use an array, specify error and never, and I'll go ahead and do array bracket spacing here as well, and that's going to be error and never, and then we'll do object curly spacing, and that's going to be error and always, because I always want those spaces padding out my curly braces.
>
> **[7:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=461)** So then, going back to my .js file, I've got extra spaces in my parens here that I don't want, in these parens as well, and in these parens, and these parens, and then down here,
>
> **[8:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=493)** there's extra spaces down here, this is like when you code in one style and then decide to change everything, you have to just go line by line and fix everything.
>
> **[8:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=506)** And I missed a few up here as well, we got spaces there, and spaces here.
>
> **[8:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=514)** And now we've got that all ironed out.
>
> **[8:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=517)** So just a couple more, I want to check on comma spacing, that's going to flag an error, and my key value pairs will be before false and after true.
>
> **[8:58](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=538)** I need to pad out my curly braces there.
>
> **[9:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=544)** Saving that, we've got a few issues in the script file, so we have all of these commas here that have an extra space before them, so we'll go ahead and take those out, and now we've got that comma spacing implemented consistently.
>
> **[9:21](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=561)** Then we got one more, that's about the empty lines, so I'm going to do, no multiple empty lines, and flag an error and specify an object literal with max of one in a row, and maxEOF with a value of one, so one maximum at the end of the file.
>
> **[9:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=586)** Going to pad out my curly braces again, add a terminal comma and save that.
>
> **[9:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=592)** And in my script.js file, got one spot up here where I put an extra space below use strict, put a little extra space here before my itemLookup, and then at the bottom, this isn't flagged but I'm going to go ahead and add in that final blank line, so that I'm ready to go to add more code if I need to.
>
> **[10:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=612)** And so now I have all of these rules implemented for spacing, and I have my JavaScript code in my script.js file all ironed out and consistent in the use of all those rules.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), throw (1), let (1), for, (1), default. (1)
> **File Paths:** script.js (5)
> **Code Identifiers:** asyncarrow (1), maxeof (1), itemlookup (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=3)** You now have experience implementing best practices for formatting Vanilla JavaScript code.
>
> **[0:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=9)** To dig deeper into coding using Vanilla JavaScript check out a course on App building with Vanilla JavaScript.
>
> **[0:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=16)** If you want to learn more about fixing logic errors in your JavaScript code check out a course on debugging.
>
> **[0:22](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=22)** Feel free to follow me online.
>
> **[0:24](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=24)** Now take your new skills and build something amazing.
>
> **[0:27](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=27)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [sasha] (1)


## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Advance Your JavaScript Skills]]
**1 of 10** | [[JavaScript- Best Practices for Data]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)