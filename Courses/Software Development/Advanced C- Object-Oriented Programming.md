---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-c-sharp-object-oriented-programming
url: "https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming"
duration_minutes: 106
duration: 1h 46m
level: Advanced
updated: 10/10/2023
learners: 45099
skills:
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-advanced-object-oriented-programming-4406346/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFEKONg7FNiDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696534679389?e=2147483647&amp;v=beta&amp;t=Ve3tWqEBMkLSRk-m7x-KMhzhSvfdW7rMBasGSrwyQT0"
linkedin_topic: Software Development
learning_paths:
  - '[C- Excellence- Architecting High-Performance Solutions](../../Paths/Software%20Development/Learning%20Paths/C-%20Excellence-%20Architecting%20High-Performance%20Solutions.md)'
prev_courses:
  - '[Advanced C- Language Features](Advanced%20C-%20Language%20Features.md)'
next_courses:
  - '[Asynchronous Programming in C-](Asynchronous%20Programming%20in%20C-.md)'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":4,"total":6,"prev":"Advanced C- Language Features","next":"Asynchronous Programming in C-"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20C-%20Object-Oriented%20Programming.md)

![Advanced C#: Object-Oriented Programming](https://media.licdn.com/dms/image/v2/D560DAQFEKONg7FNiDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696534679389?e=2147483647&amp;v=beta&amp;t=Ve3tWqEBMkLSRk-m7x-KMhzhSvfdW7rMBasGSrwyQT0)

# Advanced C#: Object-Oriented Programming

> There's an old saying that goes "in .NET, everything is an object," and if that's the case, then knowing how to write great object-oriented C# code is an absolute must. In this course, Joe Marini takes you beyond the basics of writing classes and introduces some of the more advanced C# OOP concepts that make programs easier to read and maintain, address common real-world programming scenarios, and

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming) | 1h 46m | Advanced | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Next-level C# OOP](#next-level-c-oop)
  - [Getting set up](#getting-set-up)
- [**1. C# Object-Oriented Basics**](#1-c-object-oriented-basics) (5 videos)
  - [Defining classes](#defining-classes)
  - [Properties](#properties)
  - [Inheritance](#inheritance)
  - [Access modifiers](#access-modifiers)
  - [Anonymous types](#anonymous-types)
- [**2. Class Operations**](#2-class-operations) (6 videos)
  - [Using object initializers](#using-object-initializers)
  - [Read-only members](#read-only-members)
  - [Init-only properties](#init-only-properties)
  - [Required properties](#required-properties)
  - [Challenge: Build an employee class](#challenge-build-an-employee-class)
  - [Solution: Build an employee class](#solution-build-an-employee-class)
- [**3. Static Classes and Methods**](#3-static-classes-and-methods) (5 videos)
  - [Static members](#static-members)
  - [Static classes](#static-classes)
  - [Static constructors](#static-constructors)
  - [Challenge: Add static members to employee](#challenge-add-static-members-to-employee)
  - [Solution: Add static members to employee](#solution-add-static-members-to-employee)
- [**4. Abstract and Sealed Classes**](#4-abstract-and-sealed-classes) (6 videos)
  - [Overview of abstract classes](#overview-of-abstract-classes)
  - [Defining an abstract class](#defining-an-abstract-class)
  - [Abstract methods and properties](#abstract-methods-and-properties)
  - [Sealed classes](#sealed-classes)
  - [Challenge: Abstract employee class](#challenge-abstract-employee-class)
  - [Solution: Abstract employee class](#solution-abstract-employee-class)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Next-level C# OOP](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=0)** - .NET has emerged as one of the premier development platforms over the past 20 years. It was one of the first comprehensive platforms to make [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) a core part of its foundation. Over time, .NET pioneered new features to make object-oriented programming easier, safer, and more efficient. This course will focus on .NET's object-oriented features and how to use them in your own projects. We'll start off with a brief refresher of core object-oriented programming principles, and then get into .NET's features, such as how to enforce data immutability in your classes and how to ensure consumers are using your classes in the right way. If you want to build great software with .NET, then you need to understand its object-oriented features and capabilities, and this course will show them to you. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (3)
> **Env Vars:** net (5)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)

#### [Getting set up](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=0)** - This course is intended for developers who are already familiar with C# And want to learn about some of the more advanced [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) features of the language. You don't need to be a deep expert on C# or .NET but you do need to have an understanding of the basics Such as how to write functions, use variables, and so on. There are a couple of different ways you can work with the example code In this course. I've set up a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with the examples, and you can find it at this link. The course content is organized into two separate folders. There's the Finished folder, which contains all of the code examples in their finished state so you can compare your code against them. The Start folder contains the code examples in their starting state and this is the folder I'll be working in throughout the course as we build towards the finished state for each example. If you want to download the examples and work with them locally in your computer then that's easy enough to do. You can go to the Code menu here and you can clone the repository or you can download a ZIP file and then use your favorite code editor to work on them. You'll just need to make sure that you have .NET installed on your computer. At least version seven in order to use the examples. But this repository has also been set up with a GitHub Codespace. So, you can just work directly online with nothing to install. All you need to do is fork a copy of the repository in your own GitHub account and then fire up a Codespace. And you do that by going here to the Code menu
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=93)** clicking on the [Codespaces](../../Skills/Software%20Development/Codespaces.md) tab and then clicking on this + button. Now you can see I've already done that, right? I've already created this Codespace for myself and this is the Codespace I'm going to be using in this course. Now, either way works fine. You can download the files locally or you can use the Codespace, but I'm going to be using the Codespace feature in this course. So let me go ahead and open up this Codespace. And when the Codespace starts on your computer it may take a minute or two to spin up. So you just need to be patient. And when the code space starts you'll see a browser based version of Visual Studio code and here in the files list are all the files that you'll need for the course. You'll also have a built-in terminal which can be found here in the view menu. You can see down here I can choose terminal, all right. or, to get the terminal using a keyboard shortcut. I type control + ` And you can see that that causes the terminal to appear and disappear. And I'm going to check to make sure that .NET is installed and everything is great. So I'll type dotnet --version and sure enough, I've got 7.0 on my machine. You may also want to make sure that the C# extension is installed. If you click on this icon here in the sidebar, you'll see that I've got a list of installed extensions. Now VS code will probably prompt you to install this extension if it isn't already, but if it's not installed and if VS code doesn't prompt you you can just go to the marketplace. If you go to the search box up here and type in C# you'll see that that takes you to the marketplace.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=188)** And right here you can see I've got the C# extension and you can install it from here. So once you've got your Codespace set up and the C# extension is installed then you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Tools:** terminal (4), github (3), vs code (2), visual studio (1)
> **Prerequisites:** set up (3), install (3), you'll need (1)
> **CLI Commands:** make (3), find (1), dotnet (1)
> **UI Navigation:** go to (3), click on (1), in the sidebar (1)
> **Env Vars:** net (3), zip (1)
> **Exercise Files:** download the (2), zip file (1)
> **Versions:** 7.0 (1)


### 1. C# Object-Oriented Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=0)** - [Instructor] In this chapter, we're going to review some of the basics of [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) as they apply to C#. If you're already familiar with the basic concepts of object-oriented programming in C# and .NET, then you can feel free to skip over or skim this chapter or come back to it as you need to if you want a refresher. We're going to start by reviewing how to create classes and objects in C#. So here in my editor I'm going to open up in the Start folder in chapter one, I'm going to open up the code in my Defining Classes folder. So let's go ahead and open up my shapes.cs file. So to define a class, we're going to use the class keyword. So I'm going to create a class that will represent a rectangle. All right, and I'll put this closing bracket down here. All right, so to define a class, we use the class keyword. And typically when you define a class in C#, you will also create what is called a constructor function for that class. It uses the same name as the class itself and can accept zero or more parameters and is usually used to initialize the state of the object when it is created. So I will define a constructor for this class that takes two arguments or parameters for the width and the height. So this is going to be my rectangle and it's going to take integer for the width and an integer for the height.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=97)** And I'll also add two integer member variables to my class to hold that data and I'll put those down here. So I'll have a public int width, and I'll also have one for height.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=114)** And we're going to learn more about member variables and properties later in the chapter, but for now, you just need to understand that a class can define variables that go along with each instance of the object that gets created. So in the constructor, I will initialize those two members. So width will be equal to W, and height will be equal to H. The constructor, by the way, is not required. If you don't define one, then the C# compiler will create a default constructor for you. And I can also define more than one version of the constructor. So for example, a square is just a special case of a rectangle where all sides are of equal length. So I can define another constructor and I'll call this one once again Rectangle. And this version will only take one argument called side. And I'll just set both values, width and height, equal to the side parameter. And you've probably noticed by now that I'm using this keyword public when I define my functions and my variables. This is something we'll also examine more later on in the chapter. But for now, all you need to know is that when I declare these functions, I have to make them public so that I can access them from outside the code that is defined within the class itself, but we'll cover that a little bit more later.
>
> **[3:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=208)** And then finally, let's add something useful to the class to make it do something. I'm going to add a function called GetArea to return the area of the rectangle. And I'll make that a public function that returns an int and it's going to be called GetArea and it's simply going to return the width times the height. All right, so now we have a class that we can use to create objects and it actually does something useful. So let's go over to the program code. So I'm going to save this and then open up my program.cs file. And let's write some code to create a couple of rectangles. So I'll write the class type and rect1 and I'm going to use the new operator to create a new rectangle, and that one's going to have a width and a height of 10 and 20. And then I'll make another one called rect2 and I'll use the second constructor to make a square with size equal to 30. And then let's also exercise the GetArea function. So we'll write out to the console, rect1.GetArea, and we'll make a copy of that. And we'll do the same thing with rect2. All right, so now we're in a position
>
> **[5:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=303)** where we can exercise the code. What I'm going to do is right-click on DefineClasses and choose Open In Integrated Terminal. And that will bring up my built-in terminal here in Visual Studio Code. And then I can just type dotnet run and that will run my examples. And you can see in the output that we have the area of each rectangle. So the first one is area 200 and the second one is area of 900. All right, so let's go ahead and just change the values of the width and height. So for rect2, I'll change the width to five and rect2's height is going to be seven. And then let's just go ahead and write the area out again. And when I run again, now you can see that the area of rect2 has changed. It started out as 900, now it's down to 35, right? So let's quickly try something else. Let's see why that public keyword is important. What I'm going to do is go back to my shapes code and I'm going to scroll down and I'm going to remove public from these two variable declarations and then I'll try to run my code again, all right? And when I try to do this, so if I do dotnet run again, you'll see that I'm getting an error because if you don't explicitly declare the access type of a function or a member variable,
>
> **[6:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=400)** they default to being private to the class and are not accessible outside the code that is within the class definition. So by making, let's go back to my shapes code, so by making these private, right? I could also just simply declare them as private which we'll learn more about later, but if I don't put any descriptor on here which indicates their access level, they default to being private. So to make sure that I can access them from outside the class code, I have to put public here and when I do that, all right, so let's try one more time. And now you can see that the error is fixed. And again, we're going to learn more about that later in the chapter. But this short sample summarizes how to define and instantiate a class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2)
> **CLI Commands:** make (7), dotnet (2)
> **Cross-References:** later in (2), go back to (2)
> **Tools:** terminal (2), visual studio (1)
> **UI Navigation:** right-click (1), scroll down (1)
> **Env Vars:** net (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### [Properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=0)** - [Instructor] Let's continue our review of C# objects by taking a look at defining properties. Now, an important part of class definition is that classes need to be able to perform various types of logic and expose data. Otherwise, you know, they're not very useful. In C#, we use properties and methods to accomplish this. And the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) method is a fancy object-oriented way of referring to a function that's part of a class. In fact, we've already seen how to define and use a method in the previous example where we created a function named get area to calculate the area of a rectangle. So let's use that as our starting point for this example. And here in my props and methods folder, I'll open up the shapes code and my program code. And then I'm just going to click on this icon to give us some more room to work. So let's update our example to use properties along with the method that we already have. In addition to methods, C# classes can define properties which give us some flexibility in how we expose data from our class. Properties serve as a way to expose a class's data without exposing internal implementation details. So let's update our class to use properties for the height and width variables instead of just having public members exposed like we had in the previous example. So you can see I've removed the public definitions from the members and I'm going to add the code for the properties.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=94)** Now, there's a couple of ways to create properties. They can represent internal variables or they can be what's called auto implemented. So for the height and the width, I'll define two properties and I'll make those public. And one will be called width and one will be called height. And you can see that it's almost like defining a function except that there's no parentheses and no parameters here. So inside each of these definitions I'm going to add a getter and a setter which are responsible for connecting that property to what's called the backing field, which in this case are these two member variables I've added down here. So I'm going to define the getter. So to get the property, I'm going to return my internal width member. And for set, I'm going to write width is equal to, and then there's this special argument called value that gets passed in whenever you set a property. And then I'll do the same thing for height. I'm going to have my getter and I'm going to return the height. And then for the setter, I'm actually going to implement some logic here. So what I'm going to write is if value is less than zero, I'm going to throw an exception. I'm going to throw a new argument out of range exception and that's going to be the height property.
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=191)** And the message is going to be it must be greater than or equal to zero. Otherwise, I'll just simply set height equal to value. And this is one of the nice things about properties is that you can use properties to implement some error checking logic whenever they get set. So now these two properties are exposed to consumers of my class but the internal representation is kept separate. I can change the names of these internal variables now and external classes don't have to worry about that because they're not consuming them directly. They're simply consuming the name of my public properties. Let's also add an auto implemented property to hold the border size of the rectangle. So I'll make a public int and I'll call this one border size. And inside the implementation, I'm simply going to write get, and set. And outside the implementation, I'm going to write equals one. So in this case, I don't define an internal field for this particular piece of data. The C# compiler just automatically creates one for me. So in this case, I've got width and height which represent these two properties. But in the case of border size, I can just use border size directly without having to define an internal member. Right? So now let's go back to our program file and let's operate on our new properties. So for rect1, I'm going to write border size is equal to five, and then we'll just simply print that out
>
> **[4:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=293)** and we'll print out rect1.BorderSize,
>
> **[5:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=302)** and then we'll change the other properties. We'll change the width to five, and we'll change the height to six. And then we'll call get area again. All right, so let's go ahead and try running this. Let's open this up in the terminal and we'll do dotnet run. And in the output you can see that our code is now using the publicly exposed properties. So here's the border size of five, and here's the new updated area of 30, right? So let's try setting the height to a negative value and we'll see that our code catches that. So I'm going to make this negative 30. Now, I'll try to run again. Right, and sure enough, you can see that when I try to run the code, we're getting this argument out of range exception, and it says must be greater than or equal to zero for the parameter of height, right? So properties are really useful for giving your classes flexibility in how they allow other code to work with the internal data of your class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (3), dotnet (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Inheritance](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=0)** - [Instructor] One of the foundations of [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) is the concept of inheritance. And this is the process of defining classes that inherit their properties and methods from parent classes, so that you can reuse and customize the features and logic that they already have, without having to duplicate a whole lot of code. So here in chapter one, let's open up the inheritance folder. And we'll open up our program file and the shapes.cs file. So here in my example code, I have some classes that represent two dimensional shapes. So at the top I've got Shape2D, which serves as the base class for the other shapes. And there are two classes that derive from Shape2D, and they are circle and rectangle. The definition for each of these indicates Shape2D as the super class from which they derive. The circle has a radius value. And the rectangle, if we scroll down, has a width and a height. And I have some code in my main program that creates some shapes that we will use to exercise the classes. All right, so let's go back to shapes. In dotnet, every class automatically derives from the base object class. And let's take a quick look at that here in the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) documentation. So if we scroll down a little bit and we get to the methods part. So because every class in dotnet derives from object, they automatically inherit these methods.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=96)** And we're going to use the ToString method and the GetType method in our code. So let's go back to the code. So let's override the ToString method, to provide a string representation of the class. So to do that, I'm going to write public and then I'm going to use the override keyword to indicate that I'm overriding ToString. And that's going to return a string, and then I'll implement the ToString function. And, I'm going to get rid of this verbose automatic stuff that Visual Studio Code puts in and just do a simple arrow operator to return a string. And I'm going to return This object is a. And I'm also going to use the GetType method, which we can use to get the type that is represented by the current class. So in single quotes, I'm going to use my interpolated string to call the GetType function. And put my semicolon on there. All right, so let's add some code now to our main program, to exercise this. And I'm going to write out to the console. And we'll print out the circle. And then we'll also print out the rectangle. And because each of these classes now automatically inherit ToString from Shape2D,
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=191)** we should get a string representation of our class. So let's bring this up in the terminal and we'll run the code. And sure enough, in the output that you can see each object prints out its own class name. We can also use what's called the is operator to determine whether a particular object is an instance of a particular type. So once again, let's use Console.WriteLine, to write out whether or not a circle is a Shape2D object.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=234)** And let's copy and paste that. And let's write out whether or not circle is a rectangle, which we know it isn't. All right, so now let's go ahead and run this code. All right, and we can see that yes, circle is a Shape2D, and no circle is not a rectangle. And of course we can define our own methods that can be overridden by our derived classes. So let's add a method to calculate the area of each shape. So close this. What I'm going to do is add a method and I'll make it public. So to allow a method to be overwritten, I have to mark it as being virtual. So I'm going to create a virtual method, that's going to return a floating point number. And I'll call it GetArea. And GetArea will simply return zero in the base class, because now it's going to be overridden by the subclasses. So in Circle, let's go ahead and override that. So, once again I have to use the override keyword. And we'll override GetArea. And we are going to return, in circle, the area is pi, which is 3.14, times the radius squared. So we'll just multiply the radius by itself.
>
> **[5:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=331)** And then of course, in the rectangle we'll do something similar. And we will return the width times the height.
>
> **[5:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=351)** All right and that should be all there is to it. Oh, one more thing. While we're here, let's go ahead and derive a new subclass from rectangle. So a square for example, is basically a special case of a rectangle, in which all sides are the same size. So I'll create a class named square and I'll derive that from rectangle. And I'll define a constructor. And Square is going to take an integer for one side, and then initialize the base class with that value twice, because you know I'm only going to provide one value to the square, but the rectangle is just going to have two sides of the same size. And there's no need to override GetArea, right? Because the base version of the rectangles works just fine. In the case of the square, I'll just multiply the side by itself. But I've already got that here in the rectangle class, so there's no need to override it. So let's go back to the main code and exercise some of this. So back here in the main code, let's just comment out the previous examples. And I'll add a new Square. And we'll make that size 10. All right, let's go ahead and call GetArea on each one. So we'll write out c.GetArea.
>
> **[7:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=442)** And then we'll do the same thing for the rectangle, so it's r, and then s for the square. All right, let's go ahead and run that, to make sure that it works.
>
> **[7:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=462)** Yep sure enough, we've got the areas of each object. Finally, let's try one more operation. So because each of these classes, let me close the terminal, each of these classes derives from Shape2D. What that means is I can substitute the classes anytime a method argument specifies the base classes type. So for example, what I can do is write a function, I'm going to write a function called PrintArea. And that's going to take a Shape2D as an argument. And I'll just simply write out the area. So we'll call WriteLine on the shapes. Whoops, not curly brackets, I want curly braces, there we go. Shape.GetArea. All right, and now I can call this function with my other class types directly, because they all derive from Shape2D. So I can just simply substitute each one of them for that argument. So I can do something like PrintArea of the circle. And let's do the same thing with the square and the rectangle. And now we should get the same results for this batch of function calls and this batch of function calls here. So one more time, let's bring up our terminal and run it.
>
> **[9:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=555)** And sure enough, you can see that the answers are the same in both cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** make (3), dotnet (2)
> **Tools:** terminal (3), visual studio (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2)
> **Analogies:** for example (2)
> **Versions:** 3.14 (1)

#### [Access modifiers](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=0)** - [Instructor] When you create a class in C#, all of the members of that class have a specific level of accessibility by other parts of your code. So, it's important to understand how this works. So let's open the code for this example in our AccessModifiers folder. I'll open up the program, and I'll open up the Modifiers.cs file. So I have a class defined, and each item in the class has an access modifier as part of its definition. The "public" keyword means that that particular member can be accessed from any other part of your program's code. So this class has three public items: The constructor, which is usually public, because classes are often created by other parts of the program. This function right here, Func1, and then there's a property, if we look down here, this data property is also defined as public. Properties are usually used to expose internal data, so again, they're also often declared as public. The "protected" modifier is used to define a class member that can only be accessed by the class itself or a subclass of that class. So this function, Func2, can only be called within either this code, MyClass or my DerivedClass. And then there's a private modifier. The private modifier causes the member to only be accessible within the class definition itself.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=96)** So in this class, I have a private field that is accessed by the public data property which hides the implementation from the outside world. The DerivedClass has a single function, Func3, which is also public. So let's take a look at the logic. If we look at what Func1 does, okay, Func1 increments the private integer value. Func2, decrements this value. And if we look down here in the DerivedClass, Func3, for the moment, just simply writes out that we're calling Func3. And the other functions do the same thing, they have a WriteLine in them that prints out that they're being called. So, let's exercise our code for a bit. In my main program, I have some code that creates an instance of class1 and class2, so MyClass and the DerivedClass. And it prints the value of the data property before and after making some function calls, right? So here, we write out the data property, call Func1 a couple times, and then run out the data property again, and then we do the same thing with class2. So let's run the starting point of the code just as it is right now and we'll see what happens. So let's open this up in the terminal, and let's run it. So in the first case,
>
> **[3:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=189)** the two calls to Func1 increment the private data which brings it from 1 up to 3. In the second case, Func3 doesn't do anything, so the value just goes from 1 to 2. So if I go back to the code, let's move this down a little bit. If I go back to the code and I try to call Func2 from the main program, right, so up here, if I write class1.Func2, okay, you can see that there's an error here, right, and it says "Func2 is inaccessible due to its protection level." So I'm already, without even trying to compile, I'm already getting an error indication in VS Code. But if I try to run this, if I go down to my terminal again and try to run, you'll see that in fact, I do get a compile error. And I'm getting that error because I'm trying to access the code from outside the class. Similarly, I can't access the private integer field from the DerivedClass. So let me delete that. And let's go back to Modifiers, and inside the DerivedClass, if I try to write SomeValue++, right, once again, I'm getting an error indicated here and it says that it's inaccessible due to its protection level. And if we scroll up,
>
> **[4:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=281)** we can see it's because it's private. So even though DerivedClass derives from MyClass, it can't see the private members, all right? However, because Func2 is protected instead of private, I can actually call Func2 from here. So, what I can do is tell the base class to call Func2. And that works, right? So now let's go ahead and run our code. Again, you can see that there's no little red squiggly line. So if we run this code again, now you can see that in the second example, right, the internal value goes from 1 back down to 1 again because Func2, if we look at the code, remember Func2 is decrementing the private internal field. So access modifiers are intended to make your code easier to manage, especially for larger projects that have many people working in the same code base. By making use of them, you can enforce good design principles and keep internal implementation details separate from how your code is being consumed.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (3)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** open the (1), scroll up (1)
> **Definitions:** means that (1), defined as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Anonymous types](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=0)** - [Instructor] Some languages like [JavaScript](../../Skills/Software%20Development/JavaScript.md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) make it really easy to define collections of names and values without first having to define an explicit type. And C# also has this capability which we refer to as anonymous types. You'll see these used in a variety of scenarios, usually with link or [language integrated query](../../Skills/Software%20Development/Language%20Integrated%20Query%20(LINQ).md), for example, but they can also just be a convenient way of having a collection of read-only properties. So let's open up our code here in AnonTypes under the Chapter1 folder, and I'll open my program code. Defining an anonymous type is achieved by using the "new" keyword and enclosing the data inside curly braces. So in this case, I'll just create a variable called myobj, and then new, and then inside my curly braces, I can have my properties. So I'll have name for example, and I'll just use my name. And, oops, there we go. And then your age, and then we can also nest these. So for example, I can put another new anonymous type in here and have nested properties. So this will be just some address information. All right, and we'll put something else in here. Okay, so the name of the type is dynamically generated by the compiler, and the compiler also infers the type of each property.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=95)** So it'll assume that name is a string and age is an integer and address is and object and so on. Anonymous types also override the ToString method of the base Object class and outputs the name of each property and value inside curly braces. So let's try writing out the data to see how it looks like. And so I'll just write this out to the console and I'll do it a couple different ways. First, I'll write out specific properties, so you can refer to these like any other object with properties on them. So, I'll do my name, and then I'll do one of the nested ones, so myobj.Address.Street. And then for the next example, I'll just... Oops, oops, there we go, I'll just write out the entire object. So we can see how it looks. All right, so let's go ahead and run that. I'll bring this up in the terminal, and just run.
>
> **[2:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=169)** And when the code runs, you can see that in the first case, for this line, line 13, I'm outputting my name and address, and then line 14 just writes out the entire entire object, and you can see that it's enclosed, in curly braces, all of the properties and all of the values. Anonymous types are read-only. So if you try to modify a property, that's going to result in a compile error. So let me uncomment this line, and you'll see that I'm already getting a little red underlined that says you can't change the data, so I'll just try to run it anyway. And just for completeness, we can see that yeah, sure enough, I get a compile error because I can't change the value. So let's go ahead and recomment this out. The question then becomes, well, if you want to change values, what can you do? What you need to do is use something called non-destructive mutation, and it looks something like this. What I'm going to do is create a new object, so I'll... And what I'm going to write is myobj with, and then I'm going to specify the properties I want to change. So in this case, I'll change the name to be Jane Doe, and then let's go ahead and write that back out again. So now I'll just copy line 13, and paste it here, and use myobj2. So I'm basically just creating a copy of the object and changing only the properties that I want to change. So, let's go ahead and run this.
>
> **[4:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=265)** And now you can see that I've made a new copy of the object with all the other data is the same, but the name has now changed. You can also check to see if an anonymous type contains a specific property by using the GetType method which is also inherited from the base Object class. So let's comment this out, and let's comment out the previous example as well. All right, so let's write out console.WriteLine. What I'm going to do is write out myobj. I'm going to call the GetType method. That's going to return the type, that's also a class. So I can then call on the GetType result, I can call GetProperty, and then the name of the property that I'm interested in. So, in this case I'm interested in the Name property. And then let's try it on a property that we know doesn't exist. So I'll try calling this on the Job property, and if we look back up at the code, you can see that Name exists, but Job does not. So, and then I'm going to check to make sure that the result is not equal to null. So in the first case, this should be True, and then this one should be False. So let's run our updated code, and oh, whoops, I have to enclose that
>
> **[6:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=360)** in the curly braces to get... Here we go. And we can see that, yes, the Name property exists, and no, the Job property does not exist. So if you find yourself in need of a temporary data structure just to hold some properties and values, then anonymous types might be what you're looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Language integrated query](../../Skills/Software%20Development/Language%20Integrated%20Query%20(LINQ).md) (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 2. Class Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Using object initializers](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=0)** - [Instructor] One of the convenience features that C# provides is the ability to create and initialize objects without having to write a separate constructor statement followed by a lot of individual assignment statements. So in our code here in the Object Initializers folder in chapter two, let's open up our program file and let's open up Initializers.cs. So consider the code I have here in my Initializers file that defines a class hierarchy of pets with a pet-based class and then I've got two derived classes, Dog and Cat. We have public properties for things like name and age and then IsTrained for dogs and IsDeclawed for cats. And then in the main program, let's exercise some of this code. I can create and initialize instances of these classes at the same time. So what I'm going to do is make a new Dog object and it's going to be a new dog. And what I'm going to do is inside curly braces just initialize each of those public properties directly by using their name and a value. So for example, I'll have the dog's name be Fido and the age is going to be four and IsTrained will be true. And then we'll make a cat and the cat's name will be Mr. Meowington and the age is going to be seven and IsDeclawed will be false.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=98)** All right, and then I can print out each one just to make sure that it worked. So that's going to be the Dog object and we'll have dog.Name and dog.Age
>
> **[1:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=119)** and we'll copy and paste that and do the same thing for the cat.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=129)** Right. Now obviously this only works for the properties and fields that are accessible to the code when the object is constructed. And since my class has public properties, I can access all of them. But remember what we learned about earlier when we covered access modifiers because those control what you can and can't initialize. So if we go back to the Initializers, if this was, you know, private, for example, then I wouldn't be able to see the IsTrained property and I would not be able to initialize it. All right, so let's go ahead and run what we have so far.
>
> **[2:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=168)** And oh, whoops. I have to put the dollar sign outside the- There we go. Okay, let's try that again. There we go. Okay, so as expected, we have two objects, one dog and one cat with the values properly initialized. And this also works on anonymous types which we learned about in the last chapter. So for example, I can write something like var pet equals new. And then, you know, name equals Charlie. And, you know, age is five, right? And then let's just do the same thing with our pet. So I'll copy and paste this. All right. And let's run that one more time and we can see that that works as well, okay? You can also initialize collections this way. So let's use an array of integers as an example. And what I'm going to do is comment out these previous examples so that we don't clog up the output. So I'm going to create an array of integers called numbers and then to initialize that right alongside the declaration, I can just simply write new int, and then inside the curly braces, use the values that I want to have be in the array. And then I'll just Console.WriteLine out
>
> **[4:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=263)** and I'll just delete that and put in numbers.Length. All right, so let's go ahead and try that. And yes, we can see that there are six numbers in the array that I just defined. So let's take another look at the pet classes. Let's go ahead and close this terminal for now. So let's scroll down to the bottom. And you can see that there's a class here named PetOwner and it has a public name property, which is a string. It also has a list collection that lists the pets owned by a particular person. So let's write some code that initializes this class for a pet owner that has a few pets. Let's go back to the program and I'm going to create a new instance of the PetOwner class. So I'll create a new pet owner, and then inside the curly braces, I'll just set the name property and once again that'll be me. And then I'm going to initialize the collection, the Pets collection. That's going to be a new list of Pet, and inside that list I'm going to put a new Dog. And the name is going to be Junebug and the age is going to be four. And the new Cat name will be Whiskers and the age will be three.
>
> **[6:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=362)** And then finally another new Dog whose name will be Max and age will be 10.
>
> **[6:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=374)** And then let's write out the contents to make sure that it worked. So we'll write out the owner's name so owner.Name and apostrophe S Pets.
>
> **[6:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=394)** And then I'm going to have a foreach loop. And I'm going to loop over each pet in owner.Pets.
>
> **[6:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=406)** And we'll just simply print out, put out the name of each pet, and let's go ahead and comment out the integer example. All right, so let's run our updated code. Let's get that terminal back here again. And, all right, and now we can see here's, sure enough, my list of pets. We've got Junebug, Whiskers, and Max. So object initializers lets you write more concise code that combines instantiating an object with the readability of initializing the object's values.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (6), make (4)
> **Cross-References:** go back to (2), we covered (1), in the last (1)
> **Analogies:** for example (3)
> **Tools:** terminal (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Read-only members](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=0)** - [Instructor] In some cases, you might want to prevent changes from being made to certain member fields in your classes, and you can accomplish this by using the readonly keyword. So here in our ReadonlyProps folder in chapter two, let's open up our program code and let's open up our readonly example. For this example, I have a class definition that represents a book. It has an ISBN number, a title, and an author. And I also have an update method that lets me change the values of these private class members here at the top of the code. My main program creates a few instances of the class and then calls the update method to change the values. So let's just run the code as it currently is.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=56)** And you can see that the values for the book1 are changed using the update method. What I'd like to do is prevent the ISBN number from being changed. So once you create the book record, I don't want ISBN number to be changed. I want it to be initialized and then left alone from that point forward. So to do that, I'm going to add the readonly keyword. So let's go back up to here. And in front of the declaration for my private member variable, I'm going to add readonly. Okay. So readonly fields can only be assigned values in certain conditions. The first is, as you see here in the declaration, where it gets initialized to the empty string value. It can also be set during the instance constructor of the class, like it is here. And then the third place you can set a readonly field is in what's called a static constructor, which we will learn about later in the course. So after I make this change, you can see now that the update method is going to produce a compiler error. So you can see I'm getting this little red squiggle right here, and it says that a readonly field cannot be assigned to, except for the situations I just described. So now I can't run my code. I'll have to comment this line out in order to make the error go away. And then once I do that, I'll be able to run the code again
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=147)** and now everything's working again. So you might be wondering what's the difference between a readonly field and a constant value? Remember that constant values are only assigned once, at compile time, whereas readonly fields can be assigned both in the declaration, like you see here, and in the constructor. And remember, your class might have more than one constructor, which means that your readonly field can be set to different values, depending on which constructor is used. But once the value is set, it can't be changed afterward, and this helps enforce data immutability in your classes where you need it.

> [!info]- Semantic Content
>
> **Env Vars:** isbn (3)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Init-only properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=0)** - [Instructor] In a previous video we saw how to use the read-only keyword to prevent changes to member variables of a class after they had been initialized. In some cases, you want to be able to do the same thing with properties. That is create properties that can only be initialized with a value and then become read-only afterward. This can be accomplished in C sharp using what are called nit only setters, which is a feature that was introduced back in version 9 of C sharp. By using this feature, you can enforce immutability so that once the property value is set, it can't be changed again. So here in our code for init props in chapter two let's open up our program code and let's open up our init example file. Here in my example code I have a class that represents some employee data along with some program code that creates and exercises the employee class. So each employee has an ID, a first and last name, and the department that they belong to, right? So ID, department, first and last name. You can also see that the ID property is backed by a private data member here in the employee class. Now, if I run the program exactly as it is right now, let's go ahead and open up our terminal. So before changing anything, let's run the code. And you can see that I can construct the employee objects with some initial data and I can make a change to the ID.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=95)** So here, I've got my two employees and I create them and then change, in this case department and ID and then the last name and ID. And sure enough we see those changes reflected in the output. What I'd like to do, however is make the ID property in init only so that it can't be changed once it is assigned. To do that, I need to use the init keyword instead of the set keyword in my property definition. So let's go back to the code and scroll down to the ID property, and I'm going to change this from set to init. So once I make this change, I'm now going to get a compile error if I try to run the code. And that's because the lines where I change the ID are no longer valid. And you can see that right here it says that the init only property or indexer employee ID can only be assigned in an object initializer or in a constructor. So what we're going to do is change the code. Oh, actually, before we change the code let me also show you one other thing. Now that I've made this init only, I also can't change it in my own class, right? So for example, if I were to put in another function, where should I do that? Let's put it right here. If I had define a function like public void change ID
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=186)** and I do something like ID equals new ID, that will also result in an error. So if I try to compile, you can see that I'm getting an error on this line now as well. So in fact, to make sure I'm really creating an immutable data field I can also add the read only modifier that we learned about earlier to my internal private field definition. So let's scroll back up to the top and make this private read only int ID. Now I have a data property that can only be initialized and not changed afterward. So let's go back to the program code and let's comment out the places where we're changing the ID and let's also go back and remove that broken function that I added. All right. And now we can try to run our code again. And you can see that when I run the code now the ID can no longer be changed. So I have a data property now that can only be initialized. And this is really useful for cases where you want to enforce immutability on certain parts of your class while allowing other properties to be changed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Cross-References:** go back to (2), previous video (1)
> **Versions:** version 9 (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Required properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=0)** - [Instructor] If you define classes that provide public properties, there are probably going to be times when you want consumers of your class to be required to initialize some of them. So starting in C Sharp 11, this became possible by using the required modifier and we're going to see how it works in this example. Here in our required props folder, let's open up the program code as well as requiredexample.cs. So in my code here, I have a class that represents some employee information. I have a default constructor and some public properties which allows the class to be instantiated using object initializers, which we learned about earlier. And in fact, if you look at the program code, you'll see that there are a few instances of employees being created using the object initializer syntax. Suppose however, we wanted to make sure that certain properties were set whenever an employee object was constructed in this way. To do that, we can add the required modifier to the definition of the property in the class. So for this example, let's make the ID and last name properties required and we can leave first name and department as optional during construction. So let's go to our code. And in my class definition, I'll make ID required and I'll also make last name required and we'll leave department and first name alone. So let's also modify our program code to leave off the last name and ID
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=97)** of this first one right here. All right. And now when I try to run my code, you can see
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=112)** that I'm getting a compiled error saying that employee ID and last name must be set in the object initializer. So now I've effectively defined my class so that certain properties are required to be initialized when the object is constructed. So let's go back and fix this problem, right? Put last name and ID back in. And let's go ahead and take first name off of this one and then let's try to run again.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=148)** And now you can see that my program succeeds because ID and last name are given in all cases. And in the first case, we just have a missing first name. But what about the case of creating an object using a constructor? Suppose I added a constructor that creates an employee object and in fact, let me go back to the code. Alright, let's undo that last change. Let's go back to my code here in required sample. And I'm going to uncomment this constructor right here. So in this case, I have a constructor that takes the values for constructing an object and bypasses the object initializers syntax. And then back in my program file, I'm going to add some code that does that. So I'll have employee emp4, and in this case I'll use that employee constructor and I'll give a name and my ID will be 4 and put that in marketing. Okay, so now I'm creating an employee without using the object initializer syntax. But remember, I want ID and last name to be required. So let's see what happens. I'm going to run my code again, and when I run the code, you can see that I'm getting a compiler error indicating that the required properties need to be set even though I'm doing that in the constructor.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=241)** The reason this happens is because the C Sharp compiler doesn't check the constructor to see if the properties are indeed set because it allows developers to pass that responsibility onto class consumers and derived classes in order to avoid duplicating a lot of boilerplate code. Now this isn't a big problem in a single class example like this one where you know, I'm just setting these properties in my constructor. But in a complex class hierarchy, this can lead to a lot of code duplication or you might be inheriting from a base class that you don't control and it has a list of required parameters that is just invalid for your use case. So what I need here is the ability to let the compiler know that I've taken care of things. And to do that, I can use the sets required members attribute. So what I'm going to do is up here at the top of my file, I'm going to add using System.Diagnostics.CodeAnalysis
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=311)** and then I'm going to put an attribute in front of this constructor called SetsRequiredMembers. Now, it's important to understand that this does not actually enforce that the properties are set, it just disables the compiler check for this constructor. So it's up to you to make sure that the required properties are in fact being set. But now that I've added this attribute, let's go back to the terminal. So we'll bring this back up and let's clear and try this again. And now you can see that my code is working again, now that I've added this sets required members attribute. This is basically intended as an escape hatch for when you are inheriting from a class that you have no control over and can't change the code. Or when you are building a class hierarchy that's kind of complex and you don't want to have to duplicate a whole bunch of boilerplate code. So use this very carefully and only if you have to. Alright? By adding the required modifier to your properties, you can ensure that your consumers of your class will set them when they create instances of the class. And by using this sets required attribute members, you can also inform the compiler that your constructor is doing its job.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Cross-References:** go back to (3)
> **Exercise Files:** boilerplate (2)
> **Prerequisites:** required to (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Build an employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=0)** - [Instructor] Let's take a moment here to practice a coding challenge. For this challenge, you're going to take what you've learned so far and build a class structure to represent employee information for a business. There will be two kinds of employees, hourly and salaried. The data that will be common to both types will be the employee ID, the department they work in, their full name as one string, and there will be a method named AdjustPay that will increase their pay by a certain percentage amount. Note that the ID, full name and department are all required. Hourly employees will have a decimal property named PayRate, and salaried employees will also have a decimal property named Salary. For this challenge, you'll need to use what you've covered so far in this course. You'll need to think about how to use inheritance to separate the common employee attributes from the specific hourly and salaried ones. Use automatic properties to represent the data fields for each class. Instead of passing parameters to the constructor, use the object initializer syntax that we've learned about earlier. The ID property should be required and init only to prevent it from being changed. Departments in full name are also required, but modifiable. The adjust pay method should increase the employee pay by a certain percentage amount.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=94)** I've provided a starting point for your own code along with some code in the main program to test the result. So here in the challenge folder, you'll see that there's some test code here in the program file, and I've given you a starting point for you to define your own class hierarchy. So feel free to be creative and have fun with this challenge. There's no right or wrong answer to worry about. I'll be back in the next video to review my solution and you can compare it with your own. And before we go, I'm going to go ahead and run my finished version of the challenge so you can see what the output should look like. So let's go ahead and run this, and this is what your code should look like when you run it. So go ahead, try the challenge and I'll be back in a bit.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Build an employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=0)** - [Instructor] Let's review my code for this challenge. Remember that we needed to create a class hierarchy to represent different types of employees and that there were certain rules we needed to follow. So let's go ahead and open up my solution code. In my code, I have a base class named employee that groups together the attributes that are common to both hourly and salaried employees. There are three properties, ID department and full name, and they're all marked as required. And ID is init only to prevent it from being changed after it has been assigned. The adjust pay method takes a percentage to increase the pay of the given employee. There are two subclasses, hourly and salary employee, and you can see that hourly runs have a pay rate property which is a decimal property that could be get and set along with an override of the adjust pay method. Salaried ones are similar except they have a salary property instead of the pay rate. And when I run my code, so let's go ahead and bring this, this is the test code. Let's go ahead and open this up in the terminal.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=86)** You can see the output here. And for example, you can see I can't change the ID of an employee. So if I try to say, you know, Emp1.ID is equal to you know, a thousand or a hundred, whatever, all right? That's going to give me an error when I try to run this.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=110)** So you can see here the employee can only be assigned in an object initializer, so we know that that works. All right? And I also can't leave out one of the required fields. So if I take full name off of this one and try to run again, once again, I get a compiler. So how does my solution compare to yours? Remember, it's not important that your solution match mine exactly. There's usually multiple ways of solving programming problems. So I suggest taking a few moments here and comparing your solution with mine and learning from the differences.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Static Classes and Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Static members](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=0)** - In this chapter we're going to learn about static members and static classes. And we'll start by looking at static members and how they're used. When you declare a class, you usually specify instance members like methods and properties that will operate on a specific instance of that class. Then when you create instances of that class, you can access the members of each of those instances. Static members work a little bit differently. You declare a static member by using the static keyword or a constant value by using const. Static members are used to perform operations or hold values that are shared by all the instances of the class. They're accessed by using the name of the class and they don't apply to any single instance. In this case, we have a constant value for our temperature class that defines the freezing point in Celsius. It wouldn't make sense to have this value duplicated for every instance, because it never changes. So by declaring it as a const, we only need to have one copy of it. The isFreezing method is declared static. So again, it is common to all instances and is accessed using the class name. It takes a value and determines whether that temperature is at or below the freezing point of water. And again, it wouldn't make sense to have this method be duplicated across all instances of the class, because the logic doesn't change based on the class. So let's practice this ourselves in the code. So here in our example code
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=95)** in StaticMethods in chapter three, let's open our program file and our StaticMethods.cs file. In this example, I have a class that represents a temperature, and I have two constants that define the upper and lower boundaries for room temperature. There's also a public property that holds the temperature value for this instance, and there's a function to determine whether this instance is room temperature or not. And we'll come back to this in a little bit. In my main program, I have some code that creates some sample temperature data, which we'll use in a few moments. For now, let's add a couple of static functions that convert between Celsius and Fahrenheit temperatures. So I'm going to go to my StaticMethods class here, and I'm going to add two functions. One will be a static function that returns a double, and we'll call that one fToC. And it will take a double value that will be a Fahrenheit temperature. And the formula for this is, well, first we're going to return a Celsius temperature. And the formula is that first, we subtract off 32 and then we multiply that value by 5/9, and then we'll return CTemp. And then let's do the same thing
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=188)** for the Celsius to Fahrenheit conversion. And that's going to take a Celsius temperature and return a Fahrenheit temperature. All right, so, I need to have my semicolon there, all right, so the formula in this case is that we multiply CTemp times 9/5
>
> **[3:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=222)** and then we add 32. All right, so now we've got our formulas in place, let's go over to the main program and exercise this code. So let's go ahead and writeLine that out, and we'll call temperature.
>
> **[4:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=249)** We'll exercise fToC first on 72 degrees Fahrenheit. And we'll format that with two decimal places. And then we'll add one to call cToF, and we'll give that 22 degrees Celsius. All right, so let's go ahead and run our code. So let's open up the terminal, and let's run. And when we run this, we can see in the output that 72 degrees Fahrenheit is about 22.22 Celsius. And 22 degrees Celsius is about 71.6 Fahrenheit. Okay, so let's keep on going. You can also override non-static members with a static member. So let's see how that works. Back here in my StaticMethods code, you can see that I've got my instance version of isRoomTemp. What I'm going to do is override isRoomTemp and add a static version of it. So this will be a public static bool isRoomTemp, and that's going to take a value and return whether the temperature is greater than or equal to the lower boundary and it's less than or equal to the upper boundary.
>
> **[5:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=347)** And then back in the main code, let's go ahead and comment out our previous example. All right, I have a loop here which I will uncomment. So this is going to count the number of temperature readings in my sample temperatures that I've created up here at the top. It's going to count the number of those that are is room temperature, in other words, if isRoomTemp True, then we count the number of room temperatures. And then let's also uncomment the next two lines that access the constant values and output the room temperature count. And then let's add two more statements that use the new static version of isRoomTemp that we just created. So we'll write out, we'll call Temperature.isRoomTemp, and we'll see if 22 degrees Celsius is room temp. And then we'll call the same thing again. And this time we'll pass 17. So the first one should be room temperature. The second one is not. So if we look up here in the sample data, you'll see that there should be about four instances that fall within the room temperature band. So the answer there should be four. And then we'll print out those results. And then the results of seeing isRoomTemp on these two values. So let's bring up our terminal and let's run it again.
>
> **[7:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=448)** And sure enough, we can see room temp is between 20 and 23 degrees. That's this line right here. There are four measurements that are room temperature. And sure enough, 22 degrees is room temp, whereas 17 is not. So there's one more thing that you should be aware of, and it's that you can't currently in C# have an instance property and a static method of the same name. So let's go back to our class code. And what I'm going to do is comment out the instance version of isRoomTemp. And I'm going to unco this code, which is the same logic, but just using a property instead of an instance method. So if I go back to the terminal and I try to run this, you'll see that that results in a compiler error. And it says the type temperature already contains a definition for isRoomTemp. So at least for now, C# doesn't allow properties and static methods to coexist like instance methods and static methods can.

> [!info]- Semantic Content
>
> **Code Identifiers:** isroomtemp (9), ftoc (2), isfreezing (1), writeline (1), ctof (1)
> **Tools:** terminal (3)
> **CLI Commands:** make (2)
> **Versions:** 22.22 (1), 71.6 (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Warnings:** be aware (1)

#### [Static classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=0)** - [Instructor] Now that we've seen how to define static members of regular classes, let's turn our attention to static classes themselves. Static classes have one key difference from regular non-static classes and that that is that they can't be instantiated. The reason for this is that all of the members of a static class are themselves defined as static. So, let's open up in our static classes folder here the program code and static class dot cs. In my example, you can see I have a class named converter and it has a couple of static methods to convert inches to and from centimeters. There's also a constant value that I've defined using the static keyword. Now, this is not normally how you would do it. The const keyword is the correct way to do this, but I just wanted to demonstrate that this way is also possible, but in real life don't do it this way. Use the const keyword. This will get you into a lot of trouble with your teammates. Okay, so all we need to do to make this class a static class is add the static keyword to the class definition. And if we look at the main program, you can see that there's some code already to exercise the methods and the constant. So, let's run our code as we currently have it. I'm going to open up my terminal, run this.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=90)** All right, and we can see that there's the output here. We can see that the first result is that there are 2.54 centimeters per inch and we're using the constant here, and then we're converting five inches to centimeters. That's about 12.7, and five centimeters to inches. That's about 1.97 or so. All right, so if I uncomment the code, at the bottom of my example, and if I try to run this again, you'll see that I now get a compiler error. And the reason I'm getting this compiler error is because the class is now declared as static, I can't actually instantiate it. And also, because the class is now declared as static, I can't have any instance members inside of it. So, let me just go ahead and comment this out again. If I go back to my class and I try to do something like public int temp, right? In this case I'm adding something that depends on an instance. If I try to run this again, right now I get another compiler error and it says, cannot declare instance members in a static class. Similarly, static classes are sealed by default and we'll talk about that in a little bit. If I try to derive a new class, so for example, if I come down here
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=182)** and I write public static class new converter
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=191)** and I try to derive from the existing converter, all right, let me take out my instance variable. Let's try to run this again. And you can see that once again, I now get another compiler error. It says static class new convert cannot derive from the converter. Static classes must derive from object. So, one of the side effects of having a static class is that you can't subclass them. A good example of a static class is the dot net math class. Let's go ahead and bring that up in the browser and we can look at it. So, here is the math class in the dot net documentation and if you scroll down you'll see, hey, sure enough, it's defined as a static class. And if we scroll down right to the methods, you'll see that all of these are all defined as static methods. So, for example, if I click on this one, you'll see that it's a static function. Basically, it's a static class with a large number of math related functions and a few constants. So, static classes are useful when you need to group together a set of related methods that only operate on their parameters and don't need to maintain individual state data for different instances of the class.

> [!info]- Semantic Content
>
> **Versions:** 2.54 (1), 12.7 (1), 1.97 (1)
> **UI Navigation:** scroll down (2), click on (1)
> **Definitions:** defined as (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Static constructors](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=0)** - [Instructor] C# supports a type of constructor called a static constructor and they apply to both regular and static classes. Static constructors are typically used to initialize any static data in the class or to perform one-time operations before anything else happens in the class. These are called automatically by the .NET framework. You don't need to invoke these yourself. Let's look at some sample code to see how they work. So here in my StaticConstructor folder, let's open up the Program file and MyClass. So I have a class named MyClass, which has two static members. It's called Counter and LastCaller, a constructor, and there is two methods, MethodA and MethodB. MethodA is an instance method while you can see that MethodB is a static method. When these functions are called, the CallCounter variable will be incremented each time. And the LastCaller string will contain the name of the last method to be called in the class. Now, you can see that I have the code to do this already defined both in MethodA and MethodB. What I need to do is add my static constructor to the class to initialize the static members. Now, if I don't do this, then these members are automatically initialized to their default values, which would be zero and an empty string. But if I want to initialize them to something else, then I need to set the data myself.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=95)** So let's go ahead and add our static constructor. And to do that, I'm going to write the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) static and then MyClass and that's it. Don't need to make it public. Don't need to do anything else about this. In my static constructor, I'm going to set CallCounter equal to zero and I'm going to set LastCaller equal to Nobody
>
> **[2:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=124)** and I'm going to write out to the console that the static constructor has been called.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=135)** So now if we look at the main program, there is some code to create and exercise the class. So here I instantiate the class and we print out the values of CallCounter and LastCaller. Then we call MethodA and MethodB a few times and then we output CallCounter and LastCaller again. So let's go ahead and run this. Let's open up the terminal and let's run. All right, so when it executes, we can see the results and you can also see that the static constructor executed before the instance constructor did. So you can see that, for example, in the beginning, CallCounter starts out as zero and LastCaller starts out as nobody. And then after we make four method calls, CallCounter is now up to four. And sure enough, the last method to be called was MethodB. Now, you may not need to use static constructors very often but when you have static class members that you need to make sure are initialized a certain way before the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the class logic runs, then the static constructor is the way to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** net (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add static members to employee](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=0)** - [Instructor] Now that we've learned about static class members, let's put them to use in a coding challenge. For this challenge, we're going to update the previous coding challenge by adding a couple of static members to our Employee class. So if you haven't already done that previous challenge, I suggest going back and trying it, but that's not required. You should be able to handle this challenge independently of the previous one. So I'm going to open up the code for the program file here in the editor so you can see how your code will be called. The first change that we're going to make is the addition of this EmployeeCount property, and notice that it's static on the Employee class. Each time an employee object is created, this property will increase the count of the number of instances. The second change we're going to make is that the IED property will no longer be initialized by the test code. And you can see I've removed that property from each one of the lines. that creates an Employee class. IDs will now be assigned within the Employee class itself. So let me close this, and I'm going to run my finished challenge code so you can see what the output should look like.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=83)** And when I run the test code, you can see that the employee count increases when I create each object. And then when I print out all of the employee objects at the end, they each have an ID number that starts at 1,000 and increases from there and is automatically assigned by the Employee class internally. So each of these features should be implemented by using what we learned about static members in this chapter. So go ahead, try this challenge, and then I'll be back in the next video to explain my code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** ied (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add static members to employee](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=0)** - [Instructor] For this challenge, we needed to update our employee class with some static members to keep track of the number of employees created, as well as assigning IDs to each employee automatically. So let's take a look at my solution. I created two member variables for my class. The first is a private member that counts the number of objects, and the second is a protected member that increments each time an ID is needed. I made the first one private so that only my Employee class could access it. The second one is protected, just in case a subclass needs to see what the current ID counter is, and that's in the future if this program ever gets extended and so on. To go along with my private empCount variable, I define a public facing, where is it? Here it is. I define a public facing employee count static property. Note that it only has a get accessor, which prevents the property from being modified. In the employee constructor. I increment the empCount variable, which is how I keep count of the number of objects created. The IDStart variable is initialized inside the static constructor for the class. Now, I could have just initialized the variable as part of the declaration itself up here, but I chose to put it inside the static constructor because in a real program, this value would probably be accessed from a data store somewhere.
>
> **[1:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=92)** So I wanted a place where I could put some logic that's more complicated than a simple assignment, and the static constructor is a good place to do that. Then I increment the value each time a new object is created so that they don't all get the same ID. All right, well that's my solution. How does it compare to yours?

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Identifiers:** empcount (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Abstract and Sealed Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of abstract classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about abstract classes and sealed classes and we're going to start with abstract classes. You can think of an abstract class as sort of like a set of blueprints for how other classes can be created based on the abstract one. And they are different from regular classes in some important ways. First, abstract classes can only be inherited from. You can't actually instantiate an instance of an abstract class itself. These types of classes are typically used to group together a set of concepts that are then implemented in various subclasses that you actually can instantiate. These are called concrete classes. Abstract classes can be used to provide greater flexibility in the design of a class hierarchy and make it easier to introduce and extend new functionality if the program structure is likely to grow and change. So let's take a look at how an abstract class might be used in a simple example. Suppose we're creating a class structure to represent different kinds of vehicles. We might create a base class named vehicle to represent some of the features that are common to vehicles, such as how many wheels they have and what their engine power is. Then we can define subclasses to represent specific types of vehicles such as a car or a pickup truck or a motorcycle. Each of these subclasses can be created by using their new operator and their constructor but there's a problem. Our base class can also be instantiated which is something that we want to prevent.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=95)** After all, when you go to a dealership you don't buy a vehicle. You buy a specific type of vehicle. So it doesn't make sense to create a vehicle class just by itself. To do this, we need to add the abstract keyword to our class definition. Now, when you try to create an instance of this class, that's going to result in a compile error. By declaring the base vehicle class as abstract we're forcing implementers of the class to create a concrete subclass in order to add the particular attributes that are related to that subclass while still taking advantage of the default properties and methods and logic of the base class.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Defining an abstract class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=0)** - Now that we've learned a little bit about what an abstract class is let's try it out in some real code. So let's open up our program file and our vehicles.cs file here in the abstract classes folder. And I have some code that defines a vehicle based class along with two subclasses, one for car and one for motorcycle. The base class has two string properties that represent the make and model of the vehicle and there's a method called sound horn to make the horn sound along with an override of the two string method to represent the vehicle as a string. In my main program file, I have some code that creates a car and a motorcycle and then writes each one to the console and calls the sound horn method. So let's also add some code that creates a vehicle object and we'll write that out to the console. Alright, let's run what we have so far. So we'll bring this up in the terminal. Alright, and in the output you can see the car information along with the sound horn function results. So we have our forward escort that does a beep beep and then we have our motorcycle and that does a honk honk. But as you can see we're able to instantiate the vehicle base class. So let's fix that by adding the abstract keyword to the class definition. So I'll go back here to my vehicle class
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=96)** and I'll write public abstract class vehicle. So now let's try to run the code again. And you can see that when I try to compile I get a compile error and it says cannot create an instance of the abstract type or interface vehicle. However, there's another problem even though I've successfully prevented the instantiation of the vehicle base class, I've got another issue. Alright, so I'm going to go into my code. So let's go ahead and close this terminal for a second. I'm going to go into my code for motorcycle. Where is that? Scroll down and I'm going to remove the sound horn function. All right, let's get rid of that. And now let's run the code again. And also I'm going to go ahead and take out this code that's causing the problem. Alright let's bring our terminal back up and let's run the code. Alright, so now that I've moved that override of the sound horn function I'm getting the default base class of the sound horn function, which isn't what I want, right? So if we look at the base class you can see that there's a, where is it? There's a placeholder that says add sound horn here. And since motorcycle didn't override sound horn we're getting this ad sound horn here or add horn sound here, message for the motorcycle. And that's not what I want.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=188)** The base class method is just intended to be a placeholder. I want developers that implement a subclass of vehicle to have to provide their own implementation of the sound horn method. I want to force them to do this and we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Tools:** terminal (3)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - now (1)

#### [Abstract methods and properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=0)** - [Instructor] In a previous video, we saw how to use abstract classes to provide a basic foundation for a class structure that prevents developers from instantiating the base class itself. But we ran into a problem. Developers were able to create and instantiate derived classes that didn't override certain members of the abstract base class that we want them to. So what we want to be able to do is specify that there are certain members of the base class that have to be implemented by the derived classes. To do this, we can use the abstract keyword that we learned about earlier to define specific base class members that must be implemented by subclasses. So here in our code in the abstract props funks folder let's open up our program and vehicle files. So let's take a look at the code for our vehicles class that we saw earlier. It's mostly the same with some slight changes. So I added a property for the number of wheels that a vehicle has and I also simplified the car and motorcycle classes. And if we go back to the main code here you can see that we've got a couple of instances of classes being created. So let's just run the code that we have the way it is. And when I do that, let's see, we bring up the terminal and dot net run and in the result you can see that we have the default implementations
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=93)** of wheel count and sound horn are used. So here if I scroll back up over to the vehicles we've got wheel count is going to start off as zero. And the default implementation of sound horn is just add horn sound here and we've got both of those in the output. So in order to require developers to provide implementations of these members, we can use the abstract modifier. So let's make those changes. In the case of sound horn, I'm going to replace virtual with abstract and abstract functions can't have any implementations where they're declared. So I'm going to replace the default code here with just a semicolon. So now I'm just defining the fact that there's going to be a function called sound horn and I'm going to do the same thing with my wheel count property. I'll make that abstract as well. Alright, so now when I try to run my existing code you can see that we get a compile error because I haven't implemented these functions. So you can see car does not implement the wheel count get motorcycles, not implement, you know sound horn and so on. So let's close the terminal and let's fix these problems. So first let's add some code for the car class. And you can see that there's a little red squiggly
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=186)** line indicating that we have to inherit the abstract member's wheel count and sound horn. So let's do that. So I'll make a public override of wheel count
>
> **[3:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=204)** and that is going to just return the number four in the case. Oh, oops, sorry, I misspelled it. That's going to return the number four for the case of a car. And then let's also, let's override sound horn as well. And let's console right line beep beep. All right. And then we'll add the same code for the motorcycle. And that's going to return two for the motorcycle.
>
> **[4:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=250)** And for sound horn, we'll do honk honk.
>
> **[4:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=263)** Alright, so now that I've made this fix you can see that the little red squiggles have gone away from my editor and we can run the code again. So let's bring our terminal back up and we'll run.
>
> **[4:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=281)** Okay, so now everything's working and there are different results for the car and motorcycle classes. So for the car we have four wheels and beep beep. And for the motorcycle we have two wheels and honk honk. So in addition to defining abstract classes we can make individual members in a class abstract which then requires developers to override them and provide implementations in the subclass.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (3)
> **Cross-References:** previous video (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### [Sealed classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=0)** - [Instructor] In C#, we can create classes that cannot be inherited from by using the sealed modifier. In this way, this is the direct opposite of the abstract modifier, which defines a class that must be inherited from, and can't be individually instantiated. By sealing a class, you can ensure that the functionality of the class can't be modified by other developers in unintended ways. And in fact, one of the most basic classes in the .NET framework is sealed, and that's the string class. So if you look at the string class definition, you can see that sure enough, it's a sealed class. All right, so let's take a look at how this works back in the main program. Let's open up our program code and our example code. And let's take a look at the first example. So I have two classes, I have class A and class B, and you can see that B inherits from class A. In my main program, the code creates an instance of Class B. So if I run this code, let's just run what we have right now. And at the output, we can see that, first, the A constructor has a console right line in it. So does the constructor for B, and then Func1 has a console output that says Func1 in Class B. And sure enough, we get what we expect. Class A is constructed, so is class B, and then Func1 in class B gets called. So now I'm going to add the sealed declaration to the class.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=94)** So up here, I'm going to write public sealed class A. And when I do that, you notice a few things happen. First, I now get this red error line that says Func1 is a virtual member in a sealed type. It doesn't make much sense to have a virtual function inside a sealed class because nobody can override it. You'll also notice that there's an error here on this declaration, it says class B cannot derive from sealed type A. So because A is now sealed, you can't create a subclass. And then finally, there's one more error that says that there's no suitable method found to override. And that makes sense because this function is no longer visible from within class A. So by sealing the class, I've made it impossible for anyone to derive a new class from it. Right, so let's go back and change that back. Okay, and let's close our terminal. It's also possible to apply the sealed modifier to individual members of a class. So let's scroll down a little bit further, and you'll notice that I've got classes C, D, and E. And so C is the base class, D is a subclass, and then E derives from D. And you'll notice that there's a function called Func2, which is defined in Class C, and then overridden in both classes, D and E. So what I'm going to do is apply the sealed modifier to D to prevent the method
>
> **[3:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=187)** from being overridden any further. So what I'm going to do here is leave the override in place, and put the sealed keyword in front of it. So now, class C is fine, that's unchanged. In Class D, I can define my own version of Func2, because I'm overriding it, but because it's sealed in class D, class E can no longer override it. And you can see that there's a little red compile error right here that says cannot override inherited member Func2 because it is sealed. So in this case, I've applied, sealed just to an individual member of the class and not the entire class. All right, let's go back and take that back off again. So one of the main reasons you might want to use a sealed classes or sealed methods is to be able to ensure that the functionality of the class or method isn't changed by a subclass. This can be for security reasons or just for general class design reasons. In the case of the string class, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) sealed the class because a string is an immutable object, and there really isn't any good reason for other classes to subclass the string object. So if you have such code in your application system, then it might be a good idea to seal the class unless you have a good reason to let the object be modifiable by subclasses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** net (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Abstract employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=0)** - [Instructor] For our final programming challenge, we're going to apply the lessons of this chapter to the employee classes that we've built up in the previous challenges. So if we look at the code as we left it in the last challenge, we can see that there's some room for improvement. First, we don't want developers to be able to instantiate the employee base class. They should have to choose between either hourly employee or salaried employee. Next, notice how the adjust pay method is defined in the employee base class and has an empty implementation. We should require that derived classes implement this method for themselves. And then finally, let's make sure that the hourly and salaried employee classes can't be extended any further. We've learned how to do all three of those things in this chapter, so let's put that knowledge to work in this challenge. And I'll explain my solution in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Abstract employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=0)** - [Instructor] All right, let's review the requirements that we had for this challenge. First, we wanted to make sure that the Employee base class itself could not be instantiated. Next, we wanted to make sure that the AdjustPay method was required to be implemented by subclasses. And finally, we wanted to make sure that the Hourly and Salaried subclasses could not be subclassed themselves any further. All right, let's open up my solution code to this. So for the first part, we just need to modify our class definition for Employee to include the abstract keyword. This prevents the Employee class from being instantiated itself. The abstract keyword also helps us solve the second requirement. We defined AdjustPay as abstract and subclasses of Employee now have to provide their own implementation. And if we look down in Hourly and SalariedEmployee we can see that that is the case. They both have their own implementations. And then finally, to prevent our subclasses from being extended any further, we just need to apply the sealed keyword to their definitions. So I have now a sealed class for HourlyEmployee and sealed class for SalariedEmployee. Just to make sure everything's working, let's go ahead and bring this up in the terminal. And let's run. And sure enough, everything works. And let's go back and try to make a few things that we know are going to work.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=96)** If I write var empl equals new Employee, oh, we can see that that doesn't work, right? Because that's obviously abstract. All right, let's go ahead and take that back out. If I go to the employees and I try to take out my override of AdjustPay, all right? Oh, now we can see that that's an error because it says, "Hey, 'HourlyEmployee' does not implement "inherited abstract member," AdjustPay. So that's all good. So let's put that back in. All right, oh, let's try one more thing. Let's try to make a subclass of SalariedEmployee. So if I make, what's this? public class, let's just call it A, and it's going to be SalariedEmployee. Oh, okay, that's clearly an error, why? Ah, "'A': cannot derive "from sealed type "SalariedEmployee'." So it looks like we fulfilled all the requirements for this challenge. So how'd you do? Did you get the same result? Take a look at my code, compare it to yours and see if there are any differences.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=0)** - Congratulations on finishing the course. I hope you enjoyed learning along with me about .NET [Object-Oriented Programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md), and that you now have a good understanding of how to apply what we've covered in some of your own projects. We saw how to define classes, apply access controls to your logic, make use of properties, and use of advanced features, like static members and abstract and sealed classes. There's plenty more .NET content in the library, so I would suggest taking some time to look through the courses and continue learning about the great features that the .NET Platform provides. Just go to the homepage of the library, type .NET into the Search box, you'll be on your way. I hope to see you again in another one of my courses soon. Until then, happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **Env Vars:** net (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Joe Marini](../../Instructors/Software%20Development/Joe%20Marini.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-advanced-object-oriented-programming-4406346/codespaces)

## Skills Covered

- C#

## Path Context

### In [C- Excellence- Architecting High-Performance Solutions](../../Paths/Software%20Development/Learning%20Paths/C-%20Excellence-%20Architecting%20High-Performance%20Solutions.md)
← [Advanced C- Language Features](Advanced%20C-%20Language%20Features.md) | **4 of 6** | [Asynchronous Programming in C-](Asynchronous%20Programming%20in%20C-.md) →

## Appears In

- [C- Excellence- Architecting High-Performance Solutions](../../Paths/Software%20Development/Learning%20Paths/C-%20Excellence-%20Architecting%20High-Performance%20Solutions.md)

## Related Courses

_Courses sharing skills:_

- [Learning C-](Learning%20C-.md) — C#
- [Cert Prep- Unity Certified Associate Game Developer Scripting with C-](Cert%20Prep-%20Unity%20Certified%20Associate%20Game%20Developer%20Scripting%20with%20C-.md) — C#
- [Nail Your C- Interview](Nail%20Your%20C-%20Interview.md) — C#
- [C- Design Patterns Part 2](C-%20Design%20Patterns%20Part%202.md) — C#
- [C- Design Patterns Part 1](C-%20Design%20Patterns%20Part%201.md) — C#

---

[↑ Back to top](#)