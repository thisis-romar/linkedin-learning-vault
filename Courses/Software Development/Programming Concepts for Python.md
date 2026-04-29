---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: programming-concepts-for-python
url: "https://www.linkedin.com/learning/programming-concepts-for-python"
duration_minutes: 206
duration: 3h 26m
level: Beginner
updated: 10/25/2023
learners: 393016
skills:
  - Python (Programming Language)
  - Programming Concepts
exercise_files: true
github: "https://github.com/LinkedInLearning/programming-concepts-python-2702196/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF5tQ0NTwTQ3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698098378404?e=2147483647&amp;v=beta&amp;t=k-HFT6ZNyxctmneqP5BNNrZDWCC1KUbJKULSg6Nx9vo"
linkedin_topic: Software Development
learning_paths:
  - '[[A Quick Start Guide to Programming in Python]]'
  - '[[Become a Software Developer]]'
prev_courses:
  - '[[Python Essential Training]]'
  - '[[Learning Python (2021)]]'
next_courses:
  - '[[Hands-On Introduction- Python]]'
  - '[[Learning Java 11]]'
path_nav: '[{"path":"A Quick Start Guide to Programming in Python","position":4,"total":6,"prev":"Python Essential Training","next":"Hands-On Introduction- Python"},{"path":"Become a Software Developer","position":8,"total":12,"prev":"Learning Python (2021)","next":"Learning Java 11"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/programming-concepts
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Concepts%20for%20Python.md)

![Programming Concepts for Python](https://media.licdn.com/dms/image/v2/D560DAQF5tQ0NTwTQ3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698098378404?e=2147483647&amp;v=beta&amp;t=k-HFT6ZNyxctmneqP5BNNrZDWCC1KUbJKULSg6Nx9vo)

# Programming Concepts for Python

> Understanding core programming concepts and why they are used is just as important as knowing how to write code. New programmers need to learn to bridge the gap and to connect the theory to practice. In this course, Barron Stone and Olivia Chui Stone illustrate programming concepts in Python by relating them to real-life objects, actions, and scenarios. Each video focuses on a different analogy th

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python) | 3h 26m | Beginner | 393K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Programming concepts with Python
  - What you should know
  - Using GitHub Codespaces
- [**1. Functions**](#1-functions) (5 videos)
  - Functions
  - Code reuse
  - Parameters and arguments
  - Multiple parameters
  - Local and global variables
- [**2. Objects**](#2-objects) (4 videos)
  - Objects
  - Classes
  - Object names
  - Mutability
- [**3. Class Inheritance**](#3-class-inheritance) (2 videos)
  - Class inheritance
  - Overriding inherited methods
- [**4. Modules and Packages**](#4-modules-and-packages) (2 videos)
  - Modules
  - Packages
- [**5. Lists and Tuples**](#5-lists-and-tuples) (3 videos)
  - Lists
  - Multidimensional lists
  - Tuples
- [**6. Queues and Stacks**](#6-queues-and-stacks) (2 videos)
  - Queues
  - Stacks
- [**7. Sets**](#7-sets) (3 videos)
  - Create and combine sets
  - Sort sets
  - Add and remove items from sets
- [**8. Dictionaries**](#8-dictionaries) (3 videos)
  - Dictionaries
  - Add items to dictionaries
  - Reverse lookup issues
- [**9. Conditional Execution**](#9-conditional-execution) (2 videos)
  - If-else statements
  - Match statements
- [**10. Loops**](#10-loops) (3 videos)
  - For loops
  - While loops
  - Break statements
- [**11. Error Handling**](#11-error-handling) (3 videos)
  - Catch errors
  - Validate input
  - Customize errors
- [**12. Polling and Event-Driven Programming**](#12-polling-and-event-driven-programming) (2 videos)
  - Polling
  - Event-driven programming
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Programming concepts with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=0)** - When you're learning a new programming language, it's easy to get caught up in the details like syntax and lose focus on the underlying concepts.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=7)** Why do programming languages have a variety of data types and what's the best approach and language to use for solving the task at hand?
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=14)** I'm Barron Stone, and I've spent enough time bouncing between programming languages to know there are more important questions to ask.
>
> **[0:21](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=21)** In this course, I'll show you several fundamental concepts to make you a smarter, more effective programmer.
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=27)** Look, some of these concepts can be abstract and confusing, and that's why I'm going to take you with me through a typical Saturday to relate these concepts back to everyday things.
>
> **[0:36](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=36)** It makes the ideas easier to understand, and it's fun.
>
> **[0:40](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=40)** I'll clean my house, run some errands, and even order pizza to explain functions objects and other essential programming constructs.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=47)** Along the way, I'll dip into Python, an object-oriented programming language, where I'll walk through some code to help cement these ideas.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/programming-concepts-with-python?u=76281980&t=54)** I've got a busy day ahead of me, so let's get to it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), python (1)
> **Code Keywords:** abstract (1), let (1)
> **Speakers:** - when (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=0)** - The purpose of this course is to give beginner and intermediate programmers a better understanding of what goes on under the hood.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=7)** So my emphasis will be on programming concepts.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=9)** I'll be using a programming language called Python for my code examples but my intention is not to teach Python, so I won't be spending much time discussing specific details like syntax.
>
> **[0:19](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=19)** If you're comfortable writing a basic program in the language of your choice, you shouldn't have a problem following along.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=24)** I'll walk through the steps in the Python interpreter and show you how to run the various scripts.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=28)** But if you've never programmed a day in your life, Python is a great first language to learn and up and running with Python is a great place to start.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/what-you-should-know?u=76281980&t=35)** All you really need is a healthy desire to learn, so if you're ready, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5)
> **Definitions:** is a  (3)
> **Code Keywords:** let (1)
> **Speakers:** - the (1)

#### Using GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=0)** - [Instructor] To demonstrate coding examples throughout this course, we'll be using a GitHub Codespaces environment.
>
> **[0:06](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=6)** If you want to follow along with coding, we recommend you use Codespaces as well.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=11)** So you'll be working from the same environment as us.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=14)** You can launch your own Codespaces environment by going to the GitHub page for this course shown here, clicking on this green button, and then clicking this other green button to create a new Codespace on main.
>
> **[0:29](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=29)** It may take a minute or so for the Codespaces environment to spin up, and then you should see a Visual Studio Code window like this.
>
> **[0:39](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=39)** Within the examples directory on the left, you'll find folders with reference codes for the examples shown throughout this course, organized by video.
>
> **[0:48](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=48)** So for example, if you wanted to play around with the code from the first video in chapter one, which is about functions, you can find that code in the directory named 01_01_functions.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=62)** In this case, we've included a Python script with the state of the code at the beginning of the video, and a second script representing our code changes and interactions by the end of the video.
>
> **[1:15](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=75)** We'll use Python and its interactive interpreter in different ways throughout this course so the files for each video don't always follow this structure but we've tried our best to include the relevant bits of code and comments that will hopefully make sense when following along with each video.
>
> **[1:32](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=92)** If you don't have consistent internet access or simply don't want to use the Codespaces environment, you can still explore all of the example code in the GitHub repository for this course.
>
> **[1:44](https://www.linkedin.com/learning/programming-concepts-for-python/using-github-codespaces?u=76281980&t=104)** And if you want to run the code locally, you can always download and install the latest version of Python for your operating system by going to [python.com/downloads](https://python.com/downloads).

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), find (2), make (1)
> **Tools:** github (3), visual studio (1)
> **Code Keywords:** this. (1), case, (1)
> **URLs:** [python.com](https://python.com) (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Functions

> [↑ Back to Table of Contents](#table-of-contents)

#### Functions
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=0)** - One of the first things that everybody is taught when learning to program is how to create a function.
>
> **[0:06](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=6)** The syntax or functions may vary from language to language, but the general concept is always the same.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=12)** A function is a routine or procedure that may or may not take some input values, and performs some sort of processing and then possibly returns an output value.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=20)** Every programming course will teach you how to create functions in that specific language.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=24)** What often gets overlooked is the question of why should you create functions and when should you or should you not turn a specific process into a function?
>
> **[0:33](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=33)** The short answer is, function should be created for commonly used routines.
>
> **[0:37](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=37)** So to demonstrate that concept, let's go to the kitchen and look at a routine I do every day.
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=44)** Good morning.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=46)** Every day when I wake up, I like to cook myself a hearty breakfast to kickstart the day.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=50)** There are a lot of steps involved in cooking that breakfast.
>
> **[0:53](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=53)** I always make coffee, might scramble some eggs, make some toast, and of course, I finally eat.
>
> **[0:57](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=57)** Each of those steps in the breakfast making process is comprised of many more smaller steps.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=62)** For example, the process of making coffee, involves measuring the coffee beans, grinding the coffee beans, putting the ground coffee beans into the filter, measuring the water, starting the coffee maker, and finally pouring the coffee.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=76)** There were a lot of steps in that process, but those steps will be exactly the same, every time I make coffee, and that's why I've decided to combine those steps into a mental function.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=86)** Now, when I decide to make coffee, my brain goes into autopilot and I do all of those things without having to explicitly think about each step.
>
> **[1:35](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=95)** Hmm.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=96)** Making coffee is just one part of my breakfast routine that I've turned into a mental function.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=101)** So let's break down another breakfast process, making an omelette.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=105)** To make an omelette, I start by mixing my ingredients together in a bowl, I pour that mixture into a frying pan.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=111)** I cook the omelette on one side, I flip it, I cook the other side, and the output of that process is an omelette.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=120)** It's nothing fancy, but I'm a computer programmer, not a chef.
>
> **[2:04](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=124)** Just like with making coffee, I've also functionalized the process for making an omelette.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=128)** That means if my wife, Olivia, wants me to make an omelette for breakfast, she doesn't have to tell me each of those steps, mixing the ingredients, pouring them into the frying pan and so on.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=137)** All she has to say is-
>
> **[2:18](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=138)** - Make me an omelette, please?
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=142)** - And I know exactly what to do.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=143)** Let's look at that omelette making process as a function in Python.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=147)** I have the example script, functions_begin.py, open in my Codespaces environment.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=153)** Let's use it to assemble a functional breakfast.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=156)** In its current state, this script is just a series of print statements, representing each step in our omelette making process.
>
> **[2:43](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=163)** Python can do a lot of things, but it can't actually make a real life omelette, so we'll need to use a bit of imagination.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=171)** The steps include mixing the ingredients, pouring the mixture into a frying pan, cooking the first side, flipping it, and then cooking the other side.
>
> **[3:00](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=180)** At the end of the process, it creates a new string object that describes the tasty omelette we just cooked and assigns it to a variable named omelette.
>
> **[3:08](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=188)** I'll run this script in the Codespaces editor by clicking the run all arrow at the top of the editor, and we can see the script print out those five steps in the omelette making process.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=199)** If we want to also view the resulting string named omelette that it produced, we can use a print statement to print the omelette at the end of the script.
>
> **[3:28](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=208)** And if we run the script again, on the last line of output, we can see the tasty omelette.
>
> **[3:35](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=215)** So that was an omelette for me to eat, but what if Olivia wants an omelette for breakfast too?
>
> **[3:41](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=221)** In that case, we'll need to repeat all of those steps again to create a second omelette for her.
>
> **[3:47](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=227)** One way we could accomplish that, would be to type out all of those steps in the process again, but for the sake of time, let's just use copy paste and modify the variable names to be omelette1 and omelette2, so we can tell them apart.
>
> **[4:03](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=243)** We'll also modify the print statement at the end to display omelette1, and then add a second print statement after it for omelette2.
>
> **[4:13](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=253)** Now, when I run the script, it goes through the steps to make an omelette twice, and at the end, the two final print statements show us that we have two tasty omelettes.
>
> **[4:27](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=267)** That script successfully cooked breakfast for Olivia and me.
>
> **[4:31](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=271)** But what if we needed to make more than just two omelettes?
>
> **[4:34](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=274)** Let's say Olivia decides to invite a bunch of friends over for breakfast.
>
> **[4:38](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=278)** If we kept manually copying all of the steps every time we need to make another omelette, the script would end up being really, really long, and the longer a script gets, the more likely it is to contain errors.
>
> **[4:50](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=290)** Since we perform the same sequence of operations, every time we make an omelette, this is a perfect scenario to combine those steps into a single function.
>
> **[4:59](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=299)** So let's do that now.
>
> **[5:01](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=301)** Before we can use a function, we need to define it first.
>
> **[5:05](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=305)** So at the top of the script, I'll type def, and this is the keyword to let Python know that we're defining a new function.
>
> **[5:16](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=316)** We'll give this function a name, make_omelette, and then add open and close parentheses, followed by a colon.
>
> **[5:24](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=324)** The specific syntax for defining a function can vary if you're programming in different languages, but this is how it's done in Python.
>
> **[5:32](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=332)** Now let's put all of those steps for making an omelette into this new make_omelette function.
>
> **[5:38](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=338)** Python uses indentation to show that a specific line of code exists within the scope of something else, like a function definition.
>
> **[5:46](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=346)** So we'll need to indent all of these print statements to make them part of the make_omelette function.
>
> **[5:52](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=352)** We can also delete the second set of print statements since we won't be needing it anymore.
>
> **[5:58](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=358)** At this point, we've defined a function called make_omelette, and whenever we use that function, it will print out the steps and create a new string describing a tasty omelette.
>
> **[6:08](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=368)** But there's one more thing we need to do.
>
> **[6:10](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=370)** We don't just want the string describing the tasty omelette to exist inside of this function.
>
> **[6:15](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=375)** When we call the make_omelette function, we'll want to get that string back as an output.
>
> **[6:20](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=380)** To do that, we can add the statement return omelette at the end of the function, and we'll also change the variable name from omelette1 back to just omelette.
>
> **[6:30](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=390)** As this function executes, when it gets to the return statement at line 10, the program will exit the function and pass that string describing the tasty omelette as output.
>
> **[6:40](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=400)** Now our function is complete, so let's use it.
>
> **[6:44](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=404)** I'll delete these two print statements at the end.
>
> **[6:47](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=407)** Then I'll make breakfast for myself by calling our new make_omelette function, and I should also be nice and make an omelette for Olivia too.
>
> **[6:58](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=418)** Finally, I'll add two print statements to show what Olivia and I are having for breakfast by printing the contents of our respective breakfast variables.
>
> **[7:10](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=430)** Now, when I click the run arrow to rerun this entire script, it performs all of the steps to make an omelette, twice, and that the end, we can see that both Olivia and I are having tasty omelettes for breakfast.
>
> **[7:24](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=444)** Perfect.
>
> **[7:24](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=444)** Now that we have an omelette making function and we've tested it and know that it works, we can use it over and over and over to create as many omelettes as we want for ourselves and to host friends over for breakfast.
>
> **[7:36](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=456)** This example demonstrates one of the key benefits of organizing code into functions, reuse.
>
> **[7:43](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=463)** We wrote our omelette making function once, and now we can easily use it over and over.
>
> **[7:48](https://www.linkedin.com/learning/programming-concepts-for-python/functions?u=76281980&t=468)** The function performs all of the intermediate steps of mixing, cooking, and flipping the omelette so we don't have to worry about manually repeating those steps, every time we need to make an omelette.

> [!info]- Semantic Content
>
> **Code Keywords:** function (27), let (10), delete (2), case, (1), def, (1)
> **CLI Commands:** make (17), python (5)
> **Code Identifiers:** make_omelette (6), functions_begin (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - one (1), - make (1), - and (1)
> **Analogies:** for example (1), just like (1)
> **File Paths:** functions_begin.py (1)
> **UI Navigation:** go to (1)

#### Code reuse
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=0)** - Eating nothing but omelets would get old real quick.
>
> **[0:03](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=3)** Variety is the spice of life, so I should probably add another function to my menu of breakfast recipes.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=9)** - How about making some pancakes?
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=10)** - Sounds good to me.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=11)** To make a pancake, I start by mixing together the ingredients in a bowl.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=15)** Then, I pour that mixture into a frying pan.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=17)** I cook the pancake on one side, flip it, I cook the other side, and the output of that process is a delicious pancake.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=25)** (plate clattering) Hmm. Something seems familiar about this.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=30)** Ah, the process for making a pancake has a lot in common with a process for making an omelet.
>
> **[0:36](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=36)** Performing the same steps in multiple places is the perfect time to consider functionalizing that process.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=42)** - [Olivia] To demonstrate the benefits of code reuse, let's examine a new function for making pancakes.
>
> **[0:48](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=48)** Inside the make_pancake() function, we perform all of the steps in the pancake-making process.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=54)** Starting at line 13, we mix the ingredients, pour the mixture into a frying pan, cook the first side, flip it, and cook the other side.
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=63)** Then at the end, line 19 returns a string object representing a delicious pancake.
>
> **[1:09](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=69)** It's pretty easy to see that the make_omelette() function and the make_pancake() function have similar structures.
>
> **[1:15](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=75)** In fact, both of these functions use the exact same sequence of cooking steps in the middle.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=80)** That makes sense, because both of these dishes involve cooking flat things in a frying pen.
>
> **[1:25](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=85)** Since we're doing the exact same series of actions in two places, we can combine these steps into a single function.
>
> **[1:33](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=93)** To do that, let's create a new function at the top of the script called mix_and_cook().
>
> **[1:38](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=98)** Then, we'll copy and paste the sequence of steps that the make_omelette() and make_pancake() functions have in common.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=105)** It's important that we create the mix_and_cook() function above the other two functions in the script.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=111)** We need to define the mix_and_cook() function before we can use it in the make_omelette() and make_pancake() functions below.
>
> **[1:57](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=117)** You may have also noticed that we did not include a return statement at the end of this new mix_and_cook() function.
>
> **[2:04](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=124)** Not all functions have to return a value when they finish, like how the make_omelette() and make_pancake() functions return strings.
>
> **[2:11](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=131)** Since we did not specify a return value for the mix_and_cook() function, after it executes its last instruction, cook the other side.
>
> **[2:19](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=139)** The function will automatically return and pass back an object called None.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=143)** This is a special data type that Python uses to indicate something does not have a value.
>
> **[2:30](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=150)** Now that we've defined the mix_and_cook() function, let's replace those steps in the other two functions with a single call to mix_and_cook().
>
> **[2:42](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=162)** Now, when we execute the make_omelette() function, it will call the mix_and_cook() function to perform those steps.
>
> **[2:48](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=168)** The same thing will also happen when we execute the make_pancake() function.
>
> **[2:53](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=173)** Down near the bottom of the script, line 20 calls the make_omelette() function to make Barron's breakfast and line 21 calls the make_pancake() function to make my breakfast.
>
> **[3:03](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=183)** Then at the very end, we use two print statements to show what we're each eating.
>
> **[3:08](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=188)** To show the result, I'll click the run arrow button to run the script.
>
> **[3:14](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=194)** We can see that the mix_and_cook() function gets called twice, once for each of the other two functions.
>
> **[3:20](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=200)** And then, at the end, Barron's having a tasty omelet for breakfast while I'm having a delicious pancake.
>
> **[3:26](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=206)** Now, the question to consider is why was it useful to put those cooking steps into a new function?
>
> **[3:32](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=212)** Simply put, code reuse.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=214)** We can easily reuse the mix_and_cook() routine to create more functions for cooking other recipes that also involve mixing and cooking things in a frying pan.
>
> **[3:42](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=222)** For example, if we wanted to create a new function to make crepes, we could reuse the same mix_and_cook() routine.
>
> **[3:50](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=230)** A secondary benefit we get from combining those common steps into a single function is that if we need to make a modification to that process, we only need to do it in one place.
>
> **[4:01](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=241)** Let's say, down the road, we realize that the reason we're having so much trouble flipping omelets and pancakes is that we forgot to grease the pan first.
>
> **[4:10](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=250)** To fix that, we only need to add a step for greasing the pan in one place, the mix_and_cook() function.
>
> **[4:17](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=257)** Let's do that now by inserting a new print statement for greasing the frying pan.
>
> **[4:24](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=264)** I'll click the run arrow to rerun the script and now, we can see that both the make_omelette() and make_pancake() functions include the new step of greasing the frying pan.
>
> **[4:34](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=274)** If we had not combined those steps into the mix_and_cook() function, then when we realized we needed to add a step to grease the pan, we would have needed to add it to all of our cooking functions individually.
>
> **[4:47](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=287)** When we only have two functions for making omelets and making pancakes, that's not such a big deal.
>
> **[4:52](https://www.linkedin.com/learning/programming-concepts-for-python/code-reuse?u=76281980&t=292)** But as we expand our library of functions to include tens or hundreds of recipes, it becomes a real challenge to track down all of the places we need to make that change, and there's a good chance we'll make a mistake in the process.

> [!info]- Semantic Content
>
> **Code Keywords:** function (24), let (5), this. (1), pass (1)
> **Code Identifiers:** mix_and_cook (13), make_pancake (8), make_omelette (7)
> **CLI Commands:** make (7), python (1)
> **Speakers:** - eating (1), - how (1), - sounds (1), - [olivia] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)

#### Parameters and arguments
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=0)** - The function I use for making an omelet is very convenient, but it's also very boring.
>
> **[0:05](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=5)** Every time I perform that function, I produce the exact same generic omelet.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=9)** It's tasty, but I like variety.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=12)** So rather than making the same generic omelet every time, I'll modify my function so I can add a special ingredient to it.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=18)** Now, when I decide to make an omelet, I'll choose an ingredient, like maybe this plate of bacon, and I'll use that ingredient as the input to my omelet making function.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=28)** Let's take a quick look at how we can pass input ingredients to the make omelet function in Python.
>
> **[0:33](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=33)** This example script has the mix and cook, make omelet and make pancake functions we defined in the previous video.
>
> **[0:40](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=40)** Let's modify the make omelet function so we can pass inputs to it by adding an input parameter inside of the parentheses named ingredient.
>
> **[0:52](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=52)** This parameter is a variable name that we can use inside of the make omelet function to access the value that's passed in as an input.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=61)** Let's use that value within the function to modify the string of text that it returns.
>
> **[1:06](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=66)** Instead of saying that the output of make omelet is a tasty omelet, we'll use a format string or f string to insert the ingredient in place of the word tasty.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=76)** Python's F string will replace the curly braces in the string with the value of the ingredient parameter.
>
> **[1:22](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=82)** So now our omelet will be a string that says a, whatever the ingredient is, omelet.
>
> **[1:29](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=89)** Next, down at lines 22 and 23, we'll need to modify our calls to the make omelet function.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=96)** I'll make a bacon omelet for myself by passing the string bacon as an input argument to the make omelet function.
>
> **[1:42](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=102)** And for Olivia, let's make a Spam omelet.
>
> **[1:46](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=106)** Now, when I run the script, after all the print statements from mixing and cooking both items, we see that I'm having a bacon omelet and a Olivia is having a Spam omelet.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=120)** Now I want to take a second here to talk about the differences between two words that you'll often hear people use when talking about functions.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=128)** Those words are parameter and argument.
>
> **[2:12](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=132)** When we called make omelet, and passed it an input value of bacon or Spam, that value is called the argument for that function call.
>
> **[2:21](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=141)** As you just saw, when we created the two different omelets, we can change the value of the argument every time we call the function.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=148)** Now looking at the function definition, the name ingredient is a parameter for the make omelet function.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=156)** A parameter is a variable name that we can use inside of the function to access a value, which is passed in as an argument.
>
> **[2:44](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=164)** So parameters in arguments are very closely related, and that's why people sometimes get the terms confused and will use them interchangeably.
>
> **[2:53](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=173)** Parameter refers to the names we specify when defining the inputs to a function, and we use those variable names to access the values passed into the function.
>
> **[3:02](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=182)** Arguments are those specific input values that are passed to the function when it gets called.
>
> **[3:08](https://www.linkedin.com/learning/programming-concepts-for-python/parameters-and-arguments?u=76281980&t=188)** This distinction between parameters and arguments is a small but important detail to know.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (4), pass (2)
> **CLI Commands:** make (13), python (2)
> **Definitions:** is a  (5), is called (1), refers to (1)
> **Cross-References:** previous video (1)
> **Speakers:** - the (1)

#### Multiple parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=0)** - Sometimes my wife finds fancy recipes for omelettes on the internet that she likes to try out.
>
> **[0:05](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=5)** - Hey, how do you feel about an omelette with sausage, onions, peppers, spinach, mushrooms, tomatoes, and goat cheese?
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=11)** - No problemo.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=13)** I'll just use the make omelette function.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=15)** Actually, there will be a problem.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=17)** Make omelette only takes one ingredient as input, and Olivia's recipe has way more ingredients than that.
>
> **[0:23](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=23)** In this case, it may be wise to not limit ourselves to only using one extra ingredient.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=28)** - [Olivia] One way we can add more ingredients to our Python omelette is by adding more input parameters to the function definition.
>
> **[0:34](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=34)** So instead of having just one input named ingredient, we can give the function two inputs named ingredient1 and ingredient2.
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=44)** When a function has multiple parameters, it's important that each parameter has a unique name so we can reference them individually inside the function.
>
> **[0:52](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=52)** Now that we've given our make_omelette function two parameters, we can use the variable names ingredient1 and ingredient2 inside of the function when we create the omelette.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=62)** However, this also means that when we call this function, we'll be required to pass in two input arguments.
>
> **[1:08](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=68)** No more, no less, exactly two inputs.
>
> **[1:12](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=72)** If the only thing we wanted to do was make an omelette with exactly two ingredients, then this would work just fine.
>
> **[1:18](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=78)** But my fancy recipe has seven ingredients, and I'll probably find more recipes in the future that call for other different number of ingredients.
>
> **[1:27](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=87)** So to give us flexibility, let's create a function that has the ability to accept any number of inputs.
>
> **[1:35](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=95)** First, I'll return the make_omelette function back to normal by removing the second parameter.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=101)** Then I'll make a new function called make_fancy_omelette.
>
> **[1:50](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=110)** This asterisk tells Python that we could be passing in any number of arguments when calling this function.
>
> **[1:56](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=116)** Python will then combine all of these inputs into a single structure known as a tuple, which we can reference using the variable named ingredients.
>
> **[2:04](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=124)** That tuple structure is kind of like a list of input arguments.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=128)** It will have the same number of elements as the number of arguments given to the function.
>
> **[2:13](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=133)** The tuple named ingredients behaves just like any other tuple.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=137)** We can use it to access the individual arguments or we can iterate through it using a for loop.
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=142)** We'll look at tuples in more detail later in this course.
>
> **[2:26](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=146)** For now, let's finish the fancy omelette function.
>
> **[2:29](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=149)** The mix and cook steps needed here are the same as the other dishes, so we can just use that function, which is another good example of code reuse and why we should create functions.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=160)** For the output string object, we'll describe a fancy omelette with whatever input ingredients.
>
> **[2:47](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=167)** To keep things simple, inside of the fstring, we'll use the len or length function on the ingredients tuple to get back the number of input ingredients.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=177)** And just like before, we'll return the omelette string.
>
> **[3:01](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=181)** Now that we have a new function to make fancy omelettes, let's use it to make my new found recipe.
>
> **[3:06](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=186)** To do that, we'll modify line 28 to use our new make_fancy_omelette function.
>
> **[3:12](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=192)** Then instead of making a spam omelette, we'll pass in all the ingredients for my fancy recipe, sausage, onions, peppers, spinach, mushrooms, tomatoes, and goat cheese.
>
> **[3:25](https://www.linkedin.com/learning/programming-concepts-for-python/multiple-parameters?u=76281980&t=205)** Now, when I run this program, Python goes through the mix and cook process as expected, and now I'm having a fancy omelette with seven ingredients for breakfast.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (3), pass (2), case, (1)
> **CLI Commands:** make (6), python (4), find (1)
> **Code Identifiers:** make_omelette (2), make_fancy_omelette (2)
> **Speakers:** - sometimes (1), - hey (1), - no (1), - [olivia] (1)
> **Definitions:** means that (1), we call this (1), known as (1)
> **Analogies:** just like (2), kind of like (1)
> **Cross-References:** later in (1)
> **Prerequisites:** required to (1)

#### Local and global variables
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=0)** - While I'm in the process of cooking something, I like to keep the things I'm working with close at hand, in my local area.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=7)** Functions do the same thing when they execute by keeping their input parameters and any variables which are created inside of the function within that function's local scope.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=16)** When I want to use a specific resource, I'll look for it first in the local area.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=20)** So if I want to add some bacon to my omelet, I'll look for it nearby.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=24)** Here it is, so I'll add that.
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=27)** Now, if I want to add some cheese to my omelet, I'll start by looking for it in my local scope.
>
> **[0:33](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=33)** But I don't seem to have any cheese here, so I'll expand my search to look in the global scope.
>
> **[0:39](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=39)** And in this case, that's my kitchen, so I'll go get some cheese from the fridge.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=45)** Whoa.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=45)** - Ooh, bacon.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=46)** Can I have some?
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=47)** - Oh, no, no, no, no, you can't touch that bacon.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=50)** That bacon is my input ingredient, which means it's in my local scope.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=54)** Only I can use objects that are local to my function while I'm executing it.
>
> **[0:58](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=58)** If you're hungry, you can have some cheese.
>
> **[1:00](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=60)** It was in the global area of the kitchen, which means it's a shared resource, so anybody can use it.
>
> **[1:06](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=66)** - But I want some bacon.
>
> **[1:07](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=67)** Can I use whatever's left over?
>
> **[1:09](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=69)** - Olivia, I really wish I could, but the only thing you can get out of a function is the return value, which will be the final omelet.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=77)** When my function finishes, all of those local variables will disappear, because I like to clean things up when I'm done.
>
> **[1:24](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=84)** - But this function needs bacon.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=86)** - It's a good thing she's my wife and not an actual function.
>
> **[1:30](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=90)** - [Olivia] To explore the scope of local and global variables, let's start by looking at our make_omelette function, defined at line 11, which we defined in a previous video.
>
> **[1:39](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=99)** As Barron mentioned in the kitchen, when we create a function, the names of the input parameters and any variables which aren't created inside of the function will be in the local scope, meaning they can only be accessed inside of that function.
>
> **[1:54](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=114)** That means we can only use the parameter named ingredient, and the variable named omelette inside of that make_omelette function.
>
> **[2:01](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=121)** If we try to access either of those variables elsewhere in the program, Python will throw an error because those variable names don't exist outside of the scope of the make_omelette function.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=130)** Let's demonstrate that by trying to access the ingredient parameter from within the make_pancake function.
>
> **[2:16](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=136)** To do that, we'll modify the pancake string at line 18 to include the ingredient.
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=142)** We can see the code editor underlined the ingredient variable in red to let us know there's a potential problem.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=148)** Now, this program currently only calls the make_omelette function on lines 22 and 23.
>
> **[2:34](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=154)** So if I run this program, everything seems like it's working fine.
>
> **[2:38](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=158)** We get the expected bacon and spam omelets as the result, and since the make_pancake function is never called, it doesn't even reveal the problem.
>
> **[2:46](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=166)** Now let's change my breakfast choice on line 23 to make a pancake.
>
> **[2:52](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=172)** Run the program again.
>
> **[2:54](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=174)** And now, after printing all of the messages from the mix and cook functions, Python throws a name error at line 23, because we're trying to access a variable named ingredient, which is not defined within the scope of the make_pancake function.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=187)** When we called to make_omelette, it temporarily created a variable named ingredient to use inside of that function.
>
> **[3:13](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=193)** Then when that function finished, that variable went away.
>
> **[3:16](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=196)** So even if we try accessing the ingredient variable within the print statement immediately after executing the make_omelette function, rerun the code, and Python politely lets us know that the name ingredient is also not defined here.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=210)** It only existed as a local variable inside of the make_omelette function, and only while that function was executing.
>
> **[3:37](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=217)** Now, in our kitchen, the cheese in the fridge was a shared resource which existed in the global scope of the kitchen.
>
> **[3:43](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=223)** To represent that, let's create a string variable named cheese near the top of the script, and we'll assign the value cheddar.
>
> **[3:51](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=231)** Since we created this cheese variable outside of any specific function, it will have a global scope, which means we can use it inside of any of the functions.
>
> **[4:01](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=241)** Let's modify the make_omelette function to make a cheese omelet instead of using the ingredient parameter.
>
> **[4:07](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=247)** Now the string we return from this function will describe an omelet with whatever value is assigned to cheese.
>
> **[4:13](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=253)** Also, since we're no longer using the ingredient parameter, let's go ahead and remove it from the function definition.
>
> **[4:20](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=260)** That means we'll also need to remove the bacon argument from Barron's breakfast, and we can delete the line trying to access the local ingredient variable too.
>
> **[4:29](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=269)** Let's also modify the make_pancake function to add cheese to the pancake string.
>
> **[4:34](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=274)** I know cheese is an odd ingredient to use in pancakes, but don't knock it until you try it.
>
> **[4:39](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=279)** We're adding it here to demonstrate that we can access and use that cheese variable in different functions because it's global.
>
> **[4:45](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=285)** Finally, I'll remove the spam argument when making my breakfast down below.
>
> **[4:50](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=290)** I'll click the Run All arrow to rerun the entire script, and we can see that the make_omelette function successfully produced a cheddar omelet, and the pancake function returns a cheddar pancake.
>
> **[5:02](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=302)** Since that cheese variable now exists within the global scope of the script, we can access and use its variable from anywhere.
>
> **[5:09](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=309)** Now, let's consider what might happen if local and global variables share the same name.
>
> **[5:14](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=314)** The cheddar cheese in the fridge is a shared resource, which is why we created it as a global variable, but I also have a secret stash of Swiss cheese that I like to use for making omelets.
>
> **[5:25](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=325)** To represent that, we'll create a local variable inside of the make_omelette function called cheese that has a value of Swiss.
>
> **[5:33](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=333)** In Python, this syntax creates a new variable, so our program now has two variables named cheese, a global variable with a value of cheddar and a local variable in the make omelet function, which has a value of Swiss.
>
> **[5:46](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=346)** So what will happen when we make an omelet?
>
> **[5:48](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=348)** Will it use the cheddar or the Swiss?
>
> **[5:51](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=351)** Well, one way to find out is to run the program.
>
> **[5:55](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=355)** We can see that the make_omelette function returned a Swiss omelet for Barron, and the pancake function returned a cheddar pancake for me.
>
> **[6:03](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=363)** These functions are working just like we did in the kitchen, by searching for things in the local area first before looking for them in the global area.
>
> **[6:11](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=371)** When we call the make_omelette function, it will search the local scope and find the Swiss cheese there, so it uses that.
>
> **[6:17](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=377)** Likewise, when the make_pancake function wants to access the cheese variable, it also starts by looking for cheese in its local scope.
>
> **[6:24](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=384)** However, it won't find it there because the make_pancake function does not have a local cheese variable, so it expands its search to find and use the global variable.
>
> **[6:34](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=394)** Because we're working in Python, the statement cheese = 'swiss' creates a new local variable inside of the make_omelet function, rather than overriding the value of the global cheese variable, which already existed.
>
> **[6:47](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=407)** To view the state of the cheese variable before each time we call the cooking function, let's add a few more print statements to this program.
>
> **[6:59](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=419)** I'll rerun it.
>
> **[7:03](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=423)** And we can see that the global cheese variable remains cheddar throughout this execution.
>
> **[7:08](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=428)** Assigning the value of Swiss to the local cheese variable within the make_omelette function has no effect on it.
>
> **[7:14](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=434)** In Python, if we want to change the value of a global variable from within a function, then we have to explicitly tell Python that we want to change that global variable.
>
> **[7:23](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=443)** Let's do that by adding the line global cheese at the beginning of the make_omelette function.
>
> **[7:30](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=450)** This tells Python that when we refer to the variable named cheese inside of the make_omelette function, we're actually referring to the global cheese variable rather than a local version of cheese.
>
> **[7:41](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=461)** Now, if I rerun this entire script, since the make_omelette function is called first and changes the global cheese variable to Swiss.
>
> **[7:48](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=468)** When the make_pancake function runs afterwards, it uses the new global value, so we end up with both a Swiss omelet and a Swiss pancake in the end.
>
> **[7:58](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=478)** If we swap around the order in which the two cooking functions are called, and run the script one last time, since the make_pancake function is called first, it used the initial value for the global cheese variable, which was cheddar.
>
> **[8:15](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=495)** Then the make_omelette function executed and changed the value of the global cheese to be Swiss and use that to make a Swiss omelet.
>
> **[8:22](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=502)** Looking at the sequence of global cheese print statements, we can see that the global variable changed to Swiss only for the omelet.
>
> **[8:30](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=510)** Python is designed this way to prevent you from accidentally changing a global variable by using the same name for a variable inside of a function.
>
> **[8:37](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=517)** It forces you to explicitly say you intend to use a global variable from within the scope of a function.
>
> **[8:44](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=524)** Other programming languages use different policies or mechanisms to differentiate between local and global variables.
>
> **[8:50](https://www.linkedin.com/learning/programming-concepts-for-python/local-and-global-variables?u=76281980&t=530)** If you're using a language other than Python, be sure to check how that language handles local and global scope so you don't unintentionally change or use the wrong variables.

> [!info]- Semantic Content
>
> **Code Keywords:** function (48), let (11), case, (1), throw (1), delete (1)
> **Code Identifiers:** make_omelette (17), make_pancake (8), make_omelet (1)
> **CLI Commands:** python (10), make (5), find (4)
> **Speakers:** - but (2), - while (1), - ooh (1), - oh (1), - olivia (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **Cross-References:** previous video (1)
> **Analogies:** just like (1)


### 2. Objects

> [↑ Back to Table of Contents](#table-of-contents)

#### Objects
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=1)** - Many modern languages, including Java, C#, and Python, implement a programming model called Object-Oriented Programming, which is intended to give programmers a way to think about the various elements in their program, like objects in the real world.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=14)** Rather than thinking about a program as a sequence of logic and actions, in an Object-Oriented Programming language, we create virtual objects as the pieces of our program and then interact with and use those objects to accomplish a task.
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=27)** Object-Oriented Languages give us a way to structure and organize our code that makes it easier to design and maintain large scale applications.
>
> **[0:34](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=34)** I'll discuss many of the benefits of Object-Oriented Programming throughout this chapter, but first, let's start by asking the basic question, what is an object?
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=44)** Well, to understand what an object means in terms of programming, start by thinking about what makes something an object in the real world.
>
> **[0:52](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=52)** Now, imagine for a minute that this closet space represents my program and all of the various items of clothing are objects that I've created to use within my program.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=62)** Object-Oriented Programmers typically think of objects as nouns, which are people, places, or things.
>
> **[1:07](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=67)** If you can refer to something with words like 'the' or 'this,' it's probably a noun and can be thought of as an object in your program.
>
> **[1:14](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=74)** For example, this shirt is an object.
>
> **[1:18](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=78)** All objects have attributes which can be used to describe the object in its current condition.
>
> **[1:23](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=83)** This red cotton shirt is clean.
>
> **[1:25](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=85)** There were three attributes in that sentence, red, cotton and clean, which are adjectives that describe this shirt.
>
> **[1:31](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=91)** Some of those attributes will remain constant for the life of the object.
>
> **[1:34](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=94)** This shirt will always be cotton, but there are other attributes that describe its condition that might change.
>
> **[1:40](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=100)** I'll probably get it dirty at some point, so it'll no longer be clean.
>
> **[1:44](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=104)** Now, in addition to having attributes, I can also do things with this shirt.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=108)** The term method describes actions that an object can perform.
>
> **[1:52](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=112)** These are verbs that could be applied to the shirt.
>
> **[1:54](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=114)** I could wear it, stretch it, the shirt could fade, it might rip.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=118)** Some of those methods might change certain attributes about an object.
>
> **[2:02](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=122)** If I wear the shirt long enough, then that might change it from clean to dirty.
>
> **[2:06](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=126)** Other methods might enable this shirt to interact with other objects.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=130)** Different types of objects have different attributes and methods depending on what they are.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=135)** A pair of pants probably has attributes for waist size and circumference, whereas a shirt has a size attribute for small, medium, or large.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=143)** My shoes have a method to tie them, but it doesn't make sense for shirt or pants to have that same tie method.
>
> **[2:29](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=149)** Objects can also contain other objects.
>
> **[2:31](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=151)** For example, the outfit I'm wearing is an object which contains individual shirt, pants and shoe objects, and just like in real life, we can have multiple individual instances of the same type of object.
>
> **[2:44](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=164)** The shirt I'm wearing and the red one from earlier are two separate instances of a shirt each with different attributes.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=171)** This one's red, whereas the one I'm wearing is gray.
>
> **[2:54](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=174)** If I change the attributes of one object like get my gray shirt dirty, that's not going to affect the attributes of the red shirt.
>
> **[3:01](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=181)** It's also possible to have multiple objects of the exact same type with the exact same values.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=187)** It's easy to see that even though these are identical red shirts, they are still two distinct objects.
>
> **[3:13](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=193)** This way of thinking about real life objects as individual things with attributes that describe them and actions that they can perform is how we should also think about objects in the programming sense.
>
> **[3:25](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=205)** Python does not have built-in types of objects to represent clothing, but it does have a variety of built-in objects for common data types like numbers and strings.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=214)** To demonstrate that, I'll open a new terminal within my code spaces environment by clicking the top left menu icon, selecting terminal, and then new terminal.
>
> **[3:46](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=226)** Then within that new terminal, I'll use the Python command to start a new interactive Python shell.
>
> **[3:53](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=233)** Now let's create a few objects starting with a string that simply says 'shirt.'
>
> **[4:00](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=240)** When I press Enter to run that command, Python creates a new string object, and then the shell prints that string representation of the object, which in this case is just the word 'shirt.'
>
> **[4:12](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=252)** To see the type of object that command created, we can use Python's type function on it.
>
> **[4:18](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=258)** This line will create a string object that says 'shirt,' and then the type function will print out the data type of that object, so when I run that command, we can see that this object belongs to the class STR, which is short for string.
>
> **[4:33](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=273)** The fact that this object has the type string is important because that means it will have certain string related attributes that we can use.
>
> **[4:41](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=281)** To see the attributes that belong to this string object, we can use the DIR function on it.
>
> **[4:48](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=288)** This DIR function returns a list of the various attributes that belong to this string object.
>
> **[4:53](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=293)** Some of these attributes are common things that all objects have, like the knit method and other attributes here are things that are specific to string type objects, like these split and swap case methods.
>
> **[5:06](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=306)** We can use these various string methods on string objects.
>
> **[5:10](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=310)** For example, let's use the upper method on a shirt string.
>
> **[5:15](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=315)** The upper method creates and returns a new string object, which has the word 'shirt' in uppercase letters.
>
> **[5:22](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=322)** Now, we can keep track of individual objects by looking at their IDs.
>
> **[5:27](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=327)** Python assigns a unique ID number to each object it creates, which can be viewed with the ID function.
>
> **[5:33](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=333)** If we ask for the ID of a string that says 'shirt,' we get back this sequence of numbers, and if we create a different string object, let's say a pair of pants, we can see that the pants string has a different ID than the shirt string.
>
> **[5:50](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=350)** They are two separate objects.
>
> **[5:53](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=353)** These concepts hold true for other data types like integers.
>
> **[5:56](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=356)** In Python, even the number one is an object with its own ID and its own set of attributes.
>
> **[6:05](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=365)** Just like with the string, some of these attributes are common to all types of objects and others are specific to integers.
>
> **[6:13](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=373)** Near the beginning of this video, I made the statement that you can think about programming objects as being like nouns, and the objects we've seen so far are easy to think about that way because numbers and strings can be thought of as things, but many object-oriented languages don't just limit objects to being things that represent data like strings and numbers.
>
> **[6:34](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=394)** A common phrase that you might hear people use when talking about Python is that everything is an object in Python.
>
> **[6:41](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=401)** What this means is that even functions and methods in Python are objects with their own unique ID and set of attributes.
>
> **[6:51](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=411)** For example, the ID function is an object with its own ID, and the DIR function is another object with its own set of attributes.
>
> **[7:02](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=422)** It may feel weird to think of functions and methods as being objects too, because we typically think about them as verbs.
>
> **[7:09](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=429)** They're actions that our program can do, but in an object-oriented language like Python, those functions and methods are objects in just the same way that strings and numbers are objects.
>
> **[7:19](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=439)** Now, if this all sounds wild and confusing, fear not, there is a benefit to this scheme of making everything an object.
>
> **[7:28](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=448)** Since there are certain attributes that are common to all types of objects, that means there are certain things we can do with any object without having to worry about what specific type of object it is.
>
> **[7:39](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=459)** For example, we can compare two objects, past objects as arguments to functions, or store objects inside of lists or dictionaries, which are themselves objects.
>
> **[7:49](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=469)** The point is we can do all of these common things to functions, methods, strings, integers, lists, and dictionaries because they're all objects.
>
> **[7:58](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=478)** The type of the object doesn't matter.
>
> **[8:00](https://www.linkedin.com/learning/programming-concepts-for-python/objects?u=76281980&t=480)** This flexibility to treat all objects in similar ways lets us write robust programs that can be more resilient to changes and makes life as a code maintainer much easier.

> [!info]- Semantic Content
>
> **CLI Commands:** python (12), make (1)
> **Code Keywords:** function (7), let (4), this, (1)
> **Definitions:** is an  (6), short for (1), is a  (1)
> **Analogies:** for example (5), just like (2), imagine (1)
> **Env Vars:** dir (3), str (1)
> **Tools:** terminal (4)
> **Speakers:** - many (1)

#### Classes
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=1)** - Out of the box, object-oriented programming languages give us the ability to create objects for common types of things like representing numbers and strings.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=9)** But if I want to create my own custom types of objects, I can do so by defining classes, which are the blueprints used to create new objects.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=17)** A class defines the attributes and methods that make up a specific type of object.
>
> **[0:22](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=22)** This class for a pair of blue jeans will describe its attributes for waist size, length, and color, as well as methods for donning and removing the jeans.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=30)** This blueprint might also have a special constructor method for creating a new pair of jeans object, which allows me to specify values for size, length, and color when I create a new jeans object.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=41)** If I wanted to construct a new pair of jeans, I could do so by following these blueprints to give the new object the appropriate attributes.
>
> **[0:48](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=48)** But I'm not that good at sewing.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=50)** As a modern man, I buy my pants on the internet.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=55)** This online order page is like the constructor method.
>
> **[0:58](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=58)** It has input parameters for the waist size, length, and color for a new jeans object.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=62)** So when I supply the order page with those arguments and click Buy, it constructs that pair of jeans and I get it in the mail.
>
> **[1:11](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=71)** We can do a similar thing with Python.
>
> **[1:13](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=73)** The script shown here defines a class at line three that can be used to construct objects representing a pair of jeans.
>
> **[1:21](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=81)** This simple jeans class has three methods: _init_, put_on, and take_off.
>
> **[1:27](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=87)** The _init_ method, with two underscores on both sides, is a special Python constructor method that gets called whenever we create a new jeans object.
>
> **[1:37](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=97)** By defining the _init_ method here, we can allow the user to pass in certain parameters when creating a new pair of jeans, and then control how those parameters are used internally to set the starting state of the new jeans.
>
> **[1:50](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=110)** This _init_ method defined at line four has three input parameters that describe a pair of jeans: its waist, length, and color.
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=119)** But there's also a strange first parameter named self.
>
> **[2:03](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=123)** You may have also noticed that all three of these methods in our jeans class have their own parameter called self.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=130)** This self parameter is necessary, because when you call a method on an object, Python will automatically pass a reference to that object as the first argument.
>
> **[2:21](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=141)** It may seem odd and maybe a bit recursive that Python is passing an object to the method that is acting on that object, but it does so for a very important reason.
>
> **[2:32](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=152)** By always passing a reference to the object being acted upon as the first argument, Python provides a convenient way to access and modify that object from within the method.
>
> **[2:41](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=161)** You can actually name that first parameter whatever you want, but the convention is to name itself, which is a rule I highly recommend following.
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=170)** So when we use the jeans class to construct a new jeans object, we'll pass it arguments for the waist, length, and color, which gets sent to the _init_ method.
>
> **[2:59](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=179)** Inside the _init_ method, we use that 'self' reference to the new jeans object to create object attributes for waist, length, and color, and then set those attributes to the appropriate values.
>
> **[3:11](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=191)** The _init_ method also creates a fourth attribute called wearing, at line eight, which represents whether or not the pair of jeans is being worn.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=199)** Since a new pair of jeans won't magically appear on someone, it makes sense to always initialize the wearing attribute to false.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=207)** The other two methods in this class are similar.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=210)** The only parameter they use is the automatic 'self' reference to the object, which means we will not need to provide any arguments when we use the put_on or take_off methods.
>
> **[3:39](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=219)** Both methods will print out a message about whether they're putting on or taking off the pair of jeans, and then set the wearing attribute to true or false accordingly.
>
> **[3:48](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=228)** They use the attributes for waist, length, and color to modify the message string so that it describes the dimensions and color of the pair of jeans that are being put on or taken off.
>
> **[3:59](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=239)** I've already opened a terminal to the same directory as this script and started a Python Interpreter.
>
> **[4:05](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=245)** To load that class into the current session so we can use it, I'll enter the command: from classes_begin import *.
>
> **[4:14](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=254)** We'll learn more about importing modules later in this course.
>
> **[4:17](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=257)** For now, you just need to know that this command brings the jeans class into scope from the classes_begin script so we can use it in this Python session.
>
> **[4:26](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=266)** Now, let's use that class blueprint to create a new pair of jeans.
>
> **[4:31](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=271)** We'll declare a new variable named my_jeans, and then call the jeans constructor method and pass it an argument of 31 inches for the waist measurement, 32 inches for the length, and the color is blue.
>
> **[4:48](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=288)** Running that command creates a new jeans object and binds it to the variable name my_jeans.
>
> **[4:55](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=295)** If we use the type function on my_jeans, we can see Python recognizes that this object belongs to the jeans class.
>
> **[5:04](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=304)** Next, let's take a look at all of the attributes that the my_jeans object has by using the dir function on it.
>
> **[5:11](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=311)** Whoa, that's a lot more attributes than are defined in the jeans class.
>
> **[5:15](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=315)** At the bottom of this list, you might recognize some of the attributes that exist specifically for jeans, such as values for the color and length of the jeans and methods to put on and take off the jeans.
>
> **[5:26](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=326)** All of the attributes listed before that, those with double underscores in their names, are attributes that are common to all objects in Python, meaning our jeans object got those attributes just by virtue of being a Python object.
>
> **[5:41](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=341)** Now, since the object named my_jeans is specifically a jeans type of object, that means we can use the put_on method on it.
>
> **[5:50](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=350)** That prints out the message that we're putting on the 31 by 32 blue jeans, and it changes the value of the internal wearing attribute for that pair of jeans.
>
> **[5:59](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=359)** We can see the value of that wearing attribute with the command my_jeans.wearing.
>
> **[6:07](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=367)** And that shows us that the value of the wearing attribute is true because the jeans are on.
>
> **[6:13](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=373)** If we then use the take_off method to remove my_jeans and then check the state of that wearing attribute, we see that now wearing is false.
>
> **[6:24](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=384)** Regardless of our sewing skills, we can use this custom jeans class that we've defined to construct as many pair of Python jeans as we want.
>
> **[6:33](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=393)** One benefit of object-oriented programming is that we don't have to know the under-the-hood details about how those attributes and methods are implemented in an object.
>
> **[6:43](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=403)** The only thing I need to know to use the pair of jeans is that it has a put_on and take_off method.
>
> **[6:49](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=409)** And I don't need to know how those methods work.
>
> **[6:52](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=412)** By encapsulating those details inside of the object, you as the programmer can focus on how you're going to use those objects to accomplish the task at hand.
>
> **[7:01](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=421)** Class definitions created for one program can easily be carried over and used again in other programs.
>
> **[7:08](https://www.linkedin.com/learning/programming-concepts-for-python/classes?u=76281980&t=428)** Object-oriented design makes code that is easy to reuse and maintain, which will save you a lot of time in the long run as your programs grow in size and complexity.

> [!info]- Semantic Content
>
> **Code Identifiers:** my_jeans (7), put_on (4), take_off (4), classes_begin (2)
> **Code Keywords:** self (5), pass (4), let (2), function (2), class. (2)
> **CLI Commands:** python (11), make (1)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - out (1)

#### Object names
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=0)** - As we create and use objects in our programs, we need a way to refer to them, and this can be accomplished by binding names to those objects.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=8)** Take this shirt, for example.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=9)** It's a solid color, so I'm going to use the name red shirt to refer to it.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=13)** If I'm wearing the red shirt, that means I'm wearing this specific object.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=18)** Now, red shirt itself is not an object.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=20)** Red shirt is just a name that I use to refer to this specific object.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=25)** And just like in real life, it's possible to have multiple names for the same object.
>
> **[0:29](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=29)** - Ah, your crimson shirt, I like it.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=31)** - As you can see, Olivia has a different name for my shirt.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=35)** - It's a crimson shirt.
>
> **[0:36](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=36)** - I'm not sure what crimson is, so I call this my red shirt.
>
> **[0:40](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=40)** We have two different names that we use to refer to the same object, but there is only this one shirt.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=45)** That means if I spill juice on the red shirt-
>
> **[0:48](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=48)** - The crimson shirt is gross and sticky.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=50)** And if I decide to toss the crimson shirt into the washing machine-
>
> **[0:53](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=53)** - Then the red shirt will get cleaned.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=55)** Regardless of which name we use to reference this shirt object, we are both using and modifying the exact same thing.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=61)** When we use one of those names to change the object, then that change will be reflected in any other names that are bound to it.
>
> **[1:08](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=68)** Ah, I like your style.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=70)** - I got my own crimson shirt.
>
> **[1:11](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=71)** - And I still have my red shirt.
>
> **[1:14](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=74)** Now we're wearing identical shirts.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=76)** These two shirts are equal, but they're not the same, and this is an important distinction because we can have two shirt objects which have the same attributes, but they're two separate and unique objects which are referred to by different names.
>
> **[1:29](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=89)** So if I spill juice on my red shirt-
>
> **[1:33](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=93)** - [Olivia] And I toss my crimson shirt into the washing machine-
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=96)** - The red shirt is still gross and sticky.
>
> **[1:39](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=99)** Since we had two separate objects, which we referred to by different names, when Olivia washed the crimson shirt, it had no effect on the red shirt.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=108)** - [Olivia] The example script shown here contains a class definition for a basic shirt object.
>
> **[1:53](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=113)** Whenever we create a new shirt, the init method at line four will initialize the clean attribute to true because a brand new shirt should be clean when we get it.
>
> **[2:02](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=122)** There are also methods to virtually spill juice on the shirt and to wash it named make_dirty and make_clean respectively, which change the value of the clean attribute accordingly.
>
> **[2:13](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=133)** I've already opened a terminal in the same directory as that script, started Python, and used an import statement to load the shirt class into scope.
>
> **[2:21](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=141)** Now let's create a new shirt object and assign it to a variable named red.
>
> **[2:26](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=146)** This line of code calls the shirt constructor method to create and return a new shirt object, which is then bound to the name red.
>
> **[2:34](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=154)** The name red does not contain the shirt object.
>
> **[2:37](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=157)** It's just a name that points to the shirt object that we just created.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=160)** The equal sign operator takes an object on the right side, which can be an existing object or the output from the function, and it binds that object to the variable name on the left side.
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=170)** Now let's give the shirt named red a second name, crimson, by typing crimson equals red.
>
> **[2:58](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=178)** This associates the red shirt object with the variable name crimson.
>
> **[3:02](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=182)** We can see that the names red and crimson both point to the same object by calling the ID function on them.
>
> **[3:09](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=189)** This is the object ID the variable name red points to and this is the object ID crimson points to.
>
> **[3:16](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=196)** By passing red and crimson to the ID function, we can see that they reference the exact same object because they have the same ID number.
>
> **[3:24](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=204)** The names red and crimson are both bound to the same shirt object.
>
> **[3:29](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=209)** If we use the command red.clean to check the state of the red shirt, we can see that the red shirt is clean, and the same thing goes with the crimson shirt.
>
> **[3:39](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=219)** It's also clean.
>
> **[3:40](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=220)** Now, if we use the make_dirty method to spill some juice on the red shirt and then check the status of the clean attribute, it's false.
>
> **[3:50](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=230)** And as you would expect, the crimson shirt is also dirty, since it's the exact same object.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=237)** Its clean attribute is also false.
>
> **[4:00](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=240)** We can check to see whether or not the two different names refer to the same object by using the is operator, which will return true or false depending on whether or not the two objects had the same ID.
>
> **[4:12](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=252)** So in this case, if we use the command red is crimson and run the command, we get back true because they refer to the same object.
>
> **[4:21](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=261)** Now let's create a new shirt object by using the shirt constructor method again and bind it to the name crimson.
>
> **[4:28](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=268)** If we check the IDs of the red shirt and the crimson shirt, we see that they refer to different objects.
>
> **[4:36](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=276)** Since we created a new shirt object to bind the name crimson, it'll start out clean, but the red shirt from earlier will still be dirty.
>
> **[4:45](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=285)** Now I don't like gross, dirty shirts, so let's use the make_clean method on the red shirt to clean it up.
>
> **[4:51](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=291)** Since the shirts are separate objects, the make_clean method only worked on the red shirt.
>
> **[4:56](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=296)** Let's check to make sure it's clean.
>
> **[5:01](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=301)** Yep, it's clean.
>
> **[5:02](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=302)** And we can check to see that the crimson shirt is still clean.
>
> **[5:06](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=306)** It's important to recognize that even though the red and Crimson shirts both have the same value for the clean attribute, they are two separate objects.
>
> **[5:14](https://www.linkedin.com/learning/programming-concepts-for-python/object-names?u=76281980&t=314)** If we try comparing this using the Python is operator, it returns false because now these two names refer to different objects.

> [!info]- Semantic Content
>
> **Speakers:** - as (2), - i (2), - the (2), - [olivia] (2), - ah (1)
> **Code Keywords:** let (5), function (3), case, (1)
> **Code Identifiers:** make_clean (3), make_dirty (2)
> **CLI Commands:** python (2), make (1)
> **Analogies:** for example (1), just like (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)

#### Mutability
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=0)** - As you learn about programming, you might encounter two funny sounding words, mutable and immutable, which are just fancy words to describe whether or not something can be changed.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=11)** A mutable object can be modified after it's been created, whereas an immutable object cannot.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=16)** Once you've created an immutable object, you're stuck with it.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=20)** Object types will either be mutable or immutable, and it's a good idea to learn which is which, so you can be sure to select the right type of object for different jobs.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=28)** For example, you'd want to avoid using immutable data types to store values in your program that we're going to constantly changing or needing to be changed.
>
> **[0:37](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=37)** One example of mutable object in Python is the list, which is an object type that acts as a container to store an ordered collection of other objects.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=45)** You can think of this rack of clothes as a list, which contains several different clothing objects.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=50)** As Olivia sorts through the rack of clothes to pick an outfit for today, she can change the contents of the list by removing items or putting them back in a different position, because the list is immutable data type.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=61)** Every time she inserts or removes an item from the rack, the value of that list object changes, but the existence of the list is unaffected.
>
> **[1:09](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=69)** Olivia is always interacting with the same rack of clothes.
>
> **[1:12](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=72)** Now, let's consider an immutable data type that cannot be changed, a string.
>
> **[1:18](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=78)** Since a string of words in Python is immutable.
>
> **[1:21](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=81)** You can think of it like a series of words that you've spoken out loud.
>
> **[1:25](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=85)** - What do you think of this outfit?
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=86)** - You're wearing that?
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=88)** Is not what I should have said to my wife, but I did say it, and unfortunately, I cannot change those words, because they're immutable.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=96)** When I use a function or method on a Python string object, I'm not actually changing the string.
>
> **[1:40](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=100)** Those words have already been spoken.
>
> **[1:42](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=102)** All I can do is create a new string object with a smarter choice of words and use that to replace the old string.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=109)** What I meant to say was, you're wearing that because you look great.
>
> **[1:54](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=114)** And I think this is a good time to look at some code.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=118)** To demonstrate mutable and immutable objects in Python, we'll play around with a list and some strings.
>
> **[2:04](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=124)** I've already opened a new Python shell, and you can see here that I've created a list object named closet, which contains several strings for various clothing items.
>
> **[2:14](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=134)** If I print the contents of the closet, we can see that it currently contains a shirt, hat, pants, jacket, and socks, in that order.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=143)** We can use the ID function to check the ID of that list object, and we see that it returns a unique ID number that Python has assigned to that list.
>
> **[2:32](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=152)** Now, let's make some changes to the closet.
>
> **[2:35](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=155)** We can remove items from the list by using the remove method.
>
> **[2:39](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=159)** Let's do that to take out the hat and then print the closet's contents.
>
> **[2:45](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=165)** We can see that the value of the list is different now, because it no longer contains the hat, but if we use the id function again to check the list's ID, we can see that it has the exact same ID as before.
>
> **[2:58](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=178)** The name closet points to the exact same list object as before.
>
> **[3:02](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=182)** We've just changed the value of that list object, and we can do so because lists are mutable.
>
> **[3:09](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=189)** Now, let's switch gears to look at an immutable Python data type, strings.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=195)** Let's create a new string object named words, which contains my poor choice of words from earlier.
>
> **[3:22](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=202)** "You're wearing that."
>
> **[3:24](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=204)** We can use the print function to display the contents of the string of words, and we can use the id function to see that object's unique ID.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=214)** Now, those particular words were not a good choice for me to say to Olivia, so let's try modifying that string object to make it a more positive statement by concatenating the phrase, " because you look great!"
>
> **[3:48](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=228)** Now, if we print out the words object, we see it contains the entire phrase, "You're wearing that because you look great!"
>
> **[3:56](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=236)** which is better than the original choice of words.
>
> **[3:59](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=239)** However, if we check the ID of that object, we see that it is different than the previous ID for words.
>
> **[4:08](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=248)** This is an important thing to realize about immutable objects.
>
> **[4:12](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=252)** When we used the plus operator to append a phrase at the end of words, it did not actually modify the original string object, because it can't change it.
>
> **[4:21](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=261)** Strings are immutable.
>
> **[4:23](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=263)** What happened here is that the plus operator created a new string object containing the combined phrases.
>
> **[4:30](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=270)** Then the equal operator bound that new object to the variable name words, effectively replacing the old string.
>
> **[4:37](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=277)** Keep this in mind whenever you're working with immutable object types.
>
> **[4:40](https://www.linkedin.com/learning/programming-concepts-for-python/mutability?u=76281980&t=280)** Every time we use one of the string methods to modify the contents of a string, Python is actually having to create an entirely new string object in the background.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (5), type. (1), switch (1), type, (1)
> **CLI Commands:** python (8), make (2)
> **Definitions:** is an  (2), is a  (1)
> **Speakers:** - as (1), - what (1), - you (1)
> **Analogies:** for example (1), think of it like (1)
> **UI Navigation:** select the (1)


### 3. Class Inheritance

> [↑ Back to Table of Contents](#table-of-contents)

#### Class inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=0)** - When creating new classes, we can pass on attributes and methods from other existing classes through a process called inheritance.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=7)** This is useful when creating a new class, which represents a specific subset of a previously defined, more generic class.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=14)** To demonstrate this concept, let's go out to the garage.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=20)** Say I create a class called vehicle, which contains attributes and methods that are common to all types of vehicles.
>
> **[0:26](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=26)** All vehicles can be described in terms of color, so my class will have a color attribute.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=31)** Also, all vehicles were manufactured by somebody, so I'll create another data field to store that information.
>
> **[0:37](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=37)** And finally, although it may not be the case for much longer, my vehicles run on gasoline.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=41)** So I'll need a data field for the level of fuel in the tank.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=45)** As far as methods go, for any vehicle to be useful, I need to be able to drive it.
>
> **[0:49](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=49)** So I'll define a drive method, and when I use the drive method, it'll act upon that vehicle by decreasing the amount of gas in the tank.
>
> **[0:57](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=57)** Now, this vehicle class that I just described is very generic because it needs to apply to all vehicles.
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=63)** So what can I do if I need to describe some methods that only apply to a specific type of vehicle, like a car?
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=70)** Well, I can just create a subclass.
>
> **[1:13](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=73)** I'll call this class car and say that it inherits from the vehicle class.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=77)** That means when I create a car object, it'll have a color and manufacturer as defined in the vehicle class.
>
> **[1:23](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=83)** So this car object here is a red Mercedes with a full tank of gas.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=88)** And the car will also inherit the drive method described by the vehicle class.
>
> **[1:32](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=92)** Now, in addition to those three inherited attributes from the vehicle class, I can also add additional methods that are specific to the car class.
>
> **[1:40](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=100)** I can define methods to roll down the window or turn on the radio.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=105)** These two methods are defined within the car class because they're specific to a car and don't necessarily apply to other types of vehicles.
>
> **[1:54](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=114)** Like a motorcycle, it doesn't make sense for the motorcycle class to have a method for opening the windows because well, the windows are always open on a motorcycle, but it does make sense for the motorcycle to have the color and manufacturer data.
>
> **[2:07](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=127)** My silver Harley can inherit the gas and drive methods as well.
>
> **[2:11](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=131)** A new class called motorcycle can inherit from the vehicle class, so it gets those four things.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=135)** And then in addition to the inherited data fields and methods, I can also describe some motorcycle specific things like putting on my helmet.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=148)** This example Python script represents a garage full of classy vehicles.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=153)** We have three class definitions here.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=156)** The first is the vehicle class at line four, which contains the attributes that are common to all vehicles.
>
> **[2:42](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=162)** It has an an init constructor method, which takes the color and manufacturer of the vehicle and then assigns those values to internal variables.
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=170)** It also creates an object variable called gas and sets it to four, which represents a full tank of gas.
>
> **[2:56](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=176)** It defaults to four because when you buy a new vehicle, it's always nice to leave the lot with a full tank.
>
> **[3:03](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=183)** The vehicle class also has a method called drive at line 10, it checks to see if there's gas in the tank, and if so, it uses some of that gas by decreasing the gas variable and prints a message saying that a vehicle goes vroom.
>
> **[3:17](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=197)** If there's no gas left in the tank, then the message says that the vehicle sputters out of gas.
>
> **[3:24](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=204)** The next class definition is for a car at line 18.
>
> **[3:28](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=208)** The car class inherits from the vehicle class because it has vehicle in parentheses after the class name.
>
> **[3:35](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=215)** That's the Python syntax for inheriting classes.
>
> **[3:38](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=218)** Notice that the car class does not define an init constructor method.
>
> **[3:43](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=223)** It doesn't need to because it already has that inherited from the vehicle class along with a drive method.
>
> **[3:49](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=229)** The car class does have two unique methods.
>
> **[3:52](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=232)** One to turn on the radio to hear some rocking tunes and the other to open the window and get some fresh air.
>
> **[3:58](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=238)** Both of these methods simulate their actions by printing out the corresponding messages.
>
> **[4:03](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=243)** Finally, our last class at line 26 is the motorcycle.
>
> **[4:08](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=248)** It also inherits from the vehicle class, but motorcycles have their own unique method for putting on a helmet.
>
> **[4:15](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=255)** When we call the helmet method, it will print out a message letting us know that we're nice and safe.
>
> **[4:22](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=262)** I've already opened a terminal to the same directory as that script, started Python, and used an import statement to load all of those classes into Scope.
>
> **[4:30](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=270)** Now let's create a new car object named my car by using the car constructor method to make a red Mercedes.
>
> **[4:40](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=280)** After that, let's also create a motorcycle object named my mc by using the motorcycle constructor to make a silver Harley.
>
> **[4:50](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=290)** Remember, both the car and motorcycle classes have similar constructor methods because they both inherited the same init method from the vehicle class.
>
> **[5:00](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=300)** Now that we have a car and a motorcycle, let's take 'em on a test drive.
>
> **[5:04](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=304)** First we'll call the drive method on my car, and that prints a message saying that the red Mercedes goes vroom.
>
> **[5:12](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=312)** If we use the same drive method on the motorcycle to take it for a ride, that prints a different message saying that the silver Harley goes vroom.
>
> **[5:21](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=321)** The motorcycle and car classes are using the data fields for color and manufacturer that were defined in the vehicle class to create the messages in their drive methods.
>
> **[5:30](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=330)** Those data fields have different values for the car and motorcycle objects we created.
>
> **[5:35](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=335)** The car is a red Mercedes and the motorcycle is a silver Harley.
>
> **[5:39](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=339)** So the message is printed by the drive method very accordingly.
>
> **[5:43](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=343)** Now, let's say we're having so much fun riding the motorcycle, we call the drive method a few more times.
>
> **[5:51](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=351)** Oh no, the silver Harley eventually sputters out of gas.
>
> **[5:55](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=355)** The drive method decremented the gas attribute of the motorcycle object every time we called it until it eventually reached a zero.
>
> **[6:03](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=363)** This demonstrates that the gas data field maintains its value between calls to the drive method.
>
> **[6:08](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=368)** We can also see that the car and the motorcycle are separate objects with their own gas attributes.
>
> **[6:14](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=374)** We've run out of gas in the motorcycle, but the car still has some left.
>
> **[6:19](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=379)** So if we take it out for a drive, the red Mercedes still goes vroom.
>
> **[6:24](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=384)** Now, to play around with some of the accessories.
>
> **[6:27](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=387)** I could go for some rocking tunes, so let's call the radio method on my car.
>
> **[6:33](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=393)** It would also be nice to get some fresh air so let's roll down the windows on my car by calling the window method.
>
> **[6:40](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=400)** Ah, fresh air.
>
> **[6:42](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=402)** That's everything special we can do with the car.
>
> **[6:45](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=405)** Now we took the motorcycle out for drive earlier, but we forgot to put on our helmet.
>
> **[6:50](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=410)** I'll take the blame for that, shame on me.
>
> **[6:52](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=412)** So let's do that now by calling the helmet method on my mc.
>
> **[6:57](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=417)** Good, now we're nice and safe, and since part of the joy of riding motorcycles is to get lots of fresh air, let's try opening the window on my mc by calling the window method on it.
>
> **[7:09](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=429)** Uh-oh, we have a problem.
>
> **[7:11](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=431)** The motorcycle class does not have a window method because a motorcycle doesn't have any windows.
>
> **[7:17](https://www.linkedin.com/learning/programming-concepts-for-python/class-inheritance?u=76281980&t=437)** The car class and the motorcycle class both inherit from the vehicle class, so they both have the same drive method, but only the car class has radio and window methods, and only the motorcycle class has a helmet method.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), class. (6), class, (5), finally, (2), pass (1)
> **CLI Commands:** make (4), python (3)
> **Definitions:** is a  (3)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Speakers:** - when (1)

#### Overriding inherited methods
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=0)** - Nowadays, not all cars run on gasoline, some are electric.
>
> **[0:04](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=4)** Electric cars have a radio and windows, so they could inherit those methods from the car class.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=9)** An electric car also has a color and manufacturer.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=12)** This is a white Nissan, so it should inherit those data fields from the vehicle class as well.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=18)** Now, this is where I run into a bit of a problem.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=20)** The drive method for the vehicle class uses gas, but my electric car doesn't.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=25)** It uses electricity so that drive method doesn't make sense, to create an electric car subclass that inherits from the car and vehicle classes, I need to replace that gas powered drive method from the vehicle class with a specially designed eco-friendly, electric powered drive method.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=43)** Let's revisit the garage full of classy vehicles from the previous video, which defines a base class for a vehicle and two subclasses for a car and a motorcycle.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=54)** Now let's create a new class for electric cars named electric car, which will inherit from the car class.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=62)** Since electric car inherits the car class, it will have the window and radio methods from it, and since the car class inherits the vehicle class, our new electric car class will also inherit the unit and drive methods from the vehicle class.
>
> **[1:18](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=78)** However, since electric cars don't use gas, the drive method from the vehicle class which uses gas doesn't make sense, to fix that, we can create a new, more specific drive method for the electric car class, which will override and replace the inherited drive method from the vehicle class.
>
> **[1:39](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=99)** Let's copy and paste the drive method code from the vehicle class and then modify it to make sense for an electric car.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=109)** For the purpose of this example, let's pretend that our electric car has a battery with infinite power, so we don't need to worry about running out of juice.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=118)** Since our electric cars don't use any gas, we can delete the logic that checks the level of the gas tank.
>
> **[2:04](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=124)** That also means we can delete the possibility of it running out of gas because that will never happen.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=130)** Now, whenever I drive an electric car, I'm always amazed at how quiet they are.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=135)** They don't go room, they go shh.
>
> **[2:20](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=140)** Now that completes our electric car class.
>
> **[2:24](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=144)** I've already opened a terminal in the directory with the script and started Python to load everything into scope, we'll use the command from overriding begin import Star.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=156)** Now, let's use that class to create a new electric car named my_ecar, and we'll do that by calling the electric car constructor method to make a white Nissan.
>
> **[2:48](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=168)** This constructor method has the same input parameters as the car and motorcycle classes because they all inherit the same knit method from the vehicle class.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=177)** Since the electric car inherits the car class, that means we can also roll down the windows by calling the window method to get some fresh air and we can turn on the radio to get some rocking tunes.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=190)** If we use the drive method to take the electric car out for a spin, we see that it goes shh instead of vroom, and that's because the new drive method in the electric car class overrides the previous drive method, which was inherited from the vehicle class.
>
> **[3:26](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=206)** One interesting thing about the electric car class is that it has a hidden gas tank, which is inherited from the constructor method in the vehicle class.
>
> **[3:35](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=215)** We can check the gas level by accessing the gas attribute of my ecar, and we can see that even though we've driven the electric car, it still has the original amount of four gallons of gas that was given to it when it was created, even though that gas attribute is still lingering around in the electric car.
>
> **[3:52](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=232)** Since we never use it for any of the electric car methods, we don't really need to worry about it.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=237)** Now, you might be wondering why it's useful to inherit data fields and methods from other classes?
>
> **[4:03](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=243)** Why don't we just define those data fields and methods individually in every class that needs them?
>
> **[4:08](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=248)** Well, we could do that, but as our programs increase in size, it becomes more and more difficult to keep track of changes in our code.
>
> **[4:17](https://www.linkedin.com/learning/programming-concepts-for-python/overriding-inherited-methods?u=76281980&t=257)** If we had created 20 different types of vehicle classes, like a car, a motorcycle, dump truck, school bus, and so on, and then needed to make a change to the drive method in all of them, let's say we want to make them all electric powered vehicles, it's much easier to change that method in one place, the vehicle class that they all inherit from, rather than changing it individually in each class definition.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (8), let (6), class, (4), delete (2), new, (1)
> **CLI Commands:** make (6), python (1)
> **Code Identifiers:** my_ecar (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - nowadays (1)


### 4. Modules and Packages

> [↑ Back to Table of Contents](#table-of-contents)

#### Modules
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=1)** - There's a common saying that "A smart programmer is a lazy programmer," and what that means is clever programmers don't waste time rewriting routines that already exist.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=11)** There's no need to reinvent the wheel if it's already been invented for you.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=15)** Almost all programming languages come with a standard library of code for accomplishing common programming tasks, and you should learn how to use the existing libraries because it'll save you a lot of time.
>
> **[0:26](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=26)** Built-in functions we might use to write our program are organized within modules and packages, just like the tools in my garage.
>
> **[0:34](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=34)** One of my brake lights is out, and in order to fix the problem, I'm going to need the right tools for the job.
>
> **[0:39](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=39)** I keep different types of tools organized into different toolboxes.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=43)** This toolbox holds my screwdrivers, while this one holds my wrenches.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=47)** I need to perform the function of replacing my taillight, so I'll grab the modules I need (toolboxes clanging) and carry them over here by my car.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=55)** (toolboxes clanging) To use a screwdriver, I'll reach into this toolbox, (lid clanging) and I'll select the specific screwdriver that I want to use.
>
> **[1:04](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=64)** And when I need to use a wrench, I'll reach into this toolbox (lid clanging) (screws rattling) and select the specific wrench that I need from it.
>
> **[1:11](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=71)** If I'm planning to use several different wrenches as I fix my car, then it makes sense for me to do this and import the entire module by carrying the toolbox over to my car.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=80)** But if I only need to use a single wrench for this job, then importing the entire module would be overkill, and it can be cumbersome to carry the toolbox over and access it every time I want to use that same wrench.
>
> **[1:30](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=90)** For example, (wrench clanging) if I realize that I need a roll of duct tape to fix my car because duct tape fixes everything, I can come over here to this box full of tape, glue, and other assorted adhesives, and since duct tape is the only item I'll need from it, I'll just grab the roll of tape and leave the rest of items in the box.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=109)** Some languages require you to import entire modules just to use one tool.
>
> **[1:54](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=114)** Others like Python, give me the flexibility to import entire modules or just select the specific tool that I need.
>
> **[2:02](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=122)** Python doesn't have hardware tools, like wrenches or screwdrivers, but it does come with an assortment of software modules.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=130)** First, we'll need to pick a module to use.
>
> **[2:12](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=132)** You can find information about all of the standard Python modules on the docs.[python.org](https://python.org) website under the Global Module Index.
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=142)** This is a list of some of the mini modules that are available to use in Python.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=147)** One module that I use frequently is the random module which can be used to generate random numbers.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=153)** This page describes the random module and provides information about the functions and classes it includes.
>
> **[2:39](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=159)** It even gives a few basic examples of how to use the module down near the bottom of the page.
>
> **[2:45](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=165)** Since the random module is one of my personal favorites, let's use it now.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=171)** Within code spaces, I've already started a new terminal and Python session.
>
> **[2:55](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=175)** Importing an entire module into Python is as simple as typing the command, import, followed by the name of the module.
>
> **[3:03](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=183)** In this case, that's random.
>
> **[3:06](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=186)** And now, we can access and use objects from the random module in this Python session.
>
> **[3:12](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=192)** The syntax for accessing functions from within the module is to type the module name dot the name of the function.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=199)** Let's call the randint function from the random module by typing random.randint.
>
> **[3:28](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=208)** This function took two arguments, a high and low range value which I made one and 20.
>
> **[3:33](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=213)** When I ran that function, it returned a random integer within that range.
>
> **[3:38](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=218)** This time, the result was 14.
>
> **[3:40](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=220)** Since we've imported the entire random module, we'll have to reference it every time we want to use something from it.
>
> **[3:47](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=227)** If we try using the randint function without specifying that it comes from the random module, we get an error because that function name has not been directly defined within this Python session.
>
> **[4:00](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=240)** It can be cumbersome to always have to type random.randint every time we want to use that function.
>
> **[4:06](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=246)** If randint was the only function that we ever needed from the random module, then we could import just that one function with the command from random import randint.
>
> **[4:20](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=260)** This command imports just that randint function which allows us to access it directly without having to reference the random module every time.
>
> **[4:28](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=268)** So now, we can just use the command, randint 1, 20, and it works, much more convenient.
>
> **[4:38](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=278)** Now, as a personal rule of thumb, if I'm going to be using several functions or classes from a certain module, then I'll go ahead and import the entire module.
>
> **[4:48](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=288)** I only use the from module import object statement if I need one, maybe, two objects from a certain module.
>
> **[4:55](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=295)** One reason I try to limit my use of the from statement is because you have to be careful that the name of the object you're importing does not conflict and have the same name as another object in your program.
>
> **[5:07](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=307)** For example, if my program had another object it named randint, perhaps a variable I had created to store some random integer, that would cause confusion.
>
> **[5:17](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=317)** We can actually demonstrate this sort of conflict using just the random module because it has a function in it that's also called random which is used to generate random values between zero and one.
>
> **[5:29](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=329)** Since we've already imported the entire random module, we can access the random function with it with the command, random.random.
>
> **[5:40](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=340)** And that gives us a random floating point number between zero and one.
>
> **[5:44](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=344)** If we decided to import the random function using a from statement, from random import random, this statement is perfectly legit, but it creates the potential for future mess.
>
> **[6:00](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=360)** The name random, which previously pointed to the entire random module, now just points to that single random function.
>
> **[6:08](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=368)** The good news is that now we can directly use the random function that's convenient, but the bad news is that if we try to access anything else from the random module, such as the randint function, now, it will cause an error because the name random points to a function instead of the module.
>
> **[6:28](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=388)** In a small, simple program, you can probably recognize the situation before it becomes a real issue.
>
> **[6:35](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=395)** However, as your programs grow in size and stretch across multiple modules, it can become much more difficult to recognize and catch this sort of problem.
>
> **[6:44](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=404)** Python does give us a way to work around this sort of name conflict issue, and that is to assign the object you're importing a different name.
>
> **[6:52](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=412)** Let's import the random module again, but this time, we'll assign it a different name by using the keyword as, and we'll give it the name rand.
>
> **[7:04](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=424)** Now, we can reference the random module by using the name rand to access functions like randint, and we can still use the random function directly with just the basic name random.
>
> **[7:17](https://www.linkedin.com/learning/programming-concepts-for-python/modules?u=76281980&t=437)** We've side-stepped the name conflict between the random function and the random module by importing the module as a different name, It's important to pay attention when you're importing and using modules to avoid unintentionally creating name conflicts with other parts of your program.

> [!info]- Semantic Content
>
> **Code Keywords:** module (32), function (20), let (3), require (1), import, (1)
> **CLI Commands:** python (10), find (1)
> **Analogies:** for example (2), just like (1), such as (1)
> **UI Navigation:** select the (3)
> **Definitions:** is a  (2)
> **URLs:** [python.org](https://python.org) (1)
> **Documentation:** the docs (1)
> **Tools:** terminal (1)

#### Packages
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=0)** - As you're searching through the existing library of Python functions, you'll probably come across the terms module and package.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=7)** Modules and packages are both collections of Python functions and classes that you can import and use in programs.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=14)** So the two terms often get thrown around interchangeably, but there is a difference.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=18)** A module refers to a single Python script which contains a handful of functions and classes related to the same task.
>
> **[0:26](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=26)** A package is a collection of several modules which are also related to the same type of task.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=31)** You can think of each of these toolboxes as modules containing different types of tools, wrenches, screwdrivers, tapes and glue, et cetera.
>
> **[0:39](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=39)** This entire shelf represents a package because it's a collection of modules which all serve a similar purpose, fixing things in my garage.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=47)** Similarly, you can think of each cabinet in my kitchen as a module because they each contain different utensils for different purposes.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=55)** I keep my mixing bowls down here, my cutting boards in there, and my casserole dishes down below.
>
> **[1:00](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=60)** As a whole, this row of cabinets is a package that serves the common purpose of cooking delicious meals.
>
> **[1:06](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=66)** The way we use packages in Python is similar to the way we use modules, but there are slight differences due to the additional layer of hierarchy.
>
> **[1:15](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=75)** - If you go to the Python module index at docs.[python.org](https://python.org) and scroll through it, you'll notice that several of the entries have little plus signs next to them which allow you to expand their contents.
>
> **[1:27](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=87)** These are packages that each contain one or more modules.
>
> **[1:32](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=92)** Now, I'm going to scroll down near the bottom of this page and select the package named urllib.
>
> **[1:38](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=98)** As this description says, urllib is a package that collects several modules for working with URLs.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=105)** And below the description, you can see four modules that belong to this package.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=109)** If you click on the link for any of the modules, such as request, it'll take you to the documentation page for that particular module.
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=119)** Importing modules that exist within packages works the same way as importing standalone modules, except that you have to deal with an additional layer of hierarchy.
>
> **[2:09](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=129)** For example, to import the request module from the urllib package, we can use the command import urllib.request.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=143)** That imports the request module so now we can use functions from it, but we'll have to provide the full path, which includes the urllib package.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=153)** For example, to use the urlopen function, we would type urllib.request.urlopen and then give it the URL we want to access.
>
> **[2:46](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=166)** Let's try accessing [google.com](https://google.com).
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=170)** That function accesses [google.com](https://google.com) and returns an HTTPResponse object that contains the information it retrieved.
>
> **[2:58](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=178)** This system for using packages works just like using modules, because in Python packages are actually just a special type of module.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=187)** That means we can use the same tricks like importing objects as different names.
>
> **[3:12](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=192)** The thing that makes a Python package different from a regular module is that it has an additional special path attribute that points to the folder for the package which contains its modules.
>
> **[3:23](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=203)** For example, we can see the path for the urllib package by accessing the path attribute, which is the word path with two underscores on each side.
>
> **[3:33](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=213)** That reveals the path to the urllib package within this code space environment.
>
> **[3:38](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=218)** Now I'll use the exit function to close out this Python session.
>
> **[3:45](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=225)** Then within this Linux environment, I'll use the cd command to change my working directory to where urllib is located.
>
> **[3:54](https://www.linkedin.com/learning/programming-concepts-for-python/packages?u=76281980&t=234)** Now that this terminal is working in that directory, if we use the ls command to list all of the files within that directory, we see a bunch of .py files, which are the various modules that make up the urllib package.

> [!info]- Semantic Content
>
> **Code Keywords:** module (9), function (3), let (1)
> **CLI Commands:** python (9), cd (1), ls (1), make (1)
> **Analogies:** for example (3), similar to (1), such as (1), just like (1)
> **Definitions:** is a  (4), refers to (1)
> **UI Navigation:** go to (1), scroll down (1), select the (1), click on (1)
> **URLs:** [google.com](https://google.com) (2), [python.org](https://python.org) (1)
> **Speakers:** - as (1), - if (1)
> **Env Vars:** url (1)


### 5. Lists and Tuples

> [↑ Back to Table of Contents](#table-of-contents)

#### Lists
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=0)** - Lists and tuples are two data structures that you can use to store a collection of objects in a specific order.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=7)** You can visualize a list as a row of objects sitting in a line.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=11)** Every object in the list is indexed by a number, and in the world of programming, numbering starts with zero for the first item, one for the next item, and so on down the line.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=20)** You can use these indices to insert, modify, and remove individual items from within the list.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=28)** - Hey, you're back from the store.
>
> **[0:29](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=29)** - Yep, and when I was there parking my car, I had a moment of brilliance.
>
> **[0:33](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=33)** I figured out how I can explain lists.
>
> **[0:36](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=36)** - What do lists and cars have to do with one another?
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=38)** - Olivia, that's a really good question.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=41)** Let me tell you a story.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=43)** In a lot of ways, you can think of a list of objects like a row of parked cars.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=47)** The cars are in order starting with the first car on the end, which is at index number zero.
>
> **[0:52](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=52)** When I arrived at the store today, I decided to append my car to the list by parking at the end of the row.
>
> **[0:58](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=58)** To remember where I had parked, I counted down the list of cars and determined that my car was at the fifth spot, which was index number four.
>
> **[1:05](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=65)** So I remembered that number and headed into the store.
>
> **[1:08](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=68)** While I was inside the store shopping, other customers who came to the store also parked their car inside the list.
>
> **[1:14](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=74)** Sometimes when a new customer arrived, they would replace another car in the list because someone else was leaving.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=80)** When a new car replaces another car at a specific index, it doesn't affect anyone else in the list.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=86)** The list is just swapping one car for another.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=88)** Similarly, some other customers who arrived were polite and appended their car to the list, just like I did by parking at the end of the row.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=96)** When somebody does that, their car takes on the next index in the list and nobody else is bothered.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=101)** - That makes sense.
>
> **[1:42](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=102)** People are just coming and going to their cars.
>
> **[1:44](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=104)** - Exactly.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=105)** As long as new cars were either replacing other cars in the list or pinning themselves to the end of the list, my car stayed at index number four, but a problem occurred when somebody showed up and decided that they needed to park at the front of the list.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=118)** When that person inserted their car into the first position in the list at index zero, it changed the index of all the cars behind that position because it shifted all of them down in the list.
>
> **[2:09](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=129)** This means that my car was no longer at index four where I'd left it.
>
> **[2:12](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=132)** When I came out of the store and looked for it there, I found somebody else's car.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=137)** - So how did you find your car?
>
> **[2:19](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=139)** - Well, my car could be anywhere in the list, so I just had to look for it until I found it.
>
> **[2:24](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=144)** I started my search at the beginning of the list and then I checked each car in order until I eventually found my car.
>
> **[2:30](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=150)** If I had been parked near the front of the list, it would've been a pretty quick search.
>
> **[2:35](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=155)** Unfortunately, I was parked closer to the end of the list, which means I had to search through a lot of cars until I found mine, and that took a long time.
>
> **[2:42](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=162)** I also felt kind of bad when I left because I removed my car from the list, and that meant everybody parked behind me got shifted up and had their index changed again.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=171)** - Well, I'm glad you eventually found your car.
>
> **[2:53](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=173)** - Me too.
>
> **[2:54](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=174)** You shouldn't expect an object to stay at the same position within a list if you're inserting and removing other objects because that can shift things around.
>
> **[3:02](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=182)** - [Instructor] For this demonstration, we'll just be entering commands directly into this interactive Python shell that I have opened in Code Spaces.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=190)** One way to create a list in Python is to enclose a sequence of objects in square brackets with the objects separated by commas as shown here.
>
> **[3:18](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=198)** This line of code will create a new list object named Row, which contains four strings representing the cars that were parked at the store when Baron arrived.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=207)** I'll press enter to send that command to the interpreter.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=210)** When Baron arrived at the store earlier, he parked his car at the end of the list.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=214)** We can attach an item to the end of a list by using the append method.
>
> **[3:38](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=218)** So let's use that to append his Mercedes to the row of cars.
>
> **[3:42](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=222)** Now if I type Row, the Python shell will print out the contents of that list and we can see that the Mercedes has been appended to the end.
>
> **[3:51](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=231)** Baron's car is currently located at the fifth position in the list, which corresponds to the index number four.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=237)** We can access the item at that index in the list using square brackets like this.
>
> **[4:02](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=242)** If we want to replace an item in the list, we can do so by assigning the new object to a specific index location using the equal sign.
>
> **[4:10](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=250)** While Baron was in the store, some of the customers left the store and new customers took their parking spaces.
>
> **[4:16](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=256)** Let's replace the BMW that took index two with the Jeep.
>
> **[4:19](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=259)** If we view the contents of the row of cars again, we can see that the Jeep has replaced the BMW, which used to be at index two.
>
> **[4:27](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=267)** All the other cars are still at their original positions in the list.
>
> **[4:31](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=271)** According to Baron's story, some of the other customers who showed up parked at the end of the row, so let's park another car at the end of the list using the append method.
>
> **[4:39](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=279)** This time, we'll make it a Honda.
>
> **[4:41](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=281)** We check the list to see that it's at the end and we can check what is at index four to see that Baron's Mercedes is still there where he originally parked it.
>
> **[4:50](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=290)** Appending objects to the end of a list does not affect the index of any of the other objects that are already in the list.
>
> **[4:57](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=297)** Now, if we want to represent the person who showed up and parked their car at the front of the list, we can do so by using the insert method.
>
> **[5:04](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=304)** The first argument for the insert method is the index for where we want to insert the new object.
>
> **[5:09](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=309)** Since we want to put a car at the front of the list, we'll make the index value zero and I'll make the car a Kia.
>
> **[5:17](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=317)** If we check the contents of the list again, we can see that the Kia took its place at the front of the list and all the other cars were shifted down.
>
> **[5:25](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=325)** That means if I look for Baron's Car at index four where he left it, uh oh, that's not the Mercedes Baron came to the store in.
>
> **[5:32](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=332)** That's a Lexus parked in that spot.
>
> **[5:35](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=335)** I know Baron, and he's not the kind of guy who steals a Lexus from the supermarket.
>
> **[5:40](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=340)** We should figure out where his Mercedes went.
>
> **[5:42](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=342)** We can search a list to find the index of a specific object by using the index method.
>
> **[5:47](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=347)** To do that, let's pass this car, which is the string Mercedes to the index method.
>
> **[5:52](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=352)** The index method searches through the list until it comes across the Mercedes object, and then it returns the index where it was found.
>
> **[5:59](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=359)** In this case, Baron's Mercedes was parked at index number five.
>
> **[6:04](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=364)** The index method starts it's search at the beginning of the list and works its way down the row just like what Baron did when he was searching for his car at the store earlier.
>
> **[6:13](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=373)** So if the object Python is searching for is near the front of the list, it'll find it relatively quickly, but if the object is located near the end of a really long list, then that search process could take a lot longer.
>
> **[6:26](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=386)** Also, it's important to note that the index method only returns the first match that it finds because it stops as soon as it finds the object that it's looking for.
>
> **[6:35](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=395)** So if there were several identical Mercedes objects parked in this row, we would only receive the index of the first one that the index method finds.
>
> **[6:44](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=404)** Now that we know Baron's car is at index number five, we can take it out of the list by using the POP method.
>
> **[6:50](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=410)** POP will remove the object at the specified index.
>
> **[6:53](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=413)** So let's give it the index of five and we can see that it returns Baron's Mercedes, which was at the fifth index.
>
> **[6:59](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=419)** To show that the Mercedes is gone, let's view the contents of the list.
>
> **[7:04](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=424)** Now, there's one other list method that I want to show you, and that's the remove method.
>
> **[7:09](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=429)** Rather than using index to find the index of Baron's car and then using POP to take it out of the list, we could have just used the remove method, which basically combines those two actions into one routine.
>
> **[7:20](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=440)** So let's try using the remove method to get rid of the Lexus.
>
> **[7:25](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=445)** Unlike the POP method, when we use remove, it does not return the object that was removed from the list.
>
> **[7:31](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=451)** That makes sense because we told it exactly which object we wanted to remove, so we already know what it's going to take out.
>
> **[7:38](https://www.linkedin.com/learning/programming-concepts-for-python/lists?u=76281980&t=458)** Now, if I display the contents of the list one final time, we can see that the Lexus is no longer there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1), pass (1), case, (1), for. (1)
> **Speakers:** - well (2), - lists (1), - hey (1), - yep (1), - what (1)
> **CLI Commands:** find (4), python (4), make (3)
> **Env Vars:** pop (4), bmw (2)
> **Analogies:** just like (2)
> **Definitions:** means that (1)
> **Warnings:** note that (1)

#### Multidimensional lists
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=0)** - Basic lists are fairly easy to understand because they're just a simple sequence of items.
>
> **[0:05](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=5)** However, things can get a bit more complicated when we embed lists inside of other lists to create two-dimensional, or even three-dimensional lists, which can be a bit harder to visualize.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=15)** That's one of the reasons I like to think of objects in a list as cars in a parking lot.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=20)** To index my car in a two-dimensional parking lot, I need to know two pieces of information.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=25)** First, I need to know which row I'm parked on, and then I need to know at which spot along that row I parked.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=31)** The same concept can be extended to three-dimensional lists of lists of lists, and that's like a multi-story parking garage.
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=38)** To index my car in there, I need to know three things.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=41)** First, which floor I parked on.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=43)** Next I need to know which row on that floor I parked.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=46)** And finally, which spot along that row on that floor I'm parked in.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=50)** Now, my analogy has to end here because a four-dimensional parking lot doesn't exist in real life, but software lists don't have to stop at just three dimensions.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=59)** You can embed lists inside of lists inside of lists inside of lists, inside of lists, until your heart's content or your computer runs out of memory.
>
> **[1:06](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=66)** And however many layers deep you embed lists, that's how many numbers you'll need to index each object in that structure.
>
> **[1:13](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=73)** Searching for an object in a multidimensional list is a bit more work.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=77)** Finding an object in a multidimensional list is like trying to find your car in a parking structure when somebody else parked it.
>
> **[1:23](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=83)** Hard.
>
> **[1:24](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=84)** Some languages have fine methods to search for an object within a list structure, but in the background it's still systematically searching through every spot in every row on every floor in the list until it finds the correct object.
>
> **[1:35](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=95)** If you've ever lost your car in a parking lot, you know how much of a pain that can be.
>
> **[1:40](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=100)** If the parking lot is small, it's not a big deal.
>
> **[1:43](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=103)** But in a large lot, I can easily waste precious resources searching for my car.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=108)** In this example script, to represent a multi-story parking lot, at line four, we've defined a two dimensional list of lists containing car names.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=118)** This is your standard surface parking lot.
>
> **[2:01](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=121)** The outermost list contains three other lists, which each represent a row of parked cars.
>
> **[2:07](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=127)** We've formatted it on separate lines like this so it's easy to see each of the rows individually.
>
> **[2:13](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=133)** Below that, at line nine, we've also defined a three-dimensional list of lists of lists, which represents a multi-story parking garage.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=143)** Lines nine to 11 are the cars on floor zero.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=147)** Lines 12 to 13 are the cars on floor one.
>
> **[2:31](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=151)** And lines 14 to 16 are the cars on floor two.
>
> **[2:35](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=155)** Notice that the various lists and the structure can have different numbers of elements.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=160)** We have individual rows, which have anywhere from three cars down to no cars, which is an empty list.
>
> **[2:47](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=167)** The list of lists even have different numbers of elements.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=171)** For example, floors zero and two each have three rows of cars, whereas floor number one only has two rows of cars.
>
> **[3:00](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=180)** Now, I have a terminal open in the same directory as that script, and I've already started Python and used an import statement to load all of those lists into Scope.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=190)** If I type lot_2d and press Enter, the interactive shell prints out the contents of the two-dimensional lot.
>
> **[3:18](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=198)** When it's formatted like this, it's easy to see that it is a list of lists with three individual lists of cars nested inside of a larger list.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=207)** If we index this list with a single value, let's say 2, Python will return the element at index number 2 from the outermost list, which is the sub list containing the Honda, Kia and Mazda.
>
> **[3:42](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=222)** So by providing only a single index value to the two-dimensional list, we are selecting an entire row in the parking lot.
>
> **[3:50](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=230)** To index an individual car from this parking lot, we'll need to know which row we're parked on, and then secondly, we'll need to know which spot on the row we parked in.
>
> **[3:59](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=239)** Let's use the same command as before to retrieve the list of cars at row number two, and then use the square brackets again on that row to access the car at position number one.
>
> **[4:12](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=252)** So that line of code indexes out the car at spot one along row two, which is the Kia.
>
> **[4:19](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=259)** The same concept applies to the three-dimensional lists of lists of lists as well.
>
> **[4:24](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=264)** If we give the multi-story parking garage a single index value, let's say zero, it will return the two-dimensional lists of lists with all of the cars on that floor.
>
> **[4:35](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=275)** So those are the cars on floor zero.
>
> **[4:38](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=278)** If we give it a second index value of two, we get back the cars in row two of floor zero.
>
> **[4:45](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=285)** And finally, if we give it three index values, zero, two, and one, we'll get back the single car, which is parked on floor zero, row two, spot number one, and that happens to also be a Kia.
>
> **[5:02](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=302)** You may recognize the pattern here that as we add more index values, we're narrowing down what we're indexing as read from left to right.
>
> **[5:11](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=311)** Now, let's say we want to go through all of the cars in this multi-story garage, access each of them individually, and perform some sort of operation.
>
> **[5:20](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=320)** Well, a common way to iterate through list items in Python is to use a for loop.
>
> **[5:25](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=325)** We'll cover loops in more detail later in this course, but for now, I'll create a loop by typing for car in lot_3D: Enter, two spaces, print(car),
>
> **[5:42](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=342)** and I'll press Enter twice to execute that loop.
>
> **[5:45](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=345)** Oh no, that's not printing out individual cars.
>
> **[5:49](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=349)** What it's done is iterated through the outermost layer of that nested list so that in each loop iteration, the object I get for car is actually the list of lists representing each floor.
>
> **[6:00](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=360)** So instead of getting back individual cars, we've gotten back three two-dimensional lists, and that's not what we wanted.
>
> **[6:08](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=368)** So how can we go through and access each of the individual cars within this parking lot?
>
> **[6:13](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=373)** Well, since we have lists nested inside of other lists, one way we can unwind that is by using for loops nested inside of other for loops.
>
> **[6:23](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=383)** Let's try that now.
>
> **[6:25](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=385)** As we just saw, the first for loop will give us back each floor in the multi-story parking garage, so we'll type for floor in lot_3D.
>
> **[6:36](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=396)** Next we'll want to iterate through each of the rows on that floor, so we'll create another four loop inside of that that says for row in floor.
>
> **[6:47](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=407)** And finally, we'll go through and access each car in that row.
>
> **[6:52](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=412)** For car in row.
>
> **[6:57](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=417)** And then we'll print out each car like before.
>
> **[7:00](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=420)** So what this is doing is taking that three-dimensional parking garage, it's breaking it down and giving us back three two-dimensional lists, each one representing a floor.
>
> **[7:12](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=432)** We're then going to operate on each of those floors and break those down into their component rows, and then operate on each of those rows and break them down into their component cars.
>
> **[7:22](https://www.linkedin.com/learning/programming-concepts-for-python/multidimensional-lists?u=76281980&t=442)** Now I'll hit Enter twice to run that code, and as we can see, it's gone through and used the print function on each individual car in the three-dimensional list.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (3), this, (1), function (1)
> **CLI Commands:** python (3), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - basic (1)

#### Tuples
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=0)** - Lists can easily be changed by adding, removing, or modifying objects.
>
> **[0:05](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=5)** There is another data type called the tuple, which is similar to a list, except for one key difference.
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=10)** A tuple is immutable, which means it cannot be changed.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=14)** Just like a list, a tuple contains a sequence of objects in order, but once you've created a tuple, you can't change anything about it.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=20)** So why would you want to use this tuple thing, which is basically just a more restrictive version of a list?
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=27)** The short answer is simplicity.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=28)** If I need to store or pass some nugget of information that's never going to change, then a tuple is a handy container to do that.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=35)** For example, when I was driving to the store earlier, I used the GPS function on my cell phone to help me navigate.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=41)** When I use the GPS to find out where I am, it returns the answer as two values, a latitude and a longitude.
>
> **[0:48](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=48)** Those two values always go together in that order, so it makes sense for the GPS function to return them to me as a tuple.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=55)** There's no reason I would need to change those latitude and longitude values later, because they represent my current location, as reported by the GPS.
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=63)** If I drive somewhere else and ask the GPS for my location again, it'll give me a new tuple corresponding to my new location.
>
> **[1:11](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=71)** The syntax for creating a tuple in Python is very similar to the way we create a list, except that instead of using square brackets, we enclose the items in curved parentheses.
>
> **[1:22](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=82)** Let's create a new tuple in this Python session named my_tuple, and we'll give it a mix of letters and numbers.
>
> **[1:30](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=90)** Now, if we look at the contents of my_tuple, we see that the items maintain their relative order, just like in a list.
>
> **[1:38](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=98)** And just like with a list, we can index individual elements within a tuple to read their value.
>
> **[1:44](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=104)** If we access the element at index number two, which is the third position in my tuple, it returns a string object with the letter C.
>
> **[1:55](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=115)** So far, the tuple is working just like a list.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=118)** However, if we try to modify that letter at index two with another letter, let's try to make it a D, Python throws an error telling us that the tuple object does not support item assignment.
>
> **[2:11](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=131)** This demonstrates that tuples are immutable.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=135)** Once a tuple has been created, it shall forever stay that way, so we cannot modify or replace items within a tuple.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=143)** That also means when using tuples, we don't have access to methods that insert or remove objects, as we do when working with lists.
>
> **[2:31](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=151)** Tuples are commonly used when a function or method needs to return multiple objects.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/tuples?u=76281980&t=156)** You can package all of those various objects into a single tuple, then return that tuple, and the receiver can break the tuple apart to access whatever information they need from it.

> [!info]- Semantic Content
>
> **Analogies:** just like (4), similar to (2), for example (1)
> **Code Keywords:** function (3), let (2), pass (1)
> **CLI Commands:** python (3), find (1), make (1)
> **Env Vars:** gps (5)
> **Code Identifiers:** my_tuple (2)
> **Definitions:** is a  (1)
> **Speakers:** - lists (1)


### 6. Queues and Stacks

> [↑ Back to Table of Contents](#table-of-contents)

#### Queues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=0)** - Queues and stacks are two data structures which enable you to store and retrieve objects based on the order that they're put into the queue or stack.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=8)** Queues operate on a principle called first in, first out, or FIFO.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=13)** The first item to be stored in a queue will be the first item that's removed.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=17)** That means when you retrieve an item from a queue, you'll always get the item that's been in queue the longest.
>
> **[0:22](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=22)** A stack operates on a related principle called LIFO, which stands for last in, first out.
>
> **[0:29](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=29)** That means the item which was most recently placed onto the stack will be the next one that's removed.
>
> **[0:34](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=34)** Queues and stacks are useful in different situations.
>
> **[0:37](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=37)** Hey, do you mind helping me put away some groceries?
>
> **[0:40](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=40)** - Sure, no problem. - Cool.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=42)** I'll make trips out to the car and bring them in the house, and if you can stay here and put 'em away, that'll work great.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=46)** - Sounds good.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=47)** - These grocery bags are objects that I'm placing into a queue.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=50)** I'll place the first bag closest to Olivia.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=54)** The next bag goes after that one, and so on down the line.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=59)** As I retrieve more bags from my car, I'll add them to the back of the queue.
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=63)** This means the bags near the front of the queue have been waiting in line longer than the bags near the back of the queue.
>
> **[1:08](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=68)** I'm constantly adding bags to the queue as I retrieve them from the car, and Olivia's on the other end of the queue processing those bags by putting their contents away.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=76)** - When I'm ready to process a bag, I'll take a look at the queue to see whether or not it's empty, and if there's still groceries weighing to be put away, they'll grab the next bag in line and begin processing it.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=86)** - What Olivia and I have created here is commonly known as a producer-consumer architecture.
>
> **[1:31](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=91)** I'm acting as the producer by continuously generating data that needs to be processed, these grocery bags.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=96)** - And then I consume these bags and process them by putting them away.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=101)** It's important that I'm able to consume these bags as fast or faster than Barron is able to add them to the queue.
>
> **[1:47](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=107)** If Barron is able to process the bags faster than I can consume them, then we're going to run out of room in the queue, and that's a problem.
>
> **[1:55](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=115)** Working steadily, it takes me about 30 seconds to put away each bag of groceries.
>
> **[2:01](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=121)** The rate at which Barron is able to bring in bags to add to the queue, on the other hand, is not as steady.
>
> **[2:06](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=126)** For each trip Barron makes to the car, it could be several minutes before he comes back with another bag of groceries to add to the queue.
>
> **[2:13](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=133)** - And then I show up with four bags all at once.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=137)** Fortunately, the queue will act as a buffer in this situation.
>
> **[2:20](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=140)** If I show up with several bags all at once, then the queue will store them in order until Olivia's ready to process each one.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=147)** As long as Olivia can process the bags as fast as the average rate that I bring them to the queue, then all of the groceries will get put away eventually.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=156)** - [Olivia] Queues are not a fundamental Python data type, like integer, strings, lists, or tools.
>
> **[2:41](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=161)** So to create a queue, the first thing we'll need to do is import the standard module named queue into the Python session.
>
> **[2:49](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=169)** Next, let's create a new queue object named q by accessing the queue module and using the queue constructor method.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=177)** Notice that the constructor method to create a new queue starts with a capital Q, whereas the module name is all lowercase.
>
> **[3:05](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=185)** When we create a new queue, it starts out empty.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=187)** We can see that by calling the empty method on the queue object.
>
> **[3:12](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=192)** This returns True, which means the queue is empty.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=195)** We can use the put method to add items to the queue.
>
> **[3:18](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=198)** Let's place a bag of groceries into the queue with the put method and call it bag1 to keep track of it.
>
> **[3:26](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=206)** Now that we have a bag in the queue, if we call the empty method again, it returns False, because the queue is no longer empty.
>
> **[3:33](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=213)** Let's add a few more bags to the queue.
>
> **[3:35](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=215)** We'll call the next one bag2, and the one after that will be bag3.
>
> **[3:41](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=221)** Now, the queue has three bags in it.
>
> **[3:43](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=223)** To retrieve a bag from the queue so we can process it and put away the groceries, we'll use the get method.
>
> **[3:49](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=229)** Calling the get method returned bag number one, which makes sense, because the queue is a first in first out data structure.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=237)** So the first object that we put into it, which was bag number one, will be the first object that we get out.
>
> **[4:03](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=243)** So if we use the get method again, it returns bag number two, and if we call it a third time, we get bag number three.
>
> **[4:12](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=252)** At this point, all three bags we put into the queue have been retrieved, which means the queue should be empty.
>
> **[4:17](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=257)** So if we tried to get another object from the empty queue, hmm, uh-uh, that froze Python.
>
> **[4:24](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=264)** We didn't get another set of angle brackets to enter another command in the shell, which means Python is still busy processing.
>
> **[4:32](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=272)** By default the get method for queues is a blocking method.
>
> **[4:35](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=275)** That means if we call the get method on a queue that's empty, the program will wait until there's something to retrieve before returning from the get method.
>
> **[4:44](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=284)** This behavior works well in programs with multiple threads or processes, which use a queue to share information between those pieces.
>
> **[4:51](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=291)** The threads or processes will be working simultaneously, just like how Barron and I were in the kitchen.
>
> **[4:57](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=297)** If one process is producing data, like Barron was in the earlier scenario by getting bags from the car, and another's consuming the data, like I was putting the groceries away, then it makes sense for the consumer process to wait when the queue is empty.
>
> **[5:10](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=310)** If I had finished putting away all of the groceries that were in the queue before Barron had finished emptying the car, then I would wait in the kitchen until Barron returned from the garage to put more bags into the queue.
>
> **[5:21](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=321)** Unfortunately, in this program, we haven't created a background thread or process to put things into the queue, which means our program will be stuck here waiting forever.
>
> **[5:31](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=331)** This is something to be careful about when working with queues.
>
> **[5:34](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=334)** Avoid writing programs such that your program could potentially get stuck waiting for objects to appear in an empty queue.
>
> **[5:40](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=340)** Fortunately, Python's get method has some optional parameters which allow us to specify if and how it waits.
>
> **[5:47](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=347)** By default, the get method is configured to block execution until there's an object in the queue it's targeting.
>
> **[5:54](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=354)** But if we call the get method on an empty queue and assign False the optional argument named block, then the get method will raise an exception, letting the caller know that the queue is empty rather than blocking execution.
>
> **[6:06](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=366)** This is one way to avoid having the get method hang on an empty queue.
>
> **[6:10](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=370)** However, the program will need additional instructions to handle the exception appropriately, or also it will crash a program.
>
> **[6:17](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=377)** We'll look at how to properly handle runtime errors later in this course.
>
> **[6:20](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=380)** For now, to get out of the current mess, I'll press Control-C to interrupt the frozen Python interpreter.
>
> **[6:26](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=386)** Now, when we created the queue earlier, we did not specify it to length, so by default, Python created a queue that could be infinitely long.
>
> **[6:34](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=394)** That means we could continue to put items into that queue forever or until the computer runs out of memory.
>
> **[6:41](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=401)** When creating a queue, we can pass in an optional argument named maxsize, which is an integer that sets an upper bound limit on the number of items that can be placed in the queue.
>
> **[6:51](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=411)** Let's do that now and create a new queue that can hold up to two items.
>
> **[6:58](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=418)** This new queue will start out empty, and we can verify that with the empty method.
>
> **[7:03](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=423)** Now, let's put a bag into the queue that we'll call bag1.
>
> **[7:08](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=428)** Because this queue was created to be a finite length up to two objects, we can check whether or not it's full by using the appropriately named full method.
>
> **[7:18](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=438)** That returned False because there is only one bag in this queue that's built for two, but if we add a second bag to the queue and call the full method again, this time it return True, because the queue is full.
>
> **[7:33](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=453)** If we try using the put method again on this full queue, then by default it will block execution and wait until the queue has space available.
>
> **[7:42](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=462)** To prevent that from freezing our program like earlier, we can pass False to the optional argument named block to throw an error rather than get stuck waiting for space, similar to what we can do with the get method.
>
> **[7:54](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=474)** There's also a special version of the put method called put_nowait, which has the same effect as using the regular put method and passing it the False parameter to prevent it from blocking.
>
> **[8:06](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=486)** Let's use that now to try to add a third bag to the full queue.
>
> **[8:13](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=493)** We can see that rather than blocking the execution, that command through an error letting us know that the queue was full.
>
> **[8:20](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=500)** As you might have guessed, there's a related variation of the get method named get_nowait.
>
> **[8:26](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=506)** When using queues, it's important to think about whether or not situations could arise in which your program is trying to get objects from an empty queue or trying to put objects into a full queue.
>
> **[8:37](https://www.linkedin.com/learning/programming-concepts-for-python/queues?u=76281980&t=517)** Be sure to configure your put and get method to block or not block accordingly to prevent your program from getting stuck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (3), default, (2), pass (2), type, (1)
> **Speakers:** - and (2), - queues (1), - sure (1), - sounds (1), - these (1)
> **CLI Commands:** python (7), make (1)
> **Definitions:** is a  (2), stands for (1), is an  (1)
> **Code Identifiers:** put_nowait (1), get_nowait (1)
> **Env Vars:** fifo (1), lifo (1)
> **Analogies:** just like (1), similar to (1)
> **Cross-References:** later in (1)

#### Stacks
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=0)** - While I was outside, I grabbed the mail, and unfortunately it looks like today's nothing but bills and junk mail.
>
> **[0:06](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=6)** As I sort through my mail, when I come across a bill, I'll put it on a stack to be processed.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=11)** And as for the junk mail, I'll just toss that.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=14)** So this first item is a bill.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=16)** I'll place it on my stack.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=18)** The next item is also a bill, so I'll place it into the stack on top of that first one.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=24)** Junk mail, junk mail, another bill that goes on the stack, junk mail, and a bill.
>
> **[0:33](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=33)** Now, the bills in my stack are ordered from top to bottom with the most recent bill I put onto the stack at the top and the oldest bill at the bottom.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=41)** When I'm ready to begin paying these bills, I'll grab the last envelope that I put onto the stack, which is at the top, and I'll start working my way down the stack, paying my bills in the opposite order that I put them onto the stack.
>
> **[0:52](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=52)** - Hey, it looks like you dropped a bill on the way in.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=55)** - Whoops. Well, I'll just put that here on top of the stack.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=59)** Since that bill Olivia found is the newest item on the stack, it'll get processed next, after I finish with this one.
>
> **[1:05](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=65)** Of all the different concepts and data structures in computer science, I think stacks are one of the most sensibly named because they work like a stack of things in real life.
>
> **[1:15](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=75)** - [Olivia] Python does not have a built-in data type or module called stack.
>
> **[1:19](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=79)** However, we can use the list data structure to implement stack-like behavior because we can add and remove objects from the list in a last in, first out manner.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=88)** To demonstrate that, let's create a new list object and assign it a variable name stack.
>
> **[1:34](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=94)** Now, when we use a list to implement a stack, think of the front of the list or index zero as being the bottom of the stack and the back of the list or the highest index as the top of the stack.
>
> **[1:47](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=107)** We have access to all of the standard list methods, so we can add an object to the stack by using the append method, which attaches an object to the back of the list.
>
> **[1:56](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=116)** Let's use that now to add two bills to the stack.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=120)** Now, if we want to get a bill from the top of the stack to process it, we can use the pop method.
>
> **[2:05](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=125)** That removes and returns the last item in the list, which is equivalent to the top of our stack.
>
> **[2:11](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=131)** So in this case, we got back bill number two because that was the last bill added to the stack.
>
> **[2:16](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=136)** Now let's add two more bills to the stack.
>
> **[2:18](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=138)** We'll call these bills three and four.
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=142)** Then let's call the pop method again.
>
> **[2:25](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=145)** This time we got back bill number four because that was the most recent object placed on the stack.
>
> **[2:31](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=151)** If we continue calling the pop method two more times, we get back bill3 and bill1.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=160)** This makes sense because bill number one was the first bill we put into the stack, so it should be the last one out.
>
> **[2:46](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=166)** So now that the stack is empty because we paid all the bills, if we try calling pop again, it returns an error, letting us know that the stack is empty.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=177)** You might be wondering why we can use a list to implement a stack, but to create a queue in the previous video, we used a special queue module.
>
> **[3:05](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=185)** Couldn't we just use a list to implement a queue, as well, by appending items to the back of the list and retrieving them from the front?
>
> **[3:13](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=193)** Technically, yes, but there's a reason we use the special queue module to create queues, and that's efficiency.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=199)** Under the hood, the queue module is built in a way that allows for items at the front of the queue to be removed easily.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=207)** Lists, on the other hand, are structured in a way that makes it super easy to add and remove items from the back of a list, but removing items from the front of a list is not as efficient.
>
> **[3:37](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=217)** Therefore, a list is a great way to implement a stack by appending and popping objects from the back of a list, since it's a last in, first out.
>
> **[3:47](https://www.linkedin.com/learning/programming-concepts-for-python/stacks?u=76281980&t=227)** But with a queue, it's better to use the special queue module which has been optimized to efficiently handle the first in, first out transactions.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), let (4), case, (1), continue (1), super (1)
> **Speakers:** - while (1), - hey (1), - whoops (1), - [olivia] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Cross-References:** previous video (1)


### 7. Sets

> [↑ Back to Table of Contents](#table-of-contents)

#### Create and combine sets
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=0)** - If you have a collection of different objects that you want to store together and the order of those objects doesn't matter, then they can be organized into a set.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=8)** A set is a data structure to store an unordered collection of unique objects, meaning that no two objects in the set are identical.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=18)** I think I'll invite some friends over tonight for an epic evening of board games.
>
> **[0:22](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=22)** Now, to figure out who to invite.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=25)** As a modern man, I keep track of all my friends through social networks, but I keep them organized into different groups.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=31)** I have one group for my college buddies, another group for my coworkers, and also, a group for my family friends.
>
> **[0:36](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=36)** Each of these three groups of friends represents a set, which is an unordered collection of unique items, in this case, my friends.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=45)** Representing them in a set is different from a list, because there is no ranking or order to the set.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=50)** I can't tell you who my number one friend is, because they are all equally good friends within each set.
>
> **[0:56](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=56)** These three circles contain sets of my friends.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=59)** The first thing I want to do is combine these three separate sets into a single set containing all of my friends.
>
> **[1:05](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=65)** If you look closely, you'll notice that I do have some friends in common between the three sets.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=70)** I have four friends who belong in more than one group of my friend groups.
>
> **[1:13](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=73)** To combine these three sets into a single set containing all of my friends, I can use the .union() operator.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=80)** Since all of the items in a set must be unique, we lose any duplicates, so that the resulting set will only have one of every item.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=88)** This script demonstrates how to create new sets in Python by using the set() function and passing in a list of items for the set to initially contain.
>
> **[1:37](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=97)** For this example, I've created a list of strings containing the names of my friends for each group, and I pass those lists to the set() function to create the three set objects for my college, coworker, and family friends.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=111)** I already have a terminal open in the same directory as that script, I've started Python, and I used an import statement to load those three sets into scope.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=120)** If we type the name of one of these sets like college, the shell will print out all of the items in that set.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=128)** We can check the number of items in a set by using the len() or length function on that set object.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=135)** This shows that I have eight college buddies.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=137)** We can use the same function to check the number of coworkers.
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=142)** There are eight people on that set.
>
> **[2:24](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=144)** And finally, for family friends.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=147)** I also have eight of those.
>
> **[2:29](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=149)** Now, let's combine these three sets into a single set containing all of my friends.
>
> **[2:35](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=155)** To do that, we'll pick any one of the sets, let's use college.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=160)** And then call the .union() method on that first set and pass it the other two set objects as arguments, the coworker set and the family members.
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=170)** And now, we have a single set with all of my friends.
>
> **[2:54](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=174)** Let's take a look at the contents of my friends set.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=177)** It looks like everybody's here.
>
> **[2:59](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=179)** The order that the names are displayed is irrelevant, because inside the set, it's kind of like the Wild West, there's no order at all.
>
> **[3:06](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=186)** There is no hierarchy in the combined set that places my buddies in any order.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=190)** The original sets are all intermixed in the new set.
>
> **[3:14](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=194)** Now, when we check the length of this new friends set, it shows that I have 20 total friends.
>
> **[3:21](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=201)** And that makes sense, because I have four friends who belonged to two or more of the original sets.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=207)** So I started with eight friends in each of my three friend groups, which makes 24 people.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=214)** But when we combined those three sets, the .union() operator removed the duplicate names, leaving us with 20 individual unique friends in the final set.
>
> **[3:44](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=224)** Sets are a great data structure to use when you need to keep track of a collection of objects that are all unique and don't have any relevant order.
>
> **[3:52](https://www.linkedin.com/learning/programming-concepts-for-python/create-and-combine-sets?u=76281980&t=232)** In this example, we used sets to keep track of friends, but some other common uses for sets in programming would be to keep track of, say, unique words appearing in a document or to organize user accounts in a system.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), pass (2), case, (1), finally, (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** terminal (1)
> **Analogies:** kind of like (1)
> **Speakers:** - if (1)

#### Sort sets
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=0)** - Now that I've combined all of my friends into one massive set, I need to start narrowing down, who I'm going to invite over for the game night.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=7)** A good place to start narrowing down my set, would be to determine who actually lives nearby.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=12)** And since I'm making these plans kind of last minute, I should remove all of my friends who live in far away zip codes.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=18)** Here's the set representing all of the people with the same zip code as me, meaning they live nearby.
>
> **[0:23](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=23)** If I overlay the set of all my friends, you can see that some of my friends, have the same zip code as me and others don't, so they must live far away.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=31)** To get the set of just my local friends, I can use the intersection operation, which will return a set of items which exist in both the local set and the set of all my friends.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=42)** That cut out quite a few friends, but we've still got a ways to go.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=45)** Settlers of Catan is only a four player game, so I need to whittle down this to just three other people to invite over to play with me.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=54)** I see Bill just tweeted that he invited over a few friends to play Munchkin tonight.
>
> **[0:58](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=58)** Now I do enjoy a good game of Munchkin, but I've already got my heart set on Settlers of Catan.
>
> **[1:04](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=64)** I think we can safely uninvite Bill and the Munchkin crew from my game night tonight, since they've already got their own plans.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=70)** I want to remove any names from the local set of friends, who are also in the set of Bill and his Munchkin crew.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=76)** I can do that by using the difference operator.
>
> **[1:19](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=79)** If I find the difference between my set of local friends and the set of Munchkin players, I'm left with a set of local friends, minus any that are in the Munchkin set.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=88)** I'm finally down to three people, so those will be the friends I invite.
>
> **[1:32](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=92)** Now I can start calling friends to invite them over.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=96)** On second thought, games of Settlers of Catan, can get quite heated with explosive arguments and tables getting flipped, and that can lead to lifelong grudges between the players.
>
> **[1:46](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=106)** Verne and Jim are really good friends and I'd hate to lose that friendship as the result of playing a game.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=111)** Maybe it's best I invite over some other folks who I don't know as well, but who?
>
> **[1:56](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=116)** Ah, hey Olivia, can I have a list of some of your friends?
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=119)** - Here you go.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=120)** - Thank you.
>
> **[2:01](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=121)** This'll work perfectly.
>
> **[2:02](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=122)** The circle on the left is the set of friends that I plan to invite, and the circle on the right is the set of Olivia's friends.
>
> **[2:09](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=129)** Olivia and I are both friends with Verne and Jim, so they exist in both sets, but Olivia has two other friends, Amanda and Nestor that are not in the set of friends that I had planned to invite.
>
> **[2:19](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=139)** In this case, I want to remove the intersection containing Verne and Jim, leaving only the items not shared by these sets behind in one common set.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=148)** This is called taking the symmetric difference of two sets or finding the like items and removing them.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=153)** Now I have a new set of three friends, Olivia, Amanda, and Nestor.
>
> **[2:37](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=157)** This is going to be a great game.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=160)** This example script creates four Python sets that represent different groups of people.
>
> **[2:45](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=165)** The first set initialized at line four, contains all 20 of my friends.
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=170)** The next set starting at line 11, represents people who live nearby in the same zip code as me.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=177)** After that, line 17 initializes a set of people who play Munchkin, and finally, line 21 initializes a set of Olivia's friends.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=187)** I've opened a terminal in the same directory as that script, started Python and used an import statement to load those four sets into scope.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=195)** Now, to find my local friends, I'll use the intersection operator on the set of all of my friends and I'll pass it, the set of people in my zip code as the argument.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=207)** Now, local represents the set of friends who belong to both the set of all of my friends and the zip code set.
>
> **[3:35](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=215)** We can see that I have seven friends in the local area.
>
> **[3:38](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=218)** When using the intersection operator, it does not matter which set we called the method on and which of the sets we passed as the argument.
>
> **[3:45](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=225)** The result will be the same.
>
> **[3:47](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=227)** Next to determine who to invite, let's remove the friends who are also planning to play Munchkin with Bill, who calling the difference operator on the set of my local friends and then passing the set of Munchkin players as the argument.
>
> **[4:03](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=243)** Now, unlike the intersection operator, order matters with the difference operator.
>
> **[4:09](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=249)** Since we wanted to remove the Munchkin players from the set of local friends, we called the difference method on the local set and passed the munchkin set as the argument.
>
> **[4:19](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=259)** Now let's look at who that left to invite.
>
> **[4:21](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=261)** The invite set contains Verne, Olivia, and Jim.
>
> **[4:25](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=265)** If we had called the difference operator on the munchkin set and passed it local as the argument instead, that would've given us a completely different set of people.
>
> **[4:36](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=276)** Now the last thing we need to do is revise my invite set by removing any friends that it has in common with Olivia's friends, leaving just the unique names behind.
>
> **[4:46](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=286)** To do that, let's use the symmetric difference operator on the set of friends to invite and pass it Olivia's friends as the argument, oops, I need to spell Olivia's name correctly.
>
> **[5:00](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=300)** There we go.
>
> **[5:01](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=301)** That removed Jim and Verne, who were in both sets and kept Olivia, Amanda, and Nestor.
>
> **[5:09](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=309)** As the name suggests, the symmetric difference operator is symmetric, so it does not matter which of the two sets we called the method on and which set we passed as the argument.
>
> **[5:19](https://www.linkedin.com/learning/programming-concepts-for-python/sort-sets?u=76281980&t=319)** The result would be the same.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), case, (1), finally, (1)
> **CLI Commands:** find (2), python (2)
> **Speakers:** - now (1), - here (1), - thank (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)

#### Add and remove items from sets
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=0)** - Now, I think I'm finally done sorting through my friends.
>
> **[0:03](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=3)** I finalized my set, and I'm ready to start inviting people.
>
> **[0:06](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=6)** (phone ringing) Oh, excuse me for a sec.
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=10)** Hey, Vern.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=11)** What's up?
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=12)** Oh, you did?
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=15)** I'll call you back.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=17)** That was my friend Vern.
>
> **[0:19](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=19)** He heard a rumor that I'm planning a game night, and wanted to know if he and Jim could join.
>
> **[0:23](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=23)** I'd love to invite them, they are really good friends.
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=27)** Here's the set of friends that I plan to invite.
>
> **[0:29](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=29)** Let's start by checking to see if Vern is already in the set of friends to invite and unfortunately, no.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=35)** I must have taken him out of the set earlier.
>
> **[0:37](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=37)** Well, since Vern really wants to hang out, I'll be a good friend and add him back to the set of friends to invite.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=43)** But that raises a problem.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=45)** Now I have one too many people in my set of friends to invite, so I'm going to need to remove somebody.
>
> **[0:51](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=51)** - Hey, I was just chatting with Nestor online, it turns out he's in Romania this week.
>
> **[0:56](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=56)** - Well, I think it's safe to assume that Nestor won't be making it for game night.
>
> **[1:00](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=60)** So now there's room for Vern.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=61)** We've got our set back down to three people.
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=63)** This time it's final for real.
>
> **[1:05](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=65)** I'm ready to start inviting them.
>
> **[1:07](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=67)** I'll call each of the people on my set, and give them a personal invitation.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=70)** Now, I won't be calling them in any specific order, because there is no order amongst the elements of a set.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=76)** I'll just randomly draw a name for my set to call, and I'll continue doing that until I've processed all of the elements.
>
> **[1:22](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=82)** I mean, until I've called all of my friends in the set.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=86)** This example script is fairly simple.
>
> **[1:29](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=89)** All it does is create a set with the friends I originally planned to invite, which includes Nestor, Amanda and Olivia.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=96)** I've already opened a terminal in the same directory as that script.
>
> **[1:39](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=99)** Started Python and used an import statement to load that set in the scope.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=105)** The first thing I want to do is check whether or not Vern is in my set of friends to invite.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=111)** We can do that by using the in operator, which returns a Boolean value of true or false depending on whether or not the string, Vern is in the invite set.
>
> **[2:02](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=122)** That returned false, which means Vern was not in the set, so let's add him.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=128)** We can do that by calling the add method on the invite set, and passing Vern in as the argument.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=137)** Let's check the result of that operation.
>
> **[2:20](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=140)** And yes, now we can see that Vern is in the set.
>
> **[2:25](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=145)** Every item in a set must be unique.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=147)** So if we try adding an object to a set that already exists, nothing really happens.
>
> **[2:32](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=152)** Therefore, if I wanted to make extra sure someone was in the set, I can add the name to the set of friends to invite without worrying about creating a duplicate.
>
> **[2:41](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=161)** So let's make sure, I didn't forget to invite Olivia by adding her to the invite set, even though she's already in it.
>
> **[2:49](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=169)** Now, if I display the contents of the set again, we can see that re-adding Olivia didn't change anything.
>
> **[2:56](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=176)** There can only ever be one Olivia in this set.
>
> **[2:59](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=179)** She's one of a kind.
>
> **[3:00](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=180)** Now since we've added Vern to the set, it's become too big.
>
> **[3:04](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=184)** So we probably need to remove somebody.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=187)** We can remove a specific person by calling the remove method on the invite set, and passing the person to remove as the argument.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=195)** Let's remove Nestor.
>
> **[3:17](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=197)** If we print out the set again, we can see that Nestor has been removed and we're back down to three friends to invite.
>
> **[3:25](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=205)** If we try removing Nestor again, then Python will throw an error because it can't find that Nestor object within the invite set to remove.
>
> **[3:33](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=213)** So be careful not to remove items from a set that don't exist in it.
>
> **[3:39](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=219)** Now, with this invite set finalized, it's time to start inviting people.
>
> **[3:44](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=224)** We can get items from the set by using the pop method.
>
> **[3:48](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=228)** Pop selects one item from the set, removes it, and then returns it to us.
>
> **[3:53](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=233)** So each time we call the pop method, we'll get a different value.
>
> **[3:58](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=238)** The order in which we get items from the set seems random because Python is actually using hashes in the background to index and store objects in the set.
>
> **[4:07](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=247)** That enables Python to find objects in a large set very quickly, which is one of the benefits of using sets.
>
> **[4:14](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=254)** Now, after we've popped all of the items from the set, if we try to use the pop function again, it'll throw an error because now the set is empty.
>
> **[4:24](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=264)** I guess that means we've invited everyone to the game.
>
> **[4:26](https://www.linkedin.com/learning/programming-concepts-for-python/add-and-remove-items-from-sets?u=76281980&t=266)** Now to finish a few things around the house before my friends show up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), throw (2), continue (1), function (1)
> **CLI Commands:** python (4), make (2), find (2)
> **Speakers:** - now (1), - hey (1), - well (1)
> **Tools:** terminal (1)
> **Warnings:** be careful (1)


### 8. Dictionaries

> [↑ Back to Table of Contents](#table-of-contents)

#### Dictionaries
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=0)** - Before the days of the internet, when you wanted to look up the meaning of a word, you could look it up in a dictionary like this one.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=7)** This dictionary holds thousands of definitions in it, and I can find the definition I'm looking for very quickly because I can index it using the associated word.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=16)** In the programming world, dictionary is a term that's used to describe a data structure that stores a collection of key and value pairs.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=24)** You might also hear words like map, symbol table or hash table, which also accomplish the same thing.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=30)** Just like with a real-life dictionary, I can look up values quickly by using the associated keys.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=35)** Fortunately, programming dictionaries aren't limited to just storing words and definitions.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=42)** Time to invite my friends over.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=43)** Now, some people might call me old-fashioned, but I like to keep track of my friends' phone numbers in my trusty old pen and paper Rolodex.
>
> **[0:51](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=51)** My Rolodex is just like a dictionary.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=54)** Each card in my Rolodex contains a single name and the corresponding number for that person.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=59)** This name and number pair is the key and value pairs that make up each entry in the dictionary.
>
> **[1:04](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=64)** I can look up a person's phone number very quickly because all of the cards are sorted alphabetically.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=70)** If I want to look up Olivia's phone number, I don't have to search the entire Rolodex to find her card.
>
> **[1:15](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=75)** I flip straight to the O's, where I know her card will be, and I can find it right away.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=80)** A programming dictionary uses a similar concept so you can rapidly look up the value that corresponds to a given key.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=86)** But dictionary entries are not always organized alphabetically, like my Rolodex.
>
> **[1:31](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=91)** Instead, many languages use a method called hashing to store and retrieve dictionary values.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=96)** When I want to store a key-value pair in the dictionary, Python uses a hash function on the key, which is a special routine that takes the key object and maps it to a single mathematically calculated number.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=109)** That number is used as the index into a table to determine where the corresponding value should be stored.
>
> **[1:55](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=115)** Later, when you want to retrieve a value, you give the dictionary the key that you want to look up, and it uses the same hash function on the key to calculate the index, and then it retrieves the corresponding value from the table.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=128)** When I organize the entries in my Rolodex alphabetically, I'm actually using a very simple form of hashing.
>
> **[2:14](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=134)** For my hash function, I take the name of each entry, I extract the first letter of that name, and I use that single value as the index into my Rolodex.
>
> **[2:22](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=142)** Depending on the language you're working with, dictionaries might be called hashes, maps, or collections.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=148)** This example script initializes a Python dictionary to serve as our Rolodex.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=153)** In Python, we use curly braces, as shown here, to create a new dictionary.
>
> **[2:39](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=159)** Each entry in this dictionary has a key object on the left, which is the name of a person, and a corresponding value on the right, which is their phone number.
>
> **[2:48](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=168)** Python will build the dictionary by using the hash function on each of those keys to determine where to store the phone numbers.
>
> **[2:56](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=176)** Below this code, I've already opened a Python terminal in the same dictionary as that script, and used an import statement to load the dictionary into scope.
>
> **[3:05](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=185)** Now, let's use the interactive shell to quickly look up the phone number for one of my friends.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=190)** To look up Vern's phone number, we would access the Rolodex using square brackets, and pass in Vern's name as the key.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=199)** The dictionary finds the value associated with that key, so we get back Vern's phone number, 555-5309.
>
> **[3:26](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=206)** As I mentioned earlier, the dictionary uses a hash function on each key to determine its index in the dictionary.
>
> **[3:33](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=213)** If we call the Python hash function on the string Vern, we can see that it maps to this integer value.
>
> **[3:40](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=220)** When Python created the entry for Vern in our dictionary, it stored his phone number at a location corresponding to that hash value.
>
> **[3:48](https://www.linkedin.com/learning/programming-concepts-for-python/dictionaries?u=76281980&t=228)** When we later went to look up Vern's phone number, we passed in his name as the key, the dictionary used the hash function on it, and then knew right where to look to retrieve his number.

> [!info]- Semantic Content
>
> **CLI Commands:** python (7), find (3), make (1)
> **Code Keywords:** function (7), let (1), pass (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)
> **Tools:** terminal (1)
> **Speakers:** - before (1)

#### Add items to dictionaries
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=0)** - A moment ago, I wanted to call Amanda to invite her over, but when I went to look up her phone number in my Rolodex, it wasn't there.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=7)** I guess I never added it.
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=9)** Fortunately, Olivia has Amanda's phone number.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=11)** - Here you go. - Thanks.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=13)** Now I need to add a new card to my Rolodex for Amanda.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=17)** I'll take a new Rolodex card and write Amanda's name on the top, and then her phone number on the bottom.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=24)** 555-9754.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=30)** Now I'll use my simple alphabetical hashing function to figure out where to put this card.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=35)** Amanda starts with a letter A, so that's her index, and I'll store her card in the A section.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=42)** Next time I need to look up Amanda's number, I can just flip to the A's and find it right away.
>
> **[0:48](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=48)** Adding Amanda to the Python Rolodex is just as easy as adding a new card to the physical Rolodex.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=55)** To demonstrate that we'll be using the same Python Rolodex as before, which I've already loaded into a new Python session using an import statement in the terminal below.
>
> **[1:05](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=65)** Now, Amanda is not currently in this dictionary, so if we try to look up Amanda's phone number in the Rolodex, Python will throw a KeyError because it cannot find a key for Amanda in the dictionary.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=80)** So we need to add her to this Rolodex.
>
> **[1:24](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=84)** To do that, we can use the same command as before but add an equal sign afterwards to assign her phone number as the value corresponding to the key Amanda.
>
> **[1:34](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=94)** Now, if we try to access the Rolodex again to get Amanda's phone number, the Rolodex finds it right away.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=101)** 5559754.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=105)** Next time then. Okay, bye.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=108)** Unfortunately, Amanda can't make it to the game night, but she told me about another friend of hers named David who loves board games and might want to join us.
>
> **[1:56](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=116)** I don't know this guy, but she gave me his number to give him a call.
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=119)** First, I should add him to my Rolodex.
>
> **[2:01](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=121)** Just like before, I'll grab a blank card and write his name at the top, David, and then put his number below that.
>
> **[2:09](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=129)** 555-0902.
>
> **[2:14](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=134)** And then I'll add it to the Rolodex.
>
> **[2:16](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=136)** David belongs in the D section, so I'll go there and, uh-oh, there's already a card for a David in the Rolodex.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=143)** But these are different David's, they have different phone numbers.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=147)** Unfortunately, I can only have one entry per name in my Rolodex.
>
> **[2:31](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=151)** If I allow my Rolodex to have multiple cards with the identical name David, then that would cause ambiguity later when I try to look up his phone number.
>
> **[2:38](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=158)** There are just too many Davids in my life.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=160)** To add this new card to the Rolodex, I'm going to have to overwrite and remove the card for the previous David.
>
> **[2:47](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=167)** Looking back at our Python Rolodex from a moment ago, since there's already a key for my friend David at line seven, if we try to access the entry for David, it returns his phone number, 5558331.
>
> **[3:03](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=183)** Now, to add Amanda's friend David to the dictionary, we'll use the name David as the key and assign his phone number the value 5550902.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=195)** Now, when we try to look up David's number again, we only get one value back.
>
> **[3:21](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=201)** The phone number that corresponds to Amanda's friend David.
>
> **[3:24](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=204)** We've overwritten and lost the original value for my friend David's phone number.
>
> **[3:31](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=211)** Dictionaries are similar to sets in that they do not allow duplicate keys.
>
> **[3:36](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=216)** Fortunately, the values in a dictionary can be more complex than just single numbers.
>
> **[3:41](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=221)** We can store pretty much any type of object that we want to as a value.
>
> **[3:46](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=226)** So if we have two different phone numbers that we want to store under the exact same key, instead of assigning a single phone number to the key David, we can create a tuple with both phone numbers.
>
> **[4:01](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=241)** Now, when we try to look up David's phone number, we get back the tuple with both phone numbers.
>
> **[4:08](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=248)** Being able to store tuples and other data types as the dictionary values is useful because we can pack lots of information into that entry for David.
>
> **[4:17](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=257)** If we wanted to, we can make the Rolodex really fancy by storing a data structure that contains each person's phone number, address, email, birthday, and so on.
>
> **[4:27](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=267)** Each of the values within a dictionary can itself be another dictionary.
>
> **[4:31](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=271)** The possibilities are practically endless.
>
> **[4:35](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=275)** That said, what we've done here by just packing two phone numbers into a tuple is not really a good solution for the Rolodex because we don't know which number belongs to which David.
>
> **[4:47](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=287)** So let's reset the value back to the original David's phone number.
>
> **[4:53](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=293)** What we need now is something to distinguish the keys for each David.
>
> **[4:58](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=298)** We can do that by adding the word Amanda in parentheses to the string that we're using as a key for Amanda's friend David.
>
> **[5:06](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=306)** Now, we have both numbers stored in the Rolodex, but they're stored using different keys so we can tell them apart.
>
> **[5:12](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=312)** My original friend David's number is stored under the key named David, and Amanda's friend David is filed under the name David (Amanda).
>
> **[5:24](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=324)** We can see that the Rolodex gives us back the corresponding value for each of those keys.
>
> **[5:29](https://www.linkedin.com/learning/programming-concepts-for-python/add-items-to-dictionaries?u=76281980&t=329)** There are other ways we could have structured our Rolodex to tell these Davids apart, and I encourage you to think about other ways you might have approached this task.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), find (2), make (2)
> **Code Keywords:** function (1), throw (1), let (1)
> **Analogies:** just like (1), similar to (1)
> **Speakers:** - a (1), - here (1)
> **Tools:** terminal (1)

#### Reverse lookup issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=2)** - I'm all done calling all my friends to invite them over, (phone ringing) and now somebody's calling me, but I don't recognize this number, and I don't like to answer the phone if I don't know who's calling.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=13)** Maybe I can find them in my Rolodex.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=16)** Except my Rolodex is organized alphabetically so that given a person's name, I can very quickly find their phone number, but it's not designed to work in the other direction.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=25)** Right now, I have a phone number and I want to find the corresponding name, but there's not an efficient way to do an inverse lookup with the Rolodex, so the best I can do is manually search through each card until I find the number that I'm looking for, and it better be quick before this person hangs up.
>
> **[0:40](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=40)** Ah, it's my dad.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=42)** I'll answer that call.
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=44)** Hey, dad.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=46)** Oh, sorry, mom.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=47)** I thought it was dad because of the phone number.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=50)** Oh, I forgot that you and dad share the same phone number at your house.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=55)** That explains it.
>
> **[0:56](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=56)** I have separate cards in my Rolodex for you and dad, and both of those cards have the same phone number on them.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=61)** When I was flipping through my Rolodex to find the number, I came across dad's card first, so I thought it was him calling.
>
> **[1:08](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=68)** I know, mom, Rolodexes are like dictionaries.
>
> **[1:11](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=71)** They're not designed to do inverse lookup.
>
> **[1:13](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=73)** I love you too, mom.
>
> **[1:14](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=74)** Bye.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=77)** It's perfectly acceptable to have multiple entries in a dictionary that have the same value.
>
> **[1:21](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=81)** You just can't have duplicate keys.
>
> **[1:24](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=84)** When I searched for that number in my Rolodex, I decided to stop at the first matching value that I found, which happened to be the card for my dad before my mom because D comes before M alphabetically.
>
> **[1:35](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=95)** If I wanted to make sure that I found all of the people who have that number in common, then I would've had to search through the entire Rolodex, and that could've taken a really long time.
>
> **[1:45](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=105)** Let's create an inverse lookup function for our Python Rolodex.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=109)** We'll start by defining a new function at the end of this script named caller_id, which will have a single input parameter for the number we want to look up.
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=119)** Inside this function, we'll use a for loop to cycle through each name and number pair in the Rolodex.
>
> **[2:06](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=126)** And to do that, we'll use the items method on the Rolodex dictionary, which returns an iterable object that gives us tuples containing the key and value pairs.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=137)** The statement we've created here is the Pythonic way to make a for loop that will iterate through the dictionary to evaluate each name and number pair.
>
> **[2:25](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=145)** The variables name and number will take on the value of a different name and number pair for each iteration of the loop.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=153)** Inside that loop, we'll compare each number in the Rolodex to the lookup number, and as soon as we find a match, we'll exit the caller_id function by returning the corresponding name.
>
> **[2:47](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=167)** Now to demonstrate that function, I have a new terminal open to the same directory as the example script.
>
> **[2:54](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=174)** I'll start a new Python shell and then use an import statement with the wild card operator to bring everything from that script into scope.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=187)** Now, let's test out that caller_id function.
>
> **[3:11](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=191)** I happen to have Olivia's phone number memorized.
>
> **[3:13](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=193)** It's 555-6397.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=199)** And when I pass that to caller_id, as expected, we get back Olivia's name because she is a key in the dictionary which points to that particular number.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=210)** If we try to look up a number that's not in the Rolodex, such as 867-5309, the caller_id function does not return anything because there's nobody in the Rolodex who has that number.
>
> **[3:49](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=229)** Now let's look up one last number, 555-2603.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=237)** This number belongs to both my dad and my mom.
>
> **[4:02](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=242)** When I run that command, the caller_id function only returns a single name which belongs to the first matching entry that it found, which was my dad.
>
> **[4:12](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=252)** In my real life Rolodex, I had the entries sorted alphabetically, which means if I searched through the Rolodex from front to back, I would always find the card from my dad before I find the card for my mom because D comes before M.
>
> **[4:27](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=267)** in Python, the order of key value pair entries in a dictionary is based on the order in which those entries were inserted.
>
> **[4:35](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=275)** Since the Rolodex dictionary we used for this example initialized the entry for dad before mom, the caller_id function found dad first.
>
> **[4:44](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=284)** However, if mom had come earlier in that initialization sequence, then the caller_id function would've found her entry first.
>
> **[4:52](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=292)** It's worth noting that dictionaries retaining this relative order based on insertion is a somewhat new feature in Python which was added in Python version 3.7.
>
> **[5:03](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=303)** in earlier versions of Python before that, the relative order of dictionary entries was not guaranteed and could be different every time the program ran.
>
> **[5:13](https://www.linkedin.com/learning/programming-concepts-for-python/reverse-lookup-issues?u=76281980&t=313)** Programmers had to take that into consideration to not rely on dictionary keys being found in a specific order.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8), python (6), make (2)
> **Code Keywords:** function (10), let (3), for, (1), match, (1), pass (1)
> **Code Identifiers:** caller_id (8)
> **Definitions:** is a  (2)
> **Versions:** version 3 (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Prerequisites:** initialization (1)


### 9. Conditional Execution

> [↑ Back to Table of Contents](#table-of-contents)

#### If-else statements
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=0)** - Every programming language has some form of the classical if-then-else statement.
>
> **[0:06](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=6)** Each language may use different words and syntax for it, but they all accomplish the same thing, which is to allow for conditional execution.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=13)** The program is able to choose which code it executes based on some condition, such as the value of a variable, whether or not a file is empty or any number of things.
>
> **[0:22](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=22)** One of the first things that every new programmer learns is how to use an if-else statement, which allows your program to take one of two possible paths.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=30)** If some condition, do this, otherwise, do that.
>
> **[0:33](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=33)** Things can get a bit more confusing when we start building complex conditional statements that have more than just two possible choices.
>
> **[0:40](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=40)** The way we as humans make decisions among several different options is different than a computer.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=46)** Computers can only make binary decisions, which means it can only decide between two things at a time.
>
> **[0:52](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=52)** So even complex conditional statements with lots of options really boil down to a sequence of binary choices for a computer to make.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=61)** I've got some friends coming over later to eat pizza and play board games, which means I need to decide what type of pizza to order.
>
> **[1:07](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=67)** I want to be a good host by getting a pizza that all of my friends can enjoy, so I should take into account any dietary restrictions that they have when I make that decision.
>
> **[1:16](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=76)** Fortunately, Olivia's here to help me figure that out.
>
> **[1:19](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=79)** I've spent a bit too much time programming, so I tend to think like a computer.
>
> **[1:23](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=83)** Olivia, on the other hand, is much more human.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=86)** - Well, what kind of pizza should we get?
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=88)** - That is an open-ended question that I'm not prepared to handle as a computer.
>
> **[1:33](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=93)** - Hmm, well, is there anyone that can't eat meat?
>
> **[1:37](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=97)** In which case, we should get a cheese pizza.
>
> **[1:39](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=99)** - Yes. Vern does not eat meat.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=101)** Therefore we'll get a cheese pizza.
>
> **[1:43](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=103)** - Wait, but hold on a second. - Decision made.
>
> **[1:44](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=104)** - Vern's vegan, which means he can't have meat or cheese.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=108)** We should get a vegan pizza instead.
>
> **[1:49](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=109)** - Too late. The decision is made.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=111)** No more questions.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=111)** - Well, Vern won't be able to eat it.
>
> **[1:53](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=113)** - I'm not listening to you.
>
> **[1:55](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=115)** - In addition to acting annoying, Baron's also acting like an if-else-if chain in a program.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=120)** An if-else-if chain is a series of questions that are asked in order.
>
> **[2:04](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=124)** The first question, and only the first question, whose answer is yes gets its corresponding actions performed.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=130)** Any questions after that are never considered.
>
> **[2:13](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=133)** People tend to ask a series of questions that start off as very general and then become more specific to narrow down towards a final answer.
>
> **[2:19](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=139)** An if-else-if chain also asks a series of questions, but will choose the first true option even if later conditions are also true.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=147)** That means the if-else-if chain has a hierarchy: the cases that come first have a higher priority than any other cases that follow it because they're evaluated first.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=156)** This Python script contains a sequence of if-elif statements, which reproduces the conversation I just had with Baron to decide which pizza to order.
>
> **[2:45](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=165)** Even though there are three possible outcomes from the structure, we could get a cheese pizza, the vegan pizza or something else, this program arrives at the decision through a series of binary choices.
>
> **[2:58](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=178)** Each of the expressions following if and elif can be evaluated to a Boolean value, meaning that each expression is either true or false.
>
> **[3:05](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=185)** Those are the only two options.
>
> **[3:08](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=188)** Our program will evaluate these expressions in order from top to bottom until it finds one that's true.
>
> **[3:14](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=194)** When it does, it will execute the corresponding code and then leave the if-elif structure without looking at any of the remaining expressions.
>
> **[3:23](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=203)** Only the first expression that evaluates to true will get chosen and have its corresponding code executed.
>
> **[3:29](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=209)** For this example, we've created a set called diet_restrictions on line 4 which are things Vern does not eat since he's a vegan.
>
> **[3:37](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=217)** We then used that set in the if-elif-else statement to determine which pizza to order.
>
> **[3:43](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=223)** The first question that I asked Baron was if anybody was coming over that could not eat meat.
>
> **[3:49](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=229)** This corresponds to the first expression in the structure at line 7, which will evaluate to true if meat is in the set of diet restrictions, which it is.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=237)** The next elif expression at line 10 will also evaluate to true because it checks to see if both meat and cheese are in Vern's diet restrictions, which they are.
>
> **[4:07](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=247)** I have a terminal open to the directory containing this script, so let's use Python to run it.
>
> **[4:17](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=257)** And it says to order the cheese pizza.
>
> **[4:19](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=259)** That's going to be a problem since Vern does not eat cheese.
>
> **[4:22](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=262)** Because the first expression regarding meat at line 7 evaluated to true, it selected that option and didn't even consider ordering a vegan pizza.
>
> **[4:31](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=271)** This is the same problem that Baron and I ran into during our conversation.
>
> **[4:35](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=275)** I asked him the less restrictive question to determine if somebody does not eat meat.
>
> **[4:40](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=280)** Since that was true, he decided to execute that case and order the cheese pizza before I could ask a more restrictive question involving meat and cheese.
>
> **[4:50](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=290)** It is very important to keep this hierarchy in mind when writing if-elif-else chains.
>
> **[4:54](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=294)** The most restrictive options should go near the top of the statement where they'll have a higher priority.
>
> **[5:00](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=300)** To fix the issue, first, let's modify the if statement at line 7 to represent the most restrictive option: meat and cheese.
>
> **[5:09](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=309)** Then if that evaluates to true, we'll order the vegan pizza.
>
> **[5:13](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=313)** Next, we'll change the expression for the elif statement at line 10 to be less restrictive by removing the requirement for cheese.
>
> **[5:21](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=321)** Then if that evaluates to true, we'll order the cheese pizza.
>
> **[5:27](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=327)** Now, when I save and run the script again, it selects the vegan pizza, which is the right choice given Vern's dietary restrictions.
>
> **[5:35](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=335)** When building an if-elif-else structure, take time to think about how the different cases relate to each other, and decide which option should have the highest priority and therefore come first in the sequence.
>
> **[5:46](https://www.linkedin.com/learning/programming-concepts-for-python/if-else-statements?u=76281980&t=346)** You want to avoid this situation where an important high-priority condition never gets evaluated because it's too far down the sequence and there are earlier conditions that also evaluate to true.

> [!info]- Semantic Content
>
> **Code Keywords:** elif (8), let (2), this, (1), case, (1), else, (1)
> **Speakers:** - well (2), - every (1), - that (1), - hmm (1), - yes (1)
> **CLI Commands:** make (4), python (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** diet_restrictions (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)

#### Match statements
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=0)** - In addition to the inclusive vegan pizza, I'm also going to order a pizza for myself.
>
> **[0:05](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=5)** The pizza company offers a different pizza deal every day of the week, so I'll make my choice based on the daily special.
>
> **[0:11](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=11)** In this scenario, I need to make a decision based on a single value, the day of the week.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=16)** One way I can evaluate this series of options is as an if-else-if chain that says, if today is Sunday, then order the spinach pizza, else if today is Monday, order the mushroom pizza, else if today is Tuesday, order the pepperoni pizza, and so on.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=30)** When my program goes to evaluate the if-else-if chain, it'll evaluate each of those expressions in order.
>
> **[0:36](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=36)** So, let's do that now to pick a pizza.
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=38)** I'll start at the top of the list and work my way down.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=41)** Is it Sunday? No.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=43)** Is it Monday? No.
>
> **[0:45](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=45)** Is it Tuesday? No.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=47)** Is it Wednesday? No.
>
> **[0:49](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=49)** Is it Thursday? No.
>
> **[0:51](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=51)** Is it Friday? No.
>
> **[0:53](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=53)** Is it Saturday? Yes.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=55)** Today is Saturday, Hawaiian pizza. One of my favorites.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=59)** - You know today is Saturday and it's at the bottom of the list.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=61)** Why didn't you start there?
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=63)** - Well, as an if-else-if chain, I always start at the top and evaluate my cases in order.
>
> **[1:08](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=68)** It's, it's just how I work.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=70)** - But it seems like if you have a lot of cases to consider and the one that you want's the bottom, it's going to take a long time to evaluate them all.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=77)** - As always, Olivia, you are correct.
>
> **[1:20](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=80)** An if-else-if chain has to evaluate all of the cases prior to reaching the first true case, which could take a while if there are a lot of cases to consider.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=88)** In this particular scenario, we only had seven possible options to choose from because there are exactly seven days in a week, and there will always be one and only one case that's true at any given time.
>
> **[1:39](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=99)** When choosing a case based on the value of a single expression, in this case, day of the week, there are better ways to code that than with an if-else-if chain.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=108)** - [Olivia] In Python, we can use a match statement to compare the value of an expression to a series of patterns referred to as cases.
>
> **[1:55](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=115)** The match statement will then execute the code behind the first case that matches the pattern.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=120)** Be aware, match statements were added to Python in version 3.10, so if you're using an older version of Python, they will not be available.
>
> **[2:09](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=129)** The function shown here uses a match statement to decide which pizza special to order.
>
> **[2:14](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=134)** Line four starts a match statement to match the value of the input parameter named day.
>
> **[2:19](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=139)** The cases in the following block of code are then evaluated sequentially from top to bottom.
>
> **[2:25](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=145)** If day matches Sunday, then return the string spinach pizza because that's today's special.
>
> **[2:30](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=150)** Else, if day matches Monday, return the string mushroom pizza.
>
> **[2:34](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=154)** Else, if day matches Tuesday, return pepperoni pizza, and so on.
>
> **[2:39](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=159)** Down near the bottom of the script, we initialize a variable name today to Tuesday at line 20, then pass that to the order_special() function, and finally, print a message showing what today's special is.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=171)** If I click the run arrow, the output message shows that today is Tuesday and the special is pepperoni pizza.
>
> **[2:58](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=178)** We can see that the match statement executed the Tuesday case at line nine and returned a pepperoni pizza.
>
> **[3:04](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=184)** If we change today from Tuesday to Friday and run the script again, now the Friday case at line 15 executes and the output shows us that today's special is sausage pizza.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=199)** Now, let's say the pizza company decides to get rid of weekend specials on Friday and Saturday.
>
> **[3:24](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=204)** We can implement that change by deleting those cases from the match statement.
>
> **[3:29](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=209)** I'll run the script with that change.
>
> **[3:32](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=212)** And now, the output shows that today is Friday and the special is None.
>
> **[3:36](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=216)** It's important to note that although the output strings says None, spelled with a capital N, what the order special function actually returned is a special Python object used to represent a null value, meaning no value at all.
>
> **[3:49](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=229)** The print statement just displays that object as the word None.
>
> **[3:53](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=233)** We got None back from the order_special() function because the match statement no longer has a case for Friday, so it didn't find a match to return a pizza string.
>
> **[4:02](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=242)** Writing the match statement this way is valid and might make sense depending how we want the order function to behave.
>
> **[4:09](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=249)** But let's say rather than just returning None, we want to more proactively let customers know that there isn't a pizza special for that day.
>
> **[4:18](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=258)** We can do that by adding a default case, which serves as a final catch-all pattern, similar to a final else clause at the end of a sequence of if-elif statements.
>
> **[4:28](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=268)** To define the default case, we'll use the _ symbol as a pattern to match.
>
> **[4:32](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=272)** This is a special symbol in Python, which acts as a wildcard and will match to anything.
>
> **[4:38](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=278)** Let's add a default case to the end of this match sequence.
>
> **[4:41](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=281)** If this case gets executed, it will print a message to say there's no special for today, and we'll also return None since there's no special.
>
> **[4:53](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=293)** That last line, return None, is not technically required because Python functions will automatically return None if there's not another specified value to return.
>
> **[5:02](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=302)** However, I think explicitly writing out the return statement like this makes the intent of the code much more clear.
>
> **[5:08](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=308)** I'll run the updated script and we see the message that there's no Friday special.
>
> **[5:12](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=312)** And after that, the message that today is Friday and the special is None.
>
> **[5:17](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=317)** By including a default catchall case in the match statement, we can pass this function pretty much anything, even things that are not one of the normal seven days of the week.
>
> **[5:26](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=326)** For example, let's say today is Christmas.
>
> **[5:29](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=329)** Christmas is not one of the cases.
>
> **[5:31](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=331)** So if I run the program one final time, we see that there's no Christmas special, which I hope that means the pizza makers are enjoying the day off.
>
> **[5:39](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=339)** Now, functionally, everything we've done here with the match statement can also be accomplished using the if-elif-else chain.
>
> **[5:47](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=347)** Both versions of code shown here do the same thing.
>
> **[5:50](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=350)** They go down the list to evaluate if the day variable is equal to one of the days of the week, and then execute the corresponding branch.
>
> **[5:58](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=358)** If this is what your program needs to do, then it doesn't functionally matter if you use a match statement or an if-elif-else chain.
>
> **[6:05](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=365)** Choose the mechanism that makes your code easiest for others to understand.
>
> **[6:09](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=369)** That said, the pattern matching capability introduced in Python 10 can do a lot more advanced things than what we'll cover in this course.
>
> **[6:17](https://www.linkedin.com/learning/programming-concepts-for-python/match-statements?u=76281980&t=377)** If you want to dive deeper into pattern matching, a good place to start is the Python documentation known as PEP 636, which provides a tutorial on structural pattern matching.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (6), case, (4), elif (3), else, (2)
> **CLI Commands:** python (8), make (3), find (1)
> **Speakers:** - in (1), - you (1), - well (1), - but (1), - as (1)
> **Definitions:** is a  (2), known as (1)
> **Code Identifiers:** order_special (2)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** pep (1)
> **Versions:** version 3 (1)


### 10. Loops

> [↑ Back to Table of Contents](#table-of-contents)

#### For loops
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=0)** - Loops are programming constructs, which repeatedly perform an operation or series of operations over, and over, and over.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=7)** There are two types of loops, for loops and while loops.
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=10)** One of the key differences between them is that with a for loop, you know exactly how many times that loop is going to perform its operation before it even runs.
>
> **[0:19](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=19)** Some languages do this by creating a variable that will count up to a certain value, and for loops can also be used to iterate through items in a list.
>
> **[0:26](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=26)** That list will have a certain number of items, which will be the number of times the for loop executes.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=31)** With a while loop, you don't know how many times the loop is going to be executed.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=35)** Instead, as the loop is running, it's constantly checking and checking for a condition to determine whether or not it should execute one more time.
>
> **[0:43](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=43)** I'll use loops to help me perform a complex operation that I'm very familiar with, doing the dishes.
>
> **[0:51](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=51)** My kitchen is a little bit of a mess and I want to clean it up before my friends come over.
>
> **[0:55](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=55)** I'll start by loading the dirty dishes from the sink into the dishwasher with a for loop.
>
> **[1:00](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=60)** I know exactly how many dishes I'm going to move from the sink to the dishwasher before I start this task, because there are exactly three dirty dishes in my sink.
>
> **[1:09](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=69)** And I won't stop loading the dishwasher until I've completed that task for all three of those dishes.
>
> **[1:14](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=74)** So I'll pick up the bowl and put it in the dishwasher.
>
> **[1:19](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=79)** That's one item.
>
> **[1:22](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=82)** Then I'll pick up the plate and put that in the dishwasher.
>
> **[1:26](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=86)** That's two.
>
> **[1:27](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=87)** And finally, I'll pick up the cup and put that in the dishwasher.
>
> **[1:32](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=92)** Three.
>
> **[1:33](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=93)** Now, after loading those three dishes, I've reached the end of my list, and since a for loop operates on each element in the list, I'm done.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=101)** I'll never load more than three dishes because that's how many dishes were in the sink.
>
> **[1:46](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=106)** This example script from the exercise files represents the process of loading the dishwasher.
>
> **[1:52](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=112)** It initializes a list named sink on line four, which has three dirty dishes in it, the bowl, the plate, and the cup.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=120)** Then we use a for loop at line seven to iterate through those dishes.
>
> **[2:05](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=125)** This demonstrates the Python syntax to iterate through the items in a list such as our list named sink, or to iterate through other types of iterable objects.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=135)** For each iteration of the loop, the variable named dish will point to the next object in the list and then the print statement on line eight simulates the act of putting that dish into the dishwasher.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=147)** Just like with function definitions, Python uses indentation to identify the lines of code that exist within the loop.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=156)** When I click the run arrow to execute this script, it starts by putting away the bowl, then the plate, and finally the cup.
>
> **[2:45](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=165)** This for loop will iterate through all of the dishes in the sink, and it will always do the exact same thing.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=171)** Put away those three dishes.
>
> **[2:53](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=173)** We'll never put away more or fewer dishes than that.
>
> **[2:57](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=177)** Now, using a print statement to say we're putting away a dish is not really the same as removing that dish object from the sink.
>
> **[3:06](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=186)** In fact, we can see from the output of the print statement on line 11 that after the for loop, there are still three dishes in the sink.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=195)** The sink list still contains the bowl, plate, and cup.
>
> **[3:19](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=199)** This program didn't actually remove anything, so let's modify the script such that when a dish goes into the dishwasher, it also removes that object from the sink.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=210)** We can do that by using the remove method on the sink list and passing it the dish to be removed.
>
> **[3:37](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=217)** I'll run the script with that change.
>
> **[3:40](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=220)** And now the print statement from within the for loop only shows us putting the bowl and cup into the dishwasher, and the final print statement shows that the plate is still in the sink.
>
> **[3:51](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=231)** I intended to put all of the dishes in the dishwasher, so this is not the behavior I want.
>
> **[3:58](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=238)** What we've accidentally done here is make changes to the list that we're iterating through by removing objects from it while inside the for loop.
>
> **[4:07](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=247)** The first iteration through the loop grabs the first dish in the list, which is the bowl, and then removes it from the list.
>
> **[4:15](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=255)** Now, the problem occurs in the next iteration of the for loop because it retrieves the second object in the sink list, but the second object is no longer the plate, now it's the cup.
>
> **[4:27](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=267)** So when the bowl was removed from the list in the first iteration, that caused everything to shift up in the list.
>
> **[4:34](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=274)** So now the plate is in the first position and the cup is second.
>
> **[4:38](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=278)** This is why you should be careful when adding or removing items from a list inside of a for loop that is iterating over that same list.
>
> **[4:46](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=286)** It can cause all sorts of confusion.
>
> **[4:48](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=288)** So how can we get around this problem?
>
> **[4:52](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=292)** Well, we need to remove items from the sink list inside of the for loop.
>
> **[4:57](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=297)** So rather than having the for loop iterate through the sink, let's make a separate copy of the sync that the for loop can use to iterate.
>
> **[5:08](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=308)** We can do that by calling the list function on the sink in the for statement.
>
> **[5:14](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=314)** This will create a copy of the sink list that the for loop will use to iterate through, which leaves the original sink free for us to modify as needed.
>
> **[5:23](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=323)** Now, I'll run the script one more time, and this time we can see that all of the dishes are put into the dishwasher, and that at the end of the script, the final print statement shows that the sink is empty.
>
> **[5:36](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=336)** The lesson here is to avoid changing the contents of a list inside of a for loop that's iterating through that list.
>
> **[5:43](https://www.linkedin.com/learning/programming-concepts-for-python/for-loops?u=76281980&t=343)** Instead, create a second copy for the loop to use and then you can do whatever you want to with the original list.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), finally, (1)
> **CLI Commands:** python (2), make (2)
> **Analogies:** such as (1), just like (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - loops (1)

#### While loops
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=0)** - The dishwasher just finished running, so I'm ready to put away the dishes into the cabinet.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=8)** Uh-oh, most of the dishes in there look clean, but this pan had some burned food stuck to it that the dishwasher couldn't get off.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=15)** I guess I'll have to clean it the old fashioned way.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=17)** The process of scrubbing this pan belongs in a while loop because I don't know how many times I'm going to have to scrub it to get it clean.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=24)** Rather than specifying how many times I'm going to scrub it before I begin, like you would with a four loop, I'll just start scrubbing this pan and I'll continue scrubbing until a specific condition is met, that the pan's clean, and then I can finally stop.
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=38)** Each round of the scrubbing is a two step process.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=41)** First, I scrub the pan with a sponge, then I give it a quick rinse so I can see whether or not it's clean.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=50)** Now I check it, nope, still dirty so I'll repeat that process again and I'll continue this process on and on and on until the pan is finally clean.
>
> **[1:00](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=60)** Now I'm only checking the condition of the pan at the end of the two-step cleaning process.
>
> **[1:05](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=65)** I'm not checking if the pan is clean during the middle of the operation when it's covered in soap.
>
> **[1:10](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=70)** So if I give this pan a good scrub and that's what finally gets it clean, I would still have to complete the second half of that operation, which is to rinse the pan off so I could check and see that it was finally clean and stop scrubbing.
>
> **[1:24](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=84)** - [Narrator] This script from the exercise files simulates the process of scrubbing that stubborn pan.
>
> **[1:30](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=90)** The Boolean variable on line five named, dirty, represents whether or not the pan is still dirty and the variable called, scrub count, below that keeps track of how many times I have to scrub the pan to finally get it clean.
>
> **[1:43](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=103)** The while loop at line eight is configured to continue looping as long as the pan is still dirty by checking that the dirty variable is true.
>
> **[1:52](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=112)** Each time through the loop, it'll increment the scrub count and then print a message which displays the number of times the pan was scrubbed.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=120)** After that, I rinse the pan and check whether or not it's finally clean.
>
> **[2:05](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=125)** To determine whether it's clean or not, I've decided to use the randint function on line 14 to generate a random number between zero and nine.
>
> **[2:14](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=134)** If that number is zero, then the following if else statement will evaluate to true, thus printing out a message that the pan is clean and changing the dirty variable to false.
>
> **[2:25](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=145)** Otherwise, the pan will stay dirty.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=148)** I'll click the run arrow to run that script and this time through, I had to scrub the pan 12 times to get it clean.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=156)** The number was determined randomly inside the loop by that randint function.
>
> **[2:42](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=162)** If I run that exact same script again, the loop might execute for a different number of cycles.
>
> **[2:49](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=169)** This time, I had to scrub the pan six times to get it clean.
>
> **[2:52](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=172)** Every time I run this script, it will take a random number of to the pan.
>
> **[2:59](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=179)** The fact that we don't know how many times the pan will need to be scrubbed before the script actually runs is why we need to use a while loop in this program rather than a for loop.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=190)** If we had really bad luck, we could be stuck scrubbing this pan forever.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=195)** Now, I want to point out that this while loop only checks whether or not the dirty variable is still true at the end of each loop iteration.
>
> **[3:24](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=204)** That means if the value of dirty changes in the middle of the loop code, then the rest of the loop code will still execute to complete that iteration.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=214)** To demonstrate that, let's cut and paste the section of code that randomly changes whether or not the pan is clean from the end of the loop body to between the print statements.
>
> **[3:46](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=226)** Now when I run the script, the state of the dirty variable is changed to clean immediately after scrubbing the pan for the 15th time.
>
> **[3:56](https://www.linkedin.com/learning/programming-concepts-for-python/while-loops?u=76281980&t=236)** But we still execute the rinse and check process because the while loop has to finish everything inside of it before it can check to see that the dirty variable has changed to false.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (3), function (2), let (1)
> **Speakers:** - the (1), - [narrator] (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Break statements
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=0)** - Now that all of my dishes are finally clean, I'm ready to unload the dishwasher and put the clean dishes into the cabinet.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=7)** This is a perfect operation to execute using a for loop because I know that there are 20 clean dishes in the dishwasher and I plan to unload all of them.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=15)** So I'll count aloud as I unload each one.
>
> **[0:18](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=18)** I'll pick up the first dish and put it away.
>
> **[0:22](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=22)** That's one.
>
> **[0:23](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=23)** I'll pick up the second dish and put it away, as well.
>
> **[0:26](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=26)** That's two.
>
> **[0:28](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=28)** I'll pick up the third dish.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=31)** Well, my cabinet is full, which means I need to stop this process because there's no space left.
>
> **[0:37](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=37)** I had originally planned to put away all 20 dishes, but because this happened, I'll need to exit my for loop early and leave the unprocessed dishes in the dishwasher.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=46)** If I had checked the cabinet before I started, I might have seen that it only had space for two dishes, which is way less than the number of dishes in the dishwasher, and in that case, I could've modified my for loop to only process two dishes instead of trying to process all 20.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=61)** But if I can't look at the cabinet ahead of time to determine how much space it has, or maybe I'm just really bad at estimating space, then I'll start unloading dishes as a for loop because I want to unload them all.
>
> **[1:12](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=72)** But if that unpredictable condition occurs, then I'll need to exit the loop to quit early.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=77)** Fortunately, we can escape for loops early using the break statement.
>
> **[1:22](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=82)** This script represents the process of putting away the clean dishes into the cabinets.
>
> **[1:27](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=87)** The list that's defined starting at line six represents the 20 dishes that start out in the dishwasher.
>
> **[1:34](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=94)** Then the for loop at line 11 iterates through a copy of that dishwasher list to put each of the dishes into the cabinet.
>
> **[1:42](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=102)** Each iteration of the loop calls the randint function on line 13 to determine whether or not there is still space available in the cabinet.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=111)** We are generating random numbers between zero and 19 so that every time the loop checks the cabinet, there will be a one in 20 chance that it's full.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=120)** If the randint function returns a non-zero number, that means there's still space in the cabinet.
>
> **[2:05](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=125)** That executes the else clause starting at line 16, which prints a message about putting away that dish and then removes it from the original dishwasher list.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=135)** If the randint function returns zero, then that means the cabinet is full.
>
> **[2:20](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=140)** The print statement at line 14 will display a message that we're out of space, and then the break statement on the following line will exit the for loop.
>
> **[2:29](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=149)** Whenever we call a break inside of a for loop or while loop, the program will exit the loop at that point and it will continue executing the next thing in the program immediately after the loop.
>
> **[2:41](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=161)** In this case, there's nothing after the loop, so the program will finish.
>
> **[2:46](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=166)** Now, if I click the run arrow to run this script, we see that it was able to put away nine dishes before the cabinet became full.
>
> **[2:55](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=175)** If I run the same script again, this time it was able to put away 11 dishes before the cabinet became full.
>
> **[3:03](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=183)** You might be thinking that this randomness seems like the kind of situation where you would want to use a while loop because you don't know how many times the loop will execute before the program runs.
>
> **[3:15](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=195)** Well, that would be one way to write this program.
>
> **[3:18](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=198)** It would be possible to implement this routine with a while loop by checking for the condition that either the cabinet is out of space or that we've put away all of the dishes in the dishwasher.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=210)** But there's a reason it still makes sense to use a for loop for this program, and that's because we are iterating through the objects in a list.
>
> **[3:39](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=219)** If we have good luck and the cabinet remains empty the whole time, then the for loop will execute and put away all 20 of the dishes in the dishwasher.
>
> **[3:47](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=227)** That's great.
>
> **[3:48](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=228)** That's what we want to happen.
>
> **[3:50](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=230)** So it makes sense to use a for loop for this job.
>
> **[3:53](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=233)** We have the break statement in it because there is the potential that our loop might not be able to process all of the dishes as we originally planned.
>
> **[4:03](https://www.linkedin.com/learning/programming-concepts-for-python/break-statements?u=76281980&t=243)** If that happens, the break statement gives us an escape route from the loop.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), case, (2), continue (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)


### 11. Error Handling

> [↑ Back to Table of Contents](#table-of-contents)

#### Catch errors
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=0)** - No matter how good of a programmer you are, you will have errors in your code and there are two main types of errors that you'll encounter, syntax errors and runtime exceptions.
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=10)** Syntax or parsing errors are usually the first type of problem you run into, and those are the little typos and other mistakes that make your code invalid so that it can't even be run.
>
> **[0:20](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=20)** Unfortunately, those are pretty easy to handle.
>
> **[0:22](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=22)** Most development tools will instantly detect syntax errors in your code and they'll let you know where there's a problem so you can go fix it.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=30)** Once you have a valid program.
>
> **[0:31](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=31)** The next worry are exceptions, and these are the problems that occur when your program is running and it tries to do something illegal, like divide by zero.
>
> **[0:41](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=41)** Numerous issues can cause these exceptions, so it's important to incorporate error handling into your code to detect when these problems occur, and in many cases, the program can take some sort of action to recover from the error.
>
> **[0:54](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=54)** I've made a lot of phone calls today and my battery's almost dead.
>
> **[0:58](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=58)** I'll need to charge it so my friends can call me later when they come over to hang out.
>
> **[1:03](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=63)** Now I'll have to take care of some more chores.
>
> **[1:12](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=72)** You have just witnessed an error.
>
> **[1:15](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=75)** I plugged the charger cable into my cell phone, but the adapter wasn't plugged into the wall and I didn't check to make sure it was working before I walked away.
>
> **[1:23](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=83)** This is a bad situation to be in because there's a problem, but I don't realize there's a problem.
>
> **[1:29](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=89)** Because I assumed that the charger was working correctly.
>
> **[1:31](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=91)** I won't realize that it was unplugged until the next time I use my cell phone.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=96)** Even perfect code can stumble when it interfaces with external factors like other software, users, or the internet.
>
> **[1:43](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=103)** You should always check to make sure that those things you're interfacing with are working as expected.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=108)** Let's see how that scenario would've played out if I used proper error checking when I tried to interface with the wall charger.
>
> **[1:55](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=115)** I'll need to charge it so my friends can call me later when they come over to hang out.
>
> **[2:00](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=120)** Rather than just assuming that my charger's going to work, I'm going to try plugging it in except it doesn't work.
>
> **[2:06](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=126)** By recognizing that there's a problem, now I can do something to handle it.
>
> **[2:10](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=130)** And fortunately, this is an easy fix.
>
> **[2:16](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=136)** Now I can get on with the rest of my chores.
>
> **[2:20](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=140)** To demonstrate how things can go wrong when we try to interact with external resources, let's use Python to try downloading a webpage from the internet.
>
> **[2:30](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=150)** This example script begins by importing the request module from the URL lib package.
>
> **[2:36](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=156)** Then on line five, it uses the URL open function from that request module to access the URL for [google.com](https://google.com).
>
> **[2:44](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=164)** The URL open function will return an HTTP response object, which contains the raw binary data for the webpage.
>
> **[2:52](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=172)** To display that information, we'll simply use a for loop to print it out line by line.
>
> **[2:58](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=178)** When I click the run arrow to run this program, it prints out the raw HTML code for [google.com](https://google.com) in the terminal window.
>
> **[3:07](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=187)** That means the website successfully returned something when the program attempted to access it, but what would happen if that website was down for maintenance or perhaps the internet connection failed for some other reason?
>
> **[3:20](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=200)** Let's create a problem by modifying the URL for [google.com](https://google.com) to be a different URL that doesn't actually exist, Godogle.
>
> **[3:30](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=210)** I'll run the program again.
>
> **[3:32](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=212)** Now it attempts to access godogle and eventually it throws a URL error letting us know that the name or service is not known.
>
> **[3:42](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=222)** This is how Python raises an exception when something has gone wrong.
>
> **[3:46](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=226)** The exception provides information about the sequence of function calls that caused the exception to occur, which helps us figure out where the problem started.
>
> **[3:55](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=235)** In this case, when we called the URL open function on line five, it executed a sequence of other function calls within the request module that eventually raised the URL error.
>
> **[4:08](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=248)** Since we didn't have anything in the program to handle errors, the exception caused it to crash, which is not cool.
>
> **[4:14](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=254)** Now to implement some error handling, we can use Python's try and accept statements.
>
> **[4:21](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=261)** To do that, we'll first put the URL open request within a try statement.
>
> **[4:28](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=268)** The try statement will execute the block of code inside of it and if an exception occurs, it will catch that exception and execute special code to handle the error, thus avoiding a crash.
>
> **[4:40](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=280)** This is like earlier in the video when I tried to plug in my cell phone.
>
> **[4:46](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=286)** I caught the problem that the phone wasn't charging, and then I took the appropriate actions to handle that problem by plugging it into the charger.
>
> **[4:55](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=295)** We can specify the error handling code to execute if an exception occurs by adding an accept statement after the try block.
>
> **[5:04](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=304)** For now, let's just print out a message within the accept block to let the user know that the program was unable to access the webpage.
>
> **[5:12](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=312)** I'll rerun the program, and hmm, the updated code runs a little bit better, but it's not error free yet.
>
> **[5:21](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=321)** The program caught the exception and executed the error handling code by printing out the could not access webpage message, but now we have another problem.
>
> **[5:32](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=332)** Since the URL open function failed to complete, it never created the webpage object.
>
> **[5:38](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=338)** That means the loop at line 10 is trying to access an object that doesn't exist and that causes problems.
>
> **[5:45](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=345)** The for loop is not aware that an error had occurred and it still tried to run, but in this case, the for loop should only execute if the URL open function works correctly and retrieves the webpage.
>
> **[5:58](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=358)** To implement this functionality, we can add an else statement to the end of the try accept block.
>
> **[6:05](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=365)** Then we'll move the for loop inside of it.
>
> **[6:07](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=367)** This else statement will only be executed if the try statement is successful.
>
> **[6:13](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=373)** Now when I run this code, I just see the could not access webpage message.
>
> **[6:19](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=379)** The for loop is not executed this time because the URL open request was unsuccessful.
>
> **[6:25](https://www.linkedin.com/learning/programming-concepts-for-python/catch-errors?u=76281980&t=385)** This sidesteps the error that occurred previously when the for loop tried to access the non-existent webpage object.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (6), module (3), case, (2), interface (1)
> **Env Vars:** url (13), http (1), html (1)
> **CLI Commands:** make (3), python (3)
> **URLs:** [google.com](https://google.com) (3)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Best Practices:** you should always (1)

#### Validate input
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=0)** - Time to finish cleaning up the house.
>
> **[0:02](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=2)** I like to put on a little music when I clean.
>
> **[0:05](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=5)** And Olivia, there's a few more dishes in the dishwasher.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=8)** Do you mind starting that?
>
> **[0:09](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=9)** - Sure.
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=10)** - Thanks, I'll just stay in here and vacuum up the living room.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=14)** (vacuum rumbling)
>
> **[0:23](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=23)** Looks like we ran into another error.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=25)** Unfortunately, I have no idea what caused this or why this problem occurred.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=30)** Just knowing that something's wrong doesn't help me to figure out what I need to do to fix it.
>
> **[0:34](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=34)** When an error occurs, the source of that error should raise an exception and pass along information about the problem so the program can do something to handle the error.
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=42)** - The power went as soon as I turned on the dishwasher.
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=44)** I think we tripped the circuit.
>
> **[0:46](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=46)** - Ah, thanks.
>
> **[0:47](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=47)** Now that I know an error has occurred and the reason for the problem, I can do something to handle it.
>
> **[0:53](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=53)** - [Olivia] To demonstrate that scenario, we'll use the circuit breaker class, which is define starting at line three of this example script up top.
>
> **[1:01](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=61)** On the bottom half of the screen, I've opened a terminal to the same directory as that script, and I've also already started a Python session and used an import statement to load the circuit breaker class into Scope.
>
> **[1:11](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=71)** Now this circuit breaker class has two properties, capacity, which is the maximum amount of amps that the circuit breaker can handle and load, which represents the present load on the circuit.
>
> **[1:22](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=82)** We can configure the capacity of a circuit breaker to be whatever we want when instantiating it by using the max amps parameter of the constructor method.
>
> **[1:30](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=90)** Let's do that now by creating a new circuit breaker object named cb, which has a maximum capacity of 20 amps.
>
> **[1:37](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=97)** We can see that the capacity of the new circuit breaker is 20.
>
> **[1:43](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=103)** However, the load property is always initialized at zero.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=108)** That's because a new circuit breaker begins without anything plugged into it.
>
> **[1:52](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=112)** This circuit breaker class has a custom method at line eight, which can be used to connect and disconnect devices from the circuit breaker.
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=119)** The method takes the device's electrical draw as its parameter and then increments the internal load by that amount.
>
> **[2:06](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=126)** If we pass a positive value to the connect method, that represents connecting a device load on the circuit because it increases the overall load value.
>
> **[2:14](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=134)** While a negative value represents disconnecting a device from the circuit.
>
> **[2:18](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=138)** Now, let's connect a few devices to the circuit.
>
> **[2:21](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=141)** First, a vacuum cleaner that draws 12 amps, the stereo, which uses seven amps, and finally the dishwasher, which draws 10 amps.
>
> **[2:32](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=152)** Now, if we check the total load on the circuit breaker again, we see that it's currently at 29 amps, which exceeds the 20 amp capacity we specified when creating the circuit breaker.
>
> **[2:44](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=164)** To Python the load property is just a number and Python doesn't care how much we add or subtract to that load value.
>
> **[2:51](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=171)** So as far as Python is concerned, this circuit breaker having a load of 29 amps is perfectly fine.
>
> **[2:59](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=179)** Whenever anything external can interface with your program, just as we did with the connect method, it's good practice to validate any inputs.
>
> **[3:06](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=186)** To check what your program is being asked to do makes sense.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=190)** Should you allow a 30 amp load to connect to a 20 amp circuit breaker?
>
> **[3:13](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=193)** Probably not.
>
> **[3:16](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=196)** If we expand the circuit breaker class by adding other methods that access its internal properties, those methods might reasonably expect that the load is always less than or equal to the capacity.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=207)** However, if we do not validate changes to guarantee that's always the case, we're setting ourselves up for future problems.
>
> **[3:34](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=214)** Let's prevent that by adding some code to the connect method to check that the input values are valid.
>
> **[3:40](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=220)** If the load plus amps parameters greater than the capacity of the circuit breaker, then we should raise an exception for the invalid condition.
>
> **[3:51](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=231)** We can do that with the command raise Exception.
>
> **[3:54](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=234)** Note the capital E for exception.
>
> **[3:57](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=237)** This uses python's generic exception class to create a new object with information about the exception, which in turn gets raised and passed up to the calling routine.
>
> **[4:06](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=246)** While we're at it, we should also check to make sure that the user doesn't try to enter a negative value for amps that are large enough to cause a negative load.
>
> **[4:14](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=254)** Again, we can add an if statement to check if the present load plus the amps parameter is less than zero, and if so, raise an exception.
>
> **[4:26](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=266)** Finally, if neither of those error conditions is true, then the amps parameter is allowed to modify the load variable.
>
> **[4:34](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=274)** Now this connect method checks to make sure that the amps parameter won't update the load to an out-of-bounds value before using it.
>
> **[4:41](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=281)** To reload this updated class, I'll exit the current Python session, start a new one, and reload the circuit breaker class from that module.
>
> **[4:56](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=296)** Then I'll create another 20 amp circuit breaker, and just like before, the load starts out at zero.
>
> **[5:04](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=304)** Now we can add a 12 amp device to the circuit, check the load, and it's 12, everything's fine.
>
> **[5:13](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=313)** But if we try adding too much to that circuit, let's say we try adding 15 more amps, the connect method will raise an exception.
>
> **[5:22](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=322)** The generic exception that the circuit breaker raised gave us some information about when and where the exception came from.
>
> **[5:29](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=329)** We can see that it came from line 10 of the circuit breaker script when we use the command to connect 15 amps.
>
> **[5:35](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=335)** Beyond that, the generic exception doesn't tell us much about what actually it caused the error.
>
> **[5:40](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=340)** We get a similar response if we try to use the connect method with a large negative value such as negative 30 amps.
>
> **[5:48](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=348)** The exception message looks very similar to the previous exception.
>
> **[5:51](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=351)** Again, it doesn't give much information about the cause of the problem.
>
> **[5:55](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=355)** This is similar to earlier in this video when I told Baron there was a problem because the power went out, but I didn't tell him what happened to cause it.
>
> **[6:02](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=362)** Those generic exceptions would be more useful if they included some information about the cause of each error.
>
> **[6:09](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=369)** We can attach a message to an exception by passing a string argument to the exception constructor, like a message saying that the connection will exceed capacity in the first case.
>
> **[6:18](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=378)** For the second case, let's add a message to the exception, seeing that the connection will cause a negative load.
>
> **[6:24](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=384)** That's the end of our updates.
>
> **[6:26](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=386)** So I'll go through the same process as earlier to exit the current session, restart Python, import the updated class, and create another 20 amp circuit breaker.
>
> **[6:37](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=397)** Now, if I tried to connect a huge device to the circuit breaker, like a monstrous hairdryer that draws 35 amps, the circuit breaker will detect it's a problem and it raises an exception with the descriptive message we added.
>
> **[6:50](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=410)** Since our code caught that problem and raised an exception, it never actually modified the load value.
>
> **[6:56](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=416)** So my circuit breaker still has the original zero load connected to it.
>
> **[7:01](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=421)** If we try decreasing the load to a negative value.
>
> **[7:05](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=425)** Now the raised exception includes a message letting us know we're encountering a different problem than before.
>
> **[7:11](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=431)** Most programming languages will give you a way to raise your own exceptions.
>
> **[7:15](https://www.linkedin.com/learning/programming-concepts-for-python/validate-input?u=76281980&t=435)** Just remember, you should always include information about the error, so the user or calling program can take the appropriate action to potentially correct the problem.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (6), let (5), class, (3), pass (2), case, (2)
> **CLI Commands:** python (7), make (2)
> **Speakers:** - time (1), - sure (1), - thanks (1), - the (1), - ah (1)
> **Analogies:** just like (1), such as (1), similar to (1)
> **Best Practices:** good practice (1), you should always (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)

#### Customize errors
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=1)** (breaker box cover clanging)
>
> **[0:03](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=3)** - With the breaker back on, I can try the dishwasher again.
>
> **[0:06](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=6)** - Barron, we have another problem.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=8)** The dishwasher's spewing water everywhere.
>
> **[0:10](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=10)** - Uh-oh. Well, this is a new type of issue.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=12)** I know how to handle electrical problems, but I don't know how to stop an out of control dishwasher.
>
> **[0:17](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=17)** When handling errors, it's very important that I consider the type of error that's occurred.
>
> **[0:21](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=21)** If it's an error I'm able to handle, then I can take some appropriate action to deal with it.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=25)** On the other hand, there may be types of errors that I'm not prepared to handle, like a raging dishwasher.
>
> **[0:30](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=30)** In that case, I can pass the error information on to somebody else that is able to handle it.
>
> **[0:35](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=35)** I need to call a plumber.
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=38)** - [Olivia] Many programming languages include built-in error types for many commonly occurring exceptions.
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=44)** For example, if I try to divide by zero, Python will raise an exception of the type ZeroDivisionError.
>
> **[0:51](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=51)** Another type of exception that Python will raise is the NameError exception, which occurs if you try to access a variable or function that doesn't exist.
>
> **[1:00](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=60)** For example, if we try to use a command named spam, Python will raise a NameError exception because the name spam has not been defined without our program.
>
> **[1:12](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=72)** To demonstrate one more type of exception, let's try adding a string to an integer, 'spam' + 1.
>
> **[1:19](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=79)** In this situation, Python raised a TypeError exception because a string object 'spam' and a numeric object cannot be directly added together like that.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=88)** Those are just some of the built-in errors that Python can raise for common exceptions.
>
> **[1:33](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=93)** As you use additional modules and packages in your programs, you may encounter other specialized types of errors that are specific to the functionality of that module.
>
> **[1:42](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=102)** Python even allows you to create your own custom error types by defining your own class that inherits from the generic Exception class.
>
> **[1:50](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=110)** When using a try-except block, we can create multiple except statements that will selectively execute depending on the type of exception that occurs.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=118)** To demonstrate that, we'll use this example script which defines two custom error classes.
>
> **[2:03](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=123)** The first class, starting at line three, defines an ElectricalError, and the second class, at line 11, defines a PlumbingError.
>
> **[2:12](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=132)** Both of these classes inherit from the generic Exception class.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=135)** However, we defined unique __init__() and __str__() methods that override the inherited versions of those methods from the base Exception class.
>
> **[2:23](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=143)** The new __init__() method for each of these error classes have input parameters for the device that caused the error and for the specific problem.
>
> **[2:31](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=151)** The __str__() or string method uses those variables to assemble and return a string that describes the error.
>
> **[2:37](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=157)** When we call the print method on a Python object of one of those types, it will use the newly-defined __str__() method to retrieve the string to print.
>
> **[2:46](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=166)** Below those two class definitions at line 19, we also defined a simple function named cause_error() that we'll use to manually raise an error in our program.
>
> **[2:56](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=176)** If we pass it the input string 'electrical' for the error_type parameter, line 21 will raise an ElectricalError that the circuit breaker is overloaded.
>
> **[3:04](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=184)** And if we pass it a 'plumbing' string as the input error_type, line 23 will raise a PlumbingError.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=190)** Now, to try out these new custom error classes, we'll create a try statement at the bottom of the script.
>
> **[3:16](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=196)** Within it, we'll call it the cause_error() function and we'll set it to raise an ElectricalError.
>
> **[3:23](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=203)** After that, we'll create two except statements to handle different types of errors.
>
> **[3:27](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=207)** We'll use the first except statement to catch ElectricalErrors.
>
> **[3:32](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=212)** This line will only catch exceptions of the ElectricalError type, and it will bind the ElectricalError object to the variable named e, so we can use it in error-handling code.
>
> **[3:42](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=222)** One thing we can do is simply print the string representation of that error object e.
>
> **[3:49](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=229)** Then, since Barron knows how to handle electrical errors, we'll use another print to represent him fixing it.
>
> **[3:56](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=236)** That completes the except block to handle electrical errors.
>
> **[3:59](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=239)** Now, let's do something similar to handle plumbing errors.
>
> **[4:07](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=247)** Since Barron doesn't know how to fix plumbing problems, we'll need to call a plumber.
>
> **[4:13](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=253)** Now, when I run this script, the cause_error() function at line 26 will generate an electrical problem.
>
> **[4:19](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=259)** Then, the except statement for electrical errors at line 27 will be executed, and Barron will fix the problem.
>
> **[4:26](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=266)** We can see in the terminal output that the circuit breaker was overloaded and that Barron fixed it.
>
> **[4:31](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=271)** Now, if we change the problem to 'plumbing' and run that script again, the except statement for the plumbing errors at line 30 will execute, and we'll call a professional plumber for help.
>
> **[4:44](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=284)** Great, we have electrical and plumbing problems locked down, but there are a lot of other things that can go wrong around the house.
>
> **[4:51](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=291)** Let's modify the cause_error() function to raise a generic Exception if something other than an electrical or plumbing problem occurs.
>
> **[4:59](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=299)** To do that, I'll just add an else statement to the end and raise an Exception with the message, 'a generic household problem'.
>
> **[5:10](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=310)** Now, if I modify the cause_error() function to trigger another type of problem, perhaps the grass in our yard is dying, and then run the script again, it crashes because the try-except block was only built to handle electrical and plumbing problems.
>
> **[5:26](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=326)** When we do not catch and handle an exception, Python will automatically raise it up to the next level in the program.
>
> **[5:33](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=333)** It does that to allow higher-level functions an opportunity to handle the error.
>
> **[5:38](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=338)** However, since we're not using sub-functions in this script, the error is quickly raised to the top level, which causes the entire program to crash.
>
> **[5:47](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=347)** This exception was a generic Exception type, and the output message shows that it came from the generic household problem.
>
> **[5:54](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=354)** We can modify the try-except block to handle all types of exceptions by adding a final default except statement that doesn't specify a specific type of error.
>
> **[6:04](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=364)** This will catch anything that slips past the previous except statements for electrical and plumbing exceptions.
>
> **[6:11](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=371)** Let's handle all of these types of household problems by simply calling the landlord.
>
> **[6:18](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=378)** Now, when I execute the script one more time, it raises a generic Exception, which the default except statement catches, so it calls the landlord for help with the problem.
>
> **[6:29](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=389)** Error handling is one of the most important and overlooked aspects of programming.
>
> **[6:34](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=394)** As a programmer, you spend a lot of time fighting syntax errors as you learn your new language.
>
> **[6:39](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=399)** But once you get past those struggles, it's important that you don't just assume that a program will always run like how you want it to.
>
> **[6:47](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=407)** Remember, error handling is about more than just making sure your code is correct.
>
> **[6:51](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=411)** It's about making sure that your, rephrase.
>
> **[6:55](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=415)** Remember, error handling is about more than just making sure your code is correct.
>
> **[6:59](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=419)** It's about making sure that your code does the right thing when it deals with the unpredictable outside world.
>
> **[7:05](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=425)** When you put your code into the hands of other users, they will almost certainly find a way to break it.
>
> **[7:10](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=430)** The two situations that you want to avoid are, one, having an error occur that you aren't aware of existing, or, two, recognizing that there's a problem, but you have no idea what it is or why it happened.
>
> **[7:22](https://www.linkedin.com/learning/programming-concepts-for-python/customize-errors?u=76281980&t=442)** By implementing good error handling, you can catch those problems, deal with them appropriately, and mitigate the impact of unpredictable users.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (11), function (6), let (4), pass (3), class. (3)
> **CLI Commands:** python (8), find (1)
> **Code Identifiers:** cause_error (5), error_type (2)
> **Speakers:** - with (1), - barron (1), - uh (1), - [olivia] (1)
> **Analogies:** for example (2), similar to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)


### 12. Polling and Event-Driven Programming

> [↑ Back to Table of Contents](#table-of-contents)

#### Polling
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=0)** - There will be times when you need a program to detect that some event has occurred and then react to that event by performing a certain action.
>
> **[0:08](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=8)** To accomplish that, there are two approaches you could use, polling or event-driven programming.
>
> **[0:13](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=13)** With the polling method, a program is continuously checking and checking and checking and actively checking for a certain condition to occur, like a button being pressed, and when it sees that the condition has occurred, it'll then perform an appropriate action.
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=27)** My house is ready for my friends, so now I'm just waiting for the pizza delivery guy to get here.
>
> **[0:32](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=32)** When the pizza man arrives, I'll need to perform the appropriate action by opening the door and getting the pizza.
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=38)** So how will I know when the pizza man is on the front porch to get my pizza?
>
> **[0:42](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=42)** Well, I could try the polling method, and to do that, I'll have to get up off my bed.
>
> **[0:50](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=50)** Then I go down the stairs.
>
> **[0:53](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=53)** (door clicks) I check to see if he's here, not yet.
>
> **[0:58](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=58)** (door clicks) So then I head back up the stairs and then I return back to lounging, but as soon as I lay back down, I got to get right back up again and check and see if he's here.
>
> **[1:14](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=74)** I go down the stairs again.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=77)** (door clicks) Nope, still not here.
>
> **[1:21](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=81)** (door clicks) Back up the stairs I go, lay down, stand up, down the stairs another time, not yet. (door clicks) Up again, down, up, down again.
>
> **[1:48](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=108)** (door clicks) Nope, and back up the stairs again.
>
> **[1:56](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=116)** Whew, that's exhausting!
>
> **[1:59](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=119)** As you can see, polling is not a very efficient method.
>
> **[2:02](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=122)** It takes a lot of energy for me to run up and down these stairs, checking for a status that rarely occurs.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=128)** It also prevents me from doing something else with my Saturday afternoon.
>
> **[2:11](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=131)** A computer application that implements a polling routine uses a lot of cycles, checking for that rarely occurring status, And simple, low-level programs like you might write for a microcontroller with a language like C, using polling to do software-driven I/O might be perfectly acceptable.
>
> **[2:27](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=147)** If the program is the only thing running on the microcontroller, it doesn't matter if we spend a lot of cycles polling.
>
> **[2:33](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=153)** Higher-level applications and languages like Python or Java are usually responding to events from things like a graphical user interface.
>
> **[2:40](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=160)** For that, using a polling routine would be pretty wasteful, but there may be times when polling is your only option.
>
> **[2:46](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=166)** So let's look at some example code that implements polling in Python.
>
> **[2:50](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=170)** This example script represents the scenario we just saw when I ran up and down the stairs to see if the pizza delivery person had arrived.
>
> **[3:00](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=180)** Near the top of the script, we create a variable named hungry at line 3, which indicates my current status and it's initialized to True because I'm hungry.
>
> **[3:10](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=190)** That's why I need pizza.
>
> **[3:12](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=192)** After that, the program enters into a while loop at line 5, which will continuously execute as long as hungry is still true.
>
> **[3:20](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=200)** Inside the loop, I open the front door, which we simulate by opening a text file called front_door.txt.
>
> **[3:28](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=208)** The open function returns a file object, which is bound to the variable name front door at line 7.
>
> **[3:35](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=215)** Let's take a quick look at that text file, which is included in the same directory of the exercise files.
>
> **[3:43](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=223)** This file contains the things that are outside my front door.
>
> **[3:46](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=226)** I currently have a welcome mat and a doorbell, but sadly, no pizza delivery person.
>
> **[3:53](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=233)** Looking back at the script after opening the text file, the if statement at line 9 checks whether or not the string delivery person exists in that front_door text file.
>
> **[4:05](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=245)** If it does, then I give a shout of joy announcing that the pizza's here and set hunger to False.
>
> **[4:11](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=251)** However, if the delivery person is not at the front door, then I'll say in a very hungry voice, "Not yet..."
>
> **[4:20](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=260)** After that, I'll complete the loop by closing the front door, which is simulated by closing the file object at line 16.
>
> **[4:28](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=268)** If the pizza had arrived and I'm no longer hungry, then the while loop will exit after closing the door.
>
> **[4:34](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=274)** Otherwise, as we saw earlier, the while loop will execute again and again and again and again and again as I keep on checking.
>
> **[4:43](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=283)** Now to execute this script from within the directory it lives in so that it can find the front_door text file, I'll right click on its parent directory within VS Code, I'll select the open and integrated terminal option, and then I'll call Python to run the script.
>
> **[5:03](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=303)** We can see that the while loop is running over and over as fast as it can to check for the pizza to arrive.
>
> **[5:10](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=310)** Since that routine is running nonstop, we are basically spending an entire processor core just to check if the pizza person is downstairs, which is not very efficient.
>
> **[5:21](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=321)** We can make that pizza person arrive by modifying the front_door text file to have delivery person in it.
>
> **[5:28](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=328)** As soon as that change is saved to file, the polling routine will see that they've arrived.
>
> **[5:34](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=334)** I'll announce that the pizza's here and the while loop will finish up and exit.
>
> **[5:38](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=338)** This example demonstrates why you should not use a free running while loop to implement a polling routine.
>
> **[5:45](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=345)** When you create a polling routine, it's usually a good idea to include some sort of delay mechanism in the loop to keep it from running nonstop, which can waste CPU resources and prevent other things from running, or at least slow them down.
>
> **[6:01](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=361)** In Python, we can do that by importing the time module at the top of our script.
>
> **[6:07](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=367)** Then we'll add the time.sleep function at the very end of this while loop.
>
> **[6:14](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=374)** This will cause the program to wait for one second when it gets to that line.
>
> **[6:18](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=378)** After I close the front door, I'll rest for one second before going to check again.
>
> **[6:24](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=384)** Now, before running that script, let's remove the pizza delivery person from the front_door text file, then call Python to execute that script again from within the terminal.
>
> **[6:36](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=396)** It's not totally obvious just looking at the output, but now the while loop doesn't run nonstop at full speed.
>
> **[6:43](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=403)** It's only checking for the pizza person to arrive once every second, and by doing that, we are not overwhelming the CPU.
>
> **[6:51](https://www.linkedin.com/learning/programming-concepts-for-python/polling?u=76281980&t=411)** The reason that works is because the sleep function uses a mechanism called an interrupt, which allows the program to sleep in a way that doesn't waste normal CPU cycles, and then it wakes up after a second to continue on executing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), implements (2), interface (1), module (1)
> **CLI Commands:** python (5), find (1), make (1)
> **Code Identifiers:** front_door (5)
> **Env Vars:** cpu (3)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** open the (1), click on (1), select the (1)
> **File Paths:** front_door.txt (1)
> **Cross-References:** as we saw (1)

#### Event-driven programming
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=0)** - Using the polling method to check for the pizza delivery wasn't very efficient.
>
> **[0:04](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=4)** And it was pretty exhausting running up and down those stairs.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=7)** Luckily, there's a better way to wait for the pizza guy: event-driven programming.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=12)** I can just lay here on the bed waiting for an event to occur.
>
> **[0:15](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=15)** And when that event finally does occur, it'll interrupt my waiting state, and only then will I have to get up off the bed to handle that event with the appropriate action.
>
> **[0:25](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=25)** There are a lot of different types of events that I'm prepared to handle.
>
> **[0:27](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=27)** One example is a timer event.
>
> **[0:29](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=29)** The pizza company promises that they'll deliver the pizza in 30 minutes or less, and I've decided to give them a few minutes of slack, so I've set a timer for 45 minutes.
>
> **[0:38](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=38)** And if I haven't received my pizza by then, I should probably give them a call to see if there's a problem with the order.
>
> **[0:44](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=44)** (timer ringing) Now that the timer event has interrupted my waiting state, I should handle it like I said I would by giving the pizza company a call.
>
> **[0:59](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=59)** Hi, I'm still waiting on that pizza.
>
> **[1:02](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=62)** Ah, okay. See you soon.
>
> **[1:06](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=66)** Stuck in traffic.
>
> **[1:07](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=67)** Well, now that I'm done handling that timer event, I can return back to my waiting state.
>
> **[1:17](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=77)** In addition to using timers to trigger events, I can also respond to user-generated events like a button press, (doorbell ringing) Ah, the doorbell. That must be the pizza.
>
> **[1:28](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=88)** Now, I'll handle that event by going to get the pizza.
>
> **[1:36](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=96)** So I'll go down the stairs, but only once this time.
>
> **[1:41](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=101)** And now I can meet the pizza guy.
>
> **[1:42](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=102)** (phone ringing) Oh, I hear my phone ringing upstairs.
>
> **[1:46](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=106)** Normally, I'd answer my phone right away, but I'm in the middle of handling this doorbell-ringing event.
>
> **[1:51](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=111)** As an event-driven program, I can only handle one event at a time, and I'll do so in the order that those events occur.
>
> **[1:58](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=118)** That means it's very important that I don't take too long to answer the door.
>
> **[2:01](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=121)** Otherwise, I might miss that phone call.
>
> **[2:03](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=123)** So without further ado, hey, you made it.
>
> **[2:08](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=128)** Here, keep the change.
>
> **[2:15](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=135)** And now I can answer the phone.
>
> **[2:17](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=137)** Hey Vern, how's it going?
>
> **[2:20](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=140)** To demonstrate that scenario in Python, we'll use this example script which represents a brief study in handling those life events.
>
> **[2:28](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=148)** The first thing you may notice at the top of this script on line three is that we're importing a new library we haven't seen before in this course named asyncio.
>
> **[2:39](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=159)** This asyncio library provides mechanisms to write concurrent code that can execute asynchronously, and we'll be using it to schedule a few events for this demonstration.
>
> **[2:52](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=172)** After importing the asyncio library, the following lines 5 through 16 define three functions that serve as our event handlers.
>
> **[3:03](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=183)** The term event handler refers to the procedure or code that our program will execute when a specific event occurs.
>
> **[3:12](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=192)** The doorbell function at line 10 uses print statements to represent the doorbell ringing because the pizza delivery person has arrived and me opening the door to get the pizza.
>
> **[3:23](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=203)** The phone call function at line 14 represents me receiving an incoming phone call and answering it.
>
> **[3:29](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=209)** And the alarm function up top at line five represents my alarm waking me up to call the pizza company to ask where my pizza is.
>
> **[3:38](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=218)** This alarm function is slightly different than the other two event handlers, because after performing its action, line eight schedules the alarm function to be called again one second later.
>
> **[3:50](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=230)** Now, hitting the snooze alarm to go off again one second later may not make sense in real life, but we'll be working with time increments of seconds throughout this programming example to keep the video reasonably short.
>
> **[4:04](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=244)** Below those three functions at line 18, we'll use asyncio's get_event_loop function to get a reference to the event loop for this program.
>
> **[4:15](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=255)** This event loop is central to any program using the asyncio library, and can be used to manage asynchronous tasks among other things.
>
> **[4:26](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=266)** After getting a reference to the event loop at line 18, the next three lines of this program use the call_later function to schedule three events to occur in the near future.
>
> **[4:37](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=277)** The alarm function is scheduled to be executed one second after this program starts.
>
> **[4:42](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=282)** On the next line, the doorbell is scheduled to be run four seconds into the program execution.
>
> **[4:48](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=288)** And finally, at line 21, we schedule an incoming phone call to occur five seconds into running this program.
>
> **[4:57](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=297)** In each of these three instances of the call_later function, the first argument is the number of seconds to wait, and the second argument passes the event handler function itself.
>
> **[5:09](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=309)** Notice that these references to alarm, doorbell, and phone call are all just function names and do not have open and closed parentheses right after them, as if executing those functions.
>
> **[5:21](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=321)** In this case, what we're passing as an input argument are those function objects.
>
> **[5:27](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=327)** Remember that in Python, everything is an object, even functions.
>
> **[5:33](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=333)** Passing an object representing a function like this is something that's often referred to as a callback, which is a reference to executable code that's passed as an argument.
>
> **[5:44](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=344)** In this example program, we're using callback functions to act as our event handlers.
>
> **[5:50](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=350)** Down near the bottom of this script, line 24 calls the run_forever function on the event loop which will start the loop.
>
> **[5:58](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=358)** And then at the very end of the program after that loop has been stopped, line 27 closes everything down.
>
> **[6:06](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=366)** Now, let's see this program in action by clicking the Run arrow.
>
> **[6:11](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=371)** We can see that the alarm function is being called every second, waking me up to call the pizza company.
>
> **[6:17](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=377)** Then four seconds into the program, the doorbell rings for the pizza, and five seconds in the phone rings upstairs.
>
> **[6:24](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=384)** Now, since we never explicitly stopped the event loop, this program will continue running forever.
>
> **[6:30](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=390)** Having my alarm continuing to wake me up every second will get annoying quickly, and the only way to stop this program now is to press Ctrl+C to interrupt the process.
>
> **[6:41](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=401)** Let's revisit the code to make sure we actually stop the event loop.
>
> **[6:46](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=406)** We can safely end this event-driven adventure once I have my pizza, which happens at line 11 after the doorbell rings.
>
> **[6:54](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=414)** So at the end of that doorbell function, I'll call loop.stop to stop the event loop.
>
> **[7:02](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=422)** Now that we have something to stop the loop, let's run the program again.
>
> **[7:07](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=427)** We see the wake up alarm go off every second, just like before, and after four seconds, the doorbell rings, I get my pizza, and then the event loop stops.
>
> **[7:17](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=437)** Notice that since the event loop stopped immediately after the doorbell rang, which occurs four seconds into the program, we never received the phone call which was scheduled to occur five seconds into the program.
>
> **[7:31](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=451)** Let's revisit the code one more time to see what happens if we delay answering the door so the program runs longer.
>
> **[7:40](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=460)** To do that, we'll import the time module at the top of this program.
>
> **[7:44](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=464)** Then we'll use the time module's sleep function to pause the program for three seconds right after the doorbell rings.
>
> **[7:52](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=472)** This represents me taking my sweet time to go downstairs and get my pizza after hearing the doorbell.
>
> **[7:59](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=479)** since the doorbell event handler is scheduled to be called four seconds into the program and this sleep function will delay it for another three seconds, now the program should take at least seven total seconds to complete.
>
> **[8:13](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=493)** So does that mean the phone call handler will be executed five seconds into the program?
>
> **[8:19](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=499)** Let's run it and find out.
>
> **[8:22](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=502)** We see the same series of wake-up alarms as before, then ding-dong, followed by a three-second wait.
>
> **[8:28](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=508)** Then I open the door, get the pizza, and the event loop stops.
>
> **[8:33](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=513)** Even though this program ran for seven seconds, the phone call scheduled to occur five seconds in never happened because it was being blocked by the doorbell function, which was in a sleeping state before it stopped the event loop.
>
> **[8:48](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=528)** This shows how event handlers that take a long time to finish can block or prevent other event handlers from executing.
>
> **[8:55](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=535)** Now, there are ways to work around this limitation by using concurrent programming mechanisms, but that's a more advanced topic beyond the scope of this course.
>
> **[9:04](https://www.linkedin.com/learning/programming-concepts-for-python/event-driven-programming?u=76281980&t=544)** If you want to learn more about that, I encourage you to take our series of courses on parallel and concurrent programming with Python.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), let (5), module (2), finally, (1), case, (1)
> **CLI Commands:** python (3), make (2), find (1)
> **Code Identifiers:** call_later (2), get_event_loop (1), run_forever (1)
> **Definitions:** is a  (2), refers to (1), is an  (1)
> **Tools:** slack (1)
> **UI Navigation:** open the (1)
> **Analogies:** just like (1)
> **Speakers:** - using (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=0)** - Thanks for watching this course.
>
> **[0:02](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=2)** We had a ton of fun making these videos, and we hope you enjoyed watching them and learned a few things along the way.
>
> **[0:07](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=7)** If you'd like to learn more about the concepts we covered here, I encourage you to play around with the exercise files.
>
> **[0:12](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=12)** See how you can expand the examples.
>
> **[0:14](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=14)** - Or even better, try to break them.
>
> **[0:16](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=16)** Taking the time to explore and push the boundaries of different languages will make you a smarter programmer who really understands what's going on under the hood.
>
> **[0:24](https://www.linkedin.com/learning/programming-concepts-for-python/next-steps?u=76281980&t=24)** - [Both] Happy programming.

> [!info]- Semantic Content
>
> **Speakers:** - thanks (1), - or (1), - [both] (1)
> **CLI Commands:** make (1)
> **Cross-References:** we covered (1)
> **Exercise Files:** exercise files (1)


## Instructor

- [[Olivia Chiu Stone]]
- [[Barron Stone]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/programming-concepts-python-2702196/codespaces)

## Skills Covered

- Python (Programming Language)
- Programming Concepts

## Path Context

### In [[A Quick Start Guide to Programming in Python]]
← [[Python Essential Training]] | **4 of 6** | [[Hands-On Introduction- Python]] →

### In [[Become a Software Developer]]
← [[Learning Python (2021)]] | **8 of 12** | [[Learning Java 11]] →

## Appears In

- [[A Quick Start Guide to Programming in Python]]
- [[Become a Software Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)