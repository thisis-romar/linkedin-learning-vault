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
  - '[Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)'
prev_courses:
  - '[Javascript Best Practices For Code Formatting](Javascript%20Best%20Practices%20For%20Code%20Formatting.md)'
next_courses:
  - '[JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md)'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":2,"total":10,"prev":"Javascript Best Practices For Code Formatting","next":"JavaScript- Test-Driven Development (ES6)"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/data-management
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Best%20Practices%20for%20Data.md)

![JavaScript: Best Practices for Data](https://media.licdn.com/dms/image/v2/D560DAQHevwWci54yAw/learning-public-crop_675_1200/B56ZbF5V1qH4AY-/0/1747076866057?e=2147483647&amp;v=beta&amp;t=ZXfyW_-0w50tAR6BrrmqTh2d6HNbqrORNP93V8N4Uqo)

# JavaScript: Best Practices for Data

> You know you want to write JavaScript code for maximal consistency, maintainability, and comprehensibility. Logic is one thing—data is another. This course explores the tools and approaches for keeping your data and data structures clean, uncluttered, and efficient. Instructor Sasha Vodnik introduces best practices from industry-standard style guides and introduces tools that will help you flag de

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-best-practices-for-data) | 1h 24m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Working effectively with JavaScript data](#working-effectively-with-javascript-data)
  - [What you should know](#what-you-should-know)
  - [Setting up your environment](#setting-up-your-environment)
- [**1. Why Best Practices?**](#1-why-best-practices) (4 videos)
  - [Understanding style guides](#understanding-style-guides)
  - [Using modern deployment tools](#using-modern-deployment-tools)
  - [Understanding ESLint](#understanding-eslint)
  - [Foundational practice: Always use strict mode](#foundational-practice-always-use-strict-mode)
- [**2. Declaring Variables**](#2-declaring-variables) (7 videos)
  - [Prefer const, then let](#prefer-const-then-let)
  - [Use individual statements to create variables](#use-individual-statements-to-create-variables)
  - [Create descriptive variable names](#create-descriptive-variable-names)
  - [Standardize acronym case](#standardize-acronym-case)
  - [Remove unused variables](#remove-unused-variables)
  - [Challenge: Declare variables](#challenge-declare-variables)
  - [Solution: Declare variables](#solution-declare-variables)
- [**3. Assigning Values**](#3-assigning-values) (6 videos)
  - [Don't assign variables in chains](#dont-assign-variables-in-chains)
  - [Standardize quotes](#standardize-quotes)
  - [Create arrays and objects using literals](#create-arrays-and-objects-using-literals)
  - [Quote object property names consistently](#quote-object-property-names-consistently)
  - [Challenge: Assign values](#challenge-assign-values)
  - [Solution: Assign values](#solution-assign-values)
- [**4. Type Casting**](#4-type-casting) (6 videos)
  - [Type cast strings with the String wrapper](#type-cast-strings-with-the-string-wrapper)
  - [Type cast numbers with the Number wrapper](#type-cast-numbers-with-the-number-wrapper)
  - [Type cast Booleans using double negation](#type-cast-booleans-using-double-negation)
  - [Rely on implicit Boolean values in conditionals](#rely-on-implicit-boolean-values-in-conditionals)
  - [Challenge: Type cast](#challenge-type-cast)
  - [Solution: Type cast](#solution-type-cast)
- [**5. Comparing Values**](#5-comparing-values) (7 videos)
  - [Use triple-character equality operators](#use-triple-character-equality-operators)
  - [Don't use Yoda conditions](#dont-use-yoda-conditions)
  - [Compare appropriately for the data type](#compare-appropriately-for-the-data-type)
  - [Use ternary statements judiciously](#use-ternary-statements-judiciously)
  - [Add parentheses to clarify logic](#add-parentheses-to-clarify-logic)
  - [Challenge: Compare values](#challenge-compare-values)
  - [Solution: Compare values](#solution-compare-values)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Working effectively with JavaScript data](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/working-effectively-with-javascript-data-25664843?u=76281980&t=0)** - When you write [JavaScript](../../Skills/Software%20Development/JavaScript.md) code that works with data, you have so many formatting choices. Some decisions you make may be habits you picked up when you started coding or even carried with you from another programming language. I built this course to share some best practices for working with data in JavaScript that have solid reasons behind them and others that are just industry standards. We'll look at declaring variables and assigning values. We'll also explore approaches for typecasting and for value comparisons, and we'll set up [ESLint](../../Skills/Software%20Development/ESLint.md) rules that help you keep your code consistent. After we're done, you'll be able to write polished code and explain why your code style choices make sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - when (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-best-practices-for-data/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have some experience coding in front-end [JavaScript](../../Skills/Software%20Development/JavaScript.md) including modern ES6 syntax. If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start. To familiarize yourself with modern JavaScript syntax, explore a course on ES6.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **Env Vars:** es6 (2)
> **Speakers:** - [instructor] (1)

#### [Setting up your environment](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=0)** - To work along with me on the files for this course, you need a few applications: [ESLint](../../Skills/Software%20Development/ESLint.md), a code editor, and optionally, a web browser. ESLint is a command-line utility that you install using the node package manager, or [npm](../../Skills/Web%20Development/npm.md). NPM is part of the [Node.js](../../Skills/Web%20Development/Node.js.md) runtime. If you don't have Node installed, start by visiting Node.[js.org](https://js.org) and installing the LTS version. With that installed, open your terminal application and navigate to the exercise files folder that contains the files for this course. We're going to start by initializing this directory for our use with NPM. So we're going to type NPM + Space + init, and press Enter. It's going to ask you a series of questions and you're just going to press enter for all of them. For right now, we're not concerned about the configuration here at all. So I'm just going to keep pressing Enter.
>
> **[1:03](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=63)** And then when I get a new command prompt, I'm all good. So now I have this directory initialized for NPM and now I can install ESLint, so that next command is going to be NPM + install + ESLint. And this is going to install the files that will enable you to use ESLint on the command line. Now I have a warning here, and that's not a problem. It's just telling me that if I'm really serious about this later on, I can go configure a file with some more information. But for my use in this course, this is just fine as is. A number of great code editors are available, both free and paid apps. Any editor that lets you edit and save plaintext is fine for this course. So if you have a code editor you like, like Sublime Text or Atom, it's fine to use it. I use Visual Studio Code in these videos, which is a version of [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s Visual Studio, created specifically for [Web Development](../../Topics/Web%20Development.md). Visual Studio Code is free and has [Windows](../../Glossary/Service/Windows.md), Mac, and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) releases. The code is available on [GitHub](../../Skills/Software%20Development/GitHub.md) and users can submit issues there as well. I've turned on [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) wrap in my editor. Word wrap ensures that long lines of code don't run off the screen. If you're using Visual Studio Code and you want to do the same, open settings by pressing Command + , on a Mac, or Control + , on Windows, and that opens up the settings. Now up here in the "search settings" box, type, "word wrap," and in the filtered list, the first thing that should show up is "Editor: Word Wrap." Mine's already on, but if you need to change it,
>
> **[2:37](https://www.linkedin.com/learning/javascript-best-practices-for-data/setting-up-your-environment?u=76281980&t=157)** just click the arrow over here and select "on" from the list. Then when you're done, go up and click the "X" to close the settings tab. I've also installed a couple extensions to Visual Studio Code. The ESLint extension by Dirk Baeumer enables Visual Studio Code to highlight code that violates rules specified in a project's ESLint configuration file. I'm going to lean heavily on this in my videos so that I don't actually have to build a project after each change. I'll instead have that formatting right in the editor that's going to show me whether ESLint has found an issue. Live Server by Ritwick Dey is an HTTP Server you can launch with a single click that automatically opens the current document in your default browser. This makes testing code in the browser quick and easy to do. I'll be using the console in a web browser in this course. But a modern editor like Visual Studio Code has a built-in console that you can use to test your [JavaScript](../../Skills/Software%20Development/JavaScript.md) code without ever switching to a browser. If you're comfortable using those built-in tools in your editor, that's a fine alternative. And either way, you undoubtedly already have a web browser installed in your machine and any major modern browser, Chrome, Firefox, or Microsoft Edge, is fine for this course. I'll be using Chrome is these videos, which includes a powerful suite of developer tools. If you want to learn more about anything I use or talk about in this course, I encourage you to explore the library for a deeper dive on that topic. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (8), [npm](../../Skills/Web%20Development/npm.md) (6), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **Tools:** visual studio (7), terminal (1), command prompt (1), command line (1), sublime (1)
> **CLI Commands:** npm (6), node (4)
> **Env Vars:** npm (6), lts (1), http (1)
> **Prerequisites:** install (4), configure (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** node.js (2)
> **URLs:** [js.org](https://js.org) (1)


### 1. Why Best Practices?

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding style guides](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=0)** - [Instructor] If you've already watched one of my other courses on [JavaScript](../../Skills/Software%20Development/JavaScript.md) best practices, you may already have the background under your belt. If so, feel free to skip ahead to chapter two. If this is your first time exploring best practices, it's useful to understand where they come from. And that's style guides. A style guide is a set of agreements on how to write code for everyone working on a common code base. Whether that's on an organizational level, a project level, or even a specific repo, a style guide often combines approaches that developers have found useful in working with that code base with choices that developers have made about how to build and organize that code. Although guidelines can be project specific, they may also be drawn from broader industry wide understandings about the best approach to certain aspects of building code known as best practices. Some best practices may be nearly universal. For instance, most every developer agrees that using consistent indents is helpful both in building and reading code. However, many best practices come with trade offs. As a result, managers, project leaders, or groups of developers may need to choose which approach is best for a specific code base. For instance, modern JavaScript provides an almost overwhelming range of options for creating functions. When working on code collaboratively, does it make more sense to use a function declaration or an expression with let or with const? Maybe an arrow function but with let or const? And if you're using a function expression, should it include a lexical function name to help with debugging?
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-style-guides?u=76281980&t=93)** A style guide based on best practices does a couple things. First, it keeps you coding rather than needing to break your flow while you try to balance the options and choose a syntax. It also ensures that the code you write interacts with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code base in a particular way. For instance, defining a function using const ensures that it can't be erroneously redefined. As you build your knowledge of best practices, keep in mind that there's often no right answer. So it can be useful to understand the trade offs. Different projects may make different choices that work best for a specific team, architecture, or goal. The Airbnb Guide is one of the most widely referenced style guides among JavaScript developers. Another is the [Google](../../Glossary/Service/Google.md) Style Guide. Many best practices can and do change over time. This is especially true in the modern JavaScript landscape where new features are regularly introduced as optimized replacements for previous practices. So staying on top of changes in these style guides as well as keeping up with other style guides that colleagues or developers you respect may be referencing can be helpful in ensuring that your code reflects up-to-date formatting practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using modern deployment tools](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=0)** - [Instructor] In the early days of [JavaScript](../../Skills/Software%20Development/JavaScript.md), the code a developer wrote was the code that was executed in every browser or other user agent. Over time, JavaScript evolved and added new features. However, because not every user was using the newest version of a browser, developers had to write code targeted at the lowest common denominator. That is, the browser with the fewest modern features that still maintained a critical mass of users. This meant that developers were constrained from using the newest features or had to write and maintain multiple versions of the same code. The modern JavaScript workflow has resolved this issue using transpilers. A transpiler is a utility that accepts JavaScript code written using modern features, and returns code that does the same job as the original but is written without modern features. Babel is an example of a popular transpiler for JavaScript. Including a transpiler in your deployment process means that you can take advantage of modern and even cutting edge JavaScript features without worrying that your code won't perform as expected for users of older browsers. Not every modern JavaScript feature can be transpiled however. But for those that can't, developers use another tool, the polyfill. A polyfill is a library that you include with your code at deployment. Because a transpiler can't rebuild some code for older browsers, the job of a polyfill is to instead add the functionality of the new feature to older browsers. Promises and [Fetch](../../Skills/Web%20Development/Fetch.md) are a widely used example or a feature that requires a polyfill
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/using-modern-deployment-tools?u=76281980&t=93)** for backward compatibility. With transpiling and polyfills in the developer toolbox for JavaScript developers, the group that maintains JavaScript standards has been free to innovate without worrying about proposed changes never being widely available. As a result, many new features of JavaScript serve to help developers write cleaner, more manageable code, rather than to add new capabilities to the language. It's due to the widespread use of Babel and polyfills, that many modern JavaScript best practices involve use of these developer focused features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (11), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Understanding ESLint](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=0)** - [Instructor] [ESLint](../../Skills/Software%20Development/ESLint.md) is a utility that flags deviations from selected best practices right in your editor as you code. ESLint is widely used by [Java](../../Skills/Software%20Development/Java.md) script developers to catch and correct issues before testing and deploying. Although ESLint allows you to load a default set of rules, one of it's strengths is it's configurability. It's unlikely that you'll want to enforce every one of the rules in your code. Or that you'll make precisely the same choices as the defaults. For this reason, it's important to understand how to configure ESLint, otherwise using it can be an exercise in frustration as you have to ignore its warnings when they're not relevant to your preferences. With ESLint installed I could run a configuration utility, however, this builds out a package that [JSON](../../Skills/Web%20Development/JSON.md) file and associated modules that I don't need here. So instead, ESLint supports rules written using Java script itself, as well as YAML or JSON. I'm going with Java script. So the file is .eslintrc.js. The file contains a module dot export statement. And within that, a couple keys. One is the ENV, or env key, which specifies the environment I'm using it in. Because I'll be using ES6 syntax in my code, I specify the ES6 key with a value of true within the ENV object. The other key is named "rules" and has another object, literal, as its value. Within that object, I can simply add rule names and values as properties. Those rule names are specified
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/understanding-eslint?u=76281980&t=94)** in the documentation at [eslint.org](https://eslint.org). In each video in this course, I'll add the corresponding ESLint rule or rules if they exist. In general, you can conficure a single .eslintrc.js file at the root directory of the files you want it to apply to. For this course, I'll have a different version in each folder because I'll be adding rules as I go along. You'll notice that .eslintrc.js starts with a dot, and that's significant. The dot marks it as a configuration file to your operating system. These are commonly referred to as "dot files." You may find that this file is not visible in your file manager even though you can see it in your editor. The default configuration for both Mac and [Windows](../../Glossary/Service/Windows.md) is to hide dot files. As long as you can see the file in your editor, though, you can open it and save changes. If you want to display hidden files in your operating system, like I have here, I recommend going to [stackoverflow.com](https://stackoverflow.com) and searching for recommended steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (8), [Java](../../Skills/Software%20Development/Java.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** json (2), env (2), es6 (2), yaml (1)
> **File Paths:** eslintrc.js (3)
> **CLI Commands:** make (1), find (1)
> **URLs:** [eslint.org](https://eslint.org) (1), [stackoverflow.com](https://stackoverflow.com) (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)

#### [Foundational practice: Always use strict mode](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=0)** - [Instructor] No matter which other practices are in your style guide or what modern [JavaScript](../../Skills/Software%20Development/JavaScript.md) features you may be using, your first step when writing code should be to ensure that you're working in strict mode. Indicating that code should be interpreted in strict mode specifies to user agents like browsers that they should treat code literally as written and throw an error if the code doesn't make sense. Without strict mode turned on. user agents often go through a series of modifications to problematic code in an attempt to get it to make sense. In the start files for this video, I'm going to create and then log a variable. My idea is to build an app to get a user's location and identify nearby events. And I'll use const for my variable just for a placeholder location, and then I'll console that log it. So const city equals Chicago and console.log city.
>
> **[0:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=55)** And I'll save that, I'll switch to my [HTML](../../Skills/Web%20Development/HTML.md) file, and I'll run Live Server. And I'll open up my console here. And I can see that the value of my variable is logged, just like I expect. Now, going back to the editor, what if I accidentally failed to declare my variable, but just set a value? So I'll delete const. And save that. And then back in the browser, I can see that the value is logged once again. That's because my browser is trying to tease out meaning from my malformed code. It figures that even though I didn't declare this variable, I'm setting a value for it, so I must have just meant to declare it. Now, on the surface, that can seem like a fine thing. And indeed, working outside of strict mode makes it possible for people to get their feet wet with JavaScript code without having quite all the details nailed down. But as a developer, I don't want to leave a bug in my code, because I know it could come back and bite me later on. And I also just want to write good code, and that's where strict mode helps out. So back in my editor, I'm going to add a new first line in my file, and that's the string use strict. Now, this is technically just a string, and that's the magic that prevents it from throwing an error in older browsers. They'll just see a string here and move on in the code. But modern browsers recognize this string as a statement to switch into strict mode. So saving and checking back in the browser,
>
> **[2:28](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=148)** now I have a reference error, which is what I want when I'm trying to work with a variable that I haven't defined. So going back to my code one more time, the console points me to the error on line two, and I'll just add const at the start of the statement. I'll save, and then back in the browser, I'm all good again, and my name is logged. Although strict mode may seem like it creates more work on the front end, it actually is a really good trade-off because it saves more headaches later on as you weed out bugs in the code as you're writing it. So make sure the first line in any JavaScript file you create is use strict. I can enforce this using [ESLint](../../Skills/Software%20Development/ESLint.md). Opening my .eslintrc.js file, and within the rules object, I'll add the strict key. This rule takes an array of two values. The first is the severity of the issue if it arises, which can be off, warn, or error. And the second is when strict mode is required, which can be only in functions or globally. I want this to trigger an error and I want to require a single global strict mode declaration in my code. So strict and then an array, which is error and global.
>
> **[3:50](https://www.linkedin.com/learning/javascript-best-practices-for-data/foundational-practice-always-use-strict-mode?u=76281980&t=230)** And then saving that. I'll go back to my app.js file and I'll just comment out my use strict statement. And now my remaining code is underlined in red and my file name in the explorer sidebar is displayed in red with a circle next to the file name containing a one, which is the count of errors in my file. These are both a result of the error setting. And if I hover over the underlined code, I see the error message, which indicates that I've chosen to enforce the global form of use strict. So I'll uncomment my use strict statement and the issues go away. And I'll save and I'm all good. Including this use strict statement will work in concert with ESLint to ensure that both the editor and the parser prompt me about any lazy [Coding Practices](../../Skills/Software%20Development/Coding%20Practices.md), which will increase the overall quality of my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [ESLint](../../Skills/Software%20Development/ESLint.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Coding Practices](../../Skills/Software%20Development/Coding%20Practices.md) (1)
> **CLI Commands:** make (3)
> **File Paths:** eslintrc.js (1), app.js (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)


### 2. Declaring Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [Prefer const, then let](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=0)** - [Instructor] I've written some code using the old school var statement for my variables. But var has drawbacks, and I want to take advantage of let and const instead. I can enforce this across my code base with the [ESLint](../../Skills/Software%20Development/ESLint.md) no var rule. With a simple string value, I can get eslint to throw errors for any var declaration. Now it's important to be thoughtful about implementing this in a large code base, because weeding out var statements can have ripple effects in some circumstances. But especially as you're starting a new project, or with a small code base, this rule can be helpful in getting off on the right foot. So in my .eslint.rc.js file, I'll add a new line in the rules section. And I'll add no-var with a value of error. I'll save that, and then over here in my js file, I suddenly have a lot of issues showing up because it's full of vars. I have few enough statements here I can do a search and replace to switch to let statements. So I'll do a command F, which is control F on [Windows](../../Glossary/Service/Windows.md). And I'm going to click this arrow here, that lets me switch to replace mode in VS code. I'm going to look for var and a space, just to make sure if I have a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) that starts with var or includes the letters var, that it's not also going to hit that. And I want to replace with let space. And I'll just use the Replace All button. And I'll close up that replace box. Now I'll save those changes.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=93)** And I'm left with just one error. And this is flagging a re-declaration. And that's because one of the superpowers of let is that I can't re-declare a variable. And that's sloppy coding, which might make me think the variable is being instantiated here. So this error from the parser is one reason why I wanted to get away from var in the first place. I could add another eslint rule, no re-declare, if I was using var in my code. But using only let and const already ensures that I can't re-declare. Instead, I'll delete that let so this is simply a reassignment. And then I need to repeat that for the next statement. Now I'm all good, my code is error free. So I'll save that. I'll switch to my [HTML](../../Skills/Web%20Development/HTML.md) file and go live. And in my console I get no errors. I even get a value log. Modern js also makes the const keyword available. And so far, I'm not using it. But in general, it's best to use const for any variable that I don't intend to reassign. Eslint has a rule for this as well: preferred const. With a simple string value for the rule, any variable I do reassign in my code is good to use let. But the rule catches any variable that never gets reassigned, because that's exactly what I should be declaring with const. Identifiers like functions are an obvious choice. In my eslint RC file, I'll add another line to the rules section, and add prefer-const with a value of error.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=191)** I'll save that, switch back to my [JavaScript](../../Skills/Software%20Development/JavaScript.md). And I have one error up here, and when I hover over that, my eslint extension points out that this variable was never reassigned. So I'll change that to a const to get rid of that error. I can also see I have three functions here. I don't want those reassigned, so I'll change those all to const. And now I want to run my code again, so switching back to the browser. And now I've got an error. So this is flagging for me that I've reassigned functions to values later in my code, which is an error. That error's on line 28. So I'll scroll down, and there we down. My functions are square, double, and triple, and down here I've reassigned all of those. So I'll just go ahead and comment out these lines. Because clearly I didn't need to do that. Then I'll switch back to the browser and I'm good in that console. Everything ran and I got my value again. So scrolling back up, I'll take one more look at my declarations. Now CD ratio and EF ratio I do reassign later. But I have AB ratio up here that I don't reassign. So I'll change that to const. And then I'll run my code and I get an error on line 19 and that is telling me that I have assigned to a constant. So checking my code on line 19. This is a subtle error, but here I've used an assignment operator when I meant to compare. So this is another place where using const
>
> **[4:45](https://www.linkedin.com/learning/javascript-best-practices-for-data/prefer-const-then-let?u=76281980&t=285)** when you mean it can be really helpful, because that helps me realize that I made an error here. So changing that to a triple equality for comparison, change that and save it. And then back in my browser my code works. I have no errors, and I have no eslint errors in the editor, and I'm using let and const in the appropriate places which makes my code a little more bulletproof.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (8), [Windows](../../Glossary/Service/Windows.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** switch to (3), scroll down (1)
> **CLI Commands:** make (2), cd (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** eslint.rc.js (1)
> **Cross-References:** later in (1)
> **Tools:** vs code (1)
> **Best Practices:** it's best to (1)

#### [Use individual statements to create variables](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=0)** - [Instructor] [JavaScript](../../Skills/Software%20Development/JavaScript.md) allows the declaration of multiple variables using a single keyword, like in my code here. It can make code more concise, but it has some drawbacks. One issue is that it's a little too easy to put in a semicolon instead of a comma, or vice versa, and that kind of error is subtle and can be difficult to identify. Also, when you're using a debugging tool, you can step through separate statements individually, rather than all at once when they're declared like this. So I prefer to use separate statements when I create variables. [ESLint](../../Skills/Software%20Development/ESLint.md) has a rule for this, which is one bar. This rule supports a lot of configuration options for different keywords. But I want to do a more broad-based rule. I need to specify an issue level and a rule as an array. So that's one dash var colon, and then my array with an issue level of error, and a rule of never. So I'll save that, and over in my app.js file, I have errors. Now, fixing this isn't hard. I just have to replace the commas with semis and add keywords where they're missing in my new statements. So let color, let background, let size. And I'll save that, and likewise for const, and we'll make that a const as well. And now, my errors are gone. I have the code open in my browser, so we'll check there, and there's no errors.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-individual-statements-to-create-variables?u=76281980&t=94)** And so, now I have easier to maintain code with a separate statement for each variable declaration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (2)
> **File Paths:** app.js (1)
> **Speakers:** - [instructor] (1)

#### [Create descriptive variable names](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=0)** - [Instructor] Brevity may be the soul of wit. But as my variable names here illustrate, writing code requires striking just the right balance between brevity and clarity. I have four variables here named A, B, X and Y. Looking at the first two, which are arrays, I can make a guess about what each contains, but I can't be sure. Inventory in a store's produce section, a couple shopping lists, ingredients for recipes. The final two are pretty much a complete mystery. Just numbers with no context. Now, when a parser is processing my [JavaScript](../../Skills/Software%20Development/JavaScript.md) statements, it doesn't care about variable names at all. But for me and other humans working with the code, it's really helpful to understand what a variable is meant to contain. This lets me verify that the data matches the intent and also helps me understand the flow of my program as the variable's referenced in other statements. My first two variables are intended simply as lists. The first are fruits and the second are vegetables. So I'll rename the first, fruits. And I'll rename the second, veggies. That's a compromise from the full [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), which is long, but this still gives me enough information to understand what the content is. The third and fourth variables are a little more involved. The first represents an inventory ratio and the second is the previous year ratio. Picking a single word like ratio or previous, is still not going to be enough information. In a situation like this, another option is to put multiple words together.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-descriptive-variable-names?u=76281980&t=94)** There are a couple main approaches. One is to use an underscore between words. This is sometimes known as snakecase. Perhaps due to its popularity in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming language. So I can replace these variable names with something like, inventory and underscore ratio and maybe the second one previous, underscore year, underscore ratio. And now they're pretty readable. In JavaScript though, camelcase is pretty standard. Where the first word is all lowercase and each subsequent word gets an initial cap, so I can still easily identify the separate words. And that's what I prefer to use. If for no other reason, then it's shorter and easier to type. [ESLint](../../Skills/Software%20Development/ESLint.md) supports the camelcase rule, all lowercase. So I'll add that, back in my ESLint RC file, camelcase, with a value of error. I'll save that and now back in my code, I have a couple errors flag, because the camelcase rule is specifically watching for the use of snakecase in variable names. So I'll replace inventory ratio, with inventory capital R ratio. And previous year ratio, can become previous capital Y year, capital R ratio. Now my variables all have descriptive names using camelcase and my code is easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Standardize acronym case](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=0)** - [Instructor] I'm working with three variables here whose names all include acronyms. COGS is used in business as a shorthand for cost of goods sold. YTD is a financial abbreviation for year to date, and I'm using NOP to stand for net operating profit. No matter how faithful I am with my camel case, it can all get really confusing really fast when I throw an acronym into the mix. In some places, acronyms are all caps, while in others, an acronym is denoted by an initial cap. Either standard can require its own approach in variable naming. My first variable name uses all lowercase, which is standard for a single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) variable name. My second uses an initial cap for the acronym, then camel cases the next word. And my final variable uses the all caps format for an acronym. Add into the mix the fact that an initial cap to variable name has specific meanings in [JavaScript](../../Skills/Software%20Development/JavaScript.md), and picking a name can make your head spin. And this isn't just a problem for developers. There's inconsistency built into the language itself. There's perhaps no better example than XMLHttpRequest, which uses all caps for the first acronym, then camel case for the second. Now, there many be solid logic behind this capitalization scheme, but teasing out a regular rule from this is a pretty tall order. I prefer to capitalize all acronyms in my code. Other developers go for treating acronyms as standard words, which are all lowercase unless affected by camel case. Whichever approach you choose, using it consistently means reading variable names isn't a constant process of teasing out
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-acronym-case?u=76281980&t=95)** which words they're composed of. In my code, I want to change COGS to all caps, and since I have a reference to it on line five, I'll use a little trick that's built into editors. I've selected an occurrence. I'm going to press command F2 on my Mac, which would be control F2 on [Windows](../../Glossary/Service/Windows.md). And now, both occurrences are selected, and any edit I make affects both of them. So I'll just type C-O-G-S to replace the selected text, and it changes in both places. And the same thing to change YTD. And I'm going to make that all caps. And NOP, I already entered as all caps, so that's good. Now, all my variable names use acronyms consistently, and the code is easier to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** cogs (2), ytd (2), nop (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Remove unused variables](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/remove-unused-variables?u=76281980&t=0)** - [Instructor] I have code with some variables, a few functions, and some placeholder console.log statements for output. After some iteration my needs have changed, and I no longer need to run analysis using the cdRatio or efRatio. So I can take out the second and third functions, and I can take out the second and third console.log statements. At this point, I've cut a lot of my code. And especially if I was working in a big codebase, it can be easy to overlook orphaned variables, that is, variables that are declared but no longer used. [ESLint](../../Skills/Software%20Development/ESLint.md) can help me watch for this with the no-unused-vars rule. If I prune or restructure my code, such that a variable is no longer used anywhere in my code, ESLint will catch that for me. In my eslintrc file I'll add a new rule, no-unused-vars, and a simple string for the value of error. Now switching back to app.js, I have errors on line four and five that reference unused variables. Great reminder. So I'll delete those, and save. And now I'm not wasting memory on unused resources, and my code is leaner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (2)
> **Code Identifiers:** cdratio (1), efratio (1)
> **File Paths:** app.js (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Declare variables](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-declare-variables?u=76281980&t=6)** - [Instructor] Ready to test and implement best practices in declaring variables? It's time for a challenge. My start code takes a step-by-step approach to building out a user friendly version of the current date, including the day of the week. There's no need to worry about functionality here or optimizing the code. Instead, focus on implementing strategies for declaring variables that make for better organized and predictable code. Add rules as appropriate to the eslintrc file to check for issues as well as fixing those issues in the app.js file. This exercise should take you about 10 minutes. When you're done join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Declare variables](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=0)** - [Instructor] I hope you had fun working with that code. So let's give this a go. I have my code already running using Live Server and over in the browser I can see I have that day logged, like I'd expect. Now depending on where you are, you might see a different local format here. So for instance I'm in the U.S. and I have my month first and then the day, but you might see those two flipped. Or you might see another format depending on what is prevalent where you are. So back in my code, first thing I notice, is that I have a var down here and I don't want vars. So I'm going to go over to my eslintrc and I'll start by adding that no var rule, with a value of error. And that var got flagged, this is a function, so it makes sense to make that a constant and so I'll use const. Change that and now there's no longer an error thrown. Now I'm not using constants throughout but I'd like to be using constants wherever it makes sense. So I'll go over and add the prefer const rule with a value of error. And then in my app I have a few issues here. So these are all values that don't need to get changed, and so I can simply change my let to a const,
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=94)** got that single statement that's defining all three of those and so that's all fixed too. Now I have a single statement that is declaring all three of those variables. And I want to avoid doing that as well. So I'm going to add a one var rule and that takes an array, so I want it to be an error and I want to never use a single variable statement. And then I've got that whole mess flagged, so I will add in replacing my comma with a semicolon, add another const here, replace that comma with a semicolon and add in one more const. And now I have three separate statements and my errors are gone. So I also want to enforce the use of camelcase here, using that kind of inconsistently right now. So we'll do a camelcase, the value of error. And I've got a few variable names that are flagged, so I'm going to select times of day, looks like that's not used anywhere else, so I'm just going to do times of day using camelcase. Down here we've got local underscore date and that is in there twice. So I'm going to use my keyboard shortcut, on a Mac that's command F2 and I'm going to make that local, capital d, date. Same thing with the Dow value,
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=191)** it's going to be DowValue, going to keep that innitial cap for now and Dow, capital n, name. And finally report date doesn't have another usage, so that's going to be report, capital d, date. So now all of those camelcase, snake case usage errors are gone, whoops nope, I had another usage for report date, so report, capital d, date, to match that definition above. Okay, so I also have a couple acronyms in here. And I like to do acronyms as all caps, so Dow here is standing for day of week. And so I'm going to select that acronym, select all occurrences, and I'm going to change that to DOW, all caps. And same thing here for DowName. And now it's clear where my acronyms are and I can differentiate those from other words in my variable names. Next I want to make sure I'm not using any unused variables. So I'm going to add an [ESLint](../../Skills/Software%20Development/ESLint.md) rule for this, no unused vars, the value of error. And over here it looks like I have a couple of those. So times of day never actually gets used, so I'll go ahead and take that out.
>
> **[4:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-declare-variables?u=76281980&t=286)** And it looks like when I was renaming things, that I got these wrong, it says reportDate isn't used but I just typed it wrong down here, when I was actually using that function. So that's another good reason to use the select all and change 'em all at once. This was the one where I changed each one manually. And so now I'm going to go back to my browser, to my console, and just double check and yes, my code is still working. I've got the day logged just the way I did before, but now my code is making that consistent use of variable definitions using best practices. So again this is one of those things where the more you practice, the better you get at it. And also, the more you use these rules in eslint, you'll understand you can dig a little bit deeper into what the options are and how exactly you want to specify the way that your usage is for each rule

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** reportdate (1)
> **Env Vars:** dow (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** avoid doing (1)


### 3. Assigning Values

[↑ Back to Table of Contents](#table-of-contents)

#### [Don't assign variables in chains](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-assign-variables-in-chains?u=76281980&t=0)** - [Instructor] The code for this video does some basic calculations on a set of items in a shopping cart. It starts off declaring variables, and then in line nine, ensures that the subtotal, shipping, and net total variables are all numbers and have a value of zero, by using a chained assignment. This single statement is certainly concise. But like other statements that perform multiple actions, it can be hard to read it and understand exactly what's going on. For this reason, I prefer to always assign my values with individual statements. This makes each line of code more easily digestible when I read it, and does away with corner cases where chained assignment can create uncertainty. [ESLint](../../Skills/Software%20Development/ESLint.md) has a rule that can flag this for me, which is no-multi-assign. I'll start by adding that to my ESLint RC file. So it's no dash multi dash assign, the value of error. And then, saving and switching back, and that error is underlined. And I can pretty straightforwardly break this up into three separate assignment statements. So, subtotal equals zero, then shipping equals zero, and then net total equals zero. Now, if my code supported it, I could also do the assignment as part of the variable declarations up on lines three to five. But either way, now my code is both easier to read and less ambiguous.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (2)
> **Speakers:** - [instructor] (1)

#### [Standardize quotes](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=0)** - [Instructor] [JavaScript](../../Skills/Software%20Development/JavaScript.md) offers a few different options for enclosing items in quotes. As long as your quote characters are paired, you can use single quotes, double quotes, or even backticks if you're working with Modern JS. For the sake of efficiency and consistency, a lot of developers choose to standardize on just one quote style. Before JavaScript, I worked with [HTML](../../Skills/Web%20Development/HTML.md), which required double quotes. So I initially wrote my JavaScript with double quotes. But over time I noticed that single quotes had the advantage of not requiring me to hit the Shift key to type them. So I made the switch. And in general, single quotes are pretty popular in JavaScript. Whichever style you choose to standardize on, you can commit to it using [ESLint](../../Skills/Software%20Development/ESLint.md) quotes rule. It takes an array in which you specify the alert level and which quote style you use. In my code, my use strict statement uses double quotes. I have a couple of rays that use single quotes. I have a couple of ray.join statements that use double quotes, and finally I have a couple of console.logs that use template literals, enclosed in backticks. I'll switch to my ESLint file and I'll add my preferred style, so quotes, and an array which is error and single. And I'll save that. Then in my editor I can just follow the flags and convert my double quotes to single quotes. So I need to change that one and that one. And there's flags down here too,
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=94)** but I got to make sure that I'm just doing one at a time. Sometimes the autoCompletion is working against me here.
>
> **[1:46](https://www.linkedin.com/learning/javascript-best-practices-for-data/standardize-quotes?u=76281980&t=106)** Now notice that my backticks in lines 26 and 27 are not flagged. This is because the ESLint rule includes the caveat where possible. Obviously if I want to use a template literal, I have to use backticks. And there's no reason to exclude template literals from my code, just to standardize my quote style. So ESLint lets them coexist, which is exactly what I want. I have the code running in my Browser and the test looks good. Everything is running exactly the way I want it to. And now when I edit or add to my code, I don't have to stop and think about which quote to use. And things just look neater, which I like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [ESLint](../../Skills/Software%20Development/ESLint.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** autocompletion (1)
> **Env Vars:** html (1)
> **UI Navigation:** switch to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Create arrays and objects using literals](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=0)** - [Instructor] My code creates a new array using the array constructor, and passing in the array values as arguments. Likewise, it creates a new empty object using the object constructor. This is perfectly valid [JavaScript](../../Skills/Software%20Development/JavaScript.md), but stylistically, these constructors are often not the best choice. Because the array constructor accepts either a numeric argument for the number of elements or a comma separated list of values, there's a pitfall. If I want to create an empty array, I can use new array and pass the value zero. Or, if I want to create an array with some numbers in it, I can pass those as comma separated values. But if I want to create an array with a single element whose value is a number, then relying on the array constructor can have an unexpected outcome. For this reason, and for conciseness, most developers prefer to rely on the array literal, saving the constructor only for creating sparse arrays that need to include empty elements. [ESLint](../../Skills/Software%20Development/ESLint.md) can flag this issue with the no-array-constructor rule. So in my ESLint file, I'll add that. No dash array dash constructor. And that takes a single value, which in here is going to be error. And then in my app.js file, I have an error flagged, and I can just convert this to an array literal using square bracket notation. And replacing that closing paren with a closing square bracket.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-data/create-arrays-and-objects-using-literals?u=76281980&t=93)** Likewise for objects, you can generally do what you need with a literal instead of a constructor. ESLint supports the no-new-object rule to enforce this. So in my ESLint RC file, I'll add no new object, with a value of error. Then in my JS file, I can replace all those characters with an opening and closing curly brace. And now, my code is more concise and just a little bit more bulletproof, to boot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** app.js (1)
> **Definitions:** is a  (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [instructor] (1)

#### [Quote object property names consistently](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/quote-object-property-names-consistently?u=76281980&t=0)** - [Instructor] My sessions object contains session labels and names for the first few sessions at a conference. The first key, plenary, is a single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) and doesn't strictly need quoting in [JavaScript](../../Skills/Software%20Development/JavaScript.md), but the other two use hyphens in their names, which aren't valid property names unless you pass them as strings, so they're quoted here. I prefer to use quotes around property names only where needed. The lack of quotes around the key that doesn't need them actually provides a bit of a performance edge in the parser, and it does keep the code less cluttered, especially when most keys don't need the quotes. [ESLint](../../Skills/Software%20Development/ESLint.md) supports [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) property names style with the quote-props rule, to support quotes only where needed, you use the as-needed value. So I'll update my ESLint RC file with quote props, and an array value with error and as dash needed. And I'll save that, and then back in my JavaScript file, that first one's flagged 'cause it doesn't need the quotes. So, I'll take those quotes off of plenary. And ESLint is happy again. This is a small point, but as with many other best practices, making a choice and enforcing it consistently across my code base keeps me from having to stop and reconsider the choice every time I'm entering code that's affected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Assign values](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=0)** (upbeat bouncy music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-assign-values?u=76281980&t=5)** - [Narrator] Ready to assign values using best practices? It's time for a challenge. My start code make some random selections from an array, an assigns them as first, second and third choices, which are saved in an object with a user name. There's no need to worry about functionality here, or optimizing the code. Instead, focus on implementing strategies for assigning values to variables, that make better organized and predictable code. Add rules as appropriate to .[ESLint](../../Skills/Software%20Development/ESLint.md) RC, to check for issues, as well as fixing those issues in the app.js file. This exercise should take you about 10 minutes. When you're done, join me in the next video and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (2)
> **File Paths:** app.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat bouncy music) (1)

#### [Solution: Assign values](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=6)** - [Instructor] So first off, we can customize this a little bit. So we have the user variable, and I put in your name as a placeholder, but if you want, go ahead and fill in your name there. I'll put in mine. Now, first off, I noticed that I have a variety of quotes in this file. I switch back and forth between single and double quotes. I've even got some backticks at the bottom. So over in my [ESLint](../../Skills/Software%20Development/ESLint.md) file, I'm going to add a quotes rule, and the value there is error and single, which is what I'm standardizing on. And then that's going to guide me to what I need to replace here. So use strict is using doubles. Now it's got singles. Down here, I've got an empty string. And now that's singles. And again, it's going to leave my backticks alone, because it's okay for me to use template literals while still using another choice for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my quotes. So I also want to make sure that I am using array literals and object literals. So I'll go ahead and stick both of those in my eslint file at once. So I'll do no array constructor with a value of error, and no new object with a value of error. I'll save those. And now in my [JavaScript](../../Skills/Software%20Development/JavaScript.md) file, I've got an error for my new array statement and for my new object statement,
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=99)** so I'll convert those to literals. Deleting, this is an array. Needs to be a square bracket. There we go. And then for my new object, I'm going to delete that and replace that with an empty pair of curly braces. So now I have that array literal and that object literal in place. And finally, I want to make sure I'm not doing any multiple assignment, which I'm doing on line 19. So let's get a rule in place for that first. That's going to be no multi assign. And that'll be an error. And putting that rule in place first just means that I let ESLint find all the occurrences and make sure that I don't overlook anything by just trying to do it myself. So I'm assigning things to an empty string here. So I'll just give that a value of an empty string. New line, and give second choice a value of an empty string. And then let third choice be on its own. Now my errors are gone and I've taken care of that multi-assignment issue. Now I'm going to open up my [HTML](../../Skills/Web%20Development/HTML.md) file and run that in my browser. Open up my console. And there are my values logged just the way I expect. Tells me my username, each of my three choices, and the code is written in such a way
>
> **[3:13](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-assign-values?u=76281980&t=193)** that none of the choices are going to duplicate each other. So I made all those stylistic changes to my code and my code still works the way I expect it to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### 4. Type Casting

[↑ Back to Table of Contents](#table-of-contents)

#### [Type cast strings with the String wrapper](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=0)** - [Instructor] I'm modeling working with data whose data type I can't be certain of. My array has a single element right now with the numeric value 55. If I want to work with that data as a string, there are a few approaches I can take. I have a forEach statement here that loops through my array, just that one element for now, and tries out three of those approaches. new String using the new keyword and the string wrapper, then the toString method, and then the string wrapper on its own. I'm using the console.table method here which can take complex data, like this set of nested objects, and display in the console in the table format which can make it easier to understand. I'm running my code using Live Server so in the browser console, there's that table, and it shows a label for each of the three approaches followed by the value and the resulting data type. With the new String statement, I get a data type of object instead of string, and that's not what I want, because I want to end up with a string that has all the string methods that I want to work with. Now the other two approaches here look good. So back in my code, I'll comment out lines eight through 11 because I know that approach isn't going to work. To look a little deeper into the other two approaches, I'll try one more test. Up here in my formData array, I'm going to add a second element with a value of undefined. And returning to the console, the two remaining statements are logged for the value 55 and then I get an error,
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-strings-with-the-string-wrapper?u=76281980&t=95)** and it specifically says there's no toString method for an undefined value. So that's not going to be a reliable method. And I'll go back and I'll comment out lines 12 through 15 which is the toString method here. And now returning to the browser, I get strings for both elements in the array. And this is just proof of a widely used best practice. If you need to typecast something to a string, just use the string wrapper, and not toString, and not the new keyword with the string wrapper. [ESLint](../../Skills/Software%20Development/ESLint.md) can check for the first issue I ran into which is the use of new with the wrapper and this rule applies not just to string, but to other primitive wrappers as well. In my eslintrc file, I'll add no-new-wrappers, with a value of error. And just to double check that in my js file, I'm going to grab lines eight through 11 where I used that new String construction, I'm going to un-comment those, and immediately, I get errors flagged because I'm using string as a constructor here. So that just proves that that ESLint rule is going to help me catch errant uses of new with constructors like string. And I'll go ahead and comment that back out. And now I'm using a best practice and I have ESLint watching out for it too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3)
> **Code Identifiers:** tostring (4), foreach (1), formdata (1)
> **Best Practices:** best practice (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Type cast numbers with the Number wrapper](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=0)** - [Instructor] When you're working with data that needs to be a number, [JavaScript](../../Skills/Software%20Development/JavaScript.md) offers a couple approaches to typecast to a number. But these approaches aren't equal. I have an array with three elements whose values are different data types and I have a forEach statement that loops through the array and uses two different methods to typecast. First, I'm using the new keyword and the Number wrapper, and then I'm using the Number wrapper all on its own. Now I have some error squiggles on lines nine and 10 and that's because my [ESLint](../../Skills/Software%20Development/ESLint.md) already contains the no new wrappers rule. So I can start off looking at that part with suspicion. I have the code open in my browser and so I'll check out the console. Scrolling to the top of that output my for Each statement is logging a table with the label followed by the value and the resulting data type. For the first array element, a string containing digits, new with the Number wrapper gets the value correct but the data type is object, which isn't going to work. But the other option gets both right. The second element, the Boolean value true, results in the value one which is it's numeric equivalent. And the final value, undefined, results in not a number. In all three of these, the new operator results in an incorrect data type of object. And this illustrates why the best practice is to use the Number wrapper alone for typecasting numbers. I'll comment out lines eight through 11 to get rid of that error. And then when I retest in my browser, I have correct output for all three array elements
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-numbers-with-the-number-wrapper?u=76281980&t=96)** because I'm now using just the Number wrapper.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Code Identifiers:** foreach (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Type cast Booleans using double negation](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=0)** - [Instructor] When you're working with data that needs to be a Boolean, you can typecast it a few different ways. As with typecasting in general in [JavaScript](../../Skills/Software%20Development/JavaScript.md), not all approaches are equal. I have an array with three elements whose values are different data types, and I have a for each statement that loops through the array and uses three different methods to typecast. New Boolean uses the new keyword and the Boolean wrapper, then the Boolean wrapper on its own, and finally, double negation, which determines whether a value is truthy or falsy, gets its opposite, and then gets the opposite of that, which is the Boolean equivalent of the original value. Now, I have some error squiggles on lines nine and 10, and that's because my .eslintrc file already contains the no new wrappers rule. There's probably a reason that's suspect, but it pays to check, so I'll test it. I have the code running in Live Server. So over in my browser in the console, I can see the results. Now, my for each statement is logging a table for each value in the array, and that table contains a label, followed by the value, and then the resulting data type. For the first element, a string, I get the correct Boolean equivalent true for all three statements. But as with other wrappers I've used, using new with Boolean gives me an object rather than Boolean data, which isn't going to work. So that's out. But the other two options get both right. And for my other two values, zero and undefined, I get the correct results of false, and only the new operator again gives me an object instead of a Boolean value.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/type-cast-booleans-using-double-negation?u=76281980&t=94)** It turns out that using the Boolean wrapper on its own, or double negation, both produce correct results. And indeed, both are acceptable. The common best practice is to use double negation because it's so much briefer. Because it's such an unusual construction, it's hard to mistake what's going on. So it's the generally accepted approach here. So back in my code, I'll comment out lines eight through 11, and I'll also comment out 12 through 15, just leaving the section that does the double negation. And saving that and returning to the console, I have correct output only for all three array elements, because now I'm using double negation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Rely on implicit Boolean values in conditionals](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=0)** - [Instructor] When you're working with a variable whose value is a Boolean in a conditional expression, it can be tempting to explicitly typecast the variable like you might with a value of a different data type to get its Boolean equivalent. My code for this video is the very beginning outline of a user interface. I'm setting a loggedIn variable to store whether the user is logged in, and then checking the value of this to determine my next step, which I'm simply logging into the console to start. Now in my condition I'm typecasting loggedIn to check whether loggedIn is equal to true. But my condition just needs a true or false value, and my loggedIn variable is definitely going to give it one or the other. So this extra step of typecasting isn't necessary. [ESLint](../../Skills/Software%20Development/ESLint.md) has a rule to test for this, no-extra-boolean-cast. It's enabled in the ESLint recommended rules, and by default it's flexible, watching only for Boolean typecasting when it's not necessary, but allowing it otherwise. I'll go to my eslintrc file and I'll add no-extra-boolean-cast with a value of error. Saving that and moving back to my [JavaScript](../../Skills/Software%20Development/JavaScript.md) file, and I have an error, the screen tip that mentions redundant double negation and the rule I just added. I'll take out the double exclamation, and the error is gone. And I'll save that fix. This approach removes an unnecessary step from my code, and takes advantage of the way JavaScript works rather than trying to overengineer a solved problem.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-data/rely-on-implicit-boolean-values-in-conditionals?u=76281980&t=96)** So a Boolean wrapper alone is good, double negation is best when you need it, and going without anything is best in conditionals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Code Identifiers:** loggedin (4)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Type cast](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-type-cast?u=76281980&t=0)** - [Instructor] Ready to type cast some values using best practices? It's time for a challenge. My code starts with some string data from a weather service, converts a Celsius temperature to Fahrenheit, and then takes a first step in putting that data in the view by console.logging it. Your task is to type cast data when necessary and then update existing type casting as necessary to use best practices. I've highlighted here on lines 11 and 16 where type casting needs to happen in the statements that follow those comments. You'll have to decide on the best approach to doing that. In addition, the code works with Booleans a few times, and you should make sure that best practices are being implemented in all of these statements. Add rules as appropriate to dot [ESLint](../../Skills/Software%20Development/ESLint.md) RC to check for issues, as well as fixing those issues in the app.js file. This exercise should take you about 10 minutes. When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Type cast](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=0)** - I'm going to start out with the typecasts that I need to do, based on those comments. So first off, line 11 says I need to typecast on line 12. And line 12 is working with data.tempC which is string, but I need to typecast that to a number. And so to do that, I want to use the number wrapper and just passing tempC to that wrapper. Then down line 16, I need to cast tempF to a string. And that tempF value here I just got, that is going to be a number and so I need to make sure that that number is a string for actually logging as part of the string. So I'm going to use the string wrapper and pass it tempF. Now you may notice, on line 13, we are grabbing the third value from the data object which has a value of false. And it's a string we want to work with that as a Boolean. So you may have found if you made changes to line 13, that the app stopped working. And that's because if you're tryin' to typecast the string of false, the logical value of that string is truthy. That's one of these weird corners of truthiness and falsiness. And so to check the truth value of that string, we use this equivalence here just checking whether the string itself is equal to the string, true. So we don't need to make any changes to line 13 here. But this is just a corner case to keep in mind.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-type-cast?u=76281980&t=92)** Now I want to go to my es/rc file and add a couple rules. So I'm going to add that no new wrappers rule just to keep me honest in the future. And same thing for no extra Boolean cast with the value of error. So that just double checks first off, that I didn't use new in my typecasting, and I didn't. And it brings up this error on line 18. And that is about redundant double negation because this is a situation where I'm checking the value of the alert variable which was turned into a Boolean on line 13. And so here, I can just take out that double negation and just check that Boolean value. Then I'm going to go live with that code in my browser and in the console, there's the output I expect. And so I've made changes to my code to implement those best practices for typecasting and my code still works the way I intend. It's just a little bit neater and doing things in a more reliable way.

> [!info]- Semantic Content
>
> **Code Identifiers:** tempf (3), tempc (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - i (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Comparing Values

[↑ Back to Table of Contents](#table-of-contents)

#### [Use triple-character equality operators](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=0)** - I have an array of some falsy values in [JavaScript](../../Skills/Software%20Development/JavaScript.md) and I've written code to log the results of comparing each one to the string zero and to the value undefined. My code uses the double equal sign to check for equality which is one of two ways to check for equality in JavaScript Running my code, I get statements logged for the comparisons that are equivalent. And it turns out that the parser sees the string zero as equivalent to both the value zero, and false. And it sees the values null and undefined as equivalent. What? JavaScript has two different ways to compare equality, the [Algorithms](../../Skills/Software%20Development/Algorithms.md) in the parser for the double equal equality sign result in some unexpected equivalences. For instance, false is equivalent to zero, zero as a string, an empty string, and an empty array, but not an empty object, as well as an array containing only the value zero. Now typecasting my values can be helpful here. And double equal results are often predictable, but not always. And having an unexpected result from double equal derail your code can result in a really tough problem to identify. To make equality checks more predictable, JavaScript also includes the triple equal operator, or the strict equality operator. This operator does no coercion. So the only time something is equal is when it's actually the same thing. False triple equals false, but not zero or empty string or any other falsy value.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-triple-character-equality-operators?u=76281980&t=95)** Although you can get by using double equal, and coming from another language with only a double equal operator, you may already be doing so. Using triple equal is a best practice for avoiding unexpected corner cases in your equality checks. Now, of course [ESLint](../../Skills/Software%20Development/ESLint.md) can help us out, as with so many other things, with the entertainingly named eqeqeq rule. Notice that it also covers the bang equal equal rule, which is the preferred three character version of not equals The eqeqeq rule also flags use of a two character bang equal expression. Back in my code, I'll go to my .eslintrc file and I'll add eqeqeq with a value of error. Then, in my JavaScript file, I've got a couple errors flagged. And I'll simply update those to triple equals. And I'll save that and go back to the console and now I get nothing logged to the console, which is to say that none of the different values I'm comparing are treated as equal by the strict equality operator. And that's what I want. If I want to coerce things I need to take steps to do that. Which means it will be in my code, staring me in the face if it needs de-bugging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** best practice (1)
> **Speakers:** - i (1)

#### [Don't use Yoda conditions](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=0)** - [Instructor] Check for alert levels, my code does. My code checks for alert levels, and it uses a conditional structure to map numeric values to descriptive text. In each of those comparisons, after each if operator, I've written the literal numeric value first and the variable name I'm comparing to second. If I run my code, it works. But if the code looks funny to you, you're not alone. It's pretty standard in [JavaScript](../../Skills/Software%20Development/JavaScript.md) to write the variable first, and then the literal value second in comparisons. Flipping them around like I've done here is sometimes called a Yoda condition, in reference to the Star Wars character Yoda, who often reverses the order of his sentences. Just like Yoda's dialogue, all the information is here, and the comparison can be parsed. But for a human, it can take a moment to piece it together and recognize the comparison, because the opposite pattern is so common. I prefer not to use Yoda conditions, and [ESLint](../../Skills/Software%20Development/ESLint.md) can flag those for me with the Yoda rule. So, in my dot ESLint RC file, I'll add that in, and that's going to be Yoda and error. And then back in my JavaScript file, all my comparisons are flagged. So, I'm going to cut data alert, stick that at the beginning, triple equals, and then, take out the other one. Likewise, I need to do that on the other lines. So moving these things around takes a little bit of doing.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-data/don-t-use-yoda-conditions?u=76281980&t=94)** And now, I've saved my code, those flag bearers are gone. And back in my console, the code still works. But now, my code reads like most JavaScript code I've ever encountered, and that removes a hurdle to quickly scanning and understanding it whenever I need to come back to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [ESLint](../../Skills/Software%20Development/ESLint.md) (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Compare appropriately for the data type](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=0)** - [Instructor] My code contains a set of if statements that check for values in the data and they only log the relevant values if the check succeeds. Each one of these checks a different data type and for each one, I've simply checked for truthiness. But that's not always going to give me the most reliable code. My first if statement on line 10 checks the truth value of data.warning. In this case the value is a Boolean so simply checking the value makes sense. I could add double-negation before the value to insure I'm getting a Boolean, but when I know I'm working with a Boolean, that's redundant and I already have the no-extra-Boolean-cast rule set up in [ESLint](../../Skills/Software%20Development/ESLint.md) to flag that. So I'll take those back out and leave line 10 as is. On line 13 data.notes is a string and I want to check if I have a non-empty string before logging it's value. An empty string is falsy, so here I'm checking if the string is anything other than empty. But with strings, it makes my code clearer if I specify exactly what I'm looking for. So I'm going to update this to check if data.notes is not equal to an empty string. Finally, data.alert on line 16 is a number. And I want to make sure it's greater than zero, which indicates I have a value that maps to a message. Again, right now I'm using a shortcut just to check if it's truthy which for a number is the same thing as non-zero. But it's useful to be clear here about what I'm trying to do. Especially because I'm not working with Boolean data here.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-data/compare-appropriately-for-the-data-type?u=76281980&t=95)** So, I'm going to update this to check if data.alert is greater than zero. And that lets me be really clear about it. So saving that code, I'll go back to my console, and test again. And my code still works the way it did before, but by specifying explicitly what string and number values I'm checking for my code is easier to read and it will be easier to debug if I run into issues down the road.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Warnings:** warning (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Use ternary statements judiciously](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=0)** - My code for this video using a couple ternary statements to choose between values based on the truth value of a condition. On line seven, I'm setting a Boolean value for a variable based on the value of a property of my object. On line nine, I'm choosing the text to be logged based on whether I have custom text to display. Turnery statements are meant to serve as a quick substitute for larger logic patterns when you only need to make a quick comparison. They're more compact, which means you have the classic trade off of fewer characters at the cost of denser code that can be harder for a human to parse. Because of the potential draw backs of ternary statements, it's important to use them only when necessary. [ESLint](../../Skills/Software%20Development/ESLint.md) has a rule that flags ternaries that could easily be replaced. It also has a rule that lets you flag nested ternaries for elimination. Nested ternaries make that short, hard-to-parse code even more complex and to my eye, harder to parse. So, I prefer to avoid nesting. I'm going to add both of those rules to my dotESLintrc. So no unneeded ternary error and no nested ternary error.
>
> **[1:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=83)** Back in my JS code, I now have an issue flagged on line seven, and this says, unnecessary use of a Boolean literal, and indeed I'm checking the value here of a Boolean and using that to assign true or false. Instead, I can simply assign the property value to the new variable, so I can take out this entire Boolean structure and just use the existing Boolean value of data.warning as the value of the warning variable. I don't have any nested ternaries, but my code on line nine uses a ternary that runs pretty long. Ideally, I like to keep my ternaries to a single line. Here, my ternary is within a template literal, but even if I broke it out, it would be a long statement. The biggest portion of my statement is the property reference and the string. I can assign both of those to variables to reduce the character count. So, I'll make a const called null warning (mouse clicks) and it's going to have a value of no warning message at this time. And then I'll create one more variable called text, and I'm just going to assign that the value of data.warningText, so I don't have to have quite such a long variable reference in my ternary. And now my ternary become checking the value of warning and either using text
>
> **[2:58](https://www.linkedin.com/learning/javascript-best-practices-for-data/use-ternary-statements-judiciously?u=76281980&t=178)** or null warning as the value to be logged. This gets my ternary down to a single line and makes it easier to read the logical structure. And then I can look at the other lines for the specific values of those variables. Some developers avoid ternaries all together, but I think by using them judiciously, I can benefit from them without overly complicating my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Warnings:** warning (6)
> **CLI Commands:** make (3)
> **Code Identifiers:** doteslintrc (1), warningtext (1)
> **Exercise Files:** template (1)
> **Speakers:** - my (1)

#### [Add parentheses to clarify logic](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=0)** - [Instructor] The start code for this video generates three choices randomly from an array, then it has the logic to ensure all three are different. Line 21 is pretty straightforward, but in line 24, I'm checking to make sure the third choice variable is different from first choice and from second choice. If my screen was a little smaller, that statement would even run over a couple lines, and it uses a total of three operators. That can make it hard to read, and every time I come to this line while debugging, I have to stop for a minute to remember just what it's doing. Both mathematical and logical operations in [JavaScript](../../Skills/Software%20Development/JavaScript.md) have a specific order that the parser follows. For instance, this is the order of operations for a few common logical operators. As long as I'm writing code with this order in mind, it'll work correctly. But there's a difference between a parser understanding the code and me or another developer being able to read it. To clarify the order of operations and make it clearer what I expect the code to do, it's helpful to add extra parentheses to group sub operations that happen first. Operations within parentheses always happen first, and parens are sometimes used to change the order of operations, so operations happen in whatever order you want. But even without changing the order, parens create a visual cue to group parts of your expression and make it easier to read. On line 24, those strict equality checks are going to happen before the or is evaluated. I can start by breaking those up into separate lines and indenting.
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-data/add-parentheses-to-clarify-logic?u=76281980&t=92)** But I can make things even clearer by adding parens. So I'll put another set of parens around that first equality check, and then a second set of parens around the second equality check. And now, it's pretty easy to read this as an or statement comparing the results of two equality checks. So I'm going to save this, and check it in my console. And it still works, just the way it did before. But now, my code is easier for humans to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (5)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Compare values](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=0)** (upbeat bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/javascript-best-practices-for-data/challenge-compare-values?u=76281980&t=6)** - [Narrator] Ready to try your hand at writing better comparisons? It's time for a challenge. I've written some code that simulates a shopping cart and performs a few actions based on values in the cart object. Your task is to update the code to make it easier to read and to follow best practices for comparisons. Add rules as appropriate to .[ESLint](../../Skills/Software%20Development/ESLint.md) RC, to check for issues, as well as fixing those issues in the app.js file. Note that the code I've written is intentionally convoluted here and there. So if you're not sure what a statement is doing, take a moment, step back, and break it down. This exercise should take you about 15 minutes. When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat bouncy music) (1)

#### [Solution: Compare values](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=0)** - [Instructor] So, at the top of my code, I have a cart object, and then I have all of this logical code with all of these comparisons starting on line 11. And looking at this line by line, basically this section is checking the number of items in the cart using some other factors to calculate the shipping, or whether shipping needs to be determined later, and then down here there's this contact property we're setting a value for, and that I just thought of as if there's some complications going on with this order, then we'll flag it to have someone actually reach out, contact the customer, and resolve some issues, or iron some logistics out. So, I'm going to start with the flow control up here. Save that nice, gnarly ternary for a little bit later, and this is one of those places where I think putting the [ESLint](../../Skills/Software%20Development/ESLint.md) rules in place first can be really helpful, 'cause they can point out some of those errors, and I can just chip away error by error, issue by issue, and make things little by little better. So, switching over to my eslintrc, I'm going to start by adding that triple equality rule, eqeqeq with a value of error, and that will flag for me if I've got that going on anywhere, and I do, I have one. So, we'll take that out, and that also looks like a Yoda to me. So, let's go ahead and just flag Yodas in here. And indeed I've got a couple Yoda expressions.
>
> **[1:40](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=100)** Now, this one's pretty straightforward. It's triple equality, so I'm just going to stick this at the end, take out that redundant sign. Now, up here is a Yoda expression with a less than sign. When I flip this around, that becomes a greater than sign. So, it's really important when you're flipping signs to make sure that you're keeping the comparison the way it was before. So, now my errors are gone there. So, I've got Yoda expressions taken care of. And another aspect of comparisons is that extra boolean cast. So, let's just check for those. So, no-extra-boolean-cast. That, flag as an error, and it looks like I don't have any of those in here, great. Now, before I get down to those ternaries, I also just want to look in general at a couple things, because I want to make sure that I'm comparing appropriately for the data type on all of these. For instance, right here I have a comparison where I'm just checking if it's false, and specialShip is a boolean. So, there's no need to specify false here. I can simply check the value to see if the value is true or false. So, I'll just go ahead and take that off all together. And now I'm just checking that boolean value as my comparison, so, that's great. So, I also notice up here on line 12 that I have this
>
> **[3:14](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=194)** really gnarly comparison, and it seems to work. It works fine when I run the code, but I'd like to be able to read it and understand it a little better. So, I'm going to break it down. So, I've got a comparison over here, and a comparison over here. And so, I'm going to go ahead and add some parentheses to group things up, and make it easier to read. So, that's my left side of the and, then my right side of the and is over here, and even within that I've got a couple things going on. So, I'm checking if cart.subTotal times .1 is less than 12. That's my logical operator. So, I'm going to group the stuff to the left of that as well with another set of parentheses. And if I wanted to, I could even break this up on multiple lines, like that. And so, now I have that logical expression that's a little bit easier to read. Now, I realized one thing here that I just did wrong. So, I will be totally transparent here. This was originally triple equal zero, and you may have noticed when I fixed that I just took away that comparison, but that's not what I'm looking for here. I want to see essentially if it's false, and by taking away that equal to zero I'm now checking if it's true. So, I want to check if that is not cart.specialShip, and so, there I'm just using a negation of that boolean value. You may sometimes see a triple negation where the first two are meant to convert to a boolean,
>
> **[4:49](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=289)** the third one's meant to negate, and that's going to pull up that redundant double negation, which we obviously don't need. So, one exclamation is going to be totally sufficient here for my use. Now, one other place I noticed something going on here is cart.items. So, cart.items is a number. And here, I'm treating it as a boolean. So, I'm using coercion, but ideally what I want to do here is actually make the comparison that I'm looking for. What I'm trying to check here is if there's nothing in the cart, then I'm going to do something with the UI to let the user know that the cart's empty, and that checking out doesn't make sense. So, rather than coercing that number to a logical value, I'm actually going to check instead if that value is zero, because that's what I'm looking for here. Okay, so, that is my if else construction, and now down here I have a super long ternary. So, the first thing I'm going to do is add a couple rules to my eslintrc file to just give me some feedback about a couple common ternary issues. So, one's going to be no-unneeded-ternary, and that's where I'm just casting a ternary to true or false. So, that's going to be an error, and then no-nested-ternary, which can be a world of hurt. And now, I have a big red squiggle,
>
> **[6:23](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=383)** and let's try and get this feedback, there we go. So, it's telling me first off I have a nested ternary here. So, I have my question mark, my comparison's here. Here's my question mark, and then on the other side I have a comparison that includes another question mark, another ternary. So, one way to approach this is to pull out the second ternary expression, and break it out into its own statement. So, here I have that comparison right after the question mark and the true and false values, which are false and true here. So, I'm going to Cut that. I'm just going to create a new variable here, const shipException. Just treat this as there's some issue with the order. And then I'll Paste that ternary here, and then whatever value I get out of that, either true or false, is going to be the value here. So, just boiling this whole section down into a true or false value, into a boolean, and then just swapping that in, so I no longer have a nested ternary. Now, I still have an error up here, and that error is, hey, you just did a ternary expression to simply give you a false or true value. So, in that case I don't need this to be a ternary. Now, I've swapped. This first option is what happens if my expression's true. This one is if my expression's false, and so, I want the opposite of whatever this statement is, but I can do that really easily.
>
> **[7:55](https://www.linkedin.com/learning/javascript-best-practices-for-data/solution-compare-values?u=76281980&t=475)** So, I can take all this out. I can put my expression in parens. And then, I can negate it. And this is a place that would also benefit from some more parens. So, here is my expression to the left of the double and. Here is my expression to the right of the double and, and again, I have another operation going on here to the left of the less than sign. I could break this up over multiple lines if I wanted to, but for now, that seems a lot more readable to me. And then, finally, down here I like to put parens around my expressions in ternaries. So, there's the expression I'm evaluating, and then here we're either getting the result there or the result here. That looks great to me, and so, now that ternary code is not nested. I don't have a ternary that is just assigning true and false. It' a whole lot easier to read, and there's definitely optimization I can do in all of this [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) here. This may not even need to be two separate sections, and it could probably be boiled down a whole lot. But for now, I've got my syntax in place, so that it's more readable. My code is more self-documenting. It's clearer what I'm trying to do, and that prepares me for that next step of refactoring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1), [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) (1)
> **CLI Commands:** make (6)
> **Code Identifiers:** specialship (2), subtotal (1), shipexception (1)
> **Definitions:** is a  (4)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-data/next-steps?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course. You now have experience implementing best practices for working with data in [JavaScript](../../Skills/Software%20Development/JavaScript.md). To dig deeper into automating code linting for JavaScript, check here in our library for a course on [ESLint](../../Skills/Software%20Development/ESLint.md). If you want to write better formatted JavaScript code, try a course on [Javascript Best Practices For Code Formatting](Javascript%20Best%20Practices%20For%20Code%20Formatting.md). If you want to learn more about fixing logic errors in your JavaScript code, check out a course on debugging. Feel free to follow me online. Now take your new skills and build something amazing. Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Speakers:** - [sasha] (1)


## Instructor

- [Sasha Vodnik](../../Instructors/Software%20Development/Sasha%20Vodnik.md)

## Resources

- Exercise files available

## Skills Covered

- Data Management
- JavaScript

## Path Context

### In [Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)
← [Javascript Best Practices For Code Formatting](Javascript%20Best%20Practices%20For%20Code%20Formatting.md) | **2 of 10** | [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) →

## Appears In

- [Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](../Data%20Science/Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — Data Management
- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript

---

[↑ Back to top](#)