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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Patterns.md)

![JavaScript: Patterns](https://media.licdn.com/dms/image/v2/C4D0DAQHK-x5Xftt6NQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1587058479192?e=2147483647&amp;v=beta&amp;t=U0Gt3GbuVOnDnX2qplT7EQa2yol6gme3ou1amwg-D4A)

# JavaScript: Patterns

> For the past two decades, programmers have structured both their code and their conversations about code around the patterns first described in Design Patterns, the classic Gang of Four book. JavaScript programmers have participated in these conversations, but the patterns discussed mostly fit in the world of orthodox object-oriented programming. In this course, Emmanuel Henri explains how these p

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-patterns-2) | 1h 57m | Intermediate | 31K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [JavaScript design patterns](#javascript-design-patterns)
  - [What you should know](#what-you-should-know)
- [**1. Introduction**](#1-introduction) (5 videos)
  - [What is a pattern?](#what-is-a-pattern)
  - [Setting up your base project](#setting-up-your-base-project)
  - [Functions as first-class citizens](#functions-as-first-class-citizens)
  - [What is a callback and its role?](#what-is-a-callback-and-its-role)
  - [CoderPad introduction](#coderpad-introduction)
- [**2. Creational Patterns**](#2-creational-patterns) (6 videos)
  - [What are creational patterns?](#what-are-creational-patterns)
  - [Class design pattern](#class-design-pattern)
  - [Constructor pattern](#constructor-pattern)
  - [Singleton pattern](#singleton-pattern)
  - [Factory pattern](#factory-pattern)
  - [Abstract factory pattern](#abstract-factory-pattern)
- [**3. Structural Patterns**](#3-structural-patterns) (9 videos)
  - [What are structural patterns?](#what-are-structural-patterns)
  - [Module pattern](#module-pattern)
  - [Mixins pattern](#mixins-pattern)
  - [Facade pattern](#facade-pattern)
  - [Flyweight pattern](#flyweight-pattern)
  - [Decorator pattern](#decorator-pattern)
  - [Model-View-Controller (MVC) pattern](#model-view-controller-mvc-pattern)
  - [Model-View-Presenter (MVP) pattern](#model-view-presenter-mvp-pattern)
  - [Model-View-ViewModel (MVVM) pattern](#model-view-viewmodel-mvvm-pattern)
- [**4. Behavioral Patterns**](#4-behavioral-patterns) (9 videos)
  - [What are behavioral patterns?](#what-are-behavioral-patterns)
  - [Observer pattern](#observer-pattern)
  - [State pattern](#state-pattern)
  - [Chain of responsibility](#chain-of-responsibility)
  - [Iterator pattern](#iterator-pattern)
  - [Strategy pattern](#strategy-pattern)
  - [Memento pattern](#memento-pattern)
  - [Mediator pattern](#mediator-pattern)
  - [Command pattern](#command-pattern)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [JavaScript design patterns](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/javascript-design-patterns?u=76281980&t=0)** - Have you been looking for a place to understand this mystical term that is [[JavaScript]] [[Design Patterns]]? Have you been looking for a way to better understand how to have industry standard best practices in your code? If you answered yes to any of these questions, you've come to the right place. In this course, we'll take a look at the most common patterns in JavaScript and demystify their purpose and some code examples for practice. Hi, I'm Emmanuel Henri, and understanding design patterns is always something we should all aspire to, and it'll be my pleasure to share my knowledge around this often misunderstood subject. We'll first get started with some basic terminology to get you off the ground. Then we'll move onto the creational patterns such as singleton and more. Next, we'll explore the structural patterns such as mixins and decorator. And finally, we'll take a look at the behavioral patterns like the state observer pattern and more. So if you're ready to master all kinds of design patterns in your JavaScript code, grab your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Design Patterns]] (3)
> **Analogies:** such as (2)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-patterns-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-you-should-know?u=76281980&t=0)** - For this course, you should have a good foundation with [[JavaScript]] syntax, especially around ES6 and above, as many of the patterns explored will be written in this version. If you're not familiar with scoping, classes, and many of the initial [[Programming Foundations]] of the language, stop this video, and take a few JavaScript courses. Besides this, you can use any type of editor you wish, but if you want to follow along in the same editor I use, get VS Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Programming Foundations]] (1)
> **Env Vars:** es6 (1)
> **Tools:** vs code (1)
> **Speakers:** - for (1)


### 1. Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a pattern?](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-pattern?u=76281980&t=0)** - Before we get started on our [[Design Patterns]] journey, what is it exactly? The academic definition is a general, reusable solution to a commonly occurring problem within a given context in [[Software Design]]. Oof, in simple words, it's a way that has been defined as a proper approach to resolve common problems in code. If that still doesn't make sense, think of you you've learned how to divide two numbers in math. You need to follow a specific pattern to be able to properly get the solution, right? And the way I divide numbers or learn it when I was young might even be different to how you learned based on where you learned it, from or when. This is exactly what a pattern is, a way to resolve a problem. In this course, we'll focus on patterns that relates to [[JavaScript]]. We'll look at many different patterns and they are split into three categories. Creational, where these patterns create new things. Structural, where we use these patterns to structure our code. And finally, behavioral, where these patterns are used for behavior purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1), [[Software Design]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### [Setting up your base project](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=0)** - [Instructor] So let's go ahead and set up our base project and install an extension to turn on live server inside of VS code. So the first thing we're going to do is go inside of VS code, so if you don't have it installed, you can install it directly from the site and search for it on [[Google]]. And then once you have it installed, you can open Visual Studio code, like so. And what we're going to do first is install the extension. So you go into the extension here, and then we're going to look for live server, like so. And once you find the first one here, it's called live server, you can click on it, and then install live server. So what is this going to do is basically have a live server and run our [[HTML]] automatically. So we won't have to install a server to actually run our page that we're going to use for doing our code. So let's go ahead and install it. And once this is actually good to go, we can actually go and start coding. So let's go and minimize this for a second, I'm going to go into my desktop and then create a base server. So right click on new folder if you're on a Mac, and then create a new folder if you're on a [[Windows]], and then let's just call this base. And then we're going to drag and drop this into Visual Studio code. And if you're on a Windows, you can right click on the folder and open with Visual Studio code. So we're going to create two files here, the first one is going to be an index.HTML, so let's go and create a new file like so called this index.HTML. And then we're going to create the [[JavaScript]] file
>
> **[1:35](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=95)** that we're going to run our code. So we're going to name this index.js. So create a new file index.js, like so. In the index dot.js just to test our base server, we're going to do a console.log so you can use the shortcut log, and then inside of it, we're going to do "Hello". Once you have this, you can save this code, and then go into the index.HTML, and I'm going to use Emmet, to actually create the document here. So if you don't know what Emmet is, you can go into edit here, you can have a whole bunch of shortcuts to create code in CSS, in JavaScript, and also in HTML. so let's go ahead and create a document, so I'm going to do doc for document and then hit tab, and it's going to create a document for me. And what I'm going to do is simply change the title. So you can name this anything you want. I'm going to call this [[Design Patterns]], like so. And then in the body, we're going to load the script. So basically load this index.js file that we're going to use as we write code for our patterns. So let's go back to our index and then load this script. So I'm going to use script like so, source and the source file is the index.js, and you can actually use auto completion here and scroll down to what you need. And then simply close that tag, and it's going to close it automatically. And then save this file.
>
> **[3:09](https://www.linkedin.com/learning/javascript-patterns-2/setting-up-your-base-project?u=76281980&t=189)** Okay, so now let's go ahead and turn on our live server. So you can bring up the menu to turn live server on by doing cmd + shift + p on a Mac, or Ctrl + Shift + p, on Windows. So cmd + shift + p, and then type live server, or live, and then what we want to do is open with live server. So I'm going to go ahead and click on that. And now what's going to happen is live server has actually open our HTML page, which has loaded automatically the JavaScript file that we have. So if we look into the console.log for this guy, and you can do that by clicking on the three dots, go to more tools, go to developer tools, or use the shortcut and go to the console, you're going to see that we have our console.log Hello. Don't worry about that because we don't have a favicon for this HTML page, you're going to see that message but no worries. So we have our console.log here and we're good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Windows]] (3), [[JavaScript]] (3), [[Google]] (1), [[Design Patterns]] (1)
> **File Paths:** index.js (4), index.html (3), dot.js (1)
> **Env Vars:** html (7), css (1)
> **UI Navigation:** click on (4), go to (3), scroll down (1)
> **Prerequisites:** install (6), set up (1)
> **Tools:** visual studio (3), vs code (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)

#### [Functions as first-class citizens](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=0)** - [Instructor] You may have heard of this term functions as first-class citizens from time to time and wonder what does that mean? It means that functions can be treated like a variable. Meaning, they can be passed as arguments to other functions. It can be assigned as a value to a variable or even return in a function. It means that function is a first-class citizen. Let me demonstrate. So, let's go back to our index.js and we're going to write some code. So, feel free to keep this if you want to but I'm going to remove this and then start by creating a function. So, we're going to do const calc equals and we're not going to pass any arguments, and then returns a function here. So, this function will return four times three, like so. And then, what we're going to do is use this function and then use it as a variable. So, let's go ahead and create a new variable aNumber and then pass that function inside of that variable. And then, what we could do is console log aNumber. So, what happens here is we're creating a function first and then we're creating a variable that holds that function. And then inside of the console log, we're returning what this function is. So basically, we should see 12 as the result in the console log. Sp basically, the function is here and passing to that variable and then run into this console log. So, let's go ahead and save this.
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/functions-as-first-class-citizens?u=76281980&t=93)** And then, what we're going to do is go back to our browser and if you wonder if live server is on, you can take a look at here. If port 5500 is on, that means that live server is on. So, let's go back to our browser and then you should see the number 12. This is mainly what we've done. We used functions as first-class citizen. So, if you've ever wondered what someone means when they were saying functions as first-class citizens, this is exactly what they mean. So, we could use functions everywhere as variable or as something that we're returning inside of a console log or whatever. So, this is what is means when we're saying first-class citizen for functions.

> [!info]- Semantic Content
>
> **Definitions:** means that (3), is a  (1)
> **Cross-References:** go back to (3)
> **Code Identifiers:** anumber (2)
> **File Paths:** index.js (1)
> **Ports:** port 5500 (1)
> **Speakers:** - [instructor] (1)

#### [What is a callback and its role?](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=0)** - [Instructor] Another term that you may have heard many times and not quite sure what it means is the callback. What is a callback and its role? In its simplest terms, a callback function is a function that is called inside of another function. In other words, whenever you pass a function in the arguments and run it inside the function, you're doing the callback pattern. Let me demonstrate. So we're back into Visual Studio Code in the index.js and what we're going to do is keep the calc function. And I'm simply going to change the return to four times four so we have a different number. And then what we're going to do is remove these two here and I'm going to create another function, like I said, we need to create a new function that we're going to call printCalc. And we're going to pass as the callback the argument callback. And it's going to make sense to you in a couple of seconds, so let's continue. And then let's open our function and inside of that function we're going to do a console log. So I'm going to use the shortcut log. And inside of the log I'm going to pass the callback that I'm actually have as an argument here. And this is the function so I'm going to return the function and execute it. So what we're going to do next is execute that function printCalc. So let's go and do that. And then inside of it we're going to pass
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/what-is-a-callback-and-its-role?u=76281980&t=94)** this function calc here. So let me summarize this in a second. So what's happening here? We've created a function here and then we created a second function that uses a callback. Again, this is a function inside of a function. So the callback is the argument and then we're going to execute the callback function inside of the console.log. So when we execute this function here, we're passing our initial function. So this function is what we're using inside of the argument here and passing it down to the console.log. So in theory, once this is actually executed, we should return four times four in the console.log. So it's a complicated way to actually return a number here, but this is what a callback is. So let's go ahead and save this and make sure Live Server is on so if you see port 5500 here, that means it's running and then let's go back to our browser. And then I have the number 16. So basically this is what we're expecting as the behavior of this callback function. So if you ever hear again somebody talking about callback, this is what it is. We're basically using a function inside of a function.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1), in other words (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** printcalc (2)
> **File Paths:** index.js (1)
> **Ports:** port 5500 (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad introduction](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/coderpad-introduction?u=76281980&t=0)** - [Instructor] In this course, you'll have an opportunity to be tested on the knowledge you'll gain throughout, and we're doing this through a series of coding challenges. When you first open a coding challenge, you'll be presented with four areas. The top left gives you the specific instructions on what is the goal of the challenge and what you need to accomplish. The screen on the top right is where, in most cases, you'll have to add or change the code to make the test a success or render the component properly, which you see in the bottom-left screen. Finally, in the bottom right you see the test code, which you might have to change or add new code in some exercises. Just follow the comments and instructions to see where you need to change or add new code. Once you're done updating, you can either test or submit your code to finalize your test. Know that once it is submitted, you won't be able to edit the test anymore, so if you're not sure, test your code first. Finally, know that there's a time limit to this test, which you can see in the top right. Right now I don't have it because I am basically in preview mode. You should have ample time to finish the challenge, and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Creational Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [What are creational patterns?](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-are-creational-patterns?u=76281980&t=0)** - With all these terms you'll hear throughout the course, you might be wondering about what is a creational pattern in [[JavaScript]]? Simply put, they are patterns that control the creation process of an object. Although, in this course, we focus on JavaScript patterns, it is also true for any languages that use this pattern. In this chapter, we'll explore patterns that involve the creation of classes, the constructor pattern, the singleton, the factory, and the abstract factory patterns and how they allow us to efficiently create new objects in JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### [Class design pattern](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=0)** - [Instructor] In this chapter, we'll start covering all the patterns that are useful to create new items in your code, and we'll start with the prototype in class pattern. So in my course, [[JavaScript]] classes, we've explored this pattern with many examples, but in short, the prototype class pattern allows us to define a blueprint for a specific type of item, and then reuse it by creating a new object from that class. So let me demonstrate with some code. So let's go ahead and remove all that code. So if you want to keep it, save it into a different file. I'm going to go back to index.js and then create a class. So we'll create a car. So let's go ahead and create a class called car. And then in that class we'll use a constructor to define the blueprint of that class. So let's go in, create the constructor, and that car takes doors, an engine and it takes a color. So whenever we create a new car from that class we'll have to pass these different elements. And then in that class we need to pass this doors equals to doors and then do the same for engines, so if you want to copy this code here, like so, and paste it below, and then all we have to do is change to engine, so let's copy doors, and then I'm going to option click to the second door so I can do a change on both. And that's a little trick for Visual Studio code. So I'm going to do engine and then what we'll do is paste that code again and then change it to color.
>
> **[1:37](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=97)** So I'm going to click here, and then option click on the second door and then change this to color, like so. So now we have our constructor, so we can build a new car from our class that we just created. So the purpose of the class is basically to set the blueprint for new objects that we're going to create. So now let's go ahead and create a Civic. So this Civic takes what? It takes a number of doors, an engine and a color. So let's go ahead and pass a new car, so we're using the class that we've just written and pass the argument, so it needs doors, so we'll pass four doors, and as an engine, we'll pass a V6, I don't believe that's correct for a Civic, but I'm not a car expert, so I'm just going to pass that for now, and then pass the color gray. And now we have created a brand new object from the constructor here, so from this class car, we created a new object called Civic with the new class car and pass these options. So now if you want to see it inside of our live server, we can do a console log, so let's do console log and then we'll pass the Civic. And let's save this to make sure, and make sure that live server is running by checking the port 5500 here and then let's switch back to our browser. So when you get back to your browser, you'll see that now we've passed an object or a class called car with a new Civic which has four doors, an engine, V6, and then color gray.
>
> **[3:15](https://www.linkedin.com/learning/javascript-patterns-2/class-design-pattern?u=76281980&t=195)** So this is how you use a class to create a new object. And basically the class is the prototype or the blueprint for that new object. So this is how you can use classes to create a new object inside of JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **CLI Commands:** make (2)
> **File Paths:** index.js (1)
> **Ports:** port 5500 (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Constructor pattern](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=0)** - [Instructor] Similar to the class prototype pattern, the constructor pattern is one step further from the class pattern, where we leverage a class created to create an extended class from it. Let me demonstrate. So we'll leverage our car class here, and as you can see we already have a constructor, but the actual pattern itself is something else. So the constructor allows us to create a new object from the class. But what if we would like to create an SUV class and extend this class from it? And that's what the constructor pattern is and why you would use it. So let's go ahead and do that. So the first thing I'm going to do is create a new class called SUV. And we're going to extend the car class. So basically we're leveraging the constructor we already have in this class, and then we'll extend it with other items. So let's go ahead and do that by creating the class and then the constructor will still have doors because we're passing the constructor here. Still have an engine and still have color. So what we'll do in order to be able to use what is inside of that constructor for that class is do a super. So if you've done any [[React.js|react]] code, you're familiar with this. So basically what we're doing is creating a new class and extended react. And then in the constructor we're doing super props. So that's exactly what we're doing here. So we're basically passing the doors, the engine, and the color in the super function here
>
> **[1:38](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=98)** and then what we'll do is add what we would like to have as extra stuff for the SUV. Or extra element or argument we can pass to that class. In this case we'll do this wheels and add a default of four. So what is the default is basically if we don't pass any value to this wheels, it'll have a value of four. So let's go ahead and create a new car. So we have a civic car, so now we're going to create a cx5. So this is the car that I have. And let's go ahead and create this SUV with the class SUV like so. And then we have four doors, it's a V8 engine. Again I don't know anything about cars, even my own. So I'm not sure if V8 is the right one. And then the color red, which is the color that we have. So now we can go ahead and console log this cx5 as well. So let me just summarize what I just done. So I created initial class in the previous video, then I'm extending that class as an SUV class by passing the doors, engine, and color, and then also setting this wheels as an extra element or argument that this class can take. And then creating a new SUV with this constructor pattern or this extended car class with the SUV class.
>
> **[3:12](https://www.linkedin.com/learning/javascript-patterns-2/constructor-pattern?u=76281980&t=192)** And then I'm console logging these guys. Okay so let's go ahead and save this. And let's go back to our browser. And now you're going to see that we have both classes or both cars and the SUV mentioned and printed out. So we have the values that we're expecting. So the initial car, the civic, has four doors, V6 engine, and then color grape. And then we have our SUV, which is basically the cx5, which has four doors, an engine of V8, color red, and then you see a new value which is called wheels and has four wheels. Which we extended with the constructor pattern. So this is how you could use many constructors to extend one class to the other. And you could go even further, so if we go back to the code, you can create a brand new class of car extending the SUV. So you could go one layer on top of each other and then extend, extend, extend, multiple classes to create different categories of cars. So when you want to create multiple sub-categories of a class, the constructor pattern is a great way to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2)
> **Env Vars:** suv (11)
> **Cross-References:** go back to (2), previous video (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Singleton pattern](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=0)** - [Instructor] The singleton pattern can be intimidating when you first hear about it. But you'll see how simple it is, once you understand, that it's simply preventing our class from creating more than one instance of the blue print we've defined. In other words, we use the same principles we've used since the beginning of this chapter, except, we allow only one instance of the class to be created. So, let me demonstrate with some code. So, let's go back to our index.js and what we're going to do first is create a variable, where we'll pass a null variable. So let's go ahead and let instance first null. So basically, when we first start our creation of the instance, it's null. So, that means it's going to allow the class to create a new object. So we're going to make a few changes in a class car. This is all the same, except what we're going to do is insert some if and then else. So, first, we're going to do a if, so if the instance is null, so right now it is, we're going to go ahead and create a new object. So, what we're going to do, is basically, cut this and put it inside of our if statement, like so. And then what we're going to do in the instance, we're going to make it equal this. So, if this is true, it's going to create a new object, else, then just return instance. And then what I'm going to do is just clean that up.
>
> **[1:35](https://www.linkedin.com/learning/javascript-patterns-2/singleton-pattern?u=76281980&t=95)** So, let's go ahead and comment this extension of the car class with the class SUV and then what we're going to do is create two instances of our object, which are those two. We're just going to change the CX5 for a Honda, and then instead of doing new SUV, we're going to do a new car. And you can keep these values here, so let's just change the number of doors to two. And then we're going to first console log the Civic and then console log the Honda. So, if we go back to our code and take a look at what we've done, is inside of this pattern we've actually introduce some if statement. So, if there's already an instance of that class car, as an object, though, we have two instances here, then return the instance. So, let's save this and let's go back to our browser. And as you can see, we've already created an instance of that car, therefore, it's going to return the same instance. So, if we go back to our code, we were trying to create a new car call Honda, with two doors, V8, and then color red, but it hasn't create that instance because, there's already one. So, that's what the singleton pattern is. So, basically what it does, it checks for instance of that class car and if there's already one, then just return the instance that we have. Otherwise, you can go ahead and create a new one. So, that's basically what a singleton pattern is.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4)
> **Env Vars:** suv (2), cx5 (1)
> **CLI Commands:** make (2)
> **File Paths:** index.js (1)
> **Definitions:** in other words (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Factory pattern](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=0)** - [Instructor] The factory pattern is great when you want to create, say, a mechanism to create other objects. Good example would be a factory for creating cars. This can be useful when you want a factory to handle most of your classes and then simply use this factory method to create your new objects. Again, this is best demonstrated in a code example. So let's go back to our index.js and what I'm going to do is refactor some of that code to resemble what we had before for the class car. So I'm going to basically remove the if and else, like so. And remove the return instance. And now we should be good to go. I'm just going to re-indent this properly and remove the space in here. So basically your class car should resemble something like this. So basically what we had before. Constructor passing the doors, engine, color, and then boom, boom, boom. And, of course, let's remove the instance here, like so. And remove it at the top right here. All right, so now we're back. And I'm going to remove line nine through 14, just for cleanliness. So if you want to keep this, feel free to keep it. I'm going to remove it. All right, so now what we need to do is create the factory, so in this case the car factory. So let's go ahead and do class, and we're going to call this carFactory. And this carFactory will basically be the function that will create new cars for us automatically.
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=94)** So inside of it we'll have a createCar function, which basically takes a type, so what type of car we want to create. And then inside of this, we'll have a switch statement, and basically the switch statement will take the argument of type. And then basically we'll have two cases in this case, but you could add as many cases as you want in your carFactory. So I'm going to have one case where I'm passing the type of civic. For the cases you can basically do whatever you want, so if you want to have more general cars, like SUVs, sedans, or stuff like that, but I'm going to be specific just for demonstration purposes. And for this case, we'll return a new car, which is the class above here, which takes a few things. So what we could do is basically grab this civic here. So I'm going to basically grab all the stuff I have inside of the new civic that I created below. And, as you probably guessed it, we'll remove that. And then we'll have a second case where we'll create a Honda. So let's go ahead and create a new case, case where the type is honda. We'll return a new car, and let's go ahead and select this here. Now that, and I'm going to paste it right here like so. So I've created a car factory that will basically,
>
> **[3:10](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=190)** based on type, create either this car or this car. So now all we need to do is initialize this factory, so we're going to go ahead and initialize the factory, or you can name this anything you want, with a new carFactory. And this is a function, so we need to basically execute it once we have it. So now we don't have a car, we have a car factory that's ready to create cars for us, but we don't have a car. So let's go ahead and create a Honda, and let's do something more specific, so myHonda. And then use the factory that we just initialized, so basically we initialized this factory here, which is based of the carFactory here. And then what does this factory has as a function? It has a createCar function. So basically you use the first function that's inside of that carFactory. And then we're passing a type, so we need to pass a type to this function. So the type that I'm going to pass is a honda because I want to create a Honda. And now let's make sure that we console log this one. And we simply have to console log the myHonda, so I'm going to change this to myHonda. All right, so let me just quickly summarize what we've just done. So we have our class car that we've used since the beginning of this chapter. Now we're using this class car inside of the class factory.
>
> **[4:42](https://www.linkedin.com/learning/javascript-patterns-2/factory-pattern?u=76281980&t=282)** So this is a factory. So basically creating multiple classes for us automatically based on the type that we're passing to that factory. So this is what a factory is. It creates anything we want based on the type that we're passing. So this is very efficient in big, large applications where you want to quickly create new objects through a factory or one function where you're passing a type and then it create the objects for you. So this could be, for example, used for users, the types of users that you want to create in an application. Or if you're building out a game, what type of characters are in the game based on the type that you're passing inside of the factory. So right now, we've actually created the factory, initialized it here, then use this factory to create a new honda in here. And now we actually are console logging the honda. So let's save all this and now make sure that Live Server is on. If you don't see it, you should see basically a button you can actually initialize your Live Server. Once this is actually live, you can go back to your browser and, as you can see, we have a new car with doors two, V8 engine, and color red. And that is matching what we have in our code because we created a Honda with two doors, a V8 engine, and a color red. So this is how you would use a factory to create multiple classes inside of an application.

> [!info]- Semantic Content
>
> **Code Identifiers:** carfactory (6), myhonda (3), createcar (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **File Paths:** index.js (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Abstract factory pattern](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=0)** - [Instructor] If you were to take the concept of factories further. The next step would be the abstract factory pattern. Where you abstract the factories and are able to create multiple factories, classes et cetera. So in our car example this would be a car company overseeing multiple factories. So lets take a look at what it would like in code. So lets go and copy what we have for our class car and our car factory and simply create new ones for SUV's. So what I'm going to do, is first copy all this. Like so and then paste it below. And this is going to be the SUV. So lets go and name this class SUV and then what we're going to do, is create an SUV factory. Pretty much the same way that we have our car factories. So right now what we have is ... Cars or a factory that creates cars and then we have a factory that creates SUV's. So if you want to visualize this. It's as if you had a car factory that creates simple cars and then another SUV factory somewhere in the East Coast where it's creating SUV's. So now how are we over seeing the whole process of creating cars? Well lets go ahead and initialize the SUV factory as well. And lets basically copy this. And then paste it below and then this one, we'll just call this SUV and lets make sure we call both ...
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=94)** by their proper names So car factory, like so. So we have a car factory and we have an SUV factory. So basically the factory abstract pattern would be the next step. So what we're going to do now, is create basically this big car or overseeing manufacturer. So lets go ahead and create the auto manufacturer, which is your abstract factory. And now what we need to pass is a type and then we'll pass also a model. And this is a function which basically again we'll use the same principles that we've used here, a switch. So the switch will have a type, that it will take and then inside we'll have a case where we have ... a car and then this car will return from the car factory. Create car and then we'll pass a model. So I don't know if you're seeing where I'm going with this, but it's basically taking this abstraction as a factory and taking it one step further. So once we have our manufacturer of cars, we'll pass first the type. So it'll select the type. So if we pass a type of car, then we're going to use our car factory to create a new model based on what we're passing as the model here.
>
> **[3:09](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=189)** And then we'll do this exact same thing for our SUV's. So this one we're going to do ... SUV. So if we have a SUV, now we're going to use the SUV factory. And we have the create car and now we're going to pass the model as well for that one. So this manufacturer will be able to create a car based on first the type of car, or the type of factory that we're using and then based on that factory create the model that we want. So lets just change the models for the SUV Factory here. So we're going to change it to CX5 and Santa Fe, which I know are two complete manufacturers, but again I'm not the car expert. What I'm trying to do here is just to show you through an example that's visual. All right so now that we have our abstract factory here. What we need to do is basically initialize a new car. So what I'm going to do is, lets go create a new CX5 and lets just remove all this. And were going to use the auto manufacturer and then pass inside of it, first the type. So SUV and then ... the actual model, like so. Now we've been able to create a brand new car with this manufacturer here. We're basically the abstract factory, like so.
>
> **[4:44](https://www.linkedin.com/learning/javascript-patterns-2/abstract-factory-pattern?u=76281980&t=284)** And then we could just console log this guy here, CX5. Okay, so. Whoops, I just saw something. So I need to change this here. So I need to change car factory to ... SUV and while I'm thinking about it. I think I- yeah, I need to capitalize my classes. We need to do this first. All right so, this is going to help a little bit. Okay, so now we have all this. Lets make sure we capitalize this as well, and this as well. All right so we have car factory, SUV Factory. Now we are good to go. All right, so lets save this. Lets make sure Lifesaver is running. And then lets go back to our browser and now we have our car that has been created for us. So if we check what we have here. We have four doors, engine, V6 and color gray. So lets see if that matches. We've created a SUV which was CX5. So lets go to our SUV Factory. We create a CX5, which has four doors, V6 in gray. And this is basically how you would use an abstract factory to create a whole bunch of cars.

> [!info]- Semantic Content
>
> **Env Vars:** suv (20), cx5 (5)
> **CLI Commands:** make (3)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Structural Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [What are structural patterns?](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-are-structural-patterns?u=76281980&t=0)** - Have you ever worked on a project where the code felt a bit disorganized and unstructured, where you could barely make heads and tails in between each files, and what was their purpose to the larger scheme of the application? We've all been there, and it can be a big mess to find a specific function when the code lacks organization. Well, this is where structural pattern come into play. If the creational patterns are focused on the creation of new code, the structural pattern are focused on how to properly organize your code. And this is what we'll spend this chapter on. We'll explore the module pattern, mixins, the facade, flyweight, and decorator patterns. Then we'll spend some time on the MVC, MVP, and MVVM patterns. These are about how you organize the structure of the larger application. So without further ado, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (1), mvp (1), mvvm (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - have (1)

#### [Module pattern](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=0)** The module pattern is probably the one pattern where if you are not aware you are using it; You'll be like, oh yes I know this one. The module pattern is used everywhere in our code. Especially if you use any frameworks. Whenever you're encapsulating a block of code into a singular function or a pure function, as it is sometimes referred to, you're creating a module. The idea behind using modules is to organize your code in pure functions. So if you have your code to debug, it is much easier to find where the error is. We often use modules too, with the key [[Microsoft Word|word]] import or export. So when we compile our code, we only use the code we need. In the exercise files there is a folder called node. So if you look into the exercise files, you'll find in the resources, this folder here. So copy the content of that folder into a new folder; or simply use it. So I'm going to create a brand new folder on my desktop. And I'm going to call it node. And I'm going to copy all the content. So make sure when you're actually copying the content from this folder to this folder. That you're seeing the hidden files. On [[Windows]] you should be able to select an option where you can see the hidden files and on mac is shift command dot. And you're going to see that if I had copied all these files into this folder I would be missing a very important file. The dot babelrc. So lets go ahead and copy all this, into the node folder.
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=94)** Paste it. And now lets open visual studio code with this folder. So I'm going to drag and drop this folder into visual studio code. Or on windows you can right click and open in visual studio code. So right now, we have an index file, we have the babelrc file that allows us to use the latest and greatest from [[JavaScript]]. So what I want to do is create a function inside of a file and then import this module into the main index. So let's go ahead and do that. So the first thing we're going to do is create a calc dot js file here. So I'm going to click on add file, calc dot js. Like so. And we're basically going to create the same function we did in the previous chapter. So, lets go ahead and create the calc function. And it takes no arguments. And we're going to return. Four times three. Which equals 12. And that's basically it. But before this becomes a module, we need to export it. So what we're going to do is use export. Default. And what we're exporting is calc. So basically we're exporting this function, so its going to be available in other files in this project, as a module. So lets go ahead and save this. And lets close this and lets go back to our index. And now what I'm going to do is update this code, so we can actually see the number 12 in the actual response of the server.
>
> **[3:09](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=189)** So this is a server. A node server. So the first thing we're going to do is import the module that we created in here. So lets go ahead and do that. Import calc. From. calc, like so. And then what we're going to do is create a variable that will hold the function and therefore execute it. And render the number 12. So lets go anumber. Equals and then use calc. And because its a function let's go ahead and execute it. So, this variable will basically hold the number 12. Because we are doing this calculation there. Let's make sure that this is, like so. Oh, I forgot to do this. All right so now its going to work. Now the next thing I need to do, is basically insert the number in my message here. So I was supposed to do node and express server's running on port 3000. What I'm going to do is change that template string to something else. So lets do something like, showing number and then lets pass, the value anumber on my template string and save this. So now as you may know we need to actually install the dependencies for a node server to work. So let's go and bring up our terminal first. And lets do [[npm]], install.
>
> **[4:42](https://www.linkedin.com/learning/javascript-patterns-2/module-pattern?u=76281980&t=282)** Or I. Perfect. And now as the npm start; we have this function that will start a nodemon server. So lets go ahead and do npm start. And our server is running on port 3000. So I can go to the browser now and actually make a call for local host port 3000. And this is basically what I'm going to call. And I should get this message, showing number 12 on port 3000. So lets go ahead and do that. So let me switch back to my browser. And this server shouldn't be running anymore, so lets go ahead and close it. And do local host 3000. Like so. Okay so now its showing number 48. So something's off here. So let's go back to my code very quickly. And let's take a look at the calculation. And that's probably why. So I did four times 12, as oppose to four times three. So when I said the word 12 in my head I probably written it, as oppose to do four times three. So you could either change this to four times three. And lets test this. Or keep whatever number you have in there. So if we go back to our server and make a call again now number 12 is showing as it should.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Microsoft Word|Word]] (2), [[Windows]] (2), [[JavaScript]] (1)
> **CLI Commands:** node (6), make (4), npm (3), find (2)
> **Ports:** port 3000 (4)
> **Cross-References:** go back to (3), previous chapter (1)
> **Tools:** visual studio (3), terminal (1)
> **Exercise Files:** exercise files (2), template (2)
> **UI Navigation:** drag and drop (1), click on (1), go to (1)
> **Definitions:** is a  (2)

#### [Mixins pattern](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=0)** - [Instructor] Mixins are a great way to mix functions and instances of classes after they have been created. In other words you could use mixins to add interesting functions to the car class we created earlier. So let me demonstrate. So I'm back into the index.js file right here from the base, so if you don't have it open you can grab it from the exercise files in the resources, and let's go ahead and add some code to this file here. So right now we have the car class, we have the car factory, we have the SUV class and the SUV factory. So what we're going to do is create a mixin that will have a console log with a rev engine, a message, so let's go ahead and do that. So the first thing I'm going to do is add a mixin right after my SUV factory, so line 39. So what I'm going to do is create a mixin by doing let car mixin equals and then this is going to be a function, and this function will basically be a console log so let's go ahead and use the console log and the console log will use template strings, so we're going to do something like this, the and then let's insert this.engine so we're going to pass the engine of which car inside of this particular function is doing vroom vroom, all right, so now we have our mixin created
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=93)** so what we're going to do now is leverage some of the code that we already have in here, so we have a car factory or a manufacturer right here and what we'll do now is create an object, so let's go and remove this, and we'll create an object. So object assign, so we're using and leveraging some functions from [[JavaScript]], car.prototype, we'll add the car mixin, so let me explain what's happening here. So what we'll do is create with the object.assign a mixin by matching the car prototype with the car mixin. So basically what we'll do is add this function to whatever car we'll create afterward. So let's go ahead and create a car. So this time I'm feeling like I want to create a Honda, so let's go and create a Honda, and use the manufacturer, so the auto manufacturer, and inside of it if you remember we're passing a type and a model, so we'll pass a car type, so this will create a car with my car factory, and I'll pass a Honda, so this car factory can create a Honda, so let's go all the way back to our car factory right here, if I'm passing a Honda this is what it's going to create. So I'm going to have an object that holds two doors, a V8 engine, and then a red car. But because I have a mixin here it's going to add the function rev engine to that car that we'll create
>
> **[3:08](https://www.linkedin.com/learning/javascript-patterns-2/mixins-pattern?u=76281980&t=188)** because of what we've done here. So let's go ahead and create this and then what we'll do is use the Honda object that we just created and then execute the rev engine function. So in theory if we didn't have this or the car mixin here this would run an error, but because we actually assign to every object that we create inside of our car manufacturer this particular car mixin that we've created here, so if you look at the car class we're adding the car mixin, this is going to be available for us to use. So let's save this, and now make sure that Light-Server is running, so if you basically turned it off after the last lesson, let's turn it back on again, and let's go back to our browser and as we can see the V8 is doing vroom vroom, so let's add a little bit of text to this so we could add the V8 engine is doing vroom vroom, let's save this, let's go back to our browser, and now we have the message the V8 engine is doing vroom vroom. So now we have this mixin or basically the function that we mixed with our class available to us and we can execute it whenever we want. So this is how mixin are working and you can use this in your code as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Env Vars:** suv (3)
> **Cross-References:** go back to (2)
> **Exercise Files:** exercise files (1), template (1)
> **File Paths:** index.js (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Facade pattern](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=0)** - [Instructor] What is a facade? It is basically the pattern of hiding complexity away by creating a facade for the complex code. So if you are thinking, wait, what? That's absolutely normal. If you're a [[React.js|React]] developer, or building components, you've been using facades every day. When you're building your component in any framework, you code the complexity of this component into a module, or file, and then leverage a simple line to render this component into your code. Well, this is what the facade pattern is. Grab the code from the React folder into the exercise files, and let's go through the components quickly so the facade pattern you have been using all this time makes a lot more sense. So let's open this folder, and in the resources you have a React application. Simply drag and drop it inside of Visual Studio Code, and I'm going to maximize this, and you have facades everywhere in React code, or Anguler, or any frameworks. Basically, right now I'm using a lot of modules here to hide complexity from this particular file. So right now I'm importing an app, which is a module, and then I'm actually using this app component in here to render it through the React render function. And this is exactly what a facade is. So basically, if I'm looking at that app.js file here, this is all the code that I'm actually loading inside of that facade. So whenever you're looking at code that is imported from another module, and then insert it into that specific file,
>
> **[1:35](https://www.linkedin.com/learning/javascript-patterns-2/facade-pattern?u=76281980&t=95)** like we just explored here, this is basically what a facade is, and that's as simple as it gets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5)
> **Definitions:** is a  (2)
> **File Paths:** app.js (1)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Flyweight pattern](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/flyweight-pattern?u=76281980&t=0)** - [Emmanuel] The flyweight pattern is a method to minimize recreating the same items twice, and therefore minimize the memory impact in our systems. You have to understand, whenever we create new items with our applications, we stack these items into memory. Your browsers uses the flyweight pattern to save images in memory so they don't load twice. And guess what? The flyweight pattern uses a similar approach to the singleton. So if we look at the code we've done with the singleton, it is similar. So if you go into the Exercise Files, and then open chapter two, and then video 02_04, and then look at the end folder, you can drag and drop that folder into Visual Studio Code, and then open up index.js, and this is basically the flyweight pattern in action. So what we're doing here, we're preventing the creation of another instance of the Car class. So if there is an instance then we're not creating another one, and so on and so forth. So this is exactly what the flyweight pattern is. We're preventing the creation of more items into the memory of our browsers, or wherever this application is actually running.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** index.js (1)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [emmanuel] (1)

#### [Decorator pattern](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=0)** - The decorator pattern is very similar to mixins, where we decorate code with classes or code that came from another area. There is actual syntax in the most recent versions of [[JavaScript]] and has been used for a while in TypeScript and is heavily used in [[Angular]] code. So the purpose of a decorator pattern, like a mixin, is to to take, for example, a class and extended it with other code. Because we've already done extends and mixin's let's see an example code on TypeScripts website how it would be implemented. The syntax will be similar in JavaScript once it is officially approved for use in a recent version of JavaScript. So go to [typescripeline.org/docs](https://typescripeline.org/docs) look for handbook and then scroll down until you see decorators. And then on that page scroll down until you see this example here. So this is a great example of decorator. So it looks very similar to mixin. So you're basically creating a function which is called F. And then you're creating a function which is called G. And then you're creating your class and decorating or adding or mixing these functions with the class. So if we look at back at our code. So if I'm opening Visual Code again with, let's say, our base here. So let's go back and bring Visual Studio Code. It would be very, very similar to what we've done here. So what I would do is use
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/decorator-pattern?u=76281980&t=93)** that particular carMixin as the function. And what I would do as opposed to add it an object.assign let's just scroll down here in an object.assign here, what I would do is add it to the actual class. So I would do something like @ and then the actual name of the function. So in this case, it's carMixin. So it doesn't work here because it's not official in JavaScript but this is how it would work inside of TypeScript. So I would have this carMixin now available in my class. So this is how you could use decorators to add or mixin other function with your classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Angular]] (1)
> **UI Navigation:** scroll down (3), go to (1)
> **Analogies:** similar to (3), for example (1)
> **Code Identifiers:** carmixin (3)
> **Definitions:** is called (2), is a  (1)
> **URLs:** [typescripeline.org](https://typescripeline.org) (1)
> **Tools:** visual studio (1)
> **Speakers:** - the (1)

#### [Model-View-Controller (MVC) pattern](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/model-view-controller-mvc-pattern?u=76281980&t=0)** - If you've been programming for a few years, you may or may not have heard of the Model-View-Controller pattern. But it is often the first thing you learn as you grow more experience as a developer. This pattern basically defines how an application should be split, and often reflects how your modules are organized within three simple categories, models, views, and controllers. The model is where your data resides, where you define your schemas and the models for your data. The views is where you have your views, or in most cases, the pure [[HTML]] of you application, where the visuals are. And finally, the controllers are where you have your logic of your application, the functions that makes your application run. Following this pattern, most developers split all the files and structure of their application following this pattern. And even sometimes name the folders with these labels. Nowadays, this approach to splitting your application has evolved especially with applications like [[React.js|React]]. Which is more MVVM? I will explore this shortly, but it remains the basis of how most frameworks and applications are structured. Having a good understanding of what this pattern is will go a long way to understand how most applications are organized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[React.js|React]] (1)
> **Env Vars:** html (1), mvvm (1)
> **Speakers:** - if (1)

#### [Model-View-Presenter (MVP) pattern](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/model-view-presenter-mvp-pattern?u=76281980&t=0)** - Now the next pattern is the Model-View-Presenter pattern, which is loosely based on MVC, and almost the same. Looking at both will help define the major differences in between the two, but they offer similar approaches, but architectured differently. In an MVC, or Model-View-Controller pattern, we have our application organized in models, views, and controllers. Typically the organization will have views, pull data from controllers or models directly, and if there are any other logic or functions needed for the view, the controllers will supply them. So in other words, their views have access to both the models and controllers. Where MVP differs is the view doesn't have to access the model. It has to get it from the presenter and the presenter serves as the logic, and supplier of data. In this pattern, the view passes through the presenter to get the data through functions, and the presenter pulls from the model. It is the major difference. The MVP pattern is seen in several frameworks, such as backbone, but it is quite popular in [[Android]] development. So if you plan on developing with Android, understanding this pattern will help you tremendously.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2)
> **Env Vars:** mvc (2), mvp (2)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - now (1)

#### [Model-View-ViewModel (MVVM) pattern](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/model-view-viewmodel-mvvm-pattern?u=76281980&t=0)** - The model view view model pattern is similar than the other two we just explored, and is different only in implementation again. It is also sometimes referred to as MVVC, or model view view controller. But in both cases, it serves the same purpose. The first view is your view which doesn't have any data or logic. It is simply a dumb component, or component without any logic or data. Then you have the second view, model, which holds the logic in a state of the data, and this view model connects to a model. If you would like to see examples of this MVVM pattern, simply develop an architecture applications with [[React.js|React]] and Angler, and you will see this MVVM approach in action. For example, in React, your application is architectured in stateless components, which are views. Stateful components which hold data and logic, therefore the view model, and then finally the model, is where React typically connects to a back end to process data, where your models are defined. There are many more patterns and opinions about patterns out there in the wild, but all of the [[Application Development]] we see in our daily lives as developers often fit one of the three patterns we've explored in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Application Development]] (1)
> **Env Vars:** mvvm (2), mvvc (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### 4. Behavioral Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [What are behavioral patterns?](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/what-are-behavioral-patterns?u=76281980&t=0)** - In this chapter, we'll explore all kinds of patterns related to behaviors in our applications. And when we talk about behavioral patterns, it is the most difficult to understand at the base of what it is. And if you want to simplify what these patterns are, they are focused on improving communications between objects in a system. A good example of this is how we humans continuously add tools to better communicate in between each other. First we had the letter that was first delivered with horse carriers. Then it was improved with the telephone, followed by emails and chat, and so on so forth. These tools helped us communicate faster and more efficiently. You get the idea. Well, behavioral patterns follow a similar approach in code. It offers patterns that help standardize and implement communications in between pieces of code. Please be aware that in some cases, the patterns explored are complex to implement, and therefore, we'll demonstrate through visuals or code already built, so you understand what they are.

> [!info]- Semantic Content
>
> **Warnings:** be aware (1)
> **Speakers:** - in (1)

#### [Observer pattern](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=0)** - [Instructor] The Observer pattern is one where we maintain a list of objects based on events, and is typically done with updating data based on these events. It is implemented for example, with the subscribe methods in MeteorJS. Let's take a look at code to see how it looks like. So if you go into the exercise files, and then in chapter 4, and then video 04_02, you can drag and drop this folder directly into visuals to do code. And that's a good example of the observer pattern. So right now we created a class, so with a constructor we created that class for car. And inside of it we have a gas element, and we have a setter and then we have an observer. So basically we're able to set what is the gas level for that car, and then we can observe what is the level of that gas. There's a couple of functions here that allows us to register and then un-register an observer and then notify what is the gas level for that car. So this is a good example of the observer pattern. It can also be shown inside of MeteorJS. So if you go to a browser, and go to "www.[meteor.com](https://meteor.com)" and then in the developers section you go to the Docs, and then search for "publish". And then click on "Publish and subscribe". And then scroll down until you see this example here. So this is a very good example of the observer pattern. So basically Meteor publishes
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/observer-pattern?u=76281980&t=93)** the number of rooms, and then through a subscription, we can actually listen to changes to that specific object. So for this example, it's creating rooms, we're publishing it so we have access and we can read the information for the rooms. The same thing with the subscribe. So we are subscribing so let me just find a subscribe section. So if you can click here, and then scroll down to the subscribe, you can subscribe to the rooms. So now with this code here you can subscribe to, well, this is a different example but it could be subscribing to the rooms, and then understand how many rooms that we have and all the data that's available with the room object we get access to it. So basically this observer pattern is a way to publish information or objects or collections that we have access to, and then we can subscribe to it, or get that information from the observer, and then have access to all the information available for rooms or players or whatever is the data that you're working with.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), scroll down (2), drag and drop (1), click on (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (1)
> **URLs:** [meteor.com](https://meteor.com) (1)
> **Documentation:** the docs (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [State pattern](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=0)** - [Instructor] The state pattern has become very popular with [[React.js|React]]'s usage, and now most [[Web Development]] frameworks use it, basically the state pattern is one where we hold the state of the application with all the data and properties needed and when it changes it updates a rendering of the application, and again needless to say, React and [[Angular]], and every state management library are great examples of its use, let's take a look at the React application we have in our exercise files. So if you look into the exercise files, under chapter four and then video04_03, you have a React application with several components and state management in here, so let's open that in Visual Studio Code, so I'm going to drag and drop that folder inside of Visual Studio Code, and let's take a look at the application. So basically if we look at the app.js file here, you have a state right here, in your constructor, we are setting our props and then we're declaring a state for React and inside of that state we have news one, news two, and news three, with the type, and then the query. So this is basically a front end that will make queries to an external API and with this information we'll be able to get data. Once we get the data back from the API, we're actually passing down that information, therefore the state of this application to our components here. So we have state news and we're passing to state with news one and news two here.
>
> **[1:32](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=92)** So what are we doing with that? Next, we're going into the news folder, so news folder and then news file here, and then we're declaring a new state with news, so basically we're creating an array of information and the state holds that information and then passes it down to the components to be rendered. So this is the [[Fetch]] function that actually grabs the data from the API and we're passing down the information that we had in the original file here, and therefore this information calls onto the API and then returns the data which we pass down to the components news here, and then that is the new state with the data, so basically a state, just to summarize, holds the information, or the data that the application needs to render all that data, or even states of the application. So for example, if whenever we have a true information, we are returning or rendering a specific component inside of React, or doing something on the application, so for example if you were to use a chat application, where whenever a true statement turns the color of the fonts of your chat red because somebody is talking to you or typing something well that's a state of the application, and we need data to actually make that happen with the application, and this is how it works, so you have the state, which holds all of the information that you need and then the application reacts based on that, or get the data from the state.
>
> **[3:04](https://www.linkedin.com/learning/javascript-patterns-2/state-pattern?u=76281980&t=184)** So this is what the state pattern is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[Web Development]] (1), [[Angular]] (1), [[Fetch]] (1)
> **Env Vars:** api (4)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** for example (2)
> **File Paths:** app.js (1)
> **UI Navigation:** drag and drop (1)

#### [Chain of responsibility](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/chain-of-responsibility?u=76281980&t=0)** - [Instructor] The Chain of Responsibility is a pattern to help solve common practical issues of having a request from a client and needing this request to pass through multiple functions or logic to get the result. This is where chain of responsibility comes into play. So let's illustrate this with an example. When you hit the Buy button, this particular request goes through a series of functions to finalize the order, and they can quickly grow in complexity. So we hit the Buy button, then the application needs to check if you're logged in, then needs to check if it has your address. If not, add an address. Then it needs to calculate the taxes, shipping, process payment, and finally process the order, and display success message. Needles to say, this simple action of clicking by has several functions related to it, and if we are to build this application with a modular approach and pure functions, we're talking close to a dozen or more functions being written here. So this is where the chain of responsibility comes into play and where we need to create a proper chain so these events occur in a linear way. What we end up with is a request going through an abstract handler which calls one function or handler after another until the chain is completed. When one handler is completed, we can go to the next one. If there are errors, the abstract handler can provide error information to the back end end client, and so on and so forth.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Iterator pattern](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=0)** - [Instructor] The iterator pattern is another method of iterating through list of items, whereas the chain of responsibility will use more of a handler type and go through a chain. The iterator is best used with a for loop and is perfect when you want to iterate through rays of objects. Let me demonstrate. So we'll get back to code by using the base. So the first thing I'm going to do is drag and drop this particular folder into Visual Studio Code or on the [[Windows]], you can right click to the folder and then open in Visual Studio Code. And the first thing I'm going to do is remove all the code that we have here. I'll refer back to the code in the exercise files if you need to. So let me just delete that and then what we're going to do is also open the [[React.js|react]] application. So let's go back to our desktop and then open the exercise files and I believe the react application is right here on 04_03. Let's copy that into a brand new windows of Visual Studio Code like so. And what we're going to do is grab the state from the app.js file right here. So let's go and grab this one here like so. Copy that and now we can close this window and then maximize this one. And what I'm going to do now is paste what I just copied. So the first thing I'm going to change this is call this newsfeeds like so, and then we'll just remove the news like so because this is an array of objects. And make sure that we change this to an array because it's not right now.
>
> **[1:34](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=94)** Perfect, like so. And then let's remove the news2, and the same with news3 and then we can keep everything else. So right now we have an array of objects which is basically newsfeeds. And what we're going to do now is use a for loop to iterate through the items that we have inside of that array. So let's go ahead and create our for loop. So I'm going to do for and then let feed of newsfeeds like so.
>
> **[2:07](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=127)** So we're iterating through the newsfeeds. So for each of the elements we have in our array, so this is one, this is two and this is three, we're going to create a feed object in this for loop. And now we'll have access to do something with that. And then we'll simply console log what we have. So we have a feed that we can actually put something in here, and then we have access to type and query. So what we're going to do is use type like so. So this for loop will iterate through the array and then print out each type of this array inside of our live server. So let's go ahead and save that. Make sure that live server is running so I'm going to go live like so. And then the shortcut to actually open up the developer tools is on Windows, control + shift + I and on Mac, command + option + I. So let's go ahead and do that. So for my case, it's command + option + I. And as you can see right now, we're iterating through our arrays, so the first one or the first type is top-headlines. And then we have everything twice. So if we go back to our array that we actually created, we have top-headlines which is once and then we have everything twice. So if we want to see something different, we could write something like technology news or something like that. Technology, and then save, and then go back to our server. And now you'll see that we have top-headlines, everything, and then technology.
>
> **[3:41](https://www.linkedin.com/learning/javascript-patterns-2/iterator-pattern?u=76281980&t=221)** So this is how the iterator pattern works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[React.js|React]] (2)
> **Cross-References:** go back to (3)
> **Tools:** visual studio (3)
> **UI Navigation:** open the (2), drag and drop (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (2)
> **File Paths:** app.js (1)
> **Definitions:** is an  (1)

#### [Strategy pattern](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/strategy-pattern?u=76281980&t=0)** - [Instructor] The strategy pattern is basically a way to encapsulate different [[Algorithms]] or functions and then at runtime practically use the same code to run different scenarios. And we've used this approach in some of the code we've written thus far. So let me show you. So basically if you go into the Exercise Files, and either you use 02_03 or the actual files for this video, so 04_06, it's the same thing. So let's go ahead and use that. So I'm going to drag and drop this inside of Visual Studio Code. And you probably recognize this pattern that we've done in video 02_03. So we created a class car with a constructor with doors, engine, and color as arguments, which we prepped with the constructor here. And then we've extended that with the SUV. And then, again, we added the doors, engine, color and then add this wheels of the number of wheels for a SUV. But the strategy pattern is happening right here. So because we've created something before, a class car or class SUV, we're actually using the strategy pattern here because we're using or reusing the classes to create new cars. So with this one line here, we're creating a Civic. And then we're creating a CX-5. And then we could continue by creating more cars with the same command. So that's basically what the strategy pattern is. We're encapsulating code by creating a class, or it could be a function, or it could be anything. And then we're reusing that code multiple times to create new cars or new objects of these cars.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Env Vars:** suv (3)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Memento pattern](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/memento-pattern?u=76281980&t=0)** - [Instructor] The memento pattern is basically providing temporary state of an object and restoration of that object from a conversion into a different format or whatnot. It is often used into serialization and deserialization of data. In this use case, an object is typically in a [[JavaScript]] object, where we need to transmit the data to some type of back-end, where we serialize this object into [[JSON]] for streaming it through HTTP protocols. Then, when this object hits the back-end server, or when we get a response back from the server through HTTP, we might need to deserialize the JSON object back into a JavaScript object for consumption into our application. Well, this is basically the memento pattern in action, where the data never loses its accuracy, despite several conversions in between formats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[JSON]] (2)
> **Env Vars:** json (2), http (2)
> **Speakers:** - [instructor] (1)

#### [Mediator pattern](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/mediator-pattern?u=76281980&t=0)** - [Emmanuel] The mediator pattern provides a set of objects which interact with each other, mostly by having a central authority dictating the terms in between objects. It is best demonstrated with example code. Take a look at the exercise files, and pull the files from this video. You'll see here an example that is often used to demonstrate the mediator pattern. So basically what we have here is first a class called TrafficTower, so we're creating a tower, and inside of that tower we have a list of all the airplanes. And then we can actually request all the positions of the airplanes from that TrafficTower. And then we have a class called Airplane, and we're basically building a constructor with the position and trafficTower, and so on and so forth. And then we have a function that requests positions from the traffic tower. So basically the airplane can actually track itself from the traffic tower and then the traffic tower can actually request the positions of each airplane. So this is a great example of the mediator pattern. So basically again, it's the interaction with each of the classes that are important in this pattern. So again, we're basically interacting from the traffic tower to the airplane, requesting the positions of the airplane, and then the airplane actually can go ahead and provide its position to the traffic tower by having that requestPositions here. So this is how we actually interact in between each classes, and a great example of the mediator pattern.

> [!info]- Semantic Content
>
> **Code Identifiers:** traffictower (1), requestpositions (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [emmanuel] (1)

#### [Command pattern](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=0)** - [Instructor] The command pattern is one that encapsulates actions or operations as objects. So in other words, in this pattern you abstract the actual function or execution of the action from the action itself. And if this sounds a bit weird, it is best represented through code. But if you have been using Redux for any amount of time you've used the command pattern. Which is where we use it by extracting the actions, which are called from the execution of the actions, which are reducers. It is also often used in functional programing. So let me show you through code on the Redux website. So go to Redux.[js.org](https://js.org) and go in the Getting Started section. And then scroll to the Basic Tutorial, click on it, and then find the Example Todo List. So this is a good example of a program or todo list, where we can actually see reducers, actions, and the container components in action, or the command pattern. So basically, you have the action creators, which basically creates all the actions that you need. So the ones that we're going to take a look at are the visibility filters. Then you have the reducers, which executes the actions. And if we want to take a look at the reducers related to visibility filters, this is where they are. And then they contained a components which basically executes or calls onto the reducers and the actions. Your presentational component calls on into the container component here and goes through
>
> **[1:33](https://www.linkedin.com/learning/javascript-patterns-2/command-pattern?u=76281980&t=93)** the list of switch cases here. So the if statements, so if we have a case where we show all or a case where we show completed, these called the action creators. So we go back here and these called one of those three. So once we have one co those three called, what it does, it goes through the reducers where they're executed. And let's just scroll down to the actual reducer in question. And then it goes through the switch case here, where it says, "Well, if we have selected this specific action, do this, or otherwise, do that." So we're returning a state. So something that we've seen earlier in the course. So this is a good example of the command pattern where each function is abstracted from each other. But still used through the execution of the code inside of the application.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **Definitions:** is a  (2), in other words (1)
> **File Paths:** redux.js (1)
> **CLI Commands:** find (1)
> **URLs:** [js.org](https://js.org) (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-patterns-2/next-steps?u=76281980&t=0)** - [Emmanuel] Learning about [[JavaScript]] [[Design Patterns]] is a great step in your developer evolution, and often is taken when you've got some experience with JavaScript. If you got lost at any point from your lack of JavaScript knowledge, I'd suggest you go back to the drawing board and take a look at some of our basic JavaScript courses: essentials, scoping, classes, and more. The next step is really about pushing your knowledge further so if you got some experience and are ready to tackle more complex subjects, go and take courses on the latest ES7 syntax or beyond in what are the latest additions to the language. And, finally, if you want to apply any of this knowledge with libraries, take a look at courses related to [[React.js|React]], [[Angular]], and backend libraries like Express and Node. Thanks very much for taking my course and I'll see you in a bit!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Design Patterns]] (1), [[React.js|React]] (1), [[Angular]] (1)
> **CLI Commands:** node (1)
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