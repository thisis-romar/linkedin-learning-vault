---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: eslint-checking-for-syntax-and-logic-errors
url: "https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors"
duration_minutes: 38
duration: 38m
level: Advanced
updated: 5/15/2025
learners: 2834
skills:
  - ESLint
exercise_files: true
github: "https://github.com/LinkedInLearning/eslint-syntax-2255011/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHQ7f1pYY_oBw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021378628?e=2147483647&amp;v=beta&amp;t=rrRAexRdmJuLPvhg0KKGoo1WZcueBEEs2tENH_VldlU"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[ESLint- Integrating with Your Workflow]]'
next_courses:
  - '[[ESLint- Customizing Styles]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":5,"total":10,"prev":"ESLint- Integrating with Your Workflow","next":"ESLint- Customizing Styles"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/eslint
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/ESLint-%20Checking%20for%20Syntax%20and%20Logic%20Errors.md)

![ESLint: Checking for Syntax and Logic Errors](https://media.licdn.com/dms/image/v2/C4E0DAQHQ7f1pYY_oBw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021378628?e=2147483647&amp;v=beta&amp;t=rrRAexRdmJuLPvhg0KKGoo1WZcueBEEs2tENH_VldlU)

# ESLint: Checking for Syntax and Logic Errors

> Reduce bugs and boost efficiency by using ESLint to catch common coding errors. In this course—the third and final installment in the ESLint series—learn about some of the most essential error-catching rules in ESLint, as well as how to configure them. Instructor Sasha Vodnik details how to configure rules to identify errors in code for functions; configure ESLint to identify issues with loops and

> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors) | 38m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Using ESLint to catch coding errors](#using-eslint-to-catch-coding-errors)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files for this course](#using-the-exercise-files-for-this-course)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Checking for Syntax and Logic Errors**](#1-checking-for-syntax-and-logic-errors) (8 videos)
  - [Understanding ESLint error rule types](#understanding-eslint-error-rule-types)
  - [Flagging issues in functions](#flagging-issues-in-functions)
  - [Identifying problems in loops and conditionals](#identifying-problems-in-loops-and-conditionals)
  - [Eliminating unfinished code](#eliminating-unfinished-code)
  - [Ensuring accurate values](#ensuring-accurate-values)
  - [Calling out general logic errors](#calling-out-general-logic-errors)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using ESLint to catch coding errors](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980&t=0)** - [[ESLint]] error checking rules can be really handy, but sometimes it's not clear which ones make sense for a project and which ones you should turn off. In this course we'll look at some of ESLint's most significant error checking rules. We'll explore how to configure them and we'll examine situations where you might not want to use them. After we're done, you'll be able to pick the right rules for each project so you can catch more bugs before deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (2)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - eslint (1)

#### [What you should know](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have intermediate to advanced level experience coding in front-end [[JavaScript]] including modern ES6 syntax. It also assumes you know how to set up and configure [[ESLint]] in an [[npm]] project. If you need to review how to configure ESLint, search in our library for a course on customizing ESLint styles. If you need a brush up on incorporating ESLint into a project, search in our library for a course on integrating ESLint with your workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (5), [[JavaScript]] (1), [[npm]] (1)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** npm (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files for this course](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Instructor] All of the files for this course are freely available as a [[GitHub]] repo at this URL. The repository is built so there are branches for each of the videos in the course. You can use the branch menu to switch to a specific branch and take a look at how the code looked on a specific video. For example, the branch titled 0103b shows you the code for chapter one and the third video in that chapter. The letter B at the end of the name means that's how the code looked at the beginning of the video. If you want to see how the code looked at the end, just choose the same branch but with an E at the end instead. In this course, I go through configuring syntax and logic rules for [[ESLint]]. If you want to, you can download any of the branches by first going to the branch and then hitting the clone or download button and downloading the ZIP file for the video that you want to follow along with. You may need to install [[npm]] as well as [[Git]] before you do this. If you need more experience working with Git and GitHub, make sure you're familiar working with Git and GitHub before taking this course. Do a search for GitHub in our library. If you're comfortable with all this, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Git]] (3), [[ESLint]] (1), [[npm]] (1)
> **CLI Commands:** git (3), npm (1), make (1)
> **Env Vars:** url (1), zip (1), npm (1), git (1)
> **Tools:** github (4)
> **Exercise Files:** github repo (1), zip file (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] [[Codespaces]]. Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands-on practice that mirrors [[Software Development]] in the workplace. This course has been adopted for use with GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. First, make sure you've signed up for a free GitHub account and that you've logged in. You should see your profile icon right here. When you go to the repository for one of our courses, look for the Code button. Click on Create Codespace. The first time you open up a Codespace, it might take a few minutes to create the Virtual Machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. The cloud editor's menu lives in a hamburger icon inside the activity bar. The menu will let you see the keyboard shortcuts for your operating system. Let's find the shortcut for the command palette. Look in the hamburger menu under view and then look for the keyboard shortcut for your operating system. The activity bar has the most common tools you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the explorer, do a search and replace for content, manage features of the repository and much more. By the way, if for any reason you lose the activity bar, you can get it back using the command palette. Your course can have one or more extensions pre-installed, based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic. Codespaces saves everything you're doing on a Virtual Machine. You can always get the Codespace back for this repo by going to the code menu and finding your Codespace right here. Notice that it even remembered that I had opened the extensions panel. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked on chapter two
>
> **[3:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=187)** and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[[HTML]] file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like say 07_03e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the Force Checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Forking lets you create your own copy of the repository on your account, so that you can keep any changes that you've made, even if you've deleted the Codespace. To create your own fork, you can click on the Fork button on the repository. I'm going to hit Create fork. I'll have my own copy of this repository, and if I want to, I can start a new Codespace on that fork. This fork version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:40](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=280)** Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the Commit button and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here to commit this onto my own version of the repo. I'll hit OK. You can also let it go ahead and run [[Git]] [[Fetch]], that way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Some courses will let you work with live previews or create other ports, so that you can have a web view of what you're doing. This is managed through the ports panel in the status bar. Right now, there are no ports forwarded. But if I open up the Live Server extension, you can see a preview of that file. Now, if we go back to the Codespace to manage ports, you can click on the icon in the status bar and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser, you can click right here. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (6), [[GitHub]] (4), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **UI Navigation:** switch to (4), click on (3), go to (2)
> **CLI Commands:** make (4), find (1), git (1)
> **Tools:** github (4), visual studio (2)
> **Definitions:** is a  (4), is an  (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)


### 1. Checking for Syntax and Logic Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding ESLint error rule types](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=0)** - [Instructor] [[ESLint]] can be super handy in enforcing consistency in code you write. In fact, most of the rules that ESLint supports have to do with aspects of code that don't have just one correct approach. For instance, best practices, like using the triple equality operator, and stylistic issues, like camel casing variable names. But ESLint also includes a set of rules that enable it to flag code that's either definitely erroneous or written in a way that's likely to indicate an error. In ESLint Version Six, almost all of the rules for possible errors are enabled in the ESLint recommended styles. ESLint can call out logic errors, such as update code in a for loop that iterates in the wrong direction. It can also call your attention to unused code, such as empty block statements which can indicate something like an incomplete refactoring process. Some of ESLint's rules for possible errors are simple toggles that you can turn on or off by setting a key for the rule name to a standard value. For instance, you can choose to have ESLint flag an incorrect for direction as a warning or error or you can turn that functionality off. And some rules allow you more fine-grain settings. For instance, you can choose to be alerted to any use of console statements in code. Or you can specify certain console methods that are allowable and shouldn't throw warnings or errors while still alerting on the other methods. You can use ESLint to check your code for potential errors by creating your own rule set,
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=93)** or by customizing the ESLint recommended settings or the settings from any major style guide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (10)
> **Analogies:** for instance (3), such as (2)
> **Best Practices:** recommended (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Flagging issues in functions](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=0)** - [Instructor] My project includes some test code for the [[ESLint]] rules and writing. In the files for this course I'm in the Error Checking folder and within that the Source folder contains index.js. And immediately when I open that up I see the ESLint is reporting an error here on line six. And when I hover that I have this error argument name clash. So my function has duplicate argument names. Which is generally a result of mistyping. Notice as this flags a parsing error. Which is separate from the customizable rules. Now there is a rule that covers the same case. No-dupe-args. It flags code for a function with a repeated argument name. In my code the parser flags this because I'm using a module. And modules are always evaluated in strict mode. So the parser error checking happens before the configurable rules. But in this case I want to use my rules on code that's not running in strict mode. So I'll go ahead and add that rule as well. So I'll open up my ESLint.rc file and down in the rule section I'll add no-dupe-args... end quotes because that contains dashes which are invalid characters for a key name. And error as the value. End that with a comma and save it. Now back in my index.js I still won't see this showing up in my editor or in error messages on build. Because it's caught earlier in the process. But I'm going to go ahead and fix it in my code. And I'll save that.
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=93)** And now I have another error popping up after I fixed that one. So further on down on line 10. So I've declared the multiply function on line six. And then re-written it as a function expression on line 10. Maybe I was re-factoring and I forgot to out the original after writing it. And again I have a parsing error flagged here if I look at that. And it's saying that the identifier's already been declared. So this is another issue that's caught by the parser in strict mode. But there is also a rule for use in non strict mode situations. No-func-assign. And it takes a simple string as it's value. So I want to cover other situations where I might use my rules. And so I'm going to go ahead and add that other rule. So no-func-assign... And error. Save that. Go back over here and again I'm still getting the parsing error flagged not the one that I just wrote. And since this is a re-factor I just want to get rid of the first instance of this function. So I'm just going to go ahead and comment that out. And then in my... Re-factored code I again want to fix the error that pops up now which is the argument name clash. So I'm going to change that "x" to a "y" to match my code. I'll save that. Now I have all of my errors ironed out. And I have rules in place to address the specific errors around functions that pop up when I'm not in strict mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (3)
> **File Paths:** index.js (2)
> **Definitions:** is a  (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Identifying problems in loops and conditionals](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=0)** - [Instructor] The loops and conditionals section of index.js, starting on line 15, contains a couple of issues I want [[ESLint]] to flag. There's a for loop starting on line 19. As far as my editor is concerned, everything's fine there, but I can use ESLint to check if the direction of my iterator change makes sense given my condition. To do that, I use the for direction rule. Over in my ESLint rc file, I'll add for direction with the value of error. So that's in the rules section, and for dash direction, and error. Saving that, I'm going to go back to index.js and I have a new error flagged. So, if I move the pointer over that that tip text is going to point out that the update clause moved the variable in the wrong direction. So, my code starts at 10, and it checks for a value greater than zero, and increasing I after each loop. That creates an infinite loop, because I will never satisfy that ending condition. I'm starting greater than zero already, and I'm continuing to increase my value, so I'm always going to be greater than zero. So now that I have that condition flagged, I can change the direction of that final statement so instead of i plus equals one, I'm going to change that I minus equals one, so I am decreasing each time through the loop. And, immediately the error's gone, I'll save that, my loop is no longer infinite, and I fixed the logic error in my code
>
> **[1:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=92)** and that is thanks to ESLint for actually flagging that logic issue. Now starting on line 23, I have some if else [[Control Flow]] code, which checks a number of conditions. The editor doesn't find any issues with my syntax, but I want to get ESLint to verify that I haven't duplicated any conditions. Especially as the number of else if clauses grows, it can be hard to spot duplication. And I can do this in ESLint with the no dupe else if rule. So back in my ESLint rc file, I'm going to add a new rule which is no dupe else if, and give it a value of error. Just a simple string. And saving that, going back to index.js and now, I have an error flagged on line 30. Let's see, I will move the pointer over that, and so this is pointing out that this branch can never execute because it's a duplicate. So, looking at my code here, I probably meant to check for d instead of b. I have the a, b, and c, so the next logical step would be d. And so, I'm going to go ahead and make that change, and the error is gone, I have no more duplicate. ESLint also offers a similar rule for switch statements, that checks for duplicate cases. I don't use those, so I'm not going to include that in my configuration, but if that's part of your code, you can add that as well. It takes a single string value, just like no dupe else if. So, here I've used ESLint rules to check loops and conditionals,
>
> **[3:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=184)** and they're helping me catch these sneaky logic errors early on, rather than needing to debug their effects later in my testing, that's a total win.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (9), [[Control Flow]] (1)
> **File Paths:** index.js (3)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1), later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Eliminating unfinished code](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=0)** - [Instructor] In my index.js file starting on line 40, I have some test code that's not quite ready for deployment. And I can set up a few [[ESLint]] rules to call out some common issues that I see in this code. I have an if else construction starting on line 41, and I can see on lines 43 and 44 that I have an else if clause with an empty block. Nothing actually happens if the condition's true, so this is wasted code. I can configure ESLint to flag this using the no-empty rule, which is triggered when there's an empty block. It allows for some detailed configuration if I want to allow an empty catch block, but for a generic use case, I can just use this simple string for the value. So back in my .eslintrc file, I will add a no-empty rule with a value of error. And I'll save that, and then back in index.js, I do have highlighted code. If I move my pointer over that, that tip mentions that this is an empty block statement. So for now, I'm just going to comment out 43, that is the empty block, and leave that else as the fallback for the [[Representational State Transfer (REST)|rest]] of the if else construction. And now I've taken care of that error. Further down, the else section contains a couple debugging statements. First, the debugger directive, which halts execution to the parser, and then a console.error statement, which throws an error in the parser. In the browser, I see that in the browser console. With solid browser developer tools available,
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=93)** the debugger directive just isn't useful at all. And if I was using it and it went out and deployed code, it would halt execution in the end-user's browser, which is not what I want at all. So, I want to make sure I know if my code contains debugger anywhere so I can take it out. Now, the console statement is different. Those are useful for development, but often we don't want them around in production code. So I'd like some help noticing if those are around when I'm getting ready to deploy. The no-debugger rule takes a simple string argument and raises an issue if my code contains a debugger statement. The no-console rule alerts if my code contains a console statement. I can flag all of them using a simple string value, but it can also get more finely grained. I may want to allow certain methods, which might be part of a process for getting debugging data from users when they're having problems. And for that, I can set an allow keyword and specify which methods I'm okay with. Back in my eslintrc, I'm going to add a no-debugger rule with an error value. And then, back in index.js, I actually have to save that eslint file first. Now, in index.js, I have a red squiggle under debugger and can see the no-debugger statement in the popup there. So, I'll just go ahead and comment that out to take care of that. And then back in eslintrc, I also want to take care of those console messages. So, I'm going to add that no-console keyword,
>
> **[3:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=190)** and I want to allow error messages for end-user issue reports. But otherwise, I don't want to rule out other console methods. So, the value's going to be an array, and it's going to flag an error, so that's my first string. Then I'm going to provide the object and this gives me the specific cases. So I have an allow and the value for that is array, and the value's going to be error. And so here, just notice that the [[Microsoft Word|word]] error within the array is specifying console.error as an allowable method. Whereas the error string up here is saying when there's a problem with console statements I want to throw an error rather than throwing a warning. So we're using the word error here in two different contexts within this specific rule. So I'm going to put a terminal comma after my object and another one after my array. Going to save that, and then heading over to my index.js file, the console.error message is there. It's not flagged, and that's because I have disallowed console messages except for error messages. And so, I'm good there. But if I did something else like console.log, that would get flagged and that's what I want. So now, I have rules in place that let me identify and eliminate code that isn't useful in production, so I can get rid of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (3), [[Microsoft Word|Word]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **File Paths:** index.js (5)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Ensuring accurate values](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=0)** - [Instructor] The accurate values section of index.js starts on line 54, and it contains code without any syntax errors, but there are a couple indications in this code that I may have made typing errors and I can use [[ESLint]] rules to flag these for me. The scores array on line 54 includes an empty element. This is known as a sparse array and while it can sometimes be useful, it can also indicate my finger simply slipping on the keyboard and typing an extra comma. I can catch this with ESLint using the no sparse arrays rule which flags back to back commas in an array literal. This rule takes a simple string as its argument. Over in my eslintrc file, I'm going to add code to flag this issue as an error, so no-sparse-arrays, error, and then I'm going to save that, return to my code, and now I've got that red squiggle, and when I put my pointer over it, I've got that no-sparse-arrays rule flagged from ESLint. And if I go ahead and take that extra comma out, I'm all good again. So now I have an array containing only those values and if I want to add other values, there are programmatic ways to do that, without starting a sparse array, and obviously if you use sparse arrays in your coding practice in your project, then you don't need to use this rule. Now down on line 57, I have a variable containing a string. Now it's not a template literal, it's a string. It uses apostrophes and not back ticks. But it contains what looks like an expression reference: the dollar sign followed by the curly braces.
>
> **[1:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=95)** That suggests that I probably meant for this to be a template literal. And ESLint has this amazing rule that lets me flag this in code. It's the no template curly in string rule. So it's a long rule name, but it takes a simple string as its value and it basically looks for that pattern, that dollar sign curly braces, that indicates you probably meant a template literal. So over in my eslintrc, I will add one more rule here: no-template-literal-in-curly. And then for the value, error, a simple string. Save that and then back in index.js, I am not seeing an issue flagged here. I have an issue at the beginning. So I'm going to actually close my index.js file and reopen it, that sometimes helps. But that is not showing up. So let's look back here. No template literal and that's not a thing. I typed it wrong, so, important lesson here. No-template-curly-in-string is the name of the rule, so I was getting an error there just saying, you've defined a rule that doesn't exist in ESLint. Now I go back to my index.js, scroll down to my accurate values section and there we go, red squiggles, unexpected template string expression. There's the no-template-curly-in-string.
>
> **[3:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=190)** And so I'm going to go ahead and fix that by changing my apostrophe to a back tick in both of those places. Now I get that nice code formatting, and more importantly, my issue goes away because this is no longer a template curlys in string, but a template curlys in a template literal. And so, this is a big help in catching an issue before it actually results in a bug in testing. I'm just getting one step ahead of the curve here with this ESLint rule.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (6)
> **Exercise Files:** template (12)
> **File Paths:** index.js (4)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Calling out general logic errors](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=0)** - [Instructor] My index.js file contains a few test statements starting on line 63 that test for errors in logical tests. [[ESLint]] supports a number of rules for a range of potential logic issues, but I want to use a few specific ones. Line 63 contains a subtle error in the condition that I still find myself making on occasion. Instead of using a logical comparison operator, like triple equals, I used the assignment operator, a single equal sign. That means I won't have a comparison here, and my code won't do what I intended. ESLint supports the no-cond-assign rule to catch assignments in conditions. The default setting allows you to do assignment in a condition within a separate set of parentheses as a way of making your intention clearer. Using that default, I can set the value for this rule with a simple string. So, back in .eslintrc, I'm going to add another rule, no-cond-assign with a value of error, and then saving that, I'm going to switch back to index.js and right away I can see that I have a red underline, and the screen tip mentions the no-cond-assign rule. So ESLint saved my bacon here pointing out this error that changes everything and that I often don't notice. So I can fix that by putting in what I really meant, which was a comparison, triple equals, and now that error's resolved. Another logical instruction that often indicates an error is setting a constant condition, like here in line 68 where my condition is simply false.
>
> **[1:36](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=96)** This can be useful during development to test the code within a [[Control Flow]] block, but it's not useful in deployed code. ESLint can flag this with the no-constant-condition rule. You can customize it to exclude chucking and loops, but otherwise it covers all conditions with a simple string value. I'll set that up in my .eslintrc file to throw an error. So no-constant-condition with a value of error, and then saving that, returning to index.js. Now that constant condition on line 68 has a red squiggle and the screen tip references no-constant-condition. So I'll change my condition to temp &gt; 25, and the squiggle goes away because my condition's no longer constant. So my code contains one more section of test code starting on line 72. This declares a variable and assigns it a value, and then, in a control flow statement, it uses typeof to check the type of that value. Typeof takes a string as the data type to check, and here I've made a typing error. String is spelled wrong, S-T-R-N-I-G. ESLint has a valid typeof rule that can check values in typeof comparisons. Like the documentation points out, there are generally only eight string values you want to be checking for with typeof. So if you're looking for something else, it's worth flagging. There's an extra option here, but I want to set it up with just a default string value. So back in my eslintrc, I'm going to add valid-typeof
>
> **[3:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=195)** and error as the value. And I'll save that, and then over in index.js, I have an error that references valid-typeof. And now that my attention is drawn to it, of course I notice that's spelled wrong. S-T-R-I-N-G is how we spell string, and now I've fixed the spelling that gets rid of the error because this is one of the eight strings that I'm looking for to match in the typeof statement. ESLint supports a few other rules for general logic errors. Use-isnan flags code that checks if a value isn't a number by comparing it to the value NaN. So this is not a reliable comparison. Instead, you want to be using the isnan method. And so this rule is checking specifically for if you're using that or not. No-unsafe-negation raises an issue when the left-most operand is negated. Because this can have unintended effects. The trick there is the use parentheses to clarify exactly what you want to negate. A lot of these rules are on by default in the recommended configuration because they provide a great baseline to help you tighten up most [[JavaScript]] code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (6), [[Control Flow]] (2), [[JavaScript]] (1)
> **File Paths:** index.js (4)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=5)** - [Instructor] Ready to try your hand at configuring [[ESLint]] error checking features? It's time for a challenge. The start files for this video are in the challenge folder. For this project, the rules section of the eslintrc file is empty. The index.js file in the source folder contains test code with a few comments. Each comment describes how ESLint should [[React.js|react]] to the line of code that follows. Your task is to edit the eslintrc file so the five error types in the comments are flagged. You may need to fix earlier flagged errors in order for ESLint to identify errors that occur further down in the code. So fix errors as you go. This should take you 10 to 15 minutes. When you're done, join me in the next video and I'll walk you through how I approached it. Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (3), [[React.js|React]] (1)
> **File Paths:** index.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)

#### [Solution](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=5)** - [Instructor] In my index.js file, I have some code at the beginning that just sets up some constants, and then I start in on the comments that describe what kind of errors my browser should be flagging. So first off is flagging duplicate arguments in a function. I can see already I have multiple arguments with the same name, and here I have that parsing error that's automatic because my code is being interpreted in strict mode. But the idea here is that I want to write a rule that flags this as well. So over in eslintrc, I'm going to go into rules, and this, recall, is the no-dupe-args rule. And that takes a simple string, so I'm just going to make that an error. Now it's still not going to show up back in index.js, I'm still going to get that parser issue instead. But it looks like I don't even need, oh no I've got a singular session down here. So I'm going to change the second argument to session. No, that is a parameter. I think I may just not need this altogether, so I'm just going to take it out and see what happens. So that's one down. So next up, flag invalid typeof comparison string. And so right here, if we look hard we can see that this is objct, it's missing an E to spell the [[Microsoft Word|word]] object. So we're doing a typeof comparison against a string that doesn't match any commonly used data type in [[JavaScript]]. So, back in eslintrc, for this one I want to be using
>
> **[1:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=99)** the valid typeof, so that's valid-typeof. And again, that just takes a simple string, error. I'll save that, switch back to index.js, and now I have this flagged and we've got valid typeof in that screen tip. So, that is flagged as we want and I can go ahead and fix that and now that's taken care of. So that's two down. So moving along, flag template literal syntax in string. And so here, we can see that template literal syntax, the dollar sign followed by curly braces, but of course it's not being recognized by my editor because it's surrounded by quotes rather than by backticks, which would indicate a template literal. And so we've got that really long rule name for this one, no template curly in string, so it's going to be no-template-curly-in-string, and the value for this one is simply error. Saving that, switching back, now I've got a nice error, which is what I was looking for. So now I do have this type of error being flagged that prompts me to go ahead and fix it, so changing those quotes, those apostrophes to back ticks, and now the error's gone and that template literal syntax is recognized by my editor, which is awesome. So, couple more down here. Flag console method use other than console.warn. So here I've got a console.log statement, so I want to make console statements errors
>
> **[3:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=192)** except in this case I'm saying I want to make sure that console.warn statements do not actually trigger an error. So, I have to create a rule value that is not just a standard string but actually has some finesse to it. So, the error here is no-console, and the value is going to be an array. So this is all documented as everything else in that [eslint.org](https://eslint.org) man page for this particular rule. And so first we say, a string, we give a string for the type of issue that we want raised when this problem occurs, and we want it to raise an error. And then we have to specify any additional options, that's in an object. And one of the keys is allow, so we're going to specify what we want to allow, what exceptions we want to this error, and that value is an array containing one or more strings, and those strings are going to be the methods that we want to allow. And in this case, based on the comment in our index.js file, we know warn is the string that we want to allow. So, comma after that, comma after that, comma after that, saving those changes. And then back in index.js. We still have that console.log being flagged. So, couple things I could do. I could comment that out to get rid of it, but let's try changing that log to a warn, and now I can verify that my statement's working
>
> **[4:47](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=287)** because I'm doing a console.warn which is just going to log a message to the console but mark it as a warning within the browser console, within the browser developer tools. And so it's going to show up maybe in a different color or with an icon next to it. But in this case, that's what we want going on. So I've got a rule in place and my code is fixed to comply with that rule. So, one more left then, flag empty block in [[Control Flow]] structure. So, I have an else statement here that's orphaned, there's nothing in that else statement, but it's also not being flagged. So we'll go to [[ESLint]] and add one more rule. And that is the no-empty rule. Straightforward, with a value of error. Save that, come back to index.js, and it is flagged. There is my empty block statement that should not be there. And so I could start with the else and just take out everything through the opening and closing curly's, but I can also do a little shortcut here by just selecting the line that ends the previous block statement and then starts this one, and that gets me an else, it gets me a pair of curly's, and lets me leave this terminal curly here on its own line without having to move everything around. So, it's going to save a little thing in the dif for instance. So, saving that, now I have all five of those rules in place over in my eslintrc. And I have all of the issues resolved in my code.
>
> **[6:22](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=382)** So, I've got code that is looking better and working the way I want based on these rules that I've just written, and customized for my specific use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (2), [[Microsoft Word|Word]] (1), [[JavaScript]] (1), [[Control Flow]] (1)
> **File Paths:** index.js (6)
> **Exercise Files:** template (6)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course. You now have experience setting up and configuring [[ESLint]] rules that flag possible errors. To dig deeper into incorporating ESLint into a tool chain, check out a course on Integrating ESLint. If you want to understand more about ESLint syntax, check out a course on Customizing ESLint styles. If you want to learn more about the reasons behind common coding styles, check out a course on [[JavaScript]] best practices. Feel free to follow me online. Now take your new skills and build something amazing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (5), [[JavaScript]] (1)
> **Speakers:** - [sasha] (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/eslint-syntax-2255011/codespaces)

## Skills Covered

- ESLint

## Path Context

### In [[Advance Your JavaScript Skills]]
← [[ESLint- Integrating with Your Workflow]] | **5 of 10** | [[ESLint- Customizing Styles]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[ESLint- Customizing Styles]] — ESLint
- [[ESLint- Integrating with Your Workflow]] — ESLint

---

[↑ Back to top](#)