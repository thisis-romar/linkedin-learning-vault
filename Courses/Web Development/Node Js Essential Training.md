---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: node-js-essential-training-14888164
url: "https://www.linkedin.com/learning/node-js-essential-training-14888164"
level: Intermediate
updated: 6/10/2024
learners: 18820
skills:
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHctDFCWfBf5Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654187660358?e=2147483647&amp;v=beta&amp;t=poC_kdk8J3POqy2E36qjzgrHnv9UYq9r6VBSmPWCmG8"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
  - '[[Become a Full-Stack Web Developer]]'
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - null
  - '[[React Essential Training]]'
  - '[[React- Authentication]]'
next_courses:
  - '[[Learning npm- A Package Manager]]'
  - '[[SQL Essential Training]]'
  - '[[Learning npm- A Package Manager]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":1,"total":11,"prev":null,"next":"Learning npm- A Package Manager"},{"path":"Become a Full-Stack Web Developer","position":8,"total":12,"prev":"React Essential Training","next":"SQL Essential Training"},{"path":"Explore App Development with the MERN Stack","position":3,"total":13,"prev":"React- Authentication","next":"Learning npm- A Package Manager"}]'
path_count: 3
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node%20Js%20Essential%20Training.md)

![Node Js Essential Training](https://media.licdn.com/dms/image/v2/C560DAQHctDFCWfBf5Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654187660358?e=2147483647&amp;v=beta&amp;t=poC_kdk8J3POqy2E36qjzgrHnv9UYq9r6VBSmPWCmG8)

# Node Js Essential Training

> Node.js is a powerful tool for controlling servers, building web applications, and creating event-driven programs. And it takes JavaScript—a language familiar to all web developers—out of the browser. With Node.js, you can build applications that run on your laptop or even the cloud. In this course, learn the essentials of Node.js and start creating your own JavaScript applications. Instructor Eve

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-essential-training-14888164) | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learning the Node.js basics](#learning-the-nodejs-basics)
  - [What you should know](#what-you-should-know)
- [**1. What Is Node.js?**](#1-what-is-nodejs) (3 videos)
  - [Node.js history](#nodejs-history)
  - [Installing Node.js](#installing-nodejs)
  - [Using Visual Studio Code](#using-visual-studio-code)
- [**2. Node Globals**](#2-node-globals) (8 videos)
  - [Inspecting the global object](#inspecting-the-global-object)
  - [Using the require function](#using-the-require-function)
  - [Handling argument variables with process.argv](#handling-argument-variables-with-processargv)
  - [Working with standard input](#working-with-standard-input)
  - [Using standard output](#using-standard-output)
  - [Creating a delay with setTimeout](#creating-a-delay-with-settimeout)
  - [Incorporating setInterval](#incorporating-setinterval)
  - [Reporting progress with setInterval](#reporting-progress-with-setinterval)
- [**3. Node Modules**](#3-node-modules) (7 videos)
  - [Understanding core modules](#understanding-core-modules)
  - [Collecting information with readline](#collecting-information-with-readline)
  - [Using readline](#using-readline)
  - [Exporting custom modules](#exporting-custom-modules)
  - [Creating a module](#creating-a-module)
  - [Custom events with the EventEmitter](#custom-events-with-the-eventemitter)
  - [Consuming a module with EventEmitter](#consuming-a-module-with-eventemitter)
- [**4. File Management and Streams**](#4-file-management-and-streams) (8 videos)
  - [Listing directory files](#listing-directory-files)
  - [Reading files](#reading-files)
  - [Writing and appending files](#writing-and-appending-files)
  - [Creating directories](#creating-directories)
  - [Renaming and removing files](#renaming-and-removing-files)
  - [Renaming and removing directories](#renaming-and-removing-directories)
  - [Readable file streams](#readable-file-streams)
  - [Writable file streams](#writable-file-streams)
- [**Conclusion**](#conclusion) (1 videos)
  - [More training](#more-training)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning the Node.js basics](https://www.linkedin.com/learning/node-js-essential-training-14888164/learning-the-node-js-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/learning-the-node-js-basics?u=76281980&t=0)** - [Eve] If you've worked with [[JavaScript]] before, you might think of it just as a front-end technology, a way to add interactivity to web applications, to add features like button clicks and drop-downs. But that's not all JavaScript can do. With [[Node.js]], you can use your JavaScript skills for more. Everything from building command line tools, to creating servers, to interacting with the file system. Since Node was released in 2009, companies like PayPal, Netflix, and [[Microsoft]] have used it as a way to build scalable event-driven applications. In this course, we'll cover the basic features of Node core, including standard input and standard output, the module system, and the file system, with consumable yet real-world examples. I'm Eve Porcello. I've been teaching Node to engineers for almost a decade, and I use it nearly every day in my own projects. These days, Node.js is everywhere, and it's a really great time to get acquainted with the basics. Now's the time to become a full-stack JavaScript developer with Node. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Node.js]] (2), [[Microsoft]] (1)
> **CLI Commands:** node (6)
> **File Paths:** node.js (2)
> **Tools:** command line (1)
> **Speakers:** - [eve] (1)

#### [What you should know](https://www.linkedin.com/learning/node-js-essential-training-14888164/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/what-you-should-know?u=76281980&t=0)** - [Instructor] [[Node.js]] Essential Training will provide you with an in-depth introduction to Node.js, but there are a couple things that you may want to be familiar with before you get started. First of all, Node.js is [[JavaScript]], so you'll need to know a bit of JavaScript in order to work with Node.js successfully. If you'd like to learn more about JavaScript, check out the excellent [[JavaScript Essential Training]] with Morton Rand-Hendrikson. Also because we're dealing with the latest and greatest JavaScript syntax, a bit of ES6, ESNext, the latest JavaScript syntax would be great to know. You can check out my course Learning [[ECMAScript]] 6 or [[JavaScript Essential Training]] will use some of the syntax, as well. So if you feel comfortable with the JavaScript language, you are ready to become a full stack JavaScript developer with Node.js.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (9), [[Node.js]] (5), [[ECMAScript]] (1)
> **File Paths:** node.js (5)
> **CLI Commands:** node (5)
> **Env Vars:** es6 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Node.js?

[↑ Back to Table of Contents](#table-of-contents)

#### [Node.js history](https://www.linkedin.com/learning/node-js-essential-training-14888164/node-js-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/node-js-history?u=76281980&t=0)** - [Instructor] [[Node.js]] can feel like a brand new technology, but really, it's been around for about a decade and it's one of the most popular [[JavaScript]] tools available. Node.js was created by Ryan Doll in 2009 as a JavaScript runtime based on Chrome's VA engine. In 2011, [[npm]], the node package manager, released version 1.0, which allowed for the sharing of open source node libraries. This marked a huge shift in the way that code was shared and maintained and started to cement node as a huge player in the ecosystem. After some infighting in the community about implementation and project management, the Node.js Foundation was formed in 2015. The Foundation is made up of several large companies, including IBM, [[Microsoft]], PayPal and many, many others. And it's a collaborative project at the [[Linux]] Foundation. What this means is that these companies can shepherd the growth and the evolution of the library for many, many years to come. Today, the Node.js community is thriving with numerous conferences and events internationally and wide uses across various industries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[JavaScript]] (2), [[npm]] (1), [[Microsoft]] (1), [[Linux]] (1)
> **CLI Commands:** node (7), npm (1)
> **File Paths:** node.js (4)
> **Env Vars:** ibm (1)
> **Versions:** version 1 (1)
> **Speakers:** - [instructor] (1)

#### [Installing Node.js](https://www.linkedin.com/learning/node-js-essential-training-14888164/installing-node-js-21424556?u=76281980)

#### [Using Visual Studio Code](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-visual-studio-code?u=76281980&t=0)** - [Instructor] The tool I'm going to be using to edit the code for this class is Visual Studio. If you haven't used Visual Studio Code before, it's a free app that you can use for all sorts of different languages. So if you'd like to download it, you can. This will identify what type of machine you're using to access this. And then you can just go ahead and download this kind of like we did with [[Node.js]] before. We are going to show this in our finder, and then this should download this to our computer. So you can drag the exercise files folder over Visual Studio Code in the dock. And this will open this up for you. Now, something to note is that, and this is a question I get asked all the time. So if you're looking for a theme, meaning you're looking for a color scheme for your installation of VS Code, what you can do is go to the code menu, go to preferences, go to color theme. And this is going to expose a whole list of the available ones, as well as additional color themes that you can install. So the one that I'm actually using here is called Night Owl. So you should be able to find this in that list. So there's Night Owl Dark, there's Night Owl Light if you prefer that mode. I'm going to stick with Night Owl Dark for the purposes of the class today. Night Owl, there we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1)
> **Tools:** visual studio (3), vs code (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** node (1), find (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** node.js (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** kind of like (1)


### 2. Node Globals

[↑ Back to Table of Contents](#table-of-contents)

#### [Inspecting the global object](https://www.linkedin.com/learning/node-js-essential-training-14888164/inspecting-the-global-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/inspecting-the-global-object?u=76281980&t=0)** - [Eve] In the browser, the global object is called the window. But in [[Node.js]], the global object is called global. Let's take a look at this global Node.js object. So here is what is available to us within Node.js, these classes, objects, and functions. We don't need to import them to use them. They're scoped to the global namespace, which means we can access them at any time. So over here in our file, which is called global.js, we want to make sure that we can console.log as we expect to, and I feel like we can. (laughs) So let's go ahead and console.log a Hello World. All we need to do to run this file is we'll open up our terminal. We can hit Control + Backtick. We want to make sure we're navigated to the right directory. I'll type cd, I'll drag my start folder over the terminal and hit Enter. And now I should be able to run the file. So we can type node global.js, and this will console.log Hello World. So the console object is a part of the global namespace. So I could say global.console.log, and our results would be exactly the same. So let's remove this. We're going to try to run this again, but this time, and again, we can always hit up, the up arrow, to get the last command that we used. I'm going to remove the .js from this command. And we'll see that this is going to infer that this is a [[JavaScript]] file that can be run, and it'll run it accordingly. So Node.js will assume that that's a JavaScript file. We want to think about the global object in Node
>
> **[1:32](https://www.linkedin.com/learning/node-js-essential-training-14888164/inspecting-the-global-object?u=76281980&t=92)** as being a bit like the window object in the browser. I said "a bit like the window object" though because there are some differences. So let's go ahead and create a variable. And this string will be called hello. We'll say Hello World from Node.js. And now we can console.log global.hello. Now if the global object was exactly like the window object, we should be able to do this. But this is going to actually log undefined because the variables are scoped to this file or this module. So that means that every new file that we create will have its own scope for these variables. So let's get rid of that. It's too wordy anyway. Now if we node global, we can see the contents of that string. So we can use JavaScript in this file because Node.js uses Chrome's V8 interpreter. Node.js works with primitives, objects, arrays, and functions, just like your browser does. So we could do something like this. We could say let justNode = hello.slice.
>
> **[2:43](https://www.linkedin.com/learning/node-js-essential-training-14888164/inspecting-the-global-object?u=76281980&t=163)** And what we'll see here if we console.log justNode, this is going to slice our string at position 17. So it'll get everything after that. The function that we're used to from JavaScript works in much the same way. So we also could do something like this, where we inject a variable into a string. So console.log, Who let the justNode out. We're using a template string here. Notice these are backticks, which you'll find in the upper left-hand corner of your keyboard. We use the template string here. We're using the dollar sign and the curly braces to take whatever this value is and inject it right here into the string. So running this again, we should see this new string has been created. So we want to think about the global object as containing all of the objects, values, and methods that we can use in a Node.js file without having to import anything. For the [[Representational State Transfer (REST)|rest]] of this chapter, we're going to explore what else is available to us globally in Node.js.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (9), [[JavaScript]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (12), make (2), cd (1), find (1)
> **File Paths:** node.js (9), global.js (2)
> **Definitions:** is called (3), is a  (2), means that (1)
> **Code Identifiers:** justnode (3)
> **Tools:** terminal (2)
> **Exercise Files:** template (2)
> **Analogies:** just like (1)

#### [Using the require function](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-the-require-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-the-require-function?u=76281980&t=0)** - So what else do we have globally available to us in [[Node.js]]? Well, we have some references to the current file and the current directory. So let's replace this with a few console.log messages. Remember, console.log is available to us globally without having to import anything. So we want to log the __dirname and the __filename. We also want to make sure that we're in the right folder. So we will make sure that we're navigated correctly, typing cd, dragging that file directory over. And then we're going to say node global. So now this is going to point directly at the directory where the file is located and then directly at the file. So notice that the filename variable includes the entire path. So also available to us globally is the common.js module pattern. So this is the pattern we're going to use to import other code into our files. One way that we can import these other modules is we can use this function. First things first, we're going to import it and this typically happens at the top of the file. So we're going to import the path module from Node. Now, the path module is one of those core modules that's part of Node.js but in order to use it, we have to import it for us to be able to use all of these functions. So why might I want to use one of these functions? Well, I want to pull out just global.js from the file extension that we're getting from the filename variable. So the way that I can do that
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-the-require-function?u=76281980&t=93)** is we can use another template string. We'll say the file name is. We will use the template string here. And instead of just wrapping this around the filename, what we actually want to say is path.basename. And this is a function that's going to take in that filename as an argument. We also want to make sure to close this string. So we're opening it up with a back tick and closing it with a back tick. So when I hit save there, we should be able to run this again. Node global and check it out, we've plucked this from that string using this function. Any time we need to do any parsing of path values, we can use these functions. So another thing that we can do is let's take a look at what's else is available to us as part of that global object. To do so, we're going to use a for loop. So we'll say let key in global and then we'll console.log each one of these keys. So what we're saying here essentially is let's take a look at that global object and specifically, let's look at all of the keys that are part of that object. So you want to hit Save again, you want to run this again. Remember, you can hit the up arrow to see all of the previous commands that you've run. And this is going to give you some information about the global is available is here as well as a bunch of timing functions. So we're going to discuss some of these other global elements in the next couple lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2)
> **CLI Commands:** node (5), make (3), cd (1)
> **File Paths:** node.js (2), common.js (1), global.js (1)
> **Exercise Files:** template (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - so (1)

#### [Handling argument variables with process.argv](https://www.linkedin.com/learning/node-js-essential-training-14888164/handling-argument-variables-with-process-argv?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/handling-argument-variables-with-process-argv?u=76281980&t=0)** - [Instructor] One important object that's available to us globally is the process object. So it can be accessed from absolutely anywhere, and it contains functionality that allows us to interact with information about the current process instance. With the process object, we can get environment information, read environment variables, communicate with the terminal, and we can exit the current process. So it gives us a way to work with that current process instance. So one of the things that we can do with the process object is collect information from the terminal. So this information is stored in the process.argv array. So check this out. We're going to get rid of the code that was here before and replace it with a console log to figure out what is available in this process.argv value. Now, we want to make sure that we're navigated to the right file here, and we can run node global. This will then return to us this process.argv array. As you can see, it's an array that contains the path to node as well as the path to the file. So basically what we're seeing here is everything that I have sent when I created this command. So the location of node where that's running and then the file itself. Let's try to run our app again, but this time we're going to pass in some more information. So we'll say --user and then our name, and then we'll say --greeting, and we'll say "hello from node." Now if we hit Enter, we see a larger array. Now the process argv array starts
>
> **[1:34](https://www.linkedin.com/learning/node-js-essential-training-14888164/handling-argument-variables-with-process-argv?u=76281980&t=94)** with the same two things at the beginning, but each additional array value represents the [[Representational State Transfer (REST)|rest]] of what we typed into the console after the global module. So we see our user flag and our name, and we see our greeting flag and the greeting. So let's try to create the little function that's going to help us process some of these values. We're going to create a function called grab, and here we're going to grab this flag. We will say let indexAfterFlag equal process.argv.index of flag, plus one.
>
> **[2:16](https://www.linkedin.com/learning/node-js-essential-training-14888164/handling-argument-variables-with-process-argv?u=76281980&t=136)** So this is going to give us the position of the index after the flag. So whatever this value is and whatever this value is. So we're going to grab it this way. We'll say return process argv and then the index we want to grab is the index after the flag. So now let's try to grab the value after the greeting. We'll say let greeting equal grab --greeting, and then we'll say let user equal grab. We'll call that grab function, and this time we want to pass it the user flag. Perfect, so now we can console-log the greeting, and then we'll console-log the user. I also want to stop console-logging the process argv value up here. We'll just delete that, just so we don't get confused, and then check it out. We have been able to isolate the value that we've passed in with that flag for both. So utilizing this process.argv array is going to let us collect user input. We can create all sorts of cool command line applications with node just by understanding this array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (5), make (1)
> **Tools:** terminal (2), command line (1)
> **Code Identifiers:** indexafterflag (1)
> **Speakers:** - [instructor] (1)

#### [Working with standard input](https://www.linkedin.com/learning/node-js-essential-training-14888164/working-with-standard-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/working-with-standard-input?u=76281980&t=0)** - [Instructor] Another feature of the process object is standard input and standard output. These two objects offer us a way to communicate with a process while it's running. So what we're going to do next is we want to make sure that we're in our global file and that we're navigated to the right spot in the terminal, get rid of the code that's here, and replace this with process.stdout.write, and here, we're just going to add Hello, a couple of spaces, and let's try to run this. So node global, and then we'll see Hello, and then when we use stdout.write, we're sending some strings to the terminal. So here what we could do is add some new lines with the \n, and then this is going to add those lines for us. What we want to do next is we want to create an array of questions. So here we'll say const questions, and we'll add a few strings here. So we'll say, What is your name?, What would you rather be doing?, and then we'll say, What is your preferred programming language. Excellent. So we have our questions, then we're going to create an empty array of answers. So here is our answers array. And then finally, we're going to create a function called ask. So ask is going to take i in as an argument. So i is going to stand in for the index for one of these questions. And here we go. We're going to say process.stdout.write. We'll add a couple new lines here, /n/n.
>
> **[1:37](https://www.linkedin.com/learning/node-js-essential-training-14888164/working-with-standard-input?u=76281980&t=97)** We actually don't need the space in between those. And then, let's go ahead and say questions i, perfect. And because we're using this template string, holy moly, I need to make sure that I'm making this a template string with back ticks. And then finally, let's go ahead and add a little prompt for ourselves, we're going to say process.stdout.write, and then we'll add this little caret to indicate to ourselves that we are trying to accept some sort of input. Then finally, we're going to invoke the question. So we'll say, ask answers.length. And now let's try to run this again. Cool. So notice that running the app is going to ask the first question. It prompts the user for an answer, and then it quits. So we also leave the terminal out of whack because we use standard output here. So what we actually want to do is wait until the user answers the question. So what we can do is listen for a data event on this object using a function. So we're going to say process.stdin.on data, then we'll pass in a function here with the argument data, and here we'll say process.stdout.write data.toString.trim.
>
> **[3:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/working-with-standard-input?u=76281980&t=180)** So now we can continue to call ask with answers.length, and let's check this out. It says, What is your name? Eve. I'll say, that's my name, and it copies me. Stop it, stop it. (laughs) It's always copying me. By adding the listener, we start using node asynchronously. So every other app we've run until now has run through the command synchronously and quit, leaving us back at the terminal prompt. But this time the app is still running. It's waiting for some input. So in the next lesson, I'm going to talk to you about how we can stop the process when we're out of data and we're out of these prompts.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (2)
> **Tools:** terminal (4)
> **Exercise Files:** template (2)
> **Code Identifiers:** tostring (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Using standard output](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-standard-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-standard-output?u=76281980&t=0)** - [Instructor] So with our file, we want to change the code a bit to collect answers from our terminal. So the first thing we want to do is let's make sure to move our ask function above our process standard input. Another thing I'm noticing here is that this is looking for answers.length. If we wanted to set this to be an empty array, we could always add a default here. So we could add a default argument to this function and remove this from our function invocation here. So that's one thing we can do. The second thing I want to do is instead of echoing the answer back out, let's go ahead and add this to the array. So we're going to replace process standard input.write with answers.push. We'll take data, convert it to a string and trim off any white space. The next thing we want to do is say if our answers.length is less than our questions.length, then we want to call the ask function again with answers.length. So whatever the length of that answers array is. Otherwise, if there are as many answers as there are questions, we want to call process.exit to tell our process to quit. Now if we run node global again, it'll say what is your name? What would you rather be doing? What is your preferred programming language? And there we go. Now we can answer our questions and as we cycle through them, we're saving our answers but we've collected them but we're not really doing anything with them yet. So let's go back and display the results.
>
> **[1:34](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-standard-output?u=76281980&t=94)** In addition to this data event where if we have some new data, we're going to do everything that's inside of this function. We're going to call process.on and whenever we call exit, we're going to call another function. So check this out. First, we're going to say process.standard output. So write this to the terminal. We'll add some spaces here. Then we'll say process standard output.write and we're going to use a template string to add the message. We'll say Go answers one. We'll add a space. Answers zero and then you can say you can finish writing answers two later. Okay, so that's a long, long string but check this out. This is going to pluck the second item from the array, the first item from the array, our name, and then the programming language of choice to add that to our string. So let's see what we get. We're going to take another look. Node global, what's your name? What would you rather be doing? What's your preferred programming language. Go Skiing Eve you can finish writing [[JavaScript]] later. So our program is extremely friendly. It's some good advice. I'm going to trust the technology and end the lesson here. But before I do, remember the standard input and standard output objects give us some powerful tools for communication with running a process.
>
> **[3:08](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-standard-output?u=76281980&t=188)** So these tools are available on the process object, meaning that you can use them anywhere.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** node (2), make (1)
> **Tools:** terminal (2)
> **Exercise Files:** template (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Creating a delay with setTimeout](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-delay-with-settimeout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-delay-with-settimeout?u=76281980&t=0)** - [Instructor] In the last lesson, we used [[Node.js]] asynchronously by using event listeners. So what we said here was instead of just running the functions when they are added to our [[JavaScript]] file, we said only call the function that's sent to this function when we have a data event, and only send this function when we have an exit event. So call these functions at specific times. Now, another way that we can work with Node.js asynchronously is through timing functions. So the timing functions like set timeout, clear timeout, set interval, and clear interval work the same way that they do in the browser, and are available to us globally. So let's go ahead and create a set timeout function. We're going to create a new variable here called waitTime. So we'll say const waitTime. And we'll set that to 3,000, which means three seconds or 3,000 milliseconds. Then we're going to call a console log, and we'll say setting a waitTime. And we'll divide that by 1,000 so we can get the number of seconds. And we'll say second delay, setting a something second delay. Then we're going to create a function called timer finished. This is going to be set too. We'll use an arrow function here. An arrow function is just going to point directly at what we want to return which is another console log message saying done. Now here's where the set timeout comes into play. This is the cool part. Set timeout is going to take two in things.
>
> **[1:32](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-delay-with-settimeout?u=76281980&t=92)** The first is a function that we're going to call whenever the timeout has elapsed. So whenever that three-second delay has occurred, timerFinished. Then we'll plug in the wait time as the second argument to define how long it should take. Perfect. We're going to run it by saying node global. And now, it'll say the setting a three-second delay, and we're done. So we console log this message first, we wait the requisite time, and then we call this function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[JavaScript]] (1)
> **Code Identifiers:** waittime (3), timerfinished (1)
> **CLI Commands:** node (3)
> **File Paths:** node.js (2)
> **Definitions:** is a  (1), we call this (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Incorporating setInterval](https://www.linkedin.com/learning/node-js-essential-training-14888164/incorporating-setinterval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/incorporating-setinterval?u=76281980&t=0)** - [Instructor] So let's include another type of timer in this same file. The way I'll do that is by creating a new value called interval. Here we're going to define a certain interval where we want to call a function. So it's going to be every half a second, and we'll also set a current time of zero. From here, we're going to create another function called increment time, and increment time is going to be responsible, every 500 milliseconds, for adding a new 500 milliseconds to the current time. So this will continue to accumulate half-a-seconds, kind of like a really fast clock, a clock that ticks every half a second. So we'll say, waitInterval, then we will console-log, "waiting," currentTime, divided by 1,000 seconds. Excellent, so from here, instead of using setTimeout, which is going to time out and call a function after a certain time, we're going to say setInterval. We'll pass in increment time and our waitInterval. So I kind of think about this like a ticking clock. Every time this unit of time elapses, we're going to call the function. So check this out. Let's run it again, node global, setting a three-second delay waiting, waiting and notice that it calls done every time we're done with those three seconds.
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/incorporating-setinterval?u=76281980&t=93)** So the interval is fired every half a second, and we see the done message being logged because the interval is still running. So we need to hit stop with Control + C. That's a whole lot of ticking going on, and we need to modify our code to clear the interval. So we actually need to make some adjustments to our timerFinished function. Instead of just console-logging done, we're going to wrap our console log in a couple of curly braces, and before we do this, we're going to say clearInterval and pass in our interval. So this is going to be what we're looking for to clear. So which is the interval that we want to clear. So have we created this value yet? We have not. Let's go ahead and do that, and the place we'll do it is here line 17. So the interval is going to be set to this setInterval function, and now we should be able to kind of combine the two of these to stop the timer when we should. So let's check it out. We're going to run node global again, setting a three-second delay. We'll count up to three, and then we're done. So we can see the time when the setTimeout is invoked, our interval is cleared and our program exits.

> [!info]- Semantic Content
>
> **Code Identifiers:** waitinterval (2), settimeout (2), setinterval (2), currenttime (1), timerfinished (1)
> **CLI Commands:** node (2), make (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Reporting progress with setInterval](https://www.linkedin.com/learning/node-js-essential-training-14888164/reporting-progress-with-setinterval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/reporting-progress-with-setinterval?u=76281980&t=0)** - [Narrator] So let's for the fun of it add one more thing. We're going to add this to our increment time function. So right underneath where we're saying current time and wait interval, we're going to create a value called p, and we're going to set that equal to Math.floor. Inside of this we're going to take our currentTime divided by our waitTime. We're going to multiply that by 100. And then we're going to say process.standard output.clearLine.
>
> **[0:39](https://www.linkedin.com/learning/node-js-essential-training-14888164/reporting-progress-with-setinterval?u=76281980&t=39)** We're going to say process, standard, output.cursorTo and we'll set the cursor to zero. So that first position will get rid of our other console message. And here we'll say process, standard output.right, waiting.
>
> **[1:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/reporting-progress-with-setinterval?u=76281980&t=60)** And then we'll use that p value that we've set here. Let's go ahead and run it one more time. So now we see the waiting communicated as a percentage in place, and that's because standard output gives us the tools to manage how we write all of this data to the console. So we're using these tools to overwrite the last line and rewrite the percentage, which is pretty cool. So I wonder what else we could use this logic for. While we could communicate how far along with any asynchronous process using logic like this. So lots of cool powerful tools built directly into [[Node.js]] inside of these standard input and standard output objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [[Node.js]] (1)
> **Code Identifiers:** currenttime (1), waittime (1), clearline (1), cursorto (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Speakers:** - [narrator] (1)


### 3. Node Modules

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding core modules](https://www.linkedin.com/learning/node-js-essential-training-14888164/understanding-core-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/understanding-core-modules?u=76281980&t=0)** - [Instructor] In the last chapter, we took a look at the objects and functions that are globally available to you. One of those functions that's globally available to you is the require function. So in that one, we looked at how to load the path module by wrapping it in this require function. The require function is what we use to load modules. And for this chapter and in the next few chapters, we'll focus on those modules that you don't have to install with anything. They're already installed locally with your installation of [[Node.js]]. So the path module's an example of one of those. We can use it to isolate the file name from a full path. So we could say path.basename, use __filename. This is one that we saw before. Let's also make sure that you're in the correct folder. I am not, so then we'll say node core. And that will let us know core.js is the file that we're in. We can also use it to help create path strings. The path.join function can be used to join them together. So check this out. Here on line four, we're going to create a variable called dirUploads. And here we'll say path.join. We'll use __dirnam. We'll say www, files, uploads. So now if you console.log this dirUploads value,
>
> **[1:35](https://www.linkedin.com/learning/node-js-essential-training-14888164/understanding-core-modules?u=76281980&t=95)** we will see that this has created a path for us. So 03_01/start/www/files/uploads. So any strings that you pass in here will be appended to the path. There's also a utilities module. So let's go ahead and pull this in. We'll say const util equals require the util module. Util has a log method as well. So let's put this all underneath here. We'll say util.log and we'll say path.basename, __filename. So now we'll run it again. This will give us a little bit more information about our filename, things like our date and the time that we're running it. So here we're seeing the information logged to the console with the timestamp because the util.log function timestamps each log. There is also a module called v8. So we're going to require v8 here and with this, we can get information about how much memory our app is using. So let's try util.log again. We're going to say v8.getHeapStatistics. We will run node core again. You'll get a sense of how much memory your app is currently using. There are a handful of modules that you can use out of the box with Node.js. In the next couple of chapters, we're going to focus on these modules in particular.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2)
> **CLI Commands:** node (4), make (1)
> **File Paths:** node.js (2), core.js (1)
> **Code Identifiers:** diruploads (2), getheapstatistics (1)
> **Cross-References:** in the next (2), in the last (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Collecting information with readline](https://www.linkedin.com/learning/node-js-essential-training-14888164/collecting-information-with-readline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/collecting-information-with-readline?u=76281980&t=0)** - [Instructor] Readline is a module that allows us to ask questions of our terminal user. It's a wrapper around the standard input, standard output process that allows us to easily control the user prompt without having to work directly with stdin and stdout. So let's go ahead and create a new file here in our start folder called ask. We'll say ask.js. And here we want to first import our readline function. We'll say require readline. And then we're going to create a variable called rl, which is going to again be this wrapper around standard input and standard output in what's called an interface. So the interface has an input, which will map to process standard input. And then output is process.standard output. Then we'll call rl.question. The first thing that this will take in is a string. So we'll say how do you like Node? Then we'll add a callback function here. So we'll take in the answer. And we'll say console.log, Your answer is answer. Nice, so now I'm going to try to run this. I'll say node ask. How do you like Node? It's great! And then it'll echo that answer back out to me, which is pretty cool. Nice, so at this moment, we are successfully answering our own question.
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/collecting-information-with-readline?u=76281980&t=93)** In the next video, we're going to enhance this a little bit by creating this as a function.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3)
> **Definitions:** is a  (2)
> **File Paths:** ask.js (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Using readline](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-readline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-readline?u=76281980&t=0)** - [Instructor] Being able to ask a single question to ourself is pretty cool, but I think we can take this a step further. So I want to create a function as well as a list of questions. Let's start with the questions. We'll say, "what is your name?" We will say, "where do you live?" And "what are you going to do with [[Node.js]]?" Node.js, what are we going to do with you? So the next thing we'll do is create a function called collectAnswers. Now this function, collectAnswers takes in our questions array as well as a function called done that's going to fire when we're done asking questions. Now, the next thing we'll do is initialize an empty array to contain these answers, then we're going to create this other function, called questionAnswered. This will take in an answer, and we're going to push these into the answers array, and then we'll also trim off the answer white space if it exists. Okay, so some familiar code incoming, if answers.length is less than questions.length, then we want to ask another question, and we'll say questions, answers.length, questionAnswered. So check this out.
>
> **[1:36](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-readline?u=76281980&t=96)** Let's collapse our terminal for a second. We're going to remember that this question value takes in two things. So it takes in a question, which we add here as a string, but here we're adding as a position in an array, and then it takes in this callback function. So what we're saying is here call this function again with this value. We're only going to do this in cases where our answers array length is less than our questions array length, but if it's not, if we're out of questions, then we're going to return this function called done with our answers. So the done function, we're going to come back to in a second but just think of this as being a function, kind of like an exit function that's going to be called in the event that we're out of questions. The final thing we want to do here is we're going to take our rl question, and we're going to replace these values. So the first value is our question, right? So we can say questions, zero, and then our callback function, you guessed it, is going to be questionAnswered. So notice that this is outside of the questionAnswered function, and it's inside of the collectAnswers function. So now that we've created this, we can call collectAnswers. The first thing that we'll pass in here is questions. So remember, collectAnswers takes in our array of questions right here, and then it also takes in this function called done. So it's up to us now to define
>
> **[3:09](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-readline?u=76281980&t=189)** what this done function will do. When we're out of questions, we want to say "thank you for your answers." This is a friendly app we're building. We'll console-log all of those answers, and then we'll call process.exit. So let me scroll down a little bit. We're going to take a look at how this looks. We want to make sure that we're in the right folder, and we are. So now we can run node ask. "What is your name? Where do you live? What are you going to do with Node.js?" Do good things, make good profits. All right, so this is giving us an error, "answers is not defined," and that's because I didn't pass it in here. Holy moly, you were probably yelling at your video when I didn't do that, and now I can try rerunning that again. We're going to say have fun, make friends, build cool things. So now, all of our answers are being locked. So this is a great example of a few common patterns that exist within Node.js. The first of which is that we're constantly sending functions to other functions as arguments. So we're doing this in the case of our done function, and this is going to help us do something asynchronously. I don't want to just call done at any old moment. I want to call the done function when we're out of questions.
>
> **[4:43](https://www.linkedin.com/learning/node-js-essential-training-14888164/using-readline?u=76281980&t=283)** When we're done asking these questions, I want to call this function, and we define this function inside of this collectAnswers function as an argument. The first thing it takes in is our questions, and then we also have our answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4)
> **Code Identifiers:** collectanswers (6), questionanswered (4)
> **CLI Commands:** node (5), make (3)
> **File Paths:** node.js (4)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** kind of like (1)

#### [Exporting custom modules](https://www.linkedin.com/learning/node-js-essential-training-14888164/exporting-custom-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/exporting-custom-modules?u=76281980&t=0)** - [Instructor] Every [[JavaScript]] file is a module. We've been loading modules with the require function, and the require function is part of that common JS module pattern, but it only represents half of the pattern. The half that loads the modules. The other half of the pattern is module.exports or the mechanism by which we make our modules consumable. The first thing I'll do here in 03_04's start is I'm going to create a file called myModule.js, and in it we're going to create a few variables. So we're going to create a count variable. We'll set that equal to zero and a few different functions. So the first we'll be for incrementing, and this is going to increment our count, add one to our count, and then we'll also create a decrement function that is going to do the opposite. So --count will remove one, then we'll create this getter function that's going to get whatever the most recent count is. Perfect, so now what I can do is I'm going to export all of this. Module.exports. We will say anything is true. Who is Bill. We'll export the count, the incrementer function the decrementer function and getCount. Perfect, so now all of these values can be consumed by a different file. This other file is going to be called.
>
> **[1:34](https://www.linkedin.com/learning/node-js-essential-training-14888164/exporting-custom-modules?u=76281980&t=94)** Let's create it now, app js, and this is going to be responsible for consuming everything else. So we'll say const myModule = require, myModule. So we're importing this JavaScript file from the same directory. Now if we say console log, myModule.anything. Okay, so let's go ahead and run this. We're going to say node app, and this will return true. Similarly, I could say myModule.inc. This is going to return one. So we've incremented that count, and we should be able to return it. Nice, another way that we could import these files is that we could import them instead of importing the entire module. We could say let's require the incrementer, the decrementer and the getCount function, then if we call these functions a few different times. So we'll say inc, inc, inc, add one, then we could say console log, "the count is," getCount. Call the function inside of the template string, run it, and we should see that the count is three 'cause I've used this a few different times. So we can break our code up into separate files called modules. All of the variables in each file are scoped to that module. Everything that we are going to export
>
> **[3:06](https://www.linkedin.com/learning/node-js-essential-training-14888164/exporting-custom-modules?u=76281980&t=186)** can be consumed by a different file. Modules make our code reusable and consumable because we can publish our modules to [[npm]] and share them with the [[Representational State Transfer (REST)|rest]] of the community.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[npm]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** mymodule (5), getcount (3)
> **CLI Commands:** make (2), node (1), npm (1)
> **File Paths:** mymodule.js (1)
> **Env Vars:** npm (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a module](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-module?u=76281980&t=0)** - [Instructor] A powerful tool that ships with [[Node.js]] is the event emitter. The event emitter is Node,js' implementation of the pub-sub design pattern, and it allows us to create listeners for and emit custom events. So let's take a look at it. We're going to do so in this empty file called app js. The first thing we'll do is require events here, and then we're going to create emitter and set that equal to a new events.EventEmitter. Perfect. The next thing we'll do is we're going to use that pattern that we've seen a lot of. We'll say emitter.on, then we will create a custom event and add a callback function here that's going to log whoever the message and the user is. So here we'll say console log, user and message. Excellent, so once we've created this event, we need to emit this event, which we'll do with emitter.emit. We'll use the name of our custom event. We'll use the same string, customEvent, and then what we need to pass into this are two things. We need the message and the user. So we'll say "hello world," and this user here is a computer. Let's try this again. We're going to copy and paste this. We'll replace hello world.
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-module?u=76281980&t=93)** We'll say "that's pretty cool," and then the person who said that is Eve. I said that. Perfect, so now we can use process.standard input.on. Whenever there's some new data, we want to take that data, and we want to create an input. We'll say data toString. We'll trim off any white space. Now, if the input that's added is exit, then we're going to emit a custom event (chuckles) called Goodbye. That's the message, and the user is the process, and then we'll call process.exit. Nice, and then outside of this, if the input is something else, we'll say emitter.emit, customEvent. The message will be data.toString, .trim, and the user will be the terminal. I'm also noticing here I need to add quotes around the terminal. This is our user. That should be a string, not a variable. So let's try to run this. We'll pop open our terminal. We'll make sure that we're navigated to the right directory and run node app. Our two custom events that we've emitted are found here. So hello world and that's pretty cool,
>
> **[3:08](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-a-module?u=76281980&t=188)** and then if I type in anything else, this is going to be attributed to our terminal user. So we'll say Node.js is awesome. Isn't this cool? Collecting info with custom events. Perfect, and now if I type exit, the process says goodbye, and we're jumped out. The event emitter is a powerful tool that allows us to decouple logic and handle asynchronicity in [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[JavaScript]] (1)
> **CLI Commands:** node (4), make (1)
> **Code Identifiers:** customevent (2), tostring (2)
> **Tools:** terminal (4)
> **File Paths:** node.js (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Custom events with the EventEmitter](https://www.linkedin.com/learning/node-js-essential-training-14888164/custom-events-with-the-eventemitter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/custom-events-with-the-eventemitter?u=76281980&t=0)** - Earlier we had created this collect answers function and what we want to do next with it is we want to break it down into different modules. The first thing we'll do is inside of the start folder we will create a new folder called lib. And this is going to be a library folder that will contain other functions that we can use in different places. So here we want to call this collect answers js. Collect answers js is going to be responsible for housing, this collect answers function. Which really requires several things. So we're going to start to break down this file. We'll cut everything from line 24 and up and drop it here into the collect answers file. The next thing we'll do, is we still want to import read line. We still want to create our interface. But we want to make this consumable by another file. So we're going to replace this function. We'll save module dot exports. We'll set this equal to our function and we'll make this an arrow function. We want to point an arrow directly at what we want to return. Next, we want to over here in our ask file. We're going to use this module. So we'll say collect answers. We want to pull this in from dot slash lib slash collect answers. This is the name of the file as a module. So we don't need to append js at the end of it. Now, if I try to run this again, we'll see. What is your name? Where do you live?
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/custom-events-with-the-eventemitter?u=76281980&t=93)** Tahoe. What are you going to do with node js? Save the world. Perfect. So now this should echo back all of my answers to me.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (1)
> **Speakers:** - earlier (1)

#### [Consuming a module with EventEmitter](https://www.linkedin.com/learning/node-js-essential-training-14888164/consuming-a-module-with-eventemitter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/consuming-a-module-with-eventemitter?u=76281980&t=0)** - [Instructor] Let's make some adjustments to our collectAnswers function. And the first thing we want to do here is we want to require the EventEmitter and we're going to destructure this from the events module. So I only want to use event emitter. I don't have to use events.EventEmitter every time. Once I've imported this, I can make some adjustments to our function. The first thing we want to do is include the emitter which will be a new instance of the EventEmitter. And we'll call that there. And then down here at the end of our function, we want to return the emitter so that we can use it. So now we can use this emitter to raise events when certain things happen within this function. For example, let's say we wanted to raise an event every time the user answered a question. What we can do is say emitter.emit answer with whatever that answer is. So what we can do now over in our ask function, we want to be able to respond to these events from the file. So, because our collect answers function now returns an EventEmitter, what we can do is say const answerEvents set that equal to our collectAnswers function, and then here, we're going to call answerEvents.on. So remember we need to refer to the string for the event, our custom event called answer and then we need to provide a function for what to do when this happens. So we'll take in our answer.
>
> **[1:34](https://www.linkedin.com/learning/node-js-essential-training-14888164/consuming-a-module-with-eventemitter?u=76281980&t=94)** So we'll take in our answer as an argument in console.log. The answer is answer. Nice. Let's try running this we'll type node ask What's your name? The answer is Eve. Where do you live? Tahoe, the answer is Tahoe. What are you going to do with [[Node.js]]? Save the world. And now we'll still get all of these done events firing. We will be able though to have something happen when we get a new answer. Modules give us this great way to separate and reuse code. And the EventEmitter gives us a way to handle custom events when they are raised. By using both of these tools together with Readline, we've created a pretty cool little, no JS module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1)
> **CLI Commands:** make (2), node (2)
> **Code Identifiers:** collectanswers (2), answerevents (2)
> **File Paths:** node.js (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. File Management and Streams

[↑ Back to Table of Contents](#table-of-contents)

#### [Listing directory files](https://www.linkedin.com/learning/node-js-essential-training-14888164/listing-directory-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/listing-directory-files?u=76281980&t=0)** - [Instructor] [[Node.js]] also ships with a module that allows us to interact with the file system. The Fs module can be used to list files and directories, create files and directories, stream files, change file permissions, and really just about anything you'd need to work with files and directories. To get started, we want to go over to this empty file called list.js and we want to create an import. So we'll say require fs. From here we're going to create a variable called files. That's going to help us read files into a variable. So we'll say fs.readdirSync and we want to read from the directory that we're currently in. Now, if we console log these files and we save and run node list, this is going to give us an array of all of the files that are listed here. Notice that when I read the directory, I used a function called read dir sync. This means that I read the contents of this directory synchronously with a blocking request. Meaning that I'm blocking the [[Representational State Transfer (REST)|rest]] of the process until the file is read. Now, when we use any methods of the file system module, we are given the option to use them synchronously or asynchronously. So because we're blocking here, a way that we could do this differently is I could say read dir, we'll still read from the same spot but this time we're going to pass in a callback function. We'll say error files. Now, if there's some sort of error,
>
> **[1:35](https://www.linkedin.com/learning/node-js-essential-training-14888164/listing-directory-files?u=76281980&t=95)** we want to throw an error, otherwise we'll simply log the files. So check this out. I'll give it a save. I'll get rid of my other console message. And I also want to get rid of the variable that I created here. So now what we can do run node list again and our results will be exactly the same. When our app is already running, it's really nice to use these asynchronous requests so that the process can do other things while your file or directory is being read. Now, we also want to, just to prove that this is working, we'll console log reading files. Node list. Reading files will happen first when we're ready reading the files, we'll log the rest here to the console after.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Node.js]] (1)
> **CLI Commands:** node (4)
> **File Paths:** node.js (1), list.js (1)
> **Code Identifiers:** readdirsync (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Reading files](https://www.linkedin.com/learning/node-js-essential-training-14888164/reading-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/reading-files?u=76281980&t=0)** - [Instructor] Reading files is another feature of our FS module. It's going to allow us to read the contents of a file, encoded into some sort of a text format. What we'll do first is we want to continue to import our File System module. Then in order to check this out, we want to take a look over here in our start folder. And notice that we have this file called readme.md. It's filled with some Lorem ipsum text. We just need to read something, so might as well read some nonsense there. What we'll do here is we want to go ahead and replace the code that we had with a variable called ipsum. Set that equal to readFileSync. We're going to read this synchronously. And I'm going to include the name of the file, readme.md, as well as the text encoding format for the file, which is in most cases for text files going to be UTF-8. Then we'll go ahead and log this to our console. We should be able to see the contents from our text file being read out here. There's also an asynchronous counterpart to this function called read file. So just like before, we're going to pass in the name of the file. We're going to pass in UTF-8, but this time, as you might expect, we'll pass in a callback function. The two arguments that are sent here are err and ipsum. This means that we can get rid of the variable
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/reading-files?u=76281980&t=93)** that we've created. And this is going to log to our console, all of that text. And then finally here, let's say, "reading the file". This is going to let our users know that the process has begun. Now what we'll do here is we'll clear this out. We'll run node list. This will happen the same way. So we're reading the file. This time, we're reading it asynchronously when the system has finished retrieving the file's contents. The callback is invoked, allowing our main thread to do something else in the meantime. So up here at the top, we should be able to see "reading the file" happens first. Once we have the text read, we can go ahead and see it there.

> [!info]- Semantic Content
>
> **File Paths:** readme.md (2)
> **Env Vars:** utf (2)
> **CLI Commands:** node (1)
> **Code Identifiers:** readfilesync (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Writing and appending files](https://www.linkedin.com/learning/node-js-essential-training-14888164/writing-and-appending-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/writing-and-appending-files?u=76281980&t=0)** - [Instructor] The fs module can also be used to write or append data to a file. In this lesson, we'll take a closer look. Let's create a new file here called writeFile and we're going to import the file system module, as you might expect. And then we're going to create some Markdown. So we're going to create a little template here. We'll say let md equal, we'll use a couple back ticks. And then within this, we'll say this is a New File. We'll underline this with equal signs for our header, and we'll say ES6 Template Strings are cool. They honor whitespace. And then we'll add some bullets here. So we'll say Template Strings, Node File System, and Readline CLIs. Cool. So now that I've created that, I can create a new file, and write the Markdown contents to this file. So we'll do this here on line 14 with fs.writeFile. Now, what writeFile is going to take in? It needs to take in the name of the new file. So we'll say [[JavaScript]].md. We will, for the second argument, say what do we want to write to this file? So we'll say md.trim to trim off any extra white spaces from this string. Then we're going to create a function. And this callback function is going to log
>
> **[1:38](https://www.linkedin.com/learning/node-js-essential-training-14888164/writing-and-appending-files?u=76281980&t=98)** that the Markdown was created. Excellent. So now if I try to run this with node writeFile, we should see that the Markdown was created but the Markdown has actually been created. How cool is that? We've added all of this text to our file. Now let's use the appendFile method. So we're going to use appendFileSync to synchronously append to the file. So add to the file. Remember that all of our file system methods have a synchronous version and an asynchronous version. So in this particular version, we'll use this inside of our callback function. So let's do this first. We'll say function error, if there's an error, we're going to throw that error. Otherwise, we want to append something to our file. So we'll say appendFileSync. The file that we want to append to is right here. Javascript.md. And this time, we'll pass in a string that we want to append. We'll say n for new line, new line, and then we'll say [[Node.js]] Everyone! All right, cool. So now let's try to write the file again. We'll hit our up arrow. We will open our javascript.md file and check it out, we've added this little heading here. A couple things to note. The Markdown created message was added to the terminal as well. We wrote the file
>
> **[3:11](https://www.linkedin.com/learning/node-js-essential-training-14888164/writing-and-appending-files?u=76281980&t=191)** and then we appended that content to our file. So in this lesson, we created an appended text files but know that you can also create an append binary file as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Node.js]] (1)
> **Code Identifiers:** writefile (4), appendfilesync (2), appendfile (1)
> **File Paths:** javascript.md (3), node.js (1)
> **CLI Commands:** node (3)
> **Exercise Files:** template (3)
> **Env Vars:** es6 (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Creating directories](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-directories?u=76281980&t=0)** - [Eve] We can also create directories with the file system module's mkdir function. So let's create a new file and create some directories. I've created this new file here called directory.js, which is going to start with our require statement. And then we're going to use the asynchronous mkdir method and make a directory called your-files-here. So if we wanted to do this synchronously, of course we would use mkdirSync, but we want to use mkdir. The first argument we'll send here is your-files-here. Then we'll add this function with an error, and we'll say if the error occurs, then we want to console.log an error in a little template string here. Otherwise, we will message our user to let 'em know that the directory was created. So here we'll say directory created. Now we want to run this with node directory, and it looks like, if I type ls, we've created a directory called your-files-here. And if I type open. or explorer. on a PC, we'll see that the Finder opens up, and yep, here's my directory. So let's go ahead and try to run this again. So we'll run node directory, but this time we're getting an error. It's letting us know that the file already exists when I try to make this directory. We want to make sure that this is not created.
>
> **[1:34](https://www.linkedin.com/learning/node-js-essential-training-14888164/creating-directories?u=76281980&t=94)** So we'll say fs.existsSync your-files-here. Does this already exist? If so, console.log already there! Otherwise, we can create it if the directory doesn't exist. So let's just cut and paste this into the else condition. And now if we try to run this again, it'll say already there! But if we were to delete this directory and try to run it again, it'll say directory created, and we see it here. So everything seems to be working appropriately. We've used a combination of mkdir and existsSync to validate that the folder doesn't exist. And if it doesn't exist, then we'll create it.

> [!info]- Semantic Content
>
> **CLI Commands:** mkdir (4), make (3), node (2), ls (1)
> **Code Identifiers:** existssync (2), mkdirsync (1)
> **File Paths:** directory.js (1)
> **Exercise Files:** template (1)
> **Speakers:** - [eve] (1)

#### [Renaming and removing files](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-files?u=76281980&t=0)** - [Instructor] You may need to move, rename, or remove a file. The file system module has methods for all of those as well. So in this new file called rename.js, we're going to get our practice in with typing that same required statement again, and then we're going to rename a file with this renameSync function. So let's check out what we want to rename. First, we want to go to the start folder inside of lib. We see a file called config here. So we're going to use this as the file that we want to rename. So we'll provide the path to that. Then we're going to rename this as project-config.js. Then we will console.log("Config.js file renamed").
>
> **[0:52](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-files?u=76281980&t=52)** So let's try this. We're going to run node rename. It'll tell us that this was renamed, and I can validate that by checking out the folder. We can also use rename to move files, and we'll show this as the asynchronous version, so fs.rename. Let's go ahead and add a file here. So we'll call this notes.md inside of the lib folder. And we'll say notes, these are my notes. Perfect. So back to the file, we want to rename lib/notes.md. So here we're going to move it to the correct directory. So we want it at the root notes.md. And then because this is the asynchronous version, we need a function of some sort. This function should take in an error. If there's an error, throw it. Otherwise, we're going to log that the rename has been successful. So at this point, we can run this again. I need to comment out line three because this file doesn't exist anymore. We've successfully renamed it, but if we try that one more time, we can see that our file has been moved. It was moved from the lib folder to the root. The final thing I want to show here is that files can be removed with fs unlink. So, we want to try this here. I'm going to comment out all of this renaming business here.
>
> **[2:27](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-files?u=76281980&t=147)** We'll comment this out too. And we want to call fs.unlinkSync, which will synchronously remove our project config.js file from the folder. So lib/project-config.js. Let's make sure it's here, it is. But once I run it, it's going to go away. This lib file is now empty. We also can asynchronously remove files and unlink will asynchronously remove our notes file. So here we'll say notes.md. We'll pass in our callback function to handle an error. If error, throw error, otherwise we just want to console.log("Notes are gone"). Okay, so let's comment this one out 'cause that's gone. That'll cause an error if I run it, but we see notes here. Notes are gone.

> [!info]- Semantic Content
>
> **File Paths:** notes.md (3), config.js (2), rename.js (1), project-config.js (1), lib/notes.md (1)
> **CLI Commands:** node (1), make (1)
> **Code Identifiers:** renamesync (1), unlinksync (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Renaming and removing directories](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-directories?u=76281980&t=0)** - [Instructor] In the last lesson, we used the file system modules rename method to rename and move files. So you can use that same method to rename and move directories as well. The first thing we'll do inside of this directory's file is we're going to say fs require our file system module. And the method we want to use from this is renameSync. We can use this to rename a directory. So we have some here for you. We have a folder called assets, logs, and we want to go ahead and move it to the accounts folder. We'll say assets/logs and accounts/logs is where we want to move this. Now, if we console log logs folder moved and we run node directories, this is going to say that this was moved and we see that this is here. Now, something to note too, is that this already had a file in it. So we can see that the file directory has been moved with all of the files in it. We also saw in the last video, how we've removed files with the unlink method, but to remove directories we'll need to use a different one. So let's go back to our directories file. We're going to comment out our renameSync as well as our console log for now. And we are going to use fs.rmdir and we want to delete the accounts folder. So here we're going to handle errors as you might expect console.log our error, and then otherwise we want to let our users know
>
> **[1:33](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-directories?u=76281980&t=93)** that we're finished. So we'll say console.log accounts directory removed. Cool, so we see it's here. If we run this again, we'll see that this folder is not empty. So we're getting an error about that. So let's try to replace this. We'll say assets, 'cause assets is empty, right? We moved the files from that. So we'll try that again. And it'll say accounts directory removed you know what we meant, assets directory removed, and that has been removed. So again, the removed directory and removed directory sync methods, aren't going to work if there are files or sub directories in that directory. So if you want to remove the directory, we have to get rid of everything that's inside of it. So here's what we'll do. First things first, I want to comment out this first one we already got rid of that assets folder. Here we'll say fs.readdireSync. And we want to read from our accounts folder.
>
> **[2:44](https://www.linkedin.com/learning/node-js-essential-training-14888164/renaming-and-removing-directories?u=76281980&t=164)** And what we'll do here, is we want to iterate over this with forEach. So this is going to return an array of all the file names and the sub directory names directly here. We'll chain on forEach and loop through every file name that's in that array. So for each file, we're going to do the following fs.renameSync. For each file, we want to move it to the new directory. We also need to fix that little arrow function there. Then let's console.log files removed and then we'll remove synchronously our accounts directory. After we're done with that, let's go ahead and console.log that the folder has been removed. So if we run this again with no directories, we're still going to get that error. So let's create a new folder. We'll call it library. We should see that the files are removed, the folder is removed, and everything has been moved there accordingly. So our file [[CLI]] is getting pretty powerful. Now we have the ability to remove files and directories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Code Identifiers:** renamesync (3), foreach (2), readdiresync (1)
> **Cross-References:** in the last (2), go back to (1)
> **CLI Commands:** node (1)
> **Env Vars:** cli (1)
> **Speakers:** - [instructor] (1)

#### [Readable file streams](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980&t=0)** - [Instructor] Streams in [[Node.js]] give us a way to asynchronously handle continuous data flows. Understanding how streams work can dramatically improve the way your application handles large data. Streams are actually something we've already been using, so let's take a look at this ask.js file. Remember, this is where we took our questions and created an empty array of answers, and then we asked our users to type their answers into the chat. So process.standardoutput is what we've been using to write data to the terminal, but standard output is really a writeable stream. We send data chunks to it using the right method. Process.standardinput is a readable stream. Whenever a data event is raised like it is here, we're going to use a callback function and pass some data back into this callback function so that we can use it within the context of that function. So, we've been using streams already because process.standardinput and standard output implement the stream interface. Let's consider how working with file streams may allow us to improve our applications. We're going to open up this file called streams.js and we're going to import the file system module. Then we're going to call fs.readFile, and we're going to read from this file here. We have a directory called chat logs, and then in it, we have a chat. So let's go back to our streams here, and we're going to say ./chat-logs George Ben chat.log.
>
> **[1:30](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980&t=90)** We need to supply our UTF-8 character and coding format, and then the function that we'll pass here, error and chat log. Let's go ahead and start by reading the file length. So that should look like this, console.log file read chatLog.length.
>
> **[1:56](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980&t=116)** Now, after this, we'll say reading the file and let's make sure that we're in the right directory here. We're going to cd into 04 07 start, then we're going to node streams. This will read the file and it will work pretty fast, but the problem is that read file waits until the entire file is read before invoking the callback function. So before we make it to this function, we have to read the whole thing, and if we're reading a huge file, it's going to create some latency. So a better solution might be to use a readable stream. We'll do this here on line two. We'll say let stream equal fs.createReadStream.
>
> **[2:44](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980&t=164)** We'll pass in the same things except for our callback function here. I need to create a variable to hold onto this data, so we'll say let data. Now, instead of reading an entire file at once, a stream breaks the file down into bits or into different chunks. So, readable streams raise data events and pass small chunks of data to our callback. So we're not having to wait for an entire file before the first data chunk will log. We can use stream.once and we'll say on data. We will take a look at our function here, so we'll say, we'll use an arrow function and say console.log read stream started console.log, we'll add a line here with some equal signs, and then finally we'll say console.log chunk. So let's check this out. Read stream started and it's going to write everything here to our console. So the next thing we want to do is we want to call stream.on data. And here we'll also, we'll parse this chunk, and we'll say console.log chunk, chunk.length, display the character length of the data chunk, and then we're going to concatenate our data string with this text chunk. So we'll use data plus equals chunk. Finally, we'll add another one of these events,
>
> **[4:21](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980&t=261)** stream.on end. So when we're finished reading our chat log, the end event is going to be raised. So we'll say console.log finished data.length.
>
> **[4:39](https://www.linkedin.com/learning/node-js-essential-training-14888164/readable-file-streams?u=76281980&t=279)** Cool. So at this point, we should be able to run this node streams. So here we can see our different chunks. There's only one of these, but when it's over, we have a finished message. So stream.once is going to fire only once, it will log our read stream started and our equal sign divider here to our terminal, and it's also going to log all of the data. Now, when we call stream.on, it's going to break down everything into our different chunks. If I had a huge file, there might be a bunch of these different chunks. And finally, when we're finished, we're going to see that the data length is 115 characters. Using streams means that we don't have to wait for the entire file to finish loading before we start reading the data. Streaming video is a perfect example of this. When we watch a movie online, we can start watching it before the entire movie is fully downloaded. That's because we're breaking down our video into chunks that are streamed. So we can watch the first part of a movie while the [[Representational State Transfer (REST)|rest]] of the movie is still being delivered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (3), make (2), cd (1)
> **File Paths:** node.js (1), ask.js (1), streams.js (1)
> **Code Identifiers:** readfile (1), chatlog (1), createreadstream (1)
> **Definitions:** is a  (2), means that (1)
> **Tools:** terminal (2)
> **Env Vars:** utf (1)
> **Cross-References:** go back to (1)

#### [Writable file streams](https://www.linkedin.com/learning/node-js-essential-training-14888164/writable-file-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/writable-file-streams?u=76281980&t=0)** - [Instructor] In the last lesson, we introduced the [[Node.js]] stream interface and took a look at some readable streams. The other side of the stream coin is writeable streams. So the writeable stream is used to write the data chunks that are being read by the readable streams. So what we're going to do is improve our little ask questions app, and we'll do so first by importing, not surprisingly, our file system module. Let's also add a variable for the stream. We won't use it until our user answers the first question. So we'll say answerStream here, on line three. We'll keep our questions as is, we'll keep our empty array for our answers as is. Now, inside of our ask function, we can still use our process standard output. Let's create a once listener using process.stdin.once. We're going to listen for some data, and we'll pass that data to the callback function. So when the user answers the first question, what is your name, we're going to use that data to create a new markdown file. So here we'll say let name = data.toString.trim. So let's also refer to a file name, and we'll set that equal to whoever's name it is ./name.md. So if the file already exists, we'll find this out with existsSync fileName. If it already exists, we want to remove it and start fresh.
>
> **[1:35](https://www.linkedin.com/learning/node-js-essential-training-14888164/writable-file-streams?u=76281980&t=95)** So delete it with unlinkSync and the name of the file. Now what we can do inside of this is we can say, answerStream = fs.createWriteStream with the file name.
>
> **[1:52](https://www.linkedin.com/learning/node-js-essential-training-14888164/writable-file-streams?u=76281980&t=112)** So now we can use the file system to create a writeStream function. This is going to stream this new content to our new markdown file. So check this out. We'll say answerStream.write. And we'll say question answers for name, and then we'll add a new line character, we'll add a bunch of dividers, and then another new line character. Perfect. So now what we'll do, if we scroll down a little bit more, so we need to make some adjustments now to this onData function. So first we'll create a variable for our user's answer, so we'll say data.toString.trim. So let's pop that up here on line 31. Then we'll call answerStream.write, and when the user answers each question, we're going to write the question and the answer to the screen. We can use the answers array to identify which question was just asked. Then we'll call answerStream.write to grab the user's answer. So we'll just copy and paste this... And this time, we'll say answer. We'll add a function here. We're jumping out of the process when the time is right, when we're out of questions. Now, beneath this, we'll call answers.push
>
> **[3:26](https://www.linkedin.com/learning/node-js-essential-training-14888164/writable-file-streams?u=76281980&t=206)** and push in that answer. Now, the final thing we need to do here is, inside of our process on exit function, when the process exits, let's close our write stream using the close function. Now let's go ahead and try to run this again. We're going to make sure that we're in the right directory. We're going to node ask, what is your name.
>
> **[3:59](https://www.linkedin.com/learning/node-js-essential-training-14888164/writable-file-streams?u=76281980&t=239)** All right, and if we run this, it says question not defined. That is just a typo. The array is called questions, here on line 34. Let's try to run that again. Eve. What would you rather be doing? Skiing. What's your preferred programming language? You know it's [[JavaScript]]. Go skiing, Eve, so you can finish writing JavaScript later. I should also have, how cool is this, a new markdown file that's here in this directory with all of my questions and answers recorded. Working with streams is extremely important, because we're often dealing with a lot of data in our real world application, so I would highly recommend making use of these streams. You can create read streams and write streams to make your applications more performant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Node.js]] (1)
> **Code Identifiers:** answerstream (5), tostring (2), existssync (1), filename (1), unlinksync (1)
> **CLI Commands:** make (3), node (2), find (1)
> **File Paths:** node.js (1), name.md (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [More training](https://www.linkedin.com/learning/node-js-essential-training-14888164/more-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-essential-training-14888164/more-training?u=76281980&t=0)** - [Instructor] Well, we made it. We made it all the way through our [[Node.js]] Essential Training course. You may be wondering, "What's next for me as I continue my learning journey with Node.js?" Well, what I'd recommend to you is that first, you take a look at Node.js Essential Training Part 2. This will take you through how to work with [[Web Servers]] in Node.js, how to deploy your Node.js applications, and much, much more. I'd also encourage you to check out [[Express.js]]. Express is a wonderful framework, one of the most popular for building web applications using Node. If you're looking to get into testing, I would recommend the Jest testing library. And when you're ready to deploy, I would check out Vercel or Netlify as great options. And, of course, stay on top of the Node.js documentation. This is where you'll learn the latest about what's up and coming in the language. I'm so glad that you took the time to learn Node.js with me today. I hope that this is a useful foundation for whatever you build with Node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (7), [[Web Servers]] (1), [[Express.js]] (1)
> **CLI Commands:** node (9)
> **File Paths:** node.js (7), express.js (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Eve Porcello]]

## Resources

- Exercise files available

## Skills Covered

- Node.js

## Path Context

### In [[Explore Web Development with Node.js]]
**1 of 11** | [[Learning npm- A Package Manager]] →

### In [[Become a Full-Stack Web Developer]]
← [[React Essential Training]] | **8 of 12** | [[SQL Essential Training]] →

### In [[Explore App Development with the MERN Stack]]
← [[React- Authentication]] | **3 of 13** | [[Learning npm- A Package Manager]] →

## Appears In

- [[Explore Web Development with Node.js]]
- [[Become a Full-Stack Web Developer]]
- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Advanced Node.js]] — Node.js
- [[Node.js- Debugging and Performance Tuning]] — Node.js

---

[↑ Back to top](#)