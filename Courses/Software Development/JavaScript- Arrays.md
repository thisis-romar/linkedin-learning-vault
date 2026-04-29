---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-arrays
url: "https://www.linkedin.com/learning/javascript-arrays"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 3/7/2025
learners: 20252
skills:
  - JavaScript
exercise_files: true
github: "https://github.com/LinkedInLearning/javascript-arrays-2864011"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEMPgkHry1_ug/learning-public-crop_675_1200/B4DZVN0GZ9G8AY-/0/1740767258494?e=2147483647&amp;v=beta&amp;t=1AMLKM2tPgMyRE6r5hG-rDtMuwGZuN5JZn4gHt6IO7w"
linkedin_topic: Software Development
learning_paths:
  - '[[Improve Your JavaScript Language Skills]]'
prev_courses:
  - '[[JavaScript- Recursion]]'
next_courses:
  - '[[JavaScript- Maps and Sets]]'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":5,"total":8,"prev":"JavaScript- Recursion","next":"JavaScript- Maps and Sets"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Arrays.md)

![JavaScript: Arrays](https://media.licdn.com/dms/image/v2/D4D0DAQEMPgkHry1_ug/learning-public-crop_675_1200/B4DZVN0GZ9G8AY-/0/1740767258494?e=2147483647&amp;v=beta&amp;t=1AMLKM2tPgMyRE6r5hG-rDtMuwGZuN5JZn4gHt6IO7w)

# JavaScript: Arrays

> Programming language arrays store collections of data in a single variable, and you can use them as lists, as stacks, as collections, and more. They also have built-in properties and methods that allow you to utilize them as needed. JavaScript arrays may sound simple, but they offer many more features than arrays in other programming languages. In this course, Jamie Pittman covers how to integrate

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays) | 1h 15m | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Arrays: The Basics]]** (5 videos)
- **[[#3. 2.  Working with Ordered Data]]** (5 videos)
- **[[#4. 3. Evaluating Data for a Single Value]]** (4 videos)
- **[[#5. 4.  Implementing Stacks and Queues]]** (4 videos)
- **[[#6. 5.  Bringing It Together: Advanced Methods]]** (6 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### So many ways to work with arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=0)** - [Jamie] One of the beautiful things about programming is how it is constantly evolving.
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=5)** JavaScript is no exception.
>
> **[0:07](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=7)** Over time, JavaScript has grown and many aspects have been added, including array methods.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=12)** When you first started learning JavaScript or really any programming language for that matter, you have one goal in mind, make your code work.
>
> **[0:21](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=21)** As you learn and grow as a developer, you pick up best practices along the way and learn how to write better code.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=28)** This course was created to help you step up your JavaScript skills and learn the ins and outs of some popular array methods.
>
> **[0:35](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=35)** Maybe you've used some of them before or you've seen them used in a pull request and wanted to learn more about how they work.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=42)** In this course, we will learn about several JavaScript array methods, their syntax, how they work and examples of them in action.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=50)** Hi, I'm Jamie Pittman and I'm a front end software engineer.
>
> **[0:55](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=55)** Join me and learn more about JavaScript array methods.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [jamie] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=0)** - [Instructor] This course provides a beginner to intermediate level overview of JavaScript array methods.
>
> **[0:06](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=6)** You absolutely do not need to be an expert or senior level developer, but this course does require a basic understanding of JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=15)** Advanced knowledge is not required for this course.
>
> **[0:18](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=18)** If you're just starting out, this will be a great way to further your knowledge of JavaScript, specifically with array methods.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=24)** If you have a few years of development experience under your belt, this will help you sharpen your skills.
>
> **[0:31](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=31)** You should be comfortable using and understanding arrays, objects, and functions.
>
> **[0:37](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=37)** Additionally, you should be familiar with how to use your favorite text editor and your terminal.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=42)** Again, just a basic, familiar level is all that's needed for this course.
>
> **[0:47](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=47)** You do not have to be a master with the terminal or JavaScript.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=54)** For this course, I'll be using Visual Studio Code, or VS Code, and it's built-in terminal.
>
> **[1:01](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=61)** Please use whatever text editor and terminal that you feel most comfortable using.
>
> **[1:06](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=66)** It does not have to be VS Code.
>
> **[1:09](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=69)** In order to run the code we will be writing, you will need to install Node.js on your machine if it is not already installed.
>
> **[1:17](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=77)** For more information on how to get set up with Node.js, please go to [nodejs.org/en/download](https://nodejs.org/en/download).
>
> **[1:29](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=89)** We will be using Node to run our exercise files and see the array methods at work.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=94)** In order to run the files in Node, you'll need to navigate to the directory that the files are stored in within your terminal.
>
> **[1:40](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=100)** Then you'll type node and the name of the file.
>
> **[1:43](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=103)** Make sure to include the file's extension, which will be js in all of these files.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=108)** That's all you'll need for this course.
>
> **[1:50](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=110)** Now let's get started.

> [!info]- Semantic Content
>
> **Tools:** terminal (5), vs code (2), visual studio (1)
> **CLI Commands:** node (5), make (1)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **File Paths:** node.js (2)
> **Code Keywords:** require (1), let (1)
> **UI Navigation:** go to (1), navigate to (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Exercise Files:** exercise files (1)


### 2. 1. Arrays: The Basics

#### Arrays overview
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=0)** - [Presenter] What is an array?
>
> **[0:03](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=3)** An array is a type of object that stores collections of data in a single variable.
>
> **[0:08](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=8)** Arrays are flexible, list-like objects.
>
> **[0:11](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=11)** They are used frequently in JavaScript and can be transformed in a number of different ways.
>
> **[0:17](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=17)** Arrays have built in properties and methods to allow us to utilize them as needed.
>
> **[0:22](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=22)** By having a better understanding of how to use arrays to their great potential, you can write more clean, succinct code and reach solutions much more quickly.
>
> **[0:33](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=33)** Let's consider a real world situation to give you a high-level example of how arrays are used.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=40)** Here is a simple array of strings of all of my pet's names.
>
> **[0:44](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=44)** As you can see, this is very list-like.
>
> **[0:47](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=47)** The contents of the array could have been anything, numbers, booleans, objects.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=54)** Taking the previous example one step further, our pets array now contains several objects.
>
> **[1:00](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=60)** Each object represents one of my pets and information specific to them.
>
> **[1:05](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=65)** By using the information, you'll learn in this course, you'll be able to take the data you've been provided and transform it to figure your needs.
>
> **[1:13](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=73)** What if you wanted to filter the array down to only include dogs?
>
> **[1:17](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=77)** What if you wanted to sort the array based on the age of each pet or calculate the total number of pets in the array?
>
> **[1:26](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=86)** Array methods exist in order to help you easily work with the data provided.
>
> **[1:31](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=91)** In this course, we will examine several array methods that will help you become a better JavaScript developer.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** let (1)
> **Speakers:** - [presenter] (1)

#### Length property and direct assignment
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=0)** - [Instructor] All arrays have a length property.
>
> **[0:03](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=3)** The length property returns the number of items in an array.
>
> **[0:07](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=7)** The value returned is a number.
>
> **[0:10](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=10)** For example, let's consider an array of letters.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=13)** If we apply the length property to the array, it will return a numerical value that represents the length of the array.
>
> **[0:22](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=22)** Additionally, arrays in JavaScript are zero based.
>
> **[0:26](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=26)** This means that the index position of the first element of the array starts with zero.
>
> **[0:31](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=31)** The second element would have an index position of one and so on.
>
> **[0:36](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=36)** Direct assignment is when you assign data to a specific index position within an array.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=42)** We have to be careful when using direct assignment because it will override any existing data in that position.
>
> **[0:49](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=49)** It does not shift existing data in the array.
>
> **[0:52](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=52)** It will completely overwrite it.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=54)** Let's go to the code and see how to apply length and direct assignment in a practical example.
>
> **[1:01](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=61)** Before we get started, I want to point out that I'm running my terminal within VS Code.
>
> **[1:06](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=66)** I'll be running the code in the terminal so you can see what is being logged out for each exercise.
>
> **[1:12](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=72)** In order to emulate what I'm doing, you'll need to make sure you navigate to the folder or directory where your file is stored and then you can type node, the name of the file to run it.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=82)** So here we have an array of pets.
>
> **[1:25](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=85)** How do we determine how many items are in the array which will be the same value as the array's length.
>
> **[1:31](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=91)** We'll start by creating a new variable that we will call pets length.
>
> **[1:40](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=100)** This variable will be equal to pets.length.
>
> **[1:45](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=105)** This will return a numerical value.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=108)** If we console.log out the result, pets length.
>
> **[1:53](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=113)** And save.
>
> **[1:58](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=118)** We will see that the length of the array is four.
>
> **[2:01](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=121)** This becomes especially helpful when we have much larger arrays.
>
> **[2:06](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=126)** Now let's assign snake to index position two in the existing pets array.
>
> **[2:12](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=132)** We will use direct assignment to place snake into the array.
>
> **[2:16](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=136)** Remember arrays are zero based, so if we are adding snake to the array in index position two, it is going in the third position and will overwrite rabbit in the array.
>
> **[2:29](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=149)** In order to directly assign snake to index position two, we will reference our pets array with brackets and index two.
>
> **[2:39](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=159)** Then we set this equal to the string snake.
>
> **[2:45](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=165)** If we console.log pets, we will see that snake has now replaced rabbit in the array.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), override (1)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (1), node (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** you'll need (1)

#### forEach for ease and readability
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=0)** - [Instructor] Iterating over arrays is critical to working with JavaScript.
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=4)** For many of us, when we first started learning JavaScript, we were taught how to use a for Loop to iterate over each item in an array.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=12)** As you can see, this can get a bit verbose.
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=15)** Luckily, array methods like forEach were created to make the process of array iteration more clean and succinct.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=24)** The forEach method executes a function once for each element in an array.
>
> **[0:29](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=29)** When using a for Loop, you would have to explicitly reference the length of the array to ensure that the entire dataset was looped over.
>
> **[0:39](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=39)** Additionally, forEach does not mutate the original array.
>
> **[0:43](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=43)** This means that the original array you were looping over will not change.
>
> **[0:49](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=49)** The function executed on each element in the array is a callback function.
>
> **[0:53](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=53)** This function has three parameters.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=56)** The first is currentValue, and it is required.
>
> **[0:59](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=59)** This represents each value within the array you are iterating over.
>
> **[1:03](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=63)** Optionally, you can pass the index of the current value and the array you are iterating over.
>
> **[1:10](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=70)** ForEach also accepts a thisArg as an optional parameter.
>
> **[1:15](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=75)** But for the purpose of this course, we are only going to focus on the currentValue to ensure you have a basic understanding of this array method.
>
> **[1:23](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=83)** Let's take a look at forEach in action with our fruit example.
>
> **[1:27](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=87)** To start, we are just going to iterate over the array and log out each element.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=94)** Here, we are using element to represent the current value.
>
> **[1:38](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=98)** This is fairly common practice, but ultimately, you can name this whatever you would like.
>
> **[1:42](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=102)** In our example, fruit might be a good substitute for element.
>
> **[1:46](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=106)** Then, we just simply log out the element.
>
> **[1:49](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=109)** This would return each element one by one.
>
> **[1:52](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=112)** Now, let's go to the code and look at another example of how to use forEach.
>
> **[1:58](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=118)** In this example, we have an array of scores.
>
> **[2:01](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=121)** We want to iterate over this array and whenever a score is over 65, we want to execute the logScore function.
>
> **[2:09](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=129)** The logScore function has a single parameter of score and prints the provided score in the console.
>
> **[2:14](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=134)** How do we accomplish this task using forEach?
>
> **[2:17](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=137)** We will start with our scores array and apply forEach.
>
> **[2:25](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=145)** We will call the current value here element, but remember, you can call this score or whatever makes sense for you.
>
> **[2:32](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=152)** Then we will add our fat arrow and curly braces to round out the basic syntax setup.
>
> **[2:39](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=159)** Now we need to add logic to execute the logScore function when the score is over 65.
>
> **[2:46](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=166)** Here we'll add an if statement and if the element is greater than 65, we will execute the logScore function.
>
> **[2:58](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=178)** And don't forget to pass the element to the function so it can log that score out.
>
> **[3:04](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=184)** If the score is less than 65, we take no action.
>
> **[3:08](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=188)** We don't need an else statement or any additional code.
>
> **[3:11](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=191)** If we check the console, we will see that the function logs out every score over 65.
>
> **[3:19](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=199)** Hopefully, you can see how this execution mirrors that of a for Loop, which is something that is more familiar to you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), pass (2), let (2)
> **Code Identifiers:** foreach (7), logscore (4), currentvalue (2), thisarg (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Solution: Basic array methods 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=0)** - [Instruction] Welcome to your first challenge in this array methods course.
>
> **[0:09](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=9)** And our first task here is going to be determining the length of the array fruits.
>
> **[0:18](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=18)** So the first thing we'll want to do, and this will be the case in each of our challenges, is we want to make sure we don't forget to return the actual solution so we can check it against the correct answer.
>
> **[0:32](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=32)** So I'm going to go ahead and write return here just so I don't forget.
>
> **[0:35](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=35)** And then we want to know what is the length of the fruits array?
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=40)** So let's go ahead and reference fruits.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=42)** And then to get the length of the array, we will use the length property.
>
> **[0:48](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=48)** So it's as easy as that.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=50)** And now let's go ahead and test this code and make sure that it's correct.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=54)** And very good job.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=56)** You can see that the length of this array is four.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Best Practices:** don't forget (2)
> **Speakers:** - [instruction] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Basic array methods 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=0)** - [Instructor] For this challenge, we've been given an array of numbers and a variable called start that is set to zero.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=12)** We want to loop over this array and add each value to start.
>
> **[0:20](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=20)** Traditionally, before we had the array method for each, we would use something called a for loop to loop over an array, and it was a little bit more verbose.
>
> **[0:32](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=32)** For each has made this so much easier and cleaner, and so that's what we're going to use today to add up this value.
>
> **[0:39](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=39)** So first, what we'll need to do is take our numbers array, and let's go ahead and apply the for each method, and I'm going to set up the callback function.
>
> **[0:49](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=49)** We're going to pass number, which represents each number within the array.
>
> **[0:55](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=55)** Now, one important thing to remember from the lesson, and you'll find as you go through the course, this varies depending on the array method, but for the for each array method, it does not return a new array.
>
> **[1:12](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=72)** We're going to talk about an array method called map, we're going to talk about an array method called filter, and each of those return a new array.
>
> **[1:20](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=80)** This does not, this just iterates over the array, and then the magic that you do inside of this iteration is what's important, but it does not transform your original array.
>
> **[1:31](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=91)** It does not return a new array.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=94)** So for us, what we want to do is we want to take the variable start, and for each number in the array, we want to take the existing value of start, and we want to add the number being passed to that value.
>
> **[1:51](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=111)** So it's going to loop over each of the numbers in there, and it's going to change the value of start each time as it's adding it up, and then, in order to make sure our solution is correct, we're going to need to return the start value.
>
> **[2:08](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=128)** So let's go ahead and test that and make sure that our solution is correct.
>
> **[2:13](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=133)** So excellent, so 27, that's what you get when you start with zero, and you add up each of those numbers in the array, so I hope that showed you a good example of where for each can come in handy as you are developing on certain projects, so keep up the good work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), pass (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. 2.  Working with Ordered Data

#### Order arrays with sort
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=0)** - [Teacher] As the name of the array method implies, sort we'll sort an array.
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=4)** By default, the contents of the array will be sorted as strings in ascending order, which is smallest to largest.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=13)** If we haven't yet have strings that we need to sort alphabetically, we can simply apply sort.
>
> **[0:20](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=20)** The compare function can be written in one of two ways.
>
> **[0:23](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=23)** The first is as a function expression that explicitly returns a value.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=28)** The second example uses ES6 syntax to implicitly return the function.
>
> **[0:35](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=35)** The compare function can be used to alter the default sort order.
>
> **[0:38](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=38)** The function should return a value that is either positive, negative, or zero.
>
> **[0:43](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=43)** The values are then sorted based on the return value.
>
> **[0:48](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=48)** The compare function will compare all of the values in an array.
>
> **[0:52](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=52)** Two at a time, altering the order accordingly.
>
> **[0:55](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=55)** Let's use this as an example.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=57)** We have values a and b, and we are comparing a minus b in order to sort from lowest to highest.
>
> **[1:05](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=65)** If a minus b returns a positive value, value b would be sorted before value a.
>
> **[1:11](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=71)** If a minus b returns a negative value, value a would be sorted before value b.
>
> **[1:17](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=77)** If the result is zero, the sort order will not be changed.
>
> **[1:21](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=81)** Let's take a look at a few examples and see how we can apply what we just learned.
>
> **[1:28](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=88)** The first array that we will look at is one with strings, pets.
>
> **[1:32](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=92)** How do we sort this array alphabetically?
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=94)** Because this is an array of strings, we can easily sort this array by simply applying the sort method directly on the array.
>
> **[1:42](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=102)** So here, if we console.log pets.sort, save it, and then run here in the terminal, we'll see that the array is now sorted alphabetically.
>
> **[1:55](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=115)** Remember, by default, the contents of the array will be sorted as strings in ascending order or in this case, alphabetical order.
>
> **[2:04](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=124)** What about an array of numbers?
>
> **[2:05](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=125)** How do we sort this array of grades from highest to lowest, lowest to highest?
>
> **[2:10](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=130)** Because the array is sort of by default as strings, we will need to utilize the optional compare function parameter to make sure that the array is sorted correctly.
>
> **[2:20](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=140)** In order to sort the array of grades from highest to lowest, we will pass two arguments to the compare function, a and b.
>
> **[2:28](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=148)** So we'll start by using our grades array and applying sort, then we'll pass those arguments a and b.
>
> **[2:38](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=158)** Then we will explicitly return the value of b minus a.
>
> **[2:46](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=166)** If b minus a returns a positive value, b will be sorted before a.
>
> **[2:51](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=171)** If b minus a returns a negative value, a will be sorted before b.
>
> **[2:57](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=177)** If we log this out-- So console.log grades, we will see that the array has been sorted from highest to lowest.
>
> **[3:12](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=192)** To sort the array lowest to highest, we will set up the function the exact same way.
>
> **[3:18](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=198)** So we'll do grades.sort, our arguments rather a and b, our arrow function.
>
> **[3:28](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=208)** And the only difference here is we're still going to explicitly return the value, but this time a minus b.
>
> **[3:37](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=217)** When we log that out, we will see that now the array is sorted from lowest to highest.
>
> **[3:51](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=231)** Remember, this is manipulating the original grades array, so be conscious of this when you're using sort within your code.
>
> **[3:59](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=239)** This should give you a great foundation in order to start using the sorter array method in your code.
>
> **[4:04](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=244)** There are more complex examples that we could discuss, but for now, let's keep our discussion at a basic level.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (3), default, (2), pass (2), case, (1)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [teacher] (1)

#### Reverse array order with reverse
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=0)** - [Instructor] You might be noticing a pattern with array, method, names and their function.
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=4)** The reverse method certainly does what it says it will do which is to reverse the order of an array.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=12)** Using the reverse array method is fairly straightforward but there is one thing to remember when using this method it will change the original array to the newly reversed array.
>
> **[0:22](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=22)** If you need to maintain the original array it would be best to create a new variable to apply the reverse method.
>
> **[0:31](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=31)** If we look at a quick example, we see that simply applying the array method has reversed the order.
>
> **[0:37](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=37)** Let's go to the code and discuss where the reverse array method would come in handy.
>
> **[0:43](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=43)** We first have a list of condiments.
>
> **[0:45](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=45)** How do we reverse the order of this array?
>
> **[0:48](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=48)** As we learn using the reverse array method is just a matter of applying it to the array we want to reverse.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=54)** If we log out the condiments array console.log, condiments.reverse And then logged that out we see that the array has been reversed.
>
> **[1:12](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=72)** In the next example we have a list of employees in our company directory.
>
> **[1:17](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=77)** The array is already sorted alphabetically but we want to reverse the order.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=82)** However, we want to leave this original array unchanged.
>
> **[1:26](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=86)** So first let's get started by creating a new variable that we'll call reversed and we need to create a copy of our employees variable.
>
> **[1:39](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=99)** We're going to make this copy using the spread operator to clone the array.
>
> **[1:44](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=104)** You might be thinking, why can't we just use an equal sign?
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=108)** Using an equal sign we'll reference the value of the original array.
>
> **[1:52](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=112)** And so then when we apply reverse it's going to change both arrays.
>
> **[1:58](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=118)** So here the spread operator is something that allows us to quickly and easily create a new array copy that we can use and manipulate.
>
> **[2:08](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=128)** Now that we have our new variable all we have to do is apply reverse.
>
> **[2:13](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=133)** So I'm going to console log reversed.
>
> **[2:20](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=140)** here I will apply reverse.reverse.
>
> **[2:25](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=145)** We'll log that out, then right below it, I'm going to log out our original employees array, call this original and employees to show you that that array has not changed.
>
> **[2:42](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=162)** So you can see in the console we have a reverse array and then right below it the original array, which is unchanged.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Find a single element with find and findIndex
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=0)** - [Narrator] The array methods find and findIndex are used when you only need to return a single value within an array.
>
> **[0:07](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=7)** These methods iterate over an array element by element returning the first element or index that passes the test.
>
> **[0:16](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=16)** If you need to return multiple values that meet a specific criteria, you would reach for the filter array method that we will discuss later on in the course.
>
> **[0:26](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=26)** The array methods find and findIndex operate identically but return different values.
>
> **[0:32](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=32)** Both array methods return the first element that satisfies the criteria provided and have identical syntax.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=40)** Find will return the first element that matches the testing function.
>
> **[0:44](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=44)** And if nothing matches the criteria or the array is empty, undefined will be returned.
>
> **[0:52](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=52)** FindIndex will return the index of the first element that matches the testing function, and if nothing matches the criteria or the array is empty, negative one will be returned.
>
> **[1:04](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=64)** These two array methods follow a similar syntax to other array methods that we've covered like for each.
>
> **[1:11](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=71)** Both array methods take a call back function or what we have referred to as the testing function.
>
> **[1:16](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=76)** The callback function takes the following arguments, element which is required, index and array.
>
> **[1:24](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=84)** Find and findIndex also have an optional thisArg parameter, but for the purpose of this course, we're only going to focus on the element parameter to ensure you have a basic understanding of how these arraign methods work.
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=97)** Now that we know how to use these array methods, let's work through an example in the code.
>
> **[1:43](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=103)** Here we have an array of grades.
>
> **[1:45](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=105)** In the first exercise, we want to find the first grade that is under 80.
>
> **[1:49](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=109)** The first thing that we'll do is create a new variable that we'll call under 80 to store our return value.
>
> **[1:58](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=118)** Remember, find and findIndex return, a single element, leaving the original array unchanged.
>
> **[2:04](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=124)** Now let's apply find to our existing grades array.
>
> **[2:08](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=128)** So grades.find and we will call this current value element.
>
> **[2:16](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=136)** We'll use our fat arrow function to implicitly return and then we want to find an element that is less than 80.
>
> **[2:26](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=146)** So remember this is going to find the first element that is less than 80.
>
> **[2:33](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=153)** All right, save that.
>
> **[2:34](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=154)** And then we'll log out our under 80 variable and run that in the terminal.
>
> **[2:48](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=168)** And we'll see that 77 is the first grade that is found under 80.
>
> **[2:55](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=175)** If we move on to our next example, we want to find the index of the first grade that is over 80.
>
> **[3:02](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=182)** So we'll start in the same manner that we did with our first example.
>
> **[3:08](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=188)** This time we'll call the variable over 80.
>
> **[3:11](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=191)** And remember you can call these variables, name them whatever you'd like, whatever makes sense for you.
>
> **[3:16](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=196)** The syntax for findIndex is basically the same as find so we'll take our original array grades and apply findIndex we'll call our current value here element but remember you can call this whatever you'd like, you could call it grade, whatever makes sense for you.
>
> **[3:35](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=215)** We can also implicitly return this function here, because we're just going to have this basic return statement.
>
> **[3:43](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=223)** So here, since we're trying to find the index of the first grade that is over 80 we'll say element greater than 80.
>
> **[3:51](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=231)** If we log out over 80, we'll run this down here in the terminal and we'll see that the index of the first grade that is over 80 is 99 which is in index position zero.

> [!info]- Semantic Content
>
> **CLI Commands:** find (13)
> **Code Keywords:** function (7), let (2), return, (1)
> **Code Identifiers:** findindex (6), thisarg (1)
> **Tools:** terminal (2)
> **Speakers:** - [narrator] (1)

#### Solution: Working with ordered data 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=0)** - [Trainer] In this challenge, we want to sort an array of cities.
>
> **[0:10](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=10)** So the first thing that I'm going to do is go ahead and write my return statement, and then I'm going to go ahead and type out cities, 'cause I know I'm going to be referencing that.
>
> **[0:18](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=18)** And then for this particular example is actually going to be very straightforward.
>
> **[0:23](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=23)** The sort method by default is going to sort alphabetically.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=28)** So this would be more complicated, if we had, say, an array of objects and maybe we wanted to reference a specific property, then it gets a little bit more complicated.
>
> **[0:44](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=44)** But in this example, we have an array of strings and we just want to sort it alphabetically, so we can simply apply the sort method to our array.
>
> **[0:53](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=53)** So let's go ahead and check our solution and make sure we were right.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=57)** And yes, of course, we've got our correct answer here.
>
> **[1:01](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=61)** So great work on that one.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [trainer] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Working with ordered data 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=0)** - [Instructor] In this challenge, we want to check an array and see if a particular item can be found in that array.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=13)** So if we look at our products here, we can see we have a couple of objects, wireless mouse, mechanical keyboard, USB, Bluetooth speaker, and the particular product that we're looking for is actually the wireless mouse.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=28)** So the first thing we want to do is I'm going to go ahead and write my return statement, but I'm going to spell it correctly, and I'm going to write out my array that I'm going to reference for this particular challenge because we want to find the first match for the wireless mouse, we're going to reach for the array method find, and we're going to need to pass a value here because it's going to loop over the array and look for the value that we're trying to find.
>
> **[0:58](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=58)** So we will call this name, and I'm going to implicitly return.
>
> **[1:05](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=65)** Now, another way that you could do this, it's a little bit more verbose, but you would have your curly braces here, but then you would just need to make sure that whatever criteria that you're going to pass, you would also have a return statement.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=82)** I like to do it implicitly.
>
> **[1:24](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=84)** It saves some room, saves some time, I think, so that's how I'm going to show you, and it's a good, modern way to work.
>
> **[1:32](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=92)** So we're going to loop over and we're going to look for in this products where the name, oh, excuse me.
>
> **[1:40](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=100)** Actually, you know what?
>
> **[1:41](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=101)** Let's call this something different, name is actually what we're looking for, but let's call it prod.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=108)** That's a little bit more, it doesn't actually matter what you call this peram that you're passing that kind of represents each object.
>
> **[1:55](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=115)** You could call it X, but I'm going to call it prod.
>
> **[1:59](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=119)** But actually what I was looking for, or what we're going to be looking for is if the prod.name, that's why I accidentally called it name to begin with, is equal to wireless mouse.
>
> **[2:11](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=131)** All right, one thing that I've mentioned before is that when we're doing any sort of string matching, the casing does need to match.
>
> **[2:21](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=141)** In this particular instance, we know from our instructions that wireless mouse, it's capital W, capital M.
>
> **[2:28](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=148)** If we had a lowercase M and then we try to find this particular product in our array, it is not going to come back with a match.
>
> **[2:37](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=157)** Let's go ahead and check our solution and see if we got it correct.
>
> **[2:42](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=162)** Awesome, so you can see that when it looped through, it found a product using the find array method that matched exactly what we were looking for, a product with the name with wireless mouse, great work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for, (3), pass (2), match. (2), return. (1)
> **CLI Commands:** find (5), make (1)
> **Env Vars:** usb (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Evaluating Data for a Single Value

#### Does the array Include an element?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=0)** - [Instructor] The array method includes checks an array for a specific value.
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=4)** It will then return a Boolean, true or false, to indicate whether or not a value was found within a specific array.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=13)** The syntax is fairly simple.
>
> **[0:14](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=14)** You pass the array method the value you want to search for in the array.
>
> **[0:18](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=18)** Keep in mind that this value is case sensitive.
>
> **[0:21](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=21)** Additionally, there's an optional parameter called fromIndex, which indicates from what index position you want the method to start searching.
>
> **[0:29](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=29)** For the purposes of this lesson, we're going to focus simply on passing a value to search as this will be the most common implementation of the array method.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=40)** Let's look at a quick example to see includes an action.
>
> **[0:43](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=43)** We have an array of scores and we want to see if it includes a perfect score of 10.
>
> **[0:48](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=48)** All we have to do is pass the score we're looking for, 10, and the array method will return True, indicating that 10 is included in the array.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=57)** Now let's go to our code and try an example.
>
> **[1:01](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=61)** Here we have an array that includes a variety of careers.
>
> **[1:04](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=64)** We want to see if the array includes a nurse in the list.
>
> **[1:08](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=68)** The first thing that we'll need to do is to create a variable to store the Boolean that is returned but includes array method.
>
> **[1:14](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=74)** We'll call this variable, nurse included.
>
> **[1:19](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=79)** Then we'll take our careers array and apply includes.
>
> **[1:24](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=84)** Includes takes an argument, and since we're searching for nurse within this array, we'll pass nurse to the includes array method.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=94)** Now don't forget, this is case sensitive.
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=97)** So here we'll do all lower case nurse and log this out to see what we get back.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=108)** Alright, if we go down to the terminal, logged us out, we'll see it's true.
>
> **[1:53](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=113)** Just for fun, I want to show you if we had put this in as a capital letter, what that would return.
>
> **[2:00](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=120)** So you see, because nurse with a capital N is not included in that array, it will return false.
>
> **[2:08](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=128)** So keep that in mind when you're using includes that it is case sensitive.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (2), for, (1), return. (1)
> **Code Identifiers:** fromindex (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Do elements pass a test?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=0)** - [Instructor] Sometimes we need to determine whether or not an array passes a test, sometimes, or every time.
>
> **[0:06](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=6)** Thankfully two array methods exist to help us some and every.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=12)** These array methods function identically, both return booleans based on whether or not the functions criteria match some or every element in the array.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=24)** With Some, as the name implies, if at least one element matches the criteria, it will return true.
>
> **[0:33](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=33)** With every, every single element in the array must match the criteria for it to return a true value.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=42)** The syntax for some and every should look very familiar as we've used this previously with, for each, find and find index,.
>
> **[0:51](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=51)** Both array methods take a callback function that has three parameters.
>
> **[0:55](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=55)** Element which is required, index which references the index of the current element and array, which is the array you're iterating over.
>
> **[1:03](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=63)** This also has a parameter, this Arg, but we're going to keep things simple and focus on using element.
>
> **[1:09](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=69)** The only required parameter for the purposes of this lesson.
>
> **[1:13](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=73)** Now let's take a look at a quick example to see some and every inaction before moving to the code.
>
> **[1:20](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=80)** Here, we have an array of temperatures.
>
> **[1:23](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=83)** We want to know if some of the temperatures are less than 90 is every temperature over 80.
>
> **[1:29](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=89)** As you can see, we pass the element, which could be named anything, perhaps temperature here or temp and implicitly return a comparison based on the established question, we're trying to answer.
>
> **[1:40](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=100)** For some, are some of the elements less than 90.
>
> **[1:44](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=104)** That is true.
>
> **[1:46](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=106)** With every we want to know is every element greater than 80.
>
> **[1:50](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=110)** In this case, it is also true.
>
> **[1:53](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=113)** Let's take a look at the code for another example that we can work through together.
>
> **[1:59](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=119)** Here we have an array of states.
>
> **[2:01](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=121)** I've also provided a handy string method to help us find the solution for this problem.
>
> **[2:06](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=126)** In case you've never used it before, bonus learning for you.
>
> **[2:10](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=130)** So this handy string method is called starts with.
>
> **[2:14](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=134)** And in this particular example we're going to pass the starts with string method and argument of new.
>
> **[2:21](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=141)** Going back to some and every we may recall from our lesson that we just walked through that some, every, both returned booleans.
>
> **[2:30](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=150)** So we'll need to start in this particular example by creating a new variable to store the return value.
>
> **[2:36](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=156)** We'll name this one, some states.
>
> **[2:41](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=161)** Then we'll take our state's array method and apply some.
>
> **[2:48](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=168)** We'll call our element state here.
>
> **[2:53](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=173)** And we'll implicitly return state starts with new.
>
> **[3:00](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=180)** We want to make sure that it's capital because it is case sensitive.
>
> **[3:04](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=184)** All right, so then if we go and, log out some states, all right and we'll run this in our terminal.
>
> **[3:15](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=195)** We'll see that in fact, some states start with new, awesome.
>
> **[3:22](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=202)** Moving on to our next example does every state in the array start with new?
>
> **[3:28](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=208)** So as we learn some and every have pretty much identical syntax, right?
>
> **[3:33](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=213)** So the first thing that we'll need to do here because this is going to return a boolean value, just like we did with some, we're going to create a new variable and we'll call it every state.
>
> **[3:43](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=223)** Then just like we did with some, we'll say states, but here we'll say every and we'll call our element here state.
>
> **[3:51](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=231)** And remember, you can call this whatever you like, whatever makes sense for you.
>
> **[3:55](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=235)** A lot of times you'll see element.
>
> **[3:57](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=237)** And then we'll implicitly return state dot starts with our new string method that we learned and we'll pass the argument new, which is case sensitive.
>
> **[4:09](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=249)** So then if we log out every state, we will see that false.
>
> **[4:17](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=257)** Not every state in the array starts with new.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), new. (3), function (2), let (2), new, (2)
> **CLI Commands:** find (3), make (1)
> **Analogies:** just like (2)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Solution: Evaluating single value 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=0)** - [Instructor] In this challenge, we want to determine if an array includes a very specific value.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=12)** So let's go ahead and get started.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=13)** And we know for all of our challenges here, we want to make sure we're returning the solution that we came up with to check it against the correct solution.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=24)** So I'm going to return fruits and then includes, because we're trying to see, does the array include the very specific string of Apple?
>
> **[0:36](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=36)** And I've mentioned this before and we'll use this as a good way to kind of show you what I've mentioned before about string matching.
>
> **[0:44](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=44)** So here, if I change Apple to lowercase, we should expect that this does not return the correct solution.
>
> **[0:53](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=53)** So you can see here it returned false, which is incorrect.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=57)** We actually know that it should be there.
>
> **[0:59](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=59)** And if we change this casing here to Apple, with a capital A, and test it, we can see that we get the correct result.
>
> **[1:08](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=68)** So it's really important.
>
> **[1:09](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=69)** Make sure when you're doing any sort of string matching to make sure that the casing matches exactly or it's not going to return the solution that you expect.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=82)** Great work.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Evaluating single value 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=0)** - [Instructor] In this challenge, we've been given an array of tasks and we want to determine has every single task in that array has it been completed?
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=15)** So we learned about some array methods, some and every.
>
> **[0:19](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=19)** And in this particular case, since we want to determine if every single one has been completed, we're going to use the every method.
>
> **[0:29](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=29)** So first I'm going to write my return statement and then tasks, and then we will apply that every method and we'll use, I'm just going to put TSK, that will represent the individual task.
>
> **[0:45](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=45)** And just for fun, I'm going to do this, what I'll call the long way instead of implicitly returning in case this is how some folks feel more comfortable.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=56)** So very similar to the way I've shown you different solutions, but I'm not implicitly returning here.
>
> **[1:02](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=62)** I'm actually going to have to write out my return statement.
>
> **[1:06](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=66)** Here I want to know, has every task been completed?
>
> **[1:10](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=70)** So effectively, TSK, which is what we passed in here, this represents each object within the array, dot completed.
>
> **[1:21](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=81)** We want to know, is that true or false?
>
> **[1:24](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=84)** So here we can actually just return this as is because if it evaluates to true, this will return it.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=94)** And it's looking to check that every single task has been completed.
>
> **[1:38](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=98)** Now, if we wanted to say, is every task incomplete?
>
> **[1:46](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=106)** Then we would actually, we could put an exclamation point in front of that to indicate that we want to check, is this value false.
>
> **[1:55](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=115)** But in our case, we want to make sure is this value true.
>
> **[2:00](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=120)** So let's go ahead and run this and test our solution, and we can see false, which is correct.
>
> **[2:07](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=127)** Not every task in our array has been completed.
>
> **[2:11](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=131)** So I hope that was helpful to kind of see it a different way.
>
> **[2:14](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=134)** As I mentioned before, I prefer to implicitly return, but I want to show each different way in case you're still in the learning process, just to kind of give you some more context.
>
> **[2:25](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=145)** So keep up the good work and we'll see you in the next challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), this, (1), let (1), return, (1)
> **Env Vars:** tsk (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4.  Implementing Stacks and Queues

#### The end: Push and pop data
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=0)** - [Instructor] Have you ever heard of the Last In, First Out roll?
>
> **[0:03](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=3)** What about a stack?
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=5)** A stack is a data structure that holds a list of items and operates using the Last In, First Out roll.
>
> **[0:11](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=11)** Think of a stack, like a stack of physical items, papers, books even pancakes.
>
> **[0:16](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=16)** The array methods, push and pop, are how data is added and removed from stacks.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=24)** At the start of my coding career, push was the first array method that I learned.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=28)** I used it a lot in conjunction with for loops.
>
> **[0:30](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=30)** And you may already be familiar with it as well.
>
> **[0:33](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=33)** We're going to discuss, push and pop together, because they share a few things in common.
>
> **[0:38](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=38)** Both of these array methods manipulate the length and contents of an array, by adding or removing data to and from the end of an array.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=50)** The array method push, allows us to add one or more items to an existing array.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=56)** Here we have an array of sports.
>
> **[0:58](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=58)** If we pass football to the array method push, that is applied to the sports array, we see that football has been added at the end of that array.
>
> **[1:08](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=68)** This array method only takes a single parameter which is whatever you'd like to add to your existing array.
>
> **[1:15](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=75)** It can be one or more elements.
>
> **[1:17](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=77)** Push returns the length property for the newly changed array.
>
> **[1:21](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=81)** In my experience, I have never used the return value of pushing my code, but I just wanted you to be made aware of this possibility.
>
> **[1:30](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=90)** When I have used pushed, it has been directly working with the existing array.
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=97)** Now let's talk pop.
>
> **[1:38](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=98)** When pop is applied to an array it pops the last item out of the array.
>
> **[1:43](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=103)** The original array that pop was applied to is altered accordingly.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=108)** If we take our sports example again, and we apply pop, we see that football is removed from the end of the array.
>
> **[1:57](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=117)** Pop does not accept any arguments.
>
> **[1:59](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=119)** It returns the item that was removed from the array, which could be helpful depending on how you're using the array.
>
> **[2:06](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=126)** All you need to do to retrieve the value is to set it to a variable.
>
> **[2:10](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=130)** Now that you have the basics, let's go to the code and work on an example.
>
> **[2:16](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=136)** First, we have an array of drinks.
>
> **[2:19](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=139)** We want to add wine to this array.
>
> **[2:21](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=141)** How do we do that?
>
> **[2:23](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=143)** Because we're adding something to the array, and we aren't concerned about the return value, we can start by applying push to the drinks array and adding wine.
>
> **[2:33](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=153)** So we'll take our drinks array, add push, and then we're just going to pass in wine as the argument here.
>
> **[2:42](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=162)** All right?
>
> **[2:43](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=163)** And then if we log this out, go down here and run this,
>
> **[2:52](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=172)** we see that our array now has wine and it's been added to the end.
>
> **[2:57](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=177)** Next we have an array of seasons.
>
> **[3:00](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=180)** We want to pop the last season off of the end of the array and store that value.
>
> **[3:07](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=187)** The first thing that we'll do is create a new variable that we'll call popedValue.
>
> **[3:14](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=194)** And then we'll set this equal to our existing array, seasons, with pop applied.
>
> **[3:22](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=202)** Remember with this array method, we don't need to pass any arguments to it.
>
> **[3:26](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=206)** So now if we log out, poppedValue so I'm going to call this popped value just as we've named that variable, and then I'm also going to log out the seasons array so you can see how this has changed as well.
>
> **[3:46](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=226)** If we go and run this, we'll see that our popped value is winter, and now the seasons array is spring, summer and fall.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (2), this, (2)
> **Code Identifiers:** popedvalue (1), poppedvalue (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The beginning: Unshift and shift data
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=0)** - A queue functions similarly to a stack.
>
> **[0:03](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=3)** But this data structure operates under the first in, first out rule.
>
> **[0:08](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=8)** In order to add or remove data from a queue, we will use the array methods, unshift and shift.
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=15)** Unshift and shift operate almost identically to push and pop except that the data is added and removed from the beginning of the array versus the end.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=28)** The array method unshift allows us to add one or more items to the beginning of an array.
>
> **[0:34](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=34)** Here we will use our sports array again, but this time we're going to pass baseball to unshift.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=40)** As we can see, baseball was added to the beginning of the sports array.
>
> **[0:45](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=45)** The unshift array method takes a single argument, which is whatever you'd like to add to your existing array.
>
> **[0:51](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=51)** It can be one or more elements.
>
> **[0:53](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=53)** Unshift returns the length property for the newly changed array.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=57)** This is the same behavior as the array method push.
>
> **[1:02](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=62)** Now let's move on to shift.
>
> **[1:04](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=64)** When this array method is applied to an array, it shifts the first item of the array out, keeping with our sports array example.
>
> **[1:11](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=71)** When we apply shift, we see that the first item baseball is removed from the array.
>
> **[1:18](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=78)** Like the array method pop, shift does not accept any arguments.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=82)** It is applied directly to an existing array, and returns the value that was removed from the beginning of the array.
>
> **[1:29](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=89)** Now that we have the foundations for these two array methods, let's go to the code and try a few more examples.
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=97)** Here we have an array of ages of various family members.
>
> **[1:41](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=101)** We want to add the age 36 to the existing array.
>
> **[1:45](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=105)** How do we do that?
>
> **[1:46](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=106)** Using the unshift method, all we have to do is apply it to our existing ages array, and pass 36.
>
> **[1:57](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=117)** So if we log out our ages array, we'll go down here and run it in the terminal.
>
> **[2:07](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=127)** We see that 36 has been added to the beginning of the array.
>
> **[2:12](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=132)** Our next problem uses an array of holidays.
>
> **[2:14](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=134)** Here, we want to remove the first item from the array and store that value in a new variable.
>
> **[2:20](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=140)** Let's start by creating a new variable that we'll call shifted value.
>
> **[2:27](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=147)** Then, we'll set this equal to our existing holidays array dot shift.
>
> **[2:32](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=152)** And that's it.
>
> **[2:33](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=153)** Similarly to what we did with push and pop, I'm going to log out the new shifted value.
>
> **[2:44](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=164)** So the value that was returned by applying the shift array method, and then I'm going to log out our holidays as well just so you can see the difference.
>
> **[3:03](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=183)** So our shifted value was Labor Day.
>
> **[3:06](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=186)** So that first item removed, shifted out of the array was Labor Day.
>
> **[3:10](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=190)** And then now the holidays array just has the three holidays, Christmas, Hanukkah and Independence Day left.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - a (1)

#### Solution: Implementing stacks and queues 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=5)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=6)** In this particular challenge, we've been given an array of scores, and we need to add a score of 7 to the end of this existing scores array.
>
> **[0:16](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=16)** So for this particular challenge, we're going to reach for a very common array method that you're going to find yourself using time and time again.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=24)** And that is the array method push.
>
> **[0:27](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=27)** So the first thing that we'll need to do is reference our array, scores, and then push, and then you're going to pass the value that you need added to the end of the array.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=40)** So, in this case, that's 7.
>
> **[0:43](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=43)** Now, in order to check our solution after we've added 7 to the array, let's then return it, scores, and check.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=54)** All right, let's go ahead and test that.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=56)** And awesome.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=57)** You can see that your scores array is now 10, 9, 8, 7, exactly as it should be.
>
> **[1:03](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=63)** Great work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1), case, (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)

#### Solution: Implementing stacks and queues 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=5)** - [Instructor] In this challenge, we're given an array of months, and we need to add January to the beginning of that array.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=12)** So for this particular challenge, we're going to reach for the array method, unshift.
>
> **[0:18](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=18)** So just as we did in the previous one with push, we're going to start with our months array, and we're going to unshift.
>
> **[0:27](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=27)** So use that method, and then we're going to pass the string January, oops.
>
> **[0:36](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=36)** And make sure that we spell that correctly.
>
> **[0:38](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=38)** And as I've said many, many times, make sure that your casing matches, because we're going to need to then return this, and check it to make sure that it's the correct solution.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=50)** So return months.
>
> **[0:52](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=52)** All right, and then let's go ahead and test it.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=56)** And awesome, we got the correct answer.
>
> **[0:58](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=58)** You can see January has been added to the beginning of the months array.
>
> **[1:03](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=63)** Great job.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** pass (1), this, (1), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. 5.  Bringing It Together: Advanced Methods

#### Reformat data with map
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=0)** - [Instructor] Have you ever been presented with an array that isn't quite what you need?
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=4)** It has all the necessary data but that data just needs a little bit of massaging.
>
> **[0:09](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=9)** Let's take this array of grades as an example.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=12)** You have the grades and they all need to have five points added to them.
>
> **[0:17](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=17)** This is where the array method map comes in.
>
> **[0:21](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=21)** The map array method generates a new array based on the function applied to each element in the array you're iterating over.
>
> **[0:31](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=31)** The syntax for maps should look really familiar.
>
> **[0:34](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=34)** We have seen the same syntax with for each, find, find index, and a few other array methods.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=40)** So hopefully that will help you grasp how to get started with using map.
>
> **[0:45](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=45)** The only difference you might notice is that we have the array method set to a new variable.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=50)** This variable can be named whatever you'd like and whatever is relevant for your code.
>
> **[0:56](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=56)** We'll call it new here since we're returning a new array.
>
> **[1:01](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=61)** Before we move on to an example, let's quickly revisit the callback function.
>
> **[1:05](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=65)** This function will be called for every element that you're iterating over in your original array.
>
> **[1:11](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=71)** Each time the function executes, the new value will be added to the new array.
>
> **[1:18](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=78)** Just as we've used it before, this function accepts current value, index, and array.
>
> **[1:24](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=84)** The current value is the only required parameter.
>
> **[1:28](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=88)** Additionally, map also accepts the parameter thisArg, but as we work on the basics of learning map, we're just going to focus on the required current value.
>
> **[1:38](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=98)** Let's go back to our grades example and try to bring this all together.
>
> **[1:43](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=103)** As you might recall, we need to add five bonus points to each student score.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=108)** We will start by defining a new variable that we'll call bonus grades.
>
> **[1:52](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=112)** Remember we can call this variable whatever we'd like.
>
> **[1:55](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=115)** We just want to make sure it's relevant to the example that we're working on.
>
> **[1:59](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=119)** Next, we'll take our existing array and apply map.
>
> **[2:03](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=123)** We're going to call the current value grade in this scenario.
>
> **[2:06](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=126)** Remember we can also call this whatever we'd like as well, but oftentimes you'll see it named element.
>
> **[2:13](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=133)** Then we're going to return each grade and add five points.
>
> **[2:17](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=137)** This can be written one of two ways, either implicitly or explicitly returning the value.
>
> **[2:23](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=143)** Our bonus grades has now been created.
>
> **[2:26](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=146)** Let's head to the code and try another example.
>
> **[2:30](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=150)** Here we have an array of friends.
>
> **[2:32](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=152)** Each friend is represented by an object with the key's first name and last name.
>
> **[2:37](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=157)** We're going to use the array method map to create a new array that contains only our friends' full name, which will be the combination of their first name here and their last names.
>
> **[2:49](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=169)** Because map returns a new array, the first thing that we'll want to do is create a new variable that we'll call full name.
>
> **[2:57](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=177)** Now in this example, I'm going to show you two different ways that you can achieve the same desired result.
>
> **[3:04](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=184)** The first way is going to be explicitly returning the function to get our new array using map.
>
> **[3:12](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=192)** The second way I'm going to show you will be using an implicit return and interpolation to make it even more succinct.
>
> **[3:21](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=201)** So now starting with the first method, we're going to in both ways of doing this, we'll start the same.
>
> **[3:28](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=208)** So you'll start by creating your new variable.
>
> **[3:30](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=210)** That's going to store your newly created array by map.
>
> **[3:34](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=214)** And then you're always going to start with your existing array and in this case, friends.
>
> **[3:40](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=220)** You'll apply map here and today we'll call our current value friend and we'll set up our function syntax accordingly.
>
> **[3:51](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=231)** So now since we're explicitly returning, we will put our return statement and then we're going to return friend dot first name and then we want to make it nice and readable.
>
> **[4:06](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=246)** So we'll take our plus sign and we'll add quotations with a space.
>
> **[4:11](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=251)** So that space is very important.
>
> **[4:14](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=254)** Another plus sign and then friend dot last name.
>
> **[4:20](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=260)** So now if we log this out,
>
> **[4:29](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=269)** we will see that we have a brand new array that has the full name of all of our friends.
>
> **[4:36](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=276)** So that's one way that you can achieve your desired result with map.
>
> **[4:41](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=281)** So I'm going to just comment this out for a second and now we're going to implicitly return our function.
>
> **[4:49](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=289)** So I'm going to call this full name again.
>
> **[4:52](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=292)** And like I said, we'll start with our existing array always and applying map and we'll call the current value here friend as well.
>
> **[5:01](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=301)** So then we'll use our fat arrow function to implicitly return.
>
> **[5:05](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=305)** And this time we're going to use interpolation.
>
> **[5:09](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=309)** So if you've never used it before, be ready because this is awesome.
>
> **[5:15](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=315)** If you've used it before, great.
>
> **[5:16](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=316)** You already know how helpful this can be in your code.
>
> **[5:19](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=319)** So when you use interpolation, basically it gives you free rein to kind of insert variables that exist.
>
> **[5:30](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=330)** You do so by using dollar sign curly braces.
>
> **[5:35](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=335)** So to show you how this works, I've got my back ticks.
>
> **[5:39](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=339)** So that's what you need to start with.
>
> **[5:40](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=340)** I have them here.
>
> **[5:41](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=341)** You start with your back ticks and within those back ticks, you can interpolate.
>
> **[5:47](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=347)** So I want to create this full name.
>
> **[5:50](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=350)** So I'll start with dollar sign and curly braces and all I'll have to do is say friend dot first name.
>
> **[5:57](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=357)** Then I go outside of the curly braces out of space, because remember we want to make this readable.
>
> **[6:03](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=363)** I'll add another dollar sign with curly braces so we can have friend dot last name.
>
> **[6:10](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=370)** So now we have just a very clean, succinct way of writing this.
>
> **[6:17](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=377)** So this is remember, implicitly returning using interpolation.
>
> **[6:22](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=382)** And let's just show you that we've got the exact same result as we had before.
>
> **[6:29](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=389)** So you can see exactly the same as our previous example will be explicitly returned.
>
> **[6:34](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=394)** Either way of doing it is totally fine, but just be aware that there are different ways that you can achieve the same result.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (5), this, (1), case, (1), return. (1)
> **CLI Commands:** make (4), find (2)
> **Code Identifiers:** thisarg (1)
> **Cross-References:** go back to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Filter data with filter
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=0)** - [Instructor] Have you ever been presented with data that you only needed a subset of?
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=4)** Looking at our array here, what if we only wanted cats in our array?
>
> **[0:08](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=8)** How would we filter this array?
>
> **[0:10](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=10)** In the past we might've reached for a -- to iterate over the array, and then use the array method push to add items to a new array.
>
> **[0:19](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=19)** Now that we have the array method filter, this accomplishes this for us much more elegantly.
>
> **[0:27](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=27)** Filter is a JavaScript array method that creates a new array based on whether or not elements pass a test provided by a function.
>
> **[0:37](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=37)** If we look at the syntax, we see that it is the same as map and several other array methods that we've learned.
>
> **[0:44](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=44)** I think this makes many of the array methods easier to learn because the syntax is consistent.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=50)** You just have to distinguish between what each array method achieves.
>
> **[0:54](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=54)** As I have done in previous lessons, I'm going to keep our examples simple and stick to the aspects of the array method that you are most likely to tackle in your own work.
>
> **[1:04](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=64)** We will just be focusing on the required element parameter and how it's used.
>
> **[1:09](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=69)** In my experience, I rarely use the optional index and array properties and I've yet to incorporate thisArg into my work.
>
> **[1:17](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=77)** Let's flick back to our example that we kicked off the lesson with and incorporate filter to get the solution we're looking for.
>
> **[1:25](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=85)** Using our pets example, we want to filter our array down to only include cats.
>
> **[1:30](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=90)** First, we need to create a new variable since filter returns a new array.
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=95)** Let's call this new variable "cats".
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=97)** Then we will take the existing pets array and apply filter.
>
> **[1:42](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=102)** We'll call the element "pet" in this case, and if pet dot type matches cat it will be added to the cats array method.
>
> **[1:50](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=110)** Now we see the cats array method contains only cats as we intended.
>
> **[1:55](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=115)** Let's head to the code and try another example.
>
> **[1:59](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=119)** Here we have an array of grocery items.
>
> **[2:02](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=122)** Each item in the array has an item and type.
>
> **[2:05](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=125)** We want to filter this array to only include fruits.
>
> **[2:09](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=129)** First, we'll start by creating a new variable.
>
> **[2:12](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=132)** We'll call this "fruit".
>
> **[2:15](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=135)** Like I showed you with map, I'm going to show you how to achieve what you want using filter both explicitly and implicitly returning your values.
>
> **[2:27](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=147)** So for this first example, we'll explicitly return.
>
> **[2:31](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=151)** Either way, we start by creating this new variable and we start with our existing array and applying filter.
>
> **[2:40](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=160)** So here we'll call our current value "item", and remember, you can call this whatever you'd like, and then we'll set up the rest of our function syntax.
>
> **[2:51](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=171)** Because we're explicitly returning, that means we have to have this return statement.
>
> **[2:56](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=176)** And we want to include only those grocery items that are fruits.
>
> **[3:01](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=181)** So since we're working with an array of objects, we want to look at item.type and we want to only have those that are fruits in this newly created array.
>
> **[3:14](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=194)** So our item.type should equal fruit.
>
> **[3:19](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=199)** So now, if we log out our newly created array, we run that in our terminal, we see that our new array includes just apples and bananas because those are the only two fruits.
>
> **[3:40](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=220)** Now let's try this same example implicitly returning.
>
> **[3:44](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=224)** So it'll be very, very, very similar, and I'm going to just comment that out so you have it.
>
> **[3:48](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=228)** We'll start the same way we did previously, creating our new variable.
>
> **[3:52](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=232)** And then we take our existing array, groceries, and apply filter.
>
> **[3:56](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=236)** We'll call our current value here "item", and then our fat arrow will implicitly return the value that we're filtering.
>
> **[4:06](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=246)** So here, same as before, we want item.type to equal fruit.
>
> **[4:13](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=253)** And if we log out fruit and then run that down here in the console, we'll see we get the exact same answer.
>
> **[4:23](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=263)** So really it's a matter of preference.
>
> **[4:26](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=266)** And depending on the developers that you're working with, they may prefer one way over the other.
>
> **[4:34](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=274)** I just think it's important to know that there's more than one way that you can achieve your same desired result.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), pass (1), for. (1), case, (1)
> **CLI Commands:** cat (1)
> **Code Identifiers:** thisarg (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Single values with reduce
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=0)** - [Instructor] Have you ever encountered an array of values that needed to be added up and reduced to a single value or a grand total?
>
> **[0:07](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=7)** This is where the array method, reduce, can be helpful to do just that.
>
> **[0:12](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=12)** One of the most powerful array methods available is reduce.
>
> **[0:16](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=16)** For me, this array method has been more difficult to grasp because of its syntax.
>
> **[0:22](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=22)** I typically have to look it up for this array method because it does operate a little bit differently than the other array methods we've discussed thus far.
>
> **[0:31](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=31)** So what exactly does reduce do?
>
> **[0:34](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=34)** Reduce executes a reducer function against each item in the array, returning a single value.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=42)** The value returned is the accumulated value.
>
> **[0:44](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=44)** You'll often see this used with numbers, although it can be used with strings as well to determine counts and frequency.
>
> **[0:53](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=53)** Where things get a little bit more tricky is with the syntax.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=57)** Reduce uses a slightly different syntax than what we're used to seeing.
>
> **[1:01](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=61)** While there are some new things we haven't seen before, there are familiar elements, like a callback function.
>
> **[1:08](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=68)** Reduce accepts a callback function that has two require parameters: accumulator and current value.
>
> **[1:15](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=75)** Optionally, the callback function accepts index and array.
>
> **[1:19](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=79)** We've seen these used previously as well.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=82)** The final thing the array method accepts, which is also optional, is the initial value.
>
> **[1:27](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=87)** Let's break these down a little bit further.
>
> **[1:31](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=91)** Starting with the required accumulator, you'll often see this as ACC but it can be named anything, total, sum, whatever makes sense for you and is relevant for the context that you're working in.
>
> **[1:44](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=104)** This is the value that is going to be returned by the array method.
>
> **[1:48](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=108)** So you'll want to set this to a new variable, much like we've done with filter and map and other array methods that we've used where a value is returned.
>
> **[1:59](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=119)** The next is the current value which we've seen in just about every array method thus far.
>
> **[2:04](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=124)** It too can be named whatever you'd like and represents the value currently being iterated over.
>
> **[2:10](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=130)** Index and array are used in the same way as we've seen in other array methods and are optional here as well.
>
> **[2:16](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=136)** The last parameter you can pass to reduce is initial value.
>
> **[2:19](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=139)** The initial value is the value to be used as the initial accumulator.
>
> **[2:24](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=144)** This is an optional parameter, so if no initial value is provided the first element in the array will be used.
>
> **[2:31](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=151)** Let's go back to our example and apply the knowledge that we just learned.
>
> **[2:36](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=156)** First, we will need to create a new variable that we will call total sales.
>
> **[2:40](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=160)** Then we will take our initial array sales and apply the array method reduce.
>
> **[2:45](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=165)** We will call the accumulating value total, and the current value amount.
>
> **[2:49](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=169)** We want to take the total or the accumulator and add each value to that amount.
>
> **[2:55](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=175)** For this particular example, we can start with the first item in the array, so we don't need to include an initial value.
>
> **[3:02](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=182)** We're only concerned about the value being returned and we can implicitly return the accumulating total plus amount.
>
> **[3:10](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=190)** This gives us a total sales of 24.25.
>
> **[3:14](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=194)** Now that we have the hang of how reduce works, let's go to the code and try another example.
>
> **[3:20](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=200)** Here we have an array of bills.
>
> **[3:22](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=202)** We want to determine what the total of all of our bills will be using the array method, reduce.
>
> **[3:28](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=208)** The first thing that we'll want to do is create a new variable that we will call total bills.
>
> **[3:35](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=215)** Then we'll take our existing array of bills and apply reduce.
>
> **[3:39](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=219)** The first thing that we'll want to pass to reduce is the accumulator.
>
> **[3:45](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=225)** And for this particular example I'm going to call the accumulator total.
>
> **[3:50](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=230)** I'm going to call the current value here bill, all right?
>
> **[3:54](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=234)** And then we're going to implicitly return this.
>
> **[3:58](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=238)** And since we're trying to get a total of all of our bills, we'll need to return the total plus each bill.
>
> **[4:06](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=246)** So we'll say total plus bill.
>
> **[4:11](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=251)** Here we want to use the first value in our array as the the initial accumulator, so we don't need to pass an initial value here.
>
> **[4:22](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=262)** So if we log this out, total bills, and then I go down here and run this, we will see that our total bills are 1,358.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), pass (3), require (1), this. (1)
> **Env Vars:** acc (1)
> **Versions:** 24.25 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Flat + map = flatMap
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=0)** - [Instructor] The flatmap array method returns a new array by applying a callback function to each item of the array and then flattening it to one level.
>
> **[0:09](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=9)** To put it in terms that you're familiar with, it first applies the array method map and then flat.
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=15)** The array method flatmap and calling map and then the array method flat on your array will return the same result.
>
> **[0:23](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=23)** Just remember it's map then flat, despite the name of the array method.
>
> **[0:30](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=30)** To be honest, I haven't yet encountered an opportunity to use flatmap in my code.
>
> **[0:36](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=36)** But I still think it's worth learning should an opportunity arise.
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=40)** The syntax is one that we're very familiar with at this point, and it is identical to that of the array method map.
>
> **[0:48](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=48)** The callback function accepts current value, index, and array.
>
> **[0:52](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=52)** The current value is the only required parameter.
>
> **[0:55](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=55)** Additionally, flatmap also accepts this ARG but as we've done with other array methods we're just going to focus on the required parameter, which is current value.
>
> **[1:05](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=65)** Let's go back to our initial example and apply a flatmap.
>
> **[1:10](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=70)** Here we have an array of allowance values and we want to double the current value and return the new values and they flatten single level array.
>
> **[1:18](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=78)** I've placed these single allowance values in their own array for demonstration purposes.
>
> **[1:23](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=83)** we start with a new variable that we will call double allowance and set that equal to our existing allowance array with flatmap applied.
>
> **[1:31](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=91)** In this example, we will call our current value, value and implicitly return the value times two.
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=97)** What you might notice that is slightly different here instead of a regular map is that we are wrapping the implicitly returned value in square brackets.
>
> **[1:46](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=106)** Now we have a single level array that contains the doubled values from our original array.
>
> **[1:52](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=112)** Let's try another example in the code.
>
> **[1:55](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=115)** Here we have an array of words that we want to use to create a word jumble.
>
> **[2:00](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=120)** We want to take this array and split it into a new flat array of individual letters.
>
> **[2:07](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=127)** So first we want to create a new variable that we'll call split words.
>
> **[2:13](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=133)** And remember, as we have learned with several other array methods this one returns a new array just like map, just like filter.
>
> **[2:23](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=143)** And so the first thing that we'll need to do in those situations is to create this new variable to house our new array.
>
> **[2:30](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=150)** So we have our new variable split words and then we're going to take our existing array word jumble and apply flatmap.
>
> **[2:38](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=158)** For this particular example we only need to use current value.
>
> **[2:42](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=162)** And in this situation I'm going to call the current value word, but remember you can call this whatever you'd like.
>
> **[2:48](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=168)** Then we will just need to implicitly return here as we've done several other times with other array methods that operates similarly.
>
> **[2:56](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=176)** And I gave you a hint up above that you'll need to use the string methods split.
>
> **[3:02](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=182)** So in this case, we'll take word dot split and you'll need to pass open quotes with no space.
>
> **[3:12](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=192)** Then if we logged us out, We will see that we have a new array that has our word jumble broken up into individual letters in a single flat array.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), case, (1), pass (1)
> **Analogies:** just like (2)
> **Prerequisites:** you'll need (2)
> **Env Vars:** arg (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Solution: Advanced methods 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=0)** - [Narrator] In this challenge, we've been given an array of applicants.
>
> **[0:08](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=8)** Each item in this array is an object with a name and an age.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=13)** And in order to find our solution, we're looking to return an array that has filtered only those applicants who are 18 years or older.
>
> **[0:23](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=23)** So for this particular challenge, we're going to use the array method filter, and filter is actually one of my favorite array methods, as strange as it may sound, but I think it's really powerful and it's really been helpful for me.
>
> **[0:39](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=39)** So the first thing I'm going to do is just write my return statement.
>
> **[0:42](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=42)** We don't need to, you could set a new variable and create your new array that way.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=50)** I just prefer for simplicity sake to just go ahead and return what we will transform here.
>
> **[0:59](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=59)** So we'll start with our applicants, our existing array.
>
> **[1:03](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=63)** And remember, when we apply filter, it's going to return a new array that fits the criteria that we provide.
>
> **[1:12](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=72)** So we'll say applicants filter, and then I'm just going to call this app the peram that represents each object in the array.
>
> **[1:22](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=82)** We're going to implicitly return, and then we're looking specifically at age.
>
> **[1:27](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=87)** So we want to say app.age, and it's important.
>
> **[1:31](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=91)** The instructions said 18 and over.
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=95)** Make sure you don't find yourself in this trap here where you've wrote App.Age is greater than 18 because we want to make sure that we're also encompassing ones that are 18 as well.
>
> **[1:49](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=109)** So you would have greater than or equal to 18.
>
> **[1:52](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=112)** That would be your criteria, and that should be all we need to return a new array that just has those applicants that are 18 years or older.
>
> **[2:01](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=121)** So let's go ahead and return that, let's test it.
>
> **[2:04](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=124)** And yes, we're exactly right.
>
> **[2:06](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=126)** You can see that this array contains three items and each of them are 18 years or older.
>
> **[2:13](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=133)** So great work on that one.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Code Keywords:** let (2), return, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Advanced methods 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=5)** - [Instructor] For this challenge, we've been given an array of sales.
>
> **[0:08](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=8)** And we have three sales in here, and we want to know, what are our total sales?
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=15)** If we added each of these up, what would we get?
>
> **[0:19](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=19)** For this challenge, we're actually going to use an array method called reduce.
>
> **[0:24](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=24)** I mentioned filter was one of my favorites.
>
> **[0:26](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=26)** Reduce is also one of my favorites.
>
> **[0:28](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=28)** But I will say, I use it all the time, and I feel like I often have to reference documentation to make sure that I set it up correctly.
>
> **[0:38](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=38)** So if you find yourself in the same boat, don't worry about it.
>
> **[0:43](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=43)** I think it happens to a lot of folks.
>
> **[0:45](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=45)** So no big deal.
>
> **[0:46](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=46)** The fact is, you knew to reach for it, and that's the important part.
>
> **[0:50](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=50)** So the first thing that I'm going to do, very similar to what we've done before, reduce is going to return a new value.
>
> **[0:57](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=57)** And that's going to be dependent on what we call the accumulator.
>
> **[1:03](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=63)** And we'll get into that here in a second.
>
> **[1:06](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=66)** So I'm going to return sales, our array that exists, and reduce, and I'm just going to go ahead and set that up to begin with.
>
> **[1:14](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=74)** And so the first thing that we're going to pass is the accumulator.
>
> **[1:18](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=78)** And effectively what this is, with reduce, you're looping through and you're effectively accumulating values in whatever capacity that is.
>
> **[1:29](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=89)** So for us in this particular challenge, we're adding up sales.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=94)** So that's going to be what we're accumulating.
>
> **[1:38](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=98)** And so what I'll go ahead and do here at the very end is I'm going to go ahead and set that baseline value, which is 0.
>
> **[1:46](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=106)** So sometimes with reduce, you will be accumulating a new array, perhaps an object.
>
> **[1:54](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=114)** And if you're starting from scratch, so let's say you want to start with an empty array, that's what you would add here at the very end.
>
> **[2:02](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=122)** So you have your callback function with your accumulator and the current value that's coming through.
>
> **[2:08](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=128)** So that would be here.
>
> **[2:09](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=129)** Which sometimes people put current.
>
> **[2:12](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=132)** It really doesn't matter, these two, what you call them, this is just what they are.
>
> **[2:16](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=136)** So I usually say acc for the accumulator.
>
> **[2:20](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=140)** You could call it something different.
>
> **[2:22](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=142)** Sometimes people put current or cv, or you could say, in this case, the product.
>
> **[2:27](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=147)** So whatever product we're looping over.
>
> **[2:30](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=150)** Those don't have to be called anything specific.
>
> **[2:32](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=152)** It's just important to know what they're doing.
>
> **[2:36](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=156)** I'm going to go ahead and change this back to 0.
>
> **[2:38](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=158)** So that's our baseline, that's what we're starting with.
>
> **[2:42](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=162)** And I will then go back here to structuring my callback function.
>
> **[2:48](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=168)** And, for this one, I can implicitly return.
>
> **[2:51](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=171)** You could also remember, structure it like this.
>
> **[2:55](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=175)** But I'm just going to keep it for brevity, and it's a good practice to get into.
>
> **[3:00](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=180)** So we're going to explicitly return, and we want to take the acc, so the value that we're accumulating, and add whatever our product.sales for the current item being iterated, we want to add that to our acc.
>
> **[3:15](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=195)** So think about it like this.
>
> **[3:16](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=196)** We're looping through, the first value is CoolShirt, and the sales is 200.
>
> **[3:21](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=201)** So we're going to take the acc, which to start at 0, and say 0 plus 200.
>
> **[3:27](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=207)** So 200.
>
> **[3:28](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=208)** We loop through again.
>
> **[3:30](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=210)** Now this value is 200, and we take 200 plus whatever the next value is, which is 500.
>
> **[3:38](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=218)** So hopefully that makes sense.
>
> **[3:39](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=219)** And reduce is one of those, you can use it in so many different ways.
>
> **[3:44](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=224)** It has a lot of power, and it's one I think you should definitely get familiar with.
>
> **[3:49](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=229)** So let's go ahead and test our solution and make sure that it's correct.
>
> **[3:53](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=233)** And we go ahead and run the code.
>
> **[3:55](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=235)** And we are in fact correct, and our code returned a value of $850, which is how much of sales that we've made so far.
>
> **[4:04](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=244)** So great work on this.
>
> **[4:06](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=246)** You did a really great job completing these challenges.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (2), function (2), pass (1), case, (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** similar to (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=0)** - [Jamie] Thank you so much for joining me for this course on JavaScript array methods.
>
> **[0:04](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=4)** I hope this has reinforced your understanding of array methods, and how you can incorporate them into your code more often.
>
> **[0:11](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=11)** I strongly encourage you to keep coding.
>
> **[0:13](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=13)** Keep working on your JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=15)** If you're learning on your own, the best way to learn is to build something.
>
> **[0:19](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=19)** If you're working as a developer or software engineer, there are ways to incorporate these array methods into your current projects.
>
> **[0:25](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=25)** Check out other LinkedIn Learning courses on JavaScript, as well as JavaScript frameworks, like Angular, React, and Vue.
>
> **[0:32](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=32)** I hope that you found this course to be valuable.
>
> **[0:34](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=34)** Please feel free to connect with me, here on LinkedIn, or you can visit my blog, at [jamiepittman.com](https://jamiepittman.com).
>
> **[0:40](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=40)** Keep up the great work.

> [!info]- Semantic Content
>
> **URLs:** [jamiepittman.com](https://jamiepittman.com) (1)
> **Speakers:** - [jamie] (1)


## Instructor

- [[Jamie Pittman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/javascript-arrays-2864011)

## Skills Covered

- JavaScript

## Path Context

### In [[Improve Your JavaScript Language Skills]]
← [[JavaScript- Recursion]] | **5 of 8** | [[JavaScript- Maps and Sets]] →

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