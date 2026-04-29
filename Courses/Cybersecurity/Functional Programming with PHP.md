---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: functional-programming-with-php
url: "https://www.linkedin.com/learning/functional-programming-with-php"
duration_minutes: 147
duration: 2h 27m
level: Advanced
updated: 2/27/2020
learners: 35332
skills:
  - PHP
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHFj8RRhllMwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1582824581850?e=2147483647&amp;v=beta&amp;t=VQVdHZQ48r6R9MtQAe5_Ta-5FTFYoiPH45po9FHErN8"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your PHP Skills]]'
prev_courses:
  - '[[Php Testing Legacy Applications]]'
next_courses:
  - '[[PHP Techniques- Working with Files and Directories]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":2,"total":7,"prev":"Php Testing Legacy Applications","next":"PHP Techniques- Working with Files and Directories"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Functional%20Programming%20with%20PHP.md)

![Functional Programming with PHP](https://media.licdn.com/dms/image/v2/C4E0DAQHFj8RRhllMwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1582824581850?e=2147483647&amp;v=beta&amp;t=VQVdHZQ48r6R9MtQAe5_Ta-5FTFYoiPH45po9FHErN8)

# Functional Programming with PHP

> Discover how to write more readable, maintainable PHP code by taking up functional programming. In this course, Shaun Wassell helps you get up and running with this popular programming paradigm. Shaun begins by covering fundamental concepts, including why functions and data are kept separate in functional programming and how to work with first-class functions in PHP. He then delves into the functi

> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php) | 2h 27m | Advanced | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Introductory Functional Concepts]]** (5 videos)
- **[[#3. 2. First-Class Functions]]** (7 videos)
- **[[#4. 3. PHP: The Functional Parts]]** (11 videos)
- **[[#5. 4. Advanced Functional Concepts]]** (5 videos)
- **[[#6. 5. Code Conversion Challenges]]** (6 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### A functional approach to transform code
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=0)** - [Shaun] Over the past few years, functional programming has become more and more popular, and it's not hard to see why.
>
> **[0:06](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=6)** When compared to more outdated paradigms such as object-oriented or procedural programming, functional programming provides developers with the ability to minimize the potential for bugs in their code while maximizing it's readability and re-usability.
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=20)** Functional programming has been championed by languages like Lisp and Haskell, but nearly all of its core concepts are hiding in plain sight right within standard PHP.
>
> **[0:30](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=30)** If you're looking for a straightforward, reliable way to make your applications more maintainable and scalable, learning functional programming might just be the single most important step you can take.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=41)** In this course, I'll show you how to make the jump into functional programming.
>
> **[0:44](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=44)** We'll start off with the basic concepts of functional programming and how it compares to object-oriented programming, and then move on to first-class functions and how to work with them in PHP.
>
> **[0:54](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=54)** We'll then move on to see how functional programming makes working with arrays with very straightforward in PHP followed by some more advanced concepts such as recursion and partial application, and finally, we'll close out with a few interesting challenges that will help you improve your functional knowledge even further.
>
> **[1:11](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=71)** I'm Shaun Wassell and I'm a senior software developer.
>
> **[1:14](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=74)** I've spent much of my professional life exploring functional programming and figuring out how to incorporate it more effectively into production code basis, and I'm really excited to share some of the things I've learned with you.
>
> **[1:25](https://www.linkedin.com/learning/functional-programming-with-php/a-functional-approach-to-transform-code?u=76281980&t=85)** Join me in my LinkedIn Learning course to learn functional programming with PHP and see how to take your code to a whole new level.

> [!info]- Semantic Content
>
> **CLI Commands:** php (4), make (2)
> **Env Vars:** php (4)
> **Analogies:** such as (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - [shaun] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, there are a few things that would be helpful for you to know.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=5)** The first is a basic knowledge of PHP, and ideally PHP Seven.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=10)** If you're not already comfortable with PHP syntax, it's not too hard to learn.
>
> **[0:14](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=14)** Just check out the Introductory PHP course in our library and come back to this course afterward.
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=20)** It would also be helpful for you to have some experience with basic command line operations.
>
> **[0:25](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=25)** All we'll be using for this course is basic commands like cd to change directories and ls to see the contents of a directory.
>
> **[0:32](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=32)** Keep in mind, also, that if you're on Windows, the commands might be a little different.
>
> **[0:36](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=36)** If you need to, follow the link I provided for an article that shows many of the basic Linux commands and their Windows equivalence.
>
> **[0:43](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=43)** Finally, since I'll be using it as a reference point throughout the course, a basic knowledge of object-oriented programming concepts would be helpful to have.
>
> **[0:51](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=51)** Even if you're not familiar with object-oriented programming, it's not a big deal.
>
> **[0:55](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=55)** You should still be able to follow along comfortably with the examples.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=59)** I also highly recommend that you follow along with me as I write code, but I've included the initial and finished states for all the code that I write in this course in the exercise files for your reference.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/what-you-should-know?u=76281980&t=70)** So basically, this course is for low intermediate to professional developers who have a desire to improve their code by learning and applying functional concepts, and if you fit that description, then this course is definitely for you.

> [!info]- Semantic Content
>
> **CLI Commands:** php (4), cd (1), ls (1)
> **Env Vars:** php (4)
> **Code Keywords:** finally, (1)
> **Tools:** command line (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Installing and running PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=0)** - [Instructor] We're going to start off by installing all of the major tools necessary for this course.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=4)** Having an up-to-date version of PHP will be really important for running our code.
>
> **[0:08](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=8)** So if you don't already have an up-to-date version of PHP and by up-to-date I mean at least 7.4, I'll show you how to do so in this video.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=16)** So if you don't already have PHP 7.4 installed, here's how to do that.
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=20)** Now first of all since throughout this course we're only going to be running PHP scripts from the command line, I'm not going to go through how to setup Apache here, but if you have the desire or need to do that, the directions can be found on PHP's website.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=33)** So if you're on a Mac as I am, the easiest way to install the latest version of PHP is by using homebrew.
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=39)** So let's start by opening up a terminal.
>
> **[0:42](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=42)** And if you don't already have homebrew installed it's really easy to do, all you have to do is go to brew.sh and the command you need to run is right here.
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=52)** Just copy and paste this into the terminal and hit Enter.
>
> **[0:57](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=57)** And that might take a little while, but once you have homebrew installed correctly, you'll want to make sure it's up-to-date by running brew update and then running brew upgrade.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=70)** And once you've done those two things we can actually install the latest version of PHP by running brew install PHP and hitting Enter.
>
> **[1:19](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=79)** And that might take a little while to complete as well.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=81)** But once it does, PHP should be installed successfully.
>
> **[1:25](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=85)** In order to make sure that you have the right version of PHP in your terminal just type php-v and the version that you see should be at least the version that I have here.
>
> **[1:36](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=96)** If you see something lower than the version I have here, here's what you might need to do.
>
> **[1:40](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=100)** You might need to add an alias to your bash profile.
>
> **[1:43](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=103)** And in order to do this, type vim tilda bash profile and if you're not comfortable with vim you can use nano instead by typing nano instead of vim and hit Enter.
>
> **[1:59](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=119)** And inside this file we're going to add a line that says alias php equals user/local/cellar/php/7.4.1 and this might
>
> **[2:16](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=136)** be different depending on when you're watching this.
>
> **[2:19](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=139)** In order to find the latest version of PHP on homebrew, just go to homebrew and search for PHP and it should show you the latest version here.
>
> **[2:28](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=148)** So you're going to want to type that here and finally /bin/php and then we have to save our file and finally once we've done that, we can type source bash profile and then try running php -v again and if you've done everything correctly you should see a version higher than or equal to mine.
>
> **[2:51](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=171)** And that's all we need to do.
>
> **[2:53](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=173)** Keep in mind that all the steps I just detailed here are for a Mac.
>
> **[2:56](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=176)** If you're using Windows or a Unix distribution such as Ubuntu, the steps might be a little different.
>
> **[3:01](https://www.linkedin.com/learning/functional-programming-with-php/installing-and-running-php?u=76281980&t=181)** But PHP's website has instructions for all of these as well.

> [!info]- Semantic Content
>
> **CLI Commands:** php (18), brew (4), make (2), apache (1), find (1)
> **Env Vars:** php (13)
> **Tools:** terminal (3), bash (3), vim (3), command line (1)
> **Code Keywords:** let (1), while, (1), this, (1), this. (1)
> **Prerequisites:** install (3), setup (1)
> **Versions:** 7.4 (1), php 7 (1), 7.4.1 (1)
> **UI Navigation:** go to (2)
> **File Paths:** brew.sh (1)


### 2. 1. Introductory Functional Concepts

#### Why use functional programming?
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=0)** - [Instructor] So the first thing you may be wondering is what is functional programming anyway?
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=5)** This is a big question most people ask when they hear about how useful functional programming is and the best way I've found to answer this question is to consider why we'd want to use functional programming in the first place.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=16)** In other words, what are the problems that functional programming sets out to solve?
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=21)** Well, if you're watching a course about functional programming PHP, I'm going to assume that you currently use primarily PHP, but the code you write follows an object oriented paradigm.
>
> **[0:31](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=31)** And because of this, I'm going to make a further assumption.
>
> **[0:34](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=34)** I'm going to assume that you've run into this problem before.
>
> **[0:37](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=37)** In the software you write, especially as programs get larger and more complex, certain bugs start to show up that are difficult to track down and fix, partly because they're hard to recreate, it takes a long convoluted series of steps to make them show up, and partly because even when you figure out how to recreate them, it's next to impossible for you to keep track of all the changes that occur while the program is running.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=59)** In a typical enterprise size program, thousands of different variables are being operated in thousands of different places at run time, and the application can get itself into buggy states, which can be difficult to recreate.
>
> **[1:12](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=72)** And this is exactly the type of situation that functional programming aims to avoid.
>
> **[1:16](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=76)** Once you learn to think and program in a functional style, this type of situation will become much less frequent.
>
> **[1:23](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=83)** You'll learn many techniques that can be used to create very large, powerful, and virtually bug free code bases that are composed of many smaller, self contained, and easily testable parts.
>
> **[1:34](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=94)** So then, at its core, functional programming is concerned with taking the large number of complex ideas present in any large computer program and organizing them in a coherent way, while at the same time, making sure that the code remains easy to test and modify.
>
> **[1:50](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=110)** Of course, this goal is what object oriented programming aims to do as well, although it achieves it with only varied success.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=117)** The difference between object oriented and functional programming is in the choices they make with regards to organizing code.
>
> **[2:04](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=124)** As you probably know already, the basic idea behind object oriented programming, is that humans think in terms of objects and relationships between these objects, and therefore, computer programs should be organized in terms of objects so that we can leverage our existing thought patterns to write programs more effectively.
>
> **[2:22](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=142)** Now the problem with this of course, is that our thought patterns are often not as well defined as we sometimes like to think.
>
> **[2:29](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=149)** Once we go beyond contrived examples such as SUV as a subclass of car, car as a subclass of vehicle, which demonstrates the concept, but well, frankly isn't very helpful, the object oriented programming doctrine doesn't provide much guidance regarding code organization.
>
> **[2:45](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=165)** What we're left with is a rather daunting array of concepts like interfaces, subclasses, constructors, public, private, and protected data, accessors, mutators, and method overwriting, all of which form a complicated web of relationships that are prone to abuse by all but the most experienced and disciplined programmers.
>
> **[3:04](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=184)** So that's object oriented programming.
>
> **[3:06](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=186)** Functional programming on the other hand, aims to bring the precision of mathematical functions into computer programs.
>
> **[3:12](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=192)** While there will always be room for human error in programming, no matter what paradigm is being used, adding the provable certainty that comes with mathematics into computer programming, makes it far easier to avoid bugs.
>
> **[3:24](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=204)** Imagine if we were able to represent all parts of a computer program as simply as a mathematical function, such as the function of X equals X plus one.
>
> **[3:33](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=213)** Where could a bug possibly be hiding in a function like this?
>
> **[3:36](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=216)** Now that's just a very basic example, we'll look further into the details of functional programming along with the many differences between it and object oriented programming throughout the rest of the course.
>
> **[3:48](https://www.linkedin.com/learning/functional-programming-with-php/why-use-functional-programming?u=76281980&t=228)** And again, since many of you are probably most familiar with object oriented programming, I'll continue to use it in a lot of comparisons with functional programming to clarify the concepts I'll show you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (1), self (1), public (1), private (1)
> **CLI Commands:** make (3), php (2)
> **Env Vars:** php (2), suv (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** such as (2), imagine (1)
> **Speakers:** - [instructor] (1)

#### What is declarative programming?
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=0)** - [Instructor] Now that we're a little more familiar with the main problems that functional programming can help us solve, the next thing you'll want to understand about functional programming is that it's a declarative style of programming.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=10)** This is in contrast to things like object oriented programming and procedural programming, which are imperative styles of programming.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=17)** So then we have two contrasting styles, declarative and imperative.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=21)** What's the difference?
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=23)** Well, the simplest way to put it is this.
>
> **[0:26](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=26)** Imperative programming focuses on how to do things whereas declarative programming puts more focus on what things are, so that's the 10,000 foot view.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=35)** Let's look at this in a little more detail.
>
> **[0:37](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=37)** A simple example of this would be if we were to talk about houses.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=41)** If we wanted to describe a house in a declarative way, if we wanted to describe what a house is, we might say that a house is a foundation, four walls, and a roof on top.
>
> **[0:51](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=51)** On the other hand, if we were describing a house in an imperative way, if we wanted to describe how to make a house, we might say in order to make a house, you need to pour the foundation, build four walls, and then put a roof on top.
>
> **[1:05](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=65)** The difference might seem a little subtle, but it's very important.
>
> **[1:09](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=69)** Let's expand on this a bit and look at a more programming-=related example.
>
> **[1:13](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=73)** Let's say we want to write a program that tells us the average of an array of numbers.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=77)** Imperative programming would specify the steps required to calculate this result, something like this.
>
> **[1:22](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=82)** First we set x equal to zero, then we add the first number in the array to x.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=88)** Then we repeat step two for the rest of the numbers in the array, and finally, we divide x by the length of the array.
>
> **[1:35](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=95)** And unless you've worked with functional programming before, this is probably how you're used to writing programs, thinking of how to get the result.
>
> **[1:42](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=102)** On the other hand, if we wanted to solve the same problem in a declarative way, we could simply say x is the sum of all the numbers in the array divided by the length of the array, or if you're more mathematically inclined, like this.
>
> **[1:56](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=116)** Now if it never occurred to you that it's possible to write programs this way by simply stating what something is, you're not alone.
>
> **[2:02](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=122)** You probably notice that talking about things declaratively, talking about what they are instead of how to get them, feels a lot more natural and, frankly, is a lot easier for many problems, especially once you get used to it.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=134)** This way of talking about things may also remind some of you of mathematical functions such as these, and as I mentioned before, this is one of the main ideas behind functional programming, to bring the precision and reliability of mathematical functions into our programs.
>
> **[2:28](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=148)** As you may have figured, this is also where functional programming gets its name.
>
> **[2:33](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=153)** So it's all very easy to say that functional programming brings the precision of mathematics into programming, but what does that mean exactly?
>
> **[2:40](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=160)** Well, there are three main concepts behind functional programming which together allow us to do just that.
>
> **[2:46](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=166)** These concepts are one, immutability, two, separating functions and data, and three, first class functions.
>
> **[2:54](https://www.linkedin.com/learning/functional-programming-with-php/what-is-declarative-programming?u=76281980&t=174)** Over the course of the next few videos, I'll go into depth on what each of these concepts means, contrast it with how other paradigms do things, and explain its advantages.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (3), finally, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Immutability in functional programming
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=0)** - [Instructor] The first major concept of functional programming is immutability.
>
> **[0:03](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=3)** And it's a concept that may surprise a lot of people at first.
>
> **[0:07](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=7)** See, most programmers learned early on that you could assign a value to a variable.
>
> **[0:11](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=11)** For example, we can define a variable called x and store the value five in it.
>
> **[0:15](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=15)** And then later on in the program, we can change the value of that variable to some completely different number.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=21)** And later on, we can change this value again and so on.
>
> **[0:24](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=24)** However, in Functional Programming, this is not allowed.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=27)** When we say that x is equal to five, we mean that for the rest of the program, x will only ever be five, there's no way we can change it.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=35)** In short, immutability means that we need to treat most of the values in a program is constants.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=41)** In PHP 7, we have two main ways of defining constants.
>
> **[0:45](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=45)** The first way is with the const keyword, which defines constants at compile time.
>
> **[0:50](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=50)** And the second is by using define, which defines constants at runtime, and allows us to define constants conditionally such as inside an if statement.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=59)** In practice, though, the least intrusive way of incorporating immutability into our PHP programs, is through discipline and diligence.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=67)** Discipline, meaning don't change the value of variables in your programs, even though you're technically allowed to.
>
> **[1:13](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=73)** And diligence, meaning that we need to be aware of certain cases were built in functions, will mutate our array by design.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=81)** PHP is built in sort function is a good example of this, it actually mutates the array that we call it on.
>
> **[1:27](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=87)** We'll go into much more detail on preventing this sort of thing later on in the course.
>
> **[1:32](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=92)** Another way to think about immutability and functional programming is this.
>
> **[1:35](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=95)** In object oriented and procedural programming, we treat variables as buckets that we can put values into, we call this assigning values to variables.
>
> **[1:45](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=105)** So one point in time, x might hold the value three, and another point it might hold the value 10.
>
> **[1:50](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=110)** And then it might hold the value negative four and so on.
>
> **[1:53](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=113)** On the other hand, in Functional Programming, we don't assign we define so instead of naming bucket that hold different values at different times, we named the values themselves.
>
> **[2:05](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=125)** So when we say that x equals three, we don't mean that x is a container that is currently holding the value three, we literally mean that x is just another name for three in the same way that pi is 3.14159, etc.
>
> **[2:19](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=139)** Could you imagine changing the value of pi?
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=141)** Of course not.
>
> **[2:23](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=143)** So functional programming treats all values as if they were as concrete and unchanging as pi, or any other mathematical constant.
>
> **[2:31](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=151)** And so once we've defined x for the whole entire program, X can never be anything else.
>
> **[2:37](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=157)** It's just another name for whatever value we've defined it as.
>
> **[2:41](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=161)** At first glance, this might seem strange to most programmers, after all, what good is a program where you can't change anything?
>
> **[2:48](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=168)** How can a program like that be of any use at all?
>
> **[2:51](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=171)** Well, let's look at a quick example.
>
> **[2:53](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=173)** What if in a certain theoretical program, we have an employee and we want to raise their salary.
>
> **[2:58](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=178)** In object oriented programming, Of course, we just change it directly, usually by calling a member function.
>
> **[3:04](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=184)** In Functional Programming on the other hand, we would instead define a new constant that represents the updated data, and then use this value in future calculations.
>
> **[3:14](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=194)** Notice here also that I'm not using the new keyword as we do an object oriented programming, I'm just defining our data in a string hit array.
>
> **[3:21](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=201)** We'll learn more about what this is later on.
>
> **[3:24](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=204)** So the advantage of immutability, and the reason that Functional Programming, places such an emphasis on.
>
> **[3:29](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=209)** It's that it frees us from having to deal with something called state change.
>
> **[3:34](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=214)** When a program contains many variables that are all constantly changing at different times, it can be very hard to know what state a program is in at any given point in time.
>
> **[3:44](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=224)** As programs increase in size to include thousands or even millions of individual variables.
>
> **[3:49](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=229)** This can lead to extremely hard to find bugs and an overall fragile code base that programmers are afraid to make changes to.
>
> **[3:56](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=236)** And this is a problem that even test driven development can solve completely.
>
> **[4:00](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=240)** Since the task of testing all possible states that a program may get itself into, is nearly impossible in programs of considerable size.
>
> **[4:09](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=249)** Functional Programming, on the other hand, starts off with an immutable set of data as a single source of truth, and then uses functions to combine this data piece by piece and transform it into useful information.
>
> **[4:21](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=261)** And this data is usually retrieved from a database or some other memory storage.
>
> **[4:25](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=265)** Now, there are two powerful advantages to this approach.
>
> **[4:28](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=268)** The first is that the original data in a program, will always remain intact, which makes bugs much easier to find.
>
> **[4:35](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=275)** The second advantage is that programs constructed in this way are much easier to keep track of, since you can focus on any given piece individually.
>
> **[4:43](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=283)** The only thing that determines the output of a given piece is the input.
>
> **[4:47](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=287)** We don't have to think about the entire system all the time.
>
> **[4:51](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=291)** If the concept of immutability, doesn't quite make sense to you yet, or if the advantages don't seem apparent, don't worry about it yet.
>
> **[4:57](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=297)** Later on in the course we'll take a look at many examples that incorporate immutability.
>
> **[5:01](https://www.linkedin.com/learning/functional-programming-with-php/immutability-in-functional-programming?u=76281980&t=301)** For now just remember that in Functional Programming, we need to treat all data as immutable.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), const (1), this, (1), this. (1), else. (1)
> **CLI Commands:** php (3), find (2), make (2)
> **Definitions:** is a  (4), means that (1), we call this (1)
> **Env Vars:** php (3)
> **Versions:** php 7 (1), 3.14159 (1)
> **Analogies:** for example (1), imagine (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Separation of data and functions
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=0)** - [Instructor] The second main concept of functional programming is the separation of data and functions.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=5)** This is a case where functional programming is directly in contrast with object-oriented programming, where data and functions are almost always grouped together.
>
> **[0:13](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=13)** So, let's see what the separation of data and functions looks like.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=17)** First of all, for our purposes, data might be any values that a program contains.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=21)** People's names, addresses and social security numbers in a payroll program, the models, years and colors of cars on a used car website, the positions, health levels and weapons of characters in a video game, anything.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=33)** All of this is data.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=35)** In object-oriented programming, this data is usually wrapped up in side objects as member variables and the only way we can access it is by using an object's methods.
>
> **[0:44](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=44)** In functional programming on the other hand, this data is usually represented by simple arrays as we see here and it's usually indexed with strings.
>
> **[0:53](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=53)** So, for our purposes, that's what data is.
>
> **[0:56](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=56)** A function on the other hand is any operation that we can apply to our data to convert it into some other form.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=62)** For example, if we wanted to find the average salary of programmers at our company, if we wanted to find all the cars on our website that were made after a certain year, or if we wanted to find if two characters are colliding in a video game.
>
> **[1:14](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=74)** Those are examples of what a function might look like.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=77)** So, in object-oriented programming, functions are wrapped up inside objects along with the data they operate on and allow us to access or make changes to that data.
>
> **[1:26](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=86)** In functional programming on the other hand, functions are completely separate entities from the data they operate on.
>
> **[1:32](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=92)** In order to operate on given data, the data must be passed as arguments to the function instead of using the this keyword as in object-oriented programming.
>
> **[1:42](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=102)** And because of the rule of immutability, they should never make changes to any of the data they touch.
>
> **[1:47](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=107)** They should only return a modified copy.
>
> **[1:50](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=110)** We'll talk more about this later on.
>
> **[1:53](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=113)** Now, as I mentioned before, if you're coming from an object-oriented background, it may seem strange to you that functional programming places an emphasis on keeping data and functions separate, since one of the central concepts of object-oriented programming is that we put data and the functions related to that data together in objects.
>
> **[2:10](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=130)** And to understand why it makes sense to keep data and functions separate in functional programming, it might be helpful to think about why we keep them together in object-oriented programming in the first place.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=141)** As you probably already know, the main reason that it's useful to keep data and functions together in the same object is that this allows us to interact with a member variables of an object without touching them directly.
>
> **[2:33](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=153)** And what's wrong with touching variables directly?
>
> **[2:35](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=155)** Well, if we give programmers direct access to variables, they can, and in my experience, will change them in ways that they're not supposed to.
>
> **[2:44](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=164)** To see what I mean, let's consider this simple case of a Person object with publicly accessible properties $first_name, $last_name and $initials.
>
> **[2:52](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=172)** Now, if we allow programmers to change these properties directly, they have to remember to reset initials every time they change either first name or last name, which they're almost certain to forget somewhere, and this introduces bugs into the program.
>
> **[3:06](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=186)** The solution to this is to make the variables private or protected, which in PHP is done by using the private or protected keywords and allowing programmers to access the variables only through accessor or mutator functions, perhaps better known as getters and setters, which makes sure that the modification of our variables is taken care of properly.
>
> **[3:25](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=205)** In functional programming however, we don't need to worry about making all our data private because programmers can't alter the data in unwanted ways.
>
> **[3:33](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=213)** Because of immutability, which we discussed in the previous video, the data remains a constant source of truth.
>
> **[3:40](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=220)** If we want to transform the data in some way, such as changing someone's name, we simply define a new constant that represents the updated data.
>
> **[3:48](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=228)** We then use this updated constant in all our future calculations knowing exactly what data it represents.
>
> **[3:55](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=235)** And throughout this course, I'm going to be using the word constant to refer to what are, in fact, variables, simply because in the functional mindset, all variables should be treated as constants.
>
> **[4:05](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=245)** So, that's just something to keep in mind.
>
> **[4:07](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=247)** So, let's take a look at a simple example to demonstrate how functional programming and object-oriented programming handle functions and data differently.
>
> **[4:15](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=255)** Let's imagine the classic example of creating a simple to-do list program that helps people keep track of tasks they need to complete.
>
> **[4:22](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=262)** So, the object-oriented approach might look something like this.
>
> **[4:25](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=265)** First, we create a TodoItem class that contains properties such as the name, category and maybe the deadline for the item, and whether or not it's been completed, as well as functions such as change_name or mark_as_done.
>
> **[4:37](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=277)** Then we might have another class called TodoList, which contains an array of to-do items as well as the functions for adding or removing items or sorting them in different ways.
>
> **[4:47](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=287)** In functional programming on the other hand, we keep the data and the functions separate.
>
> **[4:52](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=292)** Remember that in functional programming, instead of wrapping up our data's properties as member variables inside classes, we usually represent data using simple constructs such as arrays.
>
> **[5:02](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=302)** So, for this program, we might have arrays with string keys that represent to-do items with name, category, and maybe deadline properties, and then we'd have the to-do list itself, which we would simply represent with an array that holds a bunch of to-do items.
>
> **[5:16](https://www.linkedin.com/learning/functional-programming-with-php/separation-of-data-and-functions?u=76281980&t=316)** And then outside these classes, we'd define functions for combining or transforming our data in some way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), private (3), protected (2), this. (1)
> **CLI Commands:** find (3), make (3), php (1)
> **Analogies:** such as (4), for example (1), imagine (1)
> **Code Identifiers:** first_name (1), last_name (1), change_name (1), mark_as_done (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Definitions:** is a  (1), known as (1)
> **Env Vars:** php (1)
> **Best Practices:** remember to (1)

#### First-class functions
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=0)** - [Instructor] The third major concept of functional programming is something called first-class functions.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=5)** This is where things really start to get interesting and where the power and flexibility of functional programming really start to shine through.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=12)** So what exactly do we mean when we talk about first-class functions?
>
> **[0:15](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=15)** Well in object oriented programming we generally treat data and functions as entirely different types of entities.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=23)** We'd probably never think of, for example, creating an array of functions or passing functions as arguments to other functions, or even stranger, returning functions from other functions.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=33)** However, in functional programming it's not only possible to do these things, it's in fact a source of tremendous flexibility.
>
> **[0:40](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=40)** And this is exactly what we mean when we say that a language supports first-class functions.
>
> **[0:44](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=44)** It allows us to treat functions in a very similar way to how we normally treat other values such as numbers, strings and objects.
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=52)** But hold on a minute, doesn't this go against what I said in the previous video about separation of data and functions in functional programming?
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=59)** Well at first glance it might seem like it, so let me clarify.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=62)** In object oriented programming, since functions and data are both defined within the same class, they tend to be tightly coupled.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=70)** In other words, the functions inside a given class usually reference the data they operate on directly.
>
> **[1:16](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=76)** You generally can't take a given function and remove it from the class it's in and have it work on it's own because of the this keyword.
>
> **[1:23](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=83)** Outside the scope of the object that it belongs to, this doesn't make much sense.
>
> **[1:29](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=89)** In functional programming, on the other hand, we define our functions specifically so that they work in isolation.
>
> **[1:35](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=95)** They're not tied to a specific object.
>
> **[1:37](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=97)** All of the data that a function needs to operate is passed in through the arguments, and the only thing that will change the output of the function is a change in the arguments.
>
> **[1:47](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=107)** In other words, functions aren't influenced by any kind of internal or external state, and there's a name for this kind of function, we call them pure functions.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=117)** In functional programming we try our best to make every single one of our functions pure.
>
> **[2:01](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=121)** This is what we mean when we say that we want to keep our data and functions separate.
>
> **[2:06](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=126)** Now you might be wondering why we'd want to do stuff like this, what could we possibly gain from doing weird things like having arrays of functions, or passing functions as arguments?
>
> **[2:15](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=135)** Well in fact, this simple change in mindset towards functions opens up a world of possibilities in terms of software design.
>
> **[2:22](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=142)** It gives us a lot of flexibility and greatly increases our opportunities for code reuse.
>
> **[2:27](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=147)** It also allows us to do useful things like combine existing functions to create new functions.
>
> **[2:33](https://www.linkedin.com/learning/functional-programming-with-php/first-class-functions?u=76281980&t=153)** We'll see in the next chapter how this is done and what it's implications are for our programs.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), class, (1), this, (1)
> **Definitions:** in other words (2), is a  (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), in the next (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)


### 3. 2. First-Class Functions

#### Functions as data, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=0)** - [Instructor] I mentioned in a previous video that functional programming treats functions as first class citizens.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=5)** Meaning that we can treat functions in a very similar way to other types, such as strings, numbers, or objects.
>
> **[0:11](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=11)** In this video, we're going to take a look at what this means for our code and a few useful things we can do with it.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=17)** First of all, if you're not using the exercise files, now's a good time to create a directory to hold your example code.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=23)** Just create an empty directory called functional-php or something like that and open it up in the editor of your choice.
>
> **[0:29](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=29)** I'm going to create a new file called functions_as_data.php, and this is where we'll write the code for this video.
>
> **[0:42](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=42)** So, for our examination of first class functions, let's start off with the fact that there are two main ways to define a new function in PHP.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=49)** The first is by starting off with the function keyword like this, function my_function, and then inside we have the function body.
>
> **[1:04](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=64)** The other way is by defining functions in the same way that we'd define any other type.
>
> **[1:08](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=68)** And here's what that looks like.
>
> **[1:09](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=69)** We can say $my_function equals function, and then the function body.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=81)** Now, when we define a function like this, we can call it by just adding parentheses after it.
>
> **[1:25](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=85)** Like my_function parentheses, but we can also do something like this.
>
> **[1:32](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=92)** We can say, my_function_2 equals my_function.
>
> **[1:41](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=101)** And then, what we can do, is call my_function_2 just by adding parentheses after it and it will behave exactly like our original my_function, my_function_2, parentheses.
>
> **[1:53](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=113)** If you want to run this and see for yourself, just open up a terminal and make sure it's in our functional-php directory that we created, and then just run it with php functions_as_data.php.
>
> **[2:08](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=128)** So, we can see right here that functions in PHP already behave like other types.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=134)** And this is true, too, if we add arguments to the function.
>
> **[2:17](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=137)** For example, if we say name, then we can say, "Hello name," and then add a name in here.
>
> **[2:26](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=146)** And if we run our code again, we see that it works just as well that way, even though the function that we just made the change to was my_function and the function we're calling is my_function_2, because we said here that my_function_2 is equal to my_function.
>
> **[2:42](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=162)** So again, as we've seen here, we can define functions using the same syntax that we use when defining other types, such as numbers or strings.
>
> **[2:49](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=169)** And just like with these other types, we can do interesting things when assigning.
>
> **[2:54](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=174)** For example, we can do stuff like using a ternary operator to dynamically change a function's definition.
>
> **[2:59](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=179)** And one possible application of this is for mocking out pieces of our code during development.
>
> **[3:05](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=185)** If we have a piece of code that's especially time intensive, such as network or database operations, or a piece of code that's destructive, such as a piece of code that deletes a whole database, it can really get in the way of our development if we have to test the code around it.
>
> **[3:18](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=198)** So, what we can do is define a mocked out version of our function that returns some fake data, and use first class functions to determine when we should use the fake version and when we should use the real version.
>
> **[3:29](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=209)** So, don't worry if that doesn't make sense just yet.
>
> **[3:31](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=211)** We're going to go through it piece by piece and see what this looks like in code.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=215)** So, what we're going to do first is define our network operation function.
>
> **[3:40](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=220)** In the real world, this function would probably do something like fetch data from an API.
>
> **[3:44](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=224)** So, we'll call our function fetch_data_real, and then define it with no arguments.
>
> **[3:52](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=232)** And then, inside this function body here is where the time intensive operations would take place.
>
> **[3:56](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=236)** But in order to keep this example simple, we're just going to print something to the console saying "Fetching data."
>
> **[4:05](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=245)** Now, let's define a stub function that will return fake data.
>
> **[4:08](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=248)** The idea here is that we could use this fake data for development without having to wait for whatever lengthy operations the real function has to complete.
>
> **[4:16](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=256)** We'll call this function fetch_data_fake, and again define it with no arguments.
>
> **[4:23](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=263)** And inside this function, let's say that the data we're supposed to be fetching is a person's data from a database.
>
> **[4:30](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=270)** So, what we're going to do is just return some fake person data, which looks something like this.
>
> **[4:34](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=274)** Name, Jane Doe, age, we'll say 35, and job, programmer.
>
> **[4:45](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=285)** So now, we have our real fetch data function, which in the real world would actually fetch data from a database or something, and our fake fetch data function.
>
> **[4:53](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=293)** Now, we need to define the function that decides between the two.
>
> **[4:57](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=297)** But in order to do this, what we're going to do is define some sort of environment variable.
>
> **[5:02](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=302)** We'll call it environment, and we'll set it equal to either dev or prod.
>
> **[5:08](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=308)** For now, we'll just set it to dev.
>
> **[5:12](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=312)** So now, what we're going to do, is we're going to define the actual function that we'll use elsewhere in the code base.
>
> **[5:18](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=318)** We'll just call it fetch_data.
>
> **[5:21](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=321)** And then, what we're going to do is based on the value of this environment variable that we defined up here, we're going to say if environment equals dev, then we're going to set fetch_data to fetch_data_fake.
>
> **[5:35](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=335)** Otherwise, we'll set it to fetch_data_real.
>
> **[5:40](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=340)** And that's all there is to it, really.
>
> **[5:41](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=341)** We can now call fetch_data with parentheses after it, and it will return this fake data that we defined inside of here.
>
> **[5:48](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=348)** So, if we say print_r fetch_data and run our code, we see that since the environment is equal to dev up here, fetch_data is equal to fetch_data_fake.
>
> **[6:08](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=368)** If we were to set the environment variable to prod, for example,
>
> **[6:17](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=377)** and run our code.
>
> **[6:19](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=379)** It would print fetching data down here since now fetch_data is equal to this fetch_data_real function that we defined.
>
> **[6:27](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=387)** And that's really all there is to it.
>
> **[6:28](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=388)** Obviously, in a real application, our code would look a little different.
>
> **[6:31](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=391)** But for illustration purposes, this example is fine.
>
> **[6:35](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=395)** And there are many other applications for this sort of function assignment, too.
>
> **[6:39](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-1?u=76281980&t=399)** For example, if you wanted to do stuff like A B test different implementations of a function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (27), let (3), this, (3), this. (2), type. (1)
> **Code Identifiers:** my_function (7), fetch_data (6), fetch_data_real (3), fetch_data_fake (3), functions_as_data (2)
> **CLI Commands:** php (7), make (2)
> **Analogies:** such as (4), for example (4), just like (1)
> **Env Vars:** php (2), api (1)
> **File Paths:** functions_as_data.php (2)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)

#### Functions as data, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=0)** - [Speaker] In this video, we're going to look at another example of an interesting thing that can be done with first class functions.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=5)** Just as we can create an array of numbers, an array of strings, or an array of objects because functions in PHP are first class we can also create an array of functions.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=16)** So why would we want to do something like that?
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=18)** Well, let's say that we have a few different functions that we've created using the variable style syntax here all of which take an argument and make some sort of change to that argument.
>
> **[0:28](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=28)** For example, doubling it, subtracting one from it, or adding three to it, and we want to get a result of applying all of these functions to some number.
>
> **[0:37](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=37)** So for example, if we have a variable called my number and set it equal to something and we want to find out what the result is after we call all of these functions on it the mechanical way of doing that would be something like this.
>
> **[0:50](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=50)** We'd say doubled equals double my number, so this doubled variable holds the result of calling our doubled function on our my number variable then we could say doubled minus one equals subtract one from doubled and finally, we'll just say plus three equals add three to our doubled minus one.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=88)** So this works, but what if we have hundreds, or even thousands, of these functions?
>
> **[1:33](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=93)** Obviously we don't want to have to mechanical call each of these functions on the result of the previous function, so what can we do?
>
> **[1:41](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=101)** Well, because of first class functions what we can do here is define an array of the functions that we defined.
>
> **[1:47](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=107)** So we'll say function array equals and then we'll put the variable names of each of these functions inside this array.
>
> **[1:56](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=116)** So we have double, we have subtract one, and we have add three.
>
> **[2:03](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=123)** Now the first thing to notice is that when we put our functions into the array we don't put parentheses after them as you might be used to seeing.
>
> **[2:10](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=130)** This is something that you'll get used to while mastering functional programming.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=134)** The thing to remember is that when we put parentheses after a function, we're referring to the result of a function instead of the function itself.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=141)** When we want to refer to the function itself we simply use the functions name without any parentheses or arguments after it as we're doing here.
>
> **[2:29](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=149)** So let's get back to our original problem.
>
> **[2:31](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=151)** We now have an array of functions that we want to apply one after the other to some number.
>
> **[2:36](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=156)** Well, the solution now is pretty simple.
>
> **[2:39](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=159)** We can just loop through the functions and apply each one to our number.
>
> **[2:43](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=163)** Now, the code that we're going to write for this isn't the most functional code since it involves mutation, but in an effort not to give you too much too soon we're going to use a bit of procedural code here to prove a point.
>
> **[2:53](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=173)** Later on in the course you'll learn a much more functional version of this code, but for now it's good enough.
>
> **[2:58](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=178)** So what we're going to do is use a four loop to loop over each function in our array and apply it to our my number variable.
>
> **[3:06](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=186)** So we'll say for, I equals zero, I is less than count of function array, and I plus equals one and then inside this four loop we're simply going to say my number equals function array at the index I applied to my number and finally, down here we're going to print the result.
>
> **[3:34](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=214)** We're going to say echo, my number, and add a new line.
>
> **[3:40](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=220)** So now if we run our code by typing PHP functions as data two dot PHP we see that our function array worked.
>
> **[3:51](https://www.linkedin.com/learning/functional-programming-with-php/functions-as-data-part-2?u=76281980&t=231)** Now if you want you can mess around with the order of these functions in the array and see how that changes things and you can also define your own functions and add them to the array and see how that changes things.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (2), finally, (2), this. (1), for, (1)
> **CLI Commands:** php (3), make (1), find (1)
> **Env Vars:** php (3)
> **Analogies:** for example (2)
> **Speakers:** - [speaker] (1)

#### Passing functions as arguments
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=0)** - [Instructor] Now that we've seen a few ways that we can treat functions in the same ways as other types, such as numbers, strings, and objects, the next step is to look at how we can pass functions as arguments to other functions.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=12)** So up until now, you've probably been used to passing arguments into functions with the purpose of specifying what the data is that we're operating on.
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=20)** If we pass two numbers into a function called add, for example, we're specifying the two numbers that we want to add together.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=27)** And likewise for subtract.
>
> **[0:30](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=30)** But what if instead of passing arguments into our function to specify what our data is, we could pass in arguments to specify what was done to our data?
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=39)** In other words, because of first class functions, we're not only allowed to pass data into our functions, but we're allowed to pass functions into our functions as well.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=49)** To illustrate this point, let's say that we have two very simple functions called add and subtract.
>
> **[0:54](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=54)** Each of these takes two arguments and then either adds or subtracts the two numbers.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=59)** What if we had another function where instead of passing in the two numbers to this function, the numbers were fixed, say, two and three.
>
> **[1:06](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=66)** And then we pass in a function that specifies how those numbers should be combined.
>
> **[1:11](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=71)** For example, should they be added, subtracted, multiplied, averaged, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=76)** Well, that's going to look like this.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=77)** We define our function.
>
> **[1:20](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=80)** We'll call it combine_2_and_3.
>
> **[1:25](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=85)** And we'll give it one argument, which we'll call func.
>
> **[1:31](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=91)** And then inside our combine_2_and_3 function, we'll call this func argument, with the arguments two and three.
>
> **[1:40](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=100)** And then of course, we want return the result.
>
> **[1:44](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=104)** So now what we can do is take our add and subtract functions, and pass them into our combine_2_and_3 function like this.
>
> **[1:51](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=111)** We can say combine two and three by adding.
>
> **[1:56](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=116)** And if we run our code, we'll see the result.
>
> **[2:00](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=120)** And we can also change this to pass and subtract.
>
> **[2:07](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=127)** And in that case, we get the result as well.
>
> **[2:10](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=130)** And of course, we can pass in pretty much any other function we want that combines two numbers and returns a number.
>
> **[2:16](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=136)** For example, we could pass in a minimum or a maximum function.
>
> **[2:20](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=140)** We can also write another function like combine two and three that uses different data.
>
> **[2:25](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=145)** As another example, let's write another function that takes a function as an argument, but this time, we'll combine two strings.
>
> **[2:33](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=153)** For this example, let's use our first and last name as the data we'll operate on.
>
> **[2:38](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=158)** So let's define our function, and we'll call it something like combine_names.
>
> **[2:44](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=164)** And it'll be a function that takes a function as an argument, and then we're going to return that function argument called on our first and last name.
>
> **[2:52](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=172)** Now I'm going to use my first and last name here, but please feel free to use your own first and last name in this example.
>
> **[3:00](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=180)** So now that we've got our combined names function, let's think of some ways in which we might want to combine our first and last names.
>
> **[3:07](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=187)** For example, we might just want to append them together into one string, in which case, we can just define a function called something like append_with_space.
>
> **[3:17](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=197)** And this function would take two strings.
>
> **[3:19](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=199)** String one and string two.
>
> **[3:24](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=204)** And then it would return string one, appended to string two.
>
> **[3:33](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=213)** So that's a very simple case.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=215)** Another case might be if we want to make our names uppercase, and append them with a comma in between, with the last name first, and the first name after that.
>
> **[3:43](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=223)** This is how names appear on government forms, for example.
>
> **[3:46](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=226)** So in order to do that, we could define a new function called something like government_form_notation.
>
> **[3:53](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=233)** And that would be a function as well that takes two strings and combines them.
>
> **[4:01](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=241)** And in order to get the result we want, we would say return string to upper.
>
> **[4:07](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=247)** String two, since we want the last name first.
>
> **[4:10](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=250)** And then we'd append a comma and a space.
>
> **[4:13](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=253)** And finally, string to upper with string one.
>
> **[4:20](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=260)** So what we can do now is pass either one of these functions into our combine_names function.
>
> **[4:26](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=266)** Say echo combine_names, government_form_notation, and we'll see that it gives us the result that we're looking for.
>
> **[4:38](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=278)** So that's the basics of passing functions as arguments.
>
> **[4:41](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=281)** But before we move on, there's one more thing to look at, and that's this.
>
> **[4:45](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=285)** So far, we've been defining our functions separately before passing them as arguments.
>
> **[4:50](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=290)** While for the sake of readability, this is often considered a good practice, we can also pass in what are called anonymous functions.
>
> **[4:56](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=296)** And these are basically just unnamed functions that we define on the spot as we need them.
>
> **[5:01](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=301)** So using our existing code as an example, instead of creating a new named function for each type of combination, we could simply define it in place using an anonymous function.
>
> **[5:12](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=312)** So for example, we could to that for our get government form notation.
>
> **[5:16](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=316)** And that would look like this.
>
> **[5:18](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=318)** Inside the parentheses of find names, we could simply say string one and string two.
>
> **[5:27](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=327)** And then we'll just copy the function body from here and paste it.
>
> **[5:31](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=331)** And if we run our code again, we see that we get the exact same result.
>
> **[5:35](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=335)** And the reason that we use anonymous functions is that a lot of times they can be more convenient to write.
>
> **[5:40](https://www.linkedin.com/learning/functional-programming-with-php/passing-functions-as-arguments?u=76281980&t=340)** And this is especially true in some special cases where our desired functionality is so specific that it's not really worth creating a named function for it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (27), pass (12), let (5), this. (4), case, (2)
> **Analogies:** for example (6), such as (1)
> **Code Identifiers:** combine_names (3), government_form_notation (2), append_with_space (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** in other words (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Returning functions
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=0)** - [Instructor] So far we've seen that it's possible to define functions in pretty much the same way we define other things such as strings and numbers and we've also seen that it's possible to pass functions as arguments, again, similar to other types.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=12)** So the next logical thing for us to look at with respect to first class functions is our ability to return functions from other functions.
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=20)** Now the usefulness of first class functions has been kind of limited up until now without this final piece of our first class functions puzzle.
>
> **[0:28](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=28)** This is a place where the flexibility that first class functions give us really starts to shine through.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=33)** First let's try and wrap our heads around the basic concept of functions that return functions.
>
> **[0:38](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=38)** In programming it's common to hear functions referred to as a black box.
>
> **[0:42](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=42)** You put data into the box and you get some data out.
>
> **[0:45](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=45)** If we're talking about a function called double for example, we put one number into the box, say five, and we get another number out, in this case 10.
>
> **[0:55](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=55)** Or if we're talking about a function called uppercase, we put a string into the box, say hello all in lower cases, and we get the same string out of the box in upper case.
>
> **[1:05](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=65)** Now since PHP has first class functions, meaning that it treats functions in the same way as it treats strings and numbers, it's possible in PHP to have a black box that returns another black box.
>
> **[1:18](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=78)** This other black box then behaves in the same way as a regular function.
>
> **[1:23](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=83)** We put data in and we get some different data out.
>
> **[1:26](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=86)** And this is exactly what we're doing when we return functions.
>
> **[1:29](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=89)** So when we have a function that returns another function, it might help to think of it as a function creator or a function factory.
>
> **[1:36](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=96)** So let's take a look at the syntax for defining a function that returns another function.
>
> **[1:41](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=101)** This is the part that sort of unnerves people the most the first time they look at it, but bare with me, once you understand it, it'll be easy.
>
> **[1:49](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=109)** So let's do the simplest possible example.
>
> **[1:51](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=111)** Let's define a function that returns a function that prints something to the console.
>
> **[1:56](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=116)** I mentioned that it's often helpful to think of these kind of functions as function creators, so let's call our function create_printer.
>
> **[2:06](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=126)** And we're going to say create_printer is a function that doesn't take any arguments and it's going to return another function that also doesn't take any arguments.
>
> **[2:15](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=135)** And this function that it returns is simply going to print Hello functional to the console.
>
> **[2:24](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=144)** And now what we can do with this function is we can say my_printer equals create_printer with parentheses after it and then we can simply call my_printer and as you can see it'll print something to the console.
>
> **[2:39](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=159)** I've called this rule returning_function so we'll say PHP returning_functions.php and we see that it prints Hello Functional to the console.
>
> **[2:49](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=169)** So that's a very simplistic example, but now that we have a slightly better idea of how this whole returning functions thing works, let's take a look at a more useful example.
>
> **[2:59](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=179)** First let's say that we have a program with three functions, double, which takes a number and doubles it, function x, return, x times two.
>
> **[3:13](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=193)** We have a function called triple which takes an argument, x, and triples it, return x times three, and we have a function called quadruple which as you may have guessed takes an argument X and returns X times four.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=215)** So let's say that we have these three functions and that we use these functions throughout our program to manipulate numbers in a readable way.
>
> **[3:41](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=221)** For example, calculating the diameter of a circle from its radius.
>
> **[3:45](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=225)** We could do diameter equals double radius.
>
> **[3:51](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=231)** Something like that.
>
> **[3:55](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=235)** Well the first thing that you'll notice is that our code has quite a bit of repetition in it which is usually a sign that our code could use some refactoring.
>
> **[4:03](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=243)** So what if instead of having to define several different functions with only slightly different definitions we could have a function that created these variations for us.
>
> **[4:12](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=252)** This sounds like a job for first class functions.
>
> **[4:15](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=255)** What we're picturing here is a function.
>
> **[4:17](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=257)** We'll call it something like create_multiplier.
>
> **[4:21](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=261)** And this function will take a number as an argument and it's going to return a function that takes an argument as well and this function that it returns simply takes the inner argument and multiplies it by the outer argument.
>
> **[4:36](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=276)** So right off the bat you might be able to see how this create_multiplier function would be able to recreate the double, triple, and quadruple functions that we defined up here.
>
> **[4:46](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=286)** If we passed in three for Y for example, the function that it would return would be identical to our triple function.
>
> **[4:52](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=292)** And likewise if it's four.
>
> **[4:54](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=294)** And there's just one last thing we have to do here in order to make this work and that's to add a keyword use here and Y in parentheses.
>
> **[5:04](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=304)** And we'll talk much more about this in a coming video but for now all you need to know is that in order for this function that we're returning to have access to this outer argument here we need to add use y here.
>
> **[5:16](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=316)** Again, we'll talk about that in a later video.
>
> **[5:19](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=319)** So there we have it.
>
> **[5:20](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=320)** Now that we have our create_multiplier function, let's use it to replace our existing implementations of double, triple, and quadruple.
>
> **[5:27](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=327)** So I'm just going to delete these and down here we'll define them again.
>
> **[5:34](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=334)** So for double all we have to do is say create_multiplier and pass two to it.
>
> **[5:41](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=341)** For triple, we can just pass three to create_multipler, create_multiplier(3) and finally for quadruple we say create_multiplier(4).
>
> **[5:56](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=356)** So we can see here that we've increased code reuse a lot, and this is one of the major benefits of functional programming and first-class functions.
>
> **[6:04](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=364)** The functions that we replaced here were very small and simple, but the same technique that we used here can be used to replace repeated code even when dealing with larger functions that use much more complex logic.
>
> **[6:15](https://www.linkedin.com/learning/functional-programming-with-php/returning-functions?u=76281980&t=375)** We'll see some examples of this later on in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (30), let (9), pass (3), case. (1), return, (1)
> **Code Identifiers:** create_multiplier (6), create_printer (3), my_printer (2), returning_function (1), returning_functions (1)
> **Analogies:** for example (3), such as (1), similar to (1), think of it as (1)
> **CLI Commands:** php (4), make (1)
> **Env Vars:** php (3)
> **Definitions:** is a  (3)
> **File Paths:** returning_functions.php (1)
> **Speakers:** - [instructor] (1)

#### Closure
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=0)** - [Instructor] In a previous video, we talked about how in PHP it's possible to return functions from other functions, and saw some possible applications of doing this in our code base.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=10)** Returning functions from other functions leads us to another very important concept in PHP, and this is something called closure.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=17)** So, what is closure exactly?
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=20)** Basically, closure means that when we define a function that returns another function, the function that we return sometimes still requires access to the scope that it was defined in.
>
> **[0:30](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=30)** In other words, the internal scope of the function that returned it.
>
> **[0:34](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=34)** Now, in most other commonly used languages that support first class functions, such as JavaScript and Python, this happens automatically.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=41)** But in PHP, there's a little bit of extra notation we have to include to make this happen.
>
> **[0:46](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=46)** To see what I mean, let's code out an example that demonstrates closure.
>
> **[0:51](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=51)** The first thing we're going to do is create a function called create_printer, just like we did in the previous video.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=58)** And this function is going to take no arguments.
>
> **[1:00](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=60)** And inside this function, let's define a variable called something like my_favorite_number.
>
> **[1:09](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=69)** And then return a function that uses this variable.
>
> **[1:13](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=73)** So we'll say return function with no arguments and this function is going to echo, "My favorite number is my_favorite_number."
>
> **[1:30](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=90)** And if we use this create_printer function now by saying my_printer equals create_printer, and then try and use my_printer, we'll see something a little strange happen.
>
> **[1:45](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=105)** Say php, the name of this file I've called closure.php.
>
> **[1:51](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=111)** We'll see that instead of printing the message, PHP gives us this undefined variable error.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=117)** So, what happened exactly?
>
> **[1:58](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=118)** Well, this is a good example of what happens without closure.
>
> **[2:02](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=122)** Since the my_printer function that we create is outside the scope of our create_printer function, it doesn't have access to the my_favorite_number variable that it needs to print the correct message.
>
> **[2:13](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=133)** So the question now is how do we tell PHP that we want the function we returned to still have access to this my_favorite_number variable in the outer scope?
>
> **[2:23](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=143)** Well, if you were paying attention in the last video, there was a spoiler on how this is done.
>
> **[2:27](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=147)** What we need to do is, when we return our function here, we need to add a little clause after the arguments that looks like this.
>
> **[2:34](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=154)** We say use and then the variable or variables, we can have as many as we want, that our function needs access to.
>
> **[2:42](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=162)** In this case it's just my_favorite_number.
>
> **[2:46](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=166)** And that should be all we need.
>
> **[2:48](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=168)** If we run our code again, we see that it now prints the correct message to the console with the value of the variable from the scope our function was returned from.
>
> **[2:58](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=178)** And an interesting thing to note here is that even though our my_printer function has access to the my_favorite_number variable through closure, besides that we don't have any access whatsoever to my_favorite_number outside of our create_printer function.
>
> **[3:11](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=191)** So, for example, if we were to say echo my_favorite_number, this would give us an error saying that my_favorite_number is undefined.
>
> **[3:18](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=198)** And this is exactly what closure is.
>
> **[3:20](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=200)** When we return a function, we make sure that it still has access to the scope that it was returned from.
>
> **[3:26](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=206)** This is a very important concept since without closure, returning functions would be pretty useless in most cases.
>
> **[3:32](https://www.linkedin.com/learning/functional-programming-with-php/closure?u=76281980&t=212)** So that's just something to remember whenever you're returning a function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (21), let (2), from. (2), this. (1)
> **Code Identifiers:** my_favorite_number (9), create_printer (5), my_printer (4)
> **CLI Commands:** php (7), make (2), python (1)
> **Env Vars:** php (5)
> **Cross-References:** previous video (2), we talked about (1), in the last (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **Analogies:** such as (1), just like (1), for example (1)
> **File Paths:** closure.php (1)

#### Higher-order functions
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=0)** - [Instructor] We've spent quite a bit of time in previous videos talking about first class functions in PHP, we've seen how PHP treats functions in much the same way as strings, numbers, and arrays, and how this allows us to do things like pass functions as arguments and return functions.
>
> **[0:15](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=15)** Now there's actually a term for functions either take functions as arguments or return functions.
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=20)** We call them higher order functions and using them in our code can provide some amazing flexibility and reusability.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=27)** To demonstrate this fact we're going to look at some examples of higher order functions and what they can do.
>
> **[0:34](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=34)** So the first thing we're going to look at is the problem of checking arguments in PHP.
>
> **[0:38](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=38)** It happens quite often in programming that we want to make sure that our arguments meet certain criteria and while we have type hints in PHP to help us make sure that the arguments we pass to the function are the right types, there are other types of criteria that we might want to enforce in our code.
>
> **[0:54](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=54)** For example we might want to make sure that the number we pass into a function is positive or that a string we pass in is longer than a certain length, et cetera.
>
> **[1:03](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=63)** There are many different situations like this that we might run into in our programs.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=67)** Now normally when we perform these kind of checks, they make their way into the body of our function.
>
> **[1:13](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=73)** Let's take the simple example of writing a division function a function that takes two arguments and divides the first argument by the second argument.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=81)** That would look something like this, divide equals function X, Y, return X divided by Y.
>
> **[1:36](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=96)** Now obviously we'd like to prevent the second argument here from being zero, so our usual reflex is to add that condition to the function body like this.
>
> **[1:44](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=104)** We say if Y is equal to zero.
>
> **[1:53](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=113)** We print something like Cannot divide by zero and then we'll just return null.
>
> **[2:02](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=122)** Now this works and this pattern of argument checking is quite common in many code bases.
>
> **[2:07](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=127)** But now what we're doing is cluttering up our divide function with argument checking logic.
>
> **[2:12](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=132)** The single responsibility principle, a very important principle to follow when writing clean code states that each piece of code should have only one responsibility.
>
> **[2:22](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=142)** In other words if describing what a given piece of code does requires you to name two or more things it's usually a sign that you should refactor.
>
> **[2:31](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=151)** In our case our divide function is not only returning the quotient of two numbers.
>
> **[2:36](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=156)** But it's also worrying about checking that the arguments fit a specific criteria.
>
> **[2:41](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=161)** So let's see how we can improve this code by using higher-order functions.
>
> **[2:46](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=166)** Our basic plan of attack here is to have our divide function only worry about returning the result of division, and instead of including the argument checking logic inside of the divide function we're going to create another function that we can use to sort of wrap our divide function.
>
> **[3:02](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=182)** This function will return another safe version of our original function.
>
> **[3:08](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=188)** So once it's done that'll look something like this.
>
> **[3:10](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=190)** We'll be able to say something like divide safe equals second arg isn't zero wrapping our original divide function, and then when we call this divide safe function with the second argument as zero.
>
> **[3:30](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=210)** Instead of getting an error we'll see it print cannot divide by zero the the console.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=215)** Otherwise if we pass a perfectly legal argument it'll give us the result we're looking for.
>
> **[3:41](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=221)** Now this may or may not make sense to you yet.
>
> **[3:43](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=223)** So I'm just going to walk you through what implementing this second arg isn't zero function will look like.
>
> **[3:49](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=229)** So we're going to start off by defining second arg isn't zero and this is going to be a function that takes another function as an argument and then what we're going to do is return another function and to allow us to use a variable number of arguments we're going to use the splat operator here.
>
> **[4:06](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=246)** If you're not familiar with this, we're going to talk about this in a coming video as well, and we'll say args and then inside this function that we're returning, we're going to perform the argument check so in our case we want to check if the second argument, represented here by args index one.
>
> **[4:25](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=265)** We'll say if args index one is equal to zero
>
> **[4:35](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=275)** and then inside this if statement we'll copy and paste what we had above and if the second argument isn't zero, we're going to simply return the function we pass with the args using the splat operator again, and that's basically what our wrapper function will look like, again don't worry if this doesn't quite make sense yet.
>
> **[5:00](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=300)** It'll sink in throughout the rest of the course.
>
> **[5:03](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=303)** So now we've defined the second arg isn't zero function and we've seen how to use it.
>
> **[5:08](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=308)** Let's just print the result here to ensure that it works when the second arg isn't zero and we'll run our code by typing PHP higher order functions.PHP and we see that we've actually gotten an error.
>
> **[5:26](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=326)** Now looking back at our second arg isn't zero function maybe you'll be able to spot what's causing our error?
>
> **[5:34](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=334)** What's going on here is that inside this function we're returning we're using this func argument that's coming from an outside scope so the function we're returning no longer has access to this once we return it.
>
> **[5:47](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=347)** In order to fix this we just have to say use func and then save it and run it again.
>
> **[5:56](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=356)** And we see that we got the correct result here and if we change this to zero, we'll see that it printed cannot divide by zero as well as null.
>
> **[6:09](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=369)** Now this has been one example of using higher-order functions to perform argument checks.
>
> **[6:13](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=373)** Now obviously as I mentioned before there are many other argument checks that we might want to perform on our code.
>
> **[6:19](https://www.linkedin.com/learning/functional-programming-with-php/higher-order-functions?u=76281980&t=379)** But now we know that we can create higher-order functions to do this for us instead of incorporating the logic directly into the body of our functions, as we were doing originally, and last but not least we can delete the if statement from our divide function, and we see that it still runs exactly as we wanted it to.

> [!info]- Semantic Content
>
> **Code Keywords:** function (29), pass (6), let (3), this, (2), this. (2)
> **CLI Commands:** php (6), make (6)
> **Env Vars:** php (6)
> **Definitions:** in other words (1), we call this (1)
> **File Paths:** functions.php (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Arrow functions in PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=0)** - [Instructor] So far, we've seen that we can assign functions to variables, pass them as arguments to other functions, and return them from functions.
>
> **[0:08](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=8)** And this provides us, as we've already seen and will continue to see, with some great benefits over the old inflexible way that procedural and object oriented programming tend to treat functions.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=18)** However, as one might expect, it also drastically increases the use of functions across our code base.
>
> **[0:24](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=24)** And because of this increase, especially in cases where the body of our functions are only one line, it'd be nice for us to have a more compacted version of defining functions than using the function keyword, the return keyword, and when we need to use closure for some variables, the use keyword.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=41)** Well as it happens, PHP does provide us with a different, more compact syntax for defining smaller functions.
>
> **[0:48](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=48)** And this is something called arrow functions, and they're also called short closures.
>
> **[0:53](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=53)** So what does this arrow function syntax look like exactly?
>
> **[0:56](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=56)** Well, instead of using the full function keyword to define a function, arrow functions simply us fn.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=62)** Followed by parentheses with however many arguments we want inside it.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=67)** Then instead of enclosing the body of our function in brackets, we simply use an arrow, an equal sign followed by a greater than sign, followed by whatever we want to return from our function without the return keyword.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=81)** So this function here would simply take two numbers and return the sum.
>
> **[1:25](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=85)** And that's all there is to it.
>
> **[1:27](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=87)** We can use this arrow function syntax in all the same circumstances that we use the somewhat larger regular syntax in previous videos.
>
> **[1:34](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=94)** We can assign these functions to variables, we can pass them as arguments, and we can return them from functions.
>
> **[1:40](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=100)** And in most cases, it's a lot less verbose than if we had used the regular function syntax.
>
> **[1:46](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=106)** So besides the syntax and usage of arrow functions, there are two big things to remember.
>
> **[1:51](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=111)** First, the body of arrow functions is only allowed to be one expression long.
>
> **[1:56](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=116)** The value of this expression is then automatically returned from the function when it's called.
>
> **[2:02](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=122)** The second thing to remember is that arrow functions automatically use closure over variables.
>
> **[2:07](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=127)** Maybe you'll remember from a previous video that if we return a function and want it to still have access to the scope that it was returned from, we have to use the use keyword.
>
> **[2:18](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=138)** With arrow functions however, these variables are automatically closed over.
>
> **[2:23](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=143)** So I think it's worth looking at an example of that last point.
>
> **[2:26](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=146)** If we take this create multiplier function that we used as an example in a previous video, remember that we had to add this use clause here in order for the function that we returned to have access to this y argument.
>
> **[2:38](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=158)** However, if we were to rewrite this function using arrow function syntax, we could simply do something like this.
>
> **[2:46](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=166)** We could say return fn x and then for the body of our arrow function we could say x times y without having to worry about adding the extra use clause at the end.
>
> **[3:01](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=181)** So if we test this out by saying double equals create multiplier two and then say echo double and we'll double 18.
>
> **[3:15](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=195)** And if we run our code now.
>
> **[3:18](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=198)** PHP arrow functions, we see that it works perfectly and that it's much more concise now than what it used to be.
>
> **[3:26](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=206)** And personally I find this a very nice feature because frankly I have a habit of forgetting to add the use keyword when I'm returning functions with closure.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/arrow-functions-in-php?u=76281980&t=215)** And that's one of the nice things about arrow functions is that they take care of that for you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), pass (2), fn (2), continue (1), from, (1)
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2)
> **Cross-References:** previous video (2)
> **Speakers:** - [instructor] (1)


### 4. 3. PHP: The Functional Parts

#### Working with arrays, functionally
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=0)** - [Instructor] So one of the nice things about learning functional programming with PHP is that the central concepts of functional programming, which we looked at in previous videos, have a great deal of native support in the language itself.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=12)** In general, PHP makes it quite easy to apply many of these core functional programming concepts.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=18)** One of the areas where this fact is especially true is in working with arrays.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=23)** PHP provides a host of built-in functions and functionality that make working with arrays in a functional way incredibly easy.
>
> **[0:30](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=30)** Built-in functions such as array_map, array_filter, array_reduce, and sort make the formally complicated task of transforming array data almost trivial.
>
> **[0:40](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=40)** Now, as we're studying these functions and learning about what they can do, you may start to wonder how these functions work under the hood.
>
> **[0:47](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=47)** The sort function, for example, what sorting algorithm does it actually use to sort our array?
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=52)** Quick sort, bubble sort, merge sort?
>
> **[0:55](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=55)** Well, the beautiful thing is from our point of view it doesn't matter.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=59)** Functional programming, as we saw in previous videos, is meant to free you from having to worry about how things are done and instead just focus on what things are.
>
> **[1:09](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=69)** So if you want your array of names sorted alphabetically, you can just say so.
>
> **[1:13](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=73)** You don't have to worry about all the operations going on behind-the-scenes.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=77)** Anyway, that's just something to keep in mind as you learn about PHP's many built-in functions that help you manipulate data.
>
> **[1:24](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=84)** If you find yourself worrying about how something works, it might be a fun mental exercise, but at the end of the day, you can just sit back and relax because as a functional programmer, that's not really our job.
>
> **[1:35](https://www.linkedin.com/learning/functional-programming-with-php/working-with-arrays-functionally?u=76281980&t=95)** Over the course of the next few videos, we're going to examine PHP's built-in support for functional programming.

> [!info]- Semantic Content
>
> **CLI Commands:** php (5), make (2), find (1)
> **Env Vars:** php (5)
> **Code Identifiers:** array_map (1), array_filter (1), array_reduce (1)
> **Analogies:** such as (1), for example (1)
> **Code Keywords:** function (1)
> **Cross-References:** as we saw (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### The spread operator and array_merge
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=0)** - [Instructor] PHP 7, and in particular version 7.4, offers many syntax improvements over its predecessors.
>
> **[0:07](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=7)** In addition to the arrow function syntax, which we covered in a previous video, PHP 7.4 provides us with a new syntax called the splat operator that's tremendously helpful for dealing with arrays and arguments.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=18)** And that's something we do a lot of when doing functional programming in PHP.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=23)** To see what the splat operator looks like and how it works, let's imagine that we have two arrays, both containing some sort of data, like people's names.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=33)** What if we wanted to combine these two arrays into one as well as maybe add some other new elements into the final array?
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=39)** Well, that's exactly what the splat operator helps us do.
>
> **[0:42](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=42)** Instead of having to deal with the complexities of looping through each array, and pushing the elements onto a new array, we can simply combine the two like this.
>
> **[0:53](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=53)** We can say $all_names, equals, and then brackets, and dot, dot, dot $names_1, dot, dot, dot $names_2.
>
> **[1:06](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=66)** And these three dots here are the splat operator that we've been talking about.
>
> **[1:13](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=73)** So let's print this $all_names array just to see what it looks like so far.
>
> **[1:22](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=82)** And if we look at the output, we can see that the $all_names array contains the names from both $names_1 and $names_2.
>
> **[1:29](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=89)** And that's exactly what the splat operator helps us with.
>
> **[1:33](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=93)** So let's take this a step further.
>
> **[1:34](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=94)** If we wanted to add in more elements between our two arrays, between $names_1 and $names_2, we could do that like this.
>
> **[1:43](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=103)** We could put a name at the beginning of our new array.
>
> **[1:47](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=107)** We could put names in between, and we can add names on to the end, just like this.
>
> **[1:55](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=115)** And if we print our array again, we see that our $all_names array contains all the names that we wanted it to with a much easier syntax.
>
> **[2:04](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=124)** Without the splat operator, what we would have had to do is create $all_names as an empty array, and then push elements onto it one by one.
>
> **[2:12](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=132)** And for this part here, we'd have to create a for loop and loop through each element of $names_1 while pushing it onto our $all_names array.
>
> **[2:19](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=139)** Definitely not ideal, this is much shorter and more concise.
>
> **[2:24](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=144)** So the splat operator is great for concatenating normal arrays.
>
> **[2:27](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=147)** But what about if we're working with string keyed arrays?
>
> **[2:30](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=150)** For example, what if we have two arrays.
>
> **[2:33](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=153)** The first array represents a person, we have their name and age.
>
> **[2:37](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=157)** And the second array represents career data that we might have about a person such as their job title and their salary.
>
> **[2:43](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=163)** What if we wanted to combine these two arrays into one $person_with_career_data array.
>
> **[2:49](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=169)** that contains all the properties and values from our other two arrays?
>
> **[2:55](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=175)** Well, unfortunately, the splat operator doesn't work for that.
>
> **[2:58](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=178)** For example, we couldn't do splat $person_data.
>
> **[3:04](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=184)** And then splat $career_data, we'd get an error if we tried that.
>
> **[3:08](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=188)** However, there is another fairly nice way to do this kind of functionality in PHP.
>
> **[3:13](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=193)** And that's by using a function called array_merge.
>
> **[3:18](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=198)** So what array_merge does is it allows us to take two or more arrays, either regular arrays or string keyed arrays, and combine them into one array that contains all the keys and values from those arrays.
>
> **[3:29](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=209)** So in order to combine our $person_data and $career_data, we just have to say array_merge $person_data, $career_data.
>
> **[3:38](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=218)** And again, what this does is it creates a new object with all the properties from $person_data and $career_data.
>
> **[3:46](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=226)** Let's print this out just for the sake of demonstration.
>
> **[3:53](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=233)** And I'm going to delete this other print statement here.
>
> **[3:58](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=238)** So if we run our code again, we see that array_merge successfully combined the data from both our $person_data array and our $career_data array.
>
> **[4:07](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=247)** Something to note here is that when we're using array_merge, if any of the objects that we're emerging have keys in common.
>
> **[4:13](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=253)** For example, if both the $person_data and $career_data had a name key, we'll add a name key in here just for demonstration.
>
> **[4:25](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=265)** In this case, whichever of the arrays is passed last to array_merge will overwrite the ones that come before it.
>
> **[4:32](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=272)** So if we run our code again, we see that $person_with_career_data contains the name from our $career_data array instead of the name from our $person_data array.
>
> **[4:42](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=282)** That's just something to keep in mind.
>
> **[4:45](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=285)** So that's how array_merge works.
>
> **[4:47](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=287)** It's very nice when you have to combine arrays in a nice neat way.
>
> **[4:50](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=290)** But going back to the splat operator that we talked about earlier, not only can be used for combining regular arrays, but it can also be used to work with a function's arguments.
>
> **[4:59](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=299)** And here's the how we do that.
>
> **[5:01](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=301)** First of all, I'm going to delete this print statement.
>
> **[5:04](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=304)** And let's say that we have an add function, but instead of taking a specific number of arguments, it takes any number of arguments you want and adds them together.
>
> **[5:13](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=313)** So for example, we could pass two numbers, 10 numbers, or 100 numbers, and it would give us the sum of all those arguments.
>
> **[5:20](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=320)** Now normally in PHP, we'd have to use function get args to get all the arguments that the user passed in, and then add them together.
>
> **[5:27](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=327)** But the splat operator gives us something that, in my opinion, is a nicer way of doing this.
>
> **[5:33](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=333)** Instead of using function get args, what we can do is we can simply put the splat operator, three dots, and then $args, inside the parentheses, and at this point, $args is an array of whatever arguments we passed in.
>
> **[5:48](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=348)** So what we can do to get the sum of all our arguments is we can say, $sum equals zero, and then simply loop through each of our arguments.
>
> **[5:57](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=357)** Again, this isn't the most functional way to do it, but just for this sake of demonstration, I'm going to do it this way.
>
> **[6:03](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=363)** We're going to loop through each of our args, and add it to the $sum.
>
> **[6:16](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=376)** And finally, we're going to say return $sum.
>
> **[6:22](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=382)** So now if we print out the result of passing a bunch of arguments to $add, we'll say one, two, three, four, five.
>
> **[6:32](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=392)** And run our code.
>
> **[6:35](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=395)** We see that it works correctly.
>
> **[6:36](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=396)** And we can just keep adding as many arguments as we want.
>
> **[6:43](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=403)** So that's how to use the splat operator to get an array of arguments passed into a function.
>
> **[6:49](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=409)** The last use of the splat operator we're going to talk about now is to pass the values of an array as arguments to a function.
>
> **[6:56](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=416)** So if we were to take these numbers, and put them into an array, called $numbers_to_add.
>
> **[7:08](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=428)** If we were to simply pass this $numbers_to_add array to our $add function, we'd get an error since $add would think that this entire array was our first argument.
>
> **[7:18](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=438)** But what we can do instead is use a splat operator to tell PHP to pass the contents of this array as arguments to a function instead of passing the array itself as an argument.
>
> **[7:30](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=450)** And that's all there is to it.
>
> **[7:32](https://www.linkedin.com/learning/functional-programming-with-php/the-spread-operator-and-array-merge?u=76281980&t=452)** You'll be seeing the splat operator more later on when we work more with returning functions.

> [!info]- Semantic Content
>
> **Code Identifiers:** person_data (7), career_data (7), array_merge (7), all_names (6), person_with_career_data (2)
> **Code Keywords:** function (10), let (5), this. (4), pass (4), delete (2)
> **Analogies:** for example (4), imagine (1), just like (1), such as (1)
> **CLI Commands:** php (6)
> **Env Vars:** php (6)
> **Versions:** php 7 (2), version 7 (1)
> **Cross-References:** we covered (1), previous video (1), we talked about (1)
> **Definitions:** is a  (1), is an  (1)

#### Mapping
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=0)** - [Instructor] The next functional operation we're going to be talking about for working with arrays is called mapping.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=5)** And to do it, we'll be making use of one of PHP's built-in array functions, a function called array map.
>
> **[0:11](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=11)** So quite often, it happens that we have an array of data and we want to convert each of the individual elements in the array to some other form.
>
> **[0:19](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=19)** For example, we might have an array of numbers and we want to double all the numbers in the array.
>
> **[0:24](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=24)** Or we might want to convert an array of inch measurements into an array of centimeter measurements.
>
> **[0:29](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=29)** Or we might have an array of person objects with name, age, and job attributes, and maybe a lot more data as well, and we want to convert this data into an array that contains only the people's names.
>
> **[0:40](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=40)** The typical way of doing this, and the way that many of us first learn how to do it was to use a for loop and an index variable to loop through all the elements in an array and push modified elements onto a new array or worse, modify the elements in place.
>
> **[0:55](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=55)** However, as many of us know, this can very easily lead to bugs, especially as the body of the for loop gets bigger and more complex.
>
> **[1:03](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=63)** Well fortunately for us, PHP provides a much easier, cleaner, and more functional way of doing this, using its built-in array map function.
>
> **[1:11](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=71)** Array map is a function that we can call by passing two arguments.
>
> **[1:15](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=75)** The first argument we pass is some function that we want to apply to each element in the array, which is passed as the second argument.
>
> **[1:23](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=83)** Array map then returns another array that contains the return values of the function for each element in our original array.
>
> **[1:30](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=90)** So in other words, it takes each element and maps it to the return value of the function that we give it.
>
> **[1:37](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=97)** If this function is something like double for example, it will return a new array where each of the numbers has been doubled.
>
> **[1:43](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=103)** So there is one thing that's important to note about the array map function, and many of the other array functions that we'll look at in this course.
>
> **[1:51](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=111)** And there are some exceptions, but I'll point those out when we come to them.
>
> **[1:54](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=114)** In typical functional fashion, it doesn't actually change the original array that we're calling array map on.
>
> **[2:00](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=120)** Instead it returns a modified copy.
>
> **[2:03](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=123)** So just calling array map on an array for example, without defining another constant to hold the result would essentially do nothing.
>
> **[2:10](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=130)** That's just something to keep in mind.
>
> **[2:13](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=133)** So earlier in the video, I mentioned a few examples of how array map might be used in our programs.
>
> **[2:18](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=138)** Let's go through an example to see what using array map looks like in code.
>
> **[2:23](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=143)** So first, let's say that we have an array of numbers and we want to make some sort of change to all the elements in the array.
>
> **[2:28](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=148)** The example I gave at the beginning of the video was doubling all the elements in the array.
>
> **[2:33](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=153)** The typical procedural way of doing this again, would be to create an empty array, called doubled numbers, and then to push modified elements onto this array using a for loop.
>
> **[2:46](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=166)** Now this approach works, and it's not necessarily a bad way of doing it, but the main problem here is readability and conceptual purity.
>
> **[2:53](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=173)** If we want to double all the numbers in an array, we shouldn't be forced to worry about indexing and array lengths, and off-by-one errors.
>
> **[3:01](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=181)** We should be able to program in a way that allows us to simply specify what it is we want instead of how to compute the result.
>
> **[3:08](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=188)** And that's exactly what functional programming allows us to do.
>
> **[3:11](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=191)** So let's look at how we can do this same thing in a functional way.
>
> **[3:15](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=195)** So in order to double all these using the array map function what we're going to do first is write a function called double which simply takes an argument, x and doubles it.
>
> **[3:28](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=208)** Return, x times 2.
>
> **[3:31](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=211)** All we have to do now, is to find a new variable, we'll call it doubled numbers, and call the array map function on our numbers array with the double function that we just defined.
>
> **[3:43](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=223)** So we'll say, array map double numbers.
>
> **[3:51](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=231)** And finally, let's print this doubled numbers array.
>
> **[3:57](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=237)** If we run our code now, we see that it works beautifully with the added benefit that it's now much easier to read and maintain.
>
> **[4:07](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=247)** This to me is so much cleaner than if we were to do a for loop and have to worry about indexing.
>
> **[4:12](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=252)** And something to keep in mind as well, is that for this double function, since it's fairly small, we could simply use an arrow function like this.
>
> **[4:20](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=260)** So we say fnx, and return x times 2.
>
> **[4:26](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=266)** And if we run our code again, we see that that works just as well.
>
> **[4:30](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=270)** In fact we could even cut out the middle man here, and define our arrow function right inside our array map.
>
> **[4:37](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=277)** Say fnx, x times 2.
>
> **[4:44](https://www.linkedin.com/learning/functional-programming-with-php/mapping?u=76281980&t=284)** And we see that that works just as well.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (4), this, (2), pass (1), return, (1)
> **CLI Commands:** php (2), make (1), find (1)
> **Definitions:** is called (1), is a  (1), in other words (1)
> **Analogies:** for example (3)
> **Env Vars:** php (2)
> **Warnings:** keep in mind (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=0)** - [Instructor] The next important operation that we can perform on arrays is filtering.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=4)** And to do this in PHP, we use a built-in function called array_filter.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=10)** array_filter is used when you want to find all of the elements in an array that fit some kind of criteria.
>
> **[0:15](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=15)** For example, if we have an array of numbers and we want to get all the numbers from it that are even, or if we have an array of employee data and we want to find the employees from this array that make more than a certain amount per year, these are things that filter can help us with.
>
> **[0:30](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=30)** The syntax of array_filter is similar to the syntax of array_map.
>
> **[0:34](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=34)** We call it by passing a function and the array we want to filter.
>
> **[0:38](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=38)** But there's an important difference here.
>
> **[0:40](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=40)** With array_filter, the order of the arguments is reversed from what we did with array_map with the array argument being passed first, and the function argument being passed second.
>
> **[0:51](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=51)** Other than that, the main difference between array_filter and array_map is the type of function that we pass into it.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=58)** You see, with array_map, we passed in a function that returns a value for each element in an array.
>
> **[1:03](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=63)** The return value of this function represented what the element became in our new array.
>
> **[1:08](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=68)** On the other hand, for array_filter, we pass it a function that returns a Boolean, either true or false, for each element.
>
> **[1:16](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=76)** If the function that we pass returns true for a given element, then that element is included in the final array.
>
> **[1:22](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=82)** Otherwise, it's left out.
>
> **[1:25](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=85)** Let's look at a few examples of what using filter looks like.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=88)** For our first example, let's say we have a simple array of numbers and we want only the even numbers from the array.
>
> **[1:34](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=94)** The typical procedural way of doing this would be something like this.
>
> **[1:37](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=97)** We create an empty array called even numbers and then we write a for loop that loops through each of the numbers in our numbers array and that would look like this, for ($i = 0; $i < count($numbers); $i += 1).
>
> **[2:00](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=120)** And then inside here, we test if a number is even.
>
> **[2:02](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=122)** So we could say if numbers at index i module list two is equal to zero, and this is how we test if a number is even if it doesn't have a remainder when it's divided by two.
>
> **[2:17](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=137)** And if it is even, then we append that number to our even numbers array.
>
> **[2:23](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=143)** $even_numbers[] = $numbers[$i]; And again, doing filtering this way works, but it's not the cleanest way to go about it.
>
> **[2:36](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=156)** We shouldn't have to worry about indexing and stuff when all we want is just to get a few elements that fit a certain criteria from an array.
>
> **[2:43](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=163)** So let's look at the functional way of doing this using array_filter.
>
> **[2:48](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=168)** The first thing we're going to do is define a function called is_even, and that'll simply take an argument and return whether or not that argument, module list two, is equal to zero.
>
> **[3:03](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=183)** And once we've done that, it's pretty straightforward.
>
> **[3:05](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=185)** We simply define an array called even_numbers and use array_filter, and we're going to pass the array that we want to filter, in this case, it's numbers as well as the is_even function that we just defined.
>
> **[3:21](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=201)** And finally, let's print this even_numbers array.
>
> **[3:27](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=207)** If we run our code now, we see that we got all the even numbers from our array just like we wanted with the added benefit that it's now much cleaner to look at.
>
> **[3:37](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=217)** And something to note here is that when we call array_filter on an array, it leaves all the elements at their original index.
>
> **[3:44](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=224)** So if our number four is at index four in the original numbers array, which it is in this case, then in the filtered array, the number four will still be at index four.
>
> **[3:54](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=234)** In other words, there are now gaps in our filtered array wherever an element was filtered out.
>
> **[4:00](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=240)** If this isn't what we want, we can remove those gaps by wrapping our array filter statement with another function called array_values, which simply takes the values out of our filtered array and gives us an array without the gaps.
>
> **[4:19](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=259)** And if we run our code, we see that we now have exactly what we want.
>
> **[4:24](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=264)** Another thing to note here is that it's not necessary for us to define is_even as a separate function before we pass it to array_filter.
>
> **[4:31](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=271)** We could just as easily write it as an anonymous function inside the parenthesis of array_filter just like we did with array_map.
>
> **[4:37](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=277)** And that would look like this.
>
> **[4:40](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=280)** I'm just going to skip straight to using an arrow function here.
>
> **[4:44](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=284)** We'll say fn($x) => $x module list two is equal to zero.
>
> **[4:54](https://www.linkedin.com/learning/functional-programming-with-php/filtering?u=76281980&t=294)** And if we run our code again, we see that we get the exact same result.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), pass (5), let (4), module (3), this. (2)
> **Code Identifiers:** array_filter (11), array_map (5), even_numbers (3), is_even (3), array_values (1)
> **CLI Commands:** find (2), php (1), make (1)
> **Analogies:** just like (2), for example (1)
> **Env Vars:** php (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Passing keys to array functions
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=0)** - [Instructor] Now that we've seen the basic use cases for array map and array filter, one thing that we sometimes need to do when we're working with these functions is get access to the key or index of the current element that we're looking at.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=12)** As we've seen previously, by default array map and array filter provide the actual elements themselves, the array values, to whatever function we pass.
>
> **[0:22](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=22)** But sometimes we need to know the keys of the elements as well.
>
> **[0:25](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=25)** And we're going to take a look at how to do this in PHP.
>
> **[0:28](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=28)** The technique we use for passing the keys will differ between our map and filter functions.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=33)** So we'll start out with array filter.
>
> **[0:36](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=36)** It's actually quite easy to get access to the keys in array filter.
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=39)** We simply have to pass an extra flag parameter as the third argument.
>
> **[0:44](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=44)** Now there are two different flags that we can pass here, array filter use key and array filter use both.
>
> **[0:50](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=50)** What array filter use key does, is instead of passing the values of our array to the filter function, it passes only the keys.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=58)** We could use this, for example, if we wanted get every other element from our array.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=62)** For example, if we wanted all the odd indexed elements.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=67)** What array filter use both does, on the other hand, is pass both the value and key of every element in the array to our filter function.
>
> **[1:15](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=75)** This would mean that the filter function we pass would have two arguments instead of one, the element itself and the key of each element.
>
> **[1:24](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=84)** So that's how we access keys in array filter.
>
> **[1:26](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=86)** With array map it's a little different.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=88)** This has to do with how array map is set up.
>
> **[1:31](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=91)** We saw earlier, that while array filters takes the array first and the function second, array map does it in the reverse order.
>
> **[1:39](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=99)** And, as a matter of fact, what array map allows us to do because of this ordering is pass another array, and it'll then pass each item in the second array along with each item in the first array to the function we provide.
>
> **[1:53](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=113)** This may sound a little confusing at first.
>
> **[1:55](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=115)** So let's take a look at a simple example.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=117)** Let's say that we have two arrays, an array of letters and an array of numbers, and we want to pair up each letter with a number at the same index so that we get something like... A1, B2, C3, et cetera.
>
> **[2:15](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=135)** Well the way that we can do that with array map is like this.
>
> **[2:18](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=138)** We'll define a new variable called pairs, and we'll say array map.
>
> **[2:22](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=142)** And for the function, which we'll define as an arrow function.
>
> **[2:27](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=147)** It'll have two arguments representing each letter from our letters array, and each number from our numbers array.
>
> **[2:36](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=156)** And finally, it'll return a string containing the letter and the number that we want.
>
> **[2:42](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=162)** And then we simply have to pass the two arrays that we want to map.
>
> **[2:46](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=166)** So we'll say letters and numbers.
>
> **[2:52](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=172)** And let's print our result.
>
> **[2:55](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=175)** Print our pairs.
>
> **[2:58](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=178)** And run our code.
>
> **[3:02](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=182)** And here we see that we have exactly what we want.
>
> **[3:05](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=185)** So what does all this have to do with accessing the index of each element from inside the function we pass to map?
>
> **[3:12](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=192)** What if we wanted this argument here to be the index of each letter instead of an element from a separate array.
>
> **[3:19](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=199)** Well, what we can do is, instead of passing numbers here, we can simply pass an array containing the keys of the first array.
>
> **[3:27](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=207)** And to do that, we can use a function called array keys letters.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=215)** So, in essence, what we're doing is we're mapping the elements in our letters array, as well as the keys of our letter array.
>
> **[3:43](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=223)** So what we can do now is change this to say something like... the letter at position index... is... letter.
>
> **[3:58](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=238)** And if we run our code now, we see that it prints out the letter at position 0 as A, the letter position 1 as B, and so on.
>
> **[4:07](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=247)** And that's really all there is to it.
>
> **[4:08](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=248)** So, in summary, if you need keys when filtering, you have to pass a special flag to array filter.
>
> **[4:14](https://www.linkedin.com/learning/functional-programming-with-php/passing-keys-to-array-functions?u=76281980&t=254)** And if you need keys when using array map, you need to pass an array of keys in addition to whatever array you want to map.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (12), function (10), let (3), this, (1), this. (1)
> **Analogies:** for example (2)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Sorting
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=0)** - [Instructor] Now let's look at another important operation when working with arrays, sorting.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=4)** Now to do sorting, we'll be using another one of PHP's built-in array functions, a function called, as you may have guessed, sort.
>
> **[0:13](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=13)** This function is useful when we want to change the order of elements in an array.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=17)** This would be very useful, for example, if we add in array of names and we wanted to sort it in alphabetical order, or if we simply wanted to sort an array of numbers.
>
> **[0:26](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=26)** Before we look at how to use sort, it's very important to keep in mind that sort is a mutating function which means that the array that we pass to sort is passed by reference instead of by value, and actually gets modified.
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=39)** And that's just something to keep in mind since that interferes with the functional theme of immutability.
>
> **[0:45](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=45)** So how do we use sort?
>
> **[0:46](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=46)** Sort takes an array as an argument, as well as one or more sort flags that specify how the elements in our array should be sorted.
>
> **[0:54](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=54)** For example, if we want to sort our elements numerically or as strings.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=58)** Now this last argument is optional, and if we leave it out, PHP will do its best to guess what we want.
>
> **[1:04](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=64)** And this is fine for the majority of cases.
>
> **[1:06](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=66)** But on the off-chance that we need to override the default behavior, for example, if for some reason we wanted to sort numbers alphabetically instead of numerically, we can always pass a flag to specify that.
>
> **[1:18](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=78)** And we'll also see in a coming video, another way to specify much more specific ways of sorting.
>
> **[1:24](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=84)** So we're going to code out a simple example here.
>
> **[1:26](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=86)** But first, I mentioned before that sort mutates the array it's called on.
>
> **[1:31](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=91)** And since of the core concepts of functional programming is immutability, we really want to avoid this.
>
> **[1:37](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=97)** So in order to use this function in the same way that we've used other built-in array functions such as array map and array filter, without mutating the original array, I'm going to show you a little work around that we can use.
>
> **[1:48](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=108)** And what we're going to do is define a function and we'll call it array_sort, like array_map and array_filter.
>
> **[1:54](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=114)** And just for kicks, we'll define it using the normal function syntax so that our function doesn't have the dollar sign before it.
>
> **[2:00](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=120)** And the arguments for this function are going to look like this.
>
> **[2:03](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=123)** It'll take an array.
>
> **[2:06](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=126)** And then we're going to use the splat operator to get the reset of the arguments.
>
> **[2:12](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=132)** And now, here's the trick: since arguments are passed by value by default in PHP, we can simply call sort with our arguments here, both of which are copies.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=141)** So we can say sort, array, ...$rest.
>
> **[2:29](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=149)** And then say return $array which will return a sorted copy of our original array.
>
> **[2:37](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=157)** And now what we can do is this.
>
> **[2:39](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=159)** If we have an array of numbers all out of order, like we have here, we can use our array_sort work around to work with this array just like we would do with array_map, and array_filter without mutating the original array.
>
> **[2:51](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=171)** So we could say something like $numbers_sorted equals array_sort, $numbers.
>
> **[3:00](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=180)** And we're not going to pass any flags.
>
> **[3:03](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=183)** And finally, just to prove to ourselves that we didn't mutate the original array, let's print out both the sorted and unsorted arrays.
>
> **[3:11](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=191)** So we'll say print_r, $numbers, and print_r, numbers_sorted.
>
> **[3:22](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=202)** And if we run our code now, we see that we have the original unmutated array, as well as a sorted version of the array.
>
> **[3:32](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=212)** And that's exactly what we wanted.
>
> **[3:34](https://www.linkedin.com/learning/functional-programming-with-php/sorting?u=76281980&t=214)** And that's the basics of using sort in a functional way to work with data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), pass (3), this. (3), let (2), override (1)
> **Code Identifiers:** array_sort (3), array_map (2), array_filter (2), numbers_sorted (2)
> **Analogies:** for example (3), such as (1), just like (1)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Definitions:** is a  (1), means that (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### Custom sorting behavior with usort
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=0)** - [Instructor] So now we've seen how PHP's most basic built in sort function works.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=4)** We pass it an array and it sorts it the best way it knows how and we can pass in flags if we want to tweak its behavior slightly.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=12)** But sometimes we need more specific sorting functionality.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=16)** As an example of this, what if we had an array of employee data?
>
> **[0:20](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=20)** And wanted to sort our employees by how many years they've been at the company or by some other field?
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=27)** In order to allow us to customize our exact sorting behavior PHP provides us with another sort function that we can use called usort which allows us to define on a more specific level how the elements in our array should be sorted.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=41)** We'll take a look at exactly how this works in a moment, keep in mind too that usort like sort is a mutating function.
>
> **[0:48](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=48)** Which means that it actually modifies the original version of the array that it's called on.
>
> **[0:54](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=54)** So how do we use usort?
>
> **[0:56](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=56)** The syntax is pretty simple.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=58)** Usort takes two arguments the array that we want to sort and a function.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=62)** The function that we pass to usort is where we define the specific sorting behavior that we want.
>
> **[1:08](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=68)** This function is called a comparator function and here's how it works.
>
> **[1:12](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=72)** The function takes two arguments, and these two arguments stand for any two elements in the array that we're sorting and then the return value of this function for any two elements determines the order in which these elements will appear in relation to each other, in the final array.
>
> **[1:29](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=89)** If the function returns a value less than zero then that means that the first argument is considered to be less than the second argument and will come before the second argument in the final array.
>
> **[1:41](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=101)** If the function returns a value greater than zero then the first argument is considered to be greater than the second argument and will come after the second argument in the array and lastly if the return value is equal to zero then that signifies that the two arguments are considered to be equal and usort will leave them the same relative order that it finds them.
>
> **[2:03](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=123)** That might sound a little complicated at first, so let's see what the example that I mentioned earlier looks like in code.
>
> **[2:08](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=128)** Let's say that we have an array of basic employee data like this, and we want to sort our employees by their years of service property.
>
> **[2:17](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=137)** Well in order to do this we can use usort with our own special function to tell it to compare the items in this way.
>
> **[2:25](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=145)** So first what we're going to do is just like with sort, we're going to define a non-mutating version of usort.
>
> **[2:31](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=151)** So we're going to say function and we'll call it array usort to fit in with array map and array filter and it's going to take an array and a comparator function.
>
> **[2:47](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=167)** And then just like with sort we're going to call usort by passing our two arguments, array, and comparator function and then we're going to return the mutated copy of our original array.
>
> **[3:02](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=182)** Return array, and now comes the fun part.
>
> **[3:06](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=186)** We need to define a comparator function that will tell usort what employees should be considered greater than, less than, or equal to each other.
>
> **[3:16](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=196)** So we'll call this function years of service comparator.
>
> **[3:25](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=205)** And it'll take two arguments which we'll call a and b.
>
> **[3:31](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=211)** And remember that we want to return a value that's less than zero, equal to zero, or greater than zero.
>
> **[3:36](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=216)** Depending on if the first argument is less than, equal to, or greater than the second argument.
>
> **[3:42](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=222)** So what we're going to do is this.
>
> **[3:44](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=224)** We're going to have a big if statement here, and we're going to say if the years of service property of a, is less than the years of service property of b.
>
> **[4:03](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=243)** Then we're going to return a value that's less than zero, we're just going to return negative one here.
>
> **[4:08](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=248)** Because a should be considered less than b.
>
> **[4:14](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=254)** And likewise we're going to say that if a's years of service are greater than b's years of service, a should be considered greater than b.
>
> **[4:23](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=263)** So we'll return a value greater than zero, or one.
>
> **[4:28](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=268)** And finally if neither of these is true, then that means a and b both have the same years of service and they should be considered equal so we should return zero, and now that we've got our comparator function, let's sort our array and to do that we'll say sorted employees, and we'll use our array usort function that we defined and we'll pass our employees array, along with our years of service comparator function, and finally let's print this sorted employees array.
>
> **[5:04](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=304)** Print r sorted employees.
>
> **[5:10](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=310)** So if we run our code now.
>
> **[5:18](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=318)** We see that the array that we got has the employees sorted in ascending order by their years of service, and that's exactly what we want.
>
> **[5:30](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=330)** Now this might seem like a lot of code for some pretty simple functionality, and actually there's a much shorter way that we can replicate the comparator function.
>
> **[5:38](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=338)** Instead of having this big if else statement we can simply say return a years of service
>
> **[5:49](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=349)** minus b years of service.
>
> **[5:55](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=355)** And it might not be completely obvious at first why this works, but in this case if the years of service of a is greater than the years of service of b, it will return a positive value.
>
> **[6:07](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=367)** Which usort will interpret as a being greater than b, and likewise if the years of service of a is less than b.
>
> **[6:14](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=374)** It will return a negative value, and if the two are equal it will return zero which is exactly the functionality we want.
>
> **[6:23](https://www.linkedin.com/learning/functional-programming-with-php/custom-sorting-behavior-with-usort?u=76281980&t=383)** If we run our code again we see that it gives us exactly the same thing.

> [!info]- Semantic Content
>
> **Code Keywords:** function (21), pass (4), let (4), this, (2), this. (1)
> **Definitions:** means that (2), is a  (1), is called (1)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Analogies:** just like (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Reducing
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=0)** - [Instructor] The final important array operation that we're going to learn about is something called reducing and to do it we're going to use yet another of PHP's built-in functions called array reduce.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=10)** Now what reducing is might not be quite as apparent as with mapping, filtering, or sorting.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=16)** But reducing is definitely just as useful as the other array functions.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=21)** What reducing allows us to do is take an array of data and well reduce it down to a single piece of data.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=27)** So we use reduce if we want to take an array of numbers and reduce it down to a sum, or an average for example.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=35)** What array reduce PHP's built-in function for reducing does, is it starts with an initial value, say zero and for each element in the array it modifies this initial value in some way until after we've processed all our elements we end up with the result.
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=52)** In the case of finding the sum of an array of numbers, for example, we'd start with zero and add each element to the initial value.
>
> **[1:00](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=60)** Or if we were trying to find the product of an array of numbers.
>
> **[1:03](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=63)** We'd start with one and then multiply each element by the initial value and so on.
>
> **[1:09](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=69)** So what's the syntax of array reduce look like?
>
> **[1:12](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=72)** Well reduce like most of our other built in array functions takes an array and a function as arguments.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=77)** The form of this function argument is a little different than what we've seen with array map and array filter.
>
> **[1:24](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=84)** This function in its simplest form takes two arguments, the first argument represents the current value that we've built up on top of the initial value.
>
> **[1:33](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=93)** We call this argument the carry or accumulator and by convention we'll use the argument name carry.
>
> **[1:41](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=101)** The second argument represents the current element of the array that we're looking at.
>
> **[1:45](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=105)** Much like in the map or filter functions and we usually call it item.
>
> **[1:50](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=110)** So the purpose of this function we pass is to tell array reduce how to combine the current value of the carry argument with the current item that we're looking at.
>
> **[1:59](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=119)** So when we want to calculate the sum of an array of numbers for example, our function will simply return the carry argument plus item, our current array element, and there's one last thing that we have to remember about the array reduce function.
>
> **[2:12](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=132)** In addition to the array and the function arguments that we pass, we usually want to remember to provide it with another argument the starting value.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=141)** This is the value that reduce will start with when looking at the elements in our array.
>
> **[2:26](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=146)** In other words when the function we pass is called for the very first time our accumulator argument will be equal to this starting value and the second value will be equal to the first element in our array.
>
> **[2:39](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=159)** By default the starting argument is null.
>
> **[2:41](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=161)** But we'll usually want to provide our own value here to make sure we know exactly what'll happen.
>
> **[2:47](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=167)** Since people often find reduce the hardest array function to grasp conceptually, let's take a look at what's happening when we call array reduce on an array.
>
> **[2:56](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=176)** We're going to use the example of finding a sum of an array of numbers the first thing that we're going to do to use array reduce to find the sum of our numbers, is define the function that we're going to pass to array reduce.
>
> **[3:07](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=187)** So we'll call this function get sum, and it'll be a function with arguments carry and item, and it's just going to return carry plus item.
>
> **[3:21](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=201)** Like we saw earlier in the slides, and in order to help us visualize what's going on when we use array reduce what we're going to do is print out the values of these two arguments to the console.
>
> **[3:34](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=214)** So we'll say echo, single quote carry and then we'll append the value of carry, and then comma space item in single quotes and then we'll append the value of item, and finally new line.
>
> **[3:59](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=239)** So now that we have this function that we're going to pass to array reduce all we have to do is say, sum equals array reduce and then pass our numbers array followed by the function we defined and when finding the sum we're going to want the starting value to be zero, and finally we'll print the sum.
>
> **[4:25](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=265)** So now if we run our code, we're going to see exactly what's going on when PHP calls array reduce.
>
> **[4:34](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=274)** We can see here that we start off with our starting value of zero that we defined here and the first item in our array up here.
>
> **[4:43](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=283)** The next time our get sum function gets called it's equal to the carry argument, plus the item argument from the previous time it was called.
>
> **[4:52](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=292)** So likewise the second time it gets called we see that the carry argument is equal to one and the item is equal to two, and then the next time it gets called the carry argument is three and the item is three, and next it's six and four and then 10 and five, and 15 and six and so on.
>
> **[5:11](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=311)** With each carry argument being equal to the sum of the item and carry arguments from the previous time our get sum function was called.
>
> **[5:21](https://www.linkedin.com/learning/functional-programming-with-php/reducing?u=76281980&t=321)** So that's how we use array reduce to find the sum of an array of numbers, now if we wanted to use reduce to calculate the product of all the numbers in our array the starting value we'd have to provide wouldn't be zero it would be one instead, so let's copy our get sum function and change it to get product, and then all we have to do is change this plus sign to a multiplication sign, and then we'll change this to product, and get product, and finally we'll print product, and now if we run our code we see that we end up with a pretty big number here and that's because carry this time is equal to the product of the carry and item arguments, from the previous time our get product function was called.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), pass (6), let (2)
> **CLI Commands:** find (4), php (3), make (1)
> **Definitions:** is a  (1), we call this (1), in other words (1), is called (1)
> **Env Vars:** php (3)
> **Analogies:** for example (3)
> **Cross-References:** earlier in (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Combining array functions
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=0)** - [Instructor] We've seen so far in previous videos several of PHP's numerous built in array functions, their syntax and some examples of how they might be used in a code base.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=10)** These functions are certainly very powerful on their own and each contributes a great deal towards simplifying and increasing readability in our code.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=18)** The really exciting part however, is that these functions can all be combined to give us an incredible amount of functionality.
>
> **[0:24](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=24)** In this video, we're going to walk through an example of how we can do this.
>
> **[0:29](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=29)** The example we're going to look at is this.
>
> **[0:31](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=31)** Let's say we have an array of employee data, each with name, age, salary, and job title attributes.
>
> **[0:37](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=37)** In the real world, there are all sorts of interesting information that can be deduced from data sets like this, and we're going to examine one way that we can discover such information using the built in array functions we've learned.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=49)** So what we're going to do is calculate how the average salary of the developers in our data set compares to the average salary of all other professions.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=58)** Let's take a look at how to do that.
>
> **[1:01](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=61)** The first array function we're going to use for this calculation is array filter.
>
> **[1:05](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=65)** And what we're going to do is use array filter to separate the developers from the non developers.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=70)** And the way we do this is by defining a new variable, we'll call it developers and calling an array filter on an array of employee data.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=81)** We'll say employees and since we want filter to give us an array containing only the data objects whose job title is developer, we'll simply define an anonymous arrow function here, which returns whether or not an employee's job title is equal to developer.
>
> **[1:35](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=95)** So we'll say fn, x, and we want to return whether the job title property of x is equal to developer.
>
> **[1:48](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=108)** And let's print out our developers array just to make sure we're on the right track so far.
>
> **[1:59](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=119)** And sure enough, we're left with an array that only contains the employees whose job title is developer.
>
> **[2:04](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=124)** So we're on the right track so far.
>
> **[2:06](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=126)** And the next thing we're going to do is transform our array of developer objects into an array of only their salary attributes.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=134)** And to do this, we'll use array map.
>
> **[2:16](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=136)** So what we're going to do is define a new variable, called developer salaries, and we're going to use array map and for the function that we pass to array map, we're going to define another anonymous arrow function so fn, x, and we're simply going to return the salary attribute of x.
>
> **[2:38](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=158)** Salary.
>
> **[2:40](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=160)** And once we've defined that function, we have to actually pass our developers array into map.
>
> **[2:48](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=168)** And let's print our developers salaries array just to make sure we're still on the right track.
>
> **[2:54](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=174)** And sure enough, we see that we have an array that contains only the salaries of the two developers in our employees array.
>
> **[3:02](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=182)** And the final thing we have to do here, is calculate the average of the values in this array of developers salaries.
>
> **[3:09](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=189)** The first step of this is to calculate the sum of the array.
>
> **[3:12](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=192)** We went over this in a previous video, so I'm not going to spend too much time discussing it, but in order to find the sum of all the values in this array, all we need to do is call array reduce.
>
> **[3:24](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=204)** We'll start off by saying total developer salaries, and then array reduce, and we're going to be reducing our developer salaries array, and then for the function that we pass, we're going to define another anonymous function, with carry, and item arguments, and we're going to return carry plus item.
>
> **[3:53](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=233)** And that'll give us the sum of all of our developer salaries.
>
> **[3:56](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=236)** So let's just print that number to make sure we're still on the right track.
>
> **[4:02](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=242)** And we see that we have the correct sum right here.
>
> **[4:06](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=246)** And the last thing we have to do is get the actual average, so we'll say average developer salary equals, and then this is going to be equal to the total developer salaries, divided by how many developer salaries there were in the first place.
>
> **[4:23](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=263)** So we'll say count developer salaries.
>
> **[4:31](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=271)** And then down here, we're just going to print the average developer salary is and then average developer salary and if we save and run our code, we see that we got our final answer.
>
> **[4:48](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=288)** And if we go up to the top, that sounds about right to me.
>
> **[4:54](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=294)** So now that we've done these calculations for our developers, we're going to do the same calculations for the non developers.
>
> **[5:00](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=300)** And this will look almost exactly the same, with a few small changes.
>
> **[5:05](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=305)** So we're going to start off by saying non developers equals array filter, employees and we want only the employees whose job title attribute isn't equal to developer.
>
> **[5:24](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=324)** Next we have to get the non developer salaries, which we can do exactly the same way that we did up here, so I'm just going to copy and paste that for now, although in the real world, we'd want to define a separate function called get salary or something like that.
>
> **[5:40](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=340)** And we want to change this to non developers.
>
> **[5:43](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=343)** And last but not least, we want to say total non developer salaries and that'll be equal to the sum of all our non developer salaries, so we'll change this to non developer salaries, and last but not least, we're going to say average non developer salary is equal to the total non developer salaries divided by the count of how many non developer salaries there are.
>
> **[6:16](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=376)** And then we'll print this down at the bottom.
>
> **[6:20](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=380)** The average non developer salary is average non developer salary.
>
> **[6:32](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=392)** And if we run our code again, we see that we have our results.
>
> **[6:39](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=399)** So that exercise that we walked through was a good example of how to combine the different array functions that we've talked about.
>
> **[6:45](https://www.linkedin.com/learning/functional-programming-with-php/combining-array-functions?u=76281980&t=405)** Of course, there are many other possible situations where this would be helpful too.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (5), pass (3), this. (2), this, (2)
> **CLI Commands:** make (3), php (1), find (1)
> **Env Vars:** php (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Recreating the array_map function
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=0)** - [Instructor] Now that we've had a lot of practice with JavaScript's functional parts, such as built-in array functions.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=10)** Let's do a challenge.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=12)** The challenge here to make sure you really understand how mapping works is to recreate the array_map function.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=18)** Specifically, what we want to create is a function called map that takes two arguments.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=23)** A function that should be applied to every element in the array, and the array itself.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=27)** And note here that in this challenge we're ignoring the fact that the regular array_map function can take more than one array at a time.
>
> **[0:34](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=34)** We're only going to worry about the case where we need to map a single array here.
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=39)** So your task here is to recreate the functionality of PHP's array_map function, obviously without actually using the built-in array_map function, since that would be cheating.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=49)** The easier solution to this problem is to use a for loop, and the slightly harder version is to use only PHP's built-in array reduce function.
>
> **[0:58](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=58)** This will probably take you about 10 minutes.
>
> **[1:01](https://www.linkedin.com/learning/functional-programming-with-php/challenge-recreating-the-array-map-function?u=76281980&t=61)** Once you've completed it, check out the solution video where I show you how I solved this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (1)
> **Code Identifiers:** array_map (4)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Recreating the array_map function
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=0)** [Narrator]- Okay, so let's see the solution to the challenge of recreating the array map function in PHP.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=12)** We'll start with the easier solution of using a for loop.
>
> **[0:14](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=14)** inside our function body, the first thing we want to do is to find a new array that will hold the mapped values.
>
> **[0:22](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=22)** We'll call this new array, and it will initially be an empty array and what we want to do then is iterate through all the elements in the array using the old index method from procedural programming.
>
> **[0:33](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=33)** For this we'll use a for loop, we'll say for I equals zero, I is less than count array and I plus equals one and then for each element in our array we want to get the result of calling our function argument on the element and that will look like this.
>
> **[0:57](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=57)** We'll say result equals function called on our array at index I and then we want to push this result on to our new array.
>
> **[1:09](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=69)** So we'll say new array, brackets equals result and finally outside our for loop we want to see return new array and that's it for the for loop implementation.
>
> **[1:22](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=82)** Let's test this with some data.
>
> **[1:24](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=84)** We'll say numbers equals one, two, three, four and then we'll say result equals map and for the function we'll just define an arrow function saying to take X and we'll say multiply it by three and finally we'll pass a new numbers array.
>
> **[1:47](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=107)** So if we print this result we'll say print R result and run our code we see that it works perfectly giving us an array where each of the elements has been multiplied by three just as we specified here.
>
> **[2:08](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=128)** So that's the easier for loop implementation.
>
> **[2:11](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=131)** Let's move on to the slightly harder solution to this challenge.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=134)** Recreating map using only the built-in array reduce function.
>
> **[2:19](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=139)** So in our function body, the first and most obvious step is to call array reduce on our array.
>
> **[2:25](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=145)** So we'll say return array reduce called on our array and let's start off with our starting value.
>
> **[2:34](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=154)** What value do we want our reduce function to start off with here.
>
> **[2:37](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=157)** Well you may have guessed that we want to start off with an empty array just like in the easier solution with the for loop and then the accumulator function that we passed to reduce will look like this it will have two arguments called carry and item and what exactly do we want it to return?
>
> **[2:55](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=175)** Well, we want it to return an array that contains all the elements we've accumulated so far so we'll use the splat operator for that.
>
> **[3:03](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=183)** Splat, carry, and then to this array we want to append the result that we get when we call our function argument on the current item.
>
> **[3:12](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=192)** So we'll say func, item just like that and that should be it.
>
> **[3:20](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=200)** If we run our code again, we see that it works perfectly this time as well, except now we are using array reduce instead of a for loop and this might look deceptively simple to some people and many times that's the beauty of functional programming.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/solution-recreating-the-array-map-function?u=76281980&t=215)** Well anyways, congratulations if you figured out either or both solutions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (4), this. (1), pass (1)
> **CLI Commands:** php (1), find (1)
> **Analogies:** just like (2)
> **Env Vars:** php (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Advanced Functional Concepts

#### Advanced functional concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=0)** - [Instructor] So far in this course we've covered a wide range of functional topics.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=4)** We've learned how to think about our programs in a more functional way by covering the three main concepts, we've learned to work with first-class functions and various applications of doing so, and finally, we looked at how we can work with arrays in a more functional way.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=18)** The things we've learned up until now are extremely useful and knowing these concepts and applying them in your code base will quickly show you the positive impacts that they provide.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=27)** But before we wrap up this course, there are a few more concepts I'd like to cover with you.
>
> **[0:32](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=32)** These concepts are recursion, partial application, and composition.
>
> **[0:36](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=36)** Keep in mind that these concepts are a little more advanced, so don't worry if they don't really click at first.
>
> **[0:41](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=41)** Furthermore, what I'll be covering in this course with regards to these concepts is really only the tip of the iceberg, and a whole course could probably be made about each of these concepts alone.
>
> **[0:51](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=51)** That being said, these concepts do serve as a great jumping off point to get into more complex functional programming.
>
> **[0:57](https://www.linkedin.com/learning/functional-programming-with-php/advanced-functional-concepts?u=76281980&t=57)** If you stick to it and gain a thorough understanding of these concepts, they can allow you to do some very cool and flexible things as well as gain a better understanding of functional programming in general.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Partial application and currying
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=0)** - [Narrator] The first advanced concept we're going to look at is something called partial application.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=4)** What partial application is, is when we take a function that has some number of arguments and we fix some of those arguments to a set value.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=12)** This function with fixed arguments can then be called from anywhere else in the code and it will be as if we called the original function with all of its arguments.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=21)** Another way to think of it is like this, normally when we call a function, we have to pass all the arguments to it at the same exact time and place.
>
> **[0:29](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=29)** What partial application allows us to do, is pass arguments to a function at different places in the code and then get the result once the function gets all the arguments it needs.
>
> **[0:40](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=40)** Partial application is a very useful way to configure more general functions, into more specific ones.
>
> **[0:46](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=46)** In general, if there's a function that we use often in our code where one or more of the arguments that we call it with is almost always the same, this is usually a good candidate for using partial application.
>
> **[0:57](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=57)** So now that we know what partial application is, what does it look like in code?
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=62)** Well let's imagine that we have a simple add function that takes three numbers as arguments and adds them together.
>
> **[1:08](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=68)** What if we wanted to fix one of those arguments to a certain number, so that we only had to pass in the other two arguments later on.
>
> **[1:15](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=75)** Well, what that would look like is this, we create another function, we'll call it at add partial.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=81)** And this function will take a single argument, X, and it'll return another function which takes the remaining two arguments, Y and Z, and this function that it returns will call our original add function with the three arguments we've accumulated.
>
> **[1:40](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=100)** So Add X, Y and Z.
>
> **[1:46](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=106)** And note here that I'm using arrow function syntax to simplify this a little bit.
>
> **[1:50](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=110)** Since if we were to use regular function syntax, we'd have to worry about closures and using the use keyword.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=117)** So anyway, what we can do with this add partial function here is something like this, we can say add five, is equal to add partial.
>
> **[2:07](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=127)** Passing five as X, and then we can say sum equals add five and pass in our other two arguments, six and seven.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=141)** So if we print our sum, and run our code, we see that we get the sum of these three numbers but we pass them in at different places in the code.
>
> **[2:36](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=156)** In this example we fix the first argument and left the other two.
>
> **[2:40](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=160)** In reality we can divide up our arguments however we want.
>
> **[2:43](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=163)** We could pass in the first arguments and leave the last one for later for example, and that would look like this.
>
> **[2:48](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=168)** We'd add Y to the first function, and remove it from the second one and then it would something like add five and six, equals add partial with the arguments five and six, and then we'd say sum equals add five and six with the final argument seven representing Z.
>
> **[3:15](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=195)** And if we run our code again, we see that we get the exact same answer.
>
> **[3:20](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=200)** The only difference is that now we're passing our arguments in, in different places.
>
> **[3:24](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=204)** And we can even go a level deeper and fix our first argument, and return another function that fixes the second argument, and finally return the third argument that gives us our sum.
>
> **[3:36](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=216)** And calling that would look like this, We'd have add five equals add partial, five add five and six equals add five, six, and finally, sum equals add five and six, seven.
>
> **[4:05](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=245)** And if we run our code we see that again we get the exact same answer.
>
> **[4:10](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=250)** And this example here, where we pass the arguments in one at a time is actually a special form of partial application called currying.
>
> **[4:17](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=257)** And all currying means is that the arguments to our function are passed in one at a time.
>
> **[4:24](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=264)** And just one last interesting tidbit is that instead of having all these middle man variables here, what we can with partially applied functions is something like this, we can say add partial, and then pass in our arguments one at a time, and if we print that out, that works just as well as passing them in one at a time up here.
>
> **[4:47](https://www.linkedin.com/learning/functional-programming-with-php/partial-application-and-currying?u=76281980&t=287)** Not that there's any real benefit to doing it this way, but I just thought that was an interesting syntax to know.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), pass (8), this, (5), let (1), this. (1)
> **Analogies:** imagine (1), for example (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Recursion
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=0)** - The next advanced concept we're going to look at is called recursion.
>
> **[0:04](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=4)** This is a concept that you've probably heard of before, but maybe you've never really seen it in action.
>
> **[0:09](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=9)** Recursion is simply when a function calls itself.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=12)** While doing this can very easily lead to an infinite loop if we're not careful, it can also be used to solve certain problems that otherwise wouldn't be very easy to solve using functional programming.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=23)** So we're going to take a look at a very simple example using recursion.
>
> **[0:26](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=26)** We're going to create a function that behaves like a for loop without actually using a for loop.
>
> **[0:31](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=31)** We'll call this function countdown, and what it'll do is start at whatever number we give it and use recursion to count down from that number to zero, printing the results along the way.
>
> **[0:42](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=42)** So what that's going to look like is this: we're going to say function count down, and I'm using the regular function syntax here.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=49)** I'll talk about why that is in a minute.
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=52)** And our countdown function is going to take one argument, X, and it's simply going to print this to the console echo X, with dot dot dot and then a new line and then our countdown function is going to call itself with whatever argument it got, minus 1.
>
> **[1:14](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=74)** And then our countdown function will be called something like this.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=77)** Now if we were were to run our code right now it would recurse infinitely because we forgot one important thing: In recursion, we always have to tell our function when to stop.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=88)** Without a stop condition, any recursive function could go on infinitely.
>
> **[1:33](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=93)** Our stop condition in this case will be when the argument that the function receives is less than zero.
>
> **[1:38](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=98)** So we'll say if x is less than zero, at which point we want it to simply return instead of calling itself again.
>
> **[1:49](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=109)** And we'll even print something inside this if statement.
>
> **[1:51](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=111)** Something like Blastoff.
>
> **[1:58](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=118)** So now if we call our function, we see that it behaves exactly as we want it to.
>
> **[2:07](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=127)** So let's go back to why I defined this countdown function with the regular function syntax instead of defining it like a variable, like this.
>
> **[2:18](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=138)** Well, the reason we have to do this is that if we were to define this function as a variable, for reasons of how PHP treats these kinds of variable functions under the hood, this function wouldn't be able to call itself from inside the function body.
>
> **[2:31](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=151)** Instead, PHP would throw an undefined variable error.
>
> **[2:35](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=155)** And this is a little annoying, of course.
>
> **[2:37](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=157)** But it's nothing that we can't work around.
>
> **[2:38](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=158)** We just have to use the regular function syntax in this case.
>
> **[2:42](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=162)** So we have a recursive function that counts down, but what if we wanted to count up instead?
>
> **[2:48](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=168)** Well, this is going to be very similar to counting down, with a few small changes.
>
> **[2:53](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=173)** First let's define our function, called count up, and it's going to take an argument.
>
> **[3:01](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=181)** And we'll print out what the current value is.
>
> **[3:04](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=184)** Echo X, dot dot dot, new line, and now we come to the first main difference which is that instead of subtracting one from the number on each function call, we're going to add one.
>
> **[3:17](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=197)** So our count up function is going to call itself with X + one.
>
> **[3:23](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=203)** And the next difference is that instead of checking to see if the current number is less than zero, we're going to check if the current number is greater than the number we pass in.
>
> **[3:32](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=212)** But wait a minute.
>
> **[3:33](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=213)** Since the number we pass in is the number we're counting up to, we need another argument to specify what the starting number is and allow us to keep track of the number we're currently on.
>
> **[3:44](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=224)** So we're going to treat X as our current variable here, and we're going to add another argument called max that represents the number we want to count up to.
>
> **[3:53](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=233)** So now all we have to do is check if X is greater than max, and if it is, then we'll say echo done, and we'll simply return instead of calling the function again.
>
> **[4:08](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=248)** And last but not least, we have to remember to pass this max argument on.
>
> **[4:12](https://www.linkedin.com/learning/functional-programming-with-php/recursion?u=76281980&t=252)** So now if we call our count up function, we pass in the starting value and the number we want to count up to and if we run our code, we see that it behaves exactly like we wanted it to.

> [!info]- Semantic Content
>
> **Code Keywords:** function (24), pass (4), this. (2), let (2), this: (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - the (1)

#### Composition, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=0)** - [Narrator] The last advanced functional concept we're going to look at in this course is something called composition.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=5)** Now you may remember that much earlier in this course, when we were first learning about first class functions, we created an array of functions and used this array of functions to transform some piece of data in some way.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=17)** This allowed us to avoid having several nested functions, where some function was called and the result of inner function, which was called in the result of another inner function, and so on.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=27)** So roughly speaking, composition is when we take a series of smaller, modular functions and combine them into one more complex function.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=35)** In the example that we saw earlier in this course, we took some very simple mathematical functions, such as doubling or subtracting one from a number, and combined them into a more complex mathematical function.
>
> **[0:47](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=47)** And this was a good basic example of composition, but as it happens, composition can be applied to a much wider range of programming problems than just math.
>
> **[0:56](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=56)** In theory, we can compose any set of functions so long as they all return the same type of data that they require as an argument.
>
> **[1:03](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=63)** So for example, our math functions from before all took a number as an argument, and returned a number, so it was fairly trivial to combine them into a single, larger function simply by calling one on the result of another.
>
> **[1:16](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=76)** Now composition is an extremely useful concept in functional programming.
>
> **[1:20](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=80)** And this is particularly true when doing some sort of complex data transformation that can be broken down into smaller, more modular pieces.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=88)** So for example, let's say that we have an array of person data that we retrieved from some API.
>
> **[1:34](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=94)** Now, this data isn't in a convenient format for the rest of our software, so we need to make a series of changes to it.
>
> **[1:40](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=100)** Well, what we can do is use composition to create a sort of formatting function that transforms our data.
>
> **[1:47](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=107)** So let's say for this example that the rest of our software requires that each person in our data has a first and last name field, their height in meters, and their initials.
>
> **[1:58](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=118)** However, the API that we're getting this data from simply gives us their full names, their age, and their height in inches.
>
> **[2:05](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=125)** Well, our first instinct might be to create a single function called format person that does all of this formatting in the same place.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=134)** So for example, I might take a person, and then add the required fields inside the function body.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=141)** However, having all this transformation take place inside a single function isn't a very modular or reusable way to go about it.
>
> **[2:29](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=149)** A better thing to do would be to create a separate modular function for each atomic transformation, and then use composition to combine these separate functions into one.
>
> **[2:39](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=159)** So in order to do that, the first thing we're going to do is create our separate functions.
>
> **[2:43](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=163)** The first function we're going to create will take the full name field of a person and add first name and last name fields based on that name.
>
> **[2:51](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=171)** So we'll call this function with first and last name.
>
> **[2:56](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=176)** And it will take a person object, and I'm not going to spend too much time explaining this here, but what we're going to do is say return array merge, person, and then we're going to add the first name field, by saying explode space person full name.
>
> **[3:24](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=204)** And the index zero.
>
> **[3:25](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=205)** And what this explode does, by the way, if you're not familiar with it, is it takes the full name property on a person and separates it based on the character that we give it here, which is a space.
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=215)** So for example, if we were to call this on Jane Price, it would give us an array where the first element is Jane and the second element is Price.
>
> **[3:44](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=224)** So this statement right here gives us the first name from the full name.
>
> **[3:50](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=230)** And let's do the same thing for the last name.
>
> **[3:53](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=233)** Last name, arrow, explode.
>
> **[3:57](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=237)** Space.
>
> **[4:00](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=240)** Person.
>
> **[4:02](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=242)** Full name.
>
> **[4:03](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=243)** And we want index one here, to get the last name.
>
> **[4:09](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=249)** So this function right here will add first and last name properties to a person object.
>
> **[4:14](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=254)** Now let's move on to writing a function that'll convert a person's height measurement from inches to meters.
>
> **[4:20](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=260)** We'll call this function height, inches to meters.
>
> **[4:25](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=265)** And what it'll do is take a person as an argument, and we'll say return array merge.
>
> **[4:33](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=273)** Person, and finally, we'll modify the height so that it's in meters instead of inches.
>
> **[4:40](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=280)** And the way we do that is by saying person, height, times the conversion factor from inches to meters, which I happen to know is 0.0254.
>
> **[4:53](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=293)** I don't expect you to know that though.
>
> **[4:55](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=295)** I just looked it up.
>
> **[4:57](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=297)** So we've completed our function that converts a person's height from inches to meters.
>
> **[5:01](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=301)** The last function we're going to add is one that'll add initials to the person object.
>
> **[5:06](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=306)** So we'll call this one add initials.
>
> **[5:10](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-1?u=76281980&t=310)** And what this one will do is take a person, and return array merge, person, and initials property, that we get by saying person first name index is zero, which will give us the first letter in the person's name, and then person last name, index zero, which will give us the first letter of the last name.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (4), require (1), finally, (1)
> **Analogies:** for example (4), such as (1)
> **Env Vars:** api (2)
> **Cross-References:** earlier in (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Versions:** 0.0254 (1)
> **Speakers:** - [narrator] (1)

#### Composition, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=0)** - [Instructor] Okay, so now that we have all our separate functions for data transformation, how do we combine these functions?
>
> **[0:07](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=7)** Well, this is where things get a little interesting.
>
> **[0:09](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=9)** See, normally, if we were going to do a one off transformation, we could just call each function in a nested fashion like this.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=17)** We could say, formatted person, equals add initials, height inches to meters, and then with first and last name, called on some person object.
>
> **[0:31](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=31)** But as I said before, this is a little messy, especially when we call ten or twenty or a hundred functions on some object.
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=39)** So what we're going to do instead is create a function called "compose" that takes all of our functions as arguments, and returns a new function that provides the same functionality.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=49)** So for example, we've been able to do something like this.
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=52)** We'd be able to say format person, equals compose, and then the three functions that we want to call.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=59)** So with first and last name, height inches to meters, and finally, add initials.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=67)** So I'm going to walk you through how to write this compose function.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=70)** We're going to say compose and we're going to use a splat operator to get all the arguments, which we'll call "funcs".
>
> **[1:19](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=79)** Those will be our functions.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=81)** And what we're going to do is return a function that takes whatever data we want to transform, and we have to say "use funcs" here, so that this function we're returning closes correctly over this funcs argument.
>
> **[1:35](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=95)** And finally, this function we're returning is going to call all of the functions that we pass on the data here.
>
> **[1:42](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=102)** And the way we do that is by saying return, array reduce, and then we're going to reduce our functions array, and for the function we passed to reduce, we're going to say carry and function and we're going to return the current function called on the carry argument.
>
> **[2:02](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=122)** And finally our starting value is actually going to be the data we passed to this function.
>
> **[2:08](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=128)** So that's how we write our composed function, and it's a little complicated, so you might want to go back later and take a closer look at it.
>
> **[2:14](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=134)** But now that we have our composed function, let's use it to transform the data that we had up here.
>
> **[2:21](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=141)** So we've already used compose to combine the functionality of these three more modular functions we've created.
>
> **[2:27](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=147)** So now what we can do is simply say "formatted people equals array map", and we're going to map this format person function that we've created over our people data array.
>
> **[2:45](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=165)** And finally, let's print out the result.
>
> **[2:53](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=173)** So if we run our code now, we see that it correctly transforms all of our data.
>
> **[3:00](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=180)** We now have the first and last name properties, the initials property, and the height is now expressed in meters instead of inches.
>
> **[3:08](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=188)** And that's it!
>
> **[3:08](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=188)** We've just used composition to combine smaller modular functions into a new more complicated function.
>
> **[3:15](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=195)** Now there's just one last thing to note before we wrap up here.
>
> **[3:19](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=199)** Because of the way we've defined our compose function here, the functions we passed to it are applied in the order that we passed them, and that means that "with first and last name" would be applied first, followed by "height inches to meters" and finally "add initials".
>
> **[3:35](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=215)** And this ordering is a little important since add initials depends on the result of with first and last name.
>
> **[3:41](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=221)** However, in many other cases, you might see a different version of compose that applies the function arguments in reverse order, and the reason for this is to make it look a little more like the nested approach, and therefore make it easier to convert nested functions to a composition.
>
> **[3:56](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=236)** If we wanted our compose function to apply our functions in reverse order, all we'd have to do is wrap this functions array here with a function called array reverse that returns the elements of an array in reverse order.
>
> **[4:10](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=250)** However, if we were to do that in this case, it would break our format person function, since add initials depends on with first and last name being completed first.
>
> **[4:21](https://www.linkedin.com/learning/functional-programming-with-php/composition-part-2?u=76281980&t=261)** So we're going to remove this, but that's just something to keep in mind.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), finally, (3), this. (2), let (2), pass (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Code Conversion Challenges

#### Challenge: Property getter
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=0)** - [Instructor] Before we wrap up this course, we're going to go through a few functional programming challenges that'll help you get more familiar with the functional paradigm and hopefully learn a few more tricks along the way.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=16)** The first challenge we're going to look at has to do with partial application, one of the more advanced concepts we saw in a previous sections.
>
> **[0:23](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=23)** So let's imagine that in a certain program we've created a function called get_property which we can use to get the value of a certain key from an array if we're not sure the array has that key and set a default value to return if it turns out the array doesn't have that key.
>
> **[0:38](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=38)** So for example if we have an array representing a person's data and we wanted to get the value of their favorite color key which they may or may not have we could say get_property favorite_color set a default value of none and call it on person.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=59)** And assign this to a variable like favorite_color.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=62)** And this works.
>
> **[1:03](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=63)** The problem with this though is that it's often more verbose than we need it to be.
>
> **[1:08](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=68)** For common properties that we might want to get from an array such as name, it's a bit of a pain to have to write out the whole function and pass in the key in default values over and over again since they'll almost always be the same.
>
> **[1:20](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=80)** So wouldn't it be nice if we could simply partially apply these first two arguments and get a new, more specific function such as get_name that we could apply to an array.
>
> **[1:32](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=92)** Well as it happens, that's your challenge here.
>
> **[1:34](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=94)** I've defined a function called create_property_getter and your job is to implement the body of this function such that the rest of the example code that I've written works correctly.
>
> **[1:44](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=104)** Namely, you'll want to partially apply the first two arguments, the key, and the default value.
>
> **[1:50](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=110)** Also in an effort to make this challenge a little easier for you, you'll notice that I've started this new function as an arrow function.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=117)** I'd recommend that you leave it this way to avoid having to use what I would consider to be an annoying amount of use statements to make it work.
>
> **[2:05](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=125)** Well that's all the instructions.
>
> **[2:07](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=127)** This challenge should take anywhere from five to 10 minutes or maybe even less.
>
> **[2:11](https://www.linkedin.com/learning/functional-programming-with-php/challenge-property-getter?u=76281980&t=131)** In the next video I'll show you the solution for this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (1), pass (1), new, (1)
> **Code Identifiers:** get_property (2), favorite_color (2), get_name (1), create_property_getter (1)
> **Analogies:** such as (2), imagine (1), for example (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Property getter
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=0)** - [Instructor] Okay, so let's take a look at the solution for coding our create property getter function.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=10)** Now this is a pretty short solution and it's really similar to some of the examples we saw in our partial applications section.
>
> **[0:17](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=17)** So so far, our create property getter function is just a function that takes a key and a default value.
>
> **[0:25](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=25)** So all we need to do is get this last array argument and past that to get property.
>
> **[0:32](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=32)** So what we're going to do is return a function that takes array as an argument and finally just calls get property with the three arguments that we've accumulated.
>
> **[0:46](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=46)** Key, default, and array.
>
> **[0:52](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=52)** And that's it, the solution is as simple as that.
>
> **[0:55](https://www.linkedin.com/learning/functional-programming-with-php/solution-property-getter?u=76281980&t=55)** If we run our code now, we see that we get the expected results from our person arrays up here.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), default, (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Challenge: Tallying votes
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=0)** (electronic techno music)
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=5)** - [Instructor] The second functional programming challenge that we're going to look at is called tallying votes.
>
> **[0:09](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=9)** And here it is.
>
> **[0:11](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=11)** Let's imagine that a local election just took place and the results are contained in this array of names that we have here called all votes.
>
> **[0:18](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=18)** In order to find out who won, we have to tally the votes.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=21)** Your job is to complete this tally votes function so that it takes this array of votes and converts it into a string keyed array where each key is one of the candidate's names and the value of that key is how many votes that candidate got.
>
> **[0:34](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=34)** In other words, how many times the candidate's name occurred in the all votes array.
>
> **[0:40](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=40)** Now before you get started, there are a few additional rules to this challenge.
>
> **[0:44](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=44)** First of all, you're not allowed to use any kind of for loop to implement this function.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=49)** You have to do it using only the array functions we talked about in an earlier section.
>
> **[0:54](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=54)** Or, if you want to really challenge yourself, you can use recursion, but I'm not going to go through that solution.
>
> **[0:59](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=59)** And just to give you a hint, you'll probably want to use array reduce for this one, as well as array merge.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=67)** The second rule is that you have to write this function as if you have no idea which names are in the array.
>
> **[1:12](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=72)** We can obviously look and see which names are in the array but your implementation should be generic enough that it could be applied to any array of names that we might want to pass in.
>
> **[1:22](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=82)** And last by not least, you're not allowed to use mutation of any kind in your implementation.
>
> **[1:27](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=87)** Well, at least try your absolute hardest to avoid it.
>
> **[1:31](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=91)** Well, that's all the rules.
>
> **[1:33](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=93)** This challenge should take you about 10 to 15 minutes to complete.
>
> **[1:36](https://www.linkedin.com/learning/functional-programming-with-php/challenge-tallying-votes?u=76281980&t=96)** Once you're finished, feel free to continue to the next video and we'll take a look at my solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1), pass (1), continue (1)
> **Cross-References:** we talked about (1), next video (1)
> **Definitions:** is called (1), in other words (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic techno music) (1)

#### Solution: Tallying votes
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=0)** - [Narrator] Okay so it's time to take a look at the solution of how to implement our tally votes function.
>
> **[0:10](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=10)** This is the way that I did it.
>
> **[0:13](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=13)** What I did was use array reduce, so I said return array reduce, and I called reduce on our votes argument with a starting value of an empty array.
>
> **[0:25](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=25)** Now, the accumulator function here was definitely the trickiest part.
>
> **[0:28](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=28)** So here's what I did, I defined a function that takes two arguments, carry and vote.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=35)** And what I did was use array merge with the first argument being carry which contained the votes that we had accumulated so far.
>
> **[0:45](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=45)** And then I merged that with an array where the key is the vote or the current name that we're looking at, and the value of that key would depend on whether or not there was already an entry for that name.
>
> **[0:57](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=57)** So what I did was use a ternary operator with the condition that array key exists and I wanted to see if the array that we'd accumulated so far had the current name as a key.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=70)** So I said array key exists, vote which is the current name and then carry.
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=77)** And if that carry argument already had that key, I said that the value for this name here should be carry at the key vote, plus one.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=88)** And if the carry argument didn't already have that name, we simply start off at one.
>
> **[1:39](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=99)** And if we run our code now, we see that we get the expected result.
>
> **[1:45](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=105)** Congratulations if you figured that out, I know it was a bit complicated.
>
> **[1:49](https://www.linkedin.com/learning/functional-programming-with-php/solution-tallying-votes?u=76281980&t=109)** Keep in mind also that you may have come up with something slightly different than my implementation and that's alright too.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3)
> **Best Practices:** the key is (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Challenge: Value or array
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=0)** (electronic techno music)
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=5)** - [Instructor] Okay, let's move on to the third functional programming challenge.
>
> **[0:09](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=9)** This challenge is called value or array and it goes like this.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=12)** As you get deeper into functional programming, you may start to find that you're using array_map a lot.
>
> **[0:19](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=19)** You've created a lot of nice functions, like double here, that work perfectly when you call them on a single value.
>
> **[0:24](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=24)** But you find that you're working with a lot of arrays where you want to apply these functions to all the elements in the array.
>
> **[0:31](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=31)** Normally if we want to apply a function to all the elements in an array, we need to use array_map.
>
> **[0:36](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=36)** And there's nothing wrong with doing this, per se.
>
> **[0:39](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=39)** But you might find that you're using array_map with a given function as often, or even more often, then you're using the function itself.
>
> **[0:48](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=48)** Now you might remember back from a previous video about higher-order functions that we used first-class functions to wrap other functions.
>
> **[0:56](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=56)** We created a safe version of a division function, for example, that prevented us from dividing by zero.
>
> **[1:02](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=62)** So what if there was a way that we could create a version of functions like double such that we could either pass a single value to it and get that value doubled, or we could pass an array to it and get all the values in that array doubled without having to use map?
>
> **[1:17](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=77)** Well there is a way to do this and your challenge is to find out how.
>
> **[1:21](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=81)** You need to implement the body of this call_on_value_or_array function, such that the rest of the code that I've put here produces the expected results.
>
> **[1:31](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=91)** And just as a hint, you might want to look back at the second_argument_isnt_zero function that we created earlier in the course and see if that helps you figure out what the basic structure of your implementation should be.
>
> **[1:43](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=103)** Oh, and another hint is that if you're not already familiar with it, php has a built-in function called is_array that will tell you whether or not a given variable is an array.
>
> **[1:54](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=114)** And that'll definitely come in handy for this challenge.
>
> **[1:57](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=117)** Well that's enough talk.
>
> **[1:59](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=119)** Let's see what you can do.
>
> **[2:00](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=120)** This challenge should take between 10 and 15 minutes to complete.
>
> **[2:03](https://www.linkedin.com/learning/functional-programming-with-php/challenge-value-or-array?u=76281980&t=123)** After you've solved it, or at least attempted it, continue on to the next video and I'll show you how I solved this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (2), pass (2), this. (1), this, (1)
> **Code Identifiers:** array_map (3), call_on_value_or_array (1), second_argument_isnt_zero (1), is_array (1)
> **CLI Commands:** find (4), php (1)
> **Cross-References:** previous video (1), earlier in (1), next video (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic techno music) (1)

#### Solution: Value or array
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=0)** - [Instructor] Okay, so let's take a look at one possible solution to implementing this call on value or array function.
>
> **[0:12](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=12)** What I did was actually copy and paste the body of the second args and zero function since I knew that we'd be wanting something like this.
>
> **[0:21](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=21)** So I copied it and then pasted it inside call on value or array.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=27)** And then instead of taking a variable number of args, I simply had one argument called data that will call our function up.
>
> **[0:35](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=35)** And then we want to keep the basic structure of using an if statement here the same, but instead of checking if one of the args is equal to zero, what we want to do is check if this data argument here is an array.
>
> **[0:47](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=47)** So we'll say if is array data and then if data is an array, this is where we want to use array map to map this function argument over this data here.
>
> **[1:00](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=60)** So what we'll do is simply say return, array map, function, data.
>
> **[1:10](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=70)** And last but not least, if the data that we're calling this function on isn't an array, we simply want to return the function called on that data.
>
> **[1:20](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=80)** And that should be about it to make all this code work here.
>
> **[1:23](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=83)** So if we run our program you see that we get exactly the expected results.
>
> **[1:29](https://www.linkedin.com/learning/functional-programming-with-php/solution-value-or-array?u=76281980&t=89)** Congratulations if you found this solution, or maybe you even found a better solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (1), this. (1), return, (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=0)** - [Shaun] Well this brings us to end of the course.
>
> **[0:02](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=2)** We've definitely covered a lot of topics here.
>
> **[0:05](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=5)** We started off with the basic concepts of functional programming and how it compares to object-oriented programming, and then moved on to first-class functions and how to work with them in PHP.
>
> **[0:16](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=16)** After that, we saw how functional programming makes working with data structures very straight forward, followed by an introduction to the advanced concepts of recursion, partial application and composition.
>
> **[0:27](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=27)** Now that you've had a solid introduction to the world of functional programming, you might be wondering where to go next, and there are several things I'd recommend.
>
> **[0:36](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=36)** First and foremost, I'd recommend that you start trying to apply functional programming concepts in your own code.
>
> **[0:42](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=42)** You'll be amazed at how quickly you'll get the hang of it and how much the quality of your code improves once you start doing this.
>
> **[0:49](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=49)** If you're looking for any books, I'd highly recommend the book, "Structure and Interpretation of Computer Programs" by Harold Abelson.
>
> **[0:57](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=57)** Despite its rather dense-sounding title, this book is a fantastic way to get very deep into the functional programming world.
>
> **[1:04](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=64)** Just be warned that the programming language it uses it Lisp.
>
> **[1:07](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=67)** The best part is that this book is freely available from MIT Press.
>
> **[1:12](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=72)** Also, if you're curious to see how the functional concepts I've covered in this course are expressed in other languages such as JavaScript, I have other courses on that as well.
>
> **[1:22](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=82)** Well thank you so much for watching.
>
> **[1:24](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=84)** If you want to get in touch with me, please don't hesitate to connect with me on LinkedIn.
>
> **[1:28](https://www.linkedin.com/learning/functional-programming-with-php/next-steps?u=76281980&t=88)** I'm on LinkedIn quite often and would love to hear any questions or comments from you, or if you just want to say hi, that's all right too.

> [!info]- Semantic Content
>
> **Env Vars:** php (1), mit (1)
> **CLI Commands:** php (1)
> **Code Keywords:** this. (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [shaun] (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available

## Skills Covered

- PHP

## Path Context

### In [[Advance Your PHP Skills]]
← [[Php Testing Legacy Applications]] | **2 of 7** | [[PHP Techniques- Working with Files and Directories]] →

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP

---

[↑ Back to top](#)