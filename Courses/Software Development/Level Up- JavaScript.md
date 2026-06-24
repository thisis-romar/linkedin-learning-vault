---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: level-up-javascript
url: "https://www.linkedin.com/learning/level-up-javascript"
duration_minutes: 63
duration: 1h 3m
level: Intermediate
updated: 4/27/2023
learners: 24157
skills:
  - JavaScript
exercise_files: true
github: "https://github.com/LinkedInLearning/level-up-javascript-4358091/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFdlZNbwSB6xA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682445111543?e=2147483647&amp;v=beta&amp;t=Ta9Zz_EQt1Z5QWgAuI-g7jJrb7xfBANxTHXT-qGQkQU"
linkedin_topic: Software Development
learning_paths:
  - '[Improve Your JavaScript Language Skills](../../Paths/Software%20Development/Learning%20Paths/Improve%20Your%20JavaScript%20Language%20Skills.md)'
prev_courses:
  - '[JavaScript- Async](JavaScript-%20Async.md)'
next_courses:
  - '[JavaScript- Recursion](JavaScript-%20Recursion.md)'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":3,"total":8,"prev":"JavaScript- Async","next":"JavaScript- Recursion"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Level%20Up-%20JavaScript.md)

![Level Up: JavaScript](https://media.licdn.com/dms/image/v2/D560DAQFdlZNbwSB6xA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682445111543?e=2147483647&amp;v=beta&amp;t=Ta9Zz_EQt1Z5QWgAuI-g7jJrb7xfBANxTHXT-qGQkQU)

# Level Up: JavaScript

> Want to put your JavaScript skills to the test? Join instructor Emma Bostian as she serves up over a dozen JavaScript tasks and walks through the solutions for each. Emma frames each challenge using real-world examples, like setting up a ticking clock in a document, filtering vegetarian dinner options from a menu, and calculating the bill from a trip to a coffee shop. Each challenge is self-contai

> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-javascript) | 1h 3m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Put your JavaScript skills to the test](#put-your-javascript-skills-to-the-test)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Challenges**](#1-challenges) (15 videos)
  - [Available books](#available-books)
  - [Movie object](#movie-object)
  - [Vegetarian dinner](#vegetarian-dinner)
  - [Technical books](#technical-books)
  - [Private object](#private-object)
  - [Ticking time](#ticking-time)
  - [Classroom attendance](#classroom-attendance)
  - [Dynamic colors](#dynamic-colors)
  - [Coffee calculations](#coffee-calculations)
  - [Food truck](#food-truck)
  - [Train generator](#train-generator)
  - [String permutation](#string-permutation)
  - [Five friends](#five-friends)
  - [URLify](#urlify)
  - [Password strength](#password-strength)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Put your JavaScript skills to the test](https://www.linkedin.com/learning/level-up-javascript/put-your-javascript-skills-to-the-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/put-your-javascript-skills-to-the-test?u=76281980&t=0)** (tinny upbeat music) (text shinging) (pixels chiming)
>
> **[0:06](https://www.linkedin.com/learning/level-up-javascript/put-your-javascript-skills-to-the-test?u=76281980&t=6)** - Whether you're new to [JavaScript](../../Skills/Software%20Development/JavaScript.md) or an experienced developer, it's really important to sharpen your skills so you can stay up to date on what's going on in the industry. I'm Emma Bostian and these are a series of JavaScript challenges. We'll start with some foundational concepts and as we progress, move into more intermediate and advanced topics. Most solutions are less than two dozen lines of code. Most videos can be watched on their own and don't require you to have completed the previous challenges. Each challenge can be solved using native JavaScript functions and [Data Structures](../../Skills/Software%20Development/Data%20Structures.md). So good luck, and I hope you enjoy these JavaScript challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Speakers:** - whether (1)
> **Non-Speech:** (tinny upbeat music) (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] In this video, I'll show you how to use [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is an instant cloud-based development environment that uses a container to provide you with common languages, tools, and utilities for development. Codespaces uses the power and familiarity of Visual Studio Code to get you up and running in no time. This course was developed using GitHub Codespaces. So you have everything you need to get started without having to worry about installing plug-ins or build tools. To follow along with the course, you can create a new GitHub codespace using the open link found in the related to this course section on the course overview page. If you're already logged into GitHub, you'll be directed to a getting started with Codespaces page. If you're not logged into GitHub or don't have an account yet, you'll be prompted to log in or create an account before using the codespace. Once on the getting started with Codespaces page, click on the green create codespace on main button. It can take a few minutes to create and open your codespace, so just hang tight until it's finished loading. You can also create a codespace from the main repository overview. Click the green code dropdown button, click the Codespaces tab, and there you have the option to create a new codespace on main or open a previously created codespace. Once your codespace has been loaded, you'll be in the code editor view. If you've worked with Visual Studio Code before,
>
> **[1:36](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=96)** this should look quite similar. Codespaces is a special version of VS Code that runs on GitHub servers. If you accidentally close your browser containing your codespace environment, you can reopen the codespace from the GitHub repo landing page. All codespace environments are saved on a virtual machine, so you don't have to worry about losing your progress. This course was created on one branch, which means you don't need to worry about switching to a new branch or creating a new branch for each chapter. We'll primarily be working with the file explorer tab. You can check the other tabs out on the left hand sidebar to search, commit files to GitHub, and view plugins, and more. In the file explorer, we can see we have many folders. Each chapter that uses a codespace corresponds to a file in the start folder. If we open one of these files, you can see we have everything we need to get started. Just open the file from the start folder that corresponds to the video you're currently watching. You'll notice for this course we have a mixture of [HTML](../../Skills/Web%20Development/HTML.md) and [JavaScript](../../Skills/Software%20Development/JavaScript.md) files. Let's first learn how to work with the HTML files. We'll use the live server plugin to run our HTML files in the browser and receive realtime updates. So every time you save the HTML file, the browser will reload with your changes. Since the live server plugin is already installed, you can right click on any HTML file and select open with live server.
>
> **[3:13](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=193)** After a few moments, a new browser tab open. When I make a change to the HTML file and save it, we can see the change is now automatically reflected in our live server tab.
>
> **[3:33](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=213)** You'll also notice that occasionally I'll type a tag element name like h1, and hit the tab key on my keyboard. When I hit the tab key, the HTML element will auto-create with the required attributes. This is a great way to quickly write nested HTML markup without having to worry about making a syntax mistake. We can use this HTML shorthand because of a tool called Emmet. This is already integrated with Codespaces. Emmet is a really robust tool and can save a ton of time. For example, if I wanted to create an unordered list with three list elements, each containing a link, I would write the Emmett shorthand like this and hit tab, then all of my elements have been created for me. Don't worry about this for now. But if you see me using this trick, that's what's going on. You may also want to open your browser console to view the DOM in real time. You can do that by right clicking the page and selecting inspect. If the exercise uses a JavaScript file, we can run it in the terminal. To open the terminal, you can select view terminal from the Codespace menu. Once in the terminal, you can change directory into the start folder with the cd command followed by the folder name, start. Now, if I write a console statement in the JavaScript file, we can test if it's running correctly.
>
> **[5:13](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=313)** We'll use the node command to run this file. Write node followed by the file name. We don't need to type the entire file name. We can type the first few characters, and then hit the tab key to auto complete, then hit enter. You'll see our hello string is being logged to the console.
>
> **[5:36](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=336)** Back in the file explorer, you can see we have one more important folder. The end folder contains all of the code challenges in a complete state. I recommend not looking at these files until you've attempted to challenge yourself. If you want to create your own copy of this repository, you can fork it. This saves a complete copy of the course repo at this point in time to your own personal GitHub account. Click the fork button in the top right of the repository and give it a name and description, then click create fork. Forking the repo will allow you to save your changes, even if you delete your codespace. You can create a new codespace from your forked repository as well. The benefit of forking the repository before creating a codespace is that you can push your own changes to your forked copy. So if I want to make a change and save it to the repository, I can edit the file and save it. Once I've saved the file, you can see that there is a 1 added to the source control panel icon. This tells us that we have one changed file. Now I can add and commit the file to the staging area. Then I can click to push the main branch of my forked repository. Once pushed, you can see your changes reflected in your forked repository on GitHub. If you create a codespace on the main course repository and try to push changes, don't worry. Codespaces will first ask you if you want to create a fork
>
> **[7:11](https://www.linkedin.com/learning/level-up-javascript/using-github-codespaces-with-this-course?u=76281980&t=431)** before letting you push your changes. Now we're ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (10), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (10), [HTML](../../Skills/Web%20Development/HTML.md) (9), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Tools:** github (10), terminal (4), visual studio (2), vs code (1)
> **Env Vars:** html (9), dom (1)
> **CLI Commands:** make (2), node (2), cd (1)
> **UI Navigation:** click on (2), open the (2), dropdown (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** getting started (2)
> **Exercise Files:** github repo (1)


### 1. Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Available books](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=0)** (electronic beeping)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=3)** - Unlike classical programming languages like [Java](../../Skills/Software%20Development/Java.md) or C++, [JavaScript](../../Skills/Software%20Development/JavaScript.md) uses objects within a prototypal inheritance model. In ES2015 or ES6, the class keyword was introduced, but the class keyword is solely syntactical sugar, and does not change JavaScript's prototypal inheritance model. But we can use class declarations as a replacement for functions. In this challenge, you'll be developing an inventory application for a bookstore. You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies. You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return "out of stock." If there are less than 10 copies, the function should return "low stock." Otherwise, the function should return "in stock." You'll also need a function for selling a book. This will take the number of copies sold, and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. Lastly, you'll want a restock function, which takes in a number of copies to restock, and adds it to the total number of copies. If no argument is passed, we can default the restock number to five. You should use JavaScript's class keyword as well as a getter function for the availability method. Pause the video here, develop your solution, and when you're ready, come back, and I'll walk you through my solution. (cheery chiptune music)
>
> **[1:37](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=97)** (electronic beeping) Anything you can write as a class, you can write as a function. So let's start by solving this problem with a function, and we'll refactor it into a class. Our book function will accept four arguments, and set them on the instance of the book. (keyboard clacking)
>
> **[2:15](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=135)** Next, we can declare the getAvailability function on the prototype. If numCopies is zero, we'll return the string "out of stock." If numCopies is less than 10, we'll return the string "low stock." Otherwise, we'll return the string "in stock." (keyboard clacking)
>
> **[2:41](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=161)** We declare this function on the prototype because we don't need to create a new instance of this function each time we make a new object. We can declare it on the prototype, and each book instance can use that prototype's function. We can follow the same structure to declare the sell and restock functions. The sell function takes an argument, numCopiesSold, and subtracts it from the number of available copies. The restock function takes an argument, numCopiesStocked, and adds it to the number of available copies. We can assign a default value to both of these function arguments in the event that the argument isn't passed. (keyboard clacking) Now we can create a new book, and test our restock and sell functions. (keyboard clacking)
>
> **[3:44](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=224)** Let's run this in our console. We can navigate to the start folder with cd start, and then run node, followed by our file name. In this case it's 01_01_available_books.js. You can start typing the file name, and hit the tab key to auto complete. After we run the file, we can see in the terminal we've got "low stock," after restocking we have "in stock," and after selling we have "out of stock." (keyboard clacking) Let's transition this function into a class component. I'll comment out our function component so we can reference it as we create our class component. (scroll wheel whirring) Inside our class, we first define a constructor. We can think of the constructor as a blueprint for our book. Similar to our function, the constructor takes four arguments. (keyboard clacking)
>
> **[5:04](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=304)** Next, let's create our getAvailability method. We can do this directly within the class. (keyboard clacking)
>
> **[5:22](https://www.linkedin.com/learning/level-up-javascript/available-books?u=76281980&t=322)** You'll notice that all of our book-related code now lives inside of the book class. This is called encapsulation. Now we can use a getter function to retrieve the book's availability. This will allow us to write book.availability instead of book.getAvailability. (keyboard clacking) Lastly, we can add our sell and restock functions directly within the class as well. (keyboard clacking) (cheerful beeping) JavaScript's class keyword is becoming more and more prevalent in the world of [Web Development](../../Topics/Web%20Development.md), so understanding how it works and why you would use it over function notation is going to be vital to your career as a JavaScript developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Java](../../Skills/Software%20Development/Java.md) (1), [Web Development](../../Topics/Web%20Development.md) (1)
> **Code Identifiers:** getavailability (3), numcopies (2), numcopiessold (1), numcopiesstocked (1)
> **Non-Speech:** (electronic beeping) (2), (cheery chiptune music) (1), (cheerful beeping) (1)
> **CLI Commands:** make (1), cd (1), node (1)
> **Env Vars:** es2015 (1), es6 (1), isbn (1)
> **File Paths:** 01_01_available_books.js (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)

#### [Movie object](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=0)** (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=3)** - For this [JavaScript](../../Skills/Software%20Development/JavaScript.md) challenge, we're going back to the basics, the prototype chain. Unlike other programming languages, JavaScript uses objects to construct inheritance. (video game sound effect) Each object has a private property which links to another object. This object is known as its prototype. This prototype object has a prototype of its own and this chain continues until an object with a null prototype has been reached. Your task is to create a movie object that takes in five arguments: title, director, genre, release year, and rating. The movie prototype should have a function called get overview, which logs the following overview for each film. Movie, a genre film directed by director was released in release year. It received a rating of rating. You can use either class or function syntax to create your prototype. Once you create your movie object, create a few movies to test it out. So pause the video here, develop your solution, and when you're ready, come back, and I'll walk you through how I solved the challenge. (video game music) I'm first going to create the movie object using function syntax. Let's start by declaring the function keyword followed by movie, with a capital M. We capitalize the first letter to indicate that this function must be called using the new keyword. Next, let's add our five arguments: title, director, genre, release year, and rating. Lastly, we'll use the "this" keyword
>
> **[1:41](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=101)** to assign these arguments to the object instance. This is known as a constructor function and we can think of it like a blueprint for JavaScript objects. Every time I create a new movie, I tell the constructor function, "these are the values I want to assign to this instance of the movie object." Now we're ready to add our get overview function on the prototype. To add a function to the prototype, we use the constructor function name followed by the prototype keyword, and lastly, the name of the function we want to add. We declare the function on the prototype so that each new copy or instance of the movie object doesn't recreate this function. If we have seven movies, we don't need seven copies of the function. We just need one that each instance can reference. Finally, I'll use the template strings to interpolate properties into an overview string. Template strings, or template literals, allow you to combine expressions like a variable value or a process, like multiplication, with plain strings. The expression inside of the dollar sign and curly brackets is evaluated and combined with the plain strings.
>
> **[3:04](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=184)** To test that our constructor function is working, we can create two new movies.
>
> **[3:17](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=197)** If we console log Spider-Man's get overview value and Batman's get overview value, they're using the properties we declared above, even though they're using the same get overview function.
>
> **[3:37](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=217)** If we run our file in the terminal, we'll see that we have console logged Spider-Man the movie with all of its properties, as well as our get overview strings for each of the two films. Instead of using the function keyword, we can use the class keyword. This class keyword is simply syntactical sugar and isn't comparable to [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) languages like [Java](../../Skills/Software%20Development/Java.md).
>
> **[4:10](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=250)** To set our properties, we use a constructor function inside of our movie class. This constructor function takes the five arguments and similar to the constructor functions syntax in the first solution, we assign the values to the object instance using the "this" keyword.
>
> **[4:40](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=280)** To add our get overview function to our movie class, we don't need to use the prototype keyword. We can simply include a get overview function inside of the movie class. I'll copy our template literal string from the first function to save a little bit of time.
>
> **[5:00](https://www.linkedin.com/learning/level-up-javascript/movie-object?u=76281980&t=300)** If we run our file in the terminal again, we can see that everything is working as expected. While using constructor functions is just as valid as using class notation, class notation encapsulates all of the functionality in one place, so it's a little bit simpler and easier to read. And class notation is becoming more prevalent, so it's really important to have a strong understanding of how it works so that you can ace your technical interviews and improve your JavaScript skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Exercise Files:** template (4)
> **Non-Speech:** (video game music) (2), (video game sound effect) (1)
> **Tools:** terminal (2)
> **Definitions:** known as (2)
> **Analogies:** similar to (1)
> **Speakers:** - for (1)

#### [Vegetarian dinner](https://www.linkedin.com/learning/level-up-javascript/vegetarian-dinner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/vegetarian-dinner?u=76281980&t=0)** (electronic music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/vegetarian-dinner?u=76281980&t=3)** - Arrays come with many built-in loops and functions that allow us to manipulate data. One of those functions is the array.filter method. The filter method takes a callback function that gets run once for every item in the array and it returns a new array of items that pass a certain criteria. (electronic music) For example, if you have an array of animals and you want to create a new array of only mammals, you can use the array dot filter method on the animals array to only include animals in the mammal class. In this challenge, you're planning the menu for an Italian dinner. Some of your guests are vegetarian and you need to create a list of vegetarian menu items for them. Given an array of Italian dishes, create an unordered list of all vegetarian dinner options. Each menu item is an object containing the dish name and a Boolean variable that indicates whether dish is vegetarian. You should dynamically generate the list items in the DOM from the array of vegetarian items. (electronic music) Pause the video here, develop your solution, and when you're ready, come back and I'll walk you through how I solve the challenge. (electronic music) First, let's use document.queryselector to get a handle on our unordered list element which will contain our vegetarian items. (keyboard clacking)
>
> **[1:42](https://www.linkedin.com/learning/level-up-javascript/vegetarian-dinner?u=76281980&t=102)** Now let's use the array.filter method to create a new array of vegetarian dinner options. (keyboard clacking) Now that we have our array, we can dynamically generate list items for each. We'll use the array.foreach loop to create a list item for each vegetarian menu item. (keyboard clacking) Next, we'll use document.createElement to create our list item, and then we can set the text content of that list item to the name of our current element. (keyboard clacking) Finally, we can append our new list item to our unordered list. (keyboard clacking) Now let's call our vegetarian menu function and pass it our menu array that we've defined on line 16. (keyboard clacking) If we head over to the browser, we'll see that we have a list containing our two vegetarian dishes. (electronic music) The array.filter method is just one method we can use on arrays to manipulate data. And arrays are one of the most common data types in [JavaScript](../../Skills/Software%20Development/JavaScript.md), so it's important to have a strong understanding of these different functions and methods that allow us to manipulate data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Non-Speech:** (electronic music) (5)
> **Code Identifiers:** createelement (1)
> **Env Vars:** dom (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - arrays (1)

#### [Technical books](https://www.linkedin.com/learning/level-up-javascript/technical-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/technical-books?u=76281980&t=0)** (playful music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/technical-books?u=76281980&t=3)** - In a previous challenge, we created a book class that accepts a title, author, ISBN, and number of copies, and provides methods for selling and restocking. In this challenge, we'll use inheritance to create a variation on our book class. Your goal is to create a technical book class that inherits from the book class in the previous challenge. This class will also take a title, author, ISBN, and number of copies, but will take a fifth argument, an edition. The technical book class will also provide a getEdition function, which returns the following string. The current version of this book is followed by the book's edition. You should use the template literal for this phrase. So pause the video, develop your solution, and when you're ready, come back and I'll walk you through how I solved the challenge. (playful music) Let's start by creating our technical book class. We want it to inherit from our book class, so we can use the "extends" keyword. Just like our book class, we'll need a constructor that accepts our five properties. Title, author, ISBN, numCopies, and edition. The book class needs the title, author, ISBN, and numCopies arguments so we can pass them to the book class using the keyword "super." We must call super before setting any this values on the technical book class as it calls the parent constructor with our arguments. Then we can set this.edition to edition. Lastly, let's add our getEdition function.
>
> **[1:42](https://www.linkedin.com/learning/level-up-javascript/technical-books?u=76281980&t=102)** We'll use a template literal, also known as a template string, to create this return value. Anything inside of the dollar sign, curly brackets will be evaluated and turned into a string so it's much easier than using string concatenation. Let's create a new technical book and console.log it's availability and edition.
>
> **[2:09](https://www.linkedin.com/learning/level-up-javascript/technical-books?u=76281980&t=129)** If we run our file in the terminal, we can see that our technical book is being console logged with the correct data.
>
> **[2:23](https://www.linkedin.com/learning/level-up-javascript/technical-books?u=76281980&t=143)** Inheritance is one of the foundational concepts of programming, so understanding [JavaScript](../../Skills/Software%20Development/JavaScript.md)'s prototypal inheritance is imperative to your understanding of the programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** getedition (2), numcopies (2)
> **Env Vars:** isbn (4)
> **Exercise Files:** template (3)
> **Non-Speech:** (playful music) (2)
> **Tools:** terminal (1)
> **Definitions:** known as (1)
> **Analogies:** just like (1)

#### [Private object](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980&t=0)** (lively game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980&t=3)** - [Instructor] [JavaScript](../../Skills/Software%20Development/JavaScript.md) symbols were a new primitive data type introduced with ES6. Every value returned from a symbol is unique, meaning that we can use them as identifiers for object properties. In this challenge, you will create a user object that has three properties: username, password, and age. Using JavaScript symbols, ensure that username and password are private fields on the user character. This means they shouldn't be accessible by calling user.username or user.password. Pause a video here, develop your solution and when you're ready, come back and I'll walk you through how I solve the challenge. (lively music) Let's first create two symbols, one for username and one for password.
>
> **[0:58](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980&t=58)** Now let's create our user object. I'll enter some fake information for us to test out.
>
> **[1:15](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980&t=75)** If we console.log user.username, and user.password, we should see the values, emmabostian and 1234566 being logged to the console.
>
> **[1:34](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980&t=94)** In order to prevent this, we can use our previously defined symbols as the object keys. Now, if we console.log user.username and user.password, we should receive undefined.
>
> **[1:53](https://www.linkedin.com/learning/level-up-javascript/private-object?u=76281980&t=113)** Symbols are extremely useful for creating private variables, and although you probably won't see them during your day-to-day programming, understanding what they are and what they're used for will really help your development skills. I don't personally use symbols every day but they definitely come in handy for technical interviews.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Non-Speech:** (lively game music) (1), (lively music) (1), (beeping music) (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### [Ticking time](https://www.linkedin.com/learning/level-up-javascript/ticking-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/ticking-time?u=76281980&t=0)** (electronic beeps)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/ticking-time?u=76281980&t=3)** - Callback functions are functions that get passed to other functions as arguments and get called at a later point in time. Set timeout is one [JavaScript](../../Skills/Software%20Development/JavaScript.md) function which requires a callback function. We pass, set, timeout a function, and after a certain amount of time, our function gets executed. (electronic beeps) In this challenge, you'll create a ticking clock in the document body. The index.[HTML](../../Skills/Web%20Development/HTML.md) file contains a div with an ID of clock. Using callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds. Pause the video here, develop your solution, and when you're ready, come back and I'll walk you through how I solve the challenge. (video game music) Here we can see that we have a div with an ID of clock. First, let's create our clock function. We can grab the clock DOM node using document.querySelector.
>
> **[1:14](https://www.linkedin.com/learning/level-up-javascript/ticking-time?u=76281980&t=74)** To get the clock to update every second, we can use set interval and pass 1,000 milliseconds as the second argument. The first argument will be our callback function. This callback function will create a new date and turn it into a locale time string. Then we can set the clock DOM nodes text content to the new value. Now, let's call our clock function to see it appear in the UI. If we head to our browser, we can see our clock displays the current hour, minutes, and seconds. (electronic beeps) Whether you're working with set timeout or using callback functions after requesting data asynchronously, understanding how they work is extremely important. I struggle to understand callback functions and asynchronous programming when I was beginning my JavaScript programming journey and to be honest, I still struggle with them to this day. But the more you practice working with asynchronous data and callback functions, the more confident you'll become.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** dom (3), html (1)
> **Non-Speech:** (electronic beeps) (3), (video game music) (1)
> **File Paths:** index.html (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** queryselector (1)
> **Speakers:** - callback (1)

#### [Classroom attendance](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980&t=0)** (bright music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980&t=3)** - Destructuring is an expression which allows us to extract values from objects and arrays into variables. To destructure values from arrays we use square brackets and to destructure values from objects, we use curly brackets. The first variable declared in the brackets will receive the first array item as its value. The second variable will receive the second array item as its value and so on. You can use the spread operator, or three dots, to replace the remaining array or object values into one variable. For this challenge, you'll use array and object destructuring to return a list of students. Create a function called getStudents, which takes one argument, classroom. Classroom will contain a Boolean value, called hasTeachingAssistant, and class list which is an array of people in the classroom. The first value in class list will be the teacher. If has teaching assistant is true, the second value in the class list is the teaching assistant and the remaining values in the class list are the students. If has teaching assistant is false, the second value through the end of the class list are the students. Your job is to return a list of students. You must use object and array destructuring. Pause the video here, develop your solution, and whenever you're ready, come back, and I'll walk you through how I solve the challenge. (bright music) Let's first define our getStudents function.
>
> **[1:35](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980&t=95)** We'll destructure the hasTeachingAssistant and class list values from the classroom object.
>
> **[1:46](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980&t=106)** Next, let's declare three variables; teacher, teaching assistant, and students. We want to declare them outside of our if statement so we can return the students array. If there is a teaching assistant, we want to destructure the first value into the teacher variable and the second value into the teaching assistant variable. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the values will be spread into the students array.
>
> **[2:16](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980&t=136)** Otherwise, we will spread the first value into the teacher variable and the rest of the values into the student's array. Finally, we can return the students array. Now let's call our getStudents function with the classroom object and console log the results.
>
> **[2:51](https://www.linkedin.com/learning/level-up-javascript/classroom-attendance?u=76281980&t=171)** If we run our file in the terminal, we can see our students being logged to the console. Destructuring syntax is becoming more and more popular, but I definitely remember the first time I encountered destructuring. I was really confused by it. But the more you practice destructuring, the more it becomes your go-to way to abstract values from objects and arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Code Identifiers:** getstudents (3), hasteachingassistant (2)
> **Definitions:** is an  (2), is a  (1)
> **Non-Speech:** (bright music) (2)
> **Tools:** terminal (1)
> **Speakers:** - destructuring (1)

#### [Dynamic colors](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=0)** (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=3)** - Closures are functions that close over their lexical environment or their scope. This allows us to access an outer function scope from an inner function. We use closures in many different places. For example, if we're filtering an array of items or if we're creating a new timeout. In this challenge we'll use closures to create three buttons. Each button will represent a different color and we'll change the background color of the document body to the color value. Using a closure, create a function called changeColor that accepts a color value. When the button is clicked, the closure should be invoked and the body background color should be updated. Pause the video here and develop your solution, and when you're ready, come back and I'll walk you through how I solve the challenge. (video game music) Here we have three buttons. Each button has an ID with the name of a color. Let's walk through the three different ways that we can update the browser's background color. As a first attempt, we could create three separate functions which each set the body's background color to a specific hexadecimal value. Since the three functions complete the same task with different values, I'll copy and paste the first function and pass in the appropriate color values for the pink and green buttons.
>
> **[1:28](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=88)** Now let's add three eventListeners that will change the body color to the color of the button when the button is clicked.
>
> **[1:41](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=101)** If we head to the browser, we can see that clicking each button updates the body's background color. This solution works but isn't extremely scalable. Plus, we end up with three copies of the same function doing the same task with different values. Instead, we could have just one function that accepts a string value and updates the body's background color. This requires that we pass the hexadecimal string as an argument each time the button is clicked. So let's refactor our current solution to use one function that accepts a hexadecimal string as an argument. Now let's update the eventListeners to use our new changeColor function. Since we need to include the hex string as the argument for our callback function, we'll need to pass an arrow function that calls our changeColor function. Again, I'll copy and paste this arrow function into the pink and green eventListeners.
>
> **[2:55](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=175)** We can use a closure to explicitly set the body's background color to a particular value. We'll still have one changeColor function and it still accepts the color value. But if we return a function we create a closure over our color value. We can now create three variables which will be invoked on button click. We can pass in their respective hexadecimal values. I'm going to copy and paste the same line for the pink and green buttons.
>
> **[3:30](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=210)** We can now use these three new variables in our eventListeners.
>
> **[3:45](https://www.linkedin.com/learning/level-up-javascript/dynamic-colors?u=76281980&t=225)** If we head back to the browser, we can see that clicking each button still updates the body's background. Color closures are one of those things that should be used intentionally because they can create unnecessary complexity. Often we can use a more straightforward approach to solve the same problem. Closures are one of those things that continues to confuse me, so if you're getting a little discouraged, just be patient. It takes a little time, but once you start to practice a little bit more, closures will become second nature.

> [!info]- Semantic Content
>
> **Code Identifiers:** changecolor (4), eventlisteners (4)
> **Non-Speech:** (video game music) (2)
> **Analogies:** for example (1)
> **Speakers:** - closures (1)

#### [Coffee calculations](https://www.linkedin.com/learning/level-up-javascript/coffee-calculations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/coffee-calculations?u=76281980&t=0)** - The array reduce method runs a function once for every item in an array and returns a single value. The reduce function is a function that you provide that takes an accumulator value and a current value. The accumulator value is the combined total of all previous callback function runs and the current volume is the current value in the array that we're executing this function on. In this challenge, you'll be using the array reduce function to calculate the total bill from a trip to the coffee shop with your friends. Each person has ordered some number of coffees and you offer to pay the entire bill. Given an array of integers where each value is greater than zero, calculate the total price of all coffees. Each coffee costs $1.25. You should return your answer in the following format. The total bill is followed by the total. You should use template literals for your return value. Template literals, also known as template strings, allow you to combine [JavaScript](../../Skills/Software%20Development/JavaScript.md) expressions and strings into one. Where you previously had to use the plus scientific concatenate strings with values, you can now use back ticks. And where you need to evaluate a variable or expression, you can surround it with a dollar sign and curly brackets. Pause the video here, develop your solution and when you're ready, come back and I'll walk you through how I solve the challenge. Let's start by defining our function. This function takes one argument,
>
> **[1:33](https://www.linkedin.com/learning/level-up-javascript/coffee-calculations?u=76281980&t=93)** the array of coffee quantities. Since we'll be using template literals for a return value, I'll declare a variable which will hold the result of our array reduce function Our array reduce function takes two arguments, the accumulator or the current value from all of the previous executions, which we'll call totalCoffees, and the current array value, which will call numCoffees. It will return total coffees plus the current number of coffees. Lastly, we'll return this value using a template literal. Remember that we have to multiply our total number of coffees by 1.25 to get the total price.
>
> **[2:22](https://www.linkedin.com/learning/level-up-javascript/coffee-calculations?u=76281980&t=142)** Now, let's call our coffee date function with an array containing different numbers of coffees ordered by your friends. Let's console log this value and head over to our console to see what we get.
>
> **[2:44](https://www.linkedin.com/learning/level-up-javascript/coffee-calculations?u=76281980&t=164)** We can see here that our total bill comes to $23.75. The array reduce method was really difficult for me to conceptualize and it can be a little tricky to recognize a good use case for it, but it can actually be a little bit more performant in certain situations. For example, instead of running an array filter method and then mapping over that new array, we can actually just use the array reduce method to only pass through the array once. The array reduce method is super powerful. So I highly suggest taking the time to learn a little bit more about when you should use it and how to use it correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Exercise Files:** template (5)
> **Versions:** 1.25 (2), 23.75 (1)
> **Code Identifiers:** totalcoffees (1), numcoffees (1)
> **Definitions:** is a  (1), known as (1)
> **Non-Speech:** (upbeat music) (2)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [Food truck](https://www.linkedin.com/learning/level-up-javascript/food-truck?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/food-truck?u=76281980&t=3)** - Sets are a primitive job script type that allow us to create a unique set of items. We can use sets when we have a data set that contains repeating values and we want to remove duplicate instances. You are in charge of building a website for a food truck festival. Each vendor has a menu and some vendors might be serving the same item. Given an array of food truck menus where each menu is an array, return one master menu, which contains all food items that will be served at the festival without duplicates. We'll take this unique menu and use dom manipulation to create an unordered list containing these unique menu items. You should have an unordered list with an idea of combined menu in your [HTML](../../Skills/Web%20Development/HTML.md) that you can use to append the list node children too. Pause the video here, develop your solution, and when you come back, I'll walk you through how I solved the challenge. (video game music) First, let's define our food truck festival function. It accepts one argument, the array of menus. We can use the array flat method to flatten our array of menus into one long array. Let's now create a set. For each item in flat menu, we want to add it to our set.
>
> **[1:32](https://www.linkedin.com/learning/level-up-javascript/food-truck?u=76281980&t=92)** Now let's dynamically generate our menu list items. We can see here that we have an unordered list element with an ID of combined menu. We can grab this node using query selector.
>
> **[1:53](https://www.linkedin.com/learning/level-up-javascript/food-truck?u=76281980&t=113)** Finally, we'll use a four of loop to iterate over each item in our set, dynamically generate a list item for it, and append it to the combined menu list.
>
> **[2:17](https://www.linkedin.com/learning/level-up-javascript/food-truck?u=76281980&t=137)** Finally, let's call our food truck festival function with a menu.
>
> **[2:42](https://www.linkedin.com/learning/level-up-javascript/food-truck?u=76281980&t=162)** If we head over to our browser, we will see our combined menu being displayed. Notice that burgers is only here once. The next time you need to create a set of unique list items, try out sets instead of looping through every item in the array. Sets are often also a really great solution during your technical interview, so I highly recommend learning them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** node (2)
> **Env Vars:** html (1)
> **Definitions:** is an  (1)
> **Speakers:** - sets (1)
> **Non-Speech:** (video game music) (1)

#### [Train generator](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980&t=0)** (gaming music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980&t=3)** - Generators are functions that can be exited and at a later point in time reentered while maintaining their context. Generator functions used to be really great in solving problems with asynchronous programming, but recently they've kind of been replaced by [JavaScript](../../Skills/Software%20Development/JavaScript.md)'qs async await. We declare generator functions with an asterisk following the function keyword. Calling a generator function doesn't immediately execute the body of the function. Instead, an iterator object for the function is returned. We must call the iterator's next method to hit the next yield value. The next method returns an object with a value property that contains the yielded value and a done property, which tells us whether the generator has yielded its last value. In this challenge, you're going to build a generator function that returns the next stop in a list of stops along the Metro North Railroad in New York. Each time a button is clicked, the next stop in the journey should be returned until we reach Grand Central Station in New York City. The train stops are Poughkeepsie, Newburgh, Peekskill, Yonkers, Bronx, and Grand Central. You should use a generator function to yield these values. Console log each stop and once we reach the final stop, Grand Central, console log "We made it!" Once we reach our final stop, the next stop button should be disabled. Pause the video here, develop your solution, and when you come back, I'll walk you through how I solved the challenge. (gaming music) First, let's define our generator function. We do this by placing an asterisk
>
> **[1:38](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980&t=98)** after the function keyword. Then we can yield each of our stops with the yield keyword followed by the stop name.
>
> **[1:50](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980&t=110)** Next, let's instantiate our get stop generator function and assign it to the variable nycTrainLine. Here we have a button with an ID of Next Stop. We can grab the button node with document.querySelector and then add the on click handler. Let's add an event handler for our nextStopButton. (keyboard tapping)
>
> **[2:26](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980&t=146)** We need to get the current stop and we can do this by calling the next function. If we've reached the end of the line, we want to console log, "We made it!" and disable the button. We can disable the button by setting the disabled attribute on the button node to true. (keyboard tapping)
>
> **[3:00](https://www.linkedin.com/learning/level-up-javascript/train-generator?u=76281980&t=180)** If we haven't reached the end of the line, we can console log the current stop. If we head over to the browser console, we will see our train stops being logged as we click, and you'll see that after we visit Grand Central, we console log, "We made it!" and the next stop button is disabled. You probably won't encounter generators on a day-to-day basis, but it's good to have a general understanding of what they are and when you would use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** nyctrainline (1), queryselector (1), nextstopbutton (1)
> **CLI Commands:** node (2)
> **Non-Speech:** (gaming music) (2)
> **Speakers:** - generators (1)

#### [String permutation](https://www.linkedin.com/learning/level-up-javascript/string-permutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/string-permutation?u=76281980&t=0)** (lively game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/string-permutation?u=76281980&t=3)** - Recursion is when a function calls itself with an argument that gets progressively smaller and smaller until a base case is reached. Once that base case is reached, the previous stack of executions, returns and your solution is calculated. (lively music) Suppose you're playing Scrabble with your best friend and you want to know how many possible combinations of letters you can make with the letters you have. Create a recursive function that takes in a string of letters and calculates the number of possible combinations you can play. Calculating the number of possible combinations of a set of values is known as a factorial. We achieve a factorial solution by starting with the total number of items in the set and multiplying it by each proceeding number of values until we reach one. Pause the video here, develop your solution and when you're ready, come back and I'll walk you through how I solved the challenge. (lively music) Let's first code an iterative solution to illustrate this concept. For every letter in our set of letters, we want to multiply the remaining number of letters with the running total. We can use a for loop to accomplish this. We start at one and until we surpass the... Rephrase. We start at one and until we surpass the total number of letters, multiply the current total with the remaining number of letters.
>
> **[1:36](https://www.linkedin.com/learning/level-up-javascript/string-permutation?u=76281980&t=96)** Let's run this file in the terminal with a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) to see if it works.
>
> **[1:48](https://www.linkedin.com/learning/level-up-javascript/string-permutation?u=76281980&t=108)** Now let's refactor this into a recursive algorithm. I'll comment out our iterative solution so we can reference it as we build our recursive function. We first need a base case. This is the case that tells [JavaScript](../../Skills/Software%20Development/JavaScript.md) when to quit our recursive calls and return all of our previous values. In our case, we want to stop when there is only one letter remaining in the set of letters. If we have more than one letter in our set, we can recursively call our function with one less letter. We can use the string slice method to chop off the first letter in the set. We'll also need to multiply this recursive call with the current number of letters in the set. Once our base case is reached, the recursive calls will bubble back up and we will have our answer. If we run this again, we'll see our recursive function is working as expected. Recursion took me a really long time to understand but it's widely used in technical interviews so it's really important to have an understanding of recursion if you're planning to go through technical interviews. The goal of recursion is to break a complex problem down into smaller sub-problems that can be easily solved but don't forget to have a base case because if you do, you're going to run into a Stack Overflow error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Non-Speech:** (lively music) (2), (lively game music) (1)
> **CLI Commands:** make (1)
> **Documentation:** stack overflow (1)
> **Tools:** terminal (1)
> **Definitions:** known as (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - recursion (1)

#### [Five friends](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=0)** (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=3)** - Functions declared with the async keyword allow us to write asynchronous code in a synchronous manner. And together with the [Fetch](../../Skills/Web%20Development/Fetch.md) API, we can make asynchronous API requests. (electronic tones) In this challenge, you're building a new component for Your Space, a brand new social media application that allows you to find friends. This component displays a user's top five friends. Given some [JSON](../../Skills/Web%20Development/JSON.md) data returned from the random user API, you should dynamically generate image thumbnails for the top five friends. You should use the fetch API to call the random user API. You can use the URL [https://randomuser.me/api/?results=5](https://randomuser.me/api/?results=5)
>
> **[0:46](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=46)** to get data for five users. Your solution should also use async/await. (electronic tones) Pause the video here, develop your solution, and when you're ready, come back, and I'll walk you through how I solve the challenge. (video game music) Let's start by declaring our asynchronous function. We can use either a function expression or a function declaration. A function expression is when we assign an anonymous function to a variable and invoke the variable. Let's refactor our function expression into a function declaration. Both options work using the async keyword. We first want to make a call to the random user's API. We can use the fetch API for this.
>
> **[1:40](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=100)** Let's call our function and console log the value returned from our API request. If we try to console log the value inside of people, we'll see we aren't receiving the user data we expect. We are receiving a promise. This is because we want to wait to do anything else until we've received the data from our API call. This is where the await keyword comes into play. If we add the await keyword before the fetch call, our code will pause until we receive a response from the fetch API. Now, if we console log the value inside of people, we'll see we receive a response object. We have to turn this response into a format that we can use. We'll use the JSON function to transform the response into JSON.
>
> **[2:38](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=158)** Now, if we console log the value inside of data and head to the browser console, you'll notice we get user data.
>
> **[2:51](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=171)** Finally, let's create DOM nodes to display each user's profile picture. In our file here we have a div with an ID of timeline. We can grab this node and dynamically generate children nodes for each user. We'll use the document.createElement function to create images for each user's profile picture and then we'll set its source attribute. Finally, we'll append our image to the timeline.
>
> **[3:25](https://www.linkedin.com/learning/level-up-javascript/five-friends?u=76281980&t=205)** If we head back to the browser, we can see our five friends' profile photos being rendered correctly. (electronic tones) Asynchronous programming and making API requests are two foundational concepts in [JavaScript](../../Skills/Software%20Development/JavaScript.md). I still struggle with them to this day, but the more you practice, the easier they'll get.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** api (11), json (3), url (1), dom (1)
> **CLI Commands:** make (2), find (1), node (1)
> **Analogies:** picture (2)
> **Non-Speech:** (video game music) (2)
> **Code Identifiers:** createelement (1)
> **URLs:** [https://randomuser.me/api/?results=5](https://randomuser.me/api/?results=5) (1)
> **Speakers:** - functions (1)

#### [URLify](https://www.linkedin.com/learning/level-up-javascript/urlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/urlify?u=76281980&t=0)** (rhythmic gaming music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-javascript/urlify?u=76281980&t=4)** - Strings are one of the core data types in [JavaScript](../../Skills/Software%20Development/JavaScript.md) so understanding how to manipulate them is a vital skill for all front end developers. The string data type comes with many utility functions which we can use to find and replace characters. Let's create a function that takes in a blog post title and returns the urlified version. To create a URL friendly version of a blog post title, all punctuation must be removed. All letters must be lowercase and all spaces must be joined by hyphens. You should use a combination of regular expressions and string prototype functions to complete this challenge. Pause the video here, develop your solution, and when you're ready, come back and I'll walk you through how I solve the challenge. (rhythmic gaming music) Let's declare a function called urlify. This function will take one argument, a blog post title. The first thing we'll do is remove the punctuation. There is no remove function on the string prototype so we'll use the replace function. The first argument for the replace function is the set of characters we want to replace, and the second argument is the set of characters we want to replace the first argument with. To define the set of punctuation we want to remove, we can use irregular expression or regexs. To create a regex, you can use literal notation by placing the characters inside two forward slashes or you can use constructor function. We'll use the literal notation.
>
> **[1:38](https://www.linkedin.com/learning/level-up-javascript/urlify?u=76281980&t=98)** We'll also include second argument. a G flag to the regex constructor to indicate that we should apply this regex to the entire string.
>
> **[1:57](https://www.linkedin.com/learning/level-up-javascript/urlify?u=76281980&t=117)** You'll notice we didn't use the /W redux to select all non-[word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) characters. This is because this regex will also remove spaces and we must preserve the individual words so we can replace the spaces with hyphens in a later step. Thus we have to explicitly define all punctuation characters. Now we can use this regex to remove all punctuation from our blog post title. We will use the string replace method to do this. The first argument is our regex and the second argument is the string we will use as a replacement. Since we're removing punctuation, we can leave this argument as an empty string. Next, we'll ensure all characters are lowercase. We can use the string .toLowerCase function to achieve this. We also need to trim the white space from the end of our string so that we don't end up with a hyphen at the front or end of our URL. We can use the string .trim method to do this. Lastly, we want to replace all spaces in the title with hyphens. We can use the string .replaceAll method to do this because we want to replace all spaces in the string and not the first instance. We can test our solution with the strings. "How I got into programming!" And, "I've got a new job."
>
> **[3:38](https://www.linkedin.com/learning/level-up-javascript/urlify?u=76281980&t=218)** When we run our file in the terminal, we can see that our blog post titles have been urlified. String manipulation is extremely common in [Web Development](../../Topics/Web%20Development.md). So learning how to use regular expressions and string utility functions is extremely important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Web Development](../../Topics/Web%20Development.md) (1)
> **Non-Speech:** (rhythmic gaming music) (2), (beeping sounding) (1)
> **Code Identifiers:** tolowercase (1), replaceall (1)
> **Env Vars:** url (2)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - strings (1)

#### [Password strength](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=0)** (electronic chiming)
>
> **[0:03](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=3)** - Regular expressions or regex are sequences of characters that define a pattern in a string. We can use regular expressions to do things like remove certain characters in a string, or check whether a string matches a set of criteria. In this challenge, you'll build a password validator for a signup form which tests whether or not a user's desired password is strong enough. You must use a regular expression in your solution. If the user's password is strong enough, return the string, your password is valid. Otherwise, return the string, your password is invalid. You must also use a ternary operator to return a boolean value. Ternary operators check to see if a certain condition has been met. We follow the expression we want to check with a question mark, and if the condition is truthy, it will execute the code following the question mark. The truthy expression is followed by a colon and if the condition is falsey, it will execute the following code. Here are the criteria which must be met in order for a password to be strong enough. The password must have at least one lower case letter. The password must have at least one upper case letter. It must contain one digit and one special character, and it must be at least eight characters long. Pause the video here, develop your solution, and when you're ready, come back and I'll walk you through how I solved this challenge. (electronic jingle) Let's start by testing for at least one lower case letter. I'll be using the regular expression literal. This consists of a series of characters to check for
>
> **[1:38](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=98)** and to surround it by two slashes. There are several ways to write the following regular expressions, but I will be using a positive look ahead. A positive look ahead is a zero with assertion which means that it will match characters in the string but will only return whether there was a match or no match. In other words, it doesn't consume the specific string characters. It just tests whether a match is possible or not. We want to test that there is at least one character in the entire string so we can use the period which will match any character except a line break and the plus sign is a quantifier that ensures that we have one or more of these characters. We can create a set of characters to test with a pair of brackets, and since we want all alphabet characters, we can write a-z. We can copy and paste this format for the uppercase letter requirement, but this time, instead of a lowercase a-z, we can write capital A-Z.
>
> **[2:47](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=167)** The one digit requirement works exactly the same except instead of A to Z, we want zero through nine.
>
> **[3:01](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=181)** To test for a special character, we can include them between the brackets.
>
> **[3:15](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=195)** Finally, to ensure a length of eight characters, we can use curly brackets. Here we're checking that the password is at least eight characters, but we're not setting an upper bound.
>
> **[3:39](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=219)** Let's create a boolean variable that checks if the password matches all of the regular expression patterns. We can use the test function to verify if each requirement have been met.
>
> **[3:54](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=234)** We can now use our is valid variable in a ternary expression to return your password is valid if the password matches all requirements, and your password is invalid if the password doesn't match all requirements. Let's create two passwords, one valid and one invalid and log the results of validating them with our check password function to the console.
>
> **[4:27](https://www.linkedin.com/learning/level-up-javascript/password-strength?u=76281980&t=267)** If we run our file, we can see in the terminal that our passwords are being validated correctly. Regular expressions are really difficult to learn and many developers end up using different tools and websites to help them construct regular expressions. So if this challenge is difficult for you, don't get discouraged. They're really difficult to learn but they are a core foundation of [JavaScript](../../Skills/Software%20Development/JavaScript.md) so it is important to be familiar with how and when you would use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **Tools:** terminal (1)
> **Speakers:** - regular (1)


## Instructor

- [Emma Bostian](../../Instructors/Software%20Development/Emma%20Bostian.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/level-up-javascript-4358091/codespaces)

## Skills Covered

- JavaScript

## Path Context

### In [Improve Your JavaScript Language Skills](../../Paths/Software%20Development/Learning%20Paths/Improve%20Your%20JavaScript%20Language%20Skills.md)
← [JavaScript- Async](JavaScript-%20Async.md) | **3 of 8** | [JavaScript- Recursion](JavaScript-%20Recursion.md) →

## Appears In

- [Improve Your JavaScript Language Skills](../../Paths/Software%20Development/Learning%20Paths/Improve%20Your%20JavaScript%20Language%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)