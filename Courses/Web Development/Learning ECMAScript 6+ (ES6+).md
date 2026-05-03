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
created: 2026-05-03
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
> **[0:05](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-modern-javascript-today?u=76281980&t=5)** - [Eve] [[JavaScript]] is more popular than ever and it's usually the go to for building web applications. As the web changes though, JavaScript is changing too. That doesn't mean we have to get rid of our old knowledge and start over again. But on the contrary, it means that new features are being added all the time to make our jobs as developers easier and more efficient. My name is Eve Porcello. I'm a software developer and a teacher. When I started to program years ago, JavaScript was really one of the first languages that I reached for. I use it for almost everything and I love to check out the new features that can help save me time and write better code. In this course we'll get into [[ECMAScript]]. What it is, how to use it, and we'll cover a ton of features to help you work more effectively with objects, arrays, functions, and classes as you build your own apps. There's a lot of fun stuff here that will work in almost every browser today. So let's take a look.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Narrator] Before we begin this course, there are a few things you might want to have in place before we get started. So a few things to know, this course does assume a little bit of knowledge of [[HTML]], a tiny bit of knowledge about CSS, and then some information about [[JavaScript]]. So if you know basics like strings, numbers, arrays, objects or functions or at least you've seen these things, you should have everything you need to get started. We're also going to be using a code editor of some sort in this class, you can pick whatever you want. I'll be using VS Code and then you'll just need a browser. So I'm going to use Chrome throughout the course. That's really it. That's all you should need to get started with these new features of JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[HTML]] (1)
> **Env Vars:** html (1), css (1)
> **Tools:** vs code (1)
> **Speakers:** - [narrator] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions, and a couple of code editors that you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with the code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four areas. We have instructions here on the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right. And a console for output in the bottom left. You can use these drag handles to allocate space as you'd like. And to get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description, as well as the parameters and the expected results. So once I've read through the code challenge, I can go ahead and start to write my answer. We create our answer in the top right code editor. And there are comments in the starting code showing where to put our solution. So here, I can take in this pets array and I can create a new function called byCategory. byCategory is going to take in a category
>
> **[1:38](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/how-to-use-coderpad?u=76281980&t=98)** and then we're going to check to see, does the pet exist? If so, let's compare the pet category with the category. Then we're going to return pets.filter, and we'll call byCategory, cat.length. So this is a function that's just going to count all of our cats. And it's going to take a look at all of this data to just grab the cats. No dogs, no rabbits, no anything else. When you click test my code, you'll see a message indicating whether your code returned a correct result. If your code isn't successful, you can ask for help. So we can set show expected result to true. So that's going to show us the expected result. We can also turn on hints by setting that to true. And that's going to return some various hints, so that my path to finding the right answer is a little easier. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can always scroll sideways to see all of the text. When you've finished each code challenge, return to the course's table of contents and click the next video to see my solution.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/what-is-ecmascript?u=76281980&t=0)** - [Instructor] A discussion of what [[ECMAScript]] is should start with a quick recap of the history of ECMAScript in general. In 1995, [[JavaScript]] was created by Brendon Eich at Netscape, and then was adopted by [[Microsoft]] as JScript. With different versions of a language for different browsers, there was soon a need to standardize the language. Enter the ECMA, E-C-M-A, or the European Computer Manufacturers Association is the governing body that provides the ECMAScript specifications for JavaScript browser implementations, and many other computer governance projects. The people who are on the ECMAScript committee work at companies that make browsers, companies that use a lot of JavaScript, or are JavaScript community members. Shortly after its foundation, the ECMAScript 1 spec was released in 1997. Following this, ECMAScript 2 and ECMAScript 3 came out really quickly. ECMAScript 4 was a hotly contested one. It was argued about, and then really never came out. So this was eclipsed by ECMAScript 5 in 2009. This one gave us array methods that we rely on like for each, map, and filter. The last kind of huge release of features was an official spec for ECMAScript 6, sometimes known as ECMAScript 2015. Since then, it's been a little different. Instead of numbered versions, features come out by year. So every single year we'll see new features being released, and those are attached to the year.
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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/staying-up-to-date-with-new-releases?u=76281980&t=1)** - [Instructor] In the previous video, we talked about the [[ECMAScript]] Committee as kind of this shadowy, vague concept. It's this nebulous group of people that does something related to [[JavaScript]]. But it's not a secret what they're up to. So you can stay on top of what this committee is up to by going to the repo. So you can use this repo [github.com/tc39](https://github.com/tc39). In it, you're going to see all of the different proposals that are part of the ECMAScript process. So you can see what stage they're in and you can actually click on them to access all the code. So if you're wondering how a certain feature is put together, you can take a look. You also can click on ecma262 and that will give you information about contributing and all the different proposals and their stages as well. So do you have to monitor this repo very closely and memorize all this stuff? Absolutely not. But if you do want to look at what's coming to the language, you can do so here.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-browser-support?u=76281980&t=0)** - [Instructor] When the [[ECMAScript]] Committee approves new features, companies that make web browsers have new guidelines for how to use [[JavaScript]], but that doesn't necessarily mean that a magic wand is waved, and all these browsers automatically support that feature. Something that can help you if you're trying to explore some of the newer corners of the ECMAScript ecosystem is this compatibility table right here. So this on the sixth tab will show us a lot of the things that we're using today. This will show that most of these things are already natively supported by the browser, but as you click into ESNext, you'll see that these new-new features are in various stages of support, and you may need to polyfill or use compilers to make this work appropriately.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=0)** - [Instructor] In earlier versions of [[JavaScript]], there was only one way to create a variable, and that was to use the var keyword. So I have an [[HTML]] document set up here. I have added a script tag, and I'm just going to place some JavaScript code directly there in the script tag. So I'm going to create a variable called topic, set it equal to JavaScript, and log it. Now, inside of the script tag, using this topic variable, I'm going to go ahead and create a loop. So if the topic exists, we're going to reset the value of this topic to [[ECMAScript]]. And then we're going to try to look at the value of this topic inside of the block. And then outside of the block, it's called the global, so we'll try to log that value too. So you might think that because we're inside of a loop, because we're inside of a block scope, we haven't changed the global, and the truth is we have. We have reset the value of topic here on line 12, and we've overwritten the value. So instead of var topic, we're going to say let topic and set that equal to ECMAScript. Notice now that the topic has block scope. In other words, inside of this if statement, the value of topic is ECMAScript. Outside of the block in the global scope, it's JavaScript. Let's extend this a little bit, and we're going to create some elements on the page. So we're going to create some dom elements using JavaScript. So we'll create a variable called div, and then we'll create one called box that will be equal to document.getElementById box,
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=94)** so we're going to select that element. Now, inside of our HTML, we want to create a div with an ID of box, so that that can be selected. Now we're going to create a loop. And this for loop, we're going to use to create a bunch of divs. So we're going to create five different div elements, and we're going to add them to the dom. So for var, i equals zero, i is less than five, so whenever i is less than five, we want to keep iterating through the array. And then i plus plus, meaning we want to increment the value of i every time we iterate through this loop. All right, so here on line 14, we're going to set the div equal to document.createElement div. We also want to add an on click handler to our div, so we'll set this equal to a function. Every time we click on one of these div elements, we want to capture the value of i, so we want to take a look at whatever the value of i is for this particular box. And then finally, we want to make sure that the divs are appended to our box element. So there we go. So the next thing I want to do is let me close the console really quick. I want to add some style, because we aren't seeing these elements appear yet. So we can go ahead and add a selector for box. Just for the sake of looking halfway decent, we're going to add some flex box, and we're going to justify the content with space around. So there's a little bit of space
>
> **[3:07](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-let-keyword?u=76281980&t=187)** around each of these elements. We then are going to create a selector for the box divs, giving them a height, a width, and a background color. Okay, so now if we refresh this, we should see those purple boxes appearing, and remember, I have that on click handler and I want to see what the value of i is every time I click one of these boxes. So if I click on the third one here, it says five, five. All of them are saying five, which is not what we want. We want to know the right index for each of these elements. So the way that I can fix this is fairly straightforward. I can just replace var with let inside of the loop. And now we're capturing the correct elements when we click on each one of these boxes. So this is pretty cool. Let is helping us enforce block scoping in JavaScript, which isn't something that existed before this keyword existed without having to do a lot of workarounds and scoping protection to make that possible. Let will make that possible right out of the box. No pun intended.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=0)** - [Instructor] In addition to let, there's another way to create a variable with [[JavaScript]], and that's to create a constant. So we can use the const keyword, just like we use the var keyword to create a variable that cannot be reset. But before we get to it, let's look at how we might reset the value of a variable using var. On line nine, we'll create a variable called pizza, and we'll set it equal to true. On the next line, we'll reset the value of pizza to false, and then we'll console log it. Not surprisingly, when we try to log this, it's going to reset the value of pizza to false. So by the time we hit the console message, pizza is false. Now, this makes sense in this context, but it's really a little scary. Consider this file was 100 lines long, and I didn't see that pizza's value was reset later in the file. I would just reset the value without seeing any sort of warning. This is where the const keyword comes into play. Let's see what happens when I change the var keyword to const. So here on line nine, I'm going to replace it, and as soon as I try to run this again, we're going to see an error. It says there's an uncaught TypeError where there's an assignment to a constant variable. We are not allowed to do this. We can't reset the value, and it's automatically going to throw an error. So this can be a nice little safeguard, a bit of peace of mind when you're dealing with variables. Sometimes our files are very long,
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-the-const-keyword?u=76281980&t=95)** sometimes different JavaScript files rely on each other in different places. So this can help you deal with making sure that your variables are not being reset.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=0)** - [Instructor] Another powerful feature of [[JavaScript]] that you can use are template strings. Template strings or template literals allow you to tap into the functionality of template languages to format your JavaScript code with variables. So the first thing I want to do here to get us started is I want to clean up our file a little bit. I'm kind of tired of writing our JavaScript here in the script tag, so I want to link to a file called script.js. And this is just an empty JavaScript file that is in the same directory as our index file. And this will just allow us to contain all of our JavaScript code in one place, making it a little easier to read. So here on line one, I'm going to create a function called print. The print function is going to take in an argument called first name. Then it's going to return a string of hello, which will be concatenated with the value of first name. So we'll use a comma as our concatenation operator here, then we can call the print function, and we'll just send it a string, or send it a first name Isabelle. Now, if I take a look at this in our console, we're going to see that this is being logged appropriately, pretty cool. You may also have seen a plus sign used as a concatenation operator. So the only thing to know about that is it doesn't automatically add the space, so you have to do so in the string. But here's where template strings come into play. What I'm going to do is I'm going to,
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=94)** instead of using these double quotes, I'm going to use back ticks around the entire string. So these back ticks, they're little ticks that you can see in the upper left hand corner of your keyboard. We're going to use that to wrap around the entire string, and then any variables we're going to surround with a dollar sign and two curly braces. So let me see if this runs, it does, and then I can swap out the name to make sure that it's working correctly, and it looks like it is. So let's extend this a little bit, and I'm going to create another function called create email. So create email is going to create for us this kind of confirmation email for a purchase, create email takes in first name and price. We also will establish a price for shipping, which will be 5.95, and then we're going to have a slightly longer console message here. So we're going to create a template string again, we'll use those back ticks. We'll surround our first name with the template. The template string is also going to recognize any spacing, so we can add line breaks like we've done here for our total. We can add another line break for shipping. And when we call the creating malfunction and we send it a name and a price, we're going to see that added to the template. Now, another kind of cool thing we can do is we could add a line called grand total. Grand total will be the total of the price, and the shipping price to create this grand total.
>
> **[3:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?u=76281980&t=189)** So inside of the template, it's going to recognize any addition operators, so we're going to add together the price and the shipping, and we'll see that added to the template. Finally, let's add some dollar signs here. So we see the dollar signs as part of the template, but we also want dollar signs to be printed right before that template begins just to make it look like we're using some currency here. So there we go, we've added those to the template. Awesome, so our variables are appearing in the correct spots. We're doing some simple calculations, and our templates string recognizes all of the spacing without any special formatting characters for new lines. So there we go, we've created our first template string.

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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=1)** - [Instructor] There are a few built in utilities that are part of [[JavaScript]] that can help us complete common tasks like searching strings. Let's take a look at how a few of these might work. All right so we're going to create a variable here called planet, which will be set to earth. And then we'll use one of these methods called startsWith. So console log planet.startsWith Ear. We're going to make sure that planet, this variable starts with those letters, E-A-R. If that's true, it's going to return true. If false, it'll return false. So do note that this is case sensitive. So if you say lowercase E, you're going to see that it's false. We can also use endsWith to search a string. So we can use endsWith, and it looks like that's true. If I replace this with an S, it will be non-true. If you're ever in a situation where you want to search within a string, you can use .includes. So we can say planet.includes h. And this will evaluate to true because there's an H in this string. Let's try it again but this time we're going to say Earth1. It's going to search for the first Earth. When I click refresh on that we see false because even though it is a partial match, there is something that's incorrect there. Finally we can add the planet .includes art. Art is in the middle of earth there,
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-strings?u=76281980&t=93)** so we can go ahead and click refresh. And we see that that's true. All right finally, we have a method called search. When we use search, we'll identify the index or the location in the string of the phrase I'm searching for. So for example, if I search for art like I did with includes, this is going to tell me where in the string art shows up. So it starts at position one. Keep in mind that this will find the first instance of the search string art, even if it's present more than one. So there you go, four different array methods. StartsWith, endsWith, includes and search. All of which will help us evaluate the contents of strings.

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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=1)** - [Instructor] At the core of all of our [[JavaScript]] applications are primitives. Primitives in JavaScript are types like numbers, strings, arrays, objects, and more. Symbols are a new primitive type in JavaScript that were given to us with ES6. Symbols are primarily used as unique IDs. What's nice about them is that they're not going to conflict with object string keys. So we create a symbol by using a factory function. In other words, we're going to call a function to create this symbol. So we're going to create an ID equal to symbol. Then I'm going to create an object with a couple different keys. So we'll have one for title and then inside of the topics array, we'll just have some topics related to JavaScript. Strings, arrays, objects. The next thing I want to do is let's just console log our course info. We'll take a look at that in our console and we should see the title and the topics are there. Now right before that course info console log, what I want to do is I want to set the ID of course info to this number. I want to give it a unique identifier. This is going to be saved here as a symbol. So if I console log that I should see it. What happens if another developer comes through and adds in an ID field to the course info object?
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-symbols?u=76281980&t=96)** The ID will be JavaScript course. Now if I try to log course info again, we're going to see that ID has been added. But even though I've added an ID as a symbol, there's no naming conflict. So this is one possible reason to use a symbol if you want to capture a unique identifier and associate that with an object, make it a symbol and you'll never get into naming conflicts.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=0)** - [Instructor] The map object holds key value pairs. So what's the difference between a map and an object? In a map, any value, both objects and primitive values may be used either as a key or a value. So let's take a look at what these maps look like. Here on line one, I'm going to say, let course equals new map and we'll call that map constructor. Maps then have these methods on them called set so we can set values. So the key would be [[React.js|react]] and the value would be description ui, so that object. So then we can say course.set jest, and we'll give that one an object description as well. Jest is all about testing. So once I hit save on that, I want to console log it. Let's console log first, the course, then we'll console log course.react. Now, if I try to run this in the browser, we'll see the map being logged, but course.react, we're not seeing anything there. And that's because a map is different than an object, so we can't access the keys with dot notation. Instead what we'll do is we'll use this method called get. So I can say course.get react, and then I should be able to see the value, so description ui. An important thing about maps is that keys can be any type.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=95)** So let's go ahead and create another one of these maps. This time we're just going to send the values directly into the constructor versus using those set functions. So the first entry in this map, the key is going to be new date. Why not? The key will be a dynamic new date and then the value will be a string called today. The second one here, we'll use two. We'll use a [[JavaScript]] number as our key. Then we can set the value to this object that has a nested array inside of it. We'll just use a traditional string here for this key. And we should see that all of that is being logged appropriately. Another little utility we can use with maps is if you ever want to see how many entries are in this map, you can use dot size. So details.size will give you three, which is the number of items that are in that map. There are also some useful methods that you can use on map objects. So let's say you wanted to iterate through a map object, you could do so easily using the for each function. For each works as you would expect. It's going to take in that callback function and then for every item in the map, we're going to console log the item. So just to recap, why would you want to use a map? Well, you might want to use something other than a string as a key.
>
> **[3:09](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-maps?u=76281980&t=189)** Unlike objects, maps iterate its elements in their insertion order. So unlike objects that can come back in any order, the key value pairs can come back in any order, map objects are always going to deliver those back to us in the order in which they were added. So maps are a useful data type in JavaScript that are fairly new to the language, but you can use them for all sorts of interesting things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[JavaScript]] (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Working with sets](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=1)** - [Presenter] Sets are collections of values that can be of any type, but the rule with Sets is that each value must be unique. The API of this is a little similar to Map, but a little bit different as well. So when we create a new set, we're going to use the constructor and then we can make use of some functions on the Sets prototype. So the first thing we'll do here is we will add a book to our set, "Pride and Prejudice." And then let's go ahead and add "War and Peace" as well. Once we've done this, we can log books to our console. And you'll see that this is not quite like a regular object. It looks a little bit more like a map. We see a couple different entries here and both of these are on an index. So zero and one. We also have access to that dot size utility and dot size is going to say that there are two books in this set. Another method that we can use is dot has. So let's on line eight here, check to see if our set has "Oliver Twist" in it. So we can say books dot has, and then we'll pass in the string for "Oliver Twist." Once we try to run this, we see that this is false. There's no book of that name, but we can always add it. We could add our own line for this, but just know that these can be chained on to each other as well.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=93)** And then books.has, will evaluate to true. Another method that we can use with a set is dot delete. So if we want to delete "Oliver Twist" from our set, we can.
>
> **[1:52](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-sets?u=76281980&t=112)** Like I mentioned too, every one of these values must be unique. So if I try to add "War and Peace" again, we're not going to see it in our set. It's just going to contain one instance of that. So with a set, it feels a little bit like an array. So I might think, hey, I might want to map over this array. I might want to map over a set too. So let's give it a shot. We're going to map over our books and for each item, for each book in our set, we want to console log each item. Now, as soon as I try to do this, I see that books.map is not a function. So I do need to use for each for this because dot map isn't available for a set.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=0)** - [Instructor] Let's create a solution for this user processor function. The first thing that I need to do is manage the username and age here. So on line 12, I'll create a new value called User Data and we'll set that equal to an object that has username and age as keys. Then we're going to create our welcome message. So the welcome message, we're going to use a template string for this, so that we can easily inject dynamic values in here. We're going to use these back ticks and we'll say Welcome comma, we'll use the expression here with the dollar sign and the curly braces to plug that username right in there. And then we'll say, You are dollar sign, another variable, age years old. All right, so that's our string. The next thing that we'll do is create a value for isAdmin. So this is going to make sure that that check occurs. So we'll say username.toLowerCase includes admin, all right? Now with the power of object literal enhancement, we can now make this even better. Down here where we return our object, we could say user data is set to user data,
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-user-processor-function?u=76281980&t=94)** welcome message is set to welcome message, and isAdmin is set to isAdmin. But that seems a little redundant to me and probably to you. So let's go ahead and remove that there. You can remove everything that's after the colon and this object should be complete. So let's cross our fingers and test our code. I'm going to click Test My Code down here, and then this shows us that everything is coming back as we expect. Nice. So a couple of different ES6 concepts here. We're using the template string, we're using dot includes. We're using object literal enhancement, and all of this is working together to create this awesome user processor function.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=0)** - [Instructor] The spread operator does a lot of powerful things with three small dots. The spread operator turns the elements of an array into arguments of a function call or into elements of an array literal. Let's take a look at this. I'm going to create an array of strings. So we have some cats here. And then I'll create another array of dogs. Then I'm going to create an array of animals. Smoky. We have Miro the fish, and then we have Swimmy, a shark. So if I wanted to add the cats and dogs to our animals list, I might want to just add them here. So I'll just comma-separate them, and then I'll console.log the animals to see what we get. But then immediately, we notice that we have our three items from the original array, but then we have two nested arrays in here, which is really not what I was going for. I want everything to be at the same level with no nesting. Here's where the spread operator comes into play. I can add three dots right in front of cats, and three dots right in front of dogs. That's called the spread operator. That's just going to take all of the elements from the cats array and the dogs array, and it's going to spread them. It's going to push them into the animals array, so that each of those individual values are available. So the spread operator is really powerful when it comes to array transformation.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-array-spread-operator?u=76281980&t=95)** Notice too that the values do not have to be unique. So if I changed Biscuit to Swimmy, and I tried to log that again, we still see both of them being added to the array.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Destructuring arrays](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-arrays?u=76281980&t=0)** - [Instructor] Destructuring assignment gives us an easy way to extract data from arrays and objects and assign them to variables. Let's take a look at how destructuring works with arrays. Here I have an array of cities. Now if I just wanted to grab a couple of these cities, I could access them by their index. So I could say city zero, that'll give me Spokane. But a new way to handle this type of access is to handle it with destructuring. Let's update cities and instead I'm going to use the array brackets here and I'm going to create a variable name. I'll call it first. Now I can console log first. Then that's going to give me the first item that's in the array. If I wanted to grab the second item in the array, I could. I can console log second and that'll give me Boston. Now these variable names are whatever you want to name them, so I could call this fifth, but that wouldn't mean it's the fifth one. It just means that I've called it fifth. All of these are going to be by position. A nice little shortcut that we can use too is that if we did indeed want to see the fifth item in this array, if I didn't want to create variable names for all of these elements, I could just add commas. So I'll just add enough commas to take the place of two, three, and four, and then I will be able to access that fifth variable and get Portland. Now this is rendering correctly with the elements in the array being represented by variable names. So to recap, array destructuring is a popular syntax that you can use to assign a variable name to a position in an array.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Searching arrays with the .includes function](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/searching-arrays-with-the-includes-function?u=76281980&t=0)** - [Instructor] We looked at the .includes function earlier when searching strings, but you can also use this utility to help you search arrays. Consider our array of cities. We have Spokane, Boston, Los Angeles, Seattle, and Portland. So I can console.log(cities.includes("Boston")), and this should be true 'cause the array contains that value. Then, if I search for a city that doesn't exist in the array like Santa Barbara, we're going to get false. You used to have to incorporate a third-party library to handle functionality like this, but not anymore with the includes function baked directly into the language.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing a Smart Array processor](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=0)** - [Instructor] Our task is to search for elements in an array using some ES6 features. There are, as we would expect, many different ways to approach this, but I'm going to show you one. We have this function here called contains value. Contains value takes in an array and a search value. And so I need to replace everything that's in this function.
>
> **[0:28](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-a-smart-array-processor?u=76281980&t=28)** Now we want to return array dot includes search value. Alright, so let's give it a test. We'll test our code and we'll get true. Nice. So this is correctly used the Includes Method. What's really awesome about working with ES6 is that we can use some of these methods like this. This helps us to avoid having to write complicated loops and handle all sorts of values that are kind of difficult to track down. We can do everything in one line of code with array dot includes.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (2)
> **Speakers:** - [instructor] (1)


### 4. ECMAScript Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Enhancing object literals](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=3)** - [Instructor] Think about an object, any object. Mine is going to be a skier. What I want to do is I want to build a function that is going to return an object that's going to return this skier. So the skier will take in a name and a sound. Something that they yell when they're excited about skiing. And the skier will then return an object that builds together the name and the sound and a powder yell. So powder yell just means if it's really snowy, you're going to get excited and you have to yell. So we're going to go ahead and use let yell and I'll set that equal to this.sound.touppercase so it'll take that sound string and make it uppercase. And then we'll console log the message using a template string. Now when I call this function here on line 12, I'm going to send it a name and then I'll send it some sort of yell. Now we see that skier is a function that we've created. Let's go ahead and console log the skier name. We have that and then we also can call that powder yell method to make sure that that's working correctly as well. We see that it is. Everything is capitalized. This is looking pretty good, but a newer object syntax called object literal enhancement can make this even better. So notice here on line three and four, there's a lot of repetition here. We're saying name equals name. It feels like we could be able to shorten this a little bit and with object literal enhancement, we can.
>
> **[1:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/enhancing-object-literals?u=76281980&t=97)** You don't even need to include the colon and name again. We can get rid of that. Same goes for sound. Now if we try to call that powder yell function again, we should see that this is still working and we can test it out by swapping out woo for yeah and everything works. So this syntax in [[ECMAScript]] is called object literal enhancement. We're creating an object literal and making it cleaner and more readable with less repetition.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/creating-objects-with-the-spread-operator?u=76281980&t=0)** - [Instructor] In an earlier video, we looked at how you can use the spread operator with arrays. in this video, we'll take a closer look at how to use the spread operator with objects. So I'm going to create an object here called daytime. Inside of the daytime object, it's going to have keys for breakfast. We'll have some oatmeal. And then for lunch, we'll have peanut butter and jelly. Then we're going to go ahead and create a variable called nighttime. This is going to be equal to mac and cheese. So now what we want to do is we want to create sort of a menu. We want to create an object that contains both our breakfast, lunch, and nighttime items. So we could try this just by adding daytime and nighttime to our backpackingMeals. But if we console.log this, we see the same situation as with the array. We see some nesting going on where we don't want it to be. We want to take both the breakfast and the lunch items and put them at the same level as the nighttime. So we're just going to use that spread operator, those three dots. And now we've built an object that has breakfast, lunch, and nighttime meals, all with their own keys. So that's the spread operator. It's a syntax we can use, those three dots, to push the items from one object into another.

> [!info]- Semantic Content
>
> **Code Identifiers:** backpackingmeals (1)
> **Speakers:** - [instructor] (1)

#### [Destructuring objects](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=1)** - [Instructor] A handy feature that you'll see used widely in [[JavaScript]] applications is destructuring. So let's use a simple example to get us started. We're going to create a sandwich object, and the sandwich object will have title, it'll have a price, a description, and some ingredients.
>
> **[0:27](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=27)** Now, if I wanted to console.log some of the values from the sandwich, I could. I could say... let's just log the whole sandwich first.... and then I could say sandwich.title... that'll give us the Reuben... and we could access anything using that dot notation. Now let's update this a bit to include the variables with destructuring. So instead of sandwich, we're going to use the curly braces. So this is different than a ray destructuring. Objects always have the curly braces. And then we're going to select what we want from that object, so title and price. Now, when I run this, we're going to see that sandwich is no longer defined, but once I remove this, so I just console.log title and I console.log price, we're going to be able to access those values. And if I wanted to grab any other information from the object, I'd just need to add that to the literal. Let's make this a little bit more complex. Here we're going to create an object called vacation. The vacation has a destination, it has a number of travelers, it has some sort of activity to do, and then the cost. So we'll just say so much. It's expensive. So what we want to be able to do now is we want to be able to access the keys of this object, and we want to do so with a function.
>
> **[2:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/destructuring-objects?u=76281980&t=120)** So I'm going to create this marketing function that's going to encourage me to come on this vacation. So I don't need everything from this object. I just need the destination and the activity. I can use the curly braces inside of our function arguments. Then I can return a string that I'll use a template string for, and I'll plug in the destination and the activity. Finally, we'll call the function. So we'll console.log marketing, and then we'll pass in what? Well, we'll pass in the entire object. So the entire vacation object will be passed in, and we're just going to use the destination and the activity here. So what we've done here is pretty interesting. We've passed in our vacation object into the marketing function, the marketing function parses the variables or keys that we're interested in, and then returns that as a template string.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Iterating with the for/of loop](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=0)** - [Instructor] For/of is a new iteration syntax that we can use to replace for in and for each. Now, we can use this to loop over iterable objects, like arrays, strings, maps and sets. So let's go ahead and loop over a string. So we're going to say for and we'll say let letter of [[JavaScript]] and then for each letter in JavaScript, we'll log it to the console. So we see all of these different letters being added to the console on their own line. An array is also iterable. So we can create a variable called topics and set that equal to an array of JavaScript, Node and CSS. Now when we iterate over the topics, we can log each topic to the console. And we see all of them being added here at the bottom. So instead of using the array for topics, we're going to go ahead and create a new map and then we'll use the set function to define a key, which will be [[HTML]]. And a route where we can find more information about it. So /topic/html. We'll do the same for CSS and we'll do the same for JavaScript. So now I'm going to use this for/of loop and I'll say for let topic of topics and we want to console.log the topic. So let's run this and see what we get.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/iterating-with-the-for-of-loop?u=76281980&t=93)** We'll see that those values are being returned. So we have HTML and the route, we have CSS and the route and JavaScript and the route. So let me clear this out and I want to take a look at this function called topics.keys. So the .keys method is going to return, as it sounds like, the key from that map. So we'll see HTML, CSS and JavaScript. Also, if we wanted to take a look at the values, let's adjust this to use a template string here. We'll say the course description can be found at route. We will change the name of the variable and then instead of using .keys, we'll use .values. .values is going to give us that route. And finally, another method we should know about is .entries. It will give us the key-value pairs that are part of this map. So because we have these new [[Data Structures]] available in the latest versions of [[ECMAScript]], it's really nice to have something like for/of to help us iterate.

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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=1)** - [Instructor] Classes have long been used in [[Object-Oriented Programming (OOP)|object-oriented programming]] languages to encourage reusability. For example, if we created some sort of a class called chair, a chair would have certain characteristics and then we could create instances of that chair in our projects. As of around 2015, we now have a way to create and use classes with [[JavaScript]] and the syntax is pretty fun to use. So first, let's go ahead and create a class called Vehicle. In it, there's a constructor function and the constructor is basically just going to set up any properties that this class is going to use. So what types of things are common about a vehicle? Well, we're going to have a description of some sort and then a number of wheels. So inside of the constructor, we want to set the value of description to this.description and this.wheels to associate it with the class. Next, I'm going to create a custom method called describeYourself. Now, describeYourself is just going to be a simple console.log message but we're going to take advantage of the description and the wheels that are part of this vehicle and just return it in the template string. So I will say I am a this.description with a certain number of wheels. Great, so now I have the vehicle class. It's sort of like a blueprint for a reusable object that I can use again and again. Any time I want to create a vehicle, I can use this constructor.
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/introducing-classes?u=76281980&t=93)** Now's the time where I'm going to create a new instance of the vehicle class. So here on line 14, I'm going to create a variable called coolSkiVan. And this is a new type of vehicle that takes in its description, cool ski van, and a number of wheels, which will be four. Once we've created our coolSkiVan, let's go ahead and log it. So we see that this is a vehicle with a description and a number of wheels. And when I call the describeYourself function, we're going to, actually, let's get it out of the console message because we already have that in the function itself. This should log all of the information. It's just going to print it directly to the console. So this is very cool. We've created a class using JavaScript, the Vehicle, and I can use this to create as many vehicles as I want.

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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=1)** - [Tutor] In the previous video, we created a Vehicle class, and now I'm going to create a new class that will inherit from the Vehicle class. And this is a process called extending the class, which means that I can take a vehicle which could be any kind of vehicle, a car, a truck, a bicycle, and extend it to customize it for a specific type of vehicle. So the type I'm going to create is a SemiTruck. Now inside of the constructor, we're going to pass in a couple of values for description and wheels, and we're going to pass these via a function called super. So super is going to go up to the Vehicle and it's going to plug in SemiTruck for the descriptor and 18 for the number of wheels. When I want to create a new instance of the SemiTruck, I'll do it here on line 20, I'll just create a variable and I'll set it equal to a new SemiTruck. And now I can use the describeYourself function to actually log that message. So this is class inheritance. We create one superclass the Vehicle, and then we can extend it for reuse. Developers who have come to [[JavaScript]] from [[Python (Programming Language)|Python]] or [[Java]] are usually pretty excited to hear this because there wasn't a way to create a class in the past, and this sort of mirrors what goes on in other languages. So this is a syntax that you can take advantage of
>
> **[1:34](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/inheritance-with-javascript-classes?u=76281980&t=94)** if you like it, and you can use it to create all sorts of reusable objects.

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
> **[0:02](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=2)** - [Instructor] In objects and in classes, [[JavaScript]] has a get method and a set method. A getter or a get method gets the value of a specific property. So if you're wondering, what is this property for this object? The getter is going to go get it for you. The setter does what it sounds like. It sets the value of a specific property. So we can use getters and setters in objects and in classes. Let's take a look at how this looks in an object by creating an object called attendance. The first key of attendance we'll use is _list, which will be an empty array. And then we're going to add this set property here and set will be a function called addName. Which will just push an item into the list. Then finally we'll create a getter, a get property. And this is going to return the elements of the list array joined together with a comma. Once we have our object created, let's go ahead and use it. On line 11, we're going to say attendance.addName. This is going to be set equal to a new name to be added to the attendance list. So if I console log attendance.list, this should give us the full list. Let's add a few more names just to see that this is working. And I'll copy and paste it for the sake of time. Let's go ahead and add a couple more names here.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=99)** So we got our friend Bill Benkelman And then we have Charlie Charlson. Now if we console log the list, we're going to see that comma separated list of names for anyone who has been added. So this is that get and set stuff. We set some names and now we can get them using that list method. As I mentioned, we can also use getters and setters in classes. So let's go ahead and use class Hike. We will use a constructor to create a couple properties for this class. So the hike has a distance and it has a pace. Now we'll use getters and setters in the class. So the thing we want to get is the length of the hike in hours. So to do this, we're going to use a template string. And we'll say this.calcLength, which is a setter function that we'll create in a second. Hours. Now the calculate length function is going to return whatever the distance is divided by the pace. So you can see how fast you're hiking. So we can just return this.distance divided by this.pace. I'll create a new instance of a hike by calling new Hike with the properties. So we'll say it's 10 and two. The distance is 10 miles, the pace is two miles an hour. And then when we console log mtTallac.length
>
> **[3:15](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/getting-and-setting-class-values?u=76281980&t=195)** in hours, we should see how long this hike takes. Cool, so if you're used to object oriented programming or class-based syntax in other languages, this type of programming probably looks pretty familiar to you. We can use getters and setters in classes as well as regular objects.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-a-product-object?u=76281980&t=0)** - [Instructor] We need to create a product object and we'll do so with a function. The function already takes in a name and a price, and we're going to simply return this object here like we saw before. We can use this shorthand syntax to remove name and price. And now we need to add a display. So we want to display the information about the product. We want to make sure that it matches this exactly over here. So we're going to replace the return with product and then inject the name of the product, a comma, and then we'll add the price. And just to be tricky, we're going to add an additional dollar sign here so that we can print the dollar sign. The second dollar sign is just referring to the variable. We can shorten up our syntax even further using our ES6 syntax. We don't need this function keyword. By just adding these parentheses here, we will infer that this is a function, so I feel good about this, but there's only one way to find out. Let's go ahead and test my code. And we see, okay, we have mastered our ES6 object literals, we're using this shorthand function syntax, and we're creating a function that can be used to create various instances of these [[Microsoft Products|products]].

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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=1)** - [Instructor] We've looked at array and string methods like startsWith, endsWith, and includes. Well, I got another one for you, .repeat. The repeat method builds and returns a new string which contains a certain number of copies of the string. Let's take a look. First, we're going to create a variable, and our variable will be called yell. So, another woo yell for our class today. We're also going to add party. And party, we'll set equal to yell.repeat, and we'll pass in the number of times that we want this to repeat, which is 20. Now if we console.log party, we'll see woo, woo, woo, woo, woo, woo, woo 20 times. So the repeat function, again, is just going to make a copy of that string. You could also use the repeat function inside of an object that has a few methods. We're going to create an object called cat that has a meow method inside of it. Now this function is going to take in a certain number of times that a meow happens and then repeat it in the console. Same goes for purring. We'll console.log that and the number of times that we want that purring to occur. And then finally, we'll create a custom method called snore, which will log a certain number of snores depending on what we pass in. Once that has been added, we can call those functions. So we can say cat.meow, we'll pass in three
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-the-string-repeat-function?u=76281980&t=96)** for the number of times we want that to occur. We'll do the same thing for purr, and it looks like that's working. We also can do the same for snore, and let's pass in six for that. Nice. So repeat is a pretty useful utility. If you're ever in need of a function that can make some copies of a string, you now have .repeat in your tool chest.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cat (2)
> **Code Identifiers:** startswith (1), endswith (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Setting default function parameters](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=0)** - [Instructor] There might be situations where you want to provide default values for your functions parameters. And with modern [[JavaScript]], you can. So let's create a really basic function that adds a couple of numbers together. The function add will take in X and Y and then just console log the addition of X and Y to our console. Now, if I call the add function without passing in any values, it's going to return not a number. So you could fix this by adding numbers to your parameters, or you could also add defaults in case they were not supplied. So I'm going to say X equals five, Y equals six, and this will log 11 to the console. Now, what happens if I do add numbers? If I do pass values to a function that already has default parameters defined. Well, not surprisingly, whatever we pass in is going to override whatever is the default. Let's take a look at another type of function called haveFun. So haveFun takes in an activity name and a time that this activity takes. So inside this function, I'm going to just console log a little message to myself, just so that I can see these defaults are working when I eventually create them. All right, so today I will go activity name for a certain number of hours. Now, when I called the haveFun function, let's go ahead and pass in biking and 2.5. So that's how long it will take.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/setting-default-function-parameters?u=76281980&t=95)** Then let's call it again without any values. So, the first one, I see biking for 2.5 hours the second is undefined undefined. Now, if I set up these defaults so hiking, and let's say three hours, hiking and three hours are going to be plugged into that second function call that happens on line 16 here. Now what happens though if I only pass in one? Let's say biking. What's cool is that the function is going to use the value that I pass, biking. And then it's going to take advantage of the default because no value has been supplied for a time. So there we go. Default parameters can be very useful when you want to use a default value if another is not provided.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=0)** - [Instructor] Arrow functions have an abbreviated syntax for working with functions. We're dealing with a brand new token here. An equals sign and a greater than sign. And together that makes an arrow. So don't get that confused with comparison operators because it does something quite different. Let's create a function here called studentList. StudentList takes in some students and then it logs those students to the console. Now if I call studentList with an array, it's going to log those values. But arrow functions will allow me to use a slightly shorter syntax. So let's take a look at how I would refactor this function to use an arrow function. First I'd remove the function keyword. Then students is our arguments, right? So right after the arguments, I'm going to place that arrow. The way I think about it is it just points to whatever this function returns. Now this'll work as is with these curly braces. But since there's only one statement, since there's only one thing that this function is doing. Console logging some students, we can actually remove these curly braces. So that's up to you. You can decide how terse you want your syntax to be. Let's try it again with another list. We'll use apple, banana and cherry. And then we want to map over this array. So we're going to send in a callback function that's going to console log each item
>
> **[1:37](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-arrow-functions?u=76281980&t=97)** from that list. So apple, banana, cherry. So let's give it a run. We see apple, banana, and cherry. Now using what we know of arrow functions, we can remove the function keyword. We can point to whatever we want to return. And if there's only one statement, we can remove those curly braces. So check it out. We're getting the same result but we're also seeing how much cleaner this looks. So arrow functions just give us another option. We can use this instead of a full function declaration to do the exact same thing. Arrow functions are a great way to make your [[JavaScript]] code more readable and more compact. And you'll see them used a lot as we've done here with functions like map and filter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** studentlist (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Understanding this in arrow functions](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=1)** - In the previous lesson we reviewed how Arrow Functions can make our code more readable. In addition to this, though, arrow functions help us to deal with the scope of this in our [[JavaScript]] code. Let's take a look at an example of the old way and then we'll update this to the new syntax. First, I'll create a person object. The person object is going to have a first name and then it'll have an array of hobbies. So we'll add a few hobbies for this person to do. Then we're going to add print hobbies as a method for this object. Print hobbies is going to iterate over these hobbies and it's going to add a little string to our console.
>
> **[0:50](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/understanding-this-in-arrow-functions?u=76281980&t=50)** So the string will just pass back the values and then we'll be able to see what this person likes to do. Once I call person.print hobbies, we see sort of a weird output here. It says undefined likes to bike, hike, and ski. Now I thought if we use this, we will be able to access properties that are part of this object. It's looking like I can't really do that. So a little workaround that you often see in JavaScript code is we'll use some sort of other variable to scope this to the function. I can use underscore this instead and this should be able to plug in the first name from the object property. I feel like there might be a better approach. What we can do instead is we can use an arrow function. Let's go ahead and remove that function keyword. We're going to place an arrow before the things that we want to return. And now if we try running this again, we should see Angie likes to hike, bike, and ski. The arrow is helping us keep this in scope so that we don't have to create underscore this or some sort of workaround to make this work. Instead, the arrow will make this happen for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **CLI Commands:** make (3)
> **Speakers:** - in (1)

#### [Working with generators](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=0)** - [Instructor] Generators are a new type of function that allow us to pause functions in the middle of execution to be resumed later. You know you're looking at a generator when you see an asterisk immediately following the function keyword. So let's go ahead and create a generator here. We're going to create a generator called director. So the director generator function is going to do a countdown for us, basically. Within a generator, we can hit pause by using the yield keyword, and this can be used numerous times within the same function. Now, inside of the director function, we're going to use four yield statements for a director counting down until the camera is rolling. Now, let's set a variable that calls the director function. And what we'll do here is we'll console.log to retrieve the values from the director generator. So if I call this method called .next, the next function is going to return an object that contains the value and done. So the value here is three, which makes sense. That's the value that we've set up on line two. Done is either true or false. So when a function is done, meaning there are no more yield statements, the done value will be true. So let's go ahead and log a few of these. So countdown.next, countdown.next. This is going to count us down three, two, one, and action.
>
> **[1:40](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/working-with-generators?u=76281980&t=100)** In all of these cases, done is set to false. However, if I call one more of these... so after three, two, one, and action have been completed... the value is undefined and done is true. Another nice thing we can do is we can chain on .value. .value will give us just the value instead of the entire object. So this is sort of a simple example of how we use generator functions, but the important thing to understand is that the yield keyword is going to be used anytime we want to hit pause inside the execution of a function, and then in order to skip to the next yield, we just call the next function.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing advanced function patterns](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=0)** - [Instructor] Our task is to create a function that formats text with a specific indentation level. So our format text function over here takes in text and an indent level, and it's going to be our job to figure out how this works. So what we'll do is we'll say "return," then we'll add a string that's just one space, and we'll say ".repeat." So .repeat takes in a number or it takes in some sort of calculation for the number of copies that we should make of something. So let's say indentLevel times 2. So what this will do is with our indentLevel, if we were to set a default value, say one, it's going to add two spaces. With an indent level of two, it'll add four spaces. With an indent level of three, six spaces, and so on and so forth. So we're using the default function parameter for this, and then we're going to concatenate this with the text that is sent into this function. Now, as a possibility, if you'd like to as well, you can convert this to an arrow function. So formatText=, and then we'll just copy everything from here. Copy and paste. And then the only change I really need to make here is we'll point our arrow at the return. Since this is a single line, you could even remove
>
> **[1:33](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-implementing-advanced-function-patterns?u=76281980&t=93)** that return if you really wanted to. Let's keep this cons format text option here. We want to run this to see how we're doing. We'll test the code, and we'll see that this is working well. So we're able to add that indent level. We're able to use the repeat function for repeating a string, and we're also using this default function parameter within our arrow function.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=0)** - [Instructor] Promises help us deal with asynchronous behavior in [[JavaScript]]. When something is asynchronous, it just means that some sort of weighting is going on. There's a delay between when we ask for something and when we receive it. Kind of the prime example of this is fetching data. I ask for some data from an external API, I wait for a couple seconds and then it comes back to me. So to create our first promise, we will create a delay function. So the delay function here is going to take in a certain number of seconds and then it's going to return a new Promise. New Promise will take in a callback function. So resolve just means if everything goes as expected with the promise, it will resolve and then we can use this setTimeout to wait for a certain number of seconds. The setTimeout function takes in resolve, which stands in for the callback function to fire after the timeout. It also is going to take in a certain number of milliseconds before the timeout. So let's go ahead and console.log just a quick message called Zero seconds to make sure it's working. It is. Then we can call the delay function and we'll pass in one. We want to console.log one second. So the delay function is going to use this timeout function and then as soon as the timeout is over, as soon as the one second has passed, we're going to log one second to the console.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?u=76281980&t=96)** Let's do it again but this time with five seconds. And we'll replace the console message five seconds. These are looking a little long. Let me shorten them up a little bit. So one second, two, three, four, five seconds. So anything that we're passing into the .then function is resolve. It's the function that's going to be called. So that here on line seven is this whole console.log message. Everything so far has been going really well. All of our promises are resolving. But what happens if there's some sort of error? If our data doesn't load or something else goes wrong? Promise are either pass or fail when the resolved arguments are passed to them or when rejected arguments are passed to the error. So let's take a look at what this looks like. We just passed in reject. And then we're going to place the setTimeout inside of this function return. Right above this, we're going to say that if there's some sort of an error, so like there's a type mismatch where seconds is not a number, we want to throw a new error. Okay, so we're handling a possible error case here. So let's go ahead and call this function again. We see one second is running. That's to be expected. But if we replace this with a string, immediately we see an error. Seconds must be a number. So that is a quick first look at promises.
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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=1)** - [Instructor] We often use promises to load data. Let's create a function called spacePeople that returns a promise and we'll call it spacePeople because it's going to [[Fetch]] some data from an API of astronauts who are currently in space. So spacePeople again will return a new Promise. It's going to have resolve and rejects as the arguments here. We also are going to create a link to an API. So we'll use this open-notify astronaut API. And then we need to build a request. So we're going to create another variable called request. This is going to be equal to a new XML HTTP request. Now, when we open this request, we're going to send it as a GET request. In other words, we're going to ask for some data from this API. When the request loads, we're going to set it to this function. So if the status is 200, meaning everything is going well, so we'll just parse the response here on line nine. Otherwise, in other words, if the status is something else, like 400, 404 or whatever status that isn't 200, we want to reject it and we want to return the status text. The final thing we need to do here is we need to say request.onerror equals error rejects.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/loading-remote-data-with-promises?u=76281980&t=95)** And then we'll send the request using the send method. So this is just kind of a standard format for how you would send an HTTP request with [[JavaScript]]. It's kind of a boilerplate thing at this point. You can use it for pretty much any type of request. All right, so on line 19, we're going to recall spacePeople. We're going to then console.log the data to our console. So we see that the message is a success. We have a certain number of people and then all of their data is part of that array. Let's also add an error message to this so that if anything goes wrong, we can capture it. And we can have our own little custom error that says can't load people. So let me break this API really quick or at least break the link to it. First of all, it says can't load people. That's the custom error that I created. And then we see some other errors that are being added to our console. So like I said, kind of boilerplate stuff to send an HTTP request but to me, this is stressing me out a little bit. This looks like a lot of code. And the good news about that is that this API call could be simplified tremendously by using this function called fetch. In the next video, we're going to look at how to use fetch to load data.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=0)** - [Instructor] Remember our spacePeople function from the previous video that went and got some data from an API? It works pretty well but we're going to reformat this request and instead, use something called [[Fetch]]. Fetch is a function that works natively in the browser. There are also packages that work with Node like node-fetch and isomorphic-fetch so you can use something similar in that environment as well. Fetch is just going to take in the URL of our API. So that api.[open-notify.org/astros/json](https://open-notify.org/astros/json), that's where all of our data is. So we're going to pass that directly into this fetch function. Then we're going to chain on .then and we're going to console.log whatever the response is. Now, fetch returns the entire response object. And the object has a [[JSON]] function that parses the body as JSON. So let's go ahead and take the response and we'll call it response.json. Then we're going to console.log everything. So this is going to log the same exact thing that that spacePeople function from before did. We got our success message, we have the number of people and then we have the array of those people's data. So now I can take this and turn it into a reusable function. So we'll call it .getSpacePeople and this should return fetch. So now that we have this repeatable function that we can use to get some data, we can always chain .then onto that function.
>
> **[1:39](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=99)** Just a quick note about the shorthand that we're using here. Notice that we're passing in data and then we're console.logging the data. So because the arguments and whatever we're passing in to the console.log are the same, we don't have to really use it. So you can use the shorthand here and just pass console.log directly into the .then. So I kind of like this. It's a little cleaner to my eyes. But just know that it's doing the same thing. So because we have this repeatable getSpacePeople function, I'm going to create another function that is going to help us format the names that are coming back from this response. So basically, I just want to see all of the names of all of the people who are in space.
>
> **[2:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/returning-promises-with-fetch?u=76281980&t=155)** So once I give that a save, and I call the spaceNames function, I should be able to see those names. Nice. So this is going to return an array because I've used the .map function to make that happen. And if I want to format this a little more, I can use .join to comma separate them in the console so that I can read them a little more clearly. So there's a lot going on here. We've used the fetch function. The fetch function again is built into every single browser, so you can use this instead of writing those long XML, HTTP requests. And then we can use reusable functions to format the data once we have it returned. But just know that fetch returns a promise. We're still using promises under the hoods. But fetch is just kind of a cleaner wrapper around them.

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
> **[0:01](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=1)** - [Instructor] The next asynchronous feature of the [[JavaScript]] language that I want to talk about is a syntax called async/await. Async functions return a promise, and the resolved value of the promise will be whatever you return from the function. So let's take a look at this. We had our delay function from before. Which returned this new promise that set a timeout. So this looks pretty familiar. But I'm going to create here on line six, async function. So we know it's an async function because we use the async keyword right before the function arguments. And then what we're going to return from this is a console log message that's called zero seconds. Just for now. So let's call it and make sure that it's working. And now inside of this, we can say await delay one. So we're going to wait for one second. And then we'll console log another message. So remember our generator functions from before? We had that yield keyword and we would kind of hit pause? Basically we're doing something similar with the await keyword. The only difference here is we're going to wait for this function to execute, wait for the delay function to execute for a second. And then we're going to do whatever comes next. So we'll wait on line eight for delay one to happen, and then we can move on. We can use as many await statements that we'd like to in our functions.
>
> **[1:35](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/using-async-await-syntax?u=76281980&t=95)** So we can wait for the results of this promise for two seconds, three seconds, whatever. And remember that the async keyword is really important here. So if I remove it and I try to run it again, we'll immediately see this error that says await is only valid in an asynchronous function. So you can't get away with using await statements in just regular functions that don't use that async keyword. Cool so this is a quick look at how async/await works. Why would you want to use it? Well, it's mostly a syntactical choice. Async/await allows you to write functions that are a little cleaner and more readable. And it's basically asynchronous code with a synchronous code structure. Because we have these await statements, it looks a little bit more clear about what's going on potentially. And it also helps with things like debugging and error handling. So this is an optional syntax that you can use if you find it useful. Async/await is part of the language now. So you can use it for any sorts of asynchronous behavior in your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Incorporating fetch with async/await](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=0)** - [Instructor] We've talked about async, await and we've talked about [[Fetch]]. Let's take a minute to look at how we can use all of these things together. So fetch by definition is asynchronous. We're waiting to get some data back. So let's go ahead and create a function called githubRequest. And this is going to be an async function that takes in the login name of a user of [[GitHub]]. And we're going to use await here. So we're going to await the results of a fetch. So the API that we're going to look at here is the GitHub API. So it's api.[github.com/users](https://github.com/users), and then some sort of name. So I'm just going to use my own. You can use your own GitHub name if you'd like to. And we're going to make a request to this API. So now that I know that this is working, I'm just going to copy and paste this into our function. And instead of hard coding this for a specific user, we're going to take this in as an argument. So that login will be concatenated onto the end of the string. Now on line five here, we're going to create a variable called let [[JSON]]. So remember with fetch, we need to convert the response to JSON so that we can parse the results. Now I need to decide what data I want to get from this API. So let's just create a variable called summary. Summary is going to be this string. We'll take the name, we'll take the company
>
> **[1:41](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/incorporating-fetch-with-async-await?u=76281980&t=101)** from those results and we just want to be able to print that. So when we console log the summary, we should be able to see the name and the information for that user, whoever we pass in. I'm going to pass in eveporcello and we want to make sure that this is in quotes, 'cause this is a string. So let's go ahead and try it again and we see Eve Porcello and the company. And if I added a different user, we would be able to see that as well. So this is async await with fetch. We create an async function using the async keyword, and then we wait for all sorts of things to occur in the body of this function. First, we're waiting for a fetch from an API, and then we're going to convert that response to JSON. Once we have it, we can then log it to the console or use it anywhere in our app. So this sort of syntax is going to be super useful to you as you work on [[JavaScript]] projects. I use async, await, and fetch literally everyday of my life. So hopefully you can use this to grab some data from these external APIs.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=0)** - [Instructor] ES6 gives us a ton of new features for working with asynchronous data. So what we want to do here in our answer is we want to model a data [[Fetch]] from an API, and we'll also add some timing functions into the mix. So the first thing we'll do is we'll replace this little code comment with some actual code. Let's make use of this return at some point. But for now, just to keep our syntax straight, we want to return a new promise. And this new promise is going to take in resolve, and then resolve will be this parameter for a function. We'll use an arrow function here. Now within the context of this function, we'll set a timeout. Set timeout takes in two things. It takes in a callback function, and it takes in a certain number of milliseconds. So we'll say 1000 here. From here, we can resolve, and we're going to use this return here. So we'll say ID, timestamp and data, and for good measure let's go ahead and take out the ID here. Okay, let's see how we did. We are waiting one second to call this function.
>
> **[1:36](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/solution-building-an-async-data-handler?u=76281980&t=96)** We're going to return some data, and this is a lot like an API request to some sort of a [[Representational State Transfer (REST)|rest]] API. So if we click test our code, we're going to get that error, and that's because I should delete that. All right, let's try that one more time. So this is telling me that something isn't right. We're not using an asynchronous function. Oh my goodness. So that's really important. Let's use async as the keyword at the front of this function. So now if we click test my code again, we should get the data back. And our asynchronous function is working well. So again, we use the async pattern. We can use this in combination with the promises, we can use a wait as well. And all of this is just modeling the behavior of trying to load data into our application when that data might take a second or two to load.

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
> **[0:00](https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/next-steps?u=76281980&t=0)** - [Instructor] Thank you so much for joining me for this course. I hope you'll start to incorporate these features into your own projects. The next steps I would recommend are to check out some of the libraries that exist to help you build modern web applications, things like [[React.js|React]] and [[Vue.js|Vue]] and [[Angular]] and even Svelte. These are libraries and frameworks that you can use to build your own applications. You're going to see a lot of the features used for this course used in combination with those libraries and frameworks. From here, I'd encourage you to stay on top of the latest developments in browser compatibility, as well as future plans from the TC39 committee. New features, they're not just trendy. They're intended to help save you time and to solve problems for [[JavaScript]] developers. They help us deal with asynchronous behavior. They help us write code faster. And they help other developers read our code more easily. JavaScript is evolving to handle the challenges of the modern web. I hope you have fun continuing to chase the wave.

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