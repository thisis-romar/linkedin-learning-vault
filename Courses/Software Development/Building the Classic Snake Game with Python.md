---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-the-classic-snake-game-with-python
url: "https://www.linkedin.com/learning/building-the-classic-snake-game-with-python"
duration_minutes: 77
duration: 1h 17m
level: Intermediate
updated: 1/30/2024
learners: 101584
skills:
  - Python (Programming Language)
  - Game Programming
exercise_files: true
github: "https://github.com/LinkedInLearning/snake-game-python-2896343"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHnKo9bVeGWvg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634664629182?e=2147483647&amp;v=beta&amp;t=tce3cMRiOhSI0qMKw5At4vvqIV1ZIrudnLjf6DKUoNo"
linkedin_topic: Software Development
learning_paths:
  - '[Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)'
prev_courses:
  - '[Python Practice- Object-Oriented Programming](Python%20Practice-%20Object-Oriented%20Programming.md)'
next_courses:
  - '[Python Projects- Create an Interactive Quiz Application](Python%20Projects-%20Create%20an%20Interactive%20Quiz%20Application.md)'
path_nav: '[{"path":"Python Hands-On Practice","position":6,"total":14,"prev":"Python Practice- Object-Oriented Programming","next":"Python Projects- Create an Interactive Quiz Application"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/game-programming
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Building%20the%20Classic%20Snake%20Game%20with%20Python.md)

![Building the Classic Snake Game with Python](https://media.licdn.com/dms/image/v2/C560DAQHnKo9bVeGWvg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634664629182?e=2147483647&amp;v=beta&amp;t=tce3cMRiOhSI0qMKw5At4vvqIV1ZIrudnLjf6DKUoNo)

# Building the Classic Snake Game with Python

> In this course, instructor Robin Andrews shows you how to put together what you need to know to build the Python version of a classic Snake game. Robin introduces you to turtle graphics and how you can use and control animation using Python turtle graphics. He explains global variables and shows you how to draw with turtle graphics by using stamps. With these pieces in place, it’s time to work on 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python) | 1h 17m | Intermediate | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Take your Python skills to the next level](#take-your-python-skills-to-the-next-level)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Python Turtle Graphics**](#1-introduction-to-python-turtle-graphics) (6 videos)
  - [Meet turtle graphics](#meet-turtle-graphics)
  - [Working with the repository for this course](#working-with-the-repository-for-this-course)
  - [A starter template for turtle graphics programs](#a-starter-template-for-turtle-graphics-programs)
  - [Animation with Python turtle graphics](#animation-with-python-turtle-graphics)
  - [Global variables](#global-variables)
  - [Drawing with stamps](#drawing-with-stamps)
- [**2. The Snake Game**](#2-the-snake-game) (7 videos)
  - [Snake representation and movement](#snake-representation-and-movement)
  - [Basic snake movement program](#basic-snake-movement-program)
  - [Controlling the snake's direction](#controlling-the-snakes-direction)
  - [The game loop](#the-game-loop)
  - [Snake food](#snake-food)
  - [Keeping score](#keeping-score)
  - [Game reset](#game-reset)
- [**3. Finishing Touches**](#3-finishing-touches) (5 videos)
  - [Avoiding repetition by using Lambda expressions](#avoiding-repetition-by-using-lambda-expressions)
  - [Personalizing your game](#personalizing-your-game)
  - [Adding graphics to the snake game](#adding-graphics-to-the-snake-game)
  - [Adding the snake head to the game](#adding-the-snake-head-to-the-game)
  - [Adding a high-score feature](#adding-a-high-score-feature)
- [**Conclusion**](#conclusion) (1 videos)
  - [Integrating material covered](#integrating-material-covered)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Take your Python skills to the next level](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980&t=0)** Want to take your [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) skills to the next level and have great fun along the way? The snake game has become a classic since it appeared on mobile phones a few years back. Programming this game is a great opportunity to consolidate your existing Python knowledge and to learn important new concepts and techniques. Hi, I'm Robin Andrews. I'm a computer science teacher based in the U.K. I invite you to join me on this exciting project-based course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)

#### [What you should know](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a quick checklist of prior knowledge that it would be helpful to have to get the most from this course. Don't worry though if some of these topics are a bit hazy, as I will explain the code as we go along.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Python Turtle Graphics

[↑ Back to Table of Contents](#table-of-contents)

#### [Meet turtle graphics](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=0)** - Instructor] Turtle graphics is a popular educational tool for teaching and learning about programming. And for good reason, it is awesome. In my opinion, it is one of the best tools there is for learning how to program with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). With it, you can progress from total beginner to mastering important advanced [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md). Turtle graphics was created in the 1960s when the logo programming language was extended to control the turtle robot, a simple robot that looked a bit like a turtle and had a pen attached, which would draw on a large piece of paper on the floor. When writing programs with Turtle graphics, you get instant visual feedback from your code, so you can see clearly what is happening and how it works. When you install Python with a standard installation, it comes with an IDE called IDLE, which is like a beginners IDE. And in IDLE, there is a help menu. And if you go to Turtle Demo in the help menu, then you'll see there's some really interesting sample programs for turtle graphics. So you click on Examples. And by the way, if you're on Mac, you would access IDLE by going into a terminal and typing IDLE 3 and then pressing Enter. So there's this selection of example programs. So, for example, there is a planet and moon animation. You can see the code here on the left. This uses object oriented programming. So it's very interesting just in terms of the code to have a look at what's going on. But the actual result is this little animation here.
>
> **[1:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=88)** And that's one of them. There's another one, which is Nim, which is the game of Nim, which is a strategy game where you have to remove sticks or coins or whatever you're using. Press space bar to start. Okay, so the computer's played and then I select. It's the black ones, I guess, I'm removing. So I click on there. So that's an implementation of Nim. And again, you can see the code over here on the left. Another example, Two Canvases. This shows you, you can actually have two turtle graphics [Windows](../../Glossary/Service/Windows.md) going at once. That's quite useful. And let's just look at one more. So maybe the ground dance. There we go. So this is a really nice animation. With relatively little code. If you look here on the left, we're not using a lot of commands, but we're getting this really quite impressive animation going on. So these are some examples of, what you can do with Turtle graphics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** idle (4), ide (2)
> **Definitions:** is a  (5)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** python (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### [Working with the repository for this course](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=0)** - [Instructor] Before we get started with some actual coding, I just want to quickly talk about the [GitHub](../../Skills/Software%20Development/GitHub.md) repo for this project. So if you go to the URL provided, you'll see that we have a repository for the project, and probably the easiest way to get the code is to download the ZIP file and unzip it. You can also copy the URL and you can use a terminal to clone the repo. When you want to select a branch, if you go to this button here where it says main at the moment, at the moment, I only have that branch, but many of the videos will have their own branches and they will appear in this menu, and you can select the relevant one. If we have a B at the end of a chapter name, so for example, 01_02b, that'll be the state at the beginning of the video. And then, if we have an e at the end of the chapter name, that will be the state at the end of a particular chapter. If you are working with a local version of the repository for this course, then you'll need to know how to check out the various branches. Now, if you have PyCharm, you can simply go to [Git](../../Skills/Software%20Development/Git.md) and select Branches, and you'll see all the branches listed. The current one, having this little symbol next to it, showing that at the minute, 03_02e is checked out. Now, the naming convention is the beginning state for a particular video, has a b at the end of it, and the end state has an e at the end of it. So 03_02E is the state at the end of chapter three, video two. You can also do this in a terminal, which on PyCharm, you can open without F12 on [Windows](../../Glossary/Service/Windows.md), and you can check out a particular branch. So we can do git checkout, and let's try 02_03b. I think there's a beginning one for that branch.
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=93)** Okay, so we switched to that branch and you'll see that the file structure, the project directory, updates to reflect the state for that particular state of development. So that's how you work with branches locally. Or you can just do it all on GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Git](../../Skills/Software%20Development/Git.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **Tools:** github (2), terminal (2), pycharm (2)
> **Env Vars:** url (2), zip (1), f12 (1)
> **UI Navigation:** go to (3), select the (1)
> **Exercise Files:** github repo (1), download the (1), zip file (1), clone the repo (1)
> **CLI Commands:** git (2), unzip (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)

#### [A starter template for turtle graphics programs](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=0)** - [Instructor] So let's make a start. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) turtle graphics caters for different levels of ability and experience, and because of this, there are sometimes different ways of achieving the same result. There are two styles of coding, which you can use with Python turtle graphics, which is sometimes referred to as interfaces. These are called the procedural interface and the object-oriented interface. What I'm going to do now is show you an example of the procedural interface. So I'm going to create a new file. Python file. And I'm going to call this procedural.py. And this is the kind of code you'll be creating if you're a beginner with Python turtle graphics and you're not interested in going particularly far with it, you're just using it to kind of mess around. So you would do from turtle import all. And then simply set a color by doing color. And then we can have forward, which can be abbreviated to fd. So forward 100 pixels, right 90 degrees, and then forward 100 pixels again. I'm just going to copy paste this because there's no particular need to type it. And then those two lines. Okay, and then when we're done, we have this command done that just sets everything in motion. So this is a procedural turtle graphics program, and if I run it,
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=94)** then you'll see we get a square. So we didn't have to create any turtles or anything, we just used it as a full turtle and told it to go forward to rotate 90 degrees, go forward again four times, and then we had a square. So I'm just going to tied up that code if needed. It's all good. So that's the procedural interface, and it's great for beginners. But we want to do more advanced stuff, so I'm going to show you now how to do [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) with turtle graphics. So create a new file. oop_turtle.py. So let's make a few comments just to say what I'm doing. So I'm importing the turtle graphics module,
>
> **[2:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=136)** which is done simply with import turtle. Notice that I'm not importing everything using that star syntax here because I want to be a bit more precise. Now I'm going to create a turtle, so this is a turtle object, to do your bidding. And I'm going to call it my_turtle. And it's going to equal turtle, so that's the module, .Turtle, that's the class within the module, which represents a turtle object. So the turtle object of the turtle module. And then I'm going to set some properties in my_turtle.shape. I'm going to set it to be turtle shaped. And a set a color. Red. So now, your turtle awaits your command. So we'll do a sample command my_turtle.forward, 100. So this, it looks like a more complicated way of doing what we just did, but there's a good reason for it. We have a lot more control over what happens in our program if we use the OOP interface. And this is a sample command. And then we have turtle.done. And let's just make a comment there that that is the statement. So turtle.done or an equivalent
>
> **[3:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=229)** is needed at the end of all your turtle programs, just to set things up properly and so you can exit by clicking the little cross in the turtle graphics window. And I'm just going to tidy up my code again. Reformat Code. Very useful feature of PyCharm, it just puts all the right spacing and stuff in. So now when I run that. Okay, not as impressive as the last program even, but the syntax here is what we're going to be using for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course. So what I've actually done is I've provided a starter template for turtle graphics programs. Very similar to the last program, just a few more details. So we've got a couple of constants. So we're setting the width and height of our turtle window, which then gets used here on line 10 to create a window of the desired size based on those constants. This is all the same. This is my_turtle, that's just creating a turtle. But here is the screen, so this is important. So, by creating a screen object, we get a lot more control over our turtle graphics window. So we create a screen with turtle.Screen with a capital S there on the screen. And then we can set the dimensions, like on line 10, we can set the title, we can set the background color, and all sorts of other stuff. But it's very useful to have reference to a screen object, so that's why I've done that. And then this is the same, your turtle awaits your command, and the end is the same as well. So that's a template you can use as a kind of starting point for your own programs, and it will also be the starting point for our snake game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** python (4), make (3)
> **Code Identifiers:** my_turtle (4), oop_turtle (1)
> **Definitions:** is a  (3)
> **File Paths:** procedural.py (1), oop_turtle.py (1)
> **Exercise Files:** template (2)
> **Env Vars:** oop (1)
> **Tools:** pycharm (1)

#### [Animation with Python turtle graphics](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=0)** - Before we dive into the snake game itself, we're going to look at how to do animation with [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) turtle graphics. There's a lot of animation capability built into turtle graphics by default. For example, when you move a turtle forward using something like my turtle dot forward 100, my turtle does indeed move forward, which is a type of animation. However, sometimes you want more control of how the animation works and we can do this by turning off the default animation behavior using screen dot tracer zero, and instead, manually updating the display when we wish, usually inside a loop with a timer attached. Let's have a look at this now. So this is the turtle graphics program template from the last chapter and we're going to modify it to show you this principle. So, where we're creating our screen here on line 12, we're going to add another line and it's going to be screen, dot tracer and I'm going to put zero. You can also put false they're equivalent. And what this does is it turns off the automatic animation. Now there's actually some methods where it will still update the screen anyway, because that's built into the method itself. Don't worry about that for now. But basically most of the default animation will be turned off by this screen dot tracer zero, or screen dot tracer false. So that means we're now manually controlling the animation and we're going to do that within a function. And the function's going to be called loop turtle. And we're going to do my turtle dot forward, just one pixel and then we're going to rotate it. So my turtle dot, right, just one degree. And then we're going to update the screen.
>
> **[1:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=99)** Now this is the magic bit ready. So we do screen dot ontimer. So we're creating a timer which is going to call a function. In this case, the function's going to be move turtle, which is the very function we're currently defining. Notice that I deleted those parentheses there because I don't want to actually make a function called it. I just want to specify which function is going to be called. And this is going to be after a particular interval. Now I'm going to use a constant here, which I haven't yet defined. So I'll just quickly define that now. And let's do something quite quick, we'll do something like 20 milliseconds. So this is the number of milliseconds between screen updates. Now currently it's not going to do anything 'cause we haven't called this move turtle for the first time. So hopefully you can see that once we've called it once, it will then call itself again, using this timer, but we have to make that initial call to make things move. So, let's change this bit of code here on line 27 to set animation in motion. And we're going to do that just by making an initial call to move turtle.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=175)** And as you can see, we've created our own manually controlled animation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (3), python (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - before (1)

#### [Global variables](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=0)** - Now is a good time to talk about global variables, as we just used one in the last program. This was the variable, my_turtle. We're now going to take a little detour to explore this concept. The snake game program we're going to write makes use of several global variables. These are variables which exist outside of any functions in a program, but which can be used inside particular functions if required. You may have heard that global variables are bad and should be avoided. However, this is an oversimplification. While there are many situations where it is a good idea to avoid them, the global keyword exists in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) for a reason, and using global variables for a program like the snake game we're writing makes sense as not doing so would make the program a lot more complex. Context is important. To understand how global variables work, let's take a look at an example. So, if I define a variable called name and I set it equal to Susan And I print the name. Just make sure everything's working. You can see Susan gets printed as expected, so that's fine. So we have this variable, name. Now I'm going to define a function. Def, print, name. And I'm going to set name equal to Peter. And then inside that function, I'm going to print name. So, let's see what happens. If I do print name as a function call, what do you think it's going to print? Think about that.
>
> **[1:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=91)** And that also print name as just the variable itself. And as always I just like to tidy up my code before running it. Okay, so think about what the output might be here. Okay, so we get Susan, Peter, Susan. So the name variable wasn't modified inside the function. This is because by default, variables inside functions are local. They exist only inside the function and are destroyed once the function call is complete. So in the output, the Susan there is the output of line two. Then, Peter here is the output from the function call that we made on line 10, which goes into the function and prints the local version of name, which is Peter, but then outside of the function, Susan still exists as a global variable. So that's what gets printed by line 11. I'm now going to do file, save as, and I'm just going to call this global two instead of global one, just to show you a slightly different example now. So, this is going to be the same, but inside of a function we're going to use the global keyword. And we're going to make this name variable reference the global version of it. That's the one outside of the function. So now when we run the code, you can see we get Susan, Peter, Peter. Can you see why this happened? Because we use the global version of the variable name inside the print name function,
>
> **[3:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=185)** the value of name outside of the function was modified too. So that means when we called on line 12, we printed name, name had been updated by the assignment that we did on line seven inside of our function. You can think about scope as a type of visibility. So if a variable scope is global, it can be seen by the whole program. If it is local, it can only be seen within the current function. One detail about global variables that is worth noting is that if a function only needs to read a global variable, there is no need to use the global keyword to make it available to the function. However, if the global variable is going to be modified within the function, the global keyword is needed. You will see examples in this course of both of these situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (4), python (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** my_turtle (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - now (1)

#### [Drawing with stamps](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=0)** - The stamp command in turtle graphics is not that well known. And as a result, programmers often do things in a more complicated way than they need to. It's a really useful feature, and I'm going to show you how it works now. So we have here the starter template, and I'm going to modify this to make it into a stamping program. So a lot of it's going to be the same. So we've got our constants for the dimensions. We've got a screen that we've created. It's not going to be called Generically Programmed Title. It's going to be called Stamping and we can keep it Cyan, nice enough color. I'm going to change the name of my turtle. And actually this is a useful feature of Pie Charm. If I want to refactor this, So, I don't have to do it every time, I can just rename every instance and call it stamper. It's a good enough name for a stamper, a turtle that stamps. Okay. So we create a turtle. That's going to do our stamping. We set some properties of it. So we give it a shape of turtle. In fact, this time I'm going to use the square shape. It's more useful and we'll have it red. That's fine. Now, there's another property we need to set, which is the shape size. So, stamper.shapesize, and I'm going to do 50 divided by 20. Now this can be a little bit confusing. Basically, 20 is the default size of a square shape in turtle graphics. So if we do 50 divided by 20, it means that our stamp will be 50 pixels. It's not entirely logical to be honest, but this definitely is the way to do it. If you want to have pixel control over the size of a turtle, then just state the number of pixels and divide it by 20 and you'll be in good shape.
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=93)** So, then I will do stamper.stamp and this in the current location of the turtle will make a stamp. And then I'm going to move it stamper.penup so that it doesn't make a mark while it's moving. And I'm going to change the size before doing the next stamp. And this time I want the more smaller ones, I'll do 10 divided by 20, and then move it stamper.goto, to somewhere different from where it was to 100, 100 and then stamp again. Okay. And as usual just tidy my code or the, looks like it was fine already. And just before I've run it, I'm going to remove this part of the original template because we don't need that anymore. So then when we run it, you can see we get two stamps. So the first one was made when the stamper.shape size was 50 pixels. And that was in the original location, which by default was 0, 0. And then we lifted up the pen so that it didn't make a mark while it moved. It moved to this new location 100, 100. And this time the size was 10, just 10 pixels. And we stamped, and this was the result. Okay. So it's a really useful feature. Some of the things you can do with it, Board Games, if you want to make a Chess Board, something like that, very, very useful. In fact, that's a very good exercise, 2D Games, such as snake, which we're making or Tron clones. If you want to do stuff with mazes, it can be really useful, if you want to do Pixel Art.
>
> **[3:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=186)** And I'm sure you can think of other examples as well. So it's very useful feature.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)


### 2. The Snake Game

[↑ Back to Table of Contents](#table-of-contents)

#### [Snake representation and movement](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=0)** - In this video, I'm going to give you a conceptual overview of how the snake in our game will be represented and how it will move. If you like, before continuing watching, have a think about how you might begin to implement this yourself. So in our version, we're going to represent the snake as a list of pairs of X, Y coordinates. So you can see here we have a list containing other lists, smaller lists, and each of those inner lists contains an X and a Y coordinate. The segments of the snake are currently lying all horizontally with Y coordinates of zero. Now, for this demonstration, consider the leftmost list item to be the tail and the rightmost to be the head. So here's that representation shown on a grid. So the green squares are the segments of the snake. Now, the first thing we do is you make a copy of the head, and then we update the coordinates of that head to the new location and append it. So now there's five segments. So we need to remove the last segment so the snake doesn't change length. And then finally turn everything back to the original color. This is now the new position of the snake, ready to make another move. So again, we make a copy of the head. We update the position of the head and append it. Then we remove the last segment. And again, this is the new position. So let's look at that in just a little bit more detail. So to begin with, we have this list of lists, and by the way, lists of lists are quite common in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and they're no cause for concern. You can nest lists as deeply as you like. In this case, we only have one level of nesting, and this kind of list is often referred to as a 2D list. If you want to deep dive into Python 2D lists, I have a course on the subject in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Library,
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=93)** which you may like to check out. So let's just go through that process again to make sure you understand it. So to move, we first create a new list item for the new head. This is looking a bit more at the code now, rather than just the concept. So we create a new segment, which is the right-hand segment, and it's a copy of the existing right-hand segment. And they must be copied; otherwise, the original would be modified by the next step. So when we update it, we don't want to lose that original one; okay? So new_head is now the same coordinates as the old head of the snake. But then what we do is we increment the X coordinate in this example. So new_head[0], this means the X coordinate of that new segment that we've created, we increment its X coordinate by 20. So now the coordinates of that segment are 80 comma zero; okay? And we're just using plus equals here as a shorthand for new_head[0] equals new_head[0] plus 20, so a very common shorthand to use. And then we append this new cell that we've created to the snake that we've already got. And it goes to the right-hand side. So you can see now we have five items. So this new 80 comma zero segment has been appended to the end; okay? That's the right-hand side, which we're calling the head; okay? So we now have five segments, which has awfully changed the original length for the snake, so we don't want to do that. So what we then do is we pop the first element of the list, that's the zero, zero. It's the leftmost item. And then the snake will return to its original length. And that's the process. And we'll look in much more detail at the code in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (4), python (2)
> **Code Identifiers:** new_head (4)
> **Cross-References:** in the next (1)
> **Speakers:** - in (1)

#### [Basic snake movement program](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=0)** - [Narrator] We're now going to look at how the basic snake movement can be implemented in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). We're going to use stamps to make marks on the screen as shown in a previous video. And what I have here is the stamp code from that previous video, but I've saved it with a new name, which is basic name movement, and we're going to edit it so that it does what we want it to do for this chapter. So, first of all, let's just make a few changes outside of the main movement function. I'm going to change that comment to something just a little bit more legible. Finished nicely. Okay. So we need something like that at the end of all of our turtle programs. Then we're going to add another constant, which is delay. And you saw this in a previous video, when we were talking about animation in general. Let's do 400 failure. Obviously you can change this. This is milliseconds between frame updates. So this is going to be relatively slow, just so we can see what's happening. Then in terms of our screen, we're going to create a screen as usual. We're going to set it up using these constants width and height. We'll give it a different name this time. This is now a snake. It's the first program we're actually doing snake. And let's give her a different background color. Let's give it pink. I've actually chosen this because it reminds me of a very old Atari game on a very old console, but that's just a personal preference for these retro things. You can choose whatever color you like. In fact, you know, the colors available in turtle graphics, pretty much anything you can think of will be available and
>
> **[1:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=92)** you can use hex codes as well. But another important thing we need to do is screen dot tracer. And we discussed this in a previous video. This disables the automatic animation, giving us more or less full control of when we update the screen. Alright, having said that some of the Turk commands will automatically call a screen update in the background. So it doesn't give you full control, but it basically turns off animation. Okay. So, turning off automatic animation. Now, in terms of our stamper, we're going to have a square stamper. That's fine. The color doesn't really matter, but let's not put a color and then it'll be the default black, because that's the one I'm using for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this game. Again, you can change to any color you like there. I'm not going to change the shape size. In fact, all of this can go cause this was relevant to the previous video. But I am going to do pen up. So that means it's not going to make marks as it moves. Okay. That's quite important. Otherwise you get a very messy screen. Okay? So we've got a stamper turtle. Its shape is square and it's not drawing on the screen. Okay. So now, let's create our snake representation as the list of lists. And this is what we had on the slide in the previous video, we're going to call it snake it's a global variable and there's going to be a list of lists. The first pair is going to be zero, zero. Then we're going to have 20 comma zero. This is the initial position of the snake or the segments of the snake, 40 comma zero and 60 comma zero.
>
> **[3:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=186)** Okay. So this is our representation of the snake in Python. Now we're going to draw the snake first off and we're going to do that by using a for-loop. So for segment in snake, we're going to do stamper dot go to, and it's going to be the X coordinate and then the Y coordinate. So that's segment zero and segment one, Okay so, zero will be the X coordinate in each pair and segment one will be the Y coordinate in each pair. So we go to the place we want to go to, and then we do stamper dot stamp. Let's just tidy that up and run it and see what we get. Okay. So you can see this actually draws the snake for the first time. It takes the list of lists of coordinate pairs, and it turns them into stamps by moving to the location and then making a stamp. Okay. So that was drawing the snake for the first time. So that's a good start. However, for the snake movement, we need a movement function. And what we had before was a function. I think it was called move turtle. And we're going to call this one, move snake. So Def move snake. Doesn't take any arguments. Now the first thing we're going to do is we are going to clear all the existing stamps that have been made. So we do stamper dot clear stamps.
>
> **[4:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=282)** That gets rid of all the stamps that the stamp has made. So that gets rid of the existing snake, which has been drawn. Right now, we're going to do that business that we talked about on the slide. So we're going to create a new head segment. I'm going to call it a new head, it's going to be equal to the snake. And it's going to be the last segment in the list. And it's going to be a copy of it because if we don't make a copy of it, then when we update it, it will actually change the original, which we don't want. Then you had that, this, the X coordinate. Then you had zero plus equals 20. That means we increment the X coordinate of this new head. Okay. And then we can actually append it. So add new head to snake body.
>
> **[5:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=335)** We do that with snake dot append. The new head. Then we need to remove the last one. And we do that using snake dot pop. And we're going to specify the zero element of the list because we want to remove the left-hand element. Okay. So we've now updated the representation of the snake internally. That's that list of lists, but we need to draw it. So again, draw a snake. I'm just going to copy this because exactly the same commands for drawing the snake. However, this still wouldn't be rendered. So if we wanted to render, then we have to refresh the screen. So that's going to be screen dot update. And then we need to do it lots of times. And we're going to do that by doing turtle dot on timer. So we're creating a timer whose function is move snake. Which is the function we are currently defining. And we're going to do it with intervals of delay.
>
> **[6:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=407)** Okay so now when I run this And nothing happens. Now, why is that? Okay, so nothing's happening. And that's because we haven't actually set the thing in motion. So we need to set the thing in motion by making that initial call to move snake. All subsequent calls will be handled by that timer that we created. But without that initial call, the whole thing never gets to kick off. Okay. So then that should work now. Okay and you can see it's moving its way along the screen. The snake disappears off screen before long, but this is a great start. We can add checks for border collisions and food collisions, et cetera, and also changed the direction of the snake later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (4), python (2)
> **Cross-References:** previous video (4), we discussed (1), we talked about (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Controlling the snake's direction](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=0)** - We're now going to look at how to control the snake's direction. Controlling the snake's direction involves diving into the concept of events and event callback functions. Before getting into that though, we first need to create two new variables. One is a global variable called snake directions. The other is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) dictionary containing offsets which determine how much the snake moves in each direction. So let's do that now. So let's put our offsets up here at the top along with our constants, even though it's not technically a constant because of the dictionary. Offsets equals a dictionary and it's going to have up. It's going to give us an offset of 0,20, because that's plus twenty in the Y-direction. Down is going to give us an offset of 0 and minus twenty or negative twenty. And left will give us an offset of negative 20,0. Zero for the y, negative twenty for the x. And then right is going to give us an offset of 20,0. Okay, so that's our offsets. Then this snake direction we're going to add outside of any functions. It's just going to be after we create this snake. And that's going to be snake direction. Initially, it's going to be set to up. And this is a global variable. With that done, we can now talk about the event loop. You use a event loops all the time
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=94)** when working with computers. Although you may well not be aware of it. The basic idea is that a program listens for some kind of event to happen such as a key press or a mouse click. And in response to particular events, specific actions are preformed. In order to be able to listen, regular checks must be made to see if an event has happened. Hence an event loop. You've used event loops in your Python Turtle Graphics Programs already. Do you remember turtles.done for example? What this does is it tells to [Tkinter](../../Skills/Software%20Development/Tkinter.md) which turtle graphics is build on, to wait for the user to click on the "x" on the window title bar to exit the program. The events we're interested in for our snake game are key presses. We want to be able to change the direction of the snake when the player presses an arrow key. So, in order to make our program listen for events, we call listen on the screen object. So, I'm going to create a new section of code. I'm going to call it event handlers. And to start with, we're just going to do screen.listen. Okay, this tells the screen to listen for events such as collecting key presses. But now we need to talk about event callback functions. So, an event callback function is the function which is specified as the required response to a particular event. So, for example in our game, if the player presses up, we want to call a function that changes the snake's direction to up, and likewise for the other directions. Now, we're going to specify our callbacks in the following way. We're going to do screen.onkey. So, when a key is pressed, we're going to call go up, that's the name of our function. Without the brackets, cause it's not a function call. It's a specification of which function to call. So, go up and that is when the up key is pressed.
>
> **[3:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=188)** So, that's up with a capital U. And similarly for the other ones are the control (indistinct). Go right for when the right key is pressed and go down for when down is pressed. And go left for when left is pressed. So, this is how we specify the callbacks for key press events. So, on key the function we want to call and then the key that it responds to. Now we haven't defined these yet. Go up, go right, go down, and go left. So, we're going to do that next. So, def go up. So, at this point we need our global variable snake direction. And I'm making it global, cause we might be updating it. Or we're using the global key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), because we might be updating the snake direction. As I said before if you're only reading it, you don't need the global key word. Now, here we just want to put in an if statement so that we don't accidentally press the opposite direction to what we're going and create a collision. So, we're going to rule out that possibility. So, what I mean is if snake direction (indistinct) suggestions. If doesn't equal down. Then we can update the snake direction. Snake direction equals up, okay. So, if you think about it,
>
> **[4:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=281)** you want to move the snake up, but you only want to do that if you're not going down. Okay, now the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) if these are very similar, so I'm just going to copy-paste. And later on we'll look at more a efficient way of not having to have multiple functions for very similar behavior, but that comes later. So, we've got go up, so that's going to be go right. And this is going to be go down. And this is going to be go left. And lets just get all of these directions right now. So, we've got go right. So, if we're not going left. Then we go right. And then if we're going down. If we're not going up. Then we want to go down. And if we go left. If we're not going right, then we go left. Okay, so that's the event callback functions. Now, the only other change we need to make is inside of our move-snake function. I'm not just going to update the x-coordinate which we did for our demonstration program, but we actually need to change both directions. Okay, the x and the y-coordinate. So, I'm going to do new head zero plus equals and I'm going to get my offsets from the offsets dictionary, all right. So, the x-coordinate is going to be equal to the first one of those. So, it's going to be plus equals offsets of the particular snake direction.
>
> **[6:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=374)** And this is going to be the zeroth one of those. And what do the other one... The new head one. This means the y-coordinate is going to be the offset for the particular snake direction and that's going to be one. So, you might need to think about what's going on there a bit. New head zero and new head one of the x y coordinates of that new segment and we're incrementing them by an amount specified in our offsets dictionary which is up here for the particular direction which the snake is heading in. Okay, lets tidy the other one up. And see what happens. And here it is. So, the arrow key's now control the direction of the snake. Now, if you aren't careful it will disappear off screen and you might have trouble bringing it back on screen. Could even make an interesting little challenge of it's own. There it is. You can change the speed as well obviously. So, if you want something a bit faster. That's 100. So, it's going to be a little bit more like a snake game now. Okay, long way to go, but this is the basics of snake movement and changing the snake direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Tkinter](../../Skills/Software%20Development/Tkinter.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3), python (2)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **Documentation:** specification (1)
> **UI Navigation:** click on (1)
> **Warnings:** be aware (1)
> **Speakers:** - we (1)

#### [The game loop](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=0)** - The heart of many games is the game loop. This is where essential game operations, such as updating positions of game objects and checking for collisions occurs continuously until the game ends. The game loop for the snake game needs to achieve the following. We need to clear the existing snake from the screen. We need to draw the snake in his new position, check for collisions, with walls, self, or food, and handle these appropriately and also update the score so far. Our snake animation has been handled by the function of move snake. The game loop needs to do the same, but it has additional responsibilities as well. So we'll rename a moose snake to game loop and add some new functionality.
>
> **[0:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=45)** Okay. So we've renamed that now in terms of collision detection, we want to check whether the snake has collided with either of the four walls, the top bottom left, or right. Whether it's collided with itself and later on, whether it's collided with an item of food as well. And we're going to do that by modifying the game loop function from what it was. And we're going to add these checks. So we're going to check collisions, and this is going to require a little bit of maths. So if the new head that's what we just create, is this exactly the same as it was in the last video, the creation of the new head, but now we're going to do a check based on that. And you heard, right? So if new head is in the snake, okay, so that would be a snake with snake collision, or you had a zero that's . The X coordinate of the new head is less than negative the width. So if you think about it, the center of the coordinates is zero, zero. So half the width negative would be the left-hand wall. So if it's less than that with divided by two or the new head zero, so we're still talking about the X coordinate here is greater than the width divided by two, remember divided by two because we're starting in the middle at zero zero. So the width extends from half of the full width from the negative X direction to half of the full from the positive X direction and I'm running out of spaces. So I'm going to go into a new line by using this backslash and continue with all.
>
> **[2:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=141)** So this time you had one that's, the Y coordinate is less than negative height divided by two. So negative height divided by two is the bottom wall, or you had one is a greater than height, divided by two. So that's all the wall collisions. And we've also covered the snake, the snake collision with this new head in snake. Okay. So think about the math for a bit and make sure you understand it. But if that's the case, what we're going to do is we're going to do turtle. By. Okay. That is just a way of closing the programs or ending the turtle graphics program. However, if there's no collision, so we now need an else. So if there's no collision, we just proceed as normal. So that's all this stuff we were doing, but let's just make sure we move it into the correct level of indentation. This is all going to happen if the else condition holds not otherwise. So let's just try that up and run it. So that's all fine working back when we hit the edge, the game ends when we hit the edge, they game ends and let's try and collide with ourself. Yeah. Did you have to be pretty quick to do that? If you want to have a bit more of a chance of doing that, you can slow it down a bit. That's about a 500 milliseconds between frames. It's probably easy to crash, so you have to do it after a turn. Hang on. I need to think about this.
>
> **[3:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=235)** So I have to do it after a turn and then back on itself, quickly you go. So that's how you do collision detection for the walls and for the snake to snake collision this version abruptly exits the program. If a collision occurs later on, we will change this. So the game restarts instead, the collision code is fairly straightforward in principle. It is worth spending some time making sure you understand that works. We're checking first, whether the new head is in the same location as an existing part of the snake, which would be a self collision. And then we check the X and Y coordinates of the new head against the boundaries of the screen, calculate from width and height.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [Snake food](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=0)** - [Instructor] The goal of the snake game is to get the snake to eat food, so we need to add that functionality. There are a few functions what we use to achieve this. First of all, we're going to look at a function to find the distance between points. We're going to use an implementation of the famous Pythagorean theorem, and a common use of the theorem in [Game Programming](../../Skills/Software%20Development/Game%20Programming.md) is finding the distance between two points, which works because you can think of this distance as the hypotenuse of a right angle triangle, as shown on the slide. So we have two points, and if we drop a vertical and draw a horizontal, we can make this into a right angle triangle, and then the distance between those points becomes the hypotenuse of a right angle triangle, which means we can use Pythagoras' theorem to find that distance. It's good to be able to understand this level of mathematics to help with your computer programming in general, in [Game Development](../../Skills/Software%20Development/Game%20Development.md) in particular. But if this is a sticking point for you, don't worry. You can just go ahead and use the function in your program, and it will provide the correct result. The reason we need this function in our game is to determine when the snake's head comes close enough to a piece of food for it to qualify as a collision. We're not doing precise collision detections here, checking exactly when the circular snake food intersects with the snake's at square head. Instead, for the purposes of this game, it is sufficient to check whether the snake's head is within a set number of pixels from the center of the food. So let's add this function now to our game. So we're going to create a function, and it's going to be called get distance. And it's going to take a position one and position two. So we're going to have x1 and a y1,
>
> **[1:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=96)** are unpacked from pos1 and x2, and y2 are unpacked from pos2. And then the distance is calculated using y2 minus y1. And that is all squared. And then we add x2 minus x1,
>
> **[2:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=127)** which is also squared. And all of that is raised to the power of 0.5, which is the same as taking the square root. This is Pythagoras' theorem. And then we need to return that. Okay. So just to remind you where that's coming from, if you go to the slide, okay, that's what's happening here. x1, y1, x2, y2, the difference between them. The square root of that distance gives us our distance for what the length of our hypotenuse, which is the distance we want. Next we need a function to generate a random position for our food. So to do that, we're going to need to import the random module, which means we can create random members and things. And then our function is going to be get random food pos. So down here we're going to add def get random food pos, position, short for position. No arguments needed. And we're going to have x is going to be equal to random.randint.
>
> **[3:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=214)** That's a random integer. And it's going to be between the negative width, this is like with the collision detection, the same arguments here, plus the food size. So it's going to have a slight offset because we need to incorporate the food size. Let me define that first, and then PyCharm will suggest it for me. So this is actually a new constant that's going to be food size, and I'm just going to set it equal to 10 pixels. So now when I start typing... Down here, so it will come up with a suggestion for me. So plus food size, that's the lower bound for the random integer, and the upper bound is going to be width divided by two. And this is going to be minus food size. The food would be off the screen if we didn't offset it in this direction. Okay, and let's just duplicate that line and do y, and this time it's going to be the same basic idea, except this is going to be based off the height. And then we can have return x and y as a tuple. Finally, we need a function for detecting food collisions. so we're going to do that with def food collision.
>
> **[4:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=294)** Again, no arguments. And we're going to make food pos global. We haven't defined it yet. We'll do that in a moment. Food pos. So this is going to be a global variable. And I'm going to say that if the distance, so we're going to use our function, so if get distance, and this is between snake minus one, so that's the head of the snake, and the food pos, so if that distance is less than, arbitrarily I'm just going to say 20 pixels. So that's the distance that we're going to determine. If the food and the snake's head are within 20 pixels of each other, then we're going to say that it is a collision. So if that's the case, then food pos gets updated to a new food pos, or food position, and then the food, which we haven't created yet, but we'll do that in a moment, goes to the food pos. And we're going to return false. That's if there's not a collision, but if there is, then we're going to return true. Okay, so these are all the functions we need. We're going to have to use them in a moment. We're going to add the function clause to our code, but let's just recap. So we've got a distance function, function to get the distance between two points. We've got a function to get a random position for the food. And we've got a function to detect whether or not there's a food collision. So let's now modify our game loop.
>
> **[6:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=387)** Don't need to do much here, but when we've done snake.append, so we've moved the snake. Then we're going to check for food collision here.
>
> **[6:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=401)** And we're going to do if there isn't a food collision, then we do this: snake.pop. But if there is a food collision, that means the snake has found some food, so it's grown. We're going to pop in that case, okay? So if there's not a food collision, then the snake stays the same length. But if there is, then it wants to grow by one segment. So let's just make a comment to that effect. Keep the snake the same length unless fed.
>
> **[7:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=442)** Okay, so we're nearly there, but now we need to just create the actual food itself, which is going to be another turtle. So we'll do that down here. So food equals turtle.turtle.
>
> **[7:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=460)** It's going to be circular, and the size is going to be food size divided by 20, which we talked about in a previous video. If you want pixel control, you divide by 20. Then food.penup. That will mean the food won't leave a trail every time it moves. And then food pos is going to be whatever random position it gets from the function that we just wrote. And then we're going to move the food to the food position. Okay. And there we have some food, and we can collide with it, and the snake is longer. So let's just make a couple of changes now that look a bit better. We'll speed it up again. And let's have the color of the food being a bit different. So we'll have food color. Okay, so this is now looking like a snake game. We've got some food, we can collide with it. We're not keeping score yet; that will come later. But this is looking good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Game Programming](../../Skills/Software%20Development/Game%20Programming.md) (1), [Game Development](../../Skills/Software%20Development/Game%20Development.md) (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (3), short for (1)
> **Cross-References:** we talked about (1), previous video (1)
> **Versions:** 0.5 (1)
> **Tools:** pycharm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Keeping score](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=0)** - Adding scoring functionality to our game is very simple. We will use the turtle graphics, title bar as a convenient place to display the score. First, we create a global variable called score and we set it to zero. Then in food collision, that's the function we defined before. We just need to make one change. So we're going to do, if there is a collision, then the score is incremented by one. So, score + = 1 . That's the same as score = score + 1 is very common shorthand for that. However, we also need to make this score global. And the reason for that is because we're not just reading it, we're potentially updating it depending on the outcome of this function. Cool. So if we're going to update a global variable, we need to bring it into the scope of the function where we're doing that. And we do that using the global keyword, finally, in the game leap itself, we had the following. So this is where we refresh the screen just before doing that, we do screen, dot title. So this is how we set the title of the turtle graphics window that we're going to use an F string here, F strings are great for interpolating variables. So snake game remains the same, and then we're going to add our score here. So score is equal to whatever the variable value of score is. And we don't actually need to make score global here because we're not updating it. We're only reading it. So now
>
> **[1:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=95)** when we run the program, you can see the score there in the title bar. And when I catch a bit of food, my score increases by one.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - adding (1)

#### [Game reset](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=0)** - At the moment, when the snake collides with either itself or a wall, the game ends abruptly due to a court at turtle.bye, which closes the turtle graphics window and ends the program. In order to play again, we would have to run the program again, which is not ideal. To fix this, we can create a reset function, and put all of the code, defining the initial state of the game into it. So that when we call it, we basically start over. So let's write that reset function now. So we need some global variables, for score, snake, snake direction, and also food plus. And then within the reset, we set the score to zero. We create the snake, and this is exactly the same as what we were doing out here, so we can, cut that and put it in here. So we created the snake, We set the snake direction to up as well. And while I'm here, I'll get rid of, those ones I don't need. So snake direction is up. So for the food positive, again, we get the code that was outside of the reset function and we just place it inside the reset function. So exactly the same code, just in a different place. And then, at the end of this, we call the game loop to set things in motion. So now, to get things started, instead of calling game blue directly,
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=93)** we call reset instead. Which in turn, you'll see, cause game loop. Okay. Now one of the changes we need to make is instead of turtle.bye, we need to make use of this function that we've just created. So we don't end the program. We call reset. Now, I run it, and again error. So snake is not the fine online, one to eight. So what have I done that? So what I've done is I've left this code here, which is drawing the snake for the first time. And we're not actually going to do that now because the snake doesn't yet exist until reset has been called. Okay. So now, let's see what happens if I crash with a wall, it just goes back to the beginning. And same with the snake collision. Okay. So that's a much more elegant way of, restarting the game, than having to, actually run the program again.
>
> **[2:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=162)** So that's it. We now have a fully working snake game, Well done for getting this far. And stay tuned for a few refinements.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - at (1)


### 3. Finishing Touches

[↑ Back to Table of Contents](#table-of-contents)

#### [Avoiding repetition by using Lambda expressions](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=0)** - Currently, we have multiple callbacks for changing the snake's direction in response to key presses. So for example, we've got go up, which is very similar to go right and the other two. There is a way to avoid this repetition by using Lambda expressions to pass additional arguments to a callback function. In this way, we can have just one function to handle changing this next direction, which responds differently depending on the argument it receives. We define the callbacks in a single function called a bind direction keys. So let's do that now. (keyboard clicking) So we're going to do screen dot on key. And now, instead of naming a particular function that we've already defined, we're going to use a Lambda expression. (keyboard clicking) So in this situation that's like an anonymous function. So it's going to be set snake direction, which we haven't yet written, set snake direction. So that's the function. And we're going to pass the argument up and that's going to be in response to a key press of up. Okay. And then, (keyboard clicking) we'll do that four times for the full directions, um, for the down direction. We're going to pass the argument down in response to the down key. And for the left direction, we're going to pass the argument left as a string for the left key. And for the right, we do the same for the right key.
>
> **[1:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=95)** Okay. So this is now binding our direction keys, just using a single function. So that function there on line 18 through to 22 is now equivalent to what we had down here. But on lines 123 to 126 in terms of its row within the game. Although, we're handling things slightly differently because we're passing an argument this time. So now we're going to define a single function, instead of all of these, go up, go rights, et cetera. Let's get rid of those now. And we're going to have a single function which is going to be set snake direction. So Def, set, direction. And this takes an argument which is direction. And that's what's getting passed in by these Lambda expressions defined in our bind direction keys function. So first of all, we need to make the snake direction global that's because we may well be updating its value. Then, if direction is equal to up, then we need to do another check. That's if snake direction does not equal down. And the reason we're doing this second check, like we said before, is to avoid a collision. If you happen to press the arrow key in the opposite direction to which you're traveling. So let's make a note of that. So if that's the case, then we set snake direction equal to up.
>
> **[3:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=190)** Now let's copy this three more times for the other directions. And I'm going to change these last three Fs to LFs to slightly more efficient. That means we're not actually going to check if we don't need to. And then we do basically the same for all the other directions. So we have done up. So let's now do down. So if we're not going up, then we change the direction to down and then let's do left. So if we're not going right, then we go left. And the last one, right. If the right key is pressed. Then if we're not going left, then we go right. Okay. So we're nearly there. We just need to call this bind direction keys, which we haven't done yet. So instead of these handlers that we had down on line 115 we're simply going to do bind direction keys instead. (mouse clicking) Okay. Now, (keyboard clicking) Okay. So everything works exactly as it did before. The difference being we have much better, more efficient code, and we're following the principle of DIY dry,
>
> **[4:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=283)** "do not repeat yourself" instead of four functions for changing the direction. We simply have this one function instead. This use of Lambda expressions for defining event callbacks is a nifty little trick that you may find helpful in your own programs. So make a mental note and revisit this example, if you need a reminder of how to use it.

> [!info]- Semantic Content
>
> **Non-Speech:** (keyboard clicking) (4), (mouse clicking) (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **Env Vars:** diy (1)
> **Speakers:** - currently (1)

#### [Personalizing your game](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=0)** - You now have a fully working snake game. Well done for getting this far. Whatever your level, I encourage you to experiment with the code, play with it. For example, you could change some colors or the speed of this snake. You could even add extra functionality, like a two player version. There's a game called Tron that you may be familiar with, which is kind of like a two player version of snake. So you could go down that road if you wanted. for this project, we haven't actually used any images. Although, Turtle graphics does have the capacity to use images. So rather than actually drawing these stamps, you could use actual images for the game. I'm going to show you just a few of these possible changes now. So, Let's change the background color. (keyboard clicking) And let's change the size of the window. (continuing keyboard clicking) Maybe 800 by 600. (continuing keyboard clicking) And the shape of the turtle... currently is set to... square for the stamper, for the snake. Let's change that to circle. And the food, let's have that as a triangle. Okay. So it's just a few changes. Let's see what that does. Okay. (continuing keyboard clicking) Now I want the snake to actually be green. (continuing keyboard clicking) And let's have the food size a bit bigger as well. Make it easier to catch.
>
> **[1:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=92)** and speed's okay. But let's just see what it'd be like if it was a little bit slower, could make it faster, but the a hundred milliseconds is fairly fast. If I double the speed at 50, it's really very fast. Another idea, of course, will be to actually increment the speed as the score increases. That's something you could implement. (continuing keyboard clicking) Okay. So there's all these changes you can make. So really the world is your oyster.

> [!info]- Semantic Content
>
> **Non-Speech:** (continuing keyboard clicking) (5), (keyboard clicking) (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), kind of like (1)
> **Speakers:** - you (1)

#### [Adding graphics to the snake game](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=0)** We are now going to spice things up a little bit by adding some graphics to our game. So if you check out branch 03_03b, you'll see we have an assets folder. And in there, we have a background, we have some fruit for our snake, and we have a head for our snake, and we're going to use those now. So in our main program, we go down to Line 111 first of all. And this is where we currently have the bgcolor set to yellow. And what we're going to do is we're going to change that from bgcolor to bgpic, and we're going to have the image for that going to be assets forward slash, and then we'll use the exact name of the image bg2/gif. So when we save and run that, you can see that we now have a background for our game. Okay. Now, what I'm going to do next is I'm going to register a shape for the food and also for the snake head. And the way I do that is I do screen.register_shape.
>
> **[1:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=72)** And again, it's going to be assets and the exact name.
>
> **[1:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=80)** So for the food, it's snake-food-32 by 32.
>
> **[1:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=89)** And while I'm here, I'll do the snake head as well, which is snake head, and that one is 20 by 20 pixels. So when we register a shape like this, it means we can assign a shape to a turtle based on an image rather than the default shapes that they offer usually, which is like the triangle and the circle and the turtle image. So we're actually using images instead. So now for our food, we can replace the triangle here on Line 128 with the snake food. And that's going to be exactly the same argument that we have for the registering of the shape. So that then becomes food.shape is that image. And now, of course, the color is no longer relevant. So we can delete that. So now if I save and run, you can see that there's some food for the snake.

> [!info]- Semantic Content
>
> **Code Identifiers:** register_shape (1)

#### [Adding the snake head to the game](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=0)** Now, we're going to add a head to our snake using the snake head image. So a couple of preliminaries. In the last video, I forgot to adjust food size to the exact dimensions of the image, which was actually 32 by 32, so I'm doing that now. And now, we're going to add a constant for snake size. And again, this was to be the dimensions of the actual image we're using, which is a square image. So it's 20, the image is 20 by 20. Then we need to make use of this constant in a couple of places in our code. So the first one is in our offsets and I'm doing this so that we can have a different image if we want, and the code will actually accommodate a different snake size, which we define as a constant. The other place we need to update this is in our reset function. So instead of assuming that it's 20, we're going to adjust that to use the snake size. So this is snake size times two and this one is snake size times three. Okay. So that's the preliminaries. And then for our stamper, we're going to keep using circles for the body of the snake, but we're going to change the color. And turtle graphics allows us to use hex codes. The hex code I'm going to use, I got using a color picker on the image, so that it's going to match
>
> **[1:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=96)** the snake head image. You'll see what that means in a minute. So we can use this hex code to define the color. So let's just run that and see how we're doing. Okay. So we've got a snake body of the same color as our snake head image now. And just while I'm here, I'm going to speed up the game a bit because it's going a little bit slow, that snake. So let's change the delay to 100 milliseconds, make it a little bit more challenging. Okay. So what we need to do now is to add the snake head itself. So in the part of the game loop where we draw the snake and it says draw snake for the first time, which actually should just say draw snake, that's leftover from an earlier chapter, we're not just going to draw each segment of the snake the same. We're going to have to make sure the head is different, and the way we're going to do that is we're going to change the shape of the stamper. Remember, it's the stamper that's making these circles that form the snake's body. So we do stamper.shape and this wants to be the snake's head image. So that's in assets/snake-head.20 by 20.gif.
>
> **[2:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=171)** So that's now the shape that's going to be used. And then we do stamper.goto. And then we go to the snake's head position which is snake minus one, that's the end of our list containing our segments, and we go to the x coordinate and the y coordinate. When we're there, we do stamper.stamp. And then finally, we need to remember to revert our stamper back to the circle shape for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the body. So we do stamper. And that's a circle. Now, we're almost done except that we don't want to now draw the whole snake again. We want to use list slicing, which is a very useful [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) syntax to omit that one segment that we've just done, which was the head of the snake. So we actually go from colon minus one. So this means from the beginning, but don't include the last one. Remember, negative indices in Python lists actually take you from the end of the list, which is a very useful feature. So now when we run our code, you can see it's a small difference, but the head of the snake is always using that snake image rather than a plain circle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3), python (2)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Cross-References:** in the last (1)
> **Best Practices:** remember to (1)

#### [Adding a high-score feature](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=0)** Now, for the final refinement, which is adding a high score feature to our game. So make a comment that this is the highest score and we will create a new variable. Good high score, so this will be the default value if we're not loading in a higher value from a file that's been saved previously, that will make sense in a moment. So then we're going to load -- load the high score if -- if it exists, and we're going to do that by using a try accept block. So we're going to try doing this thing which is with open and the file is going to be called high score and it's going to be a text file. And the mode in which we're going to open it is in read mode. So while that's going on, we're going to do as file. So while that's open we're going to do high score is equal to the int value because it's going to be read as a string of file.read And I'm finding this help that PyCharm has given me really not very helpful in terms of readability, but let's just ignore that for now. So for that reason, we've now got a high
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=94)** score read in, but that may not exist. So then we have the accept block which is accept file not found error. So if that goes on so it can't find it then we simply pass. And that means the value we assigned it up here on Line 20 will be what it receives which is zero. Okay. So let's just check there's no syntax error so far. Yeah. That's all good. And you can see that our score is zero. So the next thing we're going to do is actually display the highest score. And that happens in our game loop where we actually do the screen title because we're using the title bar. And the way we're going to do that is we're just going to modify this line so that after displaying the score, we simply add high score. And we're using these S strings. So we're going to interpolate a value there, and that's going to be the high score variable. So now when we run it you should be able to see that we have the high score displayed in the title bar. Okay. So far, so good.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=175)** Next, we need to create a function for updating the high score.
>
> **[3:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=184)** So we're going to do def_update_high_score.
>
> **[3:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=193)** No arguments needed. And it's going to use the global variable.
>
> **[3:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=203)** And the reason we need to call it in as global as we might want to modify it. So if you're just reading a global variable, you don't need to use the global keyword but if you do want to modify it, then you need to use the global keyword. So we've now got access to that and we can change it if we want. So if score is greater than high score,
>
> **[3:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=228)** then in that case, the high score is equal to the current school. And then I didn't want PyCharm to do that. High score just equals score. That's what I want. That's very annoying. It's automatically helping me in a way that I did not want it to. So I had to hold down shift and press "Enter" to get it to stop being so helpful. So then I need to write this. So with open, so this keeps the file open while we're working with it and then shuts it automatically. It's a very useful constructor with, so high score.txt.
>
> **[4:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=286)** And in this case, it's in write mode, so we're able to write to it and temporarily call file. Then we do file.write. and we need to convert it to a string. And that's going to be high score. And then one more thing before we actually try running it is we need to call this update high score in the right place. And that's going to be in the food collision function and it's going to be after we've updated the score. So we then call update_high_score. Okay. So at the minute, we have a high score of zero and then we catch the apple a couple of times. Okay. So we've now got a high score of three. So let's exit. And you'll see that in our folder, this file has been created because it didn't already exist and it's got this value three. So now when I run the game again, you can see the high score there in the title bar is three because it's been loaded in from that text file. So this is useful if you play the game a lot and you want to kind of set yourself a challenge to beat your current highest score. And on that note, just one more little change I want to make before we wrap up is let's change the speed even more. Let's have it something like 75. And you could have it as a feature if you wanted to implement it yourself.
>
> **[6:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=383)** The delay going down each time you get a bit of food so that it gets faster and faster, as well as getting longer and longer. So that's something you can check out yourself if you want to try it. But yeah. This seems like a reasonable speed, especially as it gets bigger and you can see the high score is currently three. Let's see if I can beat the high score and make sure that it's updating. So we've got a high score of four, high score of five, and then let's have a look. Our high score.text has been updated to five. And if we were to run it one more time, you'd see that that's been loaded in. Okay. So that's a high-score feature and that's as far as we're going with this game.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** def_update_high_score (1), update_high_score (1)
> **Tools:** pycharm (2)
> **File Paths:** score.txt (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Integrating material covered](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=0)** - [Robin] We've covered a lot of important ideas and techniques in this course, and hopefully you've had some fun too. I encourage you to write your own programs using the skills learned here. This is the best way to really integrate the material we have covered. Also, you might want to check out [Tkinter](../../Skills/Software%20Development/Tkinter.md), or Tk-inter programming for GUI applications, as turtle graphics is built on top of this framework. There are several courses on this topic in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library. Thank you for taking this course on LinkedIn Learning, and good luck with your future endeavors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Tkinter](../../Skills/Software%20Development/Tkinter.md) (1)
> **Env Vars:** gui (1)
> **Speakers:** - [robin] (1)


## Instructor

- [Robin Andrews](../../Instructors/Software%20Development/Robin%20Andrews.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/snake-game-python-2896343)

## Skills Covered

- Python (Programming Language)
- Game Programming

## Path Context

### In [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
← [Python Practice- Object-Oriented Programming](Python%20Practice-%20Object-Oriented%20Programming.md) | **6 of 14** | [Python Projects- Create an Interactive Quiz Application](Python%20Projects-%20Create%20an%20Interactive%20Quiz%20Application.md) →

## Appears In

- [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)