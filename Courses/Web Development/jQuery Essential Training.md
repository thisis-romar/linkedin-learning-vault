---
type: course
cssclasses:
  - lle-course
slug: jquery-essential-training-24696205
url: "https://www.linkedin.com/learning/jquery-essential-training-24696205"
duration_minutes: 263
duration: 4h 23m
updated: 10/25/2024
learners: 1311
skills:
  - Web Development
  - jQuery
  - Front-End Development
exercise_files: true
github: "https://github.com/LinkedInLearning/jquery-essential-training-5915453"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHPrtoXQNMIaQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728430867016?e=2147483647&amp;v=beta&amp;t=whwLQwvrwmoJge40s0Z1883kxvvxr2dLnx1Tk6guRO8"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore a Career in Front-End Web Development]]'
prev_courses:
  - '[[JavaScript- Modern Browser APIs]]'
path_nav: '[{"path":"Explore a Career in Front-End Web Development","position":11,"total":11,"prev":"JavaScript- Modern Browser APIs","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/web-development
  - skill/jquery
  - skill/front-end-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/jQuery%20Essential%20Training.md)

![jQuery Essential Training](https://media.licdn.com/dms/image/v2/D560DAQHPrtoXQNMIaQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728430867016?e=2147483647&amp;v=beta&amp;t=whwLQwvrwmoJge40s0Z1883kxvvxr2dLnx1Tk6guRO8)

# jQuery Essential Training

> Looking to add dynamic content, third-party data, or animation to your websites and apps? In this course, Joe Marini introduces jQuery, an open-source JavaScript library that simplifies the process of adding advanced functionality to web projects. Joe shows you how to use the features of jQuery to achieve many common web development patterns, as well as how to use built-in browser equivalents when

> [LinkedIn Learning](https://www.linkedin.com/learning/jquery-essential-training-24696205) | 4h 23m | 1K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [jQuery: Write less, do more](#jquery-write-less-do-more)
  - [Getting set up](#getting-set-up)
- [**1. jQuery Overview**](#1-jquery-overview) (2 videos)
  - [Overview of jQuery](#overview-of-jquery)
  - [Why use jQuery today?](#why-use-jquery-today)
- [**2. A Quick jQuery Feature Tour**](#2-a-quick-jquery-feature-tour) (6 videos)
  - [Enabling jQuery in your web app](#enabling-jquery-in-your-web-app)
  - [Selectors and filters](#selectors-and-filters)
  - [Creating and modifying content](#creating-and-modifying-content)
  - [Event handling](#event-handling)
  - [Effects and animations](#effects-and-animations)
  - [AJAX operations](#ajax-operations)
- [**3. Accessing Page Content**](#3-accessing-page-content) (10 videos)
  - [Introduction to selectors and filters](#introduction-to-selectors-and-filters)
  - [Basic selectors](#basic-selectors)
  - [Basic filters](#basic-filters)
  - [Advanced selectors](#advanced-selectors)
  - [Attribute filters](#attribute-filters)
  - [Advanced filters](#advanced-filters)
  - [Traversing web page elements](#traversing-web-page-elements)
  - [Statement chaining](#statement-chaining)
  - [Challenge: Selectors](#challenge-selectors)
  - [Solution: Selectors](#solution-selectors)
- [**4. Manipulating Page Content**](#4-manipulating-page-content) (8 videos)
  - [Creating content](#creating-content)
  - [Inserting page content](#inserting-page-content)
  - [Altering page content](#altering-page-content)
  - [Manipulating attributes](#manipulating-attributes)
  - [Working with CSS](#working-with-css)
  - [Embedding custom data](#embedding-custom-data)
  - [Challenge: Dynamic element visibility](#challenge-dynamic-element-visibility)
  - [Solution: Dynamic element visibility](#solution-dynamic-element-visibility)
- [**5. Event Handling**](#5-event-handling) (5 videos)
  - [jQuery event handling features](#jquery-event-handling-features)
  - [Binding and unbinding events](#binding-and-unbinding-events)
  - [Using the jQuery event object](#using-the-jquery-event-object)
  - [Challenge: Use jQuery events](#challenge-use-jquery-events)
  - [Solution: Use jQuery events](#solution-use-jquery-events)
- [**6. Effects and Animations**](#6-effects-and-animations) (5 videos)
  - [Introduction to jQuery animations](#introduction-to-jquery-animations)
  - [Hiding and showing elements](#hiding-and-showing-elements)
  - [Fading elements](#fading-elements)
  - [Sliding elements](#sliding-elements)
  - [Custom animations](#custom-animations)
- [**7. AJAX Operations**](#7-ajax-operations) (6 videos)
  - [jQuery and AJAX](#jquery-and-ajax)
  - [Convenience functions](#convenience-functions)
  - [Working with different data types](#working-with-different-data-types)
  - [Using global AJAX handlers](#using-global-ajax-handlers)
  - [Challenge: AJAX](#challenge-ajax)
  - [Solution: AJAX](#solution-ajax)
- [**8. jQuery Plugins**](#8-jquery-plugins) (3 videos)
  - [DataTables](#datatables)
  - [Form validation](#form-validation)
  - [Toast messages](#toast-messages)
- [**9. Migrating from jQuery**](#9-migrating-from-jquery) (5 videos)
  - [Preparing to migrate](#preparing-to-migrate)
  - [Migrating to DOM selectors](#migrating-to-dom-selectors)
  - [Migrating from AJAX](#migrating-from-ajax)
  - [Migrating effects](#migrating-effects)
  - [Odds and ends](#odds-and-ends)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [jQuery: Write less, do more](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-write-less-do-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-write-less-do-more?u=76281980&t=0)** - jQuery, just like the web itself, has come a very long way since it was first introduced. Its original focus was on ensuring compatibility between different browser platforms in order to make frontend [[Web Development]] easier. Many of those early platform compatibility problems have been addressed over the years as the browser vendors have increasingly adopted [[Web Standards]]. But jQuery still has an important role to play in modern web programming. Today, jQuery's core focus is on productivity and simplicity, and it is used by more than 90% of all [[JavaScript]]-enabled websites. In this course, we're going to learn about the modern way to use jQuery to boost your coding productivity. Hi, I'm Joe Marini, and I've been building software professionally for some of the best known companies in Silicon Valley for more than 30 years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Development]] (1), [[Web Standards]] (1), [[JavaScript]] (1)
> **Code Identifiers:** jquery (4)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - jquery (1)

#### [Getting set up](https://www.linkedin.com/learning/jquery-essential-training-24696205/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/getting-set-up?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there are some things you will need to be familiar with. So this course is intended for web developers who either need to work with existing jQuery code in their projects, or who want to boost their productivity by leveraging a widely used comprehensive [[JavaScript]] library. So you should already have an understanding of JavaScript. jQuery is a JavaScript library, so when you're writing jQuery code, you will be working directly with JavaScript. You should also have a good understanding of the two other core [[Web Development]] languages, [[HTML]] and CSS, as we will be using all three in this course. If you need to brush up on these subjects, you can refer to the [[JavaScript Essential Training]], [[HTML Essential Training]], and CSS Essential Training courses here in the library. You can find all of the code exercises used in this course in the [[GitHub]] repository you see at this link. This code is organized into two folders. There's the finished examples and the code in the start state. So I'm going to be using the code in the Start folder to work towards the finished version of each example. And you can see that there are chapters inside the Start folder that correspond to each of the chapters in the course. So the Start examples are in here, and I'm going to be building towards the finished code. Now, all the finished code is here in the Finished folder. So if you want to look ahead
>
> **[1:32](https://www.linkedin.com/learning/jquery-essential-training-24696205/getting-set-up?u=76281980&t=92)** and see how things work in the Finished folder, that's entirely up to you. Use the code however best works for you. You can either fork a copy of this repository into your own GitHub account if you like, or you can just download the exercise code locally to your computer. You just click on this Code button right here, and you can see that you can either clone it or you can just download the existing code as a zip file. It's entirely up to you. You can find the jQuery API documentation at the [jquery.com](https://jquery.com) website. Let's go ahead and click on this API documentation link right here. I suggest keeping this open in a browser tab as you work through the course so you can refer to it as needed. I'm also going to be using Visual Studio Code in this course, which is a free editor from [[Microsoft]] with an incredible set of features for working with all kinds of code. And you can download it from this link. If you want to use a different editor, that's fine, but, in my opinion, it's hard to beat all the features that VS Code gives you. So that's what I will be using. Let's jump over to VS Code for a moment. So if you decide to use Visual Studio Code, then, once you have it installed, you're going to want to go to the Extension Marketplace, and that's this little icon right here with the blocks. And you're going to want to install the Live Server extension. Just do a search on Live Server, and it should be this one that comes up first. It's the one with the, you know, tens of millions of downloads. We're going to be using this extension
>
> **[3:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/getting-set-up?u=76281980&t=185)** to easily preview our work in the browser as we go through the course. So if you're not using Visual Studio Code or you want to use a different editor, that's fine. You'll just have to have your own way of previewing each webpage in the browser as we build it. So once you've got the exercise code files where you want them, either in your GitHub account or local, and you're feeling comfortable with HTML, CSS, and JavaScript and you've got your editor ready and set up, you are good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (6), [[HTML]] (3), [[GitHub]] (3), [[Web Development]] (1), [[Microsoft]] (1)
> **Env Vars:** html (3), css (3), api (2)
> **Tools:** github (3), visual studio (3), vs code (2)
> **Code Identifiers:** jquery (4)
> **UI Navigation:** click on (2), go to (1)
> **Exercise Files:** download the (2), zip file (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)


### 1. jQuery Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of jQuery](https://www.linkedin.com/learning/jquery-essential-training-24696205/overview-of-jquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/overview-of-jquery?u=76281980&t=0)** - [Instructor] So what is jQuery? jQuery is one of the most popular, widely used open source [[JavaScript]] libraries on the web today. In fact, at this time, we're recording, jQuery is being used on more than 90% of all websites that use JavaScript. That's a lot. It's important to note that jQuery is a library. It's not a framework. There's a big difference between the two. A framework is an opinionated way of building an application. It provides the basic structure and logic patterns, and then you build your custom application code around it. [[React.js|React]], for example, is a framework. Other good framework examples include [[Vue.js|Vue]] JS and [[Angular]]. jQuery isn't a framework. It doesn't prescribe how you build your application. It's a collection of utilities and code that you use throughout your program. In fact, you can use jQuery inside those other popular frameworks, and that's one way you know it's not a framework itself. It's main job is to make building web apps easier and more productive by reducing the amount of boilerplate code you need to write. jQuery simplifies common [[Web Development]] tasks like working with webpage content, performing [[AJAX]] operations, and building highly interactive experiences. jQuery's code syntax is nice and compact. It allows you to write code that is a lot less verbose than using plain JavaScript. This results in code that is easier to read and maintain, and of course, jQuery is highly extensible. There's a wide range of plugins that address all kinds of common development needs. In this course, we're going to cover
>
> **[1:34](https://www.linkedin.com/learning/jquery-essential-training-24696205/overview-of-jquery?u=76281980&t=94)** the four major parts of the jQuery library. First, we're going to learn how jQuery simplifies common DOM operations, such as accessing and manipulating content within the webpage. Just about every modern web application needs to do this to some extent, and jQuery features make these operations easy to implement using list code that it would take to accomplish the same things by using standard browser APIs. Next, we'll see how to work with events. jQuery provides a simple syntax for listening to common browser events and provides a standardized event object that contains useful information about each event type. Then we'll move on to jQuery's animation and effects modules. Many of the features in this area are achievable today using CSS animation, but you'll still encounter jQuery code in production that implements these effects. After that, we'll take a look at the AJAX features of jQuery, and again, modern browsers support many of the operations that we'll learn about in this chapter. But very often you'll need more verbose and complex code using native browser APIs than you will when using jQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[AJAX]] (2), [[React.js|React]] (1), [[Vue.js|Vue]] (1), [[Angular]] (1)
> **Code Identifiers:** jquery (17)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** dom (1), css (1), ajax (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Exercise Files:** boilerplate (1)
> **Warnings:** note that (1)

#### [Why use jQuery today?](https://www.linkedin.com/learning/jquery-essential-training-24696205/why-use-jquery-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/why-use-jquery-today?u=76281980&t=0)** - [Instructor] You might be asking yourself, why should I learn jQuery today? After all, the browser wars are pretty much over, every major browser today, mostly adheres to [[Web Standards]], and the need for a compatibility library is much lower. And yes, all of that is true, but jQuery's mission is very different today from what it was even five years ago ago. Today, jQuery is all about coding productivity, and simplifying common [[Web Development]] tasks. So let's look at some of the main reasons why jQuery is still an important tool to have in your skillset. First, there are a lot, and I mean a lot of web apps out there that have jQuery code in them. The amount of legacy jQuery code is probably comparable to the amount of legacy COBOL that there is in the world right now. Chances are, as a web developer, you will have to work in a code base that uses jQuery at some point. So learning how jQuery works will be a valuable skill for years to come. jQuery also has great support among the developer tools that every developer uses. Whether it's your favorite IDE, debugging tool, or how to documentation site, you're going to find great jQuery support. It's also important to note that just because browsers have standardized on common web APIs, that does not necessarily mean that those APIs are easy to understand or use or are productive in everyday scenarios. jQuery was designed with the web developer in mind and the kinds of problems that they have to solve
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/why-use-jquery-today?u=76281980&t=93)** in most modern web apps. And finally, of course, jQuery supports an incredible selection of plugins that address all kinds of use cases that arise in building modern web applications. And we'll see some of those later in the course. The bottom line is jQuery isn't going away anytime soon. And in fact, I would argue it's just as relevant today from a productivity standpoint as it was when it was first introduced, even if the need for smoothing over browser differences is no longer as great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Standards]] (1), [[Web Development]] (1)
> **Code Identifiers:** jquery (13)
> **Env Vars:** cobol (1), ide (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. A Quick jQuery Feature Tour

[↑ Back to Table of Contents](#table-of-contents)

#### [Enabling jQuery in your web app](https://www.linkedin.com/learning/jquery-essential-training-24696205/enabling-jquery-in-your-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/enabling-jquery-in-your-web-app?u=76281980&t=0)** - [Instructor] In this chapter, we'll take a quick tour of the main features of jQuery, which we will then cover in more detail throughout the [[Representational State Transfer (REST)|rest]] of the course. By the time we reach the end of this chapter, you will have seen how jQuery manipulates page content, builds animations, handles events, and even uses [[AJAX]]. Now, with the exception of this example, we'll be working in the finished folder for the rest of this chapter. I'll be demonstrating the jQuery features using working code, and for the rest of the course, we'll be using the Start folder to build each more detailed example. Now that we've set up our development environment and learned a little bit about jQuery at a high level, it is time to build our first jQuery enabled webpage. So let's open up the FirstjQueryPage file here. So there are several ways to include jQuery in your webpage. One way is to use a CDN version, which is accessible from public [[Web Servers]]. And for example, you can use the version that's hosted on [[Google]] servers at this link, or you can use the one that jQuery hosts itself. So you can see that I'm including the code directly from the jQuery website here. So for this course, I've included jQuery in the example files folder, and that's this file right here. So we're going to load it from our directory. So let's go ahead and do that. Put the code in to load it. All right, and the source is going to be
>
> **[1:37](https://www.linkedin.com/learning/jquery-essential-training-24696205/enabling-jquery-in-your-web-app?u=76281980&t=97)** in the upper folder, it's that file right there. All right, so in this case, I'm using the compressed version of jQuery for production, that's the min.js right here. During development, you might want to use the uncompressed version, which you can download separately from the jQuery site, and it doesn't have this min in the name, and that might help out sometimes when you're debugging. The next step is to write the actual code that will listen for the page load event. And then we're going to insert some content in the page after it's loaded. So let's go ahead and add that code. So I'll put a script tag in here. Now, I don't expect you to understand all of this right away, so let me write some of this code and then I'll explain what it's doing. So I'm going to write document, and then I'm going to use the ready function, and I'm going to pass a function in there, and I'm going to get the content element, and I'm going to append some code into it, and I'm going to write, the page just loaded, all right. Okay, so let's take a look at what this code is doing. Now, in this case, I'm calling the jQuery library, which is this dollar sign function right here, with the document keyword, which indicates that we are about to perform an operation on the webpage itself.
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/enabling-jquery-in-your-web-app?u=76281980&t=190)** So the little dollar sign is shorthand for using jQuery. The ready function sets up an event listener for when the DOM structure of the page is fully parsed by the browser and is ready to be operated on. And I'm passing a callback function to the document ready function. This callback is the event handler that will be fired when the ready event is triggered. So my code in that callback once again calls the jQuery function, but this time it passes the argument #content indicating to jQuery that we want to perform an operation on the element in the page that has the id of content, which is this div element right here. In this case, the code uses the append function, which we will learn about later. The append function appends a piece of content to the tag that we receive back from the jQuery function here, which is the div element. The content being appended is a paragraph tag with the string, the page just loaded, in it. All right, so let's go ahead and run this in the browser. I'm going to save this, and I'm going to right click and choose Open with Live Server. This is the Live Server extension that we installed from the VS Code marketplace that we saw earlier in the course. I can also just right click on the file itself and choose Open with Live Server.
>
> **[4:42](https://www.linkedin.com/learning/jquery-essential-training-24696205/enabling-jquery-in-your-web-app?u=76281980&t=282)** So let's go ahead and do that, and that will bring up the browser and you can see that my content, the page just loaded, gets inserted when the page loads. And there it is. You've created a jQuery enabled webpage. Now all this might not seem like such a big deal, right? But for comparison, let's take a look at the code I would have to write using the standard browser DOM if I wasn't using jQuery. So let's close this, and let's go to the Finished folder and let's look at the same file. So here's the code that I just wrote, right? This is the jQuery code right here. Let's take a look at the standard browser code I would have to use. So in this case, I'm using the window object's addEventListener method to listen for an event called DOMContentLoaded, right? So that's the corresponding DOM event for when the DOM structure of the page has been loaded. And once again, I pass a callback function like I do with jQuery, but in this case, I have to have three separate lines just to get the body tag and then create the new paragraph. And then I have to create a new text node for the text string using standard DOM functions for each. So that's three lines of code just to create the new piece of content, and now I have two lines to insert the content into the document. I have to append the new text node inside the paragraph, and then I have to append the paragraph inside the body element. So in total, that's five lines of code to accomplish what jQuery does with, well,
>
> **[6:17](https://www.linkedin.com/learning/jquery-essential-training-24696205/enabling-jquery-in-your-web-app?u=76281980&t=377)** just this one line of code right here, but three in total. So just to make sure that this runs, let's open this up in Live Server as well. And you can see both of the results are right there. So even though this is a basic example, it should give you some idea of the power of jQuery, but that's just the beginning. We'll see a lot more of this power as we move through the rest of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[AJAX]] (1), [[Web Servers]] (1), [[Google]] (1)
> **Code Identifiers:** jquery (22), addeventlistener (1)
> **Env Vars:** dom (5), cdn (1)
> **CLI Commands:** node (2), make (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **File Paths:** min.js (1)
> **Cross-References:** earlier in (1)

#### [Selectors and filters](https://www.linkedin.com/learning/jquery-essential-training-24696205/selectors-and-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/selectors-and-filters?u=76281980&t=0)** - [Person] For the [[Representational State Transfer (REST)|rest]] of this chapter, I'm going to be demonstrating code in the "Finished" folder and "Ch_2" just to give you a quick introduction to the features of jQuery that we will be learning about in detail in the rest of this course, so you can either work along with me in your folder, or you can just get comfortable and sit back and watch, it's entirely up to you. Follow along if you feel like it. For this example, we will take a look at the selectors and filters, which are one of the basic building blocks of jQuery. So let's go ahead and open up the "SelectorsFilters" file here, and you can see I've already included jQuery itself and I've got some sample code to try out, so my jQuery code listens for the page to load, and then, it attaches a "click" event listener to this button down here on this page to run my example code, and again, don't worry if you don't understand all this right up front, we're going to learn all about all of this in much more detail in the rest of the course. So when the button gets clicked, this function gets executed, and what I'm going to do first is open this up just in Live Server so you can see that there's already some content here in the page, so selectors and filters are used to extract information from web pages, and selectors basically work by using a CSS-like syntax, so let's go ahead and go back to the code. What I'm going to do is un-comment this first line of code,
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/selectors-and-filters?u=76281980&t=96)** so you can see, for example, the jQuery function right here, the dollar sign is being called with a string, "p," so this will select all of the paragraph tags, in this case, in the entire page, and will return them as a list of objects that you can further operate on using a variety of functions, so here, in order for you to see that the selectors are properly working, I want to surround the paragraph with a CSS border that's three pixels and red, so when I save this and we go back to the page in the browser, let's do that. Now, I'm going to click on this button, and you can see that sure enough, all of the paragraph tags are, in fact, surrounded by red borders. Now, notice I didn't have to write any special looping code to affect all the paragraphs. Let's go back to the code. All I had to do was just call jQuery with the paragraph tag, and then, this function automatically operates on all of the paragraphs that came back at the same time, so jQuery is designed to work on multiple elements all at once. Let's try some other expressions to see how selectors work. Let's comment that line back out, and I'll un-comment this next line. In fact, I'll un-comment the next two lines, so again, if you've used CSS, you're probably familiar with how these selectors work. The dot means that I want to select all of the items, regardless of what kind of tag they are,
>
> **[3:11](https://www.linkedin.com/learning/jquery-essential-training-24696205/selectors-and-filters?u=76281980&t=191)** that have a class named "selectors" applied to them, and if we scroll down in the page, right, you can see that I've got... This "h2" has "selectors" on it, so that will be selected, and let's see, I can also pass in an ID, so in this case, jQuery will select the item that has the ID of "content," and that's this "div" right here, and since there's only one of those, then this element will be selected, so let's go ahead and save, and let's go back to the browser, and now, let's click on "Test Selector" again, and now, you can see that the "div," right, this entire "div" is being selected, that's because of the ID of "content," and this "h2" is being selected because it has the class of "selectors." You can actually get pretty fancy with selectors and filters, so let's go back to the code, and let's go ahead and comment these two lines back out again, I'm going to type Control-slash to do that, so Control-slash comments... Un-comments lines, and that's Command-slash if you're on a Mac. All right, let's try something a bit fancy, again, this is something we'll examine later on when we get to the full chapter on selectors and filters, I want to select the "h2" tags that do not have the "selector" class on them, so there's only three "h2s" in the document, right? There's this one on line, let's see, 24, there's one here on line, let's see, 27, and then, 32. What I'm essentially doing is getting the "h2" right here that does not have the "selectors" class on it,
>
> **[4:49](https://www.linkedin.com/learning/jquery-essential-training-24696205/selectors-and-filters?u=76281980&t=289)** so let's go ahead and save, and let's go back to the browser, and let's test, and sure enough, you can see I'm getting the "h2s" that don't have that class. Let's also write a selector that only selects the first paragraph, so that's this line right here above it. In this case, I am getting the paragraph tag, but I'm getting the... Only the first one, so that should probably... It's just going to be this one probably, right here on line 25, so let's save, and let's try it, and sure enough, yep, that's the paragraph that gets selected. All right, so you can see that selectors and filters solve a pretty common task when you're working with web applications, they provide an easy way for finding and extracting information from web pages so that they can be further acted upon by your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3)
> **Code Identifiers:** jquery (8)
> **Cross-References:** go back to (6)
> **UI Navigation:** click on (2), select the (2), scroll down (1)
> **Env Vars:** css (3)
> **Exercise Files:** sample code (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### [Creating and modifying content](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-and-modifying-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-and-modifying-content?u=76281980&t=0)** - [Lecturer] Now, let's take a look at how you can use jQuery to create new content and change existing page content. Let's open up create change here in the finished folder, and let's also open this in the browser using live server. All right, so let's go ahead and take a look at the code. So what we're going to do is see how we can create new content and change content that's already in the page. So I'm going to create new content by simply calling the jQuery function with a string of [[HTML]]. And this is a shortcut way of creating a new HTML tag. In this case, I'm passing a paragraph tag, and jQuery will create a new paragraph dom element. And then I'll take that new paragraph and I'll use the append function to put some more HTML into it. In this case, an emphasis tag with the words hello there inside of it. And then of course, I'm going to put that content into the page. And you might recognize this syntax from the previous video on selectors and filters. I'm going to select the element in the page that has the ID of example, and that is this div right here, right? You can see I've got a div with the ID of example, and then I'm going to call the HTML function to set the HTML content of that element. So let's go ahead and try that out. And actually, let's go ahead and comment out this line while we're at it. So let's save, and let's click run.
>
> **[1:37](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-and-modifying-content?u=76281980&t=97)** And sure enough, that is exactly what happened. All right, let's try another example. So for this example, I'm going to use the prepend function, and let's go ahead and comment out these three lines. So prepend is essentially the opposite of append. It takes the content, and in this case, it's just a string of text instead of full HTML, and inserts it in front of the element it is called on. So if we save this and let's run it again. So let's go ahead and click run, we can see that the watch this string is inserted into the div example. And if we go back and uncomment out our previous three lines, let's go ahead and save, and let's run it again. You can see that watch this is getting inserted in front of the hello there content. All right, finally, let's take a look at how we can change existing content. So let's go back to the code. So this time, I'm going to call the HTML function with some new HTML. So I'm going to create a new H2 tag inside the example div. So let's save this and let's run it. All right, and you can see that that worked, but there's another way that you can insert content into elements. Let's go back to the code. You can also use the text function. The text function is different from HTML in that it will take whatever string you give it
>
> **[3:11](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-and-modifying-content?u=76281980&t=191)** and convert it into escaped text content. So you'll notice I'm also passing in the H2 in the string, just like I am in the call to the HTML function. But in this case, this will be converted into readable text. It won't be treated as HTML code. So if I comment this line out, and let's save, and let's go back to the browser, and let's run this, you can see now that the HTML is getting inserted as text. It's not being treated as HTML. So later in the course, we will learn about some additional ways to create and change content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (13)
> **Env Vars:** html (13)
> **Cross-References:** go back to (3), previous video (1), later in (1)
> **Code Identifiers:** jquery (3)
> **Definitions:** is a  (1), is called (1)
> **UI Navigation:** select the (1)
> **Analogies:** just like (1)
> **Speakers:** - [lecturer] (1)

#### [Event handling](https://www.linkedin.com/learning/jquery-essential-training-24696205/event-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/event-handling?u=76281980&t=0)** - [Instructor] So every modern web application has to deal with events. And in this example, I'll show you a quick introduction to handling events with jQuery, and we'll learn more about the subject later on in the course when we get to the chapter on events. So let's open up the Events.[[HTML]] file. And before we look at the code, let's go ahead and run this example in the browser. And you can see that as I move the mouse over this div element, there's some information being displayed inside the div. There's the mouse position, whether or not a button is pressed, there's a click event handler, there's a mouseleave whenever I move the mouse outside of the div. So let's refresh. If I have the meta-key down or not. On [[Windows]], that's the Windows key. On Mac, that's the Command key. You can see that that's changing between true and false. Let's see. Yeah, and then we have the [[Representational State Transfer (REST)|rest]] of the events mouseleave. So when I click, there's some information that shows you the mouse coordinates where I'm clicking. All right. So anyway, there's a whole bunch of information that we can learn about events. So let's go ahead and look at the code. So the way that jQuery handles events is pretty straightforward. jQuery uses two basic functions to attach and to detach event handlers. So here in my document.ready function, when the page loads, I'm going to use the jQuery selector to get a reference to my example div, which is this div here. And then I'm going to use the on function.
>
> **[1:37](https://www.linkedin.com/learning/jquery-essential-training-24696205/event-handling?u=76281980&t=97)** This function attaches an event listener to an element. And as you might imagine, there's a corresponding off function that detaches the event listener. So in this case, I'm listening for mousemove, click, and mouseleave events, and I have callback functions to handle each one of those events. So the onMouseOver callback function, receives the jQuery event object, which we'll cover in more detail later. So I'm going to use the text function that we saw in the previous example to set the contents of the example div to some of the properties that are passed in as part of the event object, like the mouse position and so on. So I'll have the event type and the X and Y coordinates of the mouse, whether or not a button was held down and which button was pressed if any. This information is displayed in the div using the text function. In the mouseleave event handler, I'm just simply setting the text to mouseleave. And in mouseclick, I'm doing two different things. First, I'm using the text function to indicate what type of event it was in the coordinates. And then I'm using the off function to turn off the mouse over listener. So let's go back to the browser and look at the example one more time. All right, let's reload. So as you can see, as the mouse is moving, this is the mouse over function being called. And as I leave, there's the mouseleave. But once I click,
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/event-handling?u=76281980&t=190)** notice that when I move the mouse over the div, the mouse move handler is no longer firing. So mouseleave still works. That click event is still working, but the mouse move function is no longer being called because I used the off function to remove that listener. So that's a quick example of how you can dynamically control events in jQuery. And again, we'll see this in more detail when we get to the chapter on events.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** jquery (6), onmouseover (1)
> **File Paths:** events.html (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Effects and animations](https://www.linkedin.com/learning/jquery-essential-training-24696205/effects-and-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/effects-and-animations?u=76281980&t=0)** - [Narrator] JQuery provides a set of animation effects that you can use right out of the box to give your web applications a more polished feel. And we'll take a more in-depth look at these animation features later in the course. But to get a sense of what you can do with the features provided, let's look at a simple example. Let's open up the animations.[[HTML]] file. And before we go through the code, let's run the example to see what it does. So I'm going to open this with the Live Server. All right, and I'm going to go ahead and click on the Start Animation button. And you can see that when I do that, the div grows in size and then it moves right and down. And as it moves down, the border thickness increases at the same time. Let's go ahead and look at it one more time. So grows, moves over and down, and as it's moving down, the border thickness grows. All right, so let's go ahead and take a look at the code. So here's the code that runs that animation. So when the button is clicked, a few things happen. First I get a reference to the div element, which is this testDiv here in the page. And there are four different calls to this animate function. Now this is an example of jQuery's statement chaining feature, which we will talk about a little bit later in the course. So each one of these animate functions will execute in order in which they are called. So the first thing I'm animating is the width property
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/effects-and-animations?u=76281980&t=93)** to a value of 400 over the course of 300 milliseconds. When that completes, I then animate the height to a value of 300 over 400 milliseconds. Then I animate the left property, and this is what causes the div to slide across the page, to a value of 200 pixels and that's over the duration of 500 milliseconds. And then finally, I animate multiple properties at the same time. So this string right here that says top: "+=100," essentially says, take whatever the value of the top property currently is and animate that to that value plus 100. So that's what causes the div to move down. And at the same time, I'm also animating the border width to a value of 10. And in this case, I'm not using a millisecond duration. I'm passing in the keyword slow, which equates to around 800 or so milliseconds. So we'll see more of the animate function later in the course. But that should give you an idea of the kinds of animations you can do with jQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Code Identifiers:** jquery (2), testdiv (1)
> **Cross-References:** later in (3)
> **File Paths:** animations.html (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [AJAX operations](https://www.linkedin.com/learning/jquery-essential-training-24696205/ajax-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/ajax-operations?u=76281980&t=0)** - [Instructor] Let's finish up this chapter by taking a quick look at [[AJAX]], which we will explore more in depth later on in the course. Let's go ahead and open up AJAXIntro.[[HTML]] and before I go into the code, I'm going to bring this up in the browser. All right, so here I'm going to demonstrate two things. The first is getting plaintext and inserting it into the document, and then I'll show you how to do the same thing with HTML content. All right, so I have my empty div tag here and two buttons, one is labeled Get Text, one is labeled Load HTML. So I'll click on Get Text and you can see that some text appears in the div. It says This is some sample text content. If I click on Load HTML, the same thing happens, only in this case, I've got some rich HTML content that gets loaded into the div. All right, so let's take a look at the code and see how this works. All right, so here's my code and what I'm going to do is scroll down a little bit. You can see that when I've got my buttons, right, each one has an id. So in the page load, I set click handlers for getting content and loading HTML. So the getContent function handles the click event on the Get Text button. And this function calls the global jQuery Ajax function. The Ajax function takes a URL parameter, and in this case, I'm passing in the name of the file, which is samplecontent.txt.
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/ajax-operations?u=76281980&t=96)** And you can see that it's got some sample content in it. It's at the same level as the file itself, the HTML code itself, which is why you don't see a path in front of the file name. So when that call completes, the done function handler calls setContent and setContent's right here. The data parameter is the actual result content of the URL that was requested in the Ajax call. And I also have access to the browser's underlying native XMLHttpRequest object if I want to work with it, along with the status of the Ajax call. In this case, all I'm doing is using jQuery to get a reference to the example div, and then calling the text function to set the data content that came back from the server. In fact, this scenario is so common, loading HTML content or other content from the server and putting it directly inside of an element, that jQuery has a separate convenience function for this. So in the second example, the click handler is calling the loadHTML function. And all it does is get a reference to the example div and call jQuery's load function, which takes the URL of the content that I want to load into this element. And the load function takes care of everything, from retrieving the data to placing the data inside the element
>
> **[3:11](https://www.linkedin.com/learning/jquery-essential-training-24696205/ajax-operations?u=76281980&t=191)** specified by this selector. And you can see, once again, in my sample HTML file, I've got the HTML fragment that's being loaded. And so all you need is this one line of code to load HTML into an element on the page. And we'll see more of this when we get deeper into the Ajax chapter. But this should give you an idea of just how easy it is to work with Ajax content in jQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (11), [[AJAX]] (7)
> **Env Vars:** html (10), url (3)
> **Code Identifiers:** jquery (5), setcontent (2), getcontent (1), loadhtml (1)
> **UI Navigation:** click on (2), scroll down (1)
> **File Paths:** ajaxintro.html (1), samplecontent.txt (1)
> **Speakers:** - [instructor] (1)


### 3. Accessing Page Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to selectors and filters](https://www.linkedin.com/learning/jquery-essential-training-24696205/introduction-to-selectors-and-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/introduction-to-selectors-and-filters?u=76281980&t=0)** - [Instructor] As I mentioned earlier, retrieving content from web pages is a very basic, and common [[Web Development]] task, and this is where jQuery selectors, and filters are very useful. It's one of the main things that jQuery makes a lot easier to accomplish with a lot less code than if you just use the standard DOM API, and that is what we are going to look at in this chapter. Selectors and filters work together to retrieve webpage content. Selectors are used to select content as their name implies, and then filters are used to further refine the selection criteria. In this way, you can think of selectors, and filters as the query part of the name jQuery. The resulting content can then be manipulated by other jQuery or playing [[JavaScript]] functions. So let's consider a conceptual example. Suppose I have a web application that presents a gallery of photos. I might want to do some processing of the photo elements in the page. For example, add event handlers or sort them or perform some other operation. To do this, I would use a selector, in this case, the name of the element that I'm interested in, which is image, and then this selector would return an array of all references to all the image elements in the page and I could then perform my processing logic on them. But what if I only wanted to select the first image? In this case, I would augment my image selector with a filter,
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/introduction-to-selectors-and-filters?u=76281980&t=93)** which is the first string that comes after the colon on my selector. That selector and filter would get me a reference only to the first image. Now, this is a pretty simple example, and we will see more complex usage as we go through the chapter, but this is one of the main features of jQuery, making it easier to select, and work with content in the webpage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Development]] (1), [[JavaScript]] (1)
> **Code Identifiers:** jquery (5)
> **Env Vars:** dom (1), api (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Basic selectors](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-selectors?u=76281980&t=0)** - [Instructor] Let's start with some basic jQuery selectors. These work by using CSS syntax to select content from the page. Let's examine the syntax for each of these and then we'll see how they work in our example exercise. To select all of the elements in a page with a particular tag name, I simply pass the name of the tag to the jQuery function, which will select all of those elements. Similarly, I can use an identifier of a specific element and jQuery will select the element with the ID attribute that has the same name as that identifier. I can also select elements that have a particular class name by passing in the class name proceeded by a period, just like you would define it in CSS. I can get a little more fancy by specifying tags that have a particular class name by giving the name of the tag followed by a period, and then the name of the class. I can get even more fancy than that. This code essentially says get me the element that is a specific tag type that has a given ID and a class of class name. I can also use the wild card selector, which is the asterisk character to select all of the elements in the page. You've probably noticed that the way you write jQuery selectors to work on page content is pretty much the way you would write CSS selectors, and that's not by accident. So let's jump over to the code and exercise some of these so you can see how they work. So in the starting point for chapter three,
>
> **[1:34](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-selectors?u=76281980&t=94)** let's open up the basic selectors file and let's begin by exercising some of these examples. So let's add the first example, and I don't expect you to fully understand all of this just yet, so bear with me. What I'm going to do first is select all of the paragraph tags, and I'm going to do that by writing the jQuery function and then calling it with the P tag. And then I'm going to call the CSS function, which will add some CSS to the paragraphs. And I'm only doing this just so that you can see that the selector is in fact working. So I'll give all the paragraphs a solid red border of three pixels. Now notice I don't use any angle brackets around the paragraph tag, it's just the tag name. And the result of this function call will be a list of all the paragraph tags in the page because I'm not specifying any filters like particular classes or IDs. And then the CSS function, we haven't covered this yet, but the reason I'm doing this is so you can visually see the results of the selector in the page. So let's go ahead and save this, and then let's bring it up using live server. And I'll click the run button because the run button triggers that function. And sure enough, you can see that all of the paragraphs on the page now have a bold red border on them. Okay, so let's go back and try a few more things. All right, now let's try our next example. And what I'm going to do is select elements
>
> **[3:12](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-selectors?u=76281980&t=192)** that have the class name of A on them, and I'm just going to copy and paste the [[Representational State Transfer (REST)|rest]] of this code right here 'cause it's the same. And we'll comment that one out. All right, so in this case I'm asking jQuery to find all elements regardless of their tag name that have the style class of A on them. And you can see down here in the code, I have a list with a couple of items that have the A class on them. And there's also a paragraph right here that has the A class on it. So if this statement works properly, we should see a few things in the page lit up with a red border. So let's save this and go back to the browser and let's run again. And sure enough, those elements with the A class have been selected. All right, let's keep on going. All right, let's try another one. In this case, let's try the ID. So I'm going to [[Fetch]] the element that has the ID of example, and that's going to be this div right here. You can see the ID is equal to example, and we'll do the same thing. We'll just copy and paste that and let's comment this out. And let's go back to the browser and let's run. And sure enough, the div is now selected. Okay, let's try one more thing. Let's select all paragraph tags that have a class of B on them.
>
> **[4:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-selectors?u=76281980&t=285)** So to do this I'm going to select paragraph tags and then I'm going to put a dot and a B. So this will select all the paragraph tags that have a class of B. So it's going to skip over these list items 'cause they're not paragraph tags and it looks like there's only one paragraph that actually has that class on it. So that middle paragraph should be given a bold red border. So let's save and let's go back to the browser and sure enough, that is exactly what happened. Oh, I forgot to comment out the previous code. So let's comment that out and let's run this and sure enough, that's exactly what's happening. All right, so that should give you an idea of how basic jQuery selects work. You use these to select content in the page that you can then manipulate using jQuery functions or any other [[JavaScript]] functions that you might define.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1), [[JavaScript]] (1)
> **Code Identifiers:** jquery (8)
> **Env Vars:** css (6)
> **Cross-References:** go back to (3)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Basic filters](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-filters?u=76281980&t=0)** - [Instructor] jQuery filters are used in conjunction with selectors in order to further refine a result set that comes back from a selector expression. In this chapter, we'll look at filters and then we'll see how they work in some example exercises. So let's look at the basic filters available in jQuery. I can use the first and last filters to select the first or the last instance of a given selector type. The filter is specified using a colon before the name of the filter. Similarly, I can use the even or odd filters to select only even or odd-numbered items. I can use expressions like greater than, less than, or equal to. So I can use these filters, for example, to select elements that are at or before or after a specific index. I can also specify that I only want to filter for items that are currently in the process of being animated. And this could be useful, for example, if you want to stop all the animations on a page. There's a filter to get the element that currently has the input focus. And there's also a way to perform negated expressions. You can use the not operator to filter out elements that do not match the given filter expression. And we'll see how that works. So now that we have an idea of what kinds of basic filters are available, let's jump over to the code and exercise a few of these so you can see them in action. All right, so here in our editor, I'm going to open up BasicFilters and I'll open this in the browser
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-filters?u=76281980&t=93)** so we can see what it looks like. And this exercise file is very similar to the one we used for the selectors example. So let's try out some filters and let's start with a couple of simple ones. I'm going to use the jQuery function, and I'm going to ask for the item with an id of example. And that's this div right here. And I'm going to get paragraphs inside the example div, but I'm going to filter them so that I only get the first one. And then we'll do the same CSS border trick so that we can see our results. So I'll get the first and last paragraphs. All right, so these two statements will retrieve the first and last paragraph tags, and then the CSS function will put a bold border around them so we can see them. Let's save this and let's bring up the browser and let's click the Run button. And sure enough, that's exactly what happens. The first and last paragraphs get selected inside the example div. All right, let's go back to the code. So let's comment these two out. Let's try the even filter. So we'll get all the even-numbered paragraphs, and then we'll do the same CSS trick. This should select all paragraphs
>
> **[3:07](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-filters?u=76281980&t=187)** that are at even-numbered indexes. So let's go ahead and run. And you can see that paragraphs one, three and five are being selected, but indexes in jQuery are zero-based. So this is paragraph zero, two, and four, and there's also a filter for odd indexes, but I'm just going to skip that one. You can try it out if you want to. So let's try another couple of examples. In this case, I'm going to, inside the example div, I'm going to get the element that has the A class applied, but only the first one. So we'll see that this works with classes as well. All right, let's put that CSS on there. And if you scroll down, you'll see that inside the example div, this paragraph has the A class applied. So that's the one that should get selected. So let's save and let's run this again, and sure enough, that's exactly what's happening. All right, okay, let's just try a couple more. Okay, let's go ahead and comment that one out. Let's try an equation example. So in this example, I'm going to, once again, inside the example div, I'm going to get paragraph tags that are at an index which is greater than one, and we'll do the same CSS thing.
>
> **[4:42](https://www.linkedin.com/learning/jquery-essential-training-24696205/basic-filters?u=76281980&t=282)** All right, so let's go ahead and try this out. All right, and when I run, remember, indexes are zero and one, right? So those two are not selected. So you can see that indexes two, three and four are not being selected. So the greater than filter is working. And similarly, you could use less than and equal to filters to achieve similar effects. All right, so let's finish up. Let's do one more example. Let's try using the not operator. So in our example div, I'm going to look for a paragraph that does not match the expression of the paragraph that is equal to index two. So this should get me all the paragraphs except for the one at the second index. Let's copy and paste and we'll comment this example out. All right, let's go back to the browser. And sure enough, that's exactly what happens. We get zero, one; two is not selected, and then three and four. So knowing how to use selectors and filters [[Forms]] the basic foundation for using jQuery. A large amount of jQuery code usually involves selecting web content from a page and then operating on it. And now that we have this foundation, we can move through the [[Representational State Transfer (REST)|rest]] of the course and see a lot of the great things that jQuery has to offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** jquery (7)
> **Env Vars:** css (5)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Advanced selectors](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-selectors?u=76281980&t=0)** - [Instructor] Now that we've seen some of the basic selectors and filters, let's learn about some of the more advanced selectors that you might use in jQuery. So I'm going to open up the advanced selectors [[HTML]] file. If you've ever worked with some of the more advanced CSS selectors, such as parent-child or descendant selectors, these are going to look very familiar to you because they use the same syntax. So let's begin with the child selector. So in this case, the selector I'm going to use is going to be div angle bracket P. And this child selector basically means select a paragraph tag, but only if it is an immediate child of a div element. And if we look at the example document, right? that means that these paragraphs here won't be selected. Why? Because they're immediate children of the body. So, what we're looking for here is inside this div, these paragraphs are immediate children of the div element. So, that's going to result in these paragraphs being selected. So let's go back up to the code and let's put our CSS visualization trick on there. All right, and let's bring this up in the browser. Okay, and sure enough, you can see that these paragraphs are not being selected, but these are
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-selectors?u=76281980&t=93)** because they are immediate children of the div tag. All right, let's try one more. Let's go back to the code. Now let's try the descendant selector. And the descendant selector is kind of similar. So, in this case, I'm going to select paragraphs that have a A-class on them, that are somewhere within a div. This means immediate child. This means anywhere within the parent tag. And, once again, we'll do the CSS trick. All right, so they don't have to be immediate children now, because there's no angle bracket. And, as you might imagine, there's only one paragraph that meets this criteria, and that's this one right here with the A-class applied. So let's save and let's go back to the browser and let's run. And sure enough, that's the one that gets selected. All right, let's keep going. Let's try the adjacency selector. So the next adjacent selector selects the next element if it is immediately proceeded by a specific element. So, for example, let's go ahead and copy and paste this, and let's comment that out. So, if I were to write an expression that looks like UL plus div, all right, in this example, you can see that I have an unordered list with a div that comes right after it.
>
> **[3:08](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-selectors?u=76281980&t=188)** So, in this case, this div will be selected by this expression because it comes right after an unordered list, just like this expression says that it should. So, if we run this again, let's go back to the browser and run. And sure enough, you can see that the div is being selected. If we go back to the code, however, and I were to put another paragraph between these two. So let's try putting a paragraph in there. All right, so now let's go ahead back to the browser, right? And you can see that there's a paragraph in between the now and I click run. Well, now the div is not being selected anymore because it's no longer immediately proceeded by an unordered list. All right, let's try one more example. Let's get rid of that temp paragraph. We're going to use the next sibling selector. So, we'll copy and paste that. All right, and I'll write the expression and then explain it. So I'm going to look for the ID of para one and then use the tilde character with a paragraph. Comment out the previous example. So, this expression, selects each paragraph as long as it has an element that matches this selector as a previous sibling. So, in this case, we will select any paragraph tag that has an element with an ID of para one
>
> **[4:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-selectors?u=76281980&t=285)** as the previous sibling. So, if we scroll down and we look here, you can see that on line 48, this paragraph has an ID of para one. And, so, this paragraph should be selected, okay? It doesn't have to be the immediate previous sibling. It just has to come before. So let's go ahead and try it out. And, in fact, actually what's going to happen is all of these paragraphs are going to be selected because this is not an immediate previous selector element. It's select all the sibling elements that come after this one. So, you can see that there are multiple paragraph tags that come after this paragraph. So all three of these should be selected. So let's try that out, and sure enough that that is exactly what happens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (3), html (1)
> **Cross-References:** go back to (4)
> **Analogies:** such as (1), imagine (1), for example (1), just like (1)
> **Definitions:** basically means (1), is an  (1), means that (1)
> **Code Identifiers:** jquery (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Attribute filters](https://www.linkedin.com/learning/jquery-essential-training-24696205/attribute-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/attribute-filters?u=76281980&t=0)** - [Instructor] You can get pretty far using the basic jQuery filters, but you'll run into scenarios where you need a little bit more power. jQuery provides some more advanced filters, which we will take a look at now. So, in the Code Editor, let's open up the AttrFilters example. Attribute filters in jQuery let you perform various tests to see if attributes are present or if they contain certain values, so for our first example, let's write a jQuery selector that's looking for paragraph tags that have a class attribute. So, what I'm going to do is write the jQuery function and then my selector is going to be for paragraph tags and I'm going to put the attributes inside square brackets. So, in this case, I'm going to put the name class, and if we scroll down, you'll see that there are paragraphs that have the class attribute. Now, we're not testing for a specific class name. What we're doing here is we're looking for any paragraph tag that has a class attribute, and then let's just go ahead and highlight that using our CSS border. All right? Okay, let's go ahead and bring this up in the browser, and if this works correctly, we should see a three-pixel red border around those paragraphs that have classes, and sure enough, we do. So, paragraphs 1 and paragraph 3,
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/attribute-filters?u=76281980&t=93)** those are the ones that have class attributes. All right, let's go back to the code. Okay, let's comment this one out and try the next one. In this case, we're going to see if an attribute equals a specific value. So, what we're going to do is look for a paragraph that has an ID equal to para1. All right, and once again, we scroll down. We'll see that this paragraph right here has that ID, so paragraph two should be highlighted. So, let's save and let's try it, and sure enough, that's what happens. All right, let's keep on going. All right, so that's how we see if an attribute equals a specific value. Now let's try to see if we can find elements that have an attribute that starts with a specific string. So, let's go ahead and make a copy of this line and let's comment that out. All right, so in this case, I'm going to use the little up arrow's equal to para. All right, this means right here, the up arrow equals this means starts with. So, we're checking to see if we can find paragraph tags whose ID starts with the string para, and if we scroll down into the content, we can see that there are three of them, right? So, paragraphs 2, 4, and 5 all have IDs that start with para,
>
> **[3:09](https://www.linkedin.com/learning/jquery-essential-training-24696205/attribute-filters?u=76281980&t=189)** so let's go ahead and try that. We'll save and back to the browser, let's click Run. All right, so everything is working. Let's go back to the code one more time. All right, so for this last example, we're going to get a little bit more advanced. We're going to try to search for multiple attributes. So, let's copy that line and paste it. So, in this case, we're going to look for paragraphs that have an ID attribute that starts with para, and we're also going to find a language attribute, and I'm going to use *=, and then the text string en-. All right, so let's take a look at what this code is doing. So, it's similar to our last example. We're finding paragraphs with an ID that starts with para, and you can see that there are three of those, then we're also looking for the language attribute, and *= means contains the text, and you can see that these last two paragraphs have language attributes that contain en-. One of them is en-us, one of them is en-gb, but you can see that we're looking for en-, so we should be selecting these two paragraphs with this statement right here, so let's save and let's go back to the browser and Run, and sure enough, that's exactly what happens. So, by using attribute filters,
>
> **[4:43](https://www.linkedin.com/learning/jquery-essential-training-24696205/attribute-filters?u=76281980&t=283)** you can get some pretty fine-grained filtering done on your jQuery selectors when you're looking for really specific pieces of content that match specific criteria.

> [!info]- Semantic Content
>
> **Code Identifiers:** jquery (6)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (3)
> **Env Vars:** css (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Advanced filters](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-filters?u=76281980&t=0)** `- Let's wrap up our investigation of advanced filters by considering the child and content filters. So here in your code editor, let's open up advanced filters. Content filters let you filter the results of jQuery selectors by examining the content of the selected elements themselves. So for the first example, let's look for elements that contain specific content. So I'm going to write a selection for paragraph tags whose text contains the string three. And we will use our CSS border trick to highlight those examples. All right, so in this example, the code selects paragraph tags and uses the contains filter to select paragraph tags that contain whatever the text string argument is here. And if we scroll down, we'll see that paragraph three contains the number three, so that should be highlighted. So let's save and let's bring this up in the browser and let's click run and we can see that that works. All right, let's try something a little bit different. So now we're going to use the parent filter and the parent filter. All right, so once again, we're looking for paragraph tags, but the parent filter basically means
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-filters?u=76281980&t=93)** select these tags as long as they themselves are parents. And by parents I mean, either they have another tag inside them or they have text content inside them. So paragraphs have at least one child element, whether it's another element or a text node that will be selected by the parent filter. So if we scroll down, you'll notice that all of these paragraphs have text in them. All of these five right here. So all five of these paragraphs should be selected. So if we save and go to the browser, sure enough, that happens. And in fact, this paragraph up here gets selected as well because it is a parent, it has text inside of it. All right, let's go back to the code. Okay, let's try using the has filter. So what I'm going to do is write P colon. And what I'm going to do is write has, and then inside the has selector, I'm going to write P. And then a class equals A filter. So this code uses the has filter. So we're looking for, and actually I don't want to look for a paragraph, what I want to look for is a div. So we're looking for a div that has a P class inside of it, and that P tag has a P tag inside of it. And that P tag has a class attribute equal to A. So if we scroll down, well, here's our div,
>
> **[3:09](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-filters?u=76281980&t=189)** and sure enough, there is a P tag that has a class of A. So let's save and let's run this again. And sure enough, that div element is now being selected. So remember the selector is the div, right? We're not selecting the paragraph, we're selecting the div that matches this whole expression. All right, let's continue by looking at the child filters. Let's start with a simple one. Copy and paste this and comment it. So now I'm going to look for a div tag and a div that has inside of it a paragraph. Who is the first child? Al right, so this filter part of the expression selects paragraphs that are the first child of their parent. And so once again, if we look down here in the document, so here's our div, and this div element contains these paragraphs. In this case, this paragraph right here is the first child of this div. So let's go ahead and save and go back to the browser and sure enough, that's getting selected. All right, so far so good. Let's try another one. So there we used first child. Let's try the last of type selector. So instead of first child, I'm going to write last of type. So this expression will select paragraph tags
>
> **[4:43](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-filters?u=76281980&t=283)** that are inside of divs and are the last of their type. So in this particular case, it should be the last paragraph inside this div. And sure enough, that's what happens. All right, let's keep on going. We can select an element at a specific index by using the :nth-child filter. So let's copy and paste this and let's comment that out. So in this case, I want paragraph tags inside of divs. And the filter I'm going to use is :nth-child. And I'll pass in the index of three, right? So let's go ahead and save. We want the paragraph that is the third child of its parent. So this should give us the third paragraph. And if we run, let's bring this up in the browser. So if we run this, notice that this is a one based index as opposed to the even and odd filters we saw earlier, which are zero based indexes. So the first index is child one, child two, child three, and so on. That's why this is not off by one, like we saw in the previous examples. And one of the interesting features of :nth-child is that you can give it a formula. So let's try that. So what I'm going to do is copy this and paste it. And in this case I'm going to write, instead of child three, I'm going to write two N.
>
> **[6:18](https://www.linkedin.com/learning/jquery-essential-training-24696205/advanced-filters?u=76281980&t=378)** And so in this case, instead of specifying an exact index, I'm supplying this formula. So N will be a variable that loops over each one of the child elements inside the selector, and we'll select every second one. So let's save this. All right, and let's go back to the code and let's run, all right. And you can see that when N is zero, nothing is selected. And then when N is one, we got paragraph two and then nothing, and then four. So every multiple of two is being selected. So if I go back to the code and I take off the two and just use N by itself, notice that they're all being selected. All right, and similarly, if I change this to three, three N and let's run it again. Okay, now only the third one is being selected. There's five, so there's only the third one. If there's a sixth one, it would also be selected. Now obviously, I have not been able to cover every single selector and filter feature of jQuery. I covered the most important ones, but I would suggest taking a look at the jQuery documentation on selectors and filters to learn more. We covered quite a bit in this chapter so far, and I would suggest taking some time here to try out some of your own experiments and checking out the docs for the features that we spent some less time on.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4), we covered (1)
> **Definitions:** is a  (4), basically means (1)
> **UI Navigation:** scroll down (3), go to (1)
> **Code Identifiers:** jquery (3)
> **CLI Commands:** node (1)
> **Env Vars:** css (1)
> **Documentation:** the docs (1)

#### [Traversing web page elements](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=0)** - [Instructor] If you've done any serious [[Web Development]], you're probably familiar by now with the concept that [[HTML]] pages are organized as a tree structure. So if you consider a simple HTML page represented by the tree diagram you can see here. This tree structure and the relationships between the elements are described using an API called the [[Document Object Model (DOM)|document object model]], or DOM, which has been a W3C standard for quite some time now. jQuery makes working with this API much easier with a lot less code. Now let's imagine that we have a reference to this paragraph right here, which is outlined in red. The paragraph that follows this one is called the next sibling and there's a function to get it called, next, and similarly, the paragraph before this one is the previous sibling, and there's a function to get that called prev. The div tag that contains all of these paragraphs is called their parent, and not surprisingly, there's a function to get that as well. In fact, there's a function to get all of the parents of a given tag as a set. You can see that the div, body, and HTML tags are all parents of this paragraph, and there's even a function to get the parents of an element, but only until a particular tag is reached. That function is called parentsUntil, and in this case, you can see that parentsUntil, when we pass in the HTML tag,
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=95)** only retrieves the div and the body. So let's jump over to the code and exercise these and some other functions a little bit. Alright, let's go ahead and open up the Traversing.html file. So I'm going to start out by trying out the children function, which operates on all the child nodes of an element in a result set. So let's go ahead and write the code for that. I'm going to get a reference to the example div, which by now you're probably familiar with. It's this div down here in the document. It's the same example document we've been using, and I'm going to call the children function on it, and then I'll apply the CSS border to each of the child elements. And let's go ahead and collapse this down. Alright, so this line of code selects all children elements of the div element with the example ID, and then applies the CSS to all of them, which should be all the paragraph tags. So let's open this up in our live server and click run, and sure enough, that is what happens. Alright, let's keep going. Let's try a few more. So I'm going to start by getting a reference, so I'll make a variable and I'll assign that to the result of getting the para1 element, which is going to be, if we look down,
>
> **[3:08](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=188)** that's this paragraph right here. So we'll get a reference to that paragraph. What I'm going to do is use the prev function and I'll use our CSS to turn that border red, and then I'll do the same thing using the next function.
>
> **[3:34](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=214)** And in this case, I'll make the border green and then I'll use the parents function to give all of the parents a blue border. Alright, so let's go ahead and save that, and let's go back over to the browser, and now let's click on run. Alright, so sure enough, you can see that this is the paragraph right here that we get the reference to. So the previous paragraph is red, the next paragraph is green, and then all the parents, right, the div, this div here, all the way up to the body are now enclosed in blue borders, right? So you can see the div. In fact, yeah, the entire document has a blue border. Now that's not exactly what I want to have happen. So let's go back to the code and fix that. I'm going to limit where the blue border appears by using the parentsUntil function. So I'm going to write parentsUntil we get to the body element.
>
> **[4:43](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=283)** Alright, so let's save, and let's go back to the browser. And now sure enough, it's all the parents, except for the document itself. Alright, let's keep on going. Let's try using the find function. So I'm going to search inside the example div by using the find function, and I'm going to find the element that has the ID of para4, and we'll apply the CSS to that result. So let's go ahead and comment this out. So the find function will search down in the element tree, starting at a specific point that you give it. In this case, it's going to start at the example div, and it's going to find the element that matches this particular selector, which in this case is the ID of para4. Now in this example, I don't have a very complex element tree, but it's going to find this paragraph because it has the ID of para4 on it and it's going to apply the CSS. So let's go ahead and save and try that, and sure enough, that works. Alright, let's take a look at one more example. In this case, we're going to look at the each function. Alright, I'm going to add some starting point code, so I'm going to get the example div, and then all the paragraph tags inside there, and then I'm going to call each.
>
> **[6:17](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=377)** Each, as the name implies, iterates over a set of elements and performs an operation on each element. So what I'm going to do is specify a callback function that takes the index and the element that's being looped over. Alright, and let's go ahead and uncomment these two lines. Alright, so in this case, what I'm going to do is look for all the paragraph tags, and we've got five paragraphs. So this function will loop over each of the five paragraphs. So each time through this callback function, I'll be given these two arguments. One is the current index of the element in question, and the second is the actual element object. As a DOM element, a pure [[JavaScript]] DOM element, this is not going to be a jQuery object, alright? It's a standard DOM element. I can make it into a jQuery element by passing it into the jQuery function, which will then gimme the ability to call all the nice jQuery functions on it, but I'm not going to do that in this case. What I'm going to do. Actually, you know what? I am going to do that. Let's go ahead and get a little crazy. What I'm going to do is make a jQuery object out of that element and then I'm going to give it a CSS border, but in this case, what I'm going to do is use my border variable right here, which starts out as three, and I'm going to put the string px on there and solid red. Alright, and I'm also going to add some more CSS on there
>
> **[7:58](https://www.linkedin.com/learning/jquery-essential-training-24696205/traversing-web-page-elements?u=76281980&t=478)** and I'll make the margin-left equal to the left margin variable, and then I'll increment the border and I'll increment the left margin. So both variables are increasing in size each time through the loop. So the border for each paragraph should get progressively thicker, and the left margin will get progressively larger. And that's going to happen because I take this DOM element and I turn it into a jQuery element by passing it to the jQuery function, which gives me the ability to call these functions like CSS and such on them. So let's save, let's go back to the browser, and when I click run, you can see that that's exactly what's happening. So the border gets progressively thicker, the left margin gets progressively wider, and yeah, that's the effect there. So the each function is a very useful function, and in fact, we'll see it again later on in the course. I wanted to bring it to your attention because if you ever find yourself having to loop through elements to do some processing, the each function can come in really handy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Web Development]] (1), [[Document Object Model (DOM)|Document object model]] (1), [[JavaScript]] (1)
> **Env Vars:** css (8), dom (5), html (4), api (2), w3c (1)
> **CLI Commands:** find (7), make (5)
> **Code Identifiers:** jquery (8), parentsuntil (4)
> **Definitions:** is called (3), is a  (1)
> **Cross-References:** go back to (3)
> **File Paths:** traversing.html (1)
> **Documentation:** w3c (1)

#### [Statement chaining](https://www.linkedin.com/learning/jquery-essential-training-24696205/statement-chaining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/statement-chaining?u=76281980&t=0)** - [Instructor] I want to take a moment to stop here and point out one of jQuery's more nice features, and that is its ability to chain multiple functions together. This is called statement chaining, and it basically allows you to perform several operations on a result set of selectors and filters in just one line of code. So up until now, you've seen a lot of code that looks like this, right? A jQuery selector statement followed by a function call that operates on the result set that comes back. However, I can chain multiple function calls together, one after the other, and all of those will operate on the result set as you see here. This is called a statement chain. These functions will get executed in order, starting on the left and then going across to the right. So the selector will execute, the result set comes back, and then I can perform multiple operations on those objects. I can assign CSS, I can manipulate the content, I can turn events on and off. And the reason why this makes jQuery so powerful is that it allows you to perform multiple operations on one result set without having to get that result set over and over and over again like you might have to do in other scripting conventions. It helps make the code a lot less verbose, and it's easy to see what operations are being performed on a result set. You'll see code like this throughout the course, but I wanted to call it to your attention now so that you know it when you see it later.

> [!info]- Semantic Content
>
> **Code Identifiers:** jquery (3)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Selectors](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-selectors?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-selectors?u=76281980&t=5)** - [Lecturer] Okay, it's time for our first programming challenge. We've reached the point in the course where you should have enough knowledge to complete a programming challenge I'm going to assign. And this challenge is going to involve selectors. So what we're going to do is work on the H Plus sport site, which I've provided in the exercise files folder to practice jQuery features as we move through the course. So if you look inside the exercise files folder, you'll see that there's an H Plus sport start version, and there's a finished version as well for you to compare your code against. So before we take a look at the challenge, let's open up the site and see what it looks like. So here in the start folder, I'll bring this up in live server. And that brings us to the H Plus Sport homepage, which contains information about the company, the [[Microsoft Products|products]], the people, so on. Let's go ahead and click on the products link and let's scroll the products into view. And you can see that there's a variety of products from vitamins, to protein bars, to mineral water. And as I hover over each one, you see the product zooms up a little, and the name of the product is revealed as a little scroll up. But notice how the background color of each product name is red for all the different types of products. We're going to make the distinction a little bit clearer, and I'll show you what I mean. I'm going to open up the index page for the finished version of the challenge. And here in the finished version, you can see that mineral waters are now blue background,
>
> **[1:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-selectors?u=76281980&t=100)** vitamins are a green background, and protein bars have this purple background. So this is the challenge that you're going to do. You're going to change the background of these little titles, and let's go take a look at the start code so you can understand how to do that. So this is the [[HTML]] for the start page. It's not a very big file. You can see that it's only about what, a couple hundred lines, but the lines you care about are going to be in the section for products. So if we scroll to the products section right here, notice how each of the product names is represented by an H2 tag. And so, we've got an H2 tag that has the product name class, and it has a data attribute indicating what kind of product it is. And of course, in HTML, we have these data attributes that we can use to embed data into our pages. And we'll learn about these attributes and how jQuery works with them a little bit later in the course. But for now, using what you've learned about selectors and filters along with the CSS function that I've been using, you should be able to write some code that dynamically changes the background color for each of these product types. You'll have to write a selector and a filter that looks for these H2 tags, with a certain class and a certain data type. And what you're going to do is for vitamins, use a dark green color.
>
> **[3:12](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-selectors?u=76281980&t=192)** For mineral water, use a blue color. And for protein bars, use a dark purple color. I'm not going to tell you specifically what CSS color to use. Just go ahead and choose one that you think looks right. Go ahead and give it a try. And when you're ready, I'll be back in the next video to explain my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), [[HTML]] (2)
> **Env Vars:** html (2), css (2)
> **Code Identifiers:** jquery (2)
> **UI Navigation:** click on (1), scroll up (1)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [lecturer] (1)

#### [Solution: Selectors](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-selectors?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-selectors?u=76281980&t=5)** - [Instructor] All right, so how'd it go? Did you get it to work? Let's take a look at how I solved this challenge. Now, one of the things I want to point out here is that it's not important that you get the exact same answer I did because there's many ways you can solve problems like this using [[JavaScript]] and jQuery. I'm going to show you how I chose to solve the problem, and your solution might have been a little bit different, and that's okay. So I used three lines of jQuery code that dynamically changed the background for each product name. So remember, if we scroll down to the [[Microsoft Products|products]] section, remember that all of the products are listed inside a section tag with an ID of products, and that each product name is an H2 element with a class of product name and a data type attribute indicating what type of product that it is. So all I need to do is write a jQuery selector to select each of these H2 tags and change the background color. So the selector statement for each one of my three lines of code differs by only the attribute filter. So my selector reads inside the products section, right? The element with the products ID, that's the section tag. Look for H2s that have the product name class. And then inside the attribute filter, I'm looking for data type equal to mineral water, vitamin and protein bar.
>
> **[1:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-selectors?u=76281980&t=100)** And in each of those separate cases, I just simply change the background color in order to match the color needed for each one of those items. That's pretty much all there is to it. Just a few lines of jQuery code is all it took to solve this challenge. So that's my solution. How does my code compare to yours?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[JavaScript]] (1)
> **Code Identifiers:** jquery (4)
> **UI Navigation:** scroll down (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Manipulating Page Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating content](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-content?u=76281980&t=0)** - [Instructor] In the previous chapter, we saw how to select and retrieve content from a webpage. Now, those operations are pretty useful, but they're not enough to build a robust web application on their own. In addition to working with existing content, there are times when you're going to want to create new content and add it to the page. For these purposes, you use jQuery's [[Content Creation]] and manipulation functions. And as you'll see in this chapter, there are functions for creating, copying, deleting, and moving content around. So let's start by creating some content. Here in the editor, I'm going to open up the Creating.[[HTML]] file. And you can see I've already filled out the document ready function with some event handlers for the three buttons that are down here in the page for creating, changing, and changing all content. So we're going to use that for exercising some functions. So let's start off by seeing what the HTML function does without any parameters. Let's go ahead and just uncomment this line right here. Let's save that. Let's go ahead and bring this up in the browser. All right, and I'm going to go ahead and click on the create content button. And you can see that when I do that, an alert appears. And when it's called with no parameters, the HTML function simply retrieves the HTML content on the element that it's called on. So in this case, it's the HTML of the div tag that has the ID of example.
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-content?u=76281980&t=95)** And you can see that that's all of the paragraphs that we have in this div element here on the page. All right, so let's try creating some content by filling out the create content function. Let's go back to the code. All right, and down here in the createContent function, I'm going to comment that line back out. So let's go ahead and get a reference to the example div. And I'm going to call the HTML function this time with a string. And I'm going to pass in a string that just says Hi There. All right, and we'll close that off. So to create new HTML content, you pass a string of properly formatted HTML directly to the HTML function, which will replace the content of the matched set of elements from this selector expression with whatever the new content is. So let's go save and try that out in the browser. And when I click create content, you can see that all the paragraphs disappear. And now I've got my little paragraph that just says Hi There. You can also create new HTML elements by passing a string of HTML directly to the jQuery function itself, and then store the results in a variable. So let's try that. So I'm going to create a new element using the jQuery function, and I'll just call it newItem =,
>
> **[3:11](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-content?u=76281980&t=191)** and I'll just write in my paragraph, This is a new paragraph and we'll close that off. And now, I'll get the reference to the first paragraph. So that's para1, which again, if we look down here, that's this paragraph right here. So it's, oh, it's paragraph two actually. All right, let's comment out the previous code and I will call html with newItem. All right, let's go ahead and try this in the browser. And I'll click create content and you can see that the contents of paragraph two are now being replaced. All right, let's also try the text function. The text function is similar to HTML, but it just creates plain text. So for this example, we'll edit the changeContent function and we'll set the text content of the last paragraph. So I'm going to use a selector with a filter to get the last paragraph, and I'll call the text function with a string.
>
> **[4:30](https://www.linkedin.com/learning/jquery-essential-training-24696205/creating-content?u=76281980&t=270)** All right, so this code uses a selector and a filter to get the last paragraph of the example div and change the content. So let's go ahead and run that. So now I'm going to click on the change content button and you can see sure enough, that's exactly what's happening. So it changes the last paragraph. And then finally, let's apply content changes to more than one element. So let's go back to the code, and now we're going to edit the changeAllTheContent function. So for this case, I will be looking inside the example div and getting all the paragraphs. And I'll use the text function once again, and I'll make that string, I've changed all the paragraphs. All right, so let's save this. All right, let's go back to the browser. Okay, and now when I click change all, you can see that all the paragraphs get changed. And the reason for that is because in this case, I'm selecting all of the paragraphs that are descendants of the divs. And this is a good example of changing multiple items using just one function call. So if we go back to the code, remember, this selector right here is going to select multiple paragraphs. So the text and HTML functions give you an easy way of creating content for use in your pages. And as we move through the [[Representational State Transfer (REST)|rest]] of this chapter, you'll see that these can be used with other functions to give you a great deal of flexibility in how you create and manage the content of your web apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (14), [[Content Creation]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** html (12)
> **Code Identifiers:** jquery (3), newitem (2), createcontent (1), changecontent (1), changeallthecontent (1)
> **Cross-References:** go back to (4), previous chapter (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **File Paths:** creating.html (1)
> **CLI Commands:** make (1)

#### [Inserting page content](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980&t=0)** - [Instructor] Creating content doesn't do much good by itself unless you can insert the new content into the webpage. jQuery provides some rich flexibility for inserting content into web pages, and that's what we'll examine in this video. There are two main ways to insert content into pages. You can insert content inside of other elements, and you can insert content relative to the outside of elements, and we'll examine both methods. So let's consider this sample [[HTML]] fragment, which represents a paragraph tag. And let's imagine we wanted to insert some new content either inside this tag or before or after the paragraph. The append function allows us to take content and add that content to the inside of the end of the matched elements returned by a jQuery selector expression. So in this case, the content is a string, but it could also be HTML content or another jQuery object, or even an array of jQuery objects. This jQuery selector retrieves all the paragraph tags and appends the content to the end of the inside of the paragraphs. Now, there's only one paragraph in this example, but if there were more, they would all be affected. Another way to accomplish the same thing is to create the content first using the jQuery function and then calling the appendTo function, which takes a jQuery selector expression. The end result of each of these calls would be content inserted at the inside end of the paragraph as you see here. To insert content inside a set
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980&t=96)** of elements at the beginning position, you use the prepend or the prependTo functions as you see here. To insert content adjacent to other elements that is either before or after, as opposed to inside other elements, you use the before and you use the after functions. So the before function takes content and will insert it before the outside of the matched set of elements. Just like with the prepend function, there's also an insertBefore version that specifies the new content first and the selector second. So here my jQuery select expression is selecting a page's paragraph tags and inserting the content before each paragraph. And as you might imagine, there are after and insertAfter functions, which do the same thing except they insert the content on the outside end of the matched elements. So let's try this out in our code, right, over here in the editor. Let's go ahead and open up the Inserting file. I'll start out by trying out the append and prepend functions. And this code is going to run when I click the Run button. So first I'll write my expression to get references to the tags I want. So example, and then p, I'm going to call the append function, and I'm going to write in with some content appended. And then I'll do the same thing, get the paragraph tags
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980&t=190)** and I'll call prepend with the string hello and a space. All right, so once again, if we look down in the document, we'll see here is the div with the id of example. Here's all the paragraphs we're going to operate on. So each of these lines, select paragraph tags that are inside that example div. So all of the paragraphs are going to be affected. So let's save this and let's bring this up in Live Server, and I'll click on Run. And you can see that when I do that, all of the paragraphs now have the strings hello, and with some content appended added to each one. All right, now let's demonstrate the appendTo and prependTo versions. Let's go back to the code, and I'm going to comment out these two. All right, and let's go ahead and use example. And this time I'll use the last paragraph, and I will use the appendTo function. And I'm going to use example and p first. There we go. So in this case, my jQuery selector selects the last paragraph. So I'm going to get the content of the last paragraph and append it to the first paragraph. Let's save and let's run. All right, so when I click on Run, you can see that now paragraph five has been appended to the end of paragraph one.
>
> **[4:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980&t=285)** And so now that switches it in the order. So now let's do the same thing. Only this time we'll use the prependTo function. So back to the code and let's just make a copy of this line. And I'm going to call prependTo. So now we're going to prepend the last paragraph to the first paragraph, and let's comment that line out. So let's go back to the browser and try this again. And now you can see that paragraph five is being prepended to paragraph one. All right, let's exercise some of the outside insertion functions. So let's go back to the code and let's comment out that example. So what we're going to do now is select all the paragraph tags inside the div, and I'm going to use the after and before functions to insert dashes and stars next to them. So after each paragraph, I'll put two dashes, and then before each paragraph, I will put two stars. All right, so let's go ahead and that. Right, and now you can see that the new content has been inserted on the outside of the paragraphs. And then finally, let's look at the insertAfter and insertBefore counterparts. So let's go ahead and comment out these two lines. All right, and this time we'll make a new paragraph
>
> **[6:24](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980&t=384)** and we'll call that one New para after. And I'm going to insert that after the first paragraph inside the div.
>
> **[6:38](https://www.linkedin.com/learning/jquery-essential-training-24696205/inserting-page-content?u=76281980&t=398)** And then I'll make a copy and I'll call this New para before, and I'll use insertBefore. And this is going to be the last paragraph. All right, so this code uses insertAfter to create a new paragraph tag after the first paragraph, and the insertBefore function to create a new paragraph element before the last paragraph. So let's run. All right, and I'll click on Run, and you can see that that's exactly what happens. So this new paragraph gets inserted after the first, and this new paragraph gets inserted before the last. So once you have content, whether it's newly created or already existing in the page, you can insert it using a variety of different jQuery functions depending on where and how you want that content to be inserted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Code Identifiers:** jquery (10), prependto (4), insertbefore (4), appendto (3), insertafter (3)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (3)
> **Analogies:** imagine (2), just like (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)

#### [Altering page content](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=0)** - [Instructor] All right, so far we've talked about creating content and inserting content into the page. Now let's learn a little bit about altering content that's already in the webpage. So let's open up the Altering file. And the first function I'm going to demonstrate is the wrap function. The wrap function wraps content around existing content. So let's try this out. I'm going to get a reference to my example div and all the paragraphs in there. And I'm going to call the wrap function. And I'm going to wrap a div with a style of color red around each one. So the parameter to the wrap function is the content that you want to wrap around the result of this jQuery expression. So here we're selecting the paragraph tags inside the example div, and you're probably familiar with this expression by now. So here are the paragraphs. We're going to select all of these paragraphs and then wrap this div around each one of those paragraphs. So let's save this and bring it up in the browser, all right? And I'll click the Run button, and you can see that all the paragraphs turn red, because that's the style on the div. So let's open up the developer tools to see what's going on. So I'm going to open the developer tools up here,
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=93)** and let's expand all the content. So let's refresh the page. And you can see that in my example div, right? I have each of these paragraphs, all right? And what I'm going to do is when I click on the run button, right, you can see that all of the paragraphs got wrapped by this div that I passed in as the parameter. So let's go back to the code. And this time let's use the wrapAll function. It's very similar to what wrap does. So what I'm going to do is make a copy of this line, and I'm going to call wrapAll. And then I'm going to comment this one out. Now the key difference between wrap and wrapAll is that, instead of wrapping each individual result from the jQuery selector, wrapAll will wrap the common parent of all of these elements into the new content. So whereas wrap operated on each paragraph, wrapAll will operate on the entire group as a whole. So let's save and let's refresh this page again. And now let's click Run. You could see that the result is the same, but if we look inside the code, you can see that what happened was all of the paragraphs got wrapped by this one single div instead of each individual one. All right, let's close that. Now let's take a look at how to remove content from a webpage. Let's go ahead and comment that out. So I'm going to first demonstrate the empty function.
>
> **[3:07](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=187)** The empty function basically empties out the contents of an element. So if I get a reference to my example div and call empty on it, I think you can probably guess what's going to happen, right? I'm going to click on Run and sure enough, all the paragraphs go away, 'cause it removes all the child elements. Let's try a few more examples. Let's try remove and detach. So what I'm going to do is get an example and I'm going to get the paragraphs with a class and paragraphs with b class and I'm going to call remove. So the remove function removes elements from the page, including any of the embedded data or event handlers you've attached to those elements. So let's go ahead and save and try this now. And you can see that those paragraphs got removed. Now let's try using the detach function. So I'll just replace this with detach. Let's save and let's try this again. And the result, it looks visually the same, but detach is different, because it maintains any of the embedded data and event handlers. So if you keep a reference to those detached elements, you put them back into the page later, any data
>
> **[4:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=280)** and any event handlers you've attached to those elements will still be there. If you use remove, they won't be there if you put them back into the page later. All right, let's finish up by seeing how to replace content within the page. First, let's use the replaceAll function. And I'm going to create some new [[HTML]]. I'm going to create a div with the string, replaced, inside of it, and I'm going to call replaceAll. And I'm going to replace using a jQuery selector expression. So inside my example div, I'm going to get the paragraphs that have an id attribute on them. So this code will replace all of the elements that match this expression parameter, right, to the replaceAll function with the content that's given to this jQuery function. And in this case, it's going to be the paragraphs that have an id attribute present. And if we look down in the code, we can see that there's three of those. All right, so let's go ahead and save, and let's go back to the browser and let's click Run. And so paragraphs two, four and five should be affected. And in fact they are. There's an equivalent function named replaceWith, but the parameters are reversed. Let's go back and try that. So I'll just make a copy of this line, and this is going to be replaceWith,
>
> **[6:16](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=376)** and I'm just going to reverse these two expressions,
>
> **[6:26](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=386)** and comment that one out. So let's run that, and you can see that the result is the same. What's interesting about replaceWith is that you can specify a callback function. So you don't have to pass in static content. You can actually generate new content on the fly that you want to replace content in the document with. So let's see how that works. So you can see that I've written a function here named replacementFn. And this will be called for every element that matches this expression here. What I'm going to do is operate on all the paragraphs, and I'm going to replace this parameter with the callback function, all right. So all of the paragraphs will be operated on by this callback function, and you can see that what's going to happen is inside this function, the this keyword will refer to the current element that's in the result set from this expression that's being operated on. So the return value of this function should be the HTML content that you want to replace the existing content. So this code uses the text function to see if the substring, 1, exists within the text content of the paragraph. If it does, then the function returns a new paragraph tag with some text content in it. Otherwise it just returns the existing HTML content of the paragraph so that nothing changes. So let's save and let's run.
>
> **[8:04](https://www.linkedin.com/learning/jquery-essential-training-24696205/altering-page-content?u=76281980&t=484)** And when I click Run, you can see that the first paragraph was replaced, but the other paragraphs were left alone. Well, I mean they were changed, but you can't see the difference, because nothing really happens to them. So making changes to the content of webpages is fairly common in most apps. And jQuery makes the process very easy with a very small amount of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **Code Identifiers:** jquery (5), wrapall (5), replaceall (3), replacewith (3), replacementfn (1)
> **Env Vars:** html (3)
> **UI Navigation:** click on (2), open the (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Manipulating attributes](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980&t=0)** - [Instructor] Just as there are functions for manipulating the element and text content of documents, there are also functions for manipulating attributes. So here on the jQuery website, let's click on the documentation link and then let's click on attributes. So there's two functions. Attr, and remove attr, which are used to operate on attributes. The attr function is used to read the value of an attribute. If the attribute's not present, then the result is undefined. When you call it with both an attribute name and a value, an attribute with that value is set on the element. And remove attr does what you'd expect, which is remove the named attribute from an element. So let's try exercising these in some code. All right, let's open up the attributes file. And I'm going to bring this up in the browser so you can see what the document looks like. It's a little bit different than the one we've been working on. It has these four images in it, in the example div instead of paragraph tags. So what I'm going to do is read and change the attributes associated with each one of these images. So let's start by reading the alt text attributes of each image and inserting them into the document. So if we go back to the code and we scroll down, you'll see that here's each of the images. And you can see that there's an alt text on each one of these. So let's scroll back up. All right, so first I'll insert a new paragraph
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980&t=95)** after the example element using the after function, which we learned about earlier in the chapter. And I'm going to make a paragraph and the ID of that paragraph is going to be alts. All right, next I will loop over each element, get the alt attribute value, and insert it into the newly created paragraph. So for each image, I'm going to use a callback function to do this. And I'm going to get a reference to the newly created alts paragraph, which we just created right up here on this line. And I'm going to call append. And inside the append function, I'm going to get a reference to this element, right? So this is going to be, this keyword's going to refer to each one of these images. So I'm going to get a reference to this and I'm going to call attr. And I'm going to pass in the name of the attribute, which is alt, and I'm going to put a space in there. All right, so let's save that. Let's go back to the browser, then let's run it. And when I click run, you can see that here's my new paragraph and I've got grass, leaf, spring, and water in that paragraph.
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980&t=190)** All right, now let's try adding a title attribute to all of the link tags around each image. So once again, we go back to the code. You can see that each one of these images is inside a link. And what I'm going to do is call for each one of those links, I'm going to create an attribute named title. And it's going to be just, you know, photo by some photographer. All right, so this code gets a reference to all the link tags, and we're calling the attr function with two arguments, right? This time we're not getting the value, we're setting the value. So we're setting the title along with a string to set as the value. And let's go ahead and see if we can scroll back down. You'll notice that there's no existing title attribute on any of the images. All right? So let's go ahead and save, and let's go back to the browser and let's click run. And when I do that, now when I hover over each image, you can see that little title is showing up. And if we inspect this using the developer tools, right, you can see that as I expand the tag here. Let's go into the example. You can see that this is the newly added title attribute on each one of these images.
>
> **[4:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980&t=285)** All right, so now let's make each image open in a new tab. So notice in the existing page, if I click on each image, right, it opens in the same tab. What I'd like to have happen is have each image open in its own tab. So let's go ahead and write the code for that. What I'm going to do is on each link, I'm going to add a new attribute. I'm going to set the target attribute to be underscore blank. All right? That tells the browser to open each image in a new tab. So if we go back now to the page and I click, oh, whoops, let me click run first. There we go. Now when I click, you see that there's a new tab that gets opened for each image. All right, finally, let's remove an attribute. Let's go ahead and on each link, let's call remove attr and let's remove the HREF. So we're going to select all the link tags, which again, you can see down here. And we're going to remove the HREF, which takes away the link behavior, right? So then nothing will happen when I click on the images. So let's go ahead and save. And let's close these tabs. All right, let's click run. And now you'll notice that when I click on each image,
>
> **[6:18](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980&t=378)** nothing is happening because there's no link definition. And all right, let's do one more example. All right, what we're going to do now is modify multiple attributes at the same time. So let's scroll up. And what we're going to do is operate on all the images, and I'm going to call the attr function. And in this case, I'm going to call the attr function with an object. And this object is going to be a key value pair of all the attributes I want to operate on. So I'm going to change the source attribute into images/spring.jpg,
>
> **[7:03](https://www.linkedin.com/learning/jquery-essential-training-24696205/manipulating-attributes?u=76281980&t=423)** and we'll also change the title to be spring all the things. All right? And let's go ahead and let's comment out these previous examples. All right, so let's save. So in the previous examples, I've been using individual strings that identify the attribute I want to affect. In this case, I'm going to use this [[JavaScript]] object that contains multiple attributes. So when this code runs, I'm going to get a reference to all the images. I'm going to change all of their sources to point to the same image, and then change the title attribute of all the images to spring all the things. So let's go ahead and save this, and let's go back to the browser. All right, so let's click run. And you can see that when I click run, all of the images are now pointing to the spring image and the title is spring all the things on each one. And again, let's go ahead and inspect this using the developer tools. And you can see that inside, right, that I've actually changed all of the source attributes to the spring, and the title has been spring all the things on each image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **UI Navigation:** click on (5), scroll down (1), scroll up (1)
> **Cross-References:** go back to (5), earlier in (1)
> **CLI Commands:** make (2)
> **Env Vars:** href (2)
> **Code Identifiers:** jquery (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Working with CSS](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-css?u=76281980&t=0)** - [Instructor] Trying to build a modern web application without CSS is a lot like trying to build a sandwich without bread. Ultimately, it's not going to work and the result is going to be pretty messy. So jQuery provides a variety of css functions that smooth out the CSS workflow for working across browsers and for accomplishing things that would normally require you to write a bunch of custom code. So we'll start with the css function. Up until now, you've been seeing me use the css function to set CSS properties to make the results of things like selector and filter examples visible in the page. The css function has a couple of different ways you can call it, depending on whether you want to retrieve CSS values or set style properties. To retrieve a CSS value, you simply give the function a property name, which will return the value for that property on a given element. To set a style property value, you call the css function with a property name and a value, in which case that will set the value for that property on the element or the matched set of elements. A third way is to call it with a callback function. So when you invoke css with a callback function, you set the value for the property on the matched set of elements to whatever the result of the callback is. And this is pretty useful, because you can calculate CSS property values on the fly as you're setting them. And finally, you can give the css function a [[JavaScript]] object that contains a bunch of name value pairs
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-css?u=76281980&t=96)** that indicate the properties and values that you want to set them to. In addition to the basic css function, there's a few others you should know about. There's the hasClass function, which determines whether an element has the given class name applied. There's also addClass and removeClass, which as you might expect, adds the CSS class or removes the CSS class from the matched set of elements. In fact, you can pass in multiple class names and it will either add or remove those classes from the elements. And there's also the toggleClass method, which will toggle the presence of the given CSS classes on the matched set. All right, let's jump over to the code and see how all of this works. Right, let's open up the CSS file here. So let's take a look at this in the browser. All right, so I have my example div with the paragraphs and some buttons I'm going to use to exercise the various functions. So for the first example, let's try using the css function to set a single property. All right, and what I'll do is I will call on my example paragraphs, and I'm going to set the text decoration to overline. So this code is pretty simple, it just adds the overline property to each of the paragraphs in the example div. So let's go ahead and run that.
>
> **[3:11](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-css?u=76281980&t=191)** So when I click on Set Property, sure enough you can see that that's what happens. So let's add another line to set another property. This time increasing the font size by one point each time. So I'm going to call .css again, and I'm going to set font-size to plus equals one point. And here I'm using the plus equals notation to set the value of the property to whatever it is, plus one point. So let's save. And now let's go back to the browser. And now when I click on Set Property, you can see that each time I click on it, right, the font size is growing by one point each time. Okay, let's try out the addClass, removeClass and toggleClass properties. So I'll put the code for each of those in their respective event handlers. So this is going to be my example paragraphs, and this is going to be the addClass version. And I'm going to add the paragraph class. And I've defined the paragraph class right here. So I'm going to add this class on. All right, and I'll copy that. And for the remove button, I will remove the class. And for the toggle example, I will toggle the class.
>
> **[4:49](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-css?u=76281980&t=289)** All right, so for each of these cases, I'm going to use this class right here. This class definition just changes the text color to green. And it has a text-transform of uppercase. So it will convert lowercase letters to uppercase. So let's save and back to the browser. All right, let's go ahead and try add class. All right, so we have green uppercase text as we would expect, let's remove the class. All right, that effect goes away. And then when we toggle the class, you can see that it just toggles on and off each time I click the button. All right, so far so good. Now let's try setting several properties at once. jQuery makes this possible by calling the css function with an object that contains key value pairs that represent CSS properties and values. All right, so let's go back to the event handler for set props. And on my example paragraphs, I'm going to call .css, and I'm going to use an object. So for the properties, let's just choose a nice variety. I'll do font-weight to bold, and we'll do color to red, and we'll do text-decoration to underline.
>
> **[6:30](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-css?u=76281980&t=390)** All right, so let's save that. Let's go back and try that. So when I call set properties, you can see that we're setting multiple properties all at once. So you can see that jQuery's CSS related functions make working with style information on elements a whole lot easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Env Vars:** css (12)
> **Code Identifiers:** jquery (3), addclass (3), removeclass (2), toggleclass (2), hasclass (1)
> **UI Navigation:** toggle (4), click on (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Embedding custom data](https://www.linkedin.com/learning/jquery-essential-training-24696205/embedding-custom-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/embedding-custom-data?u=76281980&t=0)** - [Instructor] [[HTML]] provides a way of associating arbitrary data with elements on the page using a feature called data attributes. If you're not familiar with data attributes, take a look at this article here on the Mozilla Developer network, which explains what they are and how to use them. Essentially, these attributes provide a way to associate bits of data with elements on a webpage. jQuery provides a way of working with these data attributes through a series of convenience helper functions. And there are all kinds of scenarios where you might want to associate some arbitrary data with an element on the page. So for example, a restaurant's menu page might have price data associated with items listed on the page. So let's click on the API documentation on the jQuery website. So let's go to jQuery and click on the API docs. And we'll click on Data. So the data method, which you see right here, is used to store and retrieve data on an element via data attributes. And there's two different ways you can call the function. The first is to either supply a key-value pair, in which case the key is the name of the attribute that will hold the data and the value is the data itself. Or you could pass in a [[JavaScript]] object which contains multiple keys and multiple values to store all at once. To retrieve the data, you simply call the data function with the name of the key or with no parameters at all,
>
> **[1:32](https://www.linkedin.com/learning/jquery-essential-training-24696205/embedding-custom-data?u=76281980&t=92)** in which case it will return a JavaScript object containing all of the data that's currently on the element. So let's try this in some example code. Let's go ahead and open up our Data file here. All right, so let's take a quick look at the page. So down here in my <div> example, I have a data attribute named data-key3, and I have a few buttons that will store, show and remove data attributes when clicked. So I've got some event handlers for those buttons up here. Let's start by filling out the #show data event handler. So I'm just going to call alert, and I'm going to stringify the [[JSON]] data that's on there. So I'm going to get a reference to my #example <div> and I'm going to call the data function with no parameters. And then I'm just going to fill out the [[Representational State Transfer (REST)|rest]] of my JSON stringify parameters. All right, so this code calls the data function with no arguments to get all of the data attributes on the #example <div>. Right now there's only one. And then it calls the JSON stringify function to make it readable, and we'll display this in an alert. So let's save and let's go ahead
>
> **[3:04](https://www.linkedin.com/learning/jquery-essential-training-24696205/embedding-custom-data?u=76281980&t=184)** and bring this up in the browser with our Live Server. And I'm going to click the Show data button and sure enough we can see that there is the key3. And notice that it's displaying just key3. It doesn't have the little data- string because that's just there for the browser to use. The name of the key itself is whatever follows the dash. So the key is key3 and the value is the string data attribute, so so far so good. Let's go back to the code and just to make sure you can see that that's actually what the data is, right? So now let's try storing some data. So for the #store handler, I'll get a reference to my <div> and I'll call the data function. And I'll store, for key1, I'll just store a number and I'll do the same thing. Call data again, and I'll call this one key2. And I'll just use my name. All right, you could choose, by the way, whatever key makes sense for your application. I'm just calling these key1 and key2, but it can be anything you want. So let's go ahead and save and let's go back to the browser. All right, so now I'm going to click on Store data. And now when I click on Show, you can see that key1, key2 are now there in addition to the existing key3. All right, so it looks like we've got the ability to display
>
> **[4:42](https://www.linkedin.com/learning/jquery-essential-training-24696205/embedding-custom-data?u=76281980&t=282)** and store data. Now let's add some code to remove data attributes. So when the remove function gets called, I'm going to, on my #example <div>, I'm going to call removeData. All right, let's save. Let's go back to the browser. Okay, so let's refresh. Okay, let's show what's already there. So there's key3, that's the original. Now let's click Store data and click Show again. All right, so now we've got key3, and key1 and key2 got added, right? So that's still working. All right, now let's click Remove data and let's click Show again. And now there's nothing. So not only did the data that was dynamically stored get removed, but the original data attribute that I had in the markup also got removed. When called with no arguments, the removeData function removes everything. So let's edit the code to be more specific. Let's go back to the code. And instead of removing everything, let's just remove key2. And again, I don't have to type in the data- part of the name. That's going to be handled for me automatically by jQuery. So back to the browser. All right, let's Show data, OK. Let's Store and Show. Okay, now let's click Remove and Show.
>
> **[6:16](https://www.linkedin.com/learning/jquery-essential-training-24696205/embedding-custom-data?u=76281980&t=376)** And only key2 got removed this time. So if you find yourself in a situation where you need to associate data with elements on the page, the jQuery data methods make accessing and storing and removing the data really easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[JavaScript]] (2), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** jquery (5), removedata (2)
> **Env Vars:** json (3), api (2), html (1)
> **UI Navigation:** click on (5), go to (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** go back to (4)
> **Best Practices:** the key is (2)
> **Analogies:** for example (1)

#### [Challenge: Dynamic element visibility](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-dynamic-element-visibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-dynamic-element-visibility?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-dynamic-element-visibility?u=76281980&t=5)** - [Instructor] It's time for another programming challenge. In this challenge, we will take what you've learned about jQuery so far in the course and apply it once again to the HPlusSport site that we've been working on. So, let's go ahead and open up the HPlusSport site. I'm going to open up the index page and we're going to scroll down to the [[Microsoft Products|products]] section, which is right here. All right, so, notice that the products section lists various vitamins, right? Mineral waters, right, protein bars. What we're going to do in this challenge is use jQuery to let the user show and hide different categories of products. So, you can see that there's some check boxes right here, and what we're going to do is hook up those check boxes to dynamically show and hide different kinds of products. So, let me go to the finished version and show you what I mean. I'm going to open this up in the browser, and if I scroll down to the productS section, okay, you can see that here are the check boxes, right? And as I check or uncheck each box, you can see that those products are being shown or hidden, right? So, this is what you're going to implement in the challenge, and I'm going to give you a little hint here that if we go back to the code, I'll give you a little hint
>
> **[1:41](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-dynamic-element-visibility?u=76281980&t=101)** that the data attribute right here is what you're going to need to use in your code to accomplish this challenge. So, take a little time to try out the challenge and then I'll be back in the next video to discuss my solution and how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6)
> **Code Identifiers:** jquery (2), products (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Cross-References:** go back to (1), in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Dynamic element visibility](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-dynamic-element-visibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-dynamic-element-visibility?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-dynamic-element-visibility?u=76281980&t=5)** - [Instructor] All right. So for this challenge, we needed to write some jQuery code to let the user show and hide different product categories. And just as a reminder, we'll scroll down. You should be seeing some behavior where if you check, and uncheck these check boxes, [[Microsoft Products|products]] should be showing and hiding. So let's take a look at my solution. And again, remember, it's okay if your solution is different from mine. So let's go to the code, and let's scroll past my code for a second. So remember down here in the products section, each one of these H2 tags that represents the product has a data type attribute that indicates the type of product that it is. It's either a vitamin or a mineral water or a protein bar. So let's take a look at my script. So my code starts by adding event listeners to each of the check boxes to listen for the change event. This event is fired whenever the checked status of the checkbox changes. The event handler function then calls a function I've written called update product view. And that takes two arguments, the type of product and the checked state of the checkbox. So in order to change the visibility of the parent list item tag that contains each product, I have to write a jQuery selector that will find all of those list item tags, but will narrow the scope only to those list item tags that have an H2 with a particular value
>
> **[1:41](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-dynamic-element-visibility?u=76281980&t=101)** in the data type attribute. So based on the value of the product type, my code then defines a string variable called data selector Val, and that's going to contain a selector that selects H2 tags that have a data type attribute that matches the given product type. So then I write a selector to select all of the elements that have the CSS class of product item, which if we scroll down, that will give me all of these list item tags, right. Because they all have the product item class on them, and that's what I want to show or hide based upon what the user is checking. So when I get all of those product item tags, I'm going to use the has function to narrow the selection down. So this function will take the results set from the first selector and narrow it down using the H2 selector I've defined for that variable. And then once I've narrowed the list down, my code uses the CSS function to change the value of the display property to either none in the case where I want to hide the product or the empty string, in which case I want it to be shown. So you can see that I was able to implement a pretty useful feature in the webpage using a relatively small amount of script using jQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **UI Navigation:** scroll down (2), checkbox (2), go to (1)
> **Code Identifiers:** jquery (3)
> **Env Vars:** css (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)


### 5. Event Handling

[↑ Back to Table of Contents](#table-of-contents)

#### [jQuery event handling features](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-event-handling-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-event-handling-features?u=76281980&t=0)** - Building any kind of modern web application today means you have to handle all kinds of user generated events. Now today, the major modern browsers have standardized around the new event APIs, but using them is still more work than it needs to be. jQuery provides a mechanism for working with events, that's simpler than relying on the [[Document Object Model (DOM)|document object model]], and the WC3 APIs. And because jQuery works with sets of elements by default, it's very easy to write code that assigns event handlers to groups of objects just by using the results of the selectors and filters that we've already learned about. So here, in the API docs for jQuery, let's scroll down and click on the events link. So this is where you can learn more about all of the various event features that are supported by jQuery. You'll probably notice that many of these are now deprecated, so we won't be covering those. In the [[Representational State Transfer (REST)|rest]] of this chapter, we'll see how to use jQuery to listen to events that happen within a webpage, and then dynamically turn them on and off as you need them. And then we'll see how to use jQuery's Unified event structure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Document Object Model (DOM)|Document object model]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** jquery (6)
> **Env Vars:** wc3 (1), api (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Speakers:** - building (1)

#### [Binding and unbinding events](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=0)** - [Instructor] Let's start with the basics and see how to use jQuery to wire up event handlers on the page. So here in the jQuery docs, let's click on the API documentation and we'll scroll down to events and we'll click on the event handler attachment link. So there are three main functions that you use to work with event handlers. There's on, off, and then one. The on function is used to attach an event handler, off is used to detach an event, and one is used to listen for a one time event. The other methods you can see have been deprecated, so I won't cover those, but you might find them in some older code. So let's jump over to the code and see how these functions work. Let's open up the Binding file. All right, so let's first make use of the on function, which is used to attach event listeners. And in this case, we'll attach a click handler on the div element, which we have down here. So this is my event target right here. So we're going to attach events to that div. So this code is going to listen for mouse enter and mouse leave events and I can listen to multiple events with just one function call. So I'll write a selector that gets that element, and then on, I'm going to specify mouseover and then a space and then mouseleave.
>
> **[1:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=100)** And when that happens, I'm going to call a function named highlight. And you can see down here, I already have the highlight function written. And highlight basically just toggles the presence of the highlighted class on the div element. So that's all we're going to do is highlight the element when the mouse rolls over and rolls off. And if we jump back to the documentation for one second, and we click back on the on handler, you'll see that there's a couple of different ways to call this function. I'm specifically going to use the first version right here. So I specify the events that I want to attach the event handler to. I can use just one event or I can use a space separated string with different event names. And then I have an optional selector and data and we'll cover those a bit later. And then I specify a handler function. So the event handler function is whats called when the event happens. So my highlight function is simply toggling a CSS class named highlighted on and off the event target. All right, so let's go ahead and save this and let's run it. All right, and you can see that when I move the mouse over the div and off of it, right, the highlight effect is applied and then taken off. So, so far so good. All right, let's try another example. I'm going to add an event handler that handles the click event. So same event target, and on a click message,
>
> **[3:19](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=199)** and I'm just going to write an inline event handler function here. I'm going to do three things. I'm going to remove the highlight event handler for the mouse over and mouse leave function by using the off function. So I'm going to, on the event target, use off
>
> **[3:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=220)** to turn off mouse over and mouse leave, which I enabled above, and I have to turn off that specific function. Next, I'm going to replace the [[HTML]] inside the event target with some text indicating that I shut the event off. And I'll use the HTML function for that which we learned about earlier.
>
> **[4:12](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=252)** And then lastly, I am going to remove the highlighted class if it's already applied. So I'll write removeClass and I'm going to remove the highlighted class. All right, so let's go ahead and save and now let's run this again. Right, so you can see that the highlighting effect is working and then when I click, right, you can see that the hover effect is now shut off and the highlight gets removed. All right, let's do one more example using the one function. Let's write an event handler that executes only one time. So I have a button down here labeled btnOneTime, it's a one time button, and I'm going to get a reference to that. And I'm going to use the one function to listen for the button click. And when that happens, we are going to disable the button so it can't be clicked again. So on this element, I'm going to set the disabled property to true, and I'm also going to set the text of the button to be clicked. So in this case,
>
> **[5:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=345)** my event handler disables the button once it's been clicked and changes the text to clicked. So you can use a function like this when you want to make sure that a particular event is only handled one time. All right, so let's go ahead and try that. And sure enough, you can see that when I click the button, it gets disabled and the text changes. Okay, let's try handling some keyboard events. So you can see that I have a text entry input here in the doc. So let's go ahead and get a reference to that. And that is going to be the text entry field. And I'm going to listen for key press events.
>
> **[6:38](https://www.linkedin.com/learning/jquery-essential-training-24696205/binding-and-unbinding-events?u=76281980&t=398)** And inside my key press function event handler, I'm going to get a reference to the key press input and put some text in there. And what I'm going to do is convert the character code from the event into a string. So I'm going to use the string class and use fromCharCode and then use the charCode property that's on the event object, plus. And I'm going to actually put the code in itself, + evt. charCode. All right, so let's go ahead and save, and we'll refresh. And I'm going to go ahead and type in this field. And you can see that as I type each character, right, you can see the letter that I'm typing along with the character code of each character. Now of course, you can accomplish all of what I've shown you here using standard browser DOM functions, and in fact, jQuery just uses those under the hood. Personally, I think that using the jQuery event functions is easier to read and frankly is a more concise way than using the standard DOM API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Code Identifiers:** jquery (4), charcode (2), removeclass (1), btnonetime (1), fromcharcode (1)
> **Env Vars:** api (2), html (2), dom (2), css (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using the jQuery event object](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=0)** - [Instructor] In this example, we're going to take a look at the jQuery unified event object. So even though all modern browsers now implement the W3C standard event API, there are still some subtle differences between how browsers pass event information to their event handlers. jQuery provides a normalized event object that ensures cross-browser consistency when you're handling event information, and it also provides some additional information that the standard DOM event does not. So here on the jQuery website, I am in the API documentation for the event object, and you can find that if you scroll down the page right here in events, you can click on Event Object. So, jQuery makes sure that a certain list of properties is consistent across browsers. There's the target property, which is where the event originated from, the related target, which in some cases, is another element on the page that may have also been involved in the event, and I'll get to that in a little bit. There's also the X and Y coordinates on the page where the mouse was when the event occurred, although these may not always be filled in, it depends on the event. There's the which property, which is also event specific. In the event of a key press, it will tell you which key was typed, and it also has some other uses. And then there's the metaKey property. It's a Boolean property that you can use to see if the metaKey was held down.
>
> **[1:34](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=94)** So on the Mac, that's the command key, on [[Windows]], it's the Windows key, and so on. And then finally, if you really need to get access to the platform native event object, you can look here in the event.originalEvent object, and that will give you all of the native event properties. So let's go ahead and open up our exercise example to see it in action, and I'll explain it as we go along. All right, so let's go ahead and open up the Event Object file. Now, before I make any changes at all, let me just bring this up on the browser so we can see what it does. Here we go. Okay, so you can see that I've got a few div elements in the page, and there's a text field here, and then down here, there's a section called Event Details. So what we're going to do is fill in these various properties with the event object properties that get passed in response to each individual event that gets triggered on these page elements. So let's go back to the code. So at the top of the exercise document, you can see that I've already attached a variety of event handlers to these page elements. So for each of the div elements, I've specified event handlers for click and double click and mouse enter and mouse leave and mouse move. There's also an event handler for the text input to demonstrate keyboard events.
>
> **[3:09](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=189)** So remember earlier in our discussion about the on function, you can pass an individual data object as an argument, which will be passed to the event handler. In each of these first three cases, I'm supplying an object that just contains a name property, which represents the name of the div element, and we'll see why I'm doing this shortly. In each of the callback functions, the code calls a function named updateEventDetails, which we will be filling out. Each callback also calls the stop propagation method on the event, because I'm handling the event right here, and I don't need the event to go bubbling up through the [[Representational State Transfer (REST)|rest]] of the document and triggering all the browser's default event handlers. So let's scroll down to the update events details function, and we are going to take the values from the event object and display them in our UI. So first, we need to clear the contents of the text fields each time a new events details are updated to prevent stale data from being displayed, so let's do that first. And so I'm going to write a jQuery selector, and you can see that down here in the page that inside the event details, I have a class. Each one of these divs has a class called "detailLine", and then there are spans inside them, each with a class of "lineitem." So what I'm going to do is just write a selector
>
> **[4:44](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=284)** that looks for elements with the detail line class, and then all the spans, each of which have an ID, 'cause those are going to be the ones holding the data. I'm going to call text on those with an empty string. All right, so this selector affects all the span elements that have ID attributes that are contained with all my detailed line divs. All right, and again, another really great example of how a simple jQuery statement can replace a lot of repetitive plain [[JavaScript]] code. The update details function will take the information from the event object parameter that it's passed and will fill out each one of those individual fields, which are down here in the [[HTML]]. So if we scroll down and we take a look, each one of these spans is where we're going to be placing the data for each item in the event property object. So let's scroll back up. All right, so we're going to display information, such as event type, which button was pressed, mouse coordinates, and so on. So let's add the code to display each of these properties. So we're going to get the event type, and we'll use the text function for the evt.type.
>
> **[6:17](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=377)** And I'll just copy and paste these, so then we'll have event which, which will be the which property. And then we'll have event target, which will be the target ID, and then we'll check to see if the event has a related target. If that value is not null, then we'll set the related field to be the events related target tag name.
>
> **[7:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=425)** Plus, we'll put the ID in there as well. E-V-T dot, oops, plus event related target ID.
>
> **[7:19](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=439)** All right, let's keep going. We'll do each of the, oops. Oh, I have to enclose that in braces. There we go. We'll also do the pageX and pageY.
>
> **[7:49](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=469)** And then of course, will be pageX and pageY.
>
> **[7:57](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=477)** And we'll also do the client mouse coordinates, so that's going to be clientX and clientY.
>
> **[8:16](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=496)** All right, just a couple more. We'll check to see what the metaKey is.
>
> **[8:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=516)** And then finally, we'll check to see if the event has any data. And if it does, we'll set the event data container to be the text that has the event data and the name property. Okay, so remember back up here when I was passing in these objects with the name, that's what's going to be passed into that event handler, so if what object is present, we'll see the name. So not every event's going to have that, so I need to check for its presence. All right, looks like our code is basically complete, so let's go ahead and try it out. I'm going to save this, and let's go back to the browser. All right, and so now you can see that as I'm moving the mouse over various elements, you can see that the mouse coordinates are updating, and you can see that the client and page and client mouse values are updating. And if I click, you can see that there's a click event, and the number one means which button it was. That's the left button. You can also see that if I very carefully move the mouse from Div1 onto the page, that the related target lights up. So the mouse left, the Div1 element,
>
> **[10:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-the-jquery-event-object?u=76281980&t=610)** which you can see there in the target, and the related target is the main div that contains all three of those divs, that's the related target. That's the target that the mouse was moving to. That's kind of like a nice little convenience that you can use to see when you're handling mouse events. All right, so let's see. Let's also take a look at some of the key events. So you can see that as I type keys in the text field, we're getting information about the key press event. Notice that there's no mouse coordinates for this. And what I'm going to do is hold down probably not the control key, but let's see what else. If I hold down, say start and I hit... It's going to be hard for me to find a metaKey that doesn't cause some windows function, but in any case, you can try that as an exercise on your own. But you can see that the amount of event information is pretty rich that's available to you from the jQuery event object. So, I encourage you to play around with this, try out different events, try modifying the document to add your own elements and listen for different events, and just see what the event object looks like in each case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[JavaScript]] (1), [[HTML]] (1)
> **Code Identifiers:** jquery (7), metakey (4), pagex (2), pagey (2), originalevent (1)
> **Env Vars:** api (2), w3c (1), dom (1), html (1)
> **UI Navigation:** scroll down (3), click on (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2), earlier in (1)
> **Analogies:** such as (1), kind of like (1)
> **Documentation:** w3c (1)

#### [Challenge: Use jQuery events](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-use-jquery-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-use-jquery-events?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-use-jquery-events?u=76281980&t=5)** - [Lecturer] In this challenge, we're going to give the user the ability to click on a product in the product list, and have a new page open that displays the product information. So let's take a look at the start version of the H Plus sports site, and I'm going to scroll down to the product section. And notice that as I'm clicking on each of these [[Microsoft Products|products]], nothing happens, so we're going to change that. Let me open up the finished version of the site to show you the difference. So I'm going to open this in the server and scroll down to products. So now when I click on a product, you can see that the products page opens, and you can see that the name of the product is displayed here in the page. The [[Representational State Transfer (REST)|rest]] of these fields are currently blank and that's because we'll fill those out when we get to the challenge for the [[AJAX]] chapter, so don't worry about those for now. If you look closely at the URL field here in the browser, you can see that the URL contains two query string parameters. The first is the name of the product, and it has the prod name query string parameter. The second is the product ID, and that has the prod ID parameter. All right, so let's go back to the [[HTML]] for the start version. All right, so down in the product section, notice that each list item tag has a data attribute
>
> **[1:41](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-use-jquery-events?u=76281980&t=101)** that contains the product ID, so you'll probably need to use that. And for the name of the product, I'll give you a hint, it looks like the H2 tag inside each list item contains the product name. So go ahead and take some time to try to work out this challenge, and I'll be back to discuss my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[AJAX]] (1), [[HTML]] (1)
> **UI Navigation:** click on (2), scroll down (2)
> **Env Vars:** url (2), html (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Use jQuery events](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-use-jquery-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-use-jquery-events?u=76281980&t=0)** - [Instructor] Alright, this was a little bit of a tricky one. So let's take a look at my solution. So for my solution, I used the wrap function to create a new link tag around each of the images in the product section. So let's walk through the code and I'll explain how I did this. So first, remember that part of the challenge was that we needed to pass two query string parameters to the product [[HTML]] page. The first was the product name and the second was the product ID. So my code starts by using a selector expression to get all of the list item tags that contain each product. And then I loop over each one of these list item tags. I then use the children function to get the H2 tag that's inside the list item, and then I call the text function on that H2 to get the product name. So since this string is going to be passed as part of URL, I need to call the browsers and code URI component function to convert any characters that aren't allowed to appear in URLs. For the product ID, it's a little bit easier. I just need to get the value of the data attribute that is on the list item tag itself. And then again, I need to make sure that it is encoded properly. So that's how I got the product name and product ID, and we learned about these functions earlier in the course.
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-use-jquery-events?u=76281980&t=95)** Next, I create new link tags that link to the product page and just includes those two parameters in the URL, I'm building the URL that goes to the product page. And you can see that I'm just inserting each one of those query string parameters into the URL. And then I use the J Query wrap function to wrap my new link around the image so that when the user clicks on the image, the browser opens the product page. So inside the product page code, I have to parse out the product name and product ID from the URL. Well, for this challenge, it's just the product name. We'll do the product ID later in the course, but you can see that what I'm doing is I'm using the browser standard URLSearchParams function to pass in the value of the window.location.search. So this gets set to all the query parameters that are in the URL, which just gives me a simple UI and API that I can use to extract that data. I can just use the get function on the URLSearchPerams object to ask for the product name and the product ID. In this case, I'm only using the product name, so once I have the product name, I use J Query to get a reference to the product name field, which is down here, right here. It's this paragraph and this span contains the product name, and I just set the text content of that span to be the product name.
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-use-jquery-events?u=76281980&t=190)** All of that took less than, what, a dozen lines of J Query code, demonstrating once again, you can accomplish some great features with a very small amount of script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** url (6), html (1), uri (1), api (1)
> **Cross-References:** earlier in (1), later in (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Effects and Animations

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to jQuery animations](https://www.linkedin.com/learning/jquery-essential-training-24696205/introduction-to-jquery-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/introduction-to-jquery-animations?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about the animation features of jQuery. Before CSS animations became standard, building animation in a web app was often a very tedious problem to solve, and jQuery was one of the first [[JavaScript]] libraries to offer a set of versatile animation features that developers could use with just a couple lines of script. These features are still supported in the library today, though you are more likely to find them in legacy jQuery code. And for new applications, it's almost always better to use the CSS approach because it's native to the browser and doesn't have the same performance issues that single-threaded JavaScript will have. But there will be times when you need to work in an existing jQuery code base, so it's worth learning about how these animation functions are used. We are going to cover four different areas of the jQuery animation feature set. Showing and hiding elements, sliding effects, fading effects, and general property animation. As we go through the chapter, make sure to keep a browser tab open to the jQuery documentation for animation effects, which you can find at this link and refer to it as you need throughout the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Code Identifiers:** jquery (6)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** css (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Hiding and showing elements](https://www.linkedin.com/learning/jquery-essential-training-24696205/hiding-and-showing-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/hiding-and-showing-elements?u=76281980&t=0)** - [Instructor] Let's start by taking a look at one of the most basic jQuery element effects, which is the showing and hiding of elements. So let's open up the ShowHide file. So here in my document ready function, I've written some placeholder functions that I'm going to fill in as we go through the example. And these event handlers are triggered by the buttons down here in the page that will perform different showing and hiding functions. And then this is the div that our code is going to operate on in the page. So the first two examples are going to demonstrate the show and hide functions. So let's go fill those in. So in this case, when the show button is clicked, I will get a reference to the div and call show on it and I'll just copy and paste that and I'll call the hide function when the hide button gets clicked. All right, so let's just go ahead and run that in the browser. All right, when I click the Hide and Show buttons, you can see that the element is shown and hidden without any kind of animation, right? And when it's hidden, it's removed from the browser's layout calculation because the display property is set to None. So let's go back to the code. All right, so now let's try
>
> **[1:32](https://www.linkedin.com/learning/jquery-essential-training-24696205/hiding-and-showing-elements?u=76281980&t=92)** the function calls with some parameters. In this case, let's call the show function with a string of fast. And that's the duration I want the effect to last for. And I could pass in either a string like fast, which equates to about 200 or so milliseconds, or slow, which corresponds to maybe about 800 milliseconds. Or I could pass in a numerical value, which I'll do for the hide function. I'll pass in 1,000 milliseconds, which is one second. And I can also specify an easing type. There are two built-in easing functions in jQuery. There's swing and there's linear. Swing gives it a little bit more of a natural feel, and linear is more of a straight line, which I'll show in a moment. For now, I'll just use the swing value. All right, so let's say, let's go back to the browser now and let's try it again. So Now, when I click on the Hide button, right, you could see that the element animates out of view, and when I click on Show, it comes back in rather quickly. So let's go back and change that swing value to linear. All right, and let's try the code again. All right, and so now, when I hide and when I show, you can see that the feel is a little bit more linear than it is on the swing. All right, now let's try wiring up the Toggle button. So in the Toggle event handler,
>
> **[3:08](https://www.linkedin.com/learning/jquery-essential-training-24696205/hiding-and-showing-elements?u=76281980&t=188)** I'll get a reference to the div and call toggle with a value of slow. All right, the toggle function does what you'd expect. If the element is hidden, then it's shown, and if it's shown, then it's hidden. And for all of these functions, you can also pass in a completion function. So let's go ahead and try that. And then I'll write a function here called completion. And when that runs, I'll just simply set the text inside the element to Animation Complete. All right, the default is swing, so I'm going to just leave that as it is. So when the animation completes, the completion function will be called, and inside the completion function, the value of this keyword will be whatever DOM element or elements are being animated. So I pass that DOM element inside the query function, which wraps all that jQuery goodness around the element, and gives me access to all the jQuery features, which, of course, one of those is the text function, which we've already learned about. So when the completion function gets triggered, I'm going to set the text content of the div to be Animation Complete. So let's go ahead and save this and let's run it again. All right, so now we have our Hide, which works. We have Show which works.
>
> **[4:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/hiding-and-showing-elements?u=76281980&t=280)** Let's hide it, and then let's toggle. And you can see that when the animation completes, the string gets set. And that's just a quick introduction to showing and hiding elements.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (5), click on (2)
> **Code Identifiers:** jquery (4)
> **Env Vars:** dom (2)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Fading elements](https://www.linkedin.com/learning/jquery-essential-training-24696205/fading-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/fading-elements?u=76281980&t=0)** - [Instructor] Alright, next, let's take a look at the element fading functions. So, let's open up "FadeEffect" and let's just go ahead and bring this up in the browser. So, this is the document we're going to be working with. I've got my example div that I'll be animating, along with some buttons that will be triggering certain kinds of effects. So, let's jump back to the code. Alright, let's begin by trying out the fade in and fade out functions. So, for fade in, I'll just get a reference to my div and call "fadeIn". And then I'll do the same thing for "fadeOut". Alright, fade in and fade out do essentially what you'd expect them to do. So let's go ahead and jump over to the browser and let's click on "Fade Out". And you can see the element fades out and the element fades in when I click on "Fade In". Alright, let's go back to the code and let's put in some parameters for these functions. So for fade in, I'm going to give it a numerical value in milliseconds that I want it to be for the duration. So, I'll give it 200 milliseconds for fading in, and let's do 600 milliseconds for fading out. So let's save and let's see how that changes things. So, for fading out, you can see that's a little bit slower, and now fading in is very quick. Alright, now let's try the "fade to" example.
>
> **[1:37](https://www.linkedin.com/learning/jquery-essential-training-24696205/fading-elements?u=76281980&t=97)** Alright, so... For fade to 30%, let's call the "fadeTo" function and we'll give that a slow duration, and we'll give it an opacity of 0.3, so for 30% opacity. And then for fade up, we'll give it 1.0 for 100%. So, whereas fade in and fade out will fade the element all the way up to 100% and all the way down to zero, the fade to function lets you specify the opacity level that you want to fade the element to. And again, you can pass in durations here, you can use slow or fast or numerical milliseconds. In this case, I'm going to fade the element to 30% and to 100% opacity in response to the "Fade To" buttons being clicked. So, let's go ahead and try this out. So, when I fade to 30%, you can see it fades almost all the way out, but not quite. And then fade to 100% brings it back up. Alright, so I'm triggering these effects by clicking on buttons, obviously, but you can imagine that these effects can trigger however you want in response to a mouse over or anything else like that, programmatically. Alright, let's try something else. I'm going to use the fade to function to create a pulse effect. Alright, so here for the pulse function,
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/fading-elements?u=76281980&t=190)** what I'm going to do is get the div and then I'm going to call a whole bunch of fade to functions. So, I'll make this work fast and I'll fade down to 0.3 and then back up to 100.
>
> **[3:38](https://www.linkedin.com/learning/jquery-essential-training-24696205/fading-elements?u=76281980&t=218)** And then I'll just do the same thing all over again, so I'll just copy and paste this a couple times. So, 0.3 and then back to 100. Alright, so here I'm using jQuery's statement chaining to achieve this, when the button is clicked, it's going to fade the element down to 30 and then back up to a hundred and so on. And these four animations will take place one after the other because of the statement chaining. So, let's save this, and let's go ahead back to the browser and click on "Pulsate". And you can see that when I click on "Pulsate", right, it fades down and up each time. Alright, one more thing I want to show is that you can specify completion functions like you would for other animations. Alright, so let's go ahead and put a completion function on here. Let's do "onComplete". And you can see I've already got the "onComplete" function defined down here. So, let's go ahead and save and let's bring it back up. Alright, so let's fade to 30 and fade to a hundred. And you can see that after the fade up is complete, we have the little on complete function that runs.

> [!info]- Semantic Content
>
> **Code Identifiers:** oncomplete (2), fadein (1), fadeout (1), fadeto (1), jquery (1)
> **Versions:** 0.3 (3), 1.0 (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Sliding elements](https://www.linkedin.com/learning/jquery-essential-training-24696205/sliding-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/sliding-elements?u=76281980&t=0)** - [Instructor] This example, we'll take a look at the jQuery element sliding functions. And these functions are somewhat misnamed. They give you this perception, they slide the elements around on the page, which is not really what happens, it's just another take on showing and hiding elements. So let's take a look at how they work. Let's open up the sliding file in the editor and let's look at it in the browser. And this should look familiar by now. I've got my div I'm going to operate on with some buttons that trigger the effects. So let's go back to the code and start trying some of these out. So for the slide up function, I'll get a reference to the div and call slide up and we'll make that fast. And same thing with slide down.
>
> **[0:58](https://www.linkedin.com/learning/jquery-essential-training-24696205/sliding-elements?u=76281980&t=58)** And of course you can specify an easing function. So I'll make this one linear. Okay, let's go ahead and save and try this out in the browser. So now when I click on slide up, you can see that what's happening is the element's not really sliding anywhere. It's the bottom, just kind of like collapses up and down. So it's a little bit showing and hiding just in a different way. And like the other functions we've seen so far, we can control the speed of the animation with parameters. Let's go ahead and try out the toggle function, which does essentially what you'd expect. So let's copy and paste that and let's call slide toggle. And we'll make that one slow. And just like other animation functions, you can specify a completion function. So let's go ahead and do that. I'll call on toggle finished, and I've already got that function defined down here. In this case, the completion function logs a string to the developer console. So let's save and go back to the browser. And let's go ahead and show the developer tools and make sure the console is showing. And you can see that when I toggle, right, that the console log is getting the message here and we'll toggle it open again, it happens again. So you can see that the sliding functions are an alternative to using the show and hide functions we learned about earlier
>
> **[2:31](https://www.linkedin.com/learning/jquery-essential-training-24696205/sliding-elements?u=76281980&t=151)** if you would rather use a sliding style show and hide animation instead of a fade.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (5), click on (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2)
> **Analogies:** kind of like (1), just like (1)
> **Code Identifiers:** jquery (1)
> **Speakers:** - [instructor] (1)

#### [Custom animations](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980&t=0)** - So far in this chapter, we've been looking at the predefined animations and effects functions that jQuery provides out of the box. And you could do quite a bit with these functions, but there may come a point where you want to combine various animations together to build an effect that goes beyond the basics. In addition to the prebuilt animation functions that jQuery gives you, there's a low level animate function that you can use to create custom animation for a wide variety of properties on page elements. Generally speaking, CSS properties that use numeric values can be animated. So, for example, you can animate things like width or height or border thickness. You can't animate, say like the font family because it's not numeric. The animate function has a lot of options, so it's beyond the scope of this video to go deeply in all of them. I'm going to focus on the core concepts of using the function and then you can take some time to experiment with it. So, there are two ways to call the animate function. The first is with an object that specifies the properties to be animated, along with a set of parameters that control the animation process. And the second way is with two objects. The first argument is the set of properties, and the second argument specifies the animation parameters. The second way of calling animate provides a few more options than the first, but to keep things approachable, I'm just going to cover the first version. The property's object should contain the name of the property to be animated and the value that the animation should move toward.
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980&t=96)** The default easing and complete parameters are all optional. The duration parameter defaults to 400 milliseconds, but you can specify a numeric value or literal strings like slow or fast. And this value controls how much time the animation will take. The easing parameter defaults to swing, which provides a more natural feel, but you can specify linear, if that's what you prefer. And the complete parameter is an optional callback function that will be called when the animation sequence completes. All right, so that's a lot to take in all at once. So let's go over to the code and try it out. All right, so let's open up the animating file and let's bring this up in the browser. And you can see that this is the familiar example that we've been using. So, let's go back to the code. And if I scroll down, you can see that there's the div elements I'm going to be animating and some buttons to trigger each animation type. So, let's try filling out some of these. All right, so the first example just animates the width of the div, so let's try that. And I'll use the animate function and then I need to pass in an object, so I'll animate the width to be 500 pixels. And that's got to be in quotes, over a duration of 1000 milliseconds. Let's also animate the font size. So I'll just copy and paste this line.
>
> **[3:12](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980&t=192)** All right, so this will be the font size property, and that's going to be 24 points, and that's also going to be over a thousand milliseconds. So, let's go ahead and try those two out in the browser. Let's save. So let's go ahead and click on grow right, and you can see that when I do that, the div animates in and it gets a bit wider. And when I click on animate text, we can see that the text animates larger in size. All right, so let's go ahead and refresh the page. So, I want to show you something. I'm going to click these two buttons in quick succession. I'm going to click on grow right, and then animate text right after the others. So, let's do that. And you can see that they didn't execute at the same time. So, both animations were queued up together and the text animation happened after the size animation was finished. If you want to animate multiple properties at the same time, you have to specify them together in one call to animate. So, let's try something else. Let's make the element move. So, let's go ahead and paste that in. And this time we'll pass in left as the property, and I'll just take the pixels off. And let's specify linear. All right, let's go ahead and try this out. So, I'll click on move element, and you can see it moves across the page.
>
> **[4:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980&t=285)** All right, that's all good. Okay, so finally, like I alluded to a few moments ago, let's try animating multiple properties all at once. So, let's go ahead and paste that in. So, I'm going to animate the width, the left, which is going to be 500, the font size, which will be 24 points,
>
> **[5:18](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980&t=318)** and the width, which will be 500 pixels. And we'll do that over a duration of 1000 milliseconds. And this will happen when the all button gets clicked. So all three of these properties, not that I've specified them in one function call to animate, should all happen at the same time. So let's go ahead and save. Let's click all properties. And you can see that not only does the element get wider, it also moves and the text grows and it all happens at the same time. And just to point out, you can also specify values in other units like percentages and ems when they're applicable. So if I wanted to, let's go back to the code. For example, I could specify 3ems for the font size and for the width, instead of saying 500 pixels, I'll put in 200%. So let's go ahead and save, and let's go back to the browser and let's try it. And sure enough, you can see, oh, whoops, it didn't. That means the font size didn't animate up. That's cause it's supposed to be 3em, that's why. Let's try that again. There we go. So now the font size is animating up, the element gets really big and it moved at the same time. So, that should give you a sense of the kinds of things you can accomplish with the animate function.
>
> **[6:50](https://www.linkedin.com/learning/jquery-essential-training-24696205/custom-animations?u=76281980&t=410)** But, I've only just scratched the surface in this example. I suggest taking some time here to experiment with the animate function and try out some ideas of your own. Feel free to refer to the jQuery animate documentation to do this, and just try out some experiments.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), scroll down (1)
> **Code Identifiers:** jquery (3)
> **Cross-References:** go back to (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Definitions:** is an  (1)
> **Speakers:** - so (1)


### 7. AJAX Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [jQuery and AJAX](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=0)** - [Instructor] jQuery provides great, comprehensive support for [[AJAX]] operations, which is where your web app communicates asynchronously with a remote server. And in the past, this feature was really valuable because not all browsers supported the latest Ajax APIs. Now, that, of course, has changed. Modern browsers have dramatically enhanced their support for Ajax. So you might be wondering why would you use jQuery for this? And in fact, if you're writing new Ajax code and it's not very complex, then it might be best to just use the native browser APIs for this. But jQuery does provide some nice convenience features that the browsers don't have built in. It's beyond the scope of this course to go into the deep details of what Ajax is and how it works. If you need to brush up on Ajax, there's a course here in the library called [[JavaScript]] and Ajax I suggest you check out. So before we start, let's take a look at the jQuery API documentation and specifically, the Ajax section. And I'm going to click on the Low-Level Interface link right here. So jQuery has a low-level interface that we're going to be taking a look at called the Ajax function. And that's this function. There are a whole bunch of settings and properties you can pass to this function to control how it works. Now, I'm not going to go deep into all of these because some of these are pretty advanced and some of them are things you'll probably never touch in your day-to-day development. But you can see that there's quite a few options
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=93)** for how this function works. The way that the basic Ajax function works is you use it to make a request to a server and you get a response back. And that's what we're going to do in our first example. So let's jump over to the code. And in the meantime, I suggest you keep this documentation open in case you want to refer to it. So here in VS Code, let's open up our Basic_AJAX file. And in my example code file, I have some buttons and the buttons will trigger our Ajax operations for text and [[HTML]] data. And I've got this empty paragraph placeholder where the result will be inserted into the page. So when my page loads, I connect the event handlers on the buttons to call the getData function with different URLs based upon whether I'm retrieving text or HTML data. And this getData function is where the Ajax operation is going to happen. So let's go ahead and implement our code there. So because this function is an event handler, it receives an event object as a parameter. So I'm going to extract the URL parameter, which was passed in from the click handler. So let's do that. I'm going to call $.ajax. So this is the jQuery Ajax function,
>
> **[3:06](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=186)** and I'm going to call evt.data.url
>
> **[3:15](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=195)** 'cause that's the datum passing in. And I'm just doing this just so I can use one function for both examples. The Ajax function implements what's called the promise interface. So now I need to add the done, fail, and always functions. So when this function is done, I'm going to call a function. So that's going to receive the data, status, and result from the Ajax function.
>
> **[3:52](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=232)** All right. And oh, whoops, I don't need the extra. There we go. So the done function is called when the Ajax operation completes successfully. And I use this function to add the returned data to the placeholder that's in my page. So I'm going to get a reference to the AjaxContent paragraph. And then we'll use the append function we learned about earlier in the course to append the data in there. And then I'll just write a message out to the console.log that things were good. All right, now, if things go wrong, the fail function will be called, and that's also going to be a callback. So in that case, we're going to get the raw XHR object, the status, and a string describing the error. And in that case, I'll just log out that there was an error, along with whatever the error code was. And then finally, I'll implement the always function. So the always function will always execute as its name implies, regardless of whether the operation succeeds or fails. And to demonstrate this, I'm just going to log the message to the console.
>
> **[5:24](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=324)** And again, this requires a callback function, which will get the raw request, the status, and any error. And I'll just log out that the request is complete. All right, so let's go ahead and open this up in our browser using Live Server. And I'm going to open up the Developer Tools once the page loads so we can see what's going on and let's have the console up. All right, so let's try the first button. Let's click on Get Text Data. And you can see that, sure enough, some text data got inserted into the paragraph. My success handler got called and the always function also executed. So we can see that the result is complete. And now let's try refreshing the page. Let's click on Get HTML Data. And once again, it was successful. We got HTML content and we put it into our paragraph. All right, so now let's try to access a file that doesn't exist. So let's jump back over to the code. And by the way, you can see that in my request I'm getting testdata.txt and testdata.html. Those are here at the same level of my code, so I don't have to put any URL path in front of them. But let's try getting testdata1.txt. That file doesn't exist. So let's save and let's jump back over to the file.
>
> **[6:59](https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-and-ajax?u=76281980&t=419)** We're going to click on Get Text Data. And you can see that that resulted in an error. And this is my error handler being called. There was an error that was not found and then the request is complete. Now, you might be looking at this and saying, well, this is not really all that different from the built-in [[Fetch]] API that's in the browser. So what's the benefit here? And this is a good question, and in all honesty, if all you're doing is just a simple fetch of remote data, then maybe the built-in fetch API is the way to go. And we'll actually cover this later on in the course when we get to the chapter on migrating from jQuery features. And this is true, especially if you're decoding a lot of [[JSON]] because the browser can just do that natively. As we go through the [[Representational State Transfer (REST)|rest]] of this chapter though, you'll see some of the additional features that jQuery adds on top of the basic Ajax operations and how they can help you write simpler and more modular code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (18), [[HTML]] (5), [[Fetch]] (3), [[JavaScript]] (1), [[JSON]] (1)
> **Env Vars:** html (4), api (3), url (2), xhr (1), json (1)
> **Code Identifiers:** jquery (8), getdata (2)
> **File Paths:** testdata.txt (1), testdata.html (1), testdata1.txt (1)
> **UI Navigation:** click on (3)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)

#### [Convenience functions](https://www.linkedin.com/learning/jquery-essential-training-24696205/convenience-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/convenience-functions?u=76281980&t=0)** - [Instructor] Some types of [[AJAX]] operations happen fairly frequently in [[Web Development]]. And because of that, jQuery provides a set of shorthand convenience functions to help make those operations easy to code. So in this example, we'll take a look at some of those functions. And once again, we're here in the jQuery website on the API documentation. And in the Ajax section, I'm going to click on Shorthand Methods. jQuery provides useful shorthand methods such as get and post for performing HTTP GET and POST requests. There's also a getJSON for retrieving [[JSON]] data. There's getScript for retrieving and then executing [[JavaScript]] code. And then there's a load function which retrieves content and places it inside a page element. So these shorthand functions make certain common types of Ajax requests easier to handle because they require you to write less code. So let's try some of these out. All right, over here in our code, let's open up Convenience_AJAX. All right, so the structure of this page is fairly similar to the others we've seen so far in the course. I've got some content down here. All right. And there's a paragraph right here with an id of ajaxContent and that's where we're going to be inserting our content. We'll be using that shortly. And then each of these buttons executes one of our sample functions. So let's start out by trying out the shorthand get function.
>
> **[1:39](https://www.linkedin.com/learning/jquery-essential-training-24696205/convenience-functions?u=76281980&t=99)** You can see that when the Get button is clicked, we call getData. So I'm going to add some code here. I'll write $.get. Doesn't get more simple than this. And I'll simply write in testdata.txt. And then I'm going to specify that the success function should be called when the request succeeds. So this code uses the get function. It returns the data at the given URL. And again, testdata.txt is at the same level as this code. So there's no path. And it calls this success function when it returns. So if we go back to the sidebar, you can see testdata.txt is right here and the success function, which is down here, just simply logs out to the console that the result is being set and places the content into the paragraph with this id. So that's simple enough. All right, so let's try this out. We're going to save this and let's bring it up in Live Server. All right, and when I click on the Get button, you can see that, sure enough, the text is added to the page. All right, let's try another one. So the scenario of getting information from a remote data source and then adding it to an element on the page is actually fairly common throughout web development. You know, you might need to get information from a stock quote service or a news
>
> **[3:12](https://www.linkedin.com/learning/jquery-essential-training-24696205/convenience-functions?u=76281980&t=192)** or weather service or some other type of service that provides data. And then you display that data somewhere on the page. And because this scenario is so common, jQuery provides the load function. The load function simply takes a URL and loads the data into the set of elements specified by the selector expression. So let's add the code to our loadData event handler. I'm going to specify that the ajaxContent paragraph. I'm going to call the load function. And I'm just going to call testdata, in this case, the [[HTML]] version, which contains a few paragraphs. So this code will get a reference to that paragraph element and insert the data that's returned from this URL, all in one line of code. So let's go ahead and save and go back to the browser. And now let's click on load. And sure enough, you can see that HTML content is now being loaded into the page. But let's take a look at that HTML data a little bit more carefully. So if we go back to the sidebar and we look at testdata.html, you can see that there are three paragraphs in this HTML file. And each one has an id, this p1, p2, and p3. And one of the interesting features of the load function is that you can actually tell it to only load a fragment of the data that comes back from the server by using a jQuery selector expression. So if the URL argument
>
> **[4:48](https://www.linkedin.com/learning/jquery-essential-training-24696205/convenience-functions?u=76281980&t=288)** in your loadData has one or more spaces in it, then the portion of the string following the first space is assumed to be a jQuery selector that determines the content to be loaded. So if I only wanted to load the second paragraph from the returned data, I would modify it to read like this. I would put #p2. And that means, if we go back to the HTML, you can see that that means that only this paragraph will be loaded because that's what matches this selector statement right here. So let's save and let's go back to the browser. I've already got it running. There we go. So I'm going to click on the load button again. Right, and now, only the second paragraph is being inserted. And this can be any jQuery selector expressions. Let's change the code again. So in this case, let's click on the expression here and let's change it to p:last. All right, and then let's go back to the page and now only the last paragraph is being loaded. So the load function is a pretty powerful way for loading remote content into your web app in just one line of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[AJAX]] (3), [[Web Development]] (2), [[JSON]] (1), [[JavaScript]] (1)
> **Code Identifiers:** jquery (7), ajaxcontent (2), loaddata (2), getjson (1), getscript (1)
> **Env Vars:** html (5), url (4), api (1), http (1), post (1)
> **Cross-References:** go back to (6)
> **UI Navigation:** click on (5)
> **File Paths:** testdata.txt (3), testdata.html (1)
> **CLI Commands:** make (2)
> **API Endpoints:** get  (1), post  (1)

#### [Working with different data types](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=0)** - [Instructor] So far in this chapter, we've seen how to work with plain text data and [[HTML]]. But you can of course use jQuery and [[AJAX]] to work with other kinds of data. In this example, we'll see how to work with XML and [[JSON]] data. So let's open up the DataTypes_AJAX file. So there are two examples that we're going to build here. One will work with JSON data and the other will work with XML. And again, it's beyond the scope of this course to go deep into the details of JSON and XML. There are some great courses here in the library where you can learn about each. I would suggest "[[JSON Essential Training]]" and "XML Essential Training." So I have a simple data file called testxml, and it has some sample XML in it, and you can see it's a very simple XML structure. So let's go ahead and fill out our XML example first. All right, so I'm going to use the same get function that we saw previously in the chapter when we worked with text and HTML data. And you can see here in my sample file, it's the same structure as the others. I have this placeholder where my content's going to go, and I have a couple of buttons that trigger these functions. So let's use the get function. So I'll call $.get, and I'll get the "test.xmldata.xml", and then for this example,
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=93)** I'll just define an inline result function. So when jQuery executes an AJAX request, the response that comes back goes through some pre-processing before being sent to the success handler. In the case of XML content, jQuery detects that the content is XML, and parses it into a fully-formed XML document object, which becomes the value of the result parameter that's passed to the success function. And because it's a properly formed XML document, I can use the DOM API to extract data from the XML. So let's go ahead and do that. So I'll have a variable for the title. And on the XML document, I'm going to use the DOM function: getElementsByTagName for the title, and there's only one of those. so I get the 0 with result. I'll do the same thing for name. I'll get the "name" tag, and then I'm going to build a string that combines the two. So that's going to be title.firstChild.nodeValue
>
> **[3:02](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=182)** + + name.firstChild.nodeValue.
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=190)** And then I'll just simply set the content of the AJAX placeholder. First, I'll empty it out any content that's already in there, and then I'll append the string I just made. So this code extracts the text content out of the XML elements, and if we look at the structure of the XML file, it should say the name of the title by the name of the person. So let's go ahead and collapse that back down, let's try this out in the browser. And sure enough you can see that that's exactly what happens, right? So the text content of the XML is being inserted into the page. All right, let's try working with some JSON data. So for the JSON example, I'm going to use the Flickr API to get some images. And this is the public Flickr API, it doesn't require an API key. And I'm not going to go deep into the Flickr API here. If you want to learn more about how to use it, you can do a search on the Flickr API and go from there. What I'm going to do is ask Flickr for specific images that have specific tags associated with them. And to do that, I'm going to use the getJSON function. getJSON is similar to the get function, but it is specifically designed to work with JSON data. So let's go ahead and add that code. So for getJSON, I'm going to call the flickrAPI,
>
> **[4:47](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=287)** and I'm going to pass in an object with some parameters in it. So the first will be tags, and I want images that are tagged "space needle", and I want the tagmode to be "any", this is a Flickr requirement, and I want the format of the return value to be "json". All right, and I'm going to close off the brace there, and then I'm going to call my successFunction when this returns back. All right, so the first argument is the flickrAPI, the URL for the flickrAPI, and then I have an object with some properties in it that specify some search options. And then my success callback function right here needs to be filled out. So let's go ahead and do that. So the success function, the result parameter is going to be a [[JavaScript]] object. It's going to be a whole bunch of JSON code that represents the search results from the Flickr API. So what I'm going to do first is empty out my Ajax placeholder element, oops.
>
> **[6:06](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=366)** So I'll call the empty() function on that, and then I'll have a local variable. So the result argument will have a property called items. This will be all the items that were found in the search, and there'll be a bunch of them, there'll be about 20 or 30. And I only want the first four. So I'm going to slice that array, and just get the first four images. And then I'm going to use the forEach function, and for each item in that list, I'm going to create a new "<img>" tag, and I'm going to set the attribute, the "src" attribute. And so each item in this loop is going to have a property called media, and then there's going to be an m property, that's the URL for each of the returned images. And again, this is all part of the Flickr API, so you can read up more on this if you want to. So I'm going to create a new image, and each image, I'm going to append it to the "#ajaxContent". So we're reusing some of the functions we saw earlier in the course for creating and manipulating page content. All right, so that's pretty much all I need to do. I get the JavaScript result, I go through each image, create a new "<img>" tag, add that image to the div, the placeholder div, and let's go ahead and try this out. So we'll save this, we'll go back to the browser.
>
> **[7:40](https://www.linkedin.com/learning/jquery-essential-training-24696205/working-with-different-data-types?u=76281980&t=460)** And "Get XML Data" still works, let's click on "Get JSON Data". And sure enough, you can see that we have four images that have somehow been tagged with the Space Needle in them. So that should give you a sense of how you can work with XML and JSON data types using the jQuery AJAX functions. And maybe pause here for a few moments, try out some experiments on your own. Try out using different [[Forms]] of XML and JSON, and see how easy it's to use jQuery to work with these data types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (12), [[AJAX]] (5), [[HTML]] (2), [[JavaScript]] (2), [[Forms]] (1)
> **Env Vars:** xml (19), json (11), api (8), ajax (4), html (2)
> **Code Identifiers:** jquery (5), getjson (3), flickrapi (3), firstchild (2), nodevalue (2)
> **Cross-References:** earlier in (1), go back to (1)
> **File Paths:** test.xmldata.xml (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Using global AJAX handlers](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=0)** - [Instructor] If you're building a web application that uses more than a trivial amount of [[AJAX]], you might want to centralize some of the operations to make them easier to maintain and update in the future. The jQuery AJAX module provides a set of global event handlers that you can use to listen for interesting events that take place during the lifecycle of all the AJAX requests on a webpage. Here on the jQuery website docs, let's click into the API documentation for the Global Ajax Event Handlers. And you can see that there are six events that you can listen for when something interesting happens in an AJAX request. These functions that you see used to perform the same operations such as .ajaxComplete() and .ajaxError(). They have been deprecated since jQuery 3.5. The events are what you want to use in any new modern jQuery code to perform this, and we'll see how to do that in a little bit. Now, you don't have to use all of the events. You can just register the events that you are interested in for your particular application. So let's take a look at how each of these events are fired during the lifecycle of an AJAX request. You can think of AJAX requests coming from a webpage as a series of events on a timeline. First, the AJAX request begins, which generates an event. Note that this event is only sent one time,
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=96)** and this corresponds to the ajaxstart event that jQuery provides. jQuery checks to see if there are any outstanding requests on the page and initiates this event only if there aren't any already existing requests. Then before the request is sent, the ajaxsend event is triggered. Next, one of two things will happen. Either the request will succeed, or the request will fail. Each of these generates an event, either ajaxSuccess or ajaxError. That's followed by the request completion event, regardless of whether the request succeeded or failed, and that is the ajaxComplete event. And then finally, when all the requests are done, the ajaxStop event is triggered to indicate that all the requests are complete. And again, that event is only sent one time. So there are a number of scenarios that these events can help address. For example, you might want to centralize all of your error handling code in one place rather than attach individual error handling functions to each one of your requests. Or maybe you're working with a server that requires certain custom HTTP headers to be set for every request that goes out. You can use events like these to intercept each individual request before it goes out and comes back so that you can do things like modify or attach information to the request or the response. You can also use these events to provide some user interface information, such as a loading animation that appears and disappears whenever a server request start or finishes.
>
> **[3:12](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=192)** Alright, let's work through an example that uses each one of these events. So here in the code, let's go ahead and open up the Globals_Ajax file. And you can see that there's already some code in here. I've got a getData function that gets some test data and has a success callback. And what we're going to do is we're going to attach some events to exercise each one of the events and see how they work. So let's go ahead and start doing that. First I'm going to scroll up. So let's first add some code to listen for the ajaxStart event. And this is done on the document. So on ajaxStart, we're going to attach a function, and that function is going to basically just console.log("AJAX is starting"). And then we'll do the same thing with the ajaxStop event,
>
> **[4:22](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=262)** and we'll just say the request ended. So for each of these event handlers, we're going to call the console.log function to indicate what's happening. And before we go any further, let's just go ahead and try this out. So let's open this up in the browser, and I'll open up the developer tools so we can see the console. Where's the console? There it is. Alright. And I will click the Get Data button. Alright, and you can see that the data is successfully retrieved and put into the page and we have the corresponding event messages. So we have age AJAX is starting. Setting result is from my result function, and then we have the AJAX request ended. Alright, that's pretty good progress so far. Let's go back to the code and add some more then. Alright, so now let's add ajaxsend. So I'll just copy and paste this, ajaxsend is going to be before the request is sent,
>
> **[5:26](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=326)** and we'll simply log a message that says ("About to send a request..."). Then there's ajaxComplete,
>
> **[5:45](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=345)** we'll say ("Everything's finished!") and then we'll also add ajaxError, and we'll just log out that ("There is a problem with the request"). And then finally, we'll put in ajaxSuccess, and we'll just write out ("looks like everything worked"). Alright, so let's save our new code and let's go back to the browser, and let's try it again. Alright, so we can see here that the request is starting, and then we're about to send the request. So this is our opportunity to modify any headers or anything. Then the result comes back, so we set the result, then we have the everything worked for the success handler, and then we have Everything's finished on ajaxComplete, and then we have the ajaxStop. Now the error function didn't get called because everything was fine. Let's go ahead and force an error to see that case. We're going to request a file that doesn't exist. I'll just call it testdata1. And let's go back to the browser. Let's try it again. And now you can see, okay, now there's an error. So we have a 404 error because that file does not exist. So now we can see that the error function is working. So by using these global event handlers to centralize common code, you can reduce the amount of special handling code that you would otherwise need to add
>
> **[7:19](https://www.linkedin.com/learning/jquery-essential-training-24696205/using-global-ajax-handlers?u=76281980&t=439)** across multiple places in your application. And this is another example of some nice convenience features that jQuery adds to your application that you don't have to write. So these already exist for you. You can reuse these events. If you wanted to re-implement these features in your own code, obviously you'd have to write a lot more code on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (11)
> **Code Identifiers:** jquery (7), ajaxcomplete (4), ajaxerror (3), ajaxstop (3), ajaxsuccess (2)
> **Env Vars:** ajax (10), api (1), http (1)
> **Cross-References:** go back to (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **UI Navigation:** scroll up (1)

#### [Challenge: AJAX](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-ajax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-ajax?u=76281980&t=0)** - [Instructor] In this programming challenge, we're going to use [[AJAX]] to load our product database and populate the product information page. So remember from a previous challenge that our site was passing the product name and product ID to the product page, but that the [[Representational State Transfer (REST)|rest]] of the fields were empty. So I'm going to go ahead and open up the finished site, and I'm going to try out the finished code. So when I scroll down to the [[Microsoft Products|products]], you can see that when I click on a product, what's being loaded now is the product name, whether or not it's in stock, and what the price is. So remember from the last challenge that our site was passing the product name and product ID to the product page via the URL query string, but that the rest of the fields were empty. We were only using the product name at the time All right, so now we're going to fill in the rest of the fields. So let's go ahead and take a look at the code for the challenge. If you look inside the Start folder in HPlusSport, there is a product-data.[[JSON]] file. So the information for each of these products comes from this JSON data. So what you'll need to do is load this JSON file using AJAX, and then get the relevant product information using
>
> **[1:34](https://www.linkedin.com/learning/jquery-essential-training-24696205/challenge-ajax?u=76281980&t=94)** the product ID that is passed to the product page as part of the query string. And if you look at the [[HTML]] for the product page, I'll scroll down here a little bit. You can see that there are placeholders here for each of the product data. So we've already done the product name part in a previous challenge. Now you're going to fill out the in-stock price and description using the data that's inside this JSON data file. So go ahead, take some time to work on this, and I'll show my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Representational State Transfer (REST)|Rest]] (3), [[AJAX]] (2), [[Microsoft Products|Products]] (2), [[HTML]] (1)
> **Env Vars:** json (3), ajax (2), url (1), html (1)
> **UI Navigation:** scroll down (2), click on (1)
> **File Paths:** product-data.json (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: AJAX](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-ajax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-ajax?u=76281980&t=0)** - [Instructor] All right, let's take a look at the solution that I came up with for this challenge. And remember, it's okay if your solution is different than mine. So here in the finished folder, I am going to open up the index.[[HTML]], product-data, and product.html page. So what we had to do in this challenge was load the [[JSON]] data for our [[Microsoft Products|products]] and then find the right product data to display in our placeholders in the product information section, which is down here in the page. So you can see that in the JSON data, I have an array of products and each one of these products has some information. There's the name, there's the ID, the retail price, whether it's in stock, the description, and we didn't use these other fields, but you can use those if you want to keep on going with the challenge on your own. Back in the index page, remember from the previous challenge, we're passing the product name and product ID in the query string. So if we look at how I've updated my code in the product.hmtl page, remember in the previous challenge, I left this statement in, it gets the product ID from the URL parameter. And so this is the code that I've added to solve this challenge.
>
> **[1:33](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-ajax?u=76281980&t=93)** And it's like, what? It's 10, I think-ish lines of jQuery. So my call to get JSON, loads the product data, JSON file, and then inside the done function, this is the success handler, I'm specifying this function. So the product data, this is the JSON object that gets passed once it's been pared by the browser. What I'm doing is I'm looping over each element inside the product list. Now, this isn't the most efficient way of doing this, but there's only like, what, 30 or 40 products? It's not that bad. So for each one of the elements, I had this callback function that takes each element, and I check to see if the elements' product ID, which is this field here in the JSON, is equal to the product ID that was passed in, in the query string. And so once that matching product is found, the code uses jQuery to insert the information for that particular element, whether it's in stock, the retail price, the description, and so on, into the correct placeholders. Now, in this particular challenge, the JSON code was a static local file, but as we saw earlier in the course with the Flickr example, it could just as easily be delivered by a server. And once again, notice how little jQuery code it took to perform this operation. Now, as I said, we didn't use really the photo or you know, anything else, but if you want to keep on going with this challenge, maybe one enhancement to think of is how would you incorporate the photo source
>
> **[3:07](https://www.linkedin.com/learning/jquery-essential-training-24696205/solution-ajax?u=76281980&t=187)** into the product page. So, if you feel like keeping going, take that on as a little bit of extra credit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[Microsoft Products|Products]] (4), [[HTML]] (2)
> **Env Vars:** json (7), url (1)
> **Code Identifiers:** jquery (3)
> **File Paths:** index.html (1), product.html (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **CLI Commands:** find (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### 8. jQuery Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [DataTables](https://www.linkedin.com/learning/jquery-essential-training-24696205/datatables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/datatables?u=76281980&t=0)** - [Instructor] One of the best features of jQuery has always been its extensibility. There are thousands of plugins available that can help solve many different kinds of app development scenarios. In this chapter, I'm going to demonstrate a few of my personal favorites, and I encourage you to do some exploring and experimentation on your own with some of the other great plugins that are available. There are a lot of different ways you can find jQuery plugins, and obviously doing a search on jQuery Plugins is a good start, and this will give you plenty of results. The jQuery library used to maintain its own registry of plugins, which you can see is the top result right here, but that has since been deprecated. And you can see that they provide a link to the Node Package Manager site, which is a repository that contains thousands of plugins. If you click on this link, you'll go here. And you can search on popularity and quality and maintenance and rating level and so on. You can also find popular plugins on their own sites, and one of the ones I want to highlight is the DataTables plugin. This plugin transforms an ordinary table of data in a webpage into a fully interactive table with support for features like styling and paging and sorting and searching and so much more. It's a free open-source plugin that you can download directly from the site here. And I've already done that for this example. So let's go ahead and open our example in the code, and we'll take a look at how it works. So here in Chapter,
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/datatables?u=76281980&t=95)** let's open up DataTables.[[HTML]]. So to keep this example simple, I've embedded the data that we're going to work with directly within the HTML inside of a table. But this isn't required. There are multiple ways to get data into a data table. You can retrieve it from a remote source using [[AJAX]], or you can use regular [[JavaScript]] objects or arrays. It's entirely up to you. I just want to keep the example relatively simple, and the documentation for this plugin demonstrates how to use Ajax and so on to load data from remote sources. So if we view this in the Live Server, you could see that it's just a big table of information. These are all employees and various positions and offices and so on for a fictional company. And what we want to do is transform this table into an interactive table. And all we need to do that is pass a reference to the table into the DataTable constructors. So let's go ahead to the code. And right here you can see that I've included my DataTables minified JavaScript source, which I've already included for you in this folder here in the chapter. So all I'm going to do is write new DataTable and give it a reference to my example table object using the jQuery selector syntax.
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/datatables?u=76281980&t=190)** And you can see that the ID right here, that's the example table. So that's the ID that I'm passing in right here. So let's go ahead and save this. And let's go back to the browser. And now you can see that the table has been magically transformed into this interactive table. I could get automatic styling, I get paging, I can even search the table. So let's try searching for developer. You can see the results there. I can also set various options on the table from within my code. So let's go back to the code and try that. So what I'm going to do is add an initialization object as part of the constructor call. And so let's add, let's see, we'll make the page length default to 25. And we'll start off with a default search term. So we'll have that be, let's see, we'll do the string London. All right, let's go ahead and save that. So now that we've set some initialization parameters, let's go back and look at the result. All right, so now we are back here in the result. You can see that the page size is now 25 entries per page. So it's respecting my new defaults. You can see that we're starting off with a default search of the London [[Microsoft Office|office]]. So this is a very rich and full featured plugin, and I don't have nearly enough time to go into all the features. I really suggest you take some time and try out some of the features on your own. The documentation is really good.
>
> **[4:43](https://www.linkedin.com/learning/jquery-essential-training-24696205/datatables?u=76281980&t=283)** DataTables works with a variety of other frameworks and styling systems like Bootstrap, so you will fit it seamlessly into your existing apps, and you can even make your own extensions for it. All you need is jQuery, this extension, and whatever application framework you want to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[AJAX]] (2), [[JavaScript]] (2), [[Microsoft Office|Office]] (1)
> **Code Identifiers:** jquery (6)
> **CLI Commands:** find (2), make (2), node (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)
> **Prerequisites:** initialization (2)
> **File Paths:** datatables.html (1)

#### [Form validation](https://www.linkedin.com/learning/jquery-essential-training-24696205/form-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/form-validation?u=76281980&t=0)** - [Instructor] Form validation is one of the most common tasks that many web developers have to do, and it's also probably one of the most frustrating. Browsers have come a very long way in their support for form features, such as assigning types to input fields and declarative restrictions and so on. But it's still up to the developer to fill in a lot of the details when it comes to validating the input. So for this example, we're going to be working in our FormValidate file. There's a jQuery plugin that's been around for a very long time, almost as long as jQuery itself, and that can really help here. You can find it at this link on [[GitHub]]. It's called jQuery Validate, and it's free to download, which I've already done. I've already placed it inside the jQueryValidation folder. So let's jump over to the code. So let's open up our FormValidate file, and let's go ahead and bring this page up in the browser. So you can see that it's a straightforward form with different types of data in it. So the name is a text field, age is a number, then there are fields for email and a URL for your homepage, and that's optional, and then a free form text field, which is required. What I'd like to be able to do is just have these form fields be automatically validated for me, and using this plugin, I can do that with essentially one line of code. So let's jump over to the code really quick. So you can see here,
>
> **[1:32](https://www.linkedin.com/learning/jquery-essential-training-24696205/form-validation?u=76281980&t=92)** I have already added the code for the plugin to my webpage, and I've placed it inside the jQueryValidation folder here for you. So what I'm going to do is set up the form validation itself. Before I do that, let's scroll down and take a look at the form. Let me give us some more room to work here. You can see that on the form itself, I'm using several of the [[HTML]] features, such as indicating which fields are required. I've given my fields different types. So I have a type="text" here. Here's a type="number". Let's see, here's the type="email", the type="url" and so on. So I've already done a bunch of work in my markup to indicate what types the fields are, and you know, whether they're required or not. So what I'm going to do is inside my $(document).ready() function, I'm going to get a reference in jQuery to the form, and I'm going to call the validate function. And that's pretty much it, that's all I need to do. Now obviously there's a lot more functions and features than this, but just calling validate on the form is pretty much all you need to do to get a huge amount of benefit and features on validating this form. So the plugin will look at all that type and constraint information on each field, and will apply validation rules that type, such as email and URL and whether the field is required. So let's go back to the browser,
>
> **[3:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/form-validation?u=76281980&t=185)** and before we do anything, let's just click the Submit button, right? And you could see that error messages are automatically displayed next to the fields that have issues. And then of course I can, you know, make these issues go away by typing in some text, and I'll, you know, put in a number for the age, and then I'll put in an email address, right? And you can see that as I'm typing this, it indicates it's not a valid email address. So I'll just put in blah@[blah.com](https://blah.com). Homepage, it's optional, so it wasn't a problem, but if I try to put in something that's not a URL, it's going to complain. So let me put in a URL, and then let's fill in some text here. And now everything is all good. I can click Submit, and now my form works. Now you can see that the error messages that are default, they don't look great and they're not positioned where I want them. So I can use CSS to customize how the messages are displayed. So let's go ahead and try that. Let's go back to the code. So down here in my CSS, I'm going to add a new style. So on my form, I'm going to define a label style with an error class on it. And I want my label errors to be displayed as block, I want them to have a red color, and I'm going to give them a little bit of a margin-left so that they're indented. All right, so let's save that and let's go back to our form, and let's try the submission again.
>
> **[4:39](https://www.linkedin.com/learning/jquery-essential-training-24696205/form-validation?u=76281980&t=279)** And now you can see, right, that the error messages are being displayed on their own lines below each field and they're red colored and so on. There are a lot more customization options that I've shown. If you go back to the GitHub link, you can see that it has its own website. So let's go ahead and open that up, and you can see that there's a whole bunch of documentation available for this plugin. So I encourage you to try this plugin out on your own and see how it can help if you have form validation requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[HTML]] (1)
> **Env Vars:** url (4), css (2), html (1)
> **Code Identifiers:** jquery (4), jqueryvalidation (2)
> **Cross-References:** go back to (4)
> **Analogies:** such as (3)
> **CLI Commands:** find (1), make (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)

#### [Toast messages](https://www.linkedin.com/learning/jquery-essential-training-24696205/toast-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/toast-messages?u=76281980&t=0)** - [Instructor] One of the more common UI patterns that you'll see in modern applications today are so-called "toast messages". And these are usually notifications that pop up from the bottom of the screen to display some useful information. They're called toast messages because they pop up like a slice of toasted bread popping up from a toaster. And yes, I agree that's not a very culture-portable name, but for some reason that's what they're called. So, let me run the finished code for this example to show you what they look like. So, I'm going to open Toast Messages here in the browser. So when I click the button to show a message, you can see that little message pops up from the bottom right here, and it closes itself after a few seconds. And if I trigger more than one, you can see they automatically stack on top of each other. And of course, I can manually close each one as well. So, these messages are very easy to implement and customize using the Toast Message jQuery plugin, which you can find in this [[GitHub]] repository. It's a very small plugin, it's just a few K in size and it's easy to integrate into your site. Now, I've already downloaded and included the code in the toasts folder, so you don't need to do that. So let's go ahead and build the example in the Start folder. Alright, so here in the code, let's go ahead and open up "ToastMessages" in our starting folder. So, I've already included the link to the toasts [[JavaScript]]
>
> **[1:37](https://www.linkedin.com/learning/jquery-essential-training-24696205/toast-messages?u=76281980&t=97)** and CSS files here in the code, and I've already got empty click handlers for the four buttons to show each of the toast types. So, let's go ahead and fill out each of these button click message handlers. So, there's four different message styles, and I'm going to start with the "Success" version. So, I'm going to use the toast plugin, so that's going to be "$.toast", and I'm going to pass an object that contains a set of parameters for each message. So, each message has four parameters. The first is the title. And for success it will be "Success". Then there's the message you want to display, and we'll just give it some generic message. And then there's the type, this is what determines the type of icon that is displayed. And in this case it's a string, so we're going to use the success version. And then there's the duration for how long you want it to be displayed in milliseconds. So, 5,000 milliseconds is five seconds. And then let's just go ahead and copy these guys and customize it for each one. So, for the warning, we'll just change the message
>
> **[3:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/toast-messages?u=76281980&t=185)** and we'll make that a warning. And then we'll do it again for error and info, and we'll change each of these.
>
> **[3:22](https://www.linkedin.com/learning/jquery-essential-training-24696205/toast-messages?u=76281980&t=202)** Alright, and that's an error. There we go. And we'll make that the info. Alright, so let's go ahead and save this, and let's run this in our browser. Alright, let's go ahead and click on each button. And you can see that when I do that, the messages pop up as you would expect them to. So, everything's looking pretty good. Now of course, you might want to customize the visual appearance of these messages because as you saw in my original demo, the toasts look a little bit different than they do here, and it's easy enough to customize these by overriding the default CSS styling. So let's go back to the code and add some style information. So, I'll put a style up here. And the style just needs to come after the toast styles so that we override what's already there. So, the documentation for the plugin explains what each of these are, but I'm just going to go ahead and fill out some of these. So, for the custom toast, I'll give it a border radius of 15 pixels, and I'll choose a background color of white smoke. And then let's customize the title and message. So, inside ".custom-toast" there is a ".content-container", and then that has a title and a message.
>
> **[4:58](https://www.linkedin.com/learning/jquery-essential-training-24696205/toast-messages?u=76281980&t=298)** So, for the title, I'll make the font size a little bit bigger. Let's make that 12 points. And then for the message, let's make the font size 10 points. Alright. And you could play around with this, you know, to your heart's content. Go ahead and, you know, take some of these styles as a starting point, but let's go ahead and save this. And now let's see the difference when we run this in the browser. So now, let's reload and I'll click on "Success Toast". And now you can see that the appearance is much different, right? The background color is different, right, the font sizes are different. So, this is an easy way to add pop-up messages to your app. And you can see that I did it with just a few lines of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** css (2)
> **Cross-References:** as you saw (1), go back to (1)
> **UI Navigation:** click on (2)
> **Warnings:** warning (2)
> **Code Identifiers:** jquery (1)
> **Documentation:** the documentation (1)


### 9. Migrating from jQuery

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing to migrate](https://www.linkedin.com/learning/jquery-essential-training-24696205/preparing-to-migrate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/preparing-to-migrate?u=76281980&t=0)** - [Instructor] As popular and useful as jQuery is, you might find yourself working in a code base that is migrating one or more features off of jQuery. In this chapter, I'll discuss some high-level strategy you can use to plan your migration, and then we'll take a look at some specific migration examples to plain [[Vanilla]] [[JavaScript]]. Before you begin migrating, the first step is to conduct a thorough review and assessment of your current code base and how you are using jQuery. Ask yourself, "Do you even need to migrate?" After all, jQuery is only 30K. And the slim build, which doesn't contain animations or [[AJAX]], is only 20K. If you still decide that migration is necessary, make a note of all the major jQuery features and other dependencies that you're using. That includes third-party plugins and any other associated resources that depend on jQuery. Next, make sure you have a firm understanding of what you are migrating to. Is it another framework or pure JavaScript? You'll need to figure out which jQuery features will and won't directly translate across, and how you're going to replace the ones that are missing from your new destination. When you begin the migration process, start gradually and make sure that you are testing continuously. Begin migrating the smaller features of your app first so you gain experience with replacing different parts of jQuery at a time. This is also a good time to consider refactoring your app code to make it easier to maintain, and isolate framework dependencies for any future migration work you may need to perform. Make sure to create and maintain a test suite
>
> **[1:36](https://www.linkedin.com/learning/jquery-essential-training-24696205/preparing-to-migrate?u=76281980&t=96)** and run your tests regularly so you can catch any potential problems before they become big ones. Migration may not seem like a big job, but it can quickly turn to a major headache if you don't discover bugs until late in the process. And of course, you're going to want to make sure that you are benchmarking your app's performance and measuring it as you migrate. This will help measure the success of the migration, and will also help catch any performance issues that crop up during the process. In this chapter, I'm going to show some migration examples from jQuery to plain JavaScript for four of the most common feature areas of jQuery. For selectors and filters, we'll see how to use the standard querySelector() and querySelectorAll() functions. These functions are used to locate elements within a webpage using the same CSS selectors that jQuery uses. For AJAX operations, we'll see how to use the [[Fetch]]() API to retrieve data from a remote server. We'll also see an example of using CSS transitions and animations to reproduce one of the earlier animation examples in the course. And then we'll wrap up by looking at how to perform [[Content Creation]] and CSS manipulation using standard JavaScript functions. One of the things to keep in mind as you go through this chapter is that even though it's often possible to recreate jQuery features using standard JavaScript, jQuery very often uses the same standard APIs under the hood. As a result, what usually takes just one or a few lines of jQuery code will often result in a lot of additional boilerplate code
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/preparing-to-migrate?u=76281980&t=190)** that jQuery abstracts away, which can make your code less readable and more complex to maintain. There are also cases where standard APIs haven't yet fully caught up with jQuery, or where jQuery provides convenient APIs that are more suited to common [[Web Development]] scenarios. You might find that there often isn't as much benefit to migrating from jQuery as you initially thought.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5), [[AJAX]] (2), [[Vanilla]] (1), [[Fetch]] (1), [[Content Creation]] (1)
> **Code Identifiers:** jquery (18), queryselector (1), queryselectorall (1)
> **CLI Commands:** make (7), find (2)
> **Env Vars:** css (3), ajax (2), api (1)
> **Prerequisites:** before you begin (1), make sure you have (1), you'll need (1)
> **Exercise Files:** boilerplate (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)

#### [Migrating to DOM selectors](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-to-dom-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-to-dom-selectors?u=76281980&t=0)** - [Instructor] Earlier in the course, we learned about jQuery selectors and filters, which are used to access content within a webpage and perform some type of action on them. Modern browsers have two functions that perform the same actions, and these are querySelector and querySelectorAll. And you can find them here in the MDN documentation. You can call these functions on the document, as well as individual elements, depending on the scope that you want to limit the selection to. querySelector returns a single element that matches the given CSS selector statement, while querySelectorAll returns potentially multiple elements. So let's revisit some of the examples from earlier in the course to see how these functions are used. And so here in my editor, I'm going to open up the MigrateSelectors file. And you can see that I have some jQuery statements that select content, and I've left them here in place in commented out [[Forms]] so we can refer to them as we build our example. So the simplest statement just selects an element with a given ID. To perform the same operation, we can use querySelector. So I would write document.querySelector, and I would use same ID for my example div. And in this case, to do the same CSS manipulation, I would write setAttribute on style, and I'm going to make the border
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-to-dom-selectors?u=76281980&t=95)** three pixels solid red. All right, so let's go ahead and save this and let's bring it up in the browser. All right, so let's go ahead and run it. And sure enough, you can see that the div gets selected and the border changes to red. It's a bit more code than the jQuery version, but it's the same result. All right, let's go back and try another example. In this case, we're going to operate on multiple elements. And remember that one of jQuery's main features is that it can easily work on groups of elements. This jQuery code example right here operates on all of the paragraph tags inside the example div. And note that the syntax for multiple elements is the same as the code for working on just one element. For this example, we need to use querySelectorAll because we want to get potentially multiple element references. So I'll write document.querySelectorAll, and it's the same syntax, so it's example p. So this will result in a node list of all the matching elements, but now we have to manually loop over each one and apply the style. So I'll need to use a for each loop here, so I'm going to write .forEach. And then for each element, I'm going to run this function I'm going to call element.setAttribute. And it's just the same code from up here,
>
> **[3:08](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-to-dom-selectors?u=76281980&t=188)** so I'll just copy and paste this. All right, so let's go ahead and save and let's comment out the previous example. All right, let's go back to the browser. Let's click Run. All right, and now you can see that the result is the same as we saw earlier in the course. So this is an instance where the equivalent standard API code is a bit more verbose than the jQuery version, mainly because of the need for that loop. All right, let's look at one more example with a bit more complexity. So back to the code. Okay, so remember this example where we worked on all the even numbered paragraph tags inside the example div. Let's go ahead and write the equivalent standard code for this. Now, this example has a couple of wrinkles in it. First, let's write the selection code. So I'm going to write document.querySelectorAll, and that's going to be example. Now, there isn't really a standard version that gives me the same functionality as the even operator in jQuery. So what I'm going to have to use is the nth-child operator, and I'm going to call even in there. So that's the equivalent for getting the even numbered elements. And then once again, I need the forEach loop and each element is going to be operated on. So for the element, I'll set the attribute
>
> **[4:48](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-to-dom-selectors?u=76281980&t=288)** and it's just the same code. But in this case, I'll do background color just to make it a little easier to look at. So the even filter here is a jQuery extension. So we need to use the nth-child standard syntax to do the same thing with the standard function. But there's a problem. jQuery uses a zero-based index and the nth-child uses a one-based index. So let's see the results of this. I'm going to save this and let's comment out this previous version. Let's go back to the browser and I'm going to run, and you can see that I've got paragraph 0 1, 2, 3, and 4, even though they're labeled differently, right? This is index zero, and this is index one. So this is different than the jQuery version. So I need to use a different syntax. What I need to do is go back to the code. So if I want the same results as from jQuery, I need to use 2n minus 1. All right, so I'm going to save that and let's go back to the browser. So now the results are much more consistent with how jQuery's results were, but look at how much extra code I had to write instead of just using, you know, a single line of jQuery. And, you know, you might be thinking, well, yeah,
>
> **[6:20](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-to-dom-selectors?u=76281980&t=380)** there's extra code and it's not as readable, but at least I'm getting the extra performance from using the native APIs, right? Well, here's the thing. jQuery actually uses querySelector and querySelectorAll under the hood. So you're actually really not gaining much benefit. As long as you don't use the non-standard jQuery extensions, like the even operator, you're basically just using the native APIs anyway. And this illustrates one of the trade-offs you'll have to consider when you think about migrating your code base, how much you value having more succinct and readable code versus reducing your [[JavaScript]] load by loading jQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[JavaScript]] (1)
> **Code Identifiers:** jquery (16), queryselectorall (6), queryselector (5), setattribute (2), foreach (2)
> **Cross-References:** go back to (4), earlier in (3), as we saw (1)
> **CLI Commands:** make (2), find (1), node (1)
> **Env Vars:** css (2), mdn (1), api (1)
> **Definitions:** is a  (2), is an  (1)
> **Documentation:** mdn (1)
> **Warnings:** note that (1)

#### [Migrating from AJAX](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980&t=0)** - [Instructor] When jQuery was first created, building cross-browser [[AJAX]] functionality was a lot harder than it is today. With the introduction of the [[Fetch]] API, which you can read more about here at this link in the MDN documentation, making simple Ajax requests became a lot easier. But jQuery still has several great features for working with Ajax that haven't yet made it into the browsers. Let's take a look at how we can implement the code examples from earlier in the course using standard [[JavaScript]]. Let's go ahead and open up the MigrateAJAX code. And I've left the code for the jQuery example as it was in the earlier chapter. So let's run our existing file in the browser and make sure it still works. So I'm going to fill out the code for the Fetch API example with these buttons, but if I click on Get Text jQuery and get [[HTML]] jQuery, we can see that they are still working. All right, so let's go back to the code. So to implement the [[Vanilla]] JavaScript version, we need to use the Fetch API, and I've already put the link into the doc so you can refer to that on your own. This API is asynchronous, so I'm going to use Async and Await in order to implement this code. So first, we will get the data based upon which button was clicked. So what I'm going to do is let response be and I'm going to call await fetch,
>
> **[1:34](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980&t=94)** and that's going to be the event.data.url. And the reason for that is because if you scroll up, you'll see that for each one of these buttons, I'm passing in a parameter that indicates which of these data files should be retrieved, either plaintext or HTML. So we get the response from the Fetch API, and then I'll use exception handling to catch any errors. So I'm going to put a try in here and then I'll catch any error that happens and I'll just console log that out to the console,
>
> **[2:20](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980&t=140)** and then I'll have my finally, so the request is complete at this point. All right, so assuming the request works, I need to extract the data from the response. So I'll do that and then I'll add the data into the document. So what I'm going to do is make a data variable and I will await the response.text function, that will gimme the text from the response. And then we're going to use document.querySelector to get the ajaxContent field. And then we're going to call append with the data. And if we scroll down, just as a quick reminder, we see that the Ajax content is this paragraph right here. All right, so let's go ahead and try that. So we're going to save this. Let's go back to the browser and I'm going to click on Get Text Fetch. All right, and when I click the text button, you can see that the text appears. And when I try the HTML button, well we get a result, but you can see that the content is the HTML text. It's not the parsed HTML that we get from the jQuery version. So if we refresh and I click on Get HTML jQuery, I get some actually nicely formatted HTML content, but that's not what's happening with the fetch issue.
>
> **[3:57](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980&t=237)** And the reason this is happening is because we're just inserting the returned text into the document. If we want to insert HTML, we have to actually detect on our own that it's HTML and parse it ourselves. Now, this is something that jQuery does automatically, but we have to handle this in our own code. So let's go back and add that. All right, so first, I have to see if the content that was returned was HTML. So I'm going to declare a headers variable and we'll get the response.headers. Oh, actually I'm going to put this in here. There we go. And we're going to get the content type by asking the headers, hey, what was the content type of the response? And if the type contains text/html,
>
> **[4:58](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980&t=298)** so if we find that in the string somewhere, all right, so if it's HTML, I'll have to insert the response using the innerHTML property of the container. So what I'm going to do is, let's see, I'll move this up here and then I will instead of using append, I'm going to use document.querySelector on the ajaxContent and I'll set the innerHTML equal to data and then I will console.log Success. Otherwise, I'll just leave the previous code as it was, cut, paste, and Log Success. All right, so now let's try this again. So let's go back to the browser and let's go ahead and click on Get Text Fetch, that works. And now let's Get HTML, and now we're getting the same result as the jQuery was. So we were able to get the same result, although we had to write more code to do it. And by the way, our code still doesn't handle [[JSON]] or XML. We would have to write even more code for those cases. And this is an example of where jQuery still has some nice features that are provided by default. It's also worth noting that there's not yet an equivalent
>
> **[6:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-from-ajax?u=76281980&t=395)** of the jQuery global Ajax event handlers that we learned about earlier. So if you want to implement something like that, you need to write even more code. And maybe that's worth it to you. But remember, we're only talking about a 30K minimized library here, a smaller, simpler app that doesn't have demanding Ajax features is probably a good candidate for migrating to the Fetch API. But if you have a more complex application, jQuery's still pretty valuable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (13), [[Fetch]] (9), [[AJAX]] (6), [[JavaScript]] (2), [[Vanilla]] (1)
> **Env Vars:** html (12), api (6), mdn (1), json (1), xml (1)
> **Code Identifiers:** jquery (12), queryselector (2), ajaxcontent (2), innerhtml (2)
> **UI Navigation:** click on (4), scroll up (1), scroll down (1)
> **Cross-References:** go back to (3), earlier in (1)
> **CLI Commands:** make (2), find (1)
> **Documentation:** mdn (1)
> **Definitions:** is an  (1)

#### [Migrating effects](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=0)** - [Instructor] In this example, we're going to see how to use CSS to achieve some animation effects, like those we saw earlier in the course. So just as a quick refresher, I'm going to open up the finished version of the fade effect example. And remember, we had the ability to fade out an element and fade it back in, and we also saw an example of an element with multiple properties being animated. So let's open up the animating example as well and I'll click the all properties button and the element animates on the page. All right, so let's build the same effects using standard CSS in the browser without using any [[JavaScript]]. Okay, let's open up our start version of migrate effects. So before we get started, I want to point out that CSS-based animation is a complex subject. So I won't go deep into all of the examples that we learned about earlier. I'm choosing an example that's easy enough to demonstrate using CSS to give you a starting point to learn more. There are several good courses here in the library that cover CSS animation and I would suggest you check those out. So here in our code, let's build the animation first. So here, I have the element in the page, right? This is the div that we're going to animate. And I have the original jQuery animation code example
>
> **[1:35](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=95)** commented out so we can compare it. All right, let's go give ourselves some more room to work. To animate an element in CSS, we first need to define a style that represents the appearance of the element that we will animate to. So let's go ahead down here in the style section and I'm going to add a new style sheet for the div, and I'm going to call it animated. And it's going to have a width of 500 pixels, a left of 500 pixels, and a font size of 24 points. So that's the state it will be in when animation completes. And you can see that that's the same as the jQuery version right here. All right, then we need to define how the animation will take place. This is done by adding a transition property to the elements style sheet. And again, there's a great many options on how to do this. So to keep things simple, I'm going to use the CSS shorthand property for this. So here in the style sheet for the elements, I'm going to add transition. So I'm going to transition all the properties in the animation over a period of one second, and we're going to have an ease-in-out easing function. All right, so to trigger the animation, I'll add this new animated class to the element when the button is clicked. So let's go back up here
>
> **[3:10](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=190)** and what I'm going to do is get a reference to the div,
>
> **[3:18](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=198)** and I'm going to write addClass, and I'm going to add the animated class. So this will cause the transition to kick off and the browser will animate the properties specified. All right, so let's go ahead and try that. Let's bring this up in the browser. So I'm going to click on the animate button and you can see sure enough, the element animates. In fact, this even works with color animations. Let's go ahead and add a color to the end state. So back down here, let's add a background color of [[Microsoft Azure|azure]], right? So we'll save that. Let's go back to the browser. Let's click on animate again. And you can see that sure enough, the element starts out as a darker blue and all the properties animate over time and ends up being azure colored. All right, so that's the animation effect in CSS. Now let's add the fade out effect. So for this example, we're going to use CSS animation key frames. So let's go back to the code. First, I'm going to define the style for the end state of the animation. So that's going to be theDiv., and I'm going to call it fadedout. And the animation is going to be a fade out animation. I'm going to create that animation on my own in a second. That's a name that I define. It's going to happen over one second, it's going to be linear,
>
> **[4:52](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=292)** and I'm going to use the forwards keyword. So this is very similar to the transition property. In this case, I give the animation a name, which I've chosen as fadeOut. It will execute over one second in a linear fashion and the forwards keyword means that the animation should stay in the end state when it's reached. It shouldn't reset itself back to the beginning. Now I'm going to define the key frames for the animation, and I do that by using the key frames. And this is where I name my animation fadeOut. And again, there's a couple of ways to define key frames. In this case, I'm going to use the from and to keywords. So I'm going to be animating from an opacity of one to an opacity of zero, and a display of none. So it actually disappears from the document. So we already have the button in place that toggles this class, so let's run this. And just so we scroll back up, right, we can see that there's a toggle class. So it puts the fadedout class, which is what we just created right here. This fadedout class and this key frame animation combine to make the fading effect. All right, so let's go ahead and run this, open it up in live server, click fade element. And sure enough, you can see the element fades out.
>
> **[6:30](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=390)** Now when I click it again, right, the element immediately reappears, and that's because I didn't define a fade in animation. I'm going to leave that to you as an exercise if you feel like trying to add that. You can use my fadedout code as a starting point. I'll give you a hint, you'll have to reverse the opacity and the display properties. There are also animation related events that your code can listen for to determine when certain points in an animation have been reached. Just like in jQuery, we were able to define, for example, a completion function. I'm going to add an event listener that triggers when the animation is complete. So let's go back to the code. And what I'm going to do is up here in my code, right, I am going to get a reference to theDiv, and I'm going to use the on event function. And the event I'm going to listen for is animationend. And that's going to be a function. And that callback function is going to simply get a reference to the content div. And I'm going to append a paragraph that says Animation Complete. Okay, so let's go back, let's save, let's run this again. So I'm going to fade the element out
>
> **[8:03](https://www.linkedin.com/learning/jquery-essential-training-24696205/migrating-effects?u=76281980&t=483)** and sure enough, you can see that the animation complete string gets added when the animation is done. Now, you might be thinking this is a lot of effort to go through to get some basic animations working. And you're right. Thankfully there are some pretty good animation libraries you can check out that have some great prebuilt animations you can use. One of my favorites is Animate CSS. So let's just search for that. So that's this website right here. So this library called Animate.css has a whole bunch of predefined animations you can make use of. You can find it at this link right here. And you can see that there's a whole bunch of, you know, animations that are ready to be used. Let's take a look at a couple, right? You can do back out, back out left, and so on. In general, it's better to use the native browser animation features whenever possible to get the best performance. So this is an area where I would focus my migration efforts first if you're using jQuery for animation features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[JavaScript]] (1)
> **Env Vars:** css (10)
> **Code Identifiers:** jquery (4), thediv (2), fadeout (2), addclass (1)
> **Cross-References:** go back to (3), earlier in (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), toggle (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** similar to (1), just like (1), for example (1)

#### [Odds and ends](https://www.linkedin.com/learning/jquery-essential-training-24696205/odds-and-ends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/odds-and-ends?u=76281980&t=0)** - [Instructor] There are a couple of other features of jQuery I want to touch on regarding migration, and those are creating content and working with CSS. So, let's start with CSS and we're going to open up the MigrateMisc file here in our editor. So, previously in the course, we saw how to use jQuery to manipulate CSS classes on a set of elements, and there are standard [[JavaScript]] equivalents for doing this now. So, I've left the jQuery code for each of the previous examples in place, but commented out, so you can compare the JavaScript code to the jQuery way of doing it. So, remember to add a class to a selection, we use the addClass function and JavaScript has something similar, but in this case, each element has a class list property that we work on instead. So, to add a class to an element, what we do is we use querySelector and then the add function on the class list property. So, I'm going to create a temporary variable and we're going to use querySelector, and in this case, we're going to get a reference to para1 like we did in the original example, and then on the element, there's a class list property, and I'm going to call the ad function. And if I remember correctly, yes, it was called pClass, so I'm going to add pClass. Removing and toggling classes are similar. In the ad case, we're just working on a single element, but let's see how to use querySelectorAll
>
> **[1:32](https://www.linkedin.com/learning/jquery-essential-training-24696205/odds-and-ends?u=76281980&t=92)** to work on multiple elements. So, in the jQuery case, right, this is a single line of code to get all the P tags inside the example div, and in JavaScript, we have to write something a little more verbose. So, I'm going to write let elems, and I'm going to use querySelectorAll to get all the paragraphs in the example div, and then I'm going to write elems.forEach, and then for each element, I'm going to remove pClass, right? And then the code is similar for the toggle case, so I'll just copy and paste this. And there's a toggle function, so I'll just use that. All right, so let's go ahead and run this in the browser. Okay, let's go ahead and click on the Add Class button and we can see that the green text shows up and that seems to work. The Remove button removes it. And let's go ahead and click on Toggle. So, Toggle will remove and add the class to all the paragraphs, and remember, Remove also works on all of them, right? So, the effect is the same, but you can see that the code is a little bit more verbose
>
> **[3:05](https://www.linkedin.com/learning/jquery-essential-training-24696205/odds-and-ends?u=76281980&t=185)** than in the jQuery cases. Now let's look at the creating content example. So, remember earlier in the course we used the text function to change the text content of an element, and I have the jQuery code here that showed how to do that. To do the same thing in JavaScript, we're going to use the querySelector function again and then the text content property. So, let's get a reference to the last paragraph. So, inside the example div, I'm going to use the last-of-type selector, and then I'm going to write textContent is equal to, "I've changed the last paragraph". And we also saw how to append content to an element using the jQuery append function. And again, that's this example right here that I've left commented out. In this case it's a little bit more involved. What I need to do is use the DOM standard functions to create a new paragraph. So, I'm going to create an element which is going to be a paragraph tag, and then I'm going to use the appendChild standard DOM function to append text to it. So, I need to call document.create text node,
>
> **[4:41](https://www.linkedin.com/learning/jquery-essential-training-24696205/odds-and-ends?u=76281980&t=281)** and that's going to be the new paragraph, and then I have to use the querySelector function to get a reference to the example div, and then I'm going to call appendChild and add the new paragraph to the end of my div. Okay, so let's save, let's go back to the browser. All right, so now I'm going to click on Change Text and we can see that sure enough, the last paragraph changes, all right? Now let's click on the New Paragraph button and you can see that the new paragraph gets added. So, once again, the jQuery code is more compact than the standard JavaScript code, but the end result is the same. Now, in practice, jQuery actually uses the same underlying standard DOM functions and properties that you would use in [[Vanilla]] JavaScript code, but the syntax is much more lightweight than having to write the same code in plain JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (8), [[Vanilla]] (1)
> **Code Identifiers:** jquery (10), queryselector (4), pclass (3), queryselectorall (2), appendchild (2)
> **UI Navigation:** toggle (4), click on (4)
> **Env Vars:** css (3), dom (3)
> **Cross-References:** earlier in (1), go back to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **Best Practices:** remember to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/jquery-essential-training-24696205/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jquery-essential-training-24696205/next-steps?u=76281980&t=0)** - Well, that brings us to the end of the course. I hope you enjoyed learning about jQuery, the most widely used [[JavaScript]] library in the world, and what makes it still incredibly useful after all these years that it has been available. Whether you are starting a new project, or working on an existing code base, you should now have the knowledge and confidence to work with jQuery code. I encourage you to keep on learning about JavaScript, and there are many other courses here in the online library that can help you do just that. Be sure to connect with me on [[LinkedIn]] and share your thoughts on the course, and be sure to check out some of the other titles that I have here in the library. I am looking forward to seeing you again in another one of my courses soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[LinkedIn]] (1)
> **Code Identifiers:** jquery (2)
> **Speakers:** - well (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/jquery-essential-training-5915453)

## Skills Covered

- Web Development
- jQuery
- Front-End Development

## Path Context

### In [[Explore a Career in Front-End Web Development]]
← [[JavaScript- Modern Browser APIs]] | **11 of 11**

## Appears In

- [[Explore a Career in Front-End Web Development]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — Web Development, Front-End Development
- [[Learning Functional Programming with JavaScript ES6+]] — Web Development, Front-End Development
- [[Building Modern Projects with React]] — Web Development, Front-End Development
- [[CSS- Advanced Layouts with Grid]] — Web Development, Front-End Development
- [[HTML Essential Training]] — Web Development, Front-End Development

---

[↑ Back to top](#)