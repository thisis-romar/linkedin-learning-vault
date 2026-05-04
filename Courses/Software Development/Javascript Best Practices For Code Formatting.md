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
  - '[Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)'
next_courses:
  - '[JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md)'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":1,"total":10,"prev":null,"next":"JavaScript- Best Practices for Data"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-03
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
  - [Modern standards for your JavaScript](#modern-standards-for-your-javascript)
  - [What you should know](#what-you-should-know)
  - [Set up your environment](#set-up-your-environment)
- [**1. Why Best Practices?**](#1-why-best-practices) (4 videos)
  - [Style guides](#style-guides)
  - [Use modern deployment tools](#use-modern-deployment-tools)
  - [ESLint](#eslint)
  - [Foundational practice: Use strict mode](#foundational-practice-use-strict-mode)
- [**2. Creating Comments**](#2-creating-comments) (5 videos)
  - [Use single-line syntax for single lines](#use-single-line-syntax-for-single-lines)
  - [Multi-line syntax with leading asterisks](#multi-line-syntax-with-leading-asterisks)
  - [Include leading spaces in comments](#include-leading-spaces-in-comments)
  - [Challenge: Create JavaScript comments](#challenge-create-javascript-comments)
  - [Solution: Create JavaScript comments](#solution-create-javascript-comments)
- [**3. Using Punctuation**](#3-using-punctuation) (7 videos)
  - [End statements with a semicolon](#end-statements-with-a-semicolon)
  - [Don't rely on auto semicolon insertion](#dont-rely-on-auto-semicolon-insertion)
  - [Standardize line length](#standardize-line-length)
  - [Use commas consistently](#use-commas-consistently)
  - [Include a comma in a list of values](#include-a-comma-in-a-list-of-values)
  - [Challenge: Optimize punctuation](#challenge-optimize-punctuation)
  - [Solution: Optimize punctuation](#solution-optimize-punctuation)
- [**4. Using Spacing**](#4-using-spacing) (11 videos)
  - [Indent consistently](#indent-consistently)
  - [Space before and after operators](#space-before-and-after-operators)
  - [Use a consistent format for blocks](#use-a-consistent-format-for-blocks)
  - [Include a space after keywords and arrows](#include-a-space-after-keywords-and-arrows)
  - [Use consistent spacing before function signature parentheses](#use-consistent-spacing-before-function-signature-parentheses)
  - [Break up and indent long-method chains](#break-up-and-indent-long-method-chains)
  - [Space consistently within enclosing characters](#space-consistently-within-enclosing-characters)
  - [Space after commas, but not before](#space-after-commas-but-not-before)
  - [Limit blank space to one line](#limit-blank-space-to-one-line)
  - [Challenge: Optimize spacing](#challenge-optimize-spacing)
  - [Solution: Optimize spacing](#solution-optimize-spacing)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Modern standards for your JavaScript](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/modern-standards-for-your-javascript-25669099?u=76281980&t=0)** - Have you ever looked at someone else's code formatting and wondered why they do it that way? I created this course to show you some industry standards for writing [JavaScript](../../Skills/Software%20Development/JavaScript.md) and some approaches that I find particularly useful. We'll look at writing readable comments. We'll also dig into how to approach punctuation and spaces in a variety of scenarios. And, we'll configure [ESLint](../../Skills/Software%20Development/ESLint.md) to guide you toward using these approaches consistently. This course won't settle any long running debates like commas versus tabs, but when you're done, you'll be able to bring a thoughtful approach to the format of your code and make a constructive contribution to style choices for your projects and teams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have some experience coding in front-end [JavaScript](../../Skills/Software%20Development/JavaScript.md) including modern ES6 syntax. If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start. To familiarize yourself with modern JavaScript syntax, explore a course on ES6.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **Env Vars:** es6 (2)
> **Speakers:** - [instructor] (1)

#### [Set up your environment](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=0)** - To work along with me on the files for this course you need three applications. [ESLint](../../Skills/Software%20Development/ESLint.md), a web browser and a code editor. ESLint is a command line utility that you install using the node package manager or [npm](../../Skills/Web%20Development/npm.md). Npm is part of the node JS run time. If you don't have node installed, start by visiting [nodejs.org](https://nodejs.org) and installing the LTS version. With that installed open your terminal application and navigate to the exercise files folder that contains the files for this course. And we're going to start by initializing this directory for our use with npm. So we're going to type npm space init and press enter. It's going to ask you a series of questions and you're just going to press enter for all of them. For right now we're not concerned about the configuration here at all. So we're just accepting the default answers for all these. And when we get a new command prompt then we're all good. So now we have this directory initialized for npm and now we can install ESLint. SO, that next command is going to be npm space install space ESLint. And this will install the files that will enable you to use ESLint to the command line. We've got a warning here, and that's not a problem it's just telling us that if we're really serious about this later on we can go configure a file with some more information but for our uses for this course, this is just fine as is.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=96)** You undoubtedly already have a web browser installed in your machine and any major modern browser, Chrome, Firefox or [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) edge is fine for this course. I'll be using Firefox for these videos which includes a powerful sweet of developer tools. A number of great code editors are available both free and paid apps. Any editor that lets you edit and save plain text is fine for this course. So if you have a code editor you like such as sublime text or Adam, it's fine to use that. I use visual studio code in these videos. Which is a version of Microsoft's visual studio code created specifically for [Web Development](../../Topics/Web%20Development.md). Visual studio code is free and has [Windows](../../Glossary/Service/Windows.md), Mac and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) releases. The code is available on [GitHub](../../Skills/Software%20Development/GitHub.md) and users can submit issues there as well. I've turned on [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) wrap on my editor. If you want to do the same, just click view and then toggle word wrap. This ensures that long lines of code don't run off the screen. I've also installed a couple extensions. The ESLint extension by Dirk Baeumer enables visual studio code to highlight code that violates rules specified in a projects ESLint configuration file. Live Server by Ritwick Dey is an http server you can launch with a single click that automatically opens the current [HTML](../../Skills/Web%20Development/HTML.md) document in your default browser. This makes testing code in the browser quick and easy
>
> **[3:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/set-up-your-environment?u=76281980&t=190)** to do. If you want to learn more about anything I just used or talk about in this course, I encourage you to explore the library for a deeper dive on that topic. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (7), [npm](../../Skills/Web%20Development/npm.md) (6), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Web Development](../../Topics/Web%20Development.md) (1)
> **Tools:** visual studio (3), command line (2), firefox (2), terminal (1), command prompt (1)
> **CLI Commands:** npm (6), node (3)
> **Prerequisites:** install (4), configure (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** navigate to (1), toggle (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Env Vars:** lts (1)


### 1. Why Best Practices?

[↑ Back to Table of Contents](#table-of-contents)

#### [Style guides](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=0)** - [Instructor] If you've already watched one of my other courses on [JavaScript](../../Skills/Software%20Development/JavaScript.md) best practices, you may already have the background under your belt. If so, feel free to skip ahead to Chapter Two. If this is your first time exploring best practices, it's useful to understand where they come from, and that's style guides. A style guide is a set of agreements on how to write code for everyone working on a common code base, whether that's on an organizational level, a project level, or even a specific repo. A style guide often combines approaches that developers have found useful in working with that code base, with choices that developers have made about how to build and organize that code. Although guidelines can be project-specific, they may also be drawn from broader, industry-wide understandings about the best approach to certain aspects of building code, known as best practices. Some best practices may be nearly universal. For instance, most every developer agrees that using consistent indents is helpful, both in building and reading code. However, many best practices come with trade offs. As a result, managers, project leaders, or groups of developers may need to choose which approach is best for a specific code base. For instance, modern JavaScript provides an almost overwhelming range of options for creating functions. When working on code collaboratively, does it make more sense to use a function declaration, or an expression with let or with const?
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/style-guides?u=76281980&t=95)** Maybe an arrow function, but with let or with const? And if you're using a function expression, should it include a lexical function name, to help with debugging? A style guide, based on best practices, does a couple things. First, it keeps you coding, rather than needing to break your flow while you try to balance the options and choose a syntax. It also ensures that the code you write interacts with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code base, in a particular way. For instance, defining a function using const ensures that it can't be erroneously redefined. As you build your knowledge of best practices, keep in mind there's often no right answer. So it can be useful to understand the trade offs. Different projects may make different choices that work best for a specific team, architecture, or goal. The Airbnb Style Guide, is one of the most widely referenced style guides among JavaScript developers. Another influential JavaScript style guide, is the [Google](../../Glossary/Service/Google.md) Style Guide. Many best practices can and do change over time. This is especially true in the modern JavaScript landscape, where new features are regularly introduced as optimized replacements for previous practices. So staying on top of changes in popular style guides, as well as keeping up with other style guides that colleagues or developers you respect may be referencing, can be helpful in ensuring that your code reflects up-to-date formatting practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Use modern deployment tools](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=0)** - [Instructor] In the early days of [JavaScript](../../Skills/Software%20Development/JavaScript.md), the code a developer wrote was the code that was executed in every browser, or other user agent. Over time, JavaScript evolved and added new features. However, because not every user was using the newest version of a browser, developers had to write code targeted at the lowest common denominator. That is, the browser with the fewest modern features that still maintained a critical mass of users. This meant that developers were constrained from using the newest features, or had to write and maintain multiple versions of the same code. The modern JavaScript workflow has resolved this issue by incorporating transpilers. A transpiler is a utility that accepts [Java](../../Skills/Software%20Development/Java.md) Script code written using modern features, and returns code that does the same job as the original, but is written without modern features. Babel is an example of a popular transpiler for JavaScript. Including a transpiler in your deployment process means that you can take advantage of modern and even cutting edge JavaScript features without worrying that your code won't perform as expected for users of older browsers. Not every modern JavaScript feature can be transpiled however. But for those that can't, developers use another tool, the polyfill. A polyfill is a library that you include with your code at deployment. Because a transpiler can't rebuild some code for older browsers,
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-modern-deployment-tools?u=76281980&t=92)** the job of a polyfill is to instead add the functionality of the new feature to the older browsers at runtime. Promises and [Fetch](../../Skills/Web%20Development/Fetch.md) are a widely used example of a feature that requires a polyfill for backward compatibility. With transpiling and polyfills in the developer toolbox for JavaScript developers, the group that maintains JavaScript standards has been free to innovate without worrying about proposed changes never being widely available. As a result, many new features of JavaScript serve to help developers write cleaner, more manageable code, rather than to add new features or capabilities to the language. It's due to the widespread use of Babel and polyfills that many modern JavaScript best practices involve use of these developer-focused features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (10), [Java](../../Skills/Software%20Development/Java.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [ESLint](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=0)** - [ESLint](../../Skills/Software%20Development/ESLint.md) is a utility that flags deviations from selected best practices right in your editor as you code. ESLint is widely used by [JavaScript](../../Skills/Software%20Development/JavaScript.md) developers to catch and correct issues before testing and deploying. Although ESLint allows you to load a default set of rules, one of it's strengths is it's configurability. It's unlikely that you'll want to enforce every one of the default rules in your code or that you'll make precisely the same choices as the defaults. For this reason it's important to understand how to configure ESLint. Otherwise, using it can be an exercise in frustration, as you have to ignore it's warnings when they're not relevant to your preferences. With ESLint installed I could run a configuration utility. However, this builds out a package.[JSON](../../Skills/Web%20Development/JSON.md) file in associated modules that I don't need here. So instead, ESLint supports rules written using JavaScript itself, as well as yamo or Jason. I'm going with JavaScript, so the file is .ESLintrc.js. The file contains a module.export statement and within that, a couple keys. One is the ENV or env key, which specifies the environment I'm using it in. Because I'll be using es6 santacs in my code, I specify the es6 key with a value of true within the env object. The other key is named rules
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/eslint?u=76281980&t=93)** and has an object literal as it's value. Within that object I can simply add key value pairs that are rule names in the corresponding values I want for them. Those rule names are specified in the documentation at [ESLint.org](https://ESLint.org). In each video in this course, I'll add the corresponding ESLint rule if one exists. In general, you can configure a single .ESLintrc.js file at the root directory of the files you want it to apply to. For this course, I'll have a different version in each folder, as I'll be adding rules to it as I go along. Note that .ESLintrc.js starts with a dot. This marks it as a configuration file to your operating system. These are commonly referred to as dot files. You may find that this file is not visible in your file manager even though you can see it in your editor. This is the default configuration for both Mac and [Windows](../../Glossary/Service/Windows.md). As long as you can see the file in your editor, you can open it and save changes. If you wanted to display hidden files in your operating system like I have here, I recommend going to [stackoverflow.com](https://stackoverflow.com) and searching for recommended steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (8), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **File Paths:** eslintrc.js (3), package.json (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [eslint.org](https://eslint.org) (1), [stackoverflow.com](https://stackoverflow.com) (1)
> **Prerequisites:** configure (2)
> **Env Vars:** env (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Foundational practice: Use strict mode](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=0)** - [Instructor] No matter which other practices are in your style guide, or what modern [JavaScript](../../Skills/Software%20Development/JavaScript.md) features you may be using, your first step when writing code should be to ensure that you're working in strict mode. Indicating that code should be interpreted in strict mode specifies to user agents like browsers that they should treat code literally as written, and throw an error if the code doesn't make sense. Without strict mode turned on, user agents often go through a series of modifications to problematic code in an attempt to get it to make sense. In the start file for this video, I'm going to create and then log a variable. My idea is to build an app to get a user's location and identify nearby events. And for a placeholder location, I'm going to create a const called city, and set that to Chicago. And then I'm going to console.log that. And I'm going to save that file, and then switching over to my [HTML](../../Skills/Web%20Development/HTML.md) file for this video, I'm going to start my live server, but you can also just open the HTML file directly in your browser. I'm going to open my browser console, and there we go, I've got Chicago logged to the console, which is the value of the variable that I console.logged. Now going back to the editor and to my JS file, what if I accidentally failed to declare my variable but just set a value?
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=92)** So for instance, if I took the const out here, and just said city equals Chicago? If I save this and I go back to my browser, and I reload my page, I can see Chicago is still logged. That's because the browser is attempting to tease out meaning from my malformed code. So the browser figures that even though I didn't declare this variable, I'm setting a value for it, so I must have just meant to declare it. On the surface, this can seem like a fine thing, and indeed, working outside of strict mode makes it possible for people to get their feet wet with JavaScript code without having all the details quite nailed down. However, as a developer, I don't want to leave a bug in my code, because I know it could come back and bite me later on, and I also just want to write good code. And that's where strict mode helps out. So in my editor, I'm going to add a new first line to my file, and that's going to be the string use strict. Now this is technically just a string, and that's the magic that prevents it from throwing an error in older browsers. They'll just see a string here and move on in the code. But modern browsers recognize the string as a statement to switch into strict mode. And saving this and checking back in my browser, now I'm seeing a reference error. And this is what I want when I'm trying to work with a variable that I haven't defined. And so the console is pointing me to line three, so going back to my code,
>
> **[3:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=186)** I'm just going to add const. Save that. Back in the browser. Once again I have the value of my variable logged and I don't have an error. Although strict mode may seem like it creates more work on the front end, it's actually a really good trade-off, because it saves more headaches later on as you weed out bugs in the code you write. So make sure the first line in any JavaScript file you create is use strict. Now I can also enforce this in my editor using [ESLint](../../Skills/Software%20Development/ESLint.md). So opening .eslintrc.js, within the rules object, I'm going to add my first key, and that's going to be strict. Now this rule takes an array of two values. So I can look up the documentation on [eslint.org](https://eslint.org) to read more about this rule. Now the rule takes an array of two values. The first is the severity of the issue if it arises, which can be off, warn, or error. And the second is when strict mode is required, which can be only in functions or globally. Now I want this to trigger an error, and I want to require a single global strict mode declaration in my code. So I'm going to specify an array. The first value is going to be the string error. The second value is going to be the string global. And then saving that, I'm going to go back to my app.js file,
>
> **[4:40](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/foundational-practice-use-strict-mode?u=76281980&t=280)** and I'm going to comment out my use strict statement. So this is just modeling what this file would be like if it didn't have a use strict statement in it. And immediately I can see the file name in my explorer bar turns red, and I get these red squiggles underneath all of my code. These are both a result of the error setting, and if I hover over that underlined code, I see the error message, which indicates that I've chosen to enforce the global form of use strict. So if I go up here and uncomment my use strict statement, all those errors go away because now I'm conforming to that rule that I set in my eslint configuration file. And I'll just save those changes. Including this use strict statement will work in concert with eslint to ensure that both the editor and the parser will prompt me about any lazy [Coding Practices](../../Skills/Software%20Development/Coding%20Practices.md), and the result is going to be an increase in the overall quality of my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Coding Practices](../../Skills/Software%20Development/Coding%20Practices.md) (1)
> **CLI Commands:** make (3)
> **File Paths:** eslintrc.js (1), app.js (1)
> **Env Vars:** html (2)
> **Cross-References:** go back to (2)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)


### 2. Creating Comments

[↑ Back to Table of Contents](#table-of-contents)

#### [Use single-line syntax for single lines](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=0)** - [Instructor] [JavaScript](../../Skills/Software%20Development/JavaScript.md) has two different syntaxes for creating comments. To create a single line comment, you type two slashes. Anything after those characters in that line is considered a comment and is ignored by a parser. You can theoretically create a single line comment that's as long as you want and it's readable if you turn on [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md)-wrap in your editor. However, it's standard practice to limit line length in code to ensure that word-wrap isn't needed to view content. For longer comments then, you need to use multiple lines. Multiple line comments have their on syntax, starting with slash star and ending with star slash. Anything enclosed by those sets of characters is ignored. In theory, you could simply mark each line of a multi-line comment as a single line comment. This would have the same practical effect as creating a multi-line comment. However, there's a subtle distinction. Using multiline comment syntax indicates clearly, from the start, that the following lines are part of a multiline comment. Using the appropriate syntax also provides formatting that makes it easier for you and other developers to quickly see how long a multi-line comment is, where it starts, and where it ends. By contrast, a set of single line comment markers can more easily blend into the surrounding code. I'm going to create a multiline comment at the start of my app.js file. Now, I want the use strict statement
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=93)** to come before any statements in my code. But it's pretty common to include a comment at the start of the file, giving basic information about its contents. And because a comment is ignored by parsers, putting it before the use strict statement isn't a problem. So, I'll add my comment just above the use strict statement. So, I'll add my name, and the name of the course, (keyboard typing) and "[LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning". To make this a multiline comment, I'll add a blank line before and add slash star, and then on the line after, I'll add star slash. And then another blank line. And I'll add one more touch. I'll indent the text in that comment to make it stand out a little bit. And now I can see really clear delineation between the start and the end of the comment. I can enforce this style with [ESLint](../../Skills/Software%20Development/ESLint.md) as well. Using the multiline comment style rule. In my eslintrc file, I'll add a new key value pair to the rules object. The name is multiline, dash comment, dash style. And notice after I've typed that, that I've got a different coloring going on here than I did for my other key. I've also got and error here, 'cause it's expecting a comma, so, I have hyphens in my key name here
>
> **[3:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=189)** and in order for that to work as a key name, I need to quote it so that it's parsed correctly. So, that results in a key coloring in my editor that's different from the other key which isn't quoted, but they're both interpreted the same, as keys. So then, for the value of this, I specify an array. And first, I want severity level, which is error, because I want the editor to throw an error. And then, I need to specify which of the styles I'm using. So, there's a set of key words for different styles for multi-line comments and I've chosen bare-block, which I just using slash star at the beginning and star slash at the end and that's it. So, put comma at the end and we'll save those changes. And then, back in my app.js file, let's test this out. So, I want to take out the multiline comment formatting. In visual studio code, I can select all those lines and press Alt shift A, on a Mac to turn that back into plain text and then, if I select all those lines, I want to see what happens if I format this as a series of single line comments. So, in visual studio code, I can say command slash on a Mac and it's a comment, I can see in green but I also have error underlining and when I hover over that, it very specifically mentions the multiline comment style rule.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-single-line-syntax-for-single-lines?u=76281980&t=283)** So, I'm just going to go ahead and undo the last two things I did; get back to that multi-line comment style and now, I don't have that error anymore. So, I'm enforcing a code style that ensures that my multi-line comments stand out more clearly from the codes that surrounds them. And that helps me, whenever I work with my code, and it helps other developers that might need to read through it, as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **File Paths:** app.js (2)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard typing) (1)

#### [Multi-line syntax with leading asterisks](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=0)** After the opening slash star of a multi-line comment, every character is treated as part of the comment. This means line breaks, spaces, and other characters can be used to format the appearance of the comment and are not treated as control characters by a parser. When you create a multi-line comment with only the comment content between the opening and closing character sets, this is a style known as bare block. Another comment format for creating a multi-line comment is known as starred block. In this format, each line of comment is preceded by a space, an asterisk and another space. This style effectively creates a line to the left of the comment content, underscoring visually the fact that this is a comment and making it stand out even more clearly from the surrounding code. I can update my eslintrc file to specify that I want to use a starred block. I already have a multi-line comment style rule, so I'm just going to update my style choice from bare block to starred block. I'll save that and then switching back to my app.js file, my multi-line comment has an underscore and my editor is expecting a starred block. So I want to add stars that line up with the existing star at the beginning, so one space to the left, star, got that one space to the right, I'm going to do the same thing on the next line, and there, and then my final line still needs to be a line,
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/multi-line-syntax-with-leading-asterisks?u=76281980&t=97)** that asterisk has to be moved over one space, so that I have that consistent vertical line connecting all the asterisks. Now my arrow formatting is gone, I have a valid starred block. Editors also offer automatic starred block formatting. So I want to add another starred block and in Visual Studio Code I can type slash star star, and it automatically get a space and the closing characters, so just like when I'm adding a block in my code, if I press Enter here, I get a new line between the starting and ending characters. That new line is prefaced with a space star space, so the formatting of the block is already there, I can type whatever I need to type, (keyboard clacking) and when I enter a new line, that gets the formatting as well. (keyboard clacking) And notice that the opening line in the starred block that's generated by my browser contains two asterisks, but remember, everything after that opening slash star is considered a comment, including that second star. So there's really no difference here whether I have that star or not, it all works the same, and having that second star there just tells my editor I want to create a starred block. By updating to starred block, I have made my multi-line comments even more legible for me and for any other developer who reviews my code.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (2)
> **File Paths:** app.js (1)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)

#### [Include leading spaces in comments](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=0)** - [Instructor] Spaces are optional in comments, but you can include them to increase the legibility of your comments. In particular, it's a common practice to include a space between the starting comment characters and the commented code. I can already see that in the format for my start block. I'm going to add a single line comment before my variable just to mark this as a section that contains variables. So I'll add a blank line to keep some space from U strict, and then I can just do a single line, slash slash, and variables. Now at a glance, it takes a little work to see where the slashes end and the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) variables begins. But if I click in here and stick a space after the second slash, it immediately becomes easier to recognize that as a comment containing the word variables. [ESLint](../../Skills/Software%20Development/ESLint.md) contains a spaced comment rule that let's me specify whether comments should include spaces. The documentation makes it clear that you can get fairly detailed for this rule. It let's you specify exclusions and situations where spaces are and aren't needed. I'm going to go with a more basic setting for my needs, which is to require a space after the opening comment characters. In me ESLint RC file, I'm going to add a new line, and the rule name is spaced-comment, and for the value I'll specify an array, first containing how I want the issue treated, which is as an error, and then the style I want applied
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-leading-spaces-in-comments?u=76281980&t=95)** which is the string, always. Save that and then switch back to my app.js file, and if I take out the space before variables in that comment I see the error indicator. And when I hover, I can see a note that specifically references the rule that I just put in place, and if I put that space back in, it fixes it right up. Note that the space comment rule also applies to multi-line comments. Because I'm already enforcing the starred block style, I automatically have a space enforced after the star at the beginning of each line. But if I didn't have starred block enforced, I'd also have to be sure to include a space before the content of each line of my comment. Now I'm enforcing spaces in my comments which will keep my code even more legible for me and for other developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (2)
> **Warnings:** note that (2)
> **File Paths:** app.js (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create JavaScript comments](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-create-javascript-comments?u=76281980&t=5)** - [Instructor] Ready for a challenge? The start files contain the first few lines of code to create a grocery shopping app. Edit the files to implement and enforce best practices for [JavaScript](../../Skills/Software%20Development/JavaScript.md) comments. Your code should also use and enforce strict mode. You'll need to make changes to both the script.js and eslintrc.js files. This should take you about five minutes. When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** script.js (1), eslintrc.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Create JavaScript comments](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=0)** - [Instructor] The challenge consists of enforcing appropriate single line and multiline syntax for comments, enforcing leading spaces and also Strict Mode. So the first thing I want to do is start by building out some rules, because building out the rules first will help me then see in my editor what needs to be changed. So, my ESLintrc File has no rules right now. I know I want to enforce Strict Mode, so I'm going to start by adding Strict, and that value is an array which starts with Error and then Global. Then I want to specify what my multiline comment style should look like. So that's Multiline-Comment-Style and an array which is Error and we want to use Starred-Block to make this multiline comments really easy to read. And finally, I want to enforce leading spaces in my comments. So that's the Spaced-Comment rule with a value of an array which is Error and Always. So save my ESLintrc, immediately I can see all of the red being indicated for my file, my Script.JS file.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=93)** Switching over there, everything is underlined as an error. And so, first off, I know I want to make sure I have Strict Mode going on. So after this initial multiline comment, before the single line comment that seems to be connected with this code down here, I'm going to add Use Strict, as a string, on it's own line. And that gets rid of the error that was down here, because I, my code was not being processed in Strict Mode. Then I can look up here at the errors and there's two of them. I have a multiline block comment using consecutive line comments and I'm also missing spaces in those single line comments. So I'm going to select that all in my editor, Visual Studio Code, I can do on my Mac a Command Slash to remove those single-line comments and then I'm going to start by creating a bare-block-comment. To do that, I need to add a blank line before my comment and then I'm selecting everything from that blank line before to the blank line after. And doing Alt + Shift + A on my Mac which gets me those opening and closing characters on the surrounding lines, rather than running into the beginning or ending lines of a content. And then, if I check the error again, now we have the Expected A Star issue. So creating a new Star-Block, when the editor supports that, is a lot easier than converting an existing one,
>
> **[3:10](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-create-javascript-comments?u=76281980&t=190)** but we can do it. This one's not that long. So, again I need to indent with a space so that the Star that I type lines up vertically with the Star in the first line and then one more Space before the content, and I'll just keep doing the same thing. I can even copy that pattern, Space Star Space copy it to the clipboard, and just Paste it at the start of each line within my miltiline-comment. And now I have a Starred-Block-Comment and I don't have any error underlining here. I'm going to create a blank line just to separate visually that initial comment from the Use Strict statement. Then I have one more issue and if I hover that, this comment is violating my Spaced-Comment rule because I need a Space after those opening characters in a single line comment. So I can click after the second slash, press Space, and now that content is separate from the comment characters. And, I have fulfilled all of the requirements of this challenge, and my code is a lot easier to read.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **File Paths:** script.js (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Using Punctuation

[↑ Back to Table of Contents](#table-of-contents)

#### [End statements with a semicolon](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=0)** - [Instructor] You're probably used to seeing most lines in [JavaScript](../../Skills/Software%20Development/JavaScript.md) code ended with semicolons. Although not strictly necessary, it's a best practice to include a semicolon at the end of every expression, such as a variable declaration, or a return statement. Some developers write JavaScript without semicolons. In a lot of cases, it's obvious to the parser where one statement ends, and the next begins, but there are some corner cases that can trip up even experienced developers. As a result, including semicolons is a simple way to make it clear where you intend your statements to end, and to illustrate the structure of your code for other developers who might need to work with it as well. JavaScript statements that end with a code block, such as an if/else block, don't need semicolons at the end, because the closing curly brace terminates the statement. But as a rule, you should terminate any statement that doesn't end with a curly brace with a semicolon. And note that even though an object literal ends with a curly brace, it's not a block, it's data. An expression with a function literal on the right needs to end with a semicolon as well. My app.js file includes code for checking the user's geolocation, so my app can start with a nearby view. But if geolocation isn't available, or if a user declines to share that data, we can use fallback data from the user's account when they set it up. So I have user preferences, which would come from my back end, saved as an object.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=95)** And then conditional code for checking geolocation. I've written this without semicolons. You can still get the basic structure of the code from my indents and line breaks, but semicolons will ensure the parser understands exactly what I intend. So switching over to my eslintrc file, I'm going to add three rules. First is semi, and since it's a single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), I don't need quotes around it. And semi specifies that semicolons can't be omitted where required. And the value for this is an array, starting with error, and we're just going to say we want them always. I also want to enforce readability by specifying no space before a semicolon. That rule is semi-spacing, and I can simply say error, because I'm saying yes, I want semi-spacing. And I need a comma there, not a semicolon. And finally, I can set a flag for no extra semicolons, just to keep things clean. So [ESLint](../../Skills/Software%20Development/ESLint.md) has a no-extra-semi rule, and there again I can just say error, which means that if there's an extra semicolon, it will flag an error. So I saved those changes. I immediately see that my editor is flagging some issues with my app.js file. And so switching over here, you can start with that use strict statement,
>
> **[3:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=189)** I hover over that squiggle, I see the missing semicolon, referencing the semi rule, and I add that, and that fixes that one. And notice that I have an error at the end of my const statement here, after the curly brace, but down after my if/else construction, there's no error flagged. And if I add a semicolon after the else, I get a warning, because that's an unnecessary semicolon, which I specifically said I don't want. So again, I don't use a semicolon after a code block. I'm going to take that out. But I do up here after an object literal, so I need to add a semicolon there. And then I just need to add semicolons after each console.log statement, here and here. And also here. And just based on the sizing on my screen, that terminal semicolon is going onto the next line, but we can see that's word wrap, because there's no new line number here in my editor. So this semicolon's just at the end of this console.log statement. And then, finally, I have one more squiggle here, because this is the end of my getCurrentPosition method. So I need a semicolon to terminate that statement as well. And then I want to test out the other rules. So if I add a space before a semicolon, I can see that I get a squiggle, and it says unexpected white space right there. I can take that out, and I can also,
>
> **[4:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/end-statements-with-a-semicolon?u=76281980&t=285)** what happens if I just put a second semicolon? It shouldn't bother anything. But again, I get an unnecessary semicolon message. So I'll take that out, I have no more errors, I can save that. And now my code uses semicolons consistently, but doesn't include them where they're not needed. And that is going to help me write code that parses as I expect, and that's readable for other developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **File Paths:** app.js (2)
> **Analogies:** such as (2)
> **Warnings:** note that (1), warning (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** getcurrentposition (1)
> **Tools:** terminal (1)

#### [Don't rely on auto semicolon insertion](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=0)** - [Speaker] From a technical standpoint [JavaScript](../../Skills/Software%20Development/JavaScript.md) doesn't absolutely require semicolons. Indeed, some developers write JavaScript without semicolons, relying on automatic semicolon insertion which is exactly what it sounds like. JavaScript's built in process for identifying a logical end of a statement and the beginning of a new one based on context. However, it's best not to rely on this mechanism, because it can have some unintended consequences. The classic example of where automatic semicolon insertion can behave differently than you want is when you use the return statement. If a return statement is followed by a line break parsers will treat it as as if it's followed by a semicolon. This means any continuation on the following line, such as a value to be returned will instead be treated as a separate statement. In the app.js file for this video lines 10-11 are meant to be a single statement. It's already clear from the editor here that line 11 is unreachable. I can tell that because my editor grazed the code out a little bit and when I hover over that I can see unreachable code detected. And the return statement is also marked with an [ESLint](../../Skills/Software%20Development/ESLint.md)(semi) error for a missing semicolon, because I have a semi rule set in eslintrc file. But just to test things out what should happen here when I actually execute this code is that I enter a value, the makeLowerCase function converts my entry to lower case
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=96)** and it gets added to userPrefs with the key setting. So, I can open up my index.[HTML](../../Skills/Web%20Development/HTML.md) file. I'm going to open that up in my browser and I get a prompt . I'm going to enter Urban with a capital U. Click OK. And then opening up my console I have an error about unreachable code and then on line 17 that setting value is logged and the value is undefined. And that's because the function returned without a value, due to that premature line break. If I go back to my code and I remove that extra line break. I can save that, return to my browser. Prompted again and type in Urban with a capital U. And now I get urban logged to the console that has been run through the makLowerCase function and it's all lower case. So, everything now works as expected by taking out that unexpected line break. ESlint supports a no-unexpected-multiline rule. This rule looks for omitted semicolons in situations where consecutive lines could be treated as single statement. So, the reverse of the issue with the return statement. In my eslintrc file I'll add that rule. So, it's no-unexpected-multiline
>
> **[3:12](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/don-t-rely-on-auto-semicolon-insertion?u=76281980&t=192)** with a value of error. ending with a comma. So saving that, going back to app.js and I have a couple flags down here. These are both situations where I included a line break in code that shouldn't have it. So, both of these situations are parsed without automatic semicolon insertion, and to make that clear, I'm just going to remove those line breaks. There Then here And that makes the error flags go away. And I'm going to save this and I'll go back to my browser and retest that. And again the code is still working, nothing has changed. So, again it's possible to write JavaScript without semicolons, but it comes with some perils and to avoid that. You can make sure to terminate every statement appropriately and we can use ESlint to help us out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **File Paths:** app.js (2), index.html (1)
> **Code Identifiers:** makelowercase (1), userprefs (1), maklowercase (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Non-Speech:** (typing) (2)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)

#### [Standardize line length](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=0)** - [Instructor] Aside from automatic semicolon insertion, white space is not significant in [JavaScript](../../Skills/Software%20Development/JavaScript.md). As a result, you can theoretically write lines of code of any length. And indeed one of the ways that Minification reduces character count is by reducing code to a single line. However, when formatting code for human usability, limiting line length is a widely adopted practice. Shorter lines enable you to fully view each line without wrapping or scrolling. In addition, breaking up a long statement across multiple lines when combined with indentation, can help you parse what the entire statement is doing as well as any steps involved in the process. Code is generally displayed in a fixed width font, meaning that each character takes up the same amount of space on the line. For this reason it's common to measure line lengths in characters. Common line lengths include 80 or 100 characters. In my app.js file, a few lines look long, but it's hard to tell just how long they are. There are a few tools that can help us manage this. First, [ESLint](../../Skills/Software%20Development/ESLint.md) includes the max-len rule, which lets you set a maximum length and trigger an error when a line exceeds the number of characters you specify. In my eslintrc file, I'm going to add a max-len key. For the value, I specify an array,
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=95)** indicating I want to trigger an error message, and then for the condition I use an object with a single value, the string 'code', and the maximum number of characters, and I'm going to use 80. There are a number of other configurations you can add here. For instance, if your code includes long strings you may not want to break those up over multiple lines, so you can exclude those from the rule. For now, I can save these changes and return to my app.js file, and I see an error indicator here, and when I hover over it, it tells me my line is too long. Now by default I wouldn't even be able to see the entire line of code here because it's so long. So if you haven't already, I recommend turning on [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) wrap, so code that's wider than the browser window will automatically wrap to fit. In Visual Studio Code, I access that by clicking view and then toggle word wrap. And so notice if I turn that off I only seem to be getting this one very long line, and if I toggle it again, I've got it back. Now notice that the line number doesn't increment until there's a line break. So this is a way I can tell when something is really long and being wrapped, or whether it's actually code that's broken up over multiple lines in which case I would see multiple line numbers.
>
> **[3:08](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=188)** Now what would be useful at this point would be some help figuring out just where the line needs to end to help me think about how I might break it up, and here's where the editor itself can help. Every modern editor, Visual Studio Code, Sublime, and Atom, every one supports adding rulers to the editor window to show the length of a line of a given number of characters. In VSCode I'm going to open up my preferences, so that's, clicking on my Mac, I'm clicking code, preferences, and I'm going to go to settings. And then I can search the settings, so I'm going to search for ruler, and then scrolling down, I'm looking specifically for Editor:Rulers. And here instead of just entering values, I need to go to my settings.[JSON](../../Skills/Web%20Development/JSON.md) file, so I'll click that link and open that up. Now I already have a few configurations here, but you may only have one, or two, or none. I need to specify a rule with the name editor.rulers, so... adding a comma after my previous last line, because this is json, and I have to use double quotes. So editor .rulers. And a colon. And I include an array as the value, containing one or more line lengths in characters. So for now I just want 80, so I'm going to do an array with a single value of 80.
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=283)** Remember that this is a json file, so I cannot end my line with a comma. I will save that change and then I'll go back to my JavaScript file, and I do not see the ruler on the screen. I'll try reducing my font size. Actually, the first thing I'll do is hide my explorer bar over here. There we go. And now I can see this ruler over here, at 80 characters, which gives me some idea of where the lines get too long. And so now I can break up my code across multiple lines. So with a [Fetch](../../Skills/Web%20Development/Fetch.md) statement I can just go ahead and put those chain methods on their own lines. So I will break it .then, and I've got an if statement here so that could use its own line. Contents of the if statement... That closing curly brace, an else statement... Another closing curly brace, and I've got another chained .then, and a chained .catch. And so I've gotten rid of that error, I can see visually because of my ruler in my editor, that all of my lines of code are beneath 80 characters in length. And I have also gotten rid of those ESlint errors, so that's another way of verifying that.
>
> **[6:18](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/standardize-line-length?u=76281980&t=378)** And so, using that ruler along with those rules helps me to break up my code into manageable line lengths and helps me verify that I've done it when I've done it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Tools:** visual studio (2), sublime (1), atom (1)
> **UI Navigation:** toggle (2), go to (2)
> **File Paths:** app.js (2), settings.json (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Use commas consistently](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=0)** - [Instructor] Several types of [JavaScript](../../Skills/Software%20Development/JavaScript.md) statements uses commas to separate sequential items. For instance, elements in a array literals are separated by commas, as are key value pairs in object literals. When a list of values is too long for a single line, it's common to break the list up by putting each item on it's own line. This means that the commas are accompanied by line breaks. Some developers use commas at the end of each line, while others place them at the start. Whichever you choose, consistency is important. Both to make your code more readable and to enable you to catch errors, more importantly, omitted commas. In my location app, the [Fetch](../../Skills/Web%20Development/Fetch.md) request can take a number of parameters using an object literal. The values don't all fit in a single line so I already have an error here because I've specified a maximum line length of 80 characters. So I want to break that object up, and one way to do this is to use the comma first style. So I have my opening here for my object and I'm going to put the first key on it's own line. And then, I'm going to start a new line with this comma, so that my second key is on it's own line. Then I can put my ending for that object literal on it's own line.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=94)** And to make this all line up, I probably want to indent here just so that all the keys and the closing punctuation are all vertically aligned, meaning that if there's an issue with a missing character or a missing space, it's immediately obvious. My preferred style though is comma last. I like to see that values first and so I'm going to switch to that. And so that's really just going to mean taking away that line break there and instead, adding a line break here and likewise, taking away my line break before that comma and just moving those closing character onto their own line. So here, the key names are front and center. [ESLint](../../Skills/Software%20Development/ESLint.md) lets me enforce a comma style using the comma style rule. So in my ESLintrc file, I'm going to add a new line at the end of my rules object and I'm going to specify the comma-style key with a value that's in array, staring with error and then the key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) last, meaning that I want to enforce a comma-last style. And notice also that I've already been implementing this style in my ESLintrc file. So, all of my key value pairs end with a comma rather than all of these lines starting with a comma.
>
> **[3:09](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-commas-consistently?u=76281980&t=189)** And then switching back to app.js, if I take out this comma, add it to the beginning of this line instead, I get a squiggle here and it specifically says, "Comma should be placed last." So I can undo that change and now I'm all good. So again, the comma style you pick is a matter of preference but it's important to be consistent with you commas either starting or ending your lines of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** app.js (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Include a comma in a list of values](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=0)** - [Instructor] Lists of values like array elements, key value pairs and object literals, and function arguments require comma's to separate values. No comma is required at the end, but when you're using a multiline format for a series of values, and you're using a terminal comma format rather than putting commas at the beginning of the line, then it's a best practice to include a comma after the last item as well. There are a couple of solid reasons for this. First, it makes it harder to omit a comma between items when you add it to your list, because the comma that used to be at the end, automatically becomes the separator before the new item. The terminal comma also makes diff's cleaner, as you don't see a separate deletion and insertion for the added comma. Instead, the only change is the newly inserted line. In the [Fetch](../../Skills/Web%20Development/Fetch.md) code in my app.js file for my local events app, I'm specifying an object containing a couple of properties. I need to add another one, which is the Api key. Now, I can add a new line, and simply add that with a placeholder for now. So, that's X-Api-Key, the value, and I'm just going to use INSERT-API-KEY-HERE as the value, but notice that I failed to include
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=94)** a comma after the previous line, so the editor is already flagging an error in my code here, and adding that comma after the url value, fixes things. So, including a comma at the end of this line, is going to keep me from forgetting that connecting comma when I add future key value pairs here. [ESLint](../../Skills/Software%20Development/ESLint.md) supports setting a rule for trailing commas in object literals. The rule name is comma-dangle. In my eslintrc file I'll add a new line, and I'm going to add comma-dangle, and the value is an array with a string error, and then the style name just chosen from a list of defined style names for this rule, the one I'm using is always-multiline. I'm not so concerned about commas at the end of a set of values that all fit on a single line, it's when I need to add a line break that I'm most likely to forget the comma. So, I've been including terminal commas in this rules list in eslintrc, and I'll add one here. Then saving and returning to apa.js, and I can check things out here. If I take out that terminal comma, I immediately get that squiggle, and it calls out the comma-dangle rule, saying that I'm missing a trailing comma,
>
> **[3:06](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-comma-in-a-list-of-values?u=76281980&t=186)** and so I'll add that back. Now, I'm inoculated against forgetting a separator comma, if I need to add another key value pair after this one down the road, and my get diff's will be cleaner as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Tools:** terminal (4)
> **Env Vars:** insert (1), api (1), key (1)
> **File Paths:** app.js (1), apa.js (1)
> **Definitions:** is an  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Optimize punctuation](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-punctuation?u=76281980&t=5)** - [Instructor] Ready for a challenge? The start files contain code for a grocery shopping app. Edit the script.js file to implement and enforce best practices for punctuation in [JavaScript](../../Skills/Software%20Development/JavaScript.md) including semicolons, line length, and commas. This should take you about five minutes. When you're done, join me in the next video, and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** script.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Optimize punctuation](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=0)** (upbeat music0
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=5)** - [Instructor] This challenge was to enforce best practices around punctuation and line length in this [Java](../../Skills/Software%20Development/Java.md) script code. So the way I like to approach these is to start with my eslintrc file. Get the rules in place that will highlight issues with my existing code and then I can work on it from there. So I have several [ESLint](../../Skills/Software%20Development/ESLint.md) rules that will help me identify issues with this code and enforce those best practices. First off is just requiring semi-colons, and that's the semi rule. Don't even need quotes on that. And that is an error, and I want it always. And then I also want to make sure that I don't have a space before my semi-colons So that's semi-spacing and that value is simply error. And I want to disallow extra unneeded semi-colons, so that's no-extra-semi and error. Then in terms of my lines, I want to make sure that I don't have unexpected multilines, so that's the no unexpected multiline key.
>
> **[1:33](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=93)** And it's value is simply error. Then I want to enforce a max length on my code. And that is the max len rule. And that value is an array. First we're going to specify that it should be considered an error. And then I need an object. But I only need one key value pair here. It's code with a value of 80. And so that's 80 character lines. And then finally, I just want to deal with my comma styles. So first off, the comma style rule. And that's an array, with error, and last to specify that I want my commas to terminate the lines rather than to start them. And then comma dangle. And that's an array, with error, and then always, multiline, specifying that whenever I have a multiline series of values, I want to make sure that the last one has a terminal comma even though it doesn't need it. So I'm going to save those changes to eslintrc and then switch back to my java script file. You can see here I've got seven errors flagged. And so just starting from the top, I can see that my use strict statement is missing a semi-colon. That's easy enough to fix.
>
> **[3:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=187)** I can see here that I'm missing a semi-colon at the end of my const. And I fix that, but notice that the error doesn't go away here in the const because it also has an overly long line. So since I'm fixing those semi-colons, let's just go and take care of those` 'cause I got a few more of those for sure. So this is missing a semi-colon here in the cart variable. We'll get back to the return statement, but here the for each statement is missing a semi-colon, so we'll add that. And then this cosole.log statement, don't even have to look. I know that's missing a semi-colon. So now I'm down to two errors. So first off, I've got an overly long line here. So I'm going to break up my array onto multiple lines. And I'm going to start that right after the opening punctuation. So I'll just put in a line break after each comma at the beginning of each value. Because that is the style that I specified. And then, I'm going to break after that final value before the terminal punctuation. And now notice I get an error. And that error is pointing out that I'm missing my trailing comma. So, great to notice that that's being called out. Add my comma in, and now that line is no longer too long. It fits within that 80 character limit. I've got my list broken up on multiple lines using that terminal comma style. And I have my trailing, dangling comma at the very end.
>
> **[4:41](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-punctuation?u=76281980&t=281)** And then, I can see already I've got my unreachable code here after my return statement. And if I hover over the return, it's missing a semi-colon. So that's assuming that return is just a statement on it's own line. But I know that I just need to take out that line break here. So that now this code is reachable. This is an entire statement, and I've gotten rid of all my errors. And I've implemented all of these best practices that we've worked with for punctuation and line length. So now my code is readable, and now it works the way that I intended. And other developers should be able to read it and understand what' it's doing as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (3)
> **Tools:** terminal (3)
> **Definitions:** is an  (3)
> **Speakers:** - [instructor] (1)


### 4. Using Spacing

[↑ Back to Table of Contents](#table-of-contents)

#### [Indent consistently](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=0)** - [Instructor] Although spaces don't change the meaning of your code in [JavaScript](../../Skills/Software%20Development/JavaScript.md), appropriate use of spaces is important for creating code that's readable by humans. And when it comes to making your code more readable, nothing makes a bigger impact than consistent indents. Whenever the contents of braces, brackets, or parens don't fit in a single line, it's common to start a new line after the opening punctuation, and indent all nested statements. As you build out code, you'll inevitably end up multiple levels deep, with indented statements nested within other indented statements. For this reason, consistently applied indents are key in being able to read the code and understand the relationship between statements. Some developers use spaces for indents while others prefer tabs but common style guides tend to favor spaces. Different developers may also choose a different number of spaces for each level of indent but two spaces has become a widely adopted standard. I can use the [ESLint](../../Skills/Software%20Development/ESLint.md) indent rule to set a preferred style for indents. In my app that identifies points of interest based on a user's location, I'm starting with a set of user prefs using an object literal as sample data while I build out the app. In my eslintrc file, I'll add an indent rule and in the array value, I'll specify that I want to flag an error. I can specify tab for the second value if I want to use tabs
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=95)** or I can just use a number to indicate the number of spaces I want so I'll specify two. I'll save that and then go back to my app.js file and I have a couple red underlines up here in my user prefs constant. My user pref properties are right aligned instead of left aligned so they use varying indents. So I'll add a space here before city and another space here before lon and now everything looks good. When I'm typing new code, it's useful to have those indents implemented automatically and editors can help us out there. I can use a few config settings to get my editor to do some of the work. In VS Code, I'm going to hit code and then preferences and select settings on my Mac and in the search box, I'm going to type tabsize which is one of the settings and I get a few rules that match. Now, these are settings that apply only to my editor. If I open my project in another editor, my ESLint settings go with in my .eslintrc file but not any changes I make here in my editor settings but since this is the editor I use for all my coding, I want to customize it to help me out. So first off, I can change tab size from the default of four to two. This means that any time I press tab, the editor is going to insert two spaces. I also have the Detect Indentations setting.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=191)** This is checked on by default and that means that the editor adjusts for whatever tab length is already used in a file, overwriting my tab size setting. I don't want that so I'll uncheck that box and that means that the editor will enforce two spaces on every file I open. Now, by default Visual Studio Code replaces tabs with spaces so that works well for my chosen style. Editors can also offer a little automatic help when they detect what you're doing. In Visual Studio Code, I have the Auto Indent setting and that's true by default. This means that when I start a new line, it's automatically indented the appropriate amount which is really helpful. Then I'm going to search for format on and I have a couple settings here. The Format On Type setting automatically formats code after I complete a statement. And there's also Format On Save, which can apply formatting to an entire document when you save it. These are both really useful tools. However, for the purposes of this course, I'm going to leave them off so I can illustrate both the wrong and right way to format code without premature corrections from my browser. I encourage you to use one or both of these settings after you're done with this course. You can also choose to turn them on now
>
> **[4:43](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/indent-consistently?u=76281980&t=283)** but be aware that if you do so, your code may not look like what you see on the screen as you enter or save it. Going back to my app.js file, I want to add some conditional logic to my region function which the editor should now help me indent automatically. So, if city is equal to, we'll say Buenos Aires, it can return South America. Else if city is equal to Los Angeles, and I'm getting those nice auto indents, both for the closing brace and for the new line within the braces, so I'm going to return North America. And we'll just finish up with an else, return lookup. Now my code is consistently indented making it more readable and both my project and my browser are set up to make it easy to keep that up in all the code I work with going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Definitions:** means that (4)
> **Tools:** visual studio (2), vs code (1)
> **File Paths:** app.js (2)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### [Space before and after operators](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=0)** - [Instructor] You've probably been using operators like plus, minus and equals since your earliest math courses. And it's unlikely your teachers ever required a particular spacing regimen around them. And like most of [JavaScript](../../Skills/Software%20Development/JavaScript.md), white space isn't significant around operators. So there's no requirement to write equations or concatenations in any specific way. However, spaces help human readability in many parts of code, and operators are no exception. To make your code more readable, you should include a space before and after every operator. Including mathematical, logical, and assignment operators. In the code for my app, I've coded up a function to calculate the distance between two sets of geo coordinates. I didn't use any spaces around operators, and the statements are pretty dense. [ESLint](../../Skills/Software%20Development/ESLint.md) supports flagging missing spaces with the space-infix-ops rule. An infix operator is an operator that's used between two operands. That includes mathematical, logical, and assignment operators, as well as some others. I can add this rule to my eslintrc file, with a simple string to flag it as an error. It doesn't need to take options. So, that's going to be space-infix-ops with a value as a string of error. And saving that, you can see I've got lots of errors over there being flagged in my app.js file.
>
> **[1:34](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=94)** So switching back, I can see I have underlines almost everywhere in my function. And when I hover over one of these the error message points out that I'm missing spaces. So I can just follow all these underlines to figure out where I need to add spaces. (keyboard clicks) Which is around all my operators. And little by little ... (keyboard clicks) Type another one. (keyboard clicks) One space at a time. (keyboard clicks) Even around this logical operator here. I want to have those spaces. And another one. And a mathematical operator. And now I'm good, and now I can see I don't have any red underlines anymore. Now I can also customize a format setting in Visual Studio code to do this for me automatically. So in my Settings I'm going to search on binary, and we have both Javascript and Typescript settings that parallel each other. In this case I'm looking for the Javascript setting which is insert space before and after binary operators. So this rule is turned on by default,
>
> **[3:07](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-before-and-after-operators?u=76281980&t=187)** and this means that if I use the editor to format my code, it will automatically add these spaces in which can save me some time. Enforcing these spacing rules around operators will make any code that uses operators easy for me and other developers to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), means that (1)
> **File Paths:** app.js (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Use a consistent format for blocks](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=0)** - [Instructor] You've likely encountered a number of different layouts for blocks such as conditionals and functions in [JavaScript](../../Skills/Software%20Development/JavaScript.md) code. You've probably seen code written in the One True Brace style, with the opening brace on the same line as the keyword. You may have also seen or used the Stroustrup variant, which pushes else statements onto separate lines, but keeps all other aspects of the One True Brace style. And you may have also run into the Allman style, in which starting braces get their own dedicated lines. As with all types of code formatting, each of these styles has its advantages and drawbacks. And it's important to simply pick the one that works for you and use it consistently. You can enforce this style in your code using the [ESLint](../../Skills/Software%20Development/ESLint.md) Brace-style rule. One other variation in writing block code is the choice of spacing before the opening brace. Including a space before a brace is a subtle, but useful best practice that makes your code easier to read. You can enforce space before blocks with ESLint's space before blocks rule. In my app.js file, the region function contains an if else structure. Both the function and the conditional structure currently use Allman block format. I'm going to start by adding rules to my eslintrc file. So I'm going to use brace-style and error, and this chooses the default,
>
> **[1:32](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=92)** which is the One True Brace style. So I'm changing the style that I want to apply to my code. And then space before blocks, the default is true and so I'm just going to say error, to say I want deviations from that standard to be flagged. So I save that, now I see a bunch of errors in my app.js file. So switching back there, each of my opening braces has a squiggly underscore. And this one's flagging the brace style. So I'm going to put that function brace back on the same line as the arrow. And I'll do the same with all of the conditional braces, moving those up on to the appropriate line. That's the opening braces. I'm also going to move these else if statements and the final else statement up on the line with the closing brace that precedes them, and that's another piece of the One True Brace style. As a side note, brace style does not affect object literals, because they're either part of assignments or they stand on their own as arguments. So no changes are necessary to the user prefs variable here. Now, One True Brace style is generally the default style used by editors that auto format. But it's worth checking a couple settings. In Visual Studio code, in the settings I'm going to search on JavaScript, and there's a whole bunch of
>
> **[3:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-a-consistent-format-for-blocks?u=76281980&t=185)** settings that apply specifically to JavaScript code that are built into the editor. And so we have a setting, place open brace on new line for control blocks. And that's off by default. And then there's also place open brace on new line for functions, that's off as well. So if you're typing code in your editor and you're finding that that new code isn't implementing the One True Brace style, make sure that these options are unchecked. Or if you want to use another style like Stroustrup or Allman, this is where you can go in your editor to make the auto formatter implement your style for you. Now that I have block related styles set in my eslintrc file, I'm enforcing insistency in block formatting throughout my code, making it easier for me and other developers to read and understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [ESLint](../../Skills/Software%20Development/ESLint.md) (2)
> **File Paths:** app.js (2)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Include a space after keywords and arrows](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=0)** - Including spaces around keywords like function and if can make your [JavaScript](../../Skills/Software%20Development/JavaScript.md) code more readable. The same is true for spaces around arrows in arrow functions. [ESLint](../../Skills/Software%20Development/ESLint.md) includes a keyword spacing rule that lets your specify the format to check for keywords. ESLint also includes an arrow spacing rule that's specific to the arrows in arrow functions. My app.js file contains an arrow function, which includes if else logic. And right now, that's written without spaces before or after the if, else if, or else keywords, as well as the arrow symbol. I'll start by adding a couple rules to my ESLintrc file to flag the lack of spaces. First off, I'm going to do keyword-spacing for the value of error. And then arrow spacing, also with the value of error. So accepting the defaults for both of those keywords, and just instructing ESLint to flag deviations from those defaults as errors. And I save that, and I've got some errors flagged in my app.js file. And I can see it's the arrow and all the keywords where I'm seeing those underscores. So adding those spaces back, first off, this one is missing a space before the arrow, that one's going to be missing a space after.
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=95)** So I will add those in. Oops. There we go. Then we got the missing space after if, space before else, so all the way through here, just spacing around those keywords or key phrases. And that takes care of all my errors. And so resolving those errors also makes my code more readable. Now, I can also check a couple configurations in my editor to make this style easier to write next time. So in my Visual Studio Code settings, going to search on JavaScript. And there's a lot of options in the JavaScript format settings for inserting spaces.
>
> **[2:26](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/include-a-space-after-keywords-and-arrows?u=76281980&t=146)** And so I have an option to insert a space after the function keyword in anonymous functions, and that's selected. And then there's another option for inserting a space after keywords in [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) statements. That's selected, as well. Now, this doesn't cover all the cases that the ESLint rules apply to, but these are both a good start in getting my code formatted the right way from the get go. All of these configurations will help make my functions and my control-flow logic easier to read by ensuring I consistently use spaces around keywords and around arrow symbols.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) (1)
> **CLI Commands:** make (3)
> **File Paths:** app.js (2)
> **Tools:** visual studio (1)
> **Speakers:** - including (1)

#### [Use consistent spacing before function signature parentheses](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=0)** - [JavaScript](../../Skills/Software%20Development/JavaScript.md) has a number of syntaxes for creating a function signature, including function declarations, function expressions, anonymous functions, async functions and arrow functions. As a result, standardizing the way you create functions in your code can be a challenge. Different developers approach spacing in function signatures, differently. One common approach, is to include a space before the parens in an anonymous function signature, but not in a named function signature. This style makes it straightforward to add or remove a name, without needing to adjust spacing. Other developers prefer to standardize on spaces before parens, in all function signatures. The extra spaces added by the style can make the code easier to read. Finally, some developers never include spaces before parens in function signatures, preferring to treat the combination of keyword, or name or arrow symbol, and parens as a single unit. Whichever style you adopt, you can use [ESLint](../../Skills/Software%20Development/ESLint.md) to help you use it consistently. For my code, I've chosen to implement a space in anonymous functions, but not in named functions, which is a popular choice. The ESLint space-before-function-paren rule is customizable for the different types of function signatures. I can use the anonymous, named and arrow function options to customize the rule. Next, I'll add that rule to my eslintrc file. So the rule name is space-before-function-paren.
>
> **[1:39](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=99)** The value is an array, and I'm going to start by saying that I want to flag an error, with a string. And then I'm going to specify an object literal that gives key value pairs, describing how I want each of the different types of function signatures, to be handled. So first, anonymous, and that's going to be always. Then named, that's going to be never. And finally, asyncArrow, and that is always. So I'll save that. Switching back to my code, I have a couple issues flagged here. So first off, I have an anonymous function signature here, and there should be a space before the parentheses, based on my rule, so I'll add that in. And, the same thing down here. So, I will add in that space. Now, notice that down here, in my event listener, the function called does not take a space between the name of the functions and the parens. And this is pretty standard for a function call. There is one editor format setting that affects this. So looking in the VS code settings, I'm going to look in the JavaScript settings, and there's an insert space before function parenthesis, right here.
>
> **[3:16](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/use-consistent-spacing-before-function-signature-parentheses?u=76281980&t=196)** And I want to make sure that that's unchecked, because I don't want spaces in all instances. So now my ESLint settings and my editor settings support a specific set of choices around spaces in function signatures, that balance readability, with the ability to convert between function signature types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** asyncarrow (1)
> **Tools:** vs code (1)
> **Speakers:** - javascript (1)

#### [Break up and indent long-method chains](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=0)** - [Instructor] Chaining methods together enables you to write compact code that accomplishes a task without unnecessary reassignment, however, the trade off for that compactness can be dense code that's hard to read. To make long method chains more legible, it's useful to break them up onto multiple lines with a dot preceding a method name starting a new line, combined with indenting the methods below the first line of the statement. This format makes it easy to understand the sequence of modifications being applied, as well as where the chain begins and ends. [ESLint](../../Skills/Software%20Development/ESLint.md) includes the newline-per-chained-call rule which flags errors in your code if your methods aren't on their own lines. In my app that identifies points of interest based on a user's location, I'm building a [Fetch](../../Skills/Web%20Development/Fetch.md) request to the US Park's Service API to get information on national parks. Notice that I already have one error here, and that's just because I have a really long line that includes a couple of chain methods. In my ESLint RC file, I'm going to add a new rule, and that is newline-per-chained-call, and I'm simply going to give it a value of error which means I'm accepting the default, and asking for that to be flagged as an error. So I can add options here if I wanted to, so I could say one or two chain methods are okay without line breaks, but for now I'm going to enforce
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/break-up-and-indent-long-method-chains?u=76281980&t=95)** all chained methods on new lines, and when I save that and go back to my app, that js file I have an error here. So both of these catch statements are expecting line breaks, and so I'm just going to go ahead and break these up starting with the dot on both of these, and for good measure I'm going to break up the first one as well. Now I want everything indented underneath that fetch statement, and notice here that indeed ESLint is expecting that two space indent that my file calls for. So I'm just going to select all of the chained methods. I'm going to use a tab to indent those two spaces, that whole if else construction is already indented under the then, so everything is indented correctly, and I have each of my chained methods starting a new line, and this makes for consistent and easy to read code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Space consistently within enclosing characters](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=0)** - [Instructor] There's a wide variety of approaches to spacing after an opening paren bracket or brace, and before the corresponding closing character. Developers who pad some or all of these enclosing characters with spaces may feel that the spaces make the enclosed values easier to read. On the other hand, the choice to omit the spaces has the advantage of creating a clear association between values and the enclosing characters which generally indicate what type of data is enclosed. Many style guides specify an approach to spacing within enclosing characters. So if your project or organization has a style guide, that's a great place to start. If you're creating your own style, then you should pick a style for each type of character and use that style consistently. Note that the style doesn't need to be the same among all types of enclosing characters. In fact, popular style guides often set out one or more distinct styles for parens, brackets, and braces. I want a standardized spacing in the enclosing characters in my app.js file, and also in my .eslintrc file which contains a lot of them as well. [ESLint](../../Skills/Software%20Development/ESLint.md) supports a rule to let me specify the styles I'd like to enforce for parens. That's the space-in-parens rule. It also supports a rule that lets me specify spacing inside of brackets which is the array-bracket-spacing rule. In addition, it supports a separate rule specifically for spacing inside braces,
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=96)** this is known as the object-curly-spacing rule. In my .eslintrc file I'm going to go ahead and add those rules. Now I generally don't use spaces within parens or brackets, but I do use them in braces, and this is the style that the Airbnb style guide uses. So, I'm going to add, space in parens and the value there is going to be, error and never and then, array bracket spacing and again, error and never. And finally, object curly spacing and that's going to be, error and always because that's where I do actually include spaces. So I'm going to save this, and I can see that I have some errors popping up in the app.js file. So I'll start there, and right here, should be no spaces inside this paren, so I can take that space out, same thing here, no spaces before the closing paren, and down here I have an errant space, and here as well. And so that takes care of any issues in my app.js file. Now I've chosen to do an .eslintrc file that is itself a [JavaScript](../../Skills/Software%20Development/JavaScript.md) file. But by default, ESLint ignores dot files which are hidden files.
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=191)** And so even though I do have a few issues in my .eslint file for instance, I haven't been putting spaces inside my braces, my ESLintRC rules are not being applied to that file itself. So in the start files for this video, I've included an .eslintignore file, and this is simply a configuration file that I can include in my project setup that specifies that ESLint should not ignore the .eslintrc.js file. So I'm going to switch over to Finder, and in the folder for this project, and for this specific video in the Begin folder, here's my .eslintignore file. Now on a Mac, this is a hidden file, and if you can't see it, you can press the keyboard combination, Command + Shift + Period to toggle whether or not those hidden files are visible. So then I want to drag that .eslintignore file over to my Exercise Files folder. SO now that .eslintignore file is at the base of this whole project where the package-lock.[JSON](../../Skills/Web%20Development/JSON.md) file is in the node modules that configure ESLint for this project. And now when I switch back to VSCode, I have a whole bunch of errors (laughs) so let's start at the beginning. And so it says, Use the global form 'use strict'
>
> **[4:45](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=285)** so I've overlooked a few rules that I've set globally here, so I'm going to make sure to add my use strict, 'cause this is after all a JavaScript file. Here in my true value, I'm missing a trailing comma which is another standard that I specified in my ESLint rules. And now I have a number of little underlines here and there on enclosing characters, so no space before that square bracket, so we'll take that out. No space after that square bracket, we'll take that out, likewise over here. Here, here, and then down here with my brace, space is required afterward, and a space is required before that one, take out that errant space in my brackets, and there, another set of curly braces where I need a space, and another set of brackets where I don't. And all that remains is that I've got a really long line here that I never actually broke up, so I'm going to start that bracket on its own line, and I'm going to break up these values on their own lines. And here I'm missing a trailing comma in my object literal, here also I'm missing a trailing comma,
>
> **[6:19](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=379)** and there I go, now I've got ESLint rules applying to the .eslint file itself, and I've got everything ironed out so that my spacing within all of my enclosing characters is predictable and consistent. Another tool that I can use here, is to actually set consistent approach to these spaces in the Settings in my Editor. So I'll open up those Visual Studio Code Settings, I'm going to search for JavaScript insert space, and I get a list of several settings, these all control whether the Editor automatically adds a space after opening characters and before closing characters. So I want spaces within braces, and so we've got one for JSX expression braces, I'll go ahead and check that. Non-empty braces is already checked. Non-empty brackets, I want to be sure to be unchecked, and then, close my sidebar just so I can read these, I do not want spaces in my parenthesis, so I'm going to keep that unchecked, and template string braces, we'll go ahead and check that there as well. And now when I enter new code, the Editor will automatically format it according to my preferred spacing style within each type of enclosed character. Spaces within enclosing characters are a relatively small detail in our code, but approaching these spaces consistently
>
> **[7:52](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-consistently-within-enclosing-characters?u=76281980&t=472)** makes your code that much easier to read and understand for you and for other developers who work with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (8), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **File Paths:** app.js (3), eslintrc.js (1), package-lock.json (1)
> **CLI Commands:** make (2), node (1)
> **Exercise Files:** exercise files (1), template (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** setup (1), configure (1)
> **Env Vars:** jsx (1)
> **Tools:** visual studio (1)

#### [Space after commas, but not before](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=0)** - [Instructor] Commas separate values in [JavaScript](../../Skills/Software%20Development/JavaScript.md) in a number of situations. It's common to write commas in code the same way you would use them in a sentence, with no space before and a space after. However, other comma styles are used as well, including a space before but no space after or no spaces on either side. I use a space only after commas, and so far, I've been writing my ESLintRC file using that format. I want to add a rule to flag errors if my spacing deviates. [ESLint](../../Skills/Software%20Development/ESLint.md) supports the comma spacing rule, which lets me specify which style I want to use and how I want it flagged. So over in my ESLintRC file I'm going to add a new line, and that's going to be comma-spacing and in an array, I going to specify that I want it to be flagged as an error, and then I need an object literal. I'm going to specify the value before with a value of false, and a value of after, and give that a value of true. Got to make sure to put spaces to pad out my braces, terminal comma, and when I save that, I can see over here in my JavaScript file, I have an error throw, so here I've got a space before and a space after my comma, and the pop-up error here indicates a comma spacing issue, so I can simply take out that space, and I'm all good.
>
> **[1:36](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/space-after-commas-but-not-before?u=76281980&t=96)** I can also check an editor setting that can help me use commas consistently. So in my VS Code Settings, I'm going to do a search on JavaScript and search space, and right here we've got the Insert Space After Comma Delimiter Rule. That is to say a comma that separates values. I want this formatting rule to be applied when the auto-formatting feature is used, and it's already checked, so I'm good. And now I have the tools in place to ensure that my comma spacing is uniform, which makes my code easier to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Tools:** terminal (1), vs code (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Limit blank space to one line](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=0)** - Like all white space blank lines don't effect the meaning of [JavaScript](../../Skills/Software%20Development/JavaScript.md) code. As a result, you can make liberal use of them while writing code. For instance, you may add several blank lines below a comment, leaving space for code you need to add. You may also find that as you delete or remove sections of your code the blank lines padding a section are moved together into a larger blank area. During a quick visual scan of your code, large blank sections may suggest section breaks or other meanings that you didn't intend. To avoid this, it's best to limit your blank space to a single line and use comments to indicate sections of your code or content to add later. This same rule applies to the end of your document. Instead of ending with multiple blank lines or none best practice is to end your file with a single line break which provides a starting point to add new code without extending the length of the file unnecessarily. [ESLint](../../Skills/Software%20Development/ESLint.md) can flag deviations from blank space preferences you specify using the no multiple empty lines rule. In my eslintrc file I'm going to add that rule. So I'll say no multiple empty lines and the value's going to be an array. I want it to flag an error and I'm going to specify an object literal: the max keyword indicating the greatest number of blank lines that I'm allowing in a row and that's one and I can also specify the maxEOF keyword
>
> **[1:37](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/limit-blank-space-to-one-line?u=76281980&t=97)** which specifies the greatest number of lines that I can include at the end of a document and that's also one. So there EOF is short for end of form. Saving that rule I can see a few issues flagged over in my app, that js file. So here I left some space after 'use strict' but I'll take two of those out. Likewise here I spaced a little extra between my two consts so I'll take one out and there's a little extra between the const and the distanceTo function and then down here an extra line below that function and above the console.log statement. Now I can also see it's not flagged by ESLint but I don't have a terminating line break here. And so just to implement that best practice myself, I'll go ahead and add that in. So now automatically have an empty line here ready to go if I open this file up and want to add some code With these preferences specified in ESLint I can ensure my code strikes a balance between compactness and a judicious use of blank lines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Best Practices:** best practice (2), it's best to (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** maxeof (1), distanceto (1)
> **Env Vars:** eof (1)
> **Definitions:** short for (1)
> **Analogies:** for instance (1)
> **Speakers:** - like (1)

#### [Challenge: Optimize spacing](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/challenge-optimize-spacing?u=76281980&t=5)** - [Narrator] Ready for a challenge? The start files contain code for a grocery shopping app. Edit the script.js file to implement and enforce best practices for spacing in [JavaScript](../../Skills/Software%20Development/JavaScript.md), including indents, spacing around characters and blank lines. This should take you about five minutes. When you're done, join me in the next video and I'll walk you through how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** script.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Optimize spacing](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=0)** - [Instructor] In my Challenge file, I'm starting with my .[ESLint](../../Skills/Software%20Development/ESLint.md) file, and now I notice already in my script.js file, I have an error, and that's due to a really long line down here, clearly this is a bunch of chained methods and we're going to get to that, so we'll just leave that be for the moment. So I'm going to go one by one with my rules, adding the rules that deal with spacing, and then using the prompts from ESLint to identify and fix issues in my files. So first off is the indent rule, and I want to flag an error when that's not two, so I'll save that, back in my script.js file, I can see up here, I have some right-aligned elements in an array, and I want those to be left-aligned, so I'm going to take out spaces until those all line up at two spaces, and now I'm back to one which is still that really long line, so I'm good with the indents. Next up, I'm going to specify space around my infix operators, so that's space, infix, ops, and I'm just going to flag an error there and rely on the default value for that rule. And so I can see down here, there's an equal sign
>
> **[1:35](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=95)** that needs some spaces, a less than sign that needs them, a plus equals that needs it. We've got an assignment operator here that needs that, and so I'm back to just that one long line again. Next up is space before blocks, and we'll flag an error on that one. That one doesn't actually seem to have any errors over here, so we'll keep on going. We also have brace style, and that one we're taking the default on and just flagging an error. And there we've got a number of issues. So we can see here, that we've turned on the one true brace style and so we have this brace starting on its own line, which is not part of that style. And then we've got issues here again, now part of this is the chain statements, the chained methods, but some of this is also about line breaks, and so I'm going to go ahead and put this [Fetch](../../Skills/Web%20Development/Fetch.md) on its own line, going to follow this prompt and put the if on its own line, here I need a return on its own line, here the closing curly brace should be on the line after the block, likewise here, the throw should be on its own line,
>
> **[3:11](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=191)** and these curly braces need to be broken out to close things in the correct places, and there, a closing curly brace goes at the end. Now here we have a long line, here we still have a long line so those we'll get to in a bit, but for now, we've ironed out the issues with those curly braces. And then let's look at keyword spacing, so for keyword dash spacing, we'll trigger an error if we're not inline with the default settings, and looks like we have an error here, and that's the for statement, expecting a space after the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for, so a space there, and that's ironed out. And likewise with arrow spacing, we'll call an error there. And looks like we have a couple issues over in our script.js file. So we have an arrow right here, that needs a space before and after, that gets us ironed out. And then we want to look at the space before function paren rule, and the way I like to specify this is as an error and using, so this is going to be a long one, I'm going to put the values on separate lines so we're going to have an error and then I'm going to use an object literal,
>
> **[4:46](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=286)** so for an anonymous function, I want to always have that space for a named function, I want to never have that space, and for an asyncArrow function, I want to always have that space. And then I'm going to move my closing square bracket, I need a closing comma here, closing comma here, and right here we're looking for a trailing comma as well. And it looks like that didn't actually catch any errors, so yeah, we don't actually have any code over here that violates that rule which is great, means we're doing something right. So we'll go ahead to new line per chained call, and there we want an error if we violate the default. And this is where we already have a set of chained calls, I'm going to go ahead and move this then onto its own line, I'm going to move this then onto its own line, and this catch, then I'm going to grab all of these and indent them under the fetch statement.
>
> **[6:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=373)** And I prefer to have that paren indented underneath the curly brace, and I'm actually going to indent this whole structure,
>
> **[6:30](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=390)** like that. So now I have my then statement with each set of enclosing characters starting a new line, I have my then and my catch on separate lines, I've broken up my long lines and I've got my chained methods broken up on new lines. Then we're going to look at space in parens, and again, this is one of those three, we've got parens, brackets, and braces where we can talk about the spacing. So in the parens, I'm going to use an array, specify error and never, and I'll go ahead and do array bracket spacing here as well, and that's going to be error and never, and then we'll do object curly spacing, and that's going to be error and always, because I always want those spaces padding out my curly braces. So then, going back to my .js file, I've got extra spaces in my parens here that I don't want, in these parens as well, and in these parens, and these parens,
>
> **[8:04](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=484)** and then down here,
>
> **[8:13](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=493)** there's extra spaces down here, this is like when you code in one style and then decide to change everything, you have to just go line by line and fix everything. And I missed a few up here as well, we got spaces there, and spaces here. And now we've got that all ironed out. So just a couple more, I want to check on comma spacing, that's going to flag an error, and my key value pairs will be before false and after true. I need to pad out my curly braces there. Saving that, we've got a few issues in the script file, so we have all of these commas here that have an extra space before them, so we'll go ahead and take those out, and now we've got that comma spacing implemented consistently. Then we got one more, that's about the empty lines, so I'm going to do, no multiple empty lines, and flag an error and specify an object literal with max of one in a row, and maxEOF with a value of one, so one maximum at the end of the file. Going to pad out my curly braces again,
>
> **[9:49](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/solution-optimize-spacing?u=76281980&t=589)** add a terminal comma and save that. And in my script.js file, got one spot up here where I put an extra space below use strict, put a little extra space here before my itemLookup, and then at the bottom, this isn't flagged but I'm going to go ahead and add in that final blank line, so that I'm ready to go to add more code if I need to. And so now I have all of these rules implemented for spacing, and I have my [JavaScript](../../Skills/Software%20Development/JavaScript.md) code in my script.js file all ironed out and consistent in the use of all those rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** script.js (5)
> **Code Identifiers:** asyncarrow (1), maxeof (1), itemlookup (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-best-practices-for-code-formatting/next-steps?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course. You now have experience implementing best practices for formatting [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) code. To dig deeper into coding using Vanilla JavaScript check out a course on App building with Vanilla JavaScript. If you want to learn more about fixing logic errors in your JavaScript code check out a course on debugging. Feel free to follow me online. Now take your new skills and build something amazing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3)
> **Speakers:** - [sasha] (1)


## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)
**1 of 10** | [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) →

## Appears In

- [Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)