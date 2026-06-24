---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-classes-19958382
url: "https://www.linkedin.com/learning/javascript-classes-19958382"
duration_minutes: 73
duration: 1h 13m
level: Intermediate
updated: 10/2/2025
learners: 44493
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEoOxp-l_P-JQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668120338686?e=2147483647&amp;v=beta&amp;t=j2eN2jUp3tEt0q2eX53Y2-ukkFJ-pcBCZg1MyOlPMLs"
linkedin_topic: Network and System Administration
learning_paths:
  - '[Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)'
prev_courses:
  - '[JavaScript- Closures](JavaScript-%20Closures.md)'
next_courses:
  - '[Learning App Building With Vanilla Javascript](../Software%20Development/Learning%20App%20Building%20With%20Vanilla%20Javascript.md)'
path_nav: '[{"path":"Become a JavaScript Developer","position":7,"total":13,"prev":"JavaScript- Closures","next":"Learning App Building With Vanilla Javascript"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/JavaScript-%20Classes.md)

![JavaScript: Classes](https://media.licdn.com/dms/image/v2/C4E0DAQEoOxp-l_P-JQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668120338686?e=2147483647&amp;v=beta&amp;t=j2eN2jUp3tEt0q2eX53Y2-ukkFJ-pcBCZg1MyOlPMLs)

# JavaScript: Classes

> If you're new to JavaScript—or just unsure how classes work—then this course is for you. Join instructor Emmanuel Henri as he introduces JavaScript classes and how they work, how to define them, all their related terminology, and more. He starts with the foundations of classes and how they interact with other JavaScript features. He then goes over constructors, mixins, and extends, explaining how 

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382) | 1h 13m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [JavaScript classes explored](#javascript-classes-explored)
  - [Course prerequisites](#course-prerequisites)
- [**1. Defining Classes**](#1-defining-classes) (7 videos)
  - [Introduction to classes](#introduction-to-classes)
  - [Defining a class](#defining-a-class)
  - [Differences between functions and classes](#differences-between-functions-and-classes)
  - [Hoisting explained with classes](#hoisting-explained-with-classes)
  - [Strict mode with classes explained](#strict-mode-with-classes-explained)
  - [What are static methods and usage?](#what-are-static-methods-and-usage)
  - [Prototype methods explained and usage](#prototype-methods-explained-and-usage)
- [**2. Constructors and Getters/Setters**](#2-constructors-and-getterssetters) (3 videos)
  - [Introduction to constructors](#introduction-to-constructors)
  - [Constructor and super usage](#constructor-and-super-usage)
  - [Introduction and usage: Getters and setters](#introduction-and-usage-getters-and-setters)
- [**3. Extends and Mixins**](#3-extends-and-mixins) (2 videos)
  - [Introduction to extends and usage](#introduction-to-extends-and-usage)
  - [Introduction to mixins and usage](#introduction-to-mixins-and-usage)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [JavaScript classes explored](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=0)** - [Instructor] Have you heard about classes, constructors, mixins, and don't know how they work or what they mean? Are you coming from another language and trying to understand how classes are used in [JavaScript](../../Skills/Software%20Development/JavaScript.md)? If you've answered yes to any of these questions, you've come to the right place. In this course we'll introduce JavaScript classes, and how they work, how to define them, all their related terminology and more. Hi, I'm Emmy Henri. And as soon as classes were introduced in ES6, I've used them ever since. I would never look back. And it is my pleasure to introduce you to this exciting technology that are classes. We'll first explore the basics of JavaScript classes by looking at how we define them, hoisting, strict mode and prototypes. Then we'll deepen our knowledge by examining constructors, in all its glory. And the usage of the super method. Finally, we'll take a look at extends and mixins, how they work and code examples. So if you're ready to deepen your knowledge of JavaScript by exploring classes, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/javascript-classes-19958382/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/course-prerequisites?u=76281980&t=0)** - [Narrator] This course is considered an intermediate to advanced course. We won't go over any basics of the language or syntax use therefore prior [JavaScript](../../Skills/Software%20Development/JavaScript.md) knowledge or at least a good understanding of functions, variables, types, object literals and most of the basic syntax use is important to be able to follow along. If you've never done any JavaScript or would like to learn more on the subject take a look at our library for the essentials course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Speakers:** - [narrator] (1)


### 1. Defining Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to classes](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=0)** - [Instructor] Classes were introduced with ES6 to have a better syntax for creating prototypes. We could create these types of objects with prototypes in the past, however, the syntax was too verbal. Therefore, the new classes were introduced with ES6. As a result, the new class simply inherits what prototypes are and its methods. It is just easier to define and use. Also, if any parent prototypes or classes change, all its children inherits all the changes, even after an instance of a class has been created. For example, if we create a class called Car, and then create an instance called SUV, and then change the main class with a C property, then its children will inherit this new property automatically, whether we want it or not. Classes contrary to most of its declarations aren't hoisted to the top. Therefore, classes need to be declared first if we need to use it. We'll explore hoisting related to classes a little bit later in this course. But as a general rule, if hoisting is a bit confusing to you, try as much as possible to declare classes, objects, and variables before they are used. Also, there are two ways to define a class, class declaration, and class expression. This is the way we define a class declaration. I will explain more on how to declare classes this way in future videos. This is the way we define a class expression, but more often than not,
>
> **[1:33](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=93)** you'll see classes defined with a class declaration approach. And in this course we'll use class declaration for all of the examples. Finally, when you define a class, you can add properties as well as functions, or called methods, in the class. I will explore this when we work with them.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (2), suv (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### [Defining a class](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=0)** - [Lecturer] Now that we have some understanding of how to define a class, let's actually do this. We'll first create a base project that we can use to play with throughout this course. So let's get to it. So the first thing I'm going to do is create a folder outside here. I'm going to put it on the desktop and I'm going to right click, create a new folder, and I'm going to call this classes and then I'm going to drop it directly in VS Code. Feel free to use any editors you want but I find VS Code to be very friendly for the types of projects that we're doing, especially in this course because we're going to use an extension that we're going to get right away that's called Live Server. And it's going to allow us to always see the results of what we're doing. This one here, so actually install this one. Once it is install, all you're going to have to do is click go live when we have our project set up. So let's go ahead and set up our project. So we have our classes folder that we dropped inside of VS Code. We're going to create the first file, which is an index.[HTML](../../Skills/Web%20Development/HTML.md). And in this one what we're going to do is use a shortcut inside of VS Code that is simply doing doc for Doc. And then hit tab. And you're going to get most of the code that you need for your index html file. So what we're going to change here is the title of the document to [JavaScript](../../Skills/Software%20Development/JavaScript.md) Sandbox.
>
> **[1:38](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=98)** And then what we're going to do is literally have in our body a few things here. So we're going to have an h1 which will be the title again, JavaScript Sandbox. And then we're going to load the actual file that we're going to play with throughout. So what we're going to do is load the script source and we're going to call this app.js like so. So basically whenever we start our server right here it's going to load a JavaScript file that we're going to have in here. So let's go ahead and create that file. I'm going to save this here. And then I'm going to create a new file which will be called app.js. And just to make sure that our Go Live Server works what we're going to do is basically just do a console log. And in this console log, we're going to pass Live server works
>
> **[2:49](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=169)** and then save this and then actually turn on our Go Live server. And right now we have the title here and let's go into our command line. So you can actually go into the three dots here, go into more tools, and go to developer tools. And I'm on Chrome or use the shortcut here. And let's go into the console. And it says here, Live server works. And also live reload is enabled. So whenever we change our code with the app.js file, we're going to see the results either in the console here or on the html if we pass it to the html. Don't worry about this one, we'll always need an icon. It doesn't have one. So this is something that you can ignore. Okay, so now let's go into VS Code again and we're going to create our first class. So let's go ahead and do that. I'm going to remove this code and I'm going to create a class called car. And this class will have a constructor. So we're constructing our class and we're passing doors to that constructor. We're passing an engine and then we're passing color. So basically what we need to build a first car, we need these things here. So basically we're going to simply create these things here, pass doors, and I'm going to repeat this
>
> **[4:26](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=266)** for the three elements that we have in our constructor.
>
> **[4:34](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=274)** And I'm doing Option + click to click those two. I'm going to change this to engine and then click here, Option + click, and I'm going to do color. And we're also going to create a method. So these are the properties of our class called car but also we need to have a method. So I'm going to create a method called car stats. And in this one we're going to return and I'm going to use template strings here to return. This car has, and if you're not familiar with template strings, basically it's a string but with the ability to pass on variables inside of it. So what we're going to do is do ${ we're going to pass this.doors} and then we're going to pass a, and you'll see the results when we actually create our first car with this class. This.engine and a beautiful, then again color. So when we use this method, basically what we're going to be able to do is return a message with what we've created for the car. So now that we have our first class
>
> **[6:10](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=370)** with our properties and our method, we can save this and then we're going to actually use it. So I'm going to create a new car called cx5 which basically needs this class car. And then for the class car, we're going to pass four doors, and we're going to pass V6 as the engine, and then we're going to pass the color gray to that first car. So now we've created a car using the class car that we just created. And now we're going to use console log to kind of get all of this somewhere in our application and our console log. So we're going to console log the cx5 and then we're going to console log as well cx5 and dot leveraging the method dots inside of the cx5 because now that we've created a new car, this method is available inside of the car that we created. It inherits basically the method that we have in a class. So we're going to use that function or method and basically return this message. Okay, so now that we have all this, we can save it. Our server will automatically update. So let's go back to here.
>
> **[7:44](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=464)** And we have first our object or our car which has four doors, an engine V6, and the color gray which has these elements here. And obviously the car class comes from the prototype. So we have all these elements here. So we have access to the car stats, the constructor, so we can have a lot more information about this class here but we also have the method that return the message. This car has four doors, a V6, and a beautiful gray color. So as you can see, creating a class and then creating a new object from that class is fairly easy. And leverage also the functions or methods that are available inside of that class. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Tools:** vs code (5), command line (1)
> **File Paths:** app.js (3), index.html (1)
> **Prerequisites:** install (2), set up (2)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** template (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Differences between functions and classes](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=0)** - [Instructor] If you look at it in the end, classes are functions themselves, but because they inherit how they are constructed because of their prototype background, there are some minor differences in between a straight function and a class that might help you determine when to use one over the other. The first difference, as mentioned before, functions are hoisted to the top of your file even when declared dead last versus classes where there aren't hoisted. Functions, expressions and declarations can be overwritten, whereas classes can be extended, but not overwritten. For example, you can't overwrite the door's property in a car class. These are the major differences between the two. So here are a few best practices and use cases. When you want to create a blueprint to be reused over and over and still need functions, create a class and add methods to it. A good example are [React](../../Skills/Web%20Development/React.js.md) class components where we use them to create and use these components with lifecycle methods available to us in our React applications. We build a component by extending the class component. When you need to create a brand new function not requiring any specific properties or methods, then a function is better. Another example related to React is when we use a stateless functional component which is, in fact, a pure function. A great way to practice and start thinking when to use one over the other is to build an application with the React library, where you always have to think
>
> **[1:34](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=94)** about when to use a stateless versus a stateful component, which is the equivalent of a function and a class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hoisting explained with classes](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=0)** - [Instructor] Hoisting is always a subject that is confusing for newcomers. So let's explore this a bit and how it relates to classes. So we're back in the app.js, and just to show you that a class has to be declared before it can be run. Let's go in, copy this code here or all of it actually from 13 to 16 like so. And I'm going to also comment this and add it to the top of the class. Now if I save this and I go back to my server we got an error. So basically we cannot use anything from the class until it actually is declared. So this code will work, this code won't work. So let me delete that. Bring that back on command this and save. And as you can see, everything is running as it should. But what about functions? What if I created a function here that say hi and that function will return? Console log. Hello? This function can be called anywhere.
>
> **[1:27](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=87)** So if I save that and I go to the top here and I run this function here. This will work. That means that a function once it hits the [JavaScript](../../Skills/Software%20Development/JavaScript.md) engine It is going to be hoisted to the top. And if we run this, it's going to be successful. So if I go back to my browser, hello, this function can be called anywhere. So you can basically run this function anywhere in the code and the functions are hoisted to the top as opposed to a class, which is not. So if I cut this and I paste it right here And I save it. The function will still run again. So this is what hoisting is. So basically for classes you need to declare them first before you actually use them. But for variables, for functions you can actually declare them before or after and use them anywhere in your code and you will be fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Cross-References:** go back to (2)
> **File Paths:** app.js (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Strict mode with classes explained](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=0)** - [Instructor] If you've never heard, or aren't quite sure what strict mode is, we'll go over what it is in a second. If you do, know that when you declare a class, it is automatically in strict mode, and also all its properties and methods you create for it. If you know what strict mode is, feel free to skip to the next video. If not, I'll explain what strict mode is. So go in a new browser window and search for Mozilla strict mode and then click on the documentation here and scroll down until you see this here. So strict mode was introduced in ES5, and it is a mode that improved the quality of [JavaScript](../../Skills/Software%20Development/JavaScript.md) programming practices. It adds a few items that makes us, as a developer, more aware of what we do with JavaScript. For example, it adds some errors as throw errors that were silent before. So we are more aware of certain types of errors that we didn't have access to before. It also helps with performance with certain code that before was compiling much lower due to their nature. For example, code that was prone to error now, will throw an error and then the developer can review it to make it better for compilation. Better code equals better performance. It prohibits some syntax to be used in future versions of JavaScript as well. So if you need more specific examples of strict mode in action, look at the documentation on the subject on this site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Documentation:** the documentation (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** es5 (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)

#### [What are static methods and usage?](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=0)** - [Instructor] Static methods are methods that aren't accessible through an instance of a class, but only available through the class itself. They're usually created for utility functions that don't relate to the instance of the class. I rarely need to use static methods, but when I do it's always good to be aware that they exist. Let me demonstrate. So what we're going to do in our class, we're going to introduce the static method. So let's go ahead after the carStats, we're going to create a static method, which is it's going to be called totalDoors, and those will take two arguments, so car1, car2. So basically we're going to calculate the amount of doors in between the two cars. So what we're going to do is first create a constant, doors1,
>
> **[0:55](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=55)** which will be equal to car1.Doors. And then we're going to do the same again. So const doors2 which will equal to car2-doors.
>
> **[1:12](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=72)** And then what we'll return is doors1 plus doors2. So we're going to expect a number here. Okay, so let's test that. We have the static totalDoors here. So in theory, we should be able to access it here, right? So let's save this. Now if we go back into a browser, we're going to see that we have our car like before, and if we click we don't have access to the actual totalDoors function here. We see the carStats function here but we don't see the other one. However, if we click on the constructor class here we'll see the totalDoors here. So we can only access it through the class car. All right, so let's go back to our code and see how we can demonstrate this. So I'm going to create a second car here so we can make the calculation first. And I'm going to create right here a Civic which equals to a new car. And on this one I'm going to have three doors because it's a hatchback, V4 as an engine, and then make this one blue. And then what we're going to do is do the exact same thing that we've done here. So we're going to copy and paste and change this to Civic.
>
> **[2:49](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=169)** Civic. And then what we're going to do is again do a console log. And instead of using the Civic or the CX5, we're going to use the car class dot, and then we can use totalDoors as a function. So we're going to pass the CX5 as a first argument because it takes two arguments. We're going to pass the Civic as well. Now that we have the Civic and we're calling the civic instance and then calling the carStats, and then we're using the car class with its static method, totalDoors, and we're adding the doors from the two cars. Let's see what happens. So now we have the first car, we have the second car. We have the message that we're expecting and then we have what we return as a number seven which is basically the number of doors from the first one and the second one. So this is how you use static methods. These are utility functions that you can create for the class, but not passable to the actual instance of that class, and not usable for those. But simply tools that you'd like to use for other means outside of the instance of that class.

> [!info]- Semantic Content
>
> **Code Identifiers:** totaldoors (6), carstats (3)
> **CLI Commands:** make (2)
> **Env Vars:** cx5 (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Prototype methods explained and usage](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=0)** - [Instructor] As we mentioned before, because a class is a prototype in itself, we inherit all of its methods. So there are multiple methods we can use with it. Let me demonstrate. So the first thing I'm going to do is clean up a little bit of our code here. So, what I'm going to do is remove the function that is right here, and I'm going to just have the cx5 showing up in our console. So we have this, let's save this and go back to the browser, and right now I have the car. Okay, so if we open up the car here, we have all these things that we have access to. Before we had a class in ex6, prototype was the actual object that we were using for that purpose. So, inside of our prototype, we have these functions or these methods that we have access to. But if we click again on the prototype here, which is basically the class or the prototype that everything is built from, we have other methods that we have access to. So we have access to all these here, for example, we can turn something to a string. So, let's just play with this. So we have our cx5 instance that has for example, doors, number of doors, which is, the answer is four, so if I turn this, I got four doors, but if I do cx5 dot doors dot, I have all these other functions or methods that I can use,
>
> **[1:37](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=97)** so, isPrototypeOf, has its own property, or we can turn it to a string, so if I do this, it's actually going to tell us what this function is made of. But if I do the actual function, then I will have the string here. So basically, when you are actually in the class, you are using the old prototype object and you have access to all its methods inside of it. So, these are all the methods that are coming with the classes, with the prototypes, and with the actual values that you're using. So sometimes if you wonder what you can use outside of the methods or the functions you can create yourself with a class, take a look at what [JavaScript](../../Skills/Software%20Development/JavaScript.md) offers here in the sandbox and explore and test and try new functions and you'll see what you can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Cross-References:** we mentioned (1), go back to (1)
> **Analogies:** for example (2)
> **Code Identifiers:** isprototypeof (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Constructors and Getters/Setters

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to constructors](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=0)** - [Instructor] Constructors are part of the syntax of a class. If you don't include one, one will be generated for you. Also, you can only do one constructor per class. Otherwise there will be a syntax error thrown at you. But what are constructors exactly? They are a method that creates an object when a new instance of the class is created and whatever values you pass to the new instance will be initialized inside of this object. In simple terms, the constructor builds our initial object for us. For example, when we create the new CX five instance of the class car, we pass the values for V6 and grey. The constructor of the class then builds a new object and assigns the values to door, engine and the color. This is what the constructor does. In our example, we also pass values as we create the new instance of the car class. But we could also define default values without passing anything, and we'll explore this next. Also, when we work with classes we can use the keywords super, which allows to call the methods of a parent class. If we create a new class called SUV we could use the keywords super to call the car stats method of the car class. So now that we've got some basics on these items let's explore them and code over the next few videos.

> [!info]- Semantic Content
>
> **Env Vars:** suv (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Constructor and super usage](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=0)** - [Instructor] So we explore constructors and the super keyword in the introduction. So let's use them. So we're going to go back to our class car here and what we're going to do is extend that class into a brand new class called SUV. So let's go ahead and do that. So we're going to create the class SUV and this class extends the class car. So basically what we're going to do is leverage all the stuff that we've built in here. So we'll leverage doors, engine, and color into our new class. And the way to do that is first, you have to declare what you're going to use in this class, in the class SUV with the constructor. So we're going to do doors, engine, color, brand
>
> **[0:54](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=54)** and then the method car stats. And then in order to use these elements or these properties from the previous class, this is where the super keyword comes into play. So we're going to do super and then we're going to add the elements of the class that were extended, which is the car class. So engine, color and car stats like so. And then what we could do is add any properties that we would like to create specific to that class. So for example, we added brand here, so we're going to do this.brand = brand. Now these are elements that we're passing when we create an instance of that class. So for example, when we create a new instance of car, we are passing these things here. But what if you would like to have default elements or properties inside of a class but not necessarily have to pass a value to it? Well, this is where you could do something like this, this.wheels = 4, so basically any cars has
>
> **[2:08](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=128)** usually four wheels, so we don't need to pass that value to the cars or the SUV, it has four wheels. And let's say we're living in a hot country, the AC's always turned on. So these elements would be added to any instance of the class SUV that are created automatically, and you don't have to pass it when you build it. Otherwise, if you want to pass a value and build it, you have to declare it here. We can also create a new method just specific to the SUV. So let's create this one called my brand. And then inside of that method will return in the console log and we're going to leverage again temporal strings. This SUV is a this.brand, so basically we're going to pass
>
> **[3:08](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=188)** the brand inside of that method. So when we create a new SUV, the brand is going to be passed inside of that method. So let's go ahead and use some of that. So instead of creating a brand new car, I'm going to leverage this cx5 here 'cause it is a SUV. So we're going to go ahead and create this as a SUV. So a new instance of the SUV class for four doors, V6, gray. And now we need to pass a for value which is the brand Mazda. And then what we're going to do, we're going to also leverage the method here. So let's go ahead and do that. Since now this is of a class SUV, we can leverage my brand. If you wanted to create, let's say for example, a car instance, you couldn't leverage my brand here. So because I switched it to SUV, now I can use that method. So I'm going to do console.log(cx5.myBrand),
>
> **[4:17](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=257)** which is a function, and then run it. So once I save this, we can go back into our Sandbox. We're going to see everything as it should. So we have a new SUV that has the AC on, the brand Mazda, color grey, four doors, engine V6, and four wheels. So these elements are still there regardless of the fact that I didn't pass 'em because they're default properties that are part of that class. Now we have the message, this car has four doors, a V6, and a beautiful grey color, and also, this SUV is a Mazda. So in short, this is how you do super and constructors. When you create a brand new class extended from other classes. Let's move on.

> [!info]- Semantic Content
>
> **Env Vars:** suv (15)
> **Definitions:** is a  (4)
> **Analogies:** for example (3)
> **Code Identifiers:** mybrand (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Introduction and usage: Getters and setters](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=0)** - [Instructor] Getters and setters were introduced with ES6 to allow to set and get properties without accessing them directly. It also allows for more flexibility as you could do anything you want with the property before returning them. This is how we protect properties from direct access, therefore making them private or protected. So let's take a look at the code and how we can do this. So right now, if we take a look at the brand inside of our SUV car here, we are accessing it directly. If we wanted to protect that particular property, we need to change a few things. So I'm going to first remove it from directly setting it inside of our constructor, and instead of doing this.brand equals brand, what I'm going to do is _brand, and this actually tells [JavaScript](../../Skills/Software%20Development/JavaScript.md) that we want to protect this particular property here, and I'm going to set it initially with something in here, No brand yet. And then what we need to do, we can use keywords that were introduced with ES6, get and set to actually define the functions or the methods that are going to allow us to set the brand and get it from the class. So let's go ahead and do that. So, I'm going to use the keyword get to define getBrand, and then what we're going to do is return this._brand.
>
> **[1:40](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=100)** So, this is our getter. So if we want to actually get the brand, we need to use the getBrand method and therefore we're not accessing the brand directly. And now we need to have a setter with the keyword set to define the method that's going to allow us to set the brand. And I'm going to call this setBrand, which needs a new brand that will be passed, and then I'm going to this._brand equals newBrand,
>
> **[2:20](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=140)** therefore this method actually sets the brand.
>
> **[2:30](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=150)** So now, how do we use this? Well, for starters, we can't actually set the brand directly when we build a new instance of our class SUV, so we need to remove that from here. That's the first thing. Now, the second thing that we need to do is actually set our brand somewhere in here. So what I'm going to do is simply do a comm on this one, and then, for the cx5, what I'm going to do is simply remove all this and we're going to do new code for that. So, the first thing I need to do right after I constructed my cx5, I need to actually set the brand. So, I'm just going to show you what it looks like before. So we're going to do a console.log and cx5 and we're going to get our brand. So we're going to use getBrand and see what it looks like before we actually set it. And then we're going to set it. So, let's go ahead and do cx5.setBrand equals Mazda.
>
> **[3:40](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=220)** Now we've set our brand and then we're going to console.log it again. So, you can basically copy the code right here and paste it there. So again, why are we doing this? To make properties private or protected, so we're never accessing a property directly on the external code here. So, basically we're protecting anything that sits inside of our class, and we should do this for all the properties here if we want to protect them. Otherwise, we're setting them directly. This is not the ideal way. So let's go and take a look at what are the results. So if we go back to our sandbox, we have first No brand yet and this coincides with the code here, so we're trying to say, "Oh, let me get the brand we don't have any brand yet." And then we're setting it and then we're calling it, which is basically Mazda. So this is how you work with getters and setters. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** getbrand (3), setbrand (2), newbrand (1)
> **Env Vars:** es6 (2), suv (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Extends and Mixins

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to extends and usage](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=0)** - [Tutor] Extends are very simple to understand. In fact, we've used them already when we've talked about constructors. Their use is simple. When you want to leverage another class or create your own, you extend it. If you've ever worked with stateful components in [React](../../Skills/Web%20Development/React.js.md), you're familiar with extends. When you create a stateful component, you extend a React component class. So we're back to the app.js file, and as you can see, we've already used extends here. So this is primarily how it's used. You grab a class right here and you create a new one, and then you extend the previous class. So we created a class SUV and we're extending the car class. That's as simple as it gets. So let me show an example in React. So I'm going to create a new file here and I'm going to call this [React.js](../../Skills/Web%20Development/React.js.md). And in this file I'm going to import React from React. And we're also going to import component. And you need to do this with curly braces, and not parenthesis. There you go. So we're going to remove that one here. Okay. So now basically we have the class component that we can use. So if I were to create a button, for example, so let's create a class called Button. What I would do is in React, extend component
>
> **[1:36](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=96)** because there's a lot of stuff that were coming with the component from React, and then I would use the render function, and then inside of that render function, I would return some [HTML](../../Skills/Web%20Development/HTML.md) code. In this case, I'm going to add a button that says, "Hello."
>
> **[2:01](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=121)** And basically all you have to do after that is make sure that you export default button, the new class that you created. So in React, you will see this all the time, and everywhere in your React applications when you use the class component or a stateful component. So if you really want to practice how to use classes and extend them and do a whole bunch of stuff related to classes like super, constructor, things like that, then create a React application with components and you will get a lot of practice there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (10), [React.js](../../Skills/Web%20Development/React.js.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **File Paths:** app.js (1), react.js (1)
> **Env Vars:** suv (1), html (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### [Introduction to mixins and usage](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=0)** - [Instructor] When you want to extend a class and create a new one, you can only extend one at a time. And in most cases, that will be enough. But sometimes, you might need to extend more than one class into a single class. This is where mixins are useful. As for the Gang of Four, this is one pattern where we favor composition over inheritance. With extends, we inherit from the parent class, with mixins, we [compose](../../Glossary/Framework/Jetpack%20Compose.md) into a new class. Some use cases could be where you implement specific methods as part of a class and others into another. And then when you need to create a new class, which will include all these methods, mixins would be your solution to do so. There are multiple ways to add mixins into your class, but let me demonstrate a simple way of doing so. Also, be wary of using mixins in your everyday life as a developer, as they sometimes add complexity, and in some communities, like [React](../../Skills/Web%20Development/React.js.md), are frowned upon. This is, in a way, academic. So you'll understand what they are, but use them with caution. All right. So let's go ahead and create a method at the top here. So, what I'm going to do is minimize the class Car. And you can do this in most editors. And then what I'm going to do is simply create a method here. So, I'm going to call this method mixin. And in this method, I'm basically going to have a function madeIn.
>
> **[1:33](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=93)** That will return a console.log. With the message, "This car was made this year." All right. Now we're going to create our mixin. So, we're going to create a carMixin. Which will use proto. So from prototype. Which will basically add the mixin that we created above. And we're going to use it here, madeIn. And then use the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) super, like we've done before, madeIn. So we're still talking about classes. So we made our mixin here, but how do we assign it to a class? So what we're going to do is go inside of our SUV class. And typically, if you wanted to do something like that, if you wanted to add another method in this class here, you either created that method here or you would extend it and create a new class of SUVs, say, the white SUVs. And those white SUVs basically say what year they're made. But in this case, what we're doing, we're using mixins to add that to this class. And how do you assign it is the next step. So we're going to go here inside of our constructor. It needs to be inside of the constructor. Assign
>
> **[3:09](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=189)** mixin. And this is where we're going to use the object.assign to this, meaning, this class. We're going to mix and add our mixin. Like so. So now we can actually go inside of our console.log right here, and do a console.log with the function that we created above here. So let's go ahead and do that. Console.log. Cx5. And madeIn. And this is the function. And there you go. So in theory, when I hit Save, I'm going to see "This car was made this year." So let's go ahead and save. And we have the message that we put on the console.log. "This car was made this year." So this is how you view mixins inside of a class. So again, this is to allow you to compose different things into your class and not inherit from a previous class by extending. So a good example is if you create a whole bunch of classes but you want to add a method or a function to certain of these classes, then you use mixin, and you can add or assign that function to the classes you choose to. So mixins, again, is something that I would use with caution because it's frowned upon. It's not something that everybody likes to use, but at least it's good to be aware of what it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** madein (4), carmixin (1)
> **Warnings:** caution (2), be aware (1)
> **Env Vars:** suv (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980&t=0)** - [Emmanuel] Hopefully you've gained a bit more knowledge on what are [JavaScript](../../Skills/Software%20Development/JavaScript.md) classes and how to define, use them, with their options. Considering this subject as being an advanced one, the next step could be any JavaScript knowledge that you may not have at this point. If you need more knowledge on any JavaScript subjects, look for those in our library. If you'd like to practice what you learned in this course, [React](../../Skills/Web%20Development/React.js.md) is a great library to practice those concepts, as the library uses similar syntax to develop all their components and methods, and will be a great way for you to practice classes while playing with a library that uses functions and classes across the board. Thanks for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)
← [JavaScript- Closures](JavaScript-%20Closures.md) | **7 of 13** | [Learning App Building With Vanilla Javascript](../Software%20Development/Learning%20App%20Building%20With%20Vanilla%20Javascript.md) →

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