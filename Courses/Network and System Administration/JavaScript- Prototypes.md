---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-prototypes
url: "https://www.linkedin.com/learning/javascript-prototypes"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 10/3/2025
learners: 20252
skills:
  - JavaScript
  - Software Prototyping
  - Prototype Framework
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEAM937wj_YFw/learning-public-crop_675_1200/B4EZmhagvaKgAc-/0/1759349705942?e=2147483647&amp;v=beta&amp;t=osBIZQ_mPdsSIrf1o4FOQgzgqEjMk_dwNhSZLUHE5O0"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Become a JavaScript Developer]]'
prev_courses:
  - '[[JavaScript- Scope]]'
next_courses:
  - '[[JavaScript- Closures]]'
path_nav: '[{"path":"Become a JavaScript Developer","position":5,"total":13,"prev":"JavaScript- Scope","next":"JavaScript- Closures"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/software-development
  - topic/web-development
  - skill/javascript
  - skill/software-prototyping
  - skill/prototype-framework
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/JavaScript-%20Prototypes.md)

![JavaScript: Prototypes](https://media.licdn.com/dms/image/v2/D4E0DAQEAM937wj_YFw/learning-public-crop_675_1200/B4EZmhagvaKgAc-/0/1759349705942?e=2147483647&amp;v=beta&amp;t=osBIZQ_mPdsSIrf1o4FOQgzgqEjMk_dwNhSZLUHE5O0)

# JavaScript: Prototypes

> The JavaScript approach to object-oriented programming feels alien to many developers. While prototypes are core tools for intermediate and advanced programming, even experienced developers may not understand how they work. This course explains how to write more efficient JavaScript code using the prototype chain. Learn fundamental concepts underlying prototypes, such as object literals and constr

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-prototypes) | 1h 19m | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Understanding prototypes in JavaScript](#understanding-prototypes-in-javascript)
  - [Exercise files and environment setup](#exercise-files-and-environment-setup)
- [**1. Building Blocks of Prototypes**](#1-building-blocks-of-prototypes) (3 videos)
  - [Create object literals](#create-object-literals)
  - [Create objects with a constructor function](#create-objects-with-a-constructor-function)
  - [Using CoderPad challenges](#using-coderpad-challenges)
- [**2. Using Prototypal Inheritance**](#2-using-prototypal-inheritance) (4 videos)
  - [Understand the prototype property](#understand-the-prototype-property)
  - [Modify an object's prototype](#modify-an-objects-prototype)
  - [Create a prototype chain](#create-a-prototype-chain)
  - [Apply prototypal inheritance](#apply-prototypal-inheritance)
- [**3. Using ES6 Classes**](#3-using-es6-classes) (2 videos)
  - [Understand ES6 classes](#understand-es6-classes)
  - [Build prototypes using ES6 classes](#build-prototypes-using-es6-classes)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding prototypes in JavaScript](https://www.linkedin.com/learning/javascript-prototypes/understanding-prototypes-in-javascript-22200396?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/understanding-prototypes-in-javascript-22200396?u=76281980&t=0)** - When I was learning [[JavaScript]], I had a hard time understanding what prototypes were for and why the syntax seemed so complex. So I created this course. I'll explain the links between fundamental concepts like object literals and constructive functions and prototypes. We'll build object-oriented code using prototypes and we'll use ES6 classes to build prototypes with less code and more features. My goal is to make sure you know how to easily write and organize object-oriented code in JavaScript by the end of this course, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Speakers:** - when (1)

#### [Exercise files and environment setup](https://www.linkedin.com/learning/javascript-prototypes/exercise-files-and-environment-setup-14318675?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/exercise-files-and-environment-setup-14318675?u=76281980&t=0)** - [Instructor] To get started with this course, I've provided exercise files, so you can work along with me. I also have a few tips for you to set up your environment. If you have access to the exercise files, there's a directory for each chapter and a subfolder for each video. The app you'll be working with in this course is professionally designed and includes a number of asset files. You'll be writing your code in the all.js file, which is in the js folder in the site subfolder. The main [[HTML]] file for the site, index.html, is in the root folder. If you are working on a computer, you need three applications, a web browser, a code editor, and an HTTP server. You undoubtedly already have a web browser installed in your machine, and any major modern browser, Chrome, Firefox, or [[Microsoft]] Edge, is fine for this course. I'll be using Chrome in these videos, which is a popular choice among web developers because of the extensive and powerful developer tools it has built in. Because we'll only be using the console though, that really won't make a difference for this course. Note that if you're on a Mac, and you want to use Safari, you need to go into the Advanced tab in Preferences and check the Show Develop menu in menu bar box in order to be able to access developer tools using the menu. A number of great code editors are available, both free and paid apps. Any editor that lets you edit and save plain text
>
> **[1:34](https://www.linkedin.com/learning/javascript-prototypes/exercise-files-and-environment-setup-14318675?u=76281980&t=94)** is fine for this course. So if you have a code editor you like, such as Sublime Text or Atom, it's fine to use it. I use Visual Studio Code in these videos, which is a version of Microsoft Visual Studio created specifically for [[Web Development]]. Visual Studio Code is free and has [[Windows]], Mac, and [[Linux]] releases. The code is available on [[GitHub]], and users can submit issues there as well. I've customized my editor with one extension. Open in Browser, created by TechER, lets you open the current HTML file directly in your default browser using the Alt + B or Option + B keyboard shortcut. So this just saves a trip to the file manager to open a file in the browser the first time. An HTTP server is the final tool you need for this course. As a web developer, this is an application you'll need to have access to. So if you don't have one installed at this point, use this as your excuse to install it. I'm using http-server, which is a command line utility that runs under Node and is installed through the Node Package Manager, or [[npm]]. You can install Node by downloading a GUI installer from [nodejs.org](https://nodejs.org). Then once that's installed, at the command line, you simply type npm install http-server -g, where -g installs the package globally. Now, if you run into errors, you may need to use sudo to install this package. To do so, you use the same command,
>
> **[3:09](https://www.linkedin.com/learning/javascript-prototypes/exercise-files-and-environment-setup-14318675?u=76281980&t=189)** but you type sudo, S-U-D-O, at the start of it. Then when you're prompted, you enter your password for your current login on your computer. Once that install is complete, you can use the command http-server that serves the files in the current directory. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Microsoft]] (2), [[npm]] (2), [[Web Development]] (1), [[Windows]] (1)
> **Tools:** visual studio (3), command line (2), firefox (1), safari (1), sublime (1)
> **CLI Commands:** node (3), npm (2), sudo (2), make (1)
> **Prerequisites:** install (5), set up (1), you'll need (1)
> **Env Vars:** html (2), http (2), npm (1), gui (1)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** all.js (1), index.html (1)
> **Exercise Files:** exercise files (2)


### 1. Building Blocks of Prototypes

[↑ Back to Table of Contents](#table-of-contents)

#### [Create object literals](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=0)** - [Instructor] At their core, prototypes are an organized way of working with objects. So let's start with the fundamentals. The most basic way to create an object in [[JavaScript]] is with object literal notation. To create an object literal, you simply create a variable and specify an object as its value. The start files for this video are a website for a florist called Hansel and Petal. The basic design and layout of the site are done, and our task is to write code to add product information to the shopping cart each time a user selects an item. In the all.js file, we already have the basic structure of an event handler method ready to go, starting here on line 449. The data is submitted when a user clicks the Add to Cart button on one of the pages is parsed into an object named Data Object, and we'll use this form data to create a new object that corresponds to the user's choices. We'll specify that object is the value of the new item variable, which we've declared here on line 452. And then we have a conditional structure which builds out different options for that object. And then, when we're done creating an object for the current selections, we'll add it to the cookies for the current page. Now, we have three different cases here. The item selected by the user could be an arrangement, it could be a live plant, or it could be a bouquet. So first, after line 459, we'll code the object that would be created if the user selects an arrangement. We want to select the value of new item equal to an object.
>
> **[1:36](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=96)** So we'll say new item equals object, and it will give that object a few properties that are relevant to an arrangement. First, we specify that this is in the floral department, so we're going to specify a key of type and a value of floral. And then, we also need to specify how it's stored, so we have a key called storage, and for an arrangement that needs to be kept cool, so we're going to use the string Cool. And then we need the arrangement name, so we'll use the key Name and that's going to be equal to dataObject.itemname. We also need the type of vase the user selected, so we'll use a Vase key and that's going to be from the data object value, and the key is Vase Type. We also need the quantity, and we'll get that from dataObject.qty. And finally, we want this object to contain a log item method that we can use to log the object contents to the console. So log item is going to be a function and we'll start with a console.log statement. Now, I want to log the name of the item in bold in the console just to make it stand out, and I can do that by starting with the string percent C and a plus, and this.name, and then a comma, and then a string that specifies the CSS formatting I want to apply here,
>
> **[3:10](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=190)** and that's just going to be font-weight bold. And so, the [[Representational State Transfer (REST)|rest]] of what we're logging here is not going to be bold, so we just have those object names standing out and giving us a little bit of visual distinction in what's logged to the console. And then, we're going to use a for in statements. So for, let prop in this, and we're going to console.log starting with a space to indent a little bit underneath that heading, and then prop, and then a colon and a space, and then this square bracket prop, which gives us the value. And so, we're just showing key value pairs one after another on separate lines indented underneath the name of the object. So that'll be a really useful method to log out the contents of the object itself in the console. And then, we want to do the same thing. We want to create an object value for new item for each of the other two cases. And so down here in the Live category, we're going to set new item equal to an object. And again, we're going to have a type value of Floral. And this time, the storage is going to be warm, 'cause we do not want to refrigerate a live plant. And then, the name value is going to be dataObject.itemname, and instead of a vase, we have a pot type. So we're going to say pot and that's equal to dataObject.pottype. And again, the quantity key will be equal to dataObject.qty.
>
> **[4:47](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=287)** And we also want to log item method here, so I'm just going to copy and paste the code that we already typed above. So that's 466 through 471 and stick that down here on 480. Take out that extra line. And then finally, for a bouquet. So things are a little more complex down here, but we'll start out with the basics. So here on line 493, we'll set new item equal to an empty object, and we're going to have a type of Floral and the storage is going to be cool for these cut flowers. Now this time, the name is going to come from dataObject.category. And we're going to go back to having a vase, which is equal to dataObject.vasetype. Now, the idea with a bouquet is that a user can select stems of different types of flowers. So we're going to store those all in a flowers property whose value will start as an empty object. And so, we'll create that here, flowers, with the value of empty object. And in a bit, we'll add code that will add a key value pair for each type of flower and the number of stems. And then we want to, again, copy the log item method here from the previous code. Now, below the code I just entered is a For In section that's checking for data selecting specific stems
>
> **[6:22](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=382)** on the Build a Bouquet page of the website. The first If section checks if the current item is for a flower that also takes a color selection. If so, it pulls the text of the legend above the relevant text box and creates a key out of that. So down here within the nested If clause, we'll add code to create a new item.flowers square bracket, key, and set its value to an empty object. And we're not in an object here, so we are doing that as a statement with an equals sign and a semicolon rather than a colon and a comma, which we do in an object. And then, we want to set the value of this key equal to the value of that text box. So we're going to say newItem.flowers, square bracket, key, square bracket, stem name, which is the color value, equals data object, square bracket, item, which is the selected number of stems. And finally, we also want to specify a type of floral. So that's newItem.flowers, square bracket, key, .type equals floral. Now, some stems come only in a default color and there's no color selection for users to make. So we come down to the Else section and we're going to use an object literal again here.
>
> **[7:57](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=477)** So newItem.flowers, square bracket, key, equals an object. And so, this is going to contain a key value pair default with a value equal to data object item. So that's the number of stems chosen for this flower, which doesn't take a color. And then we'll also add type colon floral. And then finally, after this whole section, I want to log new item to the console so I can see just what object I've created. And I can use the log item method of the new item object. So down here on line 530, we'll say newItem.logItem, and then we'll save our work. And so, I've navigated to the current folder and check that with PWD. And so I'm in the start folder for video 01_01, so it's important to be in the start folder and not in the JS folder because we need the selected folder, the current folder to have that index.[[HTML]] file in it. And so I'm going to type http-server, and that's showing me that on my local host, it's serving this content at port 8080. And then over in my browser, I'm going to go to local host, colon, 8080, and there is the website. I'm going to open up the console and this'll let me keep an eye on what's going on. And I'm going to give each page a try. And so, on the Arrangements page, I will add this to the cart. I'll just click the Add to Basket button.
>
> **[9:30](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=570)** And over in the console, I can see the object being logged out here. And so, the object name is Rainbow Rose Collection, and we've got the different keys and values that we selected along with the log item method. And then the last line here is actually logging out the cookie that we stored in the browser. And I'll go over to the Live Plants page and we'll do the same thing, just adding the default. And it looks like I made a little error in my code. So we'll go back and look at line 478. Yeah, just spelled it a little wrong. So I'll fix that. Go back and reload. I'll try that again. And now it's working. And so again, I have my object name. I have all the keys and values and I have that log item function again. Now we notice we've got two items in the cookie for the shopping basket. And then finally, the Build a Bouquet page. And so, I'm going to select a number here for one of the items that takes a color and I'll select a color. And then, for one of the stems that doesn't take a color, I'll also pick a number and we'll go ahead and add that to the cart. And so, we have Bouquet as the object name, we have the keys and values we specified, and then we have this flowers key whose value is itself an object. And within there, we have an object built out for each of those stems. So, the Calla Lily's key
>
> **[11:03](https://www.linkedin.com/learning/javascript-prototypes/create-object-literals-14321658?u=76281980&t=663)** has a value of blush, which is the color, and two, which is the number we selected. And then, Sunflower has a key of default, which we specified and a value of five, which is the number of stems we selected there. And then we have the log item method. And then we notice that we've gotten a third item added to our cookies. So each one of the items we added has been added to that basket. And so, we've built out all that functionality using object literals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[HTML]] (1)
> **Code Identifiers:** dataobject (7), newitem (4), logitem (1)
> **File Paths:** all.js (1), index.html (1)
> **CLI Commands:** make (2)
> **Env Vars:** css (1), pwd (1)
> **UI Navigation:** select the (1), go to (1)
> **Ports:** port 8080 (1)
> **Cross-References:** go back to (1)

#### [Create objects with a constructor function](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=0)** - [Instructor] Building objects with object literal notation makes for easy to read code. However, it isn't ideal for every situation. If you're making multiple copies of similar objects, you're going to have to write redundant code and you also can't easily abstract out what you're doing for reuse. For just these scenarios, [[JavaScript]] includes another way to create objects by creating a constructor function. JavaScript include some built in constructor functions which you can use to create things as the name implies. These start with capital letters and they're most commonly used with data types. So for instance, the code new array creates a new array, and likewise, new object creates a new object, and I can pass some arguments there if I want to. Now a really great thing about constructor functions is that we can make our own, so we can define the object that we want the function to create, and then all we have to do is call the constructor function, pass in the arguments, and we have a new custom object. So for instance, in our Hansel and Petal code, we're creating objects for different types of items that users buy. So we can create a constructor function that creates an object with the specific properties and methods for each item type that users can buy, and then we can call those constructor functions to build out objects in response to user actions. And that should dry out our code some and keep it a little better organized. So looking in the product add method in the if else construction where we actually build out the objects starting here on line 459, we have four different types of objects, we have arrangements, we have live plants, we have bouquets.
>
> **[1:38](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=98)** And then for each bouquet, we add a sub object for each type of stem that users add to the bouquet. So we could use four different constructor functions here for arrangements, live plants, bouquets, and then for individual flowers. So I'll go to the very end of the file to build out my constructor functions just before the closing line of the iffy. And to build a constructor function, I simply declare a new function, so I'll call it the first one Arrangement. And I'll name it with a capital A to indicate that it's a constructor. Now note that this isn't a syntactic thing, it would still work as a constructor function even if the name were all lowercase. But it's a best practice to name constructors with an initial cap as a convention to make it clear what they do. And our constructor is going to take a few parameters, first name, and then vase for the vase type, and then quantity. And we'll use a default parameter, so setting a value to one if it's not otherwise specified. Now when we call this constructor function, it's going to create a new empty object for us. And we can look at our existing code to see what properties and methods we need. So first, there's the type key with a value of floral, and so within the function, we can use the this key [[Microsoft Word|word]] with keys and values to add any key value pair that we want to the new object that's being created. So this.type equals floral and likewise for the other properties.
>
> **[3:11](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=191)** So this.storage equals cool, this.name, and we're going to use the name parameter here, this. vase will likely use the vase parameter value. This.quantity equals the value of the quantity parameter. And then we want that log item method, so I'm going to scroll up to my existing code and I'm just going to copy that. I have it written and it's working, and then I will scroll down and say this.logItem, and then I have to convert that object code to a statement.
>
> **[3:59](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=239)** And then I just need to repeat this for a live constructor function. And enough of it is similar that I'm just going to copy and paste the arrangement constructor. So copying that constructor and then a new line just pasting it in, and I'll change that name arrangement to live with a capital L. And that second parameter instead of a vase for live arrangement, we have a pot, so we'll change that parameter name. And so the storage value needs to be warm, so we'll change that. And from this.vase, we need to instead specify this.pot key, and we will again, use that pot parameter value. And otherwise, everything's the same, so now we have two constructor functions built out. And we'll do a similar process for bouquet. And so I'm going to copy that arrangement function again, paste that in, we'll change the name to bouquet with a capital B. And we don't have an option currently in our view for users to actually choose more than one for the quantity, so we'll just take that quantity parameter out altogether and remove quantity as a key. And then we're going to create a final constructor for flowers. And so we'll write that from scratch, it'd be a function called flower with a capital F, and it's going to accept two parameters, quantity, and then color. Now here we want the key to be the color of the stem
>
> **[5:32](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=332)** and the value to be the quantity of that stem color. So we're going to say this [Color] equals quantity, and then we're going to grab that log item function from another constructor, and we'll copy that over. And we'll do one final piece of customization. Back up in the bouquet function, it would be useful bouquet objects to have an add stem function that can create sub objects using the flower constructor. So we'll start by creating a sub object using this.flowers, and this is where the data for each stem is grouped. And then we'll add, addStem as a function to that sub object, and that's going to take a few parameters. So name, quantity, and we'll set a default parameter of one, and color, and we'll set a default parameter there as well to default. And we'll capitalize that because the [[Representational State Transfer (REST)|rest]] of our stem colors are going to be initial caps as well. And then this function is going to set a key which will be this [Name], with a value equal to the result of calling the flower constructor, and to do that, we'll say new capital Flower, and passing in the quantity and color parameters that the flower constructor expects.
>
> **[7:07](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=427)** And so we're leveraging our flower constructor in a method for bouquet objects. And so now to make use of our constructors, we'll scroll back up, and on line 459 is the beginning of our if else logic for item type. So in the arrangement section, first off, I can comment out all of the code here that uses an object literal to assign a value to new item for an arrangement, so that's lines 460 to 472, and I'll comment that all out, and I can replace that all with a single statement using my constructor function. And so I'm still assigning the value of new item and its value is going to be the result of running that arrangement constructor, and so we just use the new keyword, call our arrangement function, and so for the name, we are going to be using data object.itemname, just like we were, and for the vase type, we're using dataObject.vasetype. And then for the quantity, we can pass dataObject.qty. And that's it, we've replaced all of that code with just a single statement leveraging our constructor. And so very similar for the live section, so starting out, I'm going to comment out lines 475 to 487, that object literal, and then we'll set the value of new item to the result of calling the live constructor using the new keyword,
>
> **[8:41](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=521)** and we're going to pass in dataObject.itemname for the name, dataObject.pottype for the pot, and dataObject.qty for the quantity. And then for bouquets, scrolling down past that nested if else, we're going to come and outlines 495 through 507, and then we're going to assign new item the result of calling new Bouquet and passing dataObject.itemname, and dataObject.vasetype. And then finally moving down a little more, we have code that creates sub object for stems, and we can use our flower constructor here. So in the if statement, commenting out these lines, 520 through 522 that create and customize newItem.flowers key, we can instead use the add stem method that we created for the bouquet object, which leverages the flower constructor. And so newItem.flowers.addStem, and then we pass it the key that we've derived, dataObject[Item] for quantity, dataObject square bracket, and the text color plus the stem type that we've derived above for the color.
>
> **[10:19](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=619)** And then in the else statement, commenting out these four lines, 526 through 529, and instead, calling newItem.flowers.addStem, passing key and dataObject[Item]. And then saving our changes, and starting up the server for the current folder, and then going to local host 8080, opening up the console, and then saving our changes and opening the arrangements page from the HTTP server with the console open, we'll add this to the cart. And I see that the object is logged and it's the same as it was previously using the object literal, it has the name and vase, the quantity, the log item method, all of my key value pairs. Now my cart's getting a little full, which is logged down here, and I'd like to be able to verify what I'm creating now and not see what I created in earlier testing. So I can call the jQuery removed cookie method to clear out the basket data cookie. So that's $.removeCookie and passing it the string basket data. And I'm going to do the same thing for the bouquet count
>
> **[11:41](https://www.linkedin.com/learning/javascript-prototypes/create-objects-with-a-constructor-function-14322568?u=76281980&t=701)** and for the qty cookie. And so now when I do $.cookie, there's a couple other cookies in there that I'm not so worried about, but this will keep that whole basket data reined in. And so I'll go ahead and add this arrangement to the basket again, now I've got just one item in the basket. And then moving to the live plants page, I'll add that to the basket too. And again, I get another object just like it was before with the literal. And then finally, I'll go to the builder bouquet page, I will take a couple of a flower that takes a color, I will take a few of a flower that doesn't take a color, add that to the cart, and again, the object is logged. And drilling into that flowers property, we have not only our two objects that were created using that flower constructor, but also we have that add stem method that we added to the flowers object. And we've done this using constructor functions instead of object literals. And so we've abstracted our code, so the logic is one place, the constructors, and our procedural code for adding items to the basket is cleaner by just using single statements to call those constructors, so we've separated our concerns a bit here, and that's a win.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** dataobject (10), addstem (3), newitem (3), logitem (1), jquery (1)
> **UI Navigation:** go to (2), scroll up (1), scroll down (1)
> **Analogies:** for instance (2), just like (2)
> **CLI Commands:** make (3)
> **Env Vars:** http (1)
> **Definitions:** we call this (1)
> **Best Practices:** best practice (1)

#### [Using CoderPad challenges](https://www.linkedin.com/learning/javascript-prototypes/using-coderpad-challenges-29808092?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/using-coderpad-challenges-29808092?u=76281980&t=0)** - [Instructor] This course on [[JavaScript]] prototypes include some code challenges that use the CoderPad environment. Let's take a quick look at that workspace. In the top left, you have instructions. Here, those are mostly hidden. At the bottom left, you have console output, and that's going to be the result when you actually try out an answer. At the top right, you have the code that you're starting with, and the code that you work with during your challenge. And at the bottom right, there's some test code, and this is what's going to run against the code that you write in the answer section. Also, notice that the answer section includes a couple constants, showExpectedResult and showHints. You can change the value of either or both of these to true if you want to see results or if you want to see hints. So let's try this out. I'm going to start by just entering return numbers. And obviously, false answer. That's not going to work. And I'm going to go down and click Test my code. And what I see on the left side is some feedback that says it failed. There's two tests here, neither of them passed. So I get that feedback, then I can go back and keep working on the answer, keep refining it, thinking about it, and I can iterate through this as many times as I want to, until I start getting it right. Now, instead of returning numbers here, I'm going to actually put some thought into it and say, Math.max spread operator numbers. And now I'm going to test my code again. And I can see that I passed both of those tests
>
> **[1:34](https://www.linkedin.com/learning/javascript-prototypes/using-coderpad-challenges-29808092?u=76281980&t=94)** so I can confirm that I did this right, my code is correct, and I'm all set. There's a challenge at the end of each chapter. Have fun with those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** showexpectedresult (1), showhints (1)
> **Speakers:** - [instructor] (1)


### 2. Using Prototypal Inheritance

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the prototype property](https://www.linkedin.com/learning/javascript-prototypes/understand-the-prototype-property-14317677?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/understand-the-prototype-property-14317677?u=76281980&t=0)** - [Instructor] Constructor functions provide a useful shortcut for building out objects. However, building out a large number of functions using constructor functions alone can have serious memory impact on your apps. Think about it. Your constructor creates one object with some custom properties, along with a few common properties and methods. Then another, then another. After you've built, say five objects, you have five separate copies in memory of each duplicate property and each duplicate method. We could significantly reduce the size of our apps by removing that duplication, right? Well, the creators of [[JavaScript]] implemented a feature to address exactly this situation. And it's called a prototype. You can think of a prototype as a customizable object you can use as a starting point to build out other objects. And crucially, all the objects you build using a prototype reference the common properties and methods that are stored in that prototype object rather than storing their own separate copies. So for instance, in a travel app, I might create a prototype containing methods used to perform some common operations in calculating prices in booking. And then I could build out objects using that prototype for use in different parts of the app. Think booking plane tickets, hotel rooms, car rentals, et cetera. Each with their own custom needs, but sharing some core functionality. And then when I build out those objects, their actual content is only the custom properties
>
> **[1:35](https://www.linkedin.com/learning/javascript-prototypes/understand-the-prototype-property-14317677?u=76281980&t=95)** and methods they need with references to the prototype for the shared functionality. This aspect of prototypes, the fact that common keys and values are shared by reference rather than by duplication is key to the usefulness of prototypes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Modify an object's prototype](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980&t=0)** - [Instructor] You create a prototype in [[JavaScript]] by building out a constructor function. This constructor contains only the custom properties needed by each object that it creates. Then you specify any common properties using the functions, prototype property. Our code for the Hansel and pedal website uses constructor functions to build out objects for four different types of items, arrangements, live plants, bouquets, and flower stems. Well, some of the properties assigned to constructed objects are customized based on arguments passed in the function call. Every constructed object contains a few properties and methods whose values are common to all objects created using that constructor. How could we use prototypes to reduce the memory footprint of our code? Well, first we need to identify which keys and values are common to all objects constructed by a given constructor. Then we can assign those properties and methods to the constructors prototype and remove them from the constructor function itself. Once this change is implemented, when multiple objects based on that constructor are in memory at the same time, the objects will share the common properties and methods from the prototype rather than duplicating them. So here near the bottom of our all js file is our set of constructor functions. And starting with arrangement, we can see that type and storage properties are not customized when the function is called.
>
> **[1:33](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980&t=93)** Their keys and values are copied verbatim and likewise for the log item method. So I'll go down here in 657 add a new line and right below the constructor, I'll start by adding some new statements to set these properties on arrangement dot prototype. So arrangement dot prototype dot type equals floral and so now that I've set this on the prototype object for the arrangement constructor, I can actually just take it out of the constructor itself and likewise for arrangement dot prototype dot storage, set that value to cool and take it out of the constructor. And so now, every object created with the arrangement function gets these three customized properties at the start and it inherits these other two properties from the prototype without actually copying them into itself. Now we have one more property that's not customized, and that is the log item function, the method. So I'll add one more prototype property down here, arrangement dot prototype dot log item and I'm just going to copy and paste that and then I can delete that property as well from the constructor function, so line 649 to 654, I'm going to take out.
>
> **[3:06](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980&t=186)** So now my constructor function creates new properties for each object only when those properties have values that are passed into the function call. So I'm using these parameter values as the values of those properties. All the other properties and the method are inherited from the prototype of the arrangement constructor and those will be common and shared among all objects created by the arrangement constructor function. And so we can do the same thing for our other constructors. So down here in live, I also have type and storage and log item and so I am going to grab the arrangement prototype statements up here, copy those to the clipboard and then down here below the live constructor, I'm going to paste those in and just change arrangement to live and so we have that same value for type which was floral, so I'll take that out of the live constructor and then storage, I need to switch to live and storage value should actually be warm here and so then we can take out line 660 and then changing the arrangement to live for the log item function, that's exactly the same. So taking outlines 663 through 668 and so again now for the live constructor, we have just the properties being set for each new object
>
> **[4:41](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980&t=281)** whose values depend on the parameter values that were passed in on the function call. and then the remaining properties whose values are set are all shared from the prototype object among all objects that are created from this constructor. And so we'll do the same thing with bouquet and again, I will just copy this live prototype statements because we're going to be seeing a lot of duplication. So we'll save ourselves some typing down here and so we'll change this first one to bouquet type is floral, so we can take that statement out of the constructor. Second one, bouquet dot storage and storage is going to be cool here and then we can take out line 674 in the constructor and then changing live to bouquet for log item function, we know that's the same, so we can take out lines 676 to 681 in the constructor. And then we have the flowers property and this has simply one method, which is common to all objects created from the bouquet constructor and so we'll go ahead and add another prototype statement down here for bouquet dot flowers and we will just copy and so I can copy that flowers object down to the prototype statement instead, stick semi-colon on the end
>
> **[6:15](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980&t=375)** and then I can take out that property, so line 676 to line 680 in the constructor. And so now my bouquet constructor has just two properties and I've added a method as well as the type and storage properties and the flower property, which is an object to containing a method to the prototype. And so finally with the flower constructor, so after the flower constructor function, let's say flower dot prototype. So the only common item here is the log item method, so I'm going to just copy the log item method to the prototype statement and then I can take out lines 693 and 690 in the constructor. And so in our constructor, we get that single key value pair of color equals quantity and then the prototype is going to store that log item function to be shared in common with all objects created from this constructor. And so saving my changes and I have this folder serving from HTTP server. So reloading in the browser and let's test things out. So for an arrangement can add to basket and we notice here that we still have listed all of the properties and values,
>
> **[7:50](https://www.linkedin.com/learning/javascript-prototypes/modify-an-object-s-prototype-14318674?u=76281980&t=470)** we have the log item method, but now the customized values name, vase and quantity are the only ones that are actually stored in that object where the type storage and log item method are being inherited from the prototype object. And so switching to live plants, I'll add one of those to the basket and same thing, we have this custom properties name, pot and quantity, and then the inherited ones type storage and log item. And then finally building a bouquet, I'll do five Calla, lilies, and purple, I will do three Peruvian lilies and add those to the card. And so again, we have the name and vase, custom properties, the type storage and log item inherited from the prototype. And then in our flowers property, we have two sub object plus that add stem method, which is also inherited from that bouquet prototype and so the functionality here is unchanged, but now we're working from code that uses prototypes to reduce its impact on our memory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is called (1), is an  (1)
> **Env Vars:** http (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Create a prototype chain](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=0)** - [Instructor] Using a prototype can reduce the memory footprint of an app when you're creating a number of objects using a constructor function. But you may still experience some duplication in your code if you have multiple constructor functions that share properties and/or methods. To further optimize your code, [[JavaScript]] allows you to base one prototype on another, inheriting keys and values from another prototype rather than creating and storing unique copies for each separate prototype. Building relationships between prototypes in this way is known as chaining or inheritance. The resulting set of relationships between different prototypes is known as a prototype chain. In the Hansel & Petal code for instance, we're working with four separate constructors each with its own prototype for arrangements, live plants, bouquets, and flower stems. Each of these prototypes includes the type property with a value of floral. And each of these prototypes also includes a log item method with identical code. So right off the bat, we could eliminate the duplication among all of these constructors by basing them on the same prototype. But if we look closer, we also find that some of our prototypes share properties and values that are not shared with all prototypes. In fact, we can build out a set of chained prototypes in which some are based on others without all of them sharing the same properties. Before we dig in, it can be useful to sketch out the structure and relationships between our constructors
>
> **[1:35](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=95)** to determine just what our prototype chain should look like. All of our constructors share a type property and a log item method. So we can create a generic item prototype that serves as the origin of our prototype chain. And then our existing constructors fall into three distinct categories based on their shared values. Flower is unique, as is live, but arrangement and bouquet both have the pot and storage properties and values in common. So we can create a parent constructor for cut items and then chain the arrangement and bouquet constructors to that. So let's code this up. So first off, before the arrangement constructor, I'm going to create a new constructor called Item and that's just going to be an empty function. We don't want it to actually customize anything. We just want to actually work with its prototype. And so I'm going to go down here to arrangement and copy the prototype statement for the type property, paste that up here and change arrangement to item. So we are customizing the prototype of the item constructor with the type value of floral, and I'm going to do the same thing with the log item method, changing arrangement to item. So now we have a generic item constructor whose prototype includes values for the type property and log item method. And so now if we chain
>
> **[3:07](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=187)** all the [[Representational State Transfer (REST)|rest]] of our constructors to item, we don't have to duplicate either of those key value pairs in any of our other constructors. So then we've identified these three categories and because arrangement and bouquet both share some common properties, I'm going to cut and paste arrangement and move it down to the bottom right before the end of our file. And so I'm going to do the same thing with bouquet and move that down here after arrangement. And so now we have the live constructor and the flower constructor right after the item constructor and its prototype information. And so for the live constructor, first off, we're not going to make any changes to the constructor itself, but down here in our prototype statements, we are specifying the type value and we're specifying the log item value. And instead of doing those, we can just inherit those from the item constructor. And to do that, I'm going to create a new statement, live.prototype equals new item. And so this specifies item as the parent in the prototype chain, meaning that live is going to inherit its prototype from the item constructor. And because that item prototype already has floral and log item, we don't need to specify those again for the live prototype,
>
> **[4:41](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=281)** so I can delete the type statement for live as well as the log item statement. And so we've dried out our code here by ensuring that the type property and the log item method occurred just once in our code base. And so we can do the same thing with the flower constructor here. So again, we're going to leave the constructor as it is, but down here we are specifying the log item function again for the flower prototype. And instead of doing that, I can simply specify flower.prototype equals new item. And then flower's going to inherit that log item function. It's also going to inherit the type property which I neglected to include, but it should be included as a property of flower. So that also is ensuring that properties that we intend to apply to all of the objects actually are rolled out to all of the objects. So that actually, in this case, creating a prototype chain helped us identify a hole in our code. So I can take out the log item method from flower because now that we have specified item as the parent in the prototype chain, we will automatically be inheriting the log item method, as well as the type property from item. Okay, so live and flower were the two constructors
>
> **[6:19](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=379)** that were unique in our prototype chain. And now we come to arrangement and bouquet. And so arrangement and bouquet do also share the type property value floral and the log item method, but between the two of them, they also share a storage value of cool. And so to dry out our code a little bit further, we can create another intermediate link in the prototype chain that arrangement and bouquet will both descend from. So before arrangement, I'm going to create a function called cut and it's going to be blank. And so this is just going to be a constructor function. And so cut is the category that arrangement and bouquet both belong to. They're both types of cut flowers. And what's common to cut flowers are things that we can actually specify as part of the prototype. So Cut.prototype.storage equals cool. And then what we also want to do is specify that cut descends from item. And so we'll say Cut.prototype equals new item. And so cut is a slightly customized object based on the item prototype. And now that we have this object with a storage value of cool, we can specify that as the parent in the prototype chain for both arrangement and bouquet. So for arrangement, I'm going to say arrangement.prototype equals new Cut,
>
> **[7:55](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=475)** so specifying cut as the parent in the prototype chain. And now we can take out type because cut descends from item, so we're getting that type and I can take out log item because cut descends from type and we're getting log item. And then I can also take out storage and so arrangement now inherits all of its non-customized properties from cut and item, which are further up the prototype chain. And likewise for bouquet, we're going to specify bouquet's prototype as a new instance of cut. And then we are inheriting type from the parent of cut, which is item. We are inheriting log item also from item. And we are inheriting storage from cut. And then specific to bouquet is this flowers property and that's going to stay as a customization for bouquet itself. And so we can save our work. And I have my files being served from HTTP server and have reloaded. And so going to arrangements, we can test this all out. I'm going to add an arrangement to the basket. And again, I'm getting the custom properties, name, base, quantity, and storage, and I'm getting the inherited type and log item. And over in live plants, I'll add one of those. And the same thing, this works just like it did before, where we have our custom properties
>
> **[9:29](https://www.linkedin.com/learning/javascript-prototypes/create-a-prototype-chain-14319632?u=76281980&t=569)** and our inherited properties. And then over in build a bouquet, we'll take six yellow calla lilies and an iris. And we have our custom properties, including flowers. We have inherited storage from the cut prototype and we've inherited type and log item from the item prototype. And so again, we see that our code works just like it did before, but we have further optimized our code and reduced duplication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** known as (2), is a  (1)
> **Analogies:** just like (2), for instance (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### [Apply prototypal inheritance](https://www.linkedin.com/learning/javascript-prototypes/apply-prototypal-inheritance-14323480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/apply-prototypal-inheritance-14323480?u=76281980&t=0)** - [Presenter] The effects of prototype chains on app memory and code organization are compelling in themselves, and there's a bonus effect that makes using prototypes even sweeter. You've seen how chained prototypes share a single set of keys and values, and due to this relationship, a change to a parent prototype changes the code of all constructors that inherit from it, without needing to make changes to the code of those prototypes. This works much the same way as using a single CSS style sheet for all the pages in a website, which allows you to change the style site-wide with an edit to just that single CSS document. So, in our code for Hansel and Petal, the item prototype down here on line 646 contains the type property, and it also contains the log item method. And both of these are inherited by all of our other constructors. Well, imagine that the store decided to end the distinction between floral and other goods, and instead to classify all sales as either goods or services, if each constructor still had its own prototype with no chaining, we'd have to make this change to the type value in each constructor. But because we've connected our prototypes into a prototype chain, we only have to make that change once. So here below the item constructor, I can change the item dot prototype dot type value from floral to goods. And then I'm going to save that change. And I already have this page running from HTTP server. So switching over to the browser and reloading,
>
> **[1:37](https://www.linkedin.com/learning/javascript-prototypes/apply-prototypal-inheritance-14323480?u=76281980&t=97)** I'll go to the arrangements page, add one of those to the cart. And I can see in the console that now the type property for this item is goods, and then going to live plants, I'll add one of those and same thing type of goods, build a bouquet. I'll just add one stem, add that to the cart and the type is goods. So the inheritance created by our prototype chain makes our code not only more concise, but easier to maintain as well.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** css (2), http (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)


### 3. Using ES6 Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand ES6 classes](https://www.linkedin.com/learning/javascript-prototypes/understand-es6-classes-14319631?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/understand-es6-classes-14319631?u=76281980&t=0)** - [Instructor] Once you understand how to build and use prototypes in [[JavaScript]] code, they're relatively straightforward. However, traditional constructors and prototypes don't result in code that's particularly organized. It can take some studying to dig into existing code, to map out its prototype chain and exactly what is inherited from where. Recent updates to JavaScript known as ES6 include a new syntax for building out classes with the class keyword. Now, JavaScript is not a class-based language like [[Java]] for example. In a class-based language, you build out objects using classes and each object receives set properties and behaviors from the class constructor. This may sound similar to prototypal inheritance in JavaScript, but it's a fundamentally different model. The new class keyword lets us build out objects using syntax that's similar to what you'd see in a class-based language. However, under the hood JavaScript classes provide easier syntax for building out constructor functions and prototypes. So they're what's commonly referred to as syntactic sugar. We're still building out constructors and prototypes. We're just using an easier syntax to do it. This new syntax uses the keyword class to specify the name of the class and optionally the keyword extends to identify another class to inherit from. And this syntax makes the prototype chain obvious at a glance, which is already a win in terms of code organization. Then within the class definition, we define a constructor along with any methods that objects
>
> **[1:33](https://www.linkedin.com/learning/javascript-prototypes/understand-es6-classes-14319631?u=76281980&t=93)** based on the class should inherit. Even though we don't make distinctions in class syntax between what's copied to the new object and what's linked to in the prototype, it's all taken care of for us under the hood. Like a number of other ES6 tools, classes make it easier for developers to write code and to understand existing code. And like all modern JavaScript classes can be transpiled into older, more widely supported code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (6), [[Java]] (1)
> **Analogies:** similar to (2), for example (1)
> **CLI Commands:** make (2)
> **Env Vars:** es6 (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Build prototypes using ES6 classes](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980&t=0)** - [Instructor] The ES6 class keyword allows you to build out prototypes with more straightforward syntax. So let's refactor our Hansel and pedal constructor functions and prototypes as classes. So starting with the item constructor, let's just comment that out and start our new code below it. So we use the class keyword and then the name of the class, which is still going to be item with a capital I, so we still have the same best practice here as we do for constructor functions. And then within the curly braces, we're going to specify the parts of this class. And so first we use the constructor method and this lets us specify any properties that were originally part of our constructor function. And we're going to specify this dot type equals goods. Now that's our property, but we also have a log item method that was in our item constructor as well. So for a class, we specify methods separately outside of that constructor method. So I'm going to copy this log item method from our previous code, then go down to the end of the constructor method, start a new line and paste that in and we actually want to specify this without using the function keyword because we're specifying it as a method. Then I need to uncomment all those lines I copied tab those over. Great, and so now I've got my constructor method that specifies my property, and then I've got the log item method,
>
> **[1:33](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980&t=93)** don't need a semi-colon at the end of that and that's it for the item class. So comparing the old item constructor and prototype statements with the item class, there's one main difference and that's that the entire content of the class is enclosed in the braces for the class statement. So the code is a little more organized, even though under the hood, it's still creating a constructor function and specifying keys and values on its prototype. So next let's move on to the live constructor and so I'll comment out the live constructor and we'll create a class live statement and this time I need to add an extends statement and that comes right after the name of the class and this lets me specify which other class I want to inherit from in the prototype chain and so I'll say extends item. And then I'll use the constructor method just like I did above and I'll specify those parameters, so we have name, pot, quantity with a default value of one and now within the constructor, I need to start by adding the super statement. I need the statement when two things are true. One that I'm specifying a constructor that's inheriting from another class. And two, I want to use the this key [[Microsoft Word|word]] in the constructor. Super is essentially fetching context from the parent class and then after the super call, I specify my properties, both the custom ones, so I can actually just copy
>
> **[3:07](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980&t=187)** my name, pot and quantity properties from above, paste those in here, take the comments out, fix my dense and I can also include the default one, which I was adding to the prototype itself, and then can simply save this, dot storage equals one. And so again, I've created a compact well-organized package with my live class, as opposed to the live constructor and prototypes index. And it's pretty much the same with the flower class. So we will comment that out, class flower, and this is going to be extends item. instructor. It's going to take quantity and color, and we're going to call super to get this and then this square bracket color equals quantity. And then we come to the cut class and here, refactoring our code as a class is going to pay off with another benefit. So our existing cut constructor has a single property on its prototype, which is storage. And storage has a value of cool. And then both classes that are built on the cut prototype arrangement and bouquet, defined name and vase properties based on arguments that are provided when the constructors are called. With traditional constructors, we can't pass arguments to customize inherited properties
>
> **[4:42](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980&t=282)** and that leaves some duplication in our code. For instance, in the existing code here, both arrangement and bouquet have to define the name and vase properties based on their own parameters. But with class syntax, we can specify parameters and assign property values for properties that will be inherited down the prototype chain. So for cut, comment that out. Class cut, extends item, and then we're going to create a constructor and our constructor will actually take the name and vase parameters that our previous code was only taking in the descendant constructors. And then we'll call super, and then we can specify this dot name equals name, this dot vase equals vase, and this does storage equals cool. Now our code never calls the cut constructor directly, so we never actually call this class and pass it parameters. But we can make use of the code we've just written in the classes that descend from this one, arrangement and bouquet. And so refactoring arrangement will call that out, class arrangement extends cut. And then when we call the constructor, we're going to have name, vase and quantity parameters with a default value of one for quantity.
>
> **[6:17](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980&t=377)** And so in the constructor method, first thing I do is call super, but in this case, I'm going to pass two arguments, name and vase, and this provides the mechanism for those customized properties on the cut class to get values when I call arrangement. And then I'll assign this dot quantity equals quantity, and then finally bouquet. So we'll comment that out, class bouquet, extends cut and constructor it's going to take name and vase as parameters and again, we will call super with name and vase, so passing those parameters on up the prototype chain to cut, and then we need to specify this dot flowers and that is an object that we're just going to copy from our previous code. So uncommenting this, fix those in dense and so saving that code and reloading in the browser and we'll go to arrangements and we'll test that one out. And so we've got those inherited properties, we've got type and then we have customized properties name, vase storage and quantity and notice now we don't actually have the method log item logged. So this is based on the way our log item method was written
>
> **[7:55](https://www.linkedin.com/learning/javascript-prototypes/build-prototypes-using-es6-classes-14322573?u=76281980&t=475)** and we can verify though, that log item is a method of the arrangement class because we called it in order to log this data to the console. So we know it's there, it's just further up the prototype chain and not actually getting logged at this point, but everything that this object needs to have, it has just like it did before. So switching over to live plants, adding one of those same thing. We've got all the properties we need both the inherited ones and the custom ones and then building bouquet, take some yellow Calla lilies, and two orchids and again, we've got all our properties, we've got our flowers building out and inheriting that type property from up the prototype chain. So everything works in the browser just the way it did before, but we've removed some duplication from the code. So clearly if I'd used classes from the start instead of rock instructors and prototypes, the code would have been a little easier write from the get-go. So the class Syntax saves us some work and result in better organized code. And when I run that through a trans builder like Babel before deploying it, the result is going to be constructors and prototypes, which are backward compatible. So with classes, we have easier coding and we can still write code and distributed in a way that it maintains wide compatibility, so win-win.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** just like (2), for instance (1)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-prototypes/next-steps-29803098?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-prototypes/next-steps-29803098?u=76281980&t=0)** - [Instructor] Congrats. You've completed this course and you've learned how to implement prototypes in [[JavaScript]]. If you want more experience with writing [[Vanilla]] JavaScript code, check out my course on [[Learning App Building With Vanilla Javascript]]. If you want to understand another tricky part of coding in JavaScript, take a look at my course on [[JavaScript- Closures]]. If you want more practice implementing prototypes, take a look at [[JavaScript Practice- Object-Oriented Programming]]. Now take your new skills and build something amazing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (6), [[Vanilla]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript
- Software Prototyping
- Prototype Framework

## Path Context

### In [[Become a JavaScript Developer]]
← [[JavaScript- Scope]] | **5 of 13** | [[JavaScript- Closures]] →

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