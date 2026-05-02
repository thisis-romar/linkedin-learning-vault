---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: php-object-oriented-programming-2017
url: "https://www.linkedin.com/learning/php-object-oriented-programming-2017"
duration_minutes: 233
duration: 3h 53m
level: Intermediate
updated: 2/18/2022
learners: 75878
skills:
  - PHP
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEGp6ZEDEHN7Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1644609693396?e=2147483647&amp;v=beta&amp;t=n__jGsHzlV2ApQD2nHzROj7PrwOgOR7hDBaf-J1IlrU"
linkedin_topic: Software Development
learning_paths:
  - '[[Get Started with PHP]]'
prev_courses:
  - '[[PHP with MySQL Essential Training- 2 Build a CMS]]'
next_courses:
  - '[[PHP- Object-Oriented Programming with Databases]]'
path_nav: '[{"path":"Get Started with PHP","position":5,"total":6,"prev":"PHP with MySQL Essential Training- 2 Build a CMS","next":"PHP- Object-Oriented Programming with Databases"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/PHP-%20Object-Oriented%20Programming.md)

![PHP: Object-Oriented Programming](https://media.licdn.com/dms/image/v2/C4E0DAQEGp6ZEDEHN7Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1644609693396?e=2147483647&amp;v=beta&amp;t=n__jGsHzlV2ApQD2nHzROj7PrwOgOR7hDBaf-J1IlrU)

# PHP: Object-Oriented Programming

> PHP developers can benefit from the efficient, well-organized, reusable, and easy-to-understand code that object-oriented programming offers. In this intermediate-level course, Kevin Skoglund introduces object-oriented programming (OOP) principles for PHP. Kevin shows how to define a class, add properties and methods, and create new instances. He demonstrates how to use class inheritance to share,

> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017) | 3h 53m | Intermediate | 76K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [PHP: OOP techniques](#php-oop-techniques)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Overview and Project Set Up**](#1-overview-and-project-set-up) (2 videos)
  - [What is OOP?](#what-is-oop)
  - [Project set up](#project-set-up)
- [**2. Object Basics**](#2-object-basics) (7 videos)
  - [Define a class](#define-a-class)
  - [Instances](#instances)
  - [Class properties](#class-properties)
  - [Class methods](#class-methods)
  - [Refer to an instance](#refer-to-an-instance)
  - [Challenge: Properties and methods](#challenge-properties-and-methods)
  - [Solution: Properties and methods](#solution-properties-and-methods)
- [**3. Class Inheritance**](#3-class-inheritance) (5 videos)
  - [What is inheritance?](#what-is-inheritance)
  - [Define a subclass](#define-a-subclass)
  - [Extend and override](#extend-and-override)
  - [Challenge: Inheritance](#challenge-inheritance)
  - [Solution: Inheritance](#solution-inheritance)
- [**4. Object Access Control**](#4-object-access-control) (5 videos)
  - [Visibility modifiers](#visibility-modifiers)
  - [Beware of overloading](#beware-of-overloading)
  - [Setter and getter methods](#setter-and-getter-methods)
  - [Challenge: Access control](#challenge-access-control)
  - [Solution: Access control](#solution-access-control)
- [**5. Static Properties and Methods**](#5-static-properties-and-methods) (7 videos)
  - [The static modifier](#the-static-modifier)
  - [Inherited static behaviors](#inherited-static-behaviors)
  - [Class constants](#class-constants)
  - [Refer to the parent class](#refer-to-the-parent-class)
  - [Late static bindings](#late-static-bindings)
  - [Challenge: Static references](#challenge-static-references)
  - [Solution: Static references](#solution-static-references)
- [**6. Magic Methods**](#6-magic-methods) (7 videos)
  - [Constructor method](#constructor-method)
  - [Constructor arguments](#constructor-arguments)
  - [Destructor method](#destructor-method)
  - [Clone method](#clone-method)
  - [Assignment by reference](#assignment-by-reference)
  - [Compare objects](#compare-objects)
  - [Autoload undefined classes](#autoload-undefined-classes)
- [**7. A PHP OOP Project**](#7-a-php-oop-project) (7 videos)
  - [Project introduction](#project-introduction)
  - [Challenge: The bicycle class](#challenge-the-bicycle-class)
  - [Solution: The bicycle class](#solution-the-bicycle-class)
  - [From instances to HTML](#from-instances-to-html)
  - [Read from a CSV file](#read-from-a-csv-file)
  - [Improve ParseCSV](#improve-parsecsv)
  - [From a CSV file to instances](#from-a-csv-file-to-instances)
- [**Conclusion**](#conclusion) (1 videos)
  - [Happy Coding](#happy-coding)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### PHP: OOP techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=0)** - [Kevin] Welcome to PHP Object-Oriented Programming.
>
> **[0:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=3)** My name is Kevin Skoglund.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=5)** I'm excited to teach you object-oriented programming in PHP.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=9)** In this course, we'll start by defining classes with properties and methods and then create instances from those classes.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=16)** We will learn how to use class inheritance to share, extend, and override object behaviors.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=21)** We will use visibility, modifiers to control access to the code inside a class.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=26)** We will discover how to define behaviors on a class as a whole, rather than on a specific object.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=32)** We will uncover the automatic behaviors of several magic methods and learn to write our own.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=37)** And finally, we'll get some real world experience by adding OOP code to a website project.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=43)** This is an intermediate course, which will assume that you already know the basics of PHP.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=48)** If you need to review your skills, [[PHP Essential Training]] and PHP with MySQL Essential Training Parts One and Two will prepare you with everything you need to know for this course.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/php-oop-techniques?u=76281980&t=58)** Once you're ready, let's get started learning PHP Object-Oriented Programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), oop (1), [[MySQL]] (1)
> **CLI Commands:** php (6), mysql (1)
> **Env Vars:** php (6), oop (1)
> **Definitions:** is an  (1)
> **Speakers:** - [kevin] (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=0)** - [Instructor] This course includes exercise files.
>
> **[0:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=3)** In order to make use of these exercise files, you want to first make sure that you have PHP installed and working.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=9)** You can find the exercise files that correspond to the movie that you're watching by first looking for the chapter number and then the movie number.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=16)** You should copy the exercise files into your web document route directory.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=20)** That is a location where your web server will look for files when a browser requests them.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=24)** On my Mac, that's going to be inside my user directory inside the sites directory.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=30)** It's always a good idea to make a copy of the exercise files so that you still have the original to refer back to if you make changes.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=36)** I will option drag the folder, create a new copy.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=39)** Once you have the files in place, you'll be able to follow along with me.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=43)** Everything that's in the exercise files we will also create together during the tutorials.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=48)** So you can just work along with me and your files will mirror what's in the exercise files.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=52)** Remember that you can pause the video or rewind if you need more time to copy something down.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/how-to-use-the-exercise-files-14621610?u=76281980&t=58)** You can also use the exercise files to check your work or to get back in sync if you experiment on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (2), [[PHP]] (1)
> **Exercise Files:** exercise files (8)
> **CLI Commands:** make (4), php (1), find (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview and Project Set Up

[↑ Back to Table of Contents](#table-of-contents)

#### What is OOP?
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=0)** - [Instructor] Let's begin by talking about what is OOP.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=4)** OOP is an abbreviation for object-oriented programming.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=9)** Object-oriented programming is a type of programming where we define data structures, those are the objects, which can hold both values and functions.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=18)** PHP is a scripting language or a procedural language.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=21)** If you've been using PHP already, then you've been setting variables and you've been defining functions.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=26)** Working with PHP in this way is considered procedural, not object-oriented.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=32)** Our code changes are rather linear as we move down the page of code.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=35)** We set values.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=36)** We call functions.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=38)** We work with the results.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=39)** We're calling procedures as we move down the page.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=43)** PHP is not considered an object-oriented language.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=47)** Instead, it's a scripting language with object-oriented features built into it, features that were added in PHP 5.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=54)** Now the fact that PHP isn't fundamentally object-oriented isn't a problem, it just means that we have a choice.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=60)** We can either work with PHP in a procedural way or in an object-oriented way.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=65)** So how do you know if you need object-oriented programming?
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=69)** Well, if scripting and procedures are all you want PHP to do, then you may not benefit from it.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=74)** But if you're asking PHP to do more complex work, then OOP may be exactly what you need to manage that complexity.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=81)** Here's my rule of thumb.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=82)** For a simple site, object-oriented programming adds unnecessary complexity.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=87)** But for a complex site, object-oriented programming adds necessary simplicity.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=93)** And database-driven sites generally have enough complexity that they will benefit from object-oriented programming.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=100)** So what exactly are these objects that we're talking about?
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=103)** Well, in the simplest sense, objects are simply grouping code together by a common theme.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=108)** So if you think back to some of the work we've done in the past where we were working with forms that people are submitting, we write functions that relate to those forms.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=116)** We could take all of those functions and roll them up into a form object, and then our code would be grouped together by a common theme.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=122)** And we'd be able to find those functions all in one place.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=125)** We can also use software objects to create abstractions for concepts in our code, as if they were real world objects.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=132)** And this is probably a more common use than just grouping them together by some basic theme.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=138)** If we have a website that's selling products, then we would probably have a customer object and that would be an abstraction for the real world customer object.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=148)** We would probably also have a product object that we're selling the customer, a shopping cart object, a credit card object, and so on.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=155)** Objects don't have to have real world analogs either.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=158)** If we have a blog, then we might have a blog post object.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=161)** And if users are able to comment on the blog post, then we would probably have a user object and a comment object as well.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=169)** Remember, object-oriented programming is about creating data structures which hold values and functions.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=175)** We call those properties and methods.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=178)** These are the fundamental elements for defining and working with objects.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=182)** Properties are just variables inside the object.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=185)** They define the characteristics of a particular object.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=188)** When we think of real world objects, we naturally think of their properties.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=192)** The dress is green.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=194)** Green is a property of the dress.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=196)** The table is four feet long and two feet wide.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=200)** The house has three bedrooms and two bathrooms.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=204)** In code, object properties might be a student object which has a first name and a last name or a book object which has a title, an author, a year, and the number of pages.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=214)** These are all just variables that we set to define the properties of a particular object.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=219)** Methods are just like our regular procedural functions, but they're stored inside the object so that the object knows how to do something.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=228)** For example, a shopping cart object could have a method called total, which would inspect the properties of all the product objects in the shopping cart, get their prices, and return back the total amount.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=238)** This is where objects get a lot of their power because we can add methods to teach them how to perform tasks, to examine properties, and to call other methods.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=246)** Our shopping cart object might have an add to cart method which performs several tasks.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=251)** It checks product inventory, then it adds the product to the cart, then it increments the cart quantity, and perhaps even removes an item from the inventory.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=259)** That's a lot of complexity that's being nicely packaged up into a single simple function.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=265)** So objects are very useful, especially for managing complexity.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=268)** They make our code organized and easier to maintain.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=272)** It adds clarity to our code so that it's clear what we're trying to do and reduces complexity.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=278)** We can write simple rules to allow complex interactions because functions can call other functions which call other functions and so on.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=286)** And they also allow us to emphasize the data over the procedure.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=291)** The objects have certain characteristics, and they react a certain way based on those characteristics.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=297)** And objects allow us to have modular, reusable code.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=301)** If we create a customer object in one project, it very well may be largely reusable in another project.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=308)** And we'll be able to take advantage of all of the intelligence that we've put into that object in the previous project.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-oop-14626500?u=76281980&t=315)** Now that we have some idea of what objects are and why they're usable, let's get started using them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (7), product (4), oop (3), data (3)
> **Env Vars:** php (9), oop (3)
> **CLI Commands:** php (9), find (1), make (1)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **Analogies:** just like (1), for example (1)
> **Versions:** php 5 (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Project set up
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=0)** - [Instructor] In this movie, we'll get our development space set up so that we can learn object oriented programming.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=5)** The first thing that we'll want to do is make sure that you know where your web document root is.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=10)** That's the default directory that your web server will use to serve up documents to the browser.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=15)** If you've been working in PHP, chances are you know where that is right away.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=19)** That's the place we're going to be locating our files.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=22)** And of course you'll want to make sure that PHP is running as well.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=24)** We'll do a quick test of that together.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=27)** After that in chapters one through six, we're going to be doing our learning inside a demonstration directory called oop_sandbox.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=36)** This directory will be a place where we can put all the examples of the different concepts as we're learning them.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=42)** It'll give you a convenient location where you can refer back to those concepts if you need reference and it'll provide a space where you can experiment on your own if you want.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=50)** I frequently use these kinds of sandbox directories to perform experiments of my own.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=55)** Another reason we'll do it this way is because if we were to try and create an actual project, there's almost no chance that any project would use all of the techniques that we'll learn.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=64)** So this will give us a chance to actually try out all of the techniques.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=68)** And then later starting in chapter seven, we're going to use a project, it's going to be a website for a company selling used bicycles that will give us the opportunity to apply the object oriented programming techniques that we've learned to something that's more like a real world scenario.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=84)** So the first step is to locate the web document root.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=87)** For me, that's going to be inside my user directory inside my sites directory.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=92)** So this is where I'm going to be putting all of my files.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=95)** And you can see here I have the oop_sandbox directory that's included in the exercise files but it's also very simple.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=102)** It's just got a couple of files in it.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=103)** I'm going to drag that directory on top of the Adam text editor so that I can open it up inside Adam.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=110)** And then in Adam, I'll be able to look at it in a project view.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=113)** You'll see that I've got this basic .html file which is just a simple HTML template that we can grab and reuse as needed.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=119)** I frequently have those in my projects as well.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=122)** And then we've got php_test.php.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=125)** And this is a page that allow us to test to make sure that we've identified our web document root and that PHP is working.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=131)** If it is working, then it'll just simply call this bit of PHP to say that it's working.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=136)** So let's try it out.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=138)** Let's now save that file.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=140)** Let's come over to Firefox.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=142)** And the default location for is going to be local host.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=146)** And then my user directory, Kevin Skoglund.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=149)** Now for a lot of people, if you're not on a Mac, you probably aren't going to use the user directory.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=153)** You'll probably just have local host.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=155)** And then right after that, the directory oop_sandbox and then the name of that file which is php_test.php.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=165)** If you are able to get that file back, it says PHP is working, then you'll know your files are in the right place and you have PHP up and running and you're ready to go.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-set-up?u=76281980&t=173)** If not, you'll need to troubleshoot it to find the right web document root or to get PHP up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), web (5), [[Programming]] (2), [[HTML]] (2)
> **CLI Commands:** php (9), make (3), find (1)
> **Env Vars:** php (7), html (1)
> **Code Identifiers:** oop_sandbox (3), php_test (2)
> **File Paths:** php_test.php (2)
> **Exercise Files:** exercise files (1), template (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Tools:** firefox (1)


### 2. Object Basics

[↑ Back to Table of Contents](#table-of-contents)

#### Define a class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=0)** - [Instructor] In this movie, we will learn how to define a class in PHP.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=4)** A class provides the definition of an object.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=7)** It describes it.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=9)** And it serves as a template for creating new objects.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=13)** Every class definition begins with the keyword class followed by the class name.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=19)** Then you have curly braces that surround the class definition.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=23)** In the first example, the class is called Person.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=26)** In the second, it's ProductImage.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=29)** There are a few best practices that we should observe when declaring classes.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=33)** The first is that you want to capitalize and camelcase the class names.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=39)** Camelcase means that you use uppercase for the first letter and then the other words would also be capitalized as well.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=46)** ProductImage was an example of that on the last slide, both the P and the I are capitalized.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=52)** Class names should also use singular nouns.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=56)** Don't use plurals, because we're defining what a single object would look like.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=61)** It's also a best practice to define each class in a separate file.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=66)** In our final project, we're going to be doing that for sure.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=69)** When we're working with it in our sandbox, frequently we'll be putting some other code into the class definition file as well, just for convenience and to keep it isolated as a single example.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=79)** But it's a best practice to keep class definitions in their own file.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=83)** And then you would group those class files together in a directory.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=87)** Frequently, that's a directory that's just simply called Classes.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=90)** We'll learn more about writing the definition for our class in the following movies.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=94)** But before we do, there are two functions for classes that we should know about.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=98)** Whenever we declare a class, PHP keeps track of the fact that it's been declared.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=103)** And we can call get_declared_classes which will return an array of the classes that PHP knows about.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=110)** Then we also have another function called class_exists, which takes a string as an argument and returns true or false, depending on whether a class is in that array of declared classes.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=121)** Let's try these out in our OOP sandbox.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=124)** Here I am in my project and I'm actually going to just Control + Click on top of the sandbox and choose New File.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=130)** And that'll create a new file in the project.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=134)** I'm going to just simply call it class_example.php.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=139)** And you'll see that it appears right here inside my sandbox.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=142)** Once I'm there, then I can put in my class definition.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=145)** Now we have to do this inside PHP tags, because, of course, we're working in PHP.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=149)** And we define the class or declare our class by simply having class and then whatever the name of the class is.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=155)** I'm going to use Student.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=157)** So, again, remember you want to use singular nouns, and if you have something that's sort of a hyphenated or multi-word noun, like StudentProfile or StudentSchedule, you want to make sure that you use capitals for the second word as well.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=173)** I'm just going to use Student for this one.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=176)** And now I have a class definition.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=178)** Now it's not very exciting, there's nothing that's in there yet.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=180)** We're going to learn how to make it more exciting later.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=183)** But that's all it takes to actually define a class.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=185)** And we can check that by getting that array using get_declared_classes, and that will return an array of the classes.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=196)** And then we can actually look at that.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=197)** Let's do that with echo "Classes: " and let's add that to our array to actually turn the array into a string so that we can output it.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=206)** We're going to use implode, and then I'll use classes.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=212)** Then let's use a br tag at the end just to make it look nice.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=216)** Because down here, I also want to use that class_exists.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=221)** I'm going to do that.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=222)** I'm going to do a couple of tests here.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=223)** Let's do class_names, we're going to make a new array and I'm going to have Product and Student, and let's do lowercase student.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=235)** And then let's do a loop, foreach.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=239)** We'll do class_names as class_name.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=245)** And then inside our loop, let's test each one of those items to see if the class exists.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=250)** So we'll use class_exists.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=252)** We'll pass in the string for the class_name.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=256)** And if it exists, and let's do an else for when it doesn't exist, if it does exist, we'll echo back, let's interpolate a string here for class_name is a declared class.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=272)** And let's put a br tag at the end.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=275)** And then we'll just copy that line, we'll paste it down here, is not a declared class.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=280)** All right, so that'll just loop through and tell us whether something is a declared class or not.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=284)** All right, let's save this file and let's go try it out.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=287)** Let's come over here to Firefox, and instead of php_test, we're now going to do class_example.php.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=296)** And there we go.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=297)** Now here's the list of classes.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=299)** Notice that there's a lot of classes built in to PHP, right?
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=303)** Not just our student class which is here at the end, but all these other classes are there as well.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=308)** These are built-in classes.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=310)** These are functionality.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=311)** Yours may be different.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=312)** You may have different libraries installed in your PHP.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=315)** All right, so don't panic if it's not the same.
>
> **[5:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=317)** But you'll see that there are a lot of classes there as well as our class.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=321)** And then we have Product is not a declared class.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=325)** Student is a declared class.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=327)** And notice this, lowercase student is also considered a declared class.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=333)** So it doesn't matter whether the string is capitalized or not.
>
> **[5:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=335)** It's case insensitive when it checks, so it is still considered a declared class.
>
> **[5:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=341)** So now we know how to define a class, but we don't know how to actually use a class.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-class-14625471?u=76281980&t=345)** And that's what we're going to learn how to do in the next movie when we create new instances of this class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), [[Microsoft Word|Word]] (2), product (2), oop (1), next (1)
> **CLI Commands:** php (9), make (4)
> **Code Identifiers:** class_exists (3), class_name (3), get_declared_classes (2), class_example (2), class_names (2)
> **Env Vars:** php (7), oop (1)
> **Definitions:** is a  (3), is called (1), means that (1)
> **File Paths:** class_example.php (2)
> **Best Practices:** best practice (2)
> **Cross-References:** in the next (1)

#### Instances
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to use our class definition to create an instance.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=5)** Let's begin with the definition for this word instance in general use an instance is a single occurrence of something.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=13)** When we're talking about object-oriented programming that single occurrence of something is a single object created from a class definition.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=21)** So we're going to be using this word instance a lot and you'll hear the terms object and instance used interchangeably.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=28)** I'm certain that I'm going to do it but instance is technically the more correct term.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=33)** So let's see how we create an instance.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=35)** The first thing of course is we have to have a class definition before we can create an instance of it.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=40)** The way we create the instance of the class is by using the new keyword followed by the class name.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=47)** This is called instantiation, or we could use it as a verb and say that we instantiated it.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=53)** Instantiation is just a fancy word.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=56)** That means to create an instance, note that the class name here is not string once a class has been declared.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=64)** We can call it by its name in PHP.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=67)** Creating a new object is almost always done while also assigning that object to a variable here we're assigning it to the variable person one.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=75)** Then the variable will reference that object going forward and we can work with it in our code.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=81)** We can create a second instance of the class and assign it to a different variable person2 .
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=87)** Now we have two instances of the person class we can have as many of these instances as we want, each one will be a unique object but all of them will share the same class definition.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=100)** Creating instances from a class definition is a like one of those memo pads like a while you were out pad you pull off a page every time you take a new message, each page is different but they all came from the same template.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=113)** The structure and the blank spaces are going to be the same.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=117)** We create new instances from our class definition and then we fill out each one with different information.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=123)** So that they're unique.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=125)** There are two functions that are helpful when working with instances, the first is get_class and it takes an instance as its argument and it returns the name of that class.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=135)** So we pass in an instance it tells us what the class name is.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=139)** The second is is_a this function takes an object and a string as arguments and it returns true or false.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=146)** If the object has the same class name as the string.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=150)** let's try creating some instances in the OOP Sandbox.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=154)** I'm going to go up here and just click on one of these files with Control, Control click on it and choose New File.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=161)** And I'm going to make another file in here called Class Instances.php.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=167)** And inside there I'll open up my PHP tags 'cause obviously we are going to need those.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=171)** And I'm going to go ahead and just add that same class that we had from example back here, right?
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=177)** Class student You can copy that.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=180)** Let's come back over here and let's paste it in.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=184)** Okay so we've got our student class.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=186)** Now we can create instances of that class using new and then the name of the class, not a string the actual name of the class and a semicolon at the end.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=196)** Now of course this will instantiate the class but then it would just be there and there'd be no way to reference it, right?
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=202)** It'd just be lost in PHP with no way to talk about it.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=205)** So we want to assign it to a variable.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=207)** So I'm going to have student1 and that's because I'm going to also copy this and I'm going to create another instance that is student number two, right?
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=216)** So I'm just ripping off pages of my memo pad, my student memo pad.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=220)** Each one is going to be unique.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=222)** Now eventually we'll learn how to fill these out with information like the student's first name and their last name for example and that'll make them unique.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=228)** For now, we just have a blank class definition.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=232)** It doesn't have anything more interesting in it than that but we can try out those new functions that we talked about.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=238)** Echo get_class let's put in student one and that'll return its class.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=245)** Let's also just put a br tag at the end so that it just drops to a new line.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=249)** And then let's also go up here to this class example that we were working with before.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=253)** And I'm going to grab this loop that we're working with.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=256)** Save some time by copying that coming back over I'm going to paste it in.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=260)** I'm just still going to use these same class names 'product', 'student', 'student'.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=264)** I'm going to loop through them.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=265)** But instead of class exists I'm going to use is_a I'm going to pass in an instance I'm going to use student1 as the instance that I'm going to pass in.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=275)** And the class name is still that string as we loop through it, right?
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=278)** So it'll check to see a student1 a product is student1 a student is student1 a student using lower case.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=285)** And then we'll echo back the results, which is going to be slightly different.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=288)** Let's say student1 is a, and let's remove this and I'll just copy that line.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=295)** Student1 is not a right?
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=298)** So this will return true or false.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=300)** Is it that class name or not?
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=302)** So let's go and let's try this out.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=304)** Let's save this, go over to Firefox.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=306)** And instead of class example, I'm going to change it to class instances.php.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=313)** There we go.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=314)** You can see the name of the class is student, right?
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=318)** That's coming from right here from get_class.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=321)** So that's how I'm able to know that this is a student.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=323)** Student1 is not a Product.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=326)** student1 is a student, student1 is a lower case student.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=330)** So it is case insensitive when it checks, but it is a best practice to always try and use the uppercase because that is the name of the class.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=338)** So go ahead and do that.
>
> **[5:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=339)** Even though it allows the lower case, you want to try and use the correct one notice also that this whole process of defining a class and instantiating a class had no output whatsoever, right?
>
> **[5:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=351)** It was only once we started doing echoing that we actually put something out in the browser.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=356)** There's no output from defining a class or instantiated an object from that class.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=361)** All right, now we know how to define a class and we know how to create instances of the class.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/instances-14621603?u=76281980&t=365)** Now we're ready to start making our class definition more interesting by adding in attributes and methods to them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Microsoft Word|Word]] (3), product (3), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), oop (1)
> **Definitions:** is a  (7), is called (1)
> **CLI Commands:** php (5), make (2)
> **Env Vars:** php (3), oop (1)
> **Code Identifiers:** get_class (3)
> **File Paths:** instances.php (2)
> **Cross-References:** we talked about (1)
> **Tools:** firefox (1)

#### Class properties
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=0)** - [Instructor] In this movie we're going to learn how to add properties to our class definitions.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=5)** Properties are simply variables to hold object values.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=9)** These are also frequently referred to as attributes, class variables, or instance variables.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=15)** And you'll hear these terms used interchangeably all the time.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=18)** They mean the same thing.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=19)** They're even used interchangeably inside the PHP documentation.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=23)** So don't be confused if you see it called properties one place and attributes somewhere else.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=28)** The way that we define properties is with the var keyword followed by the variable name that we want to use.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=35)** And our variable name follows all the normal variable naming rules.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=38)** We also have the ability to set an initial default value for each property.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=43)** Let's see an example.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=45)** Here. I have a class Person and inside there are four properties being defined.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=51)** First name, last name, employed, and country.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=55)** You can see that all of them begin with that var keyword to let it know that it's defining a property followed by the variable name with the dollar sign in front of it.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=63)** For the first two, there's just simply a semicolon at the end of the line, For employed and country, there's also a default value that's being set.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=71)** So it's being initialized to employed equals false and country equals the string None.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=77)** The way that we set values to these attributes and read them back is by first creating an instance of the object and then using arrow notation to reference the property.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=88)** So here I have the customer variable at the beginning followed by the arrow notation, that's the minus sign and then the greater than sign, together they make an arrow, followed by the property name.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=100)** In this case first_name.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=102)** Notice that property name does not have a dollar sign in front of it.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=106)** This frequently trips up beginners.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=108)** The dollar sign is only in front of the variable itself: customer.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=113)** The arrow notation takes the place of the dollar sign.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=116)** We don't need to have it.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=117)** It knows that we're talking about a property and it knows that that property is a variable.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=122)** So there's no reason to put the dollar sign in front of it again.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=126)** After that you can see I'm using an equal sign to set a value to that property.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=130)** So now this instance, a person, is going to have a first name property set to Anna.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=136)** I can also set the last name equal to Martin.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=139)** Then I can read those values back also by using that arrow notation.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=144)** Here I'm asking to echo customer and then the arrow notation first_name.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=150)** And of course it returns back Anna.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=152)** So whether we have an equal sign after it or not determines whether we're setting or reading a value, just like with a normal variable.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=160)** We can also call for the customer country and we'll get back that default value that we set, the value None.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=167)** Or we can, of course, set it to a new value.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=169)** And when we read it back, it'll return the new value.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=172)** Properties is where object-oriented programming gets its power because now, each of our instances that we create can be different and unique.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=180)** We can have a thousand instances of the person object and every single one of them can have a different first name and a last name, and therefore behave differently because of it.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=190)** There are a couple of functions that are useful for working with properties.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=193)** The first is get_class_vars and it's going to return a list of the properties that defined in this class.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=200)** We don't have to have an instance to do it.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=201)** We just call the name of the class using a string.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=205)** We also have get_object_vars, which does the same thing, but as an argument, it takes an instance of the object.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=211)** They're very similar.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=212)** They return basically the same information except that class vars is going to have the default values for the class, whereas object vars will return the current values for that instance.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=224)** And then last we have property_exists which returns true or false based on whether property exists on the class or on the object.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=233)** You'll notice that the first argument there is called mixed.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=235)** That's because mixed can either be a class name as a string or an object instance.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=240)** It'll accept either one.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=242)** And then the second argument is a string which is the name of the property we want to check for.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=246)** Let's try these in our OOP sandbox.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=249)** Let's try these by making a duplicate of our class_instances.php file.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=254)** I'm going to do that by holding down control and clicking on the file name and choosing duplicate and then it'll give me the opportunity to rename it.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=260)** And I'm going to rename this file as properties.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=264)** It's also fine if you want to create a new file and just copy and paste that in there.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=268)** And I'm going to take this code out of here but I'm going to leave the basic class definition and the instantiation here.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=276)** And now inside the class definition let's put some properties.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=279)** I'll put var $first_name and var $last_name.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=288)** And then let's add one more with the default value country = None.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=294)** You can add more if you want, but I think that's adequate.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=296)** We have three properties now on student.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=299)** So each one of these instances now has that property.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=303)** It's just like ripping off the page of the memo pad.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=305)** We've created a new student.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=307)** We have those three properties available to us.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=310)** So let's try setting one of them.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=312)** Let's say student1, we'll use our arrow notation, first_name with no dollar sign in front of it.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=319)** It's not necessary when we're talking about a property.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=322)** Now I don't want to read back the value.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=323)** I know there's no value there yet.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=324)** So let's set a value and let's set it equal to Lucy.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=328)** And then let's do the same thing student1, again using the arrow notation and then last_name, and let's make her last name Ricardo.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=342)** And then I'm going to copy those two.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=343)** I'm going to come down here below student2.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=345)** I'm just going to change the one to be a two.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=348)** And let's change this one to be Ethel and the last name to be Mertz.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=353)** All right, now I have two instances of the object and they're different.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=357)** They're different because the properties have different values in them.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=361)** So the same class, the same object, but a different instance of that object with different properties.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=368)** And then let's read those values back.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=370)** Let's try echo $student1 use that arrow notation again, first_name, let's put a space and then we'll do the same thing student1 and notation last_name.
>
> **[6:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=387)** Then at the end, let's just put a BR tag just so it'll skip to a new line in my browser.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=392)** We'll do the same thing.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=393)** Copy and paste it with student2.
>
> **[6:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=397)** So we should get both those students names back.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=399)** All right, let's try out some of those useful functions that we were talking about.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=403)** We have one for getting the class vars.
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=406)** That's going to be, get_class_vars and it's going to take the class name as a string as its argument.
>
> **[6:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=414)** Let's look at that with class vars.
>
> **[6:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=418)** I'll put a BR tag here.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=420)** We're going to go to a new line because we want to use PRE tags followed by print_r because what this is going to return is an associative array.
>
> **[7:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=432)** So print_r's going to let us really inspect that array and a nice pretty format.
>
> **[7:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=437)** I'll just copy this line and make this an ending HTML tag.
>
> **[7:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=442)** Pre tags will help preserve the formatting that print_r puts out so we can see that nicely.
>
> **[7:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=446)** And then let's do the same thing.
>
> **[7:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=448)** I'm going to copy this.
>
> **[7:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=449)** We also have another one instead of get_class_vars, it's get-object_vars.
>
> **[7:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=454)** And instead of taking the class name, it takes an instance.
>
> **[7:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=457)** So let's use student1, that's an instance.
>
> **[7:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=461)** And let's just rename this to object_vars and object vars and object_vars.
>
> **[7:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=470)** There we go.
>
> **[7:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=471)** All right, so we're using both of those.
>
> **[7:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=472)** And then last of all, let's use this property_exists.
>
> **[7:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=477)** So it's a boolean.
>
> **[7:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=478)** So if property_exists and inside there the arguments we're going to pass in, we can pass in mixed for the first one, but let's use the name of the class.
>
> **[8:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=491)** And does it have the property first_name?
>
> **[8:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=494)** Both of those are strings.
>
> **[8:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=495)** And then we'll return two values back either it will have that property or it won't.
>
> **[8:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=501)** If it does, let's echo property first_name exists in student class.
>
> **[8:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=511)** And then let's just copy that line and put it here and change exist to does not exist in student class.
>
> **[8:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=522)** All right, now we've got all those.
>
> **[8:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=523)** Let's try 'em out.
>
> **[8:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=525)** Come back over here to Firefox and instead of class instances, we're going to be going to class_properties.php.
>
> **[8:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=532)** Here you can see we're setting the value and reading back the value for student1 to be Lucy Ricardo.
>
> **[8:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=538)** The second one you can see is Ethel Mertz.
>
> **[9:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=540)** Then you can see those class vars.
>
> **[9:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=542)** Now, remember this is using just the default class.
>
> **[9:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=544)** So we're seeing the default values.
>
> **[9:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=547)** First_name and last_name have no default values.
>
> **[9:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=549)** Country has a default value of None.
>
> **[9:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=551)** Can of course use the keys from that associate array if we just want to know what the property names are.
>
> **[9:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=557)** Or we could use the values from it, if we just want to know what values are set.
>
> **[9:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=562)** Here when we're working at instance, you can see that I actually see the values here.
>
> **[9:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=566)** First name is Lucy. Last name is Ricardo.
>
> **[9:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=568)** Country still set to None.
>
> **[9:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=570)** And last of all, you can see that property_exists is returning true because the message we're getting back is that it does success.
>
> **[9:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=576)** So the most important things to remember about properties are that you define them inside your class using var, followed by a variable name, and that when you reference them either to read a value or set a value, you use the arrow annotation without the dollar sign.
>
> **[9:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-properties-14621605?u=76281980&t=591)** And last, remember that properties are what make each of our instances unique.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), power (1), oop (1), [[HTML]] (1)
> **Code Identifiers:** first_name (7), property_exists (4), last_name (4), get_class_vars (3), object_vars (3)
> **CLI Commands:** make (4), php (3)
> **Env Vars:** php (1), oop (1), pre (1), html (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **File Paths:** class_instances.php (1), class_properties.php (1)
> **Analogies:** just like (2)
> **Tools:** firefox (1)

#### Class methods
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=0)** - [Instructor] In this movie, we're going to learn to add methods to our class definitions.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=4)** A method is just a function inside the class to perform object actions.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=9)** When we're working with procedural or non-object oriented programming we just call them functions.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=14)** When they're inside a class they're correctly called methods.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=18)** Now you're going to see those two terms used interchangeably all time, even in the PHP documentation.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=23)** So don't get too hung up on it.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=25)** A method is just a function inside a class.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=28)** And in fact, you define them inside the class just like regular functions.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=32)** Let's take a look.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=33)** Here, I have a class definition for person.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=35)** It has a couple of properties for first name and last name.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=38)** And then I have a method.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=40)** Our method is defined using the same function keyword that we would normally use, followed by the name of the function, parentheses to surround any arguments that might be there, and then curly braces around the function definition.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=52)** You can see that our function's also returning a value back just like a normal function would.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=56)** In every way, our class method is just like a function.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=60)** What's different is the way that we refer to it.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=63)** When we had an instance of customer before and we wanted to talk about its properties we used the arrow notation to refer to those.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=70)** So for the property first name we had customer and then the minus and the greater than sign to make an arrow and then the property name.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=79)** We do the same thing when we're working with methods.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=82)** We use the arrow notation to refer to the method name.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=85)** What's different though is notice the parentheses that are after the method name.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=91)** That's how you can tell the difference.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=92)** The parentheses are required, even if there's no arguments.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=96)** If we see the a notation and we see something followed by the parentheses, then we know it's a call to a method.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=103)** If there are no parentheses, then we know it's a call to a property.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=107)** It's very important.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=108)** And of course, customers say hello, would return back the value hello world.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=112)** And then we would echo that back.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=114)** There are also some functions that are useful for working with methods.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=118)** We have get_class_methods, which takes either a class name as a string or an instance of an object and returns the different methods that are available on it.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=127)** And then there's method_exists.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=129)** Again, you pass in either the class name is a string or an instance as the first argument.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=133)** And then the second argument would be the method that you want to know if it exists or not.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=138)** Let's try these out in our sandbox.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=140)** Let's begin by making a duplicate of our class properties file.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=143)** I'll that by using duplicate in the Adam text editor and then class_methods.PHP.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=152)** Let's leave most of this the same, but now inside our class definition, after country, let's add a method.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=158)** So again, it's the function keyword, and then let's just have it say hello.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=162)** You can write something different if you want.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=164)** And I'll just return back the value, hello world, and a semi colon.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=170)** So that's it.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=171)** When we call this method, all it's going to do is return back the string, hello world.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=175)** All right, so now let's go down here and let's try calling it after we've returned back the student's first name, let's add a new line here that's going to echo the result of calling student one.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=185)** Then we'll use the arrow notation and then say_hello and remember, we must put those parentheses after it.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=192)** That's how it's able to know that this is a method call and not a call to a property.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=197)** So we'll do say hello.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=199)** And then after it, let's just add in br tags as well.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=204)** And just so you can see, I think this is clear but let's do it again for student two.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=210)** Just so you see that does the exact same thing.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=211)** We have that same method available on all instances of this object.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=217)** And then let's come down here to where we have get class vars and let's change it to get class methods for student, that's class methods.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=228)** And we don't need to use print R anymore but we have something simpler we can use.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=233)** We can just simply join it together.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=235)** Let's do class methods and join it together using implode because it's not an associate array anymore.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=244)** It's just going to be a simple array.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=247)** Class methods and there are no object vars anymore so we can remove that.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=254)** And instead of property exists, now we're going to check to see whether method exists.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=260)** Now, the method is not called first name.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=261)** The method we want to check for is say hello and let's say method, let's call it, say hello.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=272)** Let's put the parentheses after it in this case.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=275)** Whether it exists in the student class let's paste it down here and say it does not exist in the student class.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=283)** All right, let's save it.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=284)** Let's try it out.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=286)** We'll come back over to our browser, instead of class properties let's try class methods.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=293)** Now there you are.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=294)** Notice now it's calling hello world.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=296)** It's doing it two times 'cause I'm calling it on both instances and you can see the class methods that are there are say hello doesn't have the parenthesis after it, right?
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=305)** It's just the name of the different methods that are there.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-methods-14621607?u=76281980&t=307)** And finally it says, yes it does exist in the student class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Programming]] (1)
> **Code Identifiers:** get_class_methods (1), method_exists (1), class_methods (1), say_hello (1)
> **CLI Commands:** php (2), make (1)
> **Definitions:** is a  (2), we call this (1)
> **Analogies:** just like (3)
> **Env Vars:** php (2)
> **File Paths:** class_methods.php (1)
> **Speakers:** - [instructor] (1)

#### Refer to an instance
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=0)** - [Instructor] Now that we know how to add methods to our class definitions, we need to spend some time talking about how to refer to instances from inside those methods.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=8)** First, let me show you what the problem is with it and then I'll show you the solution.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=13)** Let's say that we have a class definition for person and it has two properties for first name and last name and it has a method and we want that method to take the first name and last name and join them together with a space in between.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=24)** So you might try and do it like this using simple variable names to refer to first name and last name.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=30)** So then we go to create an instance of that person and I'll assign it to the variable, P, then we can use P to refer to this instance from then on.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=38)** It's very convenient.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=39)** The variable now points to the instance and we can use it to refer to the different properties as well as to the method.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=46)** But when we ask for full name, we don't get back the string we expect.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=49)** Instead we get back a notice about undefined variables for first name and last name.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=54)** What's going on is that first name and last name are just simple variable names in PHP and PHP doesn't know that it's looking for an object and the properties of the object.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=64)** It's treating them like simple variables.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=66)** What we need is some way for the full name method to refer to this current instance and then be able to get a property from there, the same way we did with P when we were outside the class but we can't use P obviously inside the class, it's just just a temporary variable that we've set.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=85)** So how do we do it?
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=86)** Well, when we're outside the class, we saw that we could use dollar sign variable and then the arrow notation.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=92)** When we're inside the class, PHP gives us a special variable to use called this.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=97)** And it's makes a lot of sense, right?
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=98)** It's this instance.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=100)** So it's a variable saying, hey, this instance, go and get either its property or its method can be reused for absolutely anything.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=108)** It's just a way to refer to this current instance.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=111)** So instead, you would have something like this.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=114)** Notice now that in the full name method it's calling this first name and concatenate with this last name.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=122)** Now, when we call the full name method, it returns the string that we would expect.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=126)** It will take a little getting used to at first, but soon, it will become second nature.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=130)** Let's try an example.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=132)** Instead of creating a new file for this, let's actually just do this in our class methods file that we already have.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=138)** Let's just add a new method here and we're going to call it full name, just like our example.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=144)** Now we don't need to pass in any values to it.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=146)** We're going to use these attributes and we're going to do that by returning back the value of this and then the aero notation first underscore name and then let's concatenate that together with this arrow notation, last name.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=163)** And that's it.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=164)** Go down and try and use it and let's see right here where we work concatenating these together and calling them, let's just change this to be full underscore name and remember we have to have the parentheses at the end.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=179)** I'll copy that and I'll replace this one with the same thing.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=184)** Now let's go and bring that page back up.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=187)** Here are our class methods.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=188)** Let's say return and you'll see that it works.
>
> **[3:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=191)** Notice now class methods added a new method.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=193)** That's here full name and you'll see that it still works.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=196)** We still get both Lucy Ricardo and Ethel Mertz, which is the results of that.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=200)** Now, if you want to try it the other way just to see, just take this out for a second, try it the other way, and let's reload the page and you'll see we get a notice.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=209)** See, undefined variable, first name.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=211)** We need to have this in front of it so that it knows that it's talking about this current instance.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=217)** Another way to think about it is just anytime we're working with either a property or a method, we are going to use the arrow notation.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=226)** It doesn't matter if we're inside or outside of the class.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-an-instance-14621608?u=76281980&t=229)** The arrow notation is how we know we're working in an object-oriented way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Properties and methods
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=0)** (chiming music)
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=6)** - [Instructor] It's time for our first challenge.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=8)** In this challenge, we want to put all the things we've worked on in this chapter to the test.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=12)** Defining classes, adding properties, and adding methods.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=17)** To do that, I want you to create a new file inside your Sandbox, which is going to be called challenge_01.php.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=26)** Inside that file, you'll define a new class for a bicycle.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=31)** We're going to be creating instances of bicycles.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=34)** And the properties that each bicycle will have are brand, model, year, description, and weight_kg.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=42)** That's a place for storing the weight in kilograms.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=46)** Then in addition to that, we're going to have some methods.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=48)** We're going to have name, weight_lbs, which is an abbreviation for pounds, and set_weight_lbs.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=56)** So let me describe what all those methods should do.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=58)** The first one is just going to be a simple name for this bicycle.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=62)** What I want you to do is take brand, model, and year and put them together in a string of your choosing to output a simple name for this bicycle.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=72)** So for each instance, we should be able to find out.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=75)** Tell me about this bicycle.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=76)** What's its name?
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=77)** And the name is going to be a combination of brand, model, and year.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=80)** Then, for weight_lbs what I'd like you to do is convert from kilograms into pounds.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=88)** And the conversion that you can use for that is that one kilogram equals 2.2046226218 pounds.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=98)** So that means that if you have a certain number of kilograms and you want to find out the number of pounds, you're going to multiply in order to find that value.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=106)** And then last, set_weight_lbs is going to be a way that we can pass in a weight in pounds and have it converted into kilograms and stored in weight_kg.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=120)** So you'll be able to set the weight, either by kilograms or by pounds, depending which way you do it.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=127)** That last one is a little bit tricky.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=130)** After you've done that, you should instantiate a few different objects, you should practice setting and reading their properties, and you should try calling all of the methods that you've created to make sure they behave the way you expect.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=142)** Play around with it, get used to it.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=143)** This is your chance to experiment with objects and get familiar with them.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-properties-and-methods-14627441?u=76281980&t=147)** In the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), next (1)
> **Code Identifiers:** weight_kg (2), weight_lbs (2), set_weight_lbs (2)
> **CLI Commands:** find (3), php (1), make (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **File Paths:** challenge_01.php (1)
> **Versions:** 2.2046226218 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution: Properties and methods
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=6)** - [Instructor] I hope that you were able to complete our first challenge assignment.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=9)** If not, follow along with me as I show you the solution that I came up with.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=13)** So the first thing that I did was I created a new file inside our OOP sandbox directory called challenge_01.php.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=22)** And I opened up some PHP tags and I started defining a class.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=26)** The class was going to be for a bicycle object.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=29)** So we're going to have instances of different bicycles.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=32)** So it's going to be class Bicycle, singular with a capital B.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=37)** That's the way we want to name our classes, singular nouns with capital letters.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=41)** If we have more than one word together, we do camel case.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=45)** Then I've got my curly braces and then I've got a list of the different properties that I want to declare.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=51)** Brand, model, year, description and weight_kg, short for kilograms.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=57)** Each one of those is just simply a variable with var as a keyword in front of it.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=62)** For description and weight, I went ahead and added some default values as well.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=66)** That wasn't part of the challenge assignment but I wanted to go ahead and just do that here as well.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=71)** Once I had the different properties then I moved on to the methods.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=74)** I wanted to have one method called name.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=77)** So we define that just like we would a normal function.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=79)** We call function, we provide the name of the function and then we have parentheses followed by curly braces.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=85)** And inside there, we have a value that's being returned and I'm concatenating together a number of different strings.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=91)** The strings that you use, the order that you use, the strings that you use around it is all up to you.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=98)** You can decide what that would be.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=100)** For me, I chose brand space model space, and then in parentheses the year.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=106)** Now for each one of those properties, notice that I'm calling it by using this, and the arrow notation.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=112)** We must do that in order to refer to these properties inside each instance.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=118)** Then, for weight_lbs, short for pounds, I wanted to be able to convert kilograms into pounds.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=125)** And I'm going to do that by multiplying it by this factor here, the 2.2 number.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=131)** I'm going to just take the additional step of making sure that the value that I'm multiplying is a float value, right?
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=138)** It can be an integer, or it can be a decimal but we don't want to accidentally try and multiply a string or something like that by that number.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=144)** So I'm just going to make sure that it is a float.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=147)** Now, the default value is a float, but there's no guarantee that this wouldn't get set to something else.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=152)** So it's just smart programming.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=154)** There was one more method that was in the challenge assignment, which was set weight in pounds.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=159)** And we'll come back and do that together in just a moment.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=162)** First, I want to try these basic parts out and then we'll come back.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=166)** So I want to create a new instance.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=168)** So I use the new keyword with the name of the class so new Bicycle, and I assign that to the variable trek.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=174)** Now I can use trek to refer to that instance.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=177)** So when I want to talk about the attribute on that instance for brand, then I can use that arrow notation and I can set it equal to this string.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=186)** I did the same thing for the other properties.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=188)** You can fill that out with any information you like.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=190)** It can even be a made up bicycle.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=192)** Next, I created another instance and I assigned that to the variable cd, short for Cannondale 'cause this is a Cannondale bike and I again, gave properties values for brand, model, year and weight.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=202)** I didn't bother with description but you could do that as well.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=206)** Then I wanted to test out those methods.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=208)** So I'm going to use name.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=210)** It should return back the name to me.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=211)** I'm going to echo that to the browser.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=214)** So I should be able to see it.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=215)** I did the same thing for the second instance the Cannondale bike, and then I've got the weight.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=220)** So I'm going to output the weight in kilograms and then weight in pounds.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=226)** Now notice that one of them is a property and one of them is a method.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=230)** And how can we tell that?
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=231)** Because this one has parentheses after it.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=233)** That is necessary when we're calling a method, we're talking about a property, we don't have the parentheses there.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=239)** All right, so let's try this out.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=241)** Let's save it.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=242)** Let's go over here.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=243)** And instead of class methods, let's load up challenge_01.php.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=251)** And there you go.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=252)** You can see the name of each of those bikes.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=253)** So we know that we set those properties correctly.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=256)** We were able to use our method to retrieve them and put them together into strings.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=259)** And you see that we get back the weight in kilograms and the weight in pounds.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=265)** Now let's do that last one together.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=267)** So we have one more function to write and that is set_weight_lbs.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=274)** And of course, it's going to need an argument.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=276)** So I'm just going to call that value.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=277)** So an argument is going to be passed in.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=280)** We're going to have to set it like that.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=282)** Now I can't just use weight_lbs with the value because that name is already taken by this method.
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=289)** That's why I've appended set underscore in front of it.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=292)** And in order to set that we know what we need to do.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=295)** We want to be setting this weight in kilograms equal to and then we're going to take the float value of value, whatever's passed in and we're going to divide it by this number here, two point, there we go.
>
> **[5:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=317)** Okay, so that's going to convert whatever value we've been given in pounds into kilograms and then store it in that attribute.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=324)** So we can store value use now two different ways.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=328)** We can set them here by setting the property on the instance directly using the equal sign.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=333)** Or we also have the ability now to say trek and let's use set_weight_lbs.
>
> **[5:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=344)** And then let's put in just a nice row on number two.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=348)** So that's going to set it equal to two.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=350)** Now let's just copy these two lines, come down here and we'll just output those values again.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=356)** We're going to output it in kilograms and in pounds to see what it equals.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=360)** So we're able to set the value of the weight in two different ways now.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=365)** Let's try this out, go back over here, reload the page.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=368)** And there you go.
>
> **[6:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-properties-and-methods-14623523?u=76281980&t=369)** You see the weight in kilograms and we convert it back to pounds, it's two, which is what we expect 'cause that's what we put in to start with right here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), oop (1), [[Microsoft Word|Word]] (1), [[Programming]] (1), next (1)
> **Definitions:** is a  (6), short for (3)
> **CLI Commands:** php (3), make (1), cd (1)
> **Code Identifiers:** weight_lbs (2), set_weight_lbs (2), weight_kg (1)
> **File Paths:** challenge_01.php (2)
> **Env Vars:** oop (1), php (1)
> **Versions:** 2.2 (1)
> **Analogies:** just like (1)


### 3. Class Inheritance

[↑ Back to Table of Contents](#table-of-contents)

#### What is inheritance?
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=0)** - [Instructor] In this chapter, we're going to be learning about inheritance.
>
> **[0:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=3)** And we're going to start out by getting an overview of what inheritance is and why we need it.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=8)** Inheritance is when a new class takes on the properties and methods of an existing class.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=15)** Why would we want to do that?
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=17)** Well, using class inheritance helps us to organize our code.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=21)** And by inheriting code from one class to another, we prevent repitition, that in turn simplifies the maintenance of the code and it also prevents inconsistencies and bugs.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=33)** Let me give you an example so that you can see why it's important.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=36)** Let's say that we have a couple of different classes.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=39)** Let's say I have one called ProductBrochure.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=42)** You can see it has a property for file_name and a method for download_path.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=47)** Then I have another class, WarrantyDocument.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=49)** It's very similar.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=50)** It's also going to be working with a file, some kind of a PDF perhaps, and it's going to also have a file_name property, and it's going to have another method called download_path.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=60)** I'm repeating myself here.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=62)** Now if I want to make a change to the download path method, I've got to remember to make that change in two different places.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=68)** If I don't, I'll have an inconsistency and a bug.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=72)** So you can see how repitition makes our code harder to maintain.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=76)** Notice that I've also got a third class there called CleaningInstructions.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=80)** This would also be a document, but notice that it's not defined the same way.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=83)** I have an inconsistency.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=85)** I have filename with no underscore there and I haven't defined the method for download_path.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=92)** If all of these were able to inherit the same code and able to inherit the same properties and attributes, they could all behave the same way.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=100)** The code would be organized, consistent, and would have less bugs.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=105)** When objects are similar and share many of the same properties and methods, then class inheritance can keep their code organized.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=112)** Behaviors of a class are shared with all of its subclasses.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=116)** I'm using behaviors here as a shorthand for both properties and methods.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=121)** Those are the behaviors of the class.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=123)** And when we add new behaviors to the parent class, then all the subclasses also gain those behaviors.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=129)** Now the subclasses aren't stuck with them.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=131)** They don't have to use them.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=133)** They can ignore them or they can override those parent behaviors with different behaviors.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=137)** Or they can add new behaviors that the parent doesn't have.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=141)** All right, they're just inheriting it, but after that, they can go on to define themselves in additional ways or override their inherited behavior.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=149)** So let's imagine that instead of having just a ProductBrochure and a WarrantyDocument, that both of those inherited from another class called Document.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=158)** Document would be called the parent class, and ProductBrochure and WarrantyDocument would be the subclasses.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=164)** Parent can also be called superclass, but in PHP we're going to stick with the term parent, because we're actually going to us that name later in our code.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=172)** Both ProductBrochure and WarrantyDocument will inherit the same properties and methods from Document.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=178)** We won't make a mistake and implement them differently.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=181)** If we want to make a change to one of those behaviors, we don't have to track it down in several different places.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=187)** We can just go into Document and make the change one time, and both of the subclasses will get that change then.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=194)** But each subclass can also override those inherited behaviors if they want to do things differently.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/what-is-inheritance-14622580?u=76281980&t=199)** Now that we understand the benefits and the concepts behind inheritance, let's see how we implement it in PHP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **CLI Commands:** make (5), php (2)
> **Code Identifiers:** download_path (3), file_name (2)
> **Env Vars:** php (2), pdf (1)
> **Cross-References:** later in (1)
> **Analogies:** imagine (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Define a subclass
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=0)** - [Instructor] Now that we have an overview of how class inheritance works and why we want to use it, let's learn to actually implement it in PHP by defining a subclass.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=9)** The way that you define a subclass in PHP is by first defining the parent class, just like you normally would and then you define the subclass in the same way, except that you add another keyword after the class name, which is extends and then the name of the parent class that you want to inherit it from.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=29)** That's all it takes to make a sub class.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=31)** Now, the parent must be declared first or else PHP would complain when it gets to that part where it says extends parent, it would say I don't know what parent class you're talking about.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=41)** So we must always declare the parent class first and then we can easily make a subclass from it, by using the keyword extends.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=48)** To use the example from the previous movie, you can see here I have a parent class called document and it has a property and a method in it and then I have three classes that are subclass, ProductBrochure, WarrantyDocument and CleaningInstructions.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=63)** All of those extend the document.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=67)** So they had use that keyword extends and then the name of that parent class document.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=73)** All three of those classes now have that same property and that same method in them.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=78)** Here's another example, using vehicle as a parent class.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=82)** It has a subclass of car and a subclass of motorcycle.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=87)** The fourth class that's being declared is compact car.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=90)** And you'll notice that it doesn't extend vehicle, it extends car.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=95)** So it gets all the properties and methods of vehicle but also any additional or overwritten behaviors in the car class.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=103)** You can visualize it like this.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=105)** It's perfectly fine for subclasses to also have additional subclasses.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=111)** All of the behaviors would just trickle down to the subclasses.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=115)** PHP has several built in functions, which are useful when working with inheritance.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=120)** Get_parent_class, which can either take the name of the class or an instance of the class as an argument, is_subclass_of, which can also take the name of a class or an instance as its first argument and then the parent class.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=134)** We want to find out if something is a subclass of whatever that parent class might be, or we can ask for all class parents.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=142)** We can pass in either the name of the class, or we can pass in an instance and it'll tell us all of the parents.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=148)** So in the case of the example we just saw, compact car would have parents that included both vehicle and car.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=156)** Let's try defining subclasses in our Sandbox.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=159)** I've already created a PHP file called class_ inheritance.php.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=163)** I'm going to drag in here, that's also included in your exercise files and I just wanted to get us started here with a basic class.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=170)** So I've got class of user, which has first name, last name and username, I've got a full name method, which is familiar to us by now.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=178)** It's just taking those different properties and (indistinct) them together.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=181)** Then notice I've got a subclass here called customer.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=184)** Customer extends user.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=188)** So now customer is a subclass of user.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=192)** Let's try using these.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=193)** So let's first just create a new user, user equals new user.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=199)** Now I have an instance of the user class, U, first name, make it Jerry and U, last name will be equal to Seinfeld, U, username, it's going to be equal to jseinfeld.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=221)** All right, so now that we've got one user, let's just duplicate that user.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=223)** I'm going to copy those lines and this one I'm going to make the variable that I use is going to be C and we're going to create George Constanza and gcostanza.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=241)** Okay, you can use any names you want.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=242)** Oops, it looks like I made a mistake here, I actually I forgot username, there we go.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=246)** Now I've typed it correctly.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=248)** All right, so now I've created two instances of the user class.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=251)** That's nothing new, we know how to work with those.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=254)** Now, though, I'm going to change this so that instead it's an instance of the customer class, right?
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=260)** It's a different class.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=262)** Now we're going to learn how to make changes to that customer class so that it actually behaves differently than user.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=268)** For right now, it behaves exactly the same.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=271)** It has the same properties and it has the same methods.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=274)** And we can see that if we drop down here and we'll just ask for U and full name, let's echo that, full name, that's a method and we'll put a BR tag at the end and then I'll just copy that.
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=289)** Let's do it again, but this time with the C variable.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=293)** So we're going to ask each of those to just tell us what their full name is and we'll see that this subclass inherited that full name method.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=300)** Before we do that, let's also just add another one here for, get_parent_class, and we'll do that for U and again, we'll put that BR tag at the end and then let's do the same thing but for C, see what its parent class is.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=318)** And then let's use that if, is_sub_class_of and we can use either a name or are a instance.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=327)** It's more common to use an instance because we're really probably curious about a particular instance.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=332)** We probably know about the structure of our classes and subclass and don't need to ask PHP to tell us.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=338)** So let's see if it's a subclass user, then we'll return back a line that says, echo instance is a sub class of user.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=352)** And last of all, let's try that class parents.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=355)** Parents equals class parents and we'll ask the C instance and then let's echo that back.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=364)** It's going to return an array implode, there we go, parents and we'll just grab this at the end, paste that in there.
>
> **[6:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=378)** Okay, let's try all this out.
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=380)** Let's go over to Firefox and the page that we want is class_inheritance.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=390)** There we go.
>
> **[6:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=391)** You can see they both have that full name method available to them.
>
> **[6:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=395)** You can see that when we ask for the parent of the user class, it didn't give us anything.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=400)** It came back with a blank line.
>
> **[6:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=402)** When we asked for the parent of the customer class it came back and told us it was user.
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=406)** And yes, instance is a subclass of user that returned true and when we asked for the parents of the customer class it returned back just user, right?
>
> **[6:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=418)** There's only one.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=419)** If there had been more than one, if we had several layers, then it would've been a list of those with comma in between them.
>
> **[7:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=426)** So that's all there is to being able to define a subclass.
>
> **[7:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=429)** Now, the reason to do this though, of course, is because it gets more interesting when we can start to customize the customer class so that it can make use of the parts of user that it wants but it also can extend or override that behavior as well.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/define-a-subclass-14621609?u=76281980&t=444)** And that's what we'll talk about in the next couple of movies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), next (1)
> **CLI Commands:** php (7), make (6), find (1)
> **Env Vars:** php (6)
> **Code Identifiers:** is_subclass_of (1), get_parent_class (1), is_sub_class_of (1), class_inheritance (1)
> **Definitions:** is a  (4)
> **File Paths:** inheritance.php (1)
> **Cross-References:** in the next (1)
> **Tools:** firefox (1)

#### Extend and override
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=0)** - [Instructor] We know how to define a subclass, but the real power of subclasses is their ability to extend and override the behaviors that they inherit from the parent class.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=9)** We're going to explore that idea in this movie.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=11)** Here, you can see I have three example classes, Vehicle, Car, and Motorcycle, and you'll notice that Car and Motorcycle over on the right are subclasses of the Vehicle class over on the left.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=23)** That means that they inherit the properties and the methods that are defined in the Vehicle class.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=27)** It's as if that code that was inside the Vehicle class was the first section of code inside each of those class definitions.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=35)** So things like the color property are available in all three of these classes.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=41)** The wheels property is also available in all three of these classes, but you'll notice that the Car class and the Motorcycle class actually redefine those values.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=51)** When we redefine a property or a method inside the subclass, it has the effect of overriding the value that was inherited.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=59)** So in this case, even though they all three still have a wheels property, it is a different behavior.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=65)** In the case of Vehicle, wheels has no default value, in the case of Car, it has four wheels, in the case of Motorcycle it has two wheels.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=73)** So if we create an instance of the Vehicle class, we get one behavior, if we create an instance from the Car class, we get a different behavior.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=81)** Notice also that the Car class has another property called convertible, which the other two classes don't have.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=87)** The idea here is whether or not the car's roof can be opened up and folded back.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=92)** When I was designing this, I decided that that was a property that was applicable to the Car class, but not to vehicles generally, and certainly not to motorcycles.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=101)** This is an example of how we can not only inherent values from a parent class, but we can extend the behavior by adding more code into the subclass, and that's part of why we use that word extends as a keyword when we're creating subclasses.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=114)** We're extending the behaviors by either overriding them or adding new things, and the same is true for methods as well.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=122)** Upload_image is a method that's inherited and therefore available in all three of the classes.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=127)** The is_good_for-rain method is also available in all three of the classes, but its behavior is very different in each case.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=133)** For Vehicles by default is just going to return true, for a Motorcycle by default it's going to return false, and for a Car, it's behavior is going to depend on whether the property convertible has been set to true or false.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=147)** So you start to get the idea of how we can inherit, override, or extend behaviors inside our subclasses.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=155)** Deciding how to organize your code, and deciding which behaviors get inherited, overwritten, and extended is going to require judgment calls on your part.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=164)** For example, I could have decided that by default, all Vehicles should have four wheels and that I wouldn't need to override it in the Car class, or I could have decided that convertible was a property that should be available in the Vehicle class as well, so that it was inherited by both Car and Motorcycle, or I could have architected things completely differently and created another subclass called Convertible Car, which inherited from the Car class.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=190)** Knowing how to arrange code takes experience and sometimes just good old trial and error.
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=195)** The one bit of guidance I can give you is to remember that the purpose of inheritance is to keep your code well organized and to keep you from repeating yourself, so keep that in mind.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=205)** If you find that your code is less organized, then you may want to rethink your approach.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=210)** Let's try an example of extending and overriding, in our oop_sandbox.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=215)** Let's continue working with our User and Customer classes that we were working with before, and let's add in some extensions here.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=222)** Let's add in var $city for our customer, var $state, or if you prefer, province, and var $country.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=236)** The idea being that our customer is different than our user because our customer might have, for example, a billing address, right, a way that we want to contact them, or maybe we just want to know what their location is.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=246)** So that's what we're going to have here, we're going to ask what their location is, it's going to return this, city, concatenated together with a comma and a space, and then a period, and then I'm just going to copy that, save me some typing, do it a couple more times because it's going to be city followed by the state and then country.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=269)** So I'll just return city, state, and country with commas in between them whenever I ask for location.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=275)** So let's come down here and for our customer, let's add in those values, city is going to be equal to New York.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=285)** Again, I'll just save myself a little typing by cutting those, and we're going to call this state, this one's going to be country.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=293)** New York, New York, that's fine, and I just have to change this to United States.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=298)** Okay, so now that I have that, I can drop down here, and right below the full_name, let's add a line, instead of the full name we want to ask for the customer's location.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=310)** Alright, let's try it, let's go over here.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=312)** There we are, New York, New York, United States.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=314)** Now, the important thing to realize here is that I cannot take this line and change this to a u, or user.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=324)** Our User up here is a user instance not a customer instance, and the User class does not have any concept of city, state, country, or location.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=333)** If you want to try it just to see what happens, we can come over here and reload the page, and you'll see call to an undefined method.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=340)** There is no method called location inside the User class.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=343)** So let's just comment that line out, say no method error.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=352)** So that's an example of how we're able to extend the class.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=356)** What about overriding the class?
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=357)** Let's say we're going to have our class here, let's have another var $is_admin, and by default is_admin is going to be false, and then let's just take that line and let's come down here, let's create a new class which is going to be called AdminUser, extends User.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=377)** It'll be exactly like our User in every other way, except that is_admin is going to be set to true.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=385)** Now Customer, is it going to be an Admin or not?
>
> **[6:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=388)** No, it's not.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=389)** It's going to have, this is_admin property because it's going to inherit it with the default value of false, AdminUser is going to modify that value when it's inherited here.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=399)** Now we could also do the same thing with methods.
>
> **[6:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=401)** Let's just try real quick, we'll take full_name, we'll come down here to our AdminUser, and whenever we have an admin_user we're also going to append to the end that their name is parentheses Admin.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=413)** Let's put a space there, there we go.
>
> **[6:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=416)** So any AdminUser's full_name will report the fact that they are an Admin.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/extend-and-override-14620652?u=76281980&t=420)** Hopefully you're beginning to understand the utility of being able to create parent classes and subclasses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** is_admin (4), full_name (3), is_good_for (1), oop_sandbox (1), admin_user (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=0)** - [Narrator] It's time for another Challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=8)** For this Challenge, I want you to try creating PHP classes which use inheritance.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=13)** I'm not going to give you a set of classes for you to work with.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=16)** I want you to choose your own category.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=19)** Pick a topic that interests you.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=21)** Maybe it's a hobby of yours or it's something that you frequently work with or something you're very familiar with.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=27)** You want to try and find a category that has subcategories which have similarities to the parent category and have shared attributes.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=35)** After all, that's when inheritance works best.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=37)** And that's part of why I don't want to give you a list of things to work with.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=41)** It's because I want you to do some thinking about when inheritance would actually be useful.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=46)** Once you do that, take the time to map out the inheritance on paper.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=50)** Before you start writing code, get out a piece of paper, draw some boxes, list out the properties and methods, and make sure that you have a good feeling for what the inheritance is going to look like.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=60)** It'll also help you to identify if you've picked a bad category and need to rethink it again.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=64)** Once you've worked that out, then you can start to code.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=67)** You want to create a new file in the sandbox called challenge_02.php.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=72)** And in there, you'll define your PHP classes.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=75)** Once you have your classes set up as parents and subclasses, then you'll want to inherit, extend, and override various properties and methods.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=84)** Get creative.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=86)** Once you do that, then create instances so you can test your assumptions and make sure that you understand what properties and methods are available in each one of the instances.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=96)** Try creating instances of the parent class, as well as instances of the subclasses.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=101)** If you're really stuck for ideas and you can't think of a good category, let me give you a couple of ones that are frequently used as examples.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=108)** Animals.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=109)** So for example, you would have categories like mammals and reptiles, or you could work with just specific animals, maybe horses, zebras, and donkeys.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=118)** Those are all similar.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=119)** They all have characteristics that are in common.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=122)** Or clothing.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=124)** Maybe it's shirts, and you have polo shirts and dress shirts, or it's dresses and dresses have shift dresses, A-line dresses and wrap dresses.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=133)** There's foods, meats, fruits, vegetables.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=137)** You could use attributes like whether something has seeds or whether it can be eaten raw.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=142)** And furniture.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=143)** Furniture's another good category because there's lots of similarities between lots of different types of furniture.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=149)** You can have couches and love seats.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=152)** You can have chairs.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=154)** Those are all very similar but there are differences as well.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=156)** Beds, cabinets, desks, again, they have similarities, but they're not all the same.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=161)** For example, all furniture has common attributes for width, height, and depth.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=166)** But they might have unique characteristics for things like the number of drawers it has or the cushions and the upholstery.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=173)** And then last of all, musical instruments, so for example, woodwinds, brass, percussion, keyboards, all of those are possibilities.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=182)** And again, there's lots of inherited attributes where things are similar to a parent category, but not exactly the same.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-inheritance-14623519?u=76281980&t=189)** Again, spend some time mapping it out on paper and then try writing your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **CLI Commands:** php (3), make (2), find (1)
> **Analogies:** for example (3), similar to (1)
> **Env Vars:** php (2)
> **File Paths:** challenge_02.php (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=0)** - [Instructor] Hopefully you were able to complete the challenge assignment on inheritance.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=9)** Remember there is no absolute right or wrong answer to this.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=13)** The goal of the challenge was to get a feel for how inheritance works.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=17)** As a demonstration of the kinds of results that you should have had, I'm going to show you the solution that I came up with using furniture as a category.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=24)** Once I decided to use the furniture category, I tried to think of subclasses that had some properties in common and some differences.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=32)** There are common properties to all furniture.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=35)** All furniture has a width, a depth, and a height, and therefore we can also calculate the area, or the amount of floor space that it takes up and the volume.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=44)** So all of my subclasses are going to inherit those behaviors.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=48)** I decided to choose two main subclasses which are bed and sofa.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=53)** A bed is a piece of furniture that you sleep on.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=56)** So I decided there would be an attribute called is_sleeper that would determine if we can sleep on it, and a sofa is something that you sit on, so it's going to have a property called is_seating.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=66)** Now, of course you can sit on a bed and you can sleep on a sofa, but I'm talking about its intended purpose.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=71)** Now a sofa can also be a sleeper sofa, so it's an attribute that we can change, by default it's not going to be a sleeper, but we can change that attribute so that it becomes a sleeper sofa.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=82)** Below sofa I decided to expand with some more subclasses and I chose couch, loveseat, and bench.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=88)** The terms couch and sofa are often used interchangeably, but technically a couch is a sofa that doesn't have any arms.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=96)** You may not have known that.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=98)** So it's going to inherit sofa and have all of its behaviors, but by default, instead of having two arms it's going to have zero, and if a couch has zero arms, then a bench is essentially the same thing as a couch, but without a back on it.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=111)** A love seat is another kind of sofa it's just narrower, which means that it has less seatings, a sofa typically seats three people, a love seat typically seats two.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=122)** Once I had an idea of the hierarchy that I wanted to use and I had a sense of the attributes that would be shared between the different classes, then I set out to write the code for it.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=131)** The first thing that I did was I created a new file inside the sandbox called challenge_02.php, and I set out to write my Furniture class, so I gave it a width, a depth, and a height property, and I gave it methods for area and volume.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=147)** Then I also added properties for is_seating and is_sleeper, which default to false.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=151)** By default Furniture's going to have those set to false, and that's because other kinds of furniture I might want to add in the future might be a cabinet, or a desk, or something like that.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=160)** So by default, they're going to be false.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=163)** And I also added another one for is_upholstered, which is also set to false.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=167)** All right, let's fold up Furniture, we can just click right here and fold it up, and then let's take a look at the Bed class.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=173)** Bed is going to be a subclass of furniture, it's going to inherit all of the properties and methods we just defined, but it's going to override is_sleeper to be is true.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=183)** I decided to just leave a Bed at that.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=184)** A bed is just a piece of furniture you can sleep on and I didn't go any further.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=188)** On Sofa, I set is_seating equal to true by default and is_upholstered equal to true by default.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=194)** I overrode each of one of those.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=197)** I also added some new properties.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=199)** I said that it has a seats property that defaults to 3, has seatcushions is equal to true, has backcushions is equal to true and has arms is equal to 2, all by default.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=209)** Now, of course, different kinds of sofas can be different, some of them may have seat cushions, may have back cushions and so on, these are attributes that we can change.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=217)** Now I could have certainly put those up into the Furniture class and inherited them but I decided they were unique enough to this_seating type of furniture that I would include it here.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=227)** I could've also had another subclass in between called seating furniture and put them there but that was a bit of overkill for what I was trying to do here.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=235)** So I just introduced them as an extension of the Furniture class, inside my Sofa class.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=240)** I also added another one for depth_opened.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=243)** The idea is if this turns out to be a sleeper sofa, then it's depth it's different, it's width is the same, but it's depth changes.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=250)** So I wanted to be able to define that in that case.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=253)** Now you don't see is_sleeper here but remember that's something we're inheriting, is_sleeper is false by default, but if it were set to true then we would want to take into account the depth opened.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=263)** So I also created a new method here called area_opened.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=267)** It's going to check and see if it's a sleeper or not.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=269)** If it's not a sleeper then we'll just return the regular area.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=273)** But if it is a sleeper then we want to calculate the area using depth_opened instead of the regular depth.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=280)** Let's fold that up And then let's take a look at the last three, couch, loveseat, and bench.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=285)** A Couch is just a Sofa that defaults to having zero arms.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=288)** Now I could have one arm or two arms, but by default we're going to say it has zero.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=293)** A Loveseat is just a Sofa that has two seats instead of three, and a Bench is just a Couch that has no back cushions.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=301)** What I want you to notice here is that I'm creating a new class, a new type of object that I can work with, but it's inheriting a lot of behaviors from those parent classes.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=312)** So even though its definition is quite simple, there's lots and lots of complexity there, and if in the future I come back and I add more methods or properties to Furniture, while they're automatically going to appear in all of these different sub classes.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=326)** That's one of the advantages to using inheritance in object-oriented programming.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=330)** I can show you an example of that.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=332)** I've written a function here called inspect_class, this is not inside an object, this is a procedural function, there's no problem in mixing object-oriented programming and procedural programming, and it's just going to take a class, and it's going to find out the parent_class, it's class_vars, and it's class_methods, and output those for us to read.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=352)** Here, you can see I'm getting a list of the class names and I'm looping through them, and I'm calling that inspect_class function, and I'm just calling nl2br to turn the new lines into br tags, so it'll be nicely formatted.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=365)** Before we go on, let's take a look at that.
>
> **[6:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=367)** I'm going to save in that file, let's come over here to Firefox, and let's load up challenge_02.php, and you can see what it gives you, Furniture, here's the different properties, here's the different methods.
>
> **[6:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=381)** Bed extends Furniture, Here's the properties, here's the methods, and so on.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=385)** Notice we get down here to Bench, notice all the properties and the methods that it has, and it's overwritten some things, has_seatcushions is one, has_cushions is zero, right?
>
> **[6:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=395)** Doesn't show anything 'cause it's false, so we don't see it there, but is_seeding, is_upholstered, right?
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=400)** All those things are being inherited even though our class definition is really quite small.
>
> **[6:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=408)** Okay, so now that we've seen the different way inheritance works, let's try it out.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=413)** I'm going to create a new sofa.
>
> **[6:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=415)** I'm going to give it a width, a depth, and a height, and then I can return its area and its volume.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=421)** I'm also going to return its area opened.
>
> **[7:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=422)** Now this is not a sleeper sofa, right?
>
> **[7:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=424)** I haven't told it.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=425)** By default it's not a sleeper.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=427)** So area open should be the same as the area, and then I'm going to change it into a sleeper sofa.
>
> **[7:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=433)** I'm going to say, you know what?
>
> **[7:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=433)** Let's make it a sleeper sofa and let's give it depth_opened and let's calculate that value again, see what we get back.
>
> **[7:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=439)** Let's go over here and let's just take a look at that, and you'll see we get the area 8, the volume is 24, area opened is 8 when it's not a sleeper sofa, once I convert it into a sleeper sofa the area open changes into being 28, and then down here for a Bench, create a new Bench, right?
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=459)** A new instance of the Bench class, so it's going to inherit all the behaviors of the parent classes, as well as the extensions and overrides that we've done in the Bench class.
>
> **[7:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=471)** So I have width, step, and height.
>
> **[7:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=472)** I can get its area and then I can check, is it seating?
>
> **[7:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=475)** Is it sleeping?
>
> **[7:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=476)** Does it have back cushions?
>
> **[7:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=477)** And you can see here here's the area seating is true, sleeping is false, back cushions is false.
>
> **[8:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-inheritance-14625470?u=76281980&t=484)** So again, there is no absolute right answer to what you should have come up with here, but you should now have a feel for how inheritance works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), [[Programming]] (1)
> **Code Identifiers:** is_sleeper (5), is_seating (3), is_upholstered (3), depth_opened (3), inspect_class (2)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** php (2), find (1), make (1)
> **File Paths:** challenge_02.php (2)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Object Access Control

[↑ Back to Table of Contents](#table-of-contents)

#### Visibility modifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=0)** - [Instructor] In this chapter, we will learn about PHP's visibility modifiers.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=5)** Visibility modifiers are used to control access to objects, properties, and methods.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=11)** There are three visibility modifiers: public, protected and private.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=16)** Any property or methods listed as being public is going to be accessible from anywhere.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=22)** Anywhere in our code that we want to reference those, we're able to.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=25)** It doesn't matter whether we're inside the class definition, whether we're inside the code that belongs to a subclass, or whether we've created an instance of the object and we're working with it there.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=36)** Private, on the other hand, is the opposite extreme.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=39)** If we have a property or method labeled as being private, it's accessible from only inside the class code.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=45)** That means actually inside the curly braces that define this class.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=50)** It's not accessible in any subclasses and it's not available if we were to create an instance of the object and try to reference the property or method that way.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=60)** Protected works just like private, but it also allows subclasses to be able to access the property or method.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=67)** Let me show you how we declare these modifiers.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=70)** Here I have a class called example and you'll notice that when I declare the three properties, A, B, and C I don't use the keyword var at all.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=79)** Instead, I declare it with this visibility modifier, public, protected, or private.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=85)** Now, if we use var, it's the same thing as being public by default, but it's a better practice to actually use the word public than to use var.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=93)** We've been using var so far only because we didn't know about visibility modifiers yet.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=97)** When we're working with methods, it's a little bit different.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=99)** Instead of replacing the keyword, we're going to prepend the modifier in front of the word function.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=105)** So now instead of just function, it's public function, protected function, and private function.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=111)** If we didn't declare it, the default would be for it to be public.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=115)** Let's look at a more concrete example.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=117)** Here I have a class called user and I have a private property called is admin which defaults to false.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=123)** So, this user is not admin.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=124)** That's the kind of thing we wouldn't want people to be able to change easily, right?
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=129)** We wouldn't even necessarily want other parts of our code to be able to change that easily.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=133)** So, we can restrict access to it by making it private.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=137)** That means that if we were to create a new instance of the user and we were then to ask that user to return the value of is admin, it would tell us, sorry, cannot access the private property.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=148)** We wouldn't get a result back and we can't set a value to it either.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=152)** Now, that doesn't mean that we can't access it at all because you'll notice that the has admin access method that we've written there, it does reference it.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=161)** It's available for use inside the class code.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=164)** That's what private means.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=165)** We can't access it outside the class, but inside the class it is available to us.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=170)** Now, the same thing is true for our methods.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=173)** If I were to try and use an instance to call that has admin access method, it wouldn't let me because I've declared it as being a private method.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=182)** You'll see that I have a second method there called access level.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=186)** That is declared as being a public method.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=189)** So, I can call that one.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=190)** And it in turn can call a private method which in turn calls a private property.
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=195)** There are a few best practices that we want to follow.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=198)** You want to always use visibility modifiers.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=201)** Don't depend on the defaults.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=203)** We were using the defaults before only because we didn't know about them.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=206)** It's really important to always declare them, even if they're all public, go ahead and declare them as being public.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=211)** But you should consider what visibility level you need when you're coding.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=216)** And by default, you want to try and make properties and methods public only when necessary.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=222)** If it needs to be accessible from outside the class, then make it public.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=226)** Or if it needs to be available to its subclasses, make it protected.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=231)** But if it's only going to be used for internal purposes, then mark it as being private.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=236)** It's also a good idea to try and group properties or methods with similar visibility together.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=241)** So, all of your private properties are all in one chunk.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=244)** It's nice and easy for you to find them and understand that, hey, these are the private ones.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=249)** If you've got them intermixed, it can be a little hard to spot sometimes.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=253)** Let's try an example in our OOP sandbox.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=256)** Let's start by going to our class methods PHP file that we created earlier, I'm just going to control click on that and choose Duplicate.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=264)** And when it gives me the chance to rename it, I'm going to call it classvisibility.PHP.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=272)** All right.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=272)** So we already saw this before, right?
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=274)** We were able to just work with different methods here and call different things.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=278)** That's all there.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=280)** Let's now modify this.
>
> **[4:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=282)** Instead of using var, let's use public for all these.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=285)** That's a best practice.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=286)** So right off the bat, if you spot var, change it to public.
>
> **[4:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=290)** And if you spot a function like this, put public in front of the function,.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=295)** These are all now public and that's what they were before by default, but now it's explicit and that's a best practice.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=302)** So, let's try adding a couple of others.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=303)** Let's add one here.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=304)** I'll call it protected and we'll make it the registration ID.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=310)** Let's make another one that's private and we'll call it the tuition.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=315)** Student has tuition.
>
> **[5:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=317)** We'll default to $0.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=320)** So now we have both of those.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=322)** We have our say hello.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=323)** Let's just change this to hello world.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=327)** I'm going to move it down here.
>
> **[5:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=329)** And I'm going to copy it a couple times.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=332)** And instead of hello world, let's do another one that's hello family.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=338)** This is what we were looking at in that example.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=340)** And hello me.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=343)** Now, this one is public so the whole world can say hello.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=347)** Hello family is only something that my family can say.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=350)** That means this class and its subclasses.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=353)** I'm calling those the family here, protected.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=356)** And then last of all private.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=358)** Only I can call this hello here.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=361)** All right, so let's try some of these out.
>
> **[6:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=362)** So, I've got my student here.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=364)** Let's erase the second student.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=365)** We don't need a second student.
>
> **[6:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=367)** Let's leave full name in here.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=370)** And instead of say hello, we're going to change this to be hello_world.
>
> **[6:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=378)** And let's try another one.
>
> **[6:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=381)** Hello family.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=385)** And hello me.
>
> **[6:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=387)** And we'll remove all this down here.
>
> **[6:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=388)** We don't need any of that.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=390)** All right, so right now let's just try these and see what you come up with.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=393)** So, class visibility, the name of the file, classvisibility.PHP.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=400)** Error call to protected method student hello family.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=403)** Right?
>
> **[6:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=404)** I can't call it because it's protected.
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=406)** Let's just comment that out.
>
> **[6:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=410)** Let's try another one here.
>
> **[6:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=412)** Oh, call to private method, student hello me.
>
> **[6:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=415)** Right?
>
> **[6:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=416)** Didn't like that line either.
>
> **[6:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=417)** I'm not able to do either one of those.
>
> **[6:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=418)** The only one I can do is this hello world, right?
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=421)** 'Cause that's the one that's listed as being public.
>
> **[7:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=424)** Now this registration ID and tuition, you could do the same thing here.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=427)** You could try it out.
>
> **[7:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=428)** Let's just do echo student one.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=434)** Let's do registration Idaho.
>
> **[7:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=441)** And let's copy that.
>
> **[7:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=443)** And let's echo the student's tuition.
>
> **[7:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=448)** We'll get what we expect which is an error saying it can't access registration ID because it's protected.
>
> **[7:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=455)** And let's try another one here.
>
> **[7:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=458)** We'll reload it.
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=459)** Can't access the private property tuition, right?
>
> **[7:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=462)** Neither one of those are accessible from outside, but they are accessible from inside.
>
> **[7:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=469)** Just as an example, let's just create a subclass here.
>
> **[7:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=472)** Class part-time student and the part-time student is going to extends student.
>
> **[8:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=482)** Now it's a subclass.
>
> **[8:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=484)** So, it should have the ability to call the that hello family method.
>
> **[8:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=488)** So, let's make a public method here that we can call from outside to test it.
>
> **[8:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=492)** Function hello parent we'll call it 'cause it's going to be talking to its parent and it's going to return back the value that it gets from this hello family.
>
> **[8:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=505)** That's it.
>
> **[8:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=506)** Let's try it.
>
> **[8:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=507)** Let's see what it comes back with.
>
> **[8:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=508)** If come down here and I have not a student anymore, but let's say Lucy is a part-time student.
>
> **[8:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=514)** Actually let me copy that line and I'll comment out this one just so we still have that there.
>
> **[8:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=521)** Part-time student.
>
> **[8:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=525)** Now, part-time student ought to be able to echo back hello parent.
>
> **[8:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=532)** Let's try that.
>
> **[8:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=533)** And sure enough it works.
>
> **[8:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=536)** Hello family.
>
> **[8:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=538)** So, hopefully you get the idea of visibility.
>
> **[9:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=540)** If we have something that's public, it's accessible from both inside the class, the subclasses, and outside when we're working with instances.
>
> **[9:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=548)** If we have something that's private, it's only inside the class code.
>
> **[9:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/visibility-modifiers-14623521?u=76281980&t=551)** If it's protected, it's accessible inside the class' code as well as its subclass'.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Microsoft Word|Word]] (2), oop (1)
> **CLI Commands:** make (6), php (4), find (1)
> **Env Vars:** php (4), oop (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **File Paths:** classvisibility.php (2)
> **Best Practices:** best practice (2)
> **Code Identifiers:** hello_world (1)
> **UI Navigation:** click on (1)

#### Beware of overloading
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=0)** - [Instructor] In this movie, we'll talk about a feature of PHP called overloading and we're going to learn why overloading can make it confusing when you want to control visibility.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=9)** First, let me demonstrate the issue.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=12)** In the last movie we were working with this file called class_visibility.php.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=16)** We'll keep working with that.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=18)** We have a class definition for student and it has a property of tuition and that has been set to have a visibility of private.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=27)** And we know that private visibility means that the property is only accessible from inside the classes code.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=34)** It's not accessible in any subclass and it's not accessible when we're working with an instance and calling attributes on that instance.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=42)** We actually proved that to ourselves because down here we had part-time student as a subclass.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=48)** I created a new instance of part-time student and assigned it to student one.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=53)** And then right here, I had a line where we tested it out.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=56)** I'm just going to copy this line, come down here and we'll try it again.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=61)** I'm going to also just put a BR tag at the end of it.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=65)** So here we have echo student one tuition.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=68)** Now this is a private property in the parent class so it should not be inherited, it should not be available.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=74)** Let's save it, let's go back to the browser and just prove that to ourselves.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=77)** I'll reload the page and sure enough, undefined property, it's not defined.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=81)** Part-time student does not know anything about tuition.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=85)** So that's what we would expect.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=86)** That's how visibility's supposed to work.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=88)** But watch this.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=90)** I'm going to add a line here and let's have student one tuition equals 1000, all right?
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=100)** Now this also should not work, right?
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=102)** It has no idea what this tuition property is.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=105)** I'm trying to set 1000 to something it just told me it doesn't know about.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=110)** Let's save the file.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=111)** Let's come back over to browser and let's reload it.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=115)** Look at that, the error went away and it worked.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=120)** We were able to set the value equal to 1000 and we echoed it back to the browser.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=125)** What's going on here?
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=127)** The reason this happens is because PHP has a feature called overloading.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=132)** Now, if you've worked in other programming languages, overloading has different meanings in other programming languages.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=137)** For whatever reason, that's what they decided to call it in PHP.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=141)** Not a very good name in my opinion, but if you wanted to look it up in the documentation, that's how you're going to find it.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=146)** A better name might be something like dynamic properties.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=150)** What it is is it's how PHP handles calls to properties and methods, which do not exist or are not visible.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=158)** So here's an example of overloading using a bare object class with no inheritance.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=164)** I have a class called product and there's absolutely nothing inside of it, no properties at all.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=169)** So I create a new instance of that product and I ask it to return the value of that property name.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=175)** It comes back and tells me undefined property but if I set a value to it and then return it, then it returns that value.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=183)** That's because overloading has some default behaviors.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=187)** The default when we get a value from an undefined property is to return a notice to us.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=192)** The default behavior when we set a value of an undefined property is to define the property and set the value and not return any notice whatsoever.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=201)** And of course, what we just saw when you set a value and it gets defined, then when we turn right around and get that value, we don't get that notice either.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=209)** This can be confusing because private properties may seem to be visible in subclasses, but they're not.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=217)** We're actually defining a new property in the subclass.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=221)** We're not seeing that private property that was in the parent class.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=225)** And because we're adding it in the subclass, it doesn't really work the way we would expect either.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=230)** For example, let's go up, back here in the parent class and let's add a new method.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=236)** It's going to be a public method and let's call it tuition_FMT.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=242)** The idea is that it's formatted.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=244)** That's the FMT, is for format.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=245)** And we're going to return back just a simple dollar sign and then we're going to call tuition.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=254)** Now this can call tuition because it's in the same class.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=258)** So it has the ability to call private tuition and that's going to be initialized to be zero dollars.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=264)** Just so we can see the difference, let's just set this equal to another value.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=267)** Let's say that the tuition by default is going to be $500.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=272)** Okay.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=273)** Let's come down here and let's call our new method.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=277)** I'm going to copy this, I'm going to paste it in and we're going to call it tuition_FMT and then the set parentheses because we're making a method call.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=288)** Okay, so we set the value, we looked at it, now let's take a look at it formatted with the dollar sign in front of it.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=294)** Let's come back over, reload the page.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=296)** Look at that.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=298)** The value's equal to 500, not equal to the value we just set.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=302)** It just told me in the line right above it that tuition was set to 1000.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=306)** But because it's adding a new one dynamically, it's different than the one that was there before.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=313)** So the reference that's being found here is different than the dynamic one that's being added.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=319)** So overall, it's just all around confusing.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=323)** Overloading causes that problem so you need to be aware of it.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/beware-of-overloading-14621612?u=76281980&t=327)** If you accidentally misspell something, if you accidentally refer to something that's private that shouldn't have access to, you're going to get this same behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), feature (2), [[Programming]] (2), product (2)
> **CLI Commands:** php (5), make (1), find (1)
> **Env Vars:** php (4), fmt (1)
> **Cross-References:** in the last (1), go back to (1)
> **File Paths:** class_visibility.php (1)
> **Code Identifiers:** class_visibility (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### Setter and getter methods
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=0)** - [Instructor] In this movie, we're going to talk about another concept in PHP called setter and getter methods.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=6)** This folds right in with what we've been talking about, about visibility.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=9)** Let's start by using a metaphor.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=12)** Let's say that we have a bank account and we want to put money into our bank account.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=19)** So we have the ability to do that.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=20)** We put money in the bank and we can take money back out of the bank.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=23)** Now, in reality, that's not the way it works.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=26)** We can't just walk into the bank vault at our local branch and put money in and take money out.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=32)** Instead, what we have is a teller, right?
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=35)** The teller is there, you walk up to the desk, you tell the teller you'd like to deposit money, the teller brings up all your account information, they authorize you, and then they take care of putting the money into your bank account.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=48)** And if you want to get money out, again, you talk to the teller, the teller authorizes you, makes sure that you have enough money in your account, that there's no problems, makes sure the bank has enough money to pay you, and then they take that money out, they give you your money and you go your way.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=63)** The teller acts as an intermediary for both putting things into the bank and bringing them back out again.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=70)** That's how setter and getter methods work.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=73)** The idea is that you would set the property visibility to be private.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=78)** So it's not accessible directly, right?
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=81)** That would be like our bank account.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=83)** We can't access it directly.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=84)** It's private.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=86)** But then we can define a method which does have access to that private property and it can set the properties value for us.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=94)** And we can define another method that will get the properties value back out.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=99)** See those words set and get?
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=101)** That's where we get the names setter and getter methods.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=104)** It's a very common design pattern.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=106)** Here's an example, using a class called product.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=109)** I've made its name private.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=112)** So now when I create a new instance, I'm not able to set a value or read a value back from the name property.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=119)** However, notice that there's also two public functions, one called set_name and one called get_name, and guess what they do?
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=128)** They set those values for me.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=130)** The first one just simply sets the value to name.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=132)** The second one just returns the value back to me.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=135)** So setter and getter methods allow access to what would otherwise be private properties.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=141)** This is useful because it allows us to regulate access the same way that the teller at the bank is able to regulate our access to the bank account.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=150)** It's also useful if we have situations where we only want to be able to read properties back or only write those properties.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=157)** Setter and getter methods are also useful if we want to pre-process values.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=162)** That is, we want to take some information, we want to do some processing on it before we put it into our property, or we want to pull the value out of our property and do some processing on it, before we return it back to the user.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=175)** What you want to avoid, however, are what are referred to as naive setter and naive getter methods.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=182)** The example that we just looked at with product and name is an example of a naive setter and getter.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=189)** This is just simply less efficient and slower than giving us access to the property as a public property.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=197)** We have zero gain to our code, there's zero benefit for security or anything else like that.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=202)** It's just simply slower.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=204)** So don't do this version.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=206)** This is the simplified version and it's what you should not do.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=210)** Let's look at a better example.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=211)** Let's say that our product class has another private property called price.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=217)** I'm going to have two public functions, set price and get price that can interact with that private property.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=224)** The first one, set price, is going to take the value and it's not going to assume that it is an integer or a float value.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=231)** Instead, it's going to strip out any dollar signs or commas that might be in the value, in case we were given something that was a string.
>
> **[3:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=238)** And then it's going to turn it into a floating point number and it's going to check and see whether or not it's less than or equal to zero and if it is, it's going to come back and return an error, saying this product price can't be set to a negative value.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=250)** Then once all of that pre-processing is done, it'll actually set the value of the property.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=256)** And then when we get the price back, I'm not simply just going to return the price.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=260)** I'm going to put that dollar sign in front of it, I'm going to convert it to a string and make sure it has two decimal places.
>
> **[4:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=266)** The way you decide to utilize setter and getter methods inside your own projects is going to depend on what you need to accomplish in each project.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=274)** It's important just to understand the concept.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/setter-and-getter-methods-14623520?u=76281980&t=277)** The fundamental idea is that the property remains private but we still have access to it through public methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), [[PHP]] (1), [[Security]] (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** php (1), make (1)
> **Code Identifiers:** set_name (1), get_name (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Access control
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=0)** (techno music)
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=6)** - [Instructor] It's time for another challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=8)** This time, the challenge is to make sure that you understand access control and how to use visibility modifiers inside your objects.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=16)** There are four parts to this challenge.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=18)** The first is that we want to add visibility modifiers to our Bicycle class.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=23)** That's the class that we created in Challenge 01.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=27)** So, the very first thing you want to do is create a new file called Challenge_03, then you want to go to that Challenge 01 file and copy the class definition for Bicycle into it.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=36)** So we can start with that.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=37)** It's a starting point, then you're going to set visibility for all of the existing properties and methods.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=43)** You'll need to consider which of the attributes and methods need to be public, and can any of them be made private?
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=51)** And if they do need to be made private, do subclasses still need access to them?
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=56)** That'll be part one of the challenge.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=58)** The second part of the challenge is to create Unicycle as a subclass of Bicycle, and once you've done that, you want to add the property wheels with default values for each of those classes.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=70)** A bicycle has two wheels, and a unicycle only has one, then set the visibility such that wheels is only available to the code that defines Bicycle and Unicycle, then you'll define a new method called wheel_details, which is going to return a sentence describing the wheels on either the Bicycle or the Unicycle instance that we're working with.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=95)** So for example, if we have a Bicycle instance, it would return, "it has 2 wheels."
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=99)** If we have a Unicycle instance, it would return, "it has 1 wheel."
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=104)** After you've done that, we're going to go and modify the weight_kg property that we already had before.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=112)** We're going to change weight kilograms to be a private property, and then I want you to define a setter method for it.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=119)** So we want to create a method that will allow us to set a value of that private property, and then we're going to create a getter method that'll read that value back, and not only will it read it back, it'll also append kg after the number, so that we can see that it's a weight in kilograms.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=134)** We'd already written another method called weight_lbs, and that returns the weight in pounds.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=140)** We're going to just modify that slightly, so that it also adds lbs after it, and then it'll be clear from the results if we're looking at kilograms or pounds and last of all, ask yourself, what bug now exists related to this weight_kg property?
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=157)** The last part of the assignment, the third thing that we did, created a bug.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=162)** So figure out what the bug is and then decide how you would fix it.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-access-control-14620653?u=76281980&t=166)** Once you complete this challenge assignment, meet me in the next movie where I will show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Code Identifiers:** weight_kg (2), wheel_details (1), weight_lbs (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Access control
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=0)** - [Instructor] I hope that you were able to complete the Access Control Challenge assignment.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=9)** Let me show you my solution.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=11)** The first part of the challenge was simply to copy the class definition for Bicycle that we had created in challenge_01.php.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=19)** So I created a new file called challenge_03.php, I went to challenge_01.php, and I just grabbed that class definition, pasted it over here.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=29)** The second part was to go through and look at all of the properties and methods and consider what visibility modifiers we should put in front of them.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=38)** Because it's the best practice to always add visibility modifiers.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=42)** Before, we had simply put var in front of each of these properties.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=47)** We don't want to do that.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=47)** We don't want to just have function to define each of our methods.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=50)** We want to have a visibility modifier in every case.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=53)** I decided that all of the existing properties and methods needed to be public, so I put public in place of var, and I added the public keyword in front of function.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=64)** That made them all public and all available to instances.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=67)** I could have done it differently, but I decided to do it that way partly because the way I've been working with this so far is to work with the instance, and to set these values by directly interacting with the properties.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=79)** I don't have another way to set the brand, so I need to have public access.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=84)** Okay, that's the first part of the challenge.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=86)** The second part of the challenge was to create subclass called Unicycle.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=92)** Class Unicycle extends Bicycle, and then I wanted to add a new property called wheels.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=100)** I wanted to be available both to this classes code and to the subclasses code, but not publicly.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=107)** Therefore, I need to set it to be protected.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=110)** Its visibility is not protected, it's not private.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=113)** That would be only for the class Bicycle.
>
> **[1:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=115)** It also needs to be available to the subclass.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=118)** And I gave it a default value of two for the bicycle, I overrode that in unicycle, by making it wheels equals one.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=127)** Now, notice here that I also declared the visibility in the subclass, and I made it protected.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=133)** You might be wondering, well, why not make it private?
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=136)** The visibility when we're overriding these needs to match the property that is being overridden.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=141)** We don't want to change it as we're inheriting it.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=144)** PHP considers it to be one of the protected properties we want to work with that adds protected property.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=150)** Let me just show you that that doesn't work.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=152)** Let me just try and change this to private real quick, and let's do a demonstration.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=156)** Let's go over here and let's just change this to be challenge_03.php, and you'll see I get an error.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=163)** "Access level to Unicycle:wheels "must be protected, as in class Bicycle, or weaker."
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=169)** Right, you can't make it stronger.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=170)** You could make it weaker.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=171)** I could make it public, if that was the modification.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=173)** So most of the time, you just want it to match what you're overriding.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=178)** Okay, so I set wheels.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=180)** The next thing I did was I wrote a new method inside the Bicycle class called wheel_details that's going to return a sentence to me telling me how many wheels it has.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=190)** The first thing I want to do is figure out how to construct that string.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=194)** I created a new variable called wheel_string and I used something called a ternary operator.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=199)** It's basically a short if else statement.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=202)** Basically said if the wheels property is equal to one, then do this, right?
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=210)** I have a question mark.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=212)** This is basically like saying then, and then do this, or if it's not true, do this.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=217)** So I'm using the wheels property.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=220)** I'm using this and the arrow notation to talk to it.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=223)** If it's only equal to one, then it's going to return one wheel, singular, otherwise, however many wheels it has followed by wheels, plural.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=231)** That gives me $wheel_string, then I'm just going to put that together in a nice sentence.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=235)** Now of course, the subclass is also going to inherit this same method, let's try it.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=240)** Let's go back over here and let's reload our page.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=242)** We fix the problem so it's not broken anymore now that it's protected, and you can see Bicycle, it has two wheels.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=247)** Unicycle, it has one wheel.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=249)** So it's working correctly.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=250)** So that was part two of the challenge.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=252)** Part three was to work with the weight of the bicycle.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=256)** The first thing we wanted to do was set weight_kg to be private.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=261)** When I first copied over to class Bicycle, I had actually made it public, but then when I got to this part three of the assignment, I changed it to be private.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=268)** So now, it's not accessible from outside the class.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=272)** It's not accessible when you have an instance.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=275)** For example, in challenge_01, we were working with it here.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=278)** This was when it was public.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=279)** We were able to assign a value directly to it and down here, we were able to read that value back from the property.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=286)** We can't do that anymore because now it's private.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=288)** So instead, we need setter and getter methods and that's the next part of the assignment was to create something that would read the value back, which I'm doing here, and add kg to the end, or to set the value, when I pass a value in, it should then take it.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=304)** It simply makes it ensure it's a float and then puts it into weight_kg.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=307)** That's very similar to what we were doing before when we were working with weight_lbs, and setweight_lbs, right?
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=315)** That was allowing me to pass in a value in pounds and convert it to kilograms.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=318)** Here, I'm just getting access to the property at all.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=322)** So, you can see down here.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=324)** I can set the weight using kg.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=327)** Here, I set it to one kilogram.
>
> **[5:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=329)** I can set the weight in pounds and read it back in kilograms or read it back in pounds.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=334)** These now have a parallel structure to them.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=338)** Notice also that there's no problem with me having a method called weight_kg and a property called weight_kg.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=348)** PHP knows the difference because we always have those parentheses that follow the method.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=352)** So it knows which one we're talking about.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=354)** If we go back over here, we reload our page, you can see the results of that set weight using kg, that's one kg, and then set weight in pounds, as you can see, I added that lbs after the pounds.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=365)** Set weight using pounds and then we can see the kg value and we can see the lbs value.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=370)** Okay, so that completed part three of the assignment.
>
> **[6:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=372)** So now, part four of the assignment was to figure out what bug we just introduced into the code.
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=380)** I'll give you a hint which is, it has to do with our subclass.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=384)** We made weight_kg a private property.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=389)** That means that our subclass can't see it.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=392)** wheels was a protected property where the subclass could, but a unicycle should also be able to have a weight, right?
>
> **[6:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=398)** So we want to be able to work with that.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=400)** Now, Unicycle is inheriting all these methods for weight_kg and setweight_kg.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=407)** So the question comes up then, will this work?
>
> **[6:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=411)** Let me just take this code and let's uncomment it, set the weight for the unicycle, I'm using that Unicycle instance, and I'm doing the exact same thing I did up here, setting the weight using kg, and let's see if it works.
>
> **[7:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=423)** Let's try it.
>
> **[7:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=424)** Let's save our file.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=425)** Coming back over here, let's reload the page, and it did, we got the exact same results when we had a one kilogram bicycle and when we had a one kilogram unicycle.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=434)** So why is that?
>
> **[7:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=436)** If we made it so that this is private, shouldn't it not be able to have access to it?
>
> **[7:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=441)** It doesn't have direct access to it.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=444)** The thing is, it does have access to this method, and this method, in turn, has access to that private property.
>
> **[7:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=452)** However, if we come down here in Unicycle, let's create a new public function, which we're going to call bug_test, and we're just going to try and return the value of that private property.
>
> **[7:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=466)** Weight_kg.
>
> **[7:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=469)** That's it.
>
> **[7:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=470)** Save it and let's come down here and let's just copy this line and let's change this, instead of calling this method, we're going to call bug_test.
>
> **[8:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=482)** So let's save it and now let's see what happens when we echo back the value of bug_test.
>
> **[8:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=487)** Reload the page.
>
> **[8:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=489)** Notice, undefined property.
>
> **[8:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=491)** The unicycle has no idea what this weight_kg is.
>
> **[8:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-access-control-14627440?u=76281980&t=495)** This reference is meaningless when it's inside the Unicycle code, but these kinds of quirks with visibility, especially in subclasses, is going to come up from time to time in PHP and you're just going to have to get experience to know when it's going to work or when it's not and to try it out and test your assumptions if you're not sure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), next (2), parallel (1)
> **Code Identifiers:** weight_kg (7), bug_test (3), wheel_string (2), wheel_details (1), weight_lbs (1)
> **CLI Commands:** php (7), make (4)
> **File Paths:** challenge_01.php (2), challenge_03.php (2)
> **Env Vars:** php (3)
> **Analogies:** for example (1), similar to (1)
> **Definitions:** means that (1)
> **Best Practices:** best practice (1)


### 5. Static Properties and Methods

[↑ Back to Table of Contents](#table-of-contents)

#### The static modifier
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=0)** - [Instructor] In this chapter, we will learn about static properties and methods.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=4)** Static properties and methods are for behaviors that are related to the class generally, or the class as a whole.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=10)** These are behaviors that are not tied to any particular instance of the class.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=14)** For this reason they're often referred to as class properties or class methods.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=19)** We're going to have access to them by calling them directly on the class without having to have an instance of the class first.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=27)** In order to define them, we're going to use the keyword static.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=31)** So for example, if I have a student class I can have a static property for grades by putting the static keyword in front of it, in the same place where we put our visibility modifiers in the last chapter.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=42)** And then I can have a static method called motto by putting static in front of the word function.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=48)** The idea is the grades property is holding data that is related to the class as a whole.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=54)** It's not specific to any one instance of the class.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=57)** Presumably if I had an instance of student, that student would be one of these grades, freshman, sophomore, junior, senior.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=65)** But it makes sense that we would have an idea of all grades that are possible stored in the class as well.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=71)** That's knowledge that the class has about the possible choices, even though an instance is only going to pick one of them.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=77)** Even though it's a little silly of an example, the motto is going to be something that belongs to the class so that all students have the same motto.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=84)** It's not a motto that's unique to each and every student.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=88)** Once we've defined our static properties and methods we're going to need to use a different syntax in order to reference them.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=94)** We can't use the aero notation that we've been using when working with instances.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=98)** Instead we're going to use the class name followed by two colons and then the name of the property of the method.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=105)** Notice that I have a dollar sign in front of the property name.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=108)** That's very important.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=110)** That's different from what we were working with with Aero notation.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=112)** When we had aero notation we omitted the dollar sign, but when we're working with static properties we must include it.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=119)** In previous chapters, our method code was able to make use of a special pseudo variable called $this.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=126)** Our static methods cannot use it.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=129)** And that makes sense because $this refers to this instance and we don't have an instance here.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=135)** We haven't created an instance we're talking to the class directly.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=139)** So it can't refer to a specific instance using the this variable.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=143)** Instead if a static method wants to refer to the current class, it can either do it by using the class name and two colons or even better, it can use the special keyword self.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=154)** So self::, and then the property or the method.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=158)** It's considered a best practice to use the class name when you're outside the class and to use self when you're writing code inside class.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=166)** Part of the reason that's important is that we can also combine the static modifier with our visibility modifiers.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=172)** And if we make a property or a method public it's going to be available both to student:: and to self::.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=180)** But if we make it private then we can call it from inside the class using self but we will not be able to call it from outside the class using student.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=190)** Here's an example that demonstrates that.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=192)** Notice that I'm using my visibility modifiers with my static modifier.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=197)** The order that they go in doesn't matter.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=199)** I like to put my visibility modifiers first.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=202)** You can see that grades has been marked as being public.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=205)** So therefore we're able to reference it outside the class definition and ask for the grades at index position zero, and it returns back freshman.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=213)** Total students though has been marked as being private.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=216)** So when we try and make reference to that from outside using student::, it comes back with an error saying we cannot access this private property.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=225)** However, I can have a public static method called count which can reference it by using that self keyword.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=232)** And then I can call that public static method in order to get back the value.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=237)** So far all of our code has been talking directly to the class without instantiating any objects.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=244)** If we did instantiate an object of this class it's important to realize that we cannot access the static properties from that instance.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=252)** The static methods are accessible from an instance but it's a quirk of PHP and you shouldn't do it.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=258)** It's considered a bad practice.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=260)** PHP five will do it, but will also return a warning.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=264)** PHP seven will do it, but returns a deprecation warning, which essentially says you can do this but support for it may go away in the future, so beware.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=273)** Let's try an example.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=275)** Inside our sandbox in the exercise files I've included a new file called static_modifiers.php where I essentially just defined the student class that we were looking at in the slides.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=287)** I gave it a public static property for grades and I gave it a private static property for total students.
>
> **[4:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=294)** You can see that I've got a public static method for motto and a public static method for count.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=301)** Let's just try some of those out real quick.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=303)** Let's start by just trying to reference those.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=305)** So let's do echo, we're going to call the student.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=308)** We're going to use ::, and then a $.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=311)** Very important.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=313)** We're going to ask it for the grades at index position zero and we'll put a BR tag after it just so that it goes to a new line.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=321)** And let's also just copy that.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=325)** But instead of the grades property let's call the motto method.
>
> **[5:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=331)** Okay, so let's save that.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=332)** Let's go back over here and let's try it.
>
> **[5:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=335)** We're going to be static_modifiers.php, there we go freshman and to learn PHP OOP.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=346)** So there you go, we get back both those values.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=348)** We were able to use the double colon notation to reference both of those.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=353)** Now let's try another one here where we try and go directly to dollar sign total students.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=361)** And let's see what that gives us back.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=363)** Let's reload our page and we give back an error.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=366)** It's a private property and we can't access it.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=368)** Right, we knew that.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=370)** So let's mark here, error.
>
> **[6:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=373)** And I'll just comment that line out.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=375)** Let me just grab this line and copy it.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=377)** If instead we asked for count, it can access it even though it's a private property we're using self and it's able to get there.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=385)** So let's ask for that value and it comes back and says, it's zero.
>
> **[6:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=389)** Right now there's also another method here called add student.
>
> **[6:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=393)** Maybe every time I create a new student I'm going to increment this value of total of students, and then I can keep a running count of the students.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=400)** So it's going to call self:: total students ++ we'll increment it.
>
> **[6:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=405)** So now I can call that down here.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=407)** Let's try student::, add student, it's public, I can certainly call it.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=413)** And then let's ask for the count again.
>
> **[6:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=416)** Save it, come back over and reload the page.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=419)** And there we go, zero and one.
>
> **[7:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=422)** So that's how static or class property and methods work.
>
> **[7:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/the-static-modifier-14620655?u=76281980&t=426)** Static properties and methods are an important tool in your PHP Object oriented toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[Microsoft Word|Word]] (1), data (1), oop (1)
> **CLI Commands:** php (7), make (4)
> **Env Vars:** php (5), oop (1)
> **File Paths:** static_modifiers.php (2)
> **Code Identifiers:** static_modifiers (2)
> **Best Practices:** best practice (1), bad practice (1)
> **Warnings:** warning (2)
> **Cross-References:** in the last (1)

#### Inherited static behaviors
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=0)** - [Instructor] In this movie, we're going to talk about what happens when you mix object inheritance together with static properties and methods.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=6)** The short version is that static properties and methods are inherited.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=11)** So if we define static properties and methods on a class, then we define a subclass.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=15)** That subclass is going to have the same static properties and methods.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=19)** It's going to follow the same visibility modifier rules that we've been working with so far.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=23)** So if something is defined as being public or protected, then it's available in the subclass but of course, if we define it as being private, then it's not inherited and not available.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=32)** It's only in the parent class.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=34)** However, there's one big gotcha that you need to watch out for, which is that inherited static properties are shared variables.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=42)** That means that changes to the parent value, change the subclass values and changes to a subclass value is going to change the parent value.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=51)** Let me demonstrate.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=53)** Let's say I have a class called student and it has a public static property for grades.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=57)** And then I have a subclass of student called part-time student.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=61)** Part-time student is going to still have access to that property and we can see that in the first example below the class definitions, where we ask it for the value that's at position zero in the array and it returns freshman to us.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=74)** But here's the tricky part.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=76)** What happens when I take that subclass part-time student and I tell it to append a new value onto the end of the array?
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=83)** So I add alumni.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=86)** Notice in the last example, when I ask it to output a list of all the grades and to put them together with commas, I'm asking it on the parent class, student, not the sub class that I added it on.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=99)** And we get back an array that includes alumni at the end.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=103)** Changes that I made to the sub class also happened on the parent class because it's a shared variable.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=110)** This is important to understand because I think it trips up every single PHP developer at some point.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=116)** For example, here's another common use case.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=118)** Let's say that we have a class of students and we're keeping track of the total number of student objects that we've created.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=125)** And we are doing that in a static variable called total students.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=129)** I've just made it a public static variable so I can quickly access it.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=132)** Now I have a subclass called part-time student.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=135)** So let's say that my code is going along and it's creating new student instances and every time it does, I'm incrementing the value of total students.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=142)** So I call student colon, colon, total students, plus, plus and it adds one to that value.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=147)** I do that a couple times.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=149)** Then, suddenly I create a part-time student and I increment its value as well.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=154)** I might think that I'm adding that to a unique variable, that I'm going to end up with two different counts, a count of students and a count of part-time students, but I'm not because it's a shared variable.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=166)** So the result at the end is going to be four for both of them.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=170)** Let's try adding this to our sandbox.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=172)** Let's go into static modifiers.PHP and just at the bottom of the file, let's drop down a couple lines and let's add a little comment here that just says static properties and methods are inherited
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=188)** and let's create a subclass.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=190)** Class part time student extends student.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=196)** And I won't put anything inside of there but we know now that it's going to inherit everything that was inside student.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=202)** So that's going to include grades and total students.
>
> **[3:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=205)** All right.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=206)** So let's try those two examples we just saw.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=208)** Let's start by, let's just grab these lines up here, 22 and 23 and we'll just echo back these values and we're going to just change the class to be part time student for both of them.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=222)** All right, let's go over and let's reload our page.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=226)** And you can see, we got back those same values.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=227)** Freshmen and to learn PHP OOP.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=230)** So we have access to those.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=232)** We know that they are inherited but let's make a note here that changes are shared too.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=241)** And let's just say, part-time student, colon colon, grades.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=248)** Let's just add on to the end of that array alumni.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=252)** Now let's try just looking at the values implode and student.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=259)** We want to ask the parent for what grades it has.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=263)** Come back here, let's reload it.
>
> **[4:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=266)** And sure enough, you see that the value is there.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=269)** So even though we added it on the sub class, this is the same variable as here when we're talking about the class.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=277)** Let's try another example with the total students.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=279)** Let's say student, colon colon, total students.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=285)** Oops, I actually can't do that because it is private in this case.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=288)** So let's just change this to add student.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=291)** There we go.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=292)** And let's do that a couple times and let's do one more but we'll make it part time student.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=298)** All right.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=299)** So let's now take a look at what those values are for each one of those.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=302)** I have that up here.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=303)** I'll just copy that, drop down here and let's do it for both the student and for the part-time student.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=313)** And let's just add a BR tag here, right after grades.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=319)** I didn't have that before.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=321)** All right, let's go over here and let's reload it.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=323)** Let's take a look at what we've got.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=325)** Look at that.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=325)** The value is five for both.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=327)** Now I had added a student up here, so that's why I have five, one, two, three, four, five.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=333)** The count was the same for both the student and the part-time student.
>
> **[5:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/inherited-static-behaviors-14625469?u=76281980&t=337)** And the reason why is because this private static variable is being shared between the two of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), oop (1)
> **CLI Commands:** php (3), make (2)
> **Env Vars:** php (3), oop (1)
> **Definitions:** defined as (1), means that (1)
> **Warnings:** gotcha (1), watch out (1)
> **File Paths:** modifiers.php (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)

#### Class constants
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=0)** - [Instructor] In this movie, we're going to learn about class constants.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=4)** You've probably been using constants before in PHP.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=7)** They're used for values which don't change.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=9)** Well, class constants are just for class values, which don't change.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=13)** The way that we define them in our class is we use the keyword const, C-O-N-S-T, followed by the name in all capital letters, just like we do with normal constants.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=23)** The value that we set a constant to can be something simple like a string or a number or an array or it can contain mathematical expressions.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=32)** If you're using a new version of PHP, that is something later than 7.1, then you also can put a visibility modifier in front of that const keyword in order to make something public, protected or private.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=45)** Prior to 7.1, and by default, it's going to be set to public.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=50)** So constants are available publicly outside the class as well as inside the class.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=55)** The way that you reference those constants is using class name colon colon followed by the name of the constant or self colon colon followed by the name of the constant.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=65)** So they're extremely similar to static properties.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=68)** The difference is that a static property has values that can be changed while constant values cannot.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=75)** Here's an example of a class or clock.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=79)** And you can see that it has a constant defined for day underscore in underscore seconds.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=84)** All capitals.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=85)** There's no dollar sign in front of it.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=87)** When we have a constant, we have a variable we put the dollar sign there, but having it all caps with no dollar sign tells us this is a constant.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=94)** And I'm using a visibility modifier in front of it to make it public.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=98)** And then I'm setting it equal to a mathematical expression.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=101)** What is a day in seconds?
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=103)** Well, there's 60 seconds in a minute, 60 minutes and an hour and 24 hours in a day.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=107)** So this tells me the number of day in seconds.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=110)** You'll see below the class definition that I'm able to reference the constant by calling clock colon colon day underscore in underscore seconds.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=117)** And it returns the value back because it's public.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=120)** I also can refer to it using self and you see that I do that inside the method for tomorrow.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=125)** This is not a static method.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=126)** This is just a normal method called tomorrow and it's going to return back the current time plus whatever day is in seconds.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=134)** And that'll give me the time tomorrow.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=137)** So at the bottom, you can see that I create a new instance of the clock and then I call it's tomorrow method and it returns back the time tomorrow.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=145)** Let's put this same example in our sandbox to try it.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=148)** So let's add a new file to our sandbox.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=150)** I'm going to control click on this and choose New File.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=153)** Let's call it class_constants.php and we'll open up our PHP tags.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=163)** And let's try that example that we just had where we had a class called clock, and inside, we're going to have a public constant called day in seconds and that's going to be equal to 60 times 60 times 24.
>
> **[3:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=182)** Okay, now let's come down here and let's just try this out.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=185)** Let's have echo clock colon colon, and then, I'm just going to copy this, paste it right there.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=193)** And then at the end, let's put our br tag so that we'll be ready for a new line after that.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=198)** Let's just try that much out.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=199)** Let's come over here.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=201)** Instead of static modifiers, it's going to be class underscore constants.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=206)** And there you go.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=207)** You see the result.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=209)** Alright, so now let's write something that'll use that internally.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=212)** So I'm going to make a public function called tomorrow and tomorrow is just going to return back time, which is a regular PHP function that returns the time in Unix seconds.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=227)** Right, it's Unix time.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=228)** The number of seconds since 1970.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=230)** And we're going to add that with self colon colon day underscore in underscore seconds.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=237)** And then down here, we're going to need to create a new instance of the clock.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=241)** New clock.
>
> **[4:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=244)** And then we'll ask that clock to call its instance method tomorrow.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=250)** And we're going to echo that or it won't show anything.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=254)** And we'll put a br tag at the end.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=257)** Alright, let's go back over here.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=258)** Let's try it out.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=260)** Let's reload our page.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=261)** And there you go.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=262)** You get the result.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=263)** Now just for fun, let's try this out.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=265)** Let's take this away, the self, so that we just have day in seconds.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=268)** Let's save it.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=270)** Come back and reload the page.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=273)** Notice undefined constant.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/class-constants-14621613?u=76281980&t=275)** So we need to have self in front of it so that PHP knows that we're talking about the class constant day in seconds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6)
> **CLI Commands:** php (6), make (3)
> **Env Vars:** php (5)
> **Definitions:** is a  (3)
> **Versions:** 7.1 (2)
> **Analogies:** just like (1), similar to (1)
> **File Paths:** class_constants.php (1)
> **Code Identifiers:** class_constants (1)

#### Refer to the parent class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=0)** - In this movie, I want us to look at how subclasses are able to refer to behaviors, which are in their parent class.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=7)** So, far when working with our static, properties, and methods, we've seen a couple different ways that we can refer to them.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=13)** The first is that we can use the class name, followed by the scope resolution operator, and then either the property or the method name.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=20)** We also saw that, if we're working inside the class definition, we have another option, which is the keyword self.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=26)** So, we can swap out the class name for this keyword self.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=31)** When we want to refer to the parent class, we also have two options, the first is that we can use the actual class name, just like we did in that first example, or we have a keyword that we can swap in, and this is considered a best practice and a better way to do it, just like self is.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=47)** If we're inside the definition of the class, it's better to refer to the parent class as parent.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=54)** And, that'll refer to whatever class is listed right after the keyword extends.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=59)** That's the class that we're talking about.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=61)** So, it's going to ask the parent for its property or method.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=65)** Now, this is only going to be for static properties and methods, not for instances.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=70)** Now, actually the same rules apply as with self, whereas it does work for methods, but you'll get a deprecation warning saying please don't do this, because this feature may go away and the future.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=81)** So, it's a best practice not to do it, even though technically you can.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=85)** And, it makes sense that we wouldn't do that, because self and parent are replacements for the class name.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=92)** So, you would use parent followed by either the property or the method name, but the thing is, it's not actually needed for the static properties.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=102)** You remember we talked about that those static properties are already shared with all the subclasses.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=107)** It's a common variable that they're both using.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=109)** So, we don't need to use parent followed by a property name, because self followed by the property name refers to the same variable.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=118)** Where it's useful is for calling static methods, especially after we've overwritten them in the sub class.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=125)** Let's look at the two most common cases where you might do this, because they're going to be very instructive.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=129)** The first example shows how you extend the functionality of the parent static method.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=135)** Here, I have a class called Chef, it has a public static function called make dinner in it.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=139)** And, it's just going to echo back the phrase, cook food.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=142)** Now, I have a subclass called AmateurChef and it's going to override make dinner.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=147)** So, the AmateurChef is going to make dinner in a different way than the Chef did, but notice that it still calls parent make dinner inside of it.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=156)** Essentially, what I'm doing is I'm saying, hey I want to do the same thing as my parent did, but I have some business that I want to take care of, either right before it, right after it, or both.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=166)** We still want that parent's method.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=167)** We don't want to have to rewrite it.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=169)** We just want to wrap additional code around it.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=172)** And, this does that.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=173)** So, then if I call Chef, make dinner, it responds with cook food.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=177)** But, if I ask the AmateurChef to make dinner, you'll see that I get back, read recipe, cook food, clean up mess.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=184)** This isn't a particularly real world example, but I hope that it does make clear this idea that you're able to do actions before and after what the parent method would do.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=194)** And, where this really pays benefits is if we decided to add another step to Chef make dinner, the AmateurChef would get that change too.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=203)** The second common usage is to override the parent method, but then to fall back to the parent if something goes wrong or a condition is not met.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=212)** So, here, for example, I have a class called image.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=215)** It has a public static property for resizing enabled which is currently to true by default.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=220)** And, I have a public static method for geometry, which returns just the string 800 by 600.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=227)** Now, I have a subclass called profile image, which is going to override geometry, and it's going to attempt to provide its own answer.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=235)** Its own answer would be 100 by 100, but notice that it only returns that answer if resizing is enabled.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=243)** If not, it's going to fall back to what the parent had.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=247)** So, it basically says, try to do this yourself, but if for some reason you can't do it, something goes wrong, or condition is not met, let's fall back to whatever our parent said, and see if the parent can handle it instead.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=259)** Take a moment and also notice that when I'm referring to resizing enabled I'm not calling parent resizing enabled, even though that's defined up in the parent class, I don't have to, because that's a shared property.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=270)** So, it's already inherited into the profile image class.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=275)** So, when we try it out, we have our image geometry, of course, we get back 800 by 600.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=279)** If we ask for the profile image geometry, we would get 100 by 100 as a default, because resizing is enabled.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=287)** But, if we then turn resizing off, notice here that I'm doing that in the parent class, it doesn't matter.
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=292)** It would work the same way if we did it with profile image, then, when I call profile image geometry, it's going to try and handle it itself by calling its own overridden geometry method, but since resizing isn't enabled, it's going to fall back to the parent.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=308)** So, there are many reasons that you might call the parent, but these are the two most common usages, either to extend a current method with something either before it, or after it, or both, or to fall back to it if something goes wrong or a condition is not met.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=323)** Let's try these examples in our sandbox just so we can see them.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=326)** I've already included a modified version of the code that we just looked at inside the file, parent.PHP, which is in the exercise files.
>
> **[5:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=335)** So, you can see, I have my Chef class, I have my make dinner method, I've also added just a BR tag at the end here, just so we'll get a new line.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=342)** And, then, I have the AmateurChef extending the Chef overriding make dinner.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=347)** It's going to add additional steps here.
>
> **[5:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=349)** It's, then, going to call the parent method and then add additional steps afterwards.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=354)** And, then, we'll actually call those things right here.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=356)** Let's just take a look at that, before we get to the second example.
>
> **[5:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=359)** Let's save this.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=361)** Let's come back over here.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=363)** And, the name of this is just going to be parent.PHP.
>
> **[6:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=367)** So, Chef is going to cook food.
>
> **[6:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=369)** The AmateurChef is going to read recipe, cook food, clean up mess.
>
> **[6:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=372)** See how that works?
>
> **[6:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=374)** Okay, let's come down here.
>
> **[6:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=375)** And, let's look at the second example.
>
> **[6:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=377)** Example of using a parent static method as a fallback, we have the resizing enabled set to true, I have the geometry, by default just returning this string, profile image is a subclass of image.
>
> **[6:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=390)** And, it's going to try and handle the geometry method itself.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=394)** It's going to check to see if resizing is enabled.
>
> **[6:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=396)** If it is, it'll handle it itself, it'll return its own version.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=399)** But, if not, then it's going to ask the parent to handle it for it.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=403)** So, we can try both of those down here.
>
> **[6:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=405)** You see we're asking for the parent geometry, the profile image geometry, then we change resizing enabled, and try the profile geometry again.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=413)** Let's just go back over here and let's reload it.
>
> **[6:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=416)** And, you can see we get 800 by 600 and 100 by 100.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=420)** Then, we disable the resizing and we try it again.
>
> **[7:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=423)** And, this time the parent is handling it instead of the child.
>
> **[7:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/refer-to-the-parent-class-14624483?u=76281980&t=427)** The idea of calling the parent class and especially these two design patterns, the idea of either extending a method, or falling back to a method, are important to have in your PHP toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), feature (1), business (1), [[Design Patterns]] (1)
> **CLI Commands:** make (10), php (3)
> **Env Vars:** php (3)
> **Analogies:** just like (2), for example (1)
> **File Paths:** parent.php (2)
> **Definitions:** refers to (1), is a  (1)
> **Best Practices:** best practice (2)
> **Cross-References:** we talked about (1)

#### Late static bindings
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=1)** - [Instructor] In this movie, we're going to talk about a concept called late static bindings, and the best way to understand what they are, is to first understand the problem they solve.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=10)** In challenge number three, we defined a class for Bicycle and a subclass of Unicycle, and we did that before we knew about static properties and methods.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=18)** Now that we know about them, it might occur to us that the wheels property and the wheel_details method are good candidates to make static.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=25)** They aren't specific to any one instance, but they're behaviors of the Bicycle and Unicycle classes generally.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=32)** So we set about to do that.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=34)** We add the static keyword in front of the wheels property and we add the static keyword before the definition of the wheel_details method.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=42)** Then inside the wheel_details method, we also need to change the first line.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=46)** Instead of using the $this, with arrow notation, we want to use self::.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=52)** That's going to refer to that property statically.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=57)** Then, once we have that defined, we go about calling the static method on the Bicycle class.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=61)** We have the class name, colon, colon, and then wheel_details.
>
> **[1:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=65)** It returns back to us, "It has two wheels."
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=68)** That's great, it works exactly like we expected.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=71)** So now we try it on our Unicycle class and it returns back, "It has two wheels."
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=76)** Wait a minute, what's going on here?
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=79)** We inherited the behaviors from Bicycle but we also overrode the default value of wheels.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=86)** Why is it not picking up our change?
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=87)** Why is it still telling us that there's two wheels instead of one?
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=91)** The reason why is because PHP by default uses something called static bindings.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=97)** With static bindings, static references are resolved using the class in which the method was defined.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=104)** Self is defined in the Bicycle class, so it references Bicycle.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=110)** The reason PHP does this is it allowed PHP to pre-process the class definitions and have them ready to go, so that it's much faster.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=117)** But the downside is that it prevents inheriting those static references because no matter what we do, self has already been predetermined to refer to the Bicycle class.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=127)** Even though Unicycle inherits it, PHP uses the word self and it thinks Bicycle.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=133)** The solution to this is something called late static bindings.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=137)** If the other ones are just static bindings, late static bindings resolve later.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=143)** That is that they're resolved using the class that is called at runtime.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=147)** It waits to decide what self means until we actually get to that code and call it.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=153)** This was added in PHP 5.3, so it's available in all versions of PHP after that and in order to use it, all we have to do is replace that keyword self with the keyword static.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=164)** Other than that, it's the exact same concept as static references.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=168)** It just allows us to inherit those references.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=171)** So when we define the Bicycle and Unicycle classes, we still define the properties and methods as being static just like what we did before.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=179)** The one difference is you'll notice that now I've changed the keyword self that comes right before that scope resolution operator and I've made it into the keyword static.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=189)** It happens to be the same keyword that we used before.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=192)** It's not the same thing.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=194)** In this context, we're saying use the late static bindings.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=197)** Get this value at runtime.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=200)** Don't precompute it.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=202)** Therefore, when I ask for Bicycle::wheel_details, it calculates static as being Bicycle because it's in the Bicycle class when I call it.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=210)** But when I call the Unicycle class at runtime, it goes through the wheel_details method, and it sees that it's been inherited and so, static refers to Unicycle and returns then back that value of one and it says, "It has one wheel."
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=226)** There's also a function for late static bindings that we should know about.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=229)** You'll recall that earlier, we learned about a built-in PHP function called get_class, and when we pass it an object as an argument, it'll tell us what class that object is.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=239)** There's another way we can use get_class, which is to put no object in at all, and when it's inside our code, we call get_class, it'll tell us what the current class is.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=249)** Now as you might guess, that uses static bindings to do that.
>
> **[4:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=253)** So if that gets inherited inside a static method, it's going to say that it's the class that it was originally defined in.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=261)** There's another method called get_called_class.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=264)** It won't take any arguments, but once it's inside a method, it'll return the late static binding class.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=270)** The class at runtime.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=272)** Let's do a demonstration of late static bindings in our sandbox.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=276)** In the exercise files, I've already created a file called late_static_bindings.php and I've put in some starter code for us.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=284)** I've got a class definition for Sofa and you'll see I've got a subclass down here of Loveseat that extends the Sofa.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=291)** I've got a protected static property which I've called identity, and it's just going to tell us that it's the Sofa class, and then I'm overriding that in the subclass.
>
> **[4:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=299)** So identity here is equal to Loveseat class.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=302)** I'm doing this so I can call the identity_test method and it will return back some information.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=307)** We'll see the result of what happens if we ask for that value, that property, using self, and what happens when we ask for that property using static, and then we can compare.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=318)** Let's see what the difference is between them.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=319)** And then I'm also going to call get_class and get_called_class, so we can see the difference that each of those returns.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=327)** All right, so now let's try it out.
>
> **[5:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=329)** Let's come down here and let's type Sofa and then our scope resolution operator, followed by the name of our method.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=336)** Identity underscore test, parentheses, parentheses.
>
> **[5:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=339)** The echo statements are already inside that test so I don't need to do anything beyond that.
>
> **[5:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=343)** And then let's just do echo, let's do an HR tag, just to make a nice dividing line, and let's do the same thing, I'm just going to copy this line, but instead it's going to be the subclass Loveseat.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=357)** Let's ask it for its identity_test.
>
> **[5:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=359)** Come back over to this page and let's go load it up.
>
> **[6:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=362)** Late_static_bindings.
>
> **[6:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=367)** Okay, let's look at the results.
>
> **[6:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=369)** So the first one is when we're calling it inside the parent class, right?
>
> **[6:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=374)** I'm calling Sofa identity_test and it's first saying, all right, Sofa class, what is your identity, using self and static?
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=380)** And it returns Sofa in both cases and that makes sense.
>
> **[6:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=383)** It's the same class.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=384)** Both when it was defined and at runtime.
>
> **[6:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=386)** And so, get_class and get_called_class also return the same thing, but in the subclass, notice that there's a difference.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=394)** When we call self followed by the property, we get back Sofa class.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=400)** When we call static followed by the property, we get the Loveseat class.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=403)** This is the value of self when the class was defined.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=407)** This is the value at runtime.
>
> **[6:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=410)** And this shows the difference between get_class and get_called_class.
>
> **[6:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=415)** I realize that there's a lot of complexity to how static properties and methods work.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=419)** It can take a little bit of getting used to.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/late-static-bindings-14621606?u=76281980&t=421)** Spend some time playing with it and defining some new classes of your own 'til you get a feel for it. Also, in the next movie, I'm going to give you a challenge where you can get more hands-on experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[Microsoft Word|Word]] (1), hr (1), next (1)
> **Code Identifiers:** wheel_details (6), get_class (6), get_called_class (4), identity_test (3), late_static_bindings (1)
> **CLI Commands:** php (8), make (2)
> **Env Vars:** php (7)
> **Exercise Files:** exercise files (1), starter code (1)
> **Definitions:** is called (1), refers to (1)
> **File Paths:** late_static_bindings.php (1)
> **Versions:** php 5 (1)

#### Challenge: Static references
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=0)** (upbeat pop music)
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=6)** - [Instructor] It's time for another challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=8)** This challenge relates to everything we've done in this chapter on static properties and methods.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=14)** In order to do this challenge we're going to be reusing the bicycle and the unicycle classes that we created in the last challenge.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=21)** So the very first thing you want to do is create a new file called challenge_ 04.php, then you'll go and open up challenge_ 03.php and copy those classes for bicycle and unicycle into the new file then you'll be ready for the challenge.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=37)** There are a couple of different parts to this challenge.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=39)** The first is that I want you to add a static property called instance count.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=44)** The idea is it'll be used to store a count of the number of instances that have been created.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=49)** Once we have that static property we can create a static method called create.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=54)** The idea behind create is that create is going to create and return a new instance to us.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=60)** So it'll do to two things, it's going to add one to that instance count variable and it's going to create and return a new instance of the class.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=70)** Now make sure it's the correct class.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=72)** If it's called on bicycle it should create and return a bicycle instance.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=76)** If create is called on unicycle it should create a unicycle instance.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=81)** It's a little bit tricky, so spend some time thinking about that.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=84)** And then of course it's a best practice to make sure we use visibility modifiers on both instance count and create.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=90)** The second part of the challenge relates to constants.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=93)** I want you to define a constant for storing an array of categories.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=98)** The idea is that these are categories that a bicycle could belong to.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=102)** So for example, road, mountain, hybrid, cruiser, city and BMX.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=107)** If you're using PHP 7.1 or later you'll also want to set a visibility modifier on that constant and you can set it to public so that we can see it.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=116)** when we're working with an instance.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=118)** If you're using PHP before 7.1, you don't set the modifier it'll automatically be public.
>
> **[2:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=124)** Then add a category property for instances so they can store their category.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=130)** That way one instance of a bicycle can be a mountain bike, while another instance of a bicycle can be a hybrid bike For the third part of the challenge I want you to make the property wheels into a static property.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=141)** We've already defined it but now needs to become a static property and also make wheel details into a static method.
>
> **[2:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=148)** Once you've done that, then make sure that both bicycle and unicycle return the expected results for wheel details.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=157)** Unicycles the one to really watch out for, that's a little tricky because it's a subclass.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=161)** And then last of all, I have an extra credit assignment for you.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=165)** If you feel like you have a good hand on this try to create a method in unicycle, which extends a method in bicycle, by executing code either before or after the bicycle's method.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=178)** And then create another method in unicycle which overrides a method in bicycle but will fall back to the original method.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=186)** if a condition is not met.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=188)** What the behavior is in the parent or the subclass is really up to you.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=192)** Get creative.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=194)** The point is to try and implement these two design patterns.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=197)** If you need help, you can go back to the movie on referring to the parent class to get some ideas.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=203)** Spend a few minutes working on this challenge and make sure that you understand static properties and static methods.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-static-references-14624480?u=76281980&t=208)** In the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Design Patterns]] (1), next (1)
> **CLI Commands:** make (6), php (4)
> **Env Vars:** php (2), bmx (1)
> **Cross-References:** in the last (1), go back to (1), in the next (1)
> **File Paths:** 04.php (1), 03.php (1)
> **Versions:** php 7 (1), 7.1 (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### Solution: Static references
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=6)** - [Instructor] I hope that you had success in completing the static references challenge.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=10)** Now, let me show you the solution that I came up with.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=12)** The first thing I did was set up for the challenge which meant going into challenge_03.php and grabbing both the Bicycle class and the Unicycle class and putting those into a new file called challenge_04.php.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=26)** Then I could start the different parts of the challenge.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=28)** The first thing was to add a new property called instance_count to make it a static property and also of course I want to make it public so that it has visibility.
>
> **[0:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=39)** It's always the best practice to have visibility in front of this.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=42)** I also gave it a good default value, which is zero.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=45)** So we'll start this counter at zero.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=47)** And every time we create a new instance we're going to increment that counter.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=51)** We're also going to define a new method.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=52)** It's a static method.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=54)** I've also said that it should be public and it's going to be called create.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=57)** So I can call that on either class, on my Bicycle class or on this subclass.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=62)** In either case, I want to create a new instance of that class and increment my counter.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=68)** I decided to create an instance of the class first, then increment the counter and then return the instance.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=74)** So that's the steps that I've got here.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=76)** In order to create a new instance, we know we need to use that new keyword.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=80)** That's how we create instances.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=82)** And before we always just had a class name there like Bicycle.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=88)** Now, we don't want to just use Bicycle here because it might be Unicycle that's calling this, right?
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=92)** This is an inherited method.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=94)** So our subclass is going to have access to it.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=97)** So how do we know which one goes here?
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=99)** We need to find out what class is calling it.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=102)** Now you could just use get_class but we talked about how there's a difference between static bindings and late static bindings.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=108)** If we use get_class, it's always going to return bicycle.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=112)** If we use get_called_class, it'll find the late static binding version, the one from run time.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=118)** So it's the class that exists when create is called.
>
> **[2:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=122)** So if that's Unicycle, it'll actually Unicycle and that'll give us a string here called class name which we can then pass into new.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=129)** Now, we can't put get_called_class down here in this line 'cause new will only take a class or a string.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=135)** We can't put a function here.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=136)** So we have to do it in two steps like this.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=138)** There's also a shortcut for this, which I haven't shown you but it's actually the way that I do it which is you can use static or self instead.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=147)** And it does the exact same thing.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=149)** So far, we've only been using static and self when they're paired with that scope resolution operator but they can be used on their own either to refer to the current class or the called class.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=160)** I'm going to comment that out and we'll just leave it the other way for now.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=163)** Once I have an instance and I've assigned it to that's variable here, now I'm going to increment the instance count.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=169)** I'm using self here, I could use static, but there's no reason to because remember, this is a shared variable, right?
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=177)** It's shared between the class and its subclasses.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=180)** So I'll just use self and increment that by one and then return the object.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=186)** That's part one of the challenge.
>
> **[3:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=187)** Before we go on, let's just try that out.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=189)** Let's come down here to the bottom and you can see I had a new bicycle.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=194)** I've given values to a couple of different properties.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=196)** And then I'm going to ask for the instance count of the a Bicycle and the instance count of the Unicycle.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=202)** Then I'm going to call Bicycle::create() and Unicycle::create() and I'm going to check those values again.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=208)** Now notice up here, I'm also creating an instance, right?
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=210)** So by the time I get down here I've got three instances that have been created, two bicycles and one unicycle.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=217)** Let's go and try that out.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=218)** Let's take a look, come over here.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=222)** And let's make challenge_04.php.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=226)** The bicycle count is zero at first and then it becomes two.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=230)** And the unicycle count is exactly the same.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=233)** Again that's because this is a shared property.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=236)** So those values are of course going to be the same.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=239)** Notice that new bicycle here did not increment anything, right?
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=243)** Create has the special code in it which both instantiates and does the incrementation.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=249)** Here I'm just creating the new instance and nothing else.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=252)** That's why we get back two and not three.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=256)** The second part of the challenge was to create a constant four categories.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=260)** So you can see I have it in all capital letters, no dollar sign in front of it.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=263)** I'm using that keyword const to make sure that it's a constant.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=267)** And I'm also providing a visibility modifier of public because I'm on PHP 7.1 or later.
>
> **[4:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=272)** Otherwise it would just be assumed to be public and we wouldn't be able to set that.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=276)** And then I've assigned it an array with the different values that the categories could have.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=280)** Now, the idea here is that we might want to use this category list.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=284)** Maybe we might have a select option so that we could choose different categories.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=288)** Maybe a user could choose different categories that they want to browse, or as an administrator we could assign different category values to each bicycle.
>
> **[4:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=297)** So I've also added another property up here called category.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=301)** This is not a static property.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=303)** Remember, this is working with a particular instance and I threw it in there just to make sure that you understand the difference between instance properties and the class properties.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=312)** So each instance of a bicycle will have its own category.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=315)** We might have one that's a mountain bike and another one that's a cruiser bike.
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=320)** Now that we have those defined, let's try them out.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=322)** We'll come down here to the bottom.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=323)** You can see I'm just going to take the different categories, Bicycle::CATEGORIES is how I refer to that class constant.
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=330)** And I'm just going to join them together with a comma and a space.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=333)** Then I'm going to take this particular instance and I'm going to tell its property that it should be assigned the first value, the zero indexed value inside categories and then we'll just check what that is.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=345)** Let's save that and try that out real quick.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=347)** Come back over here, just reload the page.
>
> **[5:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=349)** Here's the list of categories commas separating them.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=352)** And then the particular category we've chosen for that instance is road.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=357)** Okay, so that's part two of the assignment.
>
> **[5:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=359)** Part three was to make wheels into a static property and to make wheel_details into a static method.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=368)** So each of those just get the static keyword added in front of them.
>
> **[6:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=371)** And of course we'll need to come down to the subclass and make sure that we do it here as well.
>
> **[6:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=376)** Now, as we saw, when we were talking about static bindings versus late static bindings, we also need to make another change inside wheel_details.
>
> **[6:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=386)** We can see that if we go back to challenge_03 and let's go to wheel_details here and you can see how it looked before, right.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=394)** Now we can change that and we could change it so that this said self.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=400)** But then, we'd be referring to the class here would be Bicycle, right?
>
> **[6:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=406)** It's just a placeholder for Bicycle.
>
> **[6:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=408)** And that's because PHP binds that value to the class early.
>
> **[6:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=412)** If we wanted to use late static bindings, we need to use static.
>
> **[6:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=416)** In that way if we're calling wheel_details from the Unicycle class, static will be defined at runtime.
>
> **[7:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=422)** So it will be equal to Unicycle if it's called on Unicycle and that'll give us the right result.
>
> **[7:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=428)** So we're basically just implementing the same thing we talked about with late static bindings.
>
> **[7:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=433)** Just come back over here and reload our page and sure enough, you can see Bicycle it has two wheels, Unicycle, it has one wheel.
>
> **[7:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=440)** The very last part of our challenge was an extra credit assignment.
>
> **[7:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=444)** And I'm not going to show you a demonstration of that because it really is up to you to come up with something, it's up to your own creativity.
>
> **[7:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=450)** It doesn't have to match what I've done.
>
> **[7:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-static-references-14627442?u=76281980&t=453)** If you need examples for how that works, look back at the movie for refer to the parent class where I give you an example of each of those different design and patterns where we use parent before the scope resolution operator to refer to the parent class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5)
> **CLI Commands:** make (9), php (5), find (2)
> **Code Identifiers:** wheel_details (4), get_class (2), get_called_class (2), instance_count (1)
> **Cross-References:** we talked about (2), as we saw (1), go back to (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **File Paths:** challenge_04.php (2), challenge_03.php (1)
> **Env Vars:** php (2), categories (1)
> **Versions:** php 7 (1)


### 6. Magic Methods

[↑ Back to Table of Contents](#table-of-contents)

#### Constructor method
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=0)** - [Instructor] In this chapter, we're going to be talking about a number of different magic methods that are built into PHP.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=6)** We'll begin by talking about what's probably the most important and most commonly used, which is the constructor method.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=12)** Magic methods are really not that magic.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=14)** What they are are methods on PHP objects that get called automatically in some circumstances.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=20)** And because it's automatic, it seems like it's magic.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=23)** The ones that we're going to be focused on are construct, destruct and clone, but there are probably about a half a dozen more that are on the [php.net](https://php.net) website if you want to learn about them.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=34)** A lot of them are more advanced or rarely used.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=37)** We've actually bumped into a couple of these already when we talked about the problems that overloading causes us.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=42)** PHP has magic methods for when we try to get or set a property that doesn't exist.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=49)** The problem we had was that that magic method set by default is adding the property and setting its value for us.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=56)** Each one of these magic method names has a double underscore in front of it.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=60)** That can be a little hard to see, but it's underscore underscore and then the name of the method.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=64)** And that's how we know that it's one of these magic methods is that double underscore.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=68)** The way that we use a magic method is simply to define it as a method inside our class.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=73)** Here you can see I have a method for underscore underscore construct.
>
> **[1:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=77)** Magic methods must always be marked public.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=80)** So you can see I have the public visibility modifier in front of it.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=84)** Then inside the method, we can put whatever code we want.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=88)** This code is calling another class and telling its static method log to log something to a log file.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=94)** And then you can see that it's setting the property color equal to the string blue.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=99)** Now whenever we create a new instance, this construct method will be automatically called.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=105)** So at the bottom, you can see when I create a new instance of the product, the shirt automatically has that value of blue.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=111)** It works like having a default value, but it's not a default value, it's being set up in this construct method.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=118)** It's super useful.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=119)** If you did the challenge assignment at the end of the last chapter, you wrote a static method called create, which created an instance and then incremented a static property for the instance count.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=131)** It worked a bit like an instance factory that allowed us to do other work besides just creating the instance.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=137)** You can see here in this side-by-side comparison how it compares to construct.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=141)** Construct allows us to add this other work directly to the new call.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=146)** And with construct, there's no need to return a value like we did in create.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=150)** What's returned is always going to be an instance of an object.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=154)** So when we call new in PHP, what's going on is the same thing is what our create method does.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=159)** First, it creates a new instance of the called class.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=162)** Second, it executes any custom code that we have in the construct method.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=167)** And third, it returns the instance.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=169)** So you can think of a construct method as a place to hold code that should be performed in step two.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=174)** After an instance is created, but before it's returned.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=177)** Let's try it out.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=178)** Inside the exercise files, I've already created a file called constructors.php and you can find it there.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=184)** It just has a class for sofa and then I have a class for couch and loveseat that extends sofa and I've just varied the number of default seats and arms that are going to be set there.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=196)** And then, I've also added this public static instance count property and initialized it to zero.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=200)** So for beginning with, that's all it does.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=202)** It just outputs back the values for creating a new sofa and outputting its seat in arms, the couch, its seats and arms, and the loveseat and it seats and arms, and then finally, we'll just get a count of how many have been created.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=214)** So let's save this, come back over here to our browser and you can see, I have already loaded in this page.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=220)** I'll just reload it.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=221)** The sofa has three seats and two arms.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=223)** The couch has three seats and no arms.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=225)** Loveseat has two seats and two arms.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=227)** And the instance count is zero.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=228)** And the reason the count is zero is because I didn't do anything that would increment that.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=233)** So now let's add that construct method.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=236)** So right here, I'll make a public function.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=241)** Must be public.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=242)** If we don't put anything in front of it, of course, it would be public by default, but it's a good habit to always put it there.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=247)** Construct.
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=249)** And then, what do we want it to do inside of here?
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=251)** We want to do self colon colon dollar sign instance underscore count plus plus.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=258)** Alright, let's save it.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=259)** And now let's go back and let's reload our page.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=263)** Instance count is equal to three.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=265)** See how that works.
>
> **[4:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=267)** Every time I called new, it created a new instance of the object.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=271)** Then it called the construct magic method and then it returned the object to me so I could store it inside this variable sofa.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-method-14622579?u=76281980&t=278)** And notice also that it was inherited as we would expect into each of our subclasses and they added one to the count as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), product (1)
> **CLI Commands:** php (6), find (1), make (1)
> **Env Vars:** php (4)
> **File Paths:** constructors.php (1)
> **URLs:** [php.net](https://php.net) (1)
> **Cross-References:** we talked about (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### Constructor arguments
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=0)** - [Instructor] Let's continue our discussion of constructor methods by talking about their arguments.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=5)** Constructor methods are just methods and methods are really just functions inside an object.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=10)** So it makes sense that we are also able to pass in arguments to them just like we could to any PHP function.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=16)** You can see here after the construct method name I have parentheses and I have two arguments, one for name and one for color.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=23)** Now when I create a new object, in order to pass in those arguments, you just add the parentheses after the class name and it will send in your arguments.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=32)** So when I create a new instance of product, I've got parentheses and two values are being passed in to those arguments, one for t-shirt and one for blue.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=40)** Now the result is that my shirt colors still blue but it's not hard coded as a default value.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=44)** And it's not hard coded in my constructor method.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=46)** I'm passing it in as an argument when I create an instance of this object.
>
> **[0:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=51)** It's common that you want to initialize an object with certain properties when you first create it.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=57)** One big advantage of doing it this way is I can pass in values to properties that are otherwise private.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=64)** I don't have to create a new instance and then set the values from outside the class.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=68)** I can pass it into the constructor method and it can set them from inside the class where it has access to private properties.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=75)** Now all the normal rules about function arguments apply.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=78)** For example, if I have two arguments listed like this, then I must provide exactly two values, not fewer or more.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=86)** We can of course set default values for each argument like this but there's still a few drawbacks to listing out each and every argument.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=94)** Even with these default values, we aren't able to pass in the color argument without putting some kind of a name argument first.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=101)** The order of the arguments can be hard to remember too.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=104)** And the argument list can become very long, especially for an object where we may be initializing a lot of different properties.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=111)** This code can also be hard to read because when we pass in the values, that's unlabeled data and it can be difficult to tell what argument it's referring to.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=120)** Here it may seem obvious that I'm passing in the name and the color, but what if I had several values that were just numbers?
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=125)** It becomes harder to know which is which and if I've got them in the right order.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=130)** A common technique is to make arguments into a single array so that it's less sensitive to these kinds of things.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=137)** Here I'm also using the null coalescing operator added in PHP seven, so that it gracefully defaults to the a value that I've got after the double question mark if an array key is missing.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=149)** The same thing is checking to see if the key is set before trying to use it.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=153)** Doing it this way has several advantages.
>
> **[2:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=155)** The argument list is short.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=157)** The data is clearly labeled so that I know what each one of those values belongs to.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=162)** The order of the values in the array doesn't matter.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=166)** And the presence or absence of data in the array doesn't matter either.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=170)** Now this technique of using an array instead of a list of arguments can be applied to all functions in PHP, but is especially useful when working with objects and the construct method.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=181)** Let's continue working with our constructor's file that we were working with in the last movie.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=186)** And let's start out by just adding a couple of arguments here, one for seats and one for arms.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=193)** And what I'm going to do here is after I've incremented the instance count, let's set this seats equal to whatever value is passed in for seats and this arms going to equal to whatever value is passed in for arms.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=207)** Notice that we can tell the difference between the argument local variable that we're using inside the function and the object property which begins with this and the arrow notation before it.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=218)** Now that I have that set, I have the ability to pass in values here.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=223)** So I have sofa and then I have a set of parentheses after it where I can pass in two values.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=228)** So for the first one, let's put in 3, 2.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=231)** For the couch we'll put in 3, 1.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=235)** We'll say this couch actually has one arm on it.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=237)** And for the love seat, we're going to pass in two seats and two arms.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=243)** Notice already it's a little tricky to remember which order these are in.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=247)** It's very easy to reverse these and accidentally put one before the three.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=251)** In order to know which is which, we have to refer back to our method to check the order of the arguments.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=256)** So let's save this and let's go back over here and let's try it.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=259)** Now I've changed it so the couch should have one arm.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=262)** Let's reload the page and sure enough, it has one arm on the couch now.
>
> **[4:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=266)** Everything else stays the same as the default values.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=270)** Now you can keep these default values in there if you want, or you can remove them.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=274)** It's up to you.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=275)** But notice that I cannot remove this value here.
>
> **[4:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=279)** I cannot say, well, a love seat.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=281)** Let's just take this value away.
>
> **[4:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=283)** Over here, we reload the page.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=286)** I get an error because the argument count is wrong, right?
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=289)** I have to have arms.
>
> **[4:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=290)** And even if I put in, well by default let's make the arms two and let's make the seats equal to three, right?
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=295)** Now it won't complain anymore.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=301)** If I do this, reload our page.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=305)** Now it works fine, but what is this number here?
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=308)** Right?
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=309)** What if I wanted to pass in only a change to the number of arms and I didn't want to change this?
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=314)** I could pass in null over here and reload it.
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=318)** But that's not what I wanted, right?
>
> **[5:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=320)** I wanted the default value that it already had.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=322)** So you can see why that that's not ideal.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=326)** A better solution is to implement that pattern that we just talked about where instead of passing in individual arguments, we're going to pass in an array of arguments.
>
> **[5:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=335)** There'll be no empty array if nothing is set.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=338)** And then we'll check here inside args to see if the seats key is then we'll use it.
>
> **[5:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=347)** And we'll use that null coalescing operator from PHP seven and default to null if it's not.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=353)** You could set it to something else as a default if you wanted.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=356)** You could put this equal to three as a default.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=358)** I'm just going to make it null.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=360)** And I'm just going to copy that so I don't have to retype it all.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=365)** But this one, the key is going to be arms.
>
> **[6:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=368)** Now I can substitute this out.
>
> **[6:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=371)** And instead I'll pass in an array where it says seats are going to be three and arms are going to be two.
>
> **[6:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=383)** I'll just copy that array so I can paste it in here for a couch and for love seat.
>
> **[6:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=391)** Now I can easily remove some of these if I want.
>
> **[6:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=394)** Let's say that the couch, this is a couch that has four seats in it.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=399)** Sort of an oddball couch.
>
> **[6:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=400)** And let's say that our love seat is only going to have no arms, normally defaults to having two, 'cause it inherits that.
>
> **[6:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=407)** So let's change that.
>
> **[6:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=408)** Let's come back over and reload our page.
>
> **[6:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=411)** Oops, I have an error here.
>
> **[6:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=412)** Line 26.
>
> **[6:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=413)** Let's go fix that error.
>
> **[6:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=415)** Ah, I put equals and that needed to be an arrow notation.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=420)** There we go.
>
> **[7:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=421)** Let's try it again.
>
> **[7:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=423)** There we go.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=425)** Now arms and seats are being set to null by default.
>
> **[7:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=429)** So probably what I want to do is come over and set those to some default value, which is like this.
>
> **[7:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=434)** It will just use whatever value it already has.
>
> **[7:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=437)** Let's come back and save that.
>
> **[7:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=439)** Now that's going to be arms and we reload the page.
>
> **[7:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=443)** And now those defaults are there.
>
> **[7:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=445)** So use the new value if you have it, otherwise fall back to the default.
>
> **[7:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=450)** So the main points I want you to get out of this are first that you can pass in arguments to the constructor and that the way you do that is putting parentheses after the class name.
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/constructor-arguments-14626496?u=76281980&t=459)** And the last point is that it may be beneficial for you to look at the this arguments as an array design pattern instead of trying to list out all the individual arguments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), data (3), product (1)
> **CLI Commands:** php (4), make (4)
> **Env Vars:** php (4)
> **Analogies:** just like (1), for example (1)
> **Best Practices:** the key is (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Destructor method
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=0)** - [Instructor] Now that we've learned about the constructor method, let's talk about its companion, the destructor method.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=5)** The way that we define the destructor method is similar to what we did with the constructor method.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=10)** Inside our class, we define a new method whose name is __destruct.
>
> **[0:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=16)** We want to make sure that that's a public method so we mark it with public at the beginning.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=21)** And unlike construct, destruct takes no argument.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=25)** Inside the construct method definition, you can put any code that you want to be called whenever an instance is destroyed.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=32)** This is most useful for performing logging or other cleanup actions.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=37)** It can be used together with construct as a set of set up and tear down methods, although in truth, you're going to use construct much more frequently than you will destruct.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=46)** And the reason why is just the nature of how we use objects in PHP.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=50)** Most of the time we instantiate a new object, we work with it throughout the script and then at the end we return the result back to the user and we don't worry about what happens to those objects.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=60)** And we just let PHP deal with the leftover objects on its own.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=64)** So the destructor method is going to be called whenever the last reference to an instance is removed.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=70)** So what it means by reference is the variable that we create that points to the new instance that we've created.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=76)** We create an instance, we assign it to the variable, that's the reference to the instance.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=81)** So if we remove that reference, then it will remove the object.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=84)** PHP will say, well, nothing refers to this object anymore, so it's no good.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=88)** I can throw it away and it'll call that destruct method.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=92)** So there are two ways that we can do that.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=95)** The first is that we can unset the reference.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=97)** So we call unset on the reference that points to some instance.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=101)** Now there's nothing referring to it anymore, so PHP throws it away.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=105)** And the other way to do it is when the PHP script exits.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=108)** We'll talk more about that in a moment.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=110)** First, let's look at unset.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=112)** Here I had the exact same definition for the class product.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=116)** You'll see that I'm instantiating a new product and assigning it to the variable shirt.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=120)** Now shirt is a reference to that instance.
>
> **[2:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=123)** I can then ask for the instance count static property and it returns one because I incremented the value.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=130)** Then I call unset on that variable.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=132)** Now the variable's not set to anything anymore.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=134)** So that instance has been orphaned.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=136)** Nothing refers to that instance anymore, PHP sees it as trash, it calls the destruct method on it and gets rid of it.
>
> **[2:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=143)** So now, instance count has been decremented because that destruct method was called and it hit that piece of code that decremented the number.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=151)** Now as I mentioned, it also takes place whenever the script exits and we have to be very careful about that because that can create some unintended consequences.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=160)** Let's do public function__destruct.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=164)** There's no arguments and inside of here, before we do anything else, let's just do echo and let's just say, bye.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=172)** All right, so that's all it's going to do.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=174)** Whenever an instance is destroyed, we should see the word bye.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=177)** So let's go back over to our page and let's load it up and let's hit reload.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=183)** Look at that.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=183)** Bye, bye, bye, three times.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=186)** Why is that?
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=186)** Well, I have three different instances, one of sofa, one of couch and one of loveseat.
>
> **[3:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=191)** Come down here, you can see I have new three times.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=194)** So I created three instances.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=196)** I didn't intentionally unset any of them.
>
> **[3:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=197)** Instead I let the script finish running and PHP unset them for me.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=202)** So be careful about that.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=203)** It happens automatically.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=204)** Destruct gets called at the end of your PHP script.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=208)** I could also do it on purpose here.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=210)** Let's come down here before we get to loveseat and let's do unset sofa, right?
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=216)** We don't need that instance anymore when we get down here.
>
> **[3:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=218)** I'll save it, let's come back, reload the page.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=221)** So now bye appears in front of loveseat.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=223)** It happens right when I unset it.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=225)** These other two are being destroyed when the script ends.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=228)** Okay, so now that we understand when it gets called, now let's actually put in something useful here.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=233)** Let's just take it and decrement the count.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=235)** Instead of doing any kind of echoing, we're just going to say the instance_count--.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=241)** So now let's save it, let's go back and let's reload the page.
>
> **[4:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=245)** Now my instance count is two.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=246)** Why is that?
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=248)** Well, if we come down here and look, it unsets one of them here, then it echoes the instance count and then the other two get unset by PHP automatically at the end.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=258)** While I do think it's important for everyone to understand what the destructor method is and what it does and how it works, the reality is you're going to use it in your projects very rarely.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/destructor-method-14620650?u=76281980&t=268)** I think you'll find it's most useful when you want to perform logging and cleanup operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), product (2), hit (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** php (9), make (1), find (1)
> **Env Vars:** php (9)
> **Definitions:** refers to (2), is a  (1)
> **Code Identifiers:** function__destruct (1), instance_count (1)
> **Analogies:** similar to (1)
> **Warnings:** be careful (1)
> **Prerequisites:** set up (1)

#### Clone method
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=0)** - [Tutor] In this movie, we're going to talk about the clone magic method.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=4)** Before we learn about the magic method clone, we first should learn a keyword, which is also clone.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=9)** And it works a lot like the way we use new.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=12)** In this example, you can see that I'm creating a new instance of the product class and I'm assigning that instance to the variable shirt1.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=19)** Then I'm going to set its property color equal to blue.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=23)** Now, I'm calling clone on shirt1.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=26)** And it's going to create a duplicate of that instance.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=29)** It's a new instance, it's a complete duplicate.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=32)** And it's going to duplicate all the property values that are in the original one.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=36)** I'm going to sign that to shirt2.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=38)** Now, to begin with, they're perfect duplicates.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=40)** I haven't changed anything.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=41)** So if I ask shirt1 for its color, it's blue.
>
> **[0:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=43)** And if I ask shirt2 for its color, it's also blue.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=46)** If I change the color for shirt2, though, it changes to green while shirt1 stays blue because they are two separate instances.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=54)** It's exactly like if I created a brand new instance and then I set all of its properties to be exactly the same as the first instance.
>
> **[1:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=62)** Clone just does it for us in one simple step.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=64)** It can be really handy.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=66)** So now that we know about that clone keyword, now we can talk about the clone magic method.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=71)** Because where construct is called magically whenever we call new, the clone magic method is called whenever we call clone.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=81)** The way we define the clone magic method is similar to what we had for construct and destruct.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=86)** You're going to define the method inside your class.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=89)** You want to use a double underscore before the name.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=91)** And you must also set the visibility of the method to be public.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=95)** Unlike construct, clone won't take any arguments.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=99)** It's just simply going to take the existing instance and clone that, but it's going to run the code that we have inside the method first.
>
> **[1:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=108)** Now, cloning does not call the constructor method, just clone.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=114)** So they're two separate parallel structures.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=116)** One is when we're creating a new instance, one is when we're duplicating an instance.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=121)** So in our code where we're adding and subtracting from the property instance count, we must consider that an instance could be created by cloning.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=131)** If we didn't consider it, a new instance would be created, but the construct method would not be called and the count would not increase by one.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=138)** So here you can see that I've added a line of code so that it increments that value even when clone is called.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=145)** So it doesn't matter if I'm creating a new instance or I'm cloning an instance, I'm going to add one to the instance count.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=151)** Besides keeping track of the instance count, the other way that clone is most useful is to think about the way that an object should be copied.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=158)** When we're copying an instance, do we want to do some other housekeeping before we're done with that copy?
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=165)** In the clone method, we have the ability to modify the instance or to execute additional behaviors while it's being cloned.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=171)** So let's try this out in our sandbox.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=173)** And let's do that by creating a new file.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=176)** And I'm going to call this cloning.php.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=180)** And in here, inside our PHP tags, I'm going to make a new class for beverage.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=188)** And beverage is just going to have one property.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=190)** Going to be public and it's going to be name.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=194)** And let's set function __construct.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=199)** We know how to do that.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=201)** And we'll just echo back new beverage was created, okay?
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=208)** So we're just going to get that information.
>
> **[3:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=209)** I'm going to copy that now.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=212)** And I'm going to make another version of it.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=213)** Oops, I misspelled that, construct.
>
> **[3:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=216)** And then I'm going to change this one to be clone.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=219)** And instead of new beverage I'm going to make it existing beverage was copied, okay?
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=226)** So new beverage was created, existing beverage was copied.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=229)** That's going to tell me which one is being called.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=231)** So now, let's try it so we see each one.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=233)** So let's do a = new beverage.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=239)** Now, let's set a->name = "coffee".
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=243)** This will help us tell different instances apart if they have different names.
>
> **[4:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=247)** And let's echo back that name; $a->name and let's put a br tag at the end.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=258)** So let's just try that much so far.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=260)** Let's come back over here.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=262)** And instead of constructors, cloning.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=265)** So new beverage was created and coffee, right?
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=268)** We haven't called clone yet.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=269)** That's exactly what we would expect.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=271)** So now, let's clone something.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=273)** We're going to clone $a, right?
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=277)** I'm passing in the instance.
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=278)** I'm not passing in the class name, it's the instance.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=280)** I want to copy this instance and I want to copy its properties.
>
> **[4:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=285)** So let's just copy this line, come down here, and let's do echo name for each one.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=293)** We're going to look at what the name is for a and what the name is for b.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=296)** And I'll just also add a line here with an hr tag so we can just kind of keep 'em all separate.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=302)** Let's come over here and let's reload our page.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=304)** Existing beverage was copied.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=307)** See what happens? It gets cloned.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=309)** We called that magic method.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=311)** So that's when existing beverage get copied pops up.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=313)** And now, it tells us the values are both coffee because it copied the value of the property for name at the same time, but they are in fact different values.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=323)** B->name going to be equal to, let's make it tea.
>
> **[5:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=329)** And then we'll copy these, put them down here.
>
> **[5:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=332)** Let's also copy that hr tag.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=334)** Just going to keep 'em all separate.
>
> **[5:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=337)** Let's reload our page.
>
> **[5:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=339)** So we created, here's the first one created, it's coffee.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=342)** We make a duplicate.
>
> **[5:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=344)** Now, we have coffee and coffee.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=346)** And then I can change the value of the second one to be tea, but it has no effect on the first one because it is a separate instance.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=353)** Notice, when I cloned it, it did not call new beverage was created.
>
> **[5:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=358)** It only called the code that was inside clone.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=361)** So it depends which one we call.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=363)** If we're calling new, we get the construct method.
>
> **[6:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/clone-method-14620651?u=76281980&t=365)** If we call clone, we get the clone method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), hr (2), product (1), parallel (1)
> **CLI Commands:** make (5), php (2)
> **Definitions:** is called (3), is a  (1)
> **File Paths:** cloning.php (1)
> **Env Vars:** php (1)
> **Analogies:** similar to (1)
> **Speakers:** - [tutor] (1)

#### Assignment by reference
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=0)** - [Instructor] Now that we've learned about cloning, we should pause and take a moment to talk about assignment by reference and a key difference that exists in object-oriented programming.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=8)** Normally in PHP, values are copied whenever we make an assignment.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=13)** So we have a variable a, we set it equal to one, and we have another variable b, we set it equal to a.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=18)** We would expect b to be equal to one.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=20)** And if we change the value of a to something else, like two, we would not expect the value of b to change.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=28)** It should still be equal to the value one.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=30)** That is normal assignment.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=32)** PHP also offers us the ability to do assignment by reference.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=36)** We would set a equal to one, but now when we're assigning a to b, we can add an ampersand in front of the variable a or you can do it right after the equal sign.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=46)** The effect of this is to tell PHP don't assign the value to b, assign a reference to the same thing that a points to.
>
> **[0:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=55)** So now a and b point to the same thing, not the same value, but actually the same piece of memory inside PHP.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=63)** So if we change the value of that memory to be something different, then b changes right along with it because a and b point to the same thing.
>
> **[1:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=71)** It's a reference.
>
> **[1:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=73)** The reason why that matters is because in object-oriented programming, objects are always assigned by reference.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=80)** The reason why this is true is because variables aren't actually pointing at the objects themselves, they point at an object identifier.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=88)** It's like a long number and PHP sees that and it recognizes that that object identifier points to some object in memory.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=95)** It's a reference already.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=97)** So when we make an assignment, it's copying that identifier value.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=102)** That identifier gets copied and now it points to the same object in memory.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=107)** So even though it's not actually assigning it by reference, it certainly feels that way.
>
> **[1:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=111)** Let me show you what I mean.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=113)** Let's say we have a new instance of product and we assign it to the variable a.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=117)** We change the property name to be coffee, then if we assign b to be equal to a and we change a's name to be tea, we would expect b's name to change because a and b share the same object identifier.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=133)** They point to the same object in PHP's memory.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=137)** So it feels like the assignment by reference we saw in the second example before.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=142)** Changes made to a also take effect on b.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=146)** If we don't want this behavior, then that's where we use clone.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=150)** By cloning an object, we're making a duplicate of it.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=153)** We're creating an entirely different object in PHP's memory.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=157)** We're getting a new object identifier and that's what b holds onto.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=161)** So now a and b both have different identifiers that point to two different objects in memory.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=166)** So changes I make to a do not have any effect on b.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=171)** We can prove this to ourselves in our cloning.php file.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=174)** Let's just jump down to the very bottom here and I'm going to copy this hr tag.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=179)** And the first thing I want to do is I'm going to create a variable c and we're going to make it equal to b.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=185)** So here, I was cloning a in order to get b.
>
> **[3:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=188)** Here, I'm just using equal sign and doing an assignment.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=192)** So now let's change c name to be equal to orange juice.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=201)** Let's copy these echo lines here and we'll copy this one one more time because we're going to look at both values for a, b and c to see what they all are.
>
> **[3:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=211)** Now here, this was a clone.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=214)** a to b was a clone.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=215)** So changes I made should not have an effect whereas here, because it's assignment by reference, changes I make should have an effect.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=223)** Let's take a look.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=224)** Let's move back over to this page.
>
> **[3:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=225)** Let's reload it.
>
> **[3:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=227)** And look at that.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=228)** At the end, a is equal to coffee still, b is equal to orange juice and c is equal to orange juice.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=235)** That means that here when I made this change to set c equal to orange juice, it changed b at the same time because they refer to the same object.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=242)** So if we could actually see the object IDs, a would have one object ID and b and c would share the same object ID.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=250)** It's an important concept to understand and it goes hand-in-hand with cloning.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=254)** It's also important for when we try to compare objects.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/assignment-by-reference-14626498?u=76281980&t=257)** We'll look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), product (1), hr (1), next (1)
> **CLI Commands:** php (8), make (5)
> **Env Vars:** php (7)
> **File Paths:** cloning.php (1)
> **Definitions:** means that (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Compare objects
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=1)** - [Instructor] In this movie, we'll learn how PHP compares objects.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=5)** There are two ways that we can perform comparisons.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=8)** The first is using the simple comparison operator, equals equals.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=12)** That's what you're probably used to most of the time.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=14)** There's also a stricter version of that, which is the identity operator, and that's a triple equal sign.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=19)** It goes just a little bit further and makes sure that things don't just appear to be the same, but they are actually the same.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=26)** Let me show you how that plays out when we're working with objects.
>
> **[0:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=29)** So with objects, the comparison operator will compare the objects properties.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=35)** So if the class is the same and the property values are the same, then they will be considered equal.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=41)** So if we have variables that reference the exact same instance, or if they reference two different instances, but which both have matching properties so that they seem to be identical, then it'll return true.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=53)** If the objects are of a different class, or they have different properties, then it's going to return false because they're not the same.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=59)** It just basically does a simple class and property comparison.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=64)** The identity operator, that triple equals, is going to check more than properties.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=68)** It returns true only if they both refer to the exact same object.
>
> **[1:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=74)** If they're two separate instances that just happen to have the same property values, it's not going to be considered equal.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=80)** From what we learned about assignment reference in the last movie, it makes sense that both variables must have the same object identifier and point to the same piece of memory in PHP.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=91)** Let's examine this further by looking at a code example.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=94)** Inside our sandbox, I've added a new file called compare_objects.php and I put a very simple class in here called box and it has one property which is name and it's going to default to box.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=106)** So I just want to have something super simple so I could create it and reference it and clone it all different things.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=112)** First, I'm going to create a new instance of the box and I'm going to assign that to the variable box.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=116)** Now I'm going to just make a reference to that box, right?
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=119)** This is assignment by reference.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=121)** So now, box_reference is going to point to the same thing as box.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=125)** We saw that in the last movie.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=126)** They point to the same thing in memory 'cause they have the same object identifier.
>
> **[2:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=131)** Next, I'm going to try cloning the box.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=133)** So I have something called box_clone here.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=136)** This is going to be different.
>
> **[2:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=137)** It's a different piece of memory, has a different identifier for that object.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=141)** And then I'm going to try another clone where I modify one of the properties.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=145)** So now the properties are different as well.
>
> **[2:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=147)** And last of all, let's just make a new instance of the box to compare against.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=151)** So let's run a series of checks against these.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=154)** The first one is going to be the simple comparison operator, the double equals.
>
> **[2:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=158)** And so, we're going to compare box against all four of these, box_reference, box_clone, box_modified and another box.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=164)** So each one of those we're going to compare against it and will return true and will echo back a T if this returns true or an F if it returns false.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=173)** So we'll be able to know whether or not it considers them to be equal.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=176)** And then we'll do the same thing down here using the triple equals.
>
> **[3:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=180)** That's a stricter check.
>
> **[3:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=181)** It's going to check if they reference the same object.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=184)** Alright, let's try it out.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=185)** Let's save this file.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=186)** Let's come back over here and let's do compare objects.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=192)** And sure enough, when we use the double equals, three out of the four are considered to be equal.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=198)** The one that's not is the one where we modified one of the properties.
>
> **[3:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=202)** 'Cause double equals only cares that they're of the same class and it has the same values for its properties.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=208)** In the case of the triple equals, though, notice that three out of the four came back false.
>
> **[3:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=213)** The only one that is considered true is reference.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=217)** Right, the one where we actually just did an equal sign that points to the same thing, the same piece of memory.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=223)** Box_reference and box both hold the same object identifier and point to the same piece of memory, so the triple equal says, yes, these are the same.
>
> **[3:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=231)** They're exactly the same.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=234)** If we make a change to one, we're making a change to the other.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/compare-objects-14626503?u=76281980&t=236)** In the case of every other one, even though they look the same, even though we duplicated them and they had the same default values, for all the other ones, including the one where we cloned it, they're not going to be considered equal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), next (1)
> **CLI Commands:** php (3), make (3)
> **Code Identifiers:** box_reference (2), box_clone (2), compare_objects (1), box_modified (1)
> **Env Vars:** php (2)
> **Cross-References:** in the last (2)
> **File Paths:** compare_objects.php (1)
> **Speakers:** - [instructor] (1)

#### Autoload undefined classes
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=1)** - [Instructor] In this movie we'll learn how to get PHP to automatically load classes which are undefined.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=7)** The way we're going to do that with another magic method called autoload, __autoload.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=13)** Now, this is a little different from our other magic methods, because we define those inside our classes.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=18)** Autoload is going to go outside of the class.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=21)** This is a function that's going to be called automatically, whenever PHP encounters the name of a class that it doesn't know about.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=28)** Before it gives up and throws an error, it's going to call autoload, that will provide us an opportunity to locate the class definition for it.
>
> **[0:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=37)** In PHP 4 and 5, we simply defined this magic method, function __autoload, and then one argument, The argument is the class name that PHP is currently looking for.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=49)** So here I'm just echoing back something saying the definition for the class is missing.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=53)** So if we have PHP code like this and it encounters this class Pet as it trying to create a new instance of Pet, and it says, wait a minute, you haven't loaded that class yet, the next thing it's going to do is call this autoload function, to see if the autoload function can help it out.
>
> **[1:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=69)** If it can't, then it'll go ahead and throw an error, but it does give us a chance to look for that definition in our file system.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=76)** Now we don't do it this way anymore and the reason why is because it's become more common with PHP to start loading in libraries of code that other developers have created, and the thing is their code might be using autoload as well, and this is not a function inside a class, this is a root level function, and PHP doesn't like us to redefine root level functions.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=99)** So what do we do?
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=101)** The solution is that we write a function that we want to call for autoloading and then we register that with PHP.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=110)** It basically creates a queue of different autoloads, so it can try and load my autoload and then if I have four libraries of code that are all using autoload, they all have the opportunity to provide a path to look for the file as well, and they can all live harmoniously.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=125)** So here you can see I have the exact same thing for my autoload definition, but instead of __autoload, I've changed the name to be my_autoload.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=134)** Now, once I've defined my function, I can just pass in that function name as a string to another function called spl_autoload_register.
>
> **[2:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=144)** SPL stands for standard public library.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=146)** So I'm essentially just saying, hey PHP if you can't find this file, here's my ideas on where you might find it.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=153)** Other libraries that I've loaded might have their ideas on where you find it as well, 'cause we don't know where in the code we are looking for this from but I get my chance to submit my contributions through my autoload.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=165)** Now of course, you wouldn't just want to echo back a simple string, we want to actually look for the file.
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=169)** The way that I recommend that you do that is by using an include line inside your autoload function.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=176)** Here you can see I'm looking at a directory called classes and I'm looking for that string as part of the file name.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=183)** So if I'm looking for Pet, then I would expect it to be pet.class.php inside the classes directory.
>
> **[3:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=191)** You'll remember back at the very beginning, I told you that it's a good practice to put a single class definition into a single file, and this is part of why, that way we'll have a discreet file, that's dedicated only to each one of our classes, and autoload will be able to load that code when it needs to.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=208)** The line that's right above that include with preg_match in it, that's just checking to make sure the class name only contains legal characters, we don't want to accidentally end up with something malicious in that string, so this is a good security check.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=221)** We're basically saying check the string from start to finish and make sure it only contains word characters, capital letters A to Z, lowercase letters a to z, 0 through 9 or underscore.
>
> **[3:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=233)** If it only contains those, then it's legit and we can try and look for it in the file system.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=239)** There are two ways that you can use autoload.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=242)** The first, is that you can try and load up the files that you need all the time, and you can just let autoload be a safety net.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=248)** If you happen to forget, then you don't have to worry, you're not going to get an error, autoload will take care of it for you.
>
> **[4:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=254)** The other way to use it is to use it to conserve memory.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=258)** Let's imagine for a moment that I had 50 to different classes in that class file.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=262)** Now I could tell my code to always load up all 50 classes and have them all ready and waiting.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=268)** But what if the particular PHP script that's running is only using two of those classes?
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=273)** I just loaded 48 classes that I didn't need.
>
> **[4:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=276)** Autoload can instead say, you know what?
>
> **[4:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=278)** Only load the classes as needed.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=281)** Which one of these approaches you take will depend on your particular code.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=284)** Let's try it out.
>
> **[4:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=286)** Inside our project, inside the sandbox, let's start by creating a new folder, and in that folder, we're going to call it classes, we're going to add a couple files to it.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=298)** The first file I'm going to call bicycle singular .class.php, and I'll open this up so we can see it, and then add another file in here.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=311)** This one's going to be called unicycle.class.php, it's kind of a convention to put class right before the .php, when we're working with a class.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=322)** In order to get definitions for those, let's go back to challenge_04 and I'm just going to grab these class definitions that we had.
>
> **[5:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=328)** So for bicycle, I'll come in here and paste it in, and let's go back to challenge_04 and grab unicycle, and we'll come down here and paste that in.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=340)** Oops, I forgot my PHP tags.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=345)** I'll save that.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=346)** Let's go back to bicycle and do the same thing, I need PHP tag down here at the bottom, and then I'll go up to the top and add another one.
>
> **[5:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=353)** Okay, so now I have my class definitions.
>
> **[5:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=356)** I have bicycle, all by itself is a class definition in the bicycle file, and unicycle all by itself in its own file, and both of those are in this classes directory.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=364)** Now let's create a new file in our sandbox and let's call this one autoload.php.
>
> **[6:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=372)** So first let's see what happens if we have no autoload at all, php and let's just have bike equals new Bicycle.
>
> **[6:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=383)** Okay, that's simple enough.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=385)** Let's come over here and let's load up autoload, autoload, nope, fatal error, class bicycle not found, right?
>
> **[6:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=395)** Had no idea what I was talking about.
>
> **[6:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=397)** Now let's write that autoload function that we just saw, function space my_autoload, I want to pass in one argument, that's going to be the class name, so it's ready to receive that, and then I'm going to look for that inside classes/ class and then .class.php.
>
> **[7:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=420)** So that's the basic for how we want to do this.
>
> **[7:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=422)** I'm also going to add in that security check as well, just to say if preg_match, and I'm going to be comparing a regular expression against class, I'll come back and write the regular expression in just a moment.
>
> **[7:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=438)** The idea is, if it matches this regular expression and my good expression is going to be that I only want to allow word characters, there can be zero or more of them, and I want to do it from start to finish, A to Z entirely, the whole thing from A to Z has to have only word characters in it.
>
> **[7:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=455)** That's what that expression means.
>
> **[7:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=457)** So if it that's true, then it'll work.
>
> **[7:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=459)** Now I've defined my function but I have to register that function, spl_autoload_register, and then the name of the function as a string, my_autoload.
>
> **[7:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=471)** Okay, so now it's registered.
>
> **[7:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=475)** That means that now if it can't find this class before it gives up it's going to try running the my_autoload function.
>
> **[8:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=482)** So let's save it, let's go back over, and let's reload the page, the error went away.
>
> **[8:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=487)** Let's just reassure ourselves that it did work, bike brand equals Trek, and let's echo back the bike brand.
>
> **[8:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=501)** Oops, I left off my arrow there, there we go.
>
> **[8:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=504)** Save it, go back to Firefox.
>
> **[8:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=506)** Look at that.
>
> **[8:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=507)** My class got loaded and I'm able to use it, and let's try the same thing, what if we had unicycle?
>
> **[8:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=512)** Unicycle, save it, let's reload our page.
>
> **[8:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=517)** It still works.
>
> **[8:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=518)** Now notice in the case of unicycle it loaded autoload.
>
> **[8:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=521)** It said, hey, look for that unicycle.
>
> **[8:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=523)** It did that, as soon as it got through here, it said, "wait a minute, it extends bicycle."
>
> **[8:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=528)** It said, "oh wait, I need to get bicycle, I don't know about that."
>
> **[8:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=531)** It ran autoload again and it went and got the bicycle class.
>
> **[8:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/autoload-undefined-classes-14627438?u=76281980&t=535)** So autoload is a useful tool for helping you to find classes that have not been loaded and it can help prevent errors or it can help you manage your memory resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (19), [[Microsoft Word|Word]] (3), [[Security]] (2), next (1)
> **CLI Commands:** php (19), find (5), make (2)
> **Env Vars:** php (12), spl (1)
> **Code Identifiers:** my_autoload (4), spl_autoload_register (2), preg_match (2)
> **Definitions:** is a  (6), stands for (1), means that (1)
> **File Paths:** class.php (2), pet.class.php (1), unicycle.class.php (1), autoload.php (1)
> **Cross-References:** go back to (4)
> **Versions:** php 4 (1)


### 7. A PHP OOP Project

[↑ Back to Table of Contents](#table-of-contents)

#### Project introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=0)** - [Instructor] In this chapter, we're going to apply all of the concepts we've learned about object oriented programming in PHP to a real world project.
>
> **[0:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=7)** You'll still have your OOP Sandbox files as reference if you need to review something, but we're going to be starting work in a new directory.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=15)** First, let me introduce the project to you.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=17)** The idea is that there's a small local bicycle shop called Chain Gang.
>
> **[0:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=22)** Chain Gang is the term for when a bunch of bicycles get in a line so that the bicycles can draft off of the lead bicycle.
>
> **[0:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=28)** This bicycle shop sells used bicycles to the public and they maintain their list of used bicycles that are available in a spreadsheet.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=36)** What they want is a way to put that spreadsheet on their website.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=40)** They want to do it as simply as possible.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=41)** They don't want to have a database, have an admin area or any kind of user authentication.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=45)** They want to just be able to take this spreadsheet and periodically update the list of bicycles available on the website.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=52)** So what we're going to have them do to keep it simple is just export that spreadsheet to a CSV file.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=57)** CSV stands for comma separated values and it's a very simple file format where each of the values are separated by commas.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=64)** And then we're going to use PHP to parse that file and read it in and use object oriented programming to convert that data into HTML that we can put on the website.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=75)** Then when they want to update their bikes, they just update the CSV file and the website will update automatically.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=80)** Let's take a peek at the finished product.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=83)** So this is the Chain Gang website.
>
> **[1:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=85)** It's very simple.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=86)** It just has a couple of pages.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=87)** There's a homepage here, has a link for view our inventory and a link for about us and a big image at the bottom.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=93)** Let's look at the about us page and you'll see it just has a bit of text and an image at the bottom.
>
> **[1:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=97)** If we click on the bicycle, go back to the main page and we have view our inventory.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=101)** This is where we're going to be doing our work.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=103)** The idea is to have a list of the bicycles that are available here.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=107)** So you can see how we have that now in a table format.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=110)** And it's reading these in from a CSV file to be able to output it as HTML.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=117)** So our goal is to use PHP object oriented programming to accomplish that.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=121)** I've already given you a beginning set of files for this project.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=126)** And the directory is called chain_gang.
>
> **[2:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=129)** Let's go ahead and take a look at that inside the Atom text editor so we can see what's inside.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=134)** You'll notice right off the bat that there are two directories, private and public.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=138)** This is a common way to set up PHP projects.
>
> **[2:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=140)** And the idea is that the public directory contains all of the PHP files and the images and the style sheets that the public should have access to.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=149)** The private directory contains the library of code that the public should not have access to.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=154)** Our code in the public directory still has access to it though because our code is able to look in the file system like this.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=162)** Require once, go back a directory and into the private directory to load up initialize.PHP.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=168)** Now we're not going to worry too much about about.PHP and index.PHP.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=172)** There's nothing out of the ordinary in those.
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=174)** We're going to focus on bicycles.PHP.
>
> **[2:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=177)** You'll notice that the first thing that it does is it loads up that initialize.PHP in the private directory.
>
> **[3:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=183)** Let's go take a look at that.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=185)** This is one file that loads up everything that we need to get started and make sure that everything is available so our PHP code can run well.
>
> **[3:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=193)** You notice, for example, that it turns on output buffering at the start.
>
> **[3:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=196)** If we needed sessions, we could turn those on here as well.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=199)** And it defines a number of PHP constants that we can use for private path, project path, public path and shared path.
>
> **[3:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=206)** You'll see in bicycles.PHP, we're making use of shared path right here, in order to find the directory that contains the public header that will display at the top of every page.
>
> **[3:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=215)** We also set a variable for www_root which is the document root.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=220)** We can hardcode that or find it dynamically.
>
> **[3:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=223)** Once we've got all of those defined, then it calls require once on functions.PHP.
>
> **[3:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=229)** This is a file that just contains some basic PHP functions that I use in every one of my projects.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=234)** We worked on all of these in the [[PHP Essential Training]].
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=237)** URL_for helps us construct absolute URLs.
>
> **[4:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=240)** We've got a few functions here that help us to escape value so that we can safely output them for HTML or for use in a URL.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=248)** We've got some functions to help us render some errors.
>
> **[4:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=251)** We've got a redirect function to allow us to redirect to a new page and we can check if something is a post request or a get request.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=257)** I'm not even going to use all of those but it's just a handy library that I use in all of my projects.
>
> **[4:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=262)** Let's go back to our initialize.PHP.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=264)** Right after we load in our functions is when we would want to load in the class definitions to make sure that all of our classes are available.
>
> **[4:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=271)** And we could do that two different ways.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=273)** We can either load them manually or we could use auto load to do it.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=277)** In either case, we're going to put those classes inside this directory called classes.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=281)** Right now it's empty but we're going to be populating that very shortly.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=284)** And then once we've initialized everything, we have all our functions available, we have our class definitions defined, then in bicycles.PHP, we'll be able to output the actual inventory of used bicycles.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=296)** We've got a table here that'll do that.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=298)** Right now, it's just got a row of placeholder data.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=301)** We're going to want to replace this with data coming from the CSV file.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=305)** That CSV file is also in the private directory.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=308)** If we look at that, you'll see that the first row in the file is a list of the properties.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=313)** A comma separated list of the different properties.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=315)** These are the same properties that are going to be in our bicycle class and the same properties that are going to be in that table that we're going to look at.
>
> **[5:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=322)** And then for each one of the rows, it has a different bicycles data.
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=326)** Here's a Trek Emonda 2017 bicycle, Cannondale Synapse 2016 bicycle and so on.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=333)** There's exactly as many comma separated values in each row as there are properties in that top header row.
>
> **[5:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=340)** You can poke around the other files if you want to explore and see what everything else is but it's all pretty standard PHP.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=345)** I want us to focus on this bicycles.PHP and how we're able to read from that CSV file and then take a bicycle and put it into that table.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/project-introduction-14621604?u=76281980&t=354)** Let's begin that process in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (20), data (4), [[Programming]] (3), [[HTML]] (3), oop (1)
> **Env Vars:** php (20), csv (7), html (3), oop (1), url (1)
> **CLI Commands:** php (20), make (2), find (2)
> **File Paths:** bicycles.php (4), initialize.php (3), about.php (1), index.php (1), functions.php (1)
> **Definitions:** is a  (5), stands for (1), is called (1)
> **Cross-References:** go back to (2), in the next (1)
> **Code Identifiers:** chain_gang (1), www_root (1)
> **Tools:** atom (1)

#### Challenge: The bicycle class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=6)** - [Instructor] The first part of building the table of bicycles for the Chain Gang website is going to be building a bicycle class.
>
> **[0:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=12)** And I want to challenge you to do that on your own because it's going to use skills that we've learned so far and I think you should be able to do it on your own.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=20)** And we've been working with the bicycle class in our OOP sandbox, so we have code you can refer back to if you get stuck.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=26)** Let's go over the requirements for this bicycle class 'cause it's a little bit different than the one we've been working with.
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=31)** This bicycle class is going to need to have a constant for categories, and the categories can be anything you want, but I'm going to make mine road, mountain, hybrid, cruiser, city and BMX.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=42)** These are the categories of bicycle that might show up in the used bicycle list.
>
> **[0:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=47)** There also can be three different genders for bicycles.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=50)** They can be a men's bicycle, a women's bicycle or a unisex bicycle.
>
> **[0:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=54)** Again, that should be a constant inside our bicycle class.
>
> **[0:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=58)** Our bicycle class, of course, needs properties.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=60)** We're going to have the brand, the model, the year, the category, the color, the description, the gender and the price.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=67)** You should know how to create those properties in our bicycle class and you should know how to use construct in order to populate those properties with values that we pass in as arguments when we create a new instance of the class.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=82)** Once you've got that done, then we want to do the same kind of work we did with storing bicycle weight in both kilograms and pounds.
>
> **[1:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=90)** Try to do this from scratch if you can.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=92)** Try not to refer back to the work we did before.
>
> **[1:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=95)** You're going to define a property for the weight in kilograms and then create methods that will return weight in kilograms or allow you to set the weight in kilograms or return the weight in pounds or to be able to set the weight in pounds.
>
> **[1:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=109)** It's a good review to make sure that you know how to do this kind of getter and setter activity on a property.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=116)** We also want to store the condition of each of the bicycles.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=119)** We want to rate them on a scale of one to five and each of those ratings from one to five actually has a name as well.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=125)** If it's one, it would be beat up.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=127)** If it's two, it'd be decent.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=128)** If it's three, it'd be good.
>
> **[2:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=130)** Four would be great and five would be like new.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=132)** Those labels might change from time to time, so what we want to do is just store the number.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=136)** Store a rating from one to five as condition_id and then we'll have another method called condition that will take that ID and figure out what the current string is so they can return the condition as a string.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=151)** So if it was a five for the condition ID, then the condition would return a value that was like new.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=157)** Once you've got your bicycle class defined, don't forget that we've got to load it in our project somehow.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=162)** So you can do manual class loading if you want to require the file directly or you can use auto load.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=168)** Try this as an exercise on your own.
>
> **[2:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/challenge-the-bicycle-class-14622583?u=76281980&t=170)** In the next movie, I'll go over the solution that I came up with to make sure that we have the same results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** oop (1), next (1)
> **CLI Commands:** make (3)
> **Env Vars:** oop (1), bmx (1)
> **Code Identifiers:** condition_id (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: The bicycle class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=0)** - I hope that you were able to complete the challenge and write your Bicycle class with the requirements that we talked about.
>
> **[0:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=11)** Even if you feel confident that you got the right answer, follow along with me to make sure that your solution matches mine.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=17)** The first thing that I did was I created a new file inside this classes directory called bicycle.class.php.
>
> **[0:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=24)** That's a common standard to name it singular, just like the class name, and to put .class.php, then inside that file, I put my PHP tags, and I defined a class for Bicycle, capital B, singular, then inside of there, I put in my properties.
>
> **[0:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=40)** I have brand, model, year, category, color, description, gender and price.
>
> **[0:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=45)** I also have protected properties for weight_kg and condition_id.
>
> **[0:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=49)** We'll come back to those in a minute.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=52)** I also knew that I needed some constants.
>
> **[0:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=53)** So I have class constants for categories and genders, and I made those public, the idea being that we might want to be able to access those from some PHP code somewhere else.
>
> **[1:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=64)** I also have a constant for condition options.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=66)** We'll come back to that in a moment, then once I had my properties, I defined my construct method.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=72)** That's __construct, and it's got to be public.
>
> **[1:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=76)** I'm going to just take in one argument, which is an array of arguments.
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=79)** I could list all of these out, but that's quite a long list.
>
> **[1:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=82)** So rather than have all of those arguments listed and have to worry about the order that they come in, I'm going to use this common design pattern where we just pass in an array of arguments.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=91)** Now, for each one of my properties, I'm going to check and see if we were passed in an argument for it and if so, we'll use it.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=96)** If not, it'll default to some other string.
>
> **[1:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=98)** I'm using PHP-7's null coalesce operator to do that.
>
> **[1:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=102)** I also just want to show you, this is what it would look like if we were using the old-style turn area operator.
>
> **[1:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=107)** We just checked to see if it is set, and if it is set, we use it.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=110)** Otherwise, we have a default value.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=112)** They do exactly the same thing.
>
> **[1:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=114)** This is a newer, and I think, slightly cleaner, way to do it.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=117)** Notice that I don't have any default values set on any of these.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=121)** I could, but I've chosen to put those into the construct method.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=126)** So if price is not set, it'll go to zero.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=128)** If kilograms is not set, it'll set to 0.0 and so on.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=132)** I also wanted to just mention another thing to you, which is that it's a common pattern to set your arguments like this.
>
> **[2:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=139)** For each of the arguments that we've been passed in, use each one as a key in a value, K and V.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=145)** If the property K, exists on this instance, then set that key equal to V.
>
> **[2:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=152)** Notice here that I do have a dollar sign in front of K because this is a dynamic variable.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=157)** It's not a single property called K.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=159)** It's dynamically going to be something different.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=161)** It's brand. It's model.
>
> **[2:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=162)** It's year and so on, but I'm going to set each one equal to its value.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=166)** This is a common way to do it.
>
> **[2:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=167)** It's a very easy way to say, you know what?
>
> **[2:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=169)** Whatever arguments were there, just take 'em and put 'em in the properties if they exist, right?
>
> **[2:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=174)** Then I can avoid having to do all of this code from line 30 to 39.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=178)** There's one big drawback to doing it this way though, which is that it means that any private and protected properties could be set.
>
> **[3:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=185)** That may not be a big deal to you, but just keep that in mind because in this case, we're always going to have access from the construct method to those private properties.
>
> **[3:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=195)** So even if we didn't want our construct method to have access to it, it will.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=200)** So just keep that in mind, but I wanted to show you that because that is a common technique that people use for populating their properties.
>
> **[3:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=207)** Okay, so once I had my construct method written, then I know I'm able to create instances and to populate those properties.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=214)** The next part of our challenge was to do weight in kilograms.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=219)** We already did this exercise in previous chapters.
>
> **[3:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=221)** You can refer back to the old code if you want.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=224)** You can also pause the movie if you want to just compare yours, but we have a method that allows us to set the weight in kilograms.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=230)** We have one that allows us to read that value back, and we have one that allows us to set it in pounds and one that allows us to read that back.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=237)** That code is exactly like what we had previously, then for condition.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=243)** All right, if we go back up here, we have a protected property for condition_id, and then we have condition options.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=250)** This is another constant.
>
> **[4:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=252)** Both of these are protected because the outside world doesn't need to have access to those.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=256)** We're going to use it though because we're going to store this ID, rating, basically, the of a bike on a scale of one to five, and then we're going to use that to say what the string is that goes with that.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=268)** So if someone calls this method condition here, then it should be able to return that value, and so we do that by using that class constant with self:: in front of it, and since it's an array, an associative array, we can ask for its key.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=284)** So the key is the number that we've stored in condition ID.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=287)** So we use that, pass it in, and it should return back one of those strings to us.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=291)** If the condition ID wasn't set, if it's not greater than zero, then it would just simply be unknown.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=298)** So with that, we completed our definition for our Bicycle class.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=302)** We're going to worry about using that in the next movie.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=305)** For now, we need to make sure that we load it up, and that we have access to that code.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=308)** So we also need to go into initialize.php and make sure that the class is available.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=313)** There are a couple of different ways we can do that.
>
> **[5:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=315)** We could simply require once each of the files that we want.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=319)** That's nice because it allows us to control the order that they get loaded in if that matters.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=325)** If we don't really care about that, and we just want to load all of the classes that are in that directory, and it's okay to load them in alphabetical order, we can simply use glob and pass in that directory.
>
> **[5:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=335)** I'm using a pattern here with this wild-card character, and I'm saying grab all of the files that are in that directory that have .class.php at the end of them and for each one of them, loop through and require it.
>
> **[5:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=348)** So this is a common pattern, to just, basically, say, grab all the files in the class directory and require them, so they're all available.
>
> **[5:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=354)** Another technique that we can use, either instead that or in addition to it, is to define my auto-load.
>
> **[6:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=361)** So we write a function.
>
> **[6:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=363)** We give it any name that we want, and then we take the name of that function, and we pass it in as an argument to SPL auto-load register, and then PHP knows that this is one of the places that it can look for our code.
>
> **[6:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=374)** Now, if I've done my job properly by loading them manually, either individually or by loading all classes in a directory, this shouldn't come up, but it's still a good practice to have auto-load in there as well.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/solution-the-bicycle-class-14625473?u=76281980&t=385)** So now that we have our Bicycle class, and it's being loaded up, as soon as our page, bicycles.php, calls initialized.php, now, it's available for us to use on this PHP page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), next (2)
> **CLI Commands:** php (11), make (3)
> **Definitions:** is a  (5), is an  (1), means that (1)
> **File Paths:** class.php (2), bicycle.class.php (1), initialize.php (1), bicycles.php (1), initialized.php (1)
> **Env Vars:** php (5), spl (1)
> **Code Identifiers:** condition_id (2), weight_kg (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Best Practices:** the key is (1), good practice (1)

#### From instances to HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=0)** - [Instructor] In this movie, we're going to learn to create instances of our newly created Bicycle class and to output their properties to the HTML page.
>
> **[0:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=9)** So if as a starting point, we go and we look at the current HTML page that we have, so that's chain_gang/public/bicycles.php.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=18)** Right, you have to make sure you use public, 'cause that's where this is located.
>
> **[0:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=21)** Our web server, of course, would just go straight to this, right?
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=25)** So everything there that's highlighted in blue would just be www.[chaingang.com/bicycles](https://chaingang.com/bicycles), right?
>
> **[0:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=31)** Something like that.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=32)** But we have to type all of that in.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=34)** So bicycles.php is going to return this table to us.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=38)** Right now that table just has placeholder data for Brand, Model, Year, et cetera.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=42)** What we want to do is create an object and use that object and ask for its properties for each one of these.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=48)** So its Year property would display in this box right here.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=52)** So let's switch over to our code and let's think about how we would do that.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=56)** So here we have our inventory.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=57)** Down here, there's our header row.
>
> **[0:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=59)** That's th for the header row, td for the table data cells.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=63)** So right down here, before we start this, let's create a new Bicycle.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=68)** Let's create on our php tags and let's make $bike = new Bicycle.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=75)** All right, so that would create a new Bicycle for us.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=78)** We know that we can also pass in arguments to our construct method.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=81)** So let's do that as well.
>
> **[1:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=83)** Let's do $args, I'm just going to make a simple array here.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=87)** I'm going to type in a whole bunch.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=88)** brand, we're going to make this one be Trek.
>
> **[1:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=93)** And let's type in model, and we'll make this one be Emonda.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=100)** And year, let's make it 2017.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=104)** Okay, so let's just stop there for now.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=106)** And let's just pass in those args to our Bicycle.
>
> **[1:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=110)** So now, we have a new bike.
>
> **[1:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=112)** All right, it creates an instance.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=113)** It populates those values for us in there, and now we have this bike.
>
> **[1:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=118)** So now what we want to do is take this instance of the bike, and we want to output its values inside this HTML.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=126)** So we can do that by using our php tags with echo, and then we can tell that instance to output its brand, close our php tags.
>
> **[2:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=136)** Let's copy that and let's put it right here.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=141)** This one's going to be model, and this one's going to be year.
>
> **[2:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=146)** Okay, so let's just save that and let's go take a look at it, see how we're doing.
>
> **[2:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=150)** Let's go over to Firefox.
>
> **[2:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=151)** We'll reload our page.
>
> **[2:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=153)** Look at that, Trek, Emonda, 2017.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=156)** It's that easy.
>
> **[2:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=159)** Now there are a couple more things we should do here.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=161)** We want to make sure we follow good security practice and escape each of these values for HTML.
>
> **[2:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=165)** I have this function, h, which calls HTML special chars for it to make sure we escape those values and make them safe for HTML.
>
> **[2:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=172)** So we're going to do that on all of these.
>
> **[2:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=175)** And we know that we want to keep doing this all the way down the list.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=179)** We got category, category.
>
> **[3:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=184)** We've got gender.
>
> **[3:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=186)** We've got color.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=189)** We've got weight.
>
> **[3:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=192)** And we've got condition, condition.
>
> **[3:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=198)** And we've got price.
>
> **[3:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=201)** Now we need to make a few more changes here.
>
> **[3:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=203)** We know that weight is not going to be weight, it's going to be weight in kg, right, for kilograms.
>
> **[3:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=210)** And then we can have dot, and let's put a little slash here, and let's copy this, put it right here.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=220)** And that's going to be in pounds.
>
> **[3:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=222)** And that's actually a method, so we want to put parentheses after it.
>
> **[3:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=226)** And condition, we know is also going to be method, right?
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=230)** It's going to return the value from condition id.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=232)** We're going to get a string back for that.
>
> **[3:54](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=234)** And for price, let's format it.
>
> **[3:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=235)** Right now, its not going to look very nice, so let's format it with something a little better.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=239)** We'll use the money_format, and we'll put parentheses around this.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=246)** And at the beginning, the first argument to money_format should be the format string that we want.
>
> **[4:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=250)** You can look up what those ought to be, but $ and then %i is going to give you a pretty good one to start with.
>
> **[4:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=257)** Okay, so let's try those out.
>
> **[4:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=258)** Let's save it.
>
> **[4:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=259)** Let's go back to our page.
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=261)** Firefox, let's reload our page.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=264)** And look at that.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=264)** Now we're missing some of these values though.
>
> **[4:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=266)** So we need to add in a few more of those.
>
> **[4:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=269)** Let's add those in quickly.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=270)** We've got gender, we'll make this one unisex.
>
> **[4:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=275)** And color, we'll make it black.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=280)** And weight in kilograms, we'll make this one 1.5.
>
> **[4:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=288)** And price, we'll just make it $1000, nice even number.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=298)** All right, let's save that.
>
> **[4:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=298)** Let's come back over here and let's reload our page.
>
> **[5:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=302)** Look at that.
>
> **[5:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=303)** We've now populated all of these.
>
> **[5:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=304)** Now Category is not being set.
>
> **[5:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=307)** I forgot to set category id in here.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=309)** Let's do that real quick.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=312)** So let's add in category as well.
>
> **[5:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=314)** Category, we'll just make it Road.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=319)** There we go.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=321)** One more time, reload it, okay.
>
> **[5:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=323)** So now we've got values in there.
>
> **[5:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=324)** So you see how we're able to take this object with its different properties defined and to output it to HTML.
>
> **[5:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=333)** In the next movie, we'll work on pulling those from a CSV file.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=336)** But before we do that, I want to do one other thing here, which is we know that we want this to loop through different values.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=342)** So just as a placeholder, I'm going to create a php loop.
>
> **[5:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=346)** I'm just going to make a simple for loop for $i=0.
>
> **[5:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=350)** And let's say $i <= 0; $i++.
>
> **[6:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=360)** Okay, so this is just a real simple php loop.
>
> **[6:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=366)** It's just going to loop 10 times, php, and end my php tag.
>
> **[6:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=372)** There we go.
>
> **[6:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=373)** All right, so now I've got a php loop defined, let's go back over and look at that page one last time.
>
> **[6:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=378)** Let's go back and reload it.
>
> **[6:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=380)** And now you can see, it just repeats it.
>
> **[6:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=382)** So its looping through over and over again.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=384)** Now what we want to do is loop through the different rows in the file.
>
> **[6:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=388)** So even though we're not reading from that CSV file yet, you see we have a proof of concept.
>
> **[6:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=392)** We're able to take a new object and to assign it values for its properties and then to output the values of those properties in our HTML.
>
> **[6:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-instances-to-html-14623516?u=76281980&t=401)** In the next movie, let's see how we can actually get those values out of a CSV file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10), [[HTML]] (8), data (2), next (2), web (1)
> **CLI Commands:** make (16), php (10)
> **Env Vars:** html (8), csv (3)
> **Code Identifiers:** money_format (2), chain_gang (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** chain_gang/public/bicycles.php (1), bicycles.php (1)
> **Tools:** firefox (2)
> **URLs:** [chaingang.com](https://chaingang.com) (1)

#### Read from a CSV file
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=0)** - [Instructor] In this movie, we're going to learn how to read from a CSV file using PHP.
>
> **[0:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=5)** The way that we read from a CSV file is using a built-in PHP function called fgetcsv.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=13)** It's similar to the function fgetsphp.
>
> **[0:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=15)** Fgets returns a single line from a file, Fgetcsv will return a line from a file and parse it as a commented limited set of text.
>
> **[0:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=25)** You pass in three arguments.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=27)** The first is the file handle where we're working with a file, we have a file handle to work with.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=32)** Then we pass in the length.
>
> **[0:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=33)** That's the length of the longest possible line.
>
> **[0:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=36)** You can either pick a large value like 1000 or you can use zero to have an unlimited length line.
>
> **[0:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=42)** And then the last argument is delimiter which is probably going to be just a simple comma.
>
> **[0:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=46)** So a string with a comment side of it.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=48)** If you omit it, that's what PHP will use by default.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=50)** So it reads and it parses a line in a file and returns back an array of fields.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=56)** If it encounters a blank line, it returns an array that has null as the only value inside.
>
> **[1:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=61)** So here's what it might look like.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=63)** If you haven't worked with files in PHP before, this'll give you a brief introduction to how it works.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=68)** We use fopen to open a file.
>
> **[1:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=70)** We provide the file name that we want to target.
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=72)** And the fopen function creates a handle that points to that file.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=75)** And we're going to store that in the variable file.
>
> **[1:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=78)** So then I have a loop that says while we haven't reached the end of the file, that's what feof stands for, that's eof is end of file.
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=86)** F lets it know that it's one of our file functions.
>
> **[1:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=89)** So while we haven't reached the end of the file, keep looping.
>
> **[1:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=92)** And each time it goes through, it's going to call fgetcsv, it's going to grab a row of data, it's going to parse it and assign it to row.
>
> **[1:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=100)** So row is now equal to an array.
>
> **[1:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=103)** We're just going to do some error checking.
>
> **[1:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=104)** If row happens to be null, or if it returns false then it knows that there was either a blank line or some other kind of problem and it'll just skip to the next line.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=113)** If it's not a problem though, we're going to take that array and we're going to add it into our data array so we'll now have an array of arrays.
>
> **[2:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=120)** And then last thing is to close that file by passing the file handle into fclose.
>
> **[2:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=125)** Now this is the simplest version.
>
> **[2:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=127)** A slightly more improved version would be to figure out if there's a header row or not.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=133)** So here you can see that header starts out being false.
>
> **[2:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=135)** And then inside the loop I check to see if header is still false, then that means this first row is the header row.
>
> **[2:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=141)** And I want to take those and I want to add them to the header variable.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=145)** And then every other row after that will take that header array and it will combine it with the row data to create an associative array.
>
> **[2:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=154)** That's what array combined does.
>
> **[2:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=156)** So then we'll have an associate array of key value pairs.
>
> **[2:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=160)** So for example, a key for year and a value for 2017 and so on.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=164)** So we just get an associate array instead of just a simple array.
>
> **[2:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=168)** Let's try adding this to our project but let's do it in an object-oriented way.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=173)** The way I'm going to make this object-oriented is I'm going to create a new class that's going to handle this business for us.
>
> **[2:58](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=178)** So inside the classes directory I'm going to create a new file and I'm going to call it parsecsv.class.php.
>
> **[3:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=190)** And inside there, we'll just put our PHP tags.
>
> **[3:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=194)** We'll define the class, which I'm going to call parsecsv.
>
> **[3:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=199)** So this class is going to be the class that handles the business of parsing.
>
> **[3:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=204)** So we're going to use properties to store some of this information.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=208)** For example, we'll have a public property for a file name.
>
> **[3:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=212)** Then we'll be able to set the file name and we'll know what to parse.
>
> **[3:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=217)** Then we also know that we're going to need to have header and data variables.
>
> **[3:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=220)** So let's make private properties for those, header and private data which will be initialized to an empty array.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=230)** So now we have those set up for us.
>
> **[3:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=232)** Let's create a construct function, publicfunction__construct and let's pass in the fun file name to that.
>
> **[4:02](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=242)** We won't pass in a whole lot of arguments, just one which is the file name.
>
> **[4:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=246)** And if file name is not equal to nothing, then let's set this property for file name equal to file name.
>
> **[4:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=260)** Okay?
>
> **[4:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=261)** So now I have the ability to instantiate it and set its file name at the same time.
>
> **[4:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=265)** And then let's create another method down here.
>
> **[4:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=268)** We'll make this one also public and it'll be a function called parse.
>
> **[4:33](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=273)** And when I call parse what I want to do is I want to take that file name and I want to parse it and I want to return back the data.
>
> **[4:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=280)** So at the end, I'm going to return back this data.
>
> **[4:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=284)** The very end, oops, there we go.
>
> **[4:47](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=287)** So whatever value I've put into that array is going to be the end result.
>
> **[4:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=290)** So what do we put in here?
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=291)** How do we parse?
>
> **[4:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=292)** Well, we've seen that before.
>
> **[4:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=293)** Let me just double click this.
>
> **[4:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=295)** I have a little sample here.
>
> **[4:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=296)** That's exactly what we were just looking at in the slides.
>
> **[5:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=300)** I'm going to copy that.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=301)** That's included in the exercise files and I'm going to paste that in.
>
> **[5:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=305)** Now header doesn't need to be set to false right here.
>
> **[5:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=308)** I can just remove that.
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=309)** We already have that defined.
>
> **[5:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=310)** Data has already been set as well.
>
> **[5:11](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=311)** So I can remove that.
>
> **[5:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=313)** Instead of file name, just a simple variable, it's now a property.
>
> **[5:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=316)** So it's this file name, right?
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=319)** So I'm opening up this file name.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=321)** I'm setting it equal to the local variable file while I'm not at the end of the file.
>
> **[5:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=325)** I want to go through that file and I want to get each line and I want to parse it into a row, right?
>
> **[5:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=330)** So now I have a local variable row.
>
> **[5:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=331)** I'm going to check and make sure that there's no problems with that row.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=334)** Now header is not a local variable header anymore.
>
> **[5:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=336)** It's this header.
>
> **[5:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=338)** So this header will be equal to the row if we haven't set it before.
>
> **[5:42](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=342)** Otherwise, let me just come down here.
>
> **[5:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=345)** Let's combine this header with row and then we're going to put it in this data array.
>
> **[5:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=352)** All right, let me just unindent these lines a little bit.
>
> **[5:55](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=355)** I got a little confused there.
>
> **[5:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=357)** And then finally at the end, it'll close the file and it'll return back this data as a result.
>
> **[6:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=364)** Now that we've written it, let's try it out.
>
> **[6:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=370)** Let's go over here to bicycles.php and right here above where we have our bicycle being instantiated now, let's create a new instance of our parser.
>
> **[6:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=378)** New ParseCSV and we can pass in the file name.
>
> **[6:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=384)** It's inside this private path here.
>
> **[6:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=385)** Now, remember we have a constant for private path so we can use that private_path and append that together with used_bicycles.csv.
>
> **[6:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=399)** That'll give the correct file path to find this used_bicycles.csv file.
>
> **[6:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=403)** It'll pass it into the parser.
>
> **[6:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=405)** And then we can ask it to return back a bike array by saying $parser parse, that's it.
>
> **[6:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=417)** Now we want to check our results.
>
> **[6:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=419)** So let's just do something here that does print_r on bike array.
>
> **[7:05](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=425)** It's going to be ugly, but at least let us see the results.
>
> **[7:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=428)** Now, before we try it out, we want to make sure that we do have access to this ParseCSV.
>
> **[7:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=435)** So initialize.php, you'll either need to have gone through all of the classes so that they're being listed or you'll need to define it one by one or you'll need to have auto load in place.
>
> **[7:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=445)** One of those needs to be there.
>
> **[7:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=446)** Once we have that, we can go back to Firefox.
>
> **[7:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=449)** We can reload our page and look at that.
>
> **[7:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=452)** Brand, Trek, model, Emonda, year, 2017 and so on.
>
> **[7:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=457)** It's successfully reading and parsing our CSV file.
>
> **[7:40](https://www.linkedin.com/learning/php-object-oriented-programming-2017/read-from-a-csv-file-14622578?u=76281980&t=460)** And now we have an array that we can work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[PHP]] (8), business (2), next (1)
> **CLI Commands:** php (8), make (5), find (1)
> **Env Vars:** php (5), csv (3)
> **File Paths:** used_bicycles.csv (2), parsecsv.class.php (1), bicycles.php (1), initialize.php (1)
> **Code Identifiers:** used_bicycles (2), publicfunction__construct (1), private_path (1)
> **Analogies:** for example (2), similar to (1)
> **Prerequisites:** you'll need (2), set up (1)
> **Cross-References:** go back to (1)

#### Improve ParseCSV
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=0)** - [Instructor] In the previous movie, we wrote a quick and dirty version of the ParseCSV class.
>
> **[0:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=6)** In this movie, I wanted to spend a few minutes making some improvements to it before we move on.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=10)** So we have a proof of concept, we know that our ParseCSV class works.
>
> **[0:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=14)** Now, I just want to make a couple of improvements to it, make it a little more robust before we move on.
>
> **[0:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=19)** The idea being that this might be a class that we want to use for future projects as well.
>
> **[0:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=23)** So for example, I could have a public static property for the delimiter.
>
> **[0:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=30)** Now, I probably want that to be a comma, but I have it defined here so that I don't have to have it be that if I wanted to parse something else.
>
> **[0:38](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=38)** Down here we have the comma hard coded in.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=41)** I can instead use self, colon, colon, delimiter.
>
> **[0:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=48)** Another improvement is that we can keep track of the number of rows that we have.
>
> **[0:52](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=52)** Private row count is going to be equal to zero.
>
> **[0:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=57)** And then every time I parse one of these rows and it gets successfully added, then I can just add here if this data was acceptable and I have a row.
>
> **[1:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=66)** Then let's have this row count be equal to plus plus, right?
>
> **[1:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=72)** We'll just increment that row count each and every time.
>
> **[1:15](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=75)** Now, I made it a private value because I don't want someone to be able to set the row count, right?
>
> **[1:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=79)** But I do want them to be able to read it.
>
> **[1:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=81)** So I'm going to make it a read only property by having a method here that's going to be a public method.
>
> **[1:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=87)** Public function, I'll call it row count.
>
> **[1:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=91)** And it's just simply going to return the value of this row count.
>
> **[1:36](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=96)** Another improvement I can make is that currently if I run this parse, it will go through and parse the filing, add all this information to the data.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=106)** If I were to call parse a second time it would add the contents of the file to it again, and that's not ideal.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=113)** A better way would be to have it clear that data each and every time.
>
> **[1:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=117)** So I'm going to write another method here.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=119)** I'm going to make it private, 'cause I don't need to call it from outside this class, but I'm going to call it reset.
>
> **[2:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=126)** And reset is going to set this header back to be null.
>
> **[2:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=132)** And this data is going to go back to being an empty array.
>
> **[2:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=138)** And this row count is going to be equal to zero.
>
> **[2:25](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=145)** Now that I have my method defined, I can add it in here inside parsing.
>
> **[2:29](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=149)** So the very first thing I'm going to do here is clear any previous results.
>
> **[2:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=157)** So (indistinct) parse more than once, it won't be a problem.
>
> **[2:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=161)** It'll just parse the file a second time.
>
> **[2:43](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=163)** I'll get a fresh copy.
>
> **[2:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=164)** This, reset.
>
> **[2:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=166)** Another improvement I can make is to check to see whether the will actually exist or not.
>
> **[2:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=171)** Right now I'm just assuming this file actually exists.
>
> **[2:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=173)** But I could write a function that would allow me to check that.
>
> **[2:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=176)** Public function, I'm going to call it file.
>
> **[2:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=179)** It's going to take file name as an argument and it's going to check and see, if not file exists, file name.
>
> **[3:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=189)** Then let's just echo back, file does not exist and let's return false.
>
> **[3:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=200)** Now, let's do another elstif just to check and see if the file is not readable.
>
> **[3:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=208)** Is readable with the file name.
>
> **[3:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=214)** We'll check and if it is not readable, let's just copy these lines.
>
> **[3:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=219)** File is not readable.
>
> **[3:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=224)** But if all of that passes just fine.
>
> **[3:48](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=228)** Let's copy this line and jump down here.
>
> **[3:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=230)** And let's say file equals file name and we'll return true because it was successful.
>
> **[3:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=236)** So this just sets the value.
>
> **[3:57](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=237)** So if I call file now, it's a public method.
>
> **[3:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=239)** It's also going to set the file name.
>
> **[4:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=241)** The same thing I'm doing here when I construct it.
>
> **[4:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=243)** In fact, I can actually tell this to instead call my new method.
>
> **[4:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=248)** That's even better, right?
>
> **[4:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=249)** So now, both construct or if I try from outside the class, either way it's going to check and see if the file name exists.
>
> **[4:16](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=256)** I want to remove the ability for people to set the file name directly by making this private.
>
> **[4:23](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=263)** So now it's a private property.
>
> **[4:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=264)** The only way to pass it in is by passing it into a new instance or by calling file.
>
> **[4:30](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=270)** Both of which are going to check and make sure the file exists.
>
> **[4:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=274)** Let's also add one more check here to parse before we parse the file.
>
> **[4:37](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=277)** Let's check and see if file name has been set or not.
>
> **[4:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=281)** So if not is set this file name then we shouldn't try and parse it, right?
>
> **[4:49](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=289)** So we'll just echo back.
>
> **[4:51](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=291)** Echo, file not set and return false long as we return, it'll make sure it doesn't keep going with the rest of the parse.
>
> **[5:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=301)** And the one final improvement I want to make is let's just drop down here, right after the row count.
>
> **[5:06](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=306)** We don't have any way to get to this data right now, right?
>
> **[5:09](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=309)** We parse it and it returns the data but there's no other way to get that data.
>
> **[5:12](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=312)** So let's have another reader here that'll read back that value but let's call it last results, right?
>
> **[5:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=318)** So we've already parsed it.
>
> **[5:19](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=319)** We want to see what the results were from the last time.
>
> **[5:21](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=321)** We have those stored inside this data, right?
>
> **[5:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=326)** So it's just returning that value back.
>
> **[5:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=327)** It's a reader, but we're labeling it last results so it's a little easier to see.
>
> **[5:31](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=331)** So let's make sure that in that process we didn't break it anything.
>
> **[5:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=334)** I don't think we've really improved much on what we'll see on this page, but it did still work correctly.
>
> **[5:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/improve-parsecsv-14624482?u=76281980&t=339)** And we've made our class a little more robust in the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (10)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### From a CSV file to instances
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=0)** - [Instructor] In this movie, we're going to learn how we take the data that we extracted from a CSV file and turn it into instances that we can then output as HTML.
>
> **[0:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=8)** Now that we've parsed our CSV file, we're actually really close to having a solution.
>
> **[0:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=13)** If you'll notice, we have an array that contains many different arrays.
>
> **[0:17](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=17)** The first array is just an array of different items.
>
> **[0:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=20)** Each item in the array corresponds to a different bicycle, a different row in our CSV file.
>
> **[0:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=26)** And then, each one of those arrays is an associative array, which is basically the properties and values that we want to pass into our objects.
>
> **[0:35](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=35)** So all we need to do is take those values for each one of those rows and create a new bicycle out of it.
>
> **[0:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=41)** We essentially need to loop through the bike array.
>
> **[0:44](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=44)** So we're going to loop through that bike array by creating a new loop here, PHP.
>
> **[0:50](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=50)** It's going to be a for each loop for each set of items in the bike array.
>
> **[0:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=56)** Remember each one of those is a bike, but we're not going to call it bike, instead we're going to call it args.
>
> **[1:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=60)** Because that's what it is, it's a set of arguments.
>
> **[1:03](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=63)** It looks almost exactly like this array that we've created here.
>
> **[1:07](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=67)** Exactly the same.
>
> **[1:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=68)** So we're going to take that and let's just end our PHP tag and then we're going to end PHP down here in the loop.
>
> **[1:20](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=80)** Alright, so it's going to loop through for every item that's in the bike array and then we're going to have the args.
>
> **[1:24](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=84)** So what do we want to do with those args?
>
> **[1:26](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=86)** We want to do exactly this right here.
>
> **[1:28](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=88)** So let's just come right here, and inside PHP tags, we'll create a new bicycle out of it.
>
> **[1:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=94)** Right, we'll take those args, we'll pass 'em into bicycle and voila, we have a new instance of the bike.
>
> **[1:39](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=99)** Then we're able to access its properties.
>
> **[1:41](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=101)** We're able to call methods on it all the way down the line.
>
> **[1:45](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=105)** So we don't need this anymore.
>
> **[1:46](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=106)** That's our test bicycle and we don't need the print R on the array anymore.
>
> **[1:53](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=113)** Instead, we just need to parse our CSV file.
>
> **[1:56](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=116)** And then once we've parsed it, we'll get back that bike array.
>
> **[1:59](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=119)** We'll loop through the different items in the bike array.
>
> **[2:01](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=121)** Each one is a set of arguments for a different bicycle, instantiate the bicycle, and then return its properties from there.
>
> **[2:08](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=128)** Let's save it and let's go to our page and check it out.
>
> **[2:13](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=133)** And there you have it.
>
> **[2:14](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=134)** We've now successfully parsed the CSV file and taken those values as arguments to our bicycle object.
>
> **[2:22](https://www.linkedin.com/learning/php-object-oriented-programming-2017/from-a-csv-file-to-instances-14626502?u=76281980&t=142)** If the staff at Chain Gang wants to update their inventory of used bicycles, all they have to do is replace that CSV file and our code will pick up those changes and put 'em on the website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), data (1), [[HTML]] (1)
> **Env Vars:** csv (6), php (4), html (1)
> **CLI Commands:** php (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Happy Coding
> [LinkedIn Learning](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=0)** - [Kevin] I would like to thank you for taking PHP: Object-Oriented Programming with me.
>
> **[0:04](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=4)** We've learned all of the techniques you need to define and use objects in your PHP code.
>
> **[0:10](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=10)** Once you have a feel for the basics, the next step is to learn to use PHP and object-oriented programming techniques to interact with databases.
>
> **[0:18](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=18)** Objects can help you to find database data, define complex behaviors for the data that you retrieve and control the kind of data that gets saved in the database.
>
> **[0:27](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=27)** OOP is a powerful tool to use throughout your PHP programming.
>
> **[0:32](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=32)** I look forward to seeing the projects that you create.
>
> **[0:34](https://www.linkedin.com/learning/php-object-oriented-programming-2017/happy-coding?u=76281980&t=34)** Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), data (3), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), database (2), next (1)
> **CLI Commands:** php (4), find (1)
> **Env Vars:** php (4), oop (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kevin] (1)


## Instructor

- [[Kevin Skoglund]]

## Resources

- Exercise files available

## Skills Covered

- PHP

## Path Context

### In [[Get Started with PHP]]
← [[PHP with MySQL Essential Training- 2 Build a CMS]] | **5 of 6** | [[PHP- Object-Oriented Programming with Databases]] →

## Appears In

- [[Get Started with PHP]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP

---

[↑ Back to top](#)