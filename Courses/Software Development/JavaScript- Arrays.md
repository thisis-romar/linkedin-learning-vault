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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Arrays.md)

![JavaScript: Arrays](https://media.licdn.com/dms/image/v2/D4D0DAQEMPgkHry1_ug/learning-public-crop_675_1200/B4DZVN0GZ9G8AY-/0/1740767258494?e=2147483647&amp;v=beta&amp;t=1AMLKM2tPgMyRE6r5hG-rDtMuwGZuN5JZn4gHt6IO7w)

# JavaScript: Arrays

> Programming language arrays store collections of data in a single variable, and you can use them as lists, as stacks, as collections, and more. They also have built-in properties and methods that allow you to utilize them as needed. JavaScript arrays may sound simple, but they offer many more features than arrays in other programming languages. In this course, Jamie Pittman covers how to integrate

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-arrays) | 1h 15m | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [So many ways to work with arrays](#so-many-ways-to-work-with-arrays)
  - [What you should know](#what-you-should-know)
- [**1. Arrays: The Basics**](#1-arrays-the-basics) (5 videos)
  - [Arrays overview](#arrays-overview)
  - [Length property and direct assignment](#length-property-and-direct-assignment)
  - [forEach for ease and readability](#foreach-for-ease-and-readability)
  - [Solution: Basic array methods 1](#solution-basic-array-methods-1)
  - [Solution: Basic array methods 2](#solution-basic-array-methods-2)
- [**2.  Working with Ordered Data**](#2-working-with-ordered-data) (5 videos)
  - [Order arrays with sort](#order-arrays-with-sort)
  - [Reverse array order with reverse](#reverse-array-order-with-reverse)
  - [Find a single element with find and findIndex](#find-a-single-element-with-find-and-findindex)
  - [Solution: Working with ordered data 1](#solution-working-with-ordered-data-1)
  - [Solution: Working with ordered data 2](#solution-working-with-ordered-data-2)
- [**3. Evaluating Data for a Single Value**](#3-evaluating-data-for-a-single-value) (4 videos)
  - [Does the array Include an element?](#does-the-array-include-an-element)
  - [Do elements pass a test?](#do-elements-pass-a-test)
  - [Solution: Evaluating single value 1](#solution-evaluating-single-value-1)
  - [Solution: Evaluating single value 2](#solution-evaluating-single-value-2)
- [**4.  Implementing Stacks and Queues**](#4-implementing-stacks-and-queues) (4 videos)
  - [The end: Push and pop data](#the-end-push-and-pop-data)
  - [The beginning: Unshift and shift data](#the-beginning-unshift-and-shift-data)
  - [Solution: Implementing stacks and queues 1](#solution-implementing-stacks-and-queues-1)
  - [Solution: Implementing stacks and queues 2](#solution-implementing-stacks-and-queues-2)
- [**5.  Bringing It Together: Advanced Methods**](#5-bringing-it-together-advanced-methods) (6 videos)
  - [Reformat data with map](#reformat-data-with-map)
  - [Filter data with filter](#filter-data-with-filter)
  - [Single values with reduce](#single-values-with-reduce)
  - [Flat + map = flatMap](#flat-map-flatmap)
  - [Solution: Advanced methods 1](#solution-advanced-methods-1)
  - [Solution: Advanced methods 2](#solution-advanced-methods-2)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [So many ways to work with arrays](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/so-many-ways-to-work-with-arrays?u=76281980&t=0)** - [Jamie] One of the beautiful things about programming is how it is constantly evolving. [[JavaScript]] is no exception. Over time, JavaScript has grown and many aspects have been added, including array methods. When you first started learning JavaScript or really any programming language for that matter, you have one goal in mind, make your code work. As you learn and grow as a developer, you pick up best practices along the way and learn how to write better code. This course was created to help you step up your JavaScript skills and learn the ins and outs of some popular array methods. Maybe you've used some of them before or you've seen them used in a pull request and wanted to learn more about how they work. In this course, we will learn about several JavaScript array methods, their syntax, how they work and examples of them in action. Hi, I'm Jamie Pittman and I'm a front end software engineer. Join me and learn more about JavaScript array methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (6)
> **CLI Commands:** make (1)
> **Speakers:** - [jamie] (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=0)** - [Instructor] This course provides a beginner to intermediate level overview of [[JavaScript]] array methods. You absolutely do not need to be an expert or senior level developer, but this course does require a basic understanding of JavaScript. Advanced knowledge is not required for this course. If you're just starting out, this will be a great way to further your knowledge of JavaScript, specifically with array methods. If you have a few years of development experience under your belt, this will help you sharpen your skills. You should be comfortable using and understanding arrays, objects, and functions. Additionally, you should be familiar with how to use your favorite text editor and your terminal. Again, just a basic, familiar level is all that's needed for this course. You do not have to be a master with the terminal or JavaScript. For this course, I'll be using Visual Studio Code, or VS Code, and it's built-in terminal. Please use whatever text editor and terminal that you feel most comfortable using. It does not have to be VS Code. In order to run the code we will be writing, you will need to install [[Node.js]] on your machine if it is not already installed. For more information on how to get set up with Node.js, please go to [nodejs.org/en/download](https://nodejs.org/en/download). We will be using Node to run our exercise files and see the array methods at work.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/what-you-should-know?u=76281980&t=94)** In order to run the files in Node, you'll need to navigate to the directory that the files are stored in within your terminal. Then you'll type node and the name of the file. Make sure to include the file's extension, which will be js in all of these files. That's all you'll need for this course. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Node.js]] (2)
> **Tools:** terminal (5), vs code (2), visual studio (1)
> **CLI Commands:** node (5), make (1)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **File Paths:** node.js (2)
> **UI Navigation:** go to (1), navigate to (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Exercise Files:** exercise files (1)


### 1. Arrays: The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Arrays overview](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=0)** - [Presenter] What is an array? An array is a type of object that stores collections of data in a single variable. Arrays are flexible, list-like objects. They are used frequently in [[JavaScript]] and can be transformed in a number of different ways. Arrays have built in properties and methods to allow us to utilize them as needed. By having a better understanding of how to use arrays to their great potential, you can write more clean, succinct code and reach solutions much more quickly. Let's consider a real world situation to give you a high-level example of how arrays are used. Here is a simple array of strings of all of my pet's names. As you can see, this is very list-like. The contents of the array could have been anything, numbers, booleans, objects. Taking the previous example one step further, our pets array now contains several objects. Each object represents one of my pets and information specific to them. By using the information, you'll learn in this course, you'll be able to take the data you've been provided and transform it to figure your needs. What if you wanted to filter the array down to only include dogs? What if you wanted to sort the array based on the age of each pet or calculate the total number of pets in the array? Array methods exist in order to help you easily work with the data provided. In this course, we will examine several array methods
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/arrays-overview?u=76281980&t=94)** that will help you become a better JavaScript developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [presenter] (1)

#### [Length property and direct assignment](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=0)** - [Instructor] All arrays have a length property. The length property returns the number of items in an array. The value returned is a number. For example, let's consider an array of letters. If we apply the length property to the array, it will return a numerical value that represents the length of the array. Additionally, arrays in [[JavaScript]] are zero based. This means that the index position of the first element of the array starts with zero. The second element would have an index position of one and so on. Direct assignment is when you assign data to a specific index position within an array. We have to be careful when using direct assignment because it will override any existing data in that position. It does not shift existing data in the array. It will completely overwrite it. Let's go to the code and see how to apply length and direct assignment in a practical example. Before we get started, I want to point out that I'm running my terminal within VS Code. I'll be running the code in the terminal so you can see what is being logged out for each exercise. In order to emulate what I'm doing, you'll need to make sure you navigate to the folder or directory where your file is stored and then you can type node, the name of the file to run it. So here we have an array of pets. How do we determine how many items are in the array which will be the same value as the array's length. We'll start by creating a new variable
>
> **[1:33](https://www.linkedin.com/learning/javascript-arrays/length-property-and-direct-assignment?u=76281980&t=93)** that we will call pets length. This variable will be equal to pets.length. This will return a numerical value. If we console.log out the result, pets length. And save. We will see that the length of the array is four. This becomes especially helpful when we have much larger arrays. Now let's assign snake to index position two in the existing pets array. We will use direct assignment to place snake into the array. Remember arrays are zero based, so if we are adding snake to the array in index position two, it is going in the third position and will overwrite rabbit in the array. In order to directly assign snake to index position two, we will reference our pets array with brackets and index two. Then we set this equal to the string snake. If we console.log pets, we will see that snake has now replaced rabbit in the array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (1), node (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** you'll need (1)

#### [forEach for ease and readability](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=0)** - [Instructor] Iterating over arrays is critical to working with [[JavaScript]]. For many of us, when we first started learning JavaScript, we were taught how to use a for Loop to iterate over each item in an array. As you can see, this can get a bit verbose. Luckily, array methods like forEach were created to make the process of array iteration more clean and succinct. The forEach method executes a function once for each element in an array. When using a for Loop, you would have to explicitly reference the length of the array to ensure that the entire dataset was looped over. Additionally, forEach does not mutate the original array. This means that the original array you were looping over will not change. The function executed on each element in the array is a callback function. This function has three parameters. The first is currentValue, and it is required. This represents each value within the array you are iterating over. Optionally, you can pass the index of the current value and the array you are iterating over. ForEach also accepts a thisArg as an optional parameter. But for the purpose of this course, we are only going to focus on the currentValue to ensure you have a basic understanding of this array method. Let's take a look at forEach in action with our fruit example. To start, we are just going to iterate over the array and log out each element.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=94)** Here, we are using element to represent the current value. This is fairly common practice, but ultimately, you can name this whatever you would like. In our example, fruit might be a good substitute for element. Then, we just simply log out the element. This would return each element one by one. Now, let's go to the code and look at another example of how to use forEach. In this example, we have an array of scores. We want to iterate over this array and whenever a score is over 65, we want to execute the logScore function. The logScore function has a single parameter of score and prints the provided score in the console. How do we accomplish this task using forEach? We will start with our scores array and apply forEach. We will call the current value here element, but remember, you can call this score or whatever makes sense for you. Then we will add our fat arrow and curly braces to round out the basic syntax setup. Now we need to add logic to execute the logScore function when the score is over 65. Here we'll add an if statement and if the element is greater than 65, we will execute the logScore function. And don't forget to pass the element to the function so it can log that score out. If the score is less than 65,
>
> **[3:06](https://www.linkedin.com/learning/javascript-arrays/foreach-for-ease-and-readability?u=76281980&t=186)** we take no action. We don't need an else statement or any additional code. If we check the console, we will see that the function logs out every score over 65. Hopefully, you can see how this execution mirrors that of a for Loop, which is something that is more familiar to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Code Identifiers:** foreach (7), logscore (4), currentvalue (2), thisarg (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Basic array methods 1](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-1?u=76281980&t=0)** - [Instruction] Welcome to your first challenge in this array methods course. And our first task here is going to be determining the length of the array fruits. So the first thing we'll want to do, and this will be the case in each of our challenges, is we want to make sure we don't forget to return the actual solution so we can check it against the correct answer. So I'm going to go ahead and write return here just so I don't forget. And then we want to know what is the length of the fruits array? So let's go ahead and reference fruits. And then to get the length of the array, we will use the length property. So it's as easy as that. And now let's go ahead and test this code and make sure that it's correct. And very good job. You can see that the length of this array is four.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Best Practices:** don't forget (2)
> **Speakers:** - [instruction] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Basic array methods 2](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=0)** - [Instructor] For this challenge, we've been given an array of numbers and a variable called start that is set to zero. We want to loop over this array and add each value to start.
>
> **[0:20](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=20)** Traditionally, before we had the array method for each, we would use something called a for loop to loop over an array, and it was a little bit more verbose. For each has made this so much easier and cleaner, and so that's what we're going to use today to add up this value. So first, what we'll need to do is take our numbers array, and let's go ahead and apply the for each method, and I'm going to set up the callback function. We're going to pass number, which represents each number within the array. Now, one important thing to remember from the lesson, and you'll find as you go through the course, this varies depending on the array method, but for the for each array method, it does not return a new array. We're going to talk about an array method called map, we're going to talk about an array method called filter, and each of those return a new array. This does not, this just iterates over the array, and then the magic that you do inside of this iteration is what's important, but it does not transform your original array. It does not return a new array. So for us, what we want to do is we want to take the variable start, and for each number in the array, we want to take the existing value of start, and we want to add the number being passed to that value. So it's going to loop over each of the numbers in there,
>
> **[1:54](https://www.linkedin.com/learning/javascript-arrays/solution-basic-array-methods-2?u=76281980&t=114)** and it's going to change the value of start each time as it's adding it up, and then, in order to make sure our solution is correct, we're going to need to return the start value. So let's go ahead and test that and make sure that our solution is correct. So excellent, so 27, that's what you get when you start with zero, and you add up each of those numbers in the array, so I hope that showed you a good example of where for each can come in handy as you are developing on certain projects, so keep up the good work.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2.  Working with Ordered Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Order arrays with sort](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=0)** - [Teacher] As the name of the array method implies, sort we'll sort an array. By default, the contents of the array will be sorted as strings in ascending order, which is smallest to largest. If we haven't yet have strings that we need to sort alphabetically, we can simply apply sort. The compare function can be written in one of two ways. The first is as a function expression that explicitly returns a value. The second example uses ES6 syntax to implicitly return the function. The compare function can be used to alter the default sort order. The function should return a value that is either positive, negative, or zero. The values are then sorted based on the return value. The compare function will compare all of the values in an array. Two at a time, altering the order accordingly. Let's use this as an example. We have values a and b, and we are comparing a minus b in order to sort from lowest to highest. If a minus b returns a positive value, value b would be sorted before value a. If a minus b returns a negative value, value a would be sorted before value b. If the result is zero, the sort order will not be changed. Let's take a look at a few examples and see how we can apply what we just learned. The first array that we will look at is one with strings, pets. How do we sort this array alphabetically?
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=94)** Because this is an array of strings, we can easily sort this array by simply applying the sort method directly on the array. So here, if we console.log pets.sort, save it, and then run here in the terminal, we'll see that the array is now sorted alphabetically. Remember, by default, the contents of the array will be sorted as strings in ascending order or in this case, alphabetical order. What about an array of numbers? How do we sort this array of grades from highest to lowest, lowest to highest? Because the array is sort of by default as strings, we will need to utilize the optional compare function parameter to make sure that the array is sorted correctly. In order to sort the array of grades from highest to lowest, we will pass two arguments to the compare function, a and b. So we'll start by using our grades array and applying sort, then we'll pass those arguments a and b. Then we will explicitly return the value of b minus a. If b minus a returns a positive value, b will be sorted before a. If b minus a returns a negative value, a will be sorted before b. If we log this out-- So console.log grades, we will see that the array has been sorted
>
> **[3:10](https://www.linkedin.com/learning/javascript-arrays/order-arrays-with-sort?u=76281980&t=190)** from highest to lowest. To sort the array lowest to highest, we will set up the function the exact same way. So we'll do grades.sort, our arguments rather a and b, our arrow function. And the only difference here is we're still going to explicitly return the value, but this time a minus b. When we log that out, we will see that now the array is sorted from lowest to highest. Remember, this is manipulating the original grades array, so be conscious of this when you're using sort within your code. This should give you a great foundation in order to start using the sorter array method in your code. There are more complex examples that we could discuss, but for now, let's keep our discussion at a basic level.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [teacher] (1)

#### [Reverse array order with reverse](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=0)** - [Instructor] You might be noticing a pattern with array, method, names and their function. The reverse method certainly does what it says it will do which is to reverse the order of an array. Using the reverse array method is fairly straightforward but there is one thing to remember when using this method it will change the original array to the newly reversed array. If you need to maintain the original array it would be best to create a new variable to apply the reverse method. If we look at a quick example, we see that simply applying the array method has reversed the order. Let's go to the code and discuss where the reverse array method would come in handy. We first have a list of condiments. How do we reverse the order of this array? As we learn using the reverse array method is just a matter of applying it to the array we want to reverse. If we log out the condiments array console.log, condiments.reverse And then logged that out we see that the array has been reversed. In the next example we have a list of employees in our company directory. The array is already sorted alphabetically but we want to reverse the order. However, we want to leave this original array unchanged. So first let's get started by creating a new variable that we'll call reversed and we need to create a copy of our employees variable.
>
> **[1:39](https://www.linkedin.com/learning/javascript-arrays/reverse-array-order-with-reverse?u=76281980&t=99)** We're going to make this copy using the spread operator to clone the array. You might be thinking, why can't we just use an equal sign? Using an equal sign we'll reference the value of the original array. And so then when we apply reverse it's going to change both arrays. So here the spread operator is something that allows us to quickly and easily create a new array copy that we can use and manipulate. Now that we have our new variable all we have to do is apply reverse. So I'm going to console log reversed. here I will apply reverse.reverse. We'll log that out, then right below it, I'm going to log out our original employees array, call this original and employees to show you that that array has not changed. So you can see in the console we have a reverse array and then right below it the original array, which is unchanged.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Find a single element with find and findIndex](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=0)** - [Narrator] The array methods find and findIndex are used when you only need to return a single value within an array. These methods iterate over an array element by element returning the first element or index that passes the test. If you need to return multiple values that meet a specific criteria, you would reach for the filter array method that we will discuss later on in the course. The array methods find and findIndex operate identically but return different values. Both array methods return the first element that satisfies the criteria provided and have identical syntax. Find will return the first element that matches the testing function. And if nothing matches the criteria or the array is empty, undefined will be returned. FindIndex will return the index of the first element that matches the testing function, and if nothing matches the criteria or the array is empty, negative one will be returned. These two array methods follow a similar syntax to other array methods that we've covered like for each. Both array methods take a call back function or what we have referred to as the testing function. The callback function takes the following arguments, element which is required, index and array. Find and findIndex also have an optional thisArg parameter, but for the purpose of this course, we're only going to focus on the element parameter to ensure you have a basic understanding
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=95)** of how these arraign methods work. Now that we know how to use these array methods, let's work through an example in the code. Here we have an array of grades. In the first exercise, we want to find the first grade that is under 80. The first thing that we'll do is create a new variable that we'll call under 80 to store our return value. Remember, find and findIndex return, a single element, leaving the original array unchanged. Now let's apply find to our existing grades array. So grades.find and we will call this current value element.
>
> **[2:16](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=136)** We'll use our fat arrow function to implicitly return and then we want to find an element that is less than 80. So remember this is going to find the first element that is less than 80. All right, save that. And then we'll log out our under 80 variable and run that in the terminal. And we'll see that 77 is the first grade that is found under 80. If we move on to our next example, we want to find the index of the first grade that is over 80. So we'll start in the same manner that we did with our first example. This time we'll call the variable over 80. And remember you can call these variables, name them whatever you'd like, whatever makes sense for you. The syntax for findIndex is basically the same as find so we'll take our original array grades and apply findIndex we'll call our current value here element but remember you can call this whatever you'd like, you could call it grade, whatever makes sense for you. We can also implicitly return this function here, because we're just going to have this basic return statement. So here, since we're trying to find the index of the first grade that is over 80 we'll say element greater than 80.
>
> **[3:51](https://www.linkedin.com/learning/javascript-arrays/find-a-single-element-with-find-and-findindex?u=76281980&t=231)** If we log out over 80, we'll run this down here in the terminal and we'll see that the index of the first grade that is over 80 is 99 which is in index position zero.

> [!info]- Semantic Content
>
> **CLI Commands:** find (13)
> **Code Identifiers:** findindex (6), thisarg (1)
> **Tools:** terminal (2)
> **Speakers:** - [narrator] (1)

#### [Solution: Working with ordered data 1](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-1?u=76281980&t=0)** - [Trainer] In this challenge, we want to sort an array of cities. So the first thing that I'm going to do is go ahead and write my return statement, and then I'm going to go ahead and type out cities, 'cause I know I'm going to be referencing that. And then for this particular example is actually going to be very straightforward. The sort method by default is going to sort alphabetically. So this would be more complicated, if we had, say, an array of objects and maybe we wanted to reference a specific property, then it gets a little bit more complicated. But in this example, we have an array of strings and we just want to sort it alphabetically, so we can simply apply the sort method to our array. So let's go ahead and check our solution and make sure we were right. And yes, of course, we've got our correct answer here. So great work on that one.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [trainer] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Working with ordered data 2](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=0)** - [Instructor] In this challenge, we want to check an array and see if a particular item can be found in that array. So if we look at our [[Microsoft Products|products]] here, we can see we have a couple of objects, wireless mouse, mechanical keyboard, USB, Bluetooth speaker, and the particular product that we're looking for is actually the wireless mouse. So the first thing we want to do is I'm going to go ahead and write my return statement, but I'm going to spell it correctly, and I'm going to write out my array that I'm going to reference for this particular challenge because we want to find the first match for the wireless mouse, we're going to reach for the array method find, and we're going to need to pass a value here because it's going to loop over the array and look for the value that we're trying to find. So we will call this name, and I'm going to implicitly return. Now, another way that you could do this, it's a little bit more verbose, but you would have your curly braces here, but then you would just need to make sure that whatever criteria that you're going to pass, you would also have a return statement. I like to do it implicitly. It saves some room, saves some time, I think, so that's how I'm going to show you, and it's a good, modern way to work. So we're going to loop over
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/solution-working-with-ordered-data-2?u=76281980&t=94)** and we're going to look for in this products where the name, oh, excuse me. Actually, you know what? Let's call this something different, name is actually what we're looking for, but let's call it prod. That's a little bit more, it doesn't actually matter what you call this peram that you're passing that kind of represents each object. You could call it X, but I'm going to call it prod. But actually what I was looking for, or what we're going to be looking for is if the prod.name, that's why I accidentally called it name to begin with, is equal to wireless mouse. All right, one thing that I've mentioned before is that when we're doing any sort of string matching, the casing does need to match. In this particular instance, we know from our instructions that wireless mouse, it's capital W, capital M. If we had a lowercase M and then we try to find this particular product in our array, it is not going to come back with a match. Let's go ahead and check our solution and see if we got it correct. Awesome, so you can see that when it looped through, it found a product using the find array method that matched exactly what we were looking for, a product with the name with wireless mouse, great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **CLI Commands:** find (5), make (1)
> **Env Vars:** usb (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Evaluating Data for a Single Value

[↑ Back to Table of Contents](#table-of-contents)

#### [Does the array Include an element?](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=0)** - [Instructor] The array method includes checks an array for a specific value. It will then return a Boolean, true or false, to indicate whether or not a value was found within a specific array. The syntax is fairly simple. You pass the array method the value you want to search for in the array. Keep in mind that this value is case sensitive. Additionally, there's an optional parameter called fromIndex, which indicates from what index position you want the method to start searching. For the purposes of this lesson, we're going to focus simply on passing a value to search as this will be the most common implementation of the array method. Let's look at a quick example to see includes an action. We have an array of scores and we want to see if it includes a perfect score of 10. All we have to do is pass the score we're looking for, 10, and the array method will return True, indicating that 10 is included in the array. Now let's go to our code and try an example. Here we have an array that includes a variety of careers. We want to see if the array includes a nurse in the list. The first thing that we'll need to do is to create a variable to store the Boolean that is returned but includes array method. We'll call this variable, nurse included. Then we'll take our careers array and apply includes. Includes takes an argument, and since we're searching for nurse within this array, we'll pass nurse to the includes array method.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/does-the-array-include-an-element?u=76281980&t=94)** Now don't forget, this is case sensitive. So here we'll do all lower case nurse and log this out to see what we get back. Alright, if we go down to the terminal, logged us out, we'll see it's true. Just for fun, I want to show you if we had put this in as a capital letter, what that would return. So you see, because nurse with a capital N is not included in that array, it will return false. So keep that in mind when you're using includes that it is case sensitive.

> [!info]- Semantic Content
>
> **Code Identifiers:** fromindex (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Do elements pass a test?](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=0)** - [Instructor] Sometimes we need to determine whether or not an array passes a test, sometimes, or every time. Thankfully two array methods exist to help us some and every. These array methods function identically, both return booleans based on whether or not the functions criteria match some or every element in the array. With Some, as the name implies, if at least one element matches the criteria, it will return true. With every, every single element in the array must match the criteria for it to return a true value. The syntax for some and every should look very familiar as we've used this previously with, for each, find and find index,. Both array methods take a callback function that has three parameters. Element which is required, index which references the index of the current element and array, which is the array you're iterating over. This also has a parameter, this Arg, but we're going to keep things simple and focus on using element. The only required parameter for the purposes of this lesson. Now let's take a look at a quick example to see some and every inaction before moving to the code. Here, we have an array of temperatures. We want to know if some of the temperatures are less than 90 is every temperature over 80. As you can see, we pass the element, which could be named anything, perhaps temperature here or temp
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=95)** and implicitly return a comparison based on the established question, we're trying to answer. For some, are some of the elements less than 90. That is true. With every we want to know is every element greater than 80. In this case, it is also true. Let's take a look at the code for another example that we can work through together. Here we have an array of states. I've also provided a handy string method to help us find the solution for this problem. In case you've never used it before, bonus learning for you. So this handy string method is called starts with. And in this particular example we're going to pass the starts with string method and argument of new. Going back to some and every we may recall from our lesson that we just walked through that some, every, both returned booleans. So we'll need to start in this particular example by creating a new variable to store the return value. We'll name this one, some states. Then we'll take our state's array method and apply some. We'll call our element state here. And we'll implicitly return state starts with new. We want to make sure that it's capital because it is case sensitive. All right, so then if we go and,
>
> **[3:07](https://www.linkedin.com/learning/javascript-arrays/do-elements-pass-a-test?u=76281980&t=187)** log out some states, all right and we'll run this in our terminal. We'll see that in fact, some states start with new, awesome. Moving on to our next example does every state in the array start with new? So as we learn some and every have pretty much identical syntax, right? So the first thing that we'll need to do here because this is going to return a boolean value, just like we did with some, we're going to create a new variable and we'll call it every state. Then just like we did with some, we'll say states, but here we'll say every and we'll call our element here state. And remember, you can call this whatever you like, whatever makes sense for you. A lot of times you'll see element. And then we'll implicitly return state dot starts with our new string method that we learned and we'll pass the argument new, which is case sensitive. So then if we log out every state, we will see that false. Not every state in the array starts with new.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Analogies:** just like (2)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Evaluating single value 1](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-1?u=76281980&t=0)** - [Instructor] In this challenge, we want to determine if an array includes a very specific value. So let's go ahead and get started. And we know for all of our challenges here, we want to make sure we're returning the solution that we came up with to check it against the correct solution. So I'm going to return fruits and then includes, because we're trying to see, does the array include the very specific string of Apple? And I've mentioned this before and we'll use this as a good way to kind of show you what I've mentioned before about string matching. So here, if I change Apple to lowercase, we should expect that this does not return the correct solution. So you can see here it returned false, which is incorrect. We actually know that it should be there. And if we change this casing here to Apple, with a capital A, and test it, we can see that we get the correct result. So it's really important. Make sure when you're doing any sort of string matching to make sure that the casing matches exactly or it's not going to return the solution that you expect. Great work.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Evaluating single value 2](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=0)** - [Instructor] In this challenge, we've been given an array of tasks and we want to determine has every single task in that array has it been completed? So we learned about some array methods, some and every. And in this particular case, since we want to determine if every single one has been completed, we're going to use the every method. So first I'm going to write my return statement and then tasks, and then we will apply that every method and we'll use, I'm just going to put TSK, that will represent the individual task. And just for fun, I'm going to do this, what I'll call the long way instead of implicitly returning in case this is how some folks feel more comfortable. So very similar to the way I've shown you different solutions, but I'm not implicitly returning here. I'm actually going to have to write out my return statement. Here I want to know, has every task been completed? So effectively, TSK, which is what we passed in here, this represents each object within the array, dot completed. We want to know, is that true or false? So here we can actually just return this as is because if it evaluates to true, this will return it.
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/solution-evaluating-single-value-2?u=76281980&t=94)** And it's looking to check that every single task has been completed. Now, if we wanted to say, is every task incomplete? Then we would actually, we could put an exclamation point in front of that to indicate that we want to check, is this value false. But in our case, we want to make sure is this value true. So let's go ahead and run this and test our solution, and we can see false, which is correct. Not every task in our array has been completed. So I hope that was helpful to kind of see it a different way. As I mentioned before, I prefer to implicitly return, but I want to show each different way in case you're still in the learning process, just to kind of give you some more context. So keep up the good work and we'll see you in the next challenge.

> [!info]- Semantic Content
>
> **Env Vars:** tsk (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4.  Implementing Stacks and Queues

[↑ Back to Table of Contents](#table-of-contents)

#### [The end: Push and pop data](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=0)** - [Instructor] Have you ever heard of the Last In, First Out roll? What about a stack? A stack is a data structure that holds a list of items and operates using the Last In, First Out roll. Think of a stack, like a stack of physical items, papers, books even pancakes. The array methods, push and pop, are how data is added and removed from stacks. At the start of my coding career, push was the first array method that I learned. I used it a lot in conjunction with for loops. And you may already be familiar with it as well. We're going to discuss, push and pop together, because they share a few things in common. Both of these array methods manipulate the length and contents of an array, by adding or removing data to and from the end of an array. The array method push, allows us to add one or more items to an existing array. Here we have an array of sports. If we pass football to the array method push, that is applied to the sports array, we see that football has been added at the end of that array. This array method only takes a single parameter which is whatever you'd like to add to your existing array. It can be one or more elements. Push returns the length property for the newly changed array. In my experience, I have never used the return value of pushing my code, but I just wanted you to be made aware of this possibility. When I have used pushed, it has been directly working with the existing array.
>
> **[1:37](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=97)** Now let's talk pop. When pop is applied to an array it pops the last item out of the array. The original array that pop was applied to is altered accordingly. If we take our sports example again, and we apply pop, we see that football is removed from the end of the array. Pop does not accept any arguments. It returns the item that was removed from the array, which could be helpful depending on how you're using the array. All you need to do to retrieve the value is to set it to a variable. Now that you have the basics, let's go to the code and work on an example. First, we have an array of drinks. We want to add wine to this array. How do we do that? Because we're adding something to the array, and we aren't concerned about the return value, we can start by applying push to the drinks array and adding wine. So we'll take our drinks array, add push, and then we're just going to pass in wine as the argument here. All right? And then if we log this out, go down here and run this,
>
> **[2:52](https://www.linkedin.com/learning/javascript-arrays/the-end-push-and-pop-data?u=76281980&t=172)** we see that our array now has wine and it's been added to the end. Next we have an array of seasons. We want to pop the last season off of the end of the array and store that value. The first thing that we'll do is create a new variable that we'll call popedValue. And then we'll set this equal to our existing array, seasons, with pop applied. Remember with this array method, we don't need to pass any arguments to it. So now if we log out, poppedValue so I'm going to call this popped value just as we've named that variable, and then I'm also going to log out the seasons array so you can see how this has changed as well. If we go and run this, we'll see that our popped value is winter, and now the seasons array is spring, summer and fall.

> [!info]- Semantic Content
>
> **Code Identifiers:** popedvalue (1), poppedvalue (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The beginning: Unshift and shift data](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=0)** - A queue functions similarly to a stack. But this data structure operates under the first in, first out rule. In order to add or remove data from a queue, we will use the array methods, unshift and shift. Unshift and shift operate almost identically to push and pop except that the data is added and removed from the beginning of the array versus the end. The array method unshift allows us to add one or more items to the beginning of an array. Here we will use our sports array again, but this time we're going to pass baseball to unshift. As we can see, baseball was added to the beginning of the sports array. The unshift array method takes a single argument, which is whatever you'd like to add to your existing array. It can be one or more elements. Unshift returns the length property for the newly changed array. This is the same behavior as the array method push. Now let's move on to shift. When this array method is applied to an array, it shifts the first item of the array out, keeping with our sports array example. When we apply shift, we see that the first item baseball is removed from the array. Like the array method pop, shift does not accept any arguments. It is applied directly to an existing array, and returns the value that was removed from the beginning of the array. Now that we have the foundations for these two array methods, let's go to the code
>
> **[1:33](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=93)** and try a few more examples. Here we have an array of ages of various family members. We want to add the age 36 to the existing array. How do we do that? Using the unshift method, all we have to do is apply it to our existing ages array, and pass 36.
>
> **[1:57](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=117)** So if we log out our ages array, we'll go down here and run it in the terminal. We see that 36 has been added to the beginning of the array. Our next problem uses an array of holidays. Here, we want to remove the first item from the array and store that value in a new variable. Let's start by creating a new variable that we'll call shifted value. Then, we'll set this equal to our existing holidays array dot shift. And that's it. Similarly to what we did with push and pop, I'm going to log out the new shifted value.
>
> **[2:44](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=164)** So the value that was returned by applying the shift array method, and then I'm going to log out our holidays as well just so you can see the difference.
>
> **[3:03](https://www.linkedin.com/learning/javascript-arrays/the-beginning-unshift-and-shift-data?u=76281980&t=183)** So our shifted value was Labor Day. So that first item removed, shifted out of the array was Labor Day. And then now the holidays array just has the three holidays, Christmas, Hanukkah and Independence Day left.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - a (1)

#### [Solution: Implementing stacks and queues 1](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-1?u=76281980&t=5)** - [Instructor] Welcome back. In this particular challenge, we've been given an array of scores, and we need to add a score of 7 to the end of this existing scores array. So for this particular challenge, we're going to reach for a very common array method that you're going to find yourself using time and time again. And that is the array method push. So the first thing that we'll need to do is reference our array, scores, and then push, and then you're going to pass the value that you need added to the end of the array. So, in this case, that's 7. Now, in order to check our solution after we've added 7 to the array, let's then return it, scores, and check. All right, let's go ahead and test that. And awesome. You can see that your scores array is now 10, 9, 8, 7, exactly as it should be. Great work.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Implementing stacks and queues 2](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/solution-implementing-stacks-and-queues-2?u=76281980&t=5)** - [Instructor] In this challenge, we're given an array of months, and we need to add January to the beginning of that array. So for this particular challenge, we're going to reach for the array method, unshift. So just as we did in the previous one with push, we're going to start with our months array, and we're going to unshift. So use that method, and then we're going to pass the string January, oops. And make sure that we spell that correctly. And as I've said many, many times, make sure that your casing matches, because we're going to need to then return this, and check it to make sure that it's the correct solution. So return months. All right, and then let's go ahead and test it. And awesome, we got the correct answer. You can see January has been added to the beginning of the months array. Great job.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5.  Bringing It Together: Advanced Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Reformat data with map](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=0)** - [Instructor] Have you ever been presented with an array that isn't quite what you need? It has all the necessary data but that data just needs a little bit of massaging. Let's take this array of grades as an example. You have the grades and they all need to have five points added to them. This is where the array method map comes in. The map array method generates a new array based on the function applied to each element in the array you're iterating over. The syntax for maps should look really familiar. We have seen the same syntax with for each, find, find index, and a few other array methods. So hopefully that will help you grasp how to get started with using map. The only difference you might notice is that we have the array method set to a new variable. This variable can be named whatever you'd like and whatever is relevant for your code. We'll call it new here since we're returning a new array. Before we move on to an example, let's quickly revisit the callback function. This function will be called for every element that you're iterating over in your original array. Each time the function executes, the new value will be added to the new array. Just as we've used it before, this function accepts current value, index, and array. The current value is the only required parameter. Additionally, map also accepts the parameter thisArg, but as we work on the basics of learning map,
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=95)** we're just going to focus on the required current value. Let's go back to our grades example and try to bring this all together. As you might recall, we need to add five bonus points to each student score. We will start by defining a new variable that we'll call bonus grades. Remember we can call this variable whatever we'd like. We just want to make sure it's relevant to the example that we're working on. Next, we'll take our existing array and apply map. We're going to call the current value grade in this scenario. Remember we can also call this whatever we'd like as well, but oftentimes you'll see it named element. Then we're going to return each grade and add five points. This can be written one of two ways, either implicitly or explicitly returning the value. Our bonus grades has now been created. Let's head to the code and try another example. Here we have an array of friends. Each friend is represented by an object with the key's first name and last name. We're going to use the array method map to create a new array that contains only our friends' full name, which will be the combination of their first name here and their last names. Because map returns a new array, the first thing that we'll want to do is create a new variable that we'll call full name. Now in this example, I'm going to show you two different ways that you can achieve the same desired result. The first way is going to be explicitly returning the function to get our new array using map.
>
> **[3:12](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=192)** The second way I'm going to show you will be using an implicit return and interpolation to make it even more succinct. So now starting with the first method, we're going to in both ways of doing this, we'll start the same. So you'll start by creating your new variable. That's going to store your newly created array by map. And then you're always going to start with your existing array and in this case, friends. You'll apply map here and today we'll call our current value friend and we'll set up our function syntax accordingly. So now since we're explicitly returning, we will put our return statement and then we're going to return friend dot first name and then we want to make it nice and readable. So we'll take our plus sign and we'll add quotations with a space. So that space is very important. Another plus sign and then friend dot last name. So now if we log this out,
>
> **[4:29](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=269)** we will see that we have a brand new array that has the full name of all of our friends. So that's one way that you can achieve your desired result with map. So I'm going to just comment this out for a second and now we're going to implicitly return our function. So I'm going to call this full name again. And like I said, we'll start with our existing array always and applying map and we'll call the current value here friend as well. So then we'll use our fat arrow function to implicitly return. And this time we're going to use interpolation. So if you've never used it before, be ready because this is awesome. If you've used it before, great. You already know how helpful this can be in your code. So when you use interpolation, basically it gives you free rein to kind of insert variables that exist. You do so by using dollar sign curly braces. So to show you how this works, I've got my back ticks. So that's what you need to start with. I have them here. You start with your back ticks and within those back ticks, you can interpolate. So I want to create this full name. So I'll start with dollar sign and curly braces and all I'll have to do is say friend dot first name. Then I go outside of the curly braces out of space, because remember we want to make this readable.
>
> **[6:03](https://www.linkedin.com/learning/javascript-arrays/reformat-data-with-map?u=76281980&t=363)** I'll add another dollar sign with curly braces so we can have friend dot last name. So now we have just a very clean, succinct way of writing this. So this is remember, implicitly returning using interpolation. And let's just show you that we've got the exact same result as we had before. So you can see exactly the same as our previous example will be explicitly returned. Either way of doing it is totally fine, but just be aware that there are different ways that you can achieve the same result.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (2)
> **Code Identifiers:** thisarg (1)
> **Cross-References:** go back to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Filter data with filter](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=0)** - [Instructor] Have you ever been presented with data that you only needed a subset of? Looking at our array here, what if we only wanted cats in our array? How would we filter this array? In the past we might've reached for a -- to iterate over the array, and then use the array method push to add items to a new array. Now that we have the array method filter, this accomplishes this for us much more elegantly. Filter is a [[JavaScript]] array method that creates a new array based on whether or not elements pass a test provided by a function. If we look at the syntax, we see that it is the same as map and several other array methods that we've learned. I think this makes many of the array methods easier to learn because the syntax is consistent. You just have to distinguish between what each array method achieves. As I have done in previous lessons, I'm going to keep our examples simple and stick to the aspects of the array method that you are most likely to tackle in your own work. We will just be focusing on the required element parameter and how it's used. In my experience, I rarely use the optional index and array properties and I've yet to incorporate thisArg into my work. Let's flick back to our example that we kicked off the lesson with and incorporate filter to get the solution we're looking for. Using our pets example, we want to filter our array down to only include cats. First, we need to create a new variable since filter returns a new array.
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=95)** Let's call this new variable "cats". Then we will take the existing pets array and apply filter. We'll call the element "pet" in this case, and if pet dot type matches cat it will be added to the cats array method. Now we see the cats array method contains only cats as we intended. Let's head to the code and try another example. Here we have an array of grocery items. Each item in the array has an item and type. We want to filter this array to only include fruits. First, we'll start by creating a new variable. We'll call this "fruit". Like I showed you with map, I'm going to show you how to achieve what you want using filter both explicitly and implicitly returning your values. So for this first example, we'll explicitly return. Either way, we start by creating this new variable and we start with our existing array and applying filter. So here we'll call our current value "item", and remember, you can call this whatever you'd like, and then we'll set up the [[Representational State Transfer (REST)|rest]] of our function syntax. Because we're explicitly returning, that means we have to have this return statement. And we want to include only those grocery items that are fruits. So since we're working with an array of objects, we want to look at item.type and we want to only have those that are fruits
>
> **[3:12](https://www.linkedin.com/learning/javascript-arrays/filter-data-with-filter?u=76281980&t=192)** in this newly created array. So our item.type should equal fruit. So now, if we log out our newly created array, we run that in our terminal, we see that our new array includes just apples and bananas because those are the only two fruits. Now let's try this same example implicitly returning. So it'll be very, very, very similar, and I'm going to just comment that out so you have it. We'll start the same way we did previously, creating our new variable. And then we take our existing array, groceries, and apply filter. We'll call our current value here "item", and then our fat arrow will implicitly return the value that we're filtering. So here, same as before, we want item.type to equal fruit. And if we log out fruit and then run that down here in the console, we'll see we get the exact same answer. So really it's a matter of preference. And depending on the developers that you're working with, they may prefer one way over the other. I just think it's important to know that there's more than one way that you can achieve your same desired result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** cat (1)
> **Code Identifiers:** thisarg (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Single values with reduce](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=0)** - [Instructor] Have you ever encountered an array of values that needed to be added up and reduced to a single value or a grand total? This is where the array method, reduce, can be helpful to do just that. One of the most powerful array methods available is reduce. For me, this array method has been more difficult to grasp because of its syntax. I typically have to look it up for this array method because it does operate a little bit differently than the other array methods we've discussed thus far. So what exactly does reduce do? Reduce executes a reducer function against each item in the array, returning a single value. The value returned is the accumulated value. You'll often see this used with numbers, although it can be used with strings as well to determine counts and frequency. Where things get a little bit more tricky is with the syntax. Reduce uses a slightly different syntax than what we're used to seeing. While there are some new things we haven't seen before, there are familiar elements, like a callback function. Reduce accepts a callback function that has two require parameters: accumulator and current value. Optionally, the callback function accepts index and array. We've seen these used previously as well. The final thing the array method accepts, which is also optional, is the initial value. Let's break these down a little bit further. Starting with the required accumulator,
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=94)** you'll often see this as ACC but it can be named anything, total, sum, whatever makes sense for you and is relevant for the context that you're working in. This is the value that is going to be returned by the array method. So you'll want to set this to a new variable, much like we've done with filter and map and other array methods that we've used where a value is returned. The next is the current value which we've seen in just about every array method thus far. It too can be named whatever you'd like and represents the value currently being iterated over. Index and array are used in the same way as we've seen in other array methods and are optional here as well. The last parameter you can pass to reduce is initial value. The initial value is the value to be used as the initial accumulator. This is an optional parameter, so if no initial value is provided the first element in the array will be used. Let's go back to our example and apply the knowledge that we just learned. First, we will need to create a new variable that we will call total sales. Then we will take our initial array sales and apply the array method reduce. We will call the accumulating value total, and the current value amount. We want to take the total or the accumulator and add each value to that amount. For this particular example, we can start with the first item in the array, so we don't need to include an initial value. We're only concerned about the value being returned and we can implicitly return
>
> **[3:07](https://www.linkedin.com/learning/javascript-arrays/single-values-with-reduce?u=76281980&t=187)** the accumulating total plus amount. This gives us a total sales of 24.25. Now that we have the hang of how reduce works, let's go to the code and try another example. Here we have an array of bills. We want to determine what the total of all of our bills will be using the array method, reduce. The first thing that we'll want to do is create a new variable that we will call total bills. Then we'll take our existing array of bills and apply reduce. The first thing that we'll want to pass to reduce is the accumulator. And for this particular example I'm going to call the accumulator total. I'm going to call the current value here bill, all right? And then we're going to implicitly return this. And since we're trying to get a total of all of our bills, we'll need to return the total plus each bill. So we'll say total plus bill. Here we want to use the first value in our array as the the initial accumulator, so we don't need to pass an initial value here. So if we log this out, total bills, and then I go down here and run this, we will see that our total bills are 1,358.

> [!info]- Semantic Content
>
> **Env Vars:** acc (1)
> **Versions:** 24.25 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Flat + map = flatMap](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=0)** - [Instructor] The flatmap array method returns a new array by applying a callback function to each item of the array and then flattening it to one level. To put it in terms that you're familiar with, it first applies the array method map and then flat. The array method flatmap and calling map and then the array method flat on your array will return the same result. Just remember it's map then flat, despite the name of the array method. To be honest, I haven't yet encountered an opportunity to use flatmap in my code. But I still think it's worth learning should an opportunity arise. The syntax is one that we're very familiar with at this point, and it is identical to that of the array method map. The callback function accepts current value, index, and array. The current value is the only required parameter. Additionally, flatmap also accepts this ARG but as we've done with other array methods we're just going to focus on the required parameter, which is current value. Let's go back to our initial example and apply a flatmap. Here we have an array of allowance values and we want to double the current value and return the new values and they flatten single level array. I've placed these single allowance values in their own array for demonstration purposes. we start with a new variable that we will call double allowance and set that equal to our existing allowance array with flatmap applied. In this example, we will call our current value, value
>
> **[1:34](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=94)** and implicitly return the value times two. What you might notice that is slightly different here instead of a regular map is that we are wrapping the implicitly returned value in square brackets. Now we have a single level array that contains the doubled values from our original array. Let's try another example in the code. Here we have an array of words that we want to use to create a [[Microsoft Word|word]] jumble. We want to take this array and split it into a new flat array of individual letters. So first we want to create a new variable that we'll call split words. And remember, as we have learned with several other array methods this one returns a new array just like map, just like filter. And so the first thing that we'll need to do in those situations is to create this new variable to house our new array. So we have our new variable split words and then we're going to take our existing array word jumble and apply flatmap. For this particular example we only need to use current value. And in this situation I'm going to call the current value word, but remember you can call this whatever you'd like. Then we will just need to implicitly return here as we've done several other times with other array methods that operates similarly. And I gave you a hint up above that you'll need to use the string methods split. So in this case, we'll take word dot split
>
> **[3:07](https://www.linkedin.com/learning/javascript-arrays/3144066?u=76281980&t=187)** and you'll need to pass open quotes with no space. Then if we logged us out, We will see that we have a new array that has our word jumble broken up into individual letters in a single flat array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5)
> **Analogies:** just like (2)
> **Prerequisites:** you'll need (2)
> **Env Vars:** arg (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Advanced methods 1](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=0)** - [Narrator] In this challenge, we've been given an array of applicants. Each item in this array is an object with a name and an age. And in order to find our solution, we're looking to return an array that has filtered only those applicants who are 18 years or older. So for this particular challenge, we're going to use the array method filter, and filter is actually one of my favorite array methods, as strange as it may sound, but I think it's really powerful and it's really been helpful for me. So the first thing I'm going to do is just write my return statement. We don't need to, you could set a new variable and create your new array that way. I just prefer for simplicity sake to just go ahead and return what we will transform here. So we'll start with our applicants, our existing array. And remember, when we apply filter, it's going to return a new array that fits the criteria that we provide. So we'll say applicants filter, and then I'm just going to call this app the peram that represents each object in the array. We're going to implicitly return, and then we're looking specifically at age. So we want to say app.age, and it's important. The instructions said 18 and over.
>
> **[1:35](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-1?u=76281980&t=95)** Make sure you don't find yourself in this trap here where you've wrote App.Age is greater than 18 because we want to make sure that we're also encompassing ones that are 18 as well. So you would have greater than or equal to 18. That would be your criteria, and that should be all we need to return a new array that just has those applicants that are 18 years or older. So let's go ahead and return that, let's test it. And yes, we're exactly right. You can see that this array contains three items and each of them are 18 years or older. So great work on that one.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Advanced methods 2](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=5)** - [Instructor] For this challenge, we've been given an array of sales. And we have three sales in here, and we want to know, what are our total sales? If we added each of these up, what would we get? For this challenge, we're actually going to use an array method called reduce. I mentioned filter was one of my favorites. Reduce is also one of my favorites. But I will say, I use it all the time, and I feel like I often have to reference documentation to make sure that I set it up correctly. So if you find yourself in the same boat, don't worry about it. I think it happens to a lot of folks. So no big deal. The fact is, you knew to reach for it, and that's the important part. So the first thing that I'm going to do, very similar to what we've done before, reduce is going to return a new value. And that's going to be dependent on what we call the accumulator. And we'll get into that here in a second. So I'm going to return sales, our array that exists, and reduce, and I'm just going to go ahead and set that up to begin with. And so the first thing that we're going to pass is the accumulator. And effectively what this is, with reduce, you're looping through and you're effectively accumulating values in whatever capacity that is. So for us in this particular challenge, we're adding up sales. So that's going to be what we're accumulating. And so what I'll go ahead and do here at the very end
>
> **[1:41](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=101)** is I'm going to go ahead and set that baseline value, which is 0. So sometimes with reduce, you will be accumulating a new array, perhaps an object. And if you're starting from scratch, so let's say you want to start with an empty array, that's what you would add here at the very end. So you have your callback function with your accumulator and the current value that's coming through. So that would be here. Which sometimes people put current. It really doesn't matter, these two, what you call them, this is just what they are. So I usually say acc for the accumulator. You could call it something different. Sometimes people put current or cv, or you could say, in this case, the product. So whatever product we're looping over. Those don't have to be called anything specific. It's just important to know what they're doing. I'm going to go ahead and change this back to 0. So that's our baseline, that's what we're starting with. And I will then go back here to structuring my callback function. And, for this one, I can implicitly return. You could also remember, structure it like this. But I'm just going to keep it for brevity, and it's a good practice to get into. So we're going to explicitly return, and we want to take the acc, so the value that we're accumulating, and add whatever our product.sales for the current item being iterated, we want to add that to our acc.
>
> **[3:15](https://www.linkedin.com/learning/javascript-arrays/solution-advanced-methods-2?u=76281980&t=195)** So think about it like this. We're looping through, the first value is CoolShirt, and the sales is 200. So we're going to take the acc, which to start at 0, and say 0 plus 200. So 200. We loop through again. Now this value is 200, and we take 200 plus whatever the next value is, which is 500. So hopefully that makes sense. And reduce is one of those, you can use it in so many different ways. It has a lot of power, and it's one I think you should definitely get familiar with. So let's go ahead and test our solution and make sure that it's correct. And we go ahead and run the code. And we are in fact correct, and our code returned a value of $850, which is how much of sales that we've made so far. So great work on this. You did a really great job completing these challenges.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Analogies:** similar to (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-arrays/next-steps?u=76281980&t=0)** - [Jamie] Thank you so much for joining me for this course on [[JavaScript]] array methods. I hope this has reinforced your understanding of array methods, and how you can incorporate them into your code more often. I strongly encourage you to keep coding. Keep working on your JavaScript. If you're learning on your own, the best way to learn is to build something. If you're working as a developer or software engineer, there are ways to incorporate these array methods into your current projects. Check out other [[LinkedIn]] Learning courses on JavaScript, as well as JavaScript frameworks, like [[Angular]], [[React.js|React]], and [[Vue.js|Vue]]. I hope that you found this course to be valuable. Please feel free to connect with me, here on LinkedIn, or you can visit my blog, at [jamiepittman.com](https://jamiepittman.com). Keep up the great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[LinkedIn]] (2), [[Angular]] (1), [[React.js|React]] (1), [[Vue.js|Vue]] (1)
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