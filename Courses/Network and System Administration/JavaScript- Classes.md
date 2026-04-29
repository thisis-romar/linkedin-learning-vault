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
  - '[[Become a JavaScript Developer]]'
prev_courses:
  - '[[JavaScript- Closures]]'
next_courses:
  - '[[Learning App Building With Vanilla Javascript]]'
path_nav: '[{"path":"Become a JavaScript Developer","position":7,"total":13,"prev":"JavaScript- Closures","next":"Learning App Building With Vanilla Javascript"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/JavaScript-%20Classes.md)

![JavaScript: Classes](https://media.licdn.com/dms/image/v2/C4E0DAQEoOxp-l_P-JQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668120338686?e=2147483647&amp;v=beta&amp;t=j2eN2jUp3tEt0q2eX53Y2-ukkFJ-pcBCZg1MyOlPMLs)

# JavaScript: Classes

> If you're new to JavaScript—or just unsure how classes work—then this course is for you. Join instructor Emmanuel Henri as he introduces JavaScript classes and how they work, how to define them, all their related terminology, and more. He starts with the foundations of classes and how they interact with other JavaScript features. He then goes over constructors, mixins, and extends, explaining how 

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382) | 1h 13m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Defining Classes]]** (7 videos)
- **[[#2. Constructors and Getters/Setters]]** (3 videos)
- **[[#3. Extends and Mixins]]** (2 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### JavaScript classes explored
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=0)** - [Instructor] Have you heard about classes, constructors, mixins, and don't know how they work or what they mean?
>
> **[0:07](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=7)** Are you coming from another language and trying to understand how classes are used in JavaScript?
>
> **[0:13](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=13)** If you've answered yes to any of these questions, you've come to the right place.
>
> **[0:18](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=18)** In this course we'll introduce JavaScript classes, and how they work, how to define them, all their related terminology and more.
>
> **[0:27](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=27)** Hi, I'm Emmy Henri.
>
> **[0:29](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=29)** And as soon as classes were introduced in ES6, I've used them ever since.
>
> **[0:34](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=34)** I would never look back.
>
> **[0:36](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=36)** And it is my pleasure to introduce you to this exciting technology that are classes.
>
> **[0:42](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=42)** We'll first explore the basics of JavaScript classes by looking at how we define them, hoisting, strict mode and prototypes.
>
> **[0:51](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=51)** Then we'll deepen our knowledge by examining constructors, in all its glory.
>
> **[0:56](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=56)** And the usage of the super method.
>
> **[0:58](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=58)** Finally, we'll take a look at extends and mixins, how they work and code examples.
>
> **[1:04](https://www.linkedin.com/learning/javascript-classes-19958382/javascript-classes-explored?u=76281980&t=64)** So if you're ready to deepen your knowledge of JavaScript by exploring classes, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), finally, (1), extends (1), let (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/course-prerequisites?u=76281980&t=0)** - [Narrator] This course is considered an intermediate to advanced course.
>
> **[0:04](https://www.linkedin.com/learning/javascript-classes-19958382/course-prerequisites?u=76281980&t=4)** We won't go over any basics of the language or syntax use therefore prior JavaScript knowledge or at least a good understanding of functions, variables, types, object literals and most of the basic syntax use is important to be able to follow along.
>
> **[0:21](https://www.linkedin.com/learning/javascript-classes-19958382/course-prerequisites?u=76281980&t=21)** If you've never done any JavaScript or would like to learn more on the subject take a look at our library for the essentials course.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 1. Defining Classes

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to classes
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=0)** - [Instructor] Classes were introduced with ES6 to have a better syntax for creating prototypes.
>
> **[0:06](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=6)** We could create these types of objects with prototypes in the past, however, the syntax was too verbal.
>
> **[0:12](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=12)** Therefore, the new classes were introduced with ES6.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=15)** As a result, the new class simply inherits what prototypes are and its methods.
>
> **[0:21](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=21)** It is just easier to define and use.
>
> **[0:24](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=24)** Also, if any parent prototypes or classes change, all its children inherits all the changes, even after an instance of a class has been created.
>
> **[0:35](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=35)** For example, if we create a class called Car, and then create an instance called SUV, and then change the main class with a C property, then its children will inherit this new property automatically, whether we want it or not.
>
> **[0:50](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=50)** Classes contrary to most of its declarations aren't hoisted to the top.
>
> **[0:56](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=56)** Therefore, classes need to be declared first if we need to use it.
>
> **[1:01](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=61)** We'll explore hoisting related to classes a little bit later in this course.
>
> **[1:05](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=65)** But as a general rule, if hoisting is a bit confusing to you, try as much as possible to declare classes, objects, and variables before they are used.
>
> **[1:16](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=76)** Also, there are two ways to define a class, class declaration, and class expression.
>
> **[1:22](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=82)** This is the way we define a class declaration.
>
> **[1:24](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=84)** I will explain more on how to declare classes this way in future videos.
>
> **[1:29](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=89)** This is the way we define a class expression, but more often than not, you'll see classes defined with a class declaration approach.
>
> **[1:37](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=97)** And in this course we'll use class declaration for all of the examples.
>
> **[1:42](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=102)** Finally, when you define a class, you can add properties as well as functions, or called methods, in the class.
>
> **[1:50](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-classes?u=76281980&t=110)** I will explore this when we work with them.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), finally, (1), class. (1)
> **Env Vars:** es6 (2), suv (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### Defining a class
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=0)** - [Lecturer] Now that we have some understanding of how to define a class, let's actually do this.
>
> **[0:05](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=5)** We'll first create a base project that we can use to play with throughout this course.
>
> **[0:10](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=10)** So let's get to it.
>
> **[0:11](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=11)** So the first thing I'm going to do is create a folder outside here.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=15)** I'm going to put it on the desktop and I'm going to right click, create a new folder, and I'm going to call this classes and then I'm going to drop it directly in VS Code.
>
> **[0:28](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=28)** Feel free to use any editors you want but I find VS Code to be very friendly for the types of projects that we're doing, especially in this course because we're going to use an extension that we're going to get right away that's called Live Server.
>
> **[0:44](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=44)** And it's going to allow us to always see the results of what we're doing.
>
> **[0:50](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=50)** This one here, so actually install this one.
>
> **[0:56](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=56)** Once it is install, all you're going to have to do is click go live when we have our project set up.
>
> **[1:01](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=61)** So let's go ahead and set up our project.
>
> **[1:04](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=64)** So we have our classes folder that we dropped inside of VS Code.
>
> **[1:08](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=68)** We're going to create the first file, which is an index.html.
>
> **[1:13](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=73)** And in this one what we're going to do is use a shortcut inside of VS Code that is simply doing doc for Doc.
>
> **[1:21](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=81)** And then hit tab.
>
> **[1:22](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=82)** And you're going to get most of the code that you need for your index html file.
>
> **[1:27](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=87)** So what we're going to change here is the title of the document to JavaScript Sandbox.
>
> **[1:38](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=98)** And then what we're going to do is literally have in our body a few things here.
>
> **[1:44](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=104)** So we're going to have an h1 which will be the title again, JavaScript Sandbox.
>
> **[1:54](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=114)** And then we're going to load the actual file that we're going to play with throughout.
>
> **[2:00](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=120)** So what we're going to do is load the script source and we're going to call this app.js like so.
>
> **[2:13](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=133)** So basically whenever we start our server right here it's going to load a JavaScript file that we're going to have in here.
>
> **[2:21](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=141)** So let's go ahead and create that file.
>
> **[2:25](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=145)** I'm going to save this here.
>
> **[2:26](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=146)** And then I'm going to create a new file which will be called app.js.
>
> **[2:32](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=152)** And just to make sure that our Go Live Server works what we're going to do is basically just do a console log.
>
> **[2:40](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=160)** And in this console log, we're going to pass Live server works
>
> **[2:49](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=169)** and then save this and then actually turn on our Go Live server.
>
> **[2:56](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=176)** And right now we have the title here and let's go into our command line.
>
> **[3:01](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=181)** So you can actually go into the three dots here, go into more tools, and go to developer tools.
>
> **[3:10](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=190)** And I'm on Chrome or use the shortcut here.
>
> **[3:15](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=195)** And let's go into the console.
>
> **[3:17](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=197)** And it says here, Live server works.
>
> **[3:20](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=200)** And also live reload is enabled.
>
> **[3:23](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=203)** So whenever we change our code with the app.js file, we're going to see the results either in the console here or on the html if we pass it to the html.
>
> **[3:33](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=213)** Don't worry about this one, we'll always need an icon.
>
> **[3:36](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=216)** It doesn't have one.
>
> **[3:37](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=217)** So this is something that you can ignore.
>
> **[3:40](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=220)** Okay, so now let's go into VS Code again and we're going to create our first class.
>
> **[3:46](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=226)** So let's go ahead and do that.
>
> **[3:49](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=229)** I'm going to remove this code and I'm going to create a class called car.
>
> **[3:58](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=238)** And this class will have a constructor.
>
> **[4:00](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=240)** So we're constructing our class and we're passing doors to that constructor.
>
> **[4:06](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=246)** We're passing an engine and then we're passing color.
>
> **[4:11](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=251)** So basically what we need to build a first car, we need these things here.
>
> **[4:17](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=257)** So basically we're going to simply create these things here, pass doors, and I'm going to repeat this for the three elements that we have in our constructor.
>
> **[4:34](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=274)** And I'm doing Option + click to click those two.
>
> **[4:37](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=277)** I'm going to change this to engine and then click here, Option + click, and I'm going to do color.
>
> **[4:47](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=287)** And we're also going to create a method.
>
> **[4:49](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=289)** So these are the properties of our class called car but also we need to have a method.
>
> **[4:56](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=296)** So I'm going to create a method called car stats.
>
> **[5:01](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=301)** And in this one we're going to return and I'm going to use template strings here to return.
>
> **[5:13](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=313)** This car has, and if you're not familiar with template strings, basically it's a string but with the ability to pass on variables inside of it.
>
> **[5:24](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=324)** So what we're going to do is do ${ we're going to pass this.doors} and then we're going to pass a, and you'll see the results when we actually create our first car with this class.
>
> **[5:43](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=343)** This.engine and a beautiful, then again color.
>
> **[5:58](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=358)** So when we use this method, basically what we're going to be able to do is return a message with what we've created for the car.
>
> **[6:07](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=367)** So now that we have our first class with our properties and our method, we can save this and then we're going to actually use it.
>
> **[6:17](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=377)** So I'm going to create a new car called cx5 which basically needs this class car.
>
> **[6:29](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=389)** And then for the class car, we're going to pass four doors, and we're going to pass V6 as the engine, and then we're going to pass the color gray to that first car.
>
> **[6:45](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=405)** So now we've created a car using the class car that we just created.
>
> **[6:50](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=410)** And now we're going to use console log to kind of get all of this somewhere in our application and our console log.
>
> **[6:58](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=418)** So we're going to console log the cx5 and then we're going to console log as well cx5 and dot leveraging the method dots inside of the cx5 because now that we've created a new car, this method is available inside of the car that we created.
>
> **[7:22](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=442)** It inherits basically the method that we have in a class.
>
> **[7:26](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=446)** So we're going to use that function or method and basically return this message.
>
> **[7:34](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=454)** Okay, so now that we have all this, we can save it.
>
> **[7:38](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=458)** Our server will automatically update.
>
> **[7:41](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=461)** So let's go back to here.
>
> **[7:44](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=464)** And we have first our object or our car which has four doors, an engine V6, and the color gray which has these elements here.
>
> **[7:56](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=476)** And obviously the car class comes from the prototype.
>
> **[8:01](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=481)** So we have all these elements here.
>
> **[8:03](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=483)** So we have access to the car stats, the constructor, so we can have a lot more information about this class here but we also have the method that return the message.
>
> **[8:13](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=493)** This car has four doors, a V6, and a beautiful gray color.
>
> **[8:18](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=498)** So as you can see, creating a class and then creating a new object from that class is fairly easy.
>
> **[8:26](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=506)** And leverage also the functions or methods that are available inside of that class.
>
> **[8:30](https://www.linkedin.com/learning/javascript-classes-19958382/defining-a-class?u=76281980&t=510)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (9), class. (4), this. (3), class, (1)
> **Tools:** vs code (5), command line (1)
> **File Paths:** app.js (3), index.html (1)
> **Prerequisites:** install (2), set up (2)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** template (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Differences between functions and classes
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=0)** - [Instructor] If you look at it in the end, classes are functions themselves, but because they inherit how they are constructed because of their prototype background, there are some minor differences in between a straight function and a class that might help you determine when to use one over the other.
>
> **[0:18](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=18)** The first difference, as mentioned before, functions are hoisted to the top of your file even when declared dead last versus classes where there aren't hoisted.
>
> **[0:28](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=28)** Functions, expressions and declarations can be overwritten, whereas classes can be extended, but not overwritten.
>
> **[0:37](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=37)** For example, you can't overwrite the door's property in a car class.
>
> **[0:42](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=42)** These are the major differences between the two.
>
> **[0:44](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=44)** So here are a few best practices and use cases.
>
> **[0:48](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=48)** When you want to create a blueprint to be reused over and over and still need functions, create a class and add methods to it.
>
> **[0:57](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=57)** A good example are React class components where we use them to create and use these components with lifecycle methods available to us in our React applications.
>
> **[1:06](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=66)** We build a component by extending the class component.
>
> **[1:10](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=70)** When you need to create a brand new function not requiring any specific properties or methods, then a function is better.
>
> **[1:17](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=77)** Another example related to React is when we use a stateless functional component which is, in fact, a pure function.
>
> **[1:25](https://www.linkedin.com/learning/javascript-classes-19958382/differences-between-functions-and-classes?u=76281980&t=85)** A great way to practice and start thinking when to use one over the other is to build an application with the React library, where you always have to think about when to use a stateless versus a stateful component, which is the equivalent of a function and a class.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), class. (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Hoisting explained with classes
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=0)** - [Instructor] Hoisting is always a subject that is confusing for newcomers.
>
> **[0:04](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=4)** So let's explore this a bit and how it relates to classes.
>
> **[0:07](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=7)** So we're back in the app.js, and just to show you that a class has to be declared before it can be run.
>
> **[0:14](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=14)** Let's go in, copy this code here or all of it actually from 13 to 16 like so.
>
> **[0:24](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=24)** And I'm going to also comment this and add it to the top of the class.
>
> **[0:29](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=29)** Now if I save this and I go back to my server we got an error.
>
> **[0:36](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=36)** So basically we cannot use anything from the class until it actually is declared.
>
> **[0:41](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=41)** So this code will work, this code won't work.
>
> **[0:47](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=47)** So let me delete that.
>
> **[0:51](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=51)** Bring that back on command this and save.
>
> **[0:56](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=56)** And as you can see, everything is running as it should.
>
> **[1:00](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=60)** But what about functions?
>
> **[1:02](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=62)** What if I created a function here that say hi and that function will return?
>
> **[1:13](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=73)** Console log.
>
> **[1:17](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=77)** Hello? This function can be called anywhere.
>
> **[1:27](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=87)** So if I save that and I go to the top here and I run this function here.
>
> **[1:35](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=95)** This will work. That means that a function once it hits the JavaScript engine It is going to be hoisted to the top.
>
> **[1:42](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=102)** And if we run this, it's going to be successful.
>
> **[1:46](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=106)** So if I go back to my browser, hello, this function can be called anywhere.
>
> **[1:52](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=112)** So you can basically run this function anywhere in the code and the functions are hoisted to the top as opposed to a class, which is not.
>
> **[2:00](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=120)** So if I cut this and I paste it right here And I save it. The function will still run again.
>
> **[2:12](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=132)** So this is what hoisting is.
>
> **[2:13](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=133)** So basically for classes you need to declare them first before you actually use them.
>
> **[2:18](https://www.linkedin.com/learning/javascript-classes-19958382/hoisting-explained-with-classes?u=76281980&t=138)** But for variables, for functions you can actually declare them before or after and use them anywhere in your code and you will be fine.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (3), class. (1), delete (1), this, (1)
> **Cross-References:** go back to (2)
> **File Paths:** app.js (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Strict mode with classes explained
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=0)** - [Instructor] If you've never heard, or aren't quite sure what strict mode is, we'll go over what it is in a second.
>
> **[0:06](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=6)** If you do, know that when you declare a class, it is automatically in strict mode, and also all its properties and methods you create for it.
>
> **[0:14](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=14)** If you know what strict mode is, feel free to skip to the next video.
>
> **[0:17](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=17)** If not, I'll explain what strict mode is.
>
> **[0:20](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=20)** So go in a new browser window and search for Mozilla strict mode and then click on the documentation here and scroll down until you see this here.
>
> **[0:34](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=34)** So strict mode was introduced in ES5, and it is a mode that improved the quality of JavaScript programming practices.
>
> **[0:41](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=41)** It adds a few items that makes us, as a developer, more aware of what we do with JavaScript.
>
> **[0:46](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=46)** For example, it adds some errors as throw errors that were silent before.
>
> **[0:52](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=52)** So we are more aware of certain types of errors that we didn't have access to before.
>
> **[0:56](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=56)** It also helps with performance with certain code that before was compiling much lower due to their nature.
>
> **[1:02](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=62)** For example, code that was prone to error now, will throw an error and then the developer can review it to make it better for compilation.
>
> **[1:10](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=70)** Better code equals better performance.
>
> **[1:12](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=72)** It prohibits some syntax to be used in future versions of JavaScript as well.
>
> **[1:18](https://www.linkedin.com/learning/javascript-classes-19958382/strict-mode-with-classes-explained?u=76281980&t=78)** So if you need more specific examples of strict mode in action, look at the documentation on the subject on this site.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (2), class, (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** es5 (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)

#### What are static methods and usage?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=0)** - [Instructor] Static methods are methods that aren't accessible through an instance of a class, but only available through the class itself.
>
> **[0:08](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=8)** They're usually created for utility functions that don't relate to the instance of the class.
>
> **[0:13](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=13)** I rarely need to use static methods, but when I do it's always good to be aware that they exist.
>
> **[0:18](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=18)** Let me demonstrate.
>
> **[0:20](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=20)** So what we're going to do in our class, we're going to introduce the static method.
>
> **[0:25](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=25)** So let's go ahead after the carStats, we're going to create a static method, which is it's going to be called totalDoors, and those will take two arguments, so car1, car2.
>
> **[0:42](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=42)** So basically we're going to calculate the amount of doors in between the two cars.
>
> **[0:46](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=46)** So what we're going to do is first create a constant, doors1,
>
> **[0:55](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=55)** which will be equal to car1.Doors.
>
> **[1:02](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=62)** And then we're going to do the same again.
>
> **[1:03](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=63)** So const doors2 which will equal to car2-doors.
>
> **[1:12](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=72)** And then what we'll return is doors1 plus doors2.
>
> **[1:22](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=82)** So we're going to expect a number here.
>
> **[1:25](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=85)** Okay, so let's test that.
>
> **[1:28](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=88)** We have the static totalDoors here.
>
> **[1:30](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=90)** So in theory, we should be able to access it here, right?
>
> **[1:34](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=94)** So let's save this.
>
> **[1:36](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=96)** Now if we go back into a browser, we're going to see that we have our car like before, and if we click we don't have access to the actual totalDoors function here.
>
> **[1:46](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=106)** We see the carStats function here but we don't see the other one.
>
> **[1:50](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=110)** However, if we click on the constructor class here we'll see the totalDoors here.
>
> **[1:56](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=116)** So we can only access it through the class car.
>
> **[1:59](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=119)** All right, so let's go back to our code and see how we can demonstrate this.
>
> **[2:03](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=123)** So I'm going to create a second car here so we can make the calculation first.
>
> **[2:08](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=128)** And I'm going to create right here a Civic which equals to a new car.
>
> **[2:19](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=139)** And on this one I'm going to have three doors because it's a hatchback, V4 as an engine, and then make this one blue.
>
> **[2:31](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=151)** And then what we're going to do is do the exact same thing that we've done here.
>
> **[2:34](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=154)** So we're going to copy and paste and change this to Civic.
>
> **[2:49](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=169)** Civic. And then what we're going to do is again do a console log.
>
> **[2:57](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=177)** And instead of using the Civic or the CX5, we're going to use the car class dot, and then we can use totalDoors as a function.
>
> **[3:10](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=190)** So we're going to pass the CX5 as a first argument because it takes two arguments.
>
> **[3:16](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=196)** We're going to pass the Civic as well.
>
> **[3:21](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=201)** Now that we have the Civic and we're calling the civic instance and then calling the carStats, and then we're using the car class with its static method, totalDoors, and we're adding the doors from the two cars.
>
> **[3:35](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=215)** Let's see what happens.
>
> **[3:37](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=217)** So now we have the first car, we have the second car.
>
> **[3:41](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=221)** We have the message that we're expecting and then we have what we return as a number seven which is basically the number of doors from the first one and the second one.
>
> **[3:53](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=233)** So this is how you use static methods.
>
> **[3:55](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=235)** These are utility functions that you can create for the class, but not passable to the actual instance of that class, and not usable for those.
>
> **[4:05](https://www.linkedin.com/learning/javascript-classes-19958382/what-are-static-methods-and-usage?u=76281980&t=245)** But simply tools that you'd like to use for other means outside of the instance of that class.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), let (6), class, (4), function (3), class. (2)
> **Code Identifiers:** totaldoors (6), carstats (3)
> **CLI Commands:** make (2)
> **Env Vars:** cx5 (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Prototype methods explained and usage
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=0)** - [Instructor] As we mentioned before, because a class is a prototype in itself, we inherit all of its methods.
>
> **[0:07](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=7)** So there are multiple methods we can use with it.
>
> **[0:09](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=9)** Let me demonstrate.
>
> **[0:11](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=11)** So the first thing I'm going to do is clean up a little bit of our code here.
>
> **[0:14](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=14)** So, what I'm going to do is remove the function that is right here, and I'm going to just have the cx5 showing up in our console.
>
> **[0:26](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=26)** So we have this, let's save this and go back to the browser, and right now I have the car.
>
> **[0:35](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=35)** Okay, so if we open up the car here, we have all these things that we have access to.
>
> **[0:40](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=40)** Before we had a class in ex6, prototype was the actual object that we were using for that purpose.
>
> **[0:49](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=49)** So, inside of our prototype, we have these functions or these methods that we have access to.
>
> **[0:54](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=54)** But if we click again on the prototype here, which is basically the class or the prototype that everything is built from, we have other methods that we have access to.
>
> **[1:07](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=67)** So we have access to all these here, for example, we can turn something to a string.
>
> **[1:12](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=72)** So, let's just play with this.
>
> **[1:14](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=74)** So we have our cx5 instance that has for example, doors, number of doors, which is, the answer is four, so if I turn this, I got four doors, but if I do cx5 dot doors dot, I have all these other functions or methods that I can use, so, isPrototypeOf, has its own property, or we can turn it to a string, so if I do this, it's actually going to tell us what this function is made of.
>
> **[1:47](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=107)** But if I do the actual function, then I will have the string here.
>
> **[1:52](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=112)** So basically, when you are actually in the class, you are using the old prototype object and you have access to all its methods inside of it.
>
> **[2:03](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=123)** So, these are all the methods that are coming with the classes, with the prototypes, and with the actual values that you're using.
>
> **[2:10](https://www.linkedin.com/learning/javascript-classes-19958382/prototype-methods-explained-and-usage?u=76281980&t=130)** So sometimes if you wonder what you can use outside of the methods or the functions you can create yourself with a class, take a look at what JavaScript offers here in the sandbox and explore and test and try new functions and you'll see what you can do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), this, (3), class, (2), from, (1)
> **Cross-References:** we mentioned (1), go back to (1)
> **Analogies:** for example (2)
> **Code Identifiers:** isprototypeof (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Constructors and Getters/Setters

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to constructors
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=0)** - [Instructor] Constructors are part of the syntax of a class.
>
> **[0:04](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=4)** If you don't include one, one will be generated for you.
>
> **[0:08](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=8)** Also, you can only do one constructor per class.
>
> **[0:11](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=11)** Otherwise there will be a syntax error thrown at you.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=15)** But what are constructors exactly?
>
> **[0:17](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=17)** They are a method that creates an object when a new instance of the class is created and whatever values you pass to the new instance will be initialized inside of this object.
>
> **[0:28](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=28)** In simple terms, the constructor builds our initial object for us.
>
> **[0:32](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=32)** For example, when we create the new CX five instance of the class car, we pass the values for V6 and grey.
>
> **[0:41](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=41)** The constructor of the class then builds a new object and assigns the values to door, engine and the color.
>
> **[0:49](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=49)** This is what the constructor does.
>
> **[0:51](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=51)** In our example, we also pass values as we create the new instance of the car class.
>
> **[0:57](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=57)** But we could also define default values without passing anything, and we'll explore this next.
>
> **[1:04](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=64)** Also, when we work with classes we can use the keywords super, which allows to call the methods of a parent class.
>
> **[1:12](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=72)** If we create a new class called SUV we could use the keywords super to call the car stats method of the car class.
>
> **[1:20](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-constructors?u=76281980&t=80)** So now that we've got some basics on these items let's explore them and code over the next few videos.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), pass (3), super (2), let (1)
> **Env Vars:** suv (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Constructor and super usage
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=0)** - [Instructor] So we explore constructors and the super keyword in the introduction.
>
> **[0:04](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=4)** So let's use them.
>
> **[0:06](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=6)** So we're going to go back to our class car here and what we're going to do is extend that class into a brand new class called SUV.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=15)** So let's go ahead and do that.
>
> **[0:16](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=16)** So we're going to create the class SUV and this class extends the class car.
>
> **[0:25](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=25)** So basically what we're going to do is leverage all the stuff that we've built in here.
>
> **[0:29](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=29)** So we'll leverage doors, engine, and color into our new class.
>
> **[0:35](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=35)** And the way to do that is first, you have to declare what you're going to use in this class, in the class SUV with the constructor.
>
> **[0:44](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=44)** So we're going to do doors, engine, color, brand
>
> **[0:54](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=54)** and then the method car stats.
>
> **[0:58](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=58)** And then in order to use these elements or these properties from the previous class, this is where the super keyword comes into play.
>
> **[1:07](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=67)** So we're going to do super and then we're going to add the elements of the class that were extended, which is the car class.
>
> **[1:16](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=76)** So engine, color and car stats like so.
>
> **[1:23](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=83)** And then what we could do is add any properties that we would like to create specific to that class.
>
> **[1:29](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=89)** So for example, we added brand here, so we're going to do this.brand = brand.
>
> **[1:39](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=99)** Now these are elements that we're passing when we create an instance of that class.
>
> **[1:44](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=104)** So for example, when we create a new instance of car, we are passing these things here.
>
> **[1:48](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=108)** But what if you would like to have default elements or properties inside of a class but not necessarily have to pass a value to it?
>
> **[1:56](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=116)** Well, this is where you could do something like this, this.wheels = 4, so basically any cars has
>
> **[2:08](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=128)** usually four wheels, so we don't need to pass that value to the cars or the SUV, it has four wheels.
>
> **[2:17](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=137)** And let's say we're living in a hot country, the AC's always turned on.
>
> **[2:24](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=144)** So these elements would be added to any instance of the class SUV that are created automatically, and you don't have to pass it when you build it.
>
> **[2:34](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=154)** Otherwise, if you want to pass a value and build it, you have to declare it here.
>
> **[2:39](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=159)** We can also create a new method just specific to the SUV.
>
> **[2:43](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=163)** So let's create this one called my brand.
>
> **[2:48](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=168)** And then inside of that method will return in the console log and we're going to leverage again temporal strings.
>
> **[2:58](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=178)** This SUV is a this.brand, so basically we're going to pass
>
> **[3:08](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=188)** the brand inside of that method.
>
> **[3:11](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=191)** So when we create a new SUV, the brand is going to be passed inside of that method.
>
> **[3:16](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=196)** So let's go ahead and use some of that.
>
> **[3:18](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=198)** So instead of creating a brand new car, I'm going to leverage this cx5 here 'cause it is a SUV.
>
> **[3:25](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=205)** So we're going to go ahead and create this as a SUV.
>
> **[3:30](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=210)** So a new instance of the SUV class for four doors, V6, gray.
>
> **[3:37](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=217)** And now we need to pass a for value which is the brand Mazda.
>
> **[3:43](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=223)** And then what we're going to do, we're going to also leverage the method here.
>
> **[3:49](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=229)** So let's go ahead and do that.
>
> **[3:51](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=231)** Since now this is of a class SUV, we can leverage my brand.
>
> **[3:55](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=235)** If you wanted to create, let's say for example, a car instance, you couldn't leverage my brand here.
>
> **[4:02](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=242)** So because I switched it to SUV, now I can use that method.
>
> **[4:06](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=246)** So I'm going to do console.log(cx5.myBrand),
>
> **[4:17](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=257)** which is a function, and then run it.
>
> **[4:21](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=261)** So once I save this, we can go back into our Sandbox.
>
> **[4:26](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=266)** We're going to see everything as it should.
>
> **[4:29](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=269)** So we have a new SUV that has the AC on, the brand Mazda, color grey, four doors, engine V6, and four wheels.
>
> **[4:39](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=279)** So these elements are still there regardless of the fact that I didn't pass 'em because they're default properties that are part of that class.
>
> **[4:48](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=288)** Now we have the message, this car has four doors, a V6, and a beautiful grey color, and also, this SUV is a Mazda.
>
> **[4:57](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=297)** So in short, this is how you do super and constructors.
>
> **[5:00](https://www.linkedin.com/learning/javascript-classes-19958382/constructor-and-super-usage?u=76281980&t=300)** When you create a brand new class extended from other classes. Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (7), class. (5), super (4), this. (3)
> **Env Vars:** suv (15)
> **Definitions:** is a  (4)
> **Analogies:** for example (3)
> **Code Identifiers:** mybrand (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Introduction and usage: Getters and setters
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=0)** - [Instructor] Getters and setters were introduced with ES6 to allow to set and get properties without accessing them directly.
>
> **[0:08](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=8)** It also allows for more flexibility as you could do anything you want with the property before returning them.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=15)** This is how we protect properties from direct access, therefore making them private or protected.
>
> **[0:21](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=21)** So let's take a look at the code and how we can do this.
>
> **[0:25](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=25)** So right now, if we take a look at the brand inside of our SUV car here, we are accessing it directly.
>
> **[0:33](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=33)** If we wanted to protect that particular property, we need to change a few things.
>
> **[0:37](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=37)** So I'm going to first remove it from directly setting it inside of our constructor, and instead of doing this.brand equals brand, what I'm going to do is _brand, and this actually tells JavaScript that we want to protect this particular property here, and I'm going to set it initially with something in here, No brand yet.
>
> **[1:06](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=66)** And then what we need to do, we can use keywords that were introduced with ES6, get and set to actually define the functions or the methods that are going to allow us to set the brand and get it from the class.
>
> **[1:22](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=82)** So let's go ahead and do that.
>
> **[1:23](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=83)** So, I'm going to use the keyword get to define getBrand, and then what we're going to do is return this._brand.
>
> **[1:40](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=100)** So, this is our getter.
>
> **[1:42](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=102)** So if we want to actually get the brand, we need to use the getBrand method and therefore we're not accessing the brand directly.
>
> **[1:52](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=112)** And now we need to have a setter with the keyword set to define the method that's going to allow us to set the brand.
>
> **[2:01](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=121)** And I'm going to call this setBrand, which needs a new brand that will be passed, and then I'm going to this._brand equals newBrand,
>
> **[2:20](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=140)** therefore this method actually sets the brand.
>
> **[2:30](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=150)** So now, how do we use this?
>
> **[2:31](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=151)** Well, for starters, we can't actually set the brand directly when we build a new instance of our class SUV, so we need to remove that from here.
>
> **[2:40](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=160)** That's the first thing.
>
> **[2:41](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=161)** Now, the second thing that we need to do is actually set our brand somewhere in here.
>
> **[2:49](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=169)** So what I'm going to do is simply do a comm on this one, and then, for the cx5, what I'm going to do is simply remove all this and we're going to do new code for that.
>
> **[3:02](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=182)** So, the first thing I need to do right after I constructed my cx5, I need to actually set the brand.
>
> **[3:10](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=190)** So, I'm just going to show you what it looks like before.
>
> **[3:12](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=192)** So we're going to do a console.log and cx5 and we're going to get our brand.
>
> **[3:22](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=202)** So we're going to use getBrand and see what it looks like before we actually set it.
>
> **[3:29](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=209)** And then we're going to set it.
>
> **[3:30](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=210)** So, let's go ahead and do cx5.setBrand equals Mazda.
>
> **[3:40](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=220)** Now we've set our brand and then we're going to console.log it again.
>
> **[3:44](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=224)** So, you can basically copy the code right here and paste it there.
>
> **[3:50](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=230)** So again, why are we doing this?
>
> **[3:53](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=233)** To make properties private or protected, so we're never accessing a property directly on the external code here.
>
> **[4:04](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=244)** So, basically we're protecting anything that sits inside of our class, and we should do this for all the properties here if we want to protect them.
>
> **[4:13](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=253)** Otherwise, we're setting them directly.
>
> **[4:15](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=255)** This is not the ideal way.
>
> **[4:16](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=256)** So let's go and take a look at what are the results.
>
> **[4:19](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=259)** So if we go back to our sandbox, we have first No brand yet and this coincides with the code here, so we're trying to say, "Oh, let me get the brand we don't have any brand yet."
>
> **[4:32](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=272)** And then we're setting it and then we're calling it, which is basically Mazda.
>
> **[4:37](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=277)** So this is how you work with getters and setters.
>
> **[4:41](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-and-usage-getters-and-setters?u=76281980&t=281)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (4), private (2), protected (2), class. (1)
> **Code Identifiers:** getbrand (3), setbrand (2), newbrand (1)
> **Env Vars:** es6 (2), suv (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Extends and Mixins

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to extends and usage
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=0)** - [Tutor] Extends are very simple to understand.
>
> **[0:02](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=2)** In fact, we've used them already when we've talked about constructors.
>
> **[0:06](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=6)** Their use is simple.
>
> **[0:08](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=8)** When you want to leverage another class or create your own, you extend it.
>
> **[0:12](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=12)** If you've ever worked with stateful components in React, you're familiar with extends.
>
> **[0:17](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=17)** When you create a stateful component, you extend a React component class.
>
> **[0:22](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=22)** So we're back to the app.js file, and as you can see, we've already used extends here.
>
> **[0:28](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=28)** So this is primarily how it's used.
>
> **[0:30](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=30)** You grab a class right here and you create a new one, and then you extend the previous class.
>
> **[0:37](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=37)** So we created a class SUV and we're extending the car class.
>
> **[0:42](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=42)** That's as simple as it gets.
>
> **[0:45](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=45)** So let me show an example in React.
>
> **[0:48](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=48)** So I'm going to create a new file here and I'm going to call this React.js.
>
> **[0:55](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=55)** And in this file I'm going to import React from React.
>
> **[1:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=60)** And we're also going to import component.
>
> **[1:07](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=67)** And you need to do this with curly braces, and not parenthesis.
>
> **[1:12](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=72)** There you go.
>
> **[1:13](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=73)** So we're going to remove that one here.
>
> **[1:18](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=78)** Okay.
>
> **[1:20](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=80)** So now basically we have the class component that we can use.
>
> **[1:25](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=85)** So if I were to create a button, for example, so let's create a class called Button.
>
> **[1:31](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=91)** What I would do is in React, extend component because there's a lot of stuff that were coming with the component from React, and then I would use the render function, and then inside of that render function, I would return some HTML code.
>
> **[1:53](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=113)** In this case, I'm going to add a button that says, "Hello."
>
> **[2:01](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=121)** And basically all you have to do after that is make sure that you export default button, the new class that you created.
>
> **[2:13](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=133)** So in React, you will see this all the time, and everywhere in your React applications when you use the class component or a stateful component.
>
> **[2:23](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-extends-and-usage?u=76281980&t=143)** So if you really want to practice how to use classes and extend them and do a whole bunch of stuff related to classes like super, constructor, things like that, then create a React application with components and you will get a lot of practice there.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (3), class. (3), let (2), function (2), case, (1)
> **File Paths:** app.js (1), react.js (1)
> **Env Vars:** suv (1), html (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### Introduction to mixins and usage
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=0)** - [Instructor] When you want to extend a class and create a new one, you can only extend one at a time.
>
> **[0:05](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=5)** And in most cases, that will be enough.
>
> **[0:07](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=7)** But sometimes, you might need to extend more than one class into a single class.
>
> **[0:12](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=12)** This is where mixins are useful.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=15)** As for the Gang of Four, this is one pattern where we favor composition over inheritance.
>
> **[0:21](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=21)** With extends, we inherit from the parent class, with mixins, we compose into a new class.
>
> **[0:28](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=28)** Some use cases could be where you implement specific methods as part of a class and others into another.
>
> **[0:35](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=35)** And then when you need to create a new class, which will include all these methods, mixins would be your solution to do so.
>
> **[0:42](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=42)** There are multiple ways to add mixins into your class, but let me demonstrate a simple way of doing so.
>
> **[0:48](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=48)** Also, be wary of using mixins in your everyday life as a developer, as they sometimes add complexity, and in some communities, like React, are frowned upon.
>
> **[0:58](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=58)** This is, in a way, academic.
>
> **[1:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=60)** So you'll understand what they are, but use them with caution.
>
> **[1:04](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=64)** All right.
>
> **[1:04](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=64)** So let's go ahead and create a method at the top here.
>
> **[1:07](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=67)** So, what I'm going to do is minimize the class Car.
>
> **[1:11](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=71)** And you can do this in most editors.
>
> **[1:14](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=74)** And then what I'm going to do is simply create a method here.
>
> **[1:18](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=78)** So, I'm going to call this method mixin.
>
> **[1:22](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=82)** And in this method, I'm basically going to have a function madeIn.
>
> **[1:33](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=93)** That will return a console.log.
>
> **[1:39](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=99)** With the message, "This car was made this year."
>
> **[1:51](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=111)** All right.
>
> **[1:52](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=112)** Now we're going to create our mixin.
>
> **[1:54](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=114)** So, we're going to create a carMixin.
>
> **[2:01](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=121)** Which will use proto.
>
> **[2:03](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=123)** So from prototype.
>
> **[2:05](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=125)** Which will basically add the mixin that we created above.
>
> **[2:11](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=131)** And we're going to use it here, madeIn.
>
> **[2:16](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=136)** And then use the word super, like we've done before, madeIn.
>
> **[2:20](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=140)** So we're still talking about classes.
>
> **[2:22](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=142)** So we made our mixin here, but how do we assign it to a class?
>
> **[2:28](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=148)** So what we're going to do is go inside of our SUV class.
>
> **[2:33](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=153)** And typically, if you wanted to do something like that, if you wanted to add another method in this class here, you either created that method here or you would extend it and create a new class of SUVs, say, the white SUVs.
>
> **[2:47](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=167)** And those white SUVs basically say what year they're made.
>
> **[2:52](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=172)** But in this case, what we're doing, we're using mixins to add that to this class.
>
> **[2:57](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=177)** And how do you assign it is the next step.
>
> **[3:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=180)** So we're going to go here inside of our constructor.
>
> **[3:03](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=183)** It needs to be inside of the constructor.
>
> **[3:07](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=187)** Assign mixin.
>
> **[3:11](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=191)** And this is where we're going to use the object.assign to this, meaning, this class.
>
> **[3:19](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=199)** We're going to mix and add our mixin.
>
> **[3:25](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=205)** Like so.
>
> **[3:26](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=206)** So now we can actually go inside of our console.log right here, and do a console.log with the function that we created above here.
>
> **[3:36](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=216)** So let's go ahead and do that.
>
> **[3:39](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=219)** Console.log.
>
> **[3:42](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=222)** Cx5.
>
> **[3:44](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=224)** And madeIn.
>
> **[3:48](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=228)** And this is the function.
>
> **[3:51](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=231)** And there you go.
>
> **[3:52](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=232)** So in theory, when I hit Save, I'm going to see "This car was made this year."
>
> **[3:56](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=236)** So let's go ahead and save.
>
> **[4:00](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=240)** And we have the message that we put on the console.log.
>
> **[4:03](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=243)** "This car was made this year."
>
> **[4:06](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=246)** So this is how you view mixins inside of a class.
>
> **[4:09](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=249)** So again, this is to allow you to compose different things into your class and not inherit from a previous class by extending.
>
> **[4:17](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=257)** So a good example is if you create a whole bunch of classes but you want to add a method or a function to certain of these classes, then you use mixin, and you can add or assign that function to the classes you choose to.
>
> **[4:31](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=271)** So mixins, again, is something that I would use with caution because it's frowned upon.
>
> **[4:37](https://www.linkedin.com/learning/javascript-classes-19958382/introduction-to-mix-ins-and-usage?u=76281980&t=277)** It's not something that everybody likes to use, but at least it's good to be aware of what it is.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (6), function (5), let (4), class, (3), extends (1)
> **Code Identifiers:** madein (4), carmixin (1)
> **Warnings:** caution (2), be aware (1)
> **Env Vars:** suv (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What's next?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980&t=0)** - [Emmanuel] Hopefully you've gained a bit more knowledge on what are JavaScript classes and how to define, use them, with their options.
>
> **[0:08](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980&t=8)** Considering this subject as being an advanced one, the next step could be any JavaScript knowledge that you may not have at this point.
>
> **[0:15](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980&t=15)** If you need more knowledge on any JavaScript subjects, look for those in our library.
>
> **[0:21](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980&t=21)** If you'd like to practice what you learned in this course, React is a great library to practice those concepts, as the library uses similar syntax to develop all their components and methods, and will be a great way for you to practice classes while playing with a library that uses functions and classes across the board.
>
> **[0:41](https://www.linkedin.com/learning/javascript-classes-19958382/what-s-next?u=76281980&t=41)** Thanks for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Become a JavaScript Developer]]
← [[JavaScript- Closures]] | **7 of 13** | [[Learning App Building With Vanilla Javascript]] →

## Appears In

- [[Become a JavaScript Developer]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)