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
  - '[Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)'
prev_courses:
  - '[Learning ECMAScript 6+ (ES6+)](../Web%20Development/Learning%20ECMAScript%206%2B%20(ES6%2B).md)'
next_courses:
  - '[JavaScript- Prototypes](JavaScript-%20Prototypes.md)'
path_nav: '[{"path":"Become a JavaScript Developer","position":4,"total":13,"prev":"Learning ECMAScript 6+ (ES6+)","next":"JavaScript- Prototypes"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-05-03
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

#### [Learn how to properly scope your variables](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/learn-how-to-properly-scope-your-variables?u=76281980&t=0)** - [Emmanuel] Have you heard about local, global, and block scope variables, and don't know how they work or what they mean? Are you coming from another language, and are trying to understand how variable scopes are used in [JavaScript](../../Skills/Software%20Development/JavaScript.md)? If you've answered yes to any of these questions, you've come to the right place. In this course, we'll introduce JavaScript variable scopes, and how they work, how to define them, all their related terminology, and more. Hi, I'm Manny Henri, and I've been using JavaScript for a long time. And it is my pleasure to introduce you to this often overlooked subject that is variable scope. We'll first go through an overview of what are variable scopes, the different types, and hoisting. Then, we'll explore in depth what are global variables, and put it in practice. Next, we'll do the same for local, and finally, for block scope variables. So if you're ready to deepen your knowledge of JavaScript by exploring variable scopes, open up your favorite editor, and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **Speakers:** - [emmanuel] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/javascript-scope/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/course-prerequisites?u=76281980&t=0)** - [Instructor] This course is considered an intermediate to advanced course. We won't go over any basics of the language or syntax use, therefore, prior [JavaScript](../../Skills/Software%20Development/JavaScript.md) knowledge, or at least a good understanding of functions, variables, types, object literals, and most of the basic syntax use is important to be able to follow along. If you've never done any JavaScript or would like to learn more on the subject, take a look at our library for the Essentials course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Variable Scope

[↑ Back to Table of Contents](#table-of-contents)

#### [Course setup](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=0)** - [Instructor] As we work through our examples, we'll need to test our code on the browser and see it in action. If you're using VS Code, and would like to have the same tools I'm using, follow along. Otherwise, feel free to skip this video or install similar tools in your editor of choice. Open up Visual Studio Code and go to the extensions tab. Find the extension Live Server. This is the one we need to install. When you have the extension Live Server all you have to do is click on the little button at the bottom of your screen here to start a Live Server right away, without doing anything like [npm](../../Skills/Web%20Development/npm.md) servers and stuff like that. It will start your server directly from VS Code. Let's go ahead and install this and then reload. That's going to create a new folder on our desktop so let's get out of VS Code, create a new folder and we'll call this scope. We'll open that inside VS Code, so let's go back to VS Code go to Explorer, click on Open Folder, go to Desktop and open scope. Inside of that directory we'll create two new files. One will be the index.[HTML](../../Skills/Web%20Development/HTML.md) and the second one will be a [JavaScript](../../Skills/Software%20Development/JavaScript.md) file, so let's call this the index.js. Let's call this welcome. What we'll do inside of the index we'll create a new HTML document and we can use the Emmet shortcut doing doc, and then do a tab, and we'll get our HTML template completely done for us.
>
> **[1:37](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=97)** What we could do after that is at a script tag, right here, inside of the body, you can add a script tag like that and leverage Emmet one more time. What we'll do is put the source as the index.js
>
> **[1:58](https://www.linkedin.com/learning/javascript-scope/setup-for-this-course?u=76281980&t=118)** and let's put a little title here so Javascript scope. And save all this and then let's do a console.log to validate that everything is working fine. Inside of our index, we'll do, Hello. Let's save that. Let's go to the index and do Shift + Command + p and type live, and click on Open Live Server. To bring up the developer tools in Chrome for Mac it's Command + Shift + i, and for [Windows](../../Glossary/Service/Windows.md) it's it's Control + Shift + i. Once you have that, let's take a look at the console, that's okay. Them we have our Hello, so this means that our server is working. If you wanna close the server all we have to do is click on the port below, here. If you wanna start it, usually you should have something to start it here. So let's stop it, now you have the go live. The first time you install the Live Server, it's a possibility that you're not going to see this here if you don't, simply do Shift + Command + p to bring up the commands inside of VS Code and then look for live and then open with Live Server and it's going to start your server again. Awesome, so now we're fully set up with Live Server and ready to learn how JavaScript scoping works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [npm](../../Skills/Web%20Development/npm.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** go to (4), click on (4)
> **Tools:** vs code (6), visual studio (1)
> **Prerequisites:** install (4), set up (1)
> **File Paths:** index.js (2), index.html (1)
> **Env Vars:** html (2), npm (1)
> **CLI Commands:** find (1), npm (1)
> **Cross-References:** go back to (1)

#### [What is scope in JavaScript?](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=0)** - [Instructor] For some, [JavaScript](../../Skills/Software%20Development/JavaScript.md)'s code can be a bit intimidating but it's very simple. Put in its simplest terms, scope determines accessibility or visibility of the variable. Depending where and what type of scope we are using it will determine if your variable is available when you call it. Let's type some code to visualize what scope is. Let's remove the console log here and let's add a warrior, so var warrior = Ninja.
>
> **[0:32](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=32)** Then let's create a function. We'll create a function with a const this time, and we'll call this one screamWarrior and we won't take any parameters. Inside of that function, we'll define another variable, warrior2 = Samurai. Then inside of the function, we'll console.log warrior and warrior2 and outside of the function definition we'll run the function and then we'll console.log the warrior1 or the warrior and warrior2 and you can save this. When you look into this code here, you have the warrior and the warrior2 variables defined, but because they are defined with different types, but also in different places, their scope or accessibility is different. I'm also using var in this example and we'll explore the differences between var, let and const in this course. But if you've been following most of my courses, and also using the latest JS syntax you've been using let and const and var is rarely used. Let and const are part of the block scope variables and we're introducing ES6, it is what most JS developers use nowadays. But it's important to get a glimpse in the past as well, as there is still lots of legacy code using var, and you need to understand their nuances. Related to scope, we'll also explore what closures are
>
> **[2:07](https://www.linkedin.com/learning/javascript-scope/what-is-scope-in-javascript?u=76281980&t=127)** and what is all these things, so you understand what happens when variables are hoisted to the top of your code. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** screamwarrior (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### [What are closures?](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=0)** - [Instructor] Closures are an inner function that has access to external variables. By creating a function inside of a function, we create a closure. So let's do some code to understand and visualize this. So we'll leverage some of the code that we did on the last video, and the first thing we'll do is simply remove the console.log here, and then do a function inside of that function. We'll return an object, and inside of that object we'll have a function called shootWarrior, which will return a console.log. And this console.log will have warrior, and then warrior2. So if I comment the console.log on line 15, and I save this, and I go back to Chrome here, I shouldn't have anything here, so what we need to do is create another variable from the function here, which is const, and let's call this one newWarrior, and then pass the function screamWarrior, and then use newWarrior, and then run that function. Because that function is part of an object here, so we need to create a new variable which holds that function, and then be able to use the shootWarrior. Now if I run this, and I go back here, I should have Ninja Ninja. And let's change this to warrior2 actually. So I should have actually Ninja and Samurai.
>
> **[1:34](https://www.linkedin.com/learning/javascript-scope/what-are-closures?u=76281980&t=94)** So let's go back here. So this is the expected behavior, and here's why. Inside of that function here, we have access to a global variable called warrior, and inside of that function we also have access to warrior2, because it's part of that function. But if we run this console.log here, we don't have access to warrior2. So if I save that, I'm gonna have an error. And this is normal. So as you can see, we can access warrior2 outside of that function, which allows us to make this variable private in some ways. So in summary, closures are great ways to use variables without making them global, or accessible everywhere. As a side note, you'll see closures used everywhere in popular libraries for the same reasons we've explained here.

> [!info]- Semantic Content
>
> **Code Identifiers:** shootwarrior (2), newwarrior (2), screamwarrior (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [The different types of scope](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/the-different-types-of-scope?u=76281980&t=0)** - [Instructor] In [JavaScript](../../Skills/Software%20Development/JavaScript.md) there are a few different types of scope, local, global and block scope. We'll explore each one in depth with code examples but, in short, local scope is when a variable object or function is only available locally to a function, like the warrior2 variable. Like here. Then you have global scope. When variables, objects or functions are available to all. For example, our variable warrior1 or the function screamWarrior is defined and available in the global scope. Like this one here and the actual function here. Then you have blocks scope variables. Declare with let and const which are available within the innermost block they are surrounded by. So if we look at our current code, the warrior2 and newWarrior are block scope variables and are accessible in the block they are surrounded by. Like this one here. This one here and also this one here. This one is available in this block. This one is available in this block, so, in the whole file and the same for this one here. We'll cover later on what is the difference between the let and the const variable. We'll also explore all the types in depth over the course of the following chapters. We drive the point home and make sure you are absolutely comfortable with all these types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** screamwarrior (1), newwarrior (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hoisting explained](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=0)** - [Instructor] Hoisting is often misunderstood so let's focus some time on this mysterious [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) and what does it mean. In short, hoisting is [JavaScript](../../Skills/Software%20Development/JavaScript.md)'s behavior of moving all declarations to the top of its scope. When you declare a variable at the bottom of your file it will be hosted or moved to the top of its scope when the code is compiled. Let me demonstrate with some code. I'm gonna put some notes here so you understand what's happening. Let's remove the declaration here and simply define what warrior is here. We need to declare it somewhere. Warrior is defined here. Then, let's put a note here. And this is for closure, so I'm gonna write a note here for you guys. Wrap in a function now is a closure, there you go.
>
> **[0:56](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=56)** Let's declare our warrior way below, down here. What I'm gonna do is leave those two here and then do a console.log for warrior and warrior3.
>
> **[1:11](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=71)** But the third warrior hasn't been declared yet, so let's go ahead and first declare this warrior. Let's do a var warrior. So, warrior is declared here. In theory, if you understand the theory of JavaScript, everything runs in order. If I'm declaring warrior here and it's defined up there, it shouldn't work, but that's what hoisting is. Hosting, actually because you're declaring something, without initializing it right away, it's moved to the top and then its value is assigned here and then it would work. This is what hosting is. If I did something like, if I'm doing var warrior3 = Viking here, it will show undefined. The reason being, is because I am initializing the value as well as declaring. So, if I'm declaring first and then it's assigned here, the value's assigned here, then it's gonna work. This is what hoisting is. Hoisting, if you declare anything at the bottom, if you declare a function way below and then actually run it at the top, it's going to work. This is what hoisting is. Let's go ahead and actually remove that one here. And save this and see this in action. Let's go to our browser and I'm showing Ninja Samurai, as expected, so this is the first function here.
>
> **[2:44](https://www.linkedin.com/learning/javascript-scope/hoisting-explained?u=76281980&t=164)** The console.log that we're seeing here, so Ninja Samurai. Then we have another console.log, which is supposed to show me Ninja and the warrior3, Viking. If we go here we see Ninja and then undefined. That isn't working. So, if I went back to my code and instead of initializing my variable here, I would simply assign it at the top, but actually declare it at the bottom. So, let's change this, let me just do a copy and paste of this at the top. And then remove the assignment, since we're doing it here and save this. Then go back to our browser, now I'm seeing Viking. This is all due because of hoisting. Hosting actually grabs that declaration and looks for an assignment and because it's done at the top it's gonna work because this has been already pushed to the top, because of hoisting. All right, so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad introduction](https://www.linkedin.com/learning/javascript-scope/coderpad-introduction?u=76281980)


### 2. Global Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [What are global variables?](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=0)** - [Narrator] Global variables are any functions, objects, variables that are declared outside of functions. And when we say global, we mean they are accessible throughout your file. And this is a good time to introduce the variable, lifetime. A term you may hear from time to time. The variable lifetime is when the variable is deleted after it has been declared. In the case of global variables, it is available when declared and deleted when the application is closed, in most case when the browser is closed. And for that reason, it is often not recommended to use global variables. Let's say for example you initialize a global variable with user data. This can be a [Privacy](../../Skills/Data%20Science/Privacy.md) or security issue. As someone could literally pull data from this variable in the browser. Two nuances to global variables. If you don't declare a variable and you assign a value to a variable inside of a function, it automatically becomes globally available. Another danger, it is always better to declare your variables. But if you use strict mode in [JavaScript](../../Skills/Software%20Development/JavaScript.md), they won't be automatically global. Let's take a look at all this in code. Let's create a new variable that we'll call a warrior. And this one we'll use a const, and we'll create an object, that will hold properties for this warrior. So a name, Jujin Take. Let's give him a type. He's a ninja. Let's give him a weapon.
>
> **[1:36](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=96)** And let's give him a shuriken. And finally let's give him some agility. And let's do 79. And let's correct a little typo we have here on the weapon. Awesome. Right now if we look at this guy here, well this guy is globally scoped. So it means that it is available all throughout this file, or the global scope. Now if we actually go to the function, this function is also global in scope. Because it is declared in the global scope here. It's not declared inside of a function, so this is global as well. Now let's remove that comment here. Let's define a variable without declaring it. We'll do warrior three, and put viking to it. If you look at this, this is the nuance of global scope. If we declare a variable here, if we do const, let, or var warrior two. This is locally scoped. But this is the nuance of global scope. If we actually do not use let, or const or var, when we're declaring this variable inside, it will automatically be globally scoped. So be very very careful with that and always declare your variables.
>
> **[3:11](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=191)** In this case, this one will be globally available. And I'll show you in a second. If we go to our console logs in here, and let's remove that code for now. If you wanna take a look at that code, and if you wanna keep it, go back to the exercise files, we have copies of that code. If we remove this, we can actually console log warrior, and also warrior three. Because warrior three is in here, but it hasn't been declared and therefore is automatically declared as a global variable. Let's save that, and let's go back here. And as you can see, we have not only our object here with all the properties, but we also have at the end a samuri which is the local variable here. And that's this function here. But if we go back to the second one, we shouldn't see viking. Why is viking here? Like I said, because this variable hasn't been declared before it is initialized. Then this is automatically declared as a global variable. Now you could do something that would change this automatically. If you use strict in your JavaScript, if you do this syntax, use strict, and you save. Now this variable here will not be available globally. If we save this, we're gonna get an error into our code. Warrior three is not defined. Whatever you do, declare your variables.
>
> **[4:43](https://www.linkedin.com/learning/javascript-scope/what-are-global-variables?u=76281980&t=283)** Always use let, const, or var. And I would recommend to use let or const, since this is the latest syntax with the S6. But if you are starting to use or declare your variables without let inside of a function, then make sure you use strict so you catch these errors. But I would always suggest to declare your variables correctly with the little syntax const, let, or var first. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)


### 3. Local Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [What are local variables?](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of global variables, what are local variables? They are variables declared inside of a function. I did mention that a couple times already, but we'll drive the point home in this video. In other words, anything you declare inside of a function is a local variable. Local variable's lifetime is from when the function is declared to when the function is completed. Therefore, when you have a variable inside of a function, when that function has completed its code, then that variable is no longer available. Also, since the local variable is deleted when the function is completed, many functions can have the same variable name. Let's explore how the syntax looks when dealing with local variables. Let's remove all this code here and let's start from scratch. Let's create a new variable called screamwarrior, which is a function, and then let's declare two variables inside of that function. The first one is called warrior1 and this one is a Ninja. Again, we're hard on the warriors here and then let's declare a second one, which is called warrior2. This one is Samurai. Then, what we'll do is return at the end of that function with template strings, our warriors are warrior1
>
> **[1:34](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=94)** and warrior2. And then we could log this. Let's log and run our function all at once. These functions, when you actually run this, and let's go to the browser to take a look. Everything works perfectly. So, all warriors are a Ninja and Samurai because these variables are actually available here and we're returning this with the variables inside of that function. When we run the function, these variables are actually printing in the console.log because they're available when we actually return it. If we did something like this, console.log, and try to get warrior1 or warrior2 on the console.log without leveraging the actual function, let's go back to the browser, we're gonna get an error because warrior1 is not defined. If we add warrior1 define at the top or the global scope, then it would say warrior2 not defined. Let's type a note here, so you can keep this into your notes. If you wanna go back to the exercise files, you'll see this. Warrior1 and warrior2 aren't available globally
>
> **[2:55](https://www.linkedin.com/learning/javascript-scope/what-are-local-variables?u=76281980&t=175)** and that's why we're running into issues here. Let me come and tab that lower guy here. The second thing I wanna show you in the local variables. Because these variables are inside or locally scoped, we could use or if we could do a second function and do the exact same thing with the exact same variable. We could do screamwarrior2 and then inside of this function, use the same variables again and change those variables to something else. Let's say Viking for this guy and then for this guy let's do a Soldier, and then we could do screamwarrior2 and then screamwarrior1 or screamwarrior, the first function. Those two functions are gonna run fine because these are locally scoped, so they're available for this function, but they're not available outside. There's no impact from one to the other. If we save this, we should see the two sentences. Warriors are Viking and Soldier, warriors are Ninja and Samurai. This is a look at local variables. Let's move on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is called (2), in other words (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1), exercise files (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Block-Scoped Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [What are block-scoped variables?](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/what-are-block-scoped-variables?u=76281980&t=0)** - [Instructor] The last item we need to cover is block scope variables. They were introduced with ES6 and uses the let and const keywords. If we go back to local variables they are available within the function they are declared in. But with block scope variables they are only available inside of the block they are declared. For example, if we take a look at this code and this code, they are only available within this block of code. So, if we declare a variable inside of an if statement in a function, this variable won't be available in the function outside of the if statement because it is block scoped, inside of the if statement and so on, so forth if you have multiple, nested functions. When we want to declare a variable, which one do we use, let or const? What is the different in between them? In short, let allows to mutate or update the variable as you please. While const is immutable, or you can't change the value once it is initialized. If we took a look at this variable here, the warriorsPerPlatoon, because it is a let we could reassign a number to this variable. We could say something like, warriorsPerPlatoon and do 70 instead of 60. If this was a const, we couldn't do this and, in fact it would actually return an error if we did this. This might be a bit confusing, so let's explore this further, in code, in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** warriorsperplatoon (2)
> **Cross-References:** go back to (1), in the next (1)
> **Env Vars:** es6 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Explore block-scoped variables with code](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=0)** - [Instructor] All right so let's explore the block scope variables a little bit further in this video. So let's remove all this code and let's start from scratch. The first thing I'm gonna do is declare a let variable, so let's do a warrior one and let's assign again the ninja and let's do a const right after that and let's do a warrior two. Let's call this guy viking. So if I console log these two right now and because they are in my scope I shouldn't have any issues, so let's start with that. So let's save, let's go back here, and we have ninja and viking, so we're good. Then if we want, and I'm going to be proactive and this will return an error. If we were to reassign a warrior two, so let's do warrior two and reassign it to, let's say samurai, and then console log warrior two we'll have an issue, because this is a variable that can not be mutated. So let's go here and we got assignment to constant variable error. So we can't do this. This is a const, but if we did this to let's say warrior one and then console logged warrior one again because it's a mutable variable
>
> **[1:34](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=94)** we have no issue here. So let's save this, let's go back here, and we are good. So let me give you another example. So let's create a function called screen warrior, the same function we've been using since the beginning and then inside let's do an if statement. So let's do if warrior two, I think there's a little typo here, equals viking then return this or do whatever is in there. So what we're gonna do is also create a new variable. We're gonna do a let warrior three equals infantry solider. Let's do a console log and let's do template strings, our army or consists of warrior one. Let's copy and paste that little portion of the code comma paste and then do two and then let's do the same and warrior three exclamation mark. Okay, so now if warrior two is a viking, so that will be met with a true then it is going to create
>
> **[3:09](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=189)** this variable that is block scope again, because we're using a let and we're doing this inside of the if statement here. It's not going to be available either here or outside, because it's block scope. So this is only available within that block here. I can show you by doing a console log right after of and we'll comment that for now, because we want to make sure that our function works first but then what you could do is do a warrior three and this is not going to be available either here or if we copy and paste that outside there either once we run our function. So let's go and run the function and save and let me comment that for now, because I want to show you while it works and then we'll show you that this variable here that is blocks scope, so only available inside of that block cannot be used here or there. So let's first start with this and save and let's go back to our browser. Now our army consists of samurai, viking, and infantry solider. So as you can see in here we have access to warrior one, warrior two, and warrior three, which has been declared inside of the block, but if we were to comment out the console log here and save and go back here
>
> **[4:46](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=286)** we would have an issue because warrior three is not defined or not accessible there. So let's comment this line and then let's comment out in here in the global scope, save that and we get the same result. So as you can see when we use let or const it's only available within the block scope it is part of. So right now these two are available across here, because they are declared at the top level. This guy here is only available within the if statement, because it is declared here. If I was to declare something like let warrior four equals, let's call this guy just cannon shooter and here use warrior four, save that, and let's comment this guy here so we don't get any errors. Let's go back to our browser then we have access to this guy because it is within that block scope here, so it's within the scope of the function screen warrior and it's used inside there. If I use warrior four here we'd have an issue. So let's save and then go back here and we have a reference error. So this is how block scope works. So when you actually use let and const
>
> **[6:20](https://www.linkedin.com/learning/javascript-scope/explore-block-scoped-variables-with-code?u=76281980&t=380)** make sure that you're using it or referencing it inside of the same block. Let's move on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [JavaScript strict mode](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=0)** - [Instructor] Let's delve into [JavaScript](../../Skills/Software%20Development/JavaScript.md) strict mode. This feature allows you to place your entire script or individual functions in a strict operating context. Let's find out what that means. Strict mode is a way to catch common coding issues and enforce stricter parsing and error handling in your JavaScript. By opting into strict mode, you can avoid silent errors and ensure you coded the errors to best practices. Using strict mode helps in multiple ways. It catches common coding mistakes and unsafe actions, such as assigning to undeclared variables. It prevents the use of keywords reserved for future JavaScript versions, and stop you from doing things that are generally considered bad practices. To enable strict mode, simply add use strict. So for example, in this function here, what will you need to do is add use strict like so. And then all these errors here would essentially be bad and would actually be notified. So if you create an unintendedGlobal, you would actually get an error here. If you console this, which basically refers to the window, it would get you an error. Or if you are deleting a variable, not allowed in strict mode, you would get an error here. Or if you're duplicating a parameter name, you would actually get these errors. So here, so param, param, and then you're using it,
>
> **[1:35](https://www.linkedin.com/learning/javascript-scope/javascript-strict-mode?u=76281980&t=95)** it would return something else. So in just a few minutes, you've learned how strict mode can make your JavaScript cleaner, more reliable, and more secure. Start using it today to avoid common pitfalls and enhance your coding standards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** such as (1), for example (1)
> **Code Identifiers:** unintendedglobal (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-scope/next-steps?u=76281980&t=0)** - [Emmanuel] Hopefully you've gained a bit more knowledge on what are [JavaScript](../../Skills/Software%20Development/JavaScript.md) globals, local, and lexical variables and how to define and use them. Considering this subject has been an advanced one, the next step could be any JavaScript knowledge you may not have at this point. If you need more knowledge on any advanced JavaScript subjects, look for those subjects in our library. Thanks for taking my course, and I'll see you in a bit!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)
← [Learning ECMAScript 6+ (ES6+)](../Web%20Development/Learning%20ECMAScript%206%2B%20(ES6%2B).md) | **4 of 13** | [JavaScript- Prototypes](JavaScript-%20Prototypes.md) →

## Appears In

- [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](../Software%20Development/End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](../Software%20Development/Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](../Software%20Development/Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](../Software%20Development/JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](../Software%20Development/JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)