---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: object-oriented-programming-with-c-sharp-17331514
url: "https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514"
level: Intermediate
updated: 12/6/2022
learners: 45099
skills:
  - Object-Oriented Programming (OOP)
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/object-oriented-programming-with-c-sharp-2484213"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGKWU3GX_YEGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670017170734?e=2147483647&amp;v=beta&amp;t=b8FGcliiH_m3b1RKNbS_mTA7QoOETpP4ws0LWmlyyNs"
linkedin_topic: DevOps
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
next_courses:
  - '[[C- Delegates, Events, and Lambdas]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":1,"total":8,"prev":null,"next":"C- Delegates, Events, and Lambdas"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/object-oriented-programming-oop
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Object%20Oriented%20Programming%20With%20C%20Sharp.md)

![Object Oriented Programming With C Sharp](https://media.licdn.com/dms/image/v2/C4D0DAQGKWU3GX_YEGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670017170734?e=2147483647&amp;v=beta&amp;t=b8FGcliiH_m3b1RKNbS_mTA7QoOETpP4ws0LWmlyyNs)

# Object Oriented Programming With C Sharp

> Did you know you can use object-oriented programming concepts in C# and .NET 6 to help write clean, reusable code? In this course, instructor Jesse Freeman gives you a comprehensive overview of the many features of C# that support object-oriented programming, including abstract classes, interfaces, generic types, command patterns, method overrides, and more. To help lend a real-world context to th

> [LinkedIn Learning](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514) | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Programming an object-oriented text adventure game](#programming-an-object-oriented-text-adventure-game)
  - [What you should know](#what-you-should-know)
- [**1. Using .NET 6**](#1-using-net-6) (3 videos)
  - [Setting up .NET 6](#setting-up-net-6)
  - [Classes](#classes)
  - [Extending a class](#extending-a-class)
- [**2. Scope**](#2-scope) (3 videos)
  - [Scope](#scope)
  - [Singleton](#singleton)
  - [Partial classes](#partial-classes)
- [**3. Command Pattern**](#3-command-pattern) (6 videos)
  - [The room](#the-room)
  - [Room movement](#room-movement)
  - [Actions](#actions)
  - [Execute action](#execute-action)
  - [Go action](#go-action)
  - [Action loop](#action-loop)
- [**4. Overriding Methods**](#4-overriding-methods) (5 videos)
  - [Creating rooms](#creating-rooms)
  - [Calculating neighbors](#calculating-neighbors)
  - [Overriding methods](#overriding-methods)
  - [Joining words](#joining-words)
  - [Decorating rooms](#decorating-rooms)
- [**5. Interfaces**](#5-interfaces) (6 videos)
  - [Items](#items)
  - [Inventory](#inventory)
  - [Using items](#using-items)
  - [Interfaces](#interfaces)
  - [Creating a backpack](#creating-a-backpack)
  - [Creating a chest](#creating-a-chest)
- [**6. Interaction**](#6-interaction) (4 videos)
  - [Creating a key and gold](#creating-a-key-and-gold)
  - [Populating items](#populating-items)
  - [Take action](#take-action)
  - [Use action](#use-action)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing with C#](#continuing-with-c)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Programming an object-oriented text adventure game](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/programming-an-object-oriented-text-adventure-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/programming-an-object-oriented-text-adventure-game?u=76281980&t=0)** - [Instructor] In this course we're going to learn the basics of [[Object-Oriented Programming (OOP)|object-oriented programming]] by creating a simple text adventure game. While there's lots of content out there on the theory behind object-oriented programming, I wanted to take a more hands-on approach by actually seeing how the core concepts of encapsulation, inheritance, polymorphism, and abstraction work. By the time you're done with this course, you'll have learned the skills you need to start building apps and games that take advantage of object-oriented programming in C#. And what better way to take a staple of the '80s gaming scene and rewrite it in a modern way? Hi, I'm Jesse Freeman and welcome to "Object-Oriented Programming with C#." Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (4)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is intended for intermediate developers that have a basic knowledge of how C Sharp works, have experienced writing classes, and want to learn more about the concepts of [[Object-Oriented Programming (OOP)|object-oriented programming]] and practice. I'm going to assume that you've already read a little bit about the theory behind object-oriented programming or come from a language that uses it. You'll need to get .NET 6 set up on your computer but any future versions of .NET will work, since the code we'll be writing will focus on the core features of the language. If you do not have .NET set up, please go ahead and download a copy of Visual Studio for the Mac or [[Windows]]. It'll automatically set up your dev environment and make it easier to code our game. You can also use Visual Studio Code, but you'll need to download the C Sharp plugin and manually set up the .NET SDK on the command line, which I won't be covering in this course. Once you have everything set up, you'll be ready to code along as we build our text adventure game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), [[Windows]] (1)
> **Prerequisites:** set up (5), you'll need (2)
> **Env Vars:** net (4), sdk (1)
> **Tools:** visual studio (2), command line (1)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 1. Using .NET 6

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up .NET 6](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/setting-up-dot-net-6?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/setting-up-dot-net-6?u=76281980&t=0)** - [Instructor] So once you have your IDE installed, it's time for us to create a new project. For this course, I'm going to be using Visual Studio for the Mac but it'll be very similar to Visual Studio and [[Windows]]. To get started, we'll click new and select a console application from the default C# templates. When you're ready, hit continue and make sure you're on .NET 6.0. And then we can name our project, oop-adventure. Let's uncheck the put the project in a sub folder so that all of our code exists in the root and then we'll select use [[Git]] [[Version Control]] so that you can can version control your code as you work through the course. When you're ready, hit create and Visual Studio will load up the default project. As you can see, it'll automatically open the program C# file which if we look in our solution is the only code file in this template. Let's go ahead and delete all this code since we won't be using Hello World and let's ask the player what their name is when they start up the game. In order to do this, we'll use Console.WriteLine and we'll pass it in a string. "Hello, what is your name?" Now, if we were to run this, the program would automatically exit since there's no code blocking it from quitting. One thing that we can do is read the console and see what the player enters back in. In order to do this
>
> **[1:31](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/setting-up-dot-net-6?u=76281980&t=91)** we're going to create a variable and we're going to set it to the value that's returned when we call Console.ReadLine. Now, if we run our program you'll see that it asks the player what their name is, and if we type in our name and hit return, it exits the program. So let's go ahead and add a little bit more code in order to tell the player that we've read their name correctly. But first, let's make sure that if the player doesn't enter a name that we set this to a default value. So in this case, we'll create a condition, if the name equals String.Empty, we're going to go ahead and set the name equal to a string, "No Name" and now let's go ahead and print the name back to the console. In order to do this, we'll create a new Console.WriteLine, and in the string we'll write "Welcome" and create a token. We'll use this token to replace with the player's name once we read it from the console or if we set it to the default value, then just write to your OOP Adventure, then let's pass in the name. If we pass in any additional arguments to the Console.WriteLine, it'll automatically replace it with the [[Tokens]] in the string. In this case, name will replace the zero token. Now let's save our code and run it
>
> **[3:04](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/setting-up-dot-net-6?u=76281980&t=184)** and we should be able to ask the player what their name is, if we hit return, it'll default to No Name, but the program exited. If we click on the terminal, you'll see that No Name was printed to the console. Since we're creating a command line game, it's going to be a little difficult to figure out what's going on, especially when the game keeps quitting on us. So one thing we can do is use the debugger. In order to do this, if you click on the left gutter of the text file editor you'll get a red circle and you'll see that the line is now highlighted in red. Now when we go back to debug and run our game, you'll see that it'll ask us for our name. Let's hit return and now it's going to stop at line eight. Here, you're going to see where the code stopped, and if we look at locals we'll see all the variable names that are local to this scope, in this case the main one we're looking at is name, "No Name". This is a useful feature to make sure that the code that's running under the hood is working the way you're expecting it to and if you need to take a look, you can always add a break point and go ahead and examine what each of the variables or other properties are. When you're done, stop the program, remove the break point and we're ready to go to the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (2), [[Windows]] (1), [[Git]] (1), [[Tokens]] (1)
> **Tools:** visual studio (3), terminal (1), command line (1)
> **CLI Commands:** make (3), git (1)
> **UI Navigation:** click on (2), open the (1), go to (1)
> **Env Vars:** ide (1), net (1), oop (1)
> **Versions:** 6.0 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)

#### [Classes](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/classes?u=76281980&t=0)** - [Instructor] Up until this point, our program's been very basic. This is [[Functional Programming]], every line gets executed in order and once all the code is done executing, the program quits. This is how coding used to be 30 plus years ago. Now, when we talk about object oriented programming, we can get into how to build more complicated logic and scale it. [[Object-Oriented Programming (OOP)|Object-oriented programming]] is based on the concept of wrapping code around logic in special containers called objects. In C#, we use classes to define each of these objects. Classes represent a template for how an object should behave and what it should store or expose to other objects. But instead of talking about the theory, let's just go ahead and make a new class and see how it works. The first thing we'll do is go back into our solution, right click in our project and add a new folder. We're going to call this Src. We'll use this to organize the code in our project. Once you've created the source folder, right click again, go to add, and create a new class. You'll see that Visual Studio has several templates, for this we're going to use the empty class template and we're going to call this Character. When you're done, hit return or create and you'll see that Visual Studio has automatically created an example class for us. But let's go and create our own class. So we'll start by deleting all the code in the template and we'll start with a basic namespace.
>
> **[1:36](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/classes?u=76281980&t=96)** A namespace allows you to avoid naming conflicts with the classes in your program. Let's say you download a library from someone else, they may have classes with similar names. In order to avoid the conflict, what we wind up doing is putting each of our libraries or code into its own namespace and this helps ensure that we don't run into any issues when we're compiling our code if the compiler can't figure out which class to use. The namespace we're going to use for our game is going to be OOPAdventure. Next, we're going to go ahead and create the class from scratch. In order to do this, we're going to use a keyword called public. This lets the compiler know that this is going to be accessible by any other class in our program. Next, we're going to use another keyword called abstract. Normally when you create a class, you might just go in and create a public class and start adding your code but we're going to use the abstract key to let the developers who are using your code know and the compiler know that this is not a class that can actually be instantiated. This is going to be a base class that other classes will extend off of in order to get their logic. Now that we've defined that this is an abstract class, we can finish writing the class container. Now we have our first class, Character, but it doesn't really do anything. So what we need to do is add a constructor. The constructor is what is called when the class is created.
>
> **[3:13](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/classes?u=76281980&t=193)** You can put any code you want inside of a constructor in order to set up the class once it's initialized. In order to do this, we're going to create a public constructor and we're going to pass in an argument for the character's name. Next, we're going to want to assign this to a variable so we'll use a capital N for Name, in C# we use capital letters to define the name of any public field or property. Next, we're going to set it equal to the name that's actually passed into the class. This way we don't have a conflict and it's important to make sure that you rename your internal variables different than the variables that are coming in through the arguments so that you don't accidentally set the variable to something else and not set it on the class instance. But in order for this to work, we need to define our first property. So to do this, we're going to create a public string Name and we're going to mark it with a get set keyword, which will automatically have the compiler generate the code needed to make this name getter and setter work. Now we have our first class. Remember, we can't directly instantiate the character because of the abstract keyword. The Character class has a public property called Name and when we create a character, it requires a name argument
>
> **[4:47](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/classes?u=76281980&t=287)** that we can save to the property itself. Next, we'll look how to extend this when we create our player class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** make (3)
> **Exercise Files:** template (3)
> **Tools:** visual studio (2)
> **Definitions:** is an  (1), is called (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Extending a class](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/extending-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/extending-a-class?u=76281980&t=0)** - [Instructor] Now we have an abstract character class, but we can't directly instantiate the character so we're going to need to create a new character called Player. One class can inherit logic from another class. In C# we call this extending a class. The new class can use all the same variables and functions from the base class while adding custom logic unique to the specific class you're defining. Let's take a look at this in action. Let's open up our solution panel, right click on the source folder, and add a new class. We're going to call this player, next we'll select all the code and delete it and create our own name space. Now we can go ahead and create our player class. We'll start by using public class and we want the player to extend the character. In order to do that, we need to tell the compiler that there is a relation between the two. After we define the class's name we can use a colon and point it to a class it should inherit from. In this case, it's going to inherit from character. Now we can close the class just like we would any other class, but you'll see that the player has a red line under it because the compiler is telling us that there's something wrong. The character base class has a constructor that requires a name and the player is inheriting from the character class,
>
> **[1:33](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/extending-a-class?u=76281980&t=93)** but we are not doing the same thing. So we're going to need to create a constructor for the player that accepts a single argument called name that we can pass back up to the character class so that it could save it to the name property. To do this, we'll just create a new constructor, pass in a name, and then use a colon and the keyword base, and pass back the name to the character base class. Once we close this, you'll see that we now can compile this because the player is giving the character class the name that it requires. It's important to note that we can use logic in the player's constructor to change and manipulate the name variable. But one thing that's going to happen is that whatever gets passed into the player's constructor immediately gets passed to the character. If we wanted to manipulate the name in any way, we can do it after that step in the player's constructor, but then we're going to have to save it back to the field manually. This is an important thing to understand when we're inheriting from another class, because now any logic we put into the player's constructor is executed after the character constructor is called when this class is created. Let's save our code and add the player to our game. First, we're going to need to include the name space that our character and player are part of.
>
> **[3:07](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/extending-a-class?u=76281980&t=187)** We'll do this by adding using OOPAdventure to the top of the program file. Now let's create an instance of the player. We'll create a new variable, we'll call it player, and we're going to set it equal to the keyword new player, and we're going to pass in the name variable we set prior. Once you save your file, you'll see all the errors go away and we now have a player that accepts the name. Let's make sure that we're actually setting this value and able to read it by going to the next line and replacing name with player. And remember, we're going to use a capital N for the name since that's the public property, and save it. If we run our code, it's going to look and act exactly like it did before. You'll see that it exits, but if we go back to the terminal you'll see us now showing my name. But let's take a look at what's happening under the hood. If we create a new break point again, and then rerun our program. It'll ask us for our name, we'll hit return and now we have a new local variable called player and we see we have an instance of the player class. If we roll over player inside of our code, you'll see that we can expand it. And now that the debugger is going to show us all of the public properties on the class itself. So here we can see that there is a player class
>
> **[4:44](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/extending-a-class?u=76281980&t=284)** and it has a public property called name that's set to no name. Again, this is an important technique to use when you want to see what values are being set on instances of your classes, and also to get a better sense of the structure of what's publicly available in each of the classes that you instantiate. Now we can stop the debugger, remove our break point, and we're ready to go on to the next lesson.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2), we call this (1), is called (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Scope

[↑ Back to Table of Contents](#table-of-contents)

#### [Scope](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/scope?u=76281980&t=0)** - [Instructor] So now let's take a look at how scope affects classes. For this example, we're going to create a base language class and an English class that extends it. We'll use this to store all of the text for our game. Let's go into our solution and into our source folder and create a new folder and we'll call this text. While we're in here let's create another folder called characters, and we'll move our character and player classes into that folder. This will help us keep our code organized as we continue to add more to our game. Let's right click on the text folder and create a new class called Language. We can delete all the code from the template and create a new name space for OOP Adventure. Now let's create a new abstract class for language. This abstract class is going to contain all the properties for all the text inside of our game. Whenever we need to reference a piece of text, we'll look at a class that extends the language class in order to get that string and display it to the console. Let's take a look at creating some of these now by creating our first property called Welcome. Previously, we used the get and set keywords to automatically create a getter and setter for our property. Sometimes we don't want other classes to be able to access or set values of these properties
>
> **[1:36](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/scope?u=76281980&t=96)** and that's when scoping comes into play. Normally you can use the protected keyword similar to public in order to make sure that no other classes are able to access that property. But if you use the private keyword, any classes that extend it aren't going to be able to access it the same as they would as if it was set the public. So what we need to do is use another keyword called Protected for our setter. Let's go ahead and set this to an empty string and then we can copy this so we can add the next two lines of strings to our class. After welcome, we'll do choose your name, and the final one will be default name. Now it's time for us to create our English class. Let's go to our solution, right click on the text folder, add a new class, and call it English. We'll delete all this code. We'll add our name space and create a public class English that extends language. Now the English class will inherit all of the properties from our language class. Let's go into our program and create a new instance of our language. We'll do it at the top just under where we include the name space and create a new variable called language, and we'll set it to a new instance of English. Next, let's select the Hello string and cut it.
>
> **[3:12](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/scope?u=76281980&t=192)** We'll come back to that later. We can now reference the Language.ChooseYourName property in order to write this to the console. Since we haven't set the value, if we ran the game, it would just be an empty string. Let's go ahead and change the value of that string before we output it to the console. We'll use a reference to language, we'll select choose your name, and set it equal to the text that we previously cut. If you save your file, you'll notice that the compiler isn't happy with this, and that's because choose your name is actually set to private, and you can't access it outside of the class itself. In order for this to work, we're going to need to change it, either in the base class Language or in the child class English. Let's select the Choose Your Name equals in string, cut this, and remove the reference to language. Now inside of our English class let's go ahead and create a constructor and paste in the Choose Your Name with the string. Now, if we run our game you'll see that the English class, when it's constructed, sets the value of Choose Your name to the string Hello what's your name, and we're referencing it now in our program. This is a very important concept in object oriented programming. One, scope plays an important role as to how you protect the data inside of classes. Also, we are now referencing English
>
> **[4:50](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/scope?u=76281980&t=290)** instead of a default language class. What that means is that if we wanted to create another language like Spanish, we can create a new language class Spanish, extend language, and just set the choose your name to a string in Spanish. Then in our program, we can simply instantiate Spanish, get all the same properties from language, but change the language without having to change any of the other code since we're simply referencing the property of our base language class. Next, we'll take a look at how to access this language throughout our entire program.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), select the (2), go to (1)
> **CLI Commands:** make (1)
> **Env Vars:** oop (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Singleton](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/singleton?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/singleton?u=76281980&t=0)** - [Instructor] When we talk about building a full OOP app, we can implement several [[Design Patterns]], which are solutions to common problems we find when designing complex systems. A common one is how do you access a single instance of a class throughout your application? There's a simple design pattern to solve this called the singleton pattern. We're going to build one to create a way to access a single instance of the language class, wherever we need to display text. Let's start by creating a new class called text, inside of our text folder. We'll create our name space, and then we're going to create a new public class called text. But before we actually define the class, we're going to use a new keyword called static. This tells the compiler that there should only be one reference to this throughout the entire system. So let's go ahead and finish creating our class, and you'll see how static plays a key role into how we define a single instance of our text class. The first thing we're going to want to do is make sure that there's only one reference to an instantiated language. In order to do that, we're going to create a new private field, called language. We're also going to use the static keyword to define that this property will exist across all instances of the particular class. What that means that instead of actually referencing a new instance of text,
>
> **[1:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/singleton?u=76281980&t=94)** you can reference the text class itself, and its property, since it's actually attached to the class and not the instance. You'll see how this works in a little bit. Since this is going to be a private field, we use the underscore and lowercase letter to define its name. This helps us know which properties, and which fields are private, and are not public or accessible, just by looking at how the name is defined. Now we need to create a new constructor that forces only a single instance of language to be created. But we can't use the regular constructor, we're going to have to use a static getter, in order to return an instance of the language class. Let's look at how that works. We're going to create a new public static language property, with a single getter. It'll return an instance of the language class. Let's create the getter, and instead of having the compiler automatically generate it, we're going to add the logic inside of it. First, we want to test to see that the language field is set to null. This check ensures that no other instance of the language class has been implemented yet. If for some reason this is null, we're going to want to throw an exception that tells the compiler that a language hasn't been loaded yet.
>
> **[3:08](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/singleton?u=76281980&t=188)** If the language field is not set to null, we're going to want to return a reference to that instance. Now, whenever we want to access the current language, all we need to do is reference the text.language getter. The last thing we need to do is instantiate the language, we'll do this by creating a new public method, that will allow us to register a single instance of our language, that can be used throughout the [[Representational State Transfer (REST)|rest]] of our game. We'll make this a static method. It'll have no return type. And we'll call the method load language. It'll accept a language as an argument. Next we'll set the language to our static language field. Make sure you save your changes. Once you've saved your code, we can now go change how to create the instance of the English class, so it can be accessible by any other class in our game. We'll go back to the program, and delete the line where we define our language. Now we're going to reference the class itself, by typing out text. Notice how we're not creating a new instance of text, that's because we're going to call the static method on the text class directly. Let's use load language, and pass in a new instance of English. Now we're going to go and replace where we reference the language, and access the text.language property,
>
> **[4:44](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/singleton?u=76281980&t=284)** which will give us access to the choose your name. Now we can replace the rest of our text with a reference to our language class. Let's cut the value from no name, and make it Text.Language.DefaultName, and go back into our English class. And now set the property for default name, equal to that string. We'll do the same thing for our welcome text.
>
> **[5:22](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/singleton?u=76281980&t=322)** Now we have a single way to access text throughout our game. If we wanted to make different languages, you could just register them with the singleton, and all references to the singleton's language property will return a localized text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Design Patterns]] (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** oop (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Partial classes](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/partial-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/partial-classes?u=76281980&t=0)** - [Instructor] Now it's time to look at a different way to organize the business logic of our classes. A partial class consists of several different code files that are concatenated into a single file by the compiler. The logic for the class is broken up like this to make it easier to organize business logic and to use compiler flags to choose which part of a class to compile or ignore. Think about making a desktop and web application. Some logic will only work on the desktop and others in the browser, so we break out parts of the class into separate files and only include the correct one when compiling. Let's take a look at how this works. We're going to create a new class called house inside of a folder called map in our source directory.
>
> **[0:53](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/partial-classes?u=76281980&t=53)** Now that we have the house class, we can use our namespace and begin writing out our partial class. In order to do this, we're going to use the key [[Microsoft Word|word]] partial when defining the class name. We can still use public, partial, class, and house. This partial keyword is going to tell the compiler to look at any other files in our project that are partial class house, and it's going to concatenate them all into a single file when it compiles. This will become clear as we break out the business logic for the house in our game. Our house is going to need a reference to the player, but we only want to be able to get that reference and not be able to set it externally. So let's create a public field called player and we're only going to use the get keyword. Next, we're going to need a private field to store the randomization that we'll need for our game. Since we only need to create this once, we're going to use a keyword called read only. This keyword tells the compiler to automatically set the value of the field when we're compiling and it can't be changed at runtime. We're going to use a reference to the random class and call it underscore rnd and create a new instance of it and pass in the number one, two, three, four.
>
> **[2:29](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/partial-classes?u=76281980&t=149)** We're using some shortcuts here that are unique to .NET6. As you can see, we don't have to write the word new random. We can just write new and pass in the default argument. The random class requires a seed. The seed is what allows you to have a predefined start point for the randomization. That means that every time we run this program, because we're using the same seed, we'll always get the same random results. If we wanted this to truly be random, we would simply pass in a unique number every time we start our game up. This is a great way to debug any code that requires randomization because you can use the seed to share with your testers to make sure that they're always accessing the same random numbers that you're seeing when you're doing your development. Now let's create a constructor to pass our player reference into. You'll see that we are setting the player field to the argument value of the player that is passed into the house as constructor. Since we're doing this inside of the constructor itself, we don't need a setter, the class is automatically going to set it for us. Since we don't have a setter, this also ensures that no other class can change the reference to the player inside of the house. Now let's go back into our program and create a new variable for the house and we'll pass the player in. Now we have a reference to our house
>
> **[4:01](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/partial-classes?u=76281980&t=241)** and the house has access to the player. Let's go and add one more file that will contain all of the move logic for having the player move around the house. We'll go back into our solution and in the map folder, let's right click, let's add, and select new file. Since we've already created a house class, we can't add a new partial class using this template. So select the miscellaneous and just create an empty text file. We're going to call this house.move. Make sure to add the .cs extension so that the project knows that this is also a C# file. When we create partials, we'll use the base name of the class and then any other descriptor after a period before we have the C# extension. Now we can add our namespace and then create a new partial house class with additional logic. For now, let's just create two methods that we'll fill in later on. The first will be public void go to room that will accept an integer for the index and the next is going to be go to starting room. Now if we run our program, our house class will have reference to the house.move file just as if we had one main class file with all the logic self-contained.
>
> **[5:38](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/partial-classes?u=76281980&t=338)** The last thing to keep in mind is that you can't override any logic in another partial class. These aren't inheriting from each other. They're literally being concatenated together into a single file every time you hit compile.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** net6 (1)
> **Exercise Files:** template (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)


### 3. Command Pattern

[↑ Back to Table of Contents](#table-of-contents)

#### [The room](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/the-room?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/the-room?u=76281980&t=0)** - [Instructor] The room class is going to be a key part of our house. Each house instance will have multiple rooms and each room will have its own unique name, location and items. The first thing we need to do is define all the directions you can move from room to room. To do this, we're going to create a new enum called Directions. Since we're going to replace all the code, you can either choose to use the empty class template or the empty enumeration template.
>
> **[0:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/the-room?u=76281980&t=34)** Let's make a public enum called Directions and inside of it we're going to add none, north, east, south, and west. An enum is going to allow us to avoid accidental typos when we're comparing directions inside of our game. Each value inside of an enum represents an integer. So none equals zero, north equals one, east equals two, so on and so forth. This allows us to avoid what we call magic strings which is when you use a string to compare two values. If you have a typo, sometimes it's hard to debug where that typo is when you're typing out strings by hand. Now, when we compare each of the directions the player wants to move against the directions enum, we can use the compiler to let us know if we have any errors in our code. Now we're going to be using the program language and English classes a lot, so I'm going to pin them to the top of my editor. And inside of the languages class, I'm going to create two more properties that represent the name and the description for the room. Now we can go into the English class and add the values for these strings. We're going to create a template for the default room name that says room
>
> **[2:08](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/the-room?u=76281980&t=128)** and the zero token will be replaced by the room's unique ID. And in parentheses, we'll replace the one in two [[Tokens]] with its X and Y position on the grid. This will help us debug later as we move around from room to room. For the default room description, we'll add the following string. For this string template, we're going to replace the zero token with all the directions you're able to move based on the room that you're in. Now it's time to create our room class.
>
> **[2:50](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/the-room?u=76281980&t=170)** Now we need to set up the room's name and description properties. We'll sign them to the values that we just created on our language class. Now we're going to need a dictionary that represents all the neighbors that this room can have. We're going to type it to our direction enum and int. We'll call it neighbors and instantiate it with some default values. We'll set each one of these neighbors to negative one, letting us know that there is no neighbor in that direction. Finally, we'll need to set a property that the room has been visited. Now that we have our directions and our room set up, the next video we're going to learn how to set up the logic to move from room to room.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **Exercise Files:** template (4)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Room movement](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/room-movement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/room-movement?u=76281980&t=0)** - [Instructor] Now that we've created the room and defined the directions you can move, let's go in, add the basic logic into our house class that'll allow the player to move from room to room. First, we're going to go back into our house class and we're going to add three more properties. The first property is going to be the width and the second property is going to be the height. This will define the size of our house as a grid. Our house is going to be made up of several columns and rows of rooms. In order to keep track of all the rooms in the house, the next property we're going to create is a rooms array. We're going to keep the rooms inside of a one dimensional array. This will be easier for us to work with versus a nested array or a 2D array, which would allow you to have one array with several arrays for each of the rows. We're going to use some simple math later on that'll allow us to calculate which room we are in and what the correct index is inside of our one dimensional array. Now let's go to our house.move partial file and add the [[Representational State Transfer (REST)|rest]] of our move logic. The first thing we're going to need to do is add a public property that represents the current room that the player is in. We'll store a reference to the current room that the player is in so that we can access it anywhere inside of our game. Next, in our go to room method we're going to need to test that the current room is not null.
>
> **[1:39](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/room-movement?u=76281980&t=99)** If there is a current room we're going to set its visited flag to true before we change rooms. Now we need a reference to the new room. We'll do this by setting the current room to the index of the room's array. Now the last thing we need to do is create the logic that allows us to start in a specific room. We'll do this by calling the go to room method and pass in a random number. We'll use the reference to the random number we saved in our house class, use the next method, and set the range from zero to the total numbers of rooms. Now we have all the logic the player needs to move from room to room. In the next video, we'll begin to create an action that'll allow this to happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Actions](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980&t=0)** - [Instructor] We're going to use a new design pattern called the command pattern. In the command pattern, we use classes to execute a single command. You might be used to this in any program that has undo and redo. Every action you perform is a command that is placed into a stack and the user can traverse it to move forward or backwards through history. The beauty of the command pattern is that each command instance has all the logic and state it needs to execute. So it's self-contained and not dependent on any other logic. To get started, let's create a new folder called Actions. And we'll create an abstract action inside of it.
>
> **[0:49](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980&t=49)** Now that we have our name space, let's create our abstract class action.
>
> **[1:01](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980&t=61)** Each action inside of our game is going to have a unique identifier called the name. We're going to create a property for the name and we're going to mark it as virtual. Which tells the compiler that other classes that extend the action class are able to override the getter and setter of the virtual property. We're also going to use a shortcut to tell the compiler to automatically generate the getter for us. By using the equal and arrow sign. This means that the name will be set to an empty string on the base action class. It's up to us now, when we create our own actions, to override the name property and set it to the unique value for that particular action. The next thing we need to do is have a way for our action to be executed. This is going to be called externally by the action manager. Each of the actions we create will do their own set of logic whenever execute is called. This way, the logic for the action is encapsulated inside of the individual action class. To do this, we're just going to create a new public virtual method called Execute. Our actions are going to need to know additional things about what they should do outside of their own scope. We'll use a string of arguments to pass in whenever we execute an action that'll tell it what to do. In the case of a go action that allows the player to move
>
> **[2:35](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980&t=155)** from room to room, we're going to need to pass in the direction that the player types. Go is the name of the action, and the direction is what the execute method will accept. Since this is an abstract class and there is no logic inside of execute, we're going to want to throw an error. In the event that we create an action, and we forget to call Execute. Here, we're going to throw a new exception saying nothing to execute. Now, if we create a new action and forget to override the execute method, and call it, our game is going to throw an error. This is a good reminder to other developers who extend from your own classes and forget to add logic, that they need to do something in order to override the base class and add their own logic to make things work. Now that we have our base action, it's time for us to create an action singleton that will allow us to execute the actions the player wants to use. Now that we have our name space, we're going to create a singleton, similar to how we did with our text class. For this singleton, we're going to use a new keyword called Sealed, that tells the compiler that this class is going to be unmodifiable. This is just another layer of protection you can use to ensure that other classes can't tamper with or extend from classes you want to define as a singleton. Just like before, we're going to need to create
>
> **[4:07](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980&t=247)** a static property that represents the single instance of the actions class. Next, we're going to create an instance getter that will return a single instance of the actions class. This differs slightly from the text singleton that we created earlier, because in that case, the text singleton wrapped the language class and returned an instance of a language. In this case, there can only be one class that executes actions inside of our game. So whenever we call the actions class instance, we're going to be getting a reference to a single instance of the actions class, and this ensures that there's no other place where actions are being registered that we don't have access to. So now, when we do our check to see if the instance is null, we create a new instance of actions. Now that we have an instance, we can return it. Finally, we're going to create a private constructor that's going to ensure that there's no way to create an instance of the actions class outside of the instance instantiator. The last thing we need to do, is now create a dictionary that'll contain a collection of each of the actions that we register with the actions class. Notice how we're using the readonly keyword, because we don't want to modify this dictionary
>
> **[5:41](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/actions?u=76281980&t=341)** outside of the class itself. We're going to type it to a string as the key and an action as the value, and call it underscore registered actions. And since it's read only, we're going to create a new instance of the dictionary as its default value. Now, we have all the logic that will allow us to create a single actions instance that we can use anywhere inside of our game.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1), is called (1), is an  (1)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Execute action](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/execute-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/execute-action?u=76281980&t=0)** - [Instructor] The last thing we need to do in order to have our actions work is to be able to register them with the singleton and execute them when the player uses one. Let's go ahead and create a public method to register an action. Inside of this register method, we're going to get the name of the action and change it to lowercase. The reason why we convert the name to lowercase is that we don't want the player to have to worry about what case to use when they're typing in the action name. This way, all the actions will eventually be converted to lowercase so that they match up when we compare them. Now we need to see if the action is already inside of our registered actions dictionary. Here we'll use the dictionary's contain key method and pass it in the name that we just converted to lowercase. If the action already exists, we're going to replace the existing action using the name for the key and the instance of the action for its value. If the action hasn't been registered, we'll simply add it to the dictionary using the name and passing in the action instance for the value. Next, we need to create a new method to execute an action that the player calls. Our execute method is going to accept a string of arguments. If you remember back to when we created the base action,
>
> **[1:37](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/execute-action?u=76281980&t=97)** it accepted a string of arguments when we called execute on the action itself. We're going to pass these arguments into the action that the player calls. First, we're going to need to parse the arguments and figure out which action this clash should execute. Since the player is going to type in their action and use spaces between each of the words in the sentence, we're going to be able to split the string by spaces and we can always assume that the first item in that array is going to be the name of the action itself. So let's create a new variable for that name. As you can see, we're now getting the first value of the argument's array and setting that as the action name. Now we need to see if that action exists inside the dictionary. Just like before, we're going to look to see if the dictionary contains the key for the action name. If it exists, we're going to call execute and pass all the arguments into that action. If the action doesn't exist, we're going to want to tell the player that they couldn't perform the action and give them an error message. We'll do that by printing an error message to the console. Here we're going to create a new property on the the language class called ActionError. Since the property doesn't exist, we're going to automatically have it generated. Since Visual Studio has no context
>
> **[3:10](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/execute-action?u=76281980&t=190)** to what value the action error should be, it looks like it automatically set it to a boolean. If we go into our language file, we can go and replace that and make it a string and set its scope to protected. Now we'll go into the English class and create our error. Now we have all the logic to register and execute an action. We just need to make some actions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Go action](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/go-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/go-action?u=76281980&t=0)** - [Instructor] Now we're ready to create our first action, go. This action will allow us to move between the rooms of the house. Before we create the new action class, let's go ahead and add the text that we need to our language and English classes. We're going to add two more properties that the go action will reference. The first being go, and the second being the go error. Now inside of our English class, we can write go and we can write the go error. Now it's time to create our go action. We'll add this to our actions folder. Now that we have our name space, let's create a new class called go that extends action.
>
> **[0:56](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/go-action?u=76281980&t=56)** The first thing we're going to need to do is create a new name for this action, and we're going to do this by overriding the default name in the base class action. We'll use public override. Make this a string and call it name. If you remember previously we used the keyword virtual inside of our abstract action. Now that we're going to change the value in a child class, we need to use the override keyword to set that value. In this case, we're going to set it to the language go property. Next, our action is going to need a reference to the house. This will allow us to figure out what room the player is in, check the direction of the neighbors, and then decide if it can move to the next room. To do this, we're going to create a private read only field for the house. We're going to need a reference to the house in order for this action to work. So we're going to require a reference to the house when we create the go's constructor. Now that we have a reference to the house, we need a way to move from room to room. We're going to do this by overriding the base class's action execute method. We're going to use the override for the method similar to what we did with our name property. If we wanted to pass values back to the base class, we could use base dot execute and pass the arguments. Since the base action class throws an error
>
> **[2:32](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/go-action?u=76281980&t=152)** if we don't implement the execute method correctly, we don't need to do this, so we'll delete this in case your version of Visual Studio automatically generates it for you. Now we need to add the logic to move from room to room. The first thing we need to do is get the current room. Next, we're going to need to figure out the direction that the player wants to move. So we're going to do some string manipulation to clean up the second argument for the direction that we want to compare to the directions he knew. In order to do this we're going to convert the first character to uppercase, and all of the remaining characters to lowercase. Now we'll use the tri parse method to convert the string to a direction he knew. If it fails, it'll automatically set the direction to none. We're going to use the out keyword to automatically create the variable for the new direction. Now we need to get the index of the room for the neighbor at that direction. We'll do this by looking at the current room's neighbor, and pass that direction into the dictionary to get the value. Remember, if the value is negative one, that means that there is no room in that direction. Later on, when we lay out all the rooms, we'll automatically connect them and put the correct value for the neighboring rooms inside of this dictionary. So now we can do a check to see if the next room index is equal to negative one, or the new direction is set to none.
>
> **[4:06](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/go-action?u=76281980&t=246)** This will tell us that we couldn't go in that direction. In order to throw the error, we're simply going to print the language dot go error value. If there is a room to go to, we're going to tell the house to go to that room. We'll do that by simply passing the next room index into the go room method. Now we have all the logic to have the Go Action execute correctly. All we need to do now is register an instance of the go action with the action singleton. Let's go back to our program, and after we instantiate our house, let's register the new action. Remember, the go action needs a reference to the house in order for it to work. Now we have our first action that's registered and ready to use. We just can't execute it yet because we haven't built out the rooms in the house.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Action loop](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/action-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/action-loop?u=76281980&t=0)** - [Instructor] Now before we can lay out the rooms of the house, we're going to need to create a loop that allows the player to make a request for an action, determine if the action exists, and if it does, execute and then go back to asking the player what to do for the next action. We're going to add this to our program file. Let's go ahead and create a flag that lets us know if the game is running or not. Now that we have our run flag, we need to keep track of the last room the player was in before the previous action. You'll notice here that I'm typing this variable to the room itself instead of the 'var'. When you use 'var', the compiler will automatically type it to the variables value that it's set to. In this case, the last room is set to null, so it won't know which class to actually type it to. So we have to clearly define that this last room variable is of type room. Now we're ready to run our while loop and will continue to run it as long as run is set to true. The first thing we're going to do in our loop is test to see if the last room is not equal to the current room. If the player enters a new room, we're going to print a description of the room to the console. In order to do this, we're going to use the current room's 'ToString' method. All of our classes inherit a C sharp object and that object has its own methods
>
> **[1:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/action-loop?u=76281980&t=94)** and properties that you can access at any time. The 'ToString' method is built into every object in order to convert the object into a string that you can use for debugging. We're going to take advantage of this later on by overriding the 'ToString' method of the room to describe itself. But for now, let's go ahead and save a reference to the last room so that we only describe it when the player enters a new room. Now that we've tested whether the player is in a new room or not, we need to ask the player what they want to do. Let's go into our language and create a new property, 'WhatToDo'. In our English class, we'll set the value of 'WhatToDo' to the string, 'What to you want to do?' Now we need to capture the input from the player in order to figure out what action they want to do. We'll create a new variable for the input and read the console line. Whenever we accept input from the player, we're going to automatically set it to lower case. This way, we don't have any errors around comparing case. And later on in other parts of the program, we'll convert the case to what we want it to be internally in order for everything to work. So now that we've captured the player's input, we should first check to see if the player is trying to quit the game. We'll test that the input equals the 'Language.Quit' property. We'll need to add a new property for quit
>
> **[3:09](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/action-loop?u=76281980&t=189)** in our language class and define it inside of our English class. Since we're converting any of the input the player gives us to lowercase, we're just going to set the quit value to lowercase here so that it matches up correctly. Now we need to add the logic to actually quit the game. All we need to do is set the run variable to false. Now we can route anything else that the player has inputted into the action singleton and allow it to try to execute based on what arguments we pass in. Notice how we're splitting the input string based on the spaces. This will give us all the words in the sentence in the order that we're expecting them. Now, if we run our game, we should be able to use the quit action since the house hasn't been set up and there's no way to navigate around the rooms. It also looks like I have a typo when we ask the player what they want to do. So after we quit the game, we'll go in and correct that. As you can see, the player is now able to quit the game and if we go back into our English class, if you haven't already done it, remove the extra space before the question mark. At this point, we can't use the go command because it'll throw an error since we haven't defined any logic yet to build out the house's rooms. So let's take a look at that in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Overriding Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating rooms](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-rooms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-rooms?u=76281980&t=0)** - [Instructor] So now that we have our house, a room, and our go action, we need a way of telling the house to create the rooms that go inside of it. We're going to build a grid of rooms based on the width and height of the house. This will take the form of a node structure where each room is connected to its neighbor. That's how we'll be able to traverse them when using the Go command. The create room function we're about to add will handle building the grid and connecting each of the rooms together. Let's get started by creating a new partial class called house.room.cs.
>
> **[0:37](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-rooms?u=76281980&t=37)** (computer keyboard clicking) Now that we've added the name space, let's go ahead and create our partial class. Let's go ahead and add our first method. I mentioned earlier that all the rooms are going to be kept in a one dimensional array, but we need to look at the house based on its columns and rows, or its width and its height. In order to match up a room based on where its column in row is we're going to need to do a little bit of math to calculate the index where it would be in the array. Let's go ahead and create a private method called Calculate room index that returns an int. We'll also need to pass in the column in a row of where we expect the room to be. We can calculate the index by adding the width and the height values together then multiplying it by the width of the grid. We're also going to use math.clamp in order to make sure that the column and row provided are within the boundaries of the grid. You'll see that for the minimum value of clamp, we're using negative one. If you remember how we were calculating the room's neighbors, negative one means that there's no neighbor. So if we happen to go out of bounds, we'll return a value of negative one, letting us know that there's no room to find. Now we can add a public method called Create Rooms in order to build out the node structure. (computer keyboard clicking)
>
> **[2:13](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-rooms?u=76281980&t=133)** This method will accept a width and a height that represents the grid of the house. Now the first thing we're going to do is we need to save the dimensions of the house that are being passed into the method. (computer keyboard clicking) Notice how we're using math.clamp on the width argument that's being passed in to make sure it's within the range of two to 10. Also, we're saving it back to the width property inside of the house itself. You can tell the difference because we're using a capital W for width, for the property, and a lower case width for the argument. Sometimes this gets a little confusing. You can also use this.width if you want to be specific on the scope of where the property exists. But since using this naming convention, it should be a little easier to see that we're not manipulating the actual width argument. We're simply saving it to the width property. Let's go ahead and do the same thing for the height. (computer keyboard clicking) Next, we'll need to calculate the total number of rooms in the house. We can do this by multiplying the width by the height. Again, it's important to note that I'm using the width and height properties of the house itself and not the arguments that are being passed in. Next we'll create a new array that'll store all of our rooms. We'll set the room length to the total number of rooms in the house. Now all we need to do is loop through each of the rooms, calculate where they are in the grid, and then give each room a unique name.
>
> **[3:48](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-rooms?u=76281980&t=228)** After that, we'll do a little bit of math to calculate the neighbors and then we should be able to create a house with rooms. (computer keyboard clicking) Let's create a for loop that iterates over the total number of rooms. Next, we'll need to create a room. So let's make a variable called temp room and store a new instance of the room class. (computer keyboard clicking) Now we need to calculate the column and row that the room is inside of the grid. We'll use IMOs width in order to calculate the column, and I divided by width for the row. The last thing we need to do now is give the room a unique name based on its index, its column and its row. (computer keyboard clicking) If we go back into the English class, you'll see that the default room name has three [[Tokens]], zero, one and two. We're going to be using the string format in order to pass those values in and to replace the tokens with the index, the column and the row. Now that a room has a name. In the next video we'll look at how to connect each of the rooms to its neighbor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2)
> **Non-Speech:** (computer keyboard clicking) (7)
> **CLI Commands:** make (3), node (2), find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Calculating neighbors](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980&t=0)** - [Instructor] Now that our room has a unique name, let's go through and do a little bit of math to calculate each of its neighbors.
>
> **[0:16](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980&t=16)** First, we're going to check that the column is less than the width minus one. That'll let us know that it's within the width of the grid. Next, we're going to set the neighbor to the east by calculating the rooms index of the current column plus one and the current row. We're going to do something similar for west, south, and north as well. Let's take a look.
>
> **[0:47](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980&t=47)** For the neighbor to the left, we're going to calculate the room index by subtracting one from the column. Now let's look at the south and north neighbors.
>
> **[1:02](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980&t=62)** In order to calculate the neighbor to the south, we want to make sure that the row is less than the height minus one and then we'll use the calculated room index with the current column and add one to the current row. And last, we can calculate the north neighbor.
>
> **[1:27](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980&t=87)** Now that we've calculated all of our neighbors, the last thing we need to do is save the room to the correct position in our rooms array. Now we have all the logic to lay out the house and its rooms. Let's take a look at how it works. We'll need to go back into our program and after we create the house, we're going to call the house.CreateRooms method. And we'll create a house that is three columns wide and three columns high. Now, after we register our go action, all we need to do is tell the house to go to the starting room. Let's run our code and see if we can move from room to room.
>
> **[2:14](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/calculating-neighbors?u=76281980&t=134)** It looks like everything is working. The only thing is that we're not getting a very good description of what the room actually looks like. So we'll take a look at and fix that in our next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Overriding methods](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980&t=0)** - [Instructor] Now it's time for us to create a more unique description for each of the rooms. In order to do this, we're going to look at overriding the ToString method of the Room class. Children classes can override the logic of any parent class. This is one of the key principles of object-oriented coding. While most people think of doing this with custom classes, there are a number of base methods each class inherits in C# that can also be overridden. Let's take a look at how we do this to the logic of the two string method in our room class. Before we do that, we need to add a few things to our Language and English class to start. Let's go ahead and add three properties. The RoomNew property, will be what we show the player when they first enter a room. The RoomOld property, is what we'll show them when they return to the same room they've already visited. Finally, the And property is what we use when we concatenate each of the directions the player can move inside of the room together. Once you've done that, we'll go into the English class and set the values for each of these properties.
>
> **[1:09](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980&t=69)** The New Room value will be a template that says "You entered" and will use a single token. The RoomOld property will be the template that says "You return to" and uses a single token as well. Finally, the And property will just be the [[Microsoft Word|word]] "and". Now let's go into our Room class. At the end of the class, we're going to override the ToString method. Since we going to be creating our own logic to define what the string of the room looks like, we can remove the return base.ToString altogether. The first thing we need to do is create a new instance of the string builder. This is a class that's part of .net which helps you manipulate strings faster than if you'd simply do it by hand. Now in order to use the string builder, we going to need to import its namespace. We'll add using System.Text, to the top of our class. Now we need to check whether the room has been visited to so that we show the right template.
>
> **[2:22](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980&t=142)** Here we use the string builder's append method to format the RoomOld property string, and replace the token with the name of the room.
>
> **[2:40](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980&t=160)** If the room hasn't been visited yet, we'll show the RoomNew template and we replace the token with the room's name as well. Next, we need to get a list of all the directions that you can move to from inside the room. Before we can calculate what directions the player can move, we need to get a list of all the names of the directions. We can do this by converting our directions Enum, into a list of strings. Here you'll see we're using a static method GetNames, that's part of the Enum class and we're looking for the type of directions. This will return each of the directions as strings instead of numbers. Now we can iterate through each of the directions looking for valid neighbors and add it to an array. Let's start by creating a new array called Var directions and we're going to put our link statement inside of a parenthesis. Link is a shorthand way of doing queries inside a C#. Normally we could just do a for loop and do this by hand but we're going to use link in order to search for us and make this into an array. So now that we have an array of names from our directions Enum, it's time for us to test each neighbor, and see if it's greater than negative one. Instead of writing a for loop and doing this by hand, we're going to use link to do a query to look through each of the neighbors for us.
>
> **[4:15](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980&t=255)** We'll start by creating a variable for directions and we're going to set it equal to our query statement. We'll start by wrapping it in a parenthesis and using the link from term to iterate through each of the names in the array. P will represent a single direction from the Names array. We then (indistinct) convert P back into an enum by looking at the neighbor's array, we typing it as a directions enum and then using the Enum.Parse method. This allows us to parse in an Enum, by using the typeof(), in order to define the actual Enum's type and then we'll parse p(n) in order to convert that back to the correct Enum. That means if our name is North, it'll convert North back into directions.North, and look inside of the neighbors array for the northern neighbor. Now that we have the neighbor, we can check that it's greater than negative one. If it passes the test, we're going to select P which is the name of the direction we're currently on, and convert it to lower case. Now this is going to return a list so we're going to convert the entire thing to an array. The last thing we need to do now is create our description. We'll start by making a new variable called description.
>
> **[5:38](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/overriding-methods?u=76281980&t=338)** Now we're going to use the string format to take the current room's description and concatenate it with a list of the directions that are valid. We're going to stub out a method that we're going to create in the next video called JoinedWordList that accepts an array of directions and a word to combine them. The last thing we need to do is append the description to our string builder. And now that we've created the new description, we can return the entire thing by calling the string builder's ToString method. In the next video, we'll cover how to do a joinedWordList inside of our Language class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Exercise Files:** template (4)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** joinedwordlist (1)
> **Speakers:** - [instructor] (1)

#### [Joining words](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/joining-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/joining-words?u=76281980&t=0)** - [Instructor] So now that we have the basic logic in order to describe the room, we're going to need to come up with a way of joining each of the directions that the player can go in in order to add it back to the description. To get started, let's go into our language class. We're going to add two more properties to this class. The first will be a property for the comma and the second will be a property for the space. Now let's go into our English class and set these two strings. Now it's time for us to add the logic for our joined [[Microsoft Word|word]] list method. In order to do that, we're going to create a new partial file that will add the functionality onto the existing language class. We're going to call this file language.helpers.cs. Now let's go ahead and set up all the boiler plate code we need to create this partial class.
>
> **[1:02](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/joining-words?u=76281980&t=62)** In the previous video, we created a new instance of the StringBuilder every time we called to string on the room. Since we know we're going to be using StringBuilder a lot, it doesn't make sense to keep creating a new instance of it in this helper method. So we're going to create a new private read-only field that'll contain an instance of the StringBuilder we can reference every time we need to join a word list. Don't forget to import the StringBuilder's namespace. Now we can create our joined word list method. We're going to make this a public virtual method because each language may have a different way of concatenating a list of words, so we know how it works in English and other languages that are based on English, but if we ever need to create a new language class, we want to have the ability to override the joined word list in order to add that custom logic. As you can see, our method accepts a string list of words and a string conjunction to add them together. Since we're going to be reusing the instance of StringBuilder over and over again, the first thing we want to do is clear it so we don't have any strings before we start making our list. Next, we're going to loop through all of the words and we're going to test to see when we get to the last word and add the conjunction before we concatenate our last word in the string array.
>
> **[2:39](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/joining-words?u=76281980&t=159)** Now we're going to create a for loop so that we can iterate through each of the words in the array. The first thing we're going to do in the loop is test if we need to add a comma or not. We can start this by testing to see if I is greater than zero. Next, we need to append a comma and a space or a space depending on what position the word exists inside of the array. Now it's time for us to decide whether we need to add a comma and a space or just a space based on the length of the word's array. We'll do this by appending a new string to our StringBuilder. And when we do the appending, we're going to test to see that word.length is greater than two. We're going to make this a condition, so we can start by adding a question mark for the first part of whether this statement is true, and if it's true, we're going to return a comma plus a space. We can use a colon for the false value, and if this is false, we're just going to return a space. This way we don't add commas to any list of words that are less than two words long. Next, we need to test if we're at the end of the list and see if there are any more directions so that we can decide whether we need to add the conjunction or not. Here we're going to test whether I is equal to the last word in the array, remember that arrays are zero-based so we need to subtract one from the length
>
> **[4:13](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/joining-words?u=76281980&t=253)** in order to get the last index, and we also want to make sure that the words array is greater than one because we don't want to add the word and if there's only one word in the list. Now we can append the conjunction and additional space to make room for the final word in the list. And now we're ready to add this word to our string. Now that we have our list of words, it's time for us to return it by calling the StringBuilder's two string method. Now, before we can test that this works, we're going to have to make one more modification to our language class. Let's go back to our language class and make this a partial class. Now the compiler will add the new method we created into the language class when we build and test the game. Now that we're able to create the room's unique description, let's test out our code and see if each room tells the player which directions they're allowed to go. As you can see, we're starting out in room three and it tells us that there are doors to the north, east, and south. If we go east, this room will now tell us that there's rooms to the north, east, south, and west since we are in the middle of the grid. It looks like I've noticed one additional typo. From the statement of you entered room and then you are in room, we need to add a space between them. So let's stop our game, go to English, and add a space inside a default room description.
>
> **[5:55](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/joining-words?u=76281980&t=355)** Now when you re-run the game, you'll see that we tell the player that they entered a room, there's a space, and we tell the player what doors that they can go through. In the next video, we'll look to see how we can make this description a little bit more unique by adding random adjectives to the word room inside of our string template.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (15)
> **CLI Commands:** make (8)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Prerequisites:** set up (1), before we start (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Decorating rooms](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/decorating-rooms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/decorating-rooms?u=76281980&t=0)** - [Instructor] Right now our rooms are kind of boring, so let's take a look at a way to change the description to something a bit more interesting and random. We'll need to add some descriptions to the language class first. Let's create a new property for the room descriptions and we'll type it to a string list. Next, we'll need to go into our English class and add the descriptions. We'll add the following strings to our list. Normal, cold, warm, dark, bright, scary, and strange.
>
> **[0:39](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/decorating-rooms?u=76281980&t=39)** Before we leave this class, we need to modify our default room description to add an additional token where we can insert one of these descriptions. Don't forget to change the original token to 1. This way, the compiler doesn't throw an error when we try to use string.format. Now it's time for us to create a new partial class called House.Decorate.cs. Once you've added the boiler plate code, we need to create the partial class for house. Let's add a new method called decorate rooms. Now we need to iterate through each room in our room's array and add a new description to it. We'll use a four each loop to do this. Now it's time for us to create the room description. We're going to select the first item in the room descriptions list so that each room, if it doesn't have a random name, defaults to the [[Microsoft Word|word]] normal. Now we're going to create a condition that'll test to see how many items are still in our room description list and if it's greater than one, we'll randomly pick whether we should add a new description or not. We'll use our random next using a range between zero and two, and if it equals one, that means that we'll change the description of the room. Here we'll pick a random description from our Text.Language room descriptions list and we're going to use the random next with a value
>
> **[2:14](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/decorating-rooms?u=76281980&t=134)** between one and the length of the room descriptions in order to choose which description we add. It's important to note that we're starting our random range at one. This means that we'll always have at least one item left in our room descriptions list so that each room can default to the word normal. Now that we have the new description, we're going to remove it from the list so we don't use it again. The last thing we're going to do is change the default room description and replace the first token with our new room description and convert the second token back to zero. By changing the second token back to zero, this ensures that when we lay out each of the rooms, the name will be set correctly. Now all we need to do is call this method inside of our program. We'll add a line after where we create the rooms in order to call house. DecorateRooms. Now, if we run our project, we should see that each room has a new description. As you can see, the room to the east of the first room we start in is now a scary room. If we go north, it looks like we're in a bright room. And if we go west, it looks like we're in a strange room. So now our new descriptions are working exactly how we intended.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Definitions:** means that (2)
> **UI Navigation:** select the (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 5. Interfaces

[↑ Back to Table of Contents](#table-of-contents)

#### [Items](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/items?u=76281980&t=0)** - [Instructor] Now it's time for us to add something for the player to do. The house will have several items in it, and before we can build them, we'll need to create an abstract class that represents what an item can do. Let's go ahead and create a new folder called items, and add a new items class to it.
>
> **[0:26](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/items?u=76281980&t=26)** After we've added our name space, we can go ahead and add the public abstract class item to our file. The first thing we need to do, is create a new property for the items name. Each of the items in our game will have a unique name, that can be used to find it in the inventory. Since we're going to be extending this class, we need to make sure that we use the virtual keyword, so that we can override the name in the children classes. Some items will be single use, meaning they are removed from the inventory after being used. In order to do this, we're going to need to create another property called single use, that's a Boolean, and we can change that flag to true or false, depending on whether the item has been used or not. In addition, some items can be taken. This flag will allow the game to know what to do when the player attempts to pick up an item. Let's add another Boolean called can take to our class, and automatically set it to true. Finally, we'll need to create a virtual method that we can override, that defines what happens when an item is used. The use method will require a string as an argument, called source. The source is what is actually using the item, and we'll use this in the game to better understand what is triggering the item's usage. Since this method is designed to be overwritten in children classes, we need to throw an error, in the event that we extend this class, try to use it, and haven't overwritten the method.
>
> **[1:59](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/items?u=76281980&t=119)** Previously, we used the throw new exception, but there's another type of error that we can use, specifically for this instance. It's going to be called the not implemented exception. Now if we extend this class, and try to call use without overriding it, we'll get an error that this method hasn't been implemented yet. And now we have the basic outline for what an item is, up next, we'll start adding all the logic we need to contain items inside of an inventory.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Inventory](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/inventory?u=76281980&t=0)** - [Instructor] In order for us to store items, we're going to need an inventory. This class is going to be shared by the player and the room since both of them will also contain items. We're going to use a new design pattern called composition. This is the act of wrapping one class around another to augment its functionality. In this case, we are going to build our inventory on top of the .NET list class and add some additional logic to fit within the requirements of our game. To get started, let's create a new inventory class. Let's add our name space and create the public inventory class. The first thing we're going to need is a list of items that we can use to store what is inside of the inventory. We're going to create a private property called Items that's typed to the List item class. We're going to make our Total property public. It'll return an int and we're going to delegate it to the Items.Count. What we're doing now is simply telling the compiler, whenever we access the inventory's Total property, it's the same thing as calling the item's list.count property. We're going to continue to wrap this list with some additional methods that'll help us as we add some custom logic that's unique to just the inventory itself. We're going to create a public method called Add that accepts an item. Instead of [[Routing]] the inventory's Add to the item list Add method
>
> **[1:33](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/inventory?u=76281980&t=93)** we're going to create our own method, and I'll illustrate that even though we're calling the item's Add method and passing it the item, we could also add some additional logic before we call the Items.Add method in case we want to check whether the inventory is full or if the item already exists. Let's go ahead and do the same thing for the Public.Remove method. We'll simply call the Items.Remove method and pass it the item that's supplied to the Inventory.Remove method. At this point, our inventory works just like the default list class. In the next video, we'll add some additional methods to customize how this list will work in our game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** net (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Using items](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/using-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/using-items?u=76281980&t=0)** - [Lecturer] Now that we have our default logic for the inventory in, let's add some custom methods that'll allow us to find and use items. We're going to start by creating a public method to find an item. For this method, we're going to use the return type as item, but we're going to add a question mark at the end of the type. This tells the compiler that we might be returning null instead. So if we can't find an item, we're going to return null and we'll be able to check that in other parts of our code to see if an item exists or not. Now we need to loop through each of the items in our items list and see if the name matches the one that's supplied to the method. Now that we have our for loop, let's add the condition to test for the name. We're also going to use the question mark for the item when we're comparing the name to the item name that's supplied to the method. This ensures that if for some reason the item in the it's array is set to null, we don't call a property that doesn't exist on it. Now all we need to do is return the item if the it's name matches the item name argument supplied to the method. The last thing we need to do is return null in the event that we don't find the item after we've looped through all the items in the item list. So what happens if we want to remove an item once we find it? Instead of modifying our original find method, we can overload it and create a new method
>
> **[1:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/using-items?u=76281980&t=94)** that accepts an additional parameter to remove the item once it's found. Let's go ahead and create another public method called Find, but this time we're going to supply an item name and a Boolean to mark whether it should be removed or not. The first thing we're going to do is try to call the other Find method and see if the item exists. So we'll create a new variable called item and then call the Find method and pass in the item name. Next, we're going to write a condition that test to see if the item is not null and if the Remove flag is set to true. If we found an item and we need to remove it, all we need to do now is call the remove method on our inventory class. The last thing we need to do is return a reference to the item itself. Just like the original find method, if the item is set to an actual item in our list or to null, we'll return that and we know what to expect. If we call Find and we pass in a Boolean, it'll automatically route this to our Find method that enables us to find an item, remove it, and return the item from the list. This is how we'll take things out of our inventory when we're ready to. Now that we have our Find method, we can add a contains method to see if the item exists inside of the inventory. Our contain method will return a Boolean
>
> **[3:08](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/using-items?u=76281980&t=188)** whether we found an item or not. And inside of our contain method, we're going to return a reference to calling the Find method and comparing what gets returned to whether it's null or not. In this case, when we call Find(itemName) != null, all we're doing is checking the item is not null. So if the item exists, it'll return true, if the item is null, it'll return false. Now we can create a public method to make it easier to take an item out of the inventory. Let's create a public method called Take. Now this is adding a little bit of syntactical sugar to our class in that we can normally just call Find and pass in true for the removed Boolean and that would actually remove the item and return what it finds. But that's not always intuitive to other people who are looking to use this code as well. For them, they may be looking for a take method so all we're doing is creating a new method with a clear name that calls functionality that already exists inside of our code. In this case, our Take method is simply returning the Find methods item with a flag to remove set to true. At this point, we now have all the logic we need to actually use an item inside of the inventory. Let's create a public method called Use, and we'll pass in an item name and a source for what is using the item. The first thing we're going to do is try to find the item
>
> **[4:42](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/using-items?u=76281980&t=282)** if it exists in the inventory. Next, we need to test whether the item is null. If the item isn't null, we're going to call the it's use method and pass in the source. Next, we need to check whether the item is single use or not. If the flag for single use is set to true, we're going to remove the item from the inventory. Now that we've found an item and we've attempted to remove it, the last thing we need to do is just exit out of this method with a return statement. In the event that we don't find an item to use, we're going to want to print an error message back to the console. In this case, we're going to add a new property to our language class called No Item, and we'll pass in the item name to replace the token we use in our string. Let's create a new public property called No Item on our Language class. And finally, inside of our English class, we're going to set the property of NoItem to a string that says, "You don't have" with a zero token. That token will be replaced by the it's name the player tended to use. At this point, we now have all the logic we need for our inventory to work. Up next, we'll take a look at how we can make the player and the room both act as inventories too.

> [!info]- Semantic Content
>
> **CLI Commands:** find (20), make (2)
> **Code Identifiers:** itemname (1)
> **Analogies:** just like (1)
> **Speakers:** - [lecturer] (1)

#### [Interfaces](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/interfaces?u=76281980&t=0)** - [Instructor] Up until this point we've been hard coding all of our types to classes but one of the advantages of [[Object-Oriented Programming (OOP)|object-oriented programming]] is that we can use something called interfaces to decouple our code. An interface is a contract between two classes that define all of the public properties and methods that can be used. Earlier I talked about how the player and the room are both going to need to act as inventories. We can't have those classes extend inventory so instead we're going to add all the properties and methods of the inventory through composition, similar to what we did with the inventory class, and how we added logic on top of the [builtin.net](https://builtin.net) list class. Let's look at how this'll work. First, we need to create an interface, so we can do this by refactoring our existing inventory class and pulling out all the public properties and methods. Let's go back to our inventory class and right click on the inventory, select actions and refactoring, and then choose the extract interface from the dropdown menu. There'll be a similar way to do this in Visual Studio and any other C Sharp editor. This is going to show us all the public members of the class that we want to expose to the inventory. It's also going to create a class for us called iInventory, interfaces get an additional i before their name. This way, you know what is an inventory and what is a concrete class. We're going to leave everything checked and hit okay. Visual Studio is now going to create the interface for us.
>
> **[1:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/interfaces?u=76281980&t=94)** All we need to do is add our name space. Now it's time for us to make our player act like an inventory. If we now go back to our inventory class you'll see that our inventory now extends the interface. What this means is that the inventory has to implement all of the public properties and methods we defined inside of the inventory's interface. For example, if we delete the ad method you'll see that the compiler's going to give us an error, because we need the ad method in order for this to actually be an inventory. Now let's take a look at how we can turn the player into an inventory. Let's select our player class file and after we tell it to extend character, we're going to add a comma and add the interface. Just like before, it's going to give us an error because we're not implementing any of the properties that make an inventory an inventory. Now, before we start doing that, let's create a read only field to store reference to an inventory inside of the player itself. Then inside of the player's constructor we're going to create a new reference to the inventory class we previously created. Now that we have a reference to the inventory and we're creating an instance of the inventory, we can now have Visual Studio map all of the interface properties
>
> **[3:07](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/interfaces?u=76281980&t=187)** over to the reference of our interface field. To do this, simply hover over the interface and then select implement interface through underscore inventory. What this is going to do is route all of the properties and methods to our inventory class, just like we did before when we created the inventory, and we routed all the properties and methods that we needed to the list class. Once the code's been generated make sure you save your work in the file. Now the player has all the APIs to act as an inventory, even though the player is not directly extending an inventory itself. Now let's go and do the same thing for the room. Since the room doesn't extend any other class we're simply going to have it implement our inventory. We'll also need to create a reference to the inventory we can store inside of the room. Since we don't have a constructor for the room, we can just instantiate the inventory when we create an instance of the class like this. Now, let's go ahead and generate all of the methods that we need to make this an inventory. Once the code is generated, make sure you save your work. Now the player and the room can both act like inventories. This means that we don't need to explicitly type our games logic to a player or a room. They are now interchangeable thanks to the interface, and we call this decoupling, and better yet,
>
> **[4:40](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/interfaces?u=76281980&t=280)** if we added some new kind of inventory to the game later on, we don't need to update our room or player as long as the new class uses the same interface. Think about if we wanted to add a shop to our game. We're taking an item cost money, and adding an item gives money back. The player and the room will both be able to use this, since they are able to implement any instance of a class that is also of a Type I interface. Now, before we move on, what happens if we need to add new logic to our interface? Let's create a new property that allow us to return an array of all the items names. First, let's go back to our interface. Now we're going to create a new public property called Inventory List that returns a string array. We want this to be read only, so we're only going to add a getter. Now, let's go back into our inventory, as you can see, the compiler is giving us an error and that's because we haven't implemented this new property. Now let's have Visual Studio implement the interface for us. As you can see, it's created the new property and assigned it to throw a new not implemented exception. We can go ahead and delete this and add in our own logic. In order to make this work, we're going to use Link again to select all of the items names, and return an array. Here link is going to select each of the items in our list, get the name and convert it to an array.
>
> **[6:16](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/interfaces?u=76281980&t=376)** Now, in order for this to work, we need to go and implement this property on both the player and the room. Again, we can have Visual Studio implement this through the underscore inventory field. And that's how we add new properties and methods to any class that implements an interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** make (6)
> **Tools:** visual studio (5)
> **Definitions:** is a  (2), is an  (1), means that (1), we call this (1)
> **Analogies:** just like (2), similar to (1), for example (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (1), dropdown (1)
> **Code Identifiers:** iinventory (1)

#### [Creating a backpack](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=0)** - [Instructor] Now that the player has an inventory, we'll need an action to see what's inside of it. We can do this by creating a new action called Backpack.
>
> **[0:14](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=14)** Let's go ahead and add our name space and create a new public class called Backpack that extends the action class. The first thing we need to do is create a private read only field to store a reference to an inventory. We're going to type this field to the interface so that any class that implements the inventory interface can be explored by the Backpack. That means if we created a store like we talked about in a previous example, we could pass a store to the Backpack action and it could use the same APIs that are defined in the interface to read back the contents of the store just as easily as it'll be able to read back the contents of the player's own inventory. Now let's go ahead and create our constructor. Inside of our constructor, we're going to get a reference to the inventory we want the Backpack to explore and set it to the private field of the inventory inside of the Backpack itself. Now we need to give this action a name, so we're going to override the base action classes Name property and set it to the [[Microsoft Word|word]] Backpack. We're going to have to create a new property called Backpack on our Language class
>
> **[1:39](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=99)** and inside of our English class, we'll set the value of Backpack to the string Backpack. Now let's return to our Backpack class. Now we need to override the base action classes Execute method in order to add the logic that'll let us display the contents of the backpack to the player. As you can see, we're going to create a public method that overrides Execute and accepts a string array called args. Let's delete the call to the base classes Execute method since we won't be using it, and we'll add in our own logic. The first thing we need to do is create a new variable called items and get an array of all the item names. Now let's create a condition that tests the length of the items array and sees if it's zero.
>
> **[2:38](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=158)** If there are no items in the array, we want to throw an error and we're going to call this property BackpackError. Let's go ahead and add it to our Language class.
>
> **[2:54](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=174)** And inside of our English class we'll create a new string for the error. Now let's return to the Backpack action. After we've displayed the error, let's return out of the method. Now, if there are items in the array, this condition will be skipped and we can go ahead and display them to the console. First, let's join all of the item names using our JoinedWordList method that we added to the Language class a couple lessons back. Here we'll pass in the reference to the items array and we'll use the And string. Now we can print the list to the console.
>
> **[3:45](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=225)** All we need to do now is create a string template to put all of the words in the list inside of the BackpackDescription.
>
> **[3:58](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=238)** In our English class, we'll set the value of this property to a string that says, your backpack contains: and will use a token set to zero. Now we have all the logic to let the player look through their inventory, all we need to do is register this action and give it a reference to the player which implements the inventory interface that allows the action to work.
>
> **[4:27](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-backpack?u=76281980&t=267)** Now that we've registered our Backpack action, let's go ahead and run our game and see if the command works. It looks like the Backpack action is working since we don't have anything inside of the player's inventory and it's showing us the error. In the next video, we'll look into how to add another type of inventory to our game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Creating a chest](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=0)** - [Lecturer] It's time to create an item that contains other items. The Chest will extend item but implement the IInventory interface as well so we can leverage all the same APIs. This way we can have a Chest inside of a room that contains additional items. Let's create a new class called Chest.
>
> **[0:27](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=27)** The Chest is going to be our first item in the game so we'll make a public class that extends item and we'll have it implement the IInventory interface. Before we have Visual Studio add all of the properties and methods from the interface, let's go ahead and add a few fields. The first field we're going to create is a reference to the house. We'll use this to find the player and add items to the player once they take them out of the Chest. The second field is going to be an inventory and we'll create a new instance of the inventory. Now that we have our field for the inventory, we can go ahead and implement all the other methods for the IInventory interface. Next, let's go ahead and override the name of the item and set it to a string that says Chest.
>
> **[1:26](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=86)** Now we're going to need to add the Chest to our language and English classes. While we're here, we'll also create a property for what happens when you unlock a Chest and for the next item we'll need to create called the Key. In our English class, we'll go ahead and give these properties values.
>
> **[2:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=120)** Also pay attention to the fact that each of the items names are using a lowercase letter to begin with. Once that's been created, we can now go back to our Chest and add the [[Representational State Transfer (REST)|rest]] of our code. Since we want the Chest to be locked and the player needs to have a Key in order to unlock the Chest, we're going to need to create a boolean called locked and we're going to set it to true by default. Now we're going to create the Chest constructor. The constructor will accept an items array and a reference to the house. Since we can also pass in null and have no items inside of the Chest, we're going to use the question mark before we define the brackets of the item array. Now, if you remember when we created our item, by default the can take flag is set to true so we're going to need to change that in the constructor. This will ensure that the player can't accidentally take the Chest from the room. Next, we're going to need to set the reference of the house that's passed into the constructor to the field we created earlier. And finally, we're going to loop through each of the items in the array and we're going to add them to the inventory inside of the Chest class. Now the only thing left to do is to create our method for what happens when the player uses the Chest. We're going to need to override the base class's use method
>
> **[3:36](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=216)** and we'll delete the call back to the parent method. Before we can use the Chest, we need to check the source of what's using it and make sure that it's coming from the Key. After we've passed this check, we need to get a list of all the items inside of the Chest. We'll do this by creating a new variable called items and we'll set it to the value of the inventory list property on the Chest itself. Next, we need to check whether the Chest is locked. If the Chest is locked and the player uses the Key, we're going to want to let the player know that they just unlocked the Chest. Now we need to check how many items are actually inside of the Chest. Here we're going to create a condition to see the it's length and then we're going to set this equal to zero. Inside of our if condition, we're going to test to see if the items.Length equal zero. If the Chest is empty, we're going to want to display a message onto the console. Let's go ahead and add this property to the language and English classes just like we did before. We're going to set the property to ChestEmpty equal to a string that says, "The chest is empty." Now let's go back to our Chest class and add the rest of our code.
>
> **[5:11](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=311)** Next, we'll add a condition. If there are items, we're going to want to display what we found inside of the Chest.
>
> **[5:24](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=324)** Let's go ahead and also add this property to the language and English classes too.
>
> **[5:38](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=338)** Two, we'll set the ChestFound property equal to a string that says "You found". and we'll use a token to list all the items inside of the Chest. Now back in our Chest class, we can pass in the list of items. In order to do this, we're going to need to use the string format on the ChestFound string and pass in a joined [[Microsoft Word|word]] list of items using And.
>
> **[6:15](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-chest?u=76281980&t=375)** Now we need to add each of the items from the Chest into the player. In order to do this, we're going to create a foreach loop that gets a reference to each of the names of the items. Next, we'll create a variable called item and we'll take it from the Chest inventory. Next, all we need to do is get a reference to the player from the house instance and add the item to the player's inventory. At this point, we have all the logic we need for the Chest and the next set of videos we'll create the items we need to interact with the Chest and we'll put something inside of the Chest for the player to take.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [lecturer] (1)


### 6. Interaction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a key and gold](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=0)** - [Instructor] Now that we've created the chest, it's time to make a key to unlock it and gold to find.
>
> **[0:13](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=13)** Let's go ahead and create a new key class for us to work with. After you've added the name space and have created the public class key that extends item, we can begin adding the code that makes the key work. The first thing we need to do is add a private field to store a reference to the house. Next, we'll create a constructor for the key and we'll pass in a reference to the house. Now we can save the reference of the house to the house field in our key class and let's make sure that we toggle the CanTake and single use flags in the base item class. We want to make sure that the key disappears from the player's inventory once they use it. This will ensure that the player is able to pick the key up and that it disappears from the player's inventory after it's been used. Now let's go ahead and override the name property from the item class and set it to key.
>
> **[1:27](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=87)** Next, we'll need to override the use method in order to make the key work. We'll delete the call to the base class. And now all we need to do is tell the current room of the house to use the chest and we pass in the name of the key.
>
> **[1:53](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=113)** If you remember back to the previous video, whenever we use the chest, it looks to make sure that the source says key. And since the name of our key is set to the string key, it'll confirm that it's being used by the player and it'll open up the chest. Let's go ahead and create the last item in our game, gold.
>
> **[2:26](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=146)** After you've created the name space and the public class, Gold, that extends item, let's go into the language and add three strings we'll need to make the gold work. Now let's go ahead and add the values for these properties to our English class. For gold, we'll create a template that has two [[Tokens]] with the [[Microsoft Word|word]] gold in the middle. The first token will be the number of gold and the second token will be coin or coins based on whether the value is greater than one. Now we can go back to our gold class. Next, let's add a constructor for our class,
>
> **[3:14](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=194)** And we're going to create a new property, called Value, that accepts the integer that's passed into the gold's constructor. Next we'll set the CanTake flag to true. Now we're going to override the name property from the item class, but whenever we get the name of the gold, we're going to return the number of coins that are in the gold class.
>
> **[3:51](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/creating-a-key-and-gold?u=76281980&t=231)** Inside of our getter logic, we're going to create a new variable called ending and we're going to test to see if the value equals one. If it's true, we're going to return the word Coin. If it's false, we're going to return the word Coins. Now what we need to do is format the Language.Gold property and add the value and the ending. One thing to note that when we add the value into our format method, we're going to want to convert the integer into a string, so we'll just call the two string method. At this point, we now have all three items for our game and we're ready to start adding some logic to be able to add them to the house as well as use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Tokens]] (1)
> **CLI Commands:** make (6), find (1)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** toggle (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Populating items](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=0)** - [Instructor] Now that we have our items, we're going to need a way to randomly add them to the rooms in our house. This is going to be relatively easy. Let's open up the House.Decorate partial and add a new method. (keyboard keys clicking) We're going to call this method PopulateRooms, and it's going to accept a list of items as its argument. Next, we're going to need to iterate through all of the items and add them to the rooms. Let's create a new variable called i and we'll set it equal to 0. Next, we're going to use a while loop to continue to go through all of the items in the list until we've run out of items to place. This while loop will continue to run as long as i does not equal the total count of items in the list. Now we need to pick a random room. We'll create a new variable called room, and will randomly choose a room from inside of the Rooms array. We'll make the range start at 0 and end at the length of the Rooms array. Now we need to check if the room has an item or not. Since the room is implementing the i Inventory interface, we can use the Total property to see how many items have been added to the Rooms inventory. We want to check to make sure that it's 0.
>
> **[1:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=94)** This way, we're only adding items to rooms that don't have items. Now let's go ahead and add the first item in the items list to the random room. Now that we've added an item, we need to increment i so that we can eventually exit the while loop once all the items have been placed. Now we just need to go back to our program file, go to where we decorate the rooms, and after it, let's create a list of items to populate each of the rooms with. We're going to create a new variable called items, and we're going to make this list tied to the Item class. Inside of it, we're going to create a new key that gets a reference to the house, and then we're going to create a new Chest, and inside of that we're going to create an array of items to go into the chest, and we'll have it contain an instance of the Gold with 100 coins as the first item. The last thing the chest will need is a reference to the house. Now that we have our items, it's time for us to add them to our rooms. Now we can call the House.Populate rooms and pass it in the list of items. Now at this point, we should have all the items in the room but we have no way of telling that they exist. So we're going to have to go back to our room and modify the ToString method in order to display what items are actually in the room. Before we do that, let's add a few properties to our Language class. We're going to need to add a property called Plural,
>
> **[3:07](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=187)** a property called Is, and a property called Are. Next, let's set the values of these in our English class. (keyboard keys clicking) Now that we have our new properties, it's time for us to go and modify the room. Navigate to the ToString method and before we return the string builder, let's go and add a new string that'll display all of the items that exist in the room. The first thing we're going to do is create a condition that tests the total of the Inventory class to make sure that it's greater than 0. Now that we know that items are in the room, let's go and get a list of each of the items names. We'll create a variable called items and set it to the value of the _inventory.InventoryList property. Now we need to do a little bit of work to clean up the grammar of the sentence we're about to add to our description. First, let's create a new variable called pluralPre. Up first, we need to use the correct [[Microsoft Word|word]] based on how many items are in the room. So we'll test whether the items length is greater than 1. If so, we'll use Are. If there's only one item, we'll set it to the value of Is. (keyboard keys clicking)
>
> **[4:43](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=283)** Up next, we're going to create a new variable for the pluralPost. And in this, we're going to again test to see if the items length is greater than 1. If it is, we'll return the value for plural. If not, we'll just make it an empty string. Now before we list out the items, we're going to tell the player how many items are in the room. Let's go ahead and add a new string to our string builder. We're going to call this property TotalItems. Let's go into our Language class and add the new property, TotalItems. (keyboard keys clicking) Now let's set the value of the total items to the following string template. Notice how we have three [[Tokens]] in this string. When we go back into our room, we're going to need to modify the new string that we're appending and call string.Format and pass in the pluralPre,
>
> **[5:57](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=357)** the items.Length, and the pluralPost. The last thing we want to do is create a joined word list with all the items in the room. Here we're going to create a new joined word list using the items array . We'll use And to combine them, and then we're going to create a new property on Language for the period at the end of the sentence.
>
> **[6:34](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=394)** (keyboard keys clicking) Now all we need to do is run the game and walk around the house to see which rooms have items in them. (keyboard keys clicking)
>
> **[6:58](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/populating-items?u=76281980&t=418)** It looks like as we were walking around the house, we ran into an error, and if you see something like this especially when you're using a string.Format, it probably means that you didn't have the right numbering for your tokens. So let's stop the debugger, go into our English class and take a look. And if you didn't catch it while I was typing it, it looks like I have 0, 1, and 3 inside of the TotalItems string. So let's change this to 2 and walk back around the house. (keyboard keys clicking) As you can see, we now have reached the room and in this room there's a chest. It looks like there's one more thing we need to fix inside of our English class. Let's add a space to the beginning of the TotalItems string. (keyboard keys clicking) And now if we go back to the same room, we should see that the sentence is correct. It's telling us that there is one item in the room and the item is a chest. Since we're using the same random seed every time we test the game, the room should be in the same order, with the same descriptions, and the same items in them which will make it easier for you to debug once you find where the key and the chest is in the house. Now all that's left to do is to create our take and use action to finish up our game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Tokens]] (2)
> **Non-Speech:** (keyboard keys clicking) (8)
> **CLI Commands:** make (6), find (1)
> **Code Identifiers:** pluralpre (2), pluralpost (2)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), navigate to (1)
> **Exercise Files:** template (1)

#### [Take action](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=0)** - (Instructor) Now that we've populated our rooms with items it's time for us to go and create a new action to take the items out of the room. Before we do that, let's add a few properties to our language and English classes. We'll need a take, take error, not taken, took description, and can't take description. Now inside of our English class we can set all the values for these properties. We'll set the take property to a string take. The take error property to a string that says there is nothing to take. The not taken property to you can't take that. We'll set the took description to you took a, with a token. And the can't take description to you can't take the, with a token. Now I noticed that I had a misspelling with my took description property. Let's go ahead and double click on our property and go to rename and fix the typo.
>
> **[1:15](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=75)** If we go back into our language class you'll see that the typo has also been corrected there since we refactored the child class. Now that we have all of our language properties let's go ahead and create a new class called take in our actions folder.
>
> **[1:38](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=98)** After you've created the name space, go ahead and create a public class called take that extends the action class. Just like before, we're going to need a reference to the house. Let's go ahead and create a private field that is read only, called underscore house. Next, we'll create a constructor for our take action and we'll need a reference to the house as an argument. Inside of our constructor we can set the house value to the house field in our class. Next, we're going to need to override the action's name and set it to take. Now we can create the code that executes the take action. Let's start by overriding our execute method in the parent class. We're not going to call the parent classes execute so we can delete that and now we can begin adding our own code. Let's start by checking the number of arguments that the execute method receives. Remember that when the player enters text into the console and hits return we're going to split it based on the spaces in the string. So if we see that there's only one item in the argument, that means that the player has only written the [[Microsoft Word|word]] take and hasn't given a target for us to actually take.
>
> **[3:13](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=193)** In that case, we're just going to throw an error for not taken.
>
> **[3:25](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=205)** Once we've displayed the error to the console we can use a return statement to exit out of the method. At this point, we can assume that there's an item to take based on the arguments that are passed into the execute method. We're going to need to get a list of all the items in the room so that we can loop through them and see if any of them match one of the arguments passed in to the method. Let's start by creating a new variable called inventory and getting a reference to the house's current room. Remember, the room is also an inventory so we don't need to look at the room's own inventory. We can use all of the properties from the I Inventory interface. Next, let's convert the item that was passed into the execute method to lowercase. We'll do this by creating a new variable called item name. We'll then look at the second property of the array and convert that to lower case. The zero index of the array is going to be the word take, since that's the action. The one index of the array is going to be the item we're expecting the player to pass in for us to take. Now let's take a look and see if the item exists in the inventory. We'll do this by creating a condition and we'll call the inventory contains method and pass in the item name that we just converted to lowercase. If this is true, we can go ahead
>
> **[4:57](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=297)** and add our next line of code. We're going to create a new variable and get the item out of the inventory. Next, we need to check to see if the item can actually be taken. We'll use a condition and look at the items can take property. If this is set to true we're going to add the item to the player's inventory. We'll also display a message on the console letting the player know that the item has been added.
>
> **[5:39](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=339)** Now if for some reason the item cannot be taken we're going to need to display an error message. We'll create an else statement and inside of it we'll write to the console the can't take description error. We'll also pass in the item's name in order to fill the token for the can't take description template. At this point, we can assume that an item has either been taken or it can't be taken so we can return out of this method. Now all we need to do is write our take error to the console if nothing else has been actually done.
>
> **[6:25](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=385)** Now we have all the code for our take action, we simply need to register it in our program.
>
> **[6:39](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/take-action?u=76281980&t=399)** Once you registered an instance of take we can run the game and see if we can take the key. Here I'm going to move to the room that I found the key in originally when I first started testing the game and now I'm going to use the take command to put the key into the player's inventory. Now what I need to do is look at the backpack to make sure that the player has the key in their inventory. And as you can see, our backpack contains the key. Now we have the ability to take items from rooms, let's add our final action to our game that lets us use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)

#### [Use action](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/use-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/use-action?u=76281980&t=0)** - [Instructor] The last thing we need to add to our game is a way to use the key with the chest. Before we do that, let's go ahead and add the properties we need, in the language and English classes.
>
> **[0:17](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/use-action?u=76281980&t=17)** We'll create a use property, a use success property, and a use error property. In our English class, we'll give each of these properties a value. We'll set the use property to a string, use, we'll set the use success to a string template, you use the with a single token, and the use error to, you can't use that. Now let's go ahead and create a use class in our actions folder. Once you've created your name space, go ahead and create a public class called use, and have it extend the action class. Just like before, we're going to need a reference to the house, so let's create a private, read-only field. Next, we'll create a constructor, so that we can save a reference to the house that gets passed in, when we make a new instance of the use class. Now let's go ahead and override the action class's name property and set it to use. Now we can override the action class's execute method, and add in the logic to be able to use items in our game. The first thing we're going to do in this method is test to see if the length of the ARG's string array is less than one. If this happens, we need to display a use error.
>
> **[1:58](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/use-action?u=76281980&t=118)** After we display the error, we can use a return statement to exit out of the method. Now let's go ahead and get the item we want to use from the first index of the ARG's array. Next, we'll need to see if the player actually has the item in their inventory. We'll do this by creating a new condition, and calling the player's contains method and passing in the item name that we just got from the ARG's string array, that was passed into the execute method. At this point, we can assume that the player actually has the item, so let's go ahead and take it from the player's inventory. Now that we've taken the item, let's tell the player that they're using the item by writing to the console. Now all that's left to do is to actually use the item itself. Here we'll call the items use method, and pass in the item name. If for some reason the player doesn't contain the item that the player wants to use, we're going to display the use error to the console again.
>
> **[3:23](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/use-action?u=76281980&t=203)** Now that we have the logic for our use action, it's time for us to go back into our program, and register the action. Now that we've registered the action, let's go ahead and play our game, see if we can take the key, find the room with the chest, and then use the key to open the chest and get the gold out.
>
> **[4:05](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/use-action?u=76281980&t=245)** As you can see, now that I've entered the room with the chest, I can use the key. The game tells me that the key has been used. I've unlocked the chest with the key, and I've now found 100 gold coins. If I look at the backpack, we'll no longer have the key in the inventory, we'll now have the 100 gold coins. And there you have it, we now have all of the items, actions, and logic to make this simple game work.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Env Vars:** arg (3)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with C#](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/continuing-with-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/object-oriented-programming-with-c-sharp-17331514/continuing-with-c-sharp?u=76281980&t=0)** - [Jesse] At this point, you should have practical knowledge of how [[Object-Oriented Programming (OOP)|object-oriented programming]] works in C#. We've created classes, we've extended them and we've even abstracted them out by decoupling our code and using interfaces for composition. While the game is very basic in its current form, hopefully you have a better sense of the [[Design Patterns]] we have used to add new items and actions to the game. It should be easy to extend any of our base classes and customize the game in order to finish it. If you'd like to learn more about .NET, C# or object-oriented programming, I suggest checking out my other course on C# [[Framework Design]]. Thanks for watching the course and I hope to see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), [[Design Patterns]] (1), [[Framework Design]] (1)
> **Env Vars:** net (1)
> **Speakers:** - [jesse] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/object-oriented-programming-with-c-sharp-2484213)

## Skills Covered

- Object-Oriented Programming (OOP)
- C#

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
**1 of 8** | [[C- Delegates, Events, and Lambdas]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]

## Related Courses

_Courses sharing skills:_

- [[Java Object-Oriented Programming]] — Object-Oriented Programming (OOP)
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Python Object-Oriented Programming]] — Object-Oriented Programming (OOP)
- [[Python Practice- Object-Oriented Programming]] — Object-Oriented Programming (OOP)

---

[↑ Back to top](#)